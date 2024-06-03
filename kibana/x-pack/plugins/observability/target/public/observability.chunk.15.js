/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.observability_bundle_jsonpfunction=window.observability_bundle_jsonpfunction||[]).push([[15],{168:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return y}));var a=l(0),i=l.n(a),s=l(2),r=l(7),n=l(97),u=l(26),c=l.n(u),o=l(10),d=l(49),p=l(100),b=l(110),m=l(96),E=l(103);function y(e){var t,l,a,u;const{observabilityRuleTypeRegistry:y}=Object(m.a)(),v=e.alert.start?e.alert:Object(E.a)(y)(e.alert),{services:F}=Object(o.useKibana)(),{http:f}=F,j=Object(o.useUiSetting)("dateFormat"),L=null==f?void 0:f.basePath.prepend,T=null!==(t=Object(s.get)(e.alert,"kibana.alert.rule.uuid"))&&void 0!==t?t:null,z=T&&L?L(p.b.management.ruleDetails(T)):null,D=[{title:p.c.alertsFlyout.statusLabel,description:i.a.createElement(b.a,{alertStatus:v.active?n.L:n.M})},{title:p.c.alertsFlyout.lastUpdatedLabel,description:i.a.createElement("span",{title:v.start.toString()},c()(v.start).format(j))},{title:p.c.alertsFlyout.durationLabel,description:Object(d.a)(v.fields[n.b],{extended:!0})},{title:p.c.alertsFlyout.expectedValueLabel,description:null!==(l=v.fields[n.d])&&void 0!==l?l:"-"},{title:p.c.alertsFlyout.actualValueLabel,description:null!==(a=v.fields[n.e])&&void 0!==a?a:"-"},{title:p.c.alertsFlyout.ruleTypeLabel,description:null!==(u=v.fields[n.j])&&void 0!==u?u:"-"}];return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.EuiTitle,{size:"xs"},i.a.createElement("h4",null,p.c.alertsFlyout.reasonTitle)),i.a.createElement(r.EuiSpacer,{size:"s"}),i.a.createElement(r.EuiText,{size:"s"},v.reason),i.a.createElement(r.EuiSpacer,{size:"s"}),!!z&&i.a.createElement(r.EuiLink,{href:z,"data-test-subj":"viewRuleDetailsFlyout"},p.c.alertsFlyout.viewRulesDetailsLinkText),i.a.createElement(r.EuiHorizontalRule,{size:"full"}),i.a.createElement(r.EuiTitle,{size:"xs"},i.a.createElement("h4",null,p.c.alertsFlyout.documentSummaryTitle)),i.a.createElement(r.EuiSpacer,{size:"m"}),i.a.createElement(r.EuiDescriptionList,{compressed:!0,type:"responsiveColumn",listItems:D,titleProps:{"data-test-subj":"alertsFlyoutDescriptionListTitle"},descriptionProps:{"data-test-subj":"alertsFlyoutDescriptionListDescription"}}))}}}]);