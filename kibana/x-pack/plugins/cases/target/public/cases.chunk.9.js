/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.cases_bundle_jsonpfunction=window.cases_bundle_jsonpfunction||[]).push([[9],{101:function(e,t,n){e.exports=n(29)(3)},76:function(e,t,n){"use strict";n.r(t),n.d(t,"AllCasesSelectorModal",(function(){return d})),n.d(t,"default",(function(){return d}));var a=n(1),l=n.n(a),o=n(12),u=n(34),i=n.n(u),c=n(16),s=n(146);const r=i()(o.EuiModal).withConfig({displayName:"Modal",componentId:"sc-xfp7uz-0"})(["",""],(({theme:e})=>`\n    width: ${e.eui.euiBreakpoints.l};\n    max-width: ${e.eui.euiBreakpoints.l};\n  `)),d=l.a.memo((({hiddenStatuses:e,onRowClick:t,onClose:n})=>{const[u,i]=Object(a.useState)(!0),d=Object(a.useCallback)((()=>{n&&n(),i(!1)}),[n]),m=Object(a.useCallback)((e=>{d(),t&&t(e)}),[d,t]);return u?l.a.createElement(r,{onClose:d,"data-test-subj":"all-cases-modal"},l.a.createElement(o.EuiModalHeader,null,l.a.createElement(o.EuiModalHeaderTitle,null,c.U)),l.a.createElement(o.EuiModalBody,null,l.a.createElement(s.a,{hiddenStatuses:e,isSelectorView:!0,onRowClick:m})),l.a.createElement(o.EuiModalFooter,null,l.a.createElement(o.EuiButton,{color:"text",onClick:d},c.i))):null}));d.displayName="AllCasesSelectorModal"},90:function(e,t,n){"use strict";n.d(t,"c",(function(){return a.c})),n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return a.b}));var a=n(20)}}]);