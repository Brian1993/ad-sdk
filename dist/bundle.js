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

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar _require = __webpack_require__(/*! ./config */ \"./src/config.js\"),\n    adServiceApi = _require.adServiceApi,\n    mode = _require.mode;\n\nmodule.exports = function authenticateUser(clientId) {\n  var authResult = clientId ? authenticate(clientId) : {\n    isSucces: false,\n    errMsg: 'Please provide client ID'\n  };\n  return authResult;\n};\n\nfunction authenticate(clientId) {\n  try {\n    console.log('mode:', mode);\n    if (mode === 'dev') return {\n      isSucces: true\n    };\n    var authResult = sendAuthSevice({\n      clientId: clientId\n    });\n    return authResult;\n  } catch (e) {}\n}\n\nfunction sendAuthSevice(_x) {\n  return _sendAuthSevice.apply(this, arguments);\n}\n\nfunction _sendAuthSevice() {\n  _sendAuthSevice = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(data) {\n    var authURL, res;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // We don't have a api to authenticate registered user yet, just in case \n            authURL = \"\".concat(adServiceApi, \"/auth\");\n            _context.next = 3;\n            return fetch(authURL, {\n              method: 'POST',\n              mode: 'cors',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              redirect: 'follow',\n              body: data\n            }).then(function (res) {\n              return res.json();\n            })[\"catch\"](function (e) {\n              return e;\n            });\n\n          case 3:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _sendAuthSevice.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/auth.js?");

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

eval("var loadAd = __webpack_require__(/*! ./loadAd.js */ \"./src/loadAd.js\");\n\nvar authenticateUser = __webpack_require__(/*! ./auth */ \"./src/auth.js\");\n\nmodule.exports = function init(userConfig) {\n  var clientId = userConfig.clientId,\n      onAdLoaded = userConfig.onAdLoaded,\n      onAdFailed = userConfig.onAdFailed,\n      onAdImpression = userConfig.onAdImpression,\n      _userConfig$isAutoloa = userConfig.isAutoloaded,\n      isAutoloaded = _userConfig$isAutoloa === void 0 ? true : _userConfig$isAutoloa;\n  var authResult = authenticateUser(clientId);\n  if (!authResult.isSucces) return console.log(\"AD SDK error occured: \".concat(authResult.errMsg));\n  loadAd(onAdLoaded, onAdFailed, isAutoloaded);\n};\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ }),

/***/ "./src/loadAd.js":
/*!***********************!*\
  !*** ./src/loadAd.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ./config */ \"./src/config.js\"),\n    adServiceApi = _require.adServiceApi;\n\nmodule.exports = function loadAd(onAdLoaded, onAdFailed, isAutoloaded) {\n  try {\n    var isApiExist = !!adServiceApi;\n    if (!isApiExist) console.error('AD api does not exist, please notify adminstrator');\n    var adURL = \"\".concat(adServiceApi, \"/ads\");\n    var res = load(adURL); // checkRespone(res)\n    // if (isAutoloaded) \n\n    if (onAdLoaded) onAdLoaded();\n  } catch (e) {\n    if (onAdFailed) onAdFailed(e);\n    console.error('error occured at loading ads:', e);\n  }\n};\n\nfunction load(adURL) {\n  try {\n    var res = fetch(adURL).then(function (res) {\n      return res.json();\n    });\n    return res;\n  } catch (e) {\n    throw e;\n  }\n} // function checkRespone (res) {\n//   if()\n// }\n\n//# sourceURL=webpack:///./src/loadAd.js?");

/***/ })

/******/ });