(function(modules){
  // 模块缓存
 var installedModules = {}

 function __webpack_require__(moduleId) {
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		module.l = true;
/******/
/******/ 		return module.exports;
/******/ 	}

 return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
  "./src/index.js":(function(module, exports) {
      const result = '老袁最丑'
      console.log(result)
    })
})