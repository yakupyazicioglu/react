import{j as u,C as g}from"./index-lTKFmHqk.js";import{R as Qe,r as c}from"./index-CBqU2yxZ.js";import{B as y}from"./component-De1urD0t.js";import{T as Jt}from"./component-Ce0SpLU9.js";import{r as _}from"./index.m-CtIADANO.js";import{i as I}from"./index-ClUvnnK6.js";import{c as Yt}from"./close-16-C8lDrxCI.js";import{a as Kt}from"./i18n-BdZ5C-JL.js";import{u as Qt}from"./useId-Cfvm1aBZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./item-D6BWeixL.js";var zt={},Xt=Object.defineProperty,Me=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,Ee=(e,t,n)=>t in e?Xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,tn=(e,t)=>{for(var n in t||(t={}))Zt.call(t,n)&&Ee(e,n,t[n]);if(Me)for(var n of Me(t))en.call(t,n)&&Ee(e,n,t[n]);return e},nn=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),rn=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),on=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),ze=["en","nb","fi","da","sv"],Xe="en",an=()=>{let e;switch(zt.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ze=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":Xe},z=e=>ze.find(t=>e===t||e.toLowerCase().includes(t))||Ze();function un(){var e;if(typeof window>"u"){const t=an();return z(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=Ze();return ze.includes(t)?z(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),z(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Xe}}var cn=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,ln=(e,t,n)=>{const r=un(),o=cn(r,e,t,n);I.load(r,o),I.activate(r)};ln(rn,nn,on);var sn=I.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),fn=e=>Qe.createElement("svg",tn({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${sn}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),dn=fn;function mn(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var re="data-focus-lock",et="data-focus-lock-disabled",vn="data-no-focus-lock",pn="data-autofocus-inside",hn="data-no-autofocus";function X(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function gn(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var bn=typeof window<"u"?c.useLayoutEffect:c.useEffect,we=new WeakMap;function yn(e,t){var n=gn(null,function(r){return e.forEach(function(o){return X(o,r)})});return bn(function(){var r=we.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(l){a.has(l)||X(l,null)}),a.forEach(function(l){o.has(l)||X(l,i)})}we.set(n,e)},[e]),n}var Z={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},oe=function(){return oe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},oe.apply(this,arguments)};function tt(e){return e}function nt(e,t){t===void 0&&(t=tt);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(l){return l!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(l){return a(l)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var l=n;n=[],l.forEach(a),i=n}var h=function(){var d=i;i=[],d.forEach(a)},s=function(){return Promise.resolve().then(h)};s(),n={push:function(d){i.push(d),s()},filter:function(d){return i=i.filter(d),n}}}};return o}function le(e,t){return t===void 0&&(t=tt),nt(e,t)}function On(e){e===void 0&&(e={});var t=nt(null);return t.options=oe({async:!0,ssr:!1},e),t}var rt=le({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),ot=le(),kn=le(),xn=On({async:!0}),Cn=[],se=c.forwardRef(function(t,n){var r,o=c.useState(),a=o[0],i=o[1],l=c.useRef(),h=c.useRef(!1),s=c.useRef(null),d=t.children,m=t.disabled,f=m===void 0?!1:m,b=t.noFocusGuards,p=b===void 0?!1:b,v=t.persistentFocus,k=v===void 0?!1:v,M=t.crossFrame,L=M===void 0?!0:M,S=t.autoFocus,wt=S===void 0?!0:S;t.allowTextSelection;var Ft=t.group,Rt=t.className,St=t.whiteList,Tt=t.hasPositiveIndices,be=t.shards,_t=be===void 0?Cn:be,ye=t.as,Bt=ye===void 0?"div":ye,Oe=t.lockProps,It=Oe===void 0?{}:Oe,jt=t.sideCar,ke=t.returnFocus,H=ke===void 0?!1:ke,At=t.focusOptions,Y=t.onActivation,K=t.onDeactivation,Nt=c.useState({}),Pt=Nt[0],Dt=c.useCallback(function(){s.current=s.current||document&&document.activeElement,l.current&&Y&&Y(l.current),h.current=!0},[Y]),Lt=c.useCallback(function(){h.current=!1,K&&K(l.current)},[K]);c.useEffect(function(){f||(s.current=null)},[]);var Ht=c.useCallback(function(x){var T=s.current;if(T&&T.focus){var Q=typeof H=="function"?H(T):H;if(Q){var Ce=typeof Q=="object"?Q:void 0;s.current=null,x?Promise.resolve().then(function(){return T.focus(Ce)}):T.focus(Ce)}}},[H]),Wt=c.useCallback(function(x){h.current&&rt.useMedium(x)},[]),Ut=ot.useMedium,Vt=c.useCallback(function(x){l.current!==x&&(l.current=x,i(x))},[]),qt=j((r={},r[et]=f&&"disabled",r[re]=Ft,r),It),xe=p!==!0,$t=xe&&p!=="tail",Gt=yn([n,Vt]);return c.createElement(c.Fragment,null,xe&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:f?-1:0,style:Z}),Tt?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:f?-1:1,style:Z}):null],!f&&c.createElement(jt,{id:Pt,sideCar:xn,observed:a,disabled:f,persistentFocus:k,crossFrame:L,autoFocus:wt,whiteList:St,shards:_t,onActivation:Dt,onDeactivation:Lt,returnFocus:Ht,focusOptions:At}),c.createElement(Bt,j({ref:Gt},qt,{className:Rt,onBlur:Ut,onFocus:Wt}),d),$t&&c.createElement("div",{"data-focus-guard":!0,tabIndex:f?-1:0,style:Z}))});se.propTypes={};function ae(e,t){return ae=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},ae(e,t)}function Mn(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ae(e,t)}function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function En(e,t){if(A(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(A(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wn(e){var t=En(e,"string");return A(t)=="symbol"?t:t+""}function Fn(e,t,n){return t=wn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function l(){i=e(a.map(function(s){return s.props})),t(i)}var h=function(s){Mn(d,s);function d(){return s.apply(this,arguments)||this}d.peek=function(){return i};var m=d.prototype;return m.componentDidMount=function(){a.push(this),l()},m.componentDidUpdate=function(){l()},m.componentWillUnmount=function(){var b=a.indexOf(this);a.splice(b,1),l()},m.render=function(){return Qe.createElement(o,this.props)},d}(c.PureComponent);return Fn(h,"displayName","SideEffect("+n(o)+")"),h}}var O=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},G=function(e){return Array.isArray(e)?e:[e]},at=function(e){return Array.isArray(e)?e[0]:e},Sn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},it=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},ut=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},Tn=function(e){return e.hasAttribute("inert")},_n=function(e,t){return!e||ut(e)||!Sn(e)&&!Tn(e)&&t(it(e))},ct=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=_n(t,ct.bind(void 0,e));return e.set(t,r),r},Bn=function(e,t){return e&&!ut(e)?An(e)?t(it(e)):!1:!0},lt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=Bn(t,lt.bind(void 0,e));return e.set(t,r),r},st=function(e){return e.dataset},In=function(e){return e.tagName==="BUTTON"},ft=function(e){return e.tagName==="INPUT"},dt=function(e){return ft(e)&&e.type==="radio"},jn=function(e){return!((ft(e)||In(e))&&(e.type==="hidden"||e.disabled))},An=function(e){var t=e.getAttribute(hn);return![!0,"true",""].includes(t)},fe=function(e){var t;return!!(e&&(!((t=st(e))===null||t===void 0)&&t.focusGuard))},ie=function(e){return!fe(e)},Nn=function(e){return!!e},Pn=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},Dn=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},mt=function(e,t,n){return O(e).map(function(r,o){var a=Dn(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(Pn)},Ln=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],de=Ln.join(","),Hn="".concat(de,", [data-focus-guard]"),vt=function(e,t){return O((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?Hn:de)?[r]:[],vt(r))},[])},Wn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?N([e.contentDocument.body],t):[e]},N=function(e,t){return e.reduce(function(n,r){var o,a=vt(r,t),i=(o=[]).concat.apply(o,a.map(function(l){return Wn(l,t)}));return n.concat(i,r.parentNode?O(r.parentNode.querySelectorAll(de)).filter(function(l){return l===r}):[])},[])},Un=function(e){var t=e.querySelectorAll("[".concat(pn,"]"));return O(t).map(function(n){return N([n])}).reduce(function(n,r){return n.concat(r)},[])},pt=function(e,t){return O(e).filter(function(n){return ct(t,n)}).filter(function(n){return jn(n)})},Fe=function(e,t){return t===void 0&&(t=new Map),O(e).filter(function(n){return lt(t,n)})},Re=function(e,t){return mt(pt(N(e),t),!1)},Vn=function(e,t){return pt(Un(e),t)},w=function(e,t){return e.shadowRoot?w(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:O(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?w(o,t):!1}return w(n,t)})},qn=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,l){return!t.has(l)})},ht=function(e){return e.parentNode?ht(e.parentNode):e},me=function(e){var t=G(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(re);return n.push.apply(n,o?qn(O(ht(r).querySelectorAll("[".concat(re,'="').concat(o,'"]:not([').concat(et,'="disabled"])')))):[r]),n},[])},$n=function(e){try{return e()}catch{return}},P=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?P(t.shadowRoot):t instanceof HTMLIFrameElement&&$n(function(){return t.contentWindow.document})?P(t.contentWindow.document):t}},Gn=function(e,t){return e===t},Jn=function(e,t){return!!O(e.querySelectorAll("iframe")).some(function(n){return Gn(n,t)})},gt=function(e,t){return t===void 0&&(t=P(at(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:me(e).some(function(n){return w(n,t)||Jn(n,t)})},Yn=function(e){e===void 0&&(e=document);var t=P(e);return t?O(e.querySelectorAll("[".concat(vn,"]"))).some(function(n){return w(n,t)}):!1},Kn=function(e,t){return t.filter(dt).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},ve=function(e,t){return dt(e)&&e.name?Kn(e,t):e},Qn=function(e){var t=new Set;return e.forEach(function(n){return t.add(ve(n,e))}),e.filter(function(n){return t.has(n)})},Se=function(e){return e[0]&&e.length>1?ve(e[0],e):e[0]},Te=function(e,t){return e.indexOf(ve(t,e))},ue="NEW_FOCUS",zn=function(e,t,n,r,o){var a=e.length,i=e[0],l=e[a-1],h=fe(r);if(!(r&&e.indexOf(r)>=0)){var s=r!==void 0?n.indexOf(r):-1,d=o?n.indexOf(o):s,m=o?e.indexOf(o):-1;if(s===-1)return m!==-1?m:ue;if(m===-1)return ue;var f=s-d,b=n.indexOf(i),p=n.indexOf(l),v=Qn(n),k=r!==void 0?v.indexOf(r):-1,M=k-(o?v.indexOf(o):s);if(!f&&m>=0||t.length===0)return m;var L=Te(e,t[0]),S=Te(e,t[t.length-1]);if(s<=b&&h&&Math.abs(f)>1)return S;if(s>=p&&h&&Math.abs(f)>1)return L;if(f&&Math.abs(M)>1)return m;if(s<=b)return S;if(s>p)return L;if(f)return Math.abs(f)>1?m:(a+m+f)%a}},Xn=function(e){return function(t){var n,r=(n=st(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},_e=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=Fe(r.filter(Xn(n)));return o&&o.length?Se(o):Se(Fe(t))},ce=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&ce(e.parentNode.host||e.parentNode,t),t},ee=function(e,t){for(var n=ce(e),r=ce(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},bt=function(e,t,n){var r=G(e),o=G(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(l){i=ee(i||l,l)||i,n.filter(Boolean).forEach(function(h){var s=ee(a,h);s&&(!i||w(s,i)?i=s:i=ee(s,i))})}),i},Be=function(e,t){return e.reduce(function(n,r){return n.concat(Vn(r,t))},[])},Zn=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(Nn)},er=function(e,t){var n=P(G(e).length>0?document:at(e).ownerDocument),r=me(e).filter(ie),o=bt(n||e,e,r),a=new Map,i=Re(r,a),l=i.filter(function(p){var v=p.node;return ie(v)});if(l[0]){var h=Re([o],a).map(function(p){var v=p.node;return v}),s=Zn(h,l),d=s.map(function(p){var v=p.node;return v}),m=s.filter(function(p){var v=p.tabIndex;return v>=0}).map(function(p){var v=p.node;return v}),f=zn(d,m,h,n,t);if(f===ue){var b=_e(i,m,Be(r,a))||_e(i,d,Be(r,a));if(b)return{node:b};console.warn("focus-lock: cannot find any node to move focus into");return}return f===void 0?f:s[f]}},tr=function(e){var t=me(e).filter(ie),n=bt(e,e,t),r=mt(N([n],!0),!0,!0),o=N(t,!1);return r.map(function(a){var i=a.node,l=a.index;return{node:i,index:l,lockItem:o.indexOf(i)>=0,guard:fe(i)}})},nr=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},te=0,ne=!1,yt=function(e,t,n){n===void 0&&(n={});var r=er(e,t);if(!ne&&r){if(te>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ne=!0,setTimeout(function(){ne=!1},1);return}te++,nr(r.node,n.focusOptions),te--}};function pe(e){setTimeout(e,1)}var rr=function(){return document&&document.activeElement===document.body},or=function(){return rr()||Yn()},F=null,E=null,R=null,D=!1,ar=function(){return!0},ir=function(t){return(F.whiteList||ar)(t)},ur=function(t,n){R={observerNode:t,portaledElement:n}},cr=function(t){return R&&R.portaledElement===t};function Ie(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var lr=function(t){return t&&"current"in t?t.current:t},sr=function(t){return t?!!D:D==="meanwhile"},fr=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},dr=function(t,n){return n.some(function(r){return fr(t,r,r)})},J=function(){var t=!1;if(F){var n=F,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,l=n.crossFrame,h=n.focusOptions,s=r||R&&R.portaledElement,d=document&&document.activeElement;if(s){var m=[s].concat(i.map(lr).filter(Boolean));if((!d||ir(d))&&(o||sr(l)||!or()||!E&&a)&&(s&&!(gt(m)||d&&dr(d,m)||cr(d))&&(document&&!E&&d&&!a?(d.blur&&d.blur(),document.body.focus()):(t=yt(m,E,{focusOptions:h}),R={})),D=!1,E=document&&document.activeElement),document){var f=document&&document.activeElement,b=tr(m),p=b.map(function(v){var k=v.node;return k}).indexOf(f);p>-1&&(b.filter(function(v){var k=v.guard,M=v.node;return k&&M.dataset.focusAutoGuard}).forEach(function(v){var k=v.node;return k.removeAttribute("tabIndex")}),Ie(p,b.length,1,b),Ie(p,-1,-1,b))}}}return t},Ot=function(t){J()&&t&&(t.stopPropagation(),t.preventDefault())},he=function(){return pe(J)},mr=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||ur(r,n)},vr=function(){return null},kt=function(){D="just",pe(function(){D="meanwhile"})},pr=function(){document.addEventListener("focusin",Ot),document.addEventListener("focusout",he),window.addEventListener("blur",kt)},hr=function(){document.removeEventListener("focusin",Ot),document.removeEventListener("focusout",he),window.removeEventListener("blur",kt)};function gr(e){return e.filter(function(t){var n=t.disabled;return!n})}function br(e){var t=e.slice(-1)[0];t&&!F&&pr();var n=F,r=n&&t&&t.id===n.id;F=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(E=null,(!r||n.observed!==t.observed)&&t.onActivation(),J(),pe(J)):(hr(),E=null)}rt.assignSyncMedium(mr);ot.assignMedium(he);kn.assignMedium(function(e){return e({moveFocusInside:yt,focusInside:gt})});const yr=Rn(gr,br)(vr);var xt=c.forwardRef(function(t,n){return c.createElement(se,j({sideCar:yr,ref:n},t))}),Ct=se.propTypes||{};Ct.sideCar;mn(Ct,["sideCar"]);xt.propTypes={};let B=[];const ge={documentElement:{},body:{}},Or=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Mt=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},kr=e=>([t,n])=>{ge[e][t]=document[e].style[t],document[e].style[t]=n},xr=()=>Object.entries(Or).forEach(([e,t])=>{Object.entries(t).forEach(kr(e))}),Cr=e=>([t,n])=>{document[e].style[t]=ge[e][t]},Mr=()=>Object.entries(ge).forEach(([e,t])=>{Object.entries(t).forEach(Cr(e))}),Er=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function wr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||Er(e)&&o<0?Mt(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function Fr(e){e.ontouchstart=null,e.ontouchmove=null}const Et=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",Mt,{passive:!1}),Rr=Et(!0),Sr=Et();function Tr(e){if(!e)throw Error("Could not run setup, an element must be provided");B.some(t=>t===e)||(B.length||(xr(),Rr()),wr(e),B.push(e))}function je(){B.forEach(Fr),Sr(),Mr(),B=[]}const _r=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),Br=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}'),Ir=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),C=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=c.useRef(null),o=Qt(n.id),a=c.useRef(null);return Kt(_r,Ir,Br),c.useEffect(()=>()=>je(),[]),c.useEffect(()=>{je(),r.current&&n.open&&Tr(r.current)},[n.open,r]),c.useEffect(()=>{var i,l;n.initialFocusRef?(l=n.initialFocusRef.current)==null||l.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(xt,{children:u.jsx("div",{onClick:n.onDismiss,className:_(n.className,g.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>{i.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:g.modal,tabIndex:-1,children:[u.jsxs("div",{className:g.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":I._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:_(g.transitionTitle,g.titleButton,g.titleButtonLeft),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(dn,{className:_(g.titleButtonIcon)})}):n.left,u.jsx("div",{id:`${o}__title`,className:_(g.transitionTitle,n.left?g.transitionTitleCenter:g.transitionTitleColSpan),children:typeof n.title=="string"?u.jsx("h1",{className:g.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":I._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:_(g.transitionTitle,g.titleButton,g.titleButtonRight),children:u.jsx(Yt,{className:g.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:g.content,children:n.children}),!!n.footer&&u.jsx("div",{className:g.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};try{C.displayName="Modal",C.__docgenInfo={description:"A Modal dialog that renders on top the page",displayName:"Modal",props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",required:!1,type:{name:"string | Element | Element[]"}},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",required:!0,type:{name:"boolean"}},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",required:!1,type:{name:"boolean | Element | Element[]"}},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",required:!1,type:{name:"boolean | Element | Element[]"}},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",required:!1,type:{name:"Element | Element[]"}},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The modal contents",name:"children",required:!0,type:{name:"Element | Element[]"}},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",required:!1,type:{name:"(() => void)"}},onLeftClick:{defaultValue:null,description:"Handler that is called when the user clicks the left button",name:"onLeftClick",required:!1,type:{name:"(() => void)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",required:!1,type:{name:"string"}},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",required:!1,type:{name:"RefObject<any>"}}}}}catch{}const $r={title:"Overlays/Modal"},W=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(C,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},U=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(C,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},V=()=>{const[e,t]=c.useState(!1),[n,r]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(C,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(y,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(Jt,{type:"checkbox",label:"I agree",onChange:r})]})]})},q=()=>{const[e,t]=c.useState(!1),n=()=>t(!e),r=c.useRef(),o=c.useRef(null);return c.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(C,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},$=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(C,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};var Ae,Ne,Pe;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Pe=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var De,Le,He;U.parameters={...U.parameters,docs:{...(De=U.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(He=(Le=U.parameters)==null?void 0:Le.docs)==null?void 0:He.source}}};var We,Ue,Ve;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};var qe,$e,Ge;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
        <p>Content information goes here. Optional illustration on top. Can contain links.</p>
        <a href="#" onClick={event => event.preventDefault()}>
          Optional link to read more.
        </a>
      </Modal>
    </>;
}`,...(Ge=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};var Je,Ye,Ke;$.parameters={...$.parameters,docs:{...(Je=$.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>)}
      </Modal>
    </>;
}`,...(Ke=(Ye=$.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};const Gr=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{W as Example,q as InitialFocus,V as MustConfirmToProceed,$ as Overflowing,U as WithBackAndCloseButton,Gr as __namedExportsOrder,$r as default};
