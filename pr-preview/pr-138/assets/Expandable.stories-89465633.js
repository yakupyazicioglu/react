import{j as e,h as a,d as de}from"./index-d754b311.js";import{T as pe,a as ce,b as ue}from"./icons-c27ab0ec.js";import{R as y,r as X}from"./index-b75aab2a.js";import{r as s}from"./index.m-73ef1fbe.js";import{U as me,E as he}from"./unstyled-heading-4a3ae3f0.js";import"./item-ecbc81aa.js";import"./useId-906286da.js";function n(o){const{children:t,expanded:r=!1,showChevronUpIcon:Y=!1,title:d="",info:be=!1,box:l=!1,bleed:Z=!1,buttonClass:ee="",contentClass:ae="",className:ne,onChange:j,chevron:te=!0,animated:oe,headingLevel:se,...re}=o,[i,E]=y.useState(r),[g,le]=y.useState(Y);y.useEffect(()=>{E(r)},[r]);const ie=C=>{E(!C),setTimeout(()=>{le(!C)},200),j&&j(!C)};return e.jsxs("div",{...re,className:s(ne,{[a.expandable]:!0,[a.expandableBox]:l,[a.expandableBleed]:Z}),children:[e.jsx(me,{level:se,children:e.jsx("button",{type:"button","aria-expanded":i,className:s({[ee||""]:!0,[a.button]:!0,[a.buttonBox]:l}),onClick:()=>ie(i),children:e.jsxs("div",{className:a.title,children:[typeof d=="string"?e.jsx("span",{className:a.titleType,children:d}):d,te&&e.jsx("div",{className:s({[a.chevron]:!0,[a.chevronBox]:l,[a.chevronNonBox]:!l}),children:g?e.jsx(pe,{className:s({[a.chevronTransform]:!0,[a.chevronCollapse]:!i&&g})}):e.jsx(ce,{className:s({[a.chevronTransform]:!0,[a.chevronExpand]:i&&!g})})})]})})}),e.jsx(xe,{animated:oe,stateExpanded:i,children:e.jsx("div",{className:s({[ae||""]:!0,[de.box]:l,[a.paddingTop]:l&&d}),children:t})})]})}function xe({animated:o,stateExpanded:t,children:r}){return o?e.jsx(he,{show:t,children:r}):e.jsx("div",{className:s({[a.expansion]:!0,[a.expansionNotExpanded]:!t}),"aria-hidden":t?void 0:!0,children:r})}try{n.displayName="Expandable",n.__docgenInfo={description:"",displayName:"Expandable",props:{className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",required:!1,type:{name:"CSSProperties"}},bleed:{defaultValue:{value:"false"},description:"Toggles bleed, makes a box full-width on mobile",name:"bleed",required:!1,type:{name:"boolean"}},info:{defaultValue:{value:"false"},description:"Styles the box with light blue color",name:"info",required:!1,type:{name:"boolean"}},expanded:{defaultValue:{value:"false"},description:"The state of the component, either true for expanded or false for closed.",name:"expanded",required:!1,type:{name:"boolean"}},showChevronUpIcon:{defaultValue:{value:"false"},description:"The state of the chevron-up icon, if set to true, chevron up should be displayed, if set to false then chevron-down icon should be displayed.",name:"showChevronUpIcon",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Event function to be called any time the component is expanded or closed. Function will be passed a boolean with a value of true if the component is now expanded or false if it is now closed.",name:"onChange",required:!1,type:{name:"((state: boolean) => void)"}},title:{defaultValue:null,description:"Component title. Can be a string or component. Used to display the title value which is always present regardless of whether the component is open or closed.",name:"title",required:!0,type:{name:"ReactNode"}},box:{defaultValue:{value:"false"},description:"Whether to display the component as a padded box or not.",name:"box",required:!1,type:{name:"boolean"}},buttonClass:{defaultValue:null,description:"Additional CSS classes to include on the button part of the component",name:"buttonClass",required:!1,type:{name:"string"}},contentClass:{defaultValue:null,description:"Additional CSS classes to include on the content part of the component",name:"contentClass",required:!1,type:{name:"string"}},chevron:{defaultValue:{value:"true"},description:"Whether to display the chevron on the button part of the component",name:"chevron",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"false"},description:"Animate open and close",name:"animated",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:null,description:`Wrap the toggle button in a heading element with the specified level.
If headingLevel is not specified, the button will not be wrapped by a heading element.`,name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}}}}}catch{}const Ie={title:"Layout/Expandable"},p=()=>e.jsx(n,{title:"This is a title",children:e.jsx("h2",{children:"I am expandable"})}),c=()=>e.jsx(n,{title:"This is a title",box:!0,children:e.jsx("h2",{children:"I am expandable"})}),u=()=>e.jsx(n,{title:e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("p",{className:"mr-8 mb-0",children:"This is a title with an icon"}),e.jsx("span",{className:"sr-only",children:","}),e.jsx(ue,{})]}),box:!0,info:!0,children:e.jsx("h2",{children:"I am expandable"})}),m=()=>e.jsx(n,{title:"This is a title",box:!0,info:!0,children:e.jsx("h2",{children:"I am expandable"})}),h=()=>{const[o,t]=X.useState(!1);return e.jsx(n,{title:o?"Open":"Closed",box:!0,info:!0,onChange:t,children:e.jsx("h1",{children:"I am expandable"})})},x=()=>{const[o,t]=X.useState(!1);return e.jsx(n,{title:o?"Open":"Closed",box:!0,info:!0,chevron:!1,onChange:t,children:e.jsx("h2",{children:"I am expandable"})})},b=()=>e.jsx(n,{title:"Animated box",box:!0,info:!0,animated:!0,children:e.jsx("h2",{children:"I am expandable"})}),f=()=>e.jsx(n,{title:"Animated box",expanded:!0,box:!0,info:!0,animated:!0,showChevronUpIcon:!0,children:e.jsx("h2",{children:"I am expandable"})}),v=()=>e.jsx(n,{title:"I'm also a heading",headingLevel:1,children:e.jsx("h2",{children:"I am expandable"})});var I,S,w;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Expandable title='This is a title'>
    <h2>I am expandable</h2>
  </Expandable>`,...(w=(S=p.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var N,T,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`() => <Expandable title='This is a title' box>
    <h2>I am expandable</h2>
  </Expandable>`,...(V=(T=c.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var q,B,A;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`() => <Expandable title={<div className='flex flex-row items-center'>
        <p className='mr-8 mb-0'>This is a title with an icon</p>
        <span className='sr-only'>,</span>
        <IconBag16 />
      </div>} box info>
    <h2>I am expandable</h2>
  </Expandable>`,...(A=(B=u.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var O,U,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`() => <Expandable title='This is a title' box info>
    <h2>I am expandable</h2>
  </Expandable>`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var L,R,W;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box info onChange={setOpen}>
      <h1>I am expandable</h1>
    </Expandable>;
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var H,k,D;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  return <Expandable title={open ? 'Open' : 'Closed'} box info chevron={false} onChange={setOpen}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(D=(k=x.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var F,P,$;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Expandable title='Animated box' box info animated>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...($=(P=b.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var z,G,J;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Expandable title='Animated box' expanded box info animated showChevronUpIcon>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Expandable title="I'm also a heading" headingLevel={1}>
      <h2>I am expandable</h2>
    </Expandable>;
}`,...(Q=(M=v.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const Se=["Default","Box","BoxWithCustomIcon","InfoBox","Controlled","NoChevron","Animated","AnimatedExpanded","Heading"];export{b as Animated,f as AnimatedExpanded,c as Box,u as BoxWithCustomIcon,h as Controlled,p as Default,v as Heading,m as InfoBox,x as NoChevron,Se as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Expandable.stories-89465633.js.map
