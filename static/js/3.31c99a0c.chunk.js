(this["webpackJsonpdnvt-folio"]=this["webpackJsonpdnvt-folio"]||[]).push([[3],{100:function(t,e,i){"use strict";var a={FOOTER_CARDS:[{key:1,reverse:!0,src:["",""],alt:"test 1",title:{value:"Reverse Title"},path:""},{key:2,src:["",""],alt:"test 2",title:{value:"Random Title"},path:""},{key:3,src:["",""],alt:"test 3",title:{value:"Next Title"},path:""}],THREE_CARDS:[{key:1,src:["",""],alt:"test 1",tag:{value:"Test 1"},title:{value:"Value title 1"},path:""},{key:2,src:["",""],alt:"test 2",tag:{value:"Test 1"},title:{value:"Value title 2"},path:""},{key:3,src:["",""],alt:"test 3",tag:{value:"Test 1"},title:{value:"Value title 3"},path:""}],GROUPED_CARDS:[{key:1,src:["",""],alt:"test 1",tag:{value:"Value tag 1"},title:{value:"Value title 1"},background:"transparent"},{key:2,src:["",""],alt:"test 2",tag:{value:"Value tag 2"},title:{value:"Value title 2"},path:""}],GROUPED_DEVICES:{browser:[{src:["",""],alt:"Test 1",key:1},{src:["",""],alt:"Test 2",key:2}],mobile:[{src:["",""],alt:"Test 1",key:3},{src:["",""],alt:"Test 2",key:4}]},MOBILE_FOUR:[{src:["",""],alt:"Test 1",key:1},{src:["",""],alt:"Test 2",key:2},{src:["",""],alt:"Test 3",key:3},{src:["",""],alt:"Test 4",key:4}],FRAMELESS_FIVE:[{src:["",""],alt:"Test 1",key:1},{src:["",""],alt:"Test 2",key:2},{src:["",""],alt:"Test 3",key:3},{src:["",""],alt:"Test 4",key:4},{src:["",""],alt:"Test 4",key:5}],FRAMELESS_FIVE_EMPTY:[{src:["",""],alt:"Test 1",key:1},{src:["",""],alt:"Test 2",key:2},{src:["",""],alt:"Test 3",key:3},{src:["",""],alt:"Test 4",key:4},{src:["",""],alt:"Test 4",key:5}]};e.a=a},101:function(t,e,i){"use strict";i(1);var a=i(10),r=i(4),s=i(6),n=i(0),o=function(){var t=Object(s.c)(),e=Object(a.b)(),i=40;return e.width>991&&(i=576),64,e.width>1359&&(i=704),80,Object(n.jsx)(r.a,{height:i,width:80,bg:t.grid.fill})},d=i(8),c=i(95),p=function(t){var e=t.src,i=t.alt,a=t.key;return Object(n.jsx)(c.a,{type:"browser",src:e,alt:i},a)},h=function(t){var e=t.src,i=t.alt,a=t.key;return Object(n.jsx)(c.a,{type:"mobile",src:e,alt:i},a)};e.a=function(t){var e=t.images,i=Object(a.b)(),s=e.browser,c=e.mobile,l=s.map(p),b=c.map(h);return i.width>991?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(d.a,{type:"big",children:[l[0],Object(n.jsx)(o,{}),b[0]]}),Object(n.jsx)(r.a,{contained:!0,height:104}),Object(n.jsxs)(d.a,{type:"big",children:[b[1],Object(n.jsx)(o,{}),l[1]]})]}):i.width>575?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d.a,{type:"big",children:l[0]}),Object(n.jsx)(r.a,{contained:!0,height:104}),Object(n.jsxs)(d.a,{type:"big",children:[b[0],b[1]]}),Object(n.jsx)(r.a,{contained:!0,height:104}),Object(n.jsx)(d.a,{type:"big",children:l[1]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d.a,{type:"big",children:l[0]}),Object(n.jsx)(r.a,{contained:!0,height:64}),Object(n.jsx)(d.a,{type:"big",children:l[1]}),Object(n.jsx)(r.a,{contained:!0,height:64}),Object(n.jsx)(d.a,{type:"big",center:!0,children:b[0]}),Object(n.jsx)(r.a,{contained:!0,height:64}),Object(n.jsx)(d.a,{type:"big",center:!0,children:b[1]})]})}},108:function(t,e,i){"use strict";i.r(e);var a=i(1),r=i(99),s=i(97),n=i(101),o=i(4),d=i(100),c=i(0);e.default=function(){var t=Object(a.useMemo)((function(){return d.a}),[]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.a,{contained:!0,height:40}),Object(c.jsx)(s.a,{images:t.MOBILE_FOUR}),Object(c.jsx)(o.a,{contained:!0,height:80}),Object(c.jsx)(n.a,{images:t.GROUPED_DEVICES}),Object(c.jsx)(o.a,{contained:!0,height:80}),Object(c.jsx)(r.a,{images:t.FRAMELESS_FIVE_EMPTY})]})}},95:function(t,e,i){"use strict";var a=i(5),r=(i(1),i(6)),s=i(39),n=Object(r.b)((function(t){return{shadowContent:{position:"relative",boxShadow:t.shadow.device,background:t.background.tint,transition:"background .12s ease, box-shadow .12s ease",overflow:"hidden",width:"236px",objectFit:"cover",height:"512px",zIndex:"90","@media (min-width: 768px)":{minWidth:"262px",height:"576px"},"@media (min-width: 1360px)":{height:"704px",minWidth:"325px"}},browserContent:{display:"flex",justifyContent:"center",zIndex:"90",position:"relative",paddingTop:"20px",boxShadow:t.shadow.device,background:t.background.tint,borderRadius:"6px",overflow:"hidden",width:"100vw",maxWidth:"100%",height:"280px",transition:"background .12s ease, box-shadow .12s ease","@media (min-width: 576px)":{height:"432px"},"@media (min-width: 768px)":{height:"576px",paddingTop:"32px",borderRadius:"8px",minWidth:"704px",width:"100%"},"@media (min-width: 1360px)":{height:"704px"}},browserLessContent:{display:"flex",justifyContent:"center",zIndex:"90",position:"relative",boxShadow:t.shadow.device,background:t.background.tint,borderRadius:"6px",overflow:"hidden",width:"auto",maxWidth:"100%",height:"368px",transition:"background .12s ease, box-shadow .12s ease","@media (min-width: 576px)":{height:"432px"},"@media (min-width: 768px)":{height:"568px",borderRadius:"8px",minWidth:"808px",width:"100%"},"@media (min-width: 1360px)":{height:"832px"}},tricolor:{position:"absolute",top:"7px",left:"18px",width:"6px",height:"6px",borderRadius:"100%",background:"#FDBC40","&:after":{content:"''",position:"absolute",left:"10px",width:"6px",height:"6px",borderRadius:"100%",background:"#34C749"},"&:before":{content:"''",position:"absolute",left:"-10px",width:"6px",height:"6px",borderRadius:"100%",background:"#FC605C"},"@media (min-width: 768px)":{top:"12px",left:"24px",width:"8px",height:"8px",borderRadius:"100%",background:"#FDBC40","&:after":{content:"''",position:"absolute",left:"14px",width:"8px",height:"8px",borderRadius:"100%",background:"#34C749"},"&:before":{content:"''",position:"absolute",left:"-14px",width:"8px",height:"8px",borderRadius:"100%",background:"#FC605C"}}},devices:{width:"auto",position:"relative",height:"100%",objectFit:"cover","@media (min-width: 576px)":{minWidth:"100%"}},mobileContent:{zIndex:"1",position:"relative",padding:"12px",boxShadow:t.shadow.device,background:t.background.tint,transition:"background .12s ease, box-shadow .12s ease",borderRadius:"36px",overflow:"hidden",width:"249px",objectFit:"cover",height:"512px","& img":{borderRadius:"22px",height:"100%"},"@media (min-width: 768px)":{minWidth:"281px",height:"576px",borderRadius:"40px",padding:"14px","& img":{borderRadius:"28px",height:"100%"}},"@media (min-width: 1360px)":{height:"704px",minWidth:"342px",borderRadius:"55px",padding:"16px","& img":{borderRadius:"42px",height:"100%"}},"& loading":{borderRadius:"40px"}},camera:{position:"absolute",top:"0",left:"26%",content:"''",width:"48%",height:"5.7%",background:t.background.tint,transition:"background .12s ease, box-shadow .12s ease",borderRadius:"0 0 12px 12px","@media (min-width: 1360px)":{borderRadius:"0 0 20px 20px"},"&::before":{content:"''",position:"absolute",width:"8px",height:"8px",left:"-6px",background:"radial-gradient(circle at top left,transparent 20px, "+t.background.tint+" 0) top left, radial-gradient(circle at top right,transparent 20px, "+t.background.tint+" 0) top right, radial-gradient(circle at bottom left,transparent 8px, "+t.background.tint+" 0) bottom left, radial-gradient(circle at bottom right,transparent 20px, "+t.background.tint+" 0) bottom right",top:"12px",transition:"background .12s ease, box-shadow .12s ease","@media (min-width: 768px)":{top:"14px",left:"-7px"},"@media (min-width: 1360px)":{top:"16px",left:"-8px"}},"&::after":{content:"''",position:"absolute",width:"8px",height:"8px",right:"-6px",background:"radial-gradient(circle at top left,transparent 20px, "+t.background.tint+" 0) top left, radial-gradient(circle at top right,transparent 20px, "+t.background.tint+" 0) top right, radial-gradient(circle at bottom left,transparent 20px, "+t.background.tint+" 0) bottom left, radial-gradient(circle at bottom right,transparent 8px, "+t.background.tint+" 0) bottom right",top:"12px",transition:"background .12s ease, box-shadow .12s ease","@media (min-width: 768px)":{top:"14px",right:"-7px"},"@media (min-width: 1360px)":{top:"16px",right:"-8px"}}},ligns:{position:"absolute",top:"71px",height:"561px",left:"0",width:"100%",zIndex:"-1",borderTop:"1px solid "+t.background.empty,borderBottom:"1px solid "+t.background.empty,transition:"background .12s ease, box-shadow .12s ease","@media (min-width: 768px)":{top:"71px",height:"561px"},"@media (min-width: 1360px)":{top:"71px",height:"561px"}},sound:{position:"absolute",width:"25%",height:"10%",zIndex:"3",top:"50%",left:"37.5%",borderRadius:"20px",background:t.background.empty,transition:"background .12s ease, box-shadow .12s ease"}}})),o=i(0);e.a=function(t){var e=Object(r.c)(),i=n(Object(a.a)(Object(a.a)({},t),{},{theme:e})),d=t.src,c=t.alt,p=t.type,h=null;return"browserless"==p&&(h=Object(o.jsx)("div",{className:i.browserLessContent,children:Object(o.jsx)(s.a,{fullWidth:!0,src:d,alt:c})})),"browser"==p&&(h=Object(o.jsxs)("div",{className:i.browserContent,children:[Object(o.jsx)("div",{className:i.tricolor}),Object(o.jsx)(s.a,{fullWidth:!0,src:d,alt:c})]})),"mobile"==p&&(h=Object(o.jsxs)("div",{className:i.mobileContent,children:[Object(o.jsx)("div",{className:i.ligns}),Object(o.jsx)(s.a,{mobile:!0,src:d,alt:c}),Object(o.jsx)("div",{className:i.camera,children:Object(o.jsx)("div",{className:i.sound})})]})),"frameless"==p&&(h=Object(o.jsx)("div",{className:i.shadowContent,children:Object(o.jsx)(s.a,{src:d,alt:c})})),h}},97:function(t,e,i){"use strict";i(1);var a=i(8),r=i(95),s=i(0),n=function(t){var e=t.src,i=t.alt,a=t.key;return Object(s.jsx)(r.a,{type:"mobile",src:e,alt:i},a)};e.a=function(t){var e=t.images.map(n);return Object(s.jsx)(a.a,{drag:"four",children:e})}},99:function(t,e,i){"use strict";i(1);var a=i(8),r=i(95),s=i(0),n=function(t){var e=t.src,i=t.alt,a=t.key;return Object(s.jsx)(r.a,{type:"frameless",src:e,alt:i},a)};e.a=function(t){var e=t.images.map(n);return Object(s.jsx)(a.a,{drag:"five",children:e})}}}]);
//# sourceMappingURL=3.31c99a0c.chunk.js.map