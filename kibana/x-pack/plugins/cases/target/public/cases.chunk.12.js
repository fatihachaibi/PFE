/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.cases_bundle_jsonpfunction=window.cases_bundle_jsonpfunction||[]).push([[12],{100:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return c}));var a=n(34),r=n.n(a);const o=r.a.div.withConfig({displayName:"WhitePageWrapper",componentId:"sc-1jiyl3r-0"})(["background-color:",";border-top:",";flex:1 1 auto;"],(({theme:e})=>e.eui.euiColorEmptyShade),(({theme:e})=>e.eui.euiBorderThin)),i=r.a.div.withConfig({displayName:"WhitePageWrapperNoBorder",componentId:"sc-1jiyl3r-1"})(["background-color:",";flex:1 1 auto;"],(({theme:e})=>e.eui.euiColorEmptyShade)),s=r.a.div.withConfig({displayName:"SectionWrapper",componentId:"sc-1jiyl3r-2"})(["box-sizing:content-box;margin:0 auto;max-width:1175px;width:100%;"]),d=r.a.div.withConfig({displayName:"ContentWrapper",componentId:"sc-1jiyl3r-3"})(["",";"],(({theme:e})=>`\n      padding: ${e.eui.paddingSizes.l} 0 70px 0;\n    `)),c=r.a.div.withConfig({displayName:"Wrapper",componentId:"sc-1jiyl3r-4"})(["display:flex;flex-direction:column;"])},215:function(e,t,n){"use strict";n.r(t),n.d(t,"renderApp",(function(){return g})),n.d(t,"App",(function(){return E}));var a=n(1),r=n.n(a),o=n(71),i=n.n(o),s=n(23),d=n(64),c=n(12),u=n(21),l=n(65),p=n(3),m=n(44),h=n(6),f=n(100);const b=()=>{const e=Object(h.b)();return r.a.createElement(f.e,{"data-test-subj":"cases-app"},Object(m.a)({owner:[p.d],useFetchAlertData:()=>[!1,{}],userCanCrud:e.generalCases.crud,basePath:"/",features:{alerts:{enabled:!1}},releasePhase:"experimental"}))};b.displayName="CasesApp";const y=r.a.memo(b),g=e=>{const{mountParams:t}=e,{element:n}=t;return i.a.render(r.a.createElement(E,{deps:e}),n),()=>{i.a.unmountComponentAtNode(n)}},C=()=>{const[e]=Object(u.useUiSetting$)("theme:darkMode");return r.a.createElement(l.EuiThemeProvider,{darkMode:e},r.a.createElement(y,null))};C.displayName="CasesAppWithContext";const E=({deps:e})=>{const{mountParams:t,coreStart:n,pluginsStart:a,storage:o,kibanaVersion:i}=e,{history:l,theme$:p}=t;return r.a.createElement(c.EuiErrorBoundary,null,r.a.createElement(d.I18nProvider,null,r.a.createElement(u.KibanaThemeProvider,{theme$:p},r.a.createElement(u.KibanaContextProvider,{services:{kibanaVersion:i,...n,...a,storage:o}},r.a.createElement(s.Router,{history:l},r.a.createElement(C,null))))))};E.displayName="App"}}]);