/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[4],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n(1);var s=n(15),c=n(3);const o=({children:e})=>Object(c.jsx)(s.EuiEmptyPrompt,{title:Object(c.jsx)(s.EuiLoadingSpinner,{size:"xl"}),body:Object(c.jsx)(s.EuiText,{color:"subdued"},e),"data-test-subj":"sectionLoading"})},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return b}));var s=n(1),c=n.n(s),o=n(15),i=n(0),a=n(76),r=n(112),l=n(43),u=n(124),d=n(3);async function g(e,t){const n=await(null==t?void 0:t.validateConnector(e)),s=n.config?n.config.errors:{},c=n.secrets?n.secrets.errors:{},o=function(e){const t={errors:{}},n={name:new Array};return t.errors=n,e.name||n.name.push(i.i18n.translate("xpack.triggersActionsUI.sections.actionConnectorForm.error.requiredNameText",{defaultMessage:"Name is required."})),t}(e).errors;return{configErrors:s,secretsErrors:c,connectorBaseErrors:o,connectorErrors:{...s,...c,...o}}}const b=({connector:e,dispatch:t,actionTypeName:n,serverError:g,errors:b,actionTypeRegistry:j,consumer:p,setCallbacks:m,isEdit:x})=>{const{docLinks:y,application:{capabilities:O}}=Object(l.b)().services,f=Object(r.e)(O),C=(e,n)=>{t({command:{type:"setProperty"},payload:{key:e,value:n}})},E=j.get(e.actionTypeId);if(!E)return Object(d.jsx)(c.a.Fragment,null,Object(d.jsx)(o.EuiCallOut,{title:i.i18n.translate("xpack.triggersActionsUI.sections.actionConnectorForm.actions.connectorTypeConfigurationWarningTitleText",{defaultMessage:"Connector type not registered"}),color:"warning",iconType:"help"},Object(d.jsx)(o.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(a.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorForm.actions.connectorTypeConfigurationWarningDescriptionText",defaultMessage:"To create this connector, you must configure at least one {connectorType} account. {docLink}",values:{connectorType:null!=n?n:e.actionTypeId,docLink:Object(d.jsx)(o.EuiLink,{href:y.links.alerting.actionTypes,target:"_blank"},Object(d.jsx)(a.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorForm.actions.actionConfigurationWarningHelpLinkText",defaultMessage:"Learn more."}))}})))),Object(d.jsx)(o.EuiSpacer,null));const T=E.actionConnectorFields,k=void 0!==e.name&&void 0!==b.name&&b.name.length>0;return Object(d.jsx)(o.EuiForm,{isInvalid:!!g,error:null==g?void 0:g.body.message},Object(d.jsx)(o.EuiFormRow,{id:"actionName",fullWidth:!0,label:Object(d.jsx)(a.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorForm.actionNameLabel",defaultMessage:"Connector name"}),isInvalid:k,error:b.name},Object(d.jsx)(o.EuiFieldText,{fullWidth:!0,readOnly:!f,isInvalid:k,name:"name",placeholder:"Untitled","data-test-subj":"nameInput",value:e.name||"",onChange:e=>{C("name",e.target.value)},onBlur:()=>{e.name||C("name","")}})),Object(d.jsx)(o.EuiSpacer,{size:"m"}),null!==T?Object(d.jsx)(c.a.Fragment,null,Object(d.jsx)(o.EuiTitle,{size:"xxs"},Object(d.jsx)("h4",null,Object(d.jsx)(a.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorForm.connectorSettingsLabel",defaultMessage:"Connector settings"}))),Object(d.jsx)(o.EuiSpacer,{size:"s"}),Object(d.jsx)(o.EuiErrorBoundary,null,Object(d.jsx)(s.Suspense,{fallback:Object(d.jsx)(u.a,null,Object(d.jsx)(a.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorForm.loadingConnectorSettingsDescription",defaultMessage:"Loading connector settings…"}))},Object(d.jsx)(T,{action:e,errors:b,readOnly:!f,editActionConfig:(e,n)=>{t({command:{type:"setConfigProperty"},payload:{key:e,value:n}})},editActionSecrets:(e,n)=>{t({command:{type:"setSecretsProperty"},payload:{key:e,value:n}})},consumer:p,setCallbacks:m,isEdit:x})))):null)}},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var s=n(5);const c=()=>(e,t)=>{const{connector:n}=e;switch(t.command.type){case"setConnector":{const{key:n,value:s}=t.payload;return"connector"===n?{...e,connector:s}:e}case"setProperty":{const{key:c,value:o}=t.payload;return Object(s.isEqual)(n[c],o)?e:{...e,connector:{...n,[c]:o}}}case"setConfigProperty":{const{key:c,value:o}=t.payload;return Object(s.isEqual)(n.config[c],o)?e:{...e,connector:{...n,config:{...n.config,[c]:o}}}}case"setSecretsProperty":{const{key:c,value:o}=t.payload;return Object(s.isEqual)(n.secrets[c],o)?e:{...e,connector:{...n,secrets:{...n.secrets,[c]:o}}}}}}},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return g})),n(1);var s=n(5),c=n(0),o=n(76),i=n(15),a=n(10),r=(n(158),n(3));const l=e=>({isEnabled:!1,message:c.i18n.translate("xpack.triggersActionsUI.checkActionTypeEnabled.actionTypeDisabledByLicenseMessage",{defaultMessage:"This connector requires a {minimumLicenseRequired} license.",values:{minimumLicenseRequired:Object(s.upperFirst)(e.minimumLicenseRequired)}}),messageCard:Object(r.jsx)(i.EuiCard,{titleSize:"xs",title:c.i18n.translate("xpack.triggersActionsUI.licenseCheck.actionTypeDisabledByLicenseMessageTitle",{defaultMessage:"This feature requires a {minimumLicenseRequired} license.",values:{minimumLicenseRequired:Object(s.upperFirst)(e.minimumLicenseRequired)}}),description:c.i18n.translate("xpack.triggersActionsUI.licenseCheck.actionTypeDisabledByLicenseMessageDescription",{defaultMessage:"To re-enable this action, please upgrade your license."}),className:"actCheckActionTypeEnabled__disabledActionWarningCard",children:Object(r.jsx)(i.EuiLink,{href:a.VIEW_LICENSE_OPTIONS_LINK,target:"_blank"},Object(r.jsx)(o.FormattedMessage,{defaultMessage:"View license options",id:"xpack.triggersActionsUI.licenseCheck.actionTypeDisabledByLicenseLinkTitle"}))})}),u={isEnabled:!1,message:c.i18n.translate("xpack.triggersActionsUI.checkActionTypeEnabled.actionTypeDisabledByConfigMessage",{defaultMessage:"This connector is disabled by the Kibana configuration."}),messageCard:Object(r.jsx)(i.EuiCard,{title:c.i18n.translate("xpack.triggersActionsUI.licenseCheck.actionTypeDisabledByConfigMessageTitle",{defaultMessage:"This feature is disabled by the Kibana configuration."}),description:"",className:"actCheckActionTypeEnabled__disabledActionWarningCard"})};function d(e){return!1===(null==e?void 0:e.enabledInLicense)?l(e):!1===(null==e?void 0:e.enabledInConfig)?u:{isEnabled:!0}}function g(e,t){return!1===(null==e?void 0:e.enabledInLicense)?l(e):!1!==(null==e?void 0:e.enabledInConfig)||t.find((t=>t.actionTypeId===e.id))?{isEnabled:!0}:u}},157:function(e,t,n){"use strict";function s(e,t,n){const s=c(e,n),o=c(t,n);return!0===s&&!1===o?-1:!1===s&&!0===o?1:e.name.localeCompare(t.name)}n.d(t,"a",(function(){return s}));const c=(e,t)=>{let n=e.enabled;return!e.enabledInConfig&&t&&t.length>0&&(n=void 0!==t.find((t=>t.actionTypeId===e.id))),n}},158:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(159);case"v8light":return n(161)}},159:function(e,t,n){var s=n(107),c=n(160);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);s(c,{insert:"head",singleton:!1}),e.exports=c.locals||{}},160:function(e,t,n){(t=n(108)(!1)).push([e.i,".actCheckActionTypeEnabled__disabledActionWarningCard{background-color:#25262E}.actAccordionActionForm{background-color:#25262E}.actAccordionActionForm .euiCard{box-shadow:none}.actAccordionActionForm__button{padding:12px}.actConnectorsListGrid .euiToolTipAnchor,.actConnectorsListGrid .euiCard{height:100%}\n",""]),e.exports=t},161:function(e,t,n){var s=n(107),c=n(162);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);s(c,{insert:"head",singleton:!1}),e.exports=c.locals||{}},162:function(e,t,n){(t=n(108)(!1)).push([e.i,".actCheckActionTypeEnabled__disabledActionWarningCard{background-color:#F5F7FA}.actAccordionActionForm{background-color:#F5F7FA}.actAccordionActionForm .euiCard{box-shadow:none}.actAccordionActionForm__button{padding:12px}.actConnectorsListGrid .euiToolTipAnchor,.actConnectorsListGrid .euiCard{height:100%}\n",""]),e.exports=t},67:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var s=n(1),c=n.n(s),o=n(76),i=n(15),a=n(0),r=n(10),l=n(45),u=n(157),d=n(134),g=n(43),b=n(124),j=n(3);const p=({onActionTypeChange:e,actionTypes:t,setHasActionsUpgradeableByTrial:n,actionTypeRegistry:c})=>{const{http:p,notifications:{toasts:m}}=Object(g.b)().services,[x,y]=Object(s.useState)(!1),[O,f]=Object(s.useState)(void 0);Object(s.useEffect)((()=>{(async()=>{try{let e=t;e||(y(!0),e=(await Object(l.d)({http:p})).filter((e=>!r.DEFAULT_HIDDEN_ACTION_TYPES.includes(e.id))),y(!1));const s={};for(const t of e)s[t.id]=t;if(f(s),n){const t=e.some((e=>!s[e.id].enabledInLicense&&"gold"===s[e.id].minimumLicenseRequired));n(t)}}catch(e){m&&m.addDanger({title:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.unableToLoadConnectorTypesMessage",{defaultMessage:"Unable to load connector types"})})}})()}),[]);const C=Object.entries(null!=O?O:[]).filter((([e,t])=>c.has(e)&&!0===t.enabledInConfig)).map((([e,t])=>{const n=c.get(e);return{iconClass:n?n.iconClass:"",selectMessage:n?n.selectMessage:"",actionType:t,name:t.name}})).sort(((e,t)=>Object(u.a)(e.actionType,t.actionType))).map(((t,n)=>{const s=Object(d.b)(t.actionType),c=Object(j.jsx)(i.EuiCard,{titleSize:"xs","data-test-subj":`${t.actionType.id}-card`,icon:Object(j.jsx)(i.EuiIcon,{size:"xl",type:t.iconClass}),title:t.name,description:t.selectMessage,isDisabled:!s.isEnabled,onClick:()=>e(t.actionType)});return Object(j.jsx)(i.EuiFlexItem,{key:n},s.isEnabled&&c,!1===s.isEnabled&&Object(j.jsx)(i.EuiToolTip,{position:"top",content:s.message},c))}));return x?Object(j.jsx)(b.a,null,Object(j.jsx)(o.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionsConnectorsList.loadingConnectorTypesDescription",defaultMessage:"Loading connector types…"})):Object(j.jsx)("div",{className:"actConnectorsListGrid"},Object(j.jsx)(i.EuiSpacer,{size:"s"}),Object(j.jsx)(i.EuiFlexGrid,{gutterSize:"xl",columns:3},C))};var m=n(130),x=n(112),y=n(131),O=n(6),f=n(46);const C=({onClose:e,actionTypes:t,onTestConnector:n,reloadConnectors:r,consumer:u,actionTypeRegistry:d})=>{var b;const[C,T]=Object(s.useState)(!0);let k;const{http:A,notifications:{toasts:F},application:{capabilities:h}}=Object(g.b)().services,[v,I]=Object(s.useState)(void 0),[M,L]=Object(s.useState)(!1),[S,_]=Object(s.useState)({configErrors:{},connectorBaseErrors:{},connectorErrors:{},secretsErrors:{}}),B={actionTypeId:null!==(b=null==v?void 0:v.id)&&void 0!==b?b:"",config:{},secrets:{}},U=Object(y.a)(),[{connector:w},N]=Object(s.useReducer)(U,{connector:B}),[z,D]=Object(s.useState)(!1);Object(s.useEffect)((()=>{(async()=>{if(k){D(!0);const e=await Object(m.b)(w,k);T(!!Object.keys(e.connectorErrors).find((t=>e.connectorErrors[t].length>=1))),D(!1),_({...e})}})()}),[w,v]);const P=e=>{N({command:{type:"setConnector"},payload:{key:"connector",value:e}})},[q,R]=Object(s.useState)(!1),[W,G]=Object(s.useState)(null),H=Object(s.useCallback)((()=>{e()}),[e]),K=Object(x.e)(h);let Y,V;if(v){k=d.get(v.id),Y=Object(j.jsx)(m.a,{actionTypeName:v.name,connector:w,dispatch:N,errors:S.connectorErrors,actionTypeRegistry:d,consumer:u,setCallbacks:G,isEdit:!1});const e=async()=>await Object(l.a)({http:A,connector:w}).then((e=>(F&&F.addSuccess(a.i18n.translate("xpack.triggersActionsUI.sections.addConnectorForm.updateSuccessNotificationText",{defaultMessage:"Created '{connectorName}'",values:{connectorName:e.name}})),e))).catch((e=>{var t,n;F.addDanger(null!==(t=null===(n=e.body)||void 0===n?void 0:n.message)&&void 0!==t?t:a.i18n.translate("xpack.triggersActionsUI.sections.addConnectorForm.updateErrorNotificationText",{defaultMessage:"Cannot create a connector."}))})),t=async()=>{if(C)return void P(Object(O.a)(w,S.configErrors,S.secretsErrors,S.connectorBaseErrors));R(!0);try{var t;await(null==W||null===(t=W.beforeActionConnectorSave)||void 0===t?void 0:t.call(W))}catch(e){return void R(!1)}const n=await e();var s;return R(!1),n&&(await(null==W||null===(s=W.afterActionConnectorSave)||void 0===s?void 0:s.call(W,n)),H(),r&&await r()),n};V=Object(j.jsx)(c.a.Fragment,null,n&&Object(j.jsx)(i.EuiFlexItem,{grow:!1},Object(j.jsx)(i.EuiButton,{color:"success","data-test-subj":"saveAndTestNewActionButton",type:"submit",isLoading:q,onClick:async()=>{const e=await t();e&&n(e)}},Object(j.jsx)(o.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorAdd.saveAndTestButtonLabel",defaultMessage:"Save & test"}))),Object(j.jsx)(i.EuiFlexItem,{grow:!1},Object(j.jsx)(i.EuiButton,{fill:!0,color:"success","data-test-subj":"saveNewActionButton",type:"submit",isLoading:q,onClick:t},Object(j.jsx)(o.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorAdd.saveButtonLabel",defaultMessage:"Save"}))))}else Y=Object(j.jsx)(p,{onActionTypeChange:function(e){var t;I(e),t=e.id,N({command:{type:"setProperty"},payload:{key:"actionTypeId",value:t}})},actionTypes:t,setHasActionsUpgradeableByTrial:L,actionTypeRegistry:d});return Object(j.jsx)(i.EuiFlyout,{onClose:H,"aria-labelledby":"flyoutActionAddTitle",size:"m"},Object(j.jsx)(i.EuiFlyoutHeader,{hasBorder:!0},Object(j.jsx)(i.EuiFlexGroup,{gutterSize:"m",alignItems:"center"},k&&k.iconClass?Object(j.jsx)(i.EuiFlexItem,{grow:!1},Object(j.jsx)(i.EuiIcon,{type:k.iconClass,size:"xl"})):null,Object(j.jsx)(i.EuiFlexItem,null,k&&v?Object(j.jsx)(c.a.Fragment,null,Object(j.jsx)(i.EuiTitle,{size:"s"},Object(j.jsx)("h3",{id:"flyoutTitle"},Object(j.jsx)(o.FormattedMessage,{defaultMessage:"{actionTypeName} connector",id:"xpack.triggersActionsUI.sections.addConnectorForm.flyoutTitle",values:{actionTypeName:v.name}}))),Object(j.jsx)(i.EuiText,{size:"s",color:"subdued"},k.selectMessage)):Object(j.jsx)(i.EuiTitle,{size:"s"},Object(j.jsx)("h3",{id:"selectConnectorFlyoutTitle"},Object(j.jsx)(o.FormattedMessage,{defaultMessage:"Select a connector",id:"xpack.triggersActionsUI.sections.addConnectorForm.selectConnectorFlyoutTitle"})))))),Object(j.jsx)(i.EuiFlyoutBody,{banner:!v&&M?Object(j.jsx)(E,{http:A}):Object(j.jsx)(c.a.Fragment,null)},Object(j.jsx)(c.a.Fragment,null,Y,z?Object(j.jsx)(c.a.Fragment,null,Object(j.jsx)(i.EuiSpacer,{size:"m"}),Object(j.jsx)(f.a,{size:"l"})," "):Object(j.jsx)(c.a.Fragment,null))),Object(j.jsx)(i.EuiFlyoutFooter,null,Object(j.jsx)(i.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(j.jsx)(i.EuiFlexItem,{grow:!1},v?Object(j.jsx)(i.EuiButtonEmpty,{"data-test-subj":"backButton",onClick:()=>{I(void 0),P(B)}},a.i18n.translate("xpack.triggersActionsUI.sections.actionConnectorAdd.backButtonLabel",{defaultMessage:"Back"})):Object(j.jsx)(i.EuiButtonEmpty,{"data-test-subj":"cancelButton",onClick:H},a.i18n.translate("xpack.triggersActionsUI.sections.actionConnectorAdd.cancelButtonLabel",{defaultMessage:"Cancel"}))),Object(j.jsx)(i.EuiFlexItem,{grow:!1},Object(j.jsx)(i.EuiFlexGroup,{justifyContent:"spaceBetween"},K&&k&&v?V:null)))))},E=({http:e})=>Object(j.jsx)(i.EuiCallOut,{title:a.i18n.translate("xpack.triggersActionsUI.sections.actionConnectorAdd.upgradeYourPlanBannerTitle",{defaultMessage:"Upgrade your license to access all connectors"})},Object(j.jsx)(o.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorAdd.upgradeYourPlanBannerMessage",defaultMessage:"Upgrade your license or start a 30-day free trial for immediate access to all third-party connectors."}),Object(j.jsx)(i.EuiSpacer,{size:"s"}),Object(j.jsx)(i.EuiFlexGroup,{gutterSize:"s",wrap:!0},Object(j.jsx)(i.EuiFlexItem,{grow:!1},Object(j.jsx)(i.EuiButton,{href:`${e.basePath.get()}/app/management/stack/license_management`,iconType:"gear",target:"_blank"},Object(j.jsx)(o.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorAdd.manageLicensePlanBannerLinkTitle",defaultMessage:"Manage license"}))),Object(j.jsx)(i.EuiFlexItem,{grow:!1},Object(j.jsx)(i.EuiButtonEmpty,{href:r.VIEW_LICENSE_OPTIONS_LINK,iconType:"popout",iconSide:"right",target:"_blank"},Object(j.jsx)(o.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionConnectorAdd.upgradeYourPlanBannerLinkTitle",defaultMessage:"Subscription plans"})))))}}]);