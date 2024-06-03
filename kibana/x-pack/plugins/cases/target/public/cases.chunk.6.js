/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.cases_bundle_jsonpfunction=window.cases_bundle_jsonpfunction||[]).push([[6],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=e=>e.map((e=>({value:e.value,text:e.label})))},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(1),l=n(26),i=n(87),c=n(96);const r=({http:e,connector:t,toastNotifications:n,fields:r,onSuccess:o})=>{const[s,u]=Object(a.useState)(!1),[d,m]=Object(a.useState)([]),g=Object(a.useRef)(!1),b=Object(a.useRef)(new AbortController);return Object(a.useEffect)((()=>(g.current=!1,b.current.abort(),(async()=>{if(t)try{b.current=new AbortController,u(!0);const E=await async function({http:e,signal:t,connectorId:n,fields:a}){const c=await e.post(Object(l.d)(n),{body:JSON.stringify({params:{subAction:"getChoices",subActionParams:{fields:a}}}),signal:t});return Object(i.a)(c)}({http:e,signal:b.current.signal,connectorId:t.id,fields:r});var a,s;if(!g.current)if(u(!1),m(null!==(a=E.data)&&void 0!==a?a:[]),E.status&&"error"===E.status)n.addDanger({title:c.d,text:`${null!==(s=E.serviceMessage)&&void 0!==s?s:E.message}`});else if(o){var d;o(null!==(d=E.data)&&void 0!==d?d:[])}}catch(e){g.current||(u(!1),"AbortError"!==e.name&&n.addDanger({title:c.d,text:e.message}))}else u(!1)})(),()=>{g.current=!0,b.current.abort()})),[e,t,n,r]),{choices:d,isLoading:s}}},210:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(1),l=n.n(a),i=n(12),c=n(96),r=n(4),o=n(6),s=n(81),u=n(123),d=n(118),m=n(97);const g=["urgency","severity","impact","category","subcategory"],b={urgency:[],severity:[],impact:[],category:[],subcategory:[]},E=({isEdit:e=!0,fields:t,connector:n,onChange:E})=>{const p=Object(a.useRef)(!0),{severity:f=null,urgency:v=null,impact:y=null,category:j=null,subcategory:h=null}=null!=t?t:{},{http:O,notifications:x}=Object(o.f)().services,[S,w]=Object(a.useState)(b),F=n.isDeprecated,I=Object(a.useMemo)((()=>Object(d.a)(S.category)),[S.category]),C=Object(a.useMemo)((()=>Object(d.a)(S.urgency)),[S.urgency]),N=Object(a.useMemo)((()=>Object(d.a)(S.severity)),[S.severity]),M=Object(a.useMemo)((()=>Object(d.a)(S.impact)),[S.impact]),W=Object(a.useMemo)((()=>Object(d.a)(S.subcategory.filter((e=>e.dependent_value===j)))),[S.subcategory,j]),L=Object(a.useMemo)((()=>{var e,t,n,a,l;return[...null!=v&&v.length>0?[{title:c.m,description:null===(e=C.find((e=>`${e.value}`===v)))||void 0===e?void 0:e.text}]:[],...null!=f&&f.length>0?[{title:c.j,description:null===(t=N.find((e=>`${e.value}`===f)))||void 0===t?void 0:t.text}]:[],...null!=y&&y.length>0?[{title:c.f,description:null===(n=M.find((e=>`${e.value}`===y)))||void 0===n?void 0:n.text}]:[],...null!=j&&j.length>0?[{title:c.c,description:null===(a=I.find((e=>`${e.value}`===j)))||void 0===a?void 0:a.text}]:[],...null!=h&&h.length>0?[{title:c.l,description:null===(l=W.find((e=>`${e.value}`===h)))||void 0===l?void 0:l.text}]:[]]}),[j,I,y,M,f,N,h,W,v,C]),{isLoading:$}=Object(u.a)({http:O,toastNotifications:x.toasts,connector:n,fields:g,onSuccess:e=>{w(e.reduce(((e,t)=>({...e,[t.element]:[...null!=e[t.element]?e[t.element]:[],t]})),b))}}),R=Object(a.useCallback)(((e,n)=>{E({...t,[e]:n})}),[t,E]);return Object(a.useEffect)((()=>{p.current&&(p.current=!1,E({urgency:v,severity:f,impact:y,category:j,subcategory:h}))}),[j,y,E,f,h,v]),l.a.createElement(l.a.Fragment,null,F&&l.a.createElement(i.EuiFlexGroup,null,l.a.createElement(i.EuiFlexItem,null,l.a.createElement(m.a,null))),e?l.a.createElement("div",{"data-test-subj":"connector-fields-sn-itsm"},l.a.createElement(i.EuiFlexGroup,null,l.a.createElement(i.EuiFlexItem,null,l.a.createElement(i.EuiFormRow,{fullWidth:!0,label:c.m},l.a.createElement(i.EuiSelect,{fullWidth:!0,"data-test-subj":"urgencySelect",options:C,value:null!=v?v:void 0,isLoading:$,disabled:$,hasNoInitialSelection:!0,onChange:e=>R("urgency",e.target.value)})))),l.a.createElement(i.EuiSpacer,{size:"m"}),l.a.createElement(i.EuiFlexGroup,null,l.a.createElement(i.EuiFlexItem,null,l.a.createElement(i.EuiFormRow,{fullWidth:!0,label:c.j},l.a.createElement(i.EuiSelect,{fullWidth:!0,"data-test-subj":"severitySelect",options:N,value:null!=f?f:void 0,isLoading:$,disabled:$,hasNoInitialSelection:!0,onChange:e=>R("severity",e.target.value)}))),l.a.createElement(i.EuiFlexItem,null,l.a.createElement(i.EuiFormRow,{fullWidth:!0,label:c.f},l.a.createElement(i.EuiSelect,{fullWidth:!0,"data-test-subj":"impactSelect",options:M,value:null!=y?y:void 0,isLoading:$,disabled:$,hasNoInitialSelection:!0,onChange:e=>R("impact",e.target.value)})))),l.a.createElement(i.EuiFlexGroup,null,l.a.createElement(i.EuiFlexItem,null,l.a.createElement(i.EuiFormRow,{fullWidth:!0,label:c.c},l.a.createElement(i.EuiSelect,{fullWidth:!0,"data-test-subj":"categorySelect",options:I,value:null!=j?j:void 0,isLoading:$,disabled:$,hasNoInitialSelection:!0,onChange:e=>E({...t,category:e.target.value,subcategory:null})}))),l.a.createElement(i.EuiFlexItem,null,(null==W?void 0:W.length)>0?l.a.createElement(i.EuiFormRow,{fullWidth:!0,label:c.l},l.a.createElement(i.EuiSelect,{fullWidth:!0,"data-test-subj":"subcategorySelect",options:W,value:null!=h?h:"",isLoading:$,disabled:$,hasNoInitialSelection:!0,onChange:e=>R("subcategory",e.target.value)})):null))):l.a.createElement(i.EuiFlexGroup,null,l.a.createElement(i.EuiFlexItem,null,l.a.createElement(s.a,{connectorType:r.o.serviceNowITSM,title:n.name,listItems:L,isLoading:!1}))))}},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(1),l=n.n(a),i=n(12),c=n(34),r=n.n(c),o=n(6),s=n(79);const u=r.a.span.withConfig({displayName:"StyledText",componentId:"sc-10fyrf5-0"})(["span{display:block;}"]),d=({connectorType:e,title:t,listItems:n,isLoading:c})=>{const{triggersActionsUi:r}=Object(o.f)().services,d=Object(a.useMemo)((()=>l.a.createElement(u,null,n.length>0&&n.map(((e,t)=>l.a.createElement("span",{"data-test-subj":"card-list-item",key:`${e.title}-${t}`},l.a.createElement("strong",null,`${e.title}: `),e.description))))),[n]),m=Object(a.useMemo)((()=>l.a.createElement(i.EuiIcon,{size:"xl",type:Object(s.b)(r,e)})),[e]);return l.a.createElement(l.a.Fragment,null,c&&l.a.createElement(i.EuiLoadingSpinner,{"data-test-subj":"connector-card-loading"}),!c&&l.a.createElement(i.EuiFlexGroup,{direction:"row"},l.a.createElement(i.EuiFlexItem,null,l.a.createElement(i.EuiCard,{"data-test-subj":"connector-card",description:d,display:"plain",layout:"horizontal",paddingSize:"none",title:t,titleSize:"xs"})),l.a.createElement(i.EuiFlexItem,{grow:!1},m)))};d.displayName="ConnectorCardDisplay";const m=Object(a.memo)(d)},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=({connector_id:e,service_message:t,...n})=>({...n,actionId:e,...t&&{serviceMessage:t}})},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1),l=n.n(a),i=n(12),c=n(2);const r=c.i18n.translate("xpack.cases.connectors.serviceNow.deprecatedConnectorWarningTitle",{defaultMessage:"This connector type is deprecated"}),o=c.i18n.translate("xpack.cases.connectors.serviceNow.deprecatedConnectorWarningDesc",{defaultMessage:"Update this connector, or create a new one."}),s=({type:e="warning"})=>l.a.createElement(i.EuiCallOut,{title:r,color:e,iconType:"alert","data-test-subj":"deprecated-connector-warning-callout"},o);s.displayName="DeprecatedCallout";const u=l.a.memo(s)}}]);