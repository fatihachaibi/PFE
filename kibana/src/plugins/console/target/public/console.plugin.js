!function(e){function t(t){for(var n,s,r=t[0],i=t[1],a=0,l=[];a<r.length;a++)s=r[a],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&l.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(c&&c(t);l.length;)l.shift()()}var n={},o={0:0};function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,s){n=o[e]=[t,s]}));t.push(n[2]=r);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(e){return s.p+"console.chunk."+e+".js"}(e);var c=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",c.name="ChunkLoadError",c.type=s,c.request=r,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var r=window.console_bundle_jsonpfunction=window.console_bundle_jsonpfunction||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var a=0;a<r.length;a++)t(r[a]);var c=i;s(s.s=12)}([function(e,t,n){e.exports=n(11)(2)},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t,n){"use strict";n.d(t,"d",(function(){return o.a})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return autocomplete_AutocompleteInfo})),n.d(t,"g",(function(){return _})),n.d(t,"h",(function(){return g}));var o=n(5),s=n(1);let r;!function(e){e.WIDTH="widths"}(r||(r={}));class storage_Storage{constructor(e,t){this.engine=e,this.prefix=t}encode(e){return JSON.stringify(e)}decode(e){if("string"==typeof e)return JSON.parse(e)}encodeKey(e){return`${this.prefix}${e}`}decodeKey(e){if(Object(s.startsWith)(e,this.prefix))return`${e.slice(this.prefix.length)}`}set(e,t){return this.engine.setItem(this.encodeKey(e),this.encode(t)),t}has(e){return null!=this.engine.getItem(this.encodeKey(e))}get(e,t){return this.has(e)?this.decode(this.engine.getItem(this.encodeKey(e))):t}delete(e){return this.engine.removeItem(this.encodeKey(e))}keys(){return Object(s.transform)(Object(s.keys)(this.engine),((e,t)=>{const n=this.decodeKey(t);null!=n&&e.push(n)}))}}function i(e){return new storage_Storage(e.engine,e.prefix)}const a=Object.freeze({fontSize:14,polling:!0,pollInterval:6e4,tripleQuotes:!0,wrapMode:!0,autocomplete:Object.freeze({fields:!0,indices:!0,templates:!0,dataStreams:!0}),isHistoryDisabled:!1,isKeyboardShortcutsDisabled:!1});var c;!function(e){e.FONT_SIZE="font_size",e.WRAP_MODE="wrap_mode",e.TRIPLE_QUOTES="triple_quotes",e.AUTOCOMPLETE_SETTINGS="autocomplete_settings",e.CONSOLE_POLLING="console_polling",e.POLL_INTERVAL="poll_interval",e.IS_HISTORY_DISABLED="is_history_disabled",e.IS_KEYBOARD_SHORTCUTS_DISABLED="is_keyboard_shortcuts_disabled"}(c||(c={}));class Settings{constructor(e){this.storage=e}getFontSize(){return this.storage.get(c.FONT_SIZE,a.fontSize)}setFontSize(e){return this.storage.set(c.FONT_SIZE,e),!0}getWrapMode(){return this.storage.get(c.WRAP_MODE,a.wrapMode)}setWrapMode(e){return this.storage.set(c.WRAP_MODE,e),!0}setTripleQuotes(e){return this.storage.set(c.TRIPLE_QUOTES,e),!0}getTripleQuotes(){return this.storage.get(c.TRIPLE_QUOTES,a.tripleQuotes)}getAutocomplete(){return this.storage.get(c.AUTOCOMPLETE_SETTINGS,a.autocomplete)}setAutocomplete(e){return this.storage.set(c.AUTOCOMPLETE_SETTINGS,e),!0}getPolling(){return this.storage.get(c.CONSOLE_POLLING,a.polling)}setPolling(e){return this.storage.set(c.CONSOLE_POLLING,e),!0}setIsHistoryDisabled(e){return this.storage.set(c.IS_HISTORY_DISABLED,e),!0}getIsHistoryDisabled(){return this.storage.get(c.IS_HISTORY_DISABLED,a.isHistoryDisabled)}setPollInterval(e){this.storage.set(c.POLL_INTERVAL,e)}getPollInterval(){return this.storage.get(c.POLL_INTERVAL,a.pollInterval)}setIsKeyboardShortcutsDisabled(e){return this.storage.set(c.IS_KEYBOARD_SHORTCUTS_DISABLED,e),!0}getIsKeyboardShortcutsDisabled(){return this.storage.get(c.IS_KEYBOARD_SHORTCUTS_DISABLED,a.isKeyboardShortcutsDisabled)}toJSON(){return{autocomplete:this.getAutocomplete(),wrapMode:this.getWrapMode(),tripleQuotes:this.getTripleQuotes(),fontSize:parseFloat(this.getFontSize()),polling:Boolean(this.getPolling()),pollInterval:this.getPollInterval(),isHistoryDisabled:Boolean(this.getIsHistoryDisabled()),isKeyboardShortcutsDisabled:Boolean(this.getIsKeyboardShortcutsDisabled())}}updateSettings({fontSize:e,wrapMode:t,tripleQuotes:n,autocomplete:o,polling:s,pollInterval:r,isHistoryDisabled:i,isKeyboardShortcutsDisabled:a}){this.setFontSize(e),this.setWrapMode(t),this.setTripleQuotes(n),this.setAutocomplete(o),this.setPolling(s),this.setPollInterval(r),this.setIsHistoryDisabled(i),this.setIsKeyboardShortcutsDisabled(a)}}function l({storage:e}){return new Settings(e)}var p=n(0),u=n.n(p),d=n(8),h=n(9),f=n(3);class autocomplete_AutocompleteInfo{constructor(){u()(this,"alias",new f.a),u()(this,"mapping",new f.f),u()(this,"dataStream",new f.c),u()(this,"legacyTemplate",new f.e),u()(this,"indexTemplate",new f.d),u()(this,"componentTemplate",new f.b),u()(this,"http",void 0),u()(this,"pollTimeoutId",void 0)}setup(e){this.http=e}getEntityProvider(e,t={indices:[],types:[]}){switch(e){case"indices":const n=!0,o=this.mapping;return()=>this.alias.getIndices(n,o);case"fields":return this.mapping.getMappings(t.indices,t.types);case"indexTemplates":return()=>this.indexTemplate.getTemplates();case"componentTemplates":return()=>this.componentTemplate.getTemplates();case"legacyTemplates":return()=>this.legacyTemplate.getTemplates();case"dataStreams":return()=>this.dataStream.getDataStreams();default:throw new Error(`Unsupported type: ${e}`)}}retrieve(e,t){this.clearSubscriptions(),this.http.get(`${h.a}/autocomplete_entities`,{query:{...t}}).then((t=>{this.load(t),this.pollTimeoutId=setTimeout((()=>{e.getPolling()&&this.retrieve(e,e.getAutocomplete())}),e.getPollInterval())}))}clearSubscriptions(){this.pollTimeoutId&&clearTimeout(this.pollTimeoutId)}load(e){this.mapping.loadMappings(e.mappings);const t=this.mapping;this.alias.loadAliases(e.aliases,t),this.indexTemplate.loadTemplates(e.indexTemplates),this.componentTemplate.loadTemplates(e.componentTemplates),this.legacyTemplate.loadTemplates(e.legacyTemplates),this.dataStream.loadDataStreams(e.dataStreams)}clear(){this.alias.clearAliases(),this.mapping.clearMappings(),this.dataStream.clearDataStreams(),this.legacyTemplate.clearTemplates(),this.indexTemplate.clearTemplates(),this.componentTemplate.clearTemplates()}}const[_,g]=Object(d.createGetterSetter)("AutocompleteInfo")},function(e,t,n){"use strict";n.d(t,"a",(function(){return alias_Alias})),n.d(t,"f",(function(){return mapping_Mapping})),n.d(t,"c",(function(){return data_stream_DataStream})),n.d(t,"e",(function(){return legacy_template_LegacyTemplate})),n.d(t,"d",(function(){return index_template_IndexTemplate})),n.d(t,"b",(function(){return component_template_ComponentTemplate})),n.d(t,"g",(function(){return u}));var o=n(0),s=n.n(o);class alias_Alias{constructor(){s()(this,"perAliasIndexes",{}),s()(this,"getIndices",((e,t)=>{const n=[],o=t.perIndexTypes;return Object.keys(o).forEach((e=>{e.startsWith(".ds")||n.push(e)})),(void 0===e||e)&&Object.keys(this.perAliasIndexes).forEach((e=>{n.push(e)})),n})),s()(this,"loadAliases",((e,t)=>{this.perAliasIndexes={};const n=t.perIndexTypes;Object.entries(e).forEach((([e,t])=>{n[e]=n[e]||{},Object.keys(t.aliases||{}).forEach((t=>{if(t===e)return;let n=this.perAliasIndexes[t];n||(n=[],this.perAliasIndexes[t]=n),n.push(e)}))})),this.perAliasIndexes._all=this.getIndices(!1,t)})),s()(this,"clearAliases",(()=>{this.perAliasIndexes={}}))}}var r=n(1),i=n.n(r),a=n(2);function c(e){const t=Object(a.g)().alias.perAliasIndexes;if(!e)return e;"string"==typeof e&&(e=[e]),e=e.flatMap((e=>t[e]?t[e]:[e]));let n=[].concat.apply([],e);return n.sort(),n=n.reduce(((e,t,n,o)=>(o[n-1]!==t&&e.push(t),e)),[]),n.length>1?n:n[0]}function l(e={}){const t=Object.entries(e).flatMap((([e,t])=>p(e,t)));return i.a.uniqBy(t,(function(e){return e.name+":"+e.type}))}function p(e,t){if(!1===t.enabled)return[];let n;function o(n){return"full"===(t.path||"full")?n.map((t=>(t.name=e+"."+t.name,t))):n}if(t.properties)return n=l(t.properties),o(n);const s=t.type,r={name:e,type:s};return t.index_name&&(r.name=t.index_name),t.fields?(n=Object.entries(t.fields).flatMap((([e,t])=>p(e,t))),n=o(n),n.unshift(r),n):[r]}class mapping_Mapping{constructor(){s()(this,"perIndexTypes",{}),s()(this,"getMappings",((e,t)=>{let n=[];if("string"==typeof(e=c(e))){const o=this.perIndexTypes[e];if(!o)return[];if("string"==typeof t){const e=o[t];Array.isArray(e)&&(n=e)}else Object.entries(o).forEach((([e,o])=>{t&&0!==t.length&&!t.includes(e)||n.push(o)})),n=[].concat.apply([],n)}else Object.keys(this.perIndexTypes).forEach((o=>{e&&0!==e.length&&!e.includes(o)||n.push(this.getMappings(o,t))})),n=[].concat.apply([],n);return i.a.uniqBy(n,(function(e){return e.name+":"+e.type}))})),s()(this,"loadMappings",(e=>{let t;Object.keys(e).length>10485760?(console.warn(`Mapping size is larger than 10MB (${Object.keys(e).length/1024/1024} MB). Ignoring...`),t={}):t=e,this.perIndexTypes={},Object.entries(t).forEach((([e,t])=>{const n={};let o=t;t.mappings&&1===Object.keys(t).length&&(o=t.mappings),Object.entries(o).forEach((([e,t])=>{if("properties"===e){const o=l(t);n[e]=o}else n[e]=[]})),this.perIndexTypes[e]=n}))})),s()(this,"clearMappings",(()=>{this.perIndexTypes={}}))}}class data_stream_DataStream{constructor(){s()(this,"dataStreams",[]),s()(this,"getDataStreams",(()=>[...this.dataStreams])),s()(this,"loadDataStreams",(e=>{var t;this.dataStreams=(null!==(t=e.data_streams)&&void 0!==t?t:[]).map((({name:e})=>e)).sort()})),s()(this,"clearDataStreams",(()=>{this.dataStreams=[]}))}}class base_template_BaseTemplate{constructor(){s()(this,"templates",[]),s()(this,"getTemplates",(()=>[...this.templates])),s()(this,"clearTemplates",(()=>{this.templates=[]}))}}class legacy_template_LegacyTemplate extends base_template_BaseTemplate{constructor(...e){super(...e),s()(this,"loadTemplates",(e=>{this.templates=Object.keys(e).sort()}))}}class index_template_IndexTemplate extends base_template_BaseTemplate{constructor(...e){super(...e),s()(this,"loadTemplates",(e=>{var t;this.templates=(null!==(t=e.index_templates)&&void 0!==t?t:[]).map((({name:e})=>e)).sort()}))}}class component_template_ComponentTemplate extends base_template_BaseTemplate{constructor(...e){super(...e),s()(this,"loadTemplates",(e=>{var t;this.templates=(null!==(t=e.component_templates)&&void 0!==t?t:[]).map((({name:e})=>e)).sort()}))}}function u(e){let t=[];const n=Object(a.g)().mapping.perIndexTypes;if("string"==typeof(e=c(e))){const o=n[e];if(!o)return[];Array.isArray(o)?o.forEach((e=>{t.push(e)})):"object"==typeof o&&Object.keys(o).forEach((e=>{t.push(e)}))}else Object.keys(n).forEach((n=>{e&&!e.includes(n)||t.push(u(n))})),t=[].concat.apply([],t);return i.a.uniq(t)}},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var o=n(0),s=n.n(o),r=n(10);const i=e=>"QuotaExceededError"===e.name;class History{constructor(e){s()(this,"changeEmitter",void 0),this.storage=e,this.changeEmitter=new r.BehaviorSubject(this.getHistory()||[])}getHistoryKeys(){return this.storage.keys().filter((e=>0===e.indexOf("hist_elem"))).sort().reverse()}getHistory(){return this.getHistoryKeys().map((e=>this.storage.get(e)))}change(e){const t=this.changeEmitter.subscribe(e);return()=>t.unsubscribe()}addToHistory(e,t,n){const o=this.getHistoryKeys();o.splice(0,100),o.forEach((e=>{this.storage.delete(e)}));const s=(new Date).getTime(),r="hist_elem_"+s;this.storage.set(r,{time:s,endpoint:e,method:t,data:n}),this.changeEmitter.next(this.getHistory())}updateCurrentState(e){const t=(new Date).getTime();this.storage.set("editor_state",{time:t,content:e})}getLegacySavedEditorState(){const e=this.storage.get("editor_state");if(!e)return;const{time:t,content:n}=e;return{time:t,content:n}}deleteLegacySavedEditorState(){this.storage.delete("editor_state")}clearHistory(){this.getHistoryKeys().forEach((e=>this.storage.delete(e)))}}function a(e){return new History(e.storage)}},function(e,t,n){"use strict";var o,s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function i(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},o=[],s=0;s<e.length;s++){var a=e[s],c=t.base?a[0]+t.base:a[0],l=n[c]||0,p="".concat(c," ").concat(l);n[c]=l+1;var u=i(p),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(d)):r.push({identifier:p,updater:_(d,t),references:1}),o.push(p)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,o){var s=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,s);else{var r=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function d(e,t,n){var o=n.css,s=n.media,r=n.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,f=0;function _(e,t){var n,o,s;if(t.singleton){var r=f++;n=h||(h=c(t)),o=u.bind(null,n,r,!1),s=u.bind(null,n,r,!0)}else n=c(t),o=d.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var s=i(n[o]);r[s].references--}for(var c=a(e,t),l=0;l<n.length;l++){var p=i(n[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}n=c}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,o,s,r=e[1]||"",i=e[3];if(!i)return r;if(t&&"function"==typeof btoa){var a=(n=i,o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(s," */")),c=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[r].concat(c).concat([a]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(s[i]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&s[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){n.r(t);var o=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));const o="/api/console",s="kbn:"},function(e,t){e.exports=__kbnSharedDeps__.Rxjs},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){n(13),__kbnBundles__.define("plugin/console/public",n,19)},function(e,t,n){n.p=window.__kbnPublicPath__.console},function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(15);case"v8light":return n(17)}},function(e,t,n){var o=n(6),s=n(16);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);o(s,{insert:"head",singleton:!1}),e.exports=s.locals||{}},function(e,t,n){(t=n(7)(!1)).push([e.i,"#consoleRoot{display:flex;flex:1 1 auto;overflow:hidden}.consoleContainer{padding:8px}.conApp{display:flex;flex:1 1 auto}.conApp__editor{width:100%;display:flex;flex:0 0 auto;position:relative}.conApp__editor__spinner{width:100%}.conApp__output{display:flex;flex:1 1 1px}.conApp__editorContent,.conApp__outputContent{height:100%;flex:1 1 1px}.conApp__editorActions{position:absolute;z-index:1000;top:0;right:16px;line-height:1;min-width:40px}.conApp__editorActions button{line-height:inherit}.conApp__resizer{position:relative;display:flex;flex:0 0 14px;background-color:#141519;align-items:center;justify-content:center;margin:0;-webkit-user-select:none;user-select:none;width:14px;z-index:1000}.conApp__resizer:hover{background-color:#164160}.conApp__resizer:focus,.conApp__resizer.active{background-color:#36A2EF;color:#1D1E24}.conApp__resizer::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;cursor:ew-resize}.conApp__autoComplete{position:absolute;left:-1000px;visibility:hidden;z-index:1002;margin-top:22px}.conApp__settingsModal{min-width:460px}.conApp__requestProgressBarContainer{position:relative;z-index:2000}.conApp__tabsExtension{border-bottom:1px solid #343741}.conHelp__example{display:block;height:128px;margin:16px 0}.conHistory{box-shadow:0 1px 5px rgba(0,0,0,0.25),0 3.6px 13px rgba(0,0,0,0.175),0 8.4px 23px rgba(0,0,0,0.15),0 23px 35px rgba(0,0,0,0.125);padding:12px}.conHistory__body{display:flex;height:320px}.conHistory__body>ul{margin-bottom:0}.conHistory__body__spacer{flex:0 0 1%}.conHistory__reqs,.conHistory__viewer{flex:0 0 49.5%}.conHistory__reqs{overflow:auto}.conHistory__req{display:flex;justify-content:space-between}.conHistory__req-selected{background-color:#25262E}.conHistory__reqIcon{color:#535966}\n",""]),e.exports=t},function(e,t,n){var o=n(6),s=n(18);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);o(s,{insert:"head",singleton:!1}),e.exports=s.locals||{}},function(e,t,n){(t=n(7)(!1)).push([e.i,"#consoleRoot{display:flex;flex:1 1 auto;overflow:hidden}.consoleContainer{padding:8px}.conApp{display:flex;flex:1 1 auto}.conApp__editor{width:100%;display:flex;flex:0 0 auto;position:relative}.conApp__editor__spinner{width:100%}.conApp__output{display:flex;flex:1 1 1px}.conApp__editorContent,.conApp__outputContent{height:100%;flex:1 1 1px}.conApp__editorActions{position:absolute;z-index:1000;top:0;right:16px;line-height:1;min-width:40px}.conApp__editorActions button{line-height:inherit}.conApp__resizer{position:relative;display:flex;flex:0 0 14px;background-color:#fafbfd;align-items:center;justify-content:center;margin:0;-webkit-user-select:none;user-select:none;width:14px;z-index:1000}.conApp__resizer:hover{background-color:#cce4f5}.conApp__resizer:focus,.conApp__resizer.active{background-color:#07C;color:#fff}.conApp__resizer::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;cursor:ew-resize}.conApp__autoComplete{position:absolute;left:-1000px;visibility:hidden;z-index:1002;margin-top:22px}.conApp__settingsModal{min-width:460px}.conApp__requestProgressBarContainer{position:relative;z-index:2000}.conApp__tabsExtension{border-bottom:1px solid #D3DAE6}.conHelp__example{display:block;height:128px;margin:16px 0}.conHistory{box-shadow:0 1px 5px rgba(0,0,0,0.1),0 3.6px 13px rgba(0,0,0,0.07),0 8.4px 23px rgba(0,0,0,0.06),0 23px 35px rgba(0,0,0,0.05);padding:12px}.conHistory__body{display:flex;height:320px}.conHistory__body>ul{margin-bottom:0}.conHistory__body__spacer{flex:0 0 1%}.conHistory__reqs,.conHistory__viewer{flex:0 0 49.5%}.conHistory__reqs{overflow:auto}.conHistory__req{display:flex;justify-content:space-between}.conHistory__req-selected{background-color:#F5F7FA}.conHistory__reqIcon{color:#98A2B3}\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"Plugin",(function(){return plugin_ConsoleUIPlugin})),n.d(t,"plugin",(function(){return a})),n(14);var o=n(0),s=n.n(o),r=n(4),i=n(2);class plugin_ConsoleUIPlugin{constructor(e){s()(this,"autocompleteInfo",new i.a),this.ctx=e}setup({notifications:e,getStartServices:t,http:o},{devTools:s,home:a,share:c,usageCollection:l}){const{ui:{enabled:p}}=this.ctx.config.get();return this.autocompleteInfo.setup(o),Object(i.h)(this.autocompleteInfo),p?(a&&a.featureCatalogue.register({id:"console",title:r.i18n.translate("console.devToolsTitle",{defaultMessage:"Interact with the Elasticsearch API"}),description:r.i18n.translate("console.devToolsDescription",{defaultMessage:"Skip cURL and use a JSON interface to work with your data in Console."}),icon:"consoleApp",path:"/app/dev_tools#/console",showOnHomePage:!1,category:"admin"}),s.register({id:"console",order:1,title:r.i18n.translate("console.consoleDisplayName",{defaultMessage:"Console"}),enableRouting:!1,mount:async({element:s,theme$:r})=>{const[i]=await t(),{i18n:{Context:a},docLinks:{DOC_LINK_VERSION:c,links:p}}=i,{renderApp:u}=await n.e(1).then(n.bind(null,60));return u({http:o,docLinkVersion:c,docLinks:p,I18nContext:a,notifications:e,usageCollection:l,element:s,theme$:r,autocompleteInfo:this.autocompleteInfo})}}),{locator:c.url.locators.create({id:"CONSOLE_APP_LOCATOR",getLocation:async({loadFrom:e})=>({app:"dev_tools",path:"#/console"+(e?`?load_from=${e}`:""),state:{loadFrom:e}})})}):{}}start(){}}function a(e){return new plugin_ConsoleUIPlugin(e)}},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t,n){n.r(t);var o=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,n){n.r(t);var o=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(o))},function(e,t){e.exports=__kbnSharedDeps__.Jquery},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.KbnAnalytics},function(e,t){e.exports=__kbnSharedDeps__.Moment}]);