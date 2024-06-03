/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[10],{107:function(e,t,n){"use strict";var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],c=t.base?i[0]+t.base:i[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:l,updater:b(f,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var o=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,p=0;function b(e,t){var n,r,a;if(t.singleton){var o=p++;n=g||(g=c(t)),r=d.bind(null,n,o,!1),a=d.bind(null,n,o,!0)}else n=c(t),r=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);o[a].references--}for(var c=i(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}},108:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,a,o=e[1]||"",s=e[3];if(!s)return o;if(t&&"function"==typeof btoa){var i=(n=s,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(a," */")),c=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[o].concat(c).concat([i]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(a[s]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var r="kibana",a="".concat(r,".alert"),o="".concat(a,".rule"),s=("".concat(r,".space_ids"),"".concat(r,".version"),"".concat(a,".action_group"),"".concat(a,".building_block_type"),"".concat(a,".duration.us"),"".concat(a,".end"),"".concat(a,".evaluation.threshold"),"".concat(a,".evaluation.value"),"".concat(a,".instance.id"),"".concat(a,".reason"),"".concat(a,".risk_score"),"".concat(a,".severity"),"".concat(a,".start"),"".concat(a,".status"),"".concat(a,".system_status"),"".concat(a,".uuid")),i=("".concat(a,".workflow_reason"),"".concat(a,".workflow_status"),"".concat(a,".workflow_user"),"".concat(o,".author"),"".concat(o,".created_at"),"".concat(o,".created_by"),"".concat(o,".description"),"".concat(o,".enabled"),"".concat(o,".exceptions_list"),"".concat(o,".execution.uuid"),"".concat(o,".from"),"".concat(o,".interval"),"".concat(o,".license"),"".concat(o,".category"),"".concat(o,".name")),c=("".concat(o,".namespace"),"".concat(o,".note"),"".concat(o,".parameters"),"".concat(o,".references"),"".concat(o,".rule_id"),"".concat(o,".rule_name_override"),"".concat(o,".tags"),"".concat(o,".to"),"".concat(o,".type"),"".concat(o,".rule_type_id"),"".concat(o,".updated_at"),"".concat(o,".updated_by"),"".concat(o,".version"),"".concat(o,".consumer"),"".concat(o,".producer"),"".concat(o,".uuid"),n(11),n(138),{APM:"apm",LOGS:"logs",INFRASTRUCTURE:"infrastructure",OBSERVABILITY:"observability",SIEM:"siem",UPTIME:"uptime"});Object.values(c).map((function(e){return e}))},138:function(e,t,n){e.exports=n(65)(2567)},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=[{"@timestamp":{order:"asc"}}]},170:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,a,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!=a--;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;for(a=r;0!=a--;){var s=o[a];if(!e(t[s],n[s]))return!1}return!0}return t!=t&&n!=n}},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(170),a=n.n(r),o=n(5),s=n(1),i=n(90),c=n(99),u=n(43),l=n(147);const d=n(0).i18n.translate("xpack.triggersActionsUI.components.alertTable.useFetchAlerts.errorMessageText",{defaultMessage:"An error has occurred on alerts search"}),f={loading:!1,request:{featureIds:[],fields:[],query:{bool:{}},pagination:{pageIndex:0,pageSize:50},sort:l.a},response:{alerts:[],totalAlerts:-1,isInitializing:!0,updatedAt:0}};function g(e,t){switch(t.type){case"loading":return{...e,loading:t.loading};case"response":return{...e,loading:!1,response:{isInitializing:!1,alerts:t.alerts,totalAlerts:t.totalAlerts,updatedAt:Date.now()}};case"resetPagination":return{...e,request:{...e.request,pagination:{...e.request.pagination,pageIndex:0}}};case"request":return{...e,request:t.request};default:throw new Error}}const p=({featureIds:e,fields:t,query:n,pagination:r,skip:l,sort:p})=>{const b=Object(s.useRef)(o.noop),h=Object(s.useRef)(new AbortController),v=Object(s.useRef)(new i.Subscription),[{loading:j,request:m,response:C},y]=Object(s.useReducer)(g,f),x=Object(s.useRef)(null),O=Object(s.useRef)({request:[],response:[]}),{data:S}=Object(u.b)().services,I=Object(s.useCallback)((()=>O.current),[]),w=Object(s.useCallback)((()=>{var e,t,n;0!==(null!==(e=null===(t=x.current)||void 0===t||null===(n=t.pagination)||void 0===n?void 0:n.pageIndex)&&void 0!==e?e:0)?y({type:"resetPagination"}):b.current()}),[]),A=Object(s.useCallback)((t=>{if(null==t||l)return;const r=async()=>{x.current=t,h.current=new AbortController,y({type:"loading",loading:!0}),S&&S.search&&(v.current=S.search.search({...t,featureIds:e,fields:void 0,query:n},{strategy:"privateRuleRegistryAlertsSearchStrategy",abortSignal:h.current.signal}).subscribe({next:e=>{if(Object(c.isCompleteResponse)(e)){const{rawResponse:r}=e;O.current={request:[],response:[]};let a=0;if(r.hits.total&&"number"==typeof r.hits.total)a=r.hits.total;else if(r.hits.total&&"object"==typeof r.hits.total){var t,n;a=null!==(t=null===(n=r.hits.total)||void 0===n?void 0:n.value)&&void 0!==t?t:0}y({type:"response",alerts:r.hits.hits.reduce(((e,t)=>(t.fields&&e.push({...t.fields,_id:t._id,_index:t._index}),e)),[]),totalAlerts:a}),v.current.unsubscribe()}else Object(c.isErrorResponse)(e)&&(y({type:"loading",loading:!1}),S.search.showError(new Error(d)),v.current.unsubscribe())},error:e=>{y({type:"loading",loading:!1}),S.search.showError(e),v.current.unsubscribe()}}))};v.current.unsubscribe(),h.current.abort(),r(),b.current=r}),[l,S,e,n]);return Object(s.useEffect)((()=>{if(0===e.length)return;const o={featureIds:e,fields:t,pagination:r,query:n,sort:p};o.fields.length>0&&!a()(o,x.current)&&y({type:"request",request:o})}),[e,t,r,n,p]),Object(s.useEffect)((()=>{m.featureIds.length>0&&!a()(m,x.current)&&A(m)}),[m,A]),[j,Object(s.useMemo)((()=>({...C,getInspectQuery:I,refetch:w})),[C,I,w])]}},191:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return i}));var r=n(0);const a=r.i18n.translate("xpack.triggersActionsUI.alertsTable.configuration.errorTitle",{defaultMessage:"Unable to load alerts table"}),o=r.i18n.translate("xpack.triggersActionsUI.alertsTable.configuration.errorBody",{defaultMessage:"There was an error loading the alerts table. This table is missing the necessary configuration. Please contact your administrator for help"}),s=r.i18n.translate("xpack.triggersActionsUI.sections.alertsTable.column.actions",{defaultMessage:"Actions"}),i=r.i18n.translate("xpack.triggersActionsUI.sections.alertsTable.leadingControl.viewDetails",{defaultMessage:"View details"})},211:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(212);case"v8light":return n(214)}},212:function(e,t,n){var r=n(107),a=n(213);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);r(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},213:function(e,t,n){(t=n(108)(!1)).push([e.i,".alertsTableActiveRow{background-color:#343741}\n",""]),e.exports=t},214:function(e,t,n){var r=n(107),a=n(215);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);r(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},215:function(e,t,n){(t=n(108)(!1)).push([e.i,".alertsTableActiveRow{background-color:#e9edf3}\n",""]),e.exports=t},259:function(e,t,n){"use strict";n.r(t),n.d(t,"ACTIVE_ROW_CLASS",(function(){return l})),n.d(t,"AlertsTable",(function(){return g})),n.d(t,"default",(function(){return g}));var r=n(129),a=n(1),o=n.n(a),s=n(15),i=n(147);n(184);var c=n(191),u=(n(211),n(3));const l="alertsTableActiveRow",d=Object(a.lazy)((()=>n.e(80).then(n.bind(null,311)))),f={border:"none",header:"underline",fontSize:"s"},g=e=>{const[t,n]=Object(a.useState)({}),{activePage:g,alerts:p,alertsCount:b,isLoading:h,onColumnsChange:v,onPageChange:j,onSortChange:m,sort:C}=e.useFetchAlertsData(),{sortingColumns:y,onSort:x}=function(e,t=i.a){const[n,r]=Object(a.useState)((e=>{const t=[];return e.forEach((e=>{Object.entries(e).forEach((([e,n])=>{t.push({id:e,direction:n.order})}))})),t})(t));return{sortingColumns:n,onSort:Object(a.useCallback)((t=>{e(t),r(t)}),[r,e])}}(m,C),{pagination:O,onChangePageSize:S,onChangePageIndex:I,onPaginateFlyout:w,flyoutAlertIndex:A,setFlyoutAlertIndex:T}=function({onPageChange:e,pageIndex:t,pageSize:n}){const[r,o]=Object(a.useState)({pageIndex:t,pageSize:n}),[s,i]=Object(a.useState)(-1),c=Object(a.useCallback)((t=>{o((e=>({...e,pageSize:t,pageIndex:0}))),e({pageIndex:0,pageSize:t})}),[o,e]),u=Object(a.useCallback)((t=>{o((e=>({...e,pageIndex:t}))),e({pageIndex:t,pageSize:r.pageSize})}),[o,e,r.pageSize]),l=Object(a.useCallback)((e=>{i((t=>{if(e<0)return u(0),0;const n=r.pageSize*r.pageIndex+t;if(e===n)return t;const a=Math.floor(e/r.pageSize),o=e>=r.pageSize*a?e-r.pageSize*a:e;return u(a),o}))}),[u,r.pageIndex,r.pageSize]);return{pagination:r,onChangePageSize:c,onChangePageIndex:u,onPaginateFlyout:l,flyoutAlertIndex:s,setFlyoutAlertIndex:i}}({onPageChange:j,pageIndex:g,pageSize:e.pageSize}),[_,k]=Object(a.useState)(e.visibleColumns),R=Object(a.useCallback)((t=>{k(t),v(e.columns.sort(((e,n)=>t.indexOf(e.id)-t.indexOf(n.id))),t)}),[v,e.columns]),z=Object(a.useMemo)((()=>[...e.showExpandToDetails?[{id:"expandColumn",width:75,headerCellRender:()=>Object(u.jsx)("span",{"data-test-subj":"expandColumnHeaderLabel"},c.c),rowCellRender:e=>{const{visibleRowIndex:t}=e;return Object(u.jsx)(s.EuiFlexGroup,{gutterSize:"none",responsive:!1},Object(u.jsx)(s.EuiFlexItem,{grow:!1},Object(u.jsx)(s.EuiToolTip,{content:c.d},Object(u.jsx)(s.EuiButtonIcon,{size:"s",iconType:"expand",color:"text",onClick:()=>{T(t)},"data-test-subj":`expandColumnCellOpenFlyoutButton-${t}`,"aria-label":c.d}))))}}]:[],...e.leadingControlColumns]),[e.leadingControlColumns,e.showExpandToDetails,T]);Object(a.useEffect)((()=>{const e=A+O.pageIndex*O.pageSize;n({[e]:l})}),[A,O.pageIndex,O.pageSize]);const E=Object(a.useCallback)((()=>T(-1)),[T]),M=Object(a.useCallback)((e=>{const t=p.findIndex((t=>t[r.b].includes(e.fields[r.b])));T(t)}),[p,T]),P=({data:e,columnId:t})=>{var n,r;const a=null!==(n=null===(r=e.find((e=>e.field===t)))||void 0===r?void 0:r.value)&&void 0!==n?n:[];return Object(u.jsx)(o.a.Fragment,null,a.length?a.join():"--")},q=Object(a.useCallback)((()=>{var t,n;return null!==(t=e.alertsTableConfiguration)&&void 0!==t&&t.getRenderCellValue?null===(n=e.alertsTableConfiguration)||void 0===n?void 0:n.getRenderCellValue({setFlyoutAlert:M}):P}),[M,e.alertsTableConfiguration])(),U=Object(a.useCallback)((e=>{const t=p[e.rowIndex-O.pageSize*O.pageIndex],n=[];return Object.entries(null!=t?t:{}).forEach((([e,t])=>{n.push({field:e,value:t})})),q({...e,data:n})}),[p,O.pageIndex,O.pageSize,q]);return Object(u.jsx)("section",{style:{width:"100%"},"data-test-subj":e["data-test-subj"]},Object(u.jsx)(a.Suspense,{fallback:null},A>-1&&Object(u.jsx)(d,{alert:p[A],alertsCount:b,state:e.flyoutState,onClose:E,alertsTableConfiguration:e.alertsTableConfiguration,flyoutIndex:A+O.pageIndex*O.pageSize,onPaginate:w,isLoading:h})),b>=0&&Object(u.jsx)(s.EuiDataGrid,{"aria-label":"Alerts table","data-test-subj":"alertsTable",columns:e.columns,columnVisibility:{visibleColumns:_,setVisibleColumns:R},trailingControlColumns:e.trailingControlColumns,leadingControlColumns:z,rowCount:b,renderCellValue:U,gridStyle:{...f,rowClasses:t},sorting:{columns:y,onSort:x},pagination:{...O,pageSizeOptions:e.pageSizeOptions,onChangeItemsPerPage:S,onChangePage:I}}))}}}]);