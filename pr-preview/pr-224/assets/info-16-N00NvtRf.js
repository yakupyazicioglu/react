import{R as f}from"./index-BBkUAzwr.js";import{i as a}from"./index-CZ0b_Np5.js";var v={},m=Object.defineProperty,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,l=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&l(t,r,e[r]);if(i)for(var r of i(e))_.call(e,r)&&l(t,r,e[r]);return t},h=JSON.parse('{"icon.title.info":"Informasjonssirkel"}'),w=JSON.parse('{"icon.title.info":"Information circle"}'),k=JSON.parse('{"icon.title.info":"Ympyrä, jonka sisällä on i-kirjain"}'),s=["en","nb","fi","da","sv"],c="en",b=()=>{let t;switch(v.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},u=()=>{var t;const e=(t=document==null?void 0:document.location)==null?void 0:t.hostname;return e.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":c},o=t=>s.find(e=>t===e||t.toLowerCase().includes(e))||u();function y(){var t;if(typeof window>"u"){const e=b();return o(e)}try{const e=(t=document==null?void 0:document.documentElement)==null?void 0:t.lang,r=u();return s.includes(e)?o(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),o(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),c}}var O=(t,e,r,n)=>t==="nb"?r:t==="fi"?n:e,I=(t,e,r)=>{const n=y(),d=O(n,t,e,r);a.load(n,d),a.activate(n)};I(w,h,k);var L=a.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"}),N=t=>f.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",dangerouslySetInnerHTML:{__html:`<title>${L}</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path>`}},t)),S=N;export{S as i};
