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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\pages\\\\index.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\pages\\\\\\\\index.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_CardMusica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/CardMusica */ \"./src/Components/CardMusica.jsx\");\n/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Header */ \"./src/Components/Header.jsx\");\n/* harmony import */ var _Components_SecaoMusicas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/SecaoMusicas */ \"./src/Components/SecaoMusicas.jsx\");\n/* harmony import */ var _Components_Titulo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Titulo */ \"./src/Components/Titulo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [musicas, setMusicas] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const options = {\n        method: \"GET\",\n        headers: {\n            \"X-RapidAPI-Key\": \"ae0e3099c4mshafb361d18631148p19cd5cjsnb394b21bd634\",\n            \"X-RapidAPI-Host\": \"deezerdevs-deezer.p.rapidapi.com\"\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const fetchMusic = async ()=>{\n            fetch(\"https://deezerdevs-deezer.p.rapidapi.com/album/302127\", options).then((response)=>response.json()).then((data)=>setMusicas(data)).catch((err)=>console.error(err));\n        };\n        fetchMusic();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"h-72 brightness-10 object-cover w-screen\",\n                        src: \"https://cdn.discordapp.com/attachments/1026632294041133111/1112817292531748964/4566888.jpg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex m-5 min-h-screen flex-col justify-between px-24 \".concat((next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default().className)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-96 rounded bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full font-bold bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none\",\n                                type: \"search\",\n                                name: \"search\",\n                                id: \"search\",\n                                placeholder: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"m-2 rounded bg-teal-800 px-4 py-4 text-white\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 53,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Titulo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: \"Melhores \\xc1lbuns de 2022\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_SecaoMusicas__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            musicas: musicas\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Titulo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: \"Musicas em alta\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Titulo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: \"\\xc1lbuns em alta\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Titulo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: \"Lan\\xe7amentos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rafae\\\\Documents\\\\GitHub\\\\WebFinal\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"NrgndcXlK07ZlSU9A+aPRQFN0ZU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU9NQTtBQVAyQztBQUNSO0FBQ1k7QUFDWjtBQUVHO0FBSTdCLFNBQVNPLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXpDLE1BQU1LLFVBQVU7UUFDZEMsUUFBUTtRQUNSQyxTQUFTO1lBQ1Asa0JBQWtCO1lBQ2xCLG1CQUFtQjtRQUNyQjtJQUNGO0lBRUFOLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTyxhQUFhLFVBQVk7WUFDN0JDLE1BQU0seURBQXlESixTQUM1REssSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBLE9BQVFULFdBQVdTLE9BQ3hCQyxLQUFLLENBQUNDLENBQUFBLE1BQU9DLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDaEM7UUFDQVA7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBRUUsOERBQUNYLDBEQUFNQTs7Ozs7MEJBRVAsOERBQUNxQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7OEJBQ0MsNEVBQUNFO3dCQUFJRCxXQUFVO3dCQUEyQ0UsS0FBSTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEUsOERBQUNDO2dCQUFLSCxXQUFXLHdEQUF3RSxPQUFoQnhCLCtKQUFlOztrQ0FFeEYsOERBQUN1Qjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUNDSixXQUFVO2dDQUNWSyxNQUFLO2dDQUNMQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxhQUFZOzs7Ozs7MENBR2QsOERBQUNDO2dDQUFPVCxXQUFVOzBDQUErQzs7Ozs7Ozs7Ozs7O2tDQUtqRSw4REFBQ3BCLDBEQUFNQTtrQ0FBQzs7Ozs7O2tDQUNSLDhEQUFDbUI7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNyQixnRUFBWUE7NEJBQUNLLFNBQVNBOzs7Ozs7Ozs7OztrQ0FHekIsOERBQUNKLDBEQUFNQTtrQ0FBQzs7Ozs7O2tDQUVSLDhEQUFDQSwwREFBTUE7a0NBQUM7Ozs7OztrQ0FFUiw4REFBQ0EsMERBQU1BO2tDQUFDOzs7Ozs7Ozs7Ozs7OztBQUloQixDQUFDO0dBN0R1Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmRNdXNpY2EgZnJvbSAnQC9Db21wb25lbnRzL0NhcmRNdXNpY2EnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvQ29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgU2VjYW9NdXNpY2FzIGZyb20gJ0AvQ29tcG9uZW50cy9TZWNhb011c2ljYXMnO1xyXG5pbXBvcnQgVGl0dWxvIGZyb20gJ0AvQ29tcG9uZW50cy9UaXR1bG8nO1xyXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW211c2ljYXMsIHNldE11c2ljYXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ1gtUmFwaWRBUEktS2V5JzogJ2FlMGUzMDk5YzRtc2hhZmIzNjFkMTg2MzExNDhwMTljZDVjanNuYjM5NGIyMWJkNjM0JyxcclxuICAgICAgJ1gtUmFwaWRBUEktSG9zdCc6ICdkZWV6ZXJkZXZzLWRlZXplci5wLnJhcGlkYXBpLmNvbSdcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE11c2ljID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBmZXRjaCgnaHR0cHM6Ly9kZWV6ZXJkZXZzLWRlZXplci5wLnJhcGlkYXBpLmNvbS9hbGJ1bS8zMDIxMjcnLCBvcHRpb25zKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHNldE11c2ljYXMoZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfVxyXG4gICAgZmV0Y2hNdXNpYygpO1xyXG4gIH0sIFtdKVxyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIFxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naC03MiBicmlnaHRuZXNzLTEwIG9iamVjdC1jb3ZlciB3LXNjcmVlbicgc3JjPSdodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy8xMDI2NjMyMjk0MDQxMTMzMTExLzExMTI4MTcyOTI1MzE3NDg5NjQvNDU2Njg4OC5qcGcnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtgZmxleCBtLTUgbWluLWgtc2NyZWVuIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBweC0yNCAke2ludGVyLmNsYXNzTmFtZX1gfT5cclxuICAgICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy05NiByb3VuZGVkIGJnLXdoaXRlJz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmb250LWJvbGQgYmctdHJhbnNwYXJlbnQgcHgtNCBweS0xIHRleHQtZ3JheS05MDAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgaWQ9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtLTIgcm91bmRlZCBiZy10ZWFsLTgwMCBweC00IHB5LTQgdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICBTZWFyY2hcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxUaXR1bG8+TWVsaG9yZXMgw4FsYnVucyBkZSAyMDIyPC9UaXR1bG8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgPFNlY2FvTXVzaWNhcyBtdXNpY2FzPXttdXNpY2FzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8VGl0dWxvPk11c2ljYXMgZW0gYWx0YTwvVGl0dWxvPlxyXG5cclxuICAgICAgICA8VGl0dWxvPsOBbGJ1bnMgZW0gYWx0YTwvVGl0dWxvPlxyXG5cclxuICAgICAgICA8VGl0dWxvPkxhbsOnYW1lbnRvczwvVGl0dWxvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbImludGVyIiwiQ2FyZE11c2ljYSIsIkhlYWRlciIsIlNlY2FvTXVzaWNhcyIsIlRpdHVsbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsIm11c2ljYXMiLCJzZXRNdXNpY2FzIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJmZXRjaE11c2ljIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwibWFpbiIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});