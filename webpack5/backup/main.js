(() => {
  var __webpack_modules__ = ({
    "./src/data.js":
      ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "default": () => __WEBPACK_DEFAULT_EXPORT__
        });
        const data = '外部数据'
        const __WEBPACK_DEFAULT_EXPORT__ = (data);

      }),

    "./src/index.js":
      ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/data.js");
          const result = '老袁最丑'
          console.log('🍊', _data__WEBPACK_IMPORTED_MODULE_0__.default)
          console.log(result)

      })

  });
  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    // 检查缓存
    if (__webpack_module_cache__[moduleId]) {
      return __webpack_module_cache__[moduleId].exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }


  __webpack_require__("./src/index.js");
})()
  ;