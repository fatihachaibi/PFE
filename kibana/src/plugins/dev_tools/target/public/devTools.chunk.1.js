(window.devTools_bundle_jsonpfunction=window.devTools_bundle_jsonpfunction||[]).push([[1],{24:function(e,t,n){"use strict";n.r(t),n.d(t,"renderApp",(function(){return j}));var a=n(16),o=n(17),s=n.n(o),i=n(18),l=n(19),c=n(20),u=n(1),d=n(21),r=n(22),b=n(23);function p({devTools:e,activeDevTool:t,updateRoute:n,theme$:o,appServices:s,location:i}){const{docTitleService:c,breadcrumbService:p}=s,j=Object(a.useRef)(null);return Object(a.useEffect)((()=>()=>{j.current&&j.current.unmountHandler()}),[]),Object(a.useEffect)((()=>{c.setTitle(t.title),p.setBreadcrumbs(t.title)}),[t,c,p]),Object(r.useExecutionContext)(s.executionContext,{type:"application",page:t.id}),Object(b.jsx)("main",{className:"devApp"},Object(b.jsx)(l.EuiTabs,{style:{paddingLeft:d.euiThemeVars.euiSizeS},size:"l"},e.map((e=>Object(b.jsx)(l.EuiTab,{key:e.id,disabled:e.isDisabled(),isSelected:e===t,onClick:()=>{e.isDisabled()||n(`/${e.id}`)}},Object(b.jsx)(l.EuiToolTip,{content:e.tooltipContent},Object(b.jsx)("span",null,e.title," ",e.isBeta&&Object(b.jsx)(l.EuiBetaBadge,{size:"s",className:"devApp__tabBeta",label:u.i18n.translate("devTools.badge.betaLabel",{defaultMessage:"Beta"}),tooltipContent:u.i18n.translate("devTools.badge.betaTooltipText",{defaultMessage:"This feature might change drastically in future releases"})}))))))),Object(b.jsx)("div",{className:"devApp__container",role:"tabpanel","data-test-subj":t.id,ref:async e=>{if(e&&(null===j.current||j.current.devTool!==t||j.current.mountpoint!==e)){j.current&&j.current.unmountHandler();const n={element:e,location:i,theme$:o},a=await t.mount(n);j.current={devTool:t,mountpoint:e,unmountHandler:a}}}}))}function j(e,t,n,a,o,l,d){if(function(e){return!e.capabilities.dev_tools.show&&(e.navigateToApp("home"),!0)}(t))return()=>{};!function(e,t){e.capabilities.dev_tools.save||t.setBadge({text:u.i18n.translate("devTools.badge.readOnly.text",{defaultMessage:"Read only"}),tooltip:u.i18n.translate("devTools.badge.readOnly.tooltip",{defaultMessage:"Unable to save"}),iconType:"glasses"})}(t,n),s.a.render(Object(b.jsx)(c.I18nProvider,null,Object(b.jsx)(r.KibanaThemeProvider,{theme$:o},Object(b.jsx)(i.HashRouter,null,Object(b.jsx)(i.Switch,null,l.filter((e=>!e.isDisabled())).map((e=>Object(b.jsx)(i.Route,{key:e.id,path:`/${e.id}`,exact:!e.enableRouting,render:t=>Object(b.jsx)(p,{updateRoute:t.history.push,location:t.location,activeDevTool:e,devTools:l,theme$:o,appServices:d})}))),Object(b.jsx)(i.Route,{path:"/"},Object(b.jsx)(i.Redirect,{to:`/${l[0].id}`})))))),e);const j=a.listen((()=>{window.dispatchEvent(new HashChangeEvent("hashchange"))}));return()=>{n.docTitle.reset(),s.a.unmountComponentAtNode(e),j()}}}}]);