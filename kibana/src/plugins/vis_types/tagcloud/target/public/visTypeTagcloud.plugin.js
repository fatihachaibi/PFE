!function(e){function t(t){for(var n,r,o=t[0],s=t[1],a=0,c=[];a<o.length;a++)r=o[a],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);c.length;)c.shift()()}var n={},i={0:0};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=function(e){return r.p+"visTypeTagcloud.chunk."+e+".js"}(e);var u=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}i[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var o=window.visTypeTagcloud_bundle_jsonpfunction=window.visTypeTagcloud_bundle_jsonpfunction||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var a=0;a<o.length;a++)t(o[a]);var u=s;r(r.s=9)}([function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){e.exports=n(4)(2)},function(e,t,n){e.exports=n(4)(3)},function(e,t,n){n(10),__kbnBundles__.define("plugin/visTypeTagcloud/public",n,11)},function(e,t,n){n.p=window.__kbnPublicPath__.visTypeTagcloud},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return v}));var i=n(7),r=n.n(i),o=n(1),s=n(3),a=n(2),u=n(8),c=n.n(u),l=n(5),p=n(6);const d=Object(l.lazy)((()=>n.e(1).then(n.bind(null,15)))),g=({palettes:e})=>t=>Object(p.jsx)(d,c()({},t,{palettes:e}));var f=n(0);const b=e=>{const t=Object(f.buildExpressionFunction)("visdimension",{accessor:e.accessor});return e.format&&(t.addArgument("format",e.format.id),t.addArgument("formatParams",JSON.stringify(e.format.params))),Object(f.buildExpression)([t])},_=e=>{const t=Object(f.buildExpressionFunction)("system_palette",{name:null==e?void 0:e.name});return Object(f.buildExpression)([t])},m=(e,t)=>{const n=Object(f.buildExpressionFunction)("esaggs",{index:Object(f.buildExpression)([Object(f.buildExpressionFunction)("indexPatternLoad",{id:e.data.indexPattern.id})]),metricsAtAllLevels:e.isHierarchical(),partialRows:!1,aggs:e.data.aggs.aggs.map((e=>Object(f.buildExpression)(e.toExpressionAst())))}),i=Object(a.getVisSchemas)(e,t),{scale:r,orientation:o,minFontSize:s,maxFontSize:u,showLabel:c,palette:l}=e.params,p=Object(f.buildExpressionFunction)("tagcloud",{scale:r,orientation:o,minFontSize:s,maxFontSize:u,showLabel:c,metric:b(i.metric[0]),palette:_(l)});return i.segment&&p.addArgument("bucket",b(i.segment[0])),Object(f.buildExpression)([n,p]).toAst()};class plugin_TagCloudPlugin{constructor(e){r()(this,"initializerContext",void 0),this.initializerContext=e}setup(e,{visualizations:t,charts:n}){const i={palettes:n.palettes};t.createBaseVisualization((({palettes:e})=>({name:"tagcloud",title:o.i18n.translate("visTypeTagCloud.vis.tagCloudTitle",{defaultMessage:"Tag cloud"}),icon:"visTagCloud",getSupportedTriggers:()=>[a.VIS_EVENT_TO_TRIGGER.filter],description:o.i18n.translate("visTypeTagCloud.vis.tagCloudDescription",{defaultMessage:"Display word frequency with font size."}),visConfig:{defaults:{scale:"linear",orientation:"single",minFontSize:18,maxFontSize:72,showLabel:!0,palette:{name:"default",type:"palette"}}},toExpressionAst:m,editorConfig:{enableDataViewChange:!0,optionsTemplate:g({palettes:e}),schemas:[{group:s.AggGroupNames.Metrics,name:"metric",title:o.i18n.translate("visTypeTagCloud.vis.schemas.metricTitle",{defaultMessage:"Tag size"}),min:1,max:1,aggFilter:["!std_dev","!percentiles","!percentile_ranks","!derivative","!geo_bounds","!geo_centroid","!filtered_metric","!single_percentile"],defaults:[{schema:"metric",type:"count"}]},{group:s.AggGroupNames.Buckets,name:"segment",title:o.i18n.translate("visTypeTagCloud.vis.schemas.segmentTitle",{defaultMessage:"Tags"}),min:1,max:1,aggFilter:["terms","significant_terms"]}]},requiresSearch:!0}))(i))}start(e){}}function v(e){return new plugin_TagCloudPlugin(e)}},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,n){n.r(t);var i=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))}]);