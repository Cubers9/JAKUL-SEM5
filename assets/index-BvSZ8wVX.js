(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const I of i)if(I.type==="childList")for(const t of I.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&e(t)}).observe(document,{childList:!0,subtree:!0});function n(i){const I={};return i.integrity&&(I.integrity=i.integrity),i.referrerPolicy&&(I.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?I.credentials="include":i.crossOrigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function e(i){if(i.ep)return;i.ep=!0;const I=n(i);fetch(i.href,I)}})();var yt={exports:{}},ai={},vt={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _n=Symbol.for("react.element"),Ar=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),er=Symbol.for("react.strict_mode"),ir=Symbol.for("react.profiler"),Ir=Symbol.for("react.provider"),tr=Symbol.for("react.context"),sr=Symbol.for("react.forward_ref"),rr=Symbol.for("react.suspense"),Sr=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),p1=Symbol.iterator;function Er(a){return a===null||typeof a!="object"?null:(a=p1&&a[p1]||a["@@iterator"],typeof a=="function"?a:null)}var Vt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jt=Object.assign,wt={};function In(a,A,n){this.props=a,this.context=A,this.refs=wt,this.updater=n||Vt}In.prototype.isReactComponent={};In.prototype.setState=function(a,A){if(typeof a!="object"&&typeof a!="function"&&a!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,A,"setState")};In.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function Zt(){}Zt.prototype=In.prototype;function CI(a,A,n){this.props=a,this.context=A,this.refs=wt,this.updater=n||Vt}var WI=CI.prototype=new Zt;WI.constructor=CI;jt(WI,In.prototype);WI.isPureReactComponent=!0;var c1=Array.isArray,xt=Object.prototype.hasOwnProperty,hI={current:null},_t={key:!0,ref:!0,__self:!0,__source:!0};function zt(a,A,n){var e,i={},I=null,t=null;if(A!=null)for(e in A.ref!==void 0&&(t=A.ref),A.key!==void 0&&(I=""+A.key),A)xt.call(A,e)&&!_t.hasOwnProperty(e)&&(i[e]=A[e]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),u=0;u<s;u++)r[u]=arguments[u+2];i.children=r}if(a&&a.defaultProps)for(e in s=a.defaultProps,s)i[e]===void 0&&(i[e]=s[e]);return{$$typeof:_n,type:a,key:I,ref:t,props:i,_owner:hI.current}}function or(a,A){return{$$typeof:_n,type:a.type,key:A,ref:a.ref,props:a.props,_owner:a._owner}}function FI(a){return typeof a=="object"&&a!==null&&a.$$typeof===_n}function lr(a){var A={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(n){return A[n]})}var Y1=/\/+/g;function Pi(a,A){return typeof a=="object"&&a!==null&&a.key!=null?lr(""+a.key):A.toString(36)}function me(a,A,n,e,i){var I=typeof a;(I==="undefined"||I==="boolean")&&(a=null);var t=!1;if(a===null)t=!0;else switch(I){case"string":case"number":t=!0;break;case"object":switch(a.$$typeof){case _n:case Ar:t=!0}}if(t)return t=a,i=i(t),a=e===""?"."+Pi(t,0):e,c1(i)?(n="",a!=null&&(n=a.replace(Y1,"$&/")+"/"),me(i,A,n,"",function(u){return u})):i!=null&&(FI(i)&&(i=or(i,n+(!i.key||t&&t.key===i.key?"":(""+i.key).replace(Y1,"$&/")+"/")+a)),A.push(i)),1;if(t=0,e=e===""?".":e+":",c1(a))for(var s=0;s<a.length;s++){I=a[s];var r=e+Pi(I,s);t+=me(I,A,n,r,i)}else if(r=Er(a),typeof r=="function")for(a=r.call(a),s=0;!(I=a.next()).done;)I=I.value,r=e+Pi(I,s++),t+=me(I,A,n,r,i);else if(I==="object")throw A=String(a),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return t}function Ae(a,A,n){if(a==null)return a;var e=[],i=0;return me(a,e,"","",function(I){return A.call(n,I,i++)}),e}function Nr(a){if(a._status===-1){var A=a._result;A=A(),A.then(function(n){(a._status===0||a._status===-1)&&(a._status=1,a._result=n)},function(n){(a._status===0||a._status===-1)&&(a._status=2,a._result=n)}),a._status===-1&&(a._status=0,a._result=A)}if(a._status===1)return a._result.default;throw a._result}var sa={current:null},Pe={transition:null},Rr={ReactCurrentDispatcher:sa,ReactCurrentBatchConfig:Pe,ReactCurrentOwner:hI};function Qt(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Ae,forEach:function(a,A,n){Ae(a,function(){A.apply(this,arguments)},n)},count:function(a){var A=0;return Ae(a,function(){A++}),A},toArray:function(a){return Ae(a,function(A){return A})||[]},only:function(a){if(!FI(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};O.Component=In;O.Fragment=nr;O.Profiler=ir;O.PureComponent=CI;O.StrictMode=er;O.Suspense=rr;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rr;O.act=Qt;O.cloneElement=function(a,A,n){if(a==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var e=jt({},a.props),i=a.key,I=a.ref,t=a._owner;if(A!=null){if(A.ref!==void 0&&(I=A.ref,t=hI.current),A.key!==void 0&&(i=""+A.key),a.type&&a.type.defaultProps)var s=a.type.defaultProps;for(r in A)xt.call(A,r)&&!_t.hasOwnProperty(r)&&(e[r]=A[r]===void 0&&s!==void 0?s[r]:A[r])}var r=arguments.length-2;if(r===1)e.children=n;else if(1<r){s=Array(r);for(var u=0;u<r;u++)s[u]=arguments[u+2];e.children=s}return{$$typeof:_n,type:a.type,key:i,ref:I,props:e,_owner:t}};O.createContext=function(a){return a={$$typeof:tr,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},a.Provider={$$typeof:Ir,_context:a},a.Consumer=a};O.createElement=zt;O.createFactory=function(a){var A=zt.bind(null,a);return A.type=a,A};O.createRef=function(){return{current:null}};O.forwardRef=function(a){return{$$typeof:sr,render:a}};O.isValidElement=FI;O.lazy=function(a){return{$$typeof:ur,_payload:{_status:-1,_result:a},_init:Nr}};O.memo=function(a,A){return{$$typeof:Sr,type:a,compare:A===void 0?null:A}};O.startTransition=function(a){var A=Pe.transition;Pe.transition={};try{a()}finally{Pe.transition=A}};O.unstable_act=Qt;O.useCallback=function(a,A){return sa.current.useCallback(a,A)};O.useContext=function(a){return sa.current.useContext(a)};O.useDebugValue=function(){};O.useDeferredValue=function(a){return sa.current.useDeferredValue(a)};O.useEffect=function(a,A){return sa.current.useEffect(a,A)};O.useId=function(){return sa.current.useId()};O.useImperativeHandle=function(a,A,n){return sa.current.useImperativeHandle(a,A,n)};O.useInsertionEffect=function(a,A){return sa.current.useInsertionEffect(a,A)};O.useLayoutEffect=function(a,A){return sa.current.useLayoutEffect(a,A)};O.useMemo=function(a,A){return sa.current.useMemo(a,A)};O.useReducer=function(a,A,n){return sa.current.useReducer(a,A,n)};O.useRef=function(a){return sa.current.useRef(a)};O.useState=function(a){return sa.current.useState(a)};O.useSyncExternalStore=function(a,A,n){return sa.current.useSyncExternalStore(a,A,n)};O.useTransition=function(){return sa.current.useTransition()};O.version="18.3.1";vt.exports=O;var La=vt.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=La,Kr=Symbol.for("react.element"),mr=Symbol.for("react.fragment"),Pr=Object.prototype.hasOwnProperty,Dr=Tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kr={key:!0,ref:!0,__self:!0,__source:!0};function $t(a,A,n){var e,i={},I=null,t=null;n!==void 0&&(I=""+n),A.key!==void 0&&(I=""+A.key),A.ref!==void 0&&(t=A.ref);for(e in A)Pr.call(A,e)&&!kr.hasOwnProperty(e)&&(i[e]=A[e]);if(a&&a.defaultProps)for(e in A=a.defaultProps,A)i[e]===void 0&&(i[e]=A[e]);return{$$typeof:Kr,type:a,key:I,ref:t,props:i,_owner:Dr.current}}ai.Fragment=mr;ai.jsx=$t;ai.jsxs=$t;yt.exports=ai;var f=yt.exports,Xt={exports:{}},ma={},qt={exports:{}},a2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(a){function A(g,H){var G=g.length;g.push(H);a:for(;0<G;){var j=G-1>>>1,z=g[j];if(0<i(z,H))g[j]=H,g[G]=z,G=j;else break a}}function n(g){return g.length===0?null:g[0]}function e(g){if(g.length===0)return null;var H=g[0],G=g.pop();if(G!==H){g[0]=G;a:for(var j=0,z=g.length,qn=z>>>1;j<qn;){var TA=2*(j+1)-1,mi=g[TA],KA=TA+1,ae=g[KA];if(0>i(mi,G))KA<z&&0>i(ae,mi)?(g[j]=ae,g[KA]=G,j=KA):(g[j]=mi,g[TA]=G,j=TA);else if(KA<z&&0>i(ae,G))g[j]=ae,g[KA]=G,j=KA;else break a}}return H}function i(g,H){var G=g.sortIndex-H.sortIndex;return G!==0?G:g.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var I=performance;a.unstable_now=function(){return I.now()}}else{var t=Date,s=t.now();a.unstable_now=function(){return t.now()-s}}var r=[],u=[],R=1,N=null,l=3,m=!1,P=!1,D=!1,c=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function o(g){for(var H=n(u);H!==null;){if(H.callback===null)e(u);else if(H.startTime<=g)e(u),H.sortIndex=H.expirationTime,A(r,H);else break;H=n(u)}}function T(g){if(D=!1,o(g),!P)if(n(r)!==null)P=!0,Ti(M);else{var H=n(u);H!==null&&Ki(T,H.startTime-g)}}function M(g,H){P=!1,D&&(D=!1,E(d),d=-1),m=!0;var G=l;try{for(o(H),N=n(r);N!==null&&(!(N.expirationTime>H)||g&&!da());){var j=N.callback;if(typeof j=="function"){N.callback=null,l=N.priorityLevel;var z=j(N.expirationTime<=H);H=a.unstable_now(),typeof z=="function"?N.callback=z:N===n(r)&&e(r),o(H)}else e(r);N=n(r)}if(N!==null)var qn=!0;else{var TA=n(u);TA!==null&&Ki(T,TA.startTime-H),qn=!1}return qn}finally{N=null,l=G,m=!1}}var B=!1,U=null,d=-1,V=5,L=-1;function da(){return!(a.unstable_now()-L<V)}function rn(){if(U!==null){var g=a.unstable_now();L=g;var H=!0;try{H=U(!0,g)}finally{H?Sn():(B=!1,U=null)}}else B=!1}var Sn;if(typeof S=="function")Sn=function(){S(rn)};else if(typeof MessageChannel<"u"){var L1=new MessageChannel,ar=L1.port2;L1.port1.onmessage=rn,Sn=function(){ar.postMessage(null)}}else Sn=function(){c(rn,0)};function Ti(g){U=g,B||(B=!0,Sn())}function Ki(g,H){d=c(function(){g(a.unstable_now())},H)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(g){g.callback=null},a.unstable_continueExecution=function(){P||m||(P=!0,Ti(M))},a.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<g?Math.floor(1e3/g):5},a.unstable_getCurrentPriorityLevel=function(){return l},a.unstable_getFirstCallbackNode=function(){return n(r)},a.unstable_next=function(g){switch(l){case 1:case 2:case 3:var H=3;break;default:H=l}var G=l;l=H;try{return g()}finally{l=G}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(g,H){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var G=l;l=g;try{return H()}finally{l=G}},a.unstable_scheduleCallback=function(g,H,G){var j=a.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?j+G:j):G=j,g){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=G+z,g={id:R++,callback:H,priorityLevel:g,startTime:G,expirationTime:z,sortIndex:-1},G>j?(g.sortIndex=G,A(u,g),n(r)===null&&g===n(u)&&(D?(E(d),d=-1):D=!0,Ki(T,G-j))):(g.sortIndex=z,A(r,g),P||m||(P=!0,Ti(M))),g},a.unstable_shouldYield=da,a.unstable_wrapCallback=function(g){var H=l;return function(){var G=l;l=H;try{return g.apply(this,arguments)}finally{l=G}}}})(a2);qt.exports=a2;var Mr=qt.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gr=La,Ka=Mr;function K(a){for(var A="https://reactjs.org/docs/error-decoder.html?invariant="+a,n=1;n<arguments.length;n++)A+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+a+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A2=new Set,Ln={};function fA(a,A){$A(a,A),$A(a+"Capture",A)}function $A(a,A){for(Ln[a]=A,a=0;a<A.length;a++)A2.add(A[a])}var wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wi=Object.prototype.hasOwnProperty,Br=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J1={},b1={};function Ur(a){return wi.call(b1,a)?!0:wi.call(J1,a)?!1:Br.test(a)?b1[a]=!0:(J1[a]=!0,!1)}function dr(a,A,n,e){if(n!==null&&n.type===0)return!1;switch(typeof A){case"function":case"symbol":return!0;case"boolean":return e?!1:n!==null?!n.acceptsBooleans:(a=a.toLowerCase().slice(0,5),a!=="data-"&&a!=="aria-");default:return!1}}function Hr(a,A,n,e){if(A===null||typeof A>"u"||dr(a,A,n,e))return!0;if(e)return!1;if(n!==null)switch(n.type){case 3:return!A;case 4:return A===!1;case 5:return isNaN(A);case 6:return isNaN(A)||1>A}return!1}function ra(a,A,n,e,i,I,t){this.acceptsBooleans=A===2||A===3||A===4,this.attributeName=e,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=a,this.type=A,this.sanitizeURL=I,this.removeEmptyString=t}var aa={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){aa[a]=new ra(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var A=a[0];aa[A]=new ra(A,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){aa[a]=new ra(a,2,!1,a.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){aa[a]=new ra(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){aa[a]=new ra(a,3,!1,a.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(a){aa[a]=new ra(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){aa[a]=new ra(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){aa[a]=new ra(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){aa[a]=new ra(a,5,!1,a.toLowerCase(),null,!1,!1)});var yI=/[\-:]([a-z])/g;function vI(a){return a[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var A=a.replace(yI,vI);aa[A]=new ra(A,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var A=a.replace(yI,vI);aa[A]=new ra(A,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var A=a.replace(yI,vI);aa[A]=new ra(A,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){aa[a]=new ra(a,1,!1,a.toLowerCase(),null,!1,!1)});aa.xlinkHref=new ra("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){aa[a]=new ra(a,1,!1,a.toLowerCase(),null,!0,!0)});function VI(a,A,n,e){var i=aa.hasOwnProperty(A)?aa[A]:null;(i!==null?i.type!==0:e||!(2<A.length)||A[0]!=="o"&&A[0]!=="O"||A[1]!=="n"&&A[1]!=="N")&&(Hr(A,n,i,e)&&(n=null),e||i===null?Ur(A)&&(n===null?a.removeAttribute(A):a.setAttribute(A,""+n)):i.mustUseProperty?a[i.propertyName]=n===null?i.type===3?!1:"":n:(A=i.attributeName,e=i.attributeNamespace,n===null?a.removeAttribute(A):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,e?a.setAttributeNS(e,A,n):a.setAttribute(A,n))))}var za=gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),cA=Symbol.for("react.portal"),YA=Symbol.for("react.fragment"),jI=Symbol.for("react.strict_mode"),Zi=Symbol.for("react.profiler"),n2=Symbol.for("react.provider"),e2=Symbol.for("react.context"),wI=Symbol.for("react.forward_ref"),xi=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),ZI=Symbol.for("react.memo"),$a=Symbol.for("react.lazy"),i2=Symbol.for("react.offscreen"),C1=Symbol.iterator;function un(a){return a===null||typeof a!="object"?null:(a=C1&&a[C1]||a["@@iterator"],typeof a=="function"?a:null)}var y=Object.assign,Di;function mn(a){if(Di===void 0)try{throw Error()}catch(n){var A=n.stack.trim().match(/\n( *(at )?)/);Di=A&&A[1]||""}return`
`+Di+a}var ki=!1;function Mi(a,A){if(!a||ki)return"";ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(A)if(A=function(){throw Error()},Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(u){var e=u}Reflect.construct(a,[],A)}else{try{A.call()}catch(u){e=u}a.call(A.prototype)}else{try{throw Error()}catch(u){e=u}a()}}catch(u){if(u&&e&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),I=e.stack.split(`
`),t=i.length-1,s=I.length-1;1<=t&&0<=s&&i[t]!==I[s];)s--;for(;1<=t&&0<=s;t--,s--)if(i[t]!==I[s]){if(t!==1||s!==1)do if(t--,s--,0>s||i[t]!==I[s]){var r=`
`+i[t].replace(" at new "," at ");return a.displayName&&r.includes("<anonymous>")&&(r=r.replace("<anonymous>",a.displayName)),r}while(1<=t&&0<=s);break}}}finally{ki=!1,Error.prepareStackTrace=n}return(a=a?a.displayName||a.name:"")?mn(a):""}function Gr(a){switch(a.tag){case 5:return mn(a.type);case 16:return mn("Lazy");case 13:return mn("Suspense");case 19:return mn("SuspenseList");case 0:case 2:case 15:return a=Mi(a.type,!1),a;case 11:return a=Mi(a.type.render,!1),a;case 1:return a=Mi(a.type,!0),a;default:return""}}function zi(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case YA:return"Fragment";case cA:return"Portal";case Zi:return"Profiler";case jI:return"StrictMode";case xi:return"Suspense";case _i:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case e2:return(a.displayName||"Context")+".Consumer";case n2:return(a._context.displayName||"Context")+".Provider";case wI:var A=a.render;return a=a.displayName,a||(a=A.displayName||A.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case ZI:return A=a.displayName||null,A!==null?A:zi(a.type)||"Memo";case $a:A=a._payload,a=a._init;try{return zi(a(A))}catch{}}return null}function Or(a){var A=a.type;switch(a.tag){case 24:return"Cache";case 9:return(A.displayName||"Context")+".Consumer";case 10:return(A._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=A.render,a=a.displayName||a.name||"",A.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return A;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zi(A);case 8:return A===jI?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A}return null}function EA(a){switch(typeof a){case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function I2(a){var A=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(A==="checkbox"||A==="radio")}function fr(a){var A=I2(a)?"checked":"value",n=Object.getOwnPropertyDescriptor(a.constructor.prototype,A),e=""+a[A];if(!a.hasOwnProperty(A)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,I=n.set;return Object.defineProperty(a,A,{configurable:!0,get:function(){return i.call(this)},set:function(t){e=""+t,I.call(this,t)}}),Object.defineProperty(a,A,{enumerable:n.enumerable}),{getValue:function(){return e},setValue:function(t){e=""+t},stopTracking:function(){a._valueTracker=null,delete a[A]}}}}function ee(a){a._valueTracker||(a._valueTracker=fr(a))}function t2(a){if(!a)return!1;var A=a._valueTracker;if(!A)return!0;var n=A.getValue(),e="";return a&&(e=I2(a)?a.checked?"true":"false":a.value),a=e,a!==n?(A.setValue(a),!0):!1}function fe(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}function Qi(a,A){var n=A.checked;return y({},A,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??a._wrapperState.initialChecked})}function W1(a,A){var n=A.defaultValue==null?"":A.defaultValue,e=A.checked!=null?A.checked:A.defaultChecked;n=EA(A.value!=null?A.value:n),a._wrapperState={initialChecked:e,initialValue:n,controlled:A.type==="checkbox"||A.type==="radio"?A.checked!=null:A.value!=null}}function s2(a,A){A=A.checked,A!=null&&VI(a,"checked",A,!1)}function $i(a,A){s2(a,A);var n=EA(A.value),e=A.type;if(n!=null)e==="number"?(n===0&&a.value===""||a.value!=n)&&(a.value=""+n):a.value!==""+n&&(a.value=""+n);else if(e==="submit"||e==="reset"){a.removeAttribute("value");return}A.hasOwnProperty("value")?Xi(a,A.type,n):A.hasOwnProperty("defaultValue")&&Xi(a,A.type,EA(A.defaultValue)),A.checked==null&&A.defaultChecked!=null&&(a.defaultChecked=!!A.defaultChecked)}function h1(a,A,n){if(A.hasOwnProperty("value")||A.hasOwnProperty("defaultValue")){var e=A.type;if(!(e!=="submit"&&e!=="reset"||A.value!==void 0&&A.value!==null))return;A=""+a._wrapperState.initialValue,n||A===a.value||(a.value=A),a.defaultValue=A}n=a.name,n!==""&&(a.name=""),a.defaultChecked=!!a._wrapperState.initialChecked,n!==""&&(a.name=n)}function Xi(a,A,n){(A!=="number"||fe(a.ownerDocument)!==a)&&(n==null?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+n&&(a.defaultValue=""+n))}var Pn=Array.isArray;function wA(a,A,n,e){if(a=a.options,A){A={};for(var i=0;i<n.length;i++)A["$"+n[i]]=!0;for(n=0;n<a.length;n++)i=A.hasOwnProperty("$"+a[n].value),a[n].selected!==i&&(a[n].selected=i),i&&e&&(a[n].defaultSelected=!0)}else{for(n=""+EA(n),A=null,i=0;i<a.length;i++){if(a[i].value===n){a[i].selected=!0,e&&(a[i].defaultSelected=!0);return}A!==null||a[i].disabled||(A=a[i])}A!==null&&(A.selected=!0)}}function qi(a,A){if(A.dangerouslySetInnerHTML!=null)throw Error(K(91));return y({},A,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function F1(a,A){var n=A.value;if(n==null){if(n=A.children,A=A.defaultValue,n!=null){if(A!=null)throw Error(K(92));if(Pn(n)){if(1<n.length)throw Error(K(93));n=n[0]}A=n}A==null&&(A=""),n=A}a._wrapperState={initialValue:EA(n)}}function r2(a,A){var n=EA(A.value),e=EA(A.defaultValue);n!=null&&(n=""+n,n!==a.value&&(a.value=n),A.defaultValue==null&&a.defaultValue!==n&&(a.defaultValue=n)),e!=null&&(a.defaultValue=""+e)}function y1(a){var A=a.textContent;A===a._wrapperState.initialValue&&A!==""&&A!==null&&(a.value=A)}function S2(a){switch(a){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aI(a,A){return a==null||a==="http://www.w3.org/1999/xhtml"?S2(A):a==="http://www.w3.org/2000/svg"&&A==="foreignObject"?"http://www.w3.org/1999/xhtml":a}var ie,u2=function(a){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(A,n,e,i){MSApp.execUnsafeLocalFunction(function(){return a(A,n,e,i)})}:a}(function(a,A){if(a.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in a)a.innerHTML=A;else{for(ie=ie||document.createElement("div"),ie.innerHTML="<svg>"+A.valueOf().toString()+"</svg>",A=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;A.firstChild;)a.appendChild(A.firstChild)}});function pn(a,A){if(A){var n=a.firstChild;if(n&&n===a.lastChild&&n.nodeType===3){n.nodeValue=A;return}}a.textContent=A}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lr=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(a){Lr.forEach(function(A){A=A+a.charAt(0).toUpperCase()+a.substring(1),Mn[A]=Mn[a]})});function E2(a,A,n){return A==null||typeof A=="boolean"||A===""?"":n||typeof A!="number"||A===0||Mn.hasOwnProperty(a)&&Mn[a]?(""+A).trim():A+"px"}function o2(a,A){a=a.style;for(var n in A)if(A.hasOwnProperty(n)){var e=n.indexOf("--")===0,i=E2(n,A[n],e);n==="float"&&(n="cssFloat"),e?a.setProperty(n,i):a[n]=i}}var pr=y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function AI(a,A){if(A){if(pr[a]&&(A.children!=null||A.dangerouslySetInnerHTML!=null))throw Error(K(137,a));if(A.dangerouslySetInnerHTML!=null){if(A.children!=null)throw Error(K(60));if(typeof A.dangerouslySetInnerHTML!="object"||!("__html"in A.dangerouslySetInnerHTML))throw Error(K(61))}if(A.style!=null&&typeof A.style!="object")throw Error(K(62))}}function nI(a,A){if(a.indexOf("-")===-1)return typeof A.is=="string";switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eI=null;function xI(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var iI=null,ZA=null,xA=null;function v1(a){if(a=$n(a)){if(typeof iI!="function")throw Error(K(280));var A=a.stateNode;A&&(A=Ii(A),iI(a.stateNode,a.type,A))}}function l2(a){ZA?xA?xA.push(a):xA=[a]:ZA=a}function N2(){if(ZA){var a=ZA,A=xA;if(xA=ZA=null,v1(a),A)for(a=0;a<A.length;a++)v1(A[a])}}function R2(a,A){return a(A)}function T2(){}var gi=!1;function K2(a,A,n){if(gi)return a(A,n);gi=!0;try{return R2(a,A,n)}finally{gi=!1,(ZA!==null||xA!==null)&&(T2(),N2())}}function cn(a,A){var n=a.stateNode;if(n===null)return null;var e=Ii(n);if(e===null)return null;n=e[A];a:switch(A){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(a=a.type,e=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!e;break a;default:a=!1}if(a)return null;if(n&&typeof n!="function")throw Error(K(231,A,typeof n));return n}var II=!1;if(wa)try{var En={};Object.defineProperty(En,"passive",{get:function(){II=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{II=!1}function cr(a,A,n,e,i,I,t,s,r){var u=Array.prototype.slice.call(arguments,3);try{A.apply(n,u)}catch(R){this.onError(R)}}var gn=!1,Le=null,pe=!1,tI=null,Yr={onError:function(a){gn=!0,Le=a}};function Jr(a,A,n,e,i,I,t,s,r){gn=!1,Le=null,cr.apply(Yr,arguments)}function br(a,A,n,e,i,I,t,s,r){if(Jr.apply(this,arguments),gn){if(gn){var u=Le;gn=!1,Le=null}else throw Error(K(198));pe||(pe=!0,tI=u)}}function LA(a){var A=a,n=a;if(a.alternate)for(;A.return;)A=A.return;else{a=A;do A=a,A.flags&4098&&(n=A.return),a=A.return;while(a)}return A.tag===3?n:null}function m2(a){if(a.tag===13){var A=a.memoizedState;if(A===null&&(a=a.alternate,a!==null&&(A=a.memoizedState)),A!==null)return A.dehydrated}return null}function V1(a){if(LA(a)!==a)throw Error(K(188))}function Cr(a){var A=a.alternate;if(!A){if(A=LA(a),A===null)throw Error(K(188));return A!==a?null:a}for(var n=a,e=A;;){var i=n.return;if(i===null)break;var I=i.alternate;if(I===null){if(e=i.return,e!==null){n=e;continue}break}if(i.child===I.child){for(I=i.child;I;){if(I===n)return V1(i),a;if(I===e)return V1(i),A;I=I.sibling}throw Error(K(188))}if(n.return!==e.return)n=i,e=I;else{for(var t=!1,s=i.child;s;){if(s===n){t=!0,n=i,e=I;break}if(s===e){t=!0,e=i,n=I;break}s=s.sibling}if(!t){for(s=I.child;s;){if(s===n){t=!0,n=I,e=i;break}if(s===e){t=!0,e=I,n=i;break}s=s.sibling}if(!t)throw Error(K(189))}}if(n.alternate!==e)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?a:A}function P2(a){return a=Cr(a),a!==null?D2(a):null}function D2(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var A=D2(a);if(A!==null)return A;a=a.sibling}return null}var k2=Ka.unstable_scheduleCallback,j1=Ka.unstable_cancelCallback,Wr=Ka.unstable_shouldYield,hr=Ka.unstable_requestPaint,w=Ka.unstable_now,Fr=Ka.unstable_getCurrentPriorityLevel,_I=Ka.unstable_ImmediatePriority,M2=Ka.unstable_UserBlockingPriority,ce=Ka.unstable_NormalPriority,yr=Ka.unstable_LowPriority,g2=Ka.unstable_IdlePriority,Ai=null,Wa=null;function vr(a){if(Wa&&typeof Wa.onCommitFiberRoot=="function")try{Wa.onCommitFiberRoot(Ai,a,void 0,(a.current.flags&128)===128)}catch{}}var pa=Math.clz32?Math.clz32:wr,Vr=Math.log,jr=Math.LN2;function wr(a){return a>>>=0,a===0?32:31-(Vr(a)/jr|0)|0}var Ie=64,te=4194304;function Dn(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Ye(a,A){var n=a.pendingLanes;if(n===0)return 0;var e=0,i=a.suspendedLanes,I=a.pingedLanes,t=n&268435455;if(t!==0){var s=t&~i;s!==0?e=Dn(s):(I&=t,I!==0&&(e=Dn(I)))}else t=n&~i,t!==0?e=Dn(t):I!==0&&(e=Dn(I));if(e===0)return 0;if(A!==0&&A!==e&&!(A&i)&&(i=e&-e,I=A&-A,i>=I||i===16&&(I&4194240)!==0))return A;if(e&4&&(e|=n&16),A=a.entangledLanes,A!==0)for(a=a.entanglements,A&=e;0<A;)n=31-pa(A),i=1<<n,e|=a[n],A&=~i;return e}function Zr(a,A){switch(a){case 1:case 2:case 4:return A+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xr(a,A){for(var n=a.suspendedLanes,e=a.pingedLanes,i=a.expirationTimes,I=a.pendingLanes;0<I;){var t=31-pa(I),s=1<<t,r=i[t];r===-1?(!(s&n)||s&e)&&(i[t]=Zr(s,A)):r<=A&&(a.expiredLanes|=s),I&=~s}}function sI(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function B2(){var a=Ie;return Ie<<=1,!(Ie&4194240)&&(Ie=64),a}function Bi(a){for(var A=[],n=0;31>n;n++)A.push(a);return A}function zn(a,A,n){a.pendingLanes|=A,A!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,A=31-pa(A),a[A]=n}function _r(a,A){var n=a.pendingLanes&~A;a.pendingLanes=A,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=A,a.mutableReadLanes&=A,a.entangledLanes&=A,A=a.entanglements;var e=a.eventTimes;for(a=a.expirationTimes;0<n;){var i=31-pa(n),I=1<<i;A[i]=0,e[i]=-1,a[i]=-1,n&=~I}}function zI(a,A){var n=a.entangledLanes|=A;for(a=a.entanglements;n;){var e=31-pa(n),i=1<<e;i&A|a[e]&A&&(a[e]|=A),n&=~i}}var Y=0;function U2(a){return a&=-a,1<a?4<a?a&268435455?16:536870912:4:1}var d2,QI,H2,G2,O2,rI=!1,se=[],eA=null,iA=null,IA=null,Yn=new Map,Jn=new Map,qa=[],zr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function w1(a,A){switch(a){case"focusin":case"focusout":eA=null;break;case"dragenter":case"dragleave":iA=null;break;case"mouseover":case"mouseout":IA=null;break;case"pointerover":case"pointerout":Yn.delete(A.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(A.pointerId)}}function on(a,A,n,e,i,I){return a===null||a.nativeEvent!==I?(a={blockedOn:A,domEventName:n,eventSystemFlags:e,nativeEvent:I,targetContainers:[i]},A!==null&&(A=$n(A),A!==null&&QI(A)),a):(a.eventSystemFlags|=e,A=a.targetContainers,i!==null&&A.indexOf(i)===-1&&A.push(i),a)}function Qr(a,A,n,e,i){switch(A){case"focusin":return eA=on(eA,a,A,n,e,i),!0;case"dragenter":return iA=on(iA,a,A,n,e,i),!0;case"mouseover":return IA=on(IA,a,A,n,e,i),!0;case"pointerover":var I=i.pointerId;return Yn.set(I,on(Yn.get(I)||null,a,A,n,e,i)),!0;case"gotpointercapture":return I=i.pointerId,Jn.set(I,on(Jn.get(I)||null,a,A,n,e,i)),!0}return!1}function f2(a){var A=DA(a.target);if(A!==null){var n=LA(A);if(n!==null){if(A=n.tag,A===13){if(A=m2(n),A!==null){a.blockedOn=A,O2(a.priority,function(){H2(n)});return}}else if(A===3&&n.stateNode.current.memoizedState.isDehydrated){a.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}a.blockedOn=null}function De(a){if(a.blockedOn!==null)return!1;for(var A=a.targetContainers;0<A.length;){var n=SI(a.domEventName,a.eventSystemFlags,A[0],a.nativeEvent);if(n===null){n=a.nativeEvent;var e=new n.constructor(n.type,n);eI=e,n.target.dispatchEvent(e),eI=null}else return A=$n(n),A!==null&&QI(A),a.blockedOn=n,!1;A.shift()}return!0}function Z1(a,A,n){De(a)&&n.delete(A)}function $r(){rI=!1,eA!==null&&De(eA)&&(eA=null),iA!==null&&De(iA)&&(iA=null),IA!==null&&De(IA)&&(IA=null),Yn.forEach(Z1),Jn.forEach(Z1)}function ln(a,A){a.blockedOn===A&&(a.blockedOn=null,rI||(rI=!0,Ka.unstable_scheduleCallback(Ka.unstable_NormalPriority,$r)))}function bn(a){function A(i){return ln(i,a)}if(0<se.length){ln(se[0],a);for(var n=1;n<se.length;n++){var e=se[n];e.blockedOn===a&&(e.blockedOn=null)}}for(eA!==null&&ln(eA,a),iA!==null&&ln(iA,a),IA!==null&&ln(IA,a),Yn.forEach(A),Jn.forEach(A),n=0;n<qa.length;n++)e=qa[n],e.blockedOn===a&&(e.blockedOn=null);for(;0<qa.length&&(n=qa[0],n.blockedOn===null);)f2(n),n.blockedOn===null&&qa.shift()}var _A=za.ReactCurrentBatchConfig,Je=!0;function Xr(a,A,n,e){var i=Y,I=_A.transition;_A.transition=null;try{Y=1,$I(a,A,n,e)}finally{Y=i,_A.transition=I}}function qr(a,A,n,e){var i=Y,I=_A.transition;_A.transition=null;try{Y=4,$I(a,A,n,e)}finally{Y=i,_A.transition=I}}function $I(a,A,n,e){if(Je){var i=SI(a,A,n,e);if(i===null)Yi(a,A,e,be,n),w1(a,e);else if(Qr(i,a,A,n,e))e.stopPropagation();else if(w1(a,e),A&4&&-1<zr.indexOf(a)){for(;i!==null;){var I=$n(i);if(I!==null&&d2(I),I=SI(a,A,n,e),I===null&&Yi(a,A,e,be,n),I===i)break;i=I}i!==null&&e.stopPropagation()}else Yi(a,A,e,null,n)}}var be=null;function SI(a,A,n,e){if(be=null,a=xI(e),a=DA(a),a!==null)if(A=LA(a),A===null)a=null;else if(n=A.tag,n===13){if(a=m2(A),a!==null)return a;a=null}else if(n===3){if(A.stateNode.current.memoizedState.isDehydrated)return A.tag===3?A.stateNode.containerInfo:null;a=null}else A!==a&&(a=null);return be=a,null}function L2(a){switch(a){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fr()){case _I:return 1;case M2:return 4;case ce:case yr:return 16;case g2:return 536870912;default:return 16}default:return 16}}var AA=null,XI=null,ke=null;function p2(){if(ke)return ke;var a,A=XI,n=A.length,e,i="value"in AA?AA.value:AA.textContent,I=i.length;for(a=0;a<n&&A[a]===i[a];a++);var t=n-a;for(e=1;e<=t&&A[n-e]===i[I-e];e++);return ke=i.slice(a,1<e?1-e:void 0)}function Me(a){var A=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&A===13&&(a=13)):a=A,a===10&&(a=13),32<=a||a===13?a:0}function re(){return!0}function x1(){return!1}function Pa(a){function A(n,e,i,I,t){this._reactName=n,this._targetInst=i,this.type=e,this.nativeEvent=I,this.target=t,this.currentTarget=null;for(var s in a)a.hasOwnProperty(s)&&(n=a[s],this[s]=n?n(I):I[s]);return this.isDefaultPrevented=(I.defaultPrevented!=null?I.defaultPrevented:I.returnValue===!1)?re:x1,this.isPropagationStopped=x1,this}return y(A.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=re)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=re)},persist:function(){},isPersistent:re}),A}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qI=Pa(tn),Qn=y({},tn,{view:0,detail:0}),a3=Pa(Qn),Ui,di,Nn,ni=y({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:a1,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Nn&&(Nn&&a.type==="mousemove"?(Ui=a.screenX-Nn.screenX,di=a.screenY-Nn.screenY):di=Ui=0,Nn=a),Ui)},movementY:function(a){return"movementY"in a?a.movementY:di}}),_1=Pa(ni),A3=y({},ni,{dataTransfer:0}),n3=Pa(A3),e3=y({},Qn,{relatedTarget:0}),Hi=Pa(e3),i3=y({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),I3=Pa(i3),t3=y({},tn,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),s3=Pa(t3),r3=y({},tn,{data:0}),z1=Pa(r3),S3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o3(a){var A=this.nativeEvent;return A.getModifierState?A.getModifierState(a):(a=E3[a])?!!A[a]:!1}function a1(){return o3}var l3=y({},Qn,{key:function(a){if(a.key){var A=S3[a.key]||a.key;if(A!=="Unidentified")return A}return a.type==="keypress"?(a=Me(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?u3[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:a1,charCode:function(a){return a.type==="keypress"?Me(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?Me(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),N3=Pa(l3),R3=y({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Q1=Pa(R3),T3=y({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:a1}),K3=Pa(T3),m3=y({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),P3=Pa(m3),D3=y({},ni,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),k3=Pa(D3),M3=[9,13,27,32],A1=wa&&"CompositionEvent"in window,Bn=null;wa&&"documentMode"in document&&(Bn=document.documentMode);var g3=wa&&"TextEvent"in window&&!Bn,c2=wa&&(!A1||Bn&&8<Bn&&11>=Bn),$1=" ",X1=!1;function Y2(a,A){switch(a){case"keyup":return M3.indexOf(A.keyCode)!==-1;case"keydown":return A.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J2(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var JA=!1;function B3(a,A){switch(a){case"compositionend":return J2(A);case"keypress":return A.which!==32?null:(X1=!0,$1);case"textInput":return a=A.data,a===$1&&X1?null:a;default:return null}}function U3(a,A){if(JA)return a==="compositionend"||!A1&&Y2(a,A)?(a=p2(),ke=XI=AA=null,JA=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(A.ctrlKey||A.altKey||A.metaKey)||A.ctrlKey&&A.altKey){if(A.char&&1<A.char.length)return A.char;if(A.which)return String.fromCharCode(A.which)}return null;case"compositionend":return c2&&A.locale!=="ko"?null:A.data;default:return null}}var d3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function q1(a){var A=a&&a.nodeName&&a.nodeName.toLowerCase();return A==="input"?!!d3[a.type]:A==="textarea"}function b2(a,A,n,e){l2(e),A=Ce(A,"onChange"),0<A.length&&(n=new qI("onChange","change",null,n,e),a.push({event:n,listeners:A}))}var Un=null,Cn=null;function H3(a){x2(a,0)}function ei(a){var A=WA(a);if(t2(A))return a}function G3(a,A){if(a==="change")return A}var C2=!1;if(wa){var Gi;if(wa){var Oi="oninput"in document;if(!Oi){var at=document.createElement("div");at.setAttribute("oninput","return;"),Oi=typeof at.oninput=="function"}Gi=Oi}else Gi=!1;C2=Gi&&(!document.documentMode||9<document.documentMode)}function At(){Un&&(Un.detachEvent("onpropertychange",W2),Cn=Un=null)}function W2(a){if(a.propertyName==="value"&&ei(Cn)){var A=[];b2(A,Cn,a,xI(a)),K2(H3,A)}}function O3(a,A,n){a==="focusin"?(At(),Un=A,Cn=n,Un.attachEvent("onpropertychange",W2)):a==="focusout"&&At()}function f3(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return ei(Cn)}function L3(a,A){if(a==="click")return ei(A)}function p3(a,A){if(a==="input"||a==="change")return ei(A)}function c3(a,A){return a===A&&(a!==0||1/a===1/A)||a!==a&&A!==A}var Ya=typeof Object.is=="function"?Object.is:c3;function Wn(a,A){if(Ya(a,A))return!0;if(typeof a!="object"||a===null||typeof A!="object"||A===null)return!1;var n=Object.keys(a),e=Object.keys(A);if(n.length!==e.length)return!1;for(e=0;e<n.length;e++){var i=n[e];if(!wi.call(A,i)||!Ya(a[i],A[i]))return!1}return!0}function nt(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function et(a,A){var n=nt(a);a=0;for(var e;n;){if(n.nodeType===3){if(e=a+n.textContent.length,a<=A&&e>=A)return{node:n,offset:A-a};a=e}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=nt(n)}}function h2(a,A){return a&&A?a===A?!0:a&&a.nodeType===3?!1:A&&A.nodeType===3?h2(a,A.parentNode):"contains"in a?a.contains(A):a.compareDocumentPosition?!!(a.compareDocumentPosition(A)&16):!1:!1}function F2(){for(var a=window,A=fe();A instanceof a.HTMLIFrameElement;){try{var n=typeof A.contentWindow.location.href=="string"}catch{n=!1}if(n)a=A.contentWindow;else break;A=fe(a.document)}return A}function n1(a){var A=a&&a.nodeName&&a.nodeName.toLowerCase();return A&&(A==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||A==="textarea"||a.contentEditable==="true")}function Y3(a){var A=F2(),n=a.focusedElem,e=a.selectionRange;if(A!==n&&n&&n.ownerDocument&&h2(n.ownerDocument.documentElement,n)){if(e!==null&&n1(n)){if(A=e.start,a=e.end,a===void 0&&(a=A),"selectionStart"in n)n.selectionStart=A,n.selectionEnd=Math.min(a,n.value.length);else if(a=(A=n.ownerDocument||document)&&A.defaultView||window,a.getSelection){a=a.getSelection();var i=n.textContent.length,I=Math.min(e.start,i);e=e.end===void 0?I:Math.min(e.end,i),!a.extend&&I>e&&(i=e,e=I,I=i),i=et(n,I);var t=et(n,e);i&&t&&(a.rangeCount!==1||a.anchorNode!==i.node||a.anchorOffset!==i.offset||a.focusNode!==t.node||a.focusOffset!==t.offset)&&(A=A.createRange(),A.setStart(i.node,i.offset),a.removeAllRanges(),I>e?(a.addRange(A),a.extend(t.node,t.offset)):(A.setEnd(t.node,t.offset),a.addRange(A)))}}for(A=[],a=n;a=a.parentNode;)a.nodeType===1&&A.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<A.length;n++)a=A[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var J3=wa&&"documentMode"in document&&11>=document.documentMode,bA=null,uI=null,dn=null,EI=!1;function it(a,A,n){var e=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;EI||bA==null||bA!==fe(e)||(e=bA,"selectionStart"in e&&n1(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),dn&&Wn(dn,e)||(dn=e,e=Ce(uI,"onSelect"),0<e.length&&(A=new qI("onSelect","select",null,A,n),a.push({event:A,listeners:e}),A.target=bA)))}function Se(a,A){var n={};return n[a.toLowerCase()]=A.toLowerCase(),n["Webkit"+a]="webkit"+A,n["Moz"+a]="moz"+A,n}var CA={animationend:Se("Animation","AnimationEnd"),animationiteration:Se("Animation","AnimationIteration"),animationstart:Se("Animation","AnimationStart"),transitionend:Se("Transition","TransitionEnd")},fi={},y2={};wa&&(y2=document.createElement("div").style,"AnimationEvent"in window||(delete CA.animationend.animation,delete CA.animationiteration.animation,delete CA.animationstart.animation),"TransitionEvent"in window||delete CA.transitionend.transition);function ii(a){if(fi[a])return fi[a];if(!CA[a])return a;var A=CA[a],n;for(n in A)if(A.hasOwnProperty(n)&&n in y2)return fi[a]=A[n];return a}var v2=ii("animationend"),V2=ii("animationiteration"),j2=ii("animationstart"),w2=ii("transitionend"),Z2=new Map,It="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lA(a,A){Z2.set(a,A),fA(A,[a])}for(var Li=0;Li<It.length;Li++){var pi=It[Li],b3=pi.toLowerCase(),C3=pi[0].toUpperCase()+pi.slice(1);lA(b3,"on"+C3)}lA(v2,"onAnimationEnd");lA(V2,"onAnimationIteration");lA(j2,"onAnimationStart");lA("dblclick","onDoubleClick");lA("focusin","onFocus");lA("focusout","onBlur");lA(w2,"onTransitionEnd");$A("onMouseEnter",["mouseout","mouseover"]);$A("onMouseLeave",["mouseout","mouseover"]);$A("onPointerEnter",["pointerout","pointerover"]);$A("onPointerLeave",["pointerout","pointerover"]);fA("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fA("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fA("onBeforeInput",["compositionend","keypress","textInput","paste"]);fA("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fA("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fA("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W3=new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));function tt(a,A,n){var e=a.type||"unknown-event";a.currentTarget=n,br(e,A,void 0,a),a.currentTarget=null}function x2(a,A){A=(A&4)!==0;for(var n=0;n<a.length;n++){var e=a[n],i=e.event;e=e.listeners;a:{var I=void 0;if(A)for(var t=e.length-1;0<=t;t--){var s=e[t],r=s.instance,u=s.currentTarget;if(s=s.listener,r!==I&&i.isPropagationStopped())break a;tt(i,s,u),I=r}else for(t=0;t<e.length;t++){if(s=e[t],r=s.instance,u=s.currentTarget,s=s.listener,r!==I&&i.isPropagationStopped())break a;tt(i,s,u),I=r}}}if(pe)throw a=tI,pe=!1,tI=null,a}function b(a,A){var n=A[TI];n===void 0&&(n=A[TI]=new Set);var e=a+"__bubble";n.has(e)||(_2(A,a,2,!1),n.add(e))}function ci(a,A,n){var e=0;A&&(e|=4),_2(n,a,e,A)}var ue="_reactListening"+Math.random().toString(36).slice(2);function hn(a){if(!a[ue]){a[ue]=!0,A2.forEach(function(n){n!=="selectionchange"&&(W3.has(n)||ci(n,!1,a),ci(n,!0,a))});var A=a.nodeType===9?a:a.ownerDocument;A===null||A[ue]||(A[ue]=!0,ci("selectionchange",!1,A))}}function _2(a,A,n,e){switch(L2(A)){case 1:var i=Xr;break;case 4:i=qr;break;default:i=$I}n=i.bind(null,A,n,a),i=void 0,!II||A!=="touchstart"&&A!=="touchmove"&&A!=="wheel"||(i=!0),e?i!==void 0?a.addEventListener(A,n,{capture:!0,passive:i}):a.addEventListener(A,n,!0):i!==void 0?a.addEventListener(A,n,{passive:i}):a.addEventListener(A,n,!1)}function Yi(a,A,n,e,i){var I=e;if(!(A&1)&&!(A&2)&&e!==null)a:for(;;){if(e===null)return;var t=e.tag;if(t===3||t===4){var s=e.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(t===4)for(t=e.return;t!==null;){var r=t.tag;if((r===3||r===4)&&(r=t.stateNode.containerInfo,r===i||r.nodeType===8&&r.parentNode===i))return;t=t.return}for(;s!==null;){if(t=DA(s),t===null)return;if(r=t.tag,r===5||r===6){e=I=t;continue a}s=s.parentNode}}e=e.return}K2(function(){var u=I,R=xI(n),N=[];a:{var l=Z2.get(a);if(l!==void 0){var m=qI,P=a;switch(a){case"keypress":if(Me(n)===0)break a;case"keydown":case"keyup":m=N3;break;case"focusin":P="focus",m=Hi;break;case"focusout":P="blur",m=Hi;break;case"beforeblur":case"afterblur":m=Hi;break;case"click":if(n.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=_1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=n3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=K3;break;case v2:case V2:case j2:m=I3;break;case w2:m=P3;break;case"scroll":m=a3;break;case"wheel":m=k3;break;case"copy":case"cut":case"paste":m=s3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Q1}var D=(A&4)!==0,c=!D&&a==="scroll",E=D?l!==null?l+"Capture":null:l;D=[];for(var S=u,o;S!==null;){o=S;var T=o.stateNode;if(o.tag===5&&T!==null&&(o=T,E!==null&&(T=cn(S,E),T!=null&&D.push(Fn(S,T,o)))),c)break;S=S.return}0<D.length&&(l=new m(l,P,null,n,R),N.push({event:l,listeners:D}))}}if(!(A&7)){a:{if(l=a==="mouseover"||a==="pointerover",m=a==="mouseout"||a==="pointerout",l&&n!==eI&&(P=n.relatedTarget||n.fromElement)&&(DA(P)||P[Za]))break a;if((m||l)&&(l=R.window===R?R:(l=R.ownerDocument)?l.defaultView||l.parentWindow:window,m?(P=n.relatedTarget||n.toElement,m=u,P=P?DA(P):null,P!==null&&(c=LA(P),P!==c||P.tag!==5&&P.tag!==6)&&(P=null)):(m=null,P=u),m!==P)){if(D=_1,T="onMouseLeave",E="onMouseEnter",S="mouse",(a==="pointerout"||a==="pointerover")&&(D=Q1,T="onPointerLeave",E="onPointerEnter",S="pointer"),c=m==null?l:WA(m),o=P==null?l:WA(P),l=new D(T,S+"leave",m,n,R),l.target=c,l.relatedTarget=o,T=null,DA(R)===u&&(D=new D(E,S+"enter",P,n,R),D.target=o,D.relatedTarget=c,T=D),c=T,m&&P)A:{for(D=m,E=P,S=0,o=D;o;o=pA(o))S++;for(o=0,T=E;T;T=pA(T))o++;for(;0<S-o;)D=pA(D),S--;for(;0<o-S;)E=pA(E),o--;for(;S--;){if(D===E||E!==null&&D===E.alternate)break A;D=pA(D),E=pA(E)}D=null}else D=null;m!==null&&st(N,l,m,D,!1),P!==null&&c!==null&&st(N,c,P,D,!0)}}a:{if(l=u?WA(u):window,m=l.nodeName&&l.nodeName.toLowerCase(),m==="select"||m==="input"&&l.type==="file")var M=G3;else if(q1(l))if(C2)M=p3;else{M=f3;var B=O3}else(m=l.nodeName)&&m.toLowerCase()==="input"&&(l.type==="checkbox"||l.type==="radio")&&(M=L3);if(M&&(M=M(a,u))){b2(N,M,n,R);break a}B&&B(a,l,u),a==="focusout"&&(B=l._wrapperState)&&B.controlled&&l.type==="number"&&Xi(l,"number",l.value)}switch(B=u?WA(u):window,a){case"focusin":(q1(B)||B.contentEditable==="true")&&(bA=B,uI=u,dn=null);break;case"focusout":dn=uI=bA=null;break;case"mousedown":EI=!0;break;case"contextmenu":case"mouseup":case"dragend":EI=!1,it(N,n,R);break;case"selectionchange":if(J3)break;case"keydown":case"keyup":it(N,n,R)}var U;if(A1)a:{switch(a){case"compositionstart":var d="onCompositionStart";break a;case"compositionend":d="onCompositionEnd";break a;case"compositionupdate":d="onCompositionUpdate";break a}d=void 0}else JA?Y2(a,n)&&(d="onCompositionEnd"):a==="keydown"&&n.keyCode===229&&(d="onCompositionStart");d&&(c2&&n.locale!=="ko"&&(JA||d!=="onCompositionStart"?d==="onCompositionEnd"&&JA&&(U=p2()):(AA=R,XI="value"in AA?AA.value:AA.textContent,JA=!0)),B=Ce(u,d),0<B.length&&(d=new z1(d,a,null,n,R),N.push({event:d,listeners:B}),U?d.data=U:(U=J2(n),U!==null&&(d.data=U)))),(U=g3?B3(a,n):U3(a,n))&&(u=Ce(u,"onBeforeInput"),0<u.length&&(R=new z1("onBeforeInput","beforeinput",null,n,R),N.push({event:R,listeners:u}),R.data=U))}x2(N,A)})}function Fn(a,A,n){return{instance:a,listener:A,currentTarget:n}}function Ce(a,A){for(var n=A+"Capture",e=[];a!==null;){var i=a,I=i.stateNode;i.tag===5&&I!==null&&(i=I,I=cn(a,n),I!=null&&e.unshift(Fn(a,I,i)),I=cn(a,A),I!=null&&e.push(Fn(a,I,i))),a=a.return}return e}function pA(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5);return a||null}function st(a,A,n,e,i){for(var I=A._reactName,t=[];n!==null&&n!==e;){var s=n,r=s.alternate,u=s.stateNode;if(r!==null&&r===e)break;s.tag===5&&u!==null&&(s=u,i?(r=cn(n,I),r!=null&&t.unshift(Fn(n,r,s))):i||(r=cn(n,I),r!=null&&t.push(Fn(n,r,s)))),n=n.return}t.length!==0&&a.push({event:A,listeners:t})}var h3=/\r\n?/g,F3=/\u0000|\uFFFD/g;function rt(a){return(typeof a=="string"?a:""+a).replace(h3,`
`).replace(F3,"")}function Ee(a,A,n){if(A=rt(A),rt(a)!==A&&n)throw Error(K(425))}function We(){}var oI=null,lI=null;function NI(a,A){return a==="textarea"||a==="noscript"||typeof A.children=="string"||typeof A.children=="number"||typeof A.dangerouslySetInnerHTML=="object"&&A.dangerouslySetInnerHTML!==null&&A.dangerouslySetInnerHTML.__html!=null}var RI=typeof setTimeout=="function"?setTimeout:void 0,y3=typeof clearTimeout=="function"?clearTimeout:void 0,St=typeof Promise=="function"?Promise:void 0,v3=typeof queueMicrotask=="function"?queueMicrotask:typeof St<"u"?function(a){return St.resolve(null).then(a).catch(V3)}:RI;function V3(a){setTimeout(function(){throw a})}function Ji(a,A){var n=A,e=0;do{var i=n.nextSibling;if(a.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0){a.removeChild(i),bn(A);return}e--}else n!=="$"&&n!=="$?"&&n!=="$!"||e++;n=i}while(n);bn(A)}function tA(a){for(;a!=null;a=a.nextSibling){var A=a.nodeType;if(A===1||A===3)break;if(A===8){if(A=a.data,A==="$"||A==="$!"||A==="$?")break;if(A==="/$")return null}}return a}function ut(a){a=a.previousSibling;for(var A=0;a;){if(a.nodeType===8){var n=a.data;if(n==="$"||n==="$!"||n==="$?"){if(A===0)return a;A--}else n==="/$"&&A++}a=a.previousSibling}return null}var sn=Math.random().toString(36).slice(2),Ca="__reactFiber$"+sn,yn="__reactProps$"+sn,Za="__reactContainer$"+sn,TI="__reactEvents$"+sn,j3="__reactListeners$"+sn,w3="__reactHandles$"+sn;function DA(a){var A=a[Ca];if(A)return A;for(var n=a.parentNode;n;){if(A=n[Za]||n[Ca]){if(n=A.alternate,A.child!==null||n!==null&&n.child!==null)for(a=ut(a);a!==null;){if(n=a[Ca])return n;a=ut(a)}return A}a=n,n=a.parentNode}return null}function $n(a){return a=a[Ca]||a[Za],!a||a.tag!==5&&a.tag!==6&&a.tag!==13&&a.tag!==3?null:a}function WA(a){if(a.tag===5||a.tag===6)return a.stateNode;throw Error(K(33))}function Ii(a){return a[yn]||null}var KI=[],hA=-1;function NA(a){return{current:a}}function C(a){0>hA||(a.current=KI[hA],KI[hA]=null,hA--)}function J(a,A){hA++,KI[hA]=a.current,a.current=A}var oA={},ia=NA(oA),Ea=NA(!1),UA=oA;function XA(a,A){var n=a.type.contextTypes;if(!n)return oA;var e=a.stateNode;if(e&&e.__reactInternalMemoizedUnmaskedChildContext===A)return e.__reactInternalMemoizedMaskedChildContext;var i={},I;for(I in n)i[I]=A[I];return e&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=A,a.__reactInternalMemoizedMaskedChildContext=i),i}function oa(a){return a=a.childContextTypes,a!=null}function he(){C(Ea),C(ia)}function Et(a,A,n){if(ia.current!==oA)throw Error(K(168));J(ia,A),J(Ea,n)}function z2(a,A,n){var e=a.stateNode;if(A=A.childContextTypes,typeof e.getChildContext!="function")return n;e=e.getChildContext();for(var i in e)if(!(i in A))throw Error(K(108,Or(a)||"Unknown",i));return y({},n,e)}function Fe(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||oA,UA=ia.current,J(ia,a),J(Ea,Ea.current),!0}function ot(a,A,n){var e=a.stateNode;if(!e)throw Error(K(169));n?(a=z2(a,A,UA),e.__reactInternalMemoizedMergedChildContext=a,C(Ea),C(ia),J(ia,a)):C(Ea),J(Ea,n)}var ya=null,ti=!1,bi=!1;function Q2(a){ya===null?ya=[a]:ya.push(a)}function Z3(a){ti=!0,Q2(a)}function RA(){if(!bi&&ya!==null){bi=!0;var a=0,A=Y;try{var n=ya;for(Y=1;a<n.length;a++){var e=n[a];do e=e(!0);while(e!==null)}ya=null,ti=!1}catch(i){throw ya!==null&&(ya=ya.slice(a+1)),k2(_I,RA),i}finally{Y=A,bi=!1}}return null}var FA=[],yA=0,ye=null,ve=0,Da=[],ka=0,dA=null,va=1,Va="";function mA(a,A){FA[yA++]=ve,FA[yA++]=ye,ye=a,ve=A}function $2(a,A,n){Da[ka++]=va,Da[ka++]=Va,Da[ka++]=dA,dA=a;var e=va;a=Va;var i=32-pa(e)-1;e&=~(1<<i),n+=1;var I=32-pa(A)+i;if(30<I){var t=i-i%5;I=(e&(1<<t)-1).toString(32),e>>=t,i-=t,va=1<<32-pa(A)+i|n<<i|e,Va=I+a}else va=1<<I|n<<i|e,Va=a}function e1(a){a.return!==null&&(mA(a,1),$2(a,1,0))}function i1(a){for(;a===ye;)ye=FA[--yA],FA[yA]=null,ve=FA[--yA],FA[yA]=null;for(;a===dA;)dA=Da[--ka],Da[ka]=null,Va=Da[--ka],Da[ka]=null,va=Da[--ka],Da[ka]=null}var Ta=null,Ra=null,W=!1,fa=null;function X2(a,A){var n=Ma(5,null,null,0);n.elementType="DELETED",n.stateNode=A,n.return=a,A=a.deletions,A===null?(a.deletions=[n],a.flags|=16):A.push(n)}function lt(a,A){switch(a.tag){case 5:var n=a.type;return A=A.nodeType!==1||n.toLowerCase()!==A.nodeName.toLowerCase()?null:A,A!==null?(a.stateNode=A,Ta=a,Ra=tA(A.firstChild),!0):!1;case 6:return A=a.pendingProps===""||A.nodeType!==3?null:A,A!==null?(a.stateNode=A,Ta=a,Ra=null,!0):!1;case 13:return A=A.nodeType!==8?null:A,A!==null?(n=dA!==null?{id:va,overflow:Va}:null,a.memoizedState={dehydrated:A,treeContext:n,retryLane:1073741824},n=Ma(18,null,null,0),n.stateNode=A,n.return=a,a.child=n,Ta=a,Ra=null,!0):!1;default:return!1}}function mI(a){return(a.mode&1)!==0&&(a.flags&128)===0}function PI(a){if(W){var A=Ra;if(A){var n=A;if(!lt(a,A)){if(mI(a))throw Error(K(418));A=tA(n.nextSibling);var e=Ta;A&&lt(a,A)?X2(e,n):(a.flags=a.flags&-4097|2,W=!1,Ta=a)}}else{if(mI(a))throw Error(K(418));a.flags=a.flags&-4097|2,W=!1,Ta=a}}}function Nt(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;Ta=a}function oe(a){if(a!==Ta)return!1;if(!W)return Nt(a),W=!0,!1;var A;if((A=a.tag!==3)&&!(A=a.tag!==5)&&(A=a.type,A=A!=="head"&&A!=="body"&&!NI(a.type,a.memoizedProps)),A&&(A=Ra)){if(mI(a))throw q2(),Error(K(418));for(;A;)X2(a,A),A=tA(A.nextSibling)}if(Nt(a),a.tag===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(K(317));a:{for(a=a.nextSibling,A=0;a;){if(a.nodeType===8){var n=a.data;if(n==="/$"){if(A===0){Ra=tA(a.nextSibling);break a}A--}else n!=="$"&&n!=="$!"&&n!=="$?"||A++}a=a.nextSibling}Ra=null}}else Ra=Ta?tA(a.stateNode.nextSibling):null;return!0}function q2(){for(var a=Ra;a;)a=tA(a.nextSibling)}function qA(){Ra=Ta=null,W=!1}function I1(a){fa===null?fa=[a]:fa.push(a)}var x3=za.ReactCurrentBatchConfig;function Rn(a,A,n){if(a=n.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var e=n.stateNode}if(!e)throw Error(K(147,a));var i=e,I=""+a;return A!==null&&A.ref!==null&&typeof A.ref=="function"&&A.ref._stringRef===I?A.ref:(A=function(t){var s=i.refs;t===null?delete s[I]:s[I]=t},A._stringRef=I,A)}if(typeof a!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,a))}return a}function le(a,A){throw a=Object.prototype.toString.call(A),Error(K(31,a==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":a))}function Rt(a){var A=a._init;return A(a._payload)}function as(a){function A(E,S){if(a){var o=E.deletions;o===null?(E.deletions=[S],E.flags|=16):o.push(S)}}function n(E,S){if(!a)return null;for(;S!==null;)A(E,S),S=S.sibling;return null}function e(E,S){for(E=new Map;S!==null;)S.key!==null?E.set(S.key,S):E.set(S.index,S),S=S.sibling;return E}function i(E,S){return E=uA(E,S),E.index=0,E.sibling=null,E}function I(E,S,o){return E.index=o,a?(o=E.alternate,o!==null?(o=o.index,o<S?(E.flags|=2,S):o):(E.flags|=2,S)):(E.flags|=1048576,S)}function t(E){return a&&E.alternate===null&&(E.flags|=2),E}function s(E,S,o,T){return S===null||S.tag!==6?(S=Vi(o,E.mode,T),S.return=E,S):(S=i(S,o),S.return=E,S)}function r(E,S,o,T){var M=o.type;return M===YA?R(E,S,o.props.children,T,o.key):S!==null&&(S.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$a&&Rt(M)===S.type)?(T=i(S,o.props),T.ref=Rn(E,S,o),T.return=E,T):(T=Oe(o.type,o.key,o.props,null,E.mode,T),T.ref=Rn(E,S,o),T.return=E,T)}function u(E,S,o,T){return S===null||S.tag!==4||S.stateNode.containerInfo!==o.containerInfo||S.stateNode.implementation!==o.implementation?(S=ji(o,E.mode,T),S.return=E,S):(S=i(S,o.children||[]),S.return=E,S)}function R(E,S,o,T,M){return S===null||S.tag!==7?(S=BA(o,E.mode,T,M),S.return=E,S):(S=i(S,o),S.return=E,S)}function N(E,S,o){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Vi(""+S,E.mode,o),S.return=E,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ne:return o=Oe(S.type,S.key,S.props,null,E.mode,o),o.ref=Rn(E,null,S),o.return=E,o;case cA:return S=ji(S,E.mode,o),S.return=E,S;case $a:var T=S._init;return N(E,T(S._payload),o)}if(Pn(S)||un(S))return S=BA(S,E.mode,o,null),S.return=E,S;le(E,S)}return null}function l(E,S,o,T){var M=S!==null?S.key:null;if(typeof o=="string"&&o!==""||typeof o=="number")return M!==null?null:s(E,S,""+o,T);if(typeof o=="object"&&o!==null){switch(o.$$typeof){case ne:return o.key===M?r(E,S,o,T):null;case cA:return o.key===M?u(E,S,o,T):null;case $a:return M=o._init,l(E,S,M(o._payload),T)}if(Pn(o)||un(o))return M!==null?null:R(E,S,o,T,null);le(E,o)}return null}function m(E,S,o,T,M){if(typeof T=="string"&&T!==""||typeof T=="number")return E=E.get(o)||null,s(S,E,""+T,M);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ne:return E=E.get(T.key===null?o:T.key)||null,r(S,E,T,M);case cA:return E=E.get(T.key===null?o:T.key)||null,u(S,E,T,M);case $a:var B=T._init;return m(E,S,o,B(T._payload),M)}if(Pn(T)||un(T))return E=E.get(o)||null,R(S,E,T,M,null);le(S,T)}return null}function P(E,S,o,T){for(var M=null,B=null,U=S,d=S=0,V=null;U!==null&&d<o.length;d++){U.index>d?(V=U,U=null):V=U.sibling;var L=l(E,U,o[d],T);if(L===null){U===null&&(U=V);break}a&&U&&L.alternate===null&&A(E,U),S=I(L,S,d),B===null?M=L:B.sibling=L,B=L,U=V}if(d===o.length)return n(E,U),W&&mA(E,d),M;if(U===null){for(;d<o.length;d++)U=N(E,o[d],T),U!==null&&(S=I(U,S,d),B===null?M=U:B.sibling=U,B=U);return W&&mA(E,d),M}for(U=e(E,U);d<o.length;d++)V=m(U,E,d,o[d],T),V!==null&&(a&&V.alternate!==null&&U.delete(V.key===null?d:V.key),S=I(V,S,d),B===null?M=V:B.sibling=V,B=V);return a&&U.forEach(function(da){return A(E,da)}),W&&mA(E,d),M}function D(E,S,o,T){var M=un(o);if(typeof M!="function")throw Error(K(150));if(o=M.call(o),o==null)throw Error(K(151));for(var B=M=null,U=S,d=S=0,V=null,L=o.next();U!==null&&!L.done;d++,L=o.next()){U.index>d?(V=U,U=null):V=U.sibling;var da=l(E,U,L.value,T);if(da===null){U===null&&(U=V);break}a&&U&&da.alternate===null&&A(E,U),S=I(da,S,d),B===null?M=da:B.sibling=da,B=da,U=V}if(L.done)return n(E,U),W&&mA(E,d),M;if(U===null){for(;!L.done;d++,L=o.next())L=N(E,L.value,T),L!==null&&(S=I(L,S,d),B===null?M=L:B.sibling=L,B=L);return W&&mA(E,d),M}for(U=e(E,U);!L.done;d++,L=o.next())L=m(U,E,d,L.value,T),L!==null&&(a&&L.alternate!==null&&U.delete(L.key===null?d:L.key),S=I(L,S,d),B===null?M=L:B.sibling=L,B=L);return a&&U.forEach(function(rn){return A(E,rn)}),W&&mA(E,d),M}function c(E,S,o,T){if(typeof o=="object"&&o!==null&&o.type===YA&&o.key===null&&(o=o.props.children),typeof o=="object"&&o!==null){switch(o.$$typeof){case ne:a:{for(var M=o.key,B=S;B!==null;){if(B.key===M){if(M=o.type,M===YA){if(B.tag===7){n(E,B.sibling),S=i(B,o.props.children),S.return=E,E=S;break a}}else if(B.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$a&&Rt(M)===B.type){n(E,B.sibling),S=i(B,o.props),S.ref=Rn(E,B,o),S.return=E,E=S;break a}n(E,B);break}else A(E,B);B=B.sibling}o.type===YA?(S=BA(o.props.children,E.mode,T,o.key),S.return=E,E=S):(T=Oe(o.type,o.key,o.props,null,E.mode,T),T.ref=Rn(E,S,o),T.return=E,E=T)}return t(E);case cA:a:{for(B=o.key;S!==null;){if(S.key===B)if(S.tag===4&&S.stateNode.containerInfo===o.containerInfo&&S.stateNode.implementation===o.implementation){n(E,S.sibling),S=i(S,o.children||[]),S.return=E,E=S;break a}else{n(E,S);break}else A(E,S);S=S.sibling}S=ji(o,E.mode,T),S.return=E,E=S}return t(E);case $a:return B=o._init,c(E,S,B(o._payload),T)}if(Pn(o))return P(E,S,o,T);if(un(o))return D(E,S,o,T);le(E,o)}return typeof o=="string"&&o!==""||typeof o=="number"?(o=""+o,S!==null&&S.tag===6?(n(E,S.sibling),S=i(S,o),S.return=E,E=S):(n(E,S),S=Vi(o,E.mode,T),S.return=E,E=S),t(E)):n(E,S)}return c}var an=as(!0),As=as(!1),Ve=NA(null),je=null,vA=null,t1=null;function s1(){t1=vA=je=null}function r1(a){var A=Ve.current;C(Ve),a._currentValue=A}function DI(a,A,n){for(;a!==null;){var e=a.alternate;if((a.childLanes&A)!==A?(a.childLanes|=A,e!==null&&(e.childLanes|=A)):e!==null&&(e.childLanes&A)!==A&&(e.childLanes|=A),a===n)break;a=a.return}}function zA(a,A){je=a,t1=vA=null,a=a.dependencies,a!==null&&a.firstContext!==null&&(a.lanes&A&&(ua=!0),a.firstContext=null)}function Ba(a){var A=a._currentValue;if(t1!==a)if(a={context:a,memoizedValue:A,next:null},vA===null){if(je===null)throw Error(K(308));vA=a,je.dependencies={lanes:0,firstContext:a}}else vA=vA.next=a;return A}var kA=null;function S1(a){kA===null?kA=[a]:kA.push(a)}function ns(a,A,n,e){var i=A.interleaved;return i===null?(n.next=n,S1(A)):(n.next=i.next,i.next=n),A.interleaved=n,xa(a,e)}function xa(a,A){a.lanes|=A;var n=a.alternate;for(n!==null&&(n.lanes|=A),n=a,a=a.return;a!==null;)a.childLanes|=A,n=a.alternate,n!==null&&(n.childLanes|=A),n=a,a=a.return;return n.tag===3?n.stateNode:null}var Xa=!1;function u1(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function es(a,A){a=a.updateQueue,A.updateQueue===a&&(A.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ja(a,A){return{eventTime:a,lane:A,tag:0,payload:null,callback:null,next:null}}function sA(a,A,n){var e=a.updateQueue;if(e===null)return null;if(e=e.shared,p&2){var i=e.pending;return i===null?A.next=A:(A.next=i.next,i.next=A),e.pending=A,xa(a,n)}return i=e.interleaved,i===null?(A.next=A,S1(e)):(A.next=i.next,i.next=A),e.interleaved=A,xa(a,n)}function ge(a,A,n){if(A=A.updateQueue,A!==null&&(A=A.shared,(n&4194240)!==0)){var e=A.lanes;e&=a.pendingLanes,n|=e,A.lanes=n,zI(a,n)}}function Tt(a,A){var n=a.updateQueue,e=a.alternate;if(e!==null&&(e=e.updateQueue,n===e)){var i=null,I=null;if(n=n.firstBaseUpdate,n!==null){do{var t={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};I===null?i=I=t:I=I.next=t,n=n.next}while(n!==null);I===null?i=I=A:I=I.next=A}else i=I=A;n={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:I,shared:e.shared,effects:e.effects},a.updateQueue=n;return}a=n.lastBaseUpdate,a===null?n.firstBaseUpdate=A:a.next=A,n.lastBaseUpdate=A}function we(a,A,n,e){var i=a.updateQueue;Xa=!1;var I=i.firstBaseUpdate,t=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var r=s,u=r.next;r.next=null,t===null?I=u:t.next=u,t=r;var R=a.alternate;R!==null&&(R=R.updateQueue,s=R.lastBaseUpdate,s!==t&&(s===null?R.firstBaseUpdate=u:s.next=u,R.lastBaseUpdate=r))}if(I!==null){var N=i.baseState;t=0,R=u=r=null,s=I;do{var l=s.lane,m=s.eventTime;if((e&l)===l){R!==null&&(R=R.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var P=a,D=s;switch(l=A,m=n,D.tag){case 1:if(P=D.payload,typeof P=="function"){N=P.call(m,N,l);break a}N=P;break a;case 3:P.flags=P.flags&-65537|128;case 0:if(P=D.payload,l=typeof P=="function"?P.call(m,N,l):P,l==null)break a;N=y({},N,l);break a;case 2:Xa=!0}}s.callback!==null&&s.lane!==0&&(a.flags|=64,l=i.effects,l===null?i.effects=[s]:l.push(s))}else m={eventTime:m,lane:l,tag:s.tag,payload:s.payload,callback:s.callback,next:null},R===null?(u=R=m,r=N):R=R.next=m,t|=l;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;l=s,s=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}while(!0);if(R===null&&(r=N),i.baseState=r,i.firstBaseUpdate=u,i.lastBaseUpdate=R,A=i.shared.interleaved,A!==null){i=A;do t|=i.lane,i=i.next;while(i!==A)}else I===null&&(i.shared.lanes=0);GA|=t,a.lanes=t,a.memoizedState=N}}function Kt(a,A,n){if(a=A.effects,A.effects=null,a!==null)for(A=0;A<a.length;A++){var e=a[A],i=e.callback;if(i!==null){if(e.callback=null,e=n,typeof i!="function")throw Error(K(191,i));i.call(e)}}}var Xn={},ha=NA(Xn),vn=NA(Xn),Vn=NA(Xn);function MA(a){if(a===Xn)throw Error(K(174));return a}function E1(a,A){switch(J(Vn,A),J(vn,a),J(ha,Xn),a=A.nodeType,a){case 9:case 11:A=(A=A.documentElement)?A.namespaceURI:aI(null,"");break;default:a=a===8?A.parentNode:A,A=a.namespaceURI||null,a=a.tagName,A=aI(A,a)}C(ha),J(ha,A)}function An(){C(ha),C(vn),C(Vn)}function is(a){MA(Vn.current);var A=MA(ha.current),n=aI(A,a.type);A!==n&&(J(vn,a),J(ha,n))}function o1(a){vn.current===a&&(C(ha),C(vn))}var h=NA(0);function Ze(a){for(var A=a;A!==null;){if(A.tag===13){var n=A.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return A}else if(A.tag===19&&A.memoizedProps.revealOrder!==void 0){if(A.flags&128)return A}else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===a)break;for(;A.sibling===null;){if(A.return===null||A.return===a)return null;A=A.return}A.sibling.return=A.return,A=A.sibling}return null}var Ci=[];function l1(){for(var a=0;a<Ci.length;a++)Ci[a]._workInProgressVersionPrimary=null;Ci.length=0}var Be=za.ReactCurrentDispatcher,Wi=za.ReactCurrentBatchConfig,HA=0,F=null,x=null,Q=null,xe=!1,Hn=!1,jn=0,_3=0;function Aa(){throw Error(K(321))}function N1(a,A){if(A===null)return!1;for(var n=0;n<A.length&&n<a.length;n++)if(!Ya(a[n],A[n]))return!1;return!0}function R1(a,A,n,e,i,I){if(HA=I,F=A,A.memoizedState=null,A.updateQueue=null,A.lanes=0,Be.current=a===null||a.memoizedState===null?X3:q3,a=n(e,i),Hn){I=0;do{if(Hn=!1,jn=0,25<=I)throw Error(K(301));I+=1,Q=x=null,A.updateQueue=null,Be.current=aS,a=n(e,i)}while(Hn)}if(Be.current=_e,A=x!==null&&x.next!==null,HA=0,Q=x=F=null,xe=!1,A)throw Error(K(300));return a}function T1(){var a=jn!==0;return jn=0,a}function ba(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Q===null?F.memoizedState=Q=a:Q=Q.next=a,Q}function Ua(){if(x===null){var a=F.alternate;a=a!==null?a.memoizedState:null}else a=x.next;var A=Q===null?F.memoizedState:Q.next;if(A!==null)Q=A,x=a;else{if(a===null)throw Error(K(310));x=a,a={memoizedState:x.memoizedState,baseState:x.baseState,baseQueue:x.baseQueue,queue:x.queue,next:null},Q===null?F.memoizedState=Q=a:Q=Q.next=a}return Q}function wn(a,A){return typeof A=="function"?A(a):A}function hi(a){var A=Ua(),n=A.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=a;var e=x,i=e.baseQueue,I=n.pending;if(I!==null){if(i!==null){var t=i.next;i.next=I.next,I.next=t}e.baseQueue=i=I,n.pending=null}if(i!==null){I=i.next,e=e.baseState;var s=t=null,r=null,u=I;do{var R=u.lane;if((HA&R)===R)r!==null&&(r=r.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),e=u.hasEagerState?u.eagerState:a(e,u.action);else{var N={lane:R,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};r===null?(s=r=N,t=e):r=r.next=N,F.lanes|=R,GA|=R}u=u.next}while(u!==null&&u!==I);r===null?t=e:r.next=s,Ya(e,A.memoizedState)||(ua=!0),A.memoizedState=e,A.baseState=t,A.baseQueue=r,n.lastRenderedState=e}if(a=n.interleaved,a!==null){i=a;do I=i.lane,F.lanes|=I,GA|=I,i=i.next;while(i!==a)}else i===null&&(n.lanes=0);return[A.memoizedState,n.dispatch]}function Fi(a){var A=Ua(),n=A.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=a;var e=n.dispatch,i=n.pending,I=A.memoizedState;if(i!==null){n.pending=null;var t=i=i.next;do I=a(I,t.action),t=t.next;while(t!==i);Ya(I,A.memoizedState)||(ua=!0),A.memoizedState=I,A.baseQueue===null&&(A.baseState=I),n.lastRenderedState=I}return[I,e]}function Is(){}function ts(a,A){var n=F,e=Ua(),i=A(),I=!Ya(e.memoizedState,i);if(I&&(e.memoizedState=i,ua=!0),e=e.queue,K1(Ss.bind(null,n,e,a),[a]),e.getSnapshot!==A||I||Q!==null&&Q.memoizedState.tag&1){if(n.flags|=2048,Zn(9,rs.bind(null,n,e,i,A),void 0,null),$===null)throw Error(K(349));HA&30||ss(n,A,i)}return i}function ss(a,A,n){a.flags|=16384,a={getSnapshot:A,value:n},A=F.updateQueue,A===null?(A={lastEffect:null,stores:null},F.updateQueue=A,A.stores=[a]):(n=A.stores,n===null?A.stores=[a]:n.push(a))}function rs(a,A,n,e){A.value=n,A.getSnapshot=e,us(A)&&Es(a)}function Ss(a,A,n){return n(function(){us(A)&&Es(a)})}function us(a){var A=a.getSnapshot;a=a.value;try{var n=A();return!Ya(a,n)}catch{return!0}}function Es(a){var A=xa(a,1);A!==null&&ca(A,a,1,-1)}function mt(a){var A=ba();return typeof a=="function"&&(a=a()),A.memoizedState=A.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:a},A.queue=a,a=a.dispatch=$3.bind(null,F,a),[A.memoizedState,a]}function Zn(a,A,n,e){return a={tag:a,create:A,destroy:n,deps:e,next:null},A=F.updateQueue,A===null?(A={lastEffect:null,stores:null},F.updateQueue=A,A.lastEffect=a.next=a):(n=A.lastEffect,n===null?A.lastEffect=a.next=a:(e=n.next,n.next=a,a.next=e,A.lastEffect=a)),a}function os(){return Ua().memoizedState}function Ue(a,A,n,e){var i=ba();F.flags|=a,i.memoizedState=Zn(1|A,n,void 0,e===void 0?null:e)}function si(a,A,n,e){var i=Ua();e=e===void 0?null:e;var I=void 0;if(x!==null){var t=x.memoizedState;if(I=t.destroy,e!==null&&N1(e,t.deps)){i.memoizedState=Zn(A,n,I,e);return}}F.flags|=a,i.memoizedState=Zn(1|A,n,I,e)}function Pt(a,A){return Ue(8390656,8,a,A)}function K1(a,A){return si(2048,8,a,A)}function ls(a,A){return si(4,2,a,A)}function Ns(a,A){return si(4,4,a,A)}function Rs(a,A){if(typeof A=="function")return a=a(),A(a),function(){A(null)};if(A!=null)return a=a(),A.current=a,function(){A.current=null}}function Ts(a,A,n){return n=n!=null?n.concat([a]):null,si(4,4,Rs.bind(null,A,a),n)}function m1(){}function Ks(a,A){var n=Ua();A=A===void 0?null:A;var e=n.memoizedState;return e!==null&&A!==null&&N1(A,e[1])?e[0]:(n.memoizedState=[a,A],a)}function ms(a,A){var n=Ua();A=A===void 0?null:A;var e=n.memoizedState;return e!==null&&A!==null&&N1(A,e[1])?e[0]:(a=a(),n.memoizedState=[a,A],a)}function Ps(a,A,n){return HA&21?(Ya(n,A)||(n=B2(),F.lanes|=n,GA|=n,a.baseState=!0),A):(a.baseState&&(a.baseState=!1,ua=!0),a.memoizedState=n)}function z3(a,A){var n=Y;Y=n!==0&&4>n?n:4,a(!0);var e=Wi.transition;Wi.transition={};try{a(!1),A()}finally{Y=n,Wi.transition=e}}function Ds(){return Ua().memoizedState}function Q3(a,A,n){var e=SA(a);if(n={lane:e,action:n,hasEagerState:!1,eagerState:null,next:null},ks(a))Ms(A,n);else if(n=ns(a,A,n,e),n!==null){var i=ta();ca(n,a,e,i),gs(n,A,e)}}function $3(a,A,n){var e=SA(a),i={lane:e,action:n,hasEagerState:!1,eagerState:null,next:null};if(ks(a))Ms(A,i);else{var I=a.alternate;if(a.lanes===0&&(I===null||I.lanes===0)&&(I=A.lastRenderedReducer,I!==null))try{var t=A.lastRenderedState,s=I(t,n);if(i.hasEagerState=!0,i.eagerState=s,Ya(s,t)){var r=A.interleaved;r===null?(i.next=i,S1(A)):(i.next=r.next,r.next=i),A.interleaved=i;return}}catch{}finally{}n=ns(a,A,i,e),n!==null&&(i=ta(),ca(n,a,e,i),gs(n,A,e))}}function ks(a){var A=a.alternate;return a===F||A!==null&&A===F}function Ms(a,A){Hn=xe=!0;var n=a.pending;n===null?A.next=A:(A.next=n.next,n.next=A),a.pending=A}function gs(a,A,n){if(n&4194240){var e=A.lanes;e&=a.pendingLanes,n|=e,A.lanes=n,zI(a,n)}}var _e={readContext:Ba,useCallback:Aa,useContext:Aa,useEffect:Aa,useImperativeHandle:Aa,useInsertionEffect:Aa,useLayoutEffect:Aa,useMemo:Aa,useReducer:Aa,useRef:Aa,useState:Aa,useDebugValue:Aa,useDeferredValue:Aa,useTransition:Aa,useMutableSource:Aa,useSyncExternalStore:Aa,useId:Aa,unstable_isNewReconciler:!1},X3={readContext:Ba,useCallback:function(a,A){return ba().memoizedState=[a,A===void 0?null:A],a},useContext:Ba,useEffect:Pt,useImperativeHandle:function(a,A,n){return n=n!=null?n.concat([a]):null,Ue(4194308,4,Rs.bind(null,A,a),n)},useLayoutEffect:function(a,A){return Ue(4194308,4,a,A)},useInsertionEffect:function(a,A){return Ue(4,2,a,A)},useMemo:function(a,A){var n=ba();return A=A===void 0?null:A,a=a(),n.memoizedState=[a,A],a},useReducer:function(a,A,n){var e=ba();return A=n!==void 0?n(A):A,e.memoizedState=e.baseState=A,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:A},e.queue=a,a=a.dispatch=Q3.bind(null,F,a),[e.memoizedState,a]},useRef:function(a){var A=ba();return a={current:a},A.memoizedState=a},useState:mt,useDebugValue:m1,useDeferredValue:function(a){return ba().memoizedState=a},useTransition:function(){var a=mt(!1),A=a[0];return a=z3.bind(null,a[1]),ba().memoizedState=a,[A,a]},useMutableSource:function(){},useSyncExternalStore:function(a,A,n){var e=F,i=ba();if(W){if(n===void 0)throw Error(K(407));n=n()}else{if(n=A(),$===null)throw Error(K(349));HA&30||ss(e,A,n)}i.memoizedState=n;var I={value:n,getSnapshot:A};return i.queue=I,Pt(Ss.bind(null,e,I,a),[a]),e.flags|=2048,Zn(9,rs.bind(null,e,I,n,A),void 0,null),n},useId:function(){var a=ba(),A=$.identifierPrefix;if(W){var n=Va,e=va;n=(e&~(1<<32-pa(e)-1)).toString(32)+n,A=":"+A+"R"+n,n=jn++,0<n&&(A+="H"+n.toString(32)),A+=":"}else n=_3++,A=":"+A+"r"+n.toString(32)+":";return a.memoizedState=A},unstable_isNewReconciler:!1},q3={readContext:Ba,useCallback:Ks,useContext:Ba,useEffect:K1,useImperativeHandle:Ts,useInsertionEffect:ls,useLayoutEffect:Ns,useMemo:ms,useReducer:hi,useRef:os,useState:function(){return hi(wn)},useDebugValue:m1,useDeferredValue:function(a){var A=Ua();return Ps(A,x.memoizedState,a)},useTransition:function(){var a=hi(wn)[0],A=Ua().memoizedState;return[a,A]},useMutableSource:Is,useSyncExternalStore:ts,useId:Ds,unstable_isNewReconciler:!1},aS={readContext:Ba,useCallback:Ks,useContext:Ba,useEffect:K1,useImperativeHandle:Ts,useInsertionEffect:ls,useLayoutEffect:Ns,useMemo:ms,useReducer:Fi,useRef:os,useState:function(){return Fi(wn)},useDebugValue:m1,useDeferredValue:function(a){var A=Ua();return x===null?A.memoizedState=a:Ps(A,x.memoizedState,a)},useTransition:function(){var a=Fi(wn)[0],A=Ua().memoizedState;return[a,A]},useMutableSource:Is,useSyncExternalStore:ts,useId:Ds,unstable_isNewReconciler:!1};function Ga(a,A){if(a&&a.defaultProps){A=y({},A),a=a.defaultProps;for(var n in a)A[n]===void 0&&(A[n]=a[n]);return A}return A}function kI(a,A,n,e){A=a.memoizedState,n=n(e,A),n=n==null?A:y({},A,n),a.memoizedState=n,a.lanes===0&&(a.updateQueue.baseState=n)}var ri={isMounted:function(a){return(a=a._reactInternals)?LA(a)===a:!1},enqueueSetState:function(a,A,n){a=a._reactInternals;var e=ta(),i=SA(a),I=ja(e,i);I.payload=A,n!=null&&(I.callback=n),A=sA(a,I,i),A!==null&&(ca(A,a,i,e),ge(A,a,i))},enqueueReplaceState:function(a,A,n){a=a._reactInternals;var e=ta(),i=SA(a),I=ja(e,i);I.tag=1,I.payload=A,n!=null&&(I.callback=n),A=sA(a,I,i),A!==null&&(ca(A,a,i,e),ge(A,a,i))},enqueueForceUpdate:function(a,A){a=a._reactInternals;var n=ta(),e=SA(a),i=ja(n,e);i.tag=2,A!=null&&(i.callback=A),A=sA(a,i,e),A!==null&&(ca(A,a,e,n),ge(A,a,e))}};function Dt(a,A,n,e,i,I,t){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(e,I,t):A.prototype&&A.prototype.isPureReactComponent?!Wn(n,e)||!Wn(i,I):!0}function Bs(a,A,n){var e=!1,i=oA,I=A.contextType;return typeof I=="object"&&I!==null?I=Ba(I):(i=oa(A)?UA:ia.current,e=A.contextTypes,I=(e=e!=null)?XA(a,i):oA),A=new A(n,I),a.memoizedState=A.state!==null&&A.state!==void 0?A.state:null,A.updater=ri,a.stateNode=A,A._reactInternals=a,e&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=i,a.__reactInternalMemoizedMaskedChildContext=I),A}function kt(a,A,n,e){a=A.state,typeof A.componentWillReceiveProps=="function"&&A.componentWillReceiveProps(n,e),typeof A.UNSAFE_componentWillReceiveProps=="function"&&A.UNSAFE_componentWillReceiveProps(n,e),A.state!==a&&ri.enqueueReplaceState(A,A.state,null)}function MI(a,A,n,e){var i=a.stateNode;i.props=n,i.state=a.memoizedState,i.refs={},u1(a);var I=A.contextType;typeof I=="object"&&I!==null?i.context=Ba(I):(I=oa(A)?UA:ia.current,i.context=XA(a,I)),i.state=a.memoizedState,I=A.getDerivedStateFromProps,typeof I=="function"&&(kI(a,A,I,n),i.state=a.memoizedState),typeof A.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(A=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),A!==i.state&&ri.enqueueReplaceState(i,i.state,null),we(a,n,i,e),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308)}function nn(a,A){try{var n="",e=A;do n+=Gr(e),e=e.return;while(e);var i=n}catch(I){i=`
Error generating stack: `+I.message+`
`+I.stack}return{value:a,source:A,stack:i,digest:null}}function yi(a,A,n){return{value:a,source:null,stack:n??null,digest:A??null}}function gI(a,A){try{console.error(A.value)}catch(n){setTimeout(function(){throw n})}}var AS=typeof WeakMap=="function"?WeakMap:Map;function Us(a,A,n){n=ja(-1,n),n.tag=3,n.payload={element:null};var e=A.value;return n.callback=function(){Qe||(Qe=!0,cI=e),gI(a,A)},n}function ds(a,A,n){n=ja(-1,n),n.tag=3;var e=a.type.getDerivedStateFromError;if(typeof e=="function"){var i=A.value;n.payload=function(){return e(i)},n.callback=function(){gI(a,A)}}var I=a.stateNode;return I!==null&&typeof I.componentDidCatch=="function"&&(n.callback=function(){gI(a,A),typeof e!="function"&&(rA===null?rA=new Set([this]):rA.add(this));var t=A.stack;this.componentDidCatch(A.value,{componentStack:t!==null?t:""})}),n}function Mt(a,A,n){var e=a.pingCache;if(e===null){e=a.pingCache=new AS;var i=new Set;e.set(A,i)}else i=e.get(A),i===void 0&&(i=new Set,e.set(A,i));i.has(n)||(i.add(n),a=RS.bind(null,a,A,n),A.then(a,a))}function gt(a){do{var A;if((A=a.tag===13)&&(A=a.memoizedState,A=A!==null?A.dehydrated!==null:!0),A)return a;a=a.return}while(a!==null);return null}function Bt(a,A,n,e,i){return a.mode&1?(a.flags|=65536,a.lanes=i,a):(a===A?a.flags|=65536:(a.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(A=ja(-1,1),A.tag=2,sA(n,A,1))),n.lanes|=1),a)}var nS=za.ReactCurrentOwner,ua=!1;function Ia(a,A,n,e){A.child=a===null?As(A,null,n,e):an(A,a.child,n,e)}function Ut(a,A,n,e,i){n=n.render;var I=A.ref;return zA(A,i),e=R1(a,A,n,e,I,i),n=T1(),a!==null&&!ua?(A.updateQueue=a.updateQueue,A.flags&=-2053,a.lanes&=~i,_a(a,A,i)):(W&&n&&e1(A),A.flags|=1,Ia(a,A,e,i),A.child)}function dt(a,A,n,e,i){if(a===null){var I=n.type;return typeof I=="function"&&!d1(I)&&I.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(A.tag=15,A.type=I,Hs(a,A,I,e,i)):(a=Oe(n.type,null,e,A,A.mode,i),a.ref=A.ref,a.return=A,A.child=a)}if(I=a.child,!(a.lanes&i)){var t=I.memoizedProps;if(n=n.compare,n=n!==null?n:Wn,n(t,e)&&a.ref===A.ref)return _a(a,A,i)}return A.flags|=1,a=uA(I,e),a.ref=A.ref,a.return=A,A.child=a}function Hs(a,A,n,e,i){if(a!==null){var I=a.memoizedProps;if(Wn(I,e)&&a.ref===A.ref)if(ua=!1,A.pendingProps=e=I,(a.lanes&i)!==0)a.flags&131072&&(ua=!0);else return A.lanes=a.lanes,_a(a,A,i)}return BI(a,A,n,e,i)}function Gs(a,A,n){var e=A.pendingProps,i=e.children,I=a!==null?a.memoizedState:null;if(e.mode==="hidden")if(!(A.mode&1))A.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(jA,Na),Na|=n;else{if(!(n&1073741824))return a=I!==null?I.baseLanes|n:n,A.lanes=A.childLanes=1073741824,A.memoizedState={baseLanes:a,cachePool:null,transitions:null},A.updateQueue=null,J(jA,Na),Na|=a,null;A.memoizedState={baseLanes:0,cachePool:null,transitions:null},e=I!==null?I.baseLanes:n,J(jA,Na),Na|=e}else I!==null?(e=I.baseLanes|n,A.memoizedState=null):e=n,J(jA,Na),Na|=e;return Ia(a,A,i,n),A.child}function Os(a,A){var n=A.ref;(a===null&&n!==null||a!==null&&a.ref!==n)&&(A.flags|=512,A.flags|=2097152)}function BI(a,A,n,e,i){var I=oa(n)?UA:ia.current;return I=XA(A,I),zA(A,i),n=R1(a,A,n,e,I,i),e=T1(),a!==null&&!ua?(A.updateQueue=a.updateQueue,A.flags&=-2053,a.lanes&=~i,_a(a,A,i)):(W&&e&&e1(A),A.flags|=1,Ia(a,A,n,i),A.child)}function Ht(a,A,n,e,i){if(oa(n)){var I=!0;Fe(A)}else I=!1;if(zA(A,i),A.stateNode===null)de(a,A),Bs(A,n,e),MI(A,n,e,i),e=!0;else if(a===null){var t=A.stateNode,s=A.memoizedProps;t.props=s;var r=t.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ba(u):(u=oa(n)?UA:ia.current,u=XA(A,u));var R=n.getDerivedStateFromProps,N=typeof R=="function"||typeof t.getSnapshotBeforeUpdate=="function";N||typeof t.UNSAFE_componentWillReceiveProps!="function"&&typeof t.componentWillReceiveProps!="function"||(s!==e||r!==u)&&kt(A,t,e,u),Xa=!1;var l=A.memoizedState;t.state=l,we(A,e,t,i),r=A.memoizedState,s!==e||l!==r||Ea.current||Xa?(typeof R=="function"&&(kI(A,n,R,e),r=A.memoizedState),(s=Xa||Dt(A,n,s,e,l,r,u))?(N||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount()),typeof t.componentDidMount=="function"&&(A.flags|=4194308)):(typeof t.componentDidMount=="function"&&(A.flags|=4194308),A.memoizedProps=e,A.memoizedState=r),t.props=e,t.state=r,t.context=u,e=s):(typeof t.componentDidMount=="function"&&(A.flags|=4194308),e=!1)}else{t=A.stateNode,es(a,A),s=A.memoizedProps,u=A.type===A.elementType?s:Ga(A.type,s),t.props=u,N=A.pendingProps,l=t.context,r=n.contextType,typeof r=="object"&&r!==null?r=Ba(r):(r=oa(n)?UA:ia.current,r=XA(A,r));var m=n.getDerivedStateFromProps;(R=typeof m=="function"||typeof t.getSnapshotBeforeUpdate=="function")||typeof t.UNSAFE_componentWillReceiveProps!="function"&&typeof t.componentWillReceiveProps!="function"||(s!==N||l!==r)&&kt(A,t,e,r),Xa=!1,l=A.memoizedState,t.state=l,we(A,e,t,i);var P=A.memoizedState;s!==N||l!==P||Ea.current||Xa?(typeof m=="function"&&(kI(A,n,m,e),P=A.memoizedState),(u=Xa||Dt(A,n,u,e,l,P,r)||!1)?(R||typeof t.UNSAFE_componentWillUpdate!="function"&&typeof t.componentWillUpdate!="function"||(typeof t.componentWillUpdate=="function"&&t.componentWillUpdate(e,P,r),typeof t.UNSAFE_componentWillUpdate=="function"&&t.UNSAFE_componentWillUpdate(e,P,r)),typeof t.componentDidUpdate=="function"&&(A.flags|=4),typeof t.getSnapshotBeforeUpdate=="function"&&(A.flags|=1024)):(typeof t.componentDidUpdate!="function"||s===a.memoizedProps&&l===a.memoizedState||(A.flags|=4),typeof t.getSnapshotBeforeUpdate!="function"||s===a.memoizedProps&&l===a.memoizedState||(A.flags|=1024),A.memoizedProps=e,A.memoizedState=P),t.props=e,t.state=P,t.context=r,e=u):(typeof t.componentDidUpdate!="function"||s===a.memoizedProps&&l===a.memoizedState||(A.flags|=4),typeof t.getSnapshotBeforeUpdate!="function"||s===a.memoizedProps&&l===a.memoizedState||(A.flags|=1024),e=!1)}return UI(a,A,n,e,I,i)}function UI(a,A,n,e,i,I){Os(a,A);var t=(A.flags&128)!==0;if(!e&&!t)return i&&ot(A,n,!1),_a(a,A,I);e=A.stateNode,nS.current=A;var s=t&&typeof n.getDerivedStateFromError!="function"?null:e.render();return A.flags|=1,a!==null&&t?(A.child=an(A,a.child,null,I),A.child=an(A,null,s,I)):Ia(a,A,s,I),A.memoizedState=e.state,i&&ot(A,n,!0),A.child}function fs(a){var A=a.stateNode;A.pendingContext?Et(a,A.pendingContext,A.pendingContext!==A.context):A.context&&Et(a,A.context,!1),E1(a,A.containerInfo)}function Gt(a,A,n,e,i){return qA(),I1(i),A.flags|=256,Ia(a,A,n,e),A.child}var dI={dehydrated:null,treeContext:null,retryLane:0};function HI(a){return{baseLanes:a,cachePool:null,transitions:null}}function Ls(a,A,n){var e=A.pendingProps,i=h.current,I=!1,t=(A.flags&128)!==0,s;if((s=t)||(s=a!==null&&a.memoizedState===null?!1:(i&2)!==0),s?(I=!0,A.flags&=-129):(a===null||a.memoizedState!==null)&&(i|=1),J(h,i&1),a===null)return PI(A),a=A.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?(A.mode&1?a.data==="$!"?A.lanes=8:A.lanes=1073741824:A.lanes=1,null):(t=e.children,a=e.fallback,I?(e=A.mode,I=A.child,t={mode:"hidden",children:t},!(e&1)&&I!==null?(I.childLanes=0,I.pendingProps=t):I=Ei(t,e,0,null),a=BA(a,e,n,null),I.return=A,a.return=A,I.sibling=a,A.child=I,A.child.memoizedState=HI(n),A.memoizedState=dI,a):P1(A,t));if(i=a.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return eS(a,A,t,e,s,i,n);if(I){I=e.fallback,t=A.mode,i=a.child,s=i.sibling;var r={mode:"hidden",children:e.children};return!(t&1)&&A.child!==i?(e=A.child,e.childLanes=0,e.pendingProps=r,A.deletions=null):(e=uA(i,r),e.subtreeFlags=i.subtreeFlags&14680064),s!==null?I=uA(s,I):(I=BA(I,t,n,null),I.flags|=2),I.return=A,e.return=A,e.sibling=I,A.child=e,e=I,I=A.child,t=a.child.memoizedState,t=t===null?HI(n):{baseLanes:t.baseLanes|n,cachePool:null,transitions:t.transitions},I.memoizedState=t,I.childLanes=a.childLanes&~n,A.memoizedState=dI,e}return I=a.child,a=I.sibling,e=uA(I,{mode:"visible",children:e.children}),!(A.mode&1)&&(e.lanes=n),e.return=A,e.sibling=null,a!==null&&(n=A.deletions,n===null?(A.deletions=[a],A.flags|=16):n.push(a)),A.child=e,A.memoizedState=null,e}function P1(a,A){return A=Ei({mode:"visible",children:A},a.mode,0,null),A.return=a,a.child=A}function Ne(a,A,n,e){return e!==null&&I1(e),an(A,a.child,null,n),a=P1(A,A.pendingProps.children),a.flags|=2,A.memoizedState=null,a}function eS(a,A,n,e,i,I,t){if(n)return A.flags&256?(A.flags&=-257,e=yi(Error(K(422))),Ne(a,A,t,e)):A.memoizedState!==null?(A.child=a.child,A.flags|=128,null):(I=e.fallback,i=A.mode,e=Ei({mode:"visible",children:e.children},i,0,null),I=BA(I,i,t,null),I.flags|=2,e.return=A,I.return=A,e.sibling=I,A.child=e,A.mode&1&&an(A,a.child,null,t),A.child.memoizedState=HI(t),A.memoizedState=dI,I);if(!(A.mode&1))return Ne(a,A,t,null);if(i.data==="$!"){if(e=i.nextSibling&&i.nextSibling.dataset,e)var s=e.dgst;return e=s,I=Error(K(419)),e=yi(I,e,void 0),Ne(a,A,t,e)}if(s=(t&a.childLanes)!==0,ua||s){if(e=$,e!==null){switch(t&-t){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(e.suspendedLanes|t)?0:i,i!==0&&i!==I.retryLane&&(I.retryLane=i,xa(a,i),ca(e,a,i,-1))}return U1(),e=yi(Error(K(421))),Ne(a,A,t,e)}return i.data==="$?"?(A.flags|=128,A.child=a.child,A=TS.bind(null,a),i._reactRetry=A,null):(a=I.treeContext,Ra=tA(i.nextSibling),Ta=A,W=!0,fa=null,a!==null&&(Da[ka++]=va,Da[ka++]=Va,Da[ka++]=dA,va=a.id,Va=a.overflow,dA=A),A=P1(A,e.children),A.flags|=4096,A)}function Ot(a,A,n){a.lanes|=A;var e=a.alternate;e!==null&&(e.lanes|=A),DI(a.return,A,n)}function vi(a,A,n,e,i){var I=a.memoizedState;I===null?a.memoizedState={isBackwards:A,rendering:null,renderingStartTime:0,last:e,tail:n,tailMode:i}:(I.isBackwards=A,I.rendering=null,I.renderingStartTime=0,I.last=e,I.tail=n,I.tailMode=i)}function ps(a,A,n){var e=A.pendingProps,i=e.revealOrder,I=e.tail;if(Ia(a,A,e.children,n),e=h.current,e&2)e=e&1|2,A.flags|=128;else{if(a!==null&&a.flags&128)a:for(a=A.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Ot(a,n,A);else if(a.tag===19)Ot(a,n,A);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===A)break a;for(;a.sibling===null;){if(a.return===null||a.return===A)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}e&=1}if(J(h,e),!(A.mode&1))A.memoizedState=null;else switch(i){case"forwards":for(n=A.child,i=null;n!==null;)a=n.alternate,a!==null&&Ze(a)===null&&(i=n),n=n.sibling;n=i,n===null?(i=A.child,A.child=null):(i=n.sibling,n.sibling=null),vi(A,!1,i,n,I);break;case"backwards":for(n=null,i=A.child,A.child=null;i!==null;){if(a=i.alternate,a!==null&&Ze(a)===null){A.child=i;break}a=i.sibling,i.sibling=n,n=i,i=a}vi(A,!0,n,null,I);break;case"together":vi(A,!1,null,null,void 0);break;default:A.memoizedState=null}return A.child}function de(a,A){!(A.mode&1)&&a!==null&&(a.alternate=null,A.alternate=null,A.flags|=2)}function _a(a,A,n){if(a!==null&&(A.dependencies=a.dependencies),GA|=A.lanes,!(n&A.childLanes))return null;if(a!==null&&A.child!==a.child)throw Error(K(153));if(A.child!==null){for(a=A.child,n=uA(a,a.pendingProps),A.child=n,n.return=A;a.sibling!==null;)a=a.sibling,n=n.sibling=uA(a,a.pendingProps),n.return=A;n.sibling=null}return A.child}function iS(a,A,n){switch(A.tag){case 3:fs(A),qA();break;case 5:is(A);break;case 1:oa(A.type)&&Fe(A);break;case 4:E1(A,A.stateNode.containerInfo);break;case 10:var e=A.type._context,i=A.memoizedProps.value;J(Ve,e._currentValue),e._currentValue=i;break;case 13:if(e=A.memoizedState,e!==null)return e.dehydrated!==null?(J(h,h.current&1),A.flags|=128,null):n&A.child.childLanes?Ls(a,A,n):(J(h,h.current&1),a=_a(a,A,n),a!==null?a.sibling:null);J(h,h.current&1);break;case 19:if(e=(n&A.childLanes)!==0,a.flags&128){if(e)return ps(a,A,n);A.flags|=128}if(i=A.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(h,h.current),e)break;return null;case 22:case 23:return A.lanes=0,Gs(a,A,n)}return _a(a,A,n)}var cs,GI,Ys,Js;cs=function(a,A){for(var n=A.child;n!==null;){if(n.tag===5||n.tag===6)a.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===A)break;for(;n.sibling===null;){if(n.return===null||n.return===A)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};GI=function(){};Ys=function(a,A,n,e){var i=a.memoizedProps;if(i!==e){a=A.stateNode,MA(ha.current);var I=null;switch(n){case"input":i=Qi(a,i),e=Qi(a,e),I=[];break;case"select":i=y({},i,{value:void 0}),e=y({},e,{value:void 0}),I=[];break;case"textarea":i=qi(a,i),e=qi(a,e),I=[];break;default:typeof i.onClick!="function"&&typeof e.onClick=="function"&&(a.onclick=We)}AI(n,e);var t;n=null;for(u in i)if(!e.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(t in s)s.hasOwnProperty(t)&&(n||(n={}),n[t]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ln.hasOwnProperty(u)?I||(I=[]):(I=I||[]).push(u,null));for(u in e){var r=e[u];if(s=i!=null?i[u]:void 0,e.hasOwnProperty(u)&&r!==s&&(r!=null||s!=null))if(u==="style")if(s){for(t in s)!s.hasOwnProperty(t)||r&&r.hasOwnProperty(t)||(n||(n={}),n[t]="");for(t in r)r.hasOwnProperty(t)&&s[t]!==r[t]&&(n||(n={}),n[t]=r[t])}else n||(I||(I=[]),I.push(u,n)),n=r;else u==="dangerouslySetInnerHTML"?(r=r?r.__html:void 0,s=s?s.__html:void 0,r!=null&&s!==r&&(I=I||[]).push(u,r)):u==="children"?typeof r!="string"&&typeof r!="number"||(I=I||[]).push(u,""+r):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(u)?(r!=null&&u==="onScroll"&&b("scroll",a),I||s===r||(I=[])):(I=I||[]).push(u,r))}n&&(I=I||[]).push("style",n);var u=I;(A.updateQueue=u)&&(A.flags|=4)}};Js=function(a,A,n,e){n!==e&&(A.flags|=4)};function Tn(a,A){if(!W)switch(a.tailMode){case"hidden":A=a.tail;for(var n=null;A!==null;)A.alternate!==null&&(n=A),A=A.sibling;n===null?a.tail=null:n.sibling=null;break;case"collapsed":n=a.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?A||a.tail===null?a.tail=null:a.tail.sibling=null:e.sibling=null}}function na(a){var A=a.alternate!==null&&a.alternate.child===a.child,n=0,e=0;if(A)for(var i=a.child;i!==null;)n|=i.lanes|i.childLanes,e|=i.subtreeFlags&14680064,e|=i.flags&14680064,i.return=a,i=i.sibling;else for(i=a.child;i!==null;)n|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=a,i=i.sibling;return a.subtreeFlags|=e,a.childLanes=n,A}function IS(a,A,n){var e=A.pendingProps;switch(i1(A),A.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return na(A),null;case 1:return oa(A.type)&&he(),na(A),null;case 3:return e=A.stateNode,An(),C(Ea),C(ia),l1(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(a===null||a.child===null)&&(oe(A)?A.flags|=4:a===null||a.memoizedState.isDehydrated&&!(A.flags&256)||(A.flags|=1024,fa!==null&&(bI(fa),fa=null))),GI(a,A),na(A),null;case 5:o1(A);var i=MA(Vn.current);if(n=A.type,a!==null&&A.stateNode!=null)Ys(a,A,n,e,i),a.ref!==A.ref&&(A.flags|=512,A.flags|=2097152);else{if(!e){if(A.stateNode===null)throw Error(K(166));return na(A),null}if(a=MA(ha.current),oe(A)){e=A.stateNode,n=A.type;var I=A.memoizedProps;switch(e[Ca]=A,e[yn]=I,a=(A.mode&1)!==0,n){case"dialog":b("cancel",e),b("close",e);break;case"iframe":case"object":case"embed":b("load",e);break;case"video":case"audio":for(i=0;i<kn.length;i++)b(kn[i],e);break;case"source":b("error",e);break;case"img":case"image":case"link":b("error",e),b("load",e);break;case"details":b("toggle",e);break;case"input":W1(e,I),b("invalid",e);break;case"select":e._wrapperState={wasMultiple:!!I.multiple},b("invalid",e);break;case"textarea":F1(e,I),b("invalid",e)}AI(n,I),i=null;for(var t in I)if(I.hasOwnProperty(t)){var s=I[t];t==="children"?typeof s=="string"?e.textContent!==s&&(I.suppressHydrationWarning!==!0&&Ee(e.textContent,s,a),i=["children",s]):typeof s=="number"&&e.textContent!==""+s&&(I.suppressHydrationWarning!==!0&&Ee(e.textContent,s,a),i=["children",""+s]):Ln.hasOwnProperty(t)&&s!=null&&t==="onScroll"&&b("scroll",e)}switch(n){case"input":ee(e),h1(e,I,!0);break;case"textarea":ee(e),y1(e);break;case"select":case"option":break;default:typeof I.onClick=="function"&&(e.onclick=We)}e=i,A.updateQueue=e,e!==null&&(A.flags|=4)}else{t=i.nodeType===9?i:i.ownerDocument,a==="http://www.w3.org/1999/xhtml"&&(a=S2(n)),a==="http://www.w3.org/1999/xhtml"?n==="script"?(a=t.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild)):typeof e.is=="string"?a=t.createElement(n,{is:e.is}):(a=t.createElement(n),n==="select"&&(t=a,e.multiple?t.multiple=!0:e.size&&(t.size=e.size))):a=t.createElementNS(a,n),a[Ca]=A,a[yn]=e,cs(a,A,!1,!1),A.stateNode=a;a:{switch(t=nI(n,e),n){case"dialog":b("cancel",a),b("close",a),i=e;break;case"iframe":case"object":case"embed":b("load",a),i=e;break;case"video":case"audio":for(i=0;i<kn.length;i++)b(kn[i],a);i=e;break;case"source":b("error",a),i=e;break;case"img":case"image":case"link":b("error",a),b("load",a),i=e;break;case"details":b("toggle",a),i=e;break;case"input":W1(a,e),i=Qi(a,e),b("invalid",a);break;case"option":i=e;break;case"select":a._wrapperState={wasMultiple:!!e.multiple},i=y({},e,{value:void 0}),b("invalid",a);break;case"textarea":F1(a,e),i=qi(a,e),b("invalid",a);break;default:i=e}AI(n,i),s=i;for(I in s)if(s.hasOwnProperty(I)){var r=s[I];I==="style"?o2(a,r):I==="dangerouslySetInnerHTML"?(r=r?r.__html:void 0,r!=null&&u2(a,r)):I==="children"?typeof r=="string"?(n!=="textarea"||r!=="")&&pn(a,r):typeof r=="number"&&pn(a,""+r):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(Ln.hasOwnProperty(I)?r!=null&&I==="onScroll"&&b("scroll",a):r!=null&&VI(a,I,r,t))}switch(n){case"input":ee(a),h1(a,e,!1);break;case"textarea":ee(a),y1(a);break;case"option":e.value!=null&&a.setAttribute("value",""+EA(e.value));break;case"select":a.multiple=!!e.multiple,I=e.value,I!=null?wA(a,!!e.multiple,I,!1):e.defaultValue!=null&&wA(a,!!e.multiple,e.defaultValue,!0);break;default:typeof i.onClick=="function"&&(a.onclick=We)}switch(n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break a;case"img":e=!0;break a;default:e=!1}}e&&(A.flags|=4)}A.ref!==null&&(A.flags|=512,A.flags|=2097152)}return na(A),null;case 6:if(a&&A.stateNode!=null)Js(a,A,a.memoizedProps,e);else{if(typeof e!="string"&&A.stateNode===null)throw Error(K(166));if(n=MA(Vn.current),MA(ha.current),oe(A)){if(e=A.stateNode,n=A.memoizedProps,e[Ca]=A,(I=e.nodeValue!==n)&&(a=Ta,a!==null))switch(a.tag){case 3:Ee(e.nodeValue,n,(a.mode&1)!==0);break;case 5:a.memoizedProps.suppressHydrationWarning!==!0&&Ee(e.nodeValue,n,(a.mode&1)!==0)}I&&(A.flags|=4)}else e=(n.nodeType===9?n:n.ownerDocument).createTextNode(e),e[Ca]=A,A.stateNode=e}return na(A),null;case 13:if(C(h),e=A.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(W&&Ra!==null&&A.mode&1&&!(A.flags&128))q2(),qA(),A.flags|=98560,I=!1;else if(I=oe(A),e!==null&&e.dehydrated!==null){if(a===null){if(!I)throw Error(K(318));if(I=A.memoizedState,I=I!==null?I.dehydrated:null,!I)throw Error(K(317));I[Ca]=A}else qA(),!(A.flags&128)&&(A.memoizedState=null),A.flags|=4;na(A),I=!1}else fa!==null&&(bI(fa),fa=null),I=!0;if(!I)return A.flags&65536?A:null}return A.flags&128?(A.lanes=n,A):(e=e!==null,e!==(a!==null&&a.memoizedState!==null)&&e&&(A.child.flags|=8192,A.mode&1&&(a===null||h.current&1?_===0&&(_=3):U1())),A.updateQueue!==null&&(A.flags|=4),na(A),null);case 4:return An(),GI(a,A),a===null&&hn(A.stateNode.containerInfo),na(A),null;case 10:return r1(A.type._context),na(A),null;case 17:return oa(A.type)&&he(),na(A),null;case 19:if(C(h),I=A.memoizedState,I===null)return na(A),null;if(e=(A.flags&128)!==0,t=I.rendering,t===null)if(e)Tn(I,!1);else{if(_!==0||a!==null&&a.flags&128)for(a=A.child;a!==null;){if(t=Ze(a),t!==null){for(A.flags|=128,Tn(I,!1),e=t.updateQueue,e!==null&&(A.updateQueue=e,A.flags|=4),A.subtreeFlags=0,e=n,n=A.child;n!==null;)I=n,a=e,I.flags&=14680066,t=I.alternate,t===null?(I.childLanes=0,I.lanes=a,I.child=null,I.subtreeFlags=0,I.memoizedProps=null,I.memoizedState=null,I.updateQueue=null,I.dependencies=null,I.stateNode=null):(I.childLanes=t.childLanes,I.lanes=t.lanes,I.child=t.child,I.subtreeFlags=0,I.deletions=null,I.memoizedProps=t.memoizedProps,I.memoizedState=t.memoizedState,I.updateQueue=t.updateQueue,I.type=t.type,a=t.dependencies,I.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n=n.sibling;return J(h,h.current&1|2),A.child}a=a.sibling}I.tail!==null&&w()>en&&(A.flags|=128,e=!0,Tn(I,!1),A.lanes=4194304)}else{if(!e)if(a=Ze(t),a!==null){if(A.flags|=128,e=!0,n=a.updateQueue,n!==null&&(A.updateQueue=n,A.flags|=4),Tn(I,!0),I.tail===null&&I.tailMode==="hidden"&&!t.alternate&&!W)return na(A),null}else 2*w()-I.renderingStartTime>en&&n!==1073741824&&(A.flags|=128,e=!0,Tn(I,!1),A.lanes=4194304);I.isBackwards?(t.sibling=A.child,A.child=t):(n=I.last,n!==null?n.sibling=t:A.child=t,I.last=t)}return I.tail!==null?(A=I.tail,I.rendering=A,I.tail=A.sibling,I.renderingStartTime=w(),A.sibling=null,n=h.current,J(h,e?n&1|2:n&1),A):(na(A),null);case 22:case 23:return B1(),e=A.memoizedState!==null,a!==null&&a.memoizedState!==null!==e&&(A.flags|=8192),e&&A.mode&1?Na&1073741824&&(na(A),A.subtreeFlags&6&&(A.flags|=8192)):na(A),null;case 24:return null;case 25:return null}throw Error(K(156,A.tag))}function tS(a,A){switch(i1(A),A.tag){case 1:return oa(A.type)&&he(),a=A.flags,a&65536?(A.flags=a&-65537|128,A):null;case 3:return An(),C(Ea),C(ia),l1(),a=A.flags,a&65536&&!(a&128)?(A.flags=a&-65537|128,A):null;case 5:return o1(A),null;case 13:if(C(h),a=A.memoizedState,a!==null&&a.dehydrated!==null){if(A.alternate===null)throw Error(K(340));qA()}return a=A.flags,a&65536?(A.flags=a&-65537|128,A):null;case 19:return C(h),null;case 4:return An(),null;case 10:return r1(A.type._context),null;case 22:case 23:return B1(),null;case 24:return null;default:return null}}var Re=!1,ea=!1,sS=typeof WeakSet=="function"?WeakSet:Set,k=null;function VA(a,A){var n=a.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(e){v(a,A,e)}else n.current=null}function OI(a,A,n){try{n()}catch(e){v(a,A,e)}}var ft=!1;function rS(a,A){if(oI=Je,a=F2(),n1(a)){if("selectionStart"in a)var n={start:a.selectionStart,end:a.selectionEnd};else a:{n=(n=a.ownerDocument)&&n.defaultView||window;var e=n.getSelection&&n.getSelection();if(e&&e.rangeCount!==0){n=e.anchorNode;var i=e.anchorOffset,I=e.focusNode;e=e.focusOffset;try{n.nodeType,I.nodeType}catch{n=null;break a}var t=0,s=-1,r=-1,u=0,R=0,N=a,l=null;A:for(;;){for(var m;N!==n||i!==0&&N.nodeType!==3||(s=t+i),N!==I||e!==0&&N.nodeType!==3||(r=t+e),N.nodeType===3&&(t+=N.nodeValue.length),(m=N.firstChild)!==null;)l=N,N=m;for(;;){if(N===a)break A;if(l===n&&++u===i&&(s=t),l===I&&++R===e&&(r=t),(m=N.nextSibling)!==null)break;N=l,l=N.parentNode}N=m}n=s===-1||r===-1?null:{start:s,end:r}}else n=null}n=n||{start:0,end:0}}else n=null;for(lI={focusedElem:a,selectionRange:n},Je=!1,k=A;k!==null;)if(A=k,a=A.child,(A.subtreeFlags&1028)!==0&&a!==null)a.return=A,k=a;else for(;k!==null;){A=k;try{var P=A.alternate;if(A.flags&1024)switch(A.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var D=P.memoizedProps,c=P.memoizedState,E=A.stateNode,S=E.getSnapshotBeforeUpdate(A.elementType===A.type?D:Ga(A.type,D),c);E.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var o=A.stateNode.containerInfo;o.nodeType===1?o.textContent="":o.nodeType===9&&o.documentElement&&o.removeChild(o.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(T){v(A,A.return,T)}if(a=A.sibling,a!==null){a.return=A.return,k=a;break}k=A.return}return P=ft,ft=!1,P}function Gn(a,A,n){var e=A.updateQueue;if(e=e!==null?e.lastEffect:null,e!==null){var i=e=e.next;do{if((i.tag&a)===a){var I=i.destroy;i.destroy=void 0,I!==void 0&&OI(A,n,I)}i=i.next}while(i!==e)}}function Si(a,A){if(A=A.updateQueue,A=A!==null?A.lastEffect:null,A!==null){var n=A=A.next;do{if((n.tag&a)===a){var e=n.create;n.destroy=e()}n=n.next}while(n!==A)}}function fI(a){var A=a.ref;if(A!==null){var n=a.stateNode;switch(a.tag){case 5:a=n;break;default:a=n}typeof A=="function"?A(a):A.current=a}}function bs(a){var A=a.alternate;A!==null&&(a.alternate=null,bs(A)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(A=a.stateNode,A!==null&&(delete A[Ca],delete A[yn],delete A[TI],delete A[j3],delete A[w3])),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Cs(a){return a.tag===5||a.tag===3||a.tag===4}function Lt(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||Cs(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function LI(a,A,n){var e=a.tag;if(e===5||e===6)a=a.stateNode,A?n.nodeType===8?n.parentNode.insertBefore(a,A):n.insertBefore(a,A):(n.nodeType===8?(A=n.parentNode,A.insertBefore(a,n)):(A=n,A.appendChild(a)),n=n._reactRootContainer,n!=null||A.onclick!==null||(A.onclick=We));else if(e!==4&&(a=a.child,a!==null))for(LI(a,A,n),a=a.sibling;a!==null;)LI(a,A,n),a=a.sibling}function pI(a,A,n){var e=a.tag;if(e===5||e===6)a=a.stateNode,A?n.insertBefore(a,A):n.appendChild(a);else if(e!==4&&(a=a.child,a!==null))for(pI(a,A,n),a=a.sibling;a!==null;)pI(a,A,n),a=a.sibling}var X=null,Oa=!1;function Qa(a,A,n){for(n=n.child;n!==null;)Ws(a,A,n),n=n.sibling}function Ws(a,A,n){if(Wa&&typeof Wa.onCommitFiberUnmount=="function")try{Wa.onCommitFiberUnmount(Ai,n)}catch{}switch(n.tag){case 5:ea||VA(n,A);case 6:var e=X,i=Oa;X=null,Qa(a,A,n),X=e,Oa=i,X!==null&&(Oa?(a=X,n=n.stateNode,a.nodeType===8?a.parentNode.removeChild(n):a.removeChild(n)):X.removeChild(n.stateNode));break;case 18:X!==null&&(Oa?(a=X,n=n.stateNode,a.nodeType===8?Ji(a.parentNode,n):a.nodeType===1&&Ji(a,n),bn(a)):Ji(X,n.stateNode));break;case 4:e=X,i=Oa,X=n.stateNode.containerInfo,Oa=!0,Qa(a,A,n),X=e,Oa=i;break;case 0:case 11:case 14:case 15:if(!ea&&(e=n.updateQueue,e!==null&&(e=e.lastEffect,e!==null))){i=e=e.next;do{var I=i,t=I.destroy;I=I.tag,t!==void 0&&(I&2||I&4)&&OI(n,A,t),i=i.next}while(i!==e)}Qa(a,A,n);break;case 1:if(!ea&&(VA(n,A),e=n.stateNode,typeof e.componentWillUnmount=="function"))try{e.props=n.memoizedProps,e.state=n.memoizedState,e.componentWillUnmount()}catch(s){v(n,A,s)}Qa(a,A,n);break;case 21:Qa(a,A,n);break;case 22:n.mode&1?(ea=(e=ea)||n.memoizedState!==null,Qa(a,A,n),ea=e):Qa(a,A,n);break;default:Qa(a,A,n)}}function pt(a){var A=a.updateQueue;if(A!==null){a.updateQueue=null;var n=a.stateNode;n===null&&(n=a.stateNode=new sS),A.forEach(function(e){var i=KS.bind(null,a,e);n.has(e)||(n.add(e),e.then(i,i))})}}function Ha(a,A){var n=A.deletions;if(n!==null)for(var e=0;e<n.length;e++){var i=n[e];try{var I=a,t=A,s=t;a:for(;s!==null;){switch(s.tag){case 5:X=s.stateNode,Oa=!1;break a;case 3:X=s.stateNode.containerInfo,Oa=!0;break a;case 4:X=s.stateNode.containerInfo,Oa=!0;break a}s=s.return}if(X===null)throw Error(K(160));Ws(I,t,i),X=null,Oa=!1;var r=i.alternate;r!==null&&(r.return=null),i.return=null}catch(u){v(i,A,u)}}if(A.subtreeFlags&12854)for(A=A.child;A!==null;)hs(A,a),A=A.sibling}function hs(a,A){var n=a.alternate,e=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:if(Ha(A,a),Ja(a),e&4){try{Gn(3,a,a.return),Si(3,a)}catch(D){v(a,a.return,D)}try{Gn(5,a,a.return)}catch(D){v(a,a.return,D)}}break;case 1:Ha(A,a),Ja(a),e&512&&n!==null&&VA(n,n.return);break;case 5:if(Ha(A,a),Ja(a),e&512&&n!==null&&VA(n,n.return),a.flags&32){var i=a.stateNode;try{pn(i,"")}catch(D){v(a,a.return,D)}}if(e&4&&(i=a.stateNode,i!=null)){var I=a.memoizedProps,t=n!==null?n.memoizedProps:I,s=a.type,r=a.updateQueue;if(a.updateQueue=null,r!==null)try{s==="input"&&I.type==="radio"&&I.name!=null&&s2(i,I),nI(s,t);var u=nI(s,I);for(t=0;t<r.length;t+=2){var R=r[t],N=r[t+1];R==="style"?o2(i,N):R==="dangerouslySetInnerHTML"?u2(i,N):R==="children"?pn(i,N):VI(i,R,N,u)}switch(s){case"input":$i(i,I);break;case"textarea":r2(i,I);break;case"select":var l=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!I.multiple;var m=I.value;m!=null?wA(i,!!I.multiple,m,!1):l!==!!I.multiple&&(I.defaultValue!=null?wA(i,!!I.multiple,I.defaultValue,!0):wA(i,!!I.multiple,I.multiple?[]:"",!1))}i[yn]=I}catch(D){v(a,a.return,D)}}break;case 6:if(Ha(A,a),Ja(a),e&4){if(a.stateNode===null)throw Error(K(162));i=a.stateNode,I=a.memoizedProps;try{i.nodeValue=I}catch(D){v(a,a.return,D)}}break;case 3:if(Ha(A,a),Ja(a),e&4&&n!==null&&n.memoizedState.isDehydrated)try{bn(A.containerInfo)}catch(D){v(a,a.return,D)}break;case 4:Ha(A,a),Ja(a);break;case 13:Ha(A,a),Ja(a),i=a.child,i.flags&8192&&(I=i.memoizedState!==null,i.stateNode.isHidden=I,!I||i.alternate!==null&&i.alternate.memoizedState!==null||(M1=w())),e&4&&pt(a);break;case 22:if(R=n!==null&&n.memoizedState!==null,a.mode&1?(ea=(u=ea)||R,Ha(A,a),ea=u):Ha(A,a),Ja(a),e&8192){if(u=a.memoizedState!==null,(a.stateNode.isHidden=u)&&!R&&a.mode&1)for(k=a,R=a.child;R!==null;){for(N=k=R;k!==null;){switch(l=k,m=l.child,l.tag){case 0:case 11:case 14:case 15:Gn(4,l,l.return);break;case 1:VA(l,l.return);var P=l.stateNode;if(typeof P.componentWillUnmount=="function"){e=l,n=l.return;try{A=e,P.props=A.memoizedProps,P.state=A.memoizedState,P.componentWillUnmount()}catch(D){v(e,n,D)}}break;case 5:VA(l,l.return);break;case 22:if(l.memoizedState!==null){Yt(N);continue}}m!==null?(m.return=l,k=m):Yt(N)}R=R.sibling}a:for(R=null,N=a;;){if(N.tag===5){if(R===null){R=N;try{i=N.stateNode,u?(I=i.style,typeof I.setProperty=="function"?I.setProperty("display","none","important"):I.display="none"):(s=N.stateNode,r=N.memoizedProps.style,t=r!=null&&r.hasOwnProperty("display")?r.display:null,s.style.display=E2("display",t))}catch(D){v(a,a.return,D)}}}else if(N.tag===6){if(R===null)try{N.stateNode.nodeValue=u?"":N.memoizedProps}catch(D){v(a,a.return,D)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===a)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===a)break a;for(;N.sibling===null;){if(N.return===null||N.return===a)break a;R===N&&(R=null),N=N.return}R===N&&(R=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:Ha(A,a),Ja(a),e&4&&pt(a);break;case 21:break;default:Ha(A,a),Ja(a)}}function Ja(a){var A=a.flags;if(A&2){try{a:{for(var n=a.return;n!==null;){if(Cs(n)){var e=n;break a}n=n.return}throw Error(K(160))}switch(e.tag){case 5:var i=e.stateNode;e.flags&32&&(pn(i,""),e.flags&=-33);var I=Lt(a);pI(a,I,i);break;case 3:case 4:var t=e.stateNode.containerInfo,s=Lt(a);LI(a,s,t);break;default:throw Error(K(161))}}catch(r){v(a,a.return,r)}a.flags&=-3}A&4096&&(a.flags&=-4097)}function SS(a,A,n){k=a,Fs(a)}function Fs(a,A,n){for(var e=(a.mode&1)!==0;k!==null;){var i=k,I=i.child;if(i.tag===22&&e){var t=i.memoizedState!==null||Re;if(!t){var s=i.alternate,r=s!==null&&s.memoizedState!==null||ea;s=Re;var u=ea;if(Re=t,(ea=r)&&!u)for(k=i;k!==null;)t=k,r=t.child,t.tag===22&&t.memoizedState!==null?Jt(i):r!==null?(r.return=t,k=r):Jt(i);for(;I!==null;)k=I,Fs(I),I=I.sibling;k=i,Re=s,ea=u}ct(a)}else i.subtreeFlags&8772&&I!==null?(I.return=i,k=I):ct(a)}}function ct(a){for(;k!==null;){var A=k;if(A.flags&8772){var n=A.alternate;try{if(A.flags&8772)switch(A.tag){case 0:case 11:case 15:ea||Si(5,A);break;case 1:var e=A.stateNode;if(A.flags&4&&!ea)if(n===null)e.componentDidMount();else{var i=A.elementType===A.type?n.memoizedProps:Ga(A.type,n.memoizedProps);e.componentDidUpdate(i,n.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}var I=A.updateQueue;I!==null&&Kt(A,I,e);break;case 3:var t=A.updateQueue;if(t!==null){if(n=null,A.child!==null)switch(A.child.tag){case 5:n=A.child.stateNode;break;case 1:n=A.child.stateNode}Kt(A,t,n)}break;case 5:var s=A.stateNode;if(n===null&&A.flags&4){n=s;var r=A.memoizedProps;switch(A.type){case"button":case"input":case"select":case"textarea":r.autoFocus&&n.focus();break;case"img":r.src&&(n.src=r.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(A.memoizedState===null){var u=A.alternate;if(u!==null){var R=u.memoizedState;if(R!==null){var N=R.dehydrated;N!==null&&bn(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}ea||A.flags&512&&fI(A)}catch(l){v(A,A.return,l)}}if(A===a){k=null;break}if(n=A.sibling,n!==null){n.return=A.return,k=n;break}k=A.return}}function Yt(a){for(;k!==null;){var A=k;if(A===a){k=null;break}var n=A.sibling;if(n!==null){n.return=A.return,k=n;break}k=A.return}}function Jt(a){for(;k!==null;){var A=k;try{switch(A.tag){case 0:case 11:case 15:var n=A.return;try{Si(4,A)}catch(r){v(A,n,r)}break;case 1:var e=A.stateNode;if(typeof e.componentDidMount=="function"){var i=A.return;try{e.componentDidMount()}catch(r){v(A,i,r)}}var I=A.return;try{fI(A)}catch(r){v(A,I,r)}break;case 5:var t=A.return;try{fI(A)}catch(r){v(A,t,r)}}}catch(r){v(A,A.return,r)}if(A===a){k=null;break}var s=A.sibling;if(s!==null){s.return=A.return,k=s;break}k=A.return}}var uS=Math.ceil,ze=za.ReactCurrentDispatcher,D1=za.ReactCurrentOwner,ga=za.ReactCurrentBatchConfig,p=0,$=null,Z=null,q=0,Na=0,jA=NA(0),_=0,xn=null,GA=0,ui=0,k1=0,On=null,Sa=null,M1=0,en=1/0,Fa=null,Qe=!1,cI=null,rA=null,Te=!1,nA=null,$e=0,fn=0,YI=null,He=-1,Ge=0;function ta(){return p&6?w():He!==-1?He:He=w()}function SA(a){return a.mode&1?p&2&&q!==0?q&-q:x3.transition!==null?(Ge===0&&(Ge=B2()),Ge):(a=Y,a!==0||(a=window.event,a=a===void 0?16:L2(a.type)),a):1}function ca(a,A,n,e){if(50<fn)throw fn=0,YI=null,Error(K(185));zn(a,n,e),(!(p&2)||a!==$)&&(a===$&&(!(p&2)&&(ui|=n),_===4&&aA(a,q)),la(a,e),n===1&&p===0&&!(A.mode&1)&&(en=w()+500,ti&&RA()))}function la(a,A){var n=a.callbackNode;xr(a,A);var e=Ye(a,a===$?q:0);if(e===0)n!==null&&j1(n),a.callbackNode=null,a.callbackPriority=0;else if(A=e&-e,a.callbackPriority!==A){if(n!=null&&j1(n),A===1)a.tag===0?Z3(bt.bind(null,a)):Q2(bt.bind(null,a)),v3(function(){!(p&6)&&RA()}),n=null;else{switch(U2(e)){case 1:n=_I;break;case 4:n=M2;break;case 16:n=ce;break;case 536870912:n=g2;break;default:n=ce}n=_s(n,ys.bind(null,a))}a.callbackPriority=A,a.callbackNode=n}}function ys(a,A){if(He=-1,Ge=0,p&6)throw Error(K(327));var n=a.callbackNode;if(QA()&&a.callbackNode!==n)return null;var e=Ye(a,a===$?q:0);if(e===0)return null;if(e&30||e&a.expiredLanes||A)A=Xe(a,e);else{A=e;var i=p;p|=2;var I=Vs();($!==a||q!==A)&&(Fa=null,en=w()+500,gA(a,A));do try{lS();break}catch(s){vs(a,s)}while(!0);s1(),ze.current=I,p=i,Z!==null?A=0:($=null,q=0,A=_)}if(A!==0){if(A===2&&(i=sI(a),i!==0&&(e=i,A=JI(a,i))),A===1)throw n=xn,gA(a,0),aA(a,e),la(a,w()),n;if(A===6)aA(a,e);else{if(i=a.current.alternate,!(e&30)&&!ES(i)&&(A=Xe(a,e),A===2&&(I=sI(a),I!==0&&(e=I,A=JI(a,I))),A===1))throw n=xn,gA(a,0),aA(a,e),la(a,w()),n;switch(a.finishedWork=i,a.finishedLanes=e,A){case 0:case 1:throw Error(K(345));case 2:PA(a,Sa,Fa);break;case 3:if(aA(a,e),(e&130023424)===e&&(A=M1+500-w(),10<A)){if(Ye(a,0)!==0)break;if(i=a.suspendedLanes,(i&e)!==e){ta(),a.pingedLanes|=a.suspendedLanes&i;break}a.timeoutHandle=RI(PA.bind(null,a,Sa,Fa),A);break}PA(a,Sa,Fa);break;case 4:if(aA(a,e),(e&4194240)===e)break;for(A=a.eventTimes,i=-1;0<e;){var t=31-pa(e);I=1<<t,t=A[t],t>i&&(i=t),e&=~I}if(e=i,e=w()-e,e=(120>e?120:480>e?480:1080>e?1080:1920>e?1920:3e3>e?3e3:4320>e?4320:1960*uS(e/1960))-e,10<e){a.timeoutHandle=RI(PA.bind(null,a,Sa,Fa),e);break}PA(a,Sa,Fa);break;case 5:PA(a,Sa,Fa);break;default:throw Error(K(329))}}}return la(a,w()),a.callbackNode===n?ys.bind(null,a):null}function JI(a,A){var n=On;return a.current.memoizedState.isDehydrated&&(gA(a,A).flags|=256),a=Xe(a,A),a!==2&&(A=Sa,Sa=n,A!==null&&bI(A)),a}function bI(a){Sa===null?Sa=a:Sa.push.apply(Sa,a)}function ES(a){for(var A=a;;){if(A.flags&16384){var n=A.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var e=0;e<n.length;e++){var i=n[e],I=i.getSnapshot;i=i.value;try{if(!Ya(I(),i))return!1}catch{return!1}}}if(n=A.child,A.subtreeFlags&16384&&n!==null)n.return=A,A=n;else{if(A===a)break;for(;A.sibling===null;){if(A.return===null||A.return===a)return!0;A=A.return}A.sibling.return=A.return,A=A.sibling}}return!0}function aA(a,A){for(A&=~k1,A&=~ui,a.suspendedLanes|=A,a.pingedLanes&=~A,a=a.expirationTimes;0<A;){var n=31-pa(A),e=1<<n;a[n]=-1,A&=~e}}function bt(a){if(p&6)throw Error(K(327));QA();var A=Ye(a,0);if(!(A&1))return la(a,w()),null;var n=Xe(a,A);if(a.tag!==0&&n===2){var e=sI(a);e!==0&&(A=e,n=JI(a,e))}if(n===1)throw n=xn,gA(a,0),aA(a,A),la(a,w()),n;if(n===6)throw Error(K(345));return a.finishedWork=a.current.alternate,a.finishedLanes=A,PA(a,Sa,Fa),la(a,w()),null}function g1(a,A){var n=p;p|=1;try{return a(A)}finally{p=n,p===0&&(en=w()+500,ti&&RA())}}function OA(a){nA!==null&&nA.tag===0&&!(p&6)&&QA();var A=p;p|=1;var n=ga.transition,e=Y;try{if(ga.transition=null,Y=1,a)return a()}finally{Y=e,ga.transition=n,p=A,!(p&6)&&RA()}}function B1(){Na=jA.current,C(jA)}function gA(a,A){a.finishedWork=null,a.finishedLanes=0;var n=a.timeoutHandle;if(n!==-1&&(a.timeoutHandle=-1,y3(n)),Z!==null)for(n=Z.return;n!==null;){var e=n;switch(i1(e),e.tag){case 1:e=e.type.childContextTypes,e!=null&&he();break;case 3:An(),C(Ea),C(ia),l1();break;case 5:o1(e);break;case 4:An();break;case 13:C(h);break;case 19:C(h);break;case 10:r1(e.type._context);break;case 22:case 23:B1()}n=n.return}if($=a,Z=a=uA(a.current,null),q=Na=A,_=0,xn=null,k1=ui=GA=0,Sa=On=null,kA!==null){for(A=0;A<kA.length;A++)if(n=kA[A],e=n.interleaved,e!==null){n.interleaved=null;var i=e.next,I=n.pending;if(I!==null){var t=I.next;I.next=i,e.next=t}n.pending=e}kA=null}return a}function vs(a,A){do{var n=Z;try{if(s1(),Be.current=_e,xe){for(var e=F.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}xe=!1}if(HA=0,Q=x=F=null,Hn=!1,jn=0,D1.current=null,n===null||n.return===null){_=1,xn=A,Z=null;break}a:{var I=a,t=n.return,s=n,r=A;if(A=q,s.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){var u=r,R=s,N=R.tag;if(!(R.mode&1)&&(N===0||N===11||N===15)){var l=R.alternate;l?(R.updateQueue=l.updateQueue,R.memoizedState=l.memoizedState,R.lanes=l.lanes):(R.updateQueue=null,R.memoizedState=null)}var m=gt(t);if(m!==null){m.flags&=-257,Bt(m,t,s,I,A),m.mode&1&&Mt(I,u,A),A=m,r=u;var P=A.updateQueue;if(P===null){var D=new Set;D.add(r),A.updateQueue=D}else P.add(r);break a}else{if(!(A&1)){Mt(I,u,A),U1();break a}r=Error(K(426))}}else if(W&&s.mode&1){var c=gt(t);if(c!==null){!(c.flags&65536)&&(c.flags|=256),Bt(c,t,s,I,A),I1(nn(r,s));break a}}I=r=nn(r,s),_!==4&&(_=2),On===null?On=[I]:On.push(I),I=t;do{switch(I.tag){case 3:I.flags|=65536,A&=-A,I.lanes|=A;var E=Us(I,r,A);Tt(I,E);break a;case 1:s=r;var S=I.type,o=I.stateNode;if(!(I.flags&128)&&(typeof S.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(rA===null||!rA.has(o)))){I.flags|=65536,A&=-A,I.lanes|=A;var T=ds(I,s,A);Tt(I,T);break a}}I=I.return}while(I!==null)}ws(n)}catch(M){A=M,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Vs(){var a=ze.current;return ze.current=_e,a===null?_e:a}function U1(){(_===0||_===3||_===2)&&(_=4),$===null||!(GA&268435455)&&!(ui&268435455)||aA($,q)}function Xe(a,A){var n=p;p|=2;var e=Vs();($!==a||q!==A)&&(Fa=null,gA(a,A));do try{oS();break}catch(i){vs(a,i)}while(!0);if(s1(),p=n,ze.current=e,Z!==null)throw Error(K(261));return $=null,q=0,_}function oS(){for(;Z!==null;)js(Z)}function lS(){for(;Z!==null&&!Wr();)js(Z)}function js(a){var A=xs(a.alternate,a,Na);a.memoizedProps=a.pendingProps,A===null?ws(a):Z=A,D1.current=null}function ws(a){var A=a;do{var n=A.alternate;if(a=A.return,A.flags&32768){if(n=tS(n,A),n!==null){n.flags&=32767,Z=n;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{_=6,Z=null;return}}else if(n=IS(n,A,Na),n!==null){Z=n;return}if(A=A.sibling,A!==null){Z=A;return}Z=A=a}while(A!==null);_===0&&(_=5)}function PA(a,A,n){var e=Y,i=ga.transition;try{ga.transition=null,Y=1,NS(a,A,n,e)}finally{ga.transition=i,Y=e}return null}function NS(a,A,n,e){do QA();while(nA!==null);if(p&6)throw Error(K(327));n=a.finishedWork;var i=a.finishedLanes;if(n===null)return null;if(a.finishedWork=null,a.finishedLanes=0,n===a.current)throw Error(K(177));a.callbackNode=null,a.callbackPriority=0;var I=n.lanes|n.childLanes;if(_r(a,I),a===$&&(Z=$=null,q=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Te||(Te=!0,_s(ce,function(){return QA(),null})),I=(n.flags&15990)!==0,n.subtreeFlags&15990||I){I=ga.transition,ga.transition=null;var t=Y;Y=1;var s=p;p|=4,D1.current=null,rS(a,n),hs(n,a),Y3(lI),Je=!!oI,lI=oI=null,a.current=n,SS(n),hr(),p=s,Y=t,ga.transition=I}else a.current=n;if(Te&&(Te=!1,nA=a,$e=i),I=a.pendingLanes,I===0&&(rA=null),vr(n.stateNode),la(a,w()),A!==null)for(e=a.onRecoverableError,n=0;n<A.length;n++)i=A[n],e(i.value,{componentStack:i.stack,digest:i.digest});if(Qe)throw Qe=!1,a=cI,cI=null,a;return $e&1&&a.tag!==0&&QA(),I=a.pendingLanes,I&1?a===YI?fn++:(fn=0,YI=a):fn=0,RA(),null}function QA(){if(nA!==null){var a=U2($e),A=ga.transition,n=Y;try{if(ga.transition=null,Y=16>a?16:a,nA===null)var e=!1;else{if(a=nA,nA=null,$e=0,p&6)throw Error(K(331));var i=p;for(p|=4,k=a.current;k!==null;){var I=k,t=I.child;if(k.flags&16){var s=I.deletions;if(s!==null){for(var r=0;r<s.length;r++){var u=s[r];for(k=u;k!==null;){var R=k;switch(R.tag){case 0:case 11:case 15:Gn(8,R,I)}var N=R.child;if(N!==null)N.return=R,k=N;else for(;k!==null;){R=k;var l=R.sibling,m=R.return;if(bs(R),R===u){k=null;break}if(l!==null){l.return=m,k=l;break}k=m}}}var P=I.alternate;if(P!==null){var D=P.child;if(D!==null){P.child=null;do{var c=D.sibling;D.sibling=null,D=c}while(D!==null)}}k=I}}if(I.subtreeFlags&2064&&t!==null)t.return=I,k=t;else a:for(;k!==null;){if(I=k,I.flags&2048)switch(I.tag){case 0:case 11:case 15:Gn(9,I,I.return)}var E=I.sibling;if(E!==null){E.return=I.return,k=E;break a}k=I.return}}var S=a.current;for(k=S;k!==null;){t=k;var o=t.child;if(t.subtreeFlags&2064&&o!==null)o.return=t,k=o;else a:for(t=S;k!==null;){if(s=k,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Si(9,s)}}catch(M){v(s,s.return,M)}if(s===t){k=null;break a}var T=s.sibling;if(T!==null){T.return=s.return,k=T;break a}k=s.return}}if(p=i,RA(),Wa&&typeof Wa.onPostCommitFiberRoot=="function")try{Wa.onPostCommitFiberRoot(Ai,a)}catch{}e=!0}return e}finally{Y=n,ga.transition=A}}return!1}function Ct(a,A,n){A=nn(n,A),A=Us(a,A,1),a=sA(a,A,1),A=ta(),a!==null&&(zn(a,1,A),la(a,A))}function v(a,A,n){if(a.tag===3)Ct(a,a,n);else for(;A!==null;){if(A.tag===3){Ct(A,a,n);break}else if(A.tag===1){var e=A.stateNode;if(typeof A.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(rA===null||!rA.has(e))){a=nn(n,a),a=ds(A,a,1),A=sA(A,a,1),a=ta(),A!==null&&(zn(A,1,a),la(A,a));break}}A=A.return}}function RS(a,A,n){var e=a.pingCache;e!==null&&e.delete(A),A=ta(),a.pingedLanes|=a.suspendedLanes&n,$===a&&(q&n)===n&&(_===4||_===3&&(q&130023424)===q&&500>w()-M1?gA(a,0):k1|=n),la(a,A)}function Zs(a,A){A===0&&(a.mode&1?(A=te,te<<=1,!(te&130023424)&&(te=4194304)):A=1);var n=ta();a=xa(a,A),a!==null&&(zn(a,A,n),la(a,n))}function TS(a){var A=a.memoizedState,n=0;A!==null&&(n=A.retryLane),Zs(a,n)}function KS(a,A){var n=0;switch(a.tag){case 13:var e=a.stateNode,i=a.memoizedState;i!==null&&(n=i.retryLane);break;case 19:e=a.stateNode;break;default:throw Error(K(314))}e!==null&&e.delete(A),Zs(a,n)}var xs;xs=function(a,A,n){if(a!==null)if(a.memoizedProps!==A.pendingProps||Ea.current)ua=!0;else{if(!(a.lanes&n)&&!(A.flags&128))return ua=!1,iS(a,A,n);ua=!!(a.flags&131072)}else ua=!1,W&&A.flags&1048576&&$2(A,ve,A.index);switch(A.lanes=0,A.tag){case 2:var e=A.type;de(a,A),a=A.pendingProps;var i=XA(A,ia.current);zA(A,n),i=R1(null,A,e,a,i,n);var I=T1();return A.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(A.tag=1,A.memoizedState=null,A.updateQueue=null,oa(e)?(I=!0,Fe(A)):I=!1,A.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,u1(A),i.updater=ri,A.stateNode=i,i._reactInternals=A,MI(A,e,a,n),A=UI(null,A,e,!0,I,n)):(A.tag=0,W&&I&&e1(A),Ia(null,A,i,n),A=A.child),A;case 16:e=A.elementType;a:{switch(de(a,A),a=A.pendingProps,i=e._init,e=i(e._payload),A.type=e,i=A.tag=PS(e),a=Ga(e,a),i){case 0:A=BI(null,A,e,a,n);break a;case 1:A=Ht(null,A,e,a,n);break a;case 11:A=Ut(null,A,e,a,n);break a;case 14:A=dt(null,A,e,Ga(e.type,a),n);break a}throw Error(K(306,e,""))}return A;case 0:return e=A.type,i=A.pendingProps,i=A.elementType===e?i:Ga(e,i),BI(a,A,e,i,n);case 1:return e=A.type,i=A.pendingProps,i=A.elementType===e?i:Ga(e,i),Ht(a,A,e,i,n);case 3:a:{if(fs(A),a===null)throw Error(K(387));e=A.pendingProps,I=A.memoizedState,i=I.element,es(a,A),we(A,e,null,n);var t=A.memoizedState;if(e=t.element,I.isDehydrated)if(I={element:e,isDehydrated:!1,cache:t.cache,pendingSuspenseBoundaries:t.pendingSuspenseBoundaries,transitions:t.transitions},A.updateQueue.baseState=I,A.memoizedState=I,A.flags&256){i=nn(Error(K(423)),A),A=Gt(a,A,e,n,i);break a}else if(e!==i){i=nn(Error(K(424)),A),A=Gt(a,A,e,n,i);break a}else for(Ra=tA(A.stateNode.containerInfo.firstChild),Ta=A,W=!0,fa=null,n=As(A,null,e,n),A.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qA(),e===i){A=_a(a,A,n);break a}Ia(a,A,e,n)}A=A.child}return A;case 5:return is(A),a===null&&PI(A),e=A.type,i=A.pendingProps,I=a!==null?a.memoizedProps:null,t=i.children,NI(e,i)?t=null:I!==null&&NI(e,I)&&(A.flags|=32),Os(a,A),Ia(a,A,t,n),A.child;case 6:return a===null&&PI(A),null;case 13:return Ls(a,A,n);case 4:return E1(A,A.stateNode.containerInfo),e=A.pendingProps,a===null?A.child=an(A,null,e,n):Ia(a,A,e,n),A.child;case 11:return e=A.type,i=A.pendingProps,i=A.elementType===e?i:Ga(e,i),Ut(a,A,e,i,n);case 7:return Ia(a,A,A.pendingProps,n),A.child;case 8:return Ia(a,A,A.pendingProps.children,n),A.child;case 12:return Ia(a,A,A.pendingProps.children,n),A.child;case 10:a:{if(e=A.type._context,i=A.pendingProps,I=A.memoizedProps,t=i.value,J(Ve,e._currentValue),e._currentValue=t,I!==null)if(Ya(I.value,t)){if(I.children===i.children&&!Ea.current){A=_a(a,A,n);break a}}else for(I=A.child,I!==null&&(I.return=A);I!==null;){var s=I.dependencies;if(s!==null){t=I.child;for(var r=s.firstContext;r!==null;){if(r.context===e){if(I.tag===1){r=ja(-1,n&-n),r.tag=2;var u=I.updateQueue;if(u!==null){u=u.shared;var R=u.pending;R===null?r.next=r:(r.next=R.next,R.next=r),u.pending=r}}I.lanes|=n,r=I.alternate,r!==null&&(r.lanes|=n),DI(I.return,n,A),s.lanes|=n;break}r=r.next}}else if(I.tag===10)t=I.type===A.type?null:I.child;else if(I.tag===18){if(t=I.return,t===null)throw Error(K(341));t.lanes|=n,s=t.alternate,s!==null&&(s.lanes|=n),DI(t,n,A),t=I.sibling}else t=I.child;if(t!==null)t.return=I;else for(t=I;t!==null;){if(t===A){t=null;break}if(I=t.sibling,I!==null){I.return=t.return,t=I;break}t=t.return}I=t}Ia(a,A,i.children,n),A=A.child}return A;case 9:return i=A.type,e=A.pendingProps.children,zA(A,n),i=Ba(i),e=e(i),A.flags|=1,Ia(a,A,e,n),A.child;case 14:return e=A.type,i=Ga(e,A.pendingProps),i=Ga(e.type,i),dt(a,A,e,i,n);case 15:return Hs(a,A,A.type,A.pendingProps,n);case 17:return e=A.type,i=A.pendingProps,i=A.elementType===e?i:Ga(e,i),de(a,A),A.tag=1,oa(e)?(a=!0,Fe(A)):a=!1,zA(A,n),Bs(A,e,i),MI(A,e,i,n),UI(null,A,e,!0,a,n);case 19:return ps(a,A,n);case 22:return Gs(a,A,n)}throw Error(K(156,A.tag))};function _s(a,A){return k2(a,A)}function mS(a,A,n,e){this.tag=a,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=A,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ma(a,A,n,e){return new mS(a,A,n,e)}function d1(a){return a=a.prototype,!(!a||!a.isReactComponent)}function PS(a){if(typeof a=="function")return d1(a)?1:0;if(a!=null){if(a=a.$$typeof,a===wI)return 11;if(a===ZI)return 14}return 2}function uA(a,A){var n=a.alternate;return n===null?(n=Ma(a.tag,A,a.key,a.mode),n.elementType=a.elementType,n.type=a.type,n.stateNode=a.stateNode,n.alternate=a,a.alternate=n):(n.pendingProps=A,n.type=a.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=a.flags&14680064,n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,A=a.dependencies,n.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext},n.sibling=a.sibling,n.index=a.index,n.ref=a.ref,n}function Oe(a,A,n,e,i,I){var t=2;if(e=a,typeof a=="function")d1(a)&&(t=1);else if(typeof a=="string")t=5;else a:switch(a){case YA:return BA(n.children,i,I,A);case jI:t=8,i|=8;break;case Zi:return a=Ma(12,n,A,i|2),a.elementType=Zi,a.lanes=I,a;case xi:return a=Ma(13,n,A,i),a.elementType=xi,a.lanes=I,a;case _i:return a=Ma(19,n,A,i),a.elementType=_i,a.lanes=I,a;case i2:return Ei(n,i,I,A);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case n2:t=10;break a;case e2:t=9;break a;case wI:t=11;break a;case ZI:t=14;break a;case $a:t=16,e=null;break a}throw Error(K(130,a==null?a:typeof a,""))}return A=Ma(t,n,A,i),A.elementType=a,A.type=e,A.lanes=I,A}function BA(a,A,n,e){return a=Ma(7,a,e,A),a.lanes=n,a}function Ei(a,A,n,e){return a=Ma(22,a,e,A),a.elementType=i2,a.lanes=n,a.stateNode={isHidden:!1},a}function Vi(a,A,n){return a=Ma(6,a,null,A),a.lanes=n,a}function ji(a,A,n){return A=Ma(4,a.children!==null?a.children:[],a.key,A),A.lanes=n,A.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},A}function DS(a,A,n,e,i){this.tag=A,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bi(0),this.expirationTimes=Bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.identifierPrefix=e,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function H1(a,A,n,e,i,I,t,s,r){return a=new DS(a,A,n,s,r),A===1?(A=1,I===!0&&(A|=8)):A=0,I=Ma(3,null,null,A),a.current=I,I.stateNode=a,I.memoizedState={element:e,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},u1(I),a}function kS(a,A,n){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cA,key:e==null?null:""+e,children:a,containerInfo:A,implementation:n}}function zs(a){if(!a)return oA;a=a._reactInternals;a:{if(LA(a)!==a||a.tag!==1)throw Error(K(170));var A=a;do{switch(A.tag){case 3:A=A.stateNode.context;break a;case 1:if(oa(A.type)){A=A.stateNode.__reactInternalMemoizedMergedChildContext;break a}}A=A.return}while(A!==null);throw Error(K(171))}if(a.tag===1){var n=a.type;if(oa(n))return z2(a,n,A)}return A}function Qs(a,A,n,e,i,I,t,s,r){return a=H1(n,e,!0,a,i,I,t,s,r),a.context=zs(null),n=a.current,e=ta(),i=SA(n),I=ja(e,i),I.callback=A??null,sA(n,I,i),a.current.lanes=i,zn(a,i,e),la(a,e),a}function oi(a,A,n,e){var i=A.current,I=ta(),t=SA(i);return n=zs(n),A.context===null?A.context=n:A.pendingContext=n,A=ja(I,t),A.payload={element:a},e=e===void 0?null:e,e!==null&&(A.callback=e),a=sA(i,A,t),a!==null&&(ca(a,i,t,I),ge(a,i,t)),t}function qe(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Wt(a,A){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var n=a.retryLane;a.retryLane=n!==0&&n<A?n:A}}function G1(a,A){Wt(a,A),(a=a.alternate)&&Wt(a,A)}var $s=typeof reportError=="function"?reportError:function(a){console.error(a)};function O1(a){this._internalRoot=a}li.prototype.render=O1.prototype.render=function(a){var A=this._internalRoot;if(A===null)throw Error(K(409));oi(a,A,null,null)};li.prototype.unmount=O1.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var A=a.containerInfo;OA(function(){oi(null,a,null,null)}),A[Za]=null}};function li(a){this._internalRoot=a}li.prototype.unstable_scheduleHydration=function(a){if(a){var A=G2();a={blockedOn:null,target:a,priority:A};for(var n=0;n<qa.length&&A!==0&&A<qa[n].priority;n++);qa.splice(n,0,a),n===0&&f2(a)}};function f1(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function Ni(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11&&(a.nodeType!==8||a.nodeValue!==" react-mount-point-unstable "))}function ht(){}function MS(a,A,n,e,i){if(i){if(typeof e=="function"){var I=e;e=function(){var u=qe(t);I.call(u)}}var t=Qs(A,e,a,0,null,!1,!1,"",ht);return a._reactRootContainer=t,a[Za]=t.current,hn(a.nodeType===8?a.parentNode:a),OA(),t}for(;i=a.lastChild;)a.removeChild(i);if(typeof e=="function"){var s=e;e=function(){var u=qe(r);s.call(u)}}var r=H1(a,0,!1,null,null,!1,!1,"",ht);return a._reactRootContainer=r,a[Za]=r.current,hn(a.nodeType===8?a.parentNode:a),OA(function(){oi(A,r,n,e)}),r}function Ri(a,A,n,e,i){var I=n._reactRootContainer;if(I){var t=I;if(typeof i=="function"){var s=i;i=function(){var r=qe(t);s.call(r)}}oi(A,t,a,i)}else t=MS(n,A,a,i,e);return qe(t)}d2=function(a){switch(a.tag){case 3:var A=a.stateNode;if(A.current.memoizedState.isDehydrated){var n=Dn(A.pendingLanes);n!==0&&(zI(A,n|1),la(A,w()),!(p&6)&&(en=w()+500,RA()))}break;case 13:OA(function(){var e=xa(a,1);if(e!==null){var i=ta();ca(e,a,1,i)}}),G1(a,1)}};QI=function(a){if(a.tag===13){var A=xa(a,134217728);if(A!==null){var n=ta();ca(A,a,134217728,n)}G1(a,134217728)}};H2=function(a){if(a.tag===13){var A=SA(a),n=xa(a,A);if(n!==null){var e=ta();ca(n,a,A,e)}G1(a,A)}};G2=function(){return Y};O2=function(a,A){var n=Y;try{return Y=a,A()}finally{Y=n}};iI=function(a,A,n){switch(A){case"input":if($i(a,n),A=n.name,n.type==="radio"&&A!=null){for(n=a;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+A)+'][type="radio"]'),A=0;A<n.length;A++){var e=n[A];if(e!==a&&e.form===a.form){var i=Ii(e);if(!i)throw Error(K(90));t2(e),$i(e,i)}}}break;case"textarea":r2(a,n);break;case"select":A=n.value,A!=null&&wA(a,!!n.multiple,A,!1)}};R2=g1;T2=OA;var gS={usingClientEntryPoint:!1,Events:[$n,WA,Ii,l2,N2,g1]},Kn={findFiberByHostInstance:DA,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BS={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:za.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){return a=P2(a),a===null?null:a.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ke=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ke.isDisabled&&Ke.supportsFiber)try{Ai=Ke.inject(BS),Wa=Ke}catch{}}ma.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;ma.createPortal=function(a,A){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f1(A))throw Error(K(200));return kS(a,A,null,n)};ma.createRoot=function(a,A){if(!f1(a))throw Error(K(299));var n=!1,e="",i=$s;return A!=null&&(A.unstable_strictMode===!0&&(n=!0),A.identifierPrefix!==void 0&&(e=A.identifierPrefix),A.onRecoverableError!==void 0&&(i=A.onRecoverableError)),A=H1(a,1,!1,null,null,n,!1,e,i),a[Za]=A.current,hn(a.nodeType===8?a.parentNode:a),new O1(A)};ma.findDOMNode=function(a){if(a==null)return null;if(a.nodeType===1)return a;var A=a._reactInternals;if(A===void 0)throw typeof a.render=="function"?Error(K(188)):(a=Object.keys(a).join(","),Error(K(268,a)));return a=P2(A),a=a===null?null:a.stateNode,a};ma.flushSync=function(a){return OA(a)};ma.hydrate=function(a,A,n){if(!Ni(A))throw Error(K(200));return Ri(null,a,A,!0,n)};ma.hydrateRoot=function(a,A,n){if(!f1(a))throw Error(K(405));var e=n!=null&&n.hydratedSources||null,i=!1,I="",t=$s;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(I=n.identifierPrefix),n.onRecoverableError!==void 0&&(t=n.onRecoverableError)),A=Qs(A,null,a,1,n??null,i,!1,I,t),a[Za]=A.current,hn(a),e)for(a=0;a<e.length;a++)n=e[a],i=n._getVersion,i=i(n._source),A.mutableSourceEagerHydrationData==null?A.mutableSourceEagerHydrationData=[n,i]:A.mutableSourceEagerHydrationData.push(n,i);return new li(A)};ma.render=function(a,A,n){if(!Ni(A))throw Error(K(200));return Ri(null,a,A,!1,n)};ma.unmountComponentAtNode=function(a){if(!Ni(a))throw Error(K(40));return a._reactRootContainer?(OA(function(){Ri(null,null,a,!1,function(){a._reactRootContainer=null,a[Za]=null})}),!0):!1};ma.unstable_batchedUpdates=g1;ma.unstable_renderSubtreeIntoContainer=function(a,A,n,e){if(!Ni(n))throw Error(K(200));if(a==null||a._reactInternals===void 0)throw Error(K(38));return Ri(a,A,n,!1,e)};ma.version="18.3.1-next-f1338f8080-20240426";function Xs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xs)}catch(a){console.error(a)}}Xs(),Xt.exports=ma;var US=Xt.exports,qs,Ft=US;qs=Ft.createRoot,Ft.hydrateRoot;/**
 * @license lucide-react v0.320.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.320.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),GS=(a,A)=>{const n=La.forwardRef(({color:e="currentColor",size:i=24,strokeWidth:I=2,absoluteStrokeWidth:t,className:s="",children:r,...u},R)=>La.createElement("svg",{ref:R,...dS,width:i,height:i,stroke:e,strokeWidth:t?Number(I)*24/Number(i):I,className:["lucide",`lucide-${HS(a)}`,s].join(" "),...u},[...A.map(([N,l])=>La.createElement(N,l)),...Array.isArray(r)?r:[r]]));return n.displayName=`${a}`,n};/**
 * @license lucide-react v0.320.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=GS("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),fS=`KELAS,HARI,MATA_KULIAH,WAKTU,RUANG,DOSEN,Kode_Kelas
1DB01,Senin,Algoritma & Pemrograman 1A *,2/3,G315,RINA REFIANTI MUTIARA,1DB01
1DB01,Senin,Ilmu Alamiah Terapan B,4/5,G315,RINA RAVELA SUSANTIKA,1DB01
1DB01,Senin,Ilmu Alamiah Terapan A,7/8,G115,RINA RAVELA SUSANTIKA,1DB01
1DB01,Senin,Algoritma & Pemrograman 1B *,9/10,G115,AHMAD HIDAYAT,1DB01
1DB01,Rabu,Matematika Dasar 1A,4/5,G128,DYAH CITA IRAWATI,1DB01
1DB01,Rabu,Sistem Basis Data 1 **,7/8,G128,SUHARNI,1DB01
1DB01,Rabu,Pengantar Sistem Informasi *,9/10,G128,EGY WISNU MOYO,1DB01
1DB01,Kamis,Pengantar Sistem Komputer A **,3/4,G1410,PUJI SULARSIH,1DB01
1DB01,Kamis,Bahasa Indonesia,5/6,G112,ARI WIJAYA BASUKI RAHARJO,1DB01
1DB01,Kamis,Pengantar Sistem Komputer C **,9/10,G217,FITRI SJAFRINA,1DB01
1DB01,Jum'at,Algoritma & Pemrograman 1C *,3/4,E346,DINA AGUSTEN,1DB01
1DB01,Jum'at,Matematika Dasar 1B,7/8,E236,PRISKA RESTU UTAMI,1DB01
1DB01,Jum'at,Pengantar Sistem Komputer B **,9/10,E236,SRI DWI SUGIARSIH,1DB01
2DB01,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2DB01
2DB01,Selasa,Pemrograman Berbasis Web 1,1/2,E241,HANUM PUTRI PERMATASARI,2DB01
2DB01,Selasa,Teknik Pemrog. Terstruktur 1 **,4/5,E241,DINA AGUSTEN,2DB01
2DB01,Selasa,Pemrograman Berbasis Mobile 1,6/7,E241,MUFNI ALIDA,2DB01
2DB01,Kamis,Arst. dan Org. Sistem Komputer,1/2,G445,I WAYAN KRISHNA DARMA,2DB01
2DB01,Kamis,Pendidikan Pancasila *,3/4,G445,METI NURHAYATI,2DB01
2DB01,Kamis,Matematika Informatika 1 **,6/7,G122,HENNY WIDOWATI FARIDA,2DB01
2DB01,Kamis,Dasar Perancangan Sistem *,8/9/10,G122,RESTU SAPUTRO,2DB01
2DB01,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2DB01
3DB01,Selasa,Komunikasi Data dan Jaringan Komp,1/2/3,E443,SINGGIH JATMIKO,3DB01
3DB01,Selasa,Proyek Pemrog. Berbasis Mobile,4/5,E443,MUFNI ALIDA,3DB01
3DB01,Selasa,Proyek Pemrog. Berbasis Web,7/8,E238,RHEZA ANDIKA,3DB01
3DB01,Selasa,Teknik Riset Operasional **,9/10,E238,DWI SUHARTANTO,3DB01
3DB01,Rabu,Dasar Perancangan Sistem *,1/2/3,E242,I KOMANG SUGIARTHA,3DB01
3DB01,Rabu,Cloud Computing,5/6,E326,ERNASTUTI,3DB01
3DB01,Rabu,Pengantar Grafik Komputer */**,9/10,E426,RAGIEL HADI PRAYITNO,3DB01
3DB01,Kamis,Pemrograman Multimedia 1 **,3/4,E312,DINA SUCI DARWATI,3DB01
3DB01,Kamis,Digital Marketing,6/7,E237,HANTORO ARIEF GISIJANTO,3DB01
1DC01,Senin,Bahasa Inggris,5/6,E334,MISI ELISA FATIMAH,1DC01
1DC01,Senin,Pengantar Teknologi Informasi,8/9,E226,IRNA FITRIYAH,1DC01
1DC01,Kamis,Aljabar Linier,1/2,E347,NURICHWAN,1DC01
1DC01,Kamis,Bahasa Indonesia,3/4,E347,RAFIQA MAULIDIA,1DC01
1DC01,Kamis,Rangkaian Listrik & Sistem Linier,5/6,E347,DESY KRISTYAWATI,1DC01
1DC01,Kamis,Pendidikan Pancasila *,8/9,E347,NUR PUTRI ERDIANTI,1DC01
1DC01,Jum'at,Fisika Dasar 1,1/2,E434,GATOT PRAYOGO,1DC01
1DC01,Jum'at,Matematika Dasar *,3/4,E434,JENNIE KUSUMANINGRUM,1DC01
1DC01,Jum'at,Algoritma & Pemrograman,7/8,E434,FIVI SYUKRIAH,1DC01
1DC02,Senin,Matematika Dasar *,1/2,F235,MUHAMMAD IMRON HADISANTOSA,1DC02
1DC02,Senin,Aljabar Linier,3/4,F235,DYAH CITA IRAWATI,1DC02
1DC02,Senin,Bahasa Inggris,5/6 G,E334,MISI ELISA FATIMAH,1DC02
1DC02,Rabu,Pengantar Teknologi Informasi,6/7,F235,SYARIFAH AZHARINA SYAFRUDIN,1DC02
1DC02,Rabu,Fisika Dasar 1,8/9,F235,YASMAN RIANTO,1DC02
1DC02,Kamis,Algoritma & Pemprograman,1/2,F235,ERNIANTI HASIBUAN,1DC02
1DC02,Kamis,Praktikum Algoritma & Pemprograman,3/4,F235,ERNIANTI HASIBUAN,1DC02
1DC02,Kamis,Bahasa Indonesia,3/4 G,E347,RAFIQA MAULIDIA,1DC02
1DC02,Kamis,Rangkaian Listrik & Sistem Linier,7/8,F235,RUDI IRAWAN,1DC02
1DC02,Kamis,Pendidikan Pancasila *,8/9 G,E347,NUR PUTRI ERDIANTI,1DC02
2DC01,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2DC01
2DC01,Selasa,Manaj. Proyek Teknologi Informasi,1/2,G112,ROGAYAH,2DC01
2DC01,Selasa,Komunikasi Data,4/5,G233,MAULANA MUJAHIDIN,2DC01
2DC01,Selasa,Sistem Operasi */**,6/7/8,G233,MATIAS KRISTIAN KELVIANDY,2DC01
2DC01,Rabu,Pendidikan Agama Islam,1/2,E346,MAULANA SYARIF HIDAYATULLAH,2DC01
2DC01,Rabu,Probabilitas & Statistika,3/4,E346,RISNAWATI,2DC01
2DC01,Jum'at,Sistem Digital *,2/3/4,G2410,MUDRIKA,2DC01
2DC01,Jum'at,Bahasa Inggris,7/8,G238,ATIKA LISTYA,2DC01
2DC01,Jum'at,Elektronika Lanjut,9/10,G222,BAMBANG HARIANTO,2DC01
2DC01,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2DC01
2DC02,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2DC02
2DC02,Selasa,Sistem Digital *,1/2/3,F233,SWELANDIAH ENDAH PERTIWI,2DC02
2DC02,Selasa,Praktikum Sistem Digital,4/5,F233,SWELANDIAH ENDAH PERTIWI,2DC02
2DC02,Selasa,Manajemen Proyek  Teknologi Informasi,6/7,F233,NOVITA SULISTIOWATI,2DC02
2DC02,Rabu,Sistem Operasi  */**,8/9,F233,FARID THALIB,2DC02
2DC02,Kamis,Elektronika Lanjut,2/3,F233,WIDYASTUTI,2DC02
2DC02,Kamis,Praktikum Elektronika Lanjut,4/5,F233,WIDYASTUTI,2DC02
2DC02,Kamis,Bahasa Inggris,6/7,F233,SRI HARTATI,2DC02
2DC02,Jumat,Komunikasi Data,3/4,F233,EMY HARYATMI,2DC02
2DC02,Jumat,Pendidikan Agama Islam,7/8,F233,MASWANIH,2DC02
2DC02,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2DC02
2DC02,Sabtu,Probabilitas & Statistika,3/4,F233,RINA SUGIARTI,2DC02
3DC01,Senin,Sistem Tertanam (Embedded Sys.) *,1/2/3,D623,FARID THALIB,3DC01
3DC01,Senin,Analisis Kinerja Sistem,4/5,D623,PURNAWARMAN MUSA,3DC01
3DC01,Rabu,Pemrograman Perangkat Bergerak,1/2,D624,SUNNY ARIEF SUDIRO,3DC01
3DC01,Rabu,Jaringan Komputer Lanjut,3/4/5,D624,EMY HARYATMI,3DC01
3DC01,Rabu,Etika Profesi,9/10,D635,ARI ROSEMALA TRIASARI,3DC01
3DC01,Kamis,Aplikasi Internet of Things (IoT),1/2/3/4,E338,SWELANDIAH ENDAH PRATIWI,3DC01
3DC01,Kamis,Robotika **,6/7,E514,ALFIE SYAHRI,3DC01
3DC02,Senin,Sistem Tertanam ( Embedded System)*,1/2/3,F232,ROBBY KURNIAWAN HARAHAP,3DC02
3DC02,Senin,Praktikum Sistem Tertanam ( Embedded System),4/5,F232,ROBBY KURNIAWAN HARAHAP,3DC02
3DC02,Senin,Robotika **,9/10,F232,MARA NUGRAHA,3DC02
3DC02,Selasa,Jaringan Komputer  Lanjut,1/2,F232,ARY BIMA KURNIAWAN,3DC02
3DC02,Selasa,Praktikum Jaringan Komputer Lanjut,3/4,F232,ARY BIMA KURNIAWAN,3DC02
3DC02,Selasa,Analisis Kinerja Sistem,6/7,F232,SINGGIH JATMIKO,3DC02
3DC02,Kamis,Etika Profesi,3/4,F232,OKTAVIANI,3DC02
3DC02,Jumat,Aplikasi Internet of Things (Capstone Project),1/2/3/4,F232,MOHAMMAD IQBAL,3DC02
3DC02,Jumat,Pemrograman Perangkat Bergerak,7/8,F232,DIANA IKASARI,3DC02
3DC02,Jumat,Praktikum Pemrograman Perangkat Bergerak,9/10,F232,DIANA IKASARI,3DC02
1DA01,Rabu,Algoritma & Pemrograman 1B **,3/4,F8482,AHMAD HIDAYAT,1DA01
1DA01,Rabu,Pengantar Akuntansi 1 & Prak. **,6/7/8,F8452,IRA PHAJAR LESTARI,1DA01
1DA01,Rabu,Peng. Komputer 1B & Prak. **,9/10,F8452,ERNIANTI HASIBUAN,1DA01
1DA01,Kamis,Algoritma & Pemrograman 1A **,1/2,G433,EGY WISNU MOYO,1DA01
1DA01,Kamis,Komunikasi B.Inggris Bisnis 1,3/4,G433,DYANI MASITA DEWI,1DA01
1DA01,Kamis,Pengantar Bisnis,5/6,G433,RISA SEPTIANI,1DA01
1DA01,Kamis,Peng. Komputer 1C & Prak. **,9/10,G424,WINARSIH,1DA01
1DA01,Jum'at,Pendidikan Kewarganegaraan,1/2,E521,SULISTINING TRIMULYANI,1DA01
1DA01,Jum'at,Pengantar Ekonomi,3/4,E521,ELVIA FARDIANA,1DA01
1DA01,Sabtu,Ilmu Alamiah Dasar,1/2,E423,MINIK RINAYANTI,1DA01
1DA01,Sabtu,Peng. Komputer 1A & Prak. **,3/4,E423,FRANOVA/MARIA SRI WULANDARI,1DA01
1DA01,Sabtu,Pendidikan Agama Islam,6/7,E423,FATCHULLAH ZARKASI,1DA01
1DA02,Rabu,Pengantar Akuntansi 1 & Prak**,1/2,F223,IRA PHAJAR LESTARI,1DA02
1DA02,Rabu,Pengantar Komputer 1 & Prak**,4/5,F223,RINI ARIANTY,1DA02
1DA02,Rabu,Pengantar Ekonomi,6/7,F223,DANDY KURNIA,1DA02
1DA02,Rabu,Komunikasi Bahasa Inggris Bisnis 1,8/9,F223,SEPTIAN DWI PUTRI,1DA02
1DA02,Kamis,Pengantar Bisnis,2/3,F223,ALDILLA KURNIA D P,1DA02
1DA02,Kamis,Algoritma & Pemrograman 1**,4/5,F223,WITARI ARYUNANI,1DA02
1DA02,Jumat,Pendidikan Kewarganegaraan,1/2 G,E521,SULISTINING TRIMULYANI,1DA02
1DA02,Sabtu,Ilmu Alamiah Dasar,1/2 G,E423,MINIK RINAYANTI,1DA02
1DA02,Sabtu,Pendidikan Agama Islam,6/7 G,E423,FATCHULLAH ZARKASI,1DA02
2DA01,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2DA01
2DA01,Selasa,Pengantar Manajemen,1/2,G144,DINI DWI ERMAWATI,2DA01
2DA01,Selasa,Komp. Perpajakan 1 & Prak.**,5/6,G226,HARYONO,2DA01
2DA01,Selasa,Statistika 1 & Prak. */**,7/8/9,G226,EVA PRODITUS SIANTURI,2DA01
2DA01,Rabu,Kewirausahaan,3/4,E246,ESTININGSIH,2DA01
2DA01,Rabu,Akuntansi Keu.Menengah 1A&Prak **,7/8,E213,SYNTHA NOVIYANA,2DA01
2DA01,Rabu,Akuntansi Keu.Menengah 1B&Prak **,9/10,E213,SYNTHA NOVIYANA,2DA01
2DA01,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2DA01
2DA01,Sabtu,Perangkat Lunak Akt.1&Prak.**,1/2,ELab53,SAMUEL DAVID LEE,2DA01
2DA01,Sabtu,Komp. Anggaran 1 & Prak. **,3/4,E222,DINI SEPTIANI,2DA01
2DA01,Sabtu,Pemrograman Akuntansi 1 */**,6/7,ELab53,TERTIO KUNTO DEWO,2DA01
2DA02,Senin,Social Networking & Creative Content,,UGTV,TEAM TEACHING,2DA02
2DA02,Senin,Komputerisasi Anggaran 1 & Prak**,2/3,F221,LANA SULARTO,2DA02
2DA02,Senin,Akunt.Keuangan Menengah 1 & Prak**,5/6/7,F221,SUNDARI,2DA02
2DA02,Selasa,Statistika 1 & Prak*/**,1/2,F221,ADI KUSWANTO,2DA02
2DA02,Selasa,Pengantar Manajemen,3/4,F221,AGUS SRI ISWIYANTI,2DA02
2DA02,Selasa,Kewirausahaan,7/8,F221,SRI MURTIASIH,2DA02
2DA02,Kamis,Perangkat Lunak Akuntansi 1 & Prak**,1/2,F221,SRI SAPTO DARMAWATI,2DA02
2DA02,Kamis,Pemrograman Akuntansi 1*/**,3/4,F221,HANTORO ARIEF GISIJANTO,2DA02
2DA02,Kamis,Komputerisasi Perpajakan 1 & Prak**,6/7,F221,SILVIA AVIRA,2DA02
2DA02,Sabtu,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2DA02
3DA01,Selasa,Sistem Informasi Akuntansi *,1/2,E425,DYAH MIETA SETYAWATI,3DA01
3DA01,Selasa,Akuntansi Biaya *,4/5/6,E236,DIANA SARI,3DA01
3DA01,Selasa,Akuntansi Manajemen & Prak **,8/9/10,E521,KATARINA CLAUDIA SRIMURNI,3DA01
3DA01,Kamis,Manajemen Keuangan & Prak**,4/5/6,E413,ROFI'AH,3DA01
3DA01,Kamis,Akuntansi Keu.Lanjut 1&Prak**,8/9/10,E413,ZAIDATUN EKASTUTI,3DA01
3DA01,Sabtu,Komunikasi B.Inggris Bisnis 3,1/2,E432,ANGGI PUTRI ULFIA,3DA01
3DA01,Sabtu,Auditing 1 & Prak. **,3/4/5,E432,GANIS HIDAYAT,3DA01
3DA01,Sabtu,Akuntansi Sektor Publik *,7/8,E432,SAMUEL DAVID LEE,3DA01
3DA02,Senin,Manajemen Keuangan & Prak **,1/2/3,F222,RENI ANGGRAINI,3DA02
3DA02,Senin,Auditing 1 & Prak**,5/6/7,F222,NOOR MUHAMMAD ADIPATI,3DA02
3DA02,Rabu,Komunikasi Bahasa Inggris Bisnis 3,1/2,F222,MERISKA YOSIANA,3DA02
3DA02,Rabu,Akuntansi Sektor Publik*,3/4,F222,FENY FIDYAH,3DA02
3DA02,Rabu,Akuntansi Manajemen & Prak**,6/7/8,F222,SRI KURNIASIH AGUSTIN,3DA02
3DA02,Kamis,Akuntansi Keuangan Lanjut 1 & Prak**,1/2/3,F222,ZAIDATUN EKASTUTI,3DA02
3DA02,Kamis,Sistem Informasi Akuntansi*,5/6,F222,MASODAH,3DA02
3DA02,Jumat,Akuntansi Biaya*,1/2/3,F222,DIONYSIA KOWANDA,3DA02
1DD01,Senin,Pendidikan Agama Islam,1/2,G231,ISMAIL AKBAR BRAHMA,1DD01
1DD01,Senin,Pengantar Akuntansi 1 & Prak **,3/4,G231,REYNALDI,1DD01
1DD01,Kamis,Manajemen Penjualan,1/2,G143,VELY RANDYANTINI,1DD01
1DD01,Kamis,Ekonomika 1,3/4,G143,RADEN SUPRIYANTO,1DD01
1DD01,Kamis,Peng.Aplikasi Komputer B&Prak**,5/6,G143,AHMAD HIDAYAT,1DD01
1DD01,Kamis,Peng.Aplikasi Komputer C&Prak**,8/9,G142,IWAN,1DD01
1DD01,Jum'at,Pendidikan Kewarganegaraan,3/4,G223,SULISTINING TRIMULYANI,1DD01
1DD01,Jum'at,Matematika Bisnis A,7/8,G234,YULI FITRIYANI,1DD01
1DD01,Jum'at,Pengantar Bisnis dan Pemasaran,9/10,G234,OKTARINA NUR WIDYANTI,1DD01
1DD01,Sabtu,Ilmu Alamiah Dasar,3/4,E244,MINIK RINAYANTI,1DD01
1DD01,Sabtu,Peng.Aplikasi Komputer A&Prak**,5/6,E244,FRANOVA/MARIA SRI WULANDARI,1DD01
1DD01,Sabtu,Matematika Bisnis B,7/8,E244,NONO SUWARNO,1DD01
1DD02,Senin,Pendidikan Agama Islam,1/2 G,G231,ISMAIL AKBAR BRAHMA,1DD02
1DD02,Rabu,Ekonomika 1,3/4,F212,HERRY SUSSANTO,1DD02
1DD02,Rabu,Pengantar Akuntansi 1 & Prak **,6/7,F212,ISTICHANAH,1DD02
1DD02,Kamis,Peng. Bisnis & Pemasaran,1/2,F212,BAGUS NURCAHYO,1DD02
1DD02,Kamis,Matematika Bisnis,3/4,F212,FANI YAYUK SUPOMO,1DD02
1DD02,Kamis,Manajemen Penjualan,6/7,F212,RINA NOFIYANTI,1DD02
1DD02,Jumat,Pengantar Aplikasi Komputer dan Prak **,1/2,F212,NOVRINA,1DD02
1DD02,Jumat,Pendidikan Kewarganegaraan,3/4 G,G223,SULISTINING TRIMULYANI,1DD02
1DD02,Sabtu,Ilmu Alamiah Dasar,3/4 G,E244,MINIK RINAYANTI,1DD02
2DD01,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2DD01
2DD01,Selasa,Manajemen Ritel,1/2,G423,ARMAINI AKHIRSON,2DD01
2DD01,Selasa,Manajemen Sumber Daya Manusia *,3/4,G423,SARIYATI,2DD01
2DD01,Selasa,Statistika 1 & Prak. */**,5/6/7,G423,ADINDA NURUL HUDA M,2DD01
2DD01,Selasa,Kewirausahaan 2,9/10,G423,DINI DWI ERMAWATI,2DD01
2DD01,Rabu,Manajemen Keuangan 1 & Prak **,4/5/6,E513,CHRISTINA DEWI WULANDARI,2DD01
2DD01,Rabu,Manajemen Pemasaran 1,7/8,E513,YUSYE MILAWATY,2DD01
2DD01,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2DD01
2DD01,Sabtu,Komputerisasi Peranggaran 1 **,1/2,E131,DINI SEPTIANI,2DD01
2DD01,Sabtu,Komp. Multimedia Pemasaran 1,3/4/5,E131,ITAR MINTARSIH,2DD01
2DD02,Senin,Social Networking & Creative Content,,UGTV,TEAM TEACHING,2DD02
2DD02,Senin,Manajemen Sumber Daya Manusia*,3/4,F225,SARIYATI,2DD02
2DD02,Rabu,Komputer Multimedia Pemasaran 1,1/2,F225,DEWI ANGGRAINI PUSPA HAPSARI,2DD02
2DD02,Rabu,Statistika 1 & Praktikum       */**,3/4,F225,SUZANNA LAMRIA SIREGAR,2DD02
2DD02,Rabu,Manajemen Ritel,6/7,F225,TEDDY OSWARI,2DD02
2DD02,Kamis,Manajemen Pemasaran 1,1/2,F225,SRI KURNIASIH AGUSTIN,2DD02
2DD02,Kamis,Kewirausahaan 2,3/4,F225,MULATSIH,2DD02
2DD02,Kamis,Komputerisasi Peranggaran 1  **,6/7,F225,SRI SUPADMINI,2DD02
2DD02,Jumat,Manajemen Keuangan 1 & Praktikum  **,1/2/3,F225,ASTRIED PERMANASARI,2DD02
2DD02,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2DD02
3DD01,Senin,Riset Pemasaran,1/2,E223,HANTORO ARIEF GISIJANTO,3DD01
3DD01,Senin,Manaj. Pemasaran Jasa & Prak. **,3/4,E223,HARIYATNO,3DD01
3DD01,Senin,Aspek Hukum dalam Ekonomi,6/7,E246,IKA PUJI SAPUTRI,3DD01
3DD01,Senin,Manajemen Strategi Pemasaran,8/9/10,E246,ANGGA PUTRI EKANOVA,3DD01
3DD01,Selasa,Akuntansi Biaya & Prak. */**,3/4,E316,SYNTHA NOVIYANA,3DD01
3DD01,Selasa,Promosi dan Periklanan 1,5/6,E316,WIDIO NUGROHO,3DD01
3DD01,Selasa,Sistem Informasi Manajemen *,8/9,E315,CAHYAWATI DIAH KUSUMARINI,3DD01
3DD01,Kamis,Pemasaran Usaha Kecil Menengah,1/2,E442,BUDI SANTOSA2,3DD01
3DD01,Kamis,Komunikasi Pemasaran & Prakt. **,3/4,E442,AGUS SRI ISWIYANTI,3DD01
3DD01,Kamis,Bahasa Inggris Bisnis,6/7,E443,AULIA HARIS FIRSTIYANTI,3DD01
3DD02,Senin,Pemasaran Usaha Kecil Menengah,1/2,F224,IRWANDARU DANANJAYA,3DD02
3DD02,Senin,Promosi dan Periklanan 1,3/4,F224,NOVA ANGGRAINIE,3DD02
3DD02,Senin,Riset Pemasaran,6/7,F224,SRI HERMAWATI,3DD02
3DD02,Senin,Aspek Hukum Dalam Bisnis,8/9,F224,SUARDI,3DD02
3DD02,Rabu,Akuntansi Biaya & Praktikum  */**,1/2,F224,DIANA SARI,3DD02
3DD02,Rabu,Sistem Informasi Manajemen*,5/6,F224,YENI SETIANI,3DD02
3DD02,Rabu,Manajemen Strategi Pemasaran,7/8/9,F224,ROOSHWAN BUDHI UTOMO,3DD02
3DD02,Jumat,Bahasa Inggris Bisnis,1/2,F224,DEA ADLINA,3DD02
3DD02,Jumat,Manajemen Pemasaran Jasa & Praktikum **,3/4,F224,RENI DIAH KUSUMAWATI,3DD02
3DD02,Jumat,Komunikasi Pemasaran & Prak**,7/8,F224,ADE RACHMAWATI NURFITRI,3DD02
1KA01,Senin,Pendidikan Pancasila *,1/2,G247,SINGGIH HARDJANTO,1KA01
1KA01,Senin,Fisika & Kimia Dasar A,3/4,G247,SINGGIH JATMIKO,1KA01
1KA01,Senin,Matematika Dasar 1A,6/7,G343,VERONICA ERNITA KRISTIANTI,1KA01
1KA01,Senin,Algoritma & Pemrograman 1C *,8/9,G343,ETY SUTANTY,1KA01
1KA01,Rabu,Algoritma & Pemrograman 1A *,1/2,D622,SYAMSI RUHAMA,1KA01
1KA01,Rabu,Algoritma & Pemrograman 1B *,3/4,D622,PURWANTI,1KA01
1KA01,Rabu,Konsep Sist.&Tek.Sist.Inf. C*/**,5/6,D622,YUCE YULIANI,1KA01
1KA01,Jum'at,Digital Citizenship,1/2,G113,MIFTAHUL JANNAH,1KA01
1KA01,Jum'at,Peng. Bisnis dan Ekonomi Digital,3/4,G113,KARTIKA SARI,1KA01
1KA01,Jum'at,Konsep Sist.&Tek.Sist.Inf. A*/**,7/8,G452,RAHMAYANTI,1KA01
1KA01,Sabtu,Konsep Sist.&Tek.Sist.Inf. B*/**,1/2,E133,IWAN,1KA01
1KA01,Sabtu,Ilmu Sosial & Budaya Dasar,3/4,E133,SRI MULIANINGSIH,1KA01
1KA01,Sabtu,Fisika & Kimia Dasar B,5/6,E133,AL AZIZ ABBIE ROOSSANO,1KA01
1KA01,Sabtu,Matematika Dasar 1B,8/9,E133,MUHAMMAD MOLDYNNIZ MUTIARA,1KA01
1KA02,Rabu,Konsep Sist.&Tek.Sist.Inf. A*/**,1/2,D661,MASIMBANGAN SUSANNA HERAWATI,1KA02
1KA02,Rabu,Pendidikan Pancasila *,3/4,D661,SUKARMAN,1KA02
1KA02,Rabu,Algoritma & Pemrograman 1A *,6/7,D654,RINA REFIANTI MUTIARA,1KA02
1KA02,Rabu,Fisika & Kimia Dasar A,9/10,D637,SINGGIH JATMIKO,1KA02
1KA02,Kamis,Konsep Sist.&Tek.Sist.Inf. C*/**,1/2,G432,SARI NOORLIMA YANTI,1KA02
1KA02,Kamis,Konsep Sist.&Tek.Sist.Inf. B*/**,5/6,G343,EKA FITRI RAHAYU,1KA02
1KA02,Kamis,Matematika Dasar 1A,7/8,G343,ALONA SITUMEANG,1KA02
1KA02,Jum'at,Fisika & Kimia Dasar B,1/2,G218,AGUS HADI ISMOYO,1KA02
1KA02,Jum'at,Matematika Dasar 1B,3/4,G218,PRISKA RESTU UTAMI,1KA02
1KA02,Jum'at,Peng. Bisnis dan Ekonomi Digital,7/8,G431,KARTIKA SARI,1KA02
1KA02,Sabtu,Algoritma & Pemrograman 1C *,1/2,G216,KOMANG ANOM BUDI UTAMA,1KA02
1KA02,Sabtu,Digital Citizenship,3/4,G216,ANISA OKTAVIANI,1KA02
1KA02,Sabtu,Ilmu Sosial & Budaya Dasar,6/7,G216,AULIA GUNTUR WIBISONO,1KA02
1KA02,Sabtu,Algoritma & Pemrograman 1B *,8/9,G216,ALBERTUS BAYU AJI PRIYONO,1KA02
1KA03,Senin,Matematika Dasar 1B,4/5,G347,HERIK SUGERU,1KA03
1KA03,Senin,Algoritma & Pemrograman 1C *,6/7,G347,ELVINA,1KA03
1KA03,Rabu,Algoritma & Pemrograman 1B *,1/2,D623,PURWANTI,1KA03
1KA03,Rabu,Fisika & Kimia Dasar B,3/4,D623,ERMAWATI,1KA03
1KA03,Rabu,Digital Citizenship,5/6,D623,HENDRI DWI PUTRA,1KA03
1KA03,Rabu,Ilmu Sosial & Budaya Dasar,9/10,D623,ADITYA RIAN RAMADHAN,1KA03
1KA03,Kamis,Matematika Dasar 1A,1/2,G223,EVAN PURNAMA RAMDAN,1KA03
1KA03,Kamis,Konsep Sist.&Tek.Sist.Inf. C*/**,3/4,G223,SARI NOORLIMA YANTI,1KA03
1KA03,Kamis,Peng. Bisnis dan Ekonomi Digital,7/8,G133,KARTIKA SARI,1KA03
1KA03,Kamis,Pendidikan Pancasila *,9/10,G133,DYAN TANJUNG GUNOTOMO,1KA03
1KA03,Jum'at,Algoritma & Pemrograman 1A *,1/2,E331,SYAMSI RUHAMA,1KA03
1KA03,Jum'at,Konsep Sist.&Tek.Sist.Inf. A*/**,3/4,E331,FIVI SYUKRIAH,1KA03
1KA03,Jum'at,Fisika & Kimia Dasar A,7/8,E139,ARIYANTO1,1KA03
1KA03,Jum'at,Konsep Sist.&Tek.Sist.Inf. B*/**,9/10,E139,NUR PUTRI AGUSTIYANI,1KA03
1KA04,Senin,Peng. Bisnis dan Ekonomi Digital,1/2,G115,NOVITA SULISTIOWATI,1KA04
1KA04,Senin,Algoritma & Pemrograman 1C *,3/4,G115,OCTARINA BUDI LESTARI,1KA04
1KA04,Senin,Algoritma & Pemrograman 1A *,5/6,G133,TRI SULISTYORINI,1KA04
1KA04,Senin,Konsep Sist.&Tek.Sist.Inf. C*/**,9/10,G247,WINARSIH,1KA04
1KA04,Rabu,Digital Citizenship,1/2,D611,RISMA RAHMALIA FITRIANI,1KA04
1KA04,Rabu,Konsep Sist.&Tek.Sist.Inf. A*/**,3/4,D611,MASIMBANGAN SUSANNA HERAWATI,1KA04
1KA04,Rabu,Algoritma & Pemrograman 1B *,7/8,D623,PURWANTI,1KA04
1KA04,Kamis,Pendidikan Pancasila *,1/2,G116,HELNAWATY,1KA04
1KA04,Kamis,Matematika Dasar 1B,4/5,G133,DIDIEK PRAMONO,1KA04
1KA04,Kamis,Konsep Sist.&Tek.Sist.Inf. B*/**,6/7,G116,IWAN,1KA04
1KA04,Kamis,Matematika Dasar 1A,9/10,G116,RAVI AHMAD SALIM,1KA04
1KA04,Sabtu,Fisika & Kimia Dasar A,3/4,G218,LAODE MOHAMMAD RASDI RERE,1KA04
1KA04,Sabtu,Fisika & Kimia Dasar B,5/6,G218,RATNA KOMALA,1KA04
1KA04,Sabtu,Ilmu Sosial & Budaya Dasar,7/8,G218,SRI MULIANINGSIH,1KA04
1KA05,Senin,Digital Citizenship,1/2,G116,ANISA OKTAVIANI,1KA05
1KA05,Senin,Fisika & Kimia Dasar B,3/4,G116,HENING HENDRATO,1KA05
1KA05,Senin,Fisika & Kimia Dasar A,5/6,G116,ANY KURNIAWATY YAPIE,1KA05
1KA05,Senin,Ilmu Sosial & Budaya Dasar,8/9,G125,RATNA SUSILOWATI,1KA05
1KA05,Rabu,Konsep Sist.&Tek.Sist.Inf. C*/**,1/2,D657,LATIPATURACHMANIAH,1KA05
1KA05,Rabu,Matematika Dasar 1B,3/4,D657,DIDIEK PRAMONO,1KA05
1KA05,Rabu,Algoritma & Pemrograman 1B *,5/6,D657,PURWANTI,1KA05
1KA05,Rabu,Algoritma & Pemrograman 1C *,9/10,D657,FARIDA AMALYA,1KA05
1KA05,Kamis,Algoritma & Pemrograman 1A *,4/5,G114,ENDAH KURNIASARI,1KA05
1KA05,Kamis,Peng. Bisnis dan Ekonomi Digital,7/8,G223,RADEN SUPRIYANTO,1KA05
1KA05,Jum'at,Konsep Sist.&Tek.Sist.Inf. B*/**,1/2,G132,LIRA ARUM KUSUMANINGTHYAS HUTA,1KA05
1KA05,Jum'at,Pendidikan Pancasila *,3/4,G132,IBRAHIM SUMANTRI,1KA05
1KA05,Jum'at,Matematika Dasar 1A,7/8,G124,DYAH NUR'AININGSIH,1KA05
1KA05,Jum'at,Konsep Sist.&Tek.Sist.Inf. A*/**,9/10,G124,RAHMAYANTI,1KA05
1KA06,Senin,Matematika Dasar 1A,1/2,G127,WAHYU KUSUMA RAHARJA,1KA06
1KA06,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,3/4,G127,MASIMBANGAN SABARINA H/M S HERAWATI,1KA06
1KA06,Senin,Matematika Dasar 1B,6/7,G451,HERIK SUGERU,1KA06
1KA06,Senin,Digital Citizenship,9/10,G233,META MEYSAWATI,1KA06
1KA06,Selasa,Konsep Sist.&Tek.Sist.Inf. B*/**,2/3,G125,TIYA NOVIYANTI,1KA06
1KA06,Selasa,Algoritma & Pemrograman 1B *,4/5,G125,WITARI ARYUNANI,1KA06
1KA06,Selasa,Konsep Sist.&Tek.Sist.Inf. C*/**,7/8,G125,RISDIANDRI ISKANDAR,1KA06
1KA06,Kamis,Peng. Bisnis dan Ekonomi Digital,1/2,E333,HENNY MEDYAWATI,1KA06
1KA06,Kamis,Ilmu Sosial & Budaya Dasar,3/4,E333,DINI TRI WARDANI,1KA06
1KA06,Kamis,Algoritma & Pemrograman 1C *,7/8,E212,EEL SUSILOWATI,1KA06
1KA06,Kamis,Algoritma & Pemrograman 1A *,9/10,E212,ENDAH KURNIASARI,1KA06
1KA06,Jum'at,Pendidikan Pancasila *,3/4,E218,DWIGHT GEORGE NAYOAN,1KA06
1KA06,Jum'at,Fisika & Kimia Dasar B,7/8,E212,AGUS HADI ISMOYO,1KA06
1KA06,Jum'at,Fisika & Kimia Dasar A,9/10,E212,DESY HERTINSYANA,1KA06
1KA07,Senin,Konsep Sist.&Tek.Sist.Inf. C*/**,1/2,E344,WINARSIH,1KA07
1KA07,Senin,Algoritma & Pemrograman 1A *,3/4,E344,SYAMSI RUHAMA,1KA07
1KA07,Senin,Matematika Dasar 1B,6/7,E315,EVA ZULFA NAILUFAR,1KA07
1KA07,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,8/9,E315,ESTI SETIYANINGSIH,1KA07
1KA07,Selasa,Algoritma & Pemrograman 1B *,1/2,E347,WITARI ARYUNANI,1KA07
1KA07,Selasa,Ilmu Sosial & Budaya Dasar,3/4,E347,DODI ARIF,1KA07
1KA07,Selasa,Fisika & Kimia Dasar A,6/7,E325,JONIFAN,1KA07
1KA07,Rabu,Fisika & Kimia Dasar B,2/3,G216,AGUS BUDIHADI,1KA07
1KA07,Rabu,Algoritma & Pemrograman 1C *,5/6,G113,LELI SAFITRI,1KA07
1KA07,Rabu,Matematika Dasar 1A,8/9,G149,ALONA SITUMEANG,1KA07
1KA07,Kamis,Pendidikan Pancasila *,1/2,E224,DYAN TANJUNG GUNOTOMO,1KA07
1KA07,Kamis,Peng. Bisnis dan Ekonomi Digital,3/4,E224,HENNY MEDYAWATI,1KA07
1KA07,Kamis,Digital Citizenship,5/6,E247,HENDRI DWI PUTRA,1KA07
1KA07,Kamis,Konsep Sist.&Tek.Sist.Inf. B*/**,9/10,E526,EKA FITRI RAHAYU,1KA07
1KA08,Senin,Algoritma & Pemrograman 1A *,1/2,E341,SYAMSI RUHAMA,1KA08
1KA08,Senin,Konsep Sist.&Tek.Sist.Inf. C*/**,3/4,E341,GHIFARI NATAKUSUMAH,1KA08
1KA08,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,6/7,E341,ESTI SETIYANINGSIH,1KA08
1KA08,Rabu,Fisika & Kimia Dasar A,2/3,G115,ANY KURNIAWATY YAPIE,1KA08
1KA08,Rabu,Fisika & Kimia Dasar B,4/5,G115,AGUS BUDIHADI,1KA08
1KA08,Rabu,Algoritma & Pemrograman 1C *,6/7,G115,IDA ASTUTI,1KA08
1KA08,Rabu,Digital Citizenship,9/10,G133,MIFTAHUL JANNAH,1KA08
1KA08,Kamis,Matematika Dasar 1B,3/4,G149,WESTI ANNITA SARI,1KA08
1KA08,Kamis,Algoritma & Pemrograman 1B *,5/6,G149,RATRI PURWANINGTYAS,1KA08
1KA08,Kamis,Matematika Dasar 1A,7/8,G113,RAVI AHMAD SALIM,1KA08
1KA08,Jum'at,Ilmu Sosial & Budaya Dasar,1/2,G133,MAGHFIROH YENNY,1KA08
1KA08,Jum'at,Konsep Sist.&Tek.Sist.Inf. B*/**,3/4,G133,LIRA ARUM KUSUMANINGTHYAS HUTA,1KA08
1KA08,Jum'at,Pendidikan Pancasila *,7/8,G112,IBRAHIM SUMANTRI,1KA08
1KA08,Jum'at,Peng. Bisnis dan Ekonomi Digital,9/10,G112,KARTIKA SARI,1KA08
1KA09,Senin,Algoritma & Pemrograman 1B *,1/2,G348,WITARI ARYUNANI,1KA09
1KA09,Senin,Algoritma & Pemrograman 1A *,4/5,G215,RINA REFIANTI MUTIARA,1KA09
1KA09,Senin,Digital Citizenship,7/8,G143,META MEYSAWATI,1KA09
1KA09,Senin,Konsep Sist.&Tek.Sist.Inf. C*/**,9/10,G218,IRA WINDARTI,1KA09
1KA09,Rabu,Fisika & Kimia Dasar B,1/2,G228,ACHMAD FAHRUROZI,1KA09
1KA09,Rabu,Algoritma & Pemrograman 1C *,4/5,G434,IDA ASTUTI,1KA09
1KA09,Rabu,Fisika & Kimia Dasar A,6/7,G434,ANY KURNIAWATY YAPIE,1KA09
1KA09,Rabu,Konsep Sist.&Tek.Sist.Inf. A*/**,8/9,G434,RIZKI ARIYANI,1KA09
1KA09,Kamis,Matematika Dasar 1B,1/2,G128,WESTI ANNITA SARI,1KA09
1KA09,Kamis,Peng. Bisnis dan Ekonomi Digital,3/4,G128,KARTIKA SARI,1KA09
1KA09,Kamis,Konsep Sist.&Tek.Sist.Inf. B*/**,7/8,G229,EKA FITRI RAHAYU,1KA09
1KA09,Kamis,Matematika Dasar 1A,9/10,G229,ALONA SITUMEANG,1KA09
1KA09,Sabtu,Ilmu Sosial & Budaya Dasar,1/2,E223,SRI MULIANINGSIH,1KA09
1KA09,Sabtu,Pendidikan Pancasila *,3/4,E223,EDI FAKHRI,1KA09
1KA10,Senin,Fisika & Kimia Dasar A,1/2,G132,SINGGIH JATMIKO,1KA10
1KA10,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,3/4,G132,ESTI SETIYANINGSIH,1KA10
1KA10,Senin,Konsep Sist.&Tek.Sist.Inf. C*/**,7/8,G432,WINARSIH,1KA10
1KA10,Senin,Digital Citizenship,9/10,G432,HENDRI DWI PUTRA,1KA10
1KA10,Rabu,Matematika Dasar 1B,5/6,D661,DIDIEK PRAMONO,1KA10
1KA10,Rabu,Matematika Dasar 1A,7/8,D661,HARJANTO SUTEDJO,1KA10
1KA10,Rabu,Algoritma & Pemrograman 1B *,9/10,D661,PURWANTI,1KA10
1KA10,Kamis,Algoritma & Pemrograman 1A *,1/2,G145,ENDAH KURNIASARI,1KA10
1KA10,Kamis,Pendidikan Pancasila *,3/4,G145,RANDY,1KA10
1KA10,Kamis,Peng. Bisnis dan Ekonomi Digital,5/6,G145,RADEN SUPRIYANTO,1KA10
1KA10,Kamis,Ilmu Sosial & Budaya Dasar,8/9,G136,DINI TRI WARDANI,1KA10
1KA10,Jum'at,Algoritma & Pemrograman 1C *,1/2,G142,ELVINA,1KA10
1KA10,Jum'at,Fisika & Kimia Dasar B,3/4,G142,KANURAMA/YASMAN,1KA10
1KA10,Jum'at,Konsep Sist.&Tek.Sist.Inf. B*/**,7/8,G143,NUR PUTRI AGUSTIYANI,1KA10
1KA11,Senin,Fisika & Kimia Dasar A,1/2,G129,ANY KURNIAWATY YAPIE,1KA11
1KA11,Senin,Matematika Dasar 1A,3/4,G129,WAHYU KUSUMA RAHARJA,1KA11
1KA11,Senin,Algoritma & Pemrograman 1C *,5/6,G129,OCTARINA BUDI LESTARI,1KA11
1KA11,Senin,Konsep Sist.&Tek.Sist.Inf. C*/**,8/9,G145,GHIFARI NATAKUSUMAH,1KA11
1KA11,Kamis,Algoritma & Pemrograman 1B *,1/2,E314,PURWANTI,1KA11
1KA11,Kamis,Konsep Sist.&Tek.Sist.Inf. A*/**,3/4,E314,ERMA SOVA,1KA11
1KA11,Kamis,Algoritma & Pemrograman 1A *,5/6,E314,FIVI SYUKRIAH,1KA11
1KA11,Kamis,Ilmu Sosial & Budaya Dasar,9/10,E218,SELLY DWI PUTRI,1KA11
1KA11,Jum'at,Peng. Bisnis dan Ekonomi Digital,1/2,G129,KARTIKA SARI,1KA11
1KA11,Jum'at,Konsep Sist.&Tek.Sist.Inf. B*/**,3/4,G129,BUDI SETIAWAN2/NUR PUTRI AGUSTIYANI,1KA11
1KA11,Jum'at,Fisika & Kimia Dasar B,7/8,G129,KANURAMA/YASMAN,1KA11
1KA11,Jum'at,Pendidikan Pancasila *,9/10,G129,IBRAHIM SUMANTRI,1KA11
1KA11,Sabtu,Digital Citizenship,1/2,G129,ANISA OKTAVIANI,1KA11
1KA11,Sabtu,Matematika Dasar 1B,3/4,G129,PRISKA RESTU UTAMI,1KA11
1KA12,Senin,Algoritma & Pemrograman 1C *,1/2,G139,OCTARINA BUDI LESTARI,1KA12
1KA12,Senin,Konsep Sist.&Tek.Sist.Inf. C*/**,3/4,G139,RISDIANDRI ISKANDAR,1KA12
1KA12,Senin,Digital Citizenship,5/6,G139,META MEYSAWATI,1KA12
1KA12,Kamis,Fisika & Kimia Dasar A,1/2,G218,HERU KUNCORO,1KA12
1KA12,Kamis,Pendidikan Pancasila *,3/4,G218,NELTJE F KATUUK,1KA12
1KA12,Kamis,Konsep Sist.&Tek.Sist.Inf. A*/**,6/7,G221,ESTI SETIYANINGSIH,1KA12
1KA12,Kamis,Matematika Dasar 1A,8/9,G221,DESY KRISTYAWATI,1KA12
1KA12,Jum'at,Algoritma & Pemrograman 1B *,1/2,E224,PURWANTI,1KA12
1KA12,Jum'at,Fisika & Kimia Dasar B,3/4,E224,ERMAWATI,1KA12
1KA12,Jum'at,Konsep Sist.&Tek.Sist.Inf. B*/**,7/8,E327,IDA ASTUTI,1KA12
1KA12,Jum'at,Peng. Bisnis dan Ekonomi Digital,9/10,E327,HENNY MEDYAWATI,1KA12
1KA12,Sabtu,Algoritma & Pemrograman 1A *,1/2,G135,ARIEF FADHLURRAHMAN RASYID,1KA12
1KA12,Sabtu,Ilmu Sosial & Budaya Dasar,3/4,G135,ANIEQ SITI ZUHRO,1KA12
1KA12,Sabtu,Matematika Dasar 1B,6/7,G135,PRISKA RESTU UTAMI,1KA12
1KA13,Senin,Algoritma & Pemrograman 1A *,3/4,G221,TRI SULISTYORINI,1KA13
1KA13,Senin,Digital Citizenship,7/8,G134,ANISA OKTAVIANI,1KA13
1KA13,Senin,Algoritma & Pemrograman 1C *,9/10,G134,OCTARINA BUDI LESTARI,1KA13
1KA13,Kamis,Matematika Dasar 1A,1/2,E213,RAVI AHMAD SALIM,1KA13
1KA13,Kamis,Matematika Dasar 1B,3/4,E213,HARJANTO SUTEDJO,1KA13
1KA13,Kamis,Konsep Sist.&Tek.Sist.Inf. A*/**,7/8,E427,FIVI SYUKRIAH,1KA13
1KA13,Kamis,Konsep Sist.&Tek.Sist.Inf. B*/**,9/10,E427,FITHRI NURHAYATI,1KA13
1KA13,Jum'at,Pendidikan Pancasila *,1/2,E517,ERNI KARYATI,1KA13
1KA13,Jum'at,Ilmu Sosial & Budaya Dasar,3/4,E517,MAGHFIROH YENNY,1KA13
1KA13,Jum'at,Peng. Bisnis dan Ekonomi Digital,7/8,E517,NOVITA SULISTIOWATI,1KA13
1KA13,Jum'at,Fisika & Kimia Dasar B,9/10,E517,ERMAWATI,1KA13
1KA13,Sabtu,Konsep Sist.&Tek.Sist.Inf. C*/**,3/4,E336,DODY PERNADI,1KA13
1KA13,Sabtu,Fisika & Kimia Dasar A,5/6,E336,UPPIT YULIANI,1KA13
1KA13,Sabtu,Algoritma & Pemrograman 1B *,9/10,E314,DONIE MARGAVIANTO NURROKHMAN,1KA13
1KA14,Rabu,Pendidikan Pancasila *,1/2,G342,GATOT SUBIYAKTO,1KA14
1KA14,Rabu,Fisika & Kimia Dasar B,3/4,G342,ACHMAD FAHRUROZI,1KA14
1KA14,Rabu,Digital Citizenship,7/8,G137,MIFTAHUL JANNAH,1KA14
1KA14,Kamis,Matematika Dasar 1A,5/6,E211,HARJANTO SUTEDJO,1KA14
1KA14,Kamis,Ilmu Sosial & Budaya Dasar,7/8,E211,SELLY DWI PUTRI,1KA14
1KA14,Kamis,Algoritma & Pemrograman 1C *,9/10,E211,EEL SUSILOWATI,1KA14
1KA14,Jum'at,Konsep Sist.&Tek.Sist.Inf. B*/**,1/2,E515,IDA ASTUTI,1KA14
1KA14,Jum'at,Peng. Bisnis dan Ekonomi Digital,3/4,E515,HENNY MEDYAWATI,1KA14
1KA14,Jum'at,Algoritma & Pemrograman 1A *,7/8,E515,ELVINA,1KA14
1KA14,Jum'at,Konsep Sist.&Tek.Sist.Inf. A*/**,9/10,E515,FIVI SYUKRIAH,1KA14
1KA14,Sabtu,Konsep Sist.&Tek.Sist.Inf. C*/**,1/2,E312,DODY PERNADI,1KA14
1KA14,Sabtu,Matematika Dasar 1B,3/4,E312,DWI ERMAWATI,1KA14
1KA14,Sabtu,Algoritma & Pemrograman 1B *,5/6,E312,DONIE MARGAVIANTO NURROKHMAN,1KA14
1KA14,Sabtu,Fisika & Kimia Dasar A,8/9,E324,UPPIT YULIANI,1KA14
1KA15,Senin,Ilmu Sosial & Budaya Dasar,3/4,G124,RATNA SUSILOWATI,1KA15
1KA15,Senin,Pendidikan Pancasila *,7/8,G452,NORMANSHAH BANOWO,1KA15
1KA15,Rabu,Konsep Sist.&Tek.Sist.Inf. B*/**,2/3,D614,FITHRI NURHAYATI,1KA15
1KA15,Rabu,Peng. Bisnis dan Ekonomi Digital,4/5,D614,NOVITA SULISTIOWATI,1KA15
1KA15,Rabu,Konsep Sist.&Tek.Sist.Inf. C*/**,7/8,D622,YUCE YULIANI,1KA15
1KA15,Rabu,Algoritma & Pemrograman 1A *,9/10,D622,RINA REFIANTI MUTIARA,1KA15
1KA15,Kamis,Konsep Sist.&Tek.Sist.Inf. A*/**,1/2,E317,FIVI SYUKRIAH,1KA15
1KA15,Kamis,Algoritma & Pemrograman 1C *,3/4,E317,EEL SUSILOWATI,1KA15
1KA15,Kamis,Fisika & Kimia Dasar B,6/7,E323,DYAN PRAWITA SARI,1KA15
1KA15,Kamis,Matematika Dasar 1A,8/9,E323,ERFIANA WAHYUNINGSIH,1KA15
1KA15,Sabtu,Matematika Dasar 1B,1/2,E322,DWI ERMAWATI,1KA15
1KA15,Sabtu,Algoritma & Pemrograman 1B *,3/4,E322,DONIE MARGAVIANTO NURROKHMAN,1KA15
1KA15,Sabtu,Digital Citizenship,7/8,E513,AMARAN SHIDIQ,1KA15
1KA15,Sabtu,Fisika & Kimia Dasar A,9/10,E513,LAODE MOHAMMAD RASDI RERE,1KA15
1KA16,Rabu,Konsep Sist.&Tek.Sist.Inf. C*/**,1/2,D655,YUCE YULIANI,1KA16
1KA16,Rabu,Algoritma & Pemrograman 1A *,4/5,D654,RINA REFIANTI MUTIARA,1KA16
1KA16,Rabu,Konsep Sist.&Tek.Sist.Inf. A*/**,7/8,D652,MASIMBANGAN SUSANNA HERAWATI,1KA16
1KA16,Rabu,Konsep Sist.&Tek.Sist.Inf. B*/**,9/10,D652,EKA FITRI RAHAYU,1KA16
1KA16,Kamis,Algoritma & Pemrograman 1C *,1/2,E312,EEL SUSILOWATI,1KA16
1KA16,Kamis,Matematika Dasar 1A,3/4,E214,RAVI AHMAD SALIM,1KA16
1KA16,Kamis,Pendidikan Pancasila *,6/7,E515,NUR PUTRI ERDIANTI,1KA16
1KA16,Kamis,Fisika & Kimia Dasar B,8/9,E515,DYAN PRAWITA SARI,1KA16
1KA16,Jum'at,Peng. Bisnis dan Ekonomi Digital,3/4,D613,NOVITA SULISTIOWATI,1KA16
1KA16,Jum'at,Ilmu Sosial & Budaya Dasar,7/8,D613,OKTAVIA ANNA RAHAYU,1KA16
1KA16,Sabtu,Algoritma & Pemrograman 1B *,1/2,E326,DONIE MARGAVIANTO NURROKHMAN,1KA16
1KA16,Sabtu,Fisika & Kimia Dasar A,3/4,E326,NINCY AYU LESTARI,1KA16
1KA16,Sabtu,Digital Citizenship,7/8,E334,YUDI IRAWAN CHANDRA,1KA16
1KA16,Sabtu,Matematika Dasar 1B,9/10,E334,PRISKA RESTU UTAMI,1KA16
1KA17,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,1/2,G441,MASIMBANGAN SABARINA H/M S HERAWATI,1KA17
1KA17,Senin,Matematika Dasar 1A,3/4,G441,NURICHWAN,1KA17
1KA17,Senin,Algoritma & Pemrograman 1A *,6/7,G314,RINA REFIANTI MUTIARA,1KA17
1KA17,Senin,Algoritma & Pemrograman 1B *,8/9,G314,WITARI ARYUNANI,1KA17
1KA17,Rabu,Algoritma & Pemrograman 1C *,1/2,E246,IDA ASTUTI,1KA17
1KA17,Rabu,Fisika & Kimia Dasar A,5/6,E424,JONIFAN,1KA17
1KA17,Rabu,Fisika & Kimia Dasar B,8/9,E424,ACHMAD FAHRUROZI,1KA17
1KA17,Kamis,Matematika Dasar 1B,1/2,E218,HARJANTO SUTEDJO,1KA17
1KA17,Kamis,Ilmu Sosial & Budaya Dasar,3/4,E218,DIANA SARI SOBARI,1KA17
1KA17,Kamis,Digital Citizenship,7/8,E243,HENDRI DWI PUTRA,1KA17
1KA17,Kamis,Peng. Bisnis dan Ekonomi Digital,9/10,E243,KARTIKA SARI,1KA17
1KA17,Jum'at,Pendidikan Pancasila *,1/2,E333,DWIGHT GEORGE NAYOAN,1KA17
1KA17,Jum'at,Konsep Sist.&Tek.Sist.Inf. B*/**,3/4,E333,IDA ASTUTI,1KA17
1KA17,Jum'at,Konsep Sist.&Tek.Sist.Inf. C*/**,7/8,E443,IWAN SETIADI,1KA17
1KA18,Rabu,Algoritma & Pemrograman 1A *,2/3,D646,HADYAN MARDHI FADLILLAH,1KA18
1KA18,Rabu,Konsep Sist.&Tek.Sist.Inf. B*/**,4/5,D646,FITHRI NURHAYATI,1KA18
1KA18,Rabu,Peng. Bisnis dan Ekonomi Digital,6/7,D646,NOVITA SULISTIOWATI,1KA18
1KA18,Rabu,Konsep Sist.&Tek.Sist.Inf. C*/**,9/10,D614,YUCE YULIANI,1KA18
1KA18,Kamis,Algoritma & Pemrograman 1C *,1/2,E341,LELI SAFITRI,1KA18
1KA18,Kamis,Fisika & Kimia Dasar B,3/4,E341,DYAN PRAWITA SARI,1KA18
1KA18,Kamis,Ilmu Sosial & Budaya Dasar,6/7,E321,DIANA SARI SOBARI,1KA18
1KA18,Kamis,Konsep Sist.&Tek.Sist.Inf. A*/**,8/9,E321,ESTI SETIYANINGSIH,1KA18
1KA18,Jum'at,Pendidikan Pancasila *,7/8,D651,RANDY,1KA18
1KA18,Jum'at,Matematika Dasar 1A,9/10,D651,MUDRIKA,1KA18
1KA18,Sabtu,Matematika Dasar 1B,1/2,E527,MUHAMMAD MOLDYNNIZ MUTIARA,1KA18
1KA18,Sabtu,Fisika & Kimia Dasar A,3/4,E527,ADIETIYA RANGGA SAPUTRA,1KA18
1KA18,Sabtu,Algoritma & Pemrograman 1B *,7/8,E312,DONIE MARGAVIANTO NURROKHMAN,1KA18
1KA18,Sabtu,Digital Citizenship,9/10,E312,AMARAN SHIDIQ,1KA18
1KA19,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,1/2,G218,AGRY ALFIAH,1KA19
1KA19,Senin,Digital Citizenship,5/6,G444,ANISA OKTAVIANI,1KA19
1KA19,Senin,Fisika & Kimia Dasar B,7/8,G218,HELMI,1KA19
1KA19,Kamis,Algoritma & Pemrograman 1B *,2/3,G424,AMELIA BELINDA SILVIANA,1KA19
1KA19,Kamis,Konsep Sist.&Tek.Sist.Inf. B*/**,5/6,G345,FITHRI NURHAYATI,1KA19
1KA19,Kamis,Pendidikan Pancasila *,7/8,G345,NORMANSHAH BANOWO,1KA19
1KA19,Kamis,Matematika Dasar 1A,9/10,G345,BUDI SANTOSA1,1KA19
1KA19,Jum'at,Peng. Bisnis dan Ekonomi Digital,1/2,D652,RADEN SUPRIYANTO,1KA19
1KA19,Jum'at,Algoritma & Pemrograman 1C *,3/4,D652,MARTHASYA AIFA,1KA19
1KA19,Jum'at,Algoritma & Pemrograman 1A *,7/8,D652,EVANS WINANDA WIRGA,1KA19
1KA19,Jum'at,Konsep Sist.&Tek.Sist.Inf. C*/**,9/10,D652,IRA WINDARTI,1KA19
1KA19,Sabtu,Matematika Dasar 1B,1/2,D651,ANDI CAHYA ICHI,1KA19
1KA19,Sabtu,Ilmu Sosial & Budaya Dasar,3/4,D651,POSO NUGROHO,1KA19
1KA19,Sabtu,Fisika & Kimia Dasar A,6/7,D651,ARIO GERALDI,1KA19
1KA20,Senin,Algoritma & Pemrograman 1B *,1/2,G435,AMELIA BELINDA SILVIANA,1KA20
1KA20,Senin,Digital Citizenship,3/4,G435,ANISA OKTAVIANI,1KA20
1KA20,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,5/6,G115,AGRY ALFIAH,1KA20
1KA20,Senin,Pendidikan Pancasila *,8/9,G112,HELNAWATY,1KA20
1KA20,Kamis,Konsep Sist.&Tek.Sist.Inf. B*/**,2/3,G133,FITHRI NURHAYATI,1KA20
1KA20,Kamis,Matematika Dasar 1A,4/5,G124,NAHDALINA,1KA20
1KA20,Kamis,Fisika & Kimia Dasar B,6/7,G124,LESTARI OCTAVIA,1KA20
1KA20,Jum'at,Algoritma & Pemrograman 1C *,1/2,D662,MARTHASYA AIFA,1KA20
1KA20,Jum'at,Peng. Bisnis dan Ekonomi Digital,3/4,D662,RADEN SUPRIYANTO,1KA20
1KA20,Jum'at,Konsep Sist.&Tek.Sist.Inf. C*/**,7/8,D662,IRA WINDARTI,1KA20
1KA20,Jum'at,Algoritma & Pemrograman 1A *,9/10,D662,EVANS WINANDA WIRGA,1KA20
1KA20,Sabtu,Matematika Dasar 1B,3/4,D643,ANDI CAHYA ICHI,1KA20
1KA20,Sabtu,Ilmu Sosial & Budaya Dasar,6/7,D643,POSO NUGROHO,1KA20
1KA20,Sabtu,Fisika & Kimia Dasar A,8/9,D643,ARIO GERALDI,1KA20
1KA21,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,1/2,C008,ITA RUSMALA DEWI,1KA21
1KA21,Senin,Ilmu Sosial & Budaya Dasar,3/4,C008,DIANA SARI SOBARI,1KA21
1KA21,Senin,Peng. Bisnis dan Ekonomi Digital,6/7,C008,LANA SULARTO,1KA21
1KA21,Senin,Konsep Sist.&Tek.Sist.Inf. B*/**,9/10,C008,DELTA AGUS WARDIANTO,1KA21
1KA21,Kamis,Matematika Dasar 1B,1/2,A801,ADI KRESNO,1KA21
1KA21,Kamis,Algoritma & Pemrograman 1C *,3/4,A801,BAMBANG YULIANTO,1KA21
1KA21,Kamis,Algoritma & Pemrograman 1B *,7/8,A801,IKE PUTRI KUSUMAWIJAYA,1KA21
1KA21,Kamis,Matematika Dasar 1A,9/10,A801,NUR SETIAWATI,1KA21
1KA21,Jum'at,Konsep Sist.&Tek.Sist.Inf. C*/**,3/4,B222,SYIFA NURANI RAHMAYANTI,1KA21
1KA21,Jum'at,Pendidikan Pancasila *,7/8,B222,KARINA JAYANTI,1KA21
1KA21,Jum'at,Digital Citizenship,9/10,B222,BHETA AGUS WARDIJONO,1KA21
1KA21,Sabtu,Fisika & Kimia Dasar A,1/2,A101,SANDY SURYO PRAYOGO,1KA21
1KA21,Sabtu,Algoritma & Pemrograman 1A *,3/4,A101,YAN RISA ASPI SURURI,1KA21
1KA21,Sabtu,Fisika & Kimia Dasar B,5/6,A101,ASHFAR KURNIA,1KA21
1KA22,Senin,Ilmu Sosial & Budaya Dasar,1/2,B223,DIANA SARI SOBARI,1KA22
1KA22,Senin,Konsep Sist.&Tek.Sist.Inf. B*/**,3/4,B223,DELTA AGUS WARDIANTO,1KA22
1KA22,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,5/6,B223,ITA RUSMALA DEWI,1KA22
1KA22,Senin,Peng. Bisnis dan Ekonomi Digital,8/9,B223,LANA SULARTO,1KA22
1KA22,Kamis,Algoritma & Pemrograman 1C *,1/2,A802,BAMBANG YULIANTO,1KA22
1KA22,Kamis,Matematika Dasar 1B,3/4,A802,NUR SETIAWATI,1KA22
1KA22,Kamis,Matematika Dasar 1A,7/8,A802,NUR SETIAWATI,1KA22
1KA22,Kamis,Algoritma & Pemrograman 1B *,9/10,A802,IKE PUTRI KUSUMAWIJAYA,1KA22
1KA22,Jum'at,Konsep Sist.&Tek.Sist.Inf. C*/**,1/2,B221,SYIFA NURANI RAHMAYANTI,1KA22
1KA22,Jum'at,Pendidikan Pancasila *,3/4,B221,KARINA JAYANTI,1KA22
1KA22,Jum'at,Digital Citizenship,7/8,B221,BHETA AGUS WARDIJONO,1KA22
1KA22,Sabtu,Fisika & Kimia Dasar A,4/5,C015,SANDY SURYO PRAYOGO,1KA22
1KA22,Sabtu,Algoritma & Pemrograman 1A *,6/7,C015,HERY HERAWAN,1KA22
1KA22,Sabtu,Fisika & Kimia Dasar B,8/9,C015,ASHFAR KURNIA,1KA22
1KA23,Senin,Algoritma & Pemrograman 1 ABC *,12/13/14,D633,ARY BIMA KURNIAWAN,1KA23
1KA23,Selasa,Konsep Sist.&Tek.Sist.Inf.ABC*/**,12/13/14,D633,IWAN SETIADI,1KA23
1KA23,Rabu,Matematika Dasar 1AB,12/13/14,D634,EDI SUKIRMAN,1KA23
1KA23,Kamis,Peng. Bisnis dan Ekonomi Digital,11/12,D631,LANA SULARTO,1KA23
1KA23,Kamis,Digital Citizenship,13/14,D631,TRI AGUS RIYADI,1KA23
1KA23,Sabtu,Ilmu Sosial & Budaya Dasar,1/2,G224,AULIA GUNTUR WIBISONO,1KA23
1KA23,Sabtu,Pendidikan Pancasila *,3/4,G224,SINGGIH HARDJANTO,1KA23
1KA23,Sabtu,Fisika & Kimia Dasar AB,6/7/8,G238,LAODE MOHAMMAD RASDI RERE,1KA23
1KA24,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,1/2,J1115A,NURUL HIDAYATI NUSYIRWAN,1KA24
1KA24,Senin,Fisika & Kimia Dasar A,3/4,J1115A,MARIZA WIJAYANTI,1KA24
1KA24,Senin,Peng. Bisnis dan Ekonomi Digital,7/8,J1312,NATALLIOS PETER SIPASULTA,1KA24
1KA24,Senin,Matematika Dasar 1A,9/10,J1312,ALONA SITUMEANG,1KA24
1KA24,Rabu,Algoritma & Pemrograman 1C *,3/4,J129,MITA LAILASARI,1KA24
1KA24,Rabu,Konsep Sist.&Tek.Sist.Inf. B*/**,5/6,J129,NURUL HIDAYATI NUSYIRWAN,1KA24
1KA24,Rabu,Digital Citizenship,7/8,J129,ADAM HUDA NUGRAHA,1KA24
1KA24,Kamis,Pendidikan Pancasila *,1/2,J1110,MUHAMMAD BURHAN AMIN,1KA24
1KA24,Kamis,Fisika & Kimia Dasar B,4/5,J1110,YASMAN RIANTO,1KA24
1KA24,Kamis,Matematika Dasar 1B,6/7,J1110,SIGIT MUHAMAD YAKUB,1KA24
1KA24,Kamis,Algoritma & Pemrograman 1B *,9/10,J1110,SUTRESNA WATI,1KA24
1KA24,Jum'at,Ilmu Sosial & Budaya Dasar,3/4,J1216A,EVA KHADIJAH,1KA24
1KA24,Jum'at,Algoritma & Pemrograman 1A *,7/8,J1216A,BUDI UTAMI FAHNUN,1KA24
1KA24,Jum'at,Konsep Sist.&Tek.Sist.Inf. C*/**,9/10,J1216A,NIA YUNINGSIH,1KA24
1KA25,Senin,Peng. Bisnis dan Ekonomi Digital,3/4,J1216B,NATALLIOS PETER SIPASULTA,1KA25
1KA25,Senin,Algoritma & Pemrograman 1C *,5/6,J1216B,MAKMUN,1KA25
1KA25,Senin,Fisika & Kimia Dasar B,9/10,J1216B,NURUL ASNI,1KA25
1KA25,Rabu,Fisika & Kimia Dasar A,3/4,J124,RR LUSSIANA ETP,1KA25
1KA25,Rabu,Konsep Sist.&Tek.Sist.Inf. B*/**,5/6,J124,KHALIDAH,1KA25
1KA25,Rabu,Konsep Sist.&Tek.Sist.Inf. A*/**,8/9,J1410,NURUL HIDAYATI NUSYIRWAN,1KA25
1KA25,Kamis,Algoritma & Pemrograman 1B *,1/2,J1419,SUTRESNA WATI,1KA25
1KA25,Kamis,Algoritma & Pemrograman 1A *,3/4,J1419,BUDI UTAMI FAHNUN,1KA25
1KA25,Kamis,Matematika Dasar 1B,6/7,J1419,YUNIARSO ARIF KRESNO,1KA25
1KA25,Kamis,Pendidikan Pancasila *,8/9,J1419,AIKKO FAIHA / RETMIARTI,1KA25
1KA25,Jum'at,Konsep Sist.&Tek.Sist.Inf. C*/**,1/2,J123,NIA YUNINGSIH,1KA25
1KA25,Jum'at,Matematika Dasar 1A,3/4,J123,HENNY LESTARI,1KA25
1KA25,Jum'at,Digital Citizenship,7/8,J123,ADAM HUDA NUGRAHA,1KA25
1KA25,Jum'at,Ilmu Sosial & Budaya Dasar,9/10,J123,AGUS SUJARWANTO,1KA25
1KA26,Senin,Peng. Bisnis dan Ekonomi Digital,1/2,J1111,NATALLIOS PETER SIPASULTA,1KA26
1KA26,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,3/4,J1111,NURUL HIDAYATI NUSYIRWAN,1KA26
1KA26,Rabu,Matematika Dasar 1A,1/2,J1316B,ISKANDAR ZAMZANI,1KA26
1KA26,Rabu,Konsep Sist.&Tek.Sist.Inf. B*/**,3/4,J1316B,KHALIDAH,1KA26
1KA26,Rabu,Digital Citizenship,5/6,J1316B,ADAM HUDA NUGRAHA,1KA26
1KA26,Rabu,Pendidikan Pancasila *,8/9,J1416B,JUNAEDI ABDILLAH,1KA26
1KA26,Kamis,Algoritma & Pemrograman 1C *,1/2,J1212,MITA LAILASARI,1KA26
1KA26,Kamis,Algoritma & Pemrograman 1B *,3/4,J1212,SUTRESNA WATI,1KA26
1KA26,Kamis,Fisika & Kimia Dasar B,6/7,J147,YASMAN RIANTO,1KA26
1KA26,Kamis,Algoritma & Pemrograman 1A *,9/10,J1310,BUDI UTAMI FAHNUN,1KA26
1KA26,Jum'at,Matematika Dasar 1B,1/2,J147,RADEN ANDHIKA PRIHESTIRA HARTADI,1KA26
1KA26,Jum'at,Konsep Sist.&Tek.Sist.Inf. C*/**,3/4,J147,NIA YUNINGSIH,1KA26
1KA26,Jum'at,Ilmu Sosial & Budaya Dasar,7/8,J147,AGUS SUJARWANTO,1KA26
1KA26,Jum'at,Fisika & Kimia Dasar A,9/10,J147,HAFIDZAH,1KA26
1KA27,Senin,Ilmu Sosial & Budaya Dasar,3/4,J133B,JOKO UTOMO,1KA27
1KA27,Senin,Konsep Sist.&Tek.Sist.Inf. C*/**,5/6,J133B,NIA YUNINGSIH,1KA27
1KA27,Senin,Matematika Dasar 1A,7/8,J133B,ALONA SITUMEANG,1KA27
1KA27,Rabu,Fisika & Kimia Dasar B,1/2,J1511,DJONAEDI SALEH,1KA27
1KA27,Rabu,Konsep Sist.&Tek.Sist.Inf. B*/**,3/4,J1511,NURUL HIDAYATI NUSYIRWAN,1KA27
1KA27,Rabu,Fisika & Kimia Dasar A,6/7,J1319,DJONAEDI SALEH,1KA27
1KA27,Rabu,Algoritma & Pemrograman 1C *,8/9,J1319,MITA LAILASARI,1KA27
1KA27,Kamis,Pendidikan Pancasila *,5/6,J128,MUHAMMAD BURHAN AMIN,1KA27
1KA27,Kamis,Matematika Dasar 1B,7/8,J128,RADEN ANDHIKA PRIHESTIRA HARTADI,1KA27
1KA27,Kamis,Konsep Sist.&Tek.Sist.Inf. A*/**,9/10,J128,WIWIED WIDIYANINGSIH,1KA27
1KA27,Jum'at,Algoritma & Pemrograman 1A *,1/2,J1110,BUDI UTAMI FAHNUN,1KA27
1KA27,Jum'at,Peng. Bisnis dan Ekonomi Digital,3/4,J1110,LANA SULARTO,1KA27
1KA27,Jum'at,Algoritma & Pemrograman 1B *,7/8,J1110,SUTRESNA WATI,1KA27
1KA27,Jum'at,Digital Citizenship,9/10,J1110,ADAM HUDA NUGRAHA,1KA27
1KA28,Rabu,Algoritma & Pemrograman 1B *,1/2,J159,WALIYA RAHMAWANTI,1KA28
1KA28,Rabu,Konsep Sist.&Tek.Sist.Inf. A*/**,3/4,J159,WIWIED WIDIYANINGSIH,1KA28
1KA28,Rabu,Fisika & Kimia Dasar A,6/7,J1110,RR LUSSIANA ETP,1KA28
1KA28,Rabu,Digital Citizenship,9/10,J1116,ADAM HUDA NUGRAHA,1KA28
1KA28,Kamis,Fisika & Kimia Dasar B,1/2,J1317,YASMAN RIANTO,1KA28
1KA28,Kamis,Matematika Dasar 1B,3/4,J1317,YUNIARSO ARIF KRESNO,1KA28
1KA28,Kamis,Pendidikan Pancasila *,6/7,J1317,AIKKO FAIHA / RETMIARTI,1KA28
1KA28,Kamis,Algoritma & Pemrograman 1C *,9/10,J1317,MAKMUN,1KA28
1KA28,Jum'at,Peng. Bisnis dan Ekonomi Digital,1/2,J1210,LANA SULARTO,1KA28
1KA28,Jum'at,Algoritma & Pemrograman 1A *,3/4,J1210,QOMARIYAH,1KA28
1KA28,Jum'at,Matematika Dasar 1A,7/8,J1210,HENNY LESTARI,1KA28
1KA28,Sabtu,Konsep Sist.&Tek.Sist.Inf. B*/**,1/2,J1310,DENDY FAJAR ARIFIAWAN,1KA28
1KA28,Sabtu,Konsep Sist.&Tek.Sist.Inf. C*/**,3/4,J1310,WAHYU RIPTIAN ABADI,1KA28
1KA28,Sabtu,Ilmu Sosial & Budaya Dasar,5/6,J1310,YOGI AFRIANTO,1KA28
1KA29,Senin,Pendidikan Pancasila *,1/2,K252,NELTJE F KATUUK,1KA29
1KA29,Senin,Konsep Sist.&Tek.Sist.Inf. A*/**,3/4,K245,LILIS KUSNITAWATI,1KA29
1KA29,Senin,Algoritma & Pemrograman 1C *,5/6,K251,MITA LAILASARI,1KA29
1KA29,Selasa,Peng. Bisnis dan Ekonomi Digital,1/2,K255,HENNY MEDYAWATI,1KA29
1KA29,Selasa,Algoritma & Pemrograman 1A *,3/4,K288,TRI SULISTYORINI,1KA29
1KA29,Selasa,Algoritma & Pemrograman 1B *,5/6,K156,PURWANTI,1KA29
1KA29,Rabu,Konsep Sist.&Tek.Sist.Inf. B*/**,6/7,K272,LIRA ARUM KUSUMANINGTHYAS HUTA,1KA29
1KA29,Kamis,Fisika & Kimia Dasar A,1/2,K163,RR LUSSIANA ETP,1KA29
1KA29,Kamis,Matematika Dasar 1B,3/4,K244,RIFKI KOSASIH,1KA29
1KA29,Kamis,Ilmu Sosial & Budaya Dasar,5/6,K154,DIMAS RADHITIO ATMOHADI KUSUMO,1KA29
1KA29,Jum'at,Fisika & Kimia Dasar B,3/4,K254,INTI MULYO ARTI,1KA29
1KA29,Jum'at,Matematika Dasar 1A,6/7,K154,ALONA SITUMEANG,1KA29
1KA29,Sabtu,Konsep Sist.&Tek.Sist.Inf. C*/**,1/2,K152,AHMAD HIDAYAT,1KA29
1KA29,Sabtu,Digital Citizenship,3/4,K153,SWELANDIAH ENDAH PRATIWI,1KA29
1KA30,Senin,Peng. Bisnis dan Ekonomi Digital,1/2,K242,KARTIKA SARI,1KA30
1KA30,Senin,Algoritma & Pemrograman 1C *,3/4,K251,MITA LAILASARI,1KA30
1KA30,Senin,Algoritma & Pemrograman 1B *,5/6,K244,LELI SAFITRI,1KA30
1KA30,Selasa,Algoritma & Pemrograman 1A *,1/2,K288,TRI SULISTYORINI,1KA30
1KA30,Selasa,Matematika Dasar 1B,3/4,K254,HARYONO PUTRO,1KA30
1KA30,Selasa,Fisika & Kimia Dasar A,5/6,K241,ANY KURNIAWATY YAPIE,1KA30
1KA30,Rabu,Konsep Sist.&Tek.Sist.Inf. B*/**,4/5,K272,LIRA ARUM KUSUMANINGTHYAS HUTA,1KA30
1KA30,Kamis,Ilmu Sosial & Budaya Dasar,3/4,K154,DIMAS RADHITIO ATMOHADI KUSUMO,1KA30
1KA30,Jum'at,Matematika Dasar 1A,1/2,K154,ALONA SITUMEANG,1KA30
1KA30,Jum'at,Pendidikan Pancasila *,3/4,K245,CHOLIDAH ASTRI PERTIWI,1KA30
1KA30,Jum'at,Konsep Sist.&Tek.Sist.Inf. C*/**,6/7,K151,MAKMUN,1KA30
1KA30,Sabtu,Digital Citizenship,1/2,K153,SWELANDIAH ENDAH PRATIWI,1KA30
1KA30,Sabtu,Fisika & Kimia Dasar B,3/4,K256,YASMAN RIANTO,1KA30
1KA30,Sabtu,Konsep Sist.&Tek.Sist.Inf. A*/**,5/6,K166,LINDA HANDAYANI,1KA30
1KA31,Senin,Algoritma & Pemrograman 1A *,1/2,K265,GUNTUR EKA SAPUTRA,1KA31
1KA31,Senin,Algoritma & Pemrograman 1B *,3/4,K244,LELI SAFITRI,1KA31
1KA31,Senin,Konsep Sist.&Tek.Sist.Inf. B*/**,5/6,K255,TIYA NOVIYANTI,1KA31
1KA31,Selasa,Digital Citizenship,1/2,K154,AMARAN SHIDIQ,1KA31
1KA31,Selasa,Fisika & Kimia Dasar A,3/4,K241,ANY KURNIAWATY YAPIE,1KA31
1KA31,Selasa,Matematika Dasar 1B,5/6,K131,DYAH CITA IRAWATI,1KA31
1KA31,Rabu,Konsep Sist.&Tek.Sist.Inf. C*/**,1/2,K155,MAKMUN,1KA31
1KA31,Rabu,Peng. Bisnis dan Ekonomi Digital,3/4,K284,NATALLIOS PETER SIPASULTA,1KA31
1KA31,Rabu,Ilmu Sosial & Budaya Dasar,6/7,K246,DJAMUS KALIMAH SN,1KA31
1KA31,Jum'at,Konsep Sist.&Tek.Sist.Inf. A*/**,1/2,K291,DWI SETYASIH,1KA31
1KA31,Jum'at,Matematika Dasar 1A,3/4,K259,BAYU KUMORO YAKTI,1KA31
1KA31,Sabtu,Fisika & Kimia Dasar B,1/2,K256,YASMAN RIANTO,1KA31
1KA31,Sabtu,Pendidikan Pancasila *,3/4,K175,LIANA ELFARISTO ARIANI,1KA31
1KA31,Sabtu,Algoritma & Pemrograman 1C *,5/6,K244,BUDI UTAMI FAHNUN,1KA31
1KA32,Senin,Konsep Sist.&Tek.Sist.Inf. B*/**,1/2,K255,TIYA NOVIYANTI,1KA32
1KA32,Senin,Algoritma & Pemrograman 1B *,3/4,K265,GUNTUR EKA SAPUTRA,1KA32
1KA32,Selasa,Matematika Dasar 1B,1/2,K131,DYAH CITA IRAWATI,1KA32
1KA32,Selasa,Digital Citizenship,3/4,K154,AMARAN SHIDIQ,1KA32
1KA32,Rabu,Peng. Bisnis dan Ekonomi Digital,1/2,K284,NATALLIOS PETER SIPASULTA,1KA32
1KA32,Rabu,Ilmu Sosial & Budaya Dasar,4/5,K246,DJAMUS KALIMAH SN,1KA32
1KA32,Rabu,Konsep Sist.&Tek.Sist.Inf. C*/**,6/7,K155,MAKMUN,1KA32
1KA32,Kamis,Fisika & Kimia Dasar A,3/4,K163,RR LUSSIANA ETP,1KA32
1KA32,Jum'at,Fisika & Kimia Dasar B,1/2,K254,INTI MULYO ARTI,1KA32
1KA32,Jum'at,Konsep Sist.&Tek.Sist.Inf. A*/**,3/4,K291,DWI SETYASIH,1KA32
1KA32,Jum'at,Matematika Dasar 1A,6/7,K259,BAYU KUMORO YAKTI,1KA32
1KA32,Sabtu,Algoritma & Pemrograman 1C *,1/2,K272,MUHAMAD TAUFAN,1KA32
1KA32,Sabtu,Pendidikan Pancasila *,3/4,K175,LIANA ELFARISTO ARIANI,1KA32
1KA32,Sabtu,Algoritma & Pemrograman 1A *,5/6,K152,AHMAD HIDAYAT,1KA32
1KA33,Senin,Pendidikan Pancasila *,1/2,L236,ISNA PANDIJA,1KA33
1KA33,Senin,Fisika & Kimia Dasar B,6/7,L244,ASHFAR KURNIA,1KA33
1KA33,Selasa,Konsep Sist.&Tek.Sist.Inf. B*/**,2/3,L245,IDA ASTUTI,1KA33
1KA33,Selasa,Ilmu Sosial & Budaya Dasar,4/5,L234,JACOBUS BELIDA BLIKOLOLONG,1KA33
1KA33,Selasa,Algoritma & Pemrograman 1A *,8/9,L244,YENI SETIANI,1KA33
1KA33,Rabu,Digital Citizenship,2/3,L224,MAULANA MUJAHIDIN,1KA33
1KA33,Rabu,Algoritma & Pemrograman 1B *,4/5,L244,LULU CHAERANI MUNGGARAN,1KA33
1KA33,Kamis,Konsep Sist.&Tek.Sist.Inf. C*/**,4/5,L224,RISDIANDRI ISKANDAR,1KA33
1KA33,Kamis,Peng. Bisnis dan Ekonomi Digital,5/6,L222,DHIAN SWEETANIA,1KA33
1KA33,Jum'at,Matematika Dasar 1B,2/3,L242,LILIK SETIAWAN HERY PURNAMA,1KA33
1KA33,Jum'at,Algoritma & Pemrograman 1C *,7/8,L236,ONNY MARLEEN,1KA33
1KA33,Jum'at,Fisika & Kimia Dasar A,9/10,L244,BAMBANG DWINANTO,1KA33
1KA33,Sabtu,Matematika Dasar 1A,2/3,L245,M. ABDUL RIVAI,1KA33
1KA33,Sabtu,Konsep Sist.&Tek.Sist.Inf. A*/**,4/5,L241,YULI MAHARETTA ARIANTI,1KA33
2KA01,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA01
2KA01,Selasa,Sistem Basis Data 1 **,1/2/3,E228,SUHARNI,2KA01
2KA01,Selasa,Matematika Lanjut 1 */**,4/5,E228,SANDY SURYO PRAYOGO,2KA01
2KA01,Selasa,Manajemen & SIM 1 *,7/8,E214,TRINI SAPTARIANI,2KA01
2KA01,Rabu,Bahasa Inggris,1/2,E131,DWI NITISARI,2KA01
2KA01,Rabu,Matematika Sistem Informasi 1,3/4,E131,IRA DIANA SOLIHATI,2KA01
2KA01,Kamis,Peng. Org. & Arst Komputer,4/5,E221,TOPAN SUKMA SAPUTRA,2KA01
2KA01,Kamis,Teknik Pemrog. Terstruktur **,7/8,E524,SITI SAIDAH,2KA01
2KA01,Jum'at,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA01
2KA02,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA02
2KA02,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA02
2KA02,Rabu,Bahasa Inggris,1/2,G248,AKHMAD HAQIQI MA'MUN,2KA02
2KA02,Rabu,Manajemen & SIM 1 *,3/4,G248,ABDUL HAFIDH SIDIQ,2KA02
2KA02,Rabu,Matematika Sistem Informasi 1,7/8,G229,WIDIANTO MUTTAQIEN MUKODIM,2KA02
2KA02,Rabu,Teknik Pemrog. Terstruktur **,9/10,G229,NANI MINTARSIH,2KA02
2KA02,Kamis,Matematika Lanjut 1 */**,5/6,E218,AINI SURI TALITA,2KA02
2KA02,Kamis,Peng. Org. & Arst Komputer,7/8,E218,NOVRINA,2KA02
2KA02,Sabtu,Sistem Basis Data 1 **,1/2/3,E325,ROSDIANA,2KA02
2KA03,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA03
2KA03,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA03
2KA03,Rabu,Matematika Sistem Informasi 1,3/4,G244,WIDIANTO MUTTAQIEN MUKODIM,2KA03
2KA03,Rabu,Peng. Org. & Arst Komputer,6/7,G238,SUNNY ARIEF SUDIRO,2KA03
2KA03,Rabu,Bahasa Inggris,8/9,G238,RICKY PERDANA,2KA03
2KA03,Kamis,Manajemen & SIM 1 *,7/8,E516,CUT ASIANA GEMAWATY,2KA03
2KA03,Kamis,Teknik Pemrog. Terstruktur **,9/10,E516,SITI SAIDAH,2KA03
2KA03,Jum'at,Matematika Lanjut 1 */**,3/4,D626,SITA DEWI,2KA03
2KA03,Jum'at,Sistem Basis Data 1 **,7/8/9,D626,HURNANINGSIH,2KA03
2KA04,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA04
2KA04,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA04
2KA04,Rabu,Matematika Sistem Informasi 1,1/2,G232,IRWAN SUSANTO,2KA04
2KA04,Rabu,Bahasa Inggris,3/4,G232,AKHMAD HAQIQI MA'MUN,2KA04
2KA04,Rabu,Matematika Lanjut 1 */**,5/6,G232,BONANG WASPADADI LIGAR,2KA04
2KA04,Rabu,Teknik Pemrog. Terstruktur **,8/9,G125,SITI SAIDAH,2KA04
2KA04,Sabtu,Peng. Org. & Arst Komputer,3/4,E315,SILVIA HARLENA,2KA04
2KA04,Sabtu,Sistem Basis Data 1 **,5/6/7,E315,SANTI WIDIANTI,2KA04
2KA04,Sabtu,Manajemen & SIM 1 *,8/9,E315,MOHAMAD FUAD,2KA04
2KA05,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA05
2KA05,Selasa,Bahasa Inggris,3/4,D662,ASWARINI SENTANA,2KA05
2KA05,Selasa,Sistem Basis Data 1 **,5/6/7,D662,MURNIYATI,2KA05
2KA05,Rabu,Matematika Sistem Informasi 1,1/2,G217,WIDIANTO MUTTAQIEN MUKODIM,2KA05
2KA05,Rabu,Peng. Org. & Arst Komputer,3/4,G217,NOVRINA,2KA05
2KA05,Rabu,Teknik Pemrog. Terstruktur **,7/8,G126,NANI MINTARSIH,2KA05
2KA05,Kamis,Matematika Lanjut 1 */**,1/2,E523,HENNY HERYANDINI,2KA05
2KA05,Kamis,Manajemen & SIM 1 *,3/4,E523,CUT ASIANA GEMAWATY,2KA05
2KA05,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA05
2KA06,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA06
2KA06,Selasa,Matematika Sistem Informasi 1,1/2,E312,HENNY WIDOWATI FARIDA,2KA06
2KA06,Selasa,Manajemen & SIM 1 *,4/5,E311,TRINI SAPTARIANI,2KA06
2KA06,Selasa,Matematika Lanjut 1 */**,7/8,E312,AHMAD SABRI,2KA06
2KA06,Kamis,Teknik Pemrog. Terstruktur **,1/2,D621,SITI SAIDAH,2KA06
2KA06,Kamis,Bahasa Inggris,3/4,D621,DWI NITISARI,2KA06
2KA06,Kamis,Sistem Basis Data 1 **,5/6/7,D621,MURNIYATI,2KA06
2KA06,Kamis,Peng. Org. & Arst Komputer,9/10,D623,SUNNY ARIEF SUDIRO,2KA06
2KA06,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA06
2KA07,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA07
2KA07,Selasa,Teknik Pemrog. Terstruktur **,3/4,E446,EMELLIKA RAHMAYANA,2KA07
2KA07,Selasa,Peng. Org. & Arst Komputer,7/8,E527,VEGA VALENTINE,2KA07
2KA07,Selasa,Matematika Sistem Informasi 1,9/10,E527,SANDY SURYO PRAYOGO,2KA07
2KA07,Rabu,Sistem Basis Data 1 **,4/5/6,E427,BUNAWAN,2KA07
2KA07,Kamis,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA07
2KA07,Jum'at,Manajemen & SIM 1 *,3/4,E316,CAHYAWATI DIAH KUSUMARINI,2KA07
2KA07,Jum'at,Matematika Lanjut 1 */**,7/8,E427,JULLYSAVA C AZIZ,2KA07
2KA07,Jum'at,Bahasa Inggris,9/10,E427,SUPRIATNOKO,2KA07
2KA08,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA08
2KA08,Selasa,Teknik Pemrog. Terstruktur **,1/2,E244,DINA AGUSTEN,2KA08
2KA08,Selasa,Peng. Org. & Arst Komputer,3/4,E244,SILVIA HARLENA,2KA08
2KA08,Selasa,Matematika Sistem Informasi 1,6/7,E348,SANDY SURYO PRAYOGO,2KA08
2KA08,Selasa,Sistem Basis Data 1 **,8/9/10,E217,SUHARNI,2KA08
2KA08,Kamis,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA08
2KA08,Jum'at,Matematika Lanjut 1 */**,3/4,E423,JULLYSAVA C AZIZ,2KA08
2KA08,Jum'at,Manajemen & SIM 1 *,7/8,E326,CAHYAWATI DIAH KUSUMARINI,2KA08
2KA08,Jum'at,Bahasa Inggris,9/10,E326,MARIA,2KA08
2KA09,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA09
2KA09,Selasa,Manajemen & SIM 1 *,1/2,E315,TRINI SAPTARIANI,2KA09
2KA09,Selasa,Matematika Sistem Informasi 1,3/4,E315,HENNY WIDOWATI FARIDA,2KA09
2KA09,Selasa,Matematika Lanjut 1 */**,7/8,E424,RIFKI KOSASIH,2KA09
2KA09,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA09
2KA09,Kamis,Peng. Org. & Arst Komputer,6/7,D626,SUNNY ARIEF SUDIRO,2KA09
2KA09,Kamis,Sistem Basis Data 1 **,8/9/10,D626,MURNIYATI,2KA09
2KA09,Jum'at,Teknik Pemrog. Terstruktur **,3/4,E313,NANI MINTARSIH,2KA09
2KA09,Jum'at,Bahasa Inggris,7/8,E237,SUPRIATNOKO,2KA09
2KA10,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA10
2KA10,Selasa,Sistem Basis Data 1 **,4/5/6,E218,YULI KARYANTI,2KA10
2KA10,Selasa,Matematika Sistem Informasi 1,7/8,E517,M. ABDUL RIVAI,2KA10
2KA10,Rabu,Peng. Org. & Arst Komputer,3/4,G122,VEGA VALENTINE,2KA10
2KA10,Rabu,Teknik Pemrog. Terstruktur **,5/6,G122,NANI MINTARSIH,2KA10
2KA10,Kamis,Bahasa Inggris,1/2,E516,AULIA HARIS FIRSTIYANTI,2KA10
2KA10,Kamis,Matematika Lanjut 1 */**,3/4,E516,SITI MAESAROH,2KA10
2KA10,Kamis,Manajemen & SIM 1 *,5/6,E516,CUT ASIANA GEMAWATY,2KA10
2KA10,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA10
2KA11,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA11
2KA11,Selasa,Matematika Lanjut 1 */**,3/4,E448,RIFKI KOSASIH,2KA11
2KA11,Selasa,Peng. Org. & Arst Komputer,6/7,E123,TOPAN SUKMA SAPUTRA,2KA11
2KA11,Rabu,Manajemen & SIM 1 *,1/2,E323,TRINI SAPTARIANI,2KA11
2KA11,Rabu,Bahasa Inggris,3/4,E323,DWI NITISARI,2KA11
2KA11,Rabu,Sistem Basis Data 1 **,7/8/9,E423,BUNAWAN,2KA11
2KA11,Kamis,Matematika Sistem Informasi 1,3/4,E527,NURMA NUGRAHA,2KA11
2KA11,Kamis,Teknik Pemrog. Terstruktur **,5/6,E527,SITI SAIDAH,2KA11
2KA11,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA11
2KA12,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA12
2KA12,Selasa,Matematika Lanjut 1 */**,1/2,E432,SANDY SURYO PRAYOGO,2KA12
2KA12,Selasa,Sistem Basis Data 1 **,4/5/6,E514,SUHARNI,2KA12
2KA12,Selasa,Peng. Org. & Arst Komputer,7/8,E514,SILVIA HARLENA,2KA12
2KA12,Selasa,Manajemen & SIM 1 *,9/10,E312,TRINI SAPTARIANI,2KA12
2KA12,Rabu,Matematika Sistem Informasi 1,1/2,E244,IRA DIANA SOLIHATI,2KA12
2KA12,Rabu,Bahasa Inggris,5/6,E128,DWI NITISARI,2KA12
2KA12,Rabu,Teknik Pemrog. Terstruktur **,7/8,E128,RANI PUSPITA,2KA12
2KA12,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA12
2KA13,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA13
2KA13,Selasa,Bahasa Inggris,5/6,E215,MIA PURWATI,2KA13
2KA13,Selasa,Sistem Basis Data 1 **,8/9/10,E216,YULI KARYANTI,2KA13
2KA13,Rabu,Manajemen & SIM 1 *,1/2,D633,ALI AKBAR,2KA13
2KA13,Rabu,Peng. Org. & Arst Komputer,3/4,D633,SUNNY ARIEF SUDIRO,2KA13
2KA13,Rabu,Matematika Lanjut 1 */**,7/8,D655,FENI ANDRIANI,2KA13
2KA13,Kamis,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA13
2KA13,Jum'at,Teknik Pemrog. Terstruktur **,1/2,E341,DINA AGUSTEN,2KA13
2KA13,Jum'at,Matematika Sistem Informasi 1,3/4,E341,M. ABDUL RIVAI,2KA13
2KA14,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA14
2KA14,Selasa,Bahasa Inggris,1/2,G248,DYAH AMBAR WURYANDARI,2KA14
2KA14,Selasa,Manajemen & SIM 1 *,3/4,G248,MOHAMAD FUAD/ABDUL HAFIDH SIDIQ,2KA14
2KA14,Selasa,Matematika Sistem Informasi 1,5/6,G248,M. ABDUL RIVAI,2KA14
2KA14,Kamis,Sistem Basis Data 1 **,4/5/6,E313,YULIA CHALRI,2KA14
2KA14,Kamis,Peng. Org. & Arst Komputer,7/8,E313,TOPAN SUKMA SAPUTRA,2KA14
2KA14,Jum'at,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA14
2KA14,Jum'at,Teknik Pemrog. Terstruktur **,7/8,E423,DINA AGUSTEN,2KA14
2KA14,Jum'at,Matematika Lanjut 1 */**,9/10,E423,JULLYSAVA C AZIZ,2KA14
2KA15,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA15
2KA15,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA15
2KA15,Selasa,Bahasa Inggris,3/4,G222,DYAH AMBAR WURYANDARI,2KA15
2KA15,Selasa,Manajemen & SIM 1 *,5/6,G227,MOHAMAD FUAD/ABDUL HAFIDH SIDIQ,2KA15
2KA15,Kamis,Peng. Org. & Arst Komputer,1/2,E342,TOPAN SUKMA SAPUTRA,2KA15
2KA15,Kamis,Matematika Lanjut 1 */**,3/4,E342,AINI SURI TALITA,2KA15
2KA15,Jum'at,Sistem Basis Data 1 **,2/3/4,E348,HURNANINGSIH,2KA15
2KA15,Jum'at,Matematika Sistem Informasi 1,7/8,E414,BONANG WASPADADI LIGAR,2KA15
2KA15,Jum'at,Teknik Pemrog. Terstruktur **,9/10,E414,NANI MINTARSIH,2KA15
2KA16,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA16
2KA16,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA16
2KA16,Kamis,Matematika Lanjut 1 */**,1/2,E517,SITI MAESAROH,2KA16
2KA16,Kamis,Peng. Org. & Arst Komputer,3/4,E517,SUNNY ARIEF SUDIRO,2KA16
2KA16,Kamis,Bahasa Inggris,7/8,E334,SUGENG TRIYANTO,2KA16
2KA16,Jum'at,Teknik Pemrog. Terstruktur **,7/8,E317,NANI MINTARSIH,2KA16
2KA16,Jum'at,Matematika Sistem Informasi 1,9/10,E321,BONANG WASPADADI LIGAR,2KA16
2KA16,Sabtu,Manajemen & SIM 1 *,2/3,E238,MOHAMAD FUAD,2KA16
2KA16,Sabtu,Sistem Basis Data 1 **,4/5/6,E238,ROSDIANA,2KA16
2KA17,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA17
2KA17,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA17
2KA17,Rabu,Manajemen & SIM 1 *,3/4,E315,TRINI SAPTARIANI,2KA17
2KA17,Rabu,Matematika Sistem Informasi 1,5/6,E315,IRWAN SUSANTO,2KA17
2KA17,Rabu,Sistem Basis Data 1 **,8/9/10,E318,YULI KARYANTI,2KA17
2KA17,Kamis,Bahasa Inggris,3/4,E336,AULIA HARIS FIRSTIYANTI,2KA17
2KA17,Kamis,Matematika Lanjut 1 */**,6/7,E423,SITI MAESAROH,2KA17
2KA17,Sabtu,Teknik Pemrog. Terstruktur **,3/4,E324,BAGUS SETIADI GURMILANG,2KA17
2KA17,Sabtu,Peng. Org. & Arst Komputer,5/6,E324,AMARAN SHIDIQ,2KA17
2KA18,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA18
2KA18,Selasa,Manajemen & SIM 1 *,3/4,E129,CAHYAWATI DIAH KUSUMARINI,2KA18
2KA18,Selasa,Matematika Lanjut 1 */**,5/6,E129,RIFKI KOSASIH,2KA18
2KA18,Selasa,Peng. Org. & Arst Komputer,9/10,E241,VEGA VALENTINE,2KA18
2KA18,Rabu,Sistem Basis Data 1 **,4/5/6,E242,MUJI SANTOSO,2KA18
2KA18,Rabu,Bahasa Inggris,8/9,E242,AKHMAD HAQIQI MA'MUN,2KA18
2KA18,Kamis,Teknik Pemrog. Terstruktur **,1/2,E323,RANI PUSPITA,2KA18
2KA18,Kamis,Matematika Sistem Informasi 1,5/6,E322,NURMA NUGRAHA,2KA18
2KA18,Jum'at,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA18
2KA19,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA19
2KA19,Selasa,Sistem Basis Data 1 **,2/3/4,E511,YULIA CHALRI,2KA19
2KA19,Selasa,Manajemen & SIM 1 *,6/7,E313,CAHYAWATI DIAH KUSUMARINI,2KA19
2KA19,Selasa,Matematika Lanjut 1 */**,9/10,E246,RIFKI KOSASIH,2KA19
2KA19,Rabu,Bahasa Inggris,3/4,E516,ERNI HASTUTI,2KA19
2KA19,Rabu,Peng. Org. & Arst Komputer,6/7,E322,NOVRINA,2KA19
2KA19,Kamis,Matematika Sistem Informasi 1,1/2,E324,NURMA NUGRAHA,2KA19
2KA19,Kamis,Teknik Pemrog. Terstruktur **,3/4,E324,RANI PUSPITA,2KA19
2KA19,Jum'at,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA19
2KA20,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA20
2KA20,Selasa,Manajemen & SIM 1 *,1/2,G222,CAHYAWATI DIAH KUSUMARINI,2KA20
2KA20,Selasa,Matematika Lanjut 1 */**,4/5,G132,SELI SITI SHOLIHAT,2KA20
2KA20,Selasa,Teknik Pemrog. Terstruktur **,7/8,G147,EMELLIKA RAHMAYANA,2KA20
2KA20,Rabu,Sistem Basis Data 1 **,4/5/6,G216,SUHARNI,2KA20
2KA20,Kamis,Peng. Org. & Arst Komputer,4/5,E231,SANDHI PRAJAKA,2KA20
2KA20,Kamis,Bahasa Inggris,7/8,E225,IDHA DWI PERMATASARI,2KA20
2KA20,Kamis,Matematika Sistem Informasi 1,9/10,E225,NURMA NUGRAHA,2KA20
2KA20,Jum'at,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KA20
2KA21,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA21
2KA21,Selasa,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2KA21
2KA21,Kamis,Matematika Lanjut 1 */**,3/4,A702,ADI KRESNO,2KA21
2KA21,Kamis,Sistem Basis Data 1 **,5/6/7,A702,LELY PRANANINGRUM,2KA21
2KA21,Kamis,Peng. Org. & Arst Komputer,9/10,A702,YOGI PERMADI,2KA21
2KA21,Jum'at,Matematika Sistem Informasi 1,1/2,A801,NUR SETIAWATI,2KA21
2KA21,Jum'at,Manajemen & SIM 1 *,3/4,A801,IMAM PURWANTO,2KA21
2KA21,Jum'at,Bahasa Inggris,7/8,A801,RATNA WULANDARI,2KA21
2KA21,Jum'at,Teknik Pemrog. Terstruktur **,9/10,A801,EMELLIKA RAHMAYANA,2KA21
2KA22,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA22
2KA22,Selasa,Praktikum Komputasi Big Data,6/7,,TIM DOSEN,2KA22
2KA22,Kamis,Sistem Basis Data 1 **,1/2/3,A103,LELY PRANANINGRUM,2KA22
2KA22,Kamis,Peng. Org. & Arst Komputer,6/7,A103,YOGI PERMADI,2KA22
2KA22,Kamis,Matematika Lanjut 1 */**,8/9,A103,ADI KRESNO,2KA22
2KA22,Jum'at,Bahasa Inggris,1/2,A202,RATNA WULANDARI,2KA22
2KA22,Jum'at,Matematika Sistem Informasi 1,3/4,A202,NUR SETIAWATI,2KA22
2KA22,Jum'at,Teknik Pemrog. Terstruktur **,7/8,A701,EMELLIKA RAHMAYANA,2KA22
2KA22,Jum'at,Manajemen & SIM 1 *,9/10,A701,IMAM PURWANTO,2KA22
2KA23,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA23
2KA23,Selasa,Praktikum Komputasi Big Data,6/7,,TIM DOSEN,2KA23
2KA23,Kamis,Matematika Sistem Informasi 1,1/2,A701,NUR SETIAWATI,2KA23
2KA23,Kamis,Peng. Org. & Arst Komputer,3/4,A701,YOGI PERMADI,2KA23
2KA23,Kamis,Matematika Lanjut 1 */**,6/7,A701,ADI KRESNO,2KA23
2KA23,Kamis,Sistem Basis Data 1 **,8/9/10,A701,LELY PRANANINGRUM,2KA23
2KA23,Jum'at,Teknik Pemrog. Terstruktur **,1/2,A702,EMELLIKA RAHMAYANA,2KA23
2KA23,Jum'at,Bahasa Inggris,3/4,A702,RATNA WULANDARI,2KA23
2KA23,Jum'at,Manajemen & SIM 1 *,7/8,A702,IMAM PURWANTO,2KA23
2KA24,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA24
2KA24,Rabu,Peng. Org. & Arst Komputer,11/12,D635,AMARAN SHIDIQ,2KA24
2KA24,Jum'at,Matematika Sistem Informasi 1,11/12,D633,ARIS GUNARYATI,2KA24
2KA24,Jum'at,Matematika Lanjut 1 */**,13/14,D633,HENNY HERYANDINI,2KA24
2KA24,Sabtu,Sistem Basis Data 1 **,1/2/3,E225,SANTI WIDIANTI,2KA24
2KA24,Sabtu,Praktikum Komputasi Big Data,11/12,,TIM DOSEN,2KA24
2KA24,Sabtu,Manajemen & SIM 1 *,5/6,E328,MOHAMAD FUAD,2KA24
2KA24,Sabtu,Teknik Pemrog. Terstruktur **,7/8,E328,BAGUS SETIADI GURMILANG,2KA24
2KA24,Sabtu,Bahasa Inggris,9/10,E328,SUARDI,2KA24
2KA25,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA25
2KA25,Selasa,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2KA25
2KA25,Rabu,Sistem Basis Data 1 **,2/3/4,J1316A,METTY MUSTIKASARI,2KA25
2KA25,Rabu,Bahasa Inggris,7/8,J1614,RETNO BUDI ASTUTI,2KA25
2KA25,Rabu,Peng. Org. & Arst Komputer,9/10,J1614,DEBYO SAPTONO,2KA25
2KA25,Kamis,Manajemen & SIM 1 *,1/2,J332,IRAWATY,2KA25
2KA25,Kamis,Teknik Pemrog. Terstruktur **,3/4,J332,ISNI OKTRIA,2KA25
2KA25,Jum'at,Matematika Lanjut 1 */**,3/4,J144,ACHMAD FAHRUROZI,2KA25
2KA25,Jum'at,Matematika Sistem Informasi 1,7/8,J144,ISKANDAR ZAMZANI,2KA25
2KA26,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA26
2KA26,Selasa,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2KA26
2KA26,Rabu,Peng. Org. & Arst Komputer,3/4,J118,DEBYO SAPTONO,2KA26
2KA26,Rabu,Sistem Basis Data 1 **,6/7/8,J155,METTY MUSTIKASARI,2KA26
2KA26,Kamis,Manajemen & SIM 1 *,3/4,J324,IRAWATY,2KA26
2KA26,Kamis,Teknik Pemrog. Terstruktur **,6/7,J332,ISNI OKTRIA,2KA26
2KA26,Jum'at,Matematika Lanjut 1 */**,1/2,J158,ACHMAD FAHRUROZI,2KA26
2KA26,Jum'at,Matematika Sistem Informasi 1,3/4,J158,ISKANDAR ZAMZANI,2KA26
2KA26,Jum'at,Bahasa Inggris,7/8,J158,CINTANIA DHARMA B,2KA26
2KA27,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA27
2KA27,Selasa,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2KA27
2KA27,Rabu,Sistem Basis Data 1 **,3/4/5,J155,RINA NOVIANA,2KA27
2KA27,Rabu,Matematika Sistem Informasi 1,7/8,J1518,SIGIT MUHAMAD YAKUB,2KA27
2KA27,Rabu,Manajemen & SIM 1 *,9/10,J1518,IRAWATY,2KA27
2KA27,Jum'at,Peng. Org. & Arst Komputer,1/2,J1510,SINDY NOVA,2KA27
2KA27,Jum'at,Matematika Lanjut 1 */**,3/4,J1510,NURMA NUGRAHA,2KA27
2KA27,Sabtu,Bahasa Inggris,3/4,J147,ZAINAL RIADI,2KA27
2KA27,Sabtu,Teknik Pemrog. Terstruktur **,5/6,J147,DIMAS NUGEROHO,2KA27
2KA28,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA28
2KA28,Selasa,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2KA28
2KA28,Kamis,Bahasa Inggris,1/2,J60901,ARSIWELA,2KA28
2KA28,Kamis,Sistem Basis Data 1 **,3/4/5,J60901,METTY MUSTIKASARI,2KA28
2KA28,Kamis,Matematika Sistem Informasi 1,7/8,J60901,IAS SRI WAHYUNI,2KA28
2KA28,Kamis,Teknik Pemrog. Terstruktur **,9/10,J60901,INDAH TRI HANDAYANI,2KA28
2KA28,Jum'at,Manajemen & SIM 1 *,1/2,J1519,ERTIE NUR HARTIWATI,2KA28
2KA28,Jum'at,Peng. Org. & Arst Komputer,3/4,J1519,SINDY NOVA,2KA28
2KA28,Jum'at,Matematika Lanjut 1 */**,7/8,J1519,NURMA NUGRAHA,2KA28
2KA29,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA29
2KA29,Selasa,Sistem Basis Data 1 **,8/9/10,J1311,RINA NOVIANA,2KA29
2KA29,Rabu,Peng. Org. & Arst Komputer,1/2,J124,INDAH TRI HANDAYANI,2KA29
2KA29,Rabu,Matematika Sistem Informasi 1,4/5,J1318,SIGIT MUHAMAD YAKUB,2KA29
2KA29,Rabu,Manajemen & SIM 1 *,7/8,J124,IRAWATY,2KA29
2KA29,Kamis,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA29
2KA29,Sabtu,Matematika Lanjut 1 */**,1/2,J123,POPONG SETIAWATI,2KA29
2KA29,Sabtu,Teknik Pemrog. Terstruktur **,3/4,J123,DIMAS NUGEROHO,2KA29
2KA29,Sabtu,Bahasa Inggris,7/8,J1318,MARTALENA BANUREA,2KA29
2KA30,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA30
2KA30,Selasa,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2KA30
2KA30,Rabu,Manajemen & SIM 1 *,5/6,J1114,ERTIE NUR HARTIWATI,2KA30
2KA30,Rabu,Matematika Lanjut 1 */**,8/9,J1424,AHMAD SABRI,2KA30
2KA30,Kamis,Peng. Org. & Arst Komputer,3/4,J60902,INDAH TRI HANDAYANI,2KA30
2KA30,Kamis,Sistem Basis Data 1 **,6/7/8,J60902,METTY MUSTIKASARI,2KA30
2KA30,Kamis,Matematika Sistem Informasi 1,9/10,J60902,IAS SRI WAHYUNI,2KA30
2KA30,Sabtu,Bahasa Inggris,5/6,J1515B,ZAINAL RIADI,2KA30
2KA30,Sabtu,Teknik Pemrog. Terstruktur **,7/8,J1515B,DIMAS NUGEROHO,2KA30
2KA31,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA31
2KA31,Selasa,Sistem Basis Data 1 **,1/2/3,K258,ROSDIANA,2KA31
2KA31,Selasa,Matematika Sistem Informasi 1,4/5,K246,DESTI RIMINARSIH,2KA31
2KA31,Rabu,Matematika Lanjut 1 */**,1/2,K165,DEWI PUTRIE LESTARI,2KA31
2KA31,Kamis,Bahasa Inggris,2/3,K175,ASWARINI SENTANA,2KA31
2KA31,Jum'at,Manajemen & SIM 1 *,1/2,K264,TRINI SAPTARIANI,2KA31
2KA31,Jum'at,Teknik Pemrog. Terstruktur **,3/4,K265,DETTY PURNAMASARI,2KA31
2KA31,Sabtu,Peng. Org. & Arst Komputer,3/4,K295,SYARIFAH AZHARINA SYAFRUDIN,2KA31
2KA31,Sabtu,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2KA31
2KA32,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA32
2KA32,Rabu,Sistem Basis Data 1 **,1/2/3,K262,META MEYSAWATI,2KA32
2KA32,Rabu,Matematika Lanjut 1 */**,4/5,K165,DEWI PUTRIE LESTARI,2KA32
2KA32,Rabu,Teknik Pemrog. Terstruktur **,6/7,K264,NELLY SOFI,2KA32
2KA32,Kamis,Matematika Sistem Informasi 1,3/4,K131,ACHMAD FAHRUROZI,2KA32
2KA32,Kamis,Bahasa Inggris,5/6,K175,ASWARINI SENTANA,2KA32
2KA32,Jum'at,Manajemen & SIM 1 *,3/4,K264,TRINI SAPTARIANI,2KA32
2KA32,Sabtu,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA32
2KA32,Sabtu,Peng. Org. & Arst Komputer,6/7,K295,SYARIFAH AZHARINA SYAFRUDIN,2KA32
2KA33,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA33
2KA33,Selasa,Peng. Org. & Arst Komputer,1/2,K247,DIANA IKASARI,2KA33
2KA33,Selasa,Manajemen & SIM 1 *,3/4,K255,HENNY MEDYAWATI,2KA33
2KA33,Selasa,Matematika Sistem Informasi 1,6/7,K282,NURMA NUGRAHA,2KA33
2KA33,Rabu,Teknik Pemrog. Terstruktur **,1/2,K264,NELLY SOFI,2KA33
2KA33,Rabu,Sistem Basis Data 1 **,4/5/6,K262,META MEYSAWATI,2KA33
2KA33,Kamis,Bahasa Inggris,5/6,K175,ASWARINI SENTANA,2KA33
2KA33,Jumat,Praktikum Komputasi Big Data,6/7,,TIM DOSEN,2KA33
2KA33,Sabtu,Matematika Lanjut 1 */**,3/4,K254,ELLYSA,2KA33
2KA34,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KA34
2KA34,Selasa,Peng. Org. & Arst Komputer,4/5,L226,NOVRINA,2KA34
2KA34,Selasa,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2KA34
2KA34,Rabu,Matematika Lanjut 1 */**,2/3,L245,M. ABDUL RIVAI,2KA34
2KA34,Rabu,Manajemen & SIM 1 *,5/6,L246,CAHYAWATI DIAH KUSUMARINI,2KA34
2KA34,Jum'at,Sistem Basis Data 1 **,2/3/4,L224,ONNY MARLEEN,2KA34
2KA34,Jum'at,Matematika Sistem Informasi 1,7/8,L224,BAMBANG DWINANTO,2KA34
2KA34,Sabtu,Teknik Pemrog. Terstruktur **,1/2,L223,SITI SAIDAH,2KA34
2KA34,Sabtu,Bahasa Inggris,4/5,L226,AULIA HARIS FIRSTIYANTI,2KA34
2KA35,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KA35
3KA01,Selasa,Interaksi Manusia & Komputer*/**,4/5/6,E317,FEBRIANI,3KA01
3KA01,Selasa,Konsep Data Mining,9/10,E317,KOKO BACHRUDIN,3KA01
3KA01,Rabu,Sistem Keamanan Tek. Informasi *,1/2/3,E514,RODIAH,3KA01
3KA01,Rabu,Statistika **,4/5/6,E514,PENI SAWITRI,3KA01
3KA01,Rabu,Graf & Analisis Algoritma,8/9/10,E425,BUDI SETIAWAN2/TEGUH YUNIARKO,3KA01
3KA01,Kamis,Metode Penelitian,1/2,E318,TEDDY OSWARI,3KA01
3KA01,Kamis,Pemrograman Berbasis Web **,3/4,E318,REVIDA IRIANA NAPITUPULU,3KA01
3KA01,Kamis,Jejaring Sosial&Konten Kreatif,6/7,E414,JULIA FAJARYANTI,3KA01
3KA01,Kamis,Bahasa Indonesia 2,9/10,E314,ROSI ROSIDAH,3KA01
3KA02,Senin,Metode Penelitian,1/2,E441,PUJI RAHAYU SETYANINGSIH,3KA02
3KA02,Senin,Graf & Analisis Algoritma,5/6/7,E331,TEGUH YUNIARKO,3KA02
3KA02,Senin,Sistem Keamanan Tek. Informasi *,8/9/10,E331,CUT MAISYARAH KARYATI,3KA02
3KA02,Selasa,Interaksi Manusia & Komputer*/**,1/2/3,E313,FEBRIANI,3KA02
3KA02,Selasa,Jejaring Sosial&Konten Kreatif,4/5,E313,JALINAS/SAYIDATI KARIMA,3KA02
3KA02,Selasa,Bahasa Indonesia 2,7/8,E449,ANDINI KURNIA FITRIANA,3KA02
3KA02,Rabu,Statistika **,1/2/3,E513,PENI SAWITRI,3KA02
3KA02,Rabu,Pemrograman Berbasis Web **,5/6,E122,BERTALYA,3KA02
3KA02,Rabu,Konsep Data Mining,7/8,E122,TUBAGUS MAULANA KUSUMA,3KA02
3KA03,Senin,Graf & Analisis Algoritma,1/2/3,E522,NURWENDO HARICAHYADI,3KA03
3KA03,Senin,Statistika **,4/5/6,E522,SRI RAKHMAWATI,3KA03
3KA03,Senin,Metode Penelitian,9/10,E516,MUFID SURYANI,3KA03
3KA03,Rabu,Interaksi Manusia & Komputer*/**,1/2/3,E217,FENNI AGUSTINA,3KA03
3KA03,Rabu,Pemrograman Berbasis Web **,5/6,E321,RHEZA ANDIKA,3KA03
3KA03,Rabu,Sistem Keamanan Tek. Informasi *,7/8/9,E217,ASTIE DARMAYANTIE,3KA03
3KA03,Sabtu,Jejaring Sosial&Konten Kreatif,4/5,G315,NOVIA FATIMAH,3KA03
3KA03,Sabtu,Konsep Data Mining,6/7,G315,SILVIA HARLENA,3KA03
3KA03,Sabtu,Bahasa Indonesia 2,8/9,G315,MARGARETHA SUMARWATI,3KA03
3KA04,Senin,Pemrograman Berbasis Web **,1/2,E449,DEWI ANGGRAINI PUSPA HAPSARI,3KA04
3KA04,Senin,Jejaring Sosial&Konten Kreatif,3/4,E449,DIANA IKASARI,3KA04
3KA04,Senin,Statistika **,6/7/8,E325,RETNO MAHARESI,3KA04
3KA04,Senin,Bahasa Indonesia 2,9/10,E325,ANDINI KURNIA FITRIANA,3KA04
3KA04,Selasa,Metode Penelitian,1/2,E227,IKHWAN H S,3KA04
3KA04,Selasa,Graf & Analisis Algoritma,4/5/6,E122,AVINANTA TARIGAN,3KA04
3KA04,Selasa,Konsep Data Mining,7/8,E122,KOKO BACHRUDIN,3KA04
3KA04,Rabu,Sistem Keamanan Tek. Informasi *,4/5/6,E211,ASTIE DARMAYANTIE,3KA04
3KA04,Rabu,Interaksi Manusia & Komputer*/**,7/8/9,E211,TAUFIK HIDAYAT,3KA04
3KA05,Senin,Statistika **,1/2/3,E347,SRI RAKHMAWATI,3KA05
3KA05,Senin,Sistem Keamanan Tek. Informasi *,5/6/7,E333,CUT MAISYARAH KARYATI,3KA05
3KA05,Senin,Jejaring Sosial&Konten Kreatif,9/10,E337,DIANA IKASARI,3KA05
3KA05,Rabu,Bahasa Indonesia 2,1/2,E223,SITI PUJIANTI,3KA05
3KA05,Rabu,Interaksi Manusia & Komputer*/**,4/5/6,E218,FENNI AGUSTINA,3KA05
3KA05,Rabu,Pemrograman Berbasis Web **,9/10,E321,BERTALYA,3KA05
3KA05,Sabtu,Konsep Data Mining,1/2,E245,SILVIA HARLENA,3KA05
3KA05,Sabtu,Graf & Analisis Algoritma,4/5/6,E245,WINARTI DWI ASTUTI,3KA05
3KA05,Sabtu,Metode Penelitian,7/8,E245,RIRIN YULIYANTI,3KA05
3KA06,Senin,Graf & Analisis Algoritma,1/2/3,E343,TEGUH YUNIARKO,3KA06
3KA06,Selasa,Konsep Data Mining,3/4,E321,TUBAGUS MAULANA KUSUMA,3KA06
3KA06,Selasa,Statistika **,6/7/8,E522,THOMAS YUNI GUNARTO,3KA06
3KA06,Selasa,Jejaring Sosial&Konten Kreatif,9/10,E522,JALINAS/SAYIDATI KARIMA,3KA06
3KA06,Kamis,Bahasa Indonesia 2,3/4,E522,ARI WIJAYA BASUKI RAHARJO,3KA06
3KA06,Kamis,Interaksi Manusia & Komputer*/**,5/6/7,E311,MARLIZA GANEFI GUMAY,3KA06
3KA06,Sabtu,Metode Penelitian,1/2,E347,MUHAMMAD FIRDAUS,3KA06
3KA06,Sabtu,Sistem Keamanan Tek. Informasi *,3/4/5,E347,SYALIS IBNIH MELATI ISTINI,3KA06
3KA06,Sabtu,Pemrograman Berbasis Web **,7/8,E347,OVAN SUNARTO PULU,3KA06
3KA07,Senin,Statistika **,3/4/5,E243,RETNO MAHARESI,3KA07
3KA07,Senin,Jejaring Sosial&Konten Kreatif,7/8,E526,DIANA IKASARI,3KA07
3KA07,Senin,Bahasa Indonesia 2,9/10,E526,SANGSANG SANGABAKTI,3KA07
3KA07,Selasa,Konsep Data Mining,2/3,D636,SIWI PRIHATININGSIH,3KA07
3KA07,Selasa,Sistem Keamanan Tek. Informasi *,4/5/6,D636,IMAM AHMAD TRINUGROHO,3KA07
3KA07,Selasa,Pemrograman Berbasis Web **,9/10,D656,HANUM PUTRI PERMATASARI,3KA07
3KA07,Kamis,Graf & Analisis Algoritma,1/2/3,E226,RICKY AGUS TJIPTANATA,3KA07
3KA07,Kamis,Metode Penelitian,6/7,E315,TEDDY OSWARI,3KA07
3KA07,Kamis,Interaksi Manusia & Komputer*/**,8/9/10,E315,MARLIZA GANEFI GUMAY,3KA07
3KA08,Selasa,Bahasa Indonesia 2,1/2,E232,RAFIQA MAULIDIA,3KA08
3KA08,Selasa,Pemrograman Berbasis Web **,3/4,E232,HANUM PUTRI PERMATASARI,3KA08
3KA08,Selasa,Konsep Data Mining,6/7,E237,IHSAN JATNIKA,3KA08
3KA08,Selasa,Sistem Keamanan Tek. Informasi *,8/9/10,E237,DHIAN SWEETANIA,3KA08
3KA08,Kamis,Interaksi Manusia & Komputer*/**,1/2/3,E215,TAUFIK HIDAYAT,3KA08
3KA08,Kamis,Statistika **,5/6/7,E344,SANDY SURYADY,3KA08
3KA08,Kamis,Graf & Analisis Algoritma,8/9/10,E344,RICKY AGUS TJIPTANATA,3KA08
3KA08,Sabtu,Metode Penelitian,3/4,E328,MUHAMMAD FIRDAUS,3KA08
3KA08,Sabtu,Jejaring Sosial&Konten Kreatif,6/7,E247,MUHAMMAD FADLY,3KA08
3KA09,Senin,Konsep Data Mining,1/2,E248,IHSAN JATNIKA,3KA09
3KA09,Senin,Bahasa Indonesia 2,4/5,E432,NURMANINGSIH,3KA09
3KA09,Senin,Metode Penelitian,7/8,E312,MUFID SURYANI,3KA09
3KA09,Senin,Pemrograman Berbasis Web **,9/10,E312,BERTALYA,3KA09
3KA09,Selasa,Graf & Analisis Algoritma,1/2/3,E211,AVINANTA TARIGAN,3KA09
3KA09,Selasa,Interaksi Manusia & Komputer*/**,4/5/6,E211,FENNI AGUSTINA,3KA09
3KA09,Selasa,Statistika **,8/9/10,E234,BINTARTI YUSRIANA,3KA09
3KA09,Kamis,Jejaring Sosial&Konten Kreatif,3/4,E323,JULIA FAJARYANTI,3KA09
3KA09,Kamis,Sistem Keamanan Tek. Informasi *,6/7/8,E341,SWELANDIAH ENDAH PRATIWI,3KA09
3KA10,Selasa,Konsep Data Mining,4/5,D667,SIWI PRIHATININGSIH,3KA10
3KA10,Selasa,Pemrograman Berbasis Web **,7/8,D654,HANUM PUTRI PERMATASARI,3KA10
3KA10,Selasa,Metode Penelitian,9/10,D654,AINI SURI TALITA,3KA10
3KA10,Rabu,Statistika **,1/2/3,E216,KOMSI KORANTI,3KA10
3KA10,Rabu,Interaksi Manusia & Komputer*/**,4/5/6,E216,FEBRIANI,3KA10
3KA10,Rabu,Sistem Keamanan Tek. Informasi *,8/9/10,E247,FITRIANINGSIH,3KA10
3KA10,Kamis,Bahasa Indonesia 2,1/2,E526,ARI WIJAYA BASUKI RAHARJO,3KA10
3KA10,Kamis,Graf & Analisis Algoritma,4/5/6,E226,RICKY AGUS TJIPTANATA,3KA10
3KA10,Kamis,Jejaring Sosial&Konten Kreatif,7/8,E226,ERNIANTI HASIBUAN,3KA10
3KA11,Senin,Bahasa Indonesia 2,1/2,E521,ANDINI KURNIA FITRIANA,3KA11
3KA11,Senin,Metode Penelitian,4/5,E212,MUFID SURYANI,3KA11
3KA11,Senin,Statistika **,6/7/8,E212,SRI WULAN W RATIH,3KA11
3KA11,Selasa,Pemrograman Berbasis Web **,1/2,E334,DEWI ANGGRAINI PUSPA HAPSARI,3KA11
3KA11,Selasa,Sistem Keamanan Tek. Informasi *,4/5/6,E517,RODIAH,3KA11
3KA11,Selasa,Konsep Data Mining,8/9,E334,IHSAN JATNIKA,3KA11
3KA11,Kamis,Jejaring Sosial&Konten Kreatif,1/2,E443,JULIA FAJARYANTI,3KA11
3KA11,Kamis,Interaksi Manusia & Komputer*/**,4/5/6,E215,TAUFIK HIDAYAT,3KA11
3KA11,Kamis,Graf & Analisis Algoritma,8/9/10,E215,IVAN MAURITS,3KA11
3KA12,Selasa,Sistem Keamanan Tek. Informasi *,1/2/3,E332,MAULANA MUJAHIDIN,3KA12
3KA12,Selasa,Pemrograman Berbasis Web **,4/5,E332,RHEZA ANDIKA,3KA12
3KA12,Selasa,Bahasa Indonesia 2,7/8,E246,ABDUR ROCHMAN,3KA12
3KA12,Rabu,Statistika **,1/2/3,E226,PARANITA ASNUR,3KA12
3KA12,Rabu,Konsep Data Mining,4/5,E226,TUBAGUS MAULANA KUSUMA,3KA12
3KA12,Rabu,Interaksi Manusia & Komputer*/**,7/8/9,E212,FENNI AGUSTINA,3KA12
3KA12,Kamis,Metode Penelitian,3/4,E233,TEDDY OSWARI,3KA12
3KA12,Kamis,Graf & Analisis Algoritma,6/7/8,E521,AVINANTA TARIGAN,3KA12
3KA12,Kamis,Jejaring Sosial&Konten Kreatif,9/10,E521,ERNIANTI HASIBUAN,3KA12
3KA13,Senin,Statistika **,1/2/3,E317,SRI WULAN W RATIH,3KA13
3KA13,Senin,Konsep Data Mining,5/6,E241,IHSAN JATNIKA,3KA13
3KA13,Senin,Bahasa Indonesia 2,7/8,E241,ANDINI KURNIA FITRIANA,3KA13
3KA13,Senin,Jejaring Sosial&Konten Kreatif,9/10,E241,VIVIEN NOVA FITHRIANA,3KA13
3KA13,Selasa,Interaksi Manusia & Komputer*/**,1/2/3,E214,FENNI AGUSTINA,3KA13
3KA13,Selasa,Graf & Analisis Algoritma,4/5/6,E214,NURWENDO HARICAHYADI,3KA13
3KA13,Selasa,Sistem Keamanan Tek. Informasi *,8/9/10,E233,SWELANDIAH ENDAH PRATIWI,3KA13
3KA13,Sabtu,Metode Penelitian,5/6,E241,IKHWAN H S,3KA13
3KA13,Sabtu,Pemrograman Berbasis Web **,9/10,E241,OVAN SUNARTO PULU,3KA13
3KA14,Senin,Metode Penelitian,1/2,E338,ANA DWI PERTIWI,3KA14
3KA14,Senin,Bahasa Indonesia 2,3/4,E338,MELANIAWATI,3KA14
3KA14,Senin,Pemrograman Berbasis Web **,6/7,E435,DEWI ANGGRAINI PUSPA HAPSARI,3KA14
3KA14,Senin,Statistika **,8/9/10,E435,SRI RAKHMAWATI,3KA14
3KA14,Selasa,Konsep Data Mining,1/2,E321,TUBAGUS MAULANA KUSUMA,3KA14
3KA14,Selasa,Sistem Keamanan Tek. Informasi *,5/6/7,E235,DHIAN SWEETANIA,3KA14
3KA14,Selasa,Graf & Analisis Algoritma,8/9/10,E235,NURWENDO HARICAHYADI,3KA14
3KA14,Rabu,Interaksi Manusia & Komputer*/**,1/2/3,E123,DARMASTUTI,3KA14
3KA14,Rabu,Jejaring Sosial&Konten Kreatif,4/5,E123,I MADE WIRYANA,3KA14
3KA15,Senin,Jejaring Sosial&Konten Kreatif,1/2,G313,DIANA IKASARI,3KA15
3KA15,Senin,Metode Penelitian,3/4,G313,HANTORO ARIEF GISIJANTO,3KA15
3KA15,Senin,Konsep Data Mining,7/8,G444,IHSAN JATNIKA,3KA15
3KA15,Selasa,Sistem Keamanan Tek. Informasi *,1/2/3,E413,RODIAH,3KA15
3KA15,Selasa,Statistika **,5/6/7,E448,BINTARTI YUSRIANA,3KA15
3KA15,Selasa,Bahasa Indonesia 2,9/10,E122,ANDINI KURNIA FITRIANA,3KA15
3KA15,Kamis,Interaksi Manusia & Komputer*/**,1/2/3,E313,MARLIZA GANEFI GUMAY,3KA15
3KA15,Kamis,Pemrograman Berbasis Web **,5/6,E318,REVIDA IRIANA NAPITUPULU,3KA15
3KA15,Sabtu,Graf & Analisis Algoritma,1/2/3,E311,BUDI SETIAWAN2/WINARTI DWIASTUTI,3KA15
3KA16,Senin,Sistem Keamanan Tek. Informasi *,1/2/3,E327,ASTIE DARMAYANTIE,3KA16
3KA16,Senin,Metode Penelitian,4/5,E444,ANA DWI PERTIWI,3KA16
3KA16,Senin,Pemrograman Berbasis Web **,7/8,E313,BERTALYA,3KA16
3KA16,Kamis,Graf & Analisis Algoritma,1/2/3,D633,AHMAD APANDI,3KA16
3KA16,Kamis,Interaksi Manusia & Komputer*/**,4/5/6,D633,MEILANI B SIREGAR,3KA16
3KA16,Kamis,Jejaring Sosial&Konten Kreatif,9/10,D662,SIWI PRIHATININGSIH,3KA16
3KA16,Sabtu,Konsep Data Mining,2/3,E447,KOKO BACHRUDIN,3KA16
3KA16,Sabtu,Bahasa Indonesia 2,4/5,E447,SANGSANG SANGABAKTI,3KA16
3KA16,Sabtu,Statistika **,7/8/9,E447,MOH. EGA ELMAN MISKA,3KA16
3KA17,Senin,Bahasa Indonesia 2,1/2,E442,MELANIAWATI,3KA17
3KA17,Senin,Pemrograman Berbasis Web **,3/4,E442,DEWI ANGGRAINI PUSPA HAPSARI,3KA17
3KA17,Senin,Metode Penelitian,5/6,E442,PUJI RAHAYU SETYANINGSIH,3KA17
3KA17,Rabu,Interaksi Manusia & Komputer*/**,1/2/3,E212,FEBRIANI,3KA17
3KA17,Rabu,Sistem Keamanan Tek. Informasi *,4/5/6,E212,RODIAH,3KA17
3KA17,Rabu,Graf & Analisis Algoritma,8/9/10,E446,RICKY AGUS TJIPTANATA,3KA17
3KA17,Sabtu,Jejaring Sosial&Konten Kreatif,2/3,G229,NOVIA FATIMAH,3KA17
3KA17,Sabtu,Statistika **,5/6/7,G229,ANDY WIDYANTHO,3KA17
3KA17,Sabtu,Konsep Data Mining,8/9,G229,SILVIA HARLENA,3KA17
3KA18,Selasa,Interaksi Manusia & Komputer*/**,4/5/6,E423,DARMASTUTI,3KA18
3KA18,Selasa,Jejaring Sosial&Konten Kreatif,7/8,E245,SIWI PRIHATININGSIH,3KA18
3KA18,Selasa,Bahasa Indonesia 2,9/10,E245,SANGSANG SANGABAKTI,3KA18
3KA18,Rabu,Konsep Data Mining,1/2,E211,TUBAGUS MAULANA KUSUMA,3KA18
3KA18,Rabu,Sistem Keamanan Tek. Informasi *,4/5/6,E243,FITRIANINGSIH,3KA18
3KA18,Rabu,Statistika **,8/9/10,E243,EDI MINAJI PRIBADI,3KA18
3KA18,Kamis,Pemrograman Berbasis Web **,1/2,E315,REVIDA IRIANA NAPITUPULU,3KA18
3KA18,Kamis,Graf & Analisis Algoritma,3/4/5,E315,AVINANTA TARIGAN,3KA18
3KA18,Kamis,Metode Penelitian,7/8,E322,AINI SURI TALITA,3KA18
3KA19,Senin,Metode Penelitian,1/2,E315,TEDDY OSWARI,3KA19
3KA19,Senin,Sistem Keamanan Tek. Informasi *,4/5/6,E326,ASTIE DARMAYANTIE,3KA19
3KA19,Senin,Graf & Analisis Algoritma,8/9/10,E424,TEGUH YUNIARKO,3KA19
3KA19,Selasa,Interaksi Manusia & Komputer*/**,1/2/3,E423,DARMASTUTI,3KA19
3KA19,Selasa,Jejaring Sosial&Konten Kreatif,4/5,E433,I MADE WIRYANA,3KA19
3KA19,Selasa,Bahasa Indonesia 2,7/8,E444,RAFIQA MAULIDIA,3KA19
3KA19,Rabu,Statistika **,2/3/4,E234,EDI MINAJI PRIBADI,3KA19
3KA19,Rabu,Pemrograman Berbasis Web **,7/8,E222,RHEZA ANDIKA,3KA19
3KA19,Rabu,Konsep Data Mining,9/10,E222,TUBAGUS MAULANA KUSUMA,3KA19
3KA20,Selasa,Jejaring Sosial&Konten Kreatif,1/2,E136,I MADE WIRYANA,3KA20
3KA20,Selasa,Metode Penelitian,3/4,E136,IKHWAN H S,3KA20
3KA20,Selasa,Bahasa Indonesia 2,5/6,E136,TOTO SUGIHARTO/TRI BUDIARTA,3KA20
3KA20,Selasa,Interaksi Manusia & Komputer*/**,8/9/10,E227,DARMASTUTI,3KA20
3KA20,Rabu,Sistem Keamanan Tek. Informasi *,1/2/3,E225,ASTIE DARMAYANTIE,3KA20
3KA20,Rabu,Statistika **,4/5/6,E225,IMAN MURTONO SOENHADJI,3KA20
3KA20,Kamis,Pemrograman Berbasis Web **,1/2,E326,DINA SUCI DARWATI,3KA20
3KA20,Kamis,Graf & Analisis Algoritma,3/4/5,E326,IVAN MAURITS,3KA20
3KA20,Kamis,Konsep Data Mining,7/8,E346,MUFID NILMADA,3KA20
3KA21,Senin,Statistika **,1/2/3,B221,EUPHRASIA SUSY SUHENDRA,3KA21
3KA21,Senin,Bahasa Indonesia 2,4/5,B221,SRI SULISTIYONINGSIH,3KA21
3KA21,Senin,Interaksi Manusia & Komputer*/**,8/9/10,B221,MATIAS KRISTIAN KELVIANDY,3KA21
3KA21,Rabu,Metode Penelitian,1/2,A702,SITI AISYAH,3KA21
3KA21,Rabu,Graf & Analisis Algoritma,4/5/6,A702,AHMAD APANDI,3KA21
3KA21,Rabu,Sistem Keamanan Tek. Informasi *,7/8/9,A702,SYALIS IBNIH MELATI ISTINI,3KA21
3KA21,Sabtu,Jejaring Sosial&Konten Kreatif,1/2,B312,NOOR VIKA HIZVIANI,3KA21
3KA21,Sabtu,Konsep Data Mining,3/4,B312,JUNAEDI,3KA21
3KA21,Sabtu,Pemrograman Berbasis Web **,5/6,B312,DINI TRIASANTI,3KA21
3KA22,Senin,Interaksi Manusia & Komputer*/**,1/2/3,B211,MATIAS KRISTIAN KELVIANDY,3KA22
3KA22,Senin,Statistika **,5/6/7,B211,EUPHRASIA SUSY SUHENDRA,3KA22
3KA22,Senin,Bahasa Indonesia 2,8/9,B211,SRI SULISTIYONINGSIH,3KA22
3KA22,Rabu,Sistem Keamanan Tek. Informasi *,1/2/3,A801,SYALIS IBNIH MELATI ISTINI,3KA22
3KA22,Rabu,Metode Penelitian,4/5,A801,SITI AISYAH,3KA22
3KA22,Rabu,Graf & Analisis Algoritma,8/9/10,A801,AHMAD APANDI,3KA22
3KA22,Sabtu,Pemrograman Berbasis Web **,3/4,B221,DINI TRIASANTI,3KA22
3KA22,Sabtu,Jejaring Sosial&Konten Kreatif,6/7,B221,NOOR VIKA HIZVIANI,3KA22
3KA22,Sabtu,Konsep Data Mining,8/9,B221,JUNAEDI,3KA22
3KA23,Senin,Bahasa Indonesia 2,2/3,B312,SRI SULISTIYONINGSIH,3KA23
3KA23,Senin,Interaksi Manusia & Komputer*/**,4/5/6,B312,MATIAS KRISTIAN KELVIANDY,3KA23
3KA23,Rabu,Graf & Analisis Algoritma,1/2/3,A602,AHMAD APANDI,3KA23
3KA23,Rabu,Sistem Keamanan Tek. Informasi *,4/5/6,A602,SYALIS IBNIH MELATI ISTINI,3KA23
3KA23,Rabu,Metode Penelitian,9/10,A601,SITI AISYAH,3KA23
3KA23,Sabtu,Pemrograman Berbasis Web **,1/2,B222,DINI TRIASANTI,3KA23
3KA23,Sabtu,Jejaring Sosial&Konten Kreatif,3/4,B222,NOOR VIKA HIZVIANI,3KA23
3KA23,Sabtu,Konsep Data Mining,6/7,C014,JUNAEDI,3KA23
3KA23,Sabtu,Statistika **,8/9/10,C014,TUBAGUS KIKI KAWAKIBI AZMI,3KA23
3KA24,Senin,Interaksi Manusia & Komputer*/**,12/13/14,D631,TRI AGUS RIYADI,3KA24
3KA24,Selasa,Jejaring Sosial&Konten Kreatif,12/13,D632,ERVAN CATUR ANGKOSO,3KA24
3KA24,Rabu,Sistem Keamanan Tek. Informasi *,12/13/14,D633,DONIE MARGAVIANTO NURROKHMAN,3KA24
3KA24,Kamis,Konsep Data Mining,11/12,D632,IHSAN JATNIKA,3KA24
3KA24,Kamis,Pemrograman Berbasis Web **,13/14,D632,ERVAN CATUR ANGKOSO,3KA24
3KA24,Jum'at,Statistika **,11/12/13,D636,ENDAH TRI ESTI HANDAYANI,3KA24
3KA24,Sabtu,Bahasa Indonesia 2,3/4,E444,MARGARETHA SUMARWATI,3KA24
3KA24,Sabtu,Metode Penelitian,5/6,E444,RIRIN YULIYANTI,3KA24
3KA24,Sabtu,Graf & Analisis Algoritma,8/9/10,E444,WINARTI DWI ASTUTI,3KA24
3KA25,Rabu,Bahasa Indonesia 2,3/4,J1415,SEPITRI DARUYANI,3KA25
3KA25,Rabu,Konsep Data Mining,5/6,J1415,MUHAMMAD ACHSAN ISA AL ANSHORI,3KA25
3KA25,Rabu,Statistika **,8/9/10,J149,INTI MULYO ARTI,3KA25
3KA25,Kamis,Metode Penelitian,1/2,J60908,MURSID DJAJADI,3KA25
3KA25,Kamis,Interaksi Manusia & Komputer*/**,3/4/5,J60908,IRWAN BASTIAN,3KA25
3KA25,Kamis,Pemrograman Berbasis Web **,7/8,J60908,KHALIDAH,3KA25
3KA25,Sabtu,Jejaring Sosial&Konten Kreatif,1/2,J1115B,ANNEKE ANASSIA PUTRI SISWANDI,3KA25
3KA25,Sabtu,Graf & Analisis Algoritma,4/5/6,J1613,FEBIANTO ARIFIEN,3KA25
3KA25,Sabtu,Sistem Keamanan Tek. Informasi *,7/8/9,J1613,ISNI OKTRIA,3KA25
3KA26,Senin,Metode Penelitian,3/4,J1210,NURUL KHOTIMAH,3KA26
3KA26,Senin,Statistika **,6/7/8,J1219,SANDY SURYADY,3KA26
3KA26,Rabu,Interaksi Manusia & Komputer*/**,2/3/4,J1114,IRWAN BASTIAN,3KA26
3KA26,Rabu,Jejaring Sosial&Konten Kreatif,6/7,J1317,INDRA ADI PERMANA,3KA26
3KA26,Rabu,Konsep Data Mining,8/9,J1317,MUHAMMAD ACHSAN ISA AL ANSHORI,3KA26
3KA26,Kamis,Pemrograman Berbasis Web **,3/4,J60906,KHALIDAH,3KA26
3KA26,Kamis,Bahasa Indonesia 2,6/7,J60906,MELANIAWATI,3KA26
3KA26,Sabtu,Graf & Analisis Algoritma,1/2/3,J137,FEBIANTO ARIFIEN,3KA26
3KA26,Sabtu,Sistem Keamanan Tek. Informasi *,4/5/6,J137,NOVIYANTO,3KA26
3KA27,Selasa,Konsep Data Mining,1/2,J1424,MUHAMMAD ACHSAN ISA AL ANSHORI,3KA27
3KA27,Selasa,Jejaring Sosial&Konten Kreatif,3/4,J1424,ANNEKE ANASSIA PUTRI SISWANDI,3KA27
3KA27,Selasa,Statistika **,6/7/8,J1115B,ACHMAD YOZAR PERKASA,3KA27
3KA27,Kamis,Pemrograman Berbasis Web **,1/2,J60905,KHALIDAH,3KA27
3KA27,Kamis,Metode Penelitian,3/4,J60905,MURSID DJAJADI,3KA27
3KA27,Kamis,Interaksi Manusia & Komputer*/**,6/7/8,J60905,IRWAN BASTIAN,3KA27
3KA27,Kamis,Bahasa Indonesia 2,9/10,J60905,MELANIAWATI,3KA27
3KA27,Sabtu,Sistem Keamanan Tek. Informasi *,1/2/3,J164,NOVIYANTO,3KA27
3KA27,Sabtu,Graf & Analisis Algoritma,5/6/7,J123,YESSY ASRI,3KA27
3KA28,Selasa,Interaksi Manusia & Komputer*/**,1/2/3,J1519,HADYAN MARDHI FADLILLAH,3KA28
3KA28,Selasa,Jejaring Sosial&Konten Kreatif,4/5,J1519,INDRA ADI PERMANA,3KA28
3KA28,Selasa,Metode Penelitian,7/8,J1519,ARDIPRAWIRO,3KA28
3KA28,Rabu,Pemrograman Berbasis Web **,1/2,J1211,KHAIRUNNISA RAIHANI,3KA28
3KA28,Rabu,Konsep Data Mining,3/4,J1211,MUHAMMAD ACHSAN ISA AL ANSHORI,3KA28
3KA28,Rabu,Statistika **,5/6/7,J1211,ANITA WASUTININGSIH,3KA28
3KA28,Rabu,Bahasa Indonesia 2,9/10,J1210,MELANIAWATI,3KA28
3KA28,Sabtu,Sistem Keamanan Tek. Informasi *,3/4/5,J1317,ISNI OKTRIA,3KA28
3KA28,Sabtu,Graf & Analisis Algoritma,8/9/10,J149,YESSY ASRI,3KA28
3KA29,Selasa,Jejaring Sosial&Konten Kreatif,1/2,J1416B,ANNEKE ANASSIA PUTRI SISWANDI,3KA29
3KA29,Selasa,Konsep Data Mining,3/4,J1416B,MUHAMMAD ACHSAN ISA AL ANSHORI,3KA29
3KA29,Selasa,Pemrograman Berbasis Web **,5/6,J1416B,KHAIRUNNISA RAIHANI,3KA29
3KA29,Selasa,Metode Penelitian,9/10,J1416B,ARDIPRAWIRO,3KA29
3KA29,Rabu,Interaksi Manusia & Komputer*/**,1/2/3,J137,MARLIZA GANEFI GUMAY,3KA29
3KA29,Rabu,Statistika **,4/5/6,J137,INTI MULYO ARTI,3KA29
3KA29,Rabu,Bahasa Indonesia 2,9/10,J137,SEPITRI DARUYANI,3KA29
3KA29,Jum'at,Sistem Keamanan Tek. Informasi *,2/3/4,J1516B,FITRIANINGSIH,3KA29
3KA29,Sabtu,Graf & Analisis Algoritma,8/9/10,J139,ADHITIO SATYO BAYANGKARI KARNO,3KA29
3KA30,Rabu,Jejaring Sosial&Konten Kreatif,1/2,J1415,INDRA ADI PERMANA,3KA30
3KA30,Rabu,Pemrograman Berbasis Web **,4/5,J1115A,KHAIRUNNISA RAIHANI,3KA30
3KA30,Rabu,Interaksi Manusia & Komputer*/**,6/7/8,J1115A,IRWAN BASTIAN,3KA30
3KA30,Kamis,Metode Penelitian,1/2,J1416A,NURUL KHOTIMAH,3KA30
3KA30,Kamis,Bahasa Indonesia 2,3/4,J1416A,SRI SULISTIYONINGSIH,3KA30
3KA30,Jum'at,Sistem Keamanan Tek. Informasi *,7/8/9,J155,FITRIANINGSIH,3KA30
3KA30,Sabtu,Graf & Analisis Algoritma,1/2/3,J1114,ADHITIO SATYO BAYANGKARI KARNO,3KA30
3KA30,Sabtu,Statistika **,4/5/6,J1114,SIGIT MUHAMAD YAKUB,3KA30
3KA30,Sabtu,Konsep Data Mining,8/9,J1114,MUHAMMAD ACHSAN ISA AL ANSHORI,3KA30
3KA31,Selasa,Bahasa Indonesia 2,1/2,K294,SRI HAYUNINGSIH,3KA31
3KA31,Selasa,Jejaring Sosial&Konten Kreatif,3/4,K247,DIANA IKASARI,3KA31
3KA31,Selasa,Graf & Analisis Algoritma,5/6/7,K275,RICKY AGUS TJIPTANATA,3KA31
3KA31,Rabu,Pemrograman Berbasis Web **,4/5,K256,IVAN MAURITS,3KA31
3KA31,Kamis,Interaksi Manusia & Komputer*/**,1/2/3,K161,META MEYSAWATI,3KA31
3KA31,Kamis,Metode Penelitian,4/5,K282,ELFITRIN SYAHRUL,3KA31
3KA31,Jum'at,Konsep Data Mining,1/2,K274,M RIDWAN DWI SEPTIAN,3KA31
3KA31,Jum'at,Sistem Keamanan Tek. Informasi *,6/7/8,K156,ANA KURNIAWATI,3KA31
3KA31,Sabtu,Statistika **,4/5/6,K133,ADI KUSWANTO,3KA31
3KA32,Senin,Interaksi Manusia & Komputer*/**,1/2/3,K264,TAUFIK HIDAYAT,3KA32
3KA32,Senin,Konsep Data Mining,4/5,K274,DINA ANGGRAINI,3KA32
3KA32,Selasa,Graf & Analisis Algoritma,1/2/3,K246,DESTI RIMINARSIH,3KA32
3KA32,Selasa,Bahasa Indonesia 2,4/5,K294,SRI HAYUNINGSIH,3KA32
3KA32,Kamis,Metode Penelitian,2/3,K133,ADITYA RIAN RAMADHAN,3KA32
3KA32,Kamis,Pemrograman Berbasis Web **,4/5,K283,TRISTYANTI YUSNITASARI,3KA32
3KA32,Jum'at,Sistem Keamanan Tek. Informasi *,2/3/4,K156,ANA KURNIAWATI,3KA32
3KA32,Sabtu,Statistika **,1/2/3,K133,ADI KUSWANTO,3KA32
3KA32,Sabtu,Jejaring Sosial&Konten Kreatif,4/5,K272,MUHAMAD TAUFAN,3KA32
3KA33,Senin,Konsep Data Mining,2/3,K274,DINA ANGGRAINI,3KA33
3KA33,Senin,Statistika **,4/5/6,K292,DESI PUJIATI,3KA33
3KA33,Kamis,Metode Penelitian,1/2,K282,ELFITRIN SYAHRUL,3KA33
3KA33,Kamis,Bahasa Indonesia 2,3/4,K252,TRI BUDIARTA,3KA33
3KA33,Kamis,Jejaring Sosial&Konten Kreatif,6/7,K283,TRISTYANTI YUSNITASARI,3KA33
3KA33,Jum'at,Interaksi Manusia & Komputer*/**,2/3/4,K244,ATIT PERTIWI,3KA33
3KA33,Jum'at,Sistem Keamanan Tek. Informasi *,6/7/8,K261,ASTIE DARMAYANTIE,3KA33
3KA33,Sabtu,Graf & Analisis Algoritma,1/2/3,K255,MIFTAH ANDRIANSYAH,3KA33
3KA33,Sabtu,Pemrograman Berbasis Web **,4/5,K252,EGA HEGARINI,3KA33
3KA34,Senin,Statistika **,1/2/3,K292,DESI PUJIATI,3KA34
3KA34,Senin,Interaksi Manusia & Komputer*/**,4/5/6,K264,TAUFIK HIDAYAT,3KA34
3KA34,Selasa,Jejaring Sosial&Konten Kreatif,3/4,K275,RICKY AGUS TJIPTANATA,3KA34
3KA34,Rabu,Graf & Analisis Algoritma,1/2/3,K256,IVAN MAURITS,3KA34
3KA34,Kamis,Bahasa Indonesia 2,1/2,K252,TRI BUDIARTA,3KA34
3KA34,Kamis,Metode Penelitian,4/5,K133,ADITYA RIAN RAMADHAN,3KA34
3KA34,Jum'at,Sistem Keamanan Tek. Informasi *,2/3/4,K261,ASTIE DARMAYANTIE,3KA34
3KA34,Jum'at,Konsep Data Mining,6/7,K265,DETTY PURNAMASARI,3KA34
3KA34,Sabtu,Pemrograman Berbasis Web **,2/3,K252,EGA HEGARINI,3KA34
3KA35,Senin,Graf & Analisis Algoritma,5/6/7,L226,YULIA CHALRI,3KA35
3KA35,Selasa,Konsep Data Mining,2/3,L245,NOVRINA,3KA35
3KA35,Selasa,Metode Penelitian,4/5,L245,IDA ASTUTI,3KA35
3KA35,Selasa,Bahasa Indonesia 2,6/7,L224,SHINTA TEVININGRUM,3KA35
3KA35,Rabu,Interaksi Manusia & Komputer*/**,2/3/4,L246,CAHYAWATI DIAH KUSUMARINI,3KA35
3KA35,Rabu,Jejaring Sosial&Konten Kreatif,5/6,L222,AVIARINI INDRATI,3KA35
3KA35,Kamis,Sistem Keamanan Tek. Informasi *,2/3/4,L222,DHIAN SWEETANIA,3KA35
3KA35,Kamis,Pemrograman Berbasis Web **,5/6,L226,SETIA WIRAWAN,3KA35
3KA35,Jum'at,Statistika **,2/3/4,L234,ICHSANI MURSIDAH,3KA35
3KA36,Senin,Metode Penelitian,3/4/5,N1144,BUDI SETIAWAN,3KA36
3KA36,Senin,Sistem Keamanan Teknologi Informasi*,7/8/9,N1135,I KOMANG SUGIARTHA,3KA36
3KA36,Selasa,Jejaring Sosial & Konten Kreatif,4/5,N1135,MUHAMAD DANIEL RIVAI,3KA36
3KA36,Selasa,Graf & Analisis Algoritma,6/7/8,N1135,SETIA WIRAWAN,3KA36
3KA36,Rabu,Statistika**,4/5/6,N1135,MUFID NILMADA,3KA36
3KA36,Ju'mat,Interaksi Manusia dan Komputer */**,2/3/4,N1135,WIDIASTUTI,3KA36
3KA36,Ju'mat,Konsep Data Mining,8/9,N1135,IRFAN HUMAINI,3KA36
3KA36,Sabtu,Bahasa Indonesia 2,4/5,N1135,MARIA,3KA36
3KA36,Sabtu,Pemrograman Berbasis Web**,6/7,N1135,DYAH ANGGRAINI,3KA36
4KA01,Senin,Sistem Penunjang Keputusan *,6/7,E342,IRNA FITRIYAH,4KA01
4KA01,Senin,Testing dan Implementasi Sistem *,8/9/10,E342,RIFIANA ARIEF,4KA01
4KA01,Rabu,Analisis Kinerja Sistem,1/2/3,E228,HASMA RASJID,4KA01
4KA01,Rabu,Sistem Terdistribusi,4/5,E228,LILIS SETYOWATI,4KA01
4KA01,Rabu,Pengelolaan Proyek Sis.Informasi*,7/8/9/10,E327,HUSTINAWATY,4KA01
4KA01,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA01
4KA01,Jum'at,Bahasa Inggris Bisnis 1,3/4,E121,MIA PURWATI,4KA01
4KA01,Jum'at,Sistem Multimedia,7/8,E413,AGRY ALFIAH,4KA01
4KA01,Sabtu,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4KA01
4KA02,Senin,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,E517,HUSTINAWATY,4KA02
4KA02,Senin,Sistem Multimedia,6/7,E235,ANNA FITRIA,4KA02
4KA02,Rabu,Sistem Terdistribusi,1/2,E241,LILIS SETYOWATI,4KA02
4KA02,Rabu,Analisis Kinerja Sistem,5/6/7,E432,SUHARTINI,4KA02
4KA02,Rabu,Testing dan Implementasi Sistem *,8/9/10,E432,M RIDWAN DWI SEPTIAN,4KA02
4KA02,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA02
4KA02,Jum'at,Sistem Penunjang Keputusan *,7/8,E238,TRISTYANTI YUSNITASARI,4KA02
4KA02,Jum'at,Bahasa Inggris Bisnis 1,9/10,E238,VIDIA PUSPITA,4KA02
4KA02,Sabtu,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4KA02
4KA03,Senin,Sistem Terdistribusi,4/5,E324,MIFTAHUL JANNAH,4KA03
4KA03,Senin,Pengelolaan Proyek Sis.Informasi*,7/8/9/10,E323,SETIA WIRAWAN,4KA03
4KA03,Selasa,Sistem Penunjang Keputusan *,3/4,E425,DEWI ANGGRAINI PUSPA HAPSARI,4KA03
4KA03,Selasa,Analisis Kinerja Sistem,6/7/8,E516,FARIDA,4KA03
4KA03,Rabu,Sistem Multimedia,2/3,G138,ROBBY CANDRA,4KA03
4KA03,Rabu,Bahasa Inggris Bisnis 1,4/5,G138,STELLA AMANDA,4KA03
4KA03,Rabu,Testing dan Implementasi Sistem *,8/9/10,G432,RIFIANA ARIEF,4KA03
4KA03,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA03
4KA03,Sabtu,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4KA03
4KA04,Senin,Analisis Kinerja Sistem,4/5/6,E128,SUHARTINI,4KA04
4KA04,Selasa,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,E513,SETIA WIRAWAN,4KA04
4KA04,Selasa,Sistem Multimedia,5/6,E232,RIZA ADRIANTI SUPONO,4KA04
4KA04,Selasa,Sistem Terdistribusi,8/9,E526,META MEYSAWATI,4KA04
4KA04,Rabu,Sistem Penunjang Keputusan *,3/4,E448,TRISTYANTI YUSNITASARI,4KA04
4KA04,Rabu,Testing dan Implementasi Sistem *,5/6/7,E448,RIFIANA ARIEF,4KA04
4KA04,Rabu,Bahasa Inggris Bisnis 1,9/10,E433,CHINTIA HANDAYANI,4KA04
4KA04,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA04
4KA04,Sabtu,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4KA04
4KA05,Senin,Bahasa Inggris Bisnis 1,4/5,E124,MOHAMMAD YUSUF,4KA05
4KA05,Senin,Sistem Terdistribusi,6/7,E124,MIFTAHUL JANNAH,4KA05
4KA05,Senin,Sistem Multimedia,8/9,E124,ANNA FITRIA,4KA05
4KA05,Selasa,Pengelolaan Proyek Sis.Informasi*,6/7/8/9,E228,PRIHANDOKO,4KA05
4KA05,Rabu,Sistem Penunjang Keputusan *,1/2,F8441,ERNIANTI HASIBUAN,4KA05
4KA05,Rabu,Testing dan Implementasi Sistem *,4/5/6,F8466,RONGGO PERMONO,4KA05
4KA05,Rabu,Analisis Kinerja Sistem,8/9/10,F8466,NURUL ADHAYANTI,4KA05
4KA05,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA05
4KA05,Sabtu,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA05
4KA06,Senin,Sistem Terdistribusi,1/2/3,E129,SUHARTINI,4KA06
4KA06,Senin,Testing dan Implementasi Sistem *,4/5/6,E129,RIFIANA ARIEF,4KA06
4KA06,Selasa,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,G238,MOHAMMAD IQBAL,4KA06
4KA06,Selasa,Bahasa Inggris Bisnis 1,5/6,G238,DYAH AMBAR WURYANDARI,4KA06
4KA06,Rabu,Analisis Kinerja Sistem,1/2/3,E322,SUHARTINI,4KA06
4KA06,Rabu,Sistem Penunjang Keputusan *,5/6,E244,TRISTYANTI YUSNITASARI,4KA06
4KA06,Rabu,Sistem Multimedia,8/9,E231,ANNA FITRIA,4KA06
4KA06,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA06
4KA06,Sabtu,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA06
4KA07,Selasa,Sistem Penunjang Keputusan *,3/4,G424,PRIHANDOKO,4KA07
4KA07,Selasa,Bahasa Inggris Bisnis 1,7/8,G432,SUYUDI,4KA07
4KA07,Rabu,Analisis Kinerja Sistem,2/3/4,F8467,NURUL ADHAYANTI,4KA07
4KA07,Rabu,Sistem Multimedia,6/7,F8467,DINA SUCI DARWATI,4KA07
4KA07,Rabu,Testing dan Implementasi Sistem *,8/9/10,F8467,RONGGO PERMONO,4KA07
4KA07,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA07
4KA07,Jum'at,Sistem Terdistribusi,3/4,G116,MIFTAHUL JANNAH,4KA07
4KA07,Jum'at,Pengelolaan Proyek Sis.Informasi*,7/8/9/10,G224,MOHAMMAD IQBAL,4KA07
4KA07,Sabtu,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA07
4KA08,Selasa,Bahasa Inggris Bisnis 1,1/2,F8482,DIAN NURUDIN,4KA08
4KA08,Selasa,Testing dan Implementasi Sistem *,3/4/5,F8482,RUDDY J SUHATRIL,4KA08
4KA08,Rabu,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,F8442,DEWI AGUSHINTA RAHAYU,4KA08
4KA08,Rabu,Sistem Penunjang Keputusan *,6/7,F8465,ERNIANTI HASIBUAN,4KA08
4KA08,Rabu,Sistem Multimedia,8/9,F8465,DINA SUCI DARWATI,4KA08
4KA08,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA08
4KA08,Jum'at,Sistem Terdistribusi,3/4,F8465,MUHAMMAD JUERGEN DONGGALA PUTRA THALIB,4KA08
4KA08,Jum'at,Analisis Kinerja Sistem,7/8/9,F8465,RAMA DIAN SYAH,4KA08
4KA08,Sabtu,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4KA08
4KA09,Selasa,Bahasa Inggris Bisnis 1,3/4,F8471,DIAN NURUDIN,4KA09
4KA09,Selasa,Testing dan Implementasi Sistem *,7/8/9,F8452,RUDDY J SUHATRIL,4KA09
4KA09,Rabu,Sistem Multimedia,1/2,F8446,DINA SUCI DARWATI,4KA09
4KA09,Rabu,Sistem Penunjang Keputusan *,4/5,F8471,ERNIANTI HASIBUAN,4KA09
4KA09,Rabu,Pengelolaan Proyek Sis.Informasi*,6/7/8/9,F8471,DEWI AGUSHINTA RAHAYU,4KA09
4KA09,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA09
4KA09,Jum'at,Analisis Kinerja Sistem,2/3/4,G217,HASMA RASJID,4KA09
4KA09,Jum'at,Sistem Terdistribusi,7/8,G135,MUHAMMAD JUERGEN DONGGALA PUTRA THALIB,4KA09
4KA09,Sabtu,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4KA09
4KA10,Selasa,Sistem Multimedia,1/2,E247,ROBBY CANDRA,4KA10
4KA10,Selasa,Testing dan Implementasi Sistem *,3/4/5,E247,SHAFIRA ADRIZAYANI,4KA10
4KA10,Selasa,Pengelolaan Proyek Sis.Informasi*,7/8/9/10,E338,WIDYA SILFIANTI,4KA10
4KA10,Rabu,Analisis Kinerja Sistem,5/6/7,G315,FARIDA,4KA10
4KA10,Rabu,Sistem Penunjang Keputusan *,8/9,G315,TRISTYANTI YUSNITASARI,4KA10
4KA10,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA10
4KA10,Jum'at,Praktikum Robotika Cerdas,1/2,,TIM DOSEN,4KA10
4KA10,Sabtu,Bahasa Inggris Bisnis 1,5/6,G133,SEPTIAJI FAJAR RIANTO,4KA10
4KA10,Sabtu,Sistem Terdistribusi,7/8,G133,SAYIDATI KARIMA,4KA10
4KA11,Selasa,Sistem Penunjang Keputusan *,1/2,G421,PRIHANDOKO,4KA11
4KA11,Selasa,Pengelolaan Proyek Sis.Informasi*,3/4/5/6,G421,WIDYA SILFIANTI,4KA11
4KA11,Rabu,Testing dan Implementasi Sistem *,1/2/3,G123,M RIDWAN DWI SEPTIAN,4KA11
4KA11,Rabu,Sistem Multimedia,4/5,G123,ROBBY CANDRA,4KA11
4KA11,Rabu,Analisis Kinerja Sistem,8/9/10,G134,FARIDA,4KA11
4KA11,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA11
4KA11,Jum'at,Praktikum Robotika Cerdas,1/2,,TIM DOSEN,4KA11
4KA11,Sabtu,Sistem Terdistribusi,5/6,E345,SAYIDATI KARIMA,4KA11
4KA11,Sabtu,Bahasa Inggris Bisnis 1,7/8,E345,IRSYA INDIWARA,4KA11
4KA12,Selasa,Analisis Kinerja Sistem,2/3/4,G425,FARIDA,4KA12
4KA12,Selasa,Sistem Penunjang Keputusan *,6/7,G453,DEWI ANGGRAINI PUSPA HAPSARI,4KA12
4KA12,Rabu,Testing dan Implementasi Sistem *,5/6/7,E516,M RIDWAN DWI SEPTIAN,4KA12
4KA12,Rabu,Sistem Terdistribusi,8/9,E516,REVIDA IRIANA NAPITUPULU,4KA12
4KA12,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA12
4KA12,Jum'at,Bahasa Inggris Bisnis 1,1/2,E444,MARIA,4KA12
4KA12,Jum'at,Sistem Multimedia,3/4,E324,AGRY ALFIAH,4KA12
4KA12,Jum'at,Pengelolaan Proyek Sis.Informasi*,7/8/9/10,E447,LULU CHAERANI MUNGGARAN,4KA12
4KA12,Sabtu,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4KA12
4KA13,Senin,Bahasa Inggris Bisnis 1,1/2,E133,ATIKA LISTYA,4KA13
4KA13,Senin,Testing dan Implementasi Sistem *,3/4/5,E133,HARYANTO,4KA13
4KA13,Selasa,Sistem Terdistribusi,1/2,E129,LILIS SETYOWATI,4KA13
4KA13,Selasa,Sistem Penunjang Keputusan *,4/5,E324,TRISTYANTI YUSNITASARI,4KA13
4KA13,Selasa,Pengelolaan Proyek Sis.Informasi*,7/8/9/10,E426,KEMAL ADE SEKARWATI,4KA13
4KA13,Rabu,Analisis Kinerja Sistem,2/3/4,E232,RAMA DIAN SYAH,4KA13
4KA13,Rabu,Sistem Multimedia,7/8,E232,ROBBY CANDRA,4KA13
4KA13,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA13
4KA13,Sabtu,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4KA13
4KA14,Selasa,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,E524,KEMAL ADE SEKARWATI,4KA14
4KA14,Selasa,Sistem Penunjang Keputusan *,6/7,E342,TRISTYANTI YUSNITASARI,4KA14
4KA14,Selasa,Bahasa Inggris Bisnis 1,8/9,E342,HANA FAUZIAH,4KA14
4KA14,Rabu,Sistem Multimedia,3/4,F8481,DINA SUCI DARWATI,4KA14
4KA14,Rabu,Sistem Terdistribusi,7/8,F8456,LILIS SETYOWATI,4KA14
4KA14,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA14
4KA14,Jum'at,Testing dan Implementasi Sistem *,2/3/4,G248,ROBBY KURNIAWAN HARAHAP,4KA14
4KA14,Jum'at,Analisis Kinerja Sistem,7/8/9,G217,HASMA RASJID,4KA14
4KA14,Sabtu,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA14
4KA15,Senin,Sistem Penunjang Keputusan *,3/4,E132,IRNA FITRIYAH,4KA15
4KA15,Senin,Testing dan Implementasi Sistem *,6/7/8,E132,HARYANTO,4KA15
4KA15,Selasa,Sistem Multimedia,3/4,E335,RIZA ADRIANTI SUPONO,4KA15
4KA15,Selasa,Sistem Terdistribusi,5/6,E335,META MEYSAWATI,4KA15
4KA15,Selasa,Bahasa Inggris Bisnis 1,7/8,E335,MARIA,4KA15
4KA15,Rabu,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,E313,SETIA WIRAWAN,4KA15
4KA15,Rabu,Analisis Kinerja Sistem,5/6/7,E313,HASMA RASJID,4KA15
4KA15,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA15
4KA15,Sabtu,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA15
4KA16,Senin,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,E123,KEMAL ADE SEKARWATI,4KA16
4KA16,Senin,Testing dan Implementasi Sistem *,7/8/9,E335,ROBBY KURNIAWAN HARAHAP,4KA16
4KA16,Selasa,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA16
4KA16,Rabu,Sistem Terdistribusi,2/3,E512,REVIDA IRIANA NAPITUPULU,4KA16
4KA16,Rabu,Analisis Kinerja Sistem,5/6/7,E344,RAMA DIAN SYAH,4KA16
4KA16,Rabu,Sistem Penunjang Keputusan *,8/9,E344,DELTA AGUS WARDIANTO,4KA16
4KA16,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA16
4KA16,Jum'at,Bahasa Inggris Bisnis 1,7/8,E446,MARIA,4KA16
4KA16,Jum'at,Sistem Multimedia,9/10,E413,AGRY ALFIAH,4KA16
4KA17,Senin,Pengelolaan Proyek Sis.Informasi*,2/3/4/5,E512,WIDYA SILFIANTI,4KA17
4KA17,Selasa,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA17
4KA17,Rabu,Analisis Kinerja Sistem,1/2/3,E122,RADEN SUPRIYANTO,4KA17
4KA17,Rabu,Sistem Penunjang Keputusan *,6/7,E328,DELTA AGUS WARDIANTO,4KA17
4KA17,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA17
4KA17,Sabtu,Bahasa Inggris Bisnis 1,1/2,G132,ROSE DIANA,4KA17
4KA17,Sabtu,Sistem Multimedia,3/4,G132,HARIYANTO,4KA17
4KA17,Sabtu,Sistem Terdistribusi,5/6,G132,SYAHRIZAL ANDHIKA,4KA17
4KA17,Sabtu,Testing dan Implementasi Sistem *,8/9/10,G132,MARA NUGRAHA,4KA17
4KA18,Senin,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,E136,SIGIT WIDIYANTO,4KA18
4KA18,Senin,Testing dan Implementasi Sistem *,5/6/7,E213,RONGGO PERMONO,4KA18
4KA18,Selasa,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA18
4KA18,Rabu,Analisis Kinerja Sistem,1/2/3,E515,FARID THALIB,4KA18
4KA18,Rabu,Sistem Terdistribusi,4/5,E515,REVIDA IRIANA NAPITUPULU,4KA18
4KA18,Rabu,Sistem Penunjang Keputusan *,7/8,E225,HENDRI DWI PUTRA,4KA18
4KA18,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA18
4KA18,Jum'at,Sistem Multimedia,1/2,E313,AGRY ALFIAH,4KA18
4KA18,Jum'at,Bahasa Inggris Bisnis 1,3/4,E242,VIDIA PUSPITA,4KA18
4KA19,Senin,Sistem Multimedia,3/4,E515,AHYAD/ANNA FITRIA,4KA19
4KA19,Senin,Pengelolaan Proyek Sis.Informasi*,5/6/7/8,E515,HUSTINAWATY,4KA19
4KA19,Selasa,Bahasa Inggris Bisnis 1,1/2,G149,SUYUDI,4KA19
4KA19,Selasa,Sistem Terdistribusi,3/4,G149,META MEYSAWATI,4KA19
4KA19,Selasa,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4KA19
4KA19,Rabu,Testing dan Implementasi Sistem *,1/2/3,E233,RONGGO PERMONO,4KA19
4KA19,Rabu,Analisis Kinerja Sistem,5/6/7,E425,FARID THALIB,4KA19
4KA19,Rabu,Sistem Penunjang Keputusan *,9/10,E333,HENDRI DWI PUTRA,4KA19
4KA19,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA19
4KA20,Senin,Sistem Penunjang Keputusan *,1/2,B222,DELTA AGUS WARDIANTO,4KA20
4KA20,Senin,Pengelolaan Proyek Sis.Informasi*,6/7/8/9,B222,LULU CHAERANI MUNGGARAN,4KA20
4KA20,Selasa,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4KA20
4KA20,Rabu,Testing dan Implementasi Sistem *,1/2/3,A101,SHAFIRA ADRIZAYANI,4KA20
4KA20,Rabu,Analisis Kinerja Sistem,4/5/6,A101,ITA RUSMALA DEWI,4KA20
4KA20,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA20
4KA20,Sabtu,Bahasa Inggris Bisnis 1,3/4,C007,WIJANARKO AGUS WIBOWO,4KA20
4KA20,Sabtu,Sistem Multimedia,7/8,C007,PUJI ZULAIKASARI,4KA20
4KA20,Sabtu,Sistem Terdistribusi,9/10,C007,HERY HERAWAN,4KA20
4KA21,Senin,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,B313,LULU CHAERANI MUNGGARAN,4KA21
4KA21,Senin,Sistem Penunjang Keputusan *,6/7,B313,DELTA AGUS WARDIANTO,4KA21
4KA21,Selasa,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4KA21
4KA21,Rabu,Analisis Kinerja Sistem,1/2/3,A601,ITA RUSMALA DEWI,4KA21
4KA21,Rabu,Testing dan Implementasi Sistem *,4/5/6,A601,SHAFIRA ADRIZAYANI,4KA21
4KA21,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA21
4KA21,Sabtu,Sistem Terdistribusi,3/4,B211,HERY HERAWAN,4KA21
4KA21,Sabtu,Bahasa Inggris Bisnis 1,5/6,B211,WIJANARKO AGUS WIBOWO,4KA21
4KA21,Sabtu,Sistem Multimedia,9/10,B211,PUJI ZULAIKASARI,4KA21
4KA22,Senin,Sistem Penunjang Keputusan *,12/13/14,D632,ERVAN CATUR ANGKOSO,4KA22
4KA22,Rabu,Pengelolaan Proyek Sis.Informasi*,11/12,D637,PRIHANDOKO,4KA22
4KA22,Rabu,Pengelolaan Proyek Sis.Informasi*,13/14,D637,PRIHANDOKO,4KA22
4KA22,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA22
4KA22,Jum'at,Analisis Kinerja Sistem,12/13/14,D634,TRIONO SETIAJI,4KA22
4KA22,Sabtu,Bahasa Inggris Bisnis 1,1/2,G217,SEPTIAJI FAJAR RIANTO,4KA22
4KA22,Sabtu,Praktikum Robotika Cerdas,11/12,,TIM DOSEN,4KA22
4KA22,Sabtu,Testing dan Implementasi Sistem *,4/5/6,G217,MARA NUGRAHA,4KA22
4KA22,Sabtu,Sistem Multimedia,7/8,G217,HARIYANTO,4KA22
4KA22,Sabtu,Sistem Terdistribusi,9/10,G217,SYAHRIZAL ANDHIKA,4KA22
4KA23,Senin,Sistem Penunjang Keputusan *,3/4,J1316A,FAHMI FATHULAH,4KA23
4KA23,Senin,Pengelolaan Proyek Sis.Informasi*,5/6/7/8,J1316A,ANA KURNIAWATI,4KA23
4KA23,Rabu,Testing dan Implementasi Sistem *,3/4/5,J1412,INDAH TRI HANDAYANI,4KA23
4KA23,Rabu,Sistem Multimedia,7/8,J1416A,QOMARIYAH,4KA23
4KA23,Rabu,Sistem Terdistribusi,9/10,J1416A,NUR ALFIYANI,4KA23
4KA23,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA23
4KA23,Jum'at,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4KA23
4KA23,Sabtu,Analisis Kinerja Sistem,4/5/6,J1220,NUR ALFIYANI,4KA23
4KA23,Sabtu,Bahasa Inggris Bisnis 1,7/8,J1220,RR SHINTA FELISIA,4KA23
4KA24,Selasa,Bahasa Inggris Bisnis 1,1/2,J138,DEVI ARYANI,4KA24
4KA24,Selasa,Analisis Kinerja Sistem,4/5/6,J138,WAHYU SUPRIYATIN,4KA24
4KA24,Selasa,Sistem Penunjang Keputusan *,7/8,J138,KHAIRUNNISA RAIHANI,4KA24
4KA24,Rabu,Sistem Multimedia,1/2,J1315B,ERTIE NUR HARTIWATI,4KA24
4KA24,Rabu,Pengelolaan Proyek Sis.Informasi*,5/6/7/8,J144,WIDIASTUTI,4KA24
4KA24,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA24
4KA24,Jum'at,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4KA24
4KA24,Sabtu,Sistem Terdistribusi,4/5,J60904,FIKRI FADDLILLAH,4KA24
4KA24,Sabtu,Testing dan Implementasi Sistem *,6/7/8,J60904,INDRA ADI PERMANA,4KA24
4KA25,Senin,Sistem Penunjang Keputusan *,1/2,J1518,FAHMI FATHULAH,4KA25
4KA25,Senin,Bahasa Inggris Bisnis 1,3/4,J1518,LATIFA NOVIANA,4KA25
4KA25,Selasa,Testing dan Implementasi Sistem *,8/9/10,J1111,ANNEKE ANASSIA PUTRI SISWANDI,4KA25
4KA25,Rabu,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,J147,WIDIASTUTI,4KA25
4KA25,Rabu,Analisis Kinerja Sistem,6/7/8,J154,NUR ALFIYANI,4KA25
4KA25,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA25
4KA25,Jum'at,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4KA25
4KA25,Sabtu,Sistem Multimedia,4/5,J60907,WAHAB SUKORAHARJO,4KA25
4KA25,Sabtu,Sistem Terdistribusi,6/7,J60907,FIKRI FADDLILLAH,4KA25
4KA26,Selasa,Analisis Kinerja Sistem,1/2/3,J133B,WAHYU SUPRIYATIN,4KA26
4KA26,Selasa,Sistem Penunjang Keputusan *,5/6,J133B,FAHMI FATHULAH,4KA26
4KA26,Selasa,Testing dan Implementasi Sistem *,7/8/9,J133B,INDRA ADI PERMANA,4KA26
4KA26,Rabu,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,J1425,ANA KURNIAWATI,4KA26
4KA26,Rabu,Sistem Multimedia,5/6,J1425,QOMARIYAH,4KA26
4KA26,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA26
4KA26,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA26
4KA26,Sabtu,Sistem Terdistribusi,1/2,J154,NUR ALFIYANI,4KA26
4KA26,Sabtu,Bahasa Inggris Bisnis 1,3/4,J127,DYAH KARTIKA WIJAYANTI,4KA26
4KA27,Senin,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,J124,ANA KURNIAWATI,4KA27
4KA27,Selasa,Sistem Penunjang Keputusan *,2/3,J1511,FAHMI FATHULAH,4KA27
4KA27,Selasa,Testing dan Implementasi Sistem *,5/6/7,J1511,ANNEKE ANASSIA PUTRI SISWANDI,4KA27
4KA27,Selasa,Analisis Kinerja Sistem,8/9/10,J1511,WAHYU SUPRIYATIN,4KA27
4KA27,Rabu,Sistem Multimedia,1/2,J1220,QOMARIYAH,4KA27
4KA27,Rabu,Sistem Terdistribusi,3/4,J1220,NUR ALFIYANI,4KA27
4KA27,Rabu,Bahasa Inggris Bisnis 1,6/7,J1310,DEWI WULAN SARI,4KA27
4KA27,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA27
4KA27,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA27
4KA28,Senin,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,J1512,WIDIASTUTI,4KA28
4KA28,Senin,Sistem Multimedia,7/8,J1512,QOMARIYAH,4KA28
4KA28,Selasa,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA28
4KA28,Rabu,Bahasa Inggris Bisnis 1,3/4,J1216B,DEWI WULAN SARI,4KA28
4KA28,Rabu,Sistem Penunjang Keputusan *,6/7,J1412,KHAIRUNNISA RAIHANI,4KA28
4KA28,Rabu,Testing dan Implementasi Sistem *,8/9/10,J1412,INDAH TRI HANDAYANI,4KA28
4KA28,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA28
4KA28,Sabtu,Sistem Terdistribusi,1/2,J60905,FIKRI FADDLILLAH,4KA28
4KA28,Sabtu,Analisis Kinerja Sistem,3/4/5,J60905,WAHYU SUPRIYATIN,4KA28
4KA29,Senin,Testing dan Implementasi Sistem *,1/2/3,K261,DEA ADLINA,4KA29
4KA29,Senin,Bahasa Inggris Bisnis 1,6/7,K161,MARIA.,4KA29
4KA29,Selasa,Sistem Multimedia,1/2,K245,CUT MAISYARAH KARYATI,4KA29
4KA29,Rabu,Pengelolaan Proyek Sistem Informasi *,2/3/4/5,K265,LINTANG YUNIAR BANOWOSARI,4KA29
4KA29,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA29
4KA29,Kamis,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA29
4KA29,Jum'at,Analisis Kinerja Sistem,3/4/5,K282,PURNAWARMAN MUSA,4KA29
4KA29,Sabtu,Sistem Penunjang Keputusan *,2/3,K244,BUDI UTAMI FAHNUN,4KA29
4KA29,Sabtu,Sistem Terdistribusi,4/5,K255,MIFTAH ANDRIANSYAH,4KA29
4KA30,Senin,Sistem Terdistribusi,1/2,K281,RATIH NURDIYANI SARI,4KA30
4KA30,Senin,Testing dan Implementasi Sistem *,4/5/6,K261,DEA ADLINA,4KA30
4KA30,Selasa,Sistem Multimedia,3/4,K245,CUT MAISYARAH KARYATI,4KA30
4KA30,Selasa,Sistem Penunjang Keputusan *,5/6,K258,ROSDIANA,4KA30
4KA30,Rabu,Bahasa Inggris Bisnis 1,1/2,K266,MARIA.,4KA30
4KA30,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA30
4KA30,Kamis,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KA30
4KA30,Jum'at,Pengelolaan Proyek Sistem Informasi *,1/2/3/4,K266,HUSTINAWATY,4KA30
4KA30,Sabtu,Analisis Kinerja Sistem,1/2/3,K294,SUHARTINI,4KA30
4KA31,Senin,Sistem Multimedia,3/4,K246,LINDA HANDAYANI,4KA31
4KA31,Senin,Analisis Kinerja Sistem,5/6/7,K245,LILIS KUSNITAWATI,4KA31
4KA31,Selasa,Sistem Penunjang Keputusan *,3/4,K262,WIWIED WIDIYANINGSIH,4KA31
4KA31,Rabu,Bahasa Inggris Bisnis 1,3/4,K266,MARIA.,4KA31
4KA31,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA31
4KA31,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4KA31
4KA31,Jum'at,Testing dan Implementasi Sistem *,3/4/5,K274,M RIDWAN DWI SEPTIAN,4KA31
4KA31,Sabtu,Pengelolaan Proyek Sistem Informasi *,1/2/3/4,K247,WIDIASTUTI,4KA31
4KA31,Sabtu,Sistem Terdistribusi,5/6,K242,ARY BIMA KURNIAWAN,4KA31
4KA32,Senin,Analisis Kinerja Sistem,2/3/4,L226,YULIA CHALRI,4KA32
4KA32,Selasa,Sistem Terdistribusi,4/5,L246,EMY HARYATMI,4KA32
4KA32,Rabu,Testing dan Implementasi Sistem *,1/2/3,L223,LULU CHAERANI MUNGGARAN,4KA32
4KA32,Rabu,Sistem Multimedia,5/6,L223,DHARMAYANTI,4KA32
4KA32,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KA32
4KA32,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4KA32
4KA32,Jum'at,Pengelolaan Proyek Sis.Informasi*,1/2/3/4,L222,WIDYA SILFIANTI,4KA32
4KA32,Sabtu,Bahasa Inggris Bisnis 1,1/2,L226,AULIA HARIS FIRSTIYANTI,4KA32
4KA32,Sabtu,Sistem Penunjang Keputusan *,4/5,L246,HADYAN MARDHI FADLILLAH,4KA32
1KB01,Senin,Matematika Dasar 1B,1/2,G148,HERIK SUGERU,1KB01
1KB01,Senin,Ilmu Sosial Dasar,3/4,G148,LISTA KUSPRIATNI,1KB01
1KB01,Senin,Algoritma & Pemrograman 1B *,5/6,G148,WITARI ARYUNANI,1KB01
1KB01,Senin,Algoritma & Pemrograman 1A *,9/10,G249,SYAMSI RUHAMA,1KB01
1KB01,Rabu,Kimia Dasar,1/2,D626,ROMDHONI SUSILOATMADJA,1KB01
1KB01,Rabu,Matematika Dasar 1A,5/6,D665,HARJANTO SUTEDJO,1KB01
1KB01,Rabu,Algoritma & Pemrograman 1C *,7/8,D665,FARIDA AMALYA,1KB01
1KB01,Rabu,Bahasa Indonesia,9/10,D665,SANGSANG SANGABAKTI,1KB01
1KB01,Sabtu,Pendidikan Pancasila *,3/4,E134,EDWIN HARLAN,1KB01
1KB01,Sabtu,Fisika Dasar 1,5/6,E134,MUHAMMAD YUSUF NURFANI,1KB01
1KB02,Senin,Algoritma & Pemrograman 1A *,1/2,G422,TRI SULISTYORINI,1KB02
1KB02,Senin,Algoritma & Pemrograman 1B *,3/4,G422,WITARI ARYUNANI,1KB02
1KB02,Senin,Ilmu Sosial Dasar,5/6,G422,LISTA KUSPRIATNI,1KB02
1KB02,Senin,Bahasa Indonesia,8/9,G434,MELANIAWATI,1KB02
1KB02,Rabu,Fisika Dasar 1,1/2,E422,DESY HERTINSYANA,1KB02
1KB02,Rabu,Algoritma & Pemrograman 1C *,4/5,E446,FARIDA AMALYA,1KB02
1KB02,Rabu,Kimia Dasar,6/7,E446,ACHMAD FAHRUROZI,1KB02
1KB02,Sabtu,Matematika Dasar 1A,3/4,E515,MUHAMMAD MOLDYNNIZ MUTIARA,1KB02
1KB02,Sabtu,Matematika Dasar 1B,5/6,E515,MUHAMMAD MOLDYNNIZ MUTIARA,1KB02
1KB02,Sabtu,Pendidikan Pancasila *,7/8,E515,RIDWAN HARLAN,1KB02
1KB03,Senin,Matematika Dasar 1B,1/2,G432,NURICHWAN,1KB03
1KB03,Senin,Algoritma & Pemrograman 1B *,3/4,G432,AMELIA BELINDA SILVIANA,1KB03
1KB03,Senin,Algoritma & Pemrograman 1A *,7/8,G441,TRI SULISTYORINI,1KB03
1KB03,Senin,Ilmu Sosial Dasar,9/10,G441,TRI DAMAYANTI,1KB03
1KB03,Rabu,Kimia Dasar,1/2,D665,ERMAWATI,1KB03
1KB03,Rabu,Matematika Dasar 1A,3/4,D665,HARJANTO SUTEDJO,1KB03
1KB03,Rabu,Algoritma & Pemrograman 1C *,7/8,D612,HADYAN MARDHI FADLILLAH,1KB03
1KB03,Rabu,Bahasa Indonesia,9/10,D612,SITI PUJIANTI,1KB03
1KB03,Sabtu,Fisika Dasar 1,7/8,E121,ICHSAN PURNAMA,1KB03
1KB03,Sabtu,Pendidikan Pancasila *,9/10,E121,RANDY,1KB03
1KB04,Rabu,Bahasa Indonesia,5/6,J1116,SEPITRI DARUYANI,1KB04
1KB04,Rabu,Algoritma & Pemrograman 1B *,7/8,J1116,DINI TRIASANTI,1KB04
1KB04,Kamis,Fisika Dasar 1,1/2,J1318,MARIZA WIJAYANTI,1KB04
1KB04,Kamis,Algoritma & Pemrograman 1C *,3/4,J1318,MITA LAILASARI,1KB04
1KB04,Kamis,Pendidikan Pancasila *,6/7,J1212,MUHAMMAD ABDULLAH S,1KB04
1KB04,Kamis,Matematika Dasar 1B,9/10,J1212,RADEN ANDHIKA PRIHESTIRA HARTADI,1KB04
1KB04,Jum'at,Kimia Dasar,1/2,J1316B,SARASWATI RAMADHANI PRIYONO,1KB04
1KB04,Jum'at,Algoritma & Pemrograman 1A *,3/4,J1316B,BUDI UTAMI FAHNUN,1KB04
1KB04,Jum'at,Ilmu Sosial Dasar,7/8,J1115A,EVA KHADIJAH,1KB04
1KB04,Jum'at,Matematika Dasar 1A,9/10,J1115A,HENNY LESTARI,1KB04
1KB05,Senin,Pendidikan Pancasila *,3/4,K252,NELTJE F KATUUK,1KB05
1KB05,Senin,Algoritma & Pemrograman 1C *,5/6,K151,ALFIE SYAHRI,1KB05
1KB05,Selasa,Matematika Dasar 1B,1/2,K254,HARYONO PUTRO,1KB05
1KB05,Selasa,Algoritma & Pemrograman 1B *,3/4,K156,PURWANTI,1KB05
1KB05,Rabu,Bahasa Indonesia,1/2,K258,ARINI KUSMINTARTI,1KB05
1KB05,Kamis,Matematika Dasar 1A,1/2,K244,RIFKI KOSASIH,1KB05
1KB05,Kamis,Algoritma & Pemrograman 1A *,3/4,K261,RIZA ADRIANTI SUPONO,1KB05
1KB05,Kamis,Kimia Dasar,5/6,K131,ACHMAD FAHRUROZI,1KB05
1KB05,Jum'at,Fisika Dasar 1,1/2,K293,LINGGA HERMANTO,1KB05
1KB05,Jum'at,Ilmu Sosial Dasar,3/4,K292,ESTU LOVITA PEMBAYUN,1KB05
2KB01,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KB01
2KB01,Selasa,Sistem Operasi *,1/2,G345,TOPAN SUKMA SAPUTRA,2KB01
2KB01,Selasa,Elektronika Dasar,4/5/6,G345,ANTONIUS IRIANTO SUKOWATI,2KB01
2KB01,Selasa,Sistem Basis Data,7/8,G122,IRE PUSPA WARDHANI,2KB01
2KB01,Selasa,Fisika Panas & Gelombang *,9/10,G122,LINGGA HERMANTO,2KB01
2KB01,Rabu,Algoritma & Pemrograman 3 **,3/4,E522,SABILA NADHIRAH,2KB01
2KB01,Rabu,Komunikasi Data *,6/7,E231,SINGGIH JATMIKO,2KB01
2KB01,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KB01
2KB01,Sabtu,Matematika Diskrit 1,6/7,G231,EVAN PURNAMA RAMDAN,2KB01
2KB01,Sabtu,Matematika Lanjut 1,8/9/10,G231,DHANY BAHARIAWAN HIDAYAT,2KB01
2KB02,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KB02
2KB02,Selasa,Elektronika Dasar,1/2/3,G142,ANTONIUS IRIANTO SUKOWATI,2KB02
2KB02,Selasa,Sistem Operasi *,4/5,G142,TOPAN SUKMA SAPUTRA,2KB02
2KB02,Selasa,Fisika Panas & Gelombang *,7/8,G112,LINGGA HERMANTO,2KB02
2KB02,Selasa,Sistem Basis Data,9/10,G112,IRE PUSPA WARDHANI,2KB02
2KB02,Rabu,Matematika Diskrit 1,1/2,E341,BONANG WASPADADI LIGAR,2KB02
2KB02,Rabu,Komunikasi Data *,3/4,E341,SINGGIH JATMIKO,2KB02
2KB02,Rabu,Algoritma & Pemrograman 3 **,5/6,E341,SABILA NADHIRAH,2KB02
2KB02,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KB02
2KB02,Jum'at,Matematika Lanjut 1,7/8/9,G444,SITA DEWI,2KB02
2KB03,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KB03
2KB03,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2KB03
2KB03,Rabu,Sistem Operasi *,1/2,J1317,ISNI OKTRIA,2KB03
2KB03,Rabu,Elektronika Dasar,3/4/5,J1317,BAMBANG HARIANTO,2KB03
2KB03,Rabu,Algoritma & Pemrograman 3 **,7/8,J1114,DEWI ANDRYANI,2KB03
2KB03,Rabu,Komunikasi Data *,9/10,J1114,KHAIRUNNISA RAIHANI,2KB03
2KB03,Kamis,Matematika Lanjut 1,2/3/4,J133B,GANENDRA/SRAVA CHRISDES ANTORO,2KB03
2KB03,Kamis,Fisika Panas & Gelombang *,7/8,J133B,MARIZA WIJAYANTI,2KB03
2KB03,Jum'at,Sistem Basis Data,1/2,J124,FARAMITA DWITAMA,2KB03
2KB03,Jum'at,Matematika Diskrit 1,3/4,J124,RADEN ANDHIKA PRIHESTIRA HARTADI,2KB03
2KB04,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2KB04
2KB04,Senin,Sistem Operasi *,5/6,K266,YOGI PERMADI,2KB04
2KB04,Selasa,Elektronika Dasar,1/2/3,K271,JOKO PURNOMO,2KB04
2KB04,Selasa,Matematika Diskrit 1,4/5,K282,NURMA NUGRAHA,2KB04
2KB04,Kamis,Matematika Lanjut 1,5/6/7,K153,AHMAD SABRI,2KB04
2KB04,Jum'at,Komunikasi Data *,1/2,K271,MISSA LAMSANI,2KB04
2KB04,Jum'at,Fisika Panas & Gelombang *,3/4,K293,LINGGA HERMANTO,2KB04
2KB04,Jum'at,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2KB04
2KB04,Sabtu,Sistem Basis Data,1/2,K281,MURNIYATI,2KB04
2KB04,Sabtu,Algoritma & Pemrograman 3 **,3/4,K242,ARY BIMA KURNIAWAN,2KB04
2KB05,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2KB05
3KB01,Senin,Mikrokomputer *,3/4,G147,RIDHA ISKANDAR,3KB01
3KB01,Senin,Jaringan Komputer Dasar *,5/6,G147,RAGIEL HADI PRAYITNO,3KB01
3KB01,Senin,Teknik Kendali,7/8,G147,PURNAWARMAN MUSA,3KB01
3KB01,Selasa,Keamanan Komputer,4/5,D645,ARIES MUSLIM,3KB01
3KB01,Selasa,Teknologi Sensor,6/7,D645,ANDINI SINTAWATI,3KB01
3KB01,Selasa,Pemrograman Devais,9/10,D624,MUDRIKA,3KB01
3KB01,Rabu,Pengantar Sistem Cerdas,1/2,E237,NUR SULTAN SALAHUDDIN,3KB01
3KB01,Rabu,Pemrograman WEB *,5/6,E232,PRIYO SARJONO WIBOWO,3KB01
3KB02,Senin,Pengantar Sistem Cerdas,5/6,G244,NUR SULTAN SALAHUDDIN,3KB02
3KB02,Senin,Mikrokomputer *,7/8,G244,RIDHA ISKANDAR,3KB02
3KB02,Senin,Teknik Kendali,9/10,G244,PURNAWARMAN MUSA,3KB02
3KB02,Selasa,Teknologi Sensor,1/2,D637,ANDINI SINTAWATI,3KB02
3KB02,Selasa,Pemrograman Devais,3/4,D637,MUDRIKA,3KB02
3KB02,Selasa,Keamanan Komputer,6/7,D623,ARIES MUSLIM,3KB02
3KB02,Rabu,Jaringan Komputer Dasar *,7/8,E316,RAGIEL HADI PRAYITNO,3KB02
3KB02,Rabu,Pemrograman WEB *,9/10,E316,PRIYO SARJONO WIBOWO,3KB02
3KB03,Senin,Jaringan Komputer Dasar *,1/2,G249,RAGIEL HADI PRAYITNO,3KB03
3KB03,Senin,Mikrokomputer *,5/6,G441,RIDHA ISKANDAR,3KB03
3KB03,Selasa,Keamanan Komputer,2/3,D625,ANNISA RAHMASYHARI,3KB03
3KB03,Selasa,Teknologi Sensor,4/5,D625,ANDINI SINTAWATI,3KB03
3KB03,Selasa,Pemrograman Devais,7/8,D656,MUDRIKA,3KB03
3KB03,Rabu,Pemrograman WEB *,1/2,E337,SURYARINI WIDODO,3KB03
3KB03,Rabu,Pengantar Sistem Cerdas,3/4,E337,NUR SULTAN SALAHUDDIN,3KB03
3KB03,Rabu,Teknik Kendali,5/6,E337,PURNAWARMAN MUSA,3KB03
3KB04,Rabu,Teknologi Sensor,1/2,J154,ANDINI SINTAWATI,3KB04
3KB04,Rabu,Pemrograman Devais,3/4,J154,MUDRIKA,3KB04
3KB04,Kamis,Mikrokomputer *,1/2,J1510,JOKO PURNOMO,3KB04
3KB04,Kamis,Jaringan Komputer Dasar *,3/4,J1510,KARTIKA NOR RAMADHA,3KB04
3KB04,Sabtu,Pemrograman WEB *,1/2,J1419,ANINDITO YOGA PRATAMA,3KB04
3KB04,Sabtu,Pengantar Sistem Cerdas,3/4,J1419,DESSY TRI ANGGRAENI,3KB04
3KB04,Sabtu,Teknik Kendali,6/7,J1419,SURYA SUMANTRI,3KB04
3KB04,Sabtu,Keamanan Komputer,8/9,J1419,KURNIAWAN B. PRIANTO,3KB04
3KB05,Senin,Teknologi Sensor,3/4,K152,ANDINI SINTAWATI,3KB05
3KB05,Senin,Pemrograman Devais,7/8,K151,ALFIE SYAHRI,3KB05
3KB05,Selasa,Pemrograman WEB *,1/2,K262,WIWIED WIDIYANINGSIH,3KB05
3KB05,Selasa,Mikrokomputer *,4/5,K271,JOKO PURNOMO,3KB05
3KB05,Rabu,Pengantar Sistem Cerdas,5/6,K281,MARA NUGRAHA,3KB05
3KB05,Jum'at,Teknik Kendali,1/2,K282,PURNAWARMAN MUSA,3KB05
3KB05,Jum'at,Keamanan Komputer,3/4,K271,MISSA LAMSANI,3KB05
3KB05,Jum'at,Jaringan Komputer Dasar *,6/7,K244,ATIT PERTIWI,3KB05
4KB01,Senin,Robotika Lanjut,4/5,G433,MUHAMMAD SUBALI,4KB01
4KB01,Senin,Aplikasi Internet of Things (IoT),7/8,G245,NUR SULTAN SALAHUDDIN,4KB01
4KB01,Selasa,Etika Profesi,2/3,G126,NOVITA SULISTIOWATI,4KB01
4KB01,Selasa,Sistem Komputasi Bergerak,4/5,G126,RAGIEL HADI PRAYITNO,4KB01
4KB01,Rabu,Proyek Sistem Komputer,2/3/4/5,E137,DYAH ANGGRAINI,4KB01
4KB01,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KB01
4KB01,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KB01
4KB02,Senin,Robotika Lanjut,1/2,E246,MUHAMMAD SUBALI,4KB02
4KB02,Senin,Aplikasi Internet of Things (IoT),3/4,E246,NUR SULTAN SALAHUDDIN,4KB02
4KB02,Selasa,Etika Profesi,7/8,E248,FARID THALIB,4KB02
4KB02,Selasa,Sistem Komputasi Bergerak,9/10,E248,ANDINI SINTAWATI,4KB02
4KB02,Rabu,Proyek Sistem Komputer,7/8/9/10,E324,PURNAWARMAN MUSA,4KB02
4KB02,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KB02
4KB02,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KB02
4KB03,Senin,Robotika Lanjut,6/7,G433,MUHAMMAD SUBALI,4KB03
4KB03,Senin,Aplikasi Internet of Things (IoT),9/10,G226,NUR SULTAN SALAHUDDIN,4KB03
4KB03,Selasa,Proyek Sistem Komputer,1/2/3/4,E216,LINGGA HERMANTO,4KB03
4KB03,Selasa,Sistem Komputasi Bergerak,6/7,E247,RAGIEL HADI PRAYITNO,4KB03
4KB03,Selasa,Etika Profesi,9/10,E211,FARID THALIB,4KB03
4KB03,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KB03
4KB03,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KB03
4KB04,Rabu,Robotika Lanjut,1/2,J1516B,TRI NUR ARIFIN,4KB04
4KB04,Rabu,Sistem Komputasi Bergerak,3/4,J1516B,ANDINI SINTAWATI,4KB04
4KB04,Rabu,Proyek Sistem Komputer,6/7/8/9,J128,MOHAMMAD IQBAL,4KB04
4KB04,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KB04
4KB04,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KB04
4KB04,Sabtu,Aplikasi Internet of Things (IoT),1/2,J60903,NUNING KHANIF AULIA,4KB04
4KB04,Sabtu,Etika Profesi,3/4,J60903,DIA RAGASARI,4KB04
4KB05,Senin,Sistem Komputasi Bergerak,1/2,K152,ANDINI SINTAWATI,4KB05
4KB05,Senin,Robotika Lanjut,3/4,K266,YOGI PERMADI,4KB05
4KB05,Senin,Etika Profesi,5/6,K242,KARTIKA SARI,4KB05
4KB05,Rabu,Aplikasi Internet of Things (IoT),7/8,K281,MARA NUGRAHA,4KB05
4KB05,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4KB05
4KB05,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4KB05
4KB05,Jum'at,Proyek Sistem Komputer,1/2/3/4,K255,NUR SULTAN SALAHUDDIN,4KB05
4KB06,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4KB06
1IA01,Selasa,Bahasa Indonesia,1/2,E514,ARI WIJAYA BASUKI RAHARJO,1IA01
1IA01,Selasa,Fisika & Kimia Dasar 1A,3/4,E432,AGUS TURIYONO,1IA01
1IA01,Selasa,Algoritma & Pemrograman 1B,5/6,E432,OCTARINA BUDI LESTARI,1IA01
1IA01,Rabu,Peng. Tekno. Komp. & Inf. B **,1/2,E335,PIPIT DEWI ARNESIA,1IA01
1IA01,Rabu,Matematika Dasar 1,3/4,E335,YULI FITRIYANI,1IA01
1IA01,Rabu,Algoritma & Pemrograman 1A,6/7,E343,EGY WISNU MOYO,1IA01
1IA01,Kamis,Matematika Informatika 1 **,2/3,G127,DIDIEK PRAMONO,1IA01
1IA01,Kamis,Algoritma & Pemrograman 1C,5/6,G138,LELI SAFITRI,1IA01
1IA01,Kamis,Peng. Tekno. Komp. & Inf. A **,7/8,G215,OLGA DIDERIKA IRENA D,1IA01
1IA01,Kamis,Fisika & Kimia Dasar 1B,9/10,G125,SARASWATI RAMADHANI PRIYONO,1IA01
1IA01,Jum'at,Pendidikan Pancasila *,1/2,E212,NELTJE F KATUUK,1IA01
1IA01,Jum'at,Bahasa Inggris,3/4,E212,SUPRIATNOKO,1IA01
1IA01,Jum'at,Peng. Tekno. Komp. & Inf. C **,7/8,E131,ERLINA,1IA01
1IA02,Senin,Algoritma & Pemrograman 1A,1/2,G217,ANACOSTIA KOWANDA,1IA02
1IA02,Senin,Matematika Informatika 1 **,4/5,G342,IRWAN SUSANTO,1IA02
1IA02,Senin,Pendidikan Pancasila *,7/8,G227,UMI KULSUM,1IA02
1IA02,Selasa,Fisika & Kimia Dasar 1A,3/4,G226,AJI ABDILLAH KHARISMA,1IA02
1IA02,Selasa,Bahasa Indonesia,6/7,G216,ARI WIJAYA BASUKI RAHARJO,1IA02
1IA02,Selasa,Algoritma & Pemrograman 1B,8/9,G216,RATRI PURWANINGTYAS,1IA02
1IA02,Kamis,Peng. Tekno. Komp. & Inf. C **,1/2,G224,ERLINA,1IA02
1IA02,Kamis,Bahasa Inggris,3/4,G224,MERISKA YOSIANA,1IA02
1IA02,Kamis,Algoritma & Pemrograman 1C,7/8,G227,ENDAH KURNIASARI,1IA02
1IA02,Kamis,Peng. Tekno. Komp. & Inf. A **,9/10,G227,OLGA DIDERIKA IRENA D,1IA02
1IA02,Jum'at,Fisika & Kimia Dasar 1B,3/4,E315,AGUS HADI ISMOYO,1IA02
1IA02,Jum'at,Matematika Dasar 1,7/8,E516,DYAH CITA IRAWATI,1IA02
1IA02,Jum'at,Peng. Tekno. Komp. & Inf. B **,9/10,E516,ERLINA,1IA02
1IA03,Senin,Algoritma & Pemrograman 1A,3/4,G218,ANACOSTIA KOWANDA,1IA03
1IA03,Senin,Algoritma & Pemrograman 1C,6/7,G228,ETY SUTANTY,1IA03
1IA03,Senin,Pendidikan Pancasila *,9/10,G444,NORMANSHAH BANOWO,1IA03
1IA03,Selasa,Peng. Tekno. Komp. & Inf. A **,3/4,E343,YULI MAHARETTA ARIANTI,1IA03
1IA03,Selasa,Fisika & Kimia Dasar 1A,6/7,E526,AGUS TURIYONO,1IA03
1IA03,Selasa,Fisika & Kimia Dasar 1B,9/10,E514,DYAN PRAWITA SARI,1IA03
1IA03,Kamis,Bahasa Indonesia,1/2,G129,ROSI ROSIDAH,1IA03
1IA03,Kamis,Matematika Informatika 1 **,3/4,G129,HENNY WIDOWATI FARIDA,1IA03
1IA03,Kamis,Peng. Tekno. Komp. & Inf. C **,7/8,G1410,ERLINA,1IA03
1IA03,Kamis,Peng. Tekno. Komp. & Inf. B **,9/10,G1410,ANNISA RAHMASYHARI,1IA03
1IA03,Jum'at,Matematika Dasar 1,3/4,E317,BAMBANG GUNAWAN H,1IA03
1IA03,Jum'at,Bahasa Inggris,7/8,E527,ZAINAL RIADI,1IA03
1IA03,Jum'at,Algoritma & Pemrograman 1B,9/10,E527,MARTHASYA AIFA,1IA03
1IA04,Senin,Peng. Tekno. Komp. & Inf. C **,3/4,G244,WINARSIH,1IA04
1IA04,Senin,Algoritma & Pemrograman 1B,5/6,G124,AHMAD HIDAYAT,1IA04
1IA04,Senin,Peng. Tekno. Komp. & Inf. B **,7/8,G124,PIPIT DEWI ARNESIA,1IA04
1IA04,Selasa,Peng. Tekno. Komp. & Inf. A **,1/2,E128,YULI MAHARETTA ARIANTI,1IA04
1IA04,Selasa,Fisika & Kimia Dasar 1B,3/4,E128,DYAN PRAWITA SARI,1IA04
1IA04,Selasa,Matematika Informatika 1 **,6/7,E234,ICHSANI MURSIDAH,1IA04
1IA04,Selasa,Bahasa Indonesia,9/10,E214,ABDUR ROCHMAN,1IA04
1IA04,Rabu,Fisika & Kimia Dasar 1A,1/2,E326,JONIFAN,1IA04
1IA04,Rabu,Algoritma & Pemrograman 1A,3/4,E317,ANACOSTIA KOWANDA,1IA04
1IA04,Rabu,Algoritma & Pemrograman 1C,5/6,E136,ETY SUTANTY,1IA04
1IA04,Kamis,Matematika Dasar 1,4/5,G314,EVAN PURNAMA RAMDAN,1IA04
1IA04,Kamis,Bahasa Inggris,7/8,G249,DEFI JULIANTI,1IA04
1IA04,Kamis,Pendidikan Pancasila *,9/10,G249,NORMANSHAH BANOWO,1IA04
1IA05,Senin,Peng. Tekno. Komp. & Inf. C **,1/2,G221,EEL SUSILOWATI,1IA05
1IA05,Senin,Matematika Dasar 1,4/5,G125,WIDIANTO MUTTAQIEN MUKODIM,1IA05
1IA05,Senin,Pendidikan Pancasila *,6/7,G125,ANDI NUR ALAM,1IA05
1IA05,Selasa,Fisika & Kimia Dasar 1A,1/2,E215,JONIFAN,1IA05
1IA05,Selasa,Algoritma & Pemrograman 1B,3/4,E226,OCTARINA BUDI LESTARI,1IA05
1IA05,Selasa,Fisika & Kimia Dasar 1B,6/7,E332,LESTARI OCTAVIA,1IA05
1IA05,Selasa,Algoritma & Pemrograman 1C,9/10,E335,MARTHASYA AIFA,1IA05
1IA05,Rabu,Bahasa Indonesia,3/4,G133,NURMANINGSIH,1IA05
1IA05,Rabu,Peng. Tekno. Komp. & Inf. B **,6/7,G236,TIYA NOVIYANTI,1IA05
1IA05,Kamis,Peng. Tekno. Komp. & Inf. A **,1/2,G231,PUJI SULARSIH,1IA05
1IA05,Kamis,Bahasa Inggris,3/4,G231,DEFI JULIANTI,1IA05
1IA05,Kamis,Algoritma & Pemrograman 1A,6/7,G238,EGY WISNU MOYO,1IA05
1IA05,Kamis,Matematika Informatika 1 **,9/10,G237,SARI NINGSIH,1IA05
1IA06,Senin,Peng. Tekno. Komp. & Inf. A **,1/2,G223,PUJI SULARSIH,1IA06
1IA06,Senin,Peng. Tekno. Komp. & Inf. C **,3/4,G223,EEL SUSILOWATI,1IA06
1IA06,Senin,Algoritma & Pemrograman 1B,7/8,G422,AMELIA BELINDA SILVIANA,1IA06
1IA06,Senin,Bahasa Inggris,9/10,G422,RICKY PERDANA,1IA06
1IA06,Selasa,Fisika & Kimia Dasar 1A,3/4,E224,JONIFAN,1IA06
1IA06,Selasa,Pendidikan Pancasila *,7/8,E314,MUSANA,1IA06
1IA06,Selasa,Fisika & Kimia Dasar 1B,9/10,E314,LESTARI OCTAVIA,1IA06
1IA06,Rabu,Peng. Tekno. Komp. & Inf. B **,2/3,E336,TIYA NOVIYANTI,1IA06
1IA06,Rabu,Bahasa Indonesia,5/6,E423,TRI BUDIARTA,1IA06
1IA06,Rabu,Algoritma & Pemrograman 1A,7/8,E311,ANACOSTIA KOWANDA,1IA06
1IA06,Jum'at,Matematika Dasar 1,1/2,E246,YULI FITRIYANI,1IA06
1IA06,Jum'at,Matematika Informatika 1 **,3/4,E246,BONANG WASPADADI LIGAR,1IA06
1IA06,Jum'at,Algoritma & Pemrograman 1C,7/8,E336,MARTHASYA AIFA,1IA06
1IA07,Senin,Matematika Dasar 1,1/2,G421,WIDIANTO MUTTAQIEN MUKODIM,1IA07
1IA07,Senin,Peng. Tekno. Komp. & Inf. A **,3/4,G421,PUJI SULARSIH,1IA07
1IA07,Selasa,Fisika & Kimia Dasar 1B,1/2,G431,LESTARI OCTAVIA,1IA07
1IA07,Selasa,Bahasa Inggris,3/4,G431,MARIA,1IA07
1IA07,Selasa,Peng. Tekno. Komp. & Inf. B **,6/7,G126,TIYA NOVIYANTI,1IA07
1IA07,Selasa,Fisika & Kimia Dasar 1A,8/9,G126,AJI ABDILLAH KHARISMA,1IA07
1IA07,Rabu,Algoritma & Pemrograman 1C,2/3,G237,ETY SUTANTY,1IA07
1IA07,Rabu,Bahasa Indonesia,5/6,G133,BUDI SANTOSA2,1IA07
1IA07,Rabu,Algoritma & Pemrograman 1B,7/8,G133,JULIA FAJARYANTI,1IA07
1IA07,Kamis,Pendidikan Pancasila *,1/2,G139,MUHAMAD FARID MAHMUD,1IA07
1IA07,Kamis,Algoritma & Pemrograman 1A,3/4,G139,EGY WISNU MOYO,1IA07
1IA07,Kamis,Peng. Tekno. Komp. & Inf. C **,7/8,G129,WINARSIH,1IA07
1IA07,Kamis,Matematika Informatika 1 **,9/10,G129,HENNY WIDOWATI FARIDA,1IA07
1IA08,Senin,Fisika & Kimia Dasar 1B,1/2,G122,HELMI,1IA08
1IA08,Senin,Matematika Informatika 1 **,3/4,G122,AINI SURI TALITA,1IA08
1IA08,Senin,Peng. Tekno. Komp. & Inf. A **,6/7,G248,PUJI SULARSIH,1IA08
1IA08,Selasa,Peng. Tekno. Komp. & Inf. C **,3/4,G232,LILIS SETYOWATI,1IA08
1IA08,Selasa,Fisika & Kimia Dasar 1A,6/7,G244,AJI ABDILLAH KHARISMA,1IA08
1IA08,Selasa,Bahasa Inggris,8/9,G244,ARSIWELA,1IA08
1IA08,Rabu,Matematika Dasar 1,1/2,E311,BAMBANG GUNAWAN H,1IA08
1IA08,Rabu,Peng. Tekno. Komp. & Inf. B **,3/4,E326,PIPIT DEWI ARNESIA,1IA08
1IA08,Rabu,Algoritma & Pemrograman 1A,5/6,E311,ANACOSTIA KOWANDA,1IA08
1IA08,Rabu,Algoritma & Pemrograman 1C,8/9,E136,ETY SUTANTY,1IA08
1IA08,Kamis,Bahasa Indonesia,3/4,G451,ROSI ROSIDAH,1IA08
1IA08,Kamis,Pendidikan Pancasila *,6/7,G234,METI NURHAYATI,1IA08
1IA08,Kamis,Algoritma & Pemrograman 1B,8/9,G234,RATRI PURWANINGTYAS,1IA08
1IA09,Senin,Algoritma & Pemrograman 1B,5/6,G231,AMELIA BELINDA SILVIANA,1IA09
1IA09,Senin,Bahasa Inggris,7/8,G231,RICKY PERDANA,1IA09
1IA09,Senin,Algoritma & Pemrograman 1A,9/10,G231,MASIMBANGAN SABARINA H/RIZKI ARIYANI,1IA09
1IA09,Selasa,Fisika & Kimia Dasar 1B,3/4,G144,LESTARI OCTAVIA,1IA09
1IA09,Selasa,Algoritma & Pemrograman 1C,6/7,G114,DINA AGUSTEN,1IA09
1IA09,Selasa,Peng. Tekno. Komp. & Inf. B **,8/9,G114,TIYA NOVIYANTI,1IA09
1IA09,Kamis,Matematika Informatika 1 **,1/2,G226,SUSI INDRATI,1IA09
1IA09,Kamis,Peng. Tekno. Komp. & Inf. A **,3/4,G226,ESTI SETIYANINGSIH,1IA09
1IA09,Kamis,Peng. Tekno. Komp. & Inf. C **,6/7,G218,MURTIWIYATI,1IA09
1IA09,Kamis,Pendidikan Pancasila *,8/9,G218,NELTJE F KATUUK,1IA09
1IA09,Jum'at,Matematika Dasar 1,3/4,E342,MUHAMMAD MOLDYNNIZ MUTIARA,1IA09
1IA09,Jum'at,Fisika & Kimia Dasar 1A,7/8,E211,DESY HERTINSYANA,1IA09
1IA09,Jum'at,Bahasa Indonesia,9/10,E211,JONO SAROYO,1IA09
1IA10,Senin,Algoritma & Pemrograman 1C,3/4,G345,ETY SUTANTY,1IA10
1IA10,Senin,Matematika Dasar 1,7/8,G116,WIDIANTO MUTTAQIEN MUKODIM,1IA10
1IA10,Senin,Pendidikan Pancasila *,9/10,G116,UMI KULSUM,1IA10
1IA10,Selasa,Fisika & Kimia Dasar 1A,1/2,E422,AJI ABDILLAH KHARISMA,1IA10
1IA10,Selasa,Bahasa Indonesia,3/4,E422,RAFIQA MAULIDIA,1IA10
1IA10,Selasa,Algoritma & Pemrograman 1A,6/7,E413,RATRI PURWANINGTYAS,1IA10
1IA10,Kamis,Peng. Tekno. Komp. & Inf. A **,1/2,G134,ESTI SETIYANINGSIH,1IA10
1IA10,Kamis,Bahasa Inggris,3/4,G134,SEPTIAN DWI PUTRI,1IA10
1IA10,Kamis,Peng. Tekno. Komp. & Inf. C **,6/7,G344,SARI NOORLIMA YANTI,1IA10
1IA10,Kamis,Algoritma & Pemrograman 1B,8/9,G344,AMELIA BELINDA SILVIANA,1IA10
1IA10,Jum'at,Matematika Informatika 1 **,1/2,E414,SUSI INDRATI,1IA10
1IA10,Jum'at,Peng. Tekno. Komp. & Inf. B **,3/4,E414,ORITA DWI PURBIYANTI,1IA10
1IA10,Jum'at,Fisika & Kimia Dasar 1B,7/8,E513,ERMAWATI,1IA10
1IA11,Selasa,Fisika & Kimia Dasar 1B,7/8,E226,DYAN PRAWITA SARI,1IA11
1IA11,Selasa,Bahasa Indonesia,9/10,E226,RAFIQA MAULIDIA,1IA11
1IA11,Rabu,Fisika & Kimia Dasar 1A,3/4,E422,JONIFAN,1IA11
1IA11,Rabu,Pendidikan Pancasila *,5/6,E422,METI NURHAYATI,1IA11
1IA11,Rabu,Algoritma & Pemrograman 1B,7/8,E315,RODIAH,1IA11
1IA11,Kamis,Bahasa Inggris,1/2,G125,SEPTIAN DWI PUTRI,1IA11
1IA11,Kamis,Algoritma & Pemrograman 1A,3/4,G125,RATRI PURWANINGTYAS,1IA11
1IA11,Kamis,Peng. Tekno. Komp. & Inf. A **,7/8,G239,PUJI SULARSIH,1IA11
1IA11,Kamis,Peng. Tekno. Komp. & Inf. C **,9/10,G244,ERLINA,1IA11
1IA11,Jum'at,Peng. Tekno. Komp. & Inf. B **,1/2,E413,ORITA DWI PURBIYANTI,1IA11
1IA11,Jum'at,Matematika Informatika 1 **,3/4,E413,SUSI INDRATI,1IA11
1IA11,Jum'at,Matematika Dasar 1,7/8,E318,BAMBANG GUNAWAN H,1IA11
1IA11,Jum'at,Algoritma & Pemrograman 1C,9/10,E318,ELVINA,1IA11
1IA12,Senin,Fisika & Kimia Dasar 1B,3/4,G229,HELMI,1IA12
1IA12,Senin,Algoritma & Pemrograman 1A,5/6,G229,MASIMBANGAN SABARINA H/RIZKI ARIYANI,1IA12
1IA12,Senin,Matematika Informatika 1 **,7/8,G229,HENNY WIDOWATI FARIDA,1IA12
1IA12,Rabu,Bahasa Inggris,1/2,G227,ADANI NUR SABRINA,1IA12
1IA12,Rabu,Algoritma & Pemrograman 1B,4/5,G237,JULIA FAJARYANTI,1IA12
1IA12,Rabu,Pendidikan Pancasila *,6/7,G237,GATOT SUBIYAKTO,1IA12
1IA12,Rabu,Peng. Tekno. Komp. & Inf. B **,8/9,G237,TIYA NOVIYANTI,1IA12
1IA12,Kamis,Fisika & Kimia Dasar 1A,5/6,E317,SUHARDJO POERTADJI,1IA12
1IA12,Kamis,Bahasa Indonesia,7/8,E317,ROSI ROSIDAH,1IA12
1IA12,Jum'at,Matematika Dasar 1,1/2,E217,MUHAMMAD MOLDYNNIZ MUTIARA,1IA12
1IA12,Jum'at,Peng. Tekno. Komp. & Inf. A **,3/4,E217,MASIMBANGAN SUSANNA HERAWATI,1IA12
1IA12,Jum'at,Peng. Tekno. Komp. & Inf. C **,7/8,E134,MURTIWIYATI,1IA12
1IA12,Jum'at,Algoritma & Pemrograman 1C,9/10,E134,FARIDA AMALYA,1IA12
1IA13,Senin,Peng. Tekno. Komp. & Inf. B **,1/2,G114,PIPIT DEWI ARNESIA,1IA13
1IA13,Senin,Fisika & Kimia Dasar 1A,3/4,G114,JOKO PURNOMO,1IA13
1IA13,Senin,Matematika Informatika 1 **,6/7,G113,IRWAN SUSANTO,1IA13
1IA13,Selasa,Bahasa Indonesia,3/4,G217,ARI WIJAYA BASUKI RAHARJO,1IA13
1IA13,Selasa,Algoritma & Pemrograman 1A,5/6,G441,ARIEF FADHLURRAHMAN RASYID,1IA13
1IA13,Kamis,Algoritma & Pemrograman 1B,1/2,G112,RATRI PURWANINGTYAS,1IA13
1IA13,Kamis,Pendidikan Pancasila *,3/4,G112,HELNAWATY,1IA13
1IA13,Kamis,Bahasa Inggris,6/7,G243,TEGAR ARIF TOPAN,1IA13
1IA13,Kamis,Fisika & Kimia Dasar 1B,8/9,G243,LESTARI OCTAVIA,1IA13
1IA13,Jum'at,Peng. Tekno. Komp. & Inf. A **,1/2,E422,MASIMBANGAN SUSANNA HERAWATI,1IA13
1IA13,Jum'at,Matematika Dasar 1,3/4,E422,YULI FITRIYANI,1IA13
1IA13,Jum'at,Algoritma & Pemrograman 1C,7/8,E332,FARIDA AMALYA,1IA13
1IA13,Jum'at,Peng. Tekno. Komp. & Inf. C **,9/10,E332,LILIS SETYOWATI,1IA13
1IA14,Senin,Fisika & Kimia Dasar 1A,1/2,G349,JOKO PURNOMO,1IA14
1IA14,Senin,Peng. Tekno. Komp. & Inf. B **,3/4,G349,PIPIT DEWI ARNESIA,1IA14
1IA14,Senin,Bahasa Inggris,5/6,G349,GANJAR RESTO PAMBUDI,1IA14
1IA14,Rabu,Algoritma & Pemrograman 1A,1/2,E317,ANACOSTIA KOWANDA,1IA14
1IA14,Rabu,Matematika Informatika 1 **,4/5,E322,ICHSANI MURSIDAH,1IA14
1IA14,Rabu,Bahasa Indonesia,7/8,E514,BUDI SANTOSA2,1IA14
1IA14,Kamis,Pendidikan Pancasila *,3/4,G132,DYAN TANJUNG GUNOTOMO,1IA14
1IA14,Kamis,Matematika Dasar 1,6/7,G231,DIDIEK PRAMONO,1IA14
1IA14,Kamis,Algoritma & Pemrograman 1B,9/10,G425,JULIA FAJARYANTI,1IA14
1IA14,Jum'at,Fisika & Kimia Dasar 1B,1/2,E223,ERMAWATI,1IA14
1IA14,Jum'at,Algoritma & Pemrograman 1C,3/4,E223,ELVINA,1IA14
1IA14,Jum'at,Peng. Tekno. Komp. & Inf. A **,7/8,E522,MASIMBANGAN SUSANNA HERAWATI,1IA14
1IA14,Jum'at,Peng. Tekno. Komp. & Inf. C **,9/10,E522,MURTIWIYATI,1IA14
1IA15,Selasa,Matematika Informatika 1 **,3/4,E225,ICHSANI MURSIDAH,1IA15
1IA15,Selasa,Peng. Tekno. Komp. & Inf. A **,5/6,E225,EMELLIKA RAHMAYANA,1IA15
1IA15,Selasa,Algoritma & Pemrograman 1C,7/8,E423,MARTHASYA AIFA,1IA15
1IA15,Rabu,Bahasa Inggris,5/6,G244,SEPTIAN DWI PUTRI,1IA15
1IA15,Rabu,Matematika Dasar 1,8/9,G425,YULI FITRIYANI,1IA15
1IA15,Kamis,Algoritma & Pemrograman 1B,1/2,G454,AHMAD HIDAYAT,1IA15
1IA15,Kamis,Peng. Tekno. Komp. & Inf. C **,3/4,G454,ERLINA,1IA15
1IA15,Kamis,Fisika & Kimia Dasar 1B,6/7,G441,SARASWATI RAMADHANI PRIYONO,1IA15
1IA15,Kamis,Bahasa Indonesia,9/10,G421,SANGSANG SANGABAKTI,1IA15
1IA15,Jum'at,Peng. Tekno. Komp. & Inf. B **,1/2,D661,TIYA NOVIYANTI,1IA15
1IA15,Jum'at,Algoritma & Pemrograman 1A,3/4,D661,EVANS WINANDA WIRGA,1IA15
1IA15,Jum'at,Fisika & Kimia Dasar 1A,7/8,D661,ANY KURNIAWATY YAPIE,1IA15
1IA15,Jum'at,Pendidikan Pancasila *,9/10,D661,UMI KULSUM,1IA15
1IA16,Rabu,Pendidikan Pancasila *,1/2,J1417,JUNAEDI ABDILLAH,1IA16
1IA16,Rabu,Algoritma & Pemrograman 1B,3/4,J1417,DINI TRIASANTI,1IA16
1IA16,Rabu,Peng. Tekno. Komp. & Inf. A **,6/7,J1417,WIWIED WIDIYANINGSIH,1IA16
1IA16,Rabu,Peng. Tekno. Komp. & Inf. C **,8/9,J1417,WIWIED WIDIYANINGSIH,1IA16
1IA16,Kamis,Matematika Dasar 1,1/2,J149,SIGIT MUHAMAD YAKUB,1IA16
1IA16,Kamis,Algoritma & Pemrograman 1C,3/4,J149,MAKMUN,1IA16
1IA16,Kamis,Bahasa Indonesia,5/6,J149,SRI SULISTIYONINGSIH,1IA16
1IA16,Kamis,Fisika & Kimia Dasar 1B,8/9,J147,YASMAN RIANTO,1IA16
1IA16,Jum'at,Matematika Informatika 1 **,3/4,J1312,SRAVA CHRISDES ANTORO,1IA16
1IA16,Jum'at,Fisika & Kimia Dasar 1A,7/8,J157,HAFIDZAH,1IA16
1IA16,Jum'at,Algoritma & Pemrograman 1A,9/10,J157,RINI ARIANTY,1IA16
1IA16,Sabtu,Peng. Tekno. Komp. & Inf. B **,3/4,J1216B,EKA BUDHY PRASETYA,1IA16
1IA16,Sabtu,Bahasa Inggris,5/6,J1216B,PUTI NURINA AYUNINGTYAS,1IA16
1IA17,Senin,Bahasa Indonesia,1/2,J1110,BUDI SANTOSA2,1IA17
1IA17,Senin,Peng. Tekno. Komp. & Inf. A **,3/4,J1110,SINDY NOVA,1IA17
1IA17,Senin,Peng. Tekno. Komp. & Inf. C **,6/7,J1110,SINDY NOVA,1IA17
1IA17,Rabu,Peng. Tekno. Komp. & Inf. B **,1/2,J138,ANGGRAENI RIDWAN,1IA17
1IA17,Rabu,Algoritma & Pemrograman 1A,3/4,J138,QOMARIYAH,1IA17
1IA17,Rabu,Algoritma & Pemrograman 1B,6/7,J1510,WALIYA RAHMAWANTI,1IA17
1IA17,Rabu,Fisika & Kimia Dasar 1B,8/9,J1510,NURUL ASNI,1IA17
1IA17,Kamis,Matematika Dasar 1,1/2,J153,YUNIARSO ARIF KRESNO,1IA17
1IA17,Kamis,Pendidikan Pancasila *,3/4,J153,MUHAMMAD ABDULLAH S,1IA17
1IA17,Kamis,Algoritma & Pemrograman 1C,5/6,J153,MAKMUN,1IA17
1IA17,Kamis,Fisika & Kimia Dasar 1A,9/10,J153,MARIZA WIJAYANTI,1IA17
1IA17,Sabtu,Matematika Informatika 1 **,1/2,J127,AMELIA NUGRAENI,1IA17
1IA17,Sabtu,Bahasa Inggris,5/6,J127,GUNAWAN TAMBUNSARIBU,1IA17
1IA18,Senin,Bahasa Indonesia,1/2,J1425,KURNIAWAN EKA,1IA18
1IA18,Senin,Peng. Tekno. Komp. & Inf. A **,3/4,J1425,ARIMBI KURNIASARI,1IA18
1IA18,Senin,Matematika Dasar 1,5/6,J1425,MARIA Y ARYATI WAHYUNINGRUM,1IA18
1IA18,Senin,Peng. Tekno. Komp. & Inf. C **,8/9,J1425,SINDY NOVA,1IA18
1IA18,Selasa,Fisika & Kimia Dasar 1B,4/5,J1515A,MARIZA WIJAYANTI,1IA18
1IA18,Selasa,Matematika Informatika 1 **,6/7,J1515A,SRAVA CHRISDES ANTORO,1IA18
1IA18,Rabu,Algoritma & Pemrograman 1A,1/2,J123,TASMILYANTI,1IA18
1IA18,Rabu,Peng. Tekno. Komp. & Inf. B **,3/4,J123,ANGGRAENI RIDWAN,1IA18
1IA18,Rabu,Algoritma & Pemrograman 1C,6/7,J123,MITA LAILASARI,1IA18
1IA18,Rabu,Algoritma & Pemrograman 1B,9/10,J124,DINI TRIASANTI,1IA18
1IA18,Sabtu,Bahasa Inggris,3/4,J1216A,INAYANTI,1IA18
1IA18,Sabtu,Pendidikan Pancasila *,5/6,J1216A,NINA MEINA RAHMAWATI,1IA18
1IA18,Sabtu,Fisika & Kimia Dasar 1A,7/8,J1216A,I WAYAN MULIAWAN,1IA18
1IA19,Senin,Algoritma & Pemrograman 1C,1/2,J1410,SINDY NOVA,1IA19
1IA19,Senin,Matematika Dasar 1,3/4,J1410,MARIA Y ARYATI WAHYUNINGRUM,1IA19
1IA19,Senin,Fisika & Kimia Dasar 1B,7/8,J1410,NURUL ASNI,1IA19
1IA19,Senin,Peng. Tekno. Komp. & Inf. A **,9/10,J1410,ARIMBI KURNIASARI,1IA19
1IA19,Rabu,Peng. Tekno. Komp. & Inf. C **,1/2,J129,WIWIED WIDIYANINGSIH,1IA19
1IA19,Rabu,Algoritma & Pemrograman 1B,4/5,J1210,WALIYA RAHMAWANTI,1IA19
1IA19,Kamis,Bahasa Indonesia,1/2,J1316A,SRI SULISTIYONINGSIH,1IA19
1IA19,Kamis,Fisika & Kimia Dasar 1A,3/4,J1316A,BAMBANG DWINANTO,1IA19
1IA19,Kamis,Algoritma & Pemrograman 1A,7/8,J1316A,BUDI UTAMI FAHNUN,1IA19
1IA19,Sabtu,Bahasa Inggris,1/2,J1416B,INAYANTI,1IA19
1IA19,Sabtu,Matematika Informatika 1 **,3/4,J1416B,AMELIA NUGRAENI,1IA19
1IA19,Sabtu,Peng. Tekno. Komp. & Inf. B **,5/6,J1416B,EKA BUDHY PRASETYA,1IA19
1IA19,Sabtu,Pendidikan Pancasila *,9/10,J1316A,NINA MEINA RAHMAWATI,1IA19
1IA20,Senin,Fisika & Kimia Dasar 1A,1/2,J1415,MARIZA WIJAYANTI,1IA20
1IA20,Senin,Bahasa Indonesia,3/4,J1415,BUDI SANTOSA2,1IA20
1IA20,Senin,Peng. Tekno. Komp. & Inf. A **,5/6,J1415,ARIMBI KURNIASARI,1IA20
1IA20,Rabu,Algoritma & Pemrograman 1C,1/2,J1510,MITA LAILASARI,1IA20
1IA20,Rabu,Algoritma & Pemrograman 1A,3/4,J1510,TASMILYANTI,1IA20
1IA20,Rabu,Fisika & Kimia Dasar 1B,6/7,J1613,NURUL ASNI,1IA20
1IA20,Rabu,Algoritma & Pemrograman 1B,8/9,J1613,WALIYA RAHMAWANTI,1IA20
1IA20,Kamis,Bahasa Inggris,3/4,J157,ALIYA FADHILLA,1IA20
1IA20,Kamis,Peng. Tekno. Komp. & Inf. C **,6/7,J157,WIWIED WIDIYANINGSIH,1IA20
1IA20,Kamis,Matematika Dasar 1,8/9,J157,YUNIARSO ARIF KRESNO,1IA20
1IA20,Sabtu,Peng. Tekno. Komp. & Inf. B **,1/2,J1115A,EKA BUDHY PRASETYA,1IA20
1IA20,Sabtu,Pendidikan Pancasila *,3/4,J1115A,MUHAMMAD BURHAN AMIN,1IA20
1IA20,Sabtu,Matematika Informatika 1 **,6/7,J1115A,AMELIA NUGRAENI,1IA20
1IA21,Senin,Pendidikan Pancasila *,1/2,L236,ISNA PANDIJA,1IA21
1IA21,Senin,Fisika & Kimia Dasar 1B,6/7,L244,ASHFAR KURNIA,1IA21
1IA21,Selasa,Bahasa Indonesia,2/3,L235,SHINTA TEVININGRUM,1IA21
1IA21,Selasa,Algoritma & Pemrograman 1A,8/9,L244,YENI SETIANI,1IA21
1IA21,Rabu,Algoritma & Pemrograman 1B,4/5,L244,LULU CHAERANI MUNGGARAN,1IA21
1IA21,Kamis,Peng. Tekno. Komp. & Inf. A **,2/3,L234,SYAMSI RUHAMA,1IA21
1IA21,Kamis,Peng. Tekno. Komp. & Inf. B **,4/5,L241,ANNA FITRIA,1IA21
1IA21,Kamis,Matematika Informatika 1 **,6/7,L224,ICHSANI MURSIDAH,1IA21
1IA21,Jum'at,Matematika Dasar 1,2/3,L242,LILIK SETIAWAN HERY PURNAMA,1IA21
1IA21,Jum'at,Algoritma & Pemrograman 1C,7/8,L236,ONNY MARLEEN,1IA21
1IA21,Jum'at,Fisika & Kimia Dasar 1A,9/10,L244,BAMBANG DWINANTO,1IA21
1IA21,Sabtu,Peng. Tekno. Komp. & Inf. C **,2/3,L241,YULI MAHARETTA ARIANTI,1IA21
1IA21,Sabtu,Bahasa Inggris,4/5,L226,AULIA HARIS FIRSTIYANTI,1IA21
2IA01,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA01
2IA01,Selasa,Informatika Kesehatan,1/2,D621,VIRA YOLANDA,2IA01
2IA01,Selasa,Matematika Lanjut 1,4/5/6,D626,EDI SUKIRMAN,2IA01
2IA01,Selasa,Matematika Informatika 3,8/9/10,D626,IFFATUL MARDHIYAH,2IA01
2IA01,Kamis,Statistika 1,1/2/3,D622,THOMAS WIDODO,2IA01
2IA01,Kamis,Legal Aspek Produk TI dan Komunik,5/6,D664,IRFAN,2IA01
2IA01,Kamis,Pengantar Sains Data,9/10,D635,ANISA LORA,2IA01
2IA01,Jum'at,Algoritma & Pemrograman 3 *,1/2,G444,FAUZIAH SUPARDI,2IA01
2IA01,Jum'at,Organisasi Sistem Komputer */**,3/4,G444,FEBRIANTI DWIANJANI,2IA01
2IA01,Jum'at,Struktur Data **,7/8/9,G125,SARI NOORLIMA YANTI,2IA01
2IA01,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IA01
2IA02,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA02
2IA02,Selasa,Matematika Informatika 3,1/2/3,D642,NURHANAN,2IA02
2IA02,Selasa,Algoritma & Pemrograman 3 *,5/6,D632,ARY BIMA KURNIAWAN,2IA02
2IA02,Selasa,Organisasi Sistem Komputer */**,7/8,D632,SANDHI PRAJAKA,2IA02
2IA02,Selasa,Pengantar Sains Data,9/10,D632,RIZA ADRIANTI SUPONO,2IA02
2IA02,Rabu,Struktur Data **,1/2/3,E218,DINA ANGGRAINI,2IA02
2IA02,Rabu,Matematika Lanjut 1,5/6/7,E444,EGA JULIA FAJARSARI,2IA02
2IA02,Rabu,Informatika Kesehatan,9/10,E221,SRI MUKTI SUHARTINI,2IA02
2IA02,Kamis,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2IA02
2IA02,Jum'at,Statistika 1,2/3/4,G313,TITIEK IREWATI,2IA02
2IA02,Jum'at,Legal Aspek Produk TI dan Komunik,7/8,G237,PUJI ZULAIKASARI,2IA02
2IA03,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA03
2IA03,Selasa,Pengantar Sains Data,1/2,E248,ANTONIUS ANGGA KURNIAWAN,2IA03
2IA03,Selasa,Informatika Kesehatan,3/4,E248,FEBRIYANTI ZULYANI,2IA03
2IA03,Selasa,Legal Aspek Produk TI dan Komunik,6/7,E341,ELYNA FAZRIYATI,2IA03
2IA03,Selasa,Matematika Lanjut 1,8/9/10,E341,DONI FERNANDO,2IA03
2IA03,Kamis,Matematika Informatika 3,4/5/6,G239,SITA DEWI,2IA03
2IA03,Kamis,Algoritma & Pemrograman 3 *,8/9,G245,I WAYAN KRISHNA DARMA,2IA03
2IA03,Jum'at,Struktur Data **,2/3/4,G143,SARI NOORLIMA YANTI,2IA03
2IA03,Jum'at,Organisasi Sistem Komputer */**,7/8,G134,FEBRIANTI DWIANJANI,2IA03
2IA03,Sabtu,Statistika 1,4/5/6,G126,PUTRI IRENE KANNY,2IA03
2IA03,Sabtu,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2IA03
2IA04,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA04
2IA04,Selasa,Informatika Kesehatan,1/2,E224,FEBRIYANTI ZULYANI,2IA04
2IA04,Selasa,Matematika Informatika 3,4/5/6,E527,MURNI,2IA04
2IA04,Selasa,Struktur Data **,8/9/10,E323,DIOKTA REDHO LASTIN,2IA04
2IA04,Kamis,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2IA04
2IA04,Jum'at,Organisasi Sistem Komputer */**,1/2,D645,MUJI LESTARI,2IA04
2IA04,Jum'at,Algoritma & Pemrograman 3 *,3/4,D645,JAMILAH,2IA04
2IA04,Jum'at,Matematika Lanjut 1,7/8/9,D645,EDI SUKIRMAN,2IA04
2IA04,Sabtu,Legal Aspek Produk TI dan Komunik,3/4,G313,IWAN,2IA04
2IA04,Sabtu,Pengantar Sains Data,6/7,G313,MUJI SANTOSO,2IA04
2IA04,Sabtu,Statistika 1,8/9/10,G313,PUTRI IRENE KANNY,2IA04
2IA05,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA05
2IA05,Selasa,Struktur Data **,1/2/3,D667,DINA ANGGRAINI,2IA05
2IA05,Selasa,Matematika Informatika 3,4/5/6,D621,NURHANAN,2IA05
2IA05,Selasa,Organisasi Sistem Komputer */**,9/10,D645,SANDHI PRAJAKA,2IA05
2IA05,Kamis,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2IA05
2IA05,Jum'at,Legal Aspek Produk TI dan Komunik,1/2,G244,ELYNA FAZRIYATI,2IA05
2IA05,Jum'at,Informatika Kesehatan,3/4,G244,LASMA NURHAYATI SIAGIAN,2IA05
2IA05,Jum'at,Pengantar Sains Data,7/8,G244,PARNO,2IA05
2IA05,Jum'at,Algoritma & Pemrograman 3 *,9/10,G244,PRIYO SARJONO WIBOWO,2IA05
2IA05,Sabtu,Statistika 1,1/2/3,G227,PUTRI IRENE KANNY,2IA05
2IA05,Sabtu,Matematika Lanjut 1,4/5/6,G227,DHANY BAHARIAWAN HIDAYAT,2IA05
2IA06,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA06
2IA06,Selasa,Informatika Kesehatan,1/2,G226,MOCHAMMAD WISUDA SARJONO,2IA06
2IA06,Selasa,Pengantar Sains Data,3/4,G236,ANTONIUS ANGGA KURNIAWAN,2IA06
2IA06,Selasa,Struktur Data **,7/8/9,G1410,DIANA TRI SUSETIANINGTIAS,2IA06
2IA06,Rabu,Organisasi Sistem Komputer */**,3/4,G149,INTAN MEUTIA SARI,2IA06
2IA06,Rabu,Matematika Lanjut 1,5/6/7,G149,MARIA T A DEWI,2IA06
2IA06,Rabu,Legal Aspek Produk TI dan Komunik,9/10,G143,KOSDIANA,2IA06
2IA06,Kamis,Statistika 1,1/2/3,E426,RISKAYANTO,2IA06
2IA06,Kamis,Algoritma & Pemrograman 3 *,6/7,E422,HANUM PUTRI PERMATASARI,2IA06
2IA06,Kamis,Matematika Informatika 3,8/9/10,E422,SUSI INDRATI,2IA06
2IA06,Jum'at,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2IA06
2IA07,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA07
2IA07,Selasa,Matematika Informatika 3,1/2/3,D653,D L CRISPINA PARDEDE,2IA07
2IA07,Selasa,Matematika Lanjut 1,5/6/7,D664,AINI SURI TALITA,2IA07
2IA07,Selasa,Statistika 1,8/9/10,D664,ADI KUSWANTO,2IA07
2IA07,Rabu,Pengantar Sains Data,1/2,G423,RIZA ADRIANTI SUPONO,2IA07
2IA07,Rabu,Legal Aspek Produk TI dan Komunik,3/4,G423,KOSDIANA,2IA07
2IA07,Rabu,Algoritma & Pemrograman 3 *,5/6,G423,LILIS KUSNITAWATI,2IA07
2IA07,Rabu,Organisasi Sistem Komputer */**,8/9,G423,INTAN MEUTIA SARI,2IA07
2IA07,Kamis,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2IA07
2IA07,Jum'at,Struktur Data **,2/3/4,D643,DINA ANGGRAINI,2IA07
2IA07,Jum'at,Informatika Kesehatan,7/8,D664,EVI MARYAM,2IA07
2IA08,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA08
2IA08,Selasa,Matematika Lanjut 1,1/2/3,D641,EDI SUKIRMAN,2IA08
2IA08,Selasa,Statistika 1,4/5/6,D641,ADI KUSWANTO,2IA08
2IA08,Rabu,Pengantar Sains Data,3/4,G147,PARNO,2IA08
2IA08,Rabu,Legal Aspek Produk TI dan Komunik,5/6,G147,KOSDIANA,2IA08
2IA08,Rabu,Informatika Kesehatan,7/8,G147,OKTAVIANI,2IA08
2IA08,Kamis,Struktur Data **,4/5/6,G455,BETTY SUSWATI,2IA08
2IA08,Jum'at,Algoritma & Pemrograman 3 *,1/2,D646,JAMILAH,2IA08
2IA08,Jum'at,Organisasi Sistem Komputer */**,3/4,D646,MUJI LESTARI,2IA08
2IA08,Jum'at,Matematika Informatika 3,7/8/9,D646,D L CRISPINA PARDEDE,2IA08
2IA08,Sabtu,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2IA08
2IA09,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA09
2IA09,Selasa,Struktur Data **,5/6/7,D653,DINA ANGGRAINI,2IA09
2IA09,Selasa,Matematika Informatika 3,8/9/10,D653,NURHANAN,2IA09
2IA09,Rabu,Pengantar Sains Data,3/4,G137,RIZA ADRIANTI SUPONO,2IA09
2IA09,Rabu,Legal Aspek Produk TI dan Komunik,5/6,G137,INTAN MEUTIA SARI,2IA09
2IA09,Rabu,Matematika Lanjut 1,8/9/10,G115,MARIA T A DEWI,2IA09
2IA09,Kamis,Organisasi Sistem Komputer */**,3/4,G138,MUJI LESTARI,2IA09
2IA09,Jum'at,Informatika Kesehatan,1/2,G237,LASMA NURHAYATI SIAGIAN,2IA09
2IA09,Jum'at,Algoritma & Pemrograman 3 *,3/4,G237,FAUZIAH SUPARDI,2IA09
2IA09,Jum'at,Statistika 1,7/8/9,G226,RISKAYANTO,2IA09
2IA09,Sabtu,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2IA09
2IA10,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA10
2IA10,Selasa,Pengantar Sains Data,3/4,E331,PARNO,2IA10
2IA10,Selasa,Matematika Lanjut 1,5/6/7,E331,DONI FERNANDO,2IA10
2IA10,Selasa,Legal Aspek Produk TI dan Komunik,9/10,E331,ELYNA FAZRIYATI,2IA10
2IA10,Rabu,Organisasi Sistem Komputer */**,1/2,E128,RANI PUSPITA,2IA10
2IA10,Rabu,Informatika Kesehatan,3/4,E128,SRI MUKTI SUHARTINI,2IA10
2IA10,Kamis,Statistika 1,1/2/3,G227,INTI MULYO ARTI,2IA10
2IA10,Kamis,Algoritma & Pemrograman 3 *,4/5,G227,HANUM PUTRI PERMATASARI,2IA10
2IA10,Kamis,Struktur Data **,7/8/9,G132,BETTY SUSWATI,2IA10
2IA10,Jum'at,Matematika Informatika 3,2/3/4,D642,D L CRISPINA PARDEDE,2IA10
2IA10,Jum'at,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2IA10
2IA11,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA11
2IA11,Selasa,Matematika Lanjut 1,1/2/3,E442,DONI FERNANDO,2IA11
2IA11,Selasa,Informatika Kesehatan,4/5,E442,MOCHAMMAD WISUDA SARJONO,2IA11
2IA11,Selasa,Pengantar Sains Data,6/7,E442,PARNO,2IA11
2IA11,Rabu,Struktur Data **,1/2/3,G126,YENI SETIANI,2IA11
2IA11,Rabu,Organisasi Sistem Komputer */**,4/5,G126,SITI SAIDAH,2IA11
2IA11,Rabu,Algoritma & Pemrograman 3 *,7/8,G228,LILIS KUSNITAWATI,2IA11
2IA11,Rabu,Legal Aspek Produk TI dan Komunik,9/10,G221,SITI CHODIDJAH,2IA11
2IA11,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IA11
2IA11,Sabtu,Statistika 1,1/2/3,G215,ANDY WIDYANTHO,2IA11
2IA11,Sabtu,Matematika Informatika 3,4/5/6,G215,ILMIYATI SARI,2IA11
2IA12,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA12
2IA12,Selasa,Matematika Informatika 3,1/2/3,G245,SELI SITI SHOLIHAT,2IA12
2IA12,Selasa,Struktur Data **,4/5/6,G245,DIANA TRI SUSETIANINGTIAS,2IA12
2IA12,Selasa,Algoritma & Pemrograman 3 *,9/10,G454,ARY BIMA KURNIAWAN,2IA12
2IA12,Rabu,Legal Aspek Produk TI dan Komunik,1/2,G349,SITI CHODIDJAH,2IA12
2IA12,Rabu,Informatika Kesehatan,3/4,G349,OKTAVIANI,2IA12
2IA12,Rabu,Organisasi Sistem Komputer */**,6/7,G124,SITI SAIDAH,2IA12
2IA12,Rabu,Matematika Lanjut 1,8/9/10,G124,BONANG WASPADADI LIGAR,2IA12
2IA12,Kamis,Pengantar Sains Data,4/5,D626,ANISA LORA,2IA12
2IA12,Kamis,Statistika 1,8/9/10,D656,THOMAS WIDODO,2IA12
2IA12,Jum'at,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IA12
2IA13,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA13
2IA13,Selasa,Struktur Data **,1/2/3,G347,DIANA TRI SUSETIANINGTIAS,2IA13
2IA13,Selasa,Matematika Lanjut 1,4/5/6,G347,IFFATUL MARDHIYAH,2IA13
2IA13,Selasa,Matematika Informatika 3,8/9/10,G245,SELI SITI SHOLIHAT,2IA13
2IA13,Rabu,Organisasi Sistem Komputer */**,1/2,G343,INTAN MEUTIA SARI,2IA13
2IA13,Rabu,Legal Aspek Produk TI dan Komunik,3/4,G343,SITI CHODIDJAH,2IA13
2IA13,Rabu,Pengantar Sains Data,5/6,G343,RIZA ADRIANTI SUPONO,2IA13
2IA13,Rabu,Statistika 1,8/9/10,G442,IMAN MURTONO SOENHADJI,2IA13
2IA13,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IA13
2IA13,Kamis,Algoritma & Pemrograman 3 *,7/8,G433,FAUZIAH SUPARDI,2IA13
2IA13,Kamis,Informatika Kesehatan,9/10,G433,OKTAVIANI,2IA13
2IA14,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA14
2IA14,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2IA14
2IA14,Rabu,Legal Aspek Produk TI dan Komunik,1/2,E124,KOSDIANA,2IA14
2IA14,Rabu,Organisasi Sistem Komputer */**,3/4,E124,RANI PUSPITA,2IA14
2IA14,Rabu,Pengantar Sains Data,6/7,E348,PARNO,2IA14
2IA14,Rabu,Struktur Data **,8/9/10,E348,SAHNI DAMERIANTA P,2IA14
2IA14,Kamis,Matematika Informatika 3,4/5/6,G424,SUSI INDRATI,2IA14
2IA14,Kamis,Informatika Kesehatan,7/8,G424,OKTAVIANI,2IA14
2IA14,Jum'at,Matematika Lanjut 1,2/3/4,D654,EDI SUKIRMAN,2IA14
2IA14,Jum'at,Algoritma & Pemrograman 3 *,7/8,D654,JAMILAH,2IA14
2IA14,Sabtu,Statistika 1,1/2/3,E334,RACHMANSYAH,2IA14
2IA15,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA15
2IA15,Selasa,Matematika Informatika 3,1/2/3,E325,MURNI,2IA15
2IA15,Selasa,Informatika Kesehatan,4/5,E325,VIRA YOLANDA,2IA15
2IA15,Selasa,Matematika Lanjut 1,7/8/9,E512,TRI HANDHIKA,2IA15
2IA15,Kamis,Struktur Data **,1/2/3,G314,BETTY SUSWATI,2IA15
2IA15,Kamis,Organisasi Sistem Komputer */**,5/6,G223,RANI PUSPITA,2IA15
2IA15,Jum'at,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IA15
2IA15,Jum'at,Pengantar Sains Data,7/8,G316,ANISA LORA,2IA15
2IA15,Jum'at,Algoritma & Pemrograman 3 *,9/10,G316,ARY BIMA KURNIAWAN,2IA15
2IA15,Sabtu,Legal Aspek Produk TI dan Komunik,5/6,G138,IWAN,2IA15
2IA15,Sabtu,Statistika 1,8/9/10,G138,RACHMANSYAH,2IA15
2IA16,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA16
2IA16,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IA16
2IA16,Selasa,Informatika Kesehatan,6/7,E231,MOCHAMMAD WISUDA SARJONO,2IA16
2IA16,Selasa,Matematika Lanjut 1,8/9/10,E224,JULLYSAVA C AZIZ,2IA16
2IA16,Kamis,Pengantar Sains Data,1/2,D644,ANISA LORA,2IA16
2IA16,Kamis,Legal Aspek Produk TI dan Komunik,3/4,D644,IRFAN,2IA16
2IA16,Kamis,Statistika 1,6/7/8,D665,RINA SUGIARTI,2IA16
2IA16,Jum'at,Organisasi Sistem Komputer */**,1/2,G434,INTAN MEUTIA SARI,2IA16
2IA16,Jum'at,Algoritma & Pemrograman 3 *,3/4,G434,ARY BIMA KURNIAWAN,2IA16
2IA16,Jum'at,Struktur Data **,7/8/9,G144,SAHNI DAMERIANTA P,2IA16
2IA16,Sabtu,Matematika Informatika 3,4/5/6,G139,HILWAH NUR ISLAMIYANTI,2IA16
2IA17,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA17
2IA17,Selasa,Praktikum Komputasi Big Data,6/7,,TIM DOSEN,2IA17
2IA17,Rabu,Matematika Informatika 3,1/2/3,E435,DESTI RIMINARSIH,2IA17
2IA17,Rabu,Struktur Data **,5/6/7,E441,SAHNI DAMERIANTA P,2IA17
2IA17,Rabu,Matematika Lanjut 1,8/9/10,E441,EGA JULIA FAJARSARI,2IA17
2IA17,Kamis,Informatika Kesehatan,1/2,D645,MOCHAMMAD WISUDA SARJONO,2IA17
2IA17,Kamis,Statistika 1,3/4/5,D645,RINA SUGIARTI,2IA17
2IA17,Kamis,Pengantar Sains Data,7/8,D632,ANISA LORA,2IA17
2IA17,Jum'at,Organisasi Sistem Komputer */**,3/4,G135,INTAN MEUTIA SARI,2IA17
2IA17,Jum'at,Algoritma & Pemrograman 3 *,7/8,G236,ARY BIMA KURNIAWAN,2IA17
2IA17,Jum'at,Legal Aspek Produk TI dan Komunik,9/10,G236,PUJI ZULAIKASARI,2IA17
2IA18,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA18
2IA18,Selasa,Pengantar Sains Data,1/2,E434,PARNO,2IA18
2IA18,Selasa,Matematika Lanjut 1,4/5/6,E223,JULLYSAVA C AZIZ,2IA18
2IA18,Selasa,Informatika Kesehatan,7/8,E223,FEBRIYANTI ZULYANI,2IA18
2IA18,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IA18
2IA18,Jum'at,Struktur Data **,2/3/4,G233,SAHNI DAMERIANTA P,2IA18
2IA18,Jum'at,Algoritma & Pemrograman 3 *,7/8,G347,PRIYO SARJONO WIBOWO,2IA18
2IA18,Jum'at,Organisasi Sistem Komputer */**,9/10,G347,FEBRIANTI DWIANJANI,2IA18
2IA18,Sabtu,Matematika Informatika 3,1/2/3,G124,HILWAH NUR ISLAMIYANTI,2IA18
2IA18,Sabtu,Statistika 1,4/5/6,G124,RACHMANSYAH,2IA18
2IA18,Sabtu,Legal Aspek Produk TI dan Komunik,8/9,G124,IWAN,2IA18
2IA19,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA19
2IA19,Selasa,Statistika 1,4/5/6,J1410,KOMSI KORANTI,2IA19
2IA19,Selasa,Matematika Lanjut 1,7/8/9,J1410,DEWI PUTRIE LESTARI,2IA19
2IA19,Rabu,Pengantar Sains Data,4/5,J1310,LILIS RATNASARI,2IA19
2IA19,Rabu,Informatika Kesehatan,7/8,J1316B,DEVI INDRIANI,2IA19
2IA19,Kamis,Matematika Informatika 3,1/2/3,J1311,NOLA MARINA,2IA19
2IA19,Kamis,Legal Aspek Produk TI dan Komunik,4/5,J1311,NATALLIOS PETER SIPASULTA,2IA19
2IA19,Jum'at,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2IA19
2IA19,Sabtu,Struktur Data **,2/3/4,J1515A,AHYAD/ARIMBI KURNIASARI,2IA19
2IA19,Sabtu,Algoritma & Pemrograman 3 *,7/8,J1515A,WISNU SUKMA MAULANA,2IA19
2IA19,Sabtu,Organisasi Sistem Komputer */**,9/10,J1515A,PRITA EKASARI,2IA19
2IA20,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA20
2IA20,Selasa,Struktur Data **,1/2/3,J1115B,FARAMITA DWITAMA,2IA20
2IA20,Selasa,Informatika Kesehatan,4/5,J1115B,DEVI INDRIANI,2IA20
2IA20,Selasa,Praktikum Komputasi Big Data,6/7,,TIM DOSEN,2IA20
2IA20,Rabu,Pengantar Sains Data,1/2,J1110,LILIS RATNASARI,2IA20
2IA20,Rabu,Matematika Lanjut 1,3/4/5,J1110,TRI HANDHIKA,2IA20
2IA20,Rabu,Organisasi Sistem Komputer */**,7/8,J1415,LU'LU MAWADDAH WISUDAWATI,2IA20
2IA20,Rabu,Algoritma & Pemrograman 3 *,9/10,J1415,DEWI ANDRYANI,2IA20
2IA20,Kamis,Statistika 1,1/2/3,J124,TUBAGUS KIKI KAWAKIBI AZMI,2IA20
2IA20,Kamis,Matematika Informatika 3,4/5/6,J124,NOLA MARINA,2IA20
2IA20,Kamis,Legal Aspek Produk TI dan Komunik,8/9,J124,NATALLIOS PETER SIPASULTA,2IA20
2IA21,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA21
2IA21,Selasa,Matematika Lanjut 1,2/3/4,J1216A,DEWI PUTRIE LESTARI,2IA21
2IA21,Selasa,Informatika Kesehatan,6/7,J139,DEVI INDRIANI,2IA21
2IA21,Selasa,Matematika Informatika 3,8/9/10,J139,ILMIYATI SARI,2IA21
2IA21,Rabu,Struktur Data **,1/2/3,J1318,DIANA TRI SUSETIANINGTIAS,2IA21
2IA21,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IA21
2IA21,Jum'at,Algoritma & Pemrograman 3 *,3/4,J139,DEWI ANDRYANI,2IA21
2IA21,Jum'at,Legal Aspek Produk TI dan Komunik,7/8,J139,DEWI SUPARWATI,2IA21
2IA21,Jum'at,Pengantar Sains Data,9/10,J139,FARAMITA DWITAMA,2IA21
2IA21,Sabtu,Statistika 1,1/2/3,J133A,ADINDA NURUL HUDA M,2IA21
2IA21,Sabtu,Organisasi Sistem Komputer */**,4/5,J133A,PRITA EKASARI,2IA21
2IA22,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA22
2IA22,Selasa,Matematika Informatika 3,4/5/6,J1219,ILMIYATI SARI,2IA22
2IA22,Rabu,Algoritma & Pemrograman 3 *,1/2,J1515B,DEWI ANDRYANI,2IA22
2IA22,Rabu,Informatika Kesehatan,3/4,J1515B,DEVI INDRIANI,2IA22
2IA22,Rabu,Organisasi Sistem Komputer */**,5/6,J1515B,LU'LU MAWADDAH WISUDAWATI,2IA22
2IA22,Kamis,Legal Aspek Produk TI dan Komunik,2/3,J1515A,NATALLIOS PETER SIPASULTA,2IA22
2IA22,Kamis,Matematika Lanjut 1,5/6/7,J1515A,SRAVA CHRISDES ANTORO,2IA22
2IA22,Kamis,Struktur Data **,8/9/10,J1515A,YENI SETIANI,2IA22
2IA22,Jum'at,Statistika 1,2/3/4,J137,SUZANNA LAMRIA SIREGAR,2IA22
2IA22,Jum'at,Pengantar Sains Data,7/8,J133B,FARAMITA DWITAMA,2IA22
2IA22,Sabtu,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2IA22
2IA23,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA23
2IA23,Selasa,Matematika Informatika 3,1/2/3,J1311,ILMIYATI SARI,2IA23
2IA23,Selasa,Matematika Lanjut 1,4/5/6,J1311,FENI ANDRIANI,2IA23
2IA23,Rabu,Algoritma & Pemrograman 3 *,3/4,J1116,DEWI ANDRYANI,2IA23
2IA23,Rabu,Pengantar Sains Data,6/7,J1210,LILIS RATNASARI,2IA23
2IA23,Kamis,Struktur Data **,1/2/3,J1319,YENI SETIANI,2IA23
2IA23,Kamis,Informatika Kesehatan,6/7,J1319,DEVI INDRIANI,2IA23
2IA23,Jum'at,Organisasi Sistem Komputer */**,1/2,J118,DWI WIDIASTUTI,2IA23
2IA23,Jum'at,Legal Aspek Produk TI dan Komunik,3/4,J118,DEWI SUPARWATI,2IA23
2IA23,Jum'at,Statistika 1,7/8/9,J1312,SUZANNA LAMRIA SIREGAR,2IA23
2IA23,Sabtu,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2IA23
2IA24,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA24
2IA24,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IA24
2IA24,Selasa,Matematika Lanjut 1,1/2/3,J1415,FENI ANDRIANI,2IA24
2IA24,Selasa,Statistika 1,5/6/7,J129,ANITA WASUTININGSIH,2IA24
2IA24,Kamis,Informatika Kesehatan,3/4,J137,DEVI INDRIANI,2IA24
2IA24,Kamis,Struktur Data **,5/6/7,J137,YENI SETIANI,2IA24
2IA24,Jum'at,Pengantar Sains Data,3/4,J1111,FARAMITA DWITAMA,2IA24
2IA24,Jum'at,Algoritma & Pemrograman 3 *,7/8,J1111,DEWI ANDRYANI,2IA24
2IA24,Jum'at,Legal Aspek Produk TI dan Komunik,9/10,J1111,DEWI SUPARWATI,2IA24
2IA24,Sabtu,Organisasi Sistem Komputer */**,6/7,J118,PRITA EKASARI,2IA24
2IA24,Sabtu,Matematika Informatika 3,8/9/10,J118,AMELIA NUGRAENI,2IA24
2IA25,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IA25
2IA25,Selasa,Algoritma & Pemrograman 3 *,1/2,L226,NAELI UMNIATI,2IA25
2IA25,Selasa,Struktur Data **,5/6/7,L241,YENI SETIANI,2IA25
2IA25,Rabu,Statistika 1,2/3/4,L222,RINA SUGIARTI,2IA25
2IA25,Kamis,Informatika Kesehatan,4/5,L242,WINNIE TUNGGAL MUTIKA,2IA25
2IA25,Jum'at,Matematika Lanjut 1,2/3/4,L226,MUFID NILMADA,2IA25
2IA25,Jum'at,Matematika Informatika 3,7/8/9,L226,ICHSANI MURSIDAH,2IA25
2IA25,Sabtu,Pengantar Sains Data,1/2,L222,HADYAN MARDHI FADLILLAH,2IA25
2IA25,Sabtu,Organisasi Sistem Komputer */**,3/4,L222,SITI SAIDAH,2IA25
2IA25,Sabtu,Legal Aspek Produk TI dan Komunik,5/6,L234,HURNANINGSIH,2IA25
2IA25,Sabtu,Praktikum Komputasi Big Data,8/9,,TIM DOSEN,2IA25
2IA26,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IA26
3IA01,Senin,Pemrograman WEB **,3/4,G249,WIDYA KHAFA NOFA,3IA01
3IA01,Senin,Sistem Keamanan Komputer,5/6,G249,BINTANG EKA PUTERA,3IA01
3IA01,Senin,Kecerdasan Artificial **,7/8,G249,OCTAVIANI HUTAPEA,3IA01
3IA01,Selasa,Grafik Komputer 1 **,1/2/3,D655,ARIES MUSLIM,3IA01
3IA01,Selasa,Interaksi Manusia & Komputer */**,4/5/6,D655,TAVIPIA RUMAMBI,3IA01
3IA01,Selasa,Sistem Basis Data 1 **,8/9/10,D655,ELLY AGUSTINA JULISAWATI,3IA01
3IA01,Kamis,Peranc. & Analisis Algoritma */**,2/3/4,F8443,MUFID NILMADA,3IA01
3IA01,Kamis,Jaringan Komputer */**,7/8/9,F8445,MOCHAMMAD AKBAR MARWAN,3IA01
3IA02,Senin,Peranc. & Analisis Algoritma */**,1/2/3,G433,MIFTAH ANDRIANSYAH,3IA02
3IA02,Senin,Sistem Keamanan Komputer,5/6,G432,MISSA LAMSANI,3IA02
3IA02,Rabu,Interaksi Manusia & Komputer */**,1/2/3,E215,SARIFUDDIN MADENDA/DEA ADLINA,3IA02
3IA02,Rabu,Sistem Basis Data 1 **,4/5/6,E215,A. RAMADONA NILAWATI/HURNANINGSIH,3IA02
3IA02,Rabu,Pemrograman WEB **,8/9,E131,WIDYA KHAFA NOFA,3IA02
3IA02,Kamis,Jaringan Komputer */**,1/2/3,E236,JAYA MUHRIATNA,3IA02
3IA02,Kamis,Kecerdasan Artificial **,4/5,E236,BHETA AGUS WARDIJONO,3IA02
3IA02,Kamis,Grafik Komputer 1 **,8/9/10,E423,KARMILASARI,3IA02
3IA03,Senin,Pemrograman WEB **,1/2,G2410,WIDYA KHAFA NOFA,3IA03
3IA03,Senin,Sistem Keamanan Komputer,3/4,G2410,MISSA LAMSANI,3IA03
3IA03,Selasa,Jaringan Komputer */**,1/2/3,E314,MOCHAMMAD AKBAR MARWAN,3IA03
3IA03,Selasa,Interaksi Manusia & Komputer */**,5/6/7,E323,MEILANI B SIREGAR,3IA03
3IA03,Rabu,Sistem Basis Data 1 **,1/2/3,E214,A. RAMADONA NILAWATI/SAHNI DAMERIANTAP,3IA03
3IA03,Rabu,Kecerdasan Artificial **,4/5,E214,FEBRIANTI DWIANJANI,3IA03
3IA03,Sabtu,Peranc. & Analisis Algoritma */**,5/6/7,D645,ARIEF FADHLURRAHMAN RASYID,3IA03
3IA03,Sabtu,Grafik Komputer 1 **,8/9/10,D645,SURYADI M. T,3IA03
3IA04,Selasa,Sistem Basis Data 1 **,1/2/3,G452,SANTI WIDIANTI,3IA04
3IA04,Selasa,Grafik Komputer 1 **,4/5/6,G452,AGUNG SLAMET RIYADI,3IA04
3IA04,Selasa,Jaringan Komputer */**,8/9/10,G452,JAYA MUHRIATNA,3IA04
3IA04,Rabu,Interaksi Manusia & Komputer */**,4/5/6,E213,TAUFIK HIDAYAT,3IA04
3IA04,Rabu,Kecerdasan Artificial **,8/9,E121,FEBRIANTI DWIANJANI,3IA04
3IA04,Sabtu,Sistem Keamanan Komputer,1/2,D624,ALBERTUS BAYU AJI PRIYONO,3IA04
3IA04,Sabtu,Pemrograman WEB **,3/4,D624,YUDI TRIYANA,3IA04
3IA04,Sabtu,Peranc. & Analisis Algoritma */**,6/7/8,D635,ERICK ORLANDO,3IA04
3IA05,Senin,Peranc. & Analisis Algoritma */**,1/2/3,D652,MUFID NILMADA,3IA05
3IA05,Senin,Grafik Komputer 1 **,4/5/6,D652,ARIES MUSLIM,3IA05
3IA05,Senin,Interaksi Manusia & Komputer */**,8/9/10,D625,FAUZIAH KASYFI,3IA05
3IA05,Rabu,Sistem Keamanan Komputer,1/2,E524,ANNISA RAHMASYHARI,3IA05
3IA05,Rabu,Pemrograman WEB **,3/4,E524,PRIYO SARJONO WIBOWO,3IA05
3IA05,Rabu,Kecerdasan Artificial **,6/7,E235,MOCHAMMAD WISUDA SARJONO,3IA05
3IA05,Kamis,Jaringan Komputer */**,1/2/3,E212,SUNARKO,3IA05
3IA05,Kamis,Sistem Basis Data 1 **,4/5/6,E212,YULI KARYANTI,3IA05
3IA06,Senin,Interaksi Manusia & Komputer */**,1/2/3,D613,FAUZIAH KASYFI,3IA06
3IA06,Senin,Peranc. & Analisis Algoritma */**,5/6/7,D633,MIFTAH ANDRIANSYAH,3IA06
3IA06,Senin,Grafik Komputer 1 **,8/9/10,D633,ARIES MUSLIM,3IA06
3IA06,Selasa,Kecerdasan Artificial **,1/2,D612,REZA CHANDRA,3IA06
3IA06,Selasa,Sistem Keamanan Komputer,4/5,D661,ANDREAS HADIYONO,3IA06
3IA06,Rabu,Pemrograman WEB **,5/6,E413,WIDYA KHAFA NOFA,3IA06
3IA06,Rabu,Sistem Basis Data 1 **,7/8/9,E215,A. RAMADONA NILAWATI/HURNANINGSIH,3IA06
3IA06,Jum'at,Jaringan Komputer */**,7/8/9,G132,MOCHAMMAD AKBAR MARWAN,3IA06
3IA07,Rabu,Grafik Komputer 1 **,1/2/3,D641,KARMILASARI,3IA07
3IA07,Rabu,Pemrograman WEB **,6/7,D636,SURYARINI WIDODO,3IA07
3IA07,Rabu,Interaksi Manusia & Komputer */**,8/9/10,D636,ABDUS SYAKUR,3IA07
3IA07,Kamis,Kecerdasan Artificial **,1/2,E233,BHETA AGUS WARDIJONO,3IA07
3IA07,Kamis,Jaringan Komputer */**,4/5/6,E327,MAULANA MUJAHIDIN,3IA07
3IA07,Kamis,Sistem Basis Data 1 **,8/9/10,E326,YULIA CHALRI,3IA07
3IA07,Sabtu,Peranc. & Analisis Algoritma */**,1/2/3,D625,ERICK ORLANDO,3IA07
3IA07,Sabtu,Sistem Keamanan Komputer,4/5,D625,ALFIE SYAHRI,3IA07
3IA08,Senin,Jaringan Komputer */**,4/5/6,G142,EMY HARYATMI,3IA08
3IA08,Senin,Sistem Keamanan Komputer,7/8,G142,BINTANG EKA PUTERA,3IA08
3IA08,Senin,Pemrograman WEB **,9/10,G142,WIDYA KHAFA NOFA,3IA08
3IA08,Selasa,Interaksi Manusia & Komputer */**,1/2/3,G313,MEILANI B SIREGAR,3IA08
3IA08,Selasa,Peranc. & Analisis Algoritma */**,4/5/6,G313,WITTA LISTIYA NINGRUM,3IA08
3IA08,Selasa,Grafik Komputer 1 **,8/9/10,G445,AGUNG SLAMET RIYADI,3IA08
3IA08,Kamis,Kecerdasan Artificial **,1/2,D662,RESTU SAPUTRO,3IA08
3IA08,Kamis,Sistem Basis Data 1 **,4/5/6,D655,MUJI SANTOSO,3IA08
3IA09,Rabu,Peranc. & Analisis Algoritma */**,1/2/3,D631,MUFID NILMADA,3IA09
3IA09,Rabu,Interaksi Manusia & Komputer */**,4/5/6,D631,ABDUS SYAKUR,3IA09
3IA09,Rabu,Jaringan Komputer */**,8/9/10,D631,YUDI ADHA,3IA09
3IA09,Kamis,Kecerdasan Artificial **,6/7,E513,BHETA AGUS WARDIJONO,3IA09
3IA09,Kamis,Sistem Basis Data 1 **,8/9/10,E513,YULI KARYANTI,3IA09
3IA09,Sabtu,Grafik Komputer 1 **,1/2/3,D642,SURYADI M. T,3IA09
3IA09,Sabtu,Sistem Keamanan Komputer,5/6,D642,ALBERTUS BAYU AJI PRIYONO,3IA09
3IA09,Sabtu,Pemrograman WEB **,7/8,D642,YUDI TRIYANA,3IA09
3IA10,Selasa,Interaksi Manusia & Komputer */**,1/2/3,D661,TAVIPIA RUMAMBI,3IA10
3IA10,Selasa,Sistem Basis Data 1 **,5/6/7,D643,ELLY AGUSTINA JULISAWATI,3IA10
3IA10,Selasa,Sistem Keamanan Komputer,8/9,D643,ANDREAS HADIYONO,3IA10
3IA10,Rabu,Pemrograman WEB **,3/4,E331,RHEZA ANDIKA,3IA10
3IA10,Rabu,Peranc. & Analisis Algoritma */**,5/6/7,E331,MIFTAH ANDRIANSYAH,3IA10
3IA10,Kamis,Jaringan Komputer */**,1/2/3,E441,MAULANA MUJAHIDIN,3IA10
3IA10,Kamis,Grafik Komputer 1 **,4/5/6,E441,ITAR MINTARSIH,3IA10
3IA10,Kamis,Kecerdasan Artificial **,8/9,E336,BHETA AGUS WARDIJONO,3IA10
3IA11,Senin,Sistem Basis Data 1 **,1/2/3,D621,BABY LOLITA BASYAH,3IA11
3IA11,Senin,Interaksi Manusia & Komputer */**,4/5/6,D621,FAUZIAH KASYFI,3IA11
3IA11,Senin,Peranc. & Analisis Algoritma */**,8/9/10,D613,MIFTAH ANDRIANSYAH,3IA11
3IA11,Selasa,Sistem Keamanan Komputer,1/2,D662,ANDREAS HADIYONO,3IA11
3IA11,Selasa,Jaringan Komputer */**,4/5/6,D614,JAYA MUHRIATNA,3IA11
3IA11,Sabtu,Pemrograman WEB **,1/2,D613,YUDI TRIYANA,3IA11
3IA11,Sabtu,Grafik Komputer 1 **,4/5/6,D613,SURYADI M. T,3IA11
3IA11,Sabtu,Kecerdasan Artificial **,9/10,D613,RESTU SAPUTRO,3IA11
3IA12,Selasa,Peranc. & Analisis Algoritma */**,1/2/3,E515,MUFID NILMADA,3IA12
3IA12,Selasa,Sistem Keamanan Komputer,4/5,E515,ROBBY CANDRA,3IA12
3IA12,Selasa,Sistem Basis Data 1 **,7/8/9,E129,YULIA CHALRI,3IA12
3IA12,Rabu,Kecerdasan Artificial **,1/2,E235,OCTAVIANI HUTAPEA,3IA12
3IA12,Rabu,Interaksi Manusia & Komputer */**,4/5/6,E217,DEA ADLINA,3IA12
3IA12,Rabu,Pemrograman WEB **,7/8,E321,PRIYO SARJONO WIBOWO,3IA12
3IA12,Kamis,Grafik Komputer 1 **,1/2/3,E427,KARMILASARI,3IA12
3IA12,Kamis,Jaringan Komputer */**,4/5/6,E427,JAYA MUHRIATNA,3IA12
3IA13,Senin,Pemrograman WEB **,3/4,E315,BERTALYA,3IA13
3IA13,Senin,Grafik Komputer 1 **,6/7/8,E322,AGUNG SLAMET RIYADI,3IA13
3IA13,Selasa,Peranc. & Analisis Algoritma */**,1/2/3,G223,WITTA LISTIYA NINGRUM,3IA13
3IA13,Selasa,Sistem Basis Data 1 **,4/5/6,G223,BABY LOLITA BASYAH,3IA13
3IA13,Selasa,Sistem Keamanan Komputer,8/9,G223,ANNISA RAHMASYHARI,3IA13
3IA13,Rabu,Interaksi Manusia & Komputer */**,1/2/3,E213,TAUFIK HIDAYAT,3IA13
3IA13,Rabu,Jaringan Komputer */**,4/5/6,E121,CECEP SUPRAYOGI,3IA13
3IA13,Rabu,Kecerdasan Artificial **,8/9,E235,MOCHAMMAD WISUDA SARJONO,3IA13
3IA14,Selasa,Sistem Basis Data 1 **,1/2/3,G229,BABY LOLITA BASYAH,3IA14
3IA14,Selasa,Sistem Keamanan Komputer,5/6,G229,ANNISA RAHMASYHARI,3IA14
3IA14,Selasa,Peranc. & Analisis Algoritma */**,7/8/9,G229,WITTA LISTIYA NINGRUM,3IA14
3IA14,Kamis,Interaksi Manusia & Komputer */**,1/2/3,D632,MEILANI B SIREGAR,3IA14
3IA14,Kamis,Kecerdasan Artificial **,5/6,D652,RESTU SAPUTRO,3IA14
3IA14,Kamis,Pemrograman WEB **,7/8,D652,RHEZA ANDIKA,3IA14
3IA14,Jum'at,Jaringan Komputer */**,2/3/4,G148,MOCHAMMAD AKBAR MARWAN,3IA14
3IA14,Jum'at,Grafik Komputer 1 **,7/8/9,G148,RATIH NURDIYANI SARI,3IA14
3IA15,Senin,Sistem Basis Data 1 **,1/2/3,G112,HURNANINGSIH,3IA15
3IA15,Senin,Pemrograman WEB **,5/6,G442,WIDYA KHAFA NOFA,3IA15
3IA15,Senin,Sistem Keamanan Komputer,7/8,G114,MISSA LAMSANI,3IA15
3IA15,Senin,Kecerdasan Artificial **,9/10,G114,OCTAVIANI HUTAPEA,3IA15
3IA15,Rabu,Peranc. & Analisis Algoritma */**,3/4/5,D655,RISMA RAHMALIA FITRIANI,3IA15
3IA15,Kamis,Jaringan Komputer */**,1/2/3,E514,CECEP SUPRAYOGI,3IA15
3IA15,Kamis,Grafik Komputer 1 **,5/6/7,E424,KARMILASARI,3IA15
3IA15,Kamis,Interaksi Manusia & Komputer */**,8/9/10,E424,ABDUS SYAKUR,3IA15
3IA16,Senin,Jaringan Komputer */**,3/4/5,E322,YUDI ADHA,3IA16
3IA16,Selasa,Sistem Basis Data 1 **,1/2/3,D614,MURNIYATI,3IA16
3IA16,Selasa,Peranc. & Analisis Algoritma */**,5/6/7,D666,RISMA RAHMALIA FITRIANI,3IA16
3IA16,Selasa,Interaksi Manusia & Komputer */**,8/9/10,D666,TAVIPIA RUMAMBI,3IA16
3IA16,Rabu,Pemrograman WEB **,1/2,E434,PRIYO SARJONO WIBOWO,3IA16
3IA16,Rabu,Sistem Keamanan Komputer,3/4,E434,ANNISA RAHMASYHARI,3IA16
3IA16,Rabu,Kecerdasan Artificial **,6/7,E233,FEBRIANTI DWIANJANI,3IA16
3IA16,Rabu,Grafik Komputer 1 **,8/9/10,E233,ITAR MINTARSIH,3IA16
3IA17,Senin,Pemrograman WEB **,1/2,D631,EGA HEGARINI,3IA17
3IA17,Senin,Kecerdasan Artificial **,4/5,D632,REZA CHANDRA,3IA17
3IA17,Senin,Sistem Basis Data 1 **,6/7/8,D632,BABY LOLITA BASYAH,3IA17
3IA17,Selasa,Interaksi Manusia & Komputer */**,1/2/3,E223,DEA ADLINA,3IA17
3IA17,Selasa,Sistem Keamanan Komputer,6/7,E318,SWELANDIAH ENDAH PRATIWI,3IA17
3IA17,Selasa,Peranc. & Analisis Algoritma */**,8/9/10,E318,RISMA RAHMALIA FITRIANI,3IA17
3IA17,Kamis,Grafik Komputer 1 **,4/5/6,E444,FAUZIAH SUPARDI,3IA17
3IA17,Kamis,Jaringan Komputer */**,8/9/10,E332,MAULANA MUJAHIDIN,3IA17
3IA18,Senin,Pemrograman WEB **,1/2,E314,BERTALYA,3IA18
3IA18,Senin,Kecerdasan Artificial **,3/4,E314,OCTAVIANI HUTAPEA,3IA18
3IA18,Senin,Interaksi Manusia & Komputer */**,5/6/7,E314,TAVIPIA RUMAMBI,3IA18
3IA18,Senin,Sistem Keamanan Komputer,9/10,E211,BINTANG EKA PUTERA,3IA18
3IA18,Rabu,Sistem Basis Data 1 **,1/2/3,E423,SURYADI HARMANTO/BUNAWAN,3IA18
3IA18,Rabu,Grafik Komputer 1 **,5/6/7,E346,ITAR MINTARSIH,3IA18
3IA18,Rabu,Jaringan Komputer */**,8/9/10,E346,CECEP SUPRAYOGI,3IA18
3IA18,Jum'at,Peranc. & Analisis Algoritma */**,2/3/4,D664,RAMA DIAN SYAH,3IA18
3IA19,Selasa,Grafik Komputer 1 **,1/2/3,G343,AGUNG SLAMET RIYADI,3IA19
3IA19,Selasa,Sistem Basis Data 1 **,5/6/7,G237,SANTI WIDIANTI,3IA19
3IA19,Selasa,Jaringan Komputer */**,8/9/10,G237,SUNARKO,3IA19
3IA19,Rabu,Pemrograman WEB **,3/4,E244,SURYARINI WIDODO,3IA19
3IA19,Rabu,Interaksi Manusia & Komputer */**,7/8/9,E218,DEA ADLINA,3IA19
3IA19,Sabtu,Sistem Keamanan Komputer,1/2,D612,ALFIE SYAHRI,3IA19
3IA19,Sabtu,Kecerdasan Artificial **,4/5,D612,RESTU SAPUTRO,3IA19
3IA19,Sabtu,Peranc. & Analisis Algoritma */**,8/9/10,D612,ARIEF FADHLURRAHMAN RASYID,3IA19
3IA20,Senin,Kecerdasan Artificial **,1/2,D654,REZA CHANDRA,3IA20
3IA20,Senin,Pemrograman WEB **,3/4,D654,EGA HEGARINI,3IA20
3IA20,Senin,Sistem Basis Data 1 **,6/7/8,D635,HURNANINGSIH,3IA20
3IA20,Selasa,Peranc. & Analisis Algoritma */**,1/2/3,E245,ARIEF FADHLURRAHMAN RASYID,3IA20
3IA20,Selasa,Interaksi Manusia & Komputer */**,4/5/6,E314,DEA ADLINA,3IA20
3IA20,Selasa,Sistem Keamanan Komputer,8/9,E442,ROBBY CANDRA,3IA20
3IA20,Kamis,Grafik Komputer 1 **,1/2/3,E242,FAUZIAH SUPARDI,3IA20
3IA20,Kamis,Jaringan Komputer */**,4/5/6,E242,CECEP SUPRAYOGI,3IA20
3IA21,Senin,Peranc. & Analisis Algoritma */**,5/6/7,J133A,KUWAT SETIYANTO,3IA21
3IA21,Selasa,Sistem Basis Data 1 **,1/2/3,J1310,ONNY MARLEEN,3IA21
3IA21,Selasa,Interaksi Manusia & Komputer */**,4/5/6,J1310,HADYAN MARDHI FADLILLAH,3IA21
3IA21,Selasa,Jaringan Komputer */**,8/9/10,J1310,I KOMANG SUGIARTHA,3IA21
3IA21,Kamis,Sistem Keamanan Komputer,1/2,J422,RIFKI AMALIA,3IA21
3IA21,Kamis,Pemrograman WEB **,3/4,J422,PERTIWI MULYA NURLAILY/FIKRI FADDLILLAH,3IA21
3IA21,Kamis,Kecerdasan Artificial **,6/7,J422,MILDA SAFRILA OKTIANA,3IA21
3IA21,Kamis,Grafik Komputer 1 **,8/9/10,J422,DWI WIDIASTUTI,3IA21
3IA22,Selasa,Jaringan Komputer */**,1/2/3,J1114,I KOMANG SUGIARTHA,3IA22
3IA22,Selasa,Sistem Basis Data 1 **,4/5/6,J1114,RINA NOVIANA,3IA22
3IA22,Selasa,Interaksi Manusia & Komputer */**,8/9/10,J1114,NELLY SOFI,3IA22
3IA22,Kamis,Kecerdasan Artificial **,3/4,J417,DWI KARTINAH,3IA22
3IA22,Kamis,Grafik Komputer 1 **,5/6/7,J417,FIKRI FADLILLAH,3IA22
3IA22,Kamis,Sistem Keamanan Komputer,9/10,J417,PERTIWI MULYA NULAILY/RIFKI AMALIA,3IA22
3IA22,Sabtu,Pemrograman WEB **,1/2,J1524,ERNI WIGATI,3IA22
3IA22,Sabtu,Peranc. & Analisis Algoritma */**,4/5/6,J154,KUWAT SETIYANTO,3IA22
3IA23,Selasa,Sistem Basis Data 1 **,1/2/3,J1212,RINA NOVIANA,3IA23
3IA23,Selasa,Jaringan Komputer */**,4/5/6,J1212,I KOMANG SUGIARTHA,3IA23
3IA23,Selasa,Interaksi Manusia & Komputer */**,8/9/10,J1212,HADYAN MARDHI FADLILLAH,3IA23
3IA23,Kamis,Kecerdasan Artificial **,1/2,J414,DWI KARTINAH,3IA23
3IA23,Kamis,Grafik Komputer 1 **,4/5/6,J414,DWI WIDIASTUTI,3IA23
3IA23,Kamis,Sistem Keamanan Komputer,7/8,J414,PERTIWI MULYA NULAILY/RIFKI AMALIA,3IA23
3IA23,Sabtu,Pemrograman WEB **,4/5,J157,ERNI WIGATI,3IA23
3IA23,Sabtu,Peranc. & Analisis Algoritma */**,6/7/8,J157,DESSY TRI ANGGRAENI,3IA23
3IA24,Senin,Kecerdasan Artificial **,1/2,J1115B,YUTI DEWITA ARIMBI,3IA24
3IA24,Senin,Interaksi Manusia & Komputer */**,4/5/6,J1115B,NELLY SOFI,3IA24
3IA24,Senin,Peranc. & Analisis Algoritma */**,8/9/10,J1115B,KUWAT SETIYANTO,3IA24
3IA24,Rabu,Sistem Basis Data 1 **,5/6/7,J1516A,ONNY MARLEEN,3IA24
3IA24,Kamis,Grafik Komputer 1 **,1/2/3,J418,DWI WIDIASTUTI,3IA24
3IA24,Kamis,Sistem Keamanan Komputer,5/6,J418,PERTIWI MULYA NULAILY/RIFKI AMALIA,3IA24
3IA24,Sabtu,Jaringan Komputer */**,1/2/3,J60902,NURDIYANTO YUSUF,3IA24
3IA24,Sabtu,Pemrograman WEB **,5/6,J60902,DIA RAGASARI,3IA24
3IA25,Rabu,Jaringan Komputer */**,1/2/3,J1524,KARTIKA NOR RAMADHA,3IA25
3IA25,Rabu,Interaksi Manusia & Komputer */**,4/5/6,J1524,DEWI LUQI PUSPITASARI,3IA25
3IA25,Rabu,Sistem Basis Data 1 **,8/9/10,J1110,ONNY MARLEEN,3IA25
3IA25,Kamis,Sistem Keamanan Komputer,3/4,J421,WINDY DWIPARASWATI,3IA25
3IA25,Kamis,Grafik Komputer 1 **,6/7/8,J421,ATIT PERTIWI,3IA25
3IA25,Kamis,Kecerdasan Artificial **,9/10,J421,MILDA SAFRILA OKTIANA,3IA25
3IA25,Sabtu,Pemrograman WEB **,1/2,J60906,DIA RAGASARI,3IA25
3IA25,Sabtu,Peranc. & Analisis Algoritma */**,3/4/5,J60906,NUNING KHANIF AULIA,3IA25
3IA26,Rabu,Sistem Basis Data 1 **,1/2/3,J1614,LELY PRANANINGRUM,3IA26
3IA26,Rabu,Jaringan Komputer */**,4/5/6,J1614,KARTIKA NOR RAMADHA,3IA26
3IA26,Rabu,Interaksi Manusia & Komputer */**,8/9/10,J159,DEWI LUQI PUSPITASARI,3IA26
3IA26,Kamis,Sistem Keamanan Komputer,1/2,J416,WINDY DWIPARASWATI,3IA26
3IA26,Kamis,Grafik Komputer 1 **,3/4/5,J416,ATIT PERTIWI,3IA26
3IA26,Kamis,Kecerdasan Artificial **,7/8,J416,DWI KARTINAH,3IA26
3IA26,Sabtu,Peranc. & Analisis Algoritma */**,1/2/3,J148,KUWAT SETIYANTO,3IA26
3IA26,Sabtu,Pemrograman WEB **,4/5,J148,KHALIDAH,3IA26
3IA27,Senin,Interaksi Manusia & Komputer */**,1/2/3,J1316B,NELLY SOFI,3IA27
3IA27,Senin,Kecerdasan Artificial **,4/5,J1316B,YUTI DEWITA ARIMBI,3IA27
3IA27,Selasa,Sistem Basis Data 1 **,5/6/7,J128,ONNY MARLEEN,3IA27
3IA27,Kamis,Pemrograman WEB **,1/2,J415,PERTIWI MULYA NURLAILY/FIKRI FADDLILLAH,3IA27
3IA27,Kamis,Sistem Keamanan Komputer,3/4,J415,RIFKI AMALIA,3IA27
3IA27,Kamis,Grafik Komputer 1 **,8/9/10,J415,FIKRI FADLILLAH,3IA27
3IA27,Sabtu,Peranc. & Analisis Algoritma */**,1/2/3,J60901,WAHAB SUKORAHARJO,3IA27
3IA27,Sabtu,Jaringan Komputer */**,4/5/6,J60901,NURDIYANTO YUSUF,3IA27
3IA28,Senin,Sistem Keamanan Komputer,2/3,L226,ROBBY CANDRA,3IA28
3IA28,Senin,Kecerdasan Artificial **,5/6,L222,ASEP JUARNA,3IA28
3IA28,Rabu,Interaksi Manusia & Komputer */**,2/3/4,L226,AVIARINI INDRATI,3IA28
3IA28,Rabu,Jaringan Komputer */**,5/6/7,L226,MAULANA MUJAHIDIN,3IA28
3IA28,Kamis,Pemrograman WEB **,2/3,L223,SETIA WIRAWAN,3IA28
3IA28,Jum'at,Grafik Komputer 1 **,2/3/4,L246,REMI SENJAYA,3IA28
3IA28,Jum'at,Peranc. & Analisis Algoritma */**,7/8/9,L234,MUFID NILMADA,3IA28
3IA28,Sabtu,Sistem Basis Data 1 **,2/3/4,L234,HURNANINGSIH,3IA28
4IA01,Rabu,Teknik Kompilasi **,1/2/3,E314,ERNASTUTI,4IA01
4IA01,Rabu,Pengel. Proyek Perangkat Lunak,5/6/7,E334,NAELI UMNIATI,4IA01
4IA01,Rabu,Pengolahan Citra,8/9,E334,ERICKS RACHMAT SWEDIA,4IA01
4IA01,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA01
4IA01,Kamis,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4IA01
4IA01,Jum'at,Bahasa Inggris Bisnis 1,3/4,E448,DEFI JULIANTI,4IA01
4IA01,Jum'at,Forensik Teknologi Informasi,7/8,E448,EMY HARYATMI,4IA01
4IA01,Sabtu,Rekayasa Perangkat Lunak 2 */**,3/4,G136,KOMANG ANOM BUDI UTAMA,4IA01
4IA01,Sabtu,Algoritma Deep Learning,5/6,G136,INDAH WAHYUNI,4IA01
4IA01,Sabtu,Pemodelan dan Simulasi,8/9/10,G139,FITRIA HANDAYANI SIBURIAN,4IA01
4IA02,Senin,Forensik Teknologi Informasi,1/2,E318,EMY HARYATMI,4IA02
4IA02,Senin,Pengolahan Citra,3/4,E318,ADANG SUHENDRA,4IA02
4IA02,Senin,Algoritma Deep Learning,6/7,E316,ERI PRASETYO WIBOWO,4IA02
4IA02,Senin,Pengel. Proyek Perangkat Lunak,8/9/10,E316,DHARMAYANTI,4IA02
4IA02,Rabu,Pemodelan dan Simulasi,1/2/3,E327,YUHILZA HANUM,4IA02
4IA02,Rabu,Teknik Kompilasi **,4/5/6,E327,SULISTYO PUSPITODJATI,4IA02
4IA02,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA02
4IA02,Kamis,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4IA02
4IA02,Jum'at,Rekayasa Perangkat Lunak 2 */**,1/2,E446,HENNY MEDYAWATI,4IA02
4IA02,Jum'at,Bahasa Inggris Bisnis 1,3/4,E446,ATIKA LISTYA,4IA02
4IA03,Senin,Rekayasa Perangkat Lunak 2 */**,4/5,F8463,SURYARINI WIDODO,4IA03
4IA03,Senin,Pengolahan Citra,7/8,F8454,ERICKS RACHMAT SWEDIA,4IA03
4IA03,Selasa,Pengel. Proyek Perangkat Lunak,2/3/4,G137,DHARMAYANTI,4IA03
4IA03,Selasa,Teknik Kompilasi **,5/6/7,G137,REMI SENJAYA,4IA03
4IA03,Selasa,Bahasa Inggris Bisnis 1,9/10,G133,SUYUDI,4IA03
4IA03,Rabu,Algoritma Deep Learning,1/2,E325,INDAH WAHYUNI,4IA03
4IA03,Rabu,Forensik Teknologi Informasi,3/4,E325,YUDI ADHA,4IA03
4IA03,Rabu,Pemodelan dan Simulasi,5/6/7,E325,YUHILZA HANUM,4IA03
4IA03,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA03
4IA03,Kamis,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4IA03
4IA04,Senin,Pengel. Proyek Perangkat Lunak,1/2/3,E324,LINTANG YUNIAR BANOWOSARI,4IA04
4IA04,Senin,Bahasa Inggris Bisnis 1,5/6,E323,SUYUDI,4IA04
4IA04,Senin,Pemodelan dan Simulasi,8/9/10,E133,YUDI SATRIA,4IA04
4IA04,Selasa,Teknik Kompilasi **,1/2/3,G422,MAUKAR,4IA04
4IA04,Selasa,Pengolahan Citra,4/5,G422,IVAN MAURITS,4IA04
4IA04,Selasa,Forensik Teknologi Informasi,8/9,G422,BINTANG EKA PUTERA,4IA04
4IA04,Rabu,Algoritma Deep Learning,1/2,E425,WINDA WIDYA ARIESTYA,4IA04
4IA04,Rabu,Rekayasa Perangkat Lunak 2 */**,3/4,E425,LINDA HANDAYANI,4IA04
4IA04,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA04
4IA04,Jum'at,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA04
4IA05,Senin,Rekayasa Perangkat Lunak 2 */**,1/2,F8481,SURYARINI WIDODO,4IA05
4IA05,Senin,Forensik Teknologi Informasi,3/4,F8481,VIVIEN NOVA FITHRIANA,4IA05
4IA05,Selasa,Pengolahan Citra,4/5,D642,ACHMAD BENNY MUTIARA QN,4IA05
4IA05,Selasa,Algoritma Deep Learning,7/8,D646,INDAH WAHYUNI,4IA05
4IA05,Selasa,Bahasa Inggris Bisnis 1,9/10,D646,TEGAR ARIF TOPAN,4IA05
4IA05,Rabu,Teknik Kompilasi **,1/2/3,E342,MUHAMMAD EDY SUPRIYADI,4IA05
4IA05,Rabu,Pemodelan dan Simulasi,5/6/7,E517,ASEP JUARNA,4IA05
4IA05,Rabu,Pengel. Proyek Perangkat Lunak,8/9/10,E517,NAELI UMNIATI,4IA05
4IA05,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA05
4IA05,Jum'at,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA05
4IA06,Senin,Pemodelan dan Simulasi,1/2/3,E226,YUDI SATRIA,4IA06
4IA06,Senin,Pengolahan Citra,4/5,E226,ERICKS RACHMAT SWEDIA,4IA06
4IA06,Senin,Bahasa Inggris Bisnis 1,7/8,E128,MISI ELISA FATIMAH,4IA06
4IA06,Rabu,Teknik Kompilasi **,1/2/3,E324,SULISTYO PUSPITODJATI,4IA06
4IA06,Rabu,Pengel. Proyek Perangkat Lunak,4/5/6,E324,GUNTUR EKA SAPUTRA,4IA06
4IA06,Rabu,Rekayasa Perangkat Lunak 2 */**,8/9,E335,LINDA HANDAYANI,4IA06
4IA06,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA06
4IA06,Jum'at,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA06
4IA06,Sabtu,Forensik Teknologi Informasi,3/4,D655,JUWITA UTAMI PUTRI,4IA06
4IA06,Sabtu,Algoritma Deep Learning,6/7,D655,ROSNY GONIDJAYA,4IA06
4IA07,Senin,Forensik Teknologi Informasi,6/7,E324,YUDI ADHA,4IA07
4IA07,Senin,Algoritma Deep Learning,8/9,E324,ERI PRASETYO WIBOWO,4IA07
4IA07,Selasa,Pengolahan Citra,1/2,G113,IVAN MAURITS,4IA07
4IA07,Selasa,Teknik Kompilasi **,4/5/6,G128,SULISTYO PUSPITODJATI,4IA07
4IA07,Selasa,Pengel. Proyek Perangkat Lunak,7/8/9,G128,DHARMAYANTI,4IA07
4IA07,Rabu,Rekayasa Perangkat Lunak 2 */**,3/4,G242,ELYNA FAZRIYATI,4IA07
4IA07,Rabu,Bahasa Inggris Bisnis 1,6/7,G1410,STELLA AMANDA,4IA07
4IA07,Rabu,Pemodelan dan Simulasi,8/9/10,G1410,YUHILZA HANUM,4IA07
4IA07,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA07
4IA07,Jum'at,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA07
4IA08,Senin,Pengel. Proyek Perangkat Lunak,1/2/3,D635,NURYULIANI,4IA08
4IA08,Senin,Teknik Kompilasi **,5/6/7,D636,REMI SENJAYA,4IA08
4IA08,Senin,Bahasa Inggris Bisnis 1,9/10,D632,NURUL SAYEKTI,4IA08
4IA08,Selasa,Pemodelan dan Simulasi,4/5/6,D651,DINI SUNDANI,4IA08
4IA08,Selasa,Pengolahan Citra,8/9,D651,ACHMAD BENNY MUTIARA QN,4IA08
4IA08,Rabu,Algoritma Deep Learning,3/4,E517,INDAH WAHYUNI,4IA08
4IA08,Rabu,Rekayasa Perangkat Lunak 2 */**,6/7,E226,ELYNA FAZRIYATI,4IA08
4IA08,Rabu,Forensik Teknologi Informasi,8/9,E226,YOGI PERMADI,4IA08
4IA08,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA08
4IA08,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4IA08
4IA09,Senin,Bahasa Inggris Bisnis 1,4/5,D611,TIARMA IKA YULIANA,4IA09
4IA09,Senin,Teknik Kompilasi **,8/9/10,D622,REMI SENJAYA,4IA09
4IA09,Selasa,Pengel. Proyek Perangkat Lunak,2/3/4,D633,LINTANG YUNIAR BANOWOSARI,4IA09
4IA09,Selasa,Pengolahan Citra,6/7,D661,ACHMAD BENNY MUTIARA QN,4IA09
4IA09,Selasa,Pemodelan dan Simulasi,8/9/10,D661,DINI SUNDANI,4IA09
4IA09,Rabu,Rekayasa Perangkat Lunak 2 */**,1/2,E424,LINDA HANDAYANI,4IA09
4IA09,Rabu,Algoritma Deep Learning,3/4,E424,WINDA WIDYA ARIESTYA,4IA09
4IA09,Rabu,Forensik Teknologi Informasi,6/7,E228,YOGI PERMADI,4IA09
4IA09,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA09
4IA09,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4IA09
4IA10,Senin,Teknik Kompilasi **,2/3/4,F8462,MAUKAR,4IA10
4IA10,Senin,Rekayasa Perangkat Lunak 2 */**,7/8,F8462,SURYARINI WIDODO,4IA10
4IA10,Senin,Pengolahan Citra,9/10,F8462,ERICKS RACHMAT SWEDIA,4IA10
4IA10,Rabu,Pengel. Proyek Perangkat Lunak,1/2/3,E446,NAELI UMNIATI,4IA10
4IA10,Rabu,Algoritma Deep Learning,5/6,E426,WINDA WIDYA ARIESTYA,4IA10
4IA10,Rabu,Bahasa Inggris Bisnis 1,7/8,E426,ERNI HASTUTI,4IA10
4IA10,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA10
4IA10,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4IA10
4IA10,Sabtu,Pemodelan dan Simulasi,4/5/6,G221,FITRIA HANDAYANI SIBURIAN,4IA10
4IA10,Sabtu,Forensik Teknologi Informasi,8/9,G221,ARUM TRI ISWARI PURWANTI,4IA10
4IA11,Senin,Algoritma Deep Learning,4/5,E524,WINDA WIDYA ARIESTYA,4IA11
4IA11,Senin,Pengolahan Citra,6/7,E524,NUR PUTRI AGUSTIYANI,4IA11
4IA11,Senin,Bahasa Inggris Bisnis 1,8/9,E123,SUYUDI,4IA11
4IA11,Selasa,Teknik Kompilasi **,1/2/3,G122,SULISTYO PUSPITODJATI,4IA11
4IA11,Selasa,Pemodelan dan Simulasi,4/5/6,G122,PRIHANTOSA,4IA11
4IA11,Rabu,Pengel. Proyek Perangkat Lunak,1/2/3,E343,NURYULIANI,4IA11
4IA11,Rabu,Forensik Teknologi Informasi,5/6,E317,YUDI ADHA,4IA11
4IA11,Rabu,Rekayasa Perangkat Lunak 2 */**,8/9,E241,ELYNA FAZRIYATI,4IA11
4IA11,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA11
4IA11,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA11
4IA12,Senin,Pengel. Proyek Perangkat Lunak,1/2/3,E228,NAELI UMNIATI,4IA12
4IA12,Senin,Teknik Kompilasi **,4/5/6,E228,ERNASTUTI,4IA12
4IA12,Rabu,Bahasa Inggris Bisnis 1,3/4,E241,CHINTIA HANDAYANI,4IA12
4IA12,Rabu,Pengolahan Citra,6/7,E522,ERICKS RACHMAT SWEDIA,4IA12
4IA12,Rabu,Algoritma Deep Learning,8/9,E522,WINDA WIDYA ARIESTYA,4IA12
4IA12,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA12
4IA12,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA12
4IA12,Sabtu,Pemodelan dan Simulasi,1/2/3,G139,FITRIA HANDAYANI SIBURIAN,4IA12
4IA12,Sabtu,Forensik Teknologi Informasi,5/6,G123,ARUM TRI ISWARI PURWANTI,4IA12
4IA12,Sabtu,Rekayasa Perangkat Lunak 2 */**,7/8,G123,KOMANG ANOM BUDI UTAMA,4IA12
4IA13,Senin,Teknik Kompilasi **,1/2/3,E225,ERNASTUTI,4IA13
4IA13,Senin,Pengel. Proyek Perangkat Lunak,4/5/6,E225,DHARMAYANTI,4IA13
4IA13,Rabu,Pengolahan Citra,3/4,E248,ERICKS RACHMAT SWEDIA,4IA13
4IA13,Rabu,Rekayasa Perangkat Lunak 2 */**,5/6,E248,LINDA HANDAYANI,4IA13
4IA13,Rabu,Bahasa Inggris Bisnis 1,7/8,E248,CHINTIA HANDAYANI,4IA13
4IA13,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA13
4IA13,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA13
4IA13,Sabtu,Algoritma Deep Learning,3/4,G142,ROSNY GONIDJAYA,4IA13
4IA13,Sabtu,Pemodelan dan Simulasi,5/6/7,G142,DONI FERNANDO,4IA13
4IA13,Sabtu,Forensik Teknologi Informasi,9/10,G142,JUWITA UTAMI PUTRI,4IA13
4IA14,Selasa,Pemodelan dan Simulasi,1/2/3,G228,PRIHANTOSA,4IA14
4IA14,Selasa,Forensik Teknologi Informasi,6/7,G231,BINTANG EKA PUTERA,4IA14
4IA14,Selasa,Teknik Kompilasi **,8/9/10,G231,REMI SENJAYA,4IA14
4IA14,Rabu,Bahasa Inggris Bisnis 1,2/3,G114,SEPTIAN DWI PUTRI,4IA14
4IA14,Rabu,Rekayasa Perangkat Lunak 2 */**,6/7,G347,MOHAMAD SAEFUDIN,4IA14
4IA14,Rabu,Pengel. Proyek Perangkat Lunak,8/9/10,G347,GUNTUR EKA SAPUTRA,4IA14
4IA14,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA14
4IA14,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA14
4IA14,Sabtu,Algoritma Deep Learning,1/2,G143,ROSNY GONIDJAYA,4IA14
4IA14,Sabtu,Pengolahan Citra,3/4,G143,OVAN SUNARTO PULU,4IA14
4IA15,Senin,Pengolahan Citra,1/2,E313,ADANG SUHENDRA,4IA15
4IA15,Senin,Pemodelan dan Simulasi,5/6/7,E514,YUDI SATRIA,4IA15
4IA15,Senin,Algoritma Deep Learning,8/9,E514,WINDA WIDYA ARIESTYA,4IA15
4IA15,Rabu,Pengel. Proyek Perangkat Lunak,1/2/3,E238,GUNTUR EKA SAPUTRA,4IA15
4IA15,Rabu,Teknik Kompilasi **,4/5/6,E238,MUHAMMAD EDY SUPRIYADI,4IA15
4IA15,Rabu,Bahasa Inggris Bisnis 1,8/9,E448,WATI PURNAMASARI,4IA15
4IA15,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA15
4IA15,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA15
4IA15,Jum'at,Rekayasa Perangkat Lunak 2 */**,7/8,E426,HENNY MEDYAWATI,4IA15
4IA15,Jum'at,Forensik Teknologi Informasi,9/10,E426,EMY HARYATMI,4IA15
4IA16,Senin,Bahasa Inggris Bisnis 1,3/4,E131,DIAN NURUDIN,4IA16
4IA16,Senin,Teknik Kompilasi **,5/6/7,E131,MARA NUGRAHA,4IA16
4IA16,Rabu,Rekayasa Perangkat Lunak 2 */**,4/5,E129,EKA FITRI RAHAYU,4IA16
4IA16,Rabu,Pengel. Proyek Perangkat Lunak,8/9/10,E511,NURYULIANI,4IA16
4IA16,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA16
4IA16,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA16
4IA16,Sabtu,Algoritma Deep Learning,1/2,G123,INDAH WAHYUNI,4IA16
4IA16,Sabtu,Forensik Teknologi Informasi,3/4,G123,ARUM TRI ISWARI PURWANTI,4IA16
4IA16,Sabtu,Pengolahan Citra,6/7,G232,JUWITA UTAMI PUTRI,4IA16
4IA16,Sabtu,Pemodelan dan Simulasi,8/9/10,G232,DONI FERNANDO,4IA16
4IA17,Senin,Algoritma Deep Learning,3/4,E514,ERI PRASETYO WIBOWO,4IA17
4IA17,Senin,Forensik Teknologi Informasi,6/7,E244,VIVIEN NOVA FITHRIANA,4IA17
4IA17,Senin,Pengolahan Citra,8/9,E244,NUR PUTRI AGUSTIYANI,4IA17
4IA17,Selasa,Teknik Kompilasi **,4/5/6,G343,MARA NUGRAHA,4IA17
4IA17,Selasa,Pengel. Proyek Perangkat Lunak,7/8/9,G343,IRFAN HUMAINI,4IA17
4IA17,Rabu,Rekayasa Perangkat Lunak 2 */**,3/4,G2410,MOHAMAD SAEFUDIN,4IA17
4IA17,Rabu,Bahasa Inggris Bisnis 1,5/6,G2410,AKHMAD HAQIQI MA'MUN,4IA17
4IA17,Rabu,Pemodelan dan Simulasi,8/9/10,G313,ASEP JUARNA,4IA17
4IA17,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA17
4IA17,Jum'at,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4IA17
4IA18,Senin,Teknik Kompilasi **,5/6/7,D624,MAUKAR,4IA18
4IA18,Senin,Bahasa Inggris Bisnis 1,8/9,D624,TIARMA IKA YULIANA,4IA18
4IA18,Selasa,Forensik Teknologi Informasi,3/4,D663,BINTANG EKA PUTERA,4IA18
4IA18,Selasa,Pemodelan dan Simulasi,5/6/7,D663,RETNO MAHARESI,4IA18
4IA18,Selasa,Pengolahan Citra,9/10,D633,NUR PUTRI AGUSTIYANI,4IA18
4IA18,Rabu,Rekayasa Perangkat Lunak 2 */**,1/2,E443,MOHAMAD SAEFUDIN,4IA18
4IA18,Rabu,Algoritma Deep Learning,3/4,E443,MUHAMMAD JUERGEN DONGGALA PUTRA THALIB,4IA18
4IA18,Rabu,Pengel. Proyek Perangkat Lunak,5/6/7,E443,NURYULIANI,4IA18
4IA18,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA18
4IA18,Jum'at,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4IA18
4IA19,Senin,Bahasa Inggris Bisnis 1,6/7,D623,TIARMA IKA YULIANA,4IA19
4IA19,Senin,Teknik Kompilasi **,8/9/10,D611,MAUKAR,4IA19
4IA19,Selasa,Pengel. Proyek Perangkat Lunak,2/3/4,D666,IRFAN HUMAINI,4IA19
4IA19,Selasa,Pengolahan Citra,6/7,D667,NUR PUTRI AGUSTIYANI,4IA19
4IA19,Selasa,Pemodelan dan Simulasi,8/9/10,D667,RETNO MAHARESI,4IA19
4IA19,Rabu,Algoritma Deep Learning,1/2,E447,MUHAMMAD JUERGEN DONGGALA PUTRA THALIB,4IA19
4IA19,Rabu,Forensik Teknologi Informasi,3/4,E447,YOGI PERMADI,4IA19
4IA19,Rabu,Rekayasa Perangkat Lunak 2 */**,6/7,E247,EKA FITRI RAHAYU,4IA19
4IA19,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA19
4IA19,Jum'at,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4IA19
4IA20,Senin,Algoritma Deep Learning,6/7,J1316B,KARTIKA NOR RAMADHA,4IA20
4IA20,Senin,Pengel. Proyek Perangkat Lunak,8/9/10,J1316B,LU'LU MAWADDAH WISUDAWATI,4IA20
4IA20,Selasa,Forensik Teknologi Informasi,1/2,J1211,WINARTI,4IA20
4IA20,Selasa,Rekayasa Perangkat Lunak 2 */**,3/4,J1211,NELLY SOFI,4IA20
4IA20,Selasa,Pemodelan dan Simulasi,6/7/8,J1211,YUHILZA HANUM,4IA20
4IA20,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA20
4IA20,Jum'at,Praktikum Robotika Cerdas,1/2,,TIM DOSEN,4IA20
4IA20,Sabtu,Pengolahan Citra,3/4,J124,CONDRO WIBAWA,4IA20
4IA20,Sabtu,Teknik Kompilasi **,6/7/8,J1319,MUHAMMAD SHAFARI RAHMAT,4IA20
4IA20,Sabtu,Bahasa Inggris Bisnis 1,9/10,J1319,GUNAWAN TAMBUNSARIBU,4IA20
4IA21,Senin,Teknik Kompilasi **,1/2/3,J137,MUHAMMAD EDY SUPRIYADI,4IA21
4IA21,Senin,Pengel. Proyek Perangkat Lunak,4/5/6,J137,ISRAM RASAL,4IA21
4IA21,Rabu,Forensik Teknologi Informasi,1/2,J1216A,WINARTI,4IA21
4IA21,Rabu,Rekayasa Perangkat Lunak 2 */**,5/6,J147,BAMBANG YULIANTO,4IA21
4IA21,Rabu,Pemodelan dan Simulasi,8/9/10,J1310,DINI SUNDANI,4IA21
4IA21,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA21
4IA21,Jum'at,Praktikum Robotika Cerdas,1/2,,TIM DOSEN,4IA21
4IA21,Sabtu,Bahasa Inggris Bisnis 1,1/2,J1614,RR SHINTA FELISIA,4IA21
4IA21,Sabtu,Algoritma Deep Learning,3/4,J1614,MUHAMMAD SHAFARI RAHMAT,4IA21
4IA21,Sabtu,Pengolahan Citra,5/6,J1614,NYOMAN PARWA DINAWAN,4IA21
4IA22,Senin,Pengel. Proyek Perangkat Lunak,1/2/3,J128,ISRAM RASAL,4IA22
4IA22,Senin,Teknik Kompilasi **,4/5/6,J128,MUHAMMAD EDY SUPRIYADI,4IA22
4IA22,Senin,Algoritma Deep Learning,8/9,J128,KARTIKA NOR RAMADHA,4IA22
4IA22,Rabu,Pengolahan Citra,3/4,J158,ATIT PERTIWI,4IA22
4IA22,Rabu,Pemodelan dan Simulasi,5/6/7,J158,DINI SUNDANI,4IA22
4IA22,Rabu,Rekayasa Perangkat Lunak 2 */**,9/10,J1524,BAMBANG YULIANTO,4IA22
4IA22,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA22
4IA22,Jum'at,Praktikum Robotika Cerdas,1/2,,TIM DOSEN,4IA22
4IA22,Sabtu,Forensik Teknologi Informasi,2/3,J1110,DWI KARTINAH,4IA22
4IA22,Sabtu,Bahasa Inggris Bisnis 1,5/6,J1110,MILA ROSMAYA,4IA22
4IA23,Selasa,Pengel. Proyek Perangkat Lunak,2/3/4,J1116,ISRAM RASAL,4IA23
4IA23,Selasa,Rekayasa Perangkat Lunak 2 */**,5/6,J1116,NELLY SOFI,4IA23
4IA23,Rabu,Pengolahan Citra,5/6,J119,ATIT PERTIWI,4IA23
4IA23,Rabu,Pemodelan dan Simulasi,7/8/9,J119,KOKO BACHRUDIN,4IA23
4IA23,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA23
4IA23,Jum'at,Praktikum Robotika Cerdas,1/2,,TIM DOSEN,4IA23
4IA23,Sabtu,Bahasa Inggris Bisnis 1,1/2,J1611,GANJAR RESTO PAMBUDI,4IA23
4IA23,Sabtu,Teknik Kompilasi **,4/5/6,J1611,INDRA PURNAMA,4IA23
4IA23,Sabtu,Forensik Teknologi Informasi,7/8,J1611,CONDRO WIBAWA,4IA23
4IA23,Sabtu,Algoritma Deep Learning,9/10,J1611,WISNU SUKMA MAULANA,4IA23
4IA24,Selasa,Forensik Teknologi Informasi,3/4,J153,WINARTI,4IA24
4IA24,Selasa,Pengel. Proyek Perangkat Lunak,5/6/7,J153,ISRAM RASAL,4IA24
4IA24,Rabu,Pengolahan Citra,1/2,J1416A,ATIT PERTIWI,4IA24
4IA24,Rabu,Pemodelan dan Simulasi,4/5/6,J1419,KOKO BACHRUDIN,4IA24
4IA24,Rabu,Rekayasa Perangkat Lunak 2 */**,7/8,J1419,BAMBANG YULIANTO,4IA24
4IA24,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA24
4IA24,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4IA24
4IA24,Sabtu,Bahasa Inggris Bisnis 1,3/4,J1417,MILA ROSMAYA,4IA24
4IA24,Sabtu,Algoritma Deep Learning,5/6,J1417,WISNU SUKMA MAULANA,4IA24
4IA24,Sabtu,Teknik Kompilasi **,8/9/10,J1417,INDRA PURNAMA,4IA24
4IA25,Senin,Teknik Kompilasi **,1/2/3,J1312,ANA VIVTIA SETYAWAN,4IA25
4IA25,Senin,Pengel. Proyek Perangkat Lunak,4/5/6,J1312,LU'LU MAWADDAH WISUDAWATI,4IA25
4IA25,Rabu,Rekayasa Perangkat Lunak 2 */**,3/4,J1312,BAMBANG YULIANTO,4IA25
4IA25,Rabu,Pemodelan dan Simulasi,6/7/8,J1312,WINARTI,4IA25
4IA25,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA25
4IA25,Jum'at,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA25
4IA25,Sabtu,Bahasa Inggris Bisnis 1,1/2,J147,GUNAWAN TAMBUNSARIBU,4IA25
4IA25,Sabtu,Forensik Teknologi Informasi,5/6,J143,ADHITIO SATYO BAYANGKARI KARNO,4IA25
4IA25,Sabtu,Pengolahan Citra,7/8,J143,NYOMAN PARWA DINAWAN,4IA25
4IA25,Sabtu,Algoritma Deep Learning,9/10,J143,FEBIANTO ARIFIEN,4IA25
4IA26,Senin,Pengel. Proyek Perangkat Lunak,1/2/3,J129,LU'LU MAWADDAH WISUDAWATI,4IA26
4IA26,Senin,Teknik Kompilasi **,4/5/6,J129,ANA VIVTIA SETYAWAN,4IA26
4IA26,Rabu,Rekayasa Perangkat Lunak 2 */**,1/2,J133A,BAMBANG YULIANTO,4IA26
4IA26,Rabu,Pemodelan dan Simulasi,3/4/5,J133A,WINARTI,4IA26
4IA26,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA26
4IA26,Jum'at,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4IA26
4IA26,Sabtu,Bahasa Inggris Bisnis 1,1/2,J128,MILA ROSMAYA,4IA26
4IA26,Sabtu,Algoritma Deep Learning,3/4,J128,WISNU SUKMA MAULANA,4IA26
4IA26,Sabtu,Forensik Teknologi Informasi,5/6,J128,CONDRO WIBAWA,4IA26
4IA26,Sabtu,Pengolahan Citra,9/10,J127,NYOMAN PARWA DINAWAN,4IA26
4IA27,Senin,Pemodelan dan Simulasi,2/3/4,L232-233,ASEP JUARNA,4IA27
4IA27,Senin,Rekayasa Perangkat Lunak 2 */**,5/6,L242,ROBBY CANDRA,4IA27
4IA27,Selasa,Forensik Teknologi Informasi,2/3,L242,EMY HARYATMI,4IA27
4IA27,Selasa,Pengel. Proyek Perangkat Lunak,4/5/6,L242,NAELI UMNIATI,4IA27
4IA27,Rabu,Algoritma Deep Learning,2/3,L242,DHARMAYANTI,4IA27
4IA27,Rabu,Bahasa Inggris Bisnis 1,4/5,L242,DEVI HELLYSTIA,4IA27
4IA27,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA27
4IA27,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA27
4IA27,Jum'at,Pengolahan Citra,2/3,L244,TUBAGUS MAULANA KUSUMA,4IA27
4IA27,Jum'at,Teknik Kompilasi **,7/8/9,L242,REMI SENJAYA,4IA27
4IA28,Senin,Pemodelan dan Simulasi,2/3/4,L232-233,ASEP JUARNA,4IA28
4IA28,Senin,Rekayasa Perangkat Lunak 2 */**,5/6,L242,ROBBY CANDRA,4IA28
4IA28,Selasa,Forensik Teknologi Informasi,2/3,L242,EMY HARYATMI,4IA28
4IA28,Selasa,Pengel. Proyek Perangkat Lunak,4/5/6,L242,NAELI UMNIATI,4IA28
4IA28,Rabu,Algoritma Deep Learning,2/3,L242,DHARMAYANTI,4IA28
4IA28,Rabu,Bahasa Inggris Bisnis 1,4/5,L242,DEVI HELLYSTIA,4IA28
4IA28,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IA28
4IA28,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IA28
4IA28,Jum'at,Pengolahan Citra,2/3,L244,TUBAGUS MAULANA KUSUMA,4IA28
4IA28,Jum'at,Teknik Kompilasi **,7/8/9,L242,REMI SENJAYA,4IA28
1IB01,Senin,Menggambar Teknik,1/2,E137,DYAH NUR'AININGSIH,1IB01
1IB01,Senin,Bahasa Inggris,3/4,E137,VIDIA PUSPITA,1IB01
1IB01,Senin,Pendidikan Pancasila *,5/6,E312,HELNAWATY,1IB01
1IB01,Senin,Rangkaian Elektrik 1B,8/9,E223,VERONICA ERNITA KRISTIANTI,1IB01
1IB01,Kamis,Matematika Teknik 1,1/2,E321,RUDI IRAWAN,1IB01
1IB01,Kamis,Rangkaian Elektrik 1A,3/4/5,E321,ERMA TRIAWATI CHRISTINA,1IB01
1IB01,Kamis,Fisika & Kimia 1A,7/8,E318,SUHARDJO POERTADJI,1IB01
1IB01,Jum'at,Bahasa Indonesia,1/2,G442,ROSI ROSIDAH,1IB01
1IB01,Jum'at,Kalkulus 1B,3/4,G442,DANNY SETIAWAN,1IB01
1IB01,Sabtu,Fisika & Kimia 1B,1/2,E422,AL AZIZ ABBIE ROOSSANO,1IB01
1IB01,Sabtu,Kalkulus 1A,3/4,E422,ICHSAN PURNAMA,1IB01
1IB02,Senin,Bahasa Inggris,1/2,E511,HANA FAUZIAH,1IB02
1IB02,Senin,Menggambar Teknik,3/4,E511,DYAH NUR'AININGSIH,1IB02
1IB02,Senin,Pendidikan Pancasila *,5/6,E511,UMI KULSUM,1IB02
1IB02,Senin,Rangkaian Elektrik 1B,8/9,E314,SETIYONO,1IB02
1IB02,Kamis,Kalkulus 1A,1/2,E337,ALONA SITUMEANG,1IB02
1IB02,Kamis,Matematika Teknik 1,3/4,E337,RUDI IRAWAN,1IB02
1IB02,Kamis,Rangkaian Elektrik 1A,6/7/8,E221,ERMA TRIAWATI CHRISTINA,1IB02
1IB02,Jum'at,Kalkulus 1B,1/2,G453,DANNY SETIAWAN,1IB02
1IB02,Jum'at,Bahasa Indonesia,3/4,G453,ROSI ROSIDAH,1IB02
1IB02,Sabtu,Fisika & Kimia 1B,3/4,E434,AL AZIZ ABBIE ROOSSANO,1IB02
1IB02,Sabtu,Fisika & Kimia 1A,5/6,E434,ADIETIYA RANGGA SAPUTRA,1IB02
1IB03,Senin,Pendidikan Pancasila *,1/2,J155,EDI FAKHRI,1IB03
1IB03,Senin,Bahasa Indonesia,3/4,J155,KURNIAWAN EKA,1IB03
1IB03,Senin,Bahasa Inggris,5/6,J155,LATIFA NOVIANA,1IB03
1IB03,Senin,Rangkaian Elektrik 1A,8/9/10,J155,ERMA TRIAWATI CHRISTINA,1IB03
1IB03,Rabu,Menggambar Teknik,1/2,J1420,TRI MULYANTO,1IB03
1IB03,Rabu,Kalkulus 1B,3/4,J1420,ABDUL MUCHLIS,1IB03
1IB03,Rabu,Matematika Teknik 1,6/7,J157,AHMAD SABRI,1IB03
1IB03,Rabu,Fisika & Kimia 1A,8/9,J157,RR LUSSIANA ETP,1IB03
1IB03,Jum'at,Rangkaian Elektrik 1B,1/2,J133A,SETIYONO,1IB03
1IB03,Jum'at,Fisika & Kimia 1B,3/4,J133A,SARASWATI RAMADHANI PRIYONO,1IB03
1IB03,Jum'at,Kalkulus 1A,7/8,J153,SRAVA CHRISDES ANTORO,1IB03
2IB01,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IB01
2IB01,Selasa,Teori dan Analisis Sistem Linier,1/2,E512,HARTONO SISWONO,2IB01
2IB01,Selasa,Matematika Teknik 3B,3/4,E512,BAYU KUMORO YAKTI,2IB01
2IB01,Selasa,Matematika Teknik 3A,5/6,E512,AHMAD SABRI,2IB01
2IB01,Selasa,Elektronika Dasar A,8/9/10,E413,ANTONIUS IRIANTO SUKOWATI,2IB01
2IB01,Rabu,Instalasi Elektrik,1/2,D662,BAMBANG DWINANTO,2IB01
2IB01,Rabu,Kalkulus 3,4/5,D641,DESTYANTO ANGGORO,2IB01
2IB01,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IB01
2IB01,Jum'at,Ilmu Budaya Dasar,1/2,E248,ELVIA FARDIANA,2IB01
2IB01,Jum'at,Fisika 3,3/4,E248,ANY KURNIAWATY YAPIE,2IB01
2IB01,Jum'at,Elektronika Dasar B,7/8,E248,BAMBANG HARIANTO,2IB01
2IB02,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IB02
2IB02,Selasa,Praktikum Komputasi Big Data,6/7,,TIM DOSEN,2IB02
2IB02,Rabu,Matematika Teknik 3A,1/2,J1516A,AHMAD SABRI,2IB02
2IB02,Rabu,Matematika Teknik 3B,3/4,J1516A,AHMAD SABRI,2IB02
2IB02,Rabu,Teori dan Analisis Sistem Linier,6/7,J1420,HARTONO SISWONO,2IB02
2IB02,Rabu,Elektronika Dasar B,8/9,J1420,BAMBANG HARIANTO,2IB02
2IB02,Kamis,Kalkulus 3,1/2,J1415,R.A.SEKAR CIPTANING ANINDYA,2IB02
2IB02,Kamis,Fisika 3,4/5,J1319,MARIZA WIJAYANTI,2IB02
2IB02,Kamis,Instalasi Elektrik,7/8,J1311,BAMBANG DWINANTO,2IB02
2IB02,Kamis,Ilmu Budaya Dasar,9/10,J1311,NURUL KHOTIMAH,2IB02
2IB02,Jum'at,Elektronika Dasar A,2/3/4,J1410,ANTONIUS IRIANTO SUKOWATI,2IB02
2IB03,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IB03
3IB01A,Senin,Rangkaian Elektronika A *,1/2/3,G142,DESY KRISTYAWATI,3IB01
3IB01B,Senin,Jaringan Sensor Nirkabel & IoT,3/4 G,G134,R.A.SEKAR CIPTANING ANINDYA,3IB01
3IB01A,Senin,Jaringan Sensor Nirkabel & IoT,5/6,G135,R.A.SEKAR CIPTANING ANINDYA,3IB01
3IB01B,Senin,Teori Lingkungan,5/6 G,G134,KUNTO WIBOWO,3IB01
3IB01A,Senin,Teori Lingkungan,7/8,G135,KUNTO WIBOWO,3IB01
3IB01B,Senin,Rangkaian Elektronika A *,8/9/10 G,G113,BUSONO SOEROWIRDJO,3IB01
3IB01A,Selasa,Mikrokontroler A,1/2,E426,VERONICA ERNITA KRISTIANTI,3IB01
3IB01B,Selasa,Komunikasi Digital,1/2/3 G,E318,DYAH NUR'AININGSIH,3IB01
3IB01A,Selasa,Mikrokontroler B,3/4,E426,JAMILAH,3IB01
3IB01B,Selasa,Metode Penelitian,4/5 G,E318,ELFITRIN SYAHRUL,3IB01
3IB01A,Selasa,Metode Penelitian,7/8,E211,ELFITRIN SYAHRUL,3IB01
3IB01B,Selasa,Mikrokontroler A,7/8 G,E432,VERONICA ERNITA KRISTIANTI,3IB01
3IB01B,Selasa,Mikrokontroler B,9/10 G,E432,JAMILAH,3IB01
3IB01A,Rabu,Ekonomi Teknik,1/2,G247,ROBBY KURNIAWAN HARAHAP,3IB01
3IB01A,Rabu,Dasar Sistem Kontrol *,3/4,G247,ERFIANA WAHYUNINGSIH,3IB01
3IB01B,Rabu,Rangkaian Elektronika B *,3/4 G,G233,GANJAR FEBRIYANI PRATIWI,3IB01
3IB01A,Rabu,Rangkaian Elektronika B *,6/7,G116,GANJAR FEBRIYANI PRATIWI,3IB01
3IB01B,Rabu,Ekonomi Teknik,6/7 G,G142,ROBBY KURNIAWAN HARAHAP,3IB01
3IB01B,Rabu,Dasar Sistem Kontrol *,8/9 G,G142,ERFIANA WAHYUNINGSIH,3IB01
3IB01B,Kamis,Teknologi Semikonduktor,1/2/3 G,G344,MUHAMMAD FATHONY,3IB01
3IB01A,Sabtu,Mesin Elektrik 1 **,1/2/3,G122,ISMAIL MUCHSIN,3IB01
3IB01A,Sabtu,Energi Alternatif,4/5,G122,BAMBANG DWINANTO,3IB01
3IB02A,Senin,Jaringan Sensor Nirkabel & IoT,1/2,G123,R.A.SEKAR CIPTANING ANINDYA,3IB02
3IB02A,Senin,Teori Lingkungan,3/4,G123,KUNTO WIBOWO,3IB02
3IB02B,Senin,Jaringan Sensor Nirkabel & IoT,3/4 G,G245,R.A.SEKAR CIPTANING ANINDYA,3IB02
3IB02B,Senin,Teori Lingkungan,5/6 G,G245,KUNTO WIBOWO,3IB02
3IB02A,Senin,Rangkaian Elektronika A *,5/6/7,G123,BUSONO SOEROWIRDJO,3IB02
3IB02B,Senin,Rangkaian Elektronika A *,8/9/10 G,G123,BUSONO SOEROWIRDJO,3IB02
3IB02B,Selasa,Komunikasi Digital,1/2/3 G,E318,DYAH NUR'AININGSIH,3IB02
3IB02A,Selasa,Mikrokontroler A,4/5,E413,VERONICA ERNITA KRISTIANTI,3IB02
3IB02B,Selasa,Metode Penelitian,4/5 G,E318,ELFITRIN SYAHRUL,3IB02
3IB02A,Selasa,Mikrokontroler B,7/8,E322,JAMILAH,3IB02
3IB02B,Selasa,Mikrokontroler A,7/8 G,E432,VERONICA ERNITA KRISTIANTI,3IB02
3IB02A,Selasa,Metode Penelitian,9/10,E322,ELFITRIN SYAHRUL,3IB02
3IB02B,Selasa,Mikrokontroler B,9/10 G,E432,JAMILAH,3IB02
3IB02A,Rabu,Ekonomi Teknik,3/4,G136,ROBBY KURNIAWAN HARAHAP,3IB02
3IB02B,Rabu,Rangkaian Elektronika B *,3/4 G,G233,GANJAR FEBRIYANI PRATIWI,3IB02
3IB02A,Rabu,Dasar Sistem Kontrol *,6/7,G144,ERFIANA WAHYUNINGSIH,3IB02
3IB02B,Rabu,Ekonomi Teknik,6/7 G,G142,ROBBY KURNIAWAN HARAHAP,3IB02
3IB02A,Rabu,Rangkaian Elektronika B *,8/9,G144,GANJAR FEBRIYANI PRATIWI,3IB02
3IB02B,Rabu,Dasar Sistem Kontrol *,8/9 G,G142,ERFIANA WAHYUNINGSIH,3IB02
3IB02B,Kamis,Teknologi Semikonduktor,1/2/3 G,G344,MUHAMMAD FATHONY,3IB02
3IB02A,Sabtu,Energi Alternatif,1/2,G137,BAMBANG DWINANTO,3IB02
3IB02A,Sabtu,Mesin Elektrik 1 **,4/5/6,G137,ISMAIL MUCHSIN,3IB02
3IB03B,Senin,Dasar Sistem Kontrol *,1/2,J143,ERFIANA WAHYUNINGSIH,3IB03
3IB03A,Senin,Dasar Sistem Kontrol *,3/4,J144,ERFIANA WAHYUNINGSIH,3IB03
3IB03B,Senin,Rangkaian Elektronika B *,3/4,J143,GANJAR FEBRIYANI PRATIWI,3IB03
3IB03A,Senin,Rangkaian Elektronika B *,6/7,J143,GANJAR FEBRIYANI PRATIWI,3IB03
3IB03B,Senin,Komunikasi Digital,7/8/9,J144,HAFIDZAH,3IB03
3IB03B,Rabu,Ekonomi Teknik,1/2,J155,WIDYASTUTI,3IB03
3IB03A,Rabu,Rangkaian Elektronika A *,1/2/3,J128,DESY KRISTYAWATI,3IB03
3IB03A,Rabu,Ekonomi Teknik,4/5,J128,WIDYASTUTI,3IB03
3IB03B,Rabu,Rangkaian Elektronika A *,4/5/6,J1212,DESY KRISTYAWATI,3IB03
3IB03A,Rabu,Metode Penelitian,7/8,J1220,ELFITRIN SYAHRUL,3IB03
3IB03B,Rabu,Jaringan Sensor Nirkabel & IoT,7/8,J1212,MOCHAMMAD KARJADI,3IB03
3IB03B,Rabu,Metode Penelitian,9/10,J1212,ELFITRIN SYAHRUL,3IB03
3IB03A,Rabu,Jaringan Sensor Nirkabel & IoT,9/10,J1220,MOCHAMMAD KARJADI,3IB03
3IB03A,Kamis,Teori Lingkungan,1/2,J118,MUHAMMAD SUBALI,3IB03
3IB03B,Kamis,Teori Lingkungan,3/4,J1512,MUHAMMAD SUBALI,3IB03
3IB03A,Kamis,Energi Alternatif,5/6,J118,BAMBANG DWINANTO,3IB03
3IB03B,Kamis,Teknologi Semikonduktor,5/6/7,J1512,JOKO PURNOMO,3IB03
3IB03A,Jum'at,Mesin Elektrik 1 **,7/8/9,J1116,SETIYONO,3IB03
3IB03B,Sabtu,Mikrokontroler B,1/2,J1316B,SURYA SUMANTRI,3IB03
3IB03A,Sabtu,Mikrokontroler A,1/2,J1515B,VALDES KHALIFAN,3IB03
3IB03A,Sabtu,Mikrokontroler B,3/4,J1515B,SURYA SUMANTRI,3IB03
3IB03B,Sabtu,Mikrokontroler A,3/4,J1316B,VALDES KHALIFAN,3IB03
4IB01A,Senin,Teori Gardu Induk,4/5/6,G431,WIDYASTUTI,4IB01
4IB01A,Senin,Transmisi Daya Elektrik *,8/9/10,G431,DHATU PARAGYA,4IB01
4IB01A,Selasa,Elektronika Daya Lanjut,1/2,E234,YANUARSYAH HAROEN/DHATU PARAGYA,4IB01
4IB01B,Selasa,Perancangan Sist.Elektronika*/R,1/2 G,G218,GANJAR FEBRIYANI PRATIWI,4IB01
4IB01B,Selasa,Peranc. Rangkaian Terintegritasi*,3/4 G,G218,HARTONO SISWONO,4IB01
4IB01A,Selasa,Distribusi Daya Elektrik *,3/4/5,E234,DEBYO SAPTONO,4IB01
4IB01B,Selasa,Pengolahan Citra,6/7 G,G442,IVAN MAURITS,4IB01
4IB01A,Selasa,Analisis Sistem Tenaga *,7/8,E225,SETIYONO,4IB01
4IB01B,Rabu,Perancangan Sist. Elektronika *,1/2/3 G,G441,R.A.SEKAR CIPTANING ANINDYA,4IB01
4IB01B,Rabu,Sist. Fabrikasi Mikroelektronika*,5/6/7 G,G217,BERNARDUS E.F. DA SILVA,4IB01
4IB01B,Rabu,Capstone Design Project,8/9/10 G,G217,WAHYU KUSUMA RAHARJA,4IB01
4IB01B,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IB01
4IB01A,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IB01
4IB01A,Jum'at,Capstone Design Project,2/3/4,G1410,WAHYU KUSUMA RAHARJA,4IB01
4IB01B,Jum'at,Pengolahan Sinyal Digital *,7/8/9 G,G218,HARTONO SISWONO,4IB01
4IB01,Sabtu,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4IB01
4IB02A,Senin,Teori Gardu Induk,1/2/3,G455,WIDYASTUTI,4IB02
4IB02A,Senin,Transmisi Daya Elektrik *,5/6/7,G434,DHATU PARAGYA,4IB02
4IB02B,Selasa,Perancangan Sist.Elektronika*/R,1/2 G,G218,GANJAR FEBRIYANI PRATIWI,4IB02
4IB02A,Selasa,Elektronika Daya Lanjut,3/4,E434,YANUARSYAH HAROEN/DHATU PARAGYA,4IB02
4IB02B,Selasa,Peranc. Rangkaian Terintegritasi*,3/4 G,G218,HARTONO SISWONO,4IB02
4IB02B,Selasa,Pengolahan Citra,6/7 G,G442,IVAN MAURITS,4IB02
4IB02A,Selasa,Distribusi Daya Elektrik *,6/7/8,E443,DEBYO SAPTONO,4IB02
4IB02A,Selasa,Analisis Sistem Tenaga *,9/10,E443,SETIYONO,4IB02
4IB02B,Rabu,Perancangan Sist. Elektronika *,1/2/3 G,G441,R.A.SEKAR CIPTANING ANINDYA,4IB02
4IB02B,Rabu,Sist. Fabrikasi Mikroelektronika*,5/6/7 G,G217,BERNARDUS E.F. DA SILVA,4IB02
4IB02B,Rabu,Capstone Design Project,8/9/10 G,G217,WAHYU KUSUMA RAHARJA,4IB02
4IB02B,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IB02
4IB02A,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IB02
4IB02A,Jum'at,Capstone Design Project,7/8/9,G223,WAHYU KUSUMA RAHARJA,4IB02
4IB02B,Jum'at,Pengolahan Sinyal Digital *,7/8/9 G,G218,HARTONO SISWONO,4IB02
4IB02,Sabtu,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4IB02
4IB03B,Senin,Capstone Design Project,2/3/4,J148,TRI NUR ARIFIN,4IB03
4IB03A,Senin,Capstone Design Project,5/6/7,J1419,ERMA TRIAWATI CHRISTINA,4IB03
4IB03A,Senin,Elektronika Daya Lanjut,9/10,J1419,TRI NUR ARIFIN,4IB03
4IB03B,Rabu,Sist. Fabrikasi Mikroelektronika*,1/2/3,J1319,ELFITRIN SYAHRUL,4IB03
4IB03B,Rabu,Peranc. Rangkaian Terintegritasi*,4/5,J1319,KUNTO WIBOWO,4IB03
4IB03A,Rabu,Distribusi Daya Elektrik *,5/6/7,J1511,DEBYO SAPTONO,4IB03
4IB03B,Rabu,Pengolahan Sinyal Digital *,8/9/10,J1216A,HARTONO SISWONO,4IB03
4IB03A,Rabu,Teori Gardu Induk,8/9/10,J1511,WIDYASTUTI,4IB03
4IB03B,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IB03
4IB03A,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IB03
4IB03,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IB03
4IB03B,Jum'at,Perancangan Sist. Elektronika *,2/3/4,J133B,DHATU PARAGYA,4IB03
4IB03A,Jum'at,Analisis Sistem Tenaga *,3/4,J1515B,SETIYONO,4IB03
4IB03A,Jum'at,Transmisi Daya Elektrik *,7/8/9,J1515B,DHATU PARAGYA,4IB03
4IB03B,Sabtu,Perancangan Sist.Elektronika*/R,7/8,J1518,VALDES KHALIFAN,4IB03
4IB03B,Sabtu,Pengolahan Citra,9/10,J1518,CONDRO WIBAWA,4IB03
1IC01,Rabu,Kalkulus 1B,3/4,G344,IRVAN SEPTYAN MULYANA,1IC01
1IC01,Rabu,Fisika & Kimia Dasar 1C,7/8,G218,ASHFAR KURNIA,1IC01
1IC01,Kamis,Dasar Komputer & Pemrog.A,3/4,G432,NURASIAH,1IC01
1IC01,Kamis,Dasar Komputer & Pemrog.B,6/7,G248,AMELIA BELINDA SILVIANA,1IC01
1IC01,Kamis,Proses Produksi 1,8/9/10,G248,ACHMAD RISA HARFIT,1IC01
1IC01,Jum'at,Menggambar Teknik,1/2,E226,DYAH NUR'AININGSIH,1IC01
1IC01,Jum'at,Kalkulus 1A,3/4,E226,ICHSAN PURNAMA,1IC01
1IC01,Jum'at,Bahasa Indonesia,7/8,E213,JONO SAROYO,1IC01
1IC01,Jum'at,Fisika & Kimia Dasar 1B,9/10,E213,AGUS HADI ISMOYO,1IC01
1IC01,Sabtu,Fisika & Kimia Dasar 1A,1/2,E333,ARIO GERALDI,1IC01
1IC01,Sabtu,Material Teknik,5/6,E337,DENI HARYADI,1IC01
1IC02,Rabu,Kalkulus 1B,1/2,E448,IRVAN SEPTYAN MULYANA,1IC02
1IC02,Rabu,Bahasa Indonesia,5/6,E521,NURMANINGSIH,1IC02
1IC02,Rabu,Material Teknik,7/8,E521,SULAKSANA PERMANA,1IC02
1IC02,Kamis,Dasar Komputer & Pemrog.A,1/2,G425,NURASIAH,1IC02
1IC02,Kamis,Proses Produksi 1,5/6/7,G435,ACHMAD RISA HARFIT,1IC02
1IC02,Jum'at,Kalkulus 1A,1/2,E231,ARIO GERALDI,1IC02
1IC02,Jum'at,Menggambar Teknik,3/4,E231,DYAH NUR'AININGSIH,1IC02
1IC02,Jum'at,Dasar Komputer & Pemrog.B,7/8,E231,WITTA LISTIYA NINGRUM,1IC02
1IC02,Jum'at,Fisika & Kimia Dasar 1A,9/10,E231,ARIYANTO1,1IC02
1IC02,Sabtu,Fisika & Kimia Dasar 1B,7/8,G122,RATNA KOMALA,1IC02
1IC02,Sabtu,Fisika & Kimia Dasar 1C,9/10,G122,AGUS BUDIHADI,1IC02
1IC03,Senin,Fisika & Kimia Dasar 1A,6/7,G132,JOKO PURNOMO,1IC03
1IC03,Senin,Menggambar Teknik,8/9,G132,DODDI YUNIARDI,1IC03
1IC03,Rabu,Bahasa Indonesia,3/4,G245,BUDI SANTOSA2,1IC03
1IC03,Rabu,Kalkulus 1B,5/6,G245,IRVAN SEPTYAN MULYANA,1IC03
1IC03,Kamis,Proses Produksi 1,1/2/3,G243,MUHAMMAD LUQMAN,1IC03
1IC03,Kamis,Kalkulus 1A,4/5,G243,ALONA SITUMEANG,1IC03
1IC03,Kamis,Dasar Komputer & Pemrog.A,7/8,G149,TRI SULISTYORINI,1IC03
1IC03,Kamis,Dasar Komputer & Pemrog.B,9/10,G228,NURASIAH,1IC03
1IC03,Sabtu,Material Teknik,1/2,G221,DENI HARYADI,1IC03
1IC03,Sabtu,Fisika & Kimia Dasar 1B,5/6,G224,AGUS BUDIHADI,1IC03
1IC03,Sabtu,Fisika & Kimia Dasar 1C,7/8,G224,AGUS BUDIHADI,1IC03
1IC04,Senin,Dasar Komputer & Pemrog.A,1/2,J1220,NIA YUNINGSIH,1IC04
1IC04,Senin,Fisika & Kimia Dasar 1B,3/4,J1220,NURUL ASNI,1IC04
1IC04,Senin,Bahasa Indonesia,5/6,J1220,KURNIAWAN EKA,1IC04
1IC04,Senin,Material Teknik,8/9,J1220,HARIS RUDIANTO,1IC04
1IC04,Rabu,Kalkulus 1B,1/2,J1515A,ABDUL MUCHLIS,1IC04
1IC04,Rabu,Fisika & Kimia Dasar 1C,3/4,J1515A,DJONAEDI SALEH,1IC04
1IC04,Rabu,Menggambar Teknik,7/8,J1515B,TRI MULYANTO,1IC04
1IC04,Rabu,Kalkulus 1A,9/10,J1515B,HERU HERDIANTO,1IC04
1IC04,Sabtu,Dasar Komputer & Pemrog.B,3/4,J1615,ANDRE PRATAMA,1IC04
1IC04,Sabtu,Fisika & Kimia Dasar 1A,6/7,J1615,DWI ARIF SANTOSO,1IC04
1IC04,Sabtu,Proses Produksi 1,8/9/10,J1615,AGUNG DWI SAPTO,1IC04
1IC05,Senin,Fisika & Kimia Dasar 1C,1/2,J138,NURUL ASNI,1IC05
1IC05,Senin,Fisika & Kimia Dasar 1B,3/4,J138,HAFIDZAH,1IC05
1IC05,Senin,Material Teknik,6/7,J138,HARIS RUDIANTO,1IC05
1IC05,Rabu,Bahasa Indonesia,1/2,J133B,SEPITRI DARUYANI,1IC05
1IC05,Rabu,Menggambar Teknik,3/4,J133B,ACHMAD RISA HARFIT,1IC05
1IC05,Rabu,Kalkulus 1A,7/8,J1425,HERU HERDIANTO,1IC05
1IC05,Rabu,Kalkulus 1B,9/10,J1425,ABDUL MUCHLIS,1IC05
1IC05,Sabtu,Dasar Komputer & Pemrog.B,1/2,J1512,ANDRE PRATAMA,1IC05
1IC05,Sabtu,Fisika & Kimia Dasar 1A,4/5,J1512,I WAYAN MULIAWAN,1IC05
1IC05,Sabtu,Proses Produksi 1,6/7/8,J1512,FEBRIAN ALIANDI,1IC05
1IC05,Sabtu,Dasar Komputer & Pemrog.A,9/10,J1512,ERNI WIGATI,1IC05
2IC01,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IC01
2IC01,Selasa,Fisika Dasar 3,1/2/3,E233,RR LUSSIANA ETP,2IC01
2IC01,Selasa,Statika Struktur *,6/7/8,E311,BAMBANG SURYAWAN,2IC01
2IC01,Rabu,Pemilihan Bahan & Proses *,1/2,F8443,SULAKSANA PERMANA,2IC01
2IC01,Rabu,Termodinamika Teknik,5/6/7,F8442,COKORDA PRAPTI MAHANDARI,2IC01
2IC01,Rabu,Kalkulus 3,8/9/10,F8442,HERIK SUGERU,2IC01
2IC01,Kamis,Kinematika & Dinamika Teknik 2,3/4,G349,HERU KUNCORO,2IC01
2IC01,Kamis,Matematika Teknik 1,6/7/8,G139,SARI NINGSIH,2IC01
2IC01,Kamis,Pendidikan Pancasila *,9/10,G145,MEI RAHARJA,2IC01
2IC01,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IC01
2IC02,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IC02
2IC02,Selasa,Statika Struktur *,1/2/3,E311,BAMBANG SURYAWAN,2IC02
2IC02,Selasa,Fisika Dasar 3,5/6/7,E315,RR LUSSIANA ETP,2IC02
2IC02,Selasa,Kalkulus 3,8/9/10,E333,HERIK SUGERU,2IC02
2IC02,Rabu,Termodinamika Teknik,1/2/3,F8444,COKORDA PRAPTI MAHANDARI,2IC02
2IC02,Rabu,Pemilihan Bahan & Proses *,4/5,F8444,SULAKSANA PERMANA,2IC02
2IC02,Kamis,Matematika Teknik 1,1/2/3,G2410,PRISKA RESTU UTAMI,2IC02
2IC02,Kamis,Pendidikan Pancasila *,5/6,G432,RANDY,2IC02
2IC02,Kamis,Kinematika & Dinamika Teknik 2,7/8,G432,HERU KUNCORO,2IC02
2IC02,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IC02
2IC03,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2IC03
2IC03,Selasa,Praktikum Komputasi Big Data,6/7,,TIM DOSEN,2IC03
2IC03,Rabu,Kinematika & Dinamika Teknik 2,2/3,J1611,ARIFUDDIN,2IC03
2IC03,Rabu,Statika Struktur *,4/5/6,J1611,TRI MULYANTO,2IC03
2IC03,Rabu,Fisika Dasar 3,8/9/10,J153,DJONAEDI SALEH,2IC03
2IC03,Kamis,Termodinamika Teknik,1/2/3,J1516B,IWAN SETYAWAN,2IC03
2IC03,Kamis,Kalkulus 3,5/6/7,J1518,R.A.SEKAR CIPTANING ANINDYA,2IC03
2IC03,Sabtu,Matematika Teknik 1,1/2/3,J1312,AGUNG DWI SAPTO,2IC03
2IC03,Sabtu,Pemilihan Bahan & Proses *,5/6,J138,EKO APRIANTO NUGROHO,2IC03
2IC03,Sabtu,Pendidikan Pancasila *,7/8,J138,NINA MEINA RAHMAWATI,2IC03
2IC04,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2IC04
3IC01,Senin,Perpindahan Kalor dan Massa 2,6/7,E234,RADEN RORO SRI POERNOMO SARI,3IC01
3IC01,Senin,Matematika Teknik 3 *,8/9/10,E234,DANNY SETIAWAN,3IC01
3IC01,Selasa,Getaran Mekanik *,1/2/3,F8444,RUDI IRAWAN,3IC01
3IC01,Selasa,Teknik Tenaga Listrik *,4/5,F8444,ARIFUDDIN,3IC01
3IC01,Selasa,Pengukuran Teknik *,6/7,F8444,CHRISTOFEL JAROT YUDAPUTRANTO,3IC01
3IC01,Kamis,Statistik Teknik,1/2,G434,MOHAMMAD YAMIN,3IC01
3IC01,Kamis,Pneumatik dan Hidrolik,3/4,G434,RIDWAN,3IC01
3IC01,Kamis,Elemen Mesin 2 *,6/7,G342,SUPRIYONO,3IC01
3IC02,Senin,Perpindahan Kalor dan Massa 2,3/4,E233,RADEN RORO SRI POERNOMO SARI,3IC02
3IC02,Senin,Statistik Teknik,5/6,E233,DANNY SETIAWAN,3IC02
3IC02,Selasa,Matematika Teknik 3 *,1/2/3,F8481,TRI HANDHIKA,3IC02
3IC02,Selasa,Getaran Mekanik *,4/5/6,F8481,RUDI IRAWAN,3IC02
3IC02,Selasa,Pengukuran Teknik *,8/9,F8461,CHRISTOFEL JAROT YUDAPUTRANTO,3IC02
3IC02,Kamis,Elemen Mesin 2 *,1/2,G232,SUPRIYONO,3IC02
3IC02,Kamis,Teknik Tenaga Listrik *,3/4,G232,SANDY SURYADY,3IC02
3IC02,Kamis,Pneumatik dan Hidrolik,6/7,G232,RIDWAN,3IC02
3IC03,Senin,Matematika Teknik 3 *,2/3/4,E234,DANNY SETIAWAN,3IC03
3IC03,Senin,Statistik Teknik,6/7,E512,RATIH KURNIASIH,3IC03
3IC03,Selasa,Teknik Tenaga Listrik *,2/3,F8455,ARIFUDDIN,3IC03
3IC03,Selasa,Pengukuran Teknik *,4/5,F8455,CHRISTOFEL JAROT YUDAPUTRANTO,3IC03
3IC03,Selasa,Getaran Mekanik *,7/8/9,F8443,ARIYANTO1,3IC03
3IC03,Kamis,Elemen Mesin 2 *,3/4,G343,SUPRIYONO,3IC03
3IC03,Kamis,Perpindahan Kalor dan Massa 2,6/7,G233,MUHAMMAD LUQMAN,3IC03
3IC03,Kamis,Pneumatik dan Hidrolik,8/9,G233,RIDWAN,3IC03
3IC04,Senin,Perpindahan Kalor dan Massa 2,1/2,J154,IWAN SETYAWAN,3IC04
3IC04,Senin,Teknik Tenaga Listrik *,3/4,J154,SANDY SURYADY,3IC04
3IC04,Senin,Pengukuran Teknik *,5/6,J154,IRVAN SEPTYAN MULYANA,3IC04
3IC04,Rabu,Pneumatik dan Hidrolik,3/4,J1216A,RIDWAN,3IC04
3IC04,Rabu,Matematika Teknik 3 *,6/7/8,J143,TRI HANDHIKA,3IC04
3IC04,Sabtu,Statistik Teknik,2/3,J118,FEBRIAN ALIANDI,3IC04
3IC04,Sabtu,Elemen Mesin 2 *,4/5,J118,AGUNG DWI SAPTO,3IC04
3IC04,Sabtu,Getaran Mekanik *,7/8/9,J1110,EKO APRIANTO NUGROHO,3IC04
3IC05,Senin,Perpindahan Kalor dan Massa 2,3/4,J1211,IWAN SETYAWAN,3IC05
3IC05,Senin,Matematika Teknik 3 *,6/7/8,J1211,TRI NUR ARIFIN,3IC05
3IC05,Senin,Pengukuran Teknik *,9/10,J1211,IRVAN SEPTYAN MULYANA,3IC05
3IC05,Rabu,Getaran Mekanik *,1/2/3,J1419,AJI ABDILLAH KHARISMA,3IC05
3IC05,Rabu,Pneumatik dan Hidrolik,5/6,J138,RIDWAN,3IC05
3IC05,Rabu,Statistik Teknik,7/8,J138,ABDUL MUCHLIS,3IC05
3IC05,Sabtu,Teknik Tenaga Listrik *,3/4,J1511,ARIFUDDIN,3IC05
3IC05,Sabtu,Elemen Mesin 2 *,6/7,J1511,AGUNG DWI SAPTO,3IC05
4IC01,Senin,Teknologi Rapid Prototyping,3/4,E222,MOHAMMAD YAMIN,4IC01
4IC01,Senin,Mekanika Nanomaterial dan Biomate,7/8,E222,SUNYOTO,4IC01
4IC01,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IC01
4IC01,Kamis,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4IC01
4IC01,Jum'at,Capstone Design,1/2/3/4,D656,RADEN RORO SRI POERNOMO SARI,4IC01
4IC01,Jum'at,Metode Elemen Hingga,7/8,D656,HERU KUNCORO,4IC01
4IC01,Sabtu,Kewirausahaan Technopreneur,1/2,E433,ICHSAN PURNAMA,4IC01
4IC01,Sabtu,Manajemen Industri *,3/4,E433,ARIO GERALDI,4IC01
4IC01,Sabtu,Tek. Keselamatan&Kesehatan Kerja,5/6,E433,ELBI WISENO,4IC01
4IC02,Senin,Metode Elemen Hingga,1/2,E335,RADEN RORO SRI POERNOMO SARI,4IC02
4IC02,Senin,Mekanika Nanomaterial dan Biomate,4/5,E218,SUNYOTO,4IC02
4IC02,Senin,Teknologi Rapid Prototyping,6/7,E218,MOHAMMAD YAMIN,4IC02
4IC02,Selasa,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4IC02
4IC02,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IC02
4IC02,Jum'at,Capstone Design,1/2/3/4,E427,HARIS RUDIANTO,4IC02
4IC02,Sabtu,Tek. Keselamatan&Kesehatan Kerja,3/4,E521,ELBI WISENO,4IC02
4IC02,Sabtu,Kewirausahaan Technopreneur,5/6,E521,ICHSAN PURNAMA,4IC02
4IC02,Sabtu,Manajemen Industri *,7/8,E521,ANDI CAHYA ICHI,4IC02
4IC03,Senin,Metode Elemen Hingga,1/2,J1516A,ABDUL MUCHLIS,4IC03
4IC03,Senin,Mekanika Nanomaterial dan Biomate,3/4,J1516A,CHRISTOFEL JAROT YUDAPUTRANTO,4IC03
4IC03,Senin,Capstone Design,7/8/9/10,J1516A,SUPRIYONO,4IC03
4IC03,Selasa,Kewirausahaan Technopreneur,6/7,J61002,ELBI WISENO,4IC03
4IC03,Selasa,Teknologi Rapid Prototyping,8/9,J61002,MOHAMMAD YAMIN,4IC03
4IC03,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IC03
4IC03,Jum'at,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IC03
4IC03,Sabtu,Tek. Keselamatan&Kesehatan Kerja,1/2,J1116,ABDUL RAHMAN AGUNG RAMADHAN,4IC03
4IC03,Sabtu,Manajemen Industri *,3/4,J1116,EKO APRIANTO NUGROHO,4IC03
4IC04,Senin,Mekanika Nanomaterial dan Biomate,1/2,J1515B,CHRISTOFEL JAROT YUDAPUTRANTO,4IC04
4IC04,Senin,Metode Elemen Hingga,3/4,J1515B,ABDUL MUCHLIS,4IC04
4IC04,Senin,Capstone Design,6/7/8/9,J1515B,IWAN SETYAWAN,4IC04
4IC04,Selasa,Kewirausahaan Technopreneur,3/4,J60905,ELBI WISENO,4IC04
4IC04,Selasa,Teknologi Rapid Prototyping,6/7,J60905,MOHAMMAD YAMIN,4IC04
4IC04,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4IC04
4IC04,Jum'at,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IC04
4IC04,Sabtu,Manajemen Industri *,1/2,J1616,EKO APRIANTO NUGROHO,4IC04
4IC04,Sabtu,Tek. Keselamatan&Kesehatan Kerja,3/4,J1616,DWI ARIF SANTOSO,4IC04
4IC05,Kamis,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4IC05
1ID01,Senin,Fisika Dasar 1,1/2,G126,HENING HENDRATO,1ID01
1ID01,Senin,Dasar Komp. & Pemrograman B,3/4,G126,NURASIAH,1ID01
1ID01,Senin,Menggambar Teknik,6/7,G423,DODDI YUNIARDI,1ID01
1ID01,Senin,Bahasa Indonesia,8/9,G423,TRI BUDIARTA,1ID01
1ID01,Rabu,Pengantar Teknik Industri *,2/3,G226,ROSSI SEPTY WAHYUNI,1ID01
1ID01,Rabu,Kimia Dasar,5/6,G139,YASMAN RIANTO,1ID01
1ID01,Rabu,Dasar Komp. & Pemrograman A,7/8,G139,ARI ROSEMALA TRIASARI,1ID01
1ID01,Jum'at,Matematika Dasar B,1/2,F8456,DYAH CITA IRAWATI,1ID01
1ID01,Jum'at,Matematika Dasar A,3/4,F8456,RAVI AHMAD SALIM,1ID01
1ID02,Senin,Kimia Dasar,3/4,E414,ROMDHONI SUSILOATMADJA,1ID02
1ID02,Senin,Menggambar Teknik,5/6,E414,TRI MULYANTO,1ID02
1ID02,Senin,Dasar Komp. & Pemrograman B,7/8,E414,NURASIAH,1ID02
1ID02,Rabu,Dasar Komp. & Pemrograman A,1/2,G129,ARI ROSEMALA TRIASARI,1ID02
1ID02,Rabu,Fisika Dasar 1,3/4,G129,DESY HERTINSYANA,1ID02
1ID02,Rabu,Matematika Dasar A,6/7,G112,YULI FITRIYANI,1ID02
1ID02,Rabu,Matematika Dasar B,8/9,G112,DYAH CITA IRAWATI,1ID02
1ID02,Kamis,Bahasa Indonesia,1/2,G349,RAFIQA MAULIDIA,1ID02
1ID02,Kamis,Pengantar Teknik Industri *,4/5,G222,ROSSI SEPTY WAHYUNI,1ID02
1ID03,Senin,Dasar Komp. & Pemrograman A,1/2,G236,NURASIAH,1ID03
1ID03,Senin,Pengantar Teknik Industri *,4/5,G113,ROSSI SEPTY WAHYUNI,1ID03
1ID03,Senin,Bahasa Indonesia,6/7,G453,TRI BUDIARTA,1ID03
1ID03,Rabu,Kimia Dasar,3/4,G451,YASMAN RIANTO,1ID03
1ID03,Rabu,Dasar Komp. & Pemrograman B,5/6,G421,DEASY INDAYANTI,1ID03
1ID03,Jum'at,Matematika Dasar A,1/2,F8455,RAVI AHMAD SALIM,1ID03
1ID03,Jum'at,Fisika Dasar 1,3/4,F8455,HENING HENDRATO,1ID03
1ID03,Sabtu,Menggambar Teknik,6/7,G236,DWI HARDIONO,1ID03
1ID03,Sabtu,Matematika Dasar B,8/9,G236,EVAN PURNAMA RAMDAN,1ID03
1ID04,Senin,Kimia Dasar,1/2,E413,YASMAN RIANTO,1ID04
1ID04,Senin,Menggambar Teknik,3/4,E413,TRI MULYANTO,1ID04
1ID04,Senin,Bahasa Indonesia,5/6,E413,ANDINI KURNIA FITRIANA,1ID04
1ID04,Rabu,Fisika Dasar 1,1/2,G221,GATOT PRAYOGO,1ID04
1ID04,Rabu,Matematika Dasar A,3/4,G221,VERONICA ERNITA KRISTIANTI,1ID04
1ID04,Rabu,Matematika Dasar B,6/7,G224,DYAH CITA IRAWATI,1ID04
1ID04,Rabu,Pengantar Teknik Industri *,8/9,G224,ASEP MOHAMAD NOOR,1ID04
1ID04,Kamis,Dasar Komp. & Pemrograman B,5/6,G228,DEASY INDAYANTI,1ID04
1ID04,Kamis,Dasar Komp. & Pemrograman A,7/8,G228,NURASIAH,1ID04
1ID05,Rabu,Bahasa Indonesia,1/2,G139,NURMANINGSIH,1ID05
1ID05,Rabu,Dasar Komp. & Pemrograman A,4/5,G348,ARI ROSEMALA TRIASARI,1ID05
1ID05,Kamis,Pengantar Teknik Industri *,1/2,G237,PRAMESWARI RIZCHA JULIANDA,1ID05
1ID05,Kamis,Dasar Komp. & Pemrograman B,3/4,G228,DEASY INDAYANTI,1ID05
1ID05,Kamis,Matematika Dasar B,6/7,G316,REHULINA APRIYANTI,1ID05
1ID05,Jum'at,Fisika Dasar 1,1/2,F8451,HENING HENDRATO,1ID05
1ID05,Jum'at,Matematika Dasar A,3/4,F8451,DYAH CITA IRAWATI,1ID05
1ID05,Sabtu,Kimia Dasar,2/3,G238,SARASWATI RAMADHANI PRIYONO,1ID05
1ID05,Sabtu,Menggambar Teknik,4/5,G238,DWI HARDIONO,1ID05
1ID06,Rabu,Bahasa Indonesia,3/4,J139,MELANIAWATI,1ID06
1ID06,Rabu,Menggambar Teknik,5/6,J139,ACHMAD RISA HARFIT,1ID06
1ID06,Rabu,Fisika Dasar 1,7/8,J139,RIDHA ISKANDAR,1ID06
1ID06,Kamis,Dasar Komp. & Pemrograman A,1/2,J1211,NIA YUNINGSIH,1ID06
1ID06,Kamis,Pengantar Teknik Industri *,3/4,J1211,ASEP MOHAMAD NOOR,1ID06
1ID06,Kamis,Dasar Komp. & Pemrograman B,5/6,J1211,NOOR VIKA HIZVIANI,1ID06
1ID06,Kamis,Matematika Dasar A,8/9,J137,MARIA Y ARYATI WAHYUNINGRUM,1ID06
1ID06,Sabtu,Kimia Dasar,1/2,J133B,GITA RAKHMAWATI/MARIZA WIJAYANTI,1ID06
1ID06,Sabtu,Matematika Dasar B,3/4,J133B,POPONG SETIAWATI,1ID06
1ID07,Rabu,Menggambar Teknik,3/4,J127,DODDI YUNIARDI,1ID07
1ID07,Rabu,Fisika Dasar 1,5/6,J127,RIDHA ISKANDAR,1ID07
1ID07,Rabu,Bahasa Indonesia,7/8,J127,MELANIAWATI,1ID07
1ID07,Kamis,Pengantar Teknik Industri *,1/2,J1312,ASEP MOHAMAD NOOR,1ID07
1ID07,Kamis,Matematika Dasar A,5/6,J1312,MARIA Y ARYATI WAHYUNINGRUM,1ID07
1ID07,Kamis,Dasar Komp. & Pemrograman B,7/8,J1312,NOOR VIKA HIZVIANI,1ID07
1ID07,Sabtu,Dasar Komp. & Pemrograman A,1/2,J1410,YESSY ASRI,1ID07
1ID07,Sabtu,Kimia Dasar,3/4,J1410,GITA RAKHMAWATI/MARIZA WIJAYANTI,1ID07
1ID07,Sabtu,Matematika Dasar B,5/6,J1410,POPONG SETIAWATI,1ID07
1ID08,Rabu,Menggambar Teknik,1/2,J1416B,ACHMAD RISA HARFIT,1ID08
1ID08,Rabu,Fisika Dasar 1,3/4,J1416B,RIDHA ISKANDAR,1ID08
1ID08,Rabu,Bahasa Indonesia,7/8,J1411,SEPITRI DARUYANI,1ID08
1ID08,Kamis,Dasar Komp. & Pemrograman B,1/2,J1315B,NOOR VIKA HIZVIANI,1ID08
1ID08,Kamis,Matematika Dasar A,3/4,J1315B,SIGIT MUHAMAD YAKUB,1ID08
1ID08,Kamis,Pengantar Teknik Industri *,5/6,J1315B,MOEHAMAD ADI ROCHMAT,1ID08
1ID08,Sabtu,Matematika Dasar B,1/2,J1415,ARIFUDDIN,1ID08
1ID08,Sabtu,Dasar Komp. & Pemrograman A,3/4,J1415,YESSY ASRI,1ID08
1ID08,Sabtu,Kimia Dasar,5/6,J1415,GITA RAKHMAWATI/MARIZA WIJAYANTI,1ID08
1ID09,Senin,Fisika Dasar 1,1/2,K271,SANDY SURYO PRAYOGO,1ID09
1ID09,Senin,Dasar Komp. & Pemrograman A,3/4,K254,NOOR VIKA HIZVIANI,1ID09
1ID09,Selasa,Matematika Dasar B,2/3,K262,BAMBANG GUNAWAN H,1ID09
1ID09,Selasa,Dasar Komp. & Pemrograman B,4/5,K272,LU'LU MAWADDAH WISUDAWATI,1ID09
1ID09,Kamis,Kimia Dasar,1/2,K255,ROMDHONI SUSILOATMADJA,1ID09
1ID09,Kamis,Menggambar Teknik,3/4,K254,TRI MULYANTO,1ID09
1ID09,Jum'at,Matematika Dasar A,7/8,K243,VERONICA ERNITA KRISTIANTI,1ID09
1ID09,Sabtu,Bahasa Indonesia,1/2,K163,BELLA AMALIA,1ID09
1ID09,Sabtu,Pengantar Teknik Industri *,3/4,K284,RATIH WULANDARI,1ID09
1ID10,Senin,Dasar Komp. & Pemrograman A,1/2,K254,NOOR VIKA HIZVIANI,1ID10
1ID10,Senin,Fisika Dasar 1,3/4,K271,SANDY SURYO PRAYOGO,1ID10
1ID10,Senin,Pengantar Teknik Industri *,5/6,K262,ASEP MOHAMAD NOOR,1ID10
1ID10,Selasa,Dasar Komp. & Pemrograman B,2/3,K272,LU'LU MAWADDAH WISUDAWATI,1ID10
1ID10,Selasa,Matematika Dasar B,4/5,K262,BAMBANG GUNAWAN H,1ID10
1ID10,Kamis,Menggambar Teknik,1/2,K254,TRI MULYANTO,1ID10
1ID10,Kamis,Kimia Dasar,3/4,K255,ROMDHONI SUSILOATMADJA,1ID10
1ID10,Jum'at,Matematika Dasar A,3/4,K243,VERONICA ERNITA KRISTIANTI,1ID10
1ID10,Sabtu,Bahasa Indonesia,3/4,K163,BELLA AMALIA,1ID10
2ID01,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2ID01
2ID01,Selasa,Penelitian Operasional *,3/4/5,E334,AINUL HAQ,2ID01
2ID01,Selasa,Pengetahuan Lingkungan,6/7,E334,AGUS SULAKSONO,2ID01
2ID01,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2ID01
2ID01,Jum'at,Kalkulus 2,2/3/4,E334,ARIYANTO1,2ID01
2ID01,Jum'at,Pendidikan Pancasila *,7/8,E235,DWIGHT GEORGE NAYOAN,2ID01
2ID01,Sabtu,Matriks dan Ruang Vektor,1/2/3,G228,DARWIS ABDUL ROHMAN,2ID01
2ID01,Sabtu,Pengantar Ilmu Ekonomi,4/5,G228,AULIA GUNTUR WIBISONO,2ID01
2ID01,Sabtu,Statistika Inferensia */**,7/8,G228,YAHYA ZULKARNAIN,2ID01
2ID02,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2ID02
2ID02,Selasa,Pengantar Ilmu Ekonomi,3/4,E227,WIDYATMINI,2ID02
2ID02,Selasa,Kalkulus 2,5/6/7,E227,DODDI YUNIARDI,2ID02
2ID02,Selasa,Pendidikan Pancasila *,9/10,E311,MUSANA,2ID02
2ID02,Kamis,Pengetahuan Lingkungan,1/2,G123,YAHYA ZULKARNAIN,2ID02
2ID02,Kamis,Statistika Inferensia */**,3/4,G123,RAKHMA OKTAVINA,2ID02
2ID02,Jum'at,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2ID02
2ID02,Jum'at,Penelitian Operasional *,2/3/4,D614,RATIH WULANDARI,2ID02
2ID02,Sabtu,Matriks dan Ruang Vektor,1/2/3,G133,ARIEF NURDINI,2ID02
2ID03,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2ID03
2ID03,Selasa,Pendidikan Pancasila *,1/2,G216,WIDIO PURWANI,2ID03
2ID03,Selasa,Kalkulus 2,3/4/5,G216,ARIYANTO1,2ID03
2ID03,Selasa,Penelitian Operasional *,7/8/9,G345,AINUL HAQ,2ID03
2ID03,Rabu,Matriks dan Ruang Vektor,4/5/6,G441,ELSA OKTAVITRI,2ID03
2ID03,Rabu,Statistika Inferensia */**,8/9,G233,RAKHMA OKTAVINA,2ID03
2ID03,Kamis,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2ID03
2ID03,Sabtu,Pengantar Ilmu Ekonomi,7/8,E223,ZARWISMAN,2ID03
2ID03,Sabtu,Pengetahuan Lingkungan,9/10,E223,ANITA2,2ID03
2ID04,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2ID04
2ID04,Selasa,Kalkulus 2,1/2/3,G115,M. ABDUL RIVAI,2ID04
2ID04,Selasa,Pendidikan Pancasila *,4/5,G115,WIDIO PURWANI,2ID04
2ID04,Selasa,Pengantar Ilmu Ekonomi,7/8,G248,ASHAR BASYIR,2ID04
2ID04,Kamis,Statistika Inferensia */**,1/2,G122,RAKHMA OKTAVINA,2ID04
2ID04,Kamis,Penelitian Operasional *,4/5/6,G2410,RATIH WULANDARI,2ID04
2ID04,Jum'at,Praktikum Komputasi Big Data,6/7,,TIM DOSEN,2ID04
2ID04,Sabtu,Matriks dan Ruang Vektor,4/5/6,G223,ARIEF NURDINI,2ID04
2ID04,Sabtu,Pengetahuan Lingkungan,7/8,G223,ANITA2,2ID04
2ID05,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2ID05
2ID05,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2ID05
2ID05,Rabu,Kalkulus 2,6/7/8,D641,DESTYANTO ANGGORO,2ID05
2ID05,Kamis,Pengantar Ilmu Ekonomi,1/2,G113,WIDYATMINI,2ID05
2ID05,Kamis,Pendidikan Pancasila *,3/4,G113,MEI RAHARJA,2ID05
2ID05,Kamis,Pengetahuan Lingkungan,5/6,G113,YAHYA ZULKARNAIN,2ID05
2ID05,Sabtu,Penelitian Operasional *,1/2/3,G113,ANITA2,2ID05
2ID05,Sabtu,Matriks dan Ruang Vektor,5/6/7,G113,DARWIS ABDUL ROHMAN,2ID05
2ID05,Sabtu,Statistika Inferensia */**,8/9,G113,TIUR RODIALA SINAGA,2ID05
2ID06,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2ID06
2ID06,Selasa,Pengantar Ilmu Ekonomi,2/3,J127,MUHAMAD YUNANTO,2ID06
2ID06,Selasa,Statistika Inferensia */**,4/5,J127,ALSEN MEDIKANO,2ID06
2ID06,Rabu,Pengetahuan Lingkungan,3/4,J153,STEPHANUS BENEDICTUS BERA LIWUN,2ID06
2ID06,Rabu,Kalkulus 2,7/8/9,J1523,DODDI YUNIARDI,2ID06
2ID06,Kamis,Matriks dan Ruang Vektor,2/3/4,J326,ELSA OKTAVITRI,2ID06
2ID06,Kamis,Pendidikan Pancasila *,5/6,J326,SUDJIRAN,2ID06
2ID06,Kamis,Penelitian Operasional *,8/9/10,J326,YUYUN YUNIAR ROHMATIN,2ID06
2ID06,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2ID06
2ID07,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2ID07
2ID07,Selasa,Pengantar Ilmu Ekonomi,4/5,J119,MUHAMAD YUNANTO,2ID07
2ID07,Selasa,Statistika Inferensia */**,7/8,J119,ALSEN MEDIKANO,2ID07
2ID07,Rabu,Pengetahuan Lingkungan,1/2,J1216B,STEPHANUS BENEDICTUS BERA LIWUN,2ID07
2ID07,Rabu,Kalkulus 2,4/5/6,J1523,HERU HERDIANTO,2ID07
2ID07,Kamis,Pendidikan Pancasila *,1/2,J311,SUDJIRAN,2ID07
2ID07,Kamis,Penelitian Operasional *,4/5/6,J311,AGUS SULAKSONO,2ID07
2ID07,Kamis,Matriks dan Ruang Vektor,8/9/10,J311,ELSA OKTAVITRI,2ID07
2ID07,Sabtu,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2ID07
2ID08,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2ID08
2ID08,Selasa,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2ID08
2ID08,Selasa,Pengantar Ilmu Ekonomi,7/8,J127,MUHAMAD YUNANTO,2ID08
2ID08,Selasa,Statistika Inferensia */**,9/10,J127,ALSEN MEDIKANO,2ID08
2ID08,Rabu,Kalkulus 2,1/2/3,J1310,HERU HERDIANTO,2ID08
2ID08,Rabu,Pengetahuan Lingkungan,5/6,J1220,STEPHANUS BENEDICTUS BERA LIWUN,2ID08
2ID08,Kamis,Penelitian Operasional *,1/2/3,J336,AGUS SULAKSONO,2ID08
2ID08,Kamis,Matriks dan Ruang Vektor,5/6/7,J336,ELSA OKTAVITRI,2ID08
2ID08,Kamis,Pendidikan Pancasila *,8/9,J336,SUDJIRAN,2ID08
2ID09,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2ID09
2ID09,Selasa,Kalkulus 2,1/2/3,K291,ABDUL MUCHLIS,2ID09
2ID09,Rabu,Pengetahuan Lingkungan,4/5,K295,YAHYA ZULKARNAIN,2ID09
2ID09,Rabu,Matriks dan Ruang Vektor,6/7/8,K154,ILMIYATI SARI,2ID09
2ID09,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2ID09
2ID09,Kamis,Statistika Inferensia */**,6/7,K251,TITIEK IREWATI,2ID09
2ID09,Jum'at,Pengantar Ilmu Ekonomi,3/4,K288,DANIEL DAMARIS NOVRIANTO SURYAJAYA,2ID09
2ID09,Sabtu,Pendidikan Pancasila *,1/2,K175,LIANA ELFARISTO ARIANI,2ID09
2ID09,Sabtu,Penelitian Operasional *,4/5/6,K151,AGUS SULAKSONO,2ID09
2ID10,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2ID10
2ID10,Selasa,Kalkulus 2,4/5/6,K291,ABDUL MUCHLIS,2ID10
2ID10,Rabu,Penelitian Operasional *,1/2/3,K161,HOTNIAR SIRINGORINGO,2ID10
2ID10,Kamis,Pendidikan Pancasila *,1/2,K262,RIDWAN MUHAMMAD,2ID10
2ID10,Kamis,Statistika Inferensia */**,3/4,K251,TITIEK IREWATI,2ID10
2ID10,Jum'at,Pengantar Ilmu Ekonomi,1/2,K288,DANIEL DAMARIS NOVRIANTO SURYAJAYA,2ID10
2ID10,Jum'at,Pengetahuan Lingkungan,3/4,K296,NURJANNAH,2ID10
2ID10,Sabtu,Matriks dan Ruang Vektor,1/2/3,K151,AGUS SULAKSONO,2ID10
2ID10,Sabtu,Praktikum Komputasi Big Data,6/7,,TIM DOSEN,2ID10
2ID11,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2ID11
3ID01,Senin,Simulasi Sistem,4/5/6,E448,EMIRUL BAHAR,3ID01
3ID01,Rabu,Perenc. & Pengendalian Produksi *,1/2/3,G116,MAULIDA BORU BUTAR-BUTAR,3ID01
3ID01,Rabu,Tek.Keselamatan&Kesehatan Kerja,6/7,G422,ROSSI SEPTY WAHYUNI,3ID01
3ID01,Rabu,Pemodelan Sistem *,8/9,G422,NURJANNAH,3ID01
3ID01,Kamis,Metode Penelitian,1/2,E322,RATIH WULANDARI,3ID01
3ID01,Kamis,Peranc.Sistem Kerja&Ergonomi,3/4,E322,DIAN KEMALA PUTRI,3ID01
3ID01,Kamis,Material Teknik *,7/8,E224,HARIS RUDIANTO,3ID01
3ID01,Kamis,Analisis dan Estimasi Biaya,9/10,E224,BUDI HERMANA,3ID01
3ID02,Senin,Simulasi Sistem,6/7/8,E432,HOTNIAR SIRINGORINGO,3ID02
3ID02,Senin,Pemodelan Sistem *,9/10,E432,NANIH SUHARTINI,3ID02
3ID02,Rabu,Tek.Keselamatan&Kesehatan Kerja,1/2,G243,ELBI WISENO,3ID02
3ID02,Rabu,Perenc. & Pengendalian Produksi *,3/4/5,G243,NURJANNAH,3ID02
3ID02,Kamis,Peranc.Sistem Kerja&Ergonomi,1/2,E328,DIAN KEMALA PUTRI,3ID02
3ID02,Kamis,Analisis dan Estimasi Biaya,3/4,E328,BUDI HERMANA,3ID02
3ID02,Kamis,Metode Penelitian,7/8,E325,RAKHMA OKTAVINA,3ID02
3ID02,Kamis,Material Teknik *,9/10,E325,HARIS RUDIANTO,3ID02
3ID03,Selasa,Simulasi Sistem,1/2/3,G433,NANIH SUHARTINI,3ID03
3ID03,Selasa,Pemodelan Sistem *,6/7,G344,YAHYA ZULKARNAIN,3ID03
3ID03,Selasa,Metode Penelitian,8/9,G344,SYARIFUDDIN NASUTION,3ID03
3ID03,Kamis,Analisis dan Estimasi Biaya,1/2,G234,SUDARYANTO,3ID03
3ID03,Kamis,Perenc. & Pengendalian Produksi *,3/4/5,G234,INA SITI HASANAH,3ID03
3ID03,Kamis,Peranc.Sistem Kerja&Ergonomi,7/8,G145,NURJANNAH,3ID03
3ID03,Sabtu,Material Teknik *,5/6,E326,NINCY AYU LESTARI,3ID03
3ID03,Sabtu,Tek.Keselamatan&Kesehatan Kerja,7/8,E326,ARIEF NURDINI,3ID03
3ID04,Rabu,Pemodelan Sistem *,1/2,E432,NURJANNAH,3ID04
3ID04,Rabu,Simulasi Sistem,5/6/7,E434,EMIRUL BAHAR,3ID04
3ID04,Rabu,Material Teknik *,9/10,E413,SULAKSANA PERMANA,3ID04
3ID04,Kamis,Perenc. & Pengendalian Produksi *,1/2/3,G248,MAULIDA BORU BUTAR-BUTAR,3ID04
3ID04,Kamis,Analisis dan Estimasi Biaya,6/7,G128,SUDARYANTO,3ID04
3ID04,Kamis,Peranc.Sistem Kerja&Ergonomi,8/9,G128,DIAN KEMALA PUTRI,3ID04
3ID04,Sabtu,Metode Penelitian,6/7,E426,TIUR RODIALA SINAGA,3ID04
3ID04,Sabtu,Tek.Keselamatan&Kesehatan Kerja,9/10,E238,ARIEF NURDINI,3ID04
3ID05,Senin,Simulasi Sistem,1/2/3,E432,EMIRUL BAHAR,3ID05
3ID05,Senin,Pemodelan Sistem *,6/7,E311,NANIH SUHARTINI,3ID05
3ID05,Kamis,Peranc.Sistem Kerja&Ergonomi,1/2,G233,NURJANNAH,3ID05
3ID05,Kamis,Analisis dan Estimasi Biaya,3/4,G233,SUDARYANTO,3ID05
3ID05,Kamis,Tek.Keselamatan&Kesehatan Kerja,6/7,G114,DIAN KEMALA PUTRI,3ID05
3ID05,Kamis,Perenc. & Pengendalian Produksi *,8/9/10,G114,INA SITI HASANAH,3ID05
3ID05,Sabtu,Material Teknik *,1/2,E448,MUHAMMAD YUSUF NURFANI,3ID05
3ID05,Sabtu,Metode Penelitian,3/4,E448,TIUR RODIALA SINAGA,3ID05
3ID06,Senin,Metode Penelitian,1/2,J1511,NURUL KHOTIMAH,3ID06
3ID06,Senin,Tek.Keselamatan&Kesehatan Kerja,3/4,J1511,MOEHAMAD ADI ROCHMAT,3ID06
3ID06,Senin,Peranc.Sistem Kerja&Ergonomi,5/6,J1511,STEPHANUS BENEDICTUS BERA LIWUN,3ID06
3ID06,Rabu,Simulasi Sistem,2/3/4,J61001,NANIH SUHARTINI,3ID06
3ID06,Rabu,Analisis dan Estimasi Biaya,5/6,J61001,ALSEN MEDIKANO,3ID06
3ID06,Sabtu,Pemodelan Sistem *,1/2,J139,ARDHY LAZUARDY,3ID06
3ID06,Sabtu,Material Teknik *,3/4,J139,ABDUL RAHMAN AGUNG RAMADHAN,3ID06
3ID06,Sabtu,Perenc. & Pengendalian Produksi *,5/6/7,J139,YUYUN YUNIAR ROHMATIN,3ID06
3ID07,Senin,Pemodelan Sistem *,1/2,J1315B,ALSEN MEDIKANO,3ID07
3ID07,Senin,Peranc.Sistem Kerja&Ergonomi,3/4,J1315B,STEPHANUS BENEDICTUS BERA LIWUN,3ID07
3ID07,Senin,Metode Penelitian,5/6,J1315B,NURUL KHOTIMAH,3ID07
3ID07,Rabu,Tek.Keselamatan&Kesehatan Kerja,1/2,J61008,MOEHAMAD ADI ROCHMAT,3ID07
3ID07,Rabu,Analisis dan Estimasi Biaya,3/4,J61008,ALSEN MEDIKANO,3ID07
3ID07,Rabu,Simulasi Sistem,6/7/8,J61008,NANIH SUHARTINI,3ID07
3ID07,Sabtu,Perenc. & Pengendalian Produksi *,1/2/3,J1210,YUYUN YUNIAR ROHMATIN,3ID07
3ID07,Sabtu,Material Teknik *,5/6,J1411,ABDUL RAHMAN AGUNG RAMADHAN,3ID07
3ID08,Selasa,Analisis dan Estimasi Biaya,2/3,K297,YUYUN YUNIAR ROHMATIN,3ID08
3ID08,Rabu,Pemodelan Sistem *,2/3,K295,YAHYA ZULKARNAIN,3ID08
3ID08,Rabu,Metode Penelitian,4/5,K161,HOTNIAR SIRINGORINGO,3ID08
3ID08,Kamis,Simulasi Sistem,1/2/3,K242,NANIH SUHARTINI,3ID08
3ID08,Kamis,Peranc.Sistem Kerja&Ergonomi,4/5,K151,AINUL HAQ,3ID08
3ID08,Jum'at,Perenc. & Pengendalian Produksi *,2/3/4,K256,MAULIDA BORU BUTAR-BUTAR,3ID08
3ID08,Jum'at,Material Teknik *,6/7,K272,MOEHAMAD ADI ROCHMAT,3ID08
3ID08,Sabtu,Tek.Keselamatan&Kesehatan Kerja,6/7,K284,RATIH WULANDARI,3ID08
3ID09,Senin,Metode Penelitian,3/4,K293,SUDARYANTO,3ID09
3ID09,Selasa,Tek.Keselamatan&Kesehatan Kerja,2/3,K292,ROSSI SEPTY WAHYUNI,3ID09
3ID09,Selasa,Analisis dan Estimasi Biaya,4/5,K297,YUYUN YUNIAR ROHMATIN,3ID09
3ID09,Kamis,Peranc.Sistem Kerja&Ergonomi,2/3,K151,AINUL HAQ,3ID09
3ID09,Kamis,Simulasi Sistem,4/5/6,K242,NANIH SUHARTINI,3ID09
3ID09,Jum'at,Material Teknik *,3/4,K272,MOEHAMAD ADI ROCHMAT,3ID09
3ID09,Jum'at,Perenc. & Pengendalian Produksi *,6/7/8,K262,STEPHANUS BENEDICTUS BERA LIWUN,3ID09
3ID09,Sabtu,Pemodelan Sistem *,1/2,K282,PRAMESWARI RIZCHA JULIANDA,3ID09
4ID01,Senin,Analisis Rantai Pasok,1/2,G345,MAULIDA BORU BUTAR-BUTAR,4ID01
4ID01,Senin,Perancangan Tata Letak Fasilitas*,4/5,G222,INA SITI HASANAH,4ID01
4ID01,Selasa,Simulasi Sistem,1/2/3,E121,SYARIFUDDIN NASUTION,4ID01
4ID01,Selasa,Etika Profesi,4/5,E121,SUDARYANTO,4ID01
4ID01,Rabu,Rekayasa Mutu,2/3,G434,RAKHMA OKTAVINA,4ID01
4ID01,Rabu,Analisis & Peranc. Perusahaan *,5/6/7,G227,AINUL HAQ,4ID01
4ID01,Rabu,Manaj. Pemasaran Industri,8/9,G227,ROSSI SEPTY WAHYUNI,4ID01
4ID01,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4ID01
4ID01,Jum'at,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4ID01
4ID02,Senin,Manaj. Pemasaran Industri,1/2,E427,ROSSI SEPTY WAHYUNI,4ID02
4ID02,Senin,Analisis Rantai Pasok,3/4,E427,RATIH WULANDARI,4ID02
4ID02,Senin,Perancangan Tata Letak Fasilitas*,7/8,E511,AINUL HAQ,4ID02
4ID02,Rabu,Rekayasa Mutu,2/3,G455,PRAMESWARI RIZCHA JULIANDA,4ID02
4ID02,Rabu,Analisis & Peranc. Perusahaan *,5/6/7,G349,ASEP MOHAMAD NOOR,4ID02
4ID02,Rabu,Etika Profesi,9/10,G139,SUDARYANTO,4ID02
4ID02,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4ID02
4ID02,Jum'at,Simulasi Sistem,2/3/4,F8445,EMIRUL BAHAR,4ID02
4ID02,Sabtu,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4ID02
4ID03,Senin,Analisis Rantai Pasok,3/4,G344,MAULIDA BORU BUTAR-BUTAR,4ID03
4ID03,Senin,Etika Profesi,6/7,G127,DIAN KEMALA PUTRI,4ID03
4ID03,Senin,Perancangan Tata Letak Fasilitas*,8/9,G127,INA SITI HASANAH,4ID03
4ID03,Rabu,Manaj. Pemasaran Industri,2/3,G433,POSO NUGROHO,4ID03
4ID03,Rabu,Rekayasa Mutu,4/5,G433,RAKHMA OKTAVINA,4ID03
4ID03,Rabu,Analisis & Peranc. Perusahaan *,8/9/10,G349,PRAMESWARI RIZCHA JULIANDA,4ID03
4ID03,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4ID03
4ID03,Jum'at,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4ID03
4ID03,Sabtu,Simulasi Sistem,4/5/6,G226,ANITA2,4ID03
4ID04,Senin,Simulasi Sistem,2/3/4,E323,HOTNIAR SIRINGORINGO,4ID04
4ID04,Senin,Analisis Rantai Pasok,6/7,E133,RATIH WULANDARI,4ID04
4ID04,Selasa,Rekayasa Mutu,3/4,F8446,YAHYA ZULKARNAIN,4ID04
4ID04,Selasa,Analisis & Peranc. Perusahaan *,7/8/9,F8445,PRAMESWARI RIZCHA JULIANDA,4ID04
4ID04,Rabu,Manaj. Pemasaran Industri,4/5,G234,POSO NUGROHO,4ID04
4ID04,Rabu,Etika Profesi,7/8,G234,SUDARYANTO,4ID04
4ID04,Rabu,Perancangan Tata Letak Fasilitas*,9/10,G234,AINUL HAQ,4ID04
4ID04,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4ID04
4ID04,Jum'at,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4ID04
4ID05,Senin,Perancangan Tata Letak Fasilitas*,2/3,G228,INA SITI HASANAH,4ID05
4ID05,Senin,Analisis Rantai Pasok,6/7,G138,MAULIDA BORU BUTAR-BUTAR,4ID05
4ID05,Senin,Etika Profesi,8/9,G138,DIAN KEMALA PUTRI,4ID05
4ID05,Selasa,Simulasi Sistem,4/5/6,E132,SYARIFUDDIN NASUTION,4ID05
4ID05,Rabu,Analisis & Peranc. Perusahaan *,1/2/3,G142,ASEP MOHAMAD NOOR,4ID05
4ID05,Rabu,Rekayasa Mutu,4/5,G142,PRAMESWARI RIZCHA JULIANDA,4ID05
4ID05,Rabu,Manaj. Pemasaran Industri,7/8,G143,POSO NUGROHO,4ID05
4ID05,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4ID05
4ID05,Jum'at,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4ID05
4ID06,Senin,Analisis Rantai Pasok,1/2,J1417,YUYUN YUNIAR ROHMATIN,4ID06
4ID06,Senin,Rekayasa Mutu,3/4,J1417,ALSEN MEDIKANO,4ID06
4ID06,Senin,Analisis & Peranc. Perusahaan *,7/8/9,J1417,MOEHAMAD ADI ROCHMAT,4ID06
4ID06,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4ID06
4ID06,Kamis,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4ID06
4ID06,Jum'at,Etika Profesi,1/2,J1417,AGUS SULAKSONO,4ID06
4ID06,Jum'at,Perancangan Tata Letak Fasilitas*,3/4,J1417,SYARIFUDDIN NASUTION,4ID06
4ID06,Jum'at,Manaj. Pemasaran Industri,7/8,J1417,DINI TRI WARDANI,4ID06
4ID06,Sabtu,Simulasi Sistem,3/4/5,J1319,ARDHY LAZUARDY,4ID06
4ID07,Selasa,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4ID07
4ID07,Rabu,Rekayasa Mutu,1/2,J61007,ALSEN MEDIKANO,4ID07
4ID07,Rabu,Analisis & Peranc. Perusahaan *,4/5/6,J61007,MOEHAMAD ADI ROCHMAT,4ID07
4ID07,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4ID07
4ID07,Jum'at,Analisis Rantai Pasok,1/2,J154,YUYUN YUNIAR ROHMATIN,4ID07
4ID07,Jum'at,Etika Profesi,3/4,J154,AGUS SULAKSONO,4ID07
4ID07,Jum'at,Perancangan Tata Letak Fasilitas*,7/8,J154,SYARIFUDDIN NASUTION,4ID07
4ID07,Jum'at,Manaj. Pemasaran Industri,9/10,J154,DINI TRI WARDANI,4ID07
4ID07,Sabtu,Simulasi Sistem,6/7/8,J1616,ARDHY LAZUARDY,4ID07
4ID08,Senin,Etika Profesi,1/2,K293,SUDARYANTO,4ID08
4ID08,Senin,Manaj. Pemasaran Industri,3/4,K284,RAKHMA OKTAVINA,4ID08
4ID08,Rabu,Perancangan Tata Letak Fasilitas*,1/2,K254,INA SITI HASANAH,4ID08
4ID08,Rabu,Simulasi Sistem,4/5/6,K292,SYARIFUDDIN NASUTION,4ID08
4ID08,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4ID08
4ID08,Kamis,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4ID08
4ID08,Jum'at,Analisis & Peranc. Perusahaan *,2/3/4,K262,STEPHANUS BENEDICTUS BERA LIWUN,4ID08
4ID08,Jum'at,Rekayasa Mutu,6/7,K155,ALSEN MEDIKANO,4ID08
4ID08,Sabtu,Analisis Rantai Pasok,3/4,K282,PRAMESWARI RIZCHA JULIANDA,4ID08
4ID09,Senin,Rekayasa Mutu,1/2,K284,RAKHMA OKTAVINA,4ID09
4ID09,Senin,Etika Profesi,3/4,K262,ASEP MOHAMAD NOOR,4ID09
4ID09,Selasa,Analisis & Peranc. Perusahaan *,4/5/6,K292,ROSSI SEPTY WAHYUNI,4ID09
4ID09,Rabu,Simulasi Sistem,1/2/3,K292,SYARIFUDDIN NASUTION,4ID09
4ID09,Rabu,Perancangan Tata Letak Fasilitas*,4/5,K254,INA SITI HASANAH,4ID09
4ID09,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4ID09
4ID09,Kamis,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4ID09
4ID09,Jum'at,Manaj. Pemasaran Industri,3/4,K155,ALSEN MEDIKANO,4ID09
4ID09,Jum'at,Analisis Rantai Pasok,6/7,K256,MAULIDA BORU BUTAR-BUTAR,4ID09
1EA01,Senin,Pendidikan Kewarganegaraan,3/4,E313,HELNAWATY,1EA01
1EA01,Senin,Pendidikan Agama Islam,5/6,E313,MUHAMAD DARWIN NASUTION,1EA01
1EA01,Senin,Pengantar Ekonomi 1,9/10,E245,BAGUS NURCAHYO,1EA01
1EA01,Rabu,Pengantar Komputer & TI 1A,1/2,G224,ELVINA,1EA01
1EA01,Rabu,Matematika Ekonomi 1 **,3/4/5,G224,ERNI RIHYANTI,1EA01
1EA01,Rabu,Pengantar Komputer & TI 1C,7/8,G221,ORITA DWI PURBIYANTI,1EA01
1EA01,Kamis,Pengantar Akuntansi 1 **,4/5/6,D622,ISTICHANAH,1EA01
1EA01,Kamis,Pengantar Komputer & TI 1B,7/8,D635,YULI MAHARETTA ARIANTI,1EA01
1EA01,Jum'at,Ilmu Budaya Dasar,3/4,E222,TATI SUNARTI,1EA01
1EA01,Jum'at,Dasar Pemasaran,7/8,E222,EVA KARLA,1EA01
1EA01,Jum'at,Bahasa Inggris,9/10,E222,TIARMA IKA YULIANA,1EA01
1EA02,Senin,Pengantar Ekonomi 1,1/2,G128,DYAH ESTHI PERWITASARI,1EA02
1EA02,Senin,Pendidikan Agama Islam,3/4,G128,MULYADI,1EA02
1EA02,Senin,Pendidikan Kewarganegaraan,5/6,G128,ERNI KARYATI,1EA02
1EA02,Senin,Dasar Pemasaran,9/10,G126,KARTIKA SUKMAWATI,1EA02
1EA02,Rabu,Pengantar Akuntansi 1 **,1/2/3,D612,NOVA ANGGRAINIE,1EA02
1EA02,Rabu,Matematika Ekonomi 1 **,4/5/6,D612,ENDAH BUDIYATI,1EA02
1EA02,Rabu,Pengantar Komputer & TI 1C,9/10,D655,YULIA EKA PRAPTININGSIH,1EA02
1EA02,Kamis,Pengantar Komputer & TI 1B,4/5,E511,FITRI SJAFRINA,1EA02
1EA02,Kamis,Bahasa Inggris,6/7,E338,DYAH AMBAR WURYANDARI,1EA02
1EA02,Jum'at,Ilmu Budaya Dasar,1/2,G139,DIMAS RADHITIO ATMOHADI KUSUMO,1EA02
1EA02,Jum'at,Pengantar Komputer & TI 1A,3/4,G139,SRI DWI SUGIARSIH,1EA02
1EA03,Senin,Ilmu Budaya Dasar,5/6,G126,WURI PURNAMASARI,1EA03
1EA03,Senin,Pendidikan Kewarganegaraan,7/8,G126,ERNI KARYATI,1EA03
1EA03,Rabu,Pengantar Komputer & TI 1B,4/5,D643,LATIPATURACHMANIAH,1EA03
1EA03,Rabu,Pengantar Komputer & TI 1C,7/8,D644,YULIA EKA PRAPTININGSIH,1EA03
1EA03,Rabu,Pengantar Komputer & TI 1A,9/10,D644,VIRA YOLANDA,1EA03
1EA03,Kamis,Pengantar Akuntansi 1 **,1/2/3,D614,NOVA ANGGRAINIE,1EA03
1EA03,Kamis,Matematika Ekonomi 1 **,4/5/6,D614,DIDIN MUKODIM/MARIA T A DEWI,1EA03
1EA03,Jum'at,Pendidikan Agama Islam,1/2,E318,NOVIANTO,1EA03
1EA03,Jum'at,Dasar Pemasaran,3/4,E318,YUSYE MILAWATY,1EA03
1EA03,Jum'at,Bahasa Inggris,7/8,E346,TIARMA IKA YULIANA,1EA03
1EA03,Jum'at,Pengantar Ekonomi 1,9/10,E346,ZUHAD ICHYAUDIN,1EA03
1EA04,Senin,Pengantar Komputer & TI 1B,1/2,G133,AGUSTINE HANA MASITOH,1EA04
1EA04,Senin,Ilmu Budaya Dasar,3/4,G133,WURI PURNAMASARI,1EA04
1EA04,Senin,Bahasa Inggris,7/8,G455,GANJAR RESTO PAMBUDI,1EA04
1EA04,Senin,Pengantar Komputer & TI 1A,9/10,G455,ABDUL HAFIDH SIDIQ,1EA04
1EA04,Rabu,Pengantar Ekonomi 1,3/4,G215,MOHAMMAD ABDUL MUKHYI,1EA04
1EA04,Rabu,Matematika Ekonomi 1 **,7/8/9,G232,ICHSANI MURSIDAH,1EA04
1EA04,Kamis,Dasar Pemasaran,3/4,G126,EVA KARLA,1EA04
1EA04,Kamis,Pengantar Akuntansi 1 **,5/6/7,G126,SUPININGTYAS PURWANINGRUM,1EA04
1EA04,Kamis,Pengantar Komputer & TI 1C,8/9,G126,SUCI BR KEMBAREN,1EA04
1EA04,Sabtu,Pendidikan Kewarganegaraan,1/2,E243,EDWIN HARLAN,1EA04
1EA04,Sabtu,Pendidikan Agama Islam,4/5,E243,AIKKO FAIHA / FATCHULLAH ZARKASI,1EA04
1EA05,Senin,Pendidikan Kewarganegaraan,2/3,G222,SULISTINING TRIMULYANI,1EA05
1EA05,Senin,Matematika Ekonomi 1 **,5/6/7,G223,MUHAMMAD IMRON HADISANTOSA,1EA05
1EA05,Senin,Pengantar Akuntansi 1 **,8/9/10,G223,IRA PHAJAR LESTARI,1EA05
1EA05,Rabu,Pengantar Ekonomi 1,1/2,G238,MOHAMMAD ABDUL MUKHYI,1EA05
1EA05,Rabu,Pengantar Komputer & TI 1B,3/4,G238,AGUSTINE HANA MASITOH,1EA05
1EA05,Rabu,Dasar Pemasaran,6/7,G455,EKANING SETYARINI,1EA05
1EA05,Rabu,Ilmu Budaya Dasar,8/9,G455,AYU NINGTIYAS,1EA05
1EA05,Jum'at,Bahasa Inggris,1/2,E312,SUPRIATNOKO,1EA05
1EA05,Jum'at,Pengantar Komputer & TI 1C,3/4,E312,MURTIWIYATI,1EA05
1EA05,Jum'at,Pengantar Komputer & TI 1A,7/8,E347,SRI DWI SUGIARSIH,1EA05
1EA05,Jum'at,Pendidikan Agama Islam,9/10,E347,FATCHULLAH ZARKASI,1EA05
1EA06,Senin,Bahasa Inggris,3/4,G239,ATIKA LISTYA,1EA06
1EA06,Senin,Pengantar Komputer & TI 1B,5/6,G239,AGUSTINE HANA MASITOH,1EA06
1EA06,Senin,Pengantar Ekonomi 1,7/8,G239,DASSAAD,1EA06
1EA06,Rabu,Pendidikan Kewarganegaraan,1/2,E522,ATI HARMONI,1EA06
1EA06,Rabu,Matematika Ekonomi 1 **,5/6/7,E447,DESTI RIMINARSIH,1EA06
1EA06,Rabu,Pengantar Komputer & TI 1A,9/10,E314,ABDUL HAFIDH SIDIQ,1EA06
1EA06,Kamis,Pendidikan Agama Islam,1/2,G138,ABDUL ROHMAN,1EA06
1EA06,Kamis,Dasar Pemasaran,5/6,G123,EVA KARLA,1EA06
1EA06,Jum'at,Pengantar Komputer & TI 1C,1/2,E345,MURTIWIYATI,1EA06
1EA06,Jum'at,Ilmu Budaya Dasar,3/4,E345,DADI KUSWANDI,1EA06
1EA06,Jum'at,Pengantar Akuntansi 1 **,7/8/9,E348,SRI SAPTO DARMAWATI,1EA06
1EA07,Senin,Dasar Pemasaran,2/3,G215,KARTIKA SUKMAWATI,1EA07
1EA07,Senin,Pendidikan Kewarganegaraan,5/6,G247,FITRI RISMIYATI,1EA07
1EA07,Senin,Pengantar Komputer & TI 1A,7/8,G247,ABDUL HAFIDH SIDIQ,1EA07
1EA07,Rabu,Pengantar Komputer & TI 1B,1/2,G125,AGUSTINE HANA MASITOH,1EA07
1EA07,Rabu,Pengantar Komputer & TI 1C,3/4,G125,YULIA EKA PRAPTININGSIH,1EA07
1EA07,Rabu,Pendidikan Agama Islam,7/8,G245,APIPUDIN,1EA07
1EA07,Jum'at,Pengantar Akuntansi 1 **,2/3/4,E245,ISTICHANAH,1EA07
1EA07,Jum'at,Ilmu Budaya Dasar,7/8,E245,DADI KUSWANDI,1EA07
1EA07,Sabtu,Bahasa Inggris,1/2,E332,IRSYA INDIWARA,1EA07
1EA07,Sabtu,Pengantar Ekonomi 1,3/4,E332,JUNI SASMIHARTI,1EA07
1EA07,Sabtu,Matematika Ekonomi 1 **,5/6/7,E332,ADITYA NUGRAHA,1EA07
1EA08,Senin,Dasar Pemasaran,1/2,G124,RATNA SUSILOWATI,1EA08
1EA08,Senin,Pendidikan Kewarganegaraan,5/6,G237,SINGGIH HARDJANTO,1EA08
1EA08,Senin,Pendidikan Agama Islam,7/8,G237,AULIA NUGRAHA,1EA08
1EA08,Senin,Pengantar Komputer & TI 1C,9/10,G237,RISDIANDRI ISKANDAR,1EA08
1EA08,Rabu,Pengantar Komputer & TI 1A,3/4,E432,DWI SETYASIH,1EA08
1EA08,Rabu,Bahasa Inggris,6/7,E435,WATI PURNAMASARI,1EA08
1EA08,Rabu,Pengantar Akuntansi 1 **,8/9/10,E435,BERTILIA LINA KUSRINA,1EA08
1EA08,Kamis,Matematika Ekonomi 1 **,1/2/3,D613,DIDIN MUKODIM/MARIA T A DEWI,1EA08
1EA08,Kamis,Pengantar Komputer & TI 1B,4/5,D613,YULI MAHARETTA ARIANTI,1EA08
1EA08,Sabtu,Pengantar Ekonomi 1,3/4,E323,BENYAMIN ELIEZER PASCARENO,1EA08
1EA08,Sabtu,Ilmu Budaya Dasar,7/8,E243,ANSHAR PATRIA,1EA08
1EA09,Senin,Pengantar Akuntansi 1 **,4/5/6,G216,IRA PHAJAR LESTARI,1EA09
1EA09,Senin,Dasar Pemasaran,7/8,G149,KARTIKA SUKMAWATI,1EA09
1EA09,Senin,Ilmu Budaya Dasar,9/10,G216,TATI SUNARTI,1EA09
1EA09,Rabu,Matematika Ekonomi 1 **,1/2/3,D642,ENDAH BUDIYATI,1EA09
1EA09,Rabu,Pengantar Komputer & TI 1C,4/5,D642,VIRA YOLANDA,1EA09
1EA09,Rabu,Pengantar Komputer & TI 1B,6/7,D642,LATIPATURACHMANIAH,1EA09
1EA09,Rabu,Pengantar Komputer & TI 1A,9/10,D642,DEASY INDAYANTI,1EA09
1EA09,Jum'at,Pendidikan Agama Islam,1/2,E232,BURHANUDDIN DJAMALUDDIN,1EA09
1EA09,Jum'at,Bahasa Inggris,3/4,E232,DYANI MASITA DEWI,1EA09
1EA09,Jum'at,Pengantar Ekonomi 1,7/8,E234,SULASTRI,1EA09
1EA09,Jum'at,Pendidikan Kewarganegaraan,9/10,E234,RIDWAN HARLAN,1EA09
1EA10,Senin,Pengantar Komputer & TI 1C,1/2,G453,RISDIANDRI ISKANDAR,1EA10
1EA10,Senin,Pengantar Komputer & TI 1B,3/4,G453,IRA WINDARTI,1EA10
1EA10,Senin,Pendidikan Agama Islam,7/8,G435,NUR MUNIR,1EA10
1EA10,Senin,Pengantar Komputer & TI 1A,9/10,G227,SITI CHODIDJAH,1EA10
1EA10,Rabu,Dasar Pemasaran,5/6,E124,KARTIKA SUKMAWATI,1EA10
1EA10,Rabu,Ilmu Budaya Dasar,7/8,E124,DINI TRI WARDANI,1EA10
1EA10,Rabu,Bahasa Inggris,9/10,E124,STELLA AMANDA,1EA10
1EA10,Jum'at,Pengantar Akuntansi 1 **,2/3/4,E325,AGUSTIN RUSIANA SARI,1EA10
1EA10,Jum'at,Pendidikan Kewarganegaraan,7/8,E338,RIDWAN HARLAN,1EA10
1EA10,Jum'at,Pengantar Ekonomi 1,9/10,E338,SULASTRI,1EA10
1EA10,Sabtu,Matematika Ekonomi 1 **,8/9/10,E318,REINAL RACHMAVIAL,1EA10
1EA11,Senin,Pendidikan Kewarganegaraan,1/2,E311,HELNAWATY,1EA11
1EA11,Senin,Pengantar Ekonomi 1,3/4,E311,DASSAAD,1EA11
1EA11,Rabu,Ilmu Budaya Dasar,1/2,E414,DINI TRI WARDANI,1EA11
1EA11,Rabu,Pengantar Komputer & TI 1A,3/4,E414,SUSI WIDAYATI,1EA11
1EA11,Rabu,Pendidikan Agama Islam,5/6,E414,ABBAS MUHAMMAD BASALAMAH,1EA11
1EA11,Kamis,Pengantar Komputer & TI 1C,1/2,D664,DWI SETYASIH,1EA11
1EA11,Kamis,Pengantar Akuntansi 1 **,4/5/6,D632,RIYANTI,1EA11
1EA11,Kamis,Matematika Ekonomi 1 **,8/9/10,D644,HENNY HERYANDINI,1EA11
1EA11,Jum'at,Pengantar Komputer & TI 1B,1/2,E322,FARIDA AMALYA,1EA11
1EA11,Jum'at,Dasar Pemasaran,3/4,E322,EVA KARLA,1EA11
1EA11,Jum'at,Bahasa Inggris,7/8,E137,VIDIA PUSPITA,1EA11
1EA12,Senin,Pengantar Ekonomi 1,1/2,E516,DASSAAD,1EA12
1EA12,Senin,Pendidikan Kewarganegaraan,5/6,E516,MARTI RIASTUTI,1EA12
1EA12,Senin,Ilmu Budaya Dasar,7/8,E516,DWI INDAH UTAMI NINGSIH,1EA12
1EA12,Rabu,Pengantar Komputer & TI 1A,1/2,E413,SUSI WIDAYATI,1EA12
1EA12,Rabu,Matematika Ekonomi 1 **,5/6/7,E318,BAMBANG GUNAWAN H,1EA12
1EA12,Kamis,Pengantar Komputer & TI 1C,3/4,D653,DWI SETYASIH,1EA12
1EA12,Kamis,Pengantar Akuntansi 1 **,5/6/7,D653,NOVA ANGGRAINIE,1EA12
1EA12,Jum'at,Dasar Pemasaran,1/2,E323,EVA KARLA,1EA12
1EA12,Jum'at,Pengantar Komputer & TI 1B,3/4,E323,FARIDA AMALYA,1EA12
1EA12,Jum'at,Pendidikan Agama Islam,7/8,E341,NOVIANTO,1EA12
1EA12,Jum'at,Bahasa Inggris,9/10,E341,ZAINAL RIADI,1EA12
1EA13,Senin,Pendidikan Kewarganegaraan,3/4,E516,MARTI RIASTUTI,1EA13
1EA13,Senin,Pengantar Ekonomi 1,7/8,E337,BAGUS NURCAHYO,1EA13
1EA13,Rabu,Pendidikan Agama Islam,1/2,E318,ABBAS MUHAMMAD BASALAMAH,1EA13
1EA13,Rabu,Dasar Pemasaran,3/4,E318,KARTIKA SUKMAWATI,1EA13
1EA13,Rabu,Pengantar Komputer & TI 1A,6/7,E214,SUSI WIDAYATI,1EA13
1EA13,Rabu,Matematika Ekonomi 1 **,8/9/10,E214,BAMBANG GUNAWAN H,1EA13
1EA13,Kamis,Pengantar Akuntansi 1 **,1/2/3,D626,RIYANTI,1EA13
1EA13,Kamis,Pengantar Komputer & TI 1C,5/6,D623,DWI SETYASIH,1EA13
1EA13,Kamis,Pengantar Komputer & TI 1B,7/8,D623,ERMA SOVA,1EA13
1EA13,Jum'at,Bahasa Inggris,1/2,E435,VIDIA PUSPITA,1EA13
1EA13,Jum'at,Ilmu Budaya Dasar,3/4,E435,ELY SAPTO UTOMO,1EA13
1EA14,Rabu,Pendidikan Agama Islam,1/2,E231,APIPUDIN,1EA14
1EA14,Rabu,Pengantar Akuntansi 1 **,5/6/7,E246,BERTILIA LINA KUSRINA,1EA14
1EA14,Rabu,Pengantar Komputer & TI 1C,9/10,E225,SUCI BR KEMBAREN,1EA14
1EA14,Kamis,Bahasa Inggris,3/4,E524,DYAH AMBAR WURYANDARI,1EA14
1EA14,Kamis,Ilmu Budaya Dasar,5/6,E524,OKTARINA NUR WIDYANTI,1EA14
1EA14,Kamis,Matematika Ekonomi 1 **,8/9/10,E414,SITI MAESAROH,1EA14
1EA14,Jum'at,Pengantar Komputer & TI 1B,3/4,E238,ERMA SOVA,1EA14
1EA14,Jum'at,Pengantar Ekonomi 1,7/8,E221,ASHAR BASYIR,1EA14
1EA14,Jum'at,Dasar Pemasaran,9/10,E221,EVA KARLA,1EA14
1EA14,Sabtu,Pendidikan Kewarganegaraan,1/2,E435,EDI FAKHRI,1EA14
1EA14,Sabtu,Pengantar Komputer & TI 1A,3/4,E435,MUHAMMAD FADLY,1EA14
1EA15,Senin,Matematika Ekonomi 1 **,3/4/5,E248,SELI SITI SHOLIHAT,1EA15
1EA15,Senin,Bahasa Inggris,6/7,E248,MOHAMMAD YUSUF,1EA15
1EA15,Rabu,Pengantar Komputer & TI 1A,1/2,G424,DEASY INDAYANTI,1EA15
1EA15,Rabu,Pengantar Akuntansi 1 **,5/6/7,G425,NOVA ANGGRAINIE,1EA15
1EA15,Jum'at,Dasar Pemasaran,1/2,E311,YUSYE MILAWATY,1EA15
1EA15,Jum'at,Pendidikan Agama Islam,3/4,E311,NOVIANTO,1EA15
1EA15,Jum'at,Pendidikan Kewarganegaraan,7/8,E315,ERNI KARYATI,1EA15
1EA15,Jum'at,Ilmu Budaya Dasar,9/10,E315,ADELIA RIANA DEWI,1EA15
1EA15,Sabtu,Pengantar Komputer & TI 1C,1/2,E217,YUDI IRAWAN CHANDRA,1EA15
1EA15,Sabtu,Pengantar Komputer & TI 1B,3/4,E217,YUDI IRAWAN CHANDRA,1EA15
1EA15,Sabtu,Pengantar Ekonomi 1,5/6,E217,JUNI SASMIHARTI,1EA15
1EA16,Senin,Pengantar Komputer & TI 1B,3/4,G226,AGUSTINE HANA MASITOH,1EA16
1EA16,Senin,Bahasa Inggris,5/6,G226,AULIA HARIS FIRSTIYANTI,1EA16
1EA16,Rabu,Pengantar Komputer & TI 1C,1/2,G425,ORITA DWI PURBIYANTI,1EA16
1EA16,Rabu,Pengantar Komputer & TI 1A,3/4,G425,DEASY INDAYANTI,1EA16
1EA16,Rabu,Matematika Ekonomi 1 **,6/7/8,G435,MUHAMMAD IMRON HADISANTOSA,1EA16
1EA16,Rabu,Dasar Pemasaran,9/10,G435,EKANING SETYARINI,1EA16
1EA16,Jum'at,Pengantar Ekonomi 1,1/2,E513,BAGUS NURCAHYO,1EA16
1EA16,Jum'at,Pendidikan Kewarganegaraan,3/4,E513,ERNI KARYATI,1EA16
1EA16,Jum'at,Pengantar Akuntansi 1 **,7/8/9,E511,RINO RINALDO,1EA16
1EA16,Sabtu,Pendidikan Agama Islam,1/2,E516,ABIYYU ZHARIF NUGROHO,1EA16
1EA16,Sabtu,Ilmu Budaya Dasar,3/4,E516,RANTI PUTRI PRATIWI,1EA16
1EA17,Senin,Pendidikan Agama Islam,1/2,E433,MUHAMAD DARWIN NASUTION,1EA17
1EA17,Senin,Pengantar Ekonomi 1,3/4,E433,BAGUS NURCAHYO,1EA17
1EA17,Senin,Pendidikan Kewarganegaraan,7/8,E434,SUKESTININGSIH,1EA17
1EA17,Senin,Ilmu Budaya Dasar,9/10,E434,DWI INDAH UTAMI NINGSIH,1EA17
1EA17,Rabu,Matematika Ekonomi 1 **,1/2/3,E526,MUHAMMAD IMRON HADISANTOSA,1EA17
1EA17,Rabu,Pengantar Komputer & TI 1C,5/6,E336,SUCI BR KEMBAREN,1EA17
1EA17,Rabu,Pengantar Komputer & TI 1A,7/8,E336,ABDUL HAFIDH SIDIQ,1EA17
1EA17,Rabu,Dasar Pemasaran,9/10,E336,YUSYE MILAWATY,1EA17
1EA17,Kamis,Pengantar Akuntansi 1 **,1/2/3,D655,SUPININGTYAS PURWANINGRUM,1EA17
1EA17,Jum'at,Bahasa Inggris,3/4,E449,ZAINAL RIADI,1EA17
1EA17,Jum'at,Pengantar Komputer & TI 1B,7/8,E323,ERMA SOVA,1EA17
1EA18,Senin,Pengantar Ekonomi 1,1/2,G239,BAGUS NURCAHYO,1EA18
1EA18,Senin,Dasar Pemasaran,5/6,G122,KARTIKA SUKMAWATI,1EA18
1EA18,Senin,Pengantar Komputer & TI 1A,7/8,G122,SITI CHODIDJAH,1EA18
1EA18,Senin,Ilmu Budaya Dasar,9/10,G122,DASSAAD,1EA18
1EA18,Selasa,Pengantar Akuntansi 1 **,1/2/3,E123,AGUSTIN RUSIANA SARI,1EA18
1EA18,Selasa,Pendidikan Kewarganegaraan,5/6,E425,MARTI RIASTUTI,1EA18
1EA18,Selasa,Matematika Ekonomi 1 **,8/9/10,E523,ICHSANI MURSIDAH,1EA18
1EA18,Kamis,Bahasa Inggris,1/2,G144,MERISKA YOSIANA,1EA18
1EA18,Kamis,Pendidikan Agama Islam,3/4,G144,ABDUL ROHMAN,1EA18
1EA18,Kamis,Pengantar Komputer & TI 1B,7/8,G143,FITHRI NURHAYATI,1EA18
1EA18,Kamis,Pengantar Komputer & TI 1C,9/10,G143,MURTIWIYATI,1EA18
1EA19,Senin,Dasar Pemasaran,1/2,G144,IKA PUJI SAPUTRI,1EA19
1EA19,Senin,Pendidikan Agama Islam,3/4,G144,NUR MUNIR,1EA19
1EA19,Senin,Pengantar Ekonomi 1,5/6,G144,DASSAAD,1EA19
1EA19,Senin,Ilmu Budaya Dasar,8/9,G248,ELVIA FARDIANA,1EA19
1EA19,Selasa,Pengantar Komputer & TI 1C,4/5,E346,RISDIANDRI ISKANDAR,1EA19
1EA19,Selasa,Pengantar Akuntansi 1 **,7/8/9,E344,RINO RINALDO,1EA19
1EA19,Kamis,Bahasa Inggris,1/2,G423,IDHA DWI PERMATASARI,1EA19
1EA19,Kamis,Pengantar Komputer & TI 1B,3/4,G423,TRI SULISTYORINI,1EA19
1EA19,Kamis,Pendidikan Kewarganegaraan,6/7,G135,MEI RAHARJA,1EA19
1EA19,Kamis,Pengantar Komputer & TI 1A,9/10,G135,IRFAN,1EA19
1EA19,Sabtu,Matematika Ekonomi 1 **,1/2/3,E513,ADITYA NUGRAHA,1EA19
1EA20,Kamis,Bahasa Inggris,1/2,E131,EKA ARDHINIE,1EA20
1EA20,Kamis,Pendidikan Agama Islam,3/4,E131,NUR MUNIR,1EA20
1EA20,Kamis,Ilmu Budaya Dasar,7/8,E131,DINI YARTIWULANDARI,1EA20
1EA20,Kamis,Pendidikan Kewarganegaraan,9/10,E131,ANDI NUR ALAM,1EA20
1EA20,Jum'at,Pengantar Komputer & TI 1B,1/2,E133,DIANA IKASARI,1EA20
1EA20,Jum'at,Pengantar Komputer & TI 1A,3/4,E133,RAHMAYANTI,1EA20
1EA20,Jum'at,Pengantar Komputer & TI 1C,7/8,E214,OCTAVIANI HUTAPEA,1EA20
1EA20,Jum'at,Dasar Pemasaran,9/10,E214,YUSYE MILAWATY,1EA20
1EA20,Sabtu,Pengantar Akuntansi 1 **,1/2/3,E446,AMANDA DWILUTHFIAH JOANNA,1EA20
1EA20,Sabtu,Matematika Ekonomi 1 **,4/5/6,E446,NONO SUWARNO,1EA20
1EA20,Sabtu,Pengantar Ekonomi 1,8/9,E446,JUNI SASMIHARTI,1EA20
1EA21,Kamis,Pendidikan Agama Islam,1/2,E424,NUR MUNIR,1EA21
1EA21,Kamis,Pengantar Ekonomi 1,3/4,E424,PRADIVTA ALFATIHAH,1EA21
1EA21,Kamis,Pendidikan Kewarganegaraan,7/8,E124,ANDI NUR ALAM,1EA21
1EA21,Kamis,Ilmu Budaya Dasar,9/10,E124,DINI YARTIWULANDARI,1EA21
1EA21,Jum'at,Pengantar Komputer & TI 1A,1/2,E134,RAHMAYANTI,1EA21
1EA21,Jum'at,Pengantar Komputer & TI 1B,3/4,E134,DIANA IKASARI,1EA21
1EA21,Jum'at,Dasar Pemasaran,7/8,E217,YUSYE MILAWATY,1EA21
1EA21,Jum'at,Pengantar Komputer & TI 1C,9/10,E217,OCTAVIANI HUTAPEA,1EA21
1EA21,Sabtu,Matematika Ekonomi 1 **,1/2/3,E443,NONO SUWARNO,1EA21
1EA21,Sabtu,Pengantar Akuntansi 1 **,4/5/6,E443,PANDAM RUKMI WULANDARI,1EA21
1EA21,Sabtu,Bahasa Inggris,8/9,E443,SEPTIAJI FAJAR RIANTO,1EA21
1EA22,Senin,Ilmu Budaya Dasar,3/4,A202,EVA KHADIJAH,1EA22
1EA22,Senin,Pengantar Ekonomi 1,5/6,A202,AWIKA BAHANI,1EA22
1EA22,Rabu,Pengantar Akuntansi 1 **,1/2/3,C004,AGUS SUJARWANTO,1EA22
1EA22,Rabu,Pendidikan Agama Islam,5/6,C015,RETMIARTI,1EA22
1EA22,Rabu,Pendidikan Kewarganegaraan,9/10,B211,SUPRIATIN,1EA22
1EA22,Kamis,Pengantar Komputer & TI 1B,3/4,C004,IMAM PURWANTO,1EA22
1EA22,Kamis,Matematika Ekonomi 1 **,5/6/7,C004,LATIFAH,1EA22
1EA22,Sabtu,Pengantar Komputer & TI 1A,1/2,C008,SYIFA NURANI RAHMAYANTI,1EA22
1EA22,Sabtu,Bahasa Inggris,3/4,C008,RATNA WULANDARI,1EA22
1EA22,Sabtu,Pengantar Komputer & TI 1C,7/8,C008,IKE PUTRI KUSUMAWIJAYA,1EA22
1EA22,Sabtu,Dasar Pemasaran,9/10,C008,WIARSIH FEBRIANI,1EA22
1EA23,Senin,Pengantar Ekonomi 1,1/2,A802,AWIKA BAHANI,1EA23
1EA23,Senin,Pengantar Akuntansi 1 **,5/6/7,A802,SRI SETYORINI,1EA23
1EA23,Senin,Pendidikan Kewarganegaraan,8/9,A802,SUPRIATIN,1EA23
1EA23,Rabu,Pendidikan Agama Islam,3/4,C015,RETMIARTI,1EA23
1EA23,Kamis,Ilmu Budaya Dasar,1/2,C004,RULLY MOVIZAR,1EA23
1EA23,Kamis,Pengantar Komputer & TI 1B,5/6,C014,IMAM PURWANTO,1EA23
1EA23,Kamis,Matematika Ekonomi 1 **,8/9/10,C014,LATIFAH,1EA23
1EA23,Sabtu,Bahasa Inggris,1/2,C004,RATNA WULANDARI,1EA23
1EA23,Sabtu,Pengantar Komputer & TI 1A,3/4,C004,SYIFA NURANI RAHMAYANTI,1EA23
1EA23,Sabtu,Dasar Pemasaran,7/8,C004,WIARSIH FEBRIANI,1EA23
1EA23,Sabtu,Pengantar Komputer & TI 1C,9/10,C004,IKE PUTRI KUSUMAWIJAYA,1EA23
1EA24,Senin,Matematika Ekonomi 1 **,12/13/14,D634,ARIS GUNARYATI,1EA24
1EA24,Selasa,Ilmu Budaya Dasar,11/12,D635,ARI KHARISMA,1EA24
1EA24,Selasa,Bahasa Inggris,13/14,D635,TEGAR ARIF TOPAN,1EA24
1EA24,Rabu,Pengantar Akuntansi 1 **,12/13/14,D621,WIDADA,1EA24
1EA24,Jum'at,Pengantar Komputer & TI 1ABC,12/13/14,D632,IWAN SETIADI,1EA24
1EA24,Sabtu,Pengantar Ekonomi 1,1/2,E233,BENYAMIN ELIEZER PASCARENO,1EA24
1EA24,Sabtu,Dasar Pemasaran,3/4,E233,ALDHI GARDA PRASETYO,1EA24
1EA24,Sabtu,Pendidikan Agama Islam,5/6,E233,ABIYYU ZHARIF NUGROHO,1EA24
1EA24,Sabtu,Pendidikan Kewarganegaraan,9/10,E233,EDWIN HARLAN,1EA24
1EA25,Senin,Pendidikan Agama Islam,5/6,J1210,MUHAMMAD ABDULLAH S,1EA25
1EA25,Senin,Matematika Ekonomi 1 **,7/8/9,J1210,DESTI RIMINARSIH,1EA25
1EA25,Kamis,Pendidikan Kewarganegaraan,3/4,J1415,MUHAMMAD BURHAN AMIN,1EA25
1EA25,Kamis,Pengantar Komputer & TI 1C,6/7,J1415,RR ARTIANA KRESTIANTI,1EA25
1EA25,Kamis,Pengantar Komputer & TI 1A,8/9,J1415,RINI ARIANTY,1EA25
1EA25,Jum'at,Pengantar Ekonomi 1,1/2,J1524,IZZANI ULFI,1EA25
1EA25,Jum'at,Dasar Pemasaran,3/4,J1524,S TIWI ANGGRAENI,1EA25
1EA25,Jum'at,Pengantar Komputer & TI 1B,7/8,J1524,ANGGRAENI RIDWAN,1EA25
1EA25,Sabtu,Pengantar Akuntansi 1 **,1/2/3,J155,MAILDA ALFRISKA,1EA25
1EA25,Sabtu,Ilmu Budaya Dasar,4/5,J155,WENDRA AFRIANA,1EA25
1EA25,Sabtu,Bahasa Inggris,7/8,J155,INAYANTI,1EA25
1EA26,Senin,Bahasa Inggris,3/4,J1212,DEWI WULAN SARI,1EA26
1EA26,Senin,Pengantar Ekonomi 1,5/6,J1212,ZUHAD ICHYAUDIN,1EA26
1EA26,Senin,Pendidikan Kewarganegaraan,9/10,J1212,EDI FAKHRI,1EA26
1EA26,Rabu,Pengantar Komputer & TI 1A,1/2,J1613,NURUL HIDAYATI NUSYIRWAN,1EA26
1EA26,Rabu,Matematika Ekonomi 1 **,3/4/5,J1613,MURNI,1EA26
1EA26,Rabu,Pengantar Akuntansi 1 **,7/8/9,J1515A,JESSICA BARUS,1EA26
1EA26,Kamis,Pengantar Komputer & TI 1C,3/4,J1524,RR ARTIANA KRESTIANTI,1EA26
1EA26,Kamis,Ilmu Budaya Dasar,5/6,J1524,NURUL KHOTIMAH,1EA26
1EA26,Kamis,Dasar Pemasaran,7/8,J1524,RATNA SUSILOWATI,1EA26
1EA26,Jum'at,Pendidikan Agama Islam,1/2,J1511,MUHAMMAD ALI,1EA26
1EA26,Jum'at,Pengantar Komputer & TI 1B,3/4,J1511,SUTRESNA WATI,1EA26
1EA27,Senin,Pendidikan Kewarganegaraan,1/2,J159,JUNAEDI ABDILLAH,1EA27
1EA27,Senin,Pengantar Komputer & TI 1C,3/4,J159,RR ARTIANA KRESTIANTI,1EA27
1EA27,Senin,Pengantar Ekonomi 1,7/8,J159,ZUHAD ICHYAUDIN,1EA27
1EA27,Kamis,Bahasa Inggris,1/2,J158,ALIYA FADHILLA,1EA27
1EA27,Kamis,Pengantar Akuntansi 1 **,5/6/7,J158,EARLY ARMEIN,1EA27
1EA27,Jum'at,Pengantar Komputer & TI 1B,1/2,J1518,ANGGRAENI RIDWAN,1EA27
1EA27,Jum'at,Pendidikan Agama Islam,3/4,J1518,MUHAMMAD ALI,1EA27
1EA27,Jum'at,Ilmu Budaya Dasar,7/8,J1518,IZZANI ULFI,1EA27
1EA27,Jum'at,Dasar Pemasaran,9/10,J1518,S TIWI ANGGRAENI,1EA27
1EA27,Sabtu,Matematika Ekonomi 1 **,1/2/3,J1111,RADEN ANDHIKA PRIHESTIRA HARTADI,1EA27
1EA27,Sabtu,Pengantar Komputer & TI 1A,4/5,J1111,JEJE,1EA27
1EA28,Senin,Pendidikan Agama Islam,1/2,J1424,MUHAMMAD ABDULLAH S,1EA28
1EA28,Senin,Pengantar Ekonomi 1,3/4,J1424,IRFAN ARDIANSYAH,1EA28
1EA28,Senin,Pendidikan Kewarganegaraan,5/6,J1424,EDI FAKHRI,1EA28
1EA28,Rabu,Ilmu Budaya Dasar,1/2,J1115B,OKTARINA NUR WIDYANTI,1EA28
1EA28,Rabu,Bahasa Inggris,3/4,J1115B,BADARU SYAMSUL,1EA28
1EA28,Rabu,Matematika Ekonomi 1 **,6/7/8,J1318,MURNI,1EA28
1EA28,Kamis,Pengantar Komputer & TI 1A,3/4,J1316B,RINI ARIANTY,1EA28
1EA28,Kamis,Pengantar Komputer & TI 1B,6/7,J1316B,SUTRESNA WATI,1EA28
1EA28,Kamis,Pengantar Komputer & TI 1C,8/9,J1316B,RR ARTIANA KRESTIANTI,1EA28
1EA28,Jum'at,Pengantar Akuntansi 1 **,2/3/4,J143,AGUS SUJARWANTO,1EA28
1EA28,Jum'at,Dasar Pemasaran,7/8,J118,S TIWI ANGGRAENI,1EA28
1EA29,Senin,Pengantar Komputer & TI 1B,1/2,J118,ANGGRAENI RIDWAN,1EA29
1EA29,Senin,Pendidikan Agama Islam,3/4,J118,MUHAMMAD ABDULLAH S,1EA29
1EA29,Senin,Dasar Pemasaran,5/6,J118,S TIWI ANGGRAENI,1EA29
1EA29,Senin,Pengantar Ekonomi 1,8/9,J118,IRFAN ARDIANSYAH,1EA29
1EA29,Selasa,Bahasa Inggris,3/4,J139,DEVI ARYANI,1EA29
1EA29,Selasa,Pendidikan Kewarganegaraan,7/8,J1110,JUNAEDI ABDILLAH,1EA29
1EA29,Kamis,Pengantar Komputer & TI 1C,1/2,J1410,RR ARTIANA KRESTIANTI,1EA29
1EA29,Kamis,Matematika Ekonomi 1 **,3/4/5,J1410,DINA INDARTI,1EA29
1EA29,Kamis,Pengantar Komputer & TI 1A,6/7,J1410,RINI ARIANTY,1EA29
1EA29,Kamis,Ilmu Budaya Dasar,9/10,J1410,RATNA SUSILOWATI,1EA29
1EA29,Sabtu,Pengantar Akuntansi 1 **,4/5/6,J1210,MAILDA ALFRISKA,1EA29
1EA30,Kamis,Pengantar Akuntansi 1 **,2/3/4,J129,EARLY ARMEIN,1EA30
1EA30,Kamis,Pengantar Komputer & TI 1B,7/8,J139,MAKMUN,1EA30
1EA30,Kamis,Bahasa Inggris,9/10,J139,CINTANIA DHARMA B,1EA30
1EA30,Jum'at,Pengantar Komputer & TI 1C,1/2,J1415,FAHMI FATHULAH,1EA30
1EA30,Jum'at,Ilmu Budaya Dasar,3/4,J1415,IZZANI ULFI,1EA30
1EA30,Jum'at,Pengantar Komputer & TI 1A,7/8,J1415,RINI ARIANTY,1EA30
1EA30,Jum'at,Pendidikan Kewarganegaraan,9/10,J1415,SAMUEL GUNAWAN,1EA30
1EA30,Sabtu,Pendidikan Agama Islam,1/2,J159,SUPRIATIN,1EA30
1EA30,Sabtu,Dasar Pemasaran,3/4,J159,DIMAS AUDI PRIYADI,1EA30
1EA30,Sabtu,Matematika Ekonomi 1 **,5/6/7,J159,RADEN ANDHIKA PRIHESTIRA HARTADI,1EA30
1EA30,Sabtu,Pengantar Ekonomi 1,9/10,J159,DIA RAGASARI,1EA30
1EA31,Senin,Pendidikan Agama Islam,6/7,K283,MASWANIH,1EA31
1EA31,Selasa,Pengantar Akuntansi 1 **,1/2/3,K272,IRA PHAJAR LESTARI,1EA31
1EA31,Selasa,Pengantar Komputer & TI 1A,4/5,K246,RINI ARIANTY,1EA31
1EA31,Selasa,Bahasa Inggris,6/7,K248,RITA SUTJIATI DJOHAN,1EA31
1EA31,Rabu,Matematika Ekonomi 1 **,1/2/3,K131,FANI YAYUK SUPOMO,1EA31
1EA31,Rabu,Pendidikan Kewarganegaraan,4/5,K266,SUPIYATI,1EA31
1EA31,Rabu,Pengantar Komputer & TI 1B,6/7,K249,IRA WINDARTI,1EA31
1EA31,Kamis,Pengantar Komputer & TI 1C,1/2,K163,YULIA EKA PRAPTININGSIH,1EA31
1EA31,Jum'at,Dasar Pemasaran,1/2,K267,EKANING SETYARINI,1EA31
1EA31,Jum'at,Pengantar Ekonomi 1,3/4,K152,ALDILLA KURNIA D P,1EA31
1EA31,Sabtu,Ilmu Budaya Dasar,6/7,K253,WINNIE TUNGGAL MUTIKA,1EA31
1EA32,Senin,Pendidikan Agama Islam,6/7,K283,MASWANIH,1EA32
1EA32,Selasa,Pengantar Komputer & TI 1A,1/2,K246,RINI ARIANTY,1EA32
1EA32,Selasa,Pengantar Akuntansi 1 **,4/5/6,K272,IRA PHAJAR LESTARI,1EA32
1EA32,Rabu,Pengantar Komputer & TI 1B,3/4,K249,IRA WINDARTI,1EA32
1EA32,Rabu,Matematika Ekonomi 1 **,5/6/7,K131,FANI YAYUK SUPOMO,1EA32
1EA32,Kamis,Pengantar Komputer & TI 1C,3/4,K163,YULIA EKA PRAPTININGSIH,1EA32
1EA32,Kamis,Pendidikan Kewarganegaraan,6/7,K261,SUPIYATI,1EA32
1EA32,Jum'at,Pengantar Ekonomi 1,1/2,K152,ALDILLA KURNIA D P,1EA32
1EA32,Jum'at,Dasar Pemasaran,3/4,K267,EKANING SETYARINI,1EA32
1EA32,Jum'at,Bahasa Inggris,6/7,K2103,INDAH MUSTIKA SHANTI,1EA32
1EA32,Sabtu,Ilmu Budaya Dasar,6/7,K253,WINNIE TUNGGAL MUTIKA,1EA32
1EA33,Senin,Pendidikan Agama Islam,2/3,K283,MASWANIH,1EA33
1EA33,Senin,Pengantar Akuntansi 1 **,4/5/6,K165,BUDI PRIJANTO,1EA33
1EA33,Selasa,Dasar Pemasaran,1/2,K292,ALI MUHLI,1EA33
1EA33,Selasa,Matematika Ekonomi 1 **,3/4/5,K262,FEBRY MANDASARI,1EA33
1EA33,Rabu,Pengantar Ekonomi 1,1/2,K152,ASHAR BASYIR,1EA33
1EA33,Jum'at,Pengantar Komputer & TI 1A,1/2,K156,DEASY INDAYANTI,1EA33
1EA33,Jum'at,Pengantar Komputer & TI 1B,3/4,K284,RISMA RAHMALIA FITRIANI,1EA33
1EA33,Jum'at,Bahasa Inggris,6/7,K2103,INDAH MUSTIKA SHANTI,1EA33
1EA33,Sabtu,Pengantar Komputer & TI 1C,1/2,K133,AGUSTINE HANA MASITOH,1EA33
1EA33,Sabtu,Ilmu Budaya Dasar,3/4,K253,WINNIE TUNGGAL MUTIKA,1EA33
1EA33,Sabtu,Pendidikan Kewarganegaraan,5/6,K163,RINI DAMAYANTI,1EA33
1EA34,Senin,Pendidikan Agama Islam,1/2,K243,N ILIS,1EA34
1EA34,Rabu,Pengantar Komputer & TI 1C,1/2,K295,MURTIWIYATI,1EA34
1EA34,Rabu,Pengantar Ekonomi 1,3/4,K152,ASHAR BASYIR,1EA34
1EA34,Rabu,Bahasa Inggris,6/7,K273,VIDIA PUSPITA,1EA34
1EA34,Kamis,Dasar Pemasaran,1/2,K296,YUSYE MILAWATY,1EA34
1EA34,Kamis,Pendidikan Kewarganegaraan,3/4,K151,ARY NATALINA,1EA34
1EA34,Kamis,Matematika Ekonomi 1 **,5/6/7,K131,FEBRY MANDASARI,1EA34
1EA34,Jum'at,Pengantar Komputer & TI 1B,1/2,K284,RISMA RAHMALIA FITRIANI,1EA34
1EA34,Jum'at,Pengantar Komputer & TI 1A,3/4,K156,DEASY INDAYANTI,1EA34
1EA34,Sabtu,Ilmu Budaya Dasar,2/3,K163,RINI DAMAYANTI,1EA34
1EA34,Sabtu,Pengantar Akuntansi 1 **,5/6/7,K292,SRI SUPADMINI,1EA34
1EA35,Senin,Pendidikan Agama Islam,1/2,K243,N ILIS,1EA35
1EA35,Senin,Pendidikan Kewarganegaraan,3/4,K271,HERU NURHADI,1EA35
1EA35,Senin,Pengantar Ekonomi 1,5/6,K154,NUR AZIFAH,1EA35
1EA35,Selasa,Pengantar Komputer & TI 1B,3/4,K156,IMAM PURWANTO,1EA35
1EA35,Rabu,Pengantar Komputer & TI 1A,3/4,K154,BABY LOLITA BASYAH,1EA35
1EA35,Rabu,Bahasa Inggris,6/7,K273,VIDIA PUSPITA,1EA35
1EA35,Kamis,Matematika Ekonomi 1 **,1/2/3,K131,FEBRY MANDASARI,1EA35
1EA35,Kamis,Dasar Pemasaran,5/6,K296,YUSYE MILAWATY,1EA35
1EA35,Jum'at,Pengantar Komputer & TI 1C,1/2,K268,SUCI BR KEMBAREN,1EA35
1EA35,Sabtu,Pengantar Akuntansi 1 **,1/2/3,K292,SRI SUPADMINI,1EA35
1EA35,Sabtu,Ilmu Budaya Dasar,4/5,K175,DWI PUJI ASTUTI,1EA35
1EA36,Senin,Matematika Ekonomi 1 **,1/2/3,K282,MARIA T A DEWI,1EA36
1EA36,Senin,Pendidikan Agama Islam,5/6,K243,N ILIS,1EA36
1EA36,Selasa,Pengantar Komputer & TI 1B,1/2,K156,IMAM PURWANTO,1EA36
1EA36,Selasa,Pengantar Ekonomi 1,3/4,K274,JUNI SASMIHARTI,1EA36
1EA36,Selasa,Dasar Pemasaran,5/6,K297,KARTIKA SUKMAWATI,1EA36
1EA36,Rabu,Pengantar Komputer & TI 1A,1/2,K154,BABY LOLITA BASYAH,1EA36
1EA36,Rabu,Bahasa Inggris 1,3/4,K243,ARIE SUGIYARTATI,1EA36
1EA36,Kamis,Pendidikan Kewarganegaraan,1/2,K151,ARY NATALINA,1EA36
1EA36,Jum'at,Pengantar Komputer & TI 1C,3/4,K268,SUCI BR KEMBAREN,1EA36
1EA36,Sabtu,Pengantar Akuntansi 1 **,1/2/3,K241,CICILIA ERLY ISTIA,1EA36
1EA36,Sabtu,Ilmu Budaya Dasar,4/5,K175,DWI PUJI ASTUTI,1EA36
1EA37,Senin,Pengantar Komputer & TI 1C,5/6,L245,DINY WAHYUNI,1EA37
1EA37,Selasa,Dasar Pemasaran,2/3,L224,MUHAMMAD FIRDAUS,1EA37
1EA37,Selasa,Ilmu Budaya Dasar,6/7,L236,IQBAL AL KHAZIM,1EA37
1EA37,Rabu,Pendidikan Agama Islam,4/5,L235,MULYADI,1EA37
1EA37,Rabu,Pengantar Komputer & TI 1B,6/7,L244,OCTARINA BUDI LESTARI,1EA37
1EA37,Kamis,Bahasa Inggris,2/3,L222,ANITA1,1EA37
1EA37,Kamis,Pengantar Akuntansi 1 **,4/5/6,L236,DIANA SARI,1EA37
1EA37,Jum'at,Pendidikan Kewarganegaraan,2/3,L236,PIPIT FITRIYAH,1EA37
1EA37,Jum'at,Matematika Ekonomi 1 **,7/8/9,L242,LILIK SETIAWAN HERY PURNAMA,1EA37
1EA37,Sabtu,Pengantar Komputer & TI 1A,2/3,L236,EKA FITRI RAHAYU,1EA37
1EA37,Sabtu,Pengantar Ekonomi 1,4/5,L244,ANINDITA PURWANINGRUM / SRI MURTIASIH,1EA37
2EA01,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA01
2EA01,Selasa,Pengantar Teknologi SIM 1,1/2,E516,DINY WAHYUNI,2EA01
2EA01,Selasa,Komp. Akuntansi Keuangan **,3/4/5,E516,ANI HIDAYATI,2EA01
2EA01,Rabu,Teori Ekonomi 1,1/2,E224,NURUL HIDAYAH,2EA01
2EA01,Rabu,Perilaku Keorganisasian *,3/4,E224,LIA JULAEHA,2EA01
2EA01,Rabu,Bank dan Lembaga Keuangan *,5/6,E224,ENDIKA PERDANA,2EA01
2EA01,Rabu,Riset Operasional 1 **,9/10,E245,AGUS SRI ISWIYANTI,2EA01
2EA01,Kamis,Dasar Manajemen Keuangan,1/2/3,D651,EKO SRI MARGIANTI/SUGIHARTI BINASTUTI,2EA01
2EA01,Kamis,Statistika 1 */**,4/5/6,D651,ARIS BUDI SETYAWAN,2EA01
2EA01,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EA01
2EA02,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA02
2EA02,Selasa,Pengantar Teknologi SIM 1,3/4,E222,DINY WAHYUNI,2EA02
2EA02,Selasa,Dasar Manajemen Keuangan,5/6/7,E222,RENI ANGGRAINI,2EA02
2EA02,Kamis,Teori Ekonomi 1,2/3,E435,SRIYANTO,2EA02
2EA02,Kamis,Komp. Akuntansi Keuangan **,4/5/6,E435,MUJIYANI,2EA02
2EA02,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EA02
2EA02,Jum'at,Statistika 1 */**,2/3/4,G128,RINA SUGIARTI,2EA02
2EA02,Jum'at,Bank dan Lembaga Keuangan *,7/8,G128,ESTININGSIH,2EA02
2EA02,Sabtu,Perilaku Keorganisasian *,5/6,E522,ADELIA RIANA DEWI,2EA02
2EA02,Sabtu,Riset Operasional 1 **,7/8,E522,FITRI MULYANI,2EA02
2EA03,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA03
2EA03,Selasa,Dasar Manajemen Keuangan,5/6/7,E216,ASTRIED PERMANASARI,2EA03
2EA03,Selasa,Komp. Akuntansi Keuangan **,8/9/10,E316,AYU ANDRIANIE,2EA03
2EA03,Kamis,Riset Operasional 1 **,3/4,G142,HENDRI RAHMAYANI ASRI,2EA03
2EA03,Kamis,Teori Ekonomi 1,5/6,G142,WIDIYARSIH,2EA03
2EA03,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EA03
2EA03,Jum'at,Bank dan Lembaga Keuangan *,3/4,G315,ESTININGSIH,2EA03
2EA03,Jum'at,Statistika 1 */**,7/8/9,G315,TITIEK IREWATI,2EA03
2EA03,Sabtu,Perilaku Keorganisasian *,6/7,E422,PRIHANTORO/DINI SEPTIANI,2EA03
2EA03,Sabtu,Pengantar Teknologi SIM 1,8/9,E423,AHYAD/SYALIS IBNIH MELATI ISTINI,2EA03
2EA04,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA04
2EA04,Selasa,Teori Ekonomi 1,3/4,E521,LISTA KUSPRIATNI,2EA04
2EA04,Selasa,Dasar Manajemen Keuangan,5/6/7,E521,FANI YULIA ROSYADA,2EA04
2EA04,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EA04
2EA04,Kamis,Statistika 1 */**,5/6/7,D661,TOTO SUGIHARTO/THOMAS WIDODO,2EA04
2EA04,Kamis,Riset Operasional 1 **,8/9,D661,RENI DIAH KUSUMAWATI,2EA04
2EA04,Jum'at,Bank dan Lembaga Keuangan *,1/2,E527,ESTININGSIH,2EA04
2EA04,Jum'at,Perilaku Keorganisasian *,3/4,E527,RINI WAHYUNINGROEM/ANTONI,2EA04
2EA04,Sabtu,Pengantar Teknologi SIM 1,1/2,E121,GALIH RAKACITA RACHMAN,2EA04
2EA04,Sabtu,Komp. Akuntansi Keuangan **,4/5/6,E121,DEBONER HILLERY HASIHOLAN,2EA04
2EA05,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA05
2EA05,Selasa,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA05
2EA05,Rabu,Statistika 1 */**,4/5/6,E314,SRI WULAN W RATIH,2EA05
2EA05,Rabu,Komp. Akuntansi Keuangan **,8/9/10,E328,MARGARETA GULO,2EA05
2EA05,Kamis,Riset Operasional 1 **,1/2,G135,HENDRI RAHMAYANI ASRI,2EA05
2EA05,Kamis,Perilaku Keorganisasian *,3/4,G135,APRIANA ANGGREINI BANGUN,2EA05
2EA05,Kamis,Teori Ekonomi 1,7/8,G423,WIDIYARSIH,2EA05
2EA05,Kamis,Pengantar Teknologi SIM 1,9/10,G423,MARGI CAHYANTI,2EA05
2EA05,Jum'at,Bank dan Lembaga Keuangan *,3/4,G127,MUJIYANA,2EA05
2EA05,Jum'at,Dasar Manajemen Keuangan,7/8/9,G127,SRI NAWANGSARI,2EA05
2EA06,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA06
2EA06,Selasa,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA06
2EA06,Kamis,Dasar Manajemen Keuangan,1/2/3,G215,ASTRIED PERMANASARI,2EA06
2EA06,Kamis,Bank dan Lembaga Keuangan *,5/6,G422,STEVIANUS,2EA06
2EA06,Kamis,Riset Operasional 1 **,7/8,G422,HENDRI RAHMAYANI ASRI,2EA06
2EA06,Kamis,Teori Ekonomi 1,9/10,G422,SRI MURTIASIH,2EA06
2EA06,Jum'at,Komp. Akuntansi Keuangan **,2/3/4,G342,AYU ANDRIANIE,2EA06
2EA06,Jum'at,Statistika 1 */**,7/8/9,G229,THOMAS YUNI GUNARTO,2EA06
2EA06,Sabtu,Pengantar Teknologi SIM 1,7/8,E232,DAVID AULIA/GHIFARI NATAKUSUMAH,2EA06
2EA06,Sabtu,Perilaku Keorganisasian *,9/10,E232,PRIHANTORO/DINI SEPTIANI,2EA06
2EA07,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA07
2EA07,Selasa,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EA07
2EA07,Selasa,Statistika 1 */**,5/6/7,E224,TETY ELIDA SIREGAR,2EA07
2EA07,Selasa,Dasar Manajemen Keuangan,8/9/10,E231,FANI YULIA ROSYADA,2EA07
2EA07,Rabu,Perilaku Keorganisasian *,1/2,E221,LIA JULAEHA,2EA07
2EA07,Rabu,Teori Ekonomi 1,4/5,E343,NURUL HIDAYAH,2EA07
2EA07,Kamis,Bank dan Lembaga Keuangan *,3/4,E512,RINA NOFIYANTI,2EA07
2EA07,Kamis,Komp. Akuntansi Keuangan **,5/6/7,E512,ZAIDATUN EKASTUTI,2EA07
2EA07,Sabtu,Pengantar Teknologi SIM 1,3/4,E514,GALIH RAKACITA RACHMAN,2EA07
2EA07,Sabtu,Riset Operasional 1 **,6/7,E511,RANTI PUTRI PRATIWI,2EA07
2EA08,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA08
2EA08,Selasa,Dasar Manajemen Keuangan,1/2/3,E336,ROFI'AH,2EA08
2EA08,Selasa,Teori Ekonomi 1,6/7,E333,PERLI ISWANTO,2EA08
2EA08,Selasa,Statistika 1 */**,8/9/10,E326,TETY ELIDA SIREGAR,2EA08
2EA08,Kamis,Komp. Akuntansi Keuangan **,3/4/5,G221,DEDIT SATRIO UTOMO,2EA08
2EA08,Kamis,Bank dan Lembaga Keuangan *,7/8,G455,INDAH JAUHARI,2EA08
2EA08,Kamis,Riset Operasional 1 **,9/10,G455,HENDRI RAHMAYANI ASRI,2EA08
2EA08,Jum'at,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EA08
2EA08,Sabtu,Perilaku Keorganisasian *,3/4,E524,ANSHAR PATRIA,2EA08
2EA08,Sabtu,Pengantar Teknologi SIM 1,5/6,E524,DAVID AULIA/GHIFARI NATAKUSUMAH,2EA08
2EA09,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA09
2EA09,Rabu,Pengantar Teknologi SIM 1,1/2,E236,DINY WAHYUNI,2EA09
2EA09,Rabu,Riset Operasional 1 **,3/4,E236,AGUS SRI ISWIYANTI,2EA09
2EA09,Rabu,Perilaku Keorganisasian *,5/6,E236,LIA JULAEHA,2EA09
2EA09,Rabu,Statistika 1 */**,8/9/10,E313,SRI WULAN W RATIH,2EA09
2EA09,Kamis,Teori Ekonomi 1,1/2,E228,SRI MURTIASIH,2EA09
2EA09,Kamis,Dasar Manajemen Keuangan,3/4/5,E228,ALVIN PRATAMA,2EA09
2EA09,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EA09
2EA09,Jum'at,Komp. Akuntansi Keuangan **,2/3/4,G431,HANTORO ARIEF GISIJANTO,2EA09
2EA09,Jum'at,Bank dan Lembaga Keuangan *,7/8,G425,STEVIANUS,2EA09
2EA10,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA10
2EA10,Selasa,Statistika 1 */**,1/2/3,D623,SRI RAKHMAWATI,2EA10
2EA10,Selasa,Perilaku Keorganisasian *,4/5,D623,LIA JULAEHA,2EA10
2EA10,Selasa,Riset Operasional 1 **,7/8,D665,DWI SUHARTANTO,2EA10
2EA10,Kamis,Pengantar Teknologi SIM 1,1/2,E247,MARGI CAHYANTI,2EA10
2EA10,Kamis,Teori Ekonomi 1,3/4,E247,SRI MURTIASIH,2EA10
2EA10,Kamis,Dasar Manajemen Keuangan,6/7/8,E228,ALVIN PRATAMA,2EA10
2EA10,Kamis,Bank dan Lembaga Keuangan *,9/10,E228,STEVIANUS,2EA10
2EA10,Jum'at,Komp. Akuntansi Keuangan **,7/8/9,G228,HANTORO ARIEF GISIJANTO,2EA10
2EA10,Sabtu,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA10
2EA11,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA11
2EA11,Selasa,Statistika 1 */**,1/2/3,E517,RATIH KURNIASIH,2EA11
2EA11,Selasa,Teori Ekonomi 1,6/7,E244,SRIYANTO,2EA11
2EA11,Selasa,Dasar Manajemen Keuangan,8/9/10,E325,RENI ANGGRAINI,2EA11
2EA11,Kamis,Perilaku Keorganisasian *,1/2,E348,APRIANA ANGGREINI BANGUN,2EA11
2EA11,Kamis,Pengantar Teknologi SIM 1,3/4,E348,MARGI CAHYANTI,2EA11
2EA11,Kamis,Komp. Akuntansi Keuangan **,6/7/8,E231,DEDIT SATRIO UTOMO,2EA11
2EA11,Jum'at,Riset Operasional 1 **,1/2,G422,FIVTATIANTI HENDAJANI,2EA11
2EA11,Jum'at,Bank dan Lembaga Keuangan *,3/4,G422,STEVIANUS,2EA11
2EA11,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA11
2EA12,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA12
2EA12,Selasa,Statistika 1 */**,1/2/3,E221,TOTO SUGIHARTO/TETY ELIDA SIREGAR,2EA12
2EA12,Selasa,Riset Operasional 1 **,5/6,E248,HENDRI RAHMAYANI ASRI,2EA12
2EA12,Selasa,Pengantar Teknologi SIM 1,8/9,E136,DINY WAHYUNI,2EA12
2EA12,Rabu,Dasar Manajemen Keuangan,1/2/3,E333,SUSILOWATI DYAH K,2EA12
2EA12,Rabu,Teori Ekonomi 1,5/6,E342,WIDIYARSIH,2EA12
2EA12,Rabu,Komp. Akuntansi Keuangan **,8/9/10,E325,ZAIDATUN EKASTUTI,2EA12
2EA12,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA12
2EA12,Sabtu,Bank dan Lembaga Keuangan *,1/2,E246,ANDRIANSYAH LATIF,2EA12
2EA12,Sabtu,Perilaku Keorganisasian *,3/4,E246,ADELIA RIANA DEWI,2EA12
2EA13,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA13
2EA13,Selasa,Riset Operasional 1 **,3/4,E134,WIGIYANTI,2EA13
2EA13,Selasa,Pengantar Teknologi SIM 1,6/7,E346,DINY WAHYUNI,2EA13
2EA13,Selasa,Teori Ekonomi 1,8/9,E346,PERLI ISWANTO,2EA13
2EA13,Rabu,Komp. Akuntansi Keuangan **,4/5/6,E347,MARGARETA GULO,2EA13
2EA13,Rabu,Dasar Manajemen Keuangan,8/9/10,E449,CHRISTINA DEWI WULANDARI,2EA13
2EA13,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA13
2EA13,Jum'at,Bank dan Lembaga Keuangan *,1/2,G123,MUJIYANA,2EA13
2EA13,Jum'at,Perilaku Keorganisasian *,3/4,G123,ADELIA RIANA DEWI,2EA13
2EA13,Jum'at,Statistika 1 */**,7/8/9,G123,RINA SUGIARTI,2EA13
2EA14,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA14
2EA14,Selasa,Perilaku Keorganisasian *,2/3,D645,LIA JULAEHA,2EA14
2EA14,Selasa,Statistika 1 */**,5/6/7,D634,UMMU KALSUM,2EA14
2EA14,Selasa,Pengantar Teknologi SIM 1,9/10,D634,MUFNI ALIDA,2EA14
2EA14,Rabu,Komp. Akuntansi Keuangan **,3/4/5,E235,ZAIDATUN EKASTUTI,2EA14
2EA14,Rabu,Teori Ekonomi 1,7/8,E512,WIDIYARSIH,2EA14
2EA14,Kamis,Bank dan Lembaga Keuangan *,3/4,D625,INDAH JAUHARI,2EA14
2EA14,Kamis,Riset Operasional 1 **,6/7,D613,RENI DIAH KUSUMAWATI,2EA14
2EA14,Kamis,Dasar Manajemen Keuangan,8/9/10,D613,SUGIHARTI BINASTUTI,2EA14
2EA14,Sabtu,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA14
2EA15,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA15
2EA15,Selasa,Dasar Manajemen Keuangan,1/2/3,G215,ASTRIED PERMANASARI,2EA15
2EA15,Selasa,Teori Ekonomi 1,4/5,G215,SRI MURTIASIH,2EA15
2EA15,Kamis,Komp. Akuntansi Keuangan **,1/2/3,G421,ANI HIDAYATI,2EA15
2EA15,Kamis,Perilaku Keorganisasian *,5/6,G237,APRIANA ANGGREINI BANGUN,2EA15
2EA15,Kamis,Pengantar Teknologi SIM 1,7/8,G237,MARGI CAHYANTI,2EA15
2EA15,Jum'at,Statistika 1 */**,2/3/4,D636,SRI HERMAWATI,2EA15
2EA15,Jum'at,Bank dan Lembaga Keuangan *,7/8,D636,ENDIKA PERDANA,2EA15
2EA15,Jum'at,Riset Operasional 1 **,9/10,D636,FIVTATIANTI HENDAJANI,2EA15
2EA15,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA15
2EA16,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA16
2EA16,Selasa,Statistika 1 */**,2/3/4,D664,UMMU KALSUM,2EA16
2EA16,Selasa,Perilaku Keorganisasian *,6/7,D631,LIA JULAEHA,2EA16
2EA16,Kamis,Bank dan Lembaga Keuangan *,1/2,E332,RINA NOFIYANTI,2EA16
2EA16,Kamis,Riset Operasional 1 **,3/4,E332,RENI DIAH KUSUMAWATI,2EA16
2EA16,Kamis,Teori Ekonomi 1,6/7,E248,SRI MURTIASIH,2EA16
2EA16,Kamis,Komp. Akuntansi Keuangan **,8/9/10,E248,MUJIYANI,2EA16
2EA16,Jum'at,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EA16
2EA16,Sabtu,Pengantar Teknologi SIM 1,2/3,E327,DIDI RUSTAM/MUJI SANTOSO,2EA16
2EA16,Sabtu,Dasar Manajemen Keuangan,5/6/7,E327,MELY ANGRUMSARI,2EA16
2EA17,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA17
2EA17,Rabu,Bank dan Lembaga Keuangan *,1/2,E321,ENDIKA PERDANA,2EA17
2EA17,Rabu,Pengantar Teknologi SIM 1,3/4,E321,DINY WAHYUNI,2EA17
2EA17,Rabu,Perilaku Keorganisasian *,7/8,E216,LIA JULAEHA,2EA17
2EA17,Rabu,Teori Ekonomi 1,9/10,E216,WIDIYARSIH,2EA17
2EA17,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA17
2EA17,Jum'at,Riset Operasional 1 **,3/4,G435,FIVTATIANTI HENDAJANI,2EA17
2EA17,Jum'at,Statistika 1 */**,7/8/9,G442,KOMSI KORANTI,2EA17
2EA17,Sabtu,Dasar Manajemen Keuangan,4/5/6,G239,NICKY HANDAYANI,2EA17
2EA17,Sabtu,Komp. Akuntansi Keuangan **,8/9/10,G239,DEBONER HILLERY HASIHOLAN,2EA17
2EA18,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA18
2EA18,Selasa,Dasar Manajemen Keuangan,1/2/3,F8464,CHRISTINA DEWI WULANDARI,2EA18
2EA18,Selasa,Teori Ekonomi 1,6/7,F8455,LISTA KUSPRIATNI,2EA18
2EA18,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EA18
2EA18,Kamis,Riset Operasional 1 **,6/7,E123,WIDYATMINI,2EA18
2EA18,Kamis,Komp. Akuntansi Keuangan **,8/9/10,E123,SUDARSONO,2EA18
2EA18,Jum'at,Statistika 1 */**,2/3/4,G221,THOMAS YUNI GUNARTO,2EA18
2EA18,Jum'at,Bank dan Lembaga Keuangan *,7/8,G114,ELY SAPTO UTOMO,2EA18
2EA18,Sabtu,Perilaku Keorganisasian *,1/2,E222,ADELIA RIANA DEWI,2EA18
2EA18,Sabtu,Pengantar Teknologi SIM 1,4/5,E335,DIDI RUSTAM/MUJI SANTOSO,2EA18
2EA19,Rabu,Perilaku Keorganisasian *,5/6,B312,SRI RAHAYU PUSPITA SARI,2EA19
2EA19,Rabu,Dasar Manajemen Keuangan,8/9/10,C015,EDY NURSANTA,2EA19
2EA19,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA19
2EA19,Jum'at,Komp. Akuntansi Keuangan **,2/3/4,A601,EDI PRANOTO,2EA19
2EA19,Jum'at,Statistika 1 */**,7/8/9,A601,ADI KUSWANTO,2EA19
2EA19,Sabtu,Riset Operasional 1 **,1/2,A103,STEVANI ADINDA NURUL HUDA,2EA19
2EA19,Sabtu,Pengantar Teknologi SIM 1,3/4,A103,MUFNI ALIDA,2EA19
2EA19,Sabtu,Bank dan Lembaga Keuangan *,6/7,A103,DIAN FEBRIYANTO PUTRA,2EA19
2EA19,Sabtu,Teori Ekonomi 1,8/9,A103,DANANG WIJAYANTO,2EA19
2EA20,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA20
2EA20,Rabu,Dasar Manajemen Keuangan,4/5/6,B223,EDY NURSANTA,2EA20
2EA20,Rabu,Perilaku Keorganisasian *,7/8,B223,SRI RAHAYU PUSPITA SARI,2EA20
2EA20,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA20
2EA20,Jum'at,Statistika 1 */**,2/3/4,A101,ADI KUSWANTO,2EA20
2EA20,Jum'at,Komp. Akuntansi Keuangan **,7/8/9,A101,EDI PRANOTO,2EA20
2EA20,Sabtu,Pengantar Teknologi SIM 1,1/2,A102,MUFNI ALIDA,2EA20
2EA20,Sabtu,Riset Operasional 1 **,3/4,A102,STEVANI ADINDA NURUL HUDA,2EA20
2EA20,Sabtu,Teori Ekonomi 1,5/6,A102,DANANG WIJAYANTO,2EA20
2EA20,Sabtu,Bank dan Lembaga Keuangan *,8/9,A102,DIAN FEBRIYANTO PUTRA,2EA20
2EA21,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA21
2EA21,Rabu,Dasar Manajemen Keuangan,1/2/3,B221,EDY NURSANTA,2EA21
2EA21,Rabu,Teori Ekonomi 1,4/5,B221,STEVANI ADINDA NURUL HUDA,2EA21
2EA21,Rabu,Riset Operasional 1 **,7/8,B221,WIGIYANTI,2EA21
2EA21,Rabu,Bank dan Lembaga Keuangan *,9/10,B221,SITI ISMAYANTI RAHMI,2EA21
2EA21,Kamis,Komp. Akuntansi Keuangan **,1/2/3,A102,EDI PRANOTO,2EA21
2EA21,Kamis,Statistika 1 */**,4/5/6,A102,MUHAMMAD RIDHA ALFARABI ISTIQLAL,2EA21
2EA21,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EA21
2EA21,Sabtu,Perilaku Keorganisasian *,4/5,B313,WIARSIH FEBRIANI,2EA21
2EA21,Sabtu,Pengantar Teknologi SIM 1,7/8,B312,MUFNI ALIDA,2EA21
2EA22,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA22
2EA22,Selasa,Teori Ekonomi 1,11/12,D631,PERLI ISWANTO,2EA22
2EA22,Selasa,Pengantar Teknologi SIM 1,13/14,D631,TRIONO SETIAJI,2EA22
2EA22,Kamis,Komp. Akuntansi Keuangan **,12/13/14,D633,ARI KHARISMA,2EA22
2EA22,Jum'at,Statistika 1 */**,12/13/14,D631,ANDY WIDYANTHO,2EA22
2EA22,Sabtu,Perilaku Keorganisasian *,1/2,E235,ANSHAR PATRIA,2EA22
2EA22,Sabtu,Prak. Social Networking&Creative Content,11/12,,TIM DOSEN,2EA22
2EA22,Sabtu,Bank dan Lembaga Keuangan *,3/4,E235,ANDRIANSYAH LATIF,2EA22
2EA22,Sabtu,Riset Operasional 1 **,5/6,E235,FITRI MULYANI,2EA22
2EA22,Sabtu,Dasar Manajemen Keuangan,8/9/10,E327,MELY ANGRUMSARI,2EA22
2EA23,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA23
2EA23,Selasa,Teori Ekonomi 1,1/2,J1315B,JOKO UTOMO,2EA23
2EA23,Selasa,Komp. Akuntansi Keuangan **,5/6/7,J1315B,FX AJI SUKARNO,2EA23
2EA23,Rabu,Statistika 1 */**,1/2/3,J143,SAFRIADI M YUNUS AKS,2EA23
2EA23,Rabu,Pengantar Teknologi SIM 1,6/7,J159,YUTI DEWITA ARIMBI,2EA23
2EA23,Kamis,Dasar Manajemen Keuangan,1/2/3,J334,LIES HANDRIJANINGSIH,2EA23
2EA23,Kamis,Bank dan Lembaga Keuangan *,5/6,J334,DINA EKASARI,2EA23
2EA23,Kamis,Perilaku Keorganisasian *,7/8,J334,ANTONI,2EA23
2EA23,Kamis,Riset Operasional 1 **,9/10,J334,ANISAH,2EA23
2EA23,Sabtu,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA23
2EA24,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA24
2EA24,Selasa,Statistika 1 */**,3/4/5,J1416A,EDI MINAJI PRIBADI,2EA24
2EA24,Selasa,Komp. Akuntansi Keuangan **,8/9/10,J1416A,SUDARSONO,2EA24
2EA24,Rabu,Pengantar Teknologi SIM 1,4/5,J149,YUTI DEWITA ARIMBI,2EA24
2EA24,Rabu,Dasar Manajemen Keuangan,8/9/10,J158,ENYFIANI ANANTA WIN,2EA24
2EA24,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EA24
2EA24,Jum'at,Teori Ekonomi 1,1/2,J1515A,IRFAN ARDIANSYAH,2EA24
2EA24,Jum'at,Bank dan Lembaga Keuangan *,3/4,J1515A,FERA RISKE ANGGITA,2EA24
2EA24,Jum'at,Riset Operasional 1 **,7/8,J1515A,ANISAH,2EA24
2EA24,Jum'at,Perilaku Keorganisasian *,9/10,J1515A,WIARSIH FEBRIANI,2EA24
2EA25,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA25
2EA25,Selasa,Komp. Akuntansi Keuangan **,5/6/7,J1415,SUDARSONO,2EA25
2EA25,Rabu,Pengantar Teknologi SIM 1,1/2,J118,YUTI DEWITA ARIMBI,2EA25
2EA25,Rabu,Statistika 1 */**,5/6/7,J1216A,SAFRIADI M YUNUS AKS,2EA25
2EA25,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA25
2EA25,Jum'at,Riset Operasional 1 **,1/2,J1512,ANISAH,2EA25
2EA25,Jum'at,Bank dan Lembaga Keuangan *,3/4,J1512,IBNU HARIS NASUTION,2EA25
2EA25,Jum'at,Perilaku Keorganisasian *,7/8,J1512,WIARSIH FEBRIANI,2EA25
2EA25,Sabtu,Dasar Manajemen Keuangan,1/2/3,J162,MARTANI,2EA25
2EA25,Sabtu,Teori Ekonomi 1,4/5,J162,SRI RAHAYU PUSPITA SARI,2EA25
2EA26,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA26
2EA26,Selasa,Komp. Akuntansi Keuangan **,1/2/3,J1524,FX AJI SUKARNO,2EA26
2EA26,Selasa,Riset Operasional 1 **,6/7,J1424,MOHAMMAD ABDUL MUKHYI,2EA26
2EA26,Selasa,Statistika 1 */**,8/9/10,J1424,ANITA WASUTININGSIH,2EA26
2EA26,Rabu,Dasar Manajemen Keuangan,3/4/5,J1315B,ENYFIANI ANANTA WIN,2EA26
2EA26,Rabu,Pengantar Teknologi SIM 1,7/8,J1524,ERTIE NUR HARTIWATI,2EA26
2EA26,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA26
2EA26,Jum'at,Perilaku Keorganisasian *,3/4,J153,WIARSIH FEBRIANI,2EA26
2EA26,Jum'at,Teori Ekonomi 1,7/8,J1315B,IRFAN ARDIANSYAH,2EA26
2EA26,Jum'at,Bank dan Lembaga Keuangan *,9/10,J1315B,IBNU HARIS NASUTION,2EA26
2EA27,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA27
2EA27,Selasa,Statistika 1 */**,1/2/3,J124,KOMSI KORANTI,2EA27
2EA27,Selasa,Teori Ekonomi 1,4/5,J124,NURUL HIDAYAH,2EA27
2EA27,Selasa,Komp. Akuntansi Keuangan **,8/9/10,J124,FX AJI SUKARNO,2EA27
2EA27,Kamis,Riset Operasional 1 **,1/2,J325,ANISAH,2EA27
2EA27,Kamis,Bank dan Lembaga Keuangan *,3/4,J325,DINA EKASARI,2EA27
2EA27,Kamis,Perilaku Keorganisasian *,5/6,J325,ANTONI,2EA27
2EA27,Kamis,Pengantar Teknologi SIM 1,9/10,J325,ERTIE NUR HARTIWATI,2EA27
2EA27,Jum'at,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EA27
2EA27,Sabtu,Dasar Manajemen Keuangan,2/3/4,J1416A,AISYAH MARGARETTA,2EA27
2EA28,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA28
2EA28,Selasa,Dasar Manajemen Keuangan,1/2/3,J143,LIES HANDRIJANINGSIH,2EA28
2EA28,Selasa,Komp. Akuntansi Keuangan **,5/6/7,J143,ANUGERAH ADHI PRASETYO,2EA28
2EA28,Selasa,Teori Ekonomi 1,8/9,J143,NURUL HIDAYAH,2EA28
2EA28,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA28
2EA28,Jum'at,Riset Operasional 1 **,3/4,J138,ANISAH,2EA28
2EA28,Jum'at,Bank dan Lembaga Keuangan *,7/8,J138,IBNU HARIS NASUTION,2EA28
2EA28,Jum'at,Perilaku Keorganisasian *,9/10,J138,RIZKI MUTI AGUSTIANI,2EA28
2EA28,Sabtu,Pengantar Teknologi SIM 1,1/2,J149,YUTI DEWITA ARIMBI,2EA28
2EA28,Sabtu,Statistika 1 */**,4/5/6,J149,ADINDA NURUL HUDA M,2EA28
2EA29,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA29
2EA29,Selasa,Komp. Akuntansi Keuangan **,1/2/3,J1417,SUDARSONO,2EA29
2EA29,Selasa,Dasar Manajemen Keuangan,5/6/7,J1417,LIES HANDRIJANINGSIH,2EA29
2EA29,Selasa,Statistika 1 */**,8/9/10,J1417,SRAVA CHRISDES ANTORO,2EA29
2EA29,Kamis,Bank dan Lembaga Keuangan *,1/2,J318,DINA EKASARI,2EA29
2EA29,Kamis,Pengantar Teknologi SIM 1,5/6,J318,ERTIE NUR HARTIWATI,2EA29
2EA29,Kamis,Riset Operasional 1 **,7/8,J318,ANISAH,2EA29
2EA29,Jum'at,Perilaku Keorganisasian *,7/8,J127,RIZKI MUTI AGUSTIANI,2EA29
2EA29,Jum'at,Teori Ekonomi 1,9/10,J127,IRFAN ARDIANSYAH,2EA29
2EA29,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA29
2EA30,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA30
2EA30,Selasa,Pengantar Teknologi SIM 1,2/3,K245,MARGI CAHYANTI,2EA30
2EA30,Selasa,Teori Ekonomi 1,4/5,K268,RADEN SUPRIYANTO,2EA30
2EA30,Rabu,Statistika 1 */**,1/2/3,K265,RISKAYANTO,2EA30
2EA30,Kamis,Bank dan Lembaga Keuangan *,4/5,K254,ESTININGSIH,2EA30
2EA30,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA30
2EA30,Jum'at,Riset Operasional 1 **,1/2,K255,PARANITA ASNUR,2EA30
2EA30,Jum'at,Perilaku Keorganisasian *,3/4,K163,LIES HANDRIJANINGSIH,2EA30
2EA30,Jum'at,Dasar Manajemen Keuangan,6/7/8,K241,EDY NURSANTA,2EA30
2EA30,Sabtu,Komp. Akuntansi Keuangan **,4/5/6,K254,FX AJI SUKARNO,2EA30
2EA31,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA31
2EA31,Selasa,Teori Ekonomi 1,2/3,K268,RADEN SUPRIYANTO,2EA31
2EA31,Selasa,Pengantar Teknologi SIM 1,4/5,K245,MARGI CAHYANTI,2EA31
2EA31,Rabu,Perilaku Keorganisasian *,3/4,K284,SRI WAHYU HANDAYANI,2EA31
2EA31,Rabu,Statistika 1 */**,5/6/7,K265,RISKAYANTO,2EA31
2EA31,Kamis,Bank dan Lembaga Keuangan *,1/2,K254,ESTININGSIH,2EA31
2EA31,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA31
2EA31,Jum'at,Riset Operasional 1 **,3/4,K255,PARANITA ASNUR,2EA31
2EA31,Jum'at,Dasar Manajemen Keuangan,7/8/9,K163,LIES HANDRIJANINGSIH,2EA31
2EA31,Sabtu,Komp. Akuntansi Keuangan **,1/2/3,K254,FX AJI SUKARNO,2EA31
2EA32,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA32
2EA32,Selasa,Bank dan Lembaga Keuangan *,6/7,K261,ENDIKA PERDANA,2EA32
2EA32,Rabu,Perilaku Keorganisasian *,1/2,K262,SRI HERMAWATI,2EA32
2EA32,Rabu,Riset Operasional 1 **,3/4,K245,FEBRIANA PUSPITA SARI,2EA32
2EA32,Rabu,Komp. Akuntansi Keuangan **,5/6/7,K288,SUNDARI,2EA32
2EA32,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA32
2EA32,Jum'at,Pengantar Teknologi SIM 1,1/2,K291,SITI CHODIDJAH,2EA32
2EA32,Jum'at,Teori Ekonomi 1,3/4,K292,LIA JULAEHA,2EA32
2EA32,Sabtu,Statistika 1 */**,1/2/3,K256,IMAN MURTONO SOENHADJI,2EA32
2EA32,Sabtu,Dasar Manajemen Keuangan,4/5/6,K261,CHRISTINA DEWI WULANDARI,2EA32
2EA33,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA33
2EA33,Selasa,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA33
2EA33,Rabu,Bank dan Lembaga Keuangan *,2/3,K251,IRFAN ARDIANSYAH,2EA33
2EA33,Rabu,Komp. Akuntansi Keuangan **,4/5/6,K165,EDI PRANOTO,2EA33
2EA33,Kamis,Statistika 1 */**,1/2/3,K256,PENI SAWITRI,2EA33
2EA33,Kamis,Dasar Manajemen Keuangan,4/5/6,K262,SUSILOWATI DYAH K,2EA33
2EA33,Jum'at,Teori Ekonomi 1,1/2,K292,LIA JULAEHA,2EA33
2EA33,Jum'at,Pengantar Teknologi SIM 1,3/4,K291,SITI CHODIDJAH,2EA33
2EA33,Sabtu,Perilaku Keorganisasian *,1/2,K152,ANISAH,2EA33
2EA33,Sabtu,Riset Operasional 1 **,3/4,K258,DADI KUSWANDI,2EA33
2EA34,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA34
2EA34,Selasa,Komp. Akuntansi Keuangan **,3/4/5,K153,ZAIDATUN EKASTUTI,2EA34
2EA34,Rabu,Riset Operasional 1 **,1/2,K284,SRI WAHYU HANDAYANI,2EA34
2EA34,Rabu,Perilaku Keorganisasian *,3/4,K244,ENDANG SETYANINGSIH,2EA34
2EA34,Rabu,Bank dan Lembaga Keuangan *,5/6,K251,IRFAN ARDIANSYAH,2EA34
2EA34,Kamis,Statistika 1 */**,1/2/3,K258,SRI RAKHMAWATI,2EA34
2EA34,Kamis,Teori Ekonomi 1,4/5,K152,JULIUS NURSYAMSI,2EA34
2EA34,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EA34
2EA34,Jum'at,Dasar Manajemen Keuangan,1/2/3,K131,AFRILA EKI PRADITA,2EA34
2EA34,Jum'at,Pengantar Teknologi SIM 1,6/7,K133,AGUNG YANUARIANTO/ DYAH ANGGRAINI,2EA34
2EA35,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA35
2EA35,Selasa,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EA35
2EA35,Rabu,Komp. Akuntansi Keuangan **,1/2/3,K165,EDI PRANOTO,2EA35
2EA35,Kamis,Teori Ekonomi 1,2/3,K152,JULIUS NURSYAMSI,2EA35
2EA35,Kamis,Statistika 1 */**,4/5/6,K258,SRI RAKHMAWATI,2EA35
2EA35,Jum'at,Bank dan Lembaga Keuangan *,1/2,K252,NIDA NUSAIBATUL ADAWIYAH,2EA35
2EA35,Jum'at,Pengantar Teknologi SIM 1,3/4,K133,AGUNG YANUARIANTO/ DYAH ANGGRAINI,2EA35
2EA35,Jum'at,Dasar Manajemen Keuangan,6/7/8,K131,AFRILA EKI PRADITA,2EA35
2EA35,Sabtu,Riset Operasional 1 **,1/2,K258,DADI KUSWANDI,2EA35
2EA35,Sabtu,Perilaku Keorganisasian *,3/4,K152,ANISAH,2EA35
2EA36,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EA36
2EA36,Selasa,Statistika 1 */**,1/2/3,L241,EVAN PURNAMA RAMDAN,2EA36
2EA36,Selasa,Dasar Manajemen Keuangan,5/6/7,L235,KHOIRUNNISA DIAH PARWITASARI,2EA36
2EA36,Selasa,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EA36
2EA36,Rabu,Perilaku Keorganisasian *,2/3,L226,LISNA KUSTAMTINAH,2EA36
2EA36,Rabu,Pengantar Teknologi SIM 1,4/5,L224,OCTARINA BUDI LESTARI,2EA36
2EA36,Kamis,Bank dan Lembaga Keuangan *,2/3,L245,ELY SAPTO UTOMO,2EA36
2EA36,Kamis,Komp. Akuntansi Keuangan **,4/5/6,L245,DANDY KURNIA,2EA36
2EA36,Jum'at,Teori Ekonomi 1,1/2,L242,HERRY SUSANTO,2EA36
2EA36,Jum'at,Riset Operasional 1 **,3/4,L244,ANGGA PUTRI EKANOVA,2EA36
2EA37,Sabtu,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EA37
3EA01,Senin,Pengantar Ekonomi Pembangunan,1/2,E515,RENI DIAH KUSUMAWATI,3EA01
3EA01,Senin,Akuntansi Biaya *,4/5/6,E238,AYU KARTIKA,3EA01
3EA01,Senin,Teori Pengambilan Keputusan,7/8,E238,MUHAMMAD HADI AHFI,3EA01
3EA01,Senin,Manajemen Investasi,9/10,E238,GUYUB NURYANTO,3EA01
3EA01A,Selasa,Tatap Muka Penulisan Ilmiah,1/2,D643,SUGIHARTI BINASTUTI,3EA01
3EA01,Selasa,Aspek Hukum dalam Ekonomi,3/4,D643,ENDANG SETYANINGSIH,3EA01
3EA01,Selasa,Ekonomi Koperasi,7/8,D641,MINIK RINAYANTI,3EA01
3EA01,Selasa,Metode Riset **,9/10,D641,HERRY SUSANTO,3EA01
3EA01,Kamis,Manajemen Proyek,6/7/8,E238,MEGA OKTAVIANY,3EA01
3EA01,Kamis,Komunikasi Bisnis Mandarin,9/10,E238,RIZKI DINDA AMELIA,3EA01
3EA01B,Kamis,Tatap Muka Penulisan Ilmiah,9/10 T,E328,KARTIKA SUKMAWATI,3EA01
3EA01C,Kamis,Tatap Muka Penulisan Ilmiah,9/10 T,E328,LIA JULAEHA,3EA01
3EA01D,Kamis,Tatap Muka Penulisan Ilmiah,9/10 T,E328,MUHAMMAD FIRDAUS,3EA01
3EA02,Senin,Pengantar Ekonomi Pembangunan,1/2,E434,DARMADI,3EA02
3EA02,Senin,Teori Pengambilan Keputusan,3/4,E434,MUHAMMAD HADI AHFI,3EA02
3EA02,Senin,Ekonomi Koperasi,5/6,E434,RENI ANGGRAINI,3EA02
3EA02,Senin,Akuntansi Biaya *,8/9/10,E213,AYU KARTIKA,3EA02
3EA02B,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,D646,ANGGIA PARAMITA PUTI KENCANA,3EA02
3EA02D,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,D646,ARY NATALINA,3EA02
3EA02C,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,D646,FITRI MULYANI,3EA02
3EA02A,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,D646,HADIR HUDIYANTO,3EA02
3EA02,Selasa,Manajemen Investasi,3/4,D646,FENY FIDYAH,3EA02
3EA02,Selasa,Aspek Hukum dalam Ekonomi,5/6,D646,ENDANG SETYANINGSIH,3EA02
3EA02,Kamis,Metode Riset **,1/2,E512,BUDI HERMANA,3EA02
3EA02,Kamis,Manajemen Proyek,4/5/6,E235,NURUL AZMI,3EA02
3EA02,Kamis,Komunikasi Bisnis Mandarin,7/8,E235,RIZKI DINDA AMELIA,3EA02
3EA03,Senin,Manajemen Proyek,1/2/3,E513,MEGA OKTAVIANY,3EA03
3EA03,Senin,Manajemen Investasi,4/5,E513,ROFI'AH,3EA03
3EA03,Senin,Ekonomi Koperasi,7/8,E231,RENI ANGGRAINI,3EA03
3EA03,Senin,Teori Pengambilan Keputusan,9/10,E231,MUHAMMAD HADI AHFI,3EA03
3EA03,Selasa,Akuntansi Biaya *,1/2/3,G348,AYU KARTIKA,3EA03
3EA03,Selasa,Metode Riset **,5/6,G348,HERRY SUSANTO,3EA03
3EA03,Jum'at,Pengantar Ekonomi Pembangunan,1/2,G147,SULASTRI,3EA03
3EA03,Jum'at,Komunikasi Bisnis Mandarin,3/4,G147,ANNIDA HANIFAH ELSHANTI,3EA03
3EA03,Jum'at,Aspek Hukum dalam Ekonomi,7/8,G133,DIMAS RADHITIO ATMOHADI KUSUMO,3EA03
3EA03B,Jum'at,Tatap Muka Penulisan Ilmiah,9/10 T,G133,ARI WIJAYA BASUKI RAHARJO,3EA03
3EA03D,Jum'at,Tatap Muka Penulisan Ilmiah,9/10 T,G133,SELLY DWI PUTRI,3EA03
3EA03A,Jum'at,Tatap Muka Penulisan Ilmiah,9/10 T,G133,TITI NUGRAHENI,3EA03
3EA03C,Jum'at,Tatap Muka Penulisan Ilmiah,9/10 T,G133,WIDIYARSIH,3EA03
3EA04,Selasa,Pengantar Ekonomi Pembangunan,1/2,D632,SRIYANTO,3EA04
3EA04,Selasa,Ekonomi Koperasi,3/4,D632,MINIK RINAYANTI,3EA04
3EA04,Selasa,Teori Pengambilan Keputusan,6/7,D642,DINI YARTIWULANDARI,3EA04
3EA04,Selasa,Manajemen Proyek,8/9/10,D642,R HERNAMA,3EA04
3EA04,Kamis,Manajemen Investasi,1/2,E335,ROFI'AH,3EA04
3EA04,Kamis,Metode Riset **,3/4,E335,MAULANA SYARIF HIDAYATULLAH,3EA04
3EA04,Kamis,Akuntansi Biaya *,6/7/8,E335,WINDY ATMAWARDANI RACHMAN,3EA04
3EA04C,Kamis,Tatap Muka Penulisan Ilmiah,9/10 T,E335,EVA KARLA,3EA04
3EA04D,Kamis,Tatap Muka Penulisan Ilmiah,9/10 T,E335,INDAH JAUHARI,3EA04
3EA04A,Kamis,Tatap Muka Penulisan Ilmiah,9/10 T,E335,NURUL AZMI,3EA04
3EA04B,Kamis,Tatap Muka Penulisan Ilmiah,9/10 T,E335,SULISTINING TRIMULYANI,3EA04
3EA04,Jum'at,Komunikasi Bisnis Mandarin,7/8,G2410,ANNIDA HANIFAH ELSHANTI,3EA04
3EA04,Jum'at,Aspek Hukum dalam Ekonomi,9/10,G2410,KHOIRUNNISA DIAH PARWITASARI,3EA04
3EA05,Senin,Manajemen Investasi,1/2,E241,ROFI'AH,3EA05
3EA05,Senin,Pengantar Ekonomi Pembangunan,3/4,E241,RENI DIAH KUSUMAWATI,3EA05
3EA05,Senin,Akuntansi Biaya *,5/6/7,E433,WINDY ATMAWARDANI RACHMAN,3EA05
3EA05,Senin,Komunikasi Bisnis Mandarin,9/10,E511,TIARA KURNIATI WAHDAH,3EA05
3EA05B,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,G147,EKANING SETYARINI,3EA05
3EA05C,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,G147,HENDRI RAHMAYANI ASRI,3EA05
3EA05A,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,G147,IZZATI AMPERANINGRUM,3EA05
3EA05,Selasa,Metode Riset **,5/6,G432,AYU NINGTIYAS,3EA05
3EA05,Selasa,Teori Pengambilan Keputusan,8/9,G433,SELLY DWI PUTRI,3EA05
3EA05,Rabu,Manajemen Proyek,1/2/3,F8461,HANI HARLAN,3EA05
3EA05,Rabu,Ekonomi Koperasi,4/5,F8461,APRIANA ANGGREINI BANGUN,3EA05
3EA05,Rabu,Aspek Hukum dalam Ekonomi,7/8,F8455,TRI DAMAYANTI,3EA05
3EA06,Senin,Aspek Hukum dalam Ekonomi,1/2,G237,IRWAN D. RINALDI,3EA06
3EA06,Senin,Manajemen Investasi,3/4,G237,MUJIYANA,3EA06
3EA06,Senin,Metode Riset **,6/7,G233,RETNO SUWIYANTI,3EA06
3EA06B,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,G139,ELVIA FARDIANA,3EA06
3EA06C,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,G139,ESTININGSIH,3EA06
3EA06D,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,G139,SULASTRI,3EA06
3EA06A,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,G139,WIARSIH,3EA06
3EA06,Selasa,Pengantar Ekonomi Pembangunan,3/4,G139,SULASTRI,3EA06
3EA06,Selasa,Akuntansi Biaya *,7/8/9,G221,MELLA SRI KENCANAWATI,3EA06
3EA06,Kamis,Teori Pengambilan Keputusan,1/2,E433,SELLY DWI PUTRI,3EA06
3EA06,Kamis,Komunikasi Bisnis Mandarin,3/4,E433,DELIANA PUTRI MAHARANI,3EA06
3EA06,Kamis,Manajemen Proyek,6/7/8,E511,DEWI BUDIANTI,3EA06
3EA06,Kamis,Ekonomi Koperasi,9/10,E511,FANI YULIA ROSYADA,3EA06
3EA07,Selasa,Aspek Hukum dalam Ekonomi,1/2,D635,ENDANG SETYANINGSIH,3EA07
3EA07,Selasa,Pengantar Ekonomi Pembangunan,3/4,D635,SRIYANTO,3EA07
3EA07C,Selasa,Tatap Muka Penulisan Ilmiah,8/9 T,D631,DASSAAD,3EA07
3EA07D,Selasa,Tatap Muka Penulisan Ilmiah,8/9 T,D631,OKTAVIA ANNA RAHAYU,3EA07
3EA07B,Selasa,Tatap Muka Penulisan Ilmiah,8/9 T,D631,TEDDY OSWARI,3EA07
3EA07A,Selasa,Tatap Muka Penulisan Ilmiah,8/9 T,D631,TRI BUDIARTA,3EA07
3EA07,Rabu,Komunikasi Bisnis Mandarin,1/2,E247,ADINDA SEPTIANA,3EA07
3EA07,Rabu,Manajemen Proyek,3/4/5,E247,INDAH JAUHARI,3EA07
3EA07,Rabu,Akuntansi Biaya *,7/8/9,E342,RADI SAHARA,3EA07
3EA07,Kamis,Metode Riset **,1/2,E448,MAULANA SYARIF HIDAYATULLAH,3EA07
3EA07,Kamis,Teori Pengambilan Keputusan,3/4,E448,SELLY DWI PUTRI,3EA07
3EA07,Kamis,Manajemen Investasi,5/6,E448,SEPTI HERAWATI,3EA07
3EA07,Kamis,Ekonomi Koperasi,9/10,E433,SITI ISMAYANTI RAHMI,3EA07
3EA08,Senin,Metode Riset **,1/2,E424,MUHAMAD YUNANTO,3EA08
3EA08,Senin,Teori Pengambilan Keputusan,3/4,E424,DINI YARTIWULANDARI,3EA08
3EA08,Senin,Ekonomi Koperasi,6/7,E226,IZZATI AMPERANINGRUM,3EA08
3EA08D,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,E348,BUDI SULISTYO,3EA08
3EA08B,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,E348,DARMADI,3EA08
3EA08C,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,E348,ENDIKA PERDANA,3EA08
3EA08A,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,E348,TITI AYEM LESTARI,3EA08
3EA08,Rabu,Manajemen Investasi,5/6,F8481,MULATSIH,3EA08
3EA08,Rabu,Pengantar Ekonomi Pembangunan,7/8,F8481,KATARINA CLAUDIA SRIMURNI,3EA08
3EA08,Rabu,Aspek Hukum dalam Ekonomi,9/10,F8481,TRI DAMAYANTI,3EA08
3EA08,Kamis,Manajemen Proyek,1/2/3,E221,DEWI BUDIANTI,3EA08
3EA08,Kamis,Akuntansi Biaya *,5/6/7,E233,MELLA SRI KENCANAWATI,3EA08
3EA08,Kamis,Komunikasi Bisnis Mandarin,9/10,E235,DELIANA PUTRI MAHARANI,3EA08
3EA09,Senin,Akuntansi Biaya *,1/2/3,G232,AYU KARTIKA,3EA09
3EA09,Senin,Aspek Hukum dalam Ekonomi,4/5,G232,IRWAN D. RINALDI,3EA09
3EA09,Senin,Manajemen Investasi,7/8,G129,MUJIYANA,3EA09
3EA09,Senin,Metode Riset **,9/10,G129,RETNO SUWIYANTI,3EA09
3EA09,Selasa,Ekonomi Koperasi,1/2,G243,RENI ANGGRAINI,3EA09
3EA09,Selasa,Teori Pengambilan Keputusan,4/5,G138,BUDI SULISTYO,3EA09
3EA09,Selasa,Manajemen Proyek,7/8/9,G243,WIGIYANTI,3EA09
3EA09,Jum'at,Komunikasi Bisnis Mandarin,1/2,G145,ANNIDA HANIFAH ELSHANTI,3EA09
3EA09,Jum'at,Pengantar Ekonomi Pembangunan,3/4,G145,SULASTRI,3EA09
3EA09B,Jum'at,Tatap Muka Penulisan Ilmiah,7/8 T,G349,MUJIYANA,3EA09
3EA09C,Jum'at,Tatap Muka Penulisan Ilmiah,7/8 T,G349,SRI RAKHMAWATI,3EA09
3EA09A,Jum'at,Tatap Muka Penulisan Ilmiah,7/8 T,G349,SRIYANTO,3EA09
3EA10,Senin,Metode Riset **,1/2,E217,IKHWAN H S,3EA10
3EA10,Senin,Aspek Hukum dalam Ekonomi,3/4,E217,ENDANG SETYANINGSIH,3EA10
3EA10,Senin,Teori Pengambilan Keputusan,5/6,E217,BUDI SULISTYO,3EA10
3EA10,Senin,Akuntansi Biaya *,8/9/10,E318,BERTILIA LINA KUSRINA,3EA10
3EA10,Rabu,Manajemen Investasi,1/2,F8453,MULATSIH,3EA10
3EA10,Rabu,Komunikasi Bisnis Mandarin,3/4,F8453,LARAS DWI ALNISA,3EA10
3EA10,Rabu,Pengantar Ekonomi Pembangunan,5/6,F8453,KATARINA CLAUDIA SRIMURNI,3EA10
3EA10,Kamis,Manajemen Proyek,1/2/3,E243,NURUL AZMI,3EA10
3EA10,Kamis,Ekonomi Koperasi,5/6,E336,SITI ISMAYANTI RAHMI,3EA10
3EA10A,Kamis,Tatap Muka Penulisan Ilmiah,8/9 T,E338,ASTRIED PERMANASARI,3EA10
3EA10B,Kamis,Tatap Muka Penulisan Ilmiah,8/9 T,E338,RANTI PUTRI PRATIWI,3EA10
3EA10C,Kamis,Tatap Muka Penulisan Ilmiah,8/9 T,E338,ROOSHWAN BUDHI UTOMO,3EA10
3EA11,Senin,Manajemen Investasi,3/4,E211,SEPTI HERAWATI,3EA11
3EA11,Senin,Aspek Hukum dalam Ekonomi,5/6,E211,ENDANG SETYANINGSIH,3EA11
3EA11,Senin,Metode Riset **,7/8,E211,BUDIMAN1,3EA11
3EA11,Selasa,Ekonomi Koperasi,4/5,D631,IZZATI AMPERANINGRUM,3EA11
3EA11,Selasa,Komunikasi Bisnis Mandarin,7/8,D621,WIWIN HOLIMAH,3EA11
3EA11A,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,D621,ENDANG SETYANINGSIH,3EA11
3EA11B,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,D621,MELY ANGRUMSARI,3EA11
3EA11C,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,D621,NURMANINGSIH,3EA11
3EA11,Jum'at,Akuntansi Biaya *,2/3/4,G149,WINDY ATMAWARDANI RACHMAN,3EA11
3EA11,Jum'at,Manajemen Proyek,7/8/9,G348,MEGA OKTAVIANY,3EA11
3EA11,Sabtu,Pengantar Ekonomi Pembangunan,1/2,E345,FAROUK IBNU ISHAAQ,3EA11
3EA11,Sabtu,Teori Pengambilan Keputusan,3/4,E345,OKTAVIA ANNA RAHAYU,3EA11
3EA12A,Senin,Tatap Muka Penulisan Ilmiah,1/2 T,E527,LISNA KUSTAMTINAH,3EA12
3EA12C,Senin,Tatap Muka Penulisan Ilmiah,1/2 T,E527,NENIK DIAH HARTANTI,3EA12
3EA12B,Senin,Tatap Muka Penulisan Ilmiah,1/2 T,E527,SUSILOWATI DYAH K,3EA12
3EA12,Senin,Aspek Hukum dalam Ekonomi,3/4,E527,TRI DAMAYANTI,3EA12
3EA12,Senin,Teori Pengambilan Keputusan,5/6,E527,SUPIANI,3EA12
3EA12,Senin,Manajemen Investasi,8/9,E326,SEPTI HERAWATI,3EA12
3EA12,Kamis,Komunikasi Bisnis Mandarin,1/2,E446,WASTRI PEBRIANI,3EA12
3EA12,Kamis,Metode Riset **,5/6,E433,MAULANA SYARIF HIDAYATULLAH,3EA12
3EA12,Kamis,Ekonomi Koperasi,7/8,E433,SITI ISMAYANTI RAHMI,3EA12
3EA12,Sabtu,Manajemen Proyek,1/2/3,E241,CHRISTIAN RAMOS KURNIAWAN,3EA12
3EA12,Sabtu,Pengantar Ekonomi Pembangunan,5/6,E216,FAROUK IBNU ISHAAQ,3EA12
3EA12,Sabtu,Akuntansi Biaya *,8/9/10,E216,WIDADA,3EA12
3EA13,Senin,Manajemen Investasi,1/2,G425,MUJIYANA,3EA13
3EA13,Senin,Aspek Hukum dalam Ekonomi,3/4,G425,IKA PUJI SAPUTRI,3EA13
3EA13,Senin,Metode Riset **,7/8,G442,MUHAMAD YUNANTO,3EA13
3EA13,Senin,Ekonomi Koperasi,9/10,G442,RENI ANGGRAINI,3EA13
3EA13,Selasa,Pengantar Ekonomi Pembangunan,1/2,G145,HERFITA LIBRIA URSULAWATY,3EA13
3EA13,Selasa,Akuntansi Biaya *,4/5/6,G148,IRMAWATI WIJAYA,3EA13
3EA13,Selasa,Teori Pengambilan Keputusan,8/9,G421,BUDI SULISTYO,3EA13
3EA13C,Kamis,Tatap Muka Penulisan Ilmiah,3/4 T,E344,ADE RACHMAWATI NURFITRI,3EA13
3EA13A,Kamis,Tatap Muka Penulisan Ilmiah,3/4 T,E344,CHRISTINA DEWI WULANDARI,3EA13
3EA13B,Kamis,Tatap Muka Penulisan Ilmiah,3/4 T,E344,DWI INDAH UTAMI NINGSIH,3EA13
3EA13,Kamis,Komunikasi Bisnis Mandarin,6/7,E522,DELIANA PUTRI MAHARANI,3EA13
3EA13,Kamis,Manajemen Proyek,8/9/10,E522,SYAMSU RIZAL,3EA13
3EA14,Senin,Aspek Hukum dalam Ekonomi,1/2,E214,ENDANG SETYANINGSIH,3EA14
3EA14,Senin,Metode Riset **,3/4,E214,MUHAMAD YUNANTO,3EA14
3EA14,Senin,Manajemen Investasi,6/7,E444,SEPTI HERAWATI,3EA14
3EA14A,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,E444,GATOT SUBIYAKTO,3EA14
3EA14C,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,E444,IKHWAN H S,3EA14
3EA14B,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,E444,RENI DIAH KUSUMAWATI,3EA14
3EA14,Rabu,Komunikasi Bisnis Mandarin,1/2,F8464,LARAS DWI ALNISA,3EA14
3EA14,Rabu,Manajemen Proyek,4/5/6,F8464,HANI HARLAN,3EA14
3EA14,Rabu,Ekonomi Koperasi,7/8,F8464,APRIANA ANGGREINI BANGUN,3EA14
3EA14,Sabtu,Akuntansi Biaya *,1/2/3,E218,WIDADA,3EA14
3EA14,Sabtu,Teori Pengambilan Keputusan,5/6,E526,OKTAVIA ANNA RAHAYU,3EA14
3EA14,Sabtu,Pengantar Ekonomi Pembangunan,7/8,E526,FAROUK IBNU ISHAAQ,3EA14
3EA15,Senin,Metode Riset **,1/2,G234,HERRY SUSANTO,3EA15
3EA15,Senin,Akuntansi Biaya *,3/4/5,G234,FENY FIDYAH,3EA15
3EA15,Senin,Aspek Hukum dalam Ekonomi,7/8,G454,IRWAN D. RINALDI,3EA15
3EA15,Senin,Manajemen Investasi,9/10,G454,MUJIYANA,3EA15
3EA15A,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,G134,R HERNAMA,3EA15
3EA15B,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,G134,ROFI'AH,3EA15
3EA15C,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,G134,SRI MULIANINGSIH,3EA15
3EA15,Rabu,Manajemen Proyek,3/4/5,G134,R HERNAMA,3EA15
3EA15,Rabu,Komunikasi Bisnis Mandarin,7/8,G2410,FRIDA ZAHRA RHAMADANTI OETAMA PUTRI,3EA15
3EA15,Kamis,Teori Pengambilan Keputusan,1/2,E334,DINI YARTIWULANDARI,3EA15
3EA15,Kamis,Ekonomi Koperasi,3/4,E334,SITI ISMAYANTI RAHMI,3EA15
3EA15,Kamis,Pengantar Ekonomi Pembangunan,5/6,E334,DARMADI,3EA15
3EA16,Senin,Manajemen Investasi,1/2,G238,SEPTI HERAWATI,3EA16
3EA16,Senin,Teori Pengambilan Keputusan,3/4,G238,MUJIYANI,3EA16
3EA16,Senin,Aspek Hukum dalam Ekonomi,7/8,G349,TRI DAMAYANTI,3EA16
3EA16B,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,G149,JUNI SASMIHARTI,3EA16
3EA16C,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,G149,MUHAMAD FARID MAHMUD,3EA16
3EA16A,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,G149,TITIEK IREWATI,3EA16
3EA16,Selasa,Akuntansi Biaya *,1/2/3,G244,IRMAWATI WIJAYA,3EA16
3EA16,Selasa,Pengantar Ekonomi Pembangunan,4/5,G244,HERFITA LIBRIA URSULAWATY,3EA16
3EA16,Selasa,Metode Riset **,7/8,G124,AYU NINGTIYAS,3EA16
3EA16,Rabu,Ekonomi Koperasi,1/2,G133,APRIANA ANGGREINI BANGUN,3EA16
3EA16,Rabu,Komunikasi Bisnis Mandarin,5/6,G249,FRIDA ZAHRA RHAMADANTI OETAMA PUTRI,3EA16
3EA16,Rabu,Manajemen Proyek,7/8/9,G249,INDAH JAUHARI,3EA16
3EA17,Senin,Akuntansi Biaya *,1/2/3,E236,WINDY ATMAWARDANI RACHMAN,3EA17
3EA17,Senin,Pengantar Ekonomi Pembangunan,5/6,E344,RENI DIAH KUSUMAWATI,3EA17
3EA17,Senin,Teori Pengambilan Keputusan,7/8,E344,MUJIYANI,3EA17
3EA17,Selasa,Ekonomi Koperasi,1/2,D613,ZUHAD ICHYAUDIN,3EA17
3EA17,Selasa,Metode Riset **,3/4,D613,CAECILIA WIDI PRATIWI,3EA17
3EA17,Selasa,Aspek Hukum dalam Ekonomi,7/8,D652,ENDANG SETYANINGSIH,3EA17
3EA17,Selasa,Manajemen Investasi,9/10,D652,FENY FIDYAH,3EA17
3EA17,Kamis,Manajemen Proyek,1/2/3,E432,SITI AISYAH,3EA17
3EA17,Kamis,Komunikasi Bisnis Mandarin,4/5,E432,WASTRI PEBRIANI,3EA17
3EA17B,Kamis,Tatap Muka Penulisan Ilmiah,7/8 T,E343,AULIA GUNTUR WIBISONO,3EA17
3EA17A,Kamis,Tatap Muka Penulisan Ilmiah,7/8 T,E343,DESSY HUTAJULU,3EA17
3EA17C,Kamis,Tatap Muka Penulisan Ilmiah,7/8 T,E343,WURI PURNAMASARI,3EA17
3EA18,Senin,Aspek Hukum dalam Ekonomi,1/2,E322,DYAH PALUPI,3EA18
3EA18,Senin,Teori Pengambilan Keputusan,3/4,E441,BUDI SULISTYO,3EA18
3EA18,Senin,Pengantar Ekonomi Pembangunan,5/6,E441,DARMADI,3EA18
3EA18,Senin,Akuntansi Biaya *,8/9/10,E221,FENY FIDYAH,3EA18
3EA18,Selasa,Manajemen Investasi,3/4,D634,LAINA ZAHRA,3EA18
3EA18,Selasa,Metode Riset **,6/7,D625,CAECILIA WIDI PRATIWI,3EA18
3EA18,Selasa,Manajemen Proyek,8/9/10,D625,SIGIT SUKMONO,3EA18
3EA18B,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,D634,RATNA SUSILOWATI,3EA18
3EA18A,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,D634,SEPTI HERAWATI,3EA18
3EA18C,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,D634,STEVIANUS,3EA18
3EA18,Rabu,Komunikasi Bisnis Mandarin,3/4,E223,ADINDA SEPTIANA,3EA18
3EA18,Rabu,Ekonomi Koperasi,5/6,E223,ERNA KUSTYARINI,3EA18
3EA19,Senin,Teori Pengambilan Keputusan,1/2,E345,BUDI SULISTYO,3EA19
3EA19,Senin,Manajemen Investasi,3/4,E345,JULIUS NURSYAMSI,3EA19
3EA19,Senin,Komunikasi Bisnis Mandarin,6/7,E227,TIARA KURNIATI WAHDAH,3EA19
3EA19,Senin,Ekonomi Koperasi,8/9,E227,IZZATI AMPERANINGRUM,3EA19
3EA19,Selasa,Metode Riset **,1/2,G224,RINI WAHYUNINGROEM/LASMINIASIH,3EA19
3EA19,Selasa,Akuntansi Biaya *,4/5/6,G239,MELLA SRI KENCANAWATI,3EA19
3EA19,Selasa,Pengantar Ekonomi Pembangunan,7/8,G239,SULASTRI,3EA19
3EA19,Jum'at,Manajemen Proyek,2/3/4,G144,MEGA OKTAVIANY,3EA19
3EA19,Jum'at,Aspek Hukum dalam Ekonomi,7/8,G345,KHOIRUNNISA DIAH PARWITASARI,3EA19
3EA19B,Jum'at,Tatap Muka Penulisan Ilmiah,9/10 T,G345,AGUS SRI ISWIYANTI,3EA19
3EA19C,Jum'at,Tatap Muka Penulisan Ilmiah,9/10 T,G345,MAGHFIROH YENNY,3EA19
3EA19A,Jum'at,Tatap Muka Penulisan Ilmiah,9/10 T,G345,MAULANA SYARIF HIDYATULLAH,3EA19
3EA20,Senin,Teori Pengambilan Keputusan,1/2,E337,DINI YARTIWULANDARI,3EA20
3EA20,Senin,Aspek Hukum dalam Ekonomi,3/4,E227,DYAH PALUPI,3EA20
3EA20,Senin,Metode Riset **,5/6,E337,IKHWAN H S,3EA20
3EA20B,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,E218,HERRY SUSANTO,3EA20
3EA20C,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,E218,RINA SUGIARTI,3EA20
3EA20A,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,E218,SRI HERMAWATI,3EA20
3EA20,Selasa,Ekonomi Koperasi,3/4,D612,ZUHAD ICHYAUDIN,3EA20
3EA20,Selasa,Manajemen Investasi,6/7,D612,FENY FIDYAH,3EA20
3EA20,Selasa,Komunikasi Bisnis Mandarin,9/10,D613,WIWIN HOLIMAH,3EA20
3EA20,Kamis,Akuntansi Biaya *,1/2/3,E223,MELLA SRI KENCANAWATI,3EA20
3EA20,Kamis,Manajemen Proyek,4/5/6,E223,SITI AISYAH,3EA20
3EA20,Kamis,Pengantar Ekonomi Pembangunan,8/9,E311,SRIYANTO,3EA20
3EA21,Senin,Manajemen Investasi,1/2,E425,JULIUS NURSYAMSI,3EA21
3EA21,Senin,Pengantar Ekonomi Pembangunan,3/4,E425,DARMADI,3EA21
3EA21,Senin,Akuntansi Biaya *,5/6/7,E425,BERTILIA LINA KUSRINA,3EA21
3EA21,Senin,Teori Pengambilan Keputusan,9/10,E426,MUJIYANI,3EA21
3EA21,Selasa,Metode Riset **,3/4,G224,RINI WAHYUNINGROEM/LASMINIASIH,3EA21
3EA21,Selasa,Manajemen Proyek,5/6/7,G224,NIAYAH ERWIN,3EA21
3EA21C,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,G124,KOMSI KORANTI,3EA21
3EA21B,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,G124,SRI MURTIASIH,3EA21
3EA21A,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,G124,YUNNI YUNIAWATY,3EA21
3EA21,Rabu,Aspek Hukum dalam Ekonomi,3/4,E221,TRI DAMAYANTI,3EA21
3EA21,Rabu,Komunikasi Bisnis Mandarin,5/6,E221,ADINDA SEPTIANA,3EA21
3EA21,Rabu,Ekonomi Koperasi,7/8,E221,ERNA KUSTYARINI,3EA21
3EA22,Senin,Akuntansi Biaya *,1/2/3,A701,SRI SAPTO DARMAWATI,3EA22
3EA22,Senin,Aspek Hukum dalam Ekonomi,5/6,A701,EVA KHADIJAH,3EA22
3EA22,Senin,Manajemen Investasi,7/8,A701,BUDI SANTOSO2,3EA22
3EA22,Senin,Metode Riset **,9/10,A701,ASHAR BASYIR,3EA22
3EA22,Selasa,Teori Pengambilan Keputusan,1/2,C007,DANDY KURNIA,3EA22
3EA22,Selasa,Komunikasi Bisnis Mandarin,3/4,C007,ELZA SAFITRI,3EA22
3EA22B,Selasa,Tatap Muka Penulisan Ilmiah,6/7 T,C007,DANDY KURNIA,3EA22
3EA22A,Selasa,Tatap Muka Penulisan Ilmiah,6/7 T,C007,IBNU CAHYO RAMADHAN,3EA22
3EA22C,Selasa,Tatap Muka Penulisan Ilmiah,6/7 T,C007,POSO NUGROHO,3EA22
3EA22,Rabu,Pengantar Ekonomi Pembangunan,2/3,B312,ALI MUHLI,3EA22
3EA22,Rabu,Ekonomi Koperasi,6/7,B313,STEVANI ADINDA NURUL HUDA,3EA22
3EA22,Rabu,Manajemen Proyek,8/9/10,B313,HADIR HUDIYANTO,3EA22
3EA23,Senin,Aspek Hukum dalam Ekonomi,1/2,A601,EVA KHADIJAH,3EA23
3EA23,Senin,Manajemen Investasi,3/4,A601,BUDI SANTOSO2,3EA23
3EA23,Senin,Metode Riset **,5/6,A601,ASHAR BASYIR,3EA23
3EA23,Senin,Akuntansi Biaya *,8/9/10,A601,SRI SAPTO DARMAWATI,3EA23
3EA23,Selasa,Komunikasi Bisnis Mandarin,1/2,C008,ELZA SAFITRI,3EA23
3EA23,Selasa,Teori Pengambilan Keputusan,3/4,C008,DANDY KURNIA,3EA23
3EA23,Rabu,Manajemen Proyek,3/4/5,C008,HADIR HUDIYANTO,3EA23
3EA23,Rabu,Pengantar Ekonomi Pembangunan,7/8,C008,ALI MUHLI,3EA23
3EA23,Rabu,Ekonomi Koperasi,9/10,C008,STEVANI ADINDA NURUL HUDA,3EA23
3EA23B,Sabtu,Tatap Muka Penulisan Ilmiah,7/8 T,A101,DANANG WIJAYANTO,3EA23
3EA23A,Sabtu,Tatap Muka Penulisan Ilmiah,7/8 T,A101,LISTA KUSPRIATNI,3EA23
3EA23C,Sabtu,Tatap Muka Penulisan Ilmiah,7/8 T,A101,NOOR MUHAMMAD ADIPATI,3EA23
3EA24,Senin,Manajemen Investasi,1/2,A103,BUDI SANTOSO2,3EA24
3EA24,Senin,Akuntansi Biaya *,4/5/6,A103,SRI SAPTO DARMAWATI,3EA24
3EA24,Senin,Metode Riset **,7/8,A103,ASHAR BASYIR,3EA24
3EA24A,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,A103,ADITYA RIAN RAMADHAN,3EA24
3EA24C,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,A103,EDY NURSANTA,3EA24
3EA24B,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,A103,STEVANI ADINDA NURUL HUDA,3EA24
3EA24,Selasa,Aspek Hukum dalam Ekonomi,3/4,C004,EVA KHADIJAH,3EA24
3EA24,Selasa,Komunikasi Bisnis Mandarin,6/7,C004,ELZA SAFITRI,3EA24
3EA24,Selasa,Teori Pengambilan Keputusan,8/9,C004,DANDY KURNIA,3EA24
3EA24,Rabu,Manajemen Proyek,1/2/3,B222,WIGIYANTI,3EA24
3EA24,Rabu,Pengantar Ekonomi Pembangunan,4/5,B222,ALI MUHLI,3EA24
3EA24,Rabu,Ekonomi Koperasi,7/8,B222,SITI ISMAYANTI RAHMI,3EA24
3EA25,Senin,Komunikasi Bisnis Mandarin,11/12,D636,TIARA KURNIATI WAHDAH,3EA25
3EA25,Senin,Manajemen Investasi,13/14,D636,GUYUB NURYANTO,3EA25
3EA25,Selasa,Teori Pengambilan Keputusan,11/12,D636,BUDI SULISTYO,3EA25
3EA25,Selasa,Metode Riset **,13/14,D636,HERRY SUSANTO,3EA25
3EA25,Rabu,Manajemen Proyek,12/13/14,D632,SYAMSU RIZAL,3EA25
3EA25B,Jum'at,Tatap Muka Penulisan Ilmiah,12/13 T,D626,DIMAS RADHITIO ATMOHADI KUSUMO,3EA25
3EA25A,Jum'at,Tatap Muka Penulisan Ilmiah,12/13 T,D626,PERLI ISWANTO,3EA25
3EA25,Sabtu,Aspek Hukum dalam Ekonomi,1/2,E213,DIMAS RADHITIO ATMOHADI KUSUMO,3EA25
3EA25,Sabtu,Ekonomi Koperasi,3/4,E213,GHULAM MUHAMMADI,3EA25
3EA25,Sabtu,Akuntansi Biaya *,5/6/7,E213,WIDADA,3EA25
3EA25,Sabtu,Pengantar Ekonomi Pembangunan,9/10,E213,FAROUK IBNU ISHAAQ,3EA25
3EA26,Selasa,Manajemen Investasi,1/2,J118,JULIUS NURSYAMSI,3EA26
3EA26,Selasa,Akuntansi Biaya *,4/5/6,J118,RINI DWIASTUTININGSIH,3EA26
3EA26,Selasa,Pengantar Ekonomi Pembangunan,7/8,J118,BUDI UTAMI,3EA26
3EA26,Selasa,Metode Riset **,9/10,J118,SRI SETYORINI,3EA26
3EA26A,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,J119,FERA RISKE ANGGITA,3EA26
3EA26C,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,J119,MUHAMAD YUNANTO,3EA26
3EA26B,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,J119,SUPIANI,3EA26
3EA26,Rabu,Aspek Hukum dalam Ekonomi,3/4,J119,SITI NURAFIAH,3EA26
3EA26,Rabu,Teori Pengambilan Keputusan,7/8,J137,CHRISTERA KUSWAHYU INDIRA,3EA26
3EA26,Sabtu,Komunikasi Bisnis Mandarin,1/2,J144,HAMIDAH TUNNISA,3EA26
3EA26,Sabtu,Ekonomi Koperasi,3/4,J144,EKA PATRIYA,3EA26
3EA26,Sabtu,Manajemen Proyek,5/6/7,J144,SHINTIA PRIHANDINI KUSUMAWARDHANI,3EA26
3EA27,Selasa,Ekonomi Koperasi,1/2,J147,TIA CHISCA ANGGRAENI,3EA27
3EA27,Selasa,Manajemen Investasi,3/4,J147,JULIUS NURSYAMSI,3EA27
3EA27,Selasa,Komunikasi Bisnis Mandarin,7/8,J147,TSABITA TUFFAHATI,3EA27
3EA27,Selasa,Pengantar Ekonomi Pembangunan,9/10,J147,DARMADI,3EA27
3EA27,Rabu,Akuntansi Biaya *,1/2/3,J1212,DIAH ARYATI PRIHARTINI,3EA27
3EA27,Rabu,Metode Riset **,5/6,J1115B,PRADIVTA ALFATIHAH,3EA27
3EA27,Rabu,Aspek Hukum dalam Ekonomi,7/8,J1115B,SITI NURAFIAH,3EA27
3EA27A,Rabu,Tatap Muka Penulisan Ilmiah,9/10 T,J1115B,ANISAH,3EA27
3EA27C,Rabu,Tatap Muka Penulisan Ilmiah,9/10 T,J1115B,CHRISTERA KUSWAHYU INDIRA,3EA27
3EA27B,Rabu,Tatap Muka Penulisan Ilmiah,9/10 T,J1115B,MARIA Y ARYATI WAHYUNINGRUM,3EA27
3EA27,Kamis,Teori Pengambilan Keputusan,6/7,J423,SUPIANI,3EA27
3EA27,Kamis,Manajemen Proyek,8/9/10,J423,MUFID SURYANI,3EA27
3EA28,Senin,Manajemen Proyek,2/3/4,J158,DESSY DWIYANTI,3EA28
3EA28A,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,J1110,BUDI UTAMI,3EA28
3EA28B,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,J1110,IRFAN ARDIANSYAH,3EA28
3EA28C,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,J1110,NURUL HIDAYAH,3EA28
3EA28,Selasa,Ekonomi Koperasi,3/4,J144,TIA CHISCA ANGGRAENI,3EA28
3EA28,Selasa,Metode Riset **,5/6,J144,SRI SETYORINI,3EA28
3EA28,Rabu,Teori Pengambilan Keputusan,3/4,J5242,RATIH FITRI YATUN,3EA28
3EA28,Rabu,Aspek Hukum dalam Ekonomi,7/8,J5242,IKA PUJI SAPUTRI,3EA28
3EA28,Rabu,Manajemen Investasi,9/10,J5242,LAINA ZAHRA,3EA28
3EA28,Sabtu,Akuntansi Biaya *,3/4/5,J1524,SARTIKA,3EA28
3EA28,Sabtu,Komunikasi Bisnis Mandarin,7/8,J1524,HAMIDAH TUNNISA,3EA28
3EA28,Sabtu,Pengantar Ekonomi Pembangunan,9/10,J1524,SRI RAHAYU PUSPITA SARI,3EA28
3EA29,Senin,Akuntansi Biaya *,1/2/3,J1510,GHINA NURJIHAN,3EA29
3EA29,Senin,Manajemen Proyek,5/6/7,J1510,DESSY DWIYANTI,3EA29
3EA29,Senin,Aspek Hukum dalam Ekonomi,8/9,J1510,SITI NURAFIAH,3EA29
3EA29,Selasa,Metode Riset **,1/2,J148,SRI SETYORINI,3EA29
3EA29,Selasa,Ekonomi Koperasi,3/4,J148,SRI KURNIASIH AGUSTIN,3EA29
3EA29,Selasa,Manajemen Investasi,7/8,J148,JULIUS NURSYAMSI,3EA29
3EA29,Selasa,Komunikasi Bisnis Mandarin,9/10,J148,TSABITA TUFFAHATI,3EA29
3EA29,Rabu,Pengantar Ekonomi Pembangunan,3/4,J5232,BUDI UTAMI,3EA29
3EA29,Rabu,Teori Pengambilan Keputusan,5/6,J5232,RATIH FITRI YATUN,3EA29
3EA29B,Rabu,Tatap Muka Penulisan Ilmiah,7/8 T,J5232,ARDIPRAWIRO,3EA29
3EA29A,Rabu,Tatap Muka Penulisan Ilmiah,7/8 T,J5232,JULIUS NURSYAMSI,3EA29
3EA29C,Rabu,Tatap Muka Penulisan Ilmiah,7/8 T,J5232,MUFID SURYANI,3EA29
3EA30,Selasa,Ekonomi Koperasi,1/2,J1419,SRI KURNIASIH AGUSTIN,3EA30
3EA30,Selasa,Komunikasi Bisnis Mandarin,3/4,J1419,TSABITA TUFFAHATI,3EA30
3EA30,Selasa,Pengantar Ekonomi Pembangunan,7/8,J1419,DARMADI,3EA30
3EA30,Selasa,Manajemen Investasi,9/10,J1419,JULIUS NURSYAMSI,3EA30
3EA30B,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,J1512,DESTI DIRNAENI,3EA30
3EA30A,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,J1512,GUYUB NURYANTO,3EA30
3EA30C,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,J1512,SITI NURAFIAH,3EA30
3EA30,Rabu,Metode Riset **,3/4,J1512,PRADIVTA ALFATIHAH,3EA30
3EA30,Rabu,Aspek Hukum dalam Ekonomi,5/6,J1512,SITI NURAFIAH,3EA30
3EA30,Rabu,Akuntansi Biaya *,8/9/10,J1516A,DIAH ARYATI PRIHARTINI,3EA30
3EA30,Kamis,Manajemen Proyek,4/5/6,J424,MUFID SURYANI,3EA30
3EA30,Kamis,Teori Pengambilan Keputusan,8/9,J424,SUPIANI,3EA30
3EA31,Senin,Teori Pengambilan Keputusan,1/2,J123,OKTAVIA ANNA RAHAYU,3EA31
3EA31,Senin,Ekonomi Koperasi,3/4,J123,TIA CHISCA ANGGRAENI,3EA31
3EA31,Senin,Akuntansi Biaya *,5/6/7,J123,GHINA NURJIHAN,3EA31
3EA31C,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,J123,NONIK,3EA31
3EA31B,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,J123,SRI RAHAYU PUSPITA SARI,3EA31
3EA31A,Senin,Tatap Muka Penulisan Ilmiah,9/10 T,J123,SUWARDI,3EA31
3EA31,Rabu,Metode Riset **,3/4,J5231,MAS NING ZAHROH,3EA31
3EA31,Rabu,Aspek Hukum dalam Ekonomi,5/6,J5231,IKA PUJI SAPUTRI,3EA31
3EA31,Rabu,Manajemen Investasi,7/8,J5231,LAINA ZAHRA,3EA31
3EA31,Sabtu,Manajemen Proyek,1/2/3,J1211,RENNY,3EA31
3EA31,Sabtu,Komunikasi Bisnis Mandarin,4/5,J1211,HAMIDAH TUNNISA,3EA31
3EA31,Sabtu,Pengantar Ekonomi Pembangunan,7/8,J1211,SRI RAHAYU PUSPITA SARI,3EA31
3EA32,Senin,Ekonomi Koperasi,1/2,J119,TIA CHISCA ANGGRAENI,3EA32
3EA32,Senin,Teori Pengambilan Keputusan,3/4,J119,OKTAVIA ANNA RAHAYU,3EA32
3EA32,Senin,Komunikasi Bisnis Mandarin,5/6,J119,"ANNISA,",3EA32
3EA32B,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,J129,JOKO UTOMO,3EA32
3EA32C,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,J129,SUPRIYO HARTADI H,3EA32
3EA32A,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,J129,TIA CHISCA ANGGRAENI,3EA32
3EA32,Rabu,Pengantar Ekonomi Pembangunan,1/2,J5244,BUDI UTAMI,3EA32
3EA32,Rabu,Aspek Hukum dalam Ekonomi,3/4,J5244,IKA PUJI SAPUTRI,3EA32
3EA32,Rabu,Metode Riset **,5/6,J5244,MAS NING ZAHROH,3EA32
3EA32,Sabtu,Manajemen Investasi,1/2,J1212,JHON HENDRI,3EA32
3EA32,Sabtu,Manajemen Proyek,4/5/6,J1212,RENNY,3EA32
3EA32,Sabtu,Akuntansi Biaya *,8/9/10,J1212,SARTIKA,3EA32
3EA33,Senin,Aspek Hukum dalam Ekonomi,5/6,J1411,SITI NURAFIAH,3EA33
3EA33,Senin,Komunikasi Bisnis Mandarin,7/8,J1411,"ANNISA,",3EA33
3EA33,Rabu,Metode Riset **,1/2,J1410,PRADIVTA ALFATIHAH,3EA33
3EA33,Rabu,Teori Pengambilan Keputusan,3/4,J1410,CHRISTERA KUSWAHYU INDIRA,3EA33
3EA33,Rabu,Akuntansi Biaya *,5/6/7,J1410,DIAH ARYATI PRIHARTINI,3EA33
3EA33A,Rabu,Tatap Muka Penulisan Ilmiah,9/10 T,J1411,HANDAYANI,3EA33
3EA33C,Rabu,Tatap Muka Penulisan Ilmiah,9/10 T,J1411,S TIWI ANGGRAENI,3EA33
3EA33B,Rabu,Tatap Muka Penulisan Ilmiah,9/10 T,J1411,SRI KURNIASIH,3EA33
3EA33,Sabtu,Pengantar Ekonomi Pembangunan,1/2,J1311,SRI RAHAYU PUSPITA SARI,3EA33
3EA33,Sabtu,Manajemen Investasi,3/4,J1311,JHON HENDRI,3EA33
3EA33,Sabtu,Ekonomi Koperasi,5/6,J1311,EKA PATRIYA,3EA33
3EA33,Sabtu,Manajemen Proyek,8/9/10,J1311,SHINTIA PRIHANDINI KUSUMAWARDHANI,3EA33
3EA34,Senin,Komunikasi Bisnis Mandarin,1/2,K251,FATMAWATI,3EA34
3EA34,Senin,Teori Pengambilan Keputusan,3/4,K281,LAINA ZAHRA,3EA34
3EA34A,Senin,Tatap Muka Penulisan Ilmiah,6/7,K281,LAINA ZAHRA,3EA34
3EA34,Selasa,Akuntansi Biaya *,1/2/3,K252,SRI SAPTO DARMAWATI,3EA34
3EA34,Selasa,Metode Riset **,4/5,K258,TEDDY OSWARI,3EA34
3EA34B,Selasa,Tatap Muka Penulisan Ilmiah,7/8,K281,KARTIKA SUKMAWATI,3EA34
3EA34,Rabu,Pengantar Ekonomi Pembangunan,6/7,K254,MAS IFFAN FIRMANSYAH,3EA34
3EA34,Kamis,Aspek Hukum dalam Ekonomi,1/2,K133,TITI NUGRAHENI,3EA34
3EA34,Kamis,Ekonomi Koperasi,3/4,K154,BUDIASIH,3EA34
3EA34,Jum'at,Manajemen Proyek,6/7/8,K295,NURUL AZMI,3EA34
3EA34C,Jum'at,Tatap Muka Penulisan Ilmiah,9/10,K281,LIA JULAEHA,3EA34
3EA34,Sabtu,Manajemen Investasi,1/2,K295,SURYANDARI SEDYO UTAMI,3EA34
3EA35,Senin,Teori Pengambilan Keputusan,1/2,K281,LAINA ZAHRA,3EA35
3EA35,Senin,Komunikasi Bisnis Mandarin,3/4,K251,FATMAWATI,3EA35
3EA35,Selasa,Metode Riset **,1/2,K258,TEDDY OSWARI,3EA35
3EA35,Selasa,Akuntansi Biaya *,4/5/6,K252,SRI SAPTO DARMAWATI,3EA35
3EA35C,Selasa,Tatap Muka Penulisan Ilmiah,8/9,K131,DESSY HUTAJULU,3EA35
3EA35,Rabu,Manajemen Proyek,1/2/3,K294,ZUHAD ICHYAUDIN,3EA35
3EA35,Rabu,Pengantar Ekonomi Pembangunan,4/5,K254,MAS IFFAN FIRMANSYAH,3EA35
3EA35,Kamis,Ekonomi Koperasi,1/2,K154,BUDIASIH,3EA35
3EA35,Kamis,Aspek Hukum dalam Ekonomi,3/4,K133,TITI NUGRAHENI,3EA35
3EA35B,Kamis,Tatap Muka Penulisan Ilmiah,6/7,K252,ELVIA FARDIANA,3EA35
3EA35,Sabtu,Manajemen Investasi,3/4,K295,SURYANDARI SEDYO UTAMI,3EA35
3EA35A,Sabtu,Tatap Muka Penulisan Ilmiah,5/6,K295,SURYANDARI SEDYO UTAMI,3EA35
3EA36,Senin,Aspek Hukum dalam Ekonomi,1/2,K287,SULASTRI,3EA36
3EA36,Senin,Manajemen Proyek,4/5/6,K246,RENNY,3EA36
3EA36,Selasa,Komunikasi Bisnis Mandarin,3/4,K131,AYESA,3EA36
3EA36C,Selasa,Tatap Muka Penulisan Ilmiah,7/8,K293,MAULANA SYARIF HIDAYATULLAH,3EA36
3EA36,Rabu,Ekonomi Koperasi,1/2,K242,SELLY DWI PUTRI,3EA36
3EA36A,Rabu,Tatap Muka Penulisan Ilmiah,1/2,K292,TIA CHISCA ANGGRAENI,3EA36
3EA36,Rabu,Manajemen Investasi,3/4,K261,MUJIYANA,3EA36
3EA36,Kamis,Metode Riset **,6/7,K282,KOMSI KORANTI,3EA36
3EA36,Jum'at,Pengantar Ekonomi Pembangunan,1/2,K247,IRWANDARU DANANJAYA,3EA36
3EA36,Jum'at,Teori Pengambilan Keputusan,3/4,K274,SUPIANI,3EA36
3EA36,Sabtu,Akuntansi Biaya *,1/2/3,K272,JESSICA BARUS,3EA36
3EA36B,Sabtu,Tatap Muka Penulisan Ilmiah,4/5,K284,PERLI ISWANTO,3EA36
3EA37,Senin,Manajemen Proyek,1/2/3,K246,RENNY,3EA37
3EA37,Senin,Akuntansi Biaya *,4/5/6,K133,AGUS SUJARWANTO,3EA37
3EA37C,Senin,Tatap Muka Penulisan Ilmiah,7/8,K284,HENDRI RAHMAYANI ASRI,3EA37
3EA37,Selasa,Komunikasi Bisnis Mandarin,1/2,K131,AYESA,3EA37
3EA37,Rabu,Manajemen Investasi,1/2,K261,MUJIYANA,3EA37
3EA37,Rabu,Aspek Hukum dalam Ekonomi,3/4,K155,BUDI WAHYUDI,3EA37
3EA37,Rabu,Ekonomi Koperasi,5/6,K242,SELLY DWI PUTRI,3EA37
3EA37,Kamis,Metode Riset **,3/4,K282,KOMSI KORANTI,3EA37
3EA37,Jum'at,Teori Pengambilan Keputusan,1/2,K274,SUPIANI,3EA37
3EA37,Jum'at,Pengantar Ekonomi Pembangunan,3/4,K247,IRWANDARU DANANJAYA,3EA37
3EA37B,Jum'at,Tatap Muka Penulisan Ilmiah,7/8,K273,RENI ANGGRAINI,3EA37
3EA37A,Sabtu,Tatap Muka Penulisan Ilmiah,6/7,K291,SEPTI HERAWATI,3EA37
3EA38,Senin,Akuntansi Biaya *,1/2/3,K133,AGUS SUJARWANTO,3EA38
3EA38,Senin,Ekonomi Koperasi,4/5,K287,SULASTRI,3EA38
3EA38A,Senin,Tatap Muka Penulisan Ilmiah,6/7,K287,SULASTRI,3EA38
3EA38,Selasa,Manajemen Proyek,1/2/3,K133,BAGUS NURCAHYO,3EA38
3EA38,Selasa,Metode Riset **,4/5,K291,ABEDNEGO PRIYATAMA,3EA38
3EA38B,Selasa,Tatap Muka Penulisan Ilmiah,6/7,K291,ABEDNEGO PRIYATAMA,3EA38
3EA38,Rabu,Aspek Hukum dalam Ekonomi,1/2,K151,ARMAINI AKHIRSON,3EA38
3EA38,Rabu,Manajemen Investasi,3/4,K272,RINA NOFIYANTI,3EA38
3EA38,Jum'at,Pengantar Ekonomi Pembangunan,6/7,K294,MUFID SURYANI,3EA38
3EA38,Sabtu,Komunikasi Bisnis Mandarin,1/2,K255,BATARI ANDINI,3EA38
3EA38,Sabtu,Teori Pengambilan Keputusan,4/5,K256,IMAN MURTONO SOENHADJI,3EA38
3EA38C,Sabtu,Tatap Muka Penulisan Ilmiah,6/7,K267,CHRISTERA KUSWAHYU INDIRA,3EA38
3EA39,Senin,Teori Pengambilan Keputusan,1/2,K255,ROSNY GONIDJAYA,3EA39
3EA39B,Senin,Tatap Muka Penulisan Ilmiah,8/9,K244,ERNA KUSTYARINI,3EA39
3EA39,Rabu,Manajemen Investasi,1/2,K272,RINA NOFIYANTI,3EA39
3EA39,Rabu,Manajemen Proyek,4/5/6,K294,ZUHAD ICHYAUDIN,3EA39
3EA39,Rabu,Aspek Hukum dalam Ekonomi,7/8,K292,TIA CHISCA ANGGRAENI,3EA39
3EA39C,Rabu,Tatap Muka Penulisan Ilmiah,9/10,K244,ENDANG SETYANINGSIH,3EA39
3EA39,Jum'at,Ekonomi Koperasi,1/2,K295,NURUL AZMI,3EA39
3EA39,Jum'at,Pengantar Ekonomi Pembangunan,3/4,K294,MUFID SURYANI,3EA39
3EA39A,Jum'at,Tatap Muka Penulisan Ilmiah,9/10,K295,NURUL AZMI,3EA39
3EA39,Sabtu,Metode Riset **,1/2,K155,BUDIMAN,3EA39
3EA39,Sabtu,Komunikasi Bisnis Mandarin,3/4,K255,BATARI ANDINI,3EA39
3EA39,Sabtu,Akuntansi Biaya *,5/6/7,K272,JESSICA BARUS,3EA39
3EA40,Senin,Manajemen Investasi,2/3,L223,WARDOYO,3EA40
3EA40,Senin,Aspek Hukum dalam Ekonomi,4/5,L223,KHOIRUNNISA DIAH PARWITASARI,3EA40
3EA40,Selasa,Metode Riset **,2/3,L244,HANTORO ARIEF GISIJANTO,3EA40
3EA40B,Rabu,Tatap Muka Penulisan Ilmiah,6/7,L223,LISNA KUSTAMTINAH,3EA40
3EA40A,Rabu,Tatap Muka Penulisan Ilmiah,7/8,L222,ASTRIED PEMANASARI,3EA40
3EA40,Kamis,Manajemen Proyek,1/2/3,L235,DANDY KURNIA,3EA40
3EA40,Kamis,Teori Pengambilan Keputusan,5/6,L223,ELY SAPTO UTOMO,3EA40
3EA40,Kamis,Akuntansi Biaya *,7/8/9,L226,DIANA SARI,3EA40
3EA40,Jum'at,Pengantar Ekonomi Pembangunan,2/3,L223,GUYUB NURYANTO,3EA40
3EA40,Jum'at,Komunikasi Bisnis Mandarin,7/8,L246,KEZIA YANSEN PASANG,3EA40
3EA40,Sabtu,Ekonomi Koperasi,2/3,L241,SUDARYONO,3EA40
3EA40C,Sabtu,Tatap Muka Penulisan Ilmiah,4/5,L246,DANDY KURNIA,3EA40
4EA01,Selasa,Peranggaran Perusahaan */**,2/3/4,D657,ERNA KUSTYARINI,4EA01
4EA01,Selasa,Manajemen Keuangan Internasional,7/8,D633,HERFITA LIBRIA URSULAWATY,4EA01
4EA01,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA01
4EA01,Jum'at,Kewirausahaan Era Rev. Industri 4,3/4,E221,HANDAYANI AAMAI,4EA01
4EA01,Jum'at,Ekonomi Internasional *,7/8,E322,MUHAMAD FARID MAHMUD,4EA01
4EA01,Jum'at,Mnj.Pemasaran Era Rev.Industri4,9/10,E322,IBNU CAHYO RAMADHAN,4EA01
4EA01,Sabtu,Seminar Kajian Bidang Manajemen,1/2,E524,ALDHI GARDA PRASETYO,4EA01
4EA01,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA01
4EA01,Sabtu,Manajemen Strategik *,5/6/7,E427,MUHAMMAD FIRDAUS,4EA01
4EA02,Senin,Kewirausahaan Era Rev. Industri 4,4/5,E342,NENIK DIAH HARTANTI,4EA02
4EA02,Senin,Ekonomi Internasional *,7/8,E233,HARIYATNO,4EA02
4EA02,Selasa,Manajemen Strategik *,5/6/7,D644,WARDOYO,4EA02
4EA02,Selasa,Manajemen Keuangan Internasional,9/10,D614,HERFITA LIBRIA URSULAWATY,4EA02
4EA02,Rabu,Peranggaran Perusahaan */**,3/4/5,G112,NIDA NUSAIBATUL ADAWIYAH,4EA02
4EA02,Rabu,Seminar Kajian Bidang Manajemen,7/8,G343,INTAN DAMAWATI,4EA02
4EA02,Rabu,Mnj.Pemasaran Era Rev.Industri4,9/10,G343,FANI YULIA ROSYADA,4EA02
4EA02,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA02
4EA02,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA02
4EA03,Senin,Kewirausahaan Era Rev. Industri 4,5/6,E318,TITI NUGRAHENI,4EA03
4EA03,Senin,Manajemen Strategik *,8/9/10,E512,ATI HARMONI,4EA03
4EA03,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA03
4EA03,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA03
4EA03,Jum'at,Mnj.Pemasaran Era Rev.Industri4,1/2,E324,ADE RACHMAWATI NURFITRI,4EA03
4EA03,Jum'at,Seminar Kajian Bidang Manajemen,3/4,E444,STANTY AUFIA RACHMAT,4EA03
4EA03,Jum'at,Manajemen Keuangan Internasional,7/8,E442,DANDY KURNIA,4EA03
4EA03,Jum'at,Ekonomi Internasional *,9/10,E442,MUHAMAD FARID MAHMUD,4EA03
4EA03,Sabtu,Peranggaran Perusahaan */**,5/6/7,E331,MUHAMMAD IRFAN GUSTIANSYAH,4EA03
4EA04,Senin,Peranggaran Perusahaan */**,1/2/3,E218,IRMAWATI WIJAYA,4EA04
4EA04,Senin,Manajemen Strategik *,5/6/7,E517,ATI HARMONI,4EA04
4EA04,Senin,Ekonomi Internasional *,9/10,E346,HARIYATNO,4EA04
4EA04,Selasa,Seminar Kajian Bidang Manajemen,1/2,G227,SRI SETYA HANDAYANI,4EA04
4EA04,Selasa,Kewirausahaan Era Rev. Industri 4,3/4,G227,DINI DWI ERMAWATI,4EA04
4EA04,Selasa,Mnj.Pemasaran Era Rev.Industri4,7/8,G148,ADE RACHMAWATI NURFITRI,4EA04
4EA04,Selasa,Manajemen Keuangan Internasional,9/10,G148,NURUL AZMI,4EA04
4EA04,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA04
4EA04,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA04
4EA05,Senin,Mnj.Pemasaran Era Rev.Industri4,1/2,E233,ALDILLA KURNIA D P,4EA05
4EA05,Senin,Manajemen Keuangan Internasional,4/5,E317,DESSY HUTAJULU,4EA05
4EA05,Senin,Ekonomi Internasional *,6/7,E317,RISA SEPTIANI,4EA05
4EA05,Senin,Kewirausahaan Era Rev. Industri 4,8/9,E317,TITI NUGRAHENI,4EA05
4EA05,Selasa,Manajemen Strategik *,5/6/7,E133,DJOKO SETYO WIDODO,4EA05
4EA05,Rabu,Seminar Kajian Bidang Manajemen,3/4,G445,SRI SETYA HANDAYANI,4EA05
4EA05,Rabu,Peranggaran Perusahaan */**,7/8/9,G215,NIDA NUSAIBATUL ADAWIYAH,4EA05
4EA05,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA05
4EA05,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA05
4EA06,Senin,Ekonomi Internasional *,3/4,E247,RISA SEPTIANI,4EA06
4EA06,Senin,Peranggaran Perusahaan */**,5/6/7,E247,SURYANDARI SEDYO UTAMI,4EA06
4EA06,Selasa,Kewirausahaan Era Rev. Industri 4,3/4,E217,TITI NUGRAHENI,4EA06
4EA06,Selasa,Manajemen Keuangan Internasional,6/7,E121,NURUL AZMI,4EA06
4EA06,Selasa,Manajemen Strategik *,8/9/10,E121,DJOKO SETYO WIDODO,4EA06
4EA06,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA06
4EA06,Jum'at,Mnj.Pemasaran Era Rev.Industri4,3/4,E234,ADE RACHMAWATI NURFITRI,4EA06
4EA06,Jum'at,Seminar Kajian Bidang Manajemen,7/8,E435,STANTY AUFIA RACHMAT,4EA06
4EA06,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EA06
4EA07,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA07
4EA07,Rabu,Mnj.Pemasaran Era Rev.Industri4,1/2,G452,WURI PURNAMASARI,4EA07
4EA07,Rabu,Manajemen Keuangan Internasional,3/4,G452,DINA EKASARI,4EA07
4EA07,Rabu,Manajemen Strategik *,5/6/7,G452,WARDOYO,4EA07
4EA07,Rabu,Seminar Kajian Bidang Manajemen,9/10,G137,INTAN DAMAWATI,4EA07
4EA07,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA07
4EA07,Sabtu,Peranggaran Perusahaan */**,2/3/4,E248,MUHAMMAD IRFAN GUSTIANSYAH,4EA07
4EA07,Sabtu,Kewirausahaan Era Rev. Industri 4,5/6,E248,FEBRIANA PUSPITA SARI,4EA07
4EA07,Sabtu,Ekonomi Internasional *,9/10,E248,ZARWISMAN,4EA07
4EA08,Selasa,Peranggaran Perusahaan */**,1/2/3,G138,LISNA KUSTAMTINAH,4EA08
4EA08,Selasa,Manajemen Strategik *,5/6/7,G236,YUNNI YUNIAWATY,4EA08
4EA08,Rabu,Mnj.Pemasaran Era Rev.Industri4,3/4,G453,WURI PURNAMASARI,4EA08
4EA08,Rabu,Seminar Kajian Bidang Manajemen,5/6,G453,SRI SETYA HANDAYANI,4EA08
4EA08,Rabu,Manajemen Keuangan Internasional,7/8,G453,HERFITA LIBRIA URSULAWATY,4EA08
4EA08,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA08
4EA08,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA08
4EA08,Sabtu,Ekonomi Internasional *,5/6,E321,ZARWISMAN,4EA08
4EA08,Sabtu,Kewirausahaan Era Rev. Industri 4,7/8,E321,FEBRIANA PUSPITA SARI,4EA08
4EA09,Senin,Seminar Kajian Bidang Manajemen,3/4,E333,BUDIMAN1,4EA09
4EA09,Senin,Manajemen Keuangan Internasional,6/7,E243,DESSY HUTAJULU,4EA09
4EA09,Selasa,Manajemen Strategik *,1/2/3,G234,YUNNI YUNIAWATY,4EA09
4EA09,Selasa,Mnj.Pemasaran Era Rev.Industri4,4/5,G234,ADE RACHMAWATI NURFITRI,4EA09
4EA09,Selasa,Peranggaran Perusahaan */**,8/9/10,G224,ERNA KUSTYARINI,4EA09
4EA09,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA09
4EA09,Jum'at,Ekonomi Internasional *,3/4,G112,TITI AYEM LESTARI,4EA09
4EA09,Jum'at,Kewirausahaan Era Rev. Industri 4,7/8,G222,NENIK DIAH HARTANTI,4EA09
4EA09,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA09
4EA10,Senin,Kewirausahaan Era Rev. Industri 4,1/2,E316,TITI NUGRAHENI,4EA10
4EA10,Senin,Peranggaran Perusahaan */**,5/6/7,E338,IRMAWATI WIJAYA,4EA10
4EA10,Senin,Manajemen Strategik *,8/9/10,E338,SUSILOWATI DYAH K,4EA10
4EA10,Selasa,Mnj.Pemasaran Era Rev.Industri4,1/2,G441,ASHUR HARMADI/HILMAN ARDHIANSYAH,4EA10
4EA10,Selasa,Manajemen Keuangan Internasional,4/5,G453,HEIDY HAPSARI,4EA10
4EA10,Selasa,Seminar Kajian Bidang Manajemen,7/8,G129,IZZATI AMPERANINGRUM,4EA10
4EA10,Selasa,Ekonomi Internasional *,9/10,G129,TITI AYEM LESTARI,4EA10
4EA10,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA10
4EA10,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EA10
4EA11,Senin,Ekonomi Internasional *,1/2,E336,RISA SEPTIANI,4EA11
4EA11,Senin,Mnj.Pemasaran Era Rev.Industri4,4/5,E347,ALDILLA KURNIA D P,4EA11
4EA11,Senin,Manajemen Keuangan Internasional,8/9,E341,DESSY HUTAJULU,4EA11
4EA11,Selasa,Manajemen Strategik *,1/2/3,D656,WARDOYO,4EA11
4EA11,Selasa,Peranggaran Perusahaan */**,4/5/6,D656,BUDI SANTOSO2,4EA11
4EA11,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA11
4EA11,Jum'at,Seminar Kajian Bidang Manajemen,1/2,G234,DITIYA HIMAWATI,4EA11
4EA11,Jum'at,Kewirausahaan Era Rev. Industri 4,3/4,G234,NENIK DIAH HARTANTI,4EA11
4EA11,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EA11
4EA12,Selasa,Peranggaran Perusahaan */**,1/2/3,D622,BUDI SANTOSO2,4EA12
4EA12,Selasa,Kewirausahaan Era Rev. Industri 4,4/5,D622,INDAH JAUHARI,4EA12
4EA12,Selasa,Seminar Kajian Bidang Manajemen,7/8,D624,DODI ARIF,4EA12
4EA12,Rabu,Manajemen Strategik *,1/2/3,G236,WARDOYO,4EA12
4EA12,Rabu,Mnj.Pemasaran Era Rev.Industri4,4/5,G236,FANI YULIA ROSYADA,4EA12
4EA12,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA12
4EA12,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA12
4EA12,Sabtu,Ekonomi Internasional *,7/8,G226,VELY RANDYANTINI,4EA12
4EA12,Sabtu,Manajemen Keuangan Internasional,9/10,G226,ANGGIA PARAMITA PUTI KENCANA,4EA12
4EA13,Senin,Manajemen Strategik *,4/5/6,E343,YUNNI YUNIAWATY,4EA13
4EA13,Senin,Peranggaran Perusahaan */**,8/9/10,E333,LISNA KUSTAMTINAH,4EA13
4EA13,Selasa,Manajemen Keuangan Internasional,1/2,G2410,HEIDY HAPSARI,4EA13
4EA13,Selasa,Kewirausahaan Era Rev. Industri 4,5/6,G2410,DINI DWI ERMAWATI,4EA13
4EA13,Selasa,Mnj.Pemasaran Era Rev.Industri4,7/8,G2410,ASHUR HARMADI/HILMAN ARDHIANSYAH,4EA13
4EA13,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA13
4EA13,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4EA13
4EA13,Jum'at,Seminar Kajian Bidang Manajemen,7/8,G139,DITIYA HIMAWATI,4EA13
4EA13,Jum'at,Ekonomi Internasional *,9/10,G139,TITI AYEM LESTARI,4EA13
4EA14,Senin,Manajemen Keuangan Internasional,1/2,E243,DESSY HUTAJULU,4EA14
4EA14,Senin,Peranggaran Perusahaan */**,4/5/6,E237,LISNA KUSTAMTINAH,4EA14
4EA14,Senin,Manajemen Strategik *,8/9/10,E523,YUNNI YUNIAWATY,4EA14
4EA14,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA14
4EA14,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA14
4EA14,Jum'at,Ekonomi Internasional *,1/2,G316,TITI AYEM LESTARI,4EA14
4EA14,Jum'at,Seminar Kajian Bidang Manajemen,3/4,G316,DITIYA HIMAWATI,4EA14
4EA14,Jum'at,Mnj.Pemasaran Era Rev.Industri4,7/8,G421,FANI YULIA ROSYADA,4EA14
4EA14,Jum'at,Kewirausahaan Era Rev. Industri 4,9/10,G421,NENIK DIAH HARTANTI,4EA14
4EA15,Senin,Manajemen Strategik *,1/2/3,E326,SUPIANI,4EA15
4EA15,Senin,Seminar Kajian Bidang Manajemen,5/6,E346,BUDIMAN1,4EA15
4EA15,Senin,Mnj.Pemasaran Era Rev.Industri4,7/8,E346,ALDILLA KURNIA D P,4EA15
4EA15,Selasa,Kewirausahaan Era Rev. Industri 4,1/2,G247,ADE RACHMAWATI NURFITRI,4EA15
4EA15,Selasa,Peranggaran Perusahaan */**,3/4/5,G247,EDY NURSANTA,4EA15
4EA15,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA15
4EA15,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA15
4EA15,Sabtu,Manajemen Keuangan Internasional,7/8,G234,ANGGIA PARAMITA PUTI KENCANA,4EA15
4EA15,Sabtu,Ekonomi Internasional *,9/10,G234,VELY RANDYANTINI,4EA15
4EA16,Selasa,Peranggaran Perusahaan */**,4/5/6,G342,LISNA KUSTAMTINAH,4EA16
4EA16,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA16
4EA16,Selasa,Kewirausahaan Era Rev. Industri 4,9/10,G123,ADE RACHMAWATI NURFITRI,4EA16
4EA16,Rabu,Manajemen Strategik *,1/2/3,G348,BUDI PRIJANTO,4EA16
4EA16,Rabu,Manajemen Keuangan Internasional,5/6,G342,HERFITA LIBRIA URSULAWATY,4EA16
4EA16,Rabu,Mnj.Pemasaran Era Rev.Industri4,7/8,G342,FANI YULIA ROSYADA,4EA16
4EA16,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA16
4EA16,Jum'at,Ekonomi Internasional *,7/8,G423,TITI AYEM LESTARI,4EA16
4EA16,Jum'at,Seminar Kajian Bidang Manajemen,9/10,G423,DITIYA HIMAWATI,4EA16
4EA17,Selasa,Seminar Kajian Bidang Manajemen,1/2,E133,DODI ARIF,4EA17
4EA17,Selasa,Peranggaran Perusahaan */**,4/5/6,E139,LINCE AFRI YENNY,4EA17
4EA17,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA17
4EA17,Jum'at,Manajemen Keuangan Internasional,1/2,E228,MARWAN ASRI/DANDY KURNIA,4EA17
4EA17,Jum'at,Mnj.Pemasaran Era Rev.Industri4,3/4,E228,ASHUR HARMADI,4EA17
4EA17,Jum'at,Kewirausahaan Era Rev. Industri 4,7/8,E228,HANDAYANI AAMAI,4EA17
4EA17,Jum'at,Ekonomi Internasional *,9/10,E228,DESSY HUTAJULU,4EA17
4EA17,Sabtu,Manajemen Strategik *,2/3/4,E337,TERTIO KUNTO DEWO,4EA17
4EA17,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EA17
4EA18,Senin,Kewirausahaan Era Rev. Industri 4,3/4,E316,TITI NUGRAHENI,4EA18
4EA18,Senin,Ekonomi Internasional *,7/8,E413,HADIR HUDIYANTO,4EA18
4EA18,Senin,Mnj.Pemasaran Era Rev.Industri4,9/10,E413,ALDILLA KURNIA D P,4EA18
4EA18,Selasa,Manajemen Strategik *,5/6/7,D637,BUDI PRIJANTO,4EA18
4EA18,Rabu,Manajemen Keuangan Internasional,1/2,G144,DINA EKASARI,4EA18
4EA18,Rabu,Peranggaran Perusahaan */**,3/4/5,G144,FX AJI SUKARNO,4EA18
4EA18,Rabu,Seminar Kajian Bidang Manajemen,7/8,G421,IZZATI AMPERANINGRUM,4EA18
4EA18,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA18
4EA18,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA18
4EA19,Senin,Kewirausahaan Era Rev. Industri 4,6/7,E513,NENIK DIAH HARTANTI,4EA19
4EA19,Senin,Manajemen Strategik *,8/9/10,E513,SUPIANI,4EA19
4EA19,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4EA19
4EA19,Selasa,Peranggaran Perusahaan */**,8/9/10,D644,BUDI WAHYUDI,4EA19
4EA19,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA19
4EA19,Jum'at,Mnj.Pemasaran Era Rev.Industri4,1/2,E442,ASHUR HARMADI,4EA19
4EA19,Jum'at,Manajemen Keuangan Internasional,3/4,E442,MARWAN ASRI/DANDY KURNIA,4EA19
4EA19,Jum'at,Ekonomi Internasional *,7/8,E225,DESSY HUTAJULU,4EA19
4EA19,Jum'at,Seminar Kajian Bidang Manajemen,9/10,E225,STANTY AUFIA RACHMAT,4EA19
4EA20,Senin,Peranggaran Perusahaan */**,1/2/3,E444,SURYANDARI SEDYO UTAMI,4EA20
4EA20,Senin,Manajemen Strategik *,5/6/7,E123,ANGGA PUTRI EKANOVA,4EA20
4EA20,Senin,Ekonomi Internasional *,9/10,E414,HADIR HUDIYANTO,4EA20
4EA20,Selasa,Kewirausahaan Era Rev. Industri 4,1/2,E217,TITI NUGRAHENI,4EA20
4EA20,Selasa,Mnj.Pemasaran Era Rev.Industri4,3/4,E133,ALDILLA KURNIA D P,4EA20
4EA20,Selasa,Manajemen Keuangan Internasional,7/8,E327,RATIH JUWITA,4EA20
4EA20,Selasa,Seminar Kajian Bidang Manajemen,9/10,E327,DITIYA HIMAWATI,4EA20
4EA20,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA20
4EA20,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA20
4EA21,Senin,Ekonomi Internasional *,3/4,E242,HADIR HUDIYANTO,4EA21
4EA21,Senin,Manajemen Strategik *,5/6/7,E242,SUSILOWATI DYAH K,4EA21
4EA21,Senin,Kewirausahaan Era Rev. Industri 4,8/9,E242,NENIK DIAH HARTANTI,4EA21
4EA21,Selasa,Manajemen Keuangan Internasional,4/5,E231,NURUL AZMI,4EA21
4EA21,Selasa,Mnj.Pemasaran Era Rev.Industri4,7/8,E317,ALDILLA KURNIA D P,4EA21
4EA21,Rabu,Seminar Kajian Bidang Manajemen,3/4,G227,IZZATI AMPERANINGRUM,4EA21
4EA21,Rabu,Peranggaran Perusahaan */**,7/8/9,G348,FX AJI SUKARNO,4EA21
4EA21,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA21
4EA21,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA21
4EA22,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA22
4EA22,Rabu,Seminar Kajian Bidang Manajemen,1/2,A202,ANGGA PUTRI EKANOVA,4EA22
4EA22,Rabu,Manajemen Strategik *,3/4/5,A202,KHOIRUNNISA DIAH PARWITASARI,4EA22
4EA22,Rabu,Peranggaran Perusahaan */**,7/8/9,A202,EFA WAHYUNI,4EA22
4EA22,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA22
4EA22,Sabtu,Manajemen Keuangan Internasional,1/2,A701,DANANG WIJAYANTO,4EA22
4EA22,Sabtu,Ekonomi Internasional *,3/4,A701,IMBANGAN PUTRA RIVAI,4EA22
4EA22,Sabtu,Mnj.Pemasaran Era Rev.Industri4,5/6,A701,IBNU CAHYO RAMADHAN,4EA22
4EA22,Sabtu,Kewirausahaan Era Rev. Industri 4,8/9,A701,AGUNG YANUARIANTO/YUNI ANDONO ACHMAD,4EA22
4EA23,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4EA23
4EA23,Rabu,Peranggaran Perusahaan */**,2/3/4,A802,EFA WAHYUNI,4EA23
4EA23,Rabu,Seminar Kajian Bidang Manajemen,6/7,A802,ANGGA PUTRI EKANOVA,4EA23
4EA23,Rabu,Manajemen Strategik *,8/9/10,A802,KHOIRUNNISA DIAH PARWITASARI,4EA23
4EA23,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA23
4EA23,Sabtu,Ekonomi Internasional *,1/2,A602,IMBANGAN PUTRA RIVAI,4EA23
4EA23,Sabtu,Manajemen Keuangan Internasional,3/4,A602,DANANG WIJAYANTO,4EA23
4EA23,Sabtu,Kewirausahaan Era Rev. Industri 4,5/6,A602,AGUNG YANUARIANTO/YUNI ANDONO ACHMAD,4EA23
4EA23,Sabtu,Mnj.Pemasaran Era Rev.Industri4,9/10,A602,IBNU CAHYO RAMADHAN,4EA23
4EA24,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA24
4EA24,Rabu,Manajemen Strategik *,2/3/4,A102,LASMINIASIH,4EA24
4EA24,Rabu,Peranggaran Perusahaan */**,5/6/7,A102,SUWARDI,4EA24
4EA24,Rabu,Seminar Kajian Bidang Manajemen,9/10,A102,ANGGA PUTRI EKANOVA,4EA24
4EA24,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA24
4EA24,Sabtu,Mnj.Pemasaran Era Rev.Industri4,1/2,A802,IBNU CAHYO RAMADHAN,4EA24
4EA24,Sabtu,Ekonomi Internasional *,3/4,A802,LISTA KUSPRIATNI,4EA24
4EA24,Sabtu,Manajemen Keuangan Internasional,7/8,A802,ARDIPRAWIRO,4EA24
4EA24,Sabtu,Kewirausahaan Era Rev. Industri 4,9/10,A802,DESTI DIRNAENI,4EA24
4EA25,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA25
4EA25,Rabu,Peranggaran Perusahaan */**,1/2/3,A103,SUWARDI,4EA25
4EA25,Rabu,Seminar Kajian Bidang Manajemen,4/5,A103,ANGGA PUTRI EKANOVA,4EA25
4EA25,Rabu,Manajemen Strategik *,7/8/9,A602,LASMINIASIH,4EA25
4EA25,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA25
4EA25,Sabtu,Ekonomi Internasional *,1/2,A601,LISTA KUSPRIATNI,4EA25
4EA25,Sabtu,Mnj.Pemasaran Era Rev.Industri4,3/4,A601,IBNU CAHYO RAMADHAN,4EA25
4EA25,Sabtu,Kewirausahaan Era Rev. Industri 4,7/8,A601,DESTI DIRNAENI,4EA25
4EA25,Sabtu,Manajemen Keuangan Internasional,9/10,A601,ARDIPRAWIRO,4EA25
4EA26,Senin,Peranggaran Perusahaan */**,12/13/14,D635,BUDI WAHYUDI,4EA26
4EA26,Selasa,Seminar Kajian Bidang Manajemen,11/12,D637,DODI ARIF,4EA26
4EA26,Selasa,Mnj.Pemasaran Era Rev.Industri4,13/14,D637,ARI KHARISMA,4EA26
4EA26,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA26
4EA26,Sabtu,Kewirausahaan Era Rev. Industri 4,1/2,E123,FEBRIANA PUSPITA SARI,4EA26
4EA26,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,11/12,,TIM DOSEN,4EA26
4EA26,Sabtu,Ekonomi Internasional *,3/4,E123,ZARWISMAN,4EA26
4EA26,Sabtu,Manajemen Keuangan Internasional,5/6,E123,ANGGIA PARAMITA PUTI KENCANA,4EA26
4EA26,Sabtu,Manajemen Strategik *,8/9/10,E247,MUHAMMAD FIRDAUS,4EA26
4EA27,Senin,Seminar Kajian Bidang Manajemen,1/2,J1412,SRI KURNIASIH AGUSTIN,4EA27
4EA27,Senin,Peranggaran Perusahaan */**,4/5/6,J1412,HANDAYANI,4EA27
4EA27,Senin,Manajemen Keuangan Internasional,7/8,J1412,CHRISTERA KUSWAHYU INDIRA,4EA27
4EA27,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA27
4EA27,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA27
4EA27,Sabtu,Manajemen Strategik *,1/2/3,J1220,WAHYU WIDJAYANTI,4EA27
4EA27,Sabtu,Mnj.Pemasaran Era Rev.Industri4,4/5,J1424,SUPRIYO HARTADI W,4EA27
4EA27,Sabtu,Ekonomi Internasional *,6/7,J162,AGUS SUTEJO,4EA27
4EA27,Sabtu,Kewirausahaan Era Rev. Industri 4,9/10,J1220,WENDRA AFRIANA,4EA27
4EA28,Senin,Mnj.Pemasaran Era Rev.Industri4,1/2,J1116,BUDI UTAMI,4EA28
4EA28,Senin,Manajemen Keuangan Internasional,3/4,J1116,CHRISTERA KUSWAHYU INDIRA,4EA28
4EA28,Senin,Seminar Kajian Bidang Manajemen,6/7,J1116,SRI KURNIASIH AGUSTIN,4EA28
4EA28,Senin,Manajemen Strategik *,8/9/10,J1116,DADI KUSWANDI,4EA28
4EA28,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4EA28
4EA28,Selasa,Kewirausahaan Era Rev. Industri 4,6/7,J1316B,YESSY RATNA HAPSARI,4EA28
4EA28,Selasa,Ekonomi Internasional *,8/9,J1316B,JOKO UTOMO,4EA28
4EA28,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA28
4EA28,Jum'at,Peranggaran Perusahaan */**,2/3/4,J5233,DESTI DIRNAENI,4EA28
4EA29,Rabu,Manajemen Keuangan Internasional,1/2,J144,CHRISTERA KUSWAHYU INDIRA,4EA29
4EA29,Rabu,Mnj.Pemasaran Era Rev.Industri4,3/4,J144,SUPRIYO HARTADI W,4EA29
4EA29,Rabu,Peranggaran Perusahaan */**,6/7/8,J1315B,HANDAYANI,4EA29
4EA29,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA29
4EA29,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EA29
4EA29,Sabtu,Kewirausahaan Era Rev. Industri 4,1/2,J1219,EKA PATRIYA,4EA29
4EA29,Sabtu,Ekonomi Internasional *,3/4,J1219,AGUS SUTEJO,4EA29
4EA29,Sabtu,Seminar Kajian Bidang Manajemen,6/7,J1219,AISYAH MARGARETTA,4EA29
4EA29,Sabtu,Manajemen Strategik *,8/9/10,J1219,WAHYU WIDJAYANTI,4EA29
4EA30,Senin,Mnj.Pemasaran Era Rev.Industri4,3/4,J1114,BUDI UTAMI,4EA30
4EA30,Senin,Manajemen Strategik *,5/6/7,J1114,DADI KUSWANDI,4EA30
4EA30,Selasa,Manajemen Keuangan Internasional,1/2,J1115A,ADITYA RIAN RAMADHAN,4EA30
4EA30,Selasa,Ekonomi Internasional *,3/4,J1115A,JOKO UTOMO,4EA30
4EA30,Selasa,Seminar Kajian Bidang Manajemen,5/6,J1115A,BUDIMAN1,4EA30
4EA30,Selasa,Kewirausahaan Era Rev. Industri 4,8/9,J1115A,YESSY RATNA HAPSARI,4EA30
4EA30,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA30
4EA30,Jum'at,Peranggaran Perusahaan */**,7/8/9,J5222,DESTI DIRNAENI,4EA30
4EA30,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA30
4EA31,Selasa,Seminar Kajian Bidang Manajemen,1/2,J1515B,BUDIMAN1,4EA31
4EA31,Selasa,Manajemen Keuangan Internasional,3/4,J1515B,ADITYA RIAN RAMADHAN,4EA31
4EA31,Selasa,Kewirausahaan Era Rev. Industri 4,6/7,J1515B,TIA CHISCA ANGGRAENI,4EA31
4EA31,Rabu,Manajemen Strategik *,4/5/6,J311,IMMI FISKA TARIGAN,4EA31
4EA31,Rabu,Ekonomi Internasional *,8/9,J311,MUHAMAD SYAHWILDAN,4EA31
4EA31,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA31
4EA31,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA31
4EA31,Sabtu,Peranggaran Perusahaan */**,1/2/3,J157,RATIH FITRI YATUN,4EA31
4EA31,Sabtu,Mnj.Pemasaran Era Rev.Industri4,6/7,J1317,SUPRIYO HARTADI W,4EA31
4EA32,Selasa,Mnj.Pemasaran Era Rev.Industri4,1/2,J1512,SUPRIYO HARTADI W,4EA32
4EA32,Selasa,Seminar Kajian Bidang Manajemen,3/4,J1512,BUDIMAN1,4EA32
4EA32,Selasa,Manajemen Keuangan Internasional,5/6,J1512,ADITYA RIAN RAMADHAN,4EA32
4EA32,Selasa,Kewirausahaan Era Rev. Industri 4,8/9,J1512,TIA CHISCA ANGGRAENI,4EA32
4EA32,Rabu,Ekonomi Internasional *,4/5,J322,MUHAMAD SYAHWILDAN,4EA32
4EA32,Rabu,Manajemen Strategik *,7/8/9,J324,IMMI FISKA TARIGAN,4EA32
4EA32,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA32
4EA32,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA32
4EA32,Sabtu,Peranggaran Perusahaan */**,4/5/6,J164,RATIH FITRI YATUN,4EA32
4EA33,Senin,Ekonomi Internasional *,1/2,J1318,JOKO UTOMO,4EA33
4EA33,Senin,Seminar Kajian Bidang Manajemen,3/4,J1318,SRI KURNIASIH AGUSTIN,4EA33
4EA33,Senin,Peranggaran Perusahaan */**,7/8/9,J1318,HANDAYANI,4EA33
4EA33,Selasa,Mnj.Pemasaran Era Rev.Industri4,3/4,J1510,SUPRIYO HARTADI W,4EA33
4EA33,Selasa,Manajemen Keuangan Internasional,7/8,J1510,ADITYA RIAN RAMADHAN,4EA33
4EA33,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA33
4EA33,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA33
4EA33,Sabtu,Manajemen Strategik *,4/5/6,J129,WAHYU WIDJAYANTI,4EA33
4EA33,Sabtu,Kewirausahaan Era Rev. Industri 4,8/9,J129,EKA PATRIYA,4EA33
4EA34,Senin,Peranggaran Perusahaan */**,1/2/3,J1416A,HANDAYANI,4EA34
4EA34,Senin,Manajemen Keuangan Internasional,5/6,J1416A,CHRISTERA KUSWAHYU INDIRA,4EA34
4EA34,Senin,Mnj.Pemasaran Era Rev.Industri4,7/8,J1416A,BUDI UTAMI,4EA34
4EA34,Senin,Seminar Kajian Bidang Manajemen,9/10,J1416A,SRI KURNIASIH AGUSTIN,4EA34
4EA34,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA34
4EA34,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA34
4EA34,Sabtu,Manajemen Strategik *,2/3/4,J1316A,IMMI FISKA TARIGAN,4EA34
4EA34,Sabtu,Kewirausahaan Era Rev. Industri 4,6/7,J1316A,WENDRA AFRIANA,4EA34
4EA34,Sabtu,Ekonomi Internasional *,9/10,J144,AGUS SUTEJO,4EA34
4EA35,Senin,Manajemen Strategik *,1/2/3,K165,BUDI PRIJANTO,4EA35
4EA35,Senin,Kewirausahaan Era Rev. Industri 4,4/5,K294,MOH. EGA ELMAN MISKA,4EA35
4EA35,Selasa,Ekonomi Internasional *,1/2,K247,RISA SEPTIANI,4EA35
4EA35,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA35
4EA35,Rabu,Manajemen Keuangan Internasional,3/4,K163,DESSY HUTAJULU,4EA35
4EA35,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA35
4EA35,Jum'at,Mnj.Pemasaran Era Rev.Industri4,7/8,K281,SUPRIYO HARTADI W,4EA35
4EA35,Sabtu,Peranggaran Perusahaan */**,1/2/3,K271,IZZATI AMPERANINGRUM,4EA35
4EA35,Sabtu,Seminar Kajian Bidang Manajemen,4/5,K248,DODI ARIF,4EA35
4EA36,Senin,Manajemen Keuangan Internasional,2/3,K274,SITI AISYAH,4EA36
4EA36,Selasa,Mnj.Pemasaran Era Rev.Industri4,1/2,K153,ZAIDATUN EKASTUTI,4EA36
4EA36,Selasa,Ekonomi Internasional *,3/4,K247,RISA SEPTIANI,4EA36
4EA36,Selasa,Peranggaran Perusahaan */**,5/6/7,K242,NENIK DIAH HARTANTI,4EA36
4EA36,Rabu,Kewirausahaan Era Rev. Industri 4,1/2,K244,ENDANG SETYANINGSIH,4EA36
4EA36,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA36
4EA36,Jum'at,Manajemen Strategik *,1/2/3,K281,SUPRIYO HARTADI W,4EA36
4EA36,Sabtu,Seminar Kajian Bidang Manajemen,1/2,K248,DODI ARIF,4EA36
4EA36,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA36
4EA37,Senin,Kewirausahaan Era Rev. Industri 4,1/2,K294,MOH. EGA ELMAN MISKA,4EA37
4EA37,Senin,Manajemen Keuangan Internasional,5/6,K274,SITI AISYAH,4EA37
4EA37,Selasa,Peranggaran Perusahaan */**,1/2/3,K242,NENIK DIAH HARTANTI,4EA37
4EA37,Selasa,Manajemen Strategik *,4/5/6,K133,BAGUS NURCAHYO,4EA37
4EA37,Rabu,Ekonomi Internasional *,1/2,K282,SRI KURNIASIH AGUSTIN,4EA37
4EA37,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA37
4EA37,Sabtu,Mnj.Pemasaran Era Rev.Industri4,1/2,K284,PERLI ISWANTO,4EA37
4EA37,Sabtu,Seminar Kajian Bidang Manajemen,4/5,K241,CICILIA ERLY ISTIA,4EA37
4EA37,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EA37
4EA38,Selasa,Kewirausahaan Era Rev. Industri 4,1/2,K291,ABEDNEGO PRIYATAMA,4EA38
4EA38,Selasa,Manajemen Strategik *,3/4/5,K292,ALI MUHLI,4EA38
4EA38,Rabu,Manajemen Keuangan Internasional,1/2,K155,BUDI WAHYUDI,4EA38
4EA38,Rabu,Ekonomi Internasional *,4/5,K282,SRI KURNIASIH AGUSTIN,4EA38
4EA38,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA38
4EA38,Jum'at,Peranggaran Perusahaan */**,1/2/3,K241,EDY NURSANTA,4EA38
4EA38,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4EA38
4EA38,Sabtu,Seminar Kajian Bidang Manajemen,4/5,K271,IZZATI AMPERANINGRUM,4EA38
4EA38,Sabtu,Mnj.Pemasaran Era Rev.Industri4,6/7,K284,PERLI ISWANTO,4EA38
4EA39,Senin,Peranggaran Perusahaan */**,1/2/3,K244,ERNA KUSTYARINI,4EA39
4EA39,Senin,Mnj.Pemasaran Era Rev.Industri4,4/5,K131,ADE RACHMAWATI NURFITRI,4EA39
4EA39,Selasa,Kewirausahaan Era Rev. Industri 4,1/2,K274,JUNI SASMIHARTI,4EA39
4EA39,Rabu,Ekonomi Internasional *,6/7,K156,DINI YARTIWULANDARI,4EA39
4EA39,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA39
4EA39,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EA39
4EA39,Jum'at,Seminar Kajian Bidang Manajemen,7/8,K155,ATI HARMONI,4EA39
4EA39,Sabtu,Manajemen Strategik *,1/2/3,K261,CHRISTINA DEWI WULANDARI,4EA39
4EA39,Sabtu,Manajemen Keuangan Internasional,4/5,K244,DARMADI,4EA39
4EA40,Senin,Mnj.Pemasaran Era Rev.Industri4,1/2,K131,ADE RACHMAWATI NURFITRI,4EA40
4EA40,Senin,Peranggaran Perusahaan */**,4/5/6,K244,ERNA KUSTYARINI,4EA40
4EA40,Selasa,Seminar Kajian Bidang Manajemen,2/3,K281,WIDADA,4EA40
4EA40,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EA40
4EA40,Rabu,Ekonomi Internasional *,1/2,K252,LISTA KUSPRIATNI,4EA40
4EA40,Rabu,Kewirausahaan Era Rev. Industri 4,3/4,K292,TIA CHISCA ANGGRAENI,4EA40
4EA40,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EA40
4EA40,Jum'at,Manajemen Strategik *,1/2/3,K155,ATI HARMONI,4EA40
4EA40,Jum'at,Manajemen Keuangan Internasional,7/8,K256,RATIH JUWITA,4EA40
1EB01,Senin,Pendidikan Kewarganegaraan,3/4,G145,SINGGIH HARDJANTO,1EB01
1EB01,Senin,Ilmu Budaya Dasar,6/7,G145,TATI SUNARTI,1EB01
1EB01,Rabu,Bahasa Inggris,1/2,G218,STELLA AMANDA,1EB01
1EB01,Rabu,Pengantar Manajemen,3/4,G218,SARIYATI,1EB01
1EB01,Rabu,Pengantar Komputer & TI 1C,5/6,G218,ORITA DWI PURBIYANTI,1EB01
1EB01,Rabu,Pengantar Ekonomi 1,8/9,G135,MOHAMMAD ABDUL MUKHYI,1EB01
1EB01,Kamis,Pengantar Bisnis,1/2,D657,SEPTI MARIANI TIS'A RAMADHANI,1EB01
1EB01,Kamis,Matematika Ekonomi 1 **,3/4/5,D657,ENDAH BUDIYATI,1EB01
1EB01,Kamis,Pengantar Komputer & TI 1A,7/8,D664,SUSI WIDAYATI,1EB01
1EB01,Kamis,Pengantar Komputer & TI 1B,9/10,D664,YULI MAHARETTA ARIANTI,1EB01
1EB01,Jum'at,Pengantar Akuntansi 1A **,7/8,D667,AGUSTIN RUSIANA SARI,1EB01
1EB01,Jum'at,Pengantar Akuntansi 1B **,9/10,D667,ISTICHANAH,1EB01
1EB02,Senin,Pengantar Akuntansi 1B **,1/2,G134,REYNALDI,1EB02
1EB02,Senin,Pendidikan Kewarganegaraan,3/4,G236,ARY NATALINA,1EB02
1EB02,Senin,Pengantar Ekonomi 1,6/7,G236,ELVIA FARDIANA,1EB02
1EB02,Rabu,Pengantar Akuntansi 1A **,1/2,G313,AGUSTIN RUSIANA SARI,1EB02
1EB02,Rabu,Pengantar Komputer & TI 1C,3/4,G313,ORITA DWI PURBIYANTI,1EB02
1EB02,Rabu,Pengantar Manajemen,5/6,G313,SARIYATI,1EB02
1EB02,Kamis,Pengantar Komputer & TI 1A,1/2,D612,SUSI WIDAYATI,1EB02
1EB02,Kamis,Pengantar Bisnis,3/4,D612,SEPTI MARIANI TIS'A RAMADHANI,1EB02
1EB02,Kamis,Matematika Ekonomi 1 **,5/6/7,D612,HENNY HERYANDINI,1EB02
1EB02,Kamis,Pengantar Komputer & TI 1B,9/10,D652,ERMA SOVA,1EB02
1EB02,Jum'at,Ilmu Budaya Dasar,1/2,G432,TATI SUNARTI,1EB02
1EB02,Jum'at,Bahasa Inggris,3/4,G432,ARSIWELA,1EB02
1EB03,Senin,Pengantar Bisnis,1/2,G227,SEPTI MARIANI TIS'A RAMADHANI,1EB03
1EB03,Senin,Pengantar Ekonomi 1,3/4,G227,ELVIA FARDIANA,1EB03
1EB03,Senin,Pengantar Akuntansi 1B **,6/7,G232,REYNALDI,1EB03
1EB03,Senin,Matematika Ekonomi 1 **,8/9/10,G232,MUHAMMAD IMRON HADISANTOSA,1EB03
1EB03,Rabu,Pendidikan Kewarganegaraan,1/2,G215,WIDIO PURWANI,1EB03
1EB03,Rabu,Pengantar Akuntansi 1A **,3/4,G228,AGUSTIN RUSIANA SARI,1EB03
1EB03,Rabu,Pengantar Manajemen,7/8,G216,SARIYATI,1EB03
1EB03,Rabu,Pengantar Komputer & TI 1B,9/10,G216,LATIPATURACHMANIAH,1EB03
1EB03,Kamis,Bahasa Inggris,1/2,D624,YOHANA SIANTURI,1EB03
1EB03,Kamis,Pengantar Komputer & TI 1C,3/4,D624,SUCI BR KEMBAREN,1EB03
1EB03,Kamis,Pengantar Komputer & TI 1A,5/6,D624,SUSI WIDAYATI,1EB03
1EB03,Kamis,Ilmu Budaya Dasar,8/9,D653,OKTARINA NUR WIDYANTI,1EB03
1EB04,Senin,Pengantar Ekonomi 1,1/2,G138,ELVIA FARDIANA,1EB04
1EB04,Senin,Pengantar Komputer & TI 1A,3/4,G138,ABDUL HAFIDH SIDIQ,1EB04
1EB04,Senin,Pengantar Komputer & TI 1B,6/7,G222,IRA WINDARTI,1EB04
1EB04,Senin,Pengantar Manajemen,8/9,G217,SEPTI MARIANI TIS'A RAMADHANI,1EB04
1EB04,Kamis,Pengantar Komputer & TI 1C,2/3,E515,FITRI SJAFRINA,1EB04
1EB04,Kamis,Bahasa Inggris,4/5,E515,IDHA DWI PERMATASARI,1EB04
1EB04,Kamis,Pendidikan Kewarganegaraan,7/8,E314,SULISTINING TRIMULYANI,1EB04
1EB04,Jum'at,Pengantar Akuntansi 1B **,7/8,E227,DYAH PALUPI,1EB04
1EB04,Jum'at,Pengantar Akuntansi 1A **,9/10,E227,AYU ANDRIANIE,1EB04
1EB04,Sabtu,Ilmu Budaya Dasar,1/2,E323,RANTI PUTRI PRATIWI,1EB04
1EB04,Sabtu,Matematika Ekonomi 1 **,4/5/6,E325,REINAL RACHMAVIAL,1EB04
1EB04,Sabtu,Pengantar Bisnis,7/8,E325,CHRISTIAN RAMOS KURNIAWAN,1EB04
1EB05,Rabu,Pengantar Komputer & TI 1C,1/2,E332,SUCI BR KEMBAREN,1EB05
1EB05,Rabu,Pengantar Akuntansi 1A **,3/4,E332,ISTICHANAH,1EB05
1EB05,Rabu,Pengantar Akuntansi 1B **,5/6,E332,REYNALDI,1EB05
1EB05,Rabu,Pengantar Komputer & TI 1A,8/9,E338,DWI SETYASIH,1EB05
1EB05,Kamis,Matematika Ekonomi 1 **,1/2/3,G239,SIDIK LESTIYONO,1EB05
1EB05,Kamis,Pengantar Manajemen,5/6,G349,VELY RANDYANTINI,1EB05
1EB05,Kamis,Pengantar Bisnis,7/8,G349,AGUNG YANUARIANTO/SEPTI MARIANI TIS'A R,1EB05
1EB05,Kamis,Bahasa Inggris,9/10,G349,AULIA HARIS FIRSTIYANTI,1EB05
1EB05,Jum'at,Pendidikan Kewarganegaraan,1/2,E216,MARTI RIASTUTI,1EB05
1EB05,Jum'at,Pengantar Ekonomi 1,3/4,E327,ASHAR BASYIR,1EB05
1EB05,Jum'at,Ilmu Budaya Dasar,7/8,E316,NONIK,1EB05
1EB05,Jum'at,Pengantar Komputer & TI 1B,9/10,E316,TOPAN SUKMA SAPUTRA,1EB05
1EB06,Senin,Pengantar Manajemen,3/4,G348,DWI INDAH UTAMI NINGSIH,1EB06
1EB06,Senin,Pengantar Akuntansi 1A **,7/8,G226,DYAH PALUPI,1EB06
1EB06,Senin,Pengantar Akuntansi 1B **,9/10,G135,REYNALDI,1EB06
1EB06,Rabu,Pengantar Komputer & TI 1C,1/2,G113,YULIA EKA PRAPTININGSIH,1EB06
1EB06,Rabu,Bahasa Inggris,5/6,G221,RICKY PERDANA,1EB06
1EB06,Rabu,Pengantar Komputer & TI 1A,7/8,G223,SITI CHODIDJAH,1EB06
1EB06,Kamis,Pendidikan Kewarganegaraan,5/6,G216,NELTJE F KATUUK,1EB06
1EB06,Kamis,Pengantar Komputer & TI 1B,7/8,G216,FITRI SJAFRINA,1EB06
1EB06,Kamis,Pengantar Ekonomi 1,9/10,G216,PRADIVTA ALFATIHAH,1EB06
1EB06,Jum'at,Matematika Ekonomi 1 **,2/3/4,G314,SIDIK LESTIYONO,1EB06
1EB06,Jum'at,Pengantar Bisnis,7/8,G314,OKTARINA NUR WIDYANTI,1EB06
1EB06,Jum'at,Ilmu Budaya Dasar,9/10,G314,NONIK,1EB06
1EB07,Senin,Pendidikan Kewarganegaraan,1/2,G229,SUKESTININGSIH,1EB07
1EB07,Senin,Pengantar Bisnis,3/4,G217,SEPTI MARIANI TIS'A RAMADHANI,1EB07
1EB07,Senin,Pengantar Komputer & TI 1C,7/8,G144,RISDIANDRI ISKANDAR,1EB07
1EB07,Senin,Pengantar Akuntansi 1A **,9/10,G221,DYAH PALUPI,1EB07
1EB07,Rabu,Pengantar Akuntansi 1B **,1/2,G223,REYNALDI,1EB07
1EB07,Rabu,Pengantar Komputer & TI 1B,3/4,G223,YULI MAHARETTA ARIANTI,1EB07
1EB07,Rabu,Pengantar Ekonomi 1,5/6,G223,MOHAMMAD ABDUL MUKHYI,1EB07
1EB07,Rabu,Pengantar Manajemen,8/9,G236,VELY RANDYANTINI,1EB07
1EB07,Jum'at,Bahasa Inggris,1/2,G238,ARSIWELA,1EB07
1EB07,Jum'at,Ilmu Budaya Dasar,3/4,G238,DIMAS RADHITIO ATMOHADI KUSUMO,1EB07
1EB07,Sabtu,Matematika Ekonomi 1 **,1/2/3,G314,ISHAQ MUCHSIN,1EB07
1EB07,Sabtu,Pengantar Komputer & TI 1A,5/6,G314,VIVI AFIFAH,1EB07
1EB08,Senin,Pengantar Komputer & TI 1B,1/2,G137,IRA WINDARTI,1EB08
1EB08,Senin,Pengantar Ekonomi 1,3/4,G137,DYAH ESTHI PERWITASARI,1EB08
1EB08,Senin,Pengantar Manajemen,6/7,G215,SEPTI MARIANI TIS'A RAMADHANI,1EB08
1EB08,Senin,Pendidikan Kewarganegaraan,8/9,G224,ANDI NUR ALAM,1EB08
1EB08,Kamis,Pengantar Bisnis,3/4,G122,RISA SEPTIANI,1EB08
1EB08,Kamis,Pengantar Komputer & TI 1C,6/7,G127,SUCI BR KEMBAREN,1EB08
1EB08,Jum'at,Ilmu Budaya Dasar,1/2,E447,ELY SAPTO UTOMO,1EB08
1EB08,Jum'at,Bahasa Inggris,3/4,E447,TIARMA IKA YULIANA,1EB08
1EB08,Jum'at,Pengantar Akuntansi 1A **,7/8,E328,AYU ANDRIANIE,1EB08
1EB08,Jum'at,Pengantar Akuntansi 1B **,9/10,E218,DYAH PALUPI,1EB08
1EB08,Sabtu,Pengantar Komputer & TI 1A,3/4,E242,VIVI AFIFAH,1EB08
1EB08,Sabtu,Matematika Ekonomi 1 **,5/6/7,E242,ISHAQ MUCHSIN,1EB08
1EB09,Rabu,Pengantar Komputer & TI 1A,1/2,E334,DWI SETYASIH,1EB09
1EB09,Rabu,Pengantar Komputer & TI 1C,3/4,E334,SUCI BR KEMBAREN,1EB09
1EB09,Rabu,Pengantar Akuntansi 1A **,7/8,E326,UNTARA/REYNALDI,1EB09
1EB09,Rabu,Pengantar Akuntansi 1B **,9/10,E326,UNTARA/REYNALDI,1EB09
1EB09,Kamis,Bahasa Inggris,1/2,G435,DYANI MASITA DEWI,1EB09
1EB09,Kamis,Pengantar Manajemen,3/4,G435,VELY RANDYANTINI,1EB09
1EB09,Kamis,Pengantar Ekonomi 1,6/7,G314,PRADIVTA ALFATIHAH,1EB09
1EB09,Kamis,Matematika Ekonomi 1 **,8/9/10,G314,ENDAH BUDIYATI,1EB09
1EB09,Jum'at,Pendidikan Kewarganegaraan,1/2,G242,IBRAHIM SUMANTRI,1EB09
1EB09,Jum'at,Pengantar Bisnis,3/4,G242,RISA SEPTIANI,1EB09
1EB09,Jum'at,Ilmu Budaya Dasar,7/8,G242,ADELIA RIANA DEWI,1EB09
1EB09,Jum'at,Pengantar Komputer & TI 1B,9/10,G242,ERMA SOVA,1EB09
1EB10,Senin,Pengantar Akuntansi 1A **,1/2,A102,HANI HARLAN,1EB10
1EB10,Senin,Pengantar Ekonomi 1,3/4,A102,AWIKA BAHANI,1EB10
1EB10,Senin,Pengantar Akuntansi 1B **,6/7,A102,HANI HARLAN,1EB10
1EB10,Selasa,Ilmu Budaya Dasar,3/4,A102,DIANA SARI SOBARI,1EB10
1EB10,Selasa,Matematika Ekonomi 1 **,6/7/8,A102,LATIFAH,1EB10
1EB10,Selasa,Pendidikan Kewarganegaraan,9/10,A102,SUPRIATIN,1EB10
1EB10,Kamis,Pengantar Bisnis,3/4,B211,RINI WAHYUNINGROEM/POSO NUGROHO,1EB10
1EB10,Kamis,Pengantar Komputer & TI 1B,7/8,B211,IMAM PURWANTO,1EB10
1EB10,Sabtu,Pengantar Komputer & TI 1A,1/2,A202,YAN RISA ASPI SURURI,1EB10
1EB10,Sabtu,Pengantar Komputer & TI 1C,3/4,A202,IKE PUTRI KUSUMAWIJAYA,1EB10
1EB10,Sabtu,Pengantar Manajemen,7/8,A202,DWI INDAH UTAMI NINGSIH,1EB10
1EB10,Sabtu,Bahasa Inggris,9/10,A202,WIJANARKO AGUS WIBOWO,1EB10
1EB11,Senin,Pengantar Akuntansi 1A **,4/5,A101,HANI HARLAN,1EB11
1EB11,Senin,Pengantar Ekonomi 1,7/8,A101,AWIKA BAHANI,1EB11
1EB11,Senin,Pengantar Akuntansi 1B **,9/10,A101,SRI SETYORINI,1EB11
1EB11,Kamis,Matematika Ekonomi 1 **,1/2/3,B312,LATIFAH,1EB11
1EB11,Kamis,Pengantar Komputer & TI 1B,4/5,B312,IKE PUTRI KUSUMAWIJAYA,1EB11
1EB11,Kamis,Pengantar Bisnis,7/8,B312,RINI WAHYUNINGROEM/POSO NUGROHO,1EB11
1EB11,Jum'at,Pengantar Komputer & TI 1C,7/8,B312,SYIFA NURANI RAHMAYANTI,1EB11
1EB11,Jum'at,Pendidikan Kewarganegaraan,9/10,B312,SUPRIATIN,1EB11
1EB11,Sabtu,Bahasa Inggris,1/2,C014,WIJANARKO AGUS WIBOWO,1EB11
1EB11,Sabtu,Pengantar Manajemen,3/4,C014,DWI INDAH UTAMI NINGSIH,1EB11
1EB11,Sabtu,Ilmu Budaya Dasar,5/6,B222,AYU NINGTIYAS,1EB11
1EB11,Sabtu,Pengantar Komputer & TI 1A,8/9,B222,YAN RISA ASPI SURURI,1EB11
1EB12,Senin,Matematika Ekonomi 1 **,1/2/3,J147,DESTI RIMINARSIH,1EB12
1EB12,Rabu,Pengantar Manajemen,1/2,J1518,SUPRIYO HARTADI W,1EB12
1EB12,Rabu,Pengantar Bisnis,3/4,J1518,OKTARINA NUR WIDYANTI,1EB12
1EB12,Rabu,Bahasa Inggris,5/6,J1518,CINTANIA DHARMA B,1EB12
1EB12,Kamis,Pengantar Komputer & TI 1A,1/2,J1111,RINI ARIANTY,1EB12
1EB12,Kamis,Pengantar Komputer & TI 1C,3/4,J1111,NIA YUNINGSIH,1EB12
1EB12,Kamis,Pendidikan Kewarganegaraan,7/8,J1211,MUHAMMAD BURHAN AMIN,1EB12
1EB12,Kamis,Pengantar Akuntansi 1B **,9/10,J1211,RIEZKIANI MUSTIKAWENI,1EB12
1EB12,Jum'at,Pengantar Komputer & TI 1B,1/2,J129,SUTRESNA WATI,1EB12
1EB12,Jum'at,Pengantar Akuntansi 1A **,3/4,J129,RIYANTI,1EB12
1EB12,Jum'at,Ilmu Budaya Dasar,7/8,J129,MARTANI,1EB12
1EB12,Jum'at,Pengantar Ekonomi 1,9/10,J129,IZZANI ULFI,1EB12
1EB13,Senin,Pengantar Komputer & TI 1C,1/2,J1420,RR ARTIANA KRESTIANTI,1EB13
1EB13,Senin,Pengantar Komputer & TI 1B,3/4,J1420,MAKMUN,1EB13
1EB13,Senin,Pendidikan Kewarganegaraan,7/8,J1420,SUDJIRAN,1EB13
1EB13,Senin,Pengantar Bisnis,9/10,J1420,S TIWI ANGGRAENI,1EB13
1EB13,Kamis,Matematika Ekonomi 1 **,2/3/4,J1216B,MARIA Y ARYATI WAHYUNINGRUM,1EB13
1EB13,Kamis,Pengantar Akuntansi 1B **,7/8,J1216B,RIEZKIANI MUSTIKAWENI,1EB13
1EB13,Jum'at,Pengantar Ekonomi 1,3/4,J1114,IRFAN ARDIANSYAH,1EB13
1EB13,Jum'at,Pengantar Akuntansi 1A **,7/8,J143,RIYANTI,1EB13
1EB13,Sabtu,Ilmu Budaya Dasar,1/2,J143,ADITYA RIAN RAMADHAN,1EB13
1EB13,Sabtu,Bahasa Inggris,3/4,J143,RR SHINTA FELISIA,1EB13
1EB13,Sabtu,Pengantar Komputer & TI 1A,7/8,J147,JEJE,1EB13
1EB13,Sabtu,Pengantar Manajemen,9/10,J147,YOGI AFRIANTO,1EB13
1EB14,Senin,Pengantar Ekonomi 1,1/2,J1515A,ZUHAD ICHYAUDIN,1EB14
1EB14,Senin,Pengantar Komputer & TI 1B,3/4,J1515A,ANGGRAENI RIDWAN,1EB14
1EB14,Senin,Pengantar Bisnis,7/8,J1515A,S TIWI ANGGRAENI,1EB14
1EB14,Kamis,Pengantar Akuntansi 1B **,3/4,J1114,AGUS SUJARWANTO,1EB14
1EB14,Kamis,Matematika Ekonomi 1 **,6/7/8,J1114,DINA INDARTI,1EB14
1EB14,Jum'at,Pengantar Akuntansi 1A **,1/2,J1116,RIYANTI,1EB14
1EB14,Jum'at,Pengantar Komputer & TI 1C,3/4,J1116,FAHMI FATHULAH,1EB14
1EB14,Jum'at,Pendidikan Kewarganegaraan,7/8,J124,SAMUEL GUNAWAN,1EB14
1EB14,Jum'at,Ilmu Budaya Dasar,9/10,J124,MARTANI,1EB14
1EB14,Sabtu,Pengantar Komputer & TI 1A,3/4,J1115B,DENDY FAJAR ARIFIAWAN,1EB14
1EB14,Sabtu,Pengantar Manajemen,7/8,J119,YOGI AFRIANTO,1EB14
1EB14,Sabtu,Bahasa Inggris,9/10,J119,MARTALENA BANUREA,1EB14
1EB15,Senin,Pengantar Akuntansi 1A **,1/2,K163,AGUSTIN RUSIANA SARI,1EB15
1EB15,Senin,Pengantar Manajemen,3/4,K152,APRIANA ANGGREINI BANGUN,1EB15
1EB15,Senin,Matematika Ekonomi 1 **,5/6/7,K282,MARIA T A DEWI,1EB15
1EB15,Selasa,Pengantar Akuntansi 1B **,1/2,K154,DYAH PALUPI,1EB15
1EB15,Selasa,Bahasa Inggris,5/6,K283,GANJAR RESTO PAMBUDI,1EB15
1EB15,Kamis,Pengantar Ekonomi 1,1/2,K252,ELVIA FARDIANA,1EB15
1EB15,Kamis,Pengantar Komputer & TI 1C,3/4,K281,BAGUS SETIADI G,1EB15
1EB15,Kamis,Pengantar Bisnis,5/6,K273,FENY FIDYAH,1EB15
1EB15,Jum'at,Ilmu Budaya Dasar,1/2,K253,VERONICA FARRY,1EB15
1EB15,Sabtu,Pendidikan Kewarganegaraan,1/2,K175,DWI PUJI ASTUTI,1EB15
1EB15,Sabtu,Pengantar Komputer & TI 1A,3/4,K287,PUJI SULARSIH,1EB15
1EB15,Sabtu,Pengantar Komputer & TI 1B,6/7,K133,AGUSTINE HANA MASITOH,1EB15
1EB16,Senin,Pengantar Manajemen,1/2,K152,APRIANA ANGGREINI BANGUN,1EB16
1EB16,Senin,Pengantar Akuntansi 1A **,3/4,K163,AGUSTIN RUSIANA SARI,1EB16
1EB16,Selasa,Pengantar Bisnis,1/2,K273,SEPTI MARIANI TIS'A RAMADHANI,1EB16
1EB16,Selasa,Pengantar Akuntansi 1B **,3/4,K154,DYAH PALUPI,1EB16
1EB16,Rabu,Bahasa Inggris 1,3/4,K243,ARIE SUGIYARTATI,1EB16
1EB16,Kamis,Pengantar Ekonomi 1,3/4,K252,ELVIA FARDIANA,1EB16
1EB16,Kamis,Pengantar Komputer & TI 1C,5/6,K281,BAGUS SETIADI G,1EB16
1EB16,Jum'at,Pendidikan Kewarganegaraan,1/2,K243,RETNO EKAWATY,1EB16
1EB16,Jum'at,Pengantar Komputer & TI 1A,3/4,K161,DIANA TRI SUSETIANINGTIAS,1EB16
1EB16,Jum'at,Ilmu Budaya Dasar,7/8,K175,MELLA SRI KENCANAWATI,1EB16
1EB16,Sabtu,Pengantar Komputer & TI 1B,1/2,K274,MOH. YUNUS,1EB16
1EB16,Sabtu,Matematika Ekonomi 1 **,5/6/7,K151,ANDI ASNUR PRANATA MUHIBAH HADMAR,1EB16
1EB17,Senin,Pengantar Ekonomi 1,1/2,K154,NUR AZIFAH,1EB17
1EB17,Senin,Pengantar Akuntansi 1A **,3/4,K272,SUDARSONO,1EB17
1EB17,Senin,Pengantar Akuntansi 1B **,5/6,K272,SUDARSONO,1EB17
1EB17,Selasa,Pengantar Manajemen,1/2,K297,KARTIKA SUKMAWATI,1EB17
1EB17,Selasa,Pengantar Bisnis,3/4,K273,SEPTI MARIANI TIS'A RAMADHANI,1EB17
1EB17,Selasa,Bahasa Inggris,5/6,K283,GANJAR RESTO PAMBUDI,1EB17
1EB17,Rabu,Pengantar Komputer & TI 1C,3/4,K295,MURTIWIYATI,1EB17
1EB17,Jum'at,Pengantar Komputer & TI 1A,1/2,K161,DIANA TRI SUSETIANINGTIAS,1EB17
1EB17,Jum'at,Pendidikan Kewarganegaraan,3/4,K253,VERONICA FARRY,1EB17
1EB17,Jum'at,Ilmu Budaya Dasar,7/8,K175,MELLA SRI KENCANAWATI,1EB17
1EB17,Sabtu,Matematika Ekonomi 1 **,1/2/3,K151,ANDI ASNUR PRANATA MUHIBAH HADMAR,1EB17
1EB17,Sabtu,Pengantar Komputer & TI 1B,5/6,K287,PUJI SULARSIH,1EB17
1EB18,Senin,Pengantar Akuntansi 1A **,1/2,L222,NOVA ANGGRAINIE,1EB18
1EB18,Senin,Pengantar Akuntansi 1B **,3/4,L224,NOVA ANGGRAINIE,1EB18
1EB18,Senin,Pengantar Komputer & TI 1C,5/6,L245,DINY WAHYUNI,1EB18
1EB18,Selasa,Ilmu Budaya Dasar,6/7,L236,IQBAL AL KHAZIM,1EB18
1EB18,Rabu,Pengantar Manajemen,2/3,L222,ASTRIED PERMANASARI,1EB18
1EB18,Rabu,Pengantar Bisnis,4/5,L223,LISNA KUSTAMTINAH,1EB18
1EB18,Rabu,Pengantar Komputer & TI 1B,6/7,L244,OCTARINA BUDI LESTARI,1EB18
1EB18,Kamis,Bahasa Inggris,2/3,L222,ANITA1,1EB18
1EB18,Jum'at,Pendidikan Kewarganegaraan,2/3,L236,PIPIT FITRIYAH,1EB18
1EB18,Jum'at,Matematika Ekonomi 1 **,7/8/9,L242,LILIK SETIAWAN HERY PURNAMA,1EB18
1EB18,Sabtu,Pengantar Komputer & TI 1A,2/3,L236,EKA FITRI RAHAYU,1EB18
1EB18,Sabtu,Pengantar Ekonomi 1,4/5,L244,ANINDITA PURWANINGRUM / SRI MURTIASIH,1EB18
2EB01,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB01
2EB01,Selasa,Manajemen Keuangan 1,1/2/3,E328,HARUM NUROCHMA,2EB01
2EB01,Selasa,Teori Ekonomi,5/6,E426,WIDYATMINI,2EB01
2EB01,Rabu,Akuntansi Biaya */**,1/2/3,E316,DIONYSIA KOWANDA,2EB01
2EB01,Rabu,Statistika 1 */**,5/6/7,E241,ARIS BUDI SETYAWAN,2EB01
2EB01,Rabu,Pendidikan Agama Islam,9/10,E512,ABBAS MUHAMMAD BASALAMAH,2EB01
2EB01,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EB01
2EB01,Jum'at,Bank dan Lembaga Keuangan 1,3/4,D612,ENDIKA PERDANA,2EB01
2EB01,Jum'at,Akuntansi Keu. Menengah 1A */**,7/8,D622,CAECILIA WIDI PRATIWI,2EB01
2EB01,Jum'at,Akuntansi Keu. Menengah 1B */**,9/10,D622,CAECILIA WIDI PRATIWI,2EB01
2EB02,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB02
2EB02,Selasa,Pendidikan Agama Islam,1/2,E335,FATCHULLAH ZARKASI,2EB02
2EB02,Selasa,Manajemen Keuangan 1,4/5/6,E213,HARUM NUROCHMA,2EB02
2EB02,Selasa,Akuntansi Keu. Menengah 1A */**,7/8,E213,DWI ASIH HARYANTI,2EB02
2EB02,Rabu,Bank dan Lembaga Keuangan 1,3/4,E511,YUNI ANDONO ACHMAD,2EB02
2EB02,Rabu,Statistika 1 */**,5/6/7,E511,TETY ELIDA SIREGAR,2EB02
2EB02,Rabu,Akuntansi Keu. Menengah 1B */**,9/10,E246,RULLY MOVIZAR,2EB02
2EB02,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EB02
2EB02,Jum'at,Akuntansi Biaya */**,2/3/4,E328,DIANA SARI,2EB02
2EB02,Jum'at,Teori Ekonomi,7/8,E524,IBNU CAHYO RAMADHAN,2EB02
2EB03,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB03
2EB03,Selasa,Teori Ekonomi,1/2,E316,WIDYATMINI,2EB03
2EB03,Selasa,Akuntansi Keu. Menengah 1B */**,4/5,E526,AYU ANDRIANIE,2EB03
2EB03,Selasa,Manajemen Keuangan 1,7/8/9,E215,HARUM NUROCHMA,2EB03
2EB03,Rabu,Akuntansi Keu. Menengah 1A */**,1/2,E315,DWI ASIH HARYANTI,2EB03
2EB03,Rabu,Akuntansi Biaya */**,4/5/6,E316,DIONYSIA KOWANDA,2EB03
2EB03,Rabu,Statistika 1 */**,8/9/10,E322,TETY ELIDA SIREGAR,2EB03
2EB03,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EB03
2EB03,Kamis,Pendidikan Agama Islam,5/6,E328,MULYADI,2EB03
2EB03,Kamis,Bank dan Lembaga Keuangan 1,7/8,E328,STEVIANUS,2EB03
2EB04,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB04
2EB04,Selasa,Akuntansi Keu. Menengah 1B */**,1/2,E218,NIDA NUSAIBATUL ADAWIYAH,2EB04
2EB04,Selasa,Akuntansi Keu. Menengah 1A */**,3/4,E323,DWI ASIH HARYANTI,2EB04
2EB04,Selasa,Akuntansi Biaya */**,7/8/9,E212,DIONYSIA KOWANDA,2EB04
2EB04,Rabu,Pendidikan Agama Islam,1/2,G432,ABDUL ROHMAN,2EB04
2EB04,Rabu,Statistika 1 */**,5/6/7,G233,PARANITA ASNUR,2EB04
2EB04,Rabu,Teori Ekonomi,9/10,G126,NURUL HIDAYAH,2EB04
2EB04,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EB04
2EB04,Kamis,Manajemen Keuangan 1,4/5/6,G215,ASTRIED PERMANASARI,2EB04
2EB04,Kamis,Bank dan Lembaga Keuangan 1,7/8,G112,NONIK,2EB04
2EB05,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB05
2EB05,Selasa,Teori Ekonomi,1/2,E447,SRI MURTIASIH,2EB05
2EB05,Selasa,Pendidikan Agama Islam,3/4,E447,FATCHULLAH ZARKASI,2EB05
2EB05,Selasa,Akuntansi Keu. Menengah 1B */**,6/7,E324,SYNTHA NOVIYANA,2EB05
2EB05,Selasa,Akuntansi Biaya */**,8/9/10,E324,DIANA SARI,2EB05
2EB05,Kamis,Bank dan Lembaga Keuangan 1,1/2,D665,NONIK,2EB05
2EB05,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EB05
2EB05,Kamis,Manajemen Keuangan 1,5/6/7,D644,SUGIHARTI BINASTUTI,2EB05
2EB05,Jum'at,Akuntansi Keu. Menengah 1A */**,3/4,E211,CAECILIA WIDI PRATIWI,2EB05
2EB05,Jum'at,Statistika 1 */**,7/8/9,E514,EVA ZULFA NAILUFAR,2EB05
2EB06,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB06
2EB06,Selasa,Statistika 1 */**,4/5/6,E245,RATIH KURNIASIH,2EB06
2EB06,Selasa,Akuntansi Keu. Menengah 1B */**,7/8,E218,NIDA NUSAIBATUL ADAWIYAH,2EB06
2EB06,Selasa,Akuntansi Keu. Menengah 1A */**,9/10,E423,DWI ASIH HARYANTI,2EB06
2EB06,Kamis,Bank dan Lembaga Keuangan 1,4/5,G115,NONIK,2EB06
2EB06,Kamis,Teori Ekonomi,6/7,G115,SRIYANTO,2EB06
2EB06,Kamis,Pendidikan Agama Islam,8/9,G123,ABBAS MUHAMMAD BASALAMAH,2EB06
2EB06,Jum'at,Manajemen Keuangan 1,2/3/4,G227,SRI NAWANGSARI,2EB06
2EB06,Jum'at,Akuntansi Biaya */**,7/8/9,G445,DIANA SARI,2EB06
2EB06,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EB06
2EB07,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB07
2EB07,Selasa,Bank dan Lembaga Keuangan 1,1/2,E226,RINA NOFIYANTI,2EB07
2EB07,Selasa,Akuntansi Keu. Menengah 1B */**,3/4,E215,NIDA NUSAIBATUL ADAWIYAH,2EB07
2EB07,Selasa,Akuntansi Keu. Menengah 1A */**,5/6,E226,DWI ASIH HARYANTI,2EB07
2EB07,Selasa,Pendidikan Agama Islam,8/9,E123,MU'MINATUS FITRIATI FIRDAUS,2EB07
2EB07,Rabu,Manajemen Keuangan 1,5/6/7,E227,SUSILOWATI DYAH K,2EB07
2EB07,Rabu,Akuntansi Biaya */**,8/9/10,E227,DIONYSIA KOWANDA,2EB07
2EB07,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EB07
2EB07,Jum'at,Teori Ekonomi,3/4,E233,IBNU CAHYO RAMADHAN,2EB07
2EB07,Jum'at,Statistika 1 */**,7/8/9,E233,PARANITA ASNUR,2EB07
2EB08,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB08
2EB08,Selasa,Statistika 1 */**,1/2/3,E212,RISNAWATI,2EB08
2EB08,Selasa,Akuntansi Biaya */**,4/5/6,E212,DIONYSIA KOWANDA,2EB08
2EB08,Selasa,Akuntansi Keu. Menengah 1B */**,8/9,E313,SYNTHA NOVIYANA,2EB08
2EB08,Rabu,Teori Ekonomi,1/2,E328,WIDIYARSIH,2EB08
2EB08,Rabu,Manajemen Keuangan 1,3/4/5,E328,SRI NAWANGSARI,2EB08
2EB08,Rabu,Pendidikan Agama Islam,7/8,E314,ABBAS MUHAMMAD BASALAMAH,2EB08
2EB08,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EB08
2EB08,Jum'at,Akuntansi Keu. Menengah 1A */**,1/2,E215,CAECILIA WIDI PRATIWI,2EB08
2EB08,Jum'at,Bank dan Lembaga Keuangan 1,3/4,E215,NONIK,2EB08
2EB09,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB09
2EB09,Selasa,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2EB09
2EB09,Rabu,Teori Ekonomi,3/4,C007,PERLI ISWANTO,2EB09
2EB09,Rabu,Akuntansi Biaya */**,6/7/8,C007,GHINA NURJIHAN,2EB09
2EB09,Rabu,Pendidikan Agama Islam,9/10,C007,RETMIARTI,2EB09
2EB09,Kamis,Akuntansi Keu. Menengah 1A */**,7/8,B313,RULLY MOVIZAR,2EB09
2EB09,Kamis,Akuntansi Keu. Menengah 1B */**,9/10,B313,RULLY MOVIZAR,2EB09
2EB09,Jum'at,Manajemen Keuangan 1,7/8/9,A102,EFA WAHYUNI,2EB09
2EB09,Sabtu,Statistika 1 */**,1/2/3,A702,MUHAMMAD RIDHA ALFARABI ISTIQLAL,2EB09
2EB09,Sabtu,Bank dan Lembaga Keuangan 1,4/5,A702,DIAN FEBRIYANTO PUTRA,2EB09
2EB10,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB10
2EB10,Selasa,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EB10
2EB10,Rabu,Akuntansi Biaya */**,3/4/5,B313,GHINA NURJIHAN,2EB10
2EB10,Rabu,Pendidikan Agama Islam,7/8,B312,RETMIARTI,2EB10
2EB10,Rabu,Teori Ekonomi,9/10,B312,PERLI ISWANTO,2EB10
2EB10,Kamis,Akuntansi Keu. Menengah 1A */**,3/4,B313,RULLY MOVIZAR,2EB10
2EB10,Kamis,Akuntansi Keu. Menengah 1B */**,5/6,B313,RULLY MOVIZAR,2EB10
2EB10,Jum'at,Manajemen Keuangan 1,2/3/4,A102,EFA WAHYUNI,2EB10
2EB10,Sabtu,Bank dan Lembaga Keuangan 1,1/2,A801,DIAN FEBRIYANTO PUTRA,2EB10
2EB10,Sabtu,Statistika 1 */**,4/5/6,A801,MUHAMMAD RIDHA ALFARABI ISTIQLAL,2EB10
2EB11,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB11
2EB11,Selasa,Akuntansi Keu. Menengah 1A */**,1/2,J137,EARLY ARMEIN,2EB11
2EB11,Selasa,Bank dan Lembaga Keuangan 1,3/4,J137,AULIA NUGRAHA,2EB11
2EB11,Selasa,Teori Ekonomi,6/7,J137,JOKO UTOMO,2EB11
2EB11,Selasa,Akuntansi Biaya */**,8/9/10,J137,RINI DWIASTUTININGSIH,2EB11
2EB11,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EB11
2EB11,Kamis,Statistika 1 */**,5/6/7,J322,RISNAWATI,2EB11
2EB11,Jum'at,Manajemen Keuangan 1,2/3/4,J1315B,MARTANI,2EB11
2EB11,Jum'at,Pendidikan Agama Islam,7/8,J1316B,MUHAMMAD ALI,2EB11
2EB11,Jum'at,Akuntansi Keu. Menengah 1B */**,9/10,J1316B,DYAH MIETA SETYAWATI,2EB11
2EB12,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB12
2EB12,Selasa,Bank dan Lembaga Keuangan 1,1/2,J1312,AULIA NUGRAHA,2EB12
2EB12,Selasa,Akuntansi Keu. Menengah 1A */**,3/4,J1312,EARLY ARMEIN,2EB12
2EB12,Selasa,Akuntansi Keu. Menengah 1B */**,5/6,J1312,EARLY ARMEIN,2EB12
2EB12,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EB12
2EB12,Kamis,Manajemen Keuangan 1,5/6/7,J324,LIES HANDRIJANINGSIH,2EB12
2EB12,Kamis,Statistika 1 */**,8/9/10,J324,RISNAWATI,2EB12
2EB12,Sabtu,Pendidikan Agama Islam,3/4,J1519,SUPRIATIN,2EB12
2EB12,Sabtu,Teori Ekonomi,6/7,J1519,TULUS PUJO NUGROHO,2EB12
2EB12,Sabtu,Akuntansi Biaya */**,8/9/10,J1519,ANUGERAH ADHI PRASETYO,2EB12
2EB13,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB13
2EB13,Selasa,Akuntansi Biaya */**,1/2/3,J1210,RINI DWIASTUTININGSIH,2EB13
2EB13,Selasa,Statistika 1 */**,6/7/8,J1210,EDI MINAJI PRIBADI,2EB13
2EB13,Selasa,Pendidikan Agama Islam,9/10,J1210,AMIRULLAH,2EB13
2EB13,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2EB13
2EB13,Jum'at,Bank dan Lembaga Keuangan 1,1/2,J119,FERA RISKE ANGGITA,2EB13
2EB13,Jum'at,Akuntansi Keu. Menengah 1A */**,3/4,J119,DYAH MIETA SETYAWATI,2EB13
2EB13,Jum'at,Akuntansi Keu. Menengah 1B */**,7/8,J119,DYAH MIETA SETYAWATI,2EB13
2EB13,Sabtu,Teori Ekonomi,3/4,J1523,TULUS PUJO NUGROHO,2EB13
2EB13,Sabtu,Manajemen Keuangan 1,6/7/8,J1523,MARTANI,2EB13
2EB14,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB14
2EB14,Selasa,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EB14
2EB14,Selasa,Pendidikan Agama Islam,5/6,K293,MAULANA SYARIF HIDAYATULLAH,2EB14
2EB14,Rabu,Manajemen Keuangan 1,1/2/3,K264,NOVERSYAH/SUGIHARTI BINASTUTI,2EB14
2EB14,Kamis,Akuntansi Biaya */**,1/2/3,K161,DIONYSIA KOWANDA,2EB14
2EB14,Kamis,Statistika 1 */**,4/5/6,K244,TETY ELIDA SIREGAR,2EB14
2EB14,Jum'at,Akuntansi Keu. Menengah 1A */**,1/2,K165,SUPININGTYAS PURWANINGRUM,2EB14
2EB14,Jum'at,Akuntansi Keu. Menengah 1B */**,3/4,K165,SUPININGTYAS PURWANINGRUM,2EB14
2EB14,Sabtu,Bank dan Lembaga Keuangan 1,1/2,K267,CHRISTERA KUSWAHYU INDIRA,2EB14
2EB14,Sabtu,Teori Ekonomi,4/5,K291,SEPTI HERAWATI,2EB14
2EB15,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB15
2EB15,Selasa,Pendidikan Agama Islam,5/6,K293,MAULANA SYARIF HIDAYATULLAH,2EB15
2EB15,Rabu,Manajemen Keuangan 1,4/5/6,K264,NOVERSYAH/SUGIHARTI BINASTUTI,2EB15
2EB15,Kamis,Statistika 1 */**,1/2/3,K244,TETY ELIDA SIREGAR,2EB15
2EB15,Kamis,Akuntansi Biaya */**,4/5/6,K161,DIONYSIA KOWANDA,2EB15
2EB15,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EB15
2EB15,Jum'at,Akuntansi Keu. Menengah 1A */**,1/2,K273,RENI ANGGRAINI,2EB15
2EB15,Jum'at,Akuntansi Keu. Menengah 1B */**,3/4,K273,RENI ANGGRAINI,2EB15
2EB15,Sabtu,Teori Ekonomi,1/2,K291,SEPTI HERAWATI,2EB15
2EB15,Sabtu,Bank dan Lembaga Keuangan 1,3/4,K267,CHRISTERA KUSWAHYU INDIRA,2EB15
2EB16,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB16
2EB16,Selasa,Pendidikan Agama Islam,1/2,K243,NOVIANTO,2EB16
2EB16,Selasa,Bank dan Lembaga Keuangan 1,3/4,K261,ENDIKA PERDANA,2EB16
2EB16,Rabu,Akuntansi Keu. Menengah 1A */**,1/2,K241,EARLY ARMEIN,2EB16
2EB16,Rabu,Akuntansi Keu. Menengah 1B */**,3/4,K241,EARLY ARMEIN,2EB16
2EB16,Rabu,Teori Ekonomi,5/6,K252,LISTA KUSPRIATNI,2EB16
2EB16,Kamis,Manajemen Keuangan 1,1/2/3,K262,SUSILOWATI DYAH K,2EB16
2EB16,Kamis,Statistika 1 */**,4/5/6,K256,PENI SAWITRI,2EB16
2EB16,Jum'at,Akuntansi Biaya */**,1/2/3,K175,MELLA SRI KENCANAWATI,2EB16
2EB16,Sabtu,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2EB16
2EB17,Senin,Social Networking & Creative,,UGTV,TEAM TEACHING,2EB17
2EB17,Selasa,Statistika 1 */**,1/2/3,L241,EVAN PURNAMA RAMDAN,2EB17
2EB17,Selasa,Bank dan Lembaga Keuangan 1,5/6/7,L226,RETNO SUWIYANTI,2EB17
2EB17,Selasa,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EB17
2EB17,Rabu,Pendidikan Agama Islam,2/3,L234,MULYADI,2EB17
2EB17,Rabu,Manajemen Keuangan 1,4/5/6,L222,ASTRIED PERMANASARI,2EB17
2EB17,Kamis,Akuntansi Keu. Menengah 1A */**,2/3,L246,CAECILIA WIDI PRATIWI,2EB17
2EB17,Kamis,Akuntansi Keu. Menengah 1B */**,4/5,L246,CAECILIA WIDI PRATIWI,2EB17
2EB17,Kamis,Akuntansi Biaya */**,7/8/9,L226,DIANA SARI,2EB17
2EB17,Jum'at,Teori Ekonomi,1/2,L242,HERRY SUSANTO,2EB17
2EB18,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2EB18
3EB01A,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,E243,DIONYSIA KOWANDA,3EB01
3EB01B,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,E243,FANI YULIA ROSYADA,3EB01
3EB01C,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,E243,MUJIYANI,3EB01
3EB01D,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,E243,RINI TESNIWATI,3EB01
3EB01,Selasa,Riset Operasional,3/4,E243,HENDRI RAHMAYANI ASRI,3EB01
3EB01,Selasa,Akuntansi Keuangan Lanjut 1A */**,6/7,E515,RINA NOFIYANTI,3EB01
3EB01,Selasa,Akuntansi Keuangan Lanjut 1B */**,8/9,E515,RINI TESNIWATI,3EB01
3EB01,Kamis,Perpajakan */**,2/3/4,E325,BENY SUSANTI,3EB01
3EB01,Kamis,Riset Akuntansi **,5/6,E325,BUDI HERMANA,3EB01
3EB01,Kamis,Sistem Informasi Akuntansi */**,8/9/10,E312,B SUNDARI,3EB01
3EB01,Sabtu,Pemeriksaan Akuntansi 1A *,1/2,E221,PRAYUDHA PRIA SETYA,3EB01
3EB01,Sabtu,Bahasa Inggris Bisnis,3/4,E221,IRSYA INDIWARA,3EB01
3EB01,Sabtu,Pemeriksaan Akuntansi 1B *,6/7,E221,PRAYUDHA PRIA SETYA,3EB01
3EB02,Selasa,Riset Akuntansi **,5/6,E524,SIGIT SUKMONO,3EB02
3EB02,Selasa,Akuntansi Keuangan Lanjut 1A */**,7/8,E524,ANI HIDAYATI,3EB02
3EB02B,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,E524,ANI HIDAYATI,3EB02
3EB02A,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,E524,AYU KARTIKA,3EB02
3EB02C,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,E524,NIDA NUSAIBATUL ADAWIYAH,3EB02
3EB02D,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,E524,WINDY ATMAWARDANI RACHMAN,3EB02
3EB02,Rabu,Perpajakan */**,2/3/4,E222,BENY SUSANTI,3EB02
3EB02,Rabu,Akuntansi Keuangan Lanjut 1B */**,5/6,E222,RINI TESNIWATI,3EB02
3EB02,Rabu,Sistem Informasi Akuntansi */**,8/9/10,E228,EMMY INDRAYANI,3EB02
3EB02,Sabtu,Bahasa Inggris Bisnis,1/2,E226,ERNA PRANATA PUTRI,3EB02
3EB02,Sabtu,Pemeriksaan Akuntansi 1B *,3/4,E226,SAMUEL DAVID LEE,3EB02
3EB02,Sabtu,Pemeriksaan Akuntansi 1A *,5/6,E226,SAMUEL DAVID LEE,3EB02
3EB02,Sabtu,Riset Operasional,9/10,E228,FITRI MULYANI,3EB02
3EB03,Senin,Riset Akuntansi **,1/2,E222,MISDIYONO,3EB03
3EB03,Senin,Perpajakan */**,4/5/6,E321,SRI SUPADMINI,3EB03
3EB03,Senin,Bahasa Inggris Bisnis,7/8,E321,ALIYA FADHILLA,3EB03
3EB03,Senin,Riset Operasional,9/10,E321,RATIH JUWITA,3EB03
3EB03D,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,E227,DADI KUSWANDI,3EB03
3EB03C,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,E227,DYAH PALUPI,3EB03
3EB03A,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,E227,IRMAWATI WIJAYA,3EB03
3EB03B,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,E227,RETNO SUWIYANTI,3EB03
3EB03,Rabu,Akuntansi Keuangan Lanjut 1B */**,3/4,E227,RETNO SUWIYANTI,3EB03
3EB03,Rabu,Pemeriksaan Akuntansi 1A *,7/8,E427,BUDIASIH,3EB03
3EB03,Rabu,Pemeriksaan Akuntansi 1B *,9/10,E427,BUDIASIH,3EB03
3EB03,Kamis,Akuntansi Keuangan Lanjut 1A */**,1/2,E214,RINI TESNIWATI,3EB03
3EB03,Kamis,Sistem Informasi Akuntansi */**,5/6/7,E312,B SUNDARI,3EB03
3EB04,Selasa,Akuntansi Keuangan Lanjut 1B */**,1/2,E427,ANI HIDAYATI,3EB04
3EB04,Selasa,Akuntansi Keuangan Lanjut 1A */**,3/4,E427,RINA NOFIYANTI,3EB04
3EB04,Selasa,Perpajakan */**,6/7/8,E137,KODERI,3EB04
3EB04A,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,E137,APRIANA ANGGREINI BANGUN,3EB04
3EB04C,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,E137,DANIEL DAMARIS NOVARIANTO SURYAJAYA,3EB04
3EB04D,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,E137,DINI TRI WARDANI,3EB04
3EB04B,Selasa,Tatap Muka Penulisan Ilmiah,9/10 T,E137,PANDAM RUKMI WULANDARI,3EB04
3EB04,Rabu,Pemeriksaan Akuntansi 1B *,4/5,E233,BUDIASIH,3EB04
3EB04,Rabu,Sistem Informasi Akuntansi */**,7/8/9,E317,B SUNDARI,3EB04
3EB04,Kamis,Bahasa Inggris Bisnis,1/2,E225,DYAH AMBAR WURYANDARI,3EB04
3EB04,Kamis,Pemeriksaan Akuntansi 1A *,3/4,E225,IMAM SUBAWEH,3EB04
3EB04,Kamis,Riset Akuntansi **,5/6,E225,MISDIYONO,3EB04
3EB04,Kamis,Riset Operasional,8/9,E348,AGUS SRI ISWIYANTI,3EB04
3EB05,Selasa,Perpajakan */**,2/3/4,E337,KODERI,3EB05
3EB05,Selasa,Sistem Informasi Akuntansi */**,5/6/7,E511,DYAH MIETA SETYAWATI,3EB05
3EB05,Selasa,Akuntansi Keuangan Lanjut 1A */**,9/10,E213,RINA NOFIYANTI,3EB05
3EB05,Rabu,Pemeriksaan Akuntansi 1B *,1/2,E426,BUDIASIH,3EB05
3EB05,Rabu,Akuntansi Keuangan Lanjut 1B */**,3/4,E426,RINI TESNIWATI,3EB05
3EB05,Rabu,Riset Operasional,7/8,E413,AGUS SRI ISWIYANTI,3EB05
3EB05,Kamis,Pemeriksaan Akuntansi 1A *,1/2,E227,IMAM SUBAWEH,3EB05
3EB05,Kamis,Riset Akuntansi **,3/4,E227,MISDIYONO,3EB05
3EB05,Kamis,Bahasa Inggris Bisnis,6/7,E236,SEPTIAN DWI PUTRI,3EB05
3EB05C,Kamis,Tatap Muka Penulisan Ilmiah,8/9 T,E236,DINI ANDRIYANI,3EB05
3EB05A,Kamis,Tatap Muka Penulisan Ilmiah,8/9 T,E236,MELLA SRI KENCANAWATI,3EB05
3EB05B,Kamis,Tatap Muka Penulisan Ilmiah,8/9 T,E236,NIAYAH ERWIN,3EB05
3EB05D,Kamis,Tatap Muka Penulisan Ilmiah,8/9 T,E236,RISA SEPTIANI,3EB05
3EB06,Senin,Pemeriksaan Akuntansi 1B *,1/2,E224,BUDIASIH,3EB06
3EB06,Senin,Riset Akuntansi **,3/4,E224,MISDIYONO,3EB06
3EB06C,Senin,Tatap Muka Penulisan Ilmiah,7/8 T,E348,AYU ANDRIANIE,3EB06
3EB06D,Senin,Tatap Muka Penulisan Ilmiah,7/8 T,E348,DINI YARTIWULANDARI,3EB06
3EB06A,Senin,Tatap Muka Penulisan Ilmiah,7/8 T,E348,LASMINIASIH,3EB06
3EB06B,Senin,Tatap Muka Penulisan Ilmiah,7/8 T,E348,LINCE AFRI YENNY,3EB06
3EB06,Selasa,Sistem Informasi Akuntansi */**,1/2/3,E317,ANNE DAHLIAWATI,3EB06
3EB06,Rabu,Bahasa Inggris Bisnis,5/6,E323,YOHANA SIANTURI,3EB06
3EB06,Rabu,Akuntansi Keuangan Lanjut 1A */**,7/8,E323,RINI TESNIWATI,3EB06
3EB06,Rabu,Akuntansi Keuangan Lanjut 1B */**,9/10,E323,RETNO SUWIYANTI,3EB06
3EB06,Kamis,Riset Operasional,1/2,E121,AGUS SRI ISWIYANTI,3EB06
3EB06,Kamis,Pemeriksaan Akuntansi 1A *,3/4,E121,SRI SUPADMINI,3EB06
3EB06,Kamis,Perpajakan */**,6/7/8,E227,BENY SUSANTI,3EB06
3EB07,Senin,Pemeriksaan Akuntansi 1A *,1/2,E215,SRI SUPADMINI,3EB07
3EB07,Senin,Akuntansi Keuangan Lanjut 1B */**,4/5,E422,RETNO SUWIYANTI,3EB07
3EB07,Senin,Riset Operasional,7/8,E343,RATIH JUWITA,3EB07
3EB07,Rabu,Sistem Informasi Akuntansi */**,2/3/4,E312,B SUNDARI,3EB07
3EB07,Rabu,Perpajakan */**,6/7/8,E515,BENY SUSANTI,3EB07
3EB07C,Rabu,Tatap Muka Penulisan Ilmiah,9/10 T,E515,BUDI WAHYUDI,3EB07
3EB07A,Rabu,Tatap Muka Penulisan Ilmiah,9/10 T,E515,DINI DWI ERMAWATI,3EB07
3EB07B,Rabu,Tatap Muka Penulisan Ilmiah,9/10 T,E515,ERNA KUSTYARINI,3EB07
3EB07D,Rabu,Tatap Muka Penulisan Ilmiah,9/10 T,E515,WIDADA,3EB07
3EB07,Kamis,Riset Akuntansi **,1/2,E211,MISDIYONO,3EB07
3EB07,Kamis,Akuntansi Keuangan Lanjut 1A */**,3/4,E211,RINI TESNIWATI,3EB07
3EB07,Kamis,Pemeriksaan Akuntansi 1B *,6/7,E449,IMAM SUBAWEH,3EB07
3EB07,Kamis,Bahasa Inggris Bisnis,9/10,E447,DYAH AMBAR WURYANDARI,3EB07
3EB08,Senin,Pemeriksaan Akuntansi 1B *,3/4,E215,BUDIASIH,3EB08
3EB08,Senin,Riset Akuntansi **,5/6,E215,MISDIYONO,3EB08
3EB08,Senin,Perpajakan */**,8/9/10,E327,SRI SUPADMINI,3EB08
3EB08B,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,E449,ANNE DAHLIAWATI,3EB08
3EB08D,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,E449,FX AJI SUKARNO,3EB08
3EB08A,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,E449,SURYANDARI SEDYO UTAMI,3EB08
3EB08C,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,E449,TRI DAMAYANTI,3EB08
3EB08,Rabu,Sistem Informasi Akuntansi */**,4/5/6,E333,EMMY INDRAYANI,3EB08
3EB08,Rabu,Akuntansi Keuangan Lanjut 1B */**,7/8,E333,RETNO SUWIYANTI,3EB08
3EB08,Kamis,Pemeriksaan Akuntansi 1A *,1/2,E122,SRI SUPADMINI,3EB08
3EB08,Kamis,Riset Operasional,3/4,E122,WIDYATMINI,3EB08
3EB08,Kamis,Akuntansi Keuangan Lanjut 1A */**,5/6,E122,ANI HIDAYATI,3EB08
3EB08,Kamis,Bahasa Inggris Bisnis,9/10,E446,SEPTIAN DWI PUTRI,3EB08
3EB09,Senin,Riset Akuntansi **,1/2,C007,SRI SETYORINI,3EB09
3EB09,Senin,Perpajakan */**,4/5/6,C007,RADI SAHARA,3EB09
3EB09,Senin,Sistem Informasi Akuntansi */**,8/9/10,C007,SUSANTI USMAN,3EB09
3EB09D,Rabu,Tatap Muka Penulisan Ilmiah,1/2 T,C008,WIGIYANTI,3EB09
3EB09,Rabu,Riset Operasional,5/6,C014,WIGIYANTI,3EB09
3EB09,Rabu,Pemeriksaan Akuntansi 1B *,7/8,C014,NOOR MUHAMMAD ADIPATI,3EB09
3EB09,Rabu,Pemeriksaan Akuntansi 1A *,9/10,C014,NOOR MUHAMMAD ADIPATI,3EB09
3EB09,Sabtu,Akuntansi Keuangan Lanjut 1B */**,1/2,B223,AYU NINGTIYAS,3EB09
3EB09,Sabtu,Akuntansi Keuangan Lanjut 1A */**,3/4,B223,AYU NINGTIYAS,3EB09
3EB09,Sabtu,Bahasa Inggris Bisnis,5/6,B223,RATNA WULANDARI,3EB09
3EB09A,Sabtu,Tatap Muka Penulisan Ilmiah,7/8 T,B313,ASHAR BASYIR,3EB09
3EB09B,Sabtu,Tatap Muka Penulisan Ilmiah,7/8 T,B313,EVA KHADIJAH,3EB09
3EB09C,Sabtu,Tatap Muka Penulisan Ilmiah,7/8 T,B313,RULLY MOVIZAR,3EB09
3EB10,Senin,Bahasa Inggris Bisnis,1/2,J1317,DEWI WULAN SARI,3EB10
3EB10,Senin,Riset Operasional,3/4,J1317,SRI WAHYU HANDAYANI,3EB10
3EB10,Senin,Akuntansi Keuangan Lanjut 1A */**,6/7,J1317,FERA RISKE ANGGITA,3EB10
3EB10B,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,J1317,EARLY ARMEIN,3EB10
3EB10C,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,J1317,HARYONO,3EB10
3EB10D,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,J1317,JESSICA BARUS,3EB10
3EB10A,Senin,Tatap Muka Penulisan Ilmiah,8/9 T,J1317,RINI DWIASTUTININGSIH,3EB10
3EB10,Selasa,Pemeriksaan Akuntansi 1B *,1/2,J1316A,TOMMY KUNCARA,3EB10
3EB10,Selasa,Pemeriksaan Akuntansi 1A *,3/4,J1316A,TOMMY KUNCARA,3EB10
3EB10,Selasa,Akuntansi Keuangan Lanjut 1B */**,6/7,J1316A,FERA RISKE ANGGITA,3EB10
3EB10,Selasa,Riset Akuntansi **,8/9,J1316A,MOHAMMAD ABDUL MUKHYI,3EB10
3EB10,Rabu,Sistem Informasi Akuntansi */**,3/4/5,J316,CICILIA ERLY ISTIA,3EB10
3EB10,Rabu,Perpajakan */**,8/9/10,J335,SILVIA AVIRA,3EB10
3EB11,Senin,Perpajakan */**,1/2/3,J1219,SILVIA AVIRA,3EB11
3EB11,Senin,Riset Akuntansi **,5/6,J1115A,TEDY ARDIANSYAH,3EB11
3EB11,Senin,Riset Operasional,7/8,J1115A,SRI WAHYU HANDAYANI,3EB11
3EB11,Rabu,Sistem Informasi Akuntansi */**,7/8/9,J316,CICILIA ERLY ISTIA,3EB11
3EB11,Jum'at,Bahasa Inggris Bisnis,3/4,J1219,CINTANIA DHARMA B,3EB11
3EB11,Jum'at,Akuntansi Keuangan Lanjut 1B */**,7/8,J1219,FERA RISKE ANGGITA,3EB11
3EB11,Sabtu,Akuntansi Keuangan Lanjut 1A */**,1/2,J1510,NADYA CHAERUNNISA,3EB11
3EB11,Sabtu,Pemeriksaan Akuntansi 1B *,3/4,J1510,HIRAS FERDY MAROLOP SINAGA,3EB11
3EB11,Sabtu,Pemeriksaan Akuntansi 1A *,6/7,J1510,HIRAS FERDY MAROLOP SINAGA,3EB11
3EB11C,Sabtu,Tatap Muka Penulisan Ilmiah,8/9 T,J1510,ABEDNEGO PRIYATAMA,3EB11
3EB11A,Sabtu,Tatap Muka Penulisan Ilmiah,8/9 T,J1510,RATIH JUWITA,3EB11
3EB11B,Sabtu,Tatap Muka Penulisan Ilmiah,8/9 T,J1510,SRI WAHYU HANDAYANI,3EB11
3EB11D,Sabtu,Tatap Muka Penulisan Ilmiah,8/9 T,J1510,TOMMY KUNCARA,3EB11
3EB12,Senin,Riset Operasional,1/2,J1319,SRI WAHYU HANDAYANI,3EB12
3EB12,Senin,Perpajakan */**,4/5/6,J1319,SILVIA AVIRA,3EB12
3EB12,Senin,Riset Akuntansi **,7/8,J1319,TEDY ARDIANSYAH,3EB12
3EB12C,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,J1425,ANUGERAH ADHI PRASETYO,3EB12
3EB12A,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,J1425,DIAH ARYATI,3EB12
3EB12B,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,J1425,NICKY HANDAYANI,3EB12
3EB12D,Selasa,Tatap Muka Penulisan Ilmiah,1/2 T,J1425,NURUL KHOTIMAH,3EB12
3EB12,Selasa,Akuntansi Keuangan Lanjut 1B */**,3/4,J1425,FERA RISKE ANGGITA,3EB12
3EB12,Selasa,Pemeriksaan Akuntansi 1A *,6/7,J1425,TOMMY KUNCARA,3EB12
3EB12,Selasa,Sistem Informasi Akuntansi */**,8/9/10,J1425,CICILIA ERLY ISTIA,3EB12
3EB12,Sabtu,Pemeriksaan Akuntansi 1B *,1/2,J1425,HIRAS FERDY MAROLOP SINAGA,3EB12
3EB12,Sabtu,Bahasa Inggris Bisnis,3/4,J1425,GUNAWAN TAMBUNSARIBU,3EB12
3EB12,Sabtu,Akuntansi Keuangan Lanjut 1A */**,5/6,J1425,NADYA CHAERUNNISA,3EB12
3EB13,Senin,Akuntansi Keuangan Lanjut 1A */**,1/2,K245,DYAH MIETA SETYAWATI,3EB13
3EB13,Senin,Riset Operasional,6/7,K254,HENDRI RAHMAYANI ASRI,3EB13
3EB13,Selasa,Bahasa Inggris Bisnis,4/5,K253,CHINTIA HANDAYANI,3EB13
3EB13,Selasa,Perpajakan */**,6/7/8,K244,RADI SAHARA,3EB13
3EB13A,Selasa,Tatap Muka Penulisan Ilmiah,9/10,K247,RISA SEPTIANI,3EB13
3EB13,Rabu,Sistem Informasi Akuntansi */**,1/2/3,K267,SUSANTI USMAN,3EB13
3EB13,Rabu,Riset Akuntansi **,4/5,K153,IMAM SUBAWEH,3EB13
3EB13C,Kamis,Tatap Muka Penulisan Ilmiah,6/7,K133,SIGIT SUKMONO,3EB13
3EB13B,Jum'at,Tatap Muka Penulisan Ilmiah,9/10,K131,AFRILA EKI PRADITA,3EB13
3EB13,Sabtu,Pemeriksaan Akuntansi 1A *,1/2,K247,DINI ANDRIYANI,3EB13
3EB13,Sabtu,Pemeriksaan Akuntansi 1B *,3/4,K247,DINI ANDRIYANI,3EB13
3EB13,Sabtu,Akuntansi Keuangan Lanjut 1B */**,5/6,K294,SUROTO,3EB13
3EB14,Senin,Riset Operasional,4/5,K254,HENDRI RAHMAYANI ASRI,3EB14
3EB14,Senin,Akuntansi Keuangan Lanjut 1B */**,6/7,K245,DYAH MIETA SETYAWATI,3EB14
3EB14,Selasa,Perpajakan */**,1/2/3,K244,RADI SAHARA,3EB14
3EB14,Selasa,Bahasa Inggris Bisnis,4/5,K253,CHINTIA HANDAYANI,3EB14
3EB14C,Selasa,Tatap Muka Penulisan Ilmiah,9/10,K153,ZAIDATUN EKASTUTI,3EB14
3EB14,Rabu,Sistem Informasi Akuntansi */**,1/2/3,K283,RENI DIAH KUSUMAWATI,3EB14
3EB14,Rabu,Pemeriksaan Akuntansi 1A *,4/5,K256,NIAYAH ERWIN,3EB14
3EB14,Rabu,Pemeriksaan Akuntansi 1B *,6/7,K256,NIAYAH ERWIN,3EB14
3EB14B,Rabu,Tatap Muka Penulisan Ilmiah,8/9,K156,DINI YARTIWULANDARI,3EB14
3EB14A,Rabu,Tatap Muka Penulisan Ilmiah,8/9,K256,NIAYAH ERWIN,3EB14
3EB14,Kamis,Riset Akuntansi **,2/3,K273,FENY FIDYAH,3EB14
3EB14,Sabtu,Akuntansi Keuangan Lanjut 1A */**,2/3,K294,SUROTO,3EB14
3EB15,Senin,Pemeriksaan Akuntansi 1A *,2/3,L224,B SUNDARI,3EB15
3EB15,Senin,Pemeriksaan Akuntansi 1B *,4/5,L224,B SUNDARI,3EB15
3EB15,Selasa,Riset Operasional,5/6,L223,EVAN PURNAMA RAMDAN,3EB15
3EB15,Rabu,Sistem Informasi Akuntansi */**,6/7/8,L236,SIGIT SUKMONO,3EB15
3EB15,Kamis,Akuntansi Keuangan Lanjut 1A */**,2/3,L226,EMMY INDRAYANI,3EB15
3EB15,Kamis,Akuntansi Keuangan Lanjut 1B */**,4/5,L226,EMMY INDRAYANI,3EB15
3EB15,Jum'at,Perpajakan */**,2/3/4,L245,SILVIA AVIRA,3EB15
3EB15,Jum'at,Riset Akuntansi **,7/8,L245,ERNY PRATIWI,3EB15
3EB15,Sabtu,Bahasa Inggris Bisnis,1/2,L226,AULIA HARIS FIRSTIYANTI,3EB15
3EB15A,Sabtu,Tatap Muka Penulisan Ilmiah,4/5,L224,MUJIYANI,3EB15
4EB01,Selasa,Akuntansi Perbankan **,1/2/3,E237,ERNY PRATIWI,4EB01
4EB01,Selasa,Manajemen Sumber Daya Manusia,4/5,E237,EKANING SETYARINI,4EB01
4EB01,Selasa,Akuntansi Internasional,8/9/10,E435,NIAYAH ERWIN,4EB01
4EB01,Rabu,Akuntansi Manajemen Lanjut **,1/2/3,E139,SUYANTO,4EB01
4EB01,Rabu,Sistem Pengendalian Manajemen *,5/6/7,E139,DANIEL DAMARIS NOVRIANTO SURYAJAYA,4EB01
4EB01,Rabu,Akuntansi Pemerintahan *,8/9/10,E139,HARYONO,4EB01
4EB01,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB01
4EB01,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EB01
4EB01,Sabtu,Pemeriksaan Akuntansi Lanjut **,3/4/5,E523,PRAYUDHA PRIA SETYA,4EB01
4EB02,Senin,Akuntansi Perbankan **,1/2/3,F8463,SUNDARI,4EB02
4EB02,Selasa,Akuntansi Pemerintahan *,1/2/3,G148,HARYONO,4EB02
4EB02,Selasa,Manajemen Sumber Daya Manusia,5/6,G425,SARIYATI,4EB02
4EB02,Selasa,Sistem Pengendalian Manajemen *,7/8/9,G425,AFRILA EKI PRADITA,4EB02
4EB02,Rabu,Akuntansi Manajemen Lanjut **,1/2/3,D652,DINI ANDRIYANI,4EB02
4EB02,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB02
4EB02,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EB02
4EB02,Sabtu,Akuntansi Internasional,5/6/7,E414,AMANDA DWILUTHFIAH JOANNA,4EB02
4EB02,Sabtu,Pemeriksaan Akuntansi Lanjut **,8/9/10,E414,PRAYUDHA PRIA SETYA,4EB02
4EB03,Senin,Akuntansi Internasional,1/2/3,F8443,BUDI WAHYUDI,4EB03
4EB03,Senin,Sistem Pengendalian Manajemen *,4/5/6,F8443,SUDARYONO,4EB03
4EB03,Selasa,Akuntansi Perbankan **,1/2/3,E324,SUNDARI,4EB03
4EB03,Selasa,Akuntansi Pemerintahan *,5/6/7,E321,ANNE DAHLIAWATI,4EB03
4EB03,Selasa,Manajemen Sumber Daya Manusia,8/9,E321,EKANING SETYARINI,4EB03
4EB03,Rabu,Pemeriksaan Akuntansi Lanjut **,1/2/3,F8472,MASODAH,4EB03
4EB03,Rabu,Akuntansi Manajemen Lanjut **,4/5/6,F8472,DESI PUJIATI,4EB03
4EB03,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB03
4EB03,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EB03
4EB04,Senin,Akuntansi Internasional,4/5/6,F8466,BUDI WAHYUDI,4EB04
4EB04,Selasa,Pemeriksaan Akuntansi Lanjut **,1/2/3,F8466,RR DHARMA TINTRI EDIRARAS,4EB04
4EB04,Selasa,Akuntansi Manajemen Lanjut **,4/5/6,F8466,DINI ANDRIYANI,4EB04
4EB04,Selasa,Akuntansi Perbankan **,8/9/10,F8454,SUNDARI,4EB04
4EB04,Rabu,Sistem Pengendalian Manajemen *,1/2/3,G222,DANIEL DAMARIS NOVRIANTO SURYAJAYA,4EB04
4EB04,Rabu,Akuntansi Pemerintahan *,4/5/6,G222,BUDI PRIJANTO,4EB04
4EB04,Rabu,Manajemen Sumber Daya Manusia,9/10,G218,SARIYATI,4EB04
4EB04,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB04
4EB04,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EB04
4EB05,Senin,Akuntansi Internasional,4/5/6,F8465,NIAYAH ERWIN,4EB05
4EB05,Selasa,Sistem Pengendalian Manajemen *,1/2/3,F8452,NOOR MUHAMMAD ADIPATI,4EB05
4EB05,Selasa,Akuntansi Perbankan **,4/5/6,F8452,SUNDARI,4EB05
4EB05,Selasa,Akuntansi Pemerintahan *,8/9/10,F8444,HARYONO,4EB05
4EB05,Rabu,Manajemen Sumber Daya Manusia,1/2,F8451,SARIYATI,4EB05
4EB05,Rabu,Pemeriksaan Akuntansi Lanjut **,4/5/6,F8451,MASODAH,4EB05
4EB05,Rabu,Akuntansi Manajemen Lanjut **,8/9/10,F8482,DESI PUJIATI,4EB05
4EB05,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB05
4EB05,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EB05
4EB06,Senin,Sistem Pengendalian Manajemen *,1/2/3,F8456,DANIEL DAMARIS NOVRIANTO SURYAJAYA,4EB06
4EB06,Senin,Manajemen Sumber Daya Manusia,6/7,F8445,EKANING SETYARINI,4EB06
4EB06,Senin,Akuntansi Internasional,8/9/10,F8445,NIAYAH ERWIN,4EB06
4EB06,Selasa,Akuntansi Manajemen Lanjut **,1/2/3,F8441,DINI ANDRIYANI,4EB06
4EB06,Selasa,Pemeriksaan Akuntansi Lanjut **,4/5/6,F8441,RR DHARMA TINTRI EDIRARAS,4EB06
4EB06,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB06
4EB06,Jum'at,Akuntansi Perbankan **,2/3/4,G455,SURYANDARI SEDYO UTAMI,4EB06
4EB06,Jum'at,Akuntansi Pemerintahan *,7/8/9,G113,ANNE DAHLIAWATI,4EB06
4EB06,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EB06
4EB07,Selasa,Akuntansi Internasional,1/2/3,E246,LINCE AFRI YENNY,4EB07
4EB07,Selasa,Akuntansi Perbankan **,4/5/6,E246,ERNY PRATIWI,4EB07
4EB07,Selasa,Pemeriksaan Akuntansi Lanjut **,8/9/10,E332,IMAM SUBAWEH,4EB07
4EB07,Rabu,Manajemen Sumber Daya Manusia,1/2,E138,EKANING SETYARINI,4EB07
4EB07,Rabu,Akuntansi Manajemen Lanjut **,4/5/6,E138,SUYANTO,4EB07
4EB07,Rabu,Sistem Pengendalian Manajemen *,8/9/10,E138,SUDARYONO,4EB07
4EB07,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB07
4EB07,Jum'at,Akuntansi Pemerintahan *,2/3/4,D623,ANNE DAHLIAWATI,4EB07
4EB07,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EB07
4EB08,Selasa,Sistem Pengendalian Manajemen *,1/2/3,G1410,AFRILA EKI PRADITA,4EB08
4EB08,Selasa,Pemeriksaan Akuntansi Lanjut **,4/5/6,G1410,IMAM SUBAWEH,4EB08
4EB08,Selasa,Manajemen Sumber Daya Manusia,8/9,G222,SARIYATI,4EB08
4EB08,Rabu,Akuntansi Manajemen Lanjut **,4/5/6,D652,DINI ANDRIYANI,4EB08
4EB08,Rabu,Akuntansi Pemerintahan *,8/9/10,D611,BUDI PRIJANTO,4EB08
4EB08,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB08
4EB08,Jum'at,Akuntansi Internasional,2/3/4,G347,SIGIT SUKMONO,4EB08
4EB08,Jum'at,Akuntansi Perbankan **,7/8/9,G434,SURYANDARI SEDYO UTAMI,4EB08
4EB08,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EB08
4EB09,Senin,Akuntansi Pemerintahan *,1/2/3,C014,RADI SAHARA,4EB09
4EB09,Senin,Pemeriksaan Akuntansi Lanjut **,5/6/7,C014,SUSANTI USMAN,4EB09
4EB09,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EB09
4EB09,Rabu,Akuntansi Manajemen Lanjut **,1/2/3,B211,AFRILA EKI PRADITA,4EB09
4EB09,Rabu,Akuntansi Internasional,4/5/6,B211,LINCE AFRI YENNY,4EB09
4EB09,Rabu,Manajemen Sumber Daya Manusia,7/8,B211,PERLI ISWANTO,4EB09
4EB09,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB09
4EB09,Jum'at,Akuntansi Perbankan **,2/3/4,A602,ABEDNEGO PRIYATAMA,4EB09
4EB09,Jum'at,Sistem Pengendalian Manajemen *,7/8/9,A602,NOOR MUHAMMAD ADIPATI,4EB09
4EB10,Senin,Pemeriksaan Akuntansi Lanjut **,2/3/4,C015,SUSANTI USMAN,4EB10
4EB10,Senin,Akuntansi Pemerintahan *,7/8/9,C015,RADI SAHARA,4EB10
4EB10,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EB10
4EB10,Rabu,Manajemen Sumber Daya Manusia,1/2,C007,PERLI ISWANTO,4EB10
4EB10,Rabu,Akuntansi Manajemen Lanjut **,4/5/6,C004,AFRILA EKI PRADITA,4EB10
4EB10,Rabu,Akuntansi Internasional,7/8/9,C004,LINCE AFRI YENNY,4EB10
4EB10,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB10
4EB10,Jum'at,Sistem Pengendalian Manajemen *,2/3/4,A802,NOOR MUHAMMAD ADIPATI,4EB10
4EB10,Jum'at,Akuntansi Perbankan **,7/8/9,A802,ABEDNEGO PRIYATAMA,4EB10
4EB11,Senin,Sistem Pengendalian Manajemen *,1/2/3,J418,ABEDNEGO PRIYATAMA,4EB11
4EB11,Senin,Pemeriksaan Akuntansi Lanjut **,5/6/7,J418,TOMMY KUNCARA,4EB11
4EB11,Selasa,Akuntansi Pemerintahan *,1/2/3,J1516B,SRI WAHYU HANDAYANI,4EB11
4EB11,Selasa,Akuntansi Internasional,4/5/6,J1516B,JESSICA BARUS,4EB11
4EB11,Selasa,Manajemen Sumber Daya Manusia,8/9,J1516B,AWIKA BAHANI,4EB11
4EB11,Rabu,Akuntansi Manajemen Lanjut **,1/2/3,J5234,RATIH JUWITA,4EB11
4EB11,Rabu,Akuntansi Perbankan **,4/5/6,J5234,LAINA ZAHRA,4EB11
4EB11,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB11
4EB11,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EB11
4EB12,Senin,Akuntansi Manajemen Lanjut **,1/2/3,J417,BUDI SUBEKHI,4EB12
4EB12,Senin,Akuntansi Perbankan **,4/5/6,J417,ABEDNEGO PRIYATAMA,4EB12
4EB12,Senin,Sistem Pengendalian Manajemen *,8/9/10,J417,NICKY HANDAYANI,4EB12
4EB12,Selasa,Akuntansi Internasional,1/2/3,J1516A,JESSICA BARUS,4EB12
4EB12,Selasa,Pemeriksaan Akuntansi Lanjut **,4/5/6,J1516A,CICILIA ERLY ISTIA,4EB12
4EB12,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB12
4EB12,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EB12
4EB12,Sabtu,Manajemen Sumber Daya Manusia,4/5,J1312,TANTYO SETYOWATI,4EB12
4EB12,Sabtu,Akuntansi Pemerintahan *,7/8/9,J1312,BANI ZAMZAMI/ABEDNEGO (LURING),4EB12
4EB13,Senin,Pemeriksaan Akuntansi Lanjut **,1/2/3,J413,TOMMY KUNCARA,4EB13
4EB13,Senin,Sistem Pengendalian Manajemen *,4/5/6,J413,NICKY HANDAYANI,4EB13
4EB13,Selasa,Manajemen Sumber Daya Manusia,2/3,J1518,AWIKA BAHANI,4EB13
4EB13,Selasa,Akuntansi Pemerintahan *,4/5/6,J1518,SRI WAHYU HANDAYANI,4EB13
4EB13,Selasa,Akuntansi Internasional,8/9/10,J1518,JESSICA BARUS,4EB13
4EB13,Rabu,Akuntansi Perbankan **,1/2/3,J5233,LAINA ZAHRA,4EB13
4EB13,Rabu,Akuntansi Manajemen Lanjut **,4/5/6,J5233,RATIH JUWITA,4EB13
4EB13,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB13
4EB13,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4EB13
4EB14,Senin,Sistem Pengendalian Manajemen *,1/2/3,J414,NICKY HANDAYANI,4EB14
4EB14,Senin,Akuntansi Perbankan **,4/5/6,J414,DIAH ARYATI PRIHARTINI,4EB14
4EB14,Selasa,Pemeriksaan Akuntansi Lanjut **,3/4/5,J1110,SUSANTI USMAN,4EB14
4EB14,Rabu,Akuntansi Manajemen Lanjut **,1/2/3,J318,RINI DWIASTUTININGSIH,4EB14
4EB14,Rabu,Akuntansi Internasional,4/5/6,J318,SILVIA AVIRA,4EB14
4EB14,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB14
4EB14,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4EB14
4EB14,Sabtu,Manajemen Sumber Daya Manusia,1/2,J1315B,TANTYO SETYOWATI,4EB14
4EB14,Sabtu,Akuntansi Pemerintahan *,4/5/6,J1315B,BANI ZAMZAMI/ABEDNEGO (LURING),4EB14
4EB15,Senin,Akuntansi Internasional,1/2/3,K153,EFA WAHYUNI,4EB15
4EB15,Senin,Akuntansi Manajemen Lanjut **,4/5/6,K256,SIGIT SUKMONO,4EB15
4EB15,Selasa,Akuntansi Pemerintahan *,1/2/3,K249,RIYANTI,4EB15
4EB15,Selasa,Akuntansi Perbankan **,5/6/7,K165,DESSY HUTAJULU,4EB15
4EB15,Rabu,Pemeriksaan Akuntansi Lanjut **,1/2/3,K153,IMAM SUBAWEH,4EB15
4EB15,Rabu,Manajemen Sumber Daya Manusia,5/6,K283,RENI DIAH KUSUMAWATI,4EB15
4EB15,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB15
4EB15,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4EB15
4EB15,Jum'at,Sistem Pengendalian Manajemen *,7/8/9,K271,SRI SETYA HANDAYANI,4EB15
4EB16,Senin,Akuntansi Internasional,4/5/6,K152,EFA WAHYUNI,4EB16
4EB16,Senin,Akuntansi Manajemen Lanjut **,7/8/9,K256,SIGIT SUKMONO,4EB16
4EB16,Selasa,Akuntansi Pemerintahan *,4/5/6,K249,RIYANTI,4EB16
4EB16,Rabu,Akuntansi Perbankan **,1/2/3,K288,SUNDARI,4EB16
4EB16,Rabu,Pemeriksaan Akuntansi Lanjut **,4/5/6,K267,SUSANTI USMAN,4EB16
4EB16,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB16
4EB16,Jum'at,Sistem Pengendalian Manajemen *,2/3/4,K271,SRI SETYA HANDAYANI,4EB16
4EB16,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EB16
4EB16,Sabtu,Manajemen Sumber Daya Manusia,3/4,K155,BUDIMAN,4EB16
4EB17,Selasa,Pemeriksaan Akuntansi Lanjut **,2/3/4,L235,RETNO SUWIYANTI,4EB17
4EB17,Selasa,Manajemen Sumber Daya Manusia,5/6,L222,HANTORO ARIEF GISIJANTO,4EB17
4EB17,Rabu,Akuntansi Manajemen Lanjut **,2/3/4,L236,SIGIT SUKMONO,4EB17
4EB17,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4EB17
4EB17,Jum'at,Akuntansi Perbankan **,2/3/4,L235,ERNY PRATIWI,4EB17
4EB17,Jum'at,Akuntansi Internasional,7/8/9,L235,SILVIA AVIRA,4EB17
4EB17,Sabtu,Akuntansi Pemerintahan *,1/2/3,L224,MUJIYANI,4EB17
4EB17,Sabtu,Sistem Pengendalian Manajemen *,4/5/6,L226,SUDARYONO,4EB17
4EB17,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EB17
4EB18,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4EB18
1TA01,Senin,Menggambar Teknik,1/2,E132,EGA JULIA FAJARSARI,1TA01
1TA01,Senin,Matematika 1,4/5/6,E134,BAYU KUMORO YAKTI,1TA01
1TA01,Selasa,Mekanika Statika A,1/2/3,G123,RELLY ANDAYANI,1TA01
1TA01,Selasa,Mekanika Statika B,4/5/6,G123,AEP SAEPULOH,1TA01
1TA01,Rabu,Bahasa Inggris,3/4,D651,SUDJANA,1TA01
1TA01,Rabu,Kimia,5/6,D651,ROMDHONI SUSILOATMADJA,1TA01
1TA01,Kamis,Fisika 1,4/5,D665,LINGGA HERMANTO,1TA01
1TA01,Kamis,Bahasa Pemrograman Komp.&Prak A**,7/8,D637,RATIH NURDIYANI SARI,1TA01
1TA01,Kamis,Bahasa Pemrograman Komp.&Prak B**,9/10,D637,EGA HEGARINI,1TA01
1TA02,Senin,Menggambar Teknik,5/6,E336,EGA JULIA FAJARSARI,1TA02
1TA02,Senin,Kimia,7/8,E336,ROMDHONI SUSILOATMADJA,1TA02
1TA02,Selasa,Mekanika Statika A,1/2/3,G124,AEP SAEPULOH,1TA02
1TA02,Selasa,Mekanika Statika B,4/5/6,G124,RELLY ANDAYANI,1TA02
1TA02,Rabu,Bahasa Inggris,5/6,D637,SUDJANA,1TA02
1TA02,Rabu,Matematika 1,8/9/10,D633,BAYU KUMORO YAKTI,1TA02
1TA02,Kamis,Fisika 1,2/3,D631,ANDI ASNUR PRANATA MUHIBAH HADMAR,1TA02
1TA02,Kamis,Bahasa Pemrograman Komp.&Prak A**,5/6,D662,RATIH NURDIYANI SARI,1TA02
1TA02,Kamis,Bahasa Pemrograman Komp.&Prak B**,7/8,D662,EGA HEGARINI,1TA02
1TA03,Rabu,Menggambar Teknik,1/2,D613,EGA JULIA FAJARSARI,1TA03
1TA03,Rabu,Kimia,3/4,D613,ROMDHONI SUSILOATMADJA,1TA03
1TA03,Rabu,Mekanika Statika B,7/8/9,D663,AEP SAEPULOH,1TA03
1TA03,Kamis,Mekanika Statika A,1/2/3,D641,RELLY ANDAYANI,1TA03
1TA03,Kamis,Bahasa Pemrograman Komp.&Prak B**,4/5,D641,EGA HEGARINI,1TA03
1TA03,Kamis,Fisika 1,6/7,D641,LINGGA HERMANTO,1TA03
1TA03,Kamis,Bahasa Pemrograman Komp.&Prak A**,9/10,D632,RATIH NURDIYANI SARI,1TA03
1TA03,Jum'at,Bahasa Inggris,3/4,E526,MARIA,1TA03
1TA03,Jum'at,Matematika 1,7/8/9,E526,MARIA T A DEWI,1TA03
1TA04,Senin,Bahasa Inggris,1/2,E526,DIAN NURUDIN,1TA04
1TA04,Senin,Menggambar Teknik,3/4,E526,EGA JULIA FAJARSARI,1TA04
1TA04,Senin,Kimia,5/6,E526,ROMDHONI SUSILOATMADJA,1TA04
1TA04,Senin,Fisika 1,8/9,E224,ANDI ASNUR PRANATA MUHIBAH HADMAR,1TA04
1TA04,Rabu,Mekanika Statika A,1/2/3,D663,AEP SAEPULOH,1TA04
1TA04,Rabu,Matematika 1,4/5/6,D663,BAYU KUMORO YAKTI,1TA04
1TA04,Kamis,Bahasa Pemrograman Komp.&Prak B**,1/2,D654,EGA HEGARINI,1TA04
1TA04,Kamis,Bahasa Pemrograman Komp.&Prak A**,3/4,D654,RATIH NURDIYANI SARI,1TA04
1TA04,Kamis,Mekanika Statika B,5/6/7,D654,RELLY ANDAYANI,1TA04
2TA01,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2TA01
2TA01,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2TA01
2TA01,Rabu,Matematika 3 *,4/5/6,F8473,IAS SRI WAHYUNI,2TA01
2TA01,Rabu,Analisis Stru.Statis Tertentu A*,7/8,F8473,FEBRY MANDASARI,2TA01
2TA01,Rabu,Analisis Stru.Statis Tertentu B*,9/10,F8473,SRI INDAH SETIYANINGSIH,2TA01
2TA01,Kamis,Mekanika Fluida *,3/4,F8455,HERI SUPRAPTO,2TA01
2TA01,Kamis,Statistika dan Probabilitas *,5/6/7,F8455,ANDI ASNUR PRANATA MUHIBAH HADMAR,2TA01
2TA01,Jum'at,Sifat-sifat Fisik Tanah,1/2,D631,SRI WULANDARI,2TA01
2TA01,Jum'at,Teknologi Bahan Konstruksi,3/4,D631,ASRI WULAN,2TA01
2TA01,Jum'at,Pendidikan Kewarganegaraan,7/8,D631,UMI KULSUM,2TA01
2TA02,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2TA02
2TA02,Selasa,Matematika 3 *,1/2/3,F8456,IAS SRI WAHYUNI,2TA02
2TA02,Selasa,Statistika dan Probabilitas *,5/6/7,F8471,RATU NURMALIKA,2TA02
2TA02,Selasa,Analisis Stru.Statis Tertentu B*,8/9,F8471,SRI INDAH SETIYANINGSIH,2TA02
2TA02,Rabu,Teknologi Bahan Konstruksi,3/4,F8455,ASRI WULAN,2TA02
2TA02,Rabu,Analisis Stru.Statis Tertentu A*,5/6,F8455,FEBRY MANDASARI,2TA02
2TA02,Rabu,Pendidikan Kewarganegaraan,9/10,F8455,METI NURHAYATI,2TA02
2TA02,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2TA02
2TA02,Jum'at,Mekanika Fluida *,1/2,D665,HERI SUPRAPTO,2TA02
2TA02,Jum'at,Sifat-sifat Fisik Tanah,3/4,D665,SRI WULANDARI,2TA02
2TA03,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2TA03
2TA03,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2TA03
2TA03,Rabu,Matematika 3 *,1/2/3,F8445,IAS SRI WAHYUNI,2TA03
2TA03,Rabu,Sifat-sifat Fisik Tanah,4/5,F8445,SRI WULANDARI,2TA03
2TA03,Rabu,Teknologi Bahan Konstruksi,6/7,F8445,ASRI WULAN,2TA03
2TA03,Kamis,Mekanika Fluida *,6/7,F8466,HERI SUPRAPTO,2TA03
2TA03,Kamis,Statistika dan Probabilitas *,8/9/10,F8466,ANDI ASNUR PRANATA MUHIBAH HADMAR,2TA03
2TA03,Sabtu,Analisis Stru.Statis Tertentu A*,1/2,E318,FEBRY MANDASARI,2TA03
2TA03,Sabtu,Analisis Stru.Statis Tertentu B*,5/6,E342,NURYANTO1,2TA03
2TA03,Sabtu,Pendidikan Kewarganegaraan,7/8,E342,RANDY,2TA03
2TA04,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2TA04
2TA04,Selasa,Statistika dan Probabilitas *,1/2/3,G143,RATU NURMALIKA,2TA04
2TA04,Selasa,Pendidikan Kewarganegaraan,4/5,G143,SUKESTININGSIH,2TA04
2TA04,Selasa,Teknologi Bahan Konstruksi,7/8,G133,ASRI WULAN,2TA04
2TA04,Kamis,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2TA04
2TA04,Jum'at,Mekanika Fluida *,3/4,D655,HERI SUPRAPTO,2TA04
2TA04,Jum'at,Matematika 3 *,7/8/9,D655,M. ABDUL RIVAI,2TA04
2TA04,Sabtu,Analisis Stru.Statis Tertentu B*,1/2,E427,NURYANTO1,2TA04
2TA04,Sabtu,Sifat-sifat Fisik Tanah,3/4,E427,FEBRY MANDASARI,2TA04
2TA04,Sabtu,Analisis Stru.Statis Tertentu A*,7/8,E225,FEBRY MANDASARI,2TA04
2TA05,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2TA05
3TA01,Senin,Perancangan Pondasi Dangkal A*,1/2,D641,JUNIARSO,3TA01
3TA01,Senin,Drainase Perkotaan A,3/4,D641,FANI YAYUK SUPOMO,3TA01
3TA01,Senin,Metode Pelaksanaan Konstruksi,7/8,D644,ANDI TENRISUKKI TENRIAJENG,3TA01
3TA01,Senin,Perancangan Struktur Baja 1A*,9/10,D644,TRI HANDAYANI,3TA01
3TA01,Rabu,Penulisan dan Presentasi,1/2,D651,ASRI WULAN,3TA01
3TA01,Rabu,Irigasi & Bangunan Air B,3/4,D634,DIYANTI,3TA01
3TA01,Rabu,Perancangan Struktur Baja 1B*,5/6,D634,GITA RAKHMAWATI/RELLY ANDAYANI,3TA01
3TA01,Rabu,Dinamika Struktur,8/9,D634,DODDY ARI SURYANTO,3TA01
3TA01,Kamis,Perancangan Pondasi Dangkal B*,1/2,E241,ELLYSA,3TA01
3TA01,Kamis,Peranc.StrukturBeton Bertulang1A*,4/5,E514,SULARDI,3TA01
3TA01,Kamis,Irigasi & Bangunan Air A,7/8,E216,HARYONO PUTRO,3TA01
3TA01,Kamis,Perancangan Geometrik Jalan A,9/10,E216,NAHDALINA,3TA01
3TA01,Sabtu,Peranc.StrukturBeton Bertulang1B*,1/2,G127,KARTINI HALIEF,3TA01
3TA01,Sabtu,Ilmu Ukur Tanah dan Praktikum **,3/4,G127,RATU NURMALIKA,3TA01
3TA01,Sabtu,Perancangan Geometrik Jalan B,6/7,G127,WIKE WEDYA LASTIN,3TA01
3TA01,Sabtu,Drainase Perkotaan B,8/9,G127,TATI NOVIATI,3TA01
3TA02,Senin,Drainase Perkotaan A,1/2,D624,FANI YAYUK SUPOMO,3TA02
3TA02,Senin,Metode Pelaksanaan Konstruksi,3/4,D624,ANDI TENRISUKKI TENRIAJENG,3TA02
3TA02,Senin,Irigasi & Bangunan Air A,7/8,D666,HARYONO PUTRO,3TA02
3TA02,Senin,Perancangan Pondasi Dangkal B*,9/10,D666,ELLYSA,3TA02
3TA02,Rabu,Penulisan dan Presentasi,1/2,D644,FEBRY MANDASARI,3TA02
3TA02,Rabu,Perancangan Pondasi Dangkal A*,5/6,D613,JUNIARSO,3TA02
3TA02,Rabu,Dinamika Struktur,7/8,D613,NURINA YASIN,3TA02
3TA02,Rabu,Peranc.StrukturBeton Bertulang1B*,9/10,D613,KARTINI HALIEF,3TA02
3TA02,Kamis,Perancangan Geometrik Jalan B,1/2,E129,WIKE WEDYA LASTIN,3TA02
3TA02,Kamis,Ilmu Ukur Tanah dan Praktikum **,3/4,E129,DYNA PRASETYA,3TA02
3TA02,Kamis,Drainase Perkotaan B,6/7,E129,TATI NOVIATI,3TA02
3TA02,Kamis,Perancangan Geometrik Jalan A,8/9,E129,JENNIE KUSUMANINGRUM,3TA02
3TA02,Sabtu,Perancangan Struktur Baja 1A*,1/2,E512,TRI HANDAYANI,3TA02
3TA02,Sabtu,Perancangan Struktur Baja 1B*,3/4,E512,NURYANTO1,3TA02
3TA02,Sabtu,Irigasi & Bangunan Air B,6/7,E512,DIYANTI,3TA02
3TA02,Sabtu,Peranc.StrukturBeton Bertulang1A*,8/9,E512,SULARDI,3TA02
3TA03,Senin,Perancangan Pondasi Dangkal B*,1/2,D644,ELLYSA,3TA03
3TA03,Senin,Irigasi & Bangunan Air A,4/5,D622,HARYONO PUTRO,3TA03
3TA03,Senin,Perancangan Struktur Baja 1A*,7/8,D614,TRI HANDAYANI,3TA03
3TA03,Senin,Peranc.StrukturBeton Bertulang1A*,9/10,D614,SULARDI,3TA03
3TA03,Selasa,Drainase Perkotaan A,1/2,F8446,FANI YAYUK SUPOMO,3TA03
3TA03,Selasa,Dinamika Struktur,4/5,F8467,SRI INDAH SETIYANINGSIH,3TA03
3TA03,Selasa,Irigasi & Bangunan Air B,6/7,F8467,DIYANTI,3TA03
3TA03,Selasa,Ilmu Ukur Tanah dan Praktikum **,9/10,F8465,RATU NURMALIKA,3TA03
3TA03,Rabu,Drainase Perkotaan B,1/2,D632,TATI NOVIATI,3TA03
3TA03,Rabu,Perancangan Pondasi Dangkal A*,3/4,D632,JUNIARSO,3TA03
3TA03,Rabu,Metode Pelaksanaan Konstruksi,7/8,D621,ANDI TENRISUKKI TENRIAJENG,3TA03
3TA03,Rabu,Perancangan Geometrik Jalan A,9/10,D621,NAHDALINA,3TA03
3TA03,Sabtu,Perancangan Geometrik Jalan B,1/2,E424,WIKE WEDYA LASTIN,3TA03
3TA03,Sabtu,Penulisan dan Presentasi,3/4,E424,ADHI INDRA HERMANU,3TA03
3TA03,Sabtu,Peranc.StrukturBeton Bertulang1B*,6/7,E424,KARTINI HALIEF,3TA03
3TA03,Sabtu,Perancangan Struktur Baja 1B*,9/10,E424,NURYANTO1,3TA03
3TA04,Senin,Perancangan Struktur Baja 1A*,1/2,D664,TRI HANDAYANI,3TA04
3TA04,Senin,Perancangan Pondasi Dangkal B*,5/6,D641,JUNIARSO,3TA04
3TA04,Senin,Peranc.StrukturBeton Bertulang1A*,7/8,D641,SULARDI,3TA04
3TA04,Senin,Irigasi & Bangunan Air A,9/10,D641,HARYONO PUTRO,3TA04
3TA04,Selasa,Metode Pelaksanaan Konstruksi,1/2,F8471,ANDI TENRISUKKI TENRIAJENG,3TA04
3TA04,Selasa,Drainase Perkotaan A,4/5,F8472,FANI YAYUK SUPOMO,3TA04
3TA04,Selasa,Perancangan Geometrik Jalan B,6/7,F8472,WIKE WEDYA LASTIN,3TA04
3TA04,Selasa,Penulisan dan Presentasi,8/9,F8472,DIYANTI,3TA04
3TA04,Rabu,Irigasi & Bangunan Air B,1/2,D637,DIYANTI,3TA04
3TA04,Rabu,Dinamika Struktur,3/4,D637,SRI INDAH SETIYANINGSIH,3TA04
3TA04,Rabu,Drainase Perkotaan B,7/8,D637,TATI NOVIATI,3TA04
3TA04,Kamis,Ilmu Ukur Tanah dan Praktikum **,1/2,E124,DYNA PRASETYA,3TA04
3TA04,Kamis,Perancangan Pondasi Dangkal A*,3/4,E124,ELLYSA,3TA04
3TA04,Kamis,Perancangan Geometrik Jalan A,5/6,E124,JENNIE KUSUMANINGRUM,3TA04
3TA04,Sabtu,Perancangan Struktur Baja 1B*,6/7,E448,AEP SAEPULOH,3TA04
3TA04,Sabtu,Peranc.StrukturBeton Bertulang1B*,8/9,E448,KARTINI HALIEF,3TA04
3TA05,Senin,Dinamika Struktur,1/2,D643,DODDY ARI SURYANTO,3TA05
3TA05,Senin,Perancangan Struktur Baja 1A*,3/4,D643,TRI HANDAYANI,3TA05
3TA05,Senin,Perancangan Pondasi Dangkal A*,5/6,D643,ELLYSA,3TA05
3TA05,Senin,Drainase Perkotaan A,8/9,D636,FANI YAYUK SUPOMO,3TA05
3TA05,Rabu,Peranc.StrukturBeton Bertulang1B*,1/2,D667,KARTINI HALIEF,3TA05
3TA05,Rabu,Drainase Perkotaan B,3/4,D667,TATI NOVIATI,3TA05
3TA05,Rabu,Perancangan Geometrik Jalan A,7/8,D667,NAHDALINA,3TA05
3TA05,Rabu,Metode Pelaksanaan Konstruksi,9/10,D667,ANDI TENRISUKKI TENRIAJENG,3TA05
3TA05,Kamis,Peranc.StrukturBeton Bertulang1A*,1/2,E128,SULARDI,3TA05
3TA05,Kamis,Perancangan Pondasi Dangkal B*,3/4,E128,JUNIARSO,3TA05
3TA05,Kamis,Ilmu Ukur Tanah dan Praktikum **,6/7,E241,DYNA PRASETYA,3TA05
3TA05,Kamis,Irigasi & Bangunan Air A,9/10,E346,HARYONO PUTRO,3TA05
3TA05,Sabtu,Penulisan dan Presentasi,1/2,E231,ADHI INDRA HERMANU,3TA05
3TA05,Sabtu,Perancangan Geometrik Jalan B,3/4,E231,WIKE WEDYA LASTIN,3TA05
3TA05,Sabtu,Perancangan Struktur Baja 1B*,7/8,E523,NURYANTO1,3TA05
3TA05,Sabtu,Irigasi & Bangunan Air B,9/10,E523,DIYANTI,3TA05
3TA06,Senin,Drainase Perkotaan A,1/2,D636,DIAH TRI BUDI LESTARI,3TA06
3TA06,Senin,Perancangan Pondasi Dangkal A*,3/4,D636,ELLYSA,3TA06
3TA06,Senin,Penulisan dan Presentasi,6/7,D661,FANI YAYUK SUPOMO,3TA06
3TA06,Senin,Metode Pelaksanaan Konstruksi,9/10,D647,ANDI TENRISUKKI TENRIAJENG,3TA06
3TA06,Rabu,Peranc.StrukturBeton Bertulang1B*,1/2,D664,GITA RAKHMAWATI/NURINA YASIN,3TA06
3TA06,Rabu,Irigasi & Bangunan Air B,3/4,D664,KARTINI HALIEF,3TA06
3TA06,Rabu,Perancangan Struktur Baja 1A*,6/7,D643,DODDY ARI SURYANTO,3TA06
3TA06,Rabu,Dinamika Struktur,9/10,D626,NURINA YASIN,3TA06
3TA06,Kamis,Perancangan Pondasi Dangkal B*,1/2,E344,JUNIARSO,3TA06
3TA06,Kamis,Irigasi & Bangunan Air A,4/5,E513,HARYONO PUTRO,3TA06
3TA06,Kamis,Perancangan Geometrik Jalan A,7/8,E217,NAHDALINA,3TA06
3TA06,Kamis,Drainase Perkotaan B,9/10,E217,TATI NOVIATI,3TA06
3TA06,Sabtu,Ilmu Ukur Tanah dan Praktikum **,1/2,G128,RATU NURMALIKA,3TA06
3TA06,Sabtu,Perancangan Struktur Baja 1B*,3/4,G128,KARTINI HALIEF,3TA06
3TA06,Sabtu,Peranc.StrukturBeton Bertulang1A*,6/7,G128,SULARDI,3TA06
3TA06,Sabtu,Perancangan Geometrik Jalan B,8/9,G128,WIKE WEDYA LASTIN,3TA06
4TA01,Senin,Perancangan Pelabuhan Laut,8/9/10,E243,BUDI SANTOSA1,4TA01
4TA01,Selasa,Praktikum Robotika Cerdas,1/2,,TIM DOSEN,4TA01
4TA01,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TA01
4TA01,Jum'at,Adm. Kontrak&Anggaran Borongan *,1/2,E512,DIDIEK PRAMONO,4TA01
4TA01,Jum'at,Analisis Dampak Lingkungan,3/4,E512,IDA AYU ARI ANGGRAENI,4TA01
4TA01,Jum'at,Pengembangan Sumber Daya Air,7/8,E345,HERI SUPRAPTO,4TA01
4TA01,Jum'at,Perancangan Struk.Beton Prategang,9/10,E345,ADE SUHENDAR SUTISNA,4TA01
4TA01,Sabtu,Rekayasa Gempa,3/4,G125,MUHAMMAD RIZAL ARSYAD,4TA01
4TA01,Sabtu,Anal.Metode Matriks&ElemenHingga*,6/7/8,G125,NURINA YASIN,4TA01
4TA02,Senin,Pengembangan Sumber Daya Air,6/7,E345,BUDI SANTOSA1,4TA02
4TA02,Senin,Anal.Metode Matriks&ElemenHingga*,8/9/10,E345,JENNIE KUSUMANINGRUM,4TA02
4TA02,Selasa,Praktikum Robotika Cerdas,1/2,,TIM DOSEN,4TA02
4TA02,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TA02
4TA02,Jum'at,Analisis Dampak Lingkungan,1/2,E214,IDA AYU ARI ANGGRAENI,4TA02
4TA02,Jum'at,Adm. Kontrak&Anggaran Borongan *,3/4,E214,DIDIEK PRAMONO,4TA02
4TA02,Jum'at,Perancangan Struk.Beton Prategang,7/8,E133,ADE SUHENDAR SUTISNA,4TA02
4TA02,Sabtu,Perancangan Pelabuhan Laut,3/4/5,G134,TRI HANDAYANI,4TA02
4TA02,Sabtu,Rekayasa Gempa,6/7,G134,MUHAMMAD RIZAL ARSYAD,4TA02
4TA03,Senin,Anal.Metode Matriks&ElemenHingga*,1/2/3,E321,NURINA YASIN,4TA03
4TA03,Senin,Rekayasa Gempa,5/6,E446,MUHAMMAD RIZAL ARSYAD,4TA03
4TA03,Selasa,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4TA03
4TA03,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TA03
4TA03,Jum'at,Adm. Kontrak&Anggaran Borongan *,1/2,E343,DODDY ARI SURYANTO,4TA03
4TA03,Jum'at,Pengembangan Sumber Daya Air,3/4,E343,BUDI SANTOSA1,4TA03
4TA03,Jum'at,Perancangan Pelabuhan Laut,7/8/9,E331,SRI WULANDARI,4TA03
4TA03,Sabtu,Perancangan Struk.Beton Prategang,5/6,G112,ADE SUHENDAR SUTISNA,4TA03
4TA03,Sabtu,Analisis Dampak Lingkungan,7/8,G112,IDA AYU ARI ANGGRAENI,4TA03
4TA04,Senin,Pengembangan Sumber Daya Air,1/2,E523,BUDI SANTOSA1,4TA04
4TA04,Senin,Rekayasa Gempa,3/4,E523,MUHAMMAD RIZAL ARSYAD,4TA04
4TA04,Senin,Anal.Metode Matriks&ElemenHingga*,5/6/7,E523,JENNIE KUSUMANINGRUM,4TA04
4TA04,Selasa,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4TA04
4TA04,Rabu,Perancangan Pelabuhan Laut,3/4/5,F8441,NAHDALINA,4TA04
4TA04,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TA04
4TA04,Jum'at,Perancangan Struk.Beton Prategang,3/4,E236,ADE SUHENDAR SUTISNA,4TA04
4TA04,Jum'at,Adm. Kontrak&Anggaran Borongan *,7/8,E312,DODDY ARI SURYANTO,4TA04
4TA04,Jum'at,Analisis Dampak Lingkungan,9/10,E312,IDA AYU ARI ANGGRAENI,4TA04
4TA05,Senin,Rekayasa Gempa,1/2,E443,MUHAMMAD RIZAL ARSYAD,4TA05
4TA05,Senin,Pengembangan Sumber Daya Air,3/4,E443,BUDI SANTOSA1,4TA05
4TA05,Senin,Anal.Metode Matriks&ElemenHingga*,6/7/8,E245,NURINA YASIN,4TA05
4TA05,Selasa,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4TA05
4TA05,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TA05
4TA05,Jum'at,Adm. Kontrak&Anggaran Borongan *,3/4,E243,DODDY ARI SURYANTO,4TA05
4TA05,Jum'at,Perancangan Pelabuhan Laut,7/8/9,E243,ANDI ASNUR PRANATA MUHIBAH HADMAR,4TA05
4TA05,Sabtu,Analisis Dampak Lingkungan,4/5,G116,IDA AYU ARI ANGGRAENI,4TA05
4TA05,Sabtu,Perancangan Struk.Beton Prategang,7/8,G114,ADE SUHENDAR SUTISNA,4TA05
4TA06,Selasa,Praktikum Robotika Cerdas,3/4,,TIM DOSEN,4TA06
4TA06,Rabu,Perancangan Pelabuhan Laut,6/7/8,F8441,SRI WULANDARI,4TA06
4TA06,Rabu,Adm. Kontrak&Anggaran Borongan *,9/10,F8441,ASRI WULAN,4TA06
4TA06,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TA06
4TA06,Jum'at,Analisis Dampak Lingkungan,7/8,E314,IDA AYU ARI ANGGRAENI,4TA06
4TA06,Jum'at,Pengembangan Sumber Daya Air,9/10,E314,HERI SUPRAPTO,4TA06
4TA06,Sabtu,Rekayasa Gempa,1/2,G112,MUHAMMAD RIZAL ARSYAD,4TA06
4TA06,Sabtu,Perancangan Struk.Beton Prategang,3/4,G112,ADE SUHENDAR SUTISNA,4TA06
4TA06,Sabtu,Anal.Metode Matriks&ElemenHingga*,6/7/8,G116,SRI INDAH SETIYANINGSIH,4TA06
1TB01,Senin,Gambar Teknik,2/3,G347,DEWI ASTUTI,1TB01
1TB01,Senin,Pendidikan Agama Islam,5/6,G238,AULIA NUGRAHA,1TB01
1TB01,Senin,Bahasa Indonesia,7/8,G238,NURMANINGSIH,1TB01
1TB01,Senin,Matematika 1,9/10,G238,DIAH TRI BUDI LESTARI,1TB01
1TB01,Rabu,Estetika Bentuk A,2/3/4 T,F5Lab2,ADE SYOUFA,1TB01
1TB01,Rabu,Estetika Bentuk B,2/3/4 T,F5Lab2,ONI INDAH CAHYANI,1TB01
1TB01,Rabu,Estetika Bentuk C,2/3/4 T,F5Lab2,RAUDINA QISTHI PRAMANTHA,1TB01
1TB01,Kamis,Gambar Arsitektur,3/4,G229,RAZIQ HASAN,1TB01
1TB01,Kamis,Pengantar Arsitektur,5/6,G229,AMIRA WATI,1TB01
1TB01,Jum'at,Komp. Arsitektur Dasar&Prak.C**,7/8/9 T,GLab 2,ITA ROIHANAH,1TB01
1TB01,Jum'at,Komp. Arsitektur Dasar&Prak.A**,7/8/9 T,GLab 2,LIA ROSMALA SCHIFFER,1TB01
1TB01,Jum'at,Komp. Arsitektur Dasar&Prak.B**,7/8/9 T,GLab 2,ONI INDAH CAHYANI,1TB01
1TB02,Senin,Pendidikan Agama Islam,1/2,G344,MULYADI,1TB02
1TB02,Senin,Gambar Teknik,5/6,G345,DEWI ASTUTI,1TB02
1TB02,Senin,Matematika 1,7/8,G345,DIAH TRI BUDI LESTARI,1TB02
1TB02,Senin,Bahasa Indonesia,9/10,G345,NURMANINGSIH,1TB02
1TB02,Rabu,Komp. Arsitektur Dasar&Prak.A**,6/7/8 T,GLab 2,AMIRA WATI,1TB02
1TB02,Rabu,Komp. Arsitektur Dasar&Prak.B**,6/7/8 T,GLab 2,CIPTA DESTIARA EKAPUTRI RUSWAN,1TB02
1TB02,Rabu,Komp. Arsitektur Dasar&Prak.C**,6/7/8 T,GLab 2,ONI INDAH CAHYANI,1TB02
1TB02,Kamis,Estetika Bentuk A,2/3/4 T,GLab 1,ADE SYOUFA,1TB02
1TB02,Kamis,Estetika Bentuk C,2/3/4 T,GLab 1,RAUDINA QISTHI PRAMANTHA,1TB02
1TB02,Kamis,Estetika Bentuk B,2/3/4 T,GLab 1,VINNY NAZALITA,1TB02
1TB02,Kamis,Gambar Arsitektur,6/7,G147,RAZIQ HASAN,1TB02
1TB02,Kamis,Pengantar Arsitektur,8/9,G147,AMIRA WATI,1TB02
1TB03,Selasa,Pengantar Arsitektur,2/3,K151,AGUS DHARMA TOHJIWA,1TB03
1TB03,Selasa,Gambar Teknik,4/5,K251,DIMYATI,1TB03
1TB03,Rabu,Komp. Arsitektur Dasar&Prak.B**,1/2/3,K151,AGUS SUPARMAN,1TB03
1TB03,Rabu,Komp. Arsitektur Dasar&Prak.A**,1/2/3,K151,AGUS SUPARMAN,1TB03
1TB03,Rabu,Pendidikan Agama Islam,4/5,K253,MEGA OKTAVIANY,1TB03
1TB03,Rabu,Bahasa Indonesia,6/7,K258,ARINI KUSMINTARTI,1TB03
1TB03,Jum'at,Gambar Arsitektur,1/2,K284,PURWANTO JOKO SLAMETO,1TB03
1TB03,Sabtu,Matematika 1,1/2,K254,ELLYSA,1TB03
1TB03,Sabtu,Estetika Bentuk B,5/6/7,K274,ADE SYOUFA,1TB03
1TB03,Sabtu,Estetika Bentuk A,5/6/7,K274,ADE SYOUFA,1TB03
2TB01,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2TB01
2TB01,Selasa,Struktur Kontruksi 2A *,1/2/3 T,GLab 2,REMIGIUS HARI SUSANTO,2TB01
2TB01,Selasa,Struktur Kontruksi 2B *,1/2/3 T,GLab 2,RIZKY ASTRIA,2TB01
2TB01,Selasa,Struktur Kontruksi 2C *,1/2/3 T,GLab 2,WESTI ANNITA SARI,2TB01
2TB01,Selasa,Bahasa Inggris,5/6,G113,SUYUDI,2TB01
2TB01,Selasa,Pendidikan Pancasila *,8/9,G115,SUKESTININGSIH,2TB01
2TB01,Rabu,Studio Perancangan Ars. 2B *,1/2/3/4T,GLab 1,DEWI ASTUTI,2TB01
2TB01,Rabu,Studio Perancangan Ars. 2C *,1/2/3/4T,GLab 1,REMIGIUS HARI SUSANTO,2TB01
2TB01,Rabu,Studio Perancangan Ars. 2A *,1/2/3/4T,GLab 1,YUDI NUGRAHA BAHAR,2TB01
2TB01,Kamis,Metode Perancangan Arsitektur,1/2,G238,SUMAIYAH FITRIAN DINI,2TB01
2TB01,Kamis,Perkembangan Arsitektur Indonesia,3/4,G238,CIPTA DESTIARA EKAPUTRI RUSWAN,2TB01
2TB01,Kamis,Utilitas 1A,5/6/7 T,GLab 1,AGUNG WAHYUDI,2TB01
2TB01,Kamis,Utilitas 1B,5/6/7 T,GLab 1,AZAS PRADANA SAPUTRA,2TB01
2TB01,Jum'at,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2TB01
2TB02,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2TB02
2TB02,Selasa,Pendidikan Pancasila *,6/7,G435,SUKESTININGSIH,2TB02
2TB02,Selasa,Utilitas 1A,8/9/10 T,GLab 2,ADE SYOUFA,2TB02
2TB02,Selasa,Utilitas 1B,8/9/10 T,GLab 2,WAHYU PRAKOSA,2TB02
2TB02,Kamis,Studio Perancangan Ars. 2C *,1/2/3/4 T,F5Lab1,DEWI ASTUTI,2TB02
2TB02,Kamis,Studio Perancangan Ars. 2B *,1/2/3/4 T,F5Lab1,RAKHMANITA,2TB02
2TB02,Kamis,Studio Perancangan Ars. 2A *,1/2/3/4 T,F5Lab1,RINA WIDAYANTI,2TB02
2TB02,Kamis,Struktur Kontruksi 2B *,7/8/9 T,F5Lab1,REMIGIUS HARI SUSANTO,2TB02
2TB02,Kamis,Struktur Kontruksi 2A *,7/8/9 T,F5Lab1,RIZKY ASTRIA,2TB02
2TB02,Kamis,Struktur Kontruksi 2C *,7/8/9 T,F5Lab1,YUDI NUGRAHA BAHAR,2TB02
2TB02,Jum'at,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2TB02
2TB02,Sabtu,Perkembangan Arsitektur Indonesia,1/2,G237,RAUDINA QISTHI PRAMANTHA,2TB02
2TB02,Sabtu,Bahasa Inggris,3/4,G237,SEPTIAJI FAJAR RIANTO,2TB02
2TB02,Sabtu,Metode Perancangan Arsitektur,5/6,G237,SUMAIYAH FITRIAN DINI,2TB02
2TB03,Senin,Komputasi Big Data,,UGTV,TEAM TEACHING,2TB03
2TB03,Selasa,Studio Perancangan Ars. 2B *,1/2/3/4,K144,AGUNG WAHYUDI,2TB03
2TB03,Selasa,Studio Perancangan Ars. 2A *,1/2/3/4,K144,AGUNG WAHYUDI,2TB03
2TB03,Selasa,Perkembangan Arsitektur Indonesia,5/6,K151,AGUS DHARMA TOHJIWA,2TB03
2TB03,Rabu,Bahasa Inggris,1/2,K243,DYAH AMBAR,2TB03
2TB03,Kamis,Praktikum Komputasi Big Data,1/2,,TIM DOSEN,2TB03
2TB03,Kamis,Pendidikan Pancasila *,7/8,K262,RIDWAN MUHAMMAD,2TB03
2TB03,Jum'at,Metode Perancangan Arsitektur,3/4,K284,PURWANTO JOKO SLAMETO,2TB03
2TB03,Jum'at,Struktur Kontruksi 2B *,6/7/8,K287,REMIGIUS HARI SUSANTO,2TB03
2TB03,Jum'at,Struktur Kontruksi 2A *,6/7/8,K287,REMIGIUS HARI SUSANTO,2TB03
2TB03,Sabtu,Utilitas 1A,2/3/4,K131,ADE SYOUFA,2TB03
2TB03,Sabtu,Utilitas 1B,2/3/4,K131,ADE SYOUFA,2TB03
2TB04,Selasa,Praktikum Komputasi Big Data,3/4,,TIM DOSEN,2TB04
3TB01,Senin,Studio Perancangan Ars. 4B *,1/2/3/4 T,GLab 1,DIANA SUSILOWATI,3TB01
3TB01,Senin,Studio Perancangan Ars. 4A *,1/2/3/4 T,GLab 1,YONAV PARTANA,3TB01
3TB01,Senin,Teknik Visualisasi Digital A**,7/8/9,Lab CA,VINNY NAZALITA,3TB01
3TB01,Selasa,Teknik Visualisasi Digital B**,1/2/3,GLab 1,DIANA SUSILOWATI,3TB01
3TB01,Selasa,Teknik Visualisasi Digital C**,5/6/7,Lab CA,SUMAIYAH FITRIAN DINI,3TB01
3TB01,Rabu,Manajemen Konstruksi,1/2,G148,DIMYATI,3TB01
3TB01,Rabu,Struktur dan Konstruksi 4,3/4/5/6,G148,AGUNG WAHYUDI,3TB01
3TB01,Rabu,Konservasi Arsitektur,8/9,G127,AGUS NUGROHO,3TB01
3TB01,Kamis,Perkembangan Arsitektur 3 *,1/2,GLab 2,LIA ROSMALA SCHIFFER,3TB01
3TB01,Kamis,Pembiayaan Proyek,3/4,G216,REHULINA APRIYANTI,3TB01
3TB01,Kamis,Metodologi Penelitian Arsitek,7/8,G138,ITA ROIHANAH,3TB01
3TB02,Senin,Studio Perancangan Ars. 4A *,7/8/9/10T,F5Lab1,AGUS SUPARMAN,3TB02
3TB02,Senin,Studio Perancangan Ars. 4B *,7/8/9/10T,F5Lab1,X FURUHITHO,3TB02
3TB02,Rabu,Struktur dan Konstruksi 4,1/2/3/4,GLab 2,AGUS NUGROHO,3TB02
3TB02,Rabu,Teknik Visualisasi Digital D**,7/8/9,Lab CA,BIMA HARYADI,3TB02
3TB02,Kamis,Perkembangan Arsitektur 3 *,4/5,G344,ITA ROIHANAH,3TB02
3TB02,Kamis,Konservasi Arsitektur,7/8,G144,RAKHMANITA,3TB02
3TB02,Kamis,Manajemen Konstruksi,9/10,G144,DIMYATI,3TB02
3TB02,Jum'at,Teknik Visualisasi Digital F**,2/3/4,Lab CA,WAHYU PRAKOSA,3TB02
3TB02,Jum'at,Pembiayaan Proyek,7/8,G221,REHULINA APRIYANTI,3TB02
3TB02,Sabtu,Metodologi Penelitian Arsitek,2/3,G126,IRINA MILDAWANI,3TB02
3TB02,Sabtu,Teknik Visualisasi Digital E**,4/5/6,Lab CA,TAMIYA MIFTAU SAADA KASMAN,3TB02
3TB03,Senin,Teknik Visualisasi Digital G**,1/2/3,Lab CA,PURWANTO JOKO SLAMETO,3TB03
3TB03,Senin,Perkembangan Arsitektur 3 *,5/6,G114,RAKHMANITA,3TB03
3TB03,Senin,Konservasi Arsitektur,7/8,G316,AGUS NUGROHO,3TB03
3TB03,Selasa,Studio Perancangan Ars. 4B *,4/5/6/7 T,GLab 1,DIANA SUSILOWATI,3TB03
3TB03,Selasa,Studio Perancangan Ars. 4A *,4/5/6/7 T,GLab 1,PANCAWATI DEWI,3TB03
3TB03,Rabu,Teknik Visualisasi Digital H**,4/5/6,Lab CA,RINA WIDAYANTI,3TB03
3TB03,Rabu,Metodologi Penelitian Arsitek,8/9,G452,ADE SYOUFA,3TB03
3TB03,Kamis,Struktur dan Konstruksi 4,1/2/3/4,G422,AGUS NUGROHO,3TB03
3TB03,Kamis,Manajemen Konstruksi,6/7,G313,DIMYATI,3TB03
3TB03,Kamis,Pembiayaan Proyek,8/9,G313,REHULINA APRIYANTI,3TB03
3TB03,Sabtu,Teknik Visualisasi Digital I**,1/2/3,Lab CA,SUMAIYAH FITRIAN DINI,3TB03
3TB04,Senin,Perkembangan Arsitektur 3 *,1/2,GLab 2,LIA ROSMALA SCHIFFER,3TB04
3TB04,Senin,Teknik Visualisasi Digital J**,4/5/6,Lab CA,WESTI ANNITA SARI,3TB04
3TB04,Senin,Konservasi Arsitektur,7/8,G139,RAKHMANITA,3TB04
3TB04,Rabu,Teknik Visualisasi Digital K**,1/2/3,Lab CA,BIMA HARYADI,3TB04
3TB04,Rabu,Metodologi Penelitian Arsitek,4/5,G1410,X FURUHITHO,3TB04
3TB04,Rabu,Struktur dan Konstruksi 4,7/8/9/10,G148,LILIK SETIAWAN HERY PURNAMA,3TB04
3TB04,Kamis,Studio Perancangan Ars. 4A *,6/7/8/9 T,F5Lab2,AGUS DHARMA TOHJIWA,3TB04
3TB04,Kamis,Studio Perancangan Ars. 4B *,6/7/8/9 T,F5Lab2,PURWANTO JOKO SLAMETO,3TB04
3TB04,Jum'at,Pembiayaan Proyek,1/2,G222,REHULINA APRIYANTI,3TB04
3TB04,Jum'at,Manajemen Konstruksi,3/4,G222,AZAS PRADANA SAPUTRA,3TB04
3TB04,Jum'at,Teknik Visualisasi Digital L**,7/8/9,Lab CA,TAMIYA MIFTAU SAADA KASMAN,3TB04
3TB05,Senin,Konservasi Arsitektur,1/2,K282,RINA WIDAYANTI,3TB05
3TB05,Senin,Perkembangan Arsitektur 3 *,4/5,K272,WAHYU PRAKOSA,3TB05
3TB05,Selasa,Pembiayaan Proyek,5/6,K288,AGUNG WAHYUDI,3TB05
3TB05,Selasa,Metodologi Penelitian Arsitek,7/8,K265,X FURUHITHO,3TB05
3TB05,Rabu,Teknik Visualisasi Digital A**,2/3/4,K244,DIANA SUSILOWATI,3TB05
3TB05,Rabu,Teknik Visualisasi Digital B**,2/3/4,K244,DIANA SUSILOWATI,3TB05
3TB05,Jum'at,Struktur dan Konstruksi 4,1/2/3/4,K287,REMIGIUS HARI SUSANTO,3TB05
3TB05,Jum'at,Manajemen Konstruksi,6/7,K131,AGUS NUGROHO,3TB05
3TB05,Sabtu,Studio Perancangan Ars. 4A *,1/2/3/4,K144,DEWI ASTUTI,3TB05
3TB05,Sabtu,Studio Perancangan Ars. 4B *,1/2/3/4,K144,DEWI ASTUTI,3TB05
4TB01,Senin,Perancangan Kota *,1/2/3,E325,VERONIKA WIDI PRABAWASARI,4TB01
4TB01,Senin,Simulasi&Permodelan Komp Arsi,4/5,E325,DIMYATI,4TB01
4TB01,Senin,Kritik Arsitektur,7/8,E328,IRINA MILDAWANI,4TB01
4TB01,Selasa,Praktikum Robotika Cerdas,1/2,,TIM DOSEN,4TB01
4TB01,Rabu,Perumahan dan Pemukiman *,3/4/5,G422,LILIK SETIAWAN HERY PURNAMA,4TB01
4TB01,Rabu,Penelitian Arsitektur C,8/9/10 T,G116,AGUS DHARMA TOHJIWA,4TB01
4TB01,Rabu,Penelitian Arsitektur A,8/9/10 T,G116,RAZIQ HASAN,4TB01
4TB01,Rabu,Penelitian Arsitektur B,8/9/10 T,G116,YONAV PARTANA,4TB01
4TB01,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TB01
4TB01,Jum'at,Studio Perancangan Ars. 6B,1/2/3/4T,GLab 2,PANCAWATI DEWI,4TB01
4TB01,Jum'at,Studio Perancangan Ars. 6A,1/2/3/4T,GLab 2,X FURUHITHO,4TB01
4TB02,Senin,Penelitian Arsitektur D,1/2/3 T,G248,AGUS SUPARMAN,4TB02
4TB02,Senin,Penelitian Arsitektur E,1/2/3 T,G248,YUDI NUGRAHA BAHAR,4TB02
4TB02,Senin,Kritik Arsitektur,4/5,G248,VINNY NAZALITA,4TB02
4TB02,Senin,Perumahan dan Pemukiman *,7/8/9,G133,LILIK SETIAWAN HERY PURNAMA,4TB02
4TB02,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TB02
4TB02,Jum'at,Simulasi&Permodelan Komp Arsi,3/4,G228,REHULINA APRIYANTI,4TB02
4TB02,Jum'at,Studio Perancangan Ars. 6A,7/8/9/10T,GLab 1,RAZIQ HASAN,4TB02
4TB02,Jum'at,Studio Perancangan Ars. 6B,7/8/9/10T,G313,RBD RUSWANDI TAHRIR/AGUS SUPARMAN,4TB02
4TB02,Sabtu,Perancangan Kota *,1/2/3,G115,ITA ROIHANAH,4TB02
4TB02,Sabtu,Penelitian Arsitektur F,4/5/6,G115,RAUDINA QISTHI PRAMANTHA,4TB02
4TB02,Sabtu,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4TB02
4TB03,Senin,Simulasi&Permodelan Komp Arsi,1/2,G145,DIMYATI,4TB03
4TB03,Senin,Kritik Arsitektur,4/5,G455,AGUS SUPARMAN,4TB03
4TB03,Senin,Studio Perancangan Ars. 6A,7/8/9/10T,GLab 2,VERONIKA WIDI PRABAWASARI,4TB03
4TB03,Senin,Studio Perancangan Ars. 6B,7/8/9/10T,GLab 2,YONAV PARTANA,4TB03
4TB03,Selasa,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4TB03
4TB03,Rabu,Penelitian Arsitektur G,7/8/9,G226,VERONIKA WIDI PRABAWASARI,4TB03
4TB03,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TB03
4TB03,Jum'at,Penelitian Arsitektur I,2/3/4,G343,LIA ROSMALA SCHIFFER,4TB03
4TB03,Jum'at,Penelitian Arsitektur H,7/8/9,G142,RINA WIDAYANTI,4TB03
4TB03,Sabtu,Perumahan dan Pemukiman *,1/2/3,G114,TAMIYA MIFTAU SAADA KASMAN,4TB03
4TB03,Sabtu,Perancangan Kota *,4/5/6,G114,IRINA MILDAWANI,4TB03
4TB04,Senin,Perancangan Kota *,1/2/3,G113,IRINA MILDAWANI,4TB04
4TB04,Senin,Studio Perancangan Ars. 6A,5/6/7/8T,GLab 1,AGUS DHARMA TOHJIWA,4TB04
4TB04,Senin,Studio Perancangan Ars. 6B,5/6/7/8T,GLab 1,RBD RUSWANDI TAHRIR/WAHYU PRAKOSA,4TB04
4TB04,Selasa,Penelitian Arsitektur J,1/2/3,G249,PANCAWATI DEWI,4TB04
4TB04,Selasa,Simulasi&Permodelan Komp Arsi,4/5,G249,RIZKY ASTRIA,4TB04
4TB04,Selasa,Praktikum Robotika Cerdas,8/9,,TIM DOSEN,4TB04
4TB04,Rabu,Perumahan dan Pemukiman *,4/5/6,G454,PURWANTO JOKO SLAMETO,4TB04
4TB04,Rabu,Penelitian Arsitektur K,7/8/9,G454,AGUNG WAHYUDI,4TB04
4TB04,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TB04
4TB04,Jum'at,Kritik Arsitektur,3/4,G236,AGUS SUPARMAN,4TB04
4TB04,Jum'at,Penelitian Arsitektur L,7/8/9,G245,WAHYU PRAKOSA,4TB04
4TB05,Senin,Penelitian Arsitektur A,1/2/3,K272,WAHYU PRAKOSA,4TB05
4TB05,Senin,Perancangan Kota *,4/5/6,K282,RINA WIDAYANTI,4TB05
4TB05,Selasa,Simulasi&Permodelan Komp Arsi,2/3,K251,DIMYATI,4TB05
4TB05,Selasa,Penelitian Arsitektur B,4/5/6,K265,X FURUHITHO,4TB05
4TB05,Rabu,Studio Perancangan Ars. 6B,1/2/3/4,K144,RAKHMANITA,4TB05
4TB05,Rabu,Studio Perancangan Ars. 6A,1/2/3/4,K144,RAKHMANITA,4TB05
4TB05,Rabu,Kritik Arsitektur,5/6,K151,AGUS SUPARMAN,4TB05
4TB05,Kamis,Robotika Cerdas,,UGTV,TEAM TEACHING,4TB05
4TB05,Kamis,Praktikum Robotika Cerdas,6/7,,TIM DOSEN,4TB05
4TB05,Jum'at,Perumahan dan Pemukiman *,2/3/4,K131,AGUS NUGROHO,4TB05
1PA01,Senin,Matematika & Ilmu Alamiah Dasar,4/5,E139,RENA FUJI ERIN SETYAWATI,1PA01
1PA01,Senin,Peng.Apl.Komp.Psi.Informatika A,8/9,E311,YULIA EKA PRAPTININGSIH,1PA01
1PA01,Kamis,Peng.Apl.Komp.Psi.Informatika B,1/2,F8455,RIZKI ARIYANI,1PA01
1PA01,Kamis,Pendidikan Kewarganegaraan,5/6,F8452,D L CRISPINA PARDEDE,1PA01
1PA01,Kamis,Psikologi Umum 1,7/8/9,F8452,GILANG VIENNA SANTINI,1PA01
1PA01,Sabtu,Psikologi Sosial 1 *,1/2/3,E517,ADINDA CUT QONITA,1PA01
1PA01,Sabtu,Bahasa Inggris Psikologi,4/5,E517,ERNA PRANATA PUTRI,1PA01
1PA01,Sabtu,Pendidikan Agama Islam,7/8,E517,NOVIANTO,1PA01
1PA01,Sabtu,Filsafat Umum,9/10,E517,BUDI SISWANTO,1PA01
1PA02,Senin,Peng.Apl.Komp.Psi.Informatika B,3/4,G316,RIZKI ARIYANI,1PA02
1PA02,Senin,Peng.Apl.Komp.Psi.Informatika A,5/6,G316,SYARIFAH AZHARINA SYAFRUDIN,1PA02
1PA02,Kamis,Psikologi Sosial 1 *,1/2/3,G217,INDRIA PRASTITI,1PA02
1PA02,Kamis,Pendidikan Agama Islam,5/6,G217,ABBAS MUHAMMAD BASALAMAH,1PA02
1PA02,Jum'at,Bahasa Inggris Psikologi,3/4,G115,ERNI HASTUTI,1PA02
1PA02,Jum'at,Pendidikan Kewarganegaraan,7/8,G116,ARY NATALINA,1PA02
1PA02,Sabtu,Psikologi Umum 1,1/2/3,E211,ANISAH CHAIRANI,1PA02
1PA02,Sabtu,Matematika & Ilmu Alamiah Dasar,5/6,E212,BAKTI PRAMADHANI,1PA02
1PA02,Sabtu,Filsafat Umum,7/8,E212,BUDI SISWANTO,1PA02
1PA03,Senin,Pendidikan Agama Islam,3/4,E336,MUHAMAD DARWIN NASUTION,1PA03
1PA03,Senin,Matematika & Ilmu Alamiah Dasar,7/8,E225,FITRI YULIANTI,1PA03
1PA03,Senin,Peng.Apl.Komp.Psi.Informatika B,9/10,E225,FETTIANA GIANADEVI,1PA03
1PA03,Rabu,Filsafat Umum,4/5,G116,AGUSTINA NICKE KAKIAY,1PA03
1PA03,Rabu,Psikologi Sosial 1 *,8/9/10,G129,TRISTI NICHTANTI WALUYO,1PA03
1PA03,Sabtu,Peng.Apl.Komp.Psi.Informatika A,1/2,E237,LIRA ARUM KUSUMANINGTHYAS HUTA,1PA03
1PA03,Sabtu,Pendidikan Kewarganegaraan,3/4,E237,SUSANTO,1PA03
1PA03,Sabtu,Bahasa Inggris Psikologi,5/6,E237,IRSYA INDIWARA,1PA03
1PA03,Sabtu,Psikologi Umum 1,8/9/10,E237,WINNY PUSPASARI THAMRIN,1PA03
1PA04,Rabu,Pendidikan Agama Islam,4/5,E433,APIPUDIN,1PA04
1PA04,Rabu,Psikologi Umum 1,6/7/8,E433,WINNY PUSPASARI THAMRIN,1PA04
1PA04,Kamis,Pendidikan Kewarganegaraan,3/4,F8445,D L CRISPINA PARDEDE,1PA04
1PA04,Kamis,Filsafat Umum,5/6,F8445,SAMUEL GUNAWAN,1PA04
1PA04,Jum'at,Bahasa Inggris Psikologi,1/2,G421,ERNI HASTUTI,1PA04
1PA04,Jum'at,Matematika & Ilmu Alamiah Dasar,3/4,G421,DYNA PRASETYA,1PA04
1PA04,Jum'at,Peng.Apl.Komp.Psi.Informatika B,7/8,G227,FETTIANA GIANADEVI,1PA04
1PA04,Sabtu,Psikologi Sosial 1 *,1/2/3,E348,INDRIAS NATANAEL,1PA04
1PA04,Sabtu,Peng.Apl.Komp.Psi.Informatika A,5/6,E236,LIRA ARUM KUSUMANINGTHYAS HUTA,1PA04
1PA05,Selasa,Peng.Apl.Komp.Psi.Informatika A,4/5,E435,LIRA ARUM KUSUMANINGTHYAS HUTA,1PA05
1PA05,Selasa,Bahasa Inggris Psikologi,6/7,E435,HANA FAUZIAH,1PA05
1PA05,Kamis,Pendidikan Agama Islam,1/2,F8452,ABIYYU ZHARIF NUGROHO,1PA05
1PA05,Kamis,Filsafat Umum,3/4,F8452,SAMUEL GUNAWAN,1PA05
1PA05,Jum'at,Psikologi Sosial 1 *,2/3/4,G215,LIE TJOEN TJIE,1PA05
1PA05,Jum'at,Matematika & Ilmu Alamiah Dasar,7/8,G247,DYNA PRASETYA,1PA05
1PA05,Sabtu,Psikologi Umum 1,4/5/6,E128,WINNY PUSPASARI THAMRIN,1PA05
1PA05,Sabtu,Peng.Apl.Komp.Psi.Informatika B,7/8,E128,DODY PERNADI,1PA05
1PA05,Sabtu,Pendidikan Kewarganegaraan,9/10,E128,RIDWAN HARLAN,1PA05
1PA06,Senin,Peng.Apl.Komp.Psi.Informatika A,1/2,E244,DESY WULANDARI ASFARY PUTRI,1PA06
1PA06,Senin,Peng.Apl.Komp.Psi.Informatika B,3/4,E244,DESY WULANDARI ASFARY PUTRI,1PA06
1PA06,Senin,Bahasa Inggris Psikologi,6/7,E424,VIDIA PUSPITA,1PA06
1PA06,Senin,Matematika & Ilmu Alamiah Dasar,9/10,E214,FITRI YULIANTI,1PA06
1PA06,Rabu,Filsafat Umum,1/2,G112,AGUSTINA NICKE KAKIAY,1PA06
1PA06,Rabu,Pendidikan Kewarganegaraan,3/4,G124,GATOT SUBIYAKTO,1PA06
1PA06,Sabtu,Psikologi Umum 1,1/2/3,E425,ADI SULAIMAN,1PA06
1PA06,Sabtu,Psikologi Sosial 1 *,4/5/6,E425,INDRIAS NATANAEL,1PA06
1PA06,Sabtu,Pendidikan Agama Islam,8/9,E242,FATCHULLAH ZARKASI,1PA06
1PA07,Senin,Bahasa Inggris Psikologi,1/2,E346,VIDIA PUSPITA,1PA07
1PA07,Senin,Peng.Apl.Komp.Psi.Informatika A,3/4,E346,DHIAN SWEETANIA,1PA07
1PA07,Senin,Psikologi Sosial 1 *,6/7/8,E214,LIE TJOEN TJIE,1PA07
1PA07,Kamis,Pendidikan Kewarganegaraan,1/2,F8482,D L CRISPINA PARDEDE,1PA07
1PA07,Kamis,Psikologi Umum 1,4/5/6,F8483,MATRISSYA HERMITA,1PA07
1PA07,Jum'at,Matematika & Ilmu Alamiah Dasar,1/2,G245,IFFATUL MARDHIYAH,1PA07
1PA07,Jum'at,Pendidikan Agama Islam,3/4,G245,RAHMAT,1PA07
1PA07,Jum'at,Peng.Apl.Komp.Psi.Informatika B,7/8,G147,DESY WULANDARI ASFARY PUTRI,1PA07
1PA07,Jum'at,Filsafat Umum,9/10,G147,JACOBUS BELIDA BLIKOLOLONG,1PA07
1PA08,Senin,Bahasa Inggris Psikologi,1/2,E426,RICKY PERDANA,1PA08
1PA08,Senin,Psikologi Sosial 1 *,4/5/6,E328,TRISTI NICHTANTI WALUYO,1PA08
1PA08,Jum'at,Matematika & Ilmu Alamiah Dasar,1/2,G226,DYNA PRASETYA,1PA08
1PA08,Jum'at,Peng.Apl.Komp.Psi.Informatika B,3/4,G226,FETTIANA GIANADEVI,1PA08
1PA08,Jum'at,Pendidikan Kewarganegaraan,7/8,G1410,MEI RAHARJA,1PA08
1PA08,Jum'at,Pendidikan Agama Islam,9/10,G1410,RAHMAT,1PA08
1PA08,Sabtu,Filsafat Umum,1/2,E234,BUDI SISWANTO,1PA08
1PA08,Sabtu,Psikologi Umum 1,4/5/6,E234,KLARA INNATA ARISHANTI,1PA08
1PA08,Sabtu,Peng.Apl.Komp.Psi.Informatika A,7/8,E234,LIRA ARUM KUSUMANINGTHYAS HUTA,1PA08
1PA09,Senin,Bahasa Inggris Psikologi,3/4,E426,HANA FAUZIAH,1PA09
1PA09,Senin,Psikologi Sosial 1 *,7/8/9,E237,TRISTI NICHTANTI WALUYO,1PA09
1PA09,Kamis,Matematika & Ilmu Alamiah Dasar,1/2,E232,RENA FUJI ERIN SETYAWATI,1PA09
1PA09,Kamis,Pendidikan Agama Islam,3/4,E232,MULYADI,1PA09
1PA09,Kamis,Psikologi Umum 1,5/6/7,E232,SRI NURHAYATI,1PA09
1PA09,Kamis,Peng.Apl.Komp.Psi.Informatika B,9/10,E226,AHMAD HIDAYAT,1PA09
1PA09,Sabtu,Filsafat Umum,3/4,E214,BENNY FERDY MALONDA,1PA09
1PA09,Sabtu,Peng.Apl.Komp.Psi.Informatika A,5/6,E333,ALI AKBAR,1PA09
1PA09,Sabtu,Pendidikan Kewarganegaraan,7/8,E333,EDWIN HARLAN,1PA09
1PA10,Senin,Psikologi Sosial 1 *,2/3/4,E216,LIE TJOEN TJIE,1PA10
1PA10,Senin,Psikologi Umum 1,5/6/7,E216,GALIH MEDIANA,1PA10
1PA10,Senin,Peng.Apl.Komp.Psi.Informatika B,9/10,E343,M RIDWAN DWI SEPTIAN,1PA10
1PA10,Rabu,Bahasa Inggris Psikologi,1/2,E527,ERNI HASTUTI,1PA10
1PA10,Rabu,Pendidikan Kewarganegaraan,3/4,E527,ATI HARMONI,1PA10
1PA10,Sabtu,Pendidikan Agama Islam,1/2,E214,MUHAMAD DARWIN NASUTION,1PA10
1PA10,Sabtu,Filsafat Umum,5/6,E218,BENNY FERDY MALONDA,1PA10
1PA10,Sabtu,Peng.Apl.Komp.Psi.Informatika A,7/8,E218,ALI AKBAR,1PA10
1PA10,Sabtu,Matematika & Ilmu Alamiah Dasar,9/10,E218,DENI HARYADI,1PA10
1PA11,Senin,Bahasa Inggris Psikologi,1/2,E221,MISI ELISA FATIMAH,1PA11
1PA11,Senin,Peng.Apl.Komp.Psi.Informatika B,3/4,E221,FETTIANA GIANADEVI,1PA11
1PA11,Senin,Peng.Apl.Komp.Psi.Informatika A,6/7,E422,YULIA EKA PRAPTININGSIH,1PA11
1PA11,Senin,Psikologi Umum 1,8/9/10,E422,GALIH MEDIANA,1PA11
1PA11,Kamis,Pendidikan Kewarganegaraan,3/4,G425,MUHAMAD FARID MAHMUD,1PA11
1PA11,Kamis,Matematika & Ilmu Alamiah Dasar,7/8,G425,RENA FUJI ERIN SETYAWATI,1PA11
1PA11,Jum'at,Pendidikan Agama Islam,1/2,G239,RAHMAT,1PA11
1PA11,Jum'at,Filsafat Umum,3/4,G239,JACOBUS BELIDA BLIKOLOLONG,1PA11
1PA11,Jum'at,Psikologi Sosial 1 *,7/8/9,G239,RR ALFIATUN SARASATI,1PA11
1PA12,Senin,Peng.Apl.Komp.Psi.Informatika B,1/2,E227,FETTIANA GIANADEVI,1PA12
1PA12,Senin,Bahasa Inggris Psikologi,3/4,E337,RICKY PERDANA,1PA12
1PA12,Senin,Matematika & Ilmu Alamiah Dasar,6/7,E443,COKORDA PRAPTI MAHANDARI,1PA12
1PA12,Selasa,Pendidikan Agama Islam,2/3,G453,MU'MINATUS FITRIATI FIRDAUS,1PA12
1PA12,Selasa,Psikologi Sosial 1 *,5/6/7,G444,NURUL HUDA,1PA12
1PA12,Rabu,Psikologi Umum 1,3/4/5,E231,WINNY PUSPASARI THAMRIN,1PA12
1PA12,Sabtu,Filsafat Umum,1/2,E321,AGUSTINA NICKE KAKIAY,1PA12
1PA12,Sabtu,Peng.Apl.Komp.Psi.Informatika A,3/4,E321,LIRA ARUM KUSUMANINGTHYAS HUTA,1PA12
1PA12,Sabtu,Pendidikan Kewarganegaraan,6/7,E313,SINGGIH HARDJANTO,1PA12
1PA13,Kamis,Psikologi Umum 1,1/2/3,E235,SRI NURHAYATI,1PA13
1PA13,Kamis,Pendidikan Kewarganegaraan,5/6,E224,SULISTINING TRIMULYANI,1PA13
1PA13,Kamis,Peng.Apl.Komp.Psi.Informatika B,7/8,E247,AHMAD HIDAYAT,1PA13
1PA13,Jum'at,Psikologi Sosial 1 *,2/3/4,G433,RR ALFIATUN SARASATI,1PA13
1PA13,Jum'at,Matematika & Ilmu Alamiah Dasar,7/8,G432,IFFATUL MARDHIYAH,1PA13
1PA13,Sabtu,Peng.Apl.Komp.Psi.Informatika A,1/2,E216,ALI AKBAR,1PA13
1PA13,Sabtu,Pendidikan Agama Islam,3/4,E216,MUHAMAD DARWIN NASUTION,1PA13
1PA13,Sabtu,Filsafat Umum,7/8,E222,AGUSTINA NICKE KAKIAY,1PA13
1PA13,Sabtu,Bahasa Inggris Psikologi,9/10,E222,IRSYA INDIWARA,1PA13
1PA14,Senin,Peng.Apl.Komp.Psi.Informatika B,1/2,G442,RIZKI ARIYANI,1PA14
1PA14,Senin,Peng.Apl.Komp.Psi.Informatika A,3/4,G442,SYARIFAH AZHARINA SYAFRUDIN,1PA14
1PA14,Kamis,Psikologi Sosial 1 *,5/6/7,G242,INDRIA PRASTITI,1PA14
1PA14,Jum'at,Pendidikan Agama Islam,7/8,G344,RAHMAT,1PA14
1PA14,Jum'at,Bahasa Inggris Psikologi,9/10,G128,AYYUHATSANAIL FITHRI,1PA14
1PA14,Sabtu,Filsafat Umum,1/2,E215,BENNY FERDY MALONDA,1PA14
1PA14,Sabtu,Matematika & Ilmu Alamiah Dasar,3/4,E215,DENI HARYADI,1PA14
1PA14,Sabtu,Pendidikan Kewarganegaraan,5/6,E215,EDWIN HARLAN,1PA14
1PA14,Sabtu,Psikologi Umum 1,8/9/10,E217,ANISAH CHAIRANI,1PA14
1PA15,Senin,Peng.Apl.Komp.Psi.Informatika B,5/6,E426,M RIDWAN DWI SEPTIAN,1PA15
1PA15,Senin,Peng.Apl.Komp.Psi.Informatika A,7/8,E426,ALI AKBAR,1PA15
1PA15,Jum'at,Filsafat Umum,1/2,G224,JACOBUS BELIDA BLIKOLOLONG,1PA15
1PA15,Jum'at,Bahasa Inggris Psikologi,3/4,G224,INDAH LESTARI,1PA15
1PA15,Jum'at,Psikologi Sosial 1 *,7/8/9,G216,LIE TJOEN TJIE,1PA15
1PA15,Sabtu,Pendidikan Kewarganegaraan,1/2,E344,SUSANTO,1PA15
1PA15,Sabtu,Matematika & Ilmu Alamiah Dasar,3/4,E344,BAKTI PRAMADHANI,1PA15
1PA15,Sabtu,Pendidikan Agama Islam,5/6,E344,NOVIANTO,1PA15
1PA15,Sabtu,Psikologi Umum 1,8/9/10,E344,FAUZAN AMMARI,1PA15
1PA16,Senin,Psikologi Sosial 1 *,1/2/3,E245,TRISTI NICHTANTI WALUYO,1PA16
1PA16,Senin,Matematika & Ilmu Alamiah Dasar,4/5,E245,COKORDA PRAPTI MAHANDARI,1PA16
1PA16,Senin,Peng.Apl.Komp.Psi.Informatika B,7/8,E228,FETTIANA GIANADEVI,1PA16
1PA16,Selasa,Filsafat Umum,5/6,E434,MU'MINATUS FITRIATI FIRDAUS,1PA16
1PA16,Selasa,Pendidikan Agama Islam,7/8,E434,ABDUL ROHMAN,1PA16
1PA16,Kamis,Psikologi Umum 1,8/9/10,F8446,MATRISSYA HERMITA,1PA16
1PA16,Sabtu,Peng.Apl.Komp.Psi.Informatika A,3/4,E338,ALI AKBAR,1PA16
1PA16,Sabtu,Pendidikan Kewarganegaraan,5/6,E338,SUSANTO,1PA16
1PA16,Sabtu,Bahasa Inggris Psikologi,7/8,E338,ERNA PRANATA PUTRI,1PA16
1PA17,Kamis,Pendidikan Agama Islam,3/4,G237,NOVIANTO,1PA17
1PA17,Kamis,Psikologi Sosial 1 *,6/7/8,G222,NILAM WIDYARINI,1PA17
1PA17,Kamis,Pendidikan Kewarganegaraan,9/10,G222,MUHAMAD FARID MAHMUD,1PA17
1PA17,Jum'at,Bahasa Inggris Psikologi,1/2,G452,INDAH LESTARI,1PA17
1PA17,Jum'at,Peng.Apl.Komp.Psi.Informatika A,3/4,G452,DESY WULANDARI ASFARY PUTRI,1PA17
1PA17,Sabtu,Matematika & Ilmu Alamiah Dasar,1/2,E338,BAKTI PRAMADHANI,1PA17
1PA17,Sabtu,Psikologi Umum 1,4/5/6,E311,ADI SULAIMAN,1PA17
1PA17,Sabtu,Filsafat Umum,7/8,E311,BENNY FERDY MALONDA,1PA17
1PA17,Sabtu,Peng.Apl.Komp.Psi.Informatika B,9/10,E311,DODY PERNADI,1PA17
1PA18,Kamis,Pendidikan Kewarganegaraan,1/2,E527,NUR PUTRI ERDIANTI,1PA18
1PA18,Kamis,Matematika & Ilmu Alamiah Dasar,5/6,E342,RENA FUJI ERIN SETYAWATI,1PA18
1PA18,Kamis,Pendidikan Agama Islam,7/8,E342,MULYADI,1PA18
1PA18,Jum'at,Peng.Apl.Komp.Psi.Informatika A,1/2,G124,DESY WULANDARI ASFARY PUTRI,1PA18
1PA18,Jum'at,Bahasa Inggris Psikologi,3/4,G124,AYYUHATSANAIL FITHRI,1PA18
1PA18,Jum'at,Filsafat Umum,7/8,G453,JACOBUS BELIDA BLIKOLOLONG,1PA18
1PA18,Jum'at,Peng.Apl.Komp.Psi.Informatika B,9/10,G453,DESY WULANDARI ASFARY PUTRI,1PA18
1PA18,Sabtu,Psikologi Umum 1,5/6/7,E514,ANISAH CHAIRANI,1PA18
1PA18,Sabtu,Psikologi Sosial 1 *,8/9/10,E514,WAHYU RAHARDJO,1PA18
1PA19,Senin,Peng.Apl.Komp.Psi.Informatika A,1/2,E435,DHIAN SWEETANIA,1PA19
1PA19,Senin,Pendidikan Kewarganegaraan,3/4,E435,UMI KULSUM,1PA19
1PA19,Senin,Peng.Apl.Komp.Psi.Informatika B,7/8,E215,M RIDWAN DWI SEPTIAN,1PA19
1PA19,Kamis,Psikologi Umum 1,1/2/3,E245,GILANG VIENNA SANTINI,1PA19
1PA19,Kamis,Psikologi Sosial 1 *,5/6/7,E337,NURLINTANG PUTRI AYUNING RIZAL,1PA19
1PA19,Kamis,Pendidikan Agama Islam,9/10,E524,MULYADI,1PA19
1PA19,Sabtu,Filsafat Umum,4/5,E313,AGUSTINA NICKE KAKIAY,1PA19
1PA19,Sabtu,Matematika & Ilmu Alamiah Dasar,7/8,E131,DENI HARYADI,1PA19
1PA19,Sabtu,Bahasa Inggris Psikologi,9/10,E131,ERNA PRANATA PUTRI,1PA19
1PA20,Senin,Peng.Apl.Komp.Psi.Informatika A,1/2,G434,SYARIFAH AZHARINA SYAFRUDIN,1PA20
1PA20,Senin,Pendidikan Agama Islam,3/4,G434,ISMAIL AKBAR BRAHMA,1PA20
1PA20,Senin,Peng.Apl.Komp.Psi.Informatika B,7/8,G342,RIZKI ARIYANI,1PA20
1PA20,Kamis,Psikologi Sosial 1 *,1/2/3,G115,NILAM WIDYARINI,1PA20
1PA20,Jum'at,Pendidikan Kewarganegaraan,1/2,G454,MEI RAHARJA,1PA20
1PA20,Jum'at,Matematika & Ilmu Alamiah Dasar,3/4,G454,IFFATUL MARDHIYAH,1PA20
1PA20,Sabtu,Psikologi Umum 1,1/2/3,E236,KLARA INNATA ARISHANTI,1PA20
1PA20,Sabtu,Filsafat Umum,5/6,E211,BUDI SISWANTO,1PA20
1PA20,Sabtu,Bahasa Inggris Psikologi,7/8,E211,AYYUHATSANAIL FITHRI,1PA20
1PA21,Senin,Peng.Apl.Komp.Psi.Informatika B,1/2,E213,OKTAVIANI,1PA21
1PA21,Senin,Filsafat Umum,3/4,E213,BENNY FERDY MALONDA,1PA21
1PA21,Senin,Peng.Apl.Komp.Psi.Informatika A,7/8,E136,DHIAN SWEETANIA,1PA21
1PA21,Senin,Bahasa Inggris Psikologi,9/10,E136,HANA FAUZIAH,1PA21
1PA21,Kamis,Pendidikan Kewarganegaraan,5/6,G226,MUHAMAD FARID MAHMUD,1PA21
1PA21,Kamis,Matematika & Ilmu Alamiah Dasar,7/8,G226,SIDIK LESTIYONO,1PA21
1PA21,Kamis,Pendidikan Agama Islam,9/10,G226,NUR MUNIR,1PA21
1PA21,Sabtu,Psikologi Sosial 1 *,1/2/3,E316,ASRINI MAHDIA,1PA21
1PA21,Sabtu,Psikologi Umum 1,5/6/7,E316,AJENG FISTE FIFTINA,1PA21
1PA22,Senin,Filsafat Umum,1/2,E312,BENNY FERDY MALONDA,1PA22
1PA22,Senin,Peng.Apl.Komp.Psi.Informatika B,3/4,E312,OKTAVIANI,1PA22
1PA22,Senin,Bahasa Inggris Psikologi,7/8,E137,HANA FAUZIAH,1PA22
1PA22,Senin,Peng.Apl.Komp.Psi.Informatika A,9/10,E137,PIPIT DEWI ARNESIA,1PA22
1PA22,Kamis,Pendidikan Kewarganegaraan,1/2,G221,RANDY,1PA22
1PA22,Kamis,Matematika & Ilmu Alamiah Dasar,5/6,G434,SIDIK LESTIYONO,1PA22
1PA22,Kamis,Pendidikan Agama Islam,7/8,G434,NUR MUNIR,1PA22
1PA22,Sabtu,Psikologi Umum 1,1/2/3,E317,AJENG FISTE FIFTINA,1PA22
1PA22,Sabtu,Psikologi Sosial 1 *,5/6/7,E317,ASRINI MAHDIA,1PA22
1PA23,Senin,Filsafat Umum,1/2,J127,JACOBUS BELIDA BLIKOLOLONG,1PA23
1PA23,Senin,Pendidikan Kewarganegaraan,3/4,J127,JUNAEDI ABDILLAH,1PA23
1PA23,Senin,Bahasa Inggris Psikologi,5/6,J127,DEWI WULAN SARI,1PA23
1PA23,Senin,Psikologi Umum 1,8/9/10,J127,AFMI FUAD,1PA23
1PA23,Rabu,Peng.Apl.Komp.Psi.Informatika A,1/2,J127,TISSA MAHARANI,1PA23
1PA23,Rabu,Psikologi Sosial 1 *,4/5/6,J1519,VONNY WIJAYA,1PA23
1PA23,Rabu,Pendidikan Agama Islam,7/8,J1519,MUHAMMAD ALI,1PA23
1PA23,Sabtu,Matematika & Ilmu Alamiah Dasar,1/2,J1412,FITRI YULIANTI,1PA23
1PA23,Sabtu,Peng.Apl.Komp.Psi.Informatika B,5/6,J1515A,HERDYAN KHARISMA PUTRA,1PA23
1PA24,Senin,Pendidikan Kewarganegaraan,7/8,J137,EDI FAKHRI,1PA24
1PA24,Senin,Filsafat Umum,9/10,J137,MU'MINATUS FITRIATI FIRDAUS,1PA24
1PA24,Selasa,Pendidikan Agama Islam,4/5,J1317,AMIRULLAH,1PA24
1PA24,Selasa,Psikologi Sosial 1 *,6/7/8,J1317,TRI MARYANI,1PA24
1PA24,Rabu,Bahasa Inggris Psikologi,1/2,J157,BADARU SYAMSUL,1PA24
1PA24,Rabu,Peng.Apl.Komp.Psi.Informatika A,3/4,J157,TISSA MAHARANI,1PA24
1PA24,Sabtu,Peng.Apl.Komp.Psi.Informatika B,1/2,J1516A,HERDYAN KHARISMA PUTRA,1PA24
1PA24,Sabtu,Matematika & Ilmu Alamiah Dasar,3/4,J1516A,FITRI YULIANTI,1PA24
1PA24,Sabtu,Psikologi Umum 1,6/7/8,J1516A,INGE ANDRIANI,1PA24
1PA25,Senin,Filsafat Umum,3/4,J1416B,MU'MINATUS FITRIATI FIRDAUS,1PA25
1PA25,Senin,Pendidikan Kewarganegaraan,5/6,J1416B,SUDJIRAN,1PA25
1PA25,Senin,Pendidikan Agama Islam,9/10,J1416B,RETMIARTI,1PA25
1PA25,Jum'at,Psikologi Sosial 1 *,2/3/4,J1220,SHAFIRA DESTAMI ANNIDA,1PA25
1PA25,Jum'at,Psikologi Umum 1,7/8/9,J1114,REHAN SYAFIFAH,1PA25
1PA25,Sabtu,Bahasa Inggris Psikologi,1/2,J158,PUTI NURINA AYUNINGTYAS,1PA25
1PA25,Sabtu,Peng.Apl.Komp.Psi.Informatika B,3/4,J158,HERDYAN KHARISMA PUTRA,1PA25
1PA25,Sabtu,Peng.Apl.Komp.Psi.Informatika A,6/7,J158,KURNIAWAN B. PRIANTO,1PA25
1PA25,Sabtu,Matematika & Ilmu Alamiah Dasar,8/9,J158,FITRI YULIANTI,1PA25
1PA26,Senin,Psikologi Umum 1,1/2/3,J1311,AFMI FUAD,1PA26
1PA26,Senin,Filsafat Umum,4/5,J1311,JACOBUS BELIDA BLIKOLOLONG,1PA26
1PA26,Senin,Pendidikan Agama Islam,7/8,J1311,RETMIARTI,1PA26
1PA26,Selasa,Psikologi Sosial 1 *,2/3/4,J128,TRI MARYANI,1PA26
1PA26,Selasa,Peng.Apl.Komp.Psi.Informatika B,7/8,J1220,WALIYA RAHMAWANTI,1PA26
1PA26,Sabtu,Pendidikan Kewarganegaraan,1/2,J153,DIAH TURIS KAEMIRAWATI,1PA26
1PA26,Sabtu,Bahasa Inggris Psikologi,3/4,J153,PUTI NURINA AYUNINGTYAS,1PA26
1PA26,Sabtu,Matematika & Ilmu Alamiah Dasar,6/7,J153,FITRI YULIANTI,1PA26
1PA26,Sabtu,Peng.Apl.Komp.Psi.Informatika A,8/9,J153,ANINDITO YOGA PRATAMA,1PA26
1PA27,Senin,Matematika & Ilmu Alamiah Dasar,4/5,J139,DESTI RIMINARSIH,1PA27
1PA27,Senin,Filsafat Umum,6/7,J139,MU'MINATUS FITRIATI FIRDAUS,1PA27
1PA27,Selasa,Pendidikan Agama Islam,2/3,J1220,AMIRULLAH,1PA27
1PA27,Selasa,Peng.Apl.Komp.Psi.Informatika B,4/5,J1220,WALIYA RAHMAWANTI,1PA27
1PA27,Jum'at,Psikologi Umum 1,2/3/4,J1212,REHAN SYAFIFAH,1PA27
1PA27,Jum'at,Psikologi Sosial 1 *,7/8/9,J1212,SHAFIRA DESTAMI ANNIDA,1PA27
1PA27,Sabtu,Bahasa Inggris Psikologi,1/2,J1420,ZAINAL RIADI,1PA27
1PA27,Sabtu,Peng.Apl.Komp.Psi.Informatika A,3/4,J1420,ANINDITO YOGA PRATAMA,1PA27
1PA27,Sabtu,Pendidikan Kewarganegaraan,5/6,J1420,MUHAMMAD BURHAN AMIN,1PA27
1PA28,Senin,Filsafat Umum,4/5,K133,AGUSTINA NICKE KAKIAY,1PA28
1PA28,Selasa,Peng.Apl.Komp.Psi.Informatika B,1/2,K287,OKTAVIANI,1PA28
1PA28,Selasa,Psikologi Umum 1,5/6/7,K152,ALIVA KEMALA,1PA28
1PA28,Rabu,Matematika & Ilmu Alamiah Dasar,1/2,K251,EVI MARYAM,1PA28
1PA28,Rabu,Peng.Apl.Komp.Psi.Informatika A,3/4,K175,WITARI ARYUNANI,1PA28
1PA28,Rabu,Bahasa Inggris Psikologi,5/6,K243,DYAH AMBAR,1PA28
1PA28,Kamis,Psikologi Sosial 1 *,3/4/5,K241,LIE TJOEN TJIE,1PA28
1PA28,Jum'at,Pendidikan Kewarganegaraan,1/2,K245,CHOLIDAH ASTRI PERTIWI,1PA28
1PA28,Jum'at,Pendidikan Agama Islam,6/7,K273,AULIA NUGRAHA,1PA28
1PA29,Senin,Bahasa Inggris Psikologi,4/5,K163,SEPTIAN DWI PUTRI,1PA29
1PA29,Senin,Filsafat Umum,6/7,K133,AGUSTINA NICKE KAKIAY,1PA29
1PA29,Selasa,Psikologi Sosial 1 *,1/2/3,K248,QUROYZHIN KARTIKA RINI,1PA29
1PA29,Selasa,Peng.Apl.Komp.Psi.Informatika B,4/5,K287,OKTAVIANI,1PA29
1PA29,Rabu,Peng.Apl.Komp.Psi.Informatika A,1/2,K175,WITARI ARYUNANI,1PA29
1PA29,Rabu,Matematika & Ilmu Alamiah Dasar,3/4,K252,FITRI YULIANTI,1PA29
1PA29,Rabu,Psikologi Umum 1,5/6/7,K245,MATRISSYA HERMITA,1PA29
1PA29,Jum'at,Pendidikan Agama Islam,3/4,K273,AULIA NUGRAHA,1PA29
1PA29,Sabtu,Pendidikan Kewarganegaraan,1/2,K296,ROSLIYANA BR PERANGIN ANGIN,1PA29
1PA30,Senin,Peng.Apl.Komp.Psi.Informatika A,6/7,K281,RATIH NURDIYANI SARI,1PA30
1PA30,Rabu,Psikologi Umum 1,2/3/4,K245,MATRISSYA HERMITA,1PA30
1PA30,Rabu,Bahasa Inggris Psikologi,5/6,K243,DYAH AMBAR,1PA30
1PA30,Kamis,Matematika & Ilmu Alamiah Dasar,2/3,K272,VONNY WIJAYA,1PA30
1PA30,Kamis,Psikologi Sosial 1 *,6/7/8,K241,LIE TJOEN TJIE,1PA30
1PA30,Jum'at,Pendidikan Agama Islam,6/7,K273,AULIA NUGRAHA,1PA30
1PA30,Sabtu,Filsafat Umum,1/2,K271,MU'MINATUS FITRIATI FIRDAUS,1PA30
1PA30,Sabtu,Pendidikan Kewarganegaraan,3/4,K296,ROSLIYANA BR PERANGIN ANGIN,1PA30
1PA30,Sabtu,Peng.Apl.Komp.Psi.Informatika B,6/7,K281,MURNIYATI,1PA30
1PA31,Senin,Pendidikan Kewarganegaraan,4/5,K2103,KASYAFIYA JAYANTI,1PA31
1PA31,Selasa,Psikologi Umum 1,1/2/3,K261,WINNY PUSPASARI THAMRIN,1PA31
1PA31,Rabu,Pendidikan Agama Islam,1/2,K253,MEGA OKTAVIANY,1PA31
1PA31,Rabu,Filsafat Umum,5/6,K287,NI PUTU EKA CHANDRA UDAYANI,1PA31
1PA31,Kamis,Peng.Apl.Komp.Psi.Informatika B,1/2,K261,RIZA ADRIANTI SUPONO,1PA31
1PA31,Kamis,Matematika & Ilmu Alamiah Dasar,6/7,K271,TRISTI NICHTANTI WALUYO,1PA31
1PA31,Jum'at,Bahasa Inggris Psikologi,3/4,K268,SEPTIAN DWI PUTRI,1PA31
1PA31,Sabtu,Peng.Apl.Komp.Psi.Informatika A,1/2,K245,DESY WULANDARI ASFARY PUTRI,1PA31
1PA31,Sabtu,Psikologi Sosial 1 *,3/4/5,K291,SRI NURHAYATI,1PA31
1PA32,Senin,Bahasa Inggris Psikologi,2/3,K163,SEPTIAN DWI PUTRI,1PA32
1PA32,Senin,Pendidikan Kewarganegaraan,4/5,K2103,KASYAFIYA JAYANTI,1PA32
1PA32,Selasa,Psikologi Umum 1,1/2/3,K152,ALIVA KEMALA,1PA32
1PA32,Rabu,Pendidikan Agama Islam,1/2,K253,MEGA OKTAVIANY,1PA32
1PA32,Rabu,Psikologi Sosial 1 *,3/4/5,K288,NURUL HUDA,1PA32
1PA32,Kamis,Peng.Apl.Komp.Psi.Informatika B,1/2,K152,AMRIN FAKHRUDDIN JAUHARI,1PA32
1PA32,Kamis,Matematika & Ilmu Alamiah Dasar,8/9,K271,TRISTI NICHTANTI WALUYO,1PA32
1PA32,Sabtu,Peng.Apl.Komp.Psi.Informatika A,3/4,K245,DESY WULANDARI ASFARY PUTRI,1PA32
1PA32,Sabtu,Filsafat Umum,6/7,K271,MU'MINATUS FITRIATI FIRDAUS,1PA32
1PA33,Senin,Pendidikan Kewarganegaraan,3/4,L222,ISNA PANDIJA,1PA33
1PA33,Selasa,Filsafat Umum,2/3,L234,JACOBUS BELIDA BLIKOLOLONG,1PA33
1PA33,Selasa,Psikologi Umum 1,4/5/6,L244,MATRISSYA HERMITA,1PA33
1PA33,Rabu,Pendidikan Agama Islam,2/3,L234,MULYADI,1PA33
1PA33,Rabu,Psikologi Sosial 1 *,4/5/6,L236,TETTY WINDA,1PA33
1PA33,Rabu,Bahasa Inggris Psikologi,7/8,L242,DEVI HELLYSTIA,1PA33
1PA33,Kamis,Peng.Apl.Komp.Psi.Informatika B,2/3,L241,RISDIANDRI ISKANDAR,1PA33
1PA33,Kamis,Peng.Apl.Komp.Psi.Informatika A,4/5,L234,SYAMSI RUHAMA,1PA33
1PA33,Kamis,Matematika & Ilmu Alamiah Dasar,6/7,L234,IRA NORMA PRABAWATI,1PA33
2PA01,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA01
2PA01,Selasa,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2PA01
2PA01,Rabu,Psikologi Pendidikan,1/2/3,D621,SITI FAUZIAH APRILIA WIJAYA,2PA01
2PA01,Rabu,Statistika */**,5/6/7,D633,TITIEK IREWATI,2PA01
2PA01,Kamis,Psikologi Perkembangan 2 *,1/2/3,F8464,RETNANINGSIH,2PA01
2PA01,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,5/6/7,F8472,RATNA MAHARANI HAPSARI,2PA01
2PA01,Kamis,Kode Etik Psikologi,8/9,F8472,SALSABILA AINI,2PA01
2PA01,Sabtu,Psikologi Kepribadian 1,1/2/3,E346,MARCIA MARTHA,2PA01
2PA02,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA02
2PA02,Selasa,Psikodiagnostika 1:Peng.Tes Psi*,1/2/3,D611,ZENI AFRILYA,2PA02
2PA02,Selasa,Statistika */**,5/6/7,D611,PARANITA ASNUR,2PA02
2PA02,Kamis,Kode Etik Psikologi,1/2,D653,SALSABILA AINI,2PA02
2PA02,Kamis,Psikologi Pendidikan,4/5/6,D647,LILIS RATNASARI,2PA02
2PA02,Kamis,Psikologi Perkembangan 2 *,7/8/9,D647,DINA KUSUMA ASTUTI,2PA02
2PA02,Sabtu,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA02
2PA02,Sabtu,Psikologi Kepribadian 1,5/6/7,E346,MARCIA MARTHA,2PA02
2PA03,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA03
2PA03,Selasa,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2PA03
2PA03,Rabu,Psikologi Perkembangan 2 *,1/2/3,E348,ZENI AFRILYA,2PA03
2PA03,Rabu,Kode Etik Psikologi,4/5,E348,ALIA ROHANI,2PA03
2PA03,Rabu,Psikologi Kepribadian 1,7/8/9,E223,YUTHIKA JUSFAYANA,2PA03
2PA03,Kamis,Statistika */**,1/2/3,D643,ARIS BUDI SETYAWAN,2PA03
2PA03,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,4/5/6,D643,ANNUR HUSNUL KHOTIMAH,2PA03
2PA03,Kamis,Psikologi Pendidikan,8/9/10,D634,LILIS RATNASARI,2PA03
2PA04,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA04
2PA04,Selasa,Psikologi Perkembangan 2 *,5/6/7,G451,DINA KUSUMA ASTUTI,2PA04
2PA04,Selasa,Kode Etik Psikologi,8/9,G451,RIZQI INTANSARI NUGRAHANI/AMANDA ERDIANA,2PA04
2PA04,Kamis,Statistika */**,1/2/3,F8451,SRI HERMAWATI,2PA04
2PA04,Kamis,Psikologi Kepribadian 1,4/5/6,F8451,ANIE YUSNITA,2PA04
2PA04,Jum'at,Psikodiagnostika 1:Peng.Tes Psi*,2/3/4,F8466,PUTI ANGGRAENI ROSMASURI,2PA04
2PA04,Jum'at,Psikologi Pendidikan,7/8/9,F8466,AMIR ASYIKIN HASIBUAN,2PA04
2PA04,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2PA04
2PA05,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA05
2PA05,Selasa,Psikologi Pendidikan,5/6/7,F8451,MARIA CHRISNATALIA,2PA05
2PA05,Selasa,Psikologi Kepribadian 1,8/9/10,F8451,TETTY WINDA,2PA05
2PA05,Rabu,Kode Etik Psikologi,1/2,E331,ALIA ROHANI,2PA05
2PA05,Rabu,Psikologi Perkembangan 2 *,5/6/7,E449,ZENI AFRILYA,2PA05
2PA05,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,1/2/3,F8462,RATNA MAHARANI HAPSARI,2PA05
2PA05,Kamis,Statistika */**,4/5/6,F8462,SRI HERMAWATI,2PA05
2PA05,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2PA05
2PA06,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA06
2PA06,Selasa,Psikodiagnostika 1:Peng.Tes Psi*,1/2/3,G239,JESSICA JOHANNA,2PA06
2PA06,Selasa,Psikologi Perkembangan 2 *,5/6/7,G116,GUSMILIZAR,2PA06
2PA06,Kamis,Kode Etik Psikologi,4/5,F8473,SALSABILA AINI,2PA06
2PA06,Kamis,Psikologi Kepribadian 1,6/7/8,F8473,REYVA NOVELLA,2PA06
2PA06,Jum'at,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2PA06
2PA06,Sabtu,Psikologi Pendidikan,1/2/3,F8444,PRAESTI SEDJO,2PA06
2PA06,Sabtu,Statistika */**,4/5/6,F8444,MB MIKE SUSMIKANTI,2PA06
2PA07,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA07
2PA07,Selasa,Statistika */**,1/2/3,G444,MOH. EGA ELMAN MISKA,2PA07
2PA07,Selasa,Psikologi Perkembangan 2 *,5/6/7,G217,RETNANINGSIH,2PA07
2PA07,Selasa,Psikologi Kepribadian 1,8/9/10,G217,RAESHANTHY ZSAZSA MARCHELIA H,2PA07
2PA07,Kamis,Kode Etik Psikologi,4/5,F8464,DZIKRA RAHMA SYAKIRAH,2PA07
2PA07,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,8/9/10,F8455,PUTI ANGGRAENI ROSMASURI,2PA07
2PA07,Jum'at,Psikologi Pendidikan,2/3/4,F8444,AMIR ASYIKIN HASIBUAN,2PA07
2PA07,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2PA07
2PA08,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA08
2PA08,Selasa,Psikologi Kepribadian 1,1/2/3,F8445,ABILARAS CIKARANI,2PA08
2PA08,Selasa,Psikologi Perkembangan 2 *,4/5/6,F8445,SISKA SARTIKA,2PA08
2PA08,Selasa,Psikologi Pendidikan,8/9/10,F8442,MARIA CHRISNATALIA,2PA08
2PA08,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,2/3/4,F8456,JESSICA JOHANNA,2PA08
2PA08,Kamis,Kode Etik Psikologi,6/7,F8453,INA ANNISA PUTRI,2PA08
2PA08,Kamis,Statistika */**,8/9/10,F8453,IMAN MURTONO SOENHADJI,2PA08
2PA08,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2PA08
2PA09,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA09
2PA09,Selasa,Psikologi Kepribadian 1,3/4/5,G242,RAESHANTHY ZSAZSA MARCHELIA H,2PA09
2PA09,Selasa,Statistika */**,6/7/8,G242,MOH. EGA ELMAN MISKA,2PA09
2PA09,Kamis,Psikologi Perkembangan 2 *,1/2/3,F8463,RR ALFIATUN SARASATI,2PA09
2PA09,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2PA09
2PA09,Sabtu,Psikodiagnostika 1:Peng.Tes Psi*,1/2/3,E247,ANUGRIATY INDAH ASMARANY,2PA09
2PA09,Sabtu,Kode Etik Psikologi,4/5,E247,FIRLI NURAZIZAH,2PA09
2PA09,Sabtu,Psikologi Pendidikan,8/9/10,E427,ROBY FARHAN,2PA09
2PA10,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA10
2PA10,Selasa,Psikologi Kepribadian 1,4/5/6,F8456,TETTY WINDA,2PA10
2PA10,Selasa,Statistika */**,8/9/10,F8455,DESI PUJIATI,2PA10
2PA10,Rabu,Psikologi Pendidikan,4/5/6,D644,SITI FAUZIAH APRILIA WIJAYA,2PA10
2PA10,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA10
2PA10,Kamis,Psikologi Perkembangan 2 *,5/6/7,F8446,SISKA SARTIKA,2PA10
2PA10,Sabtu,Kode Etik Psikologi,2/3,E442,FIRLI NURAZIZAH,2PA10
2PA10,Sabtu,Psikodiagnostika 1:Peng.Tes Psi*,4/5/6,E442,ANUGRIATY INDAH ASMARANY,2PA10
2PA11,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA11
2PA11,Rabu,Psikologi Kepribadian 1,2/3/4,E442,YUTHIKA JUSFAYANA,2PA11
2PA11,Rabu,Kode Etik Psikologi,6/7,E129,ALIA ROHANI,2PA11
2PA11,Rabu,Psikologi Pendidikan,8/9/10,E129,IRA NORMA PRABAWATI,2PA11
2PA11,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA11
2PA11,Kamis,Statistika */**,5/6/7,D663,SUZANNA LAMRIA SIREGAR,2PA11
2PA11,Kamis,Psikologi Perkembangan 2 *,8/9/10,D663,ALIA RIZKI FAUZIAH,2PA11
2PA11,Sabtu,Psikodiagnostika 1:Peng.Tes Psi*,6/7/8,E246,QUROYZHIN KARTIKA RINI,2PA11
2PA12,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA12
2PA12,Rabu,Psikologi Perkembangan 2 *,1/2/3,D666,GUSMILIZAR,2PA12
2PA12,Rabu,Kode Etik Psikologi,6/7,D666,FITHRICIA EKAYUNI POERWANTY,2PA12
2PA12,Rabu,Statistika */**,8/9/10,D666,TITIEK IREWATI,2PA12
2PA12,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2PA12
2PA12,Jum'at,Psikologi Kepribadian 1,2/3/4,F8441,ADE IRMA SURYANI,2PA12
2PA12,Jum'at,Psikodiagnostika 1:Peng.Tes Psi*,7/8/9,F8441,BELLA CINTIA PUSPITANINGRUM,2PA12
2PA12,Sabtu,Psikologi Pendidikan,4/5/6,E129,ADINDA CUT QONITA,2PA12
2PA13,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA13
2PA13,Selasa,Kode Etik Psikologi,2/3,G221,RIZQI INTANSARI NUGRAHANI/AMANDA ERDIANA,2PA13
2PA13,Selasa,Psikologi Kepribadian 1,4/5/6,G221,AGYL MUHAMMAD DZIKRULLAH,2PA13
2PA13,Selasa,Statistika */**,8/9/10,G218,JOHAN HARLAN,2PA13
2PA13,Rabu,Psikologi Perkembangan 2 *,6/7/8,D614,GUSMILIZAR,2PA13
2PA13,Kamis,Psikologi Pendidikan,4/5/6,F8454,TETTY WINDA,2PA13
2PA13,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,8/9/10,F8482,ANNUR HUSNUL KHOTIMAH,2PA13
2PA13,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2PA13
2PA14,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA14
2PA14,Selasa,Psikologi Kepribadian 1,1/2/3,G316,AGYL MUHAMMAD DZIKRULLAH,2PA14
2PA14,Selasa,Psikodiagnostika 1:Peng.Tes Psi*,5/6/7,G127,URSA MAJORSY,2PA14
2PA14,Selasa,Psikologi Perkembangan 2 *,8/9/10,G127,NETRONA EMRAN,2PA14
2PA14,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2PA14
2PA14,Sabtu,Statistika */**,1/2/3,F8445,MB MIKE SUSMIKANTI,2PA14
2PA14,Sabtu,Psikologi Pendidikan,5/6/7,F8445,PRAESTI SEDJO,2PA14
2PA14,Sabtu,Kode Etik Psikologi,9/10,F8445,FIRLI NURAZIZAH,2PA14
2PA15,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA15
2PA15,Selasa,Psikodiagnostika 1:Peng.Tes Psi*,1/2/3,G127,URSA MAJORSY,2PA15
2PA15,Selasa,Psikologi Perkembangan 2 *,5/6/7,G149,NETRONA EMRAN,2PA15
2PA15,Rabu,Psikologi Kepribadian 1,1/2/3,E523,MARIA CHRISNATALIA,2PA15
2PA15,Rabu,Psikologi Pendidikan,5/6/7,E523,INDRIA PRASTITI,2PA15
2PA15,Rabu,Kode Etik Psikologi,9/10,E122,FITHRICIA EKAYUNI POERWANTY,2PA15
2PA15,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2PA15
2PA15,Sabtu,Statistika */**,4/5/6,E225,SRI RAHAYU NINGSIH,2PA15
2PA16,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA16
2PA16,Selasa,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2PA16
2PA16,Kamis,Psikologi Kepribadian 1,1/2/3,F8466,ANIE YUSNITA,2PA16
2PA16,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,5/6/7,F8467,PUTI ANGGRAENI ROSMASURI,2PA16
2PA16,Kamis,Psikologi Perkembangan 2 *,8/9/10,F8467,SISKA SARTIKA,2PA16
2PA16,Sabtu,Statistika */**,1/2/3,E335,SRI RAHAYU NINGSIH,2PA16
2PA16,Sabtu,Kode Etik Psikologi,6/7,E214,FIRLI NURAZIZAH,2PA16
2PA16,Sabtu,Psikologi Pendidikan,8/9/10,E214,ADINDA CUT QONITA,2PA16
2PA17,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA17
2PA17,Selasa,Kode Etik Psikologi,1/2,G242,FITHRICIA EKAYUNI POERWANTY,2PA17
2PA17,Selasa,Statistika */**,4/5/6,G315,JOHAN HARLAN,2PA17
2PA17,Selasa,Psikologi Perkembangan 2 *,8/9/10,G442,DINA KUSUMA ASTUTI,2PA17
2PA17,Kamis,Psikologi Kepribadian 1,1/2/3,F8442,REYVA NOVELLA,2PA17
2PA17,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,5/6/7,F8456,BELLA CINTIA PUSPITANINGRUM,2PA17
2PA17,Kamis,Psikologi Pendidikan,8/9/10,F8456,TETTY WINDA,2PA17
2PA17,Sabtu,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA17
2PA18,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA18
2PA18,Selasa,Statistika */**,3/4/5,F8465,DESI PUJIATI,2PA18
2PA18,Selasa,Psikologi Kepribadian 1,6/7/8,F8465,ABILARAS CIKARANI,2PA18
2PA18,Rabu,Psikologi Pendidikan,4/5/6,E512,IRA NORMA PRABAWATI,2PA18
2PA18,Kamis,Psikologi Perkembangan 2 *,1/2/3,F8453,DINA KUSUMA ASTUTI,2PA18
2PA18,Kamis,Kode Etik Psikologi,4/5,F8453,INA ANNISA PUTRI,2PA18
2PA18,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,7/8/9,F8451,JESSICA JOHANNA,2PA18
2PA18,Sabtu,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA18
2PA19,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA19
2PA19,Selasa,Psikologi Perkembangan 2 *,1/2/3,G116,GUSMILIZAR,2PA19
2PA19,Selasa,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2PA19
2PA19,Rabu,Psikologi Pendidikan,1/2/3,G128,AMIR ASYIKIN HASIBUAN,2PA19
2PA19,Rabu,Psikologi Kepribadian 1,5/6/7,G442,AZHARIAH NUR BURHANUDDIN ARAFAH,2PA19
2PA19,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,1/2/3,F8473,BELLA CINTIA PUSPITANINGRUM,2PA19
2PA19,Kamis,Statistika */**,5/6/7,F8443,IMAN MURTONO SOENHADJI,2PA19
2PA19,Kamis,Kode Etik Psikologi,8/9,F8443,INA ANNISA PUTRI,2PA19
2PA20,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA20
2PA20,Selasa,Statistika */**,1/2/3,F8472,RETNANINGTYAS WIDYASTUTI,2PA20
2PA20,Selasa,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2PA20
2PA20,Rabu,Psikologi Kepribadian 1,1/2/3,G135,AZHARIAH NUR BURHANUDDIN ARAFAH,2PA20
2PA20,Rabu,Psikologi Pendidikan,5/6/7,G127,AMIR ASYIKIN HASIBUAN,2PA20
2PA20,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,1/2/3,F8465,PUTI ANGGRAENI ROSMASURI,2PA20
2PA20,Kamis,Psikologi Perkembangan 2 *,4/5/6,F8465,RR ALFIATUN SARASATI,2PA20
2PA20,Kamis,Kode Etik Psikologi,9/10,F8473,DZIKRA RAHMA SYAKIRAH,2PA20
2PA21,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA21
2PA21,Selasa,Psikologi Perkembangan 2 *,1/2/3,F8443,SISKA SARTIKA,2PA21
2PA21,Selasa,Psikodiagnostika 1:Peng.Tes Psi*,5/6/7,F8453,JESSICA JOHANNA,2PA21
2PA21,Selasa,Psikologi Kepribadian 1,8/9/10,F8453,QUEENARA / AGYL MUHAMMAD DZIKRULLAH,2PA21
2PA21,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA21
2PA21,Kamis,Kode Etik Psikologi,6/7,F8464,DZIKRA RAHMA SYAKIRAH,2PA21
2PA21,Kamis,Statistika */**,8/9/10,F8464,SRI HERMAWATI,2PA21
2PA21,Sabtu,Psikologi Pendidikan,5/6/7,E348,ROBY FARHAN,2PA21
2PA22,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA22
2PA22,Selasa,Kode Etik Psikologi,3/4,G349,FITHRICIA EKAYUNI POERWANTY,2PA22
2PA22,Selasa,Psikodiagnostika 1:Peng.Tes Psi*,5/6/7,G349,ZENI AFRILYA,2PA22
2PA22,Rabu,Psikologi Pendidikan,1/2/3,E427,INDRIA PRASTITI,2PA22
2PA22,Rabu,Psikologi Kepribadian 1,5/6/7,E442,MARIA CHRISNATALIA,2PA22
2PA22,Kamis,Psikologi Perkembangan 2 *,4/5/6,D636,ALIA RIZKI FAUZIAH,2PA22
2PA22,Kamis,Statistika */**,8/9/10,D654,SUZANNA LAMRIA SIREGAR,2PA22
2PA22,Sabtu,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA22
2PA23,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA23
2PA23,Selasa,Psikologi Pendidikan,1/2/3,G233,NURUL HUDA,2PA23
2PA23,Selasa,Kode Etik Psikologi,6/7,G215,RIZQI INTANSARI NUGRAHANI/AMANDA ERDIANA,2PA23
2PA23,Selasa,Psikologi Perkembangan 2 *,8/9/10,G215,RETNANINGSIH,2PA23
2PA23,Rabu,Statistika */**,1/2/3,E243,ARIS BUDI SETYAWAN,2PA23
2PA23,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2PA23
2PA23,Jum'at,Psikodiagnostika 1:Peng.Tes Psi*,2/3/4,F8454,BELLA CINTIA PUSPITANINGRUM,2PA23
2PA23,Jum'at,Psikologi Kepribadian 1,7/8/9,F8454,ADE IRMA SURYANI,2PA23
2PA24,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA24
2PA24,Selasa,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA24
2PA24,Selasa,Psikologi Perkembangan 2 *,5/6/7,J1216B,SRI NURHAYATI,2PA24
2PA24,Selasa,Psikodiagnostika 1:Peng.Tes Psi*,8/9/10,J1216B,MIMI WAHYUNI,2PA24
2PA24,Rabu,Psikologi Kepribadian 1,1/2/3,J1115A,SITI MUKARROMAH,2PA24
2PA24,Rabu,Kode Etik Psikologi,5/6,J1416A,VIOLA RAKHMAWATI SUPRATMAN,2PA24
2PA24,Kamis,Psikologi Pendidikan,3/4/5,J1219,TRI MARYANI,2PA24
2PA24,Kamis,Statistika */**,6/7/8,J1219,TUBAGUS KIKI KAWAKIBI AZMI,2PA24
2PA25,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA25
2PA25,Selasa,Psikologi Perkembangan 2 *,1/2/3,J1411,SRI NURHAYATI,2PA25
2PA25,Selasa,Psikodiagnostika 1:Peng.Tes Psi*,5/6/7,J1411,MIMI WAHYUNI,2PA25
2PA25,Selasa,Statistika */**,8/9/10,J1411,MARIA Y ARYATI WAHYUNINGRUM,2PA25
2PA25,Rabu,Psikologi Kepribadian 1,1/2/3,J149,AGITA TUNJUNGSARI,2PA25
2PA25,Rabu,Kode Etik Psikologi,6/7,J133B,SRI HARYANI,2PA25
2PA25,Rabu,Psikologi Pendidikan,8/9/10,J133B,DESI SUSIANTI,2PA25
2PA25,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2PA25
2PA26,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA26
2PA26,Rabu,Statistika */**,1/2/3,J1519,AISYAH,2PA26
2PA26,Rabu,Psikologi Pendidikan,5/6/7,J1416B,DESI SUSIANTI,2PA26
2PA26,Rabu,Kode Etik Psikologi,8/9,J123,VIOLA RAKHMAWATI SUPRATMAN,2PA26
2PA26,Kamis,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2PA26
2PA26,Jum'at,Psikodiagnostika 1:Peng.Tes Psi*,2/3/4,J148,MIMI WAHYUNI,2PA26
2PA26,Jum'at,Psikologi Perkembangan 2 *,7/8/9,J1211,AGITA TUNJUNGSARI,2PA26
2PA26,Sabtu,Psikologi Kepribadian 1,4/5/6,J1516B,RINI INDRYAWATI,2PA26
2PA27,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA27
2PA27,Rabu,Kode Etik Psikologi,2/3,J1210,SRI HARYANI,2PA27
2PA27,Rabu,Statistika */**,5/6/7,J1111,AISYAH,2PA27
2PA27,Rabu,Psikologi Perkembangan 2 *,8/9/10,J1111,AGITA TUNJUNGSARI,2PA27
2PA27,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2PA27
2PA27,Jum'at,Psikologi Pendidikan,2/3/4,J1318,A M HERU BASUKI,2PA27
2PA27,Jum'at,Psikodiagnostika 1:Peng.Tes Psi*,7/8/9,J1318,MIMI WAHYUNI,2PA27
2PA27,Sabtu,Psikologi Kepribadian 1,1/2/3,J1318,RINI INDRYAWATI,2PA27
2PA28,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA28
2PA28,Selasa,Psikologi Pendidikan,1/2/3,J1318,DESI SUSIANTI,2PA28
2PA28,Rabu,Statistika */**,1/2/3,J1219,ANITA WASUTININGSIH,2PA28
2PA28,Rabu,Psikologi Kepribadian 1,4/5/6,J1219,AGITA TUNJUNGSARI,2PA28
2PA28,Rabu,Kode Etik Psikologi,8/9,J1216B,SRI HARYANI,2PA28
2PA28,Kamis,Psikologi Perkembangan 2 *,1/2/3,J1518,AFMI FUAD,2PA28
2PA28,Kamis,Psikodiagnostika 1:Peng.Tes Psi*,5/6/7,J1318,MIMI WAHYUNI,2PA28
2PA28,Sabtu,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA28
2PA29,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA29
2PA29,Selasa,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2PA29
2PA29,Rabu,Kode Etik Psikologi,1/2,J153,VIOLA RAKHMAWATI SUPRATMAN,2PA29
2PA29,Rabu,Psikologi Kepribadian 1,5/6/7,J1316A,SITI MUKARROMAH,2PA29
2PA29,Rabu,Statistika */**,8/9/10,J1316A,AISYAH,2PA29
2PA29,Kamis,Psikologi Perkembangan 2 *,4/5/6,J123,AFMI FUAD,2PA29
2PA29,Kamis,Psikologi Pendidikan,7/8/9,J123,TRI MARYANI,2PA29
2PA29,Sabtu,Psikodiagnostika 1:Peng.Tes Psi*,8/9/10,J1411,FRANSISCUS FEBRIANTO,2PA29
2PA30,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA30
2PA30,Selasa,Kode Etik Psikologi,2/3,K284,NURUL QOMARIYAH,2PA30
2PA30,Selasa,Psikologi Kepribadian 1,5/6/7,K249,RINI INDRYAWATI,2PA30
2PA30,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2PA30
2PA30,Jum'at,Psikodiagnostika 1:Peng.Tes Psi*,2/3/4,K294,MEITY ARIANTY,2PA30
2PA30,Jum'at,Psikologi Pendidikan,6/7/8,K165,MARIA CHRISNATALIA,2PA30
2PA30,Sabtu,Psikologi Perkembangan 2 *,3/4/5,K287,SISKA SARTIKA,2PA30
2PA30,Sabtu,Statistika */**,6/7/8,K251,EDI MINAJI PRIBADI,2PA30
2PA31,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA31
2PA31,Selasa,Psikodiagnostika 1:Peng.Tes Psi*,1/2/3,K259,INTAGLIA HARSANTI,2PA31
2PA31,Selasa,Kode Etik Psikologi,4/5,K284,NURUL QOMARIYAH,2PA31
2PA31,Kamis,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2PA31
2PA31,Jum'at,Psikologi Kepribadian 1,1/2/3,K281,PRAESTI SEDJO,2PA31
2PA31,Jum'at,Psikologi Perkembangan 2 *,6/7/8,K294,MEITY ARIANTY,2PA31
2PA31,Sabtu,Statistika */**,3/4/5,K251,EDI MINAJI PRIBADI,2PA31
2PA31,Sabtu,Psikologi Pendidikan,6/7/8,K165,MARIA CHRISNATALIA,2PA31
2PA32,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA32
2PA32,Selasa,Kode Etik Psikologi,1/2,K296,YUDIT OKTARIA KRISTIANI PARDEDE,2PA32
2PA32,Selasa,Psikodiagnostika 1:Peng.Tes Psi*,4/5/6,K259,INTAGLIA HARSANTI,2PA32
2PA32,Rabu,Psikologi Perkembangan 2 *,1/2/3,K255,INDAH CAHYANTI,2PA32
2PA32,Rabu,Statistika */**,5/6/7,K252,FITRI YULIANTI,2PA32
2PA32,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA32
2PA32,Jum'at,Psikologi Pendidikan,2/3/4,K165,MARIA CHRISNATALIA,2PA32
2PA32,Jum'at,Psikologi Kepribadian 1,6/7/8,K281,PRAESTI SEDJO,2PA32
2PA33,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA33
2PA33,Selasa,Statistika */**,1/2/3,K261,SRI WULAN W RATIH,2PA33
2PA33,Selasa,Psikologi Pendidikan,4/5/6,K252,HANNAN,2PA33
2PA33,Kamis,Psikologi Kepribadian 1,2/3/4,K247,AWAN JEMINY PUTRA ENTRIEZA,2PA33
2PA33,Jum'at,Psikodiagnostika 1:Peng.Tes Psi*,6/7/8,K152,RATNA MAHARANI HAPSARI,2PA33
2PA33,Sabtu,Kode Etik Psikologi,1/2,K161,ASKI MARISSA,2PA33
2PA33,Sabtu,Psikologi Perkembangan 2 *,6/7/8,K287,SISKA SARTIKA,2PA33
2PA33,Sabtu,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2PA33
2PA34,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA34
2PA34,Selasa,Psikologi Pendidikan,1/2/3,K252,HANNAN,2PA34
2PA34,Selasa,Statistika */**,4/5/6,K261,SRI WULAN W RATIH,2PA34
2PA34,Rabu,Psikologi Perkembangan 2 *,1/2/3,K271,KENES PRANANDARI,2PA34
2PA34,Kamis,Psikologi Kepribadian 1,5/6/7,K247,AWAN JEMINY PUTRA ENTRIEZA,2PA34
2PA34,Jum'at,Psikodiagnostika 1:Peng.Tes Psi*,2/3/4,K152,RATNA MAHARANI HAPSARI,2PA34
2PA34,Sabtu,Kode Etik Psikologi,3/4,K161,ASKI MARISSA,2PA34
2PA34,Sabtu,Prak. Social Networking&Creative Content,8/9,,TIM DOSEN,2PA34
2PA35,Senin,Social Networking&Creative Conten,,UGTV,TEAM TEACHING,2PA35
2PA35,Selasa,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2PA35
2PA35,Rabu,Psikodiagnostika 1:Peng.Tes Psi*,2/3/4,L241,AMARILYS ANDARITIDYA,2PA35
2PA35,Rabu,Statistika */**,5/6/7,L224,RINA SUGIARTI,2PA35
2PA35,Kamis,Kode Etik Psikologi,2/3,L244,ADE IRMA SURYANI,2PA35
2PA35,Jum'at,Psikologi Kepribadian 1,2/3/4,L241,BELLA AZARINE,2PA35
2PA35,Jum'at,Psikologi Pendidikan,6/7/8,L222,TETTY WINDA,2PA35
2PA35,Sabtu,Psikologi Perkembangan 2 *,2/3/4,L224,MIMI WAHYUNI,2PA35
2PA36,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2PA36
3PA01,Senin,Sosiologi*,1/2,G226,NURUL HUDA,3PA01
3PA01,Senin,Metodologi Penel. Kuantitatif,4/5/6,G112,KRISTIANA DEWAYANI,3PA01
3PA01,Senin,Metode Pengukuran Inteligensi**,8/9/10,G451,ALIVA KEMALA,3PA01
3PA01,Rabu,Psikologi Abnormal,8/9/10,D624,TRIDA CYNTHIA,3PA01
3PA01,Kamis,Psikodiagnostika3:Wawancara**,1/2/3,E327,RACHMI ANGGRAINI,3PA01
3PA01,Kamis,Ergonomi,5/6,E442,GALIH MEDIANA,3PA01
3PA01,Kamis,Psikologi Lintas Budaya,7/8,E442,AZIZAH ZAHRA,3PA01
3PA01,Kamis,Inventori**,9/10,E442,YUDIT OKTARIA KRISTIANI PARDEDE,3PA01
3PA02,Senin,Inventori**,1/2,G444,KARTIKA APRILLIA,3PA02
3PA02,Senin,Sosiologi*,3/4,G444,NURUL HUDA,3PA02
3PA02,Senin,Ergonomi,5/6,G227,REYVA NOVELLA,3PA02
3PA02,Senin,Metodologi Penel. Kuantitatif,8/9/10,G313,KRISTIANA DEWAYANI,3PA02
3PA02,Selasa,Psikologi Lintas Budaya,3/4,G441,QUEENARA / BELLA AZARINE,3PA02
3PA02,Selasa,Psikodiagnostika3:Wawancara**,7/8/9,G238,RACHMI ANGGRAINI,3PA02
3PA02,Kamis,Metode Pengukuran Inteligensi**,2/3/4,E316,APRILLIA MAHARANI AYUNINGSIH,3PA02
3PA02,Kamis,Psikologi Abnormal,5/6/7,E316,TRIDA CYNTHIA,3PA02
3PA03,Senin,Psikodiagnostika3:Wawancara**,1/2/3,G125,QUEENARA / ALIA RIZKI FAUZIAH,3PA03
3PA03,Senin,Inventori**,5/6,G218,APRILLIA MAHARANI AYUNINGSIH,3PA03
3PA03,Senin,Metodologi Penel. Kuantitatif,8/9/10,G424,AGYL MUHAMMAD DZIKRULLAH,3PA03
3PA03,Selasa,Psikologi Lintas Budaya,1/2,G217,QUEENARA / BELLA AZARINE,3PA03
3PA03,Selasa,Sosiologi*,5/6,G144,KHAIRUNNISA HUTAGALUNG,3PA03
3PA03,Sabtu,Metode Pengukuran Inteligensi**,1/2/3,E441,DIAH NUTRISIANI,3PA03
3PA03,Sabtu,Psikologi Abnormal,4/5/6,E441,AZHARIAH NUR BURHANUDDIN ARAFAH,3PA03
3PA03,Sabtu,Ergonomi,7/8,E441,AWAN JEMINY PUTRA ENTRIEZA,3PA03
3PA04,Senin,Metodologi Penel. Kuantitatif,5/6/7,G348,IRA NORMA PRABAWATI,3PA04
3PA04,Senin,Psikologi Lintas Budaya,8/9,G348,NABILA RAHMA DEWI,3PA04
3PA04,Selasa,Psikologi Abnormal,2/3/4,E344,DIANA ROHAYATI,3PA04
3PA04,Selasa,Ergonomi,5/6,E344,HIKMATUNNAZILAH,3PA04
3PA04,Selasa,Inventori**,8/9,E247,RATNA MAHARANI HAPSARI,3PA04
3PA04,Kamis,Psikodiagnostika3:Wawancara**,2/3/4,G245,ALIVA KEMALA,3PA04
3PA04,Kamis,Metode Pengukuran Inteligensi**,5/6/7,G245,DIAN FITRI,3PA04
3PA04,Kamis,Sosiologi*,9/10,G137,AZZAHRA JIHAN CHANI,3PA04
3PA05,Senin,Ergonomi,3/4,G224,REYVA NOVELLA,3PA05
3PA05,Senin,Psikologi Lintas Budaya,6/7,G243,HESTI PUSPITARINI,3PA05
3PA05,Senin,Sosiologi*,8/9,G243,GITA TRI RAHAYU,3PA05
3PA05,Selasa,Psikodiagnostika3:Wawancara**,1/2/3,E213,ASKI MARISSA,3PA05
3PA05,Selasa,Inventori**,5/6,E243,RATNA MAHARANI HAPSARI,3PA05
3PA05,Selasa,Metodologi Penel. Kuantitatif,7/8/9,E243,DITA FITRI RACHMAWATI,3PA05
3PA05,Kamis,Metode Pengukuran Inteligensi**,5/6/7,E345,AJENG FURIDA CITRA,3PA05
3PA05,Kamis,Psikologi Abnormal,8/9/10,E345,TRIDA CYNTHIA,3PA05
3PA06,Selasa,Inventori**,3/4,E449,ANANDA AVAVIDYA,3PA06
3PA06,Selasa,Sosiologi*,5/6,E449,PUTRI YULI ASTUTI,3PA06
3PA06,Selasa,Psikologi Lintas Budaya,8/9,E348,BELLA AZARINE,3PA06
3PA06,Rabu,Psikologi Abnormal,1/2/3,F8454,NI MADE TAGANING/SALSABILA NAJMIDHIA BUD,3PA06
3PA06,Rabu,Metodologi Penel. Kuantitatif,5/6/7,F8454,MARCIA MARTHA,3PA06
3PA06,Kamis,Metode Pengukuran Inteligensi**,1/2/3,G137,WARDA LISA,3PA06
3PA06,Kamis,Psikodiagnostika3:Wawancara**,5/6/7,G224,META DAMARIYANTI,3PA06
3PA06,Kamis,Ergonomi,9/10,G451,GALIH MEDIANA,3PA06
3PA07,Senin,Psikodiagnostika3:Wawancara**,1/2/3,E122,AJENG FURIDA CITRA,3PA07
3PA07,Senin,Ergonomi,4/5,E122,YUTHIKA JUSFAYANA,3PA07
3PA07,Senin,Psikologi Lintas Budaya,7/8,E121,TYAS SALBINA,3PA07
3PA07,Selasa,Metode Pengukuran Inteligensi**,1/2/3,D644,HALLY WELIANGAN,3PA07
3PA07,Selasa,Metodologi Penel. Kuantitatif,5/6/7,D613,NI PUTU EKA CHANDRA UDAYANI,3PA07
3PA07,Kamis,Inventori**,1/2,G315,ASKI MARISSA,3PA07
3PA07,Kamis,Sosiologi*,3/4,G315,KHAIRUNNISA HUTAGALUNG,3PA07
3PA07,Kamis,Psikologi Abnormal,5/6/7,G315,ROLLA APNOZA,3PA07
3PA08,Senin,Ergonomi,1/2,E334,YUTHIKA JUSFAYANA,3PA08
3PA08,Senin,Psikodiagnostika3:Wawancara**,4/5/6,E121,AJENG FURIDA CITRA,3PA08
3PA08,Senin,Psikologi Lintas Budaya,9/10,E222,TYAS SALBINA,3PA08
3PA08,Selasa,Psikologi Abnormal,1/2/3,G451,MEITY ARIANTY,3PA08
3PA08,Selasa,Metode Pengukuran Inteligensi**,5/6/7,G218,INDRIA HAPSARI,3PA08
3PA08,Kamis,Inventori**,1/2,G452,BELLA AZARINE,3PA08
3PA08,Kamis,Metodologi Penel. Kuantitatif,3/4/5,G452,ABILARAS CIKARANI,3PA08
3PA08,Kamis,Sosiologi*,7/8,G421,KHAIRUNNISA HUTAGALUNG,3PA08
3PA09,Selasa,Psikologi Abnormal,1/2/3,D651,DIAN FITRI,3PA09
3PA09,Selasa,Metode Pengukuran Inteligensi**,5/6/7,D635,HALLY WELIANGAN,3PA09
3PA09,Selasa,Psikologi Lintas Budaya,8/9,D635,MUTIARA HENNI DAMAYANTI,3PA09
3PA09,Kamis,Ergonomi,1/2,E244,NETRONA EMRAN,3PA09
3PA09,Kamis,Sosiologi*,3/4,E244,WIDAD PRATIWI,3PA09
3PA09,Kamis,Metodologi Penel. Kuantitatif,5/6/7,E244,SEKAR AYUNING ATI,3PA09
3PA09,Jum'at,Inventori**,3/4,E138,ANNUR HUSNUL KHOTIMAH,3PA09
3PA09,Jum'at,Psikodiagnostika3:Wawancara**,7/8/9,E444,LINOTA DASRIL MAMAYO,3PA09
3PA10,Selasa,Ergonomi,2/3,D665,ARUM PANDAN SARI,3PA10
3PA10,Selasa,Metodologi Penel. Kuantitatif,4/5/6,D665,NILAM WIDYARINI,3PA10
3PA10,Kamis,Psikologi Abnormal,1/2/3,G431,KENES PRANANDARI,3PA10
3PA10,Kamis,Metode Pengukuran Inteligensi**,5/6/7,G445,DIANA ROHAYATI,3PA10
3PA10,Kamis,Psikodiagnostika3:Wawancara**,8/9/10,G445,META DAMARIYANTI,3PA10
3PA10,Jum'at,Sosiologi*,3/4,E247,GITA TRI RAHAYU,3PA10
3PA10,Jum'at,Psikologi Lintas Budaya,7/8,E244,RISKA NOVIANTI,3PA10
3PA10,Jum'at,Inventori**,9/10,E244,ANNUR HUSNUL KHOTIMAH,3PA10
3PA11,Selasa,Sosiologi*,1/2,E446,PUTRI YULI ASTUTI,3PA11
3PA11,Selasa,Psikologi Abnormal,5/6/7,E446,SENDI SATRIADI,3PA11
3PA11,Rabu,Psikodiagnostika3:Wawancara**,2/3/4,E521,ANUGRIATY INDAH ASMARANY,3PA11
3PA11,Kamis,Metodologi Penel. Kuantitatif,1/2/3,E511,SEKAR AYUNING ATI,3PA11
3PA11,Kamis,Metode Pengukuran Inteligensi**,5/6/7,E324,APRILLIA MAHARANI AYUNINGSIH,3PA11
3PA11,Kamis,Ergonomi,8/9,E324,NETRONA EMRAN,3PA11
3PA11,Jum'at,Inventori**,7/8,E242,ANNUR HUSNUL KHOTIMAH,3PA11
3PA11,Jum'at,Psikologi Lintas Budaya,9/10,E242,RISKA NOVIANTI,3PA11
3PA12,Senin,Psikologi Abnormal,1/2/3,F8445,AYU MANDARI,3PA12
3PA12,Selasa,Psikologi Lintas Budaya,6/7,D622,MUTIARA HENNI DAMAYANTI,3PA12
3PA12,Selasa,Metodologi Penel. Kuantitatif,8/9/10,D622,NI PUTU EKA CHANDRA UDAYANI,3PA12
3PA12,Kamis,Sosiologi*,1/2,E238,WIDAD PRATIWI,3PA12
3PA12,Kamis,Inventori**,3/4,E238,YUDIT OKTARIA KRISTIANI PARDEDE,3PA12
3PA12,Kamis,Ergonomi,6/7,E426,NETRONA EMRAN,3PA12
3PA12,Kamis,Metode Pengukuran Inteligensi**,8/9/10,E426,AJENG FURIDA CITRA,3PA12
3PA12,Jum'at,Psikodiagnostika3:Wawancara**,2/3/4,E338,LINOTA DASRIL MAMAYO,3PA12
3PA13,Senin,Psikologi Lintas Budaya,2/3,G342,TYAS SALBINA,3PA13
3PA13,Senin,Sosiologi*,5/6,G221,NURUL HUDA,3PA13
3PA13,Senin,Inventori**,7/8,G221,APRILLIA MAHARANI AYUNINGSIH,3PA13
3PA13,Selasa,Psikodiagnostika3:Wawancara**,4/5/6,G112,RACHMI ANGGRAINI,3PA13
3PA13,Selasa,Metode Pengukuran Inteligensi**,8/9/10,G314,INDRIA HAPSARI,3PA13
3PA13,Kamis,Metodologi Penel. Kuantitatif,1/2/3,G148,NURLINTANG PUTRI AYUNING RIZAL,3PA13
3PA13,Kamis,Psikologi Abnormal,4/5/6,G148,KENES PRANANDARI,3PA13
3PA13,Kamis,Ergonomi,8/9,G231,PUTRI YULI ASTUTI,3PA13
3PA14,Senin,Sosiologi*,1/2,G143,AZZAHRA JIHAN CHANI,3PA14
3PA14,Senin,Inventori**,3/4,G143,KARTIKA APRILLIA,3PA14
3PA14,Senin,Psikologi Lintas Budaya,5/6,G143,TYAS SALBINA,3PA14
3PA14,Rabu,Metodologi Penel. Kuantitatif,1/2/3,F8465,MARCIA MARTHA,3PA14
3PA14,Rabu,Psikologi Abnormal,5/6/7,F8482,NI MADE TAGANING/SALSABILA NAJMIDHIA BUD,3PA14
3PA14,Kamis,Ergonomi,1/2,G442,PUTRI YULI ASTUTI,3PA14
3PA14,Kamis,Psikodiagnostika3:Wawancara**,4/5/6,G421,LIA AULIA FACHRIAL,3PA14
3PA14,Kamis,Metode Pengukuran Inteligensi**,8/9/10,G242,DIANA ROHAYATI,3PA14
3PA15,Senin,Ergonomi,1/2,G224,REYVA NOVELLA,3PA15
3PA15,Senin,Psikologi Lintas Budaya,4/5,G243,NABILA RAHMA DEWI,3PA15
3PA15,Senin,Sosiologi*,7/8,G421,HAYATUN NAIMAH,3PA15
3PA15,Senin,Inventori**,9/10,G421,APRILLIA MAHARANI AYUNINGSIH,3PA15
3PA15,Selasa,Metodologi Penel. Kuantitatif,3/4/5,E341,DITA FITRI RACHMAWATI,3PA15
3PA15,Selasa,Metode Pengukuran Inteligensi**,7/8/9,E139,VINA PUSPITA,3PA15
3PA15,Kamis,Psikodiagnostika3:Wawancara**,4/5/6,E217,RACHMI ANGGRAINI,3PA15
3PA15,Kamis,Psikologi Abnormal,8/9/10,E449,ROLLA APNOZA,3PA15
3PA16,Senin,Sosiologi*,3/4,G424,AZZAHRA JIHAN CHANI,3PA16
3PA16,Senin,Psikologi Lintas Budaya,6/7,G2410,NABILA RAHMA DEWI,3PA16
3PA16,Selasa,Ergonomi,1/2,E522,HIKMATUNNAZILAH,3PA16
3PA16,Selasa,Metode Pengukuran Inteligensi**,3/4/5,E522,VINA PUSPITA,3PA16
3PA16,Selasa,Psikologi Abnormal,7/8/9,E242,DIANA ROHAYATI,3PA16
3PA16,Kamis,Psikodiagnostika3:Wawancara**,2/3/4,G345,WIDURI NUGRAHANY,3PA16
3PA16,Kamis,Metodologi Penel. Kuantitatif,6/7/8,G452,ABILARAS CIKARANI,3PA16
3PA16,Kamis,Inventori**,9/10,G452,BELLA AZARINE,3PA16
3PA17,Selasa,Psikologi Lintas Budaya,2/3,G237,MUTIARA HENNI DAMAYANTI,3PA17
3PA17,Selasa,Psikologi Abnormal,5/6/7,G139,MEITY ARIANTY,3PA17
3PA17,Selasa,Sosiologi*,8/9,G139,KHAIRUNNISA HUTAGALUNG,3PA17
3PA17,Kamis,Ergonomi,1/2,G244,YULIANTO SADEWO,3PA17
3PA17,Kamis,Inventori**,3/4,G244,ASKI MARISSA,3PA17
3PA17,Kamis,Psikodiagnostika3:Wawancara**,6/7/8,G348,WIDURI NUGRAHANY,3PA17
3PA17,Jum'at,Metode Pengukuran Inteligensi**,2/3/4,F8442,SENDI SATRIADI,3PA17
3PA17,Jum'at,Metodologi Penel. Kuantitatif,7/8/9,F8442,KRISTIANA DEWAYANI,3PA17
3PA18,Senin,Psikodiagnostika3:Wawancara**,1/2/3,F8464,AMARILYS ANDARITIDYA,3PA18
3PA18,Senin,Psikologi Abnormal,4/5/6,F8464,AYU MANDARI,3PA18
3PA18,Kamis,Inventori**,1/2,G441,TIARA RIZKI LARASATI,3PA18
3PA18,Kamis,Ergonomi,3/4,G441,YULIANTO SADEWO,3PA18
3PA18,Kamis,Sosiologi*,7/8,G2410,AZZAHRA JIHAN CHANI,3PA18
3PA18,Kamis,Psikologi Lintas Budaya,9/10,G2410,KHAIRUNNISA HUTAGALUNG,3PA18
3PA18,Jum'at,Metodologi Penel. Kuantitatif,2/3/4,F8443,KRISTIANA DEWAYANI,3PA18
3PA18,Jum'at,Metode Pengukuran Inteligensi**,7/8/9,F8443,SENDI SATRIADI,3PA18
3PA19,Senin,Metodologi Penel. Kuantitatif,1/2/3,E124,NURLINTANG PUTRI AYUNING RIZAL,3PA19
3PA19,Senin,Metode Pengukuran Inteligensi**,5/6/7,E223,ALIVA KEMALA,3PA19
3PA19,Selasa,Sosiologi*,3/4,E312,PUTRI YULI ASTUTI,3PA19
3PA19,Selasa,Psikologi Lintas Budaya,5/6,E312,BELLA AZARINE,3PA19
3PA19,Selasa,Psikologi Abnormal,8/9/10,E138,LINOTA DASRIL MAMAYO,3PA19
3PA19,Kamis,Psikodiagnostika3:Wawancara**,1/2/3,G114,LIA AULIA FACHRIAL,3PA19
3PA19,Kamis,Ergonomi,5/6,G244,PUTRI YULI ASTUTI,3PA19
3PA19,Kamis,Inventori**,7/8,G244,TIARA RIZKI LARASATI,3PA19
3PA20,Senin,Metodologi Penel. Kuantitatif,5/6/7,F8441,NURLINTANG PUTRI AYUNING RIZAL,3PA20
3PA20,Selasa,Psikologi Abnormal,1/2/3,E435,SENDI SATRIADI,3PA20
3PA20,Selasa,Ergonomi,5/6,E217,ARUM PANDAN SARI,3PA20
3PA20,Rabu,Psikodiagnostika3:Wawancara**,6/7/8,F8444,ANUGRIATY INDAH ASMARANY,3PA20
3PA20,Kamis,Psikologi Lintas Budaya,1/2,G342,AZIZAH ZAHRA,3PA20
3PA20,Kamis,Inventori**,3/4,G342,TIARA RIZKI LARASATI,3PA20
3PA20,Kamis,Metode Pengukuran Inteligensi**,5/6/7,G125,AMARILYS ANDARITIDYA,3PA20
3PA20,Kamis,Sosiologi*,9/10,G453,REALITA SEREEN PREVIARZYA,3PA20
3PA21,Senin,Sosiologi*,2/3,G242,HAYATUN NAIMAH,3PA21
3PA21,Senin,Psikodiagnostika3:Wawancara**,5/6/7,G344,MEITY ARIANTY,3PA21
3PA21,Senin,Psikologi Lintas Budaya,8/9,G344,RISKA NOVIANTI,3PA21
3PA21,Selasa,Metodologi Penel. Kuantitatif,1/2/3,D654,NILAM WIDYARINI,3PA21
3PA21,Selasa,Psikologi Abnormal,4/5/6,D654,DIAN FITRI,3PA21
3PA21,Kamis,Ergonomi,3/4,G247,PUTRI YULI ASTUTI,3PA21
3PA21,Kamis,Inventori**,6/7,G444,ASKI MARISSA,3PA21
3PA21,Kamis,Metode Pengukuran Inteligensi**,8/9/10,G127,AMARILYS ANDARITIDYA,3PA21
3PA22,Senin,Sosiologi*,5/6,G149,HAYATUN NAIMAH,3PA22
3PA22,Senin,Metodologi Penel. Kuantitatif,8/9/10,G2410,IRA NORMA PRABAWATI,3PA22
3PA22,Rabu,Psikologi Abnormal,2/3/4,D635,META DAMARIYANTI,3PA22
3PA22,Kamis,Psikodiagnostika3:Wawancara**,1/2/3,E449,AYU MANDARI,3PA22
3PA22,Kamis,Psikologi Lintas Budaya,4/5,E449,AZIZAH ZAHRA,3PA22
3PA22,Kamis,Ergonomi,7/8,E448,GALIH MEDIANA,3PA22
3PA22,Kamis,Inventori**,9/10,E448,TIARA RIZKI LARASATI,3PA22
3PA22,Jum'at,Metode Pengukuran Inteligensi**,7/8/9,E311,HALLY WELIANGAN,3PA22
3PA23,Selasa,Metodologi Penel. Kuantitatif,2/3/4,E414,ANITA ZULKAIDA,3PA23
3PA23,Selasa,Psikodiagnostika3:Wawancara**,5/6/7,E414,ASKI MARISSA,3PA23
3PA23,Selasa,Ergonomi,9/10,E424,HIKMATUNNAZILAH,3PA23
3PA23,Rabu,Psikologi Abnormal,5/6/7,D632,TRIDA CYNTHIA,3PA23
3PA23,Kamis,Psikologi Lintas Budaya,1/2,E423,KHAIRUNNISA HUTAGALUNG,3PA23
3PA23,Kamis,Inventori**,5/6,E446,YUDIT OKTARIA KRISTIANI PARDEDE,3PA23
3PA23,Jum'at,Metode Pengukuran Inteligensi**,2/3/4,E314,HALLY WELIANGAN,3PA23
3PA23,Jum'at,Sosiologi*,7/8,E433,GITA TRI RAHAYU,3PA23
3PA24,Senin,Psikologi Lintas Budaya,1/2,F8444,GITA TRI RAHAYU,3PA24
3PA24,Senin,Sosiologi*,3/4,F8444,REALITA SEREEN PREVIARZYA,3PA24
3PA24,Senin,Ergonomi,7/8,F8444,YUTHIKA JUSFAYANA,3PA24
3PA24,Rabu,Metodologi Penel. Kuantitatif,2/3/4,D625,PRAESTI SEDJO,3PA24
3PA24,Rabu,Psikologi Abnormal,7/8/9,D625,META DAMARIYANTI,3PA24
3PA24,Kamis,Inventori**,1/2,E444,YUDIT OKTARIA KRISTIANI PARDEDE,3PA24
3PA24,Kamis,Psikodiagnostika3:Wawancara**,5/6/7,E348,AYU MANDARI,3PA24
3PA24,Sabtu,Metode Pengukuran Inteligensi**,1/2/3,E522,LIDYA CATRUNADA,3PA24
3PA25,Senin,Psikologi Lintas Budaya,2/3,G243,HESTI PUSPITARINI,3PA25
3PA25,Senin,Metodologi Penel. Kuantitatif,5/6/7,G424,AGYL MUHAMMAD DZIKRULLAH,3PA25
3PA25,Selasa,Inventori**,1/2,E441,ANANDA AVAVIDYA,3PA25
3PA25,Selasa,Psikologi Abnormal,4/5/6,E441,LINOTA DASRIL MAMAYO,3PA25
3PA25,Selasa,Ergonomi,7/8,E441,HIKMATUNNAZILAH,3PA25
3PA25,Kamis,Metode Pengukuran Inteligensi**,1/2/3,G222,DIAN FITRI,3PA25
3PA25,Kamis,Sosiologi*,5/6,G454,REALITA SEREEN PREVIARZYA,3PA25
3PA25,Kamis,Psikodiagnostika3:Wawancara**,7/8/9,G454,ALIVA KEMALA,3PA25
3PA26,Senin,Sosiologi*,5/6,G454,WIDAD PRATIWI,3PA26
3PA26,Senin,Psikologi Lintas Budaya,8/9,G136,HESTI PUSPITARINI,3PA26
3PA26,Selasa,Psikodiagnostika3:Wawancara**,1/2/3,E132,ALIA RIZKI FAUZIAH,3PA26
3PA26,Selasa,Inventori**,5/6,E427,ANANDA AVAVIDYA,3PA26
3PA26,Selasa,Metodologi Penel. Kuantitatif,7/8/9,E427,ANITA ZULKAIDA,3PA26
3PA26,Sabtu,Psikologi Abnormal,2/3/4,E511,CLAUDIA R / LINOTA DASRIL MAMAYO,3PA26
3PA26,Sabtu,Ergonomi,5/6,E516,AWAN JEMINY PUTRA ENTRIEZA,3PA26
3PA26,Sabtu,Metode Pengukuran Inteligensi**,8/9/10,E516,LIDYA CATRUNADA,3PA26
3PA27,Senin,Psikologi Lintas Budaya,1/2,F8455,NABILA RAHMA DEWI,3PA27
3PA27,Senin,Sosiologi*,5/6,F8462,GITA TRI RAHAYU,3PA27
3PA27,Selasa,Inventori**,2/3,E346,RATNA MAHARANI HAPSARI,3PA27
3PA27,Selasa,Psikodiagnostika3:Wawancara**,5/6/7,E343,ALIA RIZKI FAUZIAH,3PA27
3PA27,Selasa,Ergonomi,8/9,E343,ARUM PANDAN SARI,3PA27
3PA27,Rabu,Metodologi Penel. Kuantitatif,6/7/8,D635,PRAESTI SEDJO,3PA27
3PA27,Kamis,Psikologi Abnormal,2/3/4,G347,ROLLA APNOZA,3PA27
3PA27,Kamis,Metode Pengukuran Inteligensi**,5/6/7,G347,WARDA LISA,3PA27
3PA28,Senin,Psikodiagnostika3:Wawancara**,1/2/3,G431,MEITY ARIANTY,3PA28
3PA28,Senin,Psikologi Lintas Budaya,5/6,G137,RISKA NOVIANTI,3PA28
3PA28,Senin,Sosiologi*,7/8,G137,WIDAD PRATIWI,3PA28
3PA28,Kamis,Inventori**,3/4,G444,BELLA AZARINE,3PA28
3PA28,Kamis,Metodologi Penel. Kuantitatif,6/7/8,G451,INDAH CAHYANTI,3PA28
3PA28,Sabtu,Psikologi Abnormal,1/2/3,E413,AZHARIAH NUR BURHANUDDIN ARAFAH,3PA28
3PA28,Sabtu,Metode Pengukuran Inteligensi**,5/6/7,E413,DIAH NUTRISIANI,3PA28
3PA28,Sabtu,Ergonomi,9/10,E413,AWAN JEMINY PUTRA ENTRIEZA,3PA28
3PA29,Senin,Sosiologi*,1/2,F8442,REALITA SEREEN PREVIARZYA,3PA29
3PA29,Senin,Psikologi Lintas Budaya,3/4,F8442,GITA TRI RAHAYU,3PA29
3PA29,Senin,Psikodiagnostika3:Wawancara**,5/6/7,F8442,AMARILYS ANDARITIDYA,3PA29
3PA29,Kamis,Metodologi Penel. Kuantitatif,2/3/4,G242,INDAH CAHYANTI,3PA29
3PA29,Kamis,Inventori**,6/7,G136,BELLA AZARINE,3PA29
3PA29,Sabtu,Ergonomi,1/2,E343,AWAN JEMINY PUTRA ENTRIEZA,3PA29
3PA29,Sabtu,Metode Pengukuran Inteligensi**,4/5/6,E343,LIDYA CATRUNADA,3PA29
3PA29,Sabtu,Psikologi Abnormal,7/8/9,E343,CLAUDIA R / SALSABILA NAJMIDHIA BUDI,3PA29
3PA30,Senin,Metodologi Penel. Kuantitatif,2/3/4,J60905,SITI MUKARROMAH,3PA30
3PA30,Senin,Psikodiagnostika3:Wawancara**,5/6/7,J60905,NITA SRI HANDAYANI,3PA30
3PA30,Selasa,Sosiologi*,3/4,J5242,QUEENARA / VONNY WIJAYA,3PA30
3PA30,Selasa,Ergonomi,5/6,J5242,ISLAMIDIENA DHEANANDA PUTRI,3PA30
3PA30,Selasa,Psikologi Abnormal,8/9/10,J5234,NATALIA KONRADUS,3PA30
3PA30,Rabu,Metode Pengukuran Inteligensi**,1/2/3,J148,HENNY REGINA SALVE,3PA30
3PA30,Rabu,Psikologi Lintas Budaya,5/6,J1411,RINI INDRYAWATI,3PA30
3PA30,Rabu,Inventori**,7/8,J1611,NITA SRI HANDAYANI,3PA30
3PA31,Senin,Sosiologi*,1/2,J60906,VONNY WIJAYA,3PA31
3PA31,Senin,Metode Pengukuran Inteligensi**,4/5/6,J60906,ADISTI NATALIA,3PA31
3PA31,Senin,Psikodiagnostika3:Wawancara**,8/9/10,J60906,NURUL QOMARIYAH,3PA31
3PA31,Selasa,Inventori**,5/6,J5243,DWI GITA VERASARI,3PA31
3PA31,Selasa,Metodologi Penel. Kuantitatif,7/8/9,J5243,TASHA EKAPUTRI PERMATASARI,3PA31
3PA31,Rabu,Psikologi Lintas Budaya,1/2,J158,QUEENARA / VONNY WIJAYA,3PA31
3PA31,Rabu,Psikologi Abnormal,4/5/6,J148,ADISTI NATALIA,3PA31
3PA31,Rabu,Ergonomi,7/8,J148,MARDIANTI,3PA31
3PA32,Senin,Psikodiagnostika3:Wawancara**,1/2/3,J61001,NURUL QOMARIYAH,3PA32
3PA32,Senin,Metode Pengukuran Inteligensi**,4/5/6,J61001,HENNY REGINA SALVE,3PA32
3PA32,Senin,Sosiologi*,8/9,J61001,VONNY WIJAYA,3PA32
3PA32,Selasa,Inventori**,7/8,J5223,DWI GITA VERASARI,3PA32
3PA32,Selasa,Ergonomi,9/10,J5223,ISLAMIDIENA DHEANANDA PUTRI,3PA32
3PA32,Sabtu,Metodologi Penel. Kuantitatif,1/2/3,J163,INGE ANDRIANI,3PA32
3PA32,Sabtu,Psikologi Abnormal,4/5/6,J163,FRANSISCUS FEBRIANTO,3PA32
3PA32,Sabtu,Psikologi Lintas Budaya,8/9,J163,CINDY AUDRIA YUNITA,3PA32
3PA33,Senin,Psikodiagnostika3:Wawancara**,1/2/3,J60907,NITA SRI HANDAYANI,3PA33
3PA33,Senin,Sosiologi*,4/5,J60907,VONNY WIJAYA,3PA33
3PA33,Selasa,Inventori**,1/2,J5222,DWI GITA VERASARI,3PA33
3PA33,Selasa,Psikologi Abnormal,4/5/6,J5222,NATALIA KONRADUS,3PA33
3PA33,Selasa,Ergonomi,7/8,J5222,ISLAMIDIENA DHEANANDA PUTRI,3PA33
3PA33,Rabu,Metodologi Penel. Kuantitatif,1/2/3,J1523,INGE ANDRIANI,3PA33
3PA33,Rabu,Metode Pengukuran Inteligensi**,5/6/7,J1216B,HENNY REGINA SALVE,3PA33
3PA33,Rabu,Psikologi Lintas Budaya,9/10,J144,RINI INDRYAWATI,3PA33
3PA34,Senin,Metode Pengukuran Inteligensi**,1/2/3,J61002,ADISTI NATALIA,3PA34
3PA34,Senin,Psikodiagnostika3:Wawancara**,5/6/7,J61002,NURUL QOMARIYAH,3PA34
3PA34,Selasa,Ergonomi,1/2,J5231,ISLAMIDIENA DHEANANDA PUTRI,3PA34
3PA34,Selasa,Inventori**,3/4,J5231,DWI GITA VERASARI,3PA34
3PA34,Rabu,Metodologi Penel. Kuantitatif,5/6/7,J118,INGE ANDRIANI,3PA34
3PA34,Rabu,Psikologi Abnormal,8/9/10,J118,NATALIA KONRADUS,3PA34
3PA34,Sabtu,Psikologi Lintas Budaya,1/2,J1411,CINDY AUDRIA YUNITA,3PA34
3PA34,Sabtu,Sosiologi*,3/4,J1411,CINDY AUDRIA YUNITA,3PA34
3PA35,Senin,Metode Pengukuran Inteligensi**,1/2/3,J60903,HENNY REGINA SALVE,3PA35
3PA35,Senin,Psikodiagnostika3:Wawancara**,5/6/7,J60903,DWI GITA VERASARI,3PA35
3PA35,Selasa,Psikologi Abnormal,1/2/3,J5241,NATALIA KONRADUS,3PA35
3PA35,Selasa,Metodologi Penel. Kuantitatif,4/5/6,J5241,TASHA EKAPUTRI PERMATASARI,3PA35
3PA35,Rabu,Ergonomi,1/2,J1412,MARDIANTI,3PA35
3PA35,Rabu,Inventori**,5/6,J1516B,NITA SRI HANDAYANI,3PA35
3PA35,Rabu,Psikologi Lintas Budaya,7/8,J1516B,RINI INDRYAWATI,3PA35
3PA35,Rabu,Sosiologi*,9/10,J1516B,VONNY WIJAYA,3PA35
3PA36,Senin,Psikodiagnostika3:Wawancara**,2/3/4,J60904,DWI GITA VERASARI,3PA36
3PA36,Senin,Sosiologi*,6/7,J60904,VONNY WIJAYA,3PA36
3PA36,Senin,Metodologi Penel. Kuantitatif,8/9/10,J60904,SITI MUKARROMAH,3PA36
3PA36,Rabu,Inventori**,1/2,J1312,NITA SRI HANDAYANI,3PA36
3PA36,Rabu,Ergonomi,4/5,J143,MARDIANTI,3PA36
3PA36,Rabu,Metode Pengukuran Inteligensi**,7/8/9,J1311,ADISTI NATALIA,3PA36
3PA36,Sabtu,Psikologi Abnormal,1/2/3,J1424,FRANSISCUS FEBRIANTO,3PA36
3PA36,Sabtu,Psikologi Lintas Budaya,5/6,J1416A,CINDY AUDRIA YUNITA,3PA36
3PA37,Selasa,Psikologi Lintas Budaya,1/2,K249,RINI INDRYAWATI,3PA37
3PA37,Selasa,Inventori**,3/4,K296,YUDIT OKTARIA KRISTIANI PARDEDE,3PA37
3PA37,Selasa,Metode Pengukuran Inteligensi**,7/8/9,K242,BELLA CINTIA PUSPITANINGRUM,3PA37
3PA37,Jum'at,Sosiologi*,1/2,K267,INGE ANDRIANI,3PA37
3PA37,Jum'at,Ergonomi,3/4,K251,HAYATUN NAIMAH,3PA37
3PA37,Jum'at,Metodologi Penel. Kuantitatif,6/7/8,K133,AGYL MUHAMMAD DZIKRULLAH,3PA37
3PA37,Sabtu,Psikologi Abnormal,1/2/3,K292,LUTFIYAH,3PA37
3PA37,Sabtu,Psikodiagnostika3:Wawancara**,4/5/6,K154,AJENG FURIDA CITRA,3PA37
3PA38,Senin,Metodologi Penel. Kuantitatif,2/3/4,K154,DITA FITRI RACHMAWATI,3PA38
3PA38,Selasa,Psikodiagnostika3:Wawancara**,1/2/3,K155,ANUGRIATY INDAH ASMARANY,3PA38
3PA38,Selasa,Metode Pengukuran Inteligensi**,4/5/6,K242,BELLA CINTIA PUSPITANINGRUM,3PA38
3PA38,Rabu,Psikologi Lintas Budaya,2/3,K241,TIARA RIZKI LARASATI,3PA38
3PA38,Rabu,Sosiologi*,4/5,K133,AFMI FUAD,3PA38
3PA38,Kamis,Inventori**,5/6,K281,DWI GITA VERASARI,3PA38
3PA38,Jum'at,Psikologi Abnormal,1/2/3,K247,DIANA ROHAYATI,3PA38
3PA38,Jum'at,Ergonomi,6/7,K251,HAYATUN NAIMAH,3PA38
3PA39,Senin,Metodologi Penel. Kuantitatif,5/6/7,K154,DITA FITRI RACHMAWATI,3PA39
3PA39,Selasa,Psikodiagnostika3:Wawancara**,5/6/7,K155,ANUGRIATY INDAH ASMARANY,3PA39
3PA39,Rabu,Sosiologi*,2/3,K133,AFMI FUAD,3PA39
3PA39,Rabu,Psikologi Lintas Budaya,4/5,K241,TIARA RIZKI LARASATI,3PA39
3PA39,Kamis,Psikologi Abnormal,5/6/7,K165,SENDI SATRIADI,3PA39
3PA39,Jum'at,Ergonomi,3/4,K267,INGE ANDRIANI,3PA39
3PA39,Sabtu,Metode Pengukuran Inteligensi**,1/2/3,K154,AJENG FURIDA CITRA,3PA39
3PA39,Sabtu,Inventori**,4/5,K292,LUTFIYAH,3PA39
3PA40,Selasa,Inventori**,1/2,K281,NITA SRI HANDAYANI,3PA40
3PA40,Selasa,Metodologi Penel. Kuantitatif,3/4/5,K274,MARCIA MARTHA,3PA40
3PA40,Rabu,Ergonomi,2/3,K247,NETRONA EMRAN,3PA40
3PA40,Rabu,Psikologi Lintas Budaya,4/5,K248,SEKAR AYUNING ATI,3PA40
3PA40,Kamis,Psikodiagnostika3:Wawancara**,2/3/4,K281,DWI GITA VERASARI,3PA40
3PA40,Kamis,Sosiologi*,5/6,K272,VONNY WIJAYA,3PA40
3PA40,Jum'at,Metode Pengukuran Inteligensi**,1/2/3,K295,META DAMARIYANTI,3PA40
3PA40,Jum'at,Psikologi Abnormal,6/7/8,K247,DIANA ROHAYATI,3PA40
4PA01,Senin,Psikologi Konsumen,1/2,D626,FAJRIN EKA PRATIWI,4PA01
4PA01,Senin,Analisis Jabatan,3/4,D626,ARLINDA PUTRI SUNARTA,4PA01
4PA01,Senin,Penyusunan Skala Psikologi,6/7,D622,ANNISA JULIANTI,4PA01
4PA01,Selasa,Psikoterapi,4/5,G316,DONA EKA PUTRI,4PA01
4PA01,Selasa,Psikologi Eksperimen*,6/7/8,G316,HENDRO PRABOWO,4PA01
4PA01,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA01
4PA01,Jum'at,Psikologi Kognitif Sains,1/2,G126,DITA FITRI RACHMAWATI,4PA01
4PA01,Jum'at,Psikologi Kesehatan,3/4,G126,EVI MARYAM,4PA01
4PA01,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA01
4PA02,Senin,Analisis Jabatan,1/2,D656,ARNITA KUSUMANINGRUM,4PA02
4PA02,Senin,Psikologi Kognitif Sains,3/4,D656,YULIANTO SADEWO,4PA02
4PA02,Senin,Psikoterapi,7/8,D631,ANITA ZULKAIDA,4PA02
4PA02,Senin,Psikologi Konsumen,9/10,D631,FAJRIN EKA PRATIWI,4PA02
4PA02,Selasa,Psikologi Eksperimen*,2/3/4,G314,HENDRO PRABOWO,4PA02
4PA02,Selasa,Psikologi Kesehatan,6/7,G247,ARINI KUSMINTARTI,4PA02
4PA02,Selasa,Penyusunan Skala Psikologi,8/9,G247,ANNISA JULIANTI,4PA02
4PA02,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA02
4PA02,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA02
4PA03,Senin,Psikoterapi,3/4,D631,WARDA LISA,4PA03
4PA03,Senin,Psikologi Kesehatan,6/7,D646,IRMA FATHUL HASANAH,4PA03
4PA03,Senin,Penyusunan Skala Psikologi,8/9,D646,ANNISA JULIANTI,4PA03
4PA03,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4PA03
4PA03,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA03
4PA03,Jum'at,Analisis Jabatan,1/2,G243,RAHMANTO BASUKI,4PA03
4PA03,Jum'at,Psikologi Kognitif Sains,3/4,G243,DITA FITRI RACHMAWATI,4PA03
4PA03,Sabtu,Psikologi Eksperimen*,1/2/3,E132,INDAH MULYANI,4PA03
4PA03,Sabtu,Psikologi Konsumen,4/5,E513,HANNA EFRATA ANGGRAENI,4PA03
4PA04,Senin,Penyusunan Skala Psikologi,3/4,D614,ANNISA JULIANTI,4PA04
4PA04,Senin,Analisis Jabatan,5/6,D614,ARUM PANDAN SARI,4PA04
4PA04,Selasa,Psikoterapi,2/3,G114,DONA EKA PUTRI,4PA04
4PA04,Selasa,Psikologi Konsumen,6/7,G138,HANNA EFRATA ANGGRAENI,4PA04
4PA04,Rabu,Psikologi Kesehatan,7/8,E224,BHAKTI GUNAWAN,4PA04
4PA04,Rabu,Psikologi Kognitif Sains,9/10,E224,URSA MAJORSY,4PA04
4PA04,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA04
4PA04,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA04
4PA04,Sabtu,Psikologi Eksperimen*,4/5/6,E132,INDAH MULYANI,4PA04
4PA05,Senin,Psikologi Eksperimen*,1/2/3,D646,NI PUTU EKA CHANDRA UDAYANI,4PA05
4PA05,Senin,Psikologi Konsumen,4/5,D646,SHAHNAZIA AMALY,4PA05
4PA05,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4PA05
4PA05,Rabu,Penyusunan Skala Psikologi,1/2,E517,HENDRO PRABOWO,4PA05
4PA05,Rabu,Psikologi Kesehatan,5/6,E237,BHAKTI GUNAWAN,4PA05
4PA05,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA05
4PA05,Jum'at,Analisis Jabatan,1/2,G229,YUDIT OKTARIA KRISTIANI PARDEDE,4PA05
4PA05,Jum'at,Psikoterapi,3/4,G229,MUHAMMAD FAKHRURROZI,4PA05
4PA05,Jum'at,Psikologi Kognitif Sains,7/8,G136,DITA FITRI RACHMAWATI,4PA05
4PA06,Senin,Psikologi Kesehatan,5/6,D626,DWI PUJI ASTUTI,4PA06
4PA06,Senin,Psikoterapi,7/8,D626,WARDA LISA,4PA06
4PA06,Senin,Penyusunan Skala Psikologi,9/10,D626,REALITA SEREEN PREVIARZYA,4PA06
4PA06,Selasa,Psikologi Konsumen,1/2,G445,HANNA EFRATA ANGGRAENI,4PA06
4PA06,Selasa,Psikologi Eksperimen*,5/6/7,G228,TIARA RIZKI LARASATI,4PA06
4PA06,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA06
4PA06,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA06
4PA06,Sabtu,Analisis Jabatan,1/2,E414,FAUZAN AMMARI,4PA06
4PA06,Sabtu,Psikologi Kognitif Sains,3/4,E414,LUCKY HARDINUGRAHA,4PA06
4PA07,Senin,Psikologi Kesehatan,1/2,D633,DONA SUZANA,4PA07
4PA07,Senin,Psikoterapi,3/4,D633,MUHAMMAD FAKHRURROZI,4PA07
4PA07,Senin,Psikologi Kognitif Sains,7/8,D647,ANANDA AVAVIDYA,4PA07
4PA07,Selasa,Psikologi Konsumen,4/5,F8454,RESTIANI,4PA07
4PA07,Selasa,Psikologi Eksperimen*,8/9/10,F8467,SITI FAUZIAH APRILIA WIJAYA,4PA07
4PA07,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA07
4PA07,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA07
4PA07,Sabtu,Penyusunan Skala Psikologi,1/2,E212,AWALUDDIN TJALLA,4PA07
4PA07,Sabtu,Analisis Jabatan,3/4,E212,ARNITA KUSUMANINGRUM,4PA07
4PA08,Senin,Psikoterapi,5/6,D645,MUHAMMAD FAKHRURROZI,4PA08
4PA08,Senin,Psikologi Konsumen,7/8,D645,SHAHNAZIA AMALY,4PA08
4PA08,Senin,Psikologi Kognitif Sains,9/10,D645,ANANDA AVAVIDYA,4PA08
4PA08,Selasa,Psikologi Kesehatan,1/2,G232,WINDA LESTARI,4PA08
4PA08,Selasa,Psikologi Eksperimen*,5/6/7,G445,INDAH CAHYANTI,4PA08
4PA08,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA08
4PA08,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA08
4PA08,Sabtu,Penyusunan Skala Psikologi,3/4,E124,AWALUDDIN TJALLA,4PA08
4PA08,Sabtu,Analisis Jabatan,5/6,E124,ARNITA KUSUMANINGRUM,4PA08
4PA09,Senin,Psikoterapi,4/5,D613,ANITA ZULKAIDA,4PA09
4PA09,Senin,Analisis Jabatan,6/7,D613,ARNITA KUSUMANINGRUM,4PA09
4PA09,Selasa,Psikologi Eksperimen*,1/2/3,G231,INDAH CAHYANTI,4PA09
4PA09,Selasa,Penyusunan Skala Psikologi,4/5,G231,ANNISA JULIANTI,4PA09
4PA09,Rabu,Psikologi Kesehatan,1/2,E516,PRIMA YURI P,4PA09
4PA09,Rabu,Psikologi Kognitif Sains,4/5,E526,URSA MAJORSY,4PA09
4PA09,Rabu,Psikologi Konsumen,6/7,E526,HANNA EFRATA ANGGRAENI,4PA09
4PA09,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA09
4PA09,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA09
4PA10,Senin,Psikologi Kognitif Sains,1/2,D637,SEKAR AYUNING ATI,4PA10
4PA10,Senin,Psikologi Kesehatan,4/5,D662,ESTU LOVITA PEMBAYUN,4PA10
4PA10,Senin,Penyusunan Skala Psikologi,7/8,D657,MAHARGYANTARI PURWANI DEWI,4PA10
4PA10,Selasa,Psikologi Eksperimen*,1/2/3,G435,LIA AULIA FACHRIAL,4PA10
4PA10,Selasa,Psikologi Konsumen,4/5,G435,HANNA EFRATA ANGGRAENI,4PA10
4PA10,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA10
4PA10,Jum'at,Psikoterapi,1/2,G114,ASTRI NUR KUSUMASTUTI,4PA10
4PA10,Jum'at,Analisis Jabatan,3/4,G114,YUDIT OKTARIA KRISTIANI PARDEDE,4PA10
4PA10,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA10
4PA11,Senin,Psikologi Kognitif Sains,1/2,D647,YULIANTO SADEWO,4PA11
4PA11,Senin,Psikologi Kesehatan,3/4,D647,IRMA FATHUL HASANAH,4PA11
4PA11,Senin,Psikoterapi,7/8,D621,MUHAMMAD FAKHRURROZI,4PA11
4PA11,Selasa,Psikologi Konsumen,1/2,F8465,RESTIANI,4PA11
4PA11,Selasa,Psikologi Eksperimen*,5/6/7,F8442,SITI FAUZIAH APRILIA WIJAYA,4PA11
4PA11,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA11
4PA11,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA11
4PA11,Sabtu,Penyusunan Skala Psikologi,5/6,E323,AWALUDDIN TJALLA,4PA11
4PA11,Sabtu,Analisis Jabatan,7/8,E323,ARNITA KUSUMANINGRUM,4PA11
4PA12,Senin,Analisis Jabatan,3/4,D637,ARUM PANDAN SARI,4PA12
4PA12,Senin,Psikologi Kognitif Sains,5/6,D637,ANANDA AVAVIDYA,4PA12
4PA12,Selasa,Psikologi Eksperimen*,1/2/3,G315,INDRIA HAPSARI,4PA12
4PA12,Selasa,Psikoterapi,6/7,G314,DONA EKA PUTRI,4PA12
4PA12,Rabu,Psikologi Kesehatan,3/4,G139,PRIMA YURI P,4PA12
4PA12,Rabu,Penyusunan Skala Psikologi,6/7,G247,INDAH MULYANI,4PA12
4PA12,Rabu,Psikologi Konsumen,8/9,G247,THIFFAL ABRYLIA SHANEF,4PA12
4PA12,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA12
4PA12,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA12
4PA13,Senin,Psikologi Kognitif Sains,3/4,D644,SEKAR AYUNING ATI,4PA13
4PA13,Senin,Penyusunan Skala Psikologi,5/6,D644,MAHARGYANTARI PURWANI DEWI,4PA13
4PA13,Selasa,Psikologi Eksperimen*,5/6/7,G433,LIA AULIA FACHRIAL,4PA13
4PA13,Rabu,Psikologi Konsumen,1/2,G122,EBI JUNITA,4PA13
4PA13,Rabu,Analisis Jabatan,4/5,G114,WIDURI NUGRAHANY,4PA13
4PA13,Rabu,Psikoterapi,6/7,G114,DONA EKA PUTRI,4PA13
4PA13,Rabu,Psikologi Kesehatan,8/9,G114,WINDA LESTARI,4PA13
4PA13,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA13
4PA13,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA13
4PA14,Senin,Psikologi Kesehatan,3/4,D667,DONA SUZANA,4PA14
4PA14,Senin,Psikologi Eksperimen*,6/7/8,D634,TASHA EKAPUTRI PERMATASARI,4PA14
4PA14,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA14
4PA14,Rabu,Penyusunan Skala Psikologi,3/4,G314,INDAH MULYANI,4PA14
4PA14,Rabu,Psikologi Kognitif Sains,5/6,G314,IRA PUSPITAWATI,4PA14
4PA14,Rabu,Psikologi Konsumen,8/9,G132,EBI JUNITA,4PA14
4PA14,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA14
4PA14,Jum'at,Psikoterapi,3/4,G345,ASTRI NUR KUSUMASTUTI,4PA14
4PA14,Jum'at,Analisis Jabatan,7/8,G233,YUDIT OKTARIA KRISTIANI PARDEDE,4PA14
4PA15,Senin,Psikologi Eksperimen*,3/4/5,D625,TASHA EKAPUTRI PERMATASARI,4PA15
4PA15,Senin,Psikologi Kesehatan,6/7,D625,DONA SUZANA,4PA15
4PA15,Senin,Psikologi Konsumen,9/10,D634,SHAHNAZIA AMALY,4PA15
4PA15,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA15
4PA15,Rabu,Penyusunan Skala Psikologi,1/2,G315,INDAH MULYANI,4PA15
4PA15,Rabu,Psikoterapi,3/4,G315,DONA EKA PUTRI,4PA15
4PA15,Rabu,Analisis Jabatan,7/8,G222,WIDURI NUGRAHANY,4PA15
4PA15,Rabu,Psikologi Kognitif Sains,9/10,G222,IRA PUSPITAWATI,4PA15
4PA15,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA15
4PA16,Senin,Psikologi Kesehatan,1/2,D663,IRMA FATHUL HASANAH,4PA16
4PA16,Senin,Analisis Jabatan,3/4,D663,VINA PUSPITA,4PA16
4PA16,Senin,Psikoterapi,6/7,D611,ASTRI NUR KUSUMASTUTI,4PA16
4PA16,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA16
4PA16,Selasa,Psikologi Eksperimen*,6/7/8,G234,MAHARGYANTARI PURWANI DEWI,4PA16
4PA16,Rabu,Psikologi Konsumen,1/2,G127,THIFFAL ABRYLIA SHANEF,4PA16
4PA16,Rabu,Psikologi Kognitif Sains,3/4,G127,IRA PUSPITAWATI,4PA16
4PA16,Rabu,Penyusunan Skala Psikologi,7/8,G113,HENDRO PRABOWO,4PA16
4PA16,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA16
4PA17,Senin,Psikoterapi,1/2,D653,ANITA ZULKAIDA,4PA17
4PA17,Senin,Psikologi Eksperimen*,4/5/6,D655,INDRIA HAPSARI,4PA17
4PA17,Senin,Psikologi Kesehatan,7/8,D655,ESTU LOVITA PEMBAYUN,4PA17
4PA17,Senin,Penyusunan Skala Psikologi,9/10,D655,MAHARGYANTARI PURWANI DEWI,4PA17
4PA17,Rabu,Psikologi Konsumen,3/4,G145,THIFFAL ABRYLIA SHANEF,4PA17
4PA17,Rabu,Psikologi Kognitif Sains,7/8,G122,IRA PUSPITAWATI,4PA17
4PA17,Rabu,Analisis Jabatan,9/10,G122,WIDURI NUGRAHANY,4PA17
4PA17,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA17
4PA17,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA17
4PA18,Senin,Psikologi Kognitif Sains,5/6,D647,SEKAR AYUNING ATI,4PA18
4PA18,Senin,Analisis Jabatan,8/9,D651,KARTIKA APRILLIA,4PA18
4PA18,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA18
4PA18,Selasa,Penyusunan Skala Psikologi,6/7,G136,ANNISA JULIANTI,4PA18
4PA18,Selasa,Psikologi Eksperimen*,8/9/10,G136,MAIZAR SAPUTRA,4PA18
4PA18,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA18
4PA18,Jum'at,Psikologi Kesehatan,1/2,G138,EVI MARYAM,4PA18
4PA18,Jum'at,Psikologi Konsumen,3/4,G138,WIDAD PRATIWI,4PA18
4PA18,Jum'at,Psikoterapi,7/8,G138,ASTRI NUR KUSUMASTUTI,4PA18
4PA19,Senin,Psikoterapi,1/2,D667,ASTRI NUR KUSUMASTUTI,4PA19
4PA19,Senin,Psikologi Eksperimen*,4/5/6,D664,NI PUTU EKA CHANDRA UDAYANI,4PA19
4PA19,Senin,Analisis Jabatan,7/8,D664,VINA PUSPITA,4PA19
4PA19,Senin,Psikologi Kognitif Sains,9/10,D664,SEKAR AYUNING ATI,4PA19
4PA19,Rabu,Penyusunan Skala Psikologi,1/2,G431,WAHYU RAHARDJO,4PA19
4PA19,Rabu,Psikologi Kesehatan,3/4,G431,WINDA LESTARI,4PA19
4PA19,Rabu,Psikologi Konsumen,6/7,G432,THIFFAL ABRYLIA SHANEF,4PA19
4PA19,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA19
4PA19,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA19
4PA20,Senin,Psikoterapi,1/2,D645,MUHAMMAD FAKHRURROZI,4PA20
4PA20,Senin,Analisis Jabatan,3/4,D645,ARNITA KUSUMANINGRUM,4PA20
4PA20,Senin,Psikologi Kognitif Sains,6/7,D651,YULIANTO SADEWO,4PA20
4PA20,Selasa,Psikologi Eksperimen*,4/5/6,F8443,GILANG VIENNA SANTINI,4PA20
4PA20,Rabu,Penyusunan Skala Psikologi,4/5,G135,WAHYU RAHARDJO,4PA20
4PA20,Rabu,Psikologi Konsumen,6/7,G135,EBI JUNITA,4PA20
4PA20,Rabu,Psikologi Kesehatan,9/10,G421,POPPY DEWI RATIH SITEPU,4PA20
4PA20,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA20
4PA20,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA20
4PA21,Senin,Psikologi Kesehatan,2/3,D655,DWI PUJI ASTUTI,4PA21
4PA21,Senin,Analisis Jabatan,6/7,D662,KARTIKA APRILLIA,4PA21
4PA21,Senin,Psikologi Kognitif Sains,8/9,D662,YULIANTO SADEWO,4PA21
4PA21,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA21
4PA21,Selasa,Psikologi Eksperimen*,5/6/7,G232,MAIZAR SAPUTRA,4PA21
4PA21,Rabu,Psikologi Konsumen,3/4,G347,EBI JUNITA,4PA21
4PA21,Rabu,Penyusunan Skala Psikologi,6/7,G123,WAHYU RAHARDJO,4PA21
4PA21,Rabu,Psikoterapi,8/9,G123,DONA EKA PUTRI,4PA21
4PA21,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA21
4PA22,Senin,Analisis Jabatan,1/2,D612,ARLINDA PUTRI SUNARTA,4PA22
4PA22,Senin,Psikologi Kognitif Sains,3/4,D612,ADE IRMA SURYANI,4PA22
4PA22,Senin,Psikologi Konsumen,7/8,D652,FAJRIN EKA PRATIWI,4PA22
4PA22,Senin,Psikoterapi,9/10,D652,SALSABILA NAJMIDHIA BUDI,4PA22
4PA22,Selasa,Penyusunan Skala Psikologi,2/3,G344,MAIZAR SAPUTRA,4PA22
4PA22,Selasa,Psikologi Kesehatan,4/5,G344,ARINI KUSMINTARTI,4PA22
4PA22,Selasa,Psikologi Eksperimen*,8/9/10,G236,TIARA RIZKI LARASATI,4PA22
4PA22,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA22
4PA22,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA22
4PA23,Selasa,Psikologi Eksperimen*,3/4/5,G136,MAHARGYANTARI PURWANI DEWI,4PA23
4PA23,Rabu,Penyusunan Skala Psikologi,3/4,E311,HENDRO PRABOWO,4PA23
4PA23,Rabu,Psikologi Kognitif Sains,7/8,E414,URSA MAJORSY,4PA23
4PA23,Rabu,Psikologi Kesehatan,9/10,E414,BHAKTI GUNAWAN,4PA23
4PA23,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA23
4PA23,Jum'at,Psikoterapi,1/2,G249,MUHAMMAD FAKHRURROZI,4PA23
4PA23,Jum'at,Analisis Jabatan,3/4,G249,RAHMANTO BASUKI,4PA23
4PA23,Jum'at,Psikologi Konsumen,7/8,G249,WIDAD PRATIWI,4PA23
4PA23,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA23
4PA24,Senin,Psikologi Konsumen,5/6,D612,FAJRIN EKA PRATIWI,4PA24
4PA24,Senin,Penyusunan Skala Psikologi,7/8,D612,REALITA SEREEN PREVIARZYA,4PA24
4PA24,Senin,Psikoterapi,9/10,D612,WARDA LISA,4PA24
4PA24,Selasa,Analisis Jabatan,1/2,E134,VINA PUSPITA,4PA24
4PA24,Selasa,Psikologi Kesehatan,4/5,E123,KASYAFIYA JAYANTI,4PA24
4PA24,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA24
4PA24,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA24
4PA24,Sabtu,Psikologi Kognitif Sains,1/2,E122,LUCKY HARDINUGRAHA,4PA24
4PA24,Sabtu,Psikologi Eksperimen*,3/4/5,E122,QUROYZHIN KARTIKA RINI,4PA24
4PA25,Senin,Psikologi Kesehatan,3/4,D653,WINNIE TUNGGAL MUTIKA,4PA25
4PA25,Senin,Psikologi Konsumen,5/6,D653,ANIE YUSNITA,4PA25
4PA25,Senin,Psikologi Kognitif Sains,7/8,D653,ADE IRMA SURYANI,4PA25
4PA25,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA25
4PA25,Rabu,Psikologi Eksperimen*,2/3/4,E245,QUROYZHIN KARTIKA RINI,4PA25
4PA25,Rabu,Penyusunan Skala Psikologi,5/6,E245,MAIZAR SAPUTRA,4PA25
4PA25,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA25
4PA25,Jum'at,Analisis Jabatan,1/2,G349,ARLINDA PUTRI SUNARTA,4PA25
4PA25,Jum'at,Psikoterapi,3/4,G349,AWAN JEMINY PUTRA ENTRIEZA,4PA25
4PA26,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA26
4PA26,Rabu,Penyusunan Skala Psikologi,3/4,E449,MAIZAR SAPUTRA,4PA26
4PA26,Rabu,Psikologi Eksperimen*,6/7/8,E123,QUROYZHIN KARTIKA RINI,4PA26
4PA26,Rabu,Psikologi Konsumen,9/10,E123,HANNA EFRATA ANGGRAENI,4PA26
4PA26,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA26
4PA26,Jum'at,Psikoterapi,1/2,G247,AWAN JEMINY PUTRA ENTRIEZA,4PA26
4PA26,Jum'at,Analisis Jabatan,3/4,G247,ARLINDA PUTRI SUNARTA,4PA26
4PA26,Sabtu,Psikologi Kognitif Sains,7/8,E336,LUCKY HARDINUGRAHA,4PA26
4PA26,Sabtu,Psikologi Kesehatan,9/10,E336,FERDIANA,4PA26
4PA27,Senin,Psikologi Kesehatan,1/2,D657,WINNIE TUNGGAL MUTIKA,4PA27
4PA27,Senin,Psikoterapi,3/4,D657,SALSABILA NAJMIDHIA BUDI,4PA27
4PA27,Senin,Psikologi Kognitif Sains,5/6,D657,ADE IRMA SURYANI,4PA27
4PA27,Selasa,Psikologi Eksperimen*,1/2/3,F8454,GILANG VIENNA SANTINI,4PA27
4PA27,Selasa,Psikologi Konsumen,6/7,F8454,RESTIANI,4PA27
4PA27,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA27
4PA27,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4PA27
4PA27,Sabtu,Analisis Jabatan,3/4,E341,FAUZAN AMMARI,4PA27
4PA27,Sabtu,Penyusunan Skala Psikologi,5/6,E341,WAHYU RAHARDJO,4PA27
4PA28,Senin,Psikologi Kognitif Sains,1/2,D634,ADE IRMA SURYANI,4PA28
4PA28,Senin,Psikoterapi,5/6,D654,SALSABILA NAJMIDHIA BUDI,4PA28
4PA28,Senin,Psikologi Konsumen,7/8,D654,ANIE YUSNITA,4PA28
4PA28,Senin,Psikologi Kesehatan,9/10,D654,POPPY DEWI RATIH SITEPU,4PA28
4PA28,Selasa,Psikologi Eksperimen*,1/2/3,G455,KENES PRANANDARI,4PA28
4PA28,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA28
4PA28,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4PA28
4PA28,Sabtu,Penyusunan Skala Psikologi,3/4,E227,WAHYU RAHARDJO,4PA28
4PA28,Sabtu,Analisis Jabatan,5/6,E227,FAUZAN AMMARI,4PA28
4PA29,Senin,Psikoterapi,4/5,D635,ASTRI NUR KUSUMASTUTI,4PA29
4PA29,Senin,Analisis Jabatan,7/8,D637,ARUM PANDAN SARI,4PA29
4PA29,Senin,Psikologi Konsumen,9/10,D637,ANIE YUSNITA,4PA29
4PA29,Selasa,Penyusunan Skala Psikologi,1/2,G236,ANNISA JULIANTI,4PA29
4PA29,Selasa,Psikologi Eksperimen*,4/5/6,G455,KENES PRANANDARI,4PA29
4PA29,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA29
4PA29,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4PA29
4PA29,Sabtu,Psikologi Kognitif Sains,5/6,E435,LUCKY HARDINUGRAHA,4PA29
4PA29,Sabtu,Psikologi Kesehatan,7/8,E435,FERDIANA,4PA29
4PA30,Senin,Penyusunan Skala Psikologi,1/2,J1310,INTAGLIA HARSANTI,4PA30
4PA30,Senin,Psikologi Konsumen,3/4,J1310,FARRA DHENA SAGISCA,4PA30
4PA30,Senin,Psikoterapi,6/7,J1310,CINTYA CAKRANINGRUM,4PA30
4PA30,Selasa,Analisis Jabatan,2/3,J133A,MARDIANTI,4PA30
4PA30,Selasa,Psikologi Eksperimen*,5/6/7,J133A,SHAFIRA DESTAMI ANNIDA,4PA30
4PA30,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA30
4PA30,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4PA30
4PA30,Sabtu,Psikologi Kognitif Sains,3/4,J1412,FIRDA FITRI FATIMAH,4PA30
4PA30,Sabtu,Psikologi Kesehatan,5/6,J1412,IRMA KHRISNAPANDIT,4PA30
4PA31,Selasa,Psikoterapi,5/6,J149,CINTYA CAKRANINGRUM,4PA31
4PA31,Selasa,Analisis Jabatan,7/8,J149,MARDIANTI,4PA31
4PA31,Rabu,Psikologi Eksperimen*,2/3/4,J60903,INTAGLIA HARSANTI,4PA31
4PA31,Rabu,Psikologi Konsumen,6/7,J60903,YUDHA ARTDHIANTO WIBOWO,4PA31
4PA31,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA31
4PA31,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4PA31
4PA31,Sabtu,Psikologi Kognitif Sains,1/2,J1518,ARGITA MAYA FAUZI,4PA31
4PA31,Sabtu,Psikologi Kesehatan,3/4,J1518,IRMA KHRISNAPANDIT,4PA31
4PA31,Sabtu,Penyusunan Skala Psikologi,5/6,J1518,FIRDA FITRI FATIMAH,4PA31
4PA32,Senin,Penyusunan Skala Psikologi,6/7,J124,INTAGLIA HARSANTI,4PA32
4PA32,Senin,Psikologi Kognitif Sains,9/10,J124,DESI SUSIANTI,4PA32
4PA32,Selasa,Psikologi Eksperimen*,1/2/3,J1111,SHAFIRA DESTAMI ANNIDA,4PA32
4PA32,Selasa,Analisis Jabatan,5/6,J1420,MARDIANTI,4PA32
4PA32,Selasa,Psikoterapi,7/8,J1420,CINTYA CAKRANINGRUM,4PA32
4PA32,Rabu,Psikologi Kesehatan,1/2,J60904,RINI DAMAYANTI,4PA32
4PA32,Rabu,Psikologi Konsumen,3/4,J60904,YUDHA ARTDHIANTO WIBOWO,4PA32
4PA32,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA32
4PA32,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4PA32
4PA33,Senin,Psikologi Konsumen,1/2,J157,FARRA DHENA SAGISCA,4PA33
4PA33,Senin,Penyusunan Skala Psikologi,3/4,J157,INTAGLIA HARSANTI,4PA33
4PA33,Senin,Psikologi Kognitif Sains,6/7,J157,FIRDA FITRI FATIMAH,4PA33
4PA33,Senin,Psikoterapi,8/9,J157,CINTYA CAKRANINGRUM,4PA33
4PA33,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4PA33
4PA33,Rabu,Analisis Jabatan,1/2,J61006,NURUL QOMARIYAH,4PA33
4PA33,Rabu,Psikologi Eksperimen*,4/5/6,J61006,SHAFIRA DESTAMI ANNIDA,4PA33
4PA33,Rabu,Psikologi Kesehatan,7/8,J61006,RINI DAMAYANTI,4PA33
4PA33,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA33
4PA34,Selasa,Psikoterapi,3/4,J1412,CINTYA CAKRANINGRUM,4PA34
4PA34,Selasa,Penyusunan Skala Psikologi,5/6,J1412,FIRDA FITRI FATIMAH,4PA34
4PA34,Rabu,Psikologi Konsumen,1/2,J61003,YUDHA ARTDHIANTO WIBOWO,4PA34
4PA34,Rabu,Analisis Jabatan,3/4,J61003,NURUL QOMARIYAH,4PA34
4PA34,Rabu,Psikologi Eksperimen*,6/7/8,J60904,INTAGLIA HARSANTI,4PA34
4PA34,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA34
4PA34,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA34
4PA34,Sabtu,Psikologi Kognitif Sains,6/7,J1115B,ARGITA MAYA FAUZI,4PA34
4PA34,Sabtu,Psikologi Kesehatan,8/9,J1115B,IRMA KHRISNAPANDIT,4PA34
4PA35,Selasa,Psikoterapi,1/2,J149,CINTYA CAKRANINGRUM,4PA35
4PA35,Selasa,Penyusunan Skala Psikologi,3/4,J149,FIRDA FITRI FATIMAH,4PA35
4PA35,Selasa,Analisis Jabatan,7/8,J144,KARTIKA APRILLIA,4PA35
4PA35,Rabu,Psikologi Eksperimen*,5/6/7,J61003,ARGITA MAYA FAUZI,4PA35
4PA35,Rabu,Psikologi Konsumen,8/9,J61003,YUDHA ARTDHIANTO WIBOWO,4PA35
4PA35,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA35
4PA35,Sabtu,Psikologi Kesehatan,1/2,J119,IRMA KHRISNAPANDIT,4PA35
4PA35,Sabtu,Psikologi Kognitif Sains,3/4,J119,ARGITA MAYA FAUZI,4PA35
4PA35,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA35
4PA36,Senin,Penyusunan Skala Psikologi,3/4,J1216A,FIRDA FITRI FATIMAH,4PA36
4PA36,Senin,Psikologi Konsumen,5/6,J1216A,FARRA DHENA SAGISCA,4PA36
4PA36,Senin,Psikologi Kognitif Sains,7/8,J1216A,DESI SUSIANTI,4PA36
4PA36,Selasa,Psikoterapi,3/4,J123,HENNY REGINA SALVE,4PA36
4PA36,Selasa,Analisis Jabatan,5/6,J123,KARTIKA APRILLIA,4PA36
4PA36,Rabu,Psikologi Eksperimen*,1/2/3,J60906,ARGITA MAYA FAUZI,4PA36
4PA36,Rabu,Psikologi Kesehatan,4/5,J60906,RINI DAMAYANTI,4PA36
4PA36,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA36
4PA36,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA36
4PA37,Senin,Psikologi Kesehatan,2/3,K291,SASTIA WINDA ASTUTI,4PA37
4PA37,Selasa,Penyusunan Skala Psikologi,2/3,K256,INDAH MULYANI,4PA37
4PA37,Selasa,Psikologi Kognitif Sains,4/5,K261,WINNY PUSPASARI THAMRIN,4PA37
4PA37,Rabu,Psikologi Konsumen,2/3,K248,SEKAR AYUNING ATI,4PA37
4PA37,Rabu,Psikologi Eksperimen*,4/5/6,K274,MAHARGYANTARI PURWANI DEWI,4PA37
4PA37,Rabu,Psikoterapi,8/9,K282,MUHAMMAD FAKHRURROZI,4PA37
4PA37,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA37
4PA37,Jum'at,Analisis Jabatan,1/2,K241,APRILLIA MAHARANI AYUNINGSIH,4PA37
4PA37,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4PA37
4PA38,Senin,Psikologi Kesehatan,4/5,K291,SASTIA WINDA ASTUTI,4PA38
4PA38,Selasa,Psikologi Konsumen,4/5,K133,ADINDA CUT QONITA,4PA38
4PA38,Rabu,Psikologi Eksperimen*,1/2/3,K274,MAHARGYANTARI PURWANI DEWI,4PA38
4PA38,Rabu,Psikologi Kognitif Sains,4/5,K255,INDAH CAHYANTI,4PA38
4PA38,Rabu,Psikoterapi,6/7,K282,MUHAMMAD FAKHRURROZI,4PA38
4PA38,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA38
4PA38,Jum'at,Analisis Jabatan,1/2,K252,INDRIA HAPSARI,4PA38
4PA38,Jum'at,Penyusunan Skala Psikologi,3/4,K161,WAHYU RAHARDJO,4PA38
4PA38,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,1/2,,TIM DOSEN,4PA38
4PA39,Selasa,Psikologi Konsumen,2/3,K133,ADINDA CUT QONITA,4PA39
4PA39,Selasa,Psikologi Eksperimen*,5/6/7,K248,QUROYZHIN KARTIKA RINI,4PA39
4PA39,Rabu,Psikologi Kognitif Sains,1/2,K288,NURUL HUDA,4PA39
4PA39,Rabu,Psikologi Kesehatan,3/4,K251,EVI MARYAM,4PA39
4PA39,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA39
4PA39,Jum'at,Penyusunan Skala Psikologi,1/2,K161,WAHYU RAHARDJO,4PA39
4PA39,Jum'at,Psikoterapi,3/4,K241,APRILLIA MAHARANI AYUNINGSIH,4PA39
4PA39,Jum'at,Analisis Jabatan,6/7,K242,ARGITA MAYA FAUZI,4PA39
4PA39,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4PA39
4PA40,Senin,Psikologi Kesehatan,2/3,K2103,KASYAFIYA JAYANTI,4PA40
4PA40,Selasa,Psikoterapi,2/3,K295,WARDA LISA,4PA40
4PA40,Selasa,Penyusunan Skala Psikologi,4/5,K256,INDAH MULYANI,4PA40
4PA40,Rabu,Psikologi Konsumen,3/4,K152,ANANDA AVAVIDYA,4PA40
4PA40,Kamis,Kecerdasan Artificial & Masyaraka,,UGTV,TEAM TEACHING,4PA40
4PA40,Jum'at,Psikologi Kognitif Sains,1/2,K242,ARGITA MAYA FAUZI,4PA40
4PA40,Jum'at,Analisis Jabatan,3/4,K252,INDRIA HAPSARI,4PA40
4PA40,Jum'at,Psikologi Eksperimen*,6/7/8,K163,MAIZAR SAPUTRA,4PA40
4PA40,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4PA40
1SA01,Senin,Pendidikan Kewarganegaraan,1/2,G423,ARY NATALINA,1SA01
1SA01,Senin,Menulis 1,3/4,G423,GANJAR RESTO PAMBUDI,1SA01
1SA01,Senin,Ketrampilan Komputer 1A**,6/7,G315,ARI ROSEMALA TRIASARI,1SA01
1SA01,Senin,Membaca 1,8/9,G315,ANITA1,1SA01
1SA01,Rabu,Pelafalan,1/2,E248,ICHWAN SUYUDI,1SA01
1SA01,Rabu,Menyimak 1A,3/4,ELab.B,SRI HARTATI,1SA01
1SA01,Rabu,Menyimak 1B,6/7,ELab.B,SRI HARTATI,1SA01
1SA01,Rabu,Ketrampilan Komputer 1B**,9/10,E311,LELI SAFITRI,1SA01
1SA01,Jum'at,Berbicara 1A **,1/2,E326,SUCI BUDIWATY,1SA01
1SA01,Jum'at,Berbicara 1B **,3/4,E326,SUCI BUDIWATY,1SA01
1SA01,Jum'at,Kosa Kata 1**,7/8,E512,DYAH KARTIKA WIJAYANTI,1SA01
1SA01,Jum'at,Tata Bahasa 1 **,9/10,E512,DYANI MASITA DEWI,1SA01
1SA02,Senin,Membaca 1,2/3,G314,ANITA1,1SA02
1SA02,Senin,Ketrampilan Komputer 1A**,4/5,G314,ARI ROSEMALA TRIASARI,1SA02
1SA02,Rabu,Pelafalan,4/5,E435,ICHWAN SUYUDI,1SA02
1SA02,Rabu,Ketrampilan Komputer 1B**,7/8,E236,LELI SAFITRI,1SA02
1SA02,Rabu,Menulis 1,9/10,E236,NUROCHMAN,1SA02
1SA02,Kamis,Berbicara 1A **,1/2,E345,SUCI BUDIWATY,1SA02
1SA02,Kamis,Berbicara 1B **,3/4,E345,SUCI BUDIWATY,1SA02
1SA02,Kamis,Tata Bahasa 1 **,6/7,E523,DYANI MASITA DEWI,1SA02
1SA02,Jum'at,Pendidikan Kewarganegaraan,1/2,E131,ARY NATALINA,1SA02
1SA02,Jum'at,Kosa Kata 1**,3/4,E131,DYAH KARTIKA WIJAYANTI,1SA02
1SA02,Jum'at,Menyimak 1A,7/8,ELab.B,SRI HARTATI,1SA02
1SA02,Jum'at,Menyimak 1B,9/10,ELab.B,SRI HARTATI,1SA02
1SA03,Senin,Berbicara 1A **,1/2,G343,SUCI BUDIWATY,1SA03
1SA03,Senin,Berbicara 1B **,3/4,G343,SUCI BUDIWATY,1SA03
1SA03,Senin,Membaca 1,6/7,G313,ANITA1,1SA03
1SA03,Senin,Ketrampilan Komputer 1A**,8/9,G228,ARI ROSEMALA TRIASARI,1SA03
1SA03,Rabu,Ketrampilan Komputer 1B**,2/3,G132,LELI SAFITRI,1SA03
1SA03,Rabu,Menulis 1,4/5,G132,NUROCHMAN,1SA03
1SA03,Rabu,Pelafalan,7/8,G314,ICHWAN SUYUDI,1SA03
1SA03,Rabu,Pendidikan Kewarganegaraan,9/10,G314,WIDIO PURWANI,1SA03
1SA03,Jum'at,Menyimak 1A,1/2,ELab.B,SRI HARTATI,1SA03
1SA03,Jum'at,Menyimak 1B,3/4,ELab.B,SRI HARTATI,1SA03
1SA03,Jum'at,Tata Bahasa 1 **,7/8,E523,DYANI MASITA DEWI,1SA03
1SA03,Jum'at,Kosa Kata 1**,9/10,E523,DYAH KARTIKA WIJAYANTI,1SA03
1SA04,Rabu,Pendidikan Kewarganegaraan,3/4,J1416A,JUNAEDI ABDILLAH,1SA04
1SA04,Rabu,Ketrampilan Komputer 1A**,6/7,J133A,SIGIT WIBISONO,1SA04
1SA04,Rabu,Ketrampilan Komputer 1B**,8/9,J133A,SIGIT WIBISONO,1SA04
1SA04,Kamis,Berbicara 1A **,1/2,J148,NURLAILA,1SA04
1SA04,Kamis,Berbicara 1B **,3/4,J148,NURLAILA,1SA04
1SA04,Kamis,Pelafalan,5/6,J148,ICHWAN SUYUDI,1SA04
1SA04,Jum'at,Tata Bahasa 1 **,7/8,J137,SAKURA RIDWAN/GUNAWAN TAMBUNSARIBU,1SA04
1SA04,Jum'at,Kosa Kata 1**,9/10,J137,CINTANIA DHARMA B,1SA04
1SA04,Sabtu,Menyimak 1A,1/2,J1LabB,DYAH KARTIKA WIJAYANTI,1SA04
1SA04,Sabtu,Menulis 1,3/4,J138,GANJAR RESTO PAMBUDI,1SA04
1SA04,Sabtu,Menyimak 1B,5/6,J1LabB,DYAH KARTIKA WIJAYANTI,1SA04
1SA04,Sabtu,Membaca 1,9/10,J1424,RR SHINTA FELISIA,1SA04
1SA05,Senin,Ketrampilan Komputer 1B**,1/2,K292,FITRIANINGSIH,1SA05
1SA05,Senin,Ketrampilan Komputer 1A**,3/4,K255,ROSNY GONIDJAYA,1SA05
1SA05,Senin,Pelafalan,5/6,K161,ICHWAN SUYUDI,1SA05
1SA05,Selasa,Menyimak 1B,1/2,K253,CHINTIA HANDAYANI,1SA05
1SA05,Selasa,Menyimak 1A,1/2,K253,CHINTIA HANDAYANI,1SA05
1SA05,Selasa,Berbicara 1B **,3/4,K248,RITA SUTJIATI DJOHAN,1SA05
1SA05,Selasa,Berbicara 1A **,3/4,K248,RITA SUTJIATI DJOHAN,1SA05
1SA05,Selasa,Tata Bahasa 1 **,5/6,K152,DWI NITISARI,1SA05
1SA05,Kamis,Menulis 1,1/2,K255,NUROCHMAN,1SA05
1SA05,Kamis,Membaca 1,3/4,K287,STELLA AMANDA,1SA05
1SA05,Jum'at,Kosa Kata 1**,1/2,K272,SUGENG TRIYANTO,1SA05
1SA05,Jum'at,Pendidikan Kewarganegaraan,3/4,K253,VERONICA FARRY,1SA05
2SA01,Senin,Social Networking and Creative Co,,UGTV,TEAM TEACHING,2SA01
2SA01,Selasa,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2SA01
2SA01,Selasa,Penerjemahan 1,7/8,F8441,NI LUH PUTU SETIARINI,2SA01
2SA01,Selasa,Pendidikan Agama Islam,9/10,F8441,FATCHULLAH ZARKASI,2SA01
2SA01,Rabu,Berbicara 3/A **,1/2,G444,RITA SUTJIATI DJOHAN,2SA01
2SA01,Rabu,Berbicara 3/B **,3/4,G444,RITA SUTJIATI DJOHAN,2SA01
2SA01,Rabu,Tata Bahasa 3 **,7/8,G441,DEFI JULIANTI,2SA01
2SA01,Rabu,Pengantar Apresiasi Sastra*,9/10,G441,NURI ADLINA,2SA01
2SA01,Kamis,Pemahaman Lintas Budaya *,1/2,E234,RETNO BUDI ASTUTI,2SA01
2SA01,Kamis,Pengantar Linguistik*,4/5,E237,SUGENG TRIYANTO,2SA01
2SA01,Kamis,Menyimak 3A,7/8,ELab.B,SUDJANA,2SA01
2SA01,Kamis,Menyimak 3B,9/10,ELab.B,SUDJANA,2SA01
2SA02,Senin,Social Networking and Creative Co,,UGTV,TEAM TEACHING,2SA02
2SA02,Selasa,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2SA02
2SA02,Rabu,Pemahaman Lintas Budaya *,1/2,G229,ENDANG PURWANINGSIH,2SA02
2SA02,Rabu,Tata Bahasa 3 **,3/4,G229,DEFI JULIANTI,2SA02
2SA02,Rabu,Pengantar Apresiasi Sastra*,7/8,G136,NURI ADLINA,2SA02
2SA02,Rabu,Penerjemahan 1,9/10,G136,NI LUH PUTU SETIARINI,2SA02
2SA02,Kamis,Pengantar Linguistik*,1/2,G147,SUGENG TRIYANTO,2SA02
2SA02,Kamis,Pendidikan Agama Islam,3/4,G147,RAHMAT,2SA02
2SA02,Kamis,Berbicara 3/A **,7/8,G236,MERISKA YOSIANA,2SA02
2SA02,Kamis,Berbicara 3/B **,9/10,G236,MERISKA YOSIANA,2SA02
2SA02,Jum'at,Menyimak 3A,7/8,ELab.B,ARIE SUGIYARTATI,2SA02
2SA02,Jum'at,Menyimak 3B,9/10,ELab.B,ARIE SUGIYARTATI,2SA02
2SA03,Senin,Social Networking and Creative Co,,UGTV,TEAM TEACHING,2SA03
2SA03,Selasa,Berbicara 3/A **,1/2,E424,MERISKA YOSIANA,2SA03
2SA03,Selasa,Berbicara 3/B **,3/4,E424,MERISKA YOSIANA,2SA03
2SA03,Selasa,Pengantar Linguistik*,7/8,E232,MUH. KHOLIQ,2SA03
2SA03,Selasa,Pendidikan Agama Islam,9/10,E232,ABDUL ROHMAN,2SA03
2SA03,Rabu,Pemahaman Lintas Budaya *,3/4,G424,ENDANG PURWANINGSIH,2SA03
2SA03,Rabu,Tata Bahasa 3 **,5/6,G424,DEFI JULIANTI,2SA03
2SA03,Rabu,Penerjemahan 1,7/8,G424,NI LUH PUTU SETIARINI,2SA03
2SA03,Kamis,Menyimak 3A,1/2,ELab.B,SUDJANA,2SA03
2SA03,Kamis,Menyimak 3B,3/4,ELab.B,SUDJANA,2SA03
2SA03,Kamis,Pengantar Apresiasi Sastra*,5/6,E131,NURI ADLINA,2SA03
2SA03,Sabtu,Prak. Social Networking&Creative Content,3/4,,TIM DOSEN,2SA03
2SA04,Senin,Social Networking and Creative Co,,UGTV,TEAM TEACHING,2SA04
2SA04,Selasa,Menyimak 3A,1/2,ELab.B,ANITA1,2SA04
2SA04,Selasa,Menyimak 3B,3/4,ELab.B,ANITA1,2SA04
2SA04,Selasa,Pengantar Linguistik*,5/6,E242,MUH. KHOLIQ,2SA04
2SA04,Kamis,Pengantar Apresiasi Sastra*,2/3,D611,NURI ADLINA,2SA04
2SA04,Kamis,Penerjemahan 1,4/5,D611,RATNA SAJEKTI ROESLI,2SA04
2SA04,Kamis,Berbicara 3/A **,7/8,D622,DWI NITISARI,2SA04
2SA04,Kamis,Berbicara 3/B **,9/10,D622,DWI NITISARI,2SA04
2SA04,Jum'at,Tata Bahasa 3 **,1/2,E321,DEFI JULIANTI,2SA04
2SA04,Jum'at,Pendidikan Agama Islam,3/4,E321,APIPUDIN,2SA04
2SA04,Jum'at,Pemahaman Lintas Budaya *,7/8,E247,RETNO BUDI ASTUTI,2SA04
2SA04,Sabtu,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2SA04
2SA05,Senin,Social Networking and Creative Co,,UGTV,TEAM TEACHING,2SA05
2SA05,Selasa,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2SA05
2SA05,Rabu,Menyimak 3A,1/2,J1LabB,CINTANIA DHARMA B,2SA05
2SA05,Rabu,Menyimak 3B,3/4,J1LabB,CINTANIA DHARMA B,2SA05
2SA05,Rabu,Pengantar Linguistik*,7/8,J147,SUGENG TRIYANTO,2SA05
2SA05,Rabu,Pemahaman Lintas Budaya *,9/10,J147,RETNO BUDI ASTUTI,2SA05
2SA05,Kamis,Pendidikan Agama Islam,1/2,J147,MUHAMMAD ABDULLAH S,2SA05
2SA05,Kamis,Tata Bahasa 3 **,3/4,J147,ARSIWELA,2SA05
2SA05,Kamis,Berbicara 3/A **,6/7,J144,NURLAILA,2SA05
2SA05,Kamis,Berbicara 3/B **,8/9,J144,NURLAILA,2SA05
2SA05,Jum'at,Pengantar Apresiasi Sastra*,7/8,J148,NURLAILA,2SA05
2SA05,Jum'at,Penerjemahan 1,9/10,J148,SAKURA RIDWAN/GUNAWAN TAMBUNSARIBU,2SA05
2SA06,Senin,Social Networking and Creative Co,,UGTV,TEAM TEACHING,2SA06
2SA06,Selasa,Menyimak 3B,1/2,K155,ERNI HASTUTI,2SA06
2SA06,Selasa,Menyimak 3A,1/2,K155,ERNI HASTUTI,2SA06
2SA06,Selasa,Tata Bahasa 3 **,3/4,K152,DWI NITISARI,2SA06
2SA06,Selasa,Pendidikan Agama Islam,7/8,K175,APIPUDIN,2SA06
2SA06,Kamis,Pengantar Linguistik*,2/3,K295,SUPARTO,2SA06
2SA06,Kamis,Berbicara 3/B **,3/4,K255,NUROCHMAN,2SA06
2SA06,Kamis,Berbicara 3/A **,3/4,K255,NUROCHMAN,2SA06
2SA06,Kamis,Prak. Social Networking&Creative Content,6/7,,TIM DOSEN,2SA06
2SA06,Jum'at,Penerjemahan 1,1/2,K251,NI LUH PUTU SETIARINI,2SA06
2SA06,Jum'at,Pemahaman Lintas Budaya *,3/4,K242,ENDANG PURWANINGSIH,2SA06
2SA06,Sabtu,Pengantar Apresiasi Sastra*,1/2,K242,EKA ARDHINIE,2SA06
2SA07,Kamis,Prak. Social Networking&Creative Content,1/2,,TIM DOSEN,2SA07
3SA01,Selasa,Pop Culture,1/2,F8463,AGUNG PRASETYO WIBOWO,3SA01
3SA01,Selasa,Jurnalistik 2,3/4,F8463,SUPARTO,3SA01
3SA01,Selasa,Manusia & Kebudayaan Indonesia *,5/6,F8463,ENDANG PURWANINGSIH,3SA01
3SA01,Selasa,Teori Sastra,8/9,F8463,AHMAD JUMA KHATIB NUR ALI,3SA01
3SA01,Kamis,Metodologi Pengajaran Bhs Inggris,1/2,D663,RITA SUTJIATI DJOHAN,3SA01
3SA01,Kamis,Pembelajar B.Ing Berbantuan Komp.,3/4,D663,DIAN WULANDARI,3SA01
3SA01,Kamis,Metodologi Penelit.Sastra,7/8,D651,HENDRO FIRMAWAN,3SA01
3SA01,Kamis,Kepariwisataan 1,9/10,D651,LINDA RATNAWIASIH,3SA01
3SA01,Sabtu,Morfologi Bahasa Inggris *,1/2,E331,WAWAN WURJANTORO,3SA01
3SA01,Sabtu,Kejurubahasaan Inggris - Indonesi,3/4,E331,NUROCHMAN,3SA01
3SA01,Sabtu,Metodologi Penelit.Linguistik,7/8,E425,SUARDI,3SA01
3SA02,Selasa,Teori Sastra,1/2,F8453,AHMAD JUMA KHATIB NUR ALI,3SA02
3SA02,Selasa,Manusia & Kebudayaan Indonesia *,3/4,F8453,ENDANG PURWANINGSIH,3SA02
3SA02,Selasa,Jurnalistik 2,7/8,F8456,INDAH MUSTIKA SHANTI,3SA02
3SA02,Selasa,Pembelajar B.Ing Berbantuan Komp.,9/10,F8456,ASWARINI SENTANA,3SA02
3SA02,Rabu,Kejurubahasaan Inggris - Indonesi,3/4,G143,NI LUH PUTU SETIARINI,3SA02
3SA02,Rabu,Kepariwisataan 1,5/6,G143,PATRICK PETER RENE SILANO,3SA02
3SA02,Kamis,Pop Culture,3/4,D662,AGUNG PRASETYO WIBOWO,3SA02
3SA02,Kamis,Metodologi Pengajaran Bhs Inggris,7/8,D655,RITA SUTJIATI DJOHAN,3SA02
3SA02,Kamis,Metodologi Penelit.Sastra,9/10,D655,HENDRO FIRMAWAN,3SA02
3SA02,Sabtu,Metodologi Penelit.Linguistik,3/4,E318,SUARDI,3SA02
3SA02,Sabtu,Morfologi Bahasa Inggris *,5/6,E318,WAWAN WURJANTORO,3SA02
3SA03,Rabu,Kejurubahasaan Inggris - Indonesi,1/2,G421,NI LUH PUTU SETIARINI,3SA03
3SA03,Rabu,Teori Sastra,3/4,G421,HAWASI,3SA03
3SA03,Rabu,Jurnalistik 2,5/6,G451,INDAH MUSTIKA SHANTI,3SA03
3SA03,Rabu,Kepariwisataan 1,8/9,G138,PATRICK PETER RENE SILANO,3SA03
3SA03,Kamis,Pop Culture,1/2,D623,AGUNG PRASETYO WIBOWO,3SA03
3SA03,Kamis,Metodologi Penelit.Sastra,3/4,D623,HENDRO FIRMAWAN,3SA03
3SA03,Kamis,Metodologi Pengajaran Bhs Inggris,7/8,D614,SUARDI,3SA03
3SA03,Jum'at,Manusia & Kebudayaan Indonesia *,3/4,G424,TRI BUDIARTA,3SA03
3SA03,Jum'at,Pembelajar B.Ing Berbantuan Komp.,7/8,G422,DIAN WULANDARI,3SA03
3SA03,Sabtu,Metodologi Penelit.Linguistik,1/2,E232,SUARDI,3SA03
3SA03,Sabtu,Morfologi Bahasa Inggris *,3/4,E232,WAWAN WURJANTORO,3SA03
3SA04,Rabu,Teori Sastra,1/2,G442,HAWASI,3SA04
3SA04,Rabu,Jurnalistik 2,3/4,G442,INDAH MUSTIKA SHANTI,3SA04
3SA04,Rabu,Kejurubahasaan Inggris - Indonesi,6/7,G433,NUROCHMAN,3SA04
3SA04,Rabu,Manusia & Kebudayaan Indonesia *,8/9,G433,TRI BUDIARTA,3SA04
3SA04,Kamis,Metodologi Penelit.Sastra,1/2,D661,HENDRO FIRMAWAN,3SA04
3SA04,Kamis,Metodologi Pengajaran Bhs Inggris,3/4,D661,RITA SUTJIATI DJOHAN,3SA04
3SA04,Kamis,Kepariwisataan 1,7/8,D636,LINDA RATNAWIASIH,3SA04
3SA04,Kamis,Pop Culture,9/10,D636,AGUNG PRASETYO WIBOWO,3SA04
3SA04,Jum'at,Morfologi Bahasa Inggris *,3/4,G136,ICHWAN SUYUDI,3SA04
3SA04,Jum'at,Metodologi Penelit.Linguistik,7/8,G122,AYYUHATSANAIL FITHRI,3SA04
3SA04,Jum'at,Pembelajar B.Ing Berbantuan Komp.,9/10,G122,DIAN WULANDARI,3SA04
3SA05,Selasa,Jurnalistik 2,1/2,F8462,SUPARTO,3SA05
3SA05,Selasa,Pop Culture,3/4,F8462,AGUNG PRASETYO WIBOWO,3SA05
3SA05,Selasa,Teori Sastra,6/7,F8462,AHMAD JUMA KHATIB NUR ALI,3SA05
3SA05,Selasa,Manusia & Kebudayaan Indonesia *,8/9,F8462,ENDANG PURWANINGSIH,3SA05
3SA05,Kamis,Metodologi Penelit.Sastra,1/2,D634,HAWASI,3SA05
3SA05,Kamis,Kejurubahasaan Inggris - Indonesi,3/4,D634,NI LUH PUTU SETIARINI,3SA05
3SA05,Kamis,Pembelajar B.Ing Berbantuan Komp.,7/8,D643,DIAN WULANDARI,3SA05
3SA05,Kamis,Metodologi Pengajaran Bhs Inggris,9/10,D643,RITA SUTJIATI DJOHAN,3SA05
3SA05,Sabtu,Kepariwisataan 1,1/2,E314,DESY NUR AINI AL FAJRI,3SA05
3SA05,Sabtu,Morfologi Bahasa Inggris *,3/4,E314,SUNARTI DESRIENY TAMBUNAN,3SA05
3SA05,Sabtu,Metodologi Penelit.Linguistik,5/6,E314,AYYUHATSANAIL FITHRI,3SA05
3SA06,Selasa,Manusia & Kebudayaan Indonesia *,1/2,F8442,ENDANG PURWANINGSIH,3SA06
3SA06,Selasa,Teori Sastra,3/4,F8442,AHMAD JUMA KHATIB NUR ALI,3SA06
3SA06,Selasa,Pembelajar B.Ing Berbantuan Komp.,7/8,F8466,ASWARINI SENTANA,3SA06
3SA06,Rabu,Kepariwisataan 1,5/6,G444,FITRI RISMIYATI,3SA06
3SA06,Rabu,Jurnalistik 2,7/8,G444,INDAH MUSTIKA SHANTI,3SA06
3SA06,Kamis,Kejurubahasaan Inggris - Indonesi,1/2,D652,NI LUH PUTU SETIARINI,3SA06
3SA06,Kamis,Metodologi Penelit.Sastra,3/4,D652,HAWASI,3SA06
3SA06,Kamis,Pop Culture,7/8,D633,AGUNG PRASETYO WIBOWO,3SA06
3SA06,Kamis,Metodologi Pengajaran Bhs Inggris,9/10,D633,SUARDI,3SA06
3SA06,Sabtu,Metodologi Penelit.Linguistik,3/4,E228,AYYUHATSANAIL FITHRI,3SA06
3SA06,Sabtu,Morfologi Bahasa Inggris *,5/6,E228,SUNARTI DESRIENY TAMBUNAN,3SA06
3SA07,Selasa,Teori Sastra,1/2,J318,HAWASI,3SA07
3SA07,Selasa,Jurnalistik 2,3/4,J318,STELLA AMANDA,3SA07
3SA07,Selasa,Metodologi Pengajaran Bhs Inggris,7/8,J318,DIAN WULANDARI,3SA07
3SA07,Selasa,Kejurubahasaan Inggris - Indonesi,9/10,J318,NUROCHMAN,3SA07
3SA07,Rabu,Metodologi Penelit.Linguistik,1/2,J1111,SUPARTO,3SA07
3SA07,Rabu,Pop Culture,3/4,J1111,LATIFA NOVIANA,3SA07
3SA07,Rabu,Pembelajar B.Ing Berbantuan Komp.,7/8,J1219,NOVI DWI GITAWATI,3SA07
3SA07,Rabu,Metodologi Penelit.Sastra,9/10,J1219,AHMAD JUMA KHATIB NUR ALI,3SA07
3SA07,Kamis,Manusia & Kebudayaan Indonesia *,5/6,J1111,ROBINGAH,3SA07
3SA07,Kamis,Morfologi Bahasa Inggris *,7/8,J1111,ICHWAN SUYUDI,3SA07
3SA07,Kamis,Kepariwisataan 1,9/10,J1111,FITRI RISMIYATI,3SA07
3SA08,Selasa,Jurnalistik 2,1/2,J316,STELLA AMANDA,3SA08
3SA08,Selasa,Teori Sastra,3/4,J316,HAWASI,3SA08
3SA08,Selasa,Kejurubahasaan Inggris - Indonesi,7/8,J316,NUROCHMAN,3SA08
3SA08,Selasa,Metodologi Pengajaran Bhs Inggris,9/10,J316,DIAN WULANDARI,3SA08
3SA08,Rabu,Pop Culture,1/2,J1411,LATIFA NOVIANA,3SA08
3SA08,Rabu,Metodologi Penelit.Linguistik,3/4,J1411,SUPARTO,3SA08
3SA08,Rabu,Metodologi Penelit.Sastra,7/8,J1512,AHMAD JUMA KHATIB NUR ALI,3SA08
3SA08,Rabu,Pembelajar B.Ing Berbantuan Komp.,9/10,J1512,NOVI DWI GITAWATI,3SA08
3SA08,Kamis,Manusia & Kebudayaan Indonesia *,3/4,J1220,ROBINGAH,3SA08
3SA08,Kamis,Kepariwisataan 1,7/8,J1220,FITRI RISMIYATI,3SA08
3SA08,Kamis,Morfologi Bahasa Inggris *,9/10,J1220,ICHWAN SUYUDI,3SA08
3SA09,Senin,Kepariwisataan 1,3/4,K284,MERISKA YOSIANA,3SA09
3SA09,Selasa,Kejurubahasaan Inggris - Indonesi,3/4,K255,SUCI BUDIWATY,3SA09
3SA09,Rabu,Morfologi Bahasa Inggris *,1/2,K281,MUH. KHOLIQ,3SA09
3SA09,Rabu,Metodologi Pengajaran Bhs Inggris,4/5,K291,SUYUDI,3SA09
3SA09,Rabu,Manusia & Kebudayaan Indonesia *,6/7,K243,ARIE SUGIYARTATI,3SA09
3SA09,Kamis,Pop Culture,1/2,K292,HUKMAWATI,3SA09
3SA09,Kamis,Metodologi Penelit.Linguistik,4/5,K295,SUPARTO,3SA09
3SA09,Jum'at,Teori Sastra,1/2,K266,AHMAD JUMA KHATIB NUR ALI,3SA09
3SA09,Jum'at,Metodologi Penelit.Sastra,3/4,K244,HAWASI,3SA09
3SA09,Sabtu,Pembelajar B.Ing Berbantuan Komp.,1/2,K131,AGUNG PRASETYO WIBOWO,3SA09
3SA09,Sabtu,Jurnalistik 2,4/5,K245,DEFI JULIANTI,3SA09
3SA10,Senin,Jurnalistik 2,1/2,K284,MERISKA YOSIANA,3SA10
3SA10,Senin,Morfologi Bahasa Inggris *,3/4,K161,ICHWAN SUYUDI,3SA10
3SA10,Selasa,Metodologi Pengajaran Bhs Inggris,1/2,K255,SUCI BUDIWATY,3SA10
3SA10,Selasa,Kejurubahasaan Inggris - Indonesi,3/4,K271,WATI PURNAMASARI,3SA10
3SA10,Rabu,Metodologi Penelit.Sastra,2/3,K291,SUYUDI,3SA10
3SA10,Rabu,Manusia & Kebudayaan Indonesia *,4/5,K274,ROBINGAH,3SA10
3SA10,Kamis,Pop Culture,3/4,K292,HUKMAWATI,3SA10
3SA10,Jum'at,Kepariwisataan 1,1/2,K244,HAWASI,3SA10
3SA10,Jum'at,Metodologi Penelit.Linguistik,3/4,K251,NI LUH PUTU SETIARINI,3SA10
3SA10,Jum'at,Teori Sastra,6/7,K266,AHMAD JUMA KHATIB NUR ALI,3SA10
3SA10,Sabtu,Pembelajar B.Ing Berbantuan Komp.,3/4,K131,AGUNG PRASETYO WIBOWO,3SA10
4SA01,Senin,Pengkajian Drama Inggris *,7/8,E423,SITI FATIMAH,4SA01
4SA01,Senin,Pengkajian Puisi Inggris*,9/10,E423,NOVIA DIAH LESTARI,4SA01
4SA01,Selasa,Interaksi Budaya,1/2,G129,ROBINGAH,4SA01
4SA01,Selasa,Manusia dan Kebudayaan Inggris*,3/4,G129,INDAH LESTARI,4SA01
4SA01,Selasa,Semantik dan Pragmatik *,5/6,G129,DEVI HELLYSTIA,4SA01
4SA01,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4SA01
4SA01,Jum'at,Pementasan Drama,1/2,L.TH-E,EVA NURFATIMAH,4SA01
4SA01,Jum'at,Kewirausahaan,3/4,E424,MULATSIH,4SA01
4SA01,Jum'at,Pengkajian Budaya,7/8,E424,DESTHIA AMALIA,4SA01
4SA01,Jum'at,Sosiolinguistik *,9/10,E424,MUH. KHOLIQ,4SA01
4SA01,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4SA01
4SA02,Senin,Semantik dan Pragmatik *,3/4,E446,DEVI HELLYSTIA,4SA02
4SA02,Senin,Pengkajian Puisi Inggris*,7/8,E441,NOVIA DIAH LESTARI,4SA02
4SA02,Senin,Pengkajian Drama Inggris *,9/10,E441,SITI FATIMAH,4SA02
4SA02,Selasa,Manusia dan Kebudayaan Inggris*,1/2,G134,INDAH LESTARI,4SA02
4SA02,Selasa,Interaksi Budaya,3/4,G134,ROBINGAH,4SA02
4SA02,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4SA02
4SA02,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4SA02
4SA02,Jum'at,Kewirausahaan,1/2,E327,MULATSIH,4SA02
4SA02,Jum'at,Pementasan Drama,3/4,L.TH-E,EVA NURFATIMAH,4SA02
4SA02,Jum'at,Sosiolinguistik *,7/8,E425,MUH. KHOLIQ,4SA02
4SA02,Jum'at,Pengkajian Budaya,9/10,E425,DESTHIA AMALIA,4SA02
4SA03,Senin,Pengkajian Puisi Inggris*,1/2,E332,NOVIA DIAH LESTARI,4SA03
4SA03,Senin,Kewirausahaan,3/4,E332,ESTININGSIH,4SA03
4SA03,Senin,Manusia dan Kebudayaan Inggris*,6/7,E332,INDAH LESTARI,4SA03
4SA03,Senin,Semantik dan Pragmatik *,8/9,E332,DEVI HELLYSTIA,4SA03
4SA03,Selasa,Interaksi Budaya,1/2,E242,INDAH MUSTIKA SHANTI,4SA03
4SA03,Selasa,Pengkajian Drama Inggris *,3/4,E242,EVA NURFATIMAH,4SA03
4SA03,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4SA03
4SA03,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4SA03
4SA03,Jum'at,Pengkajian Budaya,1/2,E225,RETNO BUDI ASTUTI,4SA03
4SA03,Jum'at,Sosiolinguistik *,3/4,E225,MUH. KHOLIQ,4SA03
4SA03,Jum'at,Pementasan Drama,7/8,L.TH-E,EKA ARDHINIE,4SA03
4SA04,Senin,Semantik dan Pragmatik *,1/2,E235,DEVI HELLYSTIA,4SA04
4SA04,Senin,Pengkajian Puisi Inggris*,3/4,E235,NOVIA DIAH LESTARI,4SA04
4SA04,Senin,Kewirausahaan,6/7,E122,ESTININGSIH,4SA04
4SA04,Senin,Manusia dan Kebudayaan Inggris*,8/9,E122,INDAH LESTARI,4SA04
4SA04,Selasa,Pengkajian Drama Inggris *,1/2,E235,EVA NURFATIMAH,4SA04
4SA04,Selasa,Interaksi Budaya,3/4,E235,INDAH MUSTIKA SHANTI,4SA04
4SA04,Selasa,Pementasan Drama,7/8,L.TH-E,MIA PURWATI,4SA04
4SA04,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4SA04
4SA04,Jum'at,Sosiolinguistik *,1/2,E336,MUH. KHOLIQ,4SA04
4SA04,Jum'at,Pengkajian Budaya,3/4,E336,RETNO BUDI ASTUTI,4SA04
4SA04,Jum'at,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4SA04
4SA05,Senin,Pengkajian Puisi Inggris*,1/2,E331,SITI FATIMAH,4SA05
4SA05,Senin,Pengkajian Drama Inggris *,3/4,E331,EVA NURFATIMAH,4SA05
4SA05,Senin,Semantik dan Pragmatik *,6/7,E224,DEVI HELLYSTIA,4SA05
4SA05,Selasa,Interaksi Budaya,3/4,G147,NOVIA DIAH LESTARI,4SA05
4SA05,Selasa,Manusia dan Kebudayaan Inggris*,5/6,G147,NURI ADLINA,4SA05
4SA05,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4SA05
4SA05,Jum'at,Kewirausahaan,1/2,E344,IRWANDARU DANANJAYA/LUTHFY ATHTHUR DESMA,4SA05
4SA05,Jum'at,Pengkajian Budaya,3/4,E344,DESTHIA AMALIA,4SA05
4SA05,Jum'at,Sosiolinguistik *,7/8,E344,SUPARTO,4SA05
4SA05,Jum'at,Pementasan Drama,9/10,L.TH-E,EKA ARDHINIE,4SA05
4SA05,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4SA05
4SA06,Senin,Pengkajian Puisi Inggris*,3/4,E335,SITI FATIMAH,4SA06
4SA06,Senin,Pengkajian Drama Inggris *,5/6,E335,EVA NURFATIMAH,4SA06
4SA06,Selasa,Manusia dan Kebudayaan Inggris*,3/4,G145,NURI ADLINA,4SA06
4SA06,Selasa,Interaksi Budaya,5/6,G145,NOVIA DIAH LESTARI,4SA06
4SA06,Selasa,Semantik dan Pragmatik *,7/8,G145,DEVI HELLYSTIA,4SA06
4SA06,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4SA06
4SA06,Jum'at,Pengkajian Budaya,1/2,E342,DESTHIA AMALIA,4SA06
4SA06,Jum'at,Pementasan Drama,3/4,L.TH-E,EKA ARDHINIE,4SA06
4SA06,Jum'at,Kewirausahaan,7/8,E342,IRWANDARU DANANJAYA/LUTHFY ATHTHUR DESMA,4SA06
4SA06,Jum'at,Sosiolinguistik *,9/10,E342,SUPARTO,4SA06
4SA06,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,3/4,,TIM DOSEN,4SA06
4SA07,Selasa,Pementasan Drama,3/4,L.TH-J,ALIYA FADHILLA,4SA07
4SA07,Selasa,Pengkajian Drama Inggris *,6/7,J1216A,SITI CHAMAMAH/VINI HARDIANI RACHMAN,4SA07
4SA07,Selasa,Manusia dan Kebudayaan Inggris*,8/9,J1216A,NOVI DWI GITAWATI,4SA07
4SA07,Rabu,Pengkajian Puisi Inggris*,3/4,J1424,DESTHIA AMALIA,4SA07
4SA07,Rabu,Interaksi Budaya,6/7,J1424,VINI HARDIANI RACHMAN,4SA07
4SA07,Rabu,Sosiolinguistik *,9/10,J1318,SUGENG TRIYANTO,4SA07
4SA07,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4SA07
4SA07,Jum'at,Semantik dan Pragmatik *,1/2,J1424,NURLAILA,4SA07
4SA07,Jum'at,Pengkajian Budaya,3/4,J1424,ROBINGAH,4SA07
4SA07,Jum'at,Kewirausahaan,7/8,J1424,DINI DWI ERMAWATI,4SA07
4SA07,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4SA07
4SA08,Selasa,Pementasan Drama,1/2,L.TH-J,ALIYA FADHILLA,4SA08
4SA08,Selasa,Pengkajian Drama Inggris *,3/4,J129,SITI CHAMAMAH/VINI HARDIANI RACHMAN,4SA08
4SA08,Selasa,Manusia dan Kebudayaan Inggris*,6/7,J1416A,NOVI DWI GITAWATI,4SA08
4SA08,Selasa,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4SA08
4SA08,Rabu,Pengkajian Puisi Inggris*,1/2,J1311,DESTHIA AMALIA,4SA08
4SA08,Rabu,Interaksi Budaya,3/4,J1311,VINI HARDIANI RACHMAN,4SA08
4SA08,Rabu,Sosiolinguistik *,5/6,J1311,SUGENG TRIYANTO,4SA08
4SA08,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4SA08
4SA08,Jum'at,Kewirausahaan,1/2,J1311,DINI DWI ERMAWATI,4SA08
4SA08,Jum'at,Semantik dan Pragmatik *,3/4,J1311,NURLAILA,4SA08
4SA08,Jum'at,Pengkajian Budaya,7/8,J1311,ROBINGAH,4SA08
4SA09,Senin,Kewirausahaan,3/4,K247,ROOSHWAN BUDHI UTOMO,4SA09
4SA09,Senin,Semantik dan Pragmatik *,5/6,K153,NURLAILA,4SA09
4SA09,Selasa,Pengkajian Budaya,1/2,K151,DESTHIA AMALIA,4SA09
4SA09,Rabu,Manusia dan Kebudayaan Inggris*,1/2,K248,INDAH LESTARI,4SA09
4SA09,Rabu,Sosiolinguistik *,3/4,K281,MUH. KHOLIQ,4SA09
4SA09,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4SA09
4SA09,Jum'at,Interaksi Budaya,1/2,K242,ENDANG PURWANINGSIH,4SA09
4SA09,Jum'at,Pengkajian Drama Inggris *,3/4,K245,HENDRO FIRMAWAN,4SA09
4SA09,Sabtu,Pengkajian Puisi Inggris*,1/2,K251,EVA NURFATIMAH,4SA09
4SA09,Sabtu,Pementasan Drama,3/4,K242,EKA ARDHINIE,4SA09
4SA09,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,6/7,,TIM DOSEN,4SA09
4SA10,Senin,Kewirausahaan,1/2,K247,ROOSHWAN BUDHI UTOMO,4SA10
4SA10,Senin,Semantik dan Pragmatik *,3/4,K153,NURLAILA,4SA10
4SA10,Selasa,Pengkajian Puisi Inggris*,3/4,K151,DESTHIA AMALIA,4SA10
4SA10,Selasa,Pengkajian Budaya,5/6,K271,WATI PURNAMASARI,4SA10
4SA10,Rabu,Interaksi Budaya,1/2,K274,ROBINGAH,4SA10
4SA10,Rabu,Manusia dan Kebudayaan Inggris*,3/4,K248,INDAH LESTARI,4SA10
4SA10,Kamis,Kecerdasan Artifisial & Masyaraka,,UGTV,TEAM TEACHING,4SA10
4SA10,Jum'at,Sosiolinguistik *,3/4,K272,SUGENG TRIYANTO,4SA10
4SA10,Jum'at,Pengkajian Drama Inggris *,6/7,K245,HENDRO FIRMAWAN,4SA10
4SA10,Sabtu,Pementasan Drama,3/4,K251,EVA NURFATIMAH,4SA10
4SA10,Sabtu,Prak. Kecerdasan Artifisial & Masyarakat,8/9,,TIM DOSEN,4SA10
`,LS=()=>{const[a,A]=La.useState([]),[n,e]=La.useState(""),[i,I]=La.useState("all"),[t,s]=La.useState([]);La.useEffect(()=>{try{const u=fS.split(`
`),R=u[0].split(","),N=u.slice(1).map(l=>{const m=l.split(",");return R.reduce((P,D,c)=>{var E;return P[D.trim()]=((E=m[c])==null?void 0:E.trim())||"",P},{})}).filter(l=>Object.values(l).some(m=>m));A(N),s(N)}catch(u){console.error("Error processing CSV:",u)}},[]);const r=()=>{const u=n.toLowerCase(),R=a.filter(N=>{var l,m,P,D,c,E;switch(i){case"dosen":return(l=N.DOSEN)==null?void 0:l.toLowerCase().includes(u);case"kode":return(m=N.Kode_Kelas)==null?void 0:m.toLowerCase().includes(u);case"ruang":return(P=N.RUANG)==null?void 0:P.toLowerCase().includes(u);default:return((D=N.DOSEN)==null?void 0:D.toLowerCase().includes(u))||((c=N.Kode_Kelas)==null?void 0:c.toLowerCase().includes(u))||((E=N.RUANG)==null?void 0:E.toLowerCase().includes(u))}});s(R)};return f.jsxs("div",{className:"container mx-auto p-4",children:[f.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Jadwal Kelas"}),f.jsxs("div",{className:"flex space-x-2 mb-4",children:[f.jsx("input",{type:"text",placeholder:"Cari...",value:n,onChange:u=>e(u.target.value),className:"border p-2 rounded w-full"}),f.jsxs("select",{value:i,onChange:u=>I(u.target.value),className:"border p-2 rounded",children:[f.jsx("option",{value:"all",children:"Semua"}),f.jsx("option",{value:"dosen",children:"Dosen"}),f.jsx("option",{value:"kode",children:"Kode Kelas"}),f.jsx("option",{value:"ruang",children:"Ruang"})]}),f.jsxs("button",{onClick:r,className:"bg-blue-500 text-white p-2 rounded flex items-center",children:[f.jsx(OS,{size:20,className:"mr-2"})," Cari"]})]}),f.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"bg-gray-200",children:[f.jsx("th",{className:"border p-2",children:"KELAS"}),f.jsx("th",{className:"border p-2",children:"HARI"}),f.jsx("th",{className:"border p-2",children:"MATA KULIAH"}),f.jsx("th",{className:"border p-2",children:"WAKTU"}),f.jsx("th",{className:"border p-2",children:"RUANG"}),f.jsx("th",{className:"border p-2",children:"DOSEN"}),f.jsx("th",{className:"border p-2",children:"Kode Kelas"})]})}),f.jsx("tbody",{children:t.length>0?t.map((u,R)=>f.jsxs("tr",{className:"border",children:[f.jsx("td",{className:"border p-2",children:u.KELAS}),f.jsx("td",{className:"border p-2",children:u.HARI}),f.jsx("td",{className:"border p-2",children:u.MATA_KULIAH}),f.jsx("td",{className:"border p-2",children:u.WAKTU}),f.jsx("td",{className:"border p-2",children:u.RUANG}),f.jsx("td",{className:"border p-2",children:u.DOSEN}),f.jsx("td",{className:"border p-2",children:u.Kode_Kelas})]},R)):f.jsx("tr",{children:f.jsx("td",{colSpan:"7",className:"text-center p-4",children:"Tidak ada data"})})})]})]})};function pS(){return f.jsx("div",{className:"App",children:f.jsx(LS,{})})}qs(document.getElementById("root")).render(f.jsx(La.StrictMode,{children:f.jsx(pS,{})}));
