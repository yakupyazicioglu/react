import{b as A,j as d}from"./index-074eacee.js";import{r as T,R as C}from"./index-b75aab2a.js";import{r as ie}from"./index.m-73ef1fbe.js";import{a as Ge,i as N}from"./i18n-ff9a8b3f.js";import{B as ce}from"./component-6e57057c.js";import{B as Pe}from"./component-77a4fccf.js";function k(e){return e.split("-")[0]}function te(e){return e.split("-")[1]}function M(e){return["top","bottom"].includes(k(e))?"x":"y"}function ue(e){return e==="y"?"height":"width"}function pe(e,t,n){let{reference:o,floating:r}=e;const l=o.x+o.width/2-r.width/2,a=o.y+o.height/2-r.height/2,i=M(t),s=ue(i),u=o[s]/2-r[s]/2,f=i==="x";let c;switch(k(t)){case"top":c={x:l,y:o.y-r.height};break;case"bottom":c={x:l,y:o.y+o.height};break;case"right":c={x:o.x+o.width,y:a};break;case"left":c={x:o.x-r.width,y:a};break;default:c={x:o.x,y:o.y}}switch(te(t)){case"start":c[i]-=u*(n&&f?-1:1);break;case"end":c[i]+=u*(n&&f?-1:1)}return c}const Qe=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:l=[],platform:a}=n,i=await(a.isRTL==null?void 0:a.isRTL(t));let s=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:f}=pe(s,o,i),c=o,m={},h=0;for(let p=0;p<l.length;p++){const{name:g,fn:b}=l[p],{x:w,y,data:v,reset:x}=await b({x:u,y:f,initialPlacement:o,placement:c,strategy:r,middlewareData:m,rects:s,platform:a,elements:{reference:e,floating:t}});u=w??u,f=y??f,m={...m,[g]:{...m[g],...v}},x&&h<=50&&(h++,typeof x=="object"&&(x.placement&&(c=x.placement),x.rects&&(s=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:r}):x.rects),{x:u,y:f}=pe(s,c,i)),p=-1)}return{x:u,y:f,placement:c,strategy:r,middlewareData:m}};function We(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Y(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function _e(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:l,rects:a,elements:i,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:c="floating",altBoundary:m=!1,padding:h=0}=t,p=We(h),g=i[m?c==="floating"?"reference":"floating":c],b=Y(await l.getClippingRect({element:(n=await(l.isElement==null?void 0:l.isElement(g)))==null||n?g:g.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(i.floating)),boundary:u,rootBoundary:f,strategy:s})),w=Y(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:c==="floating"?{...a.floating,x:o,y:r}:a.reference,offsetParent:await(l.getOffsetParent==null?void 0:l.getOffsetParent(i.floating)),strategy:s}):a[c]);return{top:b.top-w.top+p.top,bottom:w.bottom-b.bottom+p.bottom,left:b.left-w.left+p.left,right:w.right-b.right+p.right}}const Ze=Math.min,et=Math.max;function re(e,t,n){return et(e,Ze(t,n))}const tt=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:o=0}=e??{},{x:r,y:l,placement:a,rects:i,platform:s}=t;if(n==null)return{};const u=We(o),f={x:r,y:l},c=M(a),m=te(a),h=ue(c),p=await s.getDimensions(n),g=c==="y"?"top":"left",b=c==="y"?"bottom":"right",w=i.reference[h]+i.reference[c]-f[c]-i.floating[h],y=f[c]-i.reference[c],v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(n));let x=v?c==="y"?v.clientHeight||0:v.clientWidth||0:0;x===0&&(x=i.floating[h]);const O=w/2-y/2,S=u[g],P=x-p[h]-u[b],R=x/2-p[h]/2+O,E=re(S,R,P),V=(m==="start"?u[g]:u[b])>0&&R!==E&&i.reference[h]<=i.floating[h];return{[c]:f[c]-(V?R<S?S-R:P-R:0),data:{[c]:E,centerOffset:R-E}}}}),nt={left:"right",right:"left",bottom:"top",top:"bottom"};function G(e){return e.replace(/left|right|bottom|top/g,t=>nt[t])}function ot(e,t,n){n===void 0&&(n=!1);const o=te(e),r=M(e),l=ue(r);let a=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[l]>t.floating[l]&&(a=G(a)),{main:a,cross:G(a)}}const it={start:"end",end:"start"};function me(e){return e.replace(/start|end/g,t=>it[t])}const rt=["top","right","bottom","left"];rt.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const lt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:r,rects:l,initialPlacement:a,platform:i,elements:s}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:c,fallbackStrategy:m="bestFit",flipAlignment:h=!0,...p}=e,g=k(o),b=c||(g===a||!h?[G(a)]:function(R){const E=G(R);return[me(R),E,me(E)]}(a)),w=[a,...b],y=await _e(t,p),v=[];let x=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&v.push(y[g]),f){const{main:R,cross:E}=ot(o,l,await(i.isRTL==null?void 0:i.isRTL(s.floating)));v.push(y[R],y[E])}if(x=[...x,{placement:o,overflows:v}],!v.every(R=>R<=0)){var O,S;const R=((O=(S=r.flip)==null?void 0:S.index)!=null?O:0)+1,E=w[R];if(E)return{data:{index:R,overflows:x},reset:{placement:E}};let V="bottom";switch(m){case"bestFit":{var P;const he=(P=x.map(F=>[F,F.overflows.filter(W=>W>0).reduce((W,Ye)=>W+Ye,0)]).sort((F,W)=>F[1]-W[1])[0])==null?void 0:P[0].placement;he&&(V=he);break}case"initialPlacement":V=a}if(o!==V)return{reset:{placement:V}}}return{}}}},at=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,r=await async function(l,a){const{placement:i,platform:s,elements:u}=l,f=await(s.isRTL==null?void 0:s.isRTL(u.floating)),c=k(i),m=te(i),h=M(i)==="x",p=["left","top"].includes(c)?-1:1,g=f&&h?-1:1,b=typeof a=="function"?a(l):a;let{mainAxis:w,crossAxis:y,alignmentAxis:v}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...b};return m&&typeof v=="number"&&(y=m==="end"?-1*v:v),h?{x:y*g,y:w*p}:{x:w*p,y:y*g}}(t,e);return{x:n+r.x,y:o+r.y,data:r}}}};function st(e){return e==="x"?"y":"x"}const ct=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:l=!0,crossAxis:a=!1,limiter:i={fn:b=>{let{x:w,y}=b;return{x:w,y}}},...s}=e,u={x:n,y:o},f=await _e(t,s),c=M(k(r)),m=st(c);let h=u[c],p=u[m];if(l){const b=c==="y"?"bottom":"right";h=re(h+f[c==="y"?"top":"left"],h,h-f[b])}if(a){const b=m==="y"?"bottom":"right";p=re(p+f[m==="y"?"top":"left"],p,p-f[b])}const g=i.fn({...t,[c]:h,[m]:p});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function ke(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function L(e){if(e==null)return window;if(!ke(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function q(e){return L(e).getComputedStyle(e)}function j(e){return ke(e)?"":e?(e.nodeName||"").toLowerCase():""}function Me(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function D(e){return e instanceof L(e).HTMLElement}function H(e){return e instanceof L(e).Element}function fe(e){return typeof ShadowRoot>"u"?!1:e instanceof L(e).ShadowRoot||e instanceof ShadowRoot}function ne(e){const{overflow:t,overflowX:n,overflowY:o}=q(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function ut(e){return["table","td","th"].includes(j(e))}function ge(e){const t=/firefox/i.test(Me()),n=q(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"}function qe(){return!/^((?!chrome|android).)*safari/i.test(Me())}const be=Math.min,_=Math.max,Q=Math.round;function B(e,t,n){var o,r,l,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect();let s=1,u=1;t&&D(e)&&(s=e.offsetWidth>0&&Q(i.width)/e.offsetWidth||1,u=e.offsetHeight>0&&Q(i.height)/e.offsetHeight||1);const f=H(e)?L(e):window,c=!qe()&&n,m=(i.left+(c&&(o=(r=f.visualViewport)==null?void 0:r.offsetLeft)!=null?o:0))/s,h=(i.top+(c&&(l=(a=f.visualViewport)==null?void 0:a.offsetTop)!=null?l:0))/u,p=i.width/s,g=i.height/u;return{width:p,height:g,top:h,right:m+p,bottom:h+g,left:m,x:m,y:h}}function $(e){return(t=e,(t instanceof L(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function oe(e){return H(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Fe(e){return B($(e)).left+oe(e).scrollLeft}function ft(e,t,n){const o=D(t),r=$(t),l=B(e,o&&function(s){const u=B(s);return Q(u.width)!==s.offsetWidth||Q(u.height)!==s.offsetHeight}(t),n==="fixed");let a={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if(o||!o&&n!=="fixed")if((j(t)!=="body"||ne(r))&&(a=oe(t)),D(t)){const s=B(t,!0);i.x=s.x+t.clientLeft,i.y=s.y+t.clientTop}else r&&(i.x=Fe(r));return{x:l.left+a.scrollLeft-i.x,y:l.top+a.scrollTop-i.y,width:l.width,height:l.height}}function Ue(e){return j(e)==="html"?e:e.assignedSlot||e.parentNode||(fe(e)?e.host:null)||$(e)}function we(e){return D(e)&&getComputedStyle(e).position!=="fixed"?e.offsetParent:null}function le(e){const t=L(e);let n=we(e);for(;n&&ut(n)&&getComputedStyle(n).position==="static";)n=we(n);return n&&(j(n)==="html"||j(n)==="body"&&getComputedStyle(n).position==="static"&&!ge(n))?t:n||function(o){let r=Ue(o);for(fe(r)&&(r=r.host);D(r)&&!["html","body"].includes(j(r));){if(ge(r))return r;r=r.parentNode}return null}(e)||t}function xe(e){if(D(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=B(e);return{width:t.width,height:t.height}}function Ke(e){const t=Ue(e);return["html","body","#document"].includes(j(t))?e.ownerDocument.body:D(t)&&ne(t)?t:Ke(t)}function Je(e,t){var n;t===void 0&&(t=[]);const o=Ke(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),l=L(o),a=r?[l].concat(l.visualViewport||[],ne(o)?o:[]):o,i=t.concat(a);return r?i:i.concat(Je(a))}function ye(e,t,n){return t==="viewport"?Y(function(o,r){const l=L(o),a=$(o),i=l.visualViewport;let s=a.clientWidth,u=a.clientHeight,f=0,c=0;if(i){s=i.width,u=i.height;const m=qe();(m||!m&&r==="fixed")&&(f=i.offsetLeft,c=i.offsetTop)}return{width:s,height:u,x:f,y:c}}(e,n)):H(t)?function(o,r){const l=B(o,!1,r==="fixed"),a=l.top+o.clientTop,i=l.left+o.clientLeft;return{top:a,left:i,x:i,y:a,right:i+o.clientWidth,bottom:a+o.clientHeight,width:o.clientWidth,height:o.clientHeight}}(t,n):Y(function(o){var r;const l=$(o),a=oe(o),i=(r=o.ownerDocument)==null?void 0:r.body,s=_(l.scrollWidth,l.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),u=_(l.scrollHeight,l.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let f=-a.scrollLeft+Fe(o);const c=-a.scrollTop;return q(i||l).direction==="rtl"&&(f+=_(l.clientWidth,i?i.clientWidth:0)-s),{width:s,height:u,x:f,y:c}}($(e)))}function dt(e){const t=Je(e),n=["absolute","fixed"].includes(q(e).position)&&D(e)?le(e):e;return H(n)?t.filter(o=>H(o)&&function(r,l){const a=l.getRootNode==null?void 0:l.getRootNode();if(r.contains(l))return!0;if(a&&fe(a)){let i=l;do{if(i&&r===i)return!0;i=i.parentNode||i.host}while(i)}return!1}(o,n)&&j(o)!=="body"):[]}const ht={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const l=[...n==="clippingAncestors"?dt(t):[].concat(n),o],a=l[0],i=l.reduce((s,u)=>{const f=ye(t,u,r);return s.top=_(f.top,s.top),s.right=be(f.right,s.right),s.bottom=be(f.bottom,s.bottom),s.left=_(f.left,s.left),s},ye(t,a,r));return{width:i.right-i.left,height:i.bottom-i.top,x:i.left,y:i.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=D(n),l=$(n);if(n===l)return t;let a={scrollLeft:0,scrollTop:0};const i={x:0,y:0};if((r||!r&&o!=="fixed")&&((j(n)!=="body"||ne(l))&&(a=oe(n)),D(n))){const s=B(n,!0);i.x=s.x+n.clientLeft,i.y=s.y+n.clientTop}return{...t,x:t.x-a.scrollLeft+i.x,y:t.y-a.scrollTop+i.y}},isElement:H,getDimensions:xe,getOffsetParent:le,getDocumentElement:$,getElementRects:e=>{let{reference:t,floating:n,strategy:o}=e;return{reference:ft(t,le(n),o),floating:{...xe(n),x:0,y:0}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>q(e).direction==="rtl"},pt=(e,t,n)=>Qe(e,t,{platform:ht,...n}),Z="top",ee="bottom",ae="left",se="right",ze={[Z]:ee,[ee]:Z,[ae]:se,[se]:ae},mt={[ae]:-45,[Z]:45,[se]:135,[ee]:-135},ve="calc(50% - 7px)",gt=e=>[Z,ee].includes(e);function bt({actualDirection:e,directionName:t,arrowEl:n}){if(!n)return;e=t;const o=gt(t);n.style.left=o?ve:"",n.style.top=o?"":ve}async function wt(e){var r,l;if(!e.isShowing)return;if(await((r=e==null?void 0:e.waitForDOM)==null?void 0:r.call(e)),e.isCallout)return bt(e);const t=await pt(e.targetEl,e.attentionEl,{placement:e.directionName,middleware:[lt(),at(8),ct({padding:16}),tt({element:e.noArrow?void 0:e.arrowEl})]});e.actualDirection=t.placement,Object.assign(((l=e.attentionEl)==null?void 0:l.style)||{},{left:"0",top:"0",transform:`translate3d(${Math.round(t.x)}px, ${Math.round(t.y)}px, 0)`});let{x:n,y:o}=t.middlewareData.arrow;e.arrowEl&&(e.arrowEl.style.left=n?n+"px":"",e.arrowEl.style.top=o?o+"px":"")}const xt=JSON.parse('{"attention.callout":"callout speech bubble","attention.aria.highlight":"highlighted speech bubble","attention.pointingDown":"pointing down","attention.pointingLeft":"pointing left","attention.pointingRight":"pointing right","attention.pointingUp":"pointing up","attention.popover":"popover speech bubble","attention.tooltip":"tooltip"}'),yt=JSON.parse('{"attention.callout":"callout speech bubble","attention.aria.highlight":"highlighted speech bubble","attention.pointingDown":"pointing down","attention.pointingLeft":"pointing left","attention.pointingRight":"pointing right","attention.pointingUp":"pointing up","attention.popover":"popover speech bubble","attention.tooltip":"tooltip"}'),vt=JSON.parse('{"attention.callout":"callout speech bubble","attention.aria.highlight":"highlighted speech bubble","attention.pointingDown":"pointing down","attention.pointingLeft":"pointing left","attention.pointingRight":"pointing right","attention.pointingUp":"pointing up","attention.popover":"popover speech bubble","attention.tooltip":"tooltip"}'),de={callout:{wrapper:A.callout,arrow:A.arrowCallout},highlight:{wrapper:A.highlight,arrow:A.arrowHighlight},tooltip:{wrapper:A.tooltip,arrow:A.arrowTooltip},popover:{wrapper:A.popover,arrow:A.arrowPopover}},Xe=e=>Object.keys(de).find(t=>!!e[t])||"";function I(e){const{noArrow:t,isShowing:n,children:o,role:r,"aria-label":l,placement:a,targetEl:i,className:s,...u}=e;Ge(yt,xt,vt);const f=ie(A.base,de[Xe(u)].wrapper),[c,m]=T.useState(a),[h,p]=T.useState(!1),g=T.useRef(!0),b=T.useRef(null),w=T.useRef(null),y={get isShowing(){return n},get isCallout(){return u.callout},get actualDirection(){return c},set actualDirection(S){m(S)},get directionName(){return a},get arrowEl(){return w.current},get attentionEl(){return b.current},set attentionEl(S){b.current=S},get targetEl(){return i==null?void 0:i.current},get noArrow(){return e.noArrow}},v=(()=>{switch(ze[c]){case"top":return N._({id:"attention.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right":return N._({id:"attention.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom":return N._({id:"attention.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left":return N._({id:"attention.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}})(),x=(()=>{switch(!0){case e.tooltip:return N._({id:"attention.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case e.callout:return N._({id:"attention.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case e.popover:return N._({id:"attention.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case e.highlight:return N._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}})(),O=()=>`${x} ${e.noArrow?"":v}`;return T.useEffect(()=>{wt(y)}),T.useEffect(()=>{g.current?(g.current=!1,(n===!0||e.callout)&&p(n)):p(n)},[n,e.callout]),d.jsx("div",{tabIndex:0,className:ie({[A.notCallout]:!e.callout,invisible:!h&&!e.callout,hidden:!h&&!e.tooltip},s),ref:b,children:d.jsxs("div",{role:e.role===""?void 0:e.tooltip?"tooltip":"img","aria-label":l===""?void 0:l??O(),className:f,id:e.id,children:[!e.noArrow&&d.jsx(Rt,{...e,ref:w,direction:a}),d.jsx("div",{className:A.content,children:e.children})]})})}const Re=e=>`arrowDirection${e.charAt(0).toUpperCase()+e.slice(1)}`,Rt=T.forwardRef(({direction:e,...t},n)=>{const o=ze[e],r=ie(A.arrowBase,A[Re(o)],de[Xe(t)].arrow);return d.jsx("div",{ref:n,className:r,style:{borderTopLeftRadius:"4px",zIndex:1,[`margin${Re(o)}`]:"-0.5px",transform:`rotate(${mt[o]}deg)`}})});try{I.displayName="Attention",I.__docgenInfo={description:"",displayName:"Attention",props:{noArrow:{defaultValue:null,description:"Render Attention element without arrow",name:"noArrow",required:!1,type:{name:"Boolean"}},isShowing:{defaultValue:null,description:`Whether Attention element is shown
Used for tooltip`,name:"isShowing",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elements inside of the Attention component",name:"children",required:!1,type:{name:"Element | Element[]"}},"aria-label":{defaultValue:null,description:"Sets the aria-label attribute for the Attention component",name:"aria-label",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"Sets the role attribute for the Attention component",name:"role",required:!1,type:{name:"string"}},placement:{defaultValue:null,description:`Placement according to the target element
Arrow would be on the opposite side of this position`,name:"placement",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},targetEl:{defaultValue:null,description:"Container the Attention component is rendered relatively to",name:"targetEl",required:!1,type:{name:"MutableRefObject<unknown>"}},className:{defaultValue:null,description:"Extend the Attention component container styling",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"id used for relationship ARIA attributes",name:"id",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"Render tooltip",name:"tooltip",required:!1,type:{name:"boolean"}},callout:{defaultValue:null,description:"Render callout",name:"callout",required:!1,type:{name:"boolean"}},popover:{defaultValue:null,description:"Render popover",name:"popover",required:!1,type:{name:"boolean"}},highlight:{defaultValue:null,description:"Render highlight",name:"highlight",required:!1,type:{name:"boolean"}}}}}catch{}const Nt={title:"Overlays/Attention"};function U(){return d.jsxs("div",{className:"flex items-center",children:[d.jsx(ce,{info:!0,children:d.jsx("h1",{"aria-details":"callout-bubbletext",children:"I am a box full of info"})}),d.jsx(I,{callout:!0,placement:"right",isShowing:!0,children:d.jsx("p",{id:"callout-bubbletext",style:{width:200},children:"I'm a callout because that box over there is new or something"})})]})}function K(){return d.jsxs("div",{className:"flex items-center",children:[d.jsx(ce,{info:!0,children:d.jsx("h1",{"aria-details":"callout-reset-bubbletext",children:"I am a box full of info"})}),d.jsx(I,{callout:!0,role:"","aria-label":"",placement:"right",isShowing:!0,children:d.jsx("p",{id:"callout-reset-bubbletext",role:"img",style:{width:200},children:"I'm a callout speech bubble with resetted role and aria-label attributes pointing left."})})]})}function J(){const[e,t]=C.useState(!1),n=C.useRef();return d.jsxs("div",{className:"flex flex-col justify-between h-[200]",children:[d.jsx(Pe,{small:!0,"aria-expanded":e,"aria-controls":"highlight-attention-example",utility:!0,onClick:()=>t(!e),className:"w-max mb-0",children:"Show an onboarding hint"}),d.jsxs("div",{children:[d.jsx("div",{ref:n,className:"w-2/3",children:d.jsx(ce,{info:!0,children:d.jsx("h1",{children:"I am a box full of info"})})}),d.jsx(I,{highlight:!0,placement:"top",isShowing:e,targetEl:n,id:"highlight-attention-example",children:d.jsx("p",{children:"I'm a highlight because that box over there is new or something"})})]})]})}function z(){const[e,t]=C.useState(!1),n=C.useRef(),o=r=>{r.key==="Escape"&&t(!1)};return d.jsxs("div",{children:[d.jsx("h1",{className:"w-max mb-0",ref:n,"aria-details":"tooltip-bubbletext","aria-hidden":!e,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),onFocus:()=>t(!0),onBlur:()=>t(!1),onKeyDown:o,tabIndex:0,children:"hover this for useless info"}),d.jsx(I,{tooltip:!0,placement:"bottom",targetEl:n,isShowing:e,children:d.jsx("p",{id:"tooltip-bubbletext",children:"lol i am a tooltip"})})]})}function X(){const[e,t]=C.useState(!1),n=C.useRef(),o=C.useRef();return C.useEffect(()=>{function r(l){n.current&&!n.current.contains(l.target)&&t(!1)}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}),d.jsxs("div",{ref:n,children:[d.jsx(Pe,{small:!0,"aria-expanded":e,"aria-controls":"popover-attention-example","aria-details":"popover-bubbletext",utility:!0,onClick:()=>t(!e),className:"w-max mb-0",ref:o,children:"Open menu"}),d.jsx(I,{popover:!0,placement:"bottom",targetEl:o,isShowing:e,id:"popover-attention-example",children:d.jsxs("ul",{className:"bg-white w-full text-center",id:"popover-bubbletext",children:[d.jsx("li",{tabIndex:0,className:"p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer",children:"Hello"}),d.jsx("li",{tabIndex:0,className:"p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer",children:"World"})]})})]})}var Ae,Ee,Se;U.parameters={...U.parameters,docs:{...(Ae=U.parameters)==null?void 0:Ae.docs,source:{originalSource:`function Callout() {
  return <div className='flex items-center'>
      <Box info>
        <h1 aria-details="callout-bubbletext">I am a box full of info</h1>
      </Box>
      <Attention callout placement='right' isShowing={true}>
        <p id="callout-bubbletext" style={{
        width: 200
      }}>
          I'm a callout because that box over there is new or something
        </p>
      </Attention>
    </div>;
}`,...(Se=(Ee=U.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};var De,je,Le;K.parameters={...K.parameters,docs:{...(De=K.parameters)==null?void 0:De.docs,source:{originalSource:`function CalloutResettingRoleAndAriaLabel() {
  return <div className='flex items-center'>
      <Box info>
        <h1 aria-details="callout-reset-bubbletext">I am a box full of info</h1>
      </Box>
      <Attention callout role='' aria-label='' placement='right' isShowing={true}>
        <p id="callout-reset-bubbletext" role="img" style={{
        width: 200
      }}>
          I'm a callout speech bubble with resetted role and aria-label attributes pointing left.
        </p>
      </Attention>
    </div>;
}`,...(Le=(je=K.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var Ne,Te,Ce;J.parameters={...J.parameters,docs:{...(Ne=J.parameters)==null?void 0:Ne.docs,source:{originalSource:`function Highlight() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef();
  return <div className='flex flex-col justify-between h-[200]'>
      <Button small aria-expanded={show} aria-controls='highlight-attention-example' utility onClick={() => setShow(!show)} className='w-max mb-0'>
        Show an onboarding hint
      </Button>
      <div>
        <div ref={targetEl} className="w-2/3">
          <Box info>
            <h1>I am a box full of info</h1>
          </Box>
        </div>
        <Attention highlight placement='top' isShowing={show} targetEl={targetEl} id='highlight-attention-example'>
          <p>
            I'm a highlight because that box over there is new or something
          </p>
        </Attention>
      </div>
    </div>;
}`,...(Ce=(Te=J.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var $e,Be,Ie;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`function Tooltip() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef();
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setShow(false);
    }
  };
  return <div>
      <h1 className='w-max mb-0' ref={targetEl} aria-details='tooltip-bubbletext' aria-hidden={!show} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onFocus={() => setShow(true)} onBlur={() => setShow(false)} onKeyDown={handleKeyDown} tabIndex={0}>
        hover this for useless info
      </h1>
      <Attention tooltip placement='bottom' targetEl={targetEl} isShowing={show}>
        <p id="tooltip-bubbletext">lol i am a tooltip</p>
      </Attention>
    </div>;
}`,...(Ie=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:Ie.source}}};var Oe,Ve,He;X.parameters={...X.parameters,docs:{...(Oe=X.parameters)==null?void 0:Oe.docs,source:{originalSource:`function Popover() {
  const [show, setShow] = React.useState(false);
  const containerRef = React.useRef();
  const targetEl = React.useRef();
  React.useEffect(() => {
    function onBlurHandler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', onBlurHandler);
    return () => {
      document.removeEventListener('mousedown', onBlurHandler);
    };
  });
  return <div ref={containerRef}>
      <Button small aria-expanded={show} aria-controls='popover-attention-example' aria-details="popover-bubbletext" utility onClick={() => setShow(!show)} className='w-max mb-0' ref={targetEl}>
        Open menu
      </Button>
      <Attention popover placement='bottom' targetEl={targetEl} isShowing={show} id="popover-attention-example">
        <ul className='bg-white w-full text-center' id="popover-bubbletext">
          <li tabIndex={0} className='p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer'>
            Hello
          </li>
          <li tabIndex={0} className='p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer'>
            World
          </li>
        </ul>
      </Attention>
    </div>;
}`,...(He=(Ve=X.parameters)==null?void 0:Ve.docs)==null?void 0:He.source}}};const Tt=["Callout","CalloutResettingRoleAndAriaLabel","Highlight","Tooltip","Popover"];export{U as Callout,K as CalloutResettingRoleAndAriaLabel,J as Highlight,X as Popover,z as Tooltip,Tt as __namedExportsOrder,Nt as default};
//# sourceMappingURL=Attention.stories-e9485c5e.js.map
