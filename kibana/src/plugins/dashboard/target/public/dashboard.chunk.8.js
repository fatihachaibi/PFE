(window.dashboard_bundle_jsonpfunction=window.dashboard_bundle_jsonpfunction||[]).push([[8],{204:function(t,e,n){t.exports=n(21)(919)},205:function(t,e,n){t.exports=n(21)(518)},234:function(t,e,n){"use strict";n.r(e),n.d(e,"KibanaNoDataPage",(function(){return V}));var a=n(204),r=n.n(a),o=n(69),i=n.n(o),c=n(205),u=n.n(c),s=n(8),f=n.n(s),d=n(81),w=n(72),b=n(79),j=f.a.lazy((function(){return Promise.all([n.e(2),n.e(10)]).then(n.bind(null,230)).then((function(t){return{default:t.NoDataViewsPrompt}}))})),l=Object(w.c)(j),p=f.a.lazy((function(){return n.e(2).then(n.bind(null,229)).then((function(t){return{default:t.NoDataViewsPrompt}}))})),D=(Object(w.c)(p),n(5)),h=n(228),O=n(2),x={name:"y1f223",styles:"margin:auto"},V=function(t){var e=t.onDataViewCreated,n=t.noDataConfig,a=Object(d.g)().canCreateNewDataView,o=Object(d.d)().dataViewsDocLink,c=Object(d.e)().openDataViewEditor,f=Object(d.c)(),w=f.hasESData,j=f.hasUserDataView,p=Object(s.useState)(!0),V=i()(p,2),v=V[0],m=V[1],C=Object(s.useState)(!1),g=i()(C,2),P=g[0],E=g[1],N=Object(s.useState)(!1),y=i()(N,2),S=y[0],_=y[1];if(Object(s.useEffect)((function(){var t=function(){var t=r()(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=E,t.next=3,w();case 3:return t.t1=t.sent,(0,t.t0)(t.t1),t.t2=_,t.next=8,j();case 8:t.t3=t.sent,(0,t.t2)(t.t3),m(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().catch((function(){m(!1)}))}),[w,j]),v)return Object(O.jsx)(D.EuiLoadingElastic,{css:x,size:"xxl"});if(!S&&P){var k={canCreateNewDataView:a,dataViewsDocLink:o,openDataViewEditor:c};return Object(O.jsx)(b.a,k,Object(O.jsx)(l,{onDataViewCreated:e}))}return P?null:Object(O.jsx)(h.NoDataConfigPage,{noDataConfig:n})}},79:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d}));var a=n(64),r=n.n(a),o=n(8),i=n.n(o),c=n(2),u=["children"],s=i.a.createContext(null),f=function(t){var e=t.children,n=r()(t,u);return Object(c.jsx)(s.Provider,{value:n},e)};function d(){var t=Object(o.useContext)(s);if(!t)throw new Error("NoDataViewsPromptContext is missing.  Ensure your component or React root is wrapped with NoDataViewsPromptProvider.");return t}}}]);