(window.dataViewFieldEditor_bundle_jsonpfunction=window.dataViewFieldEditor_bundle_jsonpfunction||[]).push([[6],{49:function(e,t,n){"use strict";var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],r=0;r<e.length;r++){var s=e[r],u=t.base?s[0]+t.base:s[0],l=n[u]||0,d="".concat(u," ").concat(l);n[u]=l+1;var c=o(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(i[c].references++,i[c].updater(f)):i.push({identifier:d,updater:h(f,t),references:1}),a.push(d)}return a}function u(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function c(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function f(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,p=0;function h(e,t){var n,a,r;if(t.singleton){var i=p++;n=m||(m=u(t)),a=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else n=u(t),a=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=o(n[a]);i[r].references--}for(var u=s(e,t),l=0;l<n.length;l++){var d=o(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=u}}}},50:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,a,r,i=e[1]||"",o=e[3];if(!o)return i;if(t&&"function"==typeof btoa){var s=(n=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(r," */")),u=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[i].concat(u).concat([s]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);a&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},51:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(52);case"v8light":return n(54)}},52:function(e,t,n){var a=n(49),r=n(53);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);a(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},53:function(e,t,n){(t=n(50)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},54:function(e,t,n){var a=n(49),r=n(55);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);a(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},55:function(e,t,n){(t=n(50)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return samples_FormatEditorSamples}));var a=n(3),r=n.n(a),i=(n(51),n(1)),o=n(4),s=n(2),u=n(12),l=n(0);class samples_FormatEditorSamples extends i.PureComponent{render(){const{samples:e,sampleType:t}=this.props,n=[{field:"input",name:s.i18n.translate("indexPatternFieldEditor.samples.inputHeader",{defaultMessage:"Input"}),render:e=>"object"==typeof e?JSON.stringify(e):e},{field:"output",name:s.i18n.translate("indexPatternFieldEditor.samples.outputHeader",{defaultMessage:"Output"}),render:e=>"html"===t?Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:e}}):Object(l.jsx)("div",null,e)}];return e.length?Object(l.jsx)(o.EuiFormRow,{label:Object(l.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.samplesHeader",defaultMessage:"Samples"})},Object(l.jsx)(o.EuiBasicTable,{className:"kbnFieldFormatEditor__samples",compressed:!0,items:e,columns:n})):null}}r()(samples_FormatEditorSamples,"defaultProps",{sampleType:"text"})},82:function(e,t,n){"use strict";n.r(t),n.d(t,"DurationFormatEditor",(function(){return DurationFormatEditor}));var a=n(3),r=n.n(a),i=n(1),o=n.n(i),s=n(4),u=n(12),l=n(2),d=n(7),c=n(56),f=n(28),m=n(0);class DurationFormatEditor extends d.DefaultFormatEditor{constructor(...e){super(...e),r()(this,"state",{...d.defaultState,sampleInputs:[-123,1,12,123,658,1988,3857,123292,923528271],hasDecimalError:!1})}static getDerivedStateFromProps(e,t){const n=super.getDerivedStateFromProps(e,t);let a=null;return!e.format.isHuman()&&e.formatParams.outputPrecision>20?(a=l.i18n.translate("indexPatternFieldEditor.durationErrorMessage",{defaultMessage:"Decimal places must be between 0 and 20"}),e.onError(a),{...n,error:a,hasDecimalError:!0}):{...n,hasDecimalError:!1}}render(){const{format:e}=this.props,{error:t,samples:n,hasDecimalError:a}=this.state,r={includeSpaceWithSuffix:e.getParamDefaults().includeSpaceWithSuffix,...this.props.formatParams};return Object(m.jsx)(i.Fragment,null,Object(m.jsx)(s.EuiFormRow,{label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.inputFormatLabel",defaultMessage:"Input format"}),isInvalid:!!t,error:a?null:t},Object(m.jsx)(s.EuiSelect,{"data-test-subj":"durationEditorInputFormat",value:r.inputFormat,options:e.type.inputFormats.map((e=>({value:e.kind,text:e.text}))),onChange:e=>{this.onChange({inputFormat:e.target.value})},isInvalid:!!t})),Object(m.jsx)(s.EuiFormRow,{label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.outputFormatLabel",defaultMessage:"Output format"}),isInvalid:!!t},Object(m.jsx)(s.EuiSelect,{"data-test-subj":"durationEditorOutputFormat",value:r.outputFormat,options:e.type.outputFormats.map((e=>({value:e.method,text:e.text}))),onChange:e=>{this.onChange({outputFormat:e.target.value})},isInvalid:!!t})),e.isHuman()?null:Object(m.jsx)(o.a.Fragment,null,Object(m.jsx)(s.EuiFormRow,{label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.decimalPlacesLabel",defaultMessage:"Decimal places"}),isInvalid:!!t,error:a?t:null},Object(m.jsx)(s.EuiFieldNumber,{value:r.outputPrecision,min:0,max:20,onChange:e=>{this.onChange({outputPrecision:e.target.value?Number(e.target.value):null})},isInvalid:!!t})),!e.isHumanPrecise()&&Object(m.jsx)(s.EuiFormRow,null,Object(m.jsx)(s.EuiSwitch,{label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.showSuffixLabel",defaultMessage:"Show suffix"}),checked:Boolean(r.showSuffix),onChange:e=>{this.onChange({showSuffix:!r.showSuffix})}})),Object(m.jsx)(s.EuiFormRow,null,Object(m.jsx)(s.EuiSwitch,{disabled:!Boolean(r.showSuffix)&&!e.isHumanPrecise(),label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.showSuffixLabel.short",defaultMessage:"Use short suffix"}),checked:Boolean(r.useShortSuffix),onChange:e=>{this.onChange({useShortSuffix:!r.useShortSuffix})}})),Object(m.jsx)(s.EuiFormRow,null,Object(m.jsx)(s.EuiSwitch,{disabled:!Boolean(r.showSuffix)&&!e.isHumanPrecise(),label:Object(m.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.duration.includeSpace",defaultMessage:"Include space between suffix and value"}),checked:Boolean(r.includeSpaceWithSuffix),onChange:e=>{this.onChange({includeSpaceWithSuffix:!r.includeSpaceWithSuffix})}}))),Object(m.jsx)(c.a,{samples:n}))}}r()(DurationFormatEditor,"formatId",f.a)}}]);