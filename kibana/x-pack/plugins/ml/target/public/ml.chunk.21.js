/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.ml_bundle_jsonpfunction=window.ml_bundle_jsonpfunction||[]).push([[21],{700:function(e,t,n){"use strict";n.r(t);var o=n(17),l=n.n(o),a=n(43),i=n(44),s=n(45),d=n(19),u=n(76),c=n(109),r=n(97),j=n(13);function m(e){return void 0===e.node&&e.state===d.c.OPENING}t.default=({jobIds:e})=>{const{http:t}=Object(s.useKibana)().services,n=Object(o.useMemo)((()=>Object(u.mlApiServicesProvider)(new c.a(t))),[t]),[d,b]=Object(o.useState)(0),[f,g]=Object(o.useState)(null),p=Object(o.useCallback)((async()=>{try{if(0===e.length)return void b(0);const{lazyNodeCount:t}=await n.mlNodeCount();if(0===t)return void b(0);const{jobs:o}=await n.getJobStats({jobId:e.join(",")}),l=o.filter(m);b(l.length)}catch(e){b(0),console.error("Could not determine ML node information",e)}}),[e]),h=Object(o.useCallback)((async()=>{if(0!==d)try{var e;const t=null!==(e=(await n.mlInfo()).cloudId)&&void 0!==e?e:null;g({isCloud:null!==t,cloudId:t,deploymentId:null===t?null:Object(r.a)(t)})}catch(e){g(null),console.error("Could not determine cloud information",e)}}),[d]);return Object(o.useEffect)((()=>{h()}),[d]),Object(o.useEffect)((()=>{p()}),[e]),0===d?null:Object(j.jsx)(l.a.Fragment,null,Object(j.jsx)(a.EuiCallOut,{title:Object(j.jsx)(i.FormattedMessage,{id:"xpack.ml.jobsAwaitingNodeWarningShared.title",defaultMessage:"Awaiting machine learning node"}),color:"primary",iconType:"iInCircle"},Object(j.jsx)("div",null,Object(j.jsx)(i.FormattedMessage,{id:"xpack.ml.jobsAwaitingNodeWarningShared.noMLNodesAvailableDescription",defaultMessage:"There {jobCount, plural, one {is} other {are}} {jobCount, plural, one {# job} other {# jobs}} waiting for machine learning nodes to start.",values:{jobCount:d}}),Object(j.jsx)(a.EuiSpacer,{size:"s"}),f&&(f.isCloud?Object(j.jsx)(l.a.Fragment,null,Object(j.jsx)(i.FormattedMessage,{id:"xpack.ml.jobsAwaitingNodeWarningShared.isCloud",defaultMessage:"Elastic Cloud deployments can autoscale to add more ML capacity. This may take 5-20 minutes. "}),null===f.deploymentId?null:Object(j.jsx)(i.FormattedMessage,{id:"xpack.ml.jobsAwaitingNodeWarningShared.isCloud.link",defaultMessage:"You can monitor progress in the {link}.",values:{link:Object(j.jsx)(a.EuiLink,{href:`https://cloud.elastic.co/deployments?q=${f.deploymentId}`},Object(j.jsx)(i.FormattedMessage,{id:"xpack.ml.jobsAwaitingNodeWarningShared.linkToCloud.linkText",defaultMessage:"Elastic Cloud admin console"}))}})):Object(j.jsx)(i.FormattedMessage,{id:"xpack.ml.jobsAwaitingNodeWarningShared.notCloud",defaultMessage:"Only Elastic Cloud deployments can autoscale; you must add machine learning nodes. {link}",values:{link:Object(j.jsx)(a.EuiLink,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/master/modules-node.html#ml-node"},Object(j.jsx)(i.FormattedMessage,{id:"xpack.ml.jobsAwaitingNodeWarningShared.linkToCloud.learnMore",defaultMessage:"Learn more."}))}})))),Object(j.jsx)(a.EuiSpacer,{size:"m"}))}},97:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return j}));var o=n(76);let l={anomaly_detectors:{},datafeeds:{}},a={};const i={cloudId:null,isCloud:!1,deploymentId:null};async function s(){try{const e=await o.ml.mlInfo();return l=e.defaults,a=e.limits,i.cloudId=e.cloudId||null,i.isCloud=void 0!==e.cloudId,i.deploymentId=e.cloudId?j(e.cloudId):null,{defaults:l,limits:a,cloudId:i}}catch(e){return{defaults:l,limits:a,cloudId:i}}}function d(){return l}function u(){return a}function c(){return i.isCloud}function r(){return i.deploymentId}function j(e){const t=e.replace(/^(.+)?:/,"");try{const e=atob(t).match(/^.+\$(.+)(?=\$)/);return null!==e&&2===e.length?e[1]:null}catch(e){return null}}}}]);