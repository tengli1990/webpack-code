(function (modules) {
  // The module cache
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  return __webpack_require__("./src/index.js");
})
  ({

    "./src/data.js": (function (module, __webpack_exports__, __webpack_require__) {
      const data = '外部数据'
      __webpack_exports__["default"] = (data);
    }),

    "./src/index.js":
      (function (module, __webpack_exports__, __webpack_require__) {
         var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/data.js");
         const result = '老袁最丑'
         console.log('🍎',_data__WEBPACK_IMPORTED_MODULE_0__["default"])
         console.log(result)
      })

  });