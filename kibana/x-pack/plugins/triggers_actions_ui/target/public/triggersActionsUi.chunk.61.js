/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[61],{117:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var i=s(15),a=s(0),n=s(1),o=s.n(n),r=s(76),l=s(3);const c=(e,t,s,n)=>s?Object(l.jsx)(o.a.Fragment,null,Object(l.jsx)(i.EuiSpacer,{size:"m"}),Object(l.jsx)(i.EuiCallOut,{size:"s",color:"warning",iconType:"alert","data-test-subj":"missingSecretsMessage",title:a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.missingSecretsValuesLabel",{defaultMessage:"Sensitive information is not imported. Please enter value{encryptedFieldsLength, plural, one {} other {s}} for the following field{encryptedFieldsLength, plural, one {} other {s}}.",values:{encryptedFieldsLength:t}})}),Object(l.jsx)(i.EuiSpacer,{size:"m"})):e?Object(l.jsx)(o.a.Fragment,null,Object(l.jsx)(i.EuiSpacer,{size:"s"}),Object(l.jsx)(i.EuiText,{size:"s","data-test-subj":"rememberValuesMessage"},Object(l.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.rememberValueLabel",defaultMessage:"Remember {encryptedFieldsLength, plural, one {this} other {these}} value. You must reenter {encryptedFieldsLength, plural, one {it} other {them}} each time you edit the connector.",values:{encryptedFieldsLength:t}})),Object(l.jsx)(i.EuiSpacer,{size:"s"})):Object(l.jsx)(o.a.Fragment,null,Object(l.jsx)(i.EuiSpacer,{size:"s"}),Object(l.jsx)(i.EuiCallOut,{size:"s",iconType:"iInCircle","data-test-subj":"reenterValuesMessage",title:n}),Object(l.jsx)(i.EuiSpacer,{size:"m"}))},277:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return d}));var i=s(1),a=s.n(i),n=s(76),o=s(15),r=s(0),l=s(117),c=s(3);const u=["post","put"],d=({action:e,editActionConfig:t,editActionSecrets:s,errors:d,readOnly:b})=>{var j;const{user:x,password:p}=e.secrets,{method:g,url:h,headers:O,hasAuth:m}=e.config,[w,A]=Object(i.useState)(""),[k,E]=Object(i.useState)(""),[y,v]=Object(i.useState)(!1);Object(i.useEffect)((()=>{e.id||t("hasAuth",!0)}),[]),g||t("method","post");const f={keyHeader:new Array,valueHeader:new Array};!w&&k&&f.keyHeader.push(r.i18n.translate("xpack.triggersActionsUI.sections.addAction.webhookAction.error.requiredHeaderKeyText",{defaultMessage:"Key is required."})),w&&!k&&f.valueHeader.push(r.i18n.translate("xpack.triggersActionsUI.sections.addAction.webhookAction.error.requiredHeaderValueText",{defaultMessage:"Value is required."}));const F=void 0!==f.keyHeader&&void 0!==f.valueHeader&&f.keyHeader.length>0||f.valueHeader.length>0;let I;y&&(I=Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)(o.EuiTitle,{size:"xxs"},Object(c.jsx)("h5",null,Object(c.jsx)(n.FormattedMessage,{defaultMessage:"Add header",id:"xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.addHeader"}))),Object(c.jsx)(o.EuiSpacer,{size:"m"}),Object(c.jsx)(o.EuiFlexGroup,{gutterSize:"s",alignItems:"flexStart"},Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiFormRow,{id:"webhookHeaderKey",fullWidth:!0,error:f.keyHeader,isInvalid:F&&void 0!==w,label:r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.keyTextFieldLabel",{defaultMessage:"Key"})},Object(c.jsx)(o.EuiFieldText,{fullWidth:!0,isInvalid:F&&void 0!==w,name:"keyHeader",readOnly:b,value:w,"data-test-subj":"webhookHeadersKeyInput",onChange:e=>{A(e.target.value)}}))),Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiFormRow,{id:"webhookHeaderValue",fullWidth:!0,error:f.valueHeader,isInvalid:F&&void 0!==k,label:r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.valueTextFieldLabel",{defaultMessage:"Value"})},Object(c.jsx)(o.EuiFieldText,{fullWidth:!0,isInvalid:F&&void 0!==k,name:"valueHeader",readOnly:b,value:k,"data-test-subj":"webhookHeadersValueInput",onChange:e=>{E(e.target.value)}}))),Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiFormRow,{hasEmptyLabelSpace:!0},Object(c.jsx)(o.EuiButtonEmpty,{isDisabled:y&&(F||!w||!k),"data-test-subj":"webhookAddHeaderButton",onClick:()=>function(){if(O&&Object.keys(O).find((e=>e===w)))return;const e=O?{...O,[w]:k}:{[w]:k};t("headers",e),A(""),E("")}()},Object(c.jsx)(n.FormattedMessage,{defaultMessage:"Add",id:"xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.addHeaderButton"})))))));const T=Object.keys(O||{}).map((e=>Object(c.jsx)(o.EuiFlexGroup,{key:e,"data-test-subj":"webhookHeaderText",gutterSize:"s"},Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiButtonIcon,{"aria-label":r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.deleteHeaderButton",{defaultMessage:"Delete",description:"Delete HTTP header"}),iconType:"trash",color:"danger",onClick:()=>function(e){const s=Object.keys(O).filter((t=>t!==e)).reduce(((e,t)=>(e[t]=O[t],e)),{});t("headers",s)}(e)})),Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiDescriptionList,{compressed:!0},Object(c.jsx)(o.EuiDescriptionListTitle,null,e),Object(c.jsx)(o.EuiDescriptionListDescription,null,O[e])))))),S=void 0!==d.url&&d.url.length>0&&void 0!==h,H=void 0!==p&&void 0!==d.password&&d.password.length>0,M=void 0!==x&&void 0!==d.user&&d.user.length>0;return Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)(o.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiFormRow,{label:r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.methodTextFieldLabel",{defaultMessage:"Method"})},Object(c.jsx)(o.EuiSelect,{name:"method",value:g||"post",disabled:b,"data-test-subj":"webhookMethodSelect",options:u.map((e=>({text:e.toUpperCase(),value:e}))),onChange:e=>{t("method",e.target.value)}}))),Object(c.jsx)(o.EuiFlexItem,null,Object(c.jsx)(o.EuiFormRow,{id:"url",fullWidth:!0,error:d.url,isInvalid:S,label:r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.urlTextFieldLabel",{defaultMessage:"URL"})},Object(c.jsx)(o.EuiFieldText,{name:"url",isInvalid:S,fullWidth:!0,readOnly:b,value:h||"","data-test-subj":"webhookUrlText",onChange:e=>{t("url",e.target.value)},onBlur:()=>{h||t("url","")}})))),Object(c.jsx)(o.EuiFlexGroup,null,Object(c.jsx)(o.EuiFlexItem,null,Object(c.jsx)(o.EuiSpacer,{size:"m"}),Object(c.jsx)(o.EuiTitle,{size:"xxs"},Object(c.jsx)("h4",null,Object(c.jsx)(n.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.authenticationLabel",defaultMessage:"Authentication"}))),Object(c.jsx)(o.EuiSpacer,{size:"s"}),Object(c.jsx)(o.EuiSwitch,{label:r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.hasAuthSwitchLabel",{defaultMessage:"Require authentication for this webhook"}),disabled:b,checked:m,onChange:e=>{t("hasAuth",e.target.checked),e.target.checked||(s("user",null),s("password",null))}}))),m?Object(c.jsx)(a.a.Fragment,null,Object(l.a)(!e.id,2,null!==(j=e.isMissingSecrets)&&void 0!==j&&j,r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.reenterValuesLabel",{defaultMessage:"Username and password are encrypted. Please reenter values for these fields."})),Object(c.jsx)(o.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(c.jsx)(o.EuiFlexItem,null,Object(c.jsx)(o.EuiFormRow,{id:"webhookUser",fullWidth:!0,error:d.user,isInvalid:M,label:r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.userTextFieldLabel",{defaultMessage:"Username"})},Object(c.jsx)(o.EuiFieldText,{fullWidth:!0,isInvalid:M,name:"user",readOnly:b,value:x||"","data-test-subj":"webhookUserInput",onChange:e=>{s("user",e.target.value)},onBlur:()=>{x||s("user","")}}))),Object(c.jsx)(o.EuiFlexItem,null,Object(c.jsx)(o.EuiFormRow,{id:"webhookPassword",fullWidth:!0,error:d.password,isInvalid:H,label:r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.passwordTextFieldLabel",{defaultMessage:"Password"})},Object(c.jsx)(o.EuiFieldPassword,{fullWidth:!0,name:"password",readOnly:b,isInvalid:H,value:p||"","data-test-subj":"webhookPasswordInput",onChange:e=>{s("password",e.target.value)},onBlur:()=>{p||s("password","")}}))))):null,Object(c.jsx)(o.EuiSpacer,{size:"m"}),Object(c.jsx)(o.EuiSwitch,{"data-test-subj":"webhookViewHeadersSwitch",disabled:b,label:r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.viewHeadersSwitch",{defaultMessage:"Add HTTP header"}),checked:y,onChange:()=>(v(!y),void(y||O||t("headers",{})))}),Object(c.jsx)(o.EuiSpacer,{size:"m"}),Object(c.jsx)("div",null,Object.keys(O||{}).length>0?Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)(o.EuiSpacer,{size:"m"}),Object(c.jsx)(o.EuiTitle,{size:"xxs"},Object(c.jsx)("h5",null,Object(c.jsx)(n.FormattedMessage,{defaultMessage:"Headers in use",id:"xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.httpHeadersTitle"}))),Object(c.jsx)(o.EuiSpacer,{size:"s"}),T):null,Object(c.jsx)(o.EuiSpacer,{size:"m"}),y&&I,Object(c.jsx)(o.EuiSpacer,{size:"m"})))}}}]);