(window.savedObjectsManagement_bundle_jsonpfunction=window.savedObjectsManagement_bundle_jsonpfunction||[]).push([[3],{45:function(e,t,n){"use strict";n.r(t),n.d(t,"mountManagementSection",(function(){return m}));var a=n(3),s=n(17),c=n.n(s),i=n(15),l=n(13),o=n(1),r=n(7),u=n(14),j=n(4),d=n(2);let b;const p=o.i18n.translate("savedObjectsManagement.objects.savedObjectsTitle",{defaultMessage:"Saved Objects"}),g=Object(a.lazy)((()=>n.e(1).then(n.bind(null,44)))),O=Object(a.lazy)((()=>n.e(2).then(n.bind(null,43)))),m=async({core:e,mountParams:t})=>{const[n,{data:s,dataViews:o,savedObjectsTaggingOss:m,spaces:h},v]=await e.getStartServices(),{capabilities:x}=n.application,{element:w,history:S,setBreadcrumbs:y}=t,{theme$:T}=e.theme;b||(b=await Object(j.getAllowedTypes)(n.http)),n.chrome.docTitle.change(p);const f=({children:e})=>{var t,a,s;return null!==(t=null==x||null===(a=x.management)||void 0===a||null===(s=a.kibana)||void 0===s?void 0:s.objects)&&void 0!==t&&t?e:(n.application.navigateToApp("home"),null)};return c.a.render(Object(u.wrapWithTheme)(Object(d.jsx)(l.I18nProvider,null,Object(d.jsx)(i.Router,{history:S},Object(d.jsx)(i.Switch,null,Object(d.jsx)(i.Route,{path:"/:type/:id",exact:!0},Object(d.jsx)(f,null,Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)(r.EuiLoadingSpinner,null)},Object(d.jsx)(g,{coreStart:n,setBreadcrumbs:y,history:S})))),Object(d.jsx)(i.Route,{path:"/",exact:!1},Object(d.jsx)(f,null,Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)(r.EuiLoadingSpinner,null)},Object(d.jsx)(O,{coreStart:n,taggingApi:null==m?void 0:m.getTaggingApi(),spacesApi:h,dataStart:s,dataViewsApi:o,actionRegistry:v.actions,columnRegistry:v.columns,allowedTypes:b,setBreadcrumbs:y}))))))),T),w),()=>{n.chrome.docTitle.reset(),c.a.unmountComponentAtNode(w)}}}}]);