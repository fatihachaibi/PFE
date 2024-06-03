/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.lens_bundle_jsonpfunction=window.lens_bundle_jsonpfunction||[]).push([[17],{64:function(e,n,t){"use strict";t.r(n),t.d(n,"timeScaleFn",(function(){return m}));var a=t(41),o=t.n(a),s=t(0),l=t(46),i=t(37);const u={s:1e3,m:6e4,h:36e5,d:864e5},m=e=>async(n,{dateColumnId:t,inputColumnId:a,outputColumnId:m,outputColumnName:r,targetUnit:c},d)=>{const f=n.columns.find((e=>e.id===t));if(!f)throw new Error(s.i18n.translate("xpack.lens.functions.timeScale.dateColumnMissingMessage",{defaultMessage:"Specified dateColumnId {columnId} does not exist.",values:{columnId:t}}));const w=Object(l.buildResultColumns)(n,m,a,r,{allowColumnOverwrite:!0});if(!w)return n;const g=u[c],p=Object(i.getDateHistogramMetaDataByDatatableColumn)(f,{timeZone:await e(d)}),C=(null==p?void 0:p.interval)&&Object(i.parseInterval)(p.interval);if(!p||!C)throw new Error(s.i18n.translate("xpack.lens.functions.timeScale.timeInfoMissingMessage",{defaultMessage:"Could not fetch date histogram information"}));const b=o()().zoneName();let I;try{o.a.tz.setDefault(p.timeZone);const e=p.timeRange&&Object(i.calculateBounds)(p.timeRange);I={...n,columns:w,rows:n.rows.map((n=>{const s={...n};let l=o()(n[t]),i=l.clone().add(C);e&&e.min&&(l=o.a.max(l,e.min)),e&&e.max&&(i=o.a.min(i,e.max));const u=i.diff(l)/g,r=s[a];return null!=r&&(s[m]=Number(r)/u),s}))}}finally{o.a.tz.setDefault(b)}return I}}}]);