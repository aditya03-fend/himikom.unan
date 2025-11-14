(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var gd={exports:{}},Oo={};var Xx;function iS(){if(Xx)return Oo;Xx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Wx;function aS(){return Wx||(Wx=1,gd.exports=iS()),gd.exports}var W=aS(),vd={exports:{}},st={};var qx;function rS(){if(qx)return st;qx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function b(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(O,se,be){this.props=O,this.context=se,this.refs=M,this.updater=be||E}v.prototype.isReactComponent={},v.prototype.setState=function(O,se){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,se,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function U(){}U.prototype=v.prototype;function L(O,se,be){this.props=O,this.context=se,this.refs=M,this.updater=be||E}var P=L.prototype=new U;P.constructor=L,T(P,v.prototype),P.isPureReactComponent=!0;var G=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function w(O,se,be){var Ae=be.ref;return{$$typeof:r,type:O,key:se,ref:Ae!==void 0?Ae:null,props:be}}function C(O,se){return w(O.type,se,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function ne(O){var se={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(be){return se[be]})}var ue=/\/+/g;function he(O,se){return typeof O=="object"&&O!==null&&O.key!=null?ne(""+O.key):se.toString(36)}function me(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(se){O.status==="pending"&&(O.status="fulfilled",O.value=se)},function(se){O.status==="pending"&&(O.status="rejected",O.reason=se)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function F(O,se,be,Ae,Pe){var re=typeof O;(re==="undefined"||re==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(re){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case r:case e:fe=!0;break;case x:return fe=O._init,F(fe(O._payload),se,be,Ae,Pe)}}if(fe)return Pe=Pe(O),fe=Ae===""?"."+he(O,0):Ae,G(Pe)?(be="",fe!=null&&(be=fe.replace(ue,"$&/")+"/"),F(Pe,se,be,"",function(qe){return qe})):Pe!=null&&(k(Pe)&&(Pe=C(Pe,be+(Pe.key==null||O&&O.key===Pe.key?"":(""+Pe.key).replace(ue,"$&/")+"/")+fe)),se.push(Pe)),1;fe=0;var Re=Ae===""?".":Ae+":";if(G(O))for(var Ve=0;Ve<O.length;Ve++)Ae=O[Ve],re=Re+he(Ae,Ve),fe+=F(Ae,se,be,re,Pe);else if(Ve=b(O),typeof Ve=="function")for(O=Ve.call(O),Ve=0;!(Ae=O.next()).done;)Ae=Ae.value,re=Re+he(Ae,Ve++),fe+=F(Ae,se,be,re,Pe);else if(re==="object"){if(typeof O.then=="function")return F(me(O),se,be,Ae,Pe);throw se=String(O),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return fe}function K(O,se,be){if(O==null)return O;var Ae=[],Pe=0;return F(O,Ae,"","",function(re){return se.call(be,re,Pe++)}),Ae}function Y(O){if(O._status===-1){var se=O._result;se=se(),se.then(function(be){(O._status===0||O._status===-1)&&(O._status=1,O._result=be)},function(be){(O._status===0||O._status===-1)&&(O._status=2,O._result=be)}),O._status===-1&&(O._status=0,O._result=se)}if(O._status===1)return O._result.default;throw O._result}var ye=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Se={map:K,forEach:function(O,se,be){K(O,function(){se.apply(this,arguments)},be)},count:function(O){var se=0;return K(O,function(){se++}),se},toArray:function(O){return K(O,function(se){return se})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return st.Activity=g,st.Children=Se,st.Component=v,st.Fragment=i,st.Profiler=l,st.PureComponent=L,st.StrictMode=s,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,st.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},st.cache=function(O){return function(){return O.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(O,se,be){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ae=T({},O.props),Pe=O.key;if(se!=null)for(re in se.key!==void 0&&(Pe=""+se.key),se)!J.call(se,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&se.ref===void 0||(Ae[re]=se[re]);var re=arguments.length-2;if(re===1)Ae.children=be;else if(1<re){for(var fe=Array(re),Re=0;Re<re;Re++)fe[Re]=arguments[Re+2];Ae.children=fe}return w(O.type,Pe,Ae)},st.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},st.createElement=function(O,se,be){var Ae,Pe={},re=null;if(se!=null)for(Ae in se.key!==void 0&&(re=""+se.key),se)J.call(se,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Pe[Ae]=se[Ae]);var fe=arguments.length-2;if(fe===1)Pe.children=be;else if(1<fe){for(var Re=Array(fe),Ve=0;Ve<fe;Ve++)Re[Ve]=arguments[Ve+2];Pe.children=Re}if(O&&O.defaultProps)for(Ae in fe=O.defaultProps,fe)Pe[Ae]===void 0&&(Pe[Ae]=fe[Ae]);return w(O,re,Pe)},st.createRef=function(){return{current:null}},st.forwardRef=function(O){return{$$typeof:h,render:O}},st.isValidElement=k,st.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:Y}},st.memo=function(O,se){return{$$typeof:p,type:O,compare:se===void 0?null:se}},st.startTransition=function(O){var se=z.T,be={};z.T=be;try{var Ae=O(),Pe=z.S;Pe!==null&&Pe(be,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(N,ye)}catch(re){ye(re)}finally{se!==null&&be.types!==null&&(se.types=be.types),z.T=se}},st.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},st.use=function(O){return z.H.use(O)},st.useActionState=function(O,se,be){return z.H.useActionState(O,se,be)},st.useCallback=function(O,se){return z.H.useCallback(O,se)},st.useContext=function(O){return z.H.useContext(O)},st.useDebugValue=function(){},st.useDeferredValue=function(O,se){return z.H.useDeferredValue(O,se)},st.useEffect=function(O,se){return z.H.useEffect(O,se)},st.useEffectEvent=function(O){return z.H.useEffectEvent(O)},st.useId=function(){return z.H.useId()},st.useImperativeHandle=function(O,se,be){return z.H.useImperativeHandle(O,se,be)},st.useInsertionEffect=function(O,se){return z.H.useInsertionEffect(O,se)},st.useLayoutEffect=function(O,se){return z.H.useLayoutEffect(O,se)},st.useMemo=function(O,se){return z.H.useMemo(O,se)},st.useOptimistic=function(O,se){return z.H.useOptimistic(O,se)},st.useReducer=function(O,se,be){return z.H.useReducer(O,se,be)},st.useRef=function(O){return z.H.useRef(O)},st.useState=function(O){return z.H.useState(O)},st.useSyncExternalStore=function(O,se,be){return z.H.useSyncExternalStore(O,se,be)},st.useTransition=function(){return z.H.useTransition()},st.version="19.2.0",st}var jx;function iu(){return jx||(jx=1,vd.exports=rS()),vd.exports}var xe=iu(),_d={exports:{}},Po={},yd={exports:{}},Sd={};var Yx;function sS(){return Yx||(Yx=1,(function(r){function e(F,K){var Y=F.length;F.push(K);e:for(;0<Y;){var ye=Y-1>>>1,Se=F[ye];if(0<l(Se,K))F[ye]=K,F[Y]=Se,Y=ye;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var K=F[0],Y=F.pop();if(Y!==K){F[0]=Y;e:for(var ye=0,Se=F.length,O=Se>>>1;ye<O;){var se=2*(ye+1)-1,be=F[se],Ae=se+1,Pe=F[Ae];if(0>l(be,Y))Ae<Se&&0>l(Pe,be)?(F[ye]=Pe,F[Ae]=Y,ye=Ae):(F[ye]=be,F[se]=Y,ye=se);else if(Ae<Se&&0>l(Pe,Y))F[ye]=Pe,F[Ae]=Y,ye=Ae;else break e}}return K}function l(F,K){var Y=F.sortIndex-K.sortIndex;return Y!==0?Y:F.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,g=null,y=3,b=!1,E=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function P(F){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=F)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function G(F){if(T=!1,P(F),!E)if(i(m)!==null)E=!0,N||(N=!0,ne());else{var K=i(p);K!==null&&me(G,K.startTime-F)}}var N=!1,z=-1,J=5,w=-1;function C(){return M?!0:!(r.unstable_now()-w<J)}function k(){if(M=!1,N){var F=r.unstable_now();w=F;var K=!0;try{e:{E=!1,T&&(T=!1,U(z),z=-1),b=!0;var Y=y;try{t:{for(P(F),g=i(m);g!==null&&!(g.expirationTime>F&&C());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,y=g.priorityLevel;var Se=ye(g.expirationTime<=F);if(F=r.unstable_now(),typeof Se=="function"){g.callback=Se,P(F),K=!0;break t}g===i(m)&&s(m),P(F)}else s(m);g=i(m)}if(g!==null)K=!0;else{var O=i(p);O!==null&&me(G,O.startTime-F),K=!1}}break e}finally{g=null,y=Y,b=!1}K=void 0}}finally{K?ne():N=!1}}}var ne;if(typeof L=="function")ne=function(){L(k)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=k,ne=function(){he.postMessage(null)}}else ne=function(){v(k,0)};function me(F,K){z=v(function(){F(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(F){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Y=y;y=K;try{return F()}finally{y=Y}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Y=y;y=F;try{return K()}finally{y=Y}},r.unstable_scheduleCallback=function(F,K,Y){var ye=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ye+Y:ye):Y=ye,F){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Y+Se,F={id:x++,callback:K,priorityLevel:F,startTime:Y,expirationTime:Se,sortIndex:-1},Y>ye?(F.sortIndex=Y,e(p,F),i(m)===null&&F===i(p)&&(T?(U(z),z=-1):T=!0,me(G,Y-ye))):(F.sortIndex=Se,e(m,F),E||b||(E=!0,N||(N=!0,ne()))),F},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(F){var K=y;return function(){var Y=y;y=K;try{return F.apply(this,arguments)}finally{y=Y}}}})(Sd)),Sd}var Zx;function oS(){return Zx||(Zx=1,yd.exports=sS()),yd.exports}var bd={exports:{}},Un={};var Kx;function lS(){if(Kx)return Un;Kx=1;var r=iu();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Un.flushSync=function(m){var p=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=x,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:b}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.0",Un}var Qx;function cS(){if(Qx)return bd.exports;Qx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),bd.exports=lS(),bd.exports}var Jx;function uS(){if(Jx)return Po;Jx=1;var r=oS(),e=iu(),i=cS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=f;break}if(A===o){S=!0,o=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=u;break}if(A===o){S=!0,o=f,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case J:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var me=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ye=[],Se=-1;function O(t){return{current:t}}function se(t){0>Se||(t.current=ye[Se],ye[Se]=null,Se--)}function be(t,n){Se++,ye[Se]=t.current,t.current=n}var Ae=O(null),Pe=O(null),re=O(null),fe=O(null);function Re(t,n){switch(be(re,n),be(Pe,t),be(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?hx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=hx(n),t=px(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(Ae),be(Ae,t)}function Ve(){se(Ae),se(Pe),se(re)}function qe(t){t.memoizedState!==null&&be(fe,t);var n=Ae.current,a=px(n,t.type);n!==a&&(be(Pe,t),be(Ae,a))}function lt(t){Pe.current===t&&(se(Ae),se(Pe)),fe.current===t&&(se(fe),Do._currentValue=Y)}var Jt,ut;function Rt(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+ut}var H=!1;function ft(t,n){if(!t||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(le){var ae=le}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(le){ae=le}t.call(ve.prototype)}}else{try{throw Error()}catch(le){ae=le}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var B=S.split(`
`),ee=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ee.length)for(o=B.length-1,u=ee.length-1;1<=o&&0<=u&&B[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ee[u]){var pe=`
`+B[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Rt(a):""}function xt(t,n){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==n&&n!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return Rt("Activity");default:return""}}function vt(t){try{var n="",a=null;do n+=xt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ie=Object.prototype.hasOwnProperty,It=r.unstable_scheduleCallback,Ye=r.unstable_cancelCallback,it=r.unstable_shouldYield,D=r.unstable_requestPaint,_=r.unstable_now,I=r.unstable_getCurrentPriorityLevel,Q=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,ze=r.unstable_LowPriority,Ue=r.unstable_IdlePriority,Ze=r.log,We=r.unstable_setDisableYieldValue,Me=null,Te=null;function Ke(t){if(typeof Ze=="function"&&We(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Me,t)}catch{}}var Xe=Math.clz32?Math.clz32:V,Fe=Math.log,at=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(Fe(t)/at|0)|0}var Le=256,we=262144,De=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Ee(o):(S&=A,S!==0?u=Ee(S):a||(a=A&~t,a!==0&&(u=Ee(a))))):(A=o&~f,A!==0?u=Ee(A):S!==0?u=Ee(S):a||(a=o&~t,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function rt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=De;return De<<=1,(De&62914560)===0&&(De=4194304),t}function wt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jn(t,n,a,o,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,ee=t.hiddenUpdates;for(a=S&~a;0<a;){var pe=31-Xe(a),ve=1<<pe;A[pe]=0,B[pe]=-1;var ae=ee[pe];if(ae!==null)for(ee[pe]=null,pe=0;pe<ae.length;pe++){var le=ae[pe];le!==null&&(le.lane&=-536870913)}a&=~ve}o!==0&&ol(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function ol(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Gs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Vs(t,n){var a=n&-n;return a=(a&42)!==0?1:gi(a),(a&(t.suspendedLanes|n))!==0?0:a}function gi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ks(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Fx(t.type))}function Xs(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var Yn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Yn,mn="__reactProps$"+Yn,Hi="__reactContainer$"+Yn,Fr="__reactEvents$"+Yn,uu="__reactListeners$"+Yn,fu="__reactHandles$"+Yn,ll="__reactResources$"+Yn,sr="__reactMarker$"+Yn;function Ws(t){delete t[ln],delete t[mn],delete t[Fr],delete t[uu],delete t[fu]}function ba(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Sx(t);t!==null;){if(a=t[ln])return a;t=Sx(t)}return n}t=a,a=t.parentNode}return null}function R(t){if(t=t[ln]||t[Hi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function oe(t){var n=t[ll];return n||(n=t[ll]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function te(t){t[sr]=!0}var Z=new Set,Ce={};function Ne(t,n){Be(t,n),Be(t+"Capture",n)}function Be(t,n){for(Ce[t]=n,t=0;t<n.length;t++)Z.add(n[t])}var Ge=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},nt={};function Qe(t){return Ie.call(nt,t)?!0:Ie.call(et,t)?!1:Ge.test(t)?nt[t]=!0:(et[t]=!0,!1)}function ht(t,n,a){if(Qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ct(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Dt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Mt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=zt(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function Et(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=zt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function yn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ma=/[\n"\\]/g;function jt(t){return t.replace(Ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gi(t,n,a,o,u,f,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Mt(n)):t.value!==""+Mt(n)&&(t.value=""+Mt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,S,Mt(n)):a!=null?Sn(t,S,Mt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Mt(A):t.removeAttribute("name")}function Yt(t,n,a,o,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(t);return}a=a!=null?""+Mt(a):"",n=n!=null?""+Mt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Wt(t)}function Sn(t,n,a){n==="number"&&yn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Mt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function bn(t,n,a){if(n!=null&&(n=""+Mt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Mt(a):""}function Tn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(me(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Mt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wt(t)}function Ci(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function up(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Vi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function fp(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&up(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&up(t,f,n[f])}function du(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $v=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(t){return e_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var hu=null;function pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,Ir=null;function dp(t){var n=R(t);if(n&&(t=n.stateNode)){var a=t[mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Gi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[mn]||null;if(!u)throw Error(s(90));Gi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Et(o)}break e;case"textarea":bn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var mu=!1;function hp(t,n,a){if(mu)return t(n,a);mu=!0;try{var o=t(n);return o}finally{if(mu=!1,(Br!==null||Ir!==null)&&(Kl(),Br&&(n=Br,t=Ir,Ir=Br=null,dp(n),t)))for(n=0;n<t.length;n++)dp(t[n])}}function qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Xi)try{var js={};Object.defineProperty(js,"passive",{get:function(){xu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{xu=!1}var Ea=null,gu=null,ul=null;function pp(){if(ul)return ul;var t,n=gu,a=n.length,o,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return ul=u.slice(t,1<o?1-o:void 0)}function fl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function mp(){return!1}function Bn(t){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?dl:mp,this.isPropagationStopped=mp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Bn(or),Ys=g({},or,{view:0,detail:0}),t_=Bn(Ys),vu,_u,Zs,pl=g({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(vu=t.screenX-Zs.screenX,_u=t.screenY-Zs.screenY):_u=vu=0,Zs=t),vu)},movementY:function(t){return"movementY"in t?t.movementY:_u}}),xp=Bn(pl),n_=g({},pl,{dataTransfer:0}),i_=Bn(n_),a_=g({},Ys,{relatedTarget:0}),yu=Bn(a_),r_=g({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),s_=Bn(r_),o_=g({},or,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l_=Bn(o_),c_=g({},or,{data:0}),gp=Bn(c_),u_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=d_[t])?!!n[t]:!1}function Su(){return h_}var p_=g({},Ys,{key:function(t){if(t.key){var n=u_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),m_=Bn(p_),x_=g({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=Bn(x_),g_=g({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),v_=Bn(g_),__=g({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),y_=Bn(__),S_=g({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),b_=Bn(S_),M_=g({},or,{newState:0,oldState:0}),E_=Bn(M_),T_=[9,13,27,32],bu=Xi&&"CompositionEvent"in window,Ks=null;Xi&&"documentMode"in document&&(Ks=document.documentMode);var A_=Xi&&"TextEvent"in window&&!Ks,_p=Xi&&(!bu||Ks&&8<Ks&&11>=Ks),yp=" ",Sp=!1;function bp(t,n){switch(t){case"keyup":return T_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function R_(t,n){switch(t){case"compositionend":return Mp(n);case"keypress":return n.which!==32?null:(Sp=!0,yp);case"textInput":return t=n.data,t===yp&&Sp?null:t;default:return null}}function C_(t,n){if(Hr)return t==="compositionend"||!bu&&bp(t,n)?(t=pp(),ul=gu=Ea=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _p&&n.locale!=="ko"?null:n.data;default:return null}}var w_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!w_[t.type]:n==="textarea"}function Tp(t,n,a,o){Br?Ir?Ir.push(o):Ir=[o]:Br=o,n=ic(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Qs=null,Js=null;function D_(t){ox(t,0)}function ml(t){var n=q(t);if(Et(n))return t}function Ap(t,n){if(t==="change")return n}var Rp=!1;if(Xi){var Mu;if(Xi){var Eu="oninput"in document;if(!Eu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),Eu=typeof Cp.oninput=="function"}Mu=Eu}else Mu=!1;Rp=Mu&&(!document.documentMode||9<document.documentMode)}function wp(){Qs&&(Qs.detachEvent("onpropertychange",Dp),Js=Qs=null)}function Dp(t){if(t.propertyName==="value"&&ml(Js)){var n=[];Tp(n,Js,t,pu(t)),hp(D_,n)}}function U_(t,n,a){t==="focusin"?(wp(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",Dp)):t==="focusout"&&wp()}function L_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(Js)}function N_(t,n){if(t==="click")return ml(n)}function O_(t,n){if(t==="input"||t==="change")return ml(n)}function P_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:P_;function $s(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ie.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function Up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,n){var a=Up(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Up(a)}}function Np(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Np(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Op(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=yn(t.document)}return n}function Tu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var z_=Xi&&"documentMode"in document&&11>=document.documentMode,Gr=null,Au=null,eo=null,Ru=!1;function Pp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ru||Gr==null||Gr!==yn(o)||(o=Gr,"selectionStart"in o&&Tu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),eo&&$s(eo,o)||(eo=o,o=ic(Au,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Gr)))}function lr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},Cu={},zp={};Xi&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function cr(t){if(Cu[t])return Cu[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return Cu[t]=n[a];return t}var Fp=cr("animationend"),Bp=cr("animationiteration"),Ip=cr("animationstart"),F_=cr("transitionrun"),B_=cr("transitionstart"),I_=cr("transitioncancel"),Hp=cr("transitionend"),Gp=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function vi(t,n){Gp.set(t,n),Ne(n,[t])}var xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],kr=0,Du=0;function gl(){for(var t=kr,n=Du=kr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Vp(a,u,f)}}function vl(t,n,a,o){si[kr++]=t,si[kr++]=n,si[kr++]=a,si[kr++]=o,Du|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Uu(t,n,a,o){return vl(t,n,a,o),_l(t)}function ur(t,n){return vl(t,null,null,n),_l(t)}function Vp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Xe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function _l(t){if(50<Mo)throw Mo=0,Gf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function H_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new H_(t,n,a,o)}function Lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function kp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,o,u,f){var S=0;if(o=t,typeof t=="function")Lu(t)&&(S=1);else if(typeof t=="string")S=Wy(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Kn(31,a,n,u),t.elementType=w,t.lanes=f,t;case T:return fr(a.children,u,f,n);case M:S=8,u|=24;break;case v:return t=Kn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case G:return t=Kn(13,a,n,u),t.elementType=G,t.lanes=f,t;case N:return t=Kn(19,a,n,u),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case U:S=9;break e;case P:S=11;break e;case z:S=14;break e;case J:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Kn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function fr(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function Nu(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Xp(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Ou(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Wp=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=Wp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:vt(n)},Wp.set(t,n),n)}return{value:t,source:n,stack:vt(n)}}var Wr=[],qr=0,Sl=null,to=0,li=[],ci=0,Ta=null,wi=1,Di="";function qi(t,n){Wr[qr++]=to,Wr[qr++]=Sl,Sl=t,to=n}function qp(t,n,a){li[ci++]=wi,li[ci++]=Di,li[ci++]=Ta,Ta=t;var o=wi;t=Di;var u=32-Xe(o)-1;o&=~(1<<u),a+=1;var f=32-Xe(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,wi=1<<32-Xe(n)+u|a<<u|o,Di=f+t}else wi=1<<f|a<<u|o,Di=t}function Pu(t){t.return!==null&&(qi(t,1),qp(t,1,0))}function zu(t){for(;t===Sl;)Sl=Wr[--qr],Wr[qr]=null,to=Wr[--qr],Wr[qr]=null;for(;t===Ta;)Ta=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null,wi=li[--ci],li[ci]=null}function jp(t,n){li[ci++]=wi,li[ci++]=Di,li[ci++]=Ta,wi=n.id,Di=n.overflow,Ta=t}var An=null,Zt=null,Tt=!1,Aa=null,ui=!1,Fu=Error(s(519));function Ra(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(oi(n,t)),Fu}function Yp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[mn]=o,a){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)yt(To[a],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Yt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||fx(n.textContent,a)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ra(t,!0)}function Zp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:An=An.return}}function jr(t){if(t!==An)return!1;if(!Tt)return Zp(t),Tt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||nd(t.type,t.memoizedProps)),a=!a),a&&Zt&&Ra(t),Zp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=yx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=yx(t)}else n===27?(n=Zt,Ga(t.type)?(t=od,od=null,Zt=t):Zt=n):Zt=An?di(t.stateNode.nextSibling):null;return!0}function dr(){Zt=An=null,Tt=!1}function Bu(){var t=Aa;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Aa=null),t}function no(t){Aa===null?Aa=[t]:Aa.push(t)}var Iu=O(null),hr=null,ji=null;function Ca(t,n,a){be(Iu,n._currentValue),n._currentValue=a}function Yi(t){t._currentValue=Iu.current,se(Iu)}function Hu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Gu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Hu(f.return,a,t),o||(S=null);break e}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Hu(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Yr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;Zn(u.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(u===fe.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&Gu(n,t,a,o),n.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pr(t){hr=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Kp(hr,t)}function Ml(t,n){return hr===null&&pr(t),Kp(t,n)}function Kp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(t===null)throw Error(s(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return a}var G_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},V_=r.unstable_scheduleCallback,k_=r.unstable_NormalPriority,cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new G_,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&V_(k_,function(){t.controller.abort()})}var ao=null,ku=0,Zr=0,Kr=null;function X_(t,n){if(ao===null){var a=ao=[];ku=0,Zr=jf(),Kr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ku++,n.then(Qp,Qp),n}function Qp(){if(--ku===0&&ao!==null){Kr!==null&&(Kr.status="fulfilled");var t=ao;ao=null,Zr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function W_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Jp=F.S;F.S=function(t,n){P0=_(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&X_(t,n),Jp!==null&&Jp(t,n)};var mr=O(null);function Xu(){var t=mr.current;return t!==null?t:qt.pooledCache}function El(t,n){n===null?be(mr,mr.current):be(mr,n.pool)}function $p(){var t=Xu();return t===null?null:{parent:cn._currentValue,pool:t}}var Qr=Error(s(460)),Wu=Error(s(474)),Tl=Error(s(542)),Al={then:function(){}};function em(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,im(t),t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,im(t),t}throw gr=n,Qr}}function xr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,Qr):a}}var gr=null;function nm(){if(gr===null)throw Error(s(459));var t=gr;return gr=null,t}function im(t){if(t===Qr||t===Tl)throw Error(s(483))}var Jr=null,ro=0;function Rl(t){var n=ro;return ro+=1,Jr===null&&(Jr=[]),tm(Jr,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Cl(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function am(t){function n(j,X){if(t){var $=j.deletions;$===null?(j.deletions=[X],j.flags|=16):$.push(X)}}function a(j,X){if(!t)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function o(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=Wi(j,X),j.index=0,j.sibling=null,j}function f(j,X,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<X?(j.flags|=67108866,X):$):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function S(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,$,ge){return X===null||X.tag!==6?(X=Nu($,j.mode,ge),X.return=j,X):(X=u(X,$),X.return=j,X)}function B(j,X,$,ge){var Je=$.type;return Je===T?pe(j,X,$.props.children,ge,$.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===J&&xr(Je)===X.type)?(X=u(X,$.props),so(X,$),X.return=j,X):(X=yl($.type,$.key,$.props,null,j.mode,ge),so(X,$),X.return=j,X)}function ee(j,X,$,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Ou($,j.mode,ge),X.return=j,X):(X=u(X,$.children||[]),X.return=j,X)}function pe(j,X,$,ge,Je){return X===null||X.tag!==7?(X=fr($,j.mode,ge,Je),X.return=j,X):(X=u(X,$),X.return=j,X)}function ve(j,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Nu(""+X,j.mode,$),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case b:return $=yl(X.type,X.key,X.props,null,j.mode,$),so($,X),$.return=j,$;case E:return X=Ou(X,j.mode,$),X.return=j,X;case J:return X=xr(X),ve(j,X,$)}if(me(X)||ne(X))return X=fr(X,j.mode,$,null),X.return=j,X;if(typeof X.then=="function")return ve(j,Rl(X),$);if(X.$$typeof===L)return ve(j,Ml(j,X),$);Cl(j,X)}return null}function ae(j,X,$,ge){var Je=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Je!==null?null:A(j,X,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case b:return $.key===Je?B(j,X,$,ge):null;case E:return $.key===Je?ee(j,X,$,ge):null;case J:return $=xr($),ae(j,X,$,ge)}if(me($)||ne($))return Je!==null?null:pe(j,X,$,ge,null);if(typeof $.then=="function")return ae(j,X,Rl($),ge);if($.$$typeof===L)return ae(j,X,Ml(j,$),ge);Cl(j,$)}return null}function le(j,X,$,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return j=j.get($)||null,A(X,j,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case b:return j=j.get(ge.key===null?$:ge.key)||null,B(X,j,ge,Je);case E:return j=j.get(ge.key===null?$:ge.key)||null,ee(X,j,ge,Je);case J:return ge=xr(ge),le(j,X,$,ge,Je)}if(me(ge)||ne(ge))return j=j.get($)||null,pe(X,j,ge,Je,null);if(typeof ge.then=="function")return le(j,X,$,Rl(ge),Je);if(ge.$$typeof===L)return le(j,X,$,Ml(X,ge),Je);Cl(X,ge)}return null}function ke(j,X,$,ge){for(var Je=null,Ut=null,je=X,pt=X=0,bt=null;je!==null&&pt<$.length;pt++){je.index>pt?(bt=je,je=null):bt=je.sibling;var Lt=ae(j,je,$[pt],ge);if(Lt===null){je===null&&(je=bt);break}t&&je&&Lt.alternate===null&&n(j,je),X=f(Lt,X,pt),Ut===null?Je=Lt:Ut.sibling=Lt,Ut=Lt,je=bt}if(pt===$.length)return a(j,je),Tt&&qi(j,pt),Je;if(je===null){for(;pt<$.length;pt++)je=ve(j,$[pt],ge),je!==null&&(X=f(je,X,pt),Ut===null?Je=je:Ut.sibling=je,Ut=je);return Tt&&qi(j,pt),Je}for(je=o(je);pt<$.length;pt++)bt=le(je,j,pt,$[pt],ge),bt!==null&&(t&&bt.alternate!==null&&je.delete(bt.key===null?pt:bt.key),X=f(bt,X,pt),Ut===null?Je=bt:Ut.sibling=bt,Ut=bt);return t&&je.forEach(function(qa){return n(j,qa)}),Tt&&qi(j,pt),Je}function tt(j,X,$,ge){if($==null)throw Error(s(151));for(var Je=null,Ut=null,je=X,pt=X=0,bt=null,Lt=$.next();je!==null&&!Lt.done;pt++,Lt=$.next()){je.index>pt?(bt=je,je=null):bt=je.sibling;var qa=ae(j,je,Lt.value,ge);if(qa===null){je===null&&(je=bt);break}t&&je&&qa.alternate===null&&n(j,je),X=f(qa,X,pt),Ut===null?Je=qa:Ut.sibling=qa,Ut=qa,je=bt}if(Lt.done)return a(j,je),Tt&&qi(j,pt),Je;if(je===null){for(;!Lt.done;pt++,Lt=$.next())Lt=ve(j,Lt.value,ge),Lt!==null&&(X=f(Lt,X,pt),Ut===null?Je=Lt:Ut.sibling=Lt,Ut=Lt);return Tt&&qi(j,pt),Je}for(je=o(je);!Lt.done;pt++,Lt=$.next())Lt=le(je,j,pt,Lt.value,ge),Lt!==null&&(t&&Lt.alternate!==null&&je.delete(Lt.key===null?pt:Lt.key),X=f(Lt,X,pt),Ut===null?Je=Lt:Ut.sibling=Lt,Ut=Lt);return t&&je.forEach(function(nS){return n(j,nS)}),Tt&&qi(j,pt),Je}function kt(j,X,$,ge){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case b:e:{for(var Je=$.key;X!==null;){if(X.key===Je){if(Je=$.type,Je===T){if(X.tag===7){a(j,X.sibling),ge=u(X,$.props.children),ge.return=j,j=ge;break e}}else if(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===J&&xr(Je)===X.type){a(j,X.sibling),ge=u(X,$.props),so(ge,$),ge.return=j,j=ge;break e}a(j,X);break}else n(j,X);X=X.sibling}$.type===T?(ge=fr($.props.children,j.mode,ge,$.key),ge.return=j,j=ge):(ge=yl($.type,$.key,$.props,null,j.mode,ge),so(ge,$),ge.return=j,j=ge)}return S(j);case E:e:{for(Je=$.key;X!==null;){if(X.key===Je)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(j,X.sibling),ge=u(X,$.children||[]),ge.return=j,j=ge;break e}else{a(j,X);break}else n(j,X);X=X.sibling}ge=Ou($,j.mode,ge),ge.return=j,j=ge}return S(j);case J:return $=xr($),kt(j,X,$,ge)}if(me($))return ke(j,X,$,ge);if(ne($)){if(Je=ne($),typeof Je!="function")throw Error(s(150));return $=Je.call($),tt(j,X,$,ge)}if(typeof $.then=="function")return kt(j,X,Rl($),ge);if($.$$typeof===L)return kt(j,X,Ml(j,$),ge);Cl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(j,X.sibling),ge=u(X,$),ge.return=j,j=ge):(a(j,X),ge=Nu($,j.mode,ge),ge.return=j,j=ge),S(j)):a(j,X)}return function(j,X,$,ge){try{ro=0;var Je=kt(j,X,$,ge);return Jr=null,Je}catch(je){if(je===Qr||je===Tl)throw je;var Ut=Kn(29,je,null,j.mode);return Ut.lanes=ge,Ut.return=j,Ut}finally{}}}var vr=am(!0),rm=am(!1),wa=!1;function qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(t),Vp(t,null,a),n}return vl(t,o,n,a),_l(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Gs(t,a)}}function Yu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Zu=!1;function lo(){if(Zu){var t=Kr;if(t!==null)throw t}}function co(t,n,a,o){Zu=!1;var u=t.updateQueue;wa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,ee=B.next;B.next=null,S===null?f=ee:S.next=ee,S=B;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==S&&(A===null?pe.firstBaseUpdate=ee:A.next=ee,pe.lastBaseUpdate=B))}if(f!==null){var ve=u.baseState;S=0,pe=ee=B=null,A=f;do{var ae=A.lane&-536870913,le=ae!==A.lane;if(le?(St&ae)===ae:(o&ae)===ae){ae!==0&&ae===Zr&&(Zu=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ke=t,tt=A;ae=n;var kt=a;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){ve=ke.call(kt,ve,ae);break e}ve=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,ae=typeof ke=="function"?ke.call(kt,ve,ae):ke,ae==null)break e;ve=g({},ve,ae);break e;case 2:wa=!0}}ae=A.callback,ae!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(ee=pe=le,B=ve):pe=pe.next=le,S|=ae;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;le=A,A=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);pe===null&&(B=ve),u.baseState=B,u.firstBaseUpdate=ee,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),za|=S,t.lanes=S,t.memoizedState=ve}}function sm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function om(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)sm(a[t],n)}var $r=O(null),wl=O(0);function lm(t,n){t=ia,be(wl,t),be($r,n),ia=t|n.baseLanes}function Ku(){be(wl,ia),be($r,$r.current)}function Qu(){ia=wl.current,se($r),se(wl)}var Qn=O(null),fi=null;function La(t){var n=t.alternate;be(rn,rn.current&1),be(Qn,t),fi===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(fi=t)}function Ju(t){be(rn,rn.current),be(Qn,t),fi===null&&(fi=t)}function cm(t){t.tag===22?(be(rn,rn.current),be(Qn,t),fi===null&&(fi=t)):Na()}function Na(){be(rn,rn.current),be(Qn,Qn.current)}function Jn(t){se(Qn),fi===t&&(fi=null),se(rn)}var rn=O(0);function Dl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rd(a)||sd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,dt=null,Gt=null,un=null,Ul=!1,es=!1,_r=!1,Ll=0,uo=0,ts=null,q_=0;function tn(){throw Error(s(321))}function $u(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function ef(t,n,a,o,u,f){return Zi=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?qm:xf,_r=!1,f=a(o,u),_r=!1,es&&(f=fm(n,a,o,u)),um(t),f}function um(t){F.H=po;var n=Gt!==null&&Gt.next!==null;if(Zi=0,un=Gt=dt=null,Ul=!1,uo=0,ts=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&bl(t)&&(fn=!0))}function fm(t,n,a,o){dt=t;var u=0;do{if(es&&(ts=null),uo=0,es=!1,25<=u)throw Error(s(301));if(u+=1,un=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=jm,f=n(a,o)}while(es);return f}function j_(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(dt.flags|=1024),n}function tf(){var t=Ll!==0;return Ll=0,t}function nf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function af(t){if(Ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ul=!1}Zi=0,un=Gt=dt=null,es=!1,uo=Ll=0,ts=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?dt.memoizedState=un=t:un=un.next=t,un}function sn(){if(Gt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=un===null?dt.memoizedState:un.next;if(n!==null)un=n,Gt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},un===null?dt.memoizedState=un=t:un=un.next=t}return un}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,ts===null&&(ts=[]),t=tm(ts,t,n),n=dt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?qm:xf),t}function Ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===L)return Rn(t)}throw Error(s(438,String(t)))}function rf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Nl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function Pl(t){var n=sn();return sf(n,Gt,t)}function sf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=S=null,B=null,ee=n,pe=!1;do{var ve=ee.lane&-536870913;if(ve!==ee.lane?(St&ve)===ve:(Zi&ve)===ve){var ae=ee.revertLane;if(ae===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),ve===Zr&&(pe=!0);else if((Zi&ae)===ae){ee=ee.next,ae===Zr&&(pe=!0);continue}else ve={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(A=B=ve,S=f):B=B.next=ve,dt.lanes|=ae,za|=ae;ve=ee.action,_r&&a(f,ve),f=ee.hasEagerState?ee.eagerState:a(f,ve)}else ae={lane:ve,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(A=B=ae,S=f):B=B.next=ae,dt.lanes|=ve,za|=ve;ee=ee.next}while(ee!==null&&ee!==n);if(B===null?S=f:B.next=A,!Zn(f,t.memoizedState)&&(fn=!0,pe&&(a=Kr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function of(t){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Zn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function dm(t,n,a){var o=dt,u=sn(),f=Tt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Zn((Gt||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,uf(mm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ns(9,{destroy:void 0},pm.bind(null,o,u,a,n),null),qt===null)throw Error(s(349));f||(Zi&127)!==0||hm(o,n,a)}return a}function hm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Nl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function pm(t,n,a,o){n.value=a,n.getSnapshot=o,xm(n)&&gm(t)}function mm(t,n,a){return a(function(){xm(n)&&gm(t)})}function xm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function gm(t){var n=ur(t,2);n!==null&&kn(n,t,2)}function lf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),_r){Ke(!0);try{a()}finally{Ke(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function vm(t,n,a,o){return t.baseState=a,sf(t,Gt,typeof o=="function"?o:Ki)}function Y_(t,n,a,o,u){if(Bl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,_m(n,f)):(f.next=a.next,n.pending=a.next=f)}}function _m(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=F.T,S={};F.T=S;try{var A=a(u,o),B=F.S;B!==null&&B(S,A),ym(t,n,A)}catch(ee){cf(t,n,ee)}finally{f!==null&&S.types!==null&&(f.types=S.types),F.T=f}}else try{f=a(u,o),ym(t,n,f)}catch(ee){cf(t,n,ee)}}function ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Sm(t,n,o)},function(o){return cf(t,n,o)}):Sm(t,n,a)}function Sm(t,n,a){n.status="fulfilled",n.value=a,bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_m(t,a)))}function cf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,bm(n),n=n.next;while(n!==o)}t.action=null}function bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Mm(t,n){return n}function Em(t,n){if(Tt){var a=qt.formState;if(a!==null){e:{var o=dt;if(Tt){if(Zt){t:{for(var u=Zt,f=ui;u.nodeType!==8;){if(!f){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=di(u.nextSibling),o=u.data==="F!";break e}}Ra(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:n},a.queue=o,a=km.bind(null,dt,o),o.dispatch=a,o=lf(!1),f=mf.bind(null,dt,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Y_.bind(null,dt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Tm(t){var n=sn();return Am(n,Gt,t)}function Am(t,n,a){if(n=sf(t,n,Mm)[0],t=Pl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(S){throw S===Qr?Tl:S}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,ns(9,{destroy:void 0},Z_.bind(null,u,a),null)),[o,f,t]}function Z_(t,n){t.action=n}function Rm(t){var n=sn(),a=Gt;if(a!==null)return Am(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ns(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Nl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Cm(){return sn().memoizedState}function zl(t,n,a,o){var u=Pn();dt.flags|=t,u.memoizedState=ns(1|n,{destroy:void 0},a,o===void 0?null:o)}function Fl(t,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Gt!==null&&o!==null&&$u(o,Gt.memoizedState.deps)?u.memoizedState=ns(n,f,a,o):(dt.flags|=t,u.memoizedState=ns(1|n,f,a,o))}function wm(t,n){zl(8390656,8,t,n)}function uf(t,n){Fl(2048,8,t,n)}function K_(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Nl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Dm(t){var n=sn().memoizedState;return K_({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Um(t,n){return Fl(4,2,t,n)}function Lm(t,n){return Fl(4,4,t,n)}function Nm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Om(t,n,a){a=a!=null?a.concat([t]):null,Fl(4,4,Nm.bind(null,n,t),a)}function ff(){}function Pm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&$u(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function zm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&$u(n,o[1]))return o[0];if(o=t(),_r){Ke(!0);try{t()}finally{Ke(!1)}}return a.memoizedState=[o,n],o}function df(t,n,a){return a===void 0||(Zi&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=F0(),dt.lanes|=t,za|=t,a)}function Fm(t,n,a,o){return Zn(a,n)?a:$r.current!==null?(t=df(t,a,o),Zn(t,n)||(fn=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(St&261930)===0?(fn=!0,t.memoizedState=a):(t=F0(),dt.lanes|=t,za|=t,n)}function Bm(t,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var S=F.T,A={};F.T=A,mf(t,!1,n,a);try{var B=u(),ee=F.S;if(ee!==null&&ee(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pe=W_(B,o);ho(t,n,pe,ti(t))}else ho(t,n,o,ti(t))}catch(ve){ho(t,n,{then:function(){},status:"rejected",reason:ve},ti())}finally{K.p=f,S!==null&&A.types!==null&&(S.types=A.types),F.T=S}}function Q_(){}function hf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Im(t).queue;Bm(t,u,n,Y,a===null?Q_:function(){return Hm(t),a(o)})}function Im(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Hm(t){var n=Im(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},ti())}function pf(){return Rn(Do)}function Gm(){return sn().memoizedState}function Vm(){return sn().memoizedState}function J_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Da(a);var o=Ua(n,t,a);o!==null&&(kn(o,n,a),oo(o,n,a)),n={cache:Vu()},t.payload=n;return}n=n.return}}function $_(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bl(t)?Xm(n,a):(a=Uu(t,n,a,o),a!==null&&(kn(a,t,o),Wm(a,n,o)))}function km(t,n,a){var o=ti();ho(t,n,a,o)}function ho(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bl(t))Xm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,Zn(A,S))return vl(t,n,u,0),qt===null&&gl(),!1}catch{}finally{}if(a=Uu(t,n,u,o),a!==null)return kn(a,t,o),Wm(a,n,o),!0}return!1}function mf(t,n,a,o){if(o={lane:2,revertLane:jf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bl(t)){if(n)throw Error(s(479))}else n=Uu(t,a,o,2),n!==null&&kn(n,t,2)}function Bl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Xm(t,n){es=Ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Wm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Gs(t,a)}}var po={readContext:Rn,use:Ol,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};po.useEffectEvent=tn;var qm={readContext:Rn,use:Ol,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:wm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,zl(4194308,4,Nm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return zl(4194308,4,t,n)},useInsertionEffect:function(t,n){zl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(_r){Ke(!0);try{t()}finally{Ke(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(_r){Ke(!0);try{a(n)}finally{Ke(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=$_.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=lf(t);var n=t.queue,a=km.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ff,useDeferredValue:function(t,n){var a=Pn();return df(a,t,n)},useTransition:function(){var t=lf(!1);return t=Bm.bind(null,dt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=Pn();if(Tt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qt===null)throw Error(s(349));(St&127)!==0||hm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,wm(mm.bind(null,o,f,t),[t]),o.flags|=2048,ns(9,{destroy:void 0},pm.bind(null,o,f,a,n),null),a},useId:function(){var t=Pn(),n=qt.identifierPrefix;if(Tt){var a=Di,o=wi;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ll++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=q_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:pf,useFormState:Em,useActionState:Em,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=mf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:rf,useCacheRefresh:function(){return Pn().memoizedState=J_.bind(null,dt)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:Rn,use:Ol,useCallback:Pm,useContext:Rn,useEffect:uf,useImperativeHandle:Om,useInsertionEffect:Um,useLayoutEffect:Lm,useMemo:zm,useReducer:Pl,useRef:Cm,useState:function(){return Pl(Ki)},useDebugValue:ff,useDeferredValue:function(t,n){var a=sn();return Fm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Pl(Ki)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:dm,useId:Gm,useHostTransitionStatus:pf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t,n){var a=sn();return vm(a,Gt,t,n)},useMemoCache:rf,useCacheRefresh:Vm};xf.useEffectEvent=Dm;var jm={readContext:Rn,use:Ol,useCallback:Pm,useContext:Rn,useEffect:uf,useImperativeHandle:Om,useInsertionEffect:Um,useLayoutEffect:Lm,useMemo:zm,useReducer:of,useRef:Cm,useState:function(){return of(Ki)},useDebugValue:ff,useDeferredValue:function(t,n){var a=sn();return Gt===null?df(a,t,n):Fm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=of(Ki)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:dm,useId:Gm,useHostTransitionStatus:pf,useFormState:Rm,useActionState:Rm,useOptimistic:function(t,n){var a=sn();return Gt!==null?vm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rf,useCacheRefresh:Vm};jm.useEffectEvent=Dm;function gf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Da(o);u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,o),n!==null&&(kn(n,t,o),oo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Da(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,o),n!==null&&(kn(n,t,o),oo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=Da(a);o.tag=2,n!=null&&(o.callback=n),n=Ua(t,o,a),n!==null&&(kn(n,t,a),oo(n,t,a))}};function Ym(t,n,a,o,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!$s(a,o)||!$s(u,f):!0}function Zm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&vf.enqueueReplaceState(n,n.state,null)}function yr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Km(t){xl(t)}function Qm(t){console.error(t)}function Jm(t){xl(t)}function Il(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function $m(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(t,n)},a}function e0(t){return t=Da(t),t.tag=3,t}function t0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){$m(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){$m(n,a,o),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function ey(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Yr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Ql():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(t,o,u)),!1;case 22:return a.flags|=65536,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(t,o,u)),!1}throw Error(s(435,a.tag))}return Xf(t,o,u),Ql(),!1}if(Tt)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Fu&&(t=Error(s(422),{cause:o}),no(oi(t,a)))):(o!==Fu&&(n=Error(s(423),{cause:o}),no(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=_f(t.stateNode,o,u),Yu(t,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=oi(f,a),bo===null?bo=[f]:bo.push(f),nn!==4&&(nn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=_f(a.stateNode,o,t),Yu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=e0(u),t0(u,t,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var yf=Error(s(461)),fn=!1;function Cn(t,n,a,o){n.child=t===null?rm(n,null,a,o):vr(n,t.child,a,o)}function n0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return pr(n),o=ef(t,n,a,S,f,u),A=tf(),t!==null&&!fn?(nf(t,n,u),Qi(t,n,u)):(Tt&&A&&Pu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function i0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Lu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,a0(t,n,f,o,u)):(t=yl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Cf(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(S,o)&&t.ref===n.ref)return Qi(t,n,u)}return n.flags|=1,t=Wi(f,o),t.ref=n.ref,t.return=n,n.child=t}function a0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if($s(f,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Cf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,Qi(t,n,u)}return Sf(t,n,a,o,u)}function r0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return s0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&El(n,f!==null?f.cachePool:null),f!==null?lm(n,f):Ku(),cm(n);else return o=n.lanes=536870912,s0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(El(n,f.cachePool),lm(n,f),Na(),n.memoizedState=null):(t!==null&&El(n,null),Ku(),Na());return Cn(t,n,u,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function s0(t,n,a,o,u){var f=Xu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&El(n,null),Ku(),cm(n),t!==null&&Yr(t,n,o,!0),n.childLanes=u,null}function Hl(t,n){return n=Vl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function o0(t,n,a){return vr(n,t.child,null,a),t=Hl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function ty(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=Hl(n,o),n.lanes=536870912,mo(null,t);if(Ju(n),(t=Zt)?(t=_x(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Xp(t),a.return=n,n.child=a,An=n,Zt=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Hl(n,o)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(Ju(n),u)if(n.flags&256)n.flags&=-257,n=o0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Yr(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(o=qt,o!==null&&(S=Vs(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,ur(t,S),kn(o,t,S),yf;Ql(),n=o0(t,n,a)}else t=f.treeContext,Zt=di(S.nextSibling),An=n,Tt=!0,Aa=null,ui=!1,t!==null&&jp(n,t),n=Hl(n,o),n.flags|=4096;return n}return t=Wi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Sf(t,n,a,o,u){return pr(n),a=ef(t,n,a,o,void 0,u),o=tf(),t!==null&&!fn?(nf(t,n,u),Qi(t,n,u)):(Tt&&o&&Pu(n),n.flags|=1,Cn(t,n,a,u),n.child)}function l0(t,n,a,o,u,f){return pr(n),n.updateQueue=null,a=fm(n,o,a,u),um(t),o=tf(),t!==null&&!fn?(nf(t,n,f),Qi(t,n,f)):(Tt&&o&&Pu(n),n.flags|=1,Cn(t,n,a,f),n.child)}function c0(t,n,a,o,u){if(pr(n),n.stateNode===null){var f=Xr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=vf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},qu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Xr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(gf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&vf.enqueueReplaceState(f,f.state,null),co(n,o,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,B=yr(a,A);f.props=B;var ee=f.context,pe=a.contextType;S=Xr,typeof pe=="object"&&pe!==null&&(S=Rn(pe));var ve=a.getDerivedStateFromProps;pe=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ee!==S)&&Zm(n,f,o,S),wa=!1;var ae=n.memoizedState;f.state=ae,co(n,o,f,u),lo(),ee=n.memoizedState,A||ae!==ee||wa?(typeof ve=="function"&&(gf(n,a,ve,o),ee=n.memoizedState),(B=wa||Ym(n,a,B,o,ae,ee,S))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),f.props=o,f.state=ee,f.context=S,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ju(t,n),S=n.memoizedProps,pe=yr(a,S),f.props=pe,ve=n.pendingProps,ae=f.context,ee=a.contextType,B=Xr,typeof ee=="object"&&ee!==null&&(B=Rn(ee)),A=a.getDerivedStateFromProps,(ee=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==ve||ae!==B)&&Zm(n,f,o,B),wa=!1,ae=n.memoizedState,f.state=ae,co(n,o,f,u),lo();var le=n.memoizedState;S!==ve||ae!==le||wa||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof A=="function"&&(gf(n,a,A,o),le=n.memoizedState),(pe=wa||Ym(n,a,pe,o,ae,le,B)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(ee||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=B,o=pe):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Gl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=vr(n,t.child,null,u),n.child=vr(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Qi(t,n,u),t}function u0(t,n,a,o){return dr(),n.flags|=256,Cn(t,n,a,o),n.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(t){return{baseLanes:t,cachePool:$p()}}function Ef(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function f0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(u?La(n):Na(),(t=Zt)?(t=_x(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Xp(t),a.return=n,n.child=a,An=n,Zt=null)):t=null,t===null)throw Ra(n);return sd(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Na(),u=n.mode,A=Vl({mode:"hidden",children:A},u),o=fr(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(t,S,a),n.memoizedState=bf,mo(null,o)):(La(n),Tf(n,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=Af(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),A=o.fallback,u=n.mode,o=Vl({mode:"visible",children:o.children},u),A=fr(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,vr(n,t.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(t,S,a),n.memoizedState=bf,n=mo(null,o));else if(La(n),sd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var ee=S.dgst;S=ee,o=Error(s(419)),o.stack="",o.digest=S,no({value:o,source:null,stack:null}),n=Af(t,n,a)}else if(fn||Yr(t,n,a,!1),S=(a&t.childLanes)!==0,fn||S){if(S=qt,S!==null&&(o=Vs(S,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,ur(t,o),kn(S,t,o),yf;rd(A)||Ql(),n=Af(t,n,a)}else rd(A)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Zt=di(A.nextSibling),An=n,Tt=!0,Aa=null,ui=!1,t!==null&&jp(n,t),n=Tf(n,o.children),n.flags|=4096);return n}return u?(Na(),A=o.fallback,u=n.mode,B=t.child,ee=B.sibling,o=Wi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ee!==null?A=Wi(ee,A):(A=fr(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,mo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Mf(a):(u=A.cachePool,u!==null?(B=cn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=$p(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Ef(t,S,a),n.memoizedState=bf,mo(t.child,o)):(La(n),a=t.child,t=a.sibling,a=Wi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Tf(t,n){return n=Vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Vl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Af(t,n,a){return vr(n,t.child,null,a),t=Tf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function d0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Hu(t.return,n,a)}function Rf(t,n,a,o,u,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function h0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=rn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,be(rn,S),Cn(t,n,o,a),o=Tt?to:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&d0(t,a,n);else if(t.tag===19)d0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Dl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Rf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Dl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Rf(n,!0,a,null,f,o);break;case"together":Rf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Yr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Wi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Wi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Cf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function ny(t,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),Ca(n,cn,t.memoizedState.cache),dr();break;case 27:case 5:qe(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ju(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?f0(t,n,a):(La(n),t=Qi(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Yr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return h0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(rn,rn.current),o)break;return null;case 22:return n.lanes=0,r0(t,n,a,n.pendingProps);case 24:Ca(n,cn,t.memoizedState.cache)}return Qi(t,n,a)}function p0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Cf(t,a)&&(n.flags&128)===0)return fn=!1,ny(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,Tt&&(n.flags&1048576)!==0&&qp(n,to,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=xr(n.elementType),n.type=t,typeof t=="function")Lu(t)?(o=yr(t,o),n.tag=1,n=c0(null,n,t,o,a)):(n.tag=0,n=Sf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=n0(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=i0(null,n,t,o,a);break e}}throw n=he(t)||t,Error(s(306,n,""))}}return n;case 0:return Sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=yr(o,n.pendingProps),c0(t,n,o,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ju(t,n),co(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ca(n,cn,o),o!==f.cache&&Gu(n,[cn],a,!0),lo(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=u0(t,n,o,a);break e}else if(o!==u){u=oi(Error(s(424)),n),no(u),n=u0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=di(t.firstChild),An=n,Tt=!0,Aa=null,ui=!0,a=rm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(dr(),o===u){n=Qi(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return Gl(t,n),t===null?(a=Tx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,t=n.pendingProps,o=ac(re.current).createElement(a),o[ln]=n,o[mn]=t,wn(o,a,t),te(o),n.stateNode=o):n.memoizedState=Tx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qe(n),t===null&&Tt&&(o=n.stateNode=bx(n.type,n.pendingProps,re.current),An=n,ui=!0,u=Zt,Ga(n.type)?(od=u,Zt=di(o.firstChild)):Zt=u),Cn(t,n,n.pendingProps.children,a),Gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((u=o=Zt)&&(o=Ly(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,An=n,Zt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Ra(n)),qe(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,nd(u,f)?o=null:S!==null&&nd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ef(t,n,j_,null,null,a),Do._currentValue=u),Gl(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&Tt&&((t=a=Zt)&&(a=Ny(a,n.pendingProps,ui),a!==null?(n.stateNode=a,An=n,Zt=null,t=!0):t=!1),t||Ra(n)),null;case 13:return f0(t,n,a);case 4:return Re(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=vr(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return n0(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ca(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,pr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return i0(t,n,n.type,n.pendingProps,a);case 15:return a0(t,n,n.type,n.pendingProps,a);case 19:return h0(t,n,a);case 31:return ty(t,n,a);case 22:return r0(t,n,a,n.pendingProps);case 24:return pr(n),o=Rn(cn),t===null?(u=Xu(),u===null&&(u=qt,f=Vu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},qu(n),Ca(n,cn,u)):((t.lanes&a)!==0&&(ju(t,n),co(n,null,null,a),lo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,cn,o)):(o=f.cache,Ca(n,cn,o),o!==u.cache&&Gu(n,[cn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ji(t){t.flags|=4}function wf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(G0())t.flags|=8192;else throw gr=Al,Wu}else t.flags&=-16777217}function m0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Dx(n))if(G0())t.flags|=8192;else throw gr=Al,Wu}function kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ht():536870912,t.lanes|=n,ss|=n)}function xo(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function iy(t,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yi(cn),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(jr(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bu())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Ji(n),f!==null?(Kt(n),m0(n,f)):(Kt(n),wf(n,u,null,o,a))):f?f!==t.memoizedState?(Ji(n),Kt(n),m0(n,f)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ji(n),Kt(n),wf(n,u,t,o,a)),null;case 27:if(lt(n),a=re.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}t=Ae.current,jr(n)?Yp(n):(t=bx(u,o,a),n.stateNode=t,Ji(n))}return Kt(n),null;case 5:if(lt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(f=Ae.current,jr(n))Yp(n);else{var S=ac(re.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[ln]=n,f[mn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ji(n)}}return Kt(n),wf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=re.current,jr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||fx(t.nodeValue,a)),t||Ra(n,!0)}else t=ac(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Kt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=jr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else a=Bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=jr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),Kt(n),null);case 4:return Ve(),t===null&&Qf(n.stateNode.containerInfo),Kt(n),null;case 10:return Yi(n.type),Kt(n),null;case 19:if(se(rn),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)xo(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Dl(t),f!==null){for(n.flags|=128,xo(o,!1),t=f.updateQueue,n.updateQueue=t,kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)kp(a,t),a=a.sibling;return be(rn,rn.current&1|2),Tt&&qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&_()>Yl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Dl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,kl(n,t),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Tt)return Kt(n),null}else 2*_()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_(),t.sibling=null,a=rn.current,be(rn,u?a&1|2:a&1),Tt&&qi(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return Jn(n),Qu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&se(mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(cn),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ay(t,n){switch(zu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Yi(cn),Ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));dr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return se(rn),null;case 4:return Ve(),null;case 10:return Yi(n.type),null;case 22:case 23:return Jn(n),Qu(),t!==null&&se(mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Yi(cn),null;case 25:return null;default:return null}}function x0(t,n){switch(zu(n),n.tag){case 3:Yi(cn),Ve();break;case 26:case 27:case 5:lt(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:se(rn);break;case 10:Yi(n.type);break;case 22:case 23:Jn(n),Qu(),t!==null&&se(mr);break;case 24:Yi(cn)}}function go(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){Bt(n,n.return,A)}}function Oa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var B=a,ee=A;try{ee()}catch(pe){Bt(u,B,pe)}}}o=o.next}while(o!==f)}}catch(pe){Bt(n,n.return,pe)}}function g0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{om(n,a)}catch(o){Bt(t,t.return,o)}}}function v0(t,n,a){a.props=yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Bt(t,n,u)}}function Ui(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function _0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function Df(t,n,a){try{var o=t.stateNode;Ay(o,t.type,a,n),o[mn]=n}catch(u){Bt(t,t.return,u)}}function y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function Uf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(o!==4&&(o===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Lf(t,n,a),t=t.sibling;t!==null;)Lf(t,n,a),t=t.sibling}function Xl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xl(t,n,a),t=t.sibling;t!==null;)Xl(t,n,a),t=t.sibling}function S0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[ln]=t,n[mn]=a}catch(f){Bt(t,t.return,f)}}var $i=!1,dn=!1,Nf=!1,b0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function ry(t,n){if(t=t.containerInfo,ed=fc,t=Op(t),Tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,A=-1,B=-1,ee=0,pe=0,ve=t,ae=null;t:for(;;){for(var le;ve!==a||u!==0&&ve.nodeType!==3||(A=S+u),ve!==f||o!==0&&ve.nodeType!==3||(B=S+o),ve.nodeType===3&&(S+=ve.nodeValue.length),(le=ve.firstChild)!==null;)ae=ve,ve=le;for(;;){if(ve===t)break t;if(ae===a&&++ee===u&&(A=S),ae===f&&++pe===o&&(B=S),(le=ve.nextSibling)!==null)break;ve=ae,ae=ve.parentNode}ve=le}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(td={focusedElem:t,selectionRange:a},fc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ke=yr(a.type,u);t=o.getSnapshotBeforeUpdate(ke,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Bt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)ad(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ad(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function M0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),o&4&&go(5,a);break;case 1:if(ta(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Bt(a,a.return,S)}else{var u=yr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(a,a.return,S)}}o&64&&g0(a),o&512&&vo(a,a.return);break;case 3:if(ta(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{om(t,n)}catch(S){Bt(a,a.return,S)}}break;case 27:n===null&&o&4&&S0(a);case 26:case 5:ta(t,a),n===null&&o&4&&_0(a),o&512&&vo(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),o&4&&A0(t,a);break;case 13:ta(t,a),o&4&&R0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=py.bind(null,a),Oy(t,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||dn,u=$i;var f=dn;$i=o,(dn=n)&&!f?na(t,a,(a.subtreeFlags&8772)!==0):ta(t,a),$i=u,dn=f}break;case 30:break;default:ta(t,a)}}function E0(t){var n=t.alternate;n!==null&&(t.alternate=null,E0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ws(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,In=!1;function ea(t,n,a){for(a=a.child;a!==null;)T0(t,n,a),a=a.sibling}function T0(t,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:dn||Ui(a,n),ea(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Ui(a,n);var o=Qt,u=In;Ga(a.type)&&(Qt=a.stateNode,In=!1),ea(t,n,a),Ro(a.stateNode),Qt=o,In=u;break;case 5:dn||Ui(a,n);case 6:if(o=Qt,u=In,Qt=null,ea(t,n,a),Qt=o,In=u,Qt!==null)if(In)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Qt!==null&&(In?(t=Qt,gx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ps(t)):gx(Qt,a.stateNode));break;case 4:o=Qt,u=In,Qt=a.stateNode.containerInfo,In=!0,ea(t,n,a),Qt=o,In=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),dn||Oa(4,a,n),ea(t,n,a);break;case 1:dn||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&v0(a,n,o)),ea(t,n,a);break;case 21:ea(t,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,ea(t,n,a),dn=o;break;default:ea(t,n,a)}}function A0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(a){Bt(n,n.return,a)}}}function R0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(a){Bt(n,n.return,a)}}function sy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new b0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new b0),n;default:throw Error(s(435,t.tag))}}function Wl(t,n){var a=sy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=my.bind(null,t,o);o.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){Qt=A.stateNode,In=!1;break e}break;case 5:Qt=A.stateNode,In=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,In=!0;break e}A=A.return}if(Qt===null)throw Error(s(160));T0(f,S,u),Qt=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)C0(n,t),n=n.sibling}var _i=null;function C0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),o&4&&(Oa(3,t,t.return),go(3,t),Oa(5,t,t.return));break;case 1:Hn(n,t),Gn(t),o&512&&(dn||a===null||Ui(a,a.return)),o&64&&$i&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=_i;if(Hn(n,t),Gn(t),o&512&&(dn||a===null||Ui(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[sr]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[ln]=t,te(f),o=f;break e;case"link":var S=Cx("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=Cx("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=t,te(f),o=f}t.stateNode=o}else wx(u,t.type,t.stateNode);else t.stateNode=Rx(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?wx(u,t.type,t.stateNode):Rx(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Df(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),o&512&&(dn||a===null||Ui(a,a.return)),a!==null&&o&4&&Df(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),o&512&&(dn||a===null||Ui(a,a.return)),t.flags&32){u=t.stateNode;try{Ci(u,"")}catch(ke){Bt(t,t.return,ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Df(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Nf=!0);break;case 6:if(Hn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ke){Bt(t,t.return,ke)}}break;case 3:if(oc=null,u=_i,_i=rc(n.containerInfo),Hn(n,t),_i=u,Gn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(ke){Bt(t,t.return,ke)}Nf&&(Nf=!1,w0(t));break;case 4:o=_i,_i=rc(t.stateNode.containerInfo),Hn(n,t),Gn(t),_i=o;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jl=_()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,ee=$i,pe=dn;if($i=ee||u,dn=pe||B,Hn(n,t),dn=pe,$i=ee,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||$i||dn||Sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=B.stateNode;var ve=B.memoizedProps.style,ae=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(ke){Bt(B,B.return,ke)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ke){Bt(B,B.return,ke)}}}else if(n.tag===18){if(a===null){B=n;try{var le=B.stateNode;u?vx(le,!0):vx(B.stateNode,!1)}catch(ke){Bt(B,B.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Wl(t,a))));break;case 19:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wl(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(y0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Uf(t);Xl(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Ci(S,""),a.flags&=-33);var A=Uf(t);Xl(t,A,S);break;case 3:case 4:var B=a.stateNode.containerInfo,ee=Uf(t);Lf(t,ee,B);break;default:throw Error(s(161))}}catch(pe){Bt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function w0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;w0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)M0(t,n.alternate,n),n=n.sibling}function Sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),Sr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&v0(n,n.return,a),Sr(n);break;case 27:Ro(n.stateNode);case 26:case 5:Ui(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:na(u,f,a),go(4,f);break;case 1:if(na(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Bt(o,o.return,ee)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)sm(B[u],A)}catch(ee){Bt(o,o.return,ee)}}a&&S&64&&g0(f),vo(f,f.return);break;case 27:S0(f);case 26:case 5:na(u,f,a),a&&o===null&&S&4&&_0(f),vo(f,f.return);break;case 12:na(u,f,a);break;case 31:na(u,f,a),a&&S&4&&A0(u,f);break;case 13:na(u,f,a),a&&S&4&&R0(u,f);break;case 22:f.memoizedState===null&&na(u,f,a),vo(f,f.return);break;case 30:break;default:na(u,f,a)}n=n.sibling}}function Of(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function Pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function yi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)D0(t,n,a,o),n=n.sibling}function D0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,o),u&2048&&go(9,n);break;case 1:yi(t,n,a,o);break;case 3:yi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(u&2048){yi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Bt(n,n.return,B)}}else yi(t,n,a,o);break;case 31:yi(t,n,a,o);break;case 13:yi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?yi(t,n,a,o):_o(t,n):f._visibility&2?yi(t,n,a,o):(f._visibility|=2,is(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Of(S,n);break;case 24:yi(t,n,a,o),u&2048&&Pf(n.alternate,n);break;default:yi(t,n,a,o)}}function is(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,A=a,B=o,ee=S.flags;switch(S.tag){case 0:case 11:case 15:is(f,S,A,B,u),go(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?is(f,S,A,B,u):_o(f,S):(pe._visibility|=2,is(f,S,A,B,u)),u&&ee&2048&&Of(S.alternate,S);break;case 24:is(f,S,A,B,u),u&&ee&2048&&Pf(S.alternate,S);break;default:is(f,S,A,B,u)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:_o(a,o),u&2048&&Of(o.alternate,o);break;case 24:_o(a,o),u&2048&&Pf(o.alternate,o);break;default:_o(a,o)}n=n.sibling}}var yo=8192;function as(t,n,a){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)U0(t,n,a),t=t.sibling}function U0(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&yo&&t.memoizedState!==null&&qy(a,_i,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,a);break;case 3:case 4:var o=_i;_i=rc(t.stateNode.containerInfo),as(t,n,a),_i=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=yo,yo=16777216,as(t,n,a),yo=o):as(t,n,a));break;default:as(t,n,a)}}function L0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function So(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,O0(o,t)}L0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)N0(t),t=t.sibling}function N0(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ql(t)):So(t);break;default:So(t)}}function ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,O0(o,t)}L0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ql(n));break;default:ql(n)}t=t.sibling}}function O0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(E0(o),o===a){Mn=null;break e}if(u!==null){u.return=f,Mn=u;break e}Mn=f}}}var oy={getCacheForType:function(t){var n=Rn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(cn).controller.signal}},ly=typeof WeakMap=="function"?WeakMap:Map,Ot=0,qt=null,_t=null,St=0,Ft=0,$n=null,Pa=!1,rs=!1,zf=!1,ia=0,nn=0,za=0,br=0,Ff=0,ei=0,ss=0,bo=null,Vn=null,Bf=!1,jl=0,P0=0,Yl=1/0,Zl=null,Fa=null,gn=0,Ba=null,os=null,aa=0,If=0,Hf=null,z0=null,Mo=0,Gf=null;function ti(){return(Ot&2)!==0&&St!==0?St&-St:F.T!==null?jf():ks()}function F0(){if(ei===0)if((St&536870912)===0||Tt){var t=we;we<<=1,(we&3932160)===0&&(we=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function kn(t,n,a){(t===qt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ia(t,St,ei,!1)),Dn(t,a),((Ot&2)===0||t!==qt)&&(t===qt&&((Ot&2)===0&&(br|=a),nn===4&&Ia(t,St,ei,!1)),Li(t))}function B0(t,n,a){if((Ot&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?fy(t,n):kf(t,n,!0),f=o;do{if(u===0){rs&&!o&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!cy(a)){u=kf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=t;u=bo;var B=A.current.memoizedState.isDehydrated;if(B&&(ls(A,S).flags|=256),S=kf(A,S,!1),S!==2){if(zf&&!B){A.errorRecoveryDisabledLanes|=f,br|=f,u=4;break e}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){ls(t,0),Ia(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ia(o,n,ei,!Pa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=jl+300-_(),10<u)){if(Ia(o,n,ei,!Pa),_e(o,0,!0)!==0)break e;aa=n,o.timeoutHandle=mx(I0.bind(null,o,a,Vn,Zl,Bf,n,ei,br,ss,Pa,f,"Throttled",-0,0),u);break e}I0(o,a,Vn,Zl,Bf,n,ei,br,ss,Pa,f,null,-0,0)}}break}while(!0);Li(t)}function I0(t,n,a,o,u,f,S,A,B,ee,pe,ve,ae,le){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},U0(n,f,ve);var ke=(f&62914560)===f?jl-_():(f&4194048)===f?P0-_():0;if(ke=jy(ve,ke),ke!==null){aa=f,t.cancelPendingCommit=ke(j0.bind(null,t,n,f,a,o,u,S,A,B,pe,ve,null,ae,le)),Ia(t,f,S,!ee);return}}j0(t,n,f,a,o,u,S,A,B)}function cy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,o){n&=~Ff,n&=~br,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Xe(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&ol(t,a,n)}function Kl(){return(Ot&6)===0?(Eo(0),!1):!0}function Vf(){if(_t!==null){if(Ft===0)var t=_t.return;else t=_t,ji=hr=null,af(t),Jr=null,ro=0,t=_t;for(;t!==null;)x0(t.alternate,t),t=t.return;_t=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,wy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,Vf(),qt=t,_t=a=Wi(t.current,null),St=n,Ft=0,$n=null,Pa=!1,rs=He(t,n),zf=!1,ss=ei=Ff=br=za=nn=0,Vn=bo=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),f=1<<u;n|=t[u],o&=~f}return ia=n,gl(),a}function H0(t,n){dt=null,F.H=po,n===Qr||n===Tl?(n=nm(),Ft=3):n===Wu?(n=nm(),Ft=4):Ft=n===yf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,_t===null&&(nn=1,Il(t,oi(n,t.current)))}function G0(){var t=Qn.current;return t===null?!0:(St&4194048)===St?fi===null:(St&62914560)===St||(St&536870912)!==0?t===fi:!1}function V0(){var t=F.H;return F.H=po,t===null?po:t}function k0(){var t=F.A;return F.A=oy,t}function Ql(){nn=4,Pa||(St&4194048)!==St&&Qn.current!==null||(rs=!0),(za&134217727)===0&&(br&134217727)===0||qt===null||Ia(qt,St,ei,!1)}function kf(t,n,a){var o=Ot;Ot|=2;var u=V0(),f=k0();(qt!==t||St!==n)&&(Zl=null,ls(t,n)),n=!1;var S=nn;e:do try{if(Ft!==0&&_t!==null){var A=_t,B=$n;switch(Ft){case 8:Vf(),S=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var ee=Ft;if(Ft=0,$n=null,cs(t,A,B,ee),a&&rs){S=0;break e}break;default:ee=Ft,Ft=0,$n=null,cs(t,A,B,ee)}}uy(),S=nn;break}catch(pe){H0(t,pe)}while(!0);return n&&t.shellSuspendCounter++,ji=hr=null,Ot=o,F.H=u,F.A=f,_t===null&&(qt=null,St=0,gl()),S}function uy(){for(;_t!==null;)X0(_t)}function fy(t,n){var a=Ot;Ot|=2;var o=V0(),u=k0();qt!==t||St!==n?(Zl=null,Yl=_()+500,ls(t,n)):rs=He(t,n);e:do try{if(Ft!==0&&_t!==null){n=_t;var f=$n;t:switch(Ft){case 1:Ft=0,$n=null,cs(t,n,f,1);break;case 2:case 9:if(em(f)){Ft=0,$n=null,W0(n);break}n=function(){Ft!==2&&Ft!==9||qt!==t||(Ft=7),Li(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:em(f)?(Ft=0,$n=null,W0(n)):(Ft=0,$n=null,cs(t,n,f,7));break;case 5:var S=null;switch(_t.tag){case 26:S=_t.memoizedState;case 5:case 27:var A=_t;if(S?Dx(S):A.stateNode.complete){Ft=0,$n=null;var B=A.sibling;if(B!==null)_t=B;else{var ee=A.return;ee!==null?(_t=ee,Jl(ee)):_t=null}break t}}Ft=0,$n=null,cs(t,n,f,5);break;case 6:Ft=0,$n=null,cs(t,n,f,6);break;case 8:Vf(),nn=6;break e;default:throw Error(s(462))}}dy();break}catch(pe){H0(t,pe)}while(!0);return ji=hr=null,F.H=o,F.A=u,Ot=a,_t!==null?0:(qt=null,St=0,gl(),nn)}function dy(){for(;_t!==null&&!it();)X0(_t)}function X0(t){var n=p0(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?Jl(t):_t=n}function W0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=l0(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=l0(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:af(n);default:x0(a,n),n=_t=kp(n,ia),n=p0(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?Jl(t):_t=n}function cs(t,n,a,o){ji=hr=null,af(n),Jr=null,ro=0;var u=n.return;try{if(ey(t,u,n,a,St)){nn=1,Il(t,oi(a,t.current)),_t=null;return}}catch(f){if(u!==null)throw _t=u,f;nn=1,Il(t,oi(a,t.current)),_t=null;return}n.flags&32768?(Tt||o===1?t=!0:rs||(St&536870912)!==0?t=!1:(Pa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),q0(n,t)):Jl(n)}function Jl(t){var n=t;do{if((n.flags&32768)!==0){q0(n,Pa);return}t=n.return;var a=iy(n.alternate,n,ia);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);nn===0&&(nn=5)}function q0(t,n){do{var a=ay(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);nn=6,_t=null}function j0(t,n,a,o,u,f,S,A,B){t.cancelPendingCommit=null;do $l();while(gn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Du,jn(t,a,f,S,A,B),t===qt&&(_t=qt=null,St=0),os=n,Ba=t,aa=a,If=f,Hf=u,z0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xy(ie,function(){return J0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=K.p,K.p=2,S=Ot,Ot|=4;try{ry(t,n,a)}finally{Ot=S,K.p=u,F.T=o}}gn=1,Y0(),Z0(),K0()}}function Y0(){if(gn===1){gn=0;var t=Ba,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=K.p;K.p=2;var u=Ot;Ot|=4;try{C0(n,t);var f=td,S=Op(t.containerInfo),A=f.focusedElem,B=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Np(A.ownerDocument.documentElement,A)){if(B!==null&&Tu(A)){var ee=B.start,pe=B.end;if(pe===void 0&&(pe=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(pe,A.value.length);else{var ve=A.ownerDocument||document,ae=ve&&ve.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),ke=A.textContent.length,tt=Math.min(B.start,ke),kt=B.end===void 0?tt:Math.min(B.end,ke);!le.extend&&tt>kt&&(S=kt,kt=tt,tt=S);var j=Lp(A,tt),X=Lp(A,kt);if(j&&X&&(le.rangeCount!==1||le.anchorNode!==j.node||le.anchorOffset!==j.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var $=ve.createRange();$.setStart(j.node,j.offset),le.removeAllRanges(),tt>kt?(le.addRange($),le.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),le.addRange($))}}}}for(ve=[],le=A;le=le.parentNode;)le.nodeType===1&&ve.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var ge=ve[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}fc=!!ed,td=ed=null}finally{Ot=u,K.p=o,F.T=a}}t.current=n,gn=2}}function Z0(){if(gn===2){gn=0;var t=Ba,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=K.p;K.p=2;var u=Ot;Ot|=4;try{M0(t,n.alternate,n)}finally{Ot=u,K.p=o,F.T=a}}gn=3}}function K0(){if(gn===4||gn===3){gn=0,D();var t=Ba,n=os,a=aa,o=z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,os=Ba=null,Q0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Fa=null),rr(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=K.p,K.p=2,F.T=null;try{for(var f=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{F.T=n,K.p=u}}(aa&3)!==0&&$l(),Li(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Gf?Mo++:(Mo=0,Gf=t):Mo=0,Eo(0)}}function Q0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function $l(){return Y0(),Z0(),K0(),J0()}function J0(){if(gn!==5)return!1;var t=Ba,n=If;If=0;var a=rr(aa),o=F.T,u=K.p;try{K.p=32>a?32:a,F.T=null,a=Hf,Hf=null;var f=Ba,S=aa;if(gn=0,os=Ba=null,aa=0,(Ot&6)!==0)throw Error(s(331));var A=Ot;if(Ot|=4,N0(f.current),D0(f,f.current,S,a),Ot=A,Eo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{K.p=u,F.T=o,Q0(t,n)}}function $0(t,n,a){n=oi(a,n),n=_f(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Dn(t,2),Li(t))}function Bt(t,n,a){if(t.tag===3)$0(t,t,a);else for(;n!==null;){if(n.tag===3){$0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fa===null||!Fa.has(o))){t=oi(a,t),a=e0(2),o=Ua(n,a,2),o!==null&&(t0(a,o,n,t),Dn(o,2),Li(o));break}}n=n.return}}function Xf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new ly;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zf=!0,u.add(a),t=hy.bind(null,t,n,a),n.then(t,t))}function hy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(St&a)===a&&(nn===4||nn===3&&(St&62914560)===St&&300>_()-jl?(Ot&2)===0&&ls(t,0):Ff|=a,ss===St&&(ss=0)),Li(t)}function ex(t,n){n===0&&(n=Ht()),t=ur(t,n),t!==null&&(Dn(t,n),Li(t))}function py(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ex(t,a)}function my(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ex(t,a)}function xy(t,n){return It(t,n)}var ec=null,us=null,Wf=!1,tc=!1,qf=!1,Ha=0;function Li(t){t!==us&&t.next===null&&(us===null?ec=us=t:us=us.next=t),tc=!0,Wf||(Wf=!0,vy())}function Eo(t,n){if(!qf&&tc){qf=!0;do for(var a=!1,o=ec;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Xe(42|t)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ax(o,f))}else f=St,f=_e(o,o===qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||He(o,f)||(a=!0,ax(o,f));o=o.next}while(a);qf=!1}}function gy(){tx()}function tx(){tc=Wf=!1;var t=0;Ha!==0&&Cy()&&(t=Ha);for(var n=_(),a=null,o=ec;o!==null;){var u=o.next,f=nx(o,n);f===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(us=a)):(a=o,(t!==0||(f&3)!==0)&&(tc=!0)),o=u}gn!==0&&gn!==5||Eo(t),Ha!==0&&(Ha=0)}function nx(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Xe(f),A=1<<S,B=u[S];B===-1?((A&a)===0||(A&o)!==0)&&(u[S]=rt(A,n)):B<=n&&(t.expiredLanes|=A),f&=~A}if(n=qt,a=St,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ye(o),rr(a)){case 2:case 8:a=de;break;case 32:a=ie;break;case 268435456:a=Ue;break;default:a=ie}return o=ix.bind(null,t),a=It(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ye(o),t.callbackPriority=2,t.callbackNode=null,2}function ix(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($l()&&t.callbackNode!==a)return null;var o=St;return o=_e(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(B0(t,o,n),nx(t,_()),t.callbackNode!=null&&t.callbackNode===a?ix.bind(null,t):null)}function ax(t,n){if($l())return null;B0(t,n,!0)}function vy(){Dy(function(){(Ot&6)!==0?It(Q,gy):tx()})}function jf(){if(Ha===0){var t=Zr;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Ha=t}return Ha}function rx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cl(""+t)}function sx(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function _y(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=rx((u[mn]||null).action),S=o.submitter;S&&(n=(n=S[mn]||null)?rx(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new hl("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ha!==0){var B=S?sx(u,S):new FormData(u);hf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=S?sx(u,S):new FormData(u),hf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Yf=0;Yf<wu.length;Yf++){var Zf=wu[Yf],yy=Zf.toLowerCase(),Sy=Zf[0].toUpperCase()+Zf.slice(1);vi(yy,"on"+Sy)}vi(Fp,"onAnimationEnd"),vi(Bp,"onAnimationIteration"),vi(Ip,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(F_,"onTransitionRun"),vi(B_,"onTransitionStart"),vi(I_,"onTransitionCancel"),vi(Hp,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function ox(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],B=A.instance,ee=A.currentTarget;if(A=A.listener,B!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ee;try{f(u)}catch(pe){xl(pe)}u.currentTarget=null,f=B}else for(S=0;S<o.length;S++){if(A=o[S],B=A.instance,ee=A.currentTarget,A=A.listener,B!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ee;try{f(u)}catch(pe){xl(pe)}u.currentTarget=null,f=B}}}}function yt(t,n){var a=n[Fr];a===void 0&&(a=n[Fr]=new Set);var o=t+"__bubble";a.has(o)||(lx(n,t,2,!1),a.add(o))}function Kf(t,n,a){var o=0;n&&(o|=4),lx(a,t,o,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Qf(t){if(!t[nc]){t[nc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(by.has(a)||Kf(a,!1,t),Kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,Kf("selectionchange",!1,n))}}function lx(t,n,a,o){switch(Fx(n)){case 2:var u=Ky;break;case 8:u=Qy;break;default:u=dd}a=u.bind(null,n,a,t),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Jf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=ba(A),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=f=S;continue e}A=A.parentNode}}o=o.return}hp(function(){var ee=f,pe=pu(a),ve=[];e:{var ae=Gp.get(t);if(ae!==void 0){var le=hl,ke=t;switch(t){case"keypress":if(fl(a)===0)break e;case"keydown":case"keyup":le=m_;break;case"focusin":ke="focus",le=yu;break;case"focusout":ke="blur",le=yu;break;case"beforeblur":case"afterblur":le=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=i_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=v_;break;case Fp:case Bp:case Ip:le=s_;break;case Hp:le=y_;break;case"scroll":case"scrollend":le=t_;break;case"wheel":le=b_;break;case"copy":case"cut":case"paste":le=l_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=vp;break;case"toggle":case"beforetoggle":le=E_}var tt=(n&4)!==0,kt=!tt&&(t==="scroll"||t==="scrollend"),j=tt?ae!==null?ae+"Capture":null:ae;tt=[];for(var X=ee,$;X!==null;){var ge=X;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||j===null||(ge=qs(X,j),ge!=null&&tt.push(Ao(X,ge,$))),kt)break;X=X.return}0<tt.length&&(ae=new le(ae,ke,null,a,pe),ve.push({event:ae,listeners:tt}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ae&&a!==hu&&(ke=a.relatedTarget||a.fromElement)&&(ba(ke)||ke[Hi]))break e;if((le||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(ke=a.relatedTarget||a.toElement,le=ee,ke=ke?ba(ke):null,ke!==null&&(kt=c(ke),tt=ke.tag,ke!==kt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(le=null,ke=ee),le!==ke)){if(tt=xp,ge="onMouseLeave",j="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=vp,ge="onPointerLeave",j="onPointerEnter",X="pointer"),kt=le==null?ae:q(le),$=ke==null?ae:q(ke),ae=new tt(ge,X+"leave",le,a,pe),ae.target=kt,ae.relatedTarget=$,ge=null,ba(pe)===ee&&(tt=new tt(j,X+"enter",ke,a,pe),tt.target=$,tt.relatedTarget=kt,ge=tt),kt=ge,le&&ke)t:{for(tt=My,j=le,X=ke,$=0,ge=j;ge;ge=tt(ge))$++;ge=0;for(var Je=X;Je;Je=tt(Je))ge++;for(;0<$-ge;)j=tt(j),$--;for(;0<ge-$;)X=tt(X),ge--;for(;$--;){if(j===X||X!==null&&j===X.alternate){tt=j;break t}j=tt(j),X=tt(X)}tt=null}else tt=null;le!==null&&cx(ve,ae,le,tt,!1),ke!==null&&kt!==null&&cx(ve,kt,ke,tt,!0)}}e:{if(ae=ee?q(ee):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var Ut=Ap;else if(Ep(ae))if(Rp)Ut=O_;else{Ut=L_;var je=U_}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&du(ee.elementType)&&(Ut=Ap):Ut=N_;if(Ut&&(Ut=Ut(t,ee))){Tp(ve,Ut,a,pe);break e}je&&je(t,ae,ee),t==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&Sn(ae,"number",ae.value)}switch(je=ee?q(ee):window,t){case"focusin":(Ep(je)||je.contentEditable==="true")&&(Gr=je,Au=ee,eo=null);break;case"focusout":eo=Au=Gr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Pp(ve,a,pe);break;case"selectionchange":if(z_)break;case"keydown":case"keyup":Pp(ve,a,pe)}var pt;if(bu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Hr?bp(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(_p&&a.locale!=="ko"&&(Hr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Hr&&(pt=pp()):(Ea=pe,gu="value"in Ea?Ea.value:Ea.textContent,Hr=!0)),je=ic(ee,bt),0<je.length&&(bt=new gp(bt,t,null,a,pe),ve.push({event:bt,listeners:je}),pt?bt.data=pt:(pt=Mp(a),pt!==null&&(bt.data=pt)))),(pt=A_?R_(t,a):C_(t,a))&&(bt=ic(ee,"onBeforeInput"),0<bt.length&&(je=new gp("onBeforeInput","beforeinput",null,a,pe),ve.push({event:je,listeners:bt}),je.data=pt)),_y(ve,t,ee,a,pe)}ox(ve,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qs(t,a),u!=null&&o.unshift(Ao(t,u,f)),u=qs(t,n),u!=null&&o.push(Ao(t,u,f))),t.tag===3)return o;t=t.return}return[]}function My(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function cx(t,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,B=A.alternate,ee=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||ee===null||(B=ee,u?(ee=qs(a,f),ee!=null&&S.unshift(Ao(a,ee,B))):u||(ee=qs(a,f),ee!=null&&S.push(Ao(a,ee,B)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Ey=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function ux(t){return(typeof t=="string"?t:""+t).replace(Ey,`
`).replace(Ty,"")}function fx(t,n){return n=ux(n),ux(t)===n}function Vt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ci(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ci(t,""+o);break;case"className":Ct(t,"class",o);break;case"tabIndex":Ct(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(t,a,o);break;case"style":fp(t,o,f);break;case"data":if(n!=="object"){Ct(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=cl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=cl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ki);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=cl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),ht(t,"popover",o);break;case"xlinkActuate":Dt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Dt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Dt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Dt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Dt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Dt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ht(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$v.get(a)||a,ht(t,a,o))}}function $f(t,n,a,o,u,f){switch(a){case"style":fp(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ci(t,o):(typeof o=="number"||typeof o=="bigint")&&Ci(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ce.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ht(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,f,S,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":yt("invalid",t);var A=f=S=u=null,B=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":S=pe;break;case"checked":B=pe;break;case"defaultChecked":ee=pe;break;case"value":f=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Vt(t,n,o,pe,a,null)}}Yt(t,f,A,B,ee,S,u,!1);return;case"select":yt("invalid",t),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Vt(t,n,u,A,a,null)}n=f,a=S,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":yt("invalid",t),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Vt(t,n,S,A,a,null)}Tn(t,o,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Vt(t,n,B,o,a,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<To.length;o++)yt(To[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,ee,o,a,null)}return;default:if(du(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&$f(t,n,pe,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Vt(t,n,A,o,a,null))}function Ay(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,B=null,ee=null,pe=null;for(le in a){var ve=a[le];if(a.hasOwnProperty(le)&&ve!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=ve;default:o.hasOwnProperty(le)||Vt(t,n,le,null,o,ve)}}for(var ae in o){var le=o[ae];if(ve=a[ae],o.hasOwnProperty(ae)&&(le!=null||ve!=null))switch(ae){case"type":f=le;break;case"name":u=le;break;case"checked":ee=le;break;case"defaultChecked":pe=le;break;case"value":S=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ve&&Vt(t,n,ae,le,o,ve)}}Gi(t,S,A,B,ee,pe,f,u);return;case"select":le=S=A=ae=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:o.hasOwnProperty(f)||Vt(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":ae=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==B&&Vt(t,n,u,f,o,B)}n=A,a=S,o=le,ae!=null?xn(t,!!a,ae,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":le=ae=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Vt(t,n,A,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":ae=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Vt(t,n,S,u,o,f)}bn(t,ae,le);return;case"option":for(var ke in a)if(ae=a[ke],a.hasOwnProperty(ke)&&ae!=null&&!o.hasOwnProperty(ke))switch(ke){case"selected":t.selected=!1;break;default:Vt(t,n,ke,null,o,ae)}for(B in o)if(ae=o[B],le=a[B],o.hasOwnProperty(B)&&ae!==le&&(ae!=null||le!=null))switch(B){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Vt(t,n,B,ae,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ae=a[tt],a.hasOwnProperty(tt)&&ae!=null&&!o.hasOwnProperty(tt)&&Vt(t,n,tt,null,o,ae);for(ee in o)if(ae=o[ee],le=a[ee],o.hasOwnProperty(ee)&&ae!==le&&(ae!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,n));break;default:Vt(t,n,ee,ae,o,le)}return;default:if(du(n)){for(var kt in a)ae=a[kt],a.hasOwnProperty(kt)&&ae!==void 0&&!o.hasOwnProperty(kt)&&$f(t,n,kt,void 0,o,ae);for(pe in o)ae=o[pe],le=a[pe],!o.hasOwnProperty(pe)||ae===le||ae===void 0&&le===void 0||$f(t,n,pe,ae,o,le);return}}for(var j in a)ae=a[j],a.hasOwnProperty(j)&&ae!=null&&!o.hasOwnProperty(j)&&Vt(t,n,j,null,o,ae);for(ve in o)ae=o[ve],le=a[ve],!o.hasOwnProperty(ve)||ae===le||ae==null&&le==null||Vt(t,n,ve,ae,o,le)}function dx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ry(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&dx(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],ee=B.startTime;if(ee>A)break;var pe=B.transferSize,ve=B.initiatorType;pe&&dx(ve)&&(B=B.responseEnd,S+=pe*(B<A?1:(A-ee)/(B-ee)))}if(--o,n+=8*(f+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ed=null,td=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function hx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function px(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function nd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var id=null;function Cy(){var t=window.event;return t&&t.type==="popstate"?t===id?!1:(id=t,!0):(id=null,!1)}var mx=typeof setTimeout=="function"?setTimeout:void 0,wy=typeof clearTimeout=="function"?clearTimeout:void 0,xx=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof xx<"u"?function(t){return xx.resolve(null).then(t).catch(Uy)}:mx;function Uy(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function gx(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ps(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[sr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Ro(t.ownerDocument.body);a=u}while(a);ps(n)}function vx(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function ad(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ad(a),Ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ly(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[sr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function Ny(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function _x(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function rd(t){return t.data==="$?"||t.data==="$~"}function sd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Oy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var od=null;function yx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Sx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function bx(t,n,a){switch(n=ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ws(t)}var hi=new Map,Mx=new Set;function rc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=K.d;K.d={f:Py,r:zy,D:Fy,C:By,L:Iy,m:Hy,X:Vy,S:Gy,M:ky};function Py(){var t=ra.f(),n=Kl();return t||n}function zy(t){var n=R(t);n!==null&&n.tag===5&&n.type==="form"?Hm(n):ra.r(t)}var fs=typeof document>"u"?null:document;function Ex(t,n,a){var o=fs;if(o&&typeof n=="string"&&n){var u=jt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Mx.has(u)||(Mx.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),te(n),o.head.appendChild(n)))}}function Fy(t){ra.D(t),Ex("dns-prefetch",t,null)}function By(t,n){ra.C(t,n),Ex("preconnect",t,n)}function Iy(t,n,a){ra.L(t,n,a);var o=fs;if(o&&t&&n){var u='link[rel="preload"][as="'+jt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+jt(a.imageSizes)+'"]')):u+='[href="'+jt(t)+'"]';var f=u;switch(n){case"style":f=ds(t);break;case"script":f=hs(t)}hi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(f))||n==="script"&&o.querySelector(wo(f))||(n=o.createElement("link"),wn(n,"link",t),te(n),o.head.appendChild(n)))}}function Hy(t,n){ra.m(t,n);var a=fs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+jt(o)+'"][href="'+jt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hs(t)}if(!hi.has(f)&&(t=g({rel:"modulepreload",href:t},n),hi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}o=a.createElement("link"),wn(o,"link",t),te(o),a.head.appendChild(o)}}}function Gy(t,n,a){ra.S(t,n,a);var o=fs;if(o&&t){var u=oe(o).hoistableStyles,f=ds(t);n=n||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Co(f)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(f))&&ld(t,a);var B=S=o.createElement("link");te(B),wn(B,"link",t),B._p=new Promise(function(ee,pe){B.onload=ee,B.onerror=pe}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,sc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function Vy(t,n){ra.X(t,n);var a=fs;if(a&&t){var o=oe(a).hoistableScripts,u=hs(t),f=o.get(u);f||(f=a.querySelector(wo(u)),f||(t=g({src:t,async:!0},n),(n=hi.get(u))&&cd(t,n),f=a.createElement("script"),te(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ky(t,n){ra.M(t,n);var a=fs;if(a&&t){var o=oe(a).hoistableScripts,u=hs(t),f=o.get(u);f||(f=a.querySelector(wo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&cd(t,n),f=a.createElement("script"),te(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Tx(t,n,a,o){var u=(u=re.current)?rc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ds(a.href),a=oe(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ds(a.href);var f=oe(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(Co(t)))&&!f._p&&(S.instance=f,S.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),f||Xy(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(a),a=oe(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ds(t){return'href="'+jt(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function Ax(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Xy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),te(n),t.head.appendChild(n))}function hs(t){return'[src="'+jt(t)+'"]'}function wo(t){return"script[async]"+t}function Rx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+jt(a.href)+'"]');if(o)return n.instance=o,te(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),te(o),wn(o,"style",u),sc(o,a.precedence,t),n.instance=o;case"stylesheet":u=ds(a.href);var f=t.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,te(f),f;o=Ax(a),(u=hi.get(u))&&ld(o,u),f=(t.ownerDocument||t).createElement("link"),te(f);var S=f;return S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),wn(f,"link",o),n.state.loading|=4,sc(f,a.precedence,t),n.instance=f;case"script":return f=hs(a.src),(u=t.querySelector(wo(f)))?(n.instance=u,te(u),u):(o=a,(u=hi.get(f))&&(o=g({},a),cd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),te(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,t));return n.instance}function sc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function Cx(t,n,a){if(oc===null){var o=new Map,u=oc=new Map;u.set(a,o)}else u=oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[sr]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function wx(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Wy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Dx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ds(o.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=lc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,te(f);return}f=n.ownerDocument||n,o=Ax(o),(u=hi.get(u))&&ld(o,u),f=f.createElement("link"),te(f);var S=f;S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),wn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=lc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ud=0;function jy(t,n){return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ud===0&&(ud=62500*Ry());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ud?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function uc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(Yy,t),cc=null,lc.call(t))}function Yy(t,n){if(!(n.state.loading&4)){var a=cc.get(t);if(a)var o=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Zy(t,n,a,o,u,f,S,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Ux(t,n,a,o,u,f,S,A,B,ee,pe,ve){return t=new Zy(t,n,a,S,B,ee,pe,ve,A),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Vu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},qu(f),t}function Lx(t){return t?(t=Xr,t):Xr}function Nx(t,n,a,o,u,f){u=Lx(u),o.context===null?o.context=u:o.pendingContext=u,o=Da(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ua(t,o,n),a!==null&&(kn(a,t,n),oo(a,t,n))}function Ox(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function fd(t,n){Ox(t,n),(t=t.alternate)&&Ox(t,n)}function Px(t){if(t.tag===13||t.tag===31){var n=ur(t,67108864);n!==null&&kn(n,t,67108864),fd(t,67108864)}}function zx(t){if(t.tag===13||t.tag===31){var n=ti();n=gi(n);var a=ur(t,n);a!==null&&kn(a,t,n),fd(t,n)}}var fc=!0;function Ky(t,n,a,o){var u=F.T;F.T=null;var f=K.p;try{K.p=2,dd(t,n,a,o)}finally{K.p=f,F.T=u}}function Qy(t,n,a,o){var u=F.T;F.T=null;var f=K.p;try{K.p=8,dd(t,n,a,o)}finally{K.p=f,F.T=u}}function dd(t,n,a,o){if(fc){var u=hd(o);if(u===null)Jf(t,n,o,dc,a),Bx(t,o);else if($y(u,t,n,a,o))o.stopPropagation();else if(Bx(t,o),n&4&&-1<Jy.indexOf(t)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ee(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var B=1<<31-Xe(S);A.entanglements[1]|=B,S&=~B}Li(f),(Ot&6)===0&&(Yl=_()+500,Eo(0))}}break;case 31:case 13:A=ur(f,2),A!==null&&kn(A,f,2),Kl(),fd(f,2)}if(f=hd(o),f===null&&Jf(t,n,o,dc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Jf(t,n,o,null,a)}}function hd(t){return t=pu(t),pd(t)}var dc=null;function pd(t){if(dc=null,t=ba(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return dc=t,null}function Fx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(I()){case Q:return 2;case de:return 8;case ie:case ze:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var md=!1,Va=null,ka=null,Xa=null,Uo=new Map,Lo=new Map,Wa=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bx(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function No(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Px(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function $y(t,n,a,o,u){switch(n){case"focusin":return Va=No(Va,t,n,a,o,u),!0;case"dragenter":return ka=No(ka,t,n,a,o,u),!0;case"mouseover":return Xa=No(Xa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,No(Uo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,No(Lo.get(f)||null,t,n,a,o,u)),!0}return!1}function Ix(t){var n=ba(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){zx(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Xs(t.priority,function(){zx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=hd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);hu=o,a.target.dispatchEvent(o),hu=null}else return n=R(a),n!==null&&Px(n),t.blockedOn=a,!1;n.shift()}return!0}function Hx(t,n,a){hc(t)&&a.delete(n)}function eS(){md=!1,Va!==null&&hc(Va)&&(Va=null),ka!==null&&hc(ka)&&(ka=null),Xa!==null&&hc(Xa)&&(Xa=null),Uo.forEach(Hx),Lo.forEach(Hx)}function pc(t,n){t.blockedOn===n&&(t.blockedOn=null,md||(md=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,eS)))}var mc=null;function Gx(t){mc!==t&&(mc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){mc===t&&(mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(pd(o||a)===null)continue;break}var f=R(a);f!==null&&(t.splice(n,3),n-=3,hf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ps(t){function n(B){return pc(B,t)}Va!==null&&pc(Va,t),ka!==null&&pc(ka,t),Xa!==null&&pc(Xa,t),Uo.forEach(n),Lo.forEach(n);for(var a=0;a<Wa.length;a++){var o=Wa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Ix(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[mn]||null;if(typeof f=="function")S||Gx(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[mn]||null)A=S.formAction;else if(pd(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Gx(a)}}}function Vx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xd(t){this._internalRoot=t}xc.prototype.render=xd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ti();Nx(a,o,t,n,null,null)},xc.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Nx(t.current,2,null,t,null,null),Kl(),n[Hi]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ks();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&Ix(t)}};var kx=e.version;if(kx!=="19.2.0")throw Error(s(527,kx,"19.2.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var tS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{Me=gc.inject(tS),Te=gc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Km,f=Qm,S=Jm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Ux(t,1,!1,null,null,a,o,null,u,f,S,Vx),t[Hi]=n.current,Qf(t),new xd(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Km,S=Qm,A=Jm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Ux(t,1,!0,n,a??null,o,u,B,f,S,A,Vx),n.context=Lx(null),a=n.current,o=ti(),o=gi(o),u=Da(o),u.callback=null,Ua(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Li(n),t[Hi]=n.current,Qf(t),new xc(n)},Po.version="19.2.0",Po}var $x;function fS(){if($x)return _d.exports;$x=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),_d.exports=uS(),_d.exports}var dS=fS(),Md={exports:{}},Ed={};var eg;function hS(){if(eg)return Ed;eg=1;var r=iu().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Ed.c=function(e){return r.H.useMemoCache(e)},Ed}var tg;function pS(){return tg||(tg=1,Md.exports=hS()),Md.exports}var en=pS();var ng="popstate";function mS(r={}){function e(s,l){let{pathname:c,search:d,hash:h}=s.location;return ah("",{pathname:c,search:d,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:qo(l)}return gS(e,i,null,r)}function $t(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function zi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xS(){return Math.random().toString(36).substring(2,10)}function ig(r,e){return{usr:r.state,key:r.key,idx:e}}function ah(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?zs(e):e,state:i,key:e&&e.key||s||xS()}}function qo({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function zs(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function gS(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,d=l.history,h="POP",m=null,p=x();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function x(){return(d.state||{idx:null}).idx}function g(){h="POP";let M=x(),v=M==null?null:M-p;p=M,m&&m({action:h,location:T.location,delta:v})}function y(M,v){h="PUSH";let U=ah(T.location,M,v);p=x()+1;let L=ig(U,p),P=T.createHref(U);try{d.pushState(L,"",P)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(P)}c&&m&&m({action:h,location:T.location,delta:1})}function b(M,v){h="REPLACE";let U=ah(T.location,M,v);p=x();let L=ig(U,p),P=T.createHref(U);d.replaceState(L,"",P),c&&m&&m({action:h,location:T.location,delta:0})}function E(M){return vS(M)}let T={get action(){return h},get location(){return r(l,d)},listen(M){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(ng,g),m=M,()=>{l.removeEventListener(ng,g),m=null}},createHref(M){return e(l,M)},createURL:E,encodeLocation(M){let v=E(M);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:y,replace:b,go(M){return d.go(M)}};return T}function vS(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:qo(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function sv(r,e,i="/"){return _S(r,e,i,!1)}function _S(r,e,i,s){let l=typeof e=="string"?zs(e):e,c=va(l.pathname||"/",i);if(c==null)return null;let d=ov(r);yS(d);let h=null;for(let m=0;h==null&&m<d.length;++m){let p=US(c);h=wS(d[m],p,s)}return h}function ov(r,e=[],i=[],s="",l=!1){let c=(d,h,m=l,p)=>{let x={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&m)return;$t(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let g=pa([s,x.relativePath]),y=i.concat(x);d.children&&d.children.length>0&&($t(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),ov(d.children,e,y,g,m)),!(d.path==null&&!d.index)&&e.push({path:g,score:RS(g,d.index),routesMeta:y})};return r.forEach((d,h)=>{if(d.path===""||!d.path?.includes("?"))c(d,h);else for(let m of lv(d.path))c(d,h,!0,m)}),e}function lv(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let d=lv(s.join("/")),h=[];return h.push(...d.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...d),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function yS(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:CS(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var SS=/^:[\w-]+$/,bS=3,MS=2,ES=1,TS=10,AS=-2,ag=r=>r==="*";function RS(r,e){let i=r.split("/"),s=i.length;return i.some(ag)&&(s+=AS),e&&(s+=MS),i.filter(l=>!ag(l)).reduce((l,c)=>l+(SS.test(c)?bS:c===""?ES:TS),s)}function CS(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function wS(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",d=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",g=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),y=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=Kc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(l,g.params),d.push({params:l,pathname:pa([c,g.pathname]),pathnameBase:PS(pa([c,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(c=pa([c,g.pathnameBase]))}return d}function Kc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=DS(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((p,{paramName:x,isOptional:g},y)=>{if(x==="*"){let E=h[y]||"";d=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const b=h[y];return g&&!b?p[x]=void 0:p[x]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:d,pattern:r}}function DS(r,e=!1,i=!0){zi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function US(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function va(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}function LS(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?zs(r):r;return{pathname:i?i.startsWith("/")?i:NS(i,e):e,search:zS(s),hash:FS(l)}}function NS(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Td(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function OS(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function cv(r){let e=OS(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function uv(r,e,i,s=!1){let l;typeof r=="string"?l=zs(r):(l={...r},$t(!l.pathname||!l.pathname.includes("?"),Td("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),Td("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),Td("#","search","hash",l)));let c=r===""||l.pathname==="",d=c?"/":l.pathname,h;if(d==null)h=i;else{let g=e.length-1;if(!s&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),g-=1;l.pathname=y.join("/")}h=g>=0?e[g]:"/"}let m=LS(l,h),p=d&&d!=="/"&&d.endsWith("/"),x=(c||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var pa=r=>r.join("/").replace(/\/\/+/g,"/"),PS=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),zS=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,FS=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function BS(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fv=["POST","PUT","PATCH","DELETE"];new Set(fv);var IS=["GET",...fv];new Set(IS);var Fs=xe.createContext(null);Fs.displayName="DataRouter";var au=xe.createContext(null);au.displayName="DataRouterState";xe.createContext(!1);var dv=xe.createContext({isTransitioning:!1});dv.displayName="ViewTransition";var HS=xe.createContext(new Map);HS.displayName="Fetchers";var GS=xe.createContext(null);GS.displayName="Await";var Bi=xe.createContext(null);Bi.displayName="Navigation";var Jo=xe.createContext(null);Jo.displayName="Location";var Sa=xe.createContext({outlet:null,matches:[],isDataRoute:!1});Sa.displayName="Route";var Kh=xe.createContext(null);Kh.displayName="RouteError";function VS(r,{relative:e}={}){$t($o(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=xe.useContext(Bi),{hash:l,pathname:c,search:d}=el(r,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:pa([i,c])),s.createHref({pathname:h,search:d,hash:l})}function $o(){return xe.useContext(Jo)!=null}function Pr(){return $t($o(),"useLocation() may be used only in the context of a <Router> component."),xe.useContext(Jo).location}var hv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function pv(r){xe.useContext(Bi).static||xe.useLayoutEffect(r)}function kS(){let{isDataRoute:r}=xe.useContext(Sa);return r?nb():XS()}function XS(){$t($o(),"useNavigate() may be used only in the context of a <Router> component.");let r=xe.useContext(Fs),{basename:e,navigator:i}=xe.useContext(Bi),{matches:s}=xe.useContext(Sa),{pathname:l}=Pr(),c=JSON.stringify(cv(s)),d=xe.useRef(!1);return pv(()=>{d.current=!0}),xe.useCallback((m,p={})=>{if(zi(d.current,hv),!d.current)return;if(typeof m=="number"){i.go(m);return}let x=uv(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:pa([e,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[e,i,c,l,r])}xe.createContext(null);function el(r,{relative:e}={}){let{matches:i}=xe.useContext(Sa),{pathname:s}=Pr(),l=JSON.stringify(cv(i));return xe.useMemo(()=>uv(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function WS(r,e){return mv(r,e)}function mv(r,e,i,s,l){$t($o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=xe.useContext(Bi),{matches:d}=xe.useContext(Sa),h=d[d.length-1],m=h?h.params:{},p=h?h.pathname:"/",x=h?h.pathnameBase:"/",g=h&&h.route;{let U=g&&g.path||"";xv(p,!g||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let y=Pr(),b;if(e){let U=typeof e=="string"?zs(e):e;$t(x==="/"||U.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${U.pathname}" was given in the \`location\` prop.`),b=U}else b=y;let E=b.pathname||"/",T=E;if(x!=="/"){let U=x.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let M=sv(r,{pathname:T});zi(g||M!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),zi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=KS(M&&M.map(U=>Object.assign({},U,{params:Object.assign({},m,U.params),pathname:pa([x,c.encodeLocation?c.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?x:pa([x,c.encodeLocation?c.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),d,i,s,l);return e&&v?xe.createElement(Jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},v):v}function qS(){let r=tb(),e=BS(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",r),d=xe.createElement(xe.Fragment,null,xe.createElement("p",null,"💿 Hey developer 👋"),xe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",xe.createElement("code",{style:c},"ErrorBoundary")," or"," ",xe.createElement("code",{style:c},"errorElement")," prop on your route.")),xe.createElement(xe.Fragment,null,xe.createElement("h2",null,"Unexpected Application Error!"),xe.createElement("h3",{style:{fontStyle:"italic"}},e),i?xe.createElement("pre",{style:l},i):null,d)}var jS=xe.createElement(qS,null),YS=class extends xe.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.unstable_onError?this.props.unstable_onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?xe.createElement(Sa.Provider,{value:this.props.routeContext},xe.createElement(Kh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ZS({routeContext:r,match:e,children:i}){let s=xe.useContext(Fs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),xe.createElement(Sa.Provider,{value:r},i)}function KS(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,d=i?.errors;if(d!=null){let p=c.findIndex(x=>x.route.id&&d?.[x.route.id]!==void 0);$t(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let h=!1,m=-1;if(i)for(let p=0;p<c.length;p++){let x=c[p];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=p),x.route.id){let{loaderData:g,errors:y}=i,b=x.route.loader&&!g.hasOwnProperty(x.route.id)&&(!y||y[x.route.id]===void 0);if(x.route.lazy||b){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((p,x,g)=>{let y,b=!1,E=null,T=null;i&&(y=d&&x.route.id?d[x.route.id]:void 0,E=x.route.errorElement||jS,h&&(m<0&&g===0?(xv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,T=null):m===g&&(b=!0,T=x.route.hydrateFallbackElement||null)));let M=e.concat(c.slice(0,g+1)),v=()=>{let U;return y?U=E:b?U=T:x.route.Component?U=xe.createElement(x.route.Component,null):x.route.element?U=x.route.element:U=p,xe.createElement(ZS,{match:x,routeContext:{outlet:p,matches:M,isDataRoute:i!=null},children:U})};return i&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?xe.createElement(YS,{location:i.location,revalidation:i.revalidation,component:E,error:y,children:v(),routeContext:{outlet:null,matches:M,isDataRoute:!0},unstable_onError:s}):v()},null)}function Qh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function QS(r){let e=xe.useContext(Fs);return $t(e,Qh(r)),e}function JS(r){let e=xe.useContext(au);return $t(e,Qh(r)),e}function $S(r){let e=xe.useContext(Sa);return $t(e,Qh(r)),e}function Jh(r){let e=$S(r),i=e.matches[e.matches.length-1];return $t(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function eb(){return Jh("useRouteId")}function tb(){let r=xe.useContext(Kh),e=JS("useRouteError"),i=Jh("useRouteError");return r!==void 0?r:e.errors?.[i]}function nb(){let{router:r}=QS("useNavigate"),e=Jh("useNavigate"),i=xe.useRef(!1);return pv(()=>{i.current=!0}),xe.useCallback(async(l,c={})=>{zi(i.current,hv),i.current&&(typeof l=="number"?r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var rg={};function xv(r,e,i){!e&&!rg[r]&&(rg[r]=!0,zi(!1,i))}xe.memo(ib);function ib({routes:r,future:e,state:i,unstable_onError:s}){return mv(r,void 0,i,s,e)}function Xo(r){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ab({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){$t(!$o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),h=xe.useMemo(()=>({basename:d,navigator:l,static:c,future:{}}),[d,l,c]);typeof i=="string"&&(i=zs(i));let{pathname:m="/",search:p="",hash:x="",state:g=null,key:y="default"}=i,b=xe.useMemo(()=>{let E=va(m,d);return E==null?null:{location:{pathname:E,search:p,hash:x,state:g,key:y},navigationType:s}},[d,m,p,x,g,y,s]);return zi(b!=null,`<Router basename="${d}"> is not able to match the URL "${m}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:xe.createElement(Bi.Provider,{value:h},xe.createElement(Jo.Provider,{children:e,value:b}))}function rb({children:r,location:e}){return WS(rh(r),e)}function rh(r,e=[]){let i=[];return xe.Children.forEach(r,(s,l)=>{if(!xe.isValidElement(s))return;let c=[...e,l];if(s.type===xe.Fragment){i.push.apply(i,rh(s.props.children,c));return}$t(s.type===Xo,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=rh(s.props.children,c)),i.push(d)}),i}var kc="get",Xc="application/x-www-form-urlencoded";function ru(r){return r!=null&&typeof r.tagName=="string"}function sb(r){return ru(r)&&r.tagName.toLowerCase()==="button"}function ob(r){return ru(r)&&r.tagName.toLowerCase()==="form"}function lb(r){return ru(r)&&r.tagName.toLowerCase()==="input"}function cb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ub(r,e){return r.button===0&&(!e||e==="_self")&&!cb(r)}var vc=null;function fb(){if(vc===null)try{new FormData(document.createElement("form"),0),vc=!1}catch{vc=!0}return vc}var db=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ad(r){return r!=null&&!db.has(r)?(zi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xc}"`),null):r}function hb(r,e){let i,s,l,c,d;if(ob(r)){let h=r.getAttribute("action");s=h?va(h,e):null,i=r.getAttribute("method")||kc,l=Ad(r.getAttribute("enctype"))||Xc,c=new FormData(r)}else if(sb(r)||lb(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||h.getAttribute("action");if(s=m?va(m,e):null,i=r.getAttribute("formmethod")||h.getAttribute("method")||kc,l=Ad(r.getAttribute("formenctype"))||Ad(h.getAttribute("enctype"))||Xc,c=new FormData(h,r),!fb()){let{name:p,type:x,value:g}=r;if(x==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,g)}}else{if(ru(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=kc,s=null,l=Xc,d=r}return c&&l==="text/plain"&&(d=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $h(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function pb(r,e,i){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${i}`:e&&va(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function mb(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xb(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function gb(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await mb(c,i);return d.links?d.links():[]}return[]}));return Sb(s.flat(1).filter(xb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function sg(r,e,i,s,l,c){let d=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>d(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let x=s.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(d(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function vb(r,e,{includeHydrateFallback:i}={}){return _b(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function _b(r){return[...new Set(r)]}function yb(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function Sb(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(yb(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function gv(){let r=xe.useContext(Fs);return $h(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function bb(){let r=xe.useContext(au);return $h(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ep=xe.createContext(void 0);ep.displayName="FrameworkContext";function vv(){let r=xe.useContext(ep);return $h(r,"You must render this element inside a <HydratedRouter> element"),r}function Mb(r,e){let i=xe.useContext(ep),[s,l]=xe.useState(!1),[c,d]=xe.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=e,y=xe.useRef(null);xe.useEffect(()=>{if(r==="render"&&d(!0),r==="viewport"){let T=v=>{v.forEach(U=>{d(U.isIntersecting)})},M=new IntersectionObserver(T,{threshold:.5});return y.current&&M.observe(y.current),()=>{M.disconnect()}}},[r]),xe.useEffect(()=>{if(s){let T=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(T)}}},[s]);let b=()=>{l(!0)},E=()=>{l(!1),d(!1)};return i?r!=="intent"?[c,y,{}]:[c,y,{onFocus:zo(h,b),onBlur:zo(m,E),onMouseEnter:zo(p,b),onMouseLeave:zo(x,E),onTouchStart:zo(g,b)}]:[!1,y,{}]}function zo(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function Eb({page:r,...e}){let{router:i}=gv(),s=xe.useMemo(()=>sv(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?xe.createElement(Ab,{page:r,matches:s,...e}):null}function Tb(r){let{manifest:e,routeModules:i}=vv(),[s,l]=xe.useState([]);return xe.useEffect(()=>{let c=!1;return gb(r,e,i).then(d=>{c||l(d)}),()=>{c=!0}},[r,e,i]),s}function Ab({page:r,matches:e,...i}){let s=Pr(),{manifest:l,routeModules:c}=vv(),{basename:d}=gv(),{loaderData:h,matches:m}=bb(),p=xe.useMemo(()=>sg(r,e,m,l,s,"data"),[r,e,m,l,s]),x=xe.useMemo(()=>sg(r,e,m,l,s,"assets"),[r,e,m,l,s]),g=xe.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,T=!1;if(e.forEach(v=>{let U=l.routes[v.route.id];!U||!U.hasLoader||(!p.some(L=>L.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||U.hasClientLoader?T=!0:E.add(v.route.id))}),E.size===0)return[];let M=pb(r,d,"data");return T&&E.size>0&&M.searchParams.set("_routes",e.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[M.pathname+M.search]},[d,h,s,l,p,e,r,c]),y=xe.useMemo(()=>vb(x,l),[x,l]),b=Tb(x);return xe.createElement(xe.Fragment,null,g.map(E=>xe.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),y.map(E=>xe.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),b.map(({key:E,link:T})=>xe.createElement("link",{key:E,nonce:i.nonce,...T})))}function Rb(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var _v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_v&&(window.__reactRouterVersion="7.9.5")}catch{}function Cb({basename:r,children:e,window:i}){let s=xe.useRef();s.current==null&&(s.current=mS({window:i,v5Compat:!0}));let l=s.current,[c,d]=xe.useState({action:l.action,location:l.location}),h=xe.useCallback(m=>{xe.startTransition(()=>d(m))},[d]);return xe.useLayoutEffect(()=>l.listen(h),[l,h]),xe.createElement(ab,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l})}var yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bs=xe.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:d,state:h,target:m,to:p,preventScrollReset:x,viewTransition:g,...y},b){let{basename:E}=xe.useContext(Bi),T=typeof p=="string"&&yv.test(p),M,v=!1;if(typeof p=="string"&&T&&(M=p,_v))try{let w=new URL(window.location.href),C=p.startsWith("//")?new URL(w.protocol+p):new URL(p),k=va(C.pathname,E);C.origin===w.origin&&k!=null?p=k+C.search+C.hash:v=!0}catch{zi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=VS(p,{relative:l}),[L,P,G]=Mb(s,y),N=Lb(p,{replace:d,state:h,target:m,preventScrollReset:x,relative:l,viewTransition:g});function z(w){e&&e(w),w.defaultPrevented||N(w)}let J=xe.createElement("a",{...y,...G,href:M||U,onClick:v||c?e:z,ref:Rb(b,P),target:m,"data-discover":!T&&i==="render"?"true":void 0});return L&&!T?xe.createElement(xe.Fragment,null,J,xe.createElement(Eb,{page:U})):J});Bs.displayName="Link";var wb=xe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:d,viewTransition:h,children:m,...p},x){let g=el(d,{relative:p.relative}),y=Pr(),b=xe.useContext(au),{navigator:E,basename:T}=xe.useContext(Bi),M=b!=null&&Fb(g)&&h===!0,v=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,U=y.pathname,L=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(U=U.toLowerCase(),L=L?L.toLowerCase():null,v=v.toLowerCase()),L&&T&&(L=va(L,T)||L);const P=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let G=U===v||!l&&U.startsWith(v)&&U.charAt(P)==="/",N=L!=null&&(L===v||!l&&L.startsWith(v)&&L.charAt(v.length)==="/"),z={isActive:G,isPending:N,isTransitioning:M},J=G?e:void 0,w;typeof s=="function"?w=s(z):w=[s,G?"active":null,N?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(z):c;return xe.createElement(Bs,{...p,"aria-current":J,className:w,ref:x,style:C,to:d,viewTransition:h},typeof m=="function"?m(z):m)});wb.displayName="NavLink";var Db=xe.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:d=kc,action:h,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,...y},b)=>{let E=Pb(),T=zb(h,{relative:p}),M=d.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&yv.test(h),U=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let P=L.nativeEvent.submitter,G=P?.getAttribute("formmethod")||d;E(P||L.currentTarget,{fetcherKey:e,method:G,navigate:i,replace:l,state:c,relative:p,preventScrollReset:x,viewTransition:g})};return xe.createElement("form",{ref:b,method:M,action:T,onSubmit:s?m:U,...y,"data-discover":!v&&r==="render"?"true":void 0})});Db.displayName="Form";function Ub(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sv(r){let e=xe.useContext(Fs);return $t(e,Ub(r)),e}function Lb(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:d}={}){let h=kS(),m=Pr(),p=el(r,{relative:c});return xe.useCallback(x=>{if(ub(x,e)){x.preventDefault();let g=i!==void 0?i:qo(m)===qo(p);h(r,{replace:g,state:s,preventScrollReset:l,relative:c,viewTransition:d})}},[m,h,p,i,s,e,r,l,c,d])}var Nb=0,Ob=()=>`__${String(++Nb)}__`;function Pb(){let{router:r}=Sv("useSubmit"),{basename:e}=xe.useContext(Bi),i=eb();return xe.useCallback(async(s,l={})=>{let{action:c,method:d,encType:h,formData:m,body:p}=hb(s,e);if(l.navigate===!1){let x=l.fetcherKey||Ob();await r.fetch(x,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||d,formEncType:l.encType||h,flushSync:l.flushSync})}else await r.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||d,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,e,i])}function zb(r,{relative:e}={}){let{basename:i}=xe.useContext(Bi),s=xe.useContext(Sa);$t(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...el(r||".",{relative:e})},d=Pr();if(r==null){c.search=d.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let x=h.toString();c.search=x?`?${x}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:pa([i,c.pathname])),qo(c)}function Fb(r,{relative:e}={}){let i=xe.useContext(dv);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Sv("useViewTransitionState"),l=el(r,{relative:e});if(!i.isTransitioning)return!1;let c=va(i.currentLocation.pathname,s)||i.currentLocation.pathname,d=va(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Kc(l.pathname,d)!=null||Kc(l.pathname,c)!=null}const tp="181",Bb=0,og=1,Ib=2,bv=1,Hb=2,da=3,nr=0,Wn=1,ha=2,ma=0,ws=1,sh=2,lg=3,cg=4,Gb=5,Dr=100,Vb=101,kb=102,Xb=103,Wb=104,qb=200,jb=201,Yb=202,Zb=203,oh=204,lh=205,Kb=206,Qb=207,Jb=208,$b=209,e1=210,t1=211,n1=212,i1=213,a1=214,ch=0,uh=1,fh=2,Us=3,dh=4,hh=5,ph=6,mh=7,Mv=0,r1=1,s1=2,tr=0,o1=1,l1=2,c1=3,u1=4,f1=5,d1=6,h1=7,Ev=300,Ls=301,Ns=302,xh=303,gh=304,su=306,vh=1e3,ai=1001,_h=1002,ri=1003,p1=1004,_c=1005,On=1006,Rd=1007,Lr=1008,_a=1009,Tv=1010,Av=1011,jo=1012,np=1013,Or=1014,Oi=1015,zr=1016,ip=1017,ap=1018,Yo=1020,Rv=35902,Cv=35899,wv=1021,Dv=1022,xi=1023,Zo=1026,Ko=1027,Uv=1028,rp=1029,sp=1030,op=1031,lp=1033,Wc=33776,qc=33777,jc=33778,Yc=33779,yh=35840,Sh=35841,bh=35842,Mh=35843,Eh=36196,Th=37492,Ah=37496,Rh=37808,Ch=37809,wh=37810,Dh=37811,Uh=37812,Lh=37813,Nh=37814,Oh=37815,Ph=37816,zh=37817,Fh=37818,Bh=37819,Ih=37820,Hh=37821,Gh=36492,Vh=36494,kh=36495,Xh=36283,Wh=36284,qh=36285,jh=36286,m1=3200,x1=3201,g1=0,v1=1,$a="",mi="srgb",Os="srgb-linear",Qc="linear",Xt="srgb",ms=7680,ug=519,_1=512,y1=513,S1=514,Lv=515,b1=516,M1=517,E1=518,T1=519,fg=35044,dg="300 es",Pi=2e3,Jc=2001;function Nv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $c(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function A1(){const r=$c("canvas");return r.style.display="block",r}const hg={};function pg(...r){const e="THREE."+r.shift();console.log(e,...r)}function ot(...r){const e="THREE."+r.shift();console.warn(e,...r)}function on(...r){const e="THREE."+r.shift();console.error(e,...r)}function Qo(...r){const e=r.join(" ");e in hg||(hg[e]=!0,ot(...r))}function R1(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Is{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=Math.PI/180,Yh=180/Math.PI;function tl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function At(r,e,i){return Math.max(e,Math.min(i,r))}function C1(r,e){return(r%e+e)%e}function wd(r,e,i){return(1-i)*r+i*e}function Fo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,i=0){ct.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],y=c[d+0],b=c[d+1],E=c[d+2],T=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h>=1){e[i+0]=y,e[i+1]=b,e[i+2]=E,e[i+3]=T;return}if(g!==T||m!==y||p!==b||x!==E){let M=m*y+p*b+x*E+g*T;M<0&&(y=-y,b=-b,E=-E,T=-T,M=-M);let v=1-h;if(M<.9995){const U=Math.acos(M),L=Math.sin(U);v=Math.sin(v*U)/L,h=Math.sin(h*U)/L,m=m*v+y*h,p=p*v+b*h,x=x*v+E*h,g=g*v+T*h}else{m=m*v+y*h,p=p*v+b*h,x=x*v+E*h,g=g*v+T*h;const U=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=U,p*=U,x*=U,g*=U}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[d],y=c[d+1],b=c[d+2],E=c[d+3];return e[i]=h*E+x*g+m*b-p*y,e[i+1]=m*E+x*y+p*g-h*b,e[i+2]=p*E+x*b+h*y-m*g,e[i+3]=x*E-h*g-m*y-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),g=h(c/2),y=m(s/2),b=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=y*x*g+p*b*E,this._y=p*b*g-y*x*E,this._z=p*x*E+y*b*g,this._w=p*x*g-y*b*E;break;case"YXZ":this._x=y*x*g+p*b*E,this._y=p*b*g-y*x*E,this._z=p*x*E-y*b*g,this._w=p*x*g+y*b*E;break;case"ZXY":this._x=y*x*g-p*b*E,this._y=p*b*g+y*x*E,this._z=p*x*E+y*b*g,this._w=p*x*g-y*b*E;break;case"ZYX":this._x=y*x*g-p*b*E,this._y=p*b*g+y*x*E,this._z=p*x*E-y*b*g,this._w=p*x*g+y*b*E;break;case"YZX":this._x=y*x*g+p*b*E,this._y=p*b*g+y*x*E,this._z=p*x*E-y*b*g,this._w=p*x*g-y*b*E;break;case"XZY":this._x=y*x*g-p*b*E,this._y=p*b*g-y*x*E,this._z=p*x*E+y*b*g,this._w=p*x*g+y*b*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],y=s+h+g;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(x-m)*b,this._y=(c-p)*b,this._z=(d-l)*b}else if(s>h&&s>g){const b=2*Math.sqrt(1+s-h-g);this._w=(x-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+p)/b}else if(h>g){const b=2*Math.sqrt(1+h-s-g);this._w=(c-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+g-s-h);this._w=(d-l)/b,this._x=(c+p)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+d*h+l*p-c*m,this._y=l*x+d*m+c*h-s*p,this._z=c*x+d*p+s*m-l*h,this._w=d*x-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,i=0,s=0){ce.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(mg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),x=2*(h*i-c*l),g=2*(c*s-d*i);return this.x=i+m*p+d*g-h*x,this.y=s+m*x+h*p-c*g,this.z=l+m*g+c*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Dd.copy(this).projectOnVector(e),this.sub(Dd)}reflect(e){return this.sub(Dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dd=new ce,mg=new nl;class mt{constructor(e,i,s,l,c,d,h,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p)}set(e,i,s,l,c,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],x=s[4],g=s[7],y=s[2],b=s[5],E=s[8],T=l[0],M=l[3],v=l[6],U=l[1],L=l[4],P=l[7],G=l[2],N=l[5],z=l[8];return c[0]=d*T+h*U+m*G,c[3]=d*M+h*L+m*N,c[6]=d*v+h*P+m*z,c[1]=p*T+x*U+g*G,c[4]=p*M+x*L+g*N,c[7]=p*v+x*P+g*z,c[2]=y*T+b*U+E*G,c[5]=y*M+b*L+E*N,c[8]=y*v+b*P+E*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-s*c*x+s*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*d-h*p,y=h*m-x*c,b=p*c-d*m,E=i*g+s*y+l*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(l*p-x*s)*T,e[2]=(h*s-l*d)*T,e[3]=y*T,e[4]=(x*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=b*T,e[7]=(s*m-p*i)*T,e[8]=(d*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Ud.makeScale(e,i)),this}rotate(e){return this.premultiply(Ud.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ud.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ud=new mt,xg=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w1(){const r={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Xt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(l.r=Ds(l.r),l.g=Ds(l.g),l.b=Ds(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Os]:{primaries:e,whitePoint:s,transfer:Qc,toXYZ:xg,fromXYZ:gg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Xt,toXYZ:xg,fromXYZ:gg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const Nt=w1();function xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xs;class D1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{xs===void 0&&(xs=$c("canvas")),xs.width=e.width,xs.height=e.height;const l=xs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=xs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=$c("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U1=0;class cp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Ld(l[d].image)):c.push(Ld(l[d]))}else c=Ld(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ld(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?D1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let L1=0;const Nd=new ce;class Fn extends Is{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=ai,l=ai,c=On,d=Lr,h=xi,m=_a,p=Fn.DEFAULT_ANISOTROPY,x=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=tl(),this.name="",this.source=new cp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nd).x}get height(){return this.source.getSize(Nd).y}get depth(){return this.source.getSize(Nd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vh:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vh:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Ev;Fn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],y=m[1],b=m[5],E=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(x-y)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(x+y)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,P=(b+1)/2,G=(v+1)/2,N=(x+y)/4,z=(g+T)/4,J=(E+M)/4;return L>P&&L>G?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=N/s,c=z/s):P>G?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=N/l,c=J/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=z/c,l=J/c),this.set(s,l,c,i),this}let U=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(y-x)*(y-x));return Math.abs(U)<.001&&(U=1),this.x=(M-E)/U,this.y=(g-T)/U,this.z=(y-x)/U,this.w=Math.acos((p+b+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this.w=At(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this.w=At(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N1 extends Is{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Fn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new cp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends N1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Ov extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O1 extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(e=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Si):Si.fromBufferAttribute(c,d),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),Sc.subVectors(this.max,Bo),gs.subVectors(e.a,Bo),vs.subVectors(e.b,Bo),_s.subVectors(e.c,Bo),ja.subVectors(vs,gs),Ya.subVectors(_s,vs),Mr.subVectors(gs,_s);let i=[0,-ja.z,ja.y,0,-Ya.z,Ya.y,0,-Mr.z,Mr.y,ja.z,0,-ja.x,Ya.z,0,-Ya.x,Mr.z,0,-Mr.x,-ja.y,ja.x,0,-Ya.y,Ya.x,0,-Mr.y,Mr.x,0];return!Od(i,gs,vs,_s,Sc)||(i=[1,0,0,0,1,0,0,0,1],!Od(i,gs,vs,_s,Sc))?!1:(bc.crossVectors(ja,Ya),i=[bc.x,bc.y,bc.z],Od(i,gs,vs,_s,Sc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sa=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Si=new ce,yc=new il,gs=new ce,vs=new ce,_s=new ce,ja=new ce,Ya=new ce,Mr=new ce,Bo=new ce,Sc=new ce,bc=new ce,Er=new ce;function Od(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Er.fromArray(r,c);const h=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=e.dot(Er),p=i.dot(Er),x=s.dot(Er);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const P1=new il,Io=new ce,Pd=new ce;class ou{constructor(e=new ce,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):P1.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Pd)),this.expandByPoint(Io.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oa=new ce,zd=new ce,Mc=new ce,Za=new ce,Fd=new ce,Ec=new ce,Bd=new ce;class Pv{constructor(e=new ce,i=new ce(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){zd.copy(e).add(i).multiplyScalar(.5),Mc.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(zd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Mc),h=Za.dot(this.direction),m=-Za.dot(Mc),p=Za.lengthSq(),x=Math.abs(1-d*d);let g,y,b,E;if(x>0)if(g=d*m-h,y=d*h-m,E=c*x,g>=0)if(y>=-E)if(y<=E){const T=1/x;g*=T,y*=T,b=g*(g+d*y+2*h)+y*(d*g+y+2*m)+p}else y=c,g=Math.max(0,-(d*y+h)),b=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(d*y+h)),b=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-d*c+h)),y=g>0?-c:Math.min(Math.max(-c,-m),c),b=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),b=y*(y+2*m)+p):(g=Math.max(0,-(d*c+h)),y=g>0?c:Math.min(Math.max(-c,-m),c),b=-g*g+y*(y+2*m)+p);else y=d>0?-c:c,g=Math.max(0,-(d*y+h)),b=-g*g+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(zd).addScaledVector(Mc,y),b}intersectSphere(e,i){oa.subVectors(e.center,this.origin);const s=oa.dot(this.direction),l=oa.dot(oa)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),x>=0?(c=(e.min.y-y.y)*x,d=(e.max.y-y.y)*x):(c=(e.max.y-y.y)*x,d=(e.min.y-y.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(h=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,i,s,l,c){Fd.subVectors(i,e),Ec.subVectors(s,e),Bd.crossVectors(Fd,Ec);let d=this.direction.dot(Bd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Za.subVectors(this.origin,e);const m=h*this.direction.dot(Ec.crossVectors(Za,Ec));if(m<0)return null;const p=h*this.direction.dot(Fd.cross(Za));if(p<0||m+p>d)return null;const x=-h*Za.dot(Bd);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,i,s,l,c,d,h,m,p,x,g,y,b,E,T,M){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,m,p,x,g,y,b,E,T,M)}set(e,i,s,l,c,d,h,m,p,x,g,y,b,E,T,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=y,v[3]=b,v[7]=E,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),d=1/ys.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=d*x,b=d*g,E=h*x,T=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=b+E*p,i[5]=y-T*p,i[9]=-h*m,i[2]=T-y*p,i[6]=E+b*p,i[10]=d*m}else if(e.order==="YXZ"){const y=m*x,b=m*g,E=p*x,T=p*g;i[0]=y+T*h,i[4]=E*h-b,i[8]=d*p,i[1]=d*g,i[5]=d*x,i[9]=-h,i[2]=b*h-E,i[6]=T+y*h,i[10]=d*m}else if(e.order==="ZXY"){const y=m*x,b=m*g,E=p*x,T=p*g;i[0]=y-T*h,i[4]=-d*g,i[8]=E+b*h,i[1]=b+E*h,i[5]=d*x,i[9]=T-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const y=d*x,b=d*g,E=h*x,T=h*g;i[0]=m*x,i[4]=E*p-b,i[8]=y*p+T,i[1]=m*g,i[5]=T*p+y,i[9]=b*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const y=d*m,b=d*p,E=h*m,T=h*p;i[0]=m*x,i[4]=T-y*g,i[8]=E*g+b,i[1]=g,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=b*g+E,i[10]=y-T*g}else if(e.order==="XZY"){const y=d*m,b=d*p,E=h*m,T=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=y*g+T,i[5]=d*x,i[9]=b*g-E,i[2]=E*g-b,i[6]=h*x,i[10]=T*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z1,e,F1)}lookAt(e,i,s){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ka.crossVectors(s,ni),Ka.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ka.crossVectors(s,ni)),Ka.normalize(),Tc.crossVectors(ni,Ka),l[0]=Ka.x,l[4]=Tc.x,l[8]=ni.x,l[1]=Ka.y,l[5]=Tc.y,l[9]=ni.y,l[2]=Ka.z,l[6]=Tc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],x=s[1],g=s[5],y=s[9],b=s[13],E=s[2],T=s[6],M=s[10],v=s[14],U=s[3],L=s[7],P=s[11],G=s[15],N=l[0],z=l[4],J=l[8],w=l[12],C=l[1],k=l[5],ne=l[9],ue=l[13],he=l[2],me=l[6],F=l[10],K=l[14],Y=l[3],ye=l[7],Se=l[11],O=l[15];return c[0]=d*N+h*C+m*he+p*Y,c[4]=d*z+h*k+m*me+p*ye,c[8]=d*J+h*ne+m*F+p*Se,c[12]=d*w+h*ue+m*K+p*O,c[1]=x*N+g*C+y*he+b*Y,c[5]=x*z+g*k+y*me+b*ye,c[9]=x*J+g*ne+y*F+b*Se,c[13]=x*w+g*ue+y*K+b*O,c[2]=E*N+T*C+M*he+v*Y,c[6]=E*z+T*k+M*me+v*ye,c[10]=E*J+T*ne+M*F+v*Se,c[14]=E*w+T*ue+M*K+v*O,c[3]=U*N+L*C+P*he+G*Y,c[7]=U*z+L*k+P*me+G*ye,c[11]=U*J+L*ne+P*F+G*Se,c[15]=U*w+L*ue+P*K+G*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],y=e[10],b=e[14],E=e[3],T=e[7],M=e[11],v=e[15];return E*(+c*m*g-l*p*g-c*h*y+s*p*y+l*h*b-s*m*b)+T*(+i*m*b-i*p*y+c*d*y-l*d*b+l*p*x-c*m*x)+M*(+i*p*g-i*h*b-c*d*g+s*d*b+c*h*x-s*p*x)+v*(-l*h*x-i*m*g+i*h*y+l*d*g-s*d*y+s*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],y=e[10],b=e[11],E=e[12],T=e[13],M=e[14],v=e[15],U=g*M*p-T*y*p+T*m*b-h*M*b-g*m*v+h*y*v,L=E*y*p-x*M*p-E*m*b+d*M*b+x*m*v-d*y*v,P=x*T*p-E*g*p+E*h*b-d*T*b-x*h*v+d*g*v,G=E*g*m-x*T*m-E*h*y+d*T*y+x*h*M-d*g*M,N=i*U+s*L+l*P+c*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=U*z,e[1]=(T*y*c-g*M*c-T*l*b+s*M*b+g*l*v-s*y*v)*z,e[2]=(h*M*c-T*m*c+T*l*p-s*M*p-h*l*v+s*m*v)*z,e[3]=(g*m*c-h*y*c-g*l*p+s*y*p+h*l*b-s*m*b)*z,e[4]=L*z,e[5]=(x*M*c-E*y*c+E*l*b-i*M*b-x*l*v+i*y*v)*z,e[6]=(E*m*c-d*M*c-E*l*p+i*M*p+d*l*v-i*m*v)*z,e[7]=(d*y*c-x*m*c+x*l*p-i*y*p-d*l*b+i*m*b)*z,e[8]=P*z,e[9]=(E*g*c-x*T*c-E*s*b+i*T*b+x*s*v-i*g*v)*z,e[10]=(d*T*c-E*h*c+E*s*p-i*T*p-d*s*v+i*h*v)*z,e[11]=(x*h*c-d*g*c-x*s*p+i*g*p+d*s*b-i*h*b)*z,e[12]=G*z,e[13]=(x*T*l-E*g*l+E*s*y-i*T*y-x*s*M+i*g*M)*z,e[14]=(E*h*l-d*T*l-E*s*m+i*T*m+d*s*M-i*h*M)*z,e[15]=(d*g*l-x*h*l+x*s*m-i*g*m-d*s*y+i*h*y)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,m=e.z,p=c*d,x=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*d,0,p*m-l*h,x*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,x=d+d,g=h+h,y=c*p,b=c*x,E=c*g,T=d*x,M=d*g,v=h*g,U=m*p,L=m*x,P=m*g,G=s.x,N=s.y,z=s.z;return l[0]=(1-(T+v))*G,l[1]=(b+P)*G,l[2]=(E-L)*G,l[3]=0,l[4]=(b-P)*N,l[5]=(1-(y+v))*N,l[6]=(M+U)*N,l[7]=0,l[8]=(E+L)*z,l[9]=(M-U)*z,l[10]=(1-(y+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=ys.set(l[0],l[1],l[2]).length();const d=ys.set(l[4],l[5],l[6]).length(),h=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const p=1/c,x=1/d,g=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=x,bi.elements[5]*=x,bi.elements[6]*=x,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),s.x=c,s.y=d,s.z=h,this}makePerspective(e,i,s,l,c,d,h=Pi,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(s-l),y=(i+e)/(i-e),b=(s+l)/(s-l);let E,T;if(m)E=c/(d-c),T=d*c/(d-c);else if(h===Pi)E=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===Jc)E=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=Pi,m=!1){const p=this.elements,x=2/(i-e),g=2/(s-l),y=-(i+e)/(i-e),b=-(s+l)/(s-l);let E,T;if(m)E=1/(d-c),T=d/(d-c);else if(h===Pi)E=-2/(d-c),T=-(d+c)/(d-c);else if(h===Jc)E=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const ys=new ce,bi=new pn,z1=new ce(0,0,0),F1=new ce(1,1,1),Ka=new ce,Tc=new ce,ni=new ce,vg=new pn,_g=new nl;class ya{constructor(e=0,i=0,s=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,b),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B1=0;const yg=new ce,Ss=new nl,la=new pn,Ac=new ce,Ho=new ce,I1=new ce,H1=new nl,Sg=new ce(1,0,0),bg=new ce(0,1,0),Mg=new ce(0,0,1),Eg={type:"added"},G1={type:"removed"},bs={type:"childadded",child:null},Id={type:"childremoved",child:null};class qn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ce,i=new ya,s=new nl,l=new ce(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new mt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Sg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Mg,e)}translateOnAxis(e,i){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Sg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ac.copy(e):Ac.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Ho,Ac,this.up):la.lookAt(Ac,Ho,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(la),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(on("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eg),bs.child=e,this.dispatchEvent(bs),bs.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(G1),Id.child=e,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eg),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,I1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,H1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),g=d(e.shapes),y=d(e.skeletons),b=d(e.animations),E=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),b.length>0&&(s.animations=b),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new ce(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new ce,ca=new ce,Hd=new ce,ua=new ce,Ms=new ce,Es=new ce,Tg=new ce,Gd=new ce,Vd=new ce,kd=new ce,Xd=new an,Wd=new an,qd=new an;class Ti{constructor(e=new ce,i=new ce,s=new ce){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Mi.subVectors(e,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Mi.subVectors(l,i),ca.subVectors(s,i),Hd.subVectors(e,i);const d=Mi.dot(Mi),h=Mi.dot(ca),m=Mi.dot(Hd),p=ca.dot(ca),x=ca.dot(Hd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const y=1/g,b=(p*m-h*x)*y,E=(d*x-h*m)*y;return c.set(1-b-E,E,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,s,l,c,d,h,m){return this.getBarycoord(e,i,s,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(d,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Xd.setScalar(0),Wd.setScalar(0),qd.setScalar(0),Xd.fromBufferAttribute(e,i),Wd.fromBufferAttribute(e,s),qd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Xd,c.x),d.addScaledVector(Wd,c.y),d.addScaledVector(qd,c.z),d}static isFrontFacing(e,i,s,l){return Mi.subVectors(s,i),ca.subVectors(e,i),Mi.cross(ca).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Mi.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ti.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;Ms.subVectors(l,s),Es.subVectors(c,s),Gd.subVectors(e,s);const m=Ms.dot(Gd),p=Es.dot(Gd);if(m<=0&&p<=0)return i.copy(s);Vd.subVectors(e,l);const x=Ms.dot(Vd),g=Es.dot(Vd);if(x>=0&&g<=x)return i.copy(l);const y=m*g-x*p;if(y<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(Ms,d);kd.subVectors(e,c);const b=Ms.dot(kd),E=Es.dot(kd);if(E>=0&&b<=E)return i.copy(c);const T=b*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Es,h);const M=x*E-b*g;if(M<=0&&g-x>=0&&b-E>=0)return Tg.subVectors(c,l),h=(g-x)/(g-x+(b-E)),i.copy(l).addScaledVector(Tg,h);const v=1/(M+T+y);return d=T*v,h=y*v,i.copy(s).addScaledVector(Ms,d).addScaledVector(Es,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function jd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Pt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Nt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Nt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Nt.workingColorSpace){if(e=C1(e,1),i=At(i,0,1),s=At(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=jd(d,c,e+1/3),this.g=jd(d,c,e),this.b=jd(d,c,e-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function s(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=Fv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Nt.workingToColorSpace(Nn.copy(this),e),Math.round(At(Nn.r*255,0,255))*65536+Math.round(At(Nn.g*255,0,255))*256+Math.round(At(Nn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Nt.workingColorSpace){Nt.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=x<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=mi){Nt.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,s=Nn.g,l=Nn.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+i,Qa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Qa),e.getHSL(Rc);const s=wd(Qa.h,Rc.h,i),l=wd(Qa.s,Rc.s,i),c=wd(Qa.l,Rc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Pt;Pt.NAMES=Fv;let V1=0;class al extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=ws,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=lh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(s.blending=this.blending),this.side!==nr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==oh&&(s.blendSrc=this.blendSrc),this.blendDst!==lh&&(s.blendDst=this.blendDst),this.blendEquation!==Dr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bv extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new ce,Cc=new ct;let k1=0;class Ai{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=fg,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(e),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Fo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fg&&(e.usage=this.usage),e}}class Iv extends Ai{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Hv extends Ai{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ga extends Ai{constructor(e,i,s){super(new Float32Array(e),i,s)}}let X1=0;const pi=new pn,Yd=new qn,Ts=new ce,ii=new il,Go=new il,En=new ce;class Ii extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nv(e)?Hv:Iv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new mt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ga(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Go.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ii.min,Go.min),ii.expandByPoint(En),En.addVectors(ii.max,Go.max),ii.expandByPoint(En)):(ii.expandByPoint(Go.min),ii.expandByPoint(Go.max))}ii.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)En.fromBufferAttribute(h,p),m&&(Ts.fromBufferAttribute(e,p),En.add(Ts)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let J=0;J<s.count;J++)h[J]=new ce,m[J]=new ce;const p=new ce,x=new ce,g=new ce,y=new ct,b=new ct,E=new ct,T=new ce,M=new ce;function v(J,w,C){p.fromBufferAttribute(s,J),x.fromBufferAttribute(s,w),g.fromBufferAttribute(s,C),y.fromBufferAttribute(c,J),b.fromBufferAttribute(c,w),E.fromBufferAttribute(c,C),x.sub(p),g.sub(p),b.sub(y),E.sub(y);const k=1/(b.x*E.y-E.x*b.y);isFinite(k)&&(T.copy(x).multiplyScalar(E.y).addScaledVector(g,-b.y).multiplyScalar(k),M.copy(g).multiplyScalar(b.x).addScaledVector(x,-E.x).multiplyScalar(k),h[J].add(T),h[w].add(T),h[C].add(T),m[J].add(M),m[w].add(M),m[C].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let J=0,w=U.length;J<w;++J){const C=U[J],k=C.start,ne=C.count;for(let ue=k,he=k+ne;ue<he;ue+=3)v(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const L=new ce,P=new ce,G=new ce,N=new ce;function z(J){G.fromBufferAttribute(l,J),N.copy(G);const w=h[J];L.copy(w),L.sub(G.multiplyScalar(G.dot(w))).normalize(),P.crossVectors(N,w);const k=P.dot(m[J])<0?-1:1;d.setXYZW(J,L.x,L.y,L.z,k)}for(let J=0,w=U.length;J<w;++J){const C=U[J],k=C.start,ne=C.count;for(let ue=k,he=k+ne;ue<he;ue+=3)z(e.getX(ue+0)),z(e.getX(ue+1)),z(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,b=s.count;y<b;y++)s.setXYZ(y,0,0,0);const l=new ce,c=new ce,d=new ce,h=new ce,m=new ce,p=new ce,x=new ce,g=new ce;if(e)for(let y=0,b=e.count;y<b;y+=3){const E=e.getX(y+0),T=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),h.add(x),m.add(x),p.add(x),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),s.setXYZ(y+0,x.x,x.y,x.z),s.setXYZ(y+1,x.x,x.y,x.z),s.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,y=new p.constructor(m.length*x);let b=0,E=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?b=m[T]*h.data.stride+h.offset:b=m[T]*x;for(let v=0;v<x;v++)y[E++]=p[b++]}return new Ai(y,x,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ii,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const y=p[x],b=e(y,s);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,y=p.length;g<y;g++){const b=p[g];x.push(b.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let y=0,b=g.length;y<b;y++)x.push(g[y].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ag=new pn,Tr=new Pv,wc=new ou,Rg=new ce,Dc=new ce,Uc=new ce,Lc=new ce,Zd=new ce,Nc=new ce,Cg=new ce,Oc=new ce;class Ri extends qn{constructor(e=new Ii,i=new Bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(Zd.fromBufferAttribute(g,e),d?Nc.addScaledVector(Zd,x):Nc.addScaledVector(Zd.sub(i),x))}i.add(Nc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(c),Tr.copy(e.ray).recast(e.near),!(wc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(wc,Rg)===null||Tr.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Ag.copy(c).invert(),Tr.copy(e.ray).applyMatrix4(Ag),!(s.boundingBox!==null&&Tr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Tr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,y=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,T=y.length;E<T;E++){const M=y[E],v=d[M.materialIndex],U=Math.max(M.start,b.start),L=Math.min(h.count,Math.min(M.start+M.count,b.start+b.count));for(let P=U,G=L;P<G;P+=3){const N=h.getX(P),z=h.getX(P+1),J=h.getX(P+2);l=Pc(this,v,e,s,p,x,g,N,z,J),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),T=Math.min(h.count,b.start+b.count);for(let M=E,v=T;M<v;M+=3){const U=h.getX(M),L=h.getX(M+1),P=h.getX(M+2);l=Pc(this,d,e,s,p,x,g,U,L,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,T=y.length;E<T;E++){const M=y[E],v=d[M.materialIndex],U=Math.max(M.start,b.start),L=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let P=U,G=L;P<G;P+=3){const N=P,z=P+1,J=P+2;l=Pc(this,v,e,s,p,x,g,N,z,J),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),T=Math.min(m.count,b.start+b.count);for(let M=E,v=T;M<v;M+=3){const U=M,L=M+1,P=M+2;l=Pc(this,d,e,s,p,x,g,U,L,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function W1(r,e,i,s,l,c,d,h){let m;if(e.side===Wn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,e.side===nr,h),m===null)return null;Oc.copy(h),Oc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Oc);return p<i.near||p>i.far?null:{distance:p,point:Oc.clone(),object:r}}function Pc(r,e,i,s,l,c,d,h,m,p){r.getVertexPosition(h,Dc),r.getVertexPosition(m,Uc),r.getVertexPosition(p,Lc);const x=W1(r,e,i,s,Dc,Uc,Lc,Cg);if(x){const g=new ce;Ti.getBarycoord(Cg,Dc,Uc,Lc,g),l&&(x.uv=Ti.getInterpolatedAttribute(l,h,m,p,g,new ct)),c&&(x.uv1=Ti.getInterpolatedAttribute(c,h,m,p,g,new ct)),d&&(x.normal=Ti.getInterpolatedAttribute(d,h,m,p,g,new ce),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new ce,materialIndex:0};Ti.getNormal(Dc,Uc,Lc,y.normal),x.face=y,x.barycoord=g}return x}class rl extends Ii{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],x=[],g=[];let y=0,b=0;E("z","y","x",-1,-1,s,i,e,d,c,0),E("z","y","x",1,-1,s,i,-e,d,c,1),E("x","z","y",1,1,e,s,i,l,d,2),E("x","z","y",1,-1,e,s,-i,l,d,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ga(p,3)),this.setAttribute("normal",new ga(x,3)),this.setAttribute("uv",new ga(g,2));function E(T,M,v,U,L,P,G,N,z,J,w){const C=P/z,k=G/J,ne=P/2,ue=G/2,he=N/2,me=z+1,F=J+1;let K=0,Y=0;const ye=new ce;for(let Se=0;Se<F;Se++){const O=Se*k-ue;for(let se=0;se<me;se++){const be=se*C-ne;ye[T]=be*U,ye[M]=O*L,ye[v]=he,p.push(ye.x,ye.y,ye.z),ye[T]=0,ye[M]=0,ye[v]=N>0?1:-1,x.push(ye.x,ye.y,ye.z),g.push(se/z),g.push(1-Se/J),K+=1}}for(let Se=0;Se<J;Se++)for(let O=0;O<z;O++){const se=y+O+me*Se,be=y+O+me*(Se+1),Ae=y+(O+1)+me*(Se+1),Pe=y+(O+1)+me*Se;m.push(se,be,Pe),m.push(be,Ae,Pe),Y+=6}h.addGroup(b,Y,w),b+=Y,y+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function zn(r){const e={};for(let i=0;i<r.length;i++){const s=Ps(r[i]);for(const l in s)e[l]=s[l]}return e}function q1(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Gv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const j1={clone:Ps,merge:zn};var Y1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y1,this.fragmentShader=Z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class eu extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new ce,wg=new ct,Dg=new ct;class Ei extends eu{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Yh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yh*2*Math.atan(Math.tan(Cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,wg,Dg),i.subVectors(Dg,wg)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const As=-90,Rs=1;class K1 extends qn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(As,Rs,e,i);l.layers=this.layers,this.add(l);const c=new Ei(As,Rs,e,i);c.layers=this.layers,this.add(c);const d=new Ei(As,Rs,e,i);d.layers=this.layers,this.add(d);const h=new Ei(As,Rs,e,i);h.layers=this.layers,this.add(h);const m=new Ei(As,Rs,e,i);m.layers=this.layers,this.add(m);const p=new Ei(As,Rs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Pi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,x]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(g,y,b),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Vv extends Fn{constructor(e=[],i=Ls,s,l,c,d,h,m,p,x){super(e,i,s,l,c,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q1 extends ir{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Vv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new rl(5,5,5),c=new Fi({name:"CubemapFromEquirect",uniforms:Ps(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ma});c.uniforms.tEquirect.value=i;const d=new Ri(l,c),h=i.minFilter;return i.minFilter===Lr&&(i.minFilter=On),new K1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}class zc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J1={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const M=i.getJointPose(T,s),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=x.position.distanceTo(g.position),b=.02,E=.005;p.inputState.pinching&&y>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new zc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Ug extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class kv extends Fn{constructor(e=null,i=1,s=1,l,c,d,h,m,p=ri,x=ri,g,y){super(null,d,h,m,p,x,l,c,g,y),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qd=new ce,$1=new ce,e3=new mt;class wr{constructor(e=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Qd.subVectors(s,i).cross($1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Qd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||e3.getNormalMatrix(e),l=this.coplanarPoint(Qd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new ou,t3=new ct(.5,.5),Fc=new ce;class Xv{constructor(e=new wr,i=new wr,s=new wr,l=new wr,c=new wr,d=new wr){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Pi,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],y=c[6],b=c[7],E=c[8],T=c[9],M=c[10],v=c[11],U=c[12],L=c[13],P=c[14],G=c[15];if(l[0].setComponents(p-d,b-x,v-E,G-U).normalize(),l[1].setComponents(p+d,b+x,v+E,G+U).normalize(),l[2].setComponents(p+h,b+g,v+T,G+L).normalize(),l[3].setComponents(p-h,b-g,v-T,G-L).normalize(),s)l[4].setComponents(m,y,M,P).normalize(),l[5].setComponents(p-m,b-y,v-M,G-P).normalize();else if(l[4].setComponents(p-m,b-y,v-M,G-P).normalize(),i===Pi)l[5].setComponents(p+m,b+y,v+M,G+P).normalize();else if(i===Jc)l[5].setComponents(m,y,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){Ar.center.set(0,0,0);const i=t3.distanceTo(e.center);return Ar.radius=.7071067811865476+i,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Fc.x=l.normal.x>0?e.max.x:e.min.x,Fc.y=l.normal.y>0?e.max.y:e.min.y,Fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class n3 extends al{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tu=new ce,nu=new ce,Lg=new pn,Vo=new Pv,Bc=new ou,Jd=new ce,Ng=new ce;class i3 extends qn{constructor(e=new Ii,i=new n3){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)tu.fromBufferAttribute(i,l-1),nu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=tu.distanceTo(nu);e.setAttribute("lineDistance",new ga(s,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,e.ray.intersectsSphere(Bc)===!1)return;Lg.copy(l).invert(),Vo.copy(e.ray).applyMatrix4(Lg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=s.index,y=s.attributes.position;if(x!==null){const b=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let T=b,M=E-1;T<M;T+=p){const v=x.getX(T),U=x.getX(T+1),L=Ic(this,e,Vo,m,v,U,T);L&&i.push(L)}if(this.isLineLoop){const T=x.getX(E-1),M=x.getX(b),v=Ic(this,e,Vo,m,T,M,E-1);v&&i.push(v)}}else{const b=Math.max(0,d.start),E=Math.min(y.count,d.start+d.count);for(let T=b,M=E-1;T<M;T+=p){const v=Ic(this,e,Vo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Ic(this,e,Vo,m,E-1,b,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Ic(r,e,i,s,l,c,d){const h=r.geometry.attributes.position;if(tu.fromBufferAttribute(h,l),nu.fromBufferAttribute(h,c),i.distanceSqToSegment(tu,nu,Jd,Ng)>s)return;Jd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Jd);if(!(p<e.near||p>e.far))return{distance:p,point:Ng.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const Og=new ce,Pg=new ce;class a3 extends i3{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Og.fromBufferAttribute(i,l),Pg.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Og.distanceTo(Pg);e.setAttribute("lineDistance",new ga(s,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wv extends Fn{constructor(e,i,s=Or,l,c,d,h=ri,m=ri,p,x=Zo,g=1){if(x!==Zo&&x!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,d,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nr extends Ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,g=e/h,y=i/m,b=[],E=[],T=[],M=[];for(let v=0;v<x;v++){const U=v*y-d;for(let L=0;L<p;L++){const P=L*g-c;E.push(P,-U,0),T.push(0,0,1),M.push(L/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<h;U++){const L=U+p*v,P=U+p*(v+1),G=U+1+p*(v+1),N=U+1+p*v;b.push(L,P,N),b.push(P,G,N)}this.setIndex(b),this.setAttribute("position",new ga(E,3)),this.setAttribute("normal",new ga(T,3)),this.setAttribute("uv",new ga(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hc extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class r3 extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s3 extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class o3 extends eu{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class l3 extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class c3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function zg(r,e,i,s){const l=u3(s);switch(i){case wv:return r*e;case Uv:return r*e/l.components*l.byteLength;case rp:return r*e/l.components*l.byteLength;case sp:return r*e*2/l.components*l.byteLength;case op:return r*e*2/l.components*l.byteLength;case Dv:return r*e*3/l.components*l.byteLength;case xi:return r*e*4/l.components*l.byteLength;case lp:return r*e*4/l.components*l.byteLength;case Wc:case qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jc:case Yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Mh:return Math.max(r,16)*Math.max(e,8)/4;case yh:case bh:return Math.max(r,8)*Math.max(e,8)/2;case Eh:case Th:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case zh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Gh:case Vh:case kh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xh:case Wh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case qh:case jh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function u3(r){switch(r){case _a:case Tv:return{byteLength:1,components:1};case jo:case Av:case zr:return{byteLength:2,components:1};case ip:case ap:return{byteLength:2,components:4};case Or:case np:case Oi:return{byteLength:4,components:1};case Rv:case Cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);function jv(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function f3(r){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,x),h.onUploadCallback();let b;if(p instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=r.SHORT;else if(p instanceof Uint32Array)b=r.UNSIGNED_INT;else if(p instanceof Int32Array)b=r.INT;else if(p instanceof Int8Array)b=r.BYTE;else if(p instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const x=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,x);else{g.sort((b,E)=>b.start-E.start);let y=0;for(let b=1;b<g.length;b++){const E=g[y],T=g[b];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++y,g[y]=T)}g.length=y+1;for(let b=0,E=g.length;b<E;b++){const T=g[b];r.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var d3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,S3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,T3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,C3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,P3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V3="gl_FragColor = linearToOutputTexel( gl_FragColor );",k3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,W3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,k2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:d3,alphahash_pars_fragment:h3,alphamap_fragment:p3,alphamap_pars_fragment:m3,alphatest_fragment:x3,alphatest_pars_fragment:g3,aomap_fragment:v3,aomap_pars_fragment:_3,batching_pars_vertex:y3,batching_vertex:S3,begin_vertex:b3,beginnormal_vertex:M3,bsdfs:E3,iridescence_fragment:T3,bumpmap_pars_fragment:A3,clipping_planes_fragment:R3,clipping_planes_pars_fragment:C3,clipping_planes_pars_vertex:w3,clipping_planes_vertex:D3,color_fragment:U3,color_pars_fragment:L3,color_pars_vertex:N3,color_vertex:O3,common:P3,cube_uv_reflection_fragment:z3,defaultnormal_vertex:F3,displacementmap_pars_vertex:B3,displacementmap_vertex:I3,emissivemap_fragment:H3,emissivemap_pars_fragment:G3,colorspace_fragment:V3,colorspace_pars_fragment:k3,envmap_fragment:X3,envmap_common_pars_fragment:W3,envmap_pars_fragment:q3,envmap_pars_vertex:j3,envmap_physical_pars_fragment:aM,envmap_vertex:Y3,fog_vertex:Z3,fog_pars_vertex:K3,fog_fragment:Q3,fog_pars_fragment:J3,gradientmap_pars_fragment:$3,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:rM,lights_toon_pars_fragment:sM,lights_phong_fragment:oM,lights_phong_pars_fragment:lM,lights_physical_fragment:cM,lights_physical_pars_fragment:uM,lights_fragment_begin:fM,lights_fragment_maps:dM,lights_fragment_end:hM,logdepthbuf_fragment:pM,logdepthbuf_pars_fragment:mM,logdepthbuf_pars_vertex:xM,logdepthbuf_vertex:gM,map_fragment:vM,map_pars_fragment:_M,map_particle_fragment:yM,map_particle_pars_fragment:SM,metalnessmap_fragment:bM,metalnessmap_pars_fragment:MM,morphinstance_vertex:EM,morphcolor_vertex:TM,morphnormal_vertex:AM,morphtarget_pars_vertex:RM,morphtarget_vertex:CM,normal_fragment_begin:wM,normal_fragment_maps:DM,normal_pars_fragment:UM,normal_pars_vertex:LM,normal_vertex:NM,normalmap_pars_fragment:OM,clearcoat_normal_fragment_begin:PM,clearcoat_normal_fragment_maps:zM,clearcoat_pars_fragment:FM,iridescence_pars_fragment:BM,opaque_fragment:IM,packing:HM,premultiplied_alpha_fragment:GM,project_vertex:VM,dithering_fragment:kM,dithering_pars_fragment:XM,roughnessmap_fragment:WM,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:jM,shadowmap_pars_vertex:YM,shadowmap_vertex:ZM,shadowmask_pars_fragment:KM,skinbase_vertex:QM,skinning_pars_vertex:JM,skinning_vertex:$M,skinnormal_vertex:e2,specularmap_fragment:t2,specularmap_pars_fragment:n2,tonemapping_fragment:i2,tonemapping_pars_fragment:a2,transmission_fragment:r2,transmission_pars_fragment:s2,uv_pars_fragment:o2,uv_pars_vertex:l2,uv_vertex:c2,worldpos_vertex:u2,background_vert:f2,background_frag:d2,backgroundCube_vert:h2,backgroundCube_frag:p2,cube_vert:m2,cube_frag:x2,depth_vert:g2,depth_frag:v2,distanceRGBA_vert:_2,distanceRGBA_frag:y2,equirect_vert:S2,equirect_frag:b2,linedashed_vert:M2,linedashed_frag:E2,meshbasic_vert:T2,meshbasic_frag:A2,meshlambert_vert:R2,meshlambert_frag:C2,meshmatcap_vert:w2,meshmatcap_frag:D2,meshnormal_vert:U2,meshnormal_frag:L2,meshphong_vert:N2,meshphong_frag:O2,meshphysical_vert:P2,meshphysical_frag:z2,meshtoon_vert:F2,meshtoon_frag:B2,points_vert:I2,points_frag:H2,shadow_vert:G2,shadow_frag:V2,sprite_vert:k2,sprite_frag:X2},Oe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ni={basic:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:zn([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:zn([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:zn([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:zn([Oe.lights,Oe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ni.physical={uniforms:zn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Gc={r:0,b:0,g:0},Rr=new ya,W2=new pn;function q2(r,e,i,s,l,c,d){const h=new Pt(0);let m=c===!0?0:1,p,x,g=null,y=0,b=null;function E(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?i:e).get(P)),P}function T(L){let P=!1;const G=E(L);G===null?v(h,m):G&&G.isColor&&(v(G,1),P=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?s.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(r.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,P){const G=E(P);G&&(G.isCubeTexture||G.mapping===su)?(x===void 0&&(x=new Ri(new rl(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Ps(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(N,z,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Rr.copy(P.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),x.material.uniforms.envMap.value=G,x.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler(Rr)),x.material.toneMapped=Nt.getTransfer(G.colorSpace)!==Xt,(g!==G||y!==G.version||b!==r.toneMapping)&&(x.material.needsUpdate=!0,g=G,y=G.version,b=r.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Ri(new Nr(2,2),new Fi({name:"BackgroundMaterial",uniforms:Ps(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Nt.getTransfer(G.colorSpace)!==Xt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||y!==G.version||b!==r.toneMapping)&&(p.material.needsUpdate=!0,g=G,y=G.version,b=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,P){L.getRGB(Gc,Gv(r)),s.buffers.color.setClear(Gc.r,Gc.g,Gc.b,P,d)}function U(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,P=1){h.set(L),m=P,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:T,addToRenderList:M,dispose:U}}function j2(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,d=!1;function h(C,k,ne,ue,he){let me=!1;const F=g(ue,ne,k);c!==F&&(c=F,p(c.object)),me=b(C,ue,ne,he),me&&E(C,ue,ne,he),he!==null&&e.update(he,r.ELEMENT_ARRAY_BUFFER),(me||d)&&(d=!1,P(C,k,ne,ue),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function x(C){return r.deleteVertexArray(C)}function g(C,k,ne){const ue=ne.wireframe===!0;let he=s[C.id];he===void 0&&(he={},s[C.id]=he);let me=he[k.id];me===void 0&&(me={},he[k.id]=me);let F=me[ue];return F===void 0&&(F=y(m()),me[ue]=F),F}function y(C){const k=[],ne=[],ue=[];for(let he=0;he<i;he++)k[he]=0,ne[he]=0,ue[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:ue,object:C,attributes:{},index:null}}function b(C,k,ne,ue){const he=c.attributes,me=k.attributes;let F=0;const K=ne.getAttributes();for(const Y in K)if(K[Y].location>=0){const Se=he[Y];let O=me[Y];if(O===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),Se===void 0||Se.attribute!==O||O&&Se.data!==O.data)return!0;F++}return c.attributesNum!==F||c.index!==ue}function E(C,k,ne,ue){const he={},me=k.attributes;let F=0;const K=ne.getAttributes();for(const Y in K)if(K[Y].location>=0){let Se=me[Y];Se===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor));const O={};O.attribute=Se,Se&&Se.data&&(O.data=Se.data),he[Y]=O,F++}c.attributes=he,c.attributesNum=F,c.index=ue}function T(){const C=c.newAttributes;for(let k=0,ne=C.length;k<ne;k++)C[k]=0}function M(C){v(C,0)}function v(C,k){const ne=c.newAttributes,ue=c.enabledAttributes,he=c.attributeDivisors;ne[C]=1,ue[C]===0&&(r.enableVertexAttribArray(C),ue[C]=1),he[C]!==k&&(r.vertexAttribDivisor(C,k),he[C]=k)}function U(){const C=c.newAttributes,k=c.enabledAttributes;for(let ne=0,ue=k.length;ne<ue;ne++)k[ne]!==C[ne]&&(r.disableVertexAttribArray(ne),k[ne]=0)}function L(C,k,ne,ue,he,me,F){F===!0?r.vertexAttribIPointer(C,k,ne,he,me):r.vertexAttribPointer(C,k,ne,ue,he,me)}function P(C,k,ne,ue){T();const he=ue.attributes,me=ne.getAttributes(),F=k.defaultAttributeValues;for(const K in me){const Y=me[K];if(Y.location>=0){let ye=he[K];if(ye===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor)),ye!==void 0){const Se=ye.normalized,O=ye.itemSize,se=e.get(ye);if(se===void 0)continue;const be=se.buffer,Ae=se.type,Pe=se.bytesPerElement,re=Ae===r.INT||Ae===r.UNSIGNED_INT||ye.gpuType===np;if(ye.isInterleavedBufferAttribute){const fe=ye.data,Re=fe.stride,Ve=ye.offset;if(fe.isInstancedInterleavedBuffer){for(let qe=0;qe<Y.locationSize;qe++)v(Y.location+qe,fe.meshPerAttribute);C.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let qe=0;qe<Y.locationSize;qe++)M(Y.location+qe);r.bindBuffer(r.ARRAY_BUFFER,be);for(let qe=0;qe<Y.locationSize;qe++)L(Y.location+qe,O/Y.locationSize,Ae,Se,Re*Pe,(Ve+O/Y.locationSize*qe)*Pe,re)}else{if(ye.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)v(Y.location+fe,ye.meshPerAttribute);C.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let fe=0;fe<Y.locationSize;fe++)M(Y.location+fe);r.bindBuffer(r.ARRAY_BUFFER,be);for(let fe=0;fe<Y.locationSize;fe++)L(Y.location+fe,O/Y.locationSize,Ae,Se,O*Pe,O/Y.locationSize*fe*Pe,re)}}else if(F!==void 0){const Se=F[K];if(Se!==void 0)switch(Se.length){case 2:r.vertexAttrib2fv(Y.location,Se);break;case 3:r.vertexAttrib3fv(Y.location,Se);break;case 4:r.vertexAttrib4fv(Y.location,Se);break;default:r.vertexAttrib1fv(Y.location,Se)}}}}U()}function G(){J();for(const C in s){const k=s[C];for(const ne in k){const ue=k[ne];for(const he in ue)x(ue[he].object),delete ue[he];delete k[ne]}delete s[C]}}function N(C){if(s[C.id]===void 0)return;const k=s[C.id];for(const ne in k){const ue=k[ne];for(const he in ue)x(ue[he].object),delete ue[he];delete k[ne]}delete s[C.id]}function z(C){for(const k in s){const ne=s[k];if(ne[C.id]===void 0)continue;const ue=ne[C.id];for(const he in ue)x(ue[he].object),delete ue[he];delete ne[C.id]}}function J(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:U}}function Y2(r,e,i){let s;function l(p){s=p}function c(p,x){r.drawArrays(s,p,x),i.update(x,s,1)}function d(p,x,g){g!==0&&(r.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let b=0;for(let E=0;E<g;E++)b+=x[E];i.update(b,s,1)}function m(p,x,g,y){if(g===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)d(p[E],x[E],y[E]);else{b.multiDrawArraysInstancedWEBGL(s,p,0,x,0,y,0,g);let E=0;for(let T=0;T<g;T++)E+=x[T]*y[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Z2(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==xi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const J=z===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==_a&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Oi&&!J)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ot("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:b,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:G,maxSamples:N}}function K2(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new wr,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const b=g.length!==0||y||s!==0||l;return l=y,s=g.length,b},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=x(g,y,0)},this.setState=function(g,y,b){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,v=r.get(g);if(!l||E===null||E.length===0||c&&!M)c?x(null):p();else{const U=c?0:s,L=U*4;let P=v.clippingState||null;m.value=P,P=x(E,y,L,b);for(let G=0;G!==L;++G)P[G]=i[G];v.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,y,b,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const v=b+T*4,U=y.matrixWorldInverse;h.getNormalMatrix(U),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,P=b;L!==T;++L,P+=4)d.copy(g[L]).applyMatrix4(U,h),d.normal.toArray(M,P),M[P+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function Q2(r){let e=new WeakMap;function i(d,h){return h===xh?d.mapping=Ls:h===gh&&(d.mapping=Ns),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===xh||h===gh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Q1(m.height);return p.fromEquirectangularTexture(r,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const er=4,Fg=[.125,.215,.35,.446,.526,.582],Ur=20,J2=256,ko=new o3,Bg=new Pt;let $d=null,eh=0,th=0,nh=!1;const $2=new ce;class Ig{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=$2}=c;$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($d,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:zr,format:xi,colorSpace:Os,depthBuffer:!1},l=Hg(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eE(c)),this._blurMaterial=nE(c,e,i)}return l}_compileMaterial(e){const i=new Ri(new Ii,e);this._renderer.compile(i,ko)}_sceneToCubeUV(e,i,s,l,c){const m=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,b=g.toneMapping;g.getClearColor(Bg),g.toneMapping=tr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new rl,new Bv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const U=e.background;U?U.isColor&&(M.color.copy(U),e.background=null,v=!0):(M.color.copy(Bg),v=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[L],c.y,c.z)):P===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[L]));const G=this._cubeSize;Cs(l,P*G,L>2?G:0,G,G),g.setRenderTarget(l),v&&g.render(T,m),g.render(e,m)}g.toneMapping=b,g.autoClear=y,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ls||e.mapping===Ns;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Cs(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,ko)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const U=3*Math.max(this._cubeSize,16),L=4*this._cubeSize;this._ggxMaterial=tE(this._lodMax,U,L)}const d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),y=.05+p*.95,b=g*y,{_lodMax:E}=this,T=this._sizeLods[s],M=3*T*(s>E-er?s-E+er:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=E-i,Cs(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(h,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Cs(e,M,v,3*T,2*T),l.setRenderTarget(e),l.render(h,ko)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&on("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,b=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Ur-1),T=c/E,M=isFinite(c)?1+Math.floor(x*T):Ur;M>Ur&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ur}`);const v=[];let U=0;for(let z=0;z<Ur;++z){const J=z/T,w=Math.exp(-J*J/2);v.push(w),z===0?U+=w:z<M&&(U+=2*w)}for(let z=0;z<v.length;z++)v[z]=v[z]/U;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-s;const P=this._sizeLods[l],G=3*P*(l>L-er?l-L+er:0),N=4*(this._cubeSize-P);Cs(i,G,N,3*P,2*P),m.setRenderTarget(i),m.render(g,ko)}}function eE(r){const e=[],i=[],s=[];let l=r;const c=r-er+1+Fg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>r-er?m=Fg[d-r+er-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,y=[x,x,g,x,g,g,x,x,g,g,x,g],b=6,E=6,T=3,M=2,v=1,U=new Float32Array(T*E*b),L=new Float32Array(M*E*b),P=new Float32Array(v*E*b);for(let N=0;N<b;N++){const z=N%3*2/3-1,J=N>2?0:-1,w=[z,J,0,z+2/3,J,0,z+2/3,J+1,0,z,J,0,z+2/3,J+1,0,z,J+1,0];U.set(w,T*E*N),L.set(y,M*E*N);const C=[N,N,N,N,N,N];P.set(C,v*E*N)}const G=new Ii;G.setAttribute("position",new Ai(U,T)),G.setAttribute("uv",new Ai(L,M)),G.setAttribute("faceIndex",new Ai(P,v)),s.push(new Ri(G,null)),l>er&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Hg(r,e,i){const s=new ir(r,e,i);return s.texture.mapping=su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cs(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function tE(r,e,i){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function nE(r,e,i){const s=new Float32Array(Ur),l=new ce(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Gg(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Vg(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iE(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===xh||m===gh,x=m===Ls||m===Ns;if(p||x){let g=e.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new Ig(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const b=h.image;return p&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new Ig(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function aE(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Qo("WebGLRenderer: "+s+" extension not supported."),l}}}function rE(r,e,i,s){const l={},c=new WeakMap;function d(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",d),delete l[y.id];const b=c.get(y);b&&(e.remove(b),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(g,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const b in y)e.update(y[b],r.ARRAY_BUFFER)}function p(g){const y=[],b=g.index,E=g.attributes.position;let T=0;if(b!==null){const U=b.array;T=b.version;for(let L=0,P=U.length;L<P;L+=3){const G=U[L+0],N=U[L+1],z=U[L+2];y.push(G,N,N,z,z,G)}}else if(E!==void 0){const U=E.array;T=E.version;for(let L=0,P=U.length/3-1;L<P;L+=3){const G=L+0,N=L+1,z=L+2;y.push(G,N,N,z,z,G)}}else return;const M=new(Nv(y)?Hv:Iv)(y,1);M.version=T;const v=c.get(g);v&&e.remove(v),c.set(g,M)}function x(g){const y=c.get(g);if(y){const b=g.index;b!==null&&y.version<b.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function sE(r,e,i){let s;function l(y){s=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function m(y,b){r.drawElements(s,b,c,y*d),i.update(b,s,1)}function p(y,b,E){E!==0&&(r.drawElementsInstanced(s,b,c,y*d,E),i.update(b,s,E))}function x(y,b,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,y,0,E);let M=0;for(let v=0;v<E;v++)M+=b[v];i.update(M,s,1)}function g(y,b,E,T){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)p(y[v]/d,b[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(s,b,0,c,y,0,T,0,E);let v=0;for(let U=0;U<E;U++)v+=b[U]*T[U];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function oE(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:on("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function lE(r,e,i){const s=new WeakMap,l=new an;function c(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let y=s.get(h);if(y===void 0||y.count!==g){let C=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var b=C;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let P=0;E===!0&&(P=1),T===!0&&(P=2),M===!0&&(P=3);let G=h.attributes.position.count*P,N=1;G>e.maxTextureSize&&(N=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const z=new Float32Array(G*N*4*g),J=new Ov(z,G,N,g);J.type=Oi,J.needsUpdate=!0;const w=P*4;for(let k=0;k<g;k++){const ne=v[k],ue=U[k],he=L[k],me=G*N*4*k;for(let F=0;F<ne.count;F++){const K=F*w;E===!0&&(l.fromBufferAttribute(ne,F),z[me+K+0]=l.x,z[me+K+1]=l.y,z[me+K+2]=l.z,z[me+K+3]=0),T===!0&&(l.fromBufferAttribute(ue,F),z[me+K+4]=l.x,z[me+K+5]=l.y,z[me+K+6]=l.z,z[me+K+7]=0),M===!0&&(l.fromBufferAttribute(he,F),z[me+K+8]=l.x,z[me+K+9]=l.y,z[me+K+10]=l.z,z[me+K+11]=he.itemSize===4?l.w:1)}}y={count:g,texture:J,size:new ct(G,N)},s.set(h,y),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function cE(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const Yv=new Fn,kg=new Wv(1,1),Zv=new Ov,Kv=new O1,Qv=new Vv,Xg=[],Wg=[],qg=new Float32Array(16),jg=new Float32Array(9),Yg=new Float32Array(4);function Hs(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Xg[l];if(c===void 0&&(c=new Float32Array(l),Xg[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,r[d].toArray(c,h)}return c}function vn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function _n(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function cu(r,e){let i=Wg[e];i===void 0&&(i=new Int32Array(e),Wg[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function uE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function fE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2fv(this.addr,e),_n(i,e)}}function dE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;r.uniform3fv(this.addr,e),_n(i,e)}}function hE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4fv(this.addr,e),_n(i,e)}}function pE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;Yg.set(s),r.uniformMatrix2fv(this.addr,!1,Yg),_n(i,s)}}function mE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;jg.set(s),r.uniformMatrix3fv(this.addr,!1,jg),_n(i,s)}}function xE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;qg.set(s),r.uniformMatrix4fv(this.addr,!1,qg),_n(i,s)}}function gE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function vE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2iv(this.addr,e),_n(i,e)}}function _E(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3iv(this.addr,e),_n(i,e)}}function yE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4iv(this.addr,e),_n(i,e)}}function SE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function bE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2uiv(this.addr,e),_n(i,e)}}function ME(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3uiv(this.addr,e),_n(i,e)}}function EE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4uiv(this.addr,e),_n(i,e)}}function TE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(kg.compareFunction=Lv,c=kg):c=Yv,i.setTexture2D(e||c,l)}function AE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Kv,l)}function RE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Qv,l)}function CE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Zv,l)}function wE(r){switch(r){case 5126:return uE;case 35664:return fE;case 35665:return dE;case 35666:return hE;case 35674:return pE;case 35675:return mE;case 35676:return xE;case 5124:case 35670:return gE;case 35667:case 35671:return vE;case 35668:case 35672:return _E;case 35669:case 35673:return yE;case 5125:return SE;case 36294:return bE;case 36295:return ME;case 36296:return EE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return AE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return CE}}function DE(r,e){r.uniform1fv(this.addr,e)}function UE(r,e){const i=Hs(e,this.size,2);r.uniform2fv(this.addr,i)}function LE(r,e){const i=Hs(e,this.size,3);r.uniform3fv(this.addr,i)}function NE(r,e){const i=Hs(e,this.size,4);r.uniform4fv(this.addr,i)}function OE(r,e){const i=Hs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function PE(r,e){const i=Hs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function zE(r,e){const i=Hs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function FE(r,e){r.uniform1iv(this.addr,e)}function BE(r,e){r.uniform2iv(this.addr,e)}function IE(r,e){r.uniform3iv(this.addr,e)}function HE(r,e){r.uniform4iv(this.addr,e)}function GE(r,e){r.uniform1uiv(this.addr,e)}function VE(r,e){r.uniform2uiv(this.addr,e)}function kE(r,e){r.uniform3uiv(this.addr,e)}function XE(r,e){r.uniform4uiv(this.addr,e)}function WE(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Yv,c[d])}function qE(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Kv,c[d])}function jE(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Qv,c[d])}function YE(r,e,i){const s=this.cache,l=e.length,c=cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Zv,c[d])}function ZE(r){switch(r){case 5126:return DE;case 35664:return UE;case 35665:return LE;case 35666:return NE;case 35674:return OE;case 35675:return PE;case 35676:return zE;case 5124:case 35670:return FE;case 35667:case 35671:return BE;case 35668:case 35672:return IE;case 35669:case 35673:return HE;case 5125:return GE;case 36294:return VE;case 36295:return kE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return jE;case 36289:case 36303:case 36311:case 36292:return YE}}class KE{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=wE(i.type)}}class QE{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ZE(i.type)}}class JE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function Zg(r,e){r.seq.push(e),r.map[e.id]=e}function $E(r,e,i){const s=r.name,l=s.length;for(ih.lastIndex=0;;){const c=ih.exec(s),d=ih.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Zg(i,p===void 0?new KE(h,r,e):new QE(h,r,e));break}else{let g=i.map[h];g===void 0&&(g=new JE(h),Zg(i,g)),i=g}}}class Zc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);$E(c,d,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Kg(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const eT=37297;let tT=0;function nT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Qg=new mt;function iT(r){Nt._getMatrix(Qg,Nt.workingColorSpace,r);const e=`mat3( ${Qg.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(r)){case Qc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Jg(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+nT(r.getShaderSource(e),h)}else return c}function aT(r,e){const i=iT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function rT(r,e){let i;switch(e){case o1:i="Linear";break;case l1:i="Reinhard";break;case c1:i="Cineon";break;case u1:i="ACESFilmic";break;case d1:i="AgX";break;case h1:i="Neutral";break;case f1:i="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new ce;function sT(){Nt.getLuminanceCoefficients(Vc);const r=Vc.x.toFixed(4),e=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function lT(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function cT(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:h}}return i}function Wo(r){return r!==""}function $g(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ev(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(r){return r.replace(uT,dT)}const fT=new Map;function dT(r,e){let i=gt[e];if(i===void 0){const s=fT.get(e);if(s!==void 0)i=gt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Zh(i)}const hT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tv(r){return r.replace(hT,pT)}function pT(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function nv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===bv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Hb?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function xT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ls:case Ns:e="ENVMAP_TYPE_CUBE";break;case su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function vT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mv:e="ENVMAP_BLENDING_MULTIPLY";break;case r1:e="ENVMAP_BLENDING_MIX";break;case s1:e="ENVMAP_BLENDING_ADD";break}return e}function _T(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function yT(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=mT(i),p=xT(i),x=gT(i),g=vT(i),y=_T(i),b=oT(i),E=lT(c),T=l.createProgram();let M,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),v.length>0&&(v+=`
`)):(M=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),v=[nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==tr?"#define TONE_MAPPING":"",i.toneMapping!==tr?gt.tonemapping_pars_fragment:"",i.toneMapping!==tr?rT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,aT("linearToOutputTexel",i.outputColorSpace),sT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),d=Zh(d),d=$g(d,i),d=ev(d,i),h=Zh(h),h=$g(h,i),h=ev(h,i),d=tv(d),h=tv(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=U+M+d,P=U+v+h,G=Kg(l,l.VERTEX_SHADER,L),N=Kg(l,l.FRAGMENT_SHADER,P);l.attachShader(T,G),l.attachShader(T,N),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(k){if(r.debug.checkShaderErrors){const ne=l.getProgramInfoLog(T)||"",ue=l.getShaderInfoLog(G)||"",he=l.getShaderInfoLog(N)||"",me=ne.trim(),F=ue.trim(),K=he.trim();let Y=!0,ye=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,G,N);else{const Se=Jg(l,G,"vertex"),O=Jg(l,N,"fragment");on("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+me+`
`+Se+`
`+O)}else me!==""?ot("WebGLProgram: Program Info Log:",me):(F===""||K==="")&&(ye=!1);ye&&(k.diagnostics={runnable:Y,programLog:me,vertexShader:{log:F,prefix:M},fragmentShader:{log:K,prefix:v}})}l.deleteShader(G),l.deleteShader(N),J=new Zc(l,T),w=cT(l,T)}let J;this.getUniforms=function(){return J===void 0&&z(this),J};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,eT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=N,this}let ST=0;class bT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new MT(e),i.set(e,s)),s}}class MT{constructor(e){this.id=ST++,this.code=e,this.usedTimes=0}}function ET(r,e,i,s,l,c,d){const h=new zv,m=new bT,p=new Set,x=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let b=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,k,ne,ue){const he=ne.fog,me=ue.geometry,F=w.isMeshStandardMaterial?ne.environment:null,K=(w.isMeshStandardMaterial?i:e).get(w.envMap||F),Y=K&&K.mapping===su?K.image.height:null,ye=E[w.type];w.precision!==null&&(b=l.getMaxPrecision(w.precision),b!==w.precision&&ot("WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const Se=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,O=Se!==void 0?Se.length:0;let se=0;me.morphAttributes.position!==void 0&&(se=1),me.morphAttributes.normal!==void 0&&(se=2),me.morphAttributes.color!==void 0&&(se=3);let be,Ae,Pe,re;if(ye){const wt=Ni[ye];be=wt.vertexShader,Ae=wt.fragmentShader}else be=w.vertexShader,Ae=w.fragmentShader,m.update(w),Pe=m.getVertexShaderID(w),re=m.getFragmentShaderID(w);const fe=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Ve=ue.isInstancedMesh===!0,qe=ue.isBatchedMesh===!0,lt=!!w.map,Jt=!!w.matcap,ut=!!K,Rt=!!w.aoMap,H=!!w.lightMap,ft=!!w.bumpMap,xt=!!w.normalMap,vt=!!w.displacementMap,Ie=!!w.emissiveMap,It=!!w.metalnessMap,Ye=!!w.roughnessMap,it=w.anisotropy>0,D=w.clearcoat>0,_=w.dispersion>0,I=w.iridescence>0,Q=w.sheen>0,de=w.transmission>0,ie=it&&!!w.anisotropyMap,ze=D&&!!w.clearcoatMap,Ue=D&&!!w.clearcoatNormalMap,Ze=D&&!!w.clearcoatRoughnessMap,We=I&&!!w.iridescenceMap,Me=I&&!!w.iridescenceThicknessMap,Te=Q&&!!w.sheenColorMap,Ke=Q&&!!w.sheenRoughnessMap,Xe=!!w.specularMap,Fe=!!w.specularColorMap,at=!!w.specularIntensityMap,V=de&&!!w.transmissionMap,Le=de&&!!w.thicknessMap,we=!!w.gradientMap,De=!!w.alphaMap,Ee=w.alphaTest>0,_e=!!w.alphaHash,He=!!w.extensions;let rt=tr;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=r.toneMapping);const Ht={shaderID:ye,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:Ae,defines:w.defines,customVertexShaderID:Pe,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:qe,batchingColor:qe&&ue._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&ue.instanceColor!==null,instancingMorph:Ve&&ue.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Os,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:Jt,envMap:ut,envMapMode:ut&&K.mapping,envMapCubeUVHeight:Y,aoMap:Rt,lightMap:H,bumpMap:ft,normalMap:xt,displacementMap:y&&vt,emissiveMap:Ie,normalMapObjectSpace:xt&&w.normalMapType===v1,normalMapTangentSpace:xt&&w.normalMapType===g1,metalnessMap:It,roughnessMap:Ye,anisotropy:it,anisotropyMap:ie,clearcoat:D,clearcoatMap:ze,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ze,dispersion:_,iridescence:I,iridescenceMap:We,iridescenceThicknessMap:Me,sheen:Q,sheenColorMap:Te,sheenRoughnessMap:Ke,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:at,transmission:de,transmissionMap:V,thicknessMap:Le,gradientMap:we,opaque:w.transparent===!1&&w.blending===ws&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:Ee,alphaHash:_e,combine:w.combine,mapUv:lt&&T(w.map.channel),aoMapUv:Rt&&T(w.aoMap.channel),lightMapUv:H&&T(w.lightMap.channel),bumpMapUv:ft&&T(w.bumpMap.channel),normalMapUv:xt&&T(w.normalMap.channel),displacementMapUv:vt&&T(w.displacementMap.channel),emissiveMapUv:Ie&&T(w.emissiveMap.channel),metalnessMapUv:It&&T(w.metalnessMap.channel),roughnessMapUv:Ye&&T(w.roughnessMap.channel),anisotropyMapUv:ie&&T(w.anisotropyMap.channel),clearcoatMapUv:ze&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&T(w.sheenRoughnessMap.channel),specularMapUv:Xe&&T(w.specularMap.channel),specularColorMapUv:Fe&&T(w.specularColorMap.channel),specularIntensityMapUv:at&&T(w.specularIntensityMap.channel),transmissionMapUv:V&&T(w.transmissionMap.channel),thicknessMapUv:Le&&T(w.thicknessMap.channel),alphaMapUv:De&&T(w.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(xt||it),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!me.attributes.uv&&(lt||De),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Re,skinning:ue.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&Nt.getTransfer(w.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ie&&w.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(w.emissiveMap.colorSpace)===Xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ha,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||qe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)C.push(k),C.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(U(C,w),L(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function U(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function P(w){const C=E[w.type];let k;if(C){const ne=Ni[C];k=j1.clone(ne.uniforms)}else k=w.uniforms;return k}function G(w,C){let k;for(let ne=0,ue=x.length;ne<ue;ne++){const he=x[ne];if(he.cacheKey===C){k=he,++k.usedTimes;break}}return k===void 0&&(k=new yT(r,C,w,c),x.push(k)),k}function N(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function z(w){m.remove(w)}function J(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:P,acquireProgram:G,releaseProgram:N,releaseShaderCache:z,programs:x,dispose:J}}function TT(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function l(d,h,m){r.get(d)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function AT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function iv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function av(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g,y,b,E,T,M){let v=r[e];return v===void 0?(v={id:g.id,object:g,geometry:y,material:b,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},r[e]=v):(v.id=g.id,v.object=g,v.geometry=y,v.material=b,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=T,v.group=M),e++,v}function h(g,y,b,E,T,M){const v=d(g,y,b,E,T,M);b.transmission>0?s.push(v):b.transparent===!0?l.push(v):i.push(v)}function m(g,y,b,E,T,M){const v=d(g,y,b,E,T,M);b.transmission>0?s.unshift(v):b.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,y){i.length>1&&i.sort(g||AT),s.length>1&&s.sort(y||iv),l.length>1&&l.sort(y||iv)}function x(){for(let g=e,y=r.length;g<y;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function RT(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new av,r.set(s,[d])):l>=c.length?(d=new av,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function CT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ce,color:new Pt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=i,i}}}function wT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let DT=0;function UT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function LT(r){const e=new CT,i=wT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ce);const l=new ce,c=new pn,d=new pn;function h(p){let x=0,g=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let b=0,E=0,T=0,M=0,v=0,U=0,L=0,P=0,G=0,N=0,z=0;p.sort(UT);for(let w=0,C=p.length;w<C;w++){const k=p[w],ne=k.color,ue=k.intensity,he=k.distance,me=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)x+=ne.r*ue,g+=ne.g*ue,y+=ne.b*ue;else if(k.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(k.sh.coefficients[F],ue);z++}else if(k.isDirectionalLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const K=k.shadow,Y=i.get(k);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.directionalShadow[b]=Y,s.directionalShadowMap[b]=me,s.directionalShadowMatrix[b]=k.shadow.matrix,U++}s.directional[b]=F,b++}else if(k.isSpotLight){const F=e.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(ne).multiplyScalar(ue),F.distance=he,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,s.spot[T]=F;const K=k.shadow;if(k.map&&(s.spotLightMap[G]=k.map,G++,K.updateMatrices(k),k.castShadow&&N++),s.spotLightMatrix[T]=K.matrix,k.castShadow){const Y=i.get(k);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,s.spotShadow[T]=Y,s.spotShadowMap[T]=me,P++}T++}else if(k.isRectAreaLight){const F=e.get(k);F.color.copy(ne).multiplyScalar(ue),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=F,M++}else if(k.isPointLight){const F=e.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity),F.distance=k.distance,F.decay=k.decay,k.castShadow){const K=k.shadow,Y=i.get(k);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=me,s.pointShadowMatrix[E]=k.shadow.matrix,L++}s.point[E]=F,E++}else if(k.isHemisphereLight){const F=e.get(k);F.skyColor.copy(k.color).multiplyScalar(ue),F.groundColor.copy(k.groundColor).multiplyScalar(ue),s.hemi[v]=F,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=y;const J=s.hash;(J.directionalLength!==b||J.pointLength!==E||J.spotLength!==T||J.rectAreaLength!==M||J.hemiLength!==v||J.numDirectionalShadows!==U||J.numPointShadows!==L||J.numSpotShadows!==P||J.numSpotMaps!==G||J.numLightProbes!==z)&&(s.directional.length=b,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+G-N,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=z,J.directionalLength=b,J.pointLength=E,J.spotLength=T,J.rectAreaLength=M,J.hemiLength=v,J.numDirectionalShadows=U,J.numPointShadows=L,J.numSpotShadows=P,J.numSpotMaps=G,J.numLightProbes=z,s.version=DT++)}function m(p,x){let g=0,y=0,b=0,E=0,T=0;const M=x.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const L=p[v];if(L.isDirectionalLight){const P=s.directional[g];P.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),g++}else if(L.isSpotLight){const P=s.spot[b];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),b++}else if(L.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(M),d.identity(),c.copy(L.matrixWorld),c.premultiply(M),d.extractRotation(c),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),E++}else if(L.isPointLight){const P=s.point[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(M),y++}else if(L.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:s}}function rv(r){const e=new LT(r),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function d(x){s.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function NT(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new rv(r),e.set(l,[h])):c>=d.length?(h=new rv(r),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const OT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zT(r,e,i){let s=new Xv;const l=new ct,c=new ct,d=new an,h=new r3({depthPacking:x1}),m=new s3,p={},x=i.maxTextureSize,g={[nr]:Wn,[Wn]:nr,[ha]:ha},y=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:OT,fragmentShader:PT}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const E=new Ii;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ri(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bv;let v=this.type;this.render=function(N,z,J){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending(ma),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ue=v!==da&&this.type===da,he=v===da&&this.type!==da;for(let me=0,F=N.length;me<F;me++){const K=N[me],Y=K.shadow;if(Y===void 0){ot("WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const ye=Y.getFrameExtents();if(l.multiply(ye),c.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ye.x),l.x=c.x*ye.x,Y.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ye.y),l.y=c.y*ye.y,Y.mapSize.y=c.y)),Y.map===null||ue===!0||he===!0){const O=this.type!==da?{minFilter:ri,magFilter:ri}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ir(l.x,l.y,O),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const Se=Y.getViewportCount();for(let O=0;O<Se;O++){const se=Y.getViewport(O);d.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),ne.viewport(d),Y.updateMatrices(K,O),s=Y.getFrustum(),P(z,J,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===da&&U(Y,J),Y.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(w,C,k)};function U(N,z){const J=e.update(T);y.defines.VSM_SAMPLES!==N.blurSamples&&(y.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ir(l.x,l.y)),y.uniforms.shadow_pass.value=N.map.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(z,null,J,y,T,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value=N.mapSize,b.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(z,null,J,b,T,null)}function L(N,z,J,w){let C=null;const k=J.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)C=k;else if(C=J.isPointLight===!0?m:h,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ne=C.uuid,ue=z.uuid;let he=p[ne];he===void 0&&(he={},p[ne]=he);let me=he[ue];me===void 0&&(me=C.clone(),he[ue]=me,z.addEventListener("dispose",G)),C=me}if(C.visible=z.visible,C.wireframe=z.wireframe,w===da?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:g[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,J.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ne=r.properties.get(C);ne.light=J}return C}function P(N,z,J,w,C){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===da)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,N.matrixWorld);const ue=e.update(N),he=N.material;if(Array.isArray(he)){const me=ue.groups;for(let F=0,K=me.length;F<K;F++){const Y=me[F],ye=he[Y.materialIndex];if(ye&&ye.visible){const Se=L(N,ye,w,C);N.onBeforeShadow(r,N,z,J,ue,Se,Y),r.renderBufferDirect(J,null,ue,Se,N,Y),N.onAfterShadow(r,N,z,J,ue,Se,Y)}}}else if(he.visible){const me=L(N,he,w,C);N.onBeforeShadow(r,N,z,J,ue,me,null),r.renderBufferDirect(J,null,ue,me,N,null),N.onAfterShadow(r,N,z,J,ue,me,null)}}const ne=N.children;for(let ue=0,he=ne.length;ue<he;ue++)P(ne[ue],z,J,w,C)}function G(N){N.target.removeEventListener("dispose",G);for(const J in p){const w=p[J],C=N.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const FT={[ch]:uh,[fh]:ph,[dh]:mh,[Us]:hh,[uh]:ch,[ph]:fh,[mh]:dh,[hh]:Us};function BT(r,e){function i(){let V=!1;const Le=new an;let we=null;const De=new an(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!V&&(r.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,_e,He,rt,Ht){Ht===!0&&(Ee*=rt,_e*=rt,He*=rt),Le.set(Ee,_e,He,rt),De.equals(Le)===!1&&(r.clearColor(Ee,_e,He,rt),De.copy(Le))},reset:function(){V=!1,we=null,De.set(-1,0,0,0)}}}function s(){let V=!1,Le=!1,we=null,De=null,Ee=null;return{setReversed:function(_e){if(Le!==_e){const He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Le=_e;const rt=Ee;Ee=null,this.setClear(rt)}},getReversed:function(){return Le},setTest:function(_e){_e?fe(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(_e){we!==_e&&!V&&(r.depthMask(_e),we=_e)},setFunc:function(_e){if(Le&&(_e=FT[_e]),De!==_e){switch(_e){case ch:r.depthFunc(r.NEVER);break;case uh:r.depthFunc(r.ALWAYS);break;case fh:r.depthFunc(r.LESS);break;case Us:r.depthFunc(r.LEQUAL);break;case dh:r.depthFunc(r.EQUAL);break;case hh:r.depthFunc(r.GEQUAL);break;case ph:r.depthFunc(r.GREATER);break;case mh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}De=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Ee!==_e&&(Le&&(_e=1-_e),r.clearDepth(_e),Ee=_e)},reset:function(){V=!1,we=null,De=null,Ee=null,Le=!1}}}function l(){let V=!1,Le=null,we=null,De=null,Ee=null,_e=null,He=null,rt=null,Ht=null;return{setTest:function(wt){V||(wt?fe(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(wt){Le!==wt&&!V&&(r.stencilMask(wt),Le=wt)},setFunc:function(wt,Dn,jn){(we!==wt||De!==Dn||Ee!==jn)&&(r.stencilFunc(wt,Dn,jn),we=wt,De=Dn,Ee=jn)},setOp:function(wt,Dn,jn){(_e!==wt||He!==Dn||rt!==jn)&&(r.stencilOp(wt,Dn,jn),_e=wt,He=Dn,rt=jn)},setLocked:function(wt){V=wt},setClear:function(wt){Ht!==wt&&(r.clearStencil(wt),Ht=wt)},reset:function(){V=!1,Le=null,we=null,De=null,Ee=null,_e=null,He=null,rt=null,Ht=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},y=new WeakMap,b=[],E=null,T=!1,M=null,v=null,U=null,L=null,P=null,G=null,N=null,z=new Pt(0,0,0),J=0,w=!1,C=null,k=null,ne=null,ue=null,he=null;const me=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,K=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=K>=2);let ye=null,Se={};const O=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),be=new an().fromArray(O),Ae=new an().fromArray(se);function Pe(V,Le,we,De){const Ee=new Uint8Array(4),_e=r.createTexture();r.bindTexture(V,_e),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<we;He++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(Le+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return _e}const re={};re[r.TEXTURE_2D]=Pe(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=Pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=Pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=Pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),fe(r.DEPTH_TEST),d.setFunc(Us),ft(!1),xt(og),fe(r.CULL_FACE),Rt(ma);function fe(V){x[V]!==!0&&(r.enable(V),x[V]=!0)}function Re(V){x[V]!==!1&&(r.disable(V),x[V]=!1)}function Ve(V,Le){return g[V]!==Le?(r.bindFramebuffer(V,Le),g[V]=Le,V===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Le),V===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function qe(V,Le){let we=b,De=!1;if(V){we=y.get(Le),we===void 0&&(we=[],y.set(Le,we));const Ee=V.textures;if(we.length!==Ee.length||we[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,He=Ee.length;_e<He;_e++)we[_e]=r.COLOR_ATTACHMENT0+_e;we.length=Ee.length,De=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,De=!0);De&&r.drawBuffers(we)}function lt(V){return E!==V?(r.useProgram(V),E=V,!0):!1}const Jt={[Dr]:r.FUNC_ADD,[Vb]:r.FUNC_SUBTRACT,[kb]:r.FUNC_REVERSE_SUBTRACT};Jt[Xb]=r.MIN,Jt[Wb]=r.MAX;const ut={[qb]:r.ZERO,[jb]:r.ONE,[Yb]:r.SRC_COLOR,[oh]:r.SRC_ALPHA,[e1]:r.SRC_ALPHA_SATURATE,[Jb]:r.DST_COLOR,[Kb]:r.DST_ALPHA,[Zb]:r.ONE_MINUS_SRC_COLOR,[lh]:r.ONE_MINUS_SRC_ALPHA,[$b]:r.ONE_MINUS_DST_COLOR,[Qb]:r.ONE_MINUS_DST_ALPHA,[t1]:r.CONSTANT_COLOR,[n1]:r.ONE_MINUS_CONSTANT_COLOR,[i1]:r.CONSTANT_ALPHA,[a1]:r.ONE_MINUS_CONSTANT_ALPHA};function Rt(V,Le,we,De,Ee,_e,He,rt,Ht,wt){if(V===ma){T===!0&&(Re(r.BLEND),T=!1);return}if(T===!1&&(fe(r.BLEND),T=!0),V!==Gb){if(V!==M||wt!==w){if((v!==Dr||P!==Dr)&&(r.blendEquation(r.FUNC_ADD),v=Dr,P=Dr),wt)switch(V){case ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sh:r.blendFunc(r.ONE,r.ONE);break;case lg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:on("WebGLState: Invalid blending: ",V);break}else switch(V){case ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case lg:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cg:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",V);break}U=null,L=null,G=null,N=null,z.set(0,0,0),J=0,M=V,w=wt}return}Ee=Ee||Le,_e=_e||we,He=He||De,(Le!==v||Ee!==P)&&(r.blendEquationSeparate(Jt[Le],Jt[Ee]),v=Le,P=Ee),(we!==U||De!==L||_e!==G||He!==N)&&(r.blendFuncSeparate(ut[we],ut[De],ut[_e],ut[He]),U=we,L=De,G=_e,N=He),(rt.equals(z)===!1||Ht!==J)&&(r.blendColor(rt.r,rt.g,rt.b,Ht),z.copy(rt),J=Ht),M=V,w=!1}function H(V,Le){V.side===ha?Re(r.CULL_FACE):fe(r.CULL_FACE);let we=V.side===Wn;Le&&(we=!we),ft(we),V.blending===ws&&V.transparent===!1?Rt(ma):Rt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const De=V.stencilWrite;h.setTest(De),De&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function ft(V){C!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),C=V)}function xt(V){V!==Bb?(fe(r.CULL_FACE),V!==k&&(V===og?r.cullFace(r.BACK):V===Ib?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),k=V}function vt(V){V!==ne&&(F&&r.lineWidth(V),ne=V)}function Ie(V,Le,we){V?(fe(r.POLYGON_OFFSET_FILL),(ue!==Le||he!==we)&&(r.polygonOffset(Le,we),ue=Le,he=we)):Re(r.POLYGON_OFFSET_FILL)}function It(V){V?fe(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function Ye(V){V===void 0&&(V=r.TEXTURE0+me-1),ye!==V&&(r.activeTexture(V),ye=V)}function it(V,Le,we){we===void 0&&(ye===null?we=r.TEXTURE0+me-1:we=ye);let De=Se[we];De===void 0&&(De={type:void 0,texture:void 0},Se[we]=De),(De.type!==V||De.texture!==Le)&&(ye!==we&&(r.activeTexture(we),ye=we),r.bindTexture(V,Le||re[V]),De.type=V,De.texture=Le)}function D(){const V=Se[ye];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function _(){try{r.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Q(){try{r.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function de(){try{r.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ie(){try{r.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ze(){try{r.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ue(){try{r.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ze(){try{r.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function We(){try{r.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Me(){try{r.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Te(V){be.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),be.copy(V))}function Ke(V){Ae.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ae.copy(V))}function Xe(V,Le){let we=p.get(Le);we===void 0&&(we=new WeakMap,p.set(Le,we));let De=we.get(V);De===void 0&&(De=r.getUniformBlockIndex(Le,V.name),we.set(V,De))}function Fe(V,Le){const De=p.get(Le).get(V);m.get(Le)!==De&&(r.uniformBlockBinding(Le,De,V.__bindingPointIndex),m.set(Le,De))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},ye=null,Se={},g={},y=new WeakMap,b=[],E=null,T=!1,M=null,v=null,U=null,L=null,P=null,G=null,N=null,z=new Pt(0,0,0),J=0,w=!1,C=null,k=null,ne=null,ue=null,he=null,be.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:fe,disable:Re,bindFramebuffer:Ve,drawBuffers:qe,useProgram:lt,setBlending:Rt,setMaterial:H,setFlipSided:ft,setCullFace:xt,setLineWidth:vt,setPolygonOffset:Ie,setScissorTest:It,activeTexture:Ye,bindTexture:it,unbindTexture:D,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:We,texImage3D:Me,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:Ue,texStorage3D:Ze,texSubImage2D:Q,texSubImage3D:de,compressedTexSubImage2D:ie,compressedTexSubImage3D:ze,scissor:Te,viewport:Ke,reset:at}}function IT(r,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,x=new WeakMap;let g;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,_){return b?new OffscreenCanvas(D,_):$c("canvas")}function T(D,_,I){let Q=1;const de=it(D);if((de.width>I||de.height>I)&&(Q=I/Math.max(de.width,de.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ie=Math.floor(Q*de.width),ze=Math.floor(Q*de.height);g===void 0&&(g=E(ie,ze));const Ue=_?E(ie,ze):g;return Ue.width=ie,Ue.height=ze,Ue.getContext("2d").drawImage(D,0,0,ie,ze),ot("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ie+"x"+ze+")."),Ue}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),D;return D}function M(D){return D.generateMipmaps}function v(D){r.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(D,_,I,Q,de=!1){if(D!==null){if(r[D]!==void 0)return r[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ie=_;if(_===r.RED&&(I===r.FLOAT&&(ie=r.R32F),I===r.HALF_FLOAT&&(ie=r.R16F),I===r.UNSIGNED_BYTE&&(ie=r.R8)),_===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(ie=r.R8UI),I===r.UNSIGNED_SHORT&&(ie=r.R16UI),I===r.UNSIGNED_INT&&(ie=r.R32UI),I===r.BYTE&&(ie=r.R8I),I===r.SHORT&&(ie=r.R16I),I===r.INT&&(ie=r.R32I)),_===r.RG&&(I===r.FLOAT&&(ie=r.RG32F),I===r.HALF_FLOAT&&(ie=r.RG16F),I===r.UNSIGNED_BYTE&&(ie=r.RG8)),_===r.RG_INTEGER&&(I===r.UNSIGNED_BYTE&&(ie=r.RG8UI),I===r.UNSIGNED_SHORT&&(ie=r.RG16UI),I===r.UNSIGNED_INT&&(ie=r.RG32UI),I===r.BYTE&&(ie=r.RG8I),I===r.SHORT&&(ie=r.RG16I),I===r.INT&&(ie=r.RG32I)),_===r.RGB_INTEGER&&(I===r.UNSIGNED_BYTE&&(ie=r.RGB8UI),I===r.UNSIGNED_SHORT&&(ie=r.RGB16UI),I===r.UNSIGNED_INT&&(ie=r.RGB32UI),I===r.BYTE&&(ie=r.RGB8I),I===r.SHORT&&(ie=r.RGB16I),I===r.INT&&(ie=r.RGB32I)),_===r.RGBA_INTEGER&&(I===r.UNSIGNED_BYTE&&(ie=r.RGBA8UI),I===r.UNSIGNED_SHORT&&(ie=r.RGBA16UI),I===r.UNSIGNED_INT&&(ie=r.RGBA32UI),I===r.BYTE&&(ie=r.RGBA8I),I===r.SHORT&&(ie=r.RGBA16I),I===r.INT&&(ie=r.RGBA32I)),_===r.RGB&&(I===r.UNSIGNED_INT_5_9_9_9_REV&&(ie=r.RGB9_E5),I===r.UNSIGNED_INT_10F_11F_11F_REV&&(ie=r.R11F_G11F_B10F)),_===r.RGBA){const ze=de?Qc:Nt.getTransfer(Q);I===r.FLOAT&&(ie=r.RGBA32F),I===r.HALF_FLOAT&&(ie=r.RGBA16F),I===r.UNSIGNED_BYTE&&(ie=ze===Xt?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function P(D,_){let I;return D?_===null||_===Or||_===Yo?I=r.DEPTH24_STENCIL8:_===Oi?I=r.DEPTH32F_STENCIL8:_===jo&&(I=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Or||_===Yo?I=r.DEPTH_COMPONENT24:_===Oi?I=r.DEPTH_COMPONENT32F:_===jo&&(I=r.DEPTH_COMPONENT16),I}function G(D,_){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==ri&&D.minFilter!==On?Math.log2(Math.max(_.width,_.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?_.mipmaps.length:1}function N(D){const _=D.target;_.removeEventListener("dispose",N),J(_),_.isVideoTexture&&x.delete(_)}function z(D){const _=D.target;_.removeEventListener("dispose",z),C(_)}function J(D){const _=s.get(D);if(_.__webglInit===void 0)return;const I=D.source,Q=y.get(I);if(Q){const de=Q[_.__cacheKey];de.usedTimes--,de.usedTimes===0&&w(D),Object.keys(Q).length===0&&y.delete(I)}s.remove(D)}function w(D){const _=s.get(D);r.deleteTexture(_.__webglTexture);const I=D.source,Q=y.get(I);delete Q[_.__cacheKey],d.memory.textures--}function C(D){const _=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let de=0;de<_.__webglFramebuffer[Q].length;de++)r.deleteFramebuffer(_.__webglFramebuffer[Q][de]);else r.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)r.deleteFramebuffer(_.__webglFramebuffer[Q]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=D.textures;for(let Q=0,de=I.length;Q<de;Q++){const ie=s.get(I[Q]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),d.memory.textures--),s.remove(I[Q])}s.remove(D)}let k=0;function ne(){k=0}function ue(){const D=k;return D>=l.maxTextures&&ot("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function he(D){const _=[];return _.push(D.wrapS),_.push(D.wrapT),_.push(D.wrapR||0),_.push(D.magFilter),_.push(D.minFilter),_.push(D.anisotropy),_.push(D.internalFormat),_.push(D.format),_.push(D.type),_.push(D.generateMipmaps),_.push(D.premultiplyAlpha),_.push(D.flipY),_.push(D.unpackAlignment),_.push(D.colorSpace),_.join()}function me(D,_){const I=s.get(D);if(D.isVideoTexture&&It(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&I.__version!==D.version){const Q=D.image;if(Q===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{re(I,D,_);return}}else D.isExternalTexture&&(I.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+_)}function F(D,_){const I=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&I.__version!==D.version){re(I,D,_);return}else D.isExternalTexture&&(I.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+_)}function K(D,_){const I=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&I.__version!==D.version){re(I,D,_);return}i.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+_)}function Y(D,_){const I=s.get(D);if(D.version>0&&I.__version!==D.version){fe(I,D,_);return}i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+_)}const ye={[vh]:r.REPEAT,[ai]:r.CLAMP_TO_EDGE,[_h]:r.MIRRORED_REPEAT},Se={[ri]:r.NEAREST,[p1]:r.NEAREST_MIPMAP_NEAREST,[_c]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Rd]:r.LINEAR_MIPMAP_NEAREST,[Lr]:r.LINEAR_MIPMAP_LINEAR},O={[_1]:r.NEVER,[T1]:r.ALWAYS,[y1]:r.LESS,[Lv]:r.LEQUAL,[S1]:r.EQUAL,[E1]:r.GEQUAL,[b1]:r.GREATER,[M1]:r.NOTEQUAL};function se(D,_){if(_.type===Oi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===On||_.magFilter===Rd||_.magFilter===_c||_.magFilter===Lr||_.minFilter===On||_.minFilter===Rd||_.minFilter===_c||_.minFilter===Lr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,ye[_.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,ye[_.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,ye[_.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Se[_.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Se[_.minFilter]),_.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,O[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ri||_.minFilter!==_c&&_.minFilter!==Lr||_.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||s.get(_).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,l.getMaxAnisotropy())),s.get(_).__currentAnisotropy=_.anisotropy}}}function be(D,_){let I=!1;D.__webglInit===void 0&&(D.__webglInit=!0,_.addEventListener("dispose",N));const Q=_.source;let de=y.get(Q);de===void 0&&(de={},y.set(Q,de));const ie=he(_);if(ie!==D.__cacheKey){de[ie]===void 0&&(de[ie]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,I=!0),de[ie].usedTimes++;const ze=de[D.__cacheKey];ze!==void 0&&(de[D.__cacheKey].usedTimes--,ze.usedTimes===0&&w(_)),D.__cacheKey=ie,D.__webglTexture=de[ie].texture}return I}function Ae(D,_,I){return Math.floor(Math.floor(D/I)/_)}function Pe(D,_,I,Q){const ie=D.updateRanges;if(ie.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,_.width,_.height,I,Q,_.data);else{ie.sort((Me,Te)=>Me.start-Te.start);let ze=0;for(let Me=1;Me<ie.length;Me++){const Te=ie[ze],Ke=ie[Me],Xe=Te.start+Te.count,Fe=Ae(Ke.start,_.width,4),at=Ae(Te.start,_.width,4);Ke.start<=Xe+1&&Fe===at&&Ae(Ke.start+Ke.count-1,_.width,4)===Fe?Te.count=Math.max(Te.count,Ke.start+Ke.count-Te.start):(++ze,ie[ze]=Ke)}ie.length=ze+1;const Ue=r.getParameter(r.UNPACK_ROW_LENGTH),Ze=r.getParameter(r.UNPACK_SKIP_PIXELS),We=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,_.width);for(let Me=0,Te=ie.length;Me<Te;Me++){const Ke=ie[Me],Xe=Math.floor(Ke.start/4),Fe=Math.ceil(Ke.count/4),at=Xe%_.width,V=Math.floor(Xe/_.width),Le=Fe,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,at),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,at,V,Le,we,I,Q,_.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,We)}}function re(D,_,I){let Q=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=r.TEXTURE_3D);const de=be(D,_),ie=_.source;i.bindTexture(Q,D.__webglTexture,r.TEXTURE0+I);const ze=s.get(ie);if(ie.version!==ze.__version||de===!0){i.activeTexture(r.TEXTURE0+I);const Ue=Nt.getPrimaries(Nt.workingColorSpace),Ze=_.colorSpace===$a?null:Nt.getPrimaries(_.colorSpace),We=_.colorSpace===$a||Ue===Ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Me=T(_.image,!1,l.maxTextureSize);Me=Ye(_,Me);const Te=c.convert(_.format,_.colorSpace),Ke=c.convert(_.type);let Xe=L(_.internalFormat,Te,Ke,_.colorSpace,_.isVideoTexture);se(Q,_);let Fe;const at=_.mipmaps,V=_.isVideoTexture!==!0,Le=ze.__version===void 0||de===!0,we=ie.dataReady,De=G(_,Me);if(_.isDepthTexture)Xe=P(_.format===Ko,_.type),Le&&(V?i.texStorage2D(r.TEXTURE_2D,1,Xe,Me.width,Me.height):i.texImage2D(r.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Te,Ke,null));else if(_.isDataTexture)if(at.length>0){V&&Le&&i.texStorage2D(r.TEXTURE_2D,De,Xe,at[0].width,at[0].height);for(let Ee=0,_e=at.length;Ee<_e;Ee++)Fe=at[Ee],V?we&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Te,Ke,Fe.data):i.texImage2D(r.TEXTURE_2D,Ee,Xe,Fe.width,Fe.height,0,Te,Ke,Fe.data);_.generateMipmaps=!1}else V?(Le&&i.texStorage2D(r.TEXTURE_2D,De,Xe,Me.width,Me.height),we&&Pe(_,Me,Te,Ke)):i.texImage2D(r.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Te,Ke,Me.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){V&&Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,De,Xe,at[0].width,at[0].height,Me.depth);for(let Ee=0,_e=at.length;Ee<_e;Ee++)if(Fe=at[Ee],_.format!==xi)if(Te!==null)if(V){if(we)if(_.layerUpdates.size>0){const He=zg(Fe.width,Fe.height,_.format,_.type);for(const rt of _.layerUpdates){const Ht=Fe.data.subarray(rt*He/Fe.data.BYTES_PER_ELEMENT,(rt+1)*He/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,rt,Fe.width,Fe.height,1,Te,Ht)}_.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,Me.depth,Te,Fe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,Xe,Fe.width,Fe.height,Me.depth,0,Fe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?we&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,Me.depth,Te,Ke,Fe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ee,Xe,Fe.width,Fe.height,Me.depth,0,Te,Ke,Fe.data)}else{V&&Le&&i.texStorage2D(r.TEXTURE_2D,De,Xe,at[0].width,at[0].height);for(let Ee=0,_e=at.length;Ee<_e;Ee++)Fe=at[Ee],_.format!==xi?Te!==null?V?we&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Te,Fe.data):i.compressedTexImage2D(r.TEXTURE_2D,Ee,Xe,Fe.width,Fe.height,0,Fe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?we&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Te,Ke,Fe.data):i.texImage2D(r.TEXTURE_2D,Ee,Xe,Fe.width,Fe.height,0,Te,Ke,Fe.data)}else if(_.isDataArrayTexture)if(V){if(Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,De,Xe,Me.width,Me.height,Me.depth),we)if(_.layerUpdates.size>0){const Ee=zg(Me.width,Me.height,_.format,_.type);for(const _e of _.layerUpdates){const He=Me.data.subarray(_e*Ee/Me.data.BYTES_PER_ELEMENT,(_e+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,Te,Ke,He)}_.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Te,Ke,Me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Xe,Me.width,Me.height,Me.depth,0,Te,Ke,Me.data);else if(_.isData3DTexture)V?(Le&&i.texStorage3D(r.TEXTURE_3D,De,Xe,Me.width,Me.height,Me.depth),we&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Te,Ke,Me.data)):i.texImage3D(r.TEXTURE_3D,0,Xe,Me.width,Me.height,Me.depth,0,Te,Ke,Me.data);else if(_.isFramebufferTexture){if(Le)if(V)i.texStorage2D(r.TEXTURE_2D,De,Xe,Me.width,Me.height);else{let Ee=Me.width,_e=Me.height;for(let He=0;He<De;He++)i.texImage2D(r.TEXTURE_2D,He,Xe,Ee,_e,0,Te,Ke,null),Ee>>=1,_e>>=1}}else if(at.length>0){if(V&&Le){const Ee=it(at[0]);i.texStorage2D(r.TEXTURE_2D,De,Xe,Ee.width,Ee.height)}for(let Ee=0,_e=at.length;Ee<_e;Ee++)Fe=at[Ee],V?we&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Te,Ke,Fe):i.texImage2D(r.TEXTURE_2D,Ee,Xe,Te,Ke,Fe);_.generateMipmaps=!1}else if(V){if(Le){const Ee=it(Me);i.texStorage2D(r.TEXTURE_2D,De,Xe,Ee.width,Ee.height)}we&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,Ke,Me)}else i.texImage2D(r.TEXTURE_2D,0,Xe,Te,Ke,Me);M(_)&&v(Q),ze.__version=ie.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function fe(D,_,I){if(_.image.length!==6)return;const Q=be(D,_),de=_.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+I);const ie=s.get(de);if(de.version!==ie.__version||Q===!0){i.activeTexture(r.TEXTURE0+I);const ze=Nt.getPrimaries(Nt.workingColorSpace),Ue=_.colorSpace===$a?null:Nt.getPrimaries(_.colorSpace),Ze=_.colorSpace===$a||ze===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const We=_.isCompressedTexture||_.image[0].isCompressedTexture,Me=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let _e=0;_e<6;_e++)!We&&!Me?Te[_e]=T(_.image[_e],!0,l.maxCubemapSize):Te[_e]=Me?_.image[_e].image:_.image[_e],Te[_e]=Ye(_,Te[_e]);const Ke=Te[0],Xe=c.convert(_.format,_.colorSpace),Fe=c.convert(_.type),at=L(_.internalFormat,Xe,Fe,_.colorSpace),V=_.isVideoTexture!==!0,Le=ie.__version===void 0||Q===!0,we=de.dataReady;let De=G(_,Ke);se(r.TEXTURE_CUBE_MAP,_);let Ee;if(We){V&&Le&&i.texStorage2D(r.TEXTURE_CUBE_MAP,De,at,Ke.width,Ke.height);for(let _e=0;_e<6;_e++){Ee=Te[_e].mipmaps;for(let He=0;He<Ee.length;He++){const rt=Ee[He];_.format!==xi?Xe!==null?V?we&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,rt.width,rt.height,Xe,rt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,at,rt.width,rt.height,0,rt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,rt.width,rt.height,Xe,Fe,rt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,at,rt.width,rt.height,0,Xe,Fe,rt.data)}}}else{if(Ee=_.mipmaps,V&&Le){Ee.length>0&&De++;const _e=it(Te[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,De,at,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Me){V?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Te[_e].width,Te[_e].height,Xe,Fe,Te[_e].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Te[_e].width,Te[_e].height,0,Xe,Fe,Te[_e].data);for(let He=0;He<Ee.length;He++){const Ht=Ee[He].image[_e].image;V?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,Ht.width,Ht.height,Xe,Fe,Ht.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,at,Ht.width,Ht.height,0,Xe,Fe,Ht.data)}}else{V?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Xe,Fe,Te[_e]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Xe,Fe,Te[_e]);for(let He=0;He<Ee.length;He++){const rt=Ee[He];V?we&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,Xe,Fe,rt.image[_e]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,at,Xe,Fe,rt.image[_e])}}}M(_)&&v(r.TEXTURE_CUBE_MAP),ie.__version=de.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function Re(D,_,I,Q,de,ie){const ze=c.convert(I.format,I.colorSpace),Ue=c.convert(I.type),Ze=L(I.internalFormat,ze,Ue,I.colorSpace),We=s.get(_),Me=s.get(I);if(Me.__renderTarget=_,!We.__hasExternalTextures){const Te=Math.max(1,_.width>>ie),Ke=Math.max(1,_.height>>ie);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?i.texImage3D(de,ie,Ze,Te,Ke,_.depth,0,ze,Ue,null):i.texImage2D(de,ie,Ze,Te,Ke,0,ze,Ue,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),Ie(_)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,de,Me.__webglTexture,0,vt(_)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,de,Me.__webglTexture,ie),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(D,_,I){if(r.bindRenderbuffer(r.RENDERBUFFER,D),_.depthBuffer){const Q=_.depthTexture,de=Q&&Q.isDepthTexture?Q.type:null,ie=P(_.stencilBuffer,de),ze=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=vt(_);Ie(_)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ue,ie,_.width,_.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,ie,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,ie,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ze,r.RENDERBUFFER,D)}else{const Q=_.textures;for(let de=0;de<Q.length;de++){const ie=Q[de],ze=c.convert(ie.format,ie.colorSpace),Ue=c.convert(ie.type),Ze=L(ie.internalFormat,ze,Ue,ie.colorSpace),We=vt(_);I&&Ie(_)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,We,Ze,_.width,_.height):Ie(_)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We,Ze,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,Ze,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(D,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=s.get(_.depthTexture);Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),me(_.depthTexture,0);const de=Q.__webglTexture,ie=vt(_);if(_.depthTexture.format===Zo)Ie(_)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,de,0);else if(_.depthTexture.format===Ko)Ie(_)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function lt(D){const _=s.get(D),I=D.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==D.depthTexture){const Q=D.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const de=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",de)};Q.addEventListener("dispose",de),_.__depthDisposeCallback=de}_.__boundDepthTexture=Q}if(D.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const Q=D.texture.mipmaps;Q&&Q.length>0?qe(_.__webglFramebuffer[0],D):qe(_.__webglFramebuffer,D)}else if(I){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(i.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=r.createRenderbuffer(),Ve(_.__webglDepthbuffer[Q],D,!1);else{const de=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,ie)}}else{const Q=D.texture.mipmaps;if(Q&&Q.length>0?i.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),Ve(_.__webglDepthbuffer,D,!1);else{const de=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,de,r.RENDERBUFFER,ie)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(D,_,I){const Q=s.get(D);_!==void 0&&Re(Q.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&lt(D)}function ut(D){const _=D.texture,I=s.get(D),Q=s.get(_);D.addEventListener("dispose",z);const de=D.textures,ie=D.isWebGLCubeRenderTarget===!0,ze=de.length>1;if(ze||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=_.version,d.memory.textures++),ie){I.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[Ue]=[];for(let Ze=0;Ze<_.mipmaps.length;Ze++)I.__webglFramebuffer[Ue][Ze]=r.createFramebuffer()}else I.__webglFramebuffer[Ue]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let Ue=0;Ue<_.mipmaps.length;Ue++)I.__webglFramebuffer[Ue]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(ze)for(let Ue=0,Ze=de.length;Ue<Ze;Ue++){const We=s.get(de[Ue]);We.__webglTexture===void 0&&(We.__webglTexture=r.createTexture(),d.memory.textures++)}if(D.samples>0&&Ie(D)===!1){I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Ue=0;Ue<de.length;Ue++){const Ze=de[Ue];I.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[Ue]);const We=c.convert(Ze.format,Ze.colorSpace),Me=c.convert(Ze.type),Te=L(Ze.internalFormat,We,Me,Ze.colorSpace,D.isXRRenderTarget===!0),Ke=vt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Te,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,I.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(I.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){i.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),se(r.TEXTURE_CUBE_MAP,_);for(let Ue=0;Ue<6;Ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ze=0;Ze<_.mipmaps.length;Ze++)Re(I.__webglFramebuffer[Ue][Ze],D,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ze);else Re(I.__webglFramebuffer[Ue],D,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);M(_)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ze){for(let Ue=0,Ze=de.length;Ue<Ze;Ue++){const We=de[Ue],Me=s.get(We);let Te=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Te,Me.__webglTexture),se(Te,We),Re(I.__webglFramebuffer,D,We,r.COLOR_ATTACHMENT0+Ue,Te,0),M(We)&&v(Te)}i.unbindTexture()}else{let Ue=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Q.__webglTexture),se(Ue,_),_.mipmaps&&_.mipmaps.length>0)for(let Ze=0;Ze<_.mipmaps.length;Ze++)Re(I.__webglFramebuffer[Ze],D,_,r.COLOR_ATTACHMENT0,Ue,Ze);else Re(I.__webglFramebuffer,D,_,r.COLOR_ATTACHMENT0,Ue,0);M(_)&&v(Ue),i.unbindTexture()}D.depthBuffer&&lt(D)}function Rt(D){const _=D.textures;for(let I=0,Q=_.length;I<Q;I++){const de=_[I];if(M(de)){const ie=U(D),ze=s.get(de).__webglTexture;i.bindTexture(ie,ze),v(ie),i.unbindTexture()}}}const H=[],ft=[];function xt(D){if(D.samples>0){if(Ie(D)===!1){const _=D.textures,I=D.width,Q=D.height;let de=r.COLOR_BUFFER_BIT;const ie=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=s.get(D),Ue=_.length>1;if(Ue)for(let We=0;We<_.length;We++)i.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+We,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+We,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Ze=D.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let We=0;We<_.length;We++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),Ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ze.__webglColorRenderbuffer[We]);const Me=s.get(_[We]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,I,Q,0,0,I,Q,de,r.NEAREST),m===!0&&(H.length=0,ft.length=0,H.push(r.COLOR_ATTACHMENT0+We),D.depthBuffer&&D.resolveDepthBuffer===!1&&(H.push(ie),ft.push(ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ft)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let We=0;We<_.length;We++){i.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+We,r.RENDERBUFFER,ze.__webglColorRenderbuffer[We]);const Me=s.get(_[We]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+We,r.TEXTURE_2D,Me,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const _=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function vt(D){return Math.min(l.maxSamples,D.samples)}function Ie(D){const _=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function It(D){const _=d.render.frame;x.get(D)!==_&&(x.set(D,_),D.update())}function Ye(D,_){const I=D.colorSpace,Q=D.format,de=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||I!==Os&&I!==$a&&(Nt.getTransfer(I)===Xt?(Q!==xi||de!==_a)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",I)),_}function it(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=ne,this.setTexture2D=me,this.setTexture2DArray=F,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Jt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ie}function HT(r,e){function i(s,l=$a){let c;const d=Nt.getTransfer(l);if(s===_a)return r.UNSIGNED_BYTE;if(s===ip)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ap)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Rv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Cv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Tv)return r.BYTE;if(s===Av)return r.SHORT;if(s===jo)return r.UNSIGNED_SHORT;if(s===np)return r.INT;if(s===Or)return r.UNSIGNED_INT;if(s===Oi)return r.FLOAT;if(s===zr)return r.HALF_FLOAT;if(s===wv)return r.ALPHA;if(s===Dv)return r.RGB;if(s===xi)return r.RGBA;if(s===Zo)return r.DEPTH_COMPONENT;if(s===Ko)return r.DEPTH_STENCIL;if(s===Uv)return r.RED;if(s===rp)return r.RED_INTEGER;if(s===sp)return r.RG;if(s===op)return r.RG_INTEGER;if(s===lp)return r.RGBA_INTEGER;if(s===Wc||s===qc||s===jc||s===Yc)if(d===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yh||s===Sh||s===bh||s===Mh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eh||s===Th||s===Ah)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Eh||s===Th)return d===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ah)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rh||s===Ch||s===wh||s===Dh||s===Uh||s===Lh||s===Nh||s===Oh||s===Ph||s===zh||s===Fh||s===Bh||s===Ih||s===Hh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Rh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ch)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Uh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ph)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ih)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gh||s===Vh||s===kh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Gh)return d===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xh||s===Wh||s===qh||s===jh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Xh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Wh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new qv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Fi({vertexShader:GT,fragmentShader:VT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Nr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XT extends Is{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,x=null,g=null,y=null,b=null,E=null;const T=typeof XRWebGLBinding<"u",M=new kT,v={},U=i.getContextAttributes();let L=null,P=null;const G=[],N=[],z=new ct;let J=null;const w=new Ei;w.viewport=new an;const C=new Ei;C.viewport=new an;const k=[w,C],ne=new l3;let ue=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let fe=G[re];return fe===void 0&&(fe=new Kd,G[re]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(re){let fe=G[re];return fe===void 0&&(fe=new Kd,G[re]=fe),fe.getGripSpace()},this.getHand=function(re){let fe=G[re];return fe===void 0&&(fe=new Kd,G[re]=fe),fe.getHandSpace()};function me(re){const fe=N.indexOf(re.inputSource);if(fe===-1)return;const Re=G[fe];Re!==void 0&&(Re.update(re.inputSource,re.frame,p||d),Re.dispatchEvent({type:re.type,data:re.inputSource}))}function F(){l.removeEventListener("select",me),l.removeEventListener("selectstart",me),l.removeEventListener("selectend",me),l.removeEventListener("squeeze",me),l.removeEventListener("squeezestart",me),l.removeEventListener("squeezeend",me),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",K);for(let re=0;re<G.length;re++){const fe=N[re];fe!==null&&(N[re]=null,G[re].disconnect(fe))}ue=null,he=null,M.reset();for(const re in v)delete v[re];e.setRenderTarget(L),b=null,y=null,g=null,l=null,P=null,Pe.stop(),s.isPresenting=!1,e.setPixelRatio(J),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){h=re,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(re){if(l=re,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",me),l.addEventListener("selectstart",me),l.addEventListener("selectend",me),l.addEventListener("squeeze",me),l.addEventListener("squeezestart",me),l.addEventListener("squeezeend",me),l.addEventListener("end",F),l.addEventListener("inputsourceschange",K),U.xrCompatible!==!0&&await i.makeXRCompatible(),J=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ve=null,qe=null;U.depth&&(qe=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=U.stencil?Ko:Zo,Ve=U.stencil?Yo:Or);const lt={colorFormat:i.RGBA8,depthFormat:qe,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(lt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new ir(y.textureWidth,y.textureHeight,{format:xi,type:_a,depthTexture:new Wv(y.textureWidth,y.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Re={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),P=new ir(b.framebufferWidth,b.framebufferHeight,{format:xi,type:_a,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Pe.setContext(l),Pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(re){for(let fe=0;fe<re.removed.length;fe++){const Re=re.removed[fe],Ve=N.indexOf(Re);Ve>=0&&(N[Ve]=null,G[Ve].disconnect(Re))}for(let fe=0;fe<re.added.length;fe++){const Re=re.added[fe];let Ve=N.indexOf(Re);if(Ve===-1){for(let lt=0;lt<G.length;lt++)if(lt>=N.length){N.push(Re),Ve=lt;break}else if(N[lt]===null){N[lt]=Re,Ve=lt;break}if(Ve===-1)break}const qe=G[Ve];qe&&qe.connect(Re)}}const Y=new ce,ye=new ce;function Se(re,fe,Re){Y.setFromMatrixPosition(fe.matrixWorld),ye.setFromMatrixPosition(Re.matrixWorld);const Ve=Y.distanceTo(ye),qe=fe.projectionMatrix.elements,lt=Re.projectionMatrix.elements,Jt=qe[14]/(qe[10]-1),ut=qe[14]/(qe[10]+1),Rt=(qe[9]+1)/qe[5],H=(qe[9]-1)/qe[5],ft=(qe[8]-1)/qe[0],xt=(lt[8]+1)/lt[0],vt=Jt*ft,Ie=Jt*xt,It=Ve/(-ft+xt),Ye=It*-ft;if(fe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Ye),re.translateZ(It),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),qe[10]===-1)re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const it=Jt+It,D=ut+It,_=vt-Ye,I=Ie+(Ve-Ye),Q=Rt*ut/D*it,de=H*ut/D*it;re.projectionMatrix.makePerspective(_,I,Q,de,it,D),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function O(re,fe){fe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(fe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(l===null)return;let fe=re.near,Re=re.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Re=M.depthFar)),ne.near=C.near=w.near=fe,ne.far=C.far=w.far=Re,(ue!==ne.near||he!==ne.far)&&(l.updateRenderState({depthNear:ne.near,depthFar:ne.far}),ue=ne.near,he=ne.far),ne.layers.mask=re.layers.mask|6,w.layers.mask=ne.layers.mask&3,C.layers.mask=ne.layers.mask&5;const Ve=re.parent,qe=ne.cameras;O(ne,Ve);for(let lt=0;lt<qe.length;lt++)O(qe[lt],Ve);qe.length===2?Se(ne,w,C):ne.projectionMatrix.copy(w.projectionMatrix),se(re,ne,Ve)};function se(re,fe,Re){Re===null?re.matrix.copy(fe.matrixWorld):(re.matrix.copy(Re.matrixWorld),re.matrix.invert(),re.matrix.multiply(fe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Yh*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(y===null&&b===null))return m},this.setFoveation=function(re){m=re,y!==null&&(y.fixedFoveation=re),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ne)},this.getCameraTexture=function(re){return v[re]};let be=null;function Ae(re,fe){if(x=fe.getViewerPose(p||d),E=fe,x!==null){const Re=x.views;b!==null&&(e.setRenderTargetFramebuffer(P,b.framebuffer),e.setRenderTarget(P));let Ve=!1;Re.length!==ne.cameras.length&&(ne.cameras.length=0,Ve=!0);for(let ut=0;ut<Re.length;ut++){const Rt=Re[ut];let H=null;if(b!==null)H=b.getViewport(Rt);else{const xt=g.getViewSubImage(y,Rt);H=xt.viewport,ut===0&&(e.setRenderTargetTextures(P,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(P))}let ft=k[ut];ft===void 0&&(ft=new Ei,ft.layers.enable(ut),ft.viewport=new an,k[ut]=ft),ft.matrix.fromArray(Rt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Rt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(H.x,H.y,H.width,H.height),ut===0&&(ne.matrix.copy(ft.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ve===!0&&ne.cameras.push(ft)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const ut=g.getDepthInformation(Re[0]);ut&&ut.isValid&&ut.texture&&M.init(ut,l.renderState)}if(qe&&qe.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let ut=0;ut<Re.length;ut++){const Rt=Re[ut].camera;if(Rt){let H=v[Rt];H||(H=new qv,v[Rt]=H);const ft=g.getCameraImage(Rt);H.sourceTexture=ft}}}}for(let Re=0;Re<G.length;Re++){const Ve=N[Re],qe=G[Re];Ve!==null&&qe!==void 0&&qe.update(Ve,fe,p||d)}be&&be(re,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Pe=new jv;Pe.setAnimationLoop(Ae),this.setAnimationLoop=function(re){be=re},this.dispose=function(){}}}const Cr=new ya,WT=new pn;function qT(r,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Gv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,U,L,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),x(M,v)):v.isMeshStandardMaterial?(c(M,v),y(M,v),v.isMeshPhysicalMaterial&&b(M,v,P)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,U,L):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Wn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Wn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const U=e.get(v),L=U.envMap,P=U.envMapRotation;L&&(M.envMap.value=L,Cr.copy(P),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),M.envMapRotation.value.setFromMatrix4(WT.makeRotationFromEuler(Cr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,U,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*U,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function x(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function b(M,v,U){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const U=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function jT(r,e,i,s){let l={},c={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const P=L.program;s.uniformBlockBinding(U,P)}function p(U,L){let P=l[U.id];P===void 0&&(E(U),P=x(U),l[U.id]=P,U.addEventListener("dispose",M));const G=L.program;s.updateUBOMapping(U,G);const N=e.render.frame;c[U.id]!==N&&(y(U),c[U.id]=N)}function x(U){const L=g();U.__bindingPointIndex=L;const P=r.createBuffer(),G=U.__size,N=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,G,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,P),P}function g(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=l[U.id],P=U.uniforms,G=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,z=P.length;N<z;N++){const J=Array.isArray(P[N])?P[N]:[P[N]];for(let w=0,C=J.length;w<C;w++){const k=J[w];if(b(k,N,w,G)===!0){const ne=k.__offset,ue=Array.isArray(k.value)?k.value:[k.value];let he=0;for(let me=0;me<ue.length;me++){const F=ue[me],K=T(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,ne+he,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,he),he+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(U,L,P,G){const N=U.value,z=L+"_"+P;if(G[z]===void 0)return typeof N=="number"||typeof N=="boolean"?G[z]=N:G[z]=N.clone(),!0;{const J=G[z];if(typeof N=="number"||typeof N=="boolean"){if(J!==N)return G[z]=N,!0}else if(J.equals(N)===!1)return J.copy(N),!0}return!1}function E(U){const L=U.uniforms;let P=0;const G=16;for(let z=0,J=L.length;z<J;z++){const w=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,k=w.length;C<k;C++){const ne=w[C],ue=Array.isArray(ne.value)?ne.value:[ne.value];for(let he=0,me=ue.length;he<me;he++){const F=ue[he],K=T(F),Y=P%G,ye=Y%K.boundary,Se=Y+ye;P+=ye,Se!==0&&G-Se<K.storage&&(P+=G-Se),ne.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=P,P+=K.storage}}}const N=P%G;return N>0&&(P+=G-N),U.__size=P,U.__cache={},this}function T(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",U),L}function M(U){const L=U.target;L.removeEventListener("dispose",M);const P=d.indexOf(L.__bindingPointIndex);d.splice(P,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const U in l)r.deleteBuffer(l[U]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}const YT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let fa=null;function ZT(){return fa===null&&(fa=new kv(YT,32,32,sp,zr),fa.minFilter=On,fa.magFilter=On,fa.wrapS=ai,fa.wrapT=ai,fa.generateMipmaps=!1,fa.needsUpdate=!0),fa}class KT{constructor(e={}){const{canvas:i=A1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const E=new Set([lp,op,rp]),T=new Set([_a,Or,jo,Yo,ip,ap]),M=new Uint32Array(4),v=new Int32Array(4);let U=null,L=null;const P=[],G=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let z=!1;this._outputColorSpace=mi;let J=0,w=0,C=null,k=-1,ne=null;const ue=new an,he=new an;let me=null;const F=new Pt(0);let K=0,Y=i.width,ye=i.height,Se=1,O=null,se=null;const be=new an(0,0,Y,ye),Ae=new an(0,0,Y,ye);let Pe=!1;const re=new Xv;let fe=!1,Re=!1;const Ve=new pn,qe=new ce,lt=new an,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Rt(){return C===null?Se:1}let H=s;function ft(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${tp}`),i.addEventListener("webglcontextlost",Ee,!1),i.addEventListener("webglcontextrestored",_e,!1),i.addEventListener("webglcontextcreationerror",He,!1),H===null){const q="webgl2";if(H=ft(q,R),H===null)throw ft(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let xt,vt,Ie,It,Ye,it,D,_,I,Q,de,ie,ze,Ue,Ze,We,Me,Te,Ke,Xe,Fe,at,V,Le;function we(){xt=new aE(H),xt.init(),at=new HT(H,xt),vt=new Z2(H,xt,e,at),Ie=new BT(H,xt),vt.reversedDepthBuffer&&y&&Ie.buffers.depth.setReversed(!0),It=new oE(H),Ye=new TT,it=new IT(H,xt,Ie,Ye,vt,at,It),D=new Q2(N),_=new iE(N),I=new f3(H),V=new j2(H,I),Q=new rE(H,I,It,V),de=new cE(H,Q,I,It),Ke=new lE(H,vt,it),We=new K2(Ye),ie=new ET(N,D,_,xt,vt,V,We),ze=new qT(N,Ye),Ue=new RT,Ze=new NT(xt),Te=new q2(N,D,_,Ie,de,b,m),Me=new zT(N,de,vt),Le=new jT(H,It,vt,Ie),Xe=new Y2(H,xt,It),Fe=new sE(H,xt,It),It.programs=ie.programs,N.capabilities=vt,N.extensions=xt,N.properties=Ye,N.renderLists=Ue,N.shadowMap=Me,N.state=Ie,N.info=It}we();const De=new XT(N,H);this.xr=De,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(R){R!==void 0&&(Se=R,this.setSize(Y,ye,!1))},this.getSize=function(R){return R.set(Y,ye)},this.setSize=function(R,q,oe=!0){if(De.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,ye=q,i.width=Math.floor(R*Se),i.height=Math.floor(q*Se),oe===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(Y*Se,ye*Se).floor()},this.setDrawingBufferSize=function(R,q,oe){Y=R,ye=q,Se=oe,i.width=Math.floor(R*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(ue)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,q,oe,te){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,q,oe,te),Ie.viewport(ue.copy(be).multiplyScalar(Se).round())},this.getScissor=function(R){return R.copy(Ae)},this.setScissor=function(R,q,oe,te){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,q,oe,te),Ie.scissor(he.copy(Ae).multiplyScalar(Se).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){Ie.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,oe=!0){let te=0;if(R){let Z=!1;if(C!==null){const Ce=C.texture.format;Z=E.has(Ce)}if(Z){const Ce=C.texture.type,Ne=T.has(Ce),Be=Te.getClearColor(),Ge=Te.getClearAlpha(),et=Be.r,nt=Be.g,Qe=Be.b;Ne?(M[0]=et,M[1]=nt,M[2]=Qe,M[3]=Ge,H.clearBufferuiv(H.COLOR,0,M)):(v[0]=et,v[1]=nt,v[2]=Qe,v[3]=Ge,H.clearBufferiv(H.COLOR,0,v))}else te|=H.COLOR_BUFFER_BIT}q&&(te|=H.DEPTH_BUFFER_BIT),oe&&(te|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ee,!1),i.removeEventListener("webglcontextrestored",_e,!1),i.removeEventListener("webglcontextcreationerror",He,!1),Te.dispose(),Ue.dispose(),Ze.dispose(),Ye.dispose(),D.dispose(),_.dispose(),de.dispose(),V.dispose(),Le.dispose(),ie.dispose(),De.dispose(),De.removeEventListener("sessionstart",Gs),De.removeEventListener("sessionend",Vs),gi.stop()};function Ee(R){R.preventDefault(),pg("WebGLRenderer: Context Lost."),z=!0}function _e(){pg("WebGLRenderer: Context Restored."),z=!1;const R=It.autoReset,q=Me.enabled,oe=Me.autoUpdate,te=Me.needsUpdate,Z=Me.type;we(),It.autoReset=R,Me.enabled=q,Me.autoUpdate=oe,Me.needsUpdate=te,Me.type=Z}function He(R){on("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const q=R.target;q.removeEventListener("dispose",rt),Ht(q)}function Ht(R){wt(R),Ye.remove(R)}function wt(R){const q=Ye.get(R).programs;q!==void 0&&(q.forEach(function(oe){ie.releaseProgram(oe)}),R.isShaderMaterial&&ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,oe,te,Z,Ce){q===null&&(q=Jt);const Ne=Z.isMesh&&Z.matrixWorld.determinant()<0,Be=uu(R,q,oe,te,Z);Ie.setMaterial(te,Ne);let Ge=oe.index,et=1;if(te.wireframe===!0){if(Ge=Q.getWireframeAttribute(oe),Ge===void 0)return;et=2}const nt=oe.drawRange,Qe=oe.attributes.position;let ht=nt.start*et,Ct=(nt.start+nt.count)*et;Ce!==null&&(ht=Math.max(ht,Ce.start*et),Ct=Math.min(Ct,(Ce.start+Ce.count)*et)),Ge!==null?(ht=Math.max(ht,0),Ct=Math.min(Ct,Ge.count)):Qe!=null&&(ht=Math.max(ht,0),Ct=Math.min(Ct,Qe.count));const Dt=Ct-ht;if(Dt<0||Dt===1/0)return;V.setup(Z,te,Be,oe,Ge);let Mt,zt=Xe;if(Ge!==null&&(Mt=I.get(Ge),zt=Fe,zt.setIndex(Mt)),Z.isMesh)te.wireframe===!0?(Ie.setLineWidth(te.wireframeLinewidth*Rt()),zt.setMode(H.LINES)):zt.setMode(H.TRIANGLES);else if(Z.isLine){let $e=te.linewidth;$e===void 0&&($e=1),Ie.setLineWidth($e*Rt()),Z.isLineSegments?zt.setMode(H.LINES):Z.isLineLoop?zt.setMode(H.LINE_LOOP):zt.setMode(H.LINE_STRIP)}else Z.isPoints?zt.setMode(H.POINTS):Z.isSprite&&zt.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))zt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const $e=Z._multiDrawStarts,Wt=Z._multiDrawCounts,Et=Z._multiDrawCount,yn=Ge?I.get(Ge).bytesPerElement:1,Ma=Ye.get(te).currentProgram.getUniforms();for(let jt=0;jt<Et;jt++)Ma.setValue(H,"_gl_DrawID",jt),zt.render($e[jt]/yn,Wt[jt])}else if(Z.isInstancedMesh)zt.renderInstances(ht,Dt,Z.count);else if(oe.isInstancedBufferGeometry){const $e=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Wt=Math.min(oe.instanceCount,$e);zt.renderInstances(ht,Dt,Wt)}else zt.render(ht,Dt)};function Dn(R,q,oe){R.transparent===!0&&R.side===ha&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,mn(R,q,oe),R.side=nr,R.needsUpdate=!0,mn(R,q,oe),R.side=ha):mn(R,q,oe)}this.compile=function(R,q,oe=null){oe===null&&(oe=R),L=Ze.get(oe),L.init(q),G.push(L),oe.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),R!==oe&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),L.setupLights();const te=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ce=Z.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const Be=Ce[Ne];Dn(Be,oe,Z),te.add(Be)}else Dn(Ce,oe,Z),te.add(Ce)}),L=G.pop(),te},this.compileAsync=function(R,q,oe=null){const te=this.compile(R,q,oe);return new Promise(Z=>{function Ce(){if(te.forEach(function(Ne){Ye.get(Ne).currentProgram.isReady()&&te.delete(Ne)}),te.size===0){Z(R);return}setTimeout(Ce,10)}xt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let jn=null;function ol(R){jn&&jn(R)}function Gs(){gi.stop()}function Vs(){gi.start()}const gi=new jv;gi.setAnimationLoop(ol),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(R){jn=R,De.setAnimationLoop(R),R===null?gi.stop():gi.start()},De.addEventListener("sessionstart",Gs),De.addEventListener("sessionend",Vs),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(q),q=De.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,q,C),L=Ze.get(R,G.length),L.init(q),G.push(L),Ve.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),re.setFromProjectionMatrix(Ve,Pi,q.reversedDepth),Re=this.localClippingEnabled,fe=We.init(this.clippingPlanes,Re),U=Ue.get(R,P.length),U.init(),P.push(U),De.enabled===!0&&De.isPresenting===!0){const Ce=N.xr.getDepthSensingMesh();Ce!==null&&rr(Ce,q,-1/0,N.sortObjects)}rr(R,q,0,N.sortObjects),U.finish(),N.sortObjects===!0&&U.sort(O,se),ut=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ut&&Te.addToRenderList(U,R),this.info.render.frame++,fe===!0&&We.beginShadows();const oe=L.state.shadowsArray;Me.render(oe,R,q),fe===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=U.opaque,Z=U.transmissive;if(L.setupLights(),q.isArrayCamera){const Ce=q.cameras;if(Z.length>0)for(let Ne=0,Be=Ce.length;Ne<Be;Ne++){const Ge=Ce[Ne];Xs(te,Z,R,Ge)}ut&&Te.render(R);for(let Ne=0,Be=Ce.length;Ne<Be;Ne++){const Ge=Ce[Ne];ks(U,R,Ge,Ge.viewport)}}else Z.length>0&&Xs(te,Z,R,q),ut&&Te.render(R),ks(U,R,q);C!==null&&w===0&&(it.updateMultisampleRenderTarget(C),it.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(N,R,q),V.resetDefaultState(),k=-1,ne=null,G.pop(),G.length>0?(L=G[G.length-1],fe===!0&&We.setGlobalState(N.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?U=P[P.length-1]:U=null};function rr(R,q,oe,te){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){te&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ve);const Ne=de.update(R),Be=R.material;Be.visible&&U.push(R,Ne,Be,oe,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||re.intersectsObject(R))){const Ne=de.update(R),Be=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),lt.copy(Ne.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(Ve)),Array.isArray(Be)){const Ge=Ne.groups;for(let et=0,nt=Ge.length;et<nt;et++){const Qe=Ge[et],ht=Be[Qe.materialIndex];ht&&ht.visible&&U.push(R,Ne,ht,oe,lt.z,Qe)}}else Be.visible&&U.push(R,Ne,Be,oe,lt.z,null)}}const Ce=R.children;for(let Ne=0,Be=Ce.length;Ne<Be;Ne++)rr(Ce[Ne],q,oe,te)}function ks(R,q,oe,te){const{opaque:Z,transmissive:Ce,transparent:Ne}=R;L.setupLightsView(oe),fe===!0&&We.setGlobalState(N.clippingPlanes,oe),te&&Ie.viewport(ue.copy(te)),Z.length>0&&Yn(Z,q,oe),Ce.length>0&&Yn(Ce,q,oe),Ne.length>0&&Yn(Ne,q,oe),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Xs(R,q,oe,te){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[te.id]===void 0&&(L.state.transmissionRenderTarget[te.id]=new ir(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?zr:_a,minFilter:Lr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Ce=L.state.transmissionRenderTarget[te.id],Ne=te.viewport||ue;Ce.setSize(Ne.z*N.transmissionResolutionScale,Ne.w*N.transmissionResolutionScale);const Be=N.getRenderTarget(),Ge=N.getActiveCubeFace(),et=N.getActiveMipmapLevel();N.setRenderTarget(Ce),N.getClearColor(F),K=N.getClearAlpha(),K<1&&N.setClearColor(16777215,.5),N.clear(),ut&&Te.render(oe);const nt=N.toneMapping;N.toneMapping=tr;const Qe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),fe===!0&&We.setGlobalState(N.clippingPlanes,te),Yn(R,oe,te),it.updateMultisampleRenderTarget(Ce),it.updateRenderTargetMipmap(Ce),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Ct=0,Dt=q.length;Ct<Dt;Ct++){const Mt=q[Ct],{object:zt,geometry:$e,material:Wt,group:Et}=Mt;if(Wt.side===ha&&zt.layers.test(te.layers)){const yn=Wt.side;Wt.side=Wn,Wt.needsUpdate=!0,ln(zt,oe,te,$e,Wt,Et),Wt.side=yn,Wt.needsUpdate=!0,ht=!0}}ht===!0&&(it.updateMultisampleRenderTarget(Ce),it.updateRenderTargetMipmap(Ce))}N.setRenderTarget(Be,Ge,et),N.setClearColor(F,K),Qe!==void 0&&(te.viewport=Qe),N.toneMapping=nt}function Yn(R,q,oe){const te=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Ce=R.length;Z<Ce;Z++){const Ne=R[Z],{object:Be,geometry:Ge,group:et}=Ne;let nt=Ne.material;nt.allowOverride===!0&&te!==null&&(nt=te),Be.layers.test(oe.layers)&&ln(Be,q,oe,Ge,nt,et)}}function ln(R,q,oe,te,Z,Ce){R.onBeforeRender(N,q,oe,te,Z,Ce),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(N,q,oe,te,R,Ce),Z.transparent===!0&&Z.side===ha&&Z.forceSinglePass===!1?(Z.side=Wn,Z.needsUpdate=!0,N.renderBufferDirect(oe,q,te,Z,R,Ce),Z.side=nr,Z.needsUpdate=!0,N.renderBufferDirect(oe,q,te,Z,R,Ce),Z.side=ha):N.renderBufferDirect(oe,q,te,Z,R,Ce),R.onAfterRender(N,q,oe,te,Z,Ce)}function mn(R,q,oe){q.isScene!==!0&&(q=Jt);const te=Ye.get(R),Z=L.state.lights,Ce=L.state.shadowsArray,Ne=Z.state.version,Be=ie.getParameters(R,Z.state,Ce,q,oe),Ge=ie.getProgramCacheKey(Be);let et=te.programs;te.environment=R.isMeshStandardMaterial?q.environment:null,te.fog=q.fog,te.envMap=(R.isMeshStandardMaterial?_:D).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",rt),et=new Map,te.programs=et);let nt=et.get(Ge);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Ne)return Fr(R,Be),nt}else Be.uniforms=ie.getUniforms(R),R.onBeforeCompile(Be,N),nt=ie.acquireProgram(Be,Ge),et.set(Ge,nt),te.uniforms=Be.uniforms;const Qe=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=We.uniform),Fr(R,Be),te.needsLights=ll(R),te.lightsStateVersion=Ne,te.needsLights&&(Qe.ambientLightColor.value=Z.state.ambient,Qe.lightProbe.value=Z.state.probe,Qe.directionalLights.value=Z.state.directional,Qe.directionalLightShadows.value=Z.state.directionalShadow,Qe.spotLights.value=Z.state.spot,Qe.spotLightShadows.value=Z.state.spotShadow,Qe.rectAreaLights.value=Z.state.rectArea,Qe.ltc_1.value=Z.state.rectAreaLTC1,Qe.ltc_2.value=Z.state.rectAreaLTC2,Qe.pointLights.value=Z.state.point,Qe.pointLightShadows.value=Z.state.pointShadow,Qe.hemisphereLights.value=Z.state.hemi,Qe.directionalShadowMap.value=Z.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qe.spotShadowMap.value=Z.state.spotShadowMap,Qe.spotLightMatrix.value=Z.state.spotLightMatrix,Qe.spotLightMap.value=Z.state.spotLightMap,Qe.pointShadowMap.value=Z.state.pointShadowMap,Qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function Hi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Zc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Fr(R,q){const oe=Ye.get(R);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function uu(R,q,oe,te,Z){q.isScene!==!0&&(q=Jt),it.resetTextureUnits();const Ce=q.fog,Ne=te.isMeshStandardMaterial?q.environment:null,Be=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Os,Ge=(te.isMeshStandardMaterial?_:D).get(te.envMap||Ne),et=te.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!oe.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Qe=!!oe.morphAttributes.position,ht=!!oe.morphAttributes.normal,Ct=!!oe.morphAttributes.color;let Dt=tr;te.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Dt=N.toneMapping);const Mt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=Mt!==void 0?Mt.length:0,$e=Ye.get(te),Wt=L.state.lights;if(fe===!0&&(Re===!0||R!==ne)){const bn=R===ne&&te.id===k;We.setState(te,R,bn)}let Et=!1;te.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Wt.state.version||$e.outputColorSpace!==Be||Z.isBatchedMesh&&$e.batching===!1||!Z.isBatchedMesh&&$e.batching===!0||Z.isBatchedMesh&&$e.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&$e.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&$e.instancing===!1||!Z.isInstancedMesh&&$e.instancing===!0||Z.isSkinnedMesh&&$e.skinning===!1||!Z.isSkinnedMesh&&$e.skinning===!0||Z.isInstancedMesh&&$e.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&$e.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&$e.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&$e.instancingMorph===!1&&Z.morphTexture!==null||$e.envMap!==Ge||te.fog===!0&&$e.fog!==Ce||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==We.numPlanes||$e.numIntersection!==We.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==nt||$e.morphTargets!==Qe||$e.morphNormals!==ht||$e.morphColors!==Ct||$e.toneMapping!==Dt||$e.morphTargetsCount!==zt)&&(Et=!0):(Et=!0,$e.__version=te.version);let yn=$e.currentProgram;Et===!0&&(yn=mn(te,q,Z));let Ma=!1,jt=!1,Gi=!1;const Yt=yn.getUniforms(),Sn=$e.uniforms;if(Ie.useProgram(yn.program)&&(Ma=!0,jt=!0,Gi=!0),te.id!==k&&(k=te.id,jt=!0),Ma||ne!==R){Ie.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Yt.setValue(H,"projectionMatrix",R.projectionMatrix),Yt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Tn=Yt.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,qe.setFromMatrixPosition(R.matrixWorld)),vt.logarithmicDepthBuffer&&Yt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Yt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),ne!==R&&(ne=R,jt=!0,Gi=!0)}if(Z.isSkinnedMesh){Yt.setOptional(H,Z,"bindMatrix"),Yt.setOptional(H,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Yt.setValue(H,"boneTexture",bn.boneTexture,it))}Z.isBatchedMesh&&(Yt.setOptional(H,Z,"batchingTexture"),Yt.setValue(H,"batchingTexture",Z._matricesTexture,it),Yt.setOptional(H,Z,"batchingIdTexture"),Yt.setValue(H,"batchingIdTexture",Z._indirectTexture,it),Yt.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Yt.setValue(H,"batchingColorTexture",Z._colorsTexture,it));const xn=oe.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Ke.update(Z,oe,yn),(jt||$e.receiveShadow!==Z.receiveShadow)&&($e.receiveShadow=Z.receiveShadow,Yt.setValue(H,"receiveShadow",Z.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Sn.envMap.value=Ge,Sn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&q.environment!==null&&(Sn.envMapIntensity.value=q.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=ZT()),jt&&(Yt.setValue(H,"toneMappingExposure",N.toneMappingExposure),$e.needsLights&&fu(Sn,Gi),Ce&&te.fog===!0&&ze.refreshFogUniforms(Sn,Ce),ze.refreshMaterialUniforms(Sn,te,Se,ye,L.state.transmissionRenderTarget[R.id]),Zc.upload(H,Hi($e),Sn,it)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Zc.upload(H,Hi($e),Sn,it),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Yt.setValue(H,"center",Z.center),Yt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Yt.setValue(H,"normalMatrix",Z.normalMatrix),Yt.setValue(H,"modelMatrix",Z.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const bn=te.uniformsGroups;for(let Tn=0,Ci=bn.length;Tn<Ci;Tn++){const Vi=bn[Tn];Le.update(Vi,yn),Le.bind(Vi,yn)}}return yn}function fu(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ll(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,oe){const te=Ye.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Ye.get(R.texture).__webglTexture=q,Ye.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:oe,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const oe=Ye.get(R);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const sr=H.createFramebuffer();this.setRenderTarget=function(R,q=0,oe=0){C=R,J=q,w=oe;let te=!0,Z=null,Ce=!1,Ne=!1;if(R){const Ge=Ye.get(R);if(Ge.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(H.FRAMEBUFFER,null),te=!1;else if(Ge.__webglFramebuffer===void 0)it.setupRenderTarget(R);else if(Ge.__hasExternalTextures)it.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(Ge.__boundDepthTexture!==Qe){if(Qe!==null&&Ye.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ne=!0);const nt=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?Z=nt[q][oe]:Z=nt[q],Ce=!0):R.samples>0&&it.useMultisampledRTT(R)===!1?Z=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?Z=nt[oe]:Z=nt,ue.copy(R.viewport),he.copy(R.scissor),me=R.scissorTest}else ue.copy(be).multiplyScalar(Se).floor(),he.copy(Ae).multiplyScalar(Se).floor(),me=Pe;if(oe!==0&&(Z=sr),Ie.bindFramebuffer(H.FRAMEBUFFER,Z)&&te&&Ie.drawBuffers(R,Z),Ie.viewport(ue),Ie.scissor(he),Ie.setScissorTest(me),Ce){const Ge=Ye.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ge.__webglTexture,oe)}else if(Ne){const Ge=q;for(let et=0;et<R.textures.length;et++){const nt=Ye.get(R.textures[et]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+et,nt.__webglTexture,oe,Ge)}}else if(R!==null&&oe!==0){const Ge=Ye.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ge.__webglTexture,oe)}k=-1},this.readRenderTargetPixels=function(R,q,oe,te,Z,Ce,Ne,Be=0){if(!(R&&R.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){Ie.bindFramebuffer(H.FRAMEBUFFER,Ge);try{const et=R.textures[Be],nt=et.format,Qe=et.type;if(!vt.textureFormatReadable(nt)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Qe)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-te&&oe>=0&&oe<=R.height-Z&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Be),H.readPixels(q,oe,te,Z,at.convert(nt),at.convert(Qe),Ce))}finally{const et=C!==null?Ye.get(C).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,q,oe,te,Z,Ce,Ne,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge)if(q>=0&&q<=R.width-te&&oe>=0&&oe<=R.height-Z){Ie.bindFramebuffer(H.FRAMEBUFFER,Ge);const et=R.textures[Be],nt=et.format,Qe=et.type;if(!vt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.bufferData(H.PIXEL_PACK_BUFFER,Ce.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Be),H.readPixels(q,oe,te,Z,at.convert(nt),at.convert(Qe),0);const Ct=C!==null?Ye.get(C).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,Ct);const Dt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await R1(H,Dt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ce),H.deleteBuffer(ht),H.deleteSync(Dt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,oe=0){const te=Math.pow(2,-oe),Z=Math.floor(R.image.width*te),Ce=Math.floor(R.image.height*te),Ne=q!==null?q.x:0,Be=q!==null?q.y:0;it.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,oe,0,0,Ne,Be,Z,Ce),Ie.unbindTexture()};const Ws=H.createFramebuffer(),ba=H.createFramebuffer();this.copyTextureToTexture=function(R,q,oe=null,te=null,Z=0,Ce=null){Ce===null&&(Z!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=Z,Z=0):Ce=0);let Ne,Be,Ge,et,nt,Qe,ht,Ct,Dt;const Mt=R.isCompressedTexture?R.mipmaps[Ce]:R.image;if(oe!==null)Ne=oe.max.x-oe.min.x,Be=oe.max.y-oe.min.y,Ge=oe.isBox3?oe.max.z-oe.min.z:1,et=oe.min.x,nt=oe.min.y,Qe=oe.isBox3?oe.min.z:0;else{const xn=Math.pow(2,-Z);Ne=Math.floor(Mt.width*xn),Be=Math.floor(Mt.height*xn),R.isDataArrayTexture?Ge=Mt.depth:R.isData3DTexture?Ge=Math.floor(Mt.depth*xn):Ge=1,et=0,nt=0,Qe=0}te!==null?(ht=te.x,Ct=te.y,Dt=te.z):(ht=0,Ct=0,Dt=0);const zt=at.convert(q.format),$e=at.convert(q.type);let Wt;q.isData3DTexture?(it.setTexture3D(q,0),Wt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(it.setTexture2DArray(q,0),Wt=H.TEXTURE_2D_ARRAY):(it.setTexture2D(q,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Et=H.getParameter(H.UNPACK_ROW_LENGTH),yn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ma=H.getParameter(H.UNPACK_SKIP_PIXELS),jt=H.getParameter(H.UNPACK_SKIP_ROWS),Gi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Mt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,et),H.pixelStorei(H.UNPACK_SKIP_ROWS,nt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qe);const Yt=R.isDataArrayTexture||R.isData3DTexture,Sn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const xn=Ye.get(R),bn=Ye.get(q),Tn=Ye.get(xn.__renderTarget),Ci=Ye.get(bn.__renderTarget);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Vi=0;Vi<Ge;Vi++)Yt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,Z,Qe+Vi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(q).__webglTexture,Ce,Dt+Vi)),H.blitFramebuffer(et,nt,Ne,Be,ht,Ct,Ne,Be,H.DEPTH_BUFFER_BIT,H.NEAREST);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ye.has(R)){const xn=Ye.get(R),bn=Ye.get(q);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,Ws),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,ba);for(let Tn=0;Tn<Ge;Tn++)Yt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,xn.__webglTexture,Z,Qe+Tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,xn.__webglTexture,Z),Sn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Ce,Dt+Tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Ce),Z!==0?H.blitFramebuffer(et,nt,Ne,Be,ht,Ct,Ne,Be,H.COLOR_BUFFER_BIT,H.NEAREST):Sn?H.copyTexSubImage3D(Wt,Ce,ht,Ct,Dt+Tn,et,nt,Ne,Be):H.copyTexSubImage2D(Wt,Ce,ht,Ct,et,nt,Ne,Be);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Wt,Ce,ht,Ct,Dt,Ne,Be,Ge,zt,$e,Mt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,Ce,ht,Ct,Dt,Ne,Be,Ge,zt,Mt.data):H.texSubImage3D(Wt,Ce,ht,Ct,Dt,Ne,Be,Ge,zt,$e,Mt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ce,ht,Ct,Ne,Be,zt,$e,Mt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ce,ht,Ct,Mt.width,Mt.height,zt,Mt.data):H.texSubImage2D(H.TEXTURE_2D,Ce,ht,Ct,Ne,Be,zt,$e,Mt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Et),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ma),H.pixelStorei(H.UNPACK_SKIP_ROWS,jt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Gi),Ce===0&&q.generateMipmaps&&H.generateMipmap(Wt),Ie.unbindTexture()},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&it.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?it.setTextureCube(R,0):R.isData3DTexture?it.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?it.setTexture2DArray(R,0):it.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){J=0,w=0,C=null,Ie.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Nt._getUnpackColorSpace()}}function QT({mouseForce:r=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:d=.014,BFECC:h=!0,resolution:m=.5,isBounce:p=!1,colors:x=["#5227FF","#FF9FFC","#B19EEF"],style:g={},className:y="",autoDemo:b=!0,autoSpeed:E=.5,autoIntensity:T=2.2,takeoverDuration:M=.25,autoResumeDelay:v=1e3,autoRampDuration:U=.6}){const L=xe.useRef(null),P=xe.useRef(null),G=xe.useRef(null),N=xe.useRef(null),z=xe.useRef(null),J=xe.useRef(!0),w=xe.useRef(null);return xe.useEffect(()=>{if(!L.current)return;function C(D){let _;Array.isArray(D)&&D.length>0?D.length===1?_=[D[0],D[0]]:_=D:_=["#ffffff","#ffffff"];const I=_.length,Q=new Uint8Array(I*4);for(let ie=0;ie<I;ie++){const ze=new Pt(_[ie]);Q[ie*4+0]=Math.round(ze.r*255),Q[ie*4+1]=Math.round(ze.g*255),Q[ie*4+2]=Math.round(ze.b*255),Q[ie*4+3]=255}const de=new kv(Q,I,1,xi);return de.magFilter=On,de.minFilter=On,de.wrapS=ai,de.wrapT=ai,de.generateMipmaps=!1,de.needsUpdate=!0,de}const k=C(x),ne=new an(0,0,0,0);class ue{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(_){this.container=_,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new KT({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Pt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new c3,this.clock.start()}resize(){if(!this.container)return;const _=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(_.width)),this.height=Math.max(1,Math.floor(_.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const he=new ue;class me{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(_){this.container=_,this.docTarget=_.ownerDocument||null;const I=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);I&&(this.listenerTarget=I,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(_,I){if(!this.container)return!1;const Q=this.container.getBoundingClientRect();return Q.width===0||Q.height===0?!1:_>=Q.left&&_<=Q.right&&I>=Q.top&&I<=Q.bottom}updateHoverState(_,I){return this.isHoverInside=this.isPointInside(_,I),this.isHoverInside}setCoords(_,I){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Q=this.container.getBoundingClientRect();if(Q.width===0||Q.height===0)return;const de=(_-Q.left)/Q.width,ie=(I-Q.top)/Q.height;this.coords.set(de*2-1,-(ie*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(_,I){this.coords.set(_,I),this.mouseMoved=!0}onDocumentMouseMove(_){if(this.updateHoverState(_.clientX,_.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const I=this.container.getBoundingClientRect();if(I.width===0||I.height===0)return;const Q=(_.clientX-I.left)/I.width,de=(_.clientY-I.top)/I.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Q*2-1,-(de*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(_.clientX,_.clientY),this.hasUserControl=!0}}onDocumentTouchStart(_){if(_.touches.length!==1)return;const I=_.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY),this.hasUserControl=!0)}onDocumentTouchMove(_){if(_.touches.length!==1)return;const I=_.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const _=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(_>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const I=_*_*(3-2*_);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,I)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const F=new me;class K{constructor(_,I,Q){this.mouse=_,this.manager=I,this.enabled=Q.enabled,this.speed=Q.speed,this.resumeDelay=Q.resumeDelay||3e3,this.rampDurationMs=(Q.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const _=Math.random;this.target.set((_()*2-1)*(1-this.margin),(_()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const _=performance.now();if(_-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=_,this.activationTime=_),!this.active)return;this.mouse.isAutoActive=!0;let Q=(_-this.lastTime)/1e3;this.lastTime=_,Q>.2&&(Q=.016);const de=this._tmpDir.subVectors(this.target,this.current),ie=de.length();if(ie<.01){this.pickNewTarget();return}de.normalize();let ze=1;if(this.rampDurationMs>0){const We=Math.min(1,(_-this.activationTime)/this.rampDurationMs);ze=We*We*(3-2*We)}const Ue=this.speed*Q*ze,Ze=Math.min(Ue,ie);this.current.addScaledVector(de,Ze),this.mouse.setNormalized(this.current.x,this.current.y)}}const Y=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,ye=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Se=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,O=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,se=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,be=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Ae=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Pe=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,re=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,fe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Re{constructor(_){this.props=_||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Ug,this.camera=new eu,this.uniforms&&(this.material=new Hc(this.props.material),this.geometry=new Nr(2,2),this.plane=new Ri(this.geometry,this.material),this.scene.add(this.plane))}update(){he.renderer.setRenderTarget(this.props.output||null),he.renderer.render(this.scene,this.camera),he.renderer.setRenderTarget(null)}}class Ve extends Re{constructor(_){super({material:{vertexShader:Y,fragmentShader:O,uniforms:{boundarySpace:{value:_.cellScale},px:{value:_.cellScale},fboSize:{value:_.fboSize},velocity:{value:_.src.texture},dt:{value:_.dt},isBFECC:{value:!0}}},output:_.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const _=new Ii,I=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);_.setAttribute("position",new Ai(I,3));const Q=new Hc({vertexShader:ye,fragmentShader:O,uniforms:this.uniforms});this.line=new a3(_,Q),this.scene.add(this.line)}update({dt:_,isBounce:I,BFECC:Q}){this.uniforms.dt.value=_,this.line.visible=I,this.uniforms.isBFECC.value=Q,super.update()}}class qe extends Re{constructor(_){super({output:_.dst}),this.init(_)}init(_){super.init();const I=new Nr(1,1),Q=new Hc({vertexShader:Se,fragmentShader:Ae,blending:sh,depthWrite:!1,uniforms:{px:{value:_.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(_.cursor_size,_.cursor_size)}}});this.mouse=new Ri(I,Q),this.scene.add(this.mouse)}update(_){const I=F.diff.x/2*_.mouse_force,Q=F.diff.y/2*_.mouse_force,de=_.cursor_size*_.cellScale.x,ie=_.cursor_size*_.cellScale.y,ze=Math.min(Math.max(F.coords.x,-1+de+_.cellScale.x*2),1-de-_.cellScale.x*2),Ue=Math.min(Math.max(F.coords.y,-1+ie+_.cellScale.y*2),1-ie-_.cellScale.y*2),Ze=this.mouse.material.uniforms;Ze.force.value.set(I,Q),Ze.center.value.set(ze,Ue),Ze.scale.value.set(_.cursor_size,_.cursor_size),super.update()}}class lt extends Re{constructor(_){super({material:{vertexShader:Y,fragmentShader:fe,uniforms:{boundarySpace:{value:_.boundarySpace},velocity:{value:_.src.texture},velocity_new:{value:_.dst_.texture},v:{value:_.viscous},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst,output0:_.dst_,output1:_.dst}),this.init()}update({viscous:_,iterations:I,dt:Q}){let de,ie;this.uniforms.v.value=_;for(let ze=0;ze<I;ze++)ze%2===0?(de=this.props.output0,ie=this.props.output1):(de=this.props.output1,ie=this.props.output0),this.uniforms.velocity_new.value=de.texture,this.props.output=ie,this.uniforms.dt.value=Q,super.update();return ie}}class Jt extends Re{constructor(_){super({material:{vertexShader:Y,fragmentShader:be,uniforms:{boundarySpace:{value:_.boundarySpace},velocity:{value:_.src.texture},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst}),this.init()}update({vel:_}){this.uniforms.velocity.value=_.texture,super.update()}}class ut extends Re{constructor(_){super({material:{vertexShader:Y,fragmentShader:Pe,uniforms:{boundarySpace:{value:_.boundarySpace},pressure:{value:_.dst_.texture},divergence:{value:_.src.texture},px:{value:_.cellScale}}},output:_.dst,output0:_.dst_,output1:_.dst}),this.init()}update({iterations:_}){let I,Q;for(let de=0;de<_;de++)de%2===0?(I=this.props.output0,Q=this.props.output1):(I=this.props.output1,Q=this.props.output0),this.uniforms.pressure.value=I.texture,this.props.output=Q,super.update();return Q}}class Rt extends Re{constructor(_){super({material:{vertexShader:Y,fragmentShader:re,uniforms:{boundarySpace:{value:_.boundarySpace},pressure:{value:_.src_p.texture},velocity:{value:_.src_v.texture},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst}),this.init()}update({vel:_,pressure:I}){this.uniforms.velocity.value=_.texture,this.uniforms.pressure.value=I.texture,super.update()}}class H{constructor(_){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,..._},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?zr:Oi}createAllFBO(){const I={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:On,magFilter:On,wrapS:ai,wrapT:ai};for(let Q in this.fbos)this.fbos[Q]=new ir(this.fboSize.x,this.fboSize.y,I)}createShaderPass(){this.advection=new Ve({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new qe({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new lt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Jt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new ut({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Rt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const _=Math.max(1,Math.round(this.options.resolution*he.width)),I=Math.max(1,Math.round(this.options.resolution*he.height)),Q=1/_,de=1/I;this.cellScale.set(Q,de),this.fboSize.set(_,I)}resize(){this.calcSize();for(let _ in this.fbos)this.fbos[_].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let _=this.fbos.vel_1;this.options.isViscous&&(_=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:_});const I=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:_,pressure:I})}}class ft{constructor(){this.init()}init(){this.simulation=new H,this.scene=new Ug,this.camera=new eu,this.output=new Ri(new Nr(2,2),new Hc({vertexShader:Y,fragmentShader:se,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:k},bgColor:{value:ne}}})),this.scene.add(this.output)}addScene(_){this.scene.add(_)}resize(){this.simulation.resize()}render(){he.renderer.setRenderTarget(null),he.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class xt{constructor(_){this.props=_,he.init(_.$wrapper),F.init(_.$wrapper),F.autoIntensity=_.autoIntensity,F.takeoverDuration=_.takeoverDuration,this.lastUserInteraction=performance.now(),F.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new K(F,this,{enabled:_.autoDemo,speed:_.autoSpeed,resumeDelay:_.autoResumeDelay,rampDuration:_.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():J.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(he.renderer.domElement),this.output=new ft}resize(){he.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),F.update(),he.update(),this.output.update()}loop(){this.running&&(this.render(),N.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,N.current&&(cancelAnimationFrame(N.current),N.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),F.dispose(),he.renderer){const _=he.renderer.domElement;_&&_.parentNode&&_.parentNode.removeChild(_),he.renderer.dispose()}}catch{}}}const vt=L.current;vt.style.position=vt.style.position||"relative",vt.style.overflow=vt.style.overflow||"hidden";const Ie=new xt({$wrapper:vt,autoDemo:b,autoSpeed:E,autoIntensity:T,takeoverDuration:M,autoResumeDelay:v,autoRampDuration:U});P.current=Ie,(()=>{if(!P.current)return;const D=P.current.output?.simulation;if(!D)return;const _=D.options.resolution;Object.assign(D.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:d,BFECC:h,resolution:m,isBounce:p}),m!==_&&D.resize()})(),Ie.start();const Ye=new IntersectionObserver(D=>{const _=D[0],I=_.isIntersecting&&_.intersectionRatio>0;J.current=I,P.current&&(I&&!document.hidden?P.current.start():P.current.pause())},{threshold:[0,.01,.1]});Ye.observe(vt),z.current=Ye;const it=new ResizeObserver(()=>{P.current&&(w.current&&cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return it.observe(vt),G.current=it,()=>{if(N.current&&cancelAnimationFrame(N.current),G.current)try{G.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[h,e,d,p,i,c,l,r,m,s,x,b,E,T,M,v,U]),xe.useEffect(()=>{const C=P.current;if(!C)return;const k=C.output?.simulation;if(!k)return;const ne=k.options.resolution;Object.assign(k.options,{mouse_force:r,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:d,BFECC:h,resolution:m,isBounce:p}),C.autoDriver&&(C.autoDriver.enabled=b,C.autoDriver.speed=E,C.autoDriver.resumeDelay=v,C.autoDriver.rampDurationMs=U*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=T,C.autoDriver.mouse.takeoverDuration=M)),m!==ne&&k.resize()},[r,e,i,s,l,c,d,h,m,p,b,E,T,M,v,U]),W.jsx("div",{ref:L,className:`w-full h-full relative overflow-hidden pointer-events-none touch-none ${y||""}`,style:g})}const JT=()=>{const r=en.c(2);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e={width:"100%",height:"100vh",position:"fixed",inset:"0",zIndex:"-10",background:"#000000"},r[0]=e):e=r[0];let i;return r[1]===Symbol.for("react.memo_cache_sentinel")?(i=W.jsx("div",{style:e,children:W.jsx(QT,{colors:["#5227FF","#27acff","#b8e4ff"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),r[1]=i):i=r[1],i},$T=r=>{const e=en.c(6),{children:i}=r;let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=W.jsx(eA,{}),e[0]=s):s=e[0];let l;e[1]!==i?(l=W.jsx("main",{className:"",children:i}),e[1]=i,e[2]=l):l=e[2];let c;e[3]===Symbol.for("react.memo_cache_sentinel")?(c=W.jsx(iA,{}),e[3]=c):c=e[3];let d;return e[4]!==l?(d=W.jsxs("div",{className:"min-h-screen flex flex-col",children:[s,l,c]}),e[4]=l,e[5]=d):d=e[5],d};function eA(){const r=en.c(16),[e,i]=xe.useState(!1);let s;r[0]===Symbol.for("react.memo_cache_sentinel")?(s=[{to:"/",label:"Beranda"},{to:"/tentang-kami",label:"Tentang Kami"},{to:"/artikel",label:"Artikel"},{to:"/portfolio",label:"Portfolio"},{to:"/modul",label:"Modul"}],r[0]=s):s=r[0];const l=s;let c;r[1]===Symbol.for("react.memo_cache_sentinel")?(c=W.jsx("div",{className:"font-semibold text-2xl",children:"Himikom"}),r[1]=c):c=r[1];let d;r[2]===Symbol.for("react.memo_cache_sentinel")?(d=W.jsx("ul",{className:"hidden md:flex gap-8 text-sm",children:l.map(tA)}),r[2]=d):d=r[2];let h;r[3]!==e?(h=()=>i(!e),r[3]=e,r[4]=h):h=r[4];let m,p,x;r[5]===Symbol.for("react.memo_cache_sentinel")?(m=W.jsx("span",{className:"w-6 h-0.5 bg-white"}),p=W.jsx("span",{className:"w-6 h-0.5 bg-white"}),x=W.jsx("span",{className:"w-6 h-0.5 bg-white"}),r[5]=m,r[6]=p,r[7]=x):(m=r[5],p=r[6],x=r[7]);let g;r[8]!==h?(g=W.jsxs("nav",{className:`fixed z-[101] top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%]\r
        rounded-2xl px-6 py-3 flex items-center justify-between\r
        liquid-glass`,children:[c,d,W.jsxs("button",{onClick:h,className:"md:hidden flex flex-col gap-1.5",children:[m,p,x]})]}),r[8]=h,r[9]=g):g=r[9];const y=`fixed top-20 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl p-6 z-40
        glass-light inner-shadow-custom drop-shadow-custom backdrop-blur-xl
        flex flex-col gap-4 text-center text-lg transition-all duration-300
        ${e?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`;let b;r[10]===Symbol.for("react.memo_cache_sentinel")?(b=l.map((M,v)=>W.jsx("li",{children:W.jsx(Bs,{to:M.to,className:"hover:text-white/80 transition",onClick:()=>i(!1),children:M.label})},v)),r[10]=b):b=r[10];let E;r[11]!==y?(E=W.jsx("ul",{className:y,children:b}),r[11]=y,r[12]=E):E=r[12];let T;return r[13]!==E||r[14]!==g?(T=W.jsxs(W.Fragment,{children:[g,E]}),r[13]=E,r[14]=g,r[15]=T):T=r[15],T}function tA(r,e){return W.jsx("li",{children:W.jsx(Bs,{to:r.to,className:"hover:text-white/80 transition cursor-pointer",children:r.label})},e)}const nA=[{to:"/arsip-dokumen",label:"Arsip Dokumen"},{to:"/panduan-organisasi",label:"Panduan Organisasi"},{to:"/kontak",label:"Kontak"},{to:"/kerja-sama",label:"Kerja Sama"}];function iA(){const r=en.c(5);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsx("nav",{children:W.jsx("ul",{className:"flex flex-col md:flex-row gap-4 md:gap-8 text-sm",children:nA.map(aA)})}),r[0]=e):e=r[0];let i;r[1]===Symbol.for("react.memo_cache_sentinel")?(i=W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",children:W.jsxs("g",{fill:"none",children:[W.jsx("path",{d:"m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),W.jsx("path",{fill:"#fff",d:"M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m4.5-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"})]})}),r[1]=i):i=r[1];let s;r[2]===Symbol.for("react.memo_cache_sentinel")?(s=W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",children:W.jsx("path",{fill:"#fff",d:"m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"})}),r[2]=s):s=r[2];let l;r[3]===Symbol.for("react.memo_cache_sentinel")?(l=W.jsxs("div",{className:"flex gap-4",children:[i,s,W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",children:W.jsx("path",{fill:"#fff",d:"M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"})})]}),r[3]=l):l=r[3];let c;return r[4]===Symbol.for("react.memo_cache_sentinel")?(c=W.jsxs("footer",{className:`w-full mt-20 py-10 flex flex-col items-center justify-center gap-6\r
      glass-light inner-shadow-custom drop-shadow-custom backdrop-blur-xl\r
      mx-auto text-center`,children:[e,l,W.jsxs("p",{className:"text-xs opacity-70",children:["© ",new Date().getFullYear()," Himikom. All rights reserved."]})]}),r[4]=c):c=r[4],c}function aA(r){return W.jsx("li",{children:W.jsx(Bs,{to:r.to,className:"hover:text-white/80 transition",children:r.label})},r.to)}function ar(r){const e=en.c(12);let i,s,l,c,d;e[0]!==r?({to:d,variant:l,children:i,className:c,...s}=r,e[0]=r,e[1]=i,e[2]=s,e[3]=l,e[4]=c,e[5]=d):(i=e[1],s=e[2],l=e[3],c=e[4],d=e[5]);const h=l===void 0?"primary":l,m=c===void 0?"":c;let p;e[6]===Symbol.for("react.memo_cache_sentinel")?(p={primary:"bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:scale-[1.04] hover:-translate-y-0.5 duration-200",glass:"glass-light inner-shadow-custom drop-shadow-custom backdrop-blur-xl text-white border border-white/30 hover:bg-white/10 hover:scale-[1.04] hover:-translate-y-0.5 duration-200"},e[6]=p):p=e[6];const g=`px-8 py-3 rounded-full text-sm font-semibold transition active:scale-[0.97] ${p[h]} ${m}`;let y;return e[7]!==i||e[8]!==s||e[9]!==g||e[10]!==d?(y=W.jsx(Bs,{to:d,className:g,...s,children:i}),e[7]=i,e[8]=s,e[9]=g,e[10]=d,e[11]=y):y=e[11],y}const sl=r=>{const e=en.c(8),{title:i,subtitle:s,customClass:l}=r,c=`
      ${l}
      max-w-3xl
      animate-fade-in-up
    `;let d;e[0]!==i?(d=W.jsx("h2",{className:`\r
        text-4xl sm:text-5xl \r
        font-bold \r
        text-gray-200\r
        mb-4\r
      `,children:i}),e[0]=i,e[1]=d):d=e[1];let h;e[2]!==s?(h=s&&W.jsx("p",{className:`\r
          text-lg \r
          text-text-secondary-light dark:text-text-secondary-dark\r
        `,children:s}),e[2]=s,e[3]=h):h=e[3];let m;return e[4]!==c||e[5]!==d||e[6]!==h?(m=W.jsxs("div",{className:c,children:[d,h]}),e[4]=c,e[5]=d,e[6]=h,e[7]=m):m=e[7],m},rA=r=>{const e=en.c(12),{imageUrl:i,title:s,subTitle:l}=r,c=i||"https://via.placeholder.com/400x300?text=HIMIKOM",d=s||"Gambar Program";let h;e[0]!==c||e[1]!==d?(h=W.jsx("div",{className:`\r
        w-full \r
        overflow-hidden \r
        rounded-sub \r
        mb-4 \r
        shadow-inner\r
      `,children:W.jsx("img",{src:c,alt:d,className:"w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"})}),e[0]=c,e[1]=d,e[2]=h):h=e[2];const m=s||"Judul Program";let p;e[3]!==m?(p=W.jsx("h3",{className:`\r
        text-2xl font-bold \r
        text-gray-50\r
        mb-2\r
      `,children:m}),e[3]=m,e[4]=p):p=e[4];const x=l||"Sub-Judul Program";let g;e[5]!==x?(g=W.jsx("h3",{className:`\r
        text-lg font-bold \r
        text-gray-400\r
        mb-2\r
      `,children:x}),e[5]=x,e[6]=g):g=e[6];let y;e[7]===Symbol.for("react.memo_cache_sentinel")?(y=W.jsx("div",{className:"mt-2 w-full flex justify-end",children:W.jsxs(ar,{className:"flex items-center gap-2",children:["Visit",W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 24 24",children:W.jsxs("g",{fill:"none",children:[W.jsx("path",{d:"m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),W.jsx("path",{fill:"#fff",d:"M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m4.5-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"})]})})]})}),e[7]=y):y=e[7];let b;return e[8]!==h||e[9]!==p||e[10]!==g?(b=W.jsxs("div",{className:`\r
      p-4 \r
      flex flex-col \r
      h-full \r
      transition-all duration-300 \r
      hover:shadow-2xl hover:-translate-y-1\r
      inner-shadow-custom drop-shadow-custom backdrop-blur-xl\r
      rounded-3xl\r
    `,children:[h,p,g,y]}),e[8]=h,e[9]=p,e[10]=g,e[11]=b):b=e[11],b},sA=r=>{const e=en.c(12),{imageUrl:i,title:s,description:l}=r,c=i||"https://via.placeholder.com/400x300?text=HIMIKOM",d=s||"Gambar Program";let h;e[0]!==c||e[1]!==d?(h=W.jsx("div",{className:`\r
        w-full \r
        aspect-[4/3]\r
        overflow-hidden \r
        rounded-sub \r
        mb-4 \r
        shadow-inner\r
      `,children:W.jsx("img",{src:c,alt:d,className:"w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"})}),e[0]=c,e[1]=d,e[2]=h):h=e[2];const m=s||"Judul Program";let p;e[3]!==m?(p=W.jsx("h3",{className:`\r
        text-xl font-bold \r
        text-text-light dark:text-text-dark \r
        mb-2\r
      `,children:m}),e[3]=m,e[4]=p):p=e[4];const x=l||"Deskripsi singkat program akan muncul di sini...";let g;e[5]!==x?(g=W.jsx("p",{className:`\r
        text-text-secondary-light dark:text-text-secondary-dark \r
        mb-4 \r
      `,children:x}),e[5]=x,e[6]=g):g=e[6];let y;e[7]===Symbol.for("react.memo_cache_sentinel")?(y=W.jsx("div",{className:"mt-2 w-full flex justify-end",children:W.jsx(ar,{children:"More"})}),e[7]=y):y=e[7];let b;return e[8]!==h||e[9]!==p||e[10]!==g?(b=W.jsxs("div",{className:`\r
      p-4 \r
      flex flex-col \r
      h-full \r
      transition-all duration-300 \r
      hover:shadow-2xl hover:-translate-y-1\r
      inner-shadow-custom drop-shadow-custom backdrop-blur-xl\r
      rounded-3xl\r
    `,children:[h,p,g,y]}),e[8]=h,e[9]=p,e[10]=g,e[11]=b):b=e[11],b},oA=r=>r?new Date(r).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}):"Tanggal tidak diketahui",lA=r=>{const e=en.c(27),{slug:i,imageUrl:s,title:l,excerpt:c,author:d,date:h}=r,m=s||"https://via.placeholder.com/400x225?text=HIMIKOM",p=l||"Gambar Artikel";let x;e[0]!==m||e[1]!==p?(x=W.jsx("div",{className:"w-[40%] aspect-[16/9] rounded-2xl overflow-hidden rounded-sub mb-4 shadow-inner",children:W.jsx("img",{src:m,alt:p,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"})}),e[0]=m,e[1]=p,e[2]=x):x=e[2];const g=l||"Judul Artikel";let y;e[3]!==g?(y=W.jsx("h3",{className:"text-xl font-bold text-text-light dark:text-text-dark mb-2",children:g}),e[3]=g,e[4]=y):y=e[4];const b=d||"Tim HIMIKOM";let E;e[5]!==b?(E=W.jsxs("span",{children:["Oleh ",b]}),e[5]=b,e[6]=E):E=e[6];let T;e[7]===Symbol.for("react.memo_cache_sentinel")?(T=W.jsx("span",{className:"mx-2",children:"•"}),e[7]=T):T=e[7];let M;e[8]!==h?(M=oA(h),e[8]=h,e[9]=M):M=e[9];let v;e[10]!==M?(v=W.jsx("span",{children:M}),e[10]=M,e[11]=v):v=e[11];let U;e[12]!==v||e[13]!==E?(U=W.jsxs("div",{className:"text-sm text-gray-400 mb-3",children:[E,T,v]}),e[12]=v,e[13]=E,e[14]=U):U=e[14];const L=c||"Cuplikan singkat artikel akan muncul di sini...";let P;e[15]!==L?(P=W.jsx("p",{className:"text-gray-200 flex-grow",children:L}),e[15]=L,e[16]=P):P=e[16];const G=`/artikel/${i}`;let N;e[17]!==G?(N=W.jsx("div",{className:"w-full flex justify-end",children:W.jsx(ar,{to:G,className:`\r
            inline-block px-6 py-2 rounded-full \r
            text-sm font-semibold \r
            bg-primary-light dark:bg-primary-dark \r
            text-white transition-all duration-300 hover:opacity-80\r
          `,children:"Baca Selengkapnya"})}),e[17]=G,e[18]=N):N=e[18];let z;e[19]!==U||e[20]!==P||e[21]!==N||e[22]!==y?(z=W.jsxs("div",{className:"flex flex-col",children:[y,U,P,N]}),e[19]=U,e[20]=P,e[21]=N,e[22]=y,e[23]=z):z=e[23];let J;return e[24]!==z||e[25]!==x?(J=W.jsxs("div",{className:`\r
      liquid-glass \r
      p-4 \r
      flex flex-row \r
      h-full \r
      transition-all duration-300 \r
      hover:shadow-2xl hover:-translate-y-1\r
      gap-6\r
    `,children:[x,z]}),e[24]=z,e[25]=x,e[26]=J):J=e[26],J},cA=r=>{const e=en.c(16),{link:i,imageUrl:s,title:l,author:c}=r,d=s||"https://via.placeholder.com/400x225?text=Karya",h=l||"Gambar Portofolio";let m;e[0]!==d||e[1]!==h?(m=W.jsx("div",{className:"w-full aspect-[1/1] overflow-hidden rounded-sub mb-4 shadow-inner rounded-2xl",children:W.jsx("img",{src:d,alt:h,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"})}),e[0]=d,e[1]=h,e[2]=m):m=e[2];const p=l||"Judul Portofolio";let x;e[3]!==p?(x=W.jsx("h3",{className:"text-3xl font-bold text-text-light dark:text-text-dark mb-1",children:p}),e[3]=p,e[4]=x):x=e[4];const g=c||"Mahasiswa HIMIKOM";let y;e[5]!==g?(y=W.jsx("p",{className:"text-lg text-gray-400 mb-3",children:g}),e[5]=g,e[6]=y):y=e[6];let b;e[7]!==x||e[8]!==y?(b=W.jsxs("div",{className:"flex flex-col items-start w-full",children:[x,y]}),e[7]=x,e[8]=y,e[9]=b):b=e[9];let E;e[10]!==i?(E=W.jsx("div",{className:"w-full",children:W.jsx(ar,{target:"_blank",to:i,className:`inline-block px-6 py-4 rounded-full \r
            text-lg font-semibold \r
            bg-primary-light dark:bg-primary-dark \r
            text-white transition-all duration-300 hover:opacity-80 w-full text-center`,children:"Lihat Detail"})}),e[10]=i,e[11]=E):E=e[11];let T;return e[12]!==m||e[13]!==b||e[14]!==E?(T=W.jsxs("div",{className:`\r
      liquid-glass \r
      p-6\r
      flex flex-col \r
      h-full \r
      transition-all duration-300 \r
      hover:shadow-2xl hover:-translate-y-1\r
      justify-center items-center\r
      gap-4\r
    `,children:[m,b,E]}),e[12]=m,e[13]=b,e[14]=E,e[15]=T):T=e[15],T},uA=()=>{const r=en.c(4);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[W.jsx("div",{className:"absolute top-[10%] left-[5%] w-32 h-32 liquid-glass rotate-12 opacity-50"}),W.jsx("div",{className:"absolute bottom-[20%] right-[10%] w-40 h-40 liquid-glass -rotate-6 opacity-60"}),W.jsx("div",{className:"absolute top-[30%] right-[25%] w-24 h-24 liquid-glass rotate-45 opacity-40"}),W.jsx("div",{className:"absolute bottom-[5%] left-[20%] w-28 h-28 liquid-glass -rotate-12 opacity-30"})]}),r[0]=e):e=r[0];let i,s;r[1]===Symbol.for("react.memo_cache_sentinel")?(i=W.jsxs("h1",{className:`\r
          text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none\r
          text-gray-200\r
          mb-6\r
          animate-fade-in-up\r
        `,children:["Jelajahi Dunia ",W.jsx("span",{className:"text-primary-light dark:text-primary-dark",children:"Informatika"})," Bersama Kami"]}),s=W.jsx("p",{className:`\r
          text-lg sm:text-xl text-gray-400\r
          mb-10 max-w-2xl mx-auto\r
          animate-fade-in-up delay-200\r
        `,children:"HIMIKOM adalah wadah bagi mahasiswa Komputer untuk berinovasi, berkolaborasi, dan mengembangkan potensi di era digital."}),r[1]=i,r[2]=s):(i=r[1],s=r[2]);let l;return r[3]===Symbol.for("react.memo_cache_sentinel")?(l=W.jsxs("section",{className:"relative h-screen flex items-center justify-center overflow-hidden",children:[e,W.jsxs("div",{className:"relative z-10 text-center max-w-4xl px-4",children:[i,s,W.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-400",children:[W.jsx(ar,{to:"/tentang-kami",children:"Tentang Kami"}),W.jsx(ar,{to:"/artikel",variant:"glass",children:"Baca Artikel Kami"})]})]})]}),r[3]=l):l=r[3],l},Jv="gMDSj4vd7fM",fA=`https://www.youtube.com/watch?v=${Jv}`,dA=`https://img.youtube.com/vi/${Jv}/maxresdefault.jpg`,hA=()=>{const r=en.c(3);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsx("img",{src:dA,alt:"Thumbnail Video Profil HIMIKOM",className:"w-full h-auto object-full"}),r[0]=e):e=r[0];let i;r[1]===Symbol.for("react.memo_cache_sentinel")?(i=W.jsx("div",{className:"md:w-1/2 animate-fade-in-up delay-200",children:W.jsxs("a",{href:fA,target:"_blank",rel:"noopener noreferrer",className:`\r
            rounded-2xl\r
              block relative \r
              rounded-main \r
              overflow-hidden \r
              group \r
              shadow-glass-light dark:shadow-glass-dark\r
              transition-all duration-300\r
              transform hover:shadow-2xl hover:-translate-y-1\r
            `,"aria-label":"Tonton video profil di YouTube",children:[e,W.jsx("div",{className:`\r
              absolute inset-0 \r
              flex items-center justify-center \r
              bg-black/40 \r
              opacity-0 group-hover:opacity-100 \r
              transition-opacity duration-300\r
            `,children:W.jsx("svg",{className:"w-16 h-16 text-white/90 transform group-hover:scale-110 transition-transform",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:W.jsx("path",{fill:"#fff",d:"M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"})})})]})}),r[1]=i):i=r[1];let s;return r[2]===Symbol.for("react.memo_cache_sentinel")?(s=W.jsx("section",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20",children:W.jsxs("div",{className:`\r
        flex flex-col md:flex-row   \r
        md:items-center\r
        gap-12 lg:gap-16\r
        max-w-6xl mx-auto\r
      `,children:[i,W.jsxs("div",{className:"md:w-1/2 animate-fade-in-up",children:[" ",W.jsx(sl,{title:"Profil"}),W.jsx("p",{className:`\r
            text-lg\r
            text-gray-400\r
            text-left\r
            max-w-none\r
          `,children:"Sobat Coding... stalking organisasi kami di channel Youtube ini ya, agar kalian bisa bergabung menjadi mahasiswa keren era digital AI nih.."})]})]})}),r[2]=s):s=r[2],s},pA=[{id:1,title:"HIMIKOM DevClass",description:"Kelas intensif mingguan untuk belajar pengembangan web modern (React, Node.js) dari dasar hingga mahir bersama mentor.",imageUrl:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8fHwxNzMyMzEyNDY5&ixlib=rb-4.0.3&q=80&w=400",link:"/portfolio/devclass"},{id:2,title:"UI/UX Workshop",description:"Pelatihan desain antarmuka dan pengalaman pengguna, berfokus pada studi kasus nyata dan penggunaan alat desain seperti Figma.",imageUrl:"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8N3x8dWklMjB1eCUyMGRlc2lnbnxlbnwwfHx8fDE3MzIzMTI1MjA&ixlib=rb-4.0.3&q=80&w=400",link:"/portfolio/workshop-uiux"},{id:3,title:"E-Sports Tournament",description:"Kompetisi e-sports tahunan untuk menjalin silaturahmi antar mahasiswa dan mengasah kemampuan kompetitif.",imageUrl:"https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8Mnx8ZSUyMHNwb3J0c3xlbnwwfHx8fDE3MzIzMTI1NDU&ixlib=rb-4.0.3&q=80&w=400",link:"/portfolio/esports"}],mA=()=>{const r=en.c(2);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsx("div",{className:"w-full fles justify-start",children:W.jsx(sl,{title:"Program Kami"})}),r[0]=e):e=r[0];let i;return r[1]===Symbol.for("react.memo_cache_sentinel")?(i=W.jsxs("section",{className:"container flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-6",children:[e,W.jsx("div",{className:`\r
        grid \r
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 \r
        gap-8\r
        max-w-6xl mx-auto\r
      `,children:pA.map(xA)})]}),r[1]=i):i=r[1],i};function xA(r){return W.jsx("div",{className:"animate-fade-in-up",children:W.jsx(sA,{title:r.title,description:r.description,imageUrl:r.imageUrl,link:r.link})},r.id)}const gA="/himikom.unan/assets/SnapInsta.to_549236315_17888673666346018_7845114067133122512_n-1K3c2fls.jpg",vA="/himikom.unan/assets/SnapInsta.to_551185456_17889326340346018_1737473372670203826_n-CwbH3V0K.jpg",_A="/himikom.unan/assets/SnapInsta.to_551348745_17889326349346018_2692914504738200842_n-ltDuOOVw.jpg",yA=Object.assign({"/src/assets/images/Performance/SnapInsta.to_549236315_17888673666346018_7845114067133122512_n.jpg":gA,"/src/assets/images/Performance/SnapInsta.to_551185456_17889326340346018_1737473372670203826_n.jpg":vA,"/src/assets/images/Performance/SnapInsta.to_551348745_17889326349346018_2692914504738200842_n.jpg":_A}),SA=r=>yA[`/src/assets/images/Performance/${r}`],bA=[{id:1,title:"Afif Kisnadhya Putra",subTitle:"Google Student Ambasador",imageUrl:"SnapInsta.to_549236315_17888673666346018_7845114067133122512_n.jpg",link:"/portfolio/devclass"},{id:2,title:"Muhammad Nabil M.",subTitle:"Nusantara Creative Competation",imageUrl:"SnapInsta.to_551185456_17889326340346018_1737473372670203826_n.jpg",link:"/portfolio/workshop-uiux"},{id:3,title:"Afif Kisnadhya Putra",subTitle:"Nusantara Creative Competation",imageUrl:"SnapInsta.to_551348745_17889326349346018_2692914504738200842_n.jpg",link:"/portfolio/esports"}],MA=()=>{const r=en.c(2);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsx("div",{className:"w-full fles justify-start",children:W.jsx(sl,{title:"Prestasi Mahasiswa"})}),r[0]=e):e=r[0];let i;return r[1]===Symbol.for("react.memo_cache_sentinel")?(i=W.jsxs("section",{className:"container flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-6",children:[e,W.jsx("div",{className:`\r
        grid \r
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 \r
        gap-8\r
        max-w-6xl mx-auto\r
      `,children:bA.map(EA)})]}),r[1]=i):i=r[1],i};function EA(r){return W.jsx("div",{className:"animate-fade-in-up",children:W.jsx(rA,{title:r.title,subTitle:r.subTitle,description:r.description,imageUrl:SA(r.imageUrl),link:r.link})},r.id)}const TA=()=>{const r=en.c(1);let e;return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsxs(W.Fragment,{children:[W.jsx(uA,{}),W.jsx(hA,{}),W.jsx(mA,{}),W.jsx(MA,{})]}),r[0]=e):e=r[0],e},AA=()=>{const r=en.c(1);let e;return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsx("svg",{className:"w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),r[0]=e):e=r[0],e},RA=()=>{const r=en.c(1);let e;return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsxs("svg",{className:"w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M12 21v-1m-4.243-4.243l.707.707"}),W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18a6 6 0 110-12 6 6 0 010 12z"})]}),r[0]=e):e=r[0],e},CA=()=>{const r=en.c(1);let e;return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsxs("svg",{className:"w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-2.37M17 20H7m10 0v-2c0-1.657-1.343-3-3-3H7m10 0v-2a3 3 0 00-3-3H7m0 10v2a3 3 0 003 3h3m-3-3v-2c0-1.657 1.343-3 3-3h3m-3 3c0-1.657 1.343-3 3-3h3v-2a3 3 0 00-3-3H7M7 4v2a3 3 0 003 3h3v2a3 3 0 003 3h3"}),W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14a3 3 0 100-6 3 3 0 000 6z"}),W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14a3 3 0 100-6 3 3 0 000 6zM12 8a3 3 0 100-6 3 3 0 000 6zM12 20a3 3 0 100-6 3 3 0 000 6zM12 8a3 3 0 100-6 3 3 0 000 6z"})]}),r[0]=e):e=r[0],e},wA=()=>{const r=en.c(12);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],r[0]=e):e=r[0],xe.useEffect(DA,e);let i;r[1]===Symbol.for("react.memo_cache_sentinel")?(i=W.jsxs("section",{className:`\r
        py-24 sm:py-32 \r
        text-center \r
        relative overflow-hidden\r
        container mx-auto px-4 sm:px-6 lg:px-8\r
      `,children:[W.jsxs("h1",{className:`\r
          text-5xl sm:text-6xl md:text-7xl font-extrabold \r
          text-gray-50\r
          mb-6\r
        `,children:["Mengenal HIMIKOM ",W.jsx("br",{}),"Lebih Dekat"]}),W.jsx("p",{className:`\r
          text-xl sm:text-2xl \r
          text-gray-200\r
          max-w-3xl mx-auto\r
        `,children:"Kami adalah denyut inovasi, kreativitas, dan kolaborasi di jantung Himpunan Mahasiswa Informatika."})]}),r[1]=i):i=r[1];let s;r[2]===Symbol.for("react.memo_cache_sentinel")?(s=W.jsxs("div",{className:"liquid-glass p-8 animate-fade-in-up delay-200",children:[W.jsx("h2",{className:"text-3xl font-bold text-gray-200 mb-4",children:"Visi Kami"}),W.jsx("p",{className:"text-lg text-gray-400",children:"Menjadi himpunan mahasiswa informatika yang unggul, inovatif, dan berdampak, serta mampu menciptakan ekosistem belajar yang mendukung perkembangan teknologi dan karakter."})]}),r[2]=s):s=r[2];let l;r[3]===Symbol.for("react.memo_cache_sentinel")?(l=W.jsx("h2",{className:"text-3xl font-bold text-gray-200 mb-4",children:"Misi Kami"}),r[3]=l):l=r[3];let c;r[4]===Symbol.for("react.memo_cache_sentinel")?(c=W.jsx("section",{className:"py-16 sm:py-20 container mx-auto px-4 sm:px-6 lg:px-8",children:W.jsxs("div",{className:"max-w-5xl mx-auto grid md:grid-cols-2 gap-8",children:[s,W.jsxs("div",{className:"liquid-glass p-8 animate-fade-in-up delay-400",children:[l,W.jsxs("ul",{className:`\r
              list-disc list-outside pl-5 \r
              space-y-2 \r
              text-lg text-gray-400\r
            `,children:[W.jsx("li",{children:"Menyelenggarakan pelatihan dan workshop untuk meningkatkan keahlian teknis."}),W.jsx("li",{children:"Mendorong budaya riset, inovasi, dan partisipasi dalam kompetisi."}),W.jsx("li",{children:"Membangun jaringan yang kuat antara mahasiswa, alumni, dan industri."}),W.jsx("li",{children:"Melaksanakan pengabdian masyarakat berbasis teknologi informasi."})]})]})]})}),r[4]=c):c=r[4];let d;r[5]===Symbol.for("react.memo_cache_sentinel")?(d=W.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12",children:[W.jsx("h2",{className:`\r
              text-4xl sm:text-5xl \r
              font-bold \r
              text-text-light dark:text-text-dark \r
              mb-4\r
            `,children:"Pilar Utama Kami"}),W.jsx("p",{className:`\r
              text-lg \r
              text-text-secondary-light dark:text-text-secondary-dark\r
            `,children:"Tiga fokus utama yang menggerakkan organisasi kami."})]}),r[5]=d):d=r[5];let h;r[6]===Symbol.for("react.memo_cache_sentinel")?(h=W.jsxs("div",{className:"liquid-glass p-6 text-center animate-fade-in-up delay-200",children:[W.jsx(AA,{}),W.jsx("h3",{className:"text-2xl font-bold text-gray-200 mb-2",children:"Edukasi & Workshop"}),W.jsx("p",{className:"text-gray-400",children:"Menyediakan platform belajar melalui DevClass, workshop, dan modul praktis untuk mengasah *hard skill*."})]}),r[6]=h):h=r[6];let m;r[7]===Symbol.for("react.memo_cache_sentinel")?(m=W.jsxs("div",{className:"liquid-glass p-6 text-center animate-fade-in-up delay-400",children:[W.jsx(RA,{}),W.jsx("h3",{className:"text-2xl font-bold text-gray-200 mb-2",children:"Inovasi & Kompetisi"}),W.jsx("p",{className:"text-gray-400",children:"Mendorong anggota untuk berani berinovasi, berkarya, dan berkompetisi di berbagai ajang teknologi."})]}),r[7]=m):m=r[7];let p;r[8]===Symbol.for("react.memo_cache_sentinel")?(p=W.jsx("section",{className:`\r
        py-16 sm:py-20 \r
        bg-glass-bg-light/50 dark:bg-glass-bg-dark/50 \r
        mt-16\r
      `,children:W.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[d,W.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-3 gap-8",children:[h,m,W.jsxs("div",{className:"liquid-glass p-6 text-center animate-fade-in-up delay-600",children:[W.jsx(CA,{}),W.jsx("h3",{className:"text-2xl font-bold text-gray-200 mb-2",children:"Komunitas & Jaringan"}),W.jsx("p",{className:"text-gray-400",children:"Membangun relasi yang kuat antar anggota, alumni, dan profesional industri untuk membuka peluang karir."})]})]})]})}),r[8]=p):p=r[8];let x,g;r[9]===Symbol.for("react.memo_cache_sentinel")?(g=W.jsx("h2",{className:`\r
          text-4xl sm:text-5xl \r
          font-bold \r
          text-gray-50\r
          mb-4\r
        `,children:"Jadilah Bagian dari Kami"}),x=W.jsx("p",{className:`\r
          text-lg \r
          text-gray-200\r
          mb-10 max-w-2xl mx-auto\r
        `,children:"Lihat karya-karya yang telah kami hasilkan atau baca wawasan terbaru dari komunitas kami."}),r[9]=x,r[10]=g):(x=r[9],g=r[10]);let y;return r[11]===Symbol.for("react.memo_cache_sentinel")?(y=W.jsxs("div",{className:"animate-fade-in-up",children:[i,c,p,W.jsxs("section",{className:`\r
        py-24 \r
        text-center \r
        container mx-auto \r
        px-4 sm:px-6 lg:px-8\r
      `,children:[g,x,W.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-4",children:[W.jsx(ar,{to:"/portfolio",variant:"primary",children:"Lihat Portfolio"}),W.jsx(ar,{to:"/artikel",variant:"glass",children:"Baca Artikel Kami"})]})]})]}),r[11]=y):y=r[11],y};function DA(){window.scrollTo(0,0)}const UA=[{id:1,slug:"mengenal-react-hooks",title:"Mengenal React Hooks: useState dan useEffect",excerpt:"Pelajari dasar-dasar React Hooks, dua hook paling penting (useState dan useEffect), dan bagaimana mereka mengubah cara kita...",imageUrl:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",author:"Divisi Web Dev",date:"2025-11-10",content:`
      <p>Pelajari dasar-dasar React Hooks, dua hook paling penting (useState dan useEffect), dan bagaimana mereka mengubah cara kita membangun komponen di React.</p>
      <p>Sebelum Hooks, kita menggunakan komponen kelas untuk mengelola state. Sekarang, dengan functional components, kita bisa 'hook' ke fitur-fitur React.</p>
      <h2>Apa itu useState?</h2>
      <p><code>useState</code> adalah hook yang memungkinkan Anda menambahkan state React ke komponen fungsional. Kita memanggilnya dengan nilai awal, dan ia mengembalikan array berisi nilai state saat ini dan fungsi untuk memperbaruinya.</p>
      <pre><code class="language-javascript">
const [count, setCount] = useState(0);
      </code></pre>
      <h2>Apa itu useEffect?</h2>
      <p><code>useEffect</code> memungkinkan Anda melakukan 'side effects' di komponen fungsional. Contoh side effects adalah mengambil data (fetching), mengatur subscription, atau memanipulasi DOM secara manual.</p>
    `},{id:2,slug:"panduan-desain-figma-untuk-pemula",title:"Panduan Desain Figma untuk Pemula",excerpt:"Figma telah menjadi standar industri untuk desain UI/UX. Panduan ini akan memandu Anda melalui fitur-fitur dasarnya...",imageUrl:"https://images.unsplash.com/photo-1635776062043-f85b81f337a6?w=400&q=80",author:"Divisi UI/UX",date:"2025-11-05",content:`
      <p>Figma telah menjadi standar industri untuk desain UI/UX. Panduan ini akan memandu Anda melalui fitur-fitur dasarnya, mulai dari frame, shape, hingga prototyping.</p>
      <h2>Mengapa Figma?</h2>
      <p>Figma berbasis cloud, yang berarti kolaborasi tim menjadi sangat mudah. Anda dapat bekerja dengan desainer lain secara real-time, sama seperti Google Docs.</p>
      <ul>
        <li>Kolaborasi Real-time</li>
        <li>Berjalan di browser (tidak perlu install)</li>
        <li>Fitur Prototyping yang kuat</li>
        <li>Komunitas plugin yang besar</li>
      </ul>
    `}],LA=[{id:1,slug:"Aditya Tri Susanto",title:"Aditya Tri Susanto",author:"Frontend Developer",imageUrl:"WhatsApp Image 2025-11-15 at 05.30.05_e9ea319b.jpg",tags:["Web App","React","Node.js"],link:"https://aditya-fend.vercel.app",content:"<p>Detail konten untuk Sistem Informasi Perpustakaan...</p>"}],NA=()=>{const r=en.c(2);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsx(sl,{title:"Artikel & Wawasan",subtitle:"Kumpulan tulisan, wawasan, dan tutorial terbaru dari anggota dan alumni HIMIKOM."}),r[0]=e):e=r[0];let i;return r[1]===Symbol.for("react.memo_cache_sentinel")?(i=W.jsxs("section",{className:"container flex flex-col gap-6 mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-16",children:[e,W.jsx("div",{className:`\r
        flex flex-col\r
        gap-8\r
        max-w-6xl mx-auto\r
      `,children:UA.map(OA)})]}),r[1]=i):i=r[1],i};function OA(r){return W.jsx("div",{className:"animate-fade-in-up",children:W.jsx(lA,{slug:r.slug,title:r.title,excerpt:r.excerpt,imageUrl:r.imageUrl,author:r.author,date:r.date})},r.id)}const PA="/himikom.unan/assets/WhatsApp%20Image%202025-11-15%20at%2005.30.05_e9ea319b-CtFszQVr.jpg",zA=Object.assign({"/src/assets/images/Portfolio/WhatsApp Image 2025-11-15 at 05.30.05_e9ea319b.jpg":PA}),FA=r=>zA[`/src/assets/images/Portfolio/${r}`],BA=()=>{const r=en.c(2);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsx(sl,{title:"Portfolio Mahasiswa",subtitle:"Inilah kumpulan Portfolio mahasiswa HIMIKOM."}),r[0]=e):e=r[0];let i;return r[1]===Symbol.for("react.memo_cache_sentinel")?(i=W.jsxs("div",{className:"container mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-8",children:[e,W.jsx("div",{className:`\r
        grid \r
        grid-cols-1 \r
        md:grid-cols-2  {/* <-- INI YANG MEMBUAT 2 KOLOM */}\r
        gap-8\r
        max-w-6xl mx-auto\r
      `,children:LA.map(IA)})]}),r[1]=i):i=r[1],i};function IA(r){return W.jsx("div",{className:"animate-fade-in-up",children:W.jsx(cA,{slug:r.slug,title:r.title,author:r.author,imageUrl:FA(r.imageUrl),tags:r.tags,link:r.link})},r.id)}const HA=()=>{const r=en.c(5);let e;r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsx(JT,{}),r[0]=e):e=r[0];let i;r[1]===Symbol.for("react.memo_cache_sentinel")?(i=W.jsx(Xo,{path:"/",element:W.jsx(TA,{})}),r[1]=i):i=r[1];let s;r[2]===Symbol.for("react.memo_cache_sentinel")?(s=W.jsx(Xo,{path:"/tentang-kami",element:W.jsx(wA,{})}),r[2]=s):s=r[2];let l;r[3]===Symbol.for("react.memo_cache_sentinel")?(l=W.jsx(Xo,{path:"/artikel",element:W.jsx(NA,{})}),r[3]=l):l=r[3];let c;return r[4]===Symbol.for("react.memo_cache_sentinel")?(c=W.jsxs(Cb,{basename:"/himikom.unan",children:[e,W.jsx($T,{children:W.jsxs(rb,{children:[i,s,l,W.jsx(Xo,{path:"/portfolio",element:W.jsx(BA,{})})]})})]}),r[4]=c):c=r[4],c};function GA(){const r=en.c(1);let e;return r[0]===Symbol.for("react.memo_cache_sentinel")?(e=W.jsx(HA,{}),r[0]=e):e=r[0],e}dS.createRoot(document.getElementById("root")).render(W.jsx(xe.StrictMode,{children:W.jsx(GA,{})}));
