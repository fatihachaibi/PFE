(window.visualizations_bundle_jsonpfunction=window.visualizations_bundle_jsonpfunction||[]).push([[11],{131:function(e,t,i){var n=i(57),o=i(132);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},132:function(e,t,i){(t=i(58)(!1)).push([e.i,"kbn-top-nav,filter-bar,.kbnTopNavMenu__wrapper,::-webkit-scrollbar,.euiNavDrawer{display:none !important}.visEditorScreenshotModeActive .visEditor__content .visEditor--default>:not(.visEditor__visualization__wrapper){display:none !important}.visEditorScreenshotModeActive .tvbEditorVisualization{position:static !important}.visEditorScreenshotModeActive .visualize .tvbVisTimeSeries__legendToggle{display:none}.visEditorScreenshotModeActive .tvbEditor--hideForReporting{display:none}.visEditorScreenshotModeActive .visEditor .visEditor__canvas{padding-left:0;position:fixed;width:100%;height:100%;top:0;left:0}.visEditorScreenshotModeActive .visualize .visLegend__toggle,.visEditorScreenshotModeActive .visualize .kbnAggTable__controls,.visEditorScreenshotModeActive .visualize .leaflet-container .leaflet-top.leaflet-left,.visEditorScreenshotModeActive .visualize paginate-controls{display:none}.visEditorScreenshotModeActive .vis-editor visualization{min-height:0 !important}\n",""]),e.exports=t},133:function(e,t,i){var n=i(57),o=i(134);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},134:function(e,t,i){(t=i(58)(!1)).push([e.i,"kbn-top-nav,filter-bar,.kbnTopNavMenu__wrapper,::-webkit-scrollbar,.euiNavDrawer{display:none !important}.visEditorScreenshotModeActive .visEditor__content .visEditor--default>:not(.visEditor__visualization__wrapper){display:none !important}.visEditorScreenshotModeActive .tvbEditorVisualization{position:static !important}.visEditorScreenshotModeActive .visualize .tvbVisTimeSeries__legendToggle{display:none}.visEditorScreenshotModeActive .tvbEditor--hideForReporting{display:none}.visEditorScreenshotModeActive .visEditor .visEditor__canvas{padding-left:0;position:fixed;width:100%;height:100%;top:0;left:0}.visEditorScreenshotModeActive .visualize .visLegend__toggle,.visEditorScreenshotModeActive .visualize .kbnAggTable__controls,.visEditorScreenshotModeActive .visualize .leaflet-container .leaflet-top.leaflet-left,.visEditorScreenshotModeActive .visualize paginate-controls{display:none}.visEditorScreenshotModeActive .vis-editor visualization{min-height:0 !important}\n",""]),e.exports=t},183:function(e,t,i){switch(window.__kbnThemeTag__){case"v8dark":return i(131);case"v8light":return i(133)}},57:function(e,t,i){"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),r=[];function a(e){for(var t=-1,i=0;i<r.length;i++)if(r[i].identifier===e){t=i;break}return t}function s(e,t){for(var i={},n=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var v=a(l),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==v?(r[v].references++,r[v].updater(u)):r.push({identifier:l,updater:h(u,t),references:1}),n.push(l)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function v(e,t,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function u(e,t,i){var n=i.css,o=i.media,r=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,p=0;function h(e,t){var i,n,o;if(t.singleton){var r=p++;i=f||(f=c(t)),n=v.bind(null,i,r,!1),o=v.bind(null,i,r,!0)}else i=c(t),n=u.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var o=a(i[n]);r[o].references--}for(var c=s(e,t),d=0;d<i.length;d++){var l=a(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=c}}}},58:function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i,n,o,r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var s=(i=a,n=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(o," */")),c=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[r].concat(c).concat([s]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),t.push(c))}},t}}}]);