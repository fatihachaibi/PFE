/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[36],{107:function(e,t,a){"use strict";var n,r=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),o=[];function i(e){for(var t=-1,a=0;a<o.length;a++)if(o[a].identifier===e){t=a;break}return t}function s(e,t){for(var a={},n=[],r=0;r<e.length;r++){var s=e[r],l=t.base?s[0]+t.base:s[0],c=a[l]||0,u="".concat(l," ").concat(c);a[l]=c+1;var d=i(u),b={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(b)):o.push({identifier:u,updater:p(b,t),references:1}),n.push(u)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=a.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,a,n){var r=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function b(e,t,a){var n=a.css,r=a.media,o=a.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var g=null,f=0;function p(e,t){var a,n,r;if(t.singleton){var o=f++;a=g||(g=l(t)),n=d.bind(null,a,o,!1),r=d.bind(null,a,o,!0)}else a=l(t),n=b.bind(null,a,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var a=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<a.length;n++){var r=i(a[n]);o[r].references--}for(var l=s(e,t),c=0;c<a.length;c++){var u=i(a[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}a=l}}}},108:function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a,n,r,o=e[1]||"",i=e[3];if(!i)return o;if(t&&"function"==typeof btoa){var s=(a=i,n=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(r," */")),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([s]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&r[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),t.push(l))}},t}},109:function(e,t,a){switch(window.__kbnThemeTag__){case"v8dark":return a(113);case"v8light":return a(115)}},110:function(e,t,a){"use strict";function n(e){return e.useWithTripleBracesInTemplates?`{{{${e.name}}}}`:`{{${e.name}}}`}a.d(t,"a",(function(){return n}))},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(1),r=a.n(n),o=a(0),i=a(15),s=(a(109),a(110)),l=a(3);const c=({messageVariables:e,paramsProperty:t,onSelectEventHandler:a})=>{var c;const[u,d]=Object(n.useState)(!1),b=o.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addRuleVariableTitle",{defaultMessage:"Add rule variable"});return 0===(null!==(c=null==e?void 0:e.length)&&void 0!==c?c:0)?Object(l.jsx)(r.a.Fragment,null):Object(l.jsx)(i.EuiPopover,{button:Object(l.jsx)(i.EuiButtonIcon,{id:`${t}AddVariableButton`,"data-test-subj":`${t}AddVariableButton`,title:b,onClick:()=>d(!0),iconType:"indexOpen","aria-label":o.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addVariablePopoverButton",{defaultMessage:"Add variable"})}),isOpen:u,closePopover:()=>d(!1),panelPaddingSize:"none",anchorPosition:"downLeft"},Object(l.jsx)(i.EuiContextMenuPanel,{className:"messageVariablesPanel",items:null==e?void 0:e.map(((e,t)=>Object(l.jsx)(i.EuiContextMenuItem,{key:e.name,"data-test-subj":`variableMenuButton-${e.name}`,icon:"empty",disabled:e.deprecated,onClick:()=>{a(e),d(!1)}},Object(l.jsx)(r.a.Fragment,null,Object(l.jsx)(i.EuiText,{size:"m","data-test-subj":`variableMenuButton-${t}-templated-name`},Object(s.a)(e)),Object(l.jsx)(i.EuiText,{size:"m",color:"subdued"},Object(l.jsx)("div",{className:"euiTextColor--subdued"},e.description))))))}))}},113:function(e,t,a){var n=a(107),r=a(114);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},114:function(e,t,a){(t=a(108)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},115:function(e,t,a){var n=a(107),r=a(116);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);n(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},116:function(e,t,a){(t=a(108)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),r=a(15),o=(a(109),a(111)),i=a(110),s=a(3);const l=({messageVariables:e,paramsProperty:t,index:a,inputTargetValue:l,editAction:c,label:u,errors:d})=>{const[b,g]=Object(n.useState)(null);return Object(s.jsx)(r.EuiFormRow,{fullWidth:!0,error:d,isInvalid:d&&d.length>0&&void 0!==l,label:u,labelAppend:Object(s.jsx)(o.a,{messageVariables:e,onSelectEventHandler:e=>{var n,r;const o=Object(i.a)(e),s=null!==(n=null==b?void 0:b.selectionStart)&&void 0!==n?n:0,u=null!==(r=null==b?void 0:b.selectionEnd)&&void 0!==r?r:0,d=(null!=l?l:"").substring(0,s)+o+(null!=l?l:"").substring(u,(null!=l?l:"").length);c(t,d,a)},paramsProperty:t})},Object(s.jsx)(r.EuiTextArea,{fullWidth:!0,isInvalid:d&&d.length>0&&void 0!==l,name:t,value:l||"","data-test-subj":`${t}TextArea`,onChange:e=>(e=>{c(t,e.target.value,a)})(e),onFocus:e=>{g(e.target)},onBlur:()=>{l||c(t,"",a)}}))}},266:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(1),r=a(0),o=a(120),i=a(3);const s=({actionParams:e,editAction:t,index:a,errors:s,messageVariables:l,defaultMessage:c})=>{var u;const{message:d}=e,[[b,g],f]=Object(n.useState)([!1,c]);return Object(n.useEffect)((()=>{(null==e||!e.message||b&&(null==e?void 0:e.message)===g&&g!==c)&&(f([!0,c]),t("message",c,a))}),[c]),Object(i.jsx)(o.a,{index:a,editAction:t,messageVariables:l,paramsProperty:"message",inputTargetValue:d,label:r.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.slackAction.messageTextAreaFieldLabel",{defaultMessage:"Message"}),errors:null!==(u=s.message)&&void 0!==u?u:[]})}}}]);