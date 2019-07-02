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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ad.js":
/*!*******************!*\
  !*** ./src/ad.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * generate Html node for ad \n * @param  {object} adData     data of AD\n * @return {string} adTemplate\n */\nmodule.exports = function generateAdNode(adData) {\n  insertStyle();\n  var type = adData.type,\n      title = adData.title,\n      description = adData.description,\n      image = adData.image,\n      video_url = adData.video_url,\n      url = adData.url;\n  var adTemplate = \"\\n    <div id=\\\"ad-overlay\\\" class=\\\"overlay\\\" onclick=\\\"closeAd()\\\">\\n      <div class=\\\"ad-contenct\\\">\\n        <div class=\\\"remove-btn-wrapper\\\" onclick=\\\"closeAd()\\\">\\n          <div class=\\\"remove-btn remove-btn-01\\\"></div>\\n          <div class=\\\"remove-btn remove-btn-02\\\"></div>\\n        </div>\\n        <div class=\\\"ad\\\">\\n        \".concat(type === 'VIDEO' ? \"<div class=\\\"imgWrapper\\\">\\n                  <a \\n                    class=\\\"play-icon\\\" \\n                    target=\\\"_blank\\\" \\n                    href=\".concat(video_url, \" \\n                    onclick=\\\"javascript:(function(event) { event.stopPropagation(); })(event)\\\"\\n                  >\\n                    <div class=\\\"play-icon-arrow\\\"></div>\\n                  </a>\\n                  <h2 class='video-title'>\").concat(title, \"</h2>\\n                  <a target=\\\"_blank\\\" href=\").concat(video_url, \">\\n                    <img src=\").concat(image, \" />\\n                  </a>\\n              </div>\") : \" <div class=\\\"imgWrapper\\\">\\n                  <a \\n                    target=\\\"_blank\\\" href=\".concat(url, \" \\n                    onclick=\\\"javascript:(function(event) { event.stopPropagation(); })(event)\\\"\\n                  >\\n                    <img  src=\").concat(image, \" />\\n                  </a>\\n                </div>\\n                <div class='ad-desc'>\\n                  <h2>\").concat(title, \"</h2>\\n                  <h3>\").concat(description, \"</h3>\\n                </div>\\n            \"), \"\\n        </div>\\n    </div>\\n  </div>\");\n  return adTemplate;\n};\n/**\n * TODO: check if style already exist, prevent overwirte the original style\n * add class through insert style tag inside head tag\n */\n\n\nfunction insertStyle() {\n  var style = document.createElement('style');\n  style.innerHTML = \"\\n  #ad-overlay.overlay {\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    width: 100vw;\\n    height: 100vh;\\n    background-color: rgba(0, 0, 0, .7);\\n    z-index: 10000;\\n  }\\n\\n\\n  #ad-overlay .ad-contenct {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    width: 70%;\\n    height: 80%;\\n    transform: translate(-50%, -50%);\\n  }\\n\\n  #ad-overlay .ad-contenct .ad {\\n    width: 100%;\\n    height: 100%;\\n  }\\n\\n  #ad-overlay img {\\n    width: 100%;\\n    height: 100%;\\n    object-fit: cover;\\n  }\\n  #ad-overlay .remove-btn-wrapper {\\n    position: absolute;\\n    top: -7%;\\n    right: 0;\\n    width: 3%;\\n    height: 5%;\\n  }\\n\\n  #ad-overlay .remove-btn {\\n    width: 15%;\\n    height: 100%;\\n  }\\n\\n  #ad-overlay .remove-btn-01 {\\n    background: #000;\\n    transform: translate(250%, 0%) rotate(45deg);\\n  }\\n\\n  #ad-overlay .remove-btn-02 {\\n    background: #000;\\n    transform: translate(250%, -98%) rotate(-45deg);\\n  }\\n\\n  #ad-overlay h2 {\\n    color: #333;\\n    margin: 0;\\n  }\\n\\n  #ad-overlay h3 {\\n    margin: 0;\\n  }\\n\\n  #ad-overlay .ad-desc {\\n    background: #999;\\n    height: 20%;\\n  }\\n\\n  #ad-overlay .imgWrapper {\\n    width: 100%;\\n    height: 80%;\\n  }\\n\\n  #ad-overlay .video-title {\\n    font-size: 2rem;\\n    position: fixed;\\n    top: 2%;\\n    left: 2%;\\n    color: white;\\n    text-shadow: 2px 2px 3px #333;\\n  }\\n\\n  #ad-overlay .play-icon {\\n    display: block;\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    width: 8em;\\n    height: 8em;\\n    border-radius: 50%;\\n    background: rgba(3, 3, 3, .6);\\n    border: .3em solid #f2f5f8;\\n  }\\n\\n  #ad-overlay .play-icon-arrow {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    clip-path: polygon(100% 50%, 16% 0, 16% 100%);\\n    background-color: #f2f5f8;\\n    width: 40%;\\n    height: 40%;\\n  }\\n  \";\n  var ref = document.getElementsByTagName('head')[0];\n  ref.parentNode.insertBefore(style, ref);\n}\n\n//# sourceURL=webpack:///./src/ad.js?");

