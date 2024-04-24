import{g as H}from"./_commonjsHelpers-4gQjN7DL.js";var P={},T={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.errorMessages=r.ErrorType=void 0;var e;(function(t){t.MalformedUnicode="MALFORMED_UNICODE",t.MalformedHexadecimal="MALFORMED_HEXADECIMAL",t.CodePointLimit="CODE_POINT_LIMIT",t.OctalDeprecation="OCTAL_DEPRECATION",t.EndOfString="END_OF_STRING"})(e=r.ErrorType||(r.ErrorType={})),r.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(T);(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.unraw=r.errorMessages=r.ErrorType=void 0;const e=T;Object.defineProperty(r,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(r,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function t(s){return!s.match(/[^a-f0-9]/i)?parseInt(s,16):NaN}function n(s,l,f){const d=t(s);if(Number.isNaN(d)||f!==void 0&&f!==s.length)throw new SyntaxError(e.errorMessages.get(l));return d}function i(s){const l=n(s,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(l)}function u(s,l){const f=n(s,e.ErrorType.MalformedUnicode,4);if(l!==void 0){const d=n(l,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(f,d)}return String.fromCharCode(f)}function a(s){return s.charAt(0)==="{"&&s.charAt(s.length-1)==="}"}function o(s){if(!a(s))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const l=s.slice(1,-1),f=n(l,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(f)}catch(d){throw d instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):d}}function c(s,l=!1){if(l)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const f=parseInt(s,8);return String.fromCharCode(f)}const m=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function _(s){return m.get(s)||s}const M=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function p(s,l=!1){return s.replace(M,function(f,d,y,b,D,U,L,O,F){if(d!==void 0)return"\\";if(y!==void 0)return i(y);if(b!==void 0)return o(b);if(D!==void 0)return u(D,U);if(L!==void 0)return u(L);if(O==="0")return"\0";if(O!==void 0)return c(O,!l);if(F!==void 0)return _(F);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}r.unraw=p,r.default=p})(P);const x=H(P),h=r=>typeof r=="string",R=r=>typeof r=="function",v=new Map,A="en";function S(r){return[...Array.isArray(r)?r:[r],A]}function N(r,e,t){const n=S(r);return E(()=>C("date",n,t),()=>new Intl.DateTimeFormat(n,t)).format(h(e)?new Date(e):e)}function w(r,e,t){const n=S(r);return E(()=>C("number",n,t),()=>new Intl.NumberFormat(n,t)).format(e)}function I(r,e,t,{offset:n=0,...i}){const u=S(r),a=e?E(()=>C("plural-ordinal",u),()=>new Intl.PluralRules(u,{type:"ordinal"})):E(()=>C("plural-cardinal",u),()=>new Intl.PluralRules(u,{type:"cardinal"}));return i[t]??i[a.select(t-n)]??i.other}function E(r,e){const t=r();let n=v.get(t);return n||(n=e(),v.set(t,n)),n}function C(r,e,t){const n=e.join("-");return`${r}-${n}-${JSON.stringify(t)}`}const j=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,$=(r,e,t={})=>{const n=e||r,i=a=>typeof a=="object"?a:t[a]||{style:a},u=(a,o)=>{const c=Object.keys(t).length?i("number"):void 0,m=w(n,a,c);return o.replace("#",m)};return{plural:(a,o)=>{const{offset:c=0}=o,m=I(n,!1,a,o);return u(a-c,m)},selectordinal:(a,o)=>{const{offset:c=0}=o,m=I(n,!0,a,o);return u(a-c,m)},select:q,number:(a,o)=>w(n,a,i(o)),date:(a,o)=>N(n,a,i(o)),undefined:z}},q=(r,e)=>e[r]??e.other,z=r=>r;function B(r,e,t){return(n={},i)=>{const u=$(e,t,i),a=c=>Array.isArray(c)?c.reduce((m,_)=>{if(h(_))return m+_;const[M,p,s]=_;let l={};s!=null&&typeof s=="object"?Object.entries(s).forEach(([y,b])=>{l[y]=a(b)}):l=s;const f=u[p],d=f(n[M],l);return d==null?m:m+d},""):c,o=a(r);return h(o)&&j.test(o)?x(o.trim()):h(o)?o.trim():o?String(o):""}}var G=Object.defineProperty,J=(r,e,t)=>e in r?G(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,K=(r,e,t)=>(J(r,typeof e!="symbol"?e+"":e,t),t);class X{constructor(){K(this,"_events",{})}on(e,t){var n;return(n=this._events)[e]??(n[e]=[]),this._events[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){const n=this._getListeners(e);if(!n)return;const i=n.indexOf(t);~i&&n.splice(i,1)}emit(e,...t){const n=this._getListeners(e);n&&n.map(i=>i.apply(this,t))}_getListeners(e){const t=this._events[e];return Array.isArray(t)?t:!1}}var Q=Object.defineProperty,V=(r,e,t)=>e in r?Q(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,g=(r,e,t)=>(V(r,typeof e!="symbol"?e+"":e,t),t);class Y extends X{constructor(e){super(),g(this,"_locale",""),g(this,"_locales"),g(this,"_localeData",{}),g(this,"_messages",{}),g(this,"_missing"),g(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??A,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,t){const n=this._localeData[e];n?Object.assign(n,t):this._localeData[e]=t}loadLocaleData(e,t){t!=null?this._loadLocaleData(e,t):Object.keys(e).forEach(n=>this._loadLocaleData(n,e[n])),this.emit("change")}_load(e,t){const n=this._messages[e];n?Object.assign(n,t):this._messages[e]=t}load(e,t){typeof e=="string"&&typeof t=="object"?this._load(e,t):Object.entries(e).forEach(([n,i])=>this._load(n,i)),this.emit("change")}loadAndActivate({locale:e,locales:t,messages:n}){this._locale=e,this._locales=t||void 0,this._messages[this._locale]=n,this.emit("change")}activate(e,t){this._locale=e,this._locales=t,this.emit("change")}_(e,t,n){let i=n==null?void 0:n.message;h(e)||(t=e.values||t,i=e.message,e=e.id);const u=this.messages[e],a=u===void 0,o=this._missing;if(o&&a)return R(o)?o(this._locale,e):o;a&&this.emit("missing",{id:e,locale:this._locale});let c=u||i||e;return h(c)&&j.test(c)?JSON.parse(`"${c}"`):h(c)?c:B(c,this._locale,this._locales)(t,n==null?void 0:n.formats)}date(e,t){return N(this._locales||this._locale,e,t)}number(e,t){return w(this._locales||this._locale,e,t)}}function Z(r={}){return new Y(r)}const k=Z();export{k as i};
