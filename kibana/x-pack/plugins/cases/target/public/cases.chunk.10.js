/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.cases_bundle_jsonpfunction=window.cases_bundle_jsonpfunction||[]).push([[10],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n(1),s=n.n(a),r=n(14),i=n(12),c=n(86),o=n(4),l=n(6),u=n(26),d=n(87);const b=({selectedValue:e,actionConnector:t,onChange:n})=>{const[o,b]=Object(a.useState)(null),[p,m]=Object(a.useState)([]),[g,f]=Object(a.useState)([]),{http:j,notifications:y}=Object(l.f)().services,{isLoading:O,issues:E}=(({http:e,actionConnector:t,toastNotifications:n,query:s})=>{const[i,o]=Object(a.useState)(!1),[l,b]=Object(a.useState)([]),p=Object(a.useRef)(!1),m=Object(a.useRef)(new AbortController);return Object(a.useEffect)((()=>{const a=Object(r.debounce)(500,(async()=>{if(t&&!Object(r.isEmpty)(s))try{m.current=new AbortController,o(!0);const r=await async function({http:e,signal:t,connectorId:n,title:a}){const s=await e.post(Object(u.d)(n),{body:JSON.stringify({params:{subAction:"issues",subActionParams:{title:a}}}),signal:t});return Object(d.a)(s)}({http:e,signal:m.current.signal,connectorId:t.id,title:null!=s?s:""});var a,i;p.current||(o(!1),b(null!==(a=r.data)&&void 0!==a?a:[]),r.status&&"error"===r.status&&n.addDanger({title:c.c,text:`${null!==(i=r.serviceMessage)&&void 0!==i?i:r.message}`}))}catch(e){p.current||(o(!1),"AbortError"!==e.name&&n.addDanger({title:c.c,text:e.message}))}else o(!1)}));return p.current=!1,m.current.abort(),a(),()=>{p.current=!0,m.current.abort()}}),[e,t,n,s]),{issues:l,isLoading:i}})({http:j,toastNotifications:y.toasts,actionConnector:t,query:o}),{isLoading:v,issue:h}=(({http:e,toastNotifications:t,actionConnector:n,id:s})=>{const[r,i]=Object(a.useState)(!1),[o,l]=Object(a.useState)(null),b=Object(a.useRef)(!1),p=Object(a.useRef)(new AbortController);return Object(a.useEffect)((()=>(b.current=!1,p.current.abort(),(async()=>{if(n&&s){p.current=new AbortController,i(!0);try{const o=await async function({http:e,signal:t,connectorId:n,id:a}){const s=await e.post(Object(u.d)(n),{body:JSON.stringify({params:{subAction:"issue",subActionParams:{id:a}}}),signal:t});return Object(d.a)(s)}({http:e,signal:p.current.signal,connectorId:n.id,id:s});var a,r;b.current||(i(!1),l(null!==(a=o.data)&&void 0!==a?a:null),o.status&&"error"===o.status&&t.addDanger({title:c.b(s),text:`${null!==(r=o.serviceMessage)&&void 0!==r?r:o.message}`}))}catch(e){b.current||(i(!1),"AbortError"!==e.name&&t.addDanger({title:c.b(s),text:e.message}))}}else i(!1)})(),()=>{b.current=!0,p.current.abort()})),[e,n,s,t]),{isLoading:r,issue:o}})({http:j,toastNotifications:y.toasts,actionConnector:t,id:e});Object(a.useEffect)((()=>f(E.map((e=>({label:e.title,value:e.key}))))),[E]),Object(a.useEffect)((()=>{if(v||null==h)return;const e=[{label:h.title,value:h.key}];f(e),m(e)}),[h,v]);const C=Object(a.useCallback)((e=>{b(e)}),[]),S=Object(a.useCallback)((e=>{m(e),n(e[0].value)}),[n]),w=Object(a.useMemo)((()=>O||v?c.i:c.j),[O,v]);return s.a.createElement(i.EuiComboBox,{singleSelection:!0,fullWidth:!0,placeholder:w,"data-test-subj":"search-parent-issues","aria-label":c.h,options:g,isLoading:O||v,onSearchChange:C,selectedOptions:p,onChange:S})};b.displayName="SearchIssues";const p=Object(a.memo)(b);var m=n(81);const g=({connector:e,fields:t,isEdit:n=!0,onChange:b})=>{const g=Object(a.useRef)(!0),{issueType:f=null,priority:j=null,parent:y=null}=null!=t?t:{},{http:O,notifications:E}=Object(l.f)().services,v=Object(a.useCallback)((e=>{null==f&&e.length>0&&n&&b({issueType:e[0].value,parent:y,priority:j})}),[n,f,b,y,j]),{isLoading:h,issueTypes:C}=(({http:e,connector:t,toastNotifications:n,handleIssueType:s})=>{const[r,i]=Object(a.useState)(!0),[o,l]=Object(a.useState)([]),b=Object(a.useRef)(!1),p=Object(a.useRef)(new AbortController);return Object(a.useEffect)((()=>(b.current=!1,p.current.abort(),(async()=>{if(t)try{p.current=new AbortController,i(!0);const m=await async function({http:e,signal:t,connectorId:n}){const a=await e.post(Object(u.d)(n),{body:JSON.stringify({params:{subAction:"issueTypes",subActionParams:{}}}),signal:t});return Object(d.a)(a)}({http:e,signal:p.current.signal,connectorId:t.id});if(!b.current){var a,r;const e=(null!==(a=m.data)&&void 0!==a?a:[]).map((e=>{var t,n;return{text:null!==(t=e.name)&&void 0!==t?t:"",value:null!==(n=e.id)&&void 0!==n?n:""}}));var o;l(null!==(r=m.data)&&void 0!==r?r:[]),s(e),i(!1),m.status&&"error"===m.status&&n.addDanger({title:c.e,text:`${null!==(o=m.serviceMessage)&&void 0!==o?o:m.message}`})}}catch(e){b.current||(i(!1),"AbortError"!==e.name&&n.addDanger({title:c.e,text:e.message}))}else i(!1)})(),()=>{b.current=!0,p.current.abort()})),[e,t,n]),{issueTypes:o,isLoading:r}})({connector:e,http:O,toastNotifications:E.toasts,handleIssueType:v}),S=Object(a.useMemo)((()=>C.map((e=>{var t,n;return{text:null!==(t=e.name)&&void 0!==t?t:"",value:null!==(n=e.id)&&void 0!==n?n:""}}))),[C]),w=Object(a.useMemo)((()=>!f&&S.length>0||S.length>0&&!S.some((({value:e})=>e===f))?S[0].value:f),[f,S]),{isLoading:x,fields:I}=(({http:e,toastNotifications:t,connector:n,issueType:s})=>{const[r,i]=Object(a.useState)(!0),[o,l]=Object(a.useState)({}),b=Object(a.useRef)(!1),p=Object(a.useRef)(new AbortController);return Object(a.useEffect)((()=>(b.current=!1,p.current.abort(),(async()=>{if(n&&s)try{p.current=new AbortController,i(!0);const o=await async function({http:e,signal:t,connectorId:n,id:a}){const s=await e.post(Object(u.d)(n),{body:JSON.stringify({params:{subAction:"fieldsByIssueType",subActionParams:{id:a}}}),signal:t});return Object(d.a)(s)}({http:e,signal:p.current.signal,connectorId:n.id,id:s});var a,r;b.current||(l(null!==(a=o.data)&&void 0!==a?a:{}),i(!1),o.status&&"error"===o.status&&t.addDanger({title:c.a,text:`${null!==(r=o.serviceMessage)&&void 0!==r?r:o.message}`}))}catch(e){b.current||(i(!1),"AbortError"!==e.name&&t.addDanger({title:c.a,text:e.message}))}else i(!1)})(),()=>{b.current=!0,p.current.abort()})),[e,n,s,t]),{isLoading:r,fields:o}})({connector:e,http:O,issueType:w,toastNotifications:E.toasts}),A=Object(a.useMemo)((()=>null!=I.priority),[I]),T=Object(a.useMemo)((()=>null!=I.parent),[I]),N=Object(a.useMemo)((()=>{var e,t;const n=null!==(e=null===(t=I.priority)||void 0===t?void 0:t.allowedValues)&&void 0!==e?e:[];return Object(r.map)((e=>({text:e.name,value:e.name})),n)}),[I]),F=Object(a.useMemo)((()=>{var e,t;return[...null!=f&&f.length>0?[{title:c.d,description:null!==(e=null===(t=C.find((e=>e.id===f)))||void 0===t?void 0:t.name)&&void 0!==e?e:""}]:[],...null!=y&&y.length>0?[{title:c.f,description:y}]:[],...null!=j&&j.length>0?[{title:c.g,description:j}]:[]]}),[f,C,y,j]),L=Object(a.useCallback)(((e,n)=>b("issueType"===e?{...t,issueType:n,priority:null,parent:null}:{...t,issueType:w,parent:y,priority:j,[e]:n})),[w,t,b,y,j]);return Object(a.useEffect)((()=>{g.current&&(g.current=!1,b({issueType:f,priority:j,parent:y}))}),[f,b,y,j]),n?s.a.createElement("div",{"data-test-subj":"connector-fields-jira"},s.a.createElement(i.EuiFormRow,{fullWidth:!0,label:c.d},s.a.createElement(i.EuiSelect,{"data-test-subj":"issueTypeSelect",disabled:h||x,fullWidth:!0,isLoading:h,onChange:e=>L("issueType",e.target.value),options:S,value:null!=w?w:""})),s.a.createElement(i.EuiSpacer,{size:"m"}),s.a.createElement(s.a.Fragment,null,T&&s.a.createElement(s.a.Fragment,null,s.a.createElement(i.EuiFlexGroup,null,s.a.createElement(i.EuiFlexItem,null,s.a.createElement(i.EuiFormRow,{fullWidth:!0,label:c.f},s.a.createElement(p,{actionConnector:e,onChange:e=>L("parent",e),selectedValue:y})))),s.a.createElement(i.EuiSpacer,{size:"m"})),A&&s.a.createElement(s.a.Fragment,null,s.a.createElement(i.EuiFlexGroup,null,s.a.createElement(i.EuiFlexItem,null,s.a.createElement(i.EuiFormRow,{fullWidth:!0,label:c.g},s.a.createElement(i.EuiSelect,{"data-test-subj":"prioritySelect",disabled:h||x,fullWidth:!0,hasNoInitialSelection:!0,isLoading:x,onChange:e=>L("priority",e.target.value),options:N,value:null!=j?j:""}))))))):s.a.createElement(m.a,{connectorType:o.o.jira,isLoading:h||x,listItems:F,title:e.name})};g.displayName="JiraFields"},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(1),s=n.n(a),r=n(12),i=n(34),c=n.n(i),o=n(6),l=n(79);const u=c.a.span.withConfig({displayName:"StyledText",componentId:"sc-10fyrf5-0"})(["span{display:block;}"]),d=({connectorType:e,title:t,listItems:n,isLoading:i})=>{const{triggersActionsUi:c}=Object(o.f)().services,d=Object(a.useMemo)((()=>s.a.createElement(u,null,n.length>0&&n.map(((e,t)=>s.a.createElement("span",{"data-test-subj":"card-list-item",key:`${e.title}-${t}`},s.a.createElement("strong",null,`${e.title}: `),e.description))))),[n]),b=Object(a.useMemo)((()=>s.a.createElement(r.EuiIcon,{size:"xl",type:Object(l.b)(c,e)})),[e]);return s.a.createElement(s.a.Fragment,null,i&&s.a.createElement(r.EuiLoadingSpinner,{"data-test-subj":"connector-card-loading"}),!i&&s.a.createElement(r.EuiFlexGroup,{direction:"row"},s.a.createElement(r.EuiFlexItem,null,s.a.createElement(r.EuiCard,{"data-test-subj":"connector-card",description:d,display:"plain",layout:"horizontal",paddingSize:"none",title:t,titleSize:"xs"})),s.a.createElement(r.EuiFlexItem,{grow:!1},b)))};d.displayName="ConnectorCardDisplay";const b=Object(a.memo)(d)},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=({connector_id:e,service_message:t,...n})=>({...n,actionId:e,...t&&{serviceMessage:t}})}}]);