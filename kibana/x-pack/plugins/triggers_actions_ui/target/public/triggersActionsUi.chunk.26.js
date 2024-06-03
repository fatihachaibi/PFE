/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[26],{150:function(e,t,s){"use strict";s.d(t,"a",(function(){return r}));var n=s(15),o=s(0),i=s(1),c=s(43),a=s(3);const r=({idsToDelete:e,apiDeleteCall:t,onDeleted:s,onCancel:r,onErrors:l,singleTitle:u,multipleTitle:d,setIsLoadingState:g})=>{const[b,j]=Object(i.useState)(!1);Object(i.useEffect)((()=>{j(e.length>0)}),[e]);const{http:p,notifications:{toasts:x}}=Object(c.b)().services,m=e.length;if(!b)return null;const f=o.i18n.translate("xpack.triggersActionsUI.deleteSelectedIdsConfirmModal.descriptionText",{defaultMessage:"You won't be able to recover {numIdsToDelete, plural, one {a deleted {singleTitle}} other {deleted {multipleTitle}}}.",values:{numIdsToDelete:m,singleTitle:u,multipleTitle:d}}),O=o.i18n.translate("xpack.triggersActionsUI.deleteSelectedIdsConfirmModal.deleteButtonLabel",{defaultMessage:"Delete {numIdsToDelete, plural, one {{singleTitle}} other {# {multipleTitle}}} ",values:{numIdsToDelete:m,singleTitle:u,multipleTitle:d}}),C=o.i18n.translate("xpack.triggersActionsUI.deleteSelectedIdsConfirmModal.cancelButtonLabel",{defaultMessage:"Cancel"});return Object(a.jsx)(n.EuiConfirmModal,{buttonColor:"danger","data-test-subj":"deleteIdsConfirmation",title:O,onCancel:()=>{j(!1),r()},onConfirm:async()=>{j(!1),g(!0);const{successes:n,errors:i}=await t({ids:e,http:p});g(!1);const c=n.length,a=i.length;c>0&&x.addSuccess(o.i18n.translate("xpack.triggersActionsUI.components.deleteSelectedIdsSuccessNotification.descriptionText",{defaultMessage:"Deleted {numSuccesses, number} {numSuccesses, plural, one {{singleTitle}} other {{multipleTitle}}}",values:{numSuccesses:c,singleTitle:u,multipleTitle:d}})),a>0&&(x.addDanger(o.i18n.translate("xpack.triggersActionsUI.components.deleteSelectedIdsErrorNotification.descriptionText",{defaultMessage:"Failed to delete {numErrors, number} {numErrors, plural, one {{singleTitle}} other {{multipleTitle}}}",values:{numErrors:a,singleTitle:u,multipleTitle:d}})),await l()),await s(n)},cancelButtonText:C,confirmButtonText:O},f)}},163:function(e,t,s){switch(window.__kbnThemeTag__){case"v8dark":return s(164);case"v8light":return s(166)}},164:function(e,t,s){var n=s(107),o=s(165);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},165:function(e,t,s){(t=s(108)(!1)).push([e.i,".connectorEditFlyoutTabs{margin-bottom:-24px}\n",""]),e.exports=t},166:function(e,t,s){var n=s(107),o=s(167);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},167:function(e,t,s){(t=s(108)(!1)).push([e.i,".connectorEditFlyoutTabs{margin-bottom:-24px}\n",""]),e.exports=t},247:function(e,t,s){switch(window.__kbnThemeTag__){case"v8dark":return s(248);case"v8light":return s(250)}},248:function(e,t,s){var n=s(107),o=s(249);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},249:function(e,t,s){(t=s(108)(!1)).push([e.i,".actConnectorsList__tableRowDisabled{background-color:#25262E}.actConnectorsList__tableRowDisabled .actConnectorsList__tableCellDisabled{color:#98A2B3}.actConnectorsList__tableRowDisabled .euiLink+.euiToolTipAnchor{margin-left:4px}\n",""]),e.exports=t},250:function(e,t,s){var n=s(107),o=s(251);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},251:function(e,t,s){(t=s(108)(!1)).push([e.i,".actConnectorsList__tableRowDisabled{background-color:#F5F7FA}.actConnectorsList__tableRowDisabled .actConnectorsList__tableCellDisabled{color:#69707D}.actConnectorsList__tableRowDisabled .euiLink+.euiToolTipAnchor{margin-left:4px}\n",""]),e.exports=t},252:function(e,t,s){switch(window.__kbnThemeTag__){case"v8dark":return s(253);case"v8light":return s(255)}},253:function(e,t,s){var n=s(107),o=s(254);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},254:function(e,t,s){(t=s(108)(!1)).push([e.i,".actEmptyConnectorsPrompt__logo+.actEmptyConnectorsPrompt__logo{margin-left:16px}\n",""]),e.exports=t},255:function(e,t,s){var n=s(107),o=s(256);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},256:function(e,t,s){(t=s(108)(!1)).push([e.i,".actEmptyConnectorsPrompt__logo+.actEmptyConnectorsPrompt__logo{margin-left:16px}\n",""]),e.exports=t},260:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return I}));var n=s(3),o=s(1),i=s.n(o),c=s(15),a=s(0),r=s(5),l=s(76),u=s(86),d=s(10),g=s(45),b=s(112),j=s(150),p=s(134),x=(s(247),s(16));s(252);const m=({onCTAClicked:e})=>Object(n.jsx)(c.EuiEmptyPrompt,{"data-test-subj":"createFirstConnectorEmptyPrompt",title:Object(n.jsx)(i.a.Fragment,null,Object(n.jsx)(c.EuiIcon,{type:"logoSlack",size:"xl",className:"actEmptyConnectorsPrompt__logo"}),Object(n.jsx)(c.EuiIcon,{type:"logoGmail",size:"xl",className:"actEmptyConnectorsPrompt__logo"}),Object(n.jsx)(c.EuiIcon,{type:"logoWebhook",size:"xl",className:"actEmptyConnectorsPrompt__logo"}),Object(n.jsx)(c.EuiSpacer,{size:"s"}),Object(n.jsx)(c.EuiTitle,{size:"m"},Object(n.jsx)("h2",null,Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.components.emptyConnectorsPrompt.addConnectorEmptyTitle",defaultMessage:"Create your first connector"})))),body:Object(n.jsx)("p",null,Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.components.emptyConnectorsPrompt.addConnectorEmptyBody",defaultMessage:"Configure email, Slack, Elasticsearch, and third-party services that Kibana runs."})),actions:Object(n.jsx)(c.EuiButton,{"data-test-subj":"createFirstActionButton",key:"create-action",fill:!0,iconType:"plusInCircle",iconSide:"left",onClick:e},Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.components.emptyConnectorsPrompt.addConnectorButtonLabel",defaultMessage:"Create connector"}))});var f=s(43),O=s(46),C=s(66),T=s(67),y=s(52);const E=Object(u.withTheme)((({theme:e})=>Object(n.jsx)(n.ClassNames,null,(({css:t})=>Object(n.jsx)(c.EuiIconTip,{anchorClassName:t({marginLeft:e.eui.euiSizeS,marginBottom:"0 !important"}),"aria-label":"Warning",size:"m",type:"alert",color:"warning",content:y.a,position:"right"}))))),I=()=>{const{http:e,notifications:{toasts:t},application:{capabilities:s},actionTypeRegistry:u}=Object(f.b)().services,I=Object(b.b)(s),M=Object(b.c)(s),v=Object(b.e)(s),[L,S]=Object(o.useState)(void 0),[_,U]=Object(o.useState)([]),[D,w]=Object(o.useState)(0),[B,P]=Object(o.useState)([]),[R,N]=Object(o.useState)(!1),[z,$]=Object(o.useState)(!1),[H,G]=Object(o.useState)(!1),[q,W]=Object(o.useState)({}),[Y,K]=Object(o.useState)([]);Object(o.useEffect)((()=>{Q()}),[]),Object(o.useEffect)((()=>{(async()=>{try{N(!0);const t=await Object(g.d)({http:e}),s={};for(const e of t)s[e.id]=e;S(s)}catch(e){t.addDanger({title:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.unableToLoadConnectorTypesMessage",{defaultMessage:"Unable to load connector types"})})}finally{N(!1)}})()}),[]);const V=L?_.filter((e=>!d.DEFAULT_HIDDEN_ACTION_TYPES.includes(e.actionTypeId))).map((e=>({...e,actionType:L[e.actionTypeId]?L[e.actionTypeId].name:e.actionTypeId}))):[],J=L?Object.values(L).filter((e=>!d.DEFAULT_HIDDEN_ACTION_TYPES.includes(e.id))).map((e=>({value:e.id,name:`${e.name} (${h(_,e.id)})`}))).sort(((e,t)=>e.name.localeCompare(t.name))):[];async function Q(){$(!0);try{const t=await Object(g.e)({http:e});U(t)}catch(e){t.addDanger({title:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.unableToLoadActionsMessage",{defaultMessage:"Unable to load connectors"})})}finally{$(!1)}}async function X(e,t,s){W({initialConnector:e,tab:t,isFix:null!=s&&s})}const Z=[{field:"name","data-test-subj":"connectorsTableCell-name",name:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.nameTitle",{defaultMessage:"Name"}),sortable:!1,truncateText:!0,render:(e,t)=>{var s;const o=Object(p.b)(L&&L[t.actionTypeId]),r=t.isDeprecated,l=function(e,t){return t.isDeprecated?`${e} ${y.b}`:e}(e,t),u=Object(n.jsx)(i.a.Fragment,null,Object(n.jsx)(c.EuiLink,{"data-test-subj":`edit${t.id}`,onClick:()=>X(t,x.h.Configuration),key:t.id,disabled:!L||!(null!==(s=L[t.actionTypeId])&&void 0!==s&&s.enabled)},l),t.isMissingSecrets?Object(n.jsx)(c.EuiIconTip,{iconProps:{"data-test-subj":`missingSecrets_${t.id}`},type:"alert",color:"warning",content:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.missingSecretsDescription",{defaultMessage:"Sensitive information was not imported"}),position:"right"}):null,r&&Object(n.jsx)(E,null));return o.isEnabled?u:Object(n.jsx)(i.a.Fragment,null,u,Object(n.jsx)(c.EuiIconTip,{type:"questionInCircle",content:o.message,position:"right"}))}},{field:"actionType","data-test-subj":"connectorsTableCell-actionType",name:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actionTypeTitle",{defaultMessage:"Type"}),sortable:!1,truncateText:!0},{name:"",render:e=>{var t;return Object(n.jsx)(c.EuiFlexGroup,{justifyContent:"flexEnd",alignItems:"flexEnd"},Object(n.jsx)(k,{canDelete:I,item:e,onDelete:()=>K([e.id])}),e.isMissingSecrets?Object(n.jsx)(i.a.Fragment,null,L&&null!==(t=L[e.actionTypeId])&&void 0!==t&&t.enabled?Object(n.jsx)(c.EuiFlexItem,{grow:!1,style:{marginLeft:4}},Object(n.jsx)(c.EuiToolTip,{content:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.fixActionDescription",{defaultMessage:"Fix connector configuration"})},Object(n.jsx)(c.EuiButtonEmpty,{size:"xs","data-test-subj":"fixConnectorButton",onClick:()=>X(e,x.h.Configuration,!0)},a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.fixButtonLabel",{defaultMessage:"Fix"})))):null):Object(n.jsx)(A,{canExecute:M&&L&&L[e.actionTypeId],item:e,onRun:()=>X(e,x.h.Test)}))}}],ee=Object(n.jsx)(c.EuiInMemoryTable,{loading:z||R,items:V,sorting:!0,itemId:"id",columns:Z,rowProps:e=>{var t;return{className:L&&null!==(t=L[e.actionTypeId])&&void 0!==t&&t.enabled?"":"actConnectorsList__tableRowDisabled","data-test-subj":"connectors-row"}},cellProps:e=>{var t;return{"data-test-subj":"cell",className:L&&null!==(t=L[e.actionTypeId])&&void 0!==t&&t.enabled?"":"actConnectorsList__tableCellDisabled"}},"data-test-subj":"actionsTable",pagination:{initialPageIndex:0,pageIndex:D},onTableChange:({page:e})=>{e&&w(e.index)},selection:I?{onSelectionChange(e){P(e)},selectable:({isPreconfigured:e})=>!e}:void 0,search:{filters:[{type:"field_value_selection",field:"actionTypeId",name:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.filters.actionTypeIdName",{defaultMessage:"Type"}),multiSelect:"or",options:J}],toolsLeft:0!==B.length&&I?[Object(n.jsx)(c.EuiButton,{key:"delete",iconType:"trash",color:"danger","data-test-subj":"bulkDelete",onClick:()=>{K(B.map((e=>e.id)))},title:I?void 0:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.buttons.deleteDisabledTitle",{defaultMessage:"Unable to delete connectors"})},Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionsConnectorsList.buttons.deleteLabel",defaultMessage:"Delete {count}",values:{count:B.length}}))]:[],toolsRight:v?[Object(n.jsx)(c.EuiButton,{"data-test-subj":"createActionButton",key:"create-action",fill:!0,onClick:()=>G(!0)},Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionsConnectorsList.addActionButtonLabel",defaultMessage:"Create connector"}))]:[]}});return Object(n.jsx)("section",{"data-test-subj":"actionsList"},Object(n.jsx)(j.a,{onDeleted:e=>{if(0===B.length||B.length===e.length){const e=_.filter((e=>e.id&&!Y.includes(e.id)));U(e),P([])}K([])},onErrors:async()=>{await Q(),K([])},onCancel:async()=>{K([])},apiDeleteCall:g.b,idsToDelete:Y,singleTitle:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.singleTitle",{defaultMessage:"connector"}),multipleTitle:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.multipleTitle",{defaultMessage:"connectors"}),setIsLoadingState:e=>N(e)}),Object(n.jsx)(c.EuiSpacer,{size:"m"}),(z||R)&&Object(n.jsx)(O.a,null),0!==V.length&&ee,0===V.length&&v&&!z&&!R&&Object(n.jsx)(m,{onCTAClicked:()=>G(!0)}),0===V.length&&!v&&Object(n.jsx)(F,null),H?Object(n.jsx)(T.default,{onClose:()=>{G(!1)},onTestConnector:e=>X(e,x.h.Test),reloadConnectors:Q,actionTypeRegistry:u}):null,q.initialConnector?Object(n.jsx)(C.default,{key:`${q.initialConnector.id}${q.tab?`:${q.tab}`:""}`,initialConnector:q.initialConnector,tab:q.tab,onClose:()=>{W(Object(r.omit)(q,"initialConnector"))},reloadConnectors:Q,actionTypeRegistry:u}):null)};function h(e,t){return e.filter((e=>e.actionTypeId===t)).length}const k=({item:e,canDelete:t,onDelete:s})=>e.isPreconfigured?Object(n.jsx)(c.EuiFlexItem,{grow:!1},Object(n.jsx)(c.EuiBetaBadge,{"data-test-subj":"preConfiguredTitleMessage",label:a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.preconfiguredTitleMessage",{defaultMessage:"Preconfigured"}),tooltipContent:"This connector can't be deleted."})):Object(n.jsx)(c.EuiFlexItem,{grow:!1},Object(n.jsx)(c.EuiToolTip,{content:t?a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.deleteActionDescription",{defaultMessage:"Delete this connector"}):a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.deleteActionDisabledDescription",{defaultMessage:"Unable to delete connectors"})},Object(n.jsx)(c.EuiButtonIcon,{isDisabled:!t,"data-test-subj":"deleteConnector","aria-label":a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.deleteActionName",{defaultMessage:"Delete"}),onClick:s,iconType:"trash"}))),A=({item:e,canExecute:t,onRun:s})=>Object(n.jsx)(c.EuiFlexItem,{grow:!1},Object(n.jsx)(c.EuiToolTip,{content:t?a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.runConnectorDescription",{defaultMessage:"Run this connector"}):a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.runConnectorDisabledDescription",{defaultMessage:"Unable to run connectors"})},Object(n.jsx)(c.EuiButtonIcon,{isDisabled:!t,"data-test-subj":"runConnector","aria-label":a.i18n.translate("xpack.triggersActionsUI.sections.actionsConnectorsList.connectorsListTable.columns.actions.runConnectorName",{defaultMessage:"Run"}),onClick:s,iconType:"play"}))),F=()=>Object(n.jsx)(c.EuiEmptyPrompt,{iconType:"securityApp",title:Object(n.jsx)("h1",null,Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionsConnectorsList.noPermissionToCreateTitle",defaultMessage:"No permissions to create connectors"})),body:Object(n.jsx)("p",{"data-test-subj":"permissionDeniedMessage"},Object(n.jsx)(l.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionsConnectorsList.noPermissionToCreateDescription",defaultMessage:"Contact your system administrator."}))})},66:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return I}));var n=s(1),o=s.n(n),i=s(76),c=s(15),a=s(0),r=s(122),l=s(9),u=s(130),d=s(47),g=s(3);const b=({connector:e,executeEnabled:t,executionResult:s,actionParams:l,setActionParams:u,onExecutAction:b,isExecutingAction:m,actionTypeRegistry:f})=>{const[O,C]=Object(n.useState)({}),[T,y]=Object(n.useState)(!1),E=f.get(e.actionTypeId),I=E.actionParamsFields;Object(n.useEffect)((()=>{(async()=>{const e=(await(null==E?void 0:E.validateParams(l))).errors;C({...e}),y(!!Object.values(e).find((e=>e.length>0)))})()}),[E,l]);const h=[{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.createActionHeader",{defaultMessage:"Create an action"}),children:I?Object(g.jsx)(c.EuiErrorBoundary,null,Object(g.jsx)(n.Suspense,{fallback:Object(g.jsx)(c.EuiFlexGroup,{justifyContent:"center"},Object(g.jsx)(c.EuiFlexItem,{grow:!1},Object(g.jsx)(c.EuiLoadingSpinner,{size:"m"})))},Object(g.jsx)(I,{actionParams:l,index:0,errors:O,editAction:(e,t)=>u({...l,[e]:t}),messageVariables:[],actionConnector:e}))):Object(g.jsx)(c.EuiText,null,Object(g.jsx)("p",null,Object(g.jsx)(i.FormattedMessage,{id:"xpack.triggersActionsUI.sections.testConnectorForm.noActionParametersRequiredText",defaultMessage:"This Connector does not require any Action Parameter."})))},{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.runTestHeader",{defaultMessage:"Run the test"}),children:Object(g.jsx)(o.a.Fragment,null,t?null:Object(g.jsx)(o.a.Fragment,null,Object(g.jsx)(c.EuiCallOut,{iconType:"alert",color:"warning"},Object(g.jsx)("p",null,Object(g.jsx)(i.FormattedMessage,{defaultMessage:"Save your changes before testing the connector.",id:"xpack.triggersActionsUI.sections.testConnectorForm.executeTestDisabled"}))),Object(g.jsx)(c.EuiSpacer,{size:"s"})),Object(g.jsx)(c.EuiText,null,Object(g.jsx)(c.EuiButton,{iconType:"play",isLoading:m,isDisabled:!t||T||m,"data-test-subj":"executeActionButton",onClick:b},Object(g.jsx)(i.FormattedMessage,{defaultMessage:"Run",id:"xpack.triggersActionsUI.sections.testConnectorForm.executeTestButton"}))))},{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.testResultsHeader",{defaultMessage:"Results"}),children:Object(d.pipe)(s,Object(r.map)((e=>"ok"===e.status?Object(g.jsx)(p,null):Object(g.jsx)(x,{executionResult:e}))),Object(r.getOrElse)((()=>Object(g.jsx)(j,null))))}];return Object(g.jsx)(c.EuiSteps,{steps:h})},j=()=>Object(g.jsx)(c.EuiCallOut,{"data-test-subj":"executionAwaiting"},Object(g.jsx)("p",null,Object(g.jsx)(i.FormattedMessage,{defaultMessage:"When you run the test, the results will show up here.",id:"xpack.triggersActionsUI.sections.testConnectorForm.awaitingExecutionDescription"}))),p=()=>Object(g.jsx)(c.EuiCallOut,{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionSuccessfulTitle",{defaultMessage:"Test was successful",values:{}}),color:"success","data-test-subj":"executionSuccessfulResult",iconType:"check"},Object(g.jsx)("p",null,Object(g.jsx)(i.FormattedMessage,{defaultMessage:"Ensure the results are what you expect.",id:"xpack.triggersActionsUI.sections.testConnectorForm.executionSuccessfulDescription"}))),x=({executionResult:{message:e,serviceMessage:t}})=>{const s=[{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureDescription",{defaultMessage:"The following error was found:"}),description:null!=e?e:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureUnknownReason",{defaultMessage:"Unknown reason"})}];return t&&s.push({title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureAdditionalDetails",{defaultMessage:"Details:"}),description:t}),Object(g.jsx)(c.EuiCallOut,{title:a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.executionFailureTitle",{defaultMessage:"Test failed to run"}),"data-test-subj":"executionFailureResult",color:"danger",iconType:"alert"},Object(g.jsx)(c.EuiDescriptionList,{textStyle:"reverse",listItems:s}))};var m=s(16),f=s(131),O=s(45),C=s(112),T=(s(163),s(43)),y=s(6),E=s(46);const I=({initialConnector:e,onClose:t,tab:s=m.h.Configuration,reloadConnectors:d,consumer:j,actionTypeRegistry:p})=>{const[x,I]=Object(n.useState)(!0),{http:h,notifications:{toasts:k},docLinks:A,application:{capabilities:F}}=Object(T.b)().services,M=()=>({...e,secrets:{}}),v=Object(C.e)(F),L=Object(f.a)(),[{connector:S},_]=Object(n.useReducer)(L,{connector:M()}),[U,D]=Object(n.useState)(!1),[w,B]=Object(n.useState)({configErrors:{},connectorBaseErrors:{},connectorErrors:{},secretsErrors:{}}),P=p.get(S.actionTypeId);Object(n.useEffect)((()=>{(async()=>{D(!0);const e=await Object(u.b)(S,P);I(!!Object.keys(e.connectorErrors).find((t=>e.connectorErrors[t].length>=1))),D(!1),B({...e})})()}),[S,P]);const[R,N]=Object(n.useState)(!1),[z,$]=Object(n.useState)(s),[H,G]=Object(n.useState)(!1),q=e=>{_({command:{type:"setConnector"},payload:{key:"connector",value:e}})},[W,Y]=Object(n.useState)({}),[K,V]=Object(n.useState)(r.none),[J,Q]=Object(n.useState)(!1),X=Object(n.useCallback)((()=>$((e=>e===m.h.Configuration?m.h.Test:(K!==r.none&&V(r.none),m.h.Configuration)))),[K]),[Z,ee]=Object(n.useState)(null),te=Object(n.useCallback)((()=>{q(M()),G(!1),V(r.none),t()}),[t]),se=S.isPreconfigured?Object(g.jsx)(o.a.Fragment,null,Object(g.jsx)(c.EuiTitle,{size:"s"},Object(g.jsx)("h3",{id:"flyoutTitle"},Object(g.jsx)(i.FormattedMessage,{defaultMessage:"{connectorName}",id:"xpack.triggersActionsUI.sections.preconfiguredConnectorForm.flyoutTitle",values:{connectorName:e.name}})," ",Object(g.jsx)(c.EuiBetaBadge,{label:"Preconfigured","data-test-subj":"preconfiguredBadge",tooltipContent:a.i18n.translate("xpack.triggersActionsUI.sections.preconfiguredConnectorForm.tooltipContent",{defaultMessage:"This connector is preconfigured and cannot be edited"})}))),Object(g.jsx)(c.EuiText,{size:"s"},Object(g.jsx)(i.FormattedMessage,{defaultMessage:"{actionDescription}",id:"xpack.triggersActionsUI.sections.editConnectorForm.actionTypeDescription",values:{actionDescription:P.selectMessage}}))):Object(g.jsx)(c.EuiTitle,{size:"s"},Object(g.jsx)("h3",{id:"flyoutTitle"},Object(g.jsx)(i.FormattedMessage,{defaultMessage:"Edit connector",id:"xpack.triggersActionsUI.sections.editConnectorForm.flyoutPreconfiguredTitle"}))),ne=async(e=!0)=>{if(x)return void q(Object(y.a)(S,w.configErrors,w.secretsErrors,w.connectorBaseErrors));N(!0);try{var t;await(null==Z||null===(t=Z.beforeActionConnectorSave)||void 0===t?void 0:t.call(Z))}catch(e){return void N(!1)}const s=await(async()=>await Object(O.f)({http:h,connector:S,id:S.id}).then((e=>(k.addSuccess(a.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.updateSuccessNotificationText",{defaultMessage:"Updated '{connectorName}'",values:{connectorName:e.name}})),e))).catch((e=>{var t,s;k.addDanger(null!==(t=null===(s=e.body)||void 0===s?void 0:s.message)&&void 0!==t?t:a.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.updateErrorNotificationText",{defaultMessage:"Cannot update a connector."}))})))();var n;N(!1),s&&(G(!1),await(null==Z||null===(n=Z.afterActionConnectorSave)||void 0===n?void 0:n.call(Z,s)),e&&te(),S.isMissingSecrets&&(S.isMissingSecrets=!1),d&&d())};return Object(g.jsx)(c.EuiFlyout,{onClose:te,"aria-labelledby":"flyoutActionEditTitle",size:"m"},Object(g.jsx)(c.EuiFlyoutHeader,{hasBorder:!0},Object(g.jsx)(c.EuiFlexGroup,{gutterSize:"s",alignItems:"center"},P?Object(g.jsx)(c.EuiFlexItem,{grow:!1},Object(g.jsx)(c.EuiIcon,{type:P.iconClass,size:"m"})):null,Object(g.jsx)(c.EuiFlexItem,null,se)),Object(g.jsx)(c.EuiTabs,{className:"connectorEditFlyoutTabs"},Object(g.jsx)(c.EuiTab,{onClick:X,"data-test-subj":"configureConnectorTab",isSelected:m.h.Configuration===z},a.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.tabText",{defaultMessage:"Configuration"})),Object(g.jsx)(c.EuiTab,{onClick:X,"data-test-subj":"testConnectorTab",isSelected:m.h.Test===z},a.i18n.translate("xpack.triggersActionsUI.sections.testConnectorForm.tabText",{defaultMessage:"Test"})))),Object(g.jsx)(c.EuiFlyoutBody,null,z===m.h.Configuration?S.isPreconfigured?Object(g.jsx)(o.a.Fragment,null,Object(g.jsx)(c.EuiText,null,a.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.descriptionText",{defaultMessage:"This connector is readonly."})),Object(g.jsx)(c.EuiLink,{href:A.links.alerting.preconfiguredConnectors,target:"_blank"},Object(g.jsx)(i.FormattedMessage,{id:"xpack.triggersActionsUI.sections.editConnectorForm.preconfiguredHelpLabel",defaultMessage:"Learn more about preconfigured connectors."}))):Object(g.jsx)(o.a.Fragment,null,Object(g.jsx)(u.a,{connector:S,errors:w.connectorErrors,dispatch:e=>{G(!0),V(r.none),_(e)},actionTypeRegistry:p,consumer:j,setCallbacks:ee,isEdit:!0}),U?Object(g.jsx)(o.a.Fragment,null,Object(g.jsx)(c.EuiSpacer,{size:"m"}),Object(g.jsx)(E.a,{size:"l"})," "):Object(g.jsx)(o.a.Fragment,null)):Object(g.jsx)(b,{connector:S,executeEnabled:!H,actionParams:W,setActionParams:Y,onExecutAction:()=>(Q(!0),Object(O.c)({id:S.id,params:W,http:h}).then((e=>(Q(!1),V(Object(r.some)(e)),e))).catch((e=>{const t=Object(l.isActionTypeExecutorResult)(e)?e:{actionId:S.id,status:"error",message:e.message};return Q(!1),V(Object(r.some)(t)),t}))),isExecutingAction:J,executionResult:K,actionTypeRegistry:p})),Object(g.jsx)(c.EuiFlyoutFooter,null,Object(g.jsx)(c.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(g.jsx)(c.EuiFlexItem,{grow:!1},Object(g.jsx)(c.EuiButtonEmpty,{onClick:te,"data-test-subj":"cancelSaveEditedConnectorButton"},a.i18n.translate("xpack.triggersActionsUI.sections.editConnectorForm.cancelButtonLabel",{defaultMessage:"Cancel"}))),Object(g.jsx)(c.EuiFlexItem,{grow:!1},Object(g.jsx)(c.EuiFlexGroup,{justifyContent:"spaceBetween"},v&&P&&!S.isPreconfigured?Object(g.jsx)(o.a.Fragment,null,Object(g.jsx)(c.EuiFlexItem,{grow:!1},Object(g.jsx)(c.EuiButton,{color:"success","data-test-subj":"saveEditedActionButton",isLoading:R||J,onClick:async()=>{await ne(!1)}},Object(g.jsx)(i.FormattedMessage,{id:"xpack.triggersActionsUI.sections.editConnectorForm.saveButtonLabel",defaultMessage:"Save"}))),Object(g.jsx)(c.EuiFlexItem,{grow:!1},Object(g.jsx)(c.EuiButton,{fill:!0,color:"success","data-test-subj":"saveAndCloseEditedActionButton",type:"submit",isLoading:R||J,onClick:async()=>{await ne()}},Object(g.jsx)(i.FormattedMessage,{id:"xpack.triggersActionsUI.sections.editConnectorForm.saveAndCloseButtonLabel",defaultMessage:"Save & close"})))):null)))))}}}]);