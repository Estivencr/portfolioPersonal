"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Layout = (param)=>{\n    let { children  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleRouteChange = (url)=>{\n        //console.log(url)\n        nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n    };\n    router.events.off(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().start());\n    router.events.off(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n    //useEffect(() => {\n    // \n    //return() => {\n    //router.events.off('routeChangeComplete', () => NProgress.done());\n    //}\n    //}, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\next-simple-portfolio\\\\components\\\\Layout.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\next-simple-portfolio\\\\components\\\\Layout.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Estiven Cano Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\next-simple-portfolio\\\\components\\\\Layout.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"2022 - \",\n                                new Date().getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\next-simple-portfolio\\\\components\\\\Layout.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All rights reserved.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\next-simple-portfolio\\\\components\\\\Layout.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\next-simple-portfolio\\\\components\\\\Layout.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usuario\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\next-simple-portfolio\\\\components\\\\Layout.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0U7QUFDTTtBQUNKO0FBRWpDLE1BQU1JLFNBQVMsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUV4QixNQUFNQyxTQUFTSixzREFBU0E7SUFFeEIsTUFBTUssb0JBQW9CQyxDQUFBQSxNQUFPO1FBQzdCLGtCQUFrQjtRQUNsQkwsc0RBQWU7SUFDbkI7SUFFQUcsT0FBT0ksTUFBTSxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLElBQU1SLHNEQUFlO0lBRTNERyxPQUFPSSxNQUFNLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsSUFBTVIscURBQWM7SUFDN0QsbUJBQW1CO0lBQ2hCLEdBQUc7SUFFRixlQUFlO0lBQ1gsbUVBQW1FO0lBQ3ZFLEdBQUc7SUFDUCxRQUFRO0lBRVIscUJBQ0k7OzBCQUNJLDhEQUFDSCwrQ0FBTUE7Ozs7OzBCQUVQLDhEQUFDYTtnQkFBS0MsV0FBVTswQkFDWFQ7Ozs7OzswQkFHTCw4REFBQ1U7Z0JBQU9ELFdBQVU7MEJBQ2QsNEVBQUNFO29CQUFJRixXQUFVOztzQ0FDWCw4REFBQ0c7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7O2dDQUFFO2dDQUFRLElBQUlDLE9BQU9DLFdBQVc7Ozs7Ozs7c0NBQ2pDLDhEQUFDRjtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QjtHQXRDTWQ7O1FBRWFGLGtEQUFTQTs7O0tBRnRCRTtBQXdDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCJcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCJcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codXJsKVxyXG4gICAgICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xyXG5cclxuICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcbiAgICAvL3VzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAvLyBcclxuXHJcbiAgICAgICAgLy9yZXR1cm4oKSA9PiB7XHJcbiAgICAgICAgICAgIC8vcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuICAgICAgICAvL31cclxuICAgIC8vfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICBcclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LWxpZ2h0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+JmNvcHk7IEVzdGl2ZW4gQ2FubyBQb3J0Zm9saW88L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjIwMjIgLSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5BbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk5Qcm9ncmVzcyIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJzdGFydCIsImV2ZW50cyIsIm9mZiIsImRvbmUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZm9vdGVyIiwiZGl2IiwiaDEiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});