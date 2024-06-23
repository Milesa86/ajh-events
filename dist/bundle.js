/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/game.js");

document.addEventListener('DOMContentLoaded', () => {
  const gameStart = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
  gameStart.startGame();
});

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Game; }
/* harmony export */ });
/* harmony import */ var _assets_goblin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/goblin.png */ "./src/assets/goblin.png");

class Game {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
    console.log(this.gameBoard);
    this.wins = 0;
    this.loses = 0;
    this.rounds = 0;
  }
  createGameBoard() {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.gameBoard.appendChild(cell);
      }
    }
  }
  startGame() {
    this.createGameBoard();
    this.addImg();
  }

  // eslint-disable-next-line class-methods-use-this
  handleClick(event) {
    const winsCounter = document.querySelector('.counter_win');
    const losesCounter = document.querySelector('.counter_lose');
    const roundsCounter = document.querySelector('.counter_round');
    winsCounter.textContent = `Победы: ${this.wins}`;
    losesCounter.textContent = `Промахи: ${this.loses}`;
    roundsCounter.textContent = `Количество попыток: ${this.rounds}`;
    if (event.target.className === 'aim') {
      this.wins += 1;
      winsCounter.textContent = `Победы: ${this.wins}`;
    }
    if (event.target.className !== 'aim') {
      this.loses += 1;
      losesCounter.textContent = `Промахи: ${this.loses}`;
    }
    this.rounds += 1;
    roundsCounter.textContent = `Количество попыток: ${this.rounds}`;
    if (this.loses >= 10) {
      document.body.insertAdjacentHTML('beforeEnd', `<div class="modal-container">
    <div class="modal">
      <div class="modal-message">
      You missed the goblins!
      </div>
      <button class="close-btn">
       Try again 
      </button>
    </div>
  </div>`);
      document.querySelector('.close-btn').addEventListener('click', () => {
        document.querySelector('.modal-container').remove();
      });
      this.resetGame();
    }
  }
  resetGame() {
    this.wins = 0;
    this.loses = 0;
    this.rounds = 0;
  }
  addImg() {
    const cells = this.gameBoard.querySelectorAll('.cell');
    let prevPosition = -1;
    let position;
    const goblin = document.createElement('img');
    goblin.setAttribute('src', _assets_goblin_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
    goblin.classList.add('aim');
    this.gameBoard.addEventListener('click', event => this.handleClick(event));
    this.intervalId = setInterval(() => {
      do {
        position = cells[Math.floor(Math.random() * cells.length)];
      } while (position === prevPosition);
      prevPosition = position;
      position.appendChild(goblin);
    }, 1000);
  }
}

/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    color: #999;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.game-board {\r\n    margin: 0 auto;\r\n    display: grid;\r\n    grid-template-columns: 100px 100px 100px 100px;\r\n    grid-template-rows: 100px 100px 100px 100px;\r\n    gap: 15px 15px;\r\n}\r\n\r\n.cell {\r\n    border: 1px solid rgb(99, 92, 91);\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n}\r\n\r\n.results {\r\n    display: flex;\r\n    margin-top: 30px;\r\n    gap: 50px;\r\n    font-weight: bold;\r\n    color: rgb(121, 3, 3);\r\n    text-transform: uppercase;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 24px;\r\n    \r\n}\r\n\r\n.modal-container {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.modal {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    background: #ebe5e5;\r\n    padding: 100px;\r\n    border: 1px #000;\r\n    left: 40%;\r\n    top: 20%;\r\n}\r\n\r\n.modal-message {\r\n    font-size: 32px;\r\n    font-weight: 500;\r\n    color: #5f6368;\r\n    line-height: 50px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.close-btn {\r\n    background: orange;\r\n    text-decoration: none;\r\n    color: whitesmoke;\r\n    padding: 10px 20px;\r\n    border-radius: 2px;\r\n    margin: 0 auto;\r\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":";;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,SAAS;IACT,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,aAAa;IACb,8CAA8C;IAC9C,2CAA2C;IAC3C,cAAc;AAClB;;AAEA;IACI,iCAAiC;IACjC,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,SAAS;IACT,iBAAiB;IACjB,qBAAqB;IACrB,yBAAyB;IACzB,4DAA4D;IAC5D,eAAe;;AAEnB;;AAEA;IACI,eAAe;IACf,OAAO;IACP,MAAM;IACN,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;IACd,gBAAgB;IAChB,SAAS;IACT,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;AAClB","sourcesContent":["\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    color: #999;\r\n}\r\n\r\n.container {\r\n    margin-top: 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.game-board {\r\n    margin: 0 auto;\r\n    display: grid;\r\n    grid-template-columns: 100px 100px 100px 100px;\r\n    grid-template-rows: 100px 100px 100px 100px;\r\n    gap: 15px 15px;\r\n}\r\n\r\n.cell {\r\n    border: 1px solid rgb(99, 92, 91);\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n}\r\n\r\nimg {\r\n    max-width: 100%;\r\n}\r\n\r\n.results {\r\n    display: flex;\r\n    margin-top: 30px;\r\n    gap: 50px;\r\n    font-weight: bold;\r\n    color: rgb(121, 3, 3);\r\n    text-transform: uppercase;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: 24px;\r\n    \r\n}\r\n\r\n.modal-container {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.modal {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    background: #ebe5e5;\r\n    padding: 100px;\r\n    border: 1px #000;\r\n    left: 40%;\r\n    top: 20%;\r\n}\r\n\r\n.modal-message {\r\n    font-size: 32px;\r\n    font-weight: 500;\r\n    color: #5f6368;\r\n    line-height: 50px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.close-btn {\r\n    background: orange;\r\n    text-decoration: none;\r\n    color: whitesmoke;\r\n    padding: 10px 20px;\r\n    border-radius: 2px;\r\n    margin: 0 auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/runtime/api.js":
/*!************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/runtime/api.js ***!
  \************************************************************************************************************************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(module) {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/cjs.js!./style.css */ "./.yarn/__virtual__/css-loader-virtual-638072bb3f/0/cache/css-loader-npm-7.1.2-7540f12884-15bfd90d77.zip/node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _yarn_virtual_style_loader_virtual_6e2e2d44c3_0_cache_style_loader_npm_4_0_0_e0f957f3d6_0b751b4cc8_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _yarn_virtual_css_loader_virtual_638072bb3f_0_cache_css_loader_npm_7_1_2_7540f12884_15bfd90d77_zip_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(module) {



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

