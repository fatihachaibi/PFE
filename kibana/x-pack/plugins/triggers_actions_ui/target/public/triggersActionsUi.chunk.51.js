/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[51],{117:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var s=i(15),n=i(0),l=i(1),a=i.n(l),r=i(76),c=i(3);const o=(e,t,i,l)=>i?Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)(s.EuiSpacer,{size:"m"}),Object(c.jsx)(s.EuiCallOut,{size:"s",color:"warning",iconType:"alert","data-test-subj":"missingSecretsMessage",title:n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.missingSecretsValuesLabel",{defaultMessage:"Sensitive information is not imported. Please enter value{encryptedFieldsLength, plural, one {} other {s}} for the following field{encryptedFieldsLength, plural, one {} other {s}}.",values:{encryptedFieldsLength:t}})}),Object(c.jsx)(s.EuiSpacer,{size:"m"})):e?Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)(s.EuiSpacer,{size:"s"}),Object(c.jsx)(s.EuiText,{size:"s","data-test-subj":"rememberValuesMessage"},Object(c.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.rememberValueLabel",defaultMessage:"Remember {encryptedFieldsLength, plural, one {this} other {these}} value. You must reenter {encryptedFieldsLength, plural, one {it} other {them}} each time you edit the connector.",values:{encryptedFieldsLength:t}})),Object(c.jsx)(s.EuiSpacer,{size:"s"})):Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)(s.EuiSpacer,{size:"s"}),Object(c.jsx)(s.EuiCallOut,{size:"s",iconType:"iInCircle","data-test-subj":"reenterValuesMessage",title:l}),Object(c.jsx)(s.EuiSpacer,{size:"m"}))},92:function(e,t,i){"use strict";i.r(t),i.d(t,"EmailActionConnectorFields",(function(){return m})),i.d(t,"nullableString",(function(){return x})),i.d(t,"default",(function(){return m}));var s=i(1),n=i.n(s),l=i(15),a=i(0),r=i(76),c=i(9),o=i(43),u=i(117),d=i(50),j=i(5),b=i(2);var p=i(3);const g=Object(s.lazy)((()=>i.e(71).then(i.bind(null,303)))),m=({action:e,editActionConfig:t,editActionSecrets:i,errors:m,readOnly:h})=>{var O;const{docLinks:f,http:v,isCloud:E}=Object(o.b)().services,{from:A,host:F,port:I,secure:y,hasAuth:w,service:S}=e.config,{user:T,password:C}=e.secrets,{emailServiceConfigurable:k,setEmailService:L}=function(e,t,i){const[n,l]=Object(s.useState)(!1),[a,r]=Object(s.useState)(void 0),o=Object(s.useCallback)((async t=>{let i;try{i=await async function({http:e,service:t}){return await e.get(`${b.e}/connector/_email_config/${t}`)}({http:e,service:t}),l(Object(j.isEmpty)(i))}catch(e){i={},l(!0)}return i}),[i]);return Object(s.useEffect)((()=>{(async()=>{if(a){if(i("service",a),a===c.AdditionalEmailServices.EXCHANGE)return;const e=await o(a);i("host",null!=e&&e.host?e.host:""),i("port",null!=e&&e.port?e.port:0),i("secure",null!=(null==e?void 0:e.secure)&&e.secure)}})()}),[a]),Object(s.useEffect)((()=>{(async()=>{t&&await o(t)})()}),[t]),{emailServiceConfigurable:n,setEmailService:r}}(v,S,t);Object(s.useEffect)((()=>{e.id||t("hasAuth",!0)}),[]);const M=void 0!==A&&void 0!==m.from&&m.from.length>0,U=void 0!==F&&void 0!==m.host&&m.host.length>0,z=void 0!==S&&void 0!==m.service&&m.service.length>0,W=void 0!==I&&void 0!==m.port&&m.port.length>0,B=void 0!==C&&void 0!==m.password&&m.password.length>0,P=void 0!==T&&void 0!==m.user&&m.user.length>0,R=Object(p.jsx)(n.a.Fragment,null,Object(u.a)(!e.id,2,null!==(O=e.isMissingSecrets)&&void 0!==O&&O,a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.emailAction.reenterValuesLabel",{defaultMessage:"Username and password are encrypted. Please reenter values for these fields."})),Object(p.jsx)(l.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(p.jsx)(l.EuiFlexItem,null,Object(p.jsx)(l.EuiFormRow,{id:"emailUser",fullWidth:!0,error:m.user,isInvalid:P,label:a.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.userTextFieldLabel",{defaultMessage:"Username"})},Object(p.jsx)(l.EuiFieldText,{fullWidth:!0,isInvalid:P,name:"user",readOnly:h,value:T||"","data-test-subj":"emailUserInput",onChange:e=>{i("user",x(e.target.value))},onBlur:()=>{T||i("user","")}}))),Object(p.jsx)(l.EuiFlexItem,null,Object(p.jsx)(l.EuiFormRow,{id:"emailPassword",fullWidth:!0,error:m.password,isInvalid:B,label:a.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.passwordFieldLabel",{defaultMessage:"Password"})},Object(p.jsx)(l.EuiFieldPassword,{fullWidth:!0,readOnly:h,isInvalid:B,name:"password",value:C||"","data-test-subj":"emailPasswordInput",onChange:e=>{i("password",x(e.target.value))},onBlur:()=>{C||i("password","")}})))));return Object(p.jsx)(n.a.Fragment,null,Object(p.jsx)(l.EuiFlexGroup,null,Object(p.jsx)(l.EuiFlexItem,null,Object(p.jsx)(l.EuiFormRow,{id:"from",fullWidth:!0,error:m.from,isInvalid:M,label:a.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.fromTextFieldLabel",{defaultMessage:"Sender"}),helpText:Object(p.jsx)(l.EuiLink,{href:f.links.alerting.emailActionConfig,target:"_blank"},Object(p.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.components.builtinActionTypes.emailAction.configureAccountsHelpLabel",defaultMessage:"Configure email accounts"}))},Object(p.jsx)(l.EuiFieldText,{fullWidth:!0,readOnly:h,isInvalid:M,name:"from",value:A||"","data-test-subj":"emailFromInput",onChange:e=>{t("from",e.target.value)},onBlur:()=>{A||t("from","")}})))),Object(p.jsx)(l.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(p.jsx)(l.EuiFlexItem,null,Object(p.jsx)(l.EuiFormRow,{label:a.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.serviceTextFieldLabel",{defaultMessage:"Service"}),error:m.serverType,isInvalid:z},Object(p.jsx)(l.EuiSelect,{name:"service",hasNoInitialSelection:!0,value:S,disabled:h,isInvalid:z,"data-test-subj":"emailServiceSelectInput",options:Object(d.b)(E),onChange:e=>{L(e.target.value)}})))),S===c.AdditionalEmailServices.EXCHANGE?Object(p.jsx)(g,{action:e,editActionConfig:t,editActionSecrets:i,errors:m,readOnly:h}):Object(p.jsx)(n.a.Fragment,null,Object(p.jsx)(l.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(p.jsx)(l.EuiFlexItem,null,Object(p.jsx)(l.EuiFormRow,{id:"emailHost",fullWidth:!0,error:m.host,isInvalid:U,label:a.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.hostTextFieldLabel",{defaultMessage:"Host"})},Object(p.jsx)(l.EuiFieldText,{fullWidth:!0,disabled:!k,readOnly:h,isInvalid:U,name:"host",value:F||"","data-test-subj":"emailHostInput",onChange:e=>{t("host",e.target.value)},onBlur:()=>{F||t("host","")}}))),Object(p.jsx)(l.EuiFlexItem,null,Object(p.jsx)(l.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(p.jsx)(l.EuiFlexItem,null,Object(p.jsx)(l.EuiFormRow,{id:"emailPort",fullWidth:!0,placeholder:"587",error:m.port,isInvalid:W,label:a.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.portTextFieldLabel",{defaultMessage:"Port"})},Object(p.jsx)(l.EuiFieldNumber,{prepend:":",isInvalid:W,fullWidth:!0,disabled:!k,readOnly:h,name:"port",value:I||"","data-test-subj":"emailPortInput",onChange:e=>{t("port",parseInt(e.target.value,10))},onBlur:()=>{I||t("port",0)}}))),Object(p.jsx)(l.EuiFlexItem,null,Object(p.jsx)(l.EuiFlexItem,null,Object(p.jsx)(l.EuiFormRow,{hasEmptyLabelSpace:!0},Object(p.jsx)(l.EuiSwitch,{label:a.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.secureSwitchLabel",{defaultMessage:"Secure"}),"data-test-subj":"emailSecureSwitch",disabled:h||!k,checked:y||!1,onChange:e=>{t("secure",e.target.checked)}}))))))),Object(p.jsx)(l.EuiFlexGroup,null,Object(p.jsx)(l.EuiFlexItem,null,Object(p.jsx)(l.EuiSpacer,{size:"m"}),Object(p.jsx)(l.EuiTitle,{size:"xxs"},Object(p.jsx)("h4",null,Object(p.jsx)(r.FormattedMessage,{id:"xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.authenticationLabel",defaultMessage:"Authentication"}))),Object(p.jsx)(l.EuiSpacer,{size:"s"}),Object(p.jsx)(l.EuiSwitch,{label:a.i18n.translate("xpack.triggersActionsUI.sections.builtinActionTypes.emailAction.hasAuthSwitchLabel",{defaultMessage:"Require authentication for this server"}),disabled:h,checked:w||!1,onChange:e=>{t("hasAuth",e.target.checked),e.target.checked||(i("user",null),i("password",null))}}))),w?R:null))};function x(e){return null==e||""===e.trim()?null:e}}}]);