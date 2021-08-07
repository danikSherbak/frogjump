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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _js_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/draw */ \"./src/js/draw.js\");\n/* harmony import */ var _js_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/control */ \"./src/js/control.js\");\n/* harmony import */ var _Sprait_Object_Thorn_Down_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sprait/Object/Thorn/Down.png */ \"./src/Sprait/Object/Thorn/Down.png\");\n/* harmony import */ var _Sprait_Object_Thorn_Up_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sprait/Object/Thorn/Up.png */ \"./src/Sprait/Object/Thorn/Up.png\");\n/* harmony import */ var _Sprait_Object_Thorn_Left_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sprait/Object/Thorn/Left.png */ \"./src/Sprait/Object/Thorn/Left.png\");\n/* harmony import */ var _Sprait_Object_Thorn_Right_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sprait/Object/Thorn/Right.png */ \"./src/Sprait/Object/Thorn/Right.png\");\n/* harmony import */ var _Sprait_Object_Coins_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sprait/Object/Coins.png */ \"./src/Sprait/Object/Coins.png\");\n/* harmony import */ var _Sprait_Object_grange_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Sprait/Object/grange.png */ \"./src/Sprait/Object/grange.png\");\n/* harmony import */ var _Sprait_Object_Star_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Sprait/Object/Star.png */ \"./src/Sprait/Object/Star.png\");\n/* harmony import */ var _Sprait_Object_swamp_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Sprait/Object/swamp.png */ \"./src/Sprait/Object/swamp.png\");\n/* harmony import */ var _Sprait_Object_water_lily_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Sprait/Object/water_lily.png */ \"./src/Sprait/Object/water_lily.png\");\n/* harmony import */ var _Sprait_Player_player_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Sprait/Player/player.png */ \"./src/Sprait/Player/player.png\");\n/* harmony import */ var _Sprait_Player_player2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Sprait/Player/player2.png */ \"./src/Sprait/Player/player2.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://frogjump/./src/index.js?");

/***/ }),

/***/ "./src/js/cnv.js":
/*!***********************!*\
  !*** ./src/js/cnv.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx)\n/* harmony export */ });\nconst canvas = document.getElementById(\"CANVAS\");\nconst ctx = canvas.getContext(\"2d\");\ncanvas.width = 1000;\ncanvas.height = 1000;\n\n//# sourceURL=webpack://frogjump/./src/js/cnv.js?");

/***/ }),

/***/ "./src/js/control.js":
/*!***************************!*\
  !*** ./src/js/control.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jump__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jump */ \"./src/js/jump.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n\n\ndocument.addEventListener('keydown', function (event) {\n  if (_jump__WEBPACK_IMPORTED_MODULE_0__.jump.local) return;\n\n  switch (event.code) {\n    case \"KeyA\":\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.position = \"left\";\n      break;\n\n    case \"KeyD\":\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.position = \"right\";\n      break;\n\n    case \"KeyW\":\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.position = \"up\";\n      break;\n\n    case \"KeyS\":\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.position = \"down\";\n      break;\n  }\n\n  if (event.keyCode == 32) _jump__WEBPACK_IMPORTED_MODULE_0__.jump.jump();\n});\n\n//# sourceURL=webpack://frogjump/./src/js/control.js?");

/***/ }),

/***/ "./src/js/draw.js":
/*!************************!*\
  !*** ./src/js/draw.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop */ \"./src/js/shop.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ \"./src/js/map/index.js\");\n/* harmony import */ var _jump__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jump */ \"./src/js/jump.js\");\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _fun_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fun_dom */ \"./src/js/fun_dom.js\");\n/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local */ \"./src/js/local.js\");\n\n\n\n\n\n\n\n\n\nfunction draw() {\n  (0,_local__WEBPACK_IMPORTED_MODULE_7__.localStorageReturn)();\n  _cnv__WEBPACK_IMPORTED_MODULE_5__.ctx.clearRect(0, 0, _cnv__WEBPACK_IMPORTED_MODULE_5__.canvas.width, _cnv__WEBPACK_IMPORTED_MODULE_5__.canvas.height);\n  _map__WEBPACK_IMPORTED_MODULE_3__.level.array[_map__WEBPACK_IMPORTED_MODULE_3__.level.number].draw();\n  _map__WEBPACK_IMPORTED_MODULE_3__.level.array[_map__WEBPACK_IMPORTED_MODULE_3__.level.number].checkMap();\n  _player__WEBPACK_IMPORTED_MODULE_0__.player.draw();\n  _jump__WEBPACK_IMPORTED_MODULE_4__.jump.draw();\n  _menu__WEBPACK_IMPORTED_MODULE_1__.menu.score();\n  _player__WEBPACK_IMPORTED_MODULE_0__.player.gameOverCheck();\n  _map__WEBPACK_IMPORTED_MODULE_3__.level.check();\n  _fun_dom__WEBPACK_IMPORTED_MODULE_6__.fun_dom.check();\n  _shop__WEBPACK_IMPORTED_MODULE_2__.shop.check();\n}\n\nsetInterval(draw, 25);\n\n//# sourceURL=webpack://frogjump/./src/js/draw.js?");

/***/ }),

