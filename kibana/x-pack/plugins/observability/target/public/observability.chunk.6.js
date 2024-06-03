/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.observability_bundle_jsonpfunction=window.observability_bundle_jsonpfunction||[]).push([[6],{117:function(e,t,l){"use strict";l.d(t,"a",(function(){return s}));var n=l(2),i=l(0),a=l(122),o=l.n(a),u=l(41),r=l(8);const s=({sourceField:e,dataViewTitle:t,query:l="",filters:a,time:s,label:c,keepHistory:d,cardinalityField:f})=>{const[b,p]=Object(i.useState)(l),[g,v]=Object(i.useState)([]),{from:h,to:m}=null!=s?s:{};o()((()=>{p(l)}),350,[l]),Object(i.useEffect)((()=>{l||p(l)}),[l]);const y=((e,t)=>{if(!t)return"";let l="";return l=e===r.o?`*.${t.toLowerCase()}.*`:t[0].toLowerCase()===t[0]?`(${t}|${Object(n.capitalize)(t)}).*`:`(${t}|${t.toLowerCase()}).*`,l})(e,l),{data:E,loading:w}=Object(u.b)(Object(u.a)({index:t,body:{query:{bool:{filter:[...null!=a?a:[],...h&&m?[{range:{"@timestamp":{gte:h,lte:m}}}]:[]]}},size:0,aggs:{values:{terms:{field:e,size:50,...l?{include:y}:{}},...f?{aggs:{count:{cardinality:{field:f}}}}:{}}}}}),[b,h,m,JSON.stringify(a),t,e],{name:`get${c.replace(/\s/g,"")}ValuesList`});return Object(i.useEffect)((()=>{var e,t;const l=null==E||null===(e=E.aggregations)||void 0===e?void 0:e.values.buckets,i=null!==(t=null==l?void 0:l.map((({key:e,doc_count:t,count:l})=>l?{count:l.value,label:String(e)}:{count:t,label:String(e)})))&&void 0!==t?t:[];v(d?e=>((e,t)=>Object(n.uniqBy)([...e,...t],"label"))(i,e):i)}),[E,d,w,l]),{values:g,loading:w}}},122:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(73),i=l(0),a=n.__importDefault(l(123));t.default=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=[]);var n=a.default(e,t),o=n[0],u=n[1],r=n[2];return i.useEffect(r,l),[o,u]}},123:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(0);t.default=function(e,t){void 0===t&&(t=0);var l=n.useRef(!1),i=n.useRef(),a=n.useRef(e),o=n.useCallback((function(){return l.current}),[]),u=n.useCallback((function(){l.current=!1,i.current&&clearTimeout(i.current),i.current=setTimeout((function(){l.current=!0,a.current()}),t)}),[t]),r=n.useCallback((function(){l.current=null,i.current&&clearTimeout(i.current)}),[]);return n.useEffect((function(){a.current=e}),[e]),n.useEffect((function(){return u(),r}),[t]),[o,r,u]}},130:function(e,t,l){"use strict";l.r(t),l.d(t,"FieldValueSuggestions",(function(){return v}));var n=l(0),i=l.n(n),a=l(117),o=l(7),u=l(1),r=l(22),s=l.n(r),c=l(2);const d=l(48).euiStyled.div`
  border-radius: ${({theme:e})=>e.eui.euiBorderRadius};
  background: ${({theme:e})=>e.eui.euiColorLightShade};
  padding: 0 ${({theme:e})=>e.eui.paddingSizes.xs};
`,f=(e,t,l,n)=>{const a={};return null==e||e.forEach((({label:e,count:t})=>{a[e]=t})),Object.entries(a).map((([e,a])=>({label:e,append:n?i.a.createElement(d,null,i.a.createElement(o.EuiText,{size:"xs"},a)):null,...null!=t&&t.includes(e)?{checked:"on"}:{},...null!=l&&l.includes(e)?{checked:"off"}:{}})))};function b({fullWidth:e,label:t,loading:l,query:a,setQuery:r,button:s,width:d,forceOpen:b,setForceOpen:g,anchorPosition:v,singleSelection:h,asFilterButton:m,showCount:y=!0,values:E=[],selectedValue:w,excludedValue:S,allowExclusions:O=!0,compressed:j=!0,onChange:k}){const[x,F]=Object(n.useState)((()=>f(E,w,S,y))),[C,V]=Object(n.useState)(!1);Object(n.useEffect)((()=>{F(f(E,w,S,y))}),[E,w,y,S]);const P=()=>{V(!C)},_=i.a.createElement(o.EuiButton,{style:d?{width:d}:{},size:"m",color:"text",iconType:"arrowDown",iconSide:"right",onClick:P,"data-test-subj":"fieldValueSelectionBtn",fullWidth:e},t),B=(w||[]).length+(S||[]).length,z=i.a.createElement(o.EuiFilterButton,{"aria-label":u.i18n.translate("xpack.observability.filterButton.label",{defaultMessage:"expands filter group for {label} filter",values:{label:t}}),hasActiveFilters:B>0,iconType:"arrowDown",numActiveFilters:B,numFilters:x.length,onClick:P},t),T=()=>{const e=(null!=x?x:[]).filter((e=>"on"===(null==e?void 0:e.checked))).map((({label:e})=>e)),t=(null!=x?x:[]).filter((e=>"off"===(null==e?void 0:e.checked))).map((({label:e})=>e));return Object(c.isEqual)(null!=w?w:[],e)&&Object(c.isEqual)(null!=S?S:[],t)};return i.a.createElement(p,null,i.a.createElement(o.EuiPopover,{id:"popover",panelPaddingSize:"none",button:s||(m?z:_),isOpen:C||b,closePopover:()=>{V(!1),null==g||g(!1)},anchorPosition:v,style:{width:"100%"}},i.a.createElement(o.EuiSelectable,{searchable:!0,singleSelection:h,searchProps:{placeholder:u.i18n.translate("xpack.observability.fieldValueSelection.placeholder",{defaultMessage:"Filter {label}",values:{label:t}}),compressed:j,onInput:e=>{r(e.target.value)},"data-test-subj":"suggestionInputField"},listProps:{onFocusBadge:!1},options:x,onChange:e=>{F(e)},allowExclusions:O,isLoading:l&&!a&&0===x.length},((e,n)=>i.a.createElement("div",{style:{width:240}},i.a.createElement(o.EuiPopoverTitle,{paddingSize:"s"},n),e,l&&a&&i.a.createElement(o.EuiText,{className:"eui-textCenter",color:"subdued"},u.i18n.translate("xpack.observability.fieldValueSelection.loading",{defaultMessage:"Loading"})," ",i.a.createElement(o.EuiLoadingSpinner,{size:"m"})),i.a.createElement(o.EuiPopoverFooter,{paddingSize:"s"},i.a.createElement(o.EuiButton,{"aria-label":u.i18n.translate("xpack.observability.fieldValueSelection.apply.label",{defaultMessage:"Apply the selected filters for {label}",values:{label:t}}),fill:!0,fullWidth:!0,size:"s",isDisabled:T(),onClick:()=>{const e=x.filter((e=>"on"===(null==e?void 0:e.checked))),t=x.filter((e=>"off"===(null==e?void 0:e.checked)));k(Object(c.map)(e,"label"),Object(c.map)(t,"label")),V(!1),null==g||g(!1)}},u.i18n.translate("xpack.observability.fieldValueSelection.apply",{defaultMessage:"Apply"}))))))))}const p=s.a.div.withConfig({displayName:"Wrapper",componentId:"sc-o6ohvj-0"})(["&&&{div.euiPopover__anchor{width:100%;.euiButton{width:100%;}}}"]);var g=l(51);function v({fullWidth:e,sourceField:t,label:l,dataViewTitle:o,selectedValue:u,excludedValue:r,filters:s,button:c,time:d,width:f,forceOpen:p,setForceOpen:v,anchorPosition:h,singleSelection:m,compressed:y,asFilterButton:E,usePrependLabel:w,allowAllValuesSelection:S,required:O,allowExclusions:j=!0,cardinalityField:k,inspector:x,asCombobox:F=!0,keepHistory:C=!0,onChange:V}){const[P,_]=Object(n.useState)(""),{values:B,loading:z}=Object(a.a)({dataViewTitle:o,query:P,sourceField:t,filters:s,time:d,inspector:x,cardinalityField:k,keepHistory:C,label:l}),T=F?g.b:b;return i.a.createElement(T,{fullWidth:e,singleSelection:m,values:B,label:l,onChange:V,query:P,setQuery:_,loading:z,selectedValue:u,excludedValue:r,button:c,forceOpen:p,setForceOpen:v,anchorPosition:h,width:f,compressed:y,asFilterButton:E,usePrependLabel:w,allowExclusions:j,allowAllValuesSelection:!m&&S,required:O})}t.default=v}}]);