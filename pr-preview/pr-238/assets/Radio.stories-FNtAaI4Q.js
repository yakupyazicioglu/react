import{j as t}from"./index-rnsVMGpb.js";import{T as l}from"./component-zY2aqqO_.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-XwI9xEnt.js";import"./useId-8VBRvMKA.js";import"./index.m-0-FAh1ao.js";import"./item-G_23uWDw.js";import"./i18n-OuWSYtUd.js";const J={title:"Forms/Toggle/Radio"},o=[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],s=()=>t.jsx(l,{type:"radio",options:o,onChange:e=>console.log(e)}),r=()=>t.jsx(l,{type:"radio",title:"Favorite color",options:o,onChange:e=>console.log(e)}),a=()=>t.jsx(l,{optional:!0,type:"radio",title:"Favorite color",options:o,onChange:e=>console.log(e)}),c=()=>t.jsx(l,{type:"radio",title:"Favorite color",helpText:"Choose your absolute favorite color",options:o,onChange:e=>console.log(e)}),i=()=>t.jsx(l,{type:"radio",title:"Favorite color",helpText:"No way you like blue",invalid:!0,selected:[o[1]],options:o,onChange:e=>console.log(e)}),n=()=>t.jsx(l,{type:"radio",title:"Favorite color",helpText:"No way you like blue",disabled:!0,selected:[o[1]],options:o,onChange:e=>console.log(e)}),p=()=>t.jsx(l,{type:"radio",title:"Favorite color",helpText:"Last selected by default",selected:[o[o.length-1]],options:o,onChange:e=>console.log(e)}),d=()=>t.jsx(l,{type:"radio",title:"Favorite color",helpText:"Last selected by default",defaultSelected:[o[o.length-1]],options:o,onChange:e=>console.log(e)});var g,u,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:'() => <Toggle type="radio" options={options} onChange={selected => console.log(selected)} />',...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,y,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" options={options} onChange={selected => console.log(selected)} />',...(T=(y=r.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,v,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:'() => <Toggle optional type="radio" title="Favorite color" options={options} onChange={selected => console.log(selected)} />',...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var b,f,F;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" helpText="Choose your absolute favorite color" options={options} onChange={selected => console.log(selected)} />',...(F=(f=c.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var S,j,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" helpText="No way you like blue" invalid selected={[options[1]]} options={options} onChange={selected => console.log(selected)} />',...(D=(j=i.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var O,k,w;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" helpText="No way you like blue" disabled selected={[options[1]]} options={options} onChange={selected => console.log(selected)} />',...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var L,N,R;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" helpText="Last selected by default" selected={[options[options.length - 1]]} options={options} onChange={selected => console.log(selected)} />',...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var E,H,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:'() => <Toggle type="radio" title="Favorite color" helpText="Last selected by default" defaultSelected={[options[options.length - 1]]} options={options} onChange={selected => console.log(selected)} />',...(I=(H=d.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const K=["MultipleOptions","WithTitle","Optional","HelpText","Invalid","Disabled","SelectedDefaultControlled","SelectedDefaultUncontrolled"];export{n as Disabled,c as HelpText,i as Invalid,s as MultipleOptions,a as Optional,p as SelectedDefaultControlled,d as SelectedDefaultUncontrolled,r as WithTitle,K as __namedExportsOrder,J as default};
