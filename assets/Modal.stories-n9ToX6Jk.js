import{j as u,B as v}from"./index-0jAbNjcn.js";import{r as c,R as Ge}from"./index-4g5l5LRQ.js";import{r as T}from"./index.m-0-FAh1ao.js";import{u as Pt}from"./useId-athjWQYk.js";import{a as Lt,i as xe}from"./i18n-G6_82uWZ.js";import{c as Ht}from"./close-16-wb7ZPp3Y.js";import{i as ee}from"./index-XwI9xEnt.js";import{B as b}from"./component-qnpGJx6n.js";import{T as Wt}from"./component-bD0cNhSM.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./item-A6VCLy8O.js";function Ut(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}var te="data-focus-lock",$e="data-focus-lock-disabled",qt="data-no-focus-lock",Vt="data-autofocus-inside",Gt="data-no-autofocus";function $t(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Yt(e,t){var n=c.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}function Jt(e,t){return Yt(t||null,function(n){return e.forEach(function(r){return $t(r,n)})})}var Q={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},ne=function(){return ne=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},ne.apply(this,arguments)};function Ye(e){return e}function Je(e,t){t===void 0&&(t=Ye);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var i=t(a,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(a){for(r=!0;n.length;){var i=n;n=[],i.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(a),i=n}var m=function(){var l=i;i=[],l.forEach(a)},d=function(){return Promise.resolve().then(m)};d(),n={push:function(l){i.push(l),d()},filter:function(l){return i=i.filter(l),n}}}};return o}function ue(e,t){return t===void 0&&(t=Ye),Je(e,t)}function Kt(e){e===void 0&&(e={});var t=Je(null);return t.options=ne({async:!0,ssr:!1},e),t}var Ke=ue({},function(e){var t=e.target,n=e.currentTarget;return{target:t,currentTarget:n}}),Qe=ue(),Qt=ue(),zt=Kt({async:!0}),Xt=[],se=c.forwardRef(function(t,n){var r,o=c.useState(),a=o[0],i=o[1],s=c.useRef(),m=c.useRef(!1),d=c.useRef(null),l=t.children,f=t.disabled,h=t.noFocusGuards,p=t.persistentFocus,g=t.crossFrame,y=t.autoFocus;t.allowTextSelection;var x=t.group,k=t.className,j=t.whiteList,xt=t.hasPositiveIndices,he=t.shards,Mt=he===void 0?Xt:he,ge=t.as,Ct=ge===void 0?"div":ge,be=t.lockProps,kt=be===void 0?{}:be,Et=t.sideCar,D=t.returnFocus,Ft=t.focusOptions,Y=t.onActivation,J=t.onDeactivation,St=c.useState({}),wt=St[0],Rt=c.useCallback(function(){d.current=d.current||document&&document.activeElement,s.current&&Y&&Y(s.current),m.current=!0},[Y]),Tt=c.useCallback(function(){m.current=!1,J&&J(s.current)},[J]);c.useEffect(function(){f||(d.current=null)},[]);var Bt=c.useCallback(function(M){var R=d.current;if(R&&R.focus){var K=typeof D=="function"?D(R):D;if(K){var Oe=typeof K=="object"?K:void 0;d.current=null,M?Promise.resolve().then(function(){return R.focus(Oe)}):R.focus(Oe)}}},[D]),_t=c.useCallback(function(M){m.current&&Ke.useMedium(M)},[]),It=Qe.useMedium,At=c.useCallback(function(M){s.current!==M&&(s.current=M,i(M))},[]),Nt=_((r={},r[$e]=f&&"disabled",r[te]=x,r),kt),ye=h!==!0,jt=ye&&h!=="tail",Dt=Jt([n,At]);return c.createElement(c.Fragment,null,ye&&[c.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:f?-1:0,style:Q}),xt?c.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:f?-1:1,style:Q}):null],!f&&c.createElement(Et,{id:wt,sideCar:zt,observed:a,disabled:f,persistentFocus:p,crossFrame:g,autoFocus:y,whiteList:j,shards:Mt,onActivation:Rt,onDeactivation:Tt,returnFocus:Bt,focusOptions:Ft}),c.createElement(Ct,_({ref:Dt},Nt,{className:k,onBlur:It,onFocus:_t}),l),jt&&c.createElement("div",{"data-focus-guard":!0,tabIndex:f?-1:0,style:Q}))});se.propTypes={};se.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const ze=se;function re(e,t){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},re(e,t)}function Zt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,re(e,t)}function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function en(e,t){if(I(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(I(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function tn(e){var t=en(e,"string");return I(t)==="symbol"?t:String(t)}function nn(e,t,n){return t=tn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rn(e,t){function n(r){return r.displayName||r.name||"Component"}return function(o){var a=[],i;function s(){i=e(a.map(function(d){return d.props})),t(i)}var m=function(d){Zt(l,d);function l(){return d.apply(this,arguments)||this}l.peek=function(){return i};var f=l.prototype;return f.componentDidMount=function(){a.push(this),s()},f.componentDidUpdate=function(){s()},f.componentWillUnmount=function(){var p=a.indexOf(this);a.splice(p,1),s()},f.render=function(){return Ge.createElement(o,this.props)},l}(c.PureComponent);return nn(m,"displayName","SideEffect("+n(o)+")"),m}}var O=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n];return t},q=function(e){return Array.isArray(e)?e:[e]},Xe=function(e){return Array.isArray(e)?e[0]:e},on=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},Ze=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},et=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},an=function(e,t){return!e||et(e)||!on(e)&&t(Ze(e))},tt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=an(t,tt.bind(void 0,e));return e.set(t,r),r},un=function(e,t){return e&&!et(e)?ln(e)?t(Ze(e)):!1:!0},nt=function(e,t){var n=e.get(t);if(n!==void 0)return n;var r=un(t,nt.bind(void 0,e));return e.set(t,r),r},rt=function(e){return e.dataset},sn=function(e){return e.tagName==="BUTTON"},ot=function(e){return e.tagName==="INPUT"},at=function(e){return ot(e)&&e.type==="radio"},cn=function(e){return!((ot(e)||sn(e))&&(e.type==="hidden"||e.disabled))},ln=function(e){var t=e.getAttribute(Gt);return![!0,"true",""].includes(t)},ce=function(e){var t;return!!(e&&(!((t=rt(e))===null||t===void 0)&&t.focusGuard))},V=function(e){return!ce(e)},fn=function(e){return!!e},dn=function(e,t){var n=e.tabIndex-t.tabIndex,r=e.index-t.index;if(n){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return n||r},it=function(e,t,n){return O(e).map(function(r,o){return{node:r,index:o,tabIndex:n&&r.tabIndex===-1?(r.dataset||{}).focusGuard?0:-1:r.tabIndex}}).filter(function(r){return!t||r.tabIndex>=0}).sort(dn)},mn=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],le=mn.join(","),vn="".concat(le,", [data-focus-guard]"),ut=function(e,t){return O((e.shadowRoot||e).children).reduce(function(n,r){return n.concat(r.matches(t?vn:le)?[r]:[],ut(r))},[])},pn=function(e,t){var n;return e instanceof HTMLIFrameElement&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?$([e.contentDocument.body],t):[e]},$=function(e,t){return e.reduce(function(n,r){var o,a=ut(r,t),i=(o=[]).concat.apply(o,a.map(function(s){return pn(s,t)}));return n.concat(i,r.parentNode?O(r.parentNode.querySelectorAll(le)).filter(function(s){return s===r}):[])},[])},hn=function(e){var t=e.querySelectorAll("[".concat(Vt,"]"));return O(t).map(function(n){return $([n])}).reduce(function(n,r){return n.concat(r)},[])},fe=function(e,t){return O(e).filter(function(n){return tt(t,n)}).filter(function(n){return cn(n)})},Me=function(e,t){return t===void 0&&(t=new Map),O(e).filter(function(n){return nt(t,n)})},oe=function(e,t,n){return it(fe($(e,n),t),!0,n)},Ce=function(e,t){return it(fe($(e),t),!1)},gn=function(e,t){return fe(hn(e),t)},F=function(e,t){return e.shadowRoot?F(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:O(e.children).some(function(n){var r;if(n instanceof HTMLIFrameElement){var o=(r=n.contentDocument)===null||r===void 0?void 0:r.body;return o?F(o,t):!1}return F(n,t)})},bn=function(e){for(var t=new Set,n=e.length,r=0;r<n;r+=1)for(var o=r+1;o<n;o+=1){var a=e[r].compareDocumentPosition(e[o]);(a&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(a&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(r)}return e.filter(function(i,s){return!t.has(s)})},st=function(e){return e.parentNode?st(e.parentNode):e},de=function(e){var t=q(e);return t.filter(Boolean).reduce(function(n,r){var o=r.getAttribute(te);return n.push.apply(n,o?bn(O(st(r).querySelectorAll("[".concat(te,'="').concat(o,'"]:not([').concat($e,'="disabled"])')))):[r]),n},[])},yn=function(e){try{return e()}catch{return}},A=function(e){if(e===void 0&&(e=document),!(!e||!e.activeElement)){var t=e.activeElement;return t.shadowRoot?A(t.shadowRoot):t instanceof HTMLIFrameElement&&yn(function(){return t.contentWindow.document})?A(t.contentWindow.document):t}},On=function(e,t){return e===t},xn=function(e,t){return!!O(e.querySelectorAll("iframe")).some(function(n){return On(n,t)})},ct=function(e,t){return t===void 0&&(t=A(Xe(e).ownerDocument)),!t||t.dataset&&t.dataset.focusGuard?!1:de(e).some(function(n){return F(n,t)||xn(n,t)})},Mn=function(e){e===void 0&&(e=document);var t=A(e);return t?O(e.querySelectorAll("[".concat(qt,"]"))).some(function(n){return F(n,t)}):!1},Cn=function(e,t){return t.filter(at).filter(function(n){return n.name===e.name}).filter(function(n){return n.checked})[0]||e},me=function(e,t){return at(e)&&e.name?Cn(e,t):e},kn=function(e){var t=new Set;return e.forEach(function(n){return t.add(me(n,e))}),e.filter(function(n){return t.has(n)})},ke=function(e){return e[0]&&e.length>1?me(e[0],e):e[0]},Ee=function(e,t){return e.length>1?e.indexOf(me(e[t],e)):t},lt="NEW_FOCUS",En=function(e,t,n,r){var o=e.length,a=e[0],i=e[o-1],s=ce(n);if(!(n&&e.indexOf(n)>=0)){var m=n!==void 0?t.indexOf(n):-1,d=r?t.indexOf(r):m,l=r?e.indexOf(r):-1,f=m-d,h=t.indexOf(a),p=t.indexOf(i),g=kn(t),y=n!==void 0?g.indexOf(n):-1,x=y-(r?g.indexOf(r):m),k=Ee(e,0),j=Ee(e,o-1);if(m===-1||l===-1)return lt;if(!f&&l>=0)return l;if(m<=h&&s&&Math.abs(f)>1)return j;if(m>=p&&s&&Math.abs(f)>1)return k;if(f&&Math.abs(x)>1)return l;if(m<=h)return j;if(m>p)return k;if(f)return Math.abs(f)>1?l:(o+l+f)%o}},Fn=function(e){return function(t){var n,r=(n=rt(t))===null||n===void 0?void 0:n.autofocus;return t.autofocus||r!==void 0&&r!=="false"||e.indexOf(t)>=0}},Sn=function(e,t,n){var r=e.map(function(a){var i=a.node;return i}),o=Me(r.filter(Fn(n)));return o&&o.length?ke(o):ke(Me(t))},ae=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&ae(e.parentNode.host||e.parentNode,t),t},z=function(e,t){for(var n=ae(e),r=ae(t),o=0;o<n.length;o+=1){var a=n[o];if(r.indexOf(a)>=0)return a}return!1},ft=function(e,t,n){var r=q(e),o=q(t),a=r[0],i=!1;return o.filter(Boolean).forEach(function(s){i=z(i||s,s)||i,n.filter(Boolean).forEach(function(m){var d=z(a,m);d&&(!i||F(d,i)?i=d:i=z(d,i))})}),i},wn=function(e,t){return e.reduce(function(n,r){return n.concat(gn(r,t))},[])},Rn=function(e,t){var n=new Map;return t.forEach(function(r){return n.set(r.node,r)}),e.map(function(r){return n.get(r)}).filter(fn)},Tn=function(e,t){var n=A(q(e).length>0?document:Xe(e).ownerDocument),r=de(e).filter(V),o=ft(n||e,e,r),a=new Map,i=Ce(r,a),s=oe(r,a).filter(function(p){var g=p.node;return V(g)});if(!(!s[0]&&(s=i,!s[0]))){var m=Ce([o],a).map(function(p){var g=p.node;return g}),d=Rn(m,s),l=d.map(function(p){var g=p.node;return g}),f=En(l,m,n,t);if(f===lt){var h=Sn(i,l,wn(r,a));if(h)return{node:h};console.warn("focus-lock: cannot find any node to move focus into");return}return f===void 0?f:d[f]}},Bn=function(e){var t=de(e).filter(V),n=ft(e,e,t),r=new Map,o=oe([n],r,!0),a=oe(t,r).filter(function(i){var s=i.node;return V(s)}).map(function(i){var s=i.node;return s});return o.map(function(i){var s=i.node,m=i.index;return{node:s,index:m,lockItem:a.indexOf(s)>=0,guard:ce(s)}})},_n=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},X=0,Z=!1,dt=function(e,t,n){n===void 0&&(n={});var r=Tn(e,t);if(!Z&&r){if(X>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),Z=!0,setTimeout(function(){Z=!1},1);return}X++,_n(r.node,n.focusOptions),X--}};function ve(e){setTimeout(e,1)}var In=function(){return document&&document.activeElement===document.body},An=function(){return In()||Mn()},S=null,E=null,w=null,N=!1,Nn=function(){return!0},jn=function(t){return(S.whiteList||Nn)(t)},Dn=function(t,n){w={observerNode:t,portaledElement:n}},Pn=function(t){return w&&w.portaledElement===t};function Fe(e,t,n,r){var o=null,a=e;do{var i=r[a];if(i.guard)i.node.dataset.focusAutoGuard&&(o=i);else if(i.lockItem){if(a!==e)return;o=null}else break}while((a+=n)!==t);o&&(o.node.tabIndex=0)}var Ln=function(t){return t&&"current"in t?t.current:t},Hn=function(t){return t?!!N:N==="meanwhile"},Wn=function e(t,n,r){return n&&(n.host===t&&(!n.activeElement||r.contains(n.activeElement))||n.parentNode&&e(t,n.parentNode,r))},Un=function(t,n){return n.some(function(r){return Wn(t,r,r)})},G=function(){var t=!1;if(S){var n=S,r=n.observed,o=n.persistentFocus,a=n.autoFocus,i=n.shards,s=n.crossFrame,m=n.focusOptions,d=r||w&&w.portaledElement,l=document&&document.activeElement;if(d){var f=[d].concat(i.map(Ln).filter(Boolean));if((!l||jn(l))&&(o||Hn(s)||!An()||!E&&a)&&(d&&!(ct(f)||l&&Un(l,f)||Pn(l))&&(document&&!E&&l&&!a?(l.blur&&l.blur(),document.body.focus()):(t=dt(f,E,{focusOptions:m}),w={})),N=!1,E=document&&document.activeElement),document){var h=document&&document.activeElement,p=Bn(f),g=p.map(function(y){var x=y.node;return x}).indexOf(h);g>-1&&(p.filter(function(y){var x=y.guard,k=y.node;return x&&k.dataset.focusAutoGuard}).forEach(function(y){var x=y.node;return x.removeAttribute("tabIndex")}),Fe(g,p.length,1,p),Fe(g,-1,-1,p))}}}return t},mt=function(t){G()&&t&&(t.stopPropagation(),t.preventDefault())},pe=function(){return ve(G)},qn=function(t){var n=t.target,r=t.currentTarget;r.contains(n)||Dn(r,n)},Vn=function(){return null},vt=function(){N="just",ve(function(){N="meanwhile"})},Gn=function(){document.addEventListener("focusin",mt),document.addEventListener("focusout",pe),window.addEventListener("blur",vt)},$n=function(){document.removeEventListener("focusin",mt),document.removeEventListener("focusout",pe),window.removeEventListener("blur",vt)};function Yn(e){return e.filter(function(t){var n=t.disabled;return!n})}function Jn(e){var t=e.slice(-1)[0];t&&!S&&Gn();var n=S,r=n&&t&&t.id===n.id;S=t,n&&!r&&(n.onDeactivation(),e.filter(function(o){var a=o.id;return a===n.id}).length||n.returnFocus(!t)),t?(E=null,(!r||n.observed!==t.observed)&&t.onActivation(),G(),ve(G)):($n(),E=null)}Ke.assignSyncMedium(qn);Qe.assignMedium(pe);Qt.assignMedium(function(e){return e({moveFocusInside:dt,focusInside:ct})});const Kn=rn(Yn,Jn)(Vn);var pt=c.forwardRef(function(t,n){return c.createElement(ze,_({sideCar:Kn,ref:n},t))}),ht=ze.propTypes||{};ht.sideCar;Ut(ht,["sideCar"]);pt.propTypes={};const Qn=pt;let B=[];const gt={},bt=Object.freeze({overflow:"hidden",position:"relative",height:"100%"}),ie=e=>{const t=e||window.event;return t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},zn=([e,t])=>{gt[e]=document.body.style[e],document.body.style[e]=t},Xn=()=>Object.entries(bt).forEach(zn),Zn=e=>document.body.style[e]=gt[e],er=()=>Object.keys(bt).forEach(Zn),tr=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function nr(e){let t=-1;const n=r=>{if(r.targetTouches.length!==1)return;const o=r.targetTouches[0].clientY-t;return e.scrollTop===0&&o>0||tr(e)&&o<0?ie(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=n}function rr(e){e.ontouchstart=null,e.ontouchmove=null}const yt=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",ie,{passive:!1}),or=yt(!0),ar=yt();function ir(e){if(!e)throw Error("Could not run setup, an element must be provided");B.some(t=>t===e)||(B.length||(Xn(),or()),nr(e),B.push(e))}function ur(){B.forEach(rr),ar(),er(),B=[]}const sr=JSON.parse('{"modal.aria.back":"Tilbake","modal.aria.close":"Lukk"}'),cr=JSON.parse('{"modal.aria.back":"Back","modal.aria.close":"Close"}'),lr=JSON.parse('{"modal.aria.back":"Takaisin","modal.aria.close":"Sulje"}');var fr={},dr=Object.defineProperty,Se=Object.getOwnPropertySymbols,mr=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable,we=(e,t,n)=>t in e?dr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pr=(e,t)=>{for(var n in t||(t={}))mr.call(t,n)&&we(e,n,t[n]);if(Se)for(var n of Se(t))vr.call(t,n)&&we(e,n,t[n]);return e},hr=JSON.parse('{"icon.title.table-sort-down":"Pil som peker nedover"}'),gr=JSON.parse('{"icon.title.table-sort-down":"Downward-pointing arrow"}'),br=JSON.parse('{"icon.title.table-sort-down":"Alaspäin osoittava nuoli"}'),yr=["en","nb","fi"],Ot="en",Re=e=>yr.find(t=>e===t||e.toLowerCase().includes(t))||Ot;function Or(){if(typeof window>"u"){const e=fr.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return Re(e)}try{const e=document.documentElement.lang;return Re(e)}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ot}}var xr=(e,t,n,r)=>e==="nb"?n:e==="fi"?r:t,Mr=(e,t,n)=>{const r=Or(),o=xr(r,e,t,n);ee.load(r,o),ee.activate(r)};Mr(gr,hr,br);var Cr=ee.t({message:"Downward-pointing arrow",id:"icon.title.table-sort-down",comment:"Title for table sort down icon"}),kr=e=>Ge.createElement("svg",pr({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Cr}</title><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10.778V4.11"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.25 8.556 8 11.889l3.75-3.333"></path>`}},e)),Er=kr;const C=({"aria-label":e,"aria-labelledby":t,...n})=>{const r=c.useRef(null),o=Pt(n.id),a=c.useRef(null);return Lt(cr,sr,lr),c.useEffect(()=>{ur(),r.current&&n.open&&ir(r.current)},[n.open,r]),c.useEffect(()=>{var i,s;n.initialFocusRef?(s=n.initialFocusRef.current)==null||s.focus():n.right&&((i=a.current)==null||i.focus())},[n.open,n.initialFocusRef,n.right]),n.open?u.jsx(Qn,{children:u.jsx("div",{onClick:n.onDismiss,className:T(n.className,v.backdrop,v.transparentBg),style:{...n.style},children:u.jsxs("div",{role:"dialog","aria-modal":"true",id:o,onClick:i=>{i.stopPropagation()},"aria-label":e,"aria-labelledby":t??(n.title&&!e?`${o}__title`:void 0),onKeyDown:i=>{n.onDismiss&&i.key==="Escape"&&n.onDismiss()},className:v.modal,tabIndex:-1,children:[u.jsxs("div",{className:v.title,children:[typeof n.left=="boolean"&&n.left?u.jsx("button",{type:"button","aria-label":xe._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"}),className:T(v.transitionTitle,v.titleButton,v.titleButtonLeft),onClick:n.onDismiss,children:u.jsx(Er,{className:T(v.titleButtonIcon,v.titleButtonIconRotated)})}):n.left,u.jsx("div",{id:`${o}__title`,className:T(v.transitionTitle,n.left?v.transitionTitleCenter:v.transitionTitleColSpan),children:typeof n.title=="string"?u.jsx("h1",{className:v.titleText,children:n.title}):n.title}),typeof n.right=="boolean"&&n.right?u.jsx("button",{ref:a,type:"button","aria-label":xe._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"}),onClick:n.onDismiss,className:T(v.transitionTitle,v.titleButton,v.titleButtonRight),children:u.jsx(Ht,{className:v.titleButtonIcon})}):n.right]}),u.jsx("div",{ref:r,className:v.content,children:n.children}),!!n.footer&&u.jsx("div",{className:v.footer,children:n.footer})]})})}):u.jsx(u.Fragment,{})};try{C.displayName="Modal",C.__docgenInfo={description:"A Modal dialog that renders on top the page",displayName:"Modal",props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",required:!1,type:{name:"string | Element | Element[]"}},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",required:!0,type:{name:"boolean"}},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",required:!1,type:{name:"boolean | Element | Element[]"}},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",required:!1,type:{name:"boolean | Element | Element[]"}},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",required:!1,type:{name:"Element | Element[]"}},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"The modal contents",name:"children",required:!0,type:{name:"Element | Element[]"}},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",required:!1,type:{name:"(() => void)"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",required:!1,type:{name:"string"}},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",required:!1,type:{name:"RefObject<any>"}}}}}catch{}const Dr={title:"Overlays/Modal"},P=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(C,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},L=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e||(o=r.current)==null||o.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(C,{open:e,left:!0,right:!0,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:o=>o.preventDefault(),children:"Optional link to read more."})]})]})},H=()=>{const[e,t]=c.useState(!1),[n,r]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{var i;e||(r(!1),(i=o.current)==null||i.focus())},[e]);const a=()=>t(!e);return u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:o,utility:!0,onClick:a,children:"Open modal"}),u.jsxs(C,{open:e,onDismiss:a,title:"Do you agree to these terms?",footer:u.jsx(b,{primary:!0,onClick:a,disabled:!n,children:"Accept"}),children:[u.jsx("p",{children:"1. You must give me 10 pushups right now"}),u.jsx(Wt,{type:"checkbox",label:"I agree",onChange:r})]})]})},W=()=>{const[e,t]=c.useState(!1),n=()=>t(!e),r=c.useRef(),o=c.useRef(null);return c.useEffect(()=>{var a;e||(a=o.current)==null||a.focus()},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:o,utility:!0,onClick:n,children:"Open modal"}),u.jsxs(C,{open:e,onDismiss:n,initialFocusRef:r,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{ref:r,primary:!0,onClick:n,children:"Accept"})]}),children:[u.jsx("p",{children:"Content information goes here. Optional illustration on top. Can contain links."}),u.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Optional link to read more."})]})]})},U=()=>{const[e,t]=c.useState(!0),n=()=>t(!e),r=c.useRef(null);return c.useEffect(()=>{var o;e&&((o=r.current)==null||o.focus())},[e]),u.jsxs(u.Fragment,{children:[u.jsx(b,{ref:r,utility:!0,onClick:n,children:"Open modal"}),u.jsx(C,{open:e,onDismiss:n,title:"Title of the content goes here",footer:u.jsxs(u.Fragment,{children:[u.jsx(b,{onClick:n,className:"mr-12",children:"Cancel"}),u.jsx(b,{primary:!0,onClick:n,children:"Accept"})]}),children:[...new Array(10)].map((o,a)=>u.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},a))})]})};var Te,Be,_e;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
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
}`,...(_e=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var Ie,Ae,Ne;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
      <Modal open={open} left right onDismiss={toggleModal} title="Title of the content goes here" footer={<>
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
}`,...(Ne=(Ae=L.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var je,De,Pe;H.parameters={...H.parameters,docs:{...(je=H.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(Pe=(De=H.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Le,He,We;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(We=(He=W.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Ue,qe,Ve;U.parameters={...U.parameters,docs:{...(Ue=U.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(Ve=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};const Pr=["Example","WithBackAndCloseButton","MustConfirmToProceed","InitialFocus","Overflowing"];export{P as Example,W as InitialFocus,H as MustConfirmToProceed,U as Overflowing,L as WithBackAndCloseButton,Pr as __namedExportsOrder,Dr as default};
