/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.observability_bundle_jsonpfunction=window.observability_bundle_jsonpfunction||[]).push([[8],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(0),a=t(52);function s(){return Object(r.useContext)(a.a)}},131:function(e,n,t){"use strict";t.r(n),t.d(n,"DatePicker",(function(){return o}));var r=t(7),a=t(0),s=t.n(a),u=t(43),i=t(101);function o({rangeFrom:e,rangeTo:n,refreshPaused:t,refreshInterval:o,onTimeRangeRefresh:c}){const{updateTimeRange:f,updateRefreshInterval:d}=Object(i.a)(),l=Object(u.b)(u.a.TIMEPICKER_QUICK_RANGES).map((({from:e,to:n,display:t})=>({start:e,end:n,label:t}))),b=Object(a.useCallback)((e=>{c&&c(e),f(e)}),[c,f]);return s.a.createElement(r.EuiSuperDatePicker,{start:e,end:n,onTimeChange:b,onRefresh:b,isPaused:t,refreshInterval:o,onRefreshChange:function({isPaused:e,refreshInterval:n}){d({isPaused:e,interval:n})},commonlyUsedRanges:l})}n.default=o}}]);