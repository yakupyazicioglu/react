import{c as r,j as e}from"./index-8b04f8eb.js";import{r as _}from"./index.m-73ef1fbe.js";import{R as A}from"./index-b75aab2a.js";function a(d){const{children:j,as:w="div",variant:N="neutral",position:t,...y}=d;return A.createElement(w,{...y,className:_(r.base,r[N],{[r.positionBase]:!!t,[r.positionTL]:t==="top-left",[r.positionTR]:t==="top-right",[r.positionBR]:t==="bottom-right",[r.positionBL]:t==="bottom-left"},d.className)},j)}try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{children:{defaultValue:null,description:"Expand element children",name:"children",required:!0,type:{name:"string | Element | Element[]"}},className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",required:!1,type:{name:"CSSProperties"}},as:{defaultValue:{value:"div"},description:"Allows customization of the underlying HTML element",name:"as",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"neutral"},description:"Type of badge",name:"variant",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"negative"'},{value:'"positive"'},{value:'"warning"'},{value:'"info"'},{value:'"neutral"'},{value:'"notification"'},{value:'"price"'}]}},position:{defaultValue:null,description:"Position of badge",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-left"'},{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}}}}}catch{}const E={title:"Layout/Badge"},i=()=>e.jsx(a,{children:"A badge without variant or position"}),n=()=>e.jsxs("div",{className:"space-x-16",children:[e.jsx(a,{variant:"neutral",children:"neutral badge"}),e.jsx(a,{variant:"info",children:"info badge"}),e.jsx(a,{variant:"positive",children:"positive badge"}),e.jsx(a,{variant:"warning",children:"warning badge"}),e.jsx(a,{variant:"negative",children:"negative badge"}),e.jsx(a,{variant:"disabled",children:"disabled badge"}),e.jsx(a,{variant:"notification",children:"notification badge"}),e.jsx(a,{variant:"price",children:"price badge"})]}),o=()=>e.jsxs("div",{className:"space-y-16 max-w-[400px]",children:[e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"top-left",children:"top-left"})]}),e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"top-right",children:"top-right"})]}),e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"bottom-right",children:"bottom-right"})]}),e.jsxs("div",{className:"relative border border-0 rounded-8 overflow-hidden h-96",children:[e.jsx("img",{className:"w-full h-96 object-cover",src:"https://source.unsplash.com/random/400x96"}),e.jsx(a,{variant:"price",position:"bottom-left",children:"bottom-left"})]})]}),s=()=>e.jsx(a,{as:"span",children:"A badge wrapped in a span tag"});var l,c,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => <Badge>
    A badge without variant or position
  </Badge>`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div className="space-x-16">
    <Badge variant="neutral">
      neutral badge
    </Badge>
    <Badge variant="info">
      info badge
    </Badge>
    <Badge variant="positive">
      positive badge
    </Badge>
    <Badge variant="warning">
      warning badge
    </Badge>
    <Badge variant="negative">
      negative badge
    </Badge>
    <Badge variant="disabled">
      disabled badge
    </Badge>
    <Badge variant="notification">
      notification badge
    </Badge>
    <Badge variant="price">
      price badge
    </Badge>
  </div>`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div className="space-y-16 max-w-[400px]">
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="top-left">top-left</Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="top-right">top-right</Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="bottom-right">bottom-right</Badge>
    </div>
    <div className="relative border border-0 rounded-8 overflow-hidden h-96">
      <img className="w-full h-96 object-cover" src="https://source.unsplash.com/random/400x96" />
      <Badge variant="price" position="bottom-left">bottom-left</Badge>
    </div>
  </div>`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,x,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Badge as="span">
    A badge wrapped in a span tag
  </Badge>`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const R=["Default","Variants","Positions","As"];export{s as As,i as Default,o as Positions,n as Variants,R as __namedExportsOrder,E as default};
//# sourceMappingURL=Badge.stories-94ffa165.js.map
