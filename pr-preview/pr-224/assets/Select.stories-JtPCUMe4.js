import{j as e,l as R,k as o,h as w}from"./index-CRKZHI9W.js";import{r as g}from"./index-BBkUAzwr.js";import{a}from"./chunk-MZXVCX43-DWuJqIWT.js";import{i as K}from"./index-CZ0b_Np5.js";import{u as M}from"./useId-CZF6ub_S.js";import{r as c}from"./index.m-CtIADANO.js";import{c as P}from"./chevron-down-16-DpdUR2Ml.js";import{a as Q}from"./i18n-Dd5GeZAq.js";import"./v4-D8aEg3BZ.js";const U=JSON.parse('{"select.label.optional":"(valgfritt)"}'),X=JSON.parse('{"select.label.optional":"(optional)"}'),Z=JSON.parse('{"select.label.optional":"(vapaaehtoinen)"}'),ee=r=>{const{className:d,invalid:s,id:l,hint:t,always:p,label:j,style:y,optional:C,readOnly:N,disabled:n,..._}=r;Q(X,U,Z);const i=t?`${l}__hint`:void 0;return{attrs:{div:{style:y},label:{htmlFor:l,children:j},select:{..._,"aria-describedby":i,"aria-errormessage":s&&i?i:void 0,"aria-invalid":s,disabled:n,id:l},optional:C,help:p||s?{children:t,id:i}:null},wrapperClasses:c(o.wrapper,d),selectClasses:c({[o.default]:!0,[o.invalid]:s,[o.disabled]:n,[o.readOnly]:N}),selectWrapperClasses:c({[o.selectWrapper]:!0}),helpTextClasses:c({[w.helpText]:!0,[w.helpTextColor]:!s,[w.helpTextColorInvalid]:s}),chevronClasses:c({[o.chevron]:!0,[o.chevronDisabled]:n})}};function ae(r,d){const s=M(r.id),{attrs:l,wrapperClasses:t,selectClasses:p,selectWrapperClasses:j,helpTextClasses:y,chevronClasses:C}=ee({...r,id:s}),{div:N,label:n,select:_,help:i,optional:H}=l;return e.jsxs("div",{className:t,...N,children:[n.children&&e.jsxs("label",{htmlFor:n.htmlFor,className:R.label,children:[n.children,H&&e.jsx("span",{className:R.optional,children:K._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsxs("div",{className:j,children:[e.jsx("select",{ref:d,..._,className:p}),e.jsx("div",{className:c(C),children:e.jsx(P,{})})]}),i&&e.jsx("div",{className:y,...i})]})}const f=g.forwardRef(ae);f.__docgenInfo={description:"",methods:[],displayName:"_Select"};const pe={title:"Forms/Select"},S=r=>e.jsxs(f,{label:"Berries",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),...r,children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),u=()=>e.jsx(S,{}),b=()=>e.jsx(S,{hint:"We assume this is your jam preference",always:!0}),m=()=>{const[r,d]=g.useState(""),[s,l]=g.useState(!0);g.useEffect(()=>{l(r==="Cloudberries")},[r]);const t=p=>(d(p.target.value),a("change"));return e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsxs(f,{label:"Berries",invalid:!s,hint:s?"":"Wrong choice",onChange:t,onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{value:"Strawberries",children:"Strawberries"}),e.jsx("option",{value:"Raspberries",children:"Raspberries"}),e.jsx("option",{value:"Cloudberries",children:"Cloudberries"})]})})},h=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(S,{disabled:!0})}),x=()=>e.jsxs("div",{className:"flex flex-col space-y-32",children:[e.jsxs(f,{onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),e.jsx("label",{id:"select-label",htmlFor:"warp-aria-labelledby-example",children:"You're berry good at selecting!"}),e.jsxs(f,{id:"warp-aria-labelledby-example",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-labelledby":"select-label",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]})]}),v=()=>e.jsx(S,{optional:!0});u.__docgenInfo={description:"",methods:[],displayName:"standard"};b.__docgenInfo={description:"",methods:[],displayName:"hint"};m.__docgenInfo={description:"",methods:[],displayName:"invalid"};h.__docgenInfo={description:"",methods:[],displayName:"disabled"};x.__docgenInfo={description:"",methods:[],displayName:"noLabel"};v.__docgenInfo={description:"",methods:[],displayName:"optional"};var F,W,I;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:"() => <Select />",...(I=(W=u.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var B,O,T;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:'() => <Select hint="We assume this is your jam preference" always />',...(T=(O=b.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var V,Y,E;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
    <WarpSelect label="Berries" invalid={!valid} hint={!valid ? "Wrong choice" : ""} onChange={handleOnChange} onFocus={action('focus')} onBlur={action('blur')} aria-label="You're selection is berry nice!">
      <option value={'Strawberries'}>Strawberries</option>
      <option value={'Raspberries'}>Raspberries</option>
      <option value={'Cloudberries'}>Cloudberries</option>
    </WarpSelect>

  </div>;
}`,...(E=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var $,J,L;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select disabled />
  </div>`,...(L=(J=h.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var k,D,q;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
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
  </div>`,...(q=(D=x.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var z,A,G;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:"() => <Select optional />",...(G=(A=v.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const ue=["standard","hint","invalid","disabled","noLabel","optional"];export{ue as __namedExportsOrder,pe as default,h as disabled,b as hint,m as invalid,x as noLabel,v as optional,u as standard};
