(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(6495).Z,n=r(2648).Z,i=r(1598).Z,l=r(7273).Z,a=i(r(7294)),u=n(r(2636)),s=r(7757),c=r(3735),f=r(3341);r(4210);var d=n(r(7746));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,i,l,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&l(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}function v(e){let[t,r]=a.version.split("."),o=parseInt(t,10),n=parseInt(r,10);return o>18||18===o&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let y=a.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:u,className:s,imgStyle:c,blurStyle:f,isLazy:d,fetchPriority:p,fill:g,placeholder:h,loading:y,srcString:b,config:w,unoptimized:C,loader:_,onLoadRef:E,onLoadingCompleteRef:j,setBlurComplete:S,setShowAltText:x,onLoad:M,onError:P}=e,k=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return y=d?"lazy":y,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},k,v(p),{loading:y,width:i,height:n,decoding:"async","data-nimg":g?"fill":"1",className:s,style:o({},c,f)},r,{ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&m(e,b,h,E,j,S,C))},[b,h,E,j,S,P,C,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,h,E,j,S,C)},onError:e=>{x(!0),"blur"===h&&S(!0),P&&P(e)}})))}),b=a.forwardRef((e,t)=>{let r,n;var i,{src:m,sizes:b,unoptimized:w=!1,priority:C=!1,loading:_,className:E,quality:j,width:S,height:x,fill:M,style:P,onLoad:k,onLoadingComplete:O,placeholder:R="empty",blurDataURL:I,fetchPriority:z,layout:L,objectFit:A,objectPosition:T,lazyBoundary:D,lazyRoot:N}=e,B=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let U=a.useContext(f.ImageConfigContext),F=a.useMemo(()=>{let e=p||U||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return o({},e,{allSizes:t,deviceSizes:r})},[U]),W=B,Z=W.loader||d.default;delete W.loader;let q="__next_img_default"in Z;if(q){if("custom"===F.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=Z;Z=t=>{let{config:r}=t,o=l(t,["config"]);return e(o)}}if(L){"fill"===L&&(M=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(P=o({},P,e));let t={responsive:"100vw",fill:"100vw"}[L];t&&!b&&(b=t)}let G="",H=h(S),K=h(x);if("object"==typeof(i=m)&&(g(i)||void 0!==i.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,I=I||e.blurDataURL,G=e.src,!M){if(H||K){if(H&&!K){let t=H/e.width;K=Math.round(e.height*t)}else if(!H&&K){let t=K/e.height;H=Math.round(e.width*t)}}else H=e.width,K=e.height}}let V=!C&&("lazy"===_||void 0===_);(!(m="string"==typeof m?m:G)||m.startsWith("data:")||m.startsWith("blob:"))&&(w=!0,V=!1),F.unoptimized&&(w=!0),q&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(w=!0),C&&(z="high");let[J,Y]=a.useState(!1),[$,Q]=a.useState(!1),X=h(j),ee=Object.assign(M?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:T}:{},$?{}:{color:"transparent"},P),et="blur"===R&&I&&!J?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:H,heightInt:K,blurWidth:r,blurHeight:n,blurDataURL:I,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:i,sizes:l,loader:a}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let i=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:i,kind:"x"}}(t,n,l),c=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,o)=>"".concat(a({config:t,src:r,quality:i,width:e})," ").concat("w"===s?e:o+1).concat(s)).join(", "),src:a({config:t,src:r,quality:i,width:u[c]})}}({config:F,src:m,unoptimized:w,width:H,quality:X,sizes:b,loader:Z}),eo=m,en=a.useRef(k);a.useEffect(()=>{en.current=k},[k]);let ei=a.useRef(O);a.useEffect(()=>{ei.current=O},[O]);let el=o({isLazy:V,imgAttributes:er,heightInt:K,widthInt:H,qualityInt:X,className:E,imgStyle:ee,blurStyle:et,loading:_,config:F,fetchPriority:z,fill:M,unoptimized:w,placeholder:R,loader:Z,srcString:eo,onLoadRef:en,onLoadingCompleteRef:ei,setBlurComplete:Y,setShowAltText:Q},W);return a.default.createElement(a.default.Fragment,null,a.default.createElement(y,Object.assign({},el,{ref:t})),C?a.default.createElement(u.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:W.crossOrigin},v(z)))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,n=r(7273).Z,i=o(r(7294)),l=r(4532),a=r(3353),u=r(1410),s=r(9064),c=r(370),f=r(9955),d=r(4224),p=r(508),g=r(1516),h=r(4266);let m=new Set;function v(e,t,r,o,n){if(n||a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+n;if(m.has(i))return;m.add(i)}Promise.resolve(e.prefetch(t,r,o)).catch(e=>{})}}function y(e){return"string"==typeof e?e:u.formatUrl(e)}let b=i.default.forwardRef(function(e,t){let r,o;let{href:u,as:m,children:b,prefetch:w,passHref:C,replace:_,shallow:E,scroll:j,locale:S,onClick:x,onMouseEnter:M,onTouchStart:P,legacyBehavior:k=!1}=e,O=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,k&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let R=!1!==w,I=i.default.useContext(f.RouterContext),z=i.default.useContext(d.AppRouterContext),L=null!=I?I:z,A=!I,{href:T,as:D}=i.default.useMemo(()=>{if(!I){let e=y(u);return{href:e,as:m?y(m):e}}let[e,t]=l.resolveHref(I,u,!0);return{href:e,as:m?l.resolveHref(I,m):t||e}},[I,u,m]),N=i.default.useRef(T),B=i.default.useRef(D);k&&(o=i.default.Children.only(r));let U=k?o&&"object"==typeof o&&o.ref:t,[F,W,Z]=p.useIntersection({rootMargin:"200px"}),q=i.default.useCallback(e=>{(B.current!==D||N.current!==T)&&(Z(),B.current=D,N.current=T),F(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[D,U,T,Z,F]);i.default.useEffect(()=>{L&&W&&R&&v(L,T,D,{locale:S},A)},[D,T,W,S,R,null==I?void 0:I.locale,L,A]);let G={ref:q,onClick(e){k||"function"!=typeof x||x(e),k&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,o,n,l,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!a.isLocalURL(r)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:l,locale:s,scroll:u}):t[n?"replace":"push"](o||r,{forceOptimisticNavigation:!f})};c?i.default.startTransition(g):g()}(e,L,T,D,_,E,j,S,A,R)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&(R||!A)&&v(L,T,D,{locale:S,priority:!0,bypassPrefetchedCheck:!0},A)},onTouchStart(e){k||"function"!=typeof P||P(e),k&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&(R||!A)&&v(L,T,D,{locale:S,priority:!0,bypassPrefetchedCheck:!0},A)}};if(s.isAbsoluteUrl(D))G.href=D;else if(!k||C||"a"===o.type&&!("href"in o.props)){let e=void 0!==S?S:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&g.getDomainLocale(D,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);G.href=t||h.addBasePath(c.addLocale(D,e,null==I?void 0:I.defaultLocale))}return k?i.default.cloneElement(o,G):i.default.createElement("a",Object.assign({},O,G),r)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!i,[c,f]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,r){let{id:o,observer:n,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=l.get(o)))return t;let n=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:n},a.push(r),l.set(r,t),t}(r);return i.set(e,t),n.observe(e),function(){if(i.delete(e),n.unobserve(e),0===i.size){n.disconnect(),l.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return o}}else if(!c){let e=n.requestIdleCallback(()=>f(!0));return()=>n.cancelIdleCallback(e)}},[s,r,t,c,d.current]);let g=o.useCallback(()=>{f(!1)},[]);return[p,c,g]};var o=r(7294),n=r(29);let i="function"==typeof IntersectionObserver,l=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:i,objectFit:l}=e,a=o||t,u=n||r,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(u,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:o,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(o,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)}}]);