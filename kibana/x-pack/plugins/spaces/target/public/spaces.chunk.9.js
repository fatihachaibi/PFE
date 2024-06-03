/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.spaces_bundle_jsonpfunction=window.spaces_bundle_jsonpfunction||[]).push([[9],{119:function(t,e,o){"use strict";o.r(e),o.d(e,"LegacyUrlConflictInternal",(function(){return d}));var a=o(2),c=o(1),s=o(16),n=o.n(s),i=o(14),l=o(3),r=o(11),u=o(12),j=o(0);const d=t=>{const{getStartServices:e,objectNoun:o=u.a,currentObjectId:s,otherObjectId:d,otherObjectPath:p}=t,[b,g]=Object(c.useState)(!1),{value:x}=n()((async()=>{const[{application:t,docLinks:o}]=await e(),a=await t.currentAppId$.pipe(Object(i.first)()).toPromise();return{applicationStart:t,appId:a,docLink:o.links.spaces.kibanaLegacyUrlAliases}}),[e]),{docLink:h,applicationStart:f,appId:O}=null!=x?x:{};return f&&O&&h&&!b?Object(j.jsx)(a.EuiCallOut,{color:"warning",iconType:"help",title:Object(j.jsx)(r.FormattedMessage,{id:"xpack.spaces.legacyUrlConflict.calloutTitle",defaultMessage:"2 saved objects use this URL"})},Object(j.jsx)(r.FormattedMessage,{id:"xpack.spaces.legacyUrlConflict.calloutBodyText",defaultMessage:"Check that this is the {objectNoun} that you are looking for. Otherwise, go to the other one. {documentationLink}",values:{objectNoun:o,documentationLink:Object(j.jsx)(a.EuiLink,{external:!0,href:h,target:"_blank"},l.i18n.translate("xpack.spaces.legacyUrlConflict.documentationLinkText",{defaultMessage:"Learn more"}))}}),Object(j.jsx)(a.EuiSpacer,{size:"m"}),Object(j.jsx)(a.EuiFlexGroup,{gutterSize:"s",alignItems:"center"},Object(j.jsx)(a.EuiFlexItem,{grow:!1},Object(j.jsx)(a.EuiToolTip,{position:"bottom",delay:"long",content:l.i18n.translate("xpack.spaces.legacyURLConflict.toolTipText",{defaultMessage:"This {objectNoun} has [id={currentObjectId}]. The other {objectNoun} has [id={otherObjectId}].",values:{objectNoun:o,currentObjectId:s,otherObjectId:d}})},Object(j.jsx)(a.EuiButton,{color:"warning",size:"s",onClick:function(){f.navigateToApp(O,{path:p})},"data-test-subj":"legacy-url-conflict-go-to-other-button"},Object(j.jsx)(r.FormattedMessage,{id:"xpack.spaces.legacyUrlConflict.linkButton",defaultMessage:"Go to other {objectNoun}",values:{objectNoun:o}})))),Object(j.jsx)(a.EuiFlexItem,{grow:!1},Object(j.jsx)(a.EuiButtonEmpty,{color:"warning",size:"s",onClick:function(){g(!0)},"data-test-subj":"legacy-url-conflict-dismiss-button"},Object(j.jsx)(r.FormattedMessage,{id:"xpack.spaces.legacyUrlConflict.dismissButton",defaultMessage:"Dismiss"}))))):null}}}]);