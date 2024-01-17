import{j as e,h as o,d as he}from"./index-63782b32.js";import{I as xe}from"./index-278be212.js";import{R as g,r as ne}from"./index-cc1cfef3.js";import{r as l}from"./index.m-73ef1fbe.js";import{U as fe,E as be}from"./unstyled-heading-0d095c5a.js";import{c as ve}from"./chevron-down-16-8c0f6105.js";import{i as w}from"./index-307aa154.js";import"./item-ea8bced7.js";import"./useId-3d17afa6.js";import"./close-16-130576dd.js";var ge=Object.defineProperty,S=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,N=(a,n,t)=>n in a?ge(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t,we=(a,n)=>{for(var t in n||(n={}))ye.call(n,t)&&N(a,t,n[t]);if(S)for(var t of S(n))Ee.call(n,t)&&N(a,t,n[t]);return a},je=JSON.parse('{"icon.title.chevron-up":"Oppoverpil"}'),Ce=JSON.parse('{"icon.title.chevron-up":"Upward arrow"}'),Ie=JSON.parse('{"icon.title.chevron-up":"Nuoli ylöspäin"}'),Se=["en","nb","fi"],te="en",_=a=>Se.find(n=>a===n||a.toLowerCase().includes(n))||te;function Ne(){if(typeof window>"u"){const a={}.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return _(a)}try{const a=document.documentElement.lang;return _(a)}catch(a){return console.warn("could not detect locale, falling back to source locale",a),te}}var _e=(a,n,t,s)=>a==="nb"?t:a==="fi"?s:n,Oe=(a,n,t)=>{const s=Ne(),j=_e(s,a,n,t);w.load(s,j),w.activate(s)};Oe(Ce,je,Ie);var Te=w.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"}),Be=a=>g.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Te}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path>`}},a)),Le=Be;function r(a){const{children:n,expanded:t=!1,title:s="",info:j=!1,box:i=!1,bleed:oe=!1,buttonClass:re="",contentClass:se="",className:le,onChange:C,chevron:ie=!0,animated:de,headingLevel:ce,...pe}=a,[d,I]=g.useState(t),[y,ue]=g.useState(t);g.useEffect(()=>{I(t)},[t]);const me=E=>{I(!E),setTimeout(()=>{ue(!E)},200),C&&C(!E)};return e.jsxs("div",{...pe,className:l(le,{[o.expandable]:!0,[o.expandableBox]:i,[o.expandableBleed]:oe}),children:[e.jsx(fe,{level:ce,children:e.jsx("button",{type:"button","aria-expanded":d,className:l({[re||""]:!0,[o.button]:!0,[o.buttonBox]:i}),onClick:()=>me(d),children:e.jsxs("div",{className:o.title,children:[typeof s=="string"?e.jsx("span",{className:o.titleType,children:s}):s,ie&&e.jsx("div",{className:l({[o.chevron]:!0,[o.chevronBox]:i,[o.chevronNonBox]:!i}),children:y?e.jsx(Le,{className:l({[o.chevronTransform]:!0,[o.chevronCollapse]:!d&&y})}):e.jsx(ve,{className:l({[o.chevronTransform]:!0,[o.chevronExpand]:d&&!y})})})]})})}),e.jsx(Ae,{animated:de,stateExpanded:d,children:e.jsx("div",{className:l({[se||""]:!0,[he.box]:i,[o.paddingTop]:i&&s}),children:n})})]})}function Ae({animated:a,stateExpanded:n,children:t}){return a?e.jsx(be,{show:n,children:t}):e.jsx("div",{className:l({[o.expansion]:!0,[o.expansionNotExpanded]:!n}),"aria-hidden":n?void 0:!0,children:t})}try{r.displayName="Expandable",r.__docgenInfo={description:"",displayName:"Expandable",props:{className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",required:!1,type:{name:"CSSProperties"}},bleed:{defaultValue:{value:"false"},description:"Toggles bleed, makes a box full-width on mobile",name:"bleed",required:!1,type:{name:"boolean"}},info:{defaultValue:{value:"false"},description:"Styles the box with light blue color",name:"info",required:!1,type:{name:"boolean"}},expanded:{defaultValue:{value:"false"},description:"The state of the component, either true for expanded or false for closed.",name:"expanded",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Event function to be called any time the component is expanded or closed. Function will be passed a boolean with a value of true if the component is now expanded or false if it is now closed.",name:"onChange",required:!1,type:{name:"((state: boolean) => void)"}},title:{defaultValue:null,description:"Component title. Can be a string or component. Used to display the title value which is always present regardless of whether the component is open or closed.",name:"title",required:!0,type:{name:"ReactNode"}},box:{defaultValue:{value:"false"},description:"Whether to display the component as a padded box or not.",name:"box",required:!1,type:{name:"boolean"}},buttonClass:{defaultValue:null,description:"Additional CSS classes to include on the button part of the component",name:"buttonClass",required:!1,type:{name:"string"}},contentClass:{defaultValue:null,description:"Additional CSS classes to include on the content part of the component",name:"contentClass",required:!1,type:{name:"string"}},chevron:{defaultValue:{value:"true"},description:"Whether to display the chevron on the button part of the component",name:"chevron",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"false"},description:"Animate open and close",name:"animated",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:null,description:`Wrap the toggle button in a heading element with the specified level.
If headingLevel is not specified, the button will not be wrapped by a heading element.`,name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}}}}}catch{}const Fe={title:"Layout/Expandable"},c=()=>e.jsx(r,{title:"This is a title",children:e.jsx("h2",{children:"I am expandable"})}),p=()=>e.jsx(r,{title:"This is a title",box:!0,children:e.jsx("h2",{children:"I am expandable"})}),u=()=>e.jsx(r,{title:e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("p",{className:"mr-8 mb-0",children:"This is a title with an icon"}),e.jsx("span",{className:"sr-only",children:","}),e.jsx(xe,{})]}),box:!0,info:!0,children:e.jsx("h2",{children:"I am expandable"})}),m=()=>e.jsx(r,{title:"This is a title",box:!0,info:!0,children:e.jsx("h2",{children:"I am expandable"})}),h=()=>{const[a,n]=ne.useState(!1);return e.jsx(r,{title:a?"Open":"Closed",box:!0,info:!0,onChange:n,children:e.jsx("h1",{children:"I am expandable"})})},x=()=>{const[a,n]=ne.useState(!1);return e.jsx(r,{title:a?"Open":"Closed",box:!0,info:!0,chevron:!1,onChange:n,children:e.jsx("h2",{children:"I am expandable"})})},f=()=>e.jsx(r,{title:"Animated box",box:!0,info:!0,animated:!0,children:e.jsx("h2",{children:"I am expandable"})}),b=()=>e.jsx(r,{title:"Animated box",expanded:!0,box:!0,info:!0,animated:!0,children:e.jsx("h2",{children:"I am expandable"})}),v=()=>e.jsx(r,{title:"I'm also a heading",headingLevel:2,children:e.jsx("h2",{children:"I am expandable"})});var O,T,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`() => <Expandable title='This is a title'>
    <h2>I am expandable</h2>
  </Expandable>`,...(B=(T=c.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var L,A,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Expandable title='This is a title' box>
    <h2>I am expandable</h2>
  </Expandable>`,...(V=(A=p.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var q,P,U;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`() => <Expandable title={<div className='flex flex-row items-center'>
        <p className='mr-8 mb-0'>This is a title with an icon</p>
        <span className='sr-only'>,</span>
        <IconBag16 />
      </div>} box info>
    <h2>I am expandable</h2>
  </Expandable>`,...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var R,k,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Expandable title='This is a title' box info>
    <h2>I am expandable</h2>
  </Expandable>`,...(W=(k=m.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var H,M,D;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box info onChange={setOpen}>
      <h1>I am expandable</h1>
    </Expandable>;
}`,...(D=(M=h.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var F,J,G;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box info chevron={false} onChange={setOpen}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(G=(J=x.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var $,z,K;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Expandable title='Animated box' box info animated>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(K=(z=f.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Expandable title='Animated box' expanded box info animated>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Expandable title="I'm also a heading" headingLevel={2}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Je=["Default","Box","BoxWithCustomIcon","InfoBox","Controlled","NoChevron","Animated","AnimatedExpanded","Heading"];export{f as Animated,b as AnimatedExpanded,p as Box,u as BoxWithCustomIcon,h as Controlled,c as Default,v as Heading,m as InfoBox,x as NoChevron,Je as __namedExportsOrder,Fe as default};
