import{j as e,r as _,u as s}from"./index-0SS0MQK6.js";import{r as C,R as G}from"./index-4g5l5LRQ.js";import{r as l}from"./index.m-0-FAh1ao.js";import{i as g}from"./index-XwI9xEnt.js";import{i as f,a as Q}from"./i18n-G6_82uWZ.js";import{B as X}from"./component-2f1zidOJ.js";import"./_commonjsHelpers-4gQjN7DL.js";const q=C.createContext({horizontal:void 0,right:void 0});function i({horizontal:t,right:n,className:r,children:c}){return e.jsx(q.Provider,{value:{horizontal:t,right:n},children:e.jsx("ul",{className:l(r,{[_.steps]:!0,[_.stepsHorizontal]:t}),children:c})})}try{i.displayName="Steps",i.__docgenInfo={description:"",displayName:"Steps",props:{horizontal:{defaultValue:{value:"false"},description:"Direction of steps",name:"horizontal",required:!1,type:{name:"boolean"}},right:{defaultValue:{value:"false"},description:"Align steps to the right",name:"right",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Two or more `Step` components",name:"children",required:!0,type:{name:"Element[]"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}}}}}catch{}var Y={},Z=Object.defineProperty,y=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,k=(t,n,r)=>n in t?Z(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,ne=(t,n)=>{for(var r in n||(n={}))ee.call(n,r)&&k(t,r,n[r]);if(y)for(var r of y(n))te.call(n,r)&&k(t,r,n[r]);return t},re=JSON.parse('{"icon.title.check":"Sjekkmerke"}'),se=JSON.parse('{"icon.title.check":"Checkmark"}'),ae=JSON.parse('{"icon.title.check":"Valintamerkki"}'),T=["en","nb","fi","da","sv"],J="en",oe=()=>{let t;switch(Y.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},$=()=>{var t;const n=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return n.includes("finn")?"nb":n.includes("tori")?"fi":n.includes("blocket")?"sv":n.includes("dba")?"da":J},x=t=>T.find(n=>t===n||t.toLowerCase().includes(n))||$();function ce(){var t;if(typeof window>"u"){const n=oe();return x(n)}try{const n=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,r=$();return T.includes(n)?x(n??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),x(r))}catch(n){return console.warn("could not detect locale, falling back to source locale",n),J}}var ie=(t,n,r,c)=>t==="nb"?r:t==="fi"?c:n,le=(t,n,r)=>{const c=ce(),p=ie(c,t,n,r);g.load(c,p),g.activate(c)};le(se,re,ae);var pe=g.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"}),de=t=>G.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${pe}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path>`}},t)),me=de;const he=JSON.parse('{"steps.aria.emptyCircle":"Tom sirkel","steps.aria.active":"Stegindikator aktiv sirkel","steps.aria.completed":"Stegindikator hel sirkel"}'),ue=JSON.parse('{"steps.aria.emptyCircle":"Empty circle","steps.aria.active":"Step indicator active circle","steps.aria.completed":"Step indicator completed circle"}'),Se=JSON.parse('{"steps.aria.emptyCircle":"Tyhjä ympyrä","steps.aria.active":"Vaiheilmaisin aktiivinen ympyrä","steps.aria.completed":"Vaiheilmaisin valmis ympyrä"}'),j={completed:f._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:f._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:f._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},ve=t=>{const n=Object.keys(j).find(r=>t[r]);return n?j[n]:j.default};function a(t){Q(ue,he,Se);const{active:n,completed:r,children:c}=t,p=C.useContext(q),o=!p.horizontal,d=!p.right,M=l({[s.stepVertical]:o,[s.stepVerticalLeft]:o&&d,[s.stepVerticalRight]:o&&!d,[s.stepHorizontal]:!o}),F=l({[s.stepLine]:!0,[s.stepLineHorizontalLeft]:!0,[s.stepLineHorizontal]:!o,[s.stepLineIncomplete]:!n&&!r,[s.stepLineComplete]:n||r}),W=l({[s.stepDot]:!0,[s.stepDotVerticalRight]:o&&!d,[s.stepDotHorizontal]:!o,[s.stepDotIncomplete]:!(n||r),[s.stepDotActive]:n||r}),K=l({[s.stepLine]:!0,[s.stepLineHorizontalRight]:!0,[s.stepLineVertical]:o,[s.stepLineVerticalRight]:o&&!d,[s.stepLineHorizontal]:!o,[s.stepLineIncomplete]:!r,[s.stepLineComplete]:r}),U=l({[s.content]:!0,[s.contentVertical]:o,[s.contentHorizontal]:!o});return e.jsxs("li",{className:M,children:[!o&&e.jsx("div",{className:F}),e.jsx("div",{className:W,role:"img","aria-label":ve(t),...n&&{"aria-current":"step"},children:r&&e.jsx(me,{})}),e.jsx("div",{className:K}),e.jsx("div",{className:U,children:c})]})}try{a.displayName="Step",a.__docgenInfo={description:"",displayName:"Step",props:{active:{defaultValue:{value:"false"},description:"Step is active",name:"active",required:!1,type:{name:"boolean"}},completed:{defaultValue:{value:"false"},description:"Step is completed",name:"completed",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Contents of Step",name:"children",required:!0,type:{name:"Element | Element[]"}}}}}catch{}const ke={title:"Navigation/Steps"},m=()=>e.jsxs(i,{children:[e.jsxs(a,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),h=()=>e.jsxs(i,{children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>e.jsxs(i,{right:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(i,{horizontal:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),v=()=>{const[t,n]=C.useState(0),r=()=>n(t===4?0:c=>c+1);return e.jsxs(e.Fragment,{children:[e.jsx(X,{onClick:r,small:!0,children:"Complete a step"}),e.jsxs(i,{className:"mt-20",children:[e.jsxs(a,{active:t===0,completed:t>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===1,completed:t>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===2,completed:t>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===3,completed:t>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};var N,w,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Steps>
      <Step>
        <h4>Step one</h4>
        <p>Content</p>
      </Step>
      <Step>
        <h4>Step two</h4>
        <p>Content</p>
      </Step>
      <Step>
        <h4>Step three</h4>
        <p>Content</p>
      </Step>
    </Steps>;
}`,...(L=(w=m.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var b,V,I;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Steps>
      <Step completed>
        <h4>Step one</h4>
        <p>Content</p>
      </Step>
      <Step active>
        <h4>Step two</h4>
        <p>Content</p>
      </Step>
      <Step>
        <h4>Step three</h4>
        <p>Content</p>
      </Step>
    </Steps>;
}`,...(I=(V=h.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var O,z,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Steps right>
      <Step completed>
        <h4>Step one</h4>
        <p>Content</p>
      </Step>
      <Step active>
        <h4>Step two</h4>
        <p>Content</p>
      </Step>
      <Step>
        <h4>Step three</h4>
        <p>Content</p>
      </Step>
    </Steps>;
}`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var H,P,B;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Steps horizontal>
      <Step completed>
        <h4>Step one</h4>
        <p>Content</p>
      </Step>
      <Step active>
        <h4>Step two</h4>
        <p>Content</p>
      </Step>
      <Step>
        <h4>Step three</h4>
        <p>Content</p>
      </Step>
    </Steps>;
}`,...(B=(P=S.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var R,A,D;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [state, setState] = useState(0);
  const handleIncrease = () => {
    if (state === 4) {
      return setState(0);
    }
    return setState(state => state + 1);
  };
  return <>
      <Button onClick={handleIncrease} small>
        Complete a step
      </Button>

      <Steps className="mt-20">
        <Step active={state === 0} completed={state > 0}>
          <h4 className="mt-0">Step one</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 1} completed={state > 1}>
          <h4 className="mt-0">Step two</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 2} completed={state > 2}>
          <h4 className="mt-0">Step three</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 3} completed={state > 3}>
          <h4 className="mt-0">Step four</h4>
          <p>Some content</p>
        </Step>
      </Steps>
    </>;
}`,...(D=(A=v.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Ne=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{S as Horizontal,v as Interactive,u as RightAligned,m as Vertical,h as WithProgress,Ne as __namedExportsOrder,ke as default};
