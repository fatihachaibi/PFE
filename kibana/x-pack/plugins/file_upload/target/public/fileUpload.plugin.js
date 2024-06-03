/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(t){function n(n){for(var e,o,i=n[0],a=n[1],u=0,s=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);for(c&&c(n);s.length;)s.shift()()}var e={},r={0:0};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var i=new Promise((function(n,o){e=r[t]=[n,o]}));n.push(e[2]=i);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(t){return o.p+"fileUpload.chunk."+t+".js"}(t);var c=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(s);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,e[1](c)}r[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},o.m=t,o.c=e,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o.oe=function(t){throw console.error(t),t};var i=window.fileUpload_bundle_jsonpfunction=window.fileUpload_bundle_jsonpfunction||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var c=a;o(o.s=10)}([function(t,n,e){"use strict";e.d(n,"g",(function(){return r})),e.d(n,"f",(function(){return o})),e.d(n,"d",(function(){return i})),e.d(n,"e",(function(){return a})),e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return s}));const r="fileUpload:maxFileSize",o=Math.pow(2,20),i="100MB",a=104857600,u=1073741274,c="0,0.[0] b",s={DELIMITED:"delimited",NDJSON:"ndjson",SEMI_STRUCTURED_TEXT:"semi_structured_text"}},function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return f})),e.d(n,"g",(function(){return _})),e.d(n,"c",(function(){return m})),e.d(n,"f",(function(){return h})),e.d(n,"d",(function(){return b})),e.d(n,"e",(function(){return y}));var r=e(4);let o;async function i(){return void 0!==o||(o=new Promise((async(t,n)=>{try{const{GeoUploadWizard:n,importerFactory:o,IndexNameForm:i}=await e.e(1).then(e.bind(null,180));t({GeoUploadWizard:n,importerFactory:o,getHttp:r.c,IndexNameForm:i})}catch(t){n(t)}}))),o}var a=e(2),u=e.n(a),c=e(5),s=e.n(c),d=e(6),p=e(3);class geo_upload_wizard_async_wrapper_GeoUploadWizardAsyncWrapper extends s.a.Component{constructor(...t){super(...t),u()(this,"state",{GeoUploadWizard:null}),u()(this,"_isMounted",!1)}componentDidMount(){this._isMounted=!0,i().then((t=>{this._isMounted&&this.setState({GeoUploadWizard:t.GeoUploadWizard})}))}componentWillUnmount(){this._isMounted=!1}render(){const{GeoUploadWizard:t}=this.state;return t?Object(p.jsx)(t,this.props):Object(p.jsx)(d.EuiLoadingContent,{lines:3})}}class index_name_form_async_wrapper_IndexNameFormAsyncWrapper extends s.a.Component{constructor(...t){super(...t),u()(this,"state",{IndexNameForm:null}),u()(this,"_isMounted",!1)}componentWillUnmount(){this._isMounted=!1}componentDidMount(){this._isMounted=!0,i().then((t=>{this._isMounted&&this.setState({IndexNameForm:t.IndexNameForm})}))}render(){const{IndexNameForm:t}=this.state;return t?Object(p.jsx)(t,this.props):Object(p.jsx)(d.EuiLoadingContent,{lines:3})}}const l=geo_upload_wizard_async_wrapper_GeoUploadWizardAsyncWrapper,f=index_name_form_async_wrapper_IndexNameFormAsyncWrapper;async function _(t,n){return(await i()).importerFactory(t,n)}async function m(t,n={}){const{getHttp:e}=await i(),r=JSON.stringify(t);return await e().fetch({path:"/internal/file_data_visualizer/analyze_file",method:"POST",body:r,query:n})}async function h(t){const n=await i();try{return(await n.getHttp().fetch({path:"/internal/file_upload/has_import_permission",method:"GET",query:{...t}})).hasImportPermission}catch(t){return!1}}async function b(t,n={}){const e=JSON.stringify({index:t}),r=await i();try{const{exists:t}=await r.getHttp().fetch({path:"/internal/file_upload/index_exists",method:"POST",body:e,query:n});return t}catch(t){return!1}}async function y(t,n,e){const r=JSON.stringify({index:t,timeFieldName:e,query:n}),o=await i();return await o.getHttp().fetch({path:"/internal/file_upload/time_field_range",method:"POST",body:r})}},function(t,n,e){t.exports=e(9)(2)},function(t,n){t.exports=__kbnSharedDeps__.EmotionReact},function(t,n,e){"use strict";let r,o;function i(t,n){r=t,o=n}e.d(n,"e",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return s}));const a=()=>r.docLinks,u=()=>o.data.dataViews,c=()=>r.http,s=()=>r.uiSettings},function(t,n){t.exports=__kbnSharedDeps__.React},function(t,n){t.exports=__kbnSharedDeps__.ElasticEui},function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return c}));var r=e(8),o=e.n(r),i=e(0),a=e(4);function u(){const t=Object(a.d)().get(i.g,i.d),n=o()(t.toUpperCase()).value();return n<i.e?i.e:n<=i.a?n:i.a}function c(){return o()(u()).format(i.c)}},function(t,n){t.exports=__kbnSharedDeps__.ElasticNumeral},function(t,n){t.exports=__kbnSharedDeps_npm__},function(t,n,e){e(11),__kbnBundles__.define("plugin/fileUpload/public",e,13),__kbnBundles__.define("plugin/fileUpload/common",e,12)},function(t,n,e){e.p=window.__kbnPublicPath__.fileUpload},function(t,n,e){"use strict";e.r(n)},function(t,n,e){"use strict";e.r(n),e.d(n,"plugin",(function(){return a}));var r=e(1),o=e(4),i=e(7);class plugin_FileUploadPlugin{setup(){}start(t,n){return Object(o.e)(t,n),{FileUploadComponent:r.a,IndexNameFormComponent:r.b,importerFactory:r.g,getMaxBytes:i.a,getMaxBytesFormatted:i.b,hasImportPermission:r.f,checkIndexExists:r.d,getTimeFieldRange:r.e,analyzeFile:r.c}}}function a(){return new plugin_FileUploadPlugin}},function(t,n){t.exports=__kbnSharedDeps__.KbnI18n},function(t,n,e){e.r(n);var r=__kbnBundles__.get("plugin/data/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))},function(t,n){t.exports=__kbnSharedDeps__.Lodash},function(t,n){t.exports=__kbnSharedDeps__.Moment},function(t,n){t.exports=__kbnSharedDeps__.KbnI18nReact},function(t,n,e){e.r(n);var r=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(n,Object.getOwnPropertyDescriptors(r))}]);