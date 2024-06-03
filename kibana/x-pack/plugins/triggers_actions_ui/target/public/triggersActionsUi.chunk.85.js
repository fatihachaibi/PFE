/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[85],{100:function(e,t,i){"use strict";i.r(t),i.d(t,"RuleConditions",(function(){return a})),i.d(t,"default",(function(){return a}));var n=i(1),o=i.n(n),s=i(76),l=i(15),u=i(5),c=i(20),r=i(3);const d=new Set(Object(c.getBuiltinActionGroups)().map((({id:e})=>e))),a=({headline:e,actionGroups:t,onInitializeConditionsFor:i,onResetConditionsFor:n,includeBuiltInActionGroups:c=!1,children:a})=>{const[j,x]=Object(u.partition)(c?t:t.filter((({id:e})=>!d.has(e))),(e=>e.hasOwnProperty("conditions")));return Object(r.jsx)(l.EuiFlexGroup,{direction:"column",gutterSize:"s"},Object(r.jsx)(l.EuiFlexItem,null,Object(r.jsx)(l.EuiTitle,{size:"s"},Object(r.jsx)(l.EuiFlexGroup,{component:"span",alignItems:"baseline"},Object(r.jsx)(l.EuiFlexItem,{grow:!1},Object(r.jsx)("h6",{className:"ruleConditions"},Object(r.jsx)(s.FormattedMessage,{id:"xpack.triggersActionsUI.sections.ruleForm.conditions.title",defaultMessage:"Conditions:"}))),e&&Object(r.jsx)(l.EuiFlexItem,null,Object(r.jsx)(l.EuiText,{color:"subdued",size:"s","data-test-subj":"ruleConditionsHeadline"},e))))),Object(r.jsx)(l.EuiFlexItem,null,Object(r.jsx)(l.EuiFlexGroup,{direction:"column"},j.map((e=>Object(r.jsx)(l.EuiFlexItem,{key:`condition-${e.id}`},o.a.isValidElement(a)&&o.a.cloneElement(o.a.Children.only(a),n?{actionGroup:e,onResetConditionsFor:n}:{actionGroup:e})))),i&&x.length>0&&Object(r.jsx)(l.EuiFlexItem,null,Object(r.jsx)(l.EuiFlexGroup,{direction:"row",alignItems:"baseline"},Object(r.jsx)(l.EuiFlexItem,{grow:!1},Object(r.jsx)(s.FormattedMessage,{id:"xpack.triggersActionsUI.sections.ruleForm.conditions.addConditionLabel",defaultMessage:"Add:"})),x.map((e=>Object(r.jsx)(l.EuiFlexItem,{key:`condition-add-${e.id}`,grow:!1},Object(r.jsx)(l.EuiButtonEmpty,{flush:"left",size:"s",onClick:()=>i(e)},e.name)))))))))}}}]);