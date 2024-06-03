/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.securitySolution_bundle_jsonpfunction=window.securitySolution_bundle_jsonpfunction||[]).push([[26],{1378:function(t,e,n){"use strict";n.r(e),n.d(e,"KibanaNoDataPage",(function(){return V}));var a=n(285),r=n.n(a),i=n(38),o=n.n(i),c=n(286),u=n.n(c),s=n(5),f=n.n(s),d=n(798),l=n(430),w=n(486),b=f.a.lazy((function(){return Promise.all([n.e(11),n.e(28)]).then(n.bind(null,1369)).then((function(t){return{default:t.NoDataViewsPrompt}}))})),j=Object(l.c)(b),D=f.a.lazy((function(){return n.e(11).then(n.bind(null,1361)).then((function(t){return{default:t.NoDataViewsPrompt}}))})),p=(Object(l.c)(D),n(16)),O=n(1360),h=n(167),x={name:"y1f223",styles:"margin:auto"},V=function(t){var e=t.onDataViewCreated,n=t.noDataConfig,a=Object(d.f)().canCreateNewDataView,i=Object(d.c)().dataViewsDocLink,c=Object(d.d)().openDataViewEditor,f=Object(d.b)(),l=f.hasESData,b=f.hasUserDataView,D=Object(s.useState)(!0),V=o()(D,2),v=V[0],m=V[1],C=Object(s.useState)(!1),P=o()(C,2),g=P[0],y=P[1],E=Object(s.useState)(!1),N=o()(E,2),S=N[0],_=N[1];if(Object(s.useEffect)((function(){var t=function(){var t=r()(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=y,t.next=3,l();case 3:return t.t1=t.sent,(0,t.t0)(t.t1),t.t2=_,t.next=8,b();case 8:t.t3=t.sent,(0,t.t2)(t.t3),m(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().catch((function(){m(!1)}))}),[l,b]),v)return Object(h.jsx)(p.EuiLoadingElastic,{css:x,size:"xxl"});if(!S&&g){var k={canCreateNewDataView:a,dataViewsDocLink:i,openDataViewEditor:c};return Object(h.jsx)(w.a,k,Object(h.jsx)(j,{onDataViewCreated:e}))}return g?null:Object(h.jsx)(O.NoDataConfigPage,{noDataConfig:n})}},486:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d}));var a=n(210),r=n.n(a),i=n(5),o=n.n(i),c=n(167),u=["children"],s=o.a.createContext(null),f=function(t){var e=t.children,n=r()(t,u);return Object(c.jsx)(s.Provider,{value:n},e)};function d(){var t=Object(i.useContext)(s);if(!t)throw new Error("NoDataViewsPromptContext is missing.  Ensure your component or React root is wrapped with NoDataViewsPromptProvider.");return t}}}]);