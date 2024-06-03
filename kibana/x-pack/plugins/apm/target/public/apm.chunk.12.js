/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.apm_bundle_jsonpfunction=window.apm_bundle_jsonpfunction||[]).push([[12],{1055:function(e,t,a){"use strict";a.r(t),a.d(t,"TransactionErrorRateAlertTrigger",(function(){return f}));var n=a(6),i=a(1),r=a.n(i),o=a(19),c=a(42),s=a(11),l=a(10),u=a(52),d=a(66),m=a(122),p=a(97),v=a(123),h=a(98);function f(e){var t;const{services:a}=Object(o.useKibana)(),{ruleParams:f,metadata:w,setRuleParams:S,setRuleProperty:g}=e;Object(i.useEffect)((()=>{Object(d.createCallApmApi)(a)}),[a]);const E=Object(n.defaults)({...Object(n.omit)(w,["start","end"]),...f},{threshold:30,windowSize:5,windowUnit:"m",environment:s.a.value}),O=(null!==(t=E.threshold)&&void 0!==t?t:0)/100,{data:y}=Object(u.b)((e=>{const{interval:t,start:a,end:n}=Object(v.a)({windowSize:E.windowSize,windowUnit:E.windowUnit});if(t&&a&&n)return e("GET /internal/apm/alerts/chart_preview/transaction_error_rate",{params:{query:{environment:E.environment,serviceName:E.serviceName,transactionType:E.transactionType,interval:t,start:a,end:n}}})}),[E.transactionType,E.environment,E.serviceName,E.windowSize,E.windowUnit]),x=[r.a.createElement(p.c,{currentValue:E.serviceName,onChange:e=>S("serviceName",e)}),r.a.createElement(p.d,{currentValue:E.transactionType,onChange:e=>S("transactionType",e)}),r.a.createElement(p.a,{currentValue:E.environment,onChange:e=>S("environment",e)}),r.a.createElement(p.b,{value:E.threshold,unit:"%",onChange:e=>S("threshold",e||0)}),r.a.createElement(c.ForLastExpression,{onChangeWindowSize:e=>S("windowSize",e||""),onChangeWindowUnit:e=>S("windowUnit",e),timeWindowSize:E.windowSize,timeWindowUnit:E.windowUnit,errors:{timeWindowSize:[],timeWindowUnit:[]}})],b=r.a.createElement(m.a,{data:null==y?void 0:y.errorRateChartPreview,yTickFormat:e=>Object(l.h)(e,1),threshold:O,uiSettings:a.uiSettings});return r.a.createElement(h.a,{fields:x,defaults:E,setRuleParams:S,setRuleProperty:g,chartPreview:b})}t.default=f},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(34),i=a(13),r=a(1),o=a.n(r),c=a(57),s=a(109);function l({data:e=[],yTickFormat:t,threshold:a,uiSettings:r}){const l=Object(c.a)(),u=e.map((e=>e.x)),d=Math.min(...u),m=Math.max(...u),p=Object(n.niceTimeFormatter)([d,m]),v=e.map((e=>{var t;return null!==(t=e.y)&&void 0!==t?t:0})),h=Math.max(...v,1.2*a),f={fill:l.eui.euiColorVis2,line:{strokeWidth:2,stroke:l.eui.euiColorVis2,opacity:1},opacity:.3},w=[{coordinates:{x0:null,x1:null,y0:a,y1:null}}],S=Object(s.a)(r);return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.EuiSpacer,{size:"m"}),o.a.createElement(n.Chart,{size:{height:150},"data-test-subj":"ChartPreview"},o.a.createElement(n.Settings,{tooltip:"none"}),o.a.createElement(n.LineAnnotation,{dataValues:[{dataValue:a}],domainType:n.AnnotationDomainType.YDomain,id:"chart_preview_line_annotation",markerPosition:"left",style:f}),o.a.createElement(n.RectAnnotation,{dataValues:w,hideTooltips:!0,id:"chart_preview_rect_annotation",style:f}),o.a.createElement(n.Axis,{id:"chart_preview_x_axis",position:n.Position.Bottom,showOverlappingTicks:!0,tickFormat:p}),o.a.createElement(n.Axis,{id:"chart_preview_y_axis",position:n.Position.Left,tickFormat:t,ticks:5,domain:{max:h,min:NaN}}),o.a.createElement(n.BarSeries,{timeZone:S,color:l.eui.euiColorVis1,data:e,id:"chart_preview_bar_series",xAccessor:"x",xScaleType:n.ScaleType.Time,yAccessors:["y"],yScaleType:n.ScaleType.Linear})))}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(7),i=a.n(n);function r({windowSize:e,windowUnit:t}){const a=Date.now(),n=a-20*i.a.duration(e,t).asMilliseconds();return{interval:`${e}${t}`,start:new Date(n).toISOString(),end:new Date(a).toISOString()}}},85:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1),i=a.n(n),r=a(13);function o(e){const{title:t,value:a,children:o}=e,[c,s]=Object(n.useState)(!1);return i.a.createElement(r.EuiPopover,{isOpen:c,anchorPosition:"downLeft",closePopover:()=>s(!1),button:i.a.createElement(r.EuiExpression,{description:t,value:a,isActive:c,onClick:()=>s(!0)}),repositionOnScroll:!0},o)}},97:function(e,t,a){"use strict";a.d(t,"c",(function(){return p})),a.d(t,"a",(function(){return v})),a.d(t,"d",(function(){return h})),a.d(t,"b",(function(){return f}));var n=a(7),i=a.n(n),r=a(13),o=a(0),c=a(1),s=a.n(c),l=a(18),u=a(11),d=a(96),m=a(85);function p({allowAll:e=!0,currentValue:t,onChange:a}){return s.a.createElement(m.a,{value:t||u.c,title:o.i18n.translate("xpack.apm.alerting.fields.service",{defaultMessage:"Service"})},s.a.createElement(d.a,{customOptions:e?[u.a]:void 0,customOptionText:o.i18n.translate("xpack.apm.serviceNamesSelectCustomOptionText",{defaultMessage:"Add \\{searchValue\\} as a new service name"}),defaultValue:t,fieldName:l.u,onChange:a,placeholder:o.i18n.translate("xpack.apm.serviceNamesSelectPlaceholder",{defaultMessage:"Select service name"}),start:i()().subtract(24,"h").toISOString(),end:i()().toISOString()}))}function v({currentValue:e,onChange:t}){return s.a.createElement(m.a,{value:Object(u.d)(e),title:o.i18n.translate("xpack.apm.alerting.fields.environment",{defaultMessage:"Environment"})},s.a.createElement(d.a,{customOptions:[u.a],customOptionText:o.i18n.translate("xpack.apm.environmentsSelectCustomOptionText",{defaultMessage:"Add \\{searchValue\\} as a new environment"}),defaultValue:Object(u.d)(e),fieldName:l.t,onChange:t,placeholder:o.i18n.translate("xpack.apm.environmentsSelectPlaceholder",{defaultMessage:"Select environment"}),start:i()().subtract(24,"h").toISOString(),end:i()().toISOString()}))}function h({currentValue:e,onChange:t}){const a=o.i18n.translate("xpack.apm.alerting.fields.type",{defaultMessage:"Type"});return s.a.createElement(m.a,{value:e||u.c,title:a},s.a.createElement(d.a,{customOptions:[u.a],customOptionText:o.i18n.translate("xpack.apm.transactionTypesSelectCustomOptionText",{defaultMessage:"Add \\{searchValue\\} as a new transaction type"}),defaultValue:e,fieldName:l.I,onChange:t,placeholder:o.i18n.translate("xpack.apm.transactionTypesSelectPlaceholder",{defaultMessage:"Select transaction type"}),start:i()().subtract(24,"h").toISOString(),end:i()().toISOString()}))}function f({value:e,unit:t,onChange:a,step:n}){return s.a.createElement(m.a,{value:e?`${e.toString()}${t}`:"",title:o.i18n.translate("xpack.apm.transactionErrorRateAlertTrigger.isAbove",{defaultMessage:"is above"})},s.a.createElement(r.EuiFieldNumber,{value:null!=e?e:"",onChange:e=>a(parseInt(e.target.value,10)),append:t,compressed:!0,step:n}))}},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(13),i=a(1),r=a.n(i);function o(e){const{fields:t,setRuleParams:a,defaults:o,chartPreview:c}=e,s={...o};return Object(i.useEffect)((()=>{Object.keys(s).forEach((e=>{a(e,s[e])}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(n.EuiSpacer,{size:"l"}),r.a.createElement(n.EuiFlexGrid,{gutterSize:"l",direction:"row",columns:2},t.map(((e,t)=>r.a.createElement(n.EuiFlexItem,{grow:!1,key:t},e)))),c,r.a.createElement(n.EuiSpacer,{size:"m"}))}}}]);