!function(e){var t={};function i(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=14)}([function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/expressions/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/charts/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/visDefaultEditor/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/data/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,i){e.exports=i(16)(2)},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/visualizations/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/expressions/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,i){i.r(t);var r=__kbnBundles__.get("plugin/charts/common");Object.defineProperties(t,Object.getOwnPropertyDescriptors(r))},function(e,t,i){i(15),__kbnBundles__.define("plugin/visTypeMetric/public",i,17)},function(e,t,i){i.p=window.__kbnPublicPath__.visTypeMetric},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,i){"use strict";i.r(t),i.d(t,"plugin",(function(){return v}));var r=i(9),s=i.n(r),n=i(3),o=i(4),a=i(8),c=i(5),l=i.n(c),u=i(1),p=i(7),d=i(6),b=i(0);const g=[{id:o.ColorMode.None,label:n.i18n.translate("visTypeMetric.colorModes.noneOptionLabel",{defaultMessage:"None"})},{id:o.ColorMode.Labels,label:n.i18n.translate("visTypeMetric.colorModes.labelsOptionLabel",{defaultMessage:"Labels"})},{id:o.ColorMode.Background,label:n.i18n.translate("visTypeMetric.colorModes.backgroundOptionLabel",{defaultMessage:"Background"})}];function m({stateParams:e,setValue:t,setValidity:i,setTouched:r,uiState:s}){const a=Object(c.useCallback)(((i,r)=>t("metric",{...e.metric,[i]:r})),[t,e.metric]),m=Object(c.useCallback)(((t,i)=>a("labels",{...e.metric.labels,[t]:i})),[a,e.metric.labels]),f=Object(c.useCallback)(((t,i)=>a("style",{...e.metric.style,[t]:i})),[a,e.metric.style]),j=Object(c.useCallback)((e=>a("metricColorMode",e)),[a]),_=n.i18n.translate("visTypeMetric.params.color.useForLabel",{defaultMessage:"Use color for"});return Object(b.jsx)(l.a.Fragment,null,Object(b.jsx)(u.EuiPanel,{paddingSize:"s"},Object(b.jsx)(u.EuiTitle,{size:"xs"},Object(b.jsx)("h3",null,Object(b.jsx)(p.FormattedMessage,{id:"visTypeMetric.params.settingsTitle",defaultMessage:"Settings"}))),Object(b.jsx)(u.EuiSpacer,{size:"s"}),Object(b.jsx)(d.PercentageModeOption,{"data-test-subj":"metricPercentageMode",percentageMode:e.metric.percentageMode,formatPattern:e.metric.percentageFormatPattern,setValue:a}),Object(b.jsx)(d.SwitchOption,{label:n.i18n.translate("visTypeMetric.params.showTitleLabel",{defaultMessage:"Show title"}),paramName:"show",value:e.metric.labels.show,setValue:m})),Object(b.jsx)(u.EuiSpacer,{size:"s"}),Object(b.jsx)(u.EuiPanel,{paddingSize:"s"},Object(b.jsx)(u.EuiTitle,{size:"xs"},Object(b.jsx)("h3",null,Object(b.jsx)(p.FormattedMessage,{id:"visTypeMetric.params.rangesTitle",defaultMessage:"Ranges"}))),Object(b.jsx)(u.EuiSpacer,{size:"s"}),Object(b.jsx)(d.ColorRanges,{"data-test-subj":"metricColorRange",colorsRange:e.metric.colorsRange,setValue:a,setTouched:r,setValidity:i}),Object(b.jsx)(u.EuiFormRow,{fullWidth:!0,display:"rowCompressed",label:_},Object(b.jsx)(u.EuiButtonGroup,{buttonSize:"compressed",idSelected:e.metric.metricColorMode,isDisabled:1===e.metric.colorsRange.length,isFullWidth:!0,legend:_,options:g,onChange:j})),Object(b.jsx)(d.ColorSchemaOptions,{colorSchema:e.metric.colorSchema,colorSchemas:o.colorSchemas,disabled:1===e.metric.colorsRange.length||e.metric.metricColorMode===o.ColorMode.None,invertColors:e.metric.invertColors,setValue:a,showHelpText:!1,uiState:s})),Object(b.jsx)(u.EuiSpacer,{size:"s"}),Object(b.jsx)(u.EuiPanel,{paddingSize:"s"},Object(b.jsx)(u.EuiTitle,{size:"xs"},Object(b.jsx)("h3",null,Object(b.jsx)(p.FormattedMessage,{id:"visTypeMetric.params.style.styleTitle",defaultMessage:"Style"}))),Object(b.jsx)(u.EuiSpacer,{size:"s"}),Object(b.jsx)(d.RangeOption,{label:n.i18n.translate("visTypeMetric.params.style.fontSizeLabel",{defaultMessage:"Metric font size in points"}),min:12,max:120,paramName:"fontSize",value:e.metric.style.fontSize,setValue:f,showInput:!0,showLabels:!0,showValue:!1})))}var f=i(10),j=i(11),_=i(2),O=i(12),x=i(13);const h=e=>{const t=Object(_.buildExpressionFunction)("visdimension",{accessor:e.accessor});return e.format&&(t.addArgument("format",e.format.id),t.addArgument("formatParams",JSON.stringify(e.format.params))),Object(_.buildExpression)([t])},M=(e,t)=>{var i;const r=Object(_.buildExpressionFunction)("esaggs",{index:Object(_.buildExpression)([Object(_.buildExpressionFunction)("indexPatternLoad",{id:e.data.indexPattern.id})]),metricsAtAllLevels:e.isHierarchical(),partialRows:!1,aggs:e.data.aggs.aggs.map((e=>Object(_.buildExpression)(e.toExpressionAst())))}),s=Object(j.getVisSchemas)(e,t),{percentageMode:n,percentageFormatPattern:a,colorSchema:c,metricColorMode:l,colorsRange:u,labels:p,invertColors:d,style:b}=e.params.metric;!0===Object(f.get)(e.params,"metric.percentageMode")&&s.metric.forEach((e=>{e.format={id:"percent",params:{pattern:a}}}));const g=u&&u.length>1,m=Object(_.buildExpressionFunction)("metricVis",{percentageMode:n,colorMode:g?l:o.ColorMode.None,showLabels:null!==(i=null==p?void 0:p.show)&&void 0!==i&&i});if(m.addArgument("font",Object(_.buildExpression)(`font family="${O.inter.value}" \n        weight="bold"\n        align="center"\n        sizeUnit="pt"\n        ${b?`size=${b.fontSize}`:""}`)),m.addArgument("labelFont",Object(_.buildExpression)('font size="14" align="center"')),u&&u.length){const e=((e,t,i=!1)=>e.reduce(((e,r,s,n)=>((s&&r.from!==n[s-1].to||0===s)&&(e.color.push("rgb(0, 0, 0, 0)"),e.stop.push(r.from)),e.color.push(((e,t,i,r=!1)=>{const s=Math.max(t-1,1),n=r?1-e/s:e/s;return Object(x.getHeatmapColors)(n,i)})(s,n.length,t,i)),e.stop.push(r.to),e)),{color:[],stop:[]}))(u,c,d),t=Object(_.buildExpressionFunction)("palette",{...e,range:"number",continuity:"none"});m.addArgument("palette",Object(_.buildExpression)([t]))}return s.group&&m.addArgument("bucket",h(s.group[0])),s.metric.forEach((e=>{m.addArgument("metric",h(e))})),Object(_.buildExpression)([r,m]).toAst()};class plugin_MetricVisPlugin{constructor(e){s()(this,"initializerContext",void 0),this.initializerContext=e}setup(e,{visualizations:t}){t.createBaseVisualization({name:"metric",title:n.i18n.translate("visTypeMetric.metricTitle",{defaultMessage:"Metric"}),icon:"visMetric",description:n.i18n.translate("visTypeMetric.metricDescription",{defaultMessage:"Show a calculation as a single number."}),toExpressionAst:M,visConfig:{defaults:{addTooltip:!0,addLegend:!1,type:"metric",metric:{percentageMode:!1,useRanges:!1,colorSchema:o.ColorSchemas.GreenToRed,metricColorMode:o.ColorMode.None,colorsRange:[{from:0,to:1e4}],labels:{show:!0},invertColors:!1,style:{bgFill:"#000",bgColor:!1,labelColor:!1,subText:"",fontSize:60}}}},editorConfig:{enableDataViewChange:!0,optionsTemplate:m,schemas:[{group:a.AggGroupNames.Metrics,name:"metric",title:n.i18n.translate("visTypeMetric.schemas.metricTitle",{defaultMessage:"Metric"}),min:1,aggFilter:["!std_dev","!geo_centroid","!derivative","!serial_diff","!moving_avg","!cumulative_sum","!geo_bounds","!filtered_metric","!single_percentile"],aggSettings:{top_hits:{allowStrings:!0}},defaults:[{type:"count",schema:"metric"}]},{group:a.AggGroupNames.Buckets,name:"group",title:n.i18n.translate("visTypeMetric.schemas.splitGroupTitle",{defaultMessage:"Split group"}),min:0,max:1,aggFilter:["!geohash_grid","!geotile_grid","!filter","!sampler","!diversified_sampler","!rare_terms","!multi_terms","!significant_text"]}]},requiresSearch:!0})}start(e){}}function v(e){return new plugin_MetricVisPlugin(e)}}]);