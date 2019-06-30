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

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar _require = __webpack_require__(/*! ./config */ \"./src/config.js\"),\n    adServiceApi = _require.adServiceApi,\n    mode = _require.mode;\n\nmodule.exports = function authenticateUser(clientId) {\n  var authResult = clientId ? authenticate(clientId) : {\n    isSucces: false,\n    errMsg: 'Please provide client ID'\n  };\n  return authResult;\n};\n\nfunction authenticate(clientId) {\n  if (mode === 'dev') return {\n    isSucces: true\n  };\n  var authResult;\n  sendAuthSevice({\n    clientId: clientId\n  }).then(function (result) {\n    return authResult = _objectSpread({}, result);\n  })[\"catch\"](function (e) {\n    return authResult = {\n      isSucces: false,\n      errMsg: e.message\n    };\n  });\n  return authResult;\n}\n\nfunction sendAuthSevice(data) {\n  // We don't have a api to authenticate registered user yet, just in case \n  var authURL = \"\".concat(adServiceApi, \"/auth\");\n  return fetch(authURL, {\n    method: 'POST',\n    mode: 'cors',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    redirect: 'follow',\n    body: data\n  }).then(function (res) {\n    return res.json();\n  })[\"catch\"](function (e) {\n    return e;\n  });\n}\n\n//# sourceURL=webpack:///./src/auth.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var adServiceApi =  true ? 'http://localhost:8080' : undefined;\nvar mode =  true ? 'dev' : undefined;\nmodule.exports = {\n  adServiceApi: adServiceApi,\n  mode: mode\n};\n\n//# sourceURL=webpack:///./src/config.js?");

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

eval("var _require = __webpack_require__(/*! ./config */ \"./src/config.js\"),\n    adServiceApi = _require.adServiceApi;\n\nvar _require2 = __webpack_require__(/*! ./utils */ \"./src/utils.js\"),\n    _ = _require2._;\n\nmodule.exports = function loadAd(onAdLoaded, onAdFailed, adType, isAutoloaded) {\n  var isApiExist = !!adServiceApi;\n  if (!isApiExist) console.error('AD api does not exist, please notify adminstrator');\n  var adURL = \"\".concat(adServiceApi, \"/ads\");\n  fetch(adURL).then(function (res) {\n    return res.json();\n  }).then(function (data) {\n    var isRenderAd = checkIfRenderAd(data, adType);\n    if (!isRenderAd && _.isFunction(onAdFailed)) return onAdFailed({\n      errMsg: 'No add has been loaded or ad type is other'\n    }); // TODO: create a function => showAd, let user can simplely use the method to show AD \n\n    if (!isAutoloaded && _.isFunction(onAdLoaded)) return onAdLoaded();\n  })[\"catch\"](function (e) {\n    console.error('error occured at loading ad:', e);\n    if (_.isFunction(onAdFailed)) onAdFailed({\n      errMsg: e.message\n    });\n  });\n};\n\nfunction checkIfRenderAd(data, adType) {\n  var success = data.success,\n      type = data.type;\n  if (!success) return false;\n  if (type !== _.toUpper(adType)) return false;\n  return true;\n}\n\nfunction renderAd() {}\n\nfunction showAd(overlay) {\n  document.body.insertBefore(overlay, document.body.firstChild);\n}\n\n//# sourceURL=webpack:///./src/loadAd.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function isFunction(functionToCheck) {\n  return functionToCheck && typeof a === 'function';\n}\n\nfunction toUpper(str) {\n  return str ? typeof str === 'string' ? str.trim().toUpperCase() : '' : '';\n}\n\nfunction generateAdNode(adData) {\n  var overlayStyle = {\n    position: 'fixed',\n    top: 0,\n    left: 0,\n    width: '100vw',\n    height: '100vh',\n    backgroundColor: 'rgba(0, 0, 0, .35)'\n  };\n  var overlay = document.createElement('div');\n  Object.assign(overlay.style, overlayStyle);\n  var adCotentStyle = {\n    position: 'absolute',\n    top: '50%',\n    left: '50%',\n    width: '60%',\n    height: '40%',\n    transform: 'translate(-50%, -50%)'\n  };\n  var adCotent = document.createElement('div');\n  Object.assign(adCotent, adCotentStyle); // const ad = document.crea\n\n  showAd(overlay);\n}\n\nmodule.exports = {\n  _: {\n    isFunction: isFunction,\n    toUpper: toUpper\n  },\n  generateAdNode: generateAdNode\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });