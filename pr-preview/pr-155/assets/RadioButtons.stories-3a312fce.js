import{j as t}from"./index-a71f5096.js";import{T as r}from"./component-260a4ae9.js";import"./index-b75aab2a.js";import"./i18n-ff9a8b3f.js";import"./useId-906286da.js";import"./index.m-73ef1fbe.js";import"./item-4067f961.js";const P={title:"Forms/Toggle/RadioButtons"},o=[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],l=()=>t.jsx(r,{type:"radio-button",options:o,onChange:e=>console.log(e)}),s=()=>t.jsx(r,{type:"radio-button",equalWidth:!0,options:o,onChange:e=>console.log(e)}),a=()=>t.jsx(r,{type:"radio-button",small:!0,options:o,onChange:e=>console.log(e)}),n=()=>t.jsx(r,{type:"radio-button",title:"Favorite color",options:o,onChange:e=>console.log(e)}),c=()=>t.jsx(r,{optional:!0,type:"radio-button",title:"Favorite color",options:o,onChange:e=>console.log(e)}),i=()=>t.jsx(r,{type:"radio-button",title:"Favorite color",helpText:"Choose your absolute favorite color",options:o,onChange:e=>console.log(e)}),p=()=>t.jsx(r,{type:"radio-button",title:"Favorite color",helpText:"No way you like blue",invalid:!0,selected:[o[1]],options:o,onChange:e=>console.log(e)}),d=()=>t.jsx(r,{type:"radio-button",title:"Favorite color",helpText:"Last selected by default",selected:[o[o.length-1]],options:o,onChange:e=>console.log(e)}),u=()=>t.jsx(r,{type:"radio-button",title:"Favorite color",helpText:"Last selected by default",defaultSelected:[o[o.length-1]],options:o,onChange:e=>console.log(e)});var g,m,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Toggle type="radio-button" options={options} onChange={selected => console.log(selected)} />;
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,y,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Toggle type="radio-button" equalWidth options={options} onChange={selected => console.log(selected)} />;
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,C,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Toggle type="radio-button" small options={options} onChange={selected => console.log(selected)} />;
}`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,f,F;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Toggle type="radio-button" title="Favorite color" options={options} onChange={selected => console.log(selected)} />;
}`,...(F=(f=n.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var j,W,O;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Toggle optional type="radio-button" title="Favorite color" options={options} onChange={selected => console.log(selected)} />;
}`,...(O=(W=c.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var q,D,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Toggle type="radio-button" title="Favorite color" helpText="Choose your absolute favorite color" options={options} onChange={selected => console.log(selected)} />;
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,R,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Toggle type="radio-button" title="Favorite color" helpText="No way you like blue" invalid selected={[options[1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(k=(R=p.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var w,B,H;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Toggle type="radio-button" title="Favorite color" helpText="Last selected by default" selected={[options[options.length - 1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(H=(B=d.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var I,M,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Toggle type="radio-button" title="Favorite color" helpText="Last selected by default" defaultSelected={[options[options.length - 1]]} options={options} onChange={selected => console.log(selected)} />;
}`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const Q=["MultipleOptions","EqualWidth","Small","WithTitle","Optional","HelpText","Invalid","SelectedDefaultControlled","SelectedDefaultUncontrolled"];export{s as EqualWidth,i as HelpText,p as Invalid,l as MultipleOptions,c as Optional,d as SelectedDefaultControlled,u as SelectedDefaultUncontrolled,a as Small,n as WithTitle,Q as __namedExportsOrder,P as default};
//# sourceMappingURL=RadioButtons.stories-3a312fce.js.map
