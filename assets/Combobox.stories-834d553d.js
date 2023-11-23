import{j as t,g as C}from"./index-a71f5096.js";import{r as g,R as c}from"./index-b75aab2a.js";import{r as R}from"./index.m-73ef1fbe.js";import{T as X}from"./component-610dea3e.js";import{g as We,u as He}from"./useId-906286da.js";import{i as Y,a as Ue}from"./i18n-ff9a8b3f.js";import{A as Ee}from"./unstyled-heading-2b40af58.js";import{a as m}from"./chunk-OPEUWD42-a3b45fd8.js";import"./item-4067f961.js";import"./close-16-2dd7d545.js";import"./index-ea31d059.js";function Ke(l,a){return l.map(e=>({...e,id:We(),currentInputValue:a}))}function Je(l,a){if(!l)return;const e=l.filter(u=>u.value.toLowerCase().includes(a.toLowerCase())),r=Y._({id:"combobox.aria.pluralResults",message:"{numResults, plural, one {# result} other {# results}}",comment:"Aria text for combobox when one or more results",values:{numResults:e.length}}),n=Y._({id:"combobox.aria.noResults",message:"No results.....",comment:"Aria text for combobox when no results"});return e.length?r:n}const Ge=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," result"],"other":["#"," results"]}]],"combobox.aria.noResults":"No results"}'),ze=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":"Ingen resultater"}'),Qe=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," tulos"],"other":["#"," tulosta"]}]],"combobox.aria.noResults":"Ei tuloksia"}'),Xe="w-react-combobox-option",Ye="w-react-combobox-match",d=g.forwardRef(({id:l,...a},e)=>{const r=He(l),n=`${r}-listbox`,u=g.useRef(null),h=g.useRef(null),x=g.useRef(null);Ue(Ge,ze,Qe);const[f,i]=g.useState(!1),[o,S]=g.useState(null),[v,$]=g.useState([]),{options:W,value:b,label:Ie,invalid:Le,helpText:Be,placeholder:qe,openOnFocus:Ne,selectOnBlur:Me=!0,className:Oe,listClassName:De,disableStaticFiltering:k=!1,matchTextSegments:D,children:H,highlightValueMatch:j,onSelect:w,onChange:y,onFocus:U,onBlur:K,optional:_e,...$e}=a,_=(o==null?void 0:o.value)||b;g.useEffect(()=>{$(Ke(W,b).filter(s=>k?!0:s.value.toLocaleLowerCase().includes(b.toLowerCase())))},[W,k]),g.useEffect(()=>{k&&v.length&&v.length===1&&!v.some(s=>s.value===b)&&i(!0)},[v,b,k]);function J(s){const p=["ArrowDown","ArrowUp","PageUp","PageDown","Home","End"].includes(s.key),V=["ArrowDown","ArrowLeft","ArrowUp","ArrowRight"];if(p&&!f)return i(!0);if(p&&f)Ze(s,{setNavigationOption:S,navigationOption:o,currentOptions:v});else if(s.altKey||s.ctrlKey||s.metaKey||s.shiftKey)return;switch(s.key){case"Enter":o&&(s.preventDefault(),G(o)),i(!1);break;case"Tab":case"Delete":i(!1);break;case"Escape":f?i(!1):y(""),S(null);break;case"Backspace":y(_),S(null),i(!0);break;default:if(V.includes(s.key))break;i(!0),o?(y(o.value),S(null)):y(b);break}}g.useEffect(()=>{if(!u.current)return;const s=u.current;return s.addEventListener("keydown",J),()=>{s.removeEventListener("keydown",J)}});function G(s){w&&w(s.value),i(!1),S(null),k&&$([])}const z={id:r,value:_,label:Ie,optional:_e,invalid:Le,helpText:Be,placeholder:qe,role:"combobox","aria-label":a["aria-label"],"aria-labelledby":a["aria-labelledby"],"aria-autocomplete":"list","aria-expanded":f&&v.length!==0,"aria-activedescendant":f?o==null?void 0:o.id:void 0,"aria-controls":n,onChange:function(s){y(s.target.value)},onFocus:function(){Ne&&(U&&U(),i(!0))},onBlur:function(s){tt(x,h,s,i),Me&&(o||!o&&v.findIndex(p=>p.value===b)!==-1)&&w&&w((o==null?void 0:o.value)||b),S(null),K&&K(_)},ref:function(s){u.current=s,e&&(typeof e=="function"?e(s):e.current=s)},...$e};return t.jsxs("div",{className:R(Oe,C.wrapper),onBlur:s=>et(s,i),ref:x,children:[t.jsx("div",{ref:h,children:H?t.jsx(X,{...z,children:H}):t.jsx(X,{...z})}),t.jsx("span",{className:C.a11y,role:"status",children:Je(v,b)}),t.jsx("div",{hidden:!f||!v.length,className:R(De,C.combobox),style:{zIndex:3},children:t.jsx("ul",{id:n,role:"listbox",className:R(C.listbox,{[Ye]:D}),children:v.map(s=>{const p=s.label||s.value;let V=[];if(D&&!j){const P=p.toLowerCase().indexOf(s.currentInputValue.toLowerCase());if(P!==-1){const Q=P+s.currentInputValue.length;V=t.jsxs(t.Fragment,{children:[p.substring(0,P),t.jsx("span",{"data-combobox-text-match":!0,className:C.textMatch,children:p.substring(P,Q)}),p.substring(Q)]})}else V=t.jsx("span",{children:p})}else j&&(V=j(p,b));return t.jsx("li",{id:s.id,role:"option","aria-selected":(o==null?void 0:o.id)===s.id,tabIndex:-1,onClick:()=>{new Promise(P=>P(S(s))).then(()=>{G(s)})},className:R({[`${C.option} ${Xe}`]:!0,[C.optionSelected]:(o==null?void 0:o.id)===s.id}),children:D||j?V:p},s.id)})})})]})});function Ze(l,{setNavigationOption:a,navigationOption:e,currentOptions:r}){l.preventDefault();const n=r.findIndex(x=>x.id===(e==null?void 0:e.id)),u=n+1,h=n-1;switch(l.key){case"ArrowDown":a(u>r.length?null:r[u]);break;case"ArrowUp":a(h===-2?r[r.length-1]:h<0?null:r[h]);break;case"PageUp":a(n-10<0?r[0]:r[n-10]);break;case"PageDown":a(n+10>r.length?r[r.length-1]:r[n+10]);break;case"Home":a(r[0]);break;case"End":a(r[r.length-1]);break}}function et(l,a){!l.currentTarget.contains(l.relatedTarget)&&a(!1)}function tt(l,a,e,r){var u,h;if(!l.current)return;(!((u=l.current)!=null&&u.contains(e.relatedTarget))||((h=a.current)==null?void 0:h.contains(e.relatedTarget)))&&r(!1)}try{d.displayName="Combobox",d.__docgenInfo={description:"",displayName:"Combobox",props:{id:{defaultValue:null,description:"Unique identifier for the input field",name:"id",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"The available options to select from",name:"options",required:!0,type:{name:"ComboboxOption[]"}},label:{defaultValue:null,description:"Label above input",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Input placeholder",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The TextField input value",name:"value",required:!0,type:{name:"string"}},openOnFocus:{defaultValue:{value:"false"},description:"Whether the popover opens when focus is on the text field.",name:"openOnFocus",required:!1,type:{name:"boolean"}},selectOnBlur:{defaultValue:{value:"true"},description:"Select active option on blur",name:"selectOnBlur",required:!1,type:{name:"boolean"}},matchTextSegments:{defaultValue:{value:"false"},description:"Whether the matching text segments in the options should be highlighted. Customise the styling by using CSS selectors to override `[data-combobox-text-match]`.\nThis uses the default matching algorithm. Use the `highlightValueMatch` to pass your own matching function.",name:"matchTextSegments",required:!1,type:{name:"boolean"}},disableStaticFiltering:{defaultValue:{value:"false"},description:"Disable client-side static filtering",name:"disableStaticFiltering",required:!1,type:{name:"boolean"}},highlightValueMatch:{defaultValue:null,description:"Pass your own function for highlight matching",name:"highlightValueMatch",required:!1,type:{name:"((optionValue: string, inputValue: string) => ReactNode)"}},onSelect:{defaultValue:null,description:"Called when the user selects an option",name:"onSelect",required:!1,type:{name:"(((value: string) => void) & ReactEventHandler<HTMLInputElement>)"}},onChange:{defaultValue:null,description:"Called when the value of the input changes",name:"onChange",required:!0,type:{name:"(value: string) => void"}},onFocus:{defaultValue:null,description:"Called when the input is focus",name:"onFocus",required:!1,type:{name:"((() => void) & FocusEventHandler<HTMLInputElement>)"}},onBlur:{defaultValue:null,description:"Called when the input loses focus with the current navigation value or input value",name:"onBlur",required:!1,type:{name:"(((value: string) => void) & FocusEventHandler<HTMLInputElement>)"}},invalid:{defaultValue:null,description:"Renders the input field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",required:!1,type:{name:"boolean"}},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional container styling",name:"className",required:!1,type:{name:"string"}},listClassName:{defaultValue:null,description:"Additional list styling",name:"listClassName",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined,\nDefines a string value that labels the current element.\n@see aria-labelledby.",name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined.\nIdentifies the element (or elements) that labels the current element.\n@see aria-describedby.",name:"aria-labelledby",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"For affix use",name:"children",required:!1,type:{name:"ReactNode"}},optional:{defaultValue:null,description:"Whether to show optional text",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}const ht={title:"Forms/Combobox"},F=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(d,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},T=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(d,{label:"Stillingstittel",disableStaticFiltering:!0,matchTextSegments:!0,value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},A=()=>{const[l,a]=c.useState("");return c.useEffect(()=>{console.log("Bubbled value",l)},[l]),t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx("form",{onSubmit:e=>{e.preventDefault(),alert(l)},children:t.jsx(d,{label:"Stillingstittel",value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})})]})},E=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},matchTextSegments:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},I=()=>{const[l,a]=c.useState("");function e(r){return[...r].map((n,u)=>[...l.toLowerCase()].includes(n.toLowerCase())?t.jsx("span",{"data-combobox-text-match":!0,className:"font-bold bg-blue-100 text-blue-800",children:n},`${r}-bold-letter-${n}-${u}`):t.jsx("span",{children:n},`${r}-letter-${n}-${u}`))}return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(d,{value:l,onChange:r=>a(r),onSelect:r=>{a(r),m("select")(r)},highlightValueMatch:e,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},L=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"The comboboxlist opens when the input has focus"}),t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},openOnFocus:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},B=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},q=()=>{const[l,a]=c.useState("");return t.jsx(t.Fragment,{children:t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}]})})},N=()=>{const[l,a]=c.useState("");return t.jsx(t.Fragment,{children:t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}],children:t.jsx(Ee,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>a("")})})})},M=()=>{const[l,a]=c.useState(""),e=r(l,300);function r(n,u){const[h,x]=c.useState([]);return c.useEffect(()=>{n.length||x([]);const f=setTimeout(()=>{fetch("https://swapi.dev/api/people/?search="+n.trim()).then(i=>i.json()).then(i=>{console.log("Results from API",n),x(i.results.map(o=>({value:o.name})))})},u);return()=>{clearTimeout(f)}},[u,n]),h}return t.jsx(d,{label:"Star Wars character",disableStaticFiltering:!0,matchTextSegments:!0,openOnFocus:!0,value:l,onChange:n=>{a(n)},onSelect:n=>{a(n),m("select")(n)},options:e,children:t.jsx(Ee,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>{a("")}})})},O=()=>{const[l,a]=c.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(d,{value:l,onChange:e=>a(e),onSelect:e=>{a(e),m("select")(e)},label:"Stillingstittel",optional:!0,options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})};var Z,ee,te;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>Start typing to see suggestions</p>
      <Combobox label="Stillingstittel" value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(te=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,se;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>Start typing to see suggestions</p>
      <Combobox label="Stillingstittel" disableStaticFiltering matchTextSegments value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(se=(le=T.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var re,ne,oe;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  React.useEffect(() => {
    console.log('Bubbled value', value);
  }, [value]);
  return <>
      <p>Start typing to see suggestions</p>
      <form onSubmit={e => {
      e.preventDefault();
      alert(value);
    }}>
        <Combobox label="Stillingstittel" value={value} onChange={val => setValue(val)} onSelect={val => {
        setValue(val);
        action('select')(val);
      }} options={[{
        value: 'Product manager'
      }, {
        value: 'Produktledelse'
      }, {
        value: 'Prosessoperatør'
      }, {
        value: 'Prosjekteier'
      }]} />
      </form>
    </>;
}`,...(oe=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ue,ie,ce;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>Highlight text matches</p>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} matchTextSegments label="Stillingstittel" options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,he;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  function highlightValueMatch(optionValue: string) {
    return [...optionValue].map((letter, i) => {
      if ([...value.toLowerCase()].includes(letter.toLowerCase())) {
        return <span data-combobox-text-match key={\`\${optionValue}-bold-letter-\${letter}-\${i}\`} className="font-bold bg-blue-100 text-blue-800">
            {letter}
          </span>;
      } else {
        return <span key={\`\${optionValue}-letter-\${letter}-\${i}\`}>{letter}</span>;
      }
    });
  }
  return <>
      <p>Highlight text matches</p>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} highlightValueMatch={highlightValueMatch} label="Stillingstittel" options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(he=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var me,ve,be;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>The comboboxlist opens when the input has focus</p>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} openOnFocus label="Stillingstittel" options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(be=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ge,fe,xe;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>
        When the user clicks inside the text box the current value will be
        selected (like the URL bar in browsers).
      </p>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} label="Stillingstittel" options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(xe=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Se,Ce,Ve;q.parameters={...q.parameters,docs:{...(Se=q.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} label="Favorite fruit" placeholder="What's your favorite fruit?" options={[{
      value: 'Apple',
      label: '🍎 Apple'
    }, {
      value: 'Banana',
      label: '🍌 Banana'
    }, {
      value: 'Orange',
      label: '🍊 Orange'
    }, {
      value: 'Pineapple',
      label: '🍍 Pineapple'
    }]} />
    </>;
}`,...(Ve=(Ce=q.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};var Pe,ke,ye;N.parameters={...N.parameters,docs:{...(Pe=N.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} label="Favorite fruit" placeholder="What's your favorite fruit?" options={[{
      value: 'Apple',
      label: '🍎 Apple'
    }, {
      value: 'Banana',
      label: '🍌 Banana'
    }, {
      value: 'Orange',
      label: '🍊 Orange'
    }, {
      value: 'Pineapple',
      label: '🍍 Pineapple'
    }]}>
        <Affix suffix clear aria-label="Clear text" onClick={() => setValue('')} />
      </Combobox>
    </>;
}`,...(ye=(ke=N.parameters)==null?void 0:ke.docs)==null?void 0:ye.source}}};var je,we,Re;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  const characters = useDebouncedSearch(value, 300);

  // Generic debouncer
  function useDebouncedSearch(query, delay) {
    const [characters, setCharacters] = React.useState([]);
    React.useEffect(() => {
      if (!query.length) setCharacters([]);
      const handler = setTimeout(() => {
        fetch('https://swapi.dev/api/people/?search=' + query.trim()).then(res => res.json()).then(res => {
          console.log('Results from API', query);
          setCharacters(res.results.map(c => ({
            value: c.name
          })));
        });
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [delay, query]);
    return characters;
  }
  return <Combobox label="Star Wars character" disableStaticFiltering matchTextSegments openOnFocus value={value} onChange={val => {
    setValue(val);
  }} onSelect={val => {
    setValue(val);
    action('select')(val);
  }} options={characters}>
      <Affix suffix clear aria-label="Clear text" onClick={() => {
      setValue('');
    }} />
    </Combobox>;
}`,...(Re=(we=M.parameters)==null?void 0:we.docs)==null?void 0:Re.source}}};var Fe,Te,Ae;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <>
      <p>
        When the user clicks inside the text box the current value will be
        selected (like the URL bar in browsers).
      </p>
      <Combobox value={value} onChange={val => setValue(val)} onSelect={val => {
      setValue(val);
      action('select')(val);
    }} label="Stillingstittel" optional options={[{
      value: 'Product manager'
    }, {
      value: 'Produktledelse'
    }, {
      value: 'Prosessoperatør'
    }, {
      value: 'Prosjekteier'
    }]} />
    </>;
}`,...(Ae=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};const mt=["Basic","DisableStaticListFiltering","BubbleEventOnEnter","MatchTextSegments","CustomMatchAlgorithm","OpenOnFocus","SelectOnClick","OptionText","WithAffix","AsyncFetch","Optional"];export{M as AsyncFetch,F as Basic,A as BubbleEventOnEnter,I as CustomMatchAlgorithm,T as DisableStaticListFiltering,E as MatchTextSegments,L as OpenOnFocus,q as OptionText,O as Optional,B as SelectOnClick,N as WithAffix,mt as __namedExportsOrder,ht as default};
//# sourceMappingURL=Combobox.stories-834d553d.js.map
