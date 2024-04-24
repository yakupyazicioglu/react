import{j as t}from"./index-CkQYNE3v.js";import{r as v}from"./index-CBqU2yxZ.js";import{T as l}from"./component-BanyciF-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CiKwlzBQ.js";import"./useId-BdPc6t19.js";import"./index.m-CtIADANO.js";import"./item-4JmbcY6t.js";import"./i18n-DKvCZakw.js";const Te={title:"Forms/Toggle/Checkbox"},o=[{label:"Apple",value:"apple"},{label:"Microsoft",value:"microsoft"},{label:"Amazon",value:"amazon"}],i=()=>{const[e,c]=v.useState(!1);return t.jsx(l,{onChange:()=>c(!e),checked:e,type:"checkbox",label:"Toggle X",noVisibleLabel:!0})},p=()=>t.jsx(l,{type:"checkbox",label:"Apple",onChange:e=>console.log(e)}),d=()=>t.jsx(l,{type:"checkbox",label:"Apple",checked:!0,onChange:e=>console.log(e)}),h=()=>t.jsx(l,{type:"checkbox",label:"Apple",defaultChecked:!0,onChange:e=>console.log(e)}),a=({isInvalid:e=!1,isDisabled:c=!1})=>{const[pe,f]=v.useState(!1),[s,T]=v.useState([o[0]]),de=n=>{T(n===!1?[]:o),f(n)},he=n=>{let r=s;s.some(O=>O.value===n.value)?r=s.filter(O=>O.value!==n.value):r=[...s,n],s.length===o.length&&f(!1),r.length===o.length&&f(!0),T(r)};return t.jsxs(t.Fragment,{children:[t.jsx(l,{onChange:de,checked:pe,type:"checkbox",label:"Select all companies",indeterminate:s.length>0&&s.length!==o.length,invalid:e,disabled:c}),t.jsx(l,{type:"checkbox",title:"Companies",options:o,selected:s,onChange:he,invalid:e,helpText:e?"This is an error message":void 0,disabled:c})]})},u=()=>t.jsx(a,{isInvalid:!0}),g=()=>t.jsx(a,{isDisabled:!0}),m=()=>t.jsx(l,{type:"checkbox",label:"Apple",helpText:"This is helper text",onChange:e=>console.log(e)}),b=()=>t.jsx(l,{type:"checkbox",options:o,onChange:e=>console.log(e)}),S=()=>t.jsx(l,{type:"checkbox",title:"Companies",options:o,onChange:e=>console.log(e)}),x=()=>t.jsx(l,{optional:!0,type:"checkbox",title:"Companies",options:o,onChange:e=>console.log(e)}),k=()=>t.jsx(l,{type:"checkbox",title:"Companies",helpText:"Select a random company",options:o,onChange:e=>console.log(e)}),C=()=>t.jsx(l,{type:"checkbox",title:"Companies",helpText:"Everything but first is selected by default",selected:[...o].splice(1),options:o,onChange:e=>console.log(e)});var y,A,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <Toggle onChange={() => setValue(!value)} checked={value} type="checkbox" label="Toggle X" noVisibleLabel />;
}`,...(j=(A=i.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var D,I,E;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" onChange={checked => console.log(checked)} />;
}`,...(E=(I=p.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var V,H,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" checked onChange={checked => console.log(checked)} />;
}`,...(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var W,M,z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" defaultChecked onChange={checked => console.log(checked)} />;
}`,...(z=(M=h.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var F,U,X;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`({
  isInvalid = false,
  isDisabled = false
}: {
  isInvalid?: boolean;
  isDisabled?: boolean;
}) => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([options[0]]);
  const handleSelectAll = (checked: boolean) => {
    if (checked === false) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
    setSelectAllChecked(checked);
  };
  const handleSelect = (selected: Option) => {
    let updatedSelected = selectedOptions;
    if (selectedOptions.some(option => option.value === selected.value)) {
      updatedSelected = selectedOptions.filter(option => option.value !== selected.value);
    } else {
      updatedSelected = [...selectedOptions, selected];
    }
    if (selectedOptions.length === options.length) setSelectAllChecked(false);
    if (updatedSelected.length === options.length) setSelectAllChecked(true);
    setSelectedOptions(updatedSelected);
  };
  return <>
      <Toggle onChange={handleSelectAll} checked={selectAllChecked} type="checkbox" label="Select all companies" indeterminate={selectedOptions.length > 0 && selectedOptions.length !== options.length} invalid={isInvalid} disabled={isDisabled} />
      <Toggle type="checkbox" title="Companies" options={options} selected={selectedOptions} onChange={handleSelect} invalid={isInvalid} helpText={isInvalid ? 'This is an error message' : undefined} disabled={isDisabled} />
    </>;
}`,...(X=(U=a.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var _,R,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:"() => <IndeterminateState isInvalid={true} />",...(q=(R=u.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var w,B,G;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:"() => <IndeterminateState isDisabled={true} />",...(G=(B=g.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,N;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" helpText="This is helper text" onChange={selected => console.log(selected)} />;
}`,...(N=(K=m.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var P,Q,Y;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" options={options} onChange={selected => console.log(selected)} />;
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" title="Companies" options={options} onChange={selected => console.log(selected)} />;
}`,...(ee=($=S.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,oe,le;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Toggle optional type="checkbox" title="Companies" options={options} onChange={selected => console.log(selected)} />;
}`,...(le=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,ne,ae;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" title="Companies" helpText="Select a random company" options={options} onChange={selected => console.log(selected)} />;
}`,...(ae=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ce,re,ie;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" title="Companies" helpText="Everything but first is selected by default" selected={[...options].splice(1)} options={options} onChange={selected => console.log(selected)} />;
}`,...(ie=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const Oe=["SingleOptionWithInvisibleLabel","SingleOption","SingleOptionCheckedControlledDefault","SingleOptionCheckedUncontrolledDefault","IndeterminateState","Invalid","Disabled","SingleOptionHelpText","MultipleOptions","WithTitle","Optional","HelpText","SelectedDefault"];export{g as Disabled,k as HelpText,a as IndeterminateState,u as Invalid,b as MultipleOptions,x as Optional,C as SelectedDefault,p as SingleOption,d as SingleOptionCheckedControlledDefault,h as SingleOptionCheckedUncontrolledDefault,m as SingleOptionHelpText,i as SingleOptionWithInvisibleLabel,S as WithTitle,Oe as __namedExportsOrder,Te as default};
