import{j as e,t as h,u as V,v as ae}from"./index-074eacee.js";import{r as j}from"./index.m-73ef1fbe.js";import{r as p}from"./index-b75aab2a.js";import{E as d}from"./icons-2017ea02.js";const ne=({className:n,isActive:s,setActive:l,...o})=>({tab:j(h.tab,{[n]:!!n,[h.tabActive]:s}),icon:j(h.icon,{[h.iconUnderlinedActive]:s}),content:j(h.contentUnderlined,{[h.contentUnderlinedActive]:s}),attrs:{...o}});function t(n){const{children:s,label:l,setActive:o=()=>{},name:i,onClick:c,isActive:b}=n,{tab:v,icon:y,content:w,attrs:x}=ne(n),{over:P,...g}=x,E=k=>{o(i),c&&c(k)};return e.jsxs("button",{type:"button",...g,role:"tab","aria-selected":b?"true":"false","aria-controls":b?`warp-tabpanel-${i}`:void 0,id:`warp-tab-${i}`,tabIndex:b?0:-1,className:v,onClick:E,children:[!s&&e.jsx("span",{className:w,children:l}),s&&P&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:y,children:s}),e.jsx("span",{className:w,children:l})]}),s&&!P&&e.jsxs("div",{className:h.content,children:[s,l]})]})}try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{setActive:{defaultValue:null,description:"",name:"setActive",required:!1,type:{name:"((name: string) => void)"}},className:{defaultValue:null,description:"Additional CSS class for the tab.",name:"className",required:!1,type:{name:"string"}},over:{defaultValue:{value:"false"},description:"Set the over prop to true if you need to move icons to above the tab label",name:"over",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Additional content to be included in the tab (eg. icons). Content is placed above the label.",name:"children",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler.",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"The label of the tab item.",name:"label",required:!0,type:{name:"ReactNode"}},isActive:{defaultValue:null,description:"Used to set which tab should be active on mount. Defaults to the first tab if not present.",name:"isActive",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the tab.",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}function m(n){var c,b;const{children:s,name:l,hidden:o,...i}=n;return e.jsx("div",{tabIndex:-1,...i,role:"tabpanel","aria-labelledby":`warp-tab-${l}`,id:`warp-tabpanel-${l}`,hidden:o===void 0&&typeof document=="object"?!((b=(c=document==null?void 0:document.getElementById(`warp-tab-${l}`))==null?void 0:c.classList)!=null&&b.contains(h.tabActive)):o,children:s})}try{m.displayName="TabPanel",m.__docgenInfo={description:"",displayName:"TabPanel",props:{name:{defaultValue:null,description:"Tab name identifier. Must exactly match the name identifier of a Tab.",name:"name",required:!0,type:{name:"string"}},hidden:{defaultValue:null,description:"Show/hide panel manually (in server-side rendering).",name:"hidden",required:!1,type:{name:"boolean"}}}}}catch{}function te(n,s=200,l=!1){let o;return function(){var i=()=>{o=null,l||n.apply(this,arguments)};let c=l&&!o;clearTimeout(o),o=setTimeout(i,s),c&&n.apply(this,arguments)}}const re=({className:n,children:s,onClick:l,active:o,...i},c,b)=>({nav:j(V.wrapperUnderlined,{[n]:!!n}),div:j(V.tabContainer,{[ae[`cols${s.length}`]]:!0}),wunderbar:j(V.wunderbar),attrs:i,updateWunderbar:()=>{window.requestAnimationFrame(()=>{try{const v=c.current.querySelector('button[role="tab"][aria-selected="true"]'),{left:y}=c.current.getBoundingClientRect(),{left:w,width:x}=v.getBoundingClientRect();b.current.style.left=`${w-y}px`,b.current.style.width=`${x}px`}catch(v){console.warn("Problem updating tabs",v)}})}}),f=n=>{const s=!!(typeof document=="object"&&(document!=null&&document.createElement)),l=p.useRef(null),o=p.useRef(null),{children:i,onChange:c}=n,{nav:b,div:v,wunderbar:y,attrs:w,updateWunderbar:x}=re(n,l,o);p.useEffect(()=>{s&&k(),x();const a=te(x,100);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)});const P=()=>{var a;if(n.active)return String(n.active);if(p.Children.count(i)>0){const r=p.Children.toArray(i),u=(r==null?void 0:r.find(T=>{var A;return(A=T==null?void 0:T.props)==null?void 0:A.isActive}))||r[0];return String(((a=u==null?void 0:u.props)==null?void 0:a.name)||"")}return""},[g,E]=p.useState(P()),k=()=>{p.Children.forEach(i,a=>{var r,u;if(typeof a=="object"){const T=document.getElementById(`warp-tabpanel-${(r=a==null?void 0:a.props)==null?void 0:r.name}`);T&&(T.hidden=((u=a==null?void 0:a.props)==null?void 0:u.name)!==g)}})},D=a=>{E(a),x(),c&&c(a)},ee=a=>{if(!a.altKey&&!a.ctrlKey&&!a.shiftKey&&["ArrowLeft","ArrowRight","Home","End"].includes(a.key))try{const r=[...l.current.querySelectorAll('button[role="tab"]')],u=r.findIndex(A=>A.name===g),T=(()=>{switch(a.key){case"Home":return 0;case"End":return r.length-1;case"ArrowLeft":return Math.max(0,u-1);case"ArrowRight":return Math.min(r.length-1,u+1);default:return u}})();u!==T&&(a.preventDefault(),D(r[T].name),r[T].focus())}catch(r){console.warn("Problem handling keydown",r)}};return e.jsx("div",{...w,className:b,children:e.jsxs("div",{role:"tablist",className:v,ref:l,onKeyDown:ee,children:[p.Children.map(i,a=>{var r;return a&&p.cloneElement(a,{setActive:D,isActive:((r=a==null?void 0:a.props)==null?void 0:r.name)===g})}),e.jsx("span",{className:y,ref:o})]})})};try{f.displayName="Tabs",f.__docgenInfo={description:"",displayName:"Tabs",props:{children:{defaultValue:null,description:"The Tabs within the container.",name:"children",required:!0,type:{name:"ReactNode"}},active:{defaultValue:null,description:`Used to set the name of the Tab that should be active on mount.
Defaults to the first tab if not present and isActive is not set on any Tab.`,name:"active",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler that is called when the tab changes.",name:"onChange",required:!1,type:{name:"((name: string) => void)"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ce={title:"Navigation/Tabs"},C=()=>e.jsxs(f,{onChange:n=>console.log(n),children:[e.jsx(t,{label:"Tab 1",name:"one"}),!1,e.jsx(t,{label:"Tab 3",name:"three",isActive:!0})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one"}),e.jsx(t,{label:"Tab 2",name:"two"}),e.jsx(t,{label:"Tab 3",name:"three"})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"}),e.jsx(m,{name:"three",children:"Tab three selected!"})]})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one"}),e.jsx(t,{label:"Tab 2 (www.finn.no)",name:"two",onClick:()=>alert("opened tab 2")}),e.jsx(t,{label:"Tab 3 (www.schibsted.com without panel)",name:"three",onClick:()=>alert("opened tab 3")})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"})]})]}),_=()=>e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 2",name:"two",children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 3",name:"three",children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 4",name:"four",children:e.jsx(d,{})})]}),S=()=>e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one",over:!0,isActive:!0,children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 2",name:"two",over:!0,children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 3",name:"three",over:!0,children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 4",name:"four",over:!0,children:e.jsx(d,{})})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(t,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 2",name:"two",children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 3",name:"three",children:e.jsx(d,{})}),e.jsx(t,{label:"Tab 4",name:"four",children:e.jsx(d,{})})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(m,{name:"one",children:"Tab one selected!"}),e.jsx(m,{name:"two",children:"Tab two selected!"}),e.jsx(m,{name:"three",children:"Tab three selected!"}),e.jsx(m,{name:"four",children:"Tab four selected!"})]})]});var $,R,W;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Tabs onChange={e => console.log(e)}>
      <Tab label="Tab 1" name="one" />
      {false && <Tab label="Tab 2" name="two" />}
      <Tab label="Tab 3" name="three" isActive />
    </Tabs>;
}`,...(W=(R=C.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var L,B,M;N.parameters={...N.parameters,docs:{...(L=N.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(M=(B=N.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var U,F,K;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Tabs>
        <Tab label="Tab 1" name="one" />
        <Tab label="Tab 2 (www.finn.no)" name="two" onClick={() => alert('opened tab 2')} />
        <Tab label="Tab 3 (www.schibsted.com without panel)" name="three" onClick={() => alert('opened tab 3')} />
      </Tabs>
      <div className="mb-16">
        <TabPanel name="one">Tab one selected!</TabPanel>
        <TabPanel name="two">Tab two selected!</TabPanel>
      </div>
    </>;
}`,...(K=(F=I.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var O,H,z;_.parameters={..._.parameters,docs:{...(O=_.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(z=(H=_.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var G,J,Q;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(Z=(Y=q.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const de=["Default","DefaultWithPanel","DefaultWithOnClickAction","Icon","IconOvertop","IconWithPanel"];export{C as Default,I as DefaultWithOnClickAction,N as DefaultWithPanel,_ as Icon,S as IconOvertop,q as IconWithPanel,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=Tabs.stories-d5a23414.js.map
