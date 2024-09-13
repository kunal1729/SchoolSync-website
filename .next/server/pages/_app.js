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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/slices/isSidebarOpen.ts":
/*!*************************************!*\
  !*** ./lib/slices/isSidebarOpen.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setIsSidebarOpen: () => (/* binding */ setIsSidebarOpen),\n/* harmony export */   sidebarSlice: () => (/* binding */ sidebarSlice),\n/* harmony export */   toggleSidebar: () => (/* binding */ toggleSidebar)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sidebarSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"isSidebarOpen\",\n    initialState: {\n        value: false\n    },\n    reducers: {\n        toggleSidebar: (state)=>{\n            state.value = !state.value;\n        },\n        setIsSidebarOpen: (state, action)=>{\n            state.value = action.payload;\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { toggleSidebar, setIsSidebarOpen } = sidebarSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2xpY2VzL2lzU2lkZWJhck9wZW4udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBS3hDLE1BQU1DLGVBQWVELDZEQUFXQSxDQUFDO0lBQ3RDRSxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsT0FBTztJQUNUO0lBQ0FDLFVBQVU7UUFDUkMsZUFBZSxDQUFDQztZQUNkQSxNQUFNSCxLQUFLLEdBQUcsQ0FBQ0csTUFBTUgsS0FBSztRQUM1QjtRQUNBSSxrQkFBa0IsQ0FBQ0QsT0FBT0U7WUFDeEJGLE1BQU1ILEtBQUssR0FBR0ssT0FBT0MsT0FBTztRQUM5QjtJQUNGO0FBQ0YsR0FBRztBQUVILCtEQUErRDtBQUN4RCxNQUFNLEVBQUVKLGFBQWEsRUFBRUUsZ0JBQWdCLEVBQUUsR0FBR1AsYUFBYVUsT0FBTyxDQUFDO0FBRXhFLGlFQUFlVixhQUFhVyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9saWIvc2xpY2VzL2lzU2lkZWJhck9wZW4udHM/ODYyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lkZWJhclNsaWNlIHtcclxuICB2YWx1ZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZGViYXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImlzU2lkZWJhck9wZW5cIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHZhbHVlOiBmYWxzZSxcclxuICB9IGFzIFNpZGViYXJTbGljZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgdG9nZ2xlU2lkZWJhcjogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnZhbHVlID0gIXN0YXRlLnZhbHVlO1xyXG4gICAgfSxcclxuICAgIHNldElzU2lkZWJhck9wZW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnZhbHVlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXHJcbmV4cG9ydCBjb25zdCB7IHRvZ2dsZVNpZGViYXIsIHNldElzU2lkZWJhck9wZW4gfSA9IHNpZGViYXJTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhclNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInNpZGViYXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInJlZHVjZXJzIiwidG9nZ2xlU2lkZWJhciIsInN0YXRlIiwic2V0SXNTaWRlYmFyT3BlbiIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/slices/isSidebarOpen.ts\n");

/***/ }),

/***/ "./lib/store.ts":
/*!**********************!*\
  !*** ./lib/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_isSidebarOpen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/isSidebarOpen */ \"./lib/slices/isSidebarOpen.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        isSidebarOpen: _slices_isSidebarOpen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUNDO0FBRW5ELE1BQU1FLFFBQVFGLGdFQUFjQSxDQUFDO0lBQzNCRyxTQUFTO1FBQ1BGLGFBQWFBLCtEQUFBQTtJQUNmO0FBQ0Y7QUFPQSxpRUFBZUMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL2xpYi9zdG9yZS50cz9lODQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGlzU2lkZWJhck9wZW4gZnJvbSBcIi4vc2xpY2VzL2lzU2lkZWJhck9wZW5cIjtcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIGlzU2lkZWJhck9wZW4sXHJcbiAgfSxcclxufSk7XHJcblxyXG4vLyBJbmZlciB0aGUgYFJvb3RTdGF0ZWAgYW5kIGBBcHBEaXNwYXRjaGAgdHlwZXMgZnJvbSB0aGUgc3RvcmUgaXRzZWxmXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcclxuLy8gSW5mZXJyZWQgdHlwZToge3Bvc3RzOiBQb3N0c1N0YXRlLCBjb21tZW50czogQ29tbWVudHNTdGF0ZSwgdXNlcnM6IFVzZXJzU3RhdGV9XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImlzU2lkZWJhck9wZW4iLCJzdG9yZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/store.ts\n");

/***/ }),

