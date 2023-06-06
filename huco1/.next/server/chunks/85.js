"use strict";
exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 8085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Theme)
/* harmony export */ });
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
// 1. Import `createTheme`






function Theme() {
  // 2. Call `createTheme` and pass your custom values
  const lightTheme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    type: 'light',
    theme: {
      colors: {}
    }
  });
  const darkTheme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    type: 'dark',
    theme: {
      colors: {}
    }
  }); // 3. Apply light or dark theme depending on localStorage and `getDocumentTheme` value
  // App.jsx entry point of your app

  const Main = () => {
    const {
      0: isDark,
      1: setIsDark
    } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      // you can use any storage
      let theme = window.localStorage.getItem('data-theme');
      setIsDark(theme === 'dark');
      const observer = new MutationObserver(mutation => {
        let newTheme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.getDocumentTheme)(document?.documentElement);
        setIsDark(newTheme === 'dark');
      }); // Observe the document theme changes

      observer.observe(document?.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme', 'style']
      });
      return () => observer.disconnect();
    }, []);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(NextUIProvider, {
      theme: isDark ? darkTheme : lightTheme,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(App, {})
    });
  }; // 4. Use `changeTheme` method to control theme changing


  const App = () => {
    const {
      type,
      isDark
    } = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.useTheme)();

    const handleChange = () => {
      const nextTheme = isDark ? 'light' : 'dark';
      window.localStorage.setItem('data-theme', nextTheme); // you can use any storage

      (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.changeTheme)(nextTheme);
    };

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: ["The current theme is: ", type, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Switch, {
        checked: isDark,
        onChange: handleChange
      })]
    });
  };
}

/***/ })

};
;