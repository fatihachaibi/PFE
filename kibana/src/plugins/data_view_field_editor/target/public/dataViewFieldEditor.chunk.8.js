(window.dataViewFieldEditor_bundle_jsonpfunction=window.dataViewFieldEditor_bundle_jsonpfunction||[]).push([[8],{49:function(e,t,n){"use strict";var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],r=0;r<e.length;r++){var s=e[r],l=t.base?s[0]+t.base:s[0],u=n[l]||0,d="".concat(l," ").concat(u);n[l]=u+1;var c=o(d),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(i[c].references++,i[c].updater(m)):i.push({identifier:d,updater:h(m,t),references:1}),a.push(d)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function c(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function m(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,p=0;function h(e,t){var n,a,r;if(t.singleton){var i=p++;n=f||(f=l(t)),a=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else n=l(t),a=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=o(n[a]);i[r].references--}for(var l=s(e,t),u=0;u<n.length;u++){var d=o(n[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=l}}}},50:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,a,r,i=e[1]||"",o=e[3];if(!o)return i;if(t&&"function"==typeof btoa){var s=(n=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(r," */")),l=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[i].concat(l).concat([s]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},51:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(52);case"v8light":return n(54)}},52:function(e,t,n){var a=n(49),r=n(53);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);a(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},53:function(e,t,n){(t=n(50)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},54:function(e,t,n){var a=n(49),r=n(55);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);a(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},55:function(e,t,n){(t=n(50)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return samples_FormatEditorSamples}));var a=n(3),r=n.n(a),i=(n(51),n(1)),o=n(4),s=n(2),l=n(12),u=n(0);class samples_FormatEditorSamples extends i.PureComponent{render(){const{samples:e,sampleType:t}=this.props,n=[{field:"input",name:s.i18n.translate("indexPatternFieldEditor.samples.inputHeader",{defaultMessage:"Input"}),render:e=>"object"==typeof e?JSON.stringify(e):e},{field:"output",name:s.i18n.translate("indexPatternFieldEditor.samples.outputHeader",{defaultMessage:"Output"}),render:e=>"html"===t?Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:e}}):Object(u.jsx)("div",null,e)}];return e.length?Object(u.jsx)(o.EuiFormRow,{label:Object(u.jsx)(l.FormattedMessage,{id:"indexPatternFieldEditor.samplesHeader",defaultMessage:"Samples"})},Object(u.jsx)(o.EuiBasicTable,{className:"kbnFieldFormatEditor__samples",compressed:!0,items:e,columns:n})):null}}r()(samples_FormatEditorSamples,"defaultProps",{sampleType:"text"})},88:function(e,t,n){"use strict";n.r(t),n.d(t,"HistogramFormatEditor",(function(){return HistogramFormatEditor}));var a=n(3),r=n.n(a),i=n(1),o=n(2),s=n(12),l=n(4),u=n(7),d=n(56),c=n(35),m=n(0);class HistogramFormatEditor extends u.DefaultFormatEditor{constructor(...e){super(...e),r()(this,"state",{...u.defaultState,sampleInputs:[50.1234,100.0001,99.9999,{values:[1e-5,99.9999,200,300],counts:[573,102,482]}]})}render(){var e,t;const{formatParams:n}=this.props,{error:a,samples:r}=this.state,u=[{value:"number",text:o.i18n.translate("indexPatternFieldEditor.histogram.subFormat.number",{defaultMessage:"Number"})},{value:"bytes",text:o.i18n.translate("indexPatternFieldEditor.histogram.subFormat.bytes",{defaultMessage:"Bytes"})},{value:"percent",text:o.i18n.translate("indexPatternFieldEditor.histogram.subFormat.percent",{defaultMessage:"Percentage"})}];return Object(m.jsx)(i.Fragment,null,Object(m.jsx)(l.EuiFormRow,{label:o.i18n.translate("indexPatternFieldEditor.histogram.histogramAsNumberLabel",{defaultMessage:"Aggregated number format"})},Object(m.jsx)(l.EuiSelect,{options:u,value:n.id||"number",onChange:e=>{this.onChange({id:e.target.value})}})),Object(m.jsx)(l.EuiFormRow,{label:o.i18n.translate("indexPatternFieldEditor.histogram.numeralLabel",{defaultMessage:"Numeral format pattern (optional)"}),helpText:Object(m.jsx)("span",null,Object(m.jsx)(l.EuiLink,{target:"_blank",href:"https://adamwdraper.github.io/Numeral-js/"},Object(m.jsx)(s.FormattedMessage,{id:"indexPatternFieldEditor.number.documentationLabel",defaultMessage:"Documentation"})," ",Object(m.jsx)(l.EuiIcon,{type:"link"}))),isInvalid:!!a,error:a},Object(m.jsx)(l.EuiFieldText,{value:null!==(e=null==n||null===(t=n.params)||void 0===t?void 0:t.pattern)&&void 0!==e?e:"",onChange:e=>{this.onChange({params:{pattern:e.target.value}})},isInvalid:!!a})),Object(m.jsx)(d.a,{samples:r}))}}r()(HistogramFormatEditor,"formatId",c.a)}}]);