/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[47],{194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(94),o=n(1),s=r.__importDefault(n(195));t.default=function(e,t){var n=o.useState(t),r=n[0],c=n[1];return s.default((function(){var t=e.subscribe(c);return function(){return t.unsubscribe()}}),[e]),r}},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.default=o},262:function(e,t,n){"use strict";n.r(t),n.d(t,"renderApp",(function(){return m})),n.d(t,"App",(function(){return h})),n.d(t,"AppWithoutRouter",(function(){return _}));var r=n(1),o=n(79),s=n(93),c=n(76),u=n(194),i=n.n(u),j=n(17),d=n(86),a=n(4),l=n(2),b=n(39),f=n(43),p=n(3);const O=Object(r.lazy)((()=>Promise.all([n.e(0),n.e(44)]).then(n.bind(null,236)))),x=Object(r.lazy)((()=>Promise.all([n.e(5),n.e(25)]).then(n.bind(null,257)))),m=e=>{const{element:t}=e;return Object(s.render)(Object(p.jsx)(h,{deps:e}),t),()=>{Object(s.unmountComponentAtNode)(t)}},h=({deps:e})=>{const{dataViews:t,uiSettings:n,theme$:r}=e,s=i()(n.get$("theme:darkMode")),u=["rules","connectors","alerts","__components_sandbox"].join("|");return Object(b.d)(t),Object(p.jsx)(c.I18nProvider,null,Object(p.jsx)(d.EuiThemeProvider,{darkMode:s},Object(p.jsx)(j.KibanaThemeProvider,{theme$:r},Object(p.jsx)(f.a,{services:{...e}},Object(p.jsx)(o.Router,{history:e.history},Object(p.jsx)(_,{sectionsRegex:u}))))))},_=({sectionsRegex:e})=>Object(p.jsx)(o.Switch,null,Object(p.jsx)(o.Route,{path:`/:section(${e})`,component:Object(a.a)(O,"xl")}),Object(p.jsx)(o.Route,{path:l.q,component:Object(a.a)(x,"xl")}),Object(p.jsx)(o.Route,{exact:!0,path:l.k,render:({match:e})=>Object(p.jsx)(o.Redirect,{to:`/rule/${e.params.alertId}`})}),Object(p.jsx)(o.Redirect,{from:"/",to:"rules"}),Object(p.jsx)(o.Redirect,{from:"/alerts",to:"rules"}))}}]);