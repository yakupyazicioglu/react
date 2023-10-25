import{j as e,n as v,o as t}from"./index-074eacee.js";import{r as C}from"./index-b75aab2a.js";import{r as c}from"./index.m-73ef1fbe.js";import{f as F}from"./icons-c27ab0ec.js";import{i as x}from"./i18n-ff9a8b3f.js";import{B as T}from"./component-77a4fccf.js";const R=C.createContext({horizontal:void 0,right:void 0});function p({horizontal:n,right:r,className:a,children:i}){return e.jsx(R.Provider,{value:{horizontal:n,right:r},children:e.jsx("ul",{className:c(a,{[v.steps]:!0,[v.stepsHorizontal]:n}),children:i})})}try{p.displayName="Steps",p.__docgenInfo={description:"",displayName:"Steps",props:{horizontal:{defaultValue:{value:"false"},description:"Direction of steps",name:"horizontal",required:!1,type:{name:"boolean"}},right:{defaultValue:{value:"false"},description:"Align steps to the right",name:"right",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Two or more `Step` components",name:"children",required:!0,type:{name:"Element[]"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}}}}}catch{}const j={completed:x._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:x._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:x._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},G=n=>{const r=Object.keys(j).find(a=>n[a]);return r?j[r]:j.default};function s(n){const{active:r,completed:a,children:i}=n,f=C.useContext(R),o=!f.horizontal,l=!f.right,B=c({[t.stepVertical]:o,[t.stepVerticalLeft]:o&&l,[t.stepVerticalRight]:o&&!l,[t.stepHorizontal]:!o}),P=c({[t.stepLine]:!0,[t.stepLineHorizontalLeft]:!0,[t.stepLineHorizontal]:!o,[t.stepLineIncomplete]:!r&&!a,[t.stepLineComplete]:r||a}),k=c({[t.stepDot]:!0,[t.stepDotVerticalRight]:o&&!l,[t.stepDotHorizontal]:!o,[t.stepDotIncomplete]:!(r||a),[t.stepDotActive]:r||a}),O=c({[t.stepLine]:!0,[t.stepLineHorizontalRight]:!0,[t.stepLineVertical]:o,[t.stepLineVerticalRight]:o&&!l,[t.stepLineHorizontal]:!o,[t.stepLineIncomplete]:!a,[t.stepLineComplete]:a}),W=c({[t.content]:!0,[t.contentVertical]:o,[t.contentHorizontal]:!o});return e.jsxs("li",{className:B,children:[!o&&e.jsx("div",{className:P}),e.jsx("div",{className:k,role:"img","aria-label":G(n),...r&&{"aria-current":"step"},children:a&&e.jsx(F,{})}),e.jsx("div",{className:O}),e.jsx("div",{className:W,children:i})]})}try{s.displayName="Step",s.__docgenInfo={description:"",displayName:"Step",props:{active:{defaultValue:{value:"false"},description:"Step is active",name:"active",required:!1,type:{name:"boolean"}},completed:{defaultValue:{value:"false"},description:"Step is completed",name:"completed",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Contents of Step",name:"children",required:!0,type:{name:"Element | Element[]"}}}}}catch{}const Y={title:"Navigation/Steps"},d=()=>e.jsxs(p,{children:[e.jsxs(s,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),h=()=>e.jsxs(p,{children:[e.jsxs(s,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),m=()=>e.jsxs(p,{right:!0,children:[e.jsxs(s,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(p,{horizontal:!0,children:[e.jsxs(s,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>{const[n,r]=C.useState(0),a=()=>r(n===4?0:i=>i+1);return e.jsxs(e.Fragment,{children:[e.jsx(T,{onClick:a,small:!0,children:"Complete a step"}),e.jsxs(p,{className:"mt-20",children:[e.jsxs(s,{active:n===0,completed:n>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(s,{active:n===1,completed:n>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(s,{active:n===2,completed:n>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(s,{active:n===3,completed:n>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};var g,N,_;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(_=(N=d.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var y,L,z;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(z=(L=h.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var V,b,w;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(w=(b=m.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var H,I,E;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(E=(I=S.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var A,q,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(D=(q=u.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const Z=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{S as Horizontal,u as Interactive,m as RightAligned,d as Vertical,h as WithProgress,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Steps.stories-0b85f943.js.map
