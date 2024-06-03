/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.enterpriseSearch_bundle_jsonpfunction=window.enterpriseSearch_bundle_jsonpfunction||[]).push([[1],{29:function(e,s,t){"use strict";t.d(s,"a",(function(){return u})),t.d(s,"c",(function(){return l})),t.d(s,"b",(function(){return c.a})),t.d(s,"h",(function(){return c.b})),t.d(s,"e",(function(){return d.b})),t.d(s,"l",(function(){return d.d})),t.d(s,"i",(function(){return g.d})),t.d(s,"k",(function(){return g.f})),t.d(s,"j",(function(){return g.e})),t.d(s,"g",(function(){return g.c})),t.d(s,"f",(function(){return g.b})),t.d(s,"d",(function(){return g.a}));var n=t(9),r=t(24),a=t(11),i=t(94),c=t(51),o=t(10);const u=({children:e})=>{const{messages:s}=Object(r.useValues)(c.a);return Object(o.jsx)("div",{"aria-live":"polite","data-test-subj":"FlashMessages"},s.map((({type:e,message:s,description:t},r)=>Object(o.jsx)(n.Fragment,{key:r},Object(o.jsx)(a.EuiCallOut,{color:i.b[e].color,iconType:i.b[e].iconType,title:s},t),Object(o.jsx)(a.EuiSpacer,null)))),e)},l=()=>{const{toastMessages:e}=Object(r.useValues)(c.a),{dismissToastMessage:s}=Object(r.useActions)(c.a);return Object(o.jsx)(a.EuiGlobalToastList,{toasts:e,dismissToast:s,toastLifeTimeMs:i.a})};var d=t(57),g=t(40)},40:function(e,s,t){"use strict";t.d(s,"d",(function(){return a})),t.d(s,"f",(function(){return i})),t.d(s,"e",(function(){return c})),t.d(s,"a",(function(){return o})),t.d(s,"c",(function(){return u})),t.d(s,"b",(function(){return l}));var n=t(94),r=t(51);const a=e=>{r.a.actions.setFlashMessages({type:"error",message:e})},i=e=>{r.a.actions.setQueuedMessages({type:"success",message:e})},c=e=>{r.a.actions.setQueuedMessages({type:"error",message:e})},o=()=>{r.a.actions.clearFlashMessages()},u=(e,s={})=>{r.a.actions.addToastMessage({...n.b.success,...s,title:e,id:(null==s?void 0:s.id)||`successToast-${Date.now()}`})},l=(e,s={})=>{r.a.actions.addToastMessage({...n.b.error,...s,title:e,id:(null==s?void 0:s.id)||`errorToast-${Date.now()}`})}},41:function(e,s,t){"use strict";t.d(s,"a",(function(){return r})),t.d(s,"c",(function(){return a})),t.d(s,"b",(function(){return b}));var n=t(24);const r=Object(n.kea)({path:["enterprise_search","licensing_logic"],actions:{setLicense:e=>e,setLicenseSubscription:e=>e},reducers:({props:e})=>({license:[null,{setLicense:(e,s)=>s}],licenseSubscription:[null,{setLicenseSubscription:(e,s)=>s}],canManageLicense:[e.canManageLicense||!1,{}]}),selectors:{hasPlatinumLicense:[e=>[e.license],e=>(null==e?void 0:e.isActive)&&["platinum","enterprise","trial"].includes(null==e?void 0:e.type)],hasGoldLicense:[e=>[e.license],e=>(null==e?void 0:e.isActive)&&["gold","platinum","enterprise","trial"].includes(null==e?void 0:e.type)],isTrial:[e=>[e.license],e=>(null==e?void 0:e.isActive)&&"trial"===(null==e?void 0:e.type)]},events:({props:e,actions:s,values:t})=>({afterMount:()=>{const t=e.license$.subscribe((async e=>{s.setLicense(e)}));s.setLicenseSubscription(t)},beforeUnmount:()=>{t.licenseSubscription&&t.licenseSubscription.unsubscribe()}})}),a=e=>(r(e),r.mount());var i=t(36),c=t.n(i),o=(t(9),t(11)),u=t(2),l=t(4),d=t(34),g=t(10);const b=e=>{const{canManageLicense:s}=Object(n.useValues)(r);return s?Object(g.jsx)(d.b,c()({},e,{to:"/app/management/stack/license_management",shouldNotCreateHref:!0}),u.i18n.translate("xpack.enterpriseSearch.licenseManagementLink",{defaultMessage:"Manage your license"})):Object(g.jsx)(o.EuiButton,c()({},e,{target:"_blank",iconType:"popout",href:l.a.licenseManagement}),u.i18n.translate("xpack.enterpriseSearch.licenseDocumentationLink",{defaultMessage:"Learn more about license features"}))}},50:function(e,s,t){"use strict";t.d(s,"a",(function(){return n})),t.d(s,"c",(function(){return r})),t.d(s,"b",(function(){return a})),t.d(s,"d",(function(){return i}));const n={_enterpriseSearchUrl:"",get enterpriseSearchUrl(){return this._enterpriseSearchUrl},set enterpriseSearchUrl(e){this._enterpriseSearchUrl||(this._enterpriseSearchUrl=e)}},r=(e="")=>n.enterpriseSearchUrl+e,a=(e="")=>r("/as"+e),i=(e="")=>r("/ws"+e)},51:function(e,s,t){"use strict";t.d(s,"a",(function(){return i})),t.d(s,"b",(function(){return c}));var n=t(24),r=t(35);const a=e=>Array.isArray(e)?e:[e],i=Object(n.kea)({path:["enterprise_search","flash_messages_logic"],actions:{setFlashMessages:e=>({messages:a(e)}),clearFlashMessages:()=>null,setQueuedMessages:e=>({messages:a(e)}),clearQueuedMessages:()=>null,addToastMessage:e=>({newToast:e}),dismissToastMessage:e=>({removedToast:e}),clearToastMessages:()=>null,setHistoryListener:e=>({historyListener:e})},reducers:{messages:[[],{setFlashMessages:(e,{messages:s})=>s,clearFlashMessages:()=>[]}],queuedMessages:[[],{setQueuedMessages:(e,{messages:s})=>s,clearQueuedMessages:()=>[]}],toastMessages:[[],{addToastMessage:(e,{newToast:s})=>[...e,s],dismissToastMessage:(e,{removedToast:s})=>e.filter((({id:e})=>e!==s.id)),clearToastMessages:()=>[]}],historyListener:[null,{setHistoryListener:(e,{historyListener:s})=>s}]},events:({values:e,actions:s})=>({afterMount:()=>{const t=r.a.values.history.listen((()=>{s.clearFlashMessages(),s.setFlashMessages(e.queuedMessages),s.clearQueuedMessages()}));s.setHistoryListener(t)},beforeUnmount:()=>{const{historyListener:s}=e;s&&s()}})}),c=()=>i.mount()},57:function(e,s,t){"use strict";t.d(s,"a",(function(){return i})),t.d(s,"c",(function(){return c})),t.d(s,"b",(function(){return o})),t.d(s,"d",(function(){return u}));var n=t(2),r=t(51),a=t(40);const i=n.i18n.translate("xpack.enterpriseSearch.shared.flashMessages.defaultErrorMessage",{defaultMessage:"An unexpected error occurred"}),c=e=>{var s,t,n;return Array.isArray(null==e||null===(s=e.body)||void 0===s||null===(t=s.attributes)||void 0===t?void 0:t.errors)?e.body.attributes.errors:[(null==e||null===(n=e.body)||void 0===n?void 0:n.message)||i]},o=(e,{isQueued:s}={})=>{var t;const n=c(e).map((e=>({type:"error",message:e})));if(s?r.a.actions.setQueuedMessages(n):r.a.actions.setFlashMessages(n),null==e||null===(t=e.body)||void 0===t||!t.message)throw e},u=e=>{var s;const t=c(e);for(const e of t)Object(a.b)(e);if(null==e||null===(s=e.body)||void 0===s||!s.message)throw e}},68:function(e,s,t){"use strict";var n=t(50);t.d(s,"a",(function(){return n.a})),t.d(s,"c",(function(){return n.c})),t.d(s,"b",(function(){return n.b})),t.d(s,"d",(function(){return n.d}))},756:function(e,s,t){"use strict";t.r(s),t.d(s,"renderApp",(function(){return v})),t.d(s,"renderHeaderActions",(function(){return j}));var n=t(9),r=t.n(n),a=t(18),i=t.n(a),c=t(179),o=t(13),u=t(24),l=t(12),d=t(17),g=t(68),b=t(29),p=t(30),f=t(35),h=t(41),m=t(10);const v=(e,{params:s,core:t,plugins:n},{config:a,data:v})=>{var M,y,O;const{publicUrl:T,errorConnectingMessage:x,...L}=v;g.a.enterpriseSearchUrl=T||a.host||"";const S=(null===(M=n.cloud)||void 0===M?void 0:M.CloudContextProvider)||(({children:e})=>Object(m.jsx)(r.a.Fragment,null,e));Object(u.resetContext)({createStore:!0});const _=Object(u.getContext)().store,A=Object(f.b)({config:a,charts:n.charts,cloud:n.cloud,history:s.history,navigateToUrl:t.application.navigateToUrl,security:n.security,setBreadcrumbs:t.chrome.setBreadcrumbs,setChromeIsVisible:t.chrome.setIsVisible,setDocTitle:t.chrome.docTitle.change,renderHeaderActions:e=>s.setHeaderActionMenu((s=>j(e,_,s)))}),k=Object(h.c)({license$:n.licensing.license$,canManageLicense:null===(y=t.application.capabilities.management)||void 0===y||null===(O=y.stack)||void 0===O?void 0:O.license_management}),w=Object(p.b)({http:t.http,errorConnectingMessage:x,readOnlyMode:L.readOnlyMode}),C=Object(b.h)();return i.a.render(Object(m.jsx)(l.I18nProvider,null,Object(m.jsx)(d.KibanaThemeProvider,{theme$:s.theme$},Object(m.jsx)(d.KibanaContextProvider,{services:{...t,...n}},Object(m.jsx)(S,null,Object(m.jsx)(c.Provider,{store:_},Object(m.jsx)(o.Router,{history:s.history},Object(m.jsx)(e,L),Object(m.jsx)(b.c,null))))))),s.element),()=>{i.a.unmountComponentAtNode(s.element),A(),k(),w(),C()}},j=(e,s,t)=>(i.a.render(Object(m.jsx)(c.Provider,{store:s},Object(m.jsx)(e,null)),t),()=>i.a.unmountComponentAtNode(t))},94:function(e,s,t){"use strict";t.d(s,"b",(function(){return n})),t.d(s,"a",(function(){return r}));const n={success:{color:"success",iconType:"check"},info:{color:"primary",iconType:"iInCircle"},warning:{color:"warning",iconType:"alert"},error:{color:"danger",iconType:"alert"}},r=5e3}}]);