/***/ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(module) {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/style-loader-virtual-6e2e2d44c3/0/cache/style-loader-npm-4.0.0-e0f957f3d6-0b751b4cc8.zip/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \********************************************************************************************************************************************************************************/
/***/ (function(module) {



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

/***/ "./src/assets/goblin.png":
/*!*******************************!*\
  !*** ./src/assets/goblin.png ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2dbd01ce16c0fa83cb67e20c73dedb66.png");

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
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
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkEsK0RBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7O1VDQS9FO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7OztBQ0F5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2V2ZW50Ly4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9ldmVudC8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovL2V2ZW50Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXZlbnQvLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtNjM4MDcyYmIzZi8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTcuMS4yLTc1NDBmMTI4ODQtMTViZmQ5MGQ3Ny56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ldmVudC8uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC02MzgwNzJiYjNmLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNy4xLjItNzU0MGYxMjg4NC0xNWJmZDkwZDc3LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ldmVudC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzQzOGQiLCJ3ZWJwYWNrOi8vZXZlbnQvLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC02ZTJlMmQ0NGMzLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS00LjAuMC1lMGY5NTdmM2Q2LTBiNzUxYjRjYzguemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ldmVudC8uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTZlMmUyZDQ0YzMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTQuMC4wLWUwZjk1N2YzZDYtMGI3NTFiNGNjOC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ldmVudC8uLy55YXJuL19fdmlydHVhbF9fL3N0eWxlLWxvYWRlci12aXJ0dWFsLTZlMmUyZDQ0YzMvMC9jYWNoZS9zdHlsZS1sb2FkZXItbnBtLTQuMC4wLWUwZjk1N2YzZDYtMGI3NTFiNGNjOC56aXAvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V2ZW50Ly4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNmUyZTJkNDRjMy8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tNC4wLjAtZTBmOTU3ZjNkNi0wYjc1MWI0Y2M4LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXZlbnQvLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC02ZTJlMmQ0NGMzLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS00LjAuMC1lMGY5NTdmM2Q2LTBiNzUxYjRjYzguemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V2ZW50Ly4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNmUyZTJkNDRjMy8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tNC4wLjAtZTBmOTU3ZjNkNi0wYjc1MWI0Y2M4LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ldmVudC8uL3NyYy9hc3NldHMvZ29ibGluLnBuZyIsIndlYnBhY2s6Ly9ldmVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ldmVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ldmVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXZlbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ldmVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V2ZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXZlbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXZlbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V2ZW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IGdhbWVTdGFydCA9IG5ldyBHYW1lKCk7XHJcbiAgZ2FtZVN0YXJ0LnN0YXJ0R2FtZSgpO1xyXG59KTsiLCJpbXBvcnQgaW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2dvYmxpbi5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWJvYXJkJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVCb2FyZCk7IFxyXG4gICAgdGhpcy53aW5zID0gMDtcclxuICAgIHRoaXMubG9zZXMgPSAwO1xyXG4gICAgdGhpcy5yb3VuZHMgPSAwO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlR2FtZUJvYXJkKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqICs9IDEpIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgIHRoaXMuZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWUoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUdhbWVCb2FyZCgpO1xyXG4gICAgdGhpcy5hZGRJbWcoKTtcclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXHJcbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgIGNvbnN0IHdpbnNDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXJfd2luJyk7XHJcbiAgICBjb25zdCBsb3Nlc0NvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRlcl9sb3NlJyk7XHJcbiAgICBjb25zdCByb3VuZHNDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXJfcm91bmQnKTtcclxuICAgIHdpbnNDb3VudGVyLnRleHRDb250ZW50ID0gYNCf0L7QsdC10LTRizogJHt0aGlzLndpbnN9YDtcclxuICAgIGxvc2VzQ291bnRlci50ZXh0Q29udGVudCA9IGDQn9GA0L7QvNCw0YXQuDogJHt0aGlzLmxvc2VzfWA7XHJcbiAgICByb3VuZHNDb3VudGVyLnRleHRDb250ZW50ID0gYNCa0L7Qu9C40YfQtdGB0YLQstC+INC/0L7Qv9GL0YLQvtC6OiAke3RoaXMucm91bmRzfWA7XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhaW0nKSB7XHJcbiAgICAgIHRoaXMud2lucyArPSAxO1xyXG4gICAgICB3aW5zQ291bnRlci50ZXh0Q29udGVudCA9IGDQn9C+0LHQtdC00Ys6ICR7dGhpcy53aW5zfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgIT09ICdhaW0nKSB7XHJcbiAgICAgIHRoaXMubG9zZXMgKz0gMTtcclxuICAgICAgbG9zZXNDb3VudGVyLnRleHRDb250ZW50ID0gYNCf0YDQvtC80LDRhdC4OiAke3RoaXMubG9zZXN9YDtcclxuICAgIH1cclxuICAgIHRoaXMucm91bmRzICs9IDE7XHJcbiAgICByb3VuZHNDb3VudGVyLnRleHRDb250ZW50ID0gYNCa0L7Qu9C40YfQtdGB0YLQstC+INC/0L7Qv9GL0YLQvtC6OiAke3RoaXMucm91bmRzfWA7XHJcblxyXG4gICAgaWYgKHRoaXMubG9zZXMgPj0gMTApIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgJ2JlZm9yZUVuZCcsXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbWVzc2FnZVwiPlxyXG4gICAgICBZb3UgbWlzc2VkIHRoZSBnb2JsaW5zIVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ0blwiPlxyXG4gICAgICAgVHJ5IGFnYWluIFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmAsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnRuJylcclxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGFpbmVyJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVzZXRHYW1lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldEdhbWUoKSB7XHJcbiAgICB0aGlzLndpbnMgPSAwO1xyXG4gICAgdGhpcy5sb3NlcyA9IDA7XHJcbiAgICB0aGlzLnJvdW5kcyA9IDA7XHJcbiAgfVxyXG5cclxuICBhZGRJbWcoKSB7XHJcbiAgICBjb25zdCBjZWxscyA9IHRoaXMuZ2FtZUJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbiAgICBsZXQgcHJldlBvc2l0aW9uID0gLTE7XHJcbiAgICBsZXQgcG9zaXRpb247XHJcbiAgICBjb25zdCBnb2JsaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGdvYmxpbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlKTtcclxuICAgIGdvYmxpbi5jbGFzc0xpc3QuYWRkKCdhaW0nKTtcclxuXHJcbiAgICB0aGlzLmdhbWVCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gdGhpcy5oYW5kbGVDbGljayhldmVudCkpO1xyXG5cclxuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgZG8ge1xyXG4gICAgICAgIHBvc2l0aW9uID0gY2VsbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2VsbHMubGVuZ3RoKV07XHJcbiAgICAgIH0gd2hpbGUgKHBvc2l0aW9uID09PSBwcmV2UG9zaXRpb24pO1xyXG5cclxuICAgICAgcHJldlBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgIHBvc2l0aW9uLmFwcGVuZENoaWxkKGdvYmxpbik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy55YXJuL19fdmlydHVhbF9fL2Nzcy1sb2FkZXItdmlydHVhbC02MzgwNzJiYjNmLzAvY2FjaGUvY3NzLWxvYWRlci1ucG0tNy4xLjItNzU0MGYxMjg4NC0xNWJmZDkwZDc3LnppcC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTYzODA3MmJiM2YvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS03LjEuMi03NTQwZjEyODg0LTE1YmZkOTBkNzcuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiAjOTk5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWJvYXJkIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XFxyXFxuICAgIGdhcDogMTVweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OSwgOTIsIDkxKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTIxLCAzLCAzKTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ViZTVlNTtcXHJcXG4gICAgcGFkZGluZzogMTAwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4ICMwMDA7XFxyXFxuICAgIGxlZnQ6IDQwJTtcXHJcXG4gICAgdG9wOiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1tZXNzYWdlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBjb2xvcjogIzVmNjM2ODtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsMkNBQTJDO0lBQzNDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLDREQUE0RDtJQUM1RCxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBjb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1ib2FyZCB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xcclxcbiAgICBnYXA6IDE1cHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTksIDkyLCA5MSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBjb2xvcjogcmdiKDEyMSwgMywgMyk7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlYmU1ZTU7XFxyXFxuICAgIHBhZGRpbmc6IDEwMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCAjMDAwO1xcclxcbiAgICBsZWZ0OiA0MCU7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtbWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgY29sb3I6ICM1ZjYzNjg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNmUyZTJkNDRjMy8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tNC4wLjAtZTBmOTU3ZjNkNi0wYjc1MWI0Y2M4LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC02ZTJlMmQ0NGMzLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS00LjAuMC1lMGY5NTdmM2Q2LTBiNzUxYjRjYzguemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC02ZTJlMmQ0NGMzLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS00LjAuMC1lMGY5NTdmM2Q2LTBiNzUxYjRjYzguemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vc3R5bGUtbG9hZGVyLXZpcnR1YWwtNmUyZTJkNDRjMy8wL2NhY2hlL3N0eWxlLWxvYWRlci1ucG0tNC4wLjAtZTBmOTU3ZjNkNi0wYjc1MWI0Y2M4LnppcC9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC02ZTJlMmQ0NGMzLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS00LjAuMC1lMGY5NTdmM2Q2LTBiNzUxYjRjYzguemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9zdHlsZS1sb2FkZXItdmlydHVhbC02ZTJlMmQ0NGMzLzAvY2FjaGUvc3R5bGUtbG9hZGVyLW5wbS00LjAuMC1lMGY5NTdmM2Q2LTBiNzUxYjRjYzguemlwL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9jc3MtbG9hZGVyLXZpcnR1YWwtNjM4MDcyYmIzZi8wL2NhY2hlL2Nzcy1sb2FkZXItbnBtLTcuMS4yLTc1NDBmMTI4ODQtMTViZmQ5MGQ3Ny56aXAvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vY3NzLWxvYWRlci12aXJ0dWFsLTYzODA3MmJiM2YvMC9jYWNoZS9jc3MtbG9hZGVyLW5wbS03LjEuMi03NTQwZjEyODg0LTE1YmZkOTBkNzcuemlwL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmRiZDAxY2UxNmMwZmE4M2NiNjdlMjBjNzNkZWRiNjYucG5nXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcclxuXHJcbmltcG9ydCAnLi9qcy9hcHAnO1xyXG4iXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhbWVTdGFydCIsInN0YXJ0R2FtZSIsImltYWdlIiwiY29uc3RydWN0b3IiLCJnYW1lQm9hcmQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsIndpbnMiLCJsb3NlcyIsInJvdW5kcyIsImNyZWF0ZUdhbWVCb2FyZCIsImkiLCJqIiwiY2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImFkZEltZyIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJ3aW5zQ291bnRlciIsImxvc2VzQ291bnRlciIsInJvdW5kc0NvdW50ZXIiLCJ0ZXh0Q29udGVudCIsInRhcmdldCIsImNsYXNzTmFtZSIsImJvZHkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJyZW1vdmUiLCJyZXNldEdhbWUiLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcmV2UG9zaXRpb24iLCJwb3NpdGlvbiIsImdvYmxpbiIsInNldEF0dHJpYnV0ZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=