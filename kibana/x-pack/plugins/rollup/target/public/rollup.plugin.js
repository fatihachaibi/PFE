/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(t){function e(e){for(var n,o,i=e[0],u=e[1],a=0,c=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(s&&s(e);c.length;)c.shift()()}var n={},r={0:0};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=i);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=function(t){return o.p+"rollup.chunk."+t+".js"}(t);var s=new Error;u=function(e){a.onerror=a.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}r[t]=void 0}};var c=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.rollup_bundle_jsonpfunction=window.rollup_bundle_jsonpfunction||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var s=u;o(o.s=9)}([function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return d})),n.d(e,"f",(function(){return p}));var r=n(7);let o=null,i=null;function u(){if(!o)throw new Error("Rollup notifications is not defined");return o}function a(t){o=t}function s(){if(!i)throw new Error("Rollup fatalErrors is not defined");return i}function c(t){i=t}const[l,d]=Object(r.createGetterSetter)("uiMetric");function p(t,e,n){l()(t,e,n)}d((()=>{}))},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"h",(function(){return i})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return a})),n.d(e,"k",(function(){return s})),n.d(e,"l",(function(){return c})),n.d(e,"m",(function(){return l})),n.d(e,"n",(function(){return d})),n.d(e,"o",(function(){return p})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return _})),n.d(e,"c",(function(){return b})),n.d(e,"e",(function(){return m})),n.d(e,"d",(function(){return g}));const r="rollup_jobs",o="app_load",i="job_create",u="job_delete",a="job_delete_many",s="job_start",c="job_start_many",l="job_stop",d="job_stop_many",p="show_details_click",f="detail_panel_summary_tab_click",_="detail_panel_terms_tab_click",b="detail_panel_histogram_tab_click",m="detail_panel_metrics_tab_click",g="detail_panel_json_tab_click"},function(t,e){t.exports=__kbnSharedDeps__.KbnI18n},function(t,e){t.exports=__kbnSharedDeps__.Lodash},function(t,e,n){"use strict";n.d(e,"c",(function(){return _})),n.d(e,"e",(function(){return f})),n.d(e,"p",(function(){return l})),n.d(e,"y",(function(){return d})),n.d(e,"z",(function(){return p})),n.d(e,"A",(function(){return b})),n.d(e,"v",(function(){return h})),n.d(e,"w",(function(){return g})),n.d(e,"o",(function(){return j})),n.d(e,"b",(function(){return x})),n.d(e,"h",(function(){return v})),n.d(e,"i",(function(){return O})),n.d(e,"j",(function(){return k})),n.d(e,"t",(function(){return i})),n.d(e,"s",(function(){return w})),n.d(e,"f",(function(){return P})),n.d(e,"g",(function(){return S})),n.d(e,"d",(function(){return D})),n.d(e,"u",(function(){return T})),n.d(e,"m",(function(){return M})),n.d(e,"q",(function(){return C})),n.d(e,"k",(function(){return J})),n.d(e,"l",(function(){return B})),n.d(e,"x",(function(){return A})),n.d(e,"r",(function(){return z})),n.d(e,"a",(function(){return a.METRIC_TYPE})),n.d(e,"n",(function(){return K.b}));var r=n(1);let o=null;function i(t){o=t}function u(){if(!o)throw new Error("Rollup http is not defined");return o}var a=n(5),s=n(0);function c(t,e){return t.then((t=>(Object(s.f)(a.METRIC_TYPE.LOADED,e),t)))}async function l({asSystemRequest:t}={}){const e={asSystemRequest:t},{jobs:n}=await u().get("/api/rollup/jobs",e);return n}async function d(t){const e={jobIds:t},n=u().post("/api/rollup/start",{body:JSON.stringify(e)}),o=t.length>1?r.l:r.k;return await c(n,o)}async function p(t){const e={jobIds:t},n=u().post("/api/rollup/stop",{body:JSON.stringify(e)}),o=t.length>1?r.n:r.m;return await c(n,o)}async function f(t){const e={jobIds:t},n=u().post("/api/rollup/delete",{body:JSON.stringify(e)}),o=t.length>1?r.j:r.i;return await c(n,o)}async function _(t){const e={job:t},n=u().put("/api/rollup/create",{body:JSON.stringify(e)});return await c(n,r.h)}async function b(t){return await u().get(`/api/rollup/index_pattern_validity/${t}`)}function m(t,e){if(t&&t.body){const{error:n,statusCode:r,message:o}=t.body;return{title:e,text:`${r}: ${n}. ${o}`}}}function g(t,e){const n=m(t,e);return n?Object(s.b)().toasts.addWarning(n):Object(s.a)().add(t,e)}function h(t,e){const n=m(t,e);if(n)return Object(s.b)().toasts.addDanger(n);Object(s.a)().add(t,e)}var y=n(2);const j={text:y.i18n.translate("xpack.rollupJobs.listBreadcrumbTitle",{defaultMessage:"Rollups Jobs"}),href:"/"},x={text:y.i18n.translate("xpack.rollupJobs.createBreadcrumbTitle",{defaultMessage:"Create"})},v=(t,e="",n=[])=>{const r=e.toLowerCase();return n.filter((e=>-1!==(t||Object.keys(e)).findIndex((t=>String(e[t]).toLowerCase().includes(r)))))},O=(t,e=[])=>(e.push(t),t.items&&t.items.forEach((t=>{t.panel&&(O(t.panel,e),t.panel=t.panel.id)})),e);function k(t,e){return t.map((t=>({name:t,type:e})))}function w(t){const{id:e,indexPattern:n,rollupIndex:r,rollupCron:o,dateHistogramInterval:i,rollupDelay:u,rollupPageSize:a,dateHistogramTimeZone:s,dateHistogramField:c,metrics:l,terms:d,histogram:p,histogramInterval:f}=t,_={id:e,index_pattern:n,rollup_index:r,cron:o,page_size:a,groups:{date_histogram:(b={interval:i,delay:u,time_zone:s,field:c},Object.keys(b).forEach((t=>{null!=b[t]&&""!==b[t].trim()||delete b[t]})),b)}};var b;return d.length&&(_.groups.terms={fields:d.map((({name:t})=>t))}),p.length&&(_.groups.histogram={interval:f,fields:p.map((({name:t})=>t))}),l.length&&(_.metrics=[],l.forEach((({name:t,types:e})=>{e.length&&_.metrics.push({field:t,metrics:e})}))),_}function P(t){const{config:{id:e,index_pattern:n,rollup_index:r,cron:o,metrics:i,groups:{date_histogram:{interval:u,fixed_interval:a,calendar_interval:s,delay:c,time_zone:l,field:d},terms:p,histogram:f}},status:{job_state:_},stats:{documents_processed:b,pages_processed:m,rollups_indexed:g,trigger_count:h}}=t,y={id:e,indexPattern:n,rollupIndex:r,rollupCron:o,dateHistogramInterval:u||a||s,rollupDelay:c,dateHistogramTimeZone:l,dateHistogramField:d,status:_,metrics:[],terms:[],histogram:[],documentsProcessed:b,pagesProcessed:m,rollupsIndexed:g,triggerCount:h,json:t};return i&&i.forEach((({field:t,metrics:e})=>{y.metrics.push({name:t,types:e})})),p&&(y.terms=p.fields.map((t=>({name:t})))),f&&(y.histogram=f.fields.map((t=>({name:t}))),y.histogramInterval=f.interval),y}function S(t=[]){return t.map(P)}function D(t){const e=new Promise((t=>setTimeout((()=>{t()}),300)));return Promise.all([t,e])}var R=n(8);let E,I=!1;function T(t){I=t}function M(){return I}function C(t){E=t}function J(){return E}function B(t){const e="string"==typeof t?Object(R.createLocation)(t,null,null,E.history.location):t;return{href:E.history.createHref(e),onClick:t=>{t.defaultPrevented||t.target.getAttribute("target")||!(t=>!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey))(t)&&(t=>0===t.button)(t)&&(t.preventDefault(),E.history.push(e))}}}var L=n(3);const H={},A=(t=[],e,n)=>{const r=H[e]||(o=e,t=>t[o]);var o;const i=Object(L.sortBy)(t,r);return n?i:i.reverse()};function z({metrics:t,typeMaps:e}){return t.map((t=>{const{name:n}=t,{type:r}=e.find((t=>t.fields.some((t=>t.name===n))));return{...t,type:r}}))}var K=n(6)},function(t,e){t.exports=__kbnSharedDeps__.KbnAnalytics},function(t,e,n){"use strict";let r;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const o=t=>{r=t.links}},function(t,e,n){n.r(e);var r=__kbnBundles__.get("plugin/kibanaUtils/common");Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))},function(t,e){t.exports=__kbnSharedDeps__.History},function(t,e,n){n(10),__kbnBundles__.define("plugin/rollup/public",n,11)},function(t,e,n){n.p=window.__kbnPublicPath__.rollup},function(t,e,n){"use strict";n.r(e),n.d(e,"plugin",(function(){return d}));var r=n(2),o=n(3);const i="isRollupIndex",u={matchIndex:t=>Object(o.get)(t,i),label:r.i18n.translate("xpack.rollupJobs.indexMgmtToggle.toggleLabel",{defaultMessage:"Include rollup indices"}),name:"rollupToggle"},a={matchIndex:t=>Object(o.get)(t,i),label:r.i18n.translate("xpack.rollupJobs.indexMgmtBadge.rollupLabel",{defaultMessage:"Rollup"}),color:"success",filterExpression:"isRollupIndex:true"};var s=n(1),c=n(4),l=n(0);class plugin_RollupPlugin{constructor(t){this.ctx=t}setup(t,{home:e,management:o,indexManagement:i,usageCollection:c}){const{ui:{enabled:d}}=this.ctx.config.get();if(Object(l.c)(t.fatalErrors),c&&Object(l.e)(c.reportUiCounter.bind(c,s.b)),i&&(i.extensionsService.addBadge(a),i.extensionsService.addToggle(u)),e&&d&&e.featureCatalogue.register({id:"rollup_jobs",title:"Rollups",description:r.i18n.translate("xpack.rollupJobs.featureCatalogueDescription",{defaultMessage:"Summarize and store historical data in a smaller index for future analysis."}),icon:"indexRollupApp",path:"/app/management/data/rollup_jobs/job_list",showOnHomePage:!1,category:"admin"}),d){const e=r.i18n.translate("xpack.rollupJobs.appTitle",{defaultMessage:"Rollup Jobs"});o.sections.section.data.registerApp({id:"rollup_jobs",title:e,order:4,async mount(r){const[o]=await t.getStartServices(),{chrome:{docTitle:i}}=o;i.change(e),r.setBreadcrumbs([{text:e}]);const{renderApp:u}=await n.e(1).then(n.bind(null,66)),a=await u(t,r);return()=>{i.reset(),a()}}})}}start(t){Object(c.t)(t.http),Object(l.d)(t.notifications),Object(c.n)(t.docLinks)}}const d=t=>new plugin_RollupPlugin(t)},function(t,e){t.exports=__kbnSharedDeps__.React},function(t,e){t.exports=__kbnSharedDeps__.EmotionReact},function(t,e){t.exports=__kbnSharedDeps__.KbnI18nReact},function(t,e){t.exports=__kbnSharedDeps__.ElasticEui},function(t,e){t.exports=__kbnSharedDeps_npm__},function(t,e,n){n.r(e);var r=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))},function(t,e,n){n.r(e);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))},function(t,e,n){n.r(e);var r=__kbnBundles__.get("plugin/data/public");Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))},function(t,e){t.exports=__kbnSharedDeps__.ReactDom},function(t,e){t.exports=__kbnSharedDeps__.ReactRouterDom},function(t,e){t.exports=__kbnSharedDeps__.MomentTimezone}]);