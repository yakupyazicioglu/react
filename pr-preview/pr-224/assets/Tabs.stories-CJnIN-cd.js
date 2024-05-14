import{j as e,k as f,m as D,n as ae}from"./index-IiiVIy1X.js";import{r as y}from"./index.m-0-FAh1ao.js";import{r as p}from"./index-aXz8NaAs.js";import{b as m}from"./index-TQXSDXbM.js";import"./index-uFIVUTCs.js";const te=({className:t,isActive:s,setActive:r,...o})=>({tab:y(f.tab,{[t]:!!t,[f.tabActive]:s}),icon:y(f.icon,{[f.iconUnderlinedActive]:s}),content:y(f.contentUnderlined,{[f.contentUnderlinedActive]:s}),attrs:{...o}});function a(t){const{children:s,label:r,setActive:o=()=>{},name:l,onClick:i,isActive:b}=t,{tab:v,icon:P,content:j,attrs:w}=te(t),{over:E,...I}=w,_=k=>{o(l),i&&i(k)};return e.jsxs("button",{type:"button",...I,role:"tab","aria-selected":b?"true":"false","aria-controls":b?`warp-tabpanel-${l}`:void 0,id:`warp-tab-${l}`,tabIndex:b?0:-1,className:v,onClick:_,children:[!s&&e.jsx("span",{className:j,children:r}),s&&E&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:P,children:s}),e.jsx("span",{className:j,children:r})]}),s&&!E&&e.jsxs("div",{className:f.content,children:[s,r]})]})}a.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{setActive:{required:!1,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the tab."},over:{required:!1,tsType:{name:"boolean"},description:`Set the over prop to true if you need to move icons to above the tab label
@default false`},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Additional content to be included in the tab (eg. icons). Content is placed above the label."},name:{required:!0,tsType:{name:"string"},description:"Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler."},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The label of the tab item."},isActive:{required:!1,tsType:{name:"boolean"},description:"Used to set which tab should be active on mount. Defaults to the first tab if not present."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles for the tab."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Action to be called when the component is clicked"}}};function u(t){var i,b;const{children:s,name:r,hidden:o,...l}=t;return e.jsx("div",{tabIndex:-1,...l,role:"tabpanel","aria-labelledby":`warp-tab-${r}`,id:`warp-tabpanel-${r}`,hidden:o===void 0&&typeof document=="object"?!((b=(i=document==null?void 0:document.getElementById(`warp-tab-${r}`))==null?void 0:i.classList)!=null&&b.contains(f.tabActive)):o,children:s})}u.__docgenInfo={description:"",methods:[],displayName:"TabPanel",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},name:{required:!0,tsType:{name:"string"},description:"Tab name identifier. Must exactly match the name identifier of a Tab."},hidden:{required:!1,tsType:{name:"boolean"},description:"Show/hide panel manually (in server-side rendering)."}}};function re(t,s=200,r=!1){let o;return function(){var l=()=>{o=null,r||t.apply(this,arguments)};let i=r&&!o;clearTimeout(o),o=setTimeout(l,s),i&&t.apply(this,arguments)}}const se=({className:t,children:s,onClick:r,active:o,...l},i,b)=>({nav:y(D.wrapperUnderlined,{[t]:!!t}),div:y(D.tabContainer,{[ae[`cols${s.length}`]]:!0}),wunderbar:y(D.wunderbar),attrs:l,updateWunderbar:()=>{window.requestAnimationFrame(()=>{if(i.current&&b.current){const v=i.current.querySelector('button[role="tab"][aria-selected="true"]');if(v){const P=i.current.getBoundingClientRect().left,{left:j,width:w}=v.getBoundingClientRect();b.current.style.left=`${j-P}px`,b.current.style.width=`${w}px`}}})}}),x=t=>{const s=!!(typeof document=="object"&&(document!=null&&document.createElement)),r=p.useRef(null),o=p.useRef(null),{children:l,onChange:i}=t,{nav:b,div:v,wunderbar:P,attrs:j,updateWunderbar:w}=se(t,r,o);p.useEffect(()=>{s&&k(),w();const n=re(w,100);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)});const E=()=>{var n;if(t.active)return String(t.active);if(p.Children.count(l)>0){const c=p.Children.toArray(l),T=(c==null?void 0:c.find(d=>{var h;return(h=d==null?void 0:d.props)==null?void 0:h.isActive}))||c[0];return String(((n=T==null?void 0:T.props)==null?void 0:n.name)||"")}return""},[I,_]=p.useState(E()),k=()=>{p.Children.forEach(l,n=>{var c,T;if(typeof n=="object"){const d=document.getElementById(`warp-tabpanel-${(c=n==null?void 0:n.props)==null?void 0:c.name}`);d&&(d.hidden=((T=n==null?void 0:n.props)==null?void 0:T.name)!==I)}})},W=n=>{_(n),w(),i&&i(n)},ne=n=>{var c,T;if(!n.altKey&&!n.ctrlKey&&!n.shiftKey&&["ArrowLeft","ArrowRight","Home","End"].includes(n.key)){const d=Array.from(((c=r==null?void 0:r.current)==null?void 0:c.querySelectorAll('button[role="tab"]'))??[]),h=d.findIndex(g=>g.name===I);if(h>=0){const g=(()=>{switch(n.key){case"Home":return 0;case"End":return d.length-1;case"ArrowLeft":return Math.max(0,h-1);case"ArrowRight":return Math.min(d.length-1,h+1);default:return h}})();h!==g&&((T=d[g])!=null&&T.name)&&(n.preventDefault(),W(d[g].name),d[g].focus())}}};return e.jsx("div",{...j,className:b,children:e.jsxs("div",{role:"tablist",className:v,ref:r,onKeyDown:ne,children:[p.Children.map(l,n=>{var c;return n&&p.cloneElement(n,{setActive:W,isActive:((c=n==null?void 0:n.props)==null?void 0:c.name)===I})}),e.jsx("span",{className:P,ref:o})]})})};x.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The Tabs within the container."},active:{required:!1,tsType:{name:"string"},description:`Used to set the name of the Tab that should be active on mount.
Defaults to the first tab if not present and isActive is not set on any Tab.`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the container"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:"Handler that is called when the tab changes."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles for the container."}}};const be={title:"Navigation/Tabs"},A=()=>e.jsxs(x,{onChange:t=>console.log(t),children:[e.jsx(a,{label:"Tab 1",name:"one"}),!1,e.jsx(a,{label:"Tab 3",name:"three",isActive:!0})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(a,{label:"Tab 1",name:"one"}),e.jsx(a,{label:"Tab 2",name:"two"}),e.jsx(a,{label:"Tab 3",name:"three"})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(u,{name:"one",children:"Tab one selected!"}),e.jsx(u,{name:"two",children:"Tab two selected!"}),e.jsx(u,{name:"three",children:"Tab three selected!"})]})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(a,{label:"Tab 1",name:"one"}),e.jsx(a,{label:"Tab 2 (www.finn.no)",name:"two",onClick:()=>alert("opened tab 2")}),e.jsx(a,{label:"Tab 3 (www.schibsted.com without panel)",name:"three",onClick:()=>alert("opened tab 3")})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(u,{name:"one",children:"Tab one selected!"}),e.jsx(u,{name:"two",children:"Tab two selected!"})]})]}),S=()=>e.jsxs(x,{children:[e.jsx(a,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(m,{})}),e.jsx(a,{label:"Tab 2",name:"two",children:e.jsx(m,{})}),e.jsx(a,{label:"Tab 3",name:"three",children:e.jsx(m,{})}),e.jsx(a,{label:"Tab 4",name:"four",children:e.jsx(m,{})})]}),R=()=>e.jsxs(x,{children:[e.jsx(a,{label:"Tab 1",name:"one",over:!0,isActive:!0,children:e.jsx(m,{})}),e.jsx(a,{label:"Tab 2",name:"two",over:!0,children:e.jsx(m,{})}),e.jsx(a,{label:"Tab 3",name:"three",over:!0,children:e.jsx(m,{})}),e.jsx(a,{label:"Tab 4",name:"four",over:!0,children:e.jsx(m,{})})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx(a,{label:"Tab 1",name:"one",isActive:!0,children:e.jsx(m,{})}),e.jsx(a,{label:"Tab 2",name:"two",children:e.jsx(m,{})}),e.jsx(a,{label:"Tab 3",name:"three",children:e.jsx(m,{})}),e.jsx(a,{label:"Tab 4",name:"four",children:e.jsx(m,{})})]}),e.jsxs("div",{className:"mb-16",children:[e.jsx(u,{name:"one",children:"Tab one selected!"}),e.jsx(u,{name:"two",children:"Tab two selected!"}),e.jsx(u,{name:"three",children:"Tab three selected!"}),e.jsx(u,{name:"four",children:"Tab four selected!"})]})]});A.__docgenInfo={description:"",methods:[],displayName:"Default"};N.__docgenInfo={description:"",methods:[],displayName:"DefaultWithPanel"};C.__docgenInfo={description:"",methods:[],displayName:"DefaultWithOnClickAction"};S.__docgenInfo={description:"",methods:[],displayName:"Icon"};R.__docgenInfo={description:"",methods:[],displayName:"IconOvertop"};q.__docgenInfo={description:"",methods:[],displayName:"IconWithPanel"};var $,L,B;A.parameters={...A.parameters,docs:{...($=A.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Tabs onChange={e => console.log(e)}>
      <Tab label="Tab 1" name="one" />
      {false && <Tab label="Tab 2" name="two" />}
      <Tab label="Tab 3" name="three" isActive />
    </Tabs>;
}`,...(B=(L=A.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var M,O,H;N.parameters={...N.parameters,docs:{...(M=N.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(H=(O=N.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var U,F,K;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(K=(F=C.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var z,G,J;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,V,X;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(X=(V=R.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;q.parameters={...q.parameters,docs:{...(Y=q.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(ee=(Z=q.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const me=["Default","DefaultWithPanel","DefaultWithOnClickAction","Icon","IconOvertop","IconWithPanel"];export{A as Default,C as DefaultWithOnClickAction,N as DefaultWithPanel,S as Icon,R as IconOvertop,q as IconWithPanel,me as __namedExportsOrder,be as default};
