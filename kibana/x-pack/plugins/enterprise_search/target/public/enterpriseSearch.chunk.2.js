/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.enterpriseSearch_bundle_jsonpfunction=window.enterpriseSearch_bundle_jsonpfunction||[]).push([[2],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n(9),i=n.n(s),r=n(17),a=n(11),c=n(2),o=n(10);const u=({enterpriseSearchVersion:e,kibanaVersion:t})=>Object(o.jsx)(a.EuiEmptyPrompt,{iconType:"alert",iconColor:"danger",title:Object(o.jsx)("h2",null,c.i18n.translate("xpack.enterpriseSearch.versionMismatch.title",{defaultMessage:"Incompatible version error"})),titleSize:"l",body:Object(o.jsx)(i.a.Fragment,null,c.i18n.translate("xpack.enterpriseSearch.versionMismatch.body",{defaultMessage:"Your Kibana and Enterprise Search versions do not match. To access Enterprise Search, use the same major and minor version for each service."}),Object(o.jsx)(a.EuiSpacer,null),Object(o.jsx)("div",null,c.i18n.translate("xpack.enterpriseSearch.versionMismatch.enterpriseSearchVersionText",{defaultMessage:"Enterprise Search version: {enterpriseSearchVersion}",values:{enterpriseSearchVersion:e}})),Object(o.jsx)("div",null,c.i18n.translate("xpack.enterpriseSearch.versionMismatch.kibanaVersionText",{defaultMessage:"Kibana version: {kibanaVersion}",values:{kibanaVersion:t}})))}),l=e=>Object(o.jsx)(r.KibanaPageTemplate,{isEmptyState:!0},Object(o.jsx)(u,e))},106:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));const s=e=>e&&e.endsWith("/")?e.slice(0,-1):e,i=e=>e&&e.startsWith("/")?e.substring(1):e},174:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return h}));var s=n(9),i=n.n(s),r=n(24),a=n(11),c=n(35),o=n(2),u=n(12),l=n(4),d=n(10);const p=({productName:e,cloudDeploymentLink:t})=>Object(d.jsx)(a.EuiPageContent,null,Object(d.jsx)(a.EuiSteps,{headingElement:"h2",steps:[{title:o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step1.title",{defaultMessage:"Edit your deployment’s configuration"}),children:Object(d.jsx)(a.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(u.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step1.instruction1",defaultMessage:"Visit the Elastic Cloud console to {editDeploymentLink}.",values:{editDeploymentLink:t?Object(d.jsx)(a.EuiLink,{href:t+"/edit",target:"_blank"},o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step1.instruction1LinkText",{defaultMessage:"edit your deployment"})):o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step1.instruction1LinkText",{defaultMessage:"edit your deployment"})}})))},{title:o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step2.title",{defaultMessage:"Enable Enterprise Search for your deployment"}),children:Object(d.jsx)(a.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(u.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step2.instruction1",defaultMessage:"Once you're within your deployment's “Edit deployment” screen, scroll to the Enterprise Search configuration and select “Enable”."})))},{title:o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step3.title",{defaultMessage:"Configure your Enterprise Search instance"}),children:Object(d.jsx)(a.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(u.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step3.instruction1",defaultMessage:"After enabling Enterprise Search for your instance you can customize the instance, including fault tolerance, RAM, and other {optionsLink}.",values:{optionsLink:Object(d.jsx)(a.EuiLink,{href:l.a.enterpriseSearchConfig,target:"_blank"},o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step3.instruction1LinkText",{defaultMessage:"configurable options"}))}})))},{title:o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step4.title",{defaultMessage:"Save your deployment configuration"}),children:Object(d.jsx)(a.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(u.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step4.instruction1",defaultMessage:"Once you click “Save”, you'll see a confirmation dialog summarizing the changes being made to your deployment. Once you confirm, your deployment will process the configuration change, which should only take a few moments."})))},{title:o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step5.title",{defaultMessage:"{productName} is now available to use",values:{productName:e}}),children:Object(d.jsx)(a.EuiCallOut,null,Object(d.jsx)("p",null,Object(d.jsx)(u.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step5.instruction1",defaultMessage:"For {productName} indices that contain time-series statistical data, you may want to {configurePolicyLink}, so as to ensure optimal performance and cost-effective storage in the long run.",values:{productName:e,configurePolicyLink:Object(d.jsx)(a.EuiLink,{href:l.a.cloudIndexManagement,target:"_blank"},o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step5.instruction1LinkText",{defaultMessage:"configure an index lifecycle policy"}))}})))},{title:o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step6.title",{defaultMessage:"Troubleshooting issues"}),children:Object(d.jsx)(i.a.Fragment,null,Object(d.jsx)(a.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(u.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.cloud.step6.instruction1",defaultMessage:"For help with common setup issues, read our {link} guide.",values:{link:Object(d.jsx)(a.EuiLink,{href:l.a.enterpriseSearchTroubleshootSetup,target:"_blank",external:!0},o.i18n.translate("xpack.enterpriseSearch.setupGuide.cloud.step6.instruction1LinkText",{defaultMessage:"Troubleshoot Enterprise Search setup"}))}}))))}]})),h=o.i18n.translate("xpack.enterpriseSearch.setupGuide.title",{defaultMessage:"Setup Guide"}),b=({productName:e})=>Object(d.jsx)(a.EuiPageContent,null,Object(d.jsx)(a.EuiSteps,{headingElement:"h2",steps:[{title:o.i18n.translate("xpack.enterpriseSearch.setupGuide.step1.title",{defaultMessage:"Add your {productName} host URL to your Kibana configuration",values:{productName:e}}),children:Object(d.jsx)(a.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(u.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.step1.instruction1",defaultMessage:"In your {configFile} file, set {configSetting} to the URL of your {productName} instance. For example:",values:{productName:e,configFile:Object(d.jsx)(a.EuiCode,null,"config/kibana.yml"),configSetting:Object(d.jsx)(a.EuiCode,null,"enterpriseSearch.host")}})),Object(d.jsx)(a.EuiCodeBlock,{language:"yml"},"enterpriseSearch.host: 'http://localhost:3002'"))},{title:o.i18n.translate("xpack.enterpriseSearch.setupGuide.step2.title",{defaultMessage:"Reload your Kibana instance"}),children:Object(d.jsx)(a.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(u.FormattedMessage,{id:"xpack.enterpriseSearch.setupGuide.step2.instruction1",defaultMessage:"Restart Kibana to pick up the configuration changes from the previous step."})))},{title:o.i18n.translate("xpack.enterpriseSearch.setupGuide.step3.title",{defaultMessage:"Troubleshooting issues"}),children:Object(d.jsx)(i.a.Fragment,null,Object(d.jsx)(a.EuiAccordion,{buttonContent:o.i18n.translate("xpack.enterpriseSearch.troubleshooting.differentEsClusters.title",{defaultMessage:"{productName} and Kibana are on different Elasticsearch clusters",values:{productName:e}}),id:"differentEsClusters",paddingSize:"s"},Object(d.jsx)(a.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(u.FormattedMessage,{id:"xpack.enterpriseSearch.troubleshooting.differentEsClusters.description",defaultMessage:"This plugin does not currently support {productName} and Kibana running on different clusters.",values:{productName:e}})))),Object(d.jsx)(a.EuiSpacer,null),Object(d.jsx)(a.EuiText,null,Object(d.jsx)("p",null,Object(d.jsx)(u.FormattedMessage,{id:"xpack.enterpriseSearch.troubleshooting.setup.description",defaultMessage:"For help with other common setup issues, read our {link} guide.",values:{link:Object(d.jsx)(a.EuiLink,{href:l.a.enterpriseSearchTroubleshootSetup,target:"_blank",external:!0},o.i18n.translate("xpack.enterpriseSearch.troubleshooting.setup.documentationLinkLabel",{defaultMessage:"Troubleshoot Enterprise Search setup"}))}}))))}]}));n(301);const f=({children:e,productName:t,productEuiIcon:n})=>{const{cloud:s}=Object(r.useValues)(c.a),i=Boolean(s.isCloudEnabled),o=s.deploymentUrl||"";return Object(d.jsx)(a.EuiPage,{className:"setupGuide","data-test-subj":"setupGuide"},Object(d.jsx)(a.EuiPageSideBar,{className:"setupGuide__sidebar"},Object(d.jsx)(a.EuiText,{color:"subdued",size:"s"},Object(d.jsx)("strong",null,h)),Object(d.jsx)(a.EuiSpacer,{size:"s"}),Object(d.jsx)(a.EuiFlexGroup,{gutterSize:"s",alignItems:"center",responsive:!1},Object(d.jsx)(a.EuiFlexItem,{grow:!1},Object(d.jsx)(a.EuiIcon,{type:n,size:"l"})),Object(d.jsx)(a.EuiFlexItem,null,Object(d.jsx)(a.EuiTitle,{size:"m"},Object(d.jsx)("h1",null,t)))),e),Object(d.jsx)(a.EuiPageBody,{className:"setupGuide__body"},i?Object(d.jsx)(p,{productName:t,cloudDeploymentLink:o}):Object(d.jsx)(b,{productName:t})))}},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var s=n(9),i=n.n(s),r=n(24),a=n(11),c=n(2),o=n(12),u=n(30),l=n(35),d=n(34),p=(n(289),n(10)),h={name:"1yc9uo8",styles:"overflow-wrap:break-word"},b={name:"1flj9lk",styles:"text-align:left"};const f=()=>{const{errorConnectingMessage:e}=Object(r.useValues)(u.a),{config:t,cloud:n,setChromeIsVisible:c,history:f}=Object(r.useValues)(l.a),g=n.isCloudEnabled,j=f.location.pathname.includes("/p/");return Object(s.useEffect)((()=>{c(!j)}),[]),Object(p.jsx)(a.EuiEmptyPrompt,{iconType:"alert",iconColor:"danger",title:Object(p.jsx)("h2",null,Object(p.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.title",defaultMessage:"Unable to connect"})),titleSize:"l",body:Object(p.jsx)(i.a.Fragment,null,Object(p.jsx)("p",null,Object(p.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.description1",defaultMessage:"We can’t establish a connection to Enterprise Search at the host URL {enterpriseSearchUrl} due to the following error:",values:{enterpriseSearchUrl:Object(p.jsx)(a.EuiLink,{target:"_blank",href:t.host,css:h},t.host)}})),Object(p.jsx)(a.EuiCodeBlock,{css:b},e),g?x(n):m()),actions:[Object(p.jsx)(d.b,{iconType:"help",fill:!0,to:"/setup_guide"},Object(p.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.setupGuideCta",defaultMessage:"Review setup guide"}))]})},x=e=>{const t=null==e?void 0:e.deploymentUrl;return Object(p.jsx)("p",{"data-test-subj":"CloudError"},Object(p.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.cloudErrorMessage",defaultMessage:"Does your Cloud deployment have Enterprise Search nodes running? {deploymentSettingsLink}",values:{deploymentSettingsLink:Object(p.jsx)(a.EuiLink,{target:"_blank",href:`${t}/edit`},c.i18n.translate("xpack.enterpriseSearch.errorConnectingState.cloudErrorMessageLinkText",{defaultMessage:"Check your deployment settings"}))}}))},m=()=>Object(p.jsx)("ol",{className:"troubleshootingSteps","data-test-subj":"SelfManagedError"},Object(p.jsx)("li",null,Object(p.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.description2",defaultMessage:"Ensure the host URL is configured correctly in {configFile}.",values:{configFile:Object(p.jsx)(a.EuiCode,null,"config/kibana.yml")}})),Object(p.jsx)("li",null,Object(p.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.description3",defaultMessage:"Confirm that the Enterprise Search server is responsive."})),Object(p.jsx)("li",null,Object(p.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.troubleshootAuth",defaultMessage:"Check your user authentication:"}),Object(p.jsx)("ul",null,Object(p.jsx)("li",null,Object(p.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.troubleshootAuthNative",defaultMessage:"You must authenticate using Elasticsearch Native auth, SSO/SAML, or OpenID Connect."})),Object(p.jsx)("li",null,Object(p.jsx)(o.FormattedMessage,{id:"xpack.enterpriseSearch.errorConnectingState.troubleshootAuthSAML",defaultMessage:"If using an external SSO provider, such as SAML or OpenID Connect, your SAML/OIDC realm must also be set up on Enterprise Search."})))))},25:function(e,t,n){"use strict";var s,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function a(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},s=[],i=0;i<e.length;i++){var c=e[i],o=t.base?c[0]+t.base:c[0],u=n[o]||0,l="".concat(o," ").concat(u);n[o]=u+1;var d=a(l),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(r[d].references++,r[d].updater(p)):r.push({identifier:l,updater:f(p,t),references:1}),s.push(l)}return s}function o(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var r=n.nc;r&&(s.nonce=r)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,s){var i=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t,n){var s=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var h=null,b=0;function f(e,t){var n,s,i;if(t.singleton){var r=b++;n=h||(h=o(t)),s=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=o(t),s=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<n.length;s++){var i=a(n[s]);r[i].references--}for(var o=c(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=o}}}},26:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,s,i,r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var c=(n=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(i," */")),o=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[r].concat(o).concat([c]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,s){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(s)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var o=[].concat(e[c]);s&&i[o[0]]||(n&&(o[2]?o[2]="".concat(n," and ").concat(o[2]):o[2]=n),t.push(o))}},t}},289:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(290);case"v8light":return n(292)}},290:function(e,t,n){var s=n(25),i=n(291);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);s(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},291:function(e,t,n){(t=n(26)(!1)).push([e.i,".troubleshootingSteps{text-align:left}.troubleshootingSteps li{margin:8px auto}.troubleshootingSteps ul,.troubleshootingSteps ol{margin-bottom:0}\n",""]),e.exports=t},292:function(e,t,n){var s=n(25),i=n(293);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);s(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},293:function(e,t,n){(t=n(26)(!1)).push([e.i,".troubleshootingSteps{text-align:left}.troubleshootingSteps li{margin:8px auto}.troubleshootingSteps ul,.troubleshootingSteps ol{margin-bottom:0}\n",""]),e.exports=t},301:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(302);case"v8light":return n(304)}},302:function(e,t,n){var s=n(25),i=n(303);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);s(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},303:function(e,t,n){(t=n(26)(!1)).push([e.i,".setupGuide{padding:0;min-height:100vh}.setupGuide__sidebar{flex-basis:300px;flex-shrink:0;padding:24px;margin-right:0;background-color:#25262E;border-color:#343741;border-style:solid;border-width:0 0 1px 0}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{flex-basis:500px}}.setupGuide__body{align-self:start;padding:24px}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__body{padding:40px 50px}}.setupGuide__thumbnail{display:block;max-width:100%;height:auto;margin:24px auto}\n",""]),e.exports=t},304:function(e,t,n){var s=n(25),i=n(305);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);s(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},305:function(e,t,n){(t=n(26)(!1)).push([e.i,".setupGuide{padding:0;min-height:100vh}.setupGuide__sidebar{flex-basis:300px;flex-shrink:0;padding:24px;margin-right:0;background-color:#F5F7FA;border-color:#D3DAE6;border-style:solid;border-width:0 0 1px 0}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{border-width:0 1px 0 0}}@media only screen and (min-width: 768px) and (max-width: 991px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__sidebar{flex-basis:400px}}@media only screen and (min-width: 1200px){.setupGuide__sidebar{flex-basis:500px}}.setupGuide__body{align-self:start;padding:24px}@media only screen and (min-width: 992px) and (max-width: 1199px){.setupGuide__body{padding:40px 50px}}.setupGuide__thumbnail{display:block;max-width:100%;height:auto;margin:24px auto}\n",""]),e.exports=t},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return h}));var s=n(24);const i=Object(s.kea)({path:["enterprise_search","licensing_logic"],actions:{setLicense:e=>e,setLicenseSubscription:e=>e},reducers:({props:e})=>({license:[null,{setLicense:(e,t)=>t}],licenseSubscription:[null,{setLicenseSubscription:(e,t)=>t}],canManageLicense:[e.canManageLicense||!1,{}]}),selectors:{hasPlatinumLicense:[e=>[e.license],e=>(null==e?void 0:e.isActive)&&["platinum","enterprise","trial"].includes(null==e?void 0:e.type)],hasGoldLicense:[e=>[e.license],e=>(null==e?void 0:e.isActive)&&["gold","platinum","enterprise","trial"].includes(null==e?void 0:e.type)],isTrial:[e=>[e.license],e=>(null==e?void 0:e.isActive)&&"trial"===(null==e?void 0:e.type)]},events:({props:e,actions:t,values:n})=>({afterMount:()=>{const n=e.license$.subscribe((async e=>{t.setLicense(e)}));t.setLicenseSubscription(n)},beforeUnmount:()=>{n.licenseSubscription&&n.licenseSubscription.unsubscribe()}})}),r=e=>(i(e),i.mount());var a=n(36),c=n.n(a),o=(n(9),n(11)),u=n(2),l=n(4),d=n(34),p=n(10);const h=e=>{const{canManageLicense:t}=Object(s.useValues)(i);return t?Object(p.jsx)(d.b,c()({},e,{to:"/app/management/stack/license_management",shouldNotCreateHref:!0}),u.i18n.translate("xpack.enterpriseSearch.licenseManagementLink",{defaultMessage:"Manage your license"})):Object(p.jsx)(o.EuiButton,c()({},e,{target:"_blank",iconType:"popout",href:l.a.licenseManagement}),u.i18n.translate("xpack.enterpriseSearch.licenseDocumentationLink",{defaultMessage:"Learn more about license features"}))}},42:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l}));var s=n(24),i=n(1),r=n(30);const a=Object(s.kea)({path:["enterprise_search","telemetry_logic"],actions:{sendTelemetry:({action:e,metric:t,product:n})=>({action:e,metric:t,product:n}),sendEnterpriseSearchTelemetry:({action:e,metric:t})=>({action:e,metric:t}),sendAppSearchTelemetry:({action:e,metric:t})=>({action:e,metric:t}),sendWorkplaceSearchTelemetry:({action:e,metric:t})=>({action:e,metric:t})},listeners:({actions:e})=>({sendTelemetry:async({action:e,metric:t,product:n})=>{const{http:s}=r.a.values;try{const r=JSON.stringify({product:n,action:e,metric:t});await s.put("/internal/enterprise_search/stats",{headers:i.g,body:r})}catch(e){throw new Error("Unable to send telemetry")}},sendEnterpriseSearchTelemetry:({action:t,metric:n})=>e.sendTelemetry({action:t,metric:n,product:"enterprise_search"}),sendAppSearchTelemetry:({action:t,metric:n})=>e.sendTelemetry({action:t,metric:n,product:"app_search"}),sendWorkplaceSearchTelemetry:({action:t,metric:n})=>e.sendTelemetry({action:t,metric:n,product:"workplace_search"})})});var c=n(9);const o=({action:e,metric:t})=>{const{sendTelemetry:n}=Object(s.useActions)(a);return Object(c.useEffect)((()=>{n({action:e,metric:t,product:"enterprise_search"})}),[e,t]),null},u=({action:e,metric:t})=>{const{sendTelemetry:n}=Object(s.useActions)(a);return Object(c.useEffect)((()=>{n({action:e,metric:t,product:"app_search"})}),[e,t]),null},l=({action:e,metric:t})=>{const{sendTelemetry:n}=Object(s.useActions)(a);return Object(c.useEffect)((()=>{n({action:e,metric:t,product:"workplace_search"})}),[e,t]),null}},55:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return x}));var s=n(9),i=n(24),r=n(35),a=n(1),c=n(106),o=n(30),u=n(34);const l=e=>{const{history:t}=Object(i.useValues)(r.a),n=Object(c.a)(t.location.pathname).split("/");return e.map(((e,t)=>({text:e,path:n[t]?"/"+n.slice(0,t+1).join("/"):void 0})))},d=(e=[])=>(e=>{const{navigateToUrl:t,history:n}=Object(i.useValues)(r.a),{http:s}=Object(i.useValues)(o.a);return e.map((({text:i,path:r,shouldNotCreateHref:a},c)=>{const o={text:i},l=c===e.length-1;return r&&!l&&(o.href=Object(u.g)(r,{history:n,http:s},{shouldNotCreateHref:a}),o.onClick=e=>{Object(u.i)(e)||(e.preventDefault(),t(r,{shouldNotCreateHref:a}))}),o}))})([{text:a.d.NAME,path:a.d.URL,shouldNotCreateHref:!0},...e]),p=e=>e.join(" - "),h=({trail:e=[]})=>{const{setBreadcrumbs:t,setDocTitle:n}=Object(i.useValues)(r.a),c=((e=[])=>p([...e,a.d.NAME]))(m(e)),o=l(e),u=d(o);return Object(s.useEffect)((()=>{t(u),n(c)}),[e]),null},b=({trail:e=[]})=>{const{setBreadcrumbs:t,setDocTitle:n}=Object(i.useValues)(r.a),a=((e=[])=>p([...e,"Getting started with Elasticsearch"]))(m(e)),c=((e=[])=>d([{text:"Getting started with Elasticsearch",path:"/"},...e]))(l(e));return Object(s.useEffect)((()=>{t(c),n(a)}),[e]),null},f=({trail:e=[]})=>{const{setBreadcrumbs:t,setDocTitle:n}=Object(i.useValues)(r.a),c=((e=[])=>p([...e,a.a.NAME]))(m(e)),o=((e=[])=>d([{text:a.a.NAME,path:"/"},...e]))(l(e));return Object(s.useEffect)((()=>{t(o),n(c)}),[e]),null},x=({trail:e=[]})=>{const{setBreadcrumbs:t,setDocTitle:n}=Object(i.useValues)(r.a),c=((e=[])=>p([...e,a.j.NAME]))(m(e)),o=((e=[])=>d([{text:a.j.NAME,path:"/"},...e]))(l(e));return Object(s.useEffect)((()=>{t(o),n(c)}),[e]),null},m=e=>e.slice().reverse()},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));const s=(e,t)=>{if(!e||!t)return!1;const[n,s]=e.split("."),[i,r]=t.split(".");return n!==i||s!==r}}}]);