/***/ }),

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar _require = __webpack_require__(/*! ./config */ \"./src/config.js\"),\n    adServiceApi = _require.adServiceApi,\n    mode = _require.mode,\n    ERROR_CODE = _require.ERROR_CODE;\n/**\n * call auth serice to authenticate user is valid\n * @param {string} clientd clientId provided by user\n */\n\n\nmodule.exports = function authenticateUser(clientId) {\n  var authResult = clientId ? authenticate(clientId) : {\n    isSucces: false,\n    errMsg: ERROR_CODE['004']\n  };\n  return authResult;\n};\n\nfunction authenticate(clientId) {\n  if (mode === 'dev') return {\n    isSucces: true\n  };\n  var authResult;\n  sendAuthSevice({\n    clientId: clientId\n  }).then(function (result) {\n    return authResult = _objectSpread({}, result);\n  })[\"catch\"](function (e) {\n    return authResult = {\n      isSucces: false,\n      errMsg: e.message\n    };\n  });\n  return authResult;\n}\n\nfunction sendAuthSevice(data) {\n  // We don't have a api to authenticate registered user yet, just in case \n  var authURL = \"\".concat(adServiceApi, \"/auth\");\n  return fetch(authURL, {\n    method: 'POST',\n    mode: 'cors',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    redirect: 'follow',\n    body: data\n  }).then(function (res) {\n    return res.json();\n  })[\"catch\"](function (e) {\n    return e;\n  });\n}\n\n//# sourceURL=webpack:///./src/auth.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var adServiceApi =  true ? 'http://localhost:8080' : undefined;\nvar mode =  true ? 'dev' : undefined;\nvar ERROR_CODE = {\n  '001': 'AD api does not exist, please notify adminstrator',\n  '002': 'No add has been loaded or ad type is other',\n  '003': \"You have to specify \\\"onAdLoaded\\\" listener in order to control \\n  the timing to show ad or remove \\\"isAutoLoad: false\\\" from AD.Init()\",\n  '004': 'Please provide client ID'\n};\nmodule.exports = {\n  adServiceApi: adServiceApi,\n  mode: mode,\n  ERROR_CODE: ERROR_CODE\n};\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var init = __webpack_require__(/*! ./init */ \"./src/init.js\");\n\nvar AD = {\n  init: init\n};\nwindow.AD = AD;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var loadAd = __webpack_require__(/*! ./loadAd.js */ \"./src/loadAd.js\");\n\nvar authenticateUser = __webpack_require__(/*! ./auth */ \"./src/auth.js\");\n\nmodule.exports = function init(userConfig) {\n  var clientId = userConfig.clientId,\n      onAdLoaded = userConfig.onAdLoaded,\n      onAdFailed = userConfig.onAdFailed,\n      onAdImpression = userConfig.onAdImpression,\n      _userConfig$isAutoloa = userConfig.isAutoloaded,\n      isAutoloaded = _userConfig$isAutoloa === void 0 ? true : _userConfig$isAutoloa,\n      adType = userConfig.adType;\n  var authResult = authenticateUser(clientId);\n  if (!authResult.isSucces) return console.error(\"AD SDK error occured: \".concat(authResult.errMsg));\n  loadAd(onAdLoaded, onAdFailed, adType, isAutoloaded);\n};\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ }),

/***/ "./src/loadAd.js":
/*!***********************!*\
  !*** ./src/loadAd.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ./config */ \"./src/config.js\"),\n    adServiceApi = _require.adServiceApi,\n    ERROR_CODE = _require.ERROR_CODE;\n\nvar _ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar generateAdNode = __webpack_require__(/*! ./ad */ \"./src/ad.js\");\n/**\n * Loding AD to user's interface\n * @param {func} onAdLoaded        onAdLoaded Listener passed by user\n * @param {func} onAdFailed        onAdFailed Listener passed by user\n * @param {string} adType          AD type speicfy by user\n * @param {boolean} isAutoloaded   is auto load AD speicfy by user\n */\n\n\nmodule.exports = function loadAd(onAdLoaded, onAdFailed, adType, isAutoloaded) {\n  var isApiExist = !!adServiceApi;\n  if (!isApiExist) console.error(ERROR_CODE['001']);\n  var adURL = \"\".concat(adServiceApi, \"/ads\");\n  fetch(adURL).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    var isRenderAd = checkIfRenderAd(data, adType);\n\n    if (!isRenderAd) {\n      return _.isFunction(onAdFailed) ? onAdFailed({\n        errMsg: ERROR_CODE['002']\n      }) : console.error(ERROR_CODE['002']);\n    }\n\n    if (!isAutoloaded) {\n      return _.isFunction(onAdLoaded) ? onAdLoaded(function () {\n        return renderAd(generateAdNode(data));\n      }) : console.error(ERROR_CODE['003']);\n    }\n\n    renderAd(generateAdNode(data));\n  })[\"catch\"](function (e) {\n    console.error('error occured at loading ad:', e);\n    if (_.isFunction(onAdFailed)) onAdFailed({\n      errMsg: e.message\n    });\n  });\n};\n/**\n * Check if Advertisment data is valid and ad type is what user specified\n * @param {object} data   Advertisment data\n * @param {string} adType ad type speicfy by user\n */\n\n\nfunction checkIfRenderAd(data, adType) {\n  var success = data.success,\n      type = data.type;\n  if (!success) return false;\n  if (adType && type !== _.toUpper(adType)) return false;\n  return true;\n}\n/**\n * Render AD\n * @param {object} adNode html dom node of ad\n */\n\n\nfunction renderAd(adNode) {\n  var adContainer = document.createElement('div');\n  adContainer.innerHTML = adNode;\n  var body = document.getElementsByTagName('body')[0];\n  body.appendChild(adContainer);\n  window.closeAd = closeAd;\n}\n/**\n * Close AD\n */\n\n\nfunction closeAd() {\n  var ad = document.getElementById('ad-overlay');\n  ad.remove();\n}\n\n//# sourceURL=webpack:///./src/loadAd.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function isFunction(functionToCheck) {\n  return functionToCheck && typeof functionToCheck === 'function';\n}\n\nfunction toUpper(str) {\n  return str ? typeof str === 'string' ? str.trim().toUpperCase() : '' : '';\n}\n\nmodule.exports = {\n  isFunction: isFunction,\n  toUpper: toUpper\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });