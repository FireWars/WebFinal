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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/pages/index.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/pages/index.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Components_CardMusica__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/CardMusica */ \"./src/Components/CardMusica.jsx\");\n/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Header */ \"./src/Components/Header.jsx\");\n/* harmony import */ var _Components_SecaoMusicas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/SecaoMusicas */ \"./src/Components/SecaoMusicas.jsx\");\n/* harmony import */ var _Components_Titulo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Titulo */ \"./src/Components/Titulo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [musicas, setMusicas] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [valor, setValor] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const options = {\n        method: \"GET\",\n        url: \"https://deezerdevs-deezer.p.rapidapi.com/search\",\n        // params: {q: 'eminem'},\n        headers: {\n            \"X-RapidAPI-Key\": \"ae0e3099c4mshafb361d18631148p19cd5cjsnb394b21bd634\",\n            \"X-RapidAPI-Host\": \"deezerdevs-deezer.p.rapidapi.com\"\n        }\n    };\n    // useEffect(() => {\n    //   const fetchMusic = async () => {\n    //     fetch('https://deezerdevs-deezer.p.rapidapi.com/album/302127', options)\n    //       .then(response => response.json())\n    //       .then(data => setMusicas(data))\n    //       .catch(err => console.error(err));\n    //   }\n    //   fetchMusic();\n    // }, []);\n    // const axios = require('axios');\n    // const options = {\n    //   method: 'GET',\n    //   url: 'https://deezerdevs-deezer.p.rapidapi.com/search',\n    //   // params: {q: 'eminem'},\n    // };\n    // try {\n    //   const response = await axios.request(options);\n    //   console.log(response.data);\n    // } catch (error) {\n    //   console.error(error);\n    // }\n    const handleInputValor = (evento)=>{\n        const value = evento.target.value;\n        setValor(value);\n    };\n    const handleSearchArtist = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].request({\n                ...options,\n                params: {\n                    q: \"eminem\"\n                }\n            });\n            // const response = await axios.request({ ...options, params: { q: valor } });\n            if (response.status === 200) {\n                setMusicas(response.data.data);\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gabryelle.santos/Documents/WebFinal/src/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"h-72 brightness-10 object-cover w-screen\",\n                        src: \"https://cdn.discordapp.com/attachments/1026632294041133111/1112817292531748964/4566888.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/gabryelle.santos/Documents/WebFinal/src/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/gabryelle.santos/Documents/WebFinal/src/pages/index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gabryelle.santos/Documents/WebFinal/src/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex m-5 min-h-screen flex-col justify-between px-24 \".concat((next_font_google_target_css_path_src_pages_index_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default().className)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-96 rounded bg-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"w-full font-bold bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none\",\n                            type: \"search\",\n                            name: \"search\",\n                            id: \"search\",\n                            placeholder: \"Digite o nome do artista\",\n                            onChange: (evento)=>handleInputValor(evento)\n                        }, void 0, false, {\n                            fileName: \"/Users/gabryelle.santos/Documents/WebFinal/src/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"m-2 rounded bg-teal-800 px-4 py-4 text-white\",\n                            onClick: ()=>handleSearchArtist(),\n                            children: \"Pesquisar\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gabryelle.santos/Documents/WebFinal/src/pages/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gabryelle.santos/Documents/WebFinal/src/pages/index.js\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/gabryelle.santos/Documents/WebFinal/src/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"BWVf2o1KmOOOVMjWN2bN91N3esA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRTUE7QUFSMkM7QUFDUjtBQUNZO0FBQ1o7QUFFRztBQUNsQjtBQUlYLFNBQVNRLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNUSxVQUFVO1FBQ2RDLFFBQVE7UUFDUkMsS0FBSztRQUNMLHlCQUF5QjtRQUN6QkMsU0FBUztZQUNQLGtCQUFrQjtZQUNsQixtQkFBbUI7UUFDckI7SUFDRjtJQUVBLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMsOEVBQThFO0lBQzlFLDJDQUEyQztJQUMzQyx3Q0FBd0M7SUFDeEMsMkNBQTJDO0lBQzNDLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsVUFBVTtJQUVWLGtDQUFrQztJQUVsQyxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDREQUE0RDtJQUM1RCw4QkFBOEI7SUFDOUIsS0FBSztJQUVMLFFBQVE7SUFDUixtREFBbUQ7SUFDbkQsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsSUFBSTtJQUVKLE1BQU1DLG1CQUFtQixDQUFDQyxTQUFXO1FBQ25DLE1BQU1DLFFBQVFELE9BQU9FLE1BQU0sQ0FBQ0QsS0FBSztRQUNqQ1AsU0FBU087SUFDWDtJQUVBLE1BQU1FLHFCQUFxQixVQUFZO1FBQ3JDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1mLHFEQUFhLENBQUM7Z0JBQUUsR0FBR00sT0FBTztnQkFBRVcsUUFBUTtvQkFBRUMsR0FBRztnQkFBUztZQUFFO1lBQzNFLDhFQUE4RTtZQUU5RSxJQUFJSCxTQUFTSSxNQUFNLEtBQUssS0FBSztnQkFDM0JoQixXQUFXWSxTQUFTSyxJQUFJLENBQUNBLElBQUk7WUFDL0IsQ0FBQztRQUVILEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUMxQiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDNEI7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEOzhCQUNDLDRFQUFDRTt3QkFBSUQsV0FBVTt3QkFBMkNFLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWxFLDhEQUFDQztnQkFBS0gsV0FBVyx3REFBd0UsT0FBaEIvQiwrSkFBZTswQkFDeEYsNEVBQUM4QjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNJOzRCQUNDSixXQUFVOzRCQUNWSyxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaQyxVQUFVLENBQUN0QixTQUFXRCxpQkFBaUJDOzs7Ozs7c0NBR3pDLDhEQUFDdUI7NEJBQU9WLFdBQVU7NEJBQStDVyxTQUFTLElBQU1yQjtzQ0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjlHLENBQUM7R0FoR3VCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZE11c2ljYSBmcm9tICdAL0NvbXBvbmVudHMvQ2FyZE11c2ljYSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvQ29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFNlY2FvTXVzaWNhcyBmcm9tICdAL0NvbXBvbmVudHMvU2VjYW9NdXNpY2FzJztcbmltcG9ydCBUaXR1bG8gZnJvbSAnQC9Db21wb25lbnRzL1RpdHVsbyc7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttdXNpY2FzLCBzZXRNdXNpY2FzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3ZhbG9yLCBzZXRWYWxvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHVybDogJ2h0dHBzOi8vZGVlemVyZGV2cy1kZWV6ZXIucC5yYXBpZGFwaS5jb20vc2VhcmNoJyxcbiAgICAvLyBwYXJhbXM6IHtxOiAnZW1pbmVtJ30sXG4gICAgaGVhZGVyczoge1xuICAgICAgJ1gtUmFwaWRBUEktS2V5JzogJ2FlMGUzMDk5YzRtc2hhZmIzNjFkMTg2MzExNDhwMTljZDVjanNuYjM5NGIyMWJkNjM0JyxcbiAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnZGVlemVyZGV2cy1kZWV6ZXIucC5yYXBpZGFwaS5jb20nXG4gICAgfVxuICB9O1xuICBcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBmZXRjaE11c2ljID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgICAgZmV0Y2goJ2h0dHBzOi8vZGVlemVyZGV2cy1kZWV6ZXIucC5yYXBpZGFwaS5jb20vYWxidW0vMzAyMTI3Jywgb3B0aW9ucylcbiAgLy8gICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgICAudGhlbihkYXRhID0+IHNldE11c2ljYXMoZGF0YSkpXG4gIC8vICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgLy8gICB9XG4gIC8vICAgZmV0Y2hNdXNpYygpO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSB7XG4gIC8vICAgbWV0aG9kOiAnR0VUJyxcbiAgLy8gICB1cmw6ICdodHRwczovL2RlZXplcmRldnMtZGVlemVyLnAucmFwaWRhcGkuY29tL3NlYXJjaCcsXG4gIC8vICAgLy8gcGFyYW1zOiB7cTogJ2VtaW5lbSd9LFxuICAvLyB9O1xuXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5yZXF1ZXN0KG9wdGlvbnMpO1xuICAvLyAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAvLyB9XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRWYWxvciA9IChldmVudG8pID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50by50YXJnZXQudmFsdWU7XG4gICAgc2V0VmFsb3IodmFsdWUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoQXJ0aXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnJlcXVlc3QoeyAuLi5vcHRpb25zLCBwYXJhbXM6IHsgcTogJ2VtaW5lbScgfSB9KTtcbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucmVxdWVzdCh7IC4uLm9wdGlvbnMsIHBhcmFtczogeyBxOiB2YWxvciB9IH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgc2V0TXVzaWNhcyhyZXNwb25zZS5kYXRhLmRhdGEpXG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naC03MiBicmlnaHRuZXNzLTEwIG9iamVjdC1jb3ZlciB3LXNjcmVlbicgc3JjPSdodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy8xMDI2NjMyMjk0MDQxMTMzMTExLzExMTI4MTcyOTI1MzE3NDg5NjQvNDU2Njg4OC5qcGcnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17YGZsZXggbS01IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcHgtMjQgJHtpbnRlci5jbGFzc05hbWV9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LTk2IHJvdW5kZWQgYmctd2hpdGUnPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC1ib2xkIGJnLXRyYW5zcGFyZW50IHB4LTQgcHktMSB0ZXh0LWdyYXktOTAwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIG5vbWUgZG8gYXJ0aXN0YVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudG8pID0+IGhhbmRsZUlucHV0VmFsb3IoZXZlbnRvKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbS0yIHJvdW5kZWQgYmctdGVhbC04MDAgcHgtNCBweS00IHRleHQtd2hpdGUnIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlYXJjaEFydGlzdCgpfT5cbiAgICAgICAgICBQZXNxdWlzYXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPFRpdHVsbz5NZWxob3JlcyDDgWxidW5zIGRlIDIwMjI8L1RpdHVsbz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgIDxTZWNhb011c2ljYXMgbXVzaWNhcz17bXVzaWNhc30gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFRpdHVsbz5NdXNpY2FzIGVtIGFsdGE8L1RpdHVsbz5cblxuICAgICAgICA8VGl0dWxvPsOBbGJ1bnMgZW0gYWx0YTwvVGl0dWxvPlxuXG4gICAgICAgIDxUaXR1bG8+TGFuw6dhbWVudG9zPC9UaXR1bG8+ICovfVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJpbnRlciIsIkNhcmRNdXNpY2EiLCJIZWFkZXIiLCJTZWNhb011c2ljYXMiLCJUaXR1bG8iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiSG9tZSIsIm11c2ljYXMiLCJzZXRNdXNpY2FzIiwidmFsb3IiLCJzZXRWYWxvciIsIm9wdGlvbnMiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiaGFuZGxlSW5wdXRWYWxvciIsImV2ZW50byIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU2VhcmNoQXJ0aXN0IiwicmVzcG9uc2UiLCJyZXF1ZXN0IiwicGFyYW1zIiwicSIsInN0YXR1cyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJtYWluIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});