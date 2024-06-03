/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[22],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var s=a(1),n=a.n(s),c=a(76),i=a(15),l=a(0),o=a(5),u=a(16),r=a(193),d=a(188),j=a(146),b=a(27),f=a(183),g=a(3);const m=({onConfirm:e,onCancel:t})=>Object(g.jsx)(i.EuiConfirmModal,{title:l.i18n.translate("xpack.triggersActionsUI.sections.confirmRuleSave.confirmRuleSaveTitle",{defaultMessage:"Save rule with no actions?"}),onCancel:t,onConfirm:e,confirmButtonText:l.i18n.translate("xpack.triggersActionsUI.sections.confirmRuleSave.confirmRuleSaveConfirmButtonText",{defaultMessage:"Save rule"}),cancelButtonText:l.i18n.translate("xpack.triggersActionsUI.sections.confirmRuleSave.confirmRuleSaveCancelButtonText",{defaultMessage:"Cancel"}),defaultFocusedButton:"confirm","data-test-subj":"confirmRuleSaveModal"},Object(g.jsx)("p",null,Object(g.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.confirmRuleSave.confirmRuleSaveWithoutActionsMessage",defaultMessage:"You can add an action at anytime."})));var O=a(189),p=a(112),y=a(136);const v=({isSaving:e,onSave:t,onCancel:a,isFormLoading:s})=>{const{loadingHealthCheck:o}=Object(y.b)();return Object(g.jsx)(i.EuiFlyoutFooter,null,Object(g.jsx)(i.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(g.jsx)(i.EuiFlexItem,{grow:!1},Object(g.jsx)(i.EuiButtonEmpty,{"data-test-subj":"cancelSaveRuleButton",onClick:a},l.i18n.translate("xpack.triggersActionsUI.sections.ruleAddFooter.cancelButtonLabel",{defaultMessage:"Cancel"}))),s?Object(g.jsx)(i.EuiFlexItem,{grow:!1},Object(g.jsx)(i.EuiSpacer,{size:"s"}),Object(g.jsx)(i.EuiLoadingSpinner,{size:"l"})):Object(g.jsx)(n.a.Fragment,null),Object(g.jsx)(i.EuiFlexItem,{grow:!1},Object(g.jsx)(i.EuiButton,{fill:!0,color:"success","data-test-subj":"saveRuleButton",type:"submit",iconType:"check",isDisabled:o,isLoading:e,onClick:t},Object(g.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.ruleAddFooter.saveButtonLabel",defaultMessage:"Save"})))))};var x=a(43),S=a(190),E=a(6),h=a(2),C=a(137),T=a(187);const I=({consumer:e,ruleTypeRegistry:t,actionTypeRegistry:a,onClose:n,canChangeTrigger:I,ruleTypeId:A,initialValues:F,reloadRules:k,onSave:R,metadata:w,filteredSolutions:M,...B})=>{var U;const L=null!=R?R:k,N=Object(s.useMemo)((()=>({params:{},consumer:e,ruleTypeId:A,schedule:{interval:h.c},actions:[],tags:[],notifyWhen:"onActionGroupChange",...F||{}})),[A,e,F]),[{rule:D},z]=Object(s.useReducer)(j.a,{rule:N}),[_,P]=Object(s.useState)({isUsingSecurity:!1}),[W,G]=Object(s.useState)({}),[H,V]=Object(s.useState)(!1),[Y,q]=Object(s.useState)(!1),[J,K]=Object(s.useState)(!1),[Q,X]=Object(s.useState)(B.ruleTypeIndex),[Z,$]=Object(s.useState)(!1),ee=(e,t)=>{z({command:{type:"setProperty"},payload:{key:e,value:t}})},{http:te,notifications:{toasts:ae},application:{capabilities:se}}=Object(x.b)().services,ne=Object(p.f)(se);Object(s.useEffect)((()=>{(async()=>{P(await Object(C.a)({http:te}))})()}),[te]),Object(s.useEffect)((()=>{A&&ee("ruleTypeId",A)}),[A]),Object(s.useEffect)((()=>{B.ruleTypeIndex||(async()=>{const e=await Object(b.n)({http:te}),t=new Map;for(const a of e)t.set(a.id,a);X(t)})()}),[B.ruleTypeIndex,te]),Object(s.useEffect)((()=>{Object(o.isEmpty)(D.params)&&!Object(o.isEmpty)(W)?G({}):Object(o.isEmpty)(W)&&G(D.params)}),[D.params,W]);const[ce,ie]=Object(s.useState)([]),[le,oe]=Object(s.useState)(!1);Object(s.useEffect)((()=>{(async()=>{oe(!0);const e=await Object(d.a)(D,a);oe(!1),ie([...e])})()}),[D,a]),Object(s.useEffect)((()=>{var e;!_.minimumScheduleInterval||null!=F&&null!==(e=F.schedule)&&void 0!==e&&e.interval||ee("schedule",{interval:Object(T.a)(_.minimumScheduleInterval.value)})}),[_.minimumScheduleInterval,F]),Object(s.useEffect)((()=>{if(D.ruleTypeId&&Q){const e=Q.get(D.ruleTypeId);null!=e&&e.defaultScheduleInterval&&!Z&&ee("schedule",{interval:e.defaultScheduleInterval})}}),[D.ruleTypeId,Q,D.schedule.interval,Z]),Object(s.useEffect)((()=>{D.schedule.interval===h.c||Z||$(!0)}),[D.schedule.interval,Z]);const ue=()=>{Object(S.a)(D,N,!1)||Object(S.b)(D.params,W)?K(!0):n(u.k.CANCELED)},re=async()=>{const e=await async function(){try{const e=await Object(b.b)({http:te,rule:D});return ae.addSuccess(l.i18n.translate("xpack.triggersActionsUI.sections.ruleAdd.saveSuccessNotificationText",{defaultMessage:'Created rule "{ruleName}"',values:{ruleName:e.name}})),e}catch(a){var e,t;ae.addDanger(null!==(e=null===(t=a.body)||void 0===t?void 0:t.message)&&void 0!==e?e:l.i18n.translate("xpack.triggersActionsUI.sections.ruleAdd.saveErrorNotificationText",{defaultMessage:"Cannot create rule."}))}}();V(!1),e&&(n(u.k.SAVED),L&&L())},de=D.ruleTypeId?t.get(D.ruleTypeId):null,{ruleBaseErrors:je,ruleErrors:be,ruleParamsErrors:fe}=Object(d.b)(D,de,_),ge=ne&&0===(null===(U=D.actions)||void 0===U?void 0:U.length);return Object(g.jsx)(i.EuiPortal,null,Object(g.jsx)(i.EuiFlyout,{onClose:ue,"aria-labelledby":"flyoutRuleAddTitle",size:"m",maxWidth:620,ownFocus:!0},Object(g.jsx)(i.EuiFlyoutHeader,{hasBorder:!0},Object(g.jsx)(i.EuiTitle,{size:"s","data-test-subj":"addRuleFlyoutTitle"},Object(g.jsx)("h3",{id:"flyoutTitle"},Object(g.jsx)(c.FormattedMessage,{defaultMessage:"Create rule",id:"xpack.triggersActionsUI.sections.ruleAdd.flyoutTitle"})))),Object(g.jsx)(y.a,null,Object(g.jsx)(f.a,{inFlyout:!0,waitForCheck:!0},Object(g.jsx)(i.EuiFlyoutBody,null,Object(g.jsx)(r.a,{rule:D,config:_,dispatch:z,errors:be,canChangeTrigger:I,operation:l.i18n.translate("xpack.triggersActionsUI.sections.ruleAdd.operationName",{defaultMessage:"create"}),actionTypeRegistry:a,ruleTypeRegistry:t,metadata:w,filteredSolutions:M})),Object(g.jsx)(v,{isSaving:H,isFormLoading:le,onSave:async()=>{if(V(!0),le||!Object(d.c)(D,be,ce))return e=Object(E.b)(D,fe,je,ce),z({command:{type:"setRule"},payload:{key:"rule",value:e}}),void V(!1);var e;ge?q(!0):await re()},onCancel:ue}))),Y&&Object(g.jsx)(m,{onConfirm:async()=>{q(!1),await re()},onCancel:()=>{V(!1),q(!1)}}),J&&Object(g.jsx)(O.a,{onConfirm:()=>{K(!1),n(u.k.CANCELED)},onCancel:()=>{K(!1)}})))}}}]);