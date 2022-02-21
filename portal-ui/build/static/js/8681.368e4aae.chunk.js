"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8681],{75578:function(e,n,t){var r=t(1413),a=t(72791),o=t(80184);n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function t(t){return(0,o.jsx)(a.Suspense,{fallback:n,children:(0,o.jsx)(e,(0,r.Z)({},t))})}return t}},74794:function(e,n,t){var r=t(1413),a=(t(72791),t(61889)),o=t(11135),i=t(25787),l=t(23814),s=t(80184);n.Z=(0,i.Z)((function(e){return(0,o.Z)((0,r.Z)({},l.Bw))}))((function(e){var n=e.classes,t=e.className,r=void 0===t?"":t,o=e.children;return(0,s.jsx)("div",{className:n.contentSpacer,children:(0,s.jsx)(a.ZP,{container:!0,children:(0,s.jsx)(a.ZP,{item:!0,xs:12,className:r,children:o})})})}))},32291:function(e,n,t){t(72791);var r=t(60364),a=t(61889),o=t(11135),i=t(25787),l=t(20890),s=t(13400),c=t(95466),u=t(84683),d=t(3925),f=t(96389),h=t(80184),m={toggleList:d.kQ},p=(0,r.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),m);n.Z=p((0,i.Z)((function(e){return(0,o.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var n=e.classes,t=e.label,r=e.actions,o=e.sidebarOpen,i=e.operatorMode,d=e.managerObjects,m=e.toggleList,p=e.middleComponent;return(0,h.jsxs)(a.ZP,{container:!0,className:"".concat(n.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,h.jsxs)(a.ZP,{item:!0,xs:12,sm:12,md:p?3:6,className:n.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!o&&(0,h.jsx)("div",{className:n.logo,children:i?(0,h.jsx)(c.Z,{}):(0,h.jsx)(u.Z,{})}),(0,h.jsx)(l.Z,{variant:"h4",className:n.labelStyle,children:t})]}),p&&(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:6,className:n.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:p}),(0,h.jsxs)(a.ZP,{item:!0,xs:12,sm:12,md:p?3:6,className:n.rightMenu,children:[r&&r,d&&d.length>0&&(0,h.jsx)(s.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){m()},size:"large",children:(0,h.jsx)(f.gx,{})})]})]})})))},50276:function(e,n,t){var r=t(1413),a=t(70885),o=t(72791),i=t(64554),l=t(43896),s=t(83449),c=t(47283),u=t(82851),d=t(25787),f=t(13967),h=t(11135),m=t(95193),p=t(80184),x={minHeight:60};n.Z=(0,d.Z)((function(e){return(0,h.Z)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#F8F8F8",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5",fontWeight:600}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var n=e.children,t=e.classes,d=e.selectedTab,h=void 0===d?"0":d,b=e.routes,Z=e.isRouteTabs,v=o.useState(h),g=(0,a.Z)(v,2),j=g[0],C=g[1],P=(0,f.Z)(),w=(0,m.Z)(P.breakpoints.down("md")),T=[],M=[];return n?(n.forEach((function(e){T.push(e.tabConfig),M.push(e.content)})),(0,p.jsx)(s.ZP,{value:"".concat(j),children:(0,p.jsxs)(i.Z,{className:t.tabsContainer,children:[(0,p.jsx)(i.Z,{className:t.tabsHeaderContainer,children:(0,p.jsx)(c.Z,{onChange:function(e,n){C(n)},orientation:w?"horizontal":"vertical",variant:w?"scrollable":"standard",scrollButtons:"auto",className:t.tabList,children:T.map((function(e,n){return e?(0,p.jsx)(l.Z,(0,r.Z)((0,r.Z)({className:t.tabHeader,value:"".concat(n),style:x},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(n)):null}))})}),(0,p.jsxs)(i.Z,{className:t.tabContentContainer,children:[Z?null:M.map((function(e,n){return(0,p.jsx)(u.Z,{classes:(0,r.Z)({},t.tabPanel),value:"".concat(n),children:e||null},"v-tab-p-".concat(n))})),Z?(0,p.jsx)("div",{className:t.tabPanel,children:b}):null]})]})})):null}))},78681:function(e,n,t){t.r(n);var r=t(70885),a=t(1413),o=t(72791),i=t(11135),l=t(25787),s=t(79271),c=t(91523),u=t(23814),d=t(62666),f=t(32291),h=t(74794),m=t(50276),p=t(75578),x=t(80184),b=(0,p.Z)(o.lazy((function(){return Promise.all([t.e(5994),t.e(5415),t.e(7391),t.e(3772),t.e(5171),t.e(6715),t.e(4634),t.e(2983),t.e(4120)]).then(t.bind(t,54120))}))),Z=(0,p.Z)(o.lazy((function(){return Promise.all([t.e(5994),t.e(5415),t.e(7391),t.e(5171),t.e(6715),t.e(2983),t.e(890)]).then(t.bind(t,15589))}))),v=["/storage/volumes","/storage/drives"];n.default=(0,l.Z)((function(e){return(0,i.Z)((0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({pageContainer:{border:"1px solid #EAEAEA",height:"100%"}},u.Bw),u.OR),u.qg),(0,u.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=e.match,a=null===t||void 0===t?void 0:t.path;a=a||v[0];var i=(0,o.useState)(a),l=(0,r.Z)(i,2),u=l[0],p=l[1];return(0,o.useEffect)((function(){p(a)}),[a]),(0,x.jsxs)(o.Fragment,{children:[(0,x.jsx)(f.Z,{label:"Storage"}),(0,x.jsx)(h.Z,{className:n.pageContainer,children:(0,x.jsxs)(m.Z,{selectedTab:u,isRouteTabs:!0,routes:(0,x.jsx)("div",{className:n.contentSpacer,children:(0,x.jsx)(s.F0,{history:d.Z,children:(0,x.jsxs)(s.rs,{children:[(0,x.jsx)(s.AW,{exact:!0,path:v[0],component:b}),(0,x.jsx)(s.AW,{exact:!0,path:v[1],component:Z}),(0,x.jsx)(s.AW,{render:function(){return(0,x.jsx)(s.l_,{to:v[0]})}})]})})}),children:[{tabConfig:{label:"Volumes",value:v[0],component:c.rU,to:v[0]}},{tabConfig:{label:"Drives",value:v[1],component:c.rU,to:v[1]}}]})})]})}))},83449:function(e,n,t){t.d(n,{ZP:function(){return l},_i:function(){return s},uU:function(){return c},pQ:function(){return u}});var r=t(70885),a=t(72791),o=t(80184),i=a.createContext(null);function l(e){var n=e.children,t=e.value,l=function(){var e=a.useState(null),n=(0,r.Z)(e,2),t=n[0],o=n[1];return a.useEffect((function(){o("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),t}(),s=a.useMemo((function(){return{idPrefix:l,value:t}}),[l,t]);return(0,o.jsx)(i.Provider,{value:s,children:n})}function s(){return a.useContext(i)}function c(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(n)}function u(e,n){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(n)}},47283:function(e,n,t){var r=t(87462),a=t(63366),o=t(72791),i=t(18073),l=t(83449),s=t(80184),c=["children"],u=o.forwardRef((function(e,n){var t=e.children,u=(0,a.Z)(e,c),d=(0,l._i)();if(null===d)throw new TypeError("No TabContext provided");var f=o.Children.map(t,(function(e){return o.isValidElement(e)?o.cloneElement(e,{"aria-controls":(0,l.uU)(d,e.props.value),id:(0,l.pQ)(d,e.props.value)}):null}));return(0,s.jsx)(i.Z,(0,r.Z)({},u,{ref:n,value:d.value,children:f}))}));n.Z=u},82851:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(87462),a=t(63366),o=t(72791),i=t(28182),l=t(47630),s=t(93736),c=t(90767),u=t(95159);function d(e){return(0,u.Z)("MuiTabPanel",e)}(0,t(30208).Z)("MuiTabPanel",["root"]);var f=t(83449),h=t(80184),m=["children","className","value"],p=(0,l.ZP)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(3)}})),x=o.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiTabPanel"}),o=t.children,l=t.className,u=t.value,x=(0,a.Z)(t,m),b=(0,r.Z)({},t),Z=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},d,n)}(b),v=(0,f._i)();if(null===v)throw new TypeError("No TabContext provided");var g=(0,f.uU)(v,u),j=(0,f.pQ)(v,u);return(0,h.jsx)(p,(0,r.Z)({"aria-labelledby":j,className:(0,i.Z)(Z.root,l),hidden:u!==v.value,id:g,ref:n,role:"tabpanel",ownerState:b},x,{children:u===v.value&&o}))}))}}]);
//# sourceMappingURL=8681.368e4aae.chunk.js.map