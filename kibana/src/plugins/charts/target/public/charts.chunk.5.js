(window.charts_bundle_jsonpfunction=window.charts_bundle_jsonpfunction||[]).push([[5],{47:function(e,s,o){"use strict";o.r(s),o.d(s,"legacyColors",(function(){return n})),o.d(s,"ColorPicker",(function(){return C}));var t=o(2),r=o(0),l=o(6),c=o(21),a=o(20);const n=["#3F6833","#967302","#2F575E","#99440A","#58140C","#052B51","#511749","#3F2B5B","#508642","#CCA300","#447EBC","#C15C17","#890F02","#0A437C","#6D1F62","#584477","#629E51","#E5AC0E","#64B0C8","#E0752D","#BF1B00","#0A50A1","#962D82","#614D93","#7EB26D","#EAB839","#6ED0E0","#EF843C","#E24D42","#1F78C1","#BA43A9","#705DA0","#9AC48A","#F2C96D","#65C5DB","#F9934E","#EA6460","#5195CE","#D683CE","#806EB7","#B7DBAB","#F4D598","#70DBED","#F9BA8F","#F29191","#82B5D8","#E5A8E2","#AEA2E0","#E0F9D7","#FCEACA","#CFFAFF","#F9E2D2","#FCE2DE","#BADFF4","#F9D9F9","#DEDAF7"],i=Object(l.euiPaletteColorBlind)({rotations:4,order:"group"}),u={name:"1c6zi50",styles:"position:relative;input[type='radio']{position:absolute;top:50%;left:50%;opacity:0;transform:translate(-50%, -50%);}"},j={name:"c6uku5",styles:"cursor:pointer;&:hover{transform:scale(1.4);}"},C=({onChange:e,color:s,label:o,useLegacyColors:C=!0,colorIsOverwritten:E=!0,onKeyDown:d,maxDepth:b,layerIndex:F})=>{const D=C?n:i,{euiTheme:O}=Object(l.useEuiTheme)(),A=Object(t.useMemo)((()=>Object(r.css)("width:calc(",O.size.l," * 8);","")),[O.size.l]),B=Object(t.useMemo)((()=>Object(r.css)("border:",O.size.xs," solid;border-radius:100%;","")),[O.size.xs]);return Object(r.jsx)("div",{className:"visColorPicker"},Object(r.jsx)("fieldset",null,Object(r.jsx)(l.EuiScreenReaderOnly,null,Object(r.jsx)("legend",null,Object(r.jsx)(c.FormattedMessage,{id:"charts.colorPicker.setColor.screenReaderDescription",defaultMessage:"Set color for value {legendDataLabel}",values:{legendDataLabel:o}}))),Object(r.jsx)(l.EuiFlexGroup,{wrap:!0,gutterSize:"none",css:A,className:"visColorPicker__value"},D.map((o=>Object(r.jsx)("label",{key:o,css:u,className:"visColorPicker__colorBtn"},Object(r.jsx)("input",{type:"radio",onChange:s=>e(o,s),value:s,name:"visColorPicker__radio",checked:o===s,onKeyDown:d}),Object(r.jsx)(l.EuiIcon,{type:"dot",size:"l",color:s,css:[j,o===s?B:null,"",""],className:"visColorPicker__valueDot",style:{color:o},"data-test-subj":`visColorPickerColor-${o}`}),Object(r.jsx)(l.EuiScreenReaderOnly,null,Object(r.jsx)("span",null,o))))))),D.some((e=>e===s||F&&b&&Object(a.a)(e,F,b)===s))&&E&&Object(r.jsx)(l.EuiFlexItem,{grow:!1},Object(r.jsx)(l.EuiButtonEmpty,{size:"s",onClick:s=>e(null,s)},Object(r.jsx)(c.FormattedMessage,{id:"charts.colorPicker.clearColor",defaultMessage:"Reset color"}))))}}}]);