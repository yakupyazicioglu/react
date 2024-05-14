import{_ as s}from"./iframe-Qu5T6EQP.js";import"../sb-preview/runtime.js";const{global:a}=__STORYBOOK_MODULE_GLOBAL__;var i=Object.entries(a.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-ikZOVMiL.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return new e},stories:{filter:e=>{var t;let r=e.tags||[];return r.includes("autodocs")&&r.filter(o=>i[o]).length===0&&!((t=e.parameters.docs)!=null&&t.disable)}}}};export{n as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-ikZOVMiL.js","./iframe-Qu5T6EQP.js","./index-aXz8NaAs.js","./react-18-dY7_tvZ0.js","./inheritsLoose-gQW7mg2R.js","./_getPrototype-nEVI1MF0.js","./index-PPLHz8o0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
