"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\pages\\\\index.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\pages\\\\\\\\index.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_CardMusica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/CardMusica */ \"./src/Components/CardMusica.jsx\");\n/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Header */ \"./src/Components/Header.jsx\");\n/* harmony import */ var _Components_SecaoMusicas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/SecaoMusicas */ \"./src/Components/SecaoMusicas.jsx\");\n/* harmony import */ var _Components_Titulo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Titulo */ \"./src/Components/Titulo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [musicas, setMusicas] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const options = {\n        method: \"GET\",\n        headers: {\n            \"X-RapidAPI-Key\": \"ae0e3099c4mshafb361d18631148p19cd5cjsnb394b21bd634\",\n            \"X-RapidAPI-Host\": \"deezerdevs-deezer.p.rapidapi.com\"\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchMusic = async ()=>{\n            fetch(\"https://deezerdevs-deezer.p.rapidapi.com/album/302127\", options).then((response)=>response.json()).then((data)=>setMusicas(data)).catch((err)=>console.error(err));\n        };\n        fetchMusic();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                class: \"flex h-screen w-screen items-center justify-center bg-gray-909\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-96 rounded bg-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        children: 'type=\"search\" name=\"search\" id=\"search\" placeholder=\"search\" class=\"w-full bolder-none bgtransp\"'\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this),\n            \"/*\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"h-72 brightness-10 object-cover w-screen\",\n                    src: \"https://cdn.discordapp.com/attachments/1026632294041133111/1112817292531748964/4566888.jpg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex m-5 min-h-screen flex-col justify-between px-24  \".concat((next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default().className)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Titulo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: \"Melhores \\xc1lbuns de 2022\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_SecaoMusicas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            musicas: musicas\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Titulo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: \"Musicas em alta\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Titulo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: \"\\xc1lbuns em alta\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Titulo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: \"Lan\\xe7amentos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            \"*/\"\n        ]\n    }, void 0, true);\n}\n_s(Home, \"NrgndcXlK07ZlSU9A+aPRQFN0ZU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU9NQTtBQVAyQztBQUNSO0FBQ1k7QUFDWjtBQUVHO0FBSTdCLFNBQVNPLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXpDLE1BQU1LLFVBQVU7UUFDZEMsUUFBUTtRQUNSQyxTQUFTO1lBQ1Asa0JBQWtCO1lBQ2xCLG1CQUFtQjtRQUNyQjtJQUNGO0lBRUFOLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTyxhQUFhLFVBQVk7WUFDN0JDLE1BQU0seURBQXlESixTQUM1REssSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVFULFdBQVdTLE9BQ3hCQyxLQUFLLENBQUNDLENBQUFBLE1BQU9DLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDaEM7UUFDQVA7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0EsOERBQUNVO2dCQUFLQyxPQUFNOzBCQUNWLDRFQUFDQztvQkFBSUMsV0FBVTs4QkFDZiw0RUFBQ0M7a0NBQU07Ozs7Ozs7Ozs7Ozs7Ozs7WUFRRjswQkFFTCw4REFBQ3pCLDBEQUFNQTs7Ozs7MEJBRVAsOERBQUN1QjswQkFDQyw0RUFBQ0c7b0JBQUlGLFdBQVU7b0JBQTJDRyxLQUFJOzs7Ozs7Ozs7OzswQkFHaEUsOERBQUNOO2dCQUNDRyxXQUFXLHlEQUF5RSxPQUFoQjFCLCtKQUFlOztrQ0FFbkYsOERBQUNJLDBEQUFNQTtrQ0FBQzs7Ozs7O2tDQUNSLDhEQUFDcUI7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUN2QixnRUFBWUE7NEJBQUNLLFNBQVNBOzs7Ozs7Ozs7OztrQ0FHekIsOERBQUNKLDBEQUFNQTtrQ0FBQzs7Ozs7O2tDQUVSLDhEQUFDQSwwREFBTUE7a0NBQUM7Ozs7OztrQ0FFUiw4REFBQ0EsMERBQU1BO2tDQUFDOzs7Ozs7Ozs7Ozs7WUFFSDs7O0FBSWIsQ0FBQztHQTNEdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkTXVzaWNhIGZyb20gJ0AvQ29tcG9uZW50cy9DYXJkTXVzaWNhJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdAL0NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IFNlY2FvTXVzaWNhcyBmcm9tICdAL0NvbXBvbmVudHMvU2VjYW9NdXNpY2FzJztcclxuaW1wb3J0IFRpdHVsbyBmcm9tICdAL0NvbXBvbmVudHMvVGl0dWxvJztcclxuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFttdXNpY2FzLCBzZXRNdXNpY2FzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdYLVJhcGlkQVBJLUtleSc6ICdhZTBlMzA5OWM0bXNoYWZiMzYxZDE4NjMxMTQ4cDE5Y2Q1Y2pzbmIzOTRiMjFiZDYzNCcsXHJcbiAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnZGVlemVyZGV2cy1kZWV6ZXIucC5yYXBpZGFwaS5jb20nXHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hNdXNpYyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgZmV0Y2goJ2h0dHBzOi8vZGVlemVyZGV2cy1kZWV6ZXIucC5yYXBpZGFwaS5jb20vYWxidW0vMzAyMTI3Jywgb3B0aW9ucylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRNdXNpY2FzKGRhdGEpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgIH1cclxuICAgIGZldGNoTXVzaWMoKTtcclxuICB9LCBbXSlcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPG1haW4gY2xhc3M9XCJmbGV4IGgtc2NyZWVuIHctc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTkwOVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LTk2IHJvdW5kZWQgYmctd2hpdGUnPlxyXG4gICAgICA8aW5wdXQ+XHJcbiAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgaWQ9XCJzZWFyY2hcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaFwiXHJcbiAgICAgIGNsYXNzPVwidy1mdWxsIGJvbGRlci1ub25lIGJndHJhbnNwXCJcclxuICAgICAgPC9pbnB1dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgICAvKlxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdoLTcyIGJyaWdodG5lc3MtMTAgb2JqZWN0LWNvdmVyIHctc2NyZWVuJyBzcmM9J2h0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzEwMjY2MzIyOTQwNDExMzMxMTEvMTExMjgxNzI5MjUzMTc0ODk2NC80NTY2ODg4LmpwZyc+PC9pbWc+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPG1haW5cclxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IG0tNSBtaW4taC1zY3JlZW4gZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHB4LTI0ICAke2ludGVyLmNsYXNzTmFtZX1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRpdHVsbz5NZWxob3JlcyDDgWxidW5zIGRlIDIwMjI8L1RpdHVsbz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICA8U2VjYW9NdXNpY2FzIG11c2ljYXM9e211c2ljYXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxUaXR1bG8+TXVzaWNhcyBlbSBhbHRhPC9UaXR1bG8+XHJcblxyXG4gICAgICAgIDxUaXR1bG8+w4FsYnVucyBlbSBhbHRhPC9UaXR1bG8+XHJcblxyXG4gICAgICAgIDxUaXR1bG8+TGFuw6dhbWVudG9zPC9UaXR1bG8+XHJcblxyXG4gICAgICA8L21haW4+XHJcbiAgICAqLyBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiaW50ZXIiLCJDYXJkTXVzaWNhIiwiSGVhZGVyIiwiU2VjYW9NdXNpY2FzIiwiVGl0dWxvIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwibXVzaWNhcyIsInNldE11c2ljYXMiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImZldGNoTXVzaWMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJtYWluIiwiY2xhc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});