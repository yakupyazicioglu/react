import{j as r,B as s}from"./index-BhCzeWkr.js";import{R as c,r as W}from"./index-DVXBtNgz.js";import{a as X}from"./i18n-Dm2pChMu.js";import{r as p}from"./index.m-CtIADANO.js";import{i as l}from"./index-3GqtXlFf.js";const E=c.createContext({currentPage:0,lastPage:0}),h=()=>c.useContext(E),C=c.forwardRef(({children:e,className:a,currentPage:n,lastPage:t,"aria-labelledby":i="pagination-heading",...o},d)=>{if(!Number.isInteger(n))throw new TypeError(`Invalid currentPage: ${JSON.stringify(n)}`);if(!Number.isInteger(t))throw new TypeError(`Invalid lastPage: ${JSON.stringify(t)}`);const u=c.useMemo(()=>({currentPage:Math.max(1,Math.min(n,t)),lastPage:Math.max(1,t)}),[n,t]),m=o["aria-label"]??l._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"});return r.jsxs("nav",{...o,className:p(s.containerNav,a),"aria-labelledby":i,ref:d,children:[r.jsx("h1",{className:s.a11y,id:i,children:m}),r.jsx(E.Provider,{value:u,children:e})]})});C.__docgenInfo={description:"",methods:[],displayName:"PaginationContainer",props:{"aria-labelledby":{defaultValue:{value:"'pagination-heading'",computed:!1},required:!1}}};const B=c.forwardRef(({children:e,className:a,...n},t)=>{const{currentPage:i}=h(),o=e??l._({id:"pagination.label.current-page",message:"Page {currentPage}",values:{currentPage:i},comment:"Default message for current page label in the pagination component"});return r.jsx("span",{...n,className:p(s.currentPage,a),ref:t,children:o})});B.__docgenInfo={description:"",methods:[],displayName:"CurrentPage"};var Y={},Z=Object.defineProperty,y=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,N=(e,a,n)=>a in e?Z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,ne=(e,a)=>{for(var n in a||(a={}))ee.call(a,n)&&N(e,n,a[n]);if(y)for(var n of y(a))ae.call(a,n)&&N(e,n,a[n]);return e},te=JSON.parse('{"icon.title.chevron-double-left":"Dobbel pil til venstre"}'),re=JSON.parse('{"icon.title.chevron-double-left":"Double leftward arrow"}'),ie=JSON.parse('{"icon.title.chevron-double-left":"Kaksi nuolta vasemmalle"}'),R=["en","nb","fi","da","sv"],D="en",oe=()=>{let e;switch(Y.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},M=()=>{var e;const a=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return a.includes("finn")?"nb":a.includes("tori")?"fi":a.includes("blocket")?"sv":a.includes("dba")?"da":D},P=e=>R.find(a=>e===a||e.toLowerCase().includes(a))||M();function se(){var e;if(typeof window>"u"){const a=oe();return P(a)}try{const a=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=M();return R.includes(a)?P(a??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),P(n))}catch(a){return console.warn("could not detect locale, falling back to source locale",a),D}}var le=(e,a,n,t)=>e==="nb"?n:e==="fi"?t:a,ce=(e,a,n)=>{const t=se(),i=le(t,e,a,n);l.load(t,i),l.activate(t)};ce(re,te,ie);var de=l.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"}),ue=e=>c.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${de}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5m7 10L9 8l5-5"></path>`}},e)),ge=ue;const T=c.forwardRef(({className:e,...a},n)=>{const{currentPage:t}=h();if(t<=2)return null;const i=a["aria-label"]??l._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page link in the pagination component"}),o=l._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"});return r.jsxs("a",{ref:n,...a,className:p(e,s.link,s.icon),rel:"start",children:[r.jsxs("span",{className:s.a11y,children:[i,","]}),r.jsx(ge,{}),r.jsx("span",{className:s.a11y,children:o})]})});T.__docgenInfo={description:"",methods:[],displayName:"FirstPage"};const pe=JSON.parse('{"pagination.aria.first-page":"First page","pagination.aria.icon-suffix":"icon","pagination.aria.next-page":"Next page","pagination.label.current-page":["Page ",["currentPage"]],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":"Pages","pagination.aria.prev-page":"Previous page"}'),fe=JSON.parse('{"pagination.aria.first-page":"Ensimmäinen sivu","pagination.aria.icon-suffix":"kuvake","pagination.aria.next-page":"Seuraava sivu","pagination.label.current-page":["Sivu ",["currentPage"]],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":"Sivut","pagination.aria.prev-page":"Edellinen sivu"}'),me=JSON.parse('{"pagination.aria.first-page":"Første side","pagination.aria.icon-suffix":"ikon","pagination.aria.next-page":"Neste side","pagination.label.current-page":["Side ",["currentPage"]],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":"Sider","pagination.aria.prev-page":"Forrige side"}');var ve={},he=Object.defineProperty,$=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,k=(e,a,n)=>a in e?he(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,Pe=(e,a)=>{for(var n in a||(a={}))_e.call(a,n)&&k(e,n,a[n]);if($)for(var n of $(a))be.call(a,n)&&k(e,n,a[n]);return e},we=JSON.parse('{"icon.title.chevron-right":"Pil til høyre"}'),xe=JSON.parse('{"icon.title.chevron-right":"Rightward arrow"}'),ye=JSON.parse('{"icon.title.chevron-right":"Nuoli oikealle"}'),J=["en","nb","fi","da","sv"],F="en",Ne=()=>{let e;switch(ve.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},A=()=>{var e;const a=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return a.includes("finn")?"nb":a.includes("tori")?"fi":a.includes("blocket")?"sv":a.includes("dba")?"da":F},w=e=>J.find(a=>e===a||e.toLowerCase().includes(a))||A();function $e(){var e;if(typeof window>"u"){const a=Ne();return w(a)}try{const a=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=A();return J.includes(a)?w(a??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),w(n))}catch(a){return console.warn("could not detect locale, falling back to source locale",a),F}}var ke=(e,a,n,t)=>e==="nb"?n:e==="fi"?t:a,je=(e,a,n)=>{const t=$e(),i=ke(t,e,a,n);l.load(t,i),l.activate(t)};je(xe,we,ye);var Oe=l.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"}),Se=e=>c.createElement("svg",Pe({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Oe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path>`}},e)),Le=Se;const V=c.forwardRef(({className:e,noFollow:a,...n},t)=>{const{currentPage:i,lastPage:o}=h();if(i>=o)return null;const d=n["aria-label"]??l._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page link in the pagination component"}),u=l._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"});return r.jsx(r.Fragment,{children:r.jsxs("a",{...n,ref:t,rel:`next${a?" nofollow":""}`,className:p(e,s.link,s.icon),children:[r.jsxs("span",{className:s.a11y,children:[d,","]}),r.jsx(Le,{}),r.jsx("span",{className:s.a11y,children:u})]})})});V.__docgenInfo={description:"",methods:[],displayName:"NextPage"};const H=c.forwardRef(({page:e=1,className:a,currentPage:n,noFollow:t,...i},o)=>{const d=e===n,u=i["aria-label"]??l._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:e},comment:"Default screenreader message for page link in the pagination component"});return r.jsx("a",{"aria-label":u,...i,ref:o,rel:`${t?"nofollow":""}`,"aria-current":d?"page":void 0,className:p(a,s.link,[d?s.active:s.notActive]),children:e})});H.__docgenInfo={description:"",methods:[],displayName:"Page",props:{page:{defaultValue:{value:"1",computed:!1},required:!1}}};const K=c.forwardRef(({children:e,numPages:a=7,className:n,...t},i)=>{const{currentPage:o,lastPage:d}=h(),u=Math.max(o-3,0),m=Math.min(u+a,d),f=Array.from(Array(m-u).keys()).map((g,b)=>u+b+1);return r.jsx("div",{...t,className:p(s.pages,n),ref:i,children:f.map(g=>c.cloneElement(e(g),{key:g,page:g,currentPage:o}))})});K.__docgenInfo={description:"",methods:[],displayName:"Pages",props:{numPages:{defaultValue:{value:"7",computed:!1},required:!1}}};var Ie={},Ee=Object.defineProperty,j=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,O=(e,a,n)=>a in e?Ee(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,Re=(e,a)=>{for(var n in a||(a={}))Ce.call(a,n)&&O(e,n,a[n]);if(j)for(var n of j(a))Be.call(a,n)&&O(e,n,a[n]);return e},De=JSON.parse('{"icon.title.chevron-left":"Pil til venstre"}'),Me=JSON.parse('{"icon.title.chevron-left":"Leftward arrow"}'),Te=JSON.parse('{"icon.title.chevron-left":"Nuoli vasemmalle"}'),q=["en","nb","fi","da","sv"],U="en",Je=()=>{let e;switch(Ie.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},z=()=>{var e;const a=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return a.includes("finn")?"nb":a.includes("tori")?"fi":a.includes("blocket")?"sv":a.includes("dba")?"da":U},x=e=>q.find(a=>e===a||e.toLowerCase().includes(a))||z();function Fe(){var e;if(typeof window>"u"){const a=Je();return x(a)}try{const a=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,n=z();return q.includes(a)?x(a??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),x(n))}catch(a){return console.warn("could not detect locale, falling back to source locale",a),U}}var Ae=(e,a,n,t)=>e==="nb"?n:e==="fi"?t:a,Ve=(e,a,n)=>{const t=Fe(),i=Ae(t,e,a,n);l.load(t,i),l.activate(t)};Ve(Me,De,Te);var He=l.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"}),Ke=e=>c.createElement("svg",Re({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${He}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path>`}},e)),qe=Ke;const G=c.forwardRef(({className:e,noFollow:a,...n},t)=>{const{currentPage:i}=h();if(i===1)return null;const o=n["aria-label"]??l._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page link in the pagination component"}),d=l._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"});return r.jsxs("a",{...n,ref:t,className:p(e,s.link,s.icon),rel:`prev${a?" nofollow":""}`,children:[r.jsxs("span",{className:s.a11y,children:[o,","]}),r.jsx(qe,{}),r.jsx("span",{className:s.a11y,children:d})]})});G.__docgenInfo={description:"",methods:[],displayName:"PrevPage"};const Q=c.forwardRef(({currentPage:e,numPages:a,lastPage:n,createHref:t,className:i,onChange:o,noFollow:d,...u},m)=>{if(X(pe,me,fe),!t)throw new TypeError("createHref is undefined");const f=g=>b=>{o&&(b.preventDefault(),o(g))};return r.jsxs(C,{...u,ref:m,currentPage:e,lastPage:n,className:i,children:[r.jsx(T,{href:t(1),onClick:f(1)}),r.jsx(G,{href:t(e-1),onClick:f(e-1),noFollow:d}),r.jsx(K,{numPages:a,children:g=>r.jsx(H,{href:t(g),onClick:f(g),noFollow:d})}),r.jsx(B,{}),r.jsx(V,{href:t(e+1),onClick:f(e+1),noFollow:d})]})});Q.__docgenInfo={description:"",methods:[],displayName:"Pagination"};const Xe={title:"Navigation/Pagination"},_=({initialPage:e=1,lastPage:a=30,...n})=>{const[t,i]=W.useState(e);return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{textAlign:"center",marginTop:"50px"},children:["currentPage: ",t,", lastPage: ",a]}),r.jsx(Q,{...n,currentPage:t,numPages:3,lastPage:a,createHref:o=>`?page=${o}`,onChange:o=>i(o)})]})},v=()=>r.jsxs(r.Fragment,{children:[r.jsx(_,{initialPage:1,lastPage:10,"aria-labelledby":"pagination-1"}),r.jsx(_,{initialPage:10,lastPage:20,"aria-labelledby":"pagination-2"}),r.jsx(_,{initialPage:30,lastPage:30,"aria-labelledby":"pagination-3"}),r.jsx(_,{initialPage:1,lastPage:10,"aria-labelledby":"pagination-4",noFollow:!0})]});v.__docgenInfo={description:"",methods:[],displayName:"Normal"};var S,L,I;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`() => <>
    <Example initialPage={1} lastPage={10} aria-labelledby="pagination-1" />
    <Example initialPage={10} lastPage={20} aria-labelledby="pagination-2" />
    <Example initialPage={30} lastPage={30} aria-labelledby="pagination-3" />
    <Example initialPage={1} lastPage={10} aria-labelledby="pagination-4" noFollow />
  </>`,...(I=(L=v.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const Ye=["Normal"];export{v as Normal,Ye as __namedExportsOrder,Xe as default};
