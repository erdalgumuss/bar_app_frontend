(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6169],{12:function(e,t,n){var o,r,a;r=[],void 0!==(a="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){l(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,i=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,n,i){var l=a.URL||a.webkitURL,s=document.createElement("a");n=n||e.name||"download",s.download=n,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?r(s):o(s.href)?t(e,n,i):r(s,s.target="_blank")):(s.href=l.createObjectURL(e),setTimeout(function(){l.revokeObjectURL(s.href)},4e4),setTimeout(function(){r(s)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e){var i;navigator.msSaveOrOpenBlob((void 0===(i=a)?i={autoBom:!1}:"object"!=typeof i&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),n)}else if(o(e))t(e,n,a);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout(function(){r(l)})}}:function(e,n,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var l="application/octet-stream"===e.type,s=/constructor/i.test(a.HTMLElement)||a.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||l&&s||i)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var d=a.URL||a.webkitURL,f=d.createObjectURL(e);r?r.location=f:location.href=f,r=null,setTimeout(function(){d.revokeObjectURL(f)},4e4)}});a.saveAs=l.saveAs=l,e.exports=l})?o.apply(t,r):o)&&(e.exports=a)},32489:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});let o=(0,n(79205).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},49027:function(e,t,n){"use strict";n.d(t,{Dx:function(){return en},VY:function(){return et},aV:function(){return ee},dk:function(){return eo},fC:function(){return J},h_:function(){return $},x8:function(){return er},xz:function(){return Q}});var o=n(2265),r=n(6741),a=n(98575),i=n(73966),l=n(99255),s=n(80886),u=n(15278),c=n(99103),d=n(83832),f=n(71599),p=n(66840),v=n(86097),g=n(99157),m=n(5478),b=n(37053),w=n(57437),h="Dialog",[y,x]=(0,i.b)(h),[R,D]=y(h),j=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:i,modal:u=!0}=e,c=o.useRef(null),d=o.useRef(null),[f=!1,p]=(0,s.T)({prop:r,defaultProp:a,onChange:i});return(0,w.jsx)(R,{scope:t,triggerRef:c,contentRef:d,contentId:(0,l.M)(),titleId:(0,l.M)(),descriptionId:(0,l.M)(),open:f,onOpenChange:p,onOpenToggle:o.useCallback(()=>p(e=>!e),[p]),modal:u,children:n})};j.displayName=h;var M="DialogTrigger",E=o.forwardRef((e,t)=>{let{__scopeDialog:n,...o}=e,i=D(M,n),l=(0,a.e)(t,i.triggerRef);return(0,w.jsx)(p.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":H(i.open),...o,ref:l,onClick:(0,r.M)(e.onClick,i.onOpenToggle)})});E.displayName=M;var C="DialogPortal",[F,I]=y(C,{forceMount:void 0}),A=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:a}=e,i=D(C,t);return(0,w.jsx)(F,{scope:t,forceMount:n,children:o.Children.map(r,e=>(0,w.jsx)(f.z,{present:n||i.open,children:(0,w.jsx)(d.h,{asChild:!0,container:a,children:e})}))})};A.displayName=C;var k="DialogOverlay",T=o.forwardRef((e,t)=>{let n=I(k,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,a=D(k,e.__scopeDialog);return a.modal?(0,w.jsx)(f.z,{present:o||a.open,children:(0,w.jsx)(O,{...r,ref:t})}):null});T.displayName=k;var O=o.forwardRef((e,t)=>{let{__scopeDialog:n,...o}=e,r=D(k,n);return(0,w.jsx)(g.Z,{as:b.g7,allowPinchZoom:!0,shards:[r.contentRef],children:(0,w.jsx)(p.WV.div,{"data-state":H(r.open),...o,ref:t,style:{pointerEvents:"auto",...o.style}})})}),_="DialogContent",N=o.forwardRef((e,t)=>{let n=I(_,e.__scopeDialog),{forceMount:o=n.forceMount,...r}=e,a=D(_,e.__scopeDialog);return(0,w.jsx)(f.z,{present:o||a.open,children:a.modal?(0,w.jsx)(L,{...r,ref:t}):(0,w.jsx)(V,{...r,ref:t})})});N.displayName=_;var L=o.forwardRef((e,t)=>{let n=D(_,e.__scopeDialog),i=o.useRef(null),l=(0,a.e)(t,n.contentRef,i);return o.useEffect(()=>{let e=i.current;if(e)return(0,m.Ry)(e)},[]),(0,w.jsx)(P,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,r.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,r.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,r.M)(e.onFocusOutside,e=>e.preventDefault())})}),V=o.forwardRef((e,t)=>{let n=D(_,e.__scopeDialog),r=o.useRef(!1),a=o.useRef(!1);return(0,w.jsx)(P,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,i;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:t=>{var o,i;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let l=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),P=o.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:l,...s}=e,d=D(_,n),f=o.useRef(null),p=(0,a.e)(t,f);return(0,v.EW)(),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c.M,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:l,children:(0,w.jsx)(u.XB,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":H(d.open),...s,ref:p,onDismiss:()=>d.onOpenChange(!1)})}),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Z,{titleId:d.titleId}),(0,w.jsx)(Y,{contentRef:f,descriptionId:d.descriptionId})]})]})}),S="DialogTitle",W=o.forwardRef((e,t)=>{let{__scopeDialog:n,...o}=e,r=D(S,n);return(0,w.jsx)(p.WV.h2,{id:r.titleId,...o,ref:t})});W.displayName=S;var B="DialogDescription",U=o.forwardRef((e,t)=>{let{__scopeDialog:n,...o}=e,r=D(B,n);return(0,w.jsx)(p.WV.p,{id:r.descriptionId,...o,ref:t})});U.displayName=B;var K="DialogClose",z=o.forwardRef((e,t)=>{let{__scopeDialog:n,...o}=e,a=D(K,n);return(0,w.jsx)(p.WV.button,{type:"button",...o,ref:t,onClick:(0,r.M)(e.onClick,()=>a.onOpenChange(!1))})});function H(e){return e?"open":"closed"}z.displayName=K;var G="DialogTitleWarning",[q,X]=(0,i.k)(G,{contentName:_,titleName:S,docsSlug:"dialog"}),Z=e=>{let{titleId:t}=e,n=X(G),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return o.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},Y=e=>{let{contentRef:t,descriptionId:n}=e,r=X("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return o.useEffect(()=>{var e;let o=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&o&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},J=j,Q=E,$=A,ee=T,et=N,en=W,eo=U,er=z},1353:function(e,t,n){"use strict";n.d(t,{Pc:function(){return x},ck:function(){return k},fC:function(){return A}});var o=n(2265),r=n(6741),a=n(67822),i=n(98575),l=n(73966),s=n(99255),u=n(66840),c=n(26606),d=n(80886),f=n(29114),p=n(57437),v="rovingFocusGroup.onEntryFocus",g={bubbles:!1,cancelable:!0},m="RovingFocusGroup",[b,w,h]=(0,a.B)(m),[y,x]=(0,l.b)(m,[h]),[R,D]=y(m),j=o.forwardRef((e,t)=>(0,p.jsx)(b.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(b.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(M,{...e,ref:t})})}));j.displayName=m;var M=o.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:a,loop:l=!1,dir:s,currentTabStopId:m,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:h,onEntryFocus:y,preventScrollOnEntryFocus:x=!1,...D}=e,j=o.useRef(null),M=(0,i.e)(t,j),E=(0,f.gm)(s),[C=null,F]=(0,d.T)({prop:m,defaultProp:b,onChange:h}),[A,k]=o.useState(!1),T=(0,c.W)(y),O=w(n),_=o.useRef(!1),[N,L]=o.useState(0);return o.useEffect(()=>{let e=j.current;if(e)return e.addEventListener(v,T),()=>e.removeEventListener(v,T)},[T]),(0,p.jsx)(R,{scope:n,orientation:a,dir:E,loop:l,currentTabStopId:C,onItemFocus:o.useCallback(e=>F(e),[F]),onItemShiftTab:o.useCallback(()=>k(!0),[]),onFocusableItemAdd:o.useCallback(()=>L(e=>e+1),[]),onFocusableItemRemove:o.useCallback(()=>L(e=>e-1),[]),children:(0,p.jsx)(u.WV.div,{tabIndex:A||0===N?-1:0,"data-orientation":a,...D,ref:M,style:{outline:"none",...e.style},onMouseDown:(0,r.M)(e.onMouseDown,()=>{_.current=!0}),onFocus:(0,r.M)(e.onFocus,e=>{let t=!_.current;if(e.target===e.currentTarget&&t&&!A){let t=new CustomEvent(v,g);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=O().filter(e=>e.focusable);I([e.find(e=>e.active),e.find(e=>e.id===C),...e].filter(Boolean).map(e=>e.ref.current),x)}}_.current=!1}),onBlur:(0,r.M)(e.onBlur,()=>k(!1))})})}),E="RovingFocusGroupItem",C=o.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:a=!0,active:i=!1,tabStopId:l,...c}=e,d=(0,s.M)(),f=l||d,v=D(E,n),g=v.currentTabStopId===f,m=w(n),{onFocusableItemAdd:h,onFocusableItemRemove:y}=v;return o.useEffect(()=>{if(a)return h(),()=>y()},[a,h,y]),(0,p.jsx)(b.ItemSlot,{scope:n,id:f,focusable:a,active:i,children:(0,p.jsx)(u.WV.span,{tabIndex:g?0:-1,"data-orientation":v.orientation,...c,ref:t,onMouseDown:(0,r.M)(e.onMouseDown,e=>{a?v.onItemFocus(f):e.preventDefault()}),onFocus:(0,r.M)(e.onFocus,()=>v.onItemFocus(f)),onKeyDown:(0,r.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var o;let r=(o=e.key,"rtl"!==n?o:"ArrowLeft"===o?"ArrowRight":"ArrowRight"===o?"ArrowLeft":o);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(r))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(r)))return F[r]}(e,v.orientation,v.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=m().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){var n,o;"prev"===t&&r.reverse();let a=r.indexOf(e.currentTarget);r=v.loop?(n=r,o=a+1,n.map((e,t)=>n[(o+t)%n.length])):r.slice(a+1)}setTimeout(()=>I(r))}})})})});C.displayName=E;var F={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function I(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement;for(let o of e)if(o===n||(o.focus({preventScroll:t}),document.activeElement!==n))return}var A=j,k=C},20271:function(e,t,n){"use strict";n.d(t,{VY:function(){return k},aV:function(){return I},fC:function(){return F},xz:function(){return A}});var o=n(2265),r=n(6741),a=n(73966),i=n(1353),l=n(71599),s=n(66840),u=n(29114),c=n(80886),d=n(99255),f=n(57437),p="Tabs",[v,g]=(0,a.b)(p,[i.Pc]),m=(0,i.Pc)(),[b,w]=v(p),h=o.forwardRef((e,t)=>{let{__scopeTabs:n,value:o,onValueChange:r,defaultValue:a,orientation:i="horizontal",dir:l,activationMode:p="automatic",...v}=e,g=(0,u.gm)(l),[m,w]=(0,c.T)({prop:o,onChange:r,defaultProp:a});return(0,f.jsx)(b,{scope:n,baseId:(0,d.M)(),value:m,onValueChange:w,orientation:i,dir:g,activationMode:p,children:(0,f.jsx)(s.WV.div,{dir:g,"data-orientation":i,...v,ref:t})})});h.displayName=p;var y="TabsList",x=o.forwardRef((e,t)=>{let{__scopeTabs:n,loop:o=!0,...r}=e,a=w(y,n),l=m(n);return(0,f.jsx)(i.fC,{asChild:!0,...l,orientation:a.orientation,dir:a.dir,loop:o,children:(0,f.jsx)(s.WV.div,{role:"tablist","aria-orientation":a.orientation,...r,ref:t})})});x.displayName=y;var R="TabsTrigger",D=o.forwardRef((e,t)=>{let{__scopeTabs:n,value:o,disabled:a=!1,...l}=e,u=w(R,n),c=m(n),d=E(u.baseId,o),p=C(u.baseId,o),v=o===u.value;return(0,f.jsx)(i.ck,{asChild:!0,...c,focusable:!a,active:v,children:(0,f.jsx)(s.WV.button,{type:"button",role:"tab","aria-selected":v,"aria-controls":p,"data-state":v?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:d,...l,ref:t,onMouseDown:(0,r.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():u.onValueChange(o)}),onKeyDown:(0,r.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&u.onValueChange(o)}),onFocus:(0,r.M)(e.onFocus,()=>{let e="manual"!==u.activationMode;v||a||!e||u.onValueChange(o)})})})});D.displayName=R;var j="TabsContent",M=o.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,forceMount:a,children:i,...u}=e,c=w(j,n),d=E(c.baseId,r),p=C(c.baseId,r),v=r===c.value,g=o.useRef(v);return o.useEffect(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,f.jsx)(l.z,{present:a||v,children:n=>{let{present:o}=n;return(0,f.jsx)(s.WV.div,{"data-state":v?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":d,hidden:!o,id:p,tabIndex:0,...u,ref:t,style:{...e.style,animationDuration:g.current?"0s":void 0},children:o&&i})}})});function E(e,t){return"".concat(e,"-trigger-").concat(t)}function C(e,t){return"".concat(e,"-content-").concat(t)}M.displayName=j;var F=h,I=x,A=D,k=M}}]);