(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var yd={exports:{}},Io={};var qx;function oS(){if(qx)return Io;qx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var Yx;function lS(){return Yx||(Yx=1,yd.exports=oS()),yd.exports}var N=lS(),Sd={exports:{}},st={};var Kx;function cS(){if(Kx)return st;Kx=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function M(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function v(z,se,be){this.props=z,this.context=se,this.refs=b,this.updater=be||E}v.prototype.isReactComponent={},v.prototype.setState=function(z,se){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,se,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function w(){}w.prototype=v.prototype;function U(z,se,be){this.props=z,this.context=se,this.refs=b,this.updater=be||E}var P=U.prototype=new w;P.constructor=U,T(P,v.prototype),P.isPureReactComponent=!0;var G=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function D(z,se,be){var Ae=be.ref;return{$$typeof:a,type:z,key:se,ref:Ae!==void 0?Ae:null,props:be}}function C(z,se){return D(z.type,se,z.props)}function k(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function $(z){var se={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(be){return se[be]})}var ue=/\/+/g;function he(z,se){return typeof z=="object"&&z!==null&&z.key!=null?$(""+z.key):se.toString(36)}function me(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(se){z.status==="pending"&&(z.status="fulfilled",z.value=se)},function(se){z.status==="pending"&&(z.status="rejected",z.reason=se)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,se,be,Ae,Pe){var re=typeof z;(re==="undefined"||re==="boolean")&&(z=null);var fe=!1;if(z===null)fe=!0;else switch(re){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(z.$$typeof){case a:case e:fe=!0;break;case x:return fe=z._init,I(fe(z._payload),se,be,Ae,Pe)}}if(fe)return Pe=Pe(z),fe=Ae===""?"."+he(z,0):Ae,G(Pe)?(be="",fe!=null&&(be=fe.replace(ue,"$&/")+"/"),I(Pe,se,be,"",function(We){return We})):Pe!=null&&(k(Pe)&&(Pe=C(Pe,be+(Pe.key==null||z&&z.key===Pe.key?"":(""+Pe.key).replace(ue,"$&/")+"/")+fe)),se.push(Pe)),1;fe=0;var Re=Ae===""?".":Ae+":";if(G(z))for(var Ge=0;Ge<z.length;Ge++)Ae=z[Ge],re=Re+he(Ae,Ge),fe+=I(Ae,se,be,re,Pe);else if(Ge=M(z),typeof Ge=="function")for(z=Ge.call(z),Ge=0;!(Ae=z.next()).done;)Ae=Ae.value,re=Re+he(Ae,Ge++),fe+=I(Ae,se,be,re,Pe);else if(re==="object"){if(typeof z.then=="function")return I(me(z),se,be,Ae,Pe);throw se=String(z),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return fe}function Z(z,se,be){if(z==null)return z;var Ae=[],Pe=0;return I(z,Ae,"","",function(re){return se.call(be,re,Pe++)}),Ae}function Y(z){if(z._status===-1){var se=z._result;se=se(),se.then(function(be){(z._status===0||z._status===-1)&&(z._status=1,z._result=be)},function(be){(z._status===0||z._status===-1)&&(z._status=2,z._result=be)}),z._status===-1&&(z._status=0,z._result=se)}if(z._status===1)return z._result.default;throw z._result}var ye=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Se={map:Z,forEach:function(z,se,be){Z(z,function(){se.apply(this,arguments)},be)},count:function(z){var se=0;return Z(z,function(){se++}),se},toArray:function(z){return Z(z,function(se){return se})||[]},only:function(z){if(!k(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return st.Activity=g,st.Children=Se,st.Component=v,st.Fragment=i,st.Profiler=l,st.PureComponent=U,st.StrictMode=s,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},st.cache=function(z){return function(){return z.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(z,se,be){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ae=T({},z.props),Pe=z.key;if(se!=null)for(re in se.key!==void 0&&(Pe=""+se.key),se)!J.call(se,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&se.ref===void 0||(Ae[re]=se[re]);var re=arguments.length-2;if(re===1)Ae.children=be;else if(1<re){for(var fe=Array(re),Re=0;Re<re;Re++)fe[Re]=arguments[Re+2];Ae.children=fe}return D(z.type,Pe,Ae)},st.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},st.createElement=function(z,se,be){var Ae,Pe={},re=null;if(se!=null)for(Ae in se.key!==void 0&&(re=""+se.key),se)J.call(se,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Pe[Ae]=se[Ae]);var fe=arguments.length-2;if(fe===1)Pe.children=be;else if(1<fe){for(var Re=Array(fe),Ge=0;Ge<fe;Ge++)Re[Ge]=arguments[Ge+2];Pe.children=Re}if(z&&z.defaultProps)for(Ae in fe=z.defaultProps,fe)Pe[Ae]===void 0&&(Pe[Ae]=fe[Ae]);return D(z,re,Pe)},st.createRef=function(){return{current:null}},st.forwardRef=function(z){return{$$typeof:h,render:z}},st.isValidElement=k,st.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:Y}},st.memo=function(z,se){return{$$typeof:p,type:z,compare:se===void 0?null:se}},st.startTransition=function(z){var se=F.T,be={};F.T=be;try{var Ae=z(),Pe=F.S;Pe!==null&&Pe(be,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(O,ye)}catch(re){ye(re)}finally{se!==null&&be.types!==null&&(se.types=be.types),F.T=se}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(z){return F.H.use(z)},st.useActionState=function(z,se,be){return F.H.useActionState(z,se,be)},st.useCallback=function(z,se){return F.H.useCallback(z,se)},st.useContext=function(z){return F.H.useContext(z)},st.useDebugValue=function(){},st.useDeferredValue=function(z,se){return F.H.useDeferredValue(z,se)},st.useEffect=function(z,se){return F.H.useEffect(z,se)},st.useEffectEvent=function(z){return F.H.useEffectEvent(z)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(z,se,be){return F.H.useImperativeHandle(z,se,be)},st.useInsertionEffect=function(z,se){return F.H.useInsertionEffect(z,se)},st.useLayoutEffect=function(z,se){return F.H.useLayoutEffect(z,se)},st.useMemo=function(z,se){return F.H.useMemo(z,se)},st.useOptimistic=function(z,se){return F.H.useOptimistic(z,se)},st.useReducer=function(z,se,be){return F.H.useReducer(z,se,be)},st.useRef=function(z){return F.H.useRef(z)},st.useState=function(z){return F.H.useState(z)},st.useSyncExternalStore=function(z,se,be){return F.H.useSyncExternalStore(z,se,be)},st.useTransition=function(){return F.H.useTransition()},st.version="19.2.0",st}var Zx;function su(){return Zx||(Zx=1,Sd.exports=cS()),Sd.exports}var xe=su(),bd={exports:{}},Fo={},Md={exports:{}},Ed={};var Qx;function uS(){return Qx||(Qx=1,(function(a){function e(I,Z){var Y=I.length;I.push(Z);e:for(;0<Y;){var ye=Y-1>>>1,Se=I[ye];if(0<l(Se,Z))I[ye]=Z,I[Y]=Se,Y=ye;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var Z=I[0],Y=I.pop();if(Y!==Z){I[0]=Y;e:for(var ye=0,Se=I.length,z=Se>>>1;ye<z;){var se=2*(ye+1)-1,be=I[se],Ae=se+1,Pe=I[Ae];if(0>l(be,Y))Ae<Se&&0>l(Pe,be)?(I[ye]=Pe,I[Ae]=Y,ye=Ae):(I[ye]=be,I[se]=Y,ye=se);else if(Ae<Se&&0>l(Pe,Y))I[ye]=Pe,I[Ae]=Y,ye=Ae;else break e}}return Z}function l(I,Z){var Y=I.sortIndex-Z.sortIndex;return Y!==0?Y:I.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var m=[],p=[],x=1,g=null,y=3,M=!1,E=!1,T=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function P(I){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=I)s(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function G(I){if(T=!1,P(I),!E)if(i(m)!==null)E=!0,O||(O=!0,$());else{var Z=i(p);Z!==null&&me(G,Z.startTime-I)}}var O=!1,F=-1,J=5,D=-1;function C(){return b?!0:!(a.unstable_now()-D<J)}function k(){if(b=!1,O){var I=a.unstable_now();D=I;var Z=!0;try{e:{E=!1,T&&(T=!1,w(F),F=-1),M=!0;var Y=y;try{t:{for(P(I),g=i(m);g!==null&&!(g.expirationTime>I&&C());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,y=g.priorityLevel;var Se=ye(g.expirationTime<=I);if(I=a.unstable_now(),typeof Se=="function"){g.callback=Se,P(I),Z=!0;break t}g===i(m)&&s(m),P(I)}else s(m);g=i(m)}if(g!==null)Z=!0;else{var z=i(p);z!==null&&me(G,z.startTime-I),Z=!1}}break e}finally{g=null,y=Y,M=!1}Z=void 0}}finally{Z?$():O=!1}}}var $;if(typeof U=="function")$=function(){U(k)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=k,$=function(){he.postMessage(null)}}else $=function(){v(k,0)};function me(I,Z){F=v(function(){I(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return y},a.unstable_next=function(I){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var Y=y;y=Z;try{return I()}finally{y=Y}},a.unstable_requestPaint=function(){b=!0},a.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=y;y=I;try{return Z()}finally{y=Y}},a.unstable_scheduleCallback=function(I,Z,Y){var ye=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ye+Y:ye):Y=ye,I){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Y+Se,I={id:x++,callback:Z,priorityLevel:I,startTime:Y,expirationTime:Se,sortIndex:-1},Y>ye?(I.sortIndex=Y,e(p,I),i(m)===null&&I===i(p)&&(T?(w(F),F=-1):T=!0,me(G,Y-ye))):(I.sortIndex=Se,e(m,I),E||M||(E=!0,O||(O=!0,$()))),I},a.unstable_shouldYield=C,a.unstable_wrapCallback=function(I){var Z=y;return function(){var Y=y;y=Z;try{return I.apply(this,arguments)}finally{y=Y}}}})(Ed)),Ed}var Jx;function fS(){return Jx||(Jx=1,Md.exports=uS()),Md.exports}var Td={exports:{}},Un={};var $x;function dS(){if($x)return Un;$x=1;var a=su();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Un.flushSync=function(m){var p=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=x,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,x){return f.H.useFormState(m,p,x)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.0",Un}var eg;function hS(){if(eg)return Td.exports;eg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Td.exports=dS(),Td.exports}var tg;function pS(){if(tg)return Fo;tg=1;var a=fS(),e=su(),i=hS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=d;else{for(var S=!1,A=u.child;A;){if(A===r){S=!0,r=u,o=d;break}if(A===o){S=!0,o=u,r=d;break}A=A.sibling}if(!S){for(A=d.child;A;){if(A===r){S=!0,r=d,o=u;break}if(A===o){S=!0,o=d,r=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case G:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case J:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var me=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ye=[],Se=-1;function z(t){return{current:t}}function se(t){0>Se||(t.current=ye[Se],ye[Se]=null,Se--)}function be(t,n){Se++,ye[Se]=t.current,t.current=n}var Ae=z(null),Pe=z(null),re=z(null),fe=z(null);function Re(t,n){switch(be(re,n),be(Pe,t),be(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?xx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=xx(n),t=gx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(Ae),be(Ae,t)}function Ge(){se(Ae),se(Pe),se(re)}function We(t){t.memoizedState!==null&&be(fe,t);var n=Ae.current,r=gx(n,t.type);n!==r&&(be(Pe,t),be(Ae,r))}function lt(t){Pe.current===t&&(se(Ae),se(Pe)),fe.current===t&&(se(fe),No._currentValue=Y)}var $t,ut;function Rt(t){if($t===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",ut=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+t+ut}var V=!1;function ft(t,n){if(!t||V)return"";V=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(le){var ae=le}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(le){ae=le}t.call(ve.prototype)}}else{try{throw Error()}catch(le){ae=le}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],A=d[1];if(S&&A){var B=S.split(`
`),te=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===te.length)for(o=B.length-1,u=te.length-1;1<=o&&0<=u&&B[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==te[u]){var pe=`
`+B[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{V=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Rt(r):""}function xt(t,n){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==n&&n!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return Rt("Activity");default:return""}}function vt(t){try{var n="",r=null;do n+=xt(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Be=Object.prototype.hasOwnProperty,Ht=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,it=a.unstable_shouldYield,L=a.unstable_requestPaint,_=a.unstable_now,H=a.unstable_getCurrentPriorityLevel,Q=a.unstable_ImmediatePriority,de=a.unstable_UserBlockingPriority,ie=a.unstable_NormalPriority,ze=a.unstable_LowPriority,Ue=a.unstable_IdlePriority,Ke=a.log,je=a.unstable_setDisableYieldValue,Me=null,Te=null;function Ze(t){if(typeof Ke=="function"&&je(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Me,t)}catch{}}var Xe=Math.clz32?Math.clz32:X,Ie=Math.log,at=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Ie(t)/at|0)|0}var Le=256,we=262144,De=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Ee(o):(S&=A,S!==0?u=Ee(S):r||(r=A&~t,r!==0&&(u=Ee(r))))):(A=o&~d,A!==0?u=Ee(A):S!==0?u=Ee(S):r||(r=o&~t,r!==0&&(u=Ee(r)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function rt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(){var t=De;return De<<=1,(De&62914560)===0&&(De=4194304),t}function Dt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qn(t,n,r,o,u,d){var S=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,te=t.hiddenUpdates;for(r=S&~r;0<r;){var pe=31-Xe(r),ve=1<<pe;A[pe]=0,B[pe]=-1;var ae=te[pe];if(ae!==null)for(te[pe]=null,pe=0;pe<ae.length;pe++){var le=ae[pe];le!==null&&(le.lane&=-536870913)}r&=~ve}o!==0&&cl(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function cl(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Xs(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Xe(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function js(t,n){var r=n&-n;return r=(r&42)!==0?1:gi(r),(r&(t.suspendedLanes|n))!==0?0:r}function gi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function lr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Hx(t.type))}function qs(t,n){var r=Z.p;try{return Z.p=t,n()}finally{Z.p=r}}var Yn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Yn,mn="__reactProps$"+Yn,ki="__reactContainer$"+Yn,Vr="__reactEvents$"+Yn,hu="__reactListeners$"+Yn,pu="__reactHandles$"+Yn,ul="__reactResources$"+Yn,cr="__reactMarker$"+Yn;function Ys(t){delete t[ln],delete t[mn],delete t[Vr],delete t[hu],delete t[pu]}function Aa(t){var n=t[ln];if(n)return n;for(var r=t.parentNode;r;){if(n=r[ki]||r[ln]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=Ex(t);t!==null;){if(r=t[ln])return r;t=Ex(t)}return n}t=r,r=t.parentNode}return null}function R(t){if(t=t[ln]||t[ki]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function W(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function oe(t){var n=t[ul];return n||(n=t[ul]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ne(t){t[cr]=!0}var K=new Set,Ce={};function Ne(t,n){Fe(t,n),Fe(t+"Capture",n)}function Fe(t,n){for(Ce[t]=n,t=0;t<n.length;t++)K.add(n[t])}var Ve=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},nt={};function Qe(t){return Be.call(nt,t)?!0:Be.call(et,t)?!1:Ve.test(t)?nt[t]=!0:(et[t]=!0,!1)}function ht(t,n,r){if(Qe(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function wt(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function Ut(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function Mt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function It(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){r=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=It(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function Et(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=It(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function yn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ra=/[\n"\\]/g;function Yt(t){return t.replace(Ra,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xi(t,n,r,o,u,d,S,A){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Mt(n)):t.value!==""+Mt(n)&&(t.value=""+Mt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,S,Mt(n)):r!=null?Sn(t,S,Mt(r)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Mt(A):t.removeAttribute("name")}function Kt(t,n,r,o,u,d,S,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Wt(t);return}r=r!=null?""+Mt(r):"",n=n!=null?""+Mt(n):r,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Wt(t)}function Sn(t,n,r){n==="number"&&yn(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function xn(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Mt(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function bn(t,n,r){if(n!=null&&(n=""+Mt(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Mt(r):""}function Tn(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(me(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Mt(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Wt(t)}function Ci(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var ji=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hp(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||ji.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function pp(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&hp(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&hp(t,d,n[d])}function mu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var i_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),a_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(t){return a_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var xu=null;function gu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gr=null,kr=null;function mp(t){var n=R(t);if(n&&(t=n.stateNode)){var r=t[mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Xi(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Yt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[mn]||null;if(!u)throw Error(s(90));Xi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Et(o)}break e;case"textarea":bn(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&xn(t,!!r.multiple,n,!1)}}}var vu=!1;function xp(t,n,r){if(vu)return t(n,r);vu=!0;try{var o=t(n);return o}finally{if(vu=!1,(Gr!==null||kr!==null)&&(Jl(),Gr&&(n=Gr,t=kr,kr=Gr=null,mp(n),t)))for(n=0;n<t.length;n++)mp(t[n])}}function Ks(t,n){var r=t.stateNode;if(r===null)return null;var o=r[mn]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(qi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{_u=!1}var Ca=null,yu=null,dl=null;function gp(){if(dl)return dl;var t,n=yu,r=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,d=u.length;for(t=0;t<r&&n[t]===u[t];t++);var S=r-t;for(o=1;o<=S&&n[r-o]===u[d-o];o++);return dl=u.slice(t,1<o?1-o:void 0)}function hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function vp(){return!1}function Fn(t){function n(r,o,u,d,S){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(r=t[A],this[A]=r?r(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?pl:vp,this.isPropagationStopped=vp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Fn(ur),Qs=g({},ur,{view:0,detail:0}),r_=Fn(Qs),Su,bu,Js,xl=g({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Su=t.screenX-Js.screenX,bu=t.screenY-Js.screenY):bu=Su=0,Js=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),_p=Fn(xl),s_=g({},xl,{dataTransfer:0}),o_=Fn(s_),l_=g({},Qs,{relatedTarget:0}),Mu=Fn(l_),c_=g({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),u_=Fn(c_),f_=g({},ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d_=Fn(f_),h_=g({},ur,{data:0}),yp=Fn(h_),p_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=x_[t])?!!n[t]:!1}function Eu(){return g_}var v_=g({},Qs,{key:function(t){if(t.key){var n=p_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),__=Fn(v_),y_=g({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=Fn(y_),S_=g({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),b_=Fn(S_),M_=g({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),E_=Fn(M_),T_=g({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A_=Fn(T_),R_=g({},ur,{newState:0,oldState:0}),C_=Fn(R_),w_=[9,13,27,32],Tu=qi&&"CompositionEvent"in window,$s=null;qi&&"documentMode"in document&&($s=document.documentMode);var D_=qi&&"TextEvent"in window&&!$s,bp=qi&&(!Tu||$s&&8<$s&&11>=$s),Mp=" ",Ep=!1;function Tp(t,n){switch(t){case"keyup":return w_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function U_(t,n){switch(t){case"compositionend":return Ap(n);case"keypress":return n.which!==32?null:(Ep=!0,Mp);case"textInput":return t=n.data,t===Mp&&Ep?null:t;default:return null}}function L_(t,n){if(Xr)return t==="compositionend"||!Tu&&Tp(t,n)?(t=gp(),dl=yu=Ca=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var N_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!N_[t.type]:n==="textarea"}function Cp(t,n,r,o){Gr?kr?kr.push(o):kr=[o]:Gr=o,n=rc(n,"onChange"),0<n.length&&(r=new ml("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var eo=null,to=null;function O_(t){ux(t,0)}function gl(t){var n=W(t);if(Et(n))return t}function wp(t,n){if(t==="change")return n}var Dp=!1;if(qi){var Au;if(qi){var Ru="oninput"in document;if(!Ru){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Ru=typeof Up.oninput=="function"}Au=Ru}else Au=!1;Dp=Au&&(!document.documentMode||9<document.documentMode)}function Lp(){eo&&(eo.detachEvent("onpropertychange",Np),to=eo=null)}function Np(t){if(t.propertyName==="value"&&gl(to)){var n=[];Cp(n,to,t,gu(t)),xp(O_,n)}}function P_(t,n,r){t==="focusin"?(Lp(),eo=n,to=r,eo.attachEvent("onpropertychange",Np)):t==="focusout"&&Lp()}function z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(to)}function I_(t,n){if(t==="click")return gl(n)}function F_(t,n){if(t==="input"||t==="change")return gl(n)}function B_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:B_;function no(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Be.call(n,u)||!Kn(t[u],n[u]))return!1}return!0}function Op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,n){var r=Op(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Op(r)}}function zp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?zp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yn(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=yn(t.document)}return n}function Cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var H_=qi&&"documentMode"in document&&11>=document.documentMode,jr=null,wu=null,io=null,Du=!1;function Fp(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Du||jr==null||jr!==yn(o)||(o=jr,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&no(io,o)||(io=o,o=rc(wu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=jr)))}function fr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var Wr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},Uu={},Bp={};qi&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function dr(t){if(Uu[t])return Uu[t];if(!Wr[t])return t;var n=Wr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in Bp)return Uu[t]=n[r];return t}var Hp=dr("animationend"),Vp=dr("animationiteration"),Gp=dr("animationstart"),V_=dr("transitionrun"),G_=dr("transitionstart"),k_=dr("transitioncancel"),kp=dr("transitionend"),Xp=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function vi(t,n){Xp.set(t,n),Ne(n,[t])}var vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],qr=0,Nu=0;function _l(){for(var t=qr,n=Nu=qr=0;n<t;){var r=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var d=si[n];if(si[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&jp(r,u,d)}}function yl(t,n,r,o){si[qr++]=t,si[qr++]=n,si[qr++]=r,si[qr++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ou(t,n,r,o){return yl(t,n,r,o),Sl(t)}function hr(t,n){return yl(t,null,null,n),Sl(t)}function jp(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,d=t.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Xe(r),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),d):null}function Sl(t){if(50<Ao)throw Ao=0,Xf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Yr={};function X_(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,r,o){return new X_(t,n,r,o)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,n){var r=t.alternate;return r===null?(r=Zn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Wp(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,r,o,u,d){var S=0;if(o=t,typeof t=="function")Pu(t)&&(S=1);else if(typeof t=="string")S=Ky(t,r,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Zn(31,r,n,u),t.elementType=D,t.lanes=d,t;case T:return pr(r.children,u,d,n);case b:S=8,u|=24;break;case v:return t=Zn(12,r,n,u|2),t.elementType=v,t.lanes=d,t;case G:return t=Zn(13,r,n,u),t.elementType=G,t.lanes=d,t;case O:return t=Zn(19,r,n,u),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:S=10;break e;case w:S=9;break e;case P:S=11;break e;case F:S=14;break e;case J:S=16,o=null;break e}S=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Zn(S,r,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function pr(t,n,r,o){return t=Zn(7,t,o,n),t.lanes=r,t}function zu(t,n,r){return t=Zn(6,t,null,n),t.lanes=r,t}function qp(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Iu(t,n,r){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Yp=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var r=Yp.get(t);return r!==void 0?r:(n={value:t,source:n,stack:vt(n)},Yp.set(t,n),n)}return{value:t,source:n,stack:vt(n)}}var Kr=[],Zr=0,Ml=null,ao=0,li=[],ci=0,wa=null,wi=1,Di="";function Ki(t,n){Kr[Zr++]=ao,Kr[Zr++]=Ml,Ml=t,ao=n}function Kp(t,n,r){li[ci++]=wi,li[ci++]=Di,li[ci++]=wa,wa=t;var o=wi;t=Di;var u=32-Xe(o)-1;o&=~(1<<u),r+=1;var d=32-Xe(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,wi=1<<32-Xe(n)+u|r<<u|o,Di=d+t}else wi=1<<d|r<<u|o,Di=t}function Fu(t){t.return!==null&&(Ki(t,1),Kp(t,1,0))}function Bu(t){for(;t===Ml;)Ml=Kr[--Zr],Kr[Zr]=null,ao=Kr[--Zr],Kr[Zr]=null;for(;t===wa;)wa=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null,wi=li[--ci],li[ci]=null}function Zp(t,n){li[ci++]=wi,li[ci++]=Di,li[ci++]=wa,wi=n.id,Di=n.overflow,wa=t}var An=null,Zt=null,Tt=!1,Da=null,ui=!1,Hu=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(oi(n,t)),Hu}function Qp(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[ln]=t,n[mn]=o,r){case"dialog":yt("cancel",n),yt("close",n);break;case"iframe":case"object":case"embed":yt("load",n);break;case"video":case"audio":for(r=0;r<Co.length;r++)yt(Co[r],n);break;case"source":yt("error",n);break;case"img":case"image":case"link":yt("error",n),yt("load",n);break;case"details":yt("toggle",n);break;case"input":yt("invalid",n),Kt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":yt("invalid",n);break;case"textarea":yt("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||px(n.textContent,r)?(o.popover!=null&&(yt("beforetoggle",n),yt("toggle",n)),o.onScroll!=null&&yt("scroll",n),o.onScrollEnd!=null&&yt("scrollend",n),o.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ua(t,!0)}function Jp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:An=An.return}}function Qr(t){if(t!==An)return!1;if(!Tt)return Jp(t),Tt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||rd(t.type,t.memoizedProps)),r=!r),r&&Zt&&Ua(t),Jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=Mx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Zt=Mx(t)}else n===27?(n=Zt,ja(t.type)?(t=ud,ud=null,Zt=t):Zt=n):Zt=An?di(t.stateNode.nextSibling):null;return!0}function mr(){Zt=An=null,Tt=!1}function Vu(){var t=Da;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),Da=null),t}function ro(t){Da===null?Da=[t]:Da.push(t)}var Gu=z(null),xr=null,Zi=null;function La(t,n,r){be(Gu,n._currentValue),n._currentValue=r}function Qi(t){t._currentValue=Gu.current,se(Gu)}function ku(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function Xu(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){d.lanes|=r,A=d.alternate,A!==null&&(A.lanes|=r),ku(d.return,r,t),o||(S=null);break e}d=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),ku(S,r,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Jr(t,n,r,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;Kn(u.pendingProps.value,S.value)||(t!==null?t.push(A):t=[A])}}else if(u===fe.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&Xu(n,t,r,o),n.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gr(t){xr=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return $p(xr,t)}function Tl(t,n){return xr===null&&gr(t),$p(t,n)}function $p(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Zi===null){if(t===null)throw Error(s(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return r}var j_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},W_=a.unstable_scheduleCallback,q_=a.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new j_,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&W_(q_,function(){t.controller.abort()})}var oo=null,Wu=0,$r=0,es=null;function Y_(t,n){if(oo===null){var r=oo=[];Wu=0,$r=Zf(),es={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Wu++,n.then(em,em),n}function em(){if(--Wu===0&&oo!==null){es!==null&&(es.status="fulfilled");var t=oo;oo=null,$r=0,es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function K_(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var tm=I.S;I.S=function(t,n){F0=_(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Y_(t,n),tm!==null&&tm(t,n)};var vr=z(null);function qu(){var t=vr.current;return t!==null?t:qt.pooledCache}function Al(t,n){n===null?be(vr,vr.current):be(vr,n.pool)}function nm(){var t=qu();return t===null?null:{parent:cn._currentValue,pool:t}}var ts=Error(s(460)),Yu=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function im(t){return t=t.status,t==="fulfilled"||t==="rejected"}function am(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Wi,Wi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sm(t),t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sm(t),t}throw yr=n,ts}}function _r(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(yr=r,ts):r}}var yr=null;function rm(){if(yr===null)throw Error(s(459));var t=yr;return yr=null,t}function sm(t){if(t===ts||t===Rl)throw Error(s(483))}var ns=null,lo=0;function wl(t){var n=lo;return lo+=1,ns===null&&(ns=[]),am(ns,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Dl(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function om(t){function n(q,j){if(t){var ee=q.deletions;ee===null?(q.deletions=[j],q.flags|=16):ee.push(j)}}function r(q,j){if(!t)return null;for(;j!==null;)n(q,j),j=j.sibling;return null}function o(q){for(var j=new Map;q!==null;)q.key!==null?j.set(q.key,q):j.set(q.index,q),q=q.sibling;return j}function u(q,j){return q=Yi(q,j),q.index=0,q.sibling=null,q}function d(q,j,ee){return q.index=ee,t?(ee=q.alternate,ee!==null?(ee=ee.index,ee<j?(q.flags|=67108866,j):ee):(q.flags|=67108866,j)):(q.flags|=1048576,j)}function S(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,j,ee,ge){return j===null||j.tag!==6?(j=zu(ee,q.mode,ge),j.return=q,j):(j=u(j,ee),j.return=q,j)}function B(q,j,ee,ge){var Je=ee.type;return Je===T?pe(q,j,ee.props.children,ge,ee.key):j!==null&&(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===J&&_r(Je)===j.type)?(j=u(j,ee.props),co(j,ee),j.return=q,j):(j=bl(ee.type,ee.key,ee.props,null,q.mode,ge),co(j,ee),j.return=q,j)}function te(q,j,ee,ge){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=Iu(ee,q.mode,ge),j.return=q,j):(j=u(j,ee.children||[]),j.return=q,j)}function pe(q,j,ee,ge,Je){return j===null||j.tag!==7?(j=pr(ee,q.mode,ge,Je),j.return=q,j):(j=u(j,ee),j.return=q,j)}function ve(q,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=zu(""+j,q.mode,ee),j.return=q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return ee=bl(j.type,j.key,j.props,null,q.mode,ee),co(ee,j),ee.return=q,ee;case E:return j=Iu(j,q.mode,ee),j.return=q,j;case J:return j=_r(j),ve(q,j,ee)}if(me(j)||$(j))return j=pr(j,q.mode,ee,null),j.return=q,j;if(typeof j.then=="function")return ve(q,wl(j),ee);if(j.$$typeof===U)return ve(q,Tl(q,j),ee);Dl(q,j)}return null}function ae(q,j,ee,ge){var Je=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Je!==null?null:A(q,j,""+ee,ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:return ee.key===Je?B(q,j,ee,ge):null;case E:return ee.key===Je?te(q,j,ee,ge):null;case J:return ee=_r(ee),ae(q,j,ee,ge)}if(me(ee)||$(ee))return Je!==null?null:pe(q,j,ee,ge,null);if(typeof ee.then=="function")return ae(q,j,wl(ee),ge);if(ee.$$typeof===U)return ae(q,j,Tl(q,ee),ge);Dl(q,ee)}return null}function le(q,j,ee,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return q=q.get(ee)||null,A(j,q,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return q=q.get(ge.key===null?ee:ge.key)||null,B(j,q,ge,Je);case E:return q=q.get(ge.key===null?ee:ge.key)||null,te(j,q,ge,Je);case J:return ge=_r(ge),le(q,j,ee,ge,Je)}if(me(ge)||$(ge))return q=q.get(ee)||null,pe(j,q,ge,Je,null);if(typeof ge.then=="function")return le(q,j,ee,wl(ge),Je);if(ge.$$typeof===U)return le(q,j,ee,Tl(j,ge),Je);Dl(j,ge)}return null}function ke(q,j,ee,ge){for(var Je=null,Lt=null,qe=j,pt=j=0,bt=null;qe!==null&&pt<ee.length;pt++){qe.index>pt?(bt=qe,qe=null):bt=qe.sibling;var Nt=ae(q,qe,ee[pt],ge);if(Nt===null){qe===null&&(qe=bt);break}t&&qe&&Nt.alternate===null&&n(q,qe),j=d(Nt,j,pt),Lt===null?Je=Nt:Lt.sibling=Nt,Lt=Nt,qe=bt}if(pt===ee.length)return r(q,qe),Tt&&Ki(q,pt),Je;if(qe===null){for(;pt<ee.length;pt++)qe=ve(q,ee[pt],ge),qe!==null&&(j=d(qe,j,pt),Lt===null?Je=qe:Lt.sibling=qe,Lt=qe);return Tt&&Ki(q,pt),Je}for(qe=o(qe);pt<ee.length;pt++)bt=le(qe,q,pt,ee[pt],ge),bt!==null&&(t&&bt.alternate!==null&&qe.delete(bt.key===null?pt:bt.key),j=d(bt,j,pt),Lt===null?Je=bt:Lt.sibling=bt,Lt=bt);return t&&qe.forEach(function(Za){return n(q,Za)}),Tt&&Ki(q,pt),Je}function tt(q,j,ee,ge){if(ee==null)throw Error(s(151));for(var Je=null,Lt=null,qe=j,pt=j=0,bt=null,Nt=ee.next();qe!==null&&!Nt.done;pt++,Nt=ee.next()){qe.index>pt?(bt=qe,qe=null):bt=qe.sibling;var Za=ae(q,qe,Nt.value,ge);if(Za===null){qe===null&&(qe=bt);break}t&&qe&&Za.alternate===null&&n(q,qe),j=d(Za,j,pt),Lt===null?Je=Za:Lt.sibling=Za,Lt=Za,qe=bt}if(Nt.done)return r(q,qe),Tt&&Ki(q,pt),Je;if(qe===null){for(;!Nt.done;pt++,Nt=ee.next())Nt=ve(q,Nt.value,ge),Nt!==null&&(j=d(Nt,j,pt),Lt===null?Je=Nt:Lt.sibling=Nt,Lt=Nt);return Tt&&Ki(q,pt),Je}for(qe=o(qe);!Nt.done;pt++,Nt=ee.next())Nt=le(qe,q,pt,Nt.value,ge),Nt!==null&&(t&&Nt.alternate!==null&&qe.delete(Nt.key===null?pt:Nt.key),j=d(Nt,j,pt),Lt===null?Je=Nt:Lt.sibling=Nt,Lt=Nt);return t&&qe.forEach(function(sS){return n(q,sS)}),Tt&&Ki(q,pt),Je}function Xt(q,j,ee,ge){if(typeof ee=="object"&&ee!==null&&ee.type===T&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case M:e:{for(var Je=ee.key;j!==null;){if(j.key===Je){if(Je=ee.type,Je===T){if(j.tag===7){r(q,j.sibling),ge=u(j,ee.props.children),ge.return=q,q=ge;break e}}else if(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===J&&_r(Je)===j.type){r(q,j.sibling),ge=u(j,ee.props),co(ge,ee),ge.return=q,q=ge;break e}r(q,j);break}else n(q,j);j=j.sibling}ee.type===T?(ge=pr(ee.props.children,q.mode,ge,ee.key),ge.return=q,q=ge):(ge=bl(ee.type,ee.key,ee.props,null,q.mode,ge),co(ge,ee),ge.return=q,q=ge)}return S(q);case E:e:{for(Je=ee.key;j!==null;){if(j.key===Je)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){r(q,j.sibling),ge=u(j,ee.children||[]),ge.return=q,q=ge;break e}else{r(q,j);break}else n(q,j);j=j.sibling}ge=Iu(ee,q.mode,ge),ge.return=q,q=ge}return S(q);case J:return ee=_r(ee),Xt(q,j,ee,ge)}if(me(ee))return ke(q,j,ee,ge);if($(ee)){if(Je=$(ee),typeof Je!="function")throw Error(s(150));return ee=Je.call(ee),tt(q,j,ee,ge)}if(typeof ee.then=="function")return Xt(q,j,wl(ee),ge);if(ee.$$typeof===U)return Xt(q,j,Tl(q,ee),ge);Dl(q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,j!==null&&j.tag===6?(r(q,j.sibling),ge=u(j,ee),ge.return=q,q=ge):(r(q,j),ge=zu(ee,q.mode,ge),ge.return=q,q=ge),S(q)):r(q,j)}return function(q,j,ee,ge){try{lo=0;var Je=Xt(q,j,ee,ge);return ns=null,Je}catch(qe){if(qe===ts||qe===Rl)throw qe;var Lt=Zn(29,qe,null,q.mode);return Lt.lanes=ge,Lt.return=q,Lt}finally{}}}var Sr=om(!0),lm=om(!1),Na=!1;function Ku(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(t),jp(t,null,r),n}return yl(t,o,n,r),Sl(t)}function uo(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Xs(t,r)}}function Qu(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?u=d=n:d=d.next=n}else u=d=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Ju=!1;function fo(){if(Ju){var t=es;if(t!==null)throw t}}function ho(t,n,r,o){Ju=!1;var u=t.updateQueue;Na=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,te=B.next;B.next=null,S===null?d=te:S.next=te,S=B;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==S&&(A===null?pe.firstBaseUpdate=te:A.next=te,pe.lastBaseUpdate=B))}if(d!==null){var ve=u.baseState;S=0,pe=te=B=null,A=d;do{var ae=A.lane&-536870913,le=ae!==A.lane;if(le?(St&ae)===ae:(o&ae)===ae){ae!==0&&ae===$r&&(Ju=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ke=t,tt=A;ae=n;var Xt=r;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){ve=ke.call(Xt,ve,ae);break e}ve=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,ae=typeof ke=="function"?ke.call(Xt,ve,ae):ke,ae==null)break e;ve=g({},ve,ae);break e;case 2:Na=!0}}ae=A.callback,ae!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(te=pe=le,B=ve):pe=pe.next=le,S|=ae;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;le=A,A=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);pe===null&&(B=ve),u.baseState=B,u.firstBaseUpdate=te,u.lastBaseUpdate=pe,d===null&&(u.shared.lanes=0),Ha|=S,t.lanes=S,t.memoizedState=ve}}function cm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function um(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)cm(r[t],n)}var is=z(null),Ul=z(0);function fm(t,n){t=sa,be(Ul,t),be(is,n),sa=t|n.baseLanes}function $u(){be(Ul,sa),be(is,is.current)}function ef(){sa=Ul.current,se(is),se(Ul)}var Qn=z(null),fi=null;function za(t){var n=t.alternate;be(rn,rn.current&1),be(Qn,t),fi===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(fi=t)}function tf(t){be(rn,rn.current),be(Qn,t),fi===null&&(fi=t)}function dm(t){t.tag===22?(be(rn,rn.current),be(Qn,t),fi===null&&(fi=t)):Ia()}function Ia(){be(rn,rn.current),be(Qn,Qn.current)}function Jn(t){se(Qn),fi===t&&(fi=null),se(rn)}var rn=z(0);function Ll(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||ld(r)||cd(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,dt=null,Gt=null,un=null,Nl=!1,as=!1,br=!1,Ol=0,po=0,rs=null,Z_=0;function tn(){throw Error(s(321))}function nf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Kn(t[r],n[r]))return!1;return!0}function af(t,n,r,o,u,d){return Ji=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Km:_f,br=!1,d=r(o,u),br=!1,as&&(d=pm(n,r,o,u)),hm(t),d}function hm(t){I.H=go;var n=Gt!==null&&Gt.next!==null;if(Ji=0,un=Gt=dt=null,Nl=!1,po=0,rs=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&El(t)&&(fn=!0))}function pm(t,n,r,o){dt=t;var u=0;do{if(as&&(rs=null),po=0,as=!1,25<=u)throw Error(s(301));if(u+=1,un=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=Zm,d=n(r,o)}while(as);return d}function Q_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(dt.flags|=1024),n}function rf(){var t=Ol!==0;return Ol=0,t}function sf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function of(t){if(Nl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Nl=!1}Ji=0,un=Gt=dt=null,as=!1,po=Ol=0,rs=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?dt.memoizedState=un=t:un=un.next=t,un}function sn(){if(Gt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=un===null?dt.memoizedState:un.next;if(n!==null)un=n,Gt=t;else{if(t===null)throw dt.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},un===null?dt.memoizedState=un=t:un=un.next=t}return un}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,rs===null&&(rs=[]),t=am(rs,t,n),n=dt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Km:_f),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===U)return Rn(t)}throw Error(s(438,String(t)))}function lf(t){var n=null,r=dt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Pl(),dt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=C;return n.index++,r}function $i(t,n){return typeof n=="function"?n(t):n}function Il(t){var n=sn();return cf(n,Gt,t)}function cf(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=S=null,B=null,te=n,pe=!1;do{var ve=te.lane&-536870913;if(ve!==te.lane?(St&ve)===ve:(Ji&ve)===ve){var ae=te.revertLane;if(ae===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),ve===$r&&(pe=!0);else if((Ji&ae)===ae){te=te.next,ae===$r&&(pe=!0);continue}else ve={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(A=B=ve,S=d):B=B.next=ve,dt.lanes|=ae,Ha|=ae;ve=te.action,br&&r(d,ve),d=te.hasEagerState?te.eagerState:r(d,ve)}else ae={lane:ve,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},B===null?(A=B=ae,S=d):B=B.next=ae,dt.lanes|=ve,Ha|=ve;te=te.next}while(te!==null&&te!==n);if(B===null?S=d:B.next=A,!Kn(d,t.memoizedState)&&(fn=!0,pe&&(r=es,r!==null)))throw r;t.memoizedState=d,t.baseState=S,t.baseQueue=B,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function uf(t){var n=sn(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,d=n.memoizedState;if(u!==null){r.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);Kn(d,n.memoizedState)||(fn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,o]}function mm(t,n,r){var o=dt,u=sn(),d=Tt;if(d){if(r===void 0)throw Error(s(407));r=r()}else r=n();var S=!Kn((Gt||u).memoizedState,r);if(S&&(u.memoizedState=r,fn=!0),u=u.queue,hf(vm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},gm.bind(null,o,u,r,n),null),qt===null)throw Error(s(349));d||(Ji&127)!==0||xm(o,n,r)}return r}function xm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=dt.updateQueue,n===null?(n=Pl(),dt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function gm(t,n,r,o){n.value=r,n.getSnapshot=o,_m(n)&&ym(t)}function vm(t,n,r){return r(function(){_m(n)&&ym(t)})}function _m(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Kn(t,r)}catch{return!0}}function ym(t){var n=hr(t,2);n!==null&&kn(n,t,2)}function ff(t){var n=Pn();if(typeof t=="function"){var r=t;if(t=r(),br){Ze(!0);try{r()}finally{Ze(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},n}function Sm(t,n,r,o){return t.baseState=r,cf(t,Gt,typeof o=="function"?o:$i)}function J_(t,n,r,o,u){if(Hl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};I.T!==null?r(!0):d.isTransition=!1,o(d),r=n.pending,r===null?(d.next=n.pending=d,bm(n,d)):(d.next=r.next,n.pending=r.next=d)}}function bm(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=I.T,S={};I.T=S;try{var A=r(u,o),B=I.S;B!==null&&B(S,A),Mm(t,n,A)}catch(te){df(t,n,te)}finally{d!==null&&S.types!==null&&(d.types=S.types),I.T=d}}else try{d=r(u,o),Mm(t,n,d)}catch(te){df(t,n,te)}}function Mm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Em(t,n,o)},function(o){return df(t,n,o)}):Em(t,n,r)}function Em(t,n,r){n.status="fulfilled",n.value=r,Tm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,bm(t,r)))}function df(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Tm(n),n=n.next;while(n!==o)}t.action=null}function Tm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Am(t,n){return n}function Rm(t,n){if(Tt){var r=qt.formState;if(r!==null){e:{var o=dt;if(Tt){if(Zt){t:{for(var u=Zt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Zt=di(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=r[0])}}return r=Pn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Am,lastRenderedState:n},r.queue=o,r=Wm.bind(null,dt,o),o.dispatch=r,o=ff(!1),d=vf.bind(null,dt,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=J_.bind(null,dt,u,d,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function Cm(t){var n=sn();return wm(n,Gt,t)}function wm(t,n,r){if(n=cf(t,n,Am)[0],t=Il($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=mo(n)}catch(S){throw S===ts?Rl:S}else o=n;n=sn();var u=n.queue,d=u.dispatch;return r!==n.memoizedState&&(dt.flags|=2048,ss(9,{destroy:void 0},$_.bind(null,u,r),null)),[o,d,t]}function $_(t,n){t.action=n}function Dm(t){var n=sn(),r=Gt;if(r!==null)return wm(n,r,t);sn(),n=n.memoizedState,r=sn();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function ss(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Pl(),dt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Um(){return sn().memoizedState}function Fl(t,n,r,o){var u=Pn();dt.flags|=t,u.memoizedState=ss(1|n,{destroy:void 0},r,o===void 0?null:o)}function Bl(t,n,r,o){var u=sn();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&nf(o,Gt.memoizedState.deps)?u.memoizedState=ss(n,d,r,o):(dt.flags|=t,u.memoizedState=ss(1|n,d,r,o))}function Lm(t,n){Fl(8390656,8,t,n)}function hf(t,n){Bl(2048,8,t,n)}function ey(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Pl(),dt.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function Nm(t){var n=sn().memoizedState;return ey({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Om(t,n){return Bl(4,2,t,n)}function Pm(t,n){return Bl(4,4,t,n)}function zm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Im(t,n,r){r=r!=null?r.concat([t]):null,Bl(4,4,zm.bind(null,n,t),r)}function pf(){}function Fm(t,n){var r=sn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function Bm(t,n){var r=sn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=t(),br){Ze(!0);try{t()}finally{Ze(!1)}}return r.memoizedState=[o,n],o}function mf(t,n,r){return r===void 0||(Ji&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=H0(),dt.lanes|=t,Ha|=t,r)}function Hm(t,n,r,o){return Kn(r,n)?r:is.current!==null?(t=mf(t,r,o),Kn(t,n)||(fn=!0),t):(Ji&42)===0||(Ji&1073741824)!==0&&(St&261930)===0?(fn=!0,t.memoizedState=r):(t=H0(),dt.lanes|=t,Ha|=t,n)}function Vm(t,n,r,o,u){var d=Z.p;Z.p=d!==0&&8>d?d:8;var S=I.T,A={};I.T=A,vf(t,!1,n,r);try{var B=u(),te=I.S;if(te!==null&&te(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pe=K_(B,o);xo(t,n,pe,ti(t))}else xo(t,n,o,ti(t))}catch(ve){xo(t,n,{then:function(){},status:"rejected",reason:ve},ti())}finally{Z.p=d,S!==null&&A.types!==null&&(S.types=A.types),I.T=S}}function ty(){}function xf(t,n,r,o){if(t.tag!==5)throw Error(s(476));var u=Gm(t).queue;Vm(t,u,n,Y,r===null?ty:function(){return km(t),r(o)})}function Gm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:Y},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function km(t){var n=Gm(t);n.next===null&&(n=t.alternate.memoizedState),xo(t,n.next.queue,{},ti())}function gf(){return Rn(No)}function Xm(){return sn().memoizedState}function jm(){return sn().memoizedState}function ny(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=ti();t=Oa(r);var o=Pa(n,t,r);o!==null&&(kn(o,n,r),uo(o,n,r)),n={cache:ju()},t.payload=n;return}n=n.return}}function iy(t,n,r){var o=ti();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Hl(t)?qm(n,r):(r=Ou(t,n,r,o),r!==null&&(kn(r,t,o),Ym(r,n,o)))}function Wm(t,n,r){var o=ti();xo(t,n,r,o)}function xo(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Hl(t))qm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,A=d(S,r);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,S))return yl(t,n,u,0),qt===null&&_l(),!1}catch{}finally{}if(r=Ou(t,n,u,o),r!==null)return kn(r,t,o),Ym(r,n,o),!0}return!1}function vf(t,n,r,o){if(o={lane:2,revertLane:Zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(t)){if(n)throw Error(s(479))}else n=Ou(t,r,o,2),n!==null&&kn(n,t,2)}function Hl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function qm(t,n){as=Nl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Ym(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Xs(t,r)}}var go={readContext:Rn,use:zl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};go.useEffectEvent=tn;var Km={readContext:Rn,use:zl,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Lm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Fl(4194308,4,zm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Fl(4194308,4,t,n)},useInsertionEffect:function(t,n){Fl(4,2,t,n)},useMemo:function(t,n){var r=Pn();n=n===void 0?null:n;var o=t();if(br){Ze(!0);try{t()}finally{Ze(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Pn();if(r!==void 0){var u=r(n);if(br){Ze(!0);try{r(n)}finally{Ze(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=iy.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=ff(t);var n=t.queue,r=Wm.bind(null,dt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:pf,useDeferredValue:function(t,n){var r=Pn();return mf(r,t,n)},useTransition:function(){var t=ff(!1);return t=Vm.bind(null,dt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=dt,u=Pn();if(Tt){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),qt===null)throw Error(s(349));(St&127)!==0||xm(o,n,r)}u.memoizedState=r;var d={value:r,getSnapshot:n};return u.queue=d,Lm(vm.bind(null,o,d,t),[t]),o.flags|=2048,ss(9,{destroy:void 0},gm.bind(null,o,d,r,n),null),r},useId:function(){var t=Pn(),n=qt.identifierPrefix;if(Tt){var r=Di,o=wi;r=(o&~(1<<32-Xe(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Ol++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=Z_++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:gf,useFormState:Rm,useActionState:Rm,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=vf.bind(null,dt,!0,r),r.dispatch=n,[t,n]},useMemoCache:lf,useCacheRefresh:function(){return Pn().memoizedState=ny.bind(null,dt)},useEffectEvent:function(t){var n=Pn(),r={impl:t};return n.memoizedState=r,function(){if((Pt&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},_f={readContext:Rn,use:zl,useCallback:Fm,useContext:Rn,useEffect:hf,useImperativeHandle:Im,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Bm,useReducer:Il,useRef:Um,useState:function(){return Il($i)},useDebugValue:pf,useDeferredValue:function(t,n){var r=sn();return Hm(r,Gt.memoizedState,t,n)},useTransition:function(){var t=Il($i)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:mm,useId:Xm,useHostTransitionStatus:gf,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var r=sn();return Sm(r,Gt,t,n)},useMemoCache:lf,useCacheRefresh:jm};_f.useEffectEvent=Nm;var Zm={readContext:Rn,use:zl,useCallback:Fm,useContext:Rn,useEffect:hf,useImperativeHandle:Im,useInsertionEffect:Om,useLayoutEffect:Pm,useMemo:Bm,useReducer:uf,useRef:Um,useState:function(){return uf($i)},useDebugValue:pf,useDeferredValue:function(t,n){var r=sn();return Gt===null?mf(r,t,n):Hm(r,Gt.memoizedState,t,n)},useTransition:function(){var t=uf($i)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:mm,useId:Xm,useHostTransitionStatus:gf,useFormState:Dm,useActionState:Dm,useOptimistic:function(t,n){var r=sn();return Gt!==null?Sm(r,Gt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:lf,useCacheRefresh:jm};Zm.useEffectEvent=Nm;function yf(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Sf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=ti(),u=Oa(o);u.payload=n,r!=null&&(u.callback=r),n=Pa(t,u,o),n!==null&&(kn(n,t,o),uo(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=ti(),u=Oa(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Pa(t,u,o),n!==null&&(kn(n,t,o),uo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=ti(),o=Oa(r);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,r),n!==null&&(kn(n,t,r),uo(n,t,r))}};function Qm(t,n,r,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!no(r,o)||!no(u,d):!0}function Jm(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&Sf.enqueueReplaceState(n,n.state,null)}function Mr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function $m(t){vl(t)}function e0(t){console.error(t)}function t0(t){vl(t)}function Vl(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function n0(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function bf(t,n,r){return r=Oa(r),r.tag=3,r.payload={element:null},r.callback=function(){Vl(t,n)},r}function i0(t){return t=Oa(t),t.tag=3,t}function a0(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){n0(n,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){n0(n,r,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function ay(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Jr(n,r,u,!0),r=Qn.current,r!==null){switch(r.tag){case 31:case 13:return fi===null?$l():r.alternate===null&&nn===0&&(nn=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Cl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),qf(t,o,u)),!1;case 22:return r.flags|=65536,o===Cl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),qf(t,o,u)),!1}throw Error(s(435,r.tag))}return qf(t,o,u),$l(),!1}if(Tt)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(t=Error(s(422),{cause:o}),ro(oi(t,r)))):(o!==Hu&&(n=Error(s(423),{cause:o}),ro(oi(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,r),u=bf(t.stateNode,o,u),Qu(t,u),nn!==4&&(nn=2)),!1;var d=Error(s(520),{cause:o});if(d=oi(d,r),To===null?To=[d]:To.push(d),nn!==4&&(nn=2),n===null)return!0;o=oi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=bf(r.stateNode,o,t),Qu(r,t),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Va===null||!Va.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=i0(u),a0(u,t,r,o),Qu(r,u),!1}r=r.return}while(r!==null);return!1}var Mf=Error(s(461)),fn=!1;function Cn(t,n,r,o){n.child=t===null?lm(n,null,r,o):Sr(n,t.child,r,o)}function r0(t,n,r,o,u){r=r.render;var d=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return gr(n),o=af(t,n,r,S,d,u),A=rf(),t!==null&&!fn?(sf(t,n,u),ea(t,n,u)):(Tt&&A&&Fu(n),n.flags|=1,Cn(t,n,o,u),n.child)}function s0(t,n,r,o,u){if(t===null){var d=r.type;return typeof d=="function"&&!Pu(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,o0(t,n,d,o,u)):(t=bl(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Uf(t,u)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:no,r(S,o)&&t.ref===n.ref)return ea(t,n,u)}return n.flags|=1,t=Yi(d,o),t.ref=n.ref,t.return=n,n.child=t}function o0(t,n,r,o,u){if(t!==null){var d=t.memoizedProps;if(no(d,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=d,Uf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,ea(t,n,u)}return Ef(t,n,r,o,u)}function l0(t,n,r,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return c0(t,n,d,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(n,d!==null?d.cachePool:null),d!==null?fm(n,d):$u(),dm(n);else return o=n.lanes=536870912,c0(t,n,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(Al(n,d.cachePool),fm(n,d),Ia(),n.memoizedState=null):(t!==null&&Al(n,null),$u(),Ia());return Cn(t,n,u,r),n.child}function vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function c0(t,n,r,o,u){var d=qu();return d=d===null?null:{parent:cn._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},t!==null&&Al(n,null),$u(),dm(n),t!==null&&Jr(t,n,o,!0),n.childLanes=u,null}function Gl(t,n){return n=Xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function u0(t,n,r){return Sr(n,t.child,null,r),t=Gl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function ry(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=Gl(n,o),n.lanes=536870912,vo(null,t);if(tf(n),(t=Zt)?(t=bx(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},r=qp(t),r.return=n,n.child=r,An=n,Zt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Gl(n,o)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(tf(n),u)if(n.flags&256)n.flags&=-257,n=u0(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Jr(t,n,r,!1),u=(r&t.childLanes)!==0,fn||u){if(o=qt,o!==null&&(S=js(o,r),S!==0&&S!==d.retryLane))throw d.retryLane=S,hr(t,S),kn(o,t,S),Mf;$l(),n=u0(t,n,r)}else t=d.treeContext,Zt=di(S.nextSibling),An=n,Tt=!0,Da=null,ui=!1,t!==null&&Zp(n,t),n=Gl(n,o),n.flags|=4096;return n}return t=Yi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function kl(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function Ef(t,n,r,o,u){return gr(n),r=af(t,n,r,o,void 0,u),o=rf(),t!==null&&!fn?(sf(t,n,u),ea(t,n,u)):(Tt&&o&&Fu(n),n.flags|=1,Cn(t,n,r,u),n.child)}function f0(t,n,r,o,u,d){return gr(n),n.updateQueue=null,r=pm(n,o,r,u),hm(t),o=rf(),t!==null&&!fn?(sf(t,n,d),ea(t,n,d)):(Tt&&o&&Fu(n),n.flags|=1,Cn(t,n,r,d),n.child)}function d0(t,n,r,o,u){if(gr(n),n.stateNode===null){var d=Yr,S=r.contextType;typeof S=="object"&&S!==null&&(d=Rn(S)),d=new r(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Sf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ku(n),S=r.contextType,d.context=typeof S=="object"&&S!==null?Rn(S):Yr,d.state=n.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(yf(n,r,S,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Sf.enqueueReplaceState(d,d.state,null),ho(n,o,d,u),fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,B=Mr(r,A);d.props=B;var te=d.context,pe=r.contextType;S=Yr,typeof pe=="object"&&pe!==null&&(S=Rn(pe));var ve=r.getDerivedStateFromProps;pe=typeof ve=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||te!==S)&&Jm(n,d,o,S),Na=!1;var ae=n.memoizedState;d.state=ae,ho(n,o,d,u),fo(),te=n.memoizedState,A||ae!==te||Na?(typeof ve=="function"&&(yf(n,r,ve,o),te=n.memoizedState),(B=Na||Qm(n,r,B,o,ae,te,S))?(pe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),d.props=o,d.state=te,d.context=S,o=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Zu(t,n),S=n.memoizedProps,pe=Mr(r,S),d.props=pe,ve=n.pendingProps,ae=d.context,te=r.contextType,B=Yr,typeof te=="object"&&te!==null&&(B=Rn(te)),A=r.getDerivedStateFromProps,(te=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==ve||ae!==B)&&Jm(n,d,o,B),Na=!1,ae=n.memoizedState,d.state=ae,ho(n,o,d,u),fo();var le=n.memoizedState;S!==ve||ae!==le||Na||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof A=="function"&&(yf(n,r,A,o),le=n.memoizedState),(pe=Na||Qm(n,r,pe,o,ae,le,B)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(te||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,le,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,le,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=B,o=pe):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,kl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Sr(n,t.child,null,u),n.child=Sr(n,null,r,u)):Cn(t,n,r,u),n.memoizedState=d.state,t=n.child):t=ea(t,n,u),t}function h0(t,n,r,o){return mr(),n.flags|=256,Cn(t,n,r,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(t){return{baseLanes:t,cachePool:nm()}}function Rf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=ei),t}function p0(t,n,r){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(u?za(n):Ia(),(t=Zt)?(t=bx(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},r=qp(t),r.return=n,n.child=r,An=n,Zt=null)):t=null,t===null)throw Ua(n);return cd(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ia(),u=n.mode,A=Xl({mode:"hidden",children:A},u),o=pr(o,u,r,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Af(r),o.childLanes=Rf(t,S,r),n.memoizedState=Tf,vo(null,o)):(za(n),Cf(n,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(d)n.flags&256?(za(n),n.flags&=-257,n=wf(t,n,r)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),A=o.fallback,u=n.mode,o=Xl({mode:"visible",children:o.children},u),A=pr(A,u,r,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Sr(n,t.child,null,r),o=n.child,o.memoizedState=Af(r),o.childLanes=Rf(t,S,r),n.memoizedState=Tf,n=vo(null,o));else if(za(n),cd(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var te=S.dgst;S=te,o=Error(s(419)),o.stack="",o.digest=S,ro({value:o,source:null,stack:null}),n=wf(t,n,r)}else if(fn||Jr(t,n,r,!1),S=(r&t.childLanes)!==0,fn||S){if(S=qt,S!==null&&(o=js(S,r),o!==0&&o!==B.retryLane))throw B.retryLane=o,hr(t,o),kn(S,t,o),Mf;ld(A)||$l(),n=wf(t,n,r)}else ld(A)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Zt=di(A.nextSibling),An=n,Tt=!0,Da=null,ui=!1,t!==null&&Zp(n,t),n=Cf(n,o.children),n.flags|=4096);return n}return u?(Ia(),A=o.fallback,u=n.mode,B=t.child,te=B.sibling,o=Yi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,te!==null?A=Yi(te,A):(A=pr(A,u,r,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,vo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Af(r):(u=A.cachePool,u!==null?(B=cn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=nm(),A={baseLanes:A.baseLanes|r,cachePool:u}),o.memoizedState=A,o.childLanes=Rf(t,S,r),n.memoizedState=Tf,vo(t.child,o)):(za(n),r=t.child,t=r.sibling,r=Yi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=r,n.memoizedState=null,r)}function Cf(t,n){return n=Xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Xl(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function wf(t,n,r){return Sr(n,t.child,null,r),t=Cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function m0(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ku(t.return,n,r)}function Df(t,n,r,o,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=r,S.tailMode=u,S.treeForkCount=d)}function x0(t,n,r){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=rn.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,be(rn,S),Cn(t,n,o,r),o=Tt?ao:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&m0(t,r,n);else if(t.tag===19)m0(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&Ll(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Df(n,!1,u,r,d,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ll(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Df(n,!0,r,null,d,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ea(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Jr(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=Yi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Yi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function sy(t,n,r){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),La(n,cn,t.memoizedState.cache),mr();break;case 27:case 5:We(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,tf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(r&n.child.childLanes)!==0?p0(t,n,r):(za(n),t=ea(t,n,r),t!==null?t.sibling:null);za(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Jr(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return x0(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(rn,rn.current),o)break;return null;case 22:return n.lanes=0,l0(t,n,r,n.pendingProps);case 24:La(n,cn,t.memoizedState.cache)}return ea(t,n,r)}function g0(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Uf(t,r)&&(n.flags&128)===0)return fn=!1,sy(t,n,r);fn=(t.flags&131072)!==0}else fn=!1,Tt&&(n.flags&1048576)!==0&&Kp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=_r(n.elementType),n.type=t,typeof t=="function")Pu(t)?(o=Mr(t,o),n.tag=1,n=d0(null,n,t,o,r)):(n.tag=0,n=Ef(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=r0(null,n,t,o,r);break e}else if(u===F){n.tag=14,n=s0(null,n,t,o,r);break e}}throw n=he(t)||t,Error(s(306,n,""))}}return n;case 0:return Ef(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=Mr(o,n.pendingProps),d0(t,n,o,u,r);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Zu(t,n),ho(n,o,null,r);var S=n.memoizedState;if(o=S.cache,La(n,cn,o),o!==d.cache&&Xu(n,[cn],r,!0),fo(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=h0(t,n,o,r);break e}else if(o!==u){u=oi(Error(s(424)),n),ro(u),n=h0(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=di(t.firstChild),An=n,Tt=!0,Da=null,ui=!0,r=lm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(mr(),o===u){n=ea(t,n,r);break e}Cn(t,n,o,r)}n=n.child}return n;case 26:return kl(t,n),t===null?(r=Cx(n.type,null,n.pendingProps,null))?n.memoizedState=r:Tt||(r=n.type,t=n.pendingProps,o=sc(re.current).createElement(r),o[ln]=n,o[mn]=t,wn(o,r,t),ne(o),n.stateNode=o):n.memoizedState=Cx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return We(n),t===null&&Tt&&(o=n.stateNode=Tx(n.type,n.pendingProps,re.current),An=n,ui=!0,u=Zt,ja(n.type)?(ud=u,Zt=di(o.firstChild)):Zt=u),Cn(t,n,n.pendingProps.children,r),kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((u=o=Zt)&&(o=zy(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,An=n,Zt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Ua(n)),We(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,rd(u,d)?o=null:S!==null&&rd(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=af(t,n,Q_,null,null,r),No._currentValue=u),kl(t,n),Cn(t,n,o,r),n.child;case 6:return t===null&&Tt&&((t=r=Zt)&&(r=Iy(r,n.pendingProps,ui),r!==null?(n.stateNode=r,An=n,Zt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return p0(t,n,r);case 4:return Re(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Sr(n,null,o,r):Cn(t,n,o,r),n.child;case 11:return r0(t,n,n.type,n.pendingProps,r);case 7:return Cn(t,n,n.pendingProps,r),n.child;case 8:return Cn(t,n,n.pendingProps.children,r),n.child;case 12:return Cn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Cn(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(t,n,o,r),n.child;case 14:return s0(t,n,n.type,n.pendingProps,r);case 15:return o0(t,n,n.type,n.pendingProps,r);case 19:return x0(t,n,r);case 31:return ry(t,n,r);case 22:return l0(t,n,r,n.pendingProps);case 24:return gr(n),o=Rn(cn),t===null?(u=qu(),u===null&&(u=qt,d=ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),n.memoizedState={parent:o,cache:u},Ku(n),La(n,cn,u)):((t.lanes&r)!==0&&(Zu(t,n),ho(n,null,null,r),fo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,cn,o)):(o=d.cache,La(n,cn,o),o!==u.cache&&Xu(n,[cn],r,!0))),Cn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ta(t){t.flags|=4}function Lf(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(X0())t.flags|=8192;else throw yr=Cl,Yu}else t.flags&=-16777217}function v0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Nx(n))if(X0())t.flags|=8192;else throw yr=Cl,Yu}function jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Vt():536870912,t.lanes|=n,us|=n)}function _o(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function oy(t,n,r){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(cn),Ge(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),Qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ta(n),d!==null?(Qt(n),v0(n,d)):(Qt(n),Lf(n,u,null,o,r))):d?d!==t.memoizedState?(ta(n),Qt(n),v0(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ta(n),Qt(n),Lf(n,u,t,o,r)),null;case 27:if(lt(n),r=re.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}t=Ae.current,Qr(n)?Qp(n):(t=Tx(u,o,r),n.stateNode=t,ta(n))}return Qt(n),null;case 5:if(lt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(d=Ae.current,Qr(n))Qp(n);else{var S=sc(re.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[ln]=n,d[mn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(wn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ta(n)}}return Qt(n),Lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=re.current,Qr(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||px(t.nodeValue,r)),t||Ua(n,!0)}else t=sc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Qt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qr(n),r!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else r=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Vu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),jl(n,n.updateQueue),Qt(n),null);case 4:return Ge(),t===null&&ed(n.stateNode.containerInfo),Qt(n),null;case 10:return Qi(n.type),Qt(n),null;case 19:if(se(rn),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)_o(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Ll(t),d!==null){for(n.flags|=128,_o(o,!1),t=d.updateQueue,n.updateQueue=t,jl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Wp(r,t),r=r.sibling;return be(rn,rn.current&1|2),Tt&&Ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&_()>Zl&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ll(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,jl(n,t),_o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Tt)return Qt(n),null}else 2*_()-o.renderingStartTime>Zl&&r!==536870912&&(n.flags|=128,u=!0,_o(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=_(),t.sibling=null,r=rn.current,be(rn,u?r&1|2:r&1),Tt&&Ki(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return Jn(n),ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),r=n.updateQueue,r!==null&&jl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&se(vr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Qi(cn),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ly(t,n){switch(Bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(cn),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return se(rn),null;case 4:return Ge(),null;case 10:return Qi(n.type),null;case 22:case 23:return Jn(n),ef(),t!==null&&se(vr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(cn),null;case 25:return null;default:return null}}function _0(t,n){switch(Bu(n),n.tag){case 3:Qi(cn),Ge();break;case 26:case 27:case 5:lt(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:se(rn);break;case 10:Qi(n.type);break;case 22:case 23:Jn(n),ef(),t!==null&&se(vr);break;case 24:Qi(cn)}}function yo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var d=r.create,S=r.inst;o=d(),S.destroy=o}r=r.next}while(r!==u)}}catch(A){Bt(n,n.return,A)}}function Fa(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var B=r,te=A;try{te()}catch(pe){Bt(u,B,pe)}}}o=o.next}while(o!==d)}}catch(pe){Bt(n,n.return,pe)}}function y0(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{um(n,r)}catch(o){Bt(t,t.return,o)}}}function S0(t,n,r){r.props=Mr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Bt(t,n,o)}}function So(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){Bt(t,n,u)}}function Ui(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Bt(t,n,u)}else r.current=null}function b0(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Bt(t,t.return,u)}}function Nf(t,n,r){try{var o=t.stateNode;Dy(o,t.type,r,n),o[mn]=n}catch(u){Bt(t,t.return,u)}}function M0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function Of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Wi));else if(o!==4&&(o===27&&ja(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Pf(t,n,r),t=t.sibling;t!==null;)Pf(t,n,r),t=t.sibling}function Wl(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&ja(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Wl(t,n,r),t=t.sibling;t!==null;)Wl(t,n,r),t=t.sibling}function E0(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,r),n[ln]=t,n[mn]=r}catch(d){Bt(t,t.return,d)}}var na=!1,dn=!1,zf=!1,T0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function cy(t,n){if(t=t.containerInfo,id=hc,t=Ip(t),Cu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var S=0,A=-1,B=-1,te=0,pe=0,ve=t,ae=null;t:for(;;){for(var le;ve!==r||u!==0&&ve.nodeType!==3||(A=S+u),ve!==d||o!==0&&ve.nodeType!==3||(B=S+o),ve.nodeType===3&&(S+=ve.nodeValue.length),(le=ve.firstChild)!==null;)ae=ve,ve=le;for(;;){if(ve===t)break t;if(ae===r&&++te===u&&(A=S),ae===d&&++pe===o&&(B=S),(le=ve.nextSibling)!==null)break;ve=ae,ae=ve.parentNode}ve=le}r=A===-1||B===-1?null:{start:A,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(ad={focusedElem:t,selectionRange:r},hc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=n,u=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var ke=Mr(r.type,u);t=o.getSnapshotBeforeUpdate(ke,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Bt(r,r.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)od(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":od(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function A0(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:aa(t,r),o&4&&yo(5,r);break;case 1:if(aa(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(S){Bt(r,r.return,S)}else{var u=Mr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(r,r.return,S)}}o&64&&y0(r),o&512&&So(r,r.return);break;case 3:if(aa(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{um(t,n)}catch(S){Bt(r,r.return,S)}}break;case 27:n===null&&o&4&&E0(r);case 26:case 5:aa(t,r),n===null&&o&4&&b0(r),o&512&&So(r,r.return);break;case 12:aa(t,r);break;case 31:aa(t,r),o&4&&w0(t,r);break;case 13:aa(t,r),o&4&&D0(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=vy.bind(null,r),Fy(t,r))));break;case 22:if(o=r.memoizedState!==null||na,!o){n=n!==null&&n.memoizedState!==null||dn,u=na;var d=dn;na=o,(dn=n)&&!d?ra(t,r,(r.subtreeFlags&8772)!==0):aa(t,r),na=u,dn=d}break;case 30:break;default:aa(t,r)}}function R0(t){var n=t.alternate;n!==null&&(t.alternate=null,R0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ys(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Jt=null,Bn=!1;function ia(t,n,r){for(r=r.child;r!==null;)C0(t,n,r),r=r.sibling}function C0(t,n,r){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Me,r)}catch{}switch(r.tag){case 26:dn||Ui(r,n),ia(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:dn||Ui(r,n);var o=Jt,u=Bn;ja(r.type)&&(Jt=r.stateNode,Bn=!1),ia(t,n,r),Do(r.stateNode),Jt=o,Bn=u;break;case 5:dn||Ui(r,n);case 6:if(o=Jt,u=Bn,Jt=null,ia(t,n,r),Jt=o,Bn=u,Jt!==null)if(Bn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(r.stateNode)}catch(d){Bt(r,n,d)}else try{Jt.removeChild(r.stateNode)}catch(d){Bt(r,n,d)}break;case 18:Jt!==null&&(Bn?(t=Jt,yx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),vs(t)):yx(Jt,r.stateNode));break;case 4:o=Jt,u=Bn,Jt=r.stateNode.containerInfo,Bn=!0,ia(t,n,r),Jt=o,Bn=u;break;case 0:case 11:case 14:case 15:Fa(2,r,n),dn||Fa(4,r,n),ia(t,n,r);break;case 1:dn||(Ui(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&S0(r,n,o)),ia(t,n,r);break;case 21:ia(t,n,r);break;case 22:dn=(o=dn)||r.memoizedState!==null,ia(t,n,r),dn=o;break;default:ia(t,n,r)}}function w0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vs(t)}catch(r){Bt(n,n.return,r)}}}function D0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vs(t)}catch(r){Bt(n,n.return,r)}}function uy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new T0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new T0),n;default:throw Error(s(435,t.tag))}}function ql(t,n){var r=uy(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=_y.bind(null,t,o);o.then(u,u)}})}function Hn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],d=t,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(ja(A.type)){Jt=A.stateNode,Bn=!1;break e}break;case 5:Jt=A.stateNode,Bn=!1;break e;case 3:case 4:Jt=A.stateNode.containerInfo,Bn=!0;break e}A=A.return}if(Jt===null)throw Error(s(160));C0(d,S,u),Jt=null,Bn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)U0(n,t),n=n.sibling}var _i=null;function U0(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Vn(t),o&4&&(Fa(3,t,t.return),yo(3,t),Fa(5,t,t.return));break;case 1:Hn(n,t),Vn(t),o&512&&(dn||r===null||Ui(r,r.return)),o&64&&na&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=_i;if(Hn(n,t),Vn(t),o&512&&(dn||r===null||Ui(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[cr]||d[ln]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),wn(d,o,r),d[ln]=t,ne(d),o=d;break e;case"link":var S=Ux("link","href",u).get(o+(r.href||""));if(S){for(var A=0;A<S.length;A++)if(d=S[A],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(A,1);break t}}d=u.createElement(o),wn(d,o,r),u.head.appendChild(d);break;case"meta":if(S=Ux("meta","content",u).get(o+(r.content||""))){for(A=0;A<S.length;A++)if(d=S[A],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(A,1);break t}}d=u.createElement(o),wn(d,o,r),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[ln]=t,ne(d),o=d}t.stateNode=o}else Lx(u,t.type,t.stateNode);else t.stateNode=Dx(u,o,t.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?Lx(u,t.type,t.stateNode):Dx(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Hn(n,t),Vn(t),o&512&&(dn||r===null||Ui(r,r.return)),r!==null&&o&4&&Nf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Hn(n,t),Vn(t),o&512&&(dn||r===null||Ui(r,r.return)),t.flags&32){u=t.stateNode;try{Ci(u,"")}catch(ke){Bt(t,t.return,ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Nf(t,u,r!==null?r.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(Hn(n,t),Vn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ke){Bt(t,t.return,ke)}}break;case 3:if(cc=null,u=_i,_i=oc(n.containerInfo),Hn(n,t),_i=u,Vn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{vs(n.containerInfo)}catch(ke){Bt(t,t.return,ke)}zf&&(zf=!1,L0(t));break;case 4:o=_i,_i=oc(t.stateNode.containerInfo),Hn(n,t),Vn(t),_i=o;break;case 12:Hn(n,t),Vn(t);break;case 31:Hn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 13:Hn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Kl=_()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 22:u=t.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,te=na,pe=dn;if(na=te||u,dn=pe||B,Hn(n,t),dn=pe,na=te,Vn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||B||na||dn||Er(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){B=r=n;try{if(d=B.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=B.stateNode;var ve=B.memoizedProps.style,ae=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(ke){Bt(B,B.return,ke)}}}else if(n.tag===6){if(r===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ke){Bt(B,B.return,ke)}}}else if(n.tag===18){if(r===null){B=n;try{var le=B.stateNode;u?Sx(le,!0):Sx(B.stateNode,!1)}catch(ke){Bt(B,B.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,ql(t,r))));break;case 19:Hn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(M0(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,d=Of(t);Wl(t,d,u);break;case 5:var S=r.stateNode;r.flags&32&&(Ci(S,""),r.flags&=-33);var A=Of(t);Wl(t,A,S);break;case 3:case 4:var B=r.stateNode.containerInfo,te=Of(t);Pf(t,te,B);break;default:throw Error(s(161))}}catch(pe){Bt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function L0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;L0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)A0(t,n.alternate,n),n=n.sibling}function Er(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Er(n);break;case 1:Ui(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&S0(n,n.return,r),Er(n);break;case 27:Do(n.stateNode);case 26:case 5:Ui(n,n.return),Er(n);break;case 22:n.memoizedState===null&&Er(n);break;case 30:Er(n);break;default:Er(n)}t=t.sibling}}function ra(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:ra(u,d,r),yo(4,d);break;case 1:if(ra(u,d,r),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Bt(o,o.return,te)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)cm(B[u],A)}catch(te){Bt(o,o.return,te)}}r&&S&64&&y0(d),So(d,d.return);break;case 27:E0(d);case 26:case 5:ra(u,d,r),r&&o===null&&S&4&&b0(d),So(d,d.return);break;case 12:ra(u,d,r);break;case 31:ra(u,d,r),r&&S&4&&w0(u,d);break;case 13:ra(u,d,r),r&&S&4&&D0(u,d);break;case 22:d.memoizedState===null&&ra(u,d,r),So(d,d.return);break;case 30:break;default:ra(u,d,r)}n=n.sibling}}function If(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&so(r))}function Ff(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function yi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)N0(t,n,r,o),n=n.sibling}function N0(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,r,o),u&2048&&yo(9,n);break;case 1:yi(t,n,r,o);break;case 3:yi(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){yi(t,n,r,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,A=d.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Bt(n,n.return,B)}}else yi(t,n,r,o);break;case 31:yi(t,n,r,o);break;case 13:yi(t,n,r,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?yi(t,n,r,o):bo(t,n):d._visibility&2?yi(t,n,r,o):(d._visibility|=2,os(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&If(S,n);break;case 24:yi(t,n,r,o),u&2048&&Ff(n.alternate,n);break;default:yi(t,n,r,o)}}function os(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,A=r,B=o,te=S.flags;switch(S.tag){case 0:case 11:case 15:os(d,S,A,B,u),yo(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?os(d,S,A,B,u):bo(d,S):(pe._visibility|=2,os(d,S,A,B,u)),u&&te&2048&&If(S.alternate,S);break;case 24:os(d,S,A,B,u),u&&te&2048&&Ff(S.alternate,S);break;default:os(d,S,A,B,u)}n=n.sibling}}function bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:bo(r,o),u&2048&&If(o.alternate,o);break;case 24:bo(r,o),u&2048&&Ff(o.alternate,o);break;default:bo(r,o)}n=n.sibling}}var Mo=8192;function ls(t,n,r){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)O0(t,n,r),t=t.sibling}function O0(t,n,r){switch(t.tag){case 26:ls(t,n,r),t.flags&Mo&&t.memoizedState!==null&&Zy(r,_i,t.memoizedState,t.memoizedProps);break;case 5:ls(t,n,r);break;case 3:case 4:var o=_i;_i=oc(t.stateNode.containerInfo),ls(t,n,r),_i=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,ls(t,n,r),Mo=o):ls(t,n,r));break;default:ls(t,n,r)}}function P0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Mn=o,I0(o,t)}P0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)z0(t),t=t.sibling}function z0(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yl(t)):Eo(t);break;default:Eo(t)}}function Yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Mn=o,I0(o,t)}P0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Yl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Yl(n));break;default:Yl(n)}t=t.sibling}}function I0(t,n){for(;Mn!==null;){var r=Mn;switch(r.tag){case 0:case 11:case 15:Fa(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:so(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Mn=o;else e:for(r=t;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(R0(o),o===r){Mn=null;break e}if(u!==null){u.return=d,Mn=u;break e}Mn=d}}}var fy={getCacheForType:function(t){var n=Rn(cn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return Rn(cn).controller.signal}},dy=typeof WeakMap=="function"?WeakMap:Map,Pt=0,qt=null,_t=null,St=0,Ft=0,$n=null,Ba=!1,cs=!1,Bf=!1,sa=0,nn=0,Ha=0,Tr=0,Hf=0,ei=0,us=0,To=null,Gn=null,Vf=!1,Kl=0,F0=0,Zl=1/0,Ql=null,Va=null,gn=0,Ga=null,fs=null,oa=0,Gf=0,kf=null,B0=null,Ao=0,Xf=null;function ti(){return(Pt&2)!==0&&St!==0?St&-St:I.T!==null?Zf():Ws()}function H0(){if(ei===0)if((St&536870912)===0||Tt){var t=we;we<<=1,(we&3932160)===0&&(we=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function kn(t,n,r){(t===qt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(ds(t,0),ka(t,St,ei,!1)),Dn(t,r),((Pt&2)===0||t!==qt)&&(t===qt&&((Pt&2)===0&&(Tr|=r),nn===4&&ka(t,St,ei,!1)),Li(t))}function V0(t,n,r){if((Pt&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?my(t,n):Wf(t,n,!0),d=o;do{if(u===0){cs&&!o&&ka(t,n,0,!1);break}else{if(r=t.current.alternate,d&&!hy(r)){u=Wf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=t;u=To;var B=A.current.memoizedState.isDehydrated;if(B&&(ds(A,S).flags|=256),S=Wf(A,S,!1),S!==2){if(Bf&&!B){A.errorRecoveryDisabledLanes|=d,Tr|=d,u=4;break e}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){ds(t,0),ka(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,ei,!Ba);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kl+300-_(),10<u)){if(ka(o,n,ei,!Ba),_e(o,0,!0)!==0)break e;oa=n,o.timeoutHandle=vx(G0.bind(null,o,r,Gn,Ql,Vf,n,ei,Tr,us,Ba,d,"Throttled",-0,0),u);break e}G0(o,r,Gn,Ql,Vf,n,ei,Tr,us,Ba,d,null,-0,0)}}break}while(!0);Li(t)}function G0(t,n,r,o,u,d,S,A,B,te,pe,ve,ae,le){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},O0(n,d,ve);var ke=(d&62914560)===d?Kl-_():(d&4194048)===d?F0-_():0;if(ke=Qy(ve,ke),ke!==null){oa=d,t.cancelPendingCommit=ke(Z0.bind(null,t,n,d,r,o,u,S,A,B,pe,ve,null,ae,le)),ka(t,d,S,!te);return}}Z0(t,n,d,r,o,u,S,A,B)}function hy(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],d=u.getSnapshot;u=u.value;try{if(!Kn(d(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,r,o){n&=~Hf,n&=~Tr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Xe(u),S=1<<d;o[d]=-1,u&=~S}r!==0&&cl(t,r,n)}function Jl(){return(Pt&6)===0?(Ro(0),!1):!0}function jf(){if(_t!==null){if(Ft===0)var t=_t.return;else t=_t,Zi=xr=null,of(t),ns=null,lo=0,t=_t;for(;t!==null;)_0(t.alternate,t),t=t.return;_t=null}}function ds(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Ny(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),oa=0,jf(),qt=t,_t=r=Yi(t.current,null),St=n,Ft=0,$n=null,Ba=!1,cs=He(t,n),Bf=!1,us=ei=Hf=Tr=Ha=nn=0,Gn=To=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),d=1<<u;n|=t[u],o&=~d}return sa=n,_l(),r}function k0(t,n){dt=null,I.H=go,n===ts||n===Rl?(n=rm(),Ft=3):n===Yu?(n=rm(),Ft=4):Ft=n===Mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,_t===null&&(nn=1,Vl(t,oi(n,t.current)))}function X0(){var t=Qn.current;return t===null?!0:(St&4194048)===St?fi===null:(St&62914560)===St||(St&536870912)!==0?t===fi:!1}function j0(){var t=I.H;return I.H=go,t===null?go:t}function W0(){var t=I.A;return I.A=fy,t}function $l(){nn=4,Ba||(St&4194048)!==St&&Qn.current!==null||(cs=!0),(Ha&134217727)===0&&(Tr&134217727)===0||qt===null||ka(qt,St,ei,!1)}function Wf(t,n,r){var o=Pt;Pt|=2;var u=j0(),d=W0();(qt!==t||St!==n)&&(Ql=null,ds(t,n)),n=!1;var S=nn;e:do try{if(Ft!==0&&_t!==null){var A=_t,B=$n;switch(Ft){case 8:jf(),S=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var te=Ft;if(Ft=0,$n=null,hs(t,A,B,te),r&&cs){S=0;break e}break;default:te=Ft,Ft=0,$n=null,hs(t,A,B,te)}}py(),S=nn;break}catch(pe){k0(t,pe)}while(!0);return n&&t.shellSuspendCounter++,Zi=xr=null,Pt=o,I.H=u,I.A=d,_t===null&&(qt=null,St=0,_l()),S}function py(){for(;_t!==null;)q0(_t)}function my(t,n){var r=Pt;Pt|=2;var o=j0(),u=W0();qt!==t||St!==n?(Ql=null,Zl=_()+500,ds(t,n)):cs=He(t,n);e:do try{if(Ft!==0&&_t!==null){n=_t;var d=$n;t:switch(Ft){case 1:Ft=0,$n=null,hs(t,n,d,1);break;case 2:case 9:if(im(d)){Ft=0,$n=null,Y0(n);break}n=function(){Ft!==2&&Ft!==9||qt!==t||(Ft=7),Li(t)},d.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:im(d)?(Ft=0,$n=null,Y0(n)):(Ft=0,$n=null,hs(t,n,d,7));break;case 5:var S=null;switch(_t.tag){case 26:S=_t.memoizedState;case 5:case 27:var A=_t;if(S?Nx(S):A.stateNode.complete){Ft=0,$n=null;var B=A.sibling;if(B!==null)_t=B;else{var te=A.return;te!==null?(_t=te,ec(te)):_t=null}break t}}Ft=0,$n=null,hs(t,n,d,5);break;case 6:Ft=0,$n=null,hs(t,n,d,6);break;case 8:jf(),nn=6;break e;default:throw Error(s(462))}}xy();break}catch(pe){k0(t,pe)}while(!0);return Zi=xr=null,I.H=o,I.A=u,Pt=r,_t!==null?0:(qt=null,St=0,_l(),nn)}function xy(){for(;_t!==null&&!it();)q0(_t)}function q0(t){var n=g0(t.alternate,t,sa);t.memoizedProps=t.pendingProps,n===null?ec(t):_t=n}function Y0(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=f0(r,n,n.pendingProps,n.type,void 0,St);break;case 11:n=f0(r,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:of(n);default:_0(r,n),n=_t=Wp(n,sa),n=g0(r,n,sa)}t.memoizedProps=t.pendingProps,n===null?ec(t):_t=n}function hs(t,n,r,o){Zi=xr=null,of(n),ns=null,lo=0;var u=n.return;try{if(ay(t,u,n,r,St)){nn=1,Vl(t,oi(r,t.current)),_t=null;return}}catch(d){if(u!==null)throw _t=u,d;nn=1,Vl(t,oi(r,t.current)),_t=null;return}n.flags&32768?(Tt||o===1?t=!0:cs||(St&536870912)!==0?t=!1:(Ba=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),K0(n,t)):ec(n)}function ec(t){var n=t;do{if((n.flags&32768)!==0){K0(n,Ba);return}t=n.return;var r=oy(n.alternate,n,sa);if(r!==null){_t=r;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);nn===0&&(nn=5)}function K0(t,n){do{var r=ly(t.alternate,t);if(r!==null){r.flags&=32767,_t=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=r}while(t!==null);nn=6,_t=null}function Z0(t,n,r,o,u,d,S,A,B){t.cancelPendingCommit=null;do tc();while(gn!==0);if((Pt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Nu,qn(t,r,d,S,A,B),t===qt&&(_t=qt=null,St=0),fs=n,Ga=t,oa=r,Gf=d,kf=u,B0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,yy(ie,function(){return tx(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=Z.p,Z.p=2,S=Pt,Pt|=4;try{cy(t,n,r)}finally{Pt=S,Z.p=u,I.T=o}}gn=1,Q0(),J0(),$0()}}function Q0(){if(gn===1){gn=0;var t=Ga,n=fs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=I.T,I.T=null;var o=Z.p;Z.p=2;var u=Pt;Pt|=4;try{U0(n,t);var d=ad,S=Ip(t.containerInfo),A=d.focusedElem,B=d.selectionRange;if(S!==A&&A&&A.ownerDocument&&zp(A.ownerDocument.documentElement,A)){if(B!==null&&Cu(A)){var te=B.start,pe=B.end;if(pe===void 0&&(pe=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(pe,A.value.length);else{var ve=A.ownerDocument||document,ae=ve&&ve.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),ke=A.textContent.length,tt=Math.min(B.start,ke),Xt=B.end===void 0?tt:Math.min(B.end,ke);!le.extend&&tt>Xt&&(S=Xt,Xt=tt,tt=S);var q=Pp(A,tt),j=Pp(A,Xt);if(q&&j&&(le.rangeCount!==1||le.anchorNode!==q.node||le.anchorOffset!==q.offset||le.focusNode!==j.node||le.focusOffset!==j.offset)){var ee=ve.createRange();ee.setStart(q.node,q.offset),le.removeAllRanges(),tt>Xt?(le.addRange(ee),le.extend(j.node,j.offset)):(ee.setEnd(j.node,j.offset),le.addRange(ee))}}}}for(ve=[],le=A;le=le.parentNode;)le.nodeType===1&&ve.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var ge=ve[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}hc=!!id,ad=id=null}finally{Pt=u,Z.p=o,I.T=r}}t.current=n,gn=2}}function J0(){if(gn===2){gn=0;var t=Ga,n=fs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=I.T,I.T=null;var o=Z.p;Z.p=2;var u=Pt;Pt|=4;try{A0(t,n.alternate,n)}finally{Pt=u,Z.p=o,I.T=r}}gn=3}}function $0(){if(gn===4||gn===3){gn=0,L();var t=Ga,n=fs,r=oa,o=B0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,fs=Ga=null,ex(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),lr(r),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=Z.p,Z.p=2,I.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var A=o[S];d(A.value,{componentStack:A.stack})}}finally{I.T=n,Z.p=u}}(oa&3)!==0&&tc(),Li(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===Xf?Ao++:(Ao=0,Xf=t):Ao=0,Ro(0)}}function ex(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function tc(){return Q0(),J0(),$0(),tx()}function tx(){if(gn!==5)return!1;var t=Ga,n=Gf;Gf=0;var r=lr(oa),o=I.T,u=Z.p;try{Z.p=32>r?32:r,I.T=null,r=kf,kf=null;var d=Ga,S=oa;if(gn=0,fs=Ga=null,oa=0,(Pt&6)!==0)throw Error(s(331));var A=Pt;if(Pt|=4,z0(d.current),N0(d,d.current,S,r),Pt=A,Ro(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Me,d)}catch{}return!0}finally{Z.p=u,I.T=o,ex(t,n)}}function nx(t,n,r){n=oi(r,n),n=bf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Dn(t,2),Li(t))}function Bt(t,n,r){if(t.tag===3)nx(t,t,r);else for(;n!==null;){if(n.tag===3){nx(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=oi(r,t),r=i0(2),o=Pa(n,r,2),o!==null&&(a0(r,o,n,t),Dn(o,2),Li(o));break}}n=n.return}}function qf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new dy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(Bf=!0,u.add(r),t=gy.bind(null,t,n,r),n.then(t,t))}function gy(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,qt===t&&(St&r)===r&&(nn===4||nn===3&&(St&62914560)===St&&300>_()-Kl?(Pt&2)===0&&ds(t,0):Hf|=r,us===St&&(us=0)),Li(t)}function ix(t,n){n===0&&(n=Vt()),t=hr(t,n),t!==null&&(Dn(t,n),Li(t))}function vy(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),ix(t,r)}function _y(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ix(t,r)}function yy(t,n){return Ht(t,n)}var nc=null,ps=null,Yf=!1,ic=!1,Kf=!1,Xa=0;function Li(t){t!==ps&&t.next===null&&(ps===null?nc=ps=t:ps=ps.next=t),ic=!0,Yf||(Yf=!0,by())}function Ro(t,n){if(!Kf&&ic){Kf=!0;do for(var r=!1,o=nc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Xe(42|t)+1)-1,d&=u&~(S&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,ox(o,d))}else d=St,d=_e(o,o===qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||He(o,d)||(r=!0,ox(o,d));o=o.next}while(r);Kf=!1}}function Sy(){ax()}function ax(){ic=Yf=!1;var t=0;Xa!==0&&Ly()&&(t=Xa);for(var n=_(),r=null,o=nc;o!==null;){var u=o.next,d=rx(o,n);d===0?(o.next=null,r===null?nc=u:r.next=u,u===null&&(ps=r)):(r=o,(t!==0||(d&3)!==0)&&(ic=!0)),o=u}gn!==0&&gn!==5||Ro(t),Xa!==0&&(Xa=0)}function rx(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Xe(d),A=1<<S,B=u[S];B===-1?((A&r)===0||(A&o)!==0)&&(u[S]=rt(A,n)):B<=n&&(t.expiredLanes|=A),d&=~A}if(n=qt,r=St,r=_e(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||He(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Ye(o),lr(r)){case 2:case 8:r=de;break;case 32:r=ie;break;case 268435456:r=Ue;break;default:r=ie}return o=sx.bind(null,t),r=Ht(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Ye(o),t.callbackPriority=2,t.callbackNode=null,2}function sx(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(tc()&&t.callbackNode!==r)return null;var o=St;return o=_e(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(V0(t,o,n),rx(t,_()),t.callbackNode!=null&&t.callbackNode===r?sx.bind(null,t):null)}function ox(t,n){if(tc())return null;V0(t,n,!0)}function by(){Oy(function(){(Pt&6)!==0?Ht(Q,Sy):ax()})}function Zf(){if(Xa===0){var t=$r;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Xa=t}return Xa}function lx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fl(""+t)}function cx(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function My(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var d=lx((u[mn]||null).action),S=o.submitter;S&&(n=(n=S[mn]||null)?lx(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var A=new ml("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var B=S?cx(u,S):new FormData(u);xf(r,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(A.preventDefault(),B=S?cx(u,S):new FormData(u),xf(r,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Qf=0;Qf<Lu.length;Qf++){var Jf=Lu[Qf],Ey=Jf.toLowerCase(),Ty=Jf[0].toUpperCase()+Jf.slice(1);vi(Ey,"on"+Ty)}vi(Hp,"onAnimationEnd"),vi(Vp,"onAnimationIteration"),vi(Gp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(V_,"onTransitionRun"),vi(G_,"onTransitionStart"),vi(k_,"onTransitionCancel"),vi(kp,"onTransitionEnd"),Fe("onMouseEnter",["mouseout","mouseover"]),Fe("onMouseLeave",["mouseout","mouseover"]),Fe("onPointerEnter",["pointerout","pointerover"]),Fe("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ay=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function ux(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],B=A.instance,te=A.currentTarget;if(A=A.listener,B!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=te;try{d(u)}catch(pe){vl(pe)}u.currentTarget=null,d=B}else for(S=0;S<o.length;S++){if(A=o[S],B=A.instance,te=A.currentTarget,A=A.listener,B!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=te;try{d(u)}catch(pe){vl(pe)}u.currentTarget=null,d=B}}}}function yt(t,n){var r=n[Vr];r===void 0&&(r=n[Vr]=new Set);var o=t+"__bubble";r.has(o)||(fx(n,t,2,!1),r.add(o))}function $f(t,n,r){var o=0;n&&(o|=4),fx(r,t,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function ed(t){if(!t[ac]){t[ac]=!0,K.forEach(function(r){r!=="selectionchange"&&(Ay.has(r)||$f(r,!1,t),$f(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ac]||(n[ac]=!0,$f("selectionchange",!1,n))}}function fx(t,n,r,o){switch(Hx(n)){case 2:var u=eS;break;case 8:u=tS;break;default:u=md}r=u.bind(null,n,r,t),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function td(t,n,r,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Aa(A),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=d=S;continue e}A=A.parentNode}}o=o.return}xp(function(){var te=d,pe=gu(r),ve=[];e:{var ae=Xp.get(t);if(ae!==void 0){var le=ml,ke=t;switch(t){case"keypress":if(hl(r)===0)break e;case"keydown":case"keyup":le=__;break;case"focusin":ke="focus",le=Mu;break;case"focusout":ke="blur",le=Mu;break;case"beforeblur":case"afterblur":le=Mu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=o_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=b_;break;case Hp:case Vp:case Gp:le=u_;break;case kp:le=E_;break;case"scroll":case"scrollend":le=r_;break;case"wheel":le=A_;break;case"copy":case"cut":case"paste":le=d_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Sp;break;case"toggle":case"beforetoggle":le=C_}var tt=(n&4)!==0,Xt=!tt&&(t==="scroll"||t==="scrollend"),q=tt?ae!==null?ae+"Capture":null:ae;tt=[];for(var j=te,ee;j!==null;){var ge=j;if(ee=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ee===null||q===null||(ge=Ks(j,q),ge!=null&&tt.push(wo(j,ge,ee))),Xt)break;j=j.return}0<tt.length&&(ae=new le(ae,ke,null,r,pe),ve.push({event:ae,listeners:tt}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ae&&r!==xu&&(ke=r.relatedTarget||r.fromElement)&&(Aa(ke)||ke[ki]))break e;if((le||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(ke=r.relatedTarget||r.toElement,le=te,ke=ke?Aa(ke):null,ke!==null&&(Xt=c(ke),tt=ke.tag,ke!==Xt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(le=null,ke=te),le!==ke)){if(tt=_p,ge="onMouseLeave",q="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Sp,ge="onPointerLeave",q="onPointerEnter",j="pointer"),Xt=le==null?ae:W(le),ee=ke==null?ae:W(ke),ae=new tt(ge,j+"leave",le,r,pe),ae.target=Xt,ae.relatedTarget=ee,ge=null,Aa(pe)===te&&(tt=new tt(q,j+"enter",ke,r,pe),tt.target=ee,tt.relatedTarget=Xt,ge=tt),Xt=ge,le&&ke)t:{for(tt=Ry,q=le,j=ke,ee=0,ge=q;ge;ge=tt(ge))ee++;ge=0;for(var Je=j;Je;Je=tt(Je))ge++;for(;0<ee-ge;)q=tt(q),ee--;for(;0<ge-ee;)j=tt(j),ge--;for(;ee--;){if(q===j||j!==null&&q===j.alternate){tt=q;break t}q=tt(q),j=tt(j)}tt=null}else tt=null;le!==null&&dx(ve,ae,le,tt,!1),ke!==null&&Xt!==null&&dx(ve,Xt,ke,tt,!0)}}e:{if(ae=te?W(te):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var Lt=wp;else if(Rp(ae))if(Dp)Lt=F_;else{Lt=z_;var qe=P_}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&mu(te.elementType)&&(Lt=wp):Lt=I_;if(Lt&&(Lt=Lt(t,te))){Cp(ve,Lt,r,pe);break e}qe&&qe(t,ae,te),t==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&Sn(ae,"number",ae.value)}switch(qe=te?W(te):window,t){case"focusin":(Rp(qe)||qe.contentEditable==="true")&&(jr=qe,wu=te,io=null);break;case"focusout":io=wu=jr=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Fp(ve,r,pe);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":Fp(ve,r,pe)}var pt;if(Tu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Xr?Tp(t,r)&&(bt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(bt="onCompositionStart");bt&&(bp&&r.locale!=="ko"&&(Xr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Xr&&(pt=gp()):(Ca=pe,yu="value"in Ca?Ca.value:Ca.textContent,Xr=!0)),qe=rc(te,bt),0<qe.length&&(bt=new yp(bt,t,null,r,pe),ve.push({event:bt,listeners:qe}),pt?bt.data=pt:(pt=Ap(r),pt!==null&&(bt.data=pt)))),(pt=D_?U_(t,r):L_(t,r))&&(bt=rc(te,"onBeforeInput"),0<bt.length&&(qe=new yp("onBeforeInput","beforeinput",null,r,pe),ve.push({event:qe,listeners:bt}),qe.data=pt)),My(ve,t,te,r,pe)}ux(ve,n)})}function wo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function rc(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ks(t,r),u!=null&&o.unshift(wo(t,u,d)),u=Ks(t,n),u!=null&&o.push(wo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function Ry(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function dx(t,n,r,o,u){for(var d=n._reactName,S=[];r!==null&&r!==o;){var A=r,B=A.alternate,te=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||te===null||(B=te,u?(te=Ks(r,d),te!=null&&S.unshift(wo(r,te,B))):u||(te=Ks(r,d),te!=null&&S.push(wo(r,te,B)))),r=r.return}S.length!==0&&t.push({event:n,listeners:S})}var Cy=/\r\n?/g,wy=/\u0000|\uFFFD/g;function hx(t){return(typeof t=="string"?t:""+t).replace(Cy,`
`).replace(wy,"")}function px(t,n){return n=hx(n),hx(t)===n}function kt(t,n,r,o,u,d){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ci(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ci(t,""+o);break;case"className":wt(t,"class",o);break;case"tabIndex":wt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(t,r,o);break;case"style":pp(t,o,d);break;case"data":if(n!=="object"){wt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=fl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&kt(t,n,"name",u.name,u,null),kt(t,n,"formEncType",u.formEncType,u,null),kt(t,n,"formMethod",u.formMethod,u,null),kt(t,n,"formTarget",u.formTarget,u,null)):(kt(t,n,"encType",u.encType,u,null),kt(t,n,"method",u.method,u,null),kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=fl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Wi);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=fl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":yt("beforetoggle",t),yt("toggle",t),ht(t,"popover",o);break;case"xlinkActuate":Ut(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ut(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ut(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ut(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ut(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ut(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ht(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=i_.get(r)||r,ht(t,r,o))}}function nd(t,n,r,o,u,d){switch(r){case"style":pp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Ci(t,o):(typeof o=="number"||typeof o=="bigint")&&Ci(t,""+o);break;case"onScroll":o!=null&&yt("scroll",t);break;case"onScrollEnd":o!=null&&yt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ce.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),d=t[mn]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):ht(t,r,o)}}}function wn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":yt("error",t),yt("load",t);var o=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:kt(t,n,d,S,r,null)}}u&&kt(t,n,"srcSet",r.srcSet,r,null),o&&kt(t,n,"src",r.src,r,null);return;case"input":yt("invalid",t);var A=d=S=u=null,B=null,te=null;for(o in r)if(r.hasOwnProperty(o)){var pe=r[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":S=pe;break;case"checked":B=pe;break;case"defaultChecked":te=pe;break;case"value":d=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:kt(t,n,o,pe,r,null)}}Kt(t,d,A,B,te,S,u,!1);return;case"select":yt("invalid",t),o=S=d=null;for(u in r)if(r.hasOwnProperty(u)&&(A=r[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:kt(t,n,u,A,r,null)}n=d,r=S,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):r!=null&&xn(t,!!o,r,!0);return;case"textarea":yt("invalid",t),d=u=o=null;for(S in r)if(r.hasOwnProperty(S)&&(A=r[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:kt(t,n,S,A,r,null)}Tn(t,o,u,d);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(o=r[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:kt(t,n,B,o,r,null)}return;case"dialog":yt("beforetoggle",t),yt("toggle",t),yt("cancel",t),yt("close",t);break;case"iframe":case"object":yt("load",t);break;case"video":case"audio":for(o=0;o<Co.length;o++)yt(Co[o],t);break;case"image":yt("error",t),yt("load",t);break;case"details":yt("toggle",t);break;case"embed":case"source":case"link":yt("error",t),yt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in r)if(r.hasOwnProperty(te)&&(o=r[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:kt(t,n,te,o,r,null)}return;default:if(mu(n)){for(pe in r)r.hasOwnProperty(pe)&&(o=r[pe],o!==void 0&&nd(t,n,pe,o,r,void 0));return}}for(A in r)r.hasOwnProperty(A)&&(o=r[A],o!=null&&kt(t,n,A,o,r,null))}function Dy(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,A=null,B=null,te=null,pe=null;for(le in r){var ve=r[le];if(r.hasOwnProperty(le)&&ve!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=ve;default:o.hasOwnProperty(le)||kt(t,n,le,null,o,ve)}}for(var ae in o){var le=o[ae];if(ve=r[ae],o.hasOwnProperty(ae)&&(le!=null||ve!=null))switch(ae){case"type":d=le;break;case"name":u=le;break;case"checked":te=le;break;case"defaultChecked":pe=le;break;case"value":S=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ve&&kt(t,n,ae,le,o,ve)}}Xi(t,S,A,B,te,pe,d,u);return;case"select":le=S=A=ae=null;for(d in r)if(B=r[d],r.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":le=B;default:o.hasOwnProperty(d)||kt(t,n,d,null,o,B)}for(u in o)if(d=o[u],B=r[u],o.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":ae=d;break;case"defaultValue":A=d;break;case"multiple":S=d;default:d!==B&&kt(t,n,u,d,o,B)}n=A,r=S,o=le,ae!=null?xn(t,!!r,ae,!1):!!o!=!!r&&(n!=null?xn(t,!!r,n,!0):xn(t,!!r,r?[]:"",!1));return;case"textarea":le=ae=null;for(A in r)if(u=r[A],r.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:kt(t,n,A,null,o,u)}for(S in o)if(u=o[S],d=r[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ae=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&kt(t,n,S,u,o,d)}bn(t,ae,le);return;case"option":for(var ke in r)if(ae=r[ke],r.hasOwnProperty(ke)&&ae!=null&&!o.hasOwnProperty(ke))switch(ke){case"selected":t.selected=!1;break;default:kt(t,n,ke,null,o,ae)}for(B in o)if(ae=o[B],le=r[B],o.hasOwnProperty(B)&&ae!==le&&(ae!=null||le!=null))switch(B){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:kt(t,n,B,ae,o,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in r)ae=r[tt],r.hasOwnProperty(tt)&&ae!=null&&!o.hasOwnProperty(tt)&&kt(t,n,tt,null,o,ae);for(te in o)if(ae=o[te],le=r[te],o.hasOwnProperty(te)&&ae!==le&&(ae!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,n));break;default:kt(t,n,te,ae,o,le)}return;default:if(mu(n)){for(var Xt in r)ae=r[Xt],r.hasOwnProperty(Xt)&&ae!==void 0&&!o.hasOwnProperty(Xt)&&nd(t,n,Xt,void 0,o,ae);for(pe in o)ae=o[pe],le=r[pe],!o.hasOwnProperty(pe)||ae===le||ae===void 0&&le===void 0||nd(t,n,pe,ae,o,le);return}}for(var q in r)ae=r[q],r.hasOwnProperty(q)&&ae!=null&&!o.hasOwnProperty(q)&&kt(t,n,q,null,o,ae);for(ve in o)ae=o[ve],le=r[ve],!o.hasOwnProperty(ve)||ae===le||ae==null&&le==null||kt(t,n,ve,ae,o,le)}function mx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Uy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],d=u.transferSize,S=u.initiatorType,A=u.duration;if(d&&A&&mx(S)){for(S=0,A=u.responseEnd,o+=1;o<r.length;o++){var B=r[o],te=B.startTime;if(te>A)break;var pe=B.transferSize,ve=B.initiatorType;pe&&mx(ve)&&(B=B.responseEnd,S+=pe*(B<A?1:(A-te)/(B-te)))}if(--o,n+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var id=null,ad=null;function sc(t){return t.nodeType===9?t:t.ownerDocument}function xx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function rd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sd=null;function Ly(){var t=window.event;return t&&t.type==="popstate"?t===sd?!1:(sd=t,!0):(sd=null,!1)}var vx=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,_x=typeof Promise=="function"?Promise:void 0,Oy=typeof queueMicrotask=="function"?queueMicrotask:typeof _x<"u"?function(t){return _x.resolve(null).then(t).catch(Py)}:vx;function Py(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function yx(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),vs(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Do(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Do(r);for(var d=r.firstChild;d;){var S=d.nextSibling,A=d.nodeName;d[cr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=S}}else r==="body"&&Do(t.ownerDocument.body);r=u}while(r);vs(n)}function Sx(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function od(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":od(r),Ys(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function zy(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[cr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function Iy(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=di(t.nextSibling),t===null))return null;return t}function bx(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function ld(t){return t.data==="$?"||t.data==="$~"}function cd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Fy(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ud=null;function Mx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return di(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function Ex(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function Tx(t,n,r){switch(n=sc(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ys(t)}var hi=new Map,Ax=new Set;function oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=Z.d;Z.d={f:By,r:Hy,D:Vy,C:Gy,L:ky,m:Xy,X:Wy,S:jy,M:qy};function By(){var t=la.f(),n=Jl();return t||n}function Hy(t){var n=R(t);n!==null&&n.tag===5&&n.type==="form"?km(n):la.r(t)}var ms=typeof document>"u"?null:document;function Rx(t,n,r){var o=ms;if(o&&typeof n=="string"&&n){var u=Yt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Ax.has(u)||(Ax.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),ne(n),o.head.appendChild(n)))}}function Vy(t){la.D(t),Rx("dns-prefetch",t,null)}function Gy(t,n){la.C(t,n),Rx("preconnect",t,n)}function ky(t,n,r){la.L(t,n,r);var o=ms;if(o&&t&&n){var u='link[rel="preload"][as="'+Yt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Yt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Yt(r.imageSizes)+'"]')):u+='[href="'+Yt(t)+'"]';var d=u;switch(n){case"style":d=xs(t);break;case"script":d=gs(t)}hi.has(d)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),hi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Uo(d))||n==="script"&&o.querySelector(Lo(d))||(n=o.createElement("link"),wn(n,"link",t),ne(n),o.head.appendChild(n)))}}function Xy(t,n){la.m(t,n);var r=ms;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Yt(o)+'"][href="'+Yt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=gs(t)}if(!hi.has(d)&&(t=g({rel:"modulepreload",href:t},n),hi.set(d,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Lo(d)))return}o=r.createElement("link"),wn(o,"link",t),ne(o),r.head.appendChild(o)}}}function jy(t,n,r){la.S(t,n,r);var o=ms;if(o&&t){var u=oe(o).hoistableStyles,d=xs(t);n=n||"default";var S=u.get(d);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Uo(d)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=hi.get(d))&&fd(t,r);var B=S=o.createElement("link");ne(B),wn(B,"link",t),B._p=new Promise(function(te,pe){B.onload=te,B.onerror=pe}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,lc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(d,S)}}}function Wy(t,n){la.X(t,n);var r=ms;if(r&&t){var o=oe(r).hoistableScripts,u=gs(t),d=o.get(u);d||(d=r.querySelector(Lo(u)),d||(t=g({src:t,async:!0},n),(n=hi.get(u))&&dd(t,n),d=r.createElement("script"),ne(d),wn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function qy(t,n){la.M(t,n);var r=ms;if(r&&t){var o=oe(r).hoistableScripts,u=gs(t),d=o.get(u);d||(d=r.querySelector(Lo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&dd(t,n),d=r.createElement("script"),ne(d),wn(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Cx(t,n,r,o){var u=(u=re.current)?oc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=xs(r.href),r=oe(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=xs(r.href);var d=oe(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Uo(t)))&&!d._p&&(S.instance=d,S.state.loading=5),hi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},hi.set(t,r),d||Yy(u,t,r,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gs(r),r=oe(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xs(t){return'href="'+Yt(t)+'"'}function Uo(t){return'link[rel="stylesheet"]['+t+"]"}function wx(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Yy(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",r),ne(n),t.head.appendChild(n))}function gs(t){return'[src="'+Yt(t)+'"]'}function Lo(t){return"script[async]"+t}function Dx(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Yt(r.href)+'"]');if(o)return n.instance=o,ne(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ne(o),wn(o,"style",u),lc(o,r.precedence,t),n.instance=o;case"stylesheet":u=xs(r.href);var d=t.querySelector(Uo(u));if(d)return n.state.loading|=4,n.instance=d,ne(d),d;o=wx(r),(u=hi.get(u))&&fd(o,u),d=(t.ownerDocument||t).createElement("link"),ne(d);var S=d;return S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),wn(d,"link",o),n.state.loading|=4,lc(d,r.precedence,t),n.instance=d;case"script":return d=gs(r.src),(u=t.querySelector(Lo(d)))?(n.instance=u,ne(u),u):(o=r,(u=hi.get(d))&&(o=g({},r),dd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),ne(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,r.precedence,t));return n.instance}function lc(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function dd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var cc=null;function Ux(t,n,r){if(cc===null){var o=new Map,u=cc=new Map;u.set(r,o)}else u=cc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var d=r[u];if(!(d[cr]||d[ln]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var A=o.get(S);A?A.push(d):o.set(S,[d])}}return o}function Lx(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function Ky(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Nx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Zy(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=xs(o.href),d=n.querySelector(Uo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=uc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=d,ne(d);return}d=n.ownerDocument||n,o=wx(o),(u=hi.get(u))&&fd(o,u),d=d.createElement("link"),ne(d);var S=d;S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),wn(d,"link",o),r.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=uc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var hd=0;function Qy(t,n){return t.stylesheets&&t.count===0&&dc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&hd===0&&(hd=62500*Uy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>hd?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fc=null;function dc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fc=new Map,n.forEach(Jy,t),fc=null,uc.call(t))}function Jy(t,n){if(!(n.state.loading&4)){var r=fc.get(t);if(r)var o=r.get(null);else{r=new Map,fc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=r.get(S)||o,d===o&&r.set(null,u),r.set(S,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function $y(t,n,r,o,u,d,S,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Ox(t,n,r,o,u,d,S,A,B,te,pe,ve){return t=new $y(t,n,r,S,B,te,pe,ve,A),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),t.current=d,d.stateNode=t,n=ju(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:n},Ku(d),t}function Px(t){return t?(t=Yr,t):Yr}function zx(t,n,r,o,u,d){u=Px(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=Pa(t,o,n),r!==null&&(kn(r,t,n),uo(r,t,n))}function Ix(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function pd(t,n){Ix(t,n),(t=t.alternate)&&Ix(t,n)}function Fx(t){if(t.tag===13||t.tag===31){var n=hr(t,67108864);n!==null&&kn(n,t,67108864),pd(t,67108864)}}function Bx(t){if(t.tag===13||t.tag===31){var n=ti();n=gi(n);var r=hr(t,n);r!==null&&kn(r,t,n),pd(t,n)}}var hc=!0;function eS(t,n,r,o){var u=I.T;I.T=null;var d=Z.p;try{Z.p=2,md(t,n,r,o)}finally{Z.p=d,I.T=u}}function tS(t,n,r,o){var u=I.T;I.T=null;var d=Z.p;try{Z.p=8,md(t,n,r,o)}finally{Z.p=d,I.T=u}}function md(t,n,r,o){if(hc){var u=xd(o);if(u===null)td(t,n,o,pc,r),Vx(t,o);else if(iS(u,t,n,r,o))o.stopPropagation();else if(Vx(t,o),n&4&&-1<nS.indexOf(t)){for(;u!==null;){var d=R(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ee(d.pendingLanes);if(S!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var B=1<<31-Xe(S);A.entanglements[1]|=B,S&=~B}Li(d),(Pt&6)===0&&(Zl=_()+500,Ro(0))}}break;case 31:case 13:A=hr(d,2),A!==null&&kn(A,d,2),Jl(),pd(d,2)}if(d=xd(o),d===null&&td(t,n,o,pc,r),d===u)break;u=d}u!==null&&o.stopPropagation()}else td(t,n,o,null,r)}}function xd(t){return t=gu(t),gd(t)}var pc=null;function gd(t){if(pc=null,t=Aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===31){if(t=h(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return pc=t,null}function Hx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(H()){case Q:return 2;case de:return 8;case ie:case ze:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var vd=!1,Wa=null,qa=null,Ya=null,Oo=new Map,Po=new Map,Ka=[],nS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vx(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(t,n,r,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Fx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function iS(t,n,r,o,u){switch(n){case"focusin":return Wa=zo(Wa,t,n,r,o,u),!0;case"dragenter":return qa=zo(qa,t,n,r,o,u),!0;case"mouseover":return Ya=zo(Ya,t,n,r,o,u),!0;case"pointerover":var d=u.pointerId;return Oo.set(d,zo(Oo.get(d)||null,t,n,r,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Po.set(d,zo(Po.get(d)||null,t,n,r,o,u)),!0}return!1}function Gx(t){var n=Aa(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,qs(t.priority,function(){Bx(r)});return}}else if(n===31){if(n=h(r),n!==null){t.blockedOn=n,qs(t.priority,function(){Bx(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=xd(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);xu=o,r.target.dispatchEvent(o),xu=null}else return n=R(r),n!==null&&Fx(n),t.blockedOn=r,!1;n.shift()}return!0}function kx(t,n,r){mc(t)&&r.delete(n)}function aS(){vd=!1,Wa!==null&&mc(Wa)&&(Wa=null),qa!==null&&mc(qa)&&(qa=null),Ya!==null&&mc(Ya)&&(Ya=null),Oo.forEach(kx),Po.forEach(kx)}function xc(t,n){t.blockedOn===n&&(t.blockedOn=null,vd||(vd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,aS)))}var gc=null;function Xx(t){gc!==t&&(gc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){gc===t&&(gc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(gd(o||r)===null)continue;break}var d=R(r);d!==null&&(t.splice(n,3),n-=3,xf(d,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function vs(t){function n(B){return xc(B,t)}Wa!==null&&xc(Wa,t),qa!==null&&xc(qa,t),Ya!==null&&xc(Ya,t),Oo.forEach(n),Po.forEach(n);for(var r=0;r<Ka.length;r++){var o=Ka[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(r=Ka[0],r.blockedOn===null);)Gx(r),r.blockedOn===null&&Ka.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],d=r[o+1],S=u[mn]||null;if(typeof d=="function")S||Xx(r);else if(S){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[mn]||null)A=S.formAction;else if(gd(u)!==null)continue}else A=S.action;typeof A=="function"?r[o+1]=A:(r.splice(o,3),o-=3),Xx(r)}}}function jx(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}vc.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=ti();zx(r,o,t,n,null,null)},vc.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;zx(t.current,2,null,t,null,null),Jl(),n[ki]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ws();t={blockedOn:null,target:t,priority:n};for(var r=0;r<Ka.length&&n!==0&&n<Ka[r].priority;r++);Ka.splice(r,0,t),r===0&&Gx(t)}};var Wx=e.version;if(Wx!=="19.2.0")throw Error(s(527,Wx,"19.2.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var rS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{Me=_c.inject(rS),Te=_c}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",u=$m,d=e0,S=t0;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Ox(t,1,!1,null,null,r,o,null,u,d,S,jx),t[ki]=n.current,ed(t),new _d(n)},Fo.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,u="",d=$m,S=e0,A=t0,B=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(A=r.onRecoverableError),r.formState!==void 0&&(B=r.formState)),n=Ox(t,1,!0,n,r??null,o,u,B,d,S,A,jx),n.context=Px(null),r=n.current,o=ti(),o=gi(o),u=Oa(o),u.callback=null,Pa(r,u,o),r=o,n.current.lanes=r,Dn(n,r),Li(n),t[ki]=n.current,ed(t),new vc(n)},Fo.version="19.2.0",Fo}var ng;function mS(){if(ng)return bd.exports;ng=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),bd.exports=pS(),bd.exports}var xS=mS(),Ad={exports:{}},Rd={};var ig;function gS(){if(ig)return Rd;ig=1;var a=su().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return Rd.c=function(e){return a.H.useMemoCache(e)},Rd}var ag;function vS(){return ag||(ag=1,Ad.exports=gS()),Ad.exports}var Ct=vS();var rg="popstate";function _S(a={}){function e(s,l){let{pathname:c,search:f,hash:h}=s.location;return oh("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:Ko(l)}return SS(e,i,null,a)}function en(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Ii(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yS(){return Math.random().toString(36).substring(2,10)}function sg(a,e){return{usr:a.state,key:a.key,idx:e}}function oh(a,e,i=null,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Hs(e):e,state:i,key:e&&e.key||s||yS()}}function Ko({pathname:a="/",search:e="",hash:i=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(a+=i.charAt(0)==="#"?i:"#"+i),a}function Hs(a){let e={};if(a){let i=a.indexOf("#");i>=0&&(e.hash=a.substring(i),a=a.substring(0,i));let s=a.indexOf("?");s>=0&&(e.search=a.substring(s),a=a.substring(0,s)),a&&(e.pathname=a)}return e}function SS(a,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,h="POP",m=null,p=x();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function x(){return(f.state||{idx:null}).idx}function g(){h="POP";let b=x(),v=b==null?null:b-p;p=b,m&&m({action:h,location:T.location,delta:v})}function y(b,v){h="PUSH";let w=oh(T.location,b,v);p=x()+1;let U=sg(w,p),P=T.createHref(w);try{f.pushState(U,"",P)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(P)}c&&m&&m({action:h,location:T.location,delta:1})}function M(b,v){h="REPLACE";let w=oh(T.location,b,v);p=x();let U=sg(w,p),P=T.createHref(w);f.replaceState(U,"",P),c&&m&&m({action:h,location:T.location,delta:0})}function E(b){return bS(b)}let T={get action(){return h},get location(){return a(l,f)},listen(b){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(rg,g),m=b,()=>{l.removeEventListener(rg,g),m=null}},createHref(b){return e(l,b)},createURL:E,encodeLocation(b){let v=E(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:y,replace:M,go(b){return f.go(b)}};return T}function bS(a,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),en(i,"No window.location.(origin|href) available to create URL");let s=typeof a=="string"?a:Ko(a);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function uv(a,e,i="/"){return MS(a,e,i,!1)}function MS(a,e,i,s){let l=typeof e=="string"?Hs(e):e,c=ba(l.pathname||"/",i);if(c==null)return null;let f=fv(a);ES(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=PS(c);h=NS(f[m],p,s)}return h}function fv(a,e=[],i=[],s="",l=!1){let c=(f,h,m=l,p)=>{let x={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&m)return;en(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let g=ga([s,x.relativePath]),y=i.concat(x);f.children&&f.children.length>0&&(en(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),fv(f.children,e,y,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:US(g,f.index),routesMeta:y})};return a.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of dv(f.path))c(f,h,!0,m)}),e}function dv(a){let e=a.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=dv(s.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>a.startsWith("/")&&m===""?"/":m)}function ES(a){a.sort((e,i)=>e.score!==i.score?i.score-e.score:LS(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var TS=/^:[\w-]+$/,AS=3,RS=2,CS=1,wS=10,DS=-2,og=a=>a==="*";function US(a,e){let i=a.split("/"),s=i.length;return i.some(og)&&(s+=DS),e&&(s+=RS),i.filter(l=>!og(l)).reduce((l,c)=>l+(TS.test(c)?AS:c===""?CS:wS),s)}function LS(a,e){return a.length===e.length&&a.slice(0,-1).every((s,l)=>s===e[l])?a[a.length-1]-e[e.length-1]:0}function NS(a,e,i=!1){let{routesMeta:s}=a,l={},c="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",g=$c({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),y=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=$c({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:ga([c,g.pathname]),pathnameBase:BS(ga([c,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(c=ga([c,g.pathnameBase]))}return f}function $c(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[i,s]=OS(a.path,a.caseSensitive,a.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:s.reduce((p,{paramName:x,isOptional:g},y)=>{if(x==="*"){let E=h[y]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[y];return g&&!M?p[x]=void 0:p[x]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:a}}function OS(a,e=!1,i=!0){Ii(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let s=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(s.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function PS(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ii(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function ba(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=a.charAt(i);return s&&s!=="/"?null:a.slice(i)||"/"}function zS(a,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof a=="string"?Hs(a):a;return{pathname:i?i.startsWith("/")?i:IS(i,e):e,search:HS(s),hash:VS(l)}}function IS(a,e){let i=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Cd(a,e,i,s){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FS(a){return a.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function hv(a){let e=FS(a);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function pv(a,e,i,s=!1){let l;typeof a=="string"?l=Hs(a):(l={...a},en(!l.pathname||!l.pathname.includes("?"),Cd("?","pathname","search",l)),en(!l.pathname||!l.pathname.includes("#"),Cd("#","pathname","hash",l)),en(!l.search||!l.search.includes("#"),Cd("#","search","hash",l)));let c=a===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),g-=1;l.pathname=y.join("/")}h=g>=0?e[g]:"/"}let m=zS(l,h),p=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var ga=a=>a.join("/").replace(/\/\/+/g,"/"),BS=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),HS=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,VS=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function GS(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var mv=["POST","PUT","PATCH","DELETE"];new Set(mv);var kS=["GET",...mv];new Set(kS);var Vs=xe.createContext(null);Vs.displayName="DataRouter";var ou=xe.createContext(null);ou.displayName="DataRouterState";xe.createContext(!1);var xv=xe.createContext({isTransitioning:!1});xv.displayName="ViewTransition";var XS=xe.createContext(new Map);XS.displayName="Fetchers";var jS=xe.createContext(null);jS.displayName="Await";var Hi=xe.createContext(null);Hi.displayName="Navigation";var tl=xe.createContext(null);tl.displayName="Location";var Ta=xe.createContext({outlet:null,matches:[],isDataRoute:!1});Ta.displayName="Route";var $h=xe.createContext(null);$h.displayName="RouteError";function WS(a,{relative:e}={}){en(nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=xe.useContext(Hi),{hash:l,pathname:c,search:f}=il(a,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:ga([i,c])),s.createHref({pathname:h,search:f,hash:l})}function nl(){return xe.useContext(tl)!=null}function Br(){return en(nl(),"useLocation() may be used only in the context of a <Router> component."),xe.useContext(tl).location}var gv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vv(a){xe.useContext(Hi).static||xe.useLayoutEffect(a)}function qS(){let{isDataRoute:a}=xe.useContext(Ta);return a?s1():YS()}function YS(){en(nl(),"useNavigate() may be used only in the context of a <Router> component.");let a=xe.useContext(Vs),{basename:e,navigator:i}=xe.useContext(Hi),{matches:s}=xe.useContext(Ta),{pathname:l}=Br(),c=JSON.stringify(hv(s)),f=xe.useRef(!1);return vv(()=>{f.current=!0}),xe.useCallback((m,p={})=>{if(Ii(f.current,gv),!f.current)return;if(typeof m=="number"){i.go(m);return}let x=pv(m,JSON.parse(c),l,p.relative==="path");a==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:ga([e,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[e,i,c,l,a])}xe.createContext(null);function il(a,{relative:e}={}){let{matches:i}=xe.useContext(Ta),{pathname:s}=Br(),l=JSON.stringify(hv(i));return xe.useMemo(()=>pv(a,JSON.parse(l),s,e==="path"),[a,l,s,e])}function KS(a,e){return _v(a,e)}function _v(a,e,i,s,l){en(nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=xe.useContext(Hi),{matches:f}=xe.useContext(Ta),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",x=h?h.pathnameBase:"/",g=h&&h.route;{let w=g&&g.path||"";yv(p,!g||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let y=Br(),M;if(e){let w=typeof e=="string"?Hs(e):e;en(x==="/"||w.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${w.pathname}" was given in the \`location\` prop.`),M=w}else M=y;let E=M.pathname||"/",T=E;if(x!=="/"){let w=x.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(w.length).join("/")}let b=uv(a,{pathname:T});Ii(g||b!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Ii(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=e1(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:ga([x,c.encodeLocation?c.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?x:ga([x,c.encodeLocation?c.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,i,s,l);return e&&v?xe.createElement(tl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},v):v}function ZS(){let a=r1(),e=GS(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),i=a instanceof Error?a.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=xe.createElement(xe.Fragment,null,xe.createElement("p",null,"💿 Hey developer 👋"),xe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",xe.createElement("code",{style:c},"ErrorBoundary")," or"," ",xe.createElement("code",{style:c},"errorElement")," prop on your route.")),xe.createElement(xe.Fragment,null,xe.createElement("h2",null,"Unexpected Application Error!"),xe.createElement("h3",{style:{fontStyle:"italic"}},e),i?xe.createElement("pre",{style:l},i):null,f)}var QS=xe.createElement(ZS,null),JS=class extends xe.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.unstable_onError?this.props.unstable_onError(a,e):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?xe.createElement(Ta.Provider,{value:this.props.routeContext},xe.createElement($h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $S({routeContext:a,match:e,children:i}){let s=xe.useContext(Vs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),xe.createElement(Ta.Provider,{value:a},i)}function e1(a,e=[],i=null,s=null,l=null){if(a==null){if(!i)return null;if(i.errors)a=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)a=i.matches;else return null}let c=a,f=i?.errors;if(f!=null){let p=c.findIndex(x=>x.route.id&&f?.[x.route.id]!==void 0);en(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let h=!1,m=-1;if(i)for(let p=0;p<c.length;p++){let x=c[p];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=p),x.route.id){let{loaderData:g,errors:y}=i,M=x.route.loader&&!g.hasOwnProperty(x.route.id)&&(!y||y[x.route.id]===void 0);if(x.route.lazy||M){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((p,x,g)=>{let y,M=!1,E=null,T=null;i&&(y=f&&x.route.id?f[x.route.id]:void 0,E=x.route.errorElement||QS,h&&(m<0&&g===0?(yv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,T=null):m===g&&(M=!0,T=x.route.hydrateFallbackElement||null)));let b=e.concat(c.slice(0,g+1)),v=()=>{let w;return y?w=E:M?w=T:x.route.Component?w=xe.createElement(x.route.Component,null):x.route.element?w=x.route.element:w=p,xe.createElement($S,{match:x,routeContext:{outlet:p,matches:b,isDataRoute:i!=null},children:w})};return i&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?xe.createElement(JS,{location:i.location,revalidation:i.revalidation,component:E,error:y,children:v(),routeContext:{outlet:null,matches:b,isDataRoute:!0},unstable_onError:s}):v()},null)}function ep(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function t1(a){let e=xe.useContext(Vs);return en(e,ep(a)),e}function n1(a){let e=xe.useContext(ou);return en(e,ep(a)),e}function i1(a){let e=xe.useContext(Ta);return en(e,ep(a)),e}function tp(a){let e=i1(a),i=e.matches[e.matches.length-1];return en(i.route.id,`${a} can only be used on routes that contain a unique "id"`),i.route.id}function a1(){return tp("useRouteId")}function r1(){let a=xe.useContext($h),e=n1("useRouteError"),i=tp("useRouteError");return a!==void 0?a:e.errors?.[i]}function s1(){let{router:a}=t1("useNavigate"),e=tp("useNavigate"),i=xe.useRef(!1);return vv(()=>{i.current=!0}),xe.useCallback(async(l,c={})=>{Ii(i.current,gv),i.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...c}))},[a,e])}var lg={};function yv(a,e,i){!e&&!lg[a]&&(lg[a]=!0,Ii(!1,i))}xe.memo(o1);function o1({routes:a,future:e,state:i,unstable_onError:s}){return _v(a,void 0,i,s,e)}function Lr(a){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function l1({basename:a="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}){en(!nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),h=xe.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Hs(i));let{pathname:m="/",search:p="",hash:x="",state:g=null,key:y="default"}=i,M=xe.useMemo(()=>{let E=ba(m,f);return E==null?null:{location:{pathname:E,search:p,hash:x,state:g,key:y},navigationType:s}},[f,m,p,x,g,y,s]);return Ii(M!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:xe.createElement(Hi.Provider,{value:h},xe.createElement(tl.Provider,{children:e,value:M}))}function c1({children:a,location:e}){return KS(lh(a),e)}function lh(a,e=[]){let i=[];return xe.Children.forEach(a,(s,l)=>{if(!xe.isValidElement(s))return;let c=[...e,l];if(s.type===xe.Fragment){i.push.apply(i,lh(s.props.children,c));return}en(s.type===Lr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=lh(s.props.children,c)),i.push(f)}),i}var Wc="get",qc="application/x-www-form-urlencoded";function lu(a){return a!=null&&typeof a.tagName=="string"}function u1(a){return lu(a)&&a.tagName.toLowerCase()==="button"}function f1(a){return lu(a)&&a.tagName.toLowerCase()==="form"}function d1(a){return lu(a)&&a.tagName.toLowerCase()==="input"}function h1(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function p1(a,e){return a.button===0&&(!e||e==="_self")&&!h1(a)}var yc=null;function m1(){if(yc===null)try{new FormData(document.createElement("form"),0),yc=!1}catch{yc=!0}return yc}var x1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wd(a){return a!=null&&!x1.has(a)?(Ii(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qc}"`),null):a}function g1(a,e){let i,s,l,c,f;if(f1(a)){let h=a.getAttribute("action");s=h?ba(h,e):null,i=a.getAttribute("method")||Wc,l=wd(a.getAttribute("enctype"))||qc,c=new FormData(a)}else if(u1(a)||d1(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||h.getAttribute("action");if(s=m?ba(m,e):null,i=a.getAttribute("formmethod")||h.getAttribute("method")||Wc,l=wd(a.getAttribute("formenctype"))||wd(h.getAttribute("enctype"))||qc,c=new FormData(h,a),!m1()){let{name:p,type:x,value:g}=a;if(x==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,g)}}else{if(lu(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Wc,s=null,l=qc,f=a}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function np(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function v1(a,e,i){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s.pathname==="/"?s.pathname=`_root.${i}`:e&&ba(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${i}`,s}async function _1(a,e){if(a.id in e)return e[a.id];try{let i=await import(a.module);return e[a.id]=i,i}catch(i){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function y1(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function S1(a,e,i){let s=await Promise.all(a.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await _1(c,i);return f.links?f.links():[]}return[]}));return T1(s.flat(1).filter(y1).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function cg(a,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let x=s.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function b1(a,e,{includeHydrateFallback:i}={}){return M1(a.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function M1(a){return[...new Set(a)]}function E1(a){let e={},i=Object.keys(a).sort();for(let s of i)e[s]=a[s];return e}function T1(a,e){let i=new Set;return new Set(e),a.reduce((s,l)=>{let c=JSON.stringify(E1(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function Sv(){let a=xe.useContext(Vs);return np(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function A1(){let a=xe.useContext(ou);return np(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var ip=xe.createContext(void 0);ip.displayName="FrameworkContext";function bv(){let a=xe.useContext(ip);return np(a,"You must render this element inside a <HydratedRouter> element"),a}function R1(a,e){let i=xe.useContext(ip),[s,l]=xe.useState(!1),[c,f]=xe.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=e,y=xe.useRef(null);xe.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let T=v=>{v.forEach(w=>{f(w.isIntersecting)})},b=new IntersectionObserver(T,{threshold:.5});return y.current&&b.observe(y.current),()=>{b.disconnect()}}},[a]),xe.useEffect(()=>{if(s){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[s]);let M=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?a!=="intent"?[c,y,{}]:[c,y,{onFocus:Bo(h,M),onBlur:Bo(m,E),onMouseEnter:Bo(p,M),onMouseLeave:Bo(x,E),onTouchStart:Bo(g,M)}]:[!1,y,{}]}function Bo(a,e){return i=>{a&&a(i),i.defaultPrevented||e(i)}}function C1({page:a,...e}){let{router:i}=Sv(),s=xe.useMemo(()=>uv(i.routes,a,i.basename),[i.routes,a,i.basename]);return s?xe.createElement(D1,{page:a,matches:s,...e}):null}function w1(a){let{manifest:e,routeModules:i}=bv(),[s,l]=xe.useState([]);return xe.useEffect(()=>{let c=!1;return S1(a,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[a,e,i]),s}function D1({page:a,matches:e,...i}){let s=Br(),{manifest:l,routeModules:c}=bv(),{basename:f}=Sv(),{loaderData:h,matches:m}=A1(),p=xe.useMemo(()=>cg(a,e,m,l,s,"data"),[a,e,m,l,s]),x=xe.useMemo(()=>cg(a,e,m,l,s,"assets"),[a,e,m,l,s]),g=xe.useMemo(()=>{if(a===s.pathname+s.search+s.hash)return[];let E=new Set,T=!1;if(e.forEach(v=>{let w=l.routes[v.route.id];!w||!w.hasLoader||(!p.some(U=>U.route.id===v.route.id)&&v.route.id in h&&c[v.route.id]?.shouldRevalidate||w.hasClientLoader?T=!0:E.add(v.route.id))}),E.size===0)return[];let b=v1(a,f,"data");return T&&E.size>0&&b.searchParams.set("_routes",e.filter(v=>E.has(v.route.id)).map(v=>v.route.id).join(",")),[b.pathname+b.search]},[f,h,s,l,p,e,a,c]),y=xe.useMemo(()=>b1(x,l),[x,l]),M=w1(x);return xe.createElement(xe.Fragment,null,g.map(E=>xe.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),y.map(E=>xe.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:T})=>xe.createElement("link",{key:E,nonce:i.nonce,...T})))}function U1(...a){return e=>{a.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Mv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mv&&(window.__reactRouterVersion="7.9.5")}catch{}function L1({basename:a,children:e,window:i}){let s=xe.useRef();s.current==null&&(s.current=_S({window:i,v5Compat:!0}));let l=s.current,[c,f]=xe.useState({action:l.action,location:l.location}),h=xe.useCallback(m=>{xe.startTransition(()=>f(m))},[f]);return xe.useLayoutEffect(()=>l.listen(h),[l,h]),xe.createElement(l1,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:l})}var Ev=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zi=xe.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:x,viewTransition:g,...y},M){let{basename:E}=xe.useContext(Hi),T=typeof p=="string"&&Ev.test(p),b,v=!1;if(typeof p=="string"&&T&&(b=p,Mv))try{let D=new URL(window.location.href),C=p.startsWith("//")?new URL(D.protocol+p):new URL(p),k=ba(C.pathname,E);C.origin===D.origin&&k!=null?p=k+C.search+C.hash:v=!0}catch{Ii(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let w=WS(p,{relative:l}),[U,P,G]=R1(s,y),O=z1(p,{replace:f,state:h,target:m,preventScrollReset:x,relative:l,viewTransition:g});function F(D){e&&e(D),D.defaultPrevented||O(D)}let J=xe.createElement("a",{...y,...G,href:b||w,onClick:v||c?e:F,ref:U1(M,P),target:m,"data-discover":!T&&i==="render"?"true":void 0});return U&&!T?xe.createElement(xe.Fragment,null,J,xe.createElement(C1,{page:w})):J});zi.displayName="Link";var N1=xe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},x){let g=il(f,{relative:p.relative}),y=Br(),M=xe.useContext(ou),{navigator:E,basename:T}=xe.useContext(Hi),b=M!=null&&V1(g)&&h===!0,v=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,w=y.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),U=U?U.toLowerCase():null,v=v.toLowerCase()),U&&T&&(U=ba(U,T)||U);const P=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let G=w===v||!l&&w.startsWith(v)&&w.charAt(P)==="/",O=U!=null&&(U===v||!l&&U.startsWith(v)&&U.charAt(v.length)==="/"),F={isActive:G,isPending:O,isTransitioning:b},J=G?e:void 0,D;typeof s=="function"?D=s(F):D=[s,G?"active":null,O?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(F):c;return xe.createElement(zi,{...p,"aria-current":J,className:D,ref:x,style:C,to:f,viewTransition:h},typeof m=="function"?m(F):m)});N1.displayName="NavLink";var O1=xe.forwardRef(({discover:a="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=Wc,action:h,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,...y},M)=>{let E=B1(),T=H1(h,{relative:p}),b=f.toLowerCase()==="get"?"get":"post",v=typeof h=="string"&&Ev.test(h),w=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let P=U.nativeEvent.submitter,G=P?.getAttribute("formmethod")||f;E(P||U.currentTarget,{fetcherKey:e,method:G,navigate:i,replace:l,state:c,relative:p,preventScrollReset:x,viewTransition:g})};return xe.createElement("form",{ref:M,method:b,action:T,onSubmit:s?m:w,...y,"data-discover":!v&&a==="render"?"true":void 0})});O1.displayName="Form";function P1(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tv(a){let e=xe.useContext(Vs);return en(e,P1(a)),e}function z1(a,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=qS(),m=Br(),p=il(a,{relative:c});return xe.useCallback(x=>{if(p1(x,e)){x.preventDefault();let g=i!==void 0?i:Ko(m)===Ko(p);h(a,{replace:g,state:s,preventScrollReset:l,relative:c,viewTransition:f})}},[m,h,p,i,s,e,a,l,c,f])}var I1=0,F1=()=>`__${String(++I1)}__`;function B1(){let{router:a}=Tv("useSubmit"),{basename:e}=xe.useContext(Hi),i=a1();return xe.useCallback(async(s,l={})=>{let{action:c,method:f,encType:h,formData:m,body:p}=g1(s,e);if(l.navigate===!1){let x=l.fetcherKey||F1();await a.fetch(x,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await a.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,i])}function H1(a,{relative:e}={}){let{basename:i}=xe.useContext(Hi),s=xe.useContext(Ta);en(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...il(a||".",{relative:e})},f=Br();if(a==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let x=h.toString();c.search=x?`?${x}`:""}}return(!a||a===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ga([i,c.pathname])),Ko(c)}function V1(a,{relative:e}={}){let i=xe.useContext(xv);en(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Tv("useViewTransitionState"),l=il(a,{relative:e});if(!i.isTransitioning)return!1;let c=ba(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=ba(i.nextLocation.pathname,s)||i.nextLocation.pathname;return $c(l.pathname,f)!=null||$c(l.pathname,c)!=null}const ap="181",G1=0,ug=1,k1=2,Av=1,X1=2,ma=3,sr=0,jn=1,xa=2,va=0,Ns=1,ch=2,fg=3,dg=4,j1=5,Or=100,W1=101,q1=102,Y1=103,K1=104,Z1=200,Q1=201,J1=202,$1=203,uh=204,fh=205,eb=206,tb=207,nb=208,ib=209,ab=210,rb=211,sb=212,ob=213,lb=214,dh=0,hh=1,ph=2,Ps=3,mh=4,xh=5,gh=6,vh=7,Rv=0,cb=1,ub=2,rr=0,fb=1,db=2,hb=3,pb=4,mb=5,xb=6,gb=7,Cv=300,zs=301,Is=302,_h=303,yh=304,cu=306,Sh=1e3,ai=1001,bh=1002,ri=1003,vb=1004,Sc=1005,On=1006,Dd=1007,zr=1008,Ma=1009,wv=1010,Dv=1011,Zo=1012,rp=1013,Fr=1014,Oi=1015,Hr=1016,sp=1017,op=1018,Qo=1020,Uv=35902,Lv=35899,Nv=1021,Ov=1022,xi=1023,Jo=1026,$o=1027,Pv=1028,lp=1029,cp=1030,up=1031,fp=1033,Yc=33776,Kc=33777,Zc=33778,Qc=33779,Mh=35840,Eh=35841,Th=35842,Ah=35843,Rh=36196,Ch=37492,wh=37496,Dh=37808,Uh=37809,Lh=37810,Nh=37811,Oh=37812,Ph=37813,zh=37814,Ih=37815,Fh=37816,Bh=37817,Hh=37818,Vh=37819,Gh=37820,kh=37821,Xh=36492,jh=36494,Wh=36495,qh=36283,Yh=36284,Kh=36285,Zh=36286,_b=3200,yb=3201,Sb=0,bb=1,ir="",mi="srgb",Fs="srgb-linear",eu="linear",jt="srgb",_s=7680,hg=519,Mb=512,Eb=513,Tb=514,zv=515,Ab=516,Rb=517,Cb=518,wb=519,pg=35044,mg="300 es",Pi=2e3,tu=2001;function Iv(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function nu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Db(){const a=nu("canvas");return a.style.display="block",a}const xg={};function gg(...a){const e="THREE."+a.shift();console.log(e,...a)}function ot(...a){const e="THREE."+a.shift();console.warn(e,...a)}function on(...a){const e="THREE."+a.shift();console.error(e,...a)}function el(...a){const e=a.join(" ");e in xg||(xg[e]=!0,ot(...a))}function Ub(a,e,i){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,Qh=180/Math.PI;function al(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function At(a,e,i){return Math.max(e,Math.min(i,a))}function Lb(a,e){return(a%e+e)%e}function Ld(a,e,i){return(1-i)*a+i*e}function Ho(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Xn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,i=0){ct.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],y=c[f+0],M=c[f+1],E=c[f+2],T=c[f+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h>=1){e[i+0]=y,e[i+1]=M,e[i+2]=E,e[i+3]=T;return}if(g!==T||m!==y||p!==M||x!==E){let b=m*y+p*M+x*E+g*T;b<0&&(y=-y,M=-M,E=-E,T=-T,b=-b);let v=1-h;if(b<.9995){const w=Math.acos(b),U=Math.sin(w);v=Math.sin(v*w)/U,h=Math.sin(h*w)/U,m=m*v+y*h,p=p*v+M*h,x=x*v+E*h,g=g*v+T*h}else{m=m*v+y*h,p=p*v+M*h,x=x*v+E*h,g=g*v+T*h;const w=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=w,p*=w,x*=w,g*=w}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[f],y=c[f+1],M=c[f+2],E=c[f+3];return e[i]=h*E+x*g+m*M-p*y,e[i+1]=m*E+x*y+p*g-h*M,e[i+2]=p*E+x*M+h*y-m*g,e[i+3]=x*E-h*g-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),g=h(c/2),y=m(s/2),M=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=y*x*g+p*M*E,this._y=p*M*g-y*x*E,this._z=p*x*E+y*M*g,this._w=p*x*g-y*M*E;break;case"YXZ":this._x=y*x*g+p*M*E,this._y=p*M*g-y*x*E,this._z=p*x*E-y*M*g,this._w=p*x*g+y*M*E;break;case"ZXY":this._x=y*x*g-p*M*E,this._y=p*M*g+y*x*E,this._z=p*x*E+y*M*g,this._w=p*x*g-y*M*E;break;case"ZYX":this._x=y*x*g-p*M*E,this._y=p*M*g+y*x*E,this._z=p*x*E-y*M*g,this._w=p*x*g+y*M*E;break;case"YZX":this._x=y*x*g+p*M*E,this._y=p*M*g+y*x*E,this._z=p*x*E-y*M*g,this._w=p*x*g-y*M*E;break;case"XZY":this._x=y*x*g-p*M*E,this._y=p*M*g-y*x*E,this._z=p*x*E+y*M*g,this._w=p*x*g+y*M*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],y=s+h+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>h&&s>g){const M=2*Math.sqrt(1+s-h-g);this._w=(x-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-s-g);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-s-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+f*h+l*p-c*m,this._y=l*x+f*m+c*h-s*p,this._z=c*x+f*p+s*m-l*h,this._w=f*x-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,i=0,s=0){ce.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(vg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(vg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),x=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-h*x,this.y=s+m*x+h*p-c*g,this.z=l+m*g+c*x-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new ce,vg=new rl;class mt{constructor(e,i,s,l,c,f,h,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],x=s[4],g=s[7],y=s[2],M=s[5],E=s[8],T=l[0],b=l[3],v=l[6],w=l[1],U=l[4],P=l[7],G=l[2],O=l[5],F=l[8];return c[0]=f*T+h*w+m*G,c[3]=f*b+h*U+m*O,c[6]=f*v+h*P+m*F,c[1]=p*T+x*w+g*G,c[4]=p*b+x*U+g*O,c[7]=p*v+x*P+g*F,c[2]=y*T+M*w+E*G,c[5]=y*b+M*U+E*O,c[8]=y*v+M*P+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*f*x-i*h*p-s*c*x+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*f-h*p,y=h*m-x*c,M=p*c-f*m,E=i*g+s*y+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(l*p-x*s)*T,e[2]=(h*s-l*f)*T,e[3]=y*T,e[4]=(x*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=M*T,e[7]=(s*m-p*i)*T,e[8]=(f*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Od.makeScale(e,i)),this}rotate(e){return this.premultiply(Od.makeRotation(-e)),this}translate(e,i){return this.premultiply(Od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Od=new mt,_g=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nb(){const a={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===jt&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===jt&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ir?eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return el("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return el("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[Fs]:{primaries:e,whitePoint:s,transfer:eu,toXYZ:_g,fromXYZ:yg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:jt,toXYZ:_g,fromXYZ:yg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),a}const Ot=Nb();function _a(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Os(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ys;class Ob{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ys===void 0&&(ys=nu("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=ys}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=_a(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_a(i[s]/255)*255):i[s]=_a(i[s]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pb=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Pd(l[f].image)):c.push(Pd(l[f]))}else c=Pd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Pd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ob.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let zb=0;const zd=new ce;class In extends Gs{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=ai,l=ai,c=On,f=zr,h=xi,m=Ma,p=In.DEFAULT_ANISOTROPY,x=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=al(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zd).x}get height(){return this.source.getSize(zd).y}get depth(){return this.source.getSize(zd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sh:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sh:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Cv;In.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],y=m[1],M=m[5],E=m[9],T=m[2],b=m[6],v=m[10];if(Math.abs(x-y)<.01&&Math.abs(g-T)<.01&&Math.abs(E-b)<.01){if(Math.abs(x+y)<.1&&Math.abs(g+T)<.1&&Math.abs(E+b)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,P=(M+1)/2,G=(v+1)/2,O=(x+y)/4,F=(g+T)/4,J=(E+b)/4;return U>P&&U>G?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=O/s,c=F/s):P>G?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=O/l,c=J/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=F/c,l=J/c),this.set(s,l,c,i),this}let w=Math.sqrt((b-E)*(b-E)+(g-T)*(g-T)+(y-x)*(y-x));return Math.abs(w)<.001&&(w=1),this.x=(b-E)/w,this.y=(g-T)/w,this.z=(y-x)/w,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this.w=At(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this.w=At(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ib extends Gs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new In(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new dp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends Ib{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Fv extends In{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fb extends In{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(e=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Si.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Si.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Si.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Si):Si.fromBufferAttribute(c,f),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bc.copy(s.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Mc.subVectors(this.max,Vo),Ss.subVectors(e.a,Vo),bs.subVectors(e.b,Vo),Ms.subVectors(e.c,Vo),Qa.subVectors(bs,Ss),Ja.subVectors(Ms,bs),Ar.subVectors(Ss,Ms);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Ar.z,Ar.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Ar.z,0,-Ar.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Ar.y,Ar.x,0];return!Id(i,Ss,bs,Ms,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Id(i,Ss,bs,Ms,Mc))?!1:(Ec.crossVectors(Qa,Ja),i=[Ec.x,Ec.y,Ec.z],Id(i,Ss,bs,Ms,Mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ca=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Si=new ce,bc=new sl,Ss=new ce,bs=new ce,Ms=new ce,Qa=new ce,Ja=new ce,Ar=new ce,Vo=new ce,Mc=new ce,Ec=new ce,Rr=new ce;function Id(a,e,i,s,l){for(let c=0,f=a.length-3;c<=f;c+=3){Rr.fromArray(a,c);const h=l.x*Math.abs(Rr.x)+l.y*Math.abs(Rr.y)+l.z*Math.abs(Rr.z),m=e.dot(Rr),p=i.dot(Rr),x=s.dot(Rr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const Bb=new sl,Go=new ce,Fd=new ce;class uu{constructor(e=new ce,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Bb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const i=Go.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Go,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Fd)),this.expandByPoint(Go.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ua=new ce,Bd=new ce,Tc=new ce,$a=new ce,Hd=new ce,Ac=new ce,Vd=new ce;class Bv{constructor(e=new ce,i=new ce(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Bd.copy(e).add(i).multiplyScalar(.5),Tc.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(Bd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Tc),h=$a.dot(this.direction),m=-$a.dot(Tc),p=$a.lengthSq(),x=Math.abs(1-f*f);let g,y,M,E;if(x>0)if(g=f*m-h,y=f*h-m,E=c*x,g>=0)if(y>=-E)if(y<=E){const T=1/x;g*=T,y*=T,M=g*(g+f*y+2*h)+y*(f*g+y+2*m)+p}else y=c,g=Math.max(0,-(f*y+h)),M=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(f*y+h)),M=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-f*c+h)),y=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(g=Math.max(0,-(f*c+h)),y=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p);else y=f>0?-c:c,g=Math.max(0,-(f*y+h)),M=-g*g+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Bd).addScaledVector(Tc,y),M}intersectSphere(e,i){ua.subVectors(e.center,this.origin);const s=ua.dot(this.direction),l=ua.dot(ua)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),x>=0?(c=(e.min.y-y.y)*x,f=(e.max.y-y.y)*x):(c=(e.max.y-y.y)*x,f=(e.min.y-y.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(h=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ua)!==null}intersectTriangle(e,i,s,l,c){Hd.subVectors(i,e),Ac.subVectors(s,e),Vd.crossVectors(Hd,Ac);let f=this.direction.dot(Vd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,e);const m=h*this.direction.dot(Ac.crossVectors($a,Ac));if(m<0)return null;const p=h*this.direction.dot(Hd.cross($a));if(p<0||m+p>f)return null;const x=-h*$a.dot(Vd);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,i,s,l,c,f,h,m,p,x,g,y,M,E,T,b){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,x,g,y,M,E,T,b)}set(e,i,s,l,c,f,h,m,p,x,g,y,M,E,T,b){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=y,v[3]=M,v[7]=E,v[11]=T,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Es.setFromMatrixColumn(e,0).length(),c=1/Es.setFromMatrixColumn(e,1).length(),f=1/Es.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=f*x,M=f*g,E=h*x,T=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=y-T*p,i[9]=-h*m,i[2]=T-y*p,i[6]=E+M*p,i[10]=f*m}else if(e.order==="YXZ"){const y=m*x,M=m*g,E=p*x,T=p*g;i[0]=y+T*h,i[4]=E*h-M,i[8]=f*p,i[1]=f*g,i[5]=f*x,i[9]=-h,i[2]=M*h-E,i[6]=T+y*h,i[10]=f*m}else if(e.order==="ZXY"){const y=m*x,M=m*g,E=p*x,T=p*g;i[0]=y-T*h,i[4]=-f*g,i[8]=E+M*h,i[1]=M+E*h,i[5]=f*x,i[9]=T-y*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const y=f*x,M=f*g,E=h*x,T=h*g;i[0]=m*x,i[4]=E*p-M,i[8]=y*p+T,i[1]=m*g,i[5]=T*p+y,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const y=f*m,M=f*p,E=h*m,T=h*p;i[0]=m*x,i[4]=T-y*g,i[8]=E*g+M,i[1]=g,i[5]=f*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*g+E,i[10]=y-T*g}else if(e.order==="XZY"){const y=f*m,M=f*p,E=h*m,T=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=y*g+T,i[5]=f*x,i[9]=M*g-E,i[2]=E*g-M,i[6]=h*x,i[10]=T*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hb,e,Vb)}lookAt(e,i,s){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),er.crossVectors(s,ni),er.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),er.crossVectors(s,ni)),er.normalize(),Rc.crossVectors(ni,er),l[0]=er.x,l[4]=Rc.x,l[8]=ni.x,l[1]=er.y,l[5]=Rc.y,l[9]=ni.y,l[2]=er.z,l[6]=Rc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],x=s[1],g=s[5],y=s[9],M=s[13],E=s[2],T=s[6],b=s[10],v=s[14],w=s[3],U=s[7],P=s[11],G=s[15],O=l[0],F=l[4],J=l[8],D=l[12],C=l[1],k=l[5],$=l[9],ue=l[13],he=l[2],me=l[6],I=l[10],Z=l[14],Y=l[3],ye=l[7],Se=l[11],z=l[15];return c[0]=f*O+h*C+m*he+p*Y,c[4]=f*F+h*k+m*me+p*ye,c[8]=f*J+h*$+m*I+p*Se,c[12]=f*D+h*ue+m*Z+p*z,c[1]=x*O+g*C+y*he+M*Y,c[5]=x*F+g*k+y*me+M*ye,c[9]=x*J+g*$+y*I+M*Se,c[13]=x*D+g*ue+y*Z+M*z,c[2]=E*O+T*C+b*he+v*Y,c[6]=E*F+T*k+b*me+v*ye,c[10]=E*J+T*$+b*I+v*Se,c[14]=E*D+T*ue+b*Z+v*z,c[3]=w*O+U*C+P*he+G*Y,c[7]=w*F+U*k+P*me+G*ye,c[11]=w*J+U*$+P*I+G*Se,c[15]=w*D+U*ue+P*Z+G*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],y=e[10],M=e[14],E=e[3],T=e[7],b=e[11],v=e[15];return E*(+c*m*g-l*p*g-c*h*y+s*p*y+l*h*M-s*m*M)+T*(+i*m*M-i*p*y+c*f*y-l*f*M+l*p*x-c*m*x)+b*(+i*p*g-i*h*M-c*f*g+s*f*M+c*h*x-s*p*x)+v*(-l*h*x-i*m*g+i*h*y+l*f*g-s*f*y+s*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],y=e[10],M=e[11],E=e[12],T=e[13],b=e[14],v=e[15],w=g*b*p-T*y*p+T*m*M-h*b*M-g*m*v+h*y*v,U=E*y*p-x*b*p-E*m*M+f*b*M+x*m*v-f*y*v,P=x*T*p-E*g*p+E*h*M-f*T*M-x*h*v+f*g*v,G=E*g*m-x*T*m-E*h*y+f*T*y+x*h*b-f*g*b,O=i*w+s*U+l*P+c*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=w*F,e[1]=(T*y*c-g*b*c-T*l*M+s*b*M+g*l*v-s*y*v)*F,e[2]=(h*b*c-T*m*c+T*l*p-s*b*p-h*l*v+s*m*v)*F,e[3]=(g*m*c-h*y*c-g*l*p+s*y*p+h*l*M-s*m*M)*F,e[4]=U*F,e[5]=(x*b*c-E*y*c+E*l*M-i*b*M-x*l*v+i*y*v)*F,e[6]=(E*m*c-f*b*c-E*l*p+i*b*p+f*l*v-i*m*v)*F,e[7]=(f*y*c-x*m*c+x*l*p-i*y*p-f*l*M+i*m*M)*F,e[8]=P*F,e[9]=(E*g*c-x*T*c-E*s*M+i*T*M+x*s*v-i*g*v)*F,e[10]=(f*T*c-E*h*c+E*s*p-i*T*p-f*s*v+i*h*v)*F,e[11]=(x*h*c-f*g*c-x*s*p+i*g*p+f*s*M-i*h*M)*F,e[12]=G*F,e[13]=(x*T*l-E*g*l+E*s*y-i*T*y-x*s*b+i*g*b)*F,e[14]=(E*h*l-f*T*l-E*s*m+i*T*m+f*s*b-i*h*b)*F,e[15]=(f*g*l-x*h*l+x*s*m-i*g*m-f*s*y+i*h*y)*F,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,x=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*f,0,p*m-l*h,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,x=f+f,g=h+h,y=c*p,M=c*x,E=c*g,T=f*x,b=f*g,v=h*g,w=m*p,U=m*x,P=m*g,G=s.x,O=s.y,F=s.z;return l[0]=(1-(T+v))*G,l[1]=(M+P)*G,l[2]=(E-U)*G,l[3]=0,l[4]=(M-P)*O,l[5]=(1-(y+v))*O,l[6]=(b+w)*O,l[7]=0,l[8]=(E+U)*F,l[9]=(b-w)*F,l[10]=(1-(y+T))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=Es.set(l[0],l[1],l[2]).length();const f=Es.set(l[4],l[5],l[6]).length(),h=Es.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const p=1/c,x=1/f,g=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=x,bi.elements[5]*=x,bi.elements[6]*=x,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=Pi,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(s-l),y=(i+e)/(i-e),M=(s+l)/(s-l);let E,T;if(m)E=c/(f-c),T=f*c/(f-c);else if(h===Pi)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===tu)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=Pi,m=!1){const p=this.elements,x=2/(i-e),g=2/(s-l),y=-(i+e)/(i-e),M=-(s+l)/(s-l);let E,T;if(m)E=1/(f-c),T=f/(f-c);else if(h===Pi)E=-2/(f-c),T=-(f+c)/(f-c);else if(h===tu)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Es=new ce,bi=new pn,Hb=new ce(0,0,0),Vb=new ce(1,1,1),er=new ce,Rc=new ce,ni=new ce,Sg=new pn,bg=new rl;class Ea{constructor(e=0,i=0,s=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return bg.setFromEuler(this),this.setFromQuaternion(bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gb=0;const Mg=new ce,Ts=new rl,fa=new pn,Cc=new ce,ko=new ce,kb=new ce,Xb=new rl,Eg=new ce(1,0,0),Tg=new ce(0,1,0),Ag=new ce(0,0,1),Rg={type:"added"},jb={type:"removed"},As={type:"childadded",child:null},Gd={type:"childremoved",child:null};class Wn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new ce,i=new Ea,s=new rl,l=new ce(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new mt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Eg,e)}rotateY(e){return this.rotateOnAxis(Tg,e)}rotateZ(e){return this.rotateOnAxis(Ag,e)}translateOnAxis(e,i){return Mg.copy(e).applyQuaternion(this.quaternion),this.position.add(Mg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Eg,e)}translateY(e){return this.translateOnAxis(Tg,e)}translateZ(e){return this.translateOnAxis(Ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Cc.copy(e):Cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(ko,Cc,this.up):fa.lookAt(Cc,ko,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(fa),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(on("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rg),As.child=e,this.dispatchEvent(As),As.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(jb),Gd.child=e,this.dispatchEvent(Gd),Gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rg),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,kb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,Xb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),x=f(e.images),g=f(e.shapes),y=f(e.skeletons),M=f(e.animations),E=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new ce(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new ce,da=new ce,kd=new ce,ha=new ce,Rs=new ce,Cs=new ce,Cg=new ce,Xd=new ce,jd=new ce,Wd=new ce,qd=new an,Yd=new an,Kd=new an;class Ti{constructor(e=new ce,i=new ce,s=new ce){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Mi.subVectors(e,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Mi.subVectors(l,i),da.subVectors(s,i),kd.subVectors(e,i);const f=Mi.dot(Mi),h=Mi.dot(da),m=Mi.dot(kd),p=da.dot(da),x=da.dot(kd),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const y=1/g,M=(p*m-h*x)*y,E=(f*x-h*m)*y;return c.set(1-M-E,E,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(f,ha.y),m.addScaledVector(h,ha.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return qd.setScalar(0),Yd.setScalar(0),Kd.setScalar(0),qd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,s),Kd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(qd,c.x),f.addScaledVector(Yd,c.y),f.addScaledVector(Kd,c.z),f}static isFrontFacing(e,i,s,l){return Mi.subVectors(s,i),da.subVectors(e,i),Mi.cross(da).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Mi.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ti.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Rs.subVectors(l,s),Cs.subVectors(c,s),Xd.subVectors(e,s);const m=Rs.dot(Xd),p=Cs.dot(Xd);if(m<=0&&p<=0)return i.copy(s);jd.subVectors(e,l);const x=Rs.dot(jd),g=Cs.dot(jd);if(x>=0&&g<=x)return i.copy(l);const y=m*g-x*p;if(y<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(Rs,f);Wd.subVectors(e,c);const M=Rs.dot(Wd),E=Cs.dot(Wd);if(E>=0&&M<=E)return i.copy(c);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(Cs,h);const b=x*E-M*g;if(b<=0&&g-x>=0&&M-E>=0)return Cg.subVectors(c,l),h=(g-x)/(g-x+(M-E)),i.copy(l).addScaledVector(Cg,h);const v=1/(b+T+y);return f=T*v,h=y*v,i.copy(s).addScaledVector(Rs,f).addScaledVector(Cs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Zd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class zt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ot.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ot.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ot.workingColorSpace){if(e=Lb(e,1),i=At(i,0,1),s=At(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Zd(f,c,e+1/3),this.g=Zd(f,c,e),this.b=Zd(f,c,e-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function s(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=Vv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ot.workingToColorSpace(Nn.copy(this),e),Math.round(At(Nn.r*255,0,255))*65536+Math.round(At(Nn.g*255,0,255))*256+Math.round(At(Nn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ot.workingColorSpace){Ot.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const x=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=x<=.5?g/(f+h):g/(2-f-h),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Ot.workingColorSpace){return Ot.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=mi){Ot.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,s=Nn.g,l=Nn.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+i,tr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(tr),e.getHSL(wc);const s=Ld(tr.h,wc.h,i),l=Ld(tr.s,wc.s,i),c=Ld(tr.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new zt;zt.NAMES=Vv;let Wb=0;class ol extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Ns,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(s.blending=this.blending),this.side!==sr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==uh&&(s.blendSrc=this.blendSrc),this.blendDst!==fh&&(s.blendDst=this.blendDst),this.blendEquation!==Or&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gv extends ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=Rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new ce,Dc=new ct;let qb=0;class Ai{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=pg,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(e),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ho(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pg&&(e.usage=this.usage),e}}class kv extends Ai{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Xv extends Ai{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ya extends Ai{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Yb=0;const pi=new pn,Qd=new Wn,ws=new ce,ii=new sl,Xo=new sl,En=new ce;class Vi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iv(e)?Xv:kv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new mt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ya(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Xo.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ii.min,Xo.min),ii.expandByPoint(En),En.addVectors(ii.max,Xo.max),ii.expandByPoint(En)):(ii.expandByPoint(Xo.min),ii.expandByPoint(Xo.max))}ii.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)En.fromBufferAttribute(h,p),m&&(ws.fromBufferAttribute(e,p),En.add(ws)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let J=0;J<s.count;J++)h[J]=new ce,m[J]=new ce;const p=new ce,x=new ce,g=new ce,y=new ct,M=new ct,E=new ct,T=new ce,b=new ce;function v(J,D,C){p.fromBufferAttribute(s,J),x.fromBufferAttribute(s,D),g.fromBufferAttribute(s,C),y.fromBufferAttribute(c,J),M.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),x.sub(p),g.sub(p),M.sub(y),E.sub(y);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(T.copy(x).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(k),b.copy(g).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(k),h[J].add(T),h[D].add(T),h[C].add(T),m[J].add(b),m[D].add(b),m[C].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let J=0,D=w.length;J<D;++J){const C=w[J],k=C.start,$=C.count;for(let ue=k,he=k+$;ue<he;ue+=3)v(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const U=new ce,P=new ce,G=new ce,O=new ce;function F(J){G.fromBufferAttribute(l,J),O.copy(G);const D=h[J];U.copy(D),U.sub(G.multiplyScalar(G.dot(D))).normalize(),P.crossVectors(O,D);const k=P.dot(m[J])<0?-1:1;f.setXYZW(J,U.x,U.y,U.z,k)}for(let J=0,D=w.length;J<D;++J){const C=w[J],k=C.start,$=C.count;for(let ue=k,he=k+$;ue<he;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new ce,c=new ce,f=new ce,h=new ce,m=new ce,p=new ce,x=new ce,g=new ce;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),T=e.getX(y+1),b=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,b),h.add(x),m.add(x),p.add(x),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),s.setXYZ(y+0,x.x,x.y,x.z),s.setXYZ(y+1,x.x,x.y,x.z),s.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,y=new p.constructor(m.length*x);let M=0,E=0;for(let T=0,b=m.length;T<b;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*x;for(let v=0;v<x;v++)y[E++]=p[M++]}return new Ai(y,x,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Vi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const y=p[x],M=e(y,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,y=p.length;g<y;g++){const M=p[g];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let y=0,M=g.length;y<M;y++)x.push(g[y].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,x=f.length;p<x;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wg=new pn,Cr=new Bv,Uc=new uu,Dg=new ce,Lc=new ce,Nc=new ce,Oc=new ce,Jd=new ce,Pc=new ce,Ug=new ce,zc=new ce;class Ri extends Wn{constructor(e=new Vi,i=new Gv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(Jd.fromBufferAttribute(g,e),f?Pc.addScaledVector(Jd,x):Pc.addScaledVector(Jd.sub(i),x))}i.add(Pc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),Cr.copy(e.ray).recast(e.near),!(Uc.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Uc,Dg)===null||Cr.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(wg.copy(c).invert(),Cr.copy(e.ray).applyMatrix4(wg),!(s.boundingBox!==null&&Cr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Cr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,y=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const b=y[E],v=f[b.materialIndex],w=Math.max(b.start,M.start),U=Math.min(h.count,Math.min(b.start+b.count,M.start+M.count));for(let P=w,G=U;P<G;P+=3){const O=h.getX(P),F=h.getX(P+1),J=h.getX(P+2);l=Ic(this,v,e,s,p,x,g,O,F,J),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let b=E,v=T;b<v;b+=3){const w=h.getX(b),U=h.getX(b+1),P=h.getX(b+2);l=Ic(this,f,e,s,p,x,g,w,U,P),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const b=y[E],v=f[b.materialIndex],w=Math.max(b.start,M.start),U=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let P=w,G=U;P<G;P+=3){const O=P,F=P+1,J=P+2;l=Ic(this,v,e,s,p,x,g,O,F,J),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let b=E,v=T;b<v;b+=3){const w=b,U=b+1,P=b+2;l=Ic(this,f,e,s,p,x,g,w,U,P),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function Kb(a,e,i,s,l,c,f,h){let m;if(e.side===jn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===sr,h),m===null)return null;zc.copy(h),zc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(zc);return p<i.near||p>i.far?null:{distance:p,point:zc.clone(),object:a}}function Ic(a,e,i,s,l,c,f,h,m,p){a.getVertexPosition(h,Lc),a.getVertexPosition(m,Nc),a.getVertexPosition(p,Oc);const x=Kb(a,e,i,s,Lc,Nc,Oc,Ug);if(x){const g=new ce;Ti.getBarycoord(Ug,Lc,Nc,Oc,g),l&&(x.uv=Ti.getInterpolatedAttribute(l,h,m,p,g,new ct)),c&&(x.uv1=Ti.getInterpolatedAttribute(c,h,m,p,g,new ct)),f&&(x.normal=Ti.getInterpolatedAttribute(f,h,m,p,g,new ce),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new ce,materialIndex:0};Ti.getNormal(Lc,Nc,Oc,y.normal),x.face=y,x.barycoord=g}return x}class ll extends Vi{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],x=[],g=[];let y=0,M=0;E("z","y","x",-1,-1,s,i,e,f,c,0),E("z","y","x",1,-1,s,i,-e,f,c,1),E("x","z","y",1,1,e,s,i,l,f,2),E("x","z","y",1,-1,e,s,-i,l,f,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ya(p,3)),this.setAttribute("normal",new ya(x,3)),this.setAttribute("uv",new ya(g,2));function E(T,b,v,w,U,P,G,O,F,J,D){const C=P/F,k=G/J,$=P/2,ue=G/2,he=O/2,me=F+1,I=J+1;let Z=0,Y=0;const ye=new ce;for(let Se=0;Se<I;Se++){const z=Se*k-ue;for(let se=0;se<me;se++){const be=se*C-$;ye[T]=be*w,ye[b]=z*U,ye[v]=he,p.push(ye.x,ye.y,ye.z),ye[T]=0,ye[b]=0,ye[v]=O>0?1:-1,x.push(ye.x,ye.y,ye.z),g.push(se/F),g.push(1-Se/J),Z+=1}}for(let Se=0;Se<J;Se++)for(let z=0;z<F;z++){const se=y+z+me*Se,be=y+z+me*(Se+1),Ae=y+(z+1)+me*(Se+1),Pe=y+(z+1)+me*Se;m.push(se,be,Pe),m.push(be,Ae,Pe),Y+=6}h.addGroup(M,Y,D),M+=Y,y+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function zn(a){const e={};for(let i=0;i<a.length;i++){const s=Bs(a[i]);for(const l in s)e[l]=s[l]}return e}function Zb(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function jv(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const Qb={clone:Bs,merge:zn};var Jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jb,this.fragmentShader=$b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Zb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class iu extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new ce,Lg=new ct,Ng=new ct;class Ei extends iu{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qh*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,i){return this.getViewBounds(e,Lg,Ng),i.subVectors(Ng,Lg)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ud*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Us=1;class e3 extends Wn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Ds,Us,e,i);l.layers=this.layers,this.add(l);const c=new Ei(Ds,Us,e,i);c.layers=this.layers,this.add(c);const f=new Ei(Ds,Us,e,i);f.layers=this.layers,this.add(f);const h=new Ei(Ds,Us,e,i);h.layers=this.layers,this.add(h);const m=new Ei(Ds,Us,e,i);m.layers=this.layers,this.add(m);const p=new Ei(Ds,Us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Pi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,x]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(g,y,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Wv extends In{constructor(e=[],i=zs,s,l,c,f,h,m,p,x){super(e,i,s,l,c,f,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t3 extends or{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ll(5,5,5),c=new Fi({name:"CubemapFromEquirect",uniforms:Bs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:va});c.uniforms.tEquirect.value=i;const f=new Ri(l,c),h=i.minFilter;return i.minFilter===zr&&(i.minFilter=On),new e3(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class Fc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n3={type:"move"};class $d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const b=i.getJointPose(T,s),v=this._getHandJoint(p,T);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=x.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&y>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(n3)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Og extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class qv extends In{constructor(e=null,i=1,s=1,l,c,f,h,m,p=ri,x=ri,g,y){super(null,f,h,m,p,x,l,c,g,y),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eh=new ce,i3=new ce,a3=new mt;class Nr{constructor(e=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=eh.subVectors(s,i).cross(i3.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(eh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||a3.getNormalMatrix(e),l=this.coplanarPoint(eh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new uu,r3=new ct(.5,.5),Bc=new ce;class Yv{constructor(e=new Nr,i=new Nr,s=new Nr,l=new Nr,c=new Nr,f=new Nr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Pi,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],y=c[6],M=c[7],E=c[8],T=c[9],b=c[10],v=c[11],w=c[12],U=c[13],P=c[14],G=c[15];if(l[0].setComponents(p-f,M-x,v-E,G-w).normalize(),l[1].setComponents(p+f,M+x,v+E,G+w).normalize(),l[2].setComponents(p+h,M+g,v+T,G+U).normalize(),l[3].setComponents(p-h,M-g,v-T,G-U).normalize(),s)l[4].setComponents(m,y,b,P).normalize(),l[5].setComponents(p-m,M-y,v-b,G-P).normalize();else if(l[4].setComponents(p-m,M-y,v-b,G-P).normalize(),i===Pi)l[5].setComponents(p+m,M+y,v+b,G+P).normalize();else if(i===tu)l[5].setComponents(m,y,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const i=r3.distanceTo(e.center);return wr.radius=.7071067811865476+i,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?e.max.x:e.min.x,Bc.y=l.normal.y>0?e.max.y:e.min.y,Bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s3 extends ol{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const au=new ce,ru=new ce,Pg=new pn,jo=new Bv,Hc=new uu,th=new ce,zg=new ce;class o3 extends Wn{constructor(e=new Vi,i=new s3){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)au.fromBufferAttribute(i,l-1),ru.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=au.distanceTo(ru);e.setAttribute("lineDistance",new ya(s,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,e.ray.intersectsSphere(Hc)===!1)return;Pg.copy(l).invert(),jo.copy(e.ray).applyMatrix4(Pg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=s.index,y=s.attributes.position;if(x!==null){const M=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let T=M,b=E-1;T<b;T+=p){const v=x.getX(T),w=x.getX(T+1),U=Vc(this,e,jo,m,v,w,T);U&&i.push(U)}if(this.isLineLoop){const T=x.getX(E-1),b=x.getX(M),v=Vc(this,e,jo,m,T,b,E-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let T=M,b=E-1;T<b;T+=p){const v=Vc(this,e,jo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Vc(this,e,jo,m,E-1,M,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Vc(a,e,i,s,l,c,f){const h=a.geometry.attributes.position;if(au.fromBufferAttribute(h,l),ru.fromBufferAttribute(h,c),i.distanceSqToSegment(au,ru,th,zg)>s)return;th.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(th);if(!(p<e.near||p>e.far))return{distance:p,point:zg.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}const Ig=new ce,Fg=new ce;class l3 extends o3{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Ig.fromBufferAttribute(i,l),Fg.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Ig.distanceTo(Fg);e.setAttribute("lineDistance",new ya(s,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kv extends In{constructor(e,i,s=Fr,l,c,f,h=ri,m=ri,p,x=Jo,g=1){if(x!==Jo&&x!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,f,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Zv extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ir extends Vi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,g=e/h,y=i/m,M=[],E=[],T=[],b=[];for(let v=0;v<x;v++){const w=v*y-f;for(let U=0;U<p;U++){const P=U*g-c;E.push(P,-w,0),T.push(0,0,1),b.push(U/h),b.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<h;w++){const U=w+p*v,P=w+p*(v+1),G=w+1+p*(v+1),O=w+1+p*v;M.push(U,P,O),M.push(P,G,O)}this.setIndex(M),this.setAttribute("position",new ya(E,3)),this.setAttribute("normal",new ya(T,3)),this.setAttribute("uv",new ya(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gc extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class c3 extends ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u3 extends ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class f3 extends iu{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class d3 extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class h3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Bg(a,e,i,s){const l=p3(s);switch(i){case Nv:return a*e;case Pv:return a*e/l.components*l.byteLength;case lp:return a*e/l.components*l.byteLength;case cp:return a*e*2/l.components*l.byteLength;case up:return a*e*2/l.components*l.byteLength;case Ov:return a*e*3/l.components*l.byteLength;case xi:return a*e*4/l.components*l.byteLength;case fp:return a*e*4/l.components*l.byteLength;case Yc:case Kc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Zc:case Qc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Eh:case Ah:return Math.max(a,16)*Math.max(e,8)/4;case Mh:case Th:return Math.max(a,8)*Math.max(e,8)/2;case Rh:case Ch:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case wh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Xh:case jh:case Wh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case qh:case Yh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Kh:case Zh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function p3(a){switch(a){case Ma:case wv:return{byteLength:1,components:1};case Zo:case Dv:case Hr:return{byteLength:2,components:1};case sp:case op:return{byteLength:2,components:4};case Fr:case rp:case Oi:return{byteLength:4,components:1};case Uv:case Lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);function Qv(){let a=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function m3(a){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,y=a.createBuffer();a.bindBuffer(m,y),a.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=a.HALF_FLOAT:M=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=a.SHORT;else if(p instanceof Uint32Array)M=a.UNSIGNED_INT;else if(p instanceof Int32Array)M=a.INT;else if(p instanceof Int8Array)M=a.BYTE;else if(p instanceof Uint8Array)M=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const x=m.array,g=m.updateRanges;if(a.bindBuffer(p,h),g.length===0)a.bufferSubData(p,0,x);else{g.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<g.length;M++){const E=g[y],T=g[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++y,g[y]=T)}g.length=y+1;for(let M=0,E=g.length;M<E;M++){const T=g[M];a.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var x3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g3=`#ifdef USE_ALPHAHASH
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
#endif`,v3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b3=`#ifdef USE_AOMAP
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
#endif`,M3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E3=`#ifdef USE_BATCHING
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
#endif`,T3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w3=`#ifdef USE_IRIDESCENCE
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
#endif`,D3=`#ifdef USE_BUMPMAP
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
#endif`,U3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,B3=`#define PI 3.141592653589793
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
} // validated`,H3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V3=`vec3 transformedNormal = objectNormal;
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
#endif`,G3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W3="gl_FragColor = linearToOutputTexel( gl_FragColor );",q3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y3=`#ifdef USE_ENVMAP
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
#endif`,K3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z3=`#ifdef USE_ENVMAP
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
#endif`,Q3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J3=`#ifdef USE_ENVMAP
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
#endif`,$3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iM=`#ifdef USE_GRADIENTMAP
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
}`,aM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oM=`uniform bool receiveShadow;
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
#endif`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hM=`PhysicalMaterial material;
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
#endif`,pM=`uniform sampler2D dfgLUT;
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
}`,mM=`
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
#endif`,xM=`#if defined( RE_IndirectDiffuse )
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
#endif`,gM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TM=`#if defined( USE_POINTS_UV )
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
#endif`,AM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
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
#endif`,LM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FM=`#ifdef USE_NORMALMAP
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
#endif`,BM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e2=`float getShadowMask() {
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
}`,t2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n2=`#ifdef USE_SKINNING
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
#endif`,i2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a2=`#ifdef USE_SKINNING
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
#endif`,r2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c2=`#ifdef USE_TRANSMISSION
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
#endif`,u2=`#ifdef USE_TRANSMISSION
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
#endif`,f2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x2=`uniform sampler2D t2D;
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
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`#include <common>
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
}`,b2=`#if DEPTH_PACKING == 3200
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
}`,M2=`#define DISTANCE
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
}`,E2=`#define DISTANCE
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
}`,T2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`uniform float scale;
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
}`,C2=`uniform vec3 diffuse;
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
}`,w2=`#include <common>
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
}`,D2=`uniform vec3 diffuse;
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
}`,U2=`#define LAMBERT
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
}`,L2=`#define LAMBERT
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
}`,N2=`#define MATCAP
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
}`,O2=`#define MATCAP
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
}`,P2=`#define NORMAL
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
}`,z2=`#define NORMAL
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
}`,I2=`#define PHONG
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
}`,F2=`#define PHONG
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
}`,B2=`#define STANDARD
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
}`,H2=`#define STANDARD
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
}`,V2=`#define TOON
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
}`,G2=`#define TOON
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
}`,k2=`uniform float size;
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
}`,X2=`uniform vec3 diffuse;
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
}`,j2=`#include <common>
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
}`,W2=`uniform vec3 color;
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
}`,q2=`uniform float rotation;
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
}`,Y2=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:x3,alphahash_pars_fragment:g3,alphamap_fragment:v3,alphamap_pars_fragment:_3,alphatest_fragment:y3,alphatest_pars_fragment:S3,aomap_fragment:b3,aomap_pars_fragment:M3,batching_pars_vertex:E3,batching_vertex:T3,begin_vertex:A3,beginnormal_vertex:R3,bsdfs:C3,iridescence_fragment:w3,bumpmap_pars_fragment:D3,clipping_planes_fragment:U3,clipping_planes_pars_fragment:L3,clipping_planes_pars_vertex:N3,clipping_planes_vertex:O3,color_fragment:P3,color_pars_fragment:z3,color_pars_vertex:I3,color_vertex:F3,common:B3,cube_uv_reflection_fragment:H3,defaultnormal_vertex:V3,displacementmap_pars_vertex:G3,displacementmap_vertex:k3,emissivemap_fragment:X3,emissivemap_pars_fragment:j3,colorspace_fragment:W3,colorspace_pars_fragment:q3,envmap_fragment:Y3,envmap_common_pars_fragment:K3,envmap_pars_fragment:Z3,envmap_pars_vertex:Q3,envmap_physical_pars_fragment:lM,envmap_vertex:J3,fog_vertex:$3,fog_pars_vertex:eM,fog_fragment:tM,fog_pars_fragment:nM,gradientmap_pars_fragment:iM,lightmap_pars_fragment:aM,lights_lambert_fragment:rM,lights_lambert_pars_fragment:sM,lights_pars_begin:oM,lights_toon_fragment:cM,lights_toon_pars_fragment:uM,lights_phong_fragment:fM,lights_phong_pars_fragment:dM,lights_physical_fragment:hM,lights_physical_pars_fragment:pM,lights_fragment_begin:mM,lights_fragment_maps:xM,lights_fragment_end:gM,logdepthbuf_fragment:vM,logdepthbuf_pars_fragment:_M,logdepthbuf_pars_vertex:yM,logdepthbuf_vertex:SM,map_fragment:bM,map_pars_fragment:MM,map_particle_fragment:EM,map_particle_pars_fragment:TM,metalnessmap_fragment:AM,metalnessmap_pars_fragment:RM,morphinstance_vertex:CM,morphcolor_vertex:wM,morphnormal_vertex:DM,morphtarget_pars_vertex:UM,morphtarget_vertex:LM,normal_fragment_begin:NM,normal_fragment_maps:OM,normal_pars_fragment:PM,normal_pars_vertex:zM,normal_vertex:IM,normalmap_pars_fragment:FM,clearcoat_normal_fragment_begin:BM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:VM,iridescence_pars_fragment:GM,opaque_fragment:kM,packing:XM,premultiplied_alpha_fragment:jM,project_vertex:WM,dithering_fragment:qM,dithering_pars_fragment:YM,roughnessmap_fragment:KM,roughnessmap_pars_fragment:ZM,shadowmap_pars_fragment:QM,shadowmap_pars_vertex:JM,shadowmap_vertex:$M,shadowmask_pars_fragment:e2,skinbase_vertex:t2,skinning_pars_vertex:n2,skinning_vertex:i2,skinnormal_vertex:a2,specularmap_fragment:r2,specularmap_pars_fragment:s2,tonemapping_fragment:o2,tonemapping_pars_fragment:l2,transmission_fragment:c2,transmission_pars_fragment:u2,uv_pars_fragment:f2,uv_pars_vertex:d2,uv_vertex:h2,worldpos_vertex:p2,background_vert:m2,background_frag:x2,backgroundCube_vert:g2,backgroundCube_frag:v2,cube_vert:_2,cube_frag:y2,depth_vert:S2,depth_frag:b2,distanceRGBA_vert:M2,distanceRGBA_frag:E2,equirect_vert:T2,equirect_frag:A2,linedashed_vert:R2,linedashed_frag:C2,meshbasic_vert:w2,meshbasic_frag:D2,meshlambert_vert:U2,meshlambert_frag:L2,meshmatcap_vert:N2,meshmatcap_frag:O2,meshnormal_vert:P2,meshnormal_frag:z2,meshphong_vert:I2,meshphong_frag:F2,meshphysical_vert:B2,meshphysical_frag:H2,meshtoon_vert:V2,meshtoon_frag:G2,points_vert:k2,points_frag:X2,shadow_vert:j2,shadow_frag:W2,sprite_vert:q2,sprite_frag:Y2},Oe={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ni={basic:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new zt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new zt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:zn([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:zn([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:zn([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:zn([Oe.lights,Oe.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ni.physical={uniforms:zn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const kc={r:0,b:0,g:0},Dr=new Ea,K2=new pn;function Z2(a,e,i,s,l,c,f){const h=new zt(0);let m=c===!0?0:1,p,x,g=null,y=0,M=null;function E(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?i:e).get(P)),P}function T(U){let P=!1;const G=E(U);G===null?v(h,m):G&&G.isColor&&(v(G,1),P=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(a.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(U,P){const G=E(P);G&&(G.isCubeTexture||G.mapping===cu)?(x===void 0&&(x=new Ri(new ll(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Bs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,F,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Dr.copy(P.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),x.material.uniforms.envMap.value=G,x.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(K2.makeRotationFromEuler(Dr)),x.material.toneMapped=Ot.getTransfer(G.colorSpace)!==jt,(g!==G||y!==G.version||M!==a.toneMapping)&&(x.material.needsUpdate=!0,g=G,y=G.version,M=a.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Ri(new Ir(2,2),new Fi({name:"BackgroundMaterial",uniforms:Bs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(G.colorSpace)!==jt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||y!==G.version||M!==a.toneMapping)&&(p.material.needsUpdate=!0,g=G,y=G.version,M=a.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,P){U.getRGB(kc,jv(a)),s.buffers.color.setClear(kc.r,kc.g,kc.b,P,f)}function w(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,P=1){h.set(U),m=P,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:T,addToRenderList:b,dispose:w}}function Q2(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,f=!1;function h(C,k,$,ue,he){let me=!1;const I=g(ue,$,k);c!==I&&(c=I,p(c.object)),me=M(C,ue,$,he),me&&E(C,ue,$,he),he!==null&&e.update(he,a.ELEMENT_ARRAY_BUFFER),(me||f)&&(f=!1,P(C,k,$,ue),he!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function m(){return a.createVertexArray()}function p(C){return a.bindVertexArray(C)}function x(C){return a.deleteVertexArray(C)}function g(C,k,$){const ue=$.wireframe===!0;let he=s[C.id];he===void 0&&(he={},s[C.id]=he);let me=he[k.id];me===void 0&&(me={},he[k.id]=me);let I=me[ue];return I===void 0&&(I=y(m()),me[ue]=I),I}function y(C){const k=[],$=[],ue=[];for(let he=0;he<i;he++)k[he]=0,$[he]=0,ue[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:ue,object:C,attributes:{},index:null}}function M(C,k,$,ue){const he=c.attributes,me=k.attributes;let I=0;const Z=$.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const Se=he[Y];let z=me[Y];if(z===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),Se===void 0||Se.attribute!==z||z&&Se.data!==z.data)return!0;I++}return c.attributesNum!==I||c.index!==ue}function E(C,k,$,ue){const he={},me=k.attributes;let I=0;const Z=$.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let Se=me[Y];Se===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor));const z={};z.attribute=Se,Se&&Se.data&&(z.data=Se.data),he[Y]=z,I++}c.attributes=he,c.attributesNum=I,c.index=ue}function T(){const C=c.newAttributes;for(let k=0,$=C.length;k<$;k++)C[k]=0}function b(C){v(C,0)}function v(C,k){const $=c.newAttributes,ue=c.enabledAttributes,he=c.attributeDivisors;$[C]=1,ue[C]===0&&(a.enableVertexAttribArray(C),ue[C]=1),he[C]!==k&&(a.vertexAttribDivisor(C,k),he[C]=k)}function w(){const C=c.newAttributes,k=c.enabledAttributes;for(let $=0,ue=k.length;$<ue;$++)k[$]!==C[$]&&(a.disableVertexAttribArray($),k[$]=0)}function U(C,k,$,ue,he,me,I){I===!0?a.vertexAttribIPointer(C,k,$,he,me):a.vertexAttribPointer(C,k,$,ue,he,me)}function P(C,k,$,ue){T();const he=ue.attributes,me=$.getAttributes(),I=k.defaultAttributeValues;for(const Z in me){const Y=me[Z];if(Y.location>=0){let ye=he[Z];if(ye===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor)),ye!==void 0){const Se=ye.normalized,z=ye.itemSize,se=e.get(ye);if(se===void 0)continue;const be=se.buffer,Ae=se.type,Pe=se.bytesPerElement,re=Ae===a.INT||Ae===a.UNSIGNED_INT||ye.gpuType===rp;if(ye.isInterleavedBufferAttribute){const fe=ye.data,Re=fe.stride,Ge=ye.offset;if(fe.isInstancedInterleavedBuffer){for(let We=0;We<Y.locationSize;We++)v(Y.location+We,fe.meshPerAttribute);C.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let We=0;We<Y.locationSize;We++)b(Y.location+We);a.bindBuffer(a.ARRAY_BUFFER,be);for(let We=0;We<Y.locationSize;We++)U(Y.location+We,z/Y.locationSize,Ae,Se,Re*Pe,(Ge+z/Y.locationSize*We)*Pe,re)}else{if(ye.isInstancedBufferAttribute){for(let fe=0;fe<Y.locationSize;fe++)v(Y.location+fe,ye.meshPerAttribute);C.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let fe=0;fe<Y.locationSize;fe++)b(Y.location+fe);a.bindBuffer(a.ARRAY_BUFFER,be);for(let fe=0;fe<Y.locationSize;fe++)U(Y.location+fe,z/Y.locationSize,Ae,Se,z*Pe,z/Y.locationSize*fe*Pe,re)}}else if(I!==void 0){const Se=I[Z];if(Se!==void 0)switch(Se.length){case 2:a.vertexAttrib2fv(Y.location,Se);break;case 3:a.vertexAttrib3fv(Y.location,Se);break;case 4:a.vertexAttrib4fv(Y.location,Se);break;default:a.vertexAttrib1fv(Y.location,Se)}}}}w()}function G(){J();for(const C in s){const k=s[C];for(const $ in k){const ue=k[$];for(const he in ue)x(ue[he].object),delete ue[he];delete k[$]}delete s[C]}}function O(C){if(s[C.id]===void 0)return;const k=s[C.id];for(const $ in k){const ue=k[$];for(const he in ue)x(ue[he].object),delete ue[he];delete k[$]}delete s[C.id]}function F(C){for(const k in s){const $=s[k];if($[C.id]===void 0)continue;const ue=$[C.id];for(const he in ue)x(ue[he].object),delete ue[he];delete $[C.id]}}function J(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:b,disableUnusedAttributes:w}}function J2(a,e,i){let s;function l(p){s=p}function c(p,x){a.drawArrays(s,p,x),i.update(x,s,1)}function f(p,x,g){g!==0&&(a.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let M=0;for(let E=0;E<g;E++)M+=x[E];i.update(M,s,1)}function m(p,x,g,y){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)f(p[E],x[E],y[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,x,0,y,0,g);let E=0;for(let T=0;T<g;T++)E+=x[T]*y[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function $2(a,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==xi&&s.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const J=F===Hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ma&&s.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Oi&&!J)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ot("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),w=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),U=a.getParameter(a.MAX_VARYING_VECTORS),P=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,O=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:P,vertexTextures:G,maxSamples:O}}function eE(a){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Nr,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||s!==0||l;return l=y,s=g.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=x(g,y,0)},this.setState=function(g,y,M){const E=g.clippingPlanes,T=g.clipIntersection,b=g.clipShadows,v=a.get(g);if(!l||E===null||E.length===0||c&&!b)c?x(null):p();else{const w=c?0:s,U=w*4;let P=v.clippingState||null;m.value=P,P=x(E,y,U,M);for(let G=0;G!==U;++G)P[G]=i[G];v.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,y,M,E){const T=g!==null?g.length:0;let b=null;if(T!==0){if(b=m.value,E!==!0||b===null){const v=M+T*4,w=y.matrixWorldInverse;h.getNormalMatrix(w),(b===null||b.length<v)&&(b=new Float32Array(v));for(let U=0,P=M;U!==T;++U,P+=4)f.copy(g[U]).applyMatrix4(w,h),f.normal.toArray(b,P),b[P+3]=f.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,b}}function tE(a){let e=new WeakMap;function i(f,h){return h===_h?f.mapping=zs:h===yh&&(f.mapping=Is),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===_h||h===yh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new t3(m.height);return p.fromEquirectangularTexture(a,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ar=4,Hg=[.125,.215,.35,.446,.526,.582],Pr=20,nE=256,Wo=new f3,Vg=new zt;let nh=null,ih=0,ah=0,rh=!1;const iE=new ce;class Gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=iE}=c;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,ah),this._renderer.xr.enabled=rh,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zs||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Hr,format:xi,colorSpace:Fs,depthBuffer:!1},l=kg(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aE(c)),this._blurMaterial=sE(c,e,i)}return l}_compileMaterial(e){const i=new Ri(new Vi,e);this._renderer.compile(i,Wo)}_sceneToCubeUV(e,i,s,l,c){const m=new Ei(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,M=g.toneMapping;g.getClearColor(Vg),g.toneMapping=rr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new ll,new Gv({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,b=T.material;let v=!1;const w=e.background;w?w.isColor&&(b.color.copy(w),e.background=null,v=!0):(b.color.copy(Vg),v=!0);for(let U=0;U<6;U++){const P=U%3;P===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[U],c.y,c.z)):P===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[U]));const G=this._cubeSize;Ls(l,P*G,U>2?G:0,G,G),g.setRenderTarget(l),v&&g.render(T,m),g.render(e,m)}g.toneMapping=M,g.autoClear=y,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===zs||e.mapping===Is;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=jg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xg());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Wo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const w=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=rE(this._lodMax,w,U)}const f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),y=.05+p*.95,M=g*y,{_lodMax:E}=this,T=this._sizeLods[s],b=3*T*(s>E-ar?s-E+ar:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Ls(c,b,v,3*T,2*T),l.setRenderTarget(c),l.render(h,Wo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Ls(e,b,v,3*T,2*T),l.setRenderTarget(e),l.render(h,Wo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&on("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Pr-1),T=c/E,b=isFinite(c)?1+Math.floor(x*T):Pr;b>Pr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Pr}`);const v=[];let w=0;for(let F=0;F<Pr;++F){const J=F/T,D=Math.exp(-J*J/2);v.push(D),F===0?w+=D:F<b&&(w+=2*D)}for(let F=0;F<v.length;F++)v[F]=v[F]/w;y.envMap.value=e.texture,y.samples.value=b,y.weights.value=v,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:U}=this;y.dTheta.value=E,y.mipInt.value=U-s;const P=this._sizeLods[l],G=3*P*(l>U-ar?l-U+ar:0),O=4*(this._cubeSize-P);Ls(i,G,O,3*P,2*P),m.setRenderTarget(i),m.render(g,Wo)}}function aE(a){const e=[],i=[],s=[];let l=a;const c=a-ar+1+Hg.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>a-ar?m=Hg[f-a+ar-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,y=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,E=6,T=3,b=2,v=1,w=new Float32Array(T*E*M),U=new Float32Array(b*E*M),P=new Float32Array(v*E*M);for(let O=0;O<M;O++){const F=O%3*2/3-1,J=O>2?0:-1,D=[F,J,0,F+2/3,J,0,F+2/3,J+1,0,F,J,0,F+2/3,J+1,0,F,J+1,0];w.set(D,T*E*O),U.set(y,b*E*O);const C=[O,O,O,O,O,O];P.set(C,v*E*O)}const G=new Vi;G.setAttribute("position",new Ai(w,T)),G.setAttribute("uv",new Ai(U,b)),G.setAttribute("faceIndex",new Ai(P,v)),s.push(new Ri(G,null)),l>ar&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function kg(a,e,i){const s=new or(a,e,i);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ls(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function rE(a,e,i){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function sE(a,e,i){const s=new Float32Array(Pr),l=new ce(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Xg(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function jg(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function oE(a){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===_h||m===yh,x=m===zs||m===Is;if(p||x){let g=e.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new Gg(a)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Gg(a)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function lE(a){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=a.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&el("WebGLRenderer: "+s+" extension not supported."),l}}}function cE(a,e,i,s){const l={},c=new WeakMap;function f(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(g,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const M in y)e.update(y[M],a.ARRAY_BUFFER)}function p(g){const y=[],M=g.index,E=g.attributes.position;let T=0;if(M!==null){const w=M.array;T=M.version;for(let U=0,P=w.length;U<P;U+=3){const G=w[U+0],O=w[U+1],F=w[U+2];y.push(G,O,O,F,F,G)}}else if(E!==void 0){const w=E.array;T=E.version;for(let U=0,P=w.length/3-1;U<P;U+=3){const G=U+0,O=U+1,F=U+2;y.push(G,O,O,F,F,G)}}else return;const b=new(Iv(y)?Xv:kv)(y,1);b.version=T;const v=c.get(g);v&&e.remove(v),c.set(g,b)}function x(g){const y=c.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function uE(a,e,i){let s;function l(y){s=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function m(y,M){a.drawElements(s,M,c,y*f),i.update(M,s,1)}function p(y,M,E){E!==0&&(a.drawElementsInstanced(s,M,c,y*f,E),i.update(M,s,E))}function x(y,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,y,0,E);let b=0;for(let v=0;v<E;v++)b+=M[v];i.update(b,s,1)}function g(y,M,E,T){if(E===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<y.length;v++)p(y[v]/f,M[v],T[v]);else{b.multiDrawElementsInstancedWEBGL(s,M,0,c,y,0,T,0,E);let v=0;for(let w=0;w<E;w++)v+=M[w]*T[w];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function fE(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:on("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function dE(a,e,i){const s=new WeakMap,l=new an;function c(f,h,m){const p=f.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let y=s.get(h);if(y===void 0||y.count!==g){let C=function(){J.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let P=0;E===!0&&(P=1),T===!0&&(P=2),b===!0&&(P=3);let G=h.attributes.position.count*P,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const F=new Float32Array(G*O*4*g),J=new Fv(F,G,O,g);J.type=Oi,J.needsUpdate=!0;const D=P*4;for(let k=0;k<g;k++){const $=v[k],ue=w[k],he=U[k],me=G*O*4*k;for(let I=0;I<$.count;I++){const Z=I*D;E===!0&&(l.fromBufferAttribute($,I),F[me+Z+0]=l.x,F[me+Z+1]=l.y,F[me+Z+2]=l.z,F[me+Z+3]=0),T===!0&&(l.fromBufferAttribute(ue,I),F[me+Z+4]=l.x,F[me+Z+5]=l.y,F[me+Z+6]=l.z,F[me+Z+7]=0),b===!0&&(l.fromBufferAttribute(he,I),F[me+Z+8]=l.x,F[me+Z+9]=l.y,F[me+Z+10]=l.z,F[me+Z+11]=he.itemSize===4?l.w:1)}}y={count:g,texture:J,size:new ct(G,O)},s.set(h,y),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,i);else{let E=0;for(let b=0;b<p.length;b++)E+=p[b];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",T),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",y.size)}return{update:c}}function hE(a,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Jv=new In,Wg=new Kv(1,1),$v=new Fv,e_=new Fb,t_=new Wv,qg=[],Yg=[],Kg=new Float32Array(16),Zg=new Float32Array(9),Qg=new Float32Array(4);function ks(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let c=qg[l];if(c===void 0&&(c=new Float32Array(l),qg[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,a[f].toArray(c,h)}return c}function vn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function _n(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function du(a,e){let i=Yg[e];i===void 0&&(i=new Int32Array(e),Yg[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function pE(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function mE(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2fv(this.addr,e),_n(i,e)}}function xE(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;a.uniform3fv(this.addr,e),_n(i,e)}}function gE(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4fv(this.addr,e),_n(i,e)}}function vE(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;Qg.set(s),a.uniformMatrix2fv(this.addr,!1,Qg),_n(i,s)}}function _E(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;Zg.set(s),a.uniformMatrix3fv(this.addr,!1,Zg),_n(i,s)}}function yE(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;Kg.set(s),a.uniformMatrix4fv(this.addr,!1,Kg),_n(i,s)}}function SE(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function bE(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2iv(this.addr,e),_n(i,e)}}function ME(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;a.uniform3iv(this.addr,e),_n(i,e)}}function EE(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4iv(this.addr,e),_n(i,e)}}function TE(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function AE(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;a.uniform2uiv(this.addr,e),_n(i,e)}}function RE(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;a.uniform3uiv(this.addr,e),_n(i,e)}}function CE(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;a.uniform4uiv(this.addr,e),_n(i,e)}}function wE(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(Wg.compareFunction=zv,c=Wg):c=Jv,i.setTexture2D(e||c,l)}function DE(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||e_,l)}function UE(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||t_,l)}function LE(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||$v,l)}function NE(a){switch(a){case 5126:return pE;case 35664:return mE;case 35665:return xE;case 35666:return gE;case 35674:return vE;case 35675:return _E;case 35676:return yE;case 5124:case 35670:return SE;case 35667:case 35671:return bE;case 35668:case 35672:return ME;case 35669:case 35673:return EE;case 5125:return TE;case 36294:return AE;case 36295:return RE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return wE;case 35679:case 36299:case 36307:return DE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return LE}}function OE(a,e){a.uniform1fv(this.addr,e)}function PE(a,e){const i=ks(e,this.size,2);a.uniform2fv(this.addr,i)}function zE(a,e){const i=ks(e,this.size,3);a.uniform3fv(this.addr,i)}function IE(a,e){const i=ks(e,this.size,4);a.uniform4fv(this.addr,i)}function FE(a,e){const i=ks(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function BE(a,e){const i=ks(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function HE(a,e){const i=ks(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function VE(a,e){a.uniform1iv(this.addr,e)}function GE(a,e){a.uniform2iv(this.addr,e)}function kE(a,e){a.uniform3iv(this.addr,e)}function XE(a,e){a.uniform4iv(this.addr,e)}function jE(a,e){a.uniform1uiv(this.addr,e)}function WE(a,e){a.uniform2uiv(this.addr,e)}function qE(a,e){a.uniform3uiv(this.addr,e)}function YE(a,e){a.uniform4uiv(this.addr,e)}function KE(a,e,i){const s=this.cache,l=e.length,c=du(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||Jv,c[f])}function ZE(a,e,i){const s=this.cache,l=e.length,c=du(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||e_,c[f])}function QE(a,e,i){const s=this.cache,l=e.length,c=du(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||t_,c[f])}function JE(a,e,i){const s=this.cache,l=e.length,c=du(i,l);vn(s,c)||(a.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||$v,c[f])}function $E(a){switch(a){case 5126:return OE;case 35664:return PE;case 35665:return zE;case 35666:return IE;case 35674:return FE;case 35675:return BE;case 35676:return HE;case 5124:case 35670:return VE;case 35667:case 35671:return GE;case 35668:case 35672:return kE;case 35669:case 35673:return XE;case 5125:return jE;case 36294:return WE;case 36295:return qE;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return JE}}class eT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=NE(i.type)}}class tT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$E(i.type)}}class nT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const sh=/(\w+)(\])?(\[|\.)?/g;function Jg(a,e){a.seq.push(e),a.map[e.id]=e}function iT(a,e,i){const s=a.name,l=s.length;for(sh.lastIndex=0;;){const c=sh.exec(s),f=sh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Jg(i,p===void 0?new eT(h,a,e):new tT(h,a,e));break}else{let g=i.map[h];g===void 0&&(g=new nT(h),Jg(i,g)),i=g}}}class Jc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);iT(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function $g(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const aT=37297;let rT=0;function sT(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const ev=new mt;function oT(a){Ot._getMatrix(ev,Ot.workingColorSpace,a);const e=`mat3( ${ev.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(a)){case eu:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function tv(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+sT(a.getShaderSource(e),h)}else return c}function lT(a,e){const i=oT(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function cT(a,e){let i;switch(e){case fb:i="Linear";break;case db:i="Reinhard";break;case hb:i="Cineon";break;case pb:i="ACESFilmic";break;case xb:i="AgX";break;case gb:i="Neutral";break;case mb:i="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new ce;function uT(){Ot.getLuminanceCoefficients(Xc);const a=Xc.x.toFixed(4),e=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fT(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function dT(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function hT(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(e,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:a.getAttribLocation(e,f),locationSize:h}}return i}function qo(a){return a!==""}function nv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(a){return a.replace(pT,xT)}const mT=new Map;function xT(a,e){let i=gt[e];if(i===void 0){const s=mT.get(e);if(s!==void 0)i=gt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Jh(i)}const gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function av(a){return a.replace(gT,vT)}function vT(a,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function rv(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _T(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Av?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===X1?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ma&&(e="SHADOWMAP_TYPE_VSM"),e}function yT(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case zs:case Is:e="ENVMAP_TYPE_CUBE";break;case cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ST(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function bT(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Rv:e="ENVMAP_BLENDING_MULTIPLY";break;case cb:e="ENVMAP_BLENDING_MIX";break;case ub:e="ENVMAP_BLENDING_ADD";break}return e}function MT(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function ET(a,e,i,s){const l=a.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=_T(i),p=yT(i),x=ST(i),g=bT(i),y=MT(i),M=fT(i),E=dT(c),T=l.createProgram();let b,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(qo).join(`
`),v.length>0&&(v+=`
`)):(b=[rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),v=[rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==rr?"#define TONE_MAPPING":"",i.toneMapping!==rr?gt.tonemapping_pars_fragment:"",i.toneMapping!==rr?cT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,lT("linearToOutputTexel",i.outputColorSpace),uT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=Jh(f),f=nv(f,i),f=iv(f,i),h=Jh(h),h=nv(h,i),h=iv(h,i),f=av(f),h=av(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",i.glslVersion===mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=w+b+f,P=w+v+h,G=$g(l,l.VERTEX_SHADER,U),O=$g(l,l.FRAGMENT_SHADER,P);l.attachShader(T,G),l.attachShader(T,O),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(k){if(a.debug.checkShaderErrors){const $=l.getProgramInfoLog(T)||"",ue=l.getShaderInfoLog(G)||"",he=l.getShaderInfoLog(O)||"",me=$.trim(),I=ue.trim(),Z=he.trim();let Y=!0,ye=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,T,G,O);else{const Se=tv(l,G,"vertex"),z=tv(l,O,"fragment");on("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+me+`
`+Se+`
`+z)}else me!==""?ot("WebGLProgram: Program Info Log:",me):(I===""||Z==="")&&(ye=!1);ye&&(k.diagnostics={runnable:Y,programLog:me,vertexShader:{log:I,prefix:b},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(G),l.deleteShader(O),J=new Jc(l,T),D=hT(l,T)}let J;this.getUniforms=function(){return J===void 0&&F(this),J};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,aT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=O,this}let TT=0;class AT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new RT(e),i.set(e,s)),s}}class RT{constructor(e){this.id=TT++,this.code=e,this.usedTimes=0}}function CT(a,e,i,s,l,c,f){const h=new Hv,m=new AT,p=new Set,x=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function b(D,C,k,$,ue){const he=$.fog,me=ue.geometry,I=D.isMeshStandardMaterial?$.environment:null,Z=(D.isMeshStandardMaterial?i:e).get(D.envMap||I),Y=Z&&Z.mapping===cu?Z.image.height:null,ye=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&ot("WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const Se=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,z=Se!==void 0?Se.length:0;let se=0;me.morphAttributes.position!==void 0&&(se=1),me.morphAttributes.normal!==void 0&&(se=2),me.morphAttributes.color!==void 0&&(se=3);let be,Ae,Pe,re;if(ye){const Dt=Ni[ye];be=Dt.vertexShader,Ae=Dt.fragmentShader}else be=D.vertexShader,Ae=D.fragmentShader,m.update(D),Pe=m.getVertexShaderID(D),re=m.getFragmentShaderID(D);const fe=a.getRenderTarget(),Re=a.state.buffers.depth.getReversed(),Ge=ue.isInstancedMesh===!0,We=ue.isBatchedMesh===!0,lt=!!D.map,$t=!!D.matcap,ut=!!Z,Rt=!!D.aoMap,V=!!D.lightMap,ft=!!D.bumpMap,xt=!!D.normalMap,vt=!!D.displacementMap,Be=!!D.emissiveMap,Ht=!!D.metalnessMap,Ye=!!D.roughnessMap,it=D.anisotropy>0,L=D.clearcoat>0,_=D.dispersion>0,H=D.iridescence>0,Q=D.sheen>0,de=D.transmission>0,ie=it&&!!D.anisotropyMap,ze=L&&!!D.clearcoatMap,Ue=L&&!!D.clearcoatNormalMap,Ke=L&&!!D.clearcoatRoughnessMap,je=H&&!!D.iridescenceMap,Me=H&&!!D.iridescenceThicknessMap,Te=Q&&!!D.sheenColorMap,Ze=Q&&!!D.sheenRoughnessMap,Xe=!!D.specularMap,Ie=!!D.specularColorMap,at=!!D.specularIntensityMap,X=de&&!!D.transmissionMap,Le=de&&!!D.thicknessMap,we=!!D.gradientMap,De=!!D.alphaMap,Ee=D.alphaTest>0,_e=!!D.alphaHash,He=!!D.extensions;let rt=rr;D.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(rt=a.toneMapping);const Vt={shaderID:ye,shaderType:D.type,shaderName:D.name,vertexShader:be,fragmentShader:Ae,defines:D.defines,customVertexShaderID:Pe,customFragmentShaderID:re,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:We,batchingColor:We&&ue._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&ue.instanceColor!==null,instancingMorph:Ge&&ue.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:fe===null?a.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Fs,alphaToCoverage:!!D.alphaToCoverage,map:lt,matcap:$t,envMap:ut,envMapMode:ut&&Z.mapping,envMapCubeUVHeight:Y,aoMap:Rt,lightMap:V,bumpMap:ft,normalMap:xt,displacementMap:y&&vt,emissiveMap:Be,normalMapObjectSpace:xt&&D.normalMapType===bb,normalMapTangentSpace:xt&&D.normalMapType===Sb,metalnessMap:Ht,roughnessMap:Ye,anisotropy:it,anisotropyMap:ie,clearcoat:L,clearcoatMap:ze,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ke,dispersion:_,iridescence:H,iridescenceMap:je,iridescenceThicknessMap:Me,sheen:Q,sheenColorMap:Te,sheenRoughnessMap:Ze,specularMap:Xe,specularColorMap:Ie,specularIntensityMap:at,transmission:de,transmissionMap:X,thicknessMap:Le,gradientMap:we,opaque:D.transparent===!1&&D.blending===Ns&&D.alphaToCoverage===!1,alphaMap:De,alphaTest:Ee,alphaHash:_e,combine:D.combine,mapUv:lt&&T(D.map.channel),aoMapUv:Rt&&T(D.aoMap.channel),lightMapUv:V&&T(D.lightMap.channel),bumpMapUv:ft&&T(D.bumpMap.channel),normalMapUv:xt&&T(D.normalMap.channel),displacementMapUv:vt&&T(D.displacementMap.channel),emissiveMapUv:Be&&T(D.emissiveMap.channel),metalnessMapUv:Ht&&T(D.metalnessMap.channel),roughnessMapUv:Ye&&T(D.roughnessMap.channel),anisotropyMapUv:ie&&T(D.anisotropyMap.channel),clearcoatMapUv:ze&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&T(D.sheenRoughnessMap.channel),specularMapUv:Xe&&T(D.specularMap.channel),specularColorMapUv:Ie&&T(D.specularColorMap.channel),specularIntensityMapUv:at&&T(D.specularIntensityMap.channel),transmissionMapUv:X&&T(D.transmissionMap.channel),thicknessMapUv:Le&&T(D.thicknessMap.channel),alphaMapUv:De&&T(D.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(xt||it),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:ue.isPoints===!0&&!!me.attributes.uv&&(lt||De),fog:!!he,useFog:D.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Re,skinning:ue.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:rt,decodeVideoTexture:lt&&D.map.isVideoTexture===!0&&Ot.getTransfer(D.map.colorSpace)===jt,decodeVideoTextureEmissive:Be&&D.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(D.emissiveMap.colorSpace)===jt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===xa,flipSided:D.side===jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:He&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&D.extensions.multiDraw===!0||We)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function v(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const k in D.defines)C.push(k),C.push(D.defines[k]);return D.isRawShaderMaterial===!1&&(w(C,D),U(C,D),C.push(a.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function w(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function P(D){const C=E[D.type];let k;if(C){const $=Ni[C];k=Qb.clone($.uniforms)}else k=D.uniforms;return k}function G(D,C){let k;for(let $=0,ue=x.length;$<ue;$++){const he=x[$];if(he.cacheKey===C){k=he,++k.usedTimes;break}}return k===void 0&&(k=new ET(a,C,D,c),x.push(k)),k}function O(D){if(--D.usedTimes===0){const C=x.indexOf(D);x[C]=x[x.length-1],x.pop(),D.destroy()}}function F(D){m.remove(D)}function J(){m.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:P,acquireProgram:G,releaseProgram:O,releaseShaderCache:F,programs:x,dispose:J}}function wT(){let a=new WeakMap;function e(f){return a.has(f)}function i(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function s(f){a.delete(f)}function l(f,h,m){a.get(f)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function DT(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function sv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ov(){const a=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,y,M,E,T,b){let v=a[e];return v===void 0?(v={id:g.id,object:g,geometry:y,material:M,groupOrder:E,renderOrder:g.renderOrder,z:T,group:b},a[e]=v):(v.id=g.id,v.object=g,v.geometry=y,v.material=M,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=T,v.group=b),e++,v}function h(g,y,M,E,T,b){const v=f(g,y,M,E,T,b);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,y,M,E,T,b){const v=f(g,y,M,E,T,b);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,y){i.length>1&&i.sort(g||DT),s.length>1&&s.sort(y||sv),l.length>1&&l.sort(y||sv)}function x(){for(let g=e,y=a.length;g<y;g++){const M=a[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function UT(){let a=new WeakMap;function e(s,l){const c=a.get(s);let f;return c===void 0?(f=new ov,a.set(s,[f])):l>=c.length?(f=new ov,c.push(f)):f=c[l],f}function i(){a=new WeakMap}return{get:e,dispose:i}}function LT(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ce,color:new zt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return a[e.id]=i,i}}}function NT(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let OT=0;function PT(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function zT(a){const e=new LT,i=NT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ce);const l=new ce,c=new pn,f=new pn;function h(p){let x=0,g=0,y=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,T=0,b=0,v=0,w=0,U=0,P=0,G=0,O=0,F=0;p.sort(PT);for(let D=0,C=p.length;D<C;D++){const k=p[D],$=k.color,ue=k.intensity,he=k.distance,me=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)x+=$.r*ue,g+=$.g*ue,y+=$.b*ue;else if(k.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(k.sh.coefficients[I],ue);F++}else if(k.isDirectionalLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,Y=i.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=me,s.directionalShadowMatrix[M]=k.shadow.matrix,w++}s.directional[M]=I,M++}else if(k.isSpotLight){const I=e.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy($).multiplyScalar(ue),I.distance=he,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,s.spot[T]=I;const Z=k.shadow;if(k.map&&(s.spotLightMap[G]=k.map,G++,Z.updateMatrices(k),k.castShadow&&O++),s.spotLightMatrix[T]=Z.matrix,k.castShadow){const Y=i.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,s.spotShadow[T]=Y,s.spotShadowMap[T]=me,P++}T++}else if(k.isRectAreaLight){const I=e.get(k);I.color.copy($).multiplyScalar(ue),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),s.rectArea[b]=I,b++}else if(k.isPointLight){const I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity),I.distance=k.distance,I.decay=k.decay,k.castShadow){const Z=k.shadow,Y=i.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=me,s.pointShadowMatrix[E]=k.shadow.matrix,U++}s.point[E]=I,E++}else if(k.isHemisphereLight){const I=e.get(k);I.skyColor.copy(k.color).multiplyScalar(ue),I.groundColor.copy(k.groundColor).multiplyScalar(ue),s.hemi[v]=I,v++}}b>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=y;const J=s.hash;(J.directionalLength!==M||J.pointLength!==E||J.spotLength!==T||J.rectAreaLength!==b||J.hemiLength!==v||J.numDirectionalShadows!==w||J.numPointShadows!==U||J.numSpotShadows!==P||J.numSpotMaps!==G||J.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=b,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=P+G-O,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=F,J.directionalLength=M,J.pointLength=E,J.spotLength=T,J.rectAreaLength=b,J.hemiLength=v,J.numDirectionalShadows=w,J.numPointShadows=U,J.numSpotShadows=P,J.numSpotMaps=G,J.numLightProbes=F,s.version=OT++)}function m(p,x){let g=0,y=0,M=0,E=0,T=0;const b=x.matrixWorldInverse;for(let v=0,w=p.length;v<w;v++){const U=p[v];if(U.isDirectionalLight){const P=s.directional[g];P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(b),g++}else if(U.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(b),P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(b),M++}else if(U.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(b),f.identity(),c.copy(U.matrixWorld),c.premultiply(b),f.extractRotation(c),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const P=s.point[y];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(b),y++}else if(U.isHemisphereLight){const P=s.hemi[T];P.direction.setFromMatrixPosition(U.matrixWorld),P.direction.transformDirection(b),T++}}}return{setup:h,setupView:m,state:s}}function lv(a){const e=new zT(a),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function IT(a){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new lv(a),e.set(l,[h])):c>=f.length?(h=new lv(a),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const FT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BT=`uniform sampler2D shadow_pass;
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
}`;function HT(a,e,i){let s=new Yv;const l=new ct,c=new ct,f=new an,h=new c3({depthPacking:yb}),m=new u3,p={},x=i.maxTextureSize,g={[sr]:jn,[jn]:sr,[xa]:xa},y=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:FT,fragmentShader:BT}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new Vi;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ri(E,y),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Av;let v=this.type;this.render=function(O,F,J){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||O.length===0)return;const D=a.getRenderTarget(),C=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),$=a.state;$.setBlending(va),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ue=v!==ma&&this.type===ma,he=v===ma&&this.type!==ma;for(let me=0,I=O.length;me<I;me++){const Z=O[me],Y=Z.shadow;if(Y===void 0){ot("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const ye=Y.getFrameExtents();if(l.multiply(ye),c.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ye.x),l.x=c.x*ye.x,Y.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ye.y),l.y=c.y*ye.y,Y.mapSize.y=c.y)),Y.map===null||ue===!0||he===!0){const z=this.type!==ma?{minFilter:ri,magFilter:ri}:{};Y.map!==null&&Y.map.dispose(),Y.map=new or(l.x,l.y,z),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const Se=Y.getViewportCount();for(let z=0;z<Se;z++){const se=Y.getViewport(z);f.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),$.viewport(f),Y.updateMatrices(Z,z),s=Y.getFrustum(),P(F,J,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===ma&&w(Y,J),Y.needsUpdate=!1}v=this.type,b.needsUpdate=!1,a.setRenderTarget(D,C,k)};function w(O,F){const J=e.update(T);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new or(l.x,l.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,a.setRenderTarget(O.mapPass),a.clear(),a.renderBufferDirect(F,null,J,y,T,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,a.setRenderTarget(O.map),a.clear(),a.renderBufferDirect(F,null,J,M,T,null)}function U(O,F,J,D){let C=null;const k=J.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)C=k;else if(C=J.isPointLight===!0?m:h,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=C.uuid,ue=F.uuid;let he=p[$];he===void 0&&(he={},p[$]=he);let me=he[ue];me===void 0&&(me=C.clone(),he[ue]=me,F.addEventListener("dispose",G)),C=me}if(C.visible=F.visible,C.wireframe=F.wireframe,D===ma?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:g[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,J.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=a.properties.get(C);$.light=J}return C}function P(O,F,J,D,C){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===ma)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,O.matrixWorld);const ue=e.update(O),he=O.material;if(Array.isArray(he)){const me=ue.groups;for(let I=0,Z=me.length;I<Z;I++){const Y=me[I],ye=he[Y.materialIndex];if(ye&&ye.visible){const Se=U(O,ye,D,C);O.onBeforeShadow(a,O,F,J,ue,Se,Y),a.renderBufferDirect(J,null,ue,Se,O,Y),O.onAfterShadow(a,O,F,J,ue,Se,Y)}}}else if(he.visible){const me=U(O,he,D,C);O.onBeforeShadow(a,O,F,J,ue,me,null),a.renderBufferDirect(J,null,ue,me,O,null),O.onAfterShadow(a,O,F,J,ue,me,null)}}const $=O.children;for(let ue=0,he=$.length;ue<he;ue++)P($[ue],F,J,D,C)}function G(O){O.target.removeEventListener("dispose",G);for(const J in p){const D=p[J],C=O.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const VT={[dh]:hh,[ph]:gh,[mh]:vh,[Ps]:xh,[hh]:dh,[gh]:ph,[vh]:mh,[xh]:Ps};function GT(a,e){function i(){let X=!1;const Le=new an;let we=null;const De=new an(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!X&&(a.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,_e,He,rt,Vt){Vt===!0&&(Ee*=rt,_e*=rt,He*=rt),Le.set(Ee,_e,He,rt),De.equals(Le)===!1&&(a.clearColor(Ee,_e,He,rt),De.copy(Le))},reset:function(){X=!1,we=null,De.set(-1,0,0,0)}}}function s(){let X=!1,Le=!1,we=null,De=null,Ee=null;return{setReversed:function(_e){if(Le!==_e){const He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Le=_e;const rt=Ee;Ee=null,this.setClear(rt)}},getReversed:function(){return Le},setTest:function(_e){_e?fe(a.DEPTH_TEST):Re(a.DEPTH_TEST)},setMask:function(_e){we!==_e&&!X&&(a.depthMask(_e),we=_e)},setFunc:function(_e){if(Le&&(_e=VT[_e]),De!==_e){switch(_e){case dh:a.depthFunc(a.NEVER);break;case hh:a.depthFunc(a.ALWAYS);break;case ph:a.depthFunc(a.LESS);break;case Ps:a.depthFunc(a.LEQUAL);break;case mh:a.depthFunc(a.EQUAL);break;case xh:a.depthFunc(a.GEQUAL);break;case gh:a.depthFunc(a.GREATER);break;case vh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}De=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Ee!==_e&&(Le&&(_e=1-_e),a.clearDepth(_e),Ee=_e)},reset:function(){X=!1,we=null,De=null,Ee=null,Le=!1}}}function l(){let X=!1,Le=null,we=null,De=null,Ee=null,_e=null,He=null,rt=null,Vt=null;return{setTest:function(Dt){X||(Dt?fe(a.STENCIL_TEST):Re(a.STENCIL_TEST))},setMask:function(Dt){Le!==Dt&&!X&&(a.stencilMask(Dt),Le=Dt)},setFunc:function(Dt,Dn,qn){(we!==Dt||De!==Dn||Ee!==qn)&&(a.stencilFunc(Dt,Dn,qn),we=Dt,De=Dn,Ee=qn)},setOp:function(Dt,Dn,qn){(_e!==Dt||He!==Dn||rt!==qn)&&(a.stencilOp(Dt,Dn,qn),_e=Dt,He=Dn,rt=qn)},setLocked:function(Dt){X=Dt},setClear:function(Dt){Vt!==Dt&&(a.clearStencil(Dt),Vt=Dt)},reset:function(){X=!1,Le=null,we=null,De=null,Ee=null,_e=null,He=null,rt=null,Vt=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},y=new WeakMap,M=[],E=null,T=!1,b=null,v=null,w=null,U=null,P=null,G=null,O=null,F=new zt(0,0,0),J=0,D=!1,C=null,k=null,$=null,ue=null,he=null;const me=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Z=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=Z>=2);let ye=null,Se={};const z=a.getParameter(a.SCISSOR_BOX),se=a.getParameter(a.VIEWPORT),be=new an().fromArray(z),Ae=new an().fromArray(se);function Pe(X,Le,we,De){const Ee=new Uint8Array(4),_e=a.createTexture();a.bindTexture(X,_e),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let He=0;He<we;He++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,De,0,a.RGBA,a.UNSIGNED_BYTE,Ee):a.texImage2D(Le+He,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ee);return _e}const re={};re[a.TEXTURE_2D]=Pe(a.TEXTURE_2D,a.TEXTURE_2D,1),re[a.TEXTURE_CUBE_MAP]=Pe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[a.TEXTURE_2D_ARRAY]=Pe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),re[a.TEXTURE_3D]=Pe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),fe(a.DEPTH_TEST),f.setFunc(Ps),ft(!1),xt(ug),fe(a.CULL_FACE),Rt(va);function fe(X){x[X]!==!0&&(a.enable(X),x[X]=!0)}function Re(X){x[X]!==!1&&(a.disable(X),x[X]=!1)}function Ge(X,Le){return g[X]!==Le?(a.bindFramebuffer(X,Le),g[X]=Le,X===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Le),X===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function We(X,Le){let we=M,De=!1;if(X){we=y.get(Le),we===void 0&&(we=[],y.set(Le,we));const Ee=X.textures;if(we.length!==Ee.length||we[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,He=Ee.length;_e<He;_e++)we[_e]=a.COLOR_ATTACHMENT0+_e;we.length=Ee.length,De=!0}}else we[0]!==a.BACK&&(we[0]=a.BACK,De=!0);De&&a.drawBuffers(we)}function lt(X){return E!==X?(a.useProgram(X),E=X,!0):!1}const $t={[Or]:a.FUNC_ADD,[W1]:a.FUNC_SUBTRACT,[q1]:a.FUNC_REVERSE_SUBTRACT};$t[Y1]=a.MIN,$t[K1]=a.MAX;const ut={[Z1]:a.ZERO,[Q1]:a.ONE,[J1]:a.SRC_COLOR,[uh]:a.SRC_ALPHA,[ab]:a.SRC_ALPHA_SATURATE,[nb]:a.DST_COLOR,[eb]:a.DST_ALPHA,[$1]:a.ONE_MINUS_SRC_COLOR,[fh]:a.ONE_MINUS_SRC_ALPHA,[ib]:a.ONE_MINUS_DST_COLOR,[tb]:a.ONE_MINUS_DST_ALPHA,[rb]:a.CONSTANT_COLOR,[sb]:a.ONE_MINUS_CONSTANT_COLOR,[ob]:a.CONSTANT_ALPHA,[lb]:a.ONE_MINUS_CONSTANT_ALPHA};function Rt(X,Le,we,De,Ee,_e,He,rt,Vt,Dt){if(X===va){T===!0&&(Re(a.BLEND),T=!1);return}if(T===!1&&(fe(a.BLEND),T=!0),X!==j1){if(X!==b||Dt!==D){if((v!==Or||P!==Or)&&(a.blendEquation(a.FUNC_ADD),v=Or,P=Or),Dt)switch(X){case Ns:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ch:a.blendFunc(a.ONE,a.ONE);break;case fg:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case dg:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:on("WebGLState: Invalid blending: ",X);break}else switch(X){case Ns:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ch:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case fg:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dg:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",X);break}w=null,U=null,G=null,O=null,F.set(0,0,0),J=0,b=X,D=Dt}return}Ee=Ee||Le,_e=_e||we,He=He||De,(Le!==v||Ee!==P)&&(a.blendEquationSeparate($t[Le],$t[Ee]),v=Le,P=Ee),(we!==w||De!==U||_e!==G||He!==O)&&(a.blendFuncSeparate(ut[we],ut[De],ut[_e],ut[He]),w=we,U=De,G=_e,O=He),(rt.equals(F)===!1||Vt!==J)&&(a.blendColor(rt.r,rt.g,rt.b,Vt),F.copy(rt),J=Vt),b=X,D=!1}function V(X,Le){X.side===xa?Re(a.CULL_FACE):fe(a.CULL_FACE);let we=X.side===jn;Le&&(we=!we),ft(we),X.blending===Ns&&X.transparent===!1?Rt(va):Rt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const De=X.stencilWrite;h.setTest(De),De&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Be(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(a.SAMPLE_ALPHA_TO_COVERAGE):Re(a.SAMPLE_ALPHA_TO_COVERAGE)}function ft(X){C!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),C=X)}function xt(X){X!==G1?(fe(a.CULL_FACE),X!==k&&(X===ug?a.cullFace(a.BACK):X===k1?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Re(a.CULL_FACE),k=X}function vt(X){X!==$&&(I&&a.lineWidth(X),$=X)}function Be(X,Le,we){X?(fe(a.POLYGON_OFFSET_FILL),(ue!==Le||he!==we)&&(a.polygonOffset(Le,we),ue=Le,he=we)):Re(a.POLYGON_OFFSET_FILL)}function Ht(X){X?fe(a.SCISSOR_TEST):Re(a.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=a.TEXTURE0+me-1),ye!==X&&(a.activeTexture(X),ye=X)}function it(X,Le,we){we===void 0&&(ye===null?we=a.TEXTURE0+me-1:we=ye);let De=Se[we];De===void 0&&(De={type:void 0,texture:void 0},Se[we]=De),(De.type!==X||De.texture!==Le)&&(ye!==we&&(a.activeTexture(we),ye=we),a.bindTexture(X,Le||re[X]),De.type=X,De.texture=Le)}function L(){const X=Se[ye];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function _(){try{a.compressedTexImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function H(){try{a.compressedTexImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Q(){try{a.texSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function de(){try{a.texSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function ie(){try{a.compressedTexSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function ze(){try{a.compressedTexSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Ue(){try{a.texStorage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Ke(){try{a.texStorage3D(...arguments)}catch(X){X("WebGLState:",X)}}function je(){try{a.texImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Me(){try{a.texImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Te(X){be.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),be.copy(X))}function Ze(X){Ae.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Ae.copy(X))}function Xe(X,Le){let we=p.get(Le);we===void 0&&(we=new WeakMap,p.set(Le,we));let De=we.get(X);De===void 0&&(De=a.getUniformBlockIndex(Le,X.name),we.set(X,De))}function Ie(X,Le){const De=p.get(Le).get(X);m.get(Le)!==De&&(a.uniformBlockBinding(Le,De,X.__bindingPointIndex),m.set(Le,De))}function at(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),x={},ye=null,Se={},g={},y=new WeakMap,M=[],E=null,T=!1,b=null,v=null,w=null,U=null,P=null,G=null,O=null,F=new zt(0,0,0),J=0,D=!1,C=null,k=null,$=null,ue=null,he=null,be.set(0,0,a.canvas.width,a.canvas.height),Ae.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:fe,disable:Re,bindFramebuffer:Ge,drawBuffers:We,useProgram:lt,setBlending:Rt,setMaterial:V,setFlipSided:ft,setCullFace:xt,setLineWidth:vt,setPolygonOffset:Be,setScissorTest:Ht,activeTexture:Ye,bindTexture:it,unbindTexture:L,compressedTexImage2D:_,compressedTexImage3D:H,texImage2D:je,texImage3D:Me,updateUBOMapping:Xe,uniformBlockBinding:Ie,texStorage2D:Ue,texStorage3D:Ke,texSubImage2D:Q,texSubImage3D:de,compressedTexSubImage2D:ie,compressedTexSubImage3D:ze,scissor:Te,viewport:Ze,reset:at}}function kT(a,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,x=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,_){return M?new OffscreenCanvas(L,_):nu("canvas")}function T(L,_,H){let Q=1;const de=it(L);if((de.width>H||de.height>H)&&(Q=H/Math.max(de.width,de.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ie=Math.floor(Q*de.width),ze=Math.floor(Q*de.height);g===void 0&&(g=E(ie,ze));const Ue=_?E(ie,ze):g;return Ue.width=ie,Ue.height=ze,Ue.getContext("2d").drawImage(L,0,0,ie,ze),ot("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ie+"x"+ze+")."),Ue}else return"data"in L&&ot("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function b(L){return L.generateMipmaps}function v(L){a.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function U(L,_,H,Q,de=!1){if(L!==null){if(a[L]!==void 0)return a[L];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ie=_;if(_===a.RED&&(H===a.FLOAT&&(ie=a.R32F),H===a.HALF_FLOAT&&(ie=a.R16F),H===a.UNSIGNED_BYTE&&(ie=a.R8)),_===a.RED_INTEGER&&(H===a.UNSIGNED_BYTE&&(ie=a.R8UI),H===a.UNSIGNED_SHORT&&(ie=a.R16UI),H===a.UNSIGNED_INT&&(ie=a.R32UI),H===a.BYTE&&(ie=a.R8I),H===a.SHORT&&(ie=a.R16I),H===a.INT&&(ie=a.R32I)),_===a.RG&&(H===a.FLOAT&&(ie=a.RG32F),H===a.HALF_FLOAT&&(ie=a.RG16F),H===a.UNSIGNED_BYTE&&(ie=a.RG8)),_===a.RG_INTEGER&&(H===a.UNSIGNED_BYTE&&(ie=a.RG8UI),H===a.UNSIGNED_SHORT&&(ie=a.RG16UI),H===a.UNSIGNED_INT&&(ie=a.RG32UI),H===a.BYTE&&(ie=a.RG8I),H===a.SHORT&&(ie=a.RG16I),H===a.INT&&(ie=a.RG32I)),_===a.RGB_INTEGER&&(H===a.UNSIGNED_BYTE&&(ie=a.RGB8UI),H===a.UNSIGNED_SHORT&&(ie=a.RGB16UI),H===a.UNSIGNED_INT&&(ie=a.RGB32UI),H===a.BYTE&&(ie=a.RGB8I),H===a.SHORT&&(ie=a.RGB16I),H===a.INT&&(ie=a.RGB32I)),_===a.RGBA_INTEGER&&(H===a.UNSIGNED_BYTE&&(ie=a.RGBA8UI),H===a.UNSIGNED_SHORT&&(ie=a.RGBA16UI),H===a.UNSIGNED_INT&&(ie=a.RGBA32UI),H===a.BYTE&&(ie=a.RGBA8I),H===a.SHORT&&(ie=a.RGBA16I),H===a.INT&&(ie=a.RGBA32I)),_===a.RGB&&(H===a.UNSIGNED_INT_5_9_9_9_REV&&(ie=a.RGB9_E5),H===a.UNSIGNED_INT_10F_11F_11F_REV&&(ie=a.R11F_G11F_B10F)),_===a.RGBA){const ze=de?eu:Ot.getTransfer(Q);H===a.FLOAT&&(ie=a.RGBA32F),H===a.HALF_FLOAT&&(ie=a.RGBA16F),H===a.UNSIGNED_BYTE&&(ie=ze===jt?a.SRGB8_ALPHA8:a.RGBA8),H===a.UNSIGNED_SHORT_4_4_4_4&&(ie=a.RGBA4),H===a.UNSIGNED_SHORT_5_5_5_1&&(ie=a.RGB5_A1)}return(ie===a.R16F||ie===a.R32F||ie===a.RG16F||ie===a.RG32F||ie===a.RGBA16F||ie===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function P(L,_){let H;return L?_===null||_===Fr||_===Qo?H=a.DEPTH24_STENCIL8:_===Oi?H=a.DEPTH32F_STENCIL8:_===Zo&&(H=a.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fr||_===Qo?H=a.DEPTH_COMPONENT24:_===Oi?H=a.DEPTH_COMPONENT32F:_===Zo&&(H=a.DEPTH_COMPONENT16),H}function G(L,_){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==ri&&L.minFilter!==On?Math.log2(Math.max(_.width,_.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?_.mipmaps.length:1}function O(L){const _=L.target;_.removeEventListener("dispose",O),J(_),_.isVideoTexture&&x.delete(_)}function F(L){const _=L.target;_.removeEventListener("dispose",F),C(_)}function J(L){const _=s.get(L);if(_.__webglInit===void 0)return;const H=L.source,Q=y.get(H);if(Q){const de=Q[_.__cacheKey];de.usedTimes--,de.usedTimes===0&&D(L),Object.keys(Q).length===0&&y.delete(H)}s.remove(L)}function D(L){const _=s.get(L);a.deleteTexture(_.__webglTexture);const H=L.source,Q=y.get(H);delete Q[_.__cacheKey],f.memory.textures--}function C(L){const _=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let de=0;de<_.__webglFramebuffer[Q].length;de++)a.deleteFramebuffer(_.__webglFramebuffer[Q][de]);else a.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)a.deleteFramebuffer(_.__webglFramebuffer[Q]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=L.textures;for(let Q=0,de=H.length;Q<de;Q++){const ie=s.get(H[Q]);ie.__webglTexture&&(a.deleteTexture(ie.__webglTexture),f.memory.textures--),s.remove(H[Q])}s.remove(L)}let k=0;function $(){k=0}function ue(){const L=k;return L>=l.maxTextures&&ot("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),k+=1,L}function he(L){const _=[];return _.push(L.wrapS),_.push(L.wrapT),_.push(L.wrapR||0),_.push(L.magFilter),_.push(L.minFilter),_.push(L.anisotropy),_.push(L.internalFormat),_.push(L.format),_.push(L.type),_.push(L.generateMipmaps),_.push(L.premultiplyAlpha),_.push(L.flipY),_.push(L.unpackAlignment),_.push(L.colorSpace),_.join()}function me(L,_){const H=s.get(L);if(L.isVideoTexture&&Ht(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){const Q=L.image;if(Q===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{re(H,L,_);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,H.__webglTexture,a.TEXTURE0+_)}function I(L,_){const H=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){re(H,L,_);return}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,H.__webglTexture,a.TEXTURE0+_)}function Z(L,_){const H=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){re(H,L,_);return}i.bindTexture(a.TEXTURE_3D,H.__webglTexture,a.TEXTURE0+_)}function Y(L,_){const H=s.get(L);if(L.version>0&&H.__version!==L.version){fe(H,L,_);return}i.bindTexture(a.TEXTURE_CUBE_MAP,H.__webglTexture,a.TEXTURE0+_)}const ye={[Sh]:a.REPEAT,[ai]:a.CLAMP_TO_EDGE,[bh]:a.MIRRORED_REPEAT},Se={[ri]:a.NEAREST,[vb]:a.NEAREST_MIPMAP_NEAREST,[Sc]:a.NEAREST_MIPMAP_LINEAR,[On]:a.LINEAR,[Dd]:a.LINEAR_MIPMAP_NEAREST,[zr]:a.LINEAR_MIPMAP_LINEAR},z={[Mb]:a.NEVER,[wb]:a.ALWAYS,[Eb]:a.LESS,[zv]:a.LEQUAL,[Tb]:a.EQUAL,[Cb]:a.GEQUAL,[Ab]:a.GREATER,[Rb]:a.NOTEQUAL};function se(L,_){if(_.type===Oi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===On||_.magFilter===Dd||_.magFilter===Sc||_.magFilter===zr||_.minFilter===On||_.minFilter===Dd||_.minFilter===Sc||_.minFilter===zr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,ye[_.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,ye[_.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,ye[_.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,Se[_.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,Se[_.minFilter]),_.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,z[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ri||_.minFilter!==Sc&&_.minFilter!==zr||_.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||s.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,l.getMaxAnisotropy())),s.get(_).__currentAnisotropy=_.anisotropy}}}function be(L,_){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,_.addEventListener("dispose",O));const Q=_.source;let de=y.get(Q);de===void 0&&(de={},y.set(Q,de));const ie=he(_);if(ie!==L.__cacheKey){de[ie]===void 0&&(de[ie]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,H=!0),de[ie].usedTimes++;const ze=de[L.__cacheKey];ze!==void 0&&(de[L.__cacheKey].usedTimes--,ze.usedTimes===0&&D(_)),L.__cacheKey=ie,L.__webglTexture=de[ie].texture}return H}function Ae(L,_,H){return Math.floor(Math.floor(L/H)/_)}function Pe(L,_,H,Q){const ie=L.updateRanges;if(ie.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,_.width,_.height,H,Q,_.data);else{ie.sort((Me,Te)=>Me.start-Te.start);let ze=0;for(let Me=1;Me<ie.length;Me++){const Te=ie[ze],Ze=ie[Me],Xe=Te.start+Te.count,Ie=Ae(Ze.start,_.width,4),at=Ae(Te.start,_.width,4);Ze.start<=Xe+1&&Ie===at&&Ae(Ze.start+Ze.count-1,_.width,4)===Ie?Te.count=Math.max(Te.count,Ze.start+Ze.count-Te.start):(++ze,ie[ze]=Ze)}ie.length=ze+1;const Ue=a.getParameter(a.UNPACK_ROW_LENGTH),Ke=a.getParameter(a.UNPACK_SKIP_PIXELS),je=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,_.width);for(let Me=0,Te=ie.length;Me<Te;Me++){const Ze=ie[Me],Xe=Math.floor(Ze.start/4),Ie=Math.ceil(Ze.count/4),at=Xe%_.width,X=Math.floor(Xe/_.width),Le=Ie,we=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,at),a.pixelStorei(a.UNPACK_SKIP_ROWS,X),i.texSubImage2D(a.TEXTURE_2D,0,at,X,Le,we,H,Q,_.data)}L.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ue),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ke),a.pixelStorei(a.UNPACK_SKIP_ROWS,je)}}function re(L,_,H){let Q=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=a.TEXTURE_3D);const de=be(L,_),ie=_.source;i.bindTexture(Q,L.__webglTexture,a.TEXTURE0+H);const ze=s.get(ie);if(ie.version!==ze.__version||de===!0){i.activeTexture(a.TEXTURE0+H);const Ue=Ot.getPrimaries(Ot.workingColorSpace),Ke=_.colorSpace===ir?null:Ot.getPrimaries(_.colorSpace),je=_.colorSpace===ir||Ue===Ke?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Me=T(_.image,!1,l.maxTextureSize);Me=Ye(_,Me);const Te=c.convert(_.format,_.colorSpace),Ze=c.convert(_.type);let Xe=U(_.internalFormat,Te,Ze,_.colorSpace,_.isVideoTexture);se(Q,_);let Ie;const at=_.mipmaps,X=_.isVideoTexture!==!0,Le=ze.__version===void 0||de===!0,we=ie.dataReady,De=G(_,Me);if(_.isDepthTexture)Xe=P(_.format===$o,_.type),Le&&(X?i.texStorage2D(a.TEXTURE_2D,1,Xe,Me.width,Me.height):i.texImage2D(a.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Te,Ze,null));else if(_.isDataTexture)if(at.length>0){X&&Le&&i.texStorage2D(a.TEXTURE_2D,De,Xe,at[0].width,at[0].height);for(let Ee=0,_e=at.length;Ee<_e;Ee++)Ie=at[Ee],X?we&&i.texSubImage2D(a.TEXTURE_2D,Ee,0,0,Ie.width,Ie.height,Te,Ze,Ie.data):i.texImage2D(a.TEXTURE_2D,Ee,Xe,Ie.width,Ie.height,0,Te,Ze,Ie.data);_.generateMipmaps=!1}else X?(Le&&i.texStorage2D(a.TEXTURE_2D,De,Xe,Me.width,Me.height),we&&Pe(_,Me,Te,Ze)):i.texImage2D(a.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Te,Ze,Me.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){X&&Le&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Xe,at[0].width,at[0].height,Me.depth);for(let Ee=0,_e=at.length;Ee<_e;Ee++)if(Ie=at[Ee],_.format!==xi)if(Te!==null)if(X){if(we)if(_.layerUpdates.size>0){const He=Bg(Ie.width,Ie.height,_.format,_.type);for(const rt of _.layerUpdates){const Vt=Ie.data.subarray(rt*He/Ie.data.BYTES_PER_ELEMENT,(rt+1)*He/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,rt,Ie.width,Ie.height,1,Te,Vt)}_.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,0,Ie.width,Ie.height,Me.depth,Te,Ie.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ee,Xe,Ie.width,Ie.height,Me.depth,0,Ie.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?we&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,0,Ie.width,Ie.height,Me.depth,Te,Ze,Ie.data):i.texImage3D(a.TEXTURE_2D_ARRAY,Ee,Xe,Ie.width,Ie.height,Me.depth,0,Te,Ze,Ie.data)}else{X&&Le&&i.texStorage2D(a.TEXTURE_2D,De,Xe,at[0].width,at[0].height);for(let Ee=0,_e=at.length;Ee<_e;Ee++)Ie=at[Ee],_.format!==xi?Te!==null?X?we&&i.compressedTexSubImage2D(a.TEXTURE_2D,Ee,0,0,Ie.width,Ie.height,Te,Ie.data):i.compressedTexImage2D(a.TEXTURE_2D,Ee,Xe,Ie.width,Ie.height,0,Ie.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?we&&i.texSubImage2D(a.TEXTURE_2D,Ee,0,0,Ie.width,Ie.height,Te,Ze,Ie.data):i.texImage2D(a.TEXTURE_2D,Ee,Xe,Ie.width,Ie.height,0,Te,Ze,Ie.data)}else if(_.isDataArrayTexture)if(X){if(Le&&i.texStorage3D(a.TEXTURE_2D_ARRAY,De,Xe,Me.width,Me.height,Me.depth),we)if(_.layerUpdates.size>0){const Ee=Bg(Me.width,Me.height,_.format,_.type);for(const _e of _.layerUpdates){const He=Me.data.subarray(_e*Ee/Me.data.BYTES_PER_ELEMENT,(_e+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_e,Me.width,Me.height,1,Te,Ze,He)}_.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Te,Ze,Me.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Xe,Me.width,Me.height,Me.depth,0,Te,Ze,Me.data);else if(_.isData3DTexture)X?(Le&&i.texStorage3D(a.TEXTURE_3D,De,Xe,Me.width,Me.height,Me.depth),we&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Te,Ze,Me.data)):i.texImage3D(a.TEXTURE_3D,0,Xe,Me.width,Me.height,Me.depth,0,Te,Ze,Me.data);else if(_.isFramebufferTexture){if(Le)if(X)i.texStorage2D(a.TEXTURE_2D,De,Xe,Me.width,Me.height);else{let Ee=Me.width,_e=Me.height;for(let He=0;He<De;He++)i.texImage2D(a.TEXTURE_2D,He,Xe,Ee,_e,0,Te,Ze,null),Ee>>=1,_e>>=1}}else if(at.length>0){if(X&&Le){const Ee=it(at[0]);i.texStorage2D(a.TEXTURE_2D,De,Xe,Ee.width,Ee.height)}for(let Ee=0,_e=at.length;Ee<_e;Ee++)Ie=at[Ee],X?we&&i.texSubImage2D(a.TEXTURE_2D,Ee,0,0,Te,Ze,Ie):i.texImage2D(a.TEXTURE_2D,Ee,Xe,Te,Ze,Ie);_.generateMipmaps=!1}else if(X){if(Le){const Ee=it(Me);i.texStorage2D(a.TEXTURE_2D,De,Xe,Ee.width,Ee.height)}we&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Te,Ze,Me)}else i.texImage2D(a.TEXTURE_2D,0,Xe,Te,Ze,Me);b(_)&&v(Q),ze.__version=ie.version,_.onUpdate&&_.onUpdate(_)}L.__version=_.version}function fe(L,_,H){if(_.image.length!==6)return;const Q=be(L,_),de=_.source;i.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+H);const ie=s.get(de);if(de.version!==ie.__version||Q===!0){i.activeTexture(a.TEXTURE0+H);const ze=Ot.getPrimaries(Ot.workingColorSpace),Ue=_.colorSpace===ir?null:Ot.getPrimaries(_.colorSpace),Ke=_.colorSpace===ir||ze===Ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const je=_.isCompressedTexture||_.image[0].isCompressedTexture,Me=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let _e=0;_e<6;_e++)!je&&!Me?Te[_e]=T(_.image[_e],!0,l.maxCubemapSize):Te[_e]=Me?_.image[_e].image:_.image[_e],Te[_e]=Ye(_,Te[_e]);const Ze=Te[0],Xe=c.convert(_.format,_.colorSpace),Ie=c.convert(_.type),at=U(_.internalFormat,Xe,Ie,_.colorSpace),X=_.isVideoTexture!==!0,Le=ie.__version===void 0||Q===!0,we=de.dataReady;let De=G(_,Ze);se(a.TEXTURE_CUBE_MAP,_);let Ee;if(je){X&&Le&&i.texStorage2D(a.TEXTURE_CUBE_MAP,De,at,Ze.width,Ze.height);for(let _e=0;_e<6;_e++){Ee=Te[_e].mipmaps;for(let He=0;He<Ee.length;He++){const rt=Ee[He];_.format!==xi?Xe!==null?X?we&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,rt.width,rt.height,Xe,rt.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,at,rt.width,rt.height,0,rt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?we&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,rt.width,rt.height,Xe,Ie,rt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,at,rt.width,rt.height,0,Xe,Ie,rt.data)}}}else{if(Ee=_.mipmaps,X&&Le){Ee.length>0&&De++;const _e=it(Te[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,De,at,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Me){X?we&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Te[_e].width,Te[_e].height,Xe,Ie,Te[_e].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Te[_e].width,Te[_e].height,0,Xe,Ie,Te[_e].data);for(let He=0;He<Ee.length;He++){const Vt=Ee[He].image[_e].image;X?we&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,Vt.width,Vt.height,Xe,Ie,Vt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,at,Vt.width,Vt.height,0,Xe,Ie,Vt.data)}}else{X?we&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Xe,Ie,Te[_e]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,at,Xe,Ie,Te[_e]);for(let He=0;He<Ee.length;He++){const rt=Ee[He];X?we&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,Xe,Ie,rt.image[_e]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,at,Xe,Ie,rt.image[_e])}}}b(_)&&v(a.TEXTURE_CUBE_MAP),ie.__version=de.version,_.onUpdate&&_.onUpdate(_)}L.__version=_.version}function Re(L,_,H,Q,de,ie){const ze=c.convert(H.format,H.colorSpace),Ue=c.convert(H.type),Ke=U(H.internalFormat,ze,Ue,H.colorSpace),je=s.get(_),Me=s.get(H);if(Me.__renderTarget=_,!je.__hasExternalTextures){const Te=Math.max(1,_.width>>ie),Ze=Math.max(1,_.height>>ie);de===a.TEXTURE_3D||de===a.TEXTURE_2D_ARRAY?i.texImage3D(de,ie,Ke,Te,Ze,_.depth,0,ze,Ue,null):i.texImage2D(de,ie,Ke,Te,Ze,0,ze,Ue,null)}i.bindFramebuffer(a.FRAMEBUFFER,L),Be(_)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Q,de,Me.__webglTexture,0,vt(_)):(de===a.TEXTURE_2D||de>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Q,de,Me.__webglTexture,ie),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ge(L,_,H){if(a.bindRenderbuffer(a.RENDERBUFFER,L),_.depthBuffer){const Q=_.depthTexture,de=Q&&Q.isDepthTexture?Q.type:null,ie=P(_.stencilBuffer,de),ze=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ue=vt(_);Be(_)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ue,ie,_.width,_.height):H?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,ie,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,ie,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ze,a.RENDERBUFFER,L)}else{const Q=_.textures;for(let de=0;de<Q.length;de++){const ie=Q[de],ze=c.convert(ie.format,ie.colorSpace),Ue=c.convert(ie.type),Ke=U(ie.internalFormat,ze,Ue,ie.colorSpace),je=vt(_);H&&Be(_)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,je,Ke,_.width,_.height):Be(_)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,je,Ke,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,Ke,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function We(L,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,L),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=s.get(_.depthTexture);Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),me(_.depthTexture,0);const de=Q.__webglTexture,ie=vt(_);if(_.depthTexture.format===Jo)Be(_)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,de,0,ie):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,de,0);else if(_.depthTexture.format===$o)Be(_)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,de,0,ie):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function lt(L){const _=s.get(L),H=L.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==L.depthTexture){const Q=L.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const de=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",de)};Q.addEventListener("dispose",de),_.__depthDisposeCallback=de}_.__boundDepthTexture=Q}if(L.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Q=L.texture.mipmaps;Q&&Q.length>0?We(_.__webglFramebuffer[0],L):We(_.__webglFramebuffer,L)}else if(H){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(i.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=a.createRenderbuffer(),Ge(_.__webglDepthbuffer[Q],L,!1);else{const de=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer[Q];a.bindRenderbuffer(a.RENDERBUFFER,ie),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,ie)}}else{const Q=L.texture.mipmaps;if(Q&&Q.length>0?i.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=a.createRenderbuffer(),Ge(_.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ie=_.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ie),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,ie)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function $t(L,_,H){const Q=s.get(L);_!==void 0&&Re(Q.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),H!==void 0&&lt(L)}function ut(L){const _=L.texture,H=s.get(L),Q=s.get(_);L.addEventListener("dispose",F);const de=L.textures,ie=L.isWebGLCubeRenderTarget===!0,ze=de.length>1;if(ze||(Q.__webglTexture===void 0&&(Q.__webglTexture=a.createTexture()),Q.__version=_.version,f.memory.textures++),ie){H.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[Ue]=[];for(let Ke=0;Ke<_.mipmaps.length;Ke++)H.__webglFramebuffer[Ue][Ke]=a.createFramebuffer()}else H.__webglFramebuffer[Ue]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ue=0;Ue<_.mipmaps.length;Ue++)H.__webglFramebuffer[Ue]=a.createFramebuffer()}else H.__webglFramebuffer=a.createFramebuffer();if(ze)for(let Ue=0,Ke=de.length;Ue<Ke;Ue++){const je=s.get(de[Ue]);je.__webglTexture===void 0&&(je.__webglTexture=a.createTexture(),f.memory.textures++)}if(L.samples>0&&Be(L)===!1){H.__webglMultisampledFramebuffer=a.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ue=0;Ue<de.length;Ue++){const Ke=de[Ue];H.__webglColorRenderbuffer[Ue]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,H.__webglColorRenderbuffer[Ue]);const je=c.convert(Ke.format,Ke.colorSpace),Me=c.convert(Ke.type),Te=U(Ke.internalFormat,je,Me,Ke.colorSpace,L.isXRRenderTarget===!0),Ze=vt(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ze,Te,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,H.__webglColorRenderbuffer[Ue])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=a.createRenderbuffer(),Ge(H.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ie){i.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture),se(a.TEXTURE_CUBE_MAP,_);for(let Ue=0;Ue<6;Ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ke=0;Ke<_.mipmaps.length;Ke++)Re(H.__webglFramebuffer[Ue][Ke],L,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ke);else Re(H.__webglFramebuffer[Ue],L,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);b(_)&&v(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ze){for(let Ue=0,Ke=de.length;Ue<Ke;Ue++){const je=de[Ue],Me=s.get(je);let Te=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Te,Me.__webglTexture),se(Te,je),Re(H.__webglFramebuffer,L,je,a.COLOR_ATTACHMENT0+Ue,Te,0),b(je)&&v(Te)}i.unbindTexture()}else{let Ue=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ue=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Q.__webglTexture),se(Ue,_),_.mipmaps&&_.mipmaps.length>0)for(let Ke=0;Ke<_.mipmaps.length;Ke++)Re(H.__webglFramebuffer[Ke],L,_,a.COLOR_ATTACHMENT0,Ue,Ke);else Re(H.__webglFramebuffer,L,_,a.COLOR_ATTACHMENT0,Ue,0);b(_)&&v(Ue),i.unbindTexture()}L.depthBuffer&&lt(L)}function Rt(L){const _=L.textures;for(let H=0,Q=_.length;H<Q;H++){const de=_[H];if(b(de)){const ie=w(L),ze=s.get(de).__webglTexture;i.bindTexture(ie,ze),v(ie),i.unbindTexture()}}}const V=[],ft=[];function xt(L){if(L.samples>0){if(Be(L)===!1){const _=L.textures,H=L.width,Q=L.height;let de=a.COLOR_BUFFER_BIT;const ie=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ze=s.get(L),Ue=_.length>1;if(Ue)for(let je=0;je<_.length;je++)i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Ke=L.texture.mipmaps;Ke&&Ke.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let je=0;je<_.length;je++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=a.STENCIL_BUFFER_BIT)),Ue){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ze.__webglColorRenderbuffer[je]);const Me=s.get(_[je]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Me,0)}a.blitFramebuffer(0,0,H,Q,0,0,H,Q,de,a.NEAREST),m===!0&&(V.length=0,ft.length=0,V.push(a.COLOR_ATTACHMENT0+je),L.depthBuffer&&L.resolveDepthBuffer===!1&&(V.push(ie),ft.push(ie),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,ft)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,V))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ue)for(let je=0;je<_.length;je++){i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.RENDERBUFFER,ze.__webglColorRenderbuffer[je]);const Me=s.get(_[je]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.TEXTURE_2D,Me,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const _=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function vt(L){return Math.min(l.maxSamples,L.samples)}function Be(L){const _=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ht(L){const _=f.render.frame;x.get(L)!==_&&(x.set(L,_),L.update())}function Ye(L,_){const H=L.colorSpace,Q=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Fs&&H!==ir&&(Ot.getTransfer(H)===jt?(Q!==xi||de!==Ma)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",H)),_}function it(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=$,this.setTexture2D=me,this.setTexture2DArray=I,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=$t,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Be}function XT(a,e){function i(s,l=ir){let c;const f=Ot.getTransfer(l);if(s===Ma)return a.UNSIGNED_BYTE;if(s===sp)return a.UNSIGNED_SHORT_4_4_4_4;if(s===op)return a.UNSIGNED_SHORT_5_5_5_1;if(s===Uv)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===Lv)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===wv)return a.BYTE;if(s===Dv)return a.SHORT;if(s===Zo)return a.UNSIGNED_SHORT;if(s===rp)return a.INT;if(s===Fr)return a.UNSIGNED_INT;if(s===Oi)return a.FLOAT;if(s===Hr)return a.HALF_FLOAT;if(s===Nv)return a.ALPHA;if(s===Ov)return a.RGB;if(s===xi)return a.RGBA;if(s===Jo)return a.DEPTH_COMPONENT;if(s===$o)return a.DEPTH_STENCIL;if(s===Pv)return a.RED;if(s===lp)return a.RED_INTEGER;if(s===cp)return a.RG;if(s===up)return a.RG_INTEGER;if(s===fp)return a.RGBA_INTEGER;if(s===Yc||s===Kc||s===Zc||s===Qc)if(f===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mh||s===Eh||s===Th||s===Ah)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rh||s===Ch||s===wh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Rh||s===Ch)return f===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===wh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dh||s===Uh||s===Lh||s===Nh||s===Oh||s===Ph||s===zh||s===Ih||s===Fh||s===Bh||s===Hh||s===Vh||s===Gh||s===kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Dh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ph)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ih)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xh||s===jh||s===Wh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Xh)return f===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Wh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qh||s===Yh||s===Kh||s===Zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===qh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Yh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const jT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
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

}`;class qT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Zv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Fi({vertexShader:jT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Ir(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YT extends Gs{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,x=null,g=null,y=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",b=new qT,v={},w=i.getContextAttributes();let U=null,P=null;const G=[],O=[],F=new ct;let J=null;const D=new Ei;D.viewport=new an;const C=new Ei;C.viewport=new an;const k=[D,C],$=new d3;let ue=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let fe=G[re];return fe===void 0&&(fe=new $d,G[re]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(re){let fe=G[re];return fe===void 0&&(fe=new $d,G[re]=fe),fe.getGripSpace()},this.getHand=function(re){let fe=G[re];return fe===void 0&&(fe=new $d,G[re]=fe),fe.getHandSpace()};function me(re){const fe=O.indexOf(re.inputSource);if(fe===-1)return;const Re=G[fe];Re!==void 0&&(Re.update(re.inputSource,re.frame,p||f),Re.dispatchEvent({type:re.type,data:re.inputSource}))}function I(){l.removeEventListener("select",me),l.removeEventListener("selectstart",me),l.removeEventListener("selectend",me),l.removeEventListener("squeeze",me),l.removeEventListener("squeezestart",me),l.removeEventListener("squeezeend",me),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",Z);for(let re=0;re<G.length;re++){const fe=O[re];fe!==null&&(O[re]=null,G[re].disconnect(fe))}ue=null,he=null,b.reset();for(const re in v)delete v[re];e.setRenderTarget(U),M=null,y=null,g=null,l=null,P=null,Pe.stop(),s.isPresenting=!1,e.setPixelRatio(J),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){h=re,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(re){if(l=re,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",me),l.addEventListener("selectstart",me),l.addEventListener("selectend",me),l.addEventListener("squeeze",me),l.addEventListener("squeezestart",me),l.addEventListener("squeezeend",me),l.addEventListener("end",I),l.addEventListener("inputsourceschange",Z),w.xrCompatible!==!0&&await i.makeXRCompatible(),J=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ge=null,We=null;w.depth&&(We=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=w.stencil?$o:Jo,Ge=w.stencil?Qo:Fr);const lt={colorFormat:i.RGBA8,depthFormat:We,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(lt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new or(y.textureWidth,y.textureHeight,{format:xi,type:Ma,depthTexture:new Kv(y.textureWidth,y.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Re={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new or(M.framebufferWidth,M.framebufferHeight,{format:xi,type:Ma,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Pe.setContext(l),Pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Z(re){for(let fe=0;fe<re.removed.length;fe++){const Re=re.removed[fe],Ge=O.indexOf(Re);Ge>=0&&(O[Ge]=null,G[Ge].disconnect(Re))}for(let fe=0;fe<re.added.length;fe++){const Re=re.added[fe];let Ge=O.indexOf(Re);if(Ge===-1){for(let lt=0;lt<G.length;lt++)if(lt>=O.length){O.push(Re),Ge=lt;break}else if(O[lt]===null){O[lt]=Re,Ge=lt;break}if(Ge===-1)break}const We=G[Ge];We&&We.connect(Re)}}const Y=new ce,ye=new ce;function Se(re,fe,Re){Y.setFromMatrixPosition(fe.matrixWorld),ye.setFromMatrixPosition(Re.matrixWorld);const Ge=Y.distanceTo(ye),We=fe.projectionMatrix.elements,lt=Re.projectionMatrix.elements,$t=We[14]/(We[10]-1),ut=We[14]/(We[10]+1),Rt=(We[9]+1)/We[5],V=(We[9]-1)/We[5],ft=(We[8]-1)/We[0],xt=(lt[8]+1)/lt[0],vt=$t*ft,Be=$t*xt,Ht=Ge/(-ft+xt),Ye=Ht*-ft;if(fe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Ye),re.translateZ(Ht),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),We[10]===-1)re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const it=$t+Ht,L=ut+Ht,_=vt-Ye,H=Be+(Ge-Ye),Q=Rt*ut/L*it,de=V*ut/L*it;re.projectionMatrix.makePerspective(_,H,Q,de,it,L),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function z(re,fe){fe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(fe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(l===null)return;let fe=re.near,Re=re.far;b.texture!==null&&(b.depthNear>0&&(fe=b.depthNear),b.depthFar>0&&(Re=b.depthFar)),$.near=C.near=D.near=fe,$.far=C.far=D.far=Re,(ue!==$.near||he!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),ue=$.near,he=$.far),$.layers.mask=re.layers.mask|6,D.layers.mask=$.layers.mask&3,C.layers.mask=$.layers.mask&5;const Ge=re.parent,We=$.cameras;z($,Ge);for(let lt=0;lt<We.length;lt++)z(We[lt],Ge);We.length===2?Se($,D,C):$.projectionMatrix.copy(D.projectionMatrix),se(re,$,Ge)};function se(re,fe,Re){Re===null?re.matrix.copy(fe.matrixWorld):(re.matrix.copy(Re.matrixWorld),re.matrix.invert(),re.matrix.multiply(fe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Qh*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(re){m=re,y!==null&&(y.fixedFoveation=re),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=re)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh($)},this.getCameraTexture=function(re){return v[re]};let be=null;function Ae(re,fe){if(x=fe.getViewerPose(p||f),E=fe,x!==null){const Re=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ge=!1;Re.length!==$.cameras.length&&($.cameras.length=0,Ge=!0);for(let ut=0;ut<Re.length;ut++){const Rt=Re[ut];let V=null;if(M!==null)V=M.getViewport(Rt);else{const xt=g.getViewSubImage(y,Rt);V=xt.viewport,ut===0&&(e.setRenderTargetTextures(P,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(P))}let ft=k[ut];ft===void 0&&(ft=new Ei,ft.layers.enable(ut),ft.viewport=new an,k[ut]=ft),ft.matrix.fromArray(Rt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Rt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(V.x,V.y,V.width,V.height),ut===0&&($.matrix.copy(ft.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ge===!0&&$.cameras.push(ft)}const We=l.enabledFeatures;if(We&&We.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const ut=g.getDepthInformation(Re[0]);ut&&ut.isValid&&ut.texture&&b.init(ut,l.renderState)}if(We&&We.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let ut=0;ut<Re.length;ut++){const Rt=Re[ut].camera;if(Rt){let V=v[Rt];V||(V=new Zv,v[Rt]=V);const ft=g.getCameraImage(Rt);V.sourceTexture=ft}}}}for(let Re=0;Re<G.length;Re++){const Ge=O[Re],We=G[Re];Ge!==null&&We!==void 0&&We.update(Ge,fe,p||f)}be&&be(re,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Pe=new Qv;Pe.setAnimationLoop(Ae),this.setAnimationLoop=function(re){be=re},this.dispose=function(){}}}const Ur=new Ea,KT=new pn;function ZT(a,e){function i(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function s(b,v){v.color.getRGB(b.fogColor.value,jv(a)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function l(b,v,w,U,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(b,v):v.isMeshToonMaterial?(c(b,v),g(b,v)):v.isMeshPhongMaterial?(c(b,v),x(b,v)):v.isMeshStandardMaterial?(c(b,v),y(b,v),v.isMeshPhysicalMaterial&&M(b,v,P)):v.isMeshMatcapMaterial?(c(b,v),E(b,v)):v.isMeshDepthMaterial?c(b,v):v.isMeshDistanceMaterial?(c(b,v),T(b,v)):v.isMeshNormalMaterial?c(b,v):v.isLineBasicMaterial?(f(b,v),v.isLineDashedMaterial&&h(b,v)):v.isPointsMaterial?m(b,v,w,U):v.isSpriteMaterial?p(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,i(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===jn&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,i(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===jn&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,i(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,i(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const w=e.get(v),U=w.envMap,P=w.envMapRotation;U&&(b.envMap.value=U,Ur.copy(P),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),b.envMapRotation.value.setFromMatrix4(KT.makeRotationFromEuler(Ur)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,b.aoMapTransform))}function f(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform))}function h(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function m(b,v,w,U){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*w,b.scale.value=U*.5,v.map&&(b.map.value=v.map,i(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function p(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function x(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function g(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function y(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function M(b,v,w){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=w.texture,b.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,v){v.matcap&&(b.matcap.value=v.matcap)}function T(b,v){const w=e.get(v).light;b.referencePosition.value.setFromMatrixPosition(w.matrixWorld),b.nearDistance.value=w.shadow.camera.near,b.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function QT(a,e,i,s){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const P=U.program;s.uniformBlockBinding(w,P)}function p(w,U){let P=l[w.id];P===void 0&&(E(w),P=x(w),l[w.id]=P,w.addEventListener("dispose",b));const G=U.program;s.updateUBOMapping(w,G);const O=e.render.frame;c[w.id]!==O&&(y(w),c[w.id]=O)}function x(w){const U=g();w.__bindingPointIndex=U;const P=a.createBuffer(),G=w.__size,O=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,P),a.bufferData(a.UNIFORM_BUFFER,G,O),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,U,P),P}function g(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(w){const U=l[w.id],P=w.uniforms,G=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,U);for(let O=0,F=P.length;O<F;O++){const J=Array.isArray(P[O])?P[O]:[P[O]];for(let D=0,C=J.length;D<C;D++){const k=J[D];if(M(k,O,D,G)===!0){const $=k.__offset,ue=Array.isArray(k.value)?k.value:[k.value];let he=0;for(let me=0;me<ue.length;me++){const I=ue[me],Z=T(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,$+he,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,he),he+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,$,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function M(w,U,P,G){const O=w.value,F=U+"_"+P;if(G[F]===void 0)return typeof O=="number"||typeof O=="boolean"?G[F]=O:G[F]=O.clone(),!0;{const J=G[F];if(typeof O=="number"||typeof O=="boolean"){if(J!==O)return G[F]=O,!0}else if(J.equals(O)===!1)return J.copy(O),!0}return!1}function E(w){const U=w.uniforms;let P=0;const G=16;for(let F=0,J=U.length;F<J;F++){const D=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,k=D.length;C<k;C++){const $=D[C],ue=Array.isArray($.value)?$.value:[$.value];for(let he=0,me=ue.length;he<me;he++){const I=ue[he],Z=T(I),Y=P%G,ye=Y%Z.boundary,Se=Y+ye;P+=ye,Se!==0&&G-Se<Z.storage&&(P+=G-Se),$.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=P,P+=Z.storage}}}const O=P%G;return O>0&&(P+=G-O),w.__size=P,w.__cache={},this}function T(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",w),U}function b(w){const U=w.target;U.removeEventListener("dispose",b);const P=f.indexOf(U.__bindingPointIndex);f.splice(P,1),a.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const w in l)a.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const JT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let pa=null;function $T(){return pa===null&&(pa=new qv(JT,32,32,cp,Hr),pa.minFilter=On,pa.magFilter=On,pa.wrapS=ai,pa.wrapT=ai,pa.generateMipmaps=!1,pa.needsUpdate=!0),pa}class eA{constructor(e={}){const{canvas:i=Db(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const E=new Set([fp,up,lp]),T=new Set([Ma,Fr,Zo,Qo,sp,op]),b=new Uint32Array(4),v=new Int32Array(4);let w=null,U=null;const P=[],G=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let F=!1;this._outputColorSpace=mi;let J=0,D=0,C=null,k=-1,$=null;const ue=new an,he=new an;let me=null;const I=new zt(0);let Z=0,Y=i.width,ye=i.height,Se=1,z=null,se=null;const be=new an(0,0,Y,ye),Ae=new an(0,0,Y,ye);let Pe=!1;const re=new Yv;let fe=!1,Re=!1;const Ge=new pn,We=new ce,lt=new an,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Rt(){return C===null?Se:1}let V=s;function ft(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ap}`),i.addEventListener("webglcontextlost",Ee,!1),i.addEventListener("webglcontextrestored",_e,!1),i.addEventListener("webglcontextcreationerror",He,!1),V===null){const W="webgl2";if(V=ft(W,R),V===null)throw ft(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let xt,vt,Be,Ht,Ye,it,L,_,H,Q,de,ie,ze,Ue,Ke,je,Me,Te,Ze,Xe,Ie,at,X,Le;function we(){xt=new lE(V),xt.init(),at=new XT(V,xt),vt=new $2(V,xt,e,at),Be=new GT(V,xt),vt.reversedDepthBuffer&&y&&Be.buffers.depth.setReversed(!0),Ht=new fE(V),Ye=new wT,it=new kT(V,xt,Be,Ye,vt,at,Ht),L=new tE(O),_=new oE(O),H=new m3(V),X=new Q2(V,H),Q=new cE(V,H,Ht,X),de=new hE(V,Q,H,Ht),Ze=new dE(V,vt,it),je=new eE(Ye),ie=new CT(O,L,_,xt,vt,X,je),ze=new ZT(O,Ye),Ue=new UT,Ke=new IT(xt),Te=new Z2(O,L,_,Be,de,M,m),Me=new HT(O,de,vt),Le=new QT(V,Ht,vt,Be),Xe=new J2(V,xt,Ht),Ie=new uE(V,xt,Ht),Ht.programs=ie.programs,O.capabilities=vt,O.extensions=xt,O.properties=Ye,O.renderLists=Ue,O.shadowMap=Me,O.state=Be,O.info=Ht}we();const De=new YT(O,V);this.xr=De,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(R){R!==void 0&&(Se=R,this.setSize(Y,ye,!1))},this.getSize=function(R){return R.set(Y,ye)},this.setSize=function(R,W,oe=!0){if(De.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,ye=W,i.width=Math.floor(R*Se),i.height=Math.floor(W*Se),oe===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(Y*Se,ye*Se).floor()},this.setDrawingBufferSize=function(R,W,oe){Y=R,ye=W,Se=oe,i.width=Math.floor(R*oe),i.height=Math.floor(W*oe),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(ue)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,W,oe,ne){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,W,oe,ne),Be.viewport(ue.copy(be).multiplyScalar(Se).round())},this.getScissor=function(R){return R.copy(Ae)},this.setScissor=function(R,W,oe,ne){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,W,oe,ne),Be.scissor(he.copy(Ae).multiplyScalar(Se).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){Be.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,oe=!0){let ne=0;if(R){let K=!1;if(C!==null){const Ce=C.texture.format;K=E.has(Ce)}if(K){const Ce=C.texture.type,Ne=T.has(Ce),Fe=Te.getClearColor(),Ve=Te.getClearAlpha(),et=Fe.r,nt=Fe.g,Qe=Fe.b;Ne?(b[0]=et,b[1]=nt,b[2]=Qe,b[3]=Ve,V.clearBufferuiv(V.COLOR,0,b)):(v[0]=et,v[1]=nt,v[2]=Qe,v[3]=Ve,V.clearBufferiv(V.COLOR,0,v))}else ne|=V.COLOR_BUFFER_BIT}W&&(ne|=V.DEPTH_BUFFER_BIT),oe&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ee,!1),i.removeEventListener("webglcontextrestored",_e,!1),i.removeEventListener("webglcontextcreationerror",He,!1),Te.dispose(),Ue.dispose(),Ke.dispose(),Ye.dispose(),L.dispose(),_.dispose(),de.dispose(),X.dispose(),Le.dispose(),ie.dispose(),De.dispose(),De.removeEventListener("sessionstart",Xs),De.removeEventListener("sessionend",js),gi.stop()};function Ee(R){R.preventDefault(),gg("WebGLRenderer: Context Lost."),F=!0}function _e(){gg("WebGLRenderer: Context Restored."),F=!1;const R=Ht.autoReset,W=Me.enabled,oe=Me.autoUpdate,ne=Me.needsUpdate,K=Me.type;we(),Ht.autoReset=R,Me.enabled=W,Me.autoUpdate=oe,Me.needsUpdate=ne,Me.type=K}function He(R){on("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const W=R.target;W.removeEventListener("dispose",rt),Vt(W)}function Vt(R){Dt(R),Ye.remove(R)}function Dt(R){const W=Ye.get(R).programs;W!==void 0&&(W.forEach(function(oe){ie.releaseProgram(oe)}),R.isShaderMaterial&&ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,oe,ne,K,Ce){W===null&&(W=$t);const Ne=K.isMesh&&K.matrixWorld.determinant()<0,Fe=hu(R,W,oe,ne,K);Be.setMaterial(ne,Ne);let Ve=oe.index,et=1;if(ne.wireframe===!0){if(Ve=Q.getWireframeAttribute(oe),Ve===void 0)return;et=2}const nt=oe.drawRange,Qe=oe.attributes.position;let ht=nt.start*et,wt=(nt.start+nt.count)*et;Ce!==null&&(ht=Math.max(ht,Ce.start*et),wt=Math.min(wt,(Ce.start+Ce.count)*et)),Ve!==null?(ht=Math.max(ht,0),wt=Math.min(wt,Ve.count)):Qe!=null&&(ht=Math.max(ht,0),wt=Math.min(wt,Qe.count));const Ut=wt-ht;if(Ut<0||Ut===1/0)return;X.setup(K,ne,Fe,oe,Ve);let Mt,It=Xe;if(Ve!==null&&(Mt=H.get(Ve),It=Ie,It.setIndex(Mt)),K.isMesh)ne.wireframe===!0?(Be.setLineWidth(ne.wireframeLinewidth*Rt()),It.setMode(V.LINES)):It.setMode(V.TRIANGLES);else if(K.isLine){let $e=ne.linewidth;$e===void 0&&($e=1),Be.setLineWidth($e*Rt()),K.isLineSegments?It.setMode(V.LINES):K.isLineLoop?It.setMode(V.LINE_LOOP):It.setMode(V.LINE_STRIP)}else K.isPoints?It.setMode(V.POINTS):K.isSprite&&It.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)el("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))It.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $e=K._multiDrawStarts,Wt=K._multiDrawCounts,Et=K._multiDrawCount,yn=Ve?H.get(Ve).bytesPerElement:1,Ra=Ye.get(ne).currentProgram.getUniforms();for(let Yt=0;Yt<Et;Yt++)Ra.setValue(V,"_gl_DrawID",Yt),It.render($e[Yt]/yn,Wt[Yt])}else if(K.isInstancedMesh)It.renderInstances(ht,Ut,K.count);else if(oe.isInstancedBufferGeometry){const $e=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Wt=Math.min(oe.instanceCount,$e);It.renderInstances(ht,Ut,Wt)}else It.render(ht,Ut)};function Dn(R,W,oe){R.transparent===!0&&R.side===xa&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,mn(R,W,oe),R.side=sr,R.needsUpdate=!0,mn(R,W,oe),R.side=xa):mn(R,W,oe)}this.compile=function(R,W,oe=null){oe===null&&(oe=R),U=Ke.get(oe),U.init(W),G.push(U),oe.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(U.pushLight(K),K.castShadow&&U.pushShadow(K))}),R!==oe&&R.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(U.pushLight(K),K.castShadow&&U.pushShadow(K))}),U.setupLights();const ne=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const Fe=Ce[Ne];Dn(Fe,oe,K),ne.add(Fe)}else Dn(Ce,oe,K),ne.add(Ce)}),U=G.pop(),ne},this.compileAsync=function(R,W,oe=null){const ne=this.compile(R,W,oe);return new Promise(K=>{function Ce(){if(ne.forEach(function(Ne){Ye.get(Ne).currentProgram.isReady()&&ne.delete(Ne)}),ne.size===0){K(R);return}setTimeout(Ce,10)}xt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let qn=null;function cl(R){qn&&qn(R)}function Xs(){gi.stop()}function js(){gi.start()}const gi=new Qv;gi.setAnimationLoop(cl),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(R){qn=R,De.setAnimationLoop(R),R===null?gi.stop():gi.start()},De.addEventListener("sessionstart",Xs),De.addEventListener("sessionend",js),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(W),W=De.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,W,C),U=Ke.get(R,G.length),U.init(W),G.push(U),Ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),re.setFromProjectionMatrix(Ge,Pi,W.reversedDepth),Re=this.localClippingEnabled,fe=je.init(this.clippingPlanes,Re),w=Ue.get(R,P.length),w.init(),P.push(w),De.enabled===!0&&De.isPresenting===!0){const Ce=O.xr.getDepthSensingMesh();Ce!==null&&lr(Ce,W,-1/0,O.sortObjects)}lr(R,W,0,O.sortObjects),w.finish(),O.sortObjects===!0&&w.sort(z,se),ut=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ut&&Te.addToRenderList(w,R),this.info.render.frame++,fe===!0&&je.beginShadows();const oe=U.state.shadowsArray;Me.render(oe,R,W),fe===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=w.opaque,K=w.transmissive;if(U.setupLights(),W.isArrayCamera){const Ce=W.cameras;if(K.length>0)for(let Ne=0,Fe=Ce.length;Ne<Fe;Ne++){const Ve=Ce[Ne];qs(ne,K,R,Ve)}ut&&Te.render(R);for(let Ne=0,Fe=Ce.length;Ne<Fe;Ne++){const Ve=Ce[Ne];Ws(w,R,Ve,Ve.viewport)}}else K.length>0&&qs(ne,K,R,W),ut&&Te.render(R),Ws(w,R,W);C!==null&&D===0&&(it.updateMultisampleRenderTarget(C),it.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(O,R,W),X.resetDefaultState(),k=-1,$=null,G.pop(),G.length>0?(U=G[G.length-1],fe===!0&&je.setGlobalState(O.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?w=P[P.length-1]:w=null};function lr(R,W,oe,ne){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)oe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){ne&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ge);const Ne=de.update(R),Fe=R.material;Fe.visible&&w.push(R,Ne,Fe,oe,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||re.intersectsObject(R))){const Ne=de.update(R),Fe=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),lt.copy(Ne.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(Ge)),Array.isArray(Fe)){const Ve=Ne.groups;for(let et=0,nt=Ve.length;et<nt;et++){const Qe=Ve[et],ht=Fe[Qe.materialIndex];ht&&ht.visible&&w.push(R,Ne,ht,oe,lt.z,Qe)}}else Fe.visible&&w.push(R,Ne,Fe,oe,lt.z,null)}}const Ce=R.children;for(let Ne=0,Fe=Ce.length;Ne<Fe;Ne++)lr(Ce[Ne],W,oe,ne)}function Ws(R,W,oe,ne){const{opaque:K,transmissive:Ce,transparent:Ne}=R;U.setupLightsView(oe),fe===!0&&je.setGlobalState(O.clippingPlanes,oe),ne&&Be.viewport(ue.copy(ne)),K.length>0&&Yn(K,W,oe),Ce.length>0&&Yn(Ce,W,oe),Ne.length>0&&Yn(Ne,W,oe),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function qs(R,W,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[ne.id]===void 0&&(U.state.transmissionRenderTarget[ne.id]=new or(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Hr:Ma,minFilter:zr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));const Ce=U.state.transmissionRenderTarget[ne.id],Ne=ne.viewport||ue;Ce.setSize(Ne.z*O.transmissionResolutionScale,Ne.w*O.transmissionResolutionScale);const Fe=O.getRenderTarget(),Ve=O.getActiveCubeFace(),et=O.getActiveMipmapLevel();O.setRenderTarget(Ce),O.getClearColor(I),Z=O.getClearAlpha(),Z<1&&O.setClearColor(16777215,.5),O.clear(),ut&&Te.render(oe);const nt=O.toneMapping;O.toneMapping=rr;const Qe=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),U.setupLightsView(ne),fe===!0&&je.setGlobalState(O.clippingPlanes,ne),Yn(R,oe,ne),it.updateMultisampleRenderTarget(Ce),it.updateRenderTargetMipmap(Ce),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let wt=0,Ut=W.length;wt<Ut;wt++){const Mt=W[wt],{object:It,geometry:$e,material:Wt,group:Et}=Mt;if(Wt.side===xa&&It.layers.test(ne.layers)){const yn=Wt.side;Wt.side=jn,Wt.needsUpdate=!0,ln(It,oe,ne,$e,Wt,Et),Wt.side=yn,Wt.needsUpdate=!0,ht=!0}}ht===!0&&(it.updateMultisampleRenderTarget(Ce),it.updateRenderTargetMipmap(Ce))}O.setRenderTarget(Fe,Ve,et),O.setClearColor(I,Z),Qe!==void 0&&(ne.viewport=Qe),O.toneMapping=nt}function Yn(R,W,oe){const ne=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Ce=R.length;K<Ce;K++){const Ne=R[K],{object:Fe,geometry:Ve,group:et}=Ne;let nt=Ne.material;nt.allowOverride===!0&&ne!==null&&(nt=ne),Fe.layers.test(oe.layers)&&ln(Fe,W,oe,Ve,nt,et)}}function ln(R,W,oe,ne,K,Ce){R.onBeforeRender(O,W,oe,ne,K,Ce),R.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(O,W,oe,ne,R,Ce),K.transparent===!0&&K.side===xa&&K.forceSinglePass===!1?(K.side=jn,K.needsUpdate=!0,O.renderBufferDirect(oe,W,ne,K,R,Ce),K.side=sr,K.needsUpdate=!0,O.renderBufferDirect(oe,W,ne,K,R,Ce),K.side=xa):O.renderBufferDirect(oe,W,ne,K,R,Ce),R.onAfterRender(O,W,oe,ne,K,Ce)}function mn(R,W,oe){W.isScene!==!0&&(W=$t);const ne=Ye.get(R),K=U.state.lights,Ce=U.state.shadowsArray,Ne=K.state.version,Fe=ie.getParameters(R,K.state,Ce,W,oe),Ve=ie.getProgramCacheKey(Fe);let et=ne.programs;ne.environment=R.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(R.isMeshStandardMaterial?_:L).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",rt),et=new Map,ne.programs=et);let nt=et.get(Ve);if(nt!==void 0){if(ne.currentProgram===nt&&ne.lightsStateVersion===Ne)return Vr(R,Fe),nt}else Fe.uniforms=ie.getUniforms(R),R.onBeforeCompile(Fe,O),nt=ie.acquireProgram(Fe,Ve),et.set(Ve,nt),ne.uniforms=Fe.uniforms;const Qe=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=je.uniform),Vr(R,Fe),ne.needsLights=ul(R),ne.lightsStateVersion=Ne,ne.needsLights&&(Qe.ambientLightColor.value=K.state.ambient,Qe.lightProbe.value=K.state.probe,Qe.directionalLights.value=K.state.directional,Qe.directionalLightShadows.value=K.state.directionalShadow,Qe.spotLights.value=K.state.spot,Qe.spotLightShadows.value=K.state.spotShadow,Qe.rectAreaLights.value=K.state.rectArea,Qe.ltc_1.value=K.state.rectAreaLTC1,Qe.ltc_2.value=K.state.rectAreaLTC2,Qe.pointLights.value=K.state.point,Qe.pointLightShadows.value=K.state.pointShadow,Qe.hemisphereLights.value=K.state.hemi,Qe.directionalShadowMap.value=K.state.directionalShadowMap,Qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qe.spotShadowMap.value=K.state.spotShadowMap,Qe.spotLightMatrix.value=K.state.spotLightMatrix,Qe.spotLightMap.value=K.state.spotLightMap,Qe.pointShadowMap.value=K.state.pointShadowMap,Qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ne.currentProgram=nt,ne.uniformsList=null,nt}function ki(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Jc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Vr(R,W){const oe=Ye.get(R);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function hu(R,W,oe,ne,K){W.isScene!==!0&&(W=$t),it.resetTextureUnits();const Ce=W.fog,Ne=ne.isMeshStandardMaterial?W.environment:null,Fe=C===null?O.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fs,Ve=(ne.isMeshStandardMaterial?_:L).get(ne.envMap||Ne),et=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!oe.morphAttributes.position,ht=!!oe.morphAttributes.normal,wt=!!oe.morphAttributes.color;let Ut=rr;ne.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ut=O.toneMapping);const Mt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,It=Mt!==void 0?Mt.length:0,$e=Ye.get(ne),Wt=U.state.lights;if(fe===!0&&(Re===!0||R!==$)){const bn=R===$&&ne.id===k;je.setState(ne,R,bn)}let Et=!1;ne.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Wt.state.version||$e.outputColorSpace!==Fe||K.isBatchedMesh&&$e.batching===!1||!K.isBatchedMesh&&$e.batching===!0||K.isBatchedMesh&&$e.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$e.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$e.instancing===!1||!K.isInstancedMesh&&$e.instancing===!0||K.isSkinnedMesh&&$e.skinning===!1||!K.isSkinnedMesh&&$e.skinning===!0||K.isInstancedMesh&&$e.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$e.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$e.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$e.instancingMorph===!1&&K.morphTexture!==null||$e.envMap!==Ve||ne.fog===!0&&$e.fog!==Ce||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==je.numPlanes||$e.numIntersection!==je.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==nt||$e.morphTargets!==Qe||$e.morphNormals!==ht||$e.morphColors!==wt||$e.toneMapping!==Ut||$e.morphTargetsCount!==It)&&(Et=!0):(Et=!0,$e.__version=ne.version);let yn=$e.currentProgram;Et===!0&&(yn=mn(ne,W,K));let Ra=!1,Yt=!1,Xi=!1;const Kt=yn.getUniforms(),Sn=$e.uniforms;if(Be.useProgram(yn.program)&&(Ra=!0,Yt=!0,Xi=!0),ne.id!==k&&(k=ne.id,Yt=!0),Ra||$!==R){Be.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Kt.setValue(V,"projectionMatrix",R.projectionMatrix),Kt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Tn=Kt.map.cameraPosition;Tn!==void 0&&Tn.setValue(V,We.setFromMatrixPosition(R.matrixWorld)),vt.logarithmicDepthBuffer&&Kt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Kt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),$!==R&&($=R,Yt=!0,Xi=!0)}if(K.isSkinnedMesh){Kt.setOptional(V,K,"bindMatrix"),Kt.setOptional(V,K,"bindMatrixInverse");const bn=K.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Kt.setValue(V,"boneTexture",bn.boneTexture,it))}K.isBatchedMesh&&(Kt.setOptional(V,K,"batchingTexture"),Kt.setValue(V,"batchingTexture",K._matricesTexture,it),Kt.setOptional(V,K,"batchingIdTexture"),Kt.setValue(V,"batchingIdTexture",K._indirectTexture,it),Kt.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Kt.setValue(V,"batchingColorTexture",K._colorsTexture,it));const xn=oe.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Ze.update(K,oe,yn),(Yt||$e.receiveShadow!==K.receiveShadow)&&($e.receiveShadow=K.receiveShadow,Kt.setValue(V,"receiveShadow",K.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Sn.envMap.value=Ve,Sn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&W.environment!==null&&(Sn.envMapIntensity.value=W.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=$T()),Yt&&(Kt.setValue(V,"toneMappingExposure",O.toneMappingExposure),$e.needsLights&&pu(Sn,Xi),Ce&&ne.fog===!0&&ze.refreshFogUniforms(Sn,Ce),ze.refreshMaterialUniforms(Sn,ne,Se,ye,U.state.transmissionRenderTarget[R.id]),Jc.upload(V,ki($e),Sn,it)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Jc.upload(V,ki($e),Sn,it),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Kt.setValue(V,"center",K.center),Kt.setValue(V,"modelViewMatrix",K.modelViewMatrix),Kt.setValue(V,"normalMatrix",K.normalMatrix),Kt.setValue(V,"modelMatrix",K.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const bn=ne.uniformsGroups;for(let Tn=0,Ci=bn.length;Tn<Ci;Tn++){const ji=bn[Tn];Le.update(ji,yn),Le.bind(ji,yn)}}return yn}function pu(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function ul(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,W,oe){const ne=Ye.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Ye.get(R.texture).__webglTexture=W,Ye.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const oe=Ye.get(R);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0};const cr=V.createFramebuffer();this.setRenderTarget=function(R,W=0,oe=0){C=R,J=W,D=oe;let ne=!0,K=null,Ce=!1,Ne=!1;if(R){const Ve=Ye.get(R);if(Ve.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(V.FRAMEBUFFER,null),ne=!1;else if(Ve.__webglFramebuffer===void 0)it.setupRenderTarget(R);else if(Ve.__hasExternalTextures)it.rebindTextures(R,Ye.get(R.texture).__webglTexture,Ye.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(Ve.__boundDepthTexture!==Qe){if(Qe!==null&&Ye.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ne=!0);const nt=Ye.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?K=nt[W][oe]:K=nt[W],Ce=!0):R.samples>0&&it.useMultisampledRTT(R)===!1?K=Ye.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?K=nt[oe]:K=nt,ue.copy(R.viewport),he.copy(R.scissor),me=R.scissorTest}else ue.copy(be).multiplyScalar(Se).floor(),he.copy(Ae).multiplyScalar(Se).floor(),me=Pe;if(oe!==0&&(K=cr),Be.bindFramebuffer(V.FRAMEBUFFER,K)&&ne&&Be.drawBuffers(R,K),Be.viewport(ue),Be.scissor(he),Be.setScissorTest(me),Ce){const Ve=Ye.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ve.__webglTexture,oe)}else if(Ne){const Ve=W;for(let et=0;et<R.textures.length;et++){const nt=Ye.get(R.textures[et]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+et,nt.__webglTexture,oe,Ve)}}else if(R!==null&&oe!==0){const Ve=Ye.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ve.__webglTexture,oe)}k=-1},this.readRenderTargetPixels=function(R,W,oe,ne,K,Ce,Ne,Fe=0){if(!(R&&R.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve){Be.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const et=R.textures[Fe],nt=et.format,Qe=et.type;if(!vt.textureFormatReadable(nt)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Qe)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ne&&oe>=0&&oe<=R.height-K&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(W,oe,ne,K,at.convert(nt),at.convert(Qe),Ce))}finally{const et=C!==null?Ye.get(C).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,W,oe,ne,K,Ce,Ne,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ye.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve)if(W>=0&&W<=R.width-ne&&oe>=0&&oe<=R.height-K){Be.bindFramebuffer(V.FRAMEBUFFER,Ve);const et=R.textures[Fe],nt=et.format,Qe=et.type;if(!vt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ht),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Fe),V.readPixels(W,oe,ne,K,at.convert(nt),at.convert(Qe),0);const wt=C!==null?Ye.get(C).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,wt);const Ut=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ub(V,Ut,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ht),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer(ht),V.deleteSync(Ut),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,oe=0){const ne=Math.pow(2,-oe),K=Math.floor(R.image.width*ne),Ce=Math.floor(R.image.height*ne),Ne=W!==null?W.x:0,Fe=W!==null?W.y:0;it.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,Ne,Fe,K,Ce),Be.unbindTexture()};const Ys=V.createFramebuffer(),Aa=V.createFramebuffer();this.copyTextureToTexture=function(R,W,oe=null,ne=null,K=0,Ce=null){Ce===null&&(K!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=K,K=0):Ce=0);let Ne,Fe,Ve,et,nt,Qe,ht,wt,Ut;const Mt=R.isCompressedTexture?R.mipmaps[Ce]:R.image;if(oe!==null)Ne=oe.max.x-oe.min.x,Fe=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,et=oe.min.x,nt=oe.min.y,Qe=oe.isBox3?oe.min.z:0;else{const xn=Math.pow(2,-K);Ne=Math.floor(Mt.width*xn),Fe=Math.floor(Mt.height*xn),R.isDataArrayTexture?Ve=Mt.depth:R.isData3DTexture?Ve=Math.floor(Mt.depth*xn):Ve=1,et=0,nt=0,Qe=0}ne!==null?(ht=ne.x,wt=ne.y,Ut=ne.z):(ht=0,wt=0,Ut=0);const It=at.convert(W.format),$e=at.convert(W.type);let Wt;W.isData3DTexture?(it.setTexture3D(W,0),Wt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(it.setTexture2DArray(W,0),Wt=V.TEXTURE_2D_ARRAY):(it.setTexture2D(W,0),Wt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Et=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ra=V.getParameter(V.UNPACK_SKIP_PIXELS),Yt=V.getParameter(V.UNPACK_SKIP_ROWS),Xi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Mt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,et),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qe);const Kt=R.isDataArrayTexture||R.isData3DTexture,Sn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const xn=Ye.get(R),bn=Ye.get(W),Tn=Ye.get(xn.__renderTarget),Ci=Ye.get(bn.__renderTarget);Be.bindFramebuffer(V.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let ji=0;ji<Ve;ji++)Kt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ye.get(R).__webglTexture,K,Qe+ji),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ye.get(W).__webglTexture,Ce,Ut+ji)),V.blitFramebuffer(et,nt,Ne,Fe,ht,wt,Ne,Fe,V.DEPTH_BUFFER_BIT,V.NEAREST);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Ye.has(R)){const xn=Ye.get(R),bn=Ye.get(W);Be.bindFramebuffer(V.READ_FRAMEBUFFER,Ys),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,Aa);for(let Tn=0;Tn<Ve;Tn++)Kt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xn.__webglTexture,K,Qe+Tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xn.__webglTexture,K),Sn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,bn.__webglTexture,Ce,Ut+Tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bn.__webglTexture,Ce),K!==0?V.blitFramebuffer(et,nt,Ne,Fe,ht,wt,Ne,Fe,V.COLOR_BUFFER_BIT,V.NEAREST):Sn?V.copyTexSubImage3D(Wt,Ce,ht,wt,Ut+Tn,et,nt,Ne,Fe):V.copyTexSubImage2D(Wt,Ce,ht,wt,et,nt,Ne,Fe);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Wt,Ce,ht,wt,Ut,Ne,Fe,Ve,It,$e,Mt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Wt,Ce,ht,wt,Ut,Ne,Fe,Ve,It,Mt.data):V.texSubImage3D(Wt,Ce,ht,wt,Ut,Ne,Fe,Ve,It,$e,Mt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ce,ht,wt,Ne,Fe,It,$e,Mt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ce,ht,wt,Mt.width,Mt.height,It,Mt.data):V.texSubImage2D(V.TEXTURE_2D,Ce,ht,wt,Ne,Fe,It,$e,Mt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ra),V.pixelStorei(V.UNPACK_SKIP_ROWS,Yt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Xi),Ce===0&&W.generateMipmaps&&V.generateMipmap(Wt),Be.unbindTexture()},this.initRenderTarget=function(R){Ye.get(R).__webglFramebuffer===void 0&&it.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?it.setTextureCube(R,0):R.isData3DTexture?it.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?it.setTexture2DArray(R,0):it.setTexture2D(R,0),Be.unbindTexture()},this.resetState=function(){J=0,D=0,C=null,Be.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ot._getUnpackColorSpace()}}function tA({mouseForce:a=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:f=.014,BFECC:h=!0,resolution:m=.5,isBounce:p=!1,colors:x=["#5227FF","#FF9FFC","#B19EEF"],style:g={},className:y="",autoDemo:M=!0,autoSpeed:E=.5,autoIntensity:T=2.2,takeoverDuration:b=.25,autoResumeDelay:v=1e3,autoRampDuration:w=.6}){const U=xe.useRef(null),P=xe.useRef(null),G=xe.useRef(null),O=xe.useRef(null),F=xe.useRef(null),J=xe.useRef(!0),D=xe.useRef(null);return xe.useEffect(()=>{if(!U.current)return;function C(L){let _;Array.isArray(L)&&L.length>0?L.length===1?_=[L[0],L[0]]:_=L:_=["#ffffff","#ffffff"];const H=_.length,Q=new Uint8Array(H*4);for(let ie=0;ie<H;ie++){const ze=new zt(_[ie]);Q[ie*4+0]=Math.round(ze.r*255),Q[ie*4+1]=Math.round(ze.g*255),Q[ie*4+2]=Math.round(ze.b*255),Q[ie*4+3]=255}const de=new qv(Q,H,1,xi);return de.magFilter=On,de.minFilter=On,de.wrapS=ai,de.wrapT=ai,de.generateMipmaps=!1,de.needsUpdate=!0,de}const k=C(x),$=new an(0,0,0,0);class ue{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(_){this.container=_,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new eA({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new zt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new h3,this.clock.start()}resize(){if(!this.container)return;const _=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(_.width)),this.height=Math.max(1,Math.floor(_.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const he=new ue;class me{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(_){this.container=_,this.docTarget=_.ownerDocument||null;const H=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);H&&(this.listenerTarget=H,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(_,H){if(!this.container)return!1;const Q=this.container.getBoundingClientRect();return Q.width===0||Q.height===0?!1:_>=Q.left&&_<=Q.right&&H>=Q.top&&H<=Q.bottom}updateHoverState(_,H){return this.isHoverInside=this.isPointInside(_,H),this.isHoverInside}setCoords(_,H){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Q=this.container.getBoundingClientRect();if(Q.width===0||Q.height===0)return;const de=(_-Q.left)/Q.width,ie=(H-Q.top)/Q.height;this.coords.set(de*2-1,-(ie*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(_,H){this.coords.set(_,H),this.mouseMoved=!0}onDocumentMouseMove(_){if(this.updateHoverState(_.clientX,_.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const H=this.container.getBoundingClientRect();if(H.width===0||H.height===0)return;const Q=(_.clientX-H.left)/H.width,de=(_.clientY-H.top)/H.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Q*2-1,-(de*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(_.clientX,_.clientY),this.hasUserControl=!0}}onDocumentTouchStart(_){if(_.touches.length!==1)return;const H=_.touches[0];this.updateHoverState(H.clientX,H.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(H.clientX,H.clientY),this.hasUserControl=!0)}onDocumentTouchMove(_){if(_.touches.length!==1)return;const H=_.touches[0];this.updateHoverState(H.clientX,H.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(H.clientX,H.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const _=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(_>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const H=_*_*(3-2*_);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,H)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const I=new me;class Z{constructor(_,H,Q){this.mouse=_,this.manager=H,this.enabled=Q.enabled,this.speed=Q.speed,this.resumeDelay=Q.resumeDelay||3e3,this.rampDurationMs=(Q.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const _=Math.random;this.target.set((_()*2-1)*(1-this.margin),(_()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const _=performance.now();if(_-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=_,this.activationTime=_),!this.active)return;this.mouse.isAutoActive=!0;let Q=(_-this.lastTime)/1e3;this.lastTime=_,Q>.2&&(Q=.016);const de=this._tmpDir.subVectors(this.target,this.current),ie=de.length();if(ie<.01){this.pickNewTarget();return}de.normalize();let ze=1;if(this.rampDurationMs>0){const je=Math.min(1,(_-this.activationTime)/this.rampDurationMs);ze=je*je*(3-2*je)}const Ue=this.speed*Q*ze,Ke=Math.min(Ue,ie);this.current.addScaledVector(de,Ke),this.mouse.setNormalized(this.current.x,this.current.y)}}const Y=`
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
`,z=`
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
`;class Re{constructor(_){this.props=_||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Og,this.camera=new iu,this.uniforms&&(this.material=new Gc(this.props.material),this.geometry=new Ir(2,2),this.plane=new Ri(this.geometry,this.material),this.scene.add(this.plane))}update(){he.renderer.setRenderTarget(this.props.output||null),he.renderer.render(this.scene,this.camera),he.renderer.setRenderTarget(null)}}class Ge extends Re{constructor(_){super({material:{vertexShader:Y,fragmentShader:z,uniforms:{boundarySpace:{value:_.cellScale},px:{value:_.cellScale},fboSize:{value:_.fboSize},velocity:{value:_.src.texture},dt:{value:_.dt},isBFECC:{value:!0}}},output:_.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const _=new Vi,H=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);_.setAttribute("position",new Ai(H,3));const Q=new Gc({vertexShader:ye,fragmentShader:z,uniforms:this.uniforms});this.line=new l3(_,Q),this.scene.add(this.line)}update({dt:_,isBounce:H,BFECC:Q}){this.uniforms.dt.value=_,this.line.visible=H,this.uniforms.isBFECC.value=Q,super.update()}}class We extends Re{constructor(_){super({output:_.dst}),this.init(_)}init(_){super.init();const H=new Ir(1,1),Q=new Gc({vertexShader:Se,fragmentShader:Ae,blending:ch,depthWrite:!1,uniforms:{px:{value:_.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(_.cursor_size,_.cursor_size)}}});this.mouse=new Ri(H,Q),this.scene.add(this.mouse)}update(_){const H=I.diff.x/2*_.mouse_force,Q=I.diff.y/2*_.mouse_force,de=_.cursor_size*_.cellScale.x,ie=_.cursor_size*_.cellScale.y,ze=Math.min(Math.max(I.coords.x,-1+de+_.cellScale.x*2),1-de-_.cellScale.x*2),Ue=Math.min(Math.max(I.coords.y,-1+ie+_.cellScale.y*2),1-ie-_.cellScale.y*2),Ke=this.mouse.material.uniforms;Ke.force.value.set(H,Q),Ke.center.value.set(ze,Ue),Ke.scale.value.set(_.cursor_size,_.cursor_size),super.update()}}class lt extends Re{constructor(_){super({material:{vertexShader:Y,fragmentShader:fe,uniforms:{boundarySpace:{value:_.boundarySpace},velocity:{value:_.src.texture},velocity_new:{value:_.dst_.texture},v:{value:_.viscous},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst,output0:_.dst_,output1:_.dst}),this.init()}update({viscous:_,iterations:H,dt:Q}){let de,ie;this.uniforms.v.value=_;for(let ze=0;ze<H;ze++)ze%2===0?(de=this.props.output0,ie=this.props.output1):(de=this.props.output1,ie=this.props.output0),this.uniforms.velocity_new.value=de.texture,this.props.output=ie,this.uniforms.dt.value=Q,super.update();return ie}}class $t extends Re{constructor(_){super({material:{vertexShader:Y,fragmentShader:be,uniforms:{boundarySpace:{value:_.boundarySpace},velocity:{value:_.src.texture},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst}),this.init()}update({vel:_}){this.uniforms.velocity.value=_.texture,super.update()}}class ut extends Re{constructor(_){super({material:{vertexShader:Y,fragmentShader:Pe,uniforms:{boundarySpace:{value:_.boundarySpace},pressure:{value:_.dst_.texture},divergence:{value:_.src.texture},px:{value:_.cellScale}}},output:_.dst,output0:_.dst_,output1:_.dst}),this.init()}update({iterations:_}){let H,Q;for(let de=0;de<_;de++)de%2===0?(H=this.props.output0,Q=this.props.output1):(H=this.props.output1,Q=this.props.output0),this.uniforms.pressure.value=H.texture,this.props.output=Q,super.update();return Q}}class Rt extends Re{constructor(_){super({material:{vertexShader:Y,fragmentShader:re,uniforms:{boundarySpace:{value:_.boundarySpace},pressure:{value:_.src_p.texture},velocity:{value:_.src_v.texture},px:{value:_.cellScale},dt:{value:_.dt}}},output:_.dst}),this.init()}update({vel:_,pressure:H}){this.uniforms.velocity.value=_.texture,this.uniforms.pressure.value=H.texture,super.update()}}class V{constructor(_){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,..._},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Hr:Oi}createAllFBO(){const H={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:On,magFilter:On,wrapS:ai,wrapT:ai};for(let Q in this.fbos)this.fbos[Q]=new or(this.fboSize.x,this.fboSize.y,H)}createShaderPass(){this.advection=new Ge({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new We({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new lt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new $t({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new ut({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Rt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const _=Math.max(1,Math.round(this.options.resolution*he.width)),H=Math.max(1,Math.round(this.options.resolution*he.height)),Q=1/_,de=1/H;this.cellScale.set(Q,de),this.fboSize.set(_,H)}resize(){this.calcSize();for(let _ in this.fbos)this.fbos[_].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let _=this.fbos.vel_1;this.options.isViscous&&(_=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:_});const H=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:_,pressure:H})}}class ft{constructor(){this.init()}init(){this.simulation=new V,this.scene=new Og,this.camera=new iu,this.output=new Ri(new Ir(2,2),new Gc({vertexShader:Y,fragmentShader:se,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:k},bgColor:{value:$}}})),this.scene.add(this.output)}addScene(_){this.scene.add(_)}resize(){this.simulation.resize()}render(){he.renderer.setRenderTarget(null),he.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class xt{constructor(_){this.props=_,he.init(_.$wrapper),I.init(_.$wrapper),I.autoIntensity=_.autoIntensity,I.takeoverDuration=_.takeoverDuration,this.lastUserInteraction=performance.now(),I.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Z(I,this,{enabled:_.autoDemo,speed:_.autoSpeed,resumeDelay:_.autoResumeDelay,rampDuration:_.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():J.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(he.renderer.domElement),this.output=new ft}resize(){he.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),I.update(),he.update(),this.output.update()}loop(){this.running&&(this.render(),O.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,O.current&&(cancelAnimationFrame(O.current),O.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),I.dispose(),he.renderer){const _=he.renderer.domElement;_&&_.parentNode&&_.parentNode.removeChild(_),he.renderer.dispose()}}catch{}}}const vt=U.current;vt.style.position=vt.style.position||"relative",vt.style.overflow=vt.style.overflow||"hidden";const Be=new xt({$wrapper:vt,autoDemo:M,autoSpeed:E,autoIntensity:T,takeoverDuration:b,autoResumeDelay:v,autoRampDuration:w});P.current=Be,(()=>{if(!P.current)return;const L=P.current.output?.simulation;if(!L)return;const _=L.options.resolution;Object.assign(L.options,{mouse_force:a,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:h,resolution:m,isBounce:p}),m!==_&&L.resize()})(),Be.start();const Ye=new IntersectionObserver(L=>{const _=L[0],H=_.isIntersecting&&_.intersectionRatio>0;J.current=H,P.current&&(H&&!document.hidden?P.current.start():P.current.pause())},{threshold:[0,.01,.1]});Ye.observe(vt),F.current=Ye;const it=new ResizeObserver(()=>{P.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return it.observe(vt),G.current=it,()=>{if(O.current&&cancelAnimationFrame(O.current),G.current)try{G.current.disconnect()}catch{}if(F.current)try{F.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[h,e,f,p,i,c,l,a,m,s,x,M,E,T,b,v,w]),xe.useEffect(()=>{const C=P.current;if(!C)return;const k=C.output?.simulation;if(!k)return;const $=k.options.resolution;Object.assign(k.options,{mouse_force:a,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:c,dt:f,BFECC:h,resolution:m,isBounce:p}),C.autoDriver&&(C.autoDriver.enabled=M,C.autoDriver.speed=E,C.autoDriver.resumeDelay=v,C.autoDriver.rampDurationMs=w*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=T,C.autoDriver.mouse.takeoverDuration=b)),m!==$&&k.resize()},[a,e,i,s,l,c,f,h,m,p,M,E,T,b,v,w]),N.jsx("div",{ref:U,className:`w-full h-full relative overflow-hidden pointer-events-none touch-none ${y||""}`,style:g})}const nA=()=>{const a=Ct.c(2);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e={width:"100%",height:"100vh",position:"fixed",inset:"0",zIndex:"-10",background:"#000000"},a[0]=e):e=a[0];let i;return a[1]===Symbol.for("react.memo_cache_sentinel")?(i=N.jsx("div",{style:e,children:N.jsx(tA,{colors:["#5227FF","#27acff","#b8e4ff"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),a[1]=i):i=a[1],i},iA=a=>{const e=Ct.c(6),{children:i}=a;let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=N.jsx(aA,{}),e[0]=s):s=e[0];let l;e[1]!==i?(l=N.jsx("main",{className:"",children:i}),e[1]=i,e[2]=l):l=e[2];let c;e[3]===Symbol.for("react.memo_cache_sentinel")?(c=N.jsx(oA,{}),e[3]=c):c=e[3];let f;return e[4]!==l?(f=N.jsxs("div",{className:"min-h-screen flex flex-col",children:[s,l,c]}),e[4]=l,e[5]=f):f=e[5],f};function Gi(){const a=Ct.c(2),e=xe.useRef(null);let i;a[0]===Symbol.for("react.memo_cache_sentinel")?(i=c=>{const f=e.current,h=f.getBoundingClientRect(),m=c.clientX-h.left,p=c.clientY-h.top;f.style.setProperty("--mouse-x",`${m}px`),f.style.setProperty("--mouse-y",`${p}px`)},a[0]=i):i=a[0];const s=i;let l;return a[1]===Symbol.for("react.memo_cache_sentinel")?(l={cardRef:e,handleMouseMove:s,handleLeave:()=>{const f=e.current;f.style.setProperty("--mouse-x","-9999px"),f.style.setProperty("--mouse-y","-9999px")}},a[1]=l):l=a[1],l}function aA(){const a=Ct.c(20),[e,i]=xe.useState(!1),{cardRef:s,handleMouseMove:l,handleLeave:c}=Gi();let f;a[0]===Symbol.for("react.memo_cache_sentinel")?(f=[{to:"/",label:"Beranda"},{to:"/tentang-kami",label:"Tentang Kami"},{to:"/artikel",label:"Artikel"},{to:"/portfolio",label:"Portfolio"},{to:"/modul",label:"Modul"}],a[0]=f):f=a[0];const h=f;let m,p;a[1]===Symbol.for("react.memo_cache_sentinel")?(m=N.jsx("div",{className:"nav-light rounded-full"}),p=N.jsx("div",{className:"font-bold text-2xl",children:"Himikom"}),a[1]=m,a[2]=p):(m=a[1],p=a[2]);let x;a[3]===Symbol.for("react.memo_cache_sentinel")?(x=N.jsx("nav",{children:N.jsx("ul",{className:"hidden md:flex gap-8 text-sm",children:h.map(rA)})}),a[3]=x):x=a[3];let g;a[4]!==e?(g=()=>i(!e),a[4]=e,a[5]=g):g=a[5];let y,M,E;a[6]===Symbol.for("react.memo_cache_sentinel")?(y=N.jsx("span",{className:"w-6 h-0.5 bg-white"}),M=N.jsx("span",{className:"w-6 h-0.5 bg-white"}),E=N.jsx("span",{className:"w-6 h-0.5 bg-white"}),a[6]=y,a[7]=M,a[8]=E):(y=a[6],M=a[7],E=a[8]);let T;a[9]!==g?(T=N.jsxs("div",{className:`\r
        w-full px-6 py-3 flex items-center justify-between`,children:[m,p,x,N.jsxs("button",{onClick:g,className:"md:hidden flex flex-col gap-1.5",children:[y,M,E]})]}),a[9]=g,a[10]=T):T=a[10];const b=`fixed top-20 left-1/2 -translate-x-1/2 
        w-[90%] rounded-2xl p-6 z-102 transition-all duration-300 nav
        ${e?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`;let v;a[11]===Symbol.for("react.memo_cache_sentinel")?(v=N.jsx("ul",{className:`\r
        flex flex-col gap-4 text-center text-lg \r
        `,children:h.map((P,G)=>N.jsx("li",{children:N.jsx(zi,{to:P.to,className:"hover:text-white/80 transition",onClick:()=>i(!1),children:P.label})},G))}),a[11]=v):v=a[11];let w;a[12]!==b?(w=N.jsx("nav",{className:b,children:v}),a[12]=b,a[13]=w):w=a[13];let U;return a[14]!==s||a[15]!==c||a[16]!==l||a[17]!==w||a[18]!==T?(U=N.jsxs("header",{ref:s,onMouseMove:l,onMouseLeave:c,className:"nav fixed z-101 top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] rounded-full",children:[T,w]}),a[14]=s,a[15]=c,a[16]=l,a[17]=w,a[18]=T,a[19]=U):U=a[19],U}function rA(a,e){return N.jsx("li",{children:N.jsx(zi,{to:a.to,className:"hover:text-white/80 transition cursor-pointer",children:a.label})},e)}const sA=[{to:"/arsip-dokumen",label:"Arsip Dokumen"},{to:"/panduan-organisasi",label:"Panduan Organisasi"},{to:"/kontak",label:"Kontak & Kerja Sama"}];function oA(){const a=Ct.c(10),{cardRef:e,handleMouseMove:i,handleLeave:s}=Gi();let l;a[0]===Symbol.for("react.memo_cache_sentinel")?(l=N.jsx("div",{className:"footer-light"}),a[0]=l):l=a[0];let c;a[1]===Symbol.for("react.memo_cache_sentinel")?(c=N.jsx("nav",{children:N.jsx("ul",{className:"flex flex-col md:flex-row gap-4 md:gap-8 text-sm",children:sA.map(lA)})}),a[1]=c):c=a[1];let f;a[2]===Symbol.for("react.memo_cache_sentinel")?(f=N.jsx(zi,{children:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",children:N.jsxs("g",{fill:"none",children:[N.jsx("path",{d:"m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),N.jsx("path",{fill:"#fff",d:"M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m4.5-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"})]})})}),a[2]=f):f=a[2];let h;a[3]===Symbol.for("react.memo_cache_sentinel")?(h=N.jsx(zi,{children:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",children:N.jsx("path",{fill:"#fff",d:"m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"})})}),a[3]=h):h=a[3];let m;a[4]===Symbol.for("react.memo_cache_sentinel")?(m=N.jsxs("div",{className:"flex gap-4",children:[f,h,N.jsx(zi,{children:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",children:N.jsx("path",{fill:"#fff",d:"M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"})})})]}),a[4]=m):m=a[4];let p;a[5]===Symbol.for("react.memo_cache_sentinel")?(p=N.jsxs("p",{className:"text-xs",children:["© ",new Date().getFullYear()," Himikom. All rights reserved."]}),a[5]=p):p=a[5];let x;return a[6]!==e||a[7]!==s||a[8]!==i?(x=N.jsxs("footer",{ref:e,onMouseMove:i,onMouseLeave:s,className:`w-full mt-20 py-10 flex flex-col items-center justify-center gap-6\r
      mx-auto text-center footer`,children:[l,c,m,p]}),a[6]=e,a[7]=s,a[8]=i,a[9]=x):x=a[9],x}function lA(a){return N.jsx("li",{children:N.jsx(zi,{to:a.to,className:"hover:text-white/80 transition",children:a.label})},a.to)}function Bi(a){const e=Ct.c(16);let i,s,l,c,f;e[0]!==a?({to:f,variant:l,children:i,className:c,...s}=a,e[0]=a,e[1]=i,e[2]=s,e[3]=l,e[4]=c,e[5]=f):(i=e[1],s=e[2],l=e[3],c=e[4],f=e[5]);const h=l===void 0?"primary":l,m=c===void 0?"":c,{cardRef:p,handleMouseMove:x,handleLeave:g}=Gi();let y;e[6]===Symbol.for("react.memo_cache_sentinel")?(y={primary:"bg-blue-600 md:bg-blue-600/50 text-white hover:bg-blue-700 shadow-md hover:scale-[1.04] duration-200",glass:"nav text-white border border-white/30 hover:bg-white/10 hover:scale-[1.04] duration-200"},e[6]=y):y=e[6];const E=`btn px-8 py-3 rounded-full text-sm font-semibold transition active:scale-[0.97] text-center ${y[h]} ${m}`;let T;e[7]===Symbol.for("react.memo_cache_sentinel")?(T=N.jsx("div",{className:"btn-light"}),e[7]=T):T=e[7];let b;return e[8]!==p||e[9]!==i||e[10]!==g||e[11]!==x||e[12]!==s||e[13]!==E||e[14]!==f?(b=N.jsxs(zi,{ref:p,onMouseMove:x,onMouseLeave:g,to:f,className:E,...s,children:[T,i]}),e[8]=p,e[9]=i,e[10]=g,e[11]=x,e[12]=s,e[13]=E,e[14]=f,e[15]=b):b=e[15],b}const Sa=a=>{const e=Ct.c(8),{title:i,subtitle:s,customClass:l}=a,c=`
      ${l}
      max-w-3xl
      animate-fade-in-up
    `;let f;e[0]!==i?(f=N.jsx("h2",{className:`\r
        text-4xl sm:text-5xl \r
        font-bold \r
        mb-4\r
      `,children:i}),e[0]=i,e[1]=f):f=e[1];let h;e[2]!==s?(h=s&&N.jsx("p",{className:`\r
          text-lg \r
        `,children:s}),e[2]=s,e[3]=h):h=e[3];let m;return e[4]!==c||e[5]!==f||e[6]!==h?(m=N.jsxs("div",{className:c,children:[f,h]}),e[4]=c,e[5]=f,e[6]=h,e[7]=m):m=e[7],m},cA=a=>{const e=Ct.c(16),{imageUrl:i,title:s,subTitle:l}=a,{cardRef:c,handleMouseMove:f,handleLeave:h}=Gi();let m;e[0]===Symbol.for("react.memo_cache_sentinel")?(m=N.jsx("div",{className:"glass-light"}),e[0]=m):m=e[0];const p=i||"https://via.placeholder.com/400x300?text=HIMIKOM",x=s||"Gambar Program";let g;e[1]!==p||e[2]!==x?(g=N.jsx("div",{className:`\r
        w-full \r
        overflow-hidden \r
        mb-4 \r
        shadow-inner\r
      `,children:N.jsx("img",{src:p,alt:x,className:"w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"})}),e[1]=p,e[2]=x,e[3]=g):g=e[3];const y=s||"Judul Program";let M;e[4]!==y?(M=N.jsx("h3",{className:`\r
        text-2xl font-bold \r
        mb-2\r
      `,children:y}),e[4]=y,e[5]=M):M=e[5];const E=l||"Sub-Judul Program";let T;e[6]!==E?(T=N.jsx("h3",{className:`\r
        text-lg font-bold \r
        mb-2\r
      `,children:E}),e[6]=E,e[7]=T):T=e[7];let b;e[8]===Symbol.for("react.memo_cache_sentinel")?(b=N.jsx("div",{className:"mt-2 w-full flex justify-end",children:N.jsxs(Bi,{className:"flex items-center gap-2",children:["Visit",N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 24 24",children:N.jsxs("g",{fill:"none",children:[N.jsx("path",{d:"m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),N.jsx("path",{fill:"#fff",d:"M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m4.5-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"})]})})]})}),e[8]=b):b=e[8];let v;return e[9]!==c||e[10]!==h||e[11]!==f||e[12]!==g||e[13]!==M||e[14]!==T?(v=N.jsxs("div",{ref:c,onMouseMove:f,onMouseLeave:h,className:`\r
    glass\r
      p-4 \r
      flex flex-col \r
      h-full \r
      transition-all duration-300 \r
      hover:shadow-2xl hover:-translate-y-1\r
      rounded-3xl\r
    `,children:[m,g,M,T,b]}),e[9]=c,e[10]=h,e[11]=f,e[12]=g,e[13]=M,e[14]=T,e[15]=v):v=e[15],v},uA=a=>{const e=Ct.c(16),{imageUrl:i,title:s,description:l}=a,{cardRef:c,handleMouseMove:f,handleLeave:h}=Gi();let m;e[0]===Symbol.for("react.memo_cache_sentinel")?(m=N.jsx("span",{className:"glass-light"}),e[0]=m):m=e[0];const p=i||"https://via.placeholder.com/400x300?text=HIMIKOM",x=s||"Program Image";let g;e[1]!==p||e[2]!==x?(g=N.jsx("div",{className:"w-full aspect-4/3 overflow-hidden rounded-sub mb-4 shadow-inner relative",children:N.jsx("img",{src:p,alt:x,className:"w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"})}),e[1]=p,e[2]=x,e[3]=g):g=e[3];const y=s||"Judul Program";let M;e[4]!==y?(M=N.jsx("h3",{className:"text-xl font-bold mb-2",children:y}),e[4]=y,e[5]=M):M=e[5];const E=l||"Deskripsi singkat program...";let T;e[6]!==E?(T=N.jsx("p",{className:"mb-4 grow",children:E}),e[6]=E,e[7]=T):T=e[7];let b;e[8]===Symbol.for("react.memo_cache_sentinel")?(b=N.jsx("div",{className:"mt-2 w-full flex justify-end",children:N.jsx(Bi,{children:"More"})}),e[8]=b):b=e[8];let v;return e[9]!==c||e[10]!==h||e[11]!==f||e[12]!==g||e[13]!==M||e[14]!==T?(v=N.jsxs("div",{ref:c,onMouseMove:f,onMouseLeave:h,className:`\r
        glass\r
        relative overflow-hidden\r
        p-4 flex flex-col h-full\r
        transition-all duration-300 \r
        hover:shadow-2xl hover:-translate-y-1\r
        rounded-3xl\r
      `,children:[m,g,M,T,b]}),e[9]=c,e[10]=h,e[11]=f,e[12]=g,e[13]=M,e[14]=T,e[15]=v):v=e[15],v},fA=a=>a?new Date(a).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}):"Tanggal tidak diketahui",dA=a=>{const e=Ct.c(31),{slug:i,imageUrl:s,title:l,excerpt:c,author:f,date:h}=a,{cardRef:m,handleMouseMove:p,handleLeave:x}=Gi();let g;e[0]===Symbol.for("react.memo_cache_sentinel")?(g=N.jsx("div",{className:"glass-light"}),e[0]=g):g=e[0];const y=s||"https://via.placeholder.com/400x225?text=HIMIKOM",M=l||"Gambar Artikel";let E;e[1]!==y||e[2]!==M?(E=N.jsx("div",{className:"w-full md:w-[40%] aspect-video rounded-2xl overflow-hidden rounded-sub mb-4 shadow-inner",children:N.jsx("img",{src:y,alt:M,className:"w-full h-full object-cover transition-transform duration-300"})}),e[1]=y,e[2]=M,e[3]=E):E=e[3];const T=l||"Judul Artikel";let b;e[4]!==T?(b=N.jsx("h3",{className:"text-xl md:text-sm font-bold mb-2",children:T}),e[4]=T,e[5]=b):b=e[5];const v=f||"Tim HIMIKOM";let w;e[6]!==v?(w=N.jsxs("span",{children:["Oleh ",v]}),e[6]=v,e[7]=w):w=e[7];let U;e[8]===Symbol.for("react.memo_cache_sentinel")?(U=N.jsx("span",{className:"mx-2",children:"•"}),e[8]=U):U=e[8];let P;e[9]!==h?(P=fA(h),e[9]=h,e[10]=P):P=e[10];let G;e[11]!==P?(G=N.jsx("span",{children:P}),e[11]=P,e[12]=G):G=e[12];let O;e[13]!==G||e[14]!==w?(O=N.jsxs("div",{className:"text-sm mb-3",children:[w,U,G]}),e[13]=G,e[14]=w,e[15]=O):O=e[15];const F=c||"Cuplikan singkat artikel akan muncul di sini...";let J;e[16]!==F?(J=N.jsx("p",{className:"text-gray-200 grow",children:F}),e[16]=F,e[17]=J):J=e[17];const D=`/artikel/${i}`;let C;e[18]!==D?(C=N.jsx("div",{className:"w-full flex justify-end",children:N.jsx(Bi,{to:D,className:`\r
            inline-block px-6 py-2 rounded-full \r
            text-sm font-semibold \r
            transition-all duration-300 hover:opacity-80\r
          `,children:"Baca Selengkapnya"})}),e[18]=D,e[19]=C):C=e[19];let k;e[20]!==O||e[21]!==J||e[22]!==C||e[23]!==b?(k=N.jsxs("div",{className:"flex flex-col",children:[b,O,J,C]}),e[20]=O,e[21]=J,e[22]=C,e[23]=b,e[24]=k):k=e[24];let $;return e[25]!==m||e[26]!==x||e[27]!==p||e[28]!==k||e[29]!==E?($=N.jsxs("div",{ref:m,onMouseMove:p,onMouseLeave:x,className:`\r
      glass \r
      p-4\r
      flex flex-col md:flex-row\r
      h-full\r
      transition-all duration-300 \r
      hover:shadow-2xl hover:-translate-y-1\r
      gap-6\r
    `,children:[g,E,k]}),e[25]=m,e[26]=x,e[27]=p,e[28]=k,e[29]=E,e[30]=$):$=e[30],$},hA=a=>{const e=Ct.c(20),{link:i,imageUrl:s,title:l,author:c}=a,{cardRef:f,handleMouseMove:h,handleLeave:m}=Gi();let p;e[0]===Symbol.for("react.memo_cache_sentinel")?(p=N.jsx("div",{className:"glass-light"}),e[0]=p):p=e[0];const x=s||"https://via.placeholder.com/400x225?text=Karya",g=l||"Gambar Portofolio";let y;e[1]!==x||e[2]!==g?(y=N.jsx("div",{className:"w-full aspect-square overflow-hidden rounded-sub mb-4 shadow-inner rounded-2xl",children:N.jsx("img",{src:x,alt:g,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"})}),e[1]=x,e[2]=g,e[3]=y):y=e[3];const M=l||"Judul Portofolio";let E;e[4]!==M?(E=N.jsx("h3",{className:"text-xl font-bold mb-1",children:M}),e[4]=M,e[5]=E):E=e[5];const T=c||"Mahasiswa HIMIKOM";let b;e[6]!==T?(b=N.jsx("p",{className:"text-sm text-gray-400 mb-3",children:T}),e[6]=T,e[7]=b):b=e[7];let v;e[8]!==E||e[9]!==b?(v=N.jsxs("div",{className:"flex flex-col items-start w-full",children:[E,b]}),e[8]=E,e[9]=b,e[10]=v):v=e[10];let w;e[11]!==i?(w=N.jsx("div",{className:"w-full",children:N.jsx(Bi,{target:"_blank",to:i,className:`inline-block px-6 py-2 rounded-full \r
            text-sm font-semibold \r
            transition-all duration-300 hover:opacity-80 w-full text-center`,children:"Visit"})}),e[11]=i,e[12]=w):w=e[12];let U;return e[13]!==f||e[14]!==m||e[15]!==h||e[16]!==w||e[17]!==y||e[18]!==v?(U=N.jsxs("div",{ref:f,onMouseMove:h,onMouseLeave:m,className:`\r
      glass\r
      p-6\r
      flex flex-col \r
      h-full \r
      transition-all duration-300 \r
      hover:shadow-2xl hover:-translate-y-1\r
      justify-center items-center\r
      gap-4\r
    `,children:[p,y,v,w]}),e[13]=f,e[14]=m,e[15]=h,e[16]=w,e[17]=y,e[18]=v,e[19]=U):U=e[19],U},cv=a=>{const e=Ct.c(12),{title:i,desc:s,children:l}=a,{cardRef:c,handleMouseMove:f,handleLeave:h}=Gi();let m;e[0]===Symbol.for("react.memo_cache_sentinel")?(m=N.jsx("div",{className:"glass-light"}),e[0]=m):m=e[0];let p;e[1]!==i?(p=N.jsx("h2",{className:"text-3xl font-bold mb-4",children:i}),e[1]=i,e[2]=p):p=e[2];let x;e[3]!==s?(x=N.jsx("p",{className:"text-lg",children:s}),e[3]=s,e[4]=x):x=e[4];let g;return e[5]!==c||e[6]!==l||e[7]!==h||e[8]!==f||e[9]!==p||e[10]!==x?(g=N.jsxs("div",{ref:c,onMouseMove:f,onMouseLeave:h,className:"glass p-8 animate-fade-in-up delay-200",children:[m,p,x,l]}),e[5]=c,e[6]=l,e[7]=h,e[8]=f,e[9]=p,e[10]=x,e[11]=g):g=e[11],g},Yo=a=>{const e=Ct.c(12),{title:i,desc:s,icon:l}=a,{cardRef:c,handleMouseMove:f,handleLeave:h}=Gi();let m;e[0]===Symbol.for("react.memo_cache_sentinel")?(m=N.jsx("div",{className:"glass-light"}),e[0]=m):m=e[0];let p;e[1]!==i?(p=N.jsx("h3",{className:"text-2xl font-bold mb-2",children:i}),e[1]=i,e[2]=p):p=e[2];let x;e[3]!==s?(x=N.jsx("p",{children:s}),e[3]=s,e[4]=x):x=e[4];let g;return e[5]!==c||e[6]!==h||e[7]!==f||e[8]!==l||e[9]!==p||e[10]!==x?(g=N.jsxs("div",{ref:c,onMouseMove:f,onMouseLeave:h,className:"glass p-6 text-center animate-fade-in-up delay-200",children:[m,l,p,x]}),e[5]=c,e[6]=h,e[7]=f,e[8]=l,e[9]=p,e[10]=x,e[11]=g):g=e[11],g},jc=a=>{const e=Ct.c(16);let i,s,l,c;e[0]!==a?({label:s,id:i,type:c,...l}=a,e[0]=a,e[1]=i,e[2]=s,e[3]=l,e[4]=c):(i=e[1],s=e[2],l=e[3],c=e[4]);const f=c===void 0?"text":c;let h;e[5]===Symbol.for("react.memo_cache_sentinel")?(h=N.jsx("div",{className:"input-light"}),e[5]=h):h=e[5];let m;e[6]!==i||e[7]!==s?(m=s&&N.jsx("label",{htmlFor:i,className:"block mb-2 font-medium",children:s}),e[6]=i,e[7]=s,e[8]=m):m=e[8];let p;e[9]!==i||e[10]!==l||e[11]!==f?(p=N.jsx("input",{type:f,id:i,className:`
    w-full p-3 rounded-lg
    input 
    focus:outline-none focus:ring-2 focus:ring-primary-light
    transition-all duration-200
  `,...l}),e[9]=i,e[10]=l,e[11]=f,e[12]=p):p=e[12];let x;return e[13]!==m||e[14]!==p?(x=N.jsxs("div",{className:"w-full",children:[h,m,p]}),e[13]=m,e[14]=p,e[15]=x):x=e[15],x},pA=a=>{const e=Ct.c(16);let i,s,l,c;e[0]!==a?({label:s,id:i,type:c,...l}=a,e[0]=a,e[1]=i,e[2]=s,e[3]=l,e[4]=c):(i=e[1],s=e[2],l=e[3],c=e[4]);const f=c===void 0?"text":c;let h;e[5]===Symbol.for("react.memo_cache_sentinel")?(h=N.jsx("div",{className:"input-light"}),e[5]=h):h=e[5];let m;e[6]!==i||e[7]!==s?(m=s&&N.jsx("label",{htmlFor:i,className:"block mb-2 font-medium",children:s}),e[6]=i,e[7]=s,e[8]=m):m=e[8];let p;e[9]!==i||e[10]!==l||e[11]!==f?(p=N.jsx("textarea",{rows:5,type:f,id:i,className:`
    w-full p-3 rounded-xl
    input 
    focus:outline-none focus:ring-2 focus:ring-primary-light
    transition-all duration-200
  `,...l}),e[9]=i,e[10]=l,e[11]=f,e[12]=p):p=e[12];let x;return e[13]!==m||e[14]!==p?(x=N.jsxs("div",{className:"w-full",children:[h,m,p]}),e[13]=m,e[14]=p,e[15]=x):x=e[15],x},mA=a=>{const e=Ct.c(12),{position:i,name:s,children:l}=a,{cardRef:c,handleMouseMove:f,handleLeave:h}=Gi();let m;e[0]===Symbol.for("react.memo_cache_sentinel")?(m=N.jsx("div",{className:"glass-light"}),e[0]=m):m=e[0];let p;e[1]!==i?(p=N.jsx("h2",{className:"text-2xl font-bold",children:i}),e[1]=i,e[2]=p):p=e[2];let x;e[3]!==s?(x=N.jsx("p",{className:"text-lg",children:s}),e[3]=s,e[4]=x):x=e[4];let g;return e[5]!==c||e[6]!==l||e[7]!==h||e[8]!==f||e[9]!==p||e[10]!==x?(g=N.jsxs("div",{ref:c,onMouseMove:f,onMouseLeave:h,className:"glass p-8 animate-fade-in-up delay-200 flex flex-col gap-4",children:[m,p,x,l]}),e[5]=c,e[6]=l,e[7]=h,e[8]=f,e[9]=p,e[10]=x,e[11]=g):g=e[11],g},xA=()=>{const a=Ct.c(7);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx("div",{className:"absolute top-[10%] left-[5%] w-32 h-32 glass rotate-12 opacity-50",children:N.jsx("div",{className:"glass-light"})}),a[0]=e):e=a[0];let i;a[1]===Symbol.for("react.memo_cache_sentinel")?(i=N.jsx("div",{className:"absolute bottom-[20%] right-[10%] w-40 h-40 glass -rotate-6 opacity-60",children:N.jsx("div",{className:"glass-light"})}),a[1]=i):i=a[1];let s;a[2]===Symbol.for("react.memo_cache_sentinel")?(s=N.jsx("div",{className:"absolute top-[30%] right-[25%] w-24 h-24 glass rotate-45 opacity-40",children:N.jsx("div",{className:"glass-light"})}),a[2]=s):s=a[2];let l;a[3]===Symbol.for("react.memo_cache_sentinel")?(l=N.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e,i,s,N.jsx("div",{className:"absolute bottom-[5%] left-[20%] w-28 h-28 glass -rotate-12 opacity-30",children:N.jsx("div",{className:"glass-light"})})]}),a[3]=l):l=a[3];let c,f;a[4]===Symbol.for("react.memo_cache_sentinel")?(c=N.jsx("h1",{className:`\r
          text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none\r
          mb-6\r
          animate-fade-in-up\r
        `,children:"Jelajahi Dunia Informatika Bersama Kami"}),f=N.jsx("p",{className:`\r
          text-lg sm:text-xl\r
          mb-10 max-w-2xl mx-auto\r
          animate-fade-in-up delay-200\r
        `,children:"HIMIKOM adalah wadah bagi mahasiswa Komputer untuk berinovasi, berkolaborasi, dan mengembangkan potensi di era digital."}),a[4]=c,a[5]=f):(c=a[4],f=a[5]);let h;return a[6]===Symbol.for("react.memo_cache_sentinel")?(h=N.jsxs("section",{className:"relative h-screen flex items-center justify-center overflow-hidden",children:[l,N.jsxs("div",{className:"relative z-10 text-center max-w-4xl px-4",children:[c,f,N.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-400",children:[N.jsx(Bi,{to:"/tentang-kami",children:"Tentang Kami"}),N.jsx(Bi,{to:"/artikel",variant:"glass",children:"Baca Artikel Kami"})]})]})]}),a[6]=h):h=a[6],h},n_="gMDSj4vd7fM",gA=`https://www.youtube.com/watch?v=${n_}`,vA=`https://img.youtube.com/vi/${n_}/maxresdefault.jpg`,_A=()=>{const a=Ct.c(3);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx("img",{src:vA,alt:"Thumbnail Video Profil HIMIKOM",className:"w-full h-auto object-full"}),a[0]=e):e=a[0];let i;a[1]===Symbol.for("react.memo_cache_sentinel")?(i=N.jsx("div",{className:"md:w-1/2 animate-fade-in-up delay-200",children:N.jsxs("a",{href:gA,target:"_blank",rel:"noopener noreferrer",className:`\r
            rounded-2xl\r
              block relative \r
              rounded-main \r
              overflow-hidden \r
              group \r
              shadow-glass-light dark:shadow-glass-dark\r
              transition-all duration-300\r
              transform hover:shadow-2xl hover:-translate-y-1\r
            `,"aria-label":"Tonton video profil di YouTube",children:[e,N.jsx("div",{className:`\r
              absolute inset-0 \r
              flex items-center justify-center \r
              bg-black/40 \r
              opacity-0 group-hover:opacity-100 \r
              transition-opacity duration-300\r
            `,children:N.jsx("svg",{className:"w-16 h-16 text-white/90 transform group-hover:scale-110 transition-transform",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:N.jsx("path",{fill:"#fff",d:"M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"})})})]})}),a[1]=i):i=a[1];let s;return a[2]===Symbol.for("react.memo_cache_sentinel")?(s=N.jsx("section",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20",children:N.jsxs("div",{className:`\r
        flex flex-col md:flex-row   \r
        md:items-center\r
        gap-12 lg:gap-16\r
        max-w-6xl mx-auto\r
      `,children:[i,N.jsxs("div",{className:"md:w-1/2 animate-fade-in-up",children:[" ",N.jsx(Sa,{title:"Profil"}),N.jsx("p",{className:`\r
            text-lg\r
            text-left\r
            max-w-none\r
          `,children:"Sobat Coding... stalking organisasi kami di channel Youtube ini ya, agar kalian bisa bergabung menjadi mahasiswa keren era digital AI nih.."})]})]})}),a[2]=s):s=a[2],s},yA=[{id:1,title:"HIMIKOM DevClass",description:"Kelas intensif mingguan untuk belajar pengembangan web modern (React, Node.js) dari dasar hingga mahir bersama mentor.",imageUrl:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8fHwxNzMyMzEyNDY5&ixlib=rb-4.0.3&q=80&w=400",link:"/portfolio/devclass"},{id:2,title:"UI/UX Workshop",description:"Pelatihan desain antarmuka dan pengalaman pengguna, berfokus pada studi kasus nyata dan penggunaan alat desain seperti Figma.",imageUrl:"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8N3x8dWklMjB1eCUyMGRlc2lnbnxlbnwwfHx8fDE3MzIzMTI1MjA&ixlib=rb-4.0.3&q=80&w=400",link:"/portfolio/workshop-uiux"},{id:3,title:"E-Sports Tournament",description:"Kompetisi e-sports tahunan untuk menjalin silaturahmi antar mahasiswa dan mengasah kemampuan kompetitif.",imageUrl:"https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8Mnx8ZSUyMHNwb3J0c3xlbnwwfHx8fDE3MzIzMTI1NDU&ixlib=rb-4.0.3&q=80&w=400",link:"/portfolio/esports"}],SA=()=>{const a=Ct.c(2);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx("div",{className:"w-full fles justify-start",children:N.jsx(Sa,{title:"Program Kami"})}),a[0]=e):e=a[0];let i;return a[1]===Symbol.for("react.memo_cache_sentinel")?(i=N.jsxs("section",{className:"container flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-6",children:[e,N.jsx("div",{className:`\r
        grid \r
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 \r
        gap-8\r
        max-w-6xl mx-auto\r
      `,children:yA.map(bA)})]}),a[1]=i):i=a[1],i};function bA(a){return N.jsx("div",{className:"animate-fade-in-up",children:N.jsx(uA,{title:a.title,description:a.description,imageUrl:a.imageUrl,link:a.link})},a.id)}const MA="/himikom.unan/assets/SnapInsta.to_549236315_17888673666346018_7845114067133122512_n-1K3c2fls.jpg",EA="/himikom.unan/assets/SnapInsta.to_551185456_17889326340346018_1737473372670203826_n-CwbH3V0K.jpg",TA="/himikom.unan/assets/SnapInsta.to_551348745_17889326349346018_2692914504738200842_n-ltDuOOVw.jpg",AA=Object.assign({"/src/assets/images/Performance/SnapInsta.to_549236315_17888673666346018_7845114067133122512_n.jpg":MA,"/src/assets/images/Performance/SnapInsta.to_551185456_17889326340346018_1737473372670203826_n.jpg":EA,"/src/assets/images/Performance/SnapInsta.to_551348745_17889326349346018_2692914504738200842_n.jpg":TA}),RA=a=>AA[`/src/assets/images/Performance/${a}`],CA=[{id:1,title:"Afif Kisnadhya Putra",subTitle:"Google Student Ambasador",imageUrl:"SnapInsta.to_549236315_17888673666346018_7845114067133122512_n.jpg",link:"/portfolio/devclass"},{id:2,title:"Muhammad Nabil M.",subTitle:"Nusantara Creative Competation",imageUrl:"SnapInsta.to_551185456_17889326340346018_1737473372670203826_n.jpg",link:"/portfolio/workshop-uiux"},{id:3,title:"Afif Kisnadhya Putra",subTitle:"Nusantara Creative Competation",imageUrl:"SnapInsta.to_551348745_17889326349346018_2692914504738200842_n.jpg",link:"/portfolio/esports"}],wA=()=>{const a=Ct.c(2);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx("div",{className:"w-full fles justify-start",children:N.jsx(Sa,{title:"Prestasi Mahasiswa"})}),a[0]=e):e=a[0];let i;return a[1]===Symbol.for("react.memo_cache_sentinel")?(i=N.jsxs("section",{className:"container flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-6",children:[e,N.jsx("div",{className:`\r
        grid \r
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 \r
        gap-8\r
        max-w-6xl mx-auto\r
      `,children:CA.map(DA)})]}),a[1]=i):i=a[1],i};function DA(a){return N.jsx("div",{className:"animate-fade-in-up",children:N.jsx(cA,{title:a.title,subTitle:a.subTitle,description:a.description,imageUrl:RA(a.imageUrl),link:a.link})},a.id)}const UA=()=>{const a=Ct.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsxs(N.Fragment,{children:[N.jsx(xA,{}),N.jsx(_A,{}),N.jsx(SA,{}),N.jsx(wA,{})]}),a[0]=e):e=a[0],e},LA=()=>{const a=Ct.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx("svg",{className:"w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),a[0]=e):e=a[0],e},NA=()=>{const a=Ct.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsxs("svg",{className:"w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M12 21v-1m-4.243-4.243l.707.707"}),N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18a6 6 0 110-12 6 6 0 010 12z"})]}),a[0]=e):e=a[0],e},OA=()=>{const a=Ct.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsxs("svg",{className:"w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-2.37M17 20H7m10 0v-2c0-1.657-1.343-3-3-3H7m10 0v-2a3 3 0 00-3-3H7m0 10v2a3 3 0 003 3h3m-3-3v-2c0-1.657 1.343-3 3-3h3m-3 3c0-1.657 1.343-3 3-3h3v-2a3 3 0 00-3-3H7M7 4v2a3 3 0 003 3h3v2a3 3 0 003 3h3"}),N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14a3 3 0 100-6 3 3 0 000 6z"}),N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14a3 3 0 100-6 3 3 0 000 6zM12 8a3 3 0 100-6 3 3 0 000 6zM12 20a3 3 0 100-6 3 3 0 000 6zM12 8a3 3 0 100-6 3 3 0 000 6z"})]}),a[0]=e):e=a[0],e},PA=()=>{const a=Ct.c(11);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],a[0]=e):e=a[0],xe.useEffect(zA,e);let i;a[1]===Symbol.for("react.memo_cache_sentinel")?(i=N.jsxs("section",{className:`\r
        py-24 sm:py-32 \r
        text-center \r
        relative overflow-hidden\r
        container mx-auto px-4 sm:px-6 lg:px-8\r
      `,children:[N.jsxs("h1",{className:`\r
          text-5xl sm:text-6xl md:text-7xl font-extrabold \r
          mb-6\r
        `,children:["Mengenal HIMIKOM ",N.jsx("br",{}),"Lebih Dekat"]}),N.jsx("p",{className:`\r
          text-xl sm:text-2xl \r
          max-w-3xl mx-auto\r
        `,children:"Kami adalah denyut inovasi, kreativitas, dan kolaborasi di jantung Himpunan Mahasiswa Informatika."})]}),a[1]=i):i=a[1];let s;a[2]===Symbol.for("react.memo_cache_sentinel")?(s=N.jsx(cv,{title:"Visi Kami",desc:`Menjadi himpunan mahasiswa informatika yang unggul, inovatif, dan\r
        berdampak, serta mampu menciptakan ekosistem belajar yang mendukung\r
        perkembangan teknologi dan karakter.`}),a[2]=s):s=a[2];let l;a[3]===Symbol.for("react.memo_cache_sentinel")?(l=N.jsx("section",{className:"py-16 sm:py-20 container mx-auto px-4 sm:px-6 lg:px-8",children:N.jsxs("div",{className:"max-w-5xl mx-auto grid md:grid-cols-2 gap-8",children:[s,N.jsx(cv,{title:"Misi Kami",children:N.jsxs("ul",{className:`\r
              list-disc list-outside pl-5 \r
              space-y-2 \r
              text-lg\r
            `,children:[N.jsx("li",{children:N.jsx("p",{children:"Menyelenggarakan pelatihan dan workshop untuk meningkatkan keahlian teknis."})}),N.jsx("li",{children:N.jsx("p",{children:"Mendorong budaya riset, inovasi, dan partisipasi dalam kompetisi."})}),N.jsx("li",{children:N.jsx("p",{children:"Membangun jaringan yang kuat antara mahasiswa, alumni, dan industri."})}),N.jsx("li",{children:N.jsx("p",{children:"Melaksanakan pengabdian masyarakat berbasis teknologi informasi."})})]})})]})}),a[3]=l):l=a[3];let c;a[4]===Symbol.for("react.memo_cache_sentinel")?(c=N.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12",children:[N.jsx("h2",{className:`\r
              text-4xl sm:text-5xl \r
              font-bold \r
              mb-4\r
            `,children:"Pilar Utama Kami"}),N.jsx("p",{className:`\r
              text-lg \r
            `,children:"Tiga fokus utama yang menggerakkan organisasi kami."})]}),a[4]=c):c=a[4];let f;a[5]===Symbol.for("react.memo_cache_sentinel")?(f=N.jsx(Yo,{icon:N.jsx(LA,{}),title:"Edukasi & Workshop",desc:`Menyediakan platform belajar melalui DevClass, workshop, dan\r
                modul praktis untuk mengasah *hard skill*.`}),a[5]=f):f=a[5];let h;a[6]===Symbol.for("react.memo_cache_sentinel")?(h=N.jsx(Yo,{icon:N.jsx(NA,{}),title:"Inovasi & Kompetisi",desc:`Mendorong anggota untuk berani berinovasi, berkarya, dan\r
                berkompetisi di berbagai ajang teknologi.`}),a[6]=h):h=a[6];let m;a[7]===Symbol.for("react.memo_cache_sentinel")?(m=N.jsx("section",{className:`\r
        py-16 sm:py-20 \r
        mt-16\r
      `,children:N.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[c,N.jsxs("div",{className:"max-w-6xl mx-auto grid md:grid-cols-3 gap-8",children:[f,h,N.jsx(Yo,{icon:N.jsx(OA,{}),title:"Komunitas & Jaringan",desc:`Membangun relasi yang kuat antar anggota, alumni, dan\r
                profesional industri untuk membuka peluang karir.`})]})]})}),a[7]=m):m=a[7];let p,x;a[8]===Symbol.for("react.memo_cache_sentinel")?(p=N.jsx("h2",{className:`\r
          text-4xl sm:text-5xl \r
          font-bold \r
          mb-4\r
        `,children:"Jadilah Bagian dari Kami"}),x=N.jsx("p",{className:`\r
          text-lg \r
          mb-10 max-w-2xl mx-auto\r
        `,children:"Lihat karya-karya yang telah kami hasilkan atau baca wawasan terbaru dari komunitas kami."}),a[8]=p,a[9]=x):(p=a[8],x=a[9]);let g;return a[10]===Symbol.for("react.memo_cache_sentinel")?(g=N.jsxs("div",{className:"animate-fade-in-up",children:[i,l,m,N.jsxs("section",{className:`\r
        py-24 \r
        text-center \r
        container mx-auto \r
        px-4 sm:px-6 lg:px-8\r
      `,children:[p,x,N.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-4",children:[N.jsx(Bi,{to:"/portfolio",variant:"primary",children:"Lihat Portfolio"}),N.jsx(Bi,{to:"/artikel",variant:"glass",children:"Baca Artikel Kami"})]})]})]}),a[10]=g):g=a[10],g};function zA(){window.scrollTo(0,0)}const IA=[{id:1,slug:"mengenal-react-hooks",title:"Mengenal React Hooks: useState dan useEffect",excerpt:"Pelajari dasar-dasar React Hooks, dua hook paling penting (useState dan useEffect), dan bagaimana mereka mengubah cara kita...",imageUrl:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",author:"Divisi Web Dev",date:"2025-11-10",content:`
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
    `}],FA=[{id:1,slug:"Aditya Tri Susanto",title:"Aditya Tri Susanto",author:"Frontend Developer",imageUrl:"WhatsApp Image 2025-11-15 at 05.30.05_e9ea319b.jpg",tags:["Web App","React","Node.js"],link:"https://aditya-fend.vercel.app",content:"<p>Detail konten untuk Sistem Informasi Perpustakaan...</p>"}],BA=[{id:1,slug:"Ketua Himpunan",position:"Ketua Himpunan",name:"Amrully Arun Hadi",contacts:[{type:"email",value:"budi.santoso@himikom.org"},{type:"whatsapp",value:"6281234567890"}]}],HA=()=>{const a=Ct.c(2);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx(Sa,{title:"Artikel & Wawasan",subtitle:"Kumpulan tulisan, wawasan, dan tutorial terbaru dari anggota dan alumni HIMIKOM."}),a[0]=e):e=a[0];let i;return a[1]===Symbol.for("react.memo_cache_sentinel")?(i=N.jsxs("section",{className:"container flex flex-col gap-6 mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-16",children:[e,N.jsx("div",{className:`\r
        flex flex-col\r
        gap-8\r
        max-w-6xl mx-auto\r
      `,children:IA.map(VA)})]}),a[1]=i):i=a[1],i};function VA(a){return N.jsx("div",{className:"animate-fade-in-up",children:N.jsx(dA,{slug:a.slug,title:a.title,excerpt:a.excerpt,imageUrl:a.imageUrl,author:a.author,date:a.date})},a.id)}const GA="/himikom.unan/assets/WhatsApp%20Image%202025-11-15%20at%2005.30.05_e9ea319b-CtFszQVr.jpg",kA=Object.assign({"/src/assets/images/Portfolio/WhatsApp Image 2025-11-15 at 05.30.05_e9ea319b.jpg":GA}),XA=a=>kA[`/src/assets/images/Portfolio/${a}`],jA=()=>{const a=Ct.c(2);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx(Sa,{title:"Portfolio Mahasiswa",subtitle:"Inilah kumpulan Portfolio mahasiswa HIMIKOM."}),a[0]=e):e=a[0];let i;return a[1]===Symbol.for("react.memo_cache_sentinel")?(i=N.jsx("section",{children:N.jsxs("div",{className:"container mt-10 mx-auto px-16 sm:px-16 lg:px-8 py-16 flex flex-col gap-8",children:[e,N.jsx("div",{className:`\r
        grid \r
        grid-cols-1 \r
        sm:grid-cols-2\r
        md:grid-cols-2\r
        lg:grid-cols-3\r
        gap-8\r
        max-w-6xl mx-auto\r
      `,children:FA.map(WA)})]})}),a[1]=i):i=a[1],i};function WA(a){return N.jsx("div",{className:"animate-fade-in-up",children:N.jsx(hA,{slug:a.slug,title:a.title,author:a.author,imageUrl:XA(a.imageUrl),tags:a.tags,link:a.link})},a.id)}const qA=()=>{const a=Ct.c(5);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx(Sa,{title:"Kontak"}),a[0]=e):e=a[0];let i;a[1]===Symbol.for("react.memo_cache_sentinel")?(i=N.jsxs("section",{className:"flex flex-col gap-8",children:[e,N.jsx("div",{className:"flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3",children:BA.map(KA)})]}),a[1]=i):i=a[1];let s,l;a[2]===Symbol.for("react.memo_cache_sentinel")?(s=N.jsx("section",{children:N.jsxs("div",{className:"flex flex-col gap-8",children:[N.jsx(Sa,{title:"Kerja Sama"}),N.jsx("p",{children:"Kerangka kerja kemitraan kami dirancang untuk kesetaraan dan transparansi. Semua pemesanan yang masuk akan mengikuti Kebijakan Pembatalan dan Pengembalian Dana yang telah disepakati bersama. Mitra berkewajiban untuk memperbarui ketersediaan (inventaris) secara akurat untuk memastikan pemesanan valid. Rincian komisi/biaya layanan dan jadwal pembayaran akan diuraikan lengkap dalam kontrak kerjasama. Tujuan kami adalah memastikan proses pemesanan yang adil dan dapat dipertanggungjawabkan bagi Mitra maupun pelanggan."})]})}),l=N.jsx(Sa,{title:"Hubungi tim kami untuk diskusi lebih lanjut"}),a[2]=s,a[3]=l):(s=a[2],l=a[3]);let c;return a[4]===Symbol.for("react.memo_cache_sentinel")?(c=N.jsxs("div",{className:"container mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col gap-18",children:[i,s,N.jsxs("section",{children:[l,N.jsxs("form",{action:"",className:"flex flex-col gap-6 mt-12 resize-none",children:[N.jsx(jc,{label:"Nama Lengkap"}),N.jsx(jc,{label:"Nama Instansi / Perusahaan"}),N.jsx(jc,{label:"E-mail"}),N.jsx(jc,{label:"No. HP / WhatsApp"}),N.jsx(pA,{label:"Pesan"}),N.jsx(Bi,{children:"Kirim"})]})]})]}),a[4]=c):c=a[4],c};function YA(a,e){return N.jsxs(zi,{className:"text-md text-white/80",children:[" ",`${a.type}: ${a.value}`]},e)}function KA(a){return N.jsx("div",{className:"animate-fade-in-up",children:N.jsx(mA,{slug:a.slug,name:a.name,position:a.position,children:N.jsx("div",{children:a.contacts.map(YA)})})},a.id)}const ZA=()=>{const a=Ct.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx("svg",{className:"w-6 h-6 text-primary-light dark:text-primary-dark",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),a[0]=e):e=a[0],e},QA=()=>{const a=Ct.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx("svg",{className:"w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),a[0]=e):e=a[0],e},JA=()=>{const a=Ct.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx("svg",{className:"w-12 h-12 text-primary-light dark:text-primary-dark mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M5 11v2m14-2v2"})}),a[0]=e):e=a[0],e},$A=()=>{const a=Ct.c(8);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],a[0]=e):e=a[0],xe.useEffect(eR,e);let i;a[1]===Symbol.for("react.memo_cache_sentinel")?(i=[{name:"Anggaran Dasar (AD)",fileUrl:"/docs/AD_HIMIKOM.pdf"},{name:"Anggaran Rumah Tangga (ART)",fileUrl:"/docs/ART_HIMIKOM.pdf"},{name:"Garis Besar Haluan Organisasi (GBHO)",fileUrl:"/docs/GBHO_HIMIKOM.pdf"}],a[1]=i):i=a[1];const s=i;let l;a[2]===Symbol.for("react.memo_cache_sentinel")?(l=N.jsx(Sa,{title:"Panduan Organisasi",subtitle:"Sumber daya terpusat untuk semua dokumen, peraturan, dan pedoman resmi HIMIKOM."}),a[2]=l):l=a[2];let c;a[3]===Symbol.for("react.memo_cache_sentinel")?(c=N.jsx("h2",{className:"text-3xl font-bold text-text-light dark:text-text-dark mb-6 text-center",children:"Dokumen Resmi"}),a[3]=c):c=a[3];let f;a[4]===Symbol.for("react.memo_cache_sentinel")?(f=N.jsxs("section",{className:"my-16",children:[c,N.jsx("div",{className:"liquid-glass p-6 md:p-8",children:N.jsx("ul",{className:"space-y-4",children:s.map(tR)})})]}),a[4]=f):f=a[4];let h;a[5]===Symbol.for("react.memo_cache_sentinel")?(h=N.jsx("h2",{className:"text-3xl font-bold text-text-light dark:text-text-dark mb-6 text-center",children:"Pedoman & Struktur"}),a[5]=h):h=a[5];let m;a[6]===Symbol.for("react.memo_cache_sentinel")?(m=N.jsx(Yo,{icon:N.jsx(QA,{}),title:"Struktur Organisasi",desc:`Memahami alur koordinasi dan pembagian tugas antar divisi. Struktur kami \r
                dirancang untuk efisiensi dan kolaborasi.`}),a[6]=m):m=a[6];let p;return a[7]===Symbol.for("react.memo_cache_sentinel")?(p=N.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up mt-12",children:[l,N.jsxs("div",{className:"max-w-5xl mx-auto",children:[f,N.jsxs("section",{className:"flex flex-col gap-10",children:[h,N.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[m,N.jsx(Yo,{icon:N.jsx(JA,{}),title:"Peraturan Umum",desc:`Pedoman perilaku, etika, dan tata tertib yang berlaku bagi seluruh \r
                anggota aktif Himpunan Mahasiswa Informatika.`})]})]})]})]}),a[7]=p):p=a[7],p};function eR(){window.scrollTo(0,0)}function tR(a){return N.jsxs("li",{className:`\r
                    flex flex-col sm:flex-row \r
                    items-center justify-between \r
                    p-4 rounded-sub nav rounded-xl\r
                    bg-glass-border-light/50 dark:bg-glass-border-dark/50\r
                  `,children:[N.jsx("span",{className:"text-lg font-semibold text-text-light dark:text-text-dark mb-2 sm:mb-0",children:a.name}),N.jsxs(Bi,{href:a.fileUrl,download:!0,target:"_blank",rel:"noopener noreferrer",className:`\r
                      flex items-center gap-2 \r
                      px-4 py-2 rounded-full \r
                      text-sm font-semibold \r
                      bg-primary-light dark:bg-primary-dark \r
                      text-white \r
                      transition-all duration-300\r
                      hover:opacity-80\r
                    `,children:[N.jsx(ZA,{}),"Unduh PDF"]})]},a.name)}const nR=()=>{const a=Ct.c(7);let e;a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx(nA,{}),a[0]=e):e=a[0];let i;a[1]===Symbol.for("react.memo_cache_sentinel")?(i=N.jsx(Lr,{path:"/",element:N.jsx(UA,{})}),a[1]=i):i=a[1];let s;a[2]===Symbol.for("react.memo_cache_sentinel")?(s=N.jsx(Lr,{path:"/tentang-kami",element:N.jsx(PA,{})}),a[2]=s):s=a[2];let l;a[3]===Symbol.for("react.memo_cache_sentinel")?(l=N.jsx(Lr,{path:"/artikel",element:N.jsx(HA,{})}),a[3]=l):l=a[3];let c;a[4]===Symbol.for("react.memo_cache_sentinel")?(c=N.jsx(Lr,{path:"/portfolio",element:N.jsx(jA,{})}),a[4]=c):c=a[4];let f;a[5]===Symbol.for("react.memo_cache_sentinel")?(f=N.jsx(Lr,{path:"/kontak",element:N.jsx(qA,{})}),a[5]=f):f=a[5];let h;return a[6]===Symbol.for("react.memo_cache_sentinel")?(h=N.jsxs(L1,{basename:"/himikom.unan",children:[e,N.jsx(iA,{children:N.jsxs(c1,{children:[i,s,l,c,f,N.jsx(Lr,{path:"/panduan-organisasi",element:N.jsx($A,{})})]})})]}),a[6]=h):h=a[6],h};function iR(){const a=Ct.c(1);let e;return a[0]===Symbol.for("react.memo_cache_sentinel")?(e=N.jsx(nR,{}),a[0]=e):e=a[0],e}xS.createRoot(document.getElementById("root")).render(N.jsx(xe.StrictMode,{children:N.jsx(iR,{})}));
