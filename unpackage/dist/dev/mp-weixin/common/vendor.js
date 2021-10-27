(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse || !wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"mall-App","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 11:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 12:
/*!******************************************!*\
  !*** D:/uni-app/mall-App/store/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: {
    cartList: [] },

  mutations: {
    isChoise: function isChoise(state, payload) {
      var cartItem = state.cartList.find(function (item) {return item.id == payload.id;});
      cartItem.choice = !cartItem.choice;
    },
    choiseAll: function choiseAll(state, payload) {
      state.cartList.forEach(function (item) {
        item.choice = payload;
      });
    },
    addCartCount: function addCartCount(state, payload) {
      var cartItem = state.cartList.find(function (item) {return item.id == payload.id;});
      cartItem.count++;
    },
    subCartCount: function subCartCount(state, payload) {
      var cartItem = state.cartList.find(function (item) {return item.id == payload.id;});
      cartItem.count--;
    },
    addToCart: function addToCart(state, payload) {
      state.cartList.push(payload);
    },
    delectCart: function delectCart(state) {
      while (state.cartList.find(function (item) {return item.choice;})) {
        for (var i = 0; i < state.cartList.length; i++) {
          if (state.cartList[i].choice) {
            state.cartList.splice(i, 1);
            break;
          }

        }
      }

    } },

  actions: {
    addCart: function addCart(_ref, payload) {var commit = _ref.commit,state = _ref.state;
      payload.choice = true;
      console.log(payload);
      var oldInfo = state.cartList.find(function (item) {
        return item.id == payload.id;
      });
      if (!oldInfo) {
        uni.showToast({
          title: '添加购物车成功',
          duration: 1500 });

        payload.count = 1;
        commit('addToCart', payload);
      } else {
        uni.showToast({
          icon: "error",
          title: '已添加购物车',
          duration: 1500 });

        // console.log('+1');
        // commit('addCartCount',oldInfo)
      }
    } },

  getters: {} });var _default =


store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 13:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(item =>String.fromCharCode(item)).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"mall-App","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"mall-App","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"mall-App","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"mall-App","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!*******************************************!*\
  !*** D:/uni-app/mall-App/service/home.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getHomeData = getHomeData;exports.getGoods = getGoods;var _request = __webpack_require__(/*! ./request.js */ 21);

function getHomeData() {
  return (0, _request.request1)({
    url: '/home/multidata',
    methods: 'GET' });

}

function getGoods(type, page) {
  return (0, _request.request2)({
    url: '/home/data',
    methods: 'GET',
    data: {
      type: type,
      page: page } });


}

/***/ }),

/***/ 21:
/*!**********************************************!*\
  !*** D:/uni-app/mall-App/service/request.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.request1 = request1;exports.request2 = request2;function baseRequest(baseUrl, config) {
  uni.showLoading({
    mask: true,
    title: '加载中' });

  return new Promise(function (resole, reject) {
    uni.request({
      url: baseUrl + config.url,
      timeout: 10000,
      data: config.data,
      method: config.method,
      success: function success(res) {
        resole(res.data);
      } });

  });
}

function request1(config) {
  return baseRequest('http://123.207.32.32:8000', config);
}

function request2(config) {
  return baseRequest('http://152.136.185.210:8000/api/w6', config);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 217:
/*!*******************************************************************************!*\
  !*** D:/uni-app/mall-App/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "pulldown": "\uE588",
  "refreshempty": "\uE461",
  "back": "\uE471",
  "forward": "\uE470",
  "more": "\uE507",
  "more-filled": "\uE537",
  "scan": "\uE612",
  "qq": "\uE264",
  "weibo": "\uE260",
  "weixin": "\uE261",
  "pengyouquan": "\uE262",
  "loop": "\uE565",
  "refresh": "\uE407",
  "refresh-filled": "\uE437",
  "arrowthindown": "\uE585",
  "arrowthinleft": "\uE586",
  "arrowthinright": "\uE587",
  "arrowthinup": "\uE584",
  "undo-filled": "\uE7D6",
  "undo": "\uE406",
  "redo": "\uE405",
  "redo-filled": "\uE7D9",
  "bars": "\uE563",
  "chatboxes": "\uE203",
  "camera": "\uE301",
  "chatboxes-filled": "\uE233",
  "camera-filled": "\uE7EF",
  "cart-filled": "\uE7F4",
  "cart": "\uE7F5",
  "checkbox-filled": "\uE442",
  "checkbox": "\uE7FA",
  "arrowleft": "\uE582",
  "arrowdown": "\uE581",
  "arrowright": "\uE583",
  "smallcircle-filled": "\uE801",
  "arrowup": "\uE580",
  "circle": "\uE411",
  "eye-filled": "\uE568",
  "eye-slash-filled": "\uE822",
  "eye-slash": "\uE823",
  "eye": "\uE824",
  "flag-filled": "\uE825",
  "flag": "\uE508",
  "gear-filled": "\uE532",
  "reload": "\uE462",
  "gear": "\uE502",
  "hand-thumbsdown-filled": "\uE83B",
  "hand-thumbsdown": "\uE83C",
  "hand-thumbsup-filled": "\uE83D",
  "heart-filled": "\uE83E",
  "hand-thumbsup": "\uE83F",
  "heart": "\uE840",
  "home": "\uE500",
  "info": "\uE504",
  "home-filled": "\uE530",
  "info-filled": "\uE534",
  "circle-filled": "\uE441",
  "chat-filled": "\uE847",
  "chat": "\uE263",
  "mail-open-filled": "\uE84D",
  "email-filled": "\uE231",
  "mail-open": "\uE84E",
  "email": "\uE201",
  "checkmarkempty": "\uE472",
  "list": "\uE562",
  "locked-filled": "\uE856",
  "locked": "\uE506",
  "map-filled": "\uE85C",
  "map-pin": "\uE85E",
  "map-pin-ellipse": "\uE864",
  "map": "\uE364",
  "minus-filled": "\uE440",
  "mic-filled": "\uE332",
  "minus": "\uE410",
  "micoff": "\uE360",
  "mic": "\uE302",
  "clear": "\uE434",
  "smallcircle": "\uE868",
  "close": "\uE404",
  "closeempty": "\uE460",
  "paperclip": "\uE567",
  "paperplane": "\uE503",
  "paperplane-filled": "\uE86E",
  "person-filled": "\uE131",
  "contact-filled": "\uE130",
  "person": "\uE101",
  "contact": "\uE100",
  "images-filled": "\uE87A",
  "phone": "\uE200",
  "images": "\uE87B",
  "image": "\uE363",
  "image-filled": "\uE877",
  "location-filled": "\uE333",
  "location": "\uE303",
  "plus-filled": "\uE439",
  "plus": "\uE409",
  "plusempty": "\uE468",
  "help-filled": "\uE535",
  "help": "\uE505",
  "navigate-filled": "\uE884",
  "navigate": "\uE501",
  "mic-slash-filled": "\uE892",
  "search": "\uE466",
  "settings": "\uE560",
  "sound": "\uE590",
  "sound-filled": "\uE8A1",
  "spinner-cycle": "\uE465",
  "download-filled": "\uE8A4",
  "personadd-filled": "\uE132",
  "videocam-filled": "\uE8AF",
  "personadd": "\uE102",
  "upload": "\uE402",
  "upload-filled": "\uE8B1",
  "starhalf": "\uE463",
  "star-filled": "\uE438",
  "star": "\uE408",
  "trash": "\uE401",
  "phone-filled": "\uE230",
  "compose": "\uE400",
  "videocam": "\uE300",
  "trash-filled": "\uE8DC",
  "download": "\uE403",
  "chatbubble-filled": "\uE232",
  "chatbubble": "\uE202",
  "cloud-download": "\uE8E4",
  "cloud-upload-filled": "\uE8E5",
  "cloud-upload": "\uE8E6",
  "cloud-download-filled": "\uE8E9",
  "headphones": "\uE8BF",
  "shop": "\uE609" };exports.default = _default;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!***********************************************!*\
  !*** D:/uni-app/mall-App/service/category.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getCategory = getCategory;exports.getCategoryData = getCategoryData;exports.getCategoryDetail = getCategoryDetail;var _request = __webpack_require__(/*! ./request.js */ 21);

function getCategory() {
  return (0, _request.request2)({
    url: '/category' });

}

function getCategoryData(maitKey) {
  return (0, _request.request2)({
    url: '/subcategory',
    data: {
      maitKey: maitKey } });


}

function getCategoryDetail(miniWallkey) {
  return (0, _request.request2)({
    url: '/subcategory/detail',
    data: {
      miniWallkey: miniWallkey,
      type: 'sell' } });


}

/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') !== -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') !== -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


var ignoreVueI18n = true;
function watchAppLocale(appVm, i18n) {
  appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
    i18n.setLocale(newLocale);
  });
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    locale =
    typeof uni !== 'undefined' && uni.getLocale && uni.getLocale() ||
    LOCALE_EN;
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var appVm = getApp().$vm;
      watchAppLocale(appVm, i18n);
      if (!appVm.$t || !appVm.$i18n || ignoreVueI18n) {
        // if (!locale) {
        //   i18n.setLocale(getDefaultLocale())
        // }
        /* eslint-disable no-func-assign */
        _t = function t(key, values) {
          // 触发响应式
          appVm.$locale;
          return i18n.t(key, values);
        };
      } else
      {
        /* eslint-disable no-func-assign */
        _t = function t(key, values) {
          var $i18n = appVm.$i18n;
          var silentTranslationWarn = $i18n.silentTranslationWarn;
          $i18n.silentTranslationWarn = true;
          var msg = appVm.$t(key, values);
          $i18n.silentTranslationWarn = silentTranslationWarn;
          if (msg !== key) {
            return msg;
          }
          return i18n.t(key, $i18n.locale, values);
        };
      }
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 47:
/*!************************************************************!*\
  !*** D:/uni-app/mall-App/static/image/profile/message.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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Z5WlbzkHIrtqVdNzERFdwnJEnj0LlRirU/fuYmXNmH7ugw9MD+UuH/wO5L+JlVM7sWd+PqAbJMYj9ToiovKh0h3DJ0/29eBw8fl3IC6qACACjUyMPZqeDsFW+etDD5mei4gIwEs4mJkJZNdKyhwxQgRw3bV8mc+/A3Ep+R8i9ua9Y0aPhkI1PjfX9FxE5McUhXh4yRLo4ZqB8x98sLIEh0ulCRAXkdzc3NziYoite6OHDAGwHJgzx/RcRORXuqFxWhrErr5nUkSEWGslQc6dMz1Ueas0H2H9GrUjWzp3jBgB4AQ2pKZC0Btf1Khhei4iqhRW4q2iIgCz8E5cnEj28KSrZ8wwPZSn+U2AuKg6HLGtrr8eam2TxbNnQxCKzN69Tc9FRD5INQqr3n0XEnDUGj1mjMjCUdNH+c7TdH8rvwuQi51/1s3AgYDeLjOnTAEQizWdOpmei4i8kGIRIjZtgki6DvnLX0SyRiYXLF9ueixT/D5ALqbqcEzq1aULYK2ww4YPB3QD5g4aBMh0RPPhikR+IgydDx8G5CUtfvVVAE0lfv58kaxVSZ+sX296OG/BACkjVYdj0qEbbwSsHLtBp04AuiLu+usBzQKaNgVwUGbVrAmVT/XKoCDT8xLRJQia4I7CQkBbo+GpU4BEAV99BeAL7V9QAFid5O4PPxRZ+FrSiU8+MT0uEREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREf3E/wMVGLv09T7hKQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNC0zMFQxMDo0NDoyOCswODowMP6jGBIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDQtMzBUMTA6NDQ6MjgrMDg6MDCP/qCuAAAASnRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl8xbngwYzh5NHA4My9tZXNzYWdlLnN2ZzLK5sEAAAAASUVORK5CYII="

/***/ }),

/***/ 48:
/*!************************************************************!*\
  !*** D:/uni-app/mall-App/static/image/profile/pointer.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 49:
/*!********************************************************!*\
  !*** D:/uni-app/mall-App/static/image/profile/vip.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** D:/uni-app/mall-App/pages.json ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 50:
/*!*********************************************************!*\
  !*** D:/uni-app/mall-App/static/image/profile/cart.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAYAAAD9yHLdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAI09JREFUeNrt3XdgVFXaBvDnvZNGQCAJRIKICBiq6KIgzfUTLIgsqCQUBXWlWbFBEpQlRkVIkCKwroINF4QwwS4IVhTRtbAu0gkhCIKruUMRSAjJfb8/koCNFciZuTPJ8/tnYIAz77kZ5pl7zrnnAkREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQUesTtAk6W6sBnUxIbNgSs96zroqJOvaEjxerYtljenMysffvc7hcRUagJ2gBRBQARYMAnqam33gpgPZCWBuBdoHFjgy8Viw6FhQD6ad9t26D6JbBsGUQGIfWtt6B1Ht3700cfiTV7zuw5R464fVyIiIJFEAdI/3Gpg2bNAmQLGt9xh4uVPIpJ27cDUiJjH3sMWmeqz37+eQYKEVV3QRcg6gz4JO2VK66AYIZ+tmyZ2/X8tkDNxMa8PIg1ArlDhogsXJ65btUqt8siIgo0y+0CfkM03mlzyy1ul3H8+iQVLZs2BfRj/PPDD1X7f5p6bUrKsSE3IqLqIfgCRNFU7ktMdLuME9AH2eHhgExHYmYmMMCb2vWJJ9wuiogoUIIvQEQsvLF/v9tlnIIcdLvrLnUGbE+74bHH3C6GiMjfgi9AIE0xZ/lyt6s49fKRoo3GjlXt3ytt9aBBbpdDROQvwRcgWnoBcv/+92Orn0KVzNBHZs5UTU4ek9SggdvVEBGZFnQBcuzCPn1AW1x5JVRnYfbGjW7XdQoeRGJcHGDVtC6eNs3tYoiITAv6VUPqjBg+Ynh4OGSvLybn2msBGY78zp0BXKWbo6NPvkGpKd3CwiB6Ng43agTgKZzZrRuAGbj+FNr7YxG4tbQU8JTK04mJIi+9NGlSXp7Lh5WIqNKCPkD8TZ3kpHStVQti1SjKv+8+ADnYM24cjq6yMuaveGD6dJHsnpl17r3X7X4TEVVWtQ+QX1NNTh6z/pJLAOse68olS2DqzESxGoMLCiDZWzLPjY8vu2Kk7OoRIqJQxAA5jmOrqOQ0zX7pJXMtW4cwu21bkQVvZO5Zt87tfhIRnaqgm0QPFiKLlkxqv2ABgIWYtGKFuZadNIz485/d7h8RUWUxQP5YR20xZ47B9pZhVIcObneKiKiyGCB/RD1zS1NWrjTY4k/o2rat290iIqosBsgfkZdaTxn27bcA/ob0vXsNtJiE0jZtVNM1XS0efyIKWWFuFxDsKlZLqeJl3Vk26S3o2rUSTZat6tL10w7vbNq07Knc3ED1R3XAJ2MimjWDaifrissug1gdpW3duoF6faIq4jptceAAgM7YmJ8P9byiQ//zH7Hmz8xK3LnT7eIChQFy4mJk2dq1Zb+sVICUEYl1Hq4YyvJfgJRd5xIRAbHeKkqbPh3AJfCNHAmRfoi1LECbczEx0Ulbg43ljwAgJZBnAdUB/VKf37ABQLxa8+dDrblhXz3zjFgLDj0247//dbto0ziEcqIUTXRfRYAYaa+vDAzAXIjIs0XnPP00gD7AbbcBKA8OIvKDMGxs1QqAT9Y/+ijgRJe23bpVdcC1qTEZGepc1fyuJZGRbhdpCj9ITpSgtzxoMEAEiXqm/wJEnYHPpiReeCEgI9Dv5psDcYiI6FcEPbC1Zk0AERgxfjykdsca53/5pTqD9o157pxz3C6vshggJ0qt2SUXGAwQIF5e8+MZiOib8uNf/uL/A0NEJ6FUnmjbFuJMsa787LNjX/RCEwPkBIm1YOSU1QUFADqg0/ffG2ixAXokJh6dozCvj1xQr16gjxMRnZBNmBEbC9Ht8sGyZarJySmJLVq4XdTJYoCcLEUMbjdyJnJ0s8aiVH+8cbSlnhbK91MhqhbKggTyjAxfvFh1SPzowTVrul3UiWKAnCzBGdhoci5EDvlnMl064eVFiwDUwhfFxYE7QER08mQECtq0gRYnWEPS092u5kQxQE5eexWjcyH9dJL5ABHJlkzJz4eiqdQfNy6Ax4eITpVgs9S/555QmWRngJwslQmeWKMB0lre8t9kuljZD07KnjwZwId69S23AFiLN6veenSiKqJ8aNv5h/ROSXG7mD/C7dxP0s9uQHVD0d79+wEsxCSpzHHsjZRt20Syh2TGVVyZ7sf6NTk5OdnjAaw3m9x13nlQneJ5KzY2cEeQKISJFem8Eh0NOGcjqU0bKJrKumHDIJKKlkb//8aiQ2EhNCwsql+DBmLNn5kh+/e73f3fHA63CwhV6vTPT+27dauBN85ApKlCnflRdWvXFsubkyEHDrjdPyL6Y6o3abpGRUGLBhQWvvgiBCIZyckGX2GHNrz5ZpFFq7LunjvX7f7+GoewTpXIZtQxckOoo2cwhRNat3a7W0R04kTmSoYUFQH7Vxd+OGQIAI/ebXKIW5bJF5dd5nY/j4cBcsp0B4q++cZYc2I9iVHnnut2r4jo5Im1NHdmr8OHoRov/3rgAYNNv4onDOy95ycMkFO3WNKMTqavFuV9QohC23+nRV2zdCmgY3D1Dz8YaPCvSDvrrKNDZUGGAXKqVKN1odHNFb9DSwYIUSgTa4VkSEkJIDu11pdfGmiybPNTPZR8eGejRm7379cYIJUQlblpE4DXMeDIkUo3JtiDJxkgRFXEIMk2uROE9R/dG3xXqDNATlHZaqniYkC/x3ubNxto8gt81qCBOoOevr8997AiCnFFmuTxGGtNxCv9g+82DEFXUAj6Qfua3NrEGRH2Fc9EiEJcN6t/w4bmmtPzdP2ePW536tcYIJWl2Cw7TE6m6y58xtVYRCFOtLuRL4Jl14nh4FdRMDIpbxQDpLIErxmdTIe8jC/btHG7W0R08tTpszIl8bTTANyLx886q/IN6p9w87ZtIm9emCGHDrndv19jgFSWqs8ab3Q57x69kkNYRCFJIp/wNGrbFpXf4qi8PRmOQwavNzOMAVJZ0tob2SgvD4r30OzgQQMtHpRn27ZVBQADb0AiCiDrYe1odAjaiz0MkCpLJEMyxHEA7MEFGzYYaDIfqFMHOvCKB/8efOu+ieh/WqsfmxxBkP5yj9ERDqMYIKYIHkQDk1ubOB2ddE6mE4UUxf2obfL/bWkd6cEzkGpAr5O+RjZXrHC1czHnQohCimAkDhpZBDMCVxw+DI2pa4/fssXtbh0PA8QUxdvOp0ZPNZvKpwwQolCgOrjlA/kJCQDWoHP9+gaanI95GzeKNXvO7DkGdrrwEwaIKWLVRxuDp5qKenohA4QoJOiRZ51/Gx1yjpSvg3fuowIDxBCRhUOzNu/aBWACNtu2gQZjsbNVq2N3ECSioCVYrclGJ88/x5XBO/dRgQFi3suGbjTVE1dGRQFhlzW/7Jxz3O4UEf1PP2K70RGDyao8A6mO6stOo1ubhJVOSUx0u1NE9D8NwrXt2hlrTUufhPIMpBrS65xYk6uxnAus2jwDIQpGqumarpYFwIfdrVoZaLIJsG8fxJuTmbVjh9v9+yMMENNU1lqDcnPNNSidtUezZm53i4h+h27ef+j5Zs0AzMD10dEGWqypQ9euLduDomw/imDGADFNnOkliw2u21bMwos8AyEKSuKkicfk6it5CWuCf+iqAgPED7Yf/vZbALXwRXFxpRsTzEWv5s3d7hMR/R69DL2NLt8dIj8F/+R5BQaIYSJer9dbWgrgGty7bZuBJlfBatxYnaua37UkMtLt/hHRL7SQ9QZXX6lzPhrzDISgtbHSyFxIP8RaFqTumFo7zj7b7V4R0c/JNuw1eAYixU2tCUa3RPIrBojfSCEeMDkXUrrBiedcCFEwUL1J0zUqCsAitDUyxNwNU777TuTVVhPfN3AhcoAwQPxFcURnbt1qrD2xfpBbOBdCFByKog993Lo1gGI8ZWSniDi8GDpzHxUYIH6j65BqchdNvRwXMECIgoKikRVjcu5D/4s6oTP3UYEB4i8iF2tNk9eDYKq+ywAhCg56O741unz3yVCaPK/AAPEbZ3p+3/x8mFrOC6TA5hwIUVAQOR37TE6eY6ezh0NYVO7Ycl59GBO2bzfQ5HLsb9xYneSkdI2IcLt/RNWcjRuNDGFF4NbSUsDpXRJm5JbYAcUA8Tv5QiONzIWUTdYJpLAFl/MSuUH1+uvT0mJiAKzE/WecYaDJ/libmyvi9U7rUljodv9OFgPE73SNdYnJuRDPbXIt50KIXKElN+jlJuc+9GzUDb25jwoMEP8bqstNBohzpg7lXAiRK8T62uzkOTZp69Cb+6jAAPE7WYXRRnfnvcjqy915iVzyTz3N6J0H38WbPAOh41EnWxaavB4Es/RvPAMhcodej3YGz0DUmqSlDBA6rh+8kY3y8wG8jgFHjlS6OcXzuJBzIESBVHZnDhEA10mjNm0MNBmLDoWFkJJh+Uvz8tzu36ligPiZWCskQ0pKALyIuwws5xU0QHiTJlzOSxRAmpyUmnLmmQAeQUbdupVvD7Nx9rp1P9u9OyQxQAJG62qOkbmQ8r13wp499PxZZ7ndK6JqQaSl9ZzBuQ9RHwaE7uR5BQZIwMheSTI4FyKlk8NSOBdCFBjWUh1mdOuSF5EfunMfFRgggVOE1w3uzqvWT6XPcC6EKDC0I5YZnTxP1bcYIHTCdJPVwuQZiHaTyQwQogA5rOebHMLyNA5rwSEsOlEqp6OdwetBFFlIYoAQ+ZM6l2i6hoUBuAGDW7Y00GQLjPL5ROZtfKzJ7t1u96+yGCABU2eN3WzbNphazitIQQ7nQIj8SuL7F3+fmAhgNpZHRla6PcULGLZmjdvdMoUBEiBizZ4ze86RI1B0Q61vvzXQZE0kNGmizojhI4aHh7vdP6KqybNP3zO6bfsU7A/9uY8KDJBAE/wVXxoZypqLZmFhwJ49seO5nJfIP3SRTje5dQnaysWhP/dRgQEScLoebxicCxHPNIBzIUR+kowYk8t3nfHyOc9A6NTdpBlGd+e1dCfnQoj8QnUOoo0EyECkqUIjGkS8t26d290yhQESaCpva7TZ3XmRxN15iUxSHRI/enDNmhBpjvgmTQw0OQ2jt28Xa/7MDNm/3+3+mcIACTRxPpLuhnfnfYNnIERGadGfrZZt2gDoh1jLxOekyvtVZ+6jAgMk0BRaY9O2bTh6L+RKe0YGcg6EyCixnsQok1eeYx66VJ25jwoMkAATy5uTIcXFAK5AbSPLed/DwrPP/tkFT0RUee2llcnlu3ob7meAkCmqsfjayFxIH2SHh0POuOHw2MaN3e4WUZWgqIG3DS7fVY3WhRzCIlNEfpCJBudCtKSd8wjnQoiMEF2APUbOQI7uPBGVuWmT290yjQHiGnkHX5m8HsQqlXmcCyGqDHWSk8burl8fkMl4Kz7eQJPXaoNNm342dF2lMEDcok68PmdyOa9egOsYIESVItaU0snt2hls8XFsrHpzHxUYIG4ROaz7TQYIJsj5DBCiSvpIHjS5dYl0ldyqN/dRgQHiFt3/TmH9vDyYWs6r+rLuZYAQVY72R57J5btOX9TnGQgZJtbS3Jm9Dh8GsB2P7thR+QYlDX9q2lQ1OTk52eNxu39EoUm+h21y+a5MwzUMEPIXxU1YYmQo6wA6REQAwFmRXM5LdDLUSU5K14gIADsx3MgQ1hjE/vQTkC2Zsn272/3zFwaI2wR34kaTy3mte8L6cTkv0UkRa0BRtx49AMzA9dHRBlq8DGHffCMCAKpud89fGCDuy8IUk8t5ta2zgHMhRCfi6JCvYjVGjh9vrmGcpW0/+cTt/vkbA8R1Eq1Njd4r/R+YzwAhOiFqfd10fFYWBHlY16mTwZaHaZuPPnK7e/7GvZNcV/q2Z0VuLmBZznQDzYm0l6EMEKLfo3rNhrHd4+KAyEZOw+nTAQzDvMGDDb7EKLx06BDgTLP044/d7q+/MUBcF70ookFeHlAUXuRzHFR+++incWl5gLzodt+I/Eu195fpGh0NrTO3cEtsLFDythyOi4NYdeX2uDigNNxJOvNMqPTBoG7dAPQord2/P4CLJb12bT+UdBmunztXLG9hZua+fW4fH38TtwugMqoD5qSmbt8O4F2gUquoRuCKw4cB56m8p2rWFPF6vV4j28YTnTDV5OR7V9WoAXh6ht8cEwPIq/JjTAy09CoZkZAAyDQd3LAhBOPRMCYGwGDExsQA+ojUjokBMBI1Y2IASUKNmBgAlzvLYmIAdMHZMTEAhsptCQkAOiEuJsbt/qLijoOwfrAWtW4tsmDkxJEbN7pdlL8xQIKEOgPOSf3m3XchaI95PXpUvkFPesk5TZqI9VLrKcOq7jJCOjHH/0AvicTwmBhAGqFzTAwgb6F5TMyxD3b9SbMTEgD0sx5u2PD4H+haT86MiQFkF7rVrw9gLppVq9sLvCOvz5olku2btOGuu9wuJlCq0w84uAlG4cPcXAArAQMBgpIPw7dULOdlgASrYx/s4eGRryckQI8Uq9Ow4fE/0E/wm7rqjTImIQEiWzHqjDMAzMZrkZGALse1AKBlS1Xl6GjpbnwGAGhf/vhm2dNS8S1zhd4EAGhY/vfXybNljxV/Dze5fTRd0Rsp27ZBndLISWPHAsipTl/LGSDBQuUNPJWbC9EY9DbQnuAJJFZMpr/7rtvdCxXq3HBXutauDSn+/uCQuDioPBM2rF49iLUfzeLiAPTSWbGxgPM2romLA6QhOsXFAchBt9hYQC9Ct7g4AJv0nthYQJZI57g4AO3xVb16AFK1Zlwcfj4G/xoAlJYqAIjlKf8AOs4H+rEPdr0dADCq/PlffrCLpKJl+TPL3T6qVVICZh04AHVe09MGDhTLm5Mx7sABt4sKNAZIsBCniXbJzQVkn5EvMCrPORc3bw6gq9tdM9Idvf76tLTyIZWnGzb846GXP/ymPlvrJyQAehjfNmwIyEy0josDSn4oSouIACzLcwYAwQhdCgBHrwVrXfYg9+HV8mcqHrsBgORU/EWZXv6LAQCAXcgCAFxcjb6gVkW18EVxMVQb6N6kJLG807PCP//c7aLcwgAJGp7dkrNlC+BEY4SB5kQt60+BvyJdneSk1JTGjSGe/dKuc2dAh+hVDRoAakn7uDgAG7RLbCwgO9EpLg6qyWgbFwegJ6bVqwdBHt6IjQXk76gVFwdgN+6sVQsoLS2/nrfs+Pzh0MsfflN/qOLPiU5AO3z6448ABuuFgwaJteisrPD33nO7KLcxQIJGSVTxW3l5gLU44nkTy3nloFOxO2+4/6pWHRI/enDNmkDxEM/OJ58E8AT2DB4MaD/9xrIAvIlvAECgA3/1j3cBEHkRuwAAL6JN+fNp5Y93+q9uohO0EJNWrADkOW1x/fUiC8/Kmrprl9tFBQteiR4kRLzeaV0KCwFcqFnffWegyX7SoWlT1XRN10pdV/K7jrarxXU8qa+9BmAnLrrxRlT+OhYiNw1Gt02bAFkP3HAD0BJR6N5dZOHQrM0Mjl/jGUiwUU2V7lu2QGQhrjjzzEq01BNXRkVB1ycXpTZqVPbUt9+aK3Rjx8IWgwZB0F6uNbFqjCig/ob0vXsBxOpnS5dC5UE0evllYHfvGue8+qpYK/6S8ZeSEgCCTLdLDV4MkGAjcp3Ozs0F0F9yunevfHvWFC055xwAOUYDRJEgS667DgJgjmtHi6qP8gtkMRr5tg2glV7l8wGYLwm2DehqtPX5oPKOfmDbELwuUwoKANyGlO+/B7AFRfn5UCyALz8fcB6KqrFhg1jenIzuv7hX+fNudzSUMECCjeJR6/HcXAjWaBMT7Wkj2VyxnNfgpJ/gGY1PSABwF6ehq7UWGOXzAToS39o2VJqju88HwQL9xLYB7Wz1sm1ALlCPzwfIAV1s24CzHVNtG5Ak2ePzQa1PdLRtQ3SVdU9BAbT0Uf2LbQNAVKbPJ5a3R4b8Ypnsv8sfX/pNRfG/+N2q45xBmLuFQjXGAAk2IoexIjcXUKCJkRZn4LbyAHmzki39gv4g//nuO65iCjqx6FBYCOidyLNtAE0l3ecD5BnNt21AL8Vm2wasJP1vQQGgZ1pP2DaAPvqpzwfoAp1i21B0lMY+H8Raj3G2DZTW0SO2DYV6Vvh8kNbeiAa2LZIhGeI4AB7+VR3XoP1xKizb87bOb55/BwBw/tHfbyh/zHL7kNLxMECCjZau1xtzcyGWmdvSinTEn/2yO286+ni9AMIwIikpoMcotCyGz3GgOBujfD4IppYPwQwp+yDHuTLL5wPwkebZNlQztcTng8h2vGTbgL5vldg2VM7DZtuGaF/nlYICqDwki30+IKynRto2pPj7IwW2LeL9R/lijH/8ppLTf7e+iv2a3jn6zN0AgFXH7VECAH5zIPBNEHSO7i6KmjuK9h44AGAhJkllfk4evXvtWpHsl7IamrvXc9k1GSJA/3dSdi9ZAsgzMr1nT7eP34l3AO+h2cGDEEzEVtuG6i1YZ9uAvICvbBuif9YVtg3ISut22wY0AltsG0BH5x2fD2p1wSO2DXFGepbaNoCbSlf5fFBPvK60bUjhrrB5Pp/Iq60mvl82FENU1TBAgpRq/3WpWTt2APIw7IpVVKekfEij5ZNR/WrV+tmQg6E6jwbep0Wzpk4F0Awrhg7FyW+mdxO2lpQAGIMNtg2gJUb7fABexEbbBnRN2Td1WaqbbRuqMfjatiE4Tz/x+aC4W14qKIBIN82wbcAp0A5lQy7WCz4fxHOVvmrb0H0TC6fbtlhLc2f2OnzYLz88omqCARKk1BnQOPWqDz6AoDPa/d//Vb5B2RPWuHFjsRYun3DHjh3+q3tQ9AOjTj8d4owuTe3UCcCnuLlGDUCek+f27oWW3uvM9fkg4RHWgYKCss0DbVssb05mVtW/fwJRVcIACVLqDJiU8sOcORD8W6YMG2agxT76SvfuIotuyNr8wQdu94+IQh+vGA5WIl5rqtF7pU+SYt7qlojMYYAELacV/mMwQETmI4UBQkTmMECClcq/NMvoGcg4XMEAISJzGCDBSiL2lWbm5uLovZYr255my7kMECIyhwESpET++cPj8w4eBPAwXt6920CLq7Ve8+bHrt8gIqocBkjwG4SPjQxlzcD10dFAcvKDlzZsWPnmiKi6Y4AEPb0bd2wxuPGbXHPku8REt3tFRKGPARL0rC6y2GSAWFOt6zp2dLtXRBT6GCDBTmWDc+nq1eYadN7XuCFDOBdCRJXFAAl2cujg4Su++AIVu7pWvsERKGjTBtq/NLX3iBFud4+IQhcDJMiJvCZPyN69APprxvr1BhuOxc7p01UHbE+5j7ekJaKTxwAJGZpi9XnhBYMNlt0zHWgpg5cuVR14dursBx5QTU6+d1WNGm73loiCH8fAQ0TZB3tsLGDVi9i1cycAH77wwwe9YjUGFxRAdKVcvnQpIKP109xcQNbL09z+nKob51m8W1IC4HHUz8+HalHkkmXLxPLm/OoWu9USAyTEqA7wpnadMQNADrrddZfb9RBVKxVfsCDdNPK228Ra+HxWYk6O22W5hUNYoUbDPopaOW4coOMRt3On2+UQVSuC9phXrx5E/ymTs7NV+48bW69XL7fLcgsDJMSINX9mhuzfD8UcnHP77TC1VxYRnYx+iLUsqPzLWTVjRnVdFs8ACVFiLZqeee0bbwBaRyc/+KDb9RBVS4JYPNusGXTA5Q+0a9PG7XICjQES4kQWdc96bOJEqHbCnx9/3O16iKolsfY6deLj3S4j0BggVYUsujfz6pQUKNpJfkoKgJuwtaTE7bKIqgc5B13z892uIuC9drsA8g/VgVektunSBdBk9F6wAMC7QOPGbtdFVKUoXseMf/1LrOzCzMJOndwuJ9B4BlJFiSxcnrlu1SrAWV7ct2VLAL2Rcs89ADqg0/ffu10fUYhLwKwDByBOb+fqW291uxi38Aykmjl2pblnX2Renz6AnqvP9OoFIBbOVVcBWIPO9eu7XSdRkMrCpZ9/DjijnWdGjhTxeifnfP2120W5hQFCv6DOoOgHRp1+OlDSqzQqPh5iTdGS+HiovmWFV79likQAAJHzSqdt2yaS3XVy8datbpdDREREREREREREREREREREREREREREREREdDJ4YRj9gjpD4kcPjo8Hiut4Unv2hGAz2jZtCiBOWsfFATrHWVlQAFgPSdaWLUDRIuuLZctEXm018X3bdrt+qhpUB9QY81H79gBmW20uvhiKx/XLM86AIFM6hYdDZSq6fPcdRJdh7ZdfAk7/vP4ffyzi9Xq9paVu119dMECqOdXk5LG7W7cGrL3OjY89BqABZvfuDaAYT3k8J9BEBG4tLQV0vB7JyYHqWKvGuHFieXMmnZmb63b/KLippmu6WhawsWNhi0GDAKRI/YceApCDbs2bn0RT7fDpjz9CZQXsrCxI5LKotbNmicyVDCkqcrufVRUDpJpSp/+5qU2GD4dIRzSdNQvAAXSIiDDQ9AhccfgwoH/TtSNHiixalXX33Llu95eCizp9VqYknnYaJMpjfTdvHiDT9c4+fQy+xCjgm28AZ3rpd337ini9j8/bts3tflc1DJBqRrX/12kX3n8/IBO1R0BuQPWQyMiRItmtJk2aPdvt/pO7VHt/ma7R0dCaFxWtXrECgiQsuvBCP77iWMzdvRtqpYT97aKLxFq4fMIdO3a4fRyqCm7nXk2oDtiecl+PHoBMUW9mZgBfur32nzVLnYF3jw276CK3jwO5rWaLoiFPP+3/4KggE3FTQgJEnyiZ+8or6lyi6RoW5vZRqCoYIFWcanJycrLHA2AsRk+fjhOf2zClD7LDwyF6n/PmjBmqAMBdfasbdZKTUh7t2BHAu5h5ww0ulPAQLr3gAuD0dkVn//Wvbh+PqoIBUuVJi+YfXHklgFJ5om1bFwtJwQcdO0KTk1JTunZ1+6hQgIk8JJeMGQNgISa5+AVC5CxEjB7t9uGoKhggVZ5MKF3at6/bVfysnq64JJjqIX9SvUnTNSoKkGfQs2dPt+sBUBPXJiaqDrgtZW6rVm4XE+oYIFVfvtjnn+92ET+TiKjzznO7CAqU4j5Fsc2aAdiNO2vVcruaY3S7dW5Q/b8ISQyQKk+LceXpp7tdxVEi87VVQoLbZVDAfC9tg+j9d5RcpR35PqwsBkiVJ2l44dAht6s4SvGKNDt40O0yKFBKmkh4YaHbVfyG6u3oyfdhZTFAqjrVW9B45063yzhK8Cmigqge8i/17LP6BeHPW6wVaBOEdYUYBkhVJ/IRlr//vttl/MxBjHjvPbeLoMD42YV7g9Ft0ya360HFTgnqeSVq0scfu11MqGOAVH19nGleL4CbsLWkxMU63sayoiIgfKjntldfdfugUMA9hxuzs90uAtC6GLVkiVjzZ2bI/v1uVxPqGCBVnEh218nFW7cCuFpTn3vOxVI+xogZM0TmbXysye7dbh8XCjB1PBg+dSqACdjsyq7NZZt+qqR5POPHu304qgoGSLXhGWQtTksDdCqu2bIlgC88XB9dvx4aNifqtgkT3D4K5A6xvDmZWfv2AZql9YYNA7AYPscJWAGqA5H30ENiZb/z2Jq1a90+HlUFt5SoZlQHPT326ZYtAcdy8pYtA/Au0LixH14qCStzc8seL79cJFsyJT/f7f5TcFBn4N0pr44aBdG/y1vTpgHoh1jLH19oF2nS7NlAtmZ1uPXWsmvgyzbUocrjGUg1I7Jg5MSRGzdCrbs9hR07QpGHBkuXGnyJsZi9eDHgLCqefNFFDA76PWItfCLrmhkzAFmO2D59AB2POCOropoA+/YBOlu33XGHSLZmdRg5ksHhHzwDIQCA6qAOaRd37w6ULtYuQ4cCsh/pvXoBeAQZdev+zj+pGMtuhpfffBPQz6zxc+aILOo88ZFPPnG7PxRaVJOT711VowbU0zD8h+HDIfqYfJqcDOBW3Nq5M467Cai+IDPWrAEkSg+98grUml1ywaxZYi0YOWV1QYHb/arqGCD0P6kz6On729erB2CgdWdMDKRkWElL2xbxeqd18fncro+qNnVGDB8xPDwcOBhVd8zpp0PUtp6LiADC50dO3LWLdxwkIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIgqI/wcW6cyxq9s9IgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNC0zMFQxMDo0NDoyOCswODowMP6jGBIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDQtMzBUMTA6NDQ6MjgrMDg6MDCP/qCuAAAAS3RFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl8xbngwYzh5NHA4My9nb3V3dWNoZS5zdmdGmeXYAAAAAElFTkSuQmCC"

/***/ }),

/***/ 51:
/*!********************************************************!*\
  !*** D:/uni-app/mall-App/static/image/profile/app.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 58:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 59);

/***/ }),

/***/ 59:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 60);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 60:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 61:
/*!*****************************************!*\
  !*** D:/uni-app/mall-App/utils/util.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.debounce = debounce;exports.calcTop = calcTop;exports.formatDate = formatDate; //防抖
var timer = null;
function debounce(func, delay) {
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      func();
    }, delay);
  };
}

// 计算节点顶部高度
function calcTop(node) {
  return new Promise(function (res, rej) {
    var query = uni.createSelectorQuery();
    query.select(node).boundingClientRect();
    query.selectViewport().scrollOffset().exec(function (data) {
      res(data[0].top + data[1].scrollTop);
    });
  });

}


// 转换时间格式
function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds() };

  for (var k in o) {
    if (new RegExp("(".concat(k, ")")).test(fmt)) {
      var str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  return fmt;
};
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 62:
/*!*********************************************!*\
  !*** D:/uni-app/mall-App/service/detail.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.getDateil = getDateil;exports.getRecommends = getRecommends;exports.ParamInfo = exports.ShopInfo = exports.GoodsBaseInfo = void 0;var _request = __webpack_require__(/*! ./request.js */ 21);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

function getDateil(iid) {
  return (0, _request.request2)({
    url: '/detail',
    data: {
      iid: iid } });


}var

GoodsBaseInfo =
function GoodsBaseInfo(itemInfo, columns, services) {_classCallCheck(this, GoodsBaseInfo);
  this.title = itemInfo.title;
  this.desc = itemInfo.desc;
  this.newPrice = itemInfo.price;
  this.oldPrice = itemInfo.oldPrice;
  this.discount = itemInfo.discountDesc;
  this.columns = columns;
  this.services = services;
  this.realPrice = itemInfo.lowNowPrice;
};exports.GoodsBaseInfo = GoodsBaseInfo;var


ShopInfo =
function ShopInfo(shopInfo) {_classCallCheck(this, ShopInfo);
  this.logo = shopInfo.shopLogo;
  this.name = shopInfo.name;
  this.fans = shopInfo.cFans;
  this.sells = shopInfo.cSells;
  this.score = shopInfo.score;
  this.goodsCount = shopInfo.cGoods;
};exports.ShopInfo = ShopInfo;var


ParamInfo =
function ParamInfo(info, rule) {_classCallCheck(this, ParamInfo);
  // 注: images可能没有值(某些商品有值, 某些没有值)
  this.image = info.images ? info.images[0] : '';
  this.infos = info.set;
  this.sizes = rule.tables;
};exports.ParamInfo = ParamInfo;


function getRecommends() {
  return (0, _request.request2)({
    url: '/recommend' });

}

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map