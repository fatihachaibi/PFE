/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.synthetics_bundle_jsonpfunction=window.synthetics_bundle_jsonpfunction||[]).push([[11],{131:function(E,S,_){"use strict";_.d(S,"a",(function(){return t}));var T=_(48);const l=/^[0-9]*$/g,b=/[^\:]+:[0-9]{1,5}$/g;function R(E){return Object.keys(E).some((E=>!!E&&/[\s]/g.test(E)))}const n={[T.b.SCHEDULE]:({[T.b.SCHEDULE]:E})=>{const{number:S,unit:_}=E,l=parseFloat(S);return!l||!_||l<1},[T.b.TIMEOUT]:({[T.b.MONITOR_TYPE]:E,[T.b.TIMEOUT]:S,[T.b.SCHEDULE]:_})=>{const{number:l,unit:b}=_;return E!==T.d.BROWSER&&(!S||parseFloat(S)<0||(({scheduleNumber:E,scheduleUnit:S,timeout:_})=>{let l;switch(S){case T.i.SECONDS:l=parseFloat(E);break;case T.i.MINUTES:l=60*parseFloat(E);break;default:l=parseFloat(E)}return parseFloat(_)>l})({timeout:S,scheduleNumber:l,scheduleUnit:b}))}},e={[T.b.RESPONSE_STATUS_CHECK]:({[T.b.RESPONSE_STATUS_CHECK]:E})=>{const S=E;return!!S.length&&S.some((E=>!`${E}`.match(l)))},[T.b.RESPONSE_HEADERS_CHECK]:({[T.b.RESPONSE_HEADERS_CHECK]:E})=>R(E),[T.b.REQUEST_HEADERS_CHECK]:({[T.b.REQUEST_HEADERS_CHECK]:E})=>R(E),[T.b.MAX_REDIRECTS]:({[T.b.MAX_REDIRECTS]:E})=>!!E&&!`${E}`.match(l)||parseFloat(E)<0,[T.b.URLS]:({[T.b.URLS]:E})=>!E,...n},O={[T.b.HOSTS]:({[T.b.HOSTS]:E})=>!E||!`${E}`.match(b),...n},I={[T.b.HOSTS]:({[T.b.HOSTS]:E})=>!E,[T.b.WAIT]:({[T.b.WAIT]:E})=>!!E&&!l.test(`${E}`)&&parseFloat(E)<0,...n},u=(E,S)=>{if(void 0===E||""===E)return!1;const _=parseFloat(E);return isNaN(_)||(S?_<0:_<=0)},C={...n,[T.b.SOURCE_ZIP_URL]:({[T.b.SOURCE_ZIP_URL]:E,[T.b.SOURCE_INLINE]:S})=>!E&&!S,[T.b.SOURCE_INLINE]:({[T.b.SOURCE_ZIP_URL]:E,[T.b.SOURCE_INLINE]:S})=>!E&&!S,[T.b.DOWNLOAD_SPEED]:({[T.b.DOWNLOAD_SPEED]:E})=>u(E),[T.b.UPLOAD_SPEED]:({[T.b.UPLOAD_SPEED]:E})=>u(E),[T.b.LATENCY]:({[T.b.LATENCY]:E})=>u(E,!0)},t={[T.d.HTTP]:e,[T.d.TCP]:O,[T.d.ICMP]:I,[T.d.BROWSER]:C}},134:function(E,S,_){"use strict";_.d(S,"a",(function(){return r}));var T=_(1),l=_(48);const b={[l.b.NAME]:null,[l.b.LOCATIONS]:null,[l.b.MONITOR_TYPE]:null,[l.b.ENABLED]:null,[l.b.SCHEDULE]:E=>{var S,_;return JSON.stringify(`@every ${null===(S=E[l.b.SCHEDULE])||void 0===S?void 0:S.number}${null===(_=E[l.b.SCHEDULE])||void 0===_?void 0:_.unit}`)},[l.b.APM_SERVICE_NAME]:null,[l.b.TAGS]:E=>R(E[l.b.TAGS]),[l.b.TIMEOUT]:E=>n(E[l.b.TIMEOUT]||void 0),[l.b.NAMESPACE]:null,[l.b.REVISION]:null,[l.b.MONITOR_SOURCE_TYPE]:null},R=(E=[])=>E.length?JSON.stringify(E):null,n=(E="")=>E?`${E}s`:null,e=(E={})=>Object.keys(E).length?JSON.stringify(E):null,O=(E="")=>E?JSON.stringify(E):null,I={[l.b.TLS_CERTIFICATE_AUTHORITIES]:E=>u(E[l.b.TLS_CERTIFICATE_AUTHORITIES]),[l.b.TLS_CERTIFICATE]:E=>u(E[l.b.TLS_CERTIFICATE]),[l.b.TLS_KEY]:E=>u(E[l.b.TLS_KEY]),[l.b.TLS_KEY_PASSPHRASE]:E=>C(E[l.b.TLS_KEY_PASSPHRASE]),[l.b.TLS_VERIFICATION_MODE]:E=>C(E[l.b.TLS_VERIFICATION_MODE]),[l.b.TLS_VERSION]:E=>t(E[l.b.TLS_VERSION])},u=(E="")=>E?JSON.stringify(E):null,C=(E="")=>E||null,t=(E=[])=>E.length?JSON.stringify(E):null,A={[l.b.METADATA]:E=>e(E[l.b.METADATA]),[l.b.URLS]:null,[l.b.MAX_REDIRECTS]:null,[l.b.USERNAME]:null,[l.b.PASSWORD]:null,[l.b.PROXY_URL]:null,[l.b.RESPONSE_BODY_CHECK_NEGATIVE]:E=>R(E[l.b.RESPONSE_BODY_CHECK_NEGATIVE]),[l.b.RESPONSE_BODY_CHECK_POSITIVE]:E=>R(E[l.b.RESPONSE_BODY_CHECK_POSITIVE]),[l.b.RESPONSE_BODY_INDEX]:null,[l.b.RESPONSE_HEADERS_CHECK]:E=>e(E[l.b.RESPONSE_HEADERS_CHECK]),[l.b.RESPONSE_HEADERS_INDEX]:null,[l.b.RESPONSE_STATUS_CHECK]:E=>R(E[l.b.RESPONSE_STATUS_CHECK]),[l.b.REQUEST_BODY_CHECK]:E=>{var S,_;return null!==(S=E[l.b.REQUEST_BODY_CHECK])&&void 0!==S&&S.value?JSON.stringify(null===(_=E[l.b.REQUEST_BODY_CHECK])||void 0===_?void 0:_.value):null},[l.b.REQUEST_HEADERS_CHECK]:E=>e(E[l.b.REQUEST_HEADERS_CHECK]),[l.b.REQUEST_METHOD_CHECK]:null,...I,...b},i={[l.b.METADATA]:E=>e(E[l.b.METADATA]),[l.b.HOSTS]:null,[l.b.PROXY_URL]:null,[l.b.PROXY_USE_LOCAL_RESOLVER]:null,[l.b.RESPONSE_RECEIVE_CHECK]:null,[l.b.REQUEST_SEND_CHECK]:null,...I,...b},o={[l.b.HOSTS]:null,[l.b.WAIT]:E=>n(E[l.b.WAIT]),...b},L={[l.b.METADATA]:E=>e(E[l.b.METADATA]),[l.b.URLS]:null,[l.b.PORT]:null,[l.b.SOURCE_ZIP_URL]:null,[l.b.SOURCE_ZIP_USERNAME]:null,[l.b.SOURCE_ZIP_PASSWORD]:null,[l.b.SOURCE_ZIP_FOLDER]:null,[l.b.SOURCE_ZIP_PROXY_URL]:null,[l.b.SOURCE_PROJECT_CONTENT]:null,[l.b.SOURCE_INLINE]:E=>O(E[l.b.SOURCE_INLINE]),[l.b.PARAMS]:null,[l.b.SCREENSHOTS]:null,[l.b.IS_THROTTLING_ENABLED]:null,[l.b.DOWNLOAD_SPEED]:null,[l.b.UPLOAD_SPEED]:null,[l.b.LATENCY]:null,[l.b.SYNTHETICS_ARGS]:E=>R(E[l.b.SYNTHETICS_ARGS]),[l.b.ZIP_URL_TLS_CERTIFICATE_AUTHORITIES]:E=>u(E[l.b.ZIP_URL_TLS_CERTIFICATE_AUTHORITIES]),[l.b.ZIP_URL_TLS_CERTIFICATE]:E=>u(E[l.b.ZIP_URL_TLS_CERTIFICATE]),[l.b.ZIP_URL_TLS_KEY]:E=>u(E[l.b.ZIP_URL_TLS_KEY]),[l.b.ZIP_URL_TLS_KEY_PASSPHRASE]:E=>C(E[l.b.ZIP_URL_TLS_KEY_PASSPHRASE]),[l.b.ZIP_URL_TLS_VERIFICATION_MODE]:E=>C(E[l.b.ZIP_URL_TLS_VERIFICATION_MODE]),[l.b.ZIP_URL_TLS_VERSION]:E=>t(E[l.b.ZIP_URL_TLS_VERSION]),[l.b.JOURNEY_FILTERS_MATCH]:E=>O(E[l.b.JOURNEY_FILTERS_MATCH]),[l.b.JOURNEY_FILTERS_TAGS]:E=>R(E[l.b.JOURNEY_FILTERS_TAGS]),[l.b.THROTTLING_CONFIG]:E=>{if(!E[l.b.IS_THROTTLING_ENABLED])return"false";const S=(E,S)=>""!==E&&void 0!==E?`${E}${S}`:null;return[S(E[l.b.DOWNLOAD_SPEED],"d"),S(E[l.b.UPLOAD_SPEED],"u"),S(E[l.b.LATENCY],"l")].filter((E=>null!==E)).join("/")},[l.b.IGNORE_HTTPS_ERRORS]:null,[l.b.JOURNEY_ID]:null,[l.b.PROJECT_ID]:null,[l.b.PLAYWRIGHT_OPTIONS]:null,[l.b.CUSTOM_HEARTBEAT_ID]:null,[l.b.ORIGINAL_SPACE]:null,...b},a=(l.d.HTTP,l.d.ICMP,l.d.TCP,l.d.BROWSER,{...A,...o,...i,...L,...b}),r=({monitorType:E,defaultConfig:S,config:_,newPolicy:l,onChange:b,validate:R})=>{const[n,e]=Object(T.useState)(l),O=Object(T.useRef)(S);return Object(T.useEffect)((()=>{const S=Object.keys(_),T=Object.keys(R[E]),n=S.some((E=>_[E]!==O.current[E])),I=!!l.name&&!T.find((S=>{var T,l;return null===(T=R[E])||void 0===T||null===(l=T[S])||void 0===l?void 0:l.call(T,_)})),u={...l},C=u.inputs.find((S=>S.type===`synthetics/${E}`)),t=null==C?void 0:C.streams.find((S=>S.data_stream.dataset===E));u.inputs.forEach((E=>E.enabled=!1)),C&&t&&(u.inputs.forEach((E=>E.enabled=!1)),C.enabled=!0,t.enabled=!0),C&&t&&n&&(S.forEach((E=>{var S;const T=null===(S=t.vars)||void 0===S?void 0:S[E];var l;T&&a[E]?T.value=null===(l=a[E])||void 0===l?void 0:l.call(a,_):T&&(T.value=void 0===_[E]||null===_[E]?null:_[E])})),O.current=_,e(u),b({isValid:I,updatedPolicy:u}))}),[_,O,l,b,R,E]),{config:_,updatedPolicy:n}}},249:function(E,S,_){"use strict";_.r(S),_.d(S,"SyntheticsPolicyEditExtensionWrapper",(function(){return m}));var T=_(1),l=_.n(T),b=_(48),R=_(9),n=_(51),e=_(132),O=_(134),I=_(130),u=_(131);const C=Object(T.memo)((({newPolicy:E,onChange:S,defaultConfig:_})=>{Object(R.useTrackPageview)({app:"fleet",path:"syntheticsEdit"}),Object(R.useTrackPageview)({app:"fleet",path:"syntheticsEdit",delay:15e3});const{monitorType:T}=Object(n.A)(),b=Object(I.a)(E.name);return Object(O.a)({defaultConfig:_,config:b[T],newPolicy:E,onChange:S,validate:u.a,monitorType:T}),l.a.createElement(e.a,{validate:u.a[T]})}));function t(E){return"string"==typeof E?JSON.parse(E):E}C.displayName="SyntheticsPolicyEditExtension";var A=_(60);function i(E,S){return _=>{var T,l;return null!==(T=null==_||null===(l=_[E])||void 0===l?void 0:l.value)&&void 0!==T?T:S[E]}}function o(E,S){return _=>{var T,l,b;return null!==(T=(b=null==_||null===(l=_[E])||void 0===l?void 0:l.value)?t(b):null)&&void 0!==T?T:S[E]}}function L(E,S){return _=>{var T,l,b;return null!==(T=(b=null==_||null===(l=_[E])||void 0===l?void 0:l.value)?b.slice(0,b.length-1):null)&&void 0!==T?T:S[E]}}const a=E=>i(E,A.c),r={[b.b.NAME]:E=>{var S,_;return null!==(S=null==E||null===(_=E[b.b.NAME])||void 0===_?void 0:_.value)&&void 0!==S?S:""},[b.b.LOCATIONS]:a(b.b.LOCATIONS),[b.b.ENABLED]:a(b.b.ENABLED),[b.b.MONITOR_TYPE]:a(b.b.MONITOR_TYPE),[b.b.LOCATIONS]:a(b.b.LOCATIONS),[b.b.SCHEDULE]:E=>{var S,_;const T=null==E||null===(S=E[b.b.SCHEDULE])||void 0===S?void 0:S.value,l=null==E||null===(_=E[b.b.MONITOR_TYPE])||void 0===_?void 0:_.value;if(T){var R;const S=JSON.parse(null==E||null===(R=E[b.b.SCHEDULE])||void 0===R?void 0:R.value).replace("@every ","");return{unit:S.slice(-1),number:S.slice(0,S.length-1)}}return A.d[l][b.b.SCHEDULE]},[b.b.APM_SERVICE_NAME]:a(b.b.APM_SERVICE_NAME),[b.b.TAGS]:(P=b.b.TAGS,o(P,A.c)),[b.b.TIMEOUT]:(E=>L(E,A.c))(b.b.TIMEOUT),[b.b.NAMESPACE]:E=>{var S,_;return null!==(S=null==E||null===(_=E[b.b.NAMESPACE])||void 0===_?void 0:_.value)&&void 0!==S?S:A.h},[b.b.REVISION]:a(b.b.REVISION),[b.b.MONITOR_SOURCE_TYPE]:a(b.b.MONITOR_SOURCE_TYPE)};var P;const N={[b.b.TLS_CERTIFICATE_AUTHORITIES]:E=>{var S;return d(null==E||null===(S=E[b.b.TLS_CERTIFICATE_AUTHORITIES])||void 0===S?void 0:S.value,b.b.TLS_CERTIFICATE_AUTHORITIES)},[b.b.TLS_CERTIFICATE]:E=>{var S;return d(null==E||null===(S=E[b.b.TLS_CERTIFICATE])||void 0===S?void 0:S.value,b.b.TLS_CERTIFICATE)},[b.b.TLS_KEY]:E=>{var S;return d(null==E||null===(S=E[b.b.TLS_KEY])||void 0===S?void 0:S.value,b.b.TLS_KEY)},[b.b.TLS_KEY_PASSPHRASE]:E=>{var S;return U(null==E||null===(S=E[b.b.TLS_KEY_PASSPHRASE])||void 0===S?void 0:S.value,b.b.TLS_KEY_PASSPHRASE)},[b.b.TLS_VERIFICATION_MODE]:E=>{var S;return U(null==E||null===(S=E[b.b.TLS_VERIFICATION_MODE])||void 0===S?void 0:S.value,b.b.TLS_VERIFICATION_MODE)},[b.b.TLS_VERSION]:E=>{var S;return d(null==E||null===(S=E[b.b.TLS_VERSION])||void 0===S?void 0:S.value,b.b.TLS_VERSION)}},U=(E="",S)=>null!=E?E:n.u[S],d=(E="",S)=>E?t(E):n.u[S],v={...n.q,...n.p},D=E=>i(E,v),H=E=>o(E,v),s={[b.b.METADATA]:H(b.b.METADATA),[b.b.URLS]:D(b.b.URLS),[b.b.MAX_REDIRECTS]:D(b.b.MAX_REDIRECTS),[b.b.USERNAME]:D(b.b.USERNAME),[b.b.PASSWORD]:D(b.b.PASSWORD),[b.b.PROXY_URL]:D(b.b.PROXY_URL),[b.b.RESPONSE_BODY_CHECK_NEGATIVE]:H(b.b.RESPONSE_BODY_CHECK_NEGATIVE),[b.b.RESPONSE_BODY_CHECK_POSITIVE]:H(b.b.RESPONSE_BODY_CHECK_POSITIVE),[b.b.RESPONSE_BODY_INDEX]:D(b.b.RESPONSE_BODY_INDEX),[b.b.RESPONSE_HEADERS_CHECK]:H(b.b.RESPONSE_HEADERS_CHECK),[b.b.RESPONSE_HEADERS_INDEX]:D(b.b.RESPONSE_HEADERS_INDEX),[b.b.RESPONSE_STATUS_CHECK]:H(b.b.RESPONSE_STATUS_CHECK),[b.b.REQUEST_BODY_CHECK]:E=>{var S,_;const T=null==E||null===(S=E[b.b.REQUEST_BODY_CHECK])||void 0===S?void 0:S.value,l=null==E||null===(_=E[b.b.REQUEST_HEADERS_CHECK])||void 0===_?void 0:_.value;if(T){var R,e,O;const S=l?t(null==E||null===(R=E[b.b.REQUEST_HEADERS_CHECK])||void 0===R?void 0:R.value):n.p[b.b.REQUEST_HEADERS_CHECK],_=null!=T?JSON.parse(T):null===(e=n.p[b.b.REQUEST_BODY_CHECK])||void 0===e?void 0:e.value;let I=null===(O=n.p[b.b.REQUEST_BODY_CHECK])||void 0===O?void 0:O.type;return Object.keys(S||[]).some((E=>{if("Content-Type"===E&&b.n[S[E]])return I=b.n[S[E]],!0})),{value:_,type:I}}return n.p[b.b.REQUEST_BODY_CHECK]},[b.b.REQUEST_HEADERS_CHECK]:H(b.b.REQUEST_HEADERS_CHECK),[b.b.REQUEST_METHOD_CHECK]:D(b.b.REQUEST_METHOD_CHECK),...r,...N},c={...n.t,...n.s},Y=E=>i(E,c),M={[b.b.METADATA]:(E=>o(E,c))(b.b.METADATA),[b.b.HOSTS]:Y(b.b.HOSTS),[b.b.PROXY_URL]:Y(b.b.PROXY_URL),[b.b.PROXY_USE_LOCAL_RESOLVER]:Y(b.b.PROXY_USE_LOCAL_RESOLVER),[b.b.RESPONSE_RECEIVE_CHECK]:Y(b.b.RESPONSE_RECEIVE_CHECK),[b.b.REQUEST_SEND_CHECK]:Y(b.b.REQUEST_SEND_CHECK),...N,...r},f={[b.b.HOSTS]:(E=>i(E,n.r))(b.b.HOSTS),[b.b.WAIT]:(E=>L(E,n.r))(b.b.WAIT),...r},K={...n.o,...n.n},F=E=>i(E,K),p=E=>o(E,K);function V(E){const S=b.m[E];return _=>{var T,l,R,n,e,O;return null!==(R=S,T=(n=null==_||null===(l=_[b.b.THROTTLING_CONFIG])||void 0===l?void 0:l.value)&&"false"!==n&&null!==(e=null===(O=n.split("/").filter((E=>E.endsWith(R)))[0])||void 0===O?void 0:O.slice(0,-1))&&void 0!==e?e:null)&&void 0!==T?T:K[E]}}const y={[b.b.METADATA]:p(b.b.METADATA),[b.b.URLS]:F(b.b.URLS),[b.b.PORT]:F(b.b.PORT),[b.b.SOURCE_ZIP_URL]:F(b.b.SOURCE_ZIP_URL),[b.b.SOURCE_ZIP_USERNAME]:F(b.b.SOURCE_ZIP_USERNAME),[b.b.SOURCE_ZIP_PASSWORD]:F(b.b.SOURCE_ZIP_PASSWORD),[b.b.SOURCE_ZIP_FOLDER]:F(b.b.SOURCE_ZIP_FOLDER),[b.b.SOURCE_PROJECT_CONTENT]:F(b.b.SOURCE_PROJECT_CONTENT),[b.b.SOURCE_INLINE]:p(b.b.SOURCE_INLINE),[b.b.SOURCE_ZIP_PROXY_URL]:F(b.b.SOURCE_ZIP_PROXY_URL),[b.b.PARAMS]:F(b.b.PARAMS),[b.b.SCREENSHOTS]:F(b.b.SCREENSHOTS),[b.b.SYNTHETICS_ARGS]:p(b.b.SYNTHETICS_ARGS),[b.b.IS_THROTTLING_ENABLED]:function(E){var S;return"false"!==(null==E||null===(S=E[b.b.THROTTLING_CONFIG])||void 0===S?void 0:S.value)},[b.b.DOWNLOAD_SPEED]:V(b.b.DOWNLOAD_SPEED),[b.b.UPLOAD_SPEED]:V(b.b.UPLOAD_SPEED),[b.b.LATENCY]:V(b.b.LATENCY),[b.b.THROTTLING_CONFIG]:F(b.b.THROTTLING_CONFIG),[b.b.ZIP_URL_TLS_CERTIFICATE_AUTHORITIES]:p(b.b.ZIP_URL_TLS_CERTIFICATE_AUTHORITIES),[b.b.ZIP_URL_TLS_CERTIFICATE]:p(b.b.ZIP_URL_TLS_CERTIFICATE),[b.b.ZIP_URL_TLS_KEY]:p(b.b.ZIP_URL_TLS_KEY),[b.b.ZIP_URL_TLS_KEY_PASSPHRASE]:F(b.b.ZIP_URL_TLS_KEY_PASSPHRASE),[b.b.ZIP_URL_TLS_VERIFICATION_MODE]:F(b.b.ZIP_URL_TLS_VERIFICATION_MODE),[b.b.ZIP_URL_TLS_VERSION]:p(b.b.ZIP_URL_TLS_VERSION),[b.b.JOURNEY_FILTERS_MATCH]:p(b.b.JOURNEY_FILTERS_MATCH),[b.b.JOURNEY_FILTERS_TAGS]:p(b.b.JOURNEY_FILTERS_TAGS),[b.b.IGNORE_HTTPS_ERRORS]:F(b.b.IGNORE_HTTPS_ERRORS),[b.b.JOURNEY_ID]:F(b.b.JOURNEY_ID),[b.b.PROJECT_ID]:F(b.b.PROJECT_ID),[b.b.PLAYWRIGHT_OPTIONS]:F(b.b.PLAYWRIGHT_OPTIONS),[b.b.CUSTOM_HEARTBEAT_ID]:F(b.b.CUSTOM_HEARTBEAT_ID),[b.b.ORIGINAL_SPACE]:F(b.b.ORIGINAL_SPACE),...r},Z=(b.d.HTTP,b.d.ICMP,b.d.TCP,b.d.BROWSER,{...s,...f,...M,...y,...r}),m=Object(T.memo)((({policy:E,newPolicy:S,onChange:_})=>{const{enableTLS:R,enableZipUrlTLS:e,fullConfig:O,monitorTypeConfig:I,monitorType:u,tlsConfig:t}=Object(T.useMemo)((()=>{let S=!1,_=!1;return(()=>{var T,l,R;const n=E.inputs.find((E=>!0===E.enabled)),e=null==n||null===(T=n.streams.find((E=>Object.values(b.d).includes(E.data_stream.dataset))))||void 0===T?void 0:T.vars,O=null==e?void 0:e[b.b.MONITOR_TYPE].value,I=(Object.values(b.b)||[]).reduce(((E,S)=>{var _;return{...E,[S]:null===(_=Z[S])||void 0===_?void 0:_.call(Z,e)}}),{}),u={[b.b.TLS_CERTIFICATE_AUTHORITIES]:I[b.b.TLS_CERTIFICATE_AUTHORITIES],[b.b.TLS_CERTIFICATE]:I[b.b.TLS_CERTIFICATE],[b.b.TLS_KEY]:I[b.b.TLS_KEY],[b.b.TLS_KEY_PASSPHRASE]:I[b.b.TLS_KEY_PASSPHRASE],[b.b.TLS_VERIFICATION_MODE]:I[b.b.TLS_VERIFICATION_MODE],[b.b.TLS_VERSION]:I[b.b.TLS_VERSION]};return S=I[b.b.METADATA].is_tls_enabled||Boolean(null==e||null===(l=e[b.b.TLS_VERIFICATION_MODE])||void 0===l?void 0:l.value),_=I[b.b.METADATA].is_zip_url_tls_enabled||Boolean(null==e||null===(R=e[b.b.ZIP_URL_TLS_VERIFICATION_MODE])||void 0===R?void 0:R.value),{fullConfig:{[O]:I},monitorTypeConfig:I,tlsConfig:u,monitorType:O,enableTLS:S,enableZipUrlTLS:_}})()}),[E]);return l.a.createElement(n.h,{defaultMonitorType:u,defaultIsTLSEnabled:R,defaultIsZipUrlTLSEnabled:e,isEditable:!0},l.a.createElement(n.m,{defaultValues:R?t:void 0},l.a.createElement(n.e,{defaultValues:null==O?void 0:O[b.d.HTTP]},l.a.createElement(n.k,{defaultValues:null==O?void 0:O[b.d.TCP]},l.a.createElement(n.g,{defaultValues:null==O?void 0:O[b.d.ICMP]},l.a.createElement(n.b,{defaultValues:null==O?void 0:O[b.d.BROWSER]},l.a.createElement(C,{newPolicy:S,onChange:_,defaultConfig:I})))))))}));m.displayName="SyntheticsPolicyEditExtensionWrapper"},54:function(E,S,_){E.exports=_(10)(3)}}]);