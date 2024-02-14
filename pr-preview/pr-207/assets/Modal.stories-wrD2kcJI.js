import{j as u,B as h}from"./index-0SS0MQK6.js";import{r as c,R as Ge}from"./index-4g5l5LRQ.js";import{r as T}from"./index.m-0-FAh1ao.js";import{u as $t}from"./useId-LEwi1_oF.js";import{_ as ne,a as Gt}from"./inheritsLoose-lRRTvJTO.js";import{i as _}from"./index-XwI9xEnt.js";import{a as Jt}from"./i18n-RORRLZQ_.js";import{c as Kt}from"./close-16-AfVZA5w4.js";import{B as b}from"./component-A8Ef4vEW.js";import{T as Yt}from"./component-Ni3Mwn-H.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./item-eELtHtPK.js";function Qt(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var re="data-focus-lock",Je="data-focus-lock-disabled",zt="data-no-focus-lock",Xt="data-autofocus-inside",Zt="data-no-autofocus";function Q(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function en(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Me=new WeakMap;function tn(e,t){var n=en(t||null,function(r){return e.forEach(function(o){return Q(o,r)})});return c.useLayoutEffect(function(){var r=Me.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(l){a.has(l)||Q(l,null)}),a.forEach(function(l){o.has(l)||Q(l,i)})}Me.set(n,e)},[e]),n}var z={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},oe=function(){return oe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},oe.apply(this,arguments)};function Ke(e){return e}function Ye(e,t){t===void 0&&(t=Ke);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(l){return l!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(l){return a(l)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var l=n;n=[],l.forEach(a),i=n}var d=function(){var s=i;i=[],s.forEach(a)},f=function(){return Promise.resolve().then(d)};f(),n={push:function(s){i.push(s),f()},filter:function(s){return i=i.filter(s),n}}}};return o}function ue(e,t){return t===void 0&&(t=Ke),Ye(e,t)}function nn(e){e===void 0&&(e={});var t=Ye(null);return t.options=oe({async:!0,ssr:!1},e),t}var Qe=ue({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),ze=ue(),rn=ue(),on=nn({async:!0}),an=[],Xe=c.forwardRef(function(t,n){var r,o=c.useState(),a=o[0],i=o[1],l=c.useRef(),d=c.useRef(!1),f=c.useRef(null),s=t.children,m=t.disabled,v=m===void 0?!1:m,p=t.noFocusGuards,g=p===void 0?!1:p,y=t.persistentFocus,O=y===void 0?!1:y,C=t.crossFrame,j=C===void 0?!0:C,he=t.autoFocus,xt=he===void 0?!0:he;t.allowTextSelection;var Et=t.group,Ft=t.className,Rt=t.whiteList,wt=t.hasPositiveIndices,ge=t.shards,St=ge===void 0?an:ge,be=t.as,Tt=be===void 0?"div":be,ye=t.lockProps,Bt=ye===void 0?{}:ye,_t=t.sideCar,ke=t.returnFocus,L=ke===void 0?!1:ke,It=t.focusOptions,J=t.onActivation,K=t.onDeactivation,At=c.useState({}),Nt=At[0],jt=c.useCallback(function(){f.current=f.current||document&&document.activeElement,l.current&&J&&J(l.current),d.current=!0},[J]),Lt=c.useCallback(function(){d.current=!1,K&&K(l.current)},[K]);c.useEffect(function(){v||(f.current=null)},[]);var Dt=c.useCallback(function(M){var S=f.current;if(S&&S.focus){var Y=typeof L=="function"?L(S):L;if(Y){var Ce=typeof Y=="object"?Y:void 0;f.current=null,M?Promise.resolve().then(function(){return S.focus(Ce)}):S.focus(Ce)}}},[L]),Pt=c.useCallback(function(M){d.current&&Qe.useMedium(M)},[]),Ht=ze.useMedium,Wt=c.useCallback(function(M){l.current!==M&&(l.current=M,i(M))},[]),Ut=ne((r={},r[Je]=v&&"disabled",r[re]=Et,r),Bt),Oe=g!==!0,qt=Oe&&g!=="tail",Vt=tn([n,Wt]);return c.createElement(c.Fragment,null,Oe&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:v?-1:0,style:z}),wt?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:v?-1:1,style:z}):null],!v&&c.createElement(_t,{id:Nt,sideCar:on,observed:a,disabled:v,persistentFocus:O,crossFrame:j,autoFocus:xt,whiteList:Rt,shards:St,onActivation:jt,onDeactivation:Lt,returnFocus:Dt,focusOptions:It}),c.createElement(Tt,ne({ref:Vt},Ut,{className:Ft,onBlur:Ht,onFocus:Pt}),s),qt&&c.createElement("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:z}))});Xe.propTypes={};const Ze=Xe;function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function un(e,t){if(I(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(I(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ln(e){var t=un(e,"string");return I(t)=="symbol"?t:String(t)}function cn(e,t,n){return t=ln(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function l(){i=e(a.map(function(f){return f.props})),t(i)}var d=function(f){Gt(s,f);function s(){return f.apply(this,arguments)||this}s.peek=function(){return i};var m=s.prototype;return m.componentDidMount=function(){a.push(this),l()},m.componentDidUpdate=function(){l()},m.componentWillUnmount=function(){var p=a.indexOf(this);a.splice(p,1),l()},m.render=function(){return Ge.createElement(o,this.props)},s}(c.PureComponent);return cn(d,"displayName","SideEffect("+n(o)+")"),d}}var k=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},q=function(e){return Array.isArray(e)?e:[e]},et=function(e){return Array.isArray(e)?e[0]:e},fn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},tt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},nt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},dn=function(e,t){return!e||nt(e)||!fn(e)&&t(tt(e))},rt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=dn(t,rt.bind(void 0,e));return e.set(t,r),r},mn=function(e,t){return e&&!nt(e)?hn(e)?t(tt(e)):!1:!0},ot=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=mn(t,ot.bind(void 0,e));return e.set(t,r),r},at=function(e){return e.dataset},vn=function(e){return e.tagName==="BUTTON"},it=function(e){return e.tagName==="INPUT"},ut=function(e){return it(e)&&e.type==="radio"},pn=function(e){return!((it(e)||vn(e))&&(e.type==="hidden"||e.disabled))},hn=function(e){var t=e.getAttribute(Zt);return![!0,"true",""].includes(t)},le=function(e){var t;return!!(e&&(!((t=at(e))===null||t===void 0)&&t.focusGuard))},V=function(e){return!le(e)},gn=function(e){return!!e},bn=function(e,t){var n=e.tabIndex-t.tabIndex,r=e.index-t.index;if(n){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return n||r},lt=function(e,t,n){return k(e).map(function(r,o){return{node:r,index:o,tabIndex:n&&r.tabIndex===-1?(r.dataset||{}).focusGuard?0:-1:r.tabIndex}}).filter(function(r){return!t||r.tabIndex>=0}).sort(bn)},yn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],ce=yn.join(","),kn="".concat(ce,", [data-focus-guard]"),ct=function(e,t){return k((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?kn:ce)?[r]:[],ct(r))},[])},On=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?G([e.contentDocument.body],t):[e]},G=function(e,t){return e.reduce(function(n,r){var o,a=ct(r,t),i=(o=[]).concat.apply(o,a.map(function(l){return On(l,t)}));return n.concat(i,r.parentNode?k(r.parentNode.querySelectorAll(ce)).filter(function(l){return l===r}):[])},[])},Cn=function(e){var t=e.querySelectorAll("[".concat(Xt,"]"));return k(t).map(function(n){return G([n])}).reduce(function(n,r){return n.concat(r)},[])},se=function(e,t){return k(e).filter(function(n){return rt(t,n)}).filter(function(n){return pn(n)})},xe=function(e,t){return t===void 0&&(t=new Map),k(e).filter(function(n){return ot(t,n)})},ae=function(e,t,n){return lt(se(G(e,n),t),!0,n)},Ee=function(e,t){return lt(se(G(e),t),!1)},Mn=function(e,t){return se(Cn(e),t)},F=function(e,t){return e.shadowRoot?F(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:k(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?F(o,t):!1}return F(n,t)})},xn=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,l){return!t.has(l)})},st=function(e){return e.parentNode?st(e.parentNode):e},fe=function(e){var t=q(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(re);return n.push.apply(n,o?xn(k(st(r).querySelectorAll("[".concat(re,'="').concat(o,'"]:not([').concat(Je,'="disabled"])')))):[r]),n},[])},En=function(e){try{return e()}catch{return}},A=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?A(t.shadowRoot):t instanceof HTMLIFrameElement&&En(function(){return t.contentWindow.document})?A(t.contentWindow.document):t}},Fn=function(e,t){return e===t},Rn=function(e,t){return!!k(e.querySelectorAll("iframe")).some(function(n){return Fn(n,t)})},ft=function(e,t){return t===void 0&&(t=A(et(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:fe(e).some(function(n){return F(n,t)||Rn(n,t)})},wn=function(e){e===void 0&&(e=document);var t=A(e);return t?k(e.querySelectorAll("[".concat(zt,"]"))).some(function(n){return F(n,t)}):!1},Sn=function(e,t){return t.filter(ut).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},de=function(e,t){return ut(e)&&e.name?Sn(e,t):e},Tn=function(e){var t=new Set;return e.forEach(function(n){return t.add(de(n,e))}),e.filter(function(n){return t.has(n)})},Fe=function(e){return e[0]&&e.length>1?de(e[0],e):e[0]},Re=function(e,t){return e.length>1?e.indexOf(de(e[t],e)):t},dt="NEW_FOCUS",Bn=function(e,t,n,r){var o=e.length,a=e[0],i=e[o-1],l=le(n);if(!(n&&e.indexOf(n)>=0)){var d=n!==void 0?t.indexOf(n):-1,f=r?t.indexOf(r):d,s=r?e.indexOf(r):-1,m=d-f,v=t.indexOf(a),p=t.indexOf(i),g=Tn(t),y=n!==void 0?g.indexOf(n):-1,O=y-(r?g.indexOf(r):d),C=Re(e,0),j=Re(e,o-1);if(d===-1||s===-1)return dt;if(!m&&s>=0)return s;if(d<=v&&l&&Math.abs(m)>1)return j;if(d>=p&&l&&Math.abs(m)>1)return C;if(m&&Math.abs(O)>1)return s;if(d<=v)return j;if(d>p)return C;if(m)return Math.abs(m)>1?s:(o+s+m)%o}},_n=function(e){return function(t){var n,r=(n=at(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},In=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=xe(r.filter(_n(n)));return o&&o.length?Fe(o):Fe(xe(t))},ie=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&ie(e.parentNode.host||e.parentNode,t),t},X=function(e,t){for(var n=ie(e),r=ie(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},mt=function(e,t,n){var r=q(e),o=q(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(l){i=X(i||l,l)||i,n.filter(Boolean).forEach(function(d){var f=X(a,d);f&&(!i||F(f,i)?i=f:i=X(f,i))})}),i},An=function(e,t){return e.reduce(function(n,r){return n.concat(Mn(r,t))},[])},Nn=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(gn)},jn=function(e,t){var n=A(q(e).length>0?document:et(e).ownerDocument),r=fe(e).filter(V),o=mt(n||e,e,r),a=new Map,i=Ee(r,a),l=ae(r,a).filter(function(p){var g=p.node;return V(g)});if(!(!l[0]&&(l=i,!l[0]))){var d=Ee([o],a).map(function(p){var g=p.node;return g}),f=Nn(d,l),s=f.map(function(p){var g=p.node;return g}),m=Bn(s,d,n,t);if(m===dt){var v=In(i,s,An(r,a));if(v)return{node:v};console.warn("focus-lock: cannot find any node to move focus into");return}return m===void 0?m:f[m]}},Ln=function(e){var t=fe(e).filter(V),n=mt(e,e,t),r=new Map,o=ae([n],r,!0),a=ae(t,r).filter(function(i){var l=i.node;return V(l)}).map(function(i){var l=i.node;return l});return o.map(function(i){var l=i.node,d=i.index;return{node:l,index:d,lockItem:a.indexOf(l)>=0,guard:le(l)}})},Dn=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},Z=0,ee=!1,vt=function(e,t,n){n===void 0&&(n={});var r=jn(e,t);if(!ee&&r){if(Z>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ee=!0,setTimeout(function(){ee=!1},1);return}Z++,Dn(r.node,n.focusOptions),Z--}};function me(e){setTimeout(e,1)}var Pn=function(){return document&&document.activeElement===document.body},Hn=function(){return Pn()||wn()},R=null,E=null,w=null,N=!1,Wn=function(){return!0},Un=function(t){return(R.whiteList||Wn)(t)},qn=function(t,n){w={observerNode:t,portaledElement:n}},Vn=function(t){return w&&w.portaledElement===t};function we(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var $n=function(t){return t&&"current"in t?t.current:t},Gn=function(t){return t?!!N:N==="meanwhile"},Jn=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Kn=function(t,n){return n.some(function(r){return Jn(t,r,r)})},$=function(){var t=!1;if(R){var n=R,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,l=n.crossFrame,d=n.focusOptions,f=r||w&&w.portaledElement,s=document&&document.activeElement;if(f){var m=[f].concat(i.map($n).filter(Boolean));if((!s||Un(s))&&(o||Gn(l)||!Hn()||!E&&a)&&(f&&!(ft(m)||s&&Kn(s,m)||Vn(s))&&(document&&!E&&s&&!a?(s.blur&&s.blur(),document.body.focus()):(t=vt(m,E,{focusOptions:d}),w={})),N=!1,E=document&&document.activeElement),document){var v=document&&document.activeElement,p=Ln(m),g=p.map(function(y){var O=y.node;return O}).indexOf(v);g>-1&&(p.filter(function(y){var O=y.guard,C=y.node;return O&&C.dataset.focusAutoGuard}).forEach(function(y){var O=y.node;return O.removeAttribute("tabIndex")}),we(g,p.length,1,p),we(g,-1,-1,p))}}}return t},pt=function(t){$()&&t&&(t.stopPropagation(),t.preventDefault())},ve=function(){return me($)},Yn=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||qn(r,n)},Qn=function(){return null},ht=function(){N="just",me(function(){N="meanwhile"})},zn=function(){document.addEventListener("focusin",pt),document.addEventListener("focusout",ve),window.addEventListener("blur",ht)},Xn=function(){document.removeEventListener("focusin",pt),document.removeEventListener("focusout",ve),window.removeEventListener("blur",ht)};function Zn(e){return e.filter(function(t){var n=t.disabled;return!n})}function er(e){var t=e.slice(-1)[0];t&&!R&&zn();var n=R,r=n&&t&&t.id===n.id;R=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(E=null,(!r||n.observed!==t.observed)&&t.onActivation(),$(),me($)):(Xn(),E=null)}Qe.assignSyncMedium(Yn);ze.assignMedium(ve);rn.assignMedium(function(e){return e({moveFocusInside:vt,focusInside:ft})});const tr=sn(Zn,er)(Qn);var gt=c.forwardRef(function(t,n){return c.createElement(Ze,ne({sideCar:tr,ref:n},t))}),bt=Ze.propTypes||{};bt.sideCar;Qt(bt,["sideCar"]);gt.propTypes={};const nr=gt;let B=[];const pe={documentElement:{},body:{}},rr=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),yt=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},or=e=>([t,n])=>{pe[e][t]=document[e].style[t],document[e].style[t]=n},ar=()=>Object.entries(rr).forEach(([e,t])=>{Object.entries(t).forEach(or(e))}),ir=e=>([t,n])=>{document[e].style[t]=pe[e][t]},ur=()=>Object.entries(pe).forEach(([e,t])=>{Object.entries(t).forEach(ir(e))}),lr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function cr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||lr(e)&&o<0?yt(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function sr(e){e.ontouchstart=null,e.ontouchmove=null}const kt=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",yt,{passive:!1}),fr=kt(!0),dr=kt();function mr(e){if(!e)throw Error("Could not run setup, an element must be provided");B.some(t=>t===e)||(B.length||(ar(),fr()),cr(e),B.push(e))}function vr(){B.forEach(sr),dr(),ur(),B=[]}const pr=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),hr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),gr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}');var br={},yr=Object.defineProperty,Se=Object.getOwnPropertySymbols,kr=Object.prototype.hasOwnProperty,Or=Object.prototype.propertyIsEnumerable,Te=(e,t,n)=>t in e?yr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Cr=(e,t)=>{for(var n in t||(t={}))kr.call(t,n)&&Te(e,n,t[n]);if(Se)for(var n of Se(t))Or.call(t,n)&&Te(e,n,t[n]);return e},Mr=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),xr=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),Er=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),Ot=["en","nb","fi","da","sv"],Ct="en",Fr=()=>{let e;switch(br.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Mt=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":Ct},te=e=>Ot.find(t=>e===t||e.toLowerCase().includes(t))||Mt();function Rr(){var e;if(typeof window>"u"){const t=Fr();return te(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=Mt();return Ot.includes(t)?te(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),te(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Ct}}var wr=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,Sr=(e,t,n)=>{const r=Rr(),o=wr(r,e,t,n);_.load(r,o),_.activate(r)};Sr(xr,Mr,Er);var Tr=_.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),Br=e=>Ge.createElement("svg",Cr({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Tr}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),_r=Br;const x=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=c.useRef(null),o=$t(n.id),a=c.useRef(null);return Jt(hr,pr,gr),c.useEffect(()=>{vr(),r.current&&n.open&&mr(r.current)},[n.open,r]),c.useEffect(()=>{var i,l;n.initialFocusRef?(l=n.initialFocusRef.current)==null||l.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(nr,{children:u.jsx("div",{onClick:n.onDismiss,className:T(n.className,h.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>{i.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:h.modal,tabIndex:-1,children:[u.jsxs("div",{className:h.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":_._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:T(h.transitionTitle,h.titleButton,h.titleButtonLeft),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(_r,{className:T(h.titleButtonIcon)})}):n.left,u.jsx("div",{id:`${o}__title`,className:T(h.transitionTitle,n.left?h.transitionTitleCenter:h.transitionTitleColSpan),children:typeof n.title=="string"?u.jsx("h1",{className:h.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":_._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:T(h.transitionTitle,h.titleButton,h.titleButtonRight),children:u.jsx(Kt,{className:h.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:h.content,children:n.children}),!!n.footer&&u.jsx("div",{className:h.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};try{x.displayName="Modal",x.__docgenInfo={description:"A Modal dialog that renders on top the page",displayName:"Modal",props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",required:!1,type:{name:"string | Element | Element[]"}},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",required:!0,type:{name:"boolean"}},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",required:!1,type:{name:"boolean | Element | Element[]"}},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",required:!1,type:{name:"boolean | Element | Element[]"}},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",required:!1,type:{name:"Element | Element[]"}},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The modal contents",name:"children",required:!0,type:{name:"Element | Element[]"}},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",required:!1,type:{name:"(() => void)"}},onLeftClick:{defaultValue:null,description:"Handler that is called when the user clicks the left button",name:"onLeftClick",required:!1,type:{name:"(() => void)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",required:!1,type:{name:"string"}},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",required:!1,type:{name:"RefObject<any>"}}}}}catch{}const $r={title:"Overlays/Modal"},D=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(x,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},P=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(x,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},H=()=>{const[e,t]=c.useState(!1),[n,r]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(x,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(b,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(Yt,{type:"checkbox",label:"I agree",onChange:r})]})]})},W=()=>{const[e,t]=c.useState(!1),n=()=>t(!e),r=c.useRef(),o=c.useRef(null);return c.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(x,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},U=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(x,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};var Be,_e,Ie;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>
          Content information goes here. Optional illustration on top. Can
          contain links.
        </p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Ie=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var Ae,Ne,je;P.parameters={...P.parameters,docs:{...(Ae=P.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} left right onDismiss={toggleModal} onLeftClick={() => {
      console.log('left clicked');
      toggleModal();
    }} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>
          Content information goes here. Optional illustration on top. Can
          contain links.
        </p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(je=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Le,De,Pe;H.parameters={...H.parameters,docs:{...(Le=H.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      setChecked(false);
      openModalRef.current?.focus();
    }
  }, [open]);
  const toggleModal = () => setOpen(!open);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Do you agree to these terms?" footer={<Button primary onClick={toggleModal} disabled={!checked}>
            Accept
          </Button>}>
        <p>1. You must give me 10 pushups right now</p>
        <Toggle type="checkbox" label="I agree" onChange={setChecked} />
      </Modal>
    </>;
}`,...(Pe=(De=H.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var He,We,Ue;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(!open);
  const focusRef = React.useRef<HTMLButtonElement>();
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (!open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} initialFocusRef={focusRef} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button ref={focusRef} primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        <p>
          Content information goes here. Optional illustration on top. Can
          contain links.
        </p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Ue=(We=W.parameters)==null?void 0:We.docs)==null?void 0:Ue.source}}};var qe,Ve,$e;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(true);
  const toggleModal = () => setOpen(!open);
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (open) {
      openModalRef.current?.focus();
    }
  }, [open]);
  return <>
      <Button ref={openModalRef} utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal open={open} onDismiss={toggleModal} title="Title of the content goes here" footer={<>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary onClick={toggleModal}>
              Accept
            </Button>
          </>}>
        {[...new Array(10)].map((e, i) => <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>)}
      </Modal>
    </>;
}`,...($e=(Ve=U.parameters)==null?void 0:Ve.docs)==null?void 0:$e.source}}};const Gr=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{D as Example,W as InitialFocus,H as MustConfirmToProceed,U as Overflowing,P as WithBackAndCloseButton,Gr as __namedExportsOrder,$r as default};
