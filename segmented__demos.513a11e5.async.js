"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4806],{260750:function(E,l,t){t.d(l,{Z:function(){return X}});var u=t(9783),e=t.n(u),i=t(97857),a=t.n(i),d=t(805574),o=t.n(d),c=t(513769),g=t.n(c),v=t(952677),P=t.n(v),O=t(294184),T=t.n(O),A=t(466940),y=t(667294),W=t(73287),B=t(947170),C=t(548073),L=t(141035),I=t(986943);function R(s,n){return e()({},"".concat(s,", ").concat(s,":hover, ").concat(s,":focus"),{color:n.colorTextDisabled,cursor:"not-allowed"})}function S(s){return{backgroundColor:s.itemSelectedBg,boxShadow:s.boxShadowTertiary}}var K=a()({overflow:"hidden"},C.vS),Q=function(n){var _,M,D,m,r=n.componentCls;return e()({},r,a()(a()(a()(a()({},(0,C.Wf)(n)),{},(m={display:"inline-block",padding:n.segmentedPadding,color:n.itemColor,backgroundColor:n.segmentedBgColor,borderRadius:n.borderRadius,transition:"all ".concat(n.motionDurationMid," ").concat(n.motionEaseInOut)},e()(m,"".concat(r,"-group"),{position:"relative",display:"flex",alignItems:"stretch",justifyItems:"flex-start",width:"100%"}),e()(m,"&".concat(r,"-rtl"),{direction:"rtl"}),e()(m,"&".concat(r,"-block"),{display:"flex"}),e()(m,"&".concat(r,"-block ").concat(r,"-item"),{flex:1,minWidth:0}),e()(m,"".concat(r,"-item"),(_={position:"relative",textAlign:"center",cursor:"pointer",transition:"color ".concat(n.motionDurationMid," ").concat(n.motionEaseInOut),borderRadius:n.borderRadiusSM,"&-selected":a()(a()({},S(n)),{},{color:n.itemHoverColor}),"&::after":{content:'""',position:"absolute",width:"100%",height:"100%",top:0,insetInlineStart:0,borderRadius:"inherit",transition:"background-color ".concat(n.motionDurationMid),pointerEvents:"none"}},e()(_,"&:hover:not(".concat(r,"-item-selected):not(").concat(r,"-item-disabled)"),{color:n.itemHoverColor,"&::after":{backgroundColor:n.itemHoverBg}}),e()(_,"&:active:not(".concat(r,"-item-selected):not(").concat(r,"-item-disabled)"),{color:n.itemHoverColor,"&::after":{backgroundColor:n.itemActiveBg}}),e()(_,"&-label",a()({minHeight:n.controlHeight-n.segmentedPadding*2,lineHeight:"".concat(n.controlHeight-n.segmentedPadding*2,"px"),padding:"0 ".concat(n.segmentedPaddingHorizontal,"px")},K)),e()(_,"&-icon + *",{marginInlineStart:n.marginSM/2}),e()(_,"&-input",{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:0,opacity:0,pointerEvents:"none"}),_)),e()(m,"".concat(r,"-thumb"),a()(a()({},S(n)),{},e()({position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:"100%",padding:"".concat(n.paddingXXS,"px 0"),borderRadius:n.borderRadiusSM},"& ~ ".concat(r,"-item:not(").concat(r,"-item-selected):not(").concat(r,"-item-disabled)::after"),{backgroundColor:"transparent"}))),e()(m,"&".concat(r,"-lg"),(M={borderRadius:n.borderRadiusLG},e()(M,"".concat(r,"-item-label"),{minHeight:n.controlHeightLG-n.segmentedPadding*2,lineHeight:"".concat(n.controlHeightLG-n.segmentedPadding*2,"px"),padding:"0 ".concat(n.segmentedPaddingHorizontal,"px"),fontSize:n.fontSizeLG}),e()(M,"".concat(r,"-item, ").concat(r,"-thumb"),{borderRadius:n.borderRadius}),M)),e()(m,"&".concat(r,"-sm"),(D={borderRadius:n.borderRadiusSM},e()(D,"".concat(r,"-item-label"),{minHeight:n.controlHeightSM-n.segmentedPadding*2,lineHeight:"".concat(n.controlHeightSM-n.segmentedPadding*2,"px"),padding:"0 ".concat(n.segmentedPaddingHorizontalSM,"px")}),e()(D,"".concat(r,"-item, ").concat(r,"-thumb"),{borderRadius:n.borderRadiusXS}),D)),m),R("&-disabled ".concat(r,"-item"),n)),R("".concat(r,"-item-disabled"),n)),{},e()({},"".concat(r,"-thumb-motion-appear-active"),{transition:"transform ".concat(n.motionDurationSlow," ").concat(n.motionEaseInOut,", width ").concat(n.motionDurationSlow," ").concat(n.motionEaseInOut),willChange:"transform, width"})))},F=(0,L.Z)("Segmented",function(s){var n=s.lineWidth,_=s.lineWidthBold,M=s.colorBgLayout,D=(0,I.TS)(s,{segmentedPadding:_,segmentedBgColor:M,segmentedPaddingHorizontal:s.controlPaddingHorizontal-n,segmentedPaddingHorizontalSM:s.controlPaddingHorizontalSM-n});return[Q(D)]},function(s){var n=s.colorTextLabel,_=s.colorText,M=s.colorFillSecondary,D=s.colorBgElevated,m=s.colorFill;return{itemColor:n,itemHoverColor:_,itemHoverBg:M,itemSelectedBg:D,itemActiveBg:m}}),j=t(785893),Y=["prefixCls","className","rootClassName","block","options","size","style"],$=["icon","label"];function G(s){return P()(s)==="object"&&!!(s!=null&&s.icon)}var J=y.forwardRef(function(s,n){var _,M=s.prefixCls,D=s.className,m=s.rootClassName,r=s.block,Z=s.options,b=Z===void 0?[]:Z,p=s.size,V=p===void 0?"middle":p,w=s.style,q=g()(s,Y),U=y.useContext(W.E_),k=U.getPrefixCls,tt=U.direction,x=U.segmented,h=k("segmented",M),nt=F(h),H=o()(nt,2),et=H[0],at=H[1],z=(0,B.Z)(V),ot=y.useMemo(function(){return b.map(function(f){if(G(f)){var it=f.icon,N=f.label,dt=g()(f,$);return a()(a()({},dt),{},{label:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:"".concat(h,"-item-icon"),children:it}),N&&(0,j.jsx)("span",{children:N})]})})}return f})},[b,h]),lt=T()(D,m,x==null?void 0:x.className,(_={},e()(_,"".concat(h,"-block"),r),e()(_,"".concat(h,"-sm"),z==="small"),e()(_,"".concat(h,"-lg"),z==="large"),_),at),st=a()(a()({},x==null?void 0:x.style),w);return et((0,j.jsx)(A.Z,a()(a()({},q),{},{className:lt,style:st,options:ot,ref:n,prefixCls:h,direction:tt})))}),X=J},629785:function(E,l,t){t.r(l);var u=t(667294),e=t(260750),i=t(785893);l.default=function(){return(0,i.jsx)(e.Z,{options:["Daily","Weekly","Monthly","Quarterly","Yearly"]})}},355633:function(E,l,t){t.r(l);var u=t(667294),e=t(260750),i=t(785893);l.default=function(){return(0,i.jsx)(e.Z,{block:!0,options:[123,456,"longtext-longtext-longtext-longtext"]})}},599233:function(E,l,t){t.r(l);var u=t(667294),e=t(634577),i=t(260750),a=t(785893);l.default=function(){return(0,a.jsx)(e.ZP,{theme:{components:{Segmented:{itemColor:"#222",itemHoverColor:"#333",itemHoverBg:"rgba(0, 0, 0, 0.06)",itemSelectedBg:"#aaa",itemActiveBg:"#ccc"}}},children:(0,a.jsx)(i.Z,{options:["Daily","Weekly","Monthly","Quarterly","Yearly"]})})}},769221:function(E,l,t){t.r(l);var u=t(805574),e=t.n(u),i=t(667294),a=t(260750),d=t(785893),o=function(){var g=(0,i.useState)("AND"),v=e()(g,2),P=v[0],O=v[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{value:P,options:["AND","OR","NOT"],onChange:O}),"\xA0\xA0",(0,d.jsx)(a.Z,{value:P,options:["AND","OR","NOT"],onChange:O})]})};l.default=o},55056:function(E,l,t){t.r(l);var u=t(805574),e=t.n(u),i=t(667294),a=t(260750),d=t(785893),o=function(){var g=(0,i.useState)("Map"),v=e()(g,2),P=v[0],O=v[1];return(0,d.jsx)(a.Z,{options:["Map","Transit","Satellite"],value:P,onChange:O})};l.default=o},763415:function(E,l,t){t.r(l);var u=t(667294),e=t(829177),i=t(945016),a=t(260750),d=t(796586),o=t(785893),c=function(){return(0,o.jsxs)(i.Z,{direction:"vertical",children:[(0,o.jsx)(a.Z,{options:[{label:(0,o.jsxs)("div",{style:{padding:4},children:[(0,o.jsx)(d.C,{src:"https://xsgames.co/randomusers/avatar.php?g=pixel"}),(0,o.jsx)("div",{children:"User 1"})]}),value:"user1"},{label:(0,o.jsxs)("div",{style:{padding:4},children:[(0,o.jsx)(d.C,{style:{backgroundColor:"#f56a00"},children:"K"}),(0,o.jsx)("div",{children:"User 2"})]}),value:"user2"},{label:(0,o.jsxs)("div",{style:{padding:4},children:[(0,o.jsx)(d.C,{style:{backgroundColor:"#87d068"},icon:(0,o.jsx)(e.Z,{})}),(0,o.jsx)("div",{children:"User 3"})]}),value:"user3"}]}),(0,o.jsx)(a.Z,{options:[{label:(0,o.jsxs)("div",{style:{padding:4},children:[(0,o.jsx)("div",{children:"Spring"}),(0,o.jsx)("div",{children:"Jan-Mar"})]}),value:"spring"},{label:(0,o.jsxs)("div",{style:{padding:4},children:[(0,o.jsx)("div",{children:"Summer"}),(0,o.jsx)("div",{children:"Apr-Jun"})]}),value:"summer"},{label:(0,o.jsxs)("div",{style:{padding:4},children:[(0,o.jsx)("div",{children:"Autumn"}),(0,o.jsx)("div",{children:"Jul-Sept"})]}),value:"autumn"},{label:(0,o.jsxs)("div",{style:{padding:4},children:[(0,o.jsx)("div",{children:"Winter"}),(0,o.jsx)("div",{children:"Oct-Dec"})]}),value:"winter"}]})]})};l.default=c},266463:function(E,l,t){t.r(l);var u=t(667294),e=t(945016),i=t(260750),a=t(785893),d=function(){return(0,a.jsxs)(e.Z,{direction:"vertical",children:[(0,a.jsx)(i.Z,{options:["Map","Transit","Satellite"],disabled:!0}),(0,a.jsx)(i.Z,{options:["Daily",{label:"Weekly",value:"Weekly",disabled:!0},"Monthly",{label:"Quarterly",value:"Quarterly",disabled:!0},"Yearly"]})]})};l.default=d},479515:function(E,l,t){t.r(l);var u=t(719632),e=t.n(u),i=t(805574),a=t.n(i),d=t(667294),o=t(945016),c=t(260750),g=t(905303),v=t(785893),P=function(){var T=(0,d.useState)(["Daily","Weekly","Monthly"]),A=a()(T,2),y=A[0],W=A[1],B=(0,d.useState)(!1),C=a()(B,2),L=C[0],I=C[1],R=function(){W(function(K){return[].concat(e()(K),["Quarterly","Yearly"])}),I(!0)};return(0,v.jsxs)(o.Z,{direction:"vertical",children:[(0,v.jsx)(c.Z,{options:y}),(0,v.jsx)(g.ZP,{type:"primary",disabled:L,onClick:R,children:"Load more options"})]})};l.default=P},807529:function(E,l,t){t.r(l);var u=t(667294),e=t(314361),i=t(650737),a=t(260750),d=t(785893);l.default=function(){return(0,d.jsx)(a.Z,{options:[{value:"List",icon:(0,d.jsx)(e.Z,{})},{value:"Kanban",icon:(0,d.jsx)(i.Z,{})}]})}},116389:function(E,l,t){t.r(l);var u=t(667294),e=t(945016),i=t(260750),a=t(905303),d=t(432210),o=t(469181),c=t(785893),g=function(){return(0,c.jsxs)(e.Z,{direction:"vertical",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(i.Z,{style:{marginRight:6},size:"large",options:["Daily","Weekly","Monthly"]}),(0,c.jsx)(a.ZP,{type:"primary",size:"large",children:"Button"})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(i.Z,{style:{marginRight:6},options:["Daily","Weekly","Monthly"]}),(0,c.jsx)(d.Z,{placeholder:"default size",style:{width:150}})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(i.Z,{style:{marginRight:6},size:"small",options:["Daily","Weekly","Monthly"]}),(0,c.jsx)(o.Z,{size:"small",defaultValue:"lucy",style:{width:150},children:(0,c.jsx)(o.Z.Option,{value:"lucy",children:"Lucy"})})]})]})};l.default=g},911763:function(E,l,t){t.r(l);var u=t(667294),e=t(945016),i=t(260750),a=t(785893),d=function(){return(0,a.jsxs)(e.Z,{direction:"vertical",children:[(0,a.jsx)(i.Z,{size:"large",options:["Daily","Weekly","Monthly","Quarterly","Yearly"]}),(0,a.jsx)(i.Z,{options:["Daily","Weekly","Monthly","Quarterly","Yearly"]}),(0,a.jsx)(i.Z,{size:"small",options:["Daily","Weekly","Monthly","Quarterly","Yearly"]})]})};l.default=d},403218:function(E,l,t){t.r(l);var u=t(667294),e=t(314361),i=t(650737),a=t(260750),d=t(785893);l.default=function(){return(0,d.jsx)(a.Z,{options:[{label:"List",value:"List",icon:(0,d.jsx)(e.Z,{})},{label:"Kanban",value:"Kanban",icon:(0,d.jsx)(i.Z,{})}]})}}}]);
