/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.uiActionsEnhanced_bundle_jsonpfunction=window.uiActionsEnhanced_bundle_jsonpfunction||[]).push([[4],{32:function(e,n,t){"use strict";var l,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function r(e,n){for(var t={},l=[],o=0;o<e.length;o++){var r=e[o],s=n.base?r[0]+n.base:r[0],c=t[s]||0,u="".concat(s," ").concat(c);t[s]=c+1;var d=a(u),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:h(p,n),references:1}),l.push(u)}return l}function s(e){var n=document.createElement("style"),l=e.attributes||{};if(void 0===l.nonce){var i=t.nc;i&&(l.nonce=i)}if(Object.keys(l).forEach((function(e){n.setAttribute(e,l[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var c,u=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function d(e,n,t,l){var o=t?"":l.media?"@media ".concat(l.media," {").concat(l.css,"}"):l.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var l=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(l+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=l;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(l))}}var f=null,b=0;function h(e,n){var t,l,o;if(n.singleton){var i=b++;t=f||(f=s(n)),l=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(n),l=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return l(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;l(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===l&&(l=Boolean(window&&document&&document.all&&!window.atob)),l));var t=r(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var l=0;l<t.length;l++){var o=a(t[l]);i[o].references--}for(var s=r(e,n),c=0;c<t.length;c++){var u=a(t[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=s}}}},33:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t,l,o,i=e[1]||"",a=e[3];if(!a)return i;if(n&&"function"==typeof btoa){var r=(t=a,l=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(o," */")),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(s).concat([r]).join("\n")}return[i].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,l){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(l)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var r=0;r<e.length;r++){var s=[].concat(e[r]);l&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},52:function(e,n,t){switch(window.__kbnThemeTag__){case"v8dark":return t(53);case"v8light":return t(55)}},53:function(e,n,t){var l=t(32),o=t(54);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);l(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},54:function(e,n,t){(n=t(33)(!1)).push([e.i,".uaeUrlDrilldownCollectConfig__urlTemplateFormRow .euiFormRow__label{align-self:flex-end}\n",""]),e.exports=n},55:function(e,n,t){var l=t(32),o=t(56);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);l(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},56:function(e,n,t){(n=t(33)(!1)).push([e.i,".uaeUrlDrilldownCollectConfig__urlTemplateFormRow .euiFormRow__label{align-self:flex-end}\n",""]),e.exports=n},93:function(e,n,t){"use strict";t.r(n),t.d(n,"UrlDrilldownCollectConfig",(function(){return x}));var l=t(2),o=t.n(l),i=t(9),a=t(4),r=(t(52),t(3));r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplatePlaceholderText",{defaultMessage:"Example: {exampleUrl}",values:{exampleUrl:"https://www.my-url.com/?{{event.key}}={{event.value}}"}}),r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlPreviewHelpText",{defaultMessage:"Please note that in preview \\{\\{event.*\\}\\} variables are substituted with dummy values."});const s=r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateLabel",{defaultMessage:"Enter URL"}),c=r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateSyntaxHelpLinkText",{defaultMessage:"Syntax help"}),u=(r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlPreviewLabel",{defaultMessage:"URL preview:"}),r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlPreviewLinkText",{defaultMessage:"Preview"}),r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.openInNewTabLabel",{defaultMessage:"Open in new window"})),d=r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.additionalOptions",{defaultMessage:"Additional options"}),p=r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.encodeUrl",{defaultMessage:"Encode URL"}),f=r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.encodeDescription",{defaultMessage:"If enabled, URL will be escaped using percent encoding"}),b=r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.addVariableButtonTitle",{defaultMessage:"Add variable"}),h=r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateVariablesHelpLinkText",{defaultMessage:"Help"}),w=r.i18n.translate("xpack.uiActionsEnhanced.drilldowns.urlDrilldownCollectConfig.urlTemplateVariablesFilterPlaceholderText",{defaultMessage:"Filter variables"});var v=t(1);const g=({variables:e,onSelect:n,variablesHelpLink:t})=>{const[o,a]=Object(l.useState)(!1),r=()=>a(!1),s=e.map((({label:e})=>({key:e,label:e})));return Object(v.jsx)(i.EuiPopover,{ownFocus:!0,button:Object(v.jsx)(i.EuiText,{size:"xs"},Object(v.jsx)(i.EuiLink,{onClick:()=>a(!0)},b," ",Object(v.jsx)(i.EuiIcon,{type:"indexOpen"}))),isOpen:o,closePopover:r,panelPaddingSize:"none",anchorPosition:"downLeft"},Object(v.jsx)(i.EuiSelectable,{singleSelection:!0,searchable:!0,searchProps:{placeholder:w,compressed:!0},options:s,onChange:e=>{const t=e.find((e=>"on"===e.checked));t&&(n(t.key),r())},listProps:{showIcons:!1}},((e,n)=>Object(v.jsx)("div",{style:{width:320}},Object(v.jsx)(i.EuiPopoverTitle,null,n),e,t&&Object(v.jsx)(i.EuiPopoverFooter,{className:"eui-textRight"},Object(v.jsx)(i.EuiLink,{external:!0,href:t,target:"_blank"},h))))))},x=({config:e,variables:n,exampleUrl:t,onConfig:r,syntaxHelpDocsLink:b,variablesHelpDocsLink:h})=>{var w,x;const m=Object(l.useRef)(null),[j,C]=o.a.useState(!0),E=null!==(w=e.url.template)&&void 0!==w?w:"",k=!j&&!E,O=Object(v.jsx)(g,{variables:n,variablesHelpLink:h,onSelect:e=>{const n=m.current;n&&n.trigger("keyboard","type",{text:"{{"+e+"}}"})}});return Object(v.jsx)(o.a.Fragment,null,Object(v.jsx)(i.EuiFormRow,{fullWidth:!0,isInvalid:k,className:"uaeUrlDrilldownCollectConfig__urlTemplateFormRow",label:s,helpText:b&&Object(v.jsx)(i.EuiLink,{external:!0,target:"_blank",href:b},c),labelAppend:O},Object(v.jsx)(a.UrlTemplateEditor,{variables:n,value:E,placeholder:t,onChange:n=>function(n){e.url.template!==n&&(C(!1),r({...e,url:{...e.url,template:n}}))}(n),onEditor:e=>{m.current=e}})),Object(v.jsx)(i.EuiSpacer,{size:"l"}),Object(v.jsx)(i.EuiAccordion,{id:"accordion_url_drilldown_additional_options",buttonContent:d,"data-test-subj":"urlDrilldownAdditionalOptions"},Object(v.jsx)(i.EuiSpacer,{size:"s"}),Object(v.jsx)(i.EuiPanel,{color:"subdued",borderRadius:"none",hasShadow:!1,style:{border:"none"}},Object(v.jsx)(i.EuiFormRow,{hasChildLabel:!1},Object(v.jsx)(i.EuiSwitch,{id:"openInNewTab",name:"openInNewTab",label:u,checked:e.openInNewTab,onChange:()=>r({...e,openInNewTab:!e.openInNewTab}),"data-test-subj":"urlDrilldownOpenInNewTab"})),Object(v.jsx)(i.EuiFormRow,{hasChildLabel:!1,fullWidth:!0},Object(v.jsx)(i.EuiSwitch,{id:"encodeUrl",name:"encodeUrl",label:Object(v.jsx)(o.a.Fragment,null,p,Object(v.jsx)(i.EuiSpacer,{size:"s"}),Object(v.jsx)(i.EuiTextColor,{color:"subdued"},f)),checked:null===(x=e.encodeUrl)||void 0===x||x,onChange:()=>{var n;return r({...e,encodeUrl:!(null===(n=e.encodeUrl)||void 0===n||n)})}})))))}}}]);