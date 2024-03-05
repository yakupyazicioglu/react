import{j as t}from"./index-DqkT3nWY.js";import{r as T}from"./index-CBqU2yxZ.js";import{T as l}from"./component-hzgGtNbE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CiKwlzBQ.js";import"./useId-BdPc6t19.js";import"./index.m-CtIADANO.js";import"./item-DdiUqXDZ.js";import"./i18n-DKvCZakw.js";const xe={title:"Forms/Toggle/Checkbox"},o=[{label:"Apple",value:"apple"},{label:"Microsoft",value:"microsoft"},{label:"Amazon",value:"amazon"}],r=()=>{const[e,c]=T.useState(!1);return t.jsx(l,{onChange:()=>c(!e),checked:e,type:"checkbox",label:"Toggle X",noVisibleLabel:!0})},p=()=>t.jsx(l,{type:"checkbox",label:"Apple",onChange:e=>console.log(e)}),i=()=>t.jsx(l,{type:"checkbox",label:"Apple",checked:!0,onChange:e=>console.log(e)}),d=()=>t.jsx(l,{type:"checkbox",label:"Apple",defaultChecked:!0,onChange:e=>console.log(e)}),h=()=>{const[e,c]=T.useState(!1),[n,C]=T.useState([]),se=s=>{C(s===!1?[]:o),c(s)},ce=s=>{let a=n;n.some(f=>f.value===s.value)?a=n.filter(f=>f.value!==s.value):a=[...n,s],n.length===o.length&&c(!1),a.length===o.length&&c(!0),C(a)};return t.jsxs(t.Fragment,{children:[t.jsx(l,{onChange:se,checked:e,type:"checkbox",label:"Select all companies",indeterminate:n.length>0&&n.length!==o.length}),t.jsx(l,{type:"checkbox",title:"Companies",options:o,selected:n,onChange:ce})]})},g=()=>t.jsx(l,{type:"checkbox",label:"Apple",helpText:"This is helper text",onChange:e=>console.log(e)}),u=()=>t.jsx(l,{type:"checkbox",options:o,onChange:e=>console.log(e)}),m=()=>t.jsx(l,{type:"checkbox",title:"Companies",options:o,onChange:e=>console.log(e)}),x=()=>t.jsx(l,{optional:!0,type:"checkbox",title:"Companies",options:o,onChange:e=>console.log(e)}),S=()=>t.jsx(l,{type:"checkbox",title:"Companies",helpText:"Select a random company",options:o,onChange:e=>console.log(e)}),b=()=>t.jsx(l,{type:"checkbox",title:"Companies",helpText:"Please don't select Microsoft",invalid:!0,selected:[o[1]],options:o,onChange:e=>console.log(e)}),k=()=>t.jsx(l,{type:"checkbox",title:"Companies",helpText:"Everything but first is selected by default",selected:[...o].splice(1),options:o,onChange:e=>console.log(e)});var y,O,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <Toggle onChange={() => setValue(!value)} checked={value} type="checkbox" label="Toggle X" noVisibleLabel />;
}`,...(v=(O=r.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var A,j,D;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" onChange={checked => console.log(checked)} />;
}`,...(D=(j=p.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,E,M;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" checked onChange={checked => console.log(checked)} />;
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var V,H,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" defaultChecked onChange={checked => console.log(checked)} />;
}`,...(L=(H=d.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var W,z,F;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
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
      <Toggle onChange={handleSelectAll} checked={selectAllChecked} type="checkbox" label="Select all companies" indeterminate={selectedOptions.length > 0 && selectedOptions.length !== options.length} />
      <Toggle type="checkbox" title="Companies" options={options} selected={selectedOptions} onChange={handleSelect} />
    </>;
}`,...(F=(z=h.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var P,U,X;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" helpText="This is helper text" onChange={selected => console.log(selected)} />;
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var _,R,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" options={options} onChange={selected => console.log(selected)} />;
}`,...(q=(R=u.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var w,B,G;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" title="Companies" options={options} onChange={selected => console.log(selected)} />;
}`,...(G=(B=m.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,N;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Toggle optional type="checkbox" title="Companies" options={options} onChange={selected => console.log(selected)} />;
}`,...(N=(K=x.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,Y,Z;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" title="Companies" helpText="Select a random company" options={options} onChange={selected => console.log(selected)} />;
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" title="Companies" helpText="Please don't select Microsoft" invalid selected={[options[1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,le,ne;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" title="Companies" helpText="Everything but first is selected by default" selected={[...options].splice(1)} options={options} onChange={selected => console.log(selected)} />;
}`,...(ne=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};const Se=["SingleOptionWithInvisibleLabel","SingleOption","SingleOptionCheckedControlledDefault","SingleOptionCheckedUncontrolledDefault","IndeterminateState","SingleOptionHelpText","MultipleOptions","WithTitle","Optional","HelpText","Invalid","SelectedDefault"];export{S as HelpText,h as IndeterminateState,b as Invalid,u as MultipleOptions,x as Optional,k as SelectedDefault,p as SingleOption,i as SingleOptionCheckedControlledDefault,d as SingleOptionCheckedUncontrolledDefault,g as SingleOptionHelpText,r as SingleOptionWithInvisibleLabel,m as WithTitle,Se as __namedExportsOrder,xe as default};
