/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.canvas_bundle_jsonpfunction=window.canvas_bundle_jsonpfunction||[]).push([[13],{143:function(e,t,n){"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function r(e){return 1==(null!=(t=e)&&"object"==typeof t&&!1===Array.isArray(t))&&"[object Object]"===Object.prototype.toString.call(e);var t}e.exports=function(e){var t,n;return!1!==r(e)&&"function"==typeof(t=e.constructor)&&!1!==r(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")}},434:function(e,t,n){"use strict";n.r(t),n.d(t,"argTypeSpecs",(function(){return Z}));var r=n(16),a=n(18),l=n(61),o=n(98),s=n(54),i=n(17);const{Color:c}=s.a,u=({onValueChange:e,argValue:t,workpad:n,typeInstance:r})=>Object(i.jsx)(a.EuiFlexGroup,{gutterSize:"s"},Object(i.jsx)(a.EuiFlexItem,{grow:!1},Object(i.jsx)(o.a,{value:t,onChange:e,colors:n.colors,ariaLabel:`${r.displayName} ${c.getDisplayName()}`})));var p=n(69),b=n.n(p),j=n(65),g=n(19),d=n(76),x=n.n(d),O=n(161);const{set:m,del:y}=x.a,{SeriesStyle:f}=s.a,v=e=>{const{typeInstance:t,argValue:n,onValueChange:l,resolved:{labels:s},workpad:c}=e,{name:u}=t,p=Object(g.get)(n,"chain.0",{}),b=Object(g.get)(p,"arguments",{}),j=Object(g.get)(b,"color.0",""),d=(e,t)=>{const r=(""===t?y:m)(n,`chain.0.arguments.${e}`,[t]);return l(r)};return Object(i.jsx)(a.EuiFlexGroup,{gutterSize:"s",alignItems:"center",className:"canvasArgSeries__colorPicker"},j&&0!==j.length?Object(i.jsx)(r.Fragment,null,Object(i.jsx)(a.EuiFlexItem,{grow:!1},Object(i.jsx)("label",{htmlFor:"series-style"},Object(i.jsx)(a.EuiText,{size:"xs"},f.getColorLabel()))),Object(i.jsx)(a.EuiFlexItem,{style:{fontSize:0}},Object(i.jsx)(o.a,{anchorPosition:"leftCenter",colors:c.colors,onChange:e=>d("color",e),value:j,ariaLabel:f.getColorLabel()})),Object(i.jsx)(a.EuiFlexItem,null,Object(i.jsx)(a.EuiButtonIcon,{iconType:"cross",color:"danger",onClick:()=>d("color",""),"aria-label":f.getRemoveAriaLabel()}))):Object(i.jsx)(r.Fragment,null,Object(i.jsx)(a.EuiFlexItem,{grow:!1},Object(i.jsx)(a.EuiText,{size:"xs"},f.getColorLabel())),Object(i.jsx)(a.EuiFlexItem,{grow:!1},Object(i.jsx)(a.EuiText,{size:"xs"},Object(i.jsx)(a.EuiLink,{"aria-label":`${f.getColorLabel()}: ${f.getColorValueDefault()}`,onClick:()=>d("color","#000000")},f.getColorValueDefault())))),"defaultStyle"!==u&&(!s||0===s.length)&&Object(i.jsx)(a.EuiFlexItem,{grow:!1},Object(i.jsx)(O.b,{position:"left",icon:O.a.warning,content:f.getNoSeriesTooltip()})))};v.displayName="SeriesStyleArgSimpleInput";const{set:h,del:S}=x.a,{SeriesStyle:E}=s.a,w=e=>{const{typeInstance:t,onValueChange:n,resolved:{labels:l},argValue:o}=e,s=Object(g.get)(o,"chain.0",{}),c=Object(g.get)(s,"arguments",{}),u=Object(g.get)(c,"label.0","");let p="";t&&(p=t.name);const b=Object(g.get)(t,"options.include",[]),j=b.some((e=>-1!==["lines","bars","points"].indexOf(e))),d=(e,t)=>{const r=(""===t.target.value?S:h)(o,`chain.0.arguments.${e}`,[t.target.value]);return n(r)},x=[{value:0,text:E.getNoneOption()},{value:1,text:"1"},{value:2,text:"2"},{value:3,text:"3"},{value:4,text:"4"},{value:5,text:"5"}],O=[{value:"",text:E.getSelectSeriesOption()}];return l.sort().forEach((e=>O.push({value:e,text:e}))),Object(i.jsx)("div",null,"defaultStyle"!==p&&Object(i.jsx)(r.Fragment,null,Object(i.jsx)(a.EuiFormRow,{label:E.getSeriesIdentifierLabel(),display:"columnCompressed"},Object(i.jsx)(a.EuiSelect,{compressed:!0,value:u,options:O,onChange:e=>d("label",e)})),Object(i.jsx)(a.EuiSpacer,{size:"s"})),j&&Object(i.jsx)(r.Fragment,null,Object(i.jsx)(a.EuiSpacer,{size:"s"}),Object(i.jsx)(a.EuiFlexGroup,{gutterSize:"s"},b.includes("lines")&&Object(i.jsx)(a.EuiFlexItem,null,Object(i.jsx)(a.EuiFormRow,{label:E.getLineLabel(),display:"rowCompressed"},Object(i.jsx)(a.EuiSelect,{value:Object(g.get)(c,"lines.0",0),options:x,compressed:!0,onChange:e=>d("lines",e)}))),b.includes("bars")&&Object(i.jsx)(a.EuiFlexItem,null,Object(i.jsx)(a.EuiFormRow,{label:E.getBarLabel(),display:"rowCompressed"},Object(i.jsx)(a.EuiSelect,{value:Object(g.get)(c,"bars.0",0),options:x,compressed:!0,onChange:e=>d("bars",e)}))),b.includes("points")&&Object(i.jsx)(a.EuiFlexItem,null,Object(i.jsx)(a.EuiFormRow,{label:E.getPointLabel(),display:"rowCompressed"},Object(i.jsx)(a.EuiSelect,{value:Object(g.get)(c,"points.0",0),options:x,compressed:!0,onChange:e=>d("points",e)}))))))};w.displayName="SeriesStyleArgAdvancedInput";const{SeriesStyle:C}=s.a,F=(e,t)=>("string"!=typeof e&&t.renderError(),`${C.getStyleLabel()}: ${e}`),I=Object(j.compose)(Object(j.lifecycle)({componentWillMount(){const e=Object(g.get)(this.props.argValue,"chain.0.arguments.label.0","");e&&this.props.setLabel(F(e,this.props))},componentDidUpdate(e){const t=Object(g.get)(this.props.argValue,"chain.0.arguments.label.0","");t&&e.label!==F(t,this.props)&&this.props.setLabel(F(t,this.props))}}))(w);I.propTypes={argValue:b.a.any.isRequired,setLabel:b.a.func.isRequired,label:b.a.string};const{ContainerStyle:N}=s.a,k=({getArgValue:e,setArgValue:t,workpad:n})=>Object(i.jsx)("div",{style:{fontSize:0}},Object(i.jsx)(o.a,{value:e("backgroundColor"),onChange:e=>t("backgroundColor",e),colors:n.colors,anchorPosition:"leftCenter",ariaLabel:N.getDisplayName()}));k.displayName="ContainerStyleArgSimpleInput";var z=n(66);const{ContainerStyle:A}=s.a,L=({value:e="",radius:t="",onChange:n,colors:r})=>{const[l="",s="",c=""]=e.split(" "),u=Object(z.isBorderStyle)(s)?s:z.BorderStyle.NONE,p=l?l.replace("px",""):"",b="string"==typeof t?t.replace("px",""):t,j=e=>t=>"borderWidth"===e?n("border",`${t}px ${s} ${c}`):"borderStyle"===e?n("border",""===t?"0px":`${l} ${t} ${c}`):"borderRadius"===e?n("borderRadius",""===t?"0px":`${t}px`):void n(e,t);return Object(i.jsx)(a.EuiFlexGroup,{gutterSize:"s"},Object(i.jsx)(a.EuiFlexItem,{grow:2},Object(i.jsx)(a.EuiFormRow,{label:A.getThicknessLabel(),display:"rowCompressed"},Object(i.jsx)(a.EuiFieldNumber,{compressed:!0,value:Number(p),onChange:e=>j("borderWidth")(Number(e.target.value))}))),Object(i.jsx)(a.EuiFlexItem,{grow:3},Object(i.jsx)(a.EuiFormRow,{label:A.getStyleLabel(),display:"rowCompressed"},Object(i.jsx)(a.EuiSuperSelect,{compressed:!0,valueOfSelected:u||"none",options:Object.values(z.BorderStyle).map((e=>({value:e,inputDisplay:Object(i.jsx)("div",{style:{height:16,border:`4px ${e}`}})}))),onChange:j("borderStyle")}))),Object(i.jsx)(a.EuiFlexItem,{grow:2},Object(i.jsx)(a.EuiFormRow,{label:A.getRadiusLabel(),display:"rowCompressed"},Object(i.jsx)(a.EuiFieldNumber,{compressed:!0,value:Number(b),onChange:e=>j("borderRadius")(e.target.value)}))),Object(i.jsx)(a.EuiFlexItem,{grow:1},Object(i.jsx)(a.EuiFormRow,{display:"rowCompressed",label:A.getColorLabel(),style:{fontSize:0}},Object(i.jsx)(o.a,{value:c,onChange:e=>n("border",`${l} ${s} ${e}`),colors:r,anchorPosition:"upCenter",ariaLabel:A.getBorderTitle()}))))},{ContainerStyle:P}=s.a,T=[{value:"hidden",text:P.getOverflowHiddenOption()},{value:"visible",text:P.getOverflowVisibleOption()}],V=[{value:1,text:"100%"},{value:.9,text:"90%"},{value:.7,text:"70%"},{value:.5,text:"50%"},{value:.3,text:"30%"},{value:.1,text:"10%"}],$=({padding:e="",opacity:t=1,overflow:n="hidden",onChange:r})=>{"string"==typeof e&&(e=e.replace("px",""));const l=e=>t=>{if("padding"===e)return r(e,`${t.target.value}px`);r(e,t.target.value)};return Object(i.jsx)(a.EuiFlexGroup,{gutterSize:"s","justify-content":"spaceBetween"},Object(i.jsx)(a.EuiFlexItem,{grow:2},Object(i.jsx)(a.EuiFormRow,{label:P.getPaddingLabel(),display:"rowCompressed"},Object(i.jsx)(a.EuiFieldNumber,{compressed:!0,value:Number(e),onChange:l("padding")}))),Object(i.jsx)(a.EuiFlexItem,{grow:3},Object(i.jsx)(a.EuiFormRow,{label:P.getOpacityLabel(),display:"rowCompressed"},Object(i.jsx)(a.EuiSelect,{compressed:!0,value:t,options:V,onChange:l("opacity")}))),Object(i.jsx)(a.EuiFlexItem,{grow:3},Object(i.jsx)(a.EuiFormRow,{label:P.getOverflowLabel(),display:"rowCompressed"},Object(i.jsx)(a.EuiSelect,{compressed:!0,value:n,options:T,onChange:l("overflow")}))))};$.defaultProps={opacity:1,overflow:"hidden"};const{ContainerStyle:R}=s.a,B=({getArgValue:e,setArgValue:t,workpad:n})=>Object(i.jsx)("div",null,Object(i.jsx)(a.EuiTitle,{size:"xxxs",textTransform:"uppercase"},Object(i.jsx)("h6",null,R.getAppearanceTitle())),Object(i.jsx)(a.EuiSpacer,{size:"xs"}),Object(i.jsx)(a.EuiSpacer,{size:"xs"}),Object(i.jsx)($,{onChange:t,opacity:e("opacity"),overflow:e("overflow"),padding:e("padding")}),Object(i.jsx)(a.EuiSpacer,{size:"m"}),Object(i.jsx)(a.EuiTitle,{size:"xxxs",textTransform:"uppercase"},Object(i.jsx)("h6",null,R.getBorderTitle())),Object(i.jsx)(a.EuiSpacer,{size:"xs"}),Object(i.jsx)(a.EuiSpacer,{size:"xs"}),Object(i.jsx)(L,{colors:n.colors,onChange:t,radius:e("borderRadius"),value:e("border")}));B.displayName="ContainerStyleArgExtendedInput";const{set:D}=x.a,{ContainerStyle:G}=s.a,M=e=>Object(j.withHandlers)({getArgValue:({argValue:e})=>(t,n)=>{const r=Object(g.get)(e,"chain.0.arguments",{});return Object(g.get)(r,`${t}.0`,n)},setArgValue:({argValue:e,onValueChange:t})=>(n,r)=>{const a=D(e,`chain.0.arguments.${n}.0`,r);t(a)}})(e);var _=n(32),H=n(68),U=n(3);const W=({value:e,onSelect:t})=>{const n=H.fonts;if(e&&!H.fonts.find((t=>t.value===e))){const t=(e.indexOf(",")>=0?e.split(",")[0]:e).replace(/['"]/g,"");n.push({value:e,label:t}),n.sort(((e,t)=>e.label.localeCompare(t.label)))}return Object(i.jsx)(a.EuiSuperSelect,{compressed:!0,options:n.map((e=>({value:e.value,inputDisplay:Object(i.jsx)("div",{style:{fontFamily:e.value}},e.label)}))),valueOfSelected:e,onChange:e=>t&&t(e)})};W.displayName="FontPicker";const q=[0,6,7,8,9,10,11,12,14,16,18,24,30,36,48,60,72,96],J=[{id:"left",label:U.i18n.translate("xpack.canvas.textStylePicker.alignLeftOption",{defaultMessage:"Align left"}),iconType:"editorAlignLeft"},{id:"center",label:U.i18n.translate("xpack.canvas.textStylePicker.alignCenterOption",{defaultMessage:"Align center"}),iconType:"editorAlignCenter"},{id:"right",label:U.i18n.translate("xpack.canvas.textStylePicker.alignRightOption",{defaultMessage:"Align right"}),iconType:"editorAlignRight"}],K=[{id:"bold",label:U.i18n.translate("xpack.canvas.textStylePicker.styleBoldOption",{defaultMessage:"Bold"}),iconType:"editorBold"},{id:"italic",label:U.i18n.translate("xpack.canvas.textStylePicker.styleItalicOption",{defaultMessage:"Italic"}),iconType:"editorItalic"},{id:"underline",label:U.i18n.translate("xpack.canvas.textStylePicker.styleUnderlineOption",{defaultMessage:"Underline"}),iconType:"editorUnderline"}],Q=({align:e="left",color:t,colors:n,family:l,italic:s=!1,onChange:c,size:u=14,underline:p=!1,weight:b="normal"})=>{const[j,g]=Object(r.useState)({align:e,color:t,family:l,italic:s,size:u,underline:p,weight:b}),d={bold:"bold"===b,italic:Boolean(s),underline:Boolean(p)};isNaN(u)||-1!==q.indexOf(Number(u))||(q.push(Number(u)),q.sort(((e,t)=>e-t)));const x=(e,t)=>{const n={...j,[e]:t};g(n),c(n)};return Object(i.jsx)("div",{className:"canvasTextStylePicker"},Object(i.jsx)(a.EuiFlexGroup,{gutterSize:"s"},Object(i.jsx)(a.EuiFlexItem,null,l?Object(i.jsx)(W,{value:l,onSelect:e=>x("family",e)}):Object(i.jsx)(W,{onSelect:e=>x("family",e)})),Object(i.jsx)(a.EuiFlexItem,{grow:!1},Object(i.jsx)(a.EuiSelect,{compressed:!0,value:u,onChange:e=>x("size",Number(e.target.value)),options:q.map((e=>({text:String(e),value:e}))),prepend:"Size"}))),Object(i.jsx)(a.EuiSpacer,{size:"s"}),Object(i.jsx)(a.EuiFlexGroup,{gutterSize:"s",alignItems:"center",justifyContent:"flexEnd"},Object(i.jsx)(a.EuiFlexItem,{grow:!1,style:{fontSize:0}},Object(i.jsx)(o.a,{value:t,onChange:e=>x("color",e),colors:n,ariaLabel:U.i18n.translate("xpack.canvas.textStylePicker.fontColorLabel",{defaultMessage:"Font Color"})})),Object(i.jsx)(a.EuiFlexItem,{grow:!1},Object(i.jsx)(a.EuiButtonGroup,{options:K,buttonSize:"compressed",idToSelectedMap:d,onChange:e=>{let t,n;"bold"===e?(t="weight",n=d[e]?"normal":"bold"):(t=e,n=!d[t]),x(t,n)},type:"multi",isIconOnly:!0,className:"canvasSidebar__buttonGroup",legend:U.i18n.translate("xpack.canvas.textStylePicker.styleOptionsControl",{defaultMessage:"Style options"})})),Object(i.jsx)(a.EuiFlexItem,{grow:!1},Object(i.jsx)(a.EuiButtonGroup,{options:J,buttonSize:"compressed",isIconOnly:!0,idSelected:e,onChange:e=>x("align",e),className:"canvasSidebar__buttonGroup",legend:U.i18n.translate("xpack.canvas.textStylePicker.alignmentOptionsControl",{defaultMessage:"Alignment options"})}))))};Q.defaultProps={align:"left",size:14,weight:"normal"};const{Font:X}=s.a,Y=e=>{const{onValueChange:t,argValue:n,workpad:r}=e,a=Object(g.get)(n,"chain.0",{}),l=Object(g.get)(a,"arguments",{}),o=Object(g.mapValues)(l,"[0]");return Object(i.jsx)(Q,{family:o.family,color:o.color,size:o.size,align:o.align,weight:o.weight,underline:o.underline||!1,italic:o.italic||!1,onChange:function(e){const r=Object(_.set)(n,["chain",0,"arguments"],Object(g.mapValues)(e,(e=>[e])));return t(r)},colors:r.colors})};Y.displayName="FontArgInput";const Z=[()=>({name:"color",displayName:c.getDisplayName(),help:c.getHelp(),simpleTemplate:Object(l.a)(u),default:"#000000"}),()=>({name:"containerStyle",displayName:G.getDisplayName(),help:G.getHelp(),default:"{containerStyle}",simpleTemplate:Object(l.a)(M(k)),template:Object(l.a)(M(B))}),()=>({name:"font",displayName:X.getDisplayName(),help:X.getHelp(),template:Object(l.a)(Y),default:`{font size=14 family="${H.openSans.value}" color="#000000" align=left}`}),()=>({name:"seriesStyle",displayName:C.getDisplayName(),help:C.getHelp(),template:Object(l.a)(I),simpleTemplate:Object(l.a)(v),default:"{seriesStyle}"})]},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(58),a=n.n(r),l=n(16),o=n(22),s=n(69),i=n.n(s),c=n(25),u=n(121),p=n(17);const b=e=>{const t=(t,n)=>{const[r,a]=Object(l.useState)(t);return Object(l.useImperativeHandle)(n,(()=>({updateProps:e=>{a(e)}}))),Object(p.jsx)(u.a,null,(({error:n})=>n?(t.renderError(),null):Object(p.jsx)(c.I18nProvider,null,Object(p.jsx)(e,r))))},n=Object(l.forwardRef)(t);return n.propTypes={renderError:i.a.func},(e,t,r,l)=>{try{const s=Object(p.jsx)(n,a()({},t,{ref:e=>{r.done(),null==l||l(e)}}));return r.onDestroy((()=>{Object(o.unmountComponentAtNode)(e)})),Object(o.createPortal)(s,e)}catch(e){r.done(),t.renderError()}}}},76:function(e,t,n){var r=n(143),a=Object.prototype.hasOwnProperty;function l(e){if(o(e))return!1;if(!e)return!0;if(i(e)&&0===e.length)return!0;if(!s(e)){for(var t in e)if(a.call(e,t))return!1;return!0}return!1}function o(e){return"number"==typeof e}function s(e){return"string"==typeof e}function i(e){return Array.isArray(e)}function c(e,t){for(var n in t)a.call(t,n)&&(e[n]=t[n]);return e}function u(e){var t=parseInt(e);return t.toString()===e?t:e}function p(e,t,n){return null==e?t?n?[]:{}:e:i(e)?e.slice():c({},e)}function b(e,t){if(e!==t&&r(e)&&r(t)){var n={};for(var a in e)e.hasOwnProperty(a)&&(t.hasOwnProperty(a)?n[a]=b(e[a],t[a]):n[a]=e[a]);for(a in t)t.hasOwnProperty(a)&&(n[a]=b(e[a],t[a]));return n}return t}function j(e,t,n,r){if(o(n)&&(n=[n]),l(n))return t;if(s(n))return j(e,t,n.split(".").map(u),r);var a=n[0];return e&&e!==t||(e=p(t,!0,o(a))),1===n.length?r(e,a):(null!=t&&(t=t[a]),e[a]=j(e[a],t,n.slice(1),r),e)}var g={set:function(e,t,n,r){return l(n)?r:j(e,t,n,(function(e,t){return e[t]=r,e}))},update:function(e,t,n,r){return l(n)?r(p(t)):j(e,t,n,(function(e,t){return e[t]=r(e[t]),e}))},push:function(e,t,n){var r=Array.prototype.slice.call(arguments,3);return l(n)?i(t)?t.concat(r):r:j(e,t,n,(function(e,t){return i(e[t])?e[t]=e[t].concat(r):e[t]=r,e}))},insert:function(e,t,n,r,a){if(a=~~a,l(n)){if(!i(t))return[r];var o=t.slice(0,a);return o.push(r),o.concat(t.slice(a))}return j(e,t,n,(function(e,t){var l=e[t];if(!i(l)){if(null!=l&&void 0!==l)throw new Error("Expected "+n+"to be an array. Instead got "+typeof n);l=[]}var o=l.slice(0,a);return o.push(r),e[t]=o.concat(l.slice(a)),e}))},del:function(e,t,n){if(!l(n))return j(e,t,n,(function(e,t){return Array.isArray(e)?void 0!==e[t]&&e.splice(t,1):e.hasOwnProperty(t)&&delete e[t],e}))},assign:function(e,t,n,r){return l(n)?l(r)?t:c(p(t),r):j(e,t,n,(function(e,t){r=Object(r);var n=p(e[t],!0);return c(n,r),e[t]=n,e}))},merge:function(e,t,n,r){return l(n)?l(r)?t:b(t,r):j(e,t,n,(function(e,t){return r=Object(r),e[t]=b(e[t],r),e}))}};e.exports=Object.keys(g).reduce((function(e,t){return e[t]=g[t].bind(null,null),e}),(function(e){var t=e,n=!1,r=Object.keys(g).reduce((function(a,l){return"function"==typeof g[l]&&(a[l]=function(){var a=[t,e].concat(Array.prototype.slice.call(arguments));if(n)throw new Error("Cannot call "+l+" after `value`");return t=g[l].apply(null,a),r}),a}),{});return r.value=function(){return n=!0,t},r}))}}]);