/***/ "./src/js/fun_dom.js":
/*!***************************!*\
  !*** ./src/js/fun_dom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fun_dom\": () => (/* binding */ fun_dom)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop */ \"./src/js/shop.js\");\n\n\n\nconst fun_dom = {\n  get_id: {\n    level: document.getElementById(\"button_level\"),\n    restart: document.getElementById(\"button_restart\"),\n    backLevel: document.getElementById(\"button_back_gameOver\"),\n    backShop: document.getElementById(\"button_shopBack\"),\n    shop: document.getElementById(\"button_shop\"),\n    back: document.getElementById(\"button_back\"),\n    cnvBack: document.getElementById(\"button_cnvBack\"),\n    left: document.getElementById(\"button_shopLeft\"),\n    right: document.getElementById(\"button_shopRight\")\n  },\n\n  check() {\n    this.get_id.level.addEventListener('click', event => {\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.level.style.display = 'block';\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.main.style.display = 'none';\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.what = 'level';\n    });\n    this.get_id.left.addEventListener('click', event => {\n      _shop__WEBPACK_IMPORTED_MODULE_2__.shop.number--;\n    });\n    this.get_id.right.addEventListener('click', event => {\n      _shop__WEBPACK_IMPORTED_MODULE_2__.shop.number++;\n    });\n    this.get_id.back.addEventListener('click', event => {\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.level.style.display = 'none';\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.main.style.display = 'block';\n    });\n    this.get_id.cnvBack.addEventListener('click', event => {\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.level.style.display = 'block';\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.canvas.style.display = 'none';\n    });\n    this.get_id.restart.addEventListener('click', event => {\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.gameOver.style.display = 'none';\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.restart();\n    });\n    this.get_id.backLevel.addEventListener('click', event => {\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.gameOver.style.display = 'none';\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.level.style.display = 'block';\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.canvas.style.display = 'none';\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.restart();\n    });\n    this.get_id.backShop.addEventListener('click', event => {\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.shop.style.display = 'none';\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.main.style.display = 'block';\n    });\n    this.get_id.shop.addEventListener('click', event => {\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.shop.style.display = 'block';\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.main.style.display = 'none';\n    });\n    this.get_id.restart.addEventListener('click', event => {\n      _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.gameOver.style.display = 'none';\n      _player__WEBPACK_IMPORTED_MODULE_1__.player.restart();\n    });\n  }\n\n};\n\n//# sourceURL=webpack://frogjump/./src/js/fun_dom.js?");

/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"objectImage\": () => (/* binding */ objectImage)\n/* harmony export */ });\nconst objectImage = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];\nobjectImage[0].src = \"images/water_lily.png\";\nobjectImage[1].src = \"images/swamp.png\";\nobjectImage[2].src = \"images/Star.png\";\nobjectImage[3].src = \"images/Coins.png\";\nobjectImage[4].src = \"images/grange.png\";\nobjectImage[5].src = \"images/Up.png\";\nobjectImage[6].src = \"images/Down.png\";\nobjectImage[7].src = \"images/Left.png\";\nobjectImage[8].src = \"images/Right.png\";\n\n//# sourceURL=webpack://frogjump/./src/js/image.js?");

/***/ }),

/***/ "./src/js/jump.js":
/*!************************!*\
  !*** ./src/js/jump.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jumpNumbers\": () => (/* binding */ jumpNumbers),\n/* harmony export */   \"jump\": () => (/* binding */ jump)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cnv */ \"./src/js/cnv.js\");\n\n\nconst jumpNumbers = {\n  x: 0,\n  y: 0,\n  xMinus: 0,\n  yMinus: 0\n};\nconst jump = {\n  x: 0,\n  y: 200,\n  y2: 150,\n  local: false,\n  number: null,\n  position: true,\n\n  draw() {\n    this.x2 = this.x + 100;\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = \"red\";\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(this.x, this.y, 100, 100);\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = \"orange\";\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(this.x, this.y + 100, 100, 100);\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = \"yellow\";\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(this.x, this.y + 200, 100, 100);\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = \"green\";\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(this.x, this.y + 300, 100, 100);\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = \"blue\";\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(this.x, this.y + 400, 100, 100);\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.lineWidth = 5;\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.moveTo(this.x, this.y2);\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.lineTo(this.x2, this.y2);\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.stroke();\n\n    if (_player__WEBPACK_IMPORTED_MODULE_0__.player.jump) {\n      if (this.position) this.y2 += 10;else this.y2 -= 10;\n      if (this.y2 === this.y) this.position = true;\n      if (this.y2 === this.y + 500) this.position = false;\n      if (this.y2 >= this.y && this.y2 <= this.y + 100) this.number = 5;\n      if (this.y2 >= this.y + 100 && this.y2 <= this.y + 200) this.number = 4;\n      if (this.y2 >= this.y + 200 && this.y2 <= this.y + 300) this.number = 3;\n      if (this.y2 >= this.y + 300 && this.y2 <= this.y + 400) this.number = 2;\n      if (this.y2 >= this.y + 400 && this.y2 <= this.y + 500) this.number = 1;\n    }\n\n    if (this.local) {\n      switch (_player__WEBPACK_IMPORTED_MODULE_0__.player.position) {\n        case \"left\":\n          if (_player__WEBPACK_IMPORTED_MODULE_0__.player.x > jumpNumbers.xMinus) _player__WEBPACK_IMPORTED_MODULE_0__.player.x -= 10;else {\n            this.local = false;\n            _player__WEBPACK_IMPORTED_MODULE_0__.player.jump = true;\n          }\n          break;\n\n        case \"up\":\n          if (_player__WEBPACK_IMPORTED_MODULE_0__.player.y > jumpNumbers.yMinus) _player__WEBPACK_IMPORTED_MODULE_0__.player.y -= 10;else {\n            this.local = false;\n            _player__WEBPACK_IMPORTED_MODULE_0__.player.jump = true;\n          }\n          break;\n\n        case \"down\":\n          if (_player__WEBPACK_IMPORTED_MODULE_0__.player.y < jumpNumbers.y) _player__WEBPACK_IMPORTED_MODULE_0__.player.y += 10;else {\n            this.local = false;\n            _player__WEBPACK_IMPORTED_MODULE_0__.player.jump = true;\n          }\n          break;\n\n        case \"right\":\n          if (_player__WEBPACK_IMPORTED_MODULE_0__.player.x < jumpNumbers.x) _player__WEBPACK_IMPORTED_MODULE_0__.player.x += 10;else {\n            this.local = false;\n            _player__WEBPACK_IMPORTED_MODULE_0__.player.jump = true;\n          }\n          break;\n      }\n    }\n  },\n\n  jump() {\n    if (_player__WEBPACK_IMPORTED_MODULE_0__.player.jump) {\n      this.local = true;\n      jumpNumbers.x = _player__WEBPACK_IMPORTED_MODULE_0__.player.x + this.number * 50;\n      jumpNumbers.y = _player__WEBPACK_IMPORTED_MODULE_0__.player.y + this.number * 50;\n      jumpNumbers.xMinus = _player__WEBPACK_IMPORTED_MODULE_0__.player.x - this.number * 50;\n      jumpNumbers.yMinus = _player__WEBPACK_IMPORTED_MODULE_0__.player.y - this.number * 50;\n      _player__WEBPACK_IMPORTED_MODULE_0__.player.jump = false;\n    }\n  }\n\n};\n\n//# sourceURL=webpack://frogjump/./src/js/jump.js?");

