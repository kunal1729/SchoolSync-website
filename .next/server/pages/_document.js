"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./lib/theme.ts":
/*!**********************!*\
  !*** ./lib/theme.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// theme.ts\n// 1. import `extendTheme` function\n\n\n// 2. Add your color mode config\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: false\n};\nconst Button = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.defineStyleConfig)({\n    // The styles all button have in common\n    baseStyle: {\n        borderRadius: \"var(--rounded-btn)\"\n    }\n});\nconst Badge = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.defineStyleConfig)({\n    baseStyle: {\n        borderRadius: \"0.5em\",\n        display: \"flex\",\n        letterSpacing: \"0.1em\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        maxWidth: \"fit-content\"\n    }\n});\nconst Popover = {\n    baseStyle: {\n        popper: {\n            zIndex: \"popover\"\n        }\n    }\n};\n// 3. extend the theme\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config,\n    components: {\n        Button,\n        Badge,\n        Popover\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxXQUFXO0FBRVgsbUNBQW1DO0FBQ29EO0FBQ2xDO0FBRXJELGdDQUFnQztBQUNoQyxNQUFNRSxTQUFzQjtJQUMxQkMsa0JBQWtCO0lBQ2xCQyxvQkFBb0I7QUFDdEI7QUFFQSxNQUFNQyxTQUFTSixtRUFBaUJBLENBQUM7SUFDL0IsdUNBQXVDO0lBQ3ZDSyxXQUFXO1FBQ1RDLGNBQWM7SUFDaEI7QUFFRjtBQUVBLE1BQU1DLFFBQVFQLG1FQUFpQkEsQ0FBQztJQUM5QkssV0FBVztRQUNUQyxjQUFjO1FBQ2RFLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsVUFBVTtJQUNaO0FBQ0Y7QUFFQSxNQUFNQyxVQUFVO0lBQ2RSLFdBQVc7UUFDVFMsUUFBUTtZQUNOQyxRQUFRO1FBQ1Y7SUFDRjtBQUNGO0FBQ0Esc0JBQXNCO0FBQ2YsTUFBTUMsUUFBUWpCLDZEQUFXQSxDQUFDO0lBQy9CRTtJQUNBZ0IsWUFBWTtRQUNWYjtRQUNBRztRQUNBTTtJQUNGO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL2xpYi90aGVtZS50cz8yNDRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZW1lLnRzXHJcblxyXG4vLyAxLiBpbXBvcnQgYGV4dGVuZFRoZW1lYCBmdW5jdGlvblxyXG5pbXBvcnQgeyBleHRlbmRUaGVtZSwgdHlwZSBUaGVtZUNvbmZpZywgdGhlbWUgYXMgY2hha3JhVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVTdHlsZUNvbmZpZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG4vLyAyLiBBZGQgeW91ciBjb2xvciBtb2RlIGNvbmZpZ1xyXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xyXG4gIGluaXRpYWxDb2xvck1vZGU6IFwiZGFya1wiLFxyXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBCdXR0b24gPSBkZWZpbmVTdHlsZUNvbmZpZyh7XHJcbiAgLy8gVGhlIHN0eWxlcyBhbGwgYnV0dG9uIGhhdmUgaW4gY29tbW9uXHJcbiAgYmFzZVN0eWxlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IFwidmFyKC0tcm91bmRlZC1idG4pXCIsIC8vIDwtLSBib3JkZXIgcmFkaXVzIGlzIHNhbWUgZm9yIGFsbCB2YXJpYW50cyBhbmQgc2l6ZXNcclxuICB9LFxyXG4gIC8vIFR3byBzaXplczogc20gYW5kIG1kXHJcbn0pO1xyXG5cclxuY29uc3QgQmFkZ2UgPSBkZWZpbmVTdHlsZUNvbmZpZyh7XHJcbiAgYmFzZVN0eWxlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMC41ZW1cIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCIwLjFlbVwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgbWF4V2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFBvcG92ZXIgPSB7XHJcbiAgYmFzZVN0eWxlOiB7XHJcbiAgICBwb3BwZXI6IHtcclxuICAgICAgekluZGV4OiBcInBvcG92ZXJcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuLy8gMy4gZXh0ZW5kIHRoZSB0aGVtZVxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgY29uZmlnLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEJ1dHRvbixcclxuICAgIEJhZGdlLFxyXG4gICAgUG9wb3ZlcixcclxuICB9LFxyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsImRlZmluZVN0eWxlQ29uZmlnIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsIkJ1dHRvbiIsImJhc2VTdHlsZSIsImJvcmRlclJhZGl1cyIsIkJhZGdlIiwiZGlzcGxheSIsImxldHRlclNwYWNpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXhXaWR0aCIsIlBvcG92ZXIiLCJwb3BwZXIiLCJ6SW5kZXgiLCJ0aGVtZSIsImNvbXBvbmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.ts\n");

/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_theme__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_theme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// pages/_document.js\n\n\n\n\nclass Document extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/assets/favicon.ico\",\n                        sizes: \"any\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_document.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_document.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeScript, {\n                            initialColorMode: _lib_theme__WEBPACK_IMPORTED_MODULE_3__.theme.config.initialColorMode\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_document.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_document.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_document.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_document.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_document.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUI7O0FBRThCO0FBQ3dCO0FBQ3RDO0FBRXRCLE1BQU1PLGlCQUFpQk4sc0RBQVlBO0lBQ2hETyxTQUFTO1FBQ1AscUJBQ0UsOERBQUNMLCtDQUFJQTtZQUFDTSxNQUFLOzs4QkFDVCw4REFBQ1AsK0NBQUlBOzhCQUNILDRFQUFDUTt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzt3QkFBc0JDLE9BQU07Ozs7Ozs7Ozs7OzhCQUVwRCw4REFBQ0M7O3NDQUVDLDhEQUFDZCw2REFBZUE7NEJBQUNlLGtCQUFrQlQsNkNBQUtBLENBQUNVLE1BQU0sQ0FBQ0QsZ0JBQWdCOzs7Ozs7c0NBQ2hFLDhEQUFDWCwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9fZG9jdW1lbnQudHN4P2QzN2QiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2RvY3VtZW50LmpzXHJcblxyXG5pbXBvcnQgeyBDb2xvck1vZGVTY3JpcHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTmV4dERvY3VtZW50LCB7IEhlYWQsIEh0bWwsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi9saWIvdGhlbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgTmV4dERvY3VtZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Fzc2V0cy9mYXZpY29uLmljb1wiIHNpemVzPVwiYW55XCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICB7Lyog8J+RhyBIZXJlJ3MgdGhlIHNjcmlwdCAqL31cclxuICAgICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17dGhlbWUuY29uZmlnLmluaXRpYWxDb2xvck1vZGV9IC8+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDb2xvck1vZGVTY3JpcHQiLCJOZXh0RG9jdW1lbnQiLCJIZWFkIiwiSHRtbCIsIk1haW4iLCJOZXh0U2NyaXB0IiwidGhlbWUiLCJEb2N1bWVudCIsInJlbmRlciIsImxhbmciLCJsaW5rIiwicmVsIiwiaHJlZiIsInNpemVzIiwiYm9keSIsImluaXRpYWxDb2xvck1vZGUiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();