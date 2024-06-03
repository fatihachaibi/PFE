!function(e){function t(t){for(var n,a,o=t[0],r=t[1],i=0,c=[];i<o.length;i++)a=o[i],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&c.push(s[a][0]),s[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(l&&l(t);c.length;)c.shift()()}var n={},s={0:0};function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=o);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=function(e){return a.p+"visTypeTable.chunk."+e+".js"}(e);var l=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(c);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}s[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var o=window.visTypeTable_bundle_jsonpfunction=window.visTypeTable_bundle_jsonpfunction||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=r;a(a.s=14)}([function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));const s="table";let a;!function(e){e.SUM="sum",e.AVG="avg",e.MIN="min",e.MAX="max",e.COUNT="count"}(a||(a={}))},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,n){n.r(t);var s=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var s=n(13);const[a,o]=Object(s.createGetterSetter)("table data.fieldFormats")},function(e,t,n){n.r(t);var s=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t,n){n.r(t);var s=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,n){n.r(t);var s=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return b}));var s=n(1);const a=(e,t)=>{const[n,a]=Object(s.useState)({pageIndex:0,pageSize:e.perPage||0}),o=Object(s.useCallback)((e=>a((t=>({...t,pageSize:e,pageIndex:0})))),[]),r=Object(s.useCallback)((e=>a((t=>({...t,pageIndex:e})))),[]);return Object(s.useEffect)((()=>{const n=e.perPage||0,s=Math.ceil(t/n)-1;a((e=>({pageIndex:e.pageIndex>s?s:e.pageIndex,pageSize:n})))}),[e.perPage,t]),Object(s.useMemo)((()=>n.pageSize?{...n,onChangeItemsPerPage:o,onChangePage:r}:void 0),[o,r,n])};var o=n(3);const r={columnIndex:null,direction:null},i=e=>{const[t,n]=Object(s.useState)((null==e?void 0:e.get("vis.params.sort"))||r),[a,i]=Object(s.useState)((null==e?void 0:e.get("vis.params.colWidth"))||[]),l=Object(s.useRef)({columnsWidth:null==e?void 0:e.get("vis.params.colWidth"),sort:null==e?void 0:e.get("vis.params.sort"),pendingUpdate:!1}),c=Object(s.useCallback)(((t=r)=>{n(t||r),l.current.sort=t,l.current.pendingUpdate=!0,setTimeout((()=>{null==e||e.set("vis.params.sort",t),l.current.pendingUpdate=!1}))}),[e]),u=Object(s.useCallback)((t=>{i((n=>{const s=[...n],a=n.findIndex((e=>e.colIndex===t.colIndex));return a>=0?s[a]=t:s.push(t),l.current.columnsWidth=s,l.current.pendingUpdate=!0,setTimeout((()=>{null==e||e.set("vis.params.colWidth",s),l.current.pendingUpdate=!1})),s}))}),[e]);return Object(s.useEffect)((()=>{const t=Object(o.debounce)((()=>{if(l.current.pendingUpdate)return;const{vis:t}=null==e?void 0:e.getChanges();Object(o.isEqual)(null==t?void 0:t.params.colWidth,l.current.columnsWidth)||(l.current.columnsWidth=null==t?void 0:t.params.colWidth,i((null==t?void 0:t.params.colWidth)||[])),Object(o.isEqual)(null==t?void 0:t.params.sort,l.current.sort)||(l.current.sort=null==t?void 0:t.params.sort,n((null==t?void 0:t.params.sort)||r))}));return null==e||e.on("change",t),()=>{null==e||e.off("change",t)}}),[e]),{columnsWidth:a,sort:t,setColumnsWidth:u,setSort:c}};var l=n(6),c=n(0);function u(e,t){const{columns:n,rows:s,formattedColumns:a}=e,r=Object(o.findIndex)(n,{name:t});if(r<0)return e;const{id:i}=n[r],{sumTotal:u}=a[i],p=`${i}-percents`,d=Object(l.a)().deserialize({id:"percent"}),b=c.i18n.translate("visTypeTable.params.percentageTableColumnName",{defaultMessage:"{title} percentages",values:{title:t}}),f=function(e,t,n){const s=[...e];return s.splice(t+1,0,n),s}(n,r,{name:b,id:p,meta:{type:"number",params:{id:"percent"}}}),m={...a,[p]:{title:b,formatter:d,filterable:!1}};return{columns:f,rows:s.map((e=>({[p]:e[i]/u,...e}))),formattedColumns:m}}var p=n(2);const d=(e,t)=>{const{buckets:n,metrics:s}=t,a=e.columns.reduce(((a,r,i)=>{var c;const u=null==n?void 0:n.find((({accessor:e})=>e===i)),d=u||s.find((({accessor:e})=>e===i));if(!d)return a;const b=Object(l.a)().deserialize(d.format),f={title:r.name,formatter:b,filterable:!!u},m="date"===d.format.id||"date"===(null===(c=d.format.params)||void 0===c?void 0:c.id);if(b.allowsNumericalAggregations||m||t.totalFunc===p.a.COUNT){const n=e.rows.reduce(((e,t)=>void 0===t[r.id]?e:e+t[r.id]),0);switch(f.sumTotal=n,t.totalFunc){case p.a.SUM:m||(f.formattedTotal=b.convert(n),f.total=n);break;case p.a.AVG:if(!m){const t=n/e.rows.length;f.formattedTotal=b.convert(t),f.total=t}break;case p.a.MIN:{const t=Object(o.chain)(e.rows).map(r.id).min().value();f.formattedTotal=b.convert(t),f.total=t;break}case p.a.MAX:{const t=Object(o.chain)(e.rows).map(r.id).max().value();f.formattedTotal=b.convert(t),f.total=t;break}case p.a.COUNT:{const t=e.rows.length;f.formattedTotal=t,f.total=t;break}}}return a[r.id]=f,a}),{});return{columns:e.columns.filter((e=>a[e.id])),rows:e.rows,formattedColumns:a}};function b(e,t){const n=[];let s,a;const o=t.splitColumn||t.splitRow;if(o){a=t.splitRow?"row":"column";const s=o.accessor,r=Object(l.a)().deserialize(o.format),i=e.columns[s],c={};let p=0;e.rows.forEach((t=>{const s=t[i.id];if(!c.hasOwnProperty(s)){c[s]=p++;const t={title:`${r.convert(s)}: ${i.name}`,table:{columns:e.columns,rows:[],formattedColumns:{}}};n.push(t)}const a=c[s];n[a].table.rows.push(t)})),n.forEach((e=>{e.table=d(e.table,t),t.percentageCol&&(e.table=u(e.table,t.percentageCol))}))}else s=d(e,t),t.percentageCol&&(s=u(s,t.percentageCol));return{direction:a,table:s,tables:n}}},function(e,t,n){n.r(t);var s=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t,n){n(15),__kbnBundles__.define("plugin/visTypeTable/public",n,16)},function(e,t,n){n.p=window.__kbnPublicPath__.visTypeTable},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return _}));var s=n(6),a=n(0),o=n(7),r=n(2),i=n(12);const l=()=>({name:"kibana_table",type:"render",inputTypes:["datatable"],help:a.i18n.translate("visTypeTable.function.help",{defaultMessage:"Table visualization"}),args:{metrics:{types:["vis_dimension"],help:a.i18n.translate("visTypeTable.function.args.metricsHelpText",{defaultMessage:"Metrics dimensions config"}),required:!0,multi:!0},buckets:{types:["vis_dimension"],help:a.i18n.translate("visTypeTable.function.args.bucketsHelpText",{defaultMessage:"Buckets dimensions config"}),multi:!0},splitColumn:{types:["vis_dimension"],help:a.i18n.translate("visTypeTable.function.args.splitColumnHelpText",{defaultMessage:"Split by column dimension config"})},splitRow:{types:["vis_dimension"],help:a.i18n.translate("visTypeTable.function.args.splitRowHelpText",{defaultMessage:"Split by row dimension config"})},percentageCol:{types:["string"],help:a.i18n.translate("visTypeTable.function.args.percentageColHelpText",{defaultMessage:"Name of column to show percentage for"}),default:""},perPage:{types:["number"],default:"",help:a.i18n.translate("visTypeTable.function.args.perPageHelpText",{defaultMessage:"The number of rows at a table page is used for pagination"})},row:{types:["boolean"],help:a.i18n.translate("visTypeTable.function.args.rowHelpText",{defaultMessage:'Row value is used for split table mode. Set to "true" to split by row'})},showPartialRows:{types:["boolean"],help:"",default:!1},showMetricsAtAllLevels:{types:["boolean"],help:"",default:!1},showToolbar:{types:["boolean"],help:a.i18n.translate("visTypeTable.function.args.showToolbarHelpText",{defaultMessage:'Set to "true" to show grid\'s toolbar with "Export" button'}),default:!1},showTotal:{types:["boolean"],help:a.i18n.translate("visTypeTable.function.args.showTotalHelpText",{defaultMessage:'Set to "true" to show the total row'}),default:!1},title:{types:["string"],help:a.i18n.translate("visTypeTable.function.args.titleHelpText",{defaultMessage:"The visualization title. The title is used for CSV export as a default file name"})},totalFunc:{types:["string"],help:a.i18n.translate("visTypeTable.function.args.totalFuncHelpText",{defaultMessage:"Specifies calculating function for the total row. Possible options are: "})},autoFitRowToContent:{types:["boolean"],help:"",default:!1}},fn(e,t,n){var s,l,c,u,p;const d=Object(i.a)(e,t),b={rows:null!==(s=null==d||null===(l=d.table)||void 0===l?void 0:l.rows)&&void 0!==s?s:e.rows,columns:null!==(c=null==d||null===(u=d.table)||void 0===u?void 0:u.columns)&&void 0!==c?c:e.columns,type:"datatable"};if(null!=n&&null!==(p=n.inspectorAdapters)&&void 0!==p&&p.tables){const e=[[t.metrics,a.i18n.translate("visTypeTable.function.dimension.metrics",{defaultMessage:"Metrics"})],[t.buckets,a.i18n.translate("visTypeTable.function.adimension.buckets",{defaultMessage:"Buckets"})]];t.splitColumn&&e.push([[t.splitColumn],a.i18n.translate("visTypeTable.function.dimension.splitColumn",{defaultMessage:"Split by column"})]),t.splitRow&&e.push([[t.splitRow],a.i18n.translate("visTypeTable.function.dimension.splitRow",{defaultMessage:"Split by row"})]);const s=Object(o.prepareLogTable)(b,e);n.inspectorAdapters.tables.logDatatable("default",s)}return{type:"render",as:"table_vis",value:{visData:d,visType:r.b,visConfig:t}}}});var c=n(1),u=n(9),p=n(11),d=n(5);const b=Object(c.lazy)((()=>n.e(1).then(n.bind(null,28))));var f=n(8),m=n(10);const g=Object(c.lazy)((()=>n.e(2).then(n.bind(null,29))));var v=n(4);const h=e=>{const t=Object(v.buildExpressionFunction)("visdimension",{accessor:e.accessor});return e.format&&(t.addArgument("format",e.format.id),t.addArgument("formatParams",JSON.stringify(e.format.params))),Object(v.buildExpression)([t])},T={name:r.b,title:a.i18n.translate("visTypeTable.tableVisTitle",{defaultMessage:"Data table"}),icon:"visTable",description:a.i18n.translate("visTypeTable.tableVisDescription",{defaultMessage:"Display data in rows and columns."}),getSupportedTriggers:()=>[o.VIS_EVENT_TO_TRIGGER.filter],visConfig:{defaults:{perPage:10,showPartialRows:!1,showMetricsAtAllLevels:!1,showTotal:!1,showToolbar:!1,totalFunc:"sum",percentageCol:"",autoFitRowToContent:!1}},editorConfig:{enableDataViewChange:!0,optionsTemplate:e=>Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(m.EuiLoadingSpinner,null)},Object(d.jsx)(g,e)),schemas:[{group:f.AggGroupNames.Metrics,name:"metric",title:a.i18n.translate("visTypeTable.tableVisEditorConfig.schemas.metricTitle",{defaultMessage:"Metric"}),aggFilter:["!geo_centroid","!geo_bounds","!filtered_metric","!single_percentile"],aggSettings:{top_hits:{allowStrings:!0}},min:1,defaults:[{type:"count",schema:"metric"}]},{group:f.AggGroupNames.Buckets,name:"bucket",title:a.i18n.translate("visTypeTable.tableVisEditorConfig.schemas.bucketTitle",{defaultMessage:"Split rows"}),aggFilter:["!filter","!sampler","!diversified_sampler","!multi_terms","!significant_text","!rare_terms"]},{group:f.AggGroupNames.Buckets,name:"split",title:a.i18n.translate("visTypeTable.tableVisEditorConfig.schemas.splitTitle",{defaultMessage:"Split table"}),min:0,max:1,aggFilter:["!filter","!sampler","!diversified_sampler","!multi_terms","!significant_text","!rare_terms"]}]},toExpressionAst:(e,t)=>{var n;const s=Object(v.buildExpressionFunction)("esaggs",{index:Object(v.buildExpression)([Object(v.buildExpressionFunction)("indexPatternLoad",{id:e.data.indexPattern.id})]),metricsAtAllLevels:e.isHierarchical(),partialRows:e.params.showPartialRows,aggs:e.data.aggs.aggs.map((e=>Object(v.buildExpression)(e.toExpressionAst())))}),a=Object(o.getVisSchemas)(e,t),r=((e,t)=>{const n=[...e.metric];if(e.bucket&&t.showPartialRows&&!t.showMetricsAtAllLevels){const t=n.length/e.bucket.length;n.splice(0,t*e.bucket.length-t)}return n})(a,e.params),i={perPage:e.params.perPage,percentageCol:e.params.percentageCol,row:e.params.row,showPartialRows:e.params.showPartialRows,showMetricsAtAllLevels:e.params.showMetricsAtAllLevels,showToolbar:e.params.showToolbar,showTotal:e.params.showTotal,autoFitRowToContent:e.params.autoFitRowToContent,totalFunc:e.params.totalFunc,title:e.title,metrics:r.map(h),buckets:null===(n=a.bucket)||void 0===n?void 0:n.map(h)},l=Object(v.buildExpressionFunction)("kibana_table",i);return a.split_column&&l.addArgument("splitColumn",h(a.split_column[0])),a.split_row&&l.addArgument("splitRow",h(a.split_row[0])),Object(v.buildExpression)([s,l]).toAst()},hierarchicalData:e=>e.params.showPartialRows||e.params.showMetricsAtAllLevels,requiresSearch:!0};class plugin_TableVisPlugin{setup(e,t){(async(e,{expressions:t,visualizations:n})=>{const[s]=await e.getStartServices();t.registerFunction(l),t.registerRenderer((e=>({name:"table_vis",reuseDomNode:!0,render:async(t,{visData:n,visConfig:s},a)=>{var r;a.onDestroy((()=>{Object(u.unmountComponentAtNode)(t)}));const i=0===(null===(r=n.table)||void 0===r?void 0:r.rows.length)||!n.table&&0===n.tables.length;Object(u.render)(Object(d.jsx)(p.KibanaThemeProvider,{theme$:e.theme.theme$},Object(d.jsx)(o.VisualizationContainer,{"data-test-subj":"tbvChartContainer",handlers:a,showNoResult:i},Object(d.jsx)(b,{core:e,handlers:a,visData:n,visConfig:s}))),t)}}))(s)),n.createBaseVisualization(T)})(e,t)}start(e,{data:t}){Object(s.b)(t.fieldFormats)}}function _(){return new plugin_TableVisPlugin}},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.Classnames},function(e,t,n){n.r(t);var s=__kbnBundles__.get("plugin/share/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t,n){n.r(t);var s=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))}]);