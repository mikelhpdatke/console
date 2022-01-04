(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[79],{396:function(e,t,n){"use strict";var a=n(1),c=n(2),o=n.n(c),i=n(422),r=n(441),s=n(822),l=n(380),d=n(386),u=n(316),b=n(375),j=n(320),h=n(122),m=n(123),p=n(0),x=Object(b.a)((function(e){return Object(u.a)(Object(a.a)({},h.n))}));function O(e){var t=x();return Object(p.jsx)(i.a,Object(a.a)({InputProps:{classes:t}},e))}t.a=Object(j.a)((function(e){return Object(u.a)(Object(a.a)(Object(a.a)(Object(a.a)({},h.i),h.F),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,n=e.onChange,c=e.value,i=e.id,u=e.name,b=e.type,j=void 0===b?"text":b,h=e.autoComplete,x=void 0===h?"off":h,f=e.disabled,g=void 0!==f&&f,v=e.multiline,C=void 0!==v&&v,y=e.tooltip,w=void 0===y?"":y,S=e.index,N=void 0===S?0:S,k=e.error,I=void 0===k?"":k,F=e.required,z=void 0!==F&&F,B=e.placeholder,T=void 0===B?"":B,A=e.min,D=e.max,E=e.overlayIcon,M=void 0===E?null:E,R=e.overlayObject,L=void 0===R?null:R,_=e.extraInputProps,P=void 0===_?{}:_,W=e.overlayAction,H=e.noLabelMinWidth,K=void 0!==H&&H,q=e.pattern,V=void 0===q?"":q,G=e.autoFocus,J=void 0!==G&&G,U=e.classes,Y=Object(a.a)({"data-index":N},P);return"number"===j&&A&&(Y.min=A),"number"===j&&D&&(Y.max=D),""!==V&&(Y.pattern=V),Object(p.jsx)(o.a.Fragment,{children:Object(p.jsxs)(r.a,{container:!0,className:" ".concat(""!==I?U.errorInField:U.inputBoxContainer),children:[""!==t&&Object(p.jsxs)(s.a,{htmlFor:i,className:K?U.noMinWidthLabel:U.inputLabel,children:[Object(p.jsxs)("span",{children:[t,z?"*":""]}),""!==w&&Object(p.jsx)("div",{className:U.tooltipContainer,children:Object(p.jsx)(l.a,{title:w,placement:"top-start",children:Object(p.jsx)("div",{className:U.tooltip,children:Object(p.jsx)(m.a,{})})})})]}),Object(p.jsxs)("div",{className:U.textBoxContainer,children:[Object(p.jsx)(O,{id:i,name:u,fullWidth:!0,value:c,autoFocus:J,disabled:g,onChange:n,type:j,multiline:C,autoComplete:x,inputProps:Y,error:""!==I,helperText:I,placeholder:T,className:U.inputRebase}),M&&Object(p.jsx)("div",{className:"".concat(U.overlayAction," ").concat(""!==t?"withLabel":""),children:Object(p.jsx)(d.a,{onClick:W?function(){W()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:M})}),L&&Object(p.jsx)("div",{className:"".concat(U.overlayAction," ").concat(""!==t?"withLabel":""),children:L})]})]})})}))},398:function(e,t,n){"use strict";var a,c=n(16),o=n(1),i=n(2),r=n(41),s=n(386),l=n(378),d=n(413),u=n(414),b=n(415),j=n(316),h=n(320),m=n(122),p=n(32),x=n(48),O=n.n(x),f=n(128),g=n.n(f),v=n(127),C=n.n(v),y=n(124),w=n.n(y),S=n(0),N=function(){clearInterval(a)},k={displayErrorMessage:p.g},I=Object(r.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),k)(Object(h.a)((function(e){return Object(j.a)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,n=e.modalSnackMessage,o=e.displayErrorMessage,r=e.customStyle,s=Object(i.useState)(!1),l=Object(c.a)(s,2),d=l[0],u=l[1],b=Object(i.useState)(!1),j=Object(c.a)(b,2),h=j[0],m=j[1],p=Object(i.useCallback)((function(){m(!1)}),[]);Object(i.useEffect)((function(){h||(o({detailedError:"",errorMessage:""}),u(!1))}),[o,h]),Object(i.useEffect)((function(){""!==n.message&&"error"===n.type&&m(!0)}),[p,n.message,n.type]);var x=O()(n,"message",""),f=O()(n,"detailedErrorMsg","");return"error"!==n.type||""===x?null:Object(S.jsx)(i.Fragment,{children:Object(S.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(h?t.modalErrorShow:""),style:r,onMouseOver:N,onMouseLeave:function(){a=setInterval(p,1e4)},children:[Object(S.jsx)("button",{className:t.closeButton,onClick:p,children:Object(S.jsx)(w.a,{})}),Object(S.jsxs)("div",{className:t.errorTitle,children:[Object(S.jsx)("span",{className:t.messageIcon,children:Object(S.jsx)(C.a,{})}),Object(S.jsx)("span",{className:t.errorLabel,children:x})]}),""!==f&&Object(S.jsxs)(i.Fragment,{children:[Object(S.jsx)("div",{className:t.detailsContainerLink,children:Object(S.jsxs)("button",{className:t.detailsButton,onClick:function(){u(!d)},children:["Details",Object(S.jsx)(g.a,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),Object(S.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:f})]})]})})}))),F=Object(r.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:p.h});t.a=Object(h.a)((function(e){return Object(j.a)(Object(o.a)(Object(o.a)({},m.h),{},{root:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},m.z))}))(F((function(e){var t=e.onClose,n=e.modalOpen,a=e.title,r=e.children,j=e.classes,h=e.wideLimit,m=void 0===h||h,p=e.modalSnackMessage,x=e.noContentPadding,O=e.setModalSnackMessage,f=e.titleIcon,g=void 0===f?null:f,v=Object(i.useState)(!1),C=Object(c.a)(v,2),y=C[0],N=C[1];Object(i.useEffect)((function(){O("")}),[O]),Object(i.useEffect)((function(){if(p){if(""===p.message)return void N(!1);"error"!==p.type&&N(!0)}}),[p]);var k=m?{classes:{paper:j.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},F="";return p&&(F=p.detailedErrorMsg,(""===p.detailedErrorMsg||p.detailedErrorMsg.length<5)&&(F=p.message)),Object(S.jsxs)(d.a,Object(o.a)(Object(o.a)({open:n,classes:j},k),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:j.root,children:[Object(S.jsxs)(u.a,{className:j.title,children:[Object(S.jsxs)("div",{className:j.titleText,children:[g," ",a]}),Object(S.jsx)("div",{className:j.closeContainer,children:Object(S.jsx)(s.a,{"aria-label":"close",className:j.closeButton,onClick:t,disableRipple:!0,size:"small",children:Object(S.jsx)(w.a,{})})})]}),Object(S.jsx)(I,{}),Object(S.jsx)(l.a,{open:y,className:j.snackBarModal,onClose:function(){N(!1),O("")},message:F,ContentProps:{className:"".concat(j.snackBar," ").concat(p&&"error"===p.type?j.errorSnackBar:"")},autoHideDuration:p&&"error"===p.type?1e4:5e3}),Object(S.jsx)(b.a,{className:x?"":j.content,children:r})]}))})))},404:function(e,t,n){"use strict";var a=n(16),c=n(13),o=n(1),i=n(2),r=n.n(i),s=n(48),l=n.n(s),d=n(402),u=n.n(d),b=n(96),j=n(386),h=n(988),m=n(441),p=n(387),x=n(372),O=n(786),f=n(446),g=n(316),v=n(320),C=n(470),y=n(444),w=n.n(y),S=n(443),N=n.n(S),k=n(442),I=n.n(k),F=n(20),z=n(380),B="#081C42",T="#081C42",A=n(0),D=function(e){var t=e.active,n=void 0!==t&&t;return Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(A.jsx)("path",{fill:n?T:B,d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"})})},E=function(e){var t=e.active,n=void 0!==t&&t;return Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(A.jsx)("path",{fill:n?T:B,d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"})})},M=function(e){var t=e.active,n=void 0!==t&&t;return Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:Object(A.jsx)("path",{fill:n?T:B,d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"})})},R=function(e){var t=e.active,n=void 0!==t&&t;return Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(A.jsx)("path",{fill:n?T:B,d:"M20 16h2v-2h-2v2zm0-9v5h2V7h-2zM10 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"})})},L=n(129),_=n(131),P=n(23),W=n(132),H=Object(v.a)((function(){return Object(g.a)({spacing:{margin:"0 8px"},buttonDisabled:{"&.MuiButtonBase-root.Mui-disabled":{cursor:"not-allowed",filter:"grayscale(100%)",opacity:"30%"}}})}))((function(e){var t=e.type,n=e.onClick,a=e.valueToSend,c=e.idField,o=e.selected,i=e.to,r=e.sendOnlyId,s=void 0!==r&&r,l=e.disabled,d=void 0!==l&&l,b=e.classes,h=e.label,m=s?a[c]:a,p="string"===typeof t?function(e,t){switch(e){case"view":case"preview":return Object(A.jsx)(P.Qb,{});case"edit":return Object(A.jsx)(L.default,{});case"delete":return Object(A.jsx)(_.a,{});case"description":return Object(A.jsx)(P.sb,{});case"share":return Object(A.jsx)(P.fc,{});case"cloud":return Object(A.jsx)(D,{active:t});case"console":return Object(A.jsx)(E,{active:t});case"download":return Object(A.jsx)(W.default,{});case"disable":return Object(A.jsx)(M,{active:t});case"format":return Object(A.jsx)(R,{active:t})}return null}(t,o):t,x=Object(A.jsx)(j.a,{"aria-label":"string"===typeof t?t:"",size:"small",className:"".concat(b.spacing," ").concat(d?b.buttonDisabled:""),disabled:d,onClick:n?function(e){e.stopPropagation(),d?e.preventDefault():n(m)}:function(){return null},children:p});return h&&""!==h&&(x=Object(A.jsx)(z.a,{title:h,children:x})),n?x:u()(i)?d?x:Object(A.jsx)(F.a,{to:"".concat(i,"/").concat(m),onClick:function(e){e.stopPropagation()},children:x}):null})),K=n(405),q=n(54),V=n(122),G=function(e,t,n,a,o,r,s,d,b,j,h){var m=function(e,t,n,a,o,i,r){var s=Object(c.a)(e);i&&(s=e.filter((function(e){return r.includes(e.elementKey)})));var l=t;return a&&(l-=45),o&&(l-=n),s.reduce((function(e,t){return t.width?e-t.width:e}),l)/s.filter((function(e){return!e.width})).length}(e,t,n,a,o,d,b);return e.map((function(e,t){if(d&&!b.includes(e.elementKey))return null;var n=!e.enableSort||!e.enableSort;return Object(A.jsx)(f.b,{dataKey:e.elementKey,headerClassName:"titleHeader ".concat(e.headerTextAlign?"text-".concat(e.headerTextAlign):""),headerRenderer:function(){return Object(A.jsxs)(i.Fragment,{children:[j===e.elementKey&&Object(A.jsx)(i.Fragment,{children:"ASC"===h?Object(A.jsx)(I.a,{}):Object(A.jsx)(N.a,{})}),e.label]})},className:e.contentTextAlign?"text-".concat(e.contentTextAlign):"",cellRenderer:function(t){var n=t.rowData,a=!!r&&r.includes(u()(n)?n:n[s]);return function(e,t,n){var a=u()(e)?e:l()(e,t.elementKey,null),c=t.renderFullObject?e:a,o=t.renderFunction?t.renderFunction(c):c;return Object(A.jsx)(i.Fragment,{children:Object(A.jsx)("span",{className:n?"selected":"",children:o})})}(n,e,a)},width:e.width||m,disableSort:n,defaultSortDirection:"ASC"},"col-tb-".concat(t.toString()))}))};t.a=Object(v.a)((function(){return Object(g.a)(Object(o.a)(Object(o.a)({paper:{display:"flex",overflow:"auto",flexDirection:"column",padding:"8px 16px",boxShadow:"none",border:"#EAEDEE 1px solid",borderRadius:3,minHeight:200,overflowY:"scroll",position:"relative","&::-webkit-scrollbar":{width:3,height:3}},noBackground:{backgroundColor:"transparent",border:0},disabled:{backgroundColor:"#fbfafa",color:"#cccccc"},defaultPaperHeight:{height:"calc(100vh - 205px)"},loadingBox:{paddingTop:"100px",paddingBottom:"100px"},overlayColumnSelection:{position:"absolute",right:0,top:0},popoverContent:{maxHeight:250,overflowY:"auto",padding:"0 10px 10px"},shownColumnsLabel:{color:"#9c9c9c",fontSize:12,padding:10,borderBottom:"#eaeaea 1px solid",width:"100%"},checkAllWrapper:{marginTop:-16},"@global":{".rowLine":{borderBottom:"1px solid ".concat("#9c9c9c80"),height:40,color:"#393939",fontSize:14,transitionDuration:.3,"&:focus":{outline:"initial"},"&:hover:not(.ReactVirtualized__Table__headerRow)":{userSelect:"none",backgroundColor:"#ececec",fontWeight:600,"&.canClick":{cursor:"pointer"},"&.canSelectText":{userSelect:"text"}},"& .selected":{color:"#081C42",fontWeight:600}},".headerItem":{userSelect:"none",fontWeight:700,fontSize:14,fontStyle:"initial",display:"flex",alignItems:"center",outline:"none"},".ReactVirtualized__Table__headerRow":{fontWeight:700,fontSize:14,borderColor:"#39393980",textTransform:"initial"},".optionsAlignment":{textAlign:"center","& .min-icon":{width:16,height:16}},".text-center":{textAlign:"center"},".text-right":{textAlign:"right"},".progress-enabled":{paddingTop:3,display:"inline-block",margin:"0 10px",position:"relative",width:18,height:18},".progress-enabled > .MuiCircularProgress-root":{position:"absolute",left:0,top:3}}},V.d),V.u))}))((function(e){var t=e.itemActions,n=e.columns,c=e.onSelect,o=e.records,s=e.isLoading,l=e.loadingMessage,d=void 0===l?Object(A.jsx)(b.a,{component:"h3",children:"Loading..."}):l,g=e.entityName,v=e.selectedItems,y=e.idField,S=e.classes,N=e.radioSelection,k=void 0!==N&&N,I=e.customEmptyMessage,F=void 0===I?"":I,z=e.customPaperHeight,B=void 0===z?"":z,T=e.noBackground,D=void 0!==T&&T,E=e.columnsSelector,M=void 0!==E&&E,R=e.textSelectable,L=void 0!==R&&R,_=e.columnsShown,P=void 0===_?[]:_,W=e.onColumnChange,V=void 0===W?function(e,t){}:W,J=e.infiniteScrollConfig,U=e.sortConfig,Y=e.autoScrollToBottom,Q=void 0!==Y&&Y,X=e.disabled,Z=void 0!==X&&X,$=e.onSelectAll,ee=Object(i.useState)(!1),te=Object(a.a)(ee,2),ne=te[0],ae=te[1],ce=r.a.useState(null),oe=Object(a.a)(ce,2),ie=oe[0],re=oe[1],se=t?t.find((function(e){return"view"===e.type})):null,le=function(e){ae(!ne),re(e.currentTarget)},de=function(){ae(!1),re(null)};return Object(A.jsx)(m.a,{item:!0,xs:12,children:Object(A.jsxs)(p.a,{className:"".concat(S.paper," ").concat(D?S.noBackground:"","\n        ").concat(Z?S.disabled:""," \n        ").concat(""!==B?B:S.defaultPaperHeight),children:[s&&Object(A.jsxs)(m.a,{container:!0,className:S.loadingBox,children:[Object(A.jsx)(m.a,{item:!0,xs:12,style:{textAlign:"center"},children:d}),Object(A.jsx)(m.a,{item:!0,xs:12,children:Object(A.jsx)(x.a,{})})]}),M&&!s&&o.length>0&&Object(A.jsx)("div",{className:S.overlayColumnSelection,children:function(e){return Object(A.jsxs)(i.Fragment,{children:[Object(A.jsx)(j.a,{"aria-describedby":"columnsSelector",color:"primary",onClick:le,size:"large",children:Object(A.jsx)(w.a,{fontSize:"inherit"})}),Object(A.jsxs)(h.a,{anchorEl:ie,id:"columnsSelector",open:ne,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:de,children:[Object(A.jsx)("div",{className:S.shownColumnsLabel,children:"Shown Columns"}),Object(A.jsx)("div",{className:S.popoverContent,children:e.map((function(e){return Object(A.jsx)(K.a,{label:e.label,checked:P.includes(e.elementKey),onChange:function(t){V(e.elementKey,t.target.checked)},id:"chbox-".concat(e.label),name:"chbox-".concat(e.label),value:e.label},"tableColumns-".concat(e.label))}))})]})]})}(n)}),o&&!s&&o.length>0?Object(A.jsx)(f.c,{isRowLoaded:function(e){var t=e.index;return!!o[t]},loadMoreRows:J?J.loadMoreRecords:function(){return new Promise((function(){return!0}))},rowCount:J?J.recordsCount:o.length,children:function(e){var a=e.onRowsRendered,r=e.registerChild;return Object(A.jsx)(f.a,{children:function(e){var s=e.width,l=e.height,d=function(e,t){var n=45*t+15;return n<80?80:n>e?e:n}(s,t?t.filter((function(e){return"view"!==e.type})).length:0),b=!(!c||!v),j=!!(t&&t.length>1||t&&1===t.length&&"view"!==t[0].type);return Object(A.jsxs)(f.d,{ref:r,disableHeader:!1,headerClassName:"headerItem",headerHeight:40,height:l,noRowsRenderer:function(){return Object(A.jsx)(i.Fragment,{children:""!==F?F:"There are no ".concat(g," yet.")})},overscanRowCount:10,rowHeight:40,width:s,rowCount:o.length,rowGetter:function(e){var t=e.index;return o[t]},onRowClick:function(e){!function(e){if(se){var t=se.sendOnlyId?e[y]:e,n=!1;if(se.disableButtonFunction&&se.disableButtonFunction(t)&&(n=!0),se.to&&!n)return void q.a.push("".concat(se.to,"/").concat(t));se.onClick&&!n&&se.onClick(t)}}(e.rowData)},rowClassName:"rowLine ".concat(se?"canClick":""," ").concat(!se&&L?"canSelectText":""),onRowsRendered:a,sort:U?U.triggerSort:void 0,sortBy:U?U.currentSort:void 0,sortDirection:U?U.currentDirection:void 0,scrollToIndex:Q?o.length-1:-1,children:[b&&Object(A.jsx)(f.b,{headerRenderer:function(){return Object(A.jsx)(i.Fragment,{children:$?Object(A.jsx)("div",{className:S.checkAllWrapper,children:Object(A.jsx)(K.a,{label:"",onChange:$,value:"all",id:"selectAll",name:"selectAll",checked:(null===v||void 0===v?void 0:v.length)===o.length})}):Object(A.jsx)(i.Fragment,{children:"Select"})})},dataKey:"select-".concat(y),width:45,disableSort:!0,cellRenderer:function(e){var t=e.rowData,n=!!v&&v.includes(u()(t)?t:t[y]);return Object(A.jsx)(O.a,{value:u()(t)?t:t[y],color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:n,onChange:c,onClick:function(e){e.stopPropagation()},checkedIcon:Object(A.jsx)("span",{className:k?S.radioSelectedIcon:S.checkedIcon}),icon:Object(A.jsx)("span",{className:k?S.radioUnselectedIcon:S.unCheckedIcon})})}}),G(n,s,d,b,j,v||[],y,M,P,U?U.currentSort:"",U?U.currentDirection:void 0),j&&Object(A.jsx)(f.b,{headerRenderer:function(){return Object(A.jsx)(i.Fragment,{children:"Options"})},dataKey:y,width:d,headerClassName:"optionsAlignment",className:"optionsAlignment",cellRenderer:function(e){var n=e.rowData,a=!!v&&v.includes(u()(n)?n:n[y]);return function(e,t,n,a){return e.map((function(e,c){if("view"===e.type)return null;var o="string"===typeof t?t:t[a],i=!1;return e.disableButtonFunction&&e.disableButtonFunction(o)&&(i=!0),e.showLoaderFunction&&e.showLoaderFunction(o)?Object(A.jsx)("div",{className:"progress-enabled",children:Object(A.jsx)(C.a,{color:"primary",size:18,variant:"indeterminate"},"actions-loader-".concat(e.type,"-").concat(c.toString()))}):Object(A.jsx)(H,{label:e.label,type:e.type,onClick:e.onClick,to:e.to,valueToSend:t,selected:n,idField:a,sendOnlyId:!!e.sendOnlyId,disabled:i},"actions-".concat(e.type,"-").concat(c.toString()))}))}(t||[],n,a,y)}})]})}})}}):Object(A.jsx)(i.Fragment,{children:!s&&Object(A.jsx)("div",{children:""!==F?F:"There are no ".concat(g," yet.")})})]})})}))},405:function(e,t,n){"use strict";var a=n(1),c=n(2),o=n.n(c),i=n(441),r=n(786),s=n(822),l=n(380),d=n(316),u=n(320),b=n(122),j=n(123),h=n(0);t.a=Object(u.a)((function(e){return Object(d.a)(Object(a.a)(Object(a.a)(Object(a.a)(Object(a.a)({},b.i),b.F),b.d),{},{fieldContainer:Object(a.a)(Object(a.a)({},b.i.fieldContainer),{},{display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"15px 0",marginBottom:0,flexBasis:"initial"})}))}))((function(e){var t=e.label,n=e.onChange,a=e.value,c=e.id,d=e.name,u=e.checked,b=void 0!==u&&u,m=e.disabled,p=void 0!==m&&m,x=e.tooltip,O=void 0===x?"":x,f=e.classes;return Object(h.jsx)(o.a.Fragment,{children:Object(h.jsxs)(i.a,{item:!0,xs:12,className:f.fieldContainer,children:[Object(h.jsx)("div",{children:Object(h.jsx)(r.a,{name:d,id:c,value:a,color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:b,onChange:n,checkedIcon:Object(h.jsx)("span",{className:f.checkedIcon}),icon:Object(h.jsx)("span",{className:f.unCheckedIcon}),disabled:p})}),""!==t&&Object(h.jsxs)(s.a,{htmlFor:c,className:f.noMinWidthLabel,children:[Object(h.jsx)("span",{children:t}),""!==O&&Object(h.jsx)("div",{className:f.tooltipContainer,children:Object(h.jsx)(l.a,{title:O,placement:"top-start",children:Object(h.jsx)("div",{className:f.tooltip,children:Object(h.jsx)(j.a,{})})})})]})]})})}))},439:function(e,t,n){"use strict";var a=n(1),c=n(2),o=n.n(c),i=n(441),r=n(788),s=n(822),l=n(380),d=n(987),u=n(975),b=n(493),j=n(316),h=n(320),m=n(122),p=n(123),x=n(0),O=Object(h.a)((function(e){return Object(j.a)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(r.c);t.a=Object(h.a)((function(e){return Object(j.a)(Object(a.a)(Object(a.a)({},m.i),m.F))}))((function(e){var t=e.classes,n=e.id,a=e.name,c=e.onChange,r=e.options,j=e.label,h=e.tooltip,m=void 0===h?"":h,f=e.value,g=e.disabled,v=void 0!==g&&g;return Object(x.jsx)(o.a.Fragment,{children:Object(x.jsxs)(i.a,{item:!0,xs:12,className:t.fieldContainer,children:[""!==j&&Object(x.jsxs)(s.a,{htmlFor:n,className:t.inputLabel,children:[Object(x.jsx)("span",{children:j}),""!==m&&Object(x.jsx)("div",{className:t.tooltipContainer,children:Object(x.jsx)(l.a,{title:m,placement:"top-start",children:Object(x.jsx)("div",{className:t.tooltip,children:Object(x.jsx)(p.a,{})})})})]}),Object(x.jsx)(d.a,{fullWidth:!0,children:Object(x.jsx)(u.a,{id:n,name:a,value:f,onChange:c,input:Object(x.jsx)(O,{}),disabled:v,children:r.map((function(e){return Object(x.jsx)(b.a,{value:e.value,children:e.label},"select-".concat(a,"-").concat(e.label))}))})})]})})}))},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a=function(e,t){return{podAntiAffinity:{requiredDuringSchedulingIgnoredDuringExecution:[{labelSelector:{matchExpressions:[{key:"v1.min.io/tenant",operator:"In",values:[e]},{key:"v1.min.io/pool",operator:"In",values:[t]}]},topologyKey:"kubernetes.io/hostname"}]}}},c=function(e,t,n,c){var o=e.split("&"),i=[];o.forEach((function(e){var t=e.split("=");2===t.length&&i.push({key:t[0],operator:"In",values:[t[1]]})}));var r={nodeAffinity:{requiredDuringSchedulingIgnoredDuringExecution:{nodeSelectorTerms:[{matchExpressions:i}]}}};if(t){var s=a(n,c);r.podAntiAffinity=s.podAntiAffinity}return console.log(r),r}},913:function(e,t,n){"use strict";n.r(t);var a=n(16),c=n(1),o=n(2),i=n(41),r=n(316),s=n(320),l=n(122),d=n(422),u=n(383),b=n(441),j=n(23),h=n(32),m=n(404),p=n(48),x=n.n(p),O=n(398),f=n(396),g=n(60),v=n(372),C=n(53),y=n(771),w=n(439),S=n(0),N=Object(s.a)((function(e){return Object(r.a)(Object(c.a)(Object(c.a)({buttonContainer:{textAlign:"right"},bottomContainer:{display:"flex",flexGrow:1,alignItems:"center",margin:"auto",justifyContent:"center","& div":{width:150,"@media (max-width: 900px)":{flexFlow:"column"}}},factorElements:{display:"flex",justifyContent:"flex-start",marginLeft:30},sizeNumber:{fontSize:35,fontWeight:700,textAlign:"center"},sizeDescription:{fontSize:14,color:"#777",textAlign:"center"}},l.k),l.q))}))((function(e){var t=e.tenant,n=e.classes,c=e.open,i=e.onClosePoolAndReload,r=Object(o.useState)(!1),s=Object(a.a)(r,2),l=s[0],d=s[1],h=Object(o.useState)(0),m=Object(a.a)(h,2),p=m[0],N=m[1],k=Object(o.useState)(0),I=Object(a.a)(k,2),F=I[0],z=I[1],B=Object(o.useState)(0),T=Object(a.a)(B,2),A=T[0],D=T[1],E=Object(o.useState)(""),M=Object(a.a)(E,2),R=M[0],L=M[1],_=Object(o.useState)([]),P=Object(a.a)(_,2),W=P[0],H=P[1],K=1073741824*F*A,q=K*p;return Object(o.useEffect)((function(){L(""),H([]),C.a.invoke("GET","/api/v1/namespaces/".concat(t.namespace,"/resourcequotas/").concat(t.namespace,"-storagequota")).then((function(e){var t=x()(e,"elements",[]).map((function(e){var t=x()(e,"name","").split(".storageclass.storage.k8s.io/requests.storage")[0];return{label:t,value:t}}));H(t),t.length>0&&L(t[0].value)})).catch((function(e){console.error(e)}))}),[t]),Object(S.jsx)(O.a,{onClose:function(){return i(!1)},modalOpen:c,title:"Add Pool",titleIcon:Object(S.jsx)(j.Gb,{}),children:Object(S.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),d(!0);var n=Object(g.h)(t.pools),a=Object(y.a)(t.name,n),c={name:n,servers:p,volumes_per_server:A,volume_configuration:{size:1073741824*F,storage_class_name:R,labels:null},affinity:a};C.a.invoke("POST","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.name,"/pools"),c).then((function(){d(!1),i(!0)})).catch((function(e){d(!1)}))},children:[Object(S.jsx)(b.a,{item:!0,xs:12,className:n.formFieldRow,children:Object(S.jsx)(f.a,{id:"number_of_nodes",name:"number_of_nodes",type:"number",onChange:function(e){N(parseInt(e.target.value))},label:"Number o Nodes",value:p.toString(10)})}),Object(S.jsx)(b.a,{item:!0,xs:12,className:n.formFieldRow,children:Object(S.jsx)(f.a,{id:"pool_size",name:"pool_size",type:"number",onChange:function(e){z(parseInt(e.target.value))},label:"Volume Size (Gi)",value:F.toString(10)})}),Object(S.jsx)(b.a,{item:!0,xs:12,className:n.formFieldRow,children:Object(S.jsx)(f.a,{id:"volumes_per_sever",name:"volumes_per_sever",type:"number",onChange:function(e){D(parseInt(e.target.value))},label:"Volumes per Server",value:A.toString(10)})}),Object(S.jsx)(b.a,{item:!0,xs:12,className:n.formFieldRow,children:Object(S.jsx)(w.a,{id:"storage_class",name:"storage_class",onChange:function(e){L(e.target.value)},label:"Storage Class",value:R,options:W,disabled:W.length<1})}),Object(S.jsx)(b.a,{item:!0,xs:12,className:n.bottomContainer,children:Object(S.jsxs)("div",{className:n.factorElements,children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:n.sizeNumber,children:Object(g.l)(K.toString(10))}),Object(S.jsx)("div",{className:n.sizeDescription,children:"Instance Capacity"})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:n.sizeNumber,children:Object(g.l)(q.toString(10))}),Object(S.jsx)("div",{className:n.sizeDescription,children:"Total Capacity"})]})]})}),Object(S.jsxs)(b.a,{item:!0,xs:12,className:n.modalButtonBar,children:[Object(S.jsx)(u.a,{type:"button",variant:"outlined",color:"primary",disabled:l,onClick:function(){return i(!1)},children:"Cancel"}),Object(S.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",disabled:l,children:"Save"})]}),l&&Object(S.jsx)(b.a,{item:!0,xs:12,children:Object(S.jsx)(v.a,{})})]})})})),k=n(457),I=n(465),F=n(135),z=Object(i.b)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo}}),{setErrorSnackMessage:h.e,setTenantDetailsLoad:I.p});t.default=Object(s.a)((function(e){return Object(r.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({},l.C),l.a),l.B),Object(l.f)(e.spacing(4))))}))(z((function(e){var t=e.classes,n=e.tenant,c=e.loadingTenant,i=e.setTenantDetailsLoad,r=Object(o.useState)([]),s=Object(a.a)(r,2),l=s[0],h=s[1],p=Object(o.useState)(!1),x=Object(a.a)(p,2),O=x[0],f=x[1],g=Object(o.useState)(""),v=Object(a.a)(g,2),C=v[0],y=v[1];Object(o.useEffect)((function(){if(n){var e=n.pools?n.pools:[];h(e)}}),[n]);var w=l.filter((function(e){return!!e.name.toLowerCase().includes(C.toLowerCase())}));return Object(S.jsxs)(o.Fragment,{children:[O&&null!==n&&Object(S.jsx)(N,{open:O,onClosePoolAndReload:function(e){f(!1),e&&i(!0)},tenant:n}),Object(S.jsx)("h1",{className:t.sectionTitle,children:"Pools"}),Object(S.jsxs)(b.a,{container:!0,children:[Object(S.jsxs)(b.a,{item:!0,xs:12,className:t.actionsTray,children:[Object(S.jsx)(d.a,{placeholder:"Filter",className:t.searchField,id:"search-resource",label:"",onChange:function(e){y(e.target.value)},InputProps:{disableUnderline:!0,startAdornment:Object(S.jsx)(k.a,{position:"start",children:Object(S.jsx)(F.default,{})})},variant:"standard"}),Object(S.jsx)(u.a,{variant:"contained",color:"primary",endIcon:Object(S.jsx)(j.d,{}),onClick:function(){f(!0)},children:"Expand Tenant"})]}),Object(S.jsx)(b.a,{item:!0,xs:12,children:Object(S.jsx)("br",{})}),Object(S.jsx)(b.a,{item:!0,xs:12,className:t.tableBlock,children:Object(S.jsx)(m.a,{itemActions:[],columns:[{label:"Name",elementKey:"name"},{label:"Capacity",elementKey:"capacity"},{label:"# of Instances",elementKey:"servers"},{label:"# of Drives",elementKey:"volumes"}],isLoading:c,records:w,entityName:"Servers",idField:"name",customEmptyMessage:"No Pools found"})})]})]})})))}}]);
//# sourceMappingURL=79.5c3dd51c.chunk.js.map