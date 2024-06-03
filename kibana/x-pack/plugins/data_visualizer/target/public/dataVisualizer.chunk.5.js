/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.dataVisualizer_bundle_jsonpfunction=window.dataVisualizer_bundle_jsonpfunction||[]).push([[5],{47:function(e,t,s){"use strict";s.r(t),s.d(t,"FileDataVisualizer",(function(){return a.FileDataVisualizer})),s.d(t,"IndexDataVisualizer",(function(){return p}));var a=s(84),i=(s(74),s(0)),r=s(40),n=s(7),c=s(22),d=s(6),o=s(1),l=s(26),u=s(3),h=s(60),v=s(10),b=s(48),S=s(12),j=s(62),f=s(83),O=s(5);const g=e=>{const t=Object(v.d)(e.urlSearchString);let s={dataViewId:t.index,searchSessionId:e.searchSessionId};if(e.savedSearchId&&(s.savedSearchId=e.savedSearchId),t){if(t._g){const{time:e,refreshInterval:a}=t._g;s.timeRange=e,s.refreshInterval=a}t._a&&t._a[j.a]&&(s={...s,...t._a[j.a]})}return s},I=({IndexDataVisualizerComponent:e,getAdditionalLinks:t})=>{const{services:s}=Object(b.a)(),{data:{dataViews:a,search:l},savedObjects:{client:u},notifications:{toasts:h}}=s,j=Object(r.useHistory)(),{search:I}=Object(r.useLocation)(),[p,y]=Object(i.useState)(void 0),[x,w]=Object(i.useState)(null),[V,m]=Object(i.useState)(void 0);Object(i.useEffect)((()=>{const e=Object(v.d)(I);if(l.session&&l.session.enableStorage({getName:async()=>f.a,getLocatorData:async()=>({id:S.a,initialState:g({...s,urlSearchString:I,dataViewId:null==p?void 0:p.id,savedSearchId:null==x?void 0:x.id,shouldRestoreSearchSession:!1,searchSessionId:l.session.getSessionId()}),restoreState:g({...s,urlSearchString:I,dataViewId:null==p?void 0:p.id,savedSearchId:null==x?void 0:x.id,shouldRestoreSearchSession:!0,searchSessionId:l.session.getSessionId()})})}),void 0!==e.searchSessionId&&e.searchSessionId!==V){var t;null===(t=l.session)||void 0===t||t.restore(e.searchSessionId),m(e.searchSessionId)}else{var a;const e=null===(a=l.session)||void 0===a?void 0:a.start();m(e)}return()=>{l.session.clear()}}),[l.session,I]),Object(i.useEffect)((()=>{const e=I,t=Object(n.parse)(e,{sort:!1});(async()=>{if("string"==typeof(null==t?void 0:t.savedSearchId)){const s=t.savedSearchId;try{var e;const t=await u.get("search",s),i=null===(e=t.references.find((e=>"index-pattern"===e.type)))||void 0===e?void 0:e.id;if(void 0!==i&&t)try{const e=await a.get(i);w(t),y(e)}catch(e){h.addError(e,{title:o.i18n.translate("xpack.dataVisualizer.index.dataViewErrorMessage",{defaultMessage:"Error finding data view"})})}}catch(e){h.addError(e,{title:o.i18n.translate("xpack.dataVisualizer.index.savedSearchErrorMessage",{defaultMessage:"Error retrieving saved search {savedSearchId}",values:{savedSearchId:s}})})}}if("string"==typeof(null==t?void 0:t.index)){const e=await a.get(t.index);y(e)}})()}),[u,h,a,I]);const E=Object(i.useCallback)(((e,t,s,a)=>{const i=I,r=Object(v.d)(i),o=Object(n.parse)(i,{sort:!1});if(Object.prototype.hasOwnProperty.call(r,e)||(r[e]={}),"string"==typeof t){if(Object(c.isEqual)(Object(v.b)(r,`${e}.${t}`),s))return i;r[e][t]=s}else{const s=t;Object.keys(s).forEach((t=>{r[e][t]=s[t]}))}try{const e=Object(n.stringify)(o,{sort:!1,encode:!1});if(Object.keys(r).forEach((e=>{Object(v.c)(e)?o[e]=Object(d.encode)(r[e]):o[e]=r[e]})),e!==Object(n.stringify)(o,{sort:!1,encode:!1})){const e=Object(n.stringify)(o,{sort:!1});a?j.replace({search:e}):j.push({search:e})}}catch(e){console.error("Could not save url state",e)}}),[j,I]);return Object(O.jsx)(v.a,{value:{searchString:I,setUrlState:E}},p?Object(O.jsx)(e,{currentDataView:p,currentSavedSearch:x,currentSessionId:V,getAdditionalLinks:t}):Object(O.jsx)("div",null))},p=({getAdditionalLinks:e})=>{const t=Object(u.a)(),{data:s,maps:a,embeddable:i,discover:r,share:n,security:c,fileUpload:d,lens:o,dataViewFieldEditor:v,uiActions:b,charts:S,unifiedSearch:j}=Object(u.b)(),f={data:s,maps:a,embeddable:i,discover:r,share:n,security:c,fileUpload:d,lens:o,dataViewFieldEditor:v,uiActions:b,charts:S,unifiedSearch:j,...t};return Object(O.jsx)(l.KibanaThemeProvider,{theme$:t.theme.theme$},Object(O.jsx)(l.KibanaContextProvider,{services:{...f}},Object(O.jsx)(I,{IndexDataVisualizerComponent:h.a,getAdditionalLinks:e})))}}}]);