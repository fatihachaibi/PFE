/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[]).push([[8,10],{211:function(e,t,o){"use strict";o.r(t),o.d(t,"AnomalyDetectorService",(function(){return AnomalyDetectorService}));var n=o(5),s=o.n(n),a=o(25),r=o(76);class AnomalyDetectorService{constructor(e){s()(this,"apiBasePath",Object(r.basePath)()+"/anomaly_detectors"),this.httpService=e}getJobById$(e){return this.httpService.http$({path:`${this.apiBasePath}/${e}`}).pipe(Object(a.map)((e=>e.jobs[0])))}getJobs$(e){return this.httpService.http$({path:`${this.apiBasePath}/${e.join(",")}`}).pipe(Object(a.map)((e=>e.jobs)))}extractInfluencers(e){Array.isArray(e)||(e=[e]);const t=new Set;for(const o of e)for(const e of o.analysis_config.influencers||[])t.add(e);return Array.from(t)}}},266:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));var n=o(24),s=o.n(n),a=o(25),r=o(23),c=(o(17),o(45)),i=o(58),l=o(183),u=o(213),b=o(258),p=o(13);async function h(e,t){const{http:o,uiSettings:n,theme:h,application:{currentAppId$:j}}=e;return new Promise((async(d,m)=>{try{const y={groupsMap:Object(l.b)([]),jobsMap:{}},f=n.get("dateFormat:tz"),v="Browser"!==f?f:s.a.tz.guess(),S=()=>{w.close(),m()},O=async({jobIds:e,groups:t})=>{await w.close(),d({jobIds:e,groups:t})},w=e.overlays.openFlyout(Object(c.toMountPoint)(Object(c.wrapWithTheme)(Object(p.jsx)(c.KibanaContextProvider,{services:{...e,mlServices:Object(u.getMlGlobalServices)(o)}},Object(p.jsx)(b.a,{selectedIds:t,withTimeRangeSelector:!1,dateFormatTz:v,singleSelection:!1,timeseriesOnly:!0,onFlyoutClose:S,onSelectionConfirmed:O,maps:y})),h.theme$)),{"data-test-subj":"mlFlyoutJobSelector",ownFocus:!0,closeButtonAriaLabel:"jobSelectorFlyout"});j.pipe(Object(a.takeUntil)(Object(r.from)(w.onClose))).subscribe((e=>{e!==i.DashboardConstants.DASHBOARDS_ID&&w.close()}))}catch(e){m(e)}}))}},702:function(e,t,o){"use strict";o.r(t),o.d(t,"resolveEmbeddableAnomalyChartsUserInput",(function(){return p})),o(17);var n=o(23),s=o(45),a=o(94),r=o(211),c=o(280),i=o(109),l=o(266),u=o(372),b=o(13);async function p(e,t){const{http:o,overlays:p}=e,h=new r.AnomalyDetectorService(new i.a(o));return new Promise((async(o,r)=>{try{var i;const{jobIds:j}=await Object(l.a)(e,null==t?void 0:t.jobIds),d=null!==(i=null==t?void 0:t.title)&&void 0!==i?i:Object(c.getDefaultExplorerChartsPanelTitle)(j),m=await Object(n.lastValueFrom)(h.getJobs$(j));h.extractInfluencers(m).push(a.j);const{theme$:y}=e.theme,f=p.openModal(Object(s.toMountPoint)(Object(s.wrapWithTheme)(Object(b.jsx)(u.a,{defaultTitle:d,initialInput:t,onCreate:({panelTitle:e,maxSeriesToPlot:t})=>{f.close(),o({jobIds:j,title:e,maxSeriesToPlot:t})},onCancel:()=>{f.close(),r()}}),y)))}catch(e){r(e)}}))}}}]);