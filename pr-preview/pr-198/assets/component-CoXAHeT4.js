import{j as a,l as b,i as e,h as p}from"./index-Qu8W46vS.js";import{r as L,R as d}from"./index-BwDkhjyp.js";import{i as H}from"./index-B83nmiF0.js";import{r as y}from"./index.m-CtIADANO.js";import{u as w}from"./useId-DI35503U.js";import{a as W}from"./i18n-DX2T9MF2.js";const _=JSON.parse('{"textfield.label.optional":"(valgfritt)"}'),F=JSON.parse('{"textfield.label.optional":"(optional)"}'),C=JSON.parse('{"textfield.label.optional":"(vapaaehtoinen)"}'),v=L.forwardRef((s,x)=>{const{className:g,disabled:l,id:T,children:m,invalid:q,error:V,helpText:o,label:h,readOnly:n,type:S="text",style:N,optional:M,...E}=s;W(F,_,C);const u=w(T),r=o?`${u}__hint`:void 0,t=q||V,c=d.Children.toArray(m).find(i=>d.isValidElement(i)&&i.props.suffix),f=d.Children.toArray(m).find(i=>d.isValidElement(i)&&i.props.prefix);return a.jsxs("div",{className:g,style:N,children:[h&&a.jsxs("label",{htmlFor:u,className:b.label,children:[h,M&&a.jsx("span",{className:b.optional,children:H._({id:"textfield.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})})]}),a.jsxs("div",{className:e.wrapper,children:[f,a.jsx("input",{className:y({[e.base]:!0,[e.default]:!t&&!l&&!n,[e.invalid]:t&&!l&&!n,[e.disabled]:!t&&l&&!n,[e.readOnly]:!t&&!l&&n,[e.placeholder]:!!s.placeholder,[e.suffix]:!!c,[e.prefix]:!!f}),...E,"aria-describedby":r,"aria-errormessage":t&&r?r:void 0,"aria-invalid":t,disabled:l,id:u,readOnly:n,ref:x,type:S}),c]}),o&&a.jsx("div",{className:y({[p.helpText]:!0,[p.helpTextColor]:!t,[p.helpTextColorInvalid]:t}),id:r,children:o})]})});try{v.displayName="TextField",v.__docgenInfo={description:"",displayName:"TextField",props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string | (string & readonly string[])"}},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.\n@deprecated use `invalid` instead.",name:"error",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"The content to display as the label.",name:"label",required:!1,type:{name:"ReactNode"}},max:{defaultValue:null,description:'Standard `input` max attribute, to be used with `type="number".` See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmax).',name:"max",required:!1,type:{name:"string | number"}},min:{defaultValue:null,description:'Standard `input` min attribute, to be used with `type="number".` See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmin).',name:"min",required:!1,type:{name:"string | number"}},maxLength:{defaultValue:null,description:"The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"minLength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"((e: FocusEvent<HTMLInputElement, Element>) => void)"}},pattern:{defaultValue:null,description:"Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).",name:"pattern",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Text hint that occupies the text input when it is empty.",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"required",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",required:!1,type:{name:"CSSProperties"}},type:{defaultValue:null,description:"The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"password"'}]}},children:{defaultValue:null,description:"For affix use",name:"children",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Mark label to indicate that filling in this field is optional",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}export{v as T};
