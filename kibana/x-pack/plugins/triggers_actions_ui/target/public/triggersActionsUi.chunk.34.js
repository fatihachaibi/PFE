/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[34],{107:function(e,t,a){"use strict";var n,i=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),r=[];function s(e){for(var t=-1,a=0;a<r.length;a++)if(r[a].identifier===e){t=a;break}return t}function o(e,t){for(var a={},n=[],i=0;i<e.length;i++){var o=e[i],l=t.base?o[0]+t.base:o[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var d=s(u),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(r[d].references++,r[d].updater(p)):r.push({identifier:u,updater:m(p,t),references:1}),n.push(u)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=a.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,a,n){var i=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function p(e,t,a){var n=a.css,i=a.media,r=a.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var b=null,g=0;function m(e,t){var a,n,i;if(t.singleton){var r=g++;a=b||(b=l(t)),n=d.bind(null,a,r,!1),i=d.bind(null,a,r,!0)}else a=l(t),n=p.bind(null,a,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var a=o(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<a.length;n++){var i=s(a[n]);r[i].references--}for(var l=o(e,t),c=0;c<a.length;c++){var u=s(a[c]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=l}}}},108:function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a,n,i,r=e[1]||"",s=e[3];if(!s)return r;if(t&&"function"==typeof btoa){var o=(a=s,n=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(i," */")),l=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[r].concat(l).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);n&&i[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),t.push(l))}},t}},109:function(e,t,a){switch(window.__kbnThemeTag__){case"v8dark":return a(113);case"v8light":return a(115)}},110:function(e,t,a){"use strict";function n(e){return e.useWithTripleBracesInTemplates?`{{{${e.name}}}}`:`{{${e.name}}}`}a.d(t,"a",(function(){return n}))},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(1),i=a.n(n),r=a(0),s=a(15),o=(a(109),a(110)),l=a(3);const c=({messageVariables:e,paramsProperty:t,onSelectEventHandler:a})=>{var c;const[u,d]=Object(n.useState)(!1),p=r.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addRuleVariableTitle",{defaultMessage:"Add rule variable"});return 0===(null!==(c=null==e?void 0:e.length)&&void 0!==c?c:0)?Object(l.jsx)(i.a.Fragment,null):Object(l.jsx)(s.EuiPopover,{button:Object(l.jsx)(s.EuiButtonIcon,{id:`${t}AddVariableButton`,"data-test-subj":`${t}AddVariableButton`,title:p,onClick:()=>d(!0),iconType:"indexOpen","aria-label":r.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addVariablePopoverButton",{defaultMessage:"Add variable"})}),isOpen:u,closePopover:()=>d(!1),panelPaddingSize:"none",anchorPosition:"downLeft"},Object(l.jsx)(s.EuiContextMenuPanel,{className:"messageVariablesPanel",items:null==e?void 0:e.map(((e,t)=>Object(l.jsx)(s.EuiContextMenuItem,{key:e.name,"data-test-subj":`variableMenuButton-${e.name}`,icon:"empty",disabled:e.deprecated,onClick:()=>{a(e),d(!1)}},Object(l.jsx)(i.a.Fragment,null,Object(l.jsx)(s.EuiText,{size:"m","data-test-subj":`variableMenuButton-${t}-templated-name`},Object(o.a)(e)),Object(l.jsx)(s.EuiText,{size:"m",color:"subdued"},Object(l.jsx)("div",{className:"euiTextColor--subdued"},e.description))))))}))}},113:function(e,t,a){var n=a(107),i=a(114);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);n(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},114:function(e,t,a){(t=a(108)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},115:function(e,t,a){var n=a(107),i=a(116);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);n(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},116:function(e,t,a){(t=a(108)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},121:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),i=a(15),r=(a(109),a(111)),s=a(110),o=a(3);const l=({messageVariables:e,paramsProperty:t,index:a,inputTargetValue:l,editAction:c,errors:u,defaultValue:d})=>{const[p,b]=Object(n.useState)(null);return Object(o.jsx)(i.EuiFieldText,{fullWidth:!0,name:t,id:`${t}Id`,isInvalid:u&&u.length>0&&void 0!==l,"data-test-subj":`${t}Input`,value:l||"",defaultValue:d,onChange:e=>(e=>{c(t,e.target.value,a)})(e),onFocus:e=>{b(e.target)},onBlur:e=>{l||c(t,"",a)},append:Object(o.jsx)(r.a,{messageVariables:e,onSelectEventHandler:e=>{var n,i;const r=Object(s.a)(e),o=null!==(n=null==p?void 0:p.selectionStart)&&void 0!==n?n:0,u=null!==(i=null==p?void 0:p.selectionEnd)&&void 0!==i?i:0,d=(null!=l?l:"").substring(0,o)+r+(null!=l?l:"").substring(u,(null!=l?l:"").length);c(t,d,a)},paramsProperty:t})})}},273:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(1),i=a.n(n),r=a(15),s=a(0),o=a(5),l=a(121),c=a(3);const u=({actionParams:e,editAction:t,index:a,messageVariables:n,errors:u})=>{var d;const{eventAction:p,dedupKey:b,summary:g,source:m,severity:f,timestamp:x,component:v,group:j}=e,y=[{value:"critical",text:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.severitySelectCriticalOptionLabel",{defaultMessage:"Critical"})},{value:"error",text:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.severitySelectErrorOptionLabel",{defaultMessage:"Error"})},{value:"warning",text:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.severitySelectWarningOptionLabel",{defaultMessage:"Warning"})},{value:"info",text:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.severitySelectInfoOptionLabel",{defaultMessage:"Info"})}],h=[{value:"trigger",text:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.eventSelectTriggerOptionLabel",{defaultMessage:"Trigger"})},{value:"resolve",text:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.eventSelectResolveOptionLabel",{defaultMessage:"Resolve"})},{value:"acknowledge",text:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.eventSelectAcknowledgeOptionLabel",{defaultMessage:"Acknowledge"})}],A="trigger"!==p,O="trigger"===p,k=void 0!==u.dedupKey&&u.dedupKey.length>0,w=void 0!==u.summary&&u.summary.length>0&&void 0!==g,T=void 0!==u.timestamp&&u.timestamp.length>0&&void 0!==x;return Object(c.jsx)(i.a.Fragment,null,Object(c.jsx)(r.EuiFlexGroup,null,Object(c.jsx)(r.EuiFlexItem,null,Object(c.jsx)(r.EuiFormRow,{fullWidth:!0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.eventActionSelectFieldLabel",{defaultMessage:"Event action"})},Object(c.jsx)(r.EuiSelect,{fullWidth:!0,"data-test-subj":"eventActionSelect",options:h,hasNoInitialSelection:Object(o.isUndefined)(p),value:p,onChange:e=>{t("eventAction",e.target.value,a)}})))),Object(c.jsx)(r.EuiFlexGroup,null,Object(c.jsx)(r.EuiFlexItem,null,Object(c.jsx)(r.EuiFormRow,{fullWidth:!0,error:u.dedupKey,isInvalid:k,label:A?s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.dedupKeyTextRequiredFieldLabel",{defaultMessage:"DedupKey"}):s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.dedupKeyTextFieldLabel",{defaultMessage:"DedupKey (optional)"})},Object(c.jsx)(l.a,{index:a,editAction:t,messageVariables:n,paramsProperty:"dedupKey",inputTargetValue:b})))),O?Object(c.jsx)(i.a.Fragment,null,Object(c.jsx)(r.EuiSpacer,{size:"m"}),Object(c.jsx)(r.EuiFormRow,{id:"pagerDutySummary",fullWidth:!0,error:u.summary,isInvalid:w,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.summaryFieldLabel",{defaultMessage:"Summary"})},Object(c.jsx)(l.a,{index:a,editAction:t,messageVariables:n,paramsProperty:"summary",inputTargetValue:g,errors:null!==(d=u.summary)&&void 0!==d?d:[]})),Object(c.jsx)(r.EuiSpacer,{size:"m"}),Object(c.jsx)(r.EuiFlexGroup,null,Object(c.jsx)(r.EuiFlexItem,null,Object(c.jsx)(r.EuiFormRow,{fullWidth:!0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.severitySelectFieldLabel",{defaultMessage:"Severity (optional)"})},Object(c.jsx)(r.EuiSelect,{fullWidth:!0,"data-test-subj":"severitySelect",options:y,hasNoInitialSelection:Object(o.isUndefined)(f),value:f,onChange:e=>{t("severity",e.target.value,a)}}))),Object(c.jsx)(r.EuiFlexItem,null,Object(c.jsx)(r.EuiFormRow,{fullWidth:!0,error:u.timestamp,isInvalid:T,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.timestampTextFieldLabel",{defaultMessage:"Timestamp (optional)"})},Object(c.jsx)(l.a,{index:a,editAction:t,messageVariables:n,paramsProperty:"timestamp",inputTargetValue:x,errors:u.timestamp})))),Object(c.jsx)(r.EuiSpacer,{size:"m"}),Object(c.jsx)(r.EuiFormRow,{fullWidth:!0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.componentTextFieldLabel",{defaultMessage:"Component (optional)"})},Object(c.jsx)(l.a,{index:a,editAction:t,messageVariables:n,paramsProperty:"component",inputTargetValue:v})),Object(c.jsx)(r.EuiFormRow,{fullWidth:!0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.groupTextFieldLabel",{defaultMessage:"Group (optional)"})},Object(c.jsx)(l.a,{index:a,editAction:t,messageVariables:n,paramsProperty:"group",inputTargetValue:j})),Object(c.jsx)(r.EuiFormRow,{fullWidth:!0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.sourceTextFieldLabel",{defaultMessage:"Source (optional)"})},Object(c.jsx)(l.a,{index:a,editAction:t,messageVariables:n,paramsProperty:"source",inputTargetValue:m})),Object(c.jsx)(r.EuiFormRow,{id:"pagerDutyClass",fullWidth:!0,label:s.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.pagerDutyAction.classFieldLabel",{defaultMessage:"Class (optional)"})},Object(c.jsx)(l.a,{index:a,editAction:t,messageVariables:n,paramsProperty:"class",inputTargetValue:e.class}))):null)}}}]);