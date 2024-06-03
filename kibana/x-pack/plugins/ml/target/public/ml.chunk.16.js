/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[]).push([[16],{694:function(e,t,s){switch(window.__kbnThemeTag__){case"v8dark":return s(695);case"v8light":return s(697)}},695:function(e,t,s){var o=s(80),l=s(696);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);o(l,{insert:"head",singleton:!1}),e.exports=l.locals||{}},696:function(e,t,s){(t=s(81)(!1)).push([e.i,".mlLensToJobFlyoutBody{background-color:#25262E}\n",""]),e.exports=t},697:function(e,t,s){var o=s(80),l=s(698);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);o(l,{insert:"head",singleton:!1}),e.exports=l.locals||{}},698:function(e,t,s){(t=s(81)(!1)).push([e.i,".mlLensToJobFlyoutBody{background-color:#F5F7FA}\n",""]),e.exports=t},708:function(e,t,s){"use strict";s.r(t),s.d(t,"showLensVisToADJobFlyout",(function(){return p}));var o=s(17),l=s.n(o),c=s(25),n=s(23),a=s(45),i=s(58),u=s(213),r=s(44),b=s(43),j=(s(694),s(274)),d=s(85),x=s(27),m=s(13);const O=({onClose:e,layerResults:t,embeddable:s,share:o})=>{function c(e){Object(j.convertLensToADJob)(s,o,e)}return Object(m.jsx)(l.a.Fragment,null,t.map(((e,t)=>Object(m.jsx)(l.a.Fragment,null,Object(m.jsx)(b.EuiSplitPanel.Outer,{grow:!0},Object(m.jsx)(b.EuiSplitPanel.Inner,null,Object(m.jsx)(b.EuiFlexGroup,{gutterSize:"s",alignItems:"center",responsive:!1},e.icon&&Object(m.jsx)(b.EuiFlexItem,{grow:!1},Object(m.jsx)(b.EuiIcon,{type:e.icon})),Object(m.jsx)(b.EuiFlexItem,{grow:!0},Object(m.jsx)(b.EuiText,{color:e.isCompatible?"":"subdued"},Object(m.jsx)("h5",null,e.label))))),Object(m.jsx)(b.EuiHorizontalRule,{margin:"none"}),Object(m.jsx)(b.EuiSplitPanel.Inner,{grow:!1,color:"subdued"},e.isCompatible?Object(m.jsx)(l.a.Fragment,null,Object(m.jsx)(b.EuiFlexGroup,{gutterSize:"s"},Object(m.jsx)(b.EuiFlexItem,{grow:!1},Object(m.jsx)(b.EuiText,{size:"s"},Object(m.jsx)(b.EuiIcon,{type:"checkInCircleFilled",color:"success"}))),Object(m.jsx)(b.EuiFlexItem,null,Object(m.jsx)(b.EuiText,{size:"s"},Object(m.jsx)(r.FormattedMessage,{id:"xpack.ml.embeddables.lensLayerFlyout.createJobCalloutTitle",defaultMessage:"This layer can be used to create a {type} job",values:{type:e.jobWizardType===d.a.MULTI_METRIC?"multi-metric":"single metric"}})))),Object(m.jsx)(b.EuiSpacer,{size:"m"}),Object(m.jsx)(b.EuiButton,{onClick:c.bind(null,t),size:"s",color:"success",iconType:"popout",iconSide:"right"},Object(m.jsx)(r.FormattedMessage,{id:"xpack.ml.embeddables.lensLayerFlyout.createJobButton",defaultMessage:"Create job from this layer"}))):Object(m.jsx)(l.a.Fragment,null,Object(m.jsx)(b.EuiFlexGroup,{gutterSize:"s",color:"subdued"},Object(m.jsx)(b.EuiFlexItem,{grow:!1},Object(m.jsx)(b.EuiText,{size:"s"},Object(m.jsx)(b.EuiIcon,{type:"crossInACircleFilled",color:"subdued"}))),Object(m.jsx)(b.EuiFlexItem,null,Object(m.jsx)(b.EuiText,{color:"subdued",size:"s"},e.error?Object(x.b)(e.error):Object(m.jsx)(r.FormattedMessage,{id:"xpack.ml.embeddables.lensLayerFlyout.defaultLayerError",defaultMessage:"This layer cannot be used to create an anomaly detection job"}))))))),Object(m.jsx)(b.EuiSpacer,null)))))},y=({onClose:e,layerResults:t,embeddable:s,share:o})=>Object(m.jsx)(l.a.Fragment,null,Object(m.jsx)(b.EuiFlyoutHeader,{hasBorder:!0},Object(m.jsx)(b.EuiTitle,{size:"s"},Object(m.jsx)("h3",null,Object(m.jsx)(r.FormattedMessage,{id:"xpack.ml.embeddables.lensLayerFlyout.title",defaultMessage:"Create anomaly detection job"}))),Object(m.jsx)(b.EuiSpacer,{size:"m"}),Object(m.jsx)(b.EuiText,{size:"s"},Object(m.jsx)(r.FormattedMessage,{id:"xpack.ml.embeddables.lensLayerFlyout.secondTitle",defaultMessage:"Select a compatible layer from the visualization to create an anomaly detection job."}))),Object(m.jsx)(b.EuiFlyoutBody,{className:"mlLensToJobFlyoutBody"},Object(m.jsx)(O,{onClose:e,layerResults:t,embeddable:s,share:o})),Object(m.jsx)(b.EuiFlyoutFooter,null,Object(m.jsx)(b.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(m.jsx)(b.EuiFlexItem,{grow:!1},Object(m.jsx)(b.EuiButtonEmpty,{iconType:"cross",onClick:e,flush:"left"},Object(m.jsx)(r.FormattedMessage,{id:"xpack.ml.embeddables.lensLayerFlyout.closeButton",defaultMessage:"Close"}))))));async function p(e,t,s,o,l){const{http:r,theme:{theme$:b},overlays:d,application:{currentAppId$:x}}=t;return new Promise((async(O,p)=>{try{const p=await Object(j.getResultLayersFromEmbeddable)(e,o.dataViews,l);if(1===p.length&&p[0].isCompatible)return Object(j.convertLensToADJob)(e,s,0),O();const F=()=>{g.close(),O()},g=d.openFlyout(Object(a.toMountPoint)(Object(a.wrapWithTheme)(Object(m.jsx)(a.KibanaContextProvider,{services:{...t,mlServices:Object(u.getMlGlobalServices)(r)}},Object(m.jsx)(y,{embeddable:e,onClose:()=>{F(),O()},layerResults:p,share:s})),b)),{"data-test-subj":"mlFlyoutJobSelector",ownFocus:!0,closeButtonAriaLabel:"jobSelectorFlyout",onClose:F,size:"35vw"});x.pipe(Object(c.takeUntil)(Object(n.from)(g.onClose))).subscribe((e=>{e!==i.DashboardConstants.DASHBOARDS_ID&&g.close()}))}catch(e){p(e)}}))}}}]);