"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3036,2430],{32489:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(79205).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},77031:function(e,t,n){n.d(t,{v:function(){return u}});var r=n(93765),o=n(31699),a=n(97059),i=n(62994),l=n(25311),u=(0,r.z)({chartName:"BarChart",GraphicalChild:o.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:a.K},{axisType:"yAxis",AxisComp:i.B}],formatAxisMap:l.t9})},49027:function(e,t,n){n.d(t,{Dx:function(){return en},VY:function(){return et},aV:function(){return ee},dk:function(){return er},fC:function(){return $},h_:function(){return Q},x8:function(){return eo},xz:function(){return J}});var r=n(2265),o=n(6741),a=n(98575),i=n(73966),l=n(99255),u=n(80886),s=n(15278),c=n(99103),d=n(83832),f=n(71599),p=n(66840),v=n(86097),g=n(99157),b=n(5478),m=n(37053),h=n(57437),x="Dialog",[y,w]=(0,i.b)(x),[D,j]=y(x),C=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:a,onOpenChange:i,modal:s=!0}=e,c=r.useRef(null),d=r.useRef(null),[f=!1,p]=(0,u.T)({prop:o,defaultProp:a,onChange:i});return(0,h.jsx)(D,{scope:t,triggerRef:c,contentRef:d,contentId:(0,l.M)(),titleId:(0,l.M)(),descriptionId:(0,l.M)(),open:f,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:s,children:n})};C.displayName=x;var R="DialogTrigger",I=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=j(R,n),l=(0,a.e)(t,i.triggerRef);return(0,h.jsx)(p.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":U(i.open),...r,ref:l,onClick:(0,o.M)(e.onClick,i.onOpenToggle)})});I.displayName=R;var M="DialogPortal",[F,E]=y(M,{forceMount:void 0}),T=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:a}=e,i=j(M,t);return(0,h.jsx)(F,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,h.jsx)(f.z,{present:n||i.open,children:(0,h.jsx)(d.h,{asChild:!0,container:a,children:e})}))})};T.displayName=M;var A="DialogOverlay",N=r.forwardRef((e,t)=>{let n=E(A,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=j(A,e.__scopeDialog);return a.modal?(0,h.jsx)(f.z,{present:r||a.open,children:(0,h.jsx)(k,{...o,ref:t})}):null});N.displayName=A;var k=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=j(A,n);return(0,h.jsx)(g.Z,{as:m.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,h.jsx)(p.WV.div,{"data-state":U(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),V="DialogContent",_=r.forwardRef((e,t)=>{let n=E(V,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=j(V,e.__scopeDialog);return(0,h.jsx)(f.z,{present:r||a.open,children:a.modal?(0,h.jsx)(P,{...o,ref:t}):(0,h.jsx)(O,{...o,ref:t})})});_.displayName=V;var P=r.forwardRef((e,t)=>{let n=j(V,e.__scopeDialog),i=r.useRef(null),l=(0,a.e)(t,n.contentRef,i);return r.useEffect(()=>{let e=i.current;if(e)return(0,b.Ry)(e)},[]),(0,h.jsx)(W,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault())})}),O=r.forwardRef((e,t)=>{let n=j(V,e.__scopeDialog),o=r.useRef(!1),a=r.useRef(!1);return(0,h.jsx)(W,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let l=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),W=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:l,...u}=e,d=j(V,n),f=r.useRef(null),p=(0,a.e)(t,f);return(0,v.EW)(),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.M,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:l,children:(0,h.jsx)(s.XB,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":U(d.open),...u,ref:p,onDismiss:()=>d.onOpenChange(!1)})}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(X,{titleId:d.titleId}),(0,h.jsx)(Y,{contentRef:f,descriptionId:d.descriptionId})]})]})}),S="DialogTitle",K=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=j(S,n);return(0,h.jsx)(p.WV.h2,{id:o.titleId,...r,ref:t})});K.displayName=S;var z="DialogDescription",B=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=j(z,n);return(0,h.jsx)(p.WV.p,{id:o.descriptionId,...r,ref:t})});B.displayName=z;var L="DialogClose",G=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=j(L,n);return(0,h.jsx)(p.WV.button,{type:"button",...r,ref:t,onClick:(0,o.M)(e.onClick,()=>a.onOpenChange(!1))})});function U(e){return e?"open":"closed"}G.displayName=L;var Z="DialogTitleWarning",[q,H]=(0,i.k)(Z,{contentName:V,titleName:S,docsSlug:"dialog"}),X=e=>{let{titleId:t}=e,n=H(Z),o="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return r.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},Y=e=>{let{contentRef:t,descriptionId:n}=e,o=H("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return r.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},$=C,J=I,Q=T,ee=N,et=_,en=K,er=B,eo=G},6394:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(2265),o=n(66840),a=n(57437),i=r.forwardRef((e,t)=>(0,a.jsx)(o.WV.label,{...e,ref:t,onMouseDown:t=>{var n;t.target.closest("button, input, select, textarea")||(null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var l=i},1353:function(e,t,n){n.d(t,{Pc:function(){return w},ck:function(){return A},fC:function(){return T}});var r=n(2265),o=n(6741),a=n(67822),i=n(98575),l=n(73966),u=n(99255),s=n(66840),c=n(26606),d=n(80886),f=n(29114),p=n(57437),v="rovingFocusGroup.onEntryFocus",g={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[m,h,x]=(0,a.B)(b),[y,w]=(0,l.b)(b,[x]),[D,j]=y(b),C=r.forwardRef((e,t)=>(0,p.jsx)(m.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(m.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(R,{...e,ref:t})})}));C.displayName=b;var R=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:a,loop:l=!1,dir:u,currentTabStopId:b,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:x,onEntryFocus:y,preventScrollOnEntryFocus:w=!1,...j}=e,C=r.useRef(null),R=(0,i.e)(t,C),I=(0,f.gm)(u),[M=null,F]=(0,d.T)({prop:b,defaultProp:m,onChange:x}),[T,A]=r.useState(!1),N=(0,c.W)(y),k=h(n),V=r.useRef(!1),[_,P]=r.useState(0);return r.useEffect(()=>{let e=C.current;if(e)return e.addEventListener(v,N),()=>e.removeEventListener(v,N)},[N]),(0,p.jsx)(D,{scope:n,orientation:a,dir:I,loop:l,currentTabStopId:M,onItemFocus:r.useCallback(e=>F(e),[F]),onItemShiftTab:r.useCallback(()=>A(!0),[]),onFocusableItemAdd:r.useCallback(()=>P(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>P(e=>e-1),[]),children:(0,p.jsx)(s.WV.div,{tabIndex:T||0===_?-1:0,"data-orientation":a,...j,ref:R,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{V.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!V.current;if(e.target===e.currentTarget&&t&&!T){let t=new CustomEvent(v,g);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=k().filter(e=>e.focusable);E([e.find(e=>e.active),e.find(e=>e.id===M),...e].filter(Boolean).map(e=>e.ref.current),w)}}V.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>A(!1))})})}),I="RovingFocusGroupItem",M=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:a=!0,active:i=!1,tabStopId:l,...c}=e,d=(0,u.M)(),f=l||d,v=j(I,n),g=v.currentTabStopId===f,b=h(n),{onFocusableItemAdd:x,onFocusableItemRemove:y}=v;return r.useEffect(()=>{if(a)return x(),()=>y()},[a,x,y]),(0,p.jsx)(m.ItemSlot,{scope:n,id:f,focusable:a,active:i,children:(0,p.jsx)(s.WV.span,{tabIndex:g?0:-1,"data-orientation":v.orientation,...c,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a?v.onItemFocus(f):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>v.onItemFocus(f)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return F[o]}(e,v.orientation,v.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=b().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=v.loop?(n=o,r=a+1,n.map((e,t)=>n[(r+t)%n.length])):o.slice(a+1)}setTimeout(()=>E(o))}})})})});M.displayName=I;var F={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function E(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}var T=C,A=M},20271:function(e,t,n){n.d(t,{VY:function(){return A},aV:function(){return E},fC:function(){return F},xz:function(){return T}});var r=n(2265),o=n(6741),a=n(73966),i=n(1353),l=n(71599),u=n(66840),s=n(29114),c=n(80886),d=n(99255),f=n(57437),p="Tabs",[v,g]=(0,a.b)(p,[i.Pc]),b=(0,i.Pc)(),[m,h]=v(p),x=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:o,defaultValue:a,orientation:i="horizontal",dir:l,activationMode:p="automatic",...v}=e,g=(0,s.gm)(l),[b,h]=(0,c.T)({prop:r,onChange:o,defaultProp:a});return(0,f.jsx)(m,{scope:n,baseId:(0,d.M)(),value:b,onValueChange:h,orientation:i,dir:g,activationMode:p,children:(0,f.jsx)(u.WV.div,{dir:g,"data-orientation":i,...v,ref:t})})});x.displayName=p;var y="TabsList",w=r.forwardRef((e,t)=>{let{__scopeTabs:n,loop:r=!0,...o}=e,a=h(y,n),l=b(n);return(0,f.jsx)(i.fC,{asChild:!0,...l,orientation:a.orientation,dir:a.dir,loop:r,children:(0,f.jsx)(u.WV.div,{role:"tablist","aria-orientation":a.orientation,...o,ref:t})})});w.displayName=y;var D="TabsTrigger",j=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,disabled:a=!1,...l}=e,s=h(D,n),c=b(n),d=I(s.baseId,r),p=M(s.baseId,r),v=r===s.value;return(0,f.jsx)(i.ck,{asChild:!0,...c,focusable:!a,active:v,children:(0,f.jsx)(u.WV.button,{type:"button",role:"tab","aria-selected":v,"aria-controls":p,"data-state":v?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:d,...l,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():s.onValueChange(r)}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&s.onValueChange(r)}),onFocus:(0,o.M)(e.onFocus,()=>{let e="manual"!==s.activationMode;v||a||!e||s.onValueChange(r)})})})});j.displayName=D;var C="TabsContent",R=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:o,forceMount:a,children:i,...s}=e,c=h(C,n),d=I(c.baseId,o),p=M(c.baseId,o),v=o===c.value,g=r.useRef(v);return r.useEffect(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,f.jsx)(l.z,{present:a||v,children:n=>{let{present:r}=n;return(0,f.jsx)(u.WV.div,{"data-state":v?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":d,hidden:!r,id:p,tabIndex:0,...s,ref:t,style:{...e.style,animationDuration:g.current?"0s":void 0},children:r&&i})}})});function I(e,t){return"".concat(e,"-trigger-").concat(t)}function M(e,t){return"".concat(e,"-content-").concat(t)}R.displayName=C;var F=x,E=w,T=j,A=R},3011:function(e,t,n){n.d(t,{U:function(){return u}});var r=n(2265);let o=e=>{let t;let n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,a={setState:r,getState:o,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e))},i=t=e(r,o,a);return a},a=e=>e?o(e):o,i=e=>e,l=e=>{let t=a(e),n=e=>(function(e,t=i){let n=r.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return r.useDebugValue(n),n})(t,e);return Object.assign(n,t),n},u=e=>e?l(e):l}}]);