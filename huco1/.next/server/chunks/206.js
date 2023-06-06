"use strict";
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 3206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);















function Nav() {
  function handleOpenSlideOver() {
    setIsSlideOverOpen(true);
  }

  function handleCloseSlideOver() {
    setIsSlideOverOpen(false);
  }

  const {
    0: isSlideOverOpen,
    1: setIsSlideOverOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const collapseItems = [];
  const {
    isDark
  } = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("light");
  const {
    0: iconEnabled,
    1: setIconEnabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
  console.log(session);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar, {
    isBordered: isDark,
    variant: "sticky",
    children: [router.pathname === '/' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.Brand, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
        b: true,
        color: "inherit",
        children: "HuCo"
      })
    }), router.pathname === '/System' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.Brand, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          onClick: handleOpenSlideOver,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {
            className: "block lg:hidden h-6 w-6 text-black"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(SlideOver, {
          isOpen: isSlideOverOpen,
          onClose: handleCloseSlideOver
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.Content, {
      enableCursorHighlight: true,
      hideIn: "xs",
      variant: "underline",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.Link, {
        style: {
          color: 'black'
        },
        href: "#",
        children: " "
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.Link, {
        style: {
          color: 'black'
        },
        href: "#"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.Link, {
        style: {
          color: 'black'
        },
        href: "#"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.Link, {
        style: {
          color: 'black'
        },
        href: "#"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.Content, {
      children: session ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "System",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
            content: "System",
            color: "invert",
            placement: "bottom",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.EyeIcon, {
              className: "h-6 w-6 text-black"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          href: "Hub",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Tooltip, {
            content: "Hub",
            color: "invert",
            placement: "bottom",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.BeakerIcon, {
              className: "h-6 w-6 text-black"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown, {
          placement: "bottom-left",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown.Trigger, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
              src: session?.user?.image,
              alt: "profile pic",
              className: "h-10 rounded-full cursor-pointer"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown.Menu, {
            color: "invert",
            "aria-label": "Avatar Actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown.Item, {
              css: {
                height: "$18"
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                b: true,
                color: "inherit",
                css: {
                  d: "flex"
                },
                children: "Signed in as"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
                b: true,
                color: "inherit",
                css: {
                  d: "flex"
                },
                children: session?.user?.email
              })]
            }, "profile"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown.Item, {
              withDivider: true,
              children: "Profile"
            }, "settings"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown.Item, {
              children: " Settings"
            }, "team_settings"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown.Item, {
              withDivider: true,
              children: "Analytics"
            }, "analytics"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown.Item, {
              children: "System"
            }, "system"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown.Item, {
              children: "Configurations"
            }, "configurations"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown.Item, {
              withDivider: true,
              children: "Help & Feedback"
            }, "help_and_feedback"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Dropdown.Item, {
              withDivider: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.LogoutIcon, {
                className: "h-6 w-6",
                onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut
              })
            }, "Sign out")]
          })]
        })]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.UserIcon, {
        className: "h-6 w-6 ",
        onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.Collapse, {
      children: [collapseItems.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.CollapseItem, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          color: "inherit",
          css: {
            minWidth: "100%"
          },
          href: "#",
          children: item
        })
      }, item)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Navbar.CollapseItem, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
          style: {
            color: 'black'
          },
          auto: true,
          flat: true,
          as: _nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.Link,
          onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn
        })
      })]
    })]
  });
}

/***/ })

};
;