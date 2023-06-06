"use strict";
exports.id = 584;
exports.ids = [584];
exports.modules = {

/***/ 8584:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9818);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1492);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Tip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5476);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__]);
([_firebase__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function SystemInput() {
  const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
  const {
    0: inat,
    1: setInat
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: chat,
    1: setChat
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: input,
    1: setInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: intip,
    1: setIntip
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const tipRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const {
    0: tips,
    1: setTips
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: showIcon,
    1: setShowIcon
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const {
    0: showSegment,
    1: setShowSegment
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const {
    0: newName,
    1: setNewName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: response,
    1: setResponse
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');

  const renameSystem = async () => {
    const oldCollectionName = "system name";
    const oldCollectionRef = (0,_firebase__WEBPACK_IMPORTED_MODULE_3__.db)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(oldCollectionName));
    const newCollectionRef = (0,_firebase__WEBPACK_IMPORTED_MODULE_3__.db)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(intip));
    const oldDocs = await oldCollectionRef.get();
    oldDocs.forEach(doc => {
      newCollectionRef.doc(doc.id).set(doc.data());
    });
    await oldCollectionRef.delete();
  };

  const showchat = () => {
    setChat(true);
    setShowSegment(false);
  };

  const createsystem = () => {
    setCount(count + 1);
    setShowSegment();
  };

  const sendsystem = () => {
    setShowSegment(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "system name"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)("timestamp", "asc")), snapshot => {
    setTips(snapshot.docs);
  }), [_firebase__WEBPACK_IMPORTED_MODULE_3__.db]);

  const scrollToBottom = e => {
    tipRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const sendUser = async () => {
    const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, 'system name'), {
      usertip: input,
      email: session?.user?.email,
      timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
    });
  };

  const sendMe = async () => {
    const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, 'system name'), {
      Mytip: input,
      email: session?.user?.email,
      timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
    });
  };

  const sendMessage = async () => {
    const url = 'http://127.0.0.1:5000';
    const data = {
      message
    };
    console.log(data);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const jsonResponse = await response.json();
    setResponse(jsonResponse.response);
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, 'chat'), {
      user: message,
      system: jsonResponse,
      email: session?.user?.email,
      timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "flex flex-col h-screen",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("header", {
      className: "flex items-center justify-between space-x-5 border-b border-gray-800 p-4 mt-1",
      children: showIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: " flex space-x-5 ",
        children: [[...Array(count)].map((_, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.FolderIcon, {
          onClick: showchat,
          className: "h-6 w-6  text-[#b1afaf] disabled:text-[#40444b] hover:text-white ",
          disabled: !showSegment
        }, index)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.PlusIcon, {
          onClick: createsystem,
          className: "h-6 w-6 text-[#b1afaf] "
        })]
      })
    }), showSegment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("main", {
        className: "flex-grow overflow-y-scroll  scrollbar-hide",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          children: [tips.map(tip => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_Tip__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: tip.id,
            tip: tip.data()
          }, tip.id)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            ref: tipRef
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex  items-center p-2.5 fixed bottom-0 left-30 w-3/4 bg-[#40444b] py-4 mx-5 mb-7 rounded-lg ",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("form", {
          className: "flex-grow  ",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
            value: input,
            onChange: e => setInput(e.target.value),
            className: "bg-transparent focus:outline-none flex-1 flex-grow w-full  font-20px\r disabled:cursor-not-allowed  disabled:text-white-300 text-white",
            type: "text",
            placeholder: "create"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.ArrowLeftIcon, {
          className: "h-6 w-6 text-[#b1afaf]   mr-2",
          onClick: sendUser
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.ArrowRightIcon, {
          className: "h-6 w-6 text-[#b1afaf]   mr-2",
          onClick: sendMe
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
          className: "flex items-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Trigger, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.PaperAirplaneIcon, {
              className: "text-white h-6 w-6 navbtn"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Content, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: " bg-[#35353f] text-white flex p-2 items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("form", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
                  type: "text",
                  value: intip,
                  onChange: e => setIntip(e.target.value),
                  placeholder: "Name a system",
                  className: "text-black font-bold "
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.ArrowCircleRightIcon, {
                onClick: renameSystem,
                className: "h-6 w-6 navbtn"
              })]
            })
          })]
        })]
      })]
    }), chat && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("main", {
        className: "flex-grow overflow-y-scroll scrollbar-hide",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
          className: "text-white",
          children: response
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg object-contain",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("form", {
          className: " flex-grow ",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
            value: message,
            onChange: e => setMessage(e.target.value),
            className: "bg-transparent focus:outline-none flex-1 flex-grow w-full  font-20px\r disabled:cursor-not-allowed  disabled:text-white-300 text-white",
            type: "text",
            placeholder: "chat"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_0__.PaperAirplaneIcon, {
            onClick: sendMessage,
            className: "h-6 w-6 navbtn"
          })
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemInput);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function Tip({
  id,
  tip
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: "text-white bg-[#453545] p-2   font-medium",
      style: {
        marginRight: "auto"
      },
      children: tip?.usertip
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: "text-white  p-2  font-medium",
      style: {
        marginLeft: "auto"
      },
      children: tip?.Mytip
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tip);

/***/ })

};
;