/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[68],{123:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o(1);var s=o(0),l=o(15),n=o(3);const r=({children:e,onClose:t})=>Object(n.jsx)(l.EuiPopoverTitle,null,Object(n.jsx)(l.EuiFlexGroup,{alignItems:"center",gutterSize:"s"},Object(n.jsx)(l.EuiFlexItem,null,e),Object(n.jsx)(l.EuiFlexItem,{grow:!1},Object(n.jsx)(l.EuiButtonIcon,{iconType:"cross",color:"danger","aria-label":s.i18n.translate("xpack.triggersActionsUI.common.expressionItems.components.closablePopoverTitle.closeLabel",{defaultMessage:"Close"}),onClick:()=>t()}))))},302:function(e,t,o){"use strict";o.r(t),o.d(t,"ThresholdExpression",(function(){return c})),o.d(t,"default",(function(){return c}));var s=o(1),l=o.n(s),n=o(0),r=o(15),i=o(10),a=o(123),u=o(3);const c=({thresholdComparator:e,errors:t,onChangeSelectedThresholdComparator:o,onChangeSelectedThreshold:c,customComparators:d,display:h="inline",threshold:j=[],popupPosition:p})=>{const x=null!=d?d:i.builtInComparators,[b,g]=Object(s.useState)(!1),[m,v]=Object(s.useState)(e),[O,E]=Object(s.useState)(x[e].requiredValues),I=n.i18n.translate("xpack.triggersActionsUI.common.expressionItems.threshold.andLabel",{defaultMessage:"AND"});return Object(s.useEffect)((()=>{if(x[m].requiredValues!==O){const e=j.slice(0,x[m].requiredValues);c(e),E(x[m].requiredValues)}}),[m]),Object(u.jsx)(r.EuiPopover,{button:Object(u.jsx)(r.EuiExpression,{"data-test-subj":"thresholdPopover",description:x[m].text,value:(j||[]).slice(0,O).join(` ${I} `),isActive:Boolean(b||t.threshold0&&t.threshold0.length||t.threshold1&&t.threshold1.length),onClick:()=>{g(!0)},display:"inline"===h?"inline":"columns",isInvalid:!!(t.threshold0&&t.threshold0.length||(t.threshold1&&t.threshold1.length)>0)}),isOpen:b,closePopover:()=>{g(!1)},ownFocus:!0,display:"fullWidth"===h?"block":"inlineBlock",anchorPosition:null!=p?p:"downLeft",repositionOnScroll:!0},Object(u.jsx)("div",null,Object(u.jsx)(a.a,{onClose:()=>g(!1)},Object(u.jsx)(l.a.Fragment,null,x[m].text)),Object(u.jsx)(r.EuiFlexGroup,null,Object(u.jsx)(r.EuiFlexItem,{grow:!1},Object(u.jsx)(r.EuiSelect,{"data-test-subj":"comparatorOptionsComboBox",value:m,onChange:e=>{v(e.target.value),o(e.target.value)},options:Object.values(x).map((({text:e,value:t})=>({text:e,value:t})))})),Array.from(Array(O)).map(((e,o)=>{var l,n;return Object(u.jsx)(s.Fragment,{key:`threshold${o}`},o>0?Object(u.jsx)(r.EuiFlexItem,{grow:!1,className:"watcherThresholdWatchInBetweenComparatorText"},Object(u.jsx)(r.EuiText,null,I)):null,Object(u.jsx)(r.EuiFlexItem,{grow:!1},Object(u.jsx)(r.EuiFormRow,{isInvalid:(null===(l=t[`threshold${o}`])||void 0===l?void 0:l.length)>0||!j[o],error:t[`threshold${o}`]},Object(u.jsx)(r.EuiFieldNumber,{"data-test-subj":"alertThresholdInput",min:0,value:j&&void 0!==j[o]?j[o]:"",isInvalid:(null===(n=t[`threshold${o}`])||void 0===n?void 0:n.length)>0||!j[o],onChange:e=>{const{value:t}=e.target,s=""!==t?parseFloat(t):void 0,l=[...j];void 0!==s?l[o]=s:delete l[o],c(l)}}))))})))))}}}]);