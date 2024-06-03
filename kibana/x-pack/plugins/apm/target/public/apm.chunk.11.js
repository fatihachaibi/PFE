/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.apm_bundle_jsonpfunction=window.apm_bundle_jsonpfunction||[]).push([[11],{1053:function(e,t,n){"use strict";n.r(t),n.d(t,"ErrorCountAlertTrigger",(function(){return w}));var a=n(0),r=n(6),i=n(1),o=n.n(i),s=n(19),c=n(42),l=n(11),u=n(10),m=n(52),d=n(66),p=n(122),v=n(97),f=n(123),h=n(98);function w(e){const{services:t}=Object(s.useKibana)(),{ruleParams:n,metadata:w,setRuleParams:g,setRuleProperty:S}=e;Object(i.useEffect)((()=>{Object(d.createCallApmApi)(t)}),[t]);const E=Object(r.defaults)({...Object(r.omit)(w,["start","end"]),...n},{threshold:25,windowSize:1,windowUnit:"m",environment:l.a.value}),{data:x}=Object(m.b)((e=>{const{interval:t,start:n,end:a}=Object(f.a)({windowSize:E.windowSize,windowUnit:E.windowUnit});if(t&&n&&a)return e("GET /internal/apm/alerts/chart_preview/transaction_error_count",{params:{query:{environment:E.environment,serviceName:E.serviceName,interval:t,start:n,end:a}}})}),[E.windowSize,E.windowUnit,E.environment,E.serviceName]),O=[o.a.createElement(v.c,{currentValue:E.serviceName,onChange:e=>g("serviceName",e)}),o.a.createElement(v.a,{currentValue:E.environment,onChange:e=>g("environment",e)}),o.a.createElement(v.b,{value:E.threshold,unit:a.i18n.translate("xpack.apm.errorCountAlertTrigger.errors",{defaultMessage:" errors"}),onChange:e=>g("threshold",e||0)}),o.a.createElement(c.ForLastExpression,{onChangeWindowSize:e=>g("windowSize",e||""),onChangeWindowUnit:e=>g("windowUnit",e),timeWindowSize:E.windowSize,timeWindowUnit:E.windowUnit,errors:{timeWindowSize:[],timeWindowUnit:[]}})],b=o.a.createElement(p.a,{data:null==x?void 0:x.errorCountChartPreview,threshold:E.threshold,yTickFormat:u.f,uiSettings:t.uiSettings});return o.a.createElement(h.a,{defaults:E,fields:O,setRuleParams:g,setRuleProperty:S,chartPreview:b})}t.default=w},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(34),r=n(13),i=n(1),o=n.n(i),s=n(57),c=n(109);function l({data:e=[],yTickFormat:t,threshold:n,uiSettings:i}){const l=Object(s.a)(),u=e.map((e=>e.x)),m=Math.min(...u),d=Math.max(...u),p=Object(a.niceTimeFormatter)([m,d]),v=e.map((e=>{var t;return null!==(t=e.y)&&void 0!==t?t:0})),f=Math.max(...v,1.2*n),h={fill:l.eui.euiColorVis2,line:{strokeWidth:2,stroke:l.eui.euiColorVis2,opacity:1},opacity:.3},w=[{coordinates:{x0:null,x1:null,y0:n,y1:null}}],g=Object(c.a)(i);return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.EuiSpacer,{size:"m"}),o.a.createElement(a.Chart,{size:{height:150},"data-test-subj":"ChartPreview"},o.a.createElement(a.Settings,{tooltip:"none"}),o.a.createElement(a.LineAnnotation,{dataValues:[{dataValue:n}],domainType:a.AnnotationDomainType.YDomain,id:"chart_preview_line_annotation",markerPosition:"left",style:h}),o.a.createElement(a.RectAnnotation,{dataValues:w,hideTooltips:!0,id:"chart_preview_rect_annotation",style:h}),o.a.createElement(a.Axis,{id:"chart_preview_x_axis",position:a.Position.Bottom,showOverlappingTicks:!0,tickFormat:p}),o.a.createElement(a.Axis,{id:"chart_preview_y_axis",position:a.Position.Left,tickFormat:t,ticks:5,domain:{max:f,min:NaN}}),o.a.createElement(a.BarSeries,{timeZone:g,color:l.eui.euiColorVis1,data:e,id:"chart_preview_bar_series",xAccessor:"x",xScaleType:a.ScaleType.Time,yAccessors:["y"],yScaleType:a.ScaleType.Linear})))}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(7),r=n.n(a);function i({windowSize:e,windowUnit:t}){const n=Date.now(),a=n-20*r.a.duration(e,t).asMilliseconds();return{interval:`${e}${t}`,start:new Date(a).toISOString(),end:new Date(n).toISOString()}}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),r=n.n(a),i=n(13);function o(e){const{title:t,value:n,children:o}=e,[s,c]=Object(a.useState)(!1);return r.a.createElement(i.EuiPopover,{isOpen:s,anchorPosition:"downLeft",closePopover:()=>c(!1),button:r.a.createElement(i.EuiExpression,{description:t,value:n,isActive:s,onClick:()=>c(!0)}),repositionOnScroll:!0},o)}},97:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return v})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return h}));var a=n(7),r=n.n(a),i=n(13),o=n(0),s=n(1),c=n.n(s),l=n(18),u=n(11),m=n(96),d=n(85);function p({allowAll:e=!0,currentValue:t,onChange:n}){return c.a.createElement(d.a,{value:t||u.c,title:o.i18n.translate("xpack.apm.alerting.fields.service",{defaultMessage:"Service"})},c.a.createElement(m.a,{customOptions:e?[u.a]:void 0,customOptionText:o.i18n.translate("xpack.apm.serviceNamesSelectCustomOptionText",{defaultMessage:"Add \\{searchValue\\} as a new service name"}),defaultValue:t,fieldName:l.u,onChange:n,placeholder:o.i18n.translate("xpack.apm.serviceNamesSelectPlaceholder",{defaultMessage:"Select service name"}),start:r()().subtract(24,"h").toISOString(),end:r()().toISOString()}))}function v({currentValue:e,onChange:t}){return c.a.createElement(d.a,{value:Object(u.d)(e),title:o.i18n.translate("xpack.apm.alerting.fields.environment",{defaultMessage:"Environment"})},c.a.createElement(m.a,{customOptions:[u.a],customOptionText:o.i18n.translate("xpack.apm.environmentsSelectCustomOptionText",{defaultMessage:"Add \\{searchValue\\} as a new environment"}),defaultValue:Object(u.d)(e),fieldName:l.t,onChange:t,placeholder:o.i18n.translate("xpack.apm.environmentsSelectPlaceholder",{defaultMessage:"Select environment"}),start:r()().subtract(24,"h").toISOString(),end:r()().toISOString()}))}function f({currentValue:e,onChange:t}){const n=o.i18n.translate("xpack.apm.alerting.fields.type",{defaultMessage:"Type"});return c.a.createElement(d.a,{value:e||u.c,title:n},c.a.createElement(m.a,{customOptions:[u.a],customOptionText:o.i18n.translate("xpack.apm.transactionTypesSelectCustomOptionText",{defaultMessage:"Add \\{searchValue\\} as a new transaction type"}),defaultValue:e,fieldName:l.I,onChange:t,placeholder:o.i18n.translate("xpack.apm.transactionTypesSelectPlaceholder",{defaultMessage:"Select transaction type"}),start:r()().subtract(24,"h").toISOString(),end:r()().toISOString()}))}function h({value:e,unit:t,onChange:n,step:a}){return c.a.createElement(d.a,{value:e?`${e.toString()}${t}`:"",title:o.i18n.translate("xpack.apm.transactionErrorRateAlertTrigger.isAbove",{defaultMessage:"is above"})},c.a.createElement(i.EuiFieldNumber,{value:null!=e?e:"",onChange:e=>n(parseInt(e.target.value,10)),append:t,compressed:!0,step:a}))}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(13),r=n(1),i=n.n(r);function o(e){const{fields:t,setRuleParams:n,defaults:o,chartPreview:s}=e,c={...o};return Object(r.useEffect)((()=>{Object.keys(c).forEach((e=>{n(e,c[e])}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(a.EuiSpacer,{size:"l"}),i.a.createElement(a.EuiFlexGrid,{gutterSize:"l",direction:"row",columns:2},t.map(((e,t)=>i.a.createElement(a.EuiFlexItem,{grow:!1,key:t},e)))),s,i.a.createElement(a.EuiSpacer,{size:"m"}))}}}]);