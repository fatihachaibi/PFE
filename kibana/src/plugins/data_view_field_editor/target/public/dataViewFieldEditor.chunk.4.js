(window.dataViewFieldEditor_bundle_jsonpfunction=window.dataViewFieldEditor_bundle_jsonpfunction||[]).push([[4],{49:function(e,t,n){"use strict";var a,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function i(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},a=[],r=0;r<e.length;r++){var s=e[r],l=t.base?s[0]+t.base:s[0],u=n[l]||0,c="".concat(l," ").concat(u);n[l]=u+1;var d=i(c),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:c,updater:h(f,t),references:1}),a.push(c)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=n.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,c=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,a){var r=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=c(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function f(e,t,n){var a=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,m=0;function h(e,t){var n,a,r;if(t.singleton){var o=m++;n=p||(p=l(t)),a=d.bind(null,n,o,!1),r=d.bind(null,n,o,!0)}else n=l(t),a=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var r=i(n[a]);o[r].references--}for(var l=s(e,t),u=0;u<n.length;u++){var c=i(n[u]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=l}}}},50:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,a,r,o=e[1]||"",i=e[3];if(!i)return o;if(t&&"function"==typeof btoa){var s=(n=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(r," */")),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([s]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},51:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(52);case"v8light":return n(54)}},52:function(e,t,n){var a=n(49),r=n(53);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);a(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},53:function(e,t,n){(t=n(50)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},54:function(e,t,n){var a=n(49),r=n(55);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);a(r,{insert:"head",singleton:!1}),e.exports=r.locals||{}},55:function(e,t,n){(t=n(50)(!1)).push([e.i,".kbnFieldFormatEditor__samples audio{max-width:100%}\n",""]),e.exports=t},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return samples_FormatEditorSamples}));var a=n(3),r=n.n(a),o=(n(51),n(1)),i=n(4),s=n(2),l=n(12),u=n(0);class samples_FormatEditorSamples extends o.PureComponent{render(){const{samples:e,sampleType:t}=this.props,n=[{field:"input",name:s.i18n.translate("indexPatternFieldEditor.samples.inputHeader",{defaultMessage:"Input"}),render:e=>"object"==typeof e?JSON.stringify(e):e},{field:"output",name:s.i18n.translate("indexPatternFieldEditor.samples.outputHeader",{defaultMessage:"Output"}),render:e=>"html"===t?Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:e}}):Object(u.jsx)("div",null,e)}];return e.length?Object(u.jsx)(i.EuiFormRow,{label:Object(u.jsx)(l.FormattedMessage,{id:"indexPatternFieldEditor.samplesHeader",defaultMessage:"Samples"})},Object(u.jsx)(i.EuiBasicTable,{className:"kbnFieldFormatEditor__samples",compressed:!0,items:e,columns:n})):null}}r()(samples_FormatEditorSamples,"defaultProps",{sampleType:"text"})},80:function(e,t,n){"use strict";n.r(t),n.d(t,"DateFormatEditor",(function(){return DateFormatEditor}));var a=n(3),r=n.n(a),o=n(1),i=n(48),s=n.n(i),l=n(4),u=n(12),c=n(7),d=n(26),f=n(56),p=n(0);class DateFormatEditor extends c.DefaultFormatEditor{constructor(...e){super(...e),r()(this,"state",{...c.defaultState,sampleInputs:[Date.now(),s()().startOf("year").valueOf(),s()().endOf("year").valueOf()]})}render(){const{format:e,formatParams:t}=this.props,{error:n,samples:a}=this.state,r=e.getParamDefaults().pattern;return Object(p.jsx)(o.Fragment,null,Object(p.jsx)(l.EuiFormRow,{label:Object(p.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.date.momentLabel",defaultMessage:"Moment.js format pattern (Default: {defaultPattern})",values:{defaultPattern:Object(p.jsx)(l.EuiCode,null,r)}}),isInvalid:!!n,error:n,helpText:Object(p.jsx)("span",null,Object(p.jsx)(l.EuiLink,{target:"_blank",href:"https://momentjs.com/"},Object(p.jsx)(u.FormattedMessage,{id:"indexPatternFieldEditor.date.documentationLabel",defaultMessage:"Documentation"})," ",Object(p.jsx)(l.EuiIcon,{type:"link"})))},Object(p.jsx)(l.EuiFieldText,{"data-test-subj":"dateEditorPattern",value:t.pattern,placeholder:r,onChange:e=>{this.onChange({pattern:e.target.value})},isInvalid:!!n})),Object(p.jsx)(f.a,{samples:a}))}}r()(DateFormatEditor,"formatId",d.a)}}]);