import{j as e,l as w,g as l,h as F}from"./index-4T9h8ufS.js";import{r as S}from"./index-DogsOklH.js";import{a}from"./chunk-MZXVCX43-RlXIxtK5.js";import{i as M}from"./index-iDl-7hYa.js";import{u as P}from"./useId-R7vGbtKH.js";import{r as n}from"./index.m-0-FAh1ao.js";import{c as Q}from"./chevron-down-16-LzIN9Noz.js";import{a as U}from"./i18n-uHMsMSCU.js";import"./v4-yQnnJER4.js";const X=JSON.parse('{"select.label.optional":"(valgfritt)"}'),Z=JSON.parse('{"select.label.optional":"(optional)"}'),ee=JSON.parse('{"select.label.optional":"(vapaaehtoinen)"}'),ae=r=>{const{className:c,invalid:s,id:o,hint:i,always:d,label:y,style:C,optional:N,readOnly:_,disabled:p,...u}=r;U(Z,X,ee);const t=i?`${o}__hint`:void 0;return{attrs:{div:{style:C},label:{htmlFor:o,children:y},select:{...u,"aria-describedby":t,"aria-errormessage":s&&t?t:void 0,"aria-invalid":s,disabled:p,id:o},optional:N,help:d||s?{children:i,id:t}:null},wrapperClasses:n(l.wrapper,c),selectClasses:n({[l.default]:!0,[l.invalid]:s,[l.disabled]:p,[l.readOnly]:_}),selectWrapperClasses:n({[l.selectWrapper]:!0}),helpTextClasses:n({[F.helpText]:!0,[F.helpTextInvalid]:s}),labelClasses:n({[w.label]:!0,[w.labelInvalid]:s}),chevronClasses:n({[l.chevron]:!0,[l.chevronDisabled]:p})}};function se(r,c){const s=P(r.id),{attrs:o,wrapperClasses:i,selectClasses:d,selectWrapperClasses:y,helpTextClasses:C,labelClasses:N,chevronClasses:_}=ae({...r,id:s}),{div:p,label:u,select:t,help:R,optional:K}=o;return e.jsxs("div",{className:i,...p,children:[u.children&&e.jsxs("label",{htmlFor:u.htmlFor,className:N,children:[u.children,K&&e.jsx("span",{className:w.optional,children:M._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),e.jsxs("div",{className:y,children:[e.jsx("select",{ref:c,...t,className:d}),e.jsx("div",{className:n(_),children:e.jsx(Q,{})})]}),R&&e.jsx("div",{className:C,...R})]})}const g=S.forwardRef(se);g.__docgenInfo={description:"",methods:[],displayName:"_Select"};const ue={title:"Forms/Select"},j=r=>e.jsxs(g,{label:"Berries",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),...r,children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),b=()=>e.jsx(j,{}),m=()=>e.jsx(j,{hint:"We assume this is your jam preference",always:!0}),h=()=>{const[r,c]=S.useState(""),[s,o]=S.useState(!0);S.useEffect(()=>{o(r==="Cloudberries")},[r]);const i=d=>(c(d.target.value),a("change"));return e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsxs(g,{invalid:!s,hint:s?"":"Wrong choice",onChange:i,onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{value:"Strawberries",children:"Strawberries"}),e.jsx("option",{value:"Raspberries",children:"Raspberries"}),e.jsx("option",{value:"Cloudberries",children:"Cloudberries"})]})})},x=()=>e.jsx("div",{className:"flex flex-col space-y-32",children:e.jsx(j,{disabled:!0})}),v=()=>e.jsxs("div",{className:"flex flex-col space-y-32",children:[e.jsxs(g,{onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-label":"You're selection is berry nice!",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]}),e.jsx("label",{id:"select-label",htmlFor:"warp-aria-labelledby-example",children:"You're berry good at selecting!"}),e.jsxs(g,{id:"warp-aria-labelledby-example",onChange:a("change"),onFocus:a("focus"),onBlur:a("blur"),"aria-labelledby":"select-label",children:[e.jsx("option",{children:"Strawberries"}),e.jsx("option",{children:"Raspberries"}),e.jsx("option",{children:"Cloudberries"})]})]}),f=()=>e.jsx(j,{optional:!0});b.__docgenInfo={description:"",methods:[],displayName:"standard"};m.__docgenInfo={description:"",methods:[],displayName:"hint"};h.__docgenInfo={description:"",methods:[],displayName:"invalid"};x.__docgenInfo={description:"",methods:[],displayName:"disabled"};v.__docgenInfo={description:"",methods:[],displayName:"noLabel"};f.__docgenInfo={description:"",methods:[],displayName:"optional"};var W,I,O;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:"() => <Select />",...(O=(I=b.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var B,V,Y;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:'() => <Select hint="We assume this is your jam preference" always />',...(Y=(V=m.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var $,E,T;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(T=(E=h.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var J,L,k;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <Select disabled />
  </div>`,...(k=(L=x.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var D,q,z;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
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
  </div>`,...(z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,G,H;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:"() => <Select optional />",...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const be=["standard","hint","invalid","disabled","noLabel","optional"];export{be as __namedExportsOrder,ue as default,x as disabled,m as hint,h as invalid,v as noLabel,f as optional,b as standard};
