import{r as x}from"./index-4g5l5LRQ.js";var v={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=x,y=Symbol.for("react.element"),w=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,D=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function f(d,l,g){var a,b={},p=null,m=null;g!==void 0&&(p=""+g),l.key!==void 0&&(p=""+l.key),l.ref!==void 0&&(m=l.ref);for(a in l)k.call(l,a)&&!S.hasOwnProperty(a)&&(b[a]=l[a]);if(d&&d.defaultProps)for(a in l=d.defaultProps,l)b[a]===void 0&&(b[a]=l[a]);return{$$typeof:y,type:d,key:p,ref:m,props:b,_owner:D.current}}c.Fragment=w;c.jsx=f;c.jsxs=f;v.exports=c;var T=v.exports;const P={base:"py-4 px-8 border-0 rounded-4 text-xs inline-flex",neutral:"bg-[--w-color-badge-neutral-background] s-text",info:"bg-[--w-color-badge-info-background] s-text",positive:"bg-[--w-color-badge-positive-background] s-text",warning:"bg-[--w-color-badge-warning-background] s-text",negative:"bg-[--w-color-badge-negative-background] s-text",disabled:"s-bg-disabled s-text",price:"bg-[--w-black/70] s-text-inverted-static",sponsored:"bg-[--w-color-badge-sponsored-background] s-text",notification:"i-bg-$color-badge-notification-background i-text-$color-badge-notification-text",positionBase:"absolute backdrop-blur",positionTL:"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",positionTR:"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",positionBR:"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",positionBL:"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"},_={wrapper:"touch-pan-y relative w-full h-44 py-2",track:"absolute s-bg-disabled-subtle h-4 top-20 rounded-4 w-full ",trackDisabled:"pointer-events-none",activeTrack:"absolute s-bg-primary h-6 top-[19px] rounded-4",activeTrackDisabled:"absolute s-bg-disabled h-6 top-[19px] rounded-4 pointer-events-none",thumb:"absolute transition-shadow w-24 h-24 bottom-10 rounded-4 outline-none",thumbEnabled:"border-2 shadow-[--w-shadow-slider] cursor-pointer s-bg-primary s-border-primary hover:s-bg-primary-hover hover:s-border-primary-hover hover:shadow-[--w-shadow-slider-handle-hover] active:s-bg-primary-active active:s-border-primary-active active:shadow-[--w-shadow-slider-handle-active] focus:shadow-[--w-shadow-slider-handle-hover] focus:s-border-primary-hover focus:s-bg-primary-hover",thumbDisabled:"s-bg-disabled cursor-disabled pointer-events-none"},u={box:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg",infoClickable:"hover:s-bg-info-subtle-hover active:s-bg-info-subtle-active",neutralClickable:"hover:s-bg-hover active:s-bg-active",borderedClickable:"hover:s-bg-hover active:s-bg-active hover:s-border-hover active:s-border-active"},C={pill:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},R={step:"group/step",stepVertical:"group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-16",stepVerticalLeft:"grid-cols-[20px_1fr]",stepVerticalRight:"grid-cols-[1fr_20px] text-right",stepHorizontal:"group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid gap-y-16 items-center",stepDot:"rounded-full border-2 h-20 w-20 transition-colors duration-300 s-icon-inverted",stepDotVerticalRight:"col-start-2",stepDotHorizontal:"row-start-2 justify-self-end",stepDotActive:"s-border-primary s-bg-primary",stepDotIncomplete:"s-border s-bg",stepLine:"group-last/stepv:hidden transition-colors duration-300",stepLineVertical:"w-2 h-full justify-self-center",stepLineVerticalRight:"col-start-2",stepLineHorizontal:"h-2 w-full row-start-2",stepLineHorizontalRight:"group-last/steph:bg-transparent",stepLineHorizontalLeft:"group-first/steph:bg-transparent",stepLineIncomplete:"s-bg-disabled",stepLineComplete:"s-bg-primary",content:"last:mb-0 group-last/step:last:pb-0",contentVertical:"row-span-2 pb-32",contentHorizontal:"col-span-3 px-16 row-start-1 text-center"},j={steps:"w-full",stepsHorizontal:"flex"},I={card:"cursor-pointer overflow-hidden relative transition-all",cardShadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",cardUnselected:"",cardSelected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",cardOutline:"absolute border-2 rounded-8 inset-0 transition-all",cardOutlineUnselected:"border-transparent group-active:s-border-active",cardOutlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",cardFlat:"border-2 rounded-4",cardFlatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",cardFlatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},q={switch:"",label:"block relative h-24 w-44 cursor-pointer group",labelDisabled:"pointer-events-none",track:"absolute top-0 left-0 h-full w-full rounded-full transition-colors",trackActive:"s-bg-primary group-hover:s-bg-primary-hover",trackInactive:"bg-[--w-color-switch-track-background] group-hover:bg-[--w-color-switch-track-background-hover]",trackDisabled:"s-bg-disabled-subtle",handle:"absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform",handleSelected:"translate-x-20",handleNotDisabled:"s-bg shadow-s",handleDisabled:"s-bg-disabled",a11y:"sr-only"},U={tabContainer:"inline-grid relative",wunderbar:"absolute s-border-selected -bottom-0 border-b-4 transition-all",wrapperUnderlined:"border-b border-transparent -mx-16 sm:mx-0 px-4 sm:px-0 mb-32 "},E={tab:"grid items-center font-bold gap-8 focusable antialias p-16 pb-8 border-b-4 bg-transparent s-text-subtle border-transparent hover:s-text-link hover:s-border-primary",tabActive:"s-text-link",icon:"mx-auto hover:s-text-link",iconUnderlinedActive:"s-text-link",content:"flex items-center justify-center gap-8",contentUnderlined:"content-underlined",contentUnderlinedActive:"s-text-link"},z={cols1:"grid-cols-1",cols2:"grid-cols-2",cols3:"grid-cols-3",cols4:"grid-cols-4",cols5:"grid-cols-5",cols6:"grid-cols-6",cols7:"grid-cols-7",cols8:"grid-cols-8",cols9:"grid-cols-9"},Q="focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block",O={expandable:"will-change-height",expandableTitle:"font-bold s-text",expandableBox:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 "+u.box,expandableInfo:"s-bg-info-subtle! hover:s-bg-info-subtle-hover!",expandableBleed:u.bleed,chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronBox:"",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsTransformChevronDownPart:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronDownExpandPart:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsTransformChevronUpPart:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronUpCollapsePart:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:Q+" hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between "+u.box,paddingTop:"pt-0",title:"flex w-full justify-between items-center",titleType:"h4"},n="font-bold focusable justify-center transition-colors ease-in-out",i={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},o={primary:`border-0 rounded-8 ${n}`,secondary:`border-2 rounded-8 ${n}`,utility:`border rounded-4 ${n}`,negative:`border-0 rounded-8 ${n}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${n}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${i.link}`},t={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},r={medium:"text-m leading-[24]",xsmall:"text-xs"},e={inProgress:`border-transparent animate-inprogress pointer-events-none ${i.loading}`,quiet:`border-0 rounded-8 ${n}`,utilityQuiet:`border-0 rounded-4 ${n}`,negativeQuiet:`border-0 rounded-8 ${n}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${i.disabled}`},W={secondary:`${t.medium} ${r.medium} ${o.secondary} ${i.secondary}`,secondaryHref:`${t.medium} ${r.medium} ${o.secondary} ${i.secondary}`,secondaryDisabled:`${t.medium} ${r.medium} ${o.secondary} ${e.isDisabled}`,secondarySmall:`${r.xsmall} ${t.xsmall} ${o.secondary} ${i.secondary}`,secondarySmallDisabled:`${r.xsmall} ${t.xsmall} ${o.secondary} ${e.isDisabled}`,secondaryQuiet:`${t.medium} ${r.medium} ${e.quiet} ${i.quiet}`,secondaryQuietDisabled:`${t.medium} ${r.medium} ${e.quiet} ${e.isDisabled}`,secondarySmallQuiet:`${r.xsmall} ${t.xsmall} ${e.quiet} ${i.quiet}`,secondarySmallQuietDisabled:`${r.xsmall} ${t.xsmall} ${e.quiet} ${e.isDisabled}`,secondaryLoading:`${t.medium} ${r.medium} ${o.secondary} ${e.inProgress}`,secondarySmallLoading:`${r.xsmall} ${t.xsmall}  ${o.secondary} ${e.inProgress}`,secondarySmallQuietLoading:`${r.xsmall} ${t.xsmall} ${e.quiet} ${e.inProgress}`,secondaryQuietLoading:`${t.medium} ${r.medium} ${e.quiet} ${e.inProgress}`,primary:`${t.large} ${r.medium} ${o.primary} ${i.primary}`,primaryDisabled:`${t.large} ${r.medium} ${e.isDisabled} ${o.primary}`,primarySmall:`${t.small} ${r.xsmall} ${o.primary} ${i.primary}`,primarySmallDisabled:`${t.small} ${r.xsmall} ${e.isDisabled} ${o.primary} `,primaryQuiet:`${t.large} ${r.medium} ${e.quiet} ${i.quiet}`,primaryQuietDisabled:`${t.large} ${r.medium} ${e.quiet} ${e.isDisabled}`,primarySmallQuiet:`${t.small} ${r.xsmall} ${e.quiet} ${i.quiet}`,primarySmallQuietDisabled:`${t.small} ${r.xsmall} ${e.quiet} ${e.isDisabled}`,primaryLoading:`${t.large} ${r.medium} ${e.inProgress} ${o.primary}`,primarySmallLoading:`${t.small} ${r.xsmall}  ${e.inProgress} ${o.primary}`,primarySmallQuietLoading:`${t.small} ${r.xsmall} ${e.quiet} ${e.inProgress} ${o.primary}`,primaryQuietLoading:`${t.large} ${r.medium} ${e.quiet} ${e.inProgress}`,utility:`${t.utility} ${r.medium} ${o.utility} ${i.utility}`,utilityDisabled:`${t.utility} ${r.medium} ${o.utility} ${e.isDisabled}`,utilityQuiet:`${t.large} ${r.medium} ${e.utilityQuiet} ${i.utilityQuiet}`,utilityQuietDisabled:`${t.large} ${r.medium} ${e.utilityQuiet} ${e.isDisabled}`,utilitySmall:`${t.smallUtility} ${r.xsmall} ${o.utility} ${i.utility}`,utilitySmallDisabled:`${t.smallUtility} ${r.xsmall} ${o.utility} ${e.isDisabled}`,utilitySmallQuiet:`${t.smallUtility} ${r.xsmall} ${e.utilityQuiet} ${i.utilityQuiet}`,utilitySmallQuietDisabled:`${t.smallUtility} ${r.xsmall} ${e.utilityQuiet} ${e.isDisabled}`,utilityLoading:`${t.large} ${r.medium} ${o.utility} ${e.inProgress}`,utilitySmallLoading:`${t.smallUtility} ${r.xsmall} ${o.utility} ${e.inProgress}`,utilityQuietLoading:`${t.large} ${r.medium} ${e.inProgress} ${e.utilityQuiet}`,utilitySmallQuietLoading:`${t.smallUtility} ${r.xsmall} ${e.inProgress} ${e.utilityQuiet}`,negative:`${t.large} ${r.medium} ${o.negative} ${i.destructive}`,negativeDisabled:`${t.large} ${r.medium} ${o.negative} ${e.isDisabled}`,negativeQuiet:`${t.large} ${r.medium} ${e.negativeQuiet} ${i.negativeQuiet}`,negativeQuietDisabled:`${t.large} ${r.medium} ${e.negativeQuiet}${e.isDisabled}`,negativeSmall:`${t.small} ${r.xsmall} ${o.negative} ${i.destructive}`,negativeSmallDisabled:`${t.small} ${r.xsmall} ${o.negative} ${e.isDisabled}`,negativeSmallQuiet:`${t.small} ${r.xsmall} ${e.negativeQuiet} ${i.negativeQuiet}`,negativeSmallQuietDisabled:`${t.small} ${r.xsmall} ${e.negativeQuiet} ${e.isDisabled}`,negativeLoading:`${t.large} ${r.medium} ${o.negative} ${e.inProgress}`,negativeSmallLoading:`${t.small} ${r.xsmall} ${e.inProgress} ${o.negative}`,negativeQuietLoading:`${t.large} ${r.medium} ${e.negativeQuiet} ${o.negative} ${e.inProgress}`,negativeSmallQuietLoading:`${t.small} ${r.xsmall} ${e.negativeQuiet} ${e.inProgress}`,pill:`${t.pill} ${r.medium} ${o.pill} ${i.pill}`,pillSmall:`${t.pillSmall} ${r.xsmall} ${o.pill} ${i.pill}`,pillLoading:`${t.pill} ${r.medium} ${o.pill} ${e.inProgress}`,pillSmallLoading:`${t.pillSmall} ${r.xsmall} ${o.pill} ${e.inProgress}`,link:`${t.link} ${r.medium} ${o.link}`,linkSmall:`${t.link} ${r.xsmall} ${o.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"},V={transparentBg:"",backdrop:"fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-30 [--w-modal-max-height:80%] [--w-modal-width:640px] bg-[--w-black/25]",modal:"pb-safe-[32] shadow-m max-h-[--w-modal-max-height] min-h-[--w-modal-min-height] w-[--w-modal-width] h-[--w-modal-height] relative transition-300 ease-in-out backface-hidden will-change-height rounded-8 mx-0 sm:mx-16 bg-[--w-s-color-surface-elevated-100] flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8",content:"block overflow-y-auto overflow-x-hidden last-child:mb-0 grow shrink px-16 sm:px-32 relative",footer:"flex justify-end shrink-0 px-16 sm:px-32",transitionTitle:"transition-all duration-300",transitionTitleCenter:"justify-self-center self-center",transitionTitleColSpan:"col-span-2",title:"py-8 sm:py-0 -mt-4 sm:-mt-8 min-h-40 sm:min-h-48 grid gap-8 sm:gap-16 grid-cols-[auto_1fr_auto] items-start px-16 sm:px-32 border-b sm:border-b-0 shrink-0",titleText:"mb-0 h4 sm:h3",titleButton:`${r.medium} ${o.pill} ${i.pill} sm:min-h-[44px] sm:min-w-[44px] min-h-[32px] min-w-[32px]`,titleButtonLeft:"-ml-8 sm:-ml-12 justify-self-start",titleButtonRight:"-mr-8 sm:-mr-12 justify-self-end",titleButtonIcon:"h-16 w-16 sm:h-24 sm:w-24",titleButtonIconRotated:"transform rotate-90"},A={alert:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},H={default:"block text-m mb-0 leading-m s-text s-bg s-border hover:s-border-hover active:s-border-selected rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] caret-current",textArea:"min-h-[42] sm:min-h-[45]",disabled:"s-bg-disabled-subtle s-border-disabled hover:s-border-disabled! s-text-disabled pointer-events-none",invalid:"s-border-negative s-text-negative! hover:s-border-negative-hover! outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent! border-0! pointer-events-none",placeholder:"placeholder:s-text-placeholder",wrapper:"relative",suffix:"pr-40",prefix:"pl-40"},N={default:"block text-m mb-0 leading-m s-text s-bg s-border hover:s-border-hover active:s-border-active rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] appearance-none pr-32 cursor-pointer caret-current",disabled:"s-bg-disabled-subtle s-border-disabled hover:s-border-disabled! active:s-border-disabled! s-text-disabled pointer-events-none",invalid:"s-border-negative hover:s-border-negative-hover! outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"absolute top-[30%] block right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},L={label:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle",labelInvalid:"s-text-negative"},F={helpText:"text-xs mt-4 block",helpTextColor:"s-text-subtle",helpTextColorInvalid:"s-text-negative",helpTextValid:"s-text-positive",helpTextInvalid:"s-text-negative"},h="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",J={wrapper:h+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},G={wrapper:h+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},M={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},s={field:"relative text-m",wrapper:"relative py-1",wrapperRadioButtons:"inline-flex font-bold rounded-8 focus-within:focusable",wrapperRadioButtonsJustified:"flex font-bold rounded-8 focus-within:focusable",radioButtonsGroup:"group",radioButtonsGroupJustified:"grow-1 shrink-0 basis-auto",input:"peer",a11y:"sr-only",label:"peer-focus:focusable cursor-pointer text-m s-text s-border py-2 pl-28 select-none relative block before:border before:absolute before:transition-all before:left-0 before:w-20 before:h-20 before:top-2",labelBefore:'before:content-[""] before:block',checkbox:"before:s-bg before:rounded-2 hover:before:s-border-primary hover:before:s-bg-hover peer-checked:before:bg-center peer-checked:before:bg-[url(var(--w-form-check-mark))] peer-checked:before:s-border-primary peer-checked:before:s-bg-primary peer-checked:peer-hover:before:s-border-primary-hover peer-checked:peer-hover:before:s-bg-primary-hover",checkboxInvalid:"before:s-bg before:s-border-negative before:rounded-2 hover:before:s-bg-negative-subtle-hover hover:before:s-border-negative-hover peer-checked:before:bg-center peer-checked:before:bg-[url(var(--w-form-check-mark))] peer-checked:before:s-bg-negative peer-checked:before:s-border-negative peer-checked:peer-hover:before:s-bg-negative-hover peer-checked:peer-hover:before:s-border-negative-hover",checkboxDisabled:"before:s-bg-disabled-subtle before:s-border-disabled pointer-events-none before:rounded-2 peer-checked:before:bg-center peer-checked:before:bg-[url(var(--w-form-check-mark))] peer-checked:before:s-border-disabled peer-checked:before:s-bg-disabled",indeterminate:'before:content-["–"] before:rounded-2 before:leading-xs before:text-center before:font-bold before:s-icon-inverted peer-indeterminate:before:s-border-primary peer-indeterminate:before:s-bg-primary peer-indeterminate:hover:before:s-border-primary-hover peer-indeterminate:hover:before:s-bg-primary-hover',indeterminateInvalid:'before:content-["–"] before:rounded-2 before:leading-xs before:text-center before:font-bold before:s-icon-inverted peer-indeterminate:before:s-border-negative peer-indeterminate:before:s-bg-negative peer-indeterminate:hover:before:s-border-negative-hover peer-indeterminate:hover:before:s-bg-negative-hover',indeterminateDisabled:'before:content-["–"] before:rounded-2 before:leading-xs before:text-center before:font-bold pointer-events-none before:s-icon-inverted peer-indeterminate:before:s-border-disabled peer-indeterminate:before:s-bg-disabled',radio:"before:s-bg before:rounded-full peer-checked:before:border-[6] peer-checked:before:s-border-selected peer-checked:peer-hover:before:s-border-selected-hover peer-hover:before:s-border-primary peer-hover:before:s-bg-hover",radioInvalid:"before:s-bg before:s-border-negative before:rounded-full peer-checked:before:border-[6] peer-hover:before:s-bg-negative-subtle peer-hover:before:s-border-negative-hover peer-checked:before:s-border-negative peer-checked:peer-hover:before:s-border-negative-hover",radioDisabled:"before:s-bg-disabled-subtle before:s-border-disabled pointer-events-none before:rounded-full peer-checked:before:border-[6]",radioButtonsLabel:"peer-hover:peer-not-checked:s-bg-hover peer-checked:s-text-inverted peer-checked:s-bg-primary peer-checked:s-border-primary block relative font-bold cursor-pointer s-text-link text-center s-bg border-2 s-border group-first-of-type:rounded-tl-8 group-first-of-type:rounded-bl-8 group-last-of-type:rounded-tr-8 group-last-of-type:rounded-br-8 group-not-last-of-type:border-r-0 peer-checked:z-10 group-not-first:-ml-2",radioButtonsRegular:"text-s py-8 pl-12 pr-14",radioButtonsSmall:"text-xs py-[5px] px-[8px]"},Y={wrapper:`${s.wrapper} h-20 w-20 pointer-events-none`,input:`${s.input} hidden`,inputVue:"hidden",labelRadio:`${s.label} ${s.labelBefore} ${s.radio}`,labelCheckbox:`${s.label} ${s.labelBefore} ${s.checkbox}`,labelVue:"-mt-2"},K={toggle:"absolute inset-0 h-full w-full appearance-none cursor-pointer focusable focusable-inset",label:`px-12 ${L.label} py-8! cursor-pointer focusable focusable-inset`,buttonOrLink:"bg-transparent focusable",buttonOrLinkStretch:"inset-0 absolute"},X={wrapper:"relative",combobox:"absolute left-0 right-0 pb-8 rounded-8 s-bg shadow-m",textMatch:"font-bold",listbox:"m-0 p-0 select-none list-none",option:"block cursor-pointer p-8 hover:s-bg-hover",optionSelected:"s-bg-selected hover:s-bg-selected-hover",a11y:"sr-only"},Z={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${r.medium} ${o.pill} ${i.pill} justify-self-end -mr-8 ml-8`},ee={link:"hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding",currentPage:"block md:hidden p-8 font-bold",icon:"s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",containerNav:"flex items-center justify-center p-8",a11y:"sr-only",pages:"hidden md:block s-text-link",active:"s-bg-primary s-text-inverted",notActive:"hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"};export{Z as A,ee as B,V as C,P as a,u as b,I as c,_ as d,O as e,W as f,N as g,F as h,H as i,T as j,E as k,L as l,U as m,z as n,M as o,C as p,X as q,j as r,q as s,s as t,R as u,K as v,Y as w,G as x,J as y,A as z};
