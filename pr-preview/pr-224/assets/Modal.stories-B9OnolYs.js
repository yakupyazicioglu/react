import{j as u,C as g}from"./index-CRKZHI9W.js";import{r as s,R as Ve}from"./index-BBkUAzwr.js";import{r as I}from"./index.m-CtIADANO.js";import{u as Gt}from"./useId-CZF6ub_S.js";import{_ as ne,a as Vt}from"./inheritsLoose-BqKIO1NE.js";import{i as L}from"./index-CZ0b_Np5.js";import{a as Kt}from"./i18n-Dd5GeZAq.js";import{c as Yt}from"./close-16-BU_GuxoK.js";import{B as y}from"./component-CKBi9g-J.js";import{T as Qt}from"./component-ChNdadtP.js";import"./item-C-DTdq5K.js";function zt(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var re="data-focus-lock",Ke="data-focus-lock-disabled",Zt="data-no-focus-lock",en="data-autofocus-inside",tn="data-no-autofocus";function Y(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function nn(e,t){var n=s.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var rn=typeof window<"u"?s.useLayoutEffect:s.useEffect,Oe=new WeakMap;function on(e,t){var n=nn(t||null,function(r){return e.forEach(function(o){return Y(o,r)})});return rn(function(){var r=Oe.get(n);if(r){var o=new Set(r),a=new Set(e),i=n.current;o.forEach(function(c){a.has(c)||Y(c,null)}),a.forEach(function(c){o.has(c)||Y(c,i)})}Oe.set(n,e)},[e]),n}var Q={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},oe=function(){return oe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},oe.apply(this,arguments)};function Ye(e){return e}function Qe(e,t){t===void 0&&(t=Ye);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(c){return c!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(c){return a(c)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var c=n;n=[],c.forEach(a),i=n}var h=function(){var d=i;i=[],d.forEach(a)},l=function(){return Promise.resolve().then(h)};l(),n={push:function(d){i.push(d),l()},filter:function(d){return i=i.filter(d),n}}}};return o}function se(e,t){return t===void 0&&(t=Ye),Qe(e,t)}function an(e){e===void 0&&(e={});var t=Qe(null);return t.options=oe({async:!0,ssr:!1},e),t}var ze=se({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),Ze=se(),un=se(),sn=an({async:!0}),cn=[],et=s.forwardRef(function(t,n){var r,o=s.useState(),a=o[0],i=o[1],c=s.useRef(),h=s.useRef(!1),l=s.useRef(null),d=t.children,m=t.disabled,f=m===void 0?!1:m,b=t.noFocusGuards,p=b===void 0?!1:b,v=t.persistentFocus,k=v===void 0?!1:v,C=t.crossFrame,U=C===void 0?!0:C,F=t.autoFocus,St=F===void 0?!0:F;t.allowTextSelection;var wt=t.group,Tt=t.className,Ft=t.whiteList,Rt=t.hasPositiveIndices,he=t.shards,It=he===void 0?cn:he,ge=t.as,Bt=ge===void 0?"div":ge,be=t.lockProps,_t=be===void 0?{}:be,At=t.sideCar,ye=t.returnFocus,X=ye===void 0?!1:ye,Nt=t.focusOptions,G=t.onActivation,V=t.onDeactivation,jt=s.useState({}),Pt=jt[0],Lt=s.useCallback(function(){l.current=l.current||document&&document.activeElement,c.current&&G&&G(c.current),h.current=!0},[G]),Dt=s.useCallback(function(){h.current=!1,V&&V(c.current)},[V]);s.useEffect(function(){f||(l.current=null)},[]);var Jt=s.useCallback(function(O){var R=l.current;if(R&&R.focus){var K=typeof X=="function"?X(R):X;if(K){var ke=typeof K=="object"?K:void 0;l.current=null,O?Promise.resolve().then(function(){return R.focus(ke)}):R.focus(ke)}}},[X]),Ht=s.useCallback(function(O){h.current&&ze.useMedium(O)},[]),Wt=Ze.useMedium,Ut=s.useCallback(function(O){c.current!==O&&(c.current=O,i(O))},[]),Xt=ne((r={},r[Ke]=f&&"disabled",r[re]=wt,r),_t),Ee=p!==!0,qt=Ee&&p!=="tail",$t=on([n,Ut]);return s.createElement(s.Fragment,null,Ee&&[s.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:f?-1:0,style:Q}),Rt?s.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:f?-1:1,style:Q}):null],!f&&s.createElement(At,{id:Pt,sideCar:sn,observed:a,disabled:f,persistentFocus:k,crossFrame:U,autoFocus:St,whiteList:Ft,shards:It,onActivation:Lt,onDeactivation:Dt,returnFocus:Jt,focusOptions:Nt}),s.createElement(Bt,ne({ref:$t},Xt,{className:Tt,onBlur:Wt,onFocus:Ht}),d),qt&&s.createElement("div",{"data-focus-guard":!0,tabIndex:f?-1:0,style:Q}))});et.propTypes={};const tt=et;function D(e){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(e)}function ln(e,t){if(D(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(D(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fn(e){var t=ln(e,"string");return D(t)=="symbol"?t:t+""}function dn(e,t,n){return t=fn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function c(){i=e(a.map(function(l){return l.props})),t(i)}var h=function(l){Vt(d,l);function d(){return l.apply(this,arguments)||this}d.peek=function(){return i};var m=d.prototype;return m.componentDidMount=function(){a.push(this),c()},m.componentDidUpdate=function(){c()},m.componentWillUnmount=function(){var b=a.indexOf(this);a.splice(b,1),c()},m.render=function(){return Ve.createElement(o,this.props)},d}(s.PureComponent);return dn(h,"displayName","SideEffect("+n(o)+")"),h}}var E=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},q=function(e){return Array.isArray(e)?e:[e]},nt=function(e){return Array.isArray(e)?e[0]:e},vn=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},rt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},ot=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},pn=function(e){return e.hasAttribute("inert")},hn=function(e,t){return!e||ot(e)||!vn(e)&&!pn(e)&&t(rt(e))},at=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=hn(t,at.bind(void 0,e));return e.set(t,r),r},gn=function(e,t){return e&&!ot(e)?En(e)?t(rt(e)):!1:!0},it=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=gn(t,it.bind(void 0,e));return e.set(t,r),r},ut=function(e){return e.dataset},bn=function(e){return e.tagName==="BUTTON"},st=function(e){return e.tagName==="INPUT"},ct=function(e){return st(e)&&e.type==="radio"},yn=function(e){return!((st(e)||bn(e))&&(e.type==="hidden"||e.disabled))},En=function(e){var t=e.getAttribute(tn);return![!0,"true",""].includes(t)},ce=function(e){var t;return!!(e&&(!((t=ut(e))===null||t===void 0)&&t.focusGuard))},ae=function(e){return!ce(e)},kn=function(e){return!!e},On=function(e,t){var n=Math.max(0,e.tabIndex),r=Math.max(0,t.tabIndex),o=n-r,a=e.index-t.index;if(o){if(!n)return 1;if(!r)return-1}return o||a},Cn=function(e){return e.tabIndex<0&&!e.hasAttribute("tabindex")?0:e.tabIndex},lt=function(e,t,n){return E(e).map(function(r,o){var a=Cn(r);return{node:r,index:o,tabIndex:n&&a===-1?(r.dataset||{}).focusGuard?0:-1:a}}).filter(function(r){return!t||r.tabIndex>=0}).sort(On)},xn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],le=xn.join(","),Mn="".concat(le,", [data-focus-guard]"),ft=function(e,t){return E((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?Mn:le)?[r]:[],ft(r))},[])},Sn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?J([e.contentDocument.body],t):[e]},J=function(e,t){return e.reduce(function(n,r){var o,a=ft(r,t),i=(o=[]).concat.apply(o,a.map(function(c){return Sn(c,t)}));return n.concat(i,r.parentNode?E(r.parentNode.querySelectorAll(le)).filter(function(c){return c===r}):[])},[])},wn=function(e){var t=e.querySelectorAll("[".concat(en,"]"));return E(t).map(function(n){return J([n])}).reduce(function(n,r){return n.concat(r)},[])},dt=function(e,t){return E(e).filter(function(n){return at(t,n)}).filter(function(n){return yn(n)})},Ce=function(e,t){return t===void 0&&(t=new Map),E(e).filter(function(n){return it(t,n)})},xe=function(e,t){return lt(dt(J(e),t),!1)},Tn=function(e,t){return dt(wn(e),t)},M=function(e,t){return e.shadowRoot?M(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:E(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?M(o,t):!1}return M(n,t)})},Fn=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,c){return!t.has(c)})},mt=function(e){return e.parentNode?mt(e.parentNode):e},fe=function(e){var t=q(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(re);return n.push.apply(n,o?Fn(E(mt(r).querySelectorAll("[".concat(re,'="').concat(o,'"]:not([').concat(Ke,'="disabled"])')))):[r]),n},[])},Rn=function(e){try{return e()}catch{return}},H=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?H(t.shadowRoot):t instanceof HTMLIFrameElement&&Rn(function(){return t.contentWindow.document})?H(t.contentWindow.document):t}},In=function(e,t){return e===t},Bn=function(e,t){return!!E(e.querySelectorAll("iframe")).some(function(n){return In(n,t)})},vt=function(e,t){return t===void 0&&(t=H(nt(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:fe(e).some(function(n){return M(n,t)||Bn(n,t)})},_n=function(e){e===void 0&&(e=document);var t=H(e);return t?E(e.querySelectorAll("[".concat(Zt,"]"))).some(function(n){return M(n,t)}):!1},An=function(e,t){return t.filter(ct).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},de=function(e,t){return ct(e)&&e.name?An(e,t):e},Nn=function(e){var t=new Set;return e.forEach(function(n){return t.add(de(n,e))}),e.filter(function(n){return t.has(n)})},Me=function(e){return e[0]&&e.length>1?de(e[0],e):e[0]},Se=function(e,t){return e.indexOf(de(t,e))},ie="NEW_FOCUS",jn=function(e,t,n,r,o){var a=e.length,i=e[0],c=e[a-1],h=ce(r);if(!(r&&e.indexOf(r)>=0)){var l=r!==void 0?n.indexOf(r):-1,d=o?n.indexOf(o):l,m=o?e.indexOf(o):-1;if(l===-1)return m!==-1?m:ie;if(m===-1)return ie;var f=l-d,b=n.indexOf(i),p=n.indexOf(c),v=Nn(n),k=r!==void 0?v.indexOf(r):-1,C=k-(o?v.indexOf(o):l);if(!f&&m>=0||t.length===0)return m;var U=Se(e,t[0]),F=Se(e,t[t.length-1]);if(l<=b&&h&&Math.abs(f)>1)return F;if(l>=p&&h&&Math.abs(f)>1)return U;if(f&&Math.abs(C)>1)return m;if(l<=b)return F;if(l>p)return U;if(f)return Math.abs(f)>1?m:(a+m+f)%a}},Pn=function(e){return function(t){var n,r=(n=ut(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},we=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=Ce(r.filter(Pn(n)));return o&&o.length?Me(o):Me(Ce(t))},ue=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&ue(e.parentNode.host||e.parentNode,t),t},z=function(e,t){for(var n=ue(e),r=ue(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},pt=function(e,t,n){var r=q(e),o=q(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(c){i=z(i||c,c)||i,n.filter(Boolean).forEach(function(h){var l=z(a,h);l&&(!i||M(l,i)?i=l:i=z(l,i))})}),i},Te=function(e,t){return e.reduce(function(n,r){return n.concat(Tn(r,t))},[])},Ln=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(kn)},Dn=function(e,t){var n=H(q(e).length>0?document:nt(e).ownerDocument),r=fe(e).filter(ae),o=pt(n||e,e,r),a=new Map,i=xe(r,a),c=i.filter(function(p){var v=p.node;return ae(v)});if(c[0]){var h=xe([o],a).map(function(p){var v=p.node;return v}),l=Ln(h,c),d=l.map(function(p){var v=p.node;return v}),m=l.filter(function(p){var v=p.tabIndex;return v>=0}).map(function(p){var v=p.node;return v}),f=jn(d,m,h,n,t);if(f===ie){var b=we(i,m,Te(r,a))||we(i,d,Te(r,a));if(b)return{node:b};console.warn("focus-lock: cannot find any node to move focus into");return}return f===void 0?f:l[f]}},Jn=function(e){var t=fe(e).filter(ae),n=pt(e,e,t),r=lt(J([n],!0),!0,!0),o=J(t,!1);return r.map(function(a){var i=a.node,c=a.index;return{node:i,index:c,lockItem:o.indexOf(i)>=0,guard:ce(i)}})},Hn=function(e,t){e&&("focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus())},Z=0,ee=!1,ht=function(e,t,n){n===void 0&&(n={});var r=Dn(e,t);if(!ee&&r){if(Z>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),ee=!0,setTimeout(function(){ee=!1},1);return}Z++,Hn(r.node,n.focusOptions),Z--}};function me(e){setTimeout(e,1)}var Wn=function(){return document&&document.activeElement===document.body},Un=function(){return Wn()||_n()},S=null,x=null,w=null,W=!1,Xn=function(){return!0},qn=function(t){return(S.whiteList||Xn)(t)},$n=function(t,n){w={observerNode:t,portaledElement:n}},Gn=function(t){return w&&w.portaledElement===t};function Fe(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Vn=function(t){return t&&"current"in t?t.current:t},Kn=function(t){return t?!!W:W==="meanwhile"},Yn=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Qn=function(t,n){return n.some(function(r){return Yn(t,r,r)})},$=function(){var t=!1;if(S){var n=S,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,c=n.crossFrame,h=n.focusOptions,l=r||w&&w.portaledElement,d=document&&document.activeElement;if(l){var m=[l].concat(i.map(Vn).filter(Boolean));if((!d||qn(d))&&(o||Kn(c)||!Un()||!x&&a)&&(l&&!(vt(m)||d&&Qn(d,m)||Gn(d))&&(document&&!x&&d&&!a?(d.blur&&d.blur(),document.body.focus()):(t=ht(m,x,{focusOptions:h}),w={})),W=!1,x=document&&document.activeElement),document){var f=document&&document.activeElement,b=Jn(m),p=b.map(function(v){var k=v.node;return k}).indexOf(f);p>-1&&(b.filter(function(v){var k=v.guard,C=v.node;return k&&C.dataset.focusAutoGuard}).forEach(function(v){var k=v.node;return k.removeAttribute("tabIndex")}),Fe(p,b.length,1,b),Fe(p,-1,-1,b))}}}return t},gt=function(t){$()&&t&&(t.stopPropagation(),t.preventDefault())},ve=function(){return me($)},zn=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||$n(r,n)},Zn=function(){return null},bt=function(){W="just",me(function(){W="meanwhile"})},er=function(){document.addEventListener("focusin",gt),document.addEventListener("focusout",ve),window.addEventListener("blur",bt)},tr=function(){document.removeEventListener("focusin",gt),document.removeEventListener("focusout",ve),window.removeEventListener("blur",bt)};function nr(e){return e.filter(function(t){var n=t.disabled;return!n})}function rr(e){var t=e.slice(-1)[0];t&&!S&&er();var n=S,r=n&&t&&t.id===n.id;S=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(x=null,(!r||n.observed!==t.observed)&&t.onActivation(),$(),me($)):(tr(),x=null)}ze.assignSyncMedium(zn);Ze.assignMedium(ve);un.assignMedium(function(e){return e({moveFocusInside:ht,focusInside:vt})});const or=mn(nr,rr)(Zn);var yt=s.forwardRef(function(t,n){return s.createElement(tt,ne({sideCar:or,ref:n},t))}),Et=tt.propTypes||{};Et.sideCar;zt(Et,["sideCar"]);yt.propTypes={};const ar=yt;let P=[];const pe={documentElement:{},body:{}},ir=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),kt=e=>{var t;e.touches.length>1||((t=e.preventDefault)==null||t.call(e))},ur=e=>([t,n])=>{pe[e][t]=document[e].style[t],document[e].style[t]=n},sr=()=>Object.entries(ir).forEach(([e,t])=>{Object.entries(t).forEach(ur(e))}),cr=e=>([t,n])=>{document[e].style[t]=pe[e][t]},lr=()=>Object.entries(pe).forEach(([e,t])=>{Object.entries(t).forEach(cr(e))}),fr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function dr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||fr(e)&&o<0?kt(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function mr(e){e.ontouchstart=null,e.ontouchmove=null}const Ot=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",kt,{passive:!1}),vr=Ot(!0),pr=Ot();function hr(e){if(!e)throw Error("Could not run setup, an element must be provided");P.some(t=>t===e)||(P.length||(sr(),vr()),dr(e),P.push(e))}function Re(){P.forEach(mr),pr(),lr(),P=[]}const gr=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),br=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),yr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}');var Er={},kr=Object.defineProperty,Ie=Object.getOwnPropertySymbols,Or=Object.prototype.hasOwnProperty,Cr=Object.prototype.propertyIsEnumerable,Be=(e,t,n)=>t in e?kr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xr=(e,t)=>{for(var n in t||(t={}))Or.call(t,n)&&Be(e,n,t[n]);if(Ie)for(var n of Ie(t))Cr.call(t,n)&&Be(e,n,t[n]);return e},Mr=JSON.parse('{"icon.title.arrow-left":"Pil som peker mot venstre"}'),Sr=JSON.parse('{"icon.title.arrow-left":"Leftward-pointing arrow"}'),wr=JSON.parse('{"icon.title.arrow-left":"Vasemmalle osoittava nuoli"}'),Ct=["en","nb","fi","da","sv"],xt="en",Tr=()=>{let e;switch(Er.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Mt=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":xt},te=e=>Ct.find(t=>e===t||e.toLowerCase().includes(t))||Mt();function Fr(){var e;if(typeof window>"u"){const t=Tr();return te(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=Mt();return Ct.includes(t)?te(t??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),te(n))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),xt}}var Rr=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,Ir=(e,t,n)=>{const r=Fr(),o=Rr(r,e,t,n);L.load(r,o),L.activate(r)};Ir(Sr,Mr,wr);var Br=L.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"}),_r=e=>Ve.createElement("svg",xr({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Br}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path>`}},e)),Ar=_r;const T=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=s.useRef(null),o=Gt(n.id),a=s.useRef(null);return Kt(br,gr,yr),s.useEffect(()=>()=>Re(),[]),s.useEffect(()=>{Re(),r.current&&n.open&&hr(r.current)},[n.open,r]),s.useEffect(()=>{var i,c;n.initialFocusRef?(c=n.initialFocusRef.current)==null||c.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(ar,{children:u.jsx("div",{onClick:n.onDismiss,className:I(n.className,g.backdrop),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>{i.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:g.modal,tabIndex:-1,children:[u.jsxs("div",{className:g.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":L._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:I(g.transitionTitle,g.titleButton,g.titleButtonLeft),onClick:n.onLeftClick?n.onLeftClick:n.onDismiss,children:u.jsx(Ar,{className:I(g.titleButtonIcon)})}):n.left,u.jsx("div",{id:`${o}__title`,className:I(g.transitionTitle,n.left?g.transitionTitleCenter:g.transitionTitleColSpan),children:typeof n.title=="string"?u.jsx("h1",{className:g.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":L._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:I(g.transitionTitle,g.titleButton,g.titleButtonRight),children:u.jsx(Yt,{className:g.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:g.content,children:n.children}),!!n.footer&&u.jsx("div",{className:g.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};T.__docgenInfo={description:"A Modal dialog that renders on top the page",methods:[],displayName:"Modal",props:{title:{required:!1,tsType:{name:"union",raw:"string | JSX.Element | JSX.Element[]",elements:[{name:"string"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A string or your own custom elements"},open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open or not"},left:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default back button or your own custom elements"},right:{required:!1,tsType:{name:"union",raw:"boolean | JSX.Element | JSX.Element[]",elements:[{name:"boolean"},{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"A default close button or your own custom elements"},footer:{required:!1,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"Buttons passed to the footer"},className:{required:!1,tsType:{name:"string"},description:"Additional classes added to the container"},id:{required:!1,tsType:{name:"string"},description:"An id for the container and ARIA attributes. A random id is generated if none is provided."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to the contianer"},children:{required:!0,tsType:{name:"union",raw:"JSX.Element | JSX.Element[]",elements:[{name:"JSX.Element"},{name:"Array",elements:[{name:"JSX.Element"}],raw:"JSX.Element[]"}]},description:"The modal contents"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user presses *esc* or clicks outside the modal"},onLeftClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler that is called when the user clicks the left button"},"aria-label":{required:!1,tsType:{name:"string"},description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined."},initialFocusRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<any>",elements:[{name:"any"}]},description:"A reference to the element that should be focused. By default it'll be the first interactive element."}}};const $r={title:"Overlays/Modal"},B=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(T,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},_=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(T,{open:e,left:!0,right:!0,onDismiss:n,onLeftClick:()=>{console.log("left clicked"),n()},title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},A=()=>{const[e,t]=s.useState(!1),[n,r]=s.useState(!1),o=s.useRef(null);s.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(T,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(y,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(Qt,{type:"checkbox",label:"I agree",onChange:r})]})]})},N=()=>{const[e,t]=s.useState(!1),n=()=>t(!e),r=s.useRef(),o=s.useRef(null);return s.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(T,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},j=()=>{const[e,t]=s.useState(!0),n=()=>t(!e),r=s.useRef(null);return s.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(y,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(T,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(y,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(y,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};B.__docgenInfo={description:"",methods:[],displayName:"Example"};_.__docgenInfo={description:"",methods:[],displayName:"WithBackAndCloseButton"};A.__docgenInfo={description:"",methods:[],displayName:"MustConfirmToProceed"};N.__docgenInfo={description:"",methods:[],displayName:"InitialFocus"};j.__docgenInfo={description:"",methods:[],displayName:"Overflowing"};var _e,Ae,Ne;B.parameters={...B.parameters,docs:{...(_e=B.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var je,Pe,Le;_.parameters={..._.parameters,docs:{...(je=_.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(Le=(Pe=_.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var De,Je,He;A.parameters={...A.parameters,docs:{...(De=A.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(He=(Je=A.parameters)==null?void 0:Je.docs)==null?void 0:He.source}}};var We,Ue,Xe;N.parameters={...N.parameters,docs:{...(We=N.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Xe=(Ue=N.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var qe,$e,Ge;j.parameters={...j.parameters,docs:{...(qe=j.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(Ge=($e=j.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};const Gr=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{B as Example,N as InitialFocus,A as MustConfirmToProceed,j as Overflowing,_ as WithBackAndCloseButton,Gr as __namedExportsOrder,$r as default};
