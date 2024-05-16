import{j as e,l as I,g as l,h as w}from"./index-BhCzeWkr.js";import{r as g}from"./index-DVXBtNgz.js";import{a}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{r as c}from"./index.m-CtIADANO.js";import{i as K}from"./index-3GqtXlFf.js";import{c as M}from"./chevron-down-16-dHuByq9l.js";import{a as P}from"./i18n-Dm2pChMu.js";import{u as Q}from"./useId-BNdprgU1.js";import"./v4-CQkTLCs1.js";const U=JSON.parse('{"select.label.optional":"(optional)"}'),X=JSON.parse('{"select.label.optional":"(vapaaehtoinen)"}'),Z=JSON.parse('{"select.label.optional":"(valgfritt)"}'),ee=r=>{const{className:d,invalid:s,id:o,hint:i,always:p,label:j,style:y,optional:C,readOnly:N,disabled:n,..._}=r;P(U,Z,X);const t=i?`${o}__hint`:void 0;return{attrs:{div:{style:y},label:{htmlFor:o,children:j},select:{..._,"aria-describedby":t,"aria-errormessage":s&&t?t:void 0,"aria-invalid":s,disabled:n,id:o},optional:C,help:p||s?{children:i,id:t}:null},wrapperClasses:c(l.wrapper,d),selectClasses:c({[l.default]:!0,[l.invalid]:s,[l.disabled]:n,[l.readOnly]:N}),selectWrapperClasses:c({[l.selectWrapper]:!0}),helpTextClasses:c({[w.helpText]:!0,[w.helpTextColor]:!s,[w.helpTextColorInvalid]:s}),chevronClasses:c({[l.chevron]:!0,[l.chevronDisabled]:n})}};function ae(r,d){const s=Q(r.id),{attrs:o,wrapperClasses:i,selectClasses:p,selectWrapperClasses:j,helpTextClasses:y,chevronClasses:C}=ee({...r,id:s}),{div:N,label:n,select:_,help:t,optional:G}=o;return e.jsxs("div",{className:i,...N,children:[n.children&&e.jsxs("label",{htmlFor:n.htmlFor,className:I.label,children:[n.children,G&&e.jsx("span",{className:I.optional,children:K._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsxs("div",{className:j,children:[e.jsx("select",{ref:d,..._,className:p}),e.jsx("div",{className:c(C),children:e.jsx(M,{})})]}),t&&e.jsx("div",{className:y,...t})]})}const f=g.forwardRef(ae);f.__docgenInfo={description:"",methods:[],displayName:"_Select"};const pe={title:"Forms/Select"},S=r=>e.jsxs(f,{label:"Berries",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),...r,children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),u=()=>e.jsx(S,{}),b=()=>e.jsx(S,{hint:"We assume this is your jam preference",always:!0}),m=()=>{const[r,d]=g.useState(""),[s,o]=g.useState(!0);g.useEffect(()=>{o(r==="Cloudberries")},[r]);const i=p=>(d(p.target.value),a("change"));return e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsxs(f,{label:"Berries",invalid:!s,hint:s?"":"Wrong choice",onChange:i,onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{value:"Strawberries",children:"Strawberries"}),e.jsx("option",{value:"Raspberries",children:"Raspberries"}),e.jsx("option",{value:"Cloudberries",children:"Cloudberries"})]})})},h=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(S,{disabled:!0})}),x=()=>e.jsxs("div",{className:"flex flex-col space-y-32",children:[e.jsxs(f,{onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),e.jsx("label",{id:"select-label",htmlFor:"warp-aria-labelledby-example",children:"You're berry good at selecting!"}),e.jsxs(f,{id:"warp-aria-labelledby-example",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-labelledby":"select-label",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]})]}),v=()=>e.jsx(S,{optional:!0});u.__docgenInfo={description:"",methods:[],displayName:"Standard"};b.__docgenInfo={description:"",methods:[],displayName:"Hint"};m.__docgenInfo={description:"",methods:[],displayName:"Invalid"};h.__docgenInfo={description:"",methods:[],displayName:"Disabled"};x.__docgenInfo={description:"",methods:[],displayName:"NoLabel"};v.__docgenInfo={description:"",methods:[],displayName:"Optional"};var R,F,W;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:"() => <Select />",...(W=(F=u.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var O,B,T;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:'() => <Select hint="We assume this is your jam preference" always />',...(T=(B=b.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var V,Y,E;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
      <WarpSelect label="Berries" invalid={!valid} hint={!valid ? 'Wrong choice' : ''} onChange={handleOnChange} onFocus={action('focus')} onBlur={action('blur')} aria-label="You're selection is berry nice!">
        <option value={'Strawberries'}>Strawberries</option>
        <option value={'Raspberries'}>Raspberries</option>
        <option value={'Cloudberries'}>Cloudberries</option>
      </WarpSelect>
    </div>;
}`,...(E=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var $,D,H;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select disabled />
  </div>`,...(H=(D=h.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var J,L,k;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
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
  </div>`,...(k=(L=x.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var q,z,A;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:"() => <Select optional />",...(A=(z=v.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const ue=["Standard","Hint","Invalid","Disabled","NoLabel","Optional"];export{h as Disabled,b as Hint,m as Invalid,x as NoLabel,v as Optional,u as Standard,ue as __namedExportsOrder,pe as default};
