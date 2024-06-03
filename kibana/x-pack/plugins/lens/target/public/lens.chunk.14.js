/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.lens_bundle_jsonpfunction=window.lens_bundle_jsonpfunction||[]).push([[14],{461:function(n,e,o){"use strict";o.r(e),o.d(e,"collapseFn",(function(){return t}));var r=o(46);const t=(n,{by:e,metric:o,fn:t})=>{const c={},i={};null==o||o.forEach((n=>{c[n]={},i[n]={}}));const a={};return n.rows.forEach((n=>{const a=Object(r.getBucketIdentifier)(n,e);null==o||o.forEach((e=>{var o;const r=c[e][a],l=n[e];if(null!=l){const n=(s=l,Array.isArray(s)?s.map((n=>Number(n))):[Number(s)]);switch(t){case"avg":i[e][a]=(null!==(o=i[e][a])&&void 0!==o?o:0)+n.length;case"sum":c[e][a]=n.reduce(((n,e)=>n+e),r||0);break;case"min":c[e][a]=void 0!==r?Math.min(r,...n):Math.min(...n);break;case"max":c[e][a]=void 0!==r?Math.max(r,...n):Math.max(...n)}}var s}))})),"avg"===t&&(null==o||o.forEach((n=>{Object.keys(c[n]).forEach((e=>{const o=c[n][e],r=i[n][e];void 0!==o&&void 0!==r&&(c[n][e]=o/r)}))}))),{...n,columns:n.columns.filter((n=>-1!==(null==e?void 0:e.indexOf(n.id))||-1!==(null==o?void 0:o.indexOf(n.id)))),rows:n.rows.map((n=>{const t=Object(r.getBucketIdentifier)(n,e);if(a[t])return;a[t]=!0;const i={};return null==o||o.forEach((n=>{i[n]=c[n][t]})),null==e||e.forEach((e=>{i[e]=n[e]})),i})).filter(Boolean)}}}}]);