(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[722],{9818:function(e,t,n){"use strict";n.d(t,{db:function(){return i},t:function(){return u}});var r=n(5503),a=n(6257),o=n(1153),s=(0,r.C6)().length?(0,r.Mq)():(0,r.ZF)({apiKey:"AIzaSyDOsqxQXCUmuRCR_HLUC91yIBgsOrIgRP0",authDomain:"huco-9f896.firebaseapp.com",databaseURL:"https://huco-9f896-default-rtdb.firebaseio.com",projectId:"huco-9f896",storageBucket:"huco-9f896.appspot.com",messagingSenderId:"692689852368",appId:"1:692689852368:web:06562137751fe56d8d4bd5",measurementId:"G-HRPMY2CPJS"}),i=(0,a.ad)(s),u=(0,o.cF)()},9435:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bailoutToClientRendering=function(){var e=a.staticGenerationAsyncStorage&&"getStore"in a.staticGenerationAsyncStorage?null==a.staticGenerationAsyncStorage?void 0:a.staticGenerationAsyncStorage.getStore():a.staticGenerationAsyncStorage;return null!=e&&!!e.forceStatic||((null==e?void 0:e.isStaticGeneration)&&r.suspense(),!1)};var r=n(2122),a=n(9374);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2128:function(e,t,n){"use strict";var r=n(3227),a=n(8361);Object.defineProperty(t,"__esModule",{value:!0}),t.useSearchParams=function(){var e=o.useContext(i.SearchParamsContext),t=o.useMemo(function(){return new v(e||new URLSearchParams)},[e]);if(u.bailoutToClientRendering())return t;if(!e)throw Error("invariant expected search params to be mounted");return t},t.usePathname=function(){return o.useContext(i.PathnameContext)},Object.defineProperty(t,"ServerInsertedHTMLContext",{enumerable:!0,get:function(){return l.ServerInsertedHTMLContext}}),Object.defineProperty(t,"useServerInsertedHTML",{enumerable:!0,get:function(){return l.useServerInsertedHTML}}),t.useRouter=function(){var e=o.useContext(s.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e},t.useSelectedLayoutSegments=p,t.useSelectedLayoutSegment=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children",t=p(e);return 0===t.length?null:t[0]},Object.defineProperty(t,"redirect",{enumerable:!0,get:function(){return c.redirect}}),Object.defineProperty(t,"notFound",{enumerable:!0,get:function(){return d.notFound}});var o=n(7294),s=n(6163),i=n(1203),u=n(9435),l=n(334),c=n(9580),d=n(52),f=Symbol("internal for urlsearchparams readonly");function h(){return Error("ReadonlyURLSearchParams cannot be modified")}var v=function(e){function t(e){r(this,t),this[f]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}return a(t,[{key:e,value:function(){return this[f][Symbol.iterator]()}},{key:"append",value:function(){throw h()}},{key:"delete",value:function(){throw h()}},{key:"set",value:function(){throw h()}},{key:"sort",value:function(){throw h()}}]),t}(Symbol.iterator);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"children";return function e(t,n){var r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(r)o=t[1][n];else{var o,s,i=t[1];o=null!=(s=i.children)?s:Object.values(i)[0]}if(!o)return a;var u=o[0],l=Array.isArray(u)?u[1]:u;return l?(a.push(l),e(o,n,!1,a)):a}(o.useContext(s.LayoutRouterContext).tree,e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},52:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.notFound=function(){var e=Error(n);throw e.digest=n,e},t.NOT_FOUND_ERROR_CODE=void 0;var n="NEXT_NOT_FOUND";t.NOT_FOUND_ERROR_CODE=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9580:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.redirect=function(e){var t=Error(n);throw t.digest=n+";"+e,t},t.REDIRECT_ERROR_CODE=void 0;var n="NEXT_REDIRECT";t.REDIRECT_ERROR_CODE=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.children},t.suspense=function(){var e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,n(2648).Z)(n(7294));var r=n(3540)},334:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useServerInsertedHTML=function(e){var t=r.useContext(a);t&&t(e)},t.ServerInsertedHTMLContext=void 0;var r=(0,n(1598).Z)(n(7294)),a=r.default.createContext(null);t.ServerInsertedHTMLContext=a},8584:function(e,t,n){"use strict";n.r(t);var r=n(6687),a=n(29),o=n(7794),s=n.n(o),i=n(6772),u=n(5159),l=n(3973),c=n(3519),d=n(4353),f=n(9037),h=n(662),v=n(7294),p=n(9818),m=n(6257),x=n(3299),b=n(5476),g=n(9332),y=n(5893);t.default=function(){(0,g.useRouter)();var e,t,n,o,w=(0,x.useSession)().data,j=(0,v.useState)("");j[0],j[1];var _=(0,v.useState)(!1),S=_[0],O=_[1],C=(0,v.useState)(""),E=C[0],R=C[1],N=(0,v.useState)(""),M=N[0],T=N[1],P=(0,v.useRef)(null),A=(0,v.useState)([]),Z=A[0],I=A[1],k=(0,v.useState)(!0),L=k[0];k[1];var D=(0,v.useState)(!0),H=D[0],B=D[1],F=(0,v.useState)(1),G=F[0],U=F[1],z=(0,v.useState)("");z[0],z[1];var J=(0,v.useState)(""),X=J[0],V=J[1],Y=(0,v.useState)(""),q=Y[0],K=Y[1],Q=(e=(0,a.Z)(s().mark(function e(){var t,n;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,p.db)((0,m.hJ)("system name")),n=(0,p.db)((0,m.hJ)(M)),e.next=5,t.get();case 5:return e.sent.forEach(function(e){n.doc(e.id).set(e.data())}),e.next=9,t.delete();case 9:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)}),$=function(){O(!0),B(!1)};(0,v.useEffect)(function(){return(0,m.cf)((0,m.IO)((0,m.hJ)(p.db,"system name"),(0,m.Xo)("timestamp","asc")),function(e){I(e.docs)})},[p.db]);var W=(t=(0,a.Z)(s().mark(function e(){var t;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.ET)((0,m.hJ)(p.db,"system name"),{usertip:E,email:null==w?void 0:null===(t=w.user)||void 0===t?void 0:t.email,timestamp:(0,m.Bt)()});case 2:e.sent;case 3:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)}),ee=(n=(0,a.Z)(s().mark(function e(){var t;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.ET)((0,m.hJ)(p.db,"system name"),{Mytip:E,email:null==w?void 0:null===(t=w.user)||void 0===t?void 0:t.email,timestamp:(0,m.Bt)()});case 2:e.sent;case 3:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)}),et=(o=(0,a.Z)(s().mark(function e(){var t,n,r,a;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n={message:X}),e.next=5,fetch("http://127.0.0.1:5000",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:return K((a=e.sent).response),e.next=12,(0,m.ET)((0,m.hJ)(p.db,"chat"),{user:X,system:a,email:null==w?void 0:null===(t=w.user)||void 0===t?void 0:t.email,timestamp:(0,m.Bt)()});case 12:case"end":return e.stop()}},e)})),function(){return o.apply(this,arguments)});return(0,y.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,y.jsx)("header",{className:"flex items-center justify-between space-x-5 border-b border-gray-800 p-4 mt-1",children:L&&(0,y.jsxs)("div",{className:" flex space-x-5 ",children:[(0,r.Z)(Array(G)).map(function(e,t){return(0,y.jsx)(i.Z,{onClick:$,className:"h-6 w-6  text-[#b1afaf] disabled:text-[#40444b] hover:text-white ",disabled:!H},t)}),(0,y.jsx)(u.Z,{onClick:function(){U(G+1),B()},className:"h-6 w-6 text-[#b1afaf] "})]})}),H&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("main",{className:"flex-grow overflow-y-scroll  scrollbar-hide",children:(0,y.jsxs)("div",{children:[Z.map(function(e){return(0,y.jsx)(b.default,{id:e.id,tip:e.data()},e.id)}),(0,y.jsx)("div",{ref:P})]})}),(0,y.jsxs)("div",{className:"flex  items-center p-2.5 fixed bottom-0 left-30 w-3/4 bg-[#40444b] py-4 mx-5 mb-7 rounded-lg ",children:[(0,y.jsx)("form",{className:"flex-grow  ",children:(0,y.jsx)("input",{value:E,onChange:function(e){return R(e.target.value)},className:"bg-transparent focus:outline-none flex-1 flex-grow w-full  font-20px\r disabled:cursor-not-allowed  disabled:text-white-300 text-white",type:"text",placeholder:"create"})}),(0,y.jsx)(l.Z,{className:"h-6 w-6 text-[#b1afaf]   mr-2",onClick:W}),(0,y.jsx)(c.Z,{className:"h-6 w-6 text-[#b1afaf]   mr-2",onClick:ee}),(0,y.jsxs)(h.Z,{className:"flex items-center",children:[(0,y.jsx)(h.Z.Trigger,{children:(0,y.jsx)(d.Z,{className:"text-white h-6 w-6 navbtn"})}),(0,y.jsx)(h.Z.Content,{children:(0,y.jsxs)("div",{className:" bg-[#35353f] text-white flex p-2 items-center",children:[(0,y.jsx)("form",{children:(0,y.jsx)("input",{type:"text",value:M,onChange:function(e){return T(e.target.value)},placeholder:"Name a system",className:"text-black font-bold "})}),(0,y.jsx)(f.Z,{onClick:Q,className:"h-6 w-6 navbtn"})]})})]})]})]}),S&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("main",{className:"flex-grow overflow-y-scroll scrollbar-hide",children:(0,y.jsx)("p",{className:"text-white",children:q})}),(0,y.jsxs)("div",{className:"flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg object-contain",children:[(0,y.jsx)("form",{className:" flex-grow ",children:(0,y.jsx)("input",{value:X,onChange:function(e){return V(e.target.value)},className:"bg-transparent focus:outline-none flex-1 flex-grow w-full  font-20px\r disabled:cursor-not-allowed  disabled:text-white-300 text-white",type:"text",placeholder:"chat"})}),(0,y.jsx)("div",{children:(0,y.jsx)(d.Z,{onClick:et,className:"h-6 w-6 navbtn"})})]})]})]})}},5476:function(e,t,n){"use strict";n.r(t);var r=n(5893);t.default=function(e){e.id;var t=e.tip;return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-white bg-[#453545] p-2   font-medium",style:{marginRight:"auto"},children:null==t?void 0:t.usertip}),(0,r.jsx)("p",{className:"text-white  p-2  font-medium",style:{marginLeft:"auto"},children:null==t?void 0:t.Mytip})]})}},4878:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/SystemInput",function(){return n(8584)}])},9332:function(e,t,n){e.exports=n(2128)},9374:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.staticGenerationAsyncStorage=void 0;var n={};t.staticGenerationAsyncStorage=n,globalThis.AsyncLocalStorage&&(t.staticGenerationAsyncStorage=n=new globalThis.AsyncLocalStorage),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9037:function(e,t,n){"use strict";var r=n(7294);let a=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",clipRule:"evenodd"}))});t.Z=a},3973:function(e,t,n){"use strict";var r=n(7294);let a=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}))});t.Z=a},3519:function(e,t,n){"use strict";var r=n(7294);let a=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"}))});t.Z=a},6772:function(e,t,n){"use strict";var r=n(7294);let a=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{d:"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}))});t.Z=a},4353:function(e,t,n){"use strict";var r=n(7294);let a=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}))});t.Z=a},5159:function(e,t,n){"use strict";var r=n(7294);let a=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"}))});t.Z=a},6687:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})}},function(e){e.O(0,[16,279,662,996,774,888,179],function(){return e(e.s=4878)}),_N_E=e.O()}]);