import{j as e,n as j,o as t}from"./index-e7c2529a.js";import{r as x}from"./index-b75aab2a.js";import{r as c}from"./index.m-73ef1fbe.js";import{e as k}from"./icons-06db2979.js";import{B as W}from"./component-93789ec8.js";import"./i18n-ff9a8b3f.js";const E=x.createContext({horizontal:void 0,right:void 0});function p({horizontal:n,right:o,className:i,children:a}){return e.jsx(E.Provider,{value:{horizontal:n,right:o},children:e.jsx("div",{className:c(i,{[j.steps]:!0,[j.stepsHorizontal]:n}),children:a})})}try{p.displayName="Steps",p.__docgenInfo={description:"",displayName:"Steps",props:{horizontal:{defaultValue:{value:"false"},description:"Direction of steps",name:"horizontal",required:!1,type:{name:"boolean"}},right:{defaultValue:{value:"false"},description:"Align steps to the right",name:"right",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Two or more `Step` components",name:"children",required:!0,type:{name:"Element[]"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}}}}}catch{}function s({active:n,completed:o,children:i}){const a=x.useContext(E),r=!a.horizontal,l=!a.right,R=c({[t.stepVertical]:r,[t.stepVerticalLeft]:r&&l,[t.stepVerticalRight]:r&&!l,[t.stepHorizontal]:!r}),b=c({[t.stepLine]:!0,[t.stepLineHorizontalLeft]:!0,[t.stepLineHorizontal]:!r,[t.stepLineIncomplete]:!n&&!o,[t.stepLineComplete]:n||o}),A=c({[t.stepDot]:!0,[t.stepDotVerticalRight]:r&&!l,[t.stepDotHorizontal]:!r,[t.stepDotIncomplete]:!(n||o),[t.stepDotActive]:n||o}),B=c({[t.stepLine]:!0,[t.stepLineHorizontalRight]:!0,[t.stepLineVertical]:r,[t.stepLineVerticalRight]:r&&!l,[t.stepLineHorizontal]:!r,[t.stepLineIncomplete]:!o,[t.stepLineComplete]:o}),P=c({[t.content]:!0,[t.contentVertical]:r,[t.contentHorizontal]:!r});return e.jsxs("div",{className:R,children:[!r&&e.jsx("div",{className:b}),e.jsx("div",{className:A,children:o&&e.jsx(k,{})}),e.jsx("div",{className:B}),e.jsx("div",{className:P,children:i})]})}try{s.displayName="Step",s.__docgenInfo={description:"",displayName:"Step",props:{active:{defaultValue:{value:"false"},description:"Step is active",name:"active",required:!1,type:{name:"boolean"}},completed:{defaultValue:{value:"false"},description:"Step is completed",name:"completed",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Contents of Step",name:"children",required:!0,type:{name:"Element | Element[]"}}}}}catch{}const M={title:"Navigation/Steps"},h=()=>e.jsxs(p,{children:[e.jsxs(s,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),d=()=>e.jsxs(p,{children:[e.jsxs(s,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),m=()=>e.jsxs(p,{right:!0,children:[e.jsxs(s,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(p,{horizontal:!0,children:[e.jsxs(s,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>{const[n,o]=x.useState(0),i=()=>o(n===4?0:a=>a+1);return e.jsxs(e.Fragment,{children:[e.jsx(W,{onClick:i,small:!0,children:"Complete a step"}),e.jsxs(p,{className:"mt-20",children:[e.jsxs(s,{active:n===0,completed:n>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(s,{active:n===1,completed:n>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(s,{active:n===2,completed:n>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(s,{active:n===3,completed:n>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};var C,f,v;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(v=(f=h.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var g,N,_;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(_=(N=d.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var z,L,V;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var y,w,H;S.parameters={...S.parameters,docs:{...(y=S.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(H=(w=S.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var I,q,D;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(D=(q=u.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const Q=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{S as Horizontal,u as Interactive,m as RightAligned,h as Vertical,d as WithProgress,Q as __namedExportsOrder,M as default};
//# sourceMappingURL=Steps.stories-7c6395cb.js.map
