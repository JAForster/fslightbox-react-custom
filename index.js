(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>Re});const n=require("prop-types");var r=e.n(n);const o=require("react");var i=e.n(o),s="fslightbox-",a="".concat(s,"styles"),c="".concat(s,"cursor-grabbing"),l="".concat(s,"full-dimension"),u="".concat(s,"flex-centered"),d="".concat(s,"open"),f="".concat(s,"transform-transition"),p="".concat(s,"absoluted"),h="".concat(s,"fade-in"),g="".concat(s,"fade-out"),m=h+"-strong",v=g+"-strong",b="".concat(s,"opacity-1"),x="".concat(s,"source"),y="".concat(x,"-inner");const S=function(e){var t=e.size,n=e.viewBox,r=e.d;return i().createElement("svg",{width:t,height:t,viewBox:n,xmlns:"http://www.w3.org/2000/svg"},i().createElement("path",{className:"".concat(s,"svg-path"),d:r}))},w=function(e){var t=e.onClick,n=e.viewBox,r=e.size,o=e.d,a=e.title;return i().createElement("div",{onClick:t,className:"".concat(s,"toolbar-button ").concat(u),title:a},i().createElement(S,{viewBox:n,size:r,d:o}))};function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const A=function(e){var t,n,r=e.fsLightbox,s=r.componentsServices.toolbarButtons.fullscreen,a=r.core.fullscreenToggler,c=a.enterFullscreen,l=a.exitFullscreen,u=(t=(0,o.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=u[0],f=u[1];return s.get=function(){return d},s.set=f,i().createElement(w,{onClick:function(){d?l():c()},viewBox:d?"0 0 950 1024":"0 0 18 18",size:d?"24px":"20px",d:d?"M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z":"M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",title:d?"Exit fullscreen":"Enter fullscreen"})},E=function(e){var t=e.fsLightbox.core.lightboxCloser.closeLightbox;return i().createElement(w,{onClick:t,viewBox:"0 0 24 24",size:"20px",d:"M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",title:"Close"})},I=function(e){var t=e.fsLightbox;return i().createElement("div",{className:"".concat(s,"toolbar")},i().createElement(A,{fsLightbox:t}),i().createElement(E,{fsLightbox:t}))};function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const O=function(e){var t,n,r=e.fsLightbox,a=r.componentsServices,c=r.props.sources,l=r.stageIndexes,u=(t=(0,o.useState)(l.current+1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=u[0],f=u[1];a.setSlideNumber=function(e){f(e)};var p=i().createRef(),h=i().createRef();return(0,o.useEffect)((function(){var e;(null===(e=h.current)||void 0===e?void 0:e.offsetWidth)>55&&(p.current.style.justifyContent="flex-start")}),[]),i().createElement("div",{ref:p,className:"".concat(s,"slide-number-container")},i().createElement("div",{ref:h,className:"fslightbox-flex-centered"},i().createElement("span",null,d),i().createElement("span",{className:"".concat(s,"slash")}),i().createElement("span",null,c.length)))},F=function(e){var t=e.fsLightbox;return i().createElement("div",{className:"".concat(s,"nav")},i().createElement(I,{fsLightbox:t}),t.props.sources.length>1&&i().createElement(O,{fsLightbox:t}))};function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const z=function(e){var t,n,r=e.fsLightbox.componentsServices,a=(t=(0,o.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],u=a[1];return r.showSlideSwipingHovererIfNotYet=function(){c||u(!0)},r.hideSlideSwipingHovererIfShown=function(){c&&u(!1)},c&&i().createElement("div",{className:"".concat(s,"slide-swiping-hoverer ").concat(l," ").concat(p)})},M=function(e){var t=e.onClick,n=e.name,r=e.d,o=n.charAt(0).toUpperCase()+n.slice(1),a="".concat(s,"slide-btn");return i().createElement("div",{onClick:t,title:"".concat(o," slide"),className:"".concat(a,"-container ").concat(a,"-").concat(n,"-container")},i().createElement("div",{className:"".concat(a," ").concat(u)},i().createElement(S,{viewBox:"0 0 20 20",size:"20px",d:r})))},j=function(){return i().createElement("div",{className:"".concat(s,"loader")},i().createElement("div",{className:"".concat(s,"loader-child-1")}),i().createElement("div",{className:"".concat(s,"loader-child-2")}),i().createElement("div",{className:"".concat(s,"loader-child-3")}),i().createElement("div",{className:"".concat(s,"loader-child-4")}))};function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const N=function(e){var t=e.fsLightbox,n=t.componentsServices.updateSourceDirectWrapperCollection,r=t.core.stageManager.isSourceInStage,s=t.elements,a=s.sourcesComponents,c=s.sourceAnimationWrappers,l=t.props.loadOnlyCurrentSource,u=t.stageIndexes.current,d=e.i,f=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,o.useState)(!1),2),p=f[0],h=f[1];return n[d]=function(){h(!p)},i().createElement("div",{ref:c[d],className:y},d===u||!l&&r(d)?a[d]:null)};function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const D=function(e){var t=e.fsLightbox,n=e.i,r=t.componentsServices.hideSourceLoaderCollection,s=t.elements.sourceMainWrappers,a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,o.useState)(!1),2),c=a[0],d=a[1];return r[n]=function(){return d(!0)},i().createElement("div",{ref:s[n],className:"".concat(p," ").concat(l," ").concat(u)},!c&&i().createElement(j,null),i().createElement(N,{fsLightbox:t,i:n}))},R=function(e){for(var t=e.fsLightbox,n=t.core.slideSwipingDown.listener,r=t.elements.sourceMainWrappersWrapper,o=t.props.sources,s=[],a=0;a<o.length;a++)s.push(i().createElement(D,{fsLightbox:t,i:a,key:a}));return i().createElement("div",{className:"".concat(p," ").concat(l),onMouseDown:n,onTouchStart:n,ref:r},s)};function H(){var e=document.createElement("style");e.className=a,e.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px!important;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-previous-container{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-previous-container{padding-left:3px}}.fslightbox-slide-btn-next-container{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-next-container{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader .fslightbox-loader-child-1{animation-delay:-.45s}.fslightbox-loader .fslightbox-loader-child-2{animation-delay:-.3s}.fslightbox-loader .fslightbox-loader-child-3{animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0;transform:translateZ(0);margin:auto;backface-visibility:hidden}")),document.head.appendChild(e)}var P="fslightbox-types",U="fslightbox-scrollbar-width";function B(e){var t=e.core.lightboxOpener,n=e.data,r=e.props.openOnMount;document.getElementsByClassName(a).length||H(),n.scrollbarWidth=function(e){var t=e.props.disableLocalStorage;if(!t){var n=localStorage.getItem(U);if(n)return n}var r=function(){var e=document.createElement("div"),t=e.style;return t.visibility="hidden",t.width="100px",t.msOverflowStyle="scrollbar",t.overflow="scroll",e}(),o=function(){var e=document.createElement("div");return e.style.width="100%",e}();document.body.appendChild(r);var i=null==r?void 0:r.offsetWidth;r.appendChild(o);var s=null==o?void 0:o.offsetWidth;document.body.removeChild(r);var a=i-s;return t||localStorage.setItem(U,a.toString()),a}(e),r&&t.initializeAndOpenLightbox()}function X(e){var t,n=e.props,r={},o=0;function i(e){o++,r[e]=!1}this.getSourceTypeFromLocalStorageByUrl=function(e){return t[e]?t[e]:i(e)},this.handleReceivedSourceTypeForUrl=function(e,n){!1===r[n]&&(o--,"invalid"!==e?r[n]=e:delete r[n],0===o&&(function(e,t){for(var n in t)e[n]=t[n]}(t,r),localStorage.setItem(P,JSON.stringify(t))))},n.disableLocalStorage?(this.getSourceTypeFromLocalStorageByUrl=function(){},this.handleReceivedSourceTypeForUrl=function(){}):(t=JSON.parse(localStorage.getItem(P)))||(t={},this.getSourceTypeFromLocalStorageByUrl=i)}var V="image",q="video",_="youtube",Y="custom",$="invalid";function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}const J=function(e){var t=e.fsLightbox,n=t.collections.sourceLoadHandlers,r=t.elements.sources,o=t.props,s=o.customAttributes,a=o.sources,c=e.i;return i().createElement("img",Q({className:x,onLoad:n[c].handleImageLoad,ref:r[c],src:a[c]},s&&s[c]?s[c]:{}))};function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}const Z=function(e){var t=e.fsLightbox,n=t.collections.sourceLoadHandlers,r=t.elements.sources,o=t.props,a=o.customAttributes,c=o.sources,l=t.timeout,u=e.i;return l(n[u].handleNotMetaDatedVideoLoad,3e3),i().createElement("video",G({className:"".concat(x," ").concat(s,"video"),src:c[u],controls:!0,onLoadedMetadata:n[u].handleVideoLoad,ref:r[u]},a&&a[u]?a[u]:{}))};function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}const ee=function(e){var t,n=e.fsLightbox,r=n.elements.sources,a=n.collections.sourceLoadHandlers,c=n.props,l=c.customAttributes,u=c.sources,d=e.i;return(0,o.useEffect)(a[d].handleYoutubeLoad),i().createElement("iframe",K({ref:r[d],className:"".concat(x," ").concat(s,"youtube-iframe"),src:"https://www.youtube.com/embed/".concat((t=u[d],t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2])),allowFullScreen:!0},l&&l[d]?l[d]:{}))},te=function(e){var t=e.fsLightbox,n=t.componentsServices.hideSourceLoaderCollection,r=t.elements.sourceMainWrappers,a=e.i;return(0,o.useEffect)((function(){n[a](),r[a].current.classList.add(m)})),i().createElement("div",{className:"".concat(s,"invalid-file-wrapper ").concat(u)},"Invalid source")},ne=function(e){var t=e.fsLightbox,n=t.collections.sourceLoadHandlers,r=t.elements.sources,s=t.props.sources,a=e.i;(0,o.useEffect)(n[a].handleCustomLoad);var c=s[a].props.className;return i().cloneElement(s[a],{ref:r[a],className:c?"".concat(c," ").concat(x):x})};function re(e){var t=e.componentsServices,n=t.isLightboxOpenManager,r=t.updateSourceDirectWrapperCollection,o=e.elements.sourcesComponents;this.runActionsForSourceTypeAndIndex=function(t,s){var a;switch(t){case V:a=J;break;case q:a=Z;break;case _:a=ee;break;case Y:a=ne;break;default:a=te}o[s]=i().createElement(a,{fsLightbox:e,i:s}),n.get()&&r[s]()}}function oe(){var e,t,n,r=function(e){var t=document.createElement("a");return t.href=e,"www.youtube.com"===t.hostname},o=function(e){return e.slice(0,e.indexOf("/"))};function i(){if(4!==n.readyState){if(2===n.readyState){var e;switch(o(n.getResponseHeader("content-type"))){case"image":e=V;break;case"video":e=q;break;default:e=$}n.onreadystatechange=null,n.abort(),t(e)}}else t($)}this.setUrlToCheck=function(t){e=t},this.getSourceType=function(o){if(r(e))return o(_);t=o,(n=new XMLHttpRequest).onreadystatechange=i,n.open("GET",e,!0),n.send()}}function ie(e,t,n){var r=e.props,o=r.types,i=r.type,s=r.sources,a=e.resolve;this.getTypeSetByClientForIndex=function(e){var t;return o&&o[e]?t=o[e]:i&&(t=i),t},this.retrieveTypeWithXhrForIndex=function(e){var r=a(oe);r.setUrlToCheck(s[e]),r.getSourceType((function(r){t.handleReceivedSourceTypeForUrl(r,s[e]),n.runActionsForSourceTypeAndIndex(r,e)}))}}function se(e,t){var n=e.current.classList;n.contains(t)&&n.remove(t)}function ae(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,r=n.lightboxCloser,o=n.lightboxOpener,i=n.slideIndexChanger,s=e.data,a=e.stageIndexes;this.runTogglerUpdateActions=function(){t.get()?r.closeLightbox():s.isInitialized?o.openLightbox():o.initializeAndOpenLightbox()},this.runCurrentStageIndexUpdateActionsFor=function(e){e!==a.current&&(t.get()?i.jumpTo(e):a.current=e)}}function ce(e){var t=e.core.lightboxUpdater,n=(0,e.resolve)(ae);t.handleUpdate=function(t){var r=e.props;void 0!==r.source?n.runCurrentStageIndexUpdateActionsFor(r.sources.indexOf(r.source)):void 0!==r.sourceIndex?n.runCurrentStageIndexUpdateActionsFor(r.sourceIndex):void 0!==r.slide&&n.runCurrentStageIndexUpdateActionsFor(r.slide-1),t.toggler!==r.toggler&&n.runTogglerUpdateActions()}}var le="sourceMainWrappers";function ue(e){var t=e.core;t.lightboxCloser,t.fullscreenToggler,t.slideChangeFacade,this.listener=function(e){}}function de(e){return e.touches?e.touches[0].screenX:e.screenX}function fe(e){var t=e.collections.sourceMainWrapperTransformers,n=e.componentsServices,r=e.elements.container,o=e.slideSwipingProps,i=e.stageIndexes;this.runActionsForEvent=function(e){n.showSlideSwipingHovererIfNotYet(),r.current.classList.add(c),o.swipedX=de(e)-o.downScreenX,s(i.current,"zero"),void 0!==i.previous&&o.swipedX>0?s(i.previous,"negative"):void 0!==i.next&&o.swipedX<0&&s(i.next,"positive")};var s=function(e,n){t[e].byValue(o.swipedX)[n]()}}function pe(e){var t,n=e.props.sources,r=e.resolve,o=e.slideSwipingProps,i=r(fe),s=(t=!1,function(){return!t&&(t=!0,requestAnimationFrame((function(){t=!1})),!0)});1===n.length?this.listener=function(){o.swipedX=1}:this.listener=function(e){o.isSwiping&&s()&&i.runActionsForEvent(e)}}function he(e){var t=e.collections.sourceMainWrapperTransformers,n=e.core.slideIndexChanger,r=e.elements.sourceMainWrappers,o=e.stageIndexes;this.runPositiveSwipedXActions=function(){void 0===o.previous||(i("positive"),n.changeTo(o.previous)),i("zero")},this.runNegativeSwipedXActions=function(){void 0===o.next||(i("negative"),n.changeTo(o.next)),i("zero")};var i=function(e){r[o.current].current.classList.add(f),t[o.current][e]()}}function ge(e){var t=e.componentsServices,n=e.core.lightboxCloser,r=e.elements.container,o=e.resolve,i=e.slideSwipingProps,s=o(he);this.runNoSwipeActions=function(){t.hideSlideSwipingHovererIfShown(),i.isSourceDownEventTarget||n.closeLightbox(),i.isSwiping=!1},this.runActions=function(){i.swipedX>0?s.runPositiveSwipedXActions():s.runNegativeSwipedXActions(),t.hideSlideSwipingHovererIfShown(),r.current.classList.remove(c),i.isSwiping=!1}}function me(e){var t=e.resolve,n=e.slideSwipingProps,r=t(ge);this.listener=function(){n.isSwiping&&(n.swipedX?r.runActions():r.runNoSwipeActions())}}function ve(e){return!e.touches||e.touches.length<=1}function be(e){var t=e.core.classFacade,n=e.elements.sources,r=e.slideSwipingProps,o=e.stageIndexes;this.runActions=function(e){"VIDEO"===e.target.tagName||e.touches||e.preventDefault(),r.isSwiping=!0,r.downScreenX=de(e),r.swipedX=0;var i=n[o.current].current;i&&i.contains(e.target)?r.isSourceDownEventTarget=!0:r.isSourceDownEventTarget=!1,t.removeFromEachElementClassIfContains(le,f)}}function xe(e){for(var t=e.props.sources,n=[],r=0;r<t.length;r++)n.push(i().createRef());return n}function ye(e,t,n){for(var r=0;r<e.props.sources.length;r++)e.collections[t][r]=e.resolve(n,[r])}function Se(e,t){var n=this,r=e.elements.sourceMainWrappers,o=e.props.slideDistance+1,i=0;this.byValue=function(e){return i=e,n},this.negative=function(){s(-a())},this.zero=function(){s(0)},this.positive=function(){s(a())};var s=function(e){r[t].current.style.transform="translateX(".concat(e+i,"px)"),i=0},a=function(){return o*innerWidth}}function we(e,t,n,r){var o=e.data,i=e.elements.sources,s=n/r,a=0;this.adjustSize=function(){if((a=o.maxSourceWidth/s)<o.maxSourceHeight)return n<o.maxSourceWidth&&(a=r),c();a=r>o.maxSourceHeight?o.maxSourceHeight:r,c()};var c=function(){var e=i[t].current.style;e.width=a*s+"px",e.height=a+"px"}}function Le(e,t){var n=this,r=e.collections.sourceSizers,o=e.componentsServices.hideSourceLoaderCollection,i=e.elements,s=i.sourceAnimationWrappers,a=i.sources,c=e.resolve;function l(e,n){r[t]=c(we,[t,e,n]),r[t].adjustSize()}this.runActions=function(e,r){a[t].current.classList.add(b),s[t].current.classList.add(m),o[t](),l(e,r),n.runActions=l}}function Ae(e,t){var n,r=this,o=e.elements.sources,i=e.props,s=e.resolve,a=e.timeout,c=s(Le,[t]);this.handleImageLoad=function(e){var t=e.target,n=t.naturalWidth,r=t.naturalHeight;c.runActions(n,r)},this.handleVideoLoad=function(e){var t=e.target,r=t.videoWidth,o=t.videoHeight;n=!0,c.runActions(r,o)},this.handleNotMetaDatedVideoLoad=function(){n||r.handleYoutubeLoad()},this.handleYoutubeLoad=function(){var e=1920,t=1080;i.maxYoutubeVideoDimensions&&(e=i.maxYoutubeVideoDimensions.width,t=i.maxYoutubeVideoDimensions.height),c.runActions(e,t)},this.handleCustomLoad=function(){a((function(){var e=o[t].current;c.runActions(null==e?void 0:e.offsetWidth,null==e?void 0:e.offsetHeight)}))}}function Ee(e){var t=e.componentsServices.isLightboxOpenManager,n=e.core,r=n.eventsDispatcher,o=n.lightboxOpener,i=n.lightboxOpenActioner,s=e.data,a=e.elements;o.openLightbox=function(){r.dispatch("onShow"),ye(e,"sourceLoadHandlers",Ae),t.set(!0,i.runInitializedLightboxActions)},o.initializeAndOpenLightbox=function(){s.isInitialized=!0,a.sourceAnimationWrappers=xe(e),a.sourceMainWrappers=xe(e),a.sources=xe(e),ye(e,"sourceLoadHandlers",Ae),ye(e,"sourceMainWrapperTransformers",Se),function(e){var t,n,r;n=(t=e).core.classFacade,r=t.elements,n.removeFromEachElementClassIfContains=function(e,t){for(var n=0;n<r[e].length;n++)se(r[e][n],t)},function(e){var t=e.core.eventsDispatcher,n=e.props;t.dispatch=function(e){n[e]&&n[e]()}}(e),function(e){var t=e.componentsServices.toolbarButtons.fullscreen,n=e.core.fullscreenToggler;n.enterFullscreen=function(){t.set(!0);var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},n.exitFullscreen=function(){t.set(!1),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}}(e),function(e){var t,n=e.core,r=n.globalEventsController,o=n.windowResizeActioner,i=e.resolve,s=i(ue),a=i(pe),c=i(me);r.attachListeners=function(){var e,n;e=a.listener,n=ve,t=function(){n.apply(void 0,arguments)&&e.apply(void 0,arguments)},document.addEventListener("mousemove",a.listener),document.addEventListener("touchmove",t,{passive:!0}),document.addEventListener("mouseup",c.listener),document.addEventListener("touchend",c.listener,{passive:!0}),addEventListener("resize",o.runActions),document.addEventListener("keydown",s.listener)},r.removeListeners=function(){document.removeEventListener("mousemove",a.listener),document.removeEventListener("touchmove",t),document.removeEventListener("mouseup",c.listener),document.removeEventListener("touchend",c.listener),removeEventListener("resize",o.runActions),document.removeEventListener("keydown",s.listener)}}(e),function(e){var t=e.core,n=t.lightboxCloser,r=t.lightboxCloseActioner;n.closeLightbox=function(){r.isLightboxFadingOut||r.runActions()}}(e),function(e){var t=e.componentsServices,n=t.toolbarButtons.fullscreen,r=t.isLightboxOpenManager,o=e.core,i=o.eventsDispatcher,s=o.fullscreenToggler,a=o.globalEventsController,c=o.lightboxCloseActioner,l=o.scrollbarRecompensor,u=e.elements.container,f=e.props,p=e.slideSwipingProps,h=e.timeout;c.isLightboxFadingOut=!1,c.runActions=function(){c.isLightboxFadingOut=!0,u.current.classList.add(v),a.removeListeners(),f.exitFullscreenOnClose&&n.get()&&s.exitFullscreen(),h((function(){c.isLightboxFadingOut=!1,p.isSwiping=!1,u.current.classList.remove(v),document.documentElement.classList.remove(d),l.removeRecompense(),r.set(!1),i.dispatch("onClose")}),250)}}(e),Ee(e),function(e){var t=e.collections.sourceMainWrapperTransformers,n=e.core,r=n.eventsDispatcher,o=n.lightboxOpenActioner,i=n.globalEventsController,s=n.scrollbarRecompensor,a=n.sourceDisplayFacade,c=n.stageManager,l=n.windowResizeActioner,u=e.stageIndexes;o.runInitializedLightboxActions=function(){c.updateStageIndexes(),a.displaySourcesWhichShouldBeDisplayed(),document.documentElement.classList.add(d),s.addRecompense(),i.attachListeners(),l.runActions(),t[u.current].zero(),r.dispatch("onOpen")}}(e),ce(e),function(e){var t=e.data,n=e.core.scrollbarRecompensor;n.addRecompense=function(){"complete"===document.readyState?r():window.addEventListener("load",(function(){r(),n.addRecompense=r}))};var r=function(){var e;(null===(e=document.body)||void 0===e?void 0:e.offsetHeight)>window.innerHeight&&(document.body.style.marginRight=t.scrollbarWidth+"px")};n.removeRecompense=function(){document.body.style.removeProperty("margin-right")}}(e),function(e){var t=e.core,n=t.slideChangeFacade,r=t.slideIndexChanger,o=t.stageManager;e.props.sources.length>1?(n.changeToPrevious=function(){r.jumpTo(o.getPreviousSlideIndex())},n.changeToNext=function(){r.jumpTo(o.getNextSlideIndex())}):(n.changeToPrevious=function(){},n.changeToNext=function(){})}(e),function(e){var t=e.collections.sourceMainWrapperTransformers,n=e.componentsServices,r=e.core,o=r.classFacade,i=r.slideIndexChanger,s=r.sourceDisplayFacade,a=r.stageManager,c=e.elements.sourceAnimationWrappers,l=e.getQueuedAction,u=e.stageIndexes,d=e.timeout,p=l((function(){o.removeFromEachElementClassIfContains("sourceAnimationWrappers",g)}),250);i.changeTo=function(e){u.current=e,a.updateStageIndexes(),n.setSlideNumber(e+1),s.displaySourcesWhichShouldBeDisplayed()},i.jumpTo=function(e){var n=u.current;i.changeTo(e),o.removeFromEachElementClassIfContains(le,f),se(c[n],m),se(c[n],h),c[n].current.classList.add(g),se(c[e],m),se(c[e],g),c[e].current.classList.add(h),p(),t[e].zero(),d((function(){n!==u.current&&t[n].negative()}),220)}}(e),function(e){var t=e.core.slideSwipingDown,n=e.resolve,r=e.slideSwipingProps,o=n(be);t.listener=function(e){var t;null!=e&&null!==(t=e.props)&&void 0!==t&&t.canSwipe&&(e.touches&&e.touches.length>1?r.isSwiping=!1:o.runActions(e))}}(e),function(e){var t=e.core.sourceDisplayFacade,n=e.componentsServices.updateSourceDirectWrapperCollection,r=e.stageIndexes,o=e.props.loadOnlyCurrentSource;t.displaySourcesWhichShouldBeDisplayed=function(){if(o)n[r.current]();else for(var e in r)void 0!==r[e]&&n[r[e]]()}}(e),function(e){var t=e.core.stageManager,n=e.props.sources,r=e.stageIndexes,o=n.length-1;t.getPreviousSlideIndex=function(){return 0===r.current?o:r.current-1},t.getNextSlideIndex=function(){return r.current===o?0:r.current+1},t.updateStageIndexes=0===o?function(){}:1===o?function(){0===r.current?(r.next=1,delete r.previous):(r.previous=0,delete r.next)}:function(){r.previous=t.getPreviousSlideIndex(),r.next=t.getNextSlideIndex()},t.isSourceInStage=o<=2?function(){return!0}:function(e){var t=r.current;if(0===t&&e===o||t===o&&0===e)return!0;var n=t-e;return-1===n||0===n||1===n}}(e),function(e){var t=e.collections,n=t.sourceMainWrapperTransformers,r=t.sourceSizers,o=e.core.windowResizeActioner,i=e.data,s=e.elements,a=s.sources,c=s.sourceMainWrappers,l=e.stageIndexes;o.runActions=function(){innerWidth<992?i.maxSourceWidth=innerWidth:i.maxSourceWidth=.9*innerWidth,i.maxSourceHeight=.9*innerHeight;for(var e=0;e<a.length;e++)se(c[e],f),e!==l.current&&n[e].negative(),r[e]&&a[e].current&&r[e].adjustSize()}}(e)}(e),r.dispatch("onInit"),t.set(!0,(function(){i.runInitializedLightboxActions(),function(e){for(var t=e.props.sources,n=e.resolve,r=n(X),o=n(re),i=n(ie,[r,o]),s=0;s<t.length;s++)if("string"==typeof t[s]){var a=i.getTypeSetByClientForIndex(s);if(a)o.runActionsForSourceTypeAndIndex(a,s);else{var c=r.getSourceTypeFromLocalStorageByUrl(t[s]);c?o.runActionsForSourceTypeAndIndex(c,s):i.retrieveTypeWithXhrForIndex(s)}}else o.runActionsForSourceTypeAndIndex(Y,s)}(e)}))}}function Ie(e){return Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ie(e)}function Ce(e){return Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ce(e)}function Oe(e,t,n){return Oe=Ne()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Me(o,n.prototype),o},Oe.apply(null,arguments)}function Fe(e){return function(e){if(Array.isArray(e))return Te(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Te(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ze(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Me(e,t){return Me=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Me(e,t)}function je(e,t){if(t&&("object"===Ce(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return We(e)}function We(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ne(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function ke(e){return ke=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ke(e)}"object"===("undefined"==typeof document?"undefined":Ie(document))&&H();var De=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Me(e,t)}(c,e);var t,n,r,o,a=(t=c,n=Ne(),function(){var e,r=ke(t);if(n){var o=ke(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return je(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={isOpen:!1},t.data={isInitialized:!1,maxSourceWidth:0,maxSourceHeight:0,scrollbarWidth:0},t.slideSwipingProps={isSwiping:!1,downScreenX:null,isSourceDownEventTarget:!1,swipedX:0},t.stageIndexes={current:0},t.componentsServices={showSlideSwipingHovererIfNotYet:null,hideSlideSwipingHovererIfShown:null,setSlideNumber:null,isSlideSwipingHovererShown:{},isFullscreenOpen:{},hideSourceLoaderCollection:[],updateSourceDirectWrapperCollection:[],toolbarButtons:{fullscreen:{}},isLightboxOpenManager:{get:function(){return t.state.isOpen},set:function(e,n){t.setState({isOpen:e},n)}}},t.elements={container:i().createRef(),sourceMainWrappersWrapper:i().createRef(),sources:null,sourceMainWrappers:null,sourceAnimationWrappers:null,sourcesComponents:[]},t.collections={sourceMainWrapperTransformers:[],sourceLoadHandlers:[],sourceSizers:[],xhrs:[]},t.core={classFacade:{},eventsDispatcher:{},fullscreenToggler:{},globalEventsController:{},lightboxCloser:{},lightboxCloseActioner:{},lightboxOpener:{},lightboxOpenActioner:{},lightboxUpdater:{},scrollbarRecompensor:{},slideChangeFacade:{},slideIndexChanger:{},slideSwipingDown:{},sourceDisplayFacade:{},stageManager:{},windowResizeActioner:{}},t.getQueuedAction=t.getQueuedAction.bind(We(t)),t.resolve=t.resolve.bind(We(t)),t.timeout=t.timeout.bind(We(t)),ce(We(t)),Ee(We(t)),t}return r=c,o=[{key:"getQueuedAction",value:function(e,t){var n=this,r=[];return function(){r.push(!0),n.timeout((function(){r.pop(),r.length||e()}),t)}}},{key:"resolve",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.unshift(this),Oe(e,Fe(t))}},{key:"timeout",value:function(e,t){var n=this;setTimeout((function(){n.elements.container.current&&e()}),t)}},{key:"componentDidUpdate",value:function(e,t,n){this.core.lightboxUpdater.handleUpdate(e)}},{key:"componentDidMount",value:function(){B(this)}},{key:"componentWillUnmount",value:function(){!function(e){for(var t=e.collections.xhrs,n=e.componentsServices.isLightboxOpenManager,r=e.core.globalEventsController,o=0;o<t.length;o++)t[o].abort();n.get()&&r.removeListeners()}(this)}},{key:"render",value:function(){return this.state.isOpen?i().createElement("div",{ref:this.elements.container,className:"".concat(s,"container ").concat(l," ").concat(m)},i().createElement(z,{fsLightbox:this}),i().createElement(F,{fsLightbox:this}),this.props.sources.length>1?i().createElement(i().Fragment,null,i().createElement(M,{onClick:this.core.slideChangeFacade.changeToPrevious,name:"previous",d:"M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"}),i().createElement(M,{onClick:this.core.slideChangeFacade.changeToNext,name:"next",d:"M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"})):null,i().createElement(R,{fsLightbox:this})):null}}],o&&ze(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),c}(o.Component);De.propTypes={toggler:r().bool,sources:r().array,slide:r().number,source:r().string,sourceIndex:r().number,onOpen:r().func,onClose:r().func,onInit:r().func,onShow:r().func,disableLocalStorage:r().bool,types:r().array,type:r().string,customAttributes:r().array,maxYoutubeVideoDimensions:r().object,exitFullscreenOnClose:r().bool,loadOnlyCurrentSource:r().bool,openOnMount:r().bool,slideDistance:r().number,canSwipe:r().bool},De.defaultProps={slideDistance:.3,canSwipe:!1};const Re=De;module.exports=t})();