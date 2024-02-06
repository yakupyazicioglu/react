import{j as e,l as V,g as r,h as _}from"./index-0SS0MQK6.js";import{r as g}from"./index-4g5l5LRQ.js";import{a}from"./chunk-WFFRPTHA-K4loqSbI.js";import{i as G}from"./index-XwI9xEnt.js";import{u as P}from"./useId-LEwi1_oF.js";import{r as n}from"./index.m-0-FAh1ao.js";import{c as K}from"./chevron-down-16-KltefElc.js";import{a as Q}from"./i18n-RORRLZQ_.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./preview-errors-4EJmg-NZ.js";import"./index-PPLHz8o0.js";const X=JSON.parse('{"select.label.optional":"(valgfritt)"}'),Z=JSON.parse('{"select.label.optional":"(optional)"}'),ee=JSON.parse('{"select.label.optional":"(vapaaehtoinen)"}'),ae=s=>{const{className:d,invalid:l,id:t,hint:o,always:u,label:C,style:j,optional:w,readOnly:N,disabled:p,...m}=s;Q(Z,X,ee);const i=o?`${t}__hint`:void 0;return{attrs:{div:{style:j},label:{htmlFor:t,children:C},select:{...m,"aria-describedby":i,"aria-errormessage":l&&i?i:void 0,"aria-invalid":l,disabled:p,id:t},optional:w,help:u||l?{children:o,id:i}:null},wrapperClasses:n(r.wrapper,d),selectClasses:n({[r.default]:!0,[r.invalid]:l,[r.disabled]:p,[r.readOnly]:N}),selectWrapperClasses:n({[r.selectWrapper]:!0}),helpTextClasses:n({[_.helpText]:!0,[_.helpTextInvalid]:l}),labelClasses:n({[V.label]:!0,[V.labelInvalid]:l}),chevronClasses:n({[r.chevron]:!0,[r.chevronDisabled]:p})}};function le(s,d){const l=P(s.id),{attrs:t,wrapperClasses:o,selectClasses:u,selectWrapperClasses:C,helpTextClasses:j,labelClasses:w,chevronClasses:N}=ae({...s,id:l}),{div:p,label:m,select:i,help:q,optional:U}=t;return e.jsxs("div",{className:o,...p,children:[m.children&&e.jsxs("label",{htmlFor:m.htmlFor,className:w,children:[m.children,U&&e.jsx("span",{className:V.optional,children:G._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsxs("div",{className:C,children:[e.jsx("select",{ref:d,...i,className:u}),e.jsx("div",{className:n(N),children:e.jsx(K,{})})]}),q&&e.jsx("div",{className:j,...q})]})}const c=g.forwardRef(le);try{c.displayName="_Select",c.__docgenInfo={description:"",displayName:"_Select",props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The `option` elements to populate the select with.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `hint` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"The content to display as the help text.",name:"hint",required:!1,type:{name:"ReactNode"}},always:{defaultValue:null,description:"Whether to always show hint",name:"always",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"The name of the select element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLSelectElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLSelectElement>) => void)"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLSelectElement, Element>) => void)"}},required:{defaultValue:null,description:"Whether user input is required on the select before form submission.",name:"required",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Whether to show optional text",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}const he={title:"Forms/Select"},S=s=>e.jsxs(c,{label:"Berries",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),...s,children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),h=()=>e.jsx(S,{}),b=()=>e.jsx(S,{hint:"We assume this is your jam preference",always:!0}),f=()=>{const[s,d]=g.useState(""),[l,t]=g.useState(!0);g.useEffect(()=>{t(s==="Cloudberries")},[s]);const o=u=>(d(u.target.value),a("change"));return e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsxs(c,{invalid:!l,hint:l?"":"Wrong choice",onChange:o,onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{value:"Strawberries",children:"Strawberries"}),e.jsx("option",{value:"Raspberries",children:"Raspberries"}),e.jsx("option",{value:"Cloudberries",children:"Cloudberries"})]})})},v=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(S,{disabled:!0})}),x=()=>e.jsxs("div",{className:"flex flex-col space-y-32",children:[e.jsxs(c,{onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),e.jsx("label",{id:"select-label",htmlFor:"warp-aria-labelledby-example",children:"You're berry good at selecting!"}),e.jsxs(c,{id:"warp-aria-labelledby-example",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-labelledby":"select-label",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]})]}),y=()=>e.jsx(S,{optional:!0});var F,W,R;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:"() => <Select />",...(R=(W=h.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var T,E,B;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:'() => <Select hint="We assume this is your jam preference" always />',...(B=(E=b.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var O,H,L;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  const [valid, setValid] = React.useState(true);
  React.useEffect(() => {
    setValid(value === 'Cloudberries');
  }, [value]);
  const handleOnChange = e => {
    setValue(e.target.value);
    return action('change');
  };
  return <div className="flex flex-col space-y-32">
    <WarpSelect invalid={!valid} hint={!valid ? "Wrong choice" : ""} onChange={handleOnChange} onFocus={action('focus')} onBlur={action('blur')} aria-label="You're selection is berry nice!">
      <option value={'Strawberries'}>Strawberries</option>
      <option value={'Raspberries'}>Raspberries</option>
      <option value={'Cloudberries'}>Cloudberries</option>
    </WarpSelect>

  </div>;
}`,...(L=(H=f.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var M,I,Y;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select disabled />
  </div>`,...(Y=(I=v.parameters)==null?void 0:I.docs)==null?void 0:Y.source}}};var $,D,J;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <WarpSelect onChange={action('change')} onFocus={action('focus')} onBlur={action('blur')} aria-label="You're selection is berry nice!">
      <option>Strawberries</option>
      <option>Raspberries</option>
      <option>Cloudberries</option>
    </WarpSelect>

    <label id="select-label" htmlFor="warp-aria-labelledby-example">
      You're berry good at selecting!
    </label>
    <WarpSelect id="warp-aria-labelledby-example" onChange={action('change')} onFocus={action('focus')} onBlur={action('blur')} aria-labelledby="select-label">
      <option>Strawberries</option>
      <option>Raspberries</option>
      <option>Cloudberries</option>
    </WarpSelect>
  </div>`,...(J=(D=x.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var k,z,A;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:"() => <Select optional />",...(A=(z=y.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const be=["standard","hint","invalid","disabled","noLabel","optional"];export{be as __namedExportsOrder,he as default,v as disabled,b as hint,f as invalid,x as noLabel,y as optional,h as standard};
