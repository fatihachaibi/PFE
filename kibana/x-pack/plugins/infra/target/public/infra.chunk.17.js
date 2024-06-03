/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.infra_bundle_jsonpfunction=window.infra_bundle_jsonpfunction||[]).push([[17],{292:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(35),u=n(70),i=n(12),s=n(96);const l=e=>{const{timerange:t,isLoading:n,pods:o,pageCount:u,currentPageIndex:l,setCurrentPageIndex:c,sortState:g,setSortState:d}=e,m=Object(r.useMemo)((()=>function(e){return[{name:"Name",field:"name",truncateText:!0,render:t=>a.a.createElement(s.a,{id:t,nodeType:"pod",timerange:e})},{name:"Uptime",field:"uptime",align:"right",render:e=>a.a.createElement(s.d,{uptimeMs:e})},{name:"CPU usage (avg.)",field:"averageCpuUsagePercent",align:"right",render:e=>a.a.createElement(s.b,{value:e,unit:"%"})},{name:"Memory usage (avg.)",field:"averageMemoryUsageMegabytes",align:"right",render:e=>a.a.createElement(s.b,{value:e,unit:" MB"})}]}(t)),[t]),f={enableAllColumns:!0,sort:g};return n?a.a.createElement(i.EuiFlexGroup,{alignItems:"center",justifyContent:"center",direction:"column"},a.a.createElement(i.EuiLoadingSpinner,{size:"xl","data-test-subj":"podMetricsTableLoader"})):a.a.createElement(a.a.Fragment,null,a.a.createElement(i.EuiBasicTable,{tableCaption:"Infrastructure metrics for pods",items:o,columns:m,sorting:f,onChange:({sort:e={direction:"desc",field:"averageCpuUsagePercent"}})=>{d(e),c(0)},"data-test-subj":"podMetricsTable"}),a.a.createElement(i.EuiSpacer,{size:"s"}),a.a.createElement(i.EuiFlexGroup,{justifyContent:"flexEnd",alignItems:"center",responsive:!1,wrap:!0},a.a.createElement(i.EuiFlexItem,{grow:!1},a.a.createElement(s.c,{ariaLabel:"Pod metrics pagination",pageCount:u,currentPageIndex:l,setCurrentPageIndex:c,"data-test-subj":"podMetricsTablePagination"}))))},{options:c,metricByField:g}=Object(s.e)({"kubernetes.pod.start_time":{aggregation:"max",field:"kubernetes.pod.start_time"},"kubernetes.pod.cpu.usage.node.pct":{aggregation:"avg",field:"kubernetes.pod.cpu.usage.node.pct"},"kubernetes.pod.memory.usage.bytes":{aggregation:"avg",field:"kubernetes.pod.memory.usage.bytes"}},"kubernetes.pod.name");function d(e){return 0===e.rows.length?{name:e.id,uptime:null,averageCpuUsagePercent:null,averageMemoryUsageMegabytes:null}:{name:e.id,...m(e.rows)}}function m(e){const{uptimeValues:t,averageCpuUsagePercentValues:n,averageMemoryUsageMegabytesValues:r}=function(e){const t=[],n=[],r=[];return e.forEach((e=>{const{uptime:a,averageCpuUsagePercent:o,averageMemoryUsageMegabytes:u}=function(e){return{uptime:e[g["kubernetes.pod.start_time"]],averageCpuUsagePercent:e[g["kubernetes.pod.cpu.usage.node.pct"]],averageMemoryUsageMegabytes:e[g["kubernetes.pod.memory.usage.bytes"]]}}(e);null!==a&&t.push(a),null!==o&&n.push(o),null!==u&&r.push(u)})),{uptimeValues:t,averageCpuUsagePercentValues:n,averageMemoryUsageMegabytesValues:r}}(e);let a=null;0!==t.length&&(a=f(t));let o=null;0!==n.length&&(o=f(n));let u=null;if(0!==r.length){const e=f(r),t=1e6;u=Math.floor(e/t)}return{uptime:a,averageCpuUsagePercent:o,averageMemoryUsageMegabytes:u}}function f(e){return e.reduce(((e,t)=>e+t),0)/e.length}function p({timerange:e,filterClauseDsl:t}){const n=function({timerange:e,filterClauseDsl:t}){const[n,a]=Object(r.useState)(0),[o,u]=Object(r.useState)({field:"averageCpuUsagePercent",direction:"desc"}),{isLoading:i,nodes:l,pageCount:g}=Object(s.f)({metricsExplorerOptions:c,timerange:e,filterClauseDsl:t,transform:d,sortState:o,currentPageIndex:n});return{timerange:e,isLoading:i,pods:l,pageCount:g,currentPageIndex:n,setCurrentPageIndex:a,sortState:o,setSortState:u}}({timerange:e,filterClauseDsl:t});return a.a.createElement(l,n)}t.default=function({timerange:e,filterClauseDsl:t,sourceId:n,...r}){return a.a.createElement(o.b,r,a.a.createElement(u.b,{sourceId:n},a.a.createElement(p,{timerange:e,filterClauseDsl:t})))}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return P}));var r=n(10),a=n(12),o=n(2),u=n.n(o),i=n(30),s=n(118);const l=({id:e,nodeType:t,timerange:n})=>{var o,l;const c=Object(i.useLinkProps)(Object(s.a)({nodeType:t,nodeId:e,from:null===(o=Object(r.parse)(n.from))||void 0===o?void 0:o.valueOf(),to:null===(l=Object(r.parse)(n.to))||void 0===l?void 0:l.valueOf()}));return u.a.createElement(a.EuiLink,{href:c.href},e)};function c({value:e,unit:t}){return null==e||isNaN(e)?u.a.createElement(a.EuiTextColor,{color:"subdued"},"N/A"):t?u.a.createElement("span",null,u.a.createElement(a.EuiI18nNumber,{value:g(e)}),t):u.a.createElement(a.EuiI18nNumber,{value:g(e)})}function g(e){return Math.round(10*e)/10}var d=n(15);const m=Object(d.euiStyled)(a.EuiPagination)`
  [data-test-subj="pagination-button-first"],
  [data-test-subj="pagination-button-last"] {
    display: none;
  }
`;function f({ariaLabel:e,pageCount:t,currentPageIndex:n,setCurrentPageIndex:r}){return u.a.createElement(m,{"aria-label":e,pageCount:t,activePage:n,onPageClick:r,compressed:!0})}function p({uptimeMs:e}){return null==e||isNaN(e)?u.a.createElement(a.EuiTextColor,{color:"subdued"},"N/A"):u.a.createElement("span",null,function(e){if(e<v){const t=Math.floor(e/b);return t>0?`${t}m`:"< a minute"}if(e<y){const t=Math.floor(e/v),n=e-t*v,r=Math.floor(n/b);return r>0?`${t}h ${r}m`:`${t}h`}const t=Math.floor(e/y),n=e-t*y,r=Math.floor(n/v);return r>0?`${t}d ${r}h`:`${t}d`}(e))}const b=6e4,v=36e5,y=864e5;function E(e,t){const n=Object.values(e),r={aggregation:"avg",groupBy:t,metrics:n},a=function(e,t){return e.reduce(((e,n)=>({...e,[n]:C(n,t)})),{})}(Object.keys(e),n);return{options:r,metricByField:a}}function C(e,t){const n=t.findIndex((t=>t.field===e));if(-1===n)throw new Error("Failed to find index for field "+e);return`metric_${n}`}var h=n(9),M=n(70),j=n(68);const O={series:[],pageInfo:{afterKey:null,total:-1}},P=e=>{const{metricsExplorerOptions:t,timerange:n,filterClauseDsl:a,transform:u,sortState:i,currentPageIndex:s}=e,[l,c]=Object(o.useState)([]),g=function(){var e;const t=null===(e=Object(h.useKibana)().services.http)||void 0===e?void 0:e.fetch;if(!t)throw new Error("Could not find Kibana HTTP fetch");return t}(),{source:d,isLoadingSource:m}=Object(M.c)(),f=function(e){return Object(o.useMemo)((()=>{const t=Object(r.parse)(e.from),n=Object(r.parse)(e.to);if(!t||!n)throw new Error("Could not parse timerange");return{from:t.valueOf(),to:n.valueOf(),interval:"modules"}}),[e])}(n),[{state:p},b]=Object(j.c)({createPromise:()=>{if(!d)return Promise.resolve(O);const e={metrics:t.metrics,groupBy:t.groupBy,limit:1e4,indexPattern:d.configuration.metricAlias,filterQuery:JSON.stringify(a),timerange:f};return g("/api/infra/metrics_explorer",{method:"POST",body:JSON.stringify(e)})},onResolve:e=>{c(e.series.map(u))},onReject:e=>{console.log(e)},cancelPreviousOn:"creation"},[d,t,f,a]),v="pending"===p||"uninitialized"===p;Object(o.useEffect)((()=>{b()}),[b]);const y=Object(o.useMemo)((()=>[...l].sort(function(e){return(t,n)=>{const r=t[e.field],a=n[e.field];return"asc"===e.direction?function(e,t){return null===e?-1:null===t?1:"string"==typeof e&&"string"==typeof t?e.localeCompare(t):"number"==typeof e&&"number"==typeof t?e-t:0}(r,a):function(e,t){return null===e?1:null===t?-1:"string"==typeof e&&"string"==typeof t?t.localeCompare(e):"number"==typeof e&&"number"==typeof t?t-e:0}(r,a)}}(i))),[l,i]),E=Object(o.useMemo)((()=>y.slice(0,100)),[y]);return{isLoading:m||v,nodes:Object(o.useMemo)((()=>{const e=10*s,t=e+10;return E.slice(e,t)}),[E,s]),pageCount:Object(o.useMemo)((()=>Math.ceil(E.length/10)),[E])}}}}]);