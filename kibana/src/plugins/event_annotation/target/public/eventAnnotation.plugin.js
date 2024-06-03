!function(n){function t(t){for(var e,a,i=t[0],r=t[1],s=0,u=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e]);for(l&&l(t);u.length;)u.shift()()}var e={},o={0:0};function a(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(n){var t=[],e=o[n];if(0!==e)if(e)t.push(e[2]);else{var i=new Promise((function(t,a){e=o[n]=[t,a]}));t.push(e[2]=i);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(n){return a.p+"eventAnnotation.chunk."+n+".js"}(n);var l=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(u);var e=o[n];if(0!==e){if(e){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,e[1](l)}o[n]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},a.m=n,a.c=e,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)a.d(e,o,function(t){return n[t]}.bind(null,o));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="",a.oe=function(n){throw console.error(n),n};var i=window.eventAnnotation_bundle_jsonpfunction=window.eventAnnotation_bundle_jsonpfunction||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=r;a(a.s=5)}([function(n,t){n.exports=__kbnSharedDeps__.KbnI18n},function(n,t,e){"use strict";e.r(t),e.d(t,"manualPointEventAnnotation",(function(){return a})),e.d(t,"manualRangeEventAnnotation",(function(){return i})),e.d(t,"eventAnnotationGroup",(function(){return r}));var o=e(0);const a={name:"manual_point_event_annotation",aliases:[],type:"manual_point_event_annotation",help:o.i18n.translate("eventAnnotation.manualAnnotation.description",{defaultMessage:"Configure manual annotation"}),inputTypes:["null"],args:{time:{types:["string"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.time",{defaultMessage:"Timestamp for annotation"})},label:{types:["string"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.label",{defaultMessage:"The name of the annotation"})},color:{types:["string"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.color",{defaultMessage:"The color of the line"})},lineStyle:{types:["string"],options:["solid","dotted","dashed"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.lineStyle",{defaultMessage:"The style of the annotation line"})},lineWidth:{types:["number"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.lineWidth",{defaultMessage:"The width of the annotation line"})},icon:{types:["string"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.icon",{defaultMessage:"An optional icon used for annotation lines"}),options:[...Object.values({ASTERISK:"asterisk",ALERT:"alert",BELL:"bell",BOLT:"bolt",BUG:"bug",CIRCLE:"circle",EDITOR_COMMENT:"editorComment",FLAG:"flag",HEART:"heart",MAP_MARKER:"mapMarker",PIN_FILLED:"pinFilled",STAR_EMPTY:"starEmpty",TAG:"tag",TRIANGLE:"triangle"})],strict:!0},textVisibility:{types:["boolean"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.textVisibility",{defaultMessage:"Visibility of the label on the annotation line"})},isHidden:{types:["boolean"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.isHidden",{defaultMessage:"Switch to hide annotation"})}},fn:function(n,t){return{type:"manual_point_event_annotation",...t}}},i={name:"manual_range_event_annotation",aliases:[],type:"manual_range_event_annotation",help:o.i18n.translate("eventAnnotation.manualAnnotation.description",{defaultMessage:"Configure manual annotation"}),inputTypes:["null"],args:{time:{types:["string"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.time",{defaultMessage:"Timestamp for annotation"})},endTime:{types:["string"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.endTime",{defaultMessage:"Timestamp for range annotation"}),required:!1},outside:{types:["boolean"],help:"",required:!1},label:{types:["string"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.label",{defaultMessage:"The name of the annotation"})},color:{types:["string"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.color",{defaultMessage:"The color of the line"})},isHidden:{types:["boolean"],help:o.i18n.translate("eventAnnotation.manualAnnotation.args.isHidden",{defaultMessage:"Switch to hide annotation"})}},fn:function(n,t){return{type:"manual_range_event_annotation",...t}}};function r(){return{name:"event_annotation_group",aliases:[],type:"event_annotation_group",inputTypes:["null"],help:o.i18n.translate("eventAnnotation.group.description",{defaultMessage:"Event annotation group"}),args:{annotations:{types:["manual_point_event_annotation","manual_range_event_annotation"],help:o.i18n.translate("eventAnnotation.group.args.annotationConfigs",{defaultMessage:"Annotation configs"}),multi:!0}},fn:(n,t)=>({type:"event_annotation_group",annotations:t.annotations})}}},function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"b",(function(){return r})),e.d(t,"d",(function(){return s}));var o=e(0);const a=e(4).euiLightVars.euiColorAccent,i="#F04E981A",r=o.i18n.translate("eventAnnotation.manualAnnotation.defaultAnnotationLabel",{defaultMessage:"Event"}),s=n=>Boolean(n&&"range"===(null==n?void 0:n.key.type))},function(n,t,e){n.exports=e(7)(2)},function(n,t){n.exports=__kbnSharedDeps__.KbnUiTheme},function(n,t,e){e(6),__kbnBundles__.define("plugin/eventAnnotation/public",e,8),__kbnBundles__.define("plugin/eventAnnotation/common",e,1)},function(n,t,e){e.p=window.__kbnPublicPath__.eventAnnotation},function(n,t){n.exports=__kbnSharedDeps_npm__},function(n,t,e){"use strict";e.r(t),e.d(t,"plugin",(function(){return s})),e.d(t,"EventAnnotationService",(function(){return event_annotation_service_EventAnnotationService})),e.d(t,"defaultAnnotationColor",(function(){return r.a})),e.d(t,"defaultAnnotationRangeColor",(function(){return r.c})),e.d(t,"isRangeAnnotation",(function(){return r.d}));var o=e(3),a=e.n(o),i=e(1);class event_annotation_service_EventAnnotationService{constructor(){a()(this,"eventAnnotationService",void 0)}async getService(){if(!this.eventAnnotationService){const{getEventAnnotationService:n}=await e.e(1).then(e.bind(null,9));this.eventAnnotationService=n()}return this.eventAnnotationService}}class plugin_EventAnnotationPlugin{constructor(){a()(this,"eventAnnotationService",new event_annotation_service_EventAnnotationService)}setup(n,t){return t.expressions.registerFunction(i.manualPointEventAnnotation),t.expressions.registerFunction(i.manualRangeEventAnnotation),t.expressions.registerFunction(i.eventAnnotationGroup),this.eventAnnotationService}start(){return this.eventAnnotationService}}var r=e(2);const s=()=>new plugin_EventAnnotationPlugin}]);