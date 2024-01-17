import{j as e,o as C,q as r}from"./index-1PzaImZP.js";import{r as g,R as W}from"./index-Ainc_9Qe.js";import{r as p}from"./index.m-0-FAh1ao.js";import{i as f}from"./index-fnlwIS5b.js";import{i as x,a as U}from"./i18n-G6_82uWZ.js";import{B as K}from"./component-tZV1htg5.js";const J=g.createContext({horizontal:void 0,right:void 0});function i({horizontal:t,right:n,className:s,children:c}){return e.jsx(J.Provider,{value:{horizontal:t,right:n},children:e.jsx("ul",{className:p(s,{[C.steps]:!0,[C.stepsHorizontal]:t}),children:c})})}try{i.displayName="Steps",i.__docgenInfo={description:"",displayName:"Steps",props:{horizontal:{defaultValue:{value:"false"},description:"Direction of steps",name:"horizontal",required:!1,type:{name:"boolean"}},right:{defaultValue:{value:"false"},description:"Align steps to the right",name:"right",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Two or more `Step` components",name:"children",required:!0,type:{name:"Element[]"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}}}}}catch{}var Q={},X=Object.defineProperty,_=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,y=(t,n,s)=>n in t?X(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,ee=(t,n)=>{for(var s in n||(n={}))Y.call(n,s)&&y(t,s,n[s]);if(_)for(var s of _(n))Z.call(n,s)&&y(t,s,n[s]);return t},te=JSON.parse('{"icon.title.check":"Sjekkmerke"}'),ne=JSON.parse('{"icon.title.check":"Checkmark"}'),se=JSON.parse('{"icon.title.check":"Valintamerkki"}'),re=["en","nb","fi"],T="en",N=t=>re.find(n=>t===n||t.toLowerCase().includes(n))||T;function ae(){if(typeof window>"u"){const t=Q.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return N(t)}try{const t=document.documentElement.lang;return N(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),T}}var oe=(t,n,s,c)=>t==="nb"?s:t==="fi"?c:n,ce=(t,n,s)=>{const c=ae(),l=oe(c,t,n,s);f.load(c,l),f.activate(c)};ce(ne,te,se);var ie=f.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"}),pe=t=>W.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${ie}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 8 3 3 5.5-6"></path>`}},t)),le=pe;const de=JSON.parse('{"steps.aria.emptyCircle":"Tom sirkel","steps.aria.active":"Stegindikator aktiv sirkel","steps.aria.completed":"Stegindikator hel sirkel"}'),me=JSON.parse('{"steps.aria.emptyCircle":"Empty circle","steps.aria.active":"Step indicator active circle","steps.aria.completed":"Step indicator completed circle"}'),he=JSON.parse('{"steps.aria.emptyCircle":"Tyhjä ympyrä","steps.aria.active":"Vaiheilmaisin aktiivinen ympyrä","steps.aria.completed":"Vaiheilmaisin valmis ympyrä"}'),j={completed:x._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:x._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:x._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},ue=t=>{const n=Object.keys(j).find(s=>t[s]);return n?j[n]:j.default};function a(t){U(me,de,he);const{active:n,completed:s,children:c}=t,l=g.useContext(J),o=!l.horizontal,d=!l.right,$=p({[r.stepVertical]:o,[r.stepVerticalLeft]:o&&d,[r.stepVerticalRight]:o&&!d,[r.stepHorizontal]:!o}),B=p({[r.stepLine]:!0,[r.stepLineHorizontalLeft]:!0,[r.stepLineHorizontal]:!o,[r.stepLineIncomplete]:!n&&!s,[r.stepLineComplete]:n||s}),M=p({[r.stepDot]:!0,[r.stepDotVerticalRight]:o&&!d,[r.stepDotHorizontal]:!o,[r.stepDotIncomplete]:!(n||s),[r.stepDotActive]:n||s}),F=p({[r.stepLine]:!0,[r.stepLineHorizontalRight]:!0,[r.stepLineVertical]:o,[r.stepLineVerticalRight]:o&&!d,[r.stepLineHorizontal]:!o,[r.stepLineIncomplete]:!s,[r.stepLineComplete]:s}),G=p({[r.content]:!0,[r.contentVertical]:o,[r.contentHorizontal]:!o});return e.jsxs("li",{className:$,children:[!o&&e.jsx("div",{className:B}),e.jsx("div",{className:M,role:"img","aria-label":ue(t),...n&&{"aria-current":"step"},children:s&&e.jsx(le,{})}),e.jsx("div",{className:F}),e.jsx("div",{className:G,children:c})]})}try{a.displayName="Step",a.__docgenInfo={description:"",displayName:"Step",props:{active:{defaultValue:{value:"false"},description:"Step is active",name:"active",required:!1,type:{name:"boolean"}},completed:{defaultValue:{value:"false"},description:"Step is completed",name:"completed",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Contents of Step",name:"children",required:!0,type:{name:"Element | Element[]"}}}}}catch{}const Ce={title:"Navigation/Steps"},m=()=>e.jsxs(i,{children:[e.jsxs(a,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),h=()=>e.jsxs(i,{children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>e.jsxs(i,{right:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(i,{horizontal:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),v=()=>{const[t,n]=g.useState(0),s=()=>n(t===4?0:c=>c+1);return e.jsxs(e.Fragment,{children:[e.jsx(K,{onClick:s,small:!0,children:"Complete a step"}),e.jsxs(i,{className:"mt-20",children:[e.jsxs(a,{active:t===0,completed:t>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===1,completed:t>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===2,completed:t>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===3,completed:t>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};var k,w,L;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(L=(w=m.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var V,I,O;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(O=(I=h.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var z,b,E;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(E=(b=u.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var H,P,A;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(A=(P=S.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var R,q,D;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(D=(q=v.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const _e=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{S as Horizontal,v as Interactive,u as RightAligned,m as Vertical,h as WithProgress,_e as __namedExportsOrder,Ce as default};