/***/ }),

/***/ "./src/js/local.js":
/*!*************************!*\
  !*** ./src/js/local.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStorageReturn\": () => (/* binding */ localStorageReturn)\n/* harmony export */ });\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./src/js/map/index.js\");\n\nconst raw = localStorage.getItem(\"player\"),\n      person = JSON.parse(raw);\n\nif (localStorage.getItem(\"player\")) {\n  for (let i = 0; i < _map__WEBPACK_IMPORTED_MODULE_0__.level.array.length; i++) {\n    _map__WEBPACK_IMPORTED_MODULE_0__.level.array[i].array = person.arrayLevel[i].array;\n    _map__WEBPACK_IMPORTED_MODULE_0__.level.array[i].complete = person.arrayLevel[i].complete; //level.array[i].read();\n  }\n}\n\nfunction localStorageReturn() {\n  let storage = {\n    arrayLevel: []\n  };\n\n  for (let i = 0; i < _map__WEBPACK_IMPORTED_MODULE_0__.level.array.length; i++) {\n    storage.arrayLevel[i] = _map__WEBPACK_IMPORTED_MODULE_0__.level.array[i];\n  }\n\n  localStorage.setItem(\"player\", JSON.stringify(storage));\n}\n\n//# sourceURL=webpack://frogjump/./src/js/local.js?");

/***/ }),

/***/ "./src/js/map/block.js":
/*!*****************************!*\
  !*** ./src/js/map/block.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Block\": () => (/* binding */ Block)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ \"./src/js/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/js/map/constants.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ \"./src/js/player.js\");\n\n\n\n\nclass Block {\n  constructor(x, y, index) {\n    this.x = x;\n    this.y = y;\n    this.x2 = this.x + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH;\n    this.y2 = this.y + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT;\n    this.what = \"block\";\n    this.index = index;\n  }\n\n  check() {\n    if (_player__WEBPACK_IMPORTED_MODULE_3__.player.jump) {\n      if (_player__WEBPACK_IMPORTED_MODULE_3__.player.x === this.x && _player__WEBPACK_IMPORTED_MODULE_3__.player.y === this.y) _player__WEBPACK_IMPORTED_MODULE_3__.player.life = false;\n    }\n  }\n\n  draw() {\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[1], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n  }\n\n}\n\n//# sourceURL=webpack://frogjump/./src/js/map/block.js?");

/***/ }),

/***/ "./src/js/map/coins.js":
/*!*****************************!*\
  !*** ./src/js/map/coins.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Coins\": () => (/* binding */ Coins)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ \"./src/js/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/js/map/constants.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ \"./src/js/player.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ \"./src/js/map/map.js\");\n\n\n\n\n\nclass Coins {\n  constructor(x, y, index) {\n    this.x = x;\n    this.y = y;\n    this.what = \"coins\";\n    this.x2 = this.x + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH;\n    this.y2 = this.y + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT;\n    this.life = true;\n    this.index = index;\n  }\n\n  check() {\n    if (this.life) return;\n\n    if (_player__WEBPACK_IMPORTED_MODULE_3__.player.x === this.x && _player__WEBPACK_IMPORTED_MODULE_3__.player.y === this.y) {\n      _map__WEBPACK_IMPORTED_MODULE_4__.level.array[_map__WEBPACK_IMPORTED_MODULE_4__.level.number].array[this.index] = '0';\n      _player__WEBPACK_IMPORTED_MODULE_3__.player.coins++;\n      this.life = false;\n    }\n  }\n\n  draw() {\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[1], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[0], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n    if (this.life) _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[3], this.x + 12, this.y + 10, 30, 30);\n  }\n\n}\n\n//# sourceURL=webpack://frogjump/./src/js/map/coins.js?");

/***/ }),

/***/ "./src/js/map/constants.js":
/*!*********************************!*\
  !*** ./src/js/map/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CELL_WIDTH\": () => (/* binding */ CELL_WIDTH),\n/* harmony export */   \"CELL_HEIGHT\": () => (/* binding */ CELL_HEIGHT)\n/* harmony export */ });\nconst CELL_WIDTH = 50;\nconst CELL_HEIGHT = 50;\n\n//# sourceURL=webpack://frogjump/./src/js/map/constants.js?");

/***/ }),

/***/ "./src/js/map/finish.js":
/*!******************************!*\
  !*** ./src/js/map/finish.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Finish\": () => (/* binding */ Finish)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ \"./src/js/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/js/map/constants.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ \"./src/js/player.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ \"./src/js/map/map.js\");\n\n\n\n\n\nclass Finish {\n  constructor(x, y, index, level) {\n    this.x = x;\n    this.y = y;\n    this.x2 = this.x + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH;\n    this.y2 = this.y + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT;\n    this.what = \"finish\";\n    this.index = index;\n    this.a = true;\n    this.level = level;\n  }\n\n  check() {\n    if (_player__WEBPACK_IMPORTED_MODULE_3__.player.x === this.x && _player__WEBPACK_IMPORTED_MODULE_3__.player.y === this.y) _map__WEBPACK_IMPORTED_MODULE_4__.level.array[this.level].complete = true;\n  }\n\n  draw() {\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[1], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[0], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = \"black\";\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(this.x + 20, this.y, 30, 10);\n  }\n\n}\n\n//# sourceURL=webpack://frogjump/./src/js/map/finish.js?");

