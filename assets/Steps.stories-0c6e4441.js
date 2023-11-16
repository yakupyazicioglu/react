import{j as e,n as f,o as t}from"./index-a71f5096.js";import{r as v}from"./index-b75aab2a.js";import{r as o}from"./index.m-73ef1fbe.js";import{f as T}from"./icons-2017ea02.js";import{i as x,a as W}from"./i18n-ff9a8b3f.js";import{B as $}from"./component-3af07842.js";const D=v.createContext({horizontal:void 0,right:void 0});function p({horizontal:n,right:r,className:a,children:c}){return e.jsx(D.Provider,{value:{horizontal:n,right:r},children:e.jsx("ul",{className:o(a,{[f.steps]:!0,[f.stepsHorizontal]:n}),children:c})})}try{p.displayName="Steps",p.__docgenInfo={description:"",displayName:"Steps",props:{horizontal:{defaultValue:{value:"false"},description:"Direction of steps",name:"horizontal",required:!1,type:{name:"boolean"}},right:{defaultValue:{value:"false"},description:"Align steps to the right",name:"right",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Two or more `Step` components",name:"children",required:!0,type:{name:"Element[]"}},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",required:!1,type:{name:"string"}}}}}catch{}const F=JSON.parse('{"steps.aria.emptyCircle":"Tom sirkel","steps.aria.active":"Stegindikator aktiv sirkel","steps.aria.completed":"Stegindikator fullført sirkel"}'),G=JSON.parse('{"steps.aria.emptyCircle":"Empty circle","steps.aria.active":"Step indicator active circle","steps.aria.completed":"Step indicator completed circle"}'),K=JSON.parse('{"steps.aria.emptyCircle":"Tyhjä ympyrä","steps.aria.active":"Vaiheilmaisin aktiivinen ympyrä","steps.aria.completed":"Vaiheilmaisin valmis ympyrä"}'),j={completed:x._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:x._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:x._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})},M=n=>{const r=Object.keys(j).find(a=>n[a]);return r?j[r]:j.default};function s(n){W(G,F,K);const{active:r,completed:a,children:c}=n,C=v.useContext(D),i=!C.horizontal,l=!C.right,R=o({[t.stepVertical]:i,[t.stepVerticalLeft]:i&&l,[t.stepVerticalRight]:i&&!l,[t.stepHorizontal]:!i}),O=o({[t.stepLine]:!0,[t.stepLineHorizontalLeft]:!0,[t.stepLineHorizontal]:!i,[t.stepLineIncomplete]:!r&&!a,[t.stepLineComplete]:r||a}),B=o({[t.stepDot]:!0,[t.stepDotVerticalRight]:i&&!l,[t.stepDotHorizontal]:!i,[t.stepDotIncomplete]:!(r||a),[t.stepDotActive]:r||a}),P=o({[t.stepLine]:!0,[t.stepLineHorizontalRight]:!0,[t.stepLineVertical]:i,[t.stepLineVerticalRight]:i&&!l,[t.stepLineHorizontal]:!i,[t.stepLineIncomplete]:!a,[t.stepLineComplete]:a}),J=o({[t.content]:!0,[t.contentVertical]:i,[t.contentHorizontal]:!i});return e.jsxs("li",{className:R,children:[!i&&e.jsx("div",{className:O}),e.jsx("div",{className:B,role:"img","aria-label":M(n),...r&&{"aria-current":"step"},children:a&&e.jsx(T,{})}),e.jsx("div",{className:P}),e.jsx("div",{className:J,children:c})]})}try{s.displayName="Step",s.__docgenInfo={description:"",displayName:"Step",props:{active:{defaultValue:{value:"false"},description:"Step is active",name:"active",required:!1,type:{name:"boolean"}},completed:{defaultValue:{value:"false"},description:"Step is completed",name:"completed",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Contents of Step",name:"children",required:!0,type:{name:"Element | Element[]"}}}}}catch{}const te={title:"Navigation/Steps"},d=()=>e.jsxs(p,{children:[e.jsxs(s,{children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),m=()=>e.jsxs(p,{children:[e.jsxs(s,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),h=()=>e.jsxs(p,{right:!0,children:[e.jsxs(s,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),S=()=>e.jsxs(p,{horizontal:!0,children:[e.jsxs(s,{completed:!0,children:[e.jsx("h4",{children:"Step one"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{active:!0,children:[e.jsx("h4",{children:"Step two"}),e.jsx("p",{children:"Content"})]}),e.jsxs(s,{children:[e.jsx("h4",{children:"Step three"}),e.jsx("p",{children:"Content"})]})]}),u=()=>{const[n,r]=v.useState(0),a=()=>r(n===4?0:c=>c+1);return e.jsxs(e.Fragment,{children:[e.jsx($,{onClick:a,small:!0,children:"Complete a step"}),e.jsxs(p,{className:"mt-20",children:[e.jsxs(s,{active:n===0,completed:n>0,children:[e.jsx("h4",{className:"mt-0",children:"Step one"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(s,{active:n===1,completed:n>1,children:[e.jsx("h4",{className:"mt-0",children:"Step two"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(s,{active:n===2,completed:n>2,children:[e.jsx("h4",{className:"mt-0",children:"Step three"}),e.jsx("p",{children:"Some content"})]}),e.jsxs(s,{active:n===3,completed:n>3,children:[e.jsx("h4",{className:"mt-0",children:"Step four"}),e.jsx("p",{children:"Some content"})]})]})]})};var g,y,N;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(N=(y=d.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var _,L,V;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var z,b,w;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(w=(b=h.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var H,I,k;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(k=(I=S.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var E,A,q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(q=(A=u.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const ne=["Vertical","WithProgress","RightAligned","Horizontal","Interactive"];export{S as Horizontal,u as Interactive,h as RightAligned,d as Vertical,m as WithProgress,ne as __namedExportsOrder,te as default};
//# sourceMappingURL=Steps.stories-0c6e4441.js.map
