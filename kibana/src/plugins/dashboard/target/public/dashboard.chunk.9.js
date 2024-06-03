(window.dashboard_bundle_jsonpfunction=window.dashboard_bundle_jsonpfunction||[]).push([[9],{233:function(t,n,e){"use strict";e.r(n),e.d(n,"AnalyticsNoDataPage",(function(){return D}));var a=e(8),r=e.n(a),o=e(81),i=e(78),u=e(0),c=e(72),s=(e(96),r.a.lazy((function(){return Promise.resolve().then(e.bind(null,96)).then((function(t){return{default:t.ToolbarButton}}))}))),d=(Object(c.c)(s),r.a.lazy((function(){return Promise.resolve().then(e.bind(null,96)).then((function(t){return{default:t.IconButtonGroup}}))}))),l=(Object(c.c)(d),r.a.lazy((function(){return Promise.all([e.e(1),e.e(8)]).then(e.bind(null,234)).then((function(t){return{default:t.KibanaNoDataPage}}))}))),b=Object(c.c)(l),f=r.a.lazy((function(){return e.e(1).then(e.bind(null,228)).then((function(t){return{default:t.KibanaPageTemplate}}))})),p=(Object(c.c)(f),e(2)),h=u.i18n.translate("sharedUXPackages.noDataConfig.analytics",{defaultMessage:"Analytics"}),m=u.i18n.translate("sharedUXPackages.noDataConfig.analyticsPageTitle",{defaultMessage:"Welcome to Analytics!"}),g=u.i18n.translate("sharedUXPackages.noDataConfig.addIntegrationsTitle",{defaultMessage:"Add integrations"}),v=u.i18n.translate("sharedUXPackages.noDataConfig.addIntegrationsDescription",{defaultMessage:"Use Elastic Agent to collect data and build out Analytics solutions."}),j=function(t){var n=t.kibanaGuideDocLink,e=t.onDataViewCreated,a={solution:h,pageTitle:m,logo:"logoKibana",action:{elasticAgent:{title:g,description:v,"data-test-subj":"kbnOverviewAddIntegrations"}},docsLink:n};return Object(p.jsx)(b,{noDataConfig:a,onDataViewCreated:e})},D=function(t){var n=t.onDataViewCreated,e=Object(i.b)(),a=e.kibanaGuideDocLink;return Object(p.jsx)(o.a,function(t){return{application:{currentAppId$:t.currentAppId$,navigateToUrl:t.navigateToUrl},data:{hasESData:t.hasESData,hasDataView:t.hasDataView,hasUserDataView:t.hasUserDataView},docLinks:{dataViewsDocLink:t.dataViewsDocLink},editors:{openDataViewEditor:t.openDataViewEditor},http:{addBasePath:t.addBasePath},permissions:{canAccessFleet:t.canAccessFleet,canCreateNewDataView:t.canCreateNewDataView},platform:{setIsFullscreen:t.setIsFullscreen}}}(e),Object(p.jsx)(j,{onDataViewCreated:n,kibanaGuideDocLink:a}))}},81:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return h})),e.d(n,"d",(function(){return f})),e.d(n,"e",(function(){return b})),e.d(n,"f",(function(){return p})),e.d(n,"g",(function(){return l})),e.d(n,"c",(function(){return m}));var a=e(64),r=e.n(a),o=e(8),i=e(2),u=["children"],c=Object(o.createContext)(null),s=function(t){var n=t.children,e=r()(t,u);return Object(i.jsx)(c.Provider,{value:e},n)};function d(){var t=Object(o.useContext)(c);if(!t)throw new Error("SharedUxServicesContext missing.  Ensure your component or React root is wrapped with SharedUxServicesProvider.");return t}var l=function(){return d().permissions},b=function(){return d().editors},f=function(){return d().docLinks},p=function(){return d().http},h=function(){return d().application},m=function(){return d().data};e(30)},96:function(t,n,e){"use strict";e.r(n),e.d(n,"ToolbarButton",(function(){return f})),e.d(n,"IconButtonGroup",(function(){return h})),e.d(n,"AddFromLibraryButton",(function(){return v})),e.d(n,"ToolbarPopover",(function(){return y}));var a=e(28),r=e.n(a),o=e(65),i=e.n(o),u=e(64),c=e.n(u),s=e(8),d=e(5),l=e(2),b=["label","iconSide"],f=function(t){var n=t.label,e=t.iconSide,a=void 0===e?"left":e,o=c()(t,b);return Object(l.jsx)(d.EuiButton,r()({size:"m",color:"primary",fill:!0},i()({iconSide:a},o)),n)},p=["label","title"],h=function(t){var n=t.buttons,e=t.legend,a=function(t){var n=t.euiTheme;return{button:{"&.euiButtonGroupButton":{backgroundColor:n.colors.emptyShade,border:"".concat(n.border.thin," !important"),"&:first-of-type":{borderTopLeftRadius:"".concat(n.border.radius.medium," !important"),borderBottomLeftRadius:"".concat(n.border.radius.medium," !important")},"&:last-of-type":{borderTopRightRadius:"".concat(n.border.radius.medium," !important"),borderBottomRightRadius:"".concat(n.border.radius.medium," !important")}}}}}(Object(d.useEuiTheme)()),r=n.map((function(t,n){var e=t.label,r=t.title,o=void 0===r?e:r,u=c()(t,p);return i()(i()({},u),{},{"aria-label":null!=o?o:e,id:"".concat(Object(d.htmlIdGenerator)()()).concat(n),label:e,title:o,css:[a.button]})}));return Object(l.jsx)(d.EuiButtonGroup,{buttonSize:"m",legend:e,options:r,onChange:function(t){var n;null===(n=r.find((function(n){return n.id===t})))||void 0===n||n.onClick()},type:"multi",isIconOnly:!0})},m=e(0),g=["onClick"],v=function(t){t.onClick;var n=c()(t,g);return Object(l.jsx)(f,r()({},n,{iconType:"folderOpen",label:m.i18n.translate("sharedUXComponents.toolbar.buttons.addFromLibrary.libraryButtonLabel",{defaultMessage:"Add from library"})}))},j=e(69),D=e.n(j),w=["label","iconType","children","iconSide"],y=function(t){var n=t.label,e=t.iconType,a=t.children,o=t.iconSide,i=c()(t,w),u=Object(s.useState)(!1),b=D()(u,2),p=b[0],h=b[1],m=function(){return h(!1)},g=Object(l.jsx)(f,{onClick:function(){return h((function(t){return!t}))},label:n,iconSide:o,iconType:e});return Object(l.jsx)(d.EuiPopover,r()({isOpen:p,button:g,closePopover:m},i),a({closePopover:m}))}}}]);