/***/ }),

/***/ "./src/js/map/grunge.js":
/*!******************************!*\
  !*** ./src/js/map/grunge.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Grunge\": () => (/* binding */ Grunge)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ \"./src/js/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/js/map/constants.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ \"./src/js/player.js\");\n/* harmony import */ var _jump__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jump */ \"./src/js/jump.js\");\n\n\n\n\n\nclass Grunge {\n  constructor(x, y, index) {\n    this.x = x;\n    this.y = y;\n    this.x2 = this.x + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH;\n    this.y2 = this.y + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT;\n    this.what = \"grunge\";\n    this.index = index;\n  }\n\n  check() {\n    if (this.x > _player__WEBPACK_IMPORTED_MODULE_3__.player.x && this.y === _player__WEBPACK_IMPORTED_MODULE_3__.player.y) {\n      if (_jump__WEBPACK_IMPORTED_MODULE_4__.jumpNumbers.x >= this.x) _jump__WEBPACK_IMPORTED_MODULE_4__.jumpNumbers.x = _player__WEBPACK_IMPORTED_MODULE_3__.player.x + (this.x - _player__WEBPACK_IMPORTED_MODULE_3__.player.x2);\n    }\n\n    if (this.x < _player__WEBPACK_IMPORTED_MODULE_3__.player.x && this.y === _player__WEBPACK_IMPORTED_MODULE_3__.player.y) {\n      if (_jump__WEBPACK_IMPORTED_MODULE_4__.jumpNumbers.xMinus <= this.x2) _jump__WEBPACK_IMPORTED_MODULE_4__.jumpNumbers.xMinus = _player__WEBPACK_IMPORTED_MODULE_3__.player.x - (_player__WEBPACK_IMPORTED_MODULE_3__.player.x - this.x2);\n    }\n\n    if (this.y > _player__WEBPACK_IMPORTED_MODULE_3__.player.y && this.x === _player__WEBPACK_IMPORTED_MODULE_3__.player.x) {\n      if (_jump__WEBPACK_IMPORTED_MODULE_4__.jumpNumbers.y >= this.y) _jump__WEBPACK_IMPORTED_MODULE_4__.jumpNumbers.y = _player__WEBPACK_IMPORTED_MODULE_3__.player.y + (this.y - _player__WEBPACK_IMPORTED_MODULE_3__.player.y2);\n    }\n\n    if (this.y < _player__WEBPACK_IMPORTED_MODULE_3__.player.y && this.x === _player__WEBPACK_IMPORTED_MODULE_3__.player.x) {\n      if (_jump__WEBPACK_IMPORTED_MODULE_4__.jumpNumbers.yMinus <= this.y2) _jump__WEBPACK_IMPORTED_MODULE_4__.jumpNumbers.yMinus = _player__WEBPACK_IMPORTED_MODULE_3__.player.y - (_player__WEBPACK_IMPORTED_MODULE_3__.player.y - this.y2);\n    }\n  }\n\n  draw() {\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[4], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n  }\n\n}\n\n//# sourceURL=webpack://frogjump/./src/js/map/grunge.js?");

/***/ }),

/***/ "./src/js/map/index.js":
/*!*****************************!*\
  !*** ./src/js/map/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Level\": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_0__.Level),\n/* harmony export */   \"level\": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_0__.level)\n/* harmony export */ });\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ \"./src/js/map/map.js\");\n\n\n//# sourceURL=webpack://frogjump/./src/js/map/index.js?");

/***/ }),

/***/ "./src/js/map/lend.js":
/*!****************************!*\
  !*** ./src/js/map/lend.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Lend\": () => (/* binding */ Lend)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ \"./src/js/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/js/map/constants.js\");\n\n\n\nclass Lend {\n  constructor(x, y, index) {\n    this.x = x;\n    this.y = y;\n    this.x2 = this.x + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH;\n    this.y2 = this.y + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT;\n    this.what = \"lend\";\n    this.index = index;\n  }\n\n  check() {}\n\n  draw() {\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[1], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[0], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n  }\n\n}\n\n//# sourceURL=webpack://frogjump/./src/js/map/lend.js?");

/***/ }),

/***/ "./src/js/map/map.js":
/*!***************************!*\
  !*** ./src/js/map/map.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"level\": () => (/* binding */ level),\n/* harmony export */   \"Level\": () => (/* binding */ Level)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player */ \"./src/js/player.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu */ \"./src/js/menu.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/js/map/constants.js\");\n/* harmony import */ var _lend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lend */ \"./src/js/map/lend.js\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block */ \"./src/js/map/block.js\");\n/* harmony import */ var _finish__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finish */ \"./src/js/map/finish.js\");\n/* harmony import */ var _grunge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grunge */ \"./src/js/map/grunge.js\");\n/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./star */ \"./src/js/map/star.js\");\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./start */ \"./src/js/map/start.js\");\n/* harmony import */ var _thorn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thorn */ \"./src/js/map/thorn.js\");\n/* harmony import */ var _coins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coins */ \"./src/js/map/coins.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst level = {\n  number: 0,\n  array: [],\n\n  check() {\n    for (let i = 0; i < this.array.length; i++) {\n      this.array[i].checkMap();\n    }\n  }\n\n};\nclass Level {\n  constructor(size, array, index, name) {\n    this.size = size;\n    this.array = array;\n    this.name = name;\n    this.level = false;\n    this.map = [];\n    this.quantity = 0;\n    this.width = true;\n    this.index = index;\n    this.complete = false;\n    this.star = 0;\n    this.a = true;\n    this.save = [];\n    this.starSave = 0;\n    this.read();\n    this.idName = '_' + this.name + this.index + 'Level' + '_';\n    this.create();\n  }\n\n  create() {\n    this.button = document.createElement(\"button\");\n    this.button.innerHTML = this.name;\n    this.button.id = this.idName;\n    this.button.className = 'back';\n    _menu__WEBPACK_IMPORTED_MODULE_1__.menu.id.levelNumber.appendChild(this.button);\n    this.buttonID = document.getElementById(this.idName);\n  }\n\n  read() {\n    switch (this.size) {\n      case \"small\":\n        this.x = 300;\n        this.y = 150;\n        this.start = 300;\n        break;\n\n      case \"big\":\n        this.x = 200;\n        this.y = 50;\n        this.start = 200;\n        break;\n\n      case \"bigger\":\n        this.x = 100;\n        this.y = 0;\n        this.start = 100;\n        break;\n    }\n\n    for (let i = 0; i < this.array.length; i++) {\n      this.cell = this.array[i];\n\n      switch (this.cell) {\n        case '0':\n          this.map[this.quantity] = new _lend__WEBPACK_IMPORTED_MODULE_3__.Lend(this.x, this.y, this.quantity);\n          this.quantity++;\n          break;\n\n        case '^':\n          this.map[this.quantity] = new _thorn__WEBPACK_IMPORTED_MODULE_9__.Thorn(this.x, this.y, this.quantity, \"up\");\n          this.quantity++;\n          break;\n\n        case '*':\n          this.map[this.quantity] = new _star__WEBPACK_IMPORTED_MODULE_7__.Star(this.x, this.y, this.quantity, this.index, \"level\");\n          this.quantity++;\n          break;\n\n        case '>':\n          this.map[this.quantity] = new _thorn__WEBPACK_IMPORTED_MODULE_9__.Thorn(this.x, this.y, this.quantity, \"left\");\n          this.quantity++;\n          break;\n\n        case '$':\n          this.map[this.quantity] = new _coins__WEBPACK_IMPORTED_MODULE_10__.Coins(this.x, this.y, this.quantity);\n          this.quantity++;\n          break;\n\n        case '<':\n          this.map[this.quantity] = new _thorn__WEBPACK_IMPORTED_MODULE_9__.Thorn(this.x, this.y, this.quantity, \"right\");\n          this.quantity++;\n          break;\n\n        case '`':\n          this.map[this.quantity] = new _thorn__WEBPACK_IMPORTED_MODULE_9__.Thorn(this.x, this.y, this.quantity, \"down\");\n          this.quantity++;\n          break;\n\n        case ':':\n          this.map[this.quantity] = new _start__WEBPACK_IMPORTED_MODULE_8__.Start(this.x, this.y, this.quantity);\n          this.quantity++;\n          break;\n\n        case ';':\n          this.map[this.quantity] = new _finish__WEBPACK_IMPORTED_MODULE_5__.Finish(this.x, this.y, this.quantity, this.index);\n          this.quantity++;\n          break;\n\n        case 1:\n          this.map[this.quantity] = new _grunge__WEBPACK_IMPORTED_MODULE_6__.Grunge(this.x, this.y, this.quantity);\n          this.quantity++;\n          this.width = !this.width;\n          break;\n\n        case '1':\n          this.width = false;\n          this.map[this.quantity] = new _grunge__WEBPACK_IMPORTED_MODULE_6__.Grunge(this.x, this.y, this.quantity);\n          this.quantity++;\n          break;\n\n        case '#':\n          this.map[this.quantity] = new _block__WEBPACK_IMPORTED_MODULE_4__.Block(this.x, this.y, this.quantity);\n          this.quantity++;\n          break;\n      }\n\n      this.x += _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH;\n\n      if (this.width) {\n        this.y += _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT;\n        this.x = this.start;\n      }\n    }\n  }\n\n  draw() {\n    for (let i = 0; i < this.map.length; i++) {\n      this.map[i].check();\n      this.map[i].draw();\n    }\n  }\n\n  checkMap() {\n    this.buttonID.addEventListener('click', event => {\n      level.number = this.index;\n      _menu__WEBPACK_IMPORTED_MODULE_1__.menu.what = \"levelDraw\";\n      _player__WEBPACK_IMPORTED_MODULE_0__.player.what = \"level\";\n      _player__WEBPACK_IMPORTED_MODULE_0__.player.size = this.size;\n      _menu__WEBPACK_IMPORTED_MODULE_1__.menu.id.level.style.display = 'none';\n      _menu__WEBPACK_IMPORTED_MODULE_1__.menu.id.canvas.style.display = 'block';\n      _player__WEBPACK_IMPORTED_MODULE_0__.player.check();\n    });\n    this.buttonID.className = \"levelButton\";\n    this.buttonID.style.background = this.complete ? \"green\" : \"grey\";\n  }\n\n}\nlevel.array[0] = new Level(\"small\", [1, '1', '1', '1', '1', '1', '1', '1', '1', '1', 1, 1, ':', '#', '#', '0', '#', '<', '#', '#', '*', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '`', '#', '`', '#', 1, 1, '0', '#', '#', '0', '#', '#', '0', '#', '$', 1, 1, '#', '#', '#', '#', '#', '>', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '#', '$', '#', '#', 1, 1, '0', '#', '#', '*', '<', '#', '#', '>', '#', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', ';', 1, 1, '*', '<', '#', '#', '#', '#', '0', '<', '#', 1, 1, '1', '1', '1', '1', '1', '1', '1', '1', '1', 1], 0, \"1\");\nlevel.array[1] = new Level(\"small\", [1, \"1\", \"1\", \"1\", \"1\", \"1\", \"1\", \"1\", \"1\", 1, 1, \":\", \"#\", \"$\", \"^\", \"#\", \"0\", \"#\", \"$\", 1, 1, \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", 1, 1, \"0\", \"#\", \"#\", \"#\", \"#\", \"0\", \"^\", \"*\", 1, 1, \"^\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \";\", 1, 1, \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", 1, 1, \"*\", \"^\", \"0\", \"#\", \"#\", \"0\", \"^\", \"*\", 1, 1, \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", \"#\", 1, 1, \"$\", \"#\", \"0\", \"#\", \"#\", \"0\", \"#\", \"$\", 1, 1, \"1\", \"1\", \"1\", \"1\", \"1\", \"1\", \"1\", \"1\", 1], 1, \"2\");\nlevel.array[2] = new Level(\"small\", [1, '1', '1', '1', '1', '1', '1', '1', '1', 1, 1, ':', '#', '#', '0', '0', '#', '#', '*', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '#', '#', '#', '`', '`', '#', '#', '#', 1, 1, '0', '#', '<', '$', '$', '<', '#', '0', 1, 1, '0', '#', '#', '0', '0', '<', '#', '0', 1, 1, '^', '#', '#', '#', '^', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '*', '#', '#', '0', '<', '#', '#', ';', 1, 1, '1', '1', '1', '1', '1', '1', '1', '1', 1], 2, \"3\");\nlevel.array[3] = new Level(\"big\", [1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 1, 1, ':', '#', '#', '0', '#', '#', '#', '#', '0', '<', '#', '*', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '0', '#', '#', '0', '<', '#', '#', '>', '0', '#', '#', '0', 1, 1, '#', '#', '#', '#', '#', '`', '`', '#', '^', '#', '#', '#', 1, 1, '0', '0', '<', '#', '>', '$', '$', '<', '#', '#', '#', '#', 1, 1, '^', '0', '#', '#', '#', '$', '$', '<', '#', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '^', '^', '#', '#', '#', '#', '#', 1, 1, '0', '#', '#', '0', '#', '#', '#', '>', '0', '#', '#', '0', 1, 1, '#', '#', '#', '^', '#', '#', '#', '#', '#', '#', '#', '`', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ';', 1, 1, '*', '#', '#', '0', '<', '#', '#', '>', '0', '#', '#', '*', 1, 1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 1], 3, \"4\");\nlevel.array[4] = new Level(\"big\", [1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 1, 1, ':', '#', '#', '#', '#', '0', '<', '#', '#', '#', '#', ';', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '0', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '0', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '`', '#', 1, 1, '#', '#', '#', '#', '>', '$', '#', '#', '#', '#', '*', '#', 1, 1, '#', '#', '#', '#', '#', '^', '#', '#', '#', '#', '#', '#', 1, 1, '0', '#', '#', '#', '#', '0', '#', '#', '#', '#', '#', '$', 1, 1, '^', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '#', '#', '`', '#', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '*', '#', '0', '#', '#', '#', '0', 1, 1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 1], 4, \"5\");\nlevel.array[5] = new Level(\"big\", [1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 1, 1, ':', '0', '0', '0', '<', '`', '`', '`', '`', '`', '>', '*', 1, 1, '^', '^', '>', '0', '<', '>', '0', '<', '`', '`', '>', '0', 1, 1, '`', '`', '>', '0', '<', '>', '0', '<', '>', '0', '0', '0', 1, 1, '>', '0', '0', '0', '0', '0', '0', '0', '0', '0', '<', '^', 1, 1, '>', '0', '<', '0', '<', '>', '0', '<', '>', '0', '<', '`', 1, 1, '*', '0', '<', '0', '<', '>', '0', '<', '>', '0', '<', '`', 1, 1, '^', '^', '>', '0', '<', '>', '0', '<', '>', '0', '<', '`', 1, 1, '>', '0', '0', '0', '<', '`', '$', '`', '>', '0', '<', '`', 1, 1, '>', '0', '<', '0', '<', '`', '`', '`', '`', '0', '`', '`', 1, 1, '>', '0', '<', '0', '0', '$', '<', '0', '0', '0', '0', ';', 1, 1, '*', '0', '<', '^', '^', '^', '^', '^', '>', '0', '`', '`', 1, 1, '^', '^', '^', '^', '^', '^', '^', '^', '>', '0', '0', '$', 1, 1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 1], 5, \"6\");\nlevel.array[6] = new Level(\"bigger\", [1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 1, 1, ':', '#', '#', '#', '0', '#', '#', '#', '0', '<', '0', '<', '0', '<', '>', '*', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '>', '0', '#', '#', '0', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '^', '#', '#', '^', 1, 1, '0', '#', '#', '#', '0', '#', '#', '#', '0', '#', '0', '<', '#', '#', '#', '#', 1, 1, '#', '#', '#', '#', '#', '#', '#', '#', '^', '#', '`', '#', '#', '#', '#', '`', 1, 1, '#', '#', '#', '>', '0', '#', '#', '#', '#', '#', '0', '#', '#', '#', '#', '0', 1, 1, '#', '#', '#', '#', '#', '`', '#', '#', '#', '#', '^', '#', '#', '#', '#', '#', 1, 1, '0', '#', '#', '#', '#', '$', '<', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '^', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '#', '`', '#', '#', '#', '#', '#', '#', '#', '#', '`', '#', '#', '#', '#', '#', 1, 1, '>', '0', '#', '#', '0', '<', '#', '#', '#', '>', '$', '#', '#', '#', '#', '0', 1, 1, '#', '#', '#', '#', '^', '#', '#', '#', '#', '#', '^', '#', '#', '#', '#', '#', 1, 1, '#', '#', '#', '#', '`', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '>', '0', '#', '#', '0', '<', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', 1, 1, '#', '^', '#', '#', '*', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ';', 1, 1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 1], 6, \"7\");\nlevel.array[0].level = true;\n\n//# sourceURL=webpack://frogjump/./src/js/map/map.js?");

/***/ }),

/***/ "./src/js/map/star.js":
/*!****************************!*\
  !*** ./src/js/map/star.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Star\": () => (/* binding */ Star)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ \"./src/js/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/js/map/constants.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ \"./src/js/player.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ \"./src/js/map/map.js\");\n\n\n\n\n\nclass Star {\n  constructor(x, y, index, level, what) {\n    this.x = x;\n    this.y = y;\n    this.x2 = this.x + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH;\n    this.y2 = this.y + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT;\n    this.what = \"star\";\n    this.life = true;\n    this.index = index;\n    this.level = level;\n    this.what = what;\n  }\n\n  check() {\n    if (!this.life) return;\n\n    if (_player__WEBPACK_IMPORTED_MODULE_3__.player.x === this.x && _player__WEBPACK_IMPORTED_MODULE_3__.player.y === this.y) {\n      _map__WEBPACK_IMPORTED_MODULE_4__.level.array[_map__WEBPACK_IMPORTED_MODULE_4__.level.number].array[this.index] = '0';\n      _player__WEBPACK_IMPORTED_MODULE_3__.player.coins += 2;\n      this.life = false;\n    }\n  }\n\n  draw() {\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[1], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[0], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n\n    if (this.life) {\n      _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[2], this.x + 12, this.y + 10, 30, 30);\n    }\n  }\n\n}\n\n//# sourceURL=webpack://frogjump/./src/js/map/star.js?");

/***/ }),

/***/ "./src/js/map/start.js":
/*!*****************************!*\
  !*** ./src/js/map/start.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Start\": () => (/* binding */ Start)\n/* harmony export */ });\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image */ \"./src/js/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/js/map/constants.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player */ \"./src/js/player.js\");\n\n\n\n\nclass Start {\n  constructor(x, y, index) {\n    this.x = x;\n    this.y = y;\n    this.x2 = this.x + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH;\n    this.y2 = this.y + _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT;\n    this.what = \"start\";\n    this.index = index;\n    this.a = true;\n  }\n\n  check() {\n    if (this.a) {\n      _player__WEBPACK_IMPORTED_MODULE_3__.player.x = this.x;\n      _player__WEBPACK_IMPORTED_MODULE_3__.player.y = this.y;\n      this.a = false;\n    }\n  }\n\n  draw() {\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[1], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n    _cnv__WEBPACK_IMPORTED_MODULE_0__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_1__.objectImage[0], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_2__.CELL_HEIGHT);\n  }\n\n}\n\n//# sourceURL=webpack://frogjump/./src/js/map/start.js?");

/***/ }),

/***/ "./src/js/map/thorn.js":
/*!*****************************!*\
  !*** ./src/js/map/thorn.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Thorn\": () => (/* binding */ Thorn)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../player */ \"./src/js/player.js\");\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image */ \"./src/js/image.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./src/js/map/constants.js\");\n\n\n\n\nclass Thorn {\n  constructor(x, y, index, position) {\n    this.x = x;\n    this.y = y;\n    this.what = \"thorn\";\n    this.position = position;\n    this.index = index;\n  }\n\n  check() {\n    this.x2 = this.x + _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_WIDTH;\n    this.y2 = this.y + _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_HEIGHT;\n\n    if (_player__WEBPACK_IMPORTED_MODULE_0__.player.x === this.x && _player__WEBPACK_IMPORTED_MODULE_0__.player.y === this.y) {\n      _player__WEBPACK_IMPORTED_MODULE_0__.player.life = false;\n    }\n  }\n\n  draw() {\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_2__.objectImage[1], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_HEIGHT);\n\n    switch (this.position) {\n      case \"up\":\n        _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_2__.objectImage[5], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_HEIGHT);\n        break;\n\n      case \"down\":\n        _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_2__.objectImage[6], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_HEIGHT);\n        break;\n\n      case \"left\":\n        _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_2__.objectImage[8], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_HEIGHT);\n        break;\n\n      case \"right\":\n        _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.drawImage(_image__WEBPACK_IMPORTED_MODULE_2__.objectImage[7], this.x, this.y, _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_3__.CELL_HEIGHT);\n        break;\n    }\n  }\n\n}\n\n//# sourceURL=webpack://frogjump/./src/js/map/thorn.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cnv */ \"./src/js/cnv.js\");\n\n\nconst menu = {\n  what: \"main\",\n  id: {\n    main: document.getElementById(\"main\"),\n    level: document.getElementById(\"level\"),\n    levelNumber: document.getElementById(\"levelNumber\"),\n    canvas: document.getElementById(\"cnv\"),\n    gameOver: document.getElementById(\"gameOver\"),\n    shop: document.getElementById(\"shop\")\n  },\n\n  score() {\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.beginPath();\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = \"orange\";\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, 100, 100, 100);\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.font = \"50px serif\";\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = \"black\";\n    _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(_player__WEBPACK_IMPORTED_MODULE_0__.player.coins, 40, 150);\n  }\n\n};\n\n//# sourceURL=webpack://frogjump/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _cnv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cnv */ \"./src/js/cnv.js\");\n/* harmony import */ var _jump__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jump */ \"./src/js/jump.js\");\n\n\n\nconst player = {\n  position: \"down\",\n  life: true,\n  coins: 0,\n  x: 0,\n  y: 0,\n  size: \"small\",\n  what: null,\n  jump: true,\n  img: new Image(),\n  src: \"images/player.png\",\n\n  restart() {\n    _jump__WEBPACK_IMPORTED_MODULE_2__.jump.local = false;\n    this.jump = true;\n    _jump__WEBPACK_IMPORTED_MODULE_2__.jump.y2 = 210;\n    this.check();\n    this.life = true;\n  },\n\n  check() {\n    switch (this.size) {\n      case \"small\":\n        this.x = 350;\n        this.y = 200;\n        break;\n\n      case \"big\":\n        this.x = 250;\n        this.y = 100;\n        break;\n\n      case \"bigger\":\n        this.x = 150;\n        this.y = 50;\n        break;\n    }\n  },\n\n  gameOverCheck() {\n    if (this.life) return;\n    _menu__WEBPACK_IMPORTED_MODULE_0__.menu.id.gameOver.style.display = 'block';\n    _jump__WEBPACK_IMPORTED_MODULE_2__.jump.local = false;\n    this.jump = false;\n  },\n\n  draw() {\n    this.x2 = this.x + 50;\n    this.y2 = this.y + 50;\n    this.img.src = this.src;\n\n    switch (this.position) {\n      case \"left\":\n        drawImageRot(this.img, this.x, this.y, 50, 50, 270);\n        break;\n\n      case \"up\":\n        drawImageRot(this.img, this.x, this.y, 50, 50, 0);\n        break;\n\n      case \"down\":\n        drawImageRot(this.img, this.x, this.y, 50, 50, 180);\n        break;\n\n      case \"right\":\n        drawImageRot(this.img, this.x, this.y, 50, 50, 90);\n        break;\n    }\n  }\n\n};\n\nfunction drawImageRot(img, x, y, width, height, deg) {\n  _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.save();\n  var rad = deg * Math.PI / 180;\n  _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.translate(x + width / 2, y + height / 2);\n  _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.rotate(rad);\n  _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.drawImage(img, width / 2 * -1, height / 2 * -1, width, height);\n  _cnv__WEBPACK_IMPORTED_MODULE_1__.ctx.restore();\n}\n\n//# sourceURL=webpack://frogjump/./src/js/player.js?");

/***/ }),

/***/ "./src/js/shop.js":
/*!************************!*\
  !*** ./src/js/shop.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shop\": () => (/* binding */ shop)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n\nconst shop = {\n  number: 0,\n  array: [],\n  id: document.getElementById(\"imageShop\"),\n\n  check() {\n    for (let i = 0; i < this.array.length; i++) {\n      this.array[i].check();\n    }\n\n    this.id.addEventListener('click', event => {\n      this.array[this.number].buy();\n    });\n  }\n\n};\n\nclass Skin {\n  constructor(src, price, index) {\n    this.src = src;\n    this.price = price;\n    this.index = index;\n    this.bought = false;\n  }\n\n  check() {\n    if (shop.number === this.index) {\n      if (this.bought) _player__WEBPACK_IMPORTED_MODULE_0__.player.src = this.src;\n      shop.id.src = this.src;\n    }\n  }\n\n  buy() {\n    if (_player__WEBPACK_IMPORTED_MODULE_0__.player.coins >= this.price) {\n      this.bought = true;\n      _player__WEBPACK_IMPORTED_MODULE_0__.player.coins -= this.price;\n    }\n  }\n\n}\n\nshop.array[0] = new Skin(\"images/player.png\", 0, 0);\nshop.array[1] = new Skin(\"images/player2.png\", 0, 1);\nshop.array[2] = new Skin(\"images/player.png\", 0, 2);\n\n//# sourceURL=webpack://frogjump/./src/js/shop.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"index.html\");\n\n//# sourceURL=webpack://frogjump/./src/index.html?");

/***/ }),

/***/ "./src/Sprait/Object/Coins.png":
/*!*************************************!*\
  !*** ./src/Sprait/Object/Coins.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Coins.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Object/Coins.png?");

/***/ }),

/***/ "./src/Sprait/Object/Star.png":
/*!************************************!*\
  !*** ./src/Sprait/Object/Star.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Star.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Object/Star.png?");

/***/ }),

/***/ "./src/Sprait/Object/Thorn/Down.png":
/*!******************************************!*\
  !*** ./src/Sprait/Object/Thorn/Down.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Down.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Object/Thorn/Down.png?");

/***/ }),

/***/ "./src/Sprait/Object/Thorn/Left.png":
/*!******************************************!*\
  !*** ./src/Sprait/Object/Thorn/Left.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Left.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Object/Thorn/Left.png?");

/***/ }),

/***/ "./src/Sprait/Object/Thorn/Right.png":
/*!*******************************************!*\
  !*** ./src/Sprait/Object/Thorn/Right.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Right.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Object/Thorn/Right.png?");

/***/ }),

/***/ "./src/Sprait/Object/Thorn/Up.png":
/*!****************************************!*\
  !*** ./src/Sprait/Object/Thorn/Up.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Up.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Object/Thorn/Up.png?");

/***/ }),

/***/ "./src/Sprait/Object/grange.png":
/*!**************************************!*\
  !*** ./src/Sprait/Object/grange.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/grange.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Object/grange.png?");

/***/ }),

/***/ "./src/Sprait/Object/swamp.png":
/*!*************************************!*\
  !*** ./src/Sprait/Object/swamp.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/swamp.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Object/swamp.png?");

/***/ }),

/***/ "./src/Sprait/Object/water_lily.png":
/*!******************************************!*\
  !*** ./src/Sprait/Object/water_lily.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/water_lily.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Object/water_lily.png?");

/***/ }),

/***/ "./src/Sprait/Player/player.png":
/*!**************************************!*\
  !*** ./src/Sprait/Player/player.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/player.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Player/player.png?");

/***/ }),

/***/ "./src/Sprait/Player/player2.png":
/*!***************************************!*\
  !*** ./src/Sprait/Player/player2.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/player2.png\");\n\n//# sourceURL=webpack://frogjump/./src/Sprait/Player/player2.png?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frogjump/./src/style/main.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;