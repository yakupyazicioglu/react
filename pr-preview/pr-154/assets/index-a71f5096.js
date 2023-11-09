import{r as f}from"./index-b75aab2a.js";var x={exports:{}},d={};/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=f,h=60103;d.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var $=Symbol.for;h=$("react.element"),d.Fragment=$("react.fragment")}var y=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function m(c,l,g){var a,b={},s=null,p=null;g!==void 0&&(s=""+g),l.key!==void 0&&(s=""+l.key),l.ref!==void 0&&(p=l.ref);for(a in l)w.call(l,a)&&!D.hasOwnProperty(a)&&(b[a]=l[a]);if(c&&c.defaultProps)for(a in l=c.defaultProps,l)b[a]===void 0&&(b[a]=l[a]);return{$$typeof:h,type:c,key:s,ref:p,props:b,_owner:y.current}}d.jsx=m;d.jsxs=m;x.exports=d;var q=x.exports;const B={base:"py-4 px-8 border-0 rounded-4 text-xs inline-flex",neutral:"i-bg-$color-badge-neutral-background i-text-$color-badge-neutral-text",info:"i-bg-$color-badge-info-background i-text-$color-badge-info-text",positive:"i-bg-$color-badge-positive-background i-text-$color-badge-positive-text",warning:"i-bg-$color-badge-warning-background i-text-$color-badge-warning-text",negative:"i-bg-$color-badge-negative-background i-text-$color-badge-negative-text",disabled:"i-bg-$color-badge-disabled-background i-text-$color-badge-disabled-text",price:"i-bg-$color-badge-price-background i-text-$color-badge-price-text",notification:"i-bg-$color-badge-notification-background i-text-$color-badge-notification-text",positionBase:"absolute backdrop-blur",positionTL:"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",positionTR:"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",positionBR:"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",positionBL:"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"},T={wrapper:"touch-pan-y relative w-full h-44 py-2",track:"absolute i-bg-$color-slider-track-background h-4 top-20 rounded-4 w-full ",trackDisabled:"pointer-events-none i-bg-$color-slider-track-background-disabled",activeTrack:"absolute i-bg-$color-slider-track-background-active h-6 top-[19px] rounded-4",activeTrackDisabled:"i-bg-$color-slider-track-background-disabled pointer-events-none",thumb:"absolute transition-shadow w-24 h-24 bottom-10 rounded-4 outline-none",thumbEnabled:"border-2 i-shadow-$shadow-slider cursor-pointer i-bg-$color-slider-handle-background i-border-$color-slider-handle-border hover:i-bg-$color-slider-handle-background-hover hover:i-border-$color-slider-handle-border-hover hover:slider-handle-shadow-hover active:i-bg-$color-slider-handle-background-active active:i-border-$color-slider-handle-border-active active:slider-handle-shadow-active focus:slider-handle-shadow-hover focus:i-border-$color-slider-handle-border-hover focus:i-bg-$color-slider-handle-background-hover",thumbDisabled:"i-bg-$color-slider-handle-background-disabled cursor-disabled pointer-events-none"},u={box:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"i-bg-$color-box-info-background i-text-$color-box-info-text",neutral:"i-bg-$color-box-neutral-background i-text-$color-box-neutral-text",bordered:"border-2 i-border-$color-box-bordered-border i-bg-$color-box-bordered-background i-text-$color-box-bordered-text",infoClickable:"hover:i-bg-$color-box-info-background-hover active:i-bg-$color-box-info-background-hover",neutralClickable:"hover:i-bg-$color-box-neutral-background-hover active:i-bg-$color-box-neutral-background-hover",borderedClickable:"hover:i-bg-$color-box-bordered-background-hover active:i-bg-$color-box-bordered-background-hover hover:i-border-$color-box-bordered-border-hover active:i-border-$color-box-bordered-border-hover"},_={pill:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"i-bg-$color-pill-suggestion-background hover:i-bg-$color-pill-suggestion-background-hover active:i-bg-$color-pill-suggestion-background-active i-text-$color-pill-suggestion-text font-bold",filter:"i-bg-$color-pill-filter-background hover:i-bg-$color-pill-filter-background-hover active:i-bg-$color-pill-filter-background-active i-text-$color-pill-filter-text",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 pt-4 pb-6 rounded-r-full text-m!",a11y:"sr-only"},P={step:"group/step",stepVertical:"group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-16",stepVerticalLeft:"grid-cols-[20px_1fr]",stepVerticalRight:"grid-cols-[1fr_20px] text-right",stepHorizontal:"group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid gap-y-16 items-center",stepDot:"rounded-full border-2 h-20 w-20 transition-colors duration-300 i-text-$color-stepindicator-handle-icon",stepDotVerticalRight:"col-start-2",stepDotHorizontal:"row-start-2 justify-self-end",stepDotActive:"i-border-$color-stepindicator-handle-border-active i-bg-$color-stepindicator-handle-background-active",stepDotIncomplete:"i-border-$color-stepindicator-handle-border i-bg-$color-stepindicator-handle-background",stepLine:"group-last/stepv:hidden transition-colors duration-300",stepLineVertical:"w-2 h-full justify-self-center",stepLineVerticalRight:"col-start-2",stepLineHorizontal:"h-2 w-full row-start-2",stepLineHorizontalRight:"group-last/steph:bg-transparent",stepLineHorizontalLeft:"group-first/steph:bg-transparent",stepLineIncomplete:"i-bg-$color-stepindicator-track-background",stepLineComplete:"i-bg-$color-stepindicator-track-background-active",content:"last:mb-0 group-last/step:last:pb-0",contentVertical:"row-span-2 pb-32",contentHorizontal:"col-span-3 px-16 row-start-1 text-center"},j={steps:"w-full",stepsHorizontal:"flex"},C={card:"cursor-pointer overflow-hidden relative transition-all",cardShadow:"rounded-8 i-shadow-$shadow-card hover:i-shadow-$shadow-card-hover hover:i-bg-$color-card-background-hover tap-highlight-transparent",cardFlat:"border-2 rounded-4",cardFlatUnselected:"i-bg-$color-card-flat-background i-border-$color-card-flat-border hover:i-bg-$color-card-flat-background-hover hover:i-border-$color-card-flat-border-hover active:i-bg-$color-card-flat-background-active active:i-border-$color-card-flat-border-active",cardFlatSelected:"i-border-$color-card-flat-border-selected i-bg-$color-card-flat-background-selected hover:i-bg-$color-card-flat-background-selected-hover hover:i-border-$color-card-flat-border-selected-hover active:i-border-$color-card-flat-border-active active:i-bg-$color-card-flat-background-active",cardSelected:"i-border-$color-card-border-selected i-bg-$color-card-background-selected hover:i-border-$color-card-border-selected-hover hover:i-bg-$color-card-background-selected-hover active:i-border-$color-card-border-selected-active",cardOutline:"active:i-border-$color-card-flat-border absolute rounded-8 inset-0 transition-all border-2",cardOutlineUnselected:"i-border-$color-card-border",cardOutlineSelected:"i-border-$color-card-border-selected hover:i-border-$color-card-border-selected-hover",a11y:"sr-only"},I={switch:"tap-highlight-transparent",label:"block relative h-24 w-44 cursor-pointer group",labelDisabled:"pointer-events-none",track:"absolute top-0 left-0 h-full w-full rounded-full transition-colors",trackActive:"i-bg-$color-switch-track-background-selected group-hover:i-bg-$color-switch-track-background-selected-hover",trackInactive:"i-bg-$color-switch-track-background group-hover:i-bg-$color-switch-track-background-hover",trackDisabled:"i-bg-$color-switch-track-background-disabled",handle:"absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform",handleSelected:"translate-x-20",handleNotDisabled:"i-bg-$color-switch-handle-background i-shadow-$shadow-switch-handle",handleDisabled:"i-bg-$color-switch-handle-background-disabled",a11y:"sr-only"},R={tabContainer:"mx-auto max-w-screen-md w-full grid relative",wunderbar:"absolute i-border-$color-tabs-border-selected -bottom-0 border-b-4 transition-all",wrapperUnderlined:"border-b i-border-$color-tabs-border -mx-16 sm:mx-0 px-4 sm:px-0 mb-32 "},O={tab:"grid items-center font-bold gap-8 focusable antialias p-16 pb-8 border-b-4 bg-transparent i-text-$color-tabs-text i-border-$color-tabs-border hover:i-text-$color-tabs-text-hover hover:i-border-$color-tabs-border-hover",tabActive:"i-text-$color-tabs-text-selected",icon:"mx-auto hover:i-text-$color-tabs-text-hover",iconUnderlinedActive:"i-text-$color-tabs-text-selected",content:"flex items-center justify-center gap-8",contentUnderlined:"content-underlined",contentUnderlinedActive:"i-text-$color-tabs-text-selected"},U={cols1:"grid-cols-1",cols2:"grid-cols-2",cols3:"grid-cols-3",cols4:"grid-cols-4",cols5:"grid-cols-5",cols6:"grid-cols-6",cols7:"grid-cols-7",cols8:"grid-cols-8",cols9:"grid-cols-9"},S="focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block",W={expandable:"will-change-height",expandableTitle:"font-bold i-text-$color-expandable-title-text",expandableBox:"i-bg-$color-expandable-background hover:i-bg-$color-expandable-background-hover py-0 px-0 "+u.box,expandableBleed:u.bleed,chevron:"inline-block align-middle i-text-$color-expandable-icon",chevronNonBox:"relative left-8",chevronBox:"absolute right-16",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:S+" hover:underline focus:underline",buttonBox:"w-full text-left relative inline-flex items-center "+u.box,paddingTop:"pt-0",title:"flex justify-between items-center",titleType:"h4"},n="font-bold focusable justify-center transition-colors ease-in-out",i={primary:"i-text-$color-button-primary-text hover:i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover active:i-bg-$color-button-primary-background-active",secondary:"i-text-$color-button-secondary-text hover:i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active",utility:"i-text-$color-button-utility-text hover:i-text-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover active:i-border-$color-button-utility-border-active",destructive:"i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover active:i-bg-$color-button-negative-background-active",pill:"i-text-$color-button-pill-icon hover:i-text-$color-button-pill-icon-hover active:i-text-$color-button-pill-icon-active i-bg-$color-button-pill-background hover:i-bg-$color-button-pill-background-hover active:i-bg-$color-button-pill-background-active",disabled:"i-text-$color-button-disabled-text i-bg-$color-button-disabled-background",quiet:"i-bg-$color-button-quiet-background i-text-$color-button-quiet-text hover:i-bg-$color-button-quiet-background-hover active:i-bg-$color-button-quiet-background-active",utilityQuiet:"i-text-$color-button-utility-quiet-text i-bg-$color-button-utility-quiet-background hover:i-bg-$color-button-utility-quiet-background-hover",negativeQuiet:"i-bg-$color-button-negative-quiet-background i-text-$color-button-negative-quiet-text hover:i-bg-$color-button-negative-quiet-background-hover active:i-bg-$color-button-negative-quiet-background-active",loading:"i-text-$color-button-loading-text i-bg-$color-button-loading-background",link:"i-text-$color-button-link-text"},t={primary:`border-0 rounded-8 ${n}`,secondary:`border-2 rounded-8 ${n}`,utility:`border rounded-4 ${n}`,negative:`border-0 rounded-8 ${n}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${n}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline ${i.link}`},r={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},o={medium:"text-m leading-[24]",xsmall:"text-xs"},e={inProgress:`border-transparent animate-inprogress pointer-events-none ${i.loading}`,quiet:`border-0 rounded-8 ${n}`,utilityQuiet:`border-0 rounded-4 ${n}`,negativeQuiet:`border-0 rounded-8 ${n}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${i.disabled}`},z={secondary:`${r.medium} ${o.medium} ${t.secondary} ${i.secondary}`,secondaryHref:`${r.medium} ${o.medium} ${t.secondary} ${i.secondary}`,secondaryDisabled:`${r.medium} ${o.medium} ${t.secondary} ${e.isDisabled}`,secondarySmall:`${o.xsmall} ${r.xsmall} ${t.secondary} ${i.secondary}`,secondarySmallDisabled:`${o.xsmall} ${r.xsmall} ${t.secondary} ${e.isDisabled}`,secondaryQuiet:`${r.medium} ${o.medium} ${e.quiet} ${i.quiet}`,secondaryQuietDisabled:`${r.medium} ${o.medium} ${e.quiet} ${e.isDisabled}`,secondarySmallQuiet:`${o.xsmall} ${r.xsmall} ${e.quiet} ${i.quiet}`,secondarySmallQuietDisabled:`${o.xsmall} ${r.xsmall} ${e.quiet} ${e.isDisabled}`,secondaryLoading:`${r.medium} ${o.medium} ${t.secondary} ${e.inProgress}`,secondarySmallLoading:`${o.xsmall} ${r.xsmall}  ${t.secondary} ${e.inProgress}`,secondarySmallQuietLoading:`${o.xsmall} ${r.xsmall} ${e.quiet} ${e.inProgress}`,secondaryQuietLoading:`${r.medium} ${o.medium} ${e.quiet} ${e.inProgress}`,primary:`${r.large} ${o.medium} ${t.primary} ${i.primary}`,primaryDisabled:`${r.large} ${o.medium} ${e.isDisabled} ${t.primary}`,primarySmall:`${r.small} ${o.xsmall} ${t.primary} ${i.primary}`,primarySmallDisabled:`${r.small} ${o.xsmall} ${e.isDisabled} ${t.primary} `,primaryQuiet:`${r.large} ${o.medium} ${e.quiet} ${i.quiet}`,primaryQuietDisabled:`${r.large} ${o.medium} ${e.quiet} ${e.isDisabled}`,primarySmallQuiet:`${r.small} ${o.xsmall} ${e.quiet} ${i.quiet}`,primarySmallQuietDisabled:`${r.small} ${o.xsmall} ${e.quiet} ${e.isDisabled}`,primaryLoading:`${r.large} ${o.medium} ${e.inProgress} ${t.primary}`,primarySmallLoading:`${r.small} ${o.xsmall}  ${e.inProgress} ${t.primary}`,primarySmallQuietLoading:`${r.small} ${o.xsmall} ${e.quiet} ${e.inProgress} ${t.primary}`,primaryQuietLoading:`${r.large} ${o.medium} ${e.quiet} ${e.inProgress}`,utility:`${r.utility} ${o.medium} ${t.utility} ${i.utility}`,utilityDisabled:`${r.utility} ${o.medium} ${t.utility} ${e.isDisabled}`,utilityQuiet:`${r.large} ${o.medium} ${e.utilityQuiet} ${i.utilityQuiet}`,utilityQuietDisabled:`${r.large} ${o.medium} ${e.utilityQuiet} ${e.isDisabled}`,utilitySmall:`${r.smallUtility} ${o.xsmall} ${t.utility} ${i.utility}`,utilitySmallDisabled:`${r.smallUtility} ${o.xsmall} ${t.utility} ${e.isDisabled}`,utilitySmallQuiet:`${r.smallUtility} ${o.xsmall} ${e.utilityQuiet} ${i.utilityQuiet}`,utilitySmallQuietDisabled:`${r.smallUtility} ${o.xsmall} ${e.utilityQuiet} ${e.isDisabled}`,utilityLoading:`${r.large} ${o.medium} ${t.utility} ${e.inProgress}`,utilitySmallLoading:`${r.smallUtility} ${o.xsmall} ${t.utility} ${e.inProgress}`,utilityQuietLoading:`${r.large} ${o.medium} ${e.inProgress} ${e.utilityQuiet}`,utilitySmallQuietLoading:`${r.smallUtility} ${o.xsmall} ${e.inProgress} ${e.utilityQuiet}`,negative:`${r.large} ${o.medium} ${t.negative} ${i.destructive}`,negativeDisabled:`${r.large} ${o.medium} ${t.negative} ${e.isDisabled}`,negativeQuiet:`${r.large} ${o.medium} ${e.negativeQuiet} ${i.negativeQuiet}`,negativeQuietDisabled:`${r.large} ${o.medium} ${e.negativeQuiet}${e.isDisabled}`,negativeSmall:`${r.small} ${o.xsmall} ${t.negative} ${i.destructive}`,negativeSmallDisabled:`${r.small} ${o.xsmall} ${t.negative} ${e.isDisabled}`,negativeSmallQuiet:`${r.small} ${o.xsmall} ${e.negativeQuiet} ${i.negativeQuiet}`,negativeSmallQuietDisabled:`${r.small} ${o.xsmall} ${e.negativeQuiet} ${e.isDisabled}`,negativeLoading:`${r.large} ${o.medium} ${t.negative} ${e.inProgress}`,negativeSmallLoading:`${r.small} ${o.xsmall} ${e.inProgress} ${t.negative}`,negativeQuietLoading:`${r.large} ${o.medium} ${e.negativeQuiet} ${t.negative} ${e.inProgress}`,negativeSmallQuietLoading:`${r.small} ${o.xsmall} ${e.negativeQuiet} ${e.inProgress}`,pill:`${r.pill} ${o.medium} ${t.pill} ${i.pill}`,pillSmall:`${r.pillSmall} ${o.xsmall} ${t.pill} ${i.pill}`,pillLoading:`${r.pill} ${o.medium} ${t.pill} ${e.inProgress}`,pillSmallLoading:`${r.pillSmall} ${o.xsmall} ${t.pill} ${e.inProgress}`,link:`${r.link} ${o.medium} ${t.link}`,linkSmall:`${r.link} ${o.xsmall} ${t.link}`,linkAsButton:"inline-block hover:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"},E={transparentBg:'before:i-bg-$color-modal-backdrop-background before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-25',backdrop:"fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-20 [--w-modal-max-height:80%] [--w-modal-width:640px]",modal:"pb-safe-[32] i-shadow-$shadow-modal max-h-[--w-modal-max-height] min-h-[--w-modal-min-height] w-[--w-modal-width] h-[--w-modal-height] relative transition-300 ease-in-out backface-hidden will-change-height rounded-8 mx-0 sm:mx-16 i-bg-$color-modal-background flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8",content:"block overflow-y-auto overflow-x-hidden last-child:mb-0 grow shrink px-16 sm:px-32 relative",footer:"flex justify-end shrink-0 px-16 sm:px-32",transitionTitle:"transition-all duration-300",transitionTitleCenter:"justify-self-center",transitionTitleColSpan:"col-span-2",title:"-mt-4 sm:-mt-8 h-40 sm:h-48 grid gap-8 sm:gap-16 grid-cols-[auto_1fr_auto] items-center px-16 sm:px-32 border-b sm:border-b-0 shrink-0",titleText:"mb-0 h4 sm:h3",titleButton:`${o.medium} ${t.pill} ${i.pill} sm:min-h-[44px] sm:min-w-[44px] min-h-[32px] min-w-[32px]`,titleButtonLeft:"-ml-8 sm:-ml-12 justify-self-start",titleButtonRight:"-mr-8 sm:-mr-12 justify-self-end",titleButtonIcon:"h-16 w-16 sm:h-24 sm:w-24",titleButtonIconRotated:"transform rotate-90"},H={alert:"flex p-16 border border-l-4 rounded-4",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"i-border-$color-alert-negative-subtle-border i-bg-$color-alert-negative-background i-text-$color-alert-negative-text i-border-l-$color-alert-negative-border",negativeIcon:"i-text-$color-alert-negative-icon",positive:"i-border-$color-alert-positive-subtle-border i-bg-$color-alert-positive-background i-text-$color-alert-positive-text i-border-l-$color-alert-positive-border",positiveIcon:"i-text-$color-alert-positive-icon",warning:"i-border-$color-alert-warning-subtle-border i-bg-$color-alert-warning-background i-text-$color-alert-warning-text i-border-l-$color-alert-warning-border",warningIcon:"i-text-$color-alert-warning-icon",info:"i-border-$color-alert-info-subtle-border i-bg-$color-alert-info-background i-text-$color-alert-info-text i-border-l-$color-alert-info-border",infoIcon:"i-text-$color-alert-info-icon"},A={default:"block text-m mb-0 leading-m i-text-$color-input-text-filled i-bg-$color-input-background i-border-$color-input-border hover:i-border-$color-input-border-hover active:i-border-$color-input-border-active rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] caret-current",textArea:"min-h-[42] sm:min-h-[45]",disabled:"i-bg-$color-input-background-disabled i-border-$color-input-border-disabled hover:i-border-$color-input-border-disabled! i-text-$color-input-text-disabled pointer-events-none",invalid:"i-border-$color-input-border-negative i-text-$color-input-text-negative!",readOnly:"pl-0 bg-transparent border-0 pointer-events-none i-text-$color-input-text-read-only",placeholder:"placeholder:i-text-$color-input-text-placeholder",wrapper:"relative",suffix:"pr-40",prefix:"pl-40"},V={default:"block text-m mb-0 leading-m i-text-$color-select-text i-bg-$color-select-background i-border-$color-select-border hover:i-border-$color-select-border-hover active:i-border-$color-select-border-active rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] appearance-none pr-32 cursor-pointer caret-current",disabled:"i-bg-$color-select-background-disabled i-border-$color-select-border-disabled hover:i-border-$color-select-border-disabled! active:i-border-$color-select-border-disabled! i-text-$color-select-text-disabled pointer-events-none",invalid:"i-border-$color-select-border-negative",readOnly:"pl-0 bg-transparent border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"absolute top-[30%] block right-0 bottom-0 w-32 h-full i-text-$color-select-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},Q={label:"antialiased block relative text-s font-bold pb-4 cursor-pointer i-text-$color-label-text",labelInvalid:"i-text-$color-label-text-negative",optional:"pl-8 font-normal text-s i-text-$color-label-optional-text"},F={helpText:"text-xs mt-4 block i-text-$color-helptext-text",helpTextValid:"i-text-$color-helptext-text-positive",helpTextInvalid:"i-text-$color-helptext-text-negative"},v="absolute top-0 bottom-0 flex justify-center items-center focusable focus:[--w-outline-offset:-2px] bg-transparent ",N={wrapper:v+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs i-text-$color-label-text"},J={wrapper:v+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs i-text-$color-label-text"},G={wrapper:"flex space-x-8",text:"i-text-$color-breadcrumbs-text",link:"i-text-$color-breadcrumbs-link-text",separator:"select-none i-text-$color-breadcrumbs-icon",a11y:"sr-only"},M={field:"relative text-m",wrapper:"relative py-1",deadToggleWrapper:"h-20 w-20 pointer-events-none",input:"peer",deadToggleInput:"hidden",inputDisabled:"pointer-events-none",focusable:"peer-focus:focusable",focusableWithin:"focus-within:focusable",label:"cursor-pointer text-m i-text-$color-label-text py-2 pl-28 select-none relative block before:block before:border before:absolute before:transition-all before:left-0 before:w-20 before:h-20 before:top-2",deadToggleLabel:"-mt-2",noContent:'before:content-[""]',indeterminate:'before:flex! before:items-center before:justify-center before:i-text-$color-checkbox-icon before:text-center before:font-bold before:content-["-"] peer-indeterminate:before:i-border-$color-checkbox-border-selected peer-indeterminate:before:i-bg-$color-checkbox-background-selected peer-indeterminate:hover:before:i-border-$color-checkbox-border-hover peer-indeterminate:hover:before:i-bg-$color-checkbox-background-selected-hover',labelDisabled:"pointer-events-none",checkbox:"before:rounded-2 hover:before:i-border-$color-checkbox-border-hover hover:before:i-bg-$color-checkbox-background-hover",checkboxChecked:"peer-checked:before:i-border-$color-checkbox-border-selected peer-checked:before:i-bg-$color-checkbox-background-selected peer-checked:peer-hover:before:i-border-$color-checkbox-border-selected-hover peer-checked:peer-hover:before:i-bg-$color-checkbox-background-selected-hover",checkboxInvalid:"before:i-bg-$color-checkbox-negative-background hover:before:i-bg-$color-checkbox-negative-background-hover peer-checked:before:i-border-$color-checkbox-negative-border-selected hover:before:i-border-$color-checkbox-negative-border-hover peer-checked:before:i-bg-$color-checkbox-negative-background-selected peer-checked:peer-hover:before:i-bg-$color-checkbox-negative-background-selected-hover peer-checked:peer-hover:before:i-border-$color-checkbox-negative-border-selected-hover",checkboxDisabled:"before:i-bg-$color-checkbox-background-disabled before:i-border-$color-checkbox-border-disabled peer-checked:before:i-border-$color-checkbox-border-selected-disabled peer-checked:before:i-bg-$color-checkbox-background-selected-disabled",labelCheckboxBorder:"i-border-$color-checkbox-border",radio:"before:rounded-full peer-checked:before:border-[6] peer-checked:peer-hover:before:i-border-$color-radio-border-selected-hover peer-hover:before:i-border-$color-radio-border-hover peer-hover:before:i-bg-$color-radio-background-hover",radioChecked:"peer-checked:before:i-border-$color-radio-border-selected",radioInvalid:"before:i-bg-$color-radio-negative-background peer-hover:before:i-bg-$color-radio-negative-background-hover before:i-border-$color-radio-negative-border peer-hover:before:i-border-$color-radio-negative-border-hover peer-checked:before:i-border-$color-radio-negative-border-selected peer-checked:peer-hover:before:i-border-$color-radio-negative-border-selected-hover ",radioDisabled:"before:i-bg-$color-radio-background-disabled before:i-border-$color-radio-border-disabled peer-checked:before:i-border-$color-radio-border-selected-disabled",labelRadioBorder:"i-border-$color-radio-border",radioButtons:"inline-flex relative font-bold rounded-8",radioButtonsGroup:"group",radioButtonsLabel:"peer-hover:peer-not-checked:i-bg-$color-buttongroup-primary-background-hover peer-checked:i-text-$color-buttongroup-primary-text-selected peer-checked:i-bg-$color-buttongroup-primary-background-selected peer-checked:i-border-$color-buttongroup-primary-border-selected block relative text-s font-bold cursor-pointer i-text-$color-buttongroup-primary-text text-center i-bg-$color-buttongroup-primary-background border-2 i-border-$color-buttongroup-primary-border py-8 pl-12 pr-14 group-first-of-type:rounded-tl-8 group-first-of-type:rounded-bl-8 group-last-of-type:rounded-tr-8 group-last-of-type:rounded-br-8 group-not-last-of-type:border-r-0 peer-checked:z-10 group-not-first:-ml-2",radioButtonsJustified:"flex!",radioButtonsGroupJustified:"grow-1 shrink-0 basis-auto",radioButtonsLabelSmall:"text-xs py-[5px]! px-[8px]!",icon:"peer-checked:before:bg-center before:bg-[url(var(--w-form-check-mark))]",a11y:"sr-only"},Y={toggle:"absolute inset-0 h-full w-full appearance-none cursor-pointer focusable focusable-inset",label:`px-12 ${Q.label} py-8! cursor-pointer focusable focusable-inset`,buttonOrLink:"bg-transparent focusable",buttonOrLinkStretch:"inset-0 absolute"},K={wrapper:"relative",combobox:"absolute left-0 right-0 pb-8 rounded-8 i-bg-$color-combobox-background i-shadow-$shadow-combobox",textMatch:"font-bold",listbox:"m-0 p-0 select-none list-none",option:"block cursor-pointer p-8 hover:i-bg-$color-combobox-option-background-hover",optionSelected:"i-bg-$color-combobox-option-background-selected hover:i-bg-$color-combobox-option-background-selected-hover",a11y:"sr-only"},X={base:"border-2 relative flex items-start",tooltip:"i-bg-$color-tooltip-background i-border-$color-tooltip-background i-shadow-$shadow-tooltip i-text-$color-tooltip-text rounded-4 py-6 px-8",callout:"i-bg-$color-callout-background i-border-$color-callout-border i-text-$color-callout-text py-8 px-16 rounded-8",highlight:"i-bg-$color-callout-background i-border-$color-callout-border i-text-$color-callout-text py-8 px-16 rounded-8 drop-shadow-m",popover:"i-bg-$color-popover-background i-border-$color-popover-background i-text-$color-popover-paragraph-text rounded-8 p-16 drop-shadow-m",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeft:"-left-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionTop:"-top-[8px]",arrowTooltip:"i-bg-$color-tooltip-background i-border-$color-tooltip-background",arrowCallout:"i-bg-$color-callout-background i-border-$color-callout-border",arrowPopover:"i-bg-$color-popover-background i-border-$color-popover-background",arrowHighlight:"i-bg-$color-callout-background i-border-$color-callout-border",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${o.medium} ${t.pill} ${i.pill} justify-self-end -mr-8 ml-8`};export{N as A,H as a,X as b,B as c,u as d,G as e,C as f,K as g,W as h,F as i,q as j,T as k,Q as l,E as m,j as n,P as o,_ as p,z as q,I as r,V as s,O as t,R as u,U as v,A as w,Y as x,M as y,J as z};
//# sourceMappingURL=index-a71f5096.js.map
