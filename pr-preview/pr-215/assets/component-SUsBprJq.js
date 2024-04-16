import{f as e,j as s}from"./index-rnsVMGpb.js";import{r as L}from"./index-4g5l5LRQ.js";import{i as Q}from"./index-XwI9xEnt.js";import{r as q}from"./index.m-0-FAh1ao.js";import{a as w}from"./i18n-RORRLZQ_.js";const V=JSON.parse('{"button.aria.loading":"Loading..."}'),D=JSON.parse('{"button.aria.loading":"Laster..."}'),C=JSON.parse('{"button.aria.loading":"Ladataan…"}'),N=["primary","secondary","negative","utility","pill","link"],g=L.forwardRef((t,b)=>{const{primary:n,secondary:h,negative:d,utility:o,quiet:i,small:a,link:c,pill:r,loading:l,fullWidth:y,...S}=t,u=h||!N.find(m=>!!t[m]),f=q(t.className,{[e.secondary]:u&&!a&&!i&&!l&&!t.disabled,[e.secondaryDisabled]:u&&!a&&!i&&!l&&t.disabled,[e.secondarySmall]:u&&a&&!i&&!l&&!t.disabled,[e.secondarySmallDisabled]:u&&a&&!i&&!l&&t.disabled,[e.secondarySmallLoading]:u&&a&&!i&&l,[e.secondarySmallQuiet]:u&&a&&i&&!l&&!t.disabled,[e.secondarySmallQuietDisabled]:u&&a&&i&&!l&&t.disabled,[e.secondarySmallQuietLoading]:u&&a&&i&&l,[e.secondaryQuiet]:u&&!a&&i&&!l&&!t.disabled,[e.secondaryQuietDisabled]:u&&!a&&i&&!l&&t.disabled,[e.secondaryQuietLoading]:u&&!a&&i&&l,[e.secondaryLoading]:u&&!a&&!i&&l,[e.primary]:n&&!a&&!i&&!l&&!t.disabled,[e.primaryDisabled]:n&&!a&&!i&&!l&&t.disabled,[e.primarySmall]:n&&a&&!i&&!l&&!t.disabled,[e.primarySmallDisabled]:n&&a&&!i&&!l&&t.disabled,[e.primarySmallQuiet]:n&&a&&i&&!l&&!t.disabled,[e.primarySmallQuietDisabled]:n&&a&&i&&!l&&t.disabled,[e.primarySmallLoading]:n&&a&&!i&&l,[e.primarySmallQuietLoading]:n&&a&&i&&l,[e.primaryQuiet]:n&&!a&&i&&!l&&!t.disabled,[e.primaryQuietDisabled]:n&&!a&&i&&!l&&t.disabled,[e.primaryQuietLoading]:n&&!a&&i&&l,[e.primaryLoading]:n&&!a&&!i&&l,[e.utility]:o&&!a&&!i&&!l&&!t.disabled,[e.utilityDisabled]:o&&!a&&!i&&!l&&t.disabled,[e.utilitySmall]:o&&a&&!i&&!l&&!t.disabled,[e.utilitySmallDisabled]:o&&a&&!i&&!l&&t.disabled,[e.utilitySmallQuiet]:o&&a&&i&&!l&&!t.disabled,[e.utilitySmallQuietDisabled]:o&&a&&i&&!l&&t.disabled,[e.utilitySmallLoading]:o&&a&&!i&&l,[e.utilitySmallQuietLoading]:o&&a&&i&&l,[e.utilityQuiet]:o&&!a&&i&&!l&&!t.disabled,[e.utilityQuietDisabled]:o&&!a&&i&&!l&&t.disabled,[e.utilityQuietLoading]:o&&!a&&i&&l,[e.utilityLoading]:o&&!a&&!i&&l,[e.negative]:d&&!a&&!i&&!l&&!t.disabled,[e.negativeDisabled]:d&&!a&&!i&&!l&&t.disabled,[e.negativeSmall]:d&&a&&!i&&!l&&!t.disabled,[e.negativeSmallDisabled]:d&&a&&!i&&!l&&t.disabled,[e.negativeSmallQuiet]:d&&a&&i&&!l&&!t.disabled,[e.negativeSmallQuietDisabled]:d&&a&&i&&!l&&t.disabled,[e.negativeSmallLoading]:d&&a&&!i&&l,[e.negativeSmallQuietLoading]:d&&a&&i&&l,[e.negativeQuiet]:d&&!a&&i&&!l&&!t.disabled,[e.negativeQuietDisabled]:d&&!a&&i&&!l&&t.disabled,[e.negativeQuietLoading]:d&&!a&&i&&l,[e.negativeLoading]:d&&!a&&!i&&l,[e.pill]:r&&!a&&!l,[e.pillSmall]:r&&a&&!l,[e.pillLoading]:r&&!a&&l,[e.pillSmallLoading]:r&&a&&l,[e.link]:c&&!a,[e.linkSmall]:c&&a,[e.linkAsButton]:!!t.href,[e.fullWidth]:y,[e.contentWidth]:!y}),v=m=>{t.onClick&&t.onClick(m)};w(V,D,C);const k=Q._({id:"button.aria.loading",message:"Loading...",comment:"Screenreader message for buttons that are loading"});return s.jsxs(s.Fragment,{children:[t.href?s.jsx("a",{onClick:v,"aria-current":t["aria-current"],href:t.disabled?void 0:t.href,target:t.target,rel:t.target==="_blank"?t.rel||"noopener":void 0,ref:b,className:f,role:"button","aria-disabled":t.disabled,children:t.children}):s.jsx("button",{...S,type:t.type||"button",ref:b,className:f,role:t.link?"link":"button",children:t.children}),t.loading?s.jsx("span",{className:"sr-only",role:"progressbar","aria-valuenow":0,"aria-valuetext":k}):null]})});try{g.displayName="Button",g.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"Additional classes to include",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void)"}},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",required:!1,type:{name:"CSSProperties"}},type:{defaultValue:{value:"button"},description:"Button type, only applied when href is not set.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},primary:{defaultValue:{value:"false"},description:"Set the button to be a primary, call to action button. Can be combined with `small`.",name:"primary",required:!1,type:{name:"boolean"}},secondary:{defaultValue:{value:"false"},description:"Set the button to be a secondary button. Can be combined with `quiet` and `small`.",name:"secondary",required:!1,type:{name:"boolean"}},negative:{defaultValue:{value:"false"},description:"Set the button to be a negative, destructive style button. Can be combined with `quiet` and `small`.",name:"negative",required:!1,type:{name:"boolean"}},utility:{defaultValue:{value:"false"},description:"Set the button to be a utility style button. Can be combined with `small`.",name:"utility",required:!1,type:{name:"boolean"}},quiet:{defaultValue:{value:"false"},description:"Quieten down the button, can be combined with other button types",name:"quiet",required:!1,type:{name:"boolean"}},small:{defaultValue:{value:"false"},description:"Set the button to be a small size, can be combined with other button types",name:"small",required:!1,type:{name:"boolean"}},link:{defaultValue:{value:"false"},description:"Set the button to look like a link. Can be combined with `small`.",name:"link",required:!1,type:{name:"boolean"}},pill:{defaultValue:{value:"false"},description:"Set the button to look like a pill style button",name:"pill",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.",name:"loading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation",name:"fullWidth",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"Sets the button's width to its parent's width. Useful on mobile when button should take full width.",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Anchor target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",name:"target",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"The relationship of the linked URL",name:"rel",required:!1,type:{name:"string"}}}}}catch{}export{g as B};
