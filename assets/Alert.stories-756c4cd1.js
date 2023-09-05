import{j as e,a}from"./index-a783ab12.js";import{R as f}from"./index-b75aab2a.js";import{B as o}from"./component-7c2020eb.js";import{r as y}from"./index.m-73ef1fbe.js";import{E as A}from"./unstyled-heading-fb22e64b.js";import"./i18n-ff9a8b3f.js";import"./item-32509172.js";import"./useId-906286da.js";function s({show:t,type:i,role:g="alert",children:x,...h}){const w=a[i],j=a[`${i}Icon`];return e.jsx(A,{show:t,children:e.jsxs("div",{role:g,className:y(h.className,`${a.alert} ${w}`),style:h.style,children:[e.jsx("div",{className:`${a.icon} ${j}`,children:N[i]}),e.jsx("div",{className:a.textWrapper,children:x})]})})}const N={negative:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",children:[e.jsx("path",{d:"M4.1.586A2 2 0 0 1 5.516 0h4.97A2 2 0 0 1 11.9.586L15.413 4.1A2 2 0 0 1 16 5.514v4.97a2 2 0 0 1-.586 1.415L11.9 15.413a2 2 0 0 1-1.415.586h-4.97a2 2 0 0 1-1.414-.586L.586 11.9A2 2 0 0 1 0 10.485v-4.97A2 2 0 0 1 .586 4.1L4.1.586Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 3.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 8 3.25Z",fill:"#fff"}),e.jsx("path",{d:"M8.8 11.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Z",fill:"#fff"})]}),positive:e.jsxs("svg",{width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8",cy:"8",r:"8",transform:"rotate(180 8 8)",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5 4.94c.3.27.34.75.06 1.06l-4 4.5a.75.75 0 0 1-1.09.03l-2-2a.75.75 0 0 1 1.06-1.06l1.44 1.44L10.44 5a.75.75 0 0 1 1.06-.07Z",fill:"#fff"})]}),warning:e.jsxs("svg",{width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M.24 12 6.16 1.09a2.1 2.1 0 0 1 3.68 0l5.92 10.93c.73 1.36-.28 2.99-1.85 2.99H2.1a2.04 2.04 0 0 1-1.85-3Z",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 3.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75Z",fill:"#fff"}),e.jsx("path",{d:"M8.8 11.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Z",fill:"#fff"})]}),info:e.jsxs("svg",{width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"8",cy:"8",r:"8",fill:"currentColor"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.25 12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v4ZM8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",fill:"#fff"})]})};try{s.displayName="Alert",s.__docgenInfo={description:"",displayName:"Alert",props:{show:{defaultValue:null,description:"Determines whether the alert should be visible",name:"show",required:!1,type:{name:"Boolean"}},type:{defaultValue:null,description:"Type of alert",name:"type",required:!0,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"warning"'},{value:'"info"'}]}},role:{defaultValue:{value:"alert"},description:'ARIA live region "role" attribute value',name:"role",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const V={title:"FeedbackIndicators/Alert"},r=()=>{const[t,i]=f.useState(!0);return e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(s,{type:"negative",show:t,children:"This is a message that you've done something really wrong."}),e.jsx(o,{className:"mt-16",small:!0,primary:!0,onClick:()=>i(!t),children:t?"Hide negative alert":"Show negative alert"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(s,{type:"positive",show:!0,children:"This is a message that gives you positive feedback."})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(s,{type:"warning",show:!0,children:"This is a message that shows a warning, might be nothing serious."})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(s,{type:"info",show:!0,children:"This is a message that enlightens you with some new cool information."})]})]})},l=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"font-bold",children:"This text attracts your attention right away"}),e.jsx("p",{children:"This is the message text that can be short or a little bit long"}),e.jsx("a",{children:"Link to more information"}),e.jsxs("div",{className:"mt-8 space-x-8",children:[e.jsx(o,{small:!0,children:"Primary CTA"}),e.jsx(o,{small:!0,secondary:!0,quiet:!0,children:"Secondary"})]})]}),n=()=>{const[t,i]=f.useState(!0);return e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(s,{type:"negative",show:t,children:e.jsx(l,{})}),e.jsx(o,{className:"mt-16",small:!0,primary:!0,onClick:()=>i(!t),children:t?"Hide negative alert":"Show negative alert"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(s,{type:"positive",show:!0,children:e.jsx(l,{})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(s,{type:"warning",show:!0,children:e.jsx(l,{})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(s,{type:"info",show:!0,children:e.jsx(l,{})})]})]})};var d,c,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [show, setShow] = React.useState(true);
  return <div className="flex flex-col gap-y-16">
      <div>
        <h3>Negative</h3>
        <Alert type="negative" show={show}>
          This is a message that you've done something really wrong.
        </Alert>
        <Button className="mt-16" small primary onClick={() => setShow(!show)}>
          {show ? 'Hide negative alert' : 'Show negative alert'}
        </Button>
      </div>
      <div>
        <h3>Positive</h3>
        <Alert type="positive" show>
          This is a message that gives you positive feedback.
        </Alert>
      </div>
      <div>
        <h3>Warning</h3>
        <Alert type="warning" show>
          This is a message that shows a warning, might be nothing serious.
        </Alert>
      </div>
      <div>
        <h3>Info</h3>
        <Alert type="info" show>
          This is a message that enlightens you with some new cool information.
        </Alert>
      </div>
    </div>;
}`,...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [show, setShow] = React.useState(true);
  return <div className="flex flex-col gap-y-16">
      <div>
        <h3>Negative</h3>
        <Alert type="negative" show={show}>
          <InteractiveContent />
        </Alert>
        <Button className="mt-16" small primary onClick={() => setShow(!show)}>
          {show ? 'Hide negative alert' : 'Show negative alert'}
        </Button>
      </div>
      <div>
        <h3>Positive</h3>
        <Alert type="positive" show>
          <InteractiveContent />
        </Alert>
      </div>
      <div>
        <h3>Warning</h3>
        <Alert type="warning" show>
          <InteractiveContent />
        </Alert>
      </div>
      <div>
        <h3>Info</h3>
        <Alert type="info" show>
          <InteractiveContent />
        </Alert>
      </div>
    </div>;
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Z=["Default","WithInteractiveContent"];export{r as Default,n as WithInteractiveContent,Z as __namedExportsOrder,V as default};
//# sourceMappingURL=Alert.stories-756c4cd1.js.map
