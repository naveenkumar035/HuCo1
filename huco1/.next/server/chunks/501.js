"use strict";
exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 501:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7791);
/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emoji_mart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3392);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9818);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, firebase_storage__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_6__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, firebase_storage__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Input() {
  const {
    0: input,
    1: setInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: selectedFile,
    1: setSelectedFile
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: showEmojis,
    1: setShowEmojis
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const filePickerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
  console.log(session);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, 'posts'), {
      // id: session.user.uid,
      // username: session.user.name,
      //userImg: session.user.image,
      // tag: session.user.tag,
      email: session?.user?.email,
      text: input,
      timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
    });
    const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_6__/* .storage */ .t, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.uploadString)(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(imageRef);
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, "posts", docRef.id), {
          image: downloadURL
        });
      });
    }

    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  const addShitToPost = e => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = readerEvent => {
      setSelectedFile(readerEvent.target.result);
    };
  }; //const addEmoji = (e) => {
  //  const picker = new Picker();
  //  let sym = e.unified.split("-");
  //  let codesArray = [];
  // sym.forEach((el) => codesArray.push("0x" + el));
  //  let emoji = String.fromCodePoint(...codesArray);
  //  setInput(input + emoji);
  // }; 


  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
    className: 'border-b border-black-700 p-3 flex space-x-3 overflow-y-scroll $ { loading && "opacity-60} ',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "w-full divide-y divide-black-700",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: '${selectedFile && "pb-7"} ${ input && "space-y-2.5"}',
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("textarea", {
          value: input,
          onChange: e => setInput(e.target.value),
          rows: "2",
          placeholder: "Write here",
          className: "bg-transparent outline-none text=black text-lg placeholder-gray-500  tracking-wide w- ful min-h-[50px]"
        }), selectedFile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: "absolute w-8 h-8 bg-grey hover:bg-black bg-opacity-75 rounded-full flex items-center ustify-center top-1 left-1 cursor-pointer",
            onClick: () => setSelectedFile(null),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.XIcon, {
              className: "text-white h-5"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: selectedFile,
            alt: "",
            className: "rounded-2xl max-h-80 object-contain"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex items-center justify-between pt-2.5",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "flex items-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "icon",
            onClick: () => filePickerRef.current.click(),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__.PlusCircleIcon, {
              className: "h-[22px] text-black navbtn"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
              type: "file",
              hidden: true,
              onChange: addShitToPost,
              ref: filePickerRef
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
          className: "bg-black text-white rounded-full px-4\r py-1.5 font-bold shadow-md hover:bg-black \r disabled:hover:bg-grey disabled:opacity-50\r disabled:cursor-default",
          disabled: !input.trim() && !selectedFile,
          onClick: sendPost,
          children: "Exought"
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;