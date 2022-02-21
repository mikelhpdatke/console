"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2338],{84669:function(e,n,t){t(72791);var r=t(91523),i=t(11135),a=t(25787),o=t(96389),s=t(80184);n.Z=(0,a.Z)((function(e){return(0,i.Z)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"300px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center","& svg.min-icon":{width:12}}})}))((function(e){var n=e.to,t=e.label,i=e.classes,a=e.className,l=e.executeOnClick;return(0,s.jsxs)(r.rU,{to:n,className:"".concat(i.link," ").concat(a||""),onClick:function(){l&&l()},children:[(0,s.jsx)("div",{className:i.icon,children:(0,s.jsx)(o.xN,{})}),(0,s.jsx)("div",{className:i.label,children:t})]})}))},74794:function(e,n,t){var r=t(1413),i=(t(72791),t(61889)),a=t(11135),o=t(25787),s=t(23814),l=t(80184);n.Z=(0,o.Z)((function(e){return(0,a.Z)((0,r.Z)({},s.Bw))}))((function(e){var n=e.classes,t=e.className,r=void 0===t?"":t,a=e.children;return(0,l.jsx)("div",{className:n.contentSpacer,children:(0,l.jsx)(i.ZP,{container:!0,children:(0,l.jsx)(i.ZP,{item:!0,xs:12,className:r,children:a})})})}))},32291:function(e,n,t){t(72791);var r=t(60364),i=t(61889),a=t(11135),o=t(25787),s=t(20890),l=t(13400),c=t(95466),d=t(84683),m=t(3925),g=t(96389),x=t(80184),u={toggleList:m.kQ},p=(0,r.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),u);n.Z=p((0,o.Z)((function(e){return(0,a.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}},middleComponent:{display:"flex",justifyContent:"center",alignItems:"center"}})}))((function(e){var n=e.classes,t=e.label,r=e.actions,a=e.sidebarOpen,o=e.operatorMode,m=e.managerObjects,u=e.toggleList,p=e.middleComponent;return(0,x.jsxs)(i.ZP,{container:!0,className:"".concat(n.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,x.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:p?3:6,className:n.label,sx:{paddingTop:["15px","15px","0","0"]},children:[!a&&(0,x.jsx)("div",{className:n.logo,children:o?(0,x.jsx)(c.Z,{}):(0,x.jsx)(d.Z,{})}),(0,x.jsx)(s.Z,{variant:"h4",className:n.labelStyle,children:t})]}),p&&(0,x.jsx)(i.ZP,{item:!0,xs:12,sm:12,md:6,className:n.middleComponent,sx:{marginTop:["10px","10px","0","0"]},children:p}),(0,x.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:p?3:6,className:n.rightMenu,children:[r&&r,m&&m.length>0&&(0,x.jsx)(l.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){u()},size:"large",children:(0,x.jsx)(g.gx,{})})]})]})})))},72338:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(72791),i=t(32291),a=t(34345),o=t(84669),s=t(74794),l=t(64554),c=t(80184),d=function(e){var n=e.onClick,t=e.icon,r=e.name;return(0,c.jsxs)("button",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:10,background:"transparent",border:"1px solid #E5E5E5",borderRadius:2,cursor:"pointer"},onClick:function(){n(r)},children:[t?(0,c.jsx)(l.Z,{sx:{"& .min-icon":{height:"60px",width:"60px"}},children:t}):null,(0,c.jsx)("div",{style:{fontWeight:600,marginLeft:20},children:r})]})},m=t(56087),g=function(e){var n=e.history;return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(i.Z,{label:"Tier Configuration"}),(0,c.jsx)(o.Z,{to:m.gA.TIERS,label:"Return to Configured Tiers"}),(0,c.jsx)(s.Z,{children:(0,c.jsxs)(l.Z,{sx:{border:"1px solid #eaeaea",padding:"40px"},children:[(0,c.jsx)("div",{style:{fontSize:16,fontWeight:600,paddingBottom:15},children:"Select Tier Type"}),(0,c.jsx)(l.Z,{sx:{margin:"0 auto",display:"grid",gridGap:"47px",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"}},children:a.Bh.map((function(e,t){return(0,c.jsx)(d,{name:e.targetTitle,onClick:function(){var t;t=e.serviceName,n.push("".concat(m.gA.TIERS_ADD,"/").concat(t))},icon:e.logo},"tierOpt-".concat(t.toString,"-").concat(e.targetTitle))}))})]})})]})}},34345:function(e,n,t){t.d(n,{Pp:function(){return a},f0:function(){return o},b2:function(){return s},vB:function(){return l},Bh:function(){return c}});var r=t(96389),i=t(80184),a="minio",o="gcs",s="s3",l="azure",c=[{serviceName:a,targetTitle:"MinIO",logo:(0,i.jsx)(r.$E,{}),logoXs:(0,i.jsx)(r.YE,{})},{serviceName:o,targetTitle:"Google Cloud Storage",logo:(0,i.jsx)(r.UQ,{}),logoXs:(0,i.jsx)(r.Vw,{})},{serviceName:s,targetTitle:"AWS S3",logo:(0,i.jsx)(r.fe,{}),logoXs:(0,i.jsx)(r.Xj,{})},{serviceName:l,targetTitle:"Azure",logo:(0,i.jsx)(r.jz,{}),logoXs:(0,i.jsx)(r.nA,{})}]}}]);
//# sourceMappingURL=2338.532ae3c7.chunk.js.map