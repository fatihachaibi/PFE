!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){e.exports=n(3)(2)},function(e,t,n){n(2),__kbnBundles__.define("plugin/savedObjectsTaggingOss/public",n,4)},function(e,t,n){n.p=window.__kbnPublicPath__.savedObjectsTaggingOss},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,n){"use strict";n.r(t),n.d(t,"plugin",(function(){return g}));var r=n(0),i=n.n(r);const a=e=>{e.mapping={...e.mapping,__tags:"text"};const t=e.extractReferences,n=e.injectReferences;e.injectReferences=(e,t)=>{n&&n(e,t),((e,t=[])=>{e.__tags=t.filter((({type:e})=>"tag"===e)).map((({id:e})=>e))})(e,t)},e.extractReferences=e=>(t&&(e=t(e)),(({attributes:e,references:t})=>{var n;const{__tags:r,...i}=e;return{attributes:i,references:[...t,...(null!==(n=[...new Set(r)])&&void 0!==n?n:[]).map((e=>({id:e,type:"tag",name:`tag-${e}`})))]}})(e))},s=e=>{e.getTags=()=>{var t;return null!==(t=e.__tags)&&void 0!==t?t:[]},e.setTags=t=>{e.__tags=t}},o={id:"tag",priority:100,factory:()=>({getId:()=>"tag",decorateConfig:a,decorateObject:s})};class plugin_SavedObjectTaggingOssPlugin{constructor(e){i()(this,"apiRegistered",!1),i()(this,"api",void 0)}setup({},{savedObjects:e}){return e&&e.registerDecorator(o),{registerTaggingApi:e=>{if(this.apiRegistered)throw new Error("tagging API can only be registered once");this.apiRegistered=!0,e.then((e=>{this.api=e}),(e=>{console.log("Error during tagging API promise resolution. SO tagging has been disabled",e),this.apiRegistered=!1}))}}}start({}){return{isTaggingAvailable:()=>this.apiRegistered,getTaggingApi:()=>this.api}}}const g=e=>new plugin_SavedObjectTaggingOssPlugin(e)}]);