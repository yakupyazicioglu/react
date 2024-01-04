import{j as e,p as a}from"./index-cd9b396d.js";import{r as u}from"./index.m-73ef1fbe.js";import{c as F}from"./close-16-2dd7d545.js";import{a as O,i as m}from"./i18n-ff9a8b3f.js";import{a as q,b as V}from"./index-930836df.js";import"./index-b75aab2a.js";import"./index-ea31d059.js";const I=JSON.parse('{"pill.aria.openFilter":"Åpne filter","pill.aria.removeFilter":["Fjern filter ",["label"]]}'),L=JSON.parse('{"pill.aria.openFilter":"Open filter","pill.aria.removeFilter":["Remove filter ",["label"]]}'),A=JSON.parse('{"pill.aria.openFilter":"Avaa suodatin","pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}');function s(l){return O(L,I,A),e.jsxs("div",{className:a.pill,children:[e.jsxs("button",{type:"button",onClick:l.onClick,className:u(l.canClose?"":l.className,{[a.button]:!0,[l.suggestion?a.suggestion:a.filter]:!0,[a.label]:!0,[l.canClose?a.labelWithClose:a.labelWithoutClose]:!0}),children:[e.jsx("span",{className:a.a11y,children:l.openSRLabel||m._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter",values:{label:l.label}})}),l.icon||e.jsx("span",{children:l.label})]}),l.canClose&&e.jsxs("button",{type:"button",className:u(l.className,{[a.button]:!0,[l.suggestion?a.suggestion:a.filter]:!0,[a.close]:!0}),onClick:l.onClose,children:[e.jsx("span",{className:a.a11y,children:l.closeSRLabel||m._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter",values:{label:l.label}})}),e.jsx(F,{})]})]})}try{s.displayName="Pill",s.__docgenInfo={description:"",displayName:"Pill",props:{label:{defaultValue:null,description:"Render text inside of Pill",name:"label",required:!1,type:{name:"string"}},openSRLabel:{defaultValue:null,description:"Label read by screen readers when targetting a pill",name:"openSRLabel",required:!1,type:{name:"string"}},closeSRLabel:{defaultValue:null,description:"Label read by screen readers when targetting the pill close button",name:"closeSRLabel",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Render icon inside of Pill",name:"icon",required:!1,type:{name:"ReactNode"}},canClose:{defaultValue:{value:"false"},description:"Whether Pill should render a closing button, use onClick",name:"canClose",required:!1,type:{name:"boolean"}},suggestion:{defaultValue:{value:"false"},description:"Whether Pill should be rendered as a suggestion",name:"suggestion",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Action to be called when the Pill is clicked",name:"onClick",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Action to be called when the close button is clicked",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"Additional styles applied to the Pill",name:"className",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Buttons/Pill"},r=()=>e.jsx(s,{label:"Example"}),t=()=>e.jsx(s,{label:"Example",canClose:!0,onClose:()=>alert("remove")}),n=()=>e.jsx(s,{label:"Example",suggestion:!0}),o=()=>e.jsx(s,{label:"Example",suggestion:!0,canClose:!0,onClose:()=>alert("remove")}),i=()=>e.jsx(s,{label:"Example",onClick:()=>alert("pill is clicked"),suggestion:!0,canClose:!0,onClose:()=>alert("close is clicked")}),c=()=>e.jsxs("div",{className:"flex space-x-8",children:[e.jsx(s,{icon:e.jsx(q,{}),onClick:()=>alert("onClick event"),className:"py-12"}),e.jsx(s,{icon:e.jsx(V,{}),onClick:()=>alert("onClick event"),suggestion:!0,className:"py-12"})]});var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Pill label="Example" />;
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,f,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Pill label="Example" canClose onClose={() => alert('remove')} />;
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,h,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Pill label="Example" suggestion />;
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var k,y,P;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Pill label="Example" suggestion canClose onClose={() => alert('remove')} />;
}`,...(P=(y=o.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var j,N,S;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Pill label="Example" onClick={() => alert('pill is clicked')} suggestion canClose onClose={() => alert('close is clicked')} />;
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var _,E,R;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <div className="flex space-x-8">
      <Pill icon={<IconSearch16 />} onClick={() => alert('onClick event')} className="py-12" />
      <Pill icon={<IconPlus16 />} onClick={() => alert('onClick event')} suggestion className="py-12" />
    </div>;
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const G=["Default","DefaultCanClose","Suggestion","SuggestionCanClose","PillOnClickAndOnClose","PillsWithIcon"];export{r as Default,t as DefaultCanClose,i as PillOnClickAndOnClose,c as PillsWithIcon,n as Suggestion,o as SuggestionCanClose,G as __namedExportsOrder,z as default};
//# sourceMappingURL=Button.stories-f223213d.js.map
