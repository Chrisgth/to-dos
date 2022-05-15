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
        _projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.newProject(false)
        projectPopup.classList.toggle('active')
    })
    formPopup.appendChild(formCloseButton)
    formPopup.appendChild(formButton)

    body.appendChild(projectPopup)

    if ( localStorage.length !== 0 ) {
        let storage = JSON.parse(localStorage.getItem('projectStorage'))
        for (let i=0; i<storage.length; i++) {
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
    const newToDo = () => {
        const allToDos = document.getElementById('allToDos')
        const toDoForm = document.getElementById('toDoForm')
        
        let toDo = (0,_toDoFactory__WEBPACK_IMPORTED_MODULE_1__["default"])(toDoForm[0].value, toDoForm[1].value, toDoForm[2].value)
        currentProject.todos.push(toDo)
        store()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFB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RUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJvQjtBQUNzQjtBQUNNO0FBQ0E7QUFDWDs7QUFFckMsd0RBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kb3MvLi9zcmMvcHJvamVjdEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG9zLy4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvcy8uL3NyYy90b0RvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kb3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG9zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kb3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcInRyYXNoLWNhbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkb3duLWFycm93LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcInBpbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LCBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5ib2R5LCBodG1sLCB0ZXh0YXJlYSwgaW5wdXQsIGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDE5ZnIgLyAxZnIgM2ZyO1xcbn1cXG5cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIGVuZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgd2hpdGU7XFxufVxcbmhlYWRlciA+IHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHdoaXRlO1xcbn1cXG5idXR0b24sXFxubGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbiNwcm9qZWN0UG9wdXAge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4jcHJvamVjdFBvcHVwLmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcbiNmb3JtUG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDBDQjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxubWFpbiA+ICoge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI3Byb2plY3RPdmVydmlldyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XFxuICAgIG1pbi13aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4jcHJvamVjdE92ZXJ2aWV3ID4gdGV4dGFyZWEge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4jcHJvamVjdE92ZXJ2aWV3ID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuI3RvRG9Gb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XFxufVxcblxcbiN0b0RvRGVzY3JpcHRpb24ge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxufVxcbiNhbGxUb0RvcyA+IGRpdiA+IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDcwJTtcXG59XFxuI2FsbFRvRG9zID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jdG9Eb0Zvcm0ge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIG1pbi13aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4jdG9Eb0Zvcm0gPiBkaXYgPiB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbiN0b0RvRm9ybSA+IGRpdiA+IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbiN0b0RvRm9ybSA+IGRpdiA+IGxhYmVsIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuLmluYWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4jbmV3UHJvamVjdCwgbWFpbiA+IGJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5tYWluID4gYnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jbmV3UHJvamVjdDpob3ZlciwgbWFpbiA+IGJ1dHRvbjpob3ZlciwgI2Zvcm1Qb3B1cCA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxufVxcblxcbiNhbGxQcm9qZWN0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMTZweDsgICBcXG59XFxuXFxuI2FsbFByb2plY3RzID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMgPiBkaXYgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMgPiBkaXYgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMgPiBkaXYgPiBsaSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxOXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI2FsbFByb2plY3RzID4gZGl2ID4gbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbn1cXG5cXG4jZm9ybVBvcHVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtaW4td2lkdGg6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuI2Zvcm1Qb3B1cCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgb3JkZXI6IDI7XFxufVxcbiNmb3JtUG9wdXAgPiBkaXYgPiB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIG1pbi1oZWlnaHQ6IDhyZW07XFxufVxcbiNmb3JtUG9wdXAgPiBkaXYgPiBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4jZm9ybVBvcHVwID4gZGl2ID4gbGFiZWwge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG4jZm9ybUNsb3NlQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgb3JkZXI6IDE7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG4jcHJvamVjdEZvcm1TdWJtaXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgb3JkZXI6IDM7XFxufVxcblxcbiNhbGxUb0RvcyB7XFxuICAgIG1pbi13aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEMENCO1xcbn1cXG5cXG4jYWxsVG9Eb3MgPiBkaXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNhbGxUb0RvcyA+IGRpdiA+IGZvcm0gPiBpbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jYWxsVG9Eb3MgPiBkaXYgPiBmb3JtID4gdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgbWluLWhlaWdodDogNHJlbTtcXG59XFxuI2FsbFRvRG9zPmRpdj5idXR0b246bnRoLWNoaWxkKDMpIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogbm9uZTtcXG4gICAgcGFkZGluZzogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgyNiUpIHNhdHVyYXRlKDMyOCUpIGh1ZS1yb3RhdGUoMjI1ZGVnKSBicmlnaHRuZXNzKDExNCUpIGNvbnRyYXN0KDEwMCUpO1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcbiNhbGxUb0Rvcz5kaXY+YnV0dG9uOm50aC1jaGlsZCg0KSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IG5vbmU7XFxuICAgIHBhZGRpbmc6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMjYlKSBzYXR1cmF0ZSgzMjglKSBodWUtcm90YXRlKDIyNWRlZykgYnJpZ2h0bmVzcygxMTQlKSBjb250cmFzdCgxMDAlKTtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4jYWxsVG9Eb3M+ZGl2PmJ1dHRvbjpudGgtY2hpbGQoNSkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luOiBub25lO1xcbiAgICBwYWRkaW5nOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDI2JSkgc2F0dXJhdGUoMzI4JSkgaHVlLXJvdGF0ZSgyMjVkZWcpIGJyaWdodG5lc3MoMTE0JSkgY29udHJhc3QoMTAwJSk7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG59XFxuI2FsbFRvRG9zPmRpdj5mb3JtPmlucHV0OmRpc2FibGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuI2FsbFRvRG9zPmRpdj5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcblxcbiNhbGxUb0RvcyA+IGRpdiA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7O0FBR0E7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FB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QUNiLFlBQVk7SUFDWixpR0FBaUc7SUFDakcsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUVBQThDO0lBQzlDLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGlHQUFpRztJQUNqRyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuYm9keSwgaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuYm9keSwgaHRtbCwgdGV4dGFyZWEsIGlucHV0LCBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxOWZyIC8gMWZyIDNmcjtcXG59XFxuXFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBlbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlO1xcbn1cXG5oZWFkZXIgPiBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3NpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB3aGl0ZTtcXG59XFxuYnV0dG9uLFxcbmxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4jcHJvamVjdFBvcHVwIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuI3Byb2plY3RQb3B1cC5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4jZm9ybVBvcHVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEM0QwQ0I7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbm1haW4gPiAqIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiNwcm9qZWN0T3ZlcnZpZXcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuI3Byb2plY3RPdmVydmlldyA+IHRleHRhcmVhIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuI3Byb2plY3RPdmVydmlldyA+IGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcbiN0b0RvRm9ybSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4jdG9Eb0Rlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbn1cXG4jYWxsVG9Eb3MgPiBkaXYgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxufVxcbiNhbGxUb0RvcyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI3RvRG9Gb3JtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuI3RvRG9Gb3JtID4gZGl2ID4gdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4jdG9Eb0Zvcm0gPiBkaXYgPiBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG4jdG9Eb0Zvcm0gPiBkaXYgPiBsYWJlbCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcbi5pbmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuXFxuI25ld1Byb2plY3QsIG1haW4gPiBidXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxubWFpbiA+IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuI25ld1Byb2plY3Q6aG92ZXIsIG1haW4gPiBidXR0b246aG92ZXIsICNmb3JtUG9wdXAgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbn1cXG5cXG4jYWxsUHJvamVjdHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7ICAgXFxufVxcblxcbiNhbGxQcm9qZWN0cyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FsbFByb2plY3RzID4gZGl2ID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI2FsbFByb2plY3RzID4gZGl2ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG59XFxuXFxuI2FsbFByb2plY3RzID4gZGl2ID4gbGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWluLWhlaWdodDogMTlweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbiNhbGxQcm9qZWN0cyA+IGRpdiA+IGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0MTtcXG59XFxuXFxuI2Zvcm1Qb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWluLXdpZHRoOiAzMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcbiNmb3JtUG9wdXAgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG9yZGVyOiAyO1xcbn1cXG4jZm9ybVBvcHVwID4gZGl2ID4gdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBtaW4taGVpZ2h0OiA4cmVtO1xcbn1cXG4jZm9ybVBvcHVwID4gZGl2ID4gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg3QjdGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuI2Zvcm1Qb3B1cCA+IGRpdiA+IGxhYmVsIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuI2Zvcm1DbG9zZUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIG9yZGVyOiAxO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuI3Byb2plY3RGb3JtU3VibWl0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgIG9yZGVyOiAzO1xcbn1cXG5cXG4jYWxsVG9Eb3Mge1xcbiAgICBtaW4td2lkdGg6IDgwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDBDQjtcXG59XFxuXFxuI2FsbFRvRG9zID4gZGl2e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYWxsVG9Eb3MgPiBkaXYgPiBmb3JtID4gaW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODdCN0Y7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2FsbFRvRG9zID4gZGl2ID4gZm9ybSA+IHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4N0I3RjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIG1pbi1oZWlnaHQ6IDRyZW07XFxufVxcbiNhbGxUb0Rvcz5kaXY+YnV0dG9uOm50aC1jaGlsZCgzKSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCh0cmFzaC1jYW4ucG5nKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogbm9uZTtcXG4gICAgcGFkZGluZzogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgyNiUpIHNhdHVyYXRlKDMyOCUpIGh1ZS1yb3RhdGUoMjI1ZGVnKSBicmlnaHRuZXNzKDExNCUpIGNvbnRyYXN0KDEwMCUpO1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxufVxcbiNhbGxUb0Rvcz5kaXY+YnV0dG9uOm50aC1jaGlsZCg0KSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChkb3duLWFycm93LnBuZykgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IG5vbmU7XFxuICAgIHBhZGRpbmc6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMjYlKSBzYXR1cmF0ZSgzMjglKSBodWUtcm90YXRlKDIyNWRlZykgYnJpZ2h0bmVzcygxMTQlKSBjb250cmFzdCgxMDAlKTtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4jYWxsVG9Eb3M+ZGl2PmJ1dHRvbjpudGgtY2hpbGQoNSkge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwocGluLnBuZykgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IG5vbmU7XFxuICAgIHBhZGRpbmc6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMjYlKSBzYXR1cmF0ZSgzMjglKSBodWUtcm90YXRlKDIyNWRlZykgYnJpZ2h0bmVzcygxMTQlKSBjb250cmFzdCgxMDAlKTtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG4jYWxsVG9Eb3M+ZGl2PmZvcm0+aW5wdXQ6ZGlzYWJsZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWluLWhlaWdodDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4jYWxsVG9Eb3M+ZGl2PnAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG59XFxuXFxuI2FsbFRvRG9zID4gZGl2ID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiXG4vLyBsb2FkcyB0aGUgcGFnZSB3aXRoIGZ1bGwgZnVuY3Rpb25hbGl0eVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gICAgLy8gaHRtbCBib2lsZXJwbGF0ZVxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IHBhZ2VMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgICBwYWdlTG9nby50ZXh0Q29udGVudCA9ICdNeVRvRG9MaXN0J1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChwYWdlTG9nbylcblxuICAgIGNvbnN0IG5ld1RvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnN0IGFsbFRvRG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgcHJvamVjdE92ZXJ2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgIGZvciggbGV0IGk9MDsgaTwzOyBpKysgKSB7XG4gICAgICAgIGxldCB0b0RvRm9ybUlucHV0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGV0IHRvRG9Gb3JtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGxldCB0b0RvRm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4gICAgICAgIGlmIChpPT09MCkge1xuICAgICAgICAgICAgdG9Eb0Zvcm1JbnB1dC5pZCA9ICd0b0RvTmFtZSdcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQubmFtZSA9ICd0b0RvTmFtZSdcbiAgICAgICAgICAgIHRvRG9Gb3JtTGFiZWwuaHRtbEZvciA9ICd0b0RvTmFtZSdcbiAgICAgICAgICAgIHRvRG9Gb3JtTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnXG4gICAgICAgIH0gZWxzZSBpZiAoaT09PTEpIHtcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICAgICAgICB0b0RvRm9ybUlucHV0LmlkID0gJ3RvRG9EZXNjcmlwdGlvbidcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQubmFtZSA9ICd0b0RvRGVzY3JpcHRpb24nXG4gICAgICAgICAgICB0b0RvRm9ybUxhYmVsLmh0bWxGb3IgPSAndG9Eb0Rlc2NyaXB0aW9uJyBcbiAgICAgICAgICAgIHRvRG9Gb3JtTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nICAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKGk9PT0yKSB7XG4gICAgICAgICAgICB0b0RvRm9ybUlucHV0LmlkID0gJ3RvRG9EdWUnXG4gICAgICAgICAgICB0b0RvRm9ybUlucHV0Lm5hbWUgPSAndG9Eb0R1ZSdcbiAgICAgICAgICAgIHRvRG9Gb3JtSW5wdXQudHlwZSA9ICdkYXRlJ1xuICAgICAgICAgICAgdG9Eb0Zvcm1MYWJlbC5odG1sRm9yID0gJ3RvRG9EdWUnXG4gICAgICAgICAgICB0b0RvRm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJ1xuICAgICAgICB9XG4gICAgICAgIHRvRG9Gb3JtSW5wdXREaXYuYXBwZW5kQ2hpbGQodG9Eb0Zvcm1MYWJlbClcbiAgICAgICAgdG9Eb0Zvcm1JbnB1dERpdi5hcHBlbmRDaGlsZCh0b0RvRm9ybUlucHV0KVxuICAgICAgICB0b0RvRm9ybS5hcHBlbmRDaGlsZCh0b0RvRm9ybUlucHV0RGl2KVxuICAgIH1cblxuICAgIG5ld1Rhc2sudGV4dENvbnRlbnQgPSAnQWRkIG5ldyB0YXNrJ1xuICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChuZXdUYXNrLnRleHRDb250ZW50ID09PSAnQWRkIG5ldyB0YXNrJykge1xuICAgICAgICAgICAgdG9Eb0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuICAgICAgICAgICAgbmV3VG9Eby5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXG4gICAgICAgICAgICBuZXdUYXNrLnRleHRDb250ZW50ID0gJ0Nsb3NlIHRhc2sgY3JlYXRpb24nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0RvRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXG4gICAgICAgICAgICBuZXdUb0RvLmNsYXNzTGlzdC50b2dnbGUoJ2luYWN0aXZlJylcbiAgICAgICAgICAgIG5ld1Rhc2sudGV4dENvbnRlbnQgPSAnQWRkIG5ldyB0YXNrJyAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgbmV3VG9Eby50ZXh0Q29udGVudCA9ICdDcmVhdGUgVGFzaydcbiAgICBuZXdUb0RvLmlkID0gJ25ld1RvRG8nXG4gICAgbmV3VG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RNYW5hZ2VyLnByb2plY3RTdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBjcmVhdGUgYSBwcm9qZWN0IGZpcnN0JylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLm5ld1RvRG8oKTtcbiAgICB9KVxuICAgIGFsbFRvRG9zLmlkID0gJ2FsbFRvRG9zJ1xuICAgIHRvRG9Gb3JtLmlkID0gJ3RvRG9Gb3JtJ1xuXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuXG4gICAgcHJvamVjdFRpdGxlLnZhbHVlID0gJ1Byb2plY3QnXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnZhbHVlID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nXG5cbiAgICBwcm9qZWN0VGl0bGUuaWQgPSAncHJvamVjdFRpdGxlJ1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5pZCA9ICdwcm9qZWN0RGVzY3JpcHRpb24nXG4gICAgcHJvamVjdE92ZXJ2aWV3LmlkID0gJ3Byb2plY3RPdmVydmlldydcblxuICAgIHByb2plY3RPdmVydmlldy50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE92ZXJ2aWV3J1xuXG4gICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcHJvamVjdE1hbmFnZXIucHJvamVjdFRpdGxlRWRpdG9yKVxuICAgIHByb2plY3REZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHByb2plY3RNYW5hZ2VyLnByb2plY3REZXNjcmlwdGlvbkVkaXRvcilcblxuICAgIHByb2plY3RPdmVydmlldy5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpXG4gICAgcHJvamVjdE92ZXJ2aWV3LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbilcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdE92ZXJ2aWV3KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3VGFzaylcbiAgICBtYWluLmFwcGVuZENoaWxkKHRvRG9Gb3JtKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmV3VG9EbylcbiAgICBtYWluLmFwcGVuZENoaWxkKGFsbFRvRG9zKVxuXG4gICAgdG9Eb0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuICAgIG5ld1RvRG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdFBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgfSlcblxuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnXG4gICAgbmV3UHJvamVjdC5pZCA9ICduZXdQcm9qZWN0J1xuICAgIGFsbFByb2plY3RzLmlkID0gJ2FsbFByb2plY3RzJ1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdClcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFsbFByb2plY3RzKVxuICAgIHNpZGViYXIuaWQgPSAnc2lkZWJhcidcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcilcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pXG5cbiAgICAvLyBoaWRkZW4gcG9wLXVwIG92ZXJsYXksIG1lYW50IHRvIGFjdGl2YXRlIHdoZW4gbmV3IHByb2plY3QgYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBjb25zdCBwcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGZvcm1Qb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHByb2plY3RQb3B1cC5pZCA9ICdwcm9qZWN0UG9wdXAnXG4gICAgZm9ybVBvcHVwLmlkID0gJ2Zvcm1Qb3B1cCdcbiAgICBwcm9qZWN0UG9wdXAuYXBwZW5kQ2hpbGQoZm9ybVBvcHVwKVxuXG4gICAgZm9yKCBsZXQgaT0wOyBpPDI7IGkrKyApIHtcbiAgICAgICAgbGV0IGZvcm1JbnB1dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxldCBmb3JtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIGxldCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cbiAgICAgICAgaWYgKGk9PT0wKSB7XG4gICAgICAgICAgICBmb3JtSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnXG4gICAgICAgICAgICBmb3JtSW5wdXQubmFtZSA9ICdwcm9qZWN0TmFtZSdcbiAgICAgICAgICAgIGZvcm1MYWJlbC5odG1sRm9yID0gJ3Byb2plY3ROYW1lJ1xuICAgICAgICAgICAgZm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZSdcbiAgICAgICAgfSBlbHNlIGlmIChpPT09MSkge1xuICAgICAgICAgICAgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgZm9ybUlucHV0LmlkID0gJ3Byb2plY3REZXNjcmlwdGlvbidcbiAgICAgICAgICAgIGZvcm1JbnB1dC5uYW1lID0gJ3Byb2plY3REZXNjcmlwdGlvbidcbiAgICAgICAgICAgIGZvcm1MYWJlbC5odG1sRm9yID0gJ3Byb2plY3REZXNjcmlwdGlvbicgXG4gICAgICAgICAgICBmb3JtTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBEZXNjcmlwdGlvbicgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZm9ybUlucHV0RGl2LmFwcGVuZENoaWxkKGZvcm1MYWJlbClcbiAgICAgICAgZm9ybUlucHV0RGl2LmFwcGVuZENoaWxkKGZvcm1JbnB1dClcbiAgICAgICAgZm9ybVBvcHVwLmFwcGVuZENoaWxkKGZvcm1JbnB1dERpdilcbiAgICB9XG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgZm9ybUNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBmb3JtQ2xvc2VCdXR0b24uaWQgPSAnZm9ybUNsb3NlQnV0dG9uJ1xuICAgIGZvcm1DbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJ1xuICAgIGZvcm1DbG9zZUJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICBmb3JtQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH0pXG4gICAgZm9ybUJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICBmb3JtQnV0dG9uLmlkID0gJ3Byb2plY3RGb3JtU3VibWl0J1xuICAgIGZvcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnXG4gICAgZm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGZvcm1Qb3B1cFswXS52YWx1ZSA9PT0gJycgfHwgZm9ybVBvcHVwWzFdLnZhbHVlID09PSAnJyl7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGRvIG5vdCBsZWF2ZSBlbXB0eSBmaWVsZHMnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLm5ld1Byb2plY3QoZmFsc2UpXG4gICAgICAgIHByb2plY3RQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH0pXG4gICAgZm9ybVBvcHVwLmFwcGVuZENoaWxkKGZvcm1DbG9zZUJ1dHRvbilcbiAgICBmb3JtUG9wdXAuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbilcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdFBvcHVwKVxuXG4gICAgaWYgKCBsb2NhbFN0b3JhZ2UubGVuZ3RoICE9PSAwICkge1xuICAgICAgICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RTdG9yYWdlJykpXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxzdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5uZXdQcm9qZWN0KHRydWUsIGkpXG4gICAgICAgIH1cbiAgICB9IFxufSIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlZCBmb3IgdGhlIHB1cnBvc2Ugb2Ygc3RvcmluZyB0b2RvcyBjcmVhdGVkIHdpdGggdGhlIHRvZG9mYWN0b3J5IGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeShuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIGxldCB0b2RvcyA9IFtdXG4gICAgbGV0IHByb2plY3ROYW1lID0gbmFtZVxuICAgIGxldCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvZG9zLFxuICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLFxuICAgIH1cbn0iLCJpbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSBcIi4vcHJvamVjdEZhY3RvcnlcIlxuaW1wb3J0IHRvRG9GYWN0b3J5IGZyb20gXCIuL3RvRG9GYWN0b3J5XCJcbmV4cG9ydCBjb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBzdG9yZSA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RTdG9yYWdlJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdFN0b3JhZ2UpKVxuICAgIH1cblxuICAgIGxldCBwcm9qZWN0U3RvcmFnZSA9IFtdXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gMFxuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgbGV0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdFN0b3JhZ2UnKVxuICAgICAgICBwcm9qZWN0U3RvcmFnZSA9IEpTT04ucGFyc2Uoc3RvcmFnZSlcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgfVxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSAoc3RvcmFnZUNoZWNrLCBzdG9yYWdlSXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxQcm9qZWN0cycpXG4gICAgICAgIGNvbnN0IGFsbFRvRG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFRvRG9zJylcbiAgICAgICAgY29uc3QgZm9ybVBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Qb3B1cCcpXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKVxuICAgICAgICBjb25zdCBwcm9qZWN0RGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0RGVzY3JpcHRpb24nKVxuXG4gICAgICAgIGxldCBwcm9qZWN0ID0gMFxuXG4gICAgICAgIGlmIChzdG9yYWdlQ2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoZm9ybVBvcHVwWzBdLnZhbHVlLCBmb3JtUG9wdXBbMV0udmFsdWUpXG4gICAgICAgICAgICBwcm9qZWN0U3RvcmFnZS5wdXNoKHByb2plY3QpXG4gICAgICAgICAgICBzdG9yZSgpXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCldXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RTdG9yYWdlW3N0b3JhZ2VJdGVtXVxuICAgICAgICAgICAgcHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdE5hbWVcbiAgICAgICAgcHJvamVjdERlc2MudmFsdWUgPSBjdXJyZW50UHJvamVjdC5wcm9qZWN0RGVzY3JpcHRpb25cblxuICAgICAgICBjb25zdCBhbGxQcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IGFsbFByb2plY3RzTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGNvbnN0IHByb2plY3RSZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gICAgICAgIHByb2plY3RSZW1vdmUudGV4dENvbnRlbnQgPSAnWCdcblxuICAgICAgICBwcm9qZWN0UmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFsbFByb2plY3RzTm9kZUFycmF5ID0gQXJyYXkuZnJvbShhbGxQcm9qZWN0cy5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgYWxsUHJvamVjdHNOb2RlQXJyYXlbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KV0ucmVtb3ZlKClcbiAgICAgICAgICAgIGlmICggY3VycmVudFByb2plY3QgPT09IHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCldKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZS5zcGxpY2UocHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KSwgMSlcbiAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RTdG9yYWdlWzBdXG4gICAgICAgICAgICAgICAgc3RvcmUoKVxuICAgICAgICAgICAgICAgIGFsbFRvRG9zLmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgICAgICAgICBpZiAoIHByb2plY3RTdG9yYWdlLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gJ1Byb2plY3QnXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3REZXNjLnZhbHVlID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdE5hbWVcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGVzYy52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbiBcblxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPTA7IGk8Y3VycmVudFByb2plY3QudG9kb3MubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbFRvRG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxsVG9Eb3NGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkYXRlRHVlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0R1ZVxuICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb1RpdGxlXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NUaXRsZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0RvUmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb0V4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NGb3JtKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZChkYXRlRHVlKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvUmVtb3ZlKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRXhwYW5kKVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdC50b2Rvc1tpXS5pc1Bpbm5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3MucHJlcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZENoaWxkKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb1BpbilcblxuICAgICAgICAgICAgICAgICAgICB0b0RvUGluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvcy5wcmVwZW5kKGFsbFRvRG9zRGl2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCkgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0b0RvUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsbFRvRG9zTm9kZUFycmF5ID0gQXJyYXkuZnJvbShhbGxUb0Rvcy5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NOb2RlQXJyYXlbYWxsVG9Eb3NOb2RlQXJyYXkuaW5kZXhPZihhbGxUb0Rvc0RpdildLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3Muc3BsaWNlKGFsbFRvRG9zTm9kZUFycmF5LmluZGV4T2YoYWxsVG9Eb3NEaXYpLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRvRG9FeHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGFsbFRvRG9zRm9ybS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0Rvc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9zRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRHVlLnR5cGUgPSAnZGF0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0Rlc2NyaXB0aW9uLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0Rlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0R1ZS52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0LnRvZG9zW2ldLnRvRG9EdWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0udG9Eb0Rlc2MgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NEdWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0udG9Eb0R1ZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVEdWUudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS50b0RvVGl0bGUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zRGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zRHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaT0wOyBpPGFsbFRvRG9zRm9ybS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5yZW1vdmVDaGlsZChhbGxUb0Rvc0Zvcm0ubGFzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZS5zcGxpY2UocHJvamVjdFN0b3JhZ2UuaW5kZXhPZihwcm9qZWN0KSwgMSlcbiAgICAgICAgICAgICAgICBzdG9yZSgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICBhbGxQcm9qZWN0c0xpLnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICAgICBhbGxQcm9qZWN0c0xpLmlkID0gYHByb2plY3Qke3Byb2plY3RTdG9yYWdlLmluZGV4T2YocHJvamVjdCl9YFxuICAgICAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c0xpKVxuICAgICAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0UmVtb3ZlKVxuICAgICAgICBhbGxQcm9qZWN0cy5hcHBlbmRDaGlsZChhbGxQcm9qZWN0c0RpdilcblxuICAgICAgICBhbGxUb0Rvcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBmb3IgKCBsZXQgaT0wOyBpPGN1cnJlbnRQcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3QgYWxsVG9Eb3NMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIGFsbFRvRG9zTGkudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tpXS50b0RvVGl0bGVcbiAgICAgICAgICAgIGFsbFRvRG9zLmFwcGVuZENoaWxkKGFsbFRvRG9zTGkpICBcbiAgICAgICAgfSBcblxuICAgICAgICBhbGxQcm9qZWN0c0xpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKHByb2plY3QpXVxuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdE5hbWVcbiAgICAgICAgICAgIHByb2plY3REZXNjLnZhbHVlID0gY3VycmVudFByb2plY3QucHJvamVjdERlc2NyaXB0aW9uXG4gICAgICAgICAgICBhbGxUb0Rvcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgZm9yICggbGV0IGk9MDsgaTxjdXJyZW50UHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxUb0Rvc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsVG9Eb3NGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGRhdGVEdWUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tpXS50b0RvRHVlXG4gICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb1RpdGxlXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5hcHBlbmRDaGlsZCh0b0Rvc1RpdGxlKVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvUmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvRXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NGb3JtKVxuICAgICAgICAgICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKGRhdGVEdWUpXG4gICAgICAgICAgICAgICAgYWxsVG9Eb3NEaXYuYXBwZW5kQ2hpbGQodG9Eb1JlbW92ZSlcbiAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvRXhwYW5kKVxuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LnRvZG9zW2ldLmlzUGlubmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLnByZXBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3MuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvUGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZCh0b0RvUGluKVxuXG4gICAgICAgICAgICAgICAgdG9Eb1Bpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS5pc1Bpbm5lZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zLnByZXBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvcy5hcHBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbaV0uaXNQaW5uZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLmlzUGlubmVkKSAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9Eb1JlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFsbFRvRG9zTm9kZUFycmF5ID0gQXJyYXkuZnJvbShhbGxUb0Rvcy5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc05vZGVBcnJheVthbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KV0ucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zLnNwbGljZShhbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KSwgMSlcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHRvRG9FeHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggYWxsVG9Eb3NGb3JtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0Rvc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0R1ZS50eXBlID0gJ2RhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc0Rlc2NyaXB0aW9uLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0Rlc2NcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRHVlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbaV0udG9Eb0R1ZVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvRG9zRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS50b0RvRGVzYyA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NEdWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tpXS50b0RvRHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRHVlLnRleHRDb250ZW50ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eb3NUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2ldLnRvRG9UaXRsZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zRGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NEdWUpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGk9MDsgaTxhbGxUb0Rvc0Zvcm0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFRvRG9zRm9ybS5yZW1vdmVDaGlsZChhbGxUb0Rvc0Zvcm0ubGFzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgbmV3VG9EbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWxsVG9Eb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVG9Eb3MnKVxuICAgICAgICBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvRm9ybScpXG4gICAgICAgIFxuICAgICAgICBsZXQgdG9EbyA9IHRvRG9GYWN0b3J5KHRvRG9Gb3JtWzBdLnZhbHVlLCB0b0RvRm9ybVsxXS52YWx1ZSwgdG9Eb0Zvcm1bMl0udmFsdWUpXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRvZG9zLnB1c2godG9EbylcbiAgICAgICAgc3RvcmUoKVxuXG4gICAgICAgIGNvbnN0IGFsbFRvRG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgYWxsVG9Eb3NGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIGNvbnN0IHRvRG9zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGNvbnN0IGRhdGVEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICAgICAgICBkYXRlRHVlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0udG9Eb0R1ZVxuICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICB0b0Rvc1RpdGxlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0udG9Eb1RpdGxlXG5cbiAgICAgICAgYWxsVG9Eb3NGb3JtLmFwcGVuZENoaWxkKHRvRG9zVGl0bGUpXG5cbiAgICAgICAgY29uc3QgdG9Eb1JlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNvbnN0IHRvRG9FeHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBjb25zdCB0b0RvUGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuICAgICAgICBhbGxUb0Rvc0Rpdi5hcHBlbmRDaGlsZChhbGxUb0Rvc0Zvcm0pXG4gICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKGRhdGVEdWUpXG4gICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKHRvRG9SZW1vdmUpXG4gICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKHRvRG9FeHBhbmQpXG4gICAgICAgIGFsbFRvRG9zRGl2LmFwcGVuZENoaWxkKHRvRG9QaW4pXG5cbiAgICAgICAgYWxsVG9Eb3MuYXBwZW5kQ2hpbGQoYWxsVG9Eb3NEaXYpXG5cbiAgICAgICAgdG9Eb1Bpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0uaXNQaW5uZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYWxsVG9Eb3MucHJlcGVuZChhbGxUb0Rvc0RpdilcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0uaXNQaW5uZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLmlzUGlubmVkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGxUb0Rvcy5hcHBlbmQoYWxsVG9Eb3NEaXYpXG4gICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLmlzUGlubmVkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0udG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0uaXNQaW5uZWQpICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9yZSgpXG4gICAgICAgIH0pXG4gXG4gICAgICAgIHRvRG9SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgYWxsVG9Eb3NOb2RlQXJyYXkgPSBBcnJheS5mcm9tKGFsbFRvRG9zLmNoaWxkTm9kZXMpXG4gICAgICAgICAgICBhbGxUb0Rvc05vZGVBcnJheVthbGxUb0Rvc05vZGVBcnJheS5pbmRleE9mKGFsbFRvRG9zRGl2KV0ucmVtb3ZlKClcbiAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvcy5zcGxpY2UoYWxsVG9Eb3NOb2RlQXJyYXkuaW5kZXhPZihhbGxUb0Rvc0RpdiksIDEpXG4gICAgICAgICAgICBzdG9yZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9Eb0V4cGFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICggYWxsVG9Eb3NGb3JtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICkge1xuICAgICAgICAgICAgICAgIHRvRG9zVGl0bGUuZGlzYWJsZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9zRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb3NEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgdG9Eb3NEdWUudHlwZSA9ICdkYXRlJ1xuICAgICAgICAgICAgICAgIHRvRG9zRGVzY3JpcHRpb24udmFsdWUgPSBjdXJyZW50UHJvamVjdC50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS50b0RvRGVzY1xuICAgICAgICAgICAgICAgIHRvRG9zRHVlLnZhbHVlID0gY3VycmVudFByb2plY3QudG9kb3NbY3VycmVudFByb2plY3QudG9kb3MuaW5kZXhPZih0b0RvKV0udG9Eb0R1ZVxuXG4gICAgICAgICAgICAgICAgdG9Eb3NEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS50b0RvRGVzYyA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0b0Rvc0R1ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RTdG9yYWdlW3Byb2plY3RTdG9yYWdlLmluZGV4T2YoY3VycmVudFByb2plY3QpXS50b2Rvc1tjdXJyZW50UHJvamVjdC50b2Rvcy5pbmRleE9mKHRvRG8pXS50b0RvRHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUR1ZS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnRvZG9zW2N1cnJlbnRQcm9qZWN0LnRvZG9zLmluZGV4T2YodG9EbyldLnRvRG9UaXRsZSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RTdG9yYWdlKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NEZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICBhbGxUb0Rvc0Zvcm0uYXBwZW5kQ2hpbGQodG9Eb3NEdWUpXG4gICAgICAgICAgICAgICAgc3RvcmUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b0Rvc1RpdGxlLmRpc2FibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPTA7IGk8YWxsVG9Eb3NGb3JtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsVG9Eb3NGb3JtLnJlbW92ZUNoaWxkKGFsbFRvRG9zRm9ybS5sYXN0Q2hpbGQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0b3JlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RUaXRsZUVkaXRvciA9IChlKSA9PiB7XG4gICAgICAgIGlmICggcHJvamVjdFN0b3JhZ2UubGVuZ3RoID09PSAwICkgcmV0dXJuO1xuICAgICAgICBwcm9qZWN0U3RvcmFnZVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0ucHJvamVjdE5hbWUgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBsZXQgYWxsUHJvamVjdHNOb2RlQXJyYXkgPSBBcnJheS5mcm9tKGFsbFByb2plY3RzLmNoaWxkTm9kZXMpXG4gICAgICAgIGxldCBjdXJyZW50UHJvamVjdERpdkFycmF5ID0gQXJyYXkuZnJvbShhbGxQcm9qZWN0c05vZGVBcnJheVtwcm9qZWN0U3RvcmFnZS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0uY2hpbGROb2RlcylcbiAgICAgICAgY3VycmVudFByb2plY3REaXZBcnJheVswXS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIHN0b3JlKClcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25FZGl0b3IgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIHByb2plY3RTdG9yYWdlLmxlbmd0aCA9PT0gMCApIHJldHVybjtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2VbcHJvamVjdFN0b3JhZ2UuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnByb2plY3REZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIHN0b3JlKClcbiAgICB9XG4gXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2UsXG4gICAgICAgIG5ld1Byb2plY3QsXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBuZXdUb0RvLFxuICAgICAgICBwcm9qZWN0VGl0bGVFZGl0b3IsXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbkVkaXRvcixcbiAgICB9XG59KSgpIiwiLy8gZmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0b2RvIHdpdGggMyBkZWZpbmVkIHByb3BlcnRpZXMgYW5kIDIgcHJlZGVmaW5lZCBvbmVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RvRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICBsZXQgdG9Eb1RpdGxlID0gdGl0bGU7XG4gICAgbGV0IHRvRG9EZXNjID0gZGVzY3JpcHRpb247XG4gICAgbGV0IHRvRG9EdWUgPSBkdWVEYXRlO1xuICAgIGxldCBpc1Bpbm5lZCA9IGZhbHNlO1xuICAgIGxldCBpc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvRG9UaXRsZSxcbiAgICAgICAgdG9Eb0Rlc2MsXG4gICAgICAgIHRvRG9EdWUsXG4gICAgICAgIGlzUGlubmVkLFxuICAgICAgICBpc0NvbXBsZXRlZCxcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHRvRG9GYWN0b3J5IGZyb20gJy4vdG9Eb0ZhY3RvcnkuanMnXG5pbXBvcnQgcHJvamVjdEZhY3RvcnkgZnJvbSAnLi9wcm9qZWN0RmFjdG9yeS5qcydcbmltcG9ydCB7cHJvamVjdE1hbmFnZXJ9IGZyb20gJy4vcHJvamVjdE1hbmFnZXInO1xuaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZUxvYWQuanMnO1xuXG5wYWdlTG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==