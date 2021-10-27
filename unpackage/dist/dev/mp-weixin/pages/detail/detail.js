(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ 52:
/*!**********************************************************************!*\
  !*** D:/uni-app/mall-App/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/detail.vue */ 53));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 53:
/*!***************************************************!*\
  !*** D:/uni-app/mall-App/pages/detail/detail.vue ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=3e159eb4& */ 54);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 56);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=css& */ 63);
/* harmony import */ var _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/*!**********************************************************************************!*\
  !*** D:/uni-app/mall-App/pages/detail/detail.vue?vue&type=template&id=3e159eb4& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=3e159eb4& */ 55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 55:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/mall-App/pages/detail/detail.vue?vue&type=template&id=3e159eb4& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uSwiper: function() {
      return __webpack_require__.e(/*! import() | components/u-swiper/u-swiper */ "components/u-swiper/u-swiper").then(__webpack_require__.bind(null, /*! @/components/u-swiper/u-swiper.vue */ 65))
    },
    uGoods: function() {
      return __webpack_require__.e(/*! import() | components/u-goods/u-goods */ "components/u-goods/u-goods").then(__webpack_require__.bind(null, /*! @/components/u-goods/u-goods.vue */ 79))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 56:
/*!****************************************************************************!*\
  !*** D:/uni-app/mall-App/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 57);
/* harmony import */ var _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/mall-App/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 58));


























var _util = __webpack_require__(/*! ../../utils/util.js */ 61);
var _detail = __webpack_require__(/*! ../../service/detail.js */ 62);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var uSwiper = function uSwiper() {__webpack_require__.e(/*! require.ensure | components/u-swiper/u-swiper */ "components/u-swiper/u-swiper").then((function () {return resolve(__webpack_require__(/*! ../../components/u-swiper/u-swiper.vue */ 65));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uGoods = function uGoods() {__webpack_require__.e(/*! require.ensure | components/u-goods/u-goods */ "components/u-goods/u-goods").then((function () {return resolve(__webpack_require__(/*! ../../components/u-goods/u-goods.vue */ 79));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uStatusBar = function uStatusBar() {__webpack_require__.e(/*! require.ensure | pages/detail/childCpns/u-status-bar */ "pages/detail/childCpns/u-status-bar").then((function () {return resolve(__webpack_require__(/*! ./childCpns/u-status-bar.vue */ 149));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uBaseInfo = function uBaseInfo() {__webpack_require__.e(/*! require.ensure | pages/detail/childCpns/u-base-info */ "pages/detail/childCpns/u-base-info").then((function () {return resolve(__webpack_require__(/*! ./childCpns/u-base-info.vue */ 156));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uShopInfo = function uShopInfo() {__webpack_require__.e(/*! require.ensure | pages/detail/childCpns/u-shop-info */ "pages/detail/childCpns/u-shop-info").then((function () {return resolve(__webpack_require__(/*! ./childCpns/u-shop-info.vue */ 163));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uDetailInfo = function uDetailInfo() {__webpack_require__.e(/*! require.ensure | pages/detail/childCpns/u-detail-info */ "pages/detail/childCpns/u-detail-info").then((function () {return resolve(__webpack_require__(/*! ./childCpns/u-detail-info.vue */ 170));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uParamInfo = function uParamInfo() {__webpack_require__.e(/*! require.ensure | pages/detail/childCpns/u-param-info */ "pages/detail/childCpns/u-param-info").then((function () {return resolve(__webpack_require__(/*! ./childCpns/u-param-info.vue */ 177));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uCommentInfo = function uCommentInfo() {__webpack_require__.e(/*! require.ensure | pages/detail/childCpns/u-comment-info */ "pages/detail/childCpns/u-comment-info").then((function () {return resolve(__webpack_require__(/*! ./childCpns/u-comment-info.vue */ 184));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var goodsNav = function goodsNav() {__webpack_require__.e(/*! require.ensure | uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav */ "uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav").then((function () {return resolve(__webpack_require__(/*! ../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue */ 191));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =






{
  components: {
    uStatusBar: uStatusBar,
    uSwiper: uSwiper,
    uBaseInfo: uBaseInfo,
    uShopInfo: uShopInfo,
    uDetailInfo: uDetailInfo,
    uParamInfo: uParamInfo,
    uCommentInfo: uCommentInfo,
    uGoods: uGoods,
    goodsNav: goodsNav },

  data: function data() {
    return {
      idd: '',
      banner: [],
      baseInfo: {},
      shopInfo: {},
      datilInfo: {},
      paramInfo: {},
      commentInfo: {},
      goods: [],
      scrollTops: [],
      currIndex: 0,
      detailImgLength: 0,
      imgLoadCount: 0 };


  },
  onLoad: function onLoad(e) {
    this._getDateil(e.idd);
    this._getRecommends();
  },
  onPageScroll: function onPageScroll(e) {
    var top = e.scrollTop;
    // console.log(top);
    for (var i = 0; i < this.scrollTops.length; i++) {
      if (top >= this.scrollTops[i] && top < this.scrollTops[i + 1]) {
        this.currIndex = i;
        break;
      }
    }
    // const query = uni.createSelectorQuery()
    // query.select(".param").boundingClientRect()
    // query.selectViewport().scrollOffset().exec(res=>{
    // console.log(res[0].top + res[1].scrollTop)
    // })

  },
  onReady: function onReady() {

  },
  mounted: function mounted() {

  },
  methods: {
    _getDateil: function _getDateil(idd) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var res, data;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                _this.idd = idd;_context.next = 3;return (
                  (0, _detail.getDateil)(idd));case 3:res = _context.sent;
                // console.log(res.result);
                data = res.result;
                _this.banner = data.itemInfo.topImages;
                _this.baseInfo = new _detail.GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services);
                _this.shopInfo = new _detail.ShopInfo(data.shopInfo);
                _this.datilInfo = data.detailInfo;
                _this.paramInfo = new _detail.ParamInfo(data.itemParams.info, data.itemParams.rule);
                if (data.rate && data.rate.cRate > 0) {
                  _this.commentInfo = data.rate.list[0];
                }
                uni.hideLoading();
                // console.log(this.datilInfo);
              case 12:case "end":return _context.stop();}}}, _callee);}))();},
    _getRecommends: function _getRecommends() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _this2$goods;var res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  (0, _detail.getRecommends)());case 2:res = _context2.sent;
                (_this2$goods = _this2.goods).push.apply(_this2$goods, _toConsumableArray(res.data.list));
                uni.hideLoading();
                // console.log(this.goods);
              case 5:case "end":return _context2.stop();}}}, _callee2);}))();},
    titleClick: function titleClick(index) {
      // console.log(this.scrollTops[index]);
      // this.$nextTick(function(){
      uni.pageScrollTo({
        scrollTop: this.scrollTops[index] + 1,
        duration: 200 });

      // })	


    },
    buttonClick: function buttonClick(e) {
      if (e.index == 0) {
        this.addCart();
      }
    },
    addCart: function addCart() {
      var shopInfo = {};
      shopInfo.id = this.idd;
      shopInfo.img = this.datilInfo.detailImage[0].list[0];
      shopInfo.title = this.baseInfo.title;
      shopInfo.desc = this.datilInfo.desc;
      shopInfo.price = this.baseInfo.realPrice;
      // console.log(shopInfo);
      this.$store.dispatch("addCart", shopInfo);
    },
    imgLoad: function imgLoad() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                // console.log('aad');
                _this3.scrollTops[0] = 0;_context3.next = 3;return (
                  (0, _util.calcTop)(".param"));case 3:_context3.t0 = _context3.sent;_this3.scrollTops[1] = _context3.t0 - 35;_context3.next = 7;return (
                  (0, _util.calcTop)(".comment"));case 7:_context3.t1 = _context3.sent;_this3.scrollTops[2] = _context3.t1 - 35;_context3.next = 11;return (
                  (0, _util.calcTop)(".recommends"));case 11:_context3.t2 = _context3.sent;_this3.scrollTops[3] = _context3.t2 - 35;
                _this3.scrollTops[4] = Number.MAX_VALUE;
                // console.log(this.scrollTops);
                // uni.hideLoading();
              case 14:case "end":return _context3.stop();}}}, _callee3);}))();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 63:
/*!************************************************************************************!*\
  !*** D:/uni-app/mall-App/pages/detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../360安全浏览器下载/HBuilderX.2.7.14.20200618/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=css& */ 64);
/* harmony import */ var _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360_HBuilderX_2_7_14_20200618_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 64:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/uni-app/mall-App/pages/detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[52,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map