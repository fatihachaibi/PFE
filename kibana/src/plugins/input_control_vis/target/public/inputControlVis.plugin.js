!function(e){function t(t){for(var n,o,i=t[0],s=t[1],u=0,l=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(a&&a(t);l.length;)l.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(e){return o.p+"inputControlVis.chunk."+e+".js"}(e);var a=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.inputControlVis_bundle_jsonpfunction=window.inputControlVis_bundle_jsonpfunction||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var a=s;o(o.s=7)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,n){e.exports=n(6)(3)},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n(8),__kbnBundles__.define("plugin/inputControlVis/public",n,9)},function(e,t,n){n.p=window.__kbnPublicPath__.inputControlVis},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return g}));var r=n(0);const o=()=>({name:"input_control_vis",type:"render",inputTypes:[],help:r.i18n.translate("inputControl.function.help",{defaultMessage:"Input control visualization"}),args:{visConfig:{types:["string"],default:'"{}"',help:""}},fn:(e,t)=>({type:"render",as:"input_control_vis",value:{visType:"input_control_vis",visConfig:JSON.parse(t.visConfig)}})}),i=new Map;var s=n(4),u=n(5),a=n.n(u),l=n(1),c=n(2);const p=Object(l.lazy)((()=>n.e(2).then(n.bind(null,44)))),d=Object(l.lazy)((()=>n.e(3).then(n.bind(null,42)))),f=e=>Object(c.jsx)(d,e);var _=n(3);const b=e=>{const t=Object(_.buildExpressionFunction)("input_control_vis",{visConfig:JSON.stringify(e.params)});return Object(_.buildExpression)([t]).toAst()};class plugin_InputControlVisPlugin{constructor(e){this.initializerContext=e}setup(e,{expressions:t,visualizations:u,unifiedSearch:l,data:d}){const _={core:e,unifiedSearch:l,getSettings:async()=>{const{timeout:e,terminateAfter:t}=l.autocomplete.getAutocompleteSettings();return{autocompleteTimeout:e,autocompleteTerminateAfter:t}},data:d};var g;t.registerFunction(o),t.registerRenderer((g=_,{name:"input_control_vis",reuseDomNode:!0,render:async(e,{visConfig:t},r)=>{let o=i.get(e);if(!o){const{createInputControlVisController:t}=await n.e(1).then(n.bind(null,43));o=t(g,r,e),i.set(e,o),r.onDestroy((()=>{var t;null===(t=o)||void 0===t||t.destroy(),i.delete(e)}))}await o.render(t),r.done()}})),u.createBaseVisualization(function(e){const t=(e=>t=>Object(c.jsx)(p,a()({},t,{deps:e})))(e);return{name:"input_control_vis",title:r.i18n.translate("inputControl.register.controlsTitle",{defaultMessage:"Input controls"}),icon:"controlsHorizontal",group:s.VisGroups.TOOLS,description:r.i18n.translate("inputControl.register.controlsDescription",{defaultMessage:"Input controls are deprecated and will be removed in a future version."}),stage:"experimental",isDeprecated:!0,visConfig:{defaults:{controls:[],updateFiltersOnChange:!1,useTimeFilter:!1,pinFilters:!1}},editorConfig:{optionTabs:[{name:"controls",title:r.i18n.translate("inputControl.register.tabs.controlsTitle",{defaultMessage:"Controls"}),editor:t},{name:"options",title:r.i18n.translate("inputControl.register.tabs.optionsTitle",{defaultMessage:"Options"}),editor:f}]},inspectorAdapters:{},toExpressionAst:b}}(_))}start(e,t){}}function g(e){return new plugin_InputControlVisPlugin(e)}},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t,n){n.r(t);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.MomentTimezone}]);