/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[45],{112:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r}));const o=e=>{var t;return null==e||null===(t=e.actions)||void 0===t?void 0:t.show},c=e=>{var t;return null==e||null===(t=e.actions)||void 0===t?void 0:t.save},i=e=>{var t;return null==e||null===(t=e.actions)||void 0===t?void 0:t.execute},s=e=>{var t;return null==e||null===(t=e.actions)||void 0===t?void 0:t.delete};function a(e,t){var n,o;return null!==(n=null==t||null===(o=t.authorizedConsumers[e.consumer])||void 0===o?void 0:o.all)&&void 0!==n&&n}const r=e=>{var t,n;return null==e||null===(t=e.management)||void 0===t||null===(n=t.security)||void 0===n?void 0:n.api_keys}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=(e,t,n)=>{const o=n[t.actionTypeId];return e.filter((e=>e.actionTypeId===t.actionTypeId&&((null==o?void 0:o.enabledInConfig)||e.isPreconfigured)))}},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(15),c=n(1),i=n.n(c),s=n(0),a=n(135),r=n(3);const l=i.a.memo(d);function d({actionItem:e,accordionIndex:t,actionTypesIndex:n,actionTypeRegistered:i,connectors:s,onConnectorSelected:l}){var d;const b=Object(c.useMemo)((()=>Object(a.a)(s,e,n)),[e,n,s]),m=Object(c.useMemo)((()=>u(e.id,b,i)),[e.id,b,i]),g=Object(c.useMemo)((()=>j(b,i)),[b,i]),[x,I]=Object(c.useState)(m.length>0?m[0]:void 0),A=Object(c.useCallback)((e=>{var t,n;I(e[0]),l(null!==(t=null===(n=e[0].value)||void 0===n?void 0:n.id)&&void 0!==t?t:"")}),[l]);return Object(r.jsx)(o.EuiComboBox,{"aria-label":p,"data-test-subj":`selectActionConnector-${e.actionTypeId}-${t}`,fullWidth:!0,singleSelection:{asPlainText:!0},id:`selectActionConnector-${e.id}`,isClearable:!1,onChange:A,options:g,selectedOptions:m,prepend:null==x||null===(d=x.value)||void 0===d?void 0:d.prependComponent})}const u=(e,t,n)=>{const o=t.find((t=>t.id===e));return o?[b(o,n)]:[]},j=(e,t)=>e.map((e=>b(e,t))),b=(e,t)=>{const n=m(e,t);let o;if(null!=t.customConnectorSelectItem){const n=t.customConnectorSelectItem.getComponent(e);n&&(o=Object(r.jsx)(n,{actionConnector:e}))}return{label:n,value:{title:n,id:e.id,prependComponent:o},key:e.id,"data-test-subj":`dropdown-connector-${e.id}`}},m=(e,t)=>null!=t.customConnectorSelectItem?t.customConnectorSelectItem.getText(e):e.name,p=s.i18n.translate("xpack.triggersActionsUI.sections.actionForm.incidentManagementSystemLabel",{defaultMessage:"Incident management system"})},80:function(e,t,n){"use strict";n.r(t),n.d(t,"AddConnectorInline",(function(){return b})),n.d(t,"default",(function(){return b}));var o=n(1),c=n.n(o),i=n(0),s=n(76),a=n(15),r=n(112),l=n(43),d=n(135),u=n(145),j=n(3);const b=({actionTypesIndex:e,actionItem:t,index:n,connectors:b,onAddConnector:m,onDeleteConnector:p,onSelectConnector:g,actionTypeRegistry:x,emptyActionsIds:I})=>{const{application:{capabilities:A}}=Object(l.b)().services,O=Object(r.e)(A),[C,f]=Object(o.useState)(!1),[v,y]=Object(o.useState)(!1),T=e?e[t.actionTypeId].name:t.actionTypeId,E=x.get(t.actionTypeId),M=Object(o.useMemo)((()=>[`Unable to load ${E.actionTypeTitle} connector`]),[E.actionTypeTitle]),F=Object(j.jsx)(s.FormattedMessage,{id:"xpack.triggersActionsUI.sections.connectorAddInline.emptyConnectorsLabel",defaultMessage:"No {actionTypeName} connectors",values:{actionTypeName:T}}),k=Object(j.jsx)(a.EuiText,{color:"danger"},Object(j.jsx)(s.FormattedMessage,{id:"xpack.triggersActionsUI.sections.connectorAddInline.unableToLoadConnectorTitle",defaultMessage:"Unable to load connector"}));Object(o.useEffect)((()=>{Object(d.a)(b,t,e).length>0&&f(!0),y(!!I.find((e=>t.id===e)))}),[]);const S=Object(j.jsx)(a.EuiFormRow,{fullWidth:!0,label:Object(j.jsx)(s.FormattedMessage,{id:"xpack.triggersActionsUI.sections.connectorAddInline.connectorAddInline.actionIdLabel",defaultMessage:"Use another {connectorInstance} connector",values:{connectorInstance:T}}),labelAppend:Object(j.jsx)(a.EuiButtonEmpty,{size:"xs","data-test-subj":`addNewActionConnectorButton-${t.actionTypeId}`,onClick:m},Object(j.jsx)(s.FormattedMessage,{defaultMessage:"Add connector",id:"xpack.triggersActionsUI.sections.connectorAddInline.connectorAddInline.addNewConnectorEmptyButton"})),error:M,isInvalid:!0},Object(j.jsx)(u.a,{actionItem:t,accordionIndex:n,actionTypesIndex:e,actionTypeRegistered:E,connectors:b,onConnectorSelected:g}));return Object(j.jsx)(c.a.Fragment,null,Object(j.jsx)(a.EuiAccordion,{key:n,initialIsOpen:!0,id:n.toString(),className:"actAccordionActionForm",buttonContentClassName:"actAccordionActionForm__button","data-test-subj":`alertActionAccordion-${n}`,buttonContent:Object(j.jsx)(a.EuiFlexGroup,{gutterSize:"s",alignItems:"center"},Object(j.jsx)(a.EuiFlexItem,{grow:!1},Object(j.jsx)(a.EuiIcon,{type:E.iconClass,size:"m"})),Object(j.jsx)(a.EuiFlexItem,null,Object(j.jsx)(a.EuiText,null,Object(j.jsx)("div",null,Object(j.jsx)(s.FormattedMessage,{defaultMessage:"{actionConnectorName}",id:"xpack.triggersActionsUI.sections.connectorAddInline.newRuleActionTypeEditTitle",values:{actionConnectorName:E.actionTypeTitle}})))),!v&&Object(j.jsx)(a.EuiFlexItem,{grow:!1},Object(j.jsx)(a.EuiIconTip,{type:"alert",size:"m",color:"danger","data-test-subj":"alertActionAccordionErrorTooltip",content:Object(j.jsx)(s.FormattedMessage,{defaultMessage:"Unable to load connector",id:"xpack.triggersActionsUI.sections.connectorAddInline.unableToLoadConnectorTitle'"})}))),extraAction:Object(j.jsx)(a.EuiButtonIcon,{iconType:"minusInCircle",color:"danger",className:"actAccordionActionForm__extraAction","aria-label":i.i18n.translate("xpack.triggersActionsUI.sections.connectorAddInline.accordion.deleteIconAriaLabel",{defaultMessage:"Delete"}),onClick:p}),paddingSize:"l"},O?C?S:Object(j.jsx)(a.EuiEmptyPrompt,{title:v?F:k,actions:Object(j.jsx)(a.EuiButton,{color:"primary",fill:!0,size:"s","data-test-subj":`createActionConnectorButton-${n}`,onClick:m},Object(j.jsx)(s.FormattedMessage,{id:"xpack.triggersActionsUI.sections.connectorAddInline.addConnectorButtonLabel",defaultMessage:"Create a connector"}))}):Object(j.jsx)(a.EuiCallOut,{title:F},Object(j.jsx)("p",null,Object(j.jsx)(s.FormattedMessage,{id:"xpack.triggersActionsUI.sections.connectorAddInline.unauthorizedToCreateForEmptyConnectors",defaultMessage:"Only authorized users can configure a connector. Contact your administrator."})))),Object(j.jsx)(a.EuiSpacer,{size:"xs"}))}}}]);