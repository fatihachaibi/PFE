/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.securitySolution_bundle_jsonpfunction=window.securitySolution_bundle_jsonpfunction||[]).push([[25],{1380:function(e,t,a){"use strict";a.r(t),a.d(t,"BLOCKLISTS_LABELS",(function(){return z})),a.d(t,"HOST_ISOLATION_EXCEPTIONS_LABELS",(function(){return N})),a.d(t,"EVENT_FILTERS_LABELS",(function(){return P})),a.d(t,"TRUSTED_APPS_LABELS",(function(){return _})),a.d(t,"EndpointPolicyEditExtension",(function(){return G}));var n=a(5),i=a.n(n),r=a(16),l=a(4),s=a(165),o=a(42),c=a(91),u=a(206),d=a(796),m=a(230),p=a(247),g=a(224),E=a(173),f=a(176),y=a(18),S=a(586),b=a(587),I=a(588),x=a(260),h=a(198);const M={artifactsSummaryApiError:e=>l.i18n.translate("xpack.securitySolution.endpoint.fleetIntegrationCard.artifactsSummary.error",{defaultMessage:'There was an error trying to fetch artifacts stats: "{error}"',values:{error:e}}),cardTitle:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.fleetIntegrationCard.title",defaultMessage:"Artifacts"}),linkLabel:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.fleetIntegrationCard.artifactsManageLabel",defaultMessage:"Manage artifacts"})},k=Object(n.memo)((({policyId:e,artifactApiClientInstance:t,getArtifactsPath:a,searchableFields:s,labels:o=M,privileges:c=!0,"data-test-subj":u})=>{const d=Object(y.n)(),{getAppUrl:m}=Object(y.d)(),p=a(e),g=Object(h.a)(u),{data:k}=Object(x.f)(t,{policies:[e,"all"]},s,{onError:e=>d.addDanger(o.artifactsSummaryApiError(e.message))}),F=Object(n.useMemo)((()=>{const t=`#${f.pagePathGetters.integration_policy_edit({packagePolicyId:e})[1]}`;return{backLink:{label:l.i18n.translate("xpack.securitySolution.endpoint.fleetIntegrationCard.artifacts.backButtonLabel",{defaultMessage:"Back to Fleet integration policy"}),navigateTo:[E.INTEGRATIONS_PLUGIN_ID,{path:t}],href:m({appId:E.INTEGRATIONS_PLUGIN_ID,path:t})}}}),[m,e]),j=Object(n.useMemo)((()=>i.a.createElement(b.a,{href:m({path:p}),appPath:p,appState:F,"data-test-subj":g("link-to-exceptions"),size:"m"},o.linkLabel)),[m,g,o.linkLabel,p,F]);return void 0===k&&!c||0===(null==k?void 0:k.total)&&!c?null:i.a.createElement(r.EuiPanel,{hasShadow:!1,paddingSize:"l",hasBorder:!0,"data-test-subj":g("fleet-integration-card")},i.a.createElement(r.EuiFlexGroup,{alignItems:"baseline",justifyContent:"flexStart",gutterSize:"s",direction:"row",responsive:!1},i.a.createElement(r.EuiFlexItem,{grow:!1},i.a.createElement(r.EuiText,null,i.a.createElement("h5",null,o.cardTitle))),i.a.createElement(r.EuiFlexItem,{grow:!1},i.a.createElement(S.a,{stats:k,isSmall:!0})),i.a.createElement(I.c,{grow:1},j)))}));k.displayName="FleetIntegrationArtifactsCard";var F=a(485),j=a(334),C=a(416),v=a(388),O=a(421),w=a(367),A=a(379),L=a(389),T=a(425);const z={artifactsSummaryApiError:e=>l.i18n.translate("xpack.securitySolution.endpoint.fleetIntegrationCard.blocklistsSummary.error",{defaultMessage:'There was an error trying to fetch blocklists stats: "{error}"',values:{error:e}}),cardTitle:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.blocklist.fleetIntegration.title",defaultMessage:"Blocklist"}),linkLabel:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.fleetIntegrationCard.blocklistsManageLabel",defaultMessage:"Manage blocklist"})},N={artifactsSummaryApiError:e=>l.i18n.translate("xpack.securitySolution.endpoint.fleetIntegrationCard.hostIsolationExceptionsSummary.error",{defaultMessage:'There was an error trying to fetch host isolation exceptions stats: "{error}"',values:{error:e}}),cardTitle:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.hostIsolationExceptions.fleetIntegration.title",defaultMessage:"Host isolation exceptions"}),linkLabel:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.fleetIntegrationCard.hostIsolationExceptionsManageLabel",defaultMessage:"Manage host isolation exceptions"})},P={artifactsSummaryApiError:e=>l.i18n.translate("xpack.securitySolution.endpoint.fleetIntegrationCard.eventFiltersSummarySummary.error",{defaultMessage:'There was an error trying to fetch event filters stats: "{error}"',values:{error:e}}),cardTitle:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.eventFilters.fleetIntegration.title",defaultMessage:"Event filters"}),linkLabel:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.fleetIntegrationCard.eventFiltersManageLabel",defaultMessage:"Manage event filters"})},_={artifactsSummaryApiError:e=>l.i18n.translate("xpack.securitySolution.endpoint.fleetIntegrationCard.trustedAppsSummarySummary.error",{defaultMessage:'There was an error trying to fetch trusted apps stats: "{error}"',values:{error:e}}),cardTitle:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.trustedApps.fleetIntegration.title",defaultMessage:"Trusted applications"}),linkLabel:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.fleetIntegrationCard.trustedAppsManageLabel",defaultMessage:"Manage trusted applications"})},G=Object(n.memo)((({policy:e,onChange:t})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(r.EuiSpacer,{size:"m"}),i.a.createElement(B,{policyId:e.id,onChange:t}))));G.displayName="EndpointPolicyEditExtension";const B=Object(n.memo)((({policyId:e,onChange:t})=>{const a=Object(o.useDispatch)(),l=Object(m.c)(p.m),E=Object(m.c)(p.l),f=Object(m.c)(p.b),[,y]=Object(n.useState)(l),S=Object(g.a)().endpointPrivileges,b=Object(c.g)(),I=Object(n.useMemo)((()=>F.a.getInstance(b)),[b]),{canAccessEndpointManagement:x}=Object(T.b)(),h=Object(n.useMemo)((()=>j.a.getInstance(b)),[b]),M=Object(n.useMemo)((()=>C.a.getInstance(b)),[b]),G=Object(n.useMemo)((()=>v.a.getInstance(b)),[b]);Object(n.useEffect)((()=>(a({type:"userChangedUrl",payload:{hash:"",pathname:Object(u.j)(e,""),search:""}}),()=>{a({type:"userChangedUrl",payload:{hash:"",pathname:"/",search:""}})})),[a,e]),Object(n.useEffect)((()=>{y((e=>e===l?e:(l&&t({isValid:!0,updatedPolicy:{inputs:l.inputs}}),l)))}),[t,l]);const B=Object(n.useMemo)((()=>i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(r.EuiText,null,i.a.createElement("h5",null,i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.policyDetails.artifacts.title",defaultMessage:"Artifacts"}))),i.a.createElement(r.EuiSpacer,{size:"s"}),i.a.createElement(k,{policyId:e,artifactApiClientInstance:G,getArtifactsPath:u.n,searchableFields:L.a,labels:_,"data-test-subj":"trustedApps"}),i.a.createElement(r.EuiSpacer,{size:"s"}),i.a.createElement(k,{policyId:e,artifactApiClientInstance:M,getArtifactsPath:u.l,searchableFields:A.d,labels:P,"data-test-subj":"eventFilters"}),i.a.createElement(r.EuiSpacer,{size:"s"}),i.a.createElement(k,{policyId:e,artifactApiClientInstance:h,getArtifactsPath:u.m,searchableFields:w.b,labels:N,privileges:S.canIsolateHost,"data-test-subj":"hostIsolationExceptions"}),i.a.createElement(r.EuiSpacer,{size:"s"}),i.a.createElement(k,{policyId:e,artifactApiClientInstance:I,getArtifactsPath:u.i,searchableFields:O.b,labels:z,"data-test-subj":"blocklists"})),i.a.createElement(r.EuiSpacer,{size:"l"}))),[I,M,h,e,S.canIsolateHost,G]);return i.a.createElement("div",{"data-test-subj":"endpointIntegrationPolicyForm"},i.a.createElement(i.a.Fragment,null,x&&B,i.a.createElement("div",null,i.a.createElement(r.EuiText,null,i.a.createElement("h5",null,i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.policyDetails.settings.title",defaultMessage:"Policy settings"}))),i.a.createElement(r.EuiSpacer,{size:"s"}),f?i.a.createElement(r.EuiCallOut,{title:i.a.createElement(s.FormattedMessage,{id:"xpack.securitySolution.endpoint.policyDetails.loadError",defaultMessage:"Failed to load endpoint policy settings"}),iconType:"alert",color:"warning","data-test-subj":"endpiontPolicySettingsLoadingError"},f.message):E?i.a.createElement(d.a,null):i.a.createElement(r.EuiLoadingSpinner,{size:"l",className:"essentialAnimation"}))))}));B.displayName="WrappedPolicyDetailsForm"},586:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(5),i=a.n(n),r=a(16),l=a(4),s=a(23),o=a.n(s);const c=["windows","macos","linux","total"],u={windows:l.i18n.translate("xpack.securitySolution.endpoint.fleetCustomExtension.exceptionItemsSummary.windows",{defaultMessage:"Windows"}),linux:l.i18n.translate("xpack.securitySolution.endpoint.fleetCustomExtension.exceptionItemsSummary.linux",{defaultMessage:"Linux"}),macos:l.i18n.translate("xpack.securitySolution.endpoint.fleetCustomExtension.exceptionItemsSummary.macos",{defaultMessage:"Mac"}),total:l.i18n.translate("xpack.securitySolution.endpoint.fleetCustomExtension.exceptionItemsSummary.total",{defaultMessage:"Total"})},d=(o()(r.EuiFlexGroup).withConfig({displayName:"StyledEuiFlexGridGroup",componentId:"sc-1pq2evz-0"})(["display:grid;min-width:240px;grid-template-columns:50% 50%;"]),o()(r.EuiFlexGroup).withConfig({displayName:"StyledEuiFlexGroup",componentId:"sc-1pq2evz-1"})(["font-size:",";font-weight:",";"],(({isSmall:e,theme:t})=>e?t.eui.euiFontSizeXS:"inherit"),(({isSmall:e})=>e?"1px":"inherit"))),m={fontWeight:"bold"},p=Object(n.memo)((({stats:e,isSmall:t=!1})=>{const a=Object(n.useCallback)((a=>{var n;return"total"!==a&&t?null:i.a.createElement(r.EuiFlexItem,{key:a},i.a.createElement(g,{value:null!==(n=null==e?void 0:e[a])&&void 0!==n?n:0,color:"total"!==a||t?"default":"primary",key:a,isSmall:t},u[a]))}),[e,t]);return i.a.createElement(r.EuiFlexGroup,{alignItems:"center",justifyContent:t?"flexStart":"spaceAround",gutterSize:t?"s":"l"},c.map((e=>a(e))))}));p.displayName="ExceptionItemsSummary";const g=Object(n.memo)((({children:e,value:t,color:a,isSmall:n=!1,...l})=>i.a.createElement(r.EuiText,{className:"eui-displayInlineBlock",size:n?"xs":"s"},i.a.createElement(d,{justifyContent:n?"flexStart":"center",direction:n?"rowReverse":"row",alignItems:"center",gutterSize:n?"xs":"l",isSmall:n},n?null:i.a.createElement(r.EuiFlexItem,{grow:!1,style:"primary"===a?m:void 0},e),i.a.createElement(r.EuiFlexItem,{grow:!1},i.a.createElement(r.EuiBadge,{color:a},t))))));g.displayName="SummaryState"},587:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(23),i=a.n(n),r=a(5),l=a.n(r),s=a(16),o=a(316);const c=i.a.span.withConfig({displayName:"LinkLabel",componentId:"sc-1ril6c5-0"})(["display:inline-block;padding-right:",";font-size:",";"],(e=>e.theme.eui.paddingSizes.s),(({size:e,theme:t})=>"m"===e?t.eui.euiFontSizeXS:"innherit")),u=Object(r.memo)((({children:e,size:t="l",...a})=>l.a.createElement(o.a,a,l.a.createElement(c,{size:t},e),l.a.createElement(s.EuiIcon,{type:"m"===t?"arrowRight":"popout"}))));u.displayName="LinkWithIcon"},588:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return o}));var n=a(23),i=a.n(n),r=a(16);const l=i()(r.EuiFlexGroup).withConfig({displayName:"StyledEuiFlexGridGroup",componentId:"sc-iti06b-0"})(["display:grid;grid-template-columns:33% 45% 22%;grid-template-areas:'title summary link';"]),s=i()(r.EuiFlexItem).withConfig({displayName:"StyledEuiFlexGridItem",componentId:"sc-iti06b-1"})(["grid-area:",";align-items:",";margin:0px;padding:12px;"],(({gridarea:e})=>e),(({alignitems:e})=>null!=e?e:"center")),o=i()(r.EuiFlexItem).withConfig({displayName:"StyledEuiFlexItem",componentId:"sc-iti06b-2"})(["flex-direction:row-reverse;"])}}]);