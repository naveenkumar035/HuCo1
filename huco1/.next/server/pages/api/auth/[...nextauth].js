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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst serviceAccount = __webpack_require__(/*! ../../../../../../huco.json */ \"(api)/./huco.json\");\n\nif (!(firebase_admin__WEBPACK_IMPORTED_MODULE_2___default().apps.length)) {\n  firebase_admin__WEBPACK_IMPORTED_MODULE_2___default().initializeApp({\n    credential: firebase_admin__WEBPACK_IMPORTED_MODULE_2___default().credential.cert(serviceAccount),\n    databaseURL: \"https://huco-9f896-default-rtdb.firebaseio.com\"\n  });\n}\n\nconst authOptions = {\n  // Configure one or more authentication providers\n  providers: [next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET\n  }) // ...add more providers here\n  ],\n  callbacks: {\n    async session({\n      session,\n      token\n    }) {\n      session.user.tag = session.user.name.split(\"\").join(\"\").toLocaleLowerCase();\n      session.user.uid = token.sub;\n      const db = firebase_admin__WEBPACK_IMPORTED_MODULE_2___default().firestore();\n      const userRef = db.collection(\"users\").doc(session.user.uid);\n      await userRef.set({\n        name: session.user.name,\n        tag: session.user.tag,\n        email: session.user.email // Add any other user data you want to store\n\n      }, {\n        merge: true\n      });\n      return session;\n    }\n\n  },\n  secret: process.env.JWT_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1HLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUE5Qjs7QUFFQSxJQUFJLENBQUNGLG1FQUFMLEVBQXdCO0VBQ3RCQSxtRUFBQSxDQUFvQjtJQUNsQk0sVUFBVSxFQUFFTixxRUFBQSxDQUFzQkMsY0FBdEIsQ0FETTtJQUVsQk8sV0FBVyxFQUFFO0VBRkssQ0FBcEI7QUFJRDs7QUFFTSxNQUFNQyxXQUFXLEdBQUc7RUFDekI7RUFDQUMsU0FBUyxFQUFFLENBQ1RYLGlFQUFjLENBQUM7SUFDYlksUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBRFQ7SUFFYkMsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7RUFGYixDQUFELENBREwsQ0FLVDtFQUxTLENBRmM7RUFTekJDLFNBQVMsRUFBRTtJQUNULE1BQU1DLE9BQU4sQ0FBYztNQUFFQSxPQUFGO01BQVdDO0lBQVgsQ0FBZCxFQUFrQztNQUNoQ0QsT0FBTyxDQUFDRSxJQUFSLENBQWFDLEdBQWIsR0FBbUJILE9BQU8sQ0FBQ0UsSUFBUixDQUFhRSxJQUFiLENBQ2hCQyxLQURnQixDQUNWLEVBRFUsRUFFaEJDLElBRmdCLENBRVgsRUFGVyxFQUdoQkMsaUJBSGdCLEVBQW5CO01BS0FQLE9BQU8sQ0FBQ0UsSUFBUixDQUFhTSxHQUFiLEdBQW1CUCxLQUFLLENBQUNRLEdBQXpCO01BQ0EsTUFBTUMsRUFBRSxHQUFHNUIsK0RBQUEsRUFBWDtNQUNBLE1BQU04QixPQUFPLEdBQUdGLEVBQUUsQ0FBQ0csVUFBSCxDQUFjLE9BQWQsRUFBdUJDLEdBQXZCLENBQTJCZCxPQUFPLENBQUNFLElBQVIsQ0FBYU0sR0FBeEMsQ0FBaEI7TUFFQSxNQUFNSSxPQUFPLENBQUNHLEdBQVIsQ0FDSjtRQUNFWCxJQUFJLEVBQUVKLE9BQU8sQ0FBQ0UsSUFBUixDQUFhRSxJQURyQjtRQUVFRCxHQUFHLEVBQUVILE9BQU8sQ0FBQ0UsSUFBUixDQUFhQyxHQUZwQjtRQUdFYSxLQUFLLEVBQUVoQixPQUFPLENBQUNFLElBQVIsQ0FBYWMsS0FIdEIsQ0FJRTs7TUFKRixDQURJLEVBT0o7UUFBRUMsS0FBSyxFQUFFO01BQVQsQ0FQSSxDQUFOO01BU0EsT0FBT2pCLE9BQVA7SUFDRDs7RUFyQlEsQ0FUYztFQWdDekJrQixNQUFNLEVBQUV4QixPQUFPLENBQUNDLEdBQVIsQ0FBWXdCO0FBaENLLENBQXBCO0FBbUNQLGlFQUFldkMsZ0RBQVEsQ0FBQ1csV0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2h1Y28vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgYWRtaW4gZnJvbSBcImZpcmViYXNlLWFkbWluXCI7XHJcblxyXG5jb25zdCBzZXJ2aWNlQWNjb3VudCA9IHJlcXVpcmUoJy9odWNvLmpzb24nKTtcclxuXHJcbmlmICghYWRtaW4uYXBwcy5sZW5ndGgpIHtcclxuICBhZG1pbi5pbml0aWFsaXplQXBwKHtcclxuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydChzZXJ2aWNlQWNjb3VudCksXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2h1Y28tOWY4OTYtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCJcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICB9KSxcclxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgIHNlc3Npb24udXNlci50YWcgPSBzZXNzaW9uLnVzZXIubmFtZVxyXG4gICAgICAgIC5zcGxpdChcIlwiKVxyXG4gICAgICAgIC5qb2luKFwiXCIpXHJcbiAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICBzZXNzaW9uLnVzZXIudWlkID0gdG9rZW4uc3ViO1xyXG4gICAgICBjb25zdCBkYiA9IGFkbWluLmZpcmVzdG9yZSgpO1xyXG4gICAgICBjb25zdCB1c2VyUmVmID0gZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRvYyhzZXNzaW9uLnVzZXIudWlkKTtcclxuXHJcbiAgICAgIGF3YWl0IHVzZXJSZWYuc2V0KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IHNlc3Npb24udXNlci5uYW1lLFxyXG4gICAgICAgICAgdGFnOiBzZXNzaW9uLnVzZXIudGFnLFxyXG4gICAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCxcclxuICAgICAgICAgIC8vIEFkZCBhbnkgb3RoZXIgdXNlciBkYXRhIHlvdSB3YW50IHRvIHN0b3JlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IG1lcmdlOiB0cnVlIH1cclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsImFkbWluIiwic2VydmljZUFjY291bnQiLCJyZXF1aXJlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJjcmVkZW50aWFsIiwiY2VydCIsImRhdGFiYXNlVVJMIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwidGFnIiwibmFtZSIsInNwbGl0Iiwiam9pbiIsInRvTG9jYWxlTG93ZXJDYXNlIiwidWlkIiwic3ViIiwiZGIiLCJmaXJlc3RvcmUiLCJ1c2VyUmVmIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsImVtYWlsIiwibWVyZ2UiLCJzZWNyZXQiLCJKV1RfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./huco.json":
/*!*******************!*\
  !*** ./huco.json ***!
  \*******************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"huco-9f896","private_key_id":"b667dfb533c7c6a25c74583d20b899d9d969fca8","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCEnH3zr0EnJLjq\\nTNWO95u/N4EXEidhbz2FSoi4dmRhURBxj7cHyaI+UOkFAXYg+Xj5K3s2xre0+Jwn\\nXgPM6RP3gNA8d2xDY8pM6gmI9FNjGYpNpz/asPGDehm9/rSWsX8jlIIZYj1+yHhG\\nBTDQOQqnPAZmR7/kLrI5/rJoMNZbPcUN8oez3aZEj4wh6GVjZWJ+rs+ynhDHKIhx\\nr5zgnWWMLHco7O5cKmIqoy40voMChBQ8EQoqZtlaj/Dfpy3GjqHb7m3/fq1cllXW\\nvR1xfa048MHlhnMlLl1p9qQ5qYV5S7/H9eJl5O1FH4ca8+IU71IZoVwy/pKsd8JN\\nGLWiffOPAgMBAAECggEAHwWIxU+zGxgRFeZhcu9jhMjULvR1N+rQ5nR4JUa01rsi\\n8J3hADZf+NnumNgtrSsO7KMKUNcNtI0P4nmww+emXxjIHc0GC4G1mmaJUnttYlpg\\nKyg73MnVxZ7zlKmXz0S4bDdac9uybQ0ybZbbQ2qEnniBOr4AGr39vWlijNMX4gHr\\n98b0fQueypKP9d8ROirJtnTDVEDuMeT4uqsV6xFGCCyN1o41fe35HnOw5VPp8F8E\\nmvJdY9mgss+DS7igXBZLG1mnx2m2CSrMvI7NciHJVqI3jO3gItXEMrcPT9/lKX9E\\nqFC0pErtw6tJ1A/Tl1CNqE6fNH+9dYjNNMZ7pj0vYQKBgQC6p1i8Kp8yu0pR/orZ\\nUSqmBQrTzo4hSt2YRZoVJUFPDM19Y0FL7JBJbyd5WiuqvvBQXQQPEzg3EGaNRI49\\ndD9MpAvyDw0gyHYDwgOmvAIIkum9iTkZH0Wq9xUUoaEVu9u/dbyJW/KcuGlSEMWa\\nbSZKOH0IExgC/Vern/fMcmsvcQKBgQC14SqykoJ3PXAh72q4au4Tq0a+rM24O+9j\\nZU/Y4e3pWteessi0jRmR3uL2WAN8gK02rAWC1+EHPVnDEMVYo9HPMBcyu7PVXjor\\nyTkSPKrssbk72KE5wBQpcuB1WG0TbQMGuTqmpu71FWtB5DtG4os266x+a0s8QV0f\\n82qcED/S/wKBgGKiXDnTLB1a64M4x5bfVXI15+rVlDXzofX9kdbqwQBM+6nu8Wp1\\nsCmeG3X9OGYaUFOnU6XDukke2ZJ9T80ZyPlvFwDrAzz3saV6uQM7BrgRKoOGKC4m\\nYGJf/zvPzZf2lcEvLlpHxIUczksXodRhKYK/JxNFQ8MQrWt8NS5MqGeBAoGACoSh\\nAX6ziM3GxE+iLlQQvJZ1GuXHZ9Yfe/IJ8hLuvUYBni3cqYRXbDYljfV9DiAq5DSC\\nhRSS8OY9YKiBoSSoJ4Eydj6gocA3QPz8De/wOov0mF9ow3w2Lkd0b5TTigIN4L+p\\ngqW4v/ejIkZenzTOtDhg21a9HRjyl7xt9+SArGUCgYEAkcOOULY79bzR51neBxcw\\no6w9gqbnWJRSsON2M7JtNvgWjettGo4cp4PiFakc6cqQdET8PCcU466BUtaE4a+L\\n10IUvO7yGZckRsD6VxL4kc67SXCkHb1OJ5uA0rs0KGPN7TPr+o6GlSHrp97sS3or\\nz2Vw26ZvyrCShfrNFkXdq0g=\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-4fo5p@huco-9f896.iam.gserviceaccount.com","client_id":"113124840308604344640","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4fo5p%40huco-9f896.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();