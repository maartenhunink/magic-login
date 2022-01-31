/*! For license information please see block-editor.js.LICENSE.txt */
!function(){var t={7447:function(t,e,n){"use strict";var r=n(7418),o=60103,i=60106;var c=60109,u=60110,a=60112;var f=60115,l=60116;if("function"===typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),i=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),c=s("react.provider"),u=s("react.context"),a=s("react.forward_ref"),s("react.suspense"),f=s("react.memo"),l=s("react.lazy")}var p="function"===typeof Symbol&&Symbol.iterator;function v(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function d(t,e,n){this.props=t,this.context=e,this.refs=y,this.updater=n||g}function h(){}function b(t,e,n){this.props=t,this.context=e,this.refs=y,this.updater=n||g}d.prototype.isReactComponent={},d.prototype.setState=function(t,e){if("object"!==typeof t&&"function"!==typeof t&&null!=t)throw Error(v(85));this.updater.enqueueSetState(this,t,e,"setState")},d.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},h.prototype=d.prototype;var m=b.prototype=new h;m.constructor=b,r(m,d.prototype),m.isPureReactComponent=!0;var w={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function O(t,e,n){var r,i={},c=null,u=null;if(null!=e)for(r in void 0!==e.ref&&(u=e.ref),void 0!==e.key&&(c=""+e.key),e)S.call(e,r)&&!x.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];i.children=f}if(t&&t.defaultProps)for(r in a=t.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:o,type:t,key:c,ref:u,props:i,_owner:w.current}}function j(t){return"object"===typeof t&&null!==t&&t.$$typeof===o}var E=/\/+/g;function P(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function k(t,e,n,r,c){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var a=!1;if(null===t)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case o:case i:a=!0}}if(a)return c=c(a=t),t=""===r?"."+P(a,0):r,Array.isArray(c)?(n="",null!=t&&(n=t.replace(E,"$&/")+"/"),k(c,e,n,"",(function(t){return t}))):null!=c&&(j(c)&&(c=function(t,e){return{$$typeof:o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(c,n+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(E,"$&/")+"/")+t)),e.push(c)),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var l=r+P(u=t[f],f);a+=k(u,e,n,l,c)}else if(l=function(t){return null===t||"object"!==typeof t?null:"function"===typeof(t=p&&t[p]||t["@@iterator"])?t:null}(t),"function"===typeof l)for(t=l.call(t),f=0;!(u=t.next()).done;)a+=k(u=u.value,e,n,l=r+P(u,f++),c);else if("object"===u)throw e=""+t,Error(v(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return a}function T(t,e,n){if(null==t)return t;var r=[],o=0;return k(t,r,"","",(function(t){return e.call(n,t,o++)})),r}function _(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var C={current:null};function L(){var t=C.current;if(null===t)throw Error(v(321));return t}e.createElement=O},7200:function(t,e,n){"use strict";t.exports=n(7447)},9662:function(t,e,n){var r=n(614),o=n(6330);t.exports=function(t){if(r(t))return t;throw TypeError(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111);t.exports=function(t){if(r(t))return t;throw TypeError(String(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),c=function(t){return function(e,n,c){var u,a=r(e),f=i(a),l=o(c,f);if(t&&n!=n){for(;f>l;)if((u=a[l++])!=u)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},2092:function(t,e,n){var r=n(9974),o=n(8361),i=n(7908),c=n(6244),u=n(5417),a=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,l=4==t,s=6==t,p=7==t,v=5==t||s;return function(g,y,d,h){for(var b,m,w=i(g),S=o(w),x=r(y,d,3),O=c(S),j=0,E=h||u,P=e?E(g,O):n||p?E(g,0):void 0;O>j;j++)if((v||j in S)&&(m=x(b=S[j],j,w),t))if(e)P[j]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:a.call(P,b)}else switch(t){case 4:return!1;case 7:a.call(P,b)}return s?-1:f||l?l:P}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},7475:function(t,e,n){var r=n(3157),o=n(4411),i=n(111),c=n(5112)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,(o(e)&&(e===Array||r(e.prototype))||i(e)&&null===(e=e[c]))&&(e=void 0)),void 0===e?Array:e}},5417:function(t,e,n){var r=n(7475);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:function(t,e,n){var r=n(1694),o=n(614),i=n(4326),c=n(5112)("toStringTag"),u="Arguments"==i(function(){return arguments}());t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),c))?n:u?i(e):"Object"==(r=i(e))&&o(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),c=n(3070);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,f=0;f<n.length;f++){var l=n[f];r(t,l)||u(t,l,a(e,l))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7235:function(t,e,n){var r=n(857),o=n(2597),i=n(6061),c=n(3070).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),c=n(8113),u=i.process,a=i.Deno,f=u&&u.versions||a&&a.version,l=f&&f.v8;l?o=(r=l.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),c=n(1320),u=n(3505),a=n(9920),f=n(4705);t.exports=function(t,e){var n,l,s,p,v,g=t.target,y=t.global,d=t.stat;if(n=y?r:d?r[g]||u(g,{}):(r[g]||{}).prototype)for(l in e){if(p=e[l],s=t.noTargetGet?(v=o(n,l))&&v.value:n[l],!f(y?l:g+(d?".":"#")+l,t.forced)&&void 0!==s){if(typeof p===typeof s)continue;a(p,s)}(t.sham||s&&s.sham)&&i(p,"sham",!0),c(n,l,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,e,n){var r=n(9662);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,f=u&&(!r||r&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:f}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(r(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7293),o=n(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,e,n){var r=n(614),o=n(5465),i=Function.toString;r(o.inspectSource)||(o.inspectSource=function(t){return i.call(t)}),t.exports=o.inspectSource},9909:function(t,e,n){var r,o,i,c=n(8536),u=n(7854),a=n(111),f=n(8880),l=n(2597),s=n(5465),p=n(6200),v=n(3501),g="Object already initialized",y=u.WeakMap;if(c||s.state){var d=s.state||(s.state=new y),h=d.get,b=d.has,m=d.set;r=function(t,e){if(b.call(d,t))throw new TypeError(g);return e.facade=t,m.call(d,t,e),e},o=function(t){return h.call(d,t)||{}},i=function(t){return b.call(d,t)}}else{var w=p("state");v[w]=!0,r=function(t,e){if(l(t,w))throw new TypeError(g);return e.facade=t,f(t,w,e),e},o=function(t){return l(t,w)?t[w]:{}},i=function(t){return l(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t){t.exports=function(t){return"function"===typeof t}},4411:function(t,e,n){var r=n(7293),o=n(614),i=n(648),c=n(5005),u=n(2788),a=[],f=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,s=l.exec,p=!l.exec((function(){})),v=function(t){if(!o(t))return!1;try{return f(Object,a,t),!0}catch(t){return!1}};t.exports=!f||r((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?function(t){if(!o(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!s.call(l,u(t))}:v},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,c=function(t,e){var n=a[u(t)];return n==l||n!=f&&(o(e)?r(e):!!e)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},f=c.NATIVE="N",l=c.POLYFILL="P";t.exports=c},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"===typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(614),o=n(5005),i=n(3307);t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return r(e)&&Object(t)instanceof e}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(614),i=n(2788),c=r.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},30:function(t,e,n){var r,o=n(9670),i=n(6048),c=n(748),u=n(3501),a=n(490),f=n(317),l=n(6200),s=l("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"</"+"script>"},g=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}y="undefined"!=typeof document?document.domain&&r?g(r):function(){var t,e=f("iframe");return e.style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F}():g(r);for(var t=c.length;t--;)delete y.prototype[c[t]];return y()};u[s]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[s]=t):n=y(),void 0===e?n:i(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3070),i=n(9670),c=n(1956);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,a=0;u>a;)o.f(t,n=r[a++],e[n]);return t}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(9670),c=n(4948),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(5296),i=n(9114),c=n(5656),u=n(4948),a=n(2597),f=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=u(e),f)try{return l(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},1156:function(t,e,n){var r=n(5656),o=n(8006).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,n){var r=n(2597),o=n(5656),i=n(1318).indexOf,c=n(3501);t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)!r(c,n)&&r(u,n)&&f.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(614),o=n(111);t.exports=function(t,e){var n,i;if("string"===e&&r(n=t.toString)&&!o(i=n.call(t)))return i;if(r(n=t.valueOf)&&!o(i=n.call(t)))return i;if("string"!==e&&r(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(8006),i=n(5181),c=n(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},857:function(t,e,n){var r=n(7854);t.exports=r},1320:function(t,e,n){var r=n(7854),o=n(614),i=n(2597),c=n(8880),u=n(3505),a=n(2788),f=n(9909),l=n(6530).CONFIGURABLE,s=f.get,p=f.enforce,v=String(String).split("String");(t.exports=function(t,e,n,a){var f,s=!!a&&!!a.unsafe,g=!!a&&!!a.enumerable,y=!!a&&!!a.noTargetGet,d=a&&void 0!==a.name?a.name:e;o(n)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||l&&n.name!==d)&&c(n,"name",d),(f=p(n)).source||(f.source=v.join("string"==typeof d?d:""))),t!==r?(s?!y&&t[e]&&(g=!0):delete t[e],g?t[e]=n:c(t,e,n)):g?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return o(this)&&s(this).source||a(this)}))},4488:function(t){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854);t.exports=function(t,e){try{Object.defineProperty(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},8003:function(t,e,n){var r=n(3070).f,o=n(2597),i=n(5112)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.18.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!==r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,e,n){var r=n(111),o=n(2190),i=n(8173),c=n(2140),u=n(5112)("toPrimitive");t.exports=function(t,e){if(!r(t)||o(t))return t;var n,a=i(t,u);if(a){if(void 0===e&&(e="default"),n=a.call(t,e),!r(n)||o(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:String(e)}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(648);t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)}},6330:function(t){t.exports=function(t){try{return String(t)}catch(t){return"Object"}}},9711:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},6061:function(t,e,n){var r=n(5112);e.f=r},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),c=n(9711),u=n(133),a=n(3307),f=o("wks"),l=r.Symbol,s=a?l:l&&l.withoutSetter||c;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(l,t)?f[t]=l[t]:f[t]=s("Symbol."+t)),f[t]}},1817:function(t,e,n){"use strict";var r=n(2109),o=n(9781),i=n(7854),c=n(2597),u=n(614),a=n(111),f=n(3070).f,l=n(9920),s=i.Symbol;if(o&&u(s)&&(!("description"in s.prototype)||void 0!==s().description)){var p={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof v?new s(t):void 0===t?s():s(t);return""===t&&(p[e]=!0),e};l(v,s);var g=v.prototype=s.prototype;g.constructor=v;var y=g.toString,d="Symbol(test)"==String(s("test")),h=/^Symbol\((.*)\)[^)]+$/;f(g,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=y.call(t);if(c(p,t))return"";var n=d?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:v})}},2526:function(t,e,n){"use strict";var r=n(2109),o=n(7854),i=n(5005),c=n(1913),u=n(9781),a=n(133),f=n(7293),l=n(2597),s=n(3157),p=n(614),v=n(111),g=n(2190),y=n(9670),d=n(7908),h=n(5656),b=n(4948),m=n(1340),w=n(9114),S=n(30),x=n(1956),O=n(8006),j=n(1156),E=n(5181),P=n(1236),k=n(3070),T=n(5296),_=n(1320),C=n(2309),L=n(6200),A=n(3501),F=n(9711),M=n(5112),I=n(6061),R=n(7235),z=n(8003),N=n(9909),$=n(2092).forEach,U=L("hidden"),q="Symbol",D=M("toPrimitive"),B=N.set,G=N.getterFor(q),W=Object.prototype,H=o.Symbol,J=i("JSON","stringify"),X=P.f,Y=k.f,K=j.f,Q=T.f,V=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),nt=C("wks"),rt=o.QObject,ot=!rt||!rt.prototype||!rt.prototype.findChild,it=u&&f((function(){return 7!=S(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=X(W,e);r&&delete W[e],Y(t,e,n),r&&t!==W&&Y(W,e,r)}:Y,ct=function(t,e){var n=V[t]=S(H.prototype);return B(n,{type:q,tag:t,description:e}),u||(n.description=e),n},ut=function(t,e,n){t===W&&ut(Z,e,n),y(t);var r=b(e);return y(n),l(V,r)?(n.enumerable?(l(t,U)&&t[U][r]&&(t[U][r]=!1),n=S(n,{enumerable:w(0,!1)})):(l(t,U)||Y(t,U,w(1,{})),t[U][r]=!0),it(t,r,n)):Y(t,r,n)},at=function(t,e){y(t);var n=h(e),r=x(n).concat(pt(n));return $(r,(function(e){u&&!ft.call(n,e)||ut(t,e,n[e])})),t},ft=function(t){var e=b(t),n=Q.call(this,e);return!(this===W&&l(V,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(V,e)||l(this,U)&&this[U][e])||n)},lt=function(t,e){var n=h(t),r=b(e);if(n!==W||!l(V,r)||l(Z,r)){var o=X(n,r);return!o||!l(V,r)||l(n,U)&&n[U][r]||(o.enumerable=!0),o}},st=function(t){var e=K(h(t)),n=[];return $(e,(function(t){l(V,t)||l(A,t)||n.push(t)})),n},pt=function(t){var e=t===W,n=K(e?Z:h(t)),r=[];return $(n,(function(t){!l(V,t)||e&&!l(W,t)||r.push(V[t])})),r};(a||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?m(arguments[0]):void 0,e=F(t),n=function(t){this===W&&n.call(Z,t),l(this,U)&&l(this[U],e)&&(this[U][e]=!1),it(this,e,w(1,t))};return u&&ot&&it(W,e,{configurable:!0,set:n}),ct(e,t)},_(H.prototype,"toString",(function(){return G(this).tag})),_(H,"withoutSetter",(function(t){return ct(F(t),t)})),T.f=ft,k.f=ut,P.f=lt,O.f=j.f=st,E.f=pt,I.f=function(t){return ct(M(t),t)},u&&(Y(H.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),c||_(W,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:H}),$(x(nt),(function(t){R(t)})),r({target:q,stat:!0,forced:!a},{for:function(t){var e=m(t);if(l(tt,e))return tt[e];var n=H(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!g(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,e){return void 0===e?S(t):at(S(t),e)},defineProperty:ut,defineProperties:at,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(d(t))}}),J)&&r({target:"JSON",stat:!0,forced:!a||f((function(){var t=H();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(v(e)||void 0!==t)&&!g(t))return s(e)||(e=function(t,e){if(p(r)&&(e=r.call(this,t,e)),!g(e))return e}),o[1]=e,J.apply(null,o)}});if(!H.prototype[D]){var vt=H.prototype.valueOf;_(H.prototype,D,(function(){return vt.apply(this,arguments)}))}z(H,q),A[U]=!0},7418:function(t){"use strict";var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,i){for(var c,u,a=o(t),f=1;f<arguments.length;f++){for(var l in c=Object(arguments[f]))n.call(c,l)&&(a[l]=c[l]);if(e){u=e(c);for(var s=0;s<u.length;s++)r.call(c,u[s])&&(a[u[s]]=c[u[s]])}}return a}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}(),function(){"use strict";var t=n(7200),e=(n(2526),n(1817),wp.i18n.__),r=wp.element.Fragment,o=wp.blockEditor.InspectorControls,i=wp.blocks.registerBlockType,c=wp.components,u=c.CheckboxControl,a=c.TextControl,f=c.PanelBody,l=wp.serverSideRender;i("magic-login/login-block",{title:e("Magic Login","magic-login"),description:e("Passwordless login block","magic-login"),icon:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},(0,t.createElement)("path",{d:"M200.8 157.2l-36.4 37.4L411.7 448l36.3-37.4zM181 64h37v68h-37zM181 262h37v68h-37zM270 176h69v37h-69zM305.6 115.8l-25.7-26.3-47.1 48.3 25.6 26.2zM168.8 137.8l-47.1-48.3-25.6 26.3 47.1 48.2zM96.1 277.9l25.6 26.2 47.1-48.2-25.6-26.3zM64 176h65v37H64z"})),keywords:[e("magic-login","magic-login"),e("login","magic-login"),e("magic","magic-login"),e("passwordless","magic-login")],supports:{align:!0,multiple:!1},attributes:{title:{type:"string",default:e("Login with Email","magic-login")},description:{type:"string",default:e("Please enter your username or email address. You will receive an email message to log in.","magic-login")},loginLabel:{type:"string",default:e("Username or Email Address","magic-login")},buttonLabel:{type:"string",default:e("Send me the link","magic-login")},redirectTo:{type:"string"},hideLoggedIn:{type:"boolean",default:!0},hideFormAfterSubmit:{type:"boolean",default:!0},cancelRedirection:{type:"boolean",default:!1}},edit:function(n){var i=n.attributes,c=i.title,s=i.description,p=i.loginLabel,v=i.buttonLabel,g=i.redirectTo,y=i.hideLoggedIn,d=i.hideFormAfterSubmit,h=i.cancelRedirection,b=n.className,m=n.setAttributes;return(0,t.createElement)("div",{className:b},(0,t.createElement)(l,{block:"magic-login/login-block",attributes:{title:c,description:s,loginLabel:p,buttonLabel:v,redirectTo:g,hideLoggedIn:y,hideFormAfterSubmit:d}}),(0,t.createElement)(r,null,(0,t.createElement)(o,null,(0,t.createElement)(f,null,(0,t.createElement)(a,{label:e("Title","magic-login"),value:c,onChange:function(t){return m({title:t})}}),(0,t.createElement)(a,{label:e("Description","magic-login"),value:s,onChange:function(t){return m({description:t})}}),(0,t.createElement)(a,{label:e("Login Label","magic-login"),value:p,onChange:function(t){return m({loginLabel:t})}}),(0,t.createElement)(a,{label:e("Button Label","magic-login"),value:v,onChange:function(t){return m({buttonLabel:t})}}),!h&&(0,t.createElement)(a,{label:e("Redirect URL","magic-login"),help:e("Leave it empty to use this page","magic-login"),value:g,onChange:function(t){return m({redirectTo:t})}}),(0,t.createElement)(u,{label:e("Hide the block when user is logged-in","magic-login"),checked:y,onChange:function(){m({hideLoggedIn:!y})}}),(0,t.createElement)(u,{label:e("Don't display once submitted","magic-login"),help:e("Hide the login form after sending the request","magic-login"),checked:d,onChange:function(){m({hideFormAfterSubmit:!d})}}),(0,t.createElement)(u,{label:e("Cancel redirection","magic-login"),help:e("Cancel custom redirection for this login form","magic-login"),checked:h,onChange:function(){m({cancelRedirection:!h})}})))))},save:function(){return null}})}()}();