import{j as e,a as i}from"./index-e03e79f2.js";import{R as S}from"./index-b75aab2a.js";import{B as h}from"./component-b5affbf7.js";import{r as W}from"./index.m-73ef1fbe.js";import{E as V}from"./unstyled-heading-4cd9c8f4.js";import"./i18n-ff9a8b3f.js";import"./item-18986ca2.js";import"./useId-906286da.js";function n({show:t,type:a,role:C="alert",children:R,...c}){const I=i[a],T=i[`${a}Icon`];return e.jsx(V,{show:t,children:e.jsxs("div",{role:C,className:W(c.className,`${i.alert} ${I}`),style:c.style,children:[e.jsx("div",{className:`${i.icon} ${T}`,children:M[a]}),e.jsx("div",{className:i.textWrapper,children:R})]})})}const M={negative:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",children:[e.jsx("path",{d:"M4.1.586A2 2 0 0 1 5.516 0h4.97A2 2 0 0 1 11.9.586L15.413 4.1A2 2 0 0 1 16 5.514v4.97a2 2 0 0 1-.586 1.415L11.9 15.413a2 2 0 0 1-1.415.586h-4.97a2 2 0 0 1-1.414-.586L.586 11.9A2 2 0 0 1 0 10.485v-4.97A2 2 0 0 1 .586 4.1L4.1.586Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 3.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 8 3.25Z",fill:"#fff"}),e.jsx("path",{d:"M8.8 11.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Z",fill:"#fff"})]}),positive:e.jsxs("svg",{width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8",cy:"8",r:"8",transform:"rotate(180 8 8)",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 4.94c.3.27.34.75.06 1.06l-4 4.5a.75.75 0 0 1-1.09.03l-2-2a.75.75 0 0 1 1.06-1.06l1.44 1.44L10.44 5a.75.75 0 0 1 1.06-.07Z",fill:"#fff"})]}),warning:e.jsxs("svg",{width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M.24 12 6.16 1.09a2.1 2.1 0 0 1 3.68 0l5.92 10.93c.73 1.36-.28 2.99-1.85 2.99H2.1a2.04 2.04 0 0 1-1.85-3Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 3.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75Z",fill:"#fff"}),e.jsx("path",{d:"M8.8 11.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Z",fill:"#fff"})]}),info:e.jsxs("svg",{width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8",cy:"8",r:"8",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.25 12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v4ZM8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",fill:"#fff"})]})};try{n.displayName="Alert",n.__docgenInfo={description:"",displayName:"Alert",props:{show:{defaultValue:null,description:"Determines whether the alert should be visible",name:"show",required:!1,type:{name:"Boolean"}},type:{defaultValue:null,description:"Type of alert",name:"type",required:!0,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"warning"'},{value:'"info"'}]}},role:{defaultValue:{value:"alert"},description:'ARIA live region "role" attribute value',name:"role",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}},id:{defaultValue:null,description:"id used for relationship ARIA attributes",name:"id",required:!1,type:{name:"string"}}}}}catch{}const H={title:"FeedbackIndicators/Alert"},r=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(n,{type:"negative",show:!0,children:'This is "negative" variant of the alert component'})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(n,{type:"positive",show:!0,role:"status",children:'This is "positive" variant of the alert component'})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(n,{type:"warning",show:!0,children:'This is "warning" variant of the alert component'})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(n,{type:"info",show:!0,role:"status",children:'This is "info" variant of the alert component'})]})]}),s=({type:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("h4",{className:"h5",children:["This is ",t," variant of the alert component"]}),e.jsx("p",{children:"With an additional description"}),e.jsxs("div",{className:"mt-8 space-x-8",children:[e.jsx(h,{small:!0,children:"Primary CTA"}),e.jsx(h,{small:!0,secondary:!0,quiet:!0,children:"Secondary"})]})]}),l=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(n,{type:"negative",show:!0,children:e.jsx(s,{type:"negative"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(n,{type:"positive",show:!0,role:"status",children:e.jsx(s,{type:"positive"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(n,{type:"warning",show:!0,children:e.jsx(s,{type:"warning"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(n,{type:"info",show:!0,role:"status",children:e.jsx(s,{type:"info"})})]})]}),o=()=>{const[t,a]=S.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with default role="alert"'}),e.jsx(h,{className:"mb-16",small:!0,primary:!0,onClick:()=>{a(!t)},"aria-controls":"negative-alert","aria-expanded":t,children:t?"Hide negative alert":"Show negative alert"}),e.jsxs(n,{id:"negative-alert",type:"negative",show:t,children:[e.jsx("h4",{className:"h5",children:'This is "negative" variant of the alert component'}),e.jsx("p",{children:"With an additional description"})]})]})},d=()=>{const[t,a]=S.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with role="alert" on a descendant element'}),e.jsx(h,{className:"mb-16",small:!0,primary:!0,onClick:()=>{a(!t)},"aria-controls":"overriden-role-example-alert","aria-expanded":t,children:t?"Hide warning alert":"Show warning alert"}),e.jsxs(n,{id:"overriden-role-example-alert",type:"warning",show:t,role:"",children:[e.jsx("h4",{className:"h5",children:'This is "warning" variant of the alert component'}),e.jsx("p",{children:"With an additional description that is not that important"})]})]})};var p,v,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
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
  </div>`,...(m=(v=r.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var u,x,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
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
  </div>`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var w,g,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(j=(g=o.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var y,A,N;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(N=(A=d.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const L=["Variants","WithInteractiveContent","WithDefaultRole","WithOverriddenRole"];export{r as Variants,o as WithDefaultRole,l as WithInteractiveContent,d as WithOverriddenRole,L as __namedExportsOrder,H as default};
//# sourceMappingURL=Alert.stories-b7d1c212.js.map
