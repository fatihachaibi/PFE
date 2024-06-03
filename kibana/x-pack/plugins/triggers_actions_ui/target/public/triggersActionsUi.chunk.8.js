/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[8,13,45],{107:function(e,t,n){"use strict";var a,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function c(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],i=0;i<e.length;i++){var s=e[i],r=t.base?s[0]+t.base:s[0],l=n[r]||0,d="".concat(r," ").concat(l);n[r]=l+1;var u=c(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:f(p,t),references:1}),a.push(d)}return a}function r(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,a){var i=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(o,c[t]):e.appendChild(o)}}function p(e,t,n){var a=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var b=null,g=0;function f(e,t){var n,a,i;if(t.singleton){var o=g++;n=b||(b=r(t)),a=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=r(t),a=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var i=c(n[a]);o[i].references--}for(var r=s(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=r}}}},108:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,a,i,o=e[1]||"",c=e[3];if(!c)return o;if(t&&"function"==typeof btoa){var s=(n=c,a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(i," */")),r=c.sources.map((function(e){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(e," */")}));return[o].concat(r).concat([s]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var r=[].concat(e[s]);a&&i[r[0]]||(n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),t.push(r))}},t}},112:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return r}));const a=e=>{var t;return null==e||null===(t=e.actions)||void 0===t?void 0:t.show},i=e=>{var t;return null==e||null===(t=e.actions)||void 0===t?void 0:t.save},o=e=>{var t;return null==e||null===(t=e.actions)||void 0===t?void 0:t.execute},c=e=>{var t;return null==e||null===(t=e.actions)||void 0===t?void 0:t.delete};function s(e,t){var n,a;return null!==(n=null==t||null===(a=t.authorizedConsumers[e.consumer])||void 0===a?void 0:a.all)&&void 0!==n&&n}const r=e=>{var t,n;return null==e||null===(t=e.management)||void 0===t||null===(n=t.security)||void 0===n?void 0:n.api_keys}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n(1);var a=n(15),i=n(3);const o=({children:e})=>Object(i.jsx)(a.EuiEmptyPrompt,{title:Object(i.jsx)(a.EuiLoadingSpinner,{size:"xl"}),body:Object(i.jsx)(a.EuiText,{color:"subdued"},e),"data-test-subj":"sectionLoading"})},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return p})),n(1);var a=n(5),i=n(0),o=n(76),c=n(15),s=n(10),r=(n(158),n(3));const l=e=>({isEnabled:!1,message:i.i18n.translate("xpack.triggersActionsUI.checkActionTypeEnabled.actionTypeDisabledByLicenseMessage",{defaultMessage:"This connector requires a {minimumLicenseRequired} license.",values:{minimumLicenseRequired:Object(a.upperFirst)(e.minimumLicenseRequired)}}),messageCard:Object(r.jsx)(c.EuiCard,{titleSize:"xs",title:i.i18n.translate("xpack.triggersActionsUI.licenseCheck.actionTypeDisabledByLicenseMessageTitle",{defaultMessage:"This feature requires a {minimumLicenseRequired} license.",values:{minimumLicenseRequired:Object(a.upperFirst)(e.minimumLicenseRequired)}}),description:i.i18n.translate("xpack.triggersActionsUI.licenseCheck.actionTypeDisabledByLicenseMessageDescription",{defaultMessage:"To re-enable this action, please upgrade your license."}),className:"actCheckActionTypeEnabled__disabledActionWarningCard",children:Object(r.jsx)(c.EuiLink,{href:s.VIEW_LICENSE_OPTIONS_LINK,target:"_blank"},Object(r.jsx)(o.FormattedMessage,{defaultMessage:"View license options",id:"xpack.triggersActionsUI.licenseCheck.actionTypeDisabledByLicenseLinkTitle"}))})}),d={isEnabled:!1,message:i.i18n.translate("xpack.triggersActionsUI.checkActionTypeEnabled.actionTypeDisabledByConfigMessage",{defaultMessage:"This connector is disabled by the Kibana configuration."}),messageCard:Object(r.jsx)(c.EuiCard,{title:i.i18n.translate("xpack.triggersActionsUI.licenseCheck.actionTypeDisabledByConfigMessageTitle",{defaultMessage:"This feature is disabled by the Kibana configuration."}),description:"",className:"actCheckActionTypeEnabled__disabledActionWarningCard"})};function u(e){return!1===(null==e?void 0:e.enabledInLicense)?l(e):!1===(null==e?void 0:e.enabledInConfig)?d:{isEnabled:!0}}function p(e,t){return!1===(null==e?void 0:e.enabledInLicense)?l(e):!1!==(null==e?void 0:e.enabledInConfig)||t.find((t=>t.actionTypeId===e.id))?{isEnabled:!0}:d}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=(e,t,n)=>{const a=n[t.actionTypeId];return e.filter((e=>e.actionTypeId===t.actionTypeId&&((null==a?void 0:a.enabledInConfig)||e.isPreconfigured)))}},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(15),i=n(1),o=n.n(i),c=n(0),s=n(135),r=n(3);const l=o.a.memo(d);function d({actionItem:e,accordionIndex:t,actionTypesIndex:n,actionTypeRegistered:o,connectors:c,onConnectorSelected:l}){var d;const b=Object(i.useMemo)((()=>Object(s.a)(c,e,n)),[e,n,c]),g=Object(i.useMemo)((()=>u(e.id,b,o)),[e.id,b,o]),m=Object(i.useMemo)((()=>p(b,o)),[b,o]),[j,x]=Object(i.useState)(g.length>0?g[0]:void 0),A=Object(i.useCallback)((e=>{var t,n;x(e[0]),l(null!==(t=null===(n=e[0].value)||void 0===n?void 0:n.id)&&void 0!==t?t:"")}),[l]);return Object(r.jsx)(a.EuiComboBox,{"aria-label":f,"data-test-subj":`selectActionConnector-${e.actionTypeId}-${t}`,fullWidth:!0,singleSelection:{asPlainText:!0},id:`selectActionConnector-${e.id}`,isClearable:!1,onChange:A,options:m,selectedOptions:g,prepend:null==j||null===(d=j.value)||void 0===d?void 0:d.prependComponent})}const u=(e,t,n)=>{const a=t.find((t=>t.id===e));return a?[b(a,n)]:[]},p=(e,t)=>e.map((e=>b(e,t))),b=(e,t)=>{const n=g(e,t);let a;if(null!=t.customConnectorSelectItem){const n=t.customConnectorSelectItem.getComponent(e);n&&(a=Object(r.jsx)(n,{actionConnector:e}))}return{label:n,value:{title:n,id:e.id,prependComponent:a},key:e.id,"data-test-subj":`dropdown-connector-${e.id}`}},g=(e,t)=>null!=t.customConnectorSelectItem?t.customConnectorSelectItem.getText(e):e.name,f=c.i18n.translate("xpack.triggersActionsUI.sections.actionForm.incidentManagementSystemLabel",{defaultMessage:"Incident management system"})},157:function(e,t,n){"use strict";function a(e,t,n){const a=i(e,n),o=i(t,n);return!0===a&&!1===o?-1:!1===a&&!0===o?1:e.name.localeCompare(t.name)}n.d(t,"a",(function(){return a}));const i=(e,t)=>{let n=e.enabled;return!e.enabledInConfig&&t&&t.length>0&&(n=void 0!==t.find((t=>t.actionTypeId===e.id))),n}},158:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(159);case"v8light":return n(161)}},159:function(e,t,n){var a=n(107),i=n(160);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);a(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},160:function(e,t,n){(t=n(108)(!1)).push([e.i,".actCheckActionTypeEnabled__disabledActionWarningCard{background-color:#25262E}.actAccordionActionForm{background-color:#25262E}.actAccordionActionForm .euiCard{box-shadow:none}.actAccordionActionForm__button{padding:12px}.actConnectorsListGrid .euiToolTipAnchor,.actConnectorsListGrid .euiCard{height:100%}\n",""]),e.exports=t},161:function(e,t,n){var a=n(107),i=n(162);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);a(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},162:function(e,t,n){(t=n(108)(!1)).push([e.i,".actCheckActionTypeEnabled__disabledActionWarningCard{background-color:#F5F7FA}.actAccordionActionForm{background-color:#F5F7FA}.actAccordionActionForm .euiCard{box-shadow:none}.actAccordionActionForm__button{padding:12px}.actConnectorsListGrid .euiToolTipAnchor,.actConnectorsListGrid .euiCard{height:100%}\n",""]),e.exports=t},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n(0),i=n(5),o=n(16);function c(e,t){const n=t?"all"===t?Object(i.pick)(e,o.j):Object(i.pick)(e,[...o.j,...o.g]):e,c=function(){const e=[];return e.push({name:s.ruleId,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.ruleIdLabel",{defaultMessage:"The ID of the rule."})}),e.push({name:s.ruleName,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.ruleNameLabel",{defaultMessage:"The name of the rule."})}),e.push({name:s.ruleSpaceId,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.ruleSpaceIdLabel",{defaultMessage:"The space ID of the rule."})}),e.push({name:s.ruleTags,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.ruleTagsLabel",{defaultMessage:"The tags of the rule."})}),e.push({name:s.ruleType,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.ruleTypeLabel",{defaultMessage:"The type of rule."})}),e.push({name:s.date,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.dateLabel",{defaultMessage:"The date the rule scheduled the action."})}),e.push({name:s.alertId,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.alertIdLabel",{defaultMessage:"The ID of the alert that scheduled actions for the rule."})}),e.push({name:s.alertActionGroup,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.alertActionGroupLabel",{defaultMessage:"The action group of the alert that scheduled actions for the rule."})}),e.push({name:s.alertActionSubgroup,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.alertActionSubgroupLabel",{defaultMessage:"The action subgroup of the alert that scheduled actions for the rule."})}),e.push({name:s.alertActionGroupName,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.alertActionGroupNameLabel",{defaultMessage:"The human readable name of the action group of the alert that scheduled actions for the rule."})}),e.push({name:"kibanaBaseUrl",description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.kibanaBaseUrlLabel",{defaultMessage:"The configured server.publicBaseUrl value or empty string if not configured."})}),e.push({name:r.alertId,deprecated:!0,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.legacyAlertIdLabel",{defaultMessage:"This has been deprecated in favor of {variable}.",values:{variable:s.ruleId}})}),e.push({name:r.alertName,deprecated:!0,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.legacyAlertNameLabel",{defaultMessage:"This has been deprecated in favor of {variable}.",values:{variable:s.ruleName}})}),e.push({name:r.alertInstanceId,deprecated:!0,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.legacyAlertInstanceIdLabel",{defaultMessage:"This has been deprecated in favor of {variable}.",values:{variable:s.alertId}})}),e.push({name:r.alertActionGroup,deprecated:!0,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.legacyAlertActionGroupLabel",{defaultMessage:"This has been deprecated in favor of {variable}.",values:{variable:s.alertActionGroup}})}),e.push({name:r.alertActionGroupName,deprecated:!0,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.legacyAlertActionGroupNameLabel",{defaultMessage:"This has been deprecated in favor of {variable}.",values:{variable:s.alertActionGroupName}})}),e.push({name:r.alertActionSubgroup,deprecated:!0,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.legacyAlertActionSubGroupLabel",{defaultMessage:"This has been deprecated in favor of {variable}.",values:{variable:s.alertActionSubgroup}})}),e.push({name:r.spaceId,deprecated:!0,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.legacySpaceIdLabel",{defaultMessage:"This has been deprecated in favor of {variable}.",values:{variable:s.ruleSpaceId}})}),e.push({name:r.tags,deprecated:!0,description:a.i18n.translate("xpack.triggersActionsUI.actionVariables.legacyTagsLabel",{defaultMessage:"This has been deprecated in favor of {variable}.",values:{variable:s.ruleTags}})}),e}(),d=l(n.params,"params."),u=n.context?l(n.context,"context."):[],p=n.state?l(n.state,"state."):[];return c.concat(u,d,p)}let s,r;function l(e,t){return e.map((e=>({...e,name:`${t}${e.name}`})))}!function(e){e.ruleId="rule.id",e.ruleName="rule.name",e.ruleSpaceId="rule.spaceId",e.ruleTags="rule.tags",e.ruleType="rule.type",e.date="date",e.alertId="alert.id",e.alertActionGroup="alert.actionGroup",e.alertActionGroupName="alert.actionGroupName",e.alertActionSubgroup="alert.actionSubgroup"}(s||(s={})),function(e){e.alertId="alertId",e.alertName="alertName",e.alertInstanceId="alertInstanceId",e.alertActionGroup="alertActionGroup",e.alertActionGroupName="alertActionGroupName",e.alertActionSubgroup="alertActionSubgroup",e.tags="tags",e.spaceId="spaceId"}(r||(r={}))},71:function(e,t,n){"use strict";n.r(t),n.d(t,"ActionForm",(function(){return O})),n.d(t,"default",(function(){return O}));var a=n(1),i=n.n(a),o=n(0),c=n(76),s=n(15),r=n(45),l=n(124),d=n(5),u=n(134),p=n(112),b=n(168),g=n(43),f=n(145),m=n(3);const j=o.i18n.translate("xpack.triggersActionsUI.sections.actionForm.preconfiguredTitleMessage",{defaultMessage:"(preconfigured)"}),x=({actionItem:e,actionConnector:t,index:n,onAddConnector:r,onConnectorSelected:l,onDeleteAction:x,setActionParamsProperty:A,actionTypesIndex:I,connectors:y,defaultActionGroupId:h,defaultActionMessage:T,messageVariables:O,actionGroups:v,setActionGroupIdByIndex:C,actionTypeRegistry:E,isActionGroupDisabledForActionType:M,defaultParams:k})=>{var F,S;const{application:{capabilities:U}}=Object(g.b)().services,[L,N]=Object(a.useState)(!0),[w,G]=Object(a.useState)([]),_=null==v?void 0:v.find((({id:e})=>e===h)),B=null!==(F=null==v?void 0:v.find((({id:t})=>t===e.group)))&&void 0!==F?F:_,[D,z]=Object(a.useState)(),[V,R]=Object(a.useState)({errors:{}});Object(a.useEffect)((()=>{if(G(O?function(e,t){const n=Object(b.b)(e,null==t?void 0:t.omitMessageVariables);return Object(d.partition)(n,(e=>!0!==e.deprecated)).reduce(((e,t)=>[...e,...t.sort(((e,t)=>e.name.toUpperCase().localeCompare(t.name.toUpperCase())))]),[])}(O,B):[]),k)for(const[t,a]of Object.entries(k))void 0!==e.params[t]&&null!==e.params[t]||A(t,a,n)}),[e.group]),Object(a.useEffect)((()=>{if(k&&D)for(const[e,t]of Object.entries(k))A(e,t,n)}),[D]),Object(a.useEffect)((()=>{(async()=>{var t;const n=await(null===(t=E.get(e.actionTypeId))||void 0===t?void 0:t.validateParams(e.params));R(n)})()}),[e]);const P=Object(p.e)(U),$=(e,t)=>!!M&&M(e,t),W=E.get(t.actionTypeId);if(!W)return null;const q=W.actionParamsFields,H=Object(u.a)(I[t.actionTypeId],y.filter((e=>e.isPreconfigured))),K=H.isEnabled?Object(m.jsx)(i.a.Fragment,null,v&&B&&C&&Object(m.jsx)(i.a.Fragment,null,Object(m.jsx)(s.EuiSuperSelect,{prepend:Object(m.jsx)(s.EuiFormLabel,{htmlFor:`addNewActionConnectorActionGroup-${e.actionTypeId}`},Object(m.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionTypeForm.actionRunWhenInActionGroup",defaultMessage:"Run when"})),fullWidth:!0,id:`addNewActionConnectorActionGroup-${e.actionTypeId}`,"data-test-subj":`addNewActionConnectorActionGroup-${n}`,options:v.map((({id:t,name:a})=>{return{value:t,inputDisplay:(i=t,c=a,s=e.actionTypeId,M&&M(i,s)?o.i18n.translate("xpack.triggersActionsUI.sections.actionTypeForm.addNewActionConnectorActionGroup.display",{defaultMessage:"{actionGroupName} (Not Currently Supported)",values:{actionGroupName:c}}):c),disabled:$(t,e.actionTypeId),"data-test-subj":`addNewActionConnectorActionGroup-${n}-option-${t}`};var i,c,s})),valueOfSelected:B.id,onChange:e=>{C(e,n),z(e)}}),Object(m.jsx)(s.EuiSpacer,{size:"l"})),Object(m.jsx)(s.EuiFormRow,{fullWidth:!0,label:Object(m.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionTypeForm.actionIdLabel",defaultMessage:"{connectorInstance} connector",values:{connectorInstance:I?I[t.actionTypeId].name:t.actionTypeId}}),labelAppend:P&&I&&I[t.actionTypeId].enabledInConfig?Object(m.jsx)(s.EuiButtonEmpty,{size:"xs","data-test-subj":`addNewActionConnectorButton-${e.actionTypeId}`,onClick:r},Object(m.jsx)(c.FormattedMessage,{defaultMessage:"Add connector",id:"xpack.triggersActionsUI.sections.actionTypeForm.addNewConnectorEmptyButton"})):null},Object(m.jsx)(f.a,{actionItem:e,accordionIndex:n,actionTypesIndex:I,actionTypeRegistered:W,connectors:y,onConnectorSelected:l})),Object(m.jsx)(s.EuiSpacer,{size:"xl"}),q?Object(m.jsx)(s.EuiErrorBoundary,null,Object(m.jsx)(a.Suspense,{fallback:null},Object(m.jsx)(q,{actionParams:e.params,index:n,errors:V.errors,editAction:A,messageVariables:w,defaultMessage:null!==(S=null==B?void 0:B.defaultActionMessage)&&void 0!==S?S:T,actionConnector:t}))):null):H.messageCard;return Object(m.jsx)(s.EuiAccordion,{initialIsOpen:!0,key:n,id:n.toString(),onToggle:N,paddingSize:"l",className:"actAccordionActionForm",buttonContentClassName:"actAccordionActionForm__button","data-test-subj":`alertActionAccordion-${n}`,buttonContent:Object(m.jsx)(s.EuiFlexGroup,{gutterSize:"l",alignItems:"center"},Object(m.jsx)(s.EuiFlexItem,{grow:!1},Object(m.jsx)(s.EuiIcon,{type:W.iconClass,size:"m"})),Object(m.jsx)(s.EuiFlexItem,null,Object(m.jsx)(s.EuiText,null,Object(m.jsx)("div",null,Object(m.jsx)(s.EuiFlexGroup,{gutterSize:"s"},Object(m.jsx)(s.EuiFlexItem,{grow:!1},Object(m.jsx)(c.FormattedMessage,{defaultMessage:"{actionConnectorName}",id:"xpack.triggersActionsUI.sections.actionTypeForm.existingAlertActionTypeEditTitle",values:{actionConnectorName:`${t.name} ${t.isPreconfigured?j:""}`}})),B&&!L&&Object(m.jsx)(s.EuiFlexItem,{grow:!1},Object(m.jsx)(s.EuiBadge,null,B.name)),Object(m.jsx)(s.EuiFlexItem,{grow:!1},!1===H.isEnabled&&Object(m.jsx)(i.a.Fragment,null,Object(m.jsx)(s.EuiIconTip,{type:"alert",color:"danger",content:o.i18n.translate("xpack.triggersActionsUI.sections.actionTypeForm.actionDisabledTitle",{defaultMessage:"This action is disabled"}),position:"right"})))))))),extraAction:Object(m.jsx)(s.EuiButtonIcon,{iconType:"minusInCircle",color:"danger",className:"actAccordionActionForm__extraAction","aria-label":o.i18n.translate("xpack.triggersActionsUI.sections.actionTypeForm.accordion.deleteIconAriaLabel",{defaultMessage:"Delete"}),onClick:x})},K)};var A=n(80),I=n(157),y=n(10),h=n(13),T=n(4);const O=({actions:e,defaultActionGroupId:t,setActionIdByIndex:n,setActionGroupIdByIndex:d,setActions:p,setActionParamsProperty:b,actionTypes:f,messageVariables:j,actionGroups:O,defaultActionMessage:v,setHasActionsDisabled:C,setHasActionsWithBrokenConnector:E,actionTypeRegistry:M,getDefaultActionParams:k,isActionGroupDisabledForActionType:F})=>{const{http:S,notifications:{toasts:U}}=Object(g.b)().services,[L,N]=Object(a.useState)(!1),[w,G]=Object(a.useState)(void 0),[_,B]=Object(a.useState)(!0),[D,z]=Object(a.useState)([]),[V,R]=Object(a.useState)(!1),[P,$]=Object(a.useState)(!1),[W,q]=Object(a.useState)(void 0),[H,K]=Object(a.useState)([]),J=Object(a.useCallback)((()=>N(!1)),[N]);Object(a.useEffect)((()=>{(async()=>{try{$(!0);const e=(null!=f?f:await Object(r.d)({http:S})).sort(((e,t)=>e.name.localeCompare(t.name))),t={};for(const n of e)t[n.id]=n;q(t)}catch(e){U.addDanger({title:o.i18n.translate("xpack.triggersActionsUI.sections.actionForm.unableToLoadConnectorTypesMessage",{defaultMessage:"Unable to load connector types"})})}finally{$(!1)}})()}),[]),Object(a.useEffect)((()=>{(async()=>{try{R(!0);const e=await Object(r.e)({http:S});z(e.filter((e=>!e.isMissingSecrets)))}catch(e){U.addDanger({title:o.i18n.translate("xpack.triggersActionsUI.sections.actionForm.unableToLoadActionsMessage",{defaultMessage:"Unable to load connectors"})})}finally{R(!1)}})()}),[]),Object(a.useEffect)((()=>{D.length>0&&W&&(()=>{const t=D.filter((e=>e.isPreconfigured)),n=e.some((e=>W&&!W[e.actionTypeId].enabled&&!Object(u.a)(W[e.actionTypeId],t).isEnabled));C&&C(n)})()}),[D,W]),Object(a.useEffect)((()=>{const t=e.some((e=>!D.find((t=>t.id===e.id))));E&&E(t)}),[e,D]);let Y=null,Q=!1;if(W){const a=D.filter((e=>e.isPreconfigured));Y=M.list().filter((({id:e})=>null!=f?f:!y.DEFAULT_HIDDEN_ACTION_TYPES.includes(e))).filter((e=>W[e.id])).filter((e=>!!e.actionParamsFields)).sort(((e,t)=>Object(I.a)(W[e.id],W[t.id],a))).map((function(i,c){const r=W[i.id],l=Object(u.a)(W[i.id],a);if(!r.enabledInConfig&&!l.isEnabled)return null;r.enabledInLicense||(Q=!0);const d=Object(m.jsx)(s.EuiKeyPadMenuItem,{key:c,isDisabled:!l.isEnabled,"data-test-subj":`${i.id}-ActionTypeSelectOption`,label:W[i.id].name,onClick:()=>function(a){if(!t)return void U.addDanger({title:o.i18n.translate("xpack.triggersActionsUI.sections.actionForm.unableToAddAction",{defaultMessage:"Unable to add action, because default action group is not defined"})});B(!1);const i=D.filter((e=>e.actionTypeId===a.id));i.length>0&&(e.push({id:"",actionTypeId:a.id,group:t,params:{}}),n(i[0].id,e.length-1)),0===i.length&&(e.push({id:"",actionTypeId:a.id,group:t,params:{}}),n(e.length.toString(),e.length-1),K([...H,e.length.toString()]))}(i)},Object(m.jsx)(s.EuiIcon,{size:"xl",type:"string"==typeof i.iconClass?i.iconClass:Object(T.a)(i.iconClass)}));return Object(m.jsx)(s.EuiFlexItem,{grow:!1,key:`keypad-${i.id}`},l.isEnabled&&d,!1===l.isEnabled&&Object(m.jsx)(s.EuiToolTip,{position:"top",content:l.message},d))}))}return V?Object(m.jsx)(l.a,null,Object(m.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionForm.loadingConnectorsDescription",defaultMessage:"Loading connectors…"})):Object(m.jsx)(i.a.Fragment,null,Object(m.jsx)(s.EuiTitle,{size:"s"},Object(m.jsx)("h4",null,Object(m.jsx)(c.FormattedMessage,{defaultMessage:"Actions",id:"xpack.triggersActionsUI.sections.actionForm.actionSectionsTitle"}))),Object(m.jsx)(s.EuiSpacer,{size:"m"}),W&&e.map(((a,i)=>{const o=D.find((e=>e.id===a.id));return o?Object(m.jsx)(x,{actionItem:a,actionConnector:o,index:i,key:`action-form-action-at-${i}`,setActionParamsProperty:b,actionTypesIndex:W,connectors:D,defaultActionGroupId:t,messageVariables:j,actionGroups:O,defaultActionMessage:v,defaultParams:null==k?void 0:k(a.actionTypeId,a.group),isActionGroupDisabledForActionType:F,setActionGroupIdByIndex:d,onAddConnector:()=>{G({actionTypeId:a.actionTypeId,indices:[i]}),N(!0)},onConnectorSelected:e=>{n(e,i)},actionTypeRegistry:M,onDeleteAction:()=>{const t=e.filter(((e,t)=>t!==i));p(t),B(0===t.filter((e=>e.id!==a.id)).length),G(void 0)}}):Object(m.jsx)(A.AddConnectorInline,{actionTypesIndex:W,actionItem:a,index:i,key:`action-form-action-at-${i}`,actionTypeRegistry:M,emptyActionsIds:H,connectors:D,onDeleteConnector:()=>{const t=e.filter(((e,t)=>t!==i));p(t),B(0===t.filter((e=>e.id!==a.id)).length),G(void 0)},onAddConnector:()=>{G({actionTypeId:a.actionTypeId,indices:e.map(((e,t)=>e.id===a.id?t:-1)).filter((e=>e>=0))}),N(!0)},onSelectConnector:e=>{n(e,i)}})})),Object(m.jsx)(s.EuiSpacer,{size:"m"}),_?Object(m.jsx)(i.a.Fragment,null,Object(m.jsx)(s.EuiFlexGroup,{id:"alertActionTypeTitle",justifyContent:"spaceBetween"},Object(m.jsx)(s.EuiFlexItem,{grow:!1},Object(m.jsx)(s.EuiTitle,{size:"xs"},Object(m.jsx)("h5",null,Object(m.jsx)(c.FormattedMessage,{defaultMessage:"Select a connector type",id:"xpack.triggersActionsUI.sections.actionForm.selectConnectorTypeTitle"})))),Q&&Object(m.jsx)(s.EuiFlexItem,{grow:!1},Object(m.jsx)(s.EuiTitle,{size:"xs"},Object(m.jsx)("h5",null,Object(m.jsx)(s.EuiLink,{href:y.VIEW_LICENSE_OPTIONS_LINK,target:"_blank",external:!0,className:"actActionForm__getMoreActionsLink"},Object(m.jsx)(c.FormattedMessage,{defaultMessage:"Get more connectors",id:"xpack.triggersActionsUI.sections.actionForm.getMoreConnectorsTitle"})))))),Object(m.jsx)(s.EuiSpacer,null),Object(m.jsx)(s.EuiFlexGroup,{gutterSize:"m",wrap:!0},P?Object(m.jsx)(l.a,null,Object(m.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionForm.loadingConnectorTypesDescription",defaultMessage:"Loading connector types…"})):Y)):Object(m.jsx)(s.EuiFlexGroup,null,Object(m.jsx)(s.EuiFlexItem,{grow:!1},Object(m.jsx)(s.EuiButton,{size:"s","data-test-subj":"addAlertActionButton",onClick:()=>B(!0)},Object(m.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.actionForm.addActionButtonLabel",defaultMessage:"Add action"})))),W&&w&&L?Object(m.jsx)(h.c,{actionType:W[w.actionTypeId],onClose:J,postSaveEventHandler:e=>{D.push(e),(w.indices||[]).forEach((t=>n(e.id,t)))},actionTypeRegistry:M}):null)}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"AddConnectorInline",(function(){return b})),n.d(t,"default",(function(){return b}));var a=n(1),i=n.n(a),o=n(0),c=n(76),s=n(15),r=n(112),l=n(43),d=n(135),u=n(145),p=n(3);const b=({actionTypesIndex:e,actionItem:t,index:n,connectors:b,onAddConnector:g,onDeleteConnector:f,onSelectConnector:m,actionTypeRegistry:j,emptyActionsIds:x})=>{const{application:{capabilities:A}}=Object(l.b)().services,I=Object(r.e)(A),[y,h]=Object(a.useState)(!1),[T,O]=Object(a.useState)(!1),v=e?e[t.actionTypeId].name:t.actionTypeId,C=j.get(t.actionTypeId),E=Object(a.useMemo)((()=>[`Unable to load ${C.actionTypeTitle} connector`]),[C.actionTypeTitle]),M=Object(p.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.connectorAddInline.emptyConnectorsLabel",defaultMessage:"No {actionTypeName} connectors",values:{actionTypeName:v}}),k=Object(p.jsx)(s.EuiText,{color:"danger"},Object(p.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.connectorAddInline.unableToLoadConnectorTitle",defaultMessage:"Unable to load connector"}));Object(a.useEffect)((()=>{Object(d.a)(b,t,e).length>0&&h(!0),O(!!x.find((e=>t.id===e)))}),[]);const F=Object(p.jsx)(s.EuiFormRow,{fullWidth:!0,label:Object(p.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.connectorAddInline.connectorAddInline.actionIdLabel",defaultMessage:"Use another {connectorInstance} connector",values:{connectorInstance:v}}),labelAppend:Object(p.jsx)(s.EuiButtonEmpty,{size:"xs","data-test-subj":`addNewActionConnectorButton-${t.actionTypeId}`,onClick:g},Object(p.jsx)(c.FormattedMessage,{defaultMessage:"Add connector",id:"xpack.triggersActionsUI.sections.connectorAddInline.connectorAddInline.addNewConnectorEmptyButton"})),error:E,isInvalid:!0},Object(p.jsx)(u.a,{actionItem:t,accordionIndex:n,actionTypesIndex:e,actionTypeRegistered:C,connectors:b,onConnectorSelected:m}));return Object(p.jsx)(i.a.Fragment,null,Object(p.jsx)(s.EuiAccordion,{key:n,initialIsOpen:!0,id:n.toString(),className:"actAccordionActionForm",buttonContentClassName:"actAccordionActionForm__button","data-test-subj":`alertActionAccordion-${n}`,buttonContent:Object(p.jsx)(s.EuiFlexGroup,{gutterSize:"s",alignItems:"center"},Object(p.jsx)(s.EuiFlexItem,{grow:!1},Object(p.jsx)(s.EuiIcon,{type:C.iconClass,size:"m"})),Object(p.jsx)(s.EuiFlexItem,null,Object(p.jsx)(s.EuiText,null,Object(p.jsx)("div",null,Object(p.jsx)(c.FormattedMessage,{defaultMessage:"{actionConnectorName}",id:"xpack.triggersActionsUI.sections.connectorAddInline.newRuleActionTypeEditTitle",values:{actionConnectorName:C.actionTypeTitle}})))),!T&&Object(p.jsx)(s.EuiFlexItem,{grow:!1},Object(p.jsx)(s.EuiIconTip,{type:"alert",size:"m",color:"danger","data-test-subj":"alertActionAccordionErrorTooltip",content:Object(p.jsx)(c.FormattedMessage,{defaultMessage:"Unable to load connector",id:"xpack.triggersActionsUI.sections.connectorAddInline.unableToLoadConnectorTitle'"})}))),extraAction:Object(p.jsx)(s.EuiButtonIcon,{iconType:"minusInCircle",color:"danger",className:"actAccordionActionForm__extraAction","aria-label":o.i18n.translate("xpack.triggersActionsUI.sections.connectorAddInline.accordion.deleteIconAriaLabel",{defaultMessage:"Delete"}),onClick:f}),paddingSize:"l"},I?y?F:Object(p.jsx)(s.EuiEmptyPrompt,{title:T?M:k,actions:Object(p.jsx)(s.EuiButton,{color:"primary",fill:!0,size:"s","data-test-subj":`createActionConnectorButton-${n}`,onClick:g},Object(p.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.connectorAddInline.addConnectorButtonLabel",defaultMessage:"Create a connector"}))}):Object(p.jsx)(s.EuiCallOut,{title:M},Object(p.jsx)("p",null,Object(p.jsx)(c.FormattedMessage,{id:"xpack.triggersActionsUI.sections.connectorAddInline.unauthorizedToCreateForEmptyConnectors",defaultMessage:"Only authorized users can configure a connector. Contact your administrator."})))),Object(p.jsx)(s.EuiSpacer,{size:"xs"}))}}}]);