import{j as a,z as x}from"./index-Gxlyw2hQ.js";import{R as o}from"./index-eK40FDle.js";import{u as I}from"./useId-FMy5KOLz.js";function f({controlled:r,option:e,children:t,label:n,invalid:s,value:p,helpId:g,indeterminate:u=!1,checked:y,defaultChecked:b,noVisibleLabel:h,labelClassName:V,inputClassName:q,groupClassName:v,multiple:N,...i}){const d=I(),l=o.useRef(null),m=t||n||(e==null?void 0:e.label);o.useEffect(()=>{l.current&&(l.current.indeterminate=u)},[u,l]);const c=a.jsxs(a.Fragment,{children:[a.jsx("input",{ref:l,id:d,checked:r?y:void 0,defaultChecked:b,"aria-invalid":s,"aria-errormessage":s?g:void 0,value:n?void 0:p??void 0,className:q,...i,onChange:C=>i.onChange(n?C.target.checked:e?{label:e==null?void 0:e.label,value:e==null?void 0:e.value}:!1)}),a.jsx("label",{htmlFor:d,className:V,children:h?a.jsx("span",{className:x.a11y,children:m}):m})]});return N?a.jsx("div",{className:v,children:c}):c}try{f.displayName="Item",f.__docgenInfo={description:"",displayName:"Item",props:{controlled:{defaultValue:null,description:"",name:"controlled",required:!0,type:{name:"boolean"}},option:{defaultValue:null,description:"",name:"option",required:!1,type:{name:"ToggleEntry"}},indeterminate:{defaultValue:{value:"false"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}},helpId:{defaultValue:null,description:"",name:"helpId",required:!1,type:{name:"string"}},noVisibleLabel:{defaultValue:null,description:"",name:"noVisibleLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"",name:"labelClassName",required:!1,type:{name:"string"}},inputClassName:{defaultValue:null,description:"",name:"inputClassName",required:!1,type:{name:"string"}},groupClassName:{defaultValue:null,description:"",name:"groupClassName",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(data: boolean | ToggleEntry) => void"}}}}}catch{}export{f as I};
