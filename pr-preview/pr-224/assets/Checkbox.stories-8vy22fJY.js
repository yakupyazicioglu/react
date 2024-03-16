import{j as t}from"./index-4T9h8ufS.js";import{r as T}from"./index-DogsOklH.js";import{T as l}from"./component-jCtxLavf.js";import"./index-iDl-7hYa.js";import"./useId-R7vGbtKH.js";import"./index.m-0-FAh1ao.js";import"./item-y7FxzNpE.js";import"./i18n-uHMsMSCU.js";const Ce={title:"Forms/Toggle/Checkbox"},o=[{label:"Apple",value:"apple"},{label:"Microsoft",value:"microsoft"},{label:"Amazon",value:"amazon"}],c=()=>{const[e,x]=T.useState(!1);return t.jsx(l,{onChange:()=>x(!e),checked:e,type:"checkbox",label:"Toggle X",noVisibleLabel:!0})},i=()=>t.jsx(l,{type:"checkbox",label:"Apple",onChange:e=>console.log(e)}),r=()=>t.jsx(l,{type:"checkbox",label:"Apple",checked:!0,onChange:e=>console.log(e)}),d=()=>t.jsx(l,{type:"checkbox",label:"Apple",defaultChecked:!0,onChange:e=>console.log(e)}),n=({isInvalid:e=!1,isDisabled:x=!1})=>{const[de,C]=T.useState(!1),[s,y]=T.useState([o[0]]),pe=a=>{y(a===!1?[]:o),C(a)},ge=a=>{let k=s;s.some(O=>O.value===a.value)?k=s.filter(O=>O.value!==a.value):k=[...s,a],s.length===o.length&&C(!1),k.length===o.length&&C(!0),y(k)};return t.jsxs(t.Fragment,{children:[t.jsx(l,{onChange:pe,checked:de,type:"checkbox",label:"Select all companies",indeterminate:s.length>0&&s.length!==o.length,invalid:e,disabled:x}),t.jsx(l,{type:"checkbox",title:"Companies",options:o,selected:s,onChange:ge,invalid:e,disabled:x})]})},p=()=>t.jsx(n,{isInvalid:!0}),g=()=>t.jsx(n,{isDisabled:!0}),h=()=>t.jsx(l,{type:"checkbox",label:"Apple",helpText:"This is helper text",onChange:e=>console.log(e)}),u=()=>t.jsx(l,{type:"checkbox",options:o,onChange:e=>console.log(e)}),m=()=>t.jsx(l,{type:"checkbox",title:"Companies",options:o,onChange:e=>console.log(e)}),b=()=>t.jsx(l,{optional:!0,type:"checkbox",title:"Companies",options:o,onChange:e=>console.log(e)}),S=()=>t.jsx(l,{type:"checkbox",title:"Companies",helpText:"Select a random company",options:o,onChange:e=>console.log(e)}),f=()=>t.jsx(l,{type:"checkbox",title:"Companies",helpText:"Everything but first is selected by default",selected:[...o].splice(1),options:o,onChange:e=>console.log(e)});c.__docgenInfo={description:"",methods:[],displayName:"SingleOptionWithInvisibleLabel"};i.__docgenInfo={description:"",methods:[],displayName:"SingleOption"};r.__docgenInfo={description:"",methods:[],displayName:"SingleOptionCheckedControlledDefault"};d.__docgenInfo={description:"",methods:[],displayName:"SingleOptionCheckedUncontrolledDefault"};n.__docgenInfo={description:"",methods:[],displayName:"IndeterminateState",props:{isInvalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"Invalid"};g.__docgenInfo={description:"",methods:[],displayName:"Disabled"};h.__docgenInfo={description:"",methods:[],displayName:"SingleOptionHelpText"};u.__docgenInfo={description:"",methods:[],displayName:"MultipleOptions"};m.__docgenInfo={description:"",methods:[],displayName:"WithTitle"};b.__docgenInfo={description:"",methods:[],displayName:"Optional"};S.__docgenInfo={description:"",methods:[],displayName:"HelpText"};f.__docgenInfo={description:"",methods:[],displayName:"SelectedDefault"};var v,I,_;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(false);
  return <Toggle onChange={() => setValue(!value)} checked={value} type="checkbox" label="Toggle X" noVisibleLabel />;
}`,...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var A,D,j;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" onChange={checked => console.log(checked)} />;
}`,...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var N,V,H;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" checked onChange={checked => console.log(checked)} />;
}`,...(H=(V=r.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var W,E,L;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" defaultChecked onChange={checked => console.log(checked)} />;
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,U,q;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`({
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
      <Toggle type="checkbox" title="Companies" options={options} selected={selectedOptions} onChange={handleSelect} invalid={isInvalid} disabled={isDisabled} />
    </>;
}`,...(q=(U=n.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var z,F,X;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:"() => <IndeterminateState isInvalid={true} />",...(X=(F=p.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var R,w,B;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:"() => <IndeterminateState isDisabled={true} />",...(B=(w=g.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" label="Apple" helpText="This is helper text" onChange={selected => console.log(selected)} />;
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,Y;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" options={options} onChange={selected => console.log(selected)} />;
}`,...(Y=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" title="Companies" options={options} onChange={selected => console.log(selected)} />;
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,oe,le;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Toggle optional type="checkbox" title="Companies" options={options} onChange={selected => console.log(selected)} />;
}`,...(le=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var se,ne,ae;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" title="Companies" helpText="Select a random company" options={options} onChange={selected => console.log(selected)} />;
}`,...(ae=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ce,ie,re;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Toggle type="checkbox" title="Companies" helpText="Everything but first is selected by default" selected={[...options].splice(1)} options={options} onChange={selected => console.log(selected)} />;
}`,...(re=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};const ye=["SingleOptionWithInvisibleLabel","SingleOption","SingleOptionCheckedControlledDefault","SingleOptionCheckedUncontrolledDefault","IndeterminateState","Invalid","Disabled","SingleOptionHelpText","MultipleOptions","WithTitle","Optional","HelpText","SelectedDefault"];export{g as Disabled,S as HelpText,n as IndeterminateState,p as Invalid,u as MultipleOptions,b as Optional,f as SelectedDefault,i as SingleOption,r as SingleOptionCheckedControlledDefault,d as SingleOptionCheckedUncontrolledDefault,h as SingleOptionHelpText,c as SingleOptionWithInvisibleLabel,m as WithTitle,ye as __namedExportsOrder,Ce as default};
