(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var md={exports:{}},Lo={};var kx;function iy(){if(kx)return Lo;kx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var Xx;function ay(){return Xx||(Xx=1,md.exports=iy()),md.exports}var Se=ay(),xd={exports:{}},st={};var Wx;function ry(){if(Wx)return st;Wx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function _(O,re,be){this.props=O,this.context=re,this.refs=b,this.updater=be||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=_.prototype;function U(O,re,be){this.props=O,this.context=re,this.refs=b,this.updater=be||E}var P=U.prototype=new L;P.constructor=U,T(P,_.prototype),P.isPureReactComponent=!0;var V=Array.isArray;function N(){}var F={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function w(O,re,be){var Ae=be.ref;return{$$typeof:s,type:O,key:re,ref:Ae!==void 0?Ae:null,props:be}}function C(O,re){return w(O.type,re,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function te(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(be){return re[be]})}var ce=/\/+/g;function de(O,re){return typeof O=="object"&&O!==null&&O.key!=null?te(""+O.key):re.toString(36)}function pe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(re){O.status==="pending"&&(O.status="fulfilled",O.value=re)},function(re){O.status==="pending"&&(O.status="rejected",O.reason=re)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,re,be,Ae,Pe){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var ue=!1;if(O===null)ue=!0;else switch(ae){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(O.$$typeof){case s:case e:ue=!0;break;case x:return ue=O._init,z(ue(O._payload),re,be,Ae,Pe)}}if(ue)return Pe=Pe(O),ue=Ae===""?"."+de(O,0):Ae,V(Pe)?(be="",ue!=null&&(be=ue.replace(ce,"$&/")+"/"),z(Pe,re,be,"",function(qe){return qe})):Pe!=null&&(k(Pe)&&(Pe=C(Pe,be+(Pe.key==null||O&&O.key===Pe.key?"":(""+Pe.key).replace(ce,"$&/")+"/")+ue)),re.push(Pe)),1;ue=0;var Re=Ae===""?".":Ae+":";if(V(O))for(var Ve=0;Ve<O.length;Ve++)Ae=O[Ve],ae=Re+de(Ae,Ve),ue+=z(Ae,re,be,ae,Pe);else if(Ve=M(O),typeof Ve=="function")for(O=Ve.call(O),Ve=0;!(Ae=O.next()).done;)Ae=Ae.value,ae=Re+de(Ae,Ve++),ue+=z(Ae,re,be,ae,Pe);else if(ae==="object"){if(typeof O.then=="function")return z(pe(O),re,be,Ae,Pe);throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return ue}function Z(O,re,be){if(O==null)return O;var Ae=[],Pe=0;return z(O,Ae,"","",function(ae){return re.call(be,ae,Pe++)}),Ae}function Y(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(be){(O._status===0||O._status===-1)&&(O._status=1,O._result=be)},function(be){(O._status===0||O._status===-1)&&(O._status=2,O._result=be)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var _e=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ye={map:Z,forEach:function(O,re,be){Z(O,function(){re.apply(this,arguments)},be)},count:function(O){var re=0;return Z(O,function(){re++}),re},toArray:function(O){return Z(O,function(re){return re})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return st.Activity=g,st.Children=ye,st.Component=_,st.Fragment=i,st.Profiler=l,st.PureComponent=U,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(O){return F.H.useMemoCache(O)}},st.cache=function(O){return function(){return O.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(O,re,be){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ae=T({},O.props),Pe=O.key;if(re!=null)for(ae in re.key!==void 0&&(Pe=""+re.key),re)!ee.call(re,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&re.ref===void 0||(Ae[ae]=re[ae]);var ae=arguments.length-2;if(ae===1)Ae.children=be;else if(1<ae){for(var ue=Array(ae),Re=0;Re<ae;Re++)ue[Re]=arguments[Re+2];Ae.children=ue}return w(O.type,Pe,Ae)},st.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},st.createElement=function(O,re,be){var Ae,Pe={},ae=null;if(re!=null)for(Ae in re.key!==void 0&&(ae=""+re.key),re)ee.call(re,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Pe[Ae]=re[Ae]);var ue=arguments.length-2;if(ue===1)Pe.children=be;else if(1<ue){for(var Re=Array(ue),Ve=0;Ve<ue;Ve++)Re[Ve]=arguments[Ve+2];Pe.children=Re}if(O&&O.defaultProps)for(Ae in ue=O.defaultProps,ue)Pe[Ae]===void 0&&(Pe[Ae]=ue[Ae]);return w(O,ae,Pe)},st.createRef=function(){return{current:null}},st.forwardRef=function(O){return{$$typeof:h,render:O}},st.isValidElement=k,st.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:Y}},st.memo=function(O,re){return{$$typeof:p,type:O,compare:re===void 0?null:re}},st.startTransition=function(O){var re=F.T,be={};F.T=be;try{var Ae=O(),Pe=F.S;Pe!==null&&Pe(be,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(N,_e)}catch(ae){_e(ae)}finally{re!==null&&be.types!==null&&(re.types=be.types),F.T=re}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(O){return F.H.use(O)},st.useActionState=function(O,re,be){return F.H.useActionState(O,re,be)},st.useCallback=function(O,re){return F.H.useCallback(O,re)},st.useContext=function(O){return F.H.useContext(O)},st.useDebugValue=function(){},st.useDeferredValue=function(O,re){return F.H.useDeferredValue(O,re)},st.useEffect=function(O,re){return F.H.useEffect(O,re)},st.useEffectEvent=function(O){return F.H.useEffectEvent(O)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(O,re,be){return F.H.useImperativeHandle(O,re,be)},st.useInsertionEffect=function(O,re){return F.H.useInsertionEffect(O,re)},st.useLayoutEffect=function(O,re){return F.H.useLayoutEffect(O,re)},st.useMemo=function(O,re){return F.H.useMemo(O,re)},st.useOptimistic=function(O,re){return F.H.useOptimistic(O,re)},st.useReducer=function(O,re,be){return F.H.useReducer(O,re,be)},st.useRef=function(O){return F.H.useRef(O)},st.useState=function(O){return F.H.useState(O)},st.useSyncExternalStore=function(O,re,be){return F.H.useSyncExternalStore(O,re,be)},st.useTransition=function(){return F.H.useTransition()},st.version="19.2.0",st}var qx;function tu(){return qx||(qx=1,xd.exports=ry()),xd.exports}var me=tu(),gd={exports:{}},No={},vd={exports:{}},_d={};var Yx;function sy(){return Yx||(Yx=1,(function(s){function e(z,Z){var Y=z.length;z.push(Z);e:for(;0<Y;){var _e=Y-1>>>1,ye=z[_e];if(0<l(ye,Z))z[_e]=Z,z[Y]=ye,Y=_e;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Z=z[0],Y=z.pop();if(Y!==Z){z[0]=Y;e:for(var _e=0,ye=z.length,O=ye>>>1;_e<O;){var re=2*(_e+1)-1,be=z[re],Ae=re+1,Pe=z[Ae];if(0>l(be,Y))Ae<ye&&0>l(Pe,be)?(z[_e]=Pe,z[Ae]=Y,_e=Ae):(z[_e]=be,z[re]=Y,_e=re);else if(Ae<ye&&0>l(Pe,Y))z[_e]=Pe,z[Ae]=Y,_e=Ae;else break e}}return Z}function l(z,Z){var Y=z.sortIndex-Z.sortIndex;return Y!==0?Y:z.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,g=null,S=3,M=!1,E=!1,T=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function P(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=z)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function V(z){if(T=!1,P(z),!E)if(i(m)!==null)E=!0,N||(N=!0,te());else{var Z=i(p);Z!==null&&pe(V,Z.startTime-z)}}var N=!1,F=-1,ee=5,w=-1;function C(){return b?!0:!(s.unstable_now()-w<ee)}function k(){if(b=!1,N){var z=s.unstable_now();w=z;var Z=!0;try{e:{E=!1,T&&(T=!1,L(F),F=-1),M=!0;var Y=S;try{t:{for(P(z),g=i(m);g!==null&&!(g.expirationTime>z&&C());){var _e=g.callback;if(typeof _e=="function"){g.callback=null,S=g.priorityLevel;var ye=_e(g.expirationTime<=z);if(z=s.unstable_now(),typeof ye=="function"){g.callback=ye,P(z),Z=!0;break t}g===i(m)&&r(m),P(z)}else r(m);g=i(m)}if(g!==null)Z=!0;else{var O=i(p);O!==null&&pe(V,O.startTime-z),Z=!1}}break e}finally{g=null,S=Y,M=!1}Z=void 0}}finally{Z?te():N=!1}}}var te;if(typeof U=="function")te=function(){U(k)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,de=ce.port2;ce.port1.onmessage=k,te=function(){de.postMessage(null)}}else te=function(){_(k,0)};function pe(z,Z){F=_(function(){z(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(z){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var Y=S;S=Z;try{return z()}finally{S=Y}},s.unstable_requestPaint=function(){b=!0},s.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=S;S=z;try{return Z()}finally{S=Y}},s.unstable_scheduleCallback=function(z,Z,Y){var _e=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?_e+Y:_e):Y=_e,z){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Y+ye,z={id:x++,callback:Z,priorityLevel:z,startTime:Y,expirationTime:ye,sortIndex:-1},Y>_e?(z.sortIndex=Y,e(p,z),i(m)===null&&z===i(p)&&(T?(L(F),F=-1):T=!0,pe(V,Y-_e))):(z.sortIndex=ye,e(m,z),E||M||(E=!0,N||(N=!0,te()))),z},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(z){var Z=S;return function(){var Y=S;S=Z;try{return z.apply(this,arguments)}finally{S=Y}}}})(_d)),_d}var jx;function oy(){return jx||(jx=1,vd.exports=sy()),vd.exports}var Sd={exports:{}},Dn={};var Zx;function ly(){if(Zx)return Dn;Zx=1;var s=tu();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Dn.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.0",Dn}var Kx;function cy(){if(Kx)return Sd.exports;Kx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sd.exports=ly(),Sd.exports}var Qx;function uy(){if(Qx)return No;Qx=1;var s=oy(),e=tu(),i=cy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=f;break}if(A===o){y=!0,o=u,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,o=u;break}if(A===o){y=!0,o=f,a=u;break}A=A.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function de(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case b:return"StrictMode";case V:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:de(t.type)||"Memo";case ee:n=t._payload,t=t._init;try{return de(t(n))}catch{}}return null}var pe=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},_e=[],ye=-1;function O(t){return{current:t}}function re(t){0>ye||(t.current=_e[ye],_e[ye]=null,ye--)}function be(t,n){ye++,_e[ye]=t.current,t.current=n}var Ae=O(null),Pe=O(null),ae=O(null),ue=O(null);function Re(t,n){switch(be(ae,n),be(Pe,t),be(Ae,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?dx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=dx(n),t=hx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}re(Ae),be(Ae,t)}function Ve(){re(Ae),re(Pe),re(ae)}function qe(t){t.memoizedState!==null&&be(ue,t);var n=Ae.current,a=hx(n,t.type);n!==a&&(be(Pe,t),be(Ae,a))}function lt(t){Pe.current===t&&(re(Ae),re(Pe)),ue.current===t&&(re(ue),Co._currentValue=Y)}var Jt,ut;function Rt(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+ut}var H=!1;function ft(t,n){if(!t||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(oe){var ie=oe}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(oe){ie=oe}t.call(ge.prototype)}}else{try{throw Error()}catch(oe){ie=oe}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(oe){if(oe&&ie&&typeof oe.stack=="string")return[oe.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var B=y.split(`
`),J=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===J.length)for(o=B.length-1,u=J.length-1;1<=o&&0<=u&&B[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==J[u]){var he=`
`+B[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Rt(a):""}function xt(t,n){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==n&&n!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return Rt("Activity");default:return""}}function vt(t){try{var n="",a=null;do n+=xt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ie=Object.prototype.hasOwnProperty,It=s.unstable_scheduleCallback,je=s.unstable_cancelCallback,it=s.unstable_shouldYield,D=s.unstable_requestPaint,v=s.unstable_now,I=s.unstable_getCurrentPriorityLevel,K=s.unstable_ImmediatePriority,fe=s.unstable_UserBlockingPriority,ne=s.unstable_NormalPriority,ze=s.unstable_LowPriority,Ue=s.unstable_IdlePriority,Ze=s.log,We=s.unstable_setDisableYieldValue,Me=null,Te=null;function Ke(t){if(typeof Ze=="function"&&We(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Me,t)}catch{}}var Xe=Math.clz32?Math.clz32:G,Fe=Math.log,at=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Fe(t)/at|0)|0}var Le=256,we=262144,De=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Ee(o):(y&=A,y!==0?u=Ee(y):a||(a=A&~t,a!==0&&(u=Ee(a))))):(A=o&~f,A!==0?u=Ee(A):y!==0?u=Ee(y):a||(a=o&~t,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function rt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=De;return De<<=1,(De&62914560)===0&&(De=4194304),t}function wt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Yn(t,n,a,o,u,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=y&~a;0<a;){var he=31-Xe(a),ge=1<<he;A[he]=0,B[he]=-1;var ie=J[he];if(ie!==null)for(J[he]=null,he=0;he<ie.length;he++){var oe=ie[he];oe!==null&&(oe.lane&=-536870913)}a&=~ge}o!==0&&al(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function al(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Is(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Xe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Hs(t,n){var a=n&-n;return a=(a&42)!==0?1:gi(a),(a&(t.suspendedLanes|n))!==0?0:a}function gi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ar(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gs(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:zx(t.type))}function Vs(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var jn=Math.random().toString(36).slice(2),on="__reactFiber$"+jn,pn="__reactProps$"+jn,Hi="__reactContainer$"+jn,zr="__reactEvents$"+jn,lu="__reactListeners$"+jn,cu="__reactHandles$"+jn,rl="__reactResources$"+jn,rr="__reactMarker$"+jn;function ks(t){delete t[on],delete t[pn],delete t[zr],delete t[lu],delete t[cu]}function ba(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Sx(t);t!==null;){if(a=t[on])return a;t=Sx(t)}return n}t=a,a=t.parentNode}return null}function R(t){if(t=t[on]||t[Hi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function W(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function se(t){var n=t[rl];return n||(n=t[rl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $(t){t[rr]=!0}var j=new Set,Ce={};function Ne(t,n){Be(t,n),Be(t+"Capture",n)}function Be(t,n){for(Ce[t]=n,t=0;t<n.length;t++)j.add(n[t])}var Ge=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},nt={};function Qe(t){return Ie.call(nt,t)?!0:Ie.call(et,t)?!1:Ge.test(t)?nt[t]=!0:(et[t]=!0,!1)}function ht(t,n,a){if(Qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ct(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Dt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Mt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=zt(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function Et(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=zt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ma=/[\n"\\]/g;function Yt(t){return t.replace(Ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gi(t,n,a,o,u,f,y,A){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Mt(n)):t.value!==""+Mt(n)&&(t.value=""+Mt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,y,Mt(n)):a!=null?Sn(t,y,Mt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Mt(A):t.removeAttribute("name")}function jt(t,n,a,o,u,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(t);return}a=a!=null?""+Mt(a):"",n=n!=null?""+Mt(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Wt(t)}function Sn(t,n,a){n==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Mt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+Mt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Mt(a):""}function En(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(pe(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Mt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wt(t)}function Ci(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Vi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Vi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function up(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&cp(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&cp(t,f,n[f])}function uu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $v=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(t){return e_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var fu=null;function du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,Br=null;function fp(t){var n=R(t);if(n&&(t=n.stateNode)){var a=t[pn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Gi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[pn]||null;if(!u)throw Error(r(90));Gi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Et(o)}break e;case"textarea":yn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mn(t,!!a.multiple,n,!1)}}}var hu=!1;function dp(t,n,a){if(hu)return t(n,a);hu=!0;try{var o=t(n);return o}finally{if(hu=!1,(Fr!==null||Br!==null)&&(Yl(),Fr&&(n=Fr,t=Br,Br=Fr=null,fp(n),t)))for(n=0;n<t.length;n++)fp(t[n])}}function Xs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(Xi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{pu=!1}var Ea=null,mu=null,ol=null;function hp(){if(ol)return ol;var t,n=mu,a=n.length,o,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return ol=u.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function pp(){return!1}function Bn(t){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cl:pp,this.isPropagationStopped=pp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Bn(sr),qs=g({},sr,{view:0,detail:0}),t_=Bn(qs),xu,gu,Ys,fl=g({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(xu=t.screenX-Ys.screenX,gu=t.screenY-Ys.screenY):gu=xu=0,Ys=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:gu}}),mp=Bn(fl),n_=g({},fl,{dataTransfer:0}),i_=Bn(n_),a_=g({},qs,{relatedTarget:0}),vu=Bn(a_),r_=g({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),s_=Bn(r_),o_=g({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l_=Bn(o_),c_=g({},sr,{data:0}),xp=Bn(c_),u_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=d_[t])?!!n[t]:!1}function _u(){return h_}var p_=g({},qs,{key:function(t){if(t.key){var n=u_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),m_=Bn(p_),x_=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Bn(x_),g_=g({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),v_=Bn(g_),__=g({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),S_=Bn(__),y_=g({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),b_=Bn(y_),M_=g({},sr,{newState:0,oldState:0}),E_=Bn(M_),T_=[9,13,27,32],Su=Xi&&"CompositionEvent"in window,js=null;Xi&&"documentMode"in document&&(js=document.documentMode);var A_=Xi&&"TextEvent"in window&&!js,vp=Xi&&(!Su||js&&8<js&&11>=js),_p=" ",Sp=!1;function yp(t,n){switch(t){case"keyup":return T_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function R_(t,n){switch(t){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(Sp=!0,_p);case"textInput":return t=n.data,t===_p&&Sp?null:t;default:return null}}function C_(t,n){if(Ir)return t==="compositionend"||!Su&&yp(t,n)?(t=hp(),ol=mu=Ea=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vp&&n.locale!=="ko"?null:n.data;default:return null}}var w_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!w_[t.type]:n==="textarea"}function Ep(t,n,a,o){Fr?Br?Br.push(o):Br=[o]:Fr=o,n=ec(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Zs=null,Ks=null;function D_(t){sx(t,0)}function dl(t){var n=W(t);if(Et(n))return t}function Tp(t,n){if(t==="change")return n}var Ap=!1;if(Xi){var yu;if(Xi){var bu="oninput"in document;if(!bu){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),bu=typeof Rp.oninput=="function"}yu=bu}else yu=!1;Ap=yu&&(!document.documentMode||9<document.documentMode)}function Cp(){Zs&&(Zs.detachEvent("onpropertychange",wp),Ks=Zs=null)}function wp(t){if(t.propertyName==="value"&&dl(Ks)){var n=[];Ep(n,Ks,t,du(t)),dp(D_,n)}}function U_(t,n,a){t==="focusin"?(Cp(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",wp)):t==="focusout"&&Cp()}function L_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(Ks)}function N_(t,n){if(t==="click")return dl(n)}function O_(t,n){if(t==="input"||t==="change")return dl(n)}function P_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:P_;function Qs(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ie.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,n){var a=Dp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dp(a)}}function Lp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Lp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Np(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_n(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_n(t.document)}return n}function Mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var z_=Xi&&"documentMode"in document&&11>=document.documentMode,Hr=null,Eu=null,Js=null,Tu=!1;function Op(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||Hr==null||Hr!==_n(o)||(o=Hr,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Js&&Qs(Js,o)||(Js=o,o=ec(Eu,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Hr)))}function or(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Gr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},Au={},Pp={};Xi&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function lr(t){if(Au[t])return Au[t];if(!Gr[t])return t;var n=Gr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pp)return Au[t]=n[a];return t}var zp=lr("animationend"),Fp=lr("animationiteration"),Bp=lr("animationstart"),F_=lr("transitionrun"),B_=lr("transitionstart"),I_=lr("transitioncancel"),Ip=lr("transitionend"),Hp=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function vi(t,n){Hp.set(t,n),Ne(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},si=[],Vr=0,Cu=0;function pl(){for(var t=Vr,n=Cu=Vr=0;n<t;){var a=si[n];si[n++]=null;var o=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Gp(a,u,f)}}function ml(t,n,a,o){si[Vr++]=t,si[Vr++]=n,si[Vr++]=a,si[Vr++]=o,Cu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function wu(t,n,a,o){return ml(t,n,a,o),xl(t)}function cr(t,n){return ml(t,null,null,n),xl(t)}function Gp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Xe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function xl(t){if(50<yo)throw yo=0,If=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var kr={};function H_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new H_(t,n,a,o)}function Du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,o,u,f){var y=0;if(o=t,typeof t=="function")Du(t)&&(y=1);else if(typeof t=="string")y=WS(t,a,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Kn(31,a,n,u),t.elementType=w,t.lanes=f,t;case T:return ur(a.children,u,f,n);case b:y=8,u|=24;break;case _:return t=Kn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case V:return t=Kn(13,a,n,u),t.elementType=V,t.lanes=f,t;case N:return t=Kn(19,a,n,u),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:y=10;break e;case L:y=9;break e;case P:y=11;break e;case F:y=14;break e;case ee:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Kn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ur(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function Uu(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function kp(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Lu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Xp=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=Xp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:vt(n)},Xp.set(t,n),n)}return{value:t,source:n,stack:vt(n)}}var Xr=[],Wr=0,vl=null,$s=0,li=[],ci=0,Ta=null,wi=1,Di="";function qi(t,n){Xr[Wr++]=$s,Xr[Wr++]=vl,vl=t,$s=n}function Wp(t,n,a){li[ci++]=wi,li[ci++]=Di,li[ci++]=Ta,Ta=t;var o=wi;t=Di;var u=32-Xe(o)-1;o&=~(1<<u),a+=1;var f=32-Xe(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,wi=1<<32-Xe(n)+u|a<<u|o,Di=f+t}else wi=1<<f|a<<u|o,Di=t}function Nu(t){t.return!==null&&(qi(t,1),Wp(t,1,0))}function Ou(t){for(;t===vl;)vl=Xr[--Wr],Xr[Wr]=null,$s=Xr[--Wr],Xr[Wr]=null;for(;t===Ta;)Ta=li[--ci],li[ci]=null,Di=li[--ci],li[ci]=null,wi=li[--ci],li[ci]=null}function qp(t,n){li[ci++]=wi,li[ci++]=Di,li[ci++]=Ta,wi=n.id,Di=n.overflow,Ta=t}var Tn=null,Zt=null,Tt=!1,Aa=null,ui=!1,Pu=Error(r(519));function Ra(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(oi(n,t)),Pu}function Yp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[pn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)St(Mo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),jt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||ux(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ra(t,!0)}function jp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Tn=Tn.return}}function qr(t){if(t!==Tn)return!1;if(!Tt)return jp(t),Tt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ed(t.type,t.memoizedProps)),a=!a),a&&Zt&&Ra(t),jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=_x(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=_x(t)}else n===27?(n=Zt,Ga(t.type)?(t=rd,rd=null,Zt=t):Zt=n):Zt=Tn?di(t.stateNode.nextSibling):null;return!0}function fr(){Zt=Tn=null,Tt=!1}function zu(){var t=Aa;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Aa=null),t}function eo(t){Aa===null?Aa=[t]:Aa.push(t)}var Fu=O(null),dr=null,Yi=null;function Ca(t,n,a){be(Fu,n._currentValue),n._currentValue=a}function ji(t){t._currentValue=Fu.current,re(Fu)}function Bu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Iu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Bu(f.return,a,t),o||(y=null);break e}f=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Bu(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Yr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var A=u.type;Zn(u.pendingProps.value,y.value)||(t!==null?t.push(A):t=[A])}}else if(u===ue.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&Iu(n,t,a,o),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){dr=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Zp(dr,t)}function Sl(t,n){return dr===null&&hr(t),Zp(t,n)}function Zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(r(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return a}var G_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},V_=s.unstable_scheduleCallback,k_=s.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new G_,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&V_(k_,function(){t.controller.abort()})}var no=null,Gu=0,jr=0,Zr=null;function X_(t,n){if(no===null){var a=no=[];Gu=0,jr=Wf(),Zr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gu++,n.then(Kp,Kp),n}function Kp(){if(--Gu===0&&no!==null){Zr!==null&&(Zr.status="fulfilled");var t=no;no=null,jr=0,Zr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function W_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Qp=z.S;z.S=function(t,n){Om=v(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&X_(t,n),Qp!==null&&Qp(t,n)};var pr=O(null);function Vu(){var t=pr.current;return t!==null?t:qt.pooledCache}function yl(t,n){n===null?be(pr,pr.current):be(pr,n.pool)}function Jp(){var t=Vu();return t===null?null:{parent:ln._currentValue,pool:t}}var Kr=Error(r(460)),ku=Error(r(474)),bl=Error(r(542)),Ml={then:function(){}};function $p(t){return t=t.status,t==="fulfilled"||t==="rejected"}function e0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,n0(t),t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,n0(t),t}throw xr=n,Kr}}function mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xr=a,Kr):a}}var xr=null;function t0(){if(xr===null)throw Error(r(459));var t=xr;return xr=null,t}function n0(t){if(t===Kr||t===bl)throw Error(r(483))}var Qr=null,io=0;function El(t){var n=io;return io+=1,Qr===null&&(Qr=[]),e0(Qr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function i0(t){function n(q,X){if(t){var Q=q.deletions;Q===null?(q.deletions=[X],q.flags|=16):Q.push(X)}}function a(q,X){if(!t)return null;for(;X!==null;)n(q,X),X=X.sibling;return null}function o(q){for(var X=new Map;q!==null;)q.key!==null?X.set(q.key,q):X.set(q.index,q),q=q.sibling;return X}function u(q,X){return q=Wi(q,X),q.index=0,q.sibling=null,q}function f(q,X,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<X?(q.flags|=67108866,X):Q):(q.flags|=67108866,X)):(q.flags|=1048576,X)}function y(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,X,Q,xe){return X===null||X.tag!==6?(X=Uu(Q,q.mode,xe),X.return=q,X):(X=u(X,Q),X.return=q,X)}function B(q,X,Q,xe){var Je=Q.type;return Je===T?he(q,X,Q.props.children,xe,Q.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ee&&mr(Je)===X.type)?(X=u(X,Q.props),ao(X,Q),X.return=q,X):(X=gl(Q.type,Q.key,Q.props,null,q.mode,xe),ao(X,Q),X.return=q,X)}function J(q,X,Q,xe){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Lu(Q,q.mode,xe),X.return=q,X):(X=u(X,Q.children||[]),X.return=q,X)}function he(q,X,Q,xe,Je){return X===null||X.tag!==7?(X=ur(Q,q.mode,xe,Je),X.return=q,X):(X=u(X,Q),X.return=q,X)}function ge(q,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Uu(""+X,q.mode,Q),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return Q=gl(X.type,X.key,X.props,null,q.mode,Q),ao(Q,X),Q.return=q,Q;case E:return X=Lu(X,q.mode,Q),X.return=q,X;case ee:return X=mr(X),ge(q,X,Q)}if(pe(X)||te(X))return X=ur(X,q.mode,Q,null),X.return=q,X;if(typeof X.then=="function")return ge(q,El(X),Q);if(X.$$typeof===U)return ge(q,Sl(q,X),Q);Tl(q,X)}return null}function ie(q,X,Q,xe){var Je=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Je!==null?null:A(q,X,""+Q,xe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Je?B(q,X,Q,xe):null;case E:return Q.key===Je?J(q,X,Q,xe):null;case ee:return Q=mr(Q),ie(q,X,Q,xe)}if(pe(Q)||te(Q))return Je!==null?null:he(q,X,Q,xe,null);if(typeof Q.then=="function")return ie(q,X,El(Q),xe);if(Q.$$typeof===U)return ie(q,X,Sl(q,Q),xe);Tl(q,Q)}return null}function oe(q,X,Q,xe,Je){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return q=q.get(Q)||null,A(X,q,""+xe,Je);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case M:return q=q.get(xe.key===null?Q:xe.key)||null,B(X,q,xe,Je);case E:return q=q.get(xe.key===null?Q:xe.key)||null,J(X,q,xe,Je);case ee:return xe=mr(xe),oe(q,X,Q,xe,Je)}if(pe(xe)||te(xe))return q=q.get(Q)||null,he(X,q,xe,Je,null);if(typeof xe.then=="function")return oe(q,X,Q,El(xe),Je);if(xe.$$typeof===U)return oe(q,X,Q,Sl(X,xe),Je);Tl(X,xe)}return null}function ke(q,X,Q,xe){for(var Je=null,Ut=null,Ye=X,pt=X=0,bt=null;Ye!==null&&pt<Q.length;pt++){Ye.index>pt?(bt=Ye,Ye=null):bt=Ye.sibling;var Lt=ie(q,Ye,Q[pt],xe);if(Lt===null){Ye===null&&(Ye=bt);break}t&&Ye&&Lt.alternate===null&&n(q,Ye),X=f(Lt,X,pt),Ut===null?Je=Lt:Ut.sibling=Lt,Ut=Lt,Ye=bt}if(pt===Q.length)return a(q,Ye),Tt&&qi(q,pt),Je;if(Ye===null){for(;pt<Q.length;pt++)Ye=ge(q,Q[pt],xe),Ye!==null&&(X=f(Ye,X,pt),Ut===null?Je=Ye:Ut.sibling=Ye,Ut=Ye);return Tt&&qi(q,pt),Je}for(Ye=o(Ye);pt<Q.length;pt++)bt=oe(Ye,q,pt,Q[pt],xe),bt!==null&&(t&&bt.alternate!==null&&Ye.delete(bt.key===null?pt:bt.key),X=f(bt,X,pt),Ut===null?Je=bt:Ut.sibling=bt,Ut=bt);return t&&Ye.forEach(function(qa){return n(q,qa)}),Tt&&qi(q,pt),Je}function tt(q,X,Q,xe){if(Q==null)throw Error(r(151));for(var Je=null,Ut=null,Ye=X,pt=X=0,bt=null,Lt=Q.next();Ye!==null&&!Lt.done;pt++,Lt=Q.next()){Ye.index>pt?(bt=Ye,Ye=null):bt=Ye.sibling;var qa=ie(q,Ye,Lt.value,xe);if(qa===null){Ye===null&&(Ye=bt);break}t&&Ye&&qa.alternate===null&&n(q,Ye),X=f(qa,X,pt),Ut===null?Je=qa:Ut.sibling=qa,Ut=qa,Ye=bt}if(Lt.done)return a(q,Ye),Tt&&qi(q,pt),Je;if(Ye===null){for(;!Lt.done;pt++,Lt=Q.next())Lt=ge(q,Lt.value,xe),Lt!==null&&(X=f(Lt,X,pt),Ut===null?Je=Lt:Ut.sibling=Lt,Ut=Lt);return Tt&&qi(q,pt),Je}for(Ye=o(Ye);!Lt.done;pt++,Lt=Q.next())Lt=oe(Ye,q,pt,Lt.value,xe),Lt!==null&&(t&&Lt.alternate!==null&&Ye.delete(Lt.key===null?pt:Lt.key),X=f(Lt,X,pt),Ut===null?Je=Lt:Ut.sibling=Lt,Ut=Lt);return t&&Ye.forEach(function(ny){return n(q,ny)}),Tt&&qi(q,pt),Je}function kt(q,X,Q,xe){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:e:{for(var Je=Q.key;X!==null;){if(X.key===Je){if(Je=Q.type,Je===T){if(X.tag===7){a(q,X.sibling),xe=u(X,Q.props.children),xe.return=q,q=xe;break e}}else if(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ee&&mr(Je)===X.type){a(q,X.sibling),xe=u(X,Q.props),ao(xe,Q),xe.return=q,q=xe;break e}a(q,X);break}else n(q,X);X=X.sibling}Q.type===T?(xe=ur(Q.props.children,q.mode,xe,Q.key),xe.return=q,q=xe):(xe=gl(Q.type,Q.key,Q.props,null,q.mode,xe),ao(xe,Q),xe.return=q,q=xe)}return y(q);case E:e:{for(Je=Q.key;X!==null;){if(X.key===Je)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(q,X.sibling),xe=u(X,Q.children||[]),xe.return=q,q=xe;break e}else{a(q,X);break}else n(q,X);X=X.sibling}xe=Lu(Q,q.mode,xe),xe.return=q,q=xe}return y(q);case ee:return Q=mr(Q),kt(q,X,Q,xe)}if(pe(Q))return ke(q,X,Q,xe);if(te(Q)){if(Je=te(Q),typeof Je!="function")throw Error(r(150));return Q=Je.call(Q),tt(q,X,Q,xe)}if(typeof Q.then=="function")return kt(q,X,El(Q),xe);if(Q.$$typeof===U)return kt(q,X,Sl(q,Q),xe);Tl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(q,X.sibling),xe=u(X,Q),xe.return=q,q=xe):(a(q,X),xe=Uu(Q,q.mode,xe),xe.return=q,q=xe),y(q)):a(q,X)}return function(q,X,Q,xe){try{io=0;var Je=kt(q,X,Q,xe);return Qr=null,Je}catch(Ye){if(Ye===Kr||Ye===bl)throw Ye;var Ut=Kn(29,Ye,null,q.mode);return Ut.lanes=xe,Ut.return=q,Ut}finally{}}}var gr=i0(!0),a0=i0(!1),wa=!1;function Xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=xl(t),Gp(t,null,a),n}return ml(t,o,n,a),xl(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Is(t,a)}}function qu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Yu=!1;function so(){if(Yu){var t=Zr;if(t!==null)throw t}}function oo(t,n,a,o){Yu=!1;var u=t.updateQueue;wa=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,J=B.next;B.next=null,y===null?f=J:y.next=J,y=B;var he=t.alternate;he!==null&&(he=he.updateQueue,A=he.lastBaseUpdate,A!==y&&(A===null?he.firstBaseUpdate=J:A.next=J,he.lastBaseUpdate=B))}if(f!==null){var ge=u.baseState;y=0,he=J=B=null,A=f;do{var ie=A.lane&-536870913,oe=ie!==A.lane;if(oe?(yt&ie)===ie:(o&ie)===ie){ie!==0&&ie===jr&&(Yu=!0),he!==null&&(he=he.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ke=t,tt=A;ie=n;var kt=a;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){ge=ke.call(kt,ge,ie);break e}ge=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,ie=typeof ke=="function"?ke.call(kt,ge,ie):ke,ie==null)break e;ge=g({},ge,ie);break e;case 2:wa=!0}}ie=A.callback,ie!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=u.callbacks,oe===null?u.callbacks=[ie]:oe.push(ie))}else oe={lane:ie,tag:A.tag,payload:A.payload,callback:A.callback,next:null},he===null?(J=he=oe,B=ge):he=he.next=oe,y|=ie;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;oe=A,A=oe.next,oe.next=null,u.lastBaseUpdate=oe,u.shared.pending=null}}while(!0);he===null&&(B=ge),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=he,f===null&&(u.shared.lanes=0),za|=y,t.lanes=y,t.memoizedState=ge}}function r0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function s0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)r0(a[t],n)}var Jr=O(null),Al=O(0);function o0(t,n){t=ia,be(Al,t),be(Jr,n),ia=t|n.baseLanes}function ju(){be(Al,ia),be(Jr,Jr.current)}function Zu(){ia=Al.current,re(Jr),re(Al)}var Qn=O(null),fi=null;function La(t){var n=t.alternate;be(an,an.current&1),be(Qn,t),fi===null&&(n===null||Jr.current!==null||n.memoizedState!==null)&&(fi=t)}function Ku(t){be(an,an.current),be(Qn,t),fi===null&&(fi=t)}function l0(t){t.tag===22?(be(an,an.current),be(Qn,t),fi===null&&(fi=t)):Na()}function Na(){be(an,an.current),be(Qn,Qn.current)}function Jn(t){re(Qn),fi===t&&(fi=null),re(an)}var an=O(0);function Rl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||id(a)||ad(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,dt=null,Gt=null,cn=null,Cl=!1,$r=!1,vr=!1,wl=0,lo=0,es=null,q_=0;function en(){throw Error(r(321))}function Qu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function Ju(t,n,a,o,u,f){return Zi=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?W0:pf,vr=!1,f=a(o,u),vr=!1,$r&&(f=u0(n,a,o,u)),c0(t),f}function c0(t){z.H=fo;var n=Gt!==null&&Gt.next!==null;if(Zi=0,cn=Gt=dt=null,Cl=!1,lo=0,es=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&_l(t)&&(un=!0))}function u0(t,n,a,o){dt=t;var u=0;do{if($r&&(es=null),lo=0,$r=!1,25<=u)throw Error(r(301));if(u+=1,cn=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=q0,f=n(a,o)}while($r);return f}function Y_(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(dt.flags|=1024),n}function $u(){var t=wl!==0;return wl=0,t}function ef(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function tf(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}Zi=0,cn=Gt=dt=null,$r=!1,lo=wl=0,es=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?dt.memoizedState=cn=t:cn=cn.next=t,cn}function rn(){if(Gt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=cn===null?dt.memoizedState:cn.next;if(n!==null)cn=n,Gt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},cn===null?dt.memoizedState=cn=t:cn=cn.next=t}return cn}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,es===null&&(es=[]),t=e0(es,t,n),n=dt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?W0:pf),t}function Ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===U)return An(t)}throw Error(r(438,String(t)))}function nf(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function Ll(t){var n=rn();return af(n,Gt,t)}function af(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=y=null,B=null,J=n,he=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(yt&ge)===ge:(Zi&ge)===ge){var ie=J.revertLane;if(ie===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===jr&&(he=!0);else if((Zi&ie)===ie){J=J.next,ie===jr&&(he=!0);continue}else ge={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(A=B=ge,y=f):B=B.next=ge,dt.lanes|=ie,za|=ie;ge=J.action,vr&&a(f,ge),f=J.hasEagerState?J.eagerState:a(f,ge)}else ie={lane:ge,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(A=B=ie,y=f):B=B.next=ie,dt.lanes|=ge,za|=ge;J=J.next}while(J!==null&&J!==n);if(B===null?y=f:B.next=A,!Zn(f,t.memoizedState)&&(un=!0,he&&(a=Zr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function rf(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=t(f,y.action),y=y.next;while(y!==u);Zn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function f0(t,n,a){var o=dt,u=rn(),f=Tt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Zn((Gt||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,lf(p0.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,ts(9,{destroy:void 0},h0.bind(null,o,u,a,n),null),qt===null)throw Error(r(349));f||(Zi&127)!==0||d0(o,n,a)}return a}function d0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Dl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function h0(t,n,a,o){n.value=a,n.getSnapshot=o,m0(n)&&x0(t)}function p0(t,n,a){return a(function(){m0(n)&&x0(t)})}function m0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function x0(t){var n=cr(t,2);n!==null&&kn(n,t,2)}function sf(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),vr){Ke(!0);try{a()}finally{Ke(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function g0(t,n,a,o){return t.baseState=a,af(t,Gt,typeof o=="function"?o:Ki)}function j_(t,n,a,o,u){if(Pl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,v0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function v0(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=z.T,y={};z.T=y;try{var A=a(u,o),B=z.S;B!==null&&B(y,A),_0(t,n,A)}catch(J){of(t,n,J)}finally{f!==null&&y.types!==null&&(f.types=y.types),z.T=f}}else try{f=a(u,o),_0(t,n,f)}catch(J){of(t,n,J)}}function _0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){S0(t,n,o)},function(o){return of(t,n,o)}):S0(t,n,a)}function S0(t,n,a){n.status="fulfilled",n.value=a,y0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,v0(t,a)))}function of(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,y0(n),n=n.next;while(n!==o)}t.action=null}function y0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function b0(t,n){return n}function M0(t,n){if(Tt){var a=qt.formState;if(a!==null){e:{var o=dt;if(Tt){if(Zt){t:{for(var u=Zt,f=ui;u.nodeType!==8;){if(!f){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=di(u.nextSibling),o=u.data==="F!";break e}}Ra(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:n},a.queue=o,a=V0.bind(null,dt,o),o.dispatch=a,o=sf(!1),f=hf.bind(null,dt,!1,o.queue),o=On(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=j_.bind(null,dt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function E0(t){var n=rn();return T0(n,Gt,t)}function T0(t,n,a){if(n=af(t,n,b0)[0],t=Ll(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(y){throw y===Kr?bl:y}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,ts(9,{destroy:void 0},Z_.bind(null,u,a),null)),[o,f,t]}function Z_(t,n){t.action=n}function A0(t){var n=rn(),a=Gt;if(a!==null)return T0(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ts(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Dl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function R0(){return rn().memoizedState}function Nl(t,n,a,o){var u=On();dt.flags|=t,u.memoizedState=ts(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ol(t,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;Gt!==null&&o!==null&&Qu(o,Gt.memoizedState.deps)?u.memoizedState=ts(n,f,a,o):(dt.flags|=t,u.memoizedState=ts(1|n,f,a,o))}function C0(t,n){Nl(8390656,8,t,n)}function lf(t,n){Ol(2048,8,t,n)}function K_(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Dl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function w0(t){var n=rn().memoizedState;return K_({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function D0(t,n){return Ol(4,2,t,n)}function U0(t,n){return Ol(4,4,t,n)}function L0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function N0(t,n,a){a=a!=null?a.concat([t]):null,Ol(4,4,L0.bind(null,n,t),a)}function cf(){}function O0(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Qu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function P0(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Qu(n,o[1]))return o[0];if(o=t(),vr){Ke(!0);try{t()}finally{Ke(!1)}}return a.memoizedState=[o,n],o}function uf(t,n,a){return a===void 0||(Zi&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=zm(),dt.lanes|=t,za|=t,a)}function z0(t,n,a,o){return Zn(a,n)?a:Jr.current!==null?(t=uf(t,a,o),Zn(t,n)||(un=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(yt&261930)===0?(un=!0,t.memoizedState=a):(t=zm(),dt.lanes|=t,za|=t,n)}function F0(t,n,a,o,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var y=z.T,A={};z.T=A,hf(t,!1,n,a);try{var B=u(),J=z.S;if(J!==null&&J(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var he=W_(B,o);uo(t,n,he,ti(t))}else uo(t,n,o,ti(t))}catch(ge){uo(t,n,{then:function(){},status:"rejected",reason:ge},ti())}finally{Z.p=f,y!==null&&A.types!==null&&(y.types=A.types),z.T=y}}function Q_(){}function ff(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=B0(t).queue;F0(t,u,n,Y,a===null?Q_:function(){return I0(t),a(o)})}function B0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function I0(t){var n=B0(t);n.next===null&&(n=t.alternate.memoizedState),uo(t,n.next.queue,{},ti())}function df(){return An(Co)}function H0(){return rn().memoizedState}function G0(){return rn().memoizedState}function J_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Da(a);var o=Ua(n,t,a);o!==null&&(kn(o,n,a),ro(o,n,a)),n={cache:Hu()},t.payload=n;return}n=n.return}}function $_(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?k0(n,a):(a=wu(t,n,a,o),a!==null&&(kn(a,t,o),X0(a,n,o)))}function V0(t,n,a){var o=ti();uo(t,n,a,o)}function uo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))k0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(u.hasEagerState=!0,u.eagerState=A,Zn(A,y))return ml(t,n,u,0),qt===null&&pl(),!1}catch{}finally{}if(a=wu(t,n,u,o),a!==null)return kn(a,t,o),X0(a,n,o),!0}return!1}function hf(t,n,a,o){if(o={lane:2,revertLane:Wf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(r(479))}else n=wu(t,a,o,2),n!==null&&kn(n,t,2)}function Pl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function k0(t,n){$r=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function X0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Is(t,a)}}var fo={readContext:An,use:Ul,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};fo.useEffectEvent=en;var W0={readContext:An,use:Ul,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:C0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Nl(4194308,4,L0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Nl(4194308,4,t,n)},useInsertionEffect:function(t,n){Nl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var o=t();if(vr){Ke(!0);try{t()}finally{Ke(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=On();if(a!==void 0){var u=a(n);if(vr){Ke(!0);try{a(n)}finally{Ke(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=$_.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=sf(t);var n=t.queue,a=V0.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:cf,useDeferredValue:function(t,n){var a=On();return uf(a,t,n)},useTransition:function(){var t=sf(!1);return t=F0.bind(null,dt,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=On();if(Tt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qt===null)throw Error(r(349));(yt&127)!==0||d0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,C0(p0.bind(null,o,f,t),[t]),o.flags|=2048,ts(9,{destroy:void 0},h0.bind(null,o,f,a,n),null),a},useId:function(){var t=On(),n=qt.identifierPrefix;if(Tt){var a=Di,o=wi;a=(o&~(1<<32-Xe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=q_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:df,useFormState:M0,useActionState:M0,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:nf,useCacheRefresh:function(){return On().memoizedState=J_.bind(null,dt)},useEffectEvent:function(t){var n=On(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:An,use:Ul,useCallback:O0,useContext:An,useEffect:lf,useImperativeHandle:N0,useInsertionEffect:D0,useLayoutEffect:U0,useMemo:P0,useReducer:Ll,useRef:R0,useState:function(){return Ll(Ki)},useDebugValue:cf,useDeferredValue:function(t,n){var a=rn();return z0(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Ll(Ki)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:f0,useId:H0,useHostTransitionStatus:df,useFormState:E0,useActionState:E0,useOptimistic:function(t,n){var a=rn();return g0(a,Gt,t,n)},useMemoCache:nf,useCacheRefresh:G0};pf.useEffectEvent=w0;var q0={readContext:An,use:Ul,useCallback:O0,useContext:An,useEffect:lf,useImperativeHandle:N0,useInsertionEffect:D0,useLayoutEffect:U0,useMemo:P0,useReducer:rf,useRef:R0,useState:function(){return rf(Ki)},useDebugValue:cf,useDeferredValue:function(t,n){var a=rn();return Gt===null?uf(a,t,n):z0(a,Gt.memoizedState,t,n)},useTransition:function(){var t=rf(Ki)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:f0,useId:H0,useHostTransitionStatus:df,useFormState:A0,useActionState:A0,useOptimistic:function(t,n){var a=rn();return Gt!==null?g0(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:G0};q0.useEffectEvent=w0;function mf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Da(o);u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,o),n!==null&&(kn(n,t,o),ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Da(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,o),n!==null&&(kn(n,t,o),ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=Da(a);o.tag=2,n!=null&&(o.callback=n),n=Ua(t,o,a),n!==null&&(kn(n,t,a),ro(n,t,a))}};function Y0(t,n,a,o,u,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,o)||!Qs(u,f):!0}function j0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function _r(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Z0(t){hl(t)}function K0(t){console.error(t)}function Q0(t){hl(t)}function zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function J0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function gf(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(t,n)},a}function $0(t){return t=Da(t),t.tag=3,t}function em(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){J0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){J0(n,a,o),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function eS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Yr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?jl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Vf(t,o,u)),!1;case 22:return a.flags|=65536,o===Ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Vf(t,o,u)),!1}throw Error(r(435,a.tag))}return Vf(t,o,u),jl(),!1}if(Tt)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Pu&&(t=Error(r(422),{cause:o}),eo(oi(t,a)))):(o!==Pu&&(n=Error(r(423),{cause:o}),eo(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=gf(t.stateNode,o,u),qu(t,u),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=oi(f,a),So===null?So=[f]:So.push(f),tn!==4&&(tn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=gf(a.stateNode,o,t),qu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=$0(u),em(u,t,a,o),qu(a,u),!1}a=a.return}while(a!==null);return!1}var vf=Error(r(461)),un=!1;function Rn(t,n,a,o){n.child=t===null?a0(n,null,a,o):gr(n,t.child,a,o)}function tm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return hr(n),o=Ju(t,n,a,y,f,u),A=$u(),t!==null&&!un?(ef(t,n,u),Qi(t,n,u)):(Tt&&A&&Nu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function nm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,im(t,n,f,o,u)):(t=gl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Af(t,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(y,o)&&t.ref===n.ref)return Qi(t,n,u)}return n.flags|=1,t=Wi(f,o),t.ref=n.ref,t.return=n,n.child=t}function im(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Qs(f,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=f,Af(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Qi(t,n,u)}return _f(t,n,a,o,u)}function am(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return rm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yl(n,f!==null?f.cachePool:null),f!==null?o0(n,f):ju(),l0(n);else return o=n.lanes=536870912,rm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(yl(n,f.cachePool),o0(n,f),Na(),n.memoizedState=null):(t!==null&&yl(n,null),ju(),Na());return Rn(t,n,u,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function rm(t,n,a,o,u){var f=Vu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&yl(n,null),ju(),l0(n),t!==null&&Yr(t,n,o,!0),n.childLanes=u,null}function Fl(t,n){return n=Il({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function sm(t,n,a){return gr(n,t.child,null,a),t=Fl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function tS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=Fl(n,o),n.lanes=536870912,ho(null,t);if(Ku(n),(t=Zt)?(t=vx(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=kp(t),a.return=n,n.child=a,Tn=n,Zt=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Fl(n,o)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(Ku(n),u)if(n.flags&256)n.flags&=-257,n=sm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||Yr(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(o=qt,o!==null&&(y=Hs(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,cr(t,y),kn(o,t,y),vf;jl(),n=sm(t,n,a)}else t=f.treeContext,Zt=di(y.nextSibling),Tn=n,Tt=!0,Aa=null,ui=!1,t!==null&&qp(n,t),n=Fl(n,o),n.flags|=4096;return n}return t=Wi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function _f(t,n,a,o,u){return hr(n),a=Ju(t,n,a,o,void 0,u),o=$u(),t!==null&&!un?(ef(t,n,u),Qi(t,n,u)):(Tt&&o&&Nu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function om(t,n,a,o,u,f){return hr(n),n.updateQueue=null,a=u0(n,o,a,u),c0(t),o=$u(),t!==null&&!un?(ef(t,n,f),Qi(t,n,f)):(Tt&&o&&Nu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function lm(t,n,a,o,u){if(hr(n),n.stateNode===null){var f=kr,y=a.contextType;typeof y=="object"&&y!==null&&(f=An(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Xu(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?An(y):kr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(mf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&xf.enqueueReplaceState(f,f.state,null),oo(n,o,f,u),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,B=_r(a,A);f.props=B;var J=f.context,he=a.contextType;y=kr,typeof he=="object"&&he!==null&&(y=An(he));var ge=a.getDerivedStateFromProps;he=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==y)&&j0(n,f,o,y),wa=!1;var ie=n.memoizedState;f.state=ie,oo(n,o,f,u),so(),J=n.memoizedState,A||ie!==J||wa?(typeof ge=="function"&&(mf(n,a,ge,o),J=n.memoizedState),(B=wa||Y0(n,a,B,o,ie,J,y))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=y,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Wu(t,n),y=n.memoizedProps,he=_r(a,y),f.props=he,ge=n.pendingProps,ie=f.context,J=a.contextType,B=kr,typeof J=="object"&&J!==null&&(B=An(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==ge||ie!==B)&&j0(n,f,o,B),wa=!1,ie=n.memoizedState,f.state=ie,oo(n,o,f,u),so();var oe=n.memoizedState;y!==ge||ie!==oe||wa||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof A=="function"&&(mf(n,a,A,o),oe=n.memoizedState),(he=wa||Y0(n,a,he,o,ie,oe,B)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,oe,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,oe,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=oe),f.props=o,f.state=oe,f.context=B,o=he):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Bl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=gr(n,t.child,null,u),n.child=gr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Qi(t,n,u),t}function cm(t,n,a,o){return fr(),n.flags|=256,Rn(t,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(t){return{baseLanes:t,cachePool:Jp()}}function bf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function um(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(u?La(n):Na(),(t=Zt)?(t=vx(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=kp(t),a.return=n,n.child=a,Tn=n,Zt=null)):t=null,t===null)throw Ra(n);return ad(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Na(),u=n.mode,A=Il({mode:"hidden",children:A},u),o=ur(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=yf(a),o.childLanes=bf(t,y,a),n.memoizedState=Sf,ho(null,o)):(La(n),Mf(n,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=Ef(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),A=o.fallback,u=n.mode,o=Il({mode:"visible",children:o.children},u),A=ur(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,gr(n,t.child,null,a),o=n.child,o.memoizedState=yf(a),o.childLanes=bf(t,y,a),n.memoizedState=Sf,n=ho(null,o));else if(La(n),ad(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var J=y.dgst;y=J,o=Error(r(419)),o.stack="",o.digest=y,eo({value:o,source:null,stack:null}),n=Ef(t,n,a)}else if(un||Yr(t,n,a,!1),y=(a&t.childLanes)!==0,un||y){if(y=qt,y!==null&&(o=Hs(y,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,cr(t,o),kn(y,t,o),vf;id(A)||jl(),n=Ef(t,n,a)}else id(A)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Zt=di(A.nextSibling),Tn=n,Tt=!0,Aa=null,ui=!1,t!==null&&qp(n,t),n=Mf(n,o.children),n.flags|=4096);return n}return u?(Na(),A=o.fallback,u=n.mode,B=t.child,J=B.sibling,o=Wi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,J!==null?A=Wi(J,A):(A=ur(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,ho(null,o),o=n.child,A=t.child.memoizedState,A===null?A=yf(a):(u=A.cachePool,u!==null?(B=ln._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Jp(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=bf(t,y,a),n.memoizedState=Sf,ho(t.child,o)):(La(n),a=t.child,t=a.sibling,a=Wi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Mf(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Ef(t,n,a){return gr(n,t.child,null,a),t=Mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function fm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Bu(t.return,n,a)}function Tf(t,n,a,o,u,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function dm(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=an.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,be(an,y),Rn(t,n,o,a),o=Tt?$s:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fm(t,a,n);else if(t.tag===19)fm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Rl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Tf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Rl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Tf(n,!0,a,null,f,o);break;case"together":Tf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Yr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Wi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Wi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Af(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function nS(t,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),Ca(n,ln,t.memoizedState.cache),fr();break;case 27:case 5:qe(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ku(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?um(t,n,a):(La(n),t=Qi(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Yr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return dm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(an,an.current),o)break;return null;case 22:return n.lanes=0,am(t,n,a,n.pendingProps);case 24:Ca(n,ln,t.memoizedState.cache)}return Qi(t,n,a)}function hm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Af(t,a)&&(n.flags&128)===0)return un=!1,nS(t,n,a);un=(t.flags&131072)!==0}else un=!1,Tt&&(n.flags&1048576)!==0&&Wp(n,$s,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")Du(t)?(o=_r(t,o),n.tag=1,n=lm(null,n,t,o,a)):(n.tag=0,n=_f(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=tm(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=nm(null,n,t,o,a);break e}}throw n=de(t)||t,Error(r(306,n,""))}}return n;case 0:return _f(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_r(o,n.pendingProps),lm(t,n,o,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Wu(t,n),oo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ca(n,ln,o),o!==f.cache&&Iu(n,[ln],a,!0),so(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=cm(t,n,o,a);break e}else if(o!==u){u=oi(Error(r(424)),n),eo(u),n=cm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=di(t.firstChild),Tn=n,Tt=!0,Aa=null,ui=!0,a=a0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fr(),o===u){n=Qi(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return Bl(t,n),t===null?(a=Ex(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,t=n.pendingProps,o=tc(ae.current).createElement(a),o[on]=n,o[pn]=t,Cn(o,a,t),$(o),n.stateNode=o):n.memoizedState=Ex(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qe(n),t===null&&Tt&&(o=n.stateNode=yx(n.type,n.pendingProps,ae.current),Tn=n,ui=!0,u=Zt,Ga(n.type)?(rd=u,Zt=di(o.firstChild)):Zt=u),Rn(t,n,n.pendingProps.children,a),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((u=o=Zt)&&(o=LS(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,Tn=n,Zt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Ra(n)),qe(n),u=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,ed(u,f)?o=null:y!==null&&ed(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Ju(t,n,Y_,null,null,a),Co._currentValue=u),Bl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&Tt&&((t=a=Zt)&&(a=NS(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Tn=n,Zt=null,t=!0):t=!1),t||Ra(n)),null;case 13:return um(t,n,a);case 4:return Re(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=gr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return tm(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ca(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return nm(t,n,n.type,n.pendingProps,a);case 15:return im(t,n,n.type,n.pendingProps,a);case 19:return dm(t,n,a);case 31:return tS(t,n,a);case 22:return am(t,n,a,n.pendingProps);case 24:return hr(n),o=An(ln),t===null?(u=Vu(),u===null&&(u=qt,f=Hu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Xu(n),Ca(n,ln,u)):((t.lanes&a)!==0&&(Wu(t,n),oo(n,null,null,a),so()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,ln,o)):(o=f.cache,Ca(n,ln,o),o!==u.cache&&Iu(n,[ln],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(t){t.flags|=4}function Rf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Hm())t.flags|=8192;else throw xr=Ml,ku}else t.flags&=-16777217}function pm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wx(n))if(Hm())t.flags|=8192;else throw xr=Ml,ku}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ht():536870912,t.lanes|=n,rs|=n)}function po(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function iS(t,n,a){var o=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ji(ln),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qr(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zu())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Ji(n),f!==null?(Kt(n),pm(n,f)):(Kt(n),Rf(n,u,null,o,a))):f?f!==t.memoizedState?(Ji(n),Kt(n),pm(n,f)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ji(n),Kt(n),Rf(n,u,t,o,a)),null;case 27:if(lt(n),a=ae.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}t=Ae.current,qr(n)?Yp(n):(t=yx(u,o,a),n.stateNode=t,Ji(n))}return Kt(n),null;case 5:if(lt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}if(f=Ae.current,qr(n))Yp(n);else{var y=tc(ae.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[on]=n,f[pn]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;e:switch(Cn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ji(n)}}return Kt(n),Rf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,qr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ux(t.nodeValue,a)),t||Ra(n,!0)}else t=tc(t).createTextNode(o),t[on]=n,n.stateNode=t}return Kt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=qr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else a=zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=zu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),Kt(n),null);case 4:return Ve(),t===null&&Zf(n.stateNode.containerInfo),Kt(n),null;case 10:return ji(n.type),Kt(n),null;case 19:if(re(an),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)po(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Rl(t),f!==null){for(n.flags|=128,po(o,!1),t=f.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Vp(a,t),a=a.sibling;return be(an,an.current&1|2),Tt&&qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&v()>Wl&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304)}else{if(!u)if(t=Rl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Tt)return Kt(n),null}else 2*v()-o.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,u=!0,po(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=v(),t.sibling=null,a=an.current,be(an,u?a&1|2:a&1),Tt&&qi(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return Jn(n),Zu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&re(pr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(ln),Kt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function aS(t,n){switch(Ou(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ji(ln),Ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return re(an),null;case 4:return Ve(),null;case 10:return ji(n.type),null;case 22:case 23:return Jn(n),Zu(),t!==null&&re(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ji(ln),null;case 25:return null;default:return null}}function mm(t,n){switch(Ou(n),n.tag){case 3:ji(ln),Ve();break;case 26:case 27:case 5:lt(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:re(an);break;case 10:ji(n.type);break;case 22:case 23:Jn(n),Zu(),t!==null&&re(pr);break;case 24:ji(ln)}}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){Bt(n,n.return,A)}}function Oa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var B=a,J=A;try{J()}catch(he){Bt(u,B,he)}}}o=o.next}while(o!==f)}}catch(he){Bt(n,n.return,he)}}function xm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{s0(n,a)}catch(o){Bt(t,t.return,o)}}}function gm(t,n,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Bt(t,n,u)}}function Ui(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function vm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function Cf(t,n,a){try{var o=t.stateNode;AS(o,t.type,a,n),o[pn]=n}catch(u){Bt(t,t.return,u)}}function _m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(o!==4&&(o===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Df(t,n,a),t=t.sibling;t!==null;)Df(t,n,a),t=t.sibling}function Gl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function Sm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[on]=t,n[pn]=a}catch(f){Bt(t,t.return,f)}}var $i=!1,fn=!1,Uf=!1,ym=typeof WeakSet=="function"?WeakSet:Set,bn=null;function rS(t,n){if(t=t.containerInfo,Jf=lc,t=Np(t),Mu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,A=-1,B=-1,J=0,he=0,ge=t,ie=null;t:for(;;){for(var oe;ge!==a||u!==0&&ge.nodeType!==3||(A=y+u),ge!==f||o!==0&&ge.nodeType!==3||(B=y+o),ge.nodeType===3&&(y+=ge.nodeValue.length),(oe=ge.firstChild)!==null;)ie=ge,ge=oe;for(;;){if(ge===t)break t;if(ie===a&&++J===u&&(A=y),ie===f&&++he===o&&(B=y),(oe=ge.nextSibling)!==null)break;ge=ie,ie=ge.parentNode}ge=oe}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:t,selectionRange:a},lc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ke=_r(a.type,u);t=o.getSnapshotBeforeUpdate(ke,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Bt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)nd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function bm(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),o&4&&mo(5,a);break;case 1:if(ta(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Bt(a,a.return,y)}else{var u=_r(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Bt(a,a.return,y)}}o&64&&xm(a),o&512&&xo(a,a.return);break;case 3:if(ta(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{s0(t,n)}catch(y){Bt(a,a.return,y)}}break;case 27:n===null&&o&4&&Sm(a);case 26:case 5:ta(t,a),n===null&&o&4&&vm(a),o&512&&xo(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),o&4&&Tm(t,a);break;case 13:ta(t,a),o&4&&Am(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=pS.bind(null,a),OS(t,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||fn,u=$i;var f=fn;$i=o,(fn=n)&&!f?na(t,a,(a.subtreeFlags&8772)!==0):ta(t,a),$i=u,fn=f}break;case 30:break;default:ta(t,a)}}function Mm(t){var n=t.alternate;n!==null&&(t.alternate=null,Mm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ks(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,In=!1;function ea(t,n,a){for(a=a.child;a!==null;)Em(t,n,a),a=a.sibling}function Em(t,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:fn||Ui(a,n),ea(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ui(a,n);var o=Qt,u=In;Ga(a.type)&&(Qt=a.stateNode,In=!1),ea(t,n,a),To(a.stateNode),Qt=o,In=u;break;case 5:fn||Ui(a,n);case 6:if(o=Qt,u=In,Qt=null,ea(t,n,a),Qt=o,In=u,Qt!==null)if(In)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Qt!==null&&(In?(t=Qt,xx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),hs(t)):xx(Qt,a.stateNode));break;case 4:o=Qt,u=In,Qt=a.stateNode.containerInfo,In=!0,ea(t,n,a),Qt=o,In=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),fn||Oa(4,a,n),ea(t,n,a);break;case 1:fn||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&gm(a,n,o)),ea(t,n,a);break;case 21:ea(t,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ea(t,n,a),fn=o;break;default:ea(t,n,a)}}function Tm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{hs(t)}catch(a){Bt(n,n.return,a)}}}function Am(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hs(t)}catch(a){Bt(n,n.return,a)}}function sS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ym),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ym),n;default:throw Error(r(435,t.tag))}}function Vl(t,n){var a=sS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=mS.bind(null,t,o);o.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,y=n,A=y;e:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){Qt=A.stateNode,In=!1;break e}break;case 5:Qt=A.stateNode,In=!1;break e;case 3:case 4:Qt=A.stateNode.containerInfo,In=!0;break e}A=A.return}if(Qt===null)throw Error(r(160));Em(f,y,u),Qt=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Rm(n,t),n=n.sibling}var _i=null;function Rm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),o&4&&(Oa(3,t,t.return),mo(3,t),Oa(5,t,t.return));break;case 1:Hn(n,t),Gn(t),o&512&&(fn||a===null||Ui(a,a.return)),o&64&&$i&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=_i;if(Hn(n,t),Gn(t),o&512&&(fn||a===null||Ui(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[rr]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[on]=t,$(f),o=f;break e;case"link":var y=Rx("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(f=y[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=Rx("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(f=y[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=t,$(f),o=f}t.stateNode=o}else Cx(u,t.type,t.stateNode);else t.stateNode=Ax(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Cx(u,t.type,t.stateNode):Ax(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),o&512&&(fn||a===null||Ui(a,a.return)),a!==null&&o&4&&Cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),o&512&&(fn||a===null||Ui(a,a.return)),t.flags&32){u=t.stateNode;try{Ci(u,"")}catch(ke){Bt(t,t.return,ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Cf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(Hn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ke){Bt(t,t.return,ke)}}break;case 3:if(ac=null,u=_i,_i=nc(n.containerInfo),Hn(n,t),_i=u,Gn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{hs(n.containerInfo)}catch(ke){Bt(t,t.return,ke)}Uf&&(Uf=!1,Cm(t));break;case 4:o=_i,_i=nc(t.stateNode.containerInfo),Hn(n,t),Gn(t),_i=o;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=v()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=$i,he=fn;if($i=J||u,fn=he||B,Hn(n,t),fn=he,$i=J,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||$i||fn||Sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=B.stateNode;var ge=B.memoizedProps.style,ie=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;A.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(ke){Bt(B,B.return,ke)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ke){Bt(B,B.return,ke)}}}else if(n.tag===18){if(a===null){B=n;try{var oe=B.stateNode;u?gx(oe,!0):gx(B.stateNode,!1)}catch(ke){Bt(B,B.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Vl(t,a))));break;case 19:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(_m(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=wf(t);Gl(t,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Ci(y,""),a.flags&=-33);var A=wf(t);Gl(t,A,y);break;case 3:case 4:var B=a.stateNode.containerInfo,J=wf(t);Df(t,J,B);break;default:throw Error(r(161))}}catch(he){Bt(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Cm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Cm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bm(t,n.alternate,n),n=n.sibling}function Sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),Sr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&gm(n,n.return,a),Sr(n);break;case 27:To(n.stateNode);case 26:case 5:Ui(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:na(u,f,a),mo(4,f);break;case 1:if(na(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Bt(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)r0(B[u],A)}catch(J){Bt(o,o.return,J)}}a&&y&64&&xm(f),xo(f,f.return);break;case 27:Sm(f);case 26:case 5:na(u,f,a),a&&o===null&&y&4&&vm(f),xo(f,f.return);break;case 12:na(u,f,a);break;case 31:na(u,f,a),a&&y&4&&Tm(u,f);break;case 13:na(u,f,a),a&&y&4&&Am(u,f);break;case 22:f.memoizedState===null&&na(u,f,a),xo(f,f.return);break;case 30:break;default:na(u,f,a)}n=n.sibling}}function Lf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Nf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Si(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wm(t,n,a,o),n=n.sibling}function wm(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,o),u&2048&&mo(9,n);break;case 1:Si(t,n,a,o);break;case 3:Si(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){Si(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,A=f.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Bt(n,n.return,B)}}else Si(t,n,a,o);break;case 31:Si(t,n,a,o);break;case 13:Si(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,o):go(t,n):f._visibility&2?Si(t,n,a,o):(f._visibility|=2,ns(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Lf(y,n);break;case 24:Si(t,n,a,o),u&2048&&Nf(n.alternate,n);break;default:Si(t,n,a,o)}}function ns(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,A=a,B=o,J=y.flags;switch(y.tag){case 0:case 11:case 15:ns(f,y,A,B,u),mo(8,y);break;case 23:break;case 22:var he=y.stateNode;y.memoizedState!==null?he._visibility&2?ns(f,y,A,B,u):go(f,y):(he._visibility|=2,ns(f,y,A,B,u)),u&&J&2048&&Lf(y.alternate,y);break;case 24:ns(f,y,A,B,u),u&&J&2048&&Nf(y.alternate,y);break;default:ns(f,y,A,B,u)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:go(a,o),u&2048&&Lf(o.alternate,o);break;case 24:go(a,o),u&2048&&Nf(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var vo=8192;function is(t,n,a){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)Dm(t,n,a),t=t.sibling}function Dm(t,n,a){switch(t.tag){case 26:is(t,n,a),t.flags&vo&&t.memoizedState!==null&&qS(a,_i,t.memoizedState,t.memoizedProps);break;case 5:is(t,n,a);break;case 3:case 4:var o=_i;_i=nc(t.stateNode.containerInfo),is(t,n,a),_i=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=vo,vo=16777216,is(t,n,a),vo=o):is(t,n,a));break;default:is(t,n,a)}}function Um(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,Nm(o,t)}Um(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lm(t),t=t.sibling}function Lm(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,kl(t)):_o(t);break;default:_o(t)}}function kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,Nm(o,t)}Um(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}t=t.sibling}}function Nm(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var u=o.sibling,f=o.return;if(Mm(o),o===a){bn=null;break e}if(u!==null){u.return=f,bn=u;break e}bn=f}}}var oS={getCacheForType:function(t){var n=An(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(ln).controller.signal}},lS=typeof WeakMap=="function"?WeakMap:Map,Ot=0,qt=null,_t=null,yt=0,Ft=0,$n=null,Pa=!1,as=!1,Of=!1,ia=0,tn=0,za=0,yr=0,Pf=0,ei=0,rs=0,So=null,Vn=null,zf=!1,Xl=0,Om=0,Wl=1/0,ql=null,Fa=null,xn=0,Ba=null,ss=null,aa=0,Ff=0,Bf=null,Pm=null,yo=0,If=null;function ti(){return(Ot&2)!==0&&yt!==0?yt&-yt:z.T!==null?Wf():Gs()}function zm(){if(ei===0)if((yt&536870912)===0||Tt){var t=we;we<<=1,(we&3932160)===0&&(we=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function kn(t,n,a){(t===qt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(os(t,0),Ia(t,yt,ei,!1)),wn(t,a),((Ot&2)===0||t!==qt)&&(t===qt&&((Ot&2)===0&&(yr|=a),tn===4&&Ia(t,yt,ei,!1)),Li(t))}function Fm(t,n,a){if((Ot&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?fS(t,n):Gf(t,n,!0),f=o;do{if(u===0){as&&!o&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!cS(a)){u=Gf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var A=t;u=So;var B=A.current.memoizedState.isDehydrated;if(B&&(os(A,y).flags|=256),y=Gf(A,y,!1),y!==2){if(Of&&!B){A.errorRecoveryDisabledLanes|=f,yr|=f,u=4;break e}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){os(t,0),Ia(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(o,n,ei,!Pa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Xl+300-v(),10<u)){if(Ia(o,n,ei,!Pa),ve(o,0,!0)!==0)break e;aa=n,o.timeoutHandle=px(Bm.bind(null,o,a,Vn,ql,zf,n,ei,yr,rs,Pa,f,"Throttled",-0,0),u);break e}Bm(o,a,Vn,ql,zf,n,ei,yr,rs,Pa,f,null,-0,0)}}break}while(!0);Li(t)}function Bm(t,n,a,o,u,f,y,A,B,J,he,ge,ie,oe){if(t.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},Dm(n,f,ge);var ke=(f&62914560)===f?Xl-v():(f&4194048)===f?Om-v():0;if(ke=YS(ge,ke),ke!==null){aa=f,t.cancelPendingCommit=ke(qm.bind(null,t,n,f,a,o,u,y,A,B,he,ge,null,ie,oe)),Ia(t,f,y,!J);return}}qm(t,n,f,a,o,u,y,A,B)}function cS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,o){n&=~Pf,n&=~yr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Xe(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&al(t,a,n)}function Yl(){return(Ot&6)===0?(bo(0),!1):!0}function Hf(){if(_t!==null){if(Ft===0)var t=_t.return;else t=_t,Yi=dr=null,tf(t),Qr=null,io=0,t=_t;for(;t!==null;)mm(t.alternate,t),t=t.return;_t=null}}function os(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,wS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,Hf(),qt=t,_t=a=Wi(t.current,null),yt=n,Ft=0,$n=null,Pa=!1,as=He(t,n),Of=!1,rs=ei=Pf=yr=za=tn=0,Vn=So=null,zf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),f=1<<u;n|=t[u],o&=~f}return ia=n,pl(),a}function Im(t,n){dt=null,z.H=fo,n===Kr||n===bl?(n=t0(),Ft=3):n===ku?(n=t0(),Ft=4):Ft=n===vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,_t===null&&(tn=1,zl(t,oi(n,t.current)))}function Hm(){var t=Qn.current;return t===null?!0:(yt&4194048)===yt?fi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===fi:!1}function Gm(){var t=z.H;return z.H=fo,t===null?fo:t}function Vm(){var t=z.A;return z.A=oS,t}function jl(){tn=4,Pa||(yt&4194048)!==yt&&Qn.current!==null||(as=!0),(za&134217727)===0&&(yr&134217727)===0||qt===null||Ia(qt,yt,ei,!1)}function Gf(t,n,a){var o=Ot;Ot|=2;var u=Gm(),f=Vm();(qt!==t||yt!==n)&&(ql=null,os(t,n)),n=!1;var y=tn;e:do try{if(Ft!==0&&_t!==null){var A=_t,B=$n;switch(Ft){case 8:Hf(),y=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var J=Ft;if(Ft=0,$n=null,ls(t,A,B,J),a&&as){y=0;break e}break;default:J=Ft,Ft=0,$n=null,ls(t,A,B,J)}}uS(),y=tn;break}catch(he){Im(t,he)}while(!0);return n&&t.shellSuspendCounter++,Yi=dr=null,Ot=o,z.H=u,z.A=f,_t===null&&(qt=null,yt=0,pl()),y}function uS(){for(;_t!==null;)km(_t)}function fS(t,n){var a=Ot;Ot|=2;var o=Gm(),u=Vm();qt!==t||yt!==n?(ql=null,Wl=v()+500,os(t,n)):as=He(t,n);e:do try{if(Ft!==0&&_t!==null){n=_t;var f=$n;t:switch(Ft){case 1:Ft=0,$n=null,ls(t,n,f,1);break;case 2:case 9:if($p(f)){Ft=0,$n=null,Xm(n);break}n=function(){Ft!==2&&Ft!==9||qt!==t||(Ft=7),Li(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:$p(f)?(Ft=0,$n=null,Xm(n)):(Ft=0,$n=null,ls(t,n,f,7));break;case 5:var y=null;switch(_t.tag){case 26:y=_t.memoizedState;case 5:case 27:var A=_t;if(y?wx(y):A.stateNode.complete){Ft=0,$n=null;var B=A.sibling;if(B!==null)_t=B;else{var J=A.return;J!==null?(_t=J,Zl(J)):_t=null}break t}}Ft=0,$n=null,ls(t,n,f,5);break;case 6:Ft=0,$n=null,ls(t,n,f,6);break;case 8:Hf(),tn=6;break e;default:throw Error(r(462))}}dS();break}catch(he){Im(t,he)}while(!0);return Yi=dr=null,z.H=o,z.A=u,Ot=a,_t!==null?0:(qt=null,yt=0,pl(),tn)}function dS(){for(;_t!==null&&!it();)km(_t)}function km(t){var n=hm(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?Zl(t):_t=n}function Xm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=om(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=om(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:tf(n);default:mm(a,n),n=_t=Vp(n,ia),n=hm(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?Zl(t):_t=n}function ls(t,n,a,o){Yi=dr=null,tf(n),Qr=null,io=0;var u=n.return;try{if(eS(t,u,n,a,yt)){tn=1,zl(t,oi(a,t.current)),_t=null;return}}catch(f){if(u!==null)throw _t=u,f;tn=1,zl(t,oi(a,t.current)),_t=null;return}n.flags&32768?(Tt||o===1?t=!0:as||(yt&536870912)!==0?t=!1:(Pa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Wm(n,t)):Zl(n)}function Zl(t){var n=t;do{if((n.flags&32768)!==0){Wm(n,Pa);return}t=n.return;var a=iS(n.alternate,n,ia);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);tn===0&&(tn=5)}function Wm(t,n){do{var a=aS(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);tn=6,_t=null}function qm(t,n,a,o,u,f,y,A,B){t.cancelPendingCommit=null;do Kl();while(xn!==0);if((Ot&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Cu,Yn(t,a,f,y,A,B),t===qt&&(_t=qt=null,yt=0),ss=n,Ba=t,aa=a,Ff=f,Bf=u,Pm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xS(ne,function(){return Qm(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=Z.p,Z.p=2,y=Ot,Ot|=4;try{rS(t,n,a)}finally{Ot=y,Z.p=u,z.T=o}}xn=1,Ym(),jm(),Zm()}}function Ym(){if(xn===1){xn=0;var t=Ba,n=ss,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=Z.p;Z.p=2;var u=Ot;Ot|=4;try{Rm(n,t);var f=$f,y=Np(t.containerInfo),A=f.focusedElem,B=f.selectionRange;if(y!==A&&A&&A.ownerDocument&&Lp(A.ownerDocument.documentElement,A)){if(B!==null&&Mu(A)){var J=B.start,he=B.end;if(he===void 0&&(he=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(he,A.value.length);else{var ge=A.ownerDocument||document,ie=ge&&ge.defaultView||window;if(ie.getSelection){var oe=ie.getSelection(),ke=A.textContent.length,tt=Math.min(B.start,ke),kt=B.end===void 0?tt:Math.min(B.end,ke);!oe.extend&&tt>kt&&(y=kt,kt=tt,tt=y);var q=Up(A,tt),X=Up(A,kt);if(q&&X&&(oe.rangeCount!==1||oe.anchorNode!==q.node||oe.anchorOffset!==q.offset||oe.focusNode!==X.node||oe.focusOffset!==X.offset)){var Q=ge.createRange();Q.setStart(q.node,q.offset),oe.removeAllRanges(),tt>kt?(oe.addRange(Q),oe.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),oe.addRange(Q))}}}}for(ge=[],oe=A;oe=oe.parentNode;)oe.nodeType===1&&ge.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ge.length;A++){var xe=ge[A];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}lc=!!Jf,$f=Jf=null}finally{Ot=u,Z.p=o,z.T=a}}t.current=n,xn=2}}function jm(){if(xn===2){xn=0;var t=Ba,n=ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=Z.p;Z.p=2;var u=Ot;Ot|=4;try{bm(t,n.alternate,n)}finally{Ot=u,Z.p=o,z.T=a}}xn=3}}function Zm(){if(xn===4||xn===3){xn=0,D();var t=Ba,n=ss,a=aa,o=Pm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,ss=Ba=null,Km(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Fa=null),ar(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=Z.p,Z.p=2,z.T=null;try{for(var f=t.onRecoverableError,y=0;y<o.length;y++){var A=o[y];f(A.value,{componentStack:A.stack})}}finally{z.T=n,Z.p=u}}(aa&3)!==0&&Kl(),Li(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===If?yo++:(yo=0,If=t):yo=0,bo(0)}}function Km(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Kl(){return Ym(),jm(),Zm(),Qm()}function Qm(){if(xn!==5)return!1;var t=Ba,n=Ff;Ff=0;var a=ar(aa),o=z.T,u=Z.p;try{Z.p=32>a?32:a,z.T=null,a=Bf,Bf=null;var f=Ba,y=aa;if(xn=0,ss=Ba=null,aa=0,(Ot&6)!==0)throw Error(r(331));var A=Ot;if(Ot|=4,Lm(f.current),wm(f,f.current,y,a),Ot=A,bo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{Z.p=u,z.T=o,Km(t,n)}}function Jm(t,n,a){n=oi(a,n),n=gf(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(wn(t,2),Li(t))}function Bt(t,n,a){if(t.tag===3)Jm(t,t,a);else for(;n!==null;){if(n.tag===3){Jm(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Fa===null||!Fa.has(o))){t=oi(a,t),a=$0(2),o=Ua(n,a,2),o!==null&&(em(a,o,n,t),wn(o,2),Li(o));break}}n=n.return}}function Vf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new lS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Of=!0,u.add(a),t=hS.bind(null,t,n,a),n.then(t,t))}function hS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qt===t&&(yt&a)===a&&(tn===4||tn===3&&(yt&62914560)===yt&&300>v()-Xl?(Ot&2)===0&&os(t,0):Pf|=a,rs===yt&&(rs=0)),Li(t)}function $m(t,n){n===0&&(n=Ht()),t=cr(t,n),t!==null&&(wn(t,n),Li(t))}function pS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),$m(t,a)}function mS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),$m(t,a)}function xS(t,n){return It(t,n)}var Ql=null,cs=null,kf=!1,Jl=!1,Xf=!1,Ha=0;function Li(t){t!==cs&&t.next===null&&(cs===null?Ql=cs=t:cs=cs.next=t),Jl=!0,kf||(kf=!0,vS())}function bo(t,n){if(!Xf&&Jl){Xf=!0;do for(var a=!1,o=Ql;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Xe(42|t)+1)-1,f&=u&~(y&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ix(o,f))}else f=yt,f=ve(o,o===qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||He(o,f)||(a=!0,ix(o,f));o=o.next}while(a);Xf=!1}}function gS(){ex()}function ex(){Jl=kf=!1;var t=0;Ha!==0&&CS()&&(t=Ha);for(var n=v(),a=null,o=Ql;o!==null;){var u=o.next,f=tx(o,n);f===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(cs=a)):(a=o,(t!==0||(f&3)!==0)&&(Jl=!0)),o=u}xn!==0&&xn!==5||bo(t),Ha!==0&&(Ha=0)}function tx(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Xe(f),A=1<<y,B=u[y];B===-1?((A&a)===0||(A&o)!==0)&&(u[y]=rt(A,n)):B<=n&&(t.expiredLanes|=A),f&=~A}if(n=qt,a=yt,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&je(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&je(o),ar(a)){case 2:case 8:a=fe;break;case 32:a=ne;break;case 268435456:a=Ue;break;default:a=ne}return o=nx.bind(null,t),a=It(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&je(o),t.callbackPriority=2,t.callbackNode=null,2}function nx(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var o=yt;return o=ve(t,t===qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Fm(t,o,n),tx(t,v()),t.callbackNode!=null&&t.callbackNode===a?nx.bind(null,t):null)}function ix(t,n){if(Kl())return null;Fm(t,n,!0)}function vS(){DS(function(){(Ot&6)!==0?It(K,gS):ex()})}function Wf(){if(Ha===0){var t=jr;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Ha=t}return Ha}function ax(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sl(""+t)}function rx(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function _S(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=ax((u[pn]||null).action),y=o.submitter;y&&(n=(n=y[pn]||null)?ax(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new ul("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ha!==0){var B=y?rx(u,y):new FormData(u);ff(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=y?rx(u,y):new FormData(u),ff(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var qf=0;qf<Ru.length;qf++){var Yf=Ru[qf],SS=Yf.toLowerCase(),yS=Yf[0].toUpperCase()+Yf.slice(1);vi(SS,"on"+yS)}vi(zp,"onAnimationEnd"),vi(Fp,"onAnimationIteration"),vi(Bp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(F_,"onTransitionRun"),vi(B_,"onTransitionStart"),vi(I_,"onTransitionCancel"),vi(Ip,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function sx(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],B=A.instance,J=A.currentTarget;if(A=A.listener,B!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=J;try{f(u)}catch(he){hl(he)}u.currentTarget=null,f=B}else for(y=0;y<o.length;y++){if(A=o[y],B=A.instance,J=A.currentTarget,A=A.listener,B!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=J;try{f(u)}catch(he){hl(he)}u.currentTarget=null,f=B}}}}function St(t,n){var a=n[zr];a===void 0&&(a=n[zr]=new Set);var o=t+"__bubble";a.has(o)||(ox(n,t,2,!1),a.add(o))}function jf(t,n,a){var o=0;n&&(o|=4),ox(a,t,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Zf(t){if(!t[$l]){t[$l]=!0,j.forEach(function(a){a!=="selectionchange"&&(bS.has(a)||jf(a,!1,t),jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$l]||(n[$l]=!0,jf("selectionchange",!1,n))}}function ox(t,n,a,o){switch(zx(n)){case 2:var u=KS;break;case 8:u=QS;break;default:u=ud}a=u.bind(null,n,a,t),u=void 0,!pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Kf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=ba(A),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){o=f=y;continue e}A=A.parentNode}}o=o.return}dp(function(){var J=f,he=du(a),ge=[];e:{var ie=Hp.get(t);if(ie!==void 0){var oe=ul,ke=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":oe=m_;break;case"focusin":ke="focus",oe=vu;break;case"focusout":ke="blur",oe=vu;break;case"beforeblur":case"afterblur":oe=vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=i_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=v_;break;case zp:case Fp:case Bp:oe=s_;break;case Ip:oe=S_;break;case"scroll":case"scrollend":oe=t_;break;case"wheel":oe=b_;break;case"copy":case"cut":case"paste":oe=l_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=gp;break;case"toggle":case"beforetoggle":oe=E_}var tt=(n&4)!==0,kt=!tt&&(t==="scroll"||t==="scrollend"),q=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var X=J,Q;X!==null;){var xe=X;if(Q=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||Q===null||q===null||(xe=Xs(X,q),xe!=null&&tt.push(Eo(X,xe,Q))),kt)break;X=X.return}0<tt.length&&(ie=new oe(ie,ke,null,a,he),ge.push({event:ie,listeners:tt}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ie&&a!==fu&&(ke=a.relatedTarget||a.fromElement)&&(ba(ke)||ke[Hi]))break e;if((oe||ie)&&(ie=he.window===he?he:(ie=he.ownerDocument)?ie.defaultView||ie.parentWindow:window,oe?(ke=a.relatedTarget||a.toElement,oe=J,ke=ke?ba(ke):null,ke!==null&&(kt=c(ke),tt=ke.tag,ke!==kt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(oe=null,ke=J),oe!==ke)){if(tt=mp,xe="onMouseLeave",q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=gp,xe="onPointerLeave",q="onPointerEnter",X="pointer"),kt=oe==null?ie:W(oe),Q=ke==null?ie:W(ke),ie=new tt(xe,X+"leave",oe,a,he),ie.target=kt,ie.relatedTarget=Q,xe=null,ba(he)===J&&(tt=new tt(q,X+"enter",ke,a,he),tt.target=Q,tt.relatedTarget=kt,xe=tt),kt=xe,oe&&ke)t:{for(tt=MS,q=oe,X=ke,Q=0,xe=q;xe;xe=tt(xe))Q++;xe=0;for(var Je=X;Je;Je=tt(Je))xe++;for(;0<Q-xe;)q=tt(q),Q--;for(;0<xe-Q;)X=tt(X),xe--;for(;Q--;){if(q===X||X!==null&&q===X.alternate){tt=q;break t}q=tt(q),X=tt(X)}tt=null}else tt=null;oe!==null&&lx(ge,ie,oe,tt,!1),ke!==null&&kt!==null&&lx(ge,kt,ke,tt,!0)}}e:{if(ie=J?W(J):window,oe=ie.nodeName&&ie.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ie.type==="file")var Ut=Tp;else if(Mp(ie))if(Ap)Ut=O_;else{Ut=L_;var Ye=U_}else oe=ie.nodeName,!oe||oe.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?J&&uu(J.elementType)&&(Ut=Tp):Ut=N_;if(Ut&&(Ut=Ut(t,J))){Ep(ge,Ut,a,he);break e}Ye&&Ye(t,ie,J),t==="focusout"&&J&&ie.type==="number"&&J.memoizedProps.value!=null&&Sn(ie,"number",ie.value)}switch(Ye=J?W(J):window,t){case"focusin":(Mp(Ye)||Ye.contentEditable==="true")&&(Hr=Ye,Eu=J,Js=null);break;case"focusout":Js=Eu=Hr=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Op(ge,a,he);break;case"selectionchange":if(z_)break;case"keydown":case"keyup":Op(ge,a,he)}var pt;if(Su)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Ir?yp(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(vp&&a.locale!=="ko"&&(Ir||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Ir&&(pt=hp()):(Ea=he,mu="value"in Ea?Ea.value:Ea.textContent,Ir=!0)),Ye=ec(J,bt),0<Ye.length&&(bt=new xp(bt,t,null,a,he),ge.push({event:bt,listeners:Ye}),pt?bt.data=pt:(pt=bp(a),pt!==null&&(bt.data=pt)))),(pt=A_?R_(t,a):C_(t,a))&&(bt=ec(J,"onBeforeInput"),0<bt.length&&(Ye=new xp("onBeforeInput","beforeinput",null,a,he),ge.push({event:Ye,listeners:bt}),Ye.data=pt)),_S(ge,t,J,a,he)}sx(ge,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ec(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xs(t,a),u!=null&&o.unshift(Eo(t,u,f)),u=Xs(t,n),u!=null&&o.push(Eo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function MS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function lx(t,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var A=a,B=A.alternate,J=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||J===null||(B=J,u?(J=Xs(a,f),J!=null&&y.unshift(Eo(a,J,B))):u||(J=Xs(a,f),J!=null&&y.push(Eo(a,J,B)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var ES=/\r\n?/g,TS=/\u0000|\uFFFD/g;function cx(t){return(typeof t=="string"?t:""+t).replace(ES,`
`).replace(TS,"")}function ux(t,n){return n=cx(n),cx(t)===n}function Vt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ci(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ci(t,""+o);break;case"className":Ct(t,"class",o);break;case"tabIndex":Ct(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(t,a,o);break;case"style":up(t,o,f);break;case"data":if(n!=="object"){Ct(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=sl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=sl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ki);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=sl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),ht(t,"popover",o);break;case"xlinkActuate":Dt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Dt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Dt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Dt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Dt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Dt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ht(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$v.get(a)||a,ht(t,a,o))}}function Qf(t,n,a,o,u,f){switch(a){case"style":up(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ci(t,o):(typeof o=="number"||typeof o=="bigint")&&Ci(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ce.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ht(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,f,y,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var A=f=y=u=null,B=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":u=he;break;case"type":y=he;break;case"checked":B=he;break;case"defaultChecked":J=he;break;case"value":f=he;break;case"defaultValue":A=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Vt(t,n,o,he,a,null)}}jt(t,f,A,B,J,y,u,!1);return;case"select":St("invalid",t),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:Vt(t,n,u,A,a,null)}n=f,a=y,t.multiple=!!o,n!=null?mn(t,!!o,n,!1):a!=null&&mn(t,!!o,a,!0);return;case"textarea":St("invalid",t),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Vt(t,n,y,A,a,null)}En(t,o,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Vt(t,n,B,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Mo.length;o++)St(Mo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,J,o,a,null)}return;default:if(uu(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&Qf(t,n,he,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Vt(t,n,A,o,a,null))}function AS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,A=null,B=null,J=null,he=null;for(oe in a){var ge=a[oe];if(a.hasOwnProperty(oe)&&ge!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":B=ge;default:o.hasOwnProperty(oe)||Vt(t,n,oe,null,o,ge)}}for(var ie in o){var oe=o[ie];if(ge=a[ie],o.hasOwnProperty(ie)&&(oe!=null||ge!=null))switch(ie){case"type":f=oe;break;case"name":u=oe;break;case"checked":J=oe;break;case"defaultChecked":he=oe;break;case"value":y=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==ge&&Vt(t,n,ie,oe,o,ge)}}Gi(t,y,A,B,J,he,f,u);return;case"select":oe=y=A=ie=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":oe=B;default:o.hasOwnProperty(f)||Vt(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":ie=f;break;case"defaultValue":A=f;break;case"multiple":y=f;default:f!==B&&Vt(t,n,u,f,o,B)}n=A,a=y,o=oe,ie!=null?mn(t,!!a,ie,!1):!!o!=!!a&&(n!=null?mn(t,!!a,n,!0):mn(t,!!a,a?[]:"",!1));return;case"textarea":oe=ie=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Vt(t,n,A,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ie=u;break;case"defaultValue":oe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Vt(t,n,y,u,o,f)}yn(t,ie,oe);return;case"option":for(var ke in a)if(ie=a[ke],a.hasOwnProperty(ke)&&ie!=null&&!o.hasOwnProperty(ke))switch(ke){case"selected":t.selected=!1;break;default:Vt(t,n,ke,null,o,ie)}for(B in o)if(ie=o[B],oe=a[B],o.hasOwnProperty(B)&&ie!==oe&&(ie!=null||oe!=null))switch(B){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Vt(t,n,B,ie,o,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ie=a[tt],a.hasOwnProperty(tt)&&ie!=null&&!o.hasOwnProperty(tt)&&Vt(t,n,tt,null,o,ie);for(J in o)if(ie=o[J],oe=a[J],o.hasOwnProperty(J)&&ie!==oe&&(ie!=null||oe!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:Vt(t,n,J,ie,o,oe)}return;default:if(uu(n)){for(var kt in a)ie=a[kt],a.hasOwnProperty(kt)&&ie!==void 0&&!o.hasOwnProperty(kt)&&Qf(t,n,kt,void 0,o,ie);for(he in o)ie=o[he],oe=a[he],!o.hasOwnProperty(he)||ie===oe||ie===void 0&&oe===void 0||Qf(t,n,he,ie,o,oe);return}}for(var q in a)ie=a[q],a.hasOwnProperty(q)&&ie!=null&&!o.hasOwnProperty(q)&&Vt(t,n,q,null,o,ie);for(ge in o)ie=o[ge],oe=a[ge],!o.hasOwnProperty(ge)||ie===oe||ie==null&&oe==null||Vt(t,n,ge,ie,o,oe)}function fx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function RS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,A=u.duration;if(f&&A&&fx(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],J=B.startTime;if(J>A)break;var he=B.transferSize,ge=B.initiatorType;he&&fx(ge)&&(B=B.responseEnd,y+=he*(B<A?1:(A-J)/(B-J)))}if(--o,n+=8*(f+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Jf=null,$f=null;function tc(t){return t.nodeType===9?t:t.ownerDocument}function dx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ed(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var td=null;function CS(){var t=window.event;return t&&t.type==="popstate"?t===td?!1:(td=t,!0):(td=null,!1)}var px=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,mx=typeof Promise=="function"?Promise:void 0,DS=typeof queueMicrotask=="function"?queueMicrotask:typeof mx<"u"?function(t){return mx.resolve(null).then(t).catch(US)}:px;function US(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function xx(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),hs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")To(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var y=f.nextSibling,A=f.nodeName;f[rr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&To(t.ownerDocument.body);a=u}while(a);hs(n)}function gx(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function nd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nd(a),ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function LS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[rr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function NS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function vx(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function id(t){return t.data==="$?"||t.data==="$~"}function ad(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function OS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var rd=null;function _x(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Sx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function yx(t,n,a){switch(n=tc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function To(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ks(t)}var hi=new Map,bx=new Set;function nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=Z.d;Z.d={f:PS,r:zS,D:FS,C:BS,L:IS,m:HS,X:VS,S:GS,M:kS};function PS(){var t=ra.f(),n=Yl();return t||n}function zS(t){var n=R(t);n!==null&&n.tag===5&&n.type==="form"?I0(n):ra.r(t)}var us=typeof document>"u"?null:document;function Mx(t,n,a){var o=us;if(o&&typeof n=="string"&&n){var u=Yt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),bx.has(u)||(bx.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),$(n),o.head.appendChild(n)))}}function FS(t){ra.D(t),Mx("dns-prefetch",t,null)}function BS(t,n){ra.C(t,n),Mx("preconnect",t,n)}function IS(t,n,a){ra.L(t,n,a);var o=us;if(o&&t&&n){var u='link[rel="preload"][as="'+Yt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Yt(a.imageSizes)+'"]')):u+='[href="'+Yt(t)+'"]';var f=u;switch(n){case"style":f=fs(t);break;case"script":f=ds(t)}hi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ao(f))||n==="script"&&o.querySelector(Ro(f))||(n=o.createElement("link"),Cn(n,"link",t),$(n),o.head.appendChild(n)))}}function HS(t,n){ra.m(t,n);var a=us;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Yt(o)+'"][href="'+Yt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ds(t)}if(!hi.has(f)&&(t=g({rel:"modulepreload",href:t},n),hi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}o=a.createElement("link"),Cn(o,"link",t),$(o),a.head.appendChild(o)}}}function GS(t,n,a){ra.S(t,n,a);var o=us;if(o&&t){var u=se(o).hoistableStyles,f=fs(t);n=n||"default";var y=u.get(f);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Ao(f)))A.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(f))&&sd(t,a);var B=y=o.createElement("link");$(B),Cn(B,"link",t),B._p=new Promise(function(J,he){B.onload=J,B.onerror=he}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ic(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(f,y)}}}function VS(t,n){ra.X(t,n);var a=us;if(a&&t){var o=se(a).hoistableScripts,u=ds(t),f=o.get(u);f||(f=a.querySelector(Ro(u)),f||(t=g({src:t,async:!0},n),(n=hi.get(u))&&od(t,n),f=a.createElement("script"),$(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function kS(t,n){ra.M(t,n);var a=us;if(a&&t){var o=se(a).hoistableScripts,u=ds(t),f=o.get(u);f||(f=a.querySelector(Ro(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&od(t,n),f=a.createElement("script"),$(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Ex(t,n,a,o){var u=(u=ae.current)?nc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fs(a.href),a=se(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fs(a.href);var f=se(u).hoistableStyles,y=f.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=u.querySelector(Ao(t)))&&!f._p&&(y.instance=f,y.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),f||XS(u,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ds(a),a=se(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function fs(t){return'href="'+Yt(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function Tx(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function XS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),$(n),t.head.appendChild(n))}function ds(t){return'[src="'+Yt(t)+'"]'}function Ro(t){return"script[async]"+t}function Ax(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(o)return n.instance=o,$(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),$(o),Cn(o,"style",u),ic(o,a.precedence,t),n.instance=o;case"stylesheet":u=fs(a.href);var f=t.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,$(f),f;o=Tx(a),(u=hi.get(u))&&sd(o,u),f=(t.ownerDocument||t).createElement("link"),$(f);var y=f;return y._p=new Promise(function(A,B){y.onload=A,y.onerror=B}),Cn(f,"link",o),n.state.loading|=4,ic(f,a.precedence,t),n.instance=f;case"script":return f=ds(a.src),(u=t.querySelector(Ro(f)))?(n.instance=u,$(u),u):(o=a,(u=hi.get(f))&&(o=g({},a),od(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),$(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,t));return n.instance}function ic(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ac=null;function Rx(t,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[rr]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var A=o.get(y);A?A.push(f):o.set(y,[f])}}return o}function Cx(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function WS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=fs(o.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=rc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,$(f);return}f=n.ownerDocument||n,o=Tx(o),(u=hi.get(u))&&sd(o,u),f=f.createElement("link"),$(f);var y=f;y._p=new Promise(function(A,B){y.onload=A,y.onerror=B}),Cn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=rc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ld=0;function YS(t,n){return t.stylesheets&&t.count===0&&oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ld===0&&(ld=62500*RS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ld?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var sc=null;function oc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,sc=new Map,n.forEach(jS,t),sc=null,rc.call(t))}function jS(t,n){if(!(n.state.loading&4)){var a=sc.get(t);if(a)var o=a.get(null);else{a=new Map,sc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function ZS(t,n,a,o,u,f,y,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Dx(t,n,a,o,u,f,y,A,B,J,he,ge){return t=new ZS(t,n,a,y,B,J,he,ge,A),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=Hu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Xu(f),t}function Ux(t){return t?(t=kr,t):kr}function Lx(t,n,a,o,u,f){u=Ux(u),o.context===null?o.context=u:o.pendingContext=u,o=Da(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ua(t,o,n),a!==null&&(kn(a,t,n),ro(a,t,n))}function Nx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function cd(t,n){Nx(t,n),(t=t.alternate)&&Nx(t,n)}function Ox(t){if(t.tag===13||t.tag===31){var n=cr(t,67108864);n!==null&&kn(n,t,67108864),cd(t,67108864)}}function Px(t){if(t.tag===13||t.tag===31){var n=ti();n=gi(n);var a=cr(t,n);a!==null&&kn(a,t,n),cd(t,n)}}var lc=!0;function KS(t,n,a,o){var u=z.T;z.T=null;var f=Z.p;try{Z.p=2,ud(t,n,a,o)}finally{Z.p=f,z.T=u}}function QS(t,n,a,o){var u=z.T;z.T=null;var f=Z.p;try{Z.p=8,ud(t,n,a,o)}finally{Z.p=f,z.T=u}}function ud(t,n,a,o){if(lc){var u=fd(o);if(u===null)Kf(t,n,o,cc,a),Fx(t,o);else if($S(u,t,n,a,o))o.stopPropagation();else if(Fx(t,o),n&4&&-1<JS.indexOf(t)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ee(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var B=1<<31-Xe(y);A.entanglements[1]|=B,y&=~B}Li(f),(Ot&6)===0&&(Wl=v()+500,bo(0))}}break;case 31:case 13:A=cr(f,2),A!==null&&kn(A,f,2),Yl(),cd(f,2)}if(f=fd(o),f===null&&Kf(t,n,o,cc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Kf(t,n,o,null,a)}}function fd(t){return t=du(t),dd(t)}var cc=null;function dd(t){if(cc=null,t=ba(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cc=t,null}function zx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(I()){case K:return 2;case fe:return 8;case ne:case ze:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var hd=!1,Va=null,ka=null,Xa=null,wo=new Map,Do=new Map,Wa=[],JS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fx(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Ox(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function $S(t,n,a,o,u){switch(n){case"focusin":return Va=Uo(Va,t,n,a,o,u),!0;case"dragenter":return ka=Uo(ka,t,n,a,o,u),!0;case"mouseover":return Xa=Uo(Xa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Uo(wo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,t,n,a,o,u)),!0}return!1}function Bx(t){var n=ba(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Vs(t.priority,function(){Px(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Vs(t.priority,function(){Px(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=fd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);fu=o,a.target.dispatchEvent(o),fu=null}else return n=R(a),n!==null&&Ox(n),t.blockedOn=a,!1;n.shift()}return!0}function Ix(t,n,a){uc(t)&&a.delete(n)}function ey(){hd=!1,Va!==null&&uc(Va)&&(Va=null),ka!==null&&uc(ka)&&(ka=null),Xa!==null&&uc(Xa)&&(Xa=null),wo.forEach(Ix),Do.forEach(Ix)}function fc(t,n){t.blockedOn===n&&(t.blockedOn=null,hd||(hd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ey)))}var dc=null;function Hx(t){dc!==t&&(dc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){dc===t&&(dc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(dd(o||a)===null)continue;break}var f=R(a);f!==null&&(t.splice(n,3),n-=3,ff(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function hs(t){function n(B){return fc(B,t)}Va!==null&&fc(Va,t),ka!==null&&fc(ka,t),Xa!==null&&fc(Xa,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<Wa.length;a++){var o=Wa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Bx(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[pn]||null;if(typeof f=="function")y||Hx(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[pn]||null)A=y.formAction;else if(dd(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Hx(a)}}}function Gx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function pd(t){this._internalRoot=t}hc.prototype.render=pd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ti();Lx(a,o,t,n,null,null)},hc.prototype.unmount=pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Lx(t.current,2,null,t,null,null),Yl(),n[Hi]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Gs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&Bx(t)}};var Vx=e.version;if(Vx!=="19.2.0")throw Error(r(527,Vx,"19.2.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var ty={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Me=pc.inject(ty),Te=pc}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Z0,f=K0,y=Q0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Dx(t,1,!1,null,null,a,o,null,u,f,y,Gx),t[Hi]=n.current,Zf(t),new pd(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Z0,y=K0,A=Q0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Dx(t,1,!0,n,a??null,o,u,B,f,y,A,Gx),n.context=Ux(null),a=n.current,o=ti(),o=gi(o),u=Da(o),u.callback=null,Ua(a,u,o),a=o,n.current.lanes=a,wn(n,a),Li(n),t[Hi]=n.current,Zf(t),new hc(n)},No.version="19.2.0",No}var Jx;function fy(){if(Jx)return gd.exports;Jx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),gd.exports=uy(),gd.exports}var dy=fy(),yd={exports:{}},bd={};var $x;function hy(){if($x)return bd;$x=1;var s=tu().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return bd.c=function(e){return s.H.useMemoCache(e)},bd}var eg;function py(){return eg||(eg=1,yd.exports=hy()),yd.exports}var Fn=py();var tg="popstate";function my(s={}){function e(r,l){let{pathname:c,search:d,hash:h}=r.location;return nh("",{pathname:c,search:d,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:ko(l)}return gy(e,i,null,s)}function $t(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function zi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xy(){return Math.random().toString(36).substring(2,10)}function ng(s,e){return{usr:s.state,key:s.key,idx:e}}function nh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ps(e):e,state:i,key:e&&e.key||r||xy()}}function ko({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ps(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function gy(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,d=l.history,h="POP",m=null,p=x();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function x(){return(d.state||{idx:null}).idx}function g(){h="POP";let b=x(),_=b==null?null:b-p;p=b,m&&m({action:h,location:T.location,delta:_})}function S(b,_){h="PUSH";let L=nh(T.location,b,_);p=x()+1;let U=ng(L,p),P=T.createHref(L);try{d.pushState(U,"",P)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;l.location.assign(P)}c&&m&&m({action:h,location:T.location,delta:1})}function M(b,_){h="REPLACE";let L=nh(T.location,b,_);p=x();let U=ng(L,p),P=T.createHref(L);d.replaceState(U,"",P),c&&m&&m({action:h,location:T.location,delta:0})}function E(b){return vy(b)}let T={get action(){return h},get location(){return s(l,d)},listen(b){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(tg,g),m=b,()=>{l.removeEventListener(tg,g),m=null}},createHref(b){return e(l,b)},createURL:E,encodeLocation(b){let _=E(b);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:S,replace:M,go(b){return d.go(b)}};return T}function vy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),$t(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:ko(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function rv(s,e,i="/"){return _y(s,e,i,!1)}function _y(s,e,i,r){let l=typeof e=="string"?Ps(e):e,c=va(l.pathname||"/",i);if(c==null)return null;let d=sv(s);Sy(d);let h=null;for(let m=0;h==null&&m<d.length;++m){let p=Uy(c);h=wy(d[m],p,r)}return h}function sv(s,e=[],i=[],r="",l=!1){let c=(d,h,m=l,p)=>{let x={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(r)&&m)return;$t(x.relativePath.startsWith(r),`Absolute route path "${x.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(r.length)}let g=pa([r,x.relativePath]),S=i.concat(x);d.children&&d.children.length>0&&($t(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),sv(d.children,e,S,g,m)),!(d.path==null&&!d.index)&&e.push({path:g,score:Ry(g,d.index),routesMeta:S})};return s.forEach((d,h)=>{if(d.path===""||!d.path?.includes("?"))c(d,h);else for(let m of ov(d.path))c(d,h,!0,m)}),e}function ov(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let d=ov(r.join("/")),h=[];return h.push(...d.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...d),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function Sy(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:Cy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var yy=/^:[\w-]+$/,by=3,My=2,Ey=1,Ty=10,Ay=-2,ig=s=>s==="*";function Ry(s,e){let i=s.split("/"),r=i.length;return i.some(ig)&&(r+=Ay),e&&(r+=My),i.filter(l=>!ig(l)).reduce((l,c)=>l+(yy.test(c)?by:c===""?Ey:Ty),r)}function Cy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function wy(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",d=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,x=c==="/"?e:e.slice(c.length)||"/",g=Yc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),S=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=Yc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(l,g.params),d.push({params:l,pathname:pa([c,g.pathname]),pathnameBase:Py(pa([c,g.pathnameBase])),route:S}),g.pathnameBase!=="/"&&(c=pa([c,g.pathnameBase]))}return d}function Yc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Dy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],d=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:x,isOptional:g},S)=>{if(x==="*"){let E=h[S]||"";d=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[S];return g&&!M?p[x]=void 0:p[x]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:d,pattern:s}}function Dy(s,e=!1,i=!0){zi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function Uy(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function va(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function Ly(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ps(s):s;return{pathname:i?i.startsWith("/")?i:Ny(i,e):e,search:zy(r),hash:Fy(l)}}function Ny(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Md(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oy(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function lv(s){let e=Oy(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function cv(s,e,i,r=!1){let l;typeof s=="string"?l=Ps(s):(l={...s},$t(!l.pathname||!l.pathname.includes("?"),Md("?","pathname","search",l)),$t(!l.pathname||!l.pathname.includes("#"),Md("#","pathname","hash",l)),$t(!l.search||!l.search.includes("#"),Md("#","search","hash",l)));let c=s===""||l.pathname==="",d=c?"/":l.pathname,h;if(d==null)h=i;else{let g=e.length-1;if(!r&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),g-=1;l.pathname=S.join("/")}h=g>=0?e[g]:"/"}let m=Ly(l,h),p=d&&d!=="/"&&d.endsWith("/"),x=(c||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var pa=s=>s.join("/").replace(/\/\/+/g,"/"),Py=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),zy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Fy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function By(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var uv=["POST","PUT","PATCH","DELETE"];new Set(uv);var Iy=["GET",...uv];new Set(Iy);var zs=me.createContext(null);zs.displayName="DataRouter";var nu=me.createContext(null);nu.displayName="DataRouterState";me.createContext(!1);var fv=me.createContext({isTransitioning:!1});fv.displayName="ViewTransition";var Hy=me.createContext(new Map);Hy.displayName="Fetchers";var Gy=me.createContext(null);Gy.displayName="Await";var Bi=me.createContext(null);Bi.displayName="Navigation";var Zo=me.createContext(null);Zo.displayName="Location";var ya=me.createContext({outlet:null,matches:[],isDataRoute:!1});ya.displayName="Route";var jh=me.createContext(null);jh.displayName="RouteError";function Vy(s,{relative:e}={}){$t(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=me.useContext(Bi),{hash:l,pathname:c,search:d}=Qo(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:pa([i,c])),r.createHref({pathname:h,search:d,hash:l})}function Ko(){return me.useContext(Zo)!=null}function Or(){return $t(Ko(),"useLocation() may be used only in the context of a <Router> component."),me.useContext(Zo).location}var dv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hv(s){me.useContext(Bi).static||me.useLayoutEffect(s)}function ky(){let{isDataRoute:s}=me.useContext(ya);return s?nb():Xy()}function Xy(){$t(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let s=me.useContext(zs),{basename:e,navigator:i}=me.useContext(Bi),{matches:r}=me.useContext(ya),{pathname:l}=Or(),c=JSON.stringify(lv(r)),d=me.useRef(!1);return hv(()=>{d.current=!0}),me.useCallback((m,p={})=>{if(zi(d.current,dv),!d.current)return;if(typeof m=="number"){i.go(m);return}let x=cv(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:pa([e,x.pathname])),(p.replace?i.replace:i.push)(x,p.state,p)},[e,i,c,l,s])}me.createContext(null);function Qo(s,{relative:e}={}){let{matches:i}=me.useContext(ya),{pathname:r}=Or(),l=JSON.stringify(lv(i));return me.useMemo(()=>cv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function Wy(s,e){return pv(s,e)}function pv(s,e,i,r,l){$t(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=me.useContext(Bi),{matches:d}=me.useContext(ya),h=d[d.length-1],m=h?h.params:{},p=h?h.pathname:"/",x=h?h.pathnameBase:"/",g=h&&h.route;{let L=g&&g.path||"";mv(p,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let S=Or(),M;if(e){let L=typeof e=="string"?Ps(e):e;$t(x==="/"||L.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${L.pathname}" was given in the \`location\` prop.`),M=L}else M=S;let E=M.pathname||"/",T=E;if(x!=="/"){let L=x.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(L.length).join("/")}let b=rv(s,{pathname:T});zi(g||b!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),zi(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Ky(b&&b.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:pa([x,c.encodeLocation?c.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?x:pa([x,c.encodeLocation?c.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),d,i,r,l);return e&&_?me.createElement(Zo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function qy(){let s=tb(),e=By(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",s),d=me.createElement(me.Fragment,null,me.createElement("p",null,"💿 Hey developer 👋"),me.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",me.createElement("code",{style:c},"ErrorBoundary")," or"," ",me.createElement("code",{style:c},"errorElement")," prop on your route.")),me.createElement(me.Fragment,null,me.createElement("h2",null,"Unexpected Application Error!"),me.createElement("h3",{style:{fontStyle:"italic"}},e),i?me.createElement("pre",{style:l},i):null,d)}var Yy=me.createElement(qy,null),jy=class extends me.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.unstable_onError?this.props.unstable_onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?me.createElement(ya.Provider,{value:this.props.routeContext},me.createElement(jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zy({routeContext:s,match:e,children:i}){let r=me.useContext(zs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),me.createElement(ya.Provider,{value:s},i)}function Ky(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,d=i?.errors;if(d!=null){let p=c.findIndex(x=>x.route.id&&d?.[x.route.id]!==void 0);$t(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let h=!1,m=-1;if(i)for(let p=0;p<c.length;p++){let x=c[p];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=p),x.route.id){let{loaderData:g,errors:S}=i,M=x.route.loader&&!g.hasOwnProperty(x.route.id)&&(!S||S[x.route.id]===void 0);if(x.route.lazy||M){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((p,x,g)=>{let S,M=!1,E=null,T=null;i&&(S=d&&x.route.id?d[x.route.id]:void 0,E=x.route.errorElement||Yy,h&&(m<0&&g===0?(mv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,T=null):m===g&&(M=!0,T=x.route.hydrateFallbackElement||null)));let b=e.concat(c.slice(0,g+1)),_=()=>{let L;return S?L=E:M?L=T:x.route.Component?L=me.createElement(x.route.Component,null):x.route.element?L=x.route.element:L=p,me.createElement(Zy,{match:x,routeContext:{outlet:p,matches:b,isDataRoute:i!=null},children:L})};return i&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?me.createElement(jy,{location:i.location,revalidation:i.revalidation,component:E,error:S,children:_(),routeContext:{outlet:null,matches:b,isDataRoute:!0},unstable_onError:r}):_()},null)}function Zh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qy(s){let e=me.useContext(zs);return $t(e,Zh(s)),e}function Jy(s){let e=me.useContext(nu);return $t(e,Zh(s)),e}function $y(s){let e=me.useContext(ya);return $t(e,Zh(s)),e}function Kh(s){let e=$y(s),i=e.matches[e.matches.length-1];return $t(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function eb(){return Kh("useRouteId")}function tb(){let s=me.useContext(jh),e=Jy("useRouteError"),i=Kh("useRouteError");return s!==void 0?s:e.errors?.[i]}function nb(){let{router:s}=Qy("useNavigate"),e=Kh("useNavigate"),i=me.useRef(!1);return hv(()=>{i.current=!0}),me.useCallback(async(l,c={})=>{zi(i.current,dv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var ag={};function mv(s,e,i){!e&&!ag[s]&&(ag[s]=!0,zi(!1,i))}me.memo(ib);function ib({routes:s,future:e,state:i,unstable_onError:r}){return pv(s,void 0,i,r,e)}function xv(s){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ab({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){$t(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),h=me.useMemo(()=>({basename:d,navigator:l,static:c,future:{}}),[d,l,c]);typeof i=="string"&&(i=Ps(i));let{pathname:m="/",search:p="",hash:x="",state:g=null,key:S="default"}=i,M=me.useMemo(()=>{let E=va(m,d);return E==null?null:{location:{pathname:E,search:p,hash:x,state:g,key:S},navigationType:r}},[d,m,p,x,g,S,r]);return zi(M!=null,`<Router basename="${d}"> is not able to match the URL "${m}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:me.createElement(Bi.Provider,{value:h},me.createElement(Zo.Provider,{children:e,value:M}))}function rb({children:s,location:e}){return Wy(ih(s),e)}function ih(s,e=[]){let i=[];return me.Children.forEach(s,(r,l)=>{if(!me.isValidElement(r))return;let c=[...e,l];if(r.type===me.Fragment){i.push.apply(i,ih(r.props.children,c));return}$t(r.type===xv,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=ih(r.props.children,c)),i.push(d)}),i}var Hc="get",Gc="application/x-www-form-urlencoded";function iu(s){return s!=null&&typeof s.tagName=="string"}function sb(s){return iu(s)&&s.tagName.toLowerCase()==="button"}function ob(s){return iu(s)&&s.tagName.toLowerCase()==="form"}function lb(s){return iu(s)&&s.tagName.toLowerCase()==="input"}function cb(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ub(s,e){return s.button===0&&(!e||e==="_self")&&!cb(s)}var mc=null;function fb(){if(mc===null)try{new FormData(document.createElement("form"),0),mc=!1}catch{mc=!0}return mc}var db=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ed(s){return s!=null&&!db.has(s)?(zi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gc}"`),null):s}function hb(s,e){let i,r,l,c,d;if(ob(s)){let h=s.getAttribute("action");r=h?va(h,e):null,i=s.getAttribute("method")||Hc,l=Ed(s.getAttribute("enctype"))||Gc,c=new FormData(s)}else if(sb(s)||lb(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?va(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Hc,l=Ed(s.getAttribute("formenctype"))||Ed(h.getAttribute("enctype"))||Gc,c=new FormData(h,s),!fb()){let{name:p,type:x,value:g}=s;if(x==="image"){let S=p?`${p}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else p&&c.append(p,g)}}else{if(iu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Hc,r=null,l=Gc,d=s}return c&&l==="text/plain"&&(d=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function pb(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&va(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function mb(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xb(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function gb(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let d=await mb(c,i);return d.links?d.links():[]}return[]}));return yb(r.flat(1).filter(xb).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function rg(s,e,i,r,l,c){let d=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>d(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let x=r.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(d(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function vb(s,e,{includeHydrateFallback:i}={}){return _b(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function _b(s){return[...new Set(s)]}function Sb(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function yb(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(Sb(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function gv(){let s=me.useContext(zs);return Qh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function bb(){let s=me.useContext(nu);return Qh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Jh=me.createContext(void 0);Jh.displayName="FrameworkContext";function vv(){let s=me.useContext(Jh);return Qh(s,"You must render this element inside a <HydratedRouter> element"),s}function Mb(s,e){let i=me.useContext(Jh),[r,l]=me.useState(!1),[c,d]=me.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=e,S=me.useRef(null);me.useEffect(()=>{if(s==="render"&&d(!0),s==="viewport"){let T=_=>{_.forEach(L=>{d(L.isIntersecting)})},b=new IntersectionObserver(T,{threshold:.5});return S.current&&b.observe(S.current),()=>{b.disconnect()}}},[s]),me.useEffect(()=>{if(r){let T=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),d(!1)};return i?s!=="intent"?[c,S,{}]:[c,S,{onFocus:Oo(h,M),onBlur:Oo(m,E),onMouseEnter:Oo(p,M),onMouseLeave:Oo(x,E),onTouchStart:Oo(g,M)}]:[!1,S,{}]}function Oo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function Eb({page:s,...e}){let{router:i}=gv(),r=me.useMemo(()=>rv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?me.createElement(Ab,{page:s,matches:r,...e}):null}function Tb(s){let{manifest:e,routeModules:i}=vv(),[r,l]=me.useState([]);return me.useEffect(()=>{let c=!1;return gb(s,e,i).then(d=>{c||l(d)}),()=>{c=!0}},[s,e,i]),r}function Ab({page:s,matches:e,...i}){let r=Or(),{manifest:l,routeModules:c}=vv(),{basename:d}=gv(),{loaderData:h,matches:m}=bb(),p=me.useMemo(()=>rg(s,e,m,l,r,"data"),[s,e,m,l,r]),x=me.useMemo(()=>rg(s,e,m,l,r,"assets"),[s,e,m,l,r]),g=me.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(e.forEach(_=>{let L=l.routes[_.route.id];!L||!L.hasLoader||(!p.some(U=>U.route.id===_.route.id)&&_.route.id in h&&c[_.route.id]?.shouldRevalidate||L.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let b=pb(s,d,"data");return T&&E.size>0&&b.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[b.pathname+b.search]},[d,h,r,l,p,e,s,c]),S=me.useMemo(()=>vb(x,l),[x,l]),M=Tb(x);return me.createElement(me.Fragment,null,g.map(E=>me.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),S.map(E=>me.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:T})=>me.createElement("link",{key:E,nonce:i.nonce,...T})))}function Rb(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var _v=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_v&&(window.__reactRouterVersion="7.9.5")}catch{}function Cb({basename:s,children:e,window:i}){let r=me.useRef();r.current==null&&(r.current=my({window:i,v5Compat:!0}));let l=r.current,[c,d]=me.useState({action:l.action,location:l.location}),h=me.useCallback(m=>{me.startTransition(()=>d(m))},[d]);return me.useLayoutEffect(()=>l.listen(h),[l,h]),me.createElement(ab,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var Sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jo=me.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:d,state:h,target:m,to:p,preventScrollReset:x,viewTransition:g,...S},M){let{basename:E}=me.useContext(Bi),T=typeof p=="string"&&Sv.test(p),b,_=!1;if(typeof p=="string"&&T&&(b=p,_v))try{let w=new URL(window.location.href),C=p.startsWith("//")?new URL(w.protocol+p):new URL(p),k=va(C.pathname,E);C.origin===w.origin&&k!=null?p=k+C.search+C.hash:_=!0}catch{zi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Vy(p,{relative:l}),[U,P,V]=Mb(r,S),N=Lb(p,{replace:d,state:h,target:m,preventScrollReset:x,relative:l,viewTransition:g});function F(w){e&&e(w),w.defaultPrevented||N(w)}let ee=me.createElement("a",{...S,...V,href:b||L,onClick:_||c?e:F,ref:Rb(M,P),target:m,"data-discover":!T&&i==="render"?"true":void 0});return U&&!T?me.createElement(me.Fragment,null,ee,me.createElement(Eb,{page:L})):ee});Jo.displayName="Link";var wb=me.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:d,viewTransition:h,children:m,...p},x){let g=Qo(d,{relative:p.relative}),S=Or(),M=me.useContext(nu),{navigator:E,basename:T}=me.useContext(Bi),b=M!=null&&Fb(g)&&h===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,L=S.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&T&&(U=va(U,T)||U);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let V=L===_||!l&&L.startsWith(_)&&L.charAt(P)==="/",N=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),F={isActive:V,isPending:N,isTransitioning:b},ee=V?e:void 0,w;typeof r=="function"?w=r(F):w=[r,V?"active":null,N?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let C=typeof c=="function"?c(F):c;return me.createElement(Jo,{...p,"aria-current":ee,className:w,ref:x,style:C,to:d,viewTransition:h},typeof m=="function"?m(F):m)});wb.displayName="NavLink";var Db=me.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:d=Hc,action:h,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,...S},M)=>{let E=Pb(),T=zb(h,{relative:p}),b=d.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&Sv.test(h),L=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let P=U.nativeEvent.submitter,V=P?.getAttribute("formmethod")||d;E(P||U.currentTarget,{fetcherKey:e,method:V,navigate:i,replace:l,state:c,relative:p,preventScrollReset:x,viewTransition:g})};return me.createElement("form",{ref:M,method:b,action:T,onSubmit:r?m:L,...S,"data-discover":!_&&s==="render"?"true":void 0})});Db.displayName="Form";function Ub(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yv(s){let e=me.useContext(zs);return $t(e,Ub(s)),e}function Lb(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:d}={}){let h=ky(),m=Or(),p=Qo(s,{relative:c});return me.useCallback(x=>{if(ub(x,e)){x.preventDefault();let g=i!==void 0?i:ko(m)===ko(p);h(s,{replace:g,state:r,preventScrollReset:l,relative:c,viewTransition:d})}},[m,h,p,i,r,e,s,l,c,d])}var Nb=0,Ob=()=>`__${String(++Nb)}__`;function Pb(){let{router:s}=yv("useSubmit"),{basename:e}=me.useContext(Bi),i=eb();return me.useCallback(async(r,l={})=>{let{action:c,method:d,encType:h,formData:m,body:p}=hb(r,e);if(l.navigate===!1){let x=l.fetcherKey||Ob();await s.fetch(x,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||d,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||d,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function zb(s,{relative:e}={}){let{basename:i}=me.useContext(Bi),r=me.useContext(ya);$t(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Qo(s||".",{relative:e})},d=Or();if(s==null){c.search=d.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let x=h.toString();c.search=x?`?${x}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:pa([i,c.pathname])),ko(c)}function Fb(s,{relative:e}={}){let i=me.useContext(fv);$t(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=yv("useViewTransitionState"),l=Qo(s,{relative:e});if(!i.isTransitioning)return!1;let c=va(i.currentLocation.pathname,r)||i.currentLocation.pathname,d=va(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Yc(l.pathname,d)!=null||Yc(l.pathname,c)!=null}const $h="181",Bb=0,sg=1,Ib=2,bv=1,Hb=2,da=3,nr=0,Wn=1,ha=2,ma=0,Cs=1,ah=2,og=3,lg=4,Gb=5,wr=100,Vb=101,kb=102,Xb=103,Wb=104,qb=200,Yb=201,jb=202,Zb=203,rh=204,sh=205,Kb=206,Qb=207,Jb=208,$b=209,e1=210,t1=211,n1=212,i1=213,a1=214,oh=0,lh=1,ch=2,Ds=3,uh=4,fh=5,dh=6,hh=7,Mv=0,r1=1,s1=2,tr=0,o1=1,l1=2,c1=3,u1=4,f1=5,d1=6,h1=7,Ev=300,Us=301,Ls=302,ph=303,mh=304,au=306,xh=1e3,ai=1001,gh=1002,ri=1003,p1=1004,xc=1005,Nn=1006,Td=1007,Ur=1008,_a=1009,Tv=1010,Av=1011,Xo=1012,ep=1013,Nr=1014,Oi=1015,Pr=1016,tp=1017,np=1018,Wo=1020,Rv=35902,Cv=35899,wv=1021,Dv=1022,xi=1023,qo=1026,Yo=1027,Uv=1028,ip=1029,ap=1030,rp=1031,sp=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,vh=35840,_h=35841,Sh=35842,yh=35843,bh=36196,Mh=37492,Eh=37496,Th=37808,Ah=37809,Rh=37810,Ch=37811,wh=37812,Dh=37813,Uh=37814,Lh=37815,Nh=37816,Oh=37817,Ph=37818,zh=37819,Fh=37820,Bh=37821,Ih=36492,Hh=36494,Gh=36495,Vh=36283,kh=36284,Xh=36285,Wh=36286,m1=3200,x1=3201,g1=0,v1=1,$a="",mi="srgb",Ns="srgb-linear",jc="linear",Xt="srgb",ps=7680,cg=519,_1=512,S1=513,y1=514,Lv=515,b1=516,M1=517,E1=518,T1=519,ug=35044,fg="300 es",Pi=2e3,Zc=2001;function Nv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Kc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function A1(){const s=Kc("canvas");return s.style.display="block",s}const dg={};function hg(...s){const e="THREE."+s.shift();console.log(e,...s)}function ot(...s){const e="THREE."+s.shift();console.warn(e,...s)}function sn(...s){const e="THREE."+s.shift();console.error(e,...s)}function jo(...s){const e=s.join(" ");e in dg||(dg[e]=!0,ot(...s))}function R1(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ad=Math.PI/180,qh=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function At(s,e,i){return Math.max(e,Math.min(i,s))}function C1(s,e){return(s%e+e)%e}function Rd(s,e,i){return(1-i)*s+i*e}function Po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,i=0){ct.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class el{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3],S=c[d+0],M=c[d+1],E=c[d+2],T=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h>=1){e[i+0]=S,e[i+1]=M,e[i+2]=E,e[i+3]=T;return}if(g!==T||m!==S||p!==M||x!==E){let b=m*S+p*M+x*E+g*T;b<0&&(S=-S,M=-M,E=-E,T=-T,b=-b);let _=1-h;if(b<.9995){const L=Math.acos(b),U=Math.sin(L);_=Math.sin(_*L)/U,h=Math.sin(h*L)/U,m=m*_+S*h,p=p*_+M*h,x=x*_+E*h,g=g*_+T*h}else{m=m*_+S*h,p=p*_+M*h,x=x*_+E*h,g=g*_+T*h;const L=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=L,p*=L,x*=L,g*=L}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=c[d],S=c[d+1],M=c[d+2],E=c[d+3];return e[i]=h*E+x*g+m*M-p*S,e[i+1]=m*E+x*S+p*g-h*M,e[i+2]=p*E+x*M+h*S-m*g,e[i+3]=x*E-h*g-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),g=h(c/2),S=m(r/2),M=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=S*x*g+p*M*E,this._y=p*M*g-S*x*E,this._z=p*x*E+S*M*g,this._w=p*x*g-S*M*E;break;case"YXZ":this._x=S*x*g+p*M*E,this._y=p*M*g-S*x*E,this._z=p*x*E-S*M*g,this._w=p*x*g+S*M*E;break;case"ZXY":this._x=S*x*g-p*M*E,this._y=p*M*g+S*x*E,this._z=p*x*E+S*M*g,this._w=p*x*g-S*M*E;break;case"ZYX":this._x=S*x*g-p*M*E,this._y=p*M*g+S*x*E,this._z=p*x*E-S*M*g,this._w=p*x*g+S*M*E;break;case"YZX":this._x=S*x*g+p*M*E,this._y=p*M*g+S*x*E,this._z=p*x*E-S*M*g,this._w=p*x*g-S*M*E;break;case"XZY":this._x=S*x*g-p*M*E,this._y=p*M*g-S*x*E,this._z=p*x*E+S*M*g,this._w=p*x*g+S*M*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=r+h+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-c*m,this._y=l*x+d*m+c*h-r*p,this._z=c*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(pg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(pg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),x=2*(h*i-c*l),g=2*(c*r-d*i);return this.x=i+m*p+d*g-h*x,this.y=r+m*x+h*p-c*g,this.z=l+m*g+c*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cd.copy(this).projectOnVector(e),this.sub(Cd)}reflect(e){return this.sub(Cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cd=new le,pg=new el;class mt{constructor(e,i,r,l,c,d,h,m,p){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p)}set(e,i,r,l,c,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],g=r[7],S=r[2],M=r[5],E=r[8],T=l[0],b=l[3],_=l[6],L=l[1],U=l[4],P=l[7],V=l[2],N=l[5],F=l[8];return c[0]=d*T+h*L+m*V,c[3]=d*b+h*U+m*N,c[6]=d*_+h*P+m*F,c[1]=p*T+x*L+g*V,c[4]=p*b+x*U+g*N,c[7]=p*_+x*P+g*F,c[2]=S*T+M*L+E*V,c[5]=S*b+M*U+E*N,c[8]=S*_+M*P+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-r*c*x+r*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*d-h*p,S=h*m-x*c,M=p*c-d*m,E=i*g+r*S+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(l*p-x*r)*T,e[2]=(h*r-l*d)*T,e[3]=S*T,e[4]=(x*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=M*T,e[7]=(r*m-p*i)*T,e[8]=(d*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(wd.makeScale(e,i)),this}rotate(e){return this.premultiply(wd.makeRotation(-e)),this}translate(e,i){return this.premultiply(wd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wd=new mt,mg=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xg=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w1(){const s={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Xt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ns]:{primaries:e,whitePoint:r,transfer:jc,toXYZ:mg,fromXYZ:xg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:mg,fromXYZ:xg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const Nt=w1();function xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ms;class D1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ms===void 0&&(ms=Kc("canvas")),ms.width=e.width,ms.height=e.height;const l=ms.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ms}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Kc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U1=0;class op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Dd(l[d].image)):c.push(Dd(l[d]))}else c=Dd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Dd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?D1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let L1=0;const Ud=new le;class zn extends Fs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=ai,l=ai,c=Nn,d=Ur,h=xi,m=_a,p=zn.DEFAULT_ANISOTROPY,x=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=$o(),this.name="",this.source=new op(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Ev;zn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],S=m[1],M=m[5],E=m[9],T=m[2],b=m[6],_=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-T)<.01&&Math.abs(E-b)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+T)<.1&&Math.abs(E+b)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,P=(M+1)/2,V=(_+1)/2,N=(x+S)/4,F=(g+T)/4,ee=(E+b)/4;return U>P&&U>V?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=N/r,c=F/r):P>V?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=N/l,c=ee/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=F/c,l=ee/c),this.set(r,l,c,i),this}let L=Math.sqrt((b-E)*(b-E)+(g-T)*(g-T)+(S-x)*(S-x));return Math.abs(L)<.001&&(L=1),this.x=(b-E)/L,this.y=(g-T)/L,this.z=(S-x)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=At(this.x,e.x,i.x),this.y=At(this.y,e.y,i.y),this.z=At(this.z,e.z,i.z),this.w=At(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=At(this.x,e,i),this.y=At(this.y,e,i),this.z=At(this.z,e,i),this.w=At(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N1 extends Fs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new op(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends N1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Ov extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O1 extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,yi):yi.fromBufferAttribute(c,d),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gc.copy(r.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),vc.subVectors(this.max,zo),xs.subVectors(e.a,zo),gs.subVectors(e.b,zo),vs.subVectors(e.c,zo),Ya.subVectors(gs,xs),ja.subVectors(vs,gs),br.subVectors(xs,vs);let i=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-br.z,br.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,br.z,0,-br.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-br.y,br.x,0];return!Ld(i,xs,gs,vs,vc)||(i=[1,0,0,0,1,0,0,0,1],!Ld(i,xs,gs,vs,vc))?!1:(_c.crossVectors(Ya,ja),i=[_c.x,_c.y,_c.z],Ld(i,xs,gs,vs,vc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sa=[new le,new le,new le,new le,new le,new le,new le,new le],yi=new le,gc=new tl,xs=new le,gs=new le,vs=new le,Ya=new le,ja=new le,br=new le,zo=new le,vc=new le,_c=new le,Mr=new le;function Ld(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Mr.fromArray(s,c);const h=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),p=i.dot(Mr),x=r.dot(Mr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const P1=new tl,Fo=new le,Nd=new le;class ru{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):P1.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Nd)),this.expandByPoint(Fo.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oa=new le,Od=new le,Sc=new le,Za=new le,Pd=new le,yc=new le,zd=new le;class Pv{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Od.copy(e).add(i).multiplyScalar(.5),Sc.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(Od);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Sc),h=Za.dot(this.direction),m=-Za.dot(Sc),p=Za.lengthSq(),x=Math.abs(1-d*d);let g,S,M,E;if(x>0)if(g=d*m-h,S=d*h-m,E=c*x,g>=0)if(S>=-E)if(S<=E){const T=1/x;g*=T,S*=T,M=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=c,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S<=-E?(g=Math.max(0,-(-d*c+h)),S=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+S*(S+2*m)+p):S<=E?(g=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(g=Math.max(0,-(d*c+h)),S=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+S*(S+2*m)+p);else S=d>0?-c:c,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Od).addScaledVector(Sc,S),M}intersectSphere(e,i){oa.subVectors(e.center,this.origin);const r=oa.dot(this.direction),l=oa.dot(oa)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(c=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,i,r,l,c){Pd.subVectors(i,e),yc.subVectors(r,e),zd.crossVectors(Pd,yc);let d=this.direction.dot(zd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Za.subVectors(this.origin,e);const m=h*this.direction.dot(yc.crossVectors(Za,yc));if(m<0)return null;const p=h*this.direction.dot(Pd.cross(Za));if(p<0||m+p>d)return null;const x=-h*Za.dot(zd);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,i,r,l,c,d,h,m,p,x,g,S,M,E,T,b){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p,x,g,S,M,E,T,b)}set(e,i,r,l,c,d,h,m,p,x,g,S,M,E,T,b){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=S,_[3]=M,_[7]=E,_[11]=T,_[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),d=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const S=d*x,M=d*g,E=h*x,T=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=S-T*p,i[9]=-h*m,i[2]=T-S*p,i[6]=E+M*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*x,M=m*g,E=p*x,T=p*g;i[0]=S+T*h,i[4]=E*h-M,i[8]=d*p,i[1]=d*g,i[5]=d*x,i[9]=-h,i[2]=M*h-E,i[6]=T+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*x,M=m*g,E=p*x,T=p*g;i[0]=S-T*h,i[4]=-d*g,i[8]=E+M*h,i[1]=M+E*h,i[5]=d*x,i[9]=T-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*x,M=d*g,E=h*x,T=h*g;i[0]=m*x,i[4]=E*p-M,i[8]=S*p+T,i[1]=m*g,i[5]=T*p+S,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,M=d*p,E=h*m,T=h*p;i[0]=m*x,i[4]=T-S*g,i[8]=E*g+M,i[1]=g,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=M*g+E,i[10]=S-T*g}else if(e.order==="XZY"){const S=d*m,M=d*p,E=h*m,T=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+T,i[5]=d*x,i[9]=M*g-E,i[2]=E*g-M,i[6]=h*x,i[10]=T*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z1,e,F1)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ka.crossVectors(r,ni),Ka.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ka.crossVectors(r,ni)),Ka.normalize(),bc.crossVectors(ni,Ka),l[0]=Ka.x,l[4]=bc.x,l[8]=ni.x,l[1]=Ka.y,l[5]=bc.y,l[9]=ni.y,l[2]=Ka.z,l[6]=bc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],g=r[5],S=r[9],M=r[13],E=r[2],T=r[6],b=r[10],_=r[14],L=r[3],U=r[7],P=r[11],V=r[15],N=l[0],F=l[4],ee=l[8],w=l[12],C=l[1],k=l[5],te=l[9],ce=l[13],de=l[2],pe=l[6],z=l[10],Z=l[14],Y=l[3],_e=l[7],ye=l[11],O=l[15];return c[0]=d*N+h*C+m*de+p*Y,c[4]=d*F+h*k+m*pe+p*_e,c[8]=d*ee+h*te+m*z+p*ye,c[12]=d*w+h*ce+m*Z+p*O,c[1]=x*N+g*C+S*de+M*Y,c[5]=x*F+g*k+S*pe+M*_e,c[9]=x*ee+g*te+S*z+M*ye,c[13]=x*w+g*ce+S*Z+M*O,c[2]=E*N+T*C+b*de+_*Y,c[6]=E*F+T*k+b*pe+_*_e,c[10]=E*ee+T*te+b*z+_*ye,c[14]=E*w+T*ce+b*Z+_*O,c[3]=L*N+U*C+P*de+V*Y,c[7]=L*F+U*k+P*pe+V*_e,c[11]=L*ee+U*te+P*z+V*ye,c[15]=L*w+U*ce+P*Z+V*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],S=e[10],M=e[14],E=e[3],T=e[7],b=e[11],_=e[15];return E*(+c*m*g-l*p*g-c*h*S+r*p*S+l*h*M-r*m*M)+T*(+i*m*M-i*p*S+c*d*S-l*d*M+l*p*x-c*m*x)+b*(+i*p*g-i*h*M-c*d*g+r*d*M+c*h*x-r*p*x)+_*(-l*h*x-i*m*g+i*h*S+l*d*g-r*d*S+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],S=e[10],M=e[11],E=e[12],T=e[13],b=e[14],_=e[15],L=g*b*p-T*S*p+T*m*M-h*b*M-g*m*_+h*S*_,U=E*S*p-x*b*p-E*m*M+d*b*M+x*m*_-d*S*_,P=x*T*p-E*g*p+E*h*M-d*T*M-x*h*_+d*g*_,V=E*g*m-x*T*m-E*h*S+d*T*S+x*h*b-d*g*b,N=i*L+r*U+l*P+c*V;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=L*F,e[1]=(T*S*c-g*b*c-T*l*M+r*b*M+g*l*_-r*S*_)*F,e[2]=(h*b*c-T*m*c+T*l*p-r*b*p-h*l*_+r*m*_)*F,e[3]=(g*m*c-h*S*c-g*l*p+r*S*p+h*l*M-r*m*M)*F,e[4]=U*F,e[5]=(x*b*c-E*S*c+E*l*M-i*b*M-x*l*_+i*S*_)*F,e[6]=(E*m*c-d*b*c-E*l*p+i*b*p+d*l*_-i*m*_)*F,e[7]=(d*S*c-x*m*c+x*l*p-i*S*p-d*l*M+i*m*M)*F,e[8]=P*F,e[9]=(E*g*c-x*T*c-E*r*M+i*T*M+x*r*_-i*g*_)*F,e[10]=(d*T*c-E*h*c+E*r*p-i*T*p-d*r*_+i*h*_)*F,e[11]=(x*h*c-d*g*c-x*r*p+i*g*p+d*r*M-i*h*M)*F,e[12]=V*F,e[13]=(x*T*l-E*g*l+E*r*S-i*T*S-x*r*b+i*g*b)*F,e[14]=(E*h*l-d*T*l-E*r*m+i*T*m+d*r*b-i*h*b)*F,e[15]=(d*g*l-x*h*l+x*r*m-i*g*m-d*r*S+i*h*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,m=e.z,p=c*d,x=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,x=d+d,g=h+h,S=c*p,M=c*x,E=c*g,T=d*x,b=d*g,_=h*g,L=m*p,U=m*x,P=m*g,V=r.x,N=r.y,F=r.z;return l[0]=(1-(T+_))*V,l[1]=(M+P)*V,l[2]=(E-U)*V,l[3]=0,l[4]=(M-P)*N,l[5]=(1-(S+_))*N,l[6]=(b+L)*N,l[7]=0,l[8]=(E+U)*F,l[9]=(b-L)*F,l[10]=(1-(S+T))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const d=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const p=1/c,x=1/d,g=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=x,bi.elements[5]*=x,bi.elements[6]*=x,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d,h=Pi,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let E,T;if(m)E=c/(d-c),T=d*c/(d-c);else if(h===Pi)E=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===Zc)E=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=Pi,m=!1){const p=this.elements,x=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let E,T;if(m)E=1/(d-c),T=d/(d-c);else if(h===Pi)E=-2/(d-c),T=-(d+c)/(d-c);else if(h===Zc)E=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new le,bi=new hn,z1=new le(0,0,0),F1=new le(1,1,1),Ka=new le,bc=new le,ni=new le,gg=new hn,vg=new el;class Sa{constructor(e=0,i=0,r=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return vg.setFromEuler(this),this.setFromQuaternion(vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B1=0;const _g=new le,Ss=new el,la=new hn,Mc=new le,Bo=new le,I1=new le,H1=new el,Sg=new le(1,0,0),yg=new le(0,1,0),bg=new le(0,0,1),Mg={type:"added"},G1={type:"removed"},ys={type:"childadded",child:null},Fd={type:"childremoved",child:null};class qn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new le,i=new Sa,r=new el,l=new le(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new mt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Sg,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(bg,e)}translateOnAxis(e,i){return _g.copy(e).applyQuaternion(this.quaternion),this.position.add(_g.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Sg,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(bg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Mc.copy(e):Mc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Bo,Mc,this.up):la.lookAt(Mc,Bo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(la),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(sn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mg),ys.child=e,this.dispatchEvent(ys),ys.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(G1),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mg),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,I1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,H1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),g=d(e.shapes),S=d(e.skeletons),M=d(e.animations),E=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new le(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new le,ca=new le,Bd=new le,ua=new le,bs=new le,Ms=new le,Eg=new le,Id=new le,Hd=new le,Gd=new le,Vd=new nn,kd=new nn,Xd=new nn;class Ti{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Mi.subVectors(e,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Mi.subVectors(l,i),ca.subVectors(r,i),Bd.subVectors(e,i);const d=Mi.dot(Mi),h=Mi.dot(ca),m=Mi.dot(Bd),p=ca.dot(ca),x=ca.dot(Bd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const S=1/g,M=(p*m-h*x)*S,E=(d*x-h*m)*S;return c.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,r,l,c,d,h,m){return this.getBarycoord(e,i,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(d,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return Vd.setScalar(0),kd.setScalar(0),Xd.setScalar(0),Vd.fromBufferAttribute(e,i),kd.fromBufferAttribute(e,r),Xd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Vd,c.x),d.addScaledVector(kd,c.y),d.addScaledVector(Xd,c.z),d}static isFrontFacing(e,i,r,l){return Mi.subVectors(r,i),ca.subVectors(e,i),Mi.cross(ca).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Mi.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ti.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;bs.subVectors(l,r),Ms.subVectors(c,r),Id.subVectors(e,r);const m=bs.dot(Id),p=Ms.dot(Id);if(m<=0&&p<=0)return i.copy(r);Hd.subVectors(e,l);const x=bs.dot(Hd),g=Ms.dot(Hd);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(bs,d);Gd.subVectors(e,c);const M=bs.dot(Gd),E=Ms.dot(Gd);if(E>=0&&M<=E)return i.copy(c);const T=M*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Ms,h);const b=x*E-M*g;if(b<=0&&g-x>=0&&M-E>=0)return Eg.subVectors(c,l),h=(g-x)/(g-x+(M-E)),i.copy(l).addScaledVector(Eg,h);const _=1/(b+T+S);return d=T*_,h=S*_,i.copy(r).addScaledVector(bs,d).addScaledVector(Ms,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Wd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Pt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Nt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Nt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Nt.workingColorSpace){if(e=C1(e,1),i=At(i,0,1),r=At(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Wd(d,c,e+1/3),this.g=Wd(d,c,e),this.b=Wd(d,c,e-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const r=Fv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Nt.workingToColorSpace(Ln.copy(this),e),Math.round(At(Ln.r*255,0,255))*65536+Math.round(At(Ln.g*255,0,255))*256+Math.round(At(Ln.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Nt.workingColorSpace){Nt.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=x<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=mi){Nt.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+i,Qa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Qa),e.getHSL(Ec);const r=Rd(Qa.h,Ec.h,i),l=Rd(Qa.s,Ec.s,i),c=Rd(Qa.l,Ec.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Pt;Pt.NAMES=Fv;let V1=0;class nl extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Cs,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rh&&(r.blendSrc=this.blendSrc),this.blendDst!==sh&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bv extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new le,Tc=new ct;let k1=0;class Ai{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=ug,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(e),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Po(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ug&&(e.usage=this.usage),e}}class Iv extends Ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Hv extends Ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ga extends Ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}let X1=0;const pi=new hn,qd=new qn,Es=new le,ii=new tl,Io=new tl,Mn=new le;class Ii extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nv(e)?Hv:Iv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,r){return pi.makeTranslation(e,i,r),this.applyMatrix4(pi),this}scale(e,i,r){return pi.makeScale(e,i,r),this.applyMatrix4(pi),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ga(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ru);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Io.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ii.min,Io.min),ii.expandByPoint(Mn),Mn.addVectors(ii.max,Io.max),ii.expandByPoint(Mn)):(ii.expandByPoint(Io.min),ii.expandByPoint(Io.max))}ii.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Mn.fromBufferAttribute(h,p),m&&(Es.fromBufferAttribute(e,p),Mn.add(Es)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ee=0;ee<r.count;ee++)h[ee]=new le,m[ee]=new le;const p=new le,x=new le,g=new le,S=new ct,M=new ct,E=new ct,T=new le,b=new le;function _(ee,w,C){p.fromBufferAttribute(r,ee),x.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),S.fromBufferAttribute(c,ee),M.fromBufferAttribute(c,w),E.fromBufferAttribute(c,C),x.sub(p),g.sub(p),M.sub(S),E.sub(S);const k=1/(M.x*E.y-E.x*M.y);isFinite(k)&&(T.copy(x).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(k),b.copy(g).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(k),h[ee].add(T),h[w].add(T),h[C].add(T),m[ee].add(b),m[w].add(b),m[C].add(b))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let ee=0,w=L.length;ee<w;++ee){const C=L[ee],k=C.start,te=C.count;for(let ce=k,de=k+te;ce<de;ce+=3)_(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const U=new le,P=new le,V=new le,N=new le;function F(ee){V.fromBufferAttribute(l,ee),N.copy(V);const w=h[ee];U.copy(w),U.sub(V.multiplyScalar(V.dot(w))).normalize(),P.crossVectors(N,w);const k=P.dot(m[ee])<0?-1:1;d.setXYZW(ee,U.x,U.y,U.z,k)}for(let ee=0,w=L.length;ee<w;++ee){const C=L[ee],k=C.start,te=C.count;for(let ce=k,de=k+te;ce<de;ce+=3)F(e.getX(ce+0)),F(e.getX(ce+1)),F(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new le,c=new le,d=new le,h=new le,m=new le,p=new le,x=new le,g=new le;if(e)for(let S=0,M=e.count;S<M;S+=3){const E=e.getX(S+0),T=e.getX(S+1),b=e.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,b),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,b),h.add(x),m.add(x),p.add(x),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,S=new p.constructor(m.length*x);let M=0,E=0;for(let T=0,b=m.length;T<b;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*x;for(let _=0;_<x;_++)S[E++]=p[M++]}return new Ai(S,x,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ii,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const S=p[x],M=e(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let S=0,M=g.length;S<M;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tg=new hn,Er=new Pv,Ac=new ru,Ag=new le,Rc=new le,Cc=new le,wc=new le,Yd=new le,Dc=new le,Rg=new le,Uc=new le;class Ri extends qn{constructor(e=new Ii,i=new Bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Dc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(Yd.fromBufferAttribute(g,e),d?Dc.addScaledVector(Yd,x):Dc.addScaledVector(Yd.sub(i),x))}i.add(Dc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(c),Er.copy(e.ray).recast(e.near),!(Ac.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ac,Ag)===null||Er.origin.distanceToSquared(Ag)>(e.far-e.near)**2))&&(Tg.copy(c).invert(),Er.copy(e.ray).applyMatrix4(Tg),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Er)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,S=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,T=S.length;E<T;E++){const b=S[E],_=d[b.materialIndex],L=Math.max(b.start,M.start),U=Math.min(h.count,Math.min(b.start+b.count,M.start+M.count));for(let P=L,V=U;P<V;P+=3){const N=h.getX(P),F=h.getX(P+1),ee=h.getX(P+2);l=Lc(this,_,e,r,p,x,g,N,F,ee),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let b=E,_=T;b<_;b+=3){const L=h.getX(b),U=h.getX(b+1),P=h.getX(b+2);l=Lc(this,d,e,r,p,x,g,L,U,P),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,T=S.length;E<T;E++){const b=S[E],_=d[b.materialIndex],L=Math.max(b.start,M.start),U=Math.min(m.count,Math.min(b.start+b.count,M.start+M.count));for(let P=L,V=U;P<V;P+=3){const N=P,F=P+1,ee=P+2;l=Lc(this,_,e,r,p,x,g,N,F,ee),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let b=E,_=T;b<_;b+=3){const L=b,U=b+1,P=b+2;l=Lc(this,d,e,r,p,x,g,L,U,P),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function W1(s,e,i,r,l,c,d,h){let m;if(e.side===Wn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,e.side===nr,h),m===null)return null;Uc.copy(h),Uc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:s}}function Lc(s,e,i,r,l,c,d,h,m,p){s.getVertexPosition(h,Rc),s.getVertexPosition(m,Cc),s.getVertexPosition(p,wc);const x=W1(s,e,i,r,Rc,Cc,wc,Rg);if(x){const g=new le;Ti.getBarycoord(Rg,Rc,Cc,wc,g),l&&(x.uv=Ti.getInterpolatedAttribute(l,h,m,p,g,new ct)),c&&(x.uv1=Ti.getInterpolatedAttribute(c,h,m,p,g,new ct)),d&&(x.normal=Ti.getInterpolatedAttribute(d,h,m,p,g,new le),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new le,materialIndex:0};Ti.getNormal(Rc,Cc,wc,S.normal),x.face=S,x.barycoord=g}return x}class il extends Ii{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],x=[],g=[];let S=0,M=0;E("z","y","x",-1,-1,r,i,e,d,c,0),E("z","y","x",1,-1,r,i,-e,d,c,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ga(p,3)),this.setAttribute("normal",new ga(x,3)),this.setAttribute("uv",new ga(g,2));function E(T,b,_,L,U,P,V,N,F,ee,w){const C=P/F,k=V/ee,te=P/2,ce=V/2,de=N/2,pe=F+1,z=ee+1;let Z=0,Y=0;const _e=new le;for(let ye=0;ye<z;ye++){const O=ye*k-ce;for(let re=0;re<pe;re++){const be=re*C-te;_e[T]=be*L,_e[b]=O*U,_e[_]=de,p.push(_e.x,_e.y,_e.z),_e[T]=0,_e[b]=0,_e[_]=N>0?1:-1,x.push(_e.x,_e.y,_e.z),g.push(re/F),g.push(1-ye/ee),Z+=1}}for(let ye=0;ye<ee;ye++)for(let O=0;O<F;O++){const re=S+O+pe*ye,be=S+O+pe*(ye+1),Ae=S+(O+1)+pe*(ye+1),Pe=S+(O+1)+pe*ye;m.push(re,be,Pe),m.push(be,Ae,Pe),Y+=6}h.addGroup(M,Y,w),M+=Y,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Pn(s){const e={};for(let i=0;i<s.length;i++){const r=Os(s[i]);for(const l in r)e[l]=r[l]}return e}function q1(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Gv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const Y1={clone:Os,merge:Pn};var j1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j1,this.fragmentShader=Z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Qc extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new le,Cg=new ct,wg=new ct;class Ei extends Qc{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,Cg,wg),i.subVectors(wg,Cg)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ad*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ts=-90,As=1;class K1 extends qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Ts,As,e,i);l.layers=this.layers,this.add(l);const c=new Ei(Ts,As,e,i);c.layers=this.layers,this.add(c);const d=new Ei(Ts,As,e,i);d.layers=this.layers,this.add(d);const h=new Ei(Ts,As,e,i);h.layers=this.layers,this.add(h);const m=new Ei(Ts,As,e,i);m.layers=this.layers,this.add(m);const p=new Ei(Ts,As,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Zc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,x]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(g,S,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Vv extends zn{constructor(e=[],i=Us,r,l,c,d,h,m,p,x){super(e,i,r,l,c,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q1 extends ir{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Vv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new il(5,5,5),c=new Fi({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ma});c.uniforms.tEquirect.value=i;const d=new Ri(l,c),h=i.minFilter;return i.minFilter===Ur&&(i.minFilter=Nn),new K1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}class Nc extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J1={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const b=i.getJointPose(T,r),_=this._getHandJoint(p,T);b!==null&&(_.matrix.fromArray(b.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=b.radius),_.visible=b!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&S>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(J1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Nc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Dg extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class kv extends zn{constructor(e=null,i=1,r=1,l,c,d,h,m,p=ri,x=ri,g,S){super(null,d,h,m,p,x,l,c,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zd=new le,$1=new le,eM=new mt;class Cr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Zd.subVectors(r,i).cross($1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Zd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||eM.getNormalMatrix(e),l=this.coplanarPoint(Zd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new ru,tM=new ct(.5,.5),Oc=new le;class Xv{constructor(e=new Cr,i=new Cr,r=new Cr,l=new Cr,c=new Cr,d=new Cr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Pi,r=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],S=c[6],M=c[7],E=c[8],T=c[9],b=c[10],_=c[11],L=c[12],U=c[13],P=c[14],V=c[15];if(l[0].setComponents(p-d,M-x,_-E,V-L).normalize(),l[1].setComponents(p+d,M+x,_+E,V+L).normalize(),l[2].setComponents(p+h,M+g,_+T,V+U).normalize(),l[3].setComponents(p-h,M-g,_-T,V-U).normalize(),r)l[4].setComponents(m,S,b,P).normalize(),l[5].setComponents(p-m,M-S,_-b,V-P).normalize();else if(l[4].setComponents(p-m,M-S,_-b,V-P).normalize(),i===Pi)l[5].setComponents(p+m,M+S,_+b,V+P).normalize();else if(i===Zc)l[5].setComponents(m,S,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=tM.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Oc.x=l.normal.x>0?e.max.x:e.min.x,Oc.y=l.normal.y>0?e.max.y:e.min.y,Oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nM extends nl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jc=new le,$c=new le,Ug=new hn,Ho=new Pv,Pc=new ru,Kd=new le,Lg=new le;class iM extends qn{constructor(e=new Ii,i=new nM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Jc.distanceTo($c);e.setAttribute("lineDistance",new ga(r,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,e.ray.intersectsSphere(Pc)===!1)return;Ug.copy(l).invert(),Ho.copy(e.ray).applyMatrix4(Ug);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=r.index,S=r.attributes.position;if(x!==null){const M=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let T=M,b=E-1;T<b;T+=p){const _=x.getX(T),L=x.getX(T+1),U=zc(this,e,Ho,m,_,L,T);U&&i.push(U)}if(this.isLineLoop){const T=x.getX(E-1),b=x.getX(M),_=zc(this,e,Ho,m,T,b,E-1);_&&i.push(_)}}else{const M=Math.max(0,d.start),E=Math.min(S.count,d.start+d.count);for(let T=M,b=E-1;T<b;T+=p){const _=zc(this,e,Ho,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=zc(this,e,Ho,m,E-1,M,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zc(s,e,i,r,l,c,d){const h=s.geometry.attributes.position;if(Jc.fromBufferAttribute(h,l),$c.fromBufferAttribute(h,c),i.distanceSqToSegment(Jc,$c,Kd,Lg)>r)return;Kd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Kd);if(!(p<e.near||p>e.far))return{distance:p,point:Lg.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const Ng=new le,Og=new le;class aM extends iM{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Ng.fromBufferAttribute(i,l),Og.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Ng.distanceTo(Og);e.setAttribute("lineDistance",new ga(r,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wv extends zn{constructor(e,i,r=Nr,l,c,d,h=ri,m=ri,p,x=qo,g=1){if(x!==qo&&x!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,c,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qv extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lr extends Ii{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,g=e/h,S=i/m,M=[],E=[],T=[],b=[];for(let _=0;_<x;_++){const L=_*S-d;for(let U=0;U<p;U++){const P=U*g-c;E.push(P,-L,0),T.push(0,0,1),b.push(U/h),b.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<h;L++){const U=L+p*_,P=L+p*(_+1),V=L+1+p*(_+1),N=L+1+p*_;M.push(U,P,N),M.push(P,V,N)}this.setIndex(M),this.setAttribute("position",new ga(E,3)),this.setAttribute("normal",new ga(T,3)),this.setAttribute("uv",new ga(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fc extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rM extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sM extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class oM extends Qc{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lM extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Pg(s,e,i,r){const l=uM(r);switch(i){case wv:return s*e;case Uv:return s*e/l.components*l.byteLength;case ip:return s*e/l.components*l.byteLength;case ap:return s*e*2/l.components*l.byteLength;case rp:return s*e*2/l.components*l.byteLength;case Dv:return s*e*3/l.components*l.byteLength;case xi:return s*e*4/l.components*l.byteLength;case sp:return s*e*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _h:case yh:return Math.max(s,16)*Math.max(e,8)/4;case vh:case Sh:return Math.max(s,8)*Math.max(e,8)/2;case bh:case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ih:case Hh:case Gh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vh:case kh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xh:case Wh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function uM(s){switch(s){case _a:case Tv:return{byteLength:1,components:1};case Xo:case Av:case Pr:return{byteLength:2,components:1};case tp:case np:return{byteLength:2,components:4};case Nr:case ep:case Oi:return{byteLength:4,components:1};case Rv:case Cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);function Yv(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function fM(s){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,x),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const x=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,x);else{g.sort((M,E)=>M.start-E.start);let S=0;for(let M=1;M<g.length;M++){const E=g[S],T=g[M];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++S,g[S]=T)}g.length=S+1;for(let M=0,E=g.length;M<E;M++){const T=g[M];s.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var dM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hM=`#ifdef USE_ALPHAHASH
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
#endif`,pM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
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
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
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
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TM=`#ifdef USE_IRIDESCENCE
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
#endif`,AM=`#ifdef USE_BUMPMAP
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
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PM=`#define PI 3.141592653589793
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
} // validated`,zM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FM=`vec3 transformedNormal = objectNormal;
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
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",kM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$M=`#ifdef USE_GRADIENTMAP
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
}`,e3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i3=`uniform bool receiveShadow;
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
#endif`,a3=`#ifdef USE_ENVMAP
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
#endif`,r3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c3=`PhysicalMaterial material;
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
#endif`,u3=`uniform sampler2D dfgLUT;
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
}`,f3=`
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
#endif`,d3=`#if defined( RE_IndirectDiffuse )
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
#endif`,h3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y3=`#if defined( USE_POINTS_UV )
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
#endif`,b3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R3=`#ifdef USE_MORPHTARGETS
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
#endif`,C3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O3=`#ifdef USE_NORMALMAP
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
#endif`,P3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K3=`float getShadowMask() {
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
}`,Q3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J3=`#ifdef USE_SKINNING
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
#endif`,$3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rE=`#ifdef USE_TRANSMISSION
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
#endif`,sE=`#ifdef USE_TRANSMISSION
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dE=`uniform sampler2D t2D;
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
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`#include <common>
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
}`,vE=`#if DEPTH_PACKING == 3200
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
}`,_E=`#define DISTANCE
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
}`,SE=`#define DISTANCE
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
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`uniform float scale;
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
}`,EE=`uniform vec3 diffuse;
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
}`,TE=`#include <common>
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
}`,AE=`uniform vec3 diffuse;
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
}`,RE=`#define LAMBERT
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
}`,CE=`#define LAMBERT
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
}`,wE=`#define MATCAP
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
}`,DE=`#define MATCAP
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
}`,UE=`#define NORMAL
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
}`,LE=`#define NORMAL
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
}`,NE=`#define PHONG
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
}`,OE=`#define PHONG
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
}`,PE=`#define STANDARD
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
}`,zE=`#define STANDARD
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
}`,FE=`#define TOON
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
}`,BE=`#define TOON
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
}`,IE=`uniform float size;
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
}`,HE=`uniform vec3 diffuse;
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
}`,GE=`#include <common>
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
}`,VE=`uniform vec3 color;
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
}`,kE=`uniform float rotation;
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
}`,XE=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:dM,alphahash_pars_fragment:hM,alphamap_fragment:pM,alphamap_pars_fragment:mM,alphatest_fragment:xM,alphatest_pars_fragment:gM,aomap_fragment:vM,aomap_pars_fragment:_M,batching_pars_vertex:SM,batching_vertex:yM,begin_vertex:bM,beginnormal_vertex:MM,bsdfs:EM,iridescence_fragment:TM,bumpmap_pars_fragment:AM,clipping_planes_fragment:RM,clipping_planes_pars_fragment:CM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:DM,color_fragment:UM,color_pars_fragment:LM,color_pars_vertex:NM,color_vertex:OM,common:PM,cube_uv_reflection_fragment:zM,defaultnormal_vertex:FM,displacementmap_pars_vertex:BM,displacementmap_vertex:IM,emissivemap_fragment:HM,emissivemap_pars_fragment:GM,colorspace_fragment:VM,colorspace_pars_fragment:kM,envmap_fragment:XM,envmap_common_pars_fragment:WM,envmap_pars_fragment:qM,envmap_pars_vertex:YM,envmap_physical_pars_fragment:a3,envmap_vertex:jM,fog_vertex:ZM,fog_pars_vertex:KM,fog_fragment:QM,fog_pars_fragment:JM,gradientmap_pars_fragment:$M,lightmap_pars_fragment:e3,lights_lambert_fragment:t3,lights_lambert_pars_fragment:n3,lights_pars_begin:i3,lights_toon_fragment:r3,lights_toon_pars_fragment:s3,lights_phong_fragment:o3,lights_phong_pars_fragment:l3,lights_physical_fragment:c3,lights_physical_pars_fragment:u3,lights_fragment_begin:f3,lights_fragment_maps:d3,lights_fragment_end:h3,logdepthbuf_fragment:p3,logdepthbuf_pars_fragment:m3,logdepthbuf_pars_vertex:x3,logdepthbuf_vertex:g3,map_fragment:v3,map_pars_fragment:_3,map_particle_fragment:S3,map_particle_pars_fragment:y3,metalnessmap_fragment:b3,metalnessmap_pars_fragment:M3,morphinstance_vertex:E3,morphcolor_vertex:T3,morphnormal_vertex:A3,morphtarget_pars_vertex:R3,morphtarget_vertex:C3,normal_fragment_begin:w3,normal_fragment_maps:D3,normal_pars_fragment:U3,normal_pars_vertex:L3,normal_vertex:N3,normalmap_pars_fragment:O3,clearcoat_normal_fragment_begin:P3,clearcoat_normal_fragment_maps:z3,clearcoat_pars_fragment:F3,iridescence_pars_fragment:B3,opaque_fragment:I3,packing:H3,premultiplied_alpha_fragment:G3,project_vertex:V3,dithering_fragment:k3,dithering_pars_fragment:X3,roughnessmap_fragment:W3,roughnessmap_pars_fragment:q3,shadowmap_pars_fragment:Y3,shadowmap_pars_vertex:j3,shadowmap_vertex:Z3,shadowmask_pars_fragment:K3,skinbase_vertex:Q3,skinning_pars_vertex:J3,skinning_vertex:$3,skinnormal_vertex:eE,specularmap_fragment:tE,specularmap_pars_fragment:nE,tonemapping_fragment:iE,tonemapping_pars_fragment:aE,transmission_fragment:rE,transmission_pars_fragment:sE,uv_pars_fragment:oE,uv_pars_vertex:lE,uv_vertex:cE,worldpos_vertex:uE,background_vert:fE,background_frag:dE,backgroundCube_vert:hE,backgroundCube_frag:pE,cube_vert:mE,cube_frag:xE,depth_vert:gE,depth_frag:vE,distanceRGBA_vert:_E,distanceRGBA_frag:SE,equirect_vert:yE,equirect_frag:bE,linedashed_vert:ME,linedashed_frag:EE,meshbasic_vert:TE,meshbasic_frag:AE,meshlambert_vert:RE,meshlambert_frag:CE,meshmatcap_vert:wE,meshmatcap_frag:DE,meshnormal_vert:UE,meshnormal_frag:LE,meshphong_vert:NE,meshphong_frag:OE,meshphysical_vert:PE,meshphysical_frag:zE,meshtoon_vert:FE,meshtoon_frag:BE,points_vert:IE,points_frag:HE,shadow_vert:GE,shadow_frag:VE,sprite_vert:kE,sprite_frag:XE},Oe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ni={basic:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Pn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Pn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Pn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Pn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Pn([Oe.points,Oe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Pn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Pn([Oe.common,Oe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Pn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Pn([Oe.sprite,Oe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:Pn([Oe.common,Oe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:Pn([Oe.lights,Oe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ni.physical={uniforms:Pn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Bc={r:0,b:0,g:0},Ar=new Sa,WE=new hn;function qE(s,e,i,r,l,c,d){const h=new Pt(0);let m=c===!0?0:1,p,x,g=null,S=0,M=null;function E(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?i:e).get(P)),P}function T(U){let P=!1;const V=E(U);V===null?_(h,m):V&&V.isColor&&(_(V,1),P=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(U,P){const V=E(P);V&&(V.isCubeTexture||V.mapping===au)?(x===void 0&&(x=new Ri(new il(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Os(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(N,F,ee){this.matrixWorld.copyPosition(ee.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Ar.copy(P.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),x.material.uniforms.envMap.value=V,x.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(WE.makeRotationFromEuler(Ar)),x.material.toneMapped=Nt.getTransfer(V.colorSpace)!==Xt,(g!==V||S!==V.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,g=V,S=V.version,M=s.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Ri(new Lr(2,2),new Fi({name:"BackgroundMaterial",uniforms:Os(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Nt.getTransfer(V.colorSpace)!==Xt,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||S!==V.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=V,S=V.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,P){U.getRGB(Bc,Gv(s)),r.buffers.color.setClear(Bc.r,Bc.g,Bc.b,P,d)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,P=1){h.set(U),m=P,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:T,addToRenderList:b,dispose:L}}function YE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,d=!1;function h(C,k,te,ce,de){let pe=!1;const z=g(ce,te,k);c!==z&&(c=z,p(c.object)),pe=M(C,ce,te,de),pe&&E(C,ce,te,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(pe||d)&&(d=!1,P(C,k,te,ce),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function x(C){return s.deleteVertexArray(C)}function g(C,k,te){const ce=te.wireframe===!0;let de=r[C.id];de===void 0&&(de={},r[C.id]=de);let pe=de[k.id];pe===void 0&&(pe={},de[k.id]=pe);let z=pe[ce];return z===void 0&&(z=S(m()),pe[ce]=z),z}function S(C){const k=[],te=[],ce=[];for(let de=0;de<i;de++)k[de]=0,te[de]=0,ce[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:ce,object:C,attributes:{},index:null}}function M(C,k,te,ce){const de=c.attributes,pe=k.attributes;let z=0;const Z=te.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const ye=de[Y];let O=pe[Y];if(O===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ye===void 0||ye.attribute!==O||O&&ye.data!==O.data)return!0;z++}return c.attributesNum!==z||c.index!==ce}function E(C,k,te,ce){const de={},pe=k.attributes;let z=0;const Z=te.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let ye=pe[Y];ye===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor));const O={};O.attribute=ye,ye&&ye.data&&(O.data=ye.data),de[Y]=O,z++}c.attributes=de,c.attributesNum=z,c.index=ce}function T(){const C=c.newAttributes;for(let k=0,te=C.length;k<te;k++)C[k]=0}function b(C){_(C,0)}function _(C,k){const te=c.newAttributes,ce=c.enabledAttributes,de=c.attributeDivisors;te[C]=1,ce[C]===0&&(s.enableVertexAttribArray(C),ce[C]=1),de[C]!==k&&(s.vertexAttribDivisor(C,k),de[C]=k)}function L(){const C=c.newAttributes,k=c.enabledAttributes;for(let te=0,ce=k.length;te<ce;te++)k[te]!==C[te]&&(s.disableVertexAttribArray(te),k[te]=0)}function U(C,k,te,ce,de,pe,z){z===!0?s.vertexAttribIPointer(C,k,te,de,pe):s.vertexAttribPointer(C,k,te,ce,de,pe)}function P(C,k,te,ce){T();const de=ce.attributes,pe=te.getAttributes(),z=k.defaultAttributeValues;for(const Z in pe){const Y=pe[Z];if(Y.location>=0){let _e=de[Z];if(_e===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor)),_e!==void 0){const ye=_e.normalized,O=_e.itemSize,re=e.get(_e);if(re===void 0)continue;const be=re.buffer,Ae=re.type,Pe=re.bytesPerElement,ae=Ae===s.INT||Ae===s.UNSIGNED_INT||_e.gpuType===ep;if(_e.isInterleavedBufferAttribute){const ue=_e.data,Re=ue.stride,Ve=_e.offset;if(ue.isInstancedInterleavedBuffer){for(let qe=0;qe<Y.locationSize;qe++)_(Y.location+qe,ue.meshPerAttribute);C.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let qe=0;qe<Y.locationSize;qe++)b(Y.location+qe);s.bindBuffer(s.ARRAY_BUFFER,be);for(let qe=0;qe<Y.locationSize;qe++)U(Y.location+qe,O/Y.locationSize,Ae,ye,Re*Pe,(Ve+O/Y.locationSize*qe)*Pe,ae)}else{if(_e.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)_(Y.location+ue,_e.meshPerAttribute);C.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ue=0;ue<Y.locationSize;ue++)b(Y.location+ue);s.bindBuffer(s.ARRAY_BUFFER,be);for(let ue=0;ue<Y.locationSize;ue++)U(Y.location+ue,O/Y.locationSize,Ae,ye,O*Pe,O/Y.locationSize*ue*Pe,ae)}}else if(z!==void 0){const ye=z[Z];if(ye!==void 0)switch(ye.length){case 2:s.vertexAttrib2fv(Y.location,ye);break;case 3:s.vertexAttrib3fv(Y.location,ye);break;case 4:s.vertexAttrib4fv(Y.location,ye);break;default:s.vertexAttrib1fv(Y.location,ye)}}}}L()}function V(){ee();for(const C in r){const k=r[C];for(const te in k){const ce=k[te];for(const de in ce)x(ce[de].object),delete ce[de];delete k[te]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const te in k){const ce=k[te];for(const de in ce)x(ce[de].object),delete ce[de];delete k[te]}delete r[C.id]}function F(C){for(const k in r){const te=r[k];if(te[C.id]===void 0)continue;const ce=te[C.id];for(const de in ce)x(ce[de].object),delete ce[de];delete te[C.id]}}function ee(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:b,disableUnusedAttributes:L}}function jE(s,e,i){let r;function l(p){r=p}function c(p,x){s.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,g){g!==0&&(s.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let M=0;for(let E=0;E<g;E++)M+=x[E];i.update(M,r,1)}function m(p,x,g,S){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)d(p[E],x[E],S[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,g);let E=0;for(let T=0;T<g;T++)E+=x[T]*S[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ZE(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==xi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const ee=F===Pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==_a&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Oi&&!ee)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ot("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:b,maxAttributes:_,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:P,vertexTextures:V,maxSamples:N}}function KE(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Cr,h=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||r!==0||l;return l=S,r=g.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,M){const E=g.clippingPlanes,T=g.clipIntersection,b=g.clipShadows,_=s.get(g);if(!l||E===null||E.length===0||c&&!b)c?x(null):p();else{const L=c?0:r,U=L*4;let P=_.clippingState||null;m.value=P,P=x(E,S,U,M);for(let V=0;V!==U;++V)P[V]=i[V];_.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,S,M,E){const T=g!==null?g.length:0;let b=null;if(T!==0){if(b=m.value,E!==!0||b===null){const _=M+T*4,L=S.matrixWorldInverse;h.getNormalMatrix(L),(b===null||b.length<_)&&(b=new Float32Array(_));for(let U=0,P=M;U!==T;++U,P+=4)d.copy(g[U]).applyMatrix4(L,h),d.normal.toArray(b,P),b[P+3]=d.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,b}}function QE(s){let e=new WeakMap;function i(d,h){return h===ph?d.mapping=Us:h===mh&&(d.mapping=Ls),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===ph||h===mh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Q1(m.height);return p.fromEquirectangularTexture(s,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const er=4,zg=[.125,.215,.35,.446,.526,.582],Dr=20,JE=256,Go=new oM,Fg=new Pt;let Qd=null,Jd=0,$d=0,eh=!1;const $E=new le;class Bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=$E}=c;Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qd,Jd,$d),this._renderer.xr.enabled=eh,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Us||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Pr,format:xi,colorSpace:Ns,depthBuffer:!1},l=Ig(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ig(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e2(c)),this._blurMaterial=n2(c,e,i)}return l}_compileMaterial(e){const i=new Ri(new Ii,e);this._renderer.compile(i,Go)}_sceneToCubeUV(e,i,r,l,c){const m=new Ei(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor(Fg),g.toneMapping=tr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new il,new Bv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,b=T.material;let _=!1;const L=e.background;L?L.isColor&&(b.color.copy(L),e.background=null,_=!0):(b.color.copy(Fg),_=!0);for(let U=0;U<6;U++){const P=U%3;P===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[U],c.y,c.z)):P===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[U]));const V=this._cubeSize;Rs(l,P*V,U>2?V:0,V,V),g.setRenderTarget(l),_&&g.render(T,m),g.render(e,m)}g.toneMapping=M,g.autoClear=S,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Us||e.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Rs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Go)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const L=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=t2(this._lodMax,L,U)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),S=.05+p*.95,M=g*S,{_lodMax:E}=this,T=this._sizeLods[r],b=3*T*(r>E-er?r-E+er:0),_=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-i,Rs(c,b,_,3*T,2*T),l.setRenderTarget(c),l.render(h,Go),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Rs(e,b,_,3*T,2*T),l.setRenderTarget(e),l.render(h,Go)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Dr-1),T=c/E,b=isFinite(c)?1+Math.floor(x*T):Dr;b>Dr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Dr}`);const _=[];let L=0;for(let F=0;F<Dr;++F){const ee=F/T,w=Math.exp(-ee*ee/2);_.push(w),F===0?L+=w:F<b&&(L+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/L;S.envMap.value=e.texture,S.samples.value=b,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=E,S.mipInt.value=U-r;const P=this._sizeLods[l],V=3*P*(l>U-er?l-U+er:0),N=4*(this._cubeSize-P);Rs(i,V,N,3*P,2*P),m.setRenderTarget(i),m.render(g,Go)}}function e2(s){const e=[],i=[],r=[];let l=s;const c=s-er+1+zg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>s-er?m=zg[d-s+er-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,E=6,T=3,b=2,_=1,L=new Float32Array(T*E*M),U=new Float32Array(b*E*M),P=new Float32Array(_*E*M);for(let N=0;N<M;N++){const F=N%3*2/3-1,ee=N>2?0:-1,w=[F,ee,0,F+2/3,ee,0,F+2/3,ee+1,0,F,ee,0,F+2/3,ee+1,0,F,ee+1,0];L.set(w,T*E*N),U.set(S,b*E*N);const C=[N,N,N,N,N,N];P.set(C,_*E*N)}const V=new Ii;V.setAttribute("position",new Ai(L,T)),V.setAttribute("uv",new Ai(U,b)),V.setAttribute("faceIndex",new Ai(P,_)),r.push(new Ri(V,null)),l>er&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Ig(s,e,i){const r=new ir(s,e,i);return r.texture.mapping=au,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function t2(s,e,i){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function n2(s,e,i){const r=new Float32Array(Dr),l=new le(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:su(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Hg(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Gg(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}function i2(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===ph||m===mh,x=m===Us||m===Ls;if(p||x){let g=e.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Bg(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Bg(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function a2(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&jo("WebGLRenderer: "+r+" extension not supported."),l}}}function r2(s,e,i,r){const l={},c=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",d),delete l[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,E=g.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let U=0,P=L.length;U<P;U+=3){const V=L[U+0],N=L[U+1],F=L[U+2];S.push(V,N,N,F,F,V)}}else if(E!==void 0){const L=E.array;T=E.version;for(let U=0,P=L.length/3-1;U<P;U+=3){const V=U+0,N=U+1,F=U+2;S.push(V,N,N,F,F,V)}}else return;const b=new(Nv(S)?Hv:Iv)(S,1);b.version=T;const _=c.get(g);_&&e.remove(_),c.set(g,b)}function x(g){const S=c.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function s2(s,e,i){let r;function l(S){r=S}let c,d;function h(S){c=S.type,d=S.bytesPerElement}function m(S,M){s.drawElements(r,M,c,S*d),i.update(M,r,1)}function p(S,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,S*d,E),i.update(M,r,E))}function x(S,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,S,0,E);let b=0;for(let _=0;_<E;_++)b+=M[_];i.update(b,r,1)}function g(S,M,E,T){if(E===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let _=0;_<S.length;_++)p(S[_]/d,M[_],T[_]);else{b.multiDrawElementsInstancedWEBGL(r,M,0,c,S,0,T,0,E);let _=0;for(let L=0;L<E;L++)_+=M[L]*T[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function o2(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:sn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function l2(s,e,i){const r=new WeakMap,l=new nn;function c(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let C=function(){ee.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let P=0;E===!0&&(P=1),T===!0&&(P=2),b===!0&&(P=3);let V=h.attributes.position.count*P,N=1;V>e.maxTextureSize&&(N=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*N*4*g),ee=new Ov(F,V,N,g);ee.type=Oi,ee.needsUpdate=!0;const w=P*4;for(let k=0;k<g;k++){const te=_[k],ce=L[k],de=U[k],pe=V*N*4*k;for(let z=0;z<te.count;z++){const Z=z*w;E===!0&&(l.fromBufferAttribute(te,z),F[pe+Z+0]=l.x,F[pe+Z+1]=l.y,F[pe+Z+2]=l.z,F[pe+Z+3]=0),T===!0&&(l.fromBufferAttribute(ce,z),F[pe+Z+4]=l.x,F[pe+Z+5]=l.y,F[pe+Z+6]=l.z,F[pe+Z+7]=0),b===!0&&(l.fromBufferAttribute(de,z),F[pe+Z+8]=l.x,F[pe+Z+9]=l.y,F[pe+Z+10]=l.z,F[pe+Z+11]=de.itemSize===4?l.w:1)}}S={count:g,texture:ee,size:new ct(V,N)},r.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let b=0;b<p.length;b++)E+=p[b];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function c2(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const jv=new zn,Vg=new Wv(1,1),Zv=new Ov,Kv=new O1,Qv=new Vv,kg=[],Xg=[],Wg=new Float32Array(16),qg=new Float32Array(9),Yg=new Float32Array(4);function Bs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=kg[l];if(c===void 0&&(c=new Float32Array(l),kg[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,s[d].toArray(c,h)}return c}function gn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function vn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function ou(s,e){let i=Xg[e];i===void 0&&(i=new Int32Array(e),Xg[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function u2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function f2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2fv(this.addr,e),vn(i,e)}}function d2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;s.uniform3fv(this.addr,e),vn(i,e)}}function h2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4fv(this.addr,e),vn(i,e)}}function p2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;Yg.set(r),s.uniformMatrix2fv(this.addr,!1,Yg),vn(i,r)}}function m2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;qg.set(r),s.uniformMatrix3fv(this.addr,!1,qg),vn(i,r)}}function x2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;Wg.set(r),s.uniformMatrix4fv(this.addr,!1,Wg),vn(i,r)}}function g2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function v2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2iv(this.addr,e),vn(i,e)}}function _2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3iv(this.addr,e),vn(i,e)}}function S2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4iv(this.addr,e),vn(i,e)}}function y2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function b2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2uiv(this.addr,e),vn(i,e)}}function M2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3uiv(this.addr,e),vn(i,e)}}function E2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4uiv(this.addr,e),vn(i,e)}}function T2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Vg.compareFunction=Lv,c=Vg):c=jv,i.setTexture2D(e||c,l)}function A2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Kv,l)}function R2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Qv,l)}function C2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Zv,l)}function w2(s){switch(s){case 5126:return u2;case 35664:return f2;case 35665:return d2;case 35666:return h2;case 35674:return p2;case 35675:return m2;case 35676:return x2;case 5124:case 35670:return g2;case 35667:case 35671:return v2;case 35668:case 35672:return _2;case 35669:case 35673:return S2;case 5125:return y2;case 36294:return b2;case 36295:return M2;case 36296:return E2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return A2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return C2}}function D2(s,e){s.uniform1fv(this.addr,e)}function U2(s,e){const i=Bs(e,this.size,2);s.uniform2fv(this.addr,i)}function L2(s,e){const i=Bs(e,this.size,3);s.uniform3fv(this.addr,i)}function N2(s,e){const i=Bs(e,this.size,4);s.uniform4fv(this.addr,i)}function O2(s,e){const i=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function P2(s,e){const i=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function z2(s,e){const i=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function F2(s,e){s.uniform1iv(this.addr,e)}function B2(s,e){s.uniform2iv(this.addr,e)}function I2(s,e){s.uniform3iv(this.addr,e)}function H2(s,e){s.uniform4iv(this.addr,e)}function G2(s,e){s.uniform1uiv(this.addr,e)}function V2(s,e){s.uniform2uiv(this.addr,e)}function k2(s,e){s.uniform3uiv(this.addr,e)}function X2(s,e){s.uniform4uiv(this.addr,e)}function W2(s,e,i){const r=this.cache,l=e.length,c=ou(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||jv,c[d])}function q2(s,e,i){const r=this.cache,l=e.length,c=ou(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Kv,c[d])}function Y2(s,e,i){const r=this.cache,l=e.length,c=ou(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Qv,c[d])}function j2(s,e,i){const r=this.cache,l=e.length,c=ou(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Zv,c[d])}function Z2(s){switch(s){case 5126:return D2;case 35664:return U2;case 35665:return L2;case 35666:return N2;case 35674:return O2;case 35675:return P2;case 35676:return z2;case 5124:case 35670:return F2;case 35667:case 35671:return B2;case 35668:case 35672:return I2;case 35669:case 35673:return H2;case 5125:return G2;case 36294:return V2;case 36295:return k2;case 36296:return X2;case 35678:case 36198:case 36298:case 36306:case 35682:return W2;case 35679:case 36299:case 36307:return q2;case 35680:case 36300:case 36308:case 36293:return Y2;case 36289:case 36303:case 36311:case 36292:return j2}}class K2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=w2(i.type)}}class Q2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Z2(i.type)}}class J2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const th=/(\w+)(\])?(\[|\.)?/g;function jg(s,e){s.seq.push(e),s.map[e.id]=e}function $2(s,e,i){const r=s.name,l=r.length;for(th.lastIndex=0;;){const c=th.exec(r),d=th.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){jg(i,p===void 0?new K2(h,s,e):new Q2(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new J2(h),jg(i,g)),i=g}}}class qc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);$2(c,d,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Zg(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const eT=37297;let tT=0;function nT(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Kg=new mt;function iT(s){Nt._getMatrix(Kg,Nt.workingColorSpace,s);const e=`mat3( ${Kg.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(s)){case jc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Qg(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+nT(s.getShaderSource(e),h)}else return c}function aT(s,e){const i=iT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function rT(s,e){let i;switch(e){case o1:i="Linear";break;case l1:i="Reinhard";break;case c1:i="Cineon";break;case u1:i="ACESFilmic";break;case d1:i="AgX";break;case h1:i="Neutral";break;case f1:i="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new le;function sT(){Nt.getLuminanceCoefficients(Ic);const s=Ic.x.toFixed(4),e=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function lT(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function cT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return i}function Vo(s){return s!==""}function Jg(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $g(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(s){return s.replace(uT,dT)}const fT=new Map;function dT(s,e){let i=gt[e];if(i===void 0){const r=fT.get(e);if(r!==void 0)i=gt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yh(i)}const hT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ev(s){return s.replace(hT,pT)}function pT(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function tv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Hb?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function xT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Us:case Ls:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function vT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mv:e="ENVMAP_BLENDING_MULTIPLY";break;case r1:e="ENVMAP_BLENDING_MIX";break;case s1:e="ENVMAP_BLENDING_ADD";break}return e}function _T(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function ST(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=mT(i),p=xT(i),x=gT(i),g=vT(i),S=_T(i),M=oT(i),E=lT(c),T=l.createProgram();let b,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),b.length>0&&(b+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(b=[tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==tr?"#define TONE_MAPPING":"",i.toneMapping!==tr?gt.tonemapping_pars_fragment:"",i.toneMapping!==tr?rT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,aT("linearToOutputTexel",i.outputColorSpace),sT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),d=Yh(d),d=Jg(d,i),d=$g(d,i),h=Yh(h),h=Jg(h,i),h=$g(h,i),d=ev(d),h=ev(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,b=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,_=["#define varying in",i.glslVersion===fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=L+b+d,P=L+_+h,V=Zg(l,l.VERTEX_SHADER,U),N=Zg(l,l.FRAGMENT_SHADER,P);l.attachShader(T,V),l.attachShader(T,N),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(k){if(s.debug.checkShaderErrors){const te=l.getProgramInfoLog(T)||"",ce=l.getShaderInfoLog(V)||"",de=l.getShaderInfoLog(N)||"",pe=te.trim(),z=ce.trim(),Z=de.trim();let Y=!0,_e=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,V,N);else{const ye=Qg(l,V,"vertex"),O=Qg(l,N,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+pe+`
`+ye+`
`+O)}else pe!==""?ot("WebGLProgram: Program Info Log:",pe):(z===""||Z==="")&&(_e=!1);_e&&(k.diagnostics={runnable:Y,programLog:pe,vertexShader:{log:z,prefix:b},fragmentShader:{log:Z,prefix:_}})}l.deleteShader(V),l.deleteShader(N),ee=new qc(l,T),w=cT(l,T)}let ee;this.getUniforms=function(){return ee===void 0&&F(this),ee};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,eT)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=N,this}let yT=0;class bT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new MT(e),i.set(e,r)),r}}class MT{constructor(e){this.id=yT++,this.code=e,this.usedTimes=0}}function ET(s,e,i,r,l,c,d){const h=new zv,m=new bT,p=new Set,x=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,C,k,te,ce){const de=te.fog,pe=ce.geometry,z=w.isMeshStandardMaterial?te.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),Y=Z&&Z.mapping===au?Z.image.height:null,_e=E[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&ot("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const ye=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,O=ye!==void 0?ye.length:0;let re=0;pe.morphAttributes.position!==void 0&&(re=1),pe.morphAttributes.normal!==void 0&&(re=2),pe.morphAttributes.color!==void 0&&(re=3);let be,Ae,Pe,ae;if(_e){const wt=Ni[_e];be=wt.vertexShader,Ae=wt.fragmentShader}else be=w.vertexShader,Ae=w.fragmentShader,m.update(w),Pe=m.getVertexShaderID(w),ae=m.getFragmentShaderID(w);const ue=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Ve=ce.isInstancedMesh===!0,qe=ce.isBatchedMesh===!0,lt=!!w.map,Jt=!!w.matcap,ut=!!Z,Rt=!!w.aoMap,H=!!w.lightMap,ft=!!w.bumpMap,xt=!!w.normalMap,vt=!!w.displacementMap,Ie=!!w.emissiveMap,It=!!w.metalnessMap,je=!!w.roughnessMap,it=w.anisotropy>0,D=w.clearcoat>0,v=w.dispersion>0,I=w.iridescence>0,K=w.sheen>0,fe=w.transmission>0,ne=it&&!!w.anisotropyMap,ze=D&&!!w.clearcoatMap,Ue=D&&!!w.clearcoatNormalMap,Ze=D&&!!w.clearcoatRoughnessMap,We=I&&!!w.iridescenceMap,Me=I&&!!w.iridescenceThicknessMap,Te=K&&!!w.sheenColorMap,Ke=K&&!!w.sheenRoughnessMap,Xe=!!w.specularMap,Fe=!!w.specularColorMap,at=!!w.specularIntensityMap,G=fe&&!!w.transmissionMap,Le=fe&&!!w.thicknessMap,we=!!w.gradientMap,De=!!w.alphaMap,Ee=w.alphaTest>0,ve=!!w.alphaHash,He=!!w.extensions;let rt=tr;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Ht={shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:Ae,defines:w.defines,customVertexShaderID:Pe,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:qe,batchingColor:qe&&ce._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&ce.instanceColor!==null,instancingMorph:Ve&&ce.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ns,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:Jt,envMap:ut,envMapMode:ut&&Z.mapping,envMapCubeUVHeight:Y,aoMap:Rt,lightMap:H,bumpMap:ft,normalMap:xt,displacementMap:S&&vt,emissiveMap:Ie,normalMapObjectSpace:xt&&w.normalMapType===v1,normalMapTangentSpace:xt&&w.normalMapType===g1,metalnessMap:It,roughnessMap:je,anisotropy:it,anisotropyMap:ne,clearcoat:D,clearcoatMap:ze,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ze,dispersion:v,iridescence:I,iridescenceMap:We,iridescenceThicknessMap:Me,sheen:K,sheenColorMap:Te,sheenRoughnessMap:Ke,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:at,transmission:fe,transmissionMap:G,thicknessMap:Le,gradientMap:we,opaque:w.transparent===!1&&w.blending===Cs&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:Ee,alphaHash:ve,combine:w.combine,mapUv:lt&&T(w.map.channel),aoMapUv:Rt&&T(w.aoMap.channel),lightMapUv:H&&T(w.lightMap.channel),bumpMapUv:ft&&T(w.bumpMap.channel),normalMapUv:xt&&T(w.normalMap.channel),displacementMapUv:vt&&T(w.displacementMap.channel),emissiveMapUv:Ie&&T(w.emissiveMap.channel),metalnessMapUv:It&&T(w.metalnessMap.channel),roughnessMapUv:je&&T(w.roughnessMap.channel),anisotropyMapUv:ne&&T(w.anisotropyMap.channel),clearcoatMapUv:ze&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&T(w.sheenRoughnessMap.channel),specularMapUv:Xe&&T(w.specularMap.channel),specularColorMapUv:Fe&&T(w.specularColorMap.channel),specularIntensityMapUv:at&&T(w.specularIntensityMap.channel),transmissionMapUv:G&&T(w.transmissionMap.channel),thicknessMapUv:Le&&T(w.thicknessMap.channel),alphaMapUv:De&&T(w.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(xt||it),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!pe.attributes.uv&&(lt||De),fog:!!de,useFog:w.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Re,skinning:ce.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&Nt.getTransfer(w.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ie&&w.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(w.emissiveMap.colorSpace)===Xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ha,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)C.push(k),C.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(L(C,w),U(C,w),C.push(s.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function L(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function P(w){const C=E[w.type];let k;if(C){const te=Ni[C];k=Y1.clone(te.uniforms)}else k=w.uniforms;return k}function V(w,C){let k;for(let te=0,ce=x.length;te<ce;te++){const de=x[te];if(de.cacheKey===C){k=de,++k.usedTimes;break}}return k===void 0&&(k=new ST(s,C,w,c),x.push(k)),k}function N(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function F(w){m.remove(w)}function ee(){m.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:P,acquireProgram:V,releaseProgram:N,releaseShaderCache:F,programs:x,dispose:ee}}function TT(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function AT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function nv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function iv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(g,S,M,E,T,b){let _=s[e];return _===void 0?(_={id:g.id,object:g,geometry:S,material:M,groupOrder:E,renderOrder:g.renderOrder,z:T,group:b},s[e]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=M,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=b),e++,_}function h(g,S,M,E,T,b){const _=d(g,S,M,E,T,b);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,S,M,E,T,b){const _=d(g,S,M,E,T,b);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||AT),r.length>1&&r.sort(S||nv),l.length>1&&l.sort(S||nv)}function x(){for(let g=e,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function RT(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new iv,s.set(r,[d])):l>=c.length?(d=new iv,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function CT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Pt};break;case"SpotLight":i={position:new le,direction:new le,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function wT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let DT=0;function UT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function LT(s){const e=new CT,i=wT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new le);const l=new le,c=new hn,d=new hn;function h(p){let x=0,g=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,E=0,T=0,b=0,_=0,L=0,U=0,P=0,V=0,N=0,F=0;p.sort(UT);for(let w=0,C=p.length;w<C;w++){const k=p[w],te=k.color,ce=k.intensity,de=k.distance,pe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)x+=te.r*ce,g+=te.g*ce,S+=te.b*ce;else if(k.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(k.sh.coefficients[z],ce);F++}else if(k.isDirectionalLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,Y=i.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=pe,r.directionalShadowMatrix[M]=k.shadow.matrix,L++}r.directional[M]=z,M++}else if(k.isSpotLight){const z=e.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(te).multiplyScalar(ce),z.distance=de,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,r.spot[T]=z;const Z=k.shadow;if(k.map&&(r.spotLightMap[V]=k.map,V++,Z.updateMatrices(k),k.castShadow&&N++),r.spotLightMatrix[T]=Z.matrix,k.castShadow){const Y=i.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[T]=Y,r.spotShadowMap[T]=pe,P++}T++}else if(k.isRectAreaLight){const z=e.get(k);z.color.copy(te).multiplyScalar(ce),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),r.rectArea[b]=z,b++}else if(k.isPointLight){const z=e.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const Z=k.shadow,Y=i.get(k);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=k.shadow.matrix,U++}r.point[E]=z,E++}else if(k.isHemisphereLight){const z=e.get(k);z.skyColor.copy(k.color).multiplyScalar(ce),z.groundColor.copy(k.groundColor).multiplyScalar(ce),r.hemi[_]=z,_++}}b>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=S;const ee=r.hash;(ee.directionalLength!==M||ee.pointLength!==E||ee.spotLength!==T||ee.rectAreaLength!==b||ee.hemiLength!==_||ee.numDirectionalShadows!==L||ee.numPointShadows!==U||ee.numSpotShadows!==P||ee.numSpotMaps!==V||ee.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=b,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=P+V-N,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,ee.directionalLength=M,ee.pointLength=E,ee.spotLength=T,ee.rectAreaLength=b,ee.hemiLength=_,ee.numDirectionalShadows=L,ee.numPointShadows=U,ee.numSpotShadows=P,ee.numSpotMaps=V,ee.numLightProbes=F,r.version=DT++)}function m(p,x){let g=0,S=0,M=0,E=0,T=0;const b=x.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const U=p[_];if(U.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(b),g++}else if(U.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(b),P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(b),M++}else if(U.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(b),d.identity(),c.copy(U.matrixWorld),c.premultiply(b),d.extractRotation(c),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),E++}else if(U.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(b),S++}else if(U.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(U.matrixWorld),P.direction.transformDirection(b),T++}}}return{setup:h,setupView:m,state:r}}function av(s){const e=new LT(s),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function NT(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new av(s),e.set(l,[h])):c>=d.length?(h=new av(s),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const OT=`void main() {
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
}`;function zT(s,e,i){let r=new Xv;const l=new ct,c=new ct,d=new nn,h=new rM({depthPacking:x1}),m=new sM,p={},x=i.maxTextureSize,g={[nr]:Wn,[Wn]:nr,[ha]:ha},S=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:OT,fragmentShader:PT}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ii;E.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ri(E,S),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bv;let _=this.type;this.render=function(N,F,ee){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||N.length===0)return;const w=s.getRenderTarget(),C=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),te=s.state;te.setBlending(ma),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ce=_!==da&&this.type===da,de=_===da&&this.type!==da;for(let pe=0,z=N.length;pe<z;pe++){const Z=N[pe],Y=Z.shadow;if(Y===void 0){ot("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const _e=Y.getFrameExtents();if(l.multiply(_e),c.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/_e.x),l.x=c.x*_e.x,Y.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/_e.y),l.y=c.y*_e.y,Y.mapSize.y=c.y)),Y.map===null||ce===!0||de===!0){const O=this.type!==da?{minFilter:ri,magFilter:ri}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ir(l.x,l.y,O),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const ye=Y.getViewportCount();for(let O=0;O<ye;O++){const re=Y.getViewport(O);d.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),te.viewport(d),Y.updateMatrices(Z,O),r=Y.getFrustum(),P(F,ee,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===da&&L(Y,ee),Y.needsUpdate=!1}_=this.type,b.needsUpdate=!1,s.setRenderTarget(w,C,k)};function L(N,F){const ee=e.update(T);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ir(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(F,null,ee,S,T,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(F,null,ee,M,T,null)}function U(N,F,ee,w){let C=null;const k=ee.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)C=k;else if(C=ee.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const te=C.uuid,ce=F.uuid;let de=p[te];de===void 0&&(de={},p[te]=de);let pe=de[ce];pe===void 0&&(pe=C.clone(),de[ce]=pe,F.addEventListener("dispose",V)),C=pe}if(C.visible=F.visible,C.wireframe=F.wireframe,w===da?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:g[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,ee.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const te=s.properties.get(C);te.light=ee}return C}function P(N,F,ee,w,C){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===da)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,N.matrixWorld);const ce=e.update(N),de=N.material;if(Array.isArray(de)){const pe=ce.groups;for(let z=0,Z=pe.length;z<Z;z++){const Y=pe[z],_e=de[Y.materialIndex];if(_e&&_e.visible){const ye=U(N,_e,w,C);N.onBeforeShadow(s,N,F,ee,ce,ye,Y),s.renderBufferDirect(ee,null,ce,ye,N,Y),N.onAfterShadow(s,N,F,ee,ce,ye,Y)}}}else if(de.visible){const pe=U(N,de,w,C);N.onBeforeShadow(s,N,F,ee,ce,pe,null),s.renderBufferDirect(ee,null,ce,pe,N,null),N.onAfterShadow(s,N,F,ee,ce,pe,null)}}const te=N.children;for(let ce=0,de=te.length;ce<de;ce++)P(te[ce],F,ee,w,C)}function V(N){N.target.removeEventListener("dispose",V);for(const ee in p){const w=p[ee],C=N.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const FT={[oh]:lh,[ch]:dh,[uh]:hh,[Ds]:fh,[lh]:oh,[dh]:ch,[hh]:uh,[fh]:Ds};function BT(s,e){function i(){let G=!1;const Le=new nn;let we=null;const De=new nn(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!G&&(s.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){G=Ee},setClear:function(Ee,ve,He,rt,Ht){Ht===!0&&(Ee*=rt,ve*=rt,He*=rt),Le.set(Ee,ve,He,rt),De.equals(Le)===!1&&(s.clearColor(Ee,ve,He,rt),De.copy(Le))},reset:function(){G=!1,we=null,De.set(-1,0,0,0)}}}function r(){let G=!1,Le=!1,we=null,De=null,Ee=null;return{setReversed:function(ve){if(Le!==ve){const He=e.get("EXT_clip_control");ve?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Le=ve;const rt=Ee;Ee=null,this.setClear(rt)}},getReversed:function(){return Le},setTest:function(ve){ve?ue(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(ve){we!==ve&&!G&&(s.depthMask(ve),we=ve)},setFunc:function(ve){if(Le&&(ve=FT[ve]),De!==ve){switch(ve){case oh:s.depthFunc(s.NEVER);break;case lh:s.depthFunc(s.ALWAYS);break;case ch:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case uh:s.depthFunc(s.EQUAL);break;case fh:s.depthFunc(s.GEQUAL);break;case dh:s.depthFunc(s.GREATER);break;case hh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=ve}},setLocked:function(ve){G=ve},setClear:function(ve){Ee!==ve&&(Le&&(ve=1-ve),s.clearDepth(ve),Ee=ve)},reset:function(){G=!1,we=null,De=null,Ee=null,Le=!1}}}function l(){let G=!1,Le=null,we=null,De=null,Ee=null,ve=null,He=null,rt=null,Ht=null;return{setTest:function(wt){G||(wt?ue(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(wt){Le!==wt&&!G&&(s.stencilMask(wt),Le=wt)},setFunc:function(wt,wn,Yn){(we!==wt||De!==wn||Ee!==Yn)&&(s.stencilFunc(wt,wn,Yn),we=wt,De=wn,Ee=Yn)},setOp:function(wt,wn,Yn){(ve!==wt||He!==wn||rt!==Yn)&&(s.stencilOp(wt,wn,Yn),ve=wt,He=wn,rt=Yn)},setLocked:function(wt){G=wt},setClear:function(wt){Ht!==wt&&(s.clearStencil(wt),Ht=wt)},reset:function(){G=!1,Le=null,we=null,De=null,Ee=null,ve=null,He=null,rt=null,Ht=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,M=[],E=null,T=!1,b=null,_=null,L=null,U=null,P=null,V=null,N=null,F=new Pt(0,0,0),ee=0,w=!1,C=null,k=null,te=null,ce=null,de=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=Z>=2);let _e=null,ye={};const O=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),be=new nn().fromArray(O),Ae=new nn().fromArray(re);function Pe(G,Le,we,De){const Ee=new Uint8Array(4),ve=s.createTexture();s.bindTexture(G,ve),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<we;He++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Le+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return ve}const ae={};ae[s.TEXTURE_2D]=Pe(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(s.DEPTH_TEST),d.setFunc(Ds),ft(!1),xt(sg),ue(s.CULL_FACE),Rt(ma);function ue(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function Re(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function Ve(G,Le){return g[G]!==Le?(s.bindFramebuffer(G,Le),g[G]=Le,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Le),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function qe(G,Le){let we=M,De=!1;if(G){we=S.get(Le),we===void 0&&(we=[],S.set(Le,we));const Ee=G.textures;if(we.length!==Ee.length||we[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,He=Ee.length;ve<He;ve++)we[ve]=s.COLOR_ATTACHMENT0+ve;we.length=Ee.length,De=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,De=!0);De&&s.drawBuffers(we)}function lt(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const Jt={[wr]:s.FUNC_ADD,[Vb]:s.FUNC_SUBTRACT,[kb]:s.FUNC_REVERSE_SUBTRACT};Jt[Xb]=s.MIN,Jt[Wb]=s.MAX;const ut={[qb]:s.ZERO,[Yb]:s.ONE,[jb]:s.SRC_COLOR,[rh]:s.SRC_ALPHA,[e1]:s.SRC_ALPHA_SATURATE,[Jb]:s.DST_COLOR,[Kb]:s.DST_ALPHA,[Zb]:s.ONE_MINUS_SRC_COLOR,[sh]:s.ONE_MINUS_SRC_ALPHA,[$b]:s.ONE_MINUS_DST_COLOR,[Qb]:s.ONE_MINUS_DST_ALPHA,[t1]:s.CONSTANT_COLOR,[n1]:s.ONE_MINUS_CONSTANT_COLOR,[i1]:s.CONSTANT_ALPHA,[a1]:s.ONE_MINUS_CONSTANT_ALPHA};function Rt(G,Le,we,De,Ee,ve,He,rt,Ht,wt){if(G===ma){T===!0&&(Re(s.BLEND),T=!1);return}if(T===!1&&(ue(s.BLEND),T=!0),G!==Gb){if(G!==b||wt!==w){if((_!==wr||P!==wr)&&(s.blendEquation(s.FUNC_ADD),_=wr,P=wr),wt)switch(G){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ah:s.blendFunc(s.ONE,s.ONE);break;case og:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:sn("WebGLState: Invalid blending: ",G);break}else switch(G){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ah:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case og:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lg:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",G);break}L=null,U=null,V=null,N=null,F.set(0,0,0),ee=0,b=G,w=wt}return}Ee=Ee||Le,ve=ve||we,He=He||De,(Le!==_||Ee!==P)&&(s.blendEquationSeparate(Jt[Le],Jt[Ee]),_=Le,P=Ee),(we!==L||De!==U||ve!==V||He!==N)&&(s.blendFuncSeparate(ut[we],ut[De],ut[ve],ut[He]),L=we,U=De,V=ve,N=He),(rt.equals(F)===!1||Ht!==ee)&&(s.blendColor(rt.r,rt.g,rt.b,Ht),F.copy(rt),ee=Ht),b=G,w=!1}function H(G,Le){G.side===ha?Re(s.CULL_FACE):ue(s.CULL_FACE);let we=G.side===Wn;Le&&(we=!we),ft(we),G.blending===Cs&&G.transparent===!1?Rt(ma):Rt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const De=G.stencilWrite;h.setTest(De),De&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ie(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function xt(G){G!==Bb?(ue(s.CULL_FACE),G!==k&&(G===sg?s.cullFace(s.BACK):G===Ib?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),k=G}function vt(G){G!==te&&(z&&s.lineWidth(G),te=G)}function Ie(G,Le,we){G?(ue(s.POLYGON_OFFSET_FILL),(ce!==Le||de!==we)&&(s.polygonOffset(Le,we),ce=Le,de=we)):Re(s.POLYGON_OFFSET_FILL)}function It(G){G?ue(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function je(G){G===void 0&&(G=s.TEXTURE0+pe-1),_e!==G&&(s.activeTexture(G),_e=G)}function it(G,Le,we){we===void 0&&(_e===null?we=s.TEXTURE0+pe-1:we=_e);let De=ye[we];De===void 0&&(De={type:void 0,texture:void 0},ye[we]=De),(De.type!==G||De.texture!==Le)&&(_e!==we&&(s.activeTexture(we),_e=we),s.bindTexture(G,Le||ae[G]),De.type=G,De.texture=Le)}function D(){const G=ye[_e];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function K(){try{s.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function fe(){try{s.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ne(){try{s.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function ze(){try{s.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ue(){try{s.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Ze(){try{s.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function We(){try{s.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Me(){try{s.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Te(G){be.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),be.copy(G))}function Ke(G){Ae.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Ae.copy(G))}function Xe(G,Le){let we=p.get(Le);we===void 0&&(we=new WeakMap,p.set(Le,we));let De=we.get(G);De===void 0&&(De=s.getUniformBlockIndex(Le,G.name),we.set(G,De))}function Fe(G,Le){const De=p.get(Le).get(G);m.get(Le)!==De&&(s.uniformBlockBinding(Le,De,G.__bindingPointIndex),m.set(Le,De))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},_e=null,ye={},g={},S=new WeakMap,M=[],E=null,T=!1,b=null,_=null,L=null,U=null,P=null,V=null,N=null,F=new Pt(0,0,0),ee=0,w=!1,C=null,k=null,te=null,ce=null,de=null,be.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ue,disable:Re,bindFramebuffer:Ve,drawBuffers:qe,useProgram:lt,setBlending:Rt,setMaterial:H,setFlipSided:ft,setCullFace:xt,setLineWidth:vt,setPolygonOffset:Ie,setScissorTest:It,activeTexture:je,bindTexture:it,unbindTexture:D,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:We,texImage3D:Me,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:Ue,texStorage3D:Ze,texSubImage2D:K,texSubImage3D:fe,compressedTexSubImage2D:ne,compressedTexSubImage3D:ze,scissor:Te,viewport:Ke,reset:at}}function IT(s,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,x=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,v){return M?new OffscreenCanvas(D,v):Kc("canvas")}function T(D,v,I){let K=1;const fe=it(D);if((fe.width>I||fe.height>I)&&(K=I/Math.max(fe.width,fe.height)),K<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ne=Math.floor(K*fe.width),ze=Math.floor(K*fe.height);g===void 0&&(g=E(ne,ze));const Ue=v?E(ne,ze):g;return Ue.width=ne,Ue.height=ze,Ue.getContext("2d").drawImage(D,0,0,ne,ze),ot("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ne+"x"+ze+")."),Ue}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function b(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(D,v,I,K,fe=!1){if(D!==null){if(s[D]!==void 0)return s[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ne=v;if(v===s.RED&&(I===s.FLOAT&&(ne=s.R32F),I===s.HALF_FLOAT&&(ne=s.R16F),I===s.UNSIGNED_BYTE&&(ne=s.R8)),v===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(ne=s.R8UI),I===s.UNSIGNED_SHORT&&(ne=s.R16UI),I===s.UNSIGNED_INT&&(ne=s.R32UI),I===s.BYTE&&(ne=s.R8I),I===s.SHORT&&(ne=s.R16I),I===s.INT&&(ne=s.R32I)),v===s.RG&&(I===s.FLOAT&&(ne=s.RG32F),I===s.HALF_FLOAT&&(ne=s.RG16F),I===s.UNSIGNED_BYTE&&(ne=s.RG8)),v===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(ne=s.RG8UI),I===s.UNSIGNED_SHORT&&(ne=s.RG16UI),I===s.UNSIGNED_INT&&(ne=s.RG32UI),I===s.BYTE&&(ne=s.RG8I),I===s.SHORT&&(ne=s.RG16I),I===s.INT&&(ne=s.RG32I)),v===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(ne=s.RGB8UI),I===s.UNSIGNED_SHORT&&(ne=s.RGB16UI),I===s.UNSIGNED_INT&&(ne=s.RGB32UI),I===s.BYTE&&(ne=s.RGB8I),I===s.SHORT&&(ne=s.RGB16I),I===s.INT&&(ne=s.RGB32I)),v===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(ne=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(ne=s.RGBA16UI),I===s.UNSIGNED_INT&&(ne=s.RGBA32UI),I===s.BYTE&&(ne=s.RGBA8I),I===s.SHORT&&(ne=s.RGBA16I),I===s.INT&&(ne=s.RGBA32I)),v===s.RGB&&(I===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),I===s.UNSIGNED_INT_10F_11F_11F_REV&&(ne=s.R11F_G11F_B10F)),v===s.RGBA){const ze=fe?jc:Nt.getTransfer(K);I===s.FLOAT&&(ne=s.RGBA32F),I===s.HALF_FLOAT&&(ne=s.RGBA16F),I===s.UNSIGNED_BYTE&&(ne=ze===Xt?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function P(D,v){let I;return D?v===null||v===Nr||v===Wo?I=s.DEPTH24_STENCIL8:v===Oi?I=s.DEPTH32F_STENCIL8:v===Xo&&(I=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Nr||v===Wo?I=s.DEPTH_COMPONENT24:v===Oi?I=s.DEPTH_COMPONENT32F:v===Xo&&(I=s.DEPTH_COMPONENT16),I}function V(D,v){return b(D)===!0||D.isFramebufferTexture&&D.minFilter!==ri&&D.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?v.mipmaps.length:1}function N(D){const v=D.target;v.removeEventListener("dispose",N),ee(v),v.isVideoTexture&&x.delete(v)}function F(D){const v=D.target;v.removeEventListener("dispose",F),C(v)}function ee(D){const v=r.get(D);if(v.__webglInit===void 0)return;const I=D.source,K=S.get(I);if(K){const fe=K[v.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&w(D),Object.keys(K).length===0&&S.delete(I)}r.remove(D)}function w(D){const v=r.get(D);s.deleteTexture(v.__webglTexture);const I=D.source,K=S.get(I);delete K[v.__cacheKey],d.memory.textures--}function C(D){const v=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let fe=0;fe<v.__webglFramebuffer[K].length;fe++)s.deleteFramebuffer(v.__webglFramebuffer[K][fe]);else s.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)s.deleteFramebuffer(v.__webglFramebuffer[K]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=D.textures;for(let K=0,fe=I.length;K<fe;K++){const ne=r.get(I[K]);ne.__webglTexture&&(s.deleteTexture(ne.__webglTexture),d.memory.textures--),r.remove(I[K])}r.remove(D)}let k=0;function te(){k=0}function ce(){const D=k;return D>=l.maxTextures&&ot("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function de(D){const v=[];return v.push(D.wrapS),v.push(D.wrapT),v.push(D.wrapR||0),v.push(D.magFilter),v.push(D.minFilter),v.push(D.anisotropy),v.push(D.internalFormat),v.push(D.format),v.push(D.type),v.push(D.generateMipmaps),v.push(D.premultiplyAlpha),v.push(D.flipY),v.push(D.unpackAlignment),v.push(D.colorSpace),v.join()}function pe(D,v){const I=r.get(D);if(D.isVideoTexture&&It(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&I.__version!==D.version){const K=D.image;if(K===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(I,D,v);return}}else D.isExternalTexture&&(I.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+v)}function z(D,v){const I=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&I.__version!==D.version){ae(I,D,v);return}else D.isExternalTexture&&(I.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+v)}function Z(D,v){const I=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&I.__version!==D.version){ae(I,D,v);return}i.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+v)}function Y(D,v){const I=r.get(D);if(D.version>0&&I.__version!==D.version){ue(I,D,v);return}i.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+v)}const _e={[xh]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[gh]:s.MIRRORED_REPEAT},ye={[ri]:s.NEAREST,[p1]:s.NEAREST_MIPMAP_NEAREST,[xc]:s.NEAREST_MIPMAP_LINEAR,[Nn]:s.LINEAR,[Td]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},O={[_1]:s.NEVER,[T1]:s.ALWAYS,[S1]:s.LESS,[Lv]:s.LEQUAL,[y1]:s.EQUAL,[E1]:s.GEQUAL,[b1]:s.GREATER,[M1]:s.NOTEQUAL};function re(D,v){if(v.type===Oi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nn||v.magFilter===Td||v.magFilter===xc||v.magFilter===Ur||v.minFilter===Nn||v.minFilter===Td||v.minFilter===xc||v.minFilter===Ur)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,_e[v.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,_e[v.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,_e[v.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ye[v.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ye[v.minFilter]),v.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,O[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ri||v.minFilter!==xc&&v.minFilter!==Ur||v.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,l.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function be(D,v){let I=!1;D.__webglInit===void 0&&(D.__webglInit=!0,v.addEventListener("dispose",N));const K=v.source;let fe=S.get(K);fe===void 0&&(fe={},S.set(K,fe));const ne=de(v);if(ne!==D.__cacheKey){fe[ne]===void 0&&(fe[ne]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,I=!0),fe[ne].usedTimes++;const ze=fe[D.__cacheKey];ze!==void 0&&(fe[D.__cacheKey].usedTimes--,ze.usedTimes===0&&w(v)),D.__cacheKey=ne,D.__webglTexture=fe[ne].texture}return I}function Ae(D,v,I){return Math.floor(Math.floor(D/I)/v)}function Pe(D,v,I,K){const ne=D.updateRanges;if(ne.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,I,K,v.data);else{ne.sort((Me,Te)=>Me.start-Te.start);let ze=0;for(let Me=1;Me<ne.length;Me++){const Te=ne[ze],Ke=ne[Me],Xe=Te.start+Te.count,Fe=Ae(Ke.start,v.width,4),at=Ae(Te.start,v.width,4);Ke.start<=Xe+1&&Fe===at&&Ae(Ke.start+Ke.count-1,v.width,4)===Fe?Te.count=Math.max(Te.count,Ke.start+Ke.count-Te.start):(++ze,ne[ze]=Ke)}ne.length=ze+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),Ze=s.getParameter(s.UNPACK_SKIP_PIXELS),We=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Me=0,Te=ne.length;Me<Te;Me++){const Ke=ne[Me],Xe=Math.floor(Ke.start/4),Fe=Math.ceil(Ke.count/4),at=Xe%v.width,G=Math.floor(Xe/v.width),Le=Fe,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,at),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),i.texSubImage2D(s.TEXTURE_2D,0,at,G,Le,we,I,K,v.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,We)}}function ae(D,v,I){let K=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=s.TEXTURE_3D);const fe=be(D,v),ne=v.source;i.bindTexture(K,D.__webglTexture,s.TEXTURE0+I);const ze=r.get(ne);if(ne.version!==ze.__version||fe===!0){i.activeTexture(s.TEXTURE0+I);const Ue=Nt.getPrimaries(Nt.workingColorSpace),Ze=v.colorSpace===$a?null:Nt.getPrimaries(v.colorSpace),We=v.colorSpace===$a||Ue===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Me=T(v.image,!1,l.maxTextureSize);Me=je(v,Me);const Te=c.convert(v.format,v.colorSpace),Ke=c.convert(v.type);let Xe=U(v.internalFormat,Te,Ke,v.colorSpace,v.isVideoTexture);re(K,v);let Fe;const at=v.mipmaps,G=v.isVideoTexture!==!0,Le=ze.__version===void 0||fe===!0,we=ne.dataReady,De=V(v,Me);if(v.isDepthTexture)Xe=P(v.format===Yo,v.type),Le&&(G?i.texStorage2D(s.TEXTURE_2D,1,Xe,Me.width,Me.height):i.texImage2D(s.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Te,Ke,null));else if(v.isDataTexture)if(at.length>0){G&&Le&&i.texStorage2D(s.TEXTURE_2D,De,Xe,at[0].width,at[0].height);for(let Ee=0,ve=at.length;Ee<ve;Ee++)Fe=at[Ee],G?we&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Te,Ke,Fe.data):i.texImage2D(s.TEXTURE_2D,Ee,Xe,Fe.width,Fe.height,0,Te,Ke,Fe.data);v.generateMipmaps=!1}else G?(Le&&i.texStorage2D(s.TEXTURE_2D,De,Xe,Me.width,Me.height),we&&Pe(v,Me,Te,Ke)):i.texImage2D(s.TEXTURE_2D,0,Xe,Me.width,Me.height,0,Te,Ke,Me.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){G&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,De,Xe,at[0].width,at[0].height,Me.depth);for(let Ee=0,ve=at.length;Ee<ve;Ee++)if(Fe=at[Ee],v.format!==xi)if(Te!==null)if(G){if(we)if(v.layerUpdates.size>0){const He=Pg(Fe.width,Fe.height,v.format,v.type);for(const rt of v.layerUpdates){const Ht=Fe.data.subarray(rt*He/Fe.data.BYTES_PER_ELEMENT,(rt+1)*He/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,rt,Fe.width,Fe.height,1,Te,Ht)}v.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,Me.depth,Te,Fe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Xe,Fe.width,Fe.height,Me.depth,0,Fe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?we&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,Me.depth,Te,Ke,Fe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Xe,Fe.width,Fe.height,Me.depth,0,Te,Ke,Fe.data)}else{G&&Le&&i.texStorage2D(s.TEXTURE_2D,De,Xe,at[0].width,at[0].height);for(let Ee=0,ve=at.length;Ee<ve;Ee++)Fe=at[Ee],v.format!==xi?Te!==null?G?we&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Te,Fe.data):i.compressedTexImage2D(s.TEXTURE_2D,Ee,Xe,Fe.width,Fe.height,0,Fe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?we&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Te,Ke,Fe.data):i.texImage2D(s.TEXTURE_2D,Ee,Xe,Fe.width,Fe.height,0,Te,Ke,Fe.data)}else if(v.isDataArrayTexture)if(G){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,De,Xe,Me.width,Me.height,Me.depth),we)if(v.layerUpdates.size>0){const Ee=Pg(Me.width,Me.height,v.format,v.type);for(const ve of v.layerUpdates){const He=Me.data.subarray(ve*Ee/Me.data.BYTES_PER_ELEMENT,(ve+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,Me.width,Me.height,1,Te,Ke,He)}v.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Te,Ke,Me.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,Me.width,Me.height,Me.depth,0,Te,Ke,Me.data);else if(v.isData3DTexture)G?(Le&&i.texStorage3D(s.TEXTURE_3D,De,Xe,Me.width,Me.height,Me.depth),we&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Te,Ke,Me.data)):i.texImage3D(s.TEXTURE_3D,0,Xe,Me.width,Me.height,Me.depth,0,Te,Ke,Me.data);else if(v.isFramebufferTexture){if(Le)if(G)i.texStorage2D(s.TEXTURE_2D,De,Xe,Me.width,Me.height);else{let Ee=Me.width,ve=Me.height;for(let He=0;He<De;He++)i.texImage2D(s.TEXTURE_2D,He,Xe,Ee,ve,0,Te,Ke,null),Ee>>=1,ve>>=1}}else if(at.length>0){if(G&&Le){const Ee=it(at[0]);i.texStorage2D(s.TEXTURE_2D,De,Xe,Ee.width,Ee.height)}for(let Ee=0,ve=at.length;Ee<ve;Ee++)Fe=at[Ee],G?we&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Te,Ke,Fe):i.texImage2D(s.TEXTURE_2D,Ee,Xe,Te,Ke,Fe);v.generateMipmaps=!1}else if(G){if(Le){const Ee=it(Me);i.texStorage2D(s.TEXTURE_2D,De,Xe,Ee.width,Ee.height)}we&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,Ke,Me)}else i.texImage2D(s.TEXTURE_2D,0,Xe,Te,Ke,Me);b(v)&&_(K),ze.__version=ne.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function ue(D,v,I){if(v.image.length!==6)return;const K=be(D,v),fe=v.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+I);const ne=r.get(fe);if(fe.version!==ne.__version||K===!0){i.activeTexture(s.TEXTURE0+I);const ze=Nt.getPrimaries(Nt.workingColorSpace),Ue=v.colorSpace===$a?null:Nt.getPrimaries(v.colorSpace),Ze=v.colorSpace===$a||ze===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const We=v.isCompressedTexture||v.image[0].isCompressedTexture,Me=v.image[0]&&v.image[0].isDataTexture,Te=[];for(let ve=0;ve<6;ve++)!We&&!Me?Te[ve]=T(v.image[ve],!0,l.maxCubemapSize):Te[ve]=Me?v.image[ve].image:v.image[ve],Te[ve]=je(v,Te[ve]);const Ke=Te[0],Xe=c.convert(v.format,v.colorSpace),Fe=c.convert(v.type),at=U(v.internalFormat,Xe,Fe,v.colorSpace),G=v.isVideoTexture!==!0,Le=ne.__version===void 0||K===!0,we=fe.dataReady;let De=V(v,Ke);re(s.TEXTURE_CUBE_MAP,v);let Ee;if(We){G&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,De,at,Ke.width,Ke.height);for(let ve=0;ve<6;ve++){Ee=Te[ve].mipmaps;for(let He=0;He<Ee.length;He++){const rt=Ee[He];v.format!==xi?Xe!==null?G?we&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,rt.width,rt.height,Xe,rt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,at,rt.width,rt.height,0,rt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?we&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,0,0,rt.width,rt.height,Xe,Fe,rt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He,at,rt.width,rt.height,0,Xe,Fe,rt.data)}}}else{if(Ee=v.mipmaps,G&&Le){Ee.length>0&&De++;const ve=it(Te[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,De,at,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Me){G?we&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Te[ve].width,Te[ve].height,Xe,Fe,Te[ve].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,Te[ve].width,Te[ve].height,0,Xe,Fe,Te[ve].data);for(let He=0;He<Ee.length;He++){const Ht=Ee[He].image[ve].image;G?we&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Ht.width,Ht.height,Xe,Fe,Ht.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,at,Ht.width,Ht.height,0,Xe,Fe,Ht.data)}}else{G?we&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Xe,Fe,Te[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,Xe,Fe,Te[ve]);for(let He=0;He<Ee.length;He++){const rt=Ee[He];G?we&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,0,0,Xe,Fe,rt.image[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,He+1,at,Xe,Fe,rt.image[ve])}}}b(v)&&_(s.TEXTURE_CUBE_MAP),ne.__version=fe.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function Re(D,v,I,K,fe,ne){const ze=c.convert(I.format,I.colorSpace),Ue=c.convert(I.type),Ze=U(I.internalFormat,ze,Ue,I.colorSpace),We=r.get(v),Me=r.get(I);if(Me.__renderTarget=v,!We.__hasExternalTextures){const Te=Math.max(1,v.width>>ne),Ke=Math.max(1,v.height>>ne);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?i.texImage3D(fe,ne,Ze,Te,Ke,v.depth,0,ze,Ue,null):i.texImage2D(fe,ne,Ze,Te,Ke,0,ze,Ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),Ie(v)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,fe,Me.__webglTexture,0,vt(v)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,fe,Me.__webglTexture,ne),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(D,v,I){if(s.bindRenderbuffer(s.RENDERBUFFER,D),v.depthBuffer){const K=v.depthTexture,fe=K&&K.isDepthTexture?K.type:null,ne=P(v.stencilBuffer,fe),ze=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=vt(v);Ie(v)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,ne,v.width,v.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,ne,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ne,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,D)}else{const K=v.textures;for(let fe=0;fe<K.length;fe++){const ne=K[fe],ze=c.convert(ne.format,ne.colorSpace),Ue=c.convert(ne.type),Ze=U(ne.internalFormat,ze,Ue,ne.colorSpace),We=vt(v);I&&Ie(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ze,v.width,v.height):Ie(v)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,Ze,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Ze,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qe(D,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=r.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),pe(v.depthTexture,0);const fe=K.__webglTexture,ne=vt(v);if(v.depthTexture.format===qo)Ie(v)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(v.depthTexture.format===Yo)Ie(v)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,ne):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function lt(D){const v=r.get(D),I=D.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==D.depthTexture){const K=D.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const fe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",fe)};K.addEventListener("dispose",fe),v.__depthDisposeCallback=fe}v.__boundDepthTexture=K}if(D.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const K=D.texture.mipmaps;K&&K.length>0?qe(v.__webglFramebuffer[0],D):qe(v.__webglFramebuffer,D)}else if(I){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(i.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=s.createRenderbuffer(),Ve(v.__webglDepthbuffer[K],D,!1);else{const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=v.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ne)}}else{const K=D.texture.mipmaps;if(K&&K.length>0?i.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Ve(v.__webglDepthbuffer,D,!1);else{const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ne)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Jt(D,v,I){const K=r.get(D);v!==void 0&&Re(K.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&lt(D)}function ut(D){const v=D.texture,I=r.get(D),K=r.get(v);D.addEventListener("dispose",F);const fe=D.textures,ne=D.isWebGLCubeRenderTarget===!0,ze=fe.length>1;if(ze||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=v.version,d.memory.textures++),ne){I.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[Ue]=[];for(let Ze=0;Ze<v.mipmaps.length;Ze++)I.__webglFramebuffer[Ue][Ze]=s.createFramebuffer()}else I.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let Ue=0;Ue<v.mipmaps.length;Ue++)I.__webglFramebuffer[Ue]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Ue=0,Ze=fe.length;Ue<Ze;Ue++){const We=r.get(fe[Ue]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),d.memory.textures++)}if(D.samples>0&&Ie(D)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Ue=0;Ue<fe.length;Ue++){const Ze=fe[Ue];I.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[Ue]);const We=c.convert(Ze.format,Ze.colorSpace),Me=c.convert(Ze.type),Te=U(Ze.internalFormat,We,Me,Ze.colorSpace,D.isXRRenderTarget===!0),Ke=vt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Te,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,I.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),Ve(I.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),re(s.TEXTURE_CUBE_MAP,v);for(let Ue=0;Ue<6;Ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ze=0;Ze<v.mipmaps.length;Ze++)Re(I.__webglFramebuffer[Ue][Ze],D,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ze);else Re(I.__webglFramebuffer[Ue],D,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);b(v)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ze){for(let Ue=0,Ze=fe.length;Ue<Ze;Ue++){const We=fe[Ue],Me=r.get(We);let Te=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Te,Me.__webglTexture),re(Te,We),Re(I.__webglFramebuffer,D,We,s.COLOR_ATTACHMENT0+Ue,Te,0),b(We)&&_(Te)}i.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,K.__webglTexture),re(Ue,v),v.mipmaps&&v.mipmaps.length>0)for(let Ze=0;Ze<v.mipmaps.length;Ze++)Re(I.__webglFramebuffer[Ze],D,v,s.COLOR_ATTACHMENT0,Ue,Ze);else Re(I.__webglFramebuffer,D,v,s.COLOR_ATTACHMENT0,Ue,0);b(v)&&_(Ue),i.unbindTexture()}D.depthBuffer&&lt(D)}function Rt(D){const v=D.textures;for(let I=0,K=v.length;I<K;I++){const fe=v[I];if(b(fe)){const ne=L(D),ze=r.get(fe).__webglTexture;i.bindTexture(ne,ze),_(ne),i.unbindTexture()}}}const H=[],ft=[];function xt(D){if(D.samples>0){if(Ie(D)===!1){const v=D.textures,I=D.width,K=D.height;let fe=s.COLOR_BUFFER_BIT;const ne=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=r.get(D),Ue=v.length>1;if(Ue)for(let We=0;We<v.length;We++)i.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Ze=D.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let We=0;We<v.length;We++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[We]);const Me=r.get(v[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,I,K,0,0,I,K,fe,s.NEAREST),m===!0&&(H.length=0,ft.length=0,H.push(s.COLOR_ATTACHMENT0+We),D.depthBuffer&&D.resolveDepthBuffer===!1&&(H.push(ne),ft.push(ne),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ft)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let We=0;We<v.length;We++){i.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,ze.__webglColorRenderbuffer[We]);const Me=r.get(v[We]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,Me,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const v=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function vt(D){return Math.min(l.maxSamples,D.samples)}function Ie(D){const v=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function It(D){const v=d.render.frame;x.get(D)!==v&&(x.set(D,v),D.update())}function je(D,v){const I=D.colorSpace,K=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||I!==Ns&&I!==$a&&(Nt.getTransfer(I)===Xt?(K!==xi||fe!==_a)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",I)),v}function it(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=te,this.setTexture2D=pe,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Jt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ie}function HT(s,e){function i(r,l=$a){let c;const d=Nt.getTransfer(l);if(r===_a)return s.UNSIGNED_BYTE;if(r===tp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===np)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Rv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Cv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Tv)return s.BYTE;if(r===Av)return s.SHORT;if(r===Xo)return s.UNSIGNED_SHORT;if(r===ep)return s.INT;if(r===Nr)return s.UNSIGNED_INT;if(r===Oi)return s.FLOAT;if(r===Pr)return s.HALF_FLOAT;if(r===wv)return s.ALPHA;if(r===Dv)return s.RGB;if(r===xi)return s.RGBA;if(r===qo)return s.DEPTH_COMPONENT;if(r===Yo)return s.DEPTH_STENCIL;if(r===Uv)return s.RED;if(r===ip)return s.RED_INTEGER;if(r===ap)return s.RG;if(r===rp)return s.RG_INTEGER;if(r===sp)return s.RGBA_INTEGER;if(r===Vc||r===kc||r===Xc||r===Wc)if(d===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vh||r===_h||r===Sh||r===yh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_h)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bh||r===Mh||r===Eh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===bh||r===Mh)return d===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Eh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===zh||r===Fh||r===Bh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Th)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ah)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ch)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Fh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ih||r===Hh||r===Gh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ih)return d===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vh||r===kh||r===Xh||r===Wh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Vh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===kh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const GT=`
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

}`;class kT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new qv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Fi({vertexShader:GT,fragmentShader:VT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Lr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XT extends Fs{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,x=null,g=null,S=null,M=null,E=null;const T=typeof XRWebGLBinding<"u",b=new kT,_={},L=i.getContextAttributes();let U=null,P=null;const V=[],N=[],F=new ct;let ee=null;const w=new Ei;w.viewport=new nn;const C=new Ei;C.viewport=new nn;const k=[w,C],te=new lM;let ce=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ue=V[ae];return ue===void 0&&(ue=new jd,V[ae]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ae){let ue=V[ae];return ue===void 0&&(ue=new jd,V[ae]=ue),ue.getGripSpace()},this.getHand=function(ae){let ue=V[ae];return ue===void 0&&(ue=new jd,V[ae]=ue),ue.getHandSpace()};function pe(ae){const ue=N.indexOf(ae.inputSource);if(ue===-1)return;const Re=V[ue];Re!==void 0&&(Re.update(ae.inputSource,ae.frame,p||d),Re.dispatchEvent({type:ae.type,data:ae.inputSource}))}function z(){l.removeEventListener("select",pe),l.removeEventListener("selectstart",pe),l.removeEventListener("selectend",pe),l.removeEventListener("squeeze",pe),l.removeEventListener("squeezestart",pe),l.removeEventListener("squeezeend",pe),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",Z);for(let ae=0;ae<V.length;ae++){const ue=N[ae];ue!==null&&(N[ae]=null,V[ae].disconnect(ue))}ce=null,de=null,b.reset();for(const ae in _)delete _[ae];e.setRenderTarget(U),M=null,S=null,g=null,l=null,P=null,Pe.stop(),r.isPresenting=!1,e.setPixelRatio(ee),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",pe),l.addEventListener("selectstart",pe),l.addEventListener("selectend",pe),l.addEventListener("squeeze",pe),l.addEventListener("squeezestart",pe),l.addEventListener("squeezeend",pe),l.addEventListener("end",z),l.addEventListener("inputsourceschange",Z),L.xrCompatible!==!0&&await i.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ve=null,qe=null;L.depth&&(qe=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=L.stencil?Yo:qo,Ve=L.stencil?Wo:Nr);const lt={colorFormat:i.RGBA8,depthFormat:qe,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(lt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new ir(S.textureWidth,S.textureHeight,{format:xi,type:_a,depthTexture:new Wv(S.textureWidth,S.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Re={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ir(M.framebufferWidth,M.framebufferHeight,{format:xi,type:_a,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Pe.setContext(l),Pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Z(ae){for(let ue=0;ue<ae.removed.length;ue++){const Re=ae.removed[ue],Ve=N.indexOf(Re);Ve>=0&&(N[Ve]=null,V[Ve].disconnect(Re))}for(let ue=0;ue<ae.added.length;ue++){const Re=ae.added[ue];let Ve=N.indexOf(Re);if(Ve===-1){for(let lt=0;lt<V.length;lt++)if(lt>=N.length){N.push(Re),Ve=lt;break}else if(N[lt]===null){N[lt]=Re,Ve=lt;break}if(Ve===-1)break}const qe=V[Ve];qe&&qe.connect(Re)}}const Y=new le,_e=new le;function ye(ae,ue,Re){Y.setFromMatrixPosition(ue.matrixWorld),_e.setFromMatrixPosition(Re.matrixWorld);const Ve=Y.distanceTo(_e),qe=ue.projectionMatrix.elements,lt=Re.projectionMatrix.elements,Jt=qe[14]/(qe[10]-1),ut=qe[14]/(qe[10]+1),Rt=(qe[9]+1)/qe[5],H=(qe[9]-1)/qe[5],ft=(qe[8]-1)/qe[0],xt=(lt[8]+1)/lt[0],vt=Jt*ft,Ie=Jt*xt,It=Ve/(-ft+xt),je=It*-ft;if(ue.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(je),ae.translateZ(It),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),qe[10]===-1)ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const it=Jt+It,D=ut+It,v=vt-je,I=Ie+(Ve-je),K=Rt*ut/D*it,fe=H*ut/D*it;ae.projectionMatrix.makePerspective(v,I,K,fe,it,D),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,ue){ue===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ue.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let ue=ae.near,Re=ae.far;b.texture!==null&&(b.depthNear>0&&(ue=b.depthNear),b.depthFar>0&&(Re=b.depthFar)),te.near=C.near=w.near=ue,te.far=C.far=w.far=Re,(ce!==te.near||de!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),ce=te.near,de=te.far),te.layers.mask=ae.layers.mask|6,w.layers.mask=te.layers.mask&3,C.layers.mask=te.layers.mask&5;const Ve=ae.parent,qe=te.cameras;O(te,Ve);for(let lt=0;lt<qe.length;lt++)O(qe[lt],Ve);qe.length===2?ye(te,w,C):te.projectionMatrix.copy(w.projectionMatrix),re(ae,te,Ve)};function re(ae,ue,Re){Re===null?ae.matrix.copy(ue.matrixWorld):(ae.matrix.copy(Re.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ue.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=qh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(ae){m=ae,S!==null&&(S.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(te)},this.getCameraTexture=function(ae){return _[ae]};let be=null;function Ae(ae,ue){if(x=ue.getViewerPose(p||d),E=ue,x!==null){const Re=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ve=!1;Re.length!==te.cameras.length&&(te.cameras.length=0,Ve=!0);for(let ut=0;ut<Re.length;ut++){const Rt=Re[ut];let H=null;if(M!==null)H=M.getViewport(Rt);else{const xt=g.getViewSubImage(S,Rt);H=xt.viewport,ut===0&&(e.setRenderTargetTextures(P,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(P))}let ft=k[ut];ft===void 0&&(ft=new Ei,ft.layers.enable(ut),ft.viewport=new nn,k[ut]=ft),ft.matrix.fromArray(Rt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Rt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(H.x,H.y,H.width,H.height),ut===0&&(te.matrix.copy(ft.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Ve===!0&&te.cameras.push(ft)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const ut=g.getDepthInformation(Re[0]);ut&&ut.isValid&&ut.texture&&b.init(ut,l.renderState)}if(qe&&qe.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let ut=0;ut<Re.length;ut++){const Rt=Re[ut].camera;if(Rt){let H=_[Rt];H||(H=new qv,_[Rt]=H);const ft=g.getCameraImage(Rt);H.sourceTexture=ft}}}}for(let Re=0;Re<V.length;Re++){const Ve=N[Re],qe=V[Re];Ve!==null&&qe!==void 0&&qe.update(Ve,ue,p||d)}be&&be(ae,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Pe=new Yv;Pe.setAnimationLoop(Ae),this.setAnimationLoop=function(ae){be=ae},this.dispose=function(){}}}const Rr=new Sa,WT=new hn;function qT(s,e){function i(b,_){b.matrixAutoUpdate===!0&&b.updateMatrix(),_.value.copy(b.matrix)}function r(b,_){_.color.getRGB(b.fogColor.value,Gv(s)),_.isFog?(b.fogNear.value=_.near,b.fogFar.value=_.far):_.isFogExp2&&(b.fogDensity.value=_.density)}function l(b,_,L,U,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(b,_):_.isMeshToonMaterial?(c(b,_),g(b,_)):_.isMeshPhongMaterial?(c(b,_),x(b,_)):_.isMeshStandardMaterial?(c(b,_),S(b,_),_.isMeshPhysicalMaterial&&M(b,_,P)):_.isMeshMatcapMaterial?(c(b,_),E(b,_)):_.isMeshDepthMaterial?c(b,_):_.isMeshDistanceMaterial?(c(b,_),T(b,_)):_.isMeshNormalMaterial?c(b,_):_.isLineBasicMaterial?(d(b,_),_.isLineDashedMaterial&&h(b,_)):_.isPointsMaterial?m(b,_,L,U):_.isSpriteMaterial?p(b,_):_.isShadowMaterial?(b.color.value.copy(_.color),b.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(b,_){b.opacity.value=_.opacity,_.color&&b.diffuse.value.copy(_.color),_.emissive&&b.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.bumpMap&&(b.bumpMap.value=_.bumpMap,i(_.bumpMap,b.bumpMapTransform),b.bumpScale.value=_.bumpScale,_.side===Wn&&(b.bumpScale.value*=-1)),_.normalMap&&(b.normalMap.value=_.normalMap,i(_.normalMap,b.normalMapTransform),b.normalScale.value.copy(_.normalScale),_.side===Wn&&b.normalScale.value.negate()),_.displacementMap&&(b.displacementMap.value=_.displacementMap,i(_.displacementMap,b.displacementMapTransform),b.displacementScale.value=_.displacementScale,b.displacementBias.value=_.displacementBias),_.emissiveMap&&(b.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,b.emissiveMapTransform)),_.specularMap&&(b.specularMap.value=_.specularMap,i(_.specularMap,b.specularMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest);const L=e.get(_),U=L.envMap,P=L.envMapRotation;U&&(b.envMap.value=U,Rr.copy(P),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),b.envMapRotation.value.setFromMatrix4(WT.makeRotationFromEuler(Rr)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=_.reflectivity,b.ior.value=_.ior,b.refractionRatio.value=_.refractionRatio),_.lightMap&&(b.lightMap.value=_.lightMap,b.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,b.lightMapTransform)),_.aoMap&&(b.aoMap.value=_.aoMap,b.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,b.aoMapTransform))}function d(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform))}function h(b,_){b.dashSize.value=_.dashSize,b.totalSize.value=_.dashSize+_.gapSize,b.scale.value=_.scale}function m(b,_,L,U){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.size.value=_.size*L,b.scale.value=U*.5,_.map&&(b.map.value=_.map,i(_.map,b.uvTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function p(b,_){b.diffuse.value.copy(_.color),b.opacity.value=_.opacity,b.rotation.value=_.rotation,_.map&&(b.map.value=_.map,i(_.map,b.mapTransform)),_.alphaMap&&(b.alphaMap.value=_.alphaMap,i(_.alphaMap,b.alphaMapTransform)),_.alphaTest>0&&(b.alphaTest.value=_.alphaTest)}function x(b,_){b.specular.value.copy(_.specular),b.shininess.value=Math.max(_.shininess,1e-4)}function g(b,_){_.gradientMap&&(b.gradientMap.value=_.gradientMap)}function S(b,_){b.metalness.value=_.metalness,_.metalnessMap&&(b.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,b.metalnessMapTransform)),b.roughness.value=_.roughness,_.roughnessMap&&(b.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,b.roughnessMapTransform)),_.envMap&&(b.envMapIntensity.value=_.envMapIntensity)}function M(b,_,L){b.ior.value=_.ior,_.sheen>0&&(b.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),b.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(b.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,b.sheenColorMapTransform)),_.sheenRoughnessMap&&(b.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,b.sheenRoughnessMapTransform))),_.clearcoat>0&&(b.clearcoat.value=_.clearcoat,b.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(b.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,b.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(b.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&b.clearcoatNormalScale.value.negate())),_.dispersion>0&&(b.dispersion.value=_.dispersion),_.iridescence>0&&(b.iridescence.value=_.iridescence,b.iridescenceIOR.value=_.iridescenceIOR,b.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(b.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,b.iridescenceMapTransform)),_.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),_.transmission>0&&(b.transmission.value=_.transmission,b.transmissionSamplerMap.value=L.texture,b.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(b.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,b.transmissionMapTransform)),b.thickness.value=_.thickness,_.thicknessMap&&(b.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=_.attenuationDistance,b.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(b.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(b.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=_.specularIntensity,b.specularColor.value.copy(_.specularColor),_.specularColorMap&&(b.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,b.specularColorMapTransform)),_.specularIntensityMap&&(b.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,_){_.matcap&&(b.matcap.value=_.matcap)}function T(b,_){const L=e.get(_).light;b.referencePosition.value.setFromMatrixPosition(L.matrixWorld),b.nearDistance.value=L.shadow.camera.near,b.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function YT(s,e,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const P=U.program;r.uniformBlockBinding(L,P)}function p(L,U){let P=l[L.id];P===void 0&&(E(L),P=x(L),l[L.id]=P,L.addEventListener("dispose",b));const V=U.program;r.updateUBOMapping(L,V);const N=e.render.frame;c[L.id]!==N&&(S(L),c[L.id]=N)}function x(L){const U=g();L.__bindingPointIndex=U;const P=s.createBuffer(),V=L.__size,N=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,V,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,P),P}function g(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const U=l[L.id],P=L.uniforms,V=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let N=0,F=P.length;N<F;N++){const ee=Array.isArray(P[N])?P[N]:[P[N]];for(let w=0,C=ee.length;w<C;w++){const k=ee[w];if(M(k,N,w,V)===!0){const te=k.__offset,ce=Array.isArray(k.value)?k.value:[k.value];let de=0;for(let pe=0;pe<ce.length;pe++){const z=ce[pe],Z=T(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,te+de,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,de),de+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,U,P,V){const N=L.value,F=U+"_"+P;if(V[F]===void 0)return typeof N=="number"||typeof N=="boolean"?V[F]=N:V[F]=N.clone(),!0;{const ee=V[F];if(typeof N=="number"||typeof N=="boolean"){if(ee!==N)return V[F]=N,!0}else if(ee.equals(N)===!1)return ee.copy(N),!0}return!1}function E(L){const U=L.uniforms;let P=0;const V=16;for(let F=0,ee=U.length;F<ee;F++){const w=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,k=w.length;C<k;C++){const te=w[C],ce=Array.isArray(te.value)?te.value:[te.value];for(let de=0,pe=ce.length;de<pe;de++){const z=ce[de],Z=T(z),Y=P%V,_e=Y%Z.boundary,ye=Y+_e;P+=_e,ye!==0&&V-ye<Z.storage&&(P+=V-ye),te.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=P,P+=Z.storage}}}const N=P%V;return N>0&&(P+=V-N),L.__size=P,L.__cache={},this}function T(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",L),U}function b(L){const U=L.target;U.removeEventListener("dispose",b);const P=d.indexOf(U.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}const jT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let fa=null;function ZT(){return fa===null&&(fa=new kv(jT,32,32,ap,Pr),fa.minFilter=Nn,fa.magFilter=Nn,fa.wrapS=ai,fa.wrapT=ai,fa.generateMipmaps=!1,fa.needsUpdate=!0),fa}class KT{constructor(e={}){const{canvas:i=A1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const E=new Set([sp,rp,ip]),T=new Set([_a,Nr,Xo,Wo,tp,np]),b=new Uint32Array(4),_=new Int32Array(4);let L=null,U=null;const P=[],V=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1;this._outputColorSpace=mi;let ee=0,w=0,C=null,k=-1,te=null;const ce=new nn,de=new nn;let pe=null;const z=new Pt(0);let Z=0,Y=i.width,_e=i.height,ye=1,O=null,re=null;const be=new nn(0,0,Y,_e),Ae=new nn(0,0,Y,_e);let Pe=!1;const ae=new Xv;let ue=!1,Re=!1;const Ve=new hn,qe=new le,lt=new nn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Rt(){return C===null?ye:1}let H=r;function ft(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$h}`),i.addEventListener("webglcontextlost",Ee,!1),i.addEventListener("webglcontextrestored",ve,!1),i.addEventListener("webglcontextcreationerror",He,!1),H===null){const W="webgl2";if(H=ft(W,R),H===null)throw ft(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let xt,vt,Ie,It,je,it,D,v,I,K,fe,ne,ze,Ue,Ze,We,Me,Te,Ke,Xe,Fe,at,G,Le;function we(){xt=new a2(H),xt.init(),at=new HT(H,xt),vt=new ZE(H,xt,e,at),Ie=new BT(H,xt),vt.reversedDepthBuffer&&S&&Ie.buffers.depth.setReversed(!0),It=new o2(H),je=new TT,it=new IT(H,xt,Ie,je,vt,at,It),D=new QE(N),v=new i2(N),I=new fM(H),G=new YE(H,I),K=new r2(H,I,It,G),fe=new c2(H,K,I,It),Ke=new l2(H,vt,it),We=new KE(je),ne=new ET(N,D,v,xt,vt,G,We),ze=new qT(N,je),Ue=new RT,Ze=new NT(xt),Te=new qE(N,D,v,Ie,fe,M,m),Me=new zT(N,fe,vt),Le=new YT(H,It,vt,Ie),Xe=new jE(H,xt,It),Fe=new s2(H,xt,It),It.programs=ne.programs,N.capabilities=vt,N.extensions=xt,N.properties=je,N.renderLists=Ue,N.shadowMap=Me,N.state=Ie,N.info=It}we();const De=new XT(N,H);this.xr=De,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(R){R!==void 0&&(ye=R,this.setSize(Y,_e,!1))},this.getSize=function(R){return R.set(Y,_e)},this.setSize=function(R,W,se=!0){if(De.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,_e=W,i.width=Math.floor(R*ye),i.height=Math.floor(W*ye),se===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(Y*ye,_e*ye).floor()},this.setDrawingBufferSize=function(R,W,se){Y=R,_e=W,ye=se,i.width=Math.floor(R*se),i.height=Math.floor(W*se),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(ce)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,W,se,$){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,W,se,$),Ie.viewport(ce.copy(be).multiplyScalar(ye).round())},this.getScissor=function(R){return R.copy(Ae)},this.setScissor=function(R,W,se,$){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,W,se,$),Ie.scissor(de.copy(Ae).multiplyScalar(ye).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){Ie.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,se=!0){let $=0;if(R){let j=!1;if(C!==null){const Ce=C.texture.format;j=E.has(Ce)}if(j){const Ce=C.texture.type,Ne=T.has(Ce),Be=Te.getClearColor(),Ge=Te.getClearAlpha(),et=Be.r,nt=Be.g,Qe=Be.b;Ne?(b[0]=et,b[1]=nt,b[2]=Qe,b[3]=Ge,H.clearBufferuiv(H.COLOR,0,b)):(_[0]=et,_[1]=nt,_[2]=Qe,_[3]=Ge,H.clearBufferiv(H.COLOR,0,_))}else $|=H.COLOR_BUFFER_BIT}W&&($|=H.DEPTH_BUFFER_BIT),se&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ee,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",He,!1),Te.dispose(),Ue.dispose(),Ze.dispose(),je.dispose(),D.dispose(),v.dispose(),fe.dispose(),G.dispose(),Le.dispose(),ne.dispose(),De.dispose(),De.removeEventListener("sessionstart",Is),De.removeEventListener("sessionend",Hs),gi.stop()};function Ee(R){R.preventDefault(),hg("WebGLRenderer: Context Lost."),F=!0}function ve(){hg("WebGLRenderer: Context Restored."),F=!1;const R=It.autoReset,W=Me.enabled,se=Me.autoUpdate,$=Me.needsUpdate,j=Me.type;we(),It.autoReset=R,Me.enabled=W,Me.autoUpdate=se,Me.needsUpdate=$,Me.type=j}function He(R){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const W=R.target;W.removeEventListener("dispose",rt),Ht(W)}function Ht(R){wt(R),je.remove(R)}function wt(R){const W=je.get(R).programs;W!==void 0&&(W.forEach(function(se){ne.releaseProgram(se)}),R.isShaderMaterial&&ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,se,$,j,Ce){W===null&&(W=Jt);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,Be=lu(R,W,se,$,j);Ie.setMaterial($,Ne);let Ge=se.index,et=1;if($.wireframe===!0){if(Ge=K.getWireframeAttribute(se),Ge===void 0)return;et=2}const nt=se.drawRange,Qe=se.attributes.position;let ht=nt.start*et,Ct=(nt.start+nt.count)*et;Ce!==null&&(ht=Math.max(ht,Ce.start*et),Ct=Math.min(Ct,(Ce.start+Ce.count)*et)),Ge!==null?(ht=Math.max(ht,0),Ct=Math.min(Ct,Ge.count)):Qe!=null&&(ht=Math.max(ht,0),Ct=Math.min(Ct,Qe.count));const Dt=Ct-ht;if(Dt<0||Dt===1/0)return;G.setup(j,$,Be,se,Ge);let Mt,zt=Xe;if(Ge!==null&&(Mt=I.get(Ge),zt=Fe,zt.setIndex(Mt)),j.isMesh)$.wireframe===!0?(Ie.setLineWidth($.wireframeLinewidth*Rt()),zt.setMode(H.LINES)):zt.setMode(H.TRIANGLES);else if(j.isLine){let $e=$.linewidth;$e===void 0&&($e=1),Ie.setLineWidth($e*Rt()),j.isLineSegments?zt.setMode(H.LINES):j.isLineLoop?zt.setMode(H.LINE_LOOP):zt.setMode(H.LINE_STRIP)}else j.isPoints?zt.setMode(H.POINTS):j.isSprite&&zt.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))zt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const $e=j._multiDrawStarts,Wt=j._multiDrawCounts,Et=j._multiDrawCount,_n=Ge?I.get(Ge).bytesPerElement:1,Ma=je.get($).currentProgram.getUniforms();for(let Yt=0;Yt<Et;Yt++)Ma.setValue(H,"_gl_DrawID",Yt),zt.render($e[Yt]/_n,Wt[Yt])}else if(j.isInstancedMesh)zt.renderInstances(ht,Dt,j.count);else if(se.isInstancedBufferGeometry){const $e=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Wt=Math.min(se.instanceCount,$e);zt.renderInstances(ht,Dt,Wt)}else zt.render(ht,Dt)};function wn(R,W,se){R.transparent===!0&&R.side===ha&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,pn(R,W,se),R.side=nr,R.needsUpdate=!0,pn(R,W,se),R.side=ha):pn(R,W,se)}this.compile=function(R,W,se=null){se===null&&(se=R),U=Ze.get(se),U.init(W),V.push(U),se.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(U.pushLight(j),j.castShadow&&U.pushShadow(j))}),R!==se&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(U.pushLight(j),j.castShadow&&U.pushShadow(j))}),U.setupLights();const $=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const Be=Ce[Ne];wn(Be,se,j),$.add(Be)}else wn(Ce,se,j),$.add(Ce)}),U=V.pop(),$},this.compileAsync=function(R,W,se=null){const $=this.compile(R,W,se);return new Promise(j=>{function Ce(){if($.forEach(function(Ne){je.get(Ne).currentProgram.isReady()&&$.delete(Ne)}),$.size===0){j(R);return}setTimeout(Ce,10)}xt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Yn=null;function al(R){Yn&&Yn(R)}function Is(){gi.stop()}function Hs(){gi.start()}const gi=new Yv;gi.setAnimationLoop(al),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(R){Yn=R,De.setAnimationLoop(R),R===null?gi.stop():gi.start()},De.addEventListener("sessionstart",Is),De.addEventListener("sessionend",Hs),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(W),W=De.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,W,C),U=Ze.get(R,V.length),U.init(W),V.push(U),Ve.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ae.setFromProjectionMatrix(Ve,Pi,W.reversedDepth),Re=this.localClippingEnabled,ue=We.init(this.clippingPlanes,Re),L=Ue.get(R,P.length),L.init(),P.push(L),De.enabled===!0&&De.isPresenting===!0){const Ce=N.xr.getDepthSensingMesh();Ce!==null&&ar(Ce,W,-1/0,N.sortObjects)}ar(R,W,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(O,re),ut=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ut&&Te.addToRenderList(L,R),this.info.render.frame++,ue===!0&&We.beginShadows();const se=U.state.shadowsArray;Me.render(se,R,W),ue===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=L.opaque,j=L.transmissive;if(U.setupLights(),W.isArrayCamera){const Ce=W.cameras;if(j.length>0)for(let Ne=0,Be=Ce.length;Ne<Be;Ne++){const Ge=Ce[Ne];Vs($,j,R,Ge)}ut&&Te.render(R);for(let Ne=0,Be=Ce.length;Ne<Be;Ne++){const Ge=Ce[Ne];Gs(L,R,Ge,Ge.viewport)}}else j.length>0&&Vs($,j,R,W),ut&&Te.render(R),Gs(L,R,W);C!==null&&w===0&&(it.updateMultisampleRenderTarget(C),it.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(N,R,W),G.resetDefaultState(),k=-1,te=null,V.pop(),V.length>0?(U=V[V.length-1],ue===!0&&We.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?L=P[P.length-1]:L=null};function ar(R,W,se,$){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ae.intersectsSprite(R)){$&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ve);const Ne=fe.update(R),Be=R.material;Be.visible&&L.push(R,Ne,Be,se,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ae.intersectsObject(R))){const Ne=fe.update(R),Be=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),lt.copy(Ne.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(Ve)),Array.isArray(Be)){const Ge=Ne.groups;for(let et=0,nt=Ge.length;et<nt;et++){const Qe=Ge[et],ht=Be[Qe.materialIndex];ht&&ht.visible&&L.push(R,Ne,ht,se,lt.z,Qe)}}else Be.visible&&L.push(R,Ne,Be,se,lt.z,null)}}const Ce=R.children;for(let Ne=0,Be=Ce.length;Ne<Be;Ne++)ar(Ce[Ne],W,se,$)}function Gs(R,W,se,$){const{opaque:j,transmissive:Ce,transparent:Ne}=R;U.setupLightsView(se),ue===!0&&We.setGlobalState(N.clippingPlanes,se),$&&Ie.viewport(ce.copy($)),j.length>0&&jn(j,W,se),Ce.length>0&&jn(Ce,W,se),Ne.length>0&&jn(Ne,W,se),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Vs(R,W,se,$){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[$.id]===void 0&&(U.state.transmissionRenderTarget[$.id]=new ir(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Pr:_a,minFilter:Ur,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Ce=U.state.transmissionRenderTarget[$.id],Ne=$.viewport||ce;Ce.setSize(Ne.z*N.transmissionResolutionScale,Ne.w*N.transmissionResolutionScale);const Be=N.getRenderTarget(),Ge=N.getActiveCubeFace(),et=N.getActiveMipmapLevel();N.setRenderTarget(Ce),N.getClearColor(z),Z=N.getClearAlpha(),Z<1&&N.setClearColor(16777215,.5),N.clear(),ut&&Te.render(se);const nt=N.toneMapping;N.toneMapping=tr;const Qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),U.setupLightsView($),ue===!0&&We.setGlobalState(N.clippingPlanes,$),jn(R,se,$),it.updateMultisampleRenderTarget(Ce),it.updateRenderTargetMipmap(Ce),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Ct=0,Dt=W.length;Ct<Dt;Ct++){const Mt=W[Ct],{object:zt,geometry:$e,material:Wt,group:Et}=Mt;if(Wt.side===ha&&zt.layers.test($.layers)){const _n=Wt.side;Wt.side=Wn,Wt.needsUpdate=!0,on(zt,se,$,$e,Wt,Et),Wt.side=_n,Wt.needsUpdate=!0,ht=!0}}ht===!0&&(it.updateMultisampleRenderTarget(Ce),it.updateRenderTargetMipmap(Ce))}N.setRenderTarget(Be,Ge,et),N.setClearColor(z,Z),Qe!==void 0&&($.viewport=Qe),N.toneMapping=nt}function jn(R,W,se){const $=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Ce=R.length;j<Ce;j++){const Ne=R[j],{object:Be,geometry:Ge,group:et}=Ne;let nt=Ne.material;nt.allowOverride===!0&&$!==null&&(nt=$),Be.layers.test(se.layers)&&on(Be,W,se,Ge,nt,et)}}function on(R,W,se,$,j,Ce){R.onBeforeRender(N,W,se,$,j,Ce),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(N,W,se,$,R,Ce),j.transparent===!0&&j.side===ha&&j.forceSinglePass===!1?(j.side=Wn,j.needsUpdate=!0,N.renderBufferDirect(se,W,$,j,R,Ce),j.side=nr,j.needsUpdate=!0,N.renderBufferDirect(se,W,$,j,R,Ce),j.side=ha):N.renderBufferDirect(se,W,$,j,R,Ce),R.onAfterRender(N,W,se,$,j,Ce)}function pn(R,W,se){W.isScene!==!0&&(W=Jt);const $=je.get(R),j=U.state.lights,Ce=U.state.shadowsArray,Ne=j.state.version,Be=ne.getParameters(R,j.state,Ce,W,se),Ge=ne.getProgramCacheKey(Be);let et=$.programs;$.environment=R.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(R.isMeshStandardMaterial?v:D).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",rt),et=new Map,$.programs=et);let nt=et.get(Ge);if(nt!==void 0){if($.currentProgram===nt&&$.lightsStateVersion===Ne)return zr(R,Be),nt}else Be.uniforms=ne.getUniforms(R),R.onBeforeCompile(Be,N),nt=ne.acquireProgram(Be,Ge),et.set(Ge,nt),$.uniforms=Be.uniforms;const Qe=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=We.uniform),zr(R,Be),$.needsLights=rl(R),$.lightsStateVersion=Ne,$.needsLights&&(Qe.ambientLightColor.value=j.state.ambient,Qe.lightProbe.value=j.state.probe,Qe.directionalLights.value=j.state.directional,Qe.directionalLightShadows.value=j.state.directionalShadow,Qe.spotLights.value=j.state.spot,Qe.spotLightShadows.value=j.state.spotShadow,Qe.rectAreaLights.value=j.state.rectArea,Qe.ltc_1.value=j.state.rectAreaLTC1,Qe.ltc_2.value=j.state.rectAreaLTC2,Qe.pointLights.value=j.state.point,Qe.pointLightShadows.value=j.state.pointShadow,Qe.hemisphereLights.value=j.state.hemi,Qe.directionalShadowMap.value=j.state.directionalShadowMap,Qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Qe.spotShadowMap.value=j.state.spotShadowMap,Qe.spotLightMatrix.value=j.state.spotLightMatrix,Qe.spotLightMap.value=j.state.spotLightMap,Qe.pointShadowMap.value=j.state.pointShadowMap,Qe.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=nt,$.uniformsList=null,nt}function Hi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function zr(R,W){const se=je.get(R);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function lu(R,W,se,$,j){W.isScene!==!0&&(W=Jt),it.resetTextureUnits();const Ce=W.fog,Ne=$.isMeshStandardMaterial?W.environment:null,Be=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ns,Ge=($.isMeshStandardMaterial?v:D).get($.envMap||Ne),et=$.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Qe=!!se.morphAttributes.position,ht=!!se.morphAttributes.normal,Ct=!!se.morphAttributes.color;let Dt=tr;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Dt=N.toneMapping);const Mt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,zt=Mt!==void 0?Mt.length:0,$e=je.get($),Wt=U.state.lights;if(ue===!0&&(Re===!0||R!==te)){const yn=R===te&&$.id===k;We.setState($,R,yn)}let Et=!1;$.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Wt.state.version||$e.outputColorSpace!==Be||j.isBatchedMesh&&$e.batching===!1||!j.isBatchedMesh&&$e.batching===!0||j.isBatchedMesh&&$e.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&$e.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&$e.instancing===!1||!j.isInstancedMesh&&$e.instancing===!0||j.isSkinnedMesh&&$e.skinning===!1||!j.isSkinnedMesh&&$e.skinning===!0||j.isInstancedMesh&&$e.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$e.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&$e.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&$e.instancingMorph===!1&&j.morphTexture!==null||$e.envMap!==Ge||$.fog===!0&&$e.fog!==Ce||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==We.numPlanes||$e.numIntersection!==We.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==nt||$e.morphTargets!==Qe||$e.morphNormals!==ht||$e.morphColors!==Ct||$e.toneMapping!==Dt||$e.morphTargetsCount!==zt)&&(Et=!0):(Et=!0,$e.__version=$.version);let _n=$e.currentProgram;Et===!0&&(_n=pn($,W,j));let Ma=!1,Yt=!1,Gi=!1;const jt=_n.getUniforms(),Sn=$e.uniforms;if(Ie.useProgram(_n.program)&&(Ma=!0,Yt=!0,Gi=!0),$.id!==k&&(k=$.id,Yt=!0),Ma||te!==R){Ie.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),jt.setValue(H,"projectionMatrix",R.projectionMatrix),jt.setValue(H,"viewMatrix",R.matrixWorldInverse);const En=jt.map.cameraPosition;En!==void 0&&En.setValue(H,qe.setFromMatrixPosition(R.matrixWorld)),vt.logarithmicDepthBuffer&&jt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&jt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,Yt=!0,Gi=!0)}if(j.isSkinnedMesh){jt.setOptional(H,j,"bindMatrix"),jt.setOptional(H,j,"bindMatrixInverse");const yn=j.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),jt.setValue(H,"boneTexture",yn.boneTexture,it))}j.isBatchedMesh&&(jt.setOptional(H,j,"batchingTexture"),jt.setValue(H,"batchingTexture",j._matricesTexture,it),jt.setOptional(H,j,"batchingIdTexture"),jt.setValue(H,"batchingIdTexture",j._indirectTexture,it),jt.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&jt.setValue(H,"batchingColorTexture",j._colorsTexture,it));const mn=se.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Ke.update(j,se,_n),(Yt||$e.receiveShadow!==j.receiveShadow)&&($e.receiveShadow=j.receiveShadow,jt.setValue(H,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=Ge,Sn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(Sn.envMapIntensity.value=W.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=ZT()),Yt&&(jt.setValue(H,"toneMappingExposure",N.toneMappingExposure),$e.needsLights&&cu(Sn,Gi),Ce&&$.fog===!0&&ze.refreshFogUniforms(Sn,Ce),ze.refreshMaterialUniforms(Sn,$,ye,_e,U.state.transmissionRenderTarget[R.id]),qc.upload(H,Hi($e),Sn,it)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(qc.upload(H,Hi($e),Sn,it),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&jt.setValue(H,"center",j.center),jt.setValue(H,"modelViewMatrix",j.modelViewMatrix),jt.setValue(H,"normalMatrix",j.normalMatrix),jt.setValue(H,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const yn=$.uniformsGroups;for(let En=0,Ci=yn.length;En<Ci;En++){const Vi=yn[En];Le.update(Vi,_n),Le.bind(Vi,_n)}}return _n}function cu(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function rl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,W,se){const $=je.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),je.get(R.texture).__webglTexture=W,je.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:se,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const se=je.get(R);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};const rr=H.createFramebuffer();this.setRenderTarget=function(R,W=0,se=0){C=R,ee=W,w=se;let $=!0,j=null,Ce=!1,Ne=!1;if(R){const Ge=je.get(R);if(Ge.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(H.FRAMEBUFFER,null),$=!1;else if(Ge.__webglFramebuffer===void 0)it.setupRenderTarget(R);else if(Ge.__hasExternalTextures)it.rebindTextures(R,je.get(R.texture).__webglTexture,je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(Ge.__boundDepthTexture!==Qe){if(Qe!==null&&je.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ne=!0);const nt=je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?j=nt[W][se]:j=nt[W],Ce=!0):R.samples>0&&it.useMultisampledRTT(R)===!1?j=je.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?j=nt[se]:j=nt,ce.copy(R.viewport),de.copy(R.scissor),pe=R.scissorTest}else ce.copy(be).multiplyScalar(ye).floor(),de.copy(Ae).multiplyScalar(ye).floor(),pe=Pe;if(se!==0&&(j=rr),Ie.bindFramebuffer(H.FRAMEBUFFER,j)&&$&&Ie.drawBuffers(R,j),Ie.viewport(ce),Ie.scissor(de),Ie.setScissorTest(pe),Ce){const Ge=je.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ge.__webglTexture,se)}else if(Ne){const Ge=W;for(let et=0;et<R.textures.length;et++){const nt=je.get(R.textures[et]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+et,nt.__webglTexture,se,Ge)}}else if(R!==null&&se!==0){const Ge=je.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ge.__webglTexture,se)}k=-1},this.readRenderTargetPixels=function(R,W,se,$,j,Ce,Ne,Be=0){if(!(R&&R.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){Ie.bindFramebuffer(H.FRAMEBUFFER,Ge);try{const et=R.textures[Be],nt=et.format,Qe=et.type;if(!vt.textureFormatReadable(nt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Qe)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-$&&se>=0&&se<=R.height-j&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Be),H.readPixels(W,se,$,j,at.convert(nt),at.convert(Qe),Ce))}finally{const et=C!==null?je.get(C).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,W,se,$,j,Ce,Ne,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge)if(W>=0&&W<=R.width-$&&se>=0&&se<=R.height-j){Ie.bindFramebuffer(H.FRAMEBUFFER,Ge);const et=R.textures[Be],nt=et.format,Qe=et.type;if(!vt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.bufferData(H.PIXEL_PACK_BUFFER,Ce.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Be),H.readPixels(W,se,$,j,at.convert(nt),at.convert(Qe),0);const Ct=C!==null?je.get(C).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,Ct);const Dt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await R1(H,Dt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ce),H.deleteBuffer(ht),H.deleteSync(Dt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,se=0){const $=Math.pow(2,-se),j=Math.floor(R.image.width*$),Ce=Math.floor(R.image.height*$),Ne=W!==null?W.x:0,Be=W!==null?W.y:0;it.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,Ne,Be,j,Ce),Ie.unbindTexture()};const ks=H.createFramebuffer(),ba=H.createFramebuffer();this.copyTextureToTexture=function(R,W,se=null,$=null,j=0,Ce=null){Ce===null&&(j!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=j,j=0):Ce=0);let Ne,Be,Ge,et,nt,Qe,ht,Ct,Dt;const Mt=R.isCompressedTexture?R.mipmaps[Ce]:R.image;if(se!==null)Ne=se.max.x-se.min.x,Be=se.max.y-se.min.y,Ge=se.isBox3?se.max.z-se.min.z:1,et=se.min.x,nt=se.min.y,Qe=se.isBox3?se.min.z:0;else{const mn=Math.pow(2,-j);Ne=Math.floor(Mt.width*mn),Be=Math.floor(Mt.height*mn),R.isDataArrayTexture?Ge=Mt.depth:R.isData3DTexture?Ge=Math.floor(Mt.depth*mn):Ge=1,et=0,nt=0,Qe=0}$!==null?(ht=$.x,Ct=$.y,Dt=$.z):(ht=0,Ct=0,Dt=0);const zt=at.convert(W.format),$e=at.convert(W.type);let Wt;W.isData3DTexture?(it.setTexture3D(W,0),Wt=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(it.setTexture2DArray(W,0),Wt=H.TEXTURE_2D_ARRAY):(it.setTexture2D(W,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Et=H.getParameter(H.UNPACK_ROW_LENGTH),_n=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ma=H.getParameter(H.UNPACK_SKIP_PIXELS),Yt=H.getParameter(H.UNPACK_SKIP_ROWS),Gi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Mt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,et),H.pixelStorei(H.UNPACK_SKIP_ROWS,nt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qe);const jt=R.isDataArrayTexture||R.isData3DTexture,Sn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const mn=je.get(R),yn=je.get(W),En=je.get(mn.__renderTarget),Ci=je.get(yn.__renderTarget);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,En.__webglFramebuffer),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Vi=0;Vi<Ge;Vi++)jt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(R).__webglTexture,j,Qe+Vi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(W).__webglTexture,Ce,Dt+Vi)),H.blitFramebuffer(et,nt,Ne,Be,ht,Ct,Ne,Be,H.DEPTH_BUFFER_BIT,H.NEAREST);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||je.has(R)){const mn=je.get(R),yn=je.get(W);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,ks),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,ba);for(let En=0;En<Ge;En++)jt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mn.__webglTexture,j,Qe+En):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mn.__webglTexture,j),Sn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,Ce,Dt+En):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,Ce),j!==0?H.blitFramebuffer(et,nt,Ne,Be,ht,Ct,Ne,Be,H.COLOR_BUFFER_BIT,H.NEAREST):Sn?H.copyTexSubImage3D(Wt,Ce,ht,Ct,Dt+En,et,nt,Ne,Be):H.copyTexSubImage2D(Wt,Ce,ht,Ct,et,nt,Ne,Be);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Wt,Ce,ht,Ct,Dt,Ne,Be,Ge,zt,$e,Mt.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,Ce,ht,Ct,Dt,Ne,Be,Ge,zt,Mt.data):H.texSubImage3D(Wt,Ce,ht,Ct,Dt,Ne,Be,Ge,zt,$e,Mt):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ce,ht,Ct,Ne,Be,zt,$e,Mt.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ce,ht,Ct,Mt.width,Mt.height,zt,Mt.data):H.texSubImage2D(H.TEXTURE_2D,Ce,ht,Ct,Ne,Be,zt,$e,Mt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Et),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_n),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ma),H.pixelStorei(H.UNPACK_SKIP_ROWS,Yt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Gi),Ce===0&&W.generateMipmaps&&H.generateMipmap(Wt),Ie.unbindTexture()},this.initRenderTarget=function(R){je.get(R).__webglFramebuffer===void 0&&it.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?it.setTextureCube(R,0):R.isData3DTexture?it.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?it.setTexture2DArray(R,0):it.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){ee=0,w=0,C=null,Ie.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Nt._getUnpackColorSpace()}}function QT({mouseForce:s=20,cursorSize:e=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:c=32,dt:d=.014,BFECC:h=!0,resolution:m=.5,isBounce:p=!1,colors:x=["#5227FF","#FF9FFC","#B19EEF"],style:g={},className:S="",autoDemo:M=!0,autoSpeed:E=.5,autoIntensity:T=2.2,takeoverDuration:b=.25,autoResumeDelay:_=1e3,autoRampDuration:L=.6}){const U=me.useRef(null),P=me.useRef(null),V=me.useRef(null),N=me.useRef(null),F=me.useRef(null),ee=me.useRef(!0),w=me.useRef(null);return me.useEffect(()=>{if(!U.current)return;function C(D){let v;Array.isArray(D)&&D.length>0?D.length===1?v=[D[0],D[0]]:v=D:v=["#ffffff","#ffffff"];const I=v.length,K=new Uint8Array(I*4);for(let ne=0;ne<I;ne++){const ze=new Pt(v[ne]);K[ne*4+0]=Math.round(ze.r*255),K[ne*4+1]=Math.round(ze.g*255),K[ne*4+2]=Math.round(ze.b*255),K[ne*4+3]=255}const fe=new kv(K,I,1,xi);return fe.magFilter=Nn,fe.minFilter=Nn,fe.wrapS=ai,fe.wrapT=ai,fe.generateMipmaps=!1,fe.needsUpdate=!0,fe}const k=C(x),te=new nn(0,0,0,0);class ce{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(v){this.container=v,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new KT({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Pt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new cM,this.clock.start()}resize(){if(!this.container)return;const v=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(v.width)),this.height=Math.max(1,Math.floor(v.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const de=new ce;class pe{constructor(){this.mouseMoved=!1,this.coords=new ct,this.coords_old=new ct,this.diff=new ct,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ct,this.takeoverTo=new ct,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(v){this.container=v,this.docTarget=v.ownerDocument||null;const I=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);I&&(this.listenerTarget=I,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(v,I){if(!this.container)return!1;const K=this.container.getBoundingClientRect();return K.width===0||K.height===0?!1:v>=K.left&&v<=K.right&&I>=K.top&&I<=K.bottom}updateHoverState(v,I){return this.isHoverInside=this.isPointInside(v,I),this.isHoverInside}setCoords(v,I){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const K=this.container.getBoundingClientRect();if(K.width===0||K.height===0)return;const fe=(v-K.left)/K.width,ne=(I-K.top)/K.height;this.coords.set(fe*2-1,-(ne*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(v,I){this.coords.set(v,I),this.mouseMoved=!0}onDocumentMouseMove(v){if(this.updateHoverState(v.clientX,v.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const I=this.container.getBoundingClientRect();if(I.width===0||I.height===0)return;const K=(v.clientX-I.left)/I.width,fe=(v.clientY-I.top)/I.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(K*2-1,-(fe*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(v.clientX,v.clientY),this.hasUserControl=!0}}onDocumentTouchStart(v){if(v.touches.length!==1)return;const I=v.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY),this.hasUserControl=!0)}onDocumentTouchMove(v){if(v.touches.length!==1)return;const I=v.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const v=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(v>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const I=v*v*(3-2*v);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,I)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const z=new pe;class Z{constructor(v,I,K){this.mouse=v,this.manager=I,this.enabled=K.enabled,this.speed=K.speed,this.resumeDelay=K.resumeDelay||3e3,this.rampDurationMs=(K.rampDuration||0)*1e3,this.active=!1,this.current=new ct(0,0),this.target=new ct,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ct,this.pickNewTarget()}pickNewTarget(){const v=Math.random;this.target.set((v()*2-1)*(1-this.margin),(v()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const v=performance.now();if(v-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=v,this.activationTime=v),!this.active)return;this.mouse.isAutoActive=!0;let K=(v-this.lastTime)/1e3;this.lastTime=v,K>.2&&(K=.016);const fe=this._tmpDir.subVectors(this.target,this.current),ne=fe.length();if(ne<.01){this.pickNewTarget();return}fe.normalize();let ze=1;if(this.rampDurationMs>0){const We=Math.min(1,(v-this.activationTime)/this.rampDurationMs);ze=We*We*(3-2*We)}const Ue=this.speed*K*ze,Ze=Math.min(Ue,ne);this.current.addScaledVector(fe,Ze),this.mouse.setNormalized(this.current.x,this.current.y)}}const Y=`
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
`,_e=`
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
`,ye=`
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
`,re=`
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
`,ae=`
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
`,ue=`
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
`;class Re{constructor(v){this.props=v||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Dg,this.camera=new Qc,this.uniforms&&(this.material=new Fc(this.props.material),this.geometry=new Lr(2,2),this.plane=new Ri(this.geometry,this.material),this.scene.add(this.plane))}update(){de.renderer.setRenderTarget(this.props.output||null),de.renderer.render(this.scene,this.camera),de.renderer.setRenderTarget(null)}}class Ve extends Re{constructor(v){super({material:{vertexShader:Y,fragmentShader:O,uniforms:{boundarySpace:{value:v.cellScale},px:{value:v.cellScale},fboSize:{value:v.fboSize},velocity:{value:v.src.texture},dt:{value:v.dt},isBFECC:{value:!0}}},output:v.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const v=new Ii,I=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);v.setAttribute("position",new Ai(I,3));const K=new Fc({vertexShader:_e,fragmentShader:O,uniforms:this.uniforms});this.line=new aM(v,K),this.scene.add(this.line)}update({dt:v,isBounce:I,BFECC:K}){this.uniforms.dt.value=v,this.line.visible=I,this.uniforms.isBFECC.value=K,super.update()}}class qe extends Re{constructor(v){super({output:v.dst}),this.init(v)}init(v){super.init();const I=new Lr(1,1),K=new Fc({vertexShader:ye,fragmentShader:Ae,blending:ah,depthWrite:!1,uniforms:{px:{value:v.cellScale},force:{value:new ct(0,0)},center:{value:new ct(0,0)},scale:{value:new ct(v.cursor_size,v.cursor_size)}}});this.mouse=new Ri(I,K),this.scene.add(this.mouse)}update(v){const I=z.diff.x/2*v.mouse_force,K=z.diff.y/2*v.mouse_force,fe=v.cursor_size*v.cellScale.x,ne=v.cursor_size*v.cellScale.y,ze=Math.min(Math.max(z.coords.x,-1+fe+v.cellScale.x*2),1-fe-v.cellScale.x*2),Ue=Math.min(Math.max(z.coords.y,-1+ne+v.cellScale.y*2),1-ne-v.cellScale.y*2),Ze=this.mouse.material.uniforms;Ze.force.value.set(I,K),Ze.center.value.set(ze,Ue),Ze.scale.value.set(v.cursor_size,v.cursor_size),super.update()}}class lt extends Re{constructor(v){super({material:{vertexShader:Y,fragmentShader:ue,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},velocity_new:{value:v.dst_.texture},v:{value:v.viscous},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update({viscous:v,iterations:I,dt:K}){let fe,ne;this.uniforms.v.value=v;for(let ze=0;ze<I;ze++)ze%2===0?(fe=this.props.output0,ne=this.props.output1):(fe=this.props.output1,ne=this.props.output0),this.uniforms.velocity_new.value=fe.texture,this.props.output=ne,this.uniforms.dt.value=K,super.update();return ne}}class Jt extends Re{constructor(v){super({material:{vertexShader:Y,fragmentShader:be,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update({vel:v}){this.uniforms.velocity.value=v.texture,super.update()}}class ut extends Re{constructor(v){super({material:{vertexShader:Y,fragmentShader:Pe,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.dst_.texture},divergence:{value:v.src.texture},px:{value:v.cellScale}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update({iterations:v}){let I,K;for(let fe=0;fe<v;fe++)fe%2===0?(I=this.props.output0,K=this.props.output1):(I=this.props.output1,K=this.props.output0),this.uniforms.pressure.value=I.texture,this.props.output=K,super.update();return K}}class Rt extends Re{constructor(v){super({material:{vertexShader:Y,fragmentShader:ae,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.src_p.texture},velocity:{value:v.src_v.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update({vel:v,pressure:I}){this.uniforms.velocity.value=v.texture,this.uniforms.pressure.value=I.texture,super.update()}}class H{constructor(v){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...v},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ct,this.cellScale=new ct,this.boundarySpace=new ct,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Pr:Oi}createAllFBO(){const I={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Nn,magFilter:Nn,wrapS:ai,wrapT:ai};for(let K in this.fbos)this.fbos[K]=new ir(this.fboSize.x,this.fboSize.y,I)}createShaderPass(){this.advection=new Ve({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new qe({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new lt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Jt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new ut({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Rt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const v=Math.max(1,Math.round(this.options.resolution*de.width)),I=Math.max(1,Math.round(this.options.resolution*de.height)),K=1/v,fe=1/I;this.cellScale.set(K,fe),this.fboSize.set(v,I)}resize(){this.calcSize();for(let v in this.fbos)this.fbos[v].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let v=this.fbos.vel_1;this.options.isViscous&&(v=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:v});const I=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:v,pressure:I})}}class ft{constructor(){this.init()}init(){this.simulation=new H,this.scene=new Dg,this.camera=new Qc,this.output=new Ri(new Lr(2,2),new Fc({vertexShader:Y,fragmentShader:re,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ct},palette:{value:k},bgColor:{value:te}}})),this.scene.add(this.output)}addScene(v){this.scene.add(v)}resize(){this.simulation.resize()}render(){de.renderer.setRenderTarget(null),de.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class xt{constructor(v){this.props=v,de.init(v.$wrapper),z.init(v.$wrapper),z.autoIntensity=v.autoIntensity,z.takeoverDuration=v.takeoverDuration,this.lastUserInteraction=performance.now(),z.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Z(z,this,{enabled:v.autoDemo,speed:v.autoSpeed,resumeDelay:v.autoResumeDelay,rampDuration:v.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():ee.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(de.renderer.domElement),this.output=new ft}resize(){de.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),z.update(),de.update(),this.output.update()}loop(){this.running&&(this.render(),N.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,N.current&&(cancelAnimationFrame(N.current),N.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),z.dispose(),de.renderer){const v=de.renderer.domElement;v&&v.parentNode&&v.parentNode.removeChild(v),de.renderer.dispose()}}catch{}}}const vt=U.current;vt.style.position=vt.style.position||"relative",vt.style.overflow=vt.style.overflow||"hidden";const Ie=new xt({$wrapper:vt,autoDemo:M,autoSpeed:E,autoIntensity:T,takeoverDuration:b,autoResumeDelay:_,autoRampDuration:L});P.current=Ie,(()=>{if(!P.current)return;const D=P.current.output?.simulation;if(!D)return;const v=D.options.resolution;Object.assign(D.options,{mouse_force:s,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:c,dt:d,BFECC:h,resolution:m,isBounce:p}),m!==v&&D.resize()})(),Ie.start();const je=new IntersectionObserver(D=>{const v=D[0],I=v.isIntersecting&&v.intersectionRatio>0;ee.current=I,P.current&&(I&&!document.hidden?P.current.start():P.current.pause())},{threshold:[0,.01,.1]});je.observe(vt),F.current=je;const it=new ResizeObserver(()=>{P.current&&(w.current&&cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return it.observe(vt),V.current=it,()=>{if(N.current&&cancelAnimationFrame(N.current),V.current)try{V.current.disconnect()}catch{}if(F.current)try{F.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[h,e,d,p,i,c,l,s,m,r,x,M,E,T,b,_,L]),me.useEffect(()=>{const C=P.current;if(!C)return;const k=C.output?.simulation;if(!k)return;const te=k.options.resolution;Object.assign(k.options,{mouse_force:s,cursor_size:e,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:c,dt:d,BFECC:h,resolution:m,isBounce:p}),C.autoDriver&&(C.autoDriver.enabled=M,C.autoDriver.speed=E,C.autoDriver.resumeDelay=_,C.autoDriver.rampDurationMs=L*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=T,C.autoDriver.mouse.takeoverDuration=b)),m!==te&&k.resize()},[s,e,i,r,l,c,d,h,m,p,M,E,T,b,_,L]),Se.jsx("div",{ref:U,className:`w-full h-full relative overflow-hidden pointer-events-none touch-none ${S||""}`,style:g})}const JT=()=>{const s=Fn.c(2);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e={width:"100%",height:"100vh",position:"fixed",inset:"0",zIndex:"-10",background:"#000000"},s[0]=e):e=s[0];let i;return s[1]===Symbol.for("react.memo_cache_sentinel")?(i=Se.jsx("div",{style:e,children:Se.jsx(QT,{colors:["#5227FF","#27acff","#b8e4ff"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),s[1]=i):i=s[1],i},$T=s=>{const e=Fn.c(6),{children:i}=s;let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=Se.jsx(eA,{}),e[0]=r):r=e[0];let l;e[1]!==i?(l=Se.jsx("main",{className:"",children:i}),e[1]=i,e[2]=l):l=e[2];let c;e[3]===Symbol.for("react.memo_cache_sentinel")?(c=Se.jsx(aA,{}),e[3]=c):c=e[3];let d;return e[4]!==l?(d=Se.jsxs("div",{className:"min-h-screen flex flex-col",children:[r,l,c]}),e[4]=l,e[5]=d):d=e[5],d};function eA(){const s=Fn.c(16),[e,i]=me.useState(!1);let r;s[0]===Symbol.for("react.memo_cache_sentinel")?(r=[{to:"/",label:"Beranda"},{to:"/tentang-kami",label:"Tentang Kami"},{to:"/artikel",label:"Artikel"},{to:"/portfolio",label:"Portfolio"},{to:"/modul",label:"Modul"}],s[0]=r):r=s[0];const l=r;let c;s[1]===Symbol.for("react.memo_cache_sentinel")?(c=Se.jsx("div",{className:"font-semibold text-2xl",children:"Himikom"}),s[1]=c):c=s[1];let d;s[2]===Symbol.for("react.memo_cache_sentinel")?(d=Se.jsx("ul",{className:"hidden md:flex gap-8 text-sm",children:l.map(nA)}),s[2]=d):d=s[2];let h;s[3]!==e?(h=()=>i(!e),s[3]=e,s[4]=h):h=s[4];let m,p,x;s[5]===Symbol.for("react.memo_cache_sentinel")?(m=Se.jsx("span",{className:"w-6 h-0.5 bg-white"}),p=Se.jsx("span",{className:"w-6 h-0.5 bg-white"}),x=Se.jsx("span",{className:"w-6 h-0.5 bg-white"}),s[5]=m,s[6]=p,s[7]=x):(m=s[5],p=s[6],x=s[7]);let g;s[8]!==h?(g=Se.jsxs("nav",{className:`fixed z-[101] top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%]\r
        rounded-2xl px-6 py-3 flex items-center justify-between\r
        liquid-glass`,children:[c,d,Se.jsxs("button",{onClick:h,className:"md:hidden flex flex-col gap-1.5",children:[m,p,x]})]}),s[8]=h,s[9]=g):g=s[9];const S=`fixed top-20 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl p-6 z-40
        glass-light inner-shadow-custom drop-shadow-custom backdrop-blur-xl
        flex flex-col gap-4 text-center text-lg transition-all duration-300
        ${e?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`;let M;s[10]===Symbol.for("react.memo_cache_sentinel")?(M=l.map(tA),s[10]=M):M=s[10];let E;s[11]!==S?(E=Se.jsx("ul",{className:S,children:M}),s[11]=S,s[12]=E):E=s[12];let T;return s[13]!==E||s[14]!==g?(T=Se.jsxs(Se.Fragment,{children:[g,E]}),s[13]=E,s[14]=g,s[15]=T):T=s[15],T}function tA(s,e){return Se.jsx("li",{children:Se.jsx("a",{href:s.href,className:"hover:text-white/80 transition",children:s.label})},e)}function nA(s,e){return Se.jsx("li",{children:Se.jsx(Jo,{href:s.href,className:"hover:text-white/80 transition cursor-pointer",children:s.label})},e)}const iA=[{to:"/arsip-dokumen",label:"Arsip Dokumen"},{to:"/panduan-organisasi",label:"Panduan Organisasi"},{to:"/kontak",label:"Kontak"},{to:"/kerja-sama",label:"Kerja Sama"}];function aA(){const s=Fn.c(5);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e=Se.jsx("nav",{children:Se.jsx("ul",{className:"flex flex-col md:flex-row gap-4 md:gap-8 text-sm",children:iA.map(rA)})}),s[0]=e):e=s[0];let i;s[1]===Symbol.for("react.memo_cache_sentinel")?(i=Se.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",children:Se.jsxs("g",{fill:"none",children:[Se.jsx("path",{d:"m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),Se.jsx("path",{fill:"#fff",d:"M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m4.5-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"})]})}),s[1]=i):i=s[1];let r;s[2]===Symbol.for("react.memo_cache_sentinel")?(r=Se.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",children:Se.jsx("path",{fill:"#fff",d:"m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"})}),s[2]=r):r=s[2];let l;s[3]===Symbol.for("react.memo_cache_sentinel")?(l=Se.jsxs("div",{className:"flex gap-4",children:[i,r,Se.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 24 24",children:Se.jsx("path",{fill:"#fff",d:"M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"})})]}),s[3]=l):l=s[3];let c;return s[4]===Symbol.for("react.memo_cache_sentinel")?(c=Se.jsxs("footer",{className:`w-full mt-20 py-10 flex flex-col items-center justify-center gap-6\r
      glass-light inner-shadow-custom drop-shadow-custom backdrop-blur-xl\r
      mx-auto text-center`,children:[e,l,Se.jsxs("p",{className:"text-xs opacity-70",children:["© ",new Date().getFullYear()," Himikom. All rights reserved."]})]}),s[4]=c):c=s[4],c}function rA(s){return Se.jsx("li",{children:Se.jsx(Jo,{to:s.to,className:"hover:text-white/80 transition",children:s.label})},s.to)}function eu(s){const e=Fn.c(12);let i,r,l,c,d;e[0]!==s?({to:d,variant:l,children:i,className:c,...r}=s,e[0]=s,e[1]=i,e[2]=r,e[3]=l,e[4]=c,e[5]=d):(i=e[1],r=e[2],l=e[3],c=e[4],d=e[5]);const h=l===void 0?"primary":l,m=c===void 0?"":c;let p;e[6]===Symbol.for("react.memo_cache_sentinel")?(p={primary:"bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:scale-[1.04] hover:-translate-y-0.5 duration-200",glass:"glass-light inner-shadow-custom drop-shadow-custom backdrop-blur-xl text-white border border-white/30 hover:bg-white/10 hover:scale-[1.04] hover:-translate-y-0.5 duration-200"},e[6]=p):p=e[6];const g=`px-8 py-3 rounded-full text-sm font-semibold transition active:scale-[0.97] ${p[h]} ${m}`;let S;return e[7]!==i||e[8]!==r||e[9]!==g||e[10]!==d?(S=Se.jsx(Jo,{to:d,className:g,...r,children:i}),e[7]=i,e[8]=r,e[9]=g,e[10]=d,e[11]=S):S=e[11],S}const lp=s=>{const e=Fn.c(8),{title:i,subtitle:r,customClass:l}=s,c=`
      ${l}
      max-w-3xl
      animate-fade-in-up
    `;let d;e[0]!==i?(d=Se.jsx("h2",{className:`\r
        text-4xl sm:text-5xl \r
        font-bold \r
        text-gray-200\r
        mb-4\r
      `,children:i}),e[0]=i,e[1]=d):d=e[1];let h;e[2]!==r?(h=r&&Se.jsx("p",{className:`\r
          text-lg \r
          text-text-secondary-light dark:text-text-secondary-dark\r
        `,children:r}),e[2]=r,e[3]=h):h=e[3];let m;return e[4]!==c||e[5]!==d||e[6]!==h?(m=Se.jsxs("div",{className:c,children:[d,h]}),e[4]=c,e[5]=d,e[6]=h,e[7]=m):m=e[7],m},sA=()=>{const s=Fn.c(4);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e=Se.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[Se.jsx("div",{className:"absolute top-[10%] left-[5%] w-32 h-32 liquid-glass rotate-12 opacity-50"}),Se.jsx("div",{className:"absolute bottom-[20%] right-[10%] w-40 h-40 liquid-glass -rotate-6 opacity-60"}),Se.jsx("div",{className:"absolute top-[30%] right-[25%] w-24 h-24 liquid-glass rotate-45 opacity-40"}),Se.jsx("div",{className:"absolute bottom-[5%] left-[20%] w-28 h-28 liquid-glass -rotate-12 opacity-30"})]}),s[0]=e):e=s[0];let i,r;s[1]===Symbol.for("react.memo_cache_sentinel")?(i=Se.jsxs("h1",{className:`\r
          text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none\r
          text-gray-200\r
          mb-6\r
          animate-fade-in-up\r
        `,children:["Jelajahi Dunia ",Se.jsx("span",{className:"text-primary-light dark:text-primary-dark",children:"Informatika"})," Bersama Kami"]}),r=Se.jsx("p",{className:`\r
          text-lg sm:text-xl text-gray-400\r
          mb-10 max-w-2xl mx-auto\r
          animate-fade-in-up delay-200\r
        `,children:"HIMIKOM adalah wadah bagi mahasiswa Komputer untuk berinovasi, berkolaborasi, dan mengembangkan potensi di era digital."}),s[1]=i,s[2]=r):(i=s[1],r=s[2]);let l;return s[3]===Symbol.for("react.memo_cache_sentinel")?(l=Se.jsxs("section",{className:"relative h-screen flex items-center justify-center overflow-hidden",children:[e,Se.jsxs("div",{className:"relative z-10 text-center max-w-4xl px-4",children:[i,r,Se.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-400",children:[Se.jsx(eu,{to:"/TentangKami",children:"Tentang Kami"}),Se.jsx(eu,{to:"/artikel",variant:"glass",children:"Baca Artikel Kami"})]})]})]}),s[3]=l):l=s[3],l},Jv="gMDSj4vd7fM",oA=`https://www.youtube.com/watch?v=${Jv}`,lA=`https://img.youtube.com/vi/${Jv}/maxresdefault.jpg`,cA=()=>{const s=Fn.c(3);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e=Se.jsx("img",{src:lA,alt:"Thumbnail Video Profil HIMIKOM",className:"w-full h-auto object-full"}),s[0]=e):e=s[0];let i;s[1]===Symbol.for("react.memo_cache_sentinel")?(i=Se.jsx("div",{className:"md:w-1/2 animate-fade-in-up delay-200",children:Se.jsxs("a",{href:oA,target:"_blank",rel:"noopener noreferrer",className:`\r
            rounded-2xl\r
              block relative \r
              rounded-main \r
              overflow-hidden \r
              group \r
              shadow-glass-light dark:shadow-glass-dark\r
              transition-all duration-300\r
              transform hover:shadow-2xl hover:-translate-y-1\r
            `,"aria-label":"Tonton video profil di YouTube",children:[e,Se.jsx("div",{className:`\r
              absolute inset-0 \r
              flex items-center justify-center \r
              bg-black/40 \r
              opacity-0 group-hover:opacity-100 \r
              transition-opacity duration-300\r
            `,children:Se.jsx("svg",{className:"w-16 h-16 text-white/90 transform group-hover:scale-110 transition-transform",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Se.jsx("path",{fill:"#fff",d:"M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"})})})]})}),s[1]=i):i=s[1];let r;return s[2]===Symbol.for("react.memo_cache_sentinel")?(r=Se.jsx("section",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20",children:Se.jsxs("div",{className:`\r
        flex flex-col md:flex-row   \r
        md:items-center\r
        gap-12 lg:gap-16\r
        max-w-6xl mx-auto\r
      `,children:[i,Se.jsxs("div",{className:"md:w-1/2 animate-fade-in-up",children:[" ",Se.jsx(lp,{title:"Profil"}),Se.jsx("p",{className:`\r
            text-lg\r
            text-gray-400\r
            text-left\r
            max-w-none\r
          `,children:"Sobat Coding... stalking organisasi kami di channel Youtube ini ya, agar kalian bisa bergabung menjadi mahasiswa keren era digital AI nih.."})]})]})}),s[2]=r):r=s[2],r},uA=s=>{const e=Fn.c(12),{imageUrl:i,title:r,description:l}=s,c=i||"https://via.placeholder.com/400x300?text=HIMIKOM",d=r||"Gambar Program";let h;e[0]!==c||e[1]!==d?(h=Se.jsx("div",{className:`\r
        w-full \r
        aspect-[4/3]\r
        overflow-hidden \r
        rounded-sub \r
        mb-4 \r
        shadow-inner\r
      `,children:Se.jsx("img",{src:c,alt:d,className:"w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"})}),e[0]=c,e[1]=d,e[2]=h):h=e[2];const m=r||"Judul Program";let p;e[3]!==m?(p=Se.jsx("h3",{className:`\r
        text-xl font-bold \r
        text-text-light dark:text-text-dark \r
        mb-2\r
      `,children:m}),e[3]=m,e[4]=p):p=e[4];const x=l||"Deskripsi singkat program akan muncul di sini...";let g;e[5]!==x?(g=Se.jsx("p",{className:`\r
        text-text-secondary-light dark:text-text-secondary-dark \r
        mb-4 \r
      `,children:x}),e[5]=x,e[6]=g):g=e[6];let S;e[7]===Symbol.for("react.memo_cache_sentinel")?(S=Se.jsx("div",{className:"mt-2 w-full flex justify-end",children:Se.jsx(eu,{children:"More"})}),e[7]=S):S=e[7];let M;return e[8]!==h||e[9]!==p||e[10]!==g?(M=Se.jsxs("div",{className:`\r
      p-4 \r
      flex flex-col \r
      h-full \r
      transition-all duration-300 \r
      hover:shadow-2xl hover:-translate-y-1\r
      inner-shadow-custom drop-shadow-custom backdrop-blur-xl\r
      rounded-3xl\r
    `,children:[h,p,g,S]}),e[8]=h,e[9]=p,e[10]=g,e[11]=M):M=e[11],M},fA=[{id:1,title:"HIMIKOM DevClass",description:"Kelas intensif mingguan untuk belajar pengembangan web modern (React, Node.js) dari dasar hingga mahir bersama mentor.",imageUrl:"https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8fHwxNzMyMzEyNDY5&ixlib=rb-4.0.3&q=80&w=400",link:"/portfolio/devclass"},{id:2,title:"UI/UX Workshop",description:"Pelatihan desain antarmuka dan pengalaman pengguna, berfokus pada studi kasus nyata dan penggunaan alat desain seperti Figma.",imageUrl:"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8N3x8dWklMjB1eCUyMGRlc2lnbnxlbnwwfHx8fDE3MzIzMTI1MjA&ixlib=rb-4.0.3&q=80&w=400",link:"/portfolio/workshop-uiux"},{id:3,title:"E-Sports Tournament",description:"Kompetisi e-sports tahunan untuk menjalin silaturahmi antar mahasiswa dan mengasah kemampuan kompetitif.",imageUrl:"https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU4fDB8MXxzZWFyY2h8Mnx8ZSUyMHNwb3J0c3xlbnwwfHx8fDE3MzIzMTI1NDU&ixlib=rb-4.0.3&q=80&w=400",link:"/portfolio/esports"}],dA=()=>{const s=Fn.c(2);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e=Se.jsx("div",{className:"w-full fles justify-start",children:Se.jsx(lp,{title:"Program Kami"})}),s[0]=e):e=s[0];let i;return s[1]===Symbol.for("react.memo_cache_sentinel")?(i=Se.jsxs("section",{className:"container flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-6",children:[e,Se.jsx("div",{className:`\r
        grid \r
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 \r
        gap-8\r
        max-w-6xl mx-auto\r
      `,children:fA.map(hA)})]}),s[1]=i):i=s[1],i};function hA(s){return Se.jsx("div",{className:"animate-fade-in-up",children:Se.jsx(uA,{title:s.title,description:s.description,imageUrl:s.imageUrl,link:s.link})},s.id)}const pA=s=>{const e=Fn.c(12),{imageUrl:i,title:r,subTitle:l}=s,c=i||"https://via.placeholder.com/400x300?text=HIMIKOM",d=r||"Gambar Program";let h;e[0]!==c||e[1]!==d?(h=Se.jsx("div",{className:`\r
        w-full \r
        overflow-hidden \r
        rounded-sub \r
        mb-4 \r
        shadow-inner\r
      `,children:Se.jsx("img",{src:c,alt:d,className:"w-full h-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"})}),e[0]=c,e[1]=d,e[2]=h):h=e[2];const m=r||"Judul Program";let p;e[3]!==m?(p=Se.jsx("h3",{className:`\r
        text-2xl font-bold \r
        text-gray-50\r
        mb-2\r
      `,children:m}),e[3]=m,e[4]=p):p=e[4];const x=l||"Sub-Judul Program";let g;e[5]!==x?(g=Se.jsx("h3",{className:`\r
        text-lg font-bold \r
        text-gray-400\r
        mb-2\r
      `,children:x}),e[5]=x,e[6]=g):g=e[6];let S;e[7]===Symbol.for("react.memo_cache_sentinel")?(S=Se.jsx("div",{className:"mt-2 w-full flex justify-end",children:Se.jsxs(eu,{className:"flex items-center gap-2",children:["Visit",Se.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 24 24",children:Se.jsxs("g",{fill:"none",children:[Se.jsx("path",{d:"m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"}),Se.jsx("path",{fill:"#fff",d:"M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m4.5-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"})]})})]})}),e[7]=S):S=e[7];let M;return e[8]!==h||e[9]!==p||e[10]!==g?(M=Se.jsxs("div",{className:`\r
      p-4 \r
      flex flex-col \r
      h-full \r
      transition-all duration-300 \r
      hover:shadow-2xl hover:-translate-y-1\r
      inner-shadow-custom drop-shadow-custom backdrop-blur-xl\r
      rounded-3xl\r
    `,children:[h,p,g,S]}),e[8]=h,e[9]=p,e[10]=g,e[11]=M):M=e[11],M},mA=[{id:1,title:"Afif Kisnadhya Putra",subTitle:"Google Student Ambasador",imageUrl:"public/images/Performance/SnapInsta.to_549236315_17888673666346018_7845114067133122512_n.jpg",link:"/portfolio/devclass"},{id:2,title:"Muhammad Nabil M.",subTitle:"Nusantara Creative Competation",imageUrl:"public/images/Performance/SnapInsta.to_551185456_17889326340346018_1737473372670203826_n.jpg",link:"/portfolio/workshop-uiux"},{id:3,title:"Afif Kisnadhya Putra",subTitle:"Nusantara Creative Competation",imageUrl:"public/images/Performance/SnapInsta.to_551348745_17889326349346018_2692914504738200842_n.jpg",link:"/portfolio/esports"}],xA=()=>{const s=Fn.c(2);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e=Se.jsx("div",{className:"w-full fles justify-start",children:Se.jsx(lp,{title:"Prestasi Mahasiswa"})}),s[0]=e):e=s[0];let i;return s[1]===Symbol.for("react.memo_cache_sentinel")?(i=Se.jsxs("section",{className:"container flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-6",children:[e,Se.jsx("div",{className:`\r
        grid \r
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 \r
        gap-8\r
        max-w-6xl mx-auto\r
      `,children:mA.map(gA)})]}),s[1]=i):i=s[1],i};function gA(s){return Se.jsx("div",{className:"animate-fade-in-up",children:Se.jsx(pA,{title:s.title,subTitle:s.subTitle,description:s.description,imageUrl:s.imageUrl,link:s.link})},s.id)}const vA=()=>{const s=Fn.c(1);let e;return s[0]===Symbol.for("react.memo_cache_sentinel")?(e=Se.jsxs(Se.Fragment,{children:[Se.jsx(sA,{}),Se.jsx(cA,{}),Se.jsx(dA,{}),Se.jsx(xA,{})]}),s[0]=e):e=s[0],e},_A=()=>{const s=Fn.c(2);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e=Se.jsx(JT,{}),s[0]=e):e=s[0];let i;return s[1]===Symbol.for("react.memo_cache_sentinel")?(i=Se.jsxs(Cb,{children:[e,Se.jsx($T,{children:Se.jsx(rb,{children:Se.jsx(xv,{path:"/",element:Se.jsx(vA,{})})})})]}),s[1]=i):i=s[1],i};function SA(){const s=Fn.c(1);let e;return s[0]===Symbol.for("react.memo_cache_sentinel")?(e=Se.jsx(_A,{}),s[0]=e):e=s[0],e}dy.createRoot(document.getElementById("root")).render(Se.jsx(me.StrictMode,{children:Se.jsx(SA,{})}));
