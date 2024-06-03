/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.reporting_bundle_jsonpfunction=window.reporting_bundle_jsonpfunction||[]).push([[3],{35:function(e,t,n){"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:v(f,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=c(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=s}}}},36:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,o,i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var c=(n=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(o," */")),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(s).concat([c]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},43:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(44);case"v8light":return n(46)}},44:function(e,t,n){var r=n(35),o=n(45);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},45:function(e,t,n){(t=n(36)(!1)).push([e.i,".reportingRedirectApp__interstitialPage{margin:40px auto}\n",""]),e.exports=t},46:function(e,t,n){var r=n(35),o=n(47);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);r(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},47:function(e,t,n){(t=n(36)(!1)).push([e.i,".reportingRedirectApp__interstitialPage{margin:40px auto}\n",""]),e.exports=t},57:function(e,t,n){"use strict";n.r(t),n.d(t,"mountRedirectApp",(function(){return f}));var r=n(33),o=n(4),i=n(6),a=n(15),c=n(2),s=n(3),u=(n(43),n(0));const l={errorTitle:c.i18n.translate("xpack.reporting.redirectApp.errorTitle",{defaultMessage:"Redirect error"}),consoleMessagePrefix:c.i18n.translate("xpack.reporting.redirectApp.redirectConsoleErrorPrefixLabel",{defaultMessage:"Redirect page error:"})},d=({apiClient:e,screenshotMode:t,share:n})=>{const[r,c]=Object(o.useState)();return Object(o.useEffect)((()=>{(async()=>{try{let o;const{jobId:i}=Object(a.parse)(window.location.search);if(i){var r;const t=await e.getInfo(i);o=null==t||null===(r=t.locatorParams)||void 0===r?void 0:r[0]}else o=t.getScreenshotContext(s.w);if(!o)throw new Error("Could not find locator params for report");n.navigate(o)}catch(e){throw c(e),console.error(l.consoleMessagePrefix,e.message),e}})()}),[e,t,n]),Object(u.jsx)("div",{className:"reportingRedirectApp__interstitialPage"},r?Object(u.jsx)(i.EuiCallOut,{title:l.errorTitle,color:"danger"},Object(u.jsx)("p",null,r.message),r.stack&&Object(u.jsx)(i.EuiCodeBlock,null,r.stack)):Object(u.jsx)("div",null))},f=({element:e,apiClient:t,history:n,screenshotMode:o,share:a})=>(Object(r.render)(Object(u.jsx)(i.EuiErrorBoundary,null,Object(u.jsx)(d,{apiClient:t,history:n,screenshotMode:o,share:a})),e),()=>{Object(r.unmountComponentAtNode)(e)})}}]);