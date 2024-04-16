import{j as n,g as p}from"./index-CRKZHI9W.js";import{R as g}from"./index-BBkUAzwr.js";import{B as x}from"./component-CKBi9g-J.js";import{r as oe}from"./index.m-CtIADANO.js";import{E as se}from"./unstyled-heading-B4jFVonq.js";import{i as l}from"./index-CZ0b_Np5.js";import{i as ie}from"./info-16-N00NvtRf.js";import{w as c,e as i}from"./index-DnFGxCq3.js";import"./i18n-Dd5GeZAq.js";import"./item-C-DTdq5K.js";import"./useId-CZF6ub_S.js";import"./close-16-BU_GuxoK.js";var le={},ce=Object.defineProperty,I=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))de.call(t,r)&&b(e,r,t[r]);if(I)for(var r of I(t))ue.call(t,r)&&b(e,r,t[r]);return e},pe=JSON.parse('{"icon.title.error":"Åttekant med utropstegn"}'),me=JSON.parse('{"icon.title.error":"Octagon with exclamation point"}'),ve=JSON.parse('{"icon.title.error":"Kahdeksankulmio, jonka sisällä on huutomerkki"}'),z=["en","nb","fi","da","sv"],Y="en",fe=()=>{let e;switch(le.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Z=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":Y},_=e=>z.find(t=>e===t||e.toLowerCase().includes(t))||Z();function ge(){var e;if(typeof window>"u"){const t=fe();return _(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,r=Z();return z.includes(t)?_(t??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),_(r))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Y}}var we=(e,t,r,a)=>e==="nb"?r:e==="fi"?a:t,ye=(e,t,r)=>{const a=ge(),s=we(a,e,t,r);l.load(a,s),l.activate(a)};ye(me,pe,ve);var xe=l.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"}),_e=e=>g.createElement("svg",he({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${xe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path>`}},e)),je=_e,ke={},Ie=Object.defineProperty,N=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,B=(e,t,r)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Be=(e,t)=>{for(var r in t||(t={}))be.call(t,r)&&B(e,r,t[r]);if(N)for(var r of N(t))Ne.call(t,r)&&B(e,r,t[r]);return e},Te=JSON.parse('{"icon.title.success":"Sirkel med sjekkmerke"}'),Oe=JSON.parse('{"icon.title.success":"Circle with checkmark"}'),$e=JSON.parse('{"icon.title.success":"Ympyrä, jonka sisällä on valintamerkki"}'),G=["en","nb","fi","da","sv"],Q="en",Se=()=>{let e;switch(ke.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},X=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":Q},j=e=>G.find(t=>e===t||e.toLowerCase().includes(t))||X();function Ae(){var e;if(typeof window>"u"){const t=Se();return j(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,r=X();return G.includes(t)?j(t??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),j(r))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Q}}var Ce=(e,t,r,a)=>e==="nb"?r:e==="fi"?a:t,Le=(e,t,r)=>{const a=Ae(),s=Ce(a,e,t,r);l.load(a,s),l.activate(a)};Le(Oe,Te,$e);var Pe=l.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"}),Ee=e=>g.createElement("svg",Be({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Pe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path>`}},e)),We=Ee,Re={},De=Object.defineProperty,T=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ve=(e,t)=>{for(var r in t||(t={}))Me.call(t,r)&&O(e,r,t[r]);if(T)for(var r of T(t))He.call(t,r)&&O(e,r,t[r]);return e},Je=JSON.parse('{"icon.title.warning":"Varseltrekant med utropstegn"}'),Fe=JSON.parse('{"icon.title.warning":"Warning triangle with exclamation point"}'),Ke=JSON.parse('{"icon.title.warning":"Varoituskolmio, jonka sisällä on huutomerkki"}'),ee=["en","nb","fi","da","sv"],te="en",Ue=()=>{let e;switch(Re.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ne=()=>{var e;const t=(e=document==null?void 0:document.location)==null?void 0:e.hostname;return t.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":te},k=e=>ee.find(t=>e===t||e.toLowerCase().includes(t))||ne();function qe(){var e;if(typeof window>"u"){const t=Ue();return k(t)}try{const t=(e=document==null?void 0:document.documentElement)==null?void 0:e.lang,r=ne();return ee.includes(t)?k(t??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),k(r))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),te}}var ze=(e,t,r,a)=>e==="nb"?r:e==="fi"?a:t,Ye=(e,t,r)=>{const a=qe(),s=ze(a,e,t,r);l.load(a,s),l.activate(a)};Ye(Fe,Je,Ke);var Ze=l.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"}),Ge=e=>g.createElement("svg",Ve({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${Ze}</title><path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path>`}},e)),Qe=Ge;function o({show:e,type:t,role:r="alert",children:a,...s}){const w=p[t],ae=p[`${t}Icon`];return n.jsx(se,{show:e,children:n.jsxs("div",{role:r,className:oe(s.className,`${p.alert} ${w}`),style:s.style,children:[n.jsx("div",{className:`${p.icon} ${ae}`,children:Xe[t]}),n.jsx("div",{className:p.textWrapper,children:a})]})})}const Xe={negative:n.jsx(je,{}),positive:n.jsx(We,{}),warning:n.jsx(Qe,{}),info:n.jsx(ie,{})};o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{role:{defaultValue:{value:'"alert"',computed:!1},required:!1}}};const ht={title:"FeedbackIndicators/Alert",component:o},re=e=>n.jsx(o,{...e}),d=re.bind({});d.args={type:"negative",show:!0,children:'This is "negative" variant of the alert component'};const u=()=>n.jsxs("div",{className:"flex flex-col gap-y-16",children:[n.jsxs("div",{"data-testid":"negative",children:[n.jsx("h3",{children:"Negative"}),n.jsx(o,{type:"negative",show:!0,children:'This is "negative" variant of the alert component'})]}),n.jsxs("div",{"data-testid":"positive",children:[n.jsx("h3",{children:"Positive"}),n.jsx(o,{type:"positive",show:!0,role:"status",children:'This is "positive" variant of the alert component'})]}),n.jsxs("div",{"data-testid":"warning",children:[n.jsx("h3",{children:"Warning"}),n.jsx(o,{type:"warning",show:!0,children:'This is "warning" variant of the alert component'})]}),n.jsxs("div",{"data-testid":"info",children:[n.jsx("h3",{children:"Info"}),n.jsx(o,{type:"info",show:!0,role:"status",children:'This is "info" variant of the alert component'})]})]});u.play=async({canvasElement:e})=>{const t=c(e),r=c(t.getByTestId("negative"));await i(r.getByRole("alert")).toBeInTheDocument(),await i(r.getByTitle(/Octagon/)).toBeInTheDocument();const a=c(t.getByTestId("positive"));await i(a.getByRole("status")).toBeInTheDocument(),await i(a.getByTitle(/checkmark/)).toBeInTheDocument();const s=c(t.getByTestId("warning"));await i(s.getByRole("alert")).toBeInTheDocument(),await i(s.getByTitle(/Warning/)).toBeInTheDocument();const w=c(t.getByTestId("info"));await i(w.getByRole("status")).toBeInTheDocument(),await i(w.getByTitle(/Information/)).toBeInTheDocument()};const y=({type:e})=>n.jsxs(n.Fragment,{children:[n.jsxs("h4",{className:"h5",children:["This is ",e," variant of the alert component"]}),n.jsx("p",{children:"With an additional description"}),n.jsxs("div",{className:"mt-8 space-x-8",children:[n.jsx(x,{small:!0,children:"Primary CTA"}),n.jsx(x,{small:!0,secondary:!0,quiet:!0,children:"Secondary"})]})]}),m=()=>n.jsxs("div",{className:"flex flex-col gap-y-16",children:[n.jsxs("div",{children:[n.jsx("h3",{children:"Negative"}),n.jsx(o,{type:"negative",show:!0,children:n.jsx(y,{type:"negative"})})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Positive"}),n.jsx(o,{type:"positive",show:!0,role:"status",children:n.jsx(y,{type:"positive"})})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Warning"}),n.jsx(o,{type:"warning",show:!0,children:n.jsx(y,{type:"warning"})})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Info"}),n.jsx(o,{type:"info",show:!0,role:"status",children:n.jsx(y,{type:"info"})})]})]}),v=()=>{const[e,t]=g.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:'Example with default role="alert"'}),n.jsx(x,{className:"mb-16",small:!0,primary:!0,onClick:()=>{t(!e)},"aria-controls":"negative-alert","aria-expanded":e,children:e?"Hide negative alert":"Show negative alert"}),n.jsxs(o,{id:"negative-alert",type:"negative",show:e,children:[n.jsx("h4",{className:"h5",children:'This is "negative" variant of the alert component'}),n.jsx("p",{children:"With an additional description"})]})]})},f=()=>{const[e,t]=g.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:'Example with role="alert" on a descendant element'}),n.jsx(x,{className:"mb-16",small:!0,primary:!0,onClick:()=>{t(!e)},"aria-controls":"overriden-role-example-alert","aria-expanded":e,children:e?"Hide warning alert":"Show warning alert"}),n.jsxs(o,{id:"overriden-role-example-alert",type:"warning",show:e,role:"",children:[n.jsx("h4",{className:"h5",children:'This is "warning" variant of the alert component'}),n.jsx("p",{children:"With an additional description that is not that important"})]})]})},h=re.bind({});h.args={...d.args};h.play=async({canvasElement:e})=>{const t=c(e);await i(t.getByRole("alert")).toBeInTheDocument()};u.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Variants"};m.__docgenInfo={description:"",methods:[],displayName:"WithInteractiveContent"};v.__docgenInfo={description:"",methods:[],displayName:"WithDefaultRole"};f.__docgenInfo={description:"",methods:[],displayName:"WithOverriddenRole"};var $,S,A;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:"args => <Alert {...args} />",...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var C,L,P;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div data-testid="negative">
      <h3>Negative</h3>
      <Alert type="negative" show>
        This is "negative" variant of the alert component
      </Alert>
    </div>
    <div data-testid="positive">
      <h3>Positive</h3>
      <Alert type="positive" show role="status">
        This is "positive" variant of the alert component
      </Alert>
    </div>
    <div data-testid="warning">
      <h3>Warning</h3>
      <Alert type="warning" show>
        This is "warning" variant of the alert component
      </Alert>
    </div>
    <div data-testid="info">
      <h3>Info</h3>
      <Alert type="info" show role="status">
        This is "info" variant of the alert component
      </Alert>
    </div>
  </div>`,...(P=(L=u.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var E,W,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
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
  </div>`,...(R=(W=m.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var D,M,H;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(H=(M=v.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var V,J,F;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(F=(J=f.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var K,U,q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:"args => <Alert {...args} />",...(q=(U=h.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};const pt=["Default","Variants","WithInteractiveContent","WithDefaultRole","WithOverriddenRole","NegativeAlertTask"];export{d as Default,h as NegativeAlertTask,u as Variants,v as WithDefaultRole,m as WithInteractiveContent,f as WithOverriddenRole,pt as __namedExportsOrder,ht as default};