/***/ "./lib/theme.ts":
/*!**********************!*\
  !*** ./lib/theme.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   theme: () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// theme.ts\n// 1. import `extendTheme` function\n\n\n// 2. Add your color mode config\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: false\n};\nconst Button = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.defineStyleConfig)({\n    // The styles all button have in common\n    baseStyle: {\n        borderRadius: \"var(--rounded-btn)\"\n    }\n});\nconst Badge = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.defineStyleConfig)({\n    baseStyle: {\n        borderRadius: \"0.5em\",\n        display: \"flex\",\n        letterSpacing: \"0.1em\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        maxWidth: \"fit-content\"\n    }\n});\nconst Popover = {\n    baseStyle: {\n        popper: {\n            zIndex: \"popover\"\n        }\n    }\n};\n// 3. extend the theme\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config,\n    components: {\n        Button,\n        Badge,\n        Popover\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxXQUFXO0FBRVgsbUNBQW1DO0FBQ29EO0FBQ2xDO0FBRXJELGdDQUFnQztBQUNoQyxNQUFNRSxTQUFzQjtJQUMxQkMsa0JBQWtCO0lBQ2xCQyxvQkFBb0I7QUFDdEI7QUFFQSxNQUFNQyxTQUFTSixtRUFBaUJBLENBQUM7SUFDL0IsdUNBQXVDO0lBQ3ZDSyxXQUFXO1FBQ1RDLGNBQWM7SUFDaEI7QUFFRjtBQUVBLE1BQU1DLFFBQVFQLG1FQUFpQkEsQ0FBQztJQUM5QkssV0FBVztRQUNUQyxjQUFjO1FBQ2RFLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsVUFBVTtJQUNaO0FBQ0Y7QUFFQSxNQUFNQyxVQUFVO0lBQ2RSLFdBQVc7UUFDVFMsUUFBUTtZQUNOQyxRQUFRO1FBQ1Y7SUFDRjtBQUNGO0FBQ0Esc0JBQXNCO0FBQ2YsTUFBTUMsUUFBUWpCLDZEQUFXQSxDQUFDO0lBQy9CRTtJQUNBZ0IsWUFBWTtRQUNWYjtRQUNBRztRQUNBTTtJQUNGO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL2xpYi90aGVtZS50cz8yNDRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZW1lLnRzXHJcblxyXG4vLyAxLiBpbXBvcnQgYGV4dGVuZFRoZW1lYCBmdW5jdGlvblxyXG5pbXBvcnQgeyBleHRlbmRUaGVtZSwgdHlwZSBUaGVtZUNvbmZpZywgdGhlbWUgYXMgY2hha3JhVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVTdHlsZUNvbmZpZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG4vLyAyLiBBZGQgeW91ciBjb2xvciBtb2RlIGNvbmZpZ1xyXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xyXG4gIGluaXRpYWxDb2xvck1vZGU6IFwiZGFya1wiLFxyXG4gIHVzZVN5c3RlbUNvbG9yTW9kZTogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBCdXR0b24gPSBkZWZpbmVTdHlsZUNvbmZpZyh7XHJcbiAgLy8gVGhlIHN0eWxlcyBhbGwgYnV0dG9uIGhhdmUgaW4gY29tbW9uXHJcbiAgYmFzZVN0eWxlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IFwidmFyKC0tcm91bmRlZC1idG4pXCIsIC8vIDwtLSBib3JkZXIgcmFkaXVzIGlzIHNhbWUgZm9yIGFsbCB2YXJpYW50cyBhbmQgc2l6ZXNcclxuICB9LFxyXG4gIC8vIFR3byBzaXplczogc20gYW5kIG1kXHJcbn0pO1xyXG5cclxuY29uc3QgQmFkZ2UgPSBkZWZpbmVTdHlsZUNvbmZpZyh7XHJcbiAgYmFzZVN0eWxlOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMC41ZW1cIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCIwLjFlbVwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgbWF4V2lkdGg6IFwiZml0LWNvbnRlbnRcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFBvcG92ZXIgPSB7XHJcbiAgYmFzZVN0eWxlOiB7XHJcbiAgICBwb3BwZXI6IHtcclxuICAgICAgekluZGV4OiBcInBvcG92ZXJcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuLy8gMy4gZXh0ZW5kIHRoZSB0aGVtZVxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgY29uZmlnLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEJ1dHRvbixcclxuICAgIEJhZGdlLFxyXG4gICAgUG9wb3ZlcixcclxuICB9LFxyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsImRlZmluZVN0eWxlQ29uZmlnIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsIkJ1dHRvbiIsImJhc2VTdHlsZSIsImJvcmRlclJhZGl1cyIsIkJhZGdlIiwiZGlzcGxheSIsImxldHRlclNwYWNpbmciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXhXaWR0aCIsIlBvcG92ZXIiLCJwb3BwZXIiLCJ6SW5kZXgiLCJ0aGVtZSIsImNvbXBvbmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.ts\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/store */ \"./lib/store.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_slices_isSidebarOpen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/slices/isSidebarOpen */ \"./lib/slices/isSidebarOpen.ts\");\n/* harmony import */ var nextjs_google_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nextjs-google-analytics */ \"nextjs-google-analytics\");\n/* harmony import */ var nextjs_google_analytics__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nextjs_google_analytics__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _lib_theme__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _lib_theme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Use of the <SessionProvider> is mandatory to allow components that call\n// `useSession()` anywhere in your application to access the `session` object.\n\n\n\n\n\n\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        // This useEffect will be triggered only once when the app mounts\n        function handleResize() {\n            const isDesktop = window.innerWidth >= 768;\n            if (isDesktop) _lib_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch((0,_lib_slices_isSidebarOpen__WEBPACK_IMPORTED_MODULE_8__.setIsSidebarOpen)(true));\n        }\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        _lib_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n            theme: _lib_theme__WEBPACK_IMPORTED_MODULE_3__.theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n                store: _lib_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(nextjs_google_analytics__WEBPACK_IMPORTED_MODULE_9__.GoogleAnalytics, {\n                        trackPageViews: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_app.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_app.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_app.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_app.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\SchoolSync-website\\\\pages\\\\_app.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFJQTtBQUdiO0FBQ3JDLDBFQUEwRTtBQUMxRSw4RUFBOEU7QUFDaEQ7QUFDRTtBQUNPO0FBQ0w7QUFDNEI7QUFDSjtBQUUzQyxTQUFTUSxJQUFJLEVBQzFCQyxTQUFTLEVBQ1RDLFdBQVcsRUFBRUMsT0FBTyxFQUFFLEdBQUdELFdBQVcsRUFDTDtJQUMvQkwsZ0RBQVNBLENBQUM7UUFDUixpRUFBaUU7UUFDakUsU0FBU087WUFDUCxNQUFNQyxZQUFZQyxPQUFPQyxVQUFVLElBQUk7WUFDdkMsSUFBSUYsV0FBV1YsMkRBQWMsQ0FBQ0csMkVBQWdCQSxDQUFDO1FBQ2pEO1FBRUFNO1FBRUFFLE9BQU9HLGdCQUFnQixDQUFDLFVBQVVMO1FBRWxDLE9BQU87WUFDTEUsT0FBT0ksbUJBQW1CLENBQUMsVUFBVU47UUFDdkM7SUFDRixHQUFHO1FBQUNULGtEQUFLQTtLQUFDO0lBQ1YscUJBQ0UsOERBQUNILDREQUFlQTtRQUFDVyxTQUFTQTtrQkFDeEIsNEVBQUNWLDREQUFjQTtZQUFDQyxPQUFPQSw2Q0FBS0E7c0JBQzFCLDRFQUFDRSxpREFBUUE7Z0JBQUNELE9BQU9BLGtEQUFLQTs7a0NBQ3BCLDhEQUFDSSxvRUFBZUE7d0JBQUNZLGdCQUFnQjs7Ozs7O2tDQUNqQyw4REFBQ1Y7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgdHlwZSB7IFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbG9yTW9kZVNjcmlwdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uL2xpYi90aGVtZVwiO1xyXG4vLyBVc2Ugb2YgdGhlIDxTZXNzaW9uUHJvdmlkZXI+IGlzIG1hbmRhdG9yeSB0byBhbGxvdyBjb21wb25lbnRzIHRoYXQgY2FsbFxyXG4vLyBgdXNlU2Vzc2lvbigpYCBhbnl3aGVyZSBpbiB5b3VyIGFwcGxpY2F0aW9uIHRvIGFjY2VzcyB0aGUgYHNlc3Npb25gIG9iamVjdC5cclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCJAL2xpYi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2V0SXNTaWRlYmFyT3BlbiB9IGZyb20gXCJAL2xpYi9zbGljZXMvaXNTaWRlYmFyT3BlblwiO1xyXG5pbXBvcnQgeyBHb29nbGVBbmFseXRpY3MgfSBmcm9tIFwibmV4dGpzLWdvb2dsZS1hbmFseXRpY3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XHJcbiAgQ29tcG9uZW50LFxyXG4gIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSxcclxufTogQXBwUHJvcHM8eyBzZXNzaW9uOiBTZXNzaW9uIH0+KSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFRoaXMgdXNlRWZmZWN0IHdpbGwgYmUgdHJpZ2dlcmVkIG9ubHkgb25jZSB3aGVuIHRoZSBhcHAgbW91bnRzXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgIGNvbnN0IGlzRGVza3RvcCA9IHdpbmRvdy5pbm5lcldpZHRoID49IDc2ODtcclxuICAgICAgaWYgKGlzRGVza3RvcCkgc3RvcmUuZGlzcGF0Y2goc2V0SXNTaWRlYmFyT3Blbih0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVzaXplKCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbc3RvcmVdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cclxuICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICA8R29vZ2xlQW5hbHl0aWNzIHRyYWNrUGFnZVZpZXdzPXt0cnVlfSAvPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJDaGFrcmFQcm92aWRlciIsInRoZW1lIiwic3RvcmUiLCJQcm92aWRlciIsInVzZUVmZmVjdCIsInNldElzU2lkZWJhck9wZW4iLCJHb29nbGVBbmFseXRpY3MiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwiaGFuZGxlUmVzaXplIiwiaXNEZXNrdG9wIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRpc3BhdGNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmFja1BhZ2VWaWV3cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "nextjs-google-analytics":
/*!******************************************!*\
  !*** external "nextjs-google-analytics" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-google-analytics");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();