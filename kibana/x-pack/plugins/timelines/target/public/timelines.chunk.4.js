/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.timelines_bundle_jsonpfunction=window.timelines_bundle_jsonpfunction||[]).push([[4],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(2),l=n(3),i=n(0),o=n.n(i);const r=l.i18n.translate("xpack.timelines.hoverActions.tooltipWithKeyboardShortcut.pressTooltipLabel",{defaultMessage:"Press"}),s=({additionalScreenReaderOnlyContext:e="",content:t,shortcut:n,showShortcut:l})=>o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{"data-test-subj":"content"},t),""!==e&&o.a.createElement(a.EuiScreenReaderOnly,{"data-test-subj":"additionalScreenReaderOnlyContext"},o.a.createElement("p",null,e)),l&&o.a.createElement(a.EuiText,{color:"subdued","data-test-subj":"shortcut",size:"s",textAlign:"center"},o.a.createElement("span",null,r)," ",o.a.createElement("span",{className:"euiBadge euiBadge--hollow"},n))),u=o.a.memo(s);u.displayName="TooltipWithKeyboardShortcut"},133:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l}));const a=({field:e,value:t})=>null==t?e:Array.isArray(t)?`${e} ${t.join(" ")}`:`${e} ${t}`,l=(e,t,n=!1)=>{const a=null!=t?Array.isArray(t)?t[0]:t:null;return null!=a?{meta:{alias:null,negate:n,disabled:!1,type:"phrase",key:e,value:a,params:{query:a}},query:{match:{[e]:{query:a,type:"phrase"}}}}:{exists:{field:e},meta:{alias:null,disabled:!1,key:e,negate:void 0===t,type:"exists",value:"exists"}}}},137:function(e,t,n){"use strict";n.r(t),n.d(t,"FILTER_FOR_VALUE",(function(){return c})),n.d(t,"FILTER_FOR_VALUE_KEYBOARD_SHORTCUT",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(0),l=n.n(a),i=n(3),o=n(2),r=n(12),s=n(132),u=n(133);const c=i.i18n.translate("xpack.timelines.hoverActions.filterIn",{defaultMessage:"Filter In"}),d="f",m=l.a.memo((({Component:e,defaultFocusedButtonRef:t,field:n,filterManager:i,keyboardEvent:m,onFilterAdded:f,ownFocus:b,onClick:p,size:y,showTooltip:E=!1,value:h})=>{const v=Object(a.useCallback)((()=>{const e=e=>0===(null==e?void 0:e.length)?Object(u.a)(n,void 0):Object(u.a)(n,e),t=Array.isArray(h)?h.map((t=>e(t))):e(h);null!=i&&(i.addFilters(t),null!=f&&f()),null!=p&&p()}),[n,i,p,f,h]);Object(a.useEffect)((()=>{b&&(null==m?void 0:m.key)===d&&(Object(r.t)(m),v())}),[v,m,b]);const j=Object(a.useMemo)((()=>e?l.a.createElement(e,{"aria-label":c,buttonRef:t,"data-test-subj":"filter-for-value",iconType:"plusInCircle",onClick:v,size:y,title:c},c):l.a.createElement(o.EuiButtonIcon,{"aria-label":c,buttonRef:t,className:"timelines__hoverActionButton","data-test-subj":"filter-for-value",iconSize:"s",iconType:"plusInCircle",onClick:v,size:y})),[e,t,v,y]);return E?l.a.createElement(o.EuiToolTip,{content:l.a.createElement(s.a,{additionalScreenReaderOnlyContext:Object(u.b)({field:n,value:h}),content:c,shortcut:d,showShortcut:b})},j):j}));m.displayName="FilterForValueButton"}}]);