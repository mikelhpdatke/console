"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[5140],{32291:function(e,n,a){a(72791);var t=a(60364),r=a(61889),s=a(11135),i=a(25787),o=a(20890),c=a(13400),l=a(95466),d=a(84683),m=a(3925),p=a(96389),u=a(80184),h={toggleList:m.kQ},x=(0,t.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),h);n.Z=x((0,i.Z)((function(e){return(0,s.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var n=e.classes,a=e.label,t=e.actions,s=e.sidebarOpen,i=e.operatorMode,m=e.managerObjects,h=e.toggleList,x=e.middleComponent;return(0,u.jsxs)(r.ZP,{container:!0,className:"".concat(n.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,u.jsxs)(r.ZP,{item:!0,xs:12,sm:12,md:x?3:6,className:n.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!s&&(0,u.jsx)("div",{className:n.logo,children:i?(0,u.jsx)(l.Z,{}):(0,u.jsx)(d.Z,{})}),(0,u.jsx)(o.Z,{variant:"h4",className:n.labelStyle,children:a})]}),x&&(0,u.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:6,className:n.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:x}),(0,u.jsxs)(r.ZP,{item:!0,xs:12,sm:12,md:x?3:6,className:n.rightMenu,children:[t&&t,m&&m.length>0&&(0,u.jsx)(c.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){h()},size:"large",children:(0,u.jsx)(p.gx,{})})]})]})})))},65140:function(e,n,a){a.r(n);var t=a(70885),r=a(1413),s=a(72791),i=a(11135),o=a(25787),c=a(91523),l=a(64554),d=a(13400),m=a(13239),p=a(32291),u=a(23814),h=a(77608),x=a(62666),f=a(28789),g=a(80184);n.default=(0,o.Z)((function(e){return(0,i.Z)((0,r.Z)({breadcrumLink:{textDecoration:"none",color:"black"},iframeStyle:{border:0,position:"absolute",height:"calc(100vh - 77px)",width:"100%"},divContainer:{position:"absolute",left:0,top:80,height:"calc(100vh - 81px)",width:"100%"},loader:{width:100,margin:"auto",marginTop:80},pageHeader:{borderBottom:"1px solid #dedede"}},(0,u.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,a=e.match,r=(0,s.useState)(!0),i=(0,t.Z)(r,2),o=i[0],u=i[1],j=a.params.tenantName,b=a.params.tenantNamespace,Z=s.useRef(null);return(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)(l.Z,{className:n.pageHeader,children:(0,g.jsx)(p.Z,{label:(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)(c.rU,{to:"/tenants",className:n.breadcrumLink,children:"Tenants"})," > ",(0,g.jsx)(c.rU,{to:"/namespaces/".concat(b,"/tenants/").concat(j),className:n.breadcrumLink,children:a.params.tenantName})," > Management"]}),actions:(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)(d.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){if(null!==Z&&null!==Z.current&&null!==Z.current.contentDocument){var e=Z.current.contentDocument.location.toString(),n="&";if(e.indexOf("?")<0&&(n="?"),e.indexOf("cp=y")<0){var a="".concat(e).concat(n,"cp=y");Z.current.contentDocument.location.replace(a)}else Z.current.contentDocument.location.reload()}},size:"large",children:(0,g.jsx)(f.default,{})}),(0,g.jsx)(d.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){x.Z.push("/namespaces/".concat(b,"/tenants/").concat(j))},size:"large",children:(0,g.jsx)(h.Z,{})})]})})}),(0,g.jsxs)("div",{className:n.divContainer,children:[o&&(0,g.jsx)("div",{className:n.loader,children:(0,g.jsx)(m.Z,{})}),(0,g.jsx)("iframe",{ref:Z,className:n.iframeStyle,title:"metrics",src:"/api/proxy/".concat(b,"/").concat(j,"/?cp=y"),onLoad:function(e){u(!1)}})]})]})}))},77608:function(e,n,a){var t=a(95318);n.Z=void 0;var r=t(a(45649)),s=a(80184),i=(0,r.default)((0,s.jsx)("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToApp");n.Z=i}}]);
//# sourceMappingURL=5140.2d2592cb.chunk.js.map