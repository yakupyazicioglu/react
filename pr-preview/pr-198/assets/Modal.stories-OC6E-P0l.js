import{j as u,B as g}from"./index-nHMqKp_t.js";import{r as c,R as Ye}from"./index-4g5l5LRQ.js";import{r as I}from"./index.m-0-FAh1ao.js";import{u as Yt}from"./useId-LEwi1_oF.js";import{_ as re,a as Qt}from"./inheritsLoose-lRRTvJTO.js";import{i as A}from"./index-XwI9xEnt.js";import{a as zt}from"./i18n-RORRLZQ_.js";import{c as Xt}from"./close-16-AfVZA5w4.js";import{B as y}from"./component-RYf_gKLY.js";import{T as Zt}from"./component-THkHTkNi.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./item-eCOiUmBf.js";function en(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var oe="data-focus-lock",Qe="data-focus-lock-disabled",tn="data-no-focus-lock",nn="data-autofocus-inside",rn="data-no-autofocus";function z(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function on(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Se=new WeakMap;function an(e,t){var n=on(t||null,function(r){return e.forEach(function(o){return z(o,r)})});return c.useLayoutEffect(function(){var r=Se.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(s){a.has(s)||z(s,null)}),a.forEach(function(s){o.has(s)||z(s,i)})}Se.set(n,e)},[e]),n}var X={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},ae=function(){return ae=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ae.apply(this,arguments)};function ze(e){return e}function Xe(e,t){t===void 0&&(t=ze);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(a),i=n}var h=function(){var f=i;i=[],f.forEach(a)},l=function(){return Promise.resolve().then(h)};l(),n={push:function(f){i.push(f),l()},filter:function(f){return i=i.filter(f),n}}}};return o}function le(e,t){return t===void 0&&(t=ze),Xe(e,t)}function un(e){e===void 0&&(e={});var t=Xe(null);return t.options=ae({async:!0,ssr:!1},e),t}var Ze=le({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),et=le(),cn=le(),sn=un({async:!0,ssr:typeof document<"u"}),ln=c.createContext(void 0),fn=[],tt=c.forwardRef(function(t,n){var r,o=c.useState(),a=o[0],i=o[1],s=c.useRef(),h=c.useRef(!1),l=c.useRef(null),f=c.useState({}),m=f[1],p=t.children,b=t.disabled,d=b===void 0?!1:b,v=t.noFocusGuards,k=v===void 0?!1:v,E=t.persistentFocus,D=E===void 0?!1:E,T=t.crossFrame,St=T===void 0?!0:T,ke=t.autoFocus,Rt=ke===void 0?!0:ke;t.allowTextSelection;var wt=t.group,Tt=t.className,Bt=t.whiteList,It=t.hasPositiveIndices,Oe=t.shards,J=Oe===void 0?fn:Oe,xe=t.as,_t=xe===void 0?"div":xe,Ce=t.lockProps,At=Ce===void 0?{}:Ce,Nt=t.sideCar,Me=t.returnFocus,H=Me===void 0?!1:Me,jt=t.focusOptions,K=t.onActivation,Y=t.onDeactivation,Pt=c.useState({}),Lt=Pt[0],Dt=c.useCallback(function(){l.current=l.current||document&&document.activeElement,s.current&&K&&K(s.current),h.current=!0,m()},[K]),Ht=c.useCallback(function(){h.current=!1,Y&&Y(s.current),m()},[Y]);c.useEffect(function(){d||(l.current=null)},[]);var Wt=c.useCallback(function(x){var B=l.current;if(B&&B.focus){var Q=typeof H=="function"?H(B):H;if(Q){var Fe=typeof Q=="object"?Q:void 0;l.current=null,x?Promise.resolve().then(function(){return B.focus(Fe)}):B.focus(Fe)}}},[H]),Ut=c.useCallback(function(x){h.current&&Ze.useMedium(x)},[]),qt=et.useMedium,Vt=c.useCallback(function(x){s.current!==x&&(s.current=x,i(x))},[]),$t=re((r={},r[Qe]=d&&"disabled",r[oe]=wt,r),At),Ee=k!==!0,Gt=Ee&&k!=="tail",Jt=an([n,Vt]),Kt=c.useMemo(function(){return{observed:s,shards:J,enabled:!d,active:h.current}},[d,h.current,J,a]);return c.createElement(c.Fragment,null,Ee&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:d?-1:0,style:X}),It?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:d?-1:1,style:X}):null],!d&&c.createElement(Nt,{id:Lt,sideCar:sn,observed:a,disabled:d,persistentFocus:D,crossFrame:St,autoFocus:Rt,whiteList:Bt,shards:J,onActivation:Dt,onDeactivation:Ht,returnFocus:Wt,focusOptions:jt}),c.createElement(_t,re({ref:Jt},$t,{className:Tt,onBlur:qt,onFocus:Ut}),c.createElement(ln.Provider,{value:Kt},p)),Gt&&c.createElement("div",{"data-focus-guard":!0,tabIndex:d?-1:0,style:X}))});tt.propTypes={};const nt=tt;function N(e){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(e)}function dn(e,t){if(N(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(N(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mn(e){var t=dn(e,"string");return N(t)=="symbol"?t:String(t)}function vn(e,t,n){return t=mn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function s(){i=e(a.map(function(l){return l.props})),t(i)}var h=function(l){Qt(f,l);function f(){return l.apply(this,arguments)||this}f.peek=function(){return i};var m=f.prototype;return m.componentDidMount=function(){a.push(this),s()},m.componentDidUpdate=function(){s()},m.componentWillUnmount=function(){var b=a.indexOf(this);a.splice(b,1),s()},m.render=function(){return Ye.createElement(o,this.props)},f}(c.PureComponent);return vn(h,"displayName","SideEffect("+n(o)+")"),h}}var O=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},j=function(e){return Array.isArray(e)?e:[e]},rt=function(e){return Array.isArray(e)?e[0]:e},hn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},ot=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},at=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},gn=function(e){return e.hasAttribute("inert")},bn=function(e,t){return!e||at(e)||!hn(e)&&!gn(e)&&t(ot(e))},it=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=bn(t,it.bind(void 0,e));return e.set(t,r),r},yn=function(e,t){return e&&!at(e)?xn(e)?t(ot(e)):!1:!0},ut=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=yn(t,ut.bind(void 0,e));return e.set(t,r),r},ct=function(e){return e.dataset},kn=function(e){return e.tagName==="BUTTON"},st=function(e){return e.tagName==="INPUT"},lt=function(e){return st(e)&&e.type==="radio"},On=function(e){return!((st(e)||kn(e))&&(e.type==="hidden"||e.disabled))},xn=function(e){var t=e.getAttribute(rn);return![!0,"true",""].includes(t)},fe=function(e){var t;return!!(e&&(!((t=ct(e))===null||t===void 0)&&t.focusGuard))},ie=function(e){return!fe(e)},Cn=function(e){return!!e},Mn=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},En=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},de=function(e,t,n){return O(e).map(function(r,o){var a=En(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(Mn)},Fn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],me=Fn.join(","),Sn="".concat(me,", [data-focus-guard]"),ft=function(e,t){return O((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?Sn:me)?[r]:[],ft(r))},[])},Rn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?w([e.contentDocument.body],t):[e]},w=function(e,t){return e.reduce(function(n,r){var o,a=ft(r,t),i=(o=[]).concat.apply(o,a.map(function(s){return Rn(s,t)}));return n.concat(i,r.parentNode?O(r.parentNode.querySelectorAll(me)).filter(function(s){return s===r}):[])},[])},wn=function(e){var t=e.querySelectorAll("[".concat(nn,"]"));return O(t).map(function(n){return w([n])}).reduce(function(n,r){return n.concat(r)},[])},ve=function(e,t){return O(e).filter(function(n){return it(t,n)}).filter(function(n){return On(n)})},Re=function(e,t){return t===void 0&&(t=new Map),O(e).filter(function(n){return ut(t,n)})},Tn=function(e,t,n){return de(ve(w(e,n),t),!0,n)},ue=function(e,t){return de(ve(w(e),t),!1)},Bn=function(e,t){return ve(wn(e),t)},C=function(e,t){return e.shadowRoot?C(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:O(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?C(o,t):!1}return C(n,t)})},In=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,s){return!t.has(s)})},dt=function(e){return e.parentNode?dt(e.parentNode):e},pe=function(e){var t=j(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(oe);return n.push.apply(n,o?In(O(dt(r).querySelectorAll("[".concat(oe,'="').concat(o,'"]:not([').concat(Qe,'="disabled"])')))):[r]),n},[])},_n=function(e){try{return e()}catch{return}},P=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?P(t.shadowRoot):t instanceof HTMLIFrameElement&&_n(function(){return t.contentWindow.document})?P(t.contentWindow.document):t}},An=function(e,t){return e===t},Nn=function(e,t){return!!O(e.querySelectorAll("iframe")).some(function(n){return An(n,t)})},mt=function(e,t){return t===void 0&&(t=P(rt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:pe(e).some(function(n){return C(n,t)||Nn(n,t)})},jn=function(e){e===void 0&&(e=document);var t=P(e);return t?O(e.querySelectorAll("[".concat(tn,"]"))).some(function(n){return C(n,t)}):!1},Pn=function(e,t){return t.filter(lt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},he=function(e,t){return lt(e)&&e.name?Pn(e,t):e},Ln=function(e){var t=new Set;return e.forEach(function(n){return t.add(he(n,e))}),e.filter(function(n){return t.has(n)})},we=function(e){return e[0]&&e.length>1?he(e[0],e):e[0]},Te=function(e,t){return e.indexOf(he(t,e))},ce="NEW_FOCUS",Dn=function(e,t,n,r,o){var a=e.length,i=e[0],s=e[a-1],h=fe(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,f=o?n.indexOf(o):l,m=o?e.indexOf(o):-1;if(l===-1)return m!==-1?m:ce;if(m===-1)return ce;var p=l-f,b=n.indexOf(i),d=n.indexOf(s),v=Ln(n),k=r!==void 0?v.indexOf(r):-1,E=k-(o?v.indexOf(o):l),D=Te(e,t[0]),T=Te(e,t[t.length-1]);if(!p&&m>=0)return m;if(l<=b&&h&&Math.abs(p)>1)return T;if(l>=d&&h&&Math.abs(p)>1)return D;if(p&&Math.abs(E)>1)return m;if(l<=b)return T;if(l>d)return D;if(p)return Math.abs(p)>1?m:(a+m+p)%a}},Hn=function(e){return function(t){var n,r=(n=ct(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},Wn=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=Re(r.filter(Hn(n)));return o&&o.length?we(o):we(Re(t))},se=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&se(e.parentNode.host||e.parentNode,t),t},Z=function(e,t){for(var n=se(e),r=se(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},vt=function(e,t,n){var r=j(e),o=j(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(s){i=Z(i||s,s)||i,n.filter(Boolean).forEach(function(h){var l=Z(a,h);l&&(!i||C(l,i)?i=l:i=Z(l,i))})}),i},Un=function(e,t){return e.reduce(function(n,r){return n.concat(Bn(r,t))},[])},qn=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(Cn)},Vn=function(e,t){var n=P(j(e).length>0?document:rt(e).ownerDocument),r=pe(e).filter(ie),o=vt(n||e,e,r),a=new Map,i=ue(r,a),s=i.filter(function(d){var v=d.node;return ie(v)});if(s[0]){var h=ue([o],a).map(function(d){var v=d.node;return v}),l=qn(h,s),f=l.map(function(d){var v=d.node;return v}),m=l.filter(function(d){var v=d.tabIndex;return v>=0}).map(function(d){var v=d.node;return v}),p=Dn(f,m,h,n,t);if(p===ce){var b=Wn(i,m,Un(r,a));if(b)return{node:b};console.warn("focus-lock: cannot find any node to move focus into");return}return p===void 0?p:l[p]}},$n=function(e){var t=pe(e).filter(ie),n=vt(e,e,t),r=de(w([n],!0),!0,!0),o=w(t,!1);return r.map(function(a){var i=a.node,s=a.index;return{node:i,index:s,lockItem:o.indexOf(i)>=0,guard:fe(i)}})},pt=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},ee=0,te=!1,ht=function(e,t,n){n===void 0&&(n={});var r=Vn(e,t);if(!te&&r){if(ee>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),te=!0,setTimeout(function(){te=!1},1);return}ee++,pt(r.node,n.focusOptions),ee--}},Gn=function(e,t,n){if(!e||!t)return console.error("no element or scope given"),{};var r=j(t);if(r.every(function(i){return!C(i,e)}))return console.error("Active element is not contained in the scope"),{};var o=n?Tn(r,new Map):ue(r,new Map),a=o.findIndex(function(i){var s=i.node;return s===e});if(a!==-1)return{prev:o[a-1],next:o[a+1],first:o[0],last:o[o.length-1]}},Jn=function(e){return Object.assign({scope:document.body,cycle:!0,onlyTabbable:!0},e)},gt=function(e,t,n){t===void 0&&(t={});var r=Jn(t),o=Gn(e,r.scope,r.onlyTabbable);if(o){var a=n(o,r.cycle);a&&pt(a.node,r.focusOptions)}},Kn=function(e,t){t===void 0&&(t={}),gt(e,t,function(n,r){var o=n.next,a=n.first;return o||r&&a})},Yn=function(e,t){t===void 0&&(t={}),gt(e,t,function(n,r){var o=n.prev,a=n.last;return o||r&&a})};function ge(e){setTimeout(e,1)}var Qn=function(t){return t&&"current"in t?t.current:t},zn=function(){return document&&document.activeElement===document.body},Xn=function(){return zn()||jn()},S=null,F=null,R=null,L=!1,Zn=function(){return!0},er=function(t){return(S.whiteList||Zn)(t)},tr=function(t,n){R={observerNode:t,portaledElement:n}},nr=function(t){return R&&R.portaledElement===t};function Be(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var rr=function(t){return t?!!L:L==="meanwhile"},or=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},ar=function(t,n){return n.some(function(r){return or(t,r,r)})},G=function(){var t=!1;if(S){var n=S,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,s=n.crossFrame,h=n.focusOptions,l=r||R&&R.portaledElement,f=document&&document.activeElement;if(l){var m=[l].concat(i.map(Qn).filter(Boolean));if((!f||er(f))&&(o||rr(s)||!Xn()||!F&&a)&&(l&&!(mt(m)||f&&ar(f,m)||nr(f))&&(document&&!F&&f&&!a?(f.blur&&f.blur(),document.body.focus()):(t=ht(m,F,{focusOptions:h}),R={})),L=!1,F=document&&document.activeElement),document&&f!==document.activeElement&&document.querySelector("[data-focus-auto-guard]")){var p=document&&document.activeElement,b=$n(m),d=b.map(function(v){var k=v.node;return k}).indexOf(p);d>-1&&(b.filter(function(v){var k=v.guard,E=v.node;return k&&E.dataset.focusAutoGuard}).forEach(function(v){var k=v.node;return k.removeAttribute("tabIndex")}),Be(d,b.length,1,b),Be(d,-1,-1,b))}}}return t},bt=function(t){G()&&t&&(t.stopPropagation(),t.preventDefault())},be=function(){return ge(G)},ir=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||tr(r,n)},ur=function(){return null},yt=function(){L="just",ge(function(){L="meanwhile"})},cr=function(){document.addEventListener("focusin",bt),document.addEventListener("focusout",be),window.addEventListener("blur",yt)},sr=function(){document.removeEventListener("focusin",bt),document.removeEventListener("focusout",be),window.removeEventListener("blur",yt)};function lr(e){return e.filter(function(t){var n=t.disabled;return!n})}function fr(e){var t=e.slice(-1)[0];t&&!S&&cr();var n=S,r=n&&t&&t.id===n.id;S=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(F=null,(!r||n.observed!==t.observed)&&t.onActivation(),G(),ge(G)):(sr(),F=null)}Ze.assignSyncMedium(ir);et.assignMedium(be);cn.assignMedium(function(e){return e({moveFocusInside:ht,focusInside:mt,focusNextElement:Kn,focusPrevElement:Yn})});const dr=pn(lr,fr)(ur);var kt=c.forwardRef(function(t,n){return c.createElement(nt,re({sideCar:dr,ref:n},t))}),Ot=nt.propTypes||{};Ot.sideCar;en(Ot,["sideCar"]);kt.propTypes={};const mr=kt;let _=[];const ye={documentElement:{},body:{}},vr=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),xt=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},pr=e=>([t,n])=>{ye[e][t]=document[e].style[t],document[e].style[t]=n},hr=()=>Object.entries(vr).forEach(([e,t])=>{Object.entries(t).forEach(pr(e))}),gr=e=>([t,n])=>{document[e].style[t]=ye[e][t]},br=()=>Object.entries(ye).forEach(([e,t])=>{Object.entries(t).forEach(gr(e))}),yr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function kr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||yr(e)&&o<0?xt(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function Or(e){e.ontouchstart=null,e.ontouchmove=null}const Ct=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",xt,{passive:!1}),xr=Ct(!0),Cr=Ct();function Mr(e){if(!e)throw Error("Could not run setup, an element must be provided");_.some(t=>t===e)||(_.length||(hr(),xr()),kr(e),_.push(e))}function Er(){_.forEach(Or),Cr(),br(),_=[]}const Fr=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),Sr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),Rr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}');var wr={},Tr=Object.defineProperty,Ie=Object.getOwnPropertySymbols,Br=Object.prototype.hasOwnProperty,Ir=Object.prototype.propertyIsEnumerable,_e=(e,t,n)=>t in e?Tr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_r=(e,t)=>{for(var n in t||(t={}))Br.call(t,n)&&_e(e,n,t[n]);if(Ie)for(var n of Ie(t))Ir.call(t,n)&&_e(e,n,t[n]);return e},Ar=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),Nr=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),jr=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),Mt=["en","nb","fi","da","sv"],Et="en",Pr=()=>{let e;switch(wr.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ft=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":Et},ne=e=>Mt.find(t=>e===t||e.toLowerCase().includes(t))||Ft();function Lr(){var e;if(typeof window>"u"){const t=Pr();return ne(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=Ft();return Mt.includes(t)?ne(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),ne(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Et}}var Dr=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,Hr=(e,t,n)=>{const r=Lr(),o=Dr(r,e,t,n);A.load(r,o),A.activate(r)};Hr(Nr,Ar,jr);var Wr=A.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),Ur=e=>Ye.createElement("svg",_r({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Wr}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),qr=Ur;const M=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=c.useRef(null),o=Yt(n.id),a=c.useRef(null);return zt(Sr,Fr,Rr),c.useEffect(()=>{Er(),r.current&&n.open&&Mr(r.current)},[n.open,r]),c.useEffect(()=>{var i,s;n.initialFocusRef?(s=n.initialFocusRef.current)==null||s.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(mr,{children:u.jsx("div",{onClick:n.onDismiss,className:I(n.className,g.backdrop,g.transparentBg),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>{i.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:g.modal,tabIndex:-1,children:[u.jsxs("div",{className:g.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":A._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:I(g.transitionTitle,g.titleButton,g.titleButtonLeft),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(qr,{className:I(g.titleButtonIcon)})}):n.left,u.jsx("div",{id:`${o}__title`,className:I(g.transitionTitle,n.left?g.transitionTitleCenter:g.transitionTitleColSpan),children:typeof n.title=="string"?u.jsx("h1",{className:g.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":A._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:I(g.transitionTitle,g.titleButton,g.titleButtonRight),children:u.jsx(Xt,{className:g.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:g.content,children:n.children}),!!n.footer&&u.jsx("div",{className:g.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};try{M.displayName="Modal",M.__docgenInfo={description:"A Modal dialog that renders on top the page",displayName:"Modal",props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",required:!1,type:{name:"string | Element | Element[]"}},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",required:!0,type:{name:"boolean"}},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",required:!1,type:{name:"boolean | Element | Element[]"}},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",required:!1,type:{name:"boolean | Element | Element[]"}},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",required:!1,type:{name:"Element | Element[]"}},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The modal contents",name:"children",required:!0,type:{name:"Element | Element[]"}},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",required:!1,type:{name:"(() => void)"}},onLeftClick:{defaultValue:null,description:"Handler that is called when the user clicks the left button",name:"onLeftClick",required:!1,type:{name:"(() => void)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",required:!1,type:{name:"string"}},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",required:!1,type:{name:"RefObject<any>"}}}}}catch{}const no={title:"Overlays/Modal"},W=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(M,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},U=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(M,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},q=()=>{const[e,t]=c.useState(!1),[n,r]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(M,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(y,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(Zt,{type:"checkbox",label:"I agree",onChange:r})]})]})},V=()=>{const[e,t]=c.useState(!1),n=()=>t(!e),r=c.useRef(),o=c.useRef(null);return c.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(M,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},$=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(M,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};var Ae,Ne,je;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(je=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Pe,Le,De;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(De=(Le=U.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var He,We,Ue;q.parameters={...q.parameters,docs:{...(He=q.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(Ue=(We=q.parameters)==null?void 0:We.docs)==null?void 0:Ue.source}}};var qe,Ve,$e;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...($e=(Ve=V.parameters)==null?void 0:Ve.docs)==null?void 0:$e.source}}};var Ge,Je,Ke;$.parameters={...$.parameters,docs:{...(Ge=$.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Ke=(Je=$.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const ro=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{W as Example,V as InitialFocus,q as MustConfirmToProceed,$ as Overflowing,U as WithBackAndCloseButton,ro as __namedExportsOrder,no as default};
