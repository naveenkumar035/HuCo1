(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676],{9975:function(t,e,i){"use strict";i.d(e,{BM:function(){return n},UU:function(){return s},Zj:function(){return d},q4:function(){return a},xg:function(){return o}});var r=i(6212);let o=(0,r.iv)({WebkitTapHighlightColor:"transparent","&:focus:not(&:focus-visible)":{boxShadow:"none"},"&:focus":{outline:"none",boxShadow:"0 0 0 2px $colors$background, 0 0 0 4px $colors$primary"},"@safari":{WebkitTapHighlightColor:"transparent",outline:"none"}}),n=(0,r.iv)({variants:{isFocusVisible:{true:{outline:"transparent solid 2px",outlineOffset:"2px",boxShadow:"0 0 0 2px $colors$background, 0 0 0 4px $colors$primary"},false:{outline:"none"}}}}),s=(0,r.iv)({transform:"translateZ(0)",backfaceVisibility:"hidden"}),a=(0,r.iv)({border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"}),c=(0,r.iv)({variants:{hideIn:{xs:{"@xsMax":{display:"none"}},sm:{"@smMax":{display:"none"}},md:{"@mdMax":{display:"none"}},lg:{"@lgMax":{display:"none"}},xl:{"@xlMax":{display:"none"}}}}}),$=(0,r.iv)({variants:{showIn:{xs:{"@xs":{display:"none"}},sm:{"@sm":{display:"none"}},md:{"@md":{display:"none"}},lg:{"@lg":{display:"none"}},xl:{"@xl":{display:"none"}}}}}),d=(0,r.iv)(c,$)},6249:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var r=i(7294),o=i(2242),n=()=>r.useContext(o.Z)},3569:function(t,e,i){"use strict";i.d(e,{Ts:function(){return r},mf:function(){return o}});let r=!1;function o(t){return"function"==typeof t}},9644:function(t,e,i){"use strict";i.d(e,{V5:function(){return s},xC:function(){return n},zv:function(){return o}});var r=i(7294);let o=()=>Math.random().toString(32).slice(2,10),n=(t,e)=>{let i=[];return[r.Children.map(t,t=>r.isValidElement(t)&&t.type===e?(i.push(t),null):t),i.length>=0?i:void 0]},s=()=>!!Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)&&navigator.platform.toUpperCase().indexOf("MAC")>=0,a=t=>t.reduce((t,e)=>t.concat(Array.isArray(e)?a(e):e),[])},2858:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});let r={},o=(t,e)=>{let i=`[Next UI]${e?` [${e}]`:" "}: ${t}`;"undefined"==typeof console||r[i]||(r[i]=!0,console.warn(i))}},8199:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return E}});var r=i(6212),o=i(7294);i(6680),i(6249);var n=i(88),s=i(2858),a=i(8738);let c={Unknown:0,Backspace:8,Tab:9,Enter:13,Shift:16,Ctrl:17,Alt:18,PauseBreak:19,CapsLock:20,Escape:27,Space:32,PageUp:33,PageDown:34,End:35,Home:36,LeftArrow:37,UpArrow:38,RightArrow:39,DownArrow:40,Insert:45,Delete:46,KEY_0:48,KEY_1:49,KEY_2:50,KEY_3:51,KEY_4:52,KEY_5:53,KEY_6:54,KEY_7:55,KEY_8:56,KEY_9:57,KEY_A:65,KEY_B:66,KEY_C:67,KEY_D:68,KEY_E:69,KEY_F:70,KEY_G:71,KEY_H:72,KEY_I:73,KEY_J:74,KEY_K:75,KEY_L:76,KEY_M:77,KEY_N:78,KEY_O:79,KEY_P:80,KEY_Q:81,KEY_R:82,KEY_S:83,KEY_T:84,KEY_U:85,KEY_V:86,KEY_W:87,KEY_X:88,KEY_Y:89,KEY_Z:90,Meta:91,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NumLock:144,ScrollLock:145,Equal:187,Minus:189,Backquote:192,Backslash:220},$={CtrlCmd:2048,Shift:1024,Alt:512,WinCtrl:256};var d=i(9644);let l=()=>({CtrlCmd:(0,d.V5)()?"metaKey":"ctrlKey",WinCtrl:(0,d.V5)()?"ctrlKey":"metaKey"}),h=t=>{let e=t.filter(t=>!!(0,a.sF)($,t)),i={CtrlCmd:!1,Shift:!1,Alt:!1,WinCtrl:!1};return e.forEach(t=>{let e=(0,a.sF)($,t);i[e]=!0}),i};var w=(t,e,i={})=>{let r=Array.isArray(e)?e:[e],{disableGlobalEvent:n=!1,capture:s=!1,stopPropagation:c=!1,preventDefault:d=!1,event:w="keydown"}=i,u=h(r),p=r.filter(t=>!(0,a.sF)($,t)),{CtrlCmd:g,WinCtrl:f}=l(),b=e=>{u.Shift&&!e.shiftKey||u.Alt&&!e.altKey||u.CtrlCmd&&!e[g]||u.WinCtrl&&!e[f]||p.length>0&&!p.includes(e.keyCode)||(c&&e.stopPropagation(),d&&e.preventDefault(),t&&t(e))};(0,o.useEffect)(()=>(n||document.addEventListener(w,b),()=>{document.removeEventListener(w,b)}),[n]);let m=(t,e=!1)=>t!==w||e!==s?()=>{}:t=>b(t);return{bindings:{onKeyDown:m("keydown"),onKeyDownCapture:m("keydown",!0),onKeyPress:m("keypress"),onKeyPressCapture:m("keypress",!0),onKeyUp:m("keyup"),onKeyUpCapture:m("keyup",!0)}}},u=i(1309),p=i(3569),g=i(9975);let f=(0,r.zo)("label",{WebkitTapHighlightColor:"transparent",d:"inline-block",verticalAlign:"center",whiteSpace:"nowrap",us:"none",transition:"$default",padding:"$1 0",position:"relative",cursor:"pointer","@motion":{transition:"none"},variants:{color:{default:{$$switchColor:"$colors$primary",$$switchColorShadow:"$colors$primaryShadow",$$switchColorHover:"$colors$primarySolidHover"},primary:{$$switchColor:"$colors$primary",$$switchColorShadow:"$colors$primaryShadow",$$switchColorHover:"$colors$primarySolidHover"},secondary:{$$switchColor:"$colors$secondary",$$switchColorShadow:"$colors$secondaryShadow",$$switchColorHover:"$colors$secondarySolidHover"},success:{$$switchColor:"$colors$success",$$switchColorShadow:"$colors$successShadow",$$switchColorHover:"$colors$successSolidHover"},warning:{$$switchColor:"$colors$warning",$$switchColorShadow:"$colors$warningShadow",$$switchColorHover:"$colors$warningSolidHover"},error:{$$switchColor:"$colors$error",$$switchColorShadow:"$colors$errorShadow",$$switchColorHover:"$colors$errorSolidHover"}},size:{xs:{$$switchWidth:"$space$12",$$switchHeight:"$space$9",width:" $$switchWidth",maxWidth:"$$switchWidth",height:"$$switchHeight"},sm:{$$switchWidth:"$space$14",$$switchHeight:"$space$10",width:"$$switchWidth",maxWidth:"$$switchWidth",height:"$$switchHeight"},md:{$$switchWidth:"$space$15",$$switchHeight:"$space$11",width:"$$switchWidth",maxWidth:"$$switchWidth",height:"$$switchHeight"},lg:{$$switchWidth:"$space$17",$$switchHeight:"$space$12",width:"$$switchWidth",maxWidth:"$$switchWidth",height:"$$switchHeight"},xl:{$$switchWidth:"$space$18",$$switchHeight:"$space$13",width:"$$switchWidth",maxWidth:"$$switchWidth",height:"$$switchHeight"}},borderWeight:{light:{$$switchBorderW:"$borderWeights$light"},normal:{$$switchBorderW:"$borderWeights$normal"},bold:{$$switchBorderW:"$borderWeights$bold"},extrabold:{$$switchBorderW:"$borderWeights$extrabold"},black:{$$switchBorderW:"$borderWeights$black"}},disabled:{true:{cursor:"not-allowed"}},animated:{false:{transition:"none"}}},defaultVariants:{color:"default",size:"md",borderWeight:"normal"}}),b=(0,r.zo)("span",{position:"absolute",display:"flex",size:"calc($$switchHeight * 0.7)",jc:"center",ai:"center",top:"calc(50% - $$switchHeight * 0.35)",left:"0",transition:"transform 0.25s ease, width 0.2s ease",bg:"$background",br:"$pill","& svg":{bg:"transparent",size:"calc($$switchHeight * 0.44)"},"@motion":{transition:"none"}}),m=(0,r.zo)("div",{opacity:1,width:"$$switchWidth",height:"$$switchHeight",transition:"$default",position:"relative",overflow:"hidden",padding:0,br:"$pill",bg:"$accents2","@motion":{transition:"none"},variants:{checked:{true:{bg:"$$switchColor","&:hover:not(&:active)":{bg:"$$switchColorHover"}}},bordered:{true:{bg:"transparent",border:"$$switchBorderW solid $border","&:hover":{borderColor:"$$switchColor"},[`& ${b}`]:{bg:"$accents2"}}},squared:{true:{br:"2px",[`& ${b}`]:{br:"2px"}}},shadow:{true:{}},disabled:{true:{borderColor:"$accents2",bg:"$accents2",[`& ${b}`]:{bg:"$accents4"}}},animated:{true:{"&:active":{[`& ${b}`]:{width:"calc($$switchHeight * 0.7 + ($$switchWidth / 10))"}}},false:{transition:"none",[`& ${b}`]:{transition:"none"}}}},compoundVariants:[{checked:!0,disabled:!0,css:{bg:"$accents3",[`& ${b}`]:{bg:"$accents0"},"&:hover:not(&:active)":{bg:"$accents4"}}},{shadow:!0,checked:!0,css:{normalShadowVar:"$$switchColorShadow"}},{checked:!0,bordered:!0,css:{bg:"$$switchColor",border:"$$switchBorderW solid transparent","&:hover:not(&:active)":{borderColor:"transparent"},[`& ${b}`]:{bg:"$background"}}}]},g.xg),v=(0,r.zo)("input",{[`& + ${m} > ${b}`]:{transform:"translateX(calc($$switchWidth / 15))"},[`&:checked + ${m} > ${b}`]:{transform:"translateX(calc($$switchWidth - $$switchWidth / 15 - $$switchHeight * 0.7))"},variants:{animated:{true:{[`& + ${m}:active > ${b}`]:{transform:"translateX(calc($$switchWidth / 7.5))"},[`&:checked + ${m}:active > ${b}`]:{transform:"translateX(calc($$switchWidth - $$switchWidth / 7.5 - $$switchWidth / 10 - $$switchHeight * 0.7))"}}},bordered:{true:{[`& + ${m} > ${b}`]:{transform:"translateX(calc($$switchWidth / 15 - $$switchBorderW / 2))"},[`&:checked + ${m} > ${b}`]:{transform:"translateX(calc($$switchWidth - $$switchWidth / 15 - $$switchBorderW * 1.5 - $$switchHeight * 0.7))"}}}},compoundVariants:[{animated:!0,bordered:!0,css:{[`& + ${m}:active > ${b}`]:{transform:"translateX(calc($$switchWidth / 7.5 - $$switchBorderW / 2))"},[`&:checked + ${m}:active > ${b}`]:{transform:"translateX(calc($$switchWidth - $$switchWidth / 7.5 - $$switchWidth / 10 - $$switchBorderW * 1.5 - $$switchHeight * 0.7))"}}}]},g.q4);var C=i(5893);let W="nextui-switch",x=({initialChecked:t,checked:e,disabled:i,onChange:r,squared:n,bordered:a,shadow:$,icon:d,iconOn:l,iconOff:h,animated:g,preventDefault:x,...y})=>{let[E,k]=(0,o.useState)(t);d&&p.Ts&&(l||h)&&(0,s.Z)('Remove props "icon" if iconOn or iconOff exists.',"Switch");let K=(0,o.useCallback)(t=>{if(i)return;let e={target:{checked:!E},stopPropagation:t.stopPropagation,preventDefault:t.preventDefault,nativeEvent:t};k(!E),r&&r(e)},[i,E,r]),{bindings:_}=w(t=>{K(t)},[c.Enter,c.Space],{disableGlobalEvent:!0,preventDefault:x}),H=(0,o.useMemo)(()=>{let t=d||l||h,e=Boolean(l),i=Boolean(h);return t?e&&E?l:i&&!E?h:t:null},[E,d,l,h]);(0,o.useEffect)(()=>{void 0!==e&&k(e)},[e]);let S=(0,o.useMemo)(()=>E?"checked":"unchecked",[E]);return(0,C.jsxs)(f,{animated:g,"data-state":S,disabled:i,...y,children:[(0,C.jsx)(v,{animated:g,bordered:a,checked:E,className:(0,u.Z)(`${W}-input`),"data-state":S,disabled:i,tabIndex:-1,type:"checkbox",onChange:K}),(0,C.jsx)(m,{animated:g,"aria-checked":E,"aria-disabled":i,bordered:a,checked:E,className:(0,u.Z)(W,`${W}--${S}`,{[`${W}-checked`]:E,[`${W}-disabled`]:i}),"data-state":S,disabled:i,role:"switch",shadow:$,squared:n,tabIndex:i?-1:0,..._,children:(0,C.jsx)(b,{className:`${W}-circle`,children:H})})]})};x.toString=()=>".nextui-switch";let y=o.memo(x);function E(){(0,r.jG)({type:"light",theme:{colors:{}}}),(0,r.jG)({type:"dark",theme:{colors:{}}})}(0,n.Z)(y,{disabled:!1,bordered:!1,shadow:!1,squared:!1,animated:!0,preventDefault:!0,initialChecked:!1})},6667:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Theme",function(){return i(8199)}])}},function(t){t.O(0,[774,888,179],function(){return t(t.s=6667)}),_N_E=t.O()}]);