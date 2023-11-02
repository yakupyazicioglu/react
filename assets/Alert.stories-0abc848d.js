import{j as e,a as r}from"./index-a71f5096.js";import{R as S}from"./index-b75aab2a.js";import{B as d}from"./component-3af07842.js";import{r as _}from"./index.m-73ef1fbe.js";import{E as R}from"./unstyled-heading-34e51ec5.js";import{V,w as b,r as E,_ as F}from"./icons-2017ea02.js";import"./i18n-ff9a8b3f.js";import"./item-4067f961.js";import"./useId-906286da.js";function a({show:t,type:n,role:C="alert",children:I,...c}){const T=r[n],W=r[`${n}Icon`];return e.jsx(R,{show:t,children:e.jsxs("div",{role:C,className:_(c.className,`${r.alert} ${T}`),style:c.style,children:[e.jsx("div",{className:`${r.icon} ${W}`,children:q[n]}),e.jsx("div",{className:r.textWrapper,children:I})]})})}const q={negative:e.jsx(V,{}),positive:e.jsx(b,{}),warning:e.jsx(E,{}),info:e.jsx(F,{})};try{a.displayName="Alert",a.__docgenInfo={description:"",displayName:"Alert",props:{show:{defaultValue:null,description:"Determines whether the alert should be visible",name:"show",required:!1,type:{name:"Boolean"}},type:{defaultValue:null,description:"Type of alert",name:"type",required:!0,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"warning"'},{value:'"info"'}]}},role:{defaultValue:{value:"alert"},description:'ARIA live region "role" attribute value',name:"role",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"id used for relationship ARIA attributes",name:"id",required:!1,type:{name:"string"}}}}}catch{}const G={title:"FeedbackIndicators/Alert"},i=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(a,{type:"negative",show:!0,children:'This is "negative" variant of the alert component'})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(a,{type:"positive",show:!0,role:"status",children:'This is "positive" variant of the alert component'})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(a,{type:"warning",show:!0,children:'This is "warning" variant of the alert component'})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(a,{type:"info",show:!0,role:"status",children:'This is "info" variant of the alert component'})]})]}),s=({type:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("h4",{className:"h5",children:["This is ",t," variant of the alert component"]}),e.jsx("p",{children:"With an additional description"}),e.jsxs("div",{className:"mt-8 space-x-8",children:[e.jsx(d,{small:!0,children:"Primary CTA"}),e.jsx(d,{small:!0,secondary:!0,quiet:!0,children:"Secondary"})]})]}),o=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(a,{type:"negative",show:!0,children:e.jsx(s,{type:"negative"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(a,{type:"positive",show:!0,role:"status",children:e.jsx(s,{type:"positive"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(a,{type:"warning",show:!0,children:e.jsx(s,{type:"warning"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(a,{type:"info",show:!0,role:"status",children:e.jsx(s,{type:"info"})})]})]}),l=()=>{const[t,n]=S.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with default role="alert"'}),e.jsx(d,{className:"mb-16",small:!0,primary:!0,onClick:()=>{n(!t)},"aria-controls":"negative-alert","aria-expanded":t,children:t?"Hide negative alert":"Show negative alert"}),e.jsxs(a,{id:"negative-alert",type:"negative",show:t,children:[e.jsx("h4",{className:"h5",children:'This is "negative" variant of the alert component'}),e.jsx("p",{children:"With an additional description"})]})]})},h=()=>{const[t,n]=S.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with role="alert" on a descendant element'}),e.jsx(d,{className:"mb-16",small:!0,primary:!0,onClick:()=>{n(!t)},"aria-controls":"overriden-role-example-alert","aria-expanded":t,children:t?"Hide warning alert":"Show warning alert"}),e.jsxs(a,{id:"overriden-role-example-alert",type:"warning",show:t,role:"",children:[e.jsx("h4",{className:"h5",children:'This is "warning" variant of the alert component'}),e.jsx("p",{children:"With an additional description that is not that important"})]})]})};var p,m,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
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
  </div>`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var u,x,w;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
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
  </div>`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var g,f,j;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var y,A,N;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(N=(A=h.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const J=["Variants","WithInteractiveContent","WithDefaultRole","WithOverriddenRole"];export{i as Variants,l as WithDefaultRole,o as WithInteractiveContent,h as WithOverriddenRole,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Alert.stories-0abc848d.js.map
