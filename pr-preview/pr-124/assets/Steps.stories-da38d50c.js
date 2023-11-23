import{j as e,n as C,o as s}from"./index-715318f3.js";import{r as g,R as W}from"./index-c91c767d.js";import{r as p}from"./index.m-73ef1fbe.js";import{i as f}from"./index-f013c0dc.js";import{i as x,a as U}from"./i18n-ff9a8b3f.js";import{B as K}from"./component-cb498bf8.js";const J=g.createContext({horizontal:void 0,right:void 0});function i({horizontal:t,right:n,className:r,children:c}){return e.jsx(J.Provider,{value:{horizontal:t,right:n},children:e.jsx("ul",{className:p(r,{[C.steps]:!0,[C.stepsHorizontal]:t}),children:c})})}try{i.displayName="Steps",i.__docgenInfo={description:"",displayName:"Steps",props:{horizontal:{defaultValue:{value:"false"},description:"Direction of steps",name:"horizontal",required:!1,type:{name:"boolean"}},right:{defaultValue:{value:"false"},description:"Align steps to the right",name:"right",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Two or more `Step` components",name:"children",required:!0,type:{name:"Element[]"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}}}}}catch{}var Q=Object.defineProperty,y=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,_=(t,n,r)=>n in t?Q(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,Z=(t,n)=>{for(var r in n||(n={}))X.call(n,r)&&_(t,r,n[r]);if(y)for(var r of y(n))Y.call(n,r)&&_(t,r,n[r]);return t},ee=JSON.parse('{"icon.title.check":"Sjekkmerke"}'),te=JSON.parse('{"icon.title.check":"Checkmark"}'),ne=JSON.parse('{"icon.title.check":"Valintamerkki"}'),re=["en","nb","fi"],T="en",N=t=>re.find(n=>t===n||t.toLowerCase().includes(n))||T;function se(){if(typeof window>"u"){const t={}.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return N(t)}try{const t=document.documentElement.lang;return N(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),T}}var ae=(t,n,r,c)=>t==="nb"?r:t==="fi"?c:n,oe=(t,n,r)=>{const c=se(),l=ae(c,t,n,r);f.load(c,l),f.activate(c)};oe(te,ee,ne);var ce=f.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"}),ie=t=>W.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${ce}</title><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 8 3 3 5.5-6"></path>`}},t)),pe=ie;const le=JSON.parse('{"steps.aria.emptyCircle":"Tom sirkel","steps.aria.active":"Stegindikator aktiv sirkel","steps.aria.completed":"Stegindikator fullført sirkel"}'),de=JSON.parse('{"steps.aria.emptyCircle":"Empty circle","steps.aria.active":"Step indicator active circle","steps.aria.completed":"Step indicator completed circle"}'),me=JSON.parse('{"steps.aria.emptyCircle":"Tyhjä ympyrä","steps.aria.active":"Vaiheilmaisin aktiivinen ympyrä","steps.aria.completed":"Vaiheilmaisin valmis ympyrä"}'),j={completed:x._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:x._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:x._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},he=t=>{const n=Object.keys(j).find(r=>t[r]);return n?j[n]:j.default};function a(t){U(de,le,me);const{active:n,completed:r,children:c}=t,l=g.useContext(J),o=!l.horizontal,d=!l.right,$=p({[s.stepVertical]:o,[s.stepVerticalLeft]:o&&d,[s.stepVerticalRight]:o&&!d,[s.stepHorizontal]:!o}),B=p({[s.stepLine]:!0,[s.stepLineHorizontalLeft]:!0,[s.stepLineHorizontal]:!o,[s.stepLineIncomplete]:!n&&!r,[s.stepLineComplete]:n||r}),M=p({[s.stepDot]:!0,[s.stepDotVerticalRight]:o&&!d,[s.stepDotHorizontal]:!o,[s.stepDotIncomplete]:!(n||r),[s.stepDotActive]:n||r}),F=p({[s.stepLine]:!0,[s.stepLineHorizontalRight]:!0,[s.stepLineVertical]:o,[s.stepLineVerticalRight]:o&&!d,[s.stepLineHorizontal]:!o,[s.stepLineIncomplete]:!r,[s.stepLineComplete]:r}),G=p({[s.content]:!0,[s.contentVertical]:o,[s.contentHorizontal]:!o});return e.jsxs("li",{className:$,children:[!o&&e.jsx("div",{className:B}),e.jsx("div",{className:M,role:"img","aria-label":he(t),...n&&{"aria-current":"step"},children:r&&e.jsx(pe,{})}),e.jsx("div",{className:F}),e.jsx("div",{className:G,children:c})]})}try{a.displayName="Step",a.__docgenInfo={description:"",displayName:"Step",props:{active:{defaultValue:{value:"false"},description:"Step is active",name:"active",required:!1,type:{name:"boolean"}},completed:{defaultValue:{value:"false"},description:"Step is completed",name:"completed",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Contents of Step",name:"children",required:!0,type:{name:"Element | Element[]"}}}}}catch{}const ge={title:"Navigation/Steps"},m=()=>e.jsxs(i,{children:[e.jsxs(a,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),h=()=>e.jsxs(i,{children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>e.jsxs(i,{right:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(i,{horizontal:!0,children:[e.jsxs(a,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(a,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),v=()=>{const[t,n]=g.useState(0),r=()=>n(t===4?0:c=>c+1);return e.jsxs(e.Fragment,{children:[e.jsx(K,{onClick:r,small:!0,children:"Complete a step"}),e.jsxs(i,{className:"mt-20",children:[e.jsxs(a,{active:t===0,completed:t>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===1,completed:t>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===2,completed:t>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(a,{active:t===3,completed:t>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};var k,w,L;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(A=(P=S.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var R,D,q;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(q=(D=v.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const Ce=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{S as Horizontal,v as Interactive,u as RightAligned,m as Vertical,h as WithProgress,Ce as __namedExportsOrder,ge as default};
//# sourceMappingURL=Steps.stories-da38d50c.js.map
