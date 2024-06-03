/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[38],{107:function(e,t,n){"use strict";var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],r=0;r<e.length;r++){var s=e[r],l=t.base?s[0]+t.base:s[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=i(u),b={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(b)):o.push({identifier:u,updater:f(b,t),references:1}),a.push(u)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function b(e,t,n){var a=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var g=null,p=0;function f(e,t){var n,a,r;if(t.singleton){var o=p++;n=g||(g=l(t)),a=d.bind(null,n,o,!1),r=d.bind(null,n,o,!0)}else n=l(t),a=b.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=i(n[a]);o[r].references--}for(var l=s(e,t),c=0;c<n.length;c++){var u=i(n[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=l}}}},108:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,a,r,o=e[1]||"",i=e[3];if(!i)return o;if(t&&"function"==typeof btoa){var s=(n=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(r," */")),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([s]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},109:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(113);case"v8light":return n(115)}},110:function(e,t,n){"use strict";function a(e){return e.useWithTripleBracesInTemplates?`{{{${e.name}}}}`:`{{${e.name}}}`}n.d(t,"a",(function(){return a}))},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),r=n.n(a),o=n(0),i=n(15),s=(n(109),n(110)),l=n(3);const c=({messageVariables:e,paramsProperty:t,onSelectEventHandler:n})=>{var c;const[u,d]=Object(a.useState)(!1),b=o.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addRuleVariableTitle",{defaultMessage:"Add rule variable"});return 0===(null!==(c=null==e?void 0:e.length)&&void 0!==c?c:0)?Object(l.jsx)(r.a.Fragment,null):Object(l.jsx)(i.EuiPopover,{button:Object(l.jsx)(i.EuiButtonIcon,{id:`${t}AddVariableButton`,"data-test-subj":`${t}AddVariableButton`,title:b,onClick:()=>d(!0),iconType:"indexOpen","aria-label":o.i18n.translate("xpack.triggersActionsUI.components.addMessageVariables.addVariablePopoverButton",{defaultMessage:"Add variable"})}),isOpen:u,closePopover:()=>d(!1),panelPaddingSize:"none",anchorPosition:"downLeft"},Object(l.jsx)(i.EuiContextMenuPanel,{className:"messageVariablesPanel",items:null==e?void 0:e.map(((e,t)=>Object(l.jsx)(i.EuiContextMenuItem,{key:e.name,"data-test-subj":`variableMenuButton-${e.name}`,icon:"empty",disabled:e.deprecated,onClick:()=>{n(e),d(!1)}},Object(l.jsx)(r.a.Fragment,null,Object(l.jsx)(i.EuiText,{size:"m","data-test-subj":`variableMenuButton-${t}-templated-name`},Object(s.a)(e)),Object(l.jsx)(i.EuiText,{size:"m",color:"subdued"},Object(l.jsx)("div",{className:"euiTextColor--subdued"},e.description))))))}))}},113:function(e,t,n){var a=n(107),r=n(114);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);a(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},114:function(e,t,n){(t=n(108)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},115:function(e,t,n){var a=n(107),r=n(116);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);a(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},116:function(e,t,n){(t=n(108)(!1)).push([e.i,".messageVariablesPanel{scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);mask-image:linear-gradient(to bottom, rgba(255,0,0,0.1) 0%,red 7.5px,red calc(100% - 7.5px),rgba(255,0,0,0.1) 100%);max-height:320px;max-width:320px}.messageVariablesPanel::-webkit-scrollbar{width:16px;height:16px}.messageVariablesPanel::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.messageVariablesPanel::-webkit-scrollbar-corner,.messageVariablesPanel::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.messageVariablesPanel:focus{outline:none}.messageVariablesPanel[tabindex='0']:focus:focus-visible{outline-style:auto}\n",""]),e.exports=t},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(1),r=n.n(a),o=n(15),i=n(0),s=n(87),l=(n(109),n(88)),c=n(17),u=n(111),d=n(110),b=n(3);const g=i.i18n.translate("xpack.triggersActionsUI.components.jsonEditorWithMessageVariable.noEditorErrorTitle",{defaultMessage:"Unable to add message variable"}),p=i.i18n.translate("xpack.triggersActionsUI.components.jsonEditorWithMessageVariable.noEditorErrorMessage",{defaultMessage:"Editor was not found, please refresh page and try again"}),{useXJsonMode:f}=l.XJson,m=({messageVariables:e,paramsProperty:t,inputTargetValue:n,label:i,errors:l,areaLabel:m,onDocumentsChange:h,helpText:x,onBlur:v})=>{const j=Object(a.useRef)(),w=Object(a.useRef)([]),[y,k]=Object(a.useState)(!1),{convertToJson:O,setXJson:V,xJson:E}=f(null!=n?n:null),M=Object(a.useCallback)((()=>{const e=j.current;e&&w.current.push(e.onDidBlurEditorWidget((()=>{null==v||v()})))}),[v]);return Object(a.useEffect)((()=>(M(),()=>(w.current.forEach((e=>{e.dispose()})),void(w.current=[])))),[M]),Object(b.jsx)(o.EuiFormRow,{fullWidth:!0,error:l,isInvalid:l&&l.length>0&&void 0!==n,label:i,labelAppend:Object(b.jsx)(u.a,{messageVariables:e,onSelectEventHandler:e=>{const t=j.current;if(!t)return void k(!0);const n=t.getSelection(),a=Object(d.a)(e);let r="";n?(t.executeEdits("json-editor-with-message-variables",[{range:n,text:a}]),r=t.getValue()):r=a,k(!1),V(r),h(O(r))},paramsProperty:t}),helpText:x},Object(b.jsx)(r.a.Fragment,null,y?Object(b.jsx)(r.a.Fragment,null,Object(b.jsx)(o.EuiSpacer,{size:"s"}),Object(b.jsx)(o.EuiCallOut,{size:"s",color:"danger",iconType:"alert",title:g},Object(b.jsx)("p",null,p)),Object(b.jsx)(o.EuiSpacer,{size:"s"})):null,Object(b.jsx)(c.CodeEditor,{languageId:s.XJsonLang.ID,options:{renderValidationDecorations:E?"on":"off",lineNumbers:"on",fontSize:14,minimap:{enabled:!1},scrollBeyondLastLine:!1,folding:!0,wordWrap:"on",wrappingIndent:"indent",automaticLayout:!0},value:E,width:"100%",height:"200px","data-test-subj":`${t}JsonEditor`,"aria-label":m,editorDidMount:e=>{j.current=e,M()},onChange:e=>{V(e),h(O(e))}})))}},278:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n(1);var a=n(0),r=n(152),o=n(3);const i=({actionParams:e,editAction:t,index:n,messageVariables:i,errors:s})=>{const{body:l}=e;return Object(o.jsx)(r.a,{messageVariables:i,paramsProperty:"body",inputTargetValue:l,label:a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.bodyFieldLabel",{defaultMessage:"Body"}),"aria-label":a.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.webhookAction.bodyCodeEditorAriaLabel",{defaultMessage:"Code editor"}),errors:s.body,onDocumentsChange:e=>{t("body",e,n)},onBlur:()=>{l||t("body","",n)}})}}}]);