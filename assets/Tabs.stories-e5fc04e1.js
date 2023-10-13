import{j as e,t as h,u as V,v as ae}from"./index-8b04f8eb.js";import{r as j}from"./index.m-73ef1fbe.js";import{r as T}from"./index-b75aab2a.js";import{z as d}from"./icons-a16f1b32.js";const ne=({className:n,isActive:s,setActive:l,...o})=>({tab:j(h.tab,{[n]:!!n,[h.tabActive]:s}),icon:j(h.icon,{[h.iconUnderlinedActive]:s}),content:j(h.contentUnderlined,{[h.contentUnderlinedActive]:s}),attrs:{...o}});function t(n){const{children:s,label:l,setActive:o=()=>{},name:i,onClick:c,isActive:b}=n,{tab:w,icon:y,content:v,attrs:x}=ne(n),{over:P,...g}=x,q=E=>{o(i),c&&c(E)};return e.jsxs("button",{type:"button",...g,role:"tab","aria-selected":b?"true":"false","aria-controls":b?`warp-tabpanel-${i}`:void 0,id:`warp-tab-${i}`,tabIndex:b?0:-1,className:w,onClick:q,children:[!s&&e.jsx("span",{className:v,children:l}),s&&P&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:y,children:s}),e.jsx("span",{className:v,children:l})]}),s&&!P&&e.jsxs("div",{className:h.content,children:[s,l]})]})}try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{setActive:{defaultValue:null,description:"",name:"setActive",required:!1,type:{name:"((name: string) => void)"}},className:{defaultValue:null,description:"Additional CSS class for the tab.",name:"className",required:!1,type:{name:"string"}},over:{defaultValue:{value:"false"},description:"Set the over prop to true if you need to move icons to above the tab label",name:"over",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Additional content to be included in the tab (eg. icons). Content is placed above the label.",name:"children",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler.",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"The label of the tab item.",name:"label",required:!0,type:{name:"ReactNode"}},isActive:{defaultValue:null,description:"Used to set which tab should be active on mount. Defaults to the first tab if not present.",name:"isActive",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the tab.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}function m(n){var c,b;const{children:s,name:l,hidden:o,...i}=n;return e.jsx("div",{tabIndex:-1,...i,role:"tabpanel","aria-labelledby":`warp-tab-${l}`,id:`warp-tabpanel-${l}`,hidden:o===void 0&&typeof document=="object"?!((b=(c=document==null?void 0:document.getElementById(`warp-tab-${l}`))==null?void 0:c.classList)!=null&&b.contains(h.tabActive)):o,children:s})}try{m.displayName="TabPanel",m.__docgenInfo={description:"",displayName:"TabPanel",props:{name:{defaultValue:null,description:"Tab name identifier. Must exactly match the name identifier of a Tab.",name:"name",required:!0,type:{name:"string"}},hidden:{defaultValue:null,description:"Show/hide panel manually (in server-side rendering).",name:"hidden",required:!1,type:{name:"boolean"}}}}}catch{}function te(n,s=200,l=!1){let o;return function(){var i=()=>{o=null,l||n.apply(this,arguments)};let c=l&&!o;clearTimeout(o),o=setTimeout(i,s),c&&n.apply(this,arguments)}}const re=({className:n,children:s,onClick:l,active:o,...i},c,b)=>({nav:j(V.wrapperUnderlined,{[n]:!!n}),div:j(V.tabContainer,{[ae[`cols${s.length}`]]:!0}),wunderbar:j(V.wunderbar),attrs:i,updateWunderbar:()=>{window.requestAnimationFrame(()=>{try{const w=c.current.querySelector('button[role="tab"][aria-selected="true"]'),{left:y}=c.current.getBoundingClientRect(),{left:v,width:x}=w.getBoundingClientRect();b.current.style.left=`${v-y}px`,b.current.style.width=`${x}px`}catch(w){console.warn("Problem updating tabs",w)}})}}),f=n=>{const s=!!(typeof document=="object"&&(document!=null&&document.createElement)),l=T.useRef(null),o=T.useRef(null),{children:i,onChange:c}=n,{nav:b,div:w,wunderbar:y,attrs:v,updateWunderbar:x}=re(n,l,o);T.useEffect(()=>{s&&E(),x();const a=te(x,100);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)});const P=()=>{var a;if(n.active)return String(n.active);if(T.Children.count(i)>0){const r=T.Children.toArray(i),u=(r==null?void 0:r.find(p=>{var A;return(A=p==null?void 0:p.props)==null?void 0:A.isActive}))||r[0];return String(((a=u==null?void 0:u.props)==null?void 0:a.name)||"")}return""},[g,q]=T.useState(P()),E=()=>{T.Children.forEach(i,a=>{var r,u;if(typeof a=="object"){const p=document.getElementById(`warp-tabpanel-${(r=a==null?void 0:a.props)==null?void 0:r.name}`);p&&(p.hidden=((u=a==null?void 0:a.props)==null?void 0:u.name)!==g)}})},D=a=>{q(a),x(),c&&c(a)},ee=a=>{if(!a.altKey&&!a.ctrlKey&&!a.shiftKey&&["ArrowLeft","ArrowRight","Home","End"].includes(a.key))try{const r=[...l.current.querySelectorAll('button[role="tab"]')],u=r.findIndex(A=>A.name===g),p=(()=>{switch(a.key){case"Home":return 0;case"End":return r.length-1;case"ArrowLeft":return Math.max(0,u-1);case"ArrowRight":return Math.min(r.length-1,u+1);default:return u}})();u!==p&&(a.preventDefault(),D(r[p].name),r[p].focus())}catch(r){console.warn("Problem handling keydown",r)}};return e.jsx("div",{...v,className:b,children:e.jsxs("div",{role:"tablist",className:w,ref:l,onKeyDown:ee,children:[T.Children.map(i,a=>{var r;return a&&T.cloneElement(a,{setActive:D,isActive:((r=a==null?void 0:a.props)==null?void 0:r.name)===g})}),e.jsx("span",{className:y,ref:o})]})})};try{f.displayName="Tabs",f.__docgenInfo={description:"",displayName:"Tabs",props:{children:{defaultValue:null,description:"The Tabs within the container.",name:"children",required:!0,type:{name:"ReactNode"}},active:{defaultValue:null,description:`Used to set the name of the Tab that should be active on mount.
Defaults to the first tab if not present and isActive is not set on any Tab.`,name:"active",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler that is called when the tab changes.",name:"onChange",required:!1,type:{name:"((name: string) => void)"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ce={title:"Navigation/Tabs"},_=()=>e.jsxs(f,{onChange:n=>console.log(n),children:[e.jsx(t,{label:"Tab 1",name:"one"}),!1,e.jsx(t,{label:"Tab 3",name:"three",isActive:!0})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one"}),e.jsx(t,{label:"Tab 2",name:"two"}),e.jsx(t,{label:"Tab 3",name:"three"})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"}),e.jsx(m,{name:"three",children:"Tab three selected!"})]})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one"}),e.jsx(t,{label:"Tab 2 (www.finn.no)",name:"two",onClick:n=>window.open("https://www.finn.no/","_blank")}),e.jsx(t,{label:"Tab 3 (www.schibsted.com without panel)",name:"three",onClick:n=>window.open("https://www.schibsted.com/","_blank")})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"})]})]}),I=()=>e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 2",name:"two",children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 3",name:"three",children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 4",name:"four",children:e.jsx(d,{})})]}),S=()=>e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one",over:!0,isActive:!0,children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 2",name:"two",over:!0,children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 3",name:"three",over:!0,children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 4",name:"four",over:!0,children:e.jsx(d,{})})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 2",name:"two",children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 3",name:"three",children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 4",name:"four",children:e.jsx(d,{})})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"}),e.jsx(m,{name:"three",children:"Tab three selected!"}),e.jsx(m,{name:"four",children:"Tab four selected!"})]})]});var $,L,R;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Tabs onChange={e => console.log(e)}>
      <Tab label="Tab 1" name="one" />
      {false && <Tab label="Tab 2" name="two" />}
      <Tab label="Tab 3" name="three" isActive />
    </Tabs>;
}`,...(R=(L=_.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var W,B,M;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>
      <Tabs>
        <Tab label="Tab 1" name="one" />
        <Tab label="Tab 2" name="two" />
        <Tab label="Tab 3" name="three" />
      </Tabs>
      <div className="mb-16">
        <TabPanel name="one">Tab one selected!</TabPanel>
        <TabPanel name="two">Tab two selected!</TabPanel>
        <TabPanel name="three">Tab three selected!</TabPanel>
      </div>
    </>;
}`,...(M=(B=C.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var U,F,K;N.parameters={...N.parameters,docs:{...(U=N.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Tabs>
        <Tab label="Tab 1" name="one" />
        <Tab label="Tab 2 (www.finn.no)" name="two" onClick={e => window.open("https://www.finn.no/", "_blank")} />
        <Tab label="Tab 3 (www.schibsted.com without panel)" name="three" onClick={e => window.open("https://www.schibsted.com/", "_blank")} />
      </Tabs>
      <div className="mb-16">
        <TabPanel name="one">Tab one selected!</TabPanel>
        <TabPanel name="two">Tab two selected!</TabPanel>
      </div>
    </>;
}`,...(K=(F=N.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var z,H,O;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab label="Tab 1" name="one" isActive>
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 2" name="two">
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 3" name="three">
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 4" name="four">
        <IconPlus16 />
      </Tab>
    </Tabs>;
}`,...(O=(H=I.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var G,J,Q;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Tabs>
      <Tab label="Tab 1" name="one" over isActive>
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 2" name="two" over>
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 3" name="three" over>
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 4" name="four" over>
        <IconPlus16 />
      </Tab>
    </Tabs>;
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Tabs>
        <Tab label="Tab 1" name="one" isActive>
          <IconPlus16 />
        </Tab>
        <Tab label="Tab 2" name="two">
          <IconPlus16 />
        </Tab>
        <Tab label="Tab 3" name="three">
          <IconPlus16 />
        </Tab>
        <Tab label="Tab 4" name="four">
          <IconPlus16 />
        </Tab>
      </Tabs>
      <div className="mb-16">
        <TabPanel name="one">Tab one selected!</TabPanel>
        <TabPanel name="two">Tab two selected!</TabPanel>
        <TabPanel name="three">Tab three selected!</TabPanel>
        <TabPanel name="four">Tab four selected!</TabPanel>
      </div>
    </>;
}`,...(Z=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const de=["Default","DefaultWithPanel","DefaultWithExternalLinks","Icon","IconOvertop","IconWithPanel"];export{_ as Default,N as DefaultWithExternalLinks,C as DefaultWithPanel,I as Icon,S as IconOvertop,k as IconWithPanel,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=Tabs.stories-e5fc04e1.js.map
