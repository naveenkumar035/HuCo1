(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{9818:function(e,t,s){"use strict";s.d(t,{db:function(){return l},t:function(){return c}});var n=s(5503),a=s(6257),r=s(1153),i=(0,n.C6)().length?(0,n.Mq)():(0,n.ZF)({apiKey:"AIzaSyDOsqxQXCUmuRCR_HLUC91yIBgsOrIgRP0",authDomain:"huco-9f896.firebaseapp.com",databaseURL:"https://huco-9f896-default-rtdb.firebaseio.com",projectId:"huco-9f896",storageBucket:"huco-9f896.appspot.com",messagingSenderId:"692689852368",appId:"1:692689852368:web:06562137751fe56d8d4bd5",measurementId:"G-HRPMY2CPJS"}),l=(0,a.ad)(i),c=(0,r.cF)()},388:function(e,t,s){"use strict";s.r(t);var n=s(9008),a=s.n(n);s(7294);var r=s(5675),i=s.n(r),l=s(1738),c=s(1258),o=s(8584),u=s(3299),d=s(5893);t.default=function(){var e,t=(0,u.useSession)().data;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a(),{children:[(0,d.jsx)("title",{children:"HuCo"}),(0,d.jsx)("meta",{name:"description",content:"Learn more about Conscious Expanding and our mission to help people expand their consciousness."})]}),(0,d.jsxs)("div",{className:"flex h-screen",children:[(0,d.jsxs)("div",{className:" flex flex-col items-center space-y-3 p-3 min-w-max bg-[#36393f]",children:[(0,d.jsx)("div",{className:"",children:(0,d.jsx)(i(),{src:"/android-chrome-192x192.png",width:30,height:30})}),(0,d.jsx)(l.Z,{className:"h-6 w-6 text-white"}),(0,d.jsx)(c.Z,{className:"h-6 w-6 text-white"}),(0,d.jsx)("img",{src:null==t?void 0:null===(e=t.user)||void 0===e?void 0:e.image,className:" mx-auto mb-2 rounded-full h-8  cursor-pointer"})]}),(0,d.jsx)("div",{className:"flex",children:(0,d.jsx)("span",{className:"  bg-[#35353f]  hidden xl:inline",children:(0,d.jsx)("div",{className:" hidden sm:block  flex-col min-w-max   ",children:(0,d.jsx)("form",{className:"flex  p-4",children:(0,d.jsx)("input",{placeholder:"search systems",className:"flex p-1 bg-white rounded "})})})})}),(0,d.jsx)("div",{className:"bg-[#36393f] object-contain flex-grow",children:(0,d.jsx)(o.default,{})})]})]})}},8584:function(e,t,s){"use strict";s.r(t);var n=s(6687),a=s(29),r=s(7794),i=s.n(r),l=s(6772),c=s(5159),o=s(3973),u=s(3519),d=s(4353),x=s(9037),m=s(662),f=s(7294),h=s(9818),p=s(6257),v=s(3299),b=s(5476),j=s(9332),w=s(5893);t.default=function(){(0,j.useRouter)();var e,t,s,r,g=(0,v.useSession)().data,N=(0,f.useState)("");N[0],N[1];var y=(0,f.useState)(!1),C=y[0],S=y[1],Z=(0,f.useState)(""),k=Z[0],_=Z[1],E=(0,f.useState)(""),I=E[0],J=E[1],R=(0,f.useRef)(null),T=(0,f.useState)([]),O=T[0],P=T[1],B=(0,f.useState)(!0),F=B[0];B[1];var L=(0,f.useState)(!0),M=L[0],X=L[1],H=(0,f.useState)(1),U=H[0],q=H[1],A=(0,f.useState)("");A[0],A[1];var D=(0,f.useState)(""),z=D[0],G=D[1],K=(0,f.useState)(""),Q=K[0],Y=K[1],V=(e=(0,a.Z)(i().mark(function e(){var t,s;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,h.db)((0,p.hJ)("system name")),s=(0,h.db)((0,p.hJ)(I)),e.next=5,t.get();case 5:return e.sent.forEach(function(e){s.doc(e.id).set(e.data())}),e.next=9,t.delete();case 9:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)}),W=function(){S(!0),X(!1)};(0,f.useEffect)(function(){return(0,p.cf)((0,p.IO)((0,p.hJ)(h.db,"system name"),(0,p.Xo)("timestamp","asc")),function(e){P(e.docs)})},[h.db]);var $=(t=(0,a.Z)(i().mark(function e(){var t;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.ET)((0,p.hJ)(h.db,"system name"),{usertip:k,email:null==g?void 0:null===(t=g.user)||void 0===t?void 0:t.email,timestamp:(0,p.Bt)()});case 2:e.sent;case 3:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)}),ee=(s=(0,a.Z)(i().mark(function e(){var t;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.ET)((0,p.hJ)(h.db,"system name"),{Mytip:k,email:null==g?void 0:null===(t=g.user)||void 0===t?void 0:t.email,timestamp:(0,p.Bt)()});case 2:e.sent;case 3:case"end":return e.stop()}},e)})),function(){return s.apply(this,arguments)}),et=(r=(0,a.Z)(i().mark(function e(){var t,s,n,a;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(s={message:z}),e.next=5,fetch("http://127.0.0.1:5000",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 5:return n=e.sent,e.next=8,n.json();case 8:return Y((a=e.sent).response),e.next=12,(0,p.ET)((0,p.hJ)(h.db,"chat"),{user:z,system:a,email:null==g?void 0:null===(t=g.user)||void 0===t?void 0:t.email,timestamp:(0,p.Bt)()});case 12:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)});return(0,w.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,w.jsx)("header",{className:"flex items-center justify-between space-x-5 border-b border-gray-800 p-4 mt-1",children:F&&(0,w.jsxs)("div",{className:" flex space-x-5 ",children:[(0,n.Z)(Array(U)).map(function(e,t){return(0,w.jsx)(l.Z,{onClick:W,className:"h-6 w-6  text-[#b1afaf] disabled:text-[#40444b] hover:text-white ",disabled:!M},t)}),(0,w.jsx)(c.Z,{onClick:function(){q(U+1),X()},className:"h-6 w-6 text-[#b1afaf] "})]})}),M&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("main",{className:"flex-grow overflow-y-scroll  scrollbar-hide",children:(0,w.jsxs)("div",{children:[O.map(function(e){return(0,w.jsx)(b.default,{id:e.id,tip:e.data()},e.id)}),(0,w.jsx)("div",{ref:R})]})}),(0,w.jsxs)("div",{className:"flex  items-center p-2.5 fixed bottom-0 left-30 w-3/4 bg-[#40444b] py-4 mx-5 mb-7 rounded-lg ",children:[(0,w.jsx)("form",{className:"flex-grow  ",children:(0,w.jsx)("input",{value:k,onChange:function(e){return _(e.target.value)},className:"bg-transparent focus:outline-none flex-1 flex-grow w-full  font-20px\r disabled:cursor-not-allowed  disabled:text-white-300 text-white",type:"text",placeholder:"create"})}),(0,w.jsx)(o.Z,{className:"h-6 w-6 text-[#b1afaf]   mr-2",onClick:$}),(0,w.jsx)(u.Z,{className:"h-6 w-6 text-[#b1afaf]   mr-2",onClick:ee}),(0,w.jsxs)(m.Z,{className:"flex items-center",children:[(0,w.jsx)(m.Z.Trigger,{children:(0,w.jsx)(d.Z,{className:"text-white h-6 w-6 navbtn"})}),(0,w.jsx)(m.Z.Content,{children:(0,w.jsxs)("div",{className:" bg-[#35353f] text-white flex p-2 items-center",children:[(0,w.jsx)("form",{children:(0,w.jsx)("input",{type:"text",value:I,onChange:function(e){return J(e.target.value)},placeholder:"Name a system",className:"text-black font-bold "})}),(0,w.jsx)(x.Z,{onClick:V,className:"h-6 w-6 navbtn"})]})})]})]})]}),C&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("main",{className:"flex-grow overflow-y-scroll scrollbar-hide",children:(0,w.jsx)("p",{className:"text-white",children:Q})}),(0,w.jsxs)("div",{className:"flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg object-contain",children:[(0,w.jsx)("form",{className:" flex-grow ",children:(0,w.jsx)("input",{value:z,onChange:function(e){return G(e.target.value)},className:"bg-transparent focus:outline-none flex-1 flex-grow w-full  font-20px\r disabled:cursor-not-allowed  disabled:text-white-300 text-white",type:"text",placeholder:"chat"})}),(0,w.jsx)("div",{children:(0,w.jsx)(d.Z,{onClick:et,className:"h-6 w-6 navbtn"})})]})]})]})}},5476:function(e,t,s){"use strict";s.r(t);var n=s(5893);t.default=function(e){e.id;var t=e.tip;return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-white bg-[#453545] p-2   font-medium",style:{marginRight:"auto"},children:null==t?void 0:t.usertip}),(0,n.jsx)("p",{className:"text-white  p-2  font-medium",style:{marginLeft:"auto"},children:null==t?void 0:t.Mytip})]})}},3187:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/System",function(){return s(388)}])}},function(e){e.O(0,[16,279,662,996,540,774,888,179],function(){return e(e.s=3187)}),_N_E=e.O()}]);