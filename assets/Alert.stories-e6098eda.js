import{j as e,a as r}from"./index-8b04f8eb.js";import{R as S}from"./index-b75aab2a.js";import{B as h}from"./component-acaf2cf5.js";import{r as b}from"./index.m-73ef1fbe.js";import{E as R}from"./unstyled-heading-2bd0ed13.js";import{b as _,s as V,G as E,d as q}from"./icons-a16f1b32.js";import"./i18n-ff9a8b3f.js";import"./item-c5e34c6c.js";import"./useId-906286da.js";function a({show:t,type:n,role:C="alert",children:I,...c}){const T=r[n],W=r[`${n}Icon`];return e.jsx(R,{show:t,children:e.jsxs("div",{role:C,className:b(c.className,`${r.alert} ${T}`),style:c.style,children:[e.jsx("div",{className:`${r.icon} ${W}`,children:B[n]}),e.jsx("div",{className:r.textWrapper,children:I})]})})}const B={negative:e.jsx(_,{}),positive:e.jsx(V,{}),warning:e.jsx(E,{}),info:e.jsx(q,{})};try{a.displayName="Alert",a.__docgenInfo={description:"",displayName:"Alert",props:{show:{defaultValue:null,description:"Determines whether the alert should be visible",name:"show",required:!1,type:{name:"Boolean"}},type:{defaultValue:null,description:"Type of alert",name:"type",required:!0,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"warning"'},{value:'"info"'}]}},role:{defaultValue:{value:"alert"},description:'ARIA live region "role" attribute value',name:"role",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"id used for relationship ARIA attributes",name:"id",required:!1,type:{name:"string"}}}}}catch{}const J={title:"FeedbackIndicators/Alert"},i=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(a,{type:"negative",show:!0,children:'This is "negative" variant of the alert component'})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(a,{type:"positive",show:!0,role:"status",children:'This is "positive" variant of the alert component'})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(a,{type:"warning",show:!0,children:'This is "warning" variant of the alert component'})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(a,{type:"info",show:!0,role:"status",children:'This is "info" variant of the alert component'})]})]}),s=({type:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("h4",{className:"h5",children:["This is ",t," variant of the alert component"]}),e.jsx("p",{children:"With an additional description"}),e.jsxs("div",{className:"mt-8 space-x-8",children:[e.jsx(h,{small:!0,children:"Primary CTA"}),e.jsx(h,{small:!0,secondary:!0,quiet:!0,children:"Secondary"})]})]}),o=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(a,{type:"negative",show:!0,children:e.jsx(s,{type:"negative"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(a,{type:"positive",show:!0,role:"status",children:e.jsx(s,{type:"positive"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(a,{type:"warning",show:!0,children:e.jsx(s,{type:"warning"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(a,{type:"info",show:!0,role:"status",children:e.jsx(s,{type:"info"})})]})]}),l=()=>{const[t,n]=S.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with default role="alert"'}),e.jsx(h,{className:"mb-16",small:!0,primary:!0,onClick:()=>{n(!t)},"aria-controls":"negative-alert","aria-expanded":t,children:t?"Hide negative alert":"Show negative alert"}),e.jsxs(a,{id:"negative-alert",type:"negative",show:t,children:[e.jsx("h4",{className:"h5",children:'This is "negative" variant of the alert component'}),e.jsx("p",{children:"With an additional description"})]})]})},d=()=>{const[t,n]=S.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with role="alert" on a descendant element'}),e.jsx(h,{className:"mb-16",small:!0,primary:!0,onClick:()=>{n(!t)},"aria-controls":"overriden-role-example-alert","aria-expanded":t,children:t?"Hide warning alert":"Show warning alert"}),e.jsxs(a,{id:"overriden-role-example-alert",type:"warning",show:t,role:"",children:[e.jsx("h4",{className:"h5",children:'This is "warning" variant of the alert component'}),e.jsx("p",{children:"With an additional description that is not that important"})]})]})};var p,m,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div>
      <h3>Negative</h3>
      <Alert type="negative" show>
        This is "negative" variant of the alert component
      </Alert>
    </div>
    <div>
      <h3>Positive</h3>
      <Alert type="positive" show role="status">
        This is "positive" variant of the alert component
      </Alert>
    </div>
    <div>
      <h3>Warning</h3>
      <Alert type="warning" show>
        This is "warning" variant of the alert component
      </Alert>
    </div>
    <div>
      <h3>Info</h3>
      <Alert type="info" show role="status">
        This is "info" variant of the alert component
      </Alert>
    </div>
  </div>`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,x,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div>
      <h3>Negative</h3>
      <Alert type="negative" show>
        <InteractiveContent type="negative" />
      </Alert>
    </div>
    <div>
      <h3>Positive</h3>
      <Alert type="positive" show role="status">
        <InteractiveContent type="positive" />
      </Alert>
    </div>
    <div>
      <h3>Warning</h3>
      <Alert type="warning" show>
        <InteractiveContent type="warning" />
      </Alert>
    </div>
    <div>
      <h3>Info</h3>
      <Alert type="info" show role="status">
        <InteractiveContent type="info" />
      </Alert>
    </div>
  </div>`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var w,f,j;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [show, setShow] = React.useState(true);
  return <>
      <h3>Example with default role="alert"</h3>
      <Button className="mb-16" small primary onClick={() => {
      setShow(!show);
    }} aria-controls="negative-alert" aria-expanded={show}>
          {show ? 'Hide negative alert' : 'Show negative alert'}
        </Button>

      <Alert id="negative-alert" type="negative" show={show}>
        <h4 className="h5">This is "negative" variant of the alert component</h4>
        <p>With an additional description</p>
      </Alert>
    </>;
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,A,N;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [show, setShow] = React.useState(true);
  return <>
      <h3>Example with role="alert" on a descendant element</h3>
      <Button className="mb-16" small primary onClick={() => {
      setShow(!show);
    }} aria-controls="overriden-role-example-alert" aria-expanded={show}>
        {show ? 'Hide warning alert' : 'Show warning alert'}
      </Button>
      <Alert id="overriden-role-example-alert" type="warning" show={show} role="">
        <h4 className="h5">This is "warning" variant of the alert component</h4>
        <p>With an additional description that is not that important</p>
      </Alert>
    </>;
}`,...(N=(A=d.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const M=["Variants","WithInteractiveContent","WithDefaultRole","WithOverriddenRole"];export{i as Variants,l as WithDefaultRole,o as WithInteractiveContent,d as WithOverriddenRole,M as __namedExportsOrder,J as default};
//# sourceMappingURL=Alert.stories-e6098eda.js.map
