/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.fleet_bundle_jsonpfunction=window.fleet_bundle_jsonpfunction||[]).push([[5],{302:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(62),o=a(4),r=a(6),s=a(10),c=a(2),u=a(1);const g=Object(n.memo)((({moduleName:e})=>{const{getHref:t}=Object(s.Ib)(),{application:a}=Object(s.Qb)(),n=a.capabilities.navLinks.integrations,{data:g,isLoading:d}=Object(s.Ab)(),m=!d&&(null==g?void 0:g.response)&&g.response.find((t=>t.name===e&&t.name!==u.J));return n&&m?i.a.createElement(i.a.Fragment,null,i.a.createElement(r.EuiSpacer,null),i.a.createElement(r.EuiText,null,i.a.createElement("p",null,i.a.createElement(l.FormattedMessage,{id:"xpack.fleet.homeIntegration.tutorialModule.noticeText",defaultMessage:"{notePrefix} A newer version of this module is {availableAsIntegrationLink}. To learn more about integrations and the new Elastic Agent, read our {blogPostLink}.",values:{notePrefix:i.a.createElement(r.EuiIcon,{type:"iInCircle",style:{verticalAlign:"baseline"},"aria-label":o.i18n.translate("xpack.fleet.homeIntegration.tutorialModule.noticeText.notePrefix",{defaultMessage:"Note"})}),availableAsIntegrationLink:i.a.createElement(r.EuiLink,{href:t("integration_details_overview",{pkgkey:Object(c.v)(m)})},i.a.createElement(l.FormattedMessage,{id:"xpack.fleet.homeIntegration.tutorialModule.noticeText.integrationLink",defaultMessage:"available as an Elastic Agent integration"})),blogPostLink:i.a.createElement(r.EuiLink,{href:"https://ela.st/elastic-agent-ga-announcement",external:!0,target:"_blank"},i.a.createElement(l.FormattedMessage,{id:"xpack.fleet.homeIntegration.tutorialModule.noticeText.blogPostLink",defaultMessage:"announcement blog post"}))}})))):null}));t.default=g}}]);