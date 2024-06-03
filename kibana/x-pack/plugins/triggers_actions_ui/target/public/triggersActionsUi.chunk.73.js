/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[73],{310:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return E}));var a=i(1),s=i.n(a),n=i(15),l=i(43),o=i(120),r=i(121),c=i(118),u=i(156),d=i(21),b=i(3);const j=["severity"],f=[{label:c.SOURCE,fieldKey:"source"},{label:c.NODE,fieldKey:"node"},{label:c.TYPE,fieldKey:"type"},{label:c.RESOURCE,fieldKey:"resource"},{label:c.METRIC_NAME,fieldKey:"metric_name"},{label:c.EVENT_CLASS,fieldKey:"event_class"},{label:c.MESSAGE_KEY,fieldKey:"message_key"}],m=JSON.stringify({alert:{id:"{{alert.id}}",actionGroup:"{{alert.actionGroup}}",actionSubgroup:"{{alert.actionSubgroup}}",actionGroupName:"{{alert.actionGroupName}}"},rule:{id:"{{rule.id}}",name:"{{rule.name}}",type:"{{rule.type}}"},date:"{{date}}"}),E=({actionConnector:e,actionParams:t,editAction:i,index:E,messageVariables:O,errors:y})=>{var p;const v=Object(a.useMemo)((()=>{var e;return null!==(e=t.subActionParams)&&void 0!==e?e:{}}),[t.subActionParams]),{description:g,severity:A}=v,{http:S,notifications:{toasts:_}}=Object(l.b)().services,x=Object(a.useRef)(null!==(p=null==e?void 0:e.id)&&void 0!==p?p:""),{choices:h,isLoading:C}=(({http:e,actionConnector:t,toastNotifications:i,fields:s})=>{const n=Object(a.useMemo)((()=>s.reduce(((e,t)=>({...e,[t]:[]})),{})),[s]),[l,o]=Object(a.useState)(n),r=Object(a.useCallback)((e=>{o(e.reduce(((e,t)=>{var i;return{...e,[t.element]:[...null!==(i=e[t.element])&&void 0!==i?i:[],t]}}),n))}),[n]),{isLoading:c}=Object(u.a)({http:e,toastNotifications:i,actionConnector:t,fields:s,onSuccess:r});return{choices:l,isLoading:c}})({http:S,toastNotifications:_,actionConnector:e,fields:j}),N=Object(a.useMemo)((()=>Object(d.b)(h.severity)),[h.severity]),K=Object(a.useCallback)(((e,t)=>{i("subActionParams",{...v,[e]:t},E)}),[i,E,v]);return Object(a.useEffect)((()=>{null!=e&&x.current!==e.id&&(x.current=e.id,i("subActionParams",{additional_info:m,message_key:"{{rule.id}}:{{alert.id}}"},E))}),[e]),Object(a.useEffect)((()=>{t.subAction||i("subAction","addEvent",E),t.subActionParams||i("subActionParams",{additional_info:m,message_key:"{{rule.id}}:{{alert.id}}"},E)}),[t]),Object(b.jsx)(s.a.Fragment,null,Object(b.jsx)(n.EuiTitle,{size:"s"},Object(b.jsx)("h3",null,c.EVENT)),Object(b.jsx)(n.EuiSpacer,{size:"m"}),f.map((e=>{var t;return Object(b.jsx)(s.a.Fragment,{key:e.fieldKey},Object(b.jsx)(n.EuiFormRow,{fullWidth:!0,label:e.label},Object(b.jsx)(r.a,{index:E,editAction:K,messageVariables:O,paramsProperty:e.fieldKey,inputTargetValue:null!==(t=v[e.fieldKey])&&void 0!==t?t:void 0})),Object(b.jsx)(n.EuiSpacer,{size:"m"}))})),Object(b.jsx)(n.EuiFormRow,{fullWidth:!0,label:c.SEVERITY_REQUIRED_LABEL,error:y.severity,isInvalid:Object(d.e)(A,y.severity)},Object(b.jsx)(n.EuiSelect,{fullWidth:!0,hasNoInitialSelection:!0,"data-test-subj":"severitySelect",isLoading:C,disabled:C,options:N,value:null!=A?A:"",onChange:e=>K("severity",e.target.value),isInvalid:Object(d.e)(A,y.severity)})),Object(b.jsx)(o.a,{index:E,editAction:K,messageVariables:O,paramsProperty:"description",inputTargetValue:null!=g?g:void 0,label:c.DESCRIPTION_LABEL}))}}}]);