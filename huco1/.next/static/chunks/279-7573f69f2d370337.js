"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{9975:function(e,t,n){n.d(t,{BM:function(){return u},UU:function(){return i},Zj:function(){return s},q4:function(){return c},xg:function(){return o}});var r=n(6212);let o=(0,r.iv)({WebkitTapHighlightColor:"transparent","&:focus:not(&:focus-visible)":{boxShadow:"none"},"&:focus":{outline:"none",boxShadow:"0 0 0 2px $colors$background, 0 0 0 4px $colors$primary"},"@safari":{WebkitTapHighlightColor:"transparent",outline:"none"}}),u=(0,r.iv)({variants:{isFocusVisible:{true:{outline:"transparent solid 2px",outlineOffset:"2px",boxShadow:"0 0 0 2px $colors$background, 0 0 0 4px $colors$primary"},false:{outline:"none"}}}}),i=(0,r.iv)({transform:"translateZ(0)",backfaceVisibility:"hidden"}),c=(0,r.iv)({border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"}),l=(0,r.iv)({variants:{hideIn:{xs:{"@xsMax":{display:"none"}},sm:{"@smMax":{display:"none"}},md:{"@mdMax":{display:"none"}},lg:{"@lgMax":{display:"none"}},xl:{"@xlMax":{display:"none"}}}}}),a=(0,r.iv)({variants:{showIn:{xs:{"@xs":{display:"none"}},sm:{"@sm":{display:"none"}},md:{"@md":{display:"none"}},lg:{"@lg":{display:"none"}},xl:{"@xl":{display:"none"}}}}}),s=(0,r.iv)(l,a)},3569:function(e,t,n){n.d(t,{Ts:function(){return r},mf:function(){return o}});let r=!1;function o(e){return"function"==typeof e}},2903:function(e,t,n){n.d(t,{gy:function(){return o},lE:function(){return u}});var r=n(7294);function o(e){let t=(0,r.useRef)(null);return(0,r.useImperativeHandle)(e,()=>t.current),t}function u(e,t){(0,r.useLayoutEffect)(()=>{if(e&&e.ref&&t&&t.current)return e.ref.current=t.current,()=>{var t;null!=(t=e.ref)&&t.current&&(e.ref.current=null)}},[e,t])}"undefined"!=typeof window&&window.document&&window.document.createElement},9641:function(e,t,n){n.d(t,{Fx:function(){return N},MT:function(){return s},ex:function(){return i},kc:function(){return F}});var r=n(7294),o=n(3952),u=n(7354);function i(e){if("virtual"===(0,u.Jz)()){let t=document.activeElement;(0,o.QB)(()=>{document.activeElement===t&&document.contains(e)&&(0,o.Ao)(e)})}else(0,o.Ao)(e)}let c=r.createContext(null),l=null,a=new Map;function s(e){let t,n,{children:u,contain:i,restoreFocus:s,autoFocus:d}=e,f=(0,r.useRef)(),b=(0,r.useRef)(),N=(0,r.useRef)([]),g=(0,r.useContext)(c),F=null==g?void 0:g.scopeRef;return(0,o.bt)(()=>{let e=f.current.nextSibling,t=[];for(;e&&e!==b.current;)t.push(e),e=e.nextSibling;N.current=t},[u,F]),(0,o.bt)(()=>(a.set(N,F),()=>{(N===l||x(N,l))&&(!F||a.has(F))&&(l=F),a.delete(N)}),[N,F]),t=(0,r.useRef)(),n=(0,r.useRef)(null),(0,o.bt)(()=>{let e=N.current;if(!i){n.current&&(cancelAnimationFrame(n.current),n.current=null);return}let r=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||N!==l)return;let t=document.activeElement,n=N.current;if(!p(t,n))return;let r=y(m(n),{tabbable:!0},n);r.currentNode=t;let o=e.shiftKey?r.previousNode():r.nextNode();o||(r.currentNode=e.shiftKey?n[n.length-1].nextElementSibling:n[0].previousElementSibling,o=e.shiftKey?r.previousNode():r.nextNode()),e.preventDefault(),o&&E(o,!0)},o=e=>{!l||x(l,N)?(l=N,t.current=e.target):N!==l||v(e.target,N)?N===l&&(t.current=e.target):t.current?t.current.focus():l&&h(l.current)},u=e=>{n.current=requestAnimationFrame(()=>{N!==l||v(document.activeElement,N)||(l=N,t.current=e.target,t.current.focus())})};return document.addEventListener("keydown",r,!1),document.addEventListener("focusin",o,!1),e.forEach(e=>e.addEventListener("focusin",o,!1)),e.forEach(e=>e.addEventListener("focusout",u,!1)),()=>{document.removeEventListener("keydown",r,!1),document.removeEventListener("focusin",o,!1),e.forEach(e=>e.removeEventListener("focusin",o,!1)),e.forEach(e=>e.removeEventListener("focusout",u,!1))}},[N,i]),(0,r.useEffect)(()=>()=>{n.current&&cancelAnimationFrame(n.current)},[n]),function(e,t,n){let u=(0,r.useRef)("undefined"!=typeof document?document.activeElement:null);(0,o.bt)(()=>{let r=u.current;if(!t)return;let o=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey)return;let n=document.activeElement;if(!p(n,e.current))return;let o=y(document.body,{tabbable:!0});o.currentNode=n;let u=t.shiftKey?o.previousNode():o.nextNode();if(document.body.contains(r)&&r!==document.body||(r=null),(!u||!p(u,e.current))&&r){o.currentNode=r;do u=t.shiftKey?o.previousNode():o.nextNode();while(p(u,e.current));t.preventDefault(),t.stopPropagation(),u?E(u,!0):function(e){for(let t of a.keys())if(p(e,t.current))return!0;return!1}(r)?E(r,!0):n.blur()}};return n||document.addEventListener("keydown",o,!0),()=>{n||document.removeEventListener("keydown",o,!0),t&&r&&p(document.activeElement,e.current)&&requestAnimationFrame(()=>{document.body.contains(r)&&document.activeElement===document.body&&E(r)})}},[e,t,n])}(N,s,i),function(e,t){let n=r.useRef(t);(0,r.useEffect)(()=>{n.current&&(l=e,p(document.activeElement,l.current)||h(e.current)),n.current=!1},[])}(N,d),r.createElement(c.Provider,{value:{scopeRef:N,focusManager:{focusNext(e={}){let t=N.current,{from:n,tabbable:r,wrap:o,accept:u}=e,i=n||document.activeElement,c=t[0].previousElementSibling,l=y(m(t),{tabbable:r,accept:u},t);l.currentNode=p(i,t)?i:c;let a=l.nextNode();return!a&&o&&(l.currentNode=c,a=l.nextNode()),a&&E(a,!0),a},focusPrevious(e={}){let t=N.current,{from:n,tabbable:r,wrap:o,accept:u}=e,i=n||document.activeElement,c=t[t.length-1].nextElementSibling,l=y(m(t),{tabbable:r,accept:u},t);l.currentNode=p(i,t)?i:c;let a=l.previousNode();return!a&&o&&(l.currentNode=c,a=l.previousNode()),a&&E(a,!0),a},focusFirst(e={}){let t=N.current,{tabbable:n,accept:r}=e,o=y(m(t),{tabbable:n,accept:r},t);o.currentNode=t[0].previousElementSibling;let u=o.nextNode();return u&&E(u,!0),u},focusLast(e={}){let t=N.current,{tabbable:n,accept:r}=e,o=y(m(t),{tabbable:n,accept:r},t);o.currentNode=t[t.length-1].nextElementSibling;let u=o.previousNode();return u&&E(u,!0),u}}}},r.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:f}),u,r.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:b}))}let d=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],f=d.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";d.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let b=d.join(':not([hidden]):not([tabindex="-1"]),');function m(e){return e[0].parentElement}function p(e,t){return t.some(t=>t.contains(e))}function v(e,t){for(let n of a.keys())if((n===t||x(t,n))&&p(e,n.current))return!0;return!1}function x(e,t){let n=a.get(t);return!!n&&(n===e||x(e,n))}function E(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(n){}}else try{i(e)}catch(r){}}function h(e){let t=e[0].previousElementSibling,n=y(m(e),{tabbable:!0},e);n.currentNode=t,E(n.nextNode())}function y(e,t,n){let r=(null==t?void 0:t.tabbable)?b:f,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var o;return(null==t?void 0:null===(o=t.from)||void 0===o?void 0:o.contains(e))?NodeFilter.FILTER_REJECT:e.matches(r)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){let{getComputedStyle:o}=e.ownerDocument.defaultView,{display:u,visibility:i}=o(e);r="none"!==u&&"hidden"!==i&&"collapse"!==i}return r}(t)&&!t.hasAttribute("hidden")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||p(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(o.currentNode=t.from),o}function N(e={}){let{autoFocus:t=!1,isTextInput:n,within:o}=e,i=(0,r.useRef)({isFocused:!1,isFocusVisible:t||(0,u.E)()}),[c,l]=(0,r.useState)(!1),[a,s]=(0,r.useState)(()=>i.current.isFocused&&i.current.isFocusVisible),d=(0,r.useCallback)(()=>s(i.current.isFocused&&i.current.isFocusVisible),[]),f=(0,r.useCallback)(e=>{i.current.isFocused=e,l(e),d()},[d]);(0,u.mG)(e=>{i.current.isFocusVisible=e,d()},[],{isTextInput:n});let{focusProps:b}=(0,u.KK)({isDisabled:o,onFocusChange:f}),{focusWithinProps:m}=(0,u.L_)({isDisabled:!o,onFocusWithinChange:f});return{isFocused:c,isFocusVisible:i.current.isFocused&&a,focusProps:o?m:b}}let g=r.createContext(null);function F(e,t){let{focusProps:n}=(0,u.KK)(e),{keyboardProps:c}=(0,u.v5)(e),l=(0,o.dG)(n,c),a=function(e){let t=(0,r.useContext)(g)||{};(0,o.lE)(t,e);let{ref:n,...u}=t;return u}(t),s=e.isDisabled?{}:a,d=(0,r.useRef)(e.autoFocus);return(0,r.useEffect)(()=>{d.current&&t.current&&i(t.current),d.current=!1},[t]),{focusableProps:(0,o.dG)({...l,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},s)}}}}]);