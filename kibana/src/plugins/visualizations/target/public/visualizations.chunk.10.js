(window.visualizations_bundle_jsonpfunction=window.visualizations_bundle_jsonpfunction||[]).push([[10],{150:function(e,n,t){var i=t(57),o=t(151);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);i(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},151:function(e,n,t){(n=t(58)(!1)).push([e.i,".visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner,.visError{display:flex;flex:1 1 auto;justify-content:center;align-items:center;text-align:center}\n",""]),e.exports=n},152:function(e,n,t){var i=t(57),o=t(153);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);i(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},153:function(e,n,t){(n=t(58)(!1)).push([e.i,".visualize{display:flex;flex:1 1 100%;overflow:hidden}.visualization{display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;position:relative;padding:8px;flex:1 1 100%}.visChart{display:flex;flex:1 1 auto;min-height:0;min-width:0}.visChart--vertical{flex-direction:column}.visChart__spinner,.visError{display:flex;flex:1 1 auto;justify-content:center;align-items:center;text-align:center}\n",""]),e.exports=n},52:function(e,n,t){switch(window.__kbnThemeTag__){case"v8dark":return t(150);case"v8light":return t(152)}},57:function(e,n,t){"use strict";var i,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function a(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},i=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var f=a(u),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(r[f].references++,r[f].updater(d)):r.push({identifier:u,updater:h(d,n),references:1}),i.push(u)}return i}function s(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var r=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function d(e,n,t){var i=t.css,o=t.media,r=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,v=0;function h(e,n){var t,i,o;if(n.singleton){var r=v++;t=p||(p=s(n)),i=f.bind(null,t,r,!1),o=f.bind(null,t,r,!0)}else t=s(n),i=d.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var o=a(t[i]);r[o].references--}for(var s=c(e,n),l=0;l<t.length;l++){var u=a(t[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}t=s}}}},58:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t,i,o,r=e[1]||"",a=e[3];if(!a)return r;if(n&&"function"==typeof btoa){var c=(t=a,i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(o," */")),s=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[r].concat(s).concat([c]).join("\n")}return[r].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}}}]);