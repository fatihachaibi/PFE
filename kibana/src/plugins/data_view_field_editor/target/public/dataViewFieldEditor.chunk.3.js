(window.dataViewFieldEditor_bundle_jsonpfunction=window.dataViewFieldEditor_bundle_jsonpfunction||[]).push([[3,9],{49:function(e,t,n){"use strict";var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],a=0;a<e.length;a++){var s=e[a],u=t.base?s[0]+t.base:s[0],c=n[u]||0,l="".concat(u," ").concat(c);n[u]=c+1;var d=i(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:l,updater:b(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,p=0;function b(e,t){var n,r,a;if(t.singleton){var o=p++;n=m||(m=u(t)),r=d.bind(null,n,o,!1),a=d.bind(null,n,o,!0)}else n=u(t),r=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=i(n[r]);o[a].references--}for(var u=s(e,t),c=0;c<n.length;c++){var l=i(n[c]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=u}}}},50:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,a,o=e[1]||"",i=e[3];if(!i)return o;if(t&&"function"==typeof btoa){var s=(n=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(a," */")),u=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[o].concat(u).concat([s]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&a[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},51:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(52);case"v8light":return n(54)}},52:function(e,t,n){var r=n(49),a=n(53);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);r(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},53:function(e,t,n){(t=n(50)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},54:function(e,t,n){var r=n(49),a=n(55);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);r(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},55:function(e,t,n){(t=n(50)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return samples_FormatEditorSamples}));var r=n(3),a=n.n(r),o=(n(51),n(1)),i=n(4),s=n(2),u=n(12),c=n(0);class samples_FormatEditorSamples extends o.PureComponent{render(){const{samples:e,sampleType:t}=this.props,n=[{field:"input",name:s.i18n.translate("indexPatternFieldEditor.samples.inputHeader",{defaultMessage:"Input"}),render:e=>"object"==typeof e?JSON.stringify(e):e},{field:"output",name:s.i18n.translate("indexPatternFieldEditor.samples.outputHeader",{defaultMessage:"Output"}),render:e=>"html"===t?Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e}}):Object(c.jsx)("div",null,e)}];return e.length?Object(c.jsx)(i.EuiFormRow,{label:Object(c.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.samplesHeader",defaultMessage:"Samples"})},Object(c.jsx)(i.EuiBasicTable,{className:"kbnFieldFormatEditor__samples",compressed:!0,items:e,columns:n})):null}}a()(samples_FormatEditorSamples,"defaultProps",{sampleType:"text"})},58:function(e,t,n){"use strict";n.r(t),n.d(t,"NumberFormatEditor",(function(){return NumberFormatEditor}));var r=n(3),a=n.n(r),o=n(1),i=n(4),s=n(12),u=n(8),c=n(7),l=n(56),d=n(17),f=n(0);class NumberFormatEditor extends c.DefaultFormatEditor{constructor(...e){super(...e),a()(this,"state",{...c.defaultState,sampleInputs:[1e4,12.345678,-1,-999,.52]})}render(){var e;const{format:t,formatParams:n}=this.props,{error:r,samples:a}=this.state,u=t.getParamDefaults().pattern;return Object(f.jsx)(o.Fragment,null,Object(f.jsx)(i.EuiFormRow,{label:Object(f.jsx)(s.FormattedMessage,{id:"indexPatternFieldEditor.number.numeralLabel",defaultMessage:"Numeral.js format pattern (Default: {defaultPattern})",values:{defaultPattern:Object(f.jsx)(i.EuiCode,null,u)}}),helpText:Object(f.jsx)("span",null,Object(f.jsx)(i.EuiLink,{target:"_blank",href:null===(e=this.context.services.docLinks)||void 0===e?void 0:e.links.indexPatterns.fieldFormattersNumber},Object(f.jsx)(s.FormattedMessage,{id:"indexPatternFieldEditor.number.documentationLabel",defaultMessage:"Documentation"})," ",Object(f.jsx)(i.EuiIcon,{type:"link"}))),isInvalid:!!r,error:r},Object(f.jsx)(i.EuiFieldText,{"data-test-subj":"numberEditorFormatPattern",value:n.pattern,placeholder:u,onChange:e=>{this.onChange({pattern:e.target.value})},isInvalid:!!r})),Object(f.jsx)(l.a,{samples:a}))}}a()(NumberFormatEditor,"contextType",u.context),a()(NumberFormatEditor,"formatId",d.a)},84:function(e,t,n){"use strict";n.r(t),n.d(t,"PercentFormatEditor",(function(){return PercentFormatEditor}));var r=n(3),a=n.n(r),o=n(58),i=n(14),s=n(30);class PercentFormatEditor extends o.NumberFormatEditor{constructor(...e){super(...e),a()(this,"state",{...i.a,sampleInputs:[.1,.99999,1,100,1e3]})}}a()(PercentFormatEditor,"formatId",s.a)}}]);