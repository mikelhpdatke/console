"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6895],{84669:function(e,t,n){n(72791);var a=n(91523),i=n(11135),r=n(25787),o=n(96389),l=n(80184);t.Z=(0,r.Z)((function(e){return(0,i.Z)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"300px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center","& svg.min-icon":{width:12}}})}))((function(e){var t=e.to,n=e.label,i=e.classes,r=e.className,c=e.executeOnClick;return(0,l.jsxs)(a.rU,{to:t,className:"".concat(i.link," ").concat(r||""),onClick:function(){c&&c()},children:[(0,l.jsx)("div",{className:i.icon,children:(0,l.jsx)(o.xN,{})}),(0,l.jsx)("div",{className:i.label,children:n})]})}))},66895:function(e,t,n){n.r(t);var a=n(70885),i=n(1413),r=n(72791),o=n(91523),l=n(79271),c=n(60364),s=n(11135),u=n(25787),d=n(61889),m=n(81207),p=n(23814),f=n(42649),x=n(42209),h=n(32291),b=n(14917),g=n(20068),v=n(13400),Z=n(64554),j=n(28789),y=n(56087),C=n(74794),k=n(50276),T=n(84669),E=n(38442),N=n(75578),I=n(40603),S=n(96389),w=n(80184),B=r.lazy((function(){return Promise.resolve().then(n.bind(n,37746))})),P=r.lazy((function(){return Promise.resolve().then(n.bind(n,56673))})),F=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(3772),n.e(9968)]).then(n.bind(n,39968))}))),_=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(5415),n.e(5171),n.e(6715),n.e(2983),n.e(7494)]).then(n.bind(n,47494))}))),A=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(5415),n.e(5171),n.e(6715),n.e(2983),n.e(4738)]).then(n.bind(n,84738))}))),M=(0,N.Z)(r.lazy((function(){return n.e(8089).then(n.bind(n,28089))}))),O=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(5415),n.e(5171),n.e(6715),n.e(2983),n.e(5702)]).then(n.bind(n,25702))}))),R=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(5994),n.e(5415),n.e(7391),n.e(3772),n.e(5171),n.e(6715),n.e(1812),n.e(2983),n.e(517),n.e(2512)]).then(n.bind(n,32512))}))),L=(0,N.Z)(r.lazy((function(){return Promise.all([n.e(5994),n.e(5415),n.e(7391),n.e(3772),n.e(5171),n.e(6715),n.e(2426),n.e(1520),n.e(6431),n.e(1812),n.e(8697),n.e(2983),n.e(517),n.e(51)]).then(n.bind(n,51))}))),U=(0,c.$j)((function(e){return{session:e.console.session,selectedTab:e.buckets.bucketDetails.selectedTab,distributedSetup:e.system.distributedSetup,loadingBucket:e.buckets.bucketDetails.loadingBucket,bucketInfo:e.buckets.bucketDetails.bucketInfo}}),{setErrorSnackMessage:f.Ih,setBucketDetailsLoad:x.d5,setBucketInfo:x.f4});t.default=(0,u.Z)((function(e){return(0,s.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({pageContainer:{height:"100%"},screenTitle:{border:0,paddingTop:0}},p.Bw),{},{breadcrumLink:{textDecoration:"none",color:"black"}},p.qg),{},{capitalize:{textTransform:"capitalize"},deleteBtn:{color:"#f44336",border:"1px solid rgba(244, 67, 54, 0.5)",maxWidth:140}},p.bp),p.Si),(0,p.Bz)(e.spacing(4))))}))(U((function(e){var t=e.classes,n=e.match,i=e.history,c=e.setErrorSnackMessage,s=e.distributedSetup,u=e.setBucketDetailsLoad,p=e.loadingBucket,f=e.setBucketInfo,x=e.bucketInfo,N=(0,r.useState)(!1),U=(0,a.Z)(N,2),z=U[0],D=U[1],W=(0,r.useState)(!1),G=(0,a.Z)(W,2),H=G[0],K=G[1],Y=n.params.bucketName,Q=null===n||void 0===n?void 0:n.params[0];Q=Q||"summary";var $=(0,r.useState)(Q),q=(0,a.Z)($,2),V=q[0],X=q[1];(0,r.useEffect)((function(){X(Q)}),[Q]),(0,r.useEffect)((function(){z||(u(!0),D(!0))}),[z,u,D]),(0,r.useEffect)((function(){p&&m.Z.invoke("GET","/api/v1/buckets/".concat(Y)).then((function(e){u(!1),f(e)})).catch((function(e){u(!1),c(e)}))}),[Y,p,u,f,c]);var J="/buckets/".concat(Y),ee={events:"/admin/events",replication:"/admin/replication",lifecycle:"/admin/lifecycle",access:"/admin/access",prefix:"/admin/prefix"},te=function(e){var t=ee[e];return t=t?"".concat(J).concat(t):"".concat(J).concat("/admin/summary")};return(0,w.jsxs)(r.Fragment,{children:[H&&(0,w.jsx)(F,{deleteOpen:H,selectedBucket:Y,closeDeleteModalAndRefresh:function(e){!function(e){K(!1),e&&i.push("/buckets")}(e)}}),(0,w.jsx)(h.Z,{label:(0,w.jsx)(r.Fragment,{children:(0,w.jsx)(o.rU,{to:"/buckets",className:t.breadcrumLink,children:"Buckets"})}),actions:(0,w.jsx)(r.Fragment,{children:(0,w.jsx)(g.Z,{title:"Browse Bucket",children:(0,w.jsx)(v.Z,{color:"primary","aria-label":"Browse Bucket",component:"span",onClick:function(){i.push("/buckets/".concat(Y,"/browse"))},size:"large",children:(0,w.jsx)(P,{})})})})}),(0,w.jsx)(T.Z,{to:"/buckets",label:"Back to Buckets"}),(0,w.jsxs)(C.Z,{className:t.pageContainer,children:[(0,w.jsx)(d.ZP,{item:!0,xs:12,children:(0,w.jsx)(b.Z,{classes:{screenTitle:t.screenTitle},icon:(0,w.jsx)(r.Fragment,{children:(0,w.jsx)(B,{width:40})}),title:Y,subTitle:(0,w.jsxs)(E.s,{scopes:[y.Ft.S3_GET_BUCKET_POLICY],resource:Y,children:[(0,w.jsx)("span",{style:{fontSize:15},children:"Access: "}),(0,w.jsx)("span",{className:t.capitalize,style:{fontWeight:600,fontSize:15},children:null===x||void 0===x?void 0:x.access.toLowerCase()})]}),actions:(0,w.jsxs)(r.Fragment,{children:[(0,w.jsx)(E.s,{scopes:[y.Ft.S3_DELETE_BUCKET,y.Ft.S3_FORCE_DELETE_BUCKET],resource:Y,errorProps:{disabled:!0},children:(0,w.jsx)(I.Z,{tooltip:"Delete Bucket",onClick:function(){K(!0)},text:"Delete Bucket",icon:(0,w.jsx)(S.XH,{}),color:"secondary",variant:"outlined"})}),(0,w.jsx)(I.Z,{onClick:function(){u(!0)},text:"Refresh",icon:(0,w.jsx)(j.default,{}),color:"primary"})]})})}),(0,w.jsx)(Z.Z,{sx:{border:"1px solid #eaeaea"},children:(0,w.jsxs)(k.Z,{selectedTab:V,isRouteTabs:!0,routes:(0,w.jsx)("div",{className:t.contentSpacer,children:(0,w.jsx)(l.F0,{history:i,children:(0,w.jsxs)(l.rs,{children:[(0,w.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/summary",component:M}),(0,w.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/events",component:O}),s&&(0,w.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/replication",component:R}),s&&(0,w.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/lifecycle",component:L}),(0,w.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/access",component:A}),(0,w.jsx)(l.AW,{exact:!0,path:"/buckets/:bucketName/admin/prefix",component:_}),(0,w.jsx)(l.AW,{path:"/buckets/:bucketName",component:function(){return(0,w.jsx)(l.l_,{to:"/buckets/".concat(Y,"/admin/summary")})}})]})})}),children:[{tabConfig:{label:"Summary",value:"summary",component:o.rU,to:te("summary")}},{tabConfig:{label:"Events",value:"events",component:o.rU,disabled:!(0,E.F)(Y,[y.Ft.S3_GET_BUCKET_NOTIFICATIONS,y.Ft.S3_PUT_BUCKET_NOTIFICATIONS]),to:te("events")}},{tabConfig:{label:"Replication",value:"replication",component:o.rU,disabled:!s||!(0,E.F)(Y,[y.Ft.S3_GET_REPLICATION_CONFIGURATION,y.Ft.S3_PUT_REPLICATION_CONFIGURATION]),to:te("replication")}},{tabConfig:{label:"Lifecycle",value:"lifecycle",component:o.rU,disabled:!s||!(0,E.F)(Y,[y.Ft.S3_GET_LIFECYCLE_CONFIGURATION,y.Ft.S3_PUT_LIFECYCLE_CONFIGURATION]),to:te("lifecycle")}},{tabConfig:{label:"Access Audit",value:"access",component:o.rU,disabled:!(0,E.F)(Y,[y.Ft.ADMIN_GET_POLICY,y.Ft.ADMIN_LIST_USER_POLICIES,y.Ft.ADMIN_LIST_USERS]),to:te("access")}},{tabConfig:{label:"Access Rules",value:"prefix",component:o.rU,disabled:!(0,E.F)(Y,[y.Ft.S3_GET_BUCKET_POLICY]),to:te("prefix")}}]})})]})]})})))},40603:function(e,t,n){var a=n(1413),i=n(45987),r=(n(72791),n(85531)),o=n(72455),l=n(80184),c=["onClick","text","disabled","tooltip","icon"],s=(0,o.Z)((function(e){return{root:{padding:"7px",color:function(t){return function(t){var n=t.variant,a=t.color,i=e.palette.primary.main;return"primary"===a&&"contained"===n?i=e.palette.primary.contrastText:"primary"===a&&"outlined"===n?i=e.palette.primary.main:"secondary"===a&&(i=e.palette.secondary.main),i}(t)},borderColor:function(t){return"secondary"===t.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));t.Z=function(e){var t=s(e),n=e.onClick,o=e.text,u=void 0===o?"":o,d=e.disabled,m=void 0!==d&&d,p=e.tooltip,f=e.icon,x=void 0===f?null:f,h=(0,i.Z)(e,c);return(0,l.jsxs)(r.Z,(0,a.Z)((0,a.Z)({classes:t,tooltip:p||u,variant:"outlined",onClick:n,disabled:m,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},h),{},{children:[(0,l.jsx)("span",{children:u})," ",x]}))}},85531:function(e,t,n){var a=n(1413),i=n(4942),r=n(45987),o=(n(72791),n(11135)),l=n(25787),c=n(13400),s=n(20068),u=n(28182),d=n(80184),m=["classes","children","variant","tooltip"];t.Z=(0,l.Z)((function(e){return(0,o.Z)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var t=e.classes,n=e.children,o=e.variant,l=void 0===o?"outlined":o,p=e.tooltip,f=(0,r.Z)(e,m),x=(0,d.jsx)(c.Z,(0,a.Z)((0,a.Z)({},f),{},{className:(0,u.Z)(t.root,(0,i.Z)({},t.contained,"contained"===l)),children:n}));return p&&""!==p?(0,d.jsx)(s.Z,{title:p,children:(0,d.jsx)("span",{children:x})}):x}))},75578:function(e,t,n){var a=n(1413),i=n(72791),r=n(80184);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function n(n){return(0,r.jsx)(i.Suspense,{fallback:t,children:(0,r.jsx)(e,(0,a.Z)({},n))})}return n}},32291:function(e,t,n){n(72791);var a=n(60364),i=n(61889),r=n(11135),o=n(25787),l=n(20890),c=n(13400),s=n(95466),u=n(84683),d=n(3925),m=n(96389),p=n(80184),f={toggleList:d.kQ},x=(0,a.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),f);t.Z=x((0,o.Z)((function(e){return(0,r.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var t=e.classes,n=e.label,a=e.actions,r=e.sidebarOpen,o=e.operatorMode,d=e.managerObjects,f=e.toggleList,x=e.middleComponent;return(0,p.jsxs)(i.ZP,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,p.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:x?3:6,className:t.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!r&&(0,p.jsx)("div",{className:t.logo,children:o?(0,p.jsx)(s.Z,{}):(0,p.jsx)(u.Z,{})}),(0,p.jsx)(l.Z,{variant:"h4",className:t.labelStyle,children:n})]}),x&&(0,p.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:6,className:t.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:x}),(0,p.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:x?3:6,className:t.rightMenu,children:[a&&a,d&&d.length>0&&(0,p.jsx)(c.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){f()},size:"large",children:(0,p.jsx)(m.gx,{})})]})]})})))},14917:function(e,t,n){n(72791);var a=n(61889),i=n(11135),r=n(25787),o=n(80184);t.Z=(0,r.Z)((function(e){return(0,i.Z)({headerBarIcon:{marginRight:".7rem",color:e.palette.primary.main,"& .min-icon":{width:44,height:44}},headerBarSubheader:{color:"grey","@media (max-width: 900px)":{maxWidth:200}},screenTitle:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem",borderBottom:"1px solid #EAEAEA","@media (max-width: 600px)":{flexFlow:"column"}},titleColumn:{height:"auto",justifyContent:"center",display:"flex",flexFlow:"column",alignItems:"flex-start","& h1":{fontSize:19}},leftItems:{display:"flex",alignItems:"center","@media (max-width: 600px)":{flexFlow:"column"}},rightItems:{display:"flex",alignItems:"center"}})}))((function(e){var t=e.classes,n=e.icon,i=e.title,r=e.subTitle,l=e.actions,c=e.className;return(0,o.jsx)(a.ZP,{container:!0,children:(0,o.jsxs)(a.ZP,{item:!0,xs:12,className:"".concat(t.screenTitle," ").concat(c||""),children:[(0,o.jsxs)("div",{className:t.leftItems,children:[n?(0,o.jsx)("div",{className:t.headerBarIcon,children:n}):null,(0,o.jsxs)("div",{className:t.titleColumn,children:[(0,o.jsx)("h1",{style:{margin:0},children:i}),(0,o.jsx)("span",{className:t.headerBarSubheader,children:r})]})]}),(0,o.jsx)("div",{className:t.rightItems,children:l})]})})}))},50276:function(e,t,n){var a=n(1413),i=n(70885),r=n(72791),o=n(64554),l=n(43896),c=n(83449),s=n(47283),u=n(82851),d=n(25787),m=n(13967),p=n(11135),f=n(95193),x=n(80184),h={minHeight:60};t.Z=(0,d.Z)((function(e){return(0,p.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var t=e.children,n=e.classes,d=e.selectedTab,p=void 0===d?"0":d,b=e.routes,g=e.isRouteTabs,v=r.useState(p),Z=(0,i.Z)(v,2),j=Z[0],y=Z[1],C=(0,m.Z)(),k=(0,f.Z)(C.breakpoints.down("md")),T=[],E=[];return t?(t.forEach((function(e){T.push(e.tabConfig),E.push(e.content)})),(0,x.jsx)(c.ZP,{value:"".concat(j),children:(0,x.jsxs)(o.Z,{className:n.tabsContainer,children:[(0,x.jsx)(o.Z,{className:n.tabsHeaderContainer,children:(0,x.jsx)(s.Z,{onChange:function(e,t){y(t)},orientation:k?"horizontal":"vertical",variant:k?"scrollable":"standard",scrollButtons:"auto",className:n.tabList,children:T.map((function(e,t){return e?(0,x.jsx)(l.Z,(0,a.Z)((0,a.Z)({className:n.tabHeader,value:"".concat(t),style:h},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(t)):null}))})}),(0,x.jsxs)(o.Z,{className:n.tabContentContainer,children:[g?null:E.map((function(e,t){return(0,x.jsx)(u.Z,{classes:(0,a.Z)({},n.tabPanel),value:"".concat(t),children:e||null},"v-tab-p-".concat(t))})),g?(0,x.jsx)("div",{className:n.tabPanel,children:b}):null]})]})})):null}))},83449:function(e,t,n){n.d(t,{ZP:function(){return l},_i:function(){return c},uU:function(){return s},pQ:function(){return u}});var a=n(70885),i=n(72791),r=n(80184),o=i.createContext(null);function l(e){var t=e.children,n=e.value,l=function(){var e=i.useState(null),t=(0,a.Z)(e,2),n=t[0],r=t[1];return i.useEffect((function(){r("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),n}(),c=i.useMemo((function(){return{idPrefix:l,value:n}}),[l,n]);return(0,r.jsx)(o.Provider,{value:c,children:t})}function c(){return i.useContext(o)}function s(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function u(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}},47283:function(e,t,n){var a=n(87462),i=n(63366),r=n(72791),o=n(18073),l=n(83449),c=n(80184),s=["children"],u=r.forwardRef((function(e,t){var n=e.children,u=(0,i.Z)(e,s),d=(0,l._i)();if(null===d)throw new TypeError("No TabContext provided");var m=r.Children.map(n,(function(e){return r.isValidElement(e)?r.cloneElement(e,{"aria-controls":(0,l.uU)(d,e.props.value),id:(0,l.pQ)(d,e.props.value)}):null}));return(0,c.jsx)(o.Z,(0,a.Z)({},u,{ref:t,value:d.value,children:m}))}));t.Z=u},82851:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),i=n(63366),r=n(72791),o=n(28182),l=n(47630),c=n(93736),s=n(90767),u=n(95159);function d(e){return(0,u.Z)("MuiTabPanel",e)}(0,n(30208).Z)("MuiTabPanel",["root"]);var m=n(83449),p=n(80184),f=["children","className","value"],x=(0,l.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(3)}})),h=r.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiTabPanel"}),r=n.children,l=n.className,u=n.value,h=(0,i.Z)(n,f),b=(0,a.Z)({},n),g=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},d,t)}(b),v=(0,m._i)();if(null===v)throw new TypeError("No TabContext provided");var Z=(0,m.uU)(v,u),j=(0,m.pQ)(v,u);return(0,p.jsx)(x,(0,a.Z)({"aria-labelledby":j,className:(0,o.Z)(g.root,l),hidden:u!==v.value,id:Z,ref:t,role:"tabpanel",ownerState:b},h,{children:u===v.value&&r}))}))},45987:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(63366);function i(e,t){if(null==e)return{};var n,i,r=(0,a.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}}}]);
//# sourceMappingURL=6895.5229a846.chunk.js.map