module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Index() {\n  const {\n    0: modal,\n    1: setModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    open: false\n  });\n  const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');\n\n  function handleSelection(resources) {\n    const idsFromResources = resources.selection.map(product => product.id);\n    setModal({\n      open: false\n    });\n    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', idFromResources);\n    console.log('this is product ids', store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids'));\n  }\n\n  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n    resourceType: \"Product\",\n    showVariants: false,\n    open: modal.open,\n    onCancel: () => setModal({\n      open: false\n    })\n  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n    heading: \"Manage your inventory transfers\",\n    action: {\n      content: 'Select Products',\n      onAction: () => setModal({\n        open: true\n      })\n    },\n    image: \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\"\n  }, __jsx(\"p\", null, \"Select Products\"))));\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwibW9kYWwiLCJzZXRNb2RhbCIsInVzZVN0YXRlIiwib3BlbiIsImVtcHR5U3RhdGUiLCJzdG9yZSIsImdldCIsImhhbmRsZVNlbGVjdGlvbiIsInJlc291cmNlcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJzZXQiLCJpZEZyb21SZXNvdXJjZXMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm9uQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUViLFFBQU07QUFBQSxPQUFFQyxLQUFGO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFELENBQXBDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLENBQUNDLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLENBQXBCOztBQUVBLFdBQVNDLGVBQVQsQ0FBeUJDLFNBQXpCLEVBQW9DO0FBQ2hDLFVBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXlCQyxPQUFELElBQWFBLE9BQU8sQ0FBQ0MsRUFBN0MsQ0FBekI7QUFDQVosWUFBUSxDQUFDO0FBQUVFLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNBRSxtREFBSyxDQUFDUyxHQUFOLENBQVUsS0FBVixFQUFpQkMsZUFBakI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNaLCtDQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLENBQW5DO0FBQ0g7O0FBRUQsU0FDSSxNQUFDLHFEQUFELFFBQ0ksTUFBQyx3RUFBRDtBQUNHLGdCQUFZLEVBQUMsU0FEaEI7QUFFRyxnQkFBWSxFQUFFLEtBRmpCO0FBR0csUUFBSSxFQUFFTixLQUFLLENBQUNHLElBSGY7QUFJRyxZQUFRLEVBQUUsTUFBTUYsUUFBUSxDQUFDO0FBQUVFLFVBQUksRUFBRTtBQUFSLEtBQUQ7QUFKM0IsSUFESixFQU9JLE1BQUMsdURBQUQsUUFDSSxNQUFDLDJEQUFEO0FBQ0ksV0FBTyxFQUFDLGlDQURaO0FBRUksVUFBTSxFQUFFO0FBQ0plLGFBQU8sRUFBRSxpQkFETDtBQUVKQyxjQUFRLEVBQUUsTUFBTWxCLFFBQVEsQ0FBQztBQUFFRSxZQUFJLEVBQUU7QUFBUixPQUFEO0FBRnBCLEtBRlo7QUFNSSxTQUFLLEVBQUM7QUFOVixLQVFJLG1DQVJKLENBREosQ0FQSixDQURKO0FBc0JIOztBQUFBO0FBRWNKLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEVtcHR5U3RhdGUsIExheW91dCwgUGFnZSB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuXG4gICAgY29uc3QgWyBtb2RhbCwgc2V0TW9kYWwgXSA9IHVzZVN0YXRlKHsgb3BlbjogZmFsc2UgfSlcbiAgICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldCgnaWRzJyk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKSB7XG4gICAgICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCk7XG4gICAgICAgIHNldE1vZGFsKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgICAgIHN0b3JlLnNldCgnaWRzJywgaWRGcm9tUmVzb3VyY2VzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgcHJvZHVjdCBpZHMnLCBzdG9yZS5nZXQoJ2lkcycpKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgPFJlc291cmNlUGlja2VyIFxuICAgICAgICAgICAgICAgcmVzb3VyY2VUeXBlPSdQcm9kdWN0J1xuICAgICAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgIG9wZW49e21vZGFsLm9wZW59XG4gICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0TW9kYWwoeyBvcGVuOiBmYWxzZSB9KX0gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8RW1wdHlTdGF0ZSBcbiAgICAgICAgICAgICAgICAgICAgaGVhZGluZz1cIk1hbmFnZSB5b3VyIGludmVudG9yeSB0cmFuc2ZlcnNcIlxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgUHJvZHVjdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHNldE1vZGFsKHsgb3BlbjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwPlNlbGVjdCBQcm9kdWN0czwvcD5cbiAgICAgICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9QYWdlPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dominiquemaack/Lambda/sample-shopify-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });