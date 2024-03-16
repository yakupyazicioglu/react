import{j as t,q as C}from"./index-4T9h8ufS.js";import{r as g,R as i}from"./index-DogsOklH.js";import{r as O}from"./index.m-0-FAh1ao.js";import{T as X}from"./component-wEDYYYPk.js";import{g as Ue,u as He}from"./useId-R7vGbtKH.js";import{i as Y}from"./index-iDl-7hYa.js";import{a as Ke}from"./i18n-uHMsMSCU.js";import{A as Ie}from"./unstyled-heading-m9W8bPD9.js";import{a as h}from"./chunk-MZXVCX43-RlXIxtK5.js";import"./item-y7FxzNpE.js";import"./close-16-qqfY1m6F.js";import"./v4-yQnnJER4.js";function qe(n,a){return n.map(e=>({...e,id:Ue(),currentInputValue:a}))}function Je(n,a){if(!n)return;const e=n.filter(u=>u.value.toLowerCase().includes(a.toLowerCase())),s=Y._({id:"combobox.aria.pluralResults",message:"{numResults, plural, one {# result} other {# results}}",comment:"Aria text for combobox when one or more results",values:{numResults:e.length}}),r=Y._({id:"combobox.aria.noResults",message:"No results.....",comment:"Aria text for combobox when no results"});return e.length?s:r}const Ge=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," result"],"other":["#"," results"]}]],"combobox.aria.noResults":"No results"}'),ze=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," resultat"],"other":["#"," resultater"]}]],"combobox.aria.noResults":"Ingen resultater"}'),Qe=JSON.parse('{"combobox.aria.pluralResults":[["numResults","plural",{"one":["#"," tulos"],"other":["#"," tulosta"]}]],"combobox.aria.noResults":"Ei tuloksia"}'),Xe="w-react-combobox-option",Ye="w-react-combobox-match",p=g.forwardRef(({id:n,...a},e)=>{const s=He(n),r=`${s}-listbox`,u=g.useRef(null),m=g.useRef(null),f=g.useRef(null);Ke(Ge,ze,Qe);const[x,c]=g.useState(!1),[o,S]=g.useState(null),[v,W]=g.useState([]),{options:U,value:b,label:_e,invalid:Te,helpText:Ee,placeholder:Ne,openOnFocus:Be,selectOnBlur:Le=!0,className:Oe,listClassName:Me,disableStaticFiltering:j=!1,matchTextSegments:M,children:H,highlightValueMatch:B,onSelect:L,onChange:V,onFocus:K,onBlur:q,optional:$e,...We}=a,$=(o==null?void 0:o.value)||b;g.useEffect(()=>{W(qe(U,b).filter(l=>j?!0:l.value.toLocaleLowerCase().includes(b.toLowerCase())))},[U,j]),g.useEffect(()=>{j&&v.length&&v.length===1&&!v.some(l=>l.value===b)&&c(!0)},[v,b,j]);function J(l){const d=["ArrowDown","ArrowUp","PageUp","PageDown","Home","End"].includes(l.key),P=["ArrowDown","ArrowLeft","ArrowUp","ArrowRight"];if(d&&!x)return c(!0);if(d&&x)Ze(l,{setNavigationOption:S,navigationOption:o,currentOptions:v});else if(l.altKey||l.ctrlKey||l.metaKey||l.shiftKey)return;switch(l.key){case"Enter":o&&(l.preventDefault(),G(o)),c(!1);break;case"Tab":case"Delete":c(!1);break;case"Escape":x?c(!1):V(""),S(null);break;case"Backspace":V($),S(null),c(!0);break;default:if(P.includes(l.key))break;c(!0),o?(V(o.value),S(null)):V(b);break}}g.useEffect(()=>{if(!u.current)return;const l=u.current;return l.addEventListener("keydown",J),()=>{l.removeEventListener("keydown",J)}});function G(l){L&&L(l.value),c(!1),S(null),j&&W([])}const z={id:s,value:$,label:_e,optional:$e,invalid:Te,helpText:Ee,placeholder:Ne,role:"combobox","aria-label":a["aria-label"],"aria-labelledby":a["aria-labelledby"],"aria-autocomplete":"list","aria-expanded":x&&v.length!==0,"aria-activedescendant":x?o==null?void 0:o.id:void 0,"aria-controls":r,onChange:function(l){V(l.target.value)},onFocus:function(){Be&&(K&&K(),c(!0))},onBlur:function(l){tt(f,m,l,c),Le&&(o||!o&&v.findIndex(d=>d.value===b)!==-1)&&L&&L((o==null?void 0:o.value)||b),S(null),q&&q($)},ref:function(l){u.current=l,e&&(typeof e=="function"?e(l):e.current=l)},...We};return t.jsxs("div",{className:O(Oe,C.wrapper),onBlur:l=>et(l,c),ref:f,children:[t.jsx("div",{ref:m,children:H?t.jsx(X,{...z,children:H}):t.jsx(X,{...z})}),t.jsx("span",{className:C.a11y,role:"status",children:Je(v,b)}),t.jsx("div",{hidden:!x||!v.length,className:O(Me,C.combobox),style:{zIndex:3},children:t.jsx("ul",{id:r,role:"listbox",className:O(C.listbox,{[Ye]:M}),children:v.map(l=>{const d=l.label||l.value;let P=[];if(M&&!B){const k=d.toLowerCase().indexOf(l.currentInputValue.toLowerCase());if(k!==-1){const Q=k+l.currentInputValue.length;P=t.jsxs(t.Fragment,{children:[d.substring(0,k),t.jsx("span",{"data-combobox-text-match":!0,className:C.textMatch,children:d.substring(k,Q)}),d.substring(Q)]})}else P=t.jsx("span",{children:d})}else B&&(P=B(d,b));return t.jsx("li",{id:l.id,role:"option","aria-selected":(o==null?void 0:o.id)===l.id,tabIndex:-1,onClick:()=>{new Promise(k=>k(S(l))).then(()=>{G(l)})},className:O({[`${C.option} ${Xe}`]:!0,[C.optionSelected]:(o==null?void 0:o.id)===l.id}),children:M||B?P:d},l.id)})})})]})});function Ze(n,{setNavigationOption:a,navigationOption:e,currentOptions:s}){n.preventDefault();const r=s.findIndex(f=>f.id===(e==null?void 0:e.id)),u=r+1,m=r-1;switch(n.key){case"ArrowDown":a(u>s.length?null:s[u]);break;case"ArrowUp":a(m===-2?s[s.length-1]:m<0?null:s[m]);break;case"PageUp":a(r-10<0?s[0]:s[r-10]);break;case"PageDown":a(r+10>s.length?s[s.length-1]:s[r+10]);break;case"Home":a(s[0]);break;case"End":a(s[s.length-1]);break}}function et(n,a){!n.currentTarget.contains(n.relatedTarget)&&a(!1)}function tt(n,a,e,s){var u,m;if(!n.current)return;(!((u=n.current)!=null&&u.contains(e.relatedTarget))||((m=a.current)==null?void 0:m.contains(e.relatedTarget)))&&s(!1)}p.__docgenInfo={description:"",methods:[],displayName:"Combobox"};const ht={title:"Forms/Combobox"},F=()=>{const[n,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(p,{label:"Stillingstittel",value:n,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},y=()=>{const[n,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx(p,{label:"Stillingstittel",disableStaticFiltering:!0,matchTextSegments:!0,value:n,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},w=()=>{const[n,a]=i.useState("");return i.useEffect(()=>{console.log("Bubbled value",n)},[n]),t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Start typing to see suggestions"}),t.jsx("form",{onSubmit:e=>{e.preventDefault(),alert(n)},children:t.jsx(p,{label:"Stillingstittel",value:n,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})})]})},A=()=>{const[n,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(p,{value:n,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},matchTextSegments:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},R=()=>{const[n,a]=i.useState("");function e(s){return[...s].map((r,u)=>[...n.toLowerCase()].includes(r.toLowerCase())?t.jsx("span",{"data-combobox-text-match":!0,className:"font-bold bg-blue-100 text-blue-800",children:r},`${s}-bold-letter-${r}-${u}`):t.jsx("span",{children:r},`${s}-letter-${r}-${u}`))}return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Highlight text matches"}),t.jsx(p,{value:n,onChange:s=>a(s),onSelect:s=>{a(s),h("select")(s)},highlightValueMatch:e,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},D=()=>{const[n,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"The comboboxlist opens when the input has focus"}),t.jsx(p,{value:n,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},openOnFocus:!0,label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},I=()=>{const[n,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(p,{value:n,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Stillingstittel",options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})},_=()=>{const[n,a]=i.useState("");return t.jsx(t.Fragment,{children:t.jsx(p,{value:n,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}]})})},T=()=>{const[n,a]=i.useState("");return t.jsx(t.Fragment,{children:t.jsx(p,{value:n,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Favorite fruit",placeholder:"What's your favorite fruit?",options:[{value:"Apple",label:"🍎 Apple"},{value:"Banana",label:"🍌 Banana"},{value:"Orange",label:"🍊 Orange"},{value:"Pineapple",label:"🍍 Pineapple"}],children:t.jsx(Ie,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>a("")})})})},E=()=>{const[n,a]=i.useState(""),e=s(n,300);function s(r,u){const[m,f]=i.useState([]);return i.useEffect(()=>{r.length||f([]);const x=setTimeout(()=>{fetch("https://swapi.dev/api/people/?search="+r.trim()).then(c=>c.json()).then(c=>{console.log("Results from API",r),f(c.results.map(o=>({value:o.name})))})},u);return()=>{clearTimeout(x)}},[u,r]),m}return t.jsx(p,{label:"Star Wars character",disableStaticFiltering:!0,matchTextSegments:!0,openOnFocus:!0,value:n,onChange:r=>{a(r)},onSelect:r=>{a(r),h("select")(r)},options:e,children:t.jsx(Ie,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>{a("")}})})},N=()=>{const[n,a]=i.useState("");return t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"When the user clicks inside the text box the current value will be selected (like the URL bar in browsers)."}),t.jsx(p,{value:n,onChange:e=>a(e),onSelect:e=>{a(e),h("select")(e)},label:"Stillingstittel",optional:!0,options:[{value:"Product manager"},{value:"Produktledelse"},{value:"Prosessoperatør"},{value:"Prosjekteier"}]})]})};F.__docgenInfo={description:"",methods:[],displayName:"Basic"};y.__docgenInfo={description:"",methods:[],displayName:"DisableStaticListFiltering"};w.__docgenInfo={description:"",methods:[],displayName:"BubbleEventOnEnter"};A.__docgenInfo={description:"",methods:[],displayName:"MatchTextSegments"};R.__docgenInfo={description:"",methods:[],displayName:"CustomMatchAlgorithm"};D.__docgenInfo={description:"",methods:[],displayName:"OpenOnFocus"};I.__docgenInfo={description:"",methods:[],displayName:"SelectOnClick"};_.__docgenInfo={description:"",methods:[],displayName:"OptionText"};T.__docgenInfo={description:"",methods:[],displayName:"WithAffix"};E.__docgenInfo={description:"",methods:[],displayName:"AsyncFetch"};N.__docgenInfo={description:"",methods:[],displayName:"Optional"};var Z,ee,te;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(te=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,le;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(le=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var se,re,oe;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ue,ce,ie;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(ie=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,pe,me;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(me=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,ve,be;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(be=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ge,xe,fe;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(fe=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Se,Ce,Pe;_.parameters={..._.parameters,docs:{...(Se=_.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Pe=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var ke,je,Ve;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(Ve=(je=T.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var Fe,ye,we;E.parameters={...E.parameters,docs:{...(Fe=E.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(we=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Ae,Re,De;N.parameters={...N.parameters,docs:{...(Ae=N.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(De=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};const vt=["Basic","DisableStaticListFiltering","BubbleEventOnEnter","MatchTextSegments","CustomMatchAlgorithm","OpenOnFocus","SelectOnClick","OptionText","WithAffix","AsyncFetch","Optional"];export{E as AsyncFetch,F as Basic,w as BubbleEventOnEnter,R as CustomMatchAlgorithm,y as DisableStaticListFiltering,A as MatchTextSegments,D as OpenOnFocus,_ as OptionText,N as Optional,I as SelectOnClick,T as WithAffix,vt as __namedExportsOrder,ht as default};
