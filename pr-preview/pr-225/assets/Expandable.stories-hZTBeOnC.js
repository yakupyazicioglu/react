import{j as n,e as o,b as fe}from"./index-UqYzbhlm.js";import{I as be}from"./index-BOa0iKa2.js";import{R as g,r as ne}from"./index-4g5l5LRQ.js";import{r as l}from"./index.m-0-FAh1ao.js";import{U as ve,E as ge}from"./unstyled-heading-QOU3fVq8.js";import{c as ye}from"./chevron-down-16-KltefElc.js";import{i as j}from"./index-XwI9xEnt.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./item-Ecf4KB7n.js";import"./useId-4PqvGM84.js";import"./close-16-AfVZA5w4.js";var we={},Ee=Object.defineProperty,N=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,S=(a,e,t)=>e in a?Ee(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Ie=(a,e)=>{for(var t in e||(e={}))je.call(e,t)&&S(a,t,e[t]);if(N)for(var t of N(e))Ce.call(e,t)&&S(a,t,e[t]);return a},_e=JSON.parse('{"icon.title.chevron-up":"Oppoverpil"}'),Ne=JSON.parse('{"icon.title.chevron-up":"Upward arrow"}'),Se=JSON.parse('{"icon.title.chevron-up":"Nuoli ylöspäin"}'),te=["en","nb","fi","da","sv"],oe="en",Oe=()=>{let a;switch(we.NMP_BRAND){case"FINN":a="nb";break;case"TORI":a="fi";break;case"BLOCKET":a="sv";break;case"DBA":a="da";break;default:a="en"}return a},re=()=>{var a;const e=(a=document==null?void 0:document.location)==null?void 0:a.hostname;return e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":oe},E=a=>te.find(e=>a===e||a.toLowerCase().includes(e))||re();function Be(){var a;if(typeof window>"u"){const e=Oe();return E(e)}try{const e=(a=document==null?void 0:document.documentElement)==null?void 0:a.lang,t=re();return te.includes(e)?E(e??t):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),E(t))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),oe}}var Te=(a,e,t,s)=>a==="nb"?t:a==="fi"?s:e,Le=(a,e,t)=>{const s=Be(),C=Te(s,a,e,t);j.load(s,C),j.activate(s)};Le(Ne,_e,Se);var Ae=j.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"}),Ve=a=>g.createElement("svg",Ie({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Ae}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path>`}},a)),qe=Ve;function r(a){const{children:e,expanded:t=!1,title:s="",info:C=!1,box:i=!1,bleed:se=!1,buttonClass:le="",contentClass:ie="",className:de,onChange:I,chevron:ce=!0,animated:pe,headingLevel:ue,...me}=a,[d,_]=g.useState(t),[y,he]=g.useState(t);g.useEffect(()=>{_(t)},[t]);const xe=w=>{_(!w),setTimeout(()=>{he(!w)},200),I&&I(!w)};return n.jsxs("div",{...me,className:l(de,{[o.expandable]:!0,[o.expandableBox]:i,[o.expandableBleed]:se}),children:[n.jsx(ve,{level:ue,children:n.jsx("button",{type:"button","aria-expanded":d,className:l({[le||""]:!0,[o.button]:!0,[o.buttonBox]:i}),onClick:()=>xe(d),children:n.jsxs("div",{className:o.title,children:[typeof s=="string"?n.jsx("span",{className:o.titleType,children:s}):s,ce&&n.jsx("div",{className:l({[o.chevron]:!0,[o.chevronBox]:i,[o.chevronNonBox]:!i}),children:y?n.jsx(qe,{className:l({[o.chevronTransform]:!0,[o.chevronCollapse]:!d&&y})}):n.jsx(ye,{className:l({[o.chevronTransform]:!0,[o.chevronExpand]:d&&!y})})})]})})}),n.jsx(ke,{animated:pe,stateExpanded:d,children:n.jsx("div",{className:l({[ie||""]:!0,[fe.box]:i,[o.paddingTop]:i&&s}),children:e})})]})}function ke({animated:a,stateExpanded:e,children:t}){return a?n.jsx(ge,{show:e,children:t}):n.jsx("div",{className:l({[o.expansion]:!0,[o.expansionNotExpanded]:!e}),"aria-hidden":e?void 0:!0,children:t})}try{r.displayName="Expandable",r.__docgenInfo={description:"",displayName:"Expandable",props:{className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",required:!1,type:{name:"CSSProperties"}},bleed:{defaultValue:{value:"false"},description:"Toggles bleed, makes a box full-width on mobile",name:"bleed",required:!1,type:{name:"boolean"}},info:{defaultValue:{value:"false"},description:"Styles the box with light blue color",name:"info",required:!1,type:{name:"boolean"}},expanded:{defaultValue:{value:"false"},description:"The state of the component, either true for expanded or false for closed.",name:"expanded",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Event function to be called any time the component is expanded or closed. Function will be passed a boolean with a value of true if the component is now expanded or false if it is now closed.",name:"onChange",required:!1,type:{name:"((state: boolean) => void)"}},title:{defaultValue:null,description:"Component title. Can be a string or component. Used to display the title value which is always present regardless of whether the component is open or closed.",name:"title",required:!0,type:{name:"ReactNode"}},box:{defaultValue:{value:"false"},description:"Whether to display the component as a padded box or not.",name:"box",required:!1,type:{name:"boolean"}},buttonClass:{defaultValue:null,description:"Additional CSS classes to include on the button part of the component",name:"buttonClass",required:!1,type:{name:"string"}},contentClass:{defaultValue:null,description:"Additional CSS classes to include on the content part of the component",name:"contentClass",required:!1,type:{name:"string"}},chevron:{defaultValue:{value:"true"},description:"Whether to display the chevron on the button part of the component",name:"chevron",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"false"},description:"Animate open and close",name:"animated",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:null,description:`Wrap the toggle button in a heading element with the specified level.
If headingLevel is not specified, the button will not be wrapped by a heading element.`,name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}}}}}catch{}const ze={title:"Layout/Expandable"},c=()=>n.jsx(r,{title:"This is a title",children:n.jsx("h2",{children:"I am expandable"})}),p=()=>n.jsx(r,{title:"This is a title",box:!0,children:n.jsx("h2",{children:"I am expandable"})}),u=()=>n.jsx(r,{title:n.jsxs("div",{className:"flex flex-row items-center",children:[n.jsx("p",{className:"mr-8 mb-0",children:"This is a title with an icon"}),n.jsx("span",{className:"sr-only",children:","}),n.jsx(be,{})]}),box:!0,info:!0,children:n.jsx("h2",{children:"I am expandable"})}),m=()=>n.jsx(r,{title:"This is a title",box:!0,info:!0,children:n.jsx("h2",{children:"I am expandable"})}),h=()=>{const[a,e]=ne.useState(!1);return n.jsx(r,{title:a?"Open":"Closed",box:!0,info:!0,onChange:e,children:n.jsx("h1",{children:"I am expandable"})})},x=()=>{const[a,e]=ne.useState(!1);return n.jsx(r,{title:a?"Open":"Closed",box:!0,info:!0,chevron:!1,onChange:e,children:n.jsx("h2",{children:"I am expandable"})})},f=()=>n.jsx(r,{title:"Animated box",box:!0,info:!0,animated:!0,children:n.jsx("h2",{children:"I am expandable"})}),b=()=>n.jsx(r,{title:"Animated box",expanded:!0,box:!0,info:!0,animated:!0,children:n.jsx("h2",{children:"I am expandable"})}),v=()=>n.jsx(r,{title:"I'm also a heading",headingLevel:2,children:n.jsx("h2",{children:"I am expandable"})});var O,B,T;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`() => <Expandable title='This is a title'>
    <h2>I am expandable</h2>
  </Expandable>`,...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var L,A,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Expandable title='This is a title' box>
    <h2>I am expandable</h2>
  </Expandable>`,...(V=(A=p.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var q,k,P;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`() => <Expandable title={<div className='flex flex-row items-center'>
        <p className='mr-8 mb-0'>This is a title with an icon</p>
        <span className='sr-only'>,</span>
        <IconBag16 />
      </div>} box info>
    <h2>I am expandable</h2>
  </Expandable>`,...(P=(k=u.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var U,R,H;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`() => <Expandable title='This is a title' box info>
    <h2>I am expandable</h2>
  </Expandable>`,...(H=(R=m.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var W,D,M;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box info onChange={setOpen}>
      <h1>I am expandable</h1>
    </Expandable>;
}`,...(M=(D=h.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var J,F,$;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box info chevron={false} onChange={setOpen}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...($=(F=x.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var K,z,G;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Expandable title='Animated box' box info animated>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(G=(z=f.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Expandable title='Animated box' expanded box info animated>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Expandable title="I'm also a heading" headingLevel={2}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Ge=["Default","Box","BoxWithCustomIcon","InfoBox","Controlled","NoChevron","Animated","AnimatedExpanded","Heading"];export{f as Animated,b as AnimatedExpanded,p as Box,u as BoxWithCustomIcon,h as Controlled,c as Default,v as Heading,m as InfoBox,x as NoChevron,Ge as __namedExportsOrder,ze as default};
