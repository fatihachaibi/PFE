(window.eventAnnotation_bundle_jsonpfunction=window.eventAnnotation_bundle_jsonpfunction||[]).push([[1],{9:function(n,e,t){"use strict";t.r(e),t.d(e,"hasIcon",(function(){return o})),t.d(e,"getEventAnnotationService",(function(){return l}));var i=t(2);function o(n){return null!=n&&"empty"!==n}function l(){return{toExpression:n=>{if((n=>Boolean(n&&"range"===(null==n?void 0:n.key.type)))(n)){const{label:e,isHidden:t,color:o,key:l,outside:a}=n,{timestamp:u,endTimestamp:r}=l;return{type:"expression",chain:[{type:"function",function:"manual_range_event_annotation",arguments:{time:[u],endTime:[r],label:[e||i.b],color:[o||i.c],outside:[Boolean(a)],isHidden:[Boolean(t)]}}]}}{const{label:e,isHidden:t,color:l,lineStyle:a,lineWidth:u,icon:r,key:s,textVisibility:c}=n;return{type:"expression",chain:[{type:"function",function:"manual_point_event_annotation",arguments:{time:[s.timestamp],label:[e||i.b],color:[l||i.a],lineWidth:[u||1],lineStyle:[a||"solid"],icon:o(r)?[r]:["triangle"],textVisibility:[c||!1],isHidden:[Boolean(t)]}}]}}}}}}}]);