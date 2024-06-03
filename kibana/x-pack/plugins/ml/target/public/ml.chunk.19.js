/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[]).push([[19],{263:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a(89),s=a.n(o),n=a(25),r=a(17),i=a(45);function c(e,t,a,o){const c=s()(t.pipe(Object(n.map)((e=>e.executionContext)))),l=Object(r.useMemo)((()=>{const e={type:"visualization",name:a,id:o};return{...c,child:e}}),[c,o]);Object(i.useExecutionContext)(e,l)}},264:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var o=a(130);function s(e,t,a){const s=["kuery"===t.language?Object(o.h)(Object(o.e)(t.query)):Object(o.g)(t.query)],n=[];for(const t of e){if(t.meta.disabled||void 0!==a&&t.meta.controlledBy===a)continue;const{meta:{negate:e,type:o,key:r}}=t;let i=t.query;void 0===i&&"exists"===o&&(i={exists:{field:r}}),i&&(e?n.push(i):s.push(i))}return{bool:{must:s,must_not:n}}}},265:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a(23),s=a(25),n=a(8),r=a(28);function i(e,t,a){return e.pipe(Object(s.pluck)("jobIds"),Object(s.distinctUntilChanged)(n.isEqual),Object(s.switchMap)((e=>t.getJobs$(e))),Object(s.map)((e=>e.map((e=>{const t=Object(r.a)(e.analysis_config.bucket_span);return{id:e.job_id,selected:!0,bucketSpanSeconds:t.asSeconds()}})))),Object(s.catchError)((e=>{var t;return a(null!==(t=e.body)&&void 0!==t?t:e),Object(o.of)(void 0)})))}},709:function(e,t,a){"use strict";a.r(t),a.d(t,"EmbeddableAnomalyChartsContainer",(function(){return C}));var o=a(17),s=a.n(o),n=a(43),r=a(44),i=a(8),c=a(30),l=a(263),u=a(23),d=a(25),b=a(111),j=a(94),m=a(264),O=a(265),h=a(77),p=a.n(h),g=a(2),f=a(375),x=a(145),v=a(13);const y=g.i18n.translate("xpack.ml.explorer.charts.dashboardTooManyBucketsDescription",{defaultMessage:"This selection contains too many buckets to be displayed. You should shorten the time range of the view."}),E=({id:e,chartsData:t,showCharts:a,severity:o,setSeverity:i,mlLocator:c,timeBuckets:l,timefilter:u,onSelectEntity:d,showSelectedInterval:b,chartsService:j})=>Object(v.jsx)(s.a.Fragment,null,Object(v.jsx)(n.EuiFlexGroup,{id:e,direction:"row",gutterSize:"l",responsive:!0},Object(v.jsx)(n.EuiFlexItem,{grow:!1},Object(v.jsx)(x.b,{severity:o,onChange:i}))),Object(v.jsx)(n.EuiSpacer,{size:"m"}),Array.isArray(t.seriesToPlot)&&0===t.seriesToPlot.length&&void 0===t.errorMessages&&Object(v.jsx)(n.EuiText,{textAlign:"center","data-test-subj":"mlNoMatchingAnomaliesMessage"},Object(v.jsx)("h4",null,Object(v.jsx)(r.FormattedMessage,{id:"xpack.ml.explorer.noMatchingAnomaliesFoundTitle",defaultMessage:"No matching anomalies found"}))),Object(v.jsx)("div",{className:"euiText explorer-charts"},a&&Object(v.jsx)(f.a,p()({},t,{severity:o.val,mlLocator:c,timeBuckets:l,timefilter:u,onSelectEntity:d,tooManyBucketsCalloutMsg:y,showSelectedInterval:b,chartsService:j}))));var S=a(0),M=a(18),T=a(118),w=a(259),A=a(108);const C=({id:e,embeddableContext:t,embeddableInput:a,services:s,refresh:h,onInputChange:p,onOutputChange:g,onRenderComplete:f,onError:y,onLoading:C})=>{var k;Object(l.a)(s[0].executionContext,a,A.a,e);const[I,L]=Object(o.useState)(0),[_,R]=Object(o.useState)(Object(x.c)(null!==(k=t.getInput().severityThreshold)&&void 0!==k?k:M.ANOMALY_THRESHOLD.WARNING)),[F,B]=Object(o.useState)(),[{uiSettings:N},{data:D,share:G,uiActions:q,charts:z}]=s,{timefilter:H}=D.query.timefilter,U=Object(o.useMemo)((()=>G.url.locators.get(S.a)),[G]),W=Object(o.useMemo)((()=>new T.a({"histogram:maxBars":N.get(c.UI_SETTINGS.HISTOGRAM_MAX_BARS),"histogram:barTarget":N.get(c.UI_SETTINGS.HISTOGRAM_BAR_TARGET),dateFormat:N.get("dateFormat"),"dateFormat:scaled":N.get("dateFormat:scaled")})),[]);Object(o.useEffect)((()=>{p({severityThreshold:_.val}),g({severity:_.val,entityFields:F})}),[_,F]);const{chartsData:$,isLoading:P,error:Y}=function(e,t,a,s,n,r,i){const[,,{anomalyDetectorService:c,anomalyExplorerService:l}]=s,[h,p]=Object(o.useState)(),[g,f]=Object(o.useState)(),[x,v]=Object(o.useState)(!1),y=Object(o.useMemo)((()=>new u.Subject),[]),E=Object(o.useMemo)((()=>new u.Subject),[]);return Object(o.useEffect)((()=>{const t=Object(u.combineLatest)([Object(O.a)(e,c,f),e,y.pipe(Object(d.skipWhile)((e=>!e))),E,a.pipe(Object(d.startWith)(null))]).pipe(Object(d.tap)(v.bind(null,!0)),Object(d.debounceTime)(500),Object(d.tap)((()=>{i.onLoading()})),Object(d.switchMap)((([e,t,a,o])=>{var s,n;if(!e)return Object(u.of)(void 0);const{maxSeriesToPlot:r,timeRange:i,filters:c,query:d}=t,O=j.g;let h;l.setTimeRange(i);try{h=Object(m.a)(c,d)}catch(e){return f(e),Object(u.of)(void 0)}const p=l.getTimeBounds(),g={lanes:[j.g],times:[null===(s=p.min)||void 0===s?void 0:s.unix(),null===(n=p.max)||void 0===n?void 0:n.unix()],type:j.h.OVERALL},x=Object(b.h)(g,O),v=Object(b.i)(g,e),y=Object(b.j)(g,p);return l.getAnomalyData$(v,a,y.earliestMs,y.latestMs,h,x,null!=o?o:0,r)})),Object(d.catchError)((e=>(f(e.body),Object(u.of)(void 0))))).subscribe((e=>{void 0!==e&&(f(null),p(e),v(!1),i.onRenderComplete())}));return()=>{t.unsubscribe()}}),[]),Object(o.useEffect)((()=>{y.next(n)}),[n]),Object(o.useEffect)((()=>{E.next(r)}),[r]),Object(o.useEffect)((()=>{g&&i.onError(g)}),[g]),{chartsData:h,isLoading:x,error:g}}(a,0,h,s,I,_.val,{onRenderComplete:f,onError:y,onLoading:C}),V=Object(o.useCallback)(Object(i.throttle)((e=>{Math.abs(I-e.width)>20&&L(e.width)}),500),[I]);if(Y)return Object(v.jsx)(n.EuiCallOut,{title:Object(v.jsx)(r.FormattedMessage,{id:"xpack.ml.anomalyChartsEmbeddable.errorMessage",defaultMessage:"Unable to load the ML anomaly explorer data"}),color:"danger",iconType:"alert",style:{width:"100%"}},Object(v.jsx)("p",null,Y.message));const X=(e,a,o)=>{const s=[{fieldName:e,fieldValue:a,operation:o}];B(s),q.getTrigger(w.a).exec({embeddable:t,data:s})};return Object(v.jsx)(n.EuiResizeObserver,{onResize:V},(a=>Object(v.jsx)("div",{id:`mlAnomalyExplorerEmbeddableWrapper-${e}`,style:{width:"100%",overflowY:"auto",overflowX:"hidden",padding:"8px"},"data-test-subj":`mlExplorerEmbeddable_${t.id}`,ref:a},P&&Object(v.jsx)(n.EuiText,{textAlign:"center",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},Object(v.jsx)(n.EuiLoadingChart,{size:"xl",mono:!0,"data-test-subj":"mlAnomalyExplorerEmbeddableLoadingIndicator"})),void 0!==$&&!1===P&&Object(v.jsx)(E,{id:e,showCharts:!0,chartsData:$,severity:_,setSeverity:R,mlLocator:U,timeBuckets:W,timefilter:H,onSelectEntity:X,showSelectedInterval:!1,chartsService:z}))))};t.default=C}}]);