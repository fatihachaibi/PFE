!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=12)}([function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t,s){e.exports=s(7)(2)},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,s){"use strict";s.d(t,"a",(function(){return opt_in_example_flyout_OptInExampleFlyout}));var a=s(4),n=s.n(a),i=s(3),r=s(1),l=s(2),o=s(0);const c=Object(o.jsx)(r.EuiFlexGroup,{justifyContent:"spaceAround"},Object(o.jsx)(r.EuiFlexItem,{grow:!1},Object(o.jsx)(r.EuiLoadingSpinner,{size:"xl"})));class opt_in_example_flyout_OptInExampleFlyout extends i.PureComponent{constructor(...e){super(...e),n()(this,"_isMounted",!1),n()(this,"state",{data:null,isLoading:!0,hasPrivilegeToRead:!1})}async componentDidMount(){this._isMounted=!0;try{const{fetchExample:e}=this.props,t=await e();this._isMounted&&this.setState({data:Array.isArray(t)?t:null,isLoading:!1,hasPrivilegeToRead:!0})}catch(e){this.setState({isLoading:!1,hasPrivilegeToRead:403!==e.status})}}componentWillUnmount(){this._isMounted=!1}renderBody({data:e,isLoading:t,hasPrivilegeToRead:s}){return t?c:s?null===e?Object(o.jsx)(r.EuiCallOut,{title:Object(o.jsx)(l.FormattedMessage,{id:"telemetry.callout.errorLoadingClusterStatisticsTitle",defaultMessage:"Error loading cluster statistics"}),color:"danger",iconType:"cross"},Object(o.jsx)(l.FormattedMessage,{id:"telemetry.callout.errorLoadingClusterStatisticsDescription",defaultMessage:"An unexpected error occured while attempting to fetch the cluster statistics. This can occur because Elasticsearch failed, Kibana failed, or there is a network error. Check Kibana, then reload the page and try again."})):Object(o.jsx)(r.EuiCodeBlock,{language:"js"},JSON.stringify(e,null,2)):Object(o.jsx)(r.EuiCallOut,{title:Object(o.jsx)(l.FormattedMessage,{id:"telemetry.callout.errorUnprivilegedUserTitle",defaultMessage:"Error displaying cluster statistics"}),color:"danger",iconType:"cross"},Object(o.jsx)(l.FormattedMessage,{id:"telemetry.callout.errorUnprivilegedUserDescription",defaultMessage:"You do not have access to see unencrypted cluster statistics."}))}render(){return Object(o.jsx)(r.EuiPortal,null,Object(o.jsx)(r.EuiFlyout,{ownFocus:!0,onClose:this.props.onClose,maxWidth:!0},Object(o.jsx)(r.EuiFlyoutHeader,null,Object(o.jsx)(r.EuiTitle,null,Object(o.jsx)("h2",null,Object(o.jsx)(l.FormattedMessage,{id:"telemetry.callout.clusterStatisticsTitle",defaultMessage:"Cluster statistics"}))),Object(o.jsx)(r.EuiTextColor,{color:"subdued"},Object(o.jsx)(r.EuiText,null,Object(o.jsx)(l.FormattedMessage,{id:"telemetry.callout.clusterStatisticsDescription",defaultMessage:"This is an example of the basic cluster statistics that we'll collect. It includes the number of indices, shards, and nodes. It also includes high-level usage statistics, such as whether monitoring is turned on."})))),Object(o.jsx)(r.EuiFlyoutBody,null,this.renderBody(this.state))))}}},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,s){"use strict";s.r(t),s.d(t,"TelemetryManagementSection",(function(){return TelemetryManagementSection}));var a=s(4),n=s.n(a),i=s(3),r=s(1),l=s(2),o=s(5),c=s(10),u=s(11),d=s(6),p=s(0);const g=["telemetry","usage","data","usage data"];class TelemetryManagementSection extends i.Component{constructor(e){super(e),n()(this,"maybeGetAppliesSettingMessage",(()=>this.props.showAppliesSettingMessage?Object(p.jsx)(r.EuiCallOut,{color:"primary",iconType:"spacesApp",title:Object(p.jsx)("p",null,Object(p.jsx)(l.FormattedMessage,{id:"telemetry.callout.appliesSettingTitle",defaultMessage:"Changes to this setting apply to {allOfKibanaText} and are saved automatically.",values:{allOfKibanaText:Object(p.jsx)("strong",null,Object(p.jsx)(l.FormattedMessage,{id:"telemetry.callout.appliesSettingTitle.allOfKibanaText",defaultMessage:"all of Kibana"}))}}))}):null)),n()(this,"renderDescription",(()=>{const{docLinks:e}=this.props,t=Object(p.jsx)(r.EuiLink,{onClick:this.toggleExample,"data-test-id":"cluster_data_example"},Object(p.jsx)(l.FormattedMessage,{id:"telemetry.clusterData",defaultMessage:"cluster data"})),s=Object(p.jsx)(r.EuiLink,{href:"https://www.elastic.co/guide/en/security/current/advanced-settings.html#telemetry-settings","data-test-id":"endpoint_security_example",target:"_blank"},Object(p.jsx)(l.FormattedMessage,{id:"telemetry.securityData",defaultMessage:"security data"}));return Object(p.jsx)(i.Fragment,null,Object(p.jsx)("p",null,Object(p.jsx)(l.FormattedMessage,{id:"telemetry.telemetryConfigAndLinkDescription",defaultMessage:"Enabling data usage collection helps us manage and improve our products and services. See our {privacyStatementLink} for more details.",values:{privacyStatementLink:Object(p.jsx)(r.EuiLink,{href:e.legal.privacyStatement,target:"_blank"},Object(p.jsx)(l.FormattedMessage,{id:"telemetry.readOurUsageDataPrivacyStatementLinkText",defaultMessage:"Privacy Statement"}))}})),Object(p.jsx)("p",null,Object(p.jsx)(l.FormattedMessage,{id:"telemetry.seeExampleOfClusterDataAndEndpointSecuity",defaultMessage:"See examples of the {clusterData} and {securityData} that we collect.",values:{clusterData:t,securityData:s}})))})),n()(this,"toggleOptIn",(async()=>{const{telemetryService:e,toasts:t}=this.props,s=!this.state.enabled;return new Promise(((a,n)=>{this.setState({processing:!0,enabled:s},(async()=>{try{await e.setOptIn(s),this.setState({processing:!1}),t.addSuccess(s?o.i18n.translate("telemetry.optInSuccessOn",{defaultMessage:"Usage data collection turned on."}):o.i18n.translate("telemetry.optInSuccessOff",{defaultMessage:"Usage data collection turned off."})),a(!0)}catch(e){this.setState({processing:!1}),n(e)}}))}))})),n()(this,"toggleExample",(()=>{this.setState({showExample:!this.state.showExample})})),this.state={processing:!1,showExample:!1,showSecurityExample:!1,queryMatches:e.query?this.checkQueryMatch(e.query):null,enabled:this.props.telemetryService.getIsOptedIn()||!1}}UNSAFE_componentWillReceiveProps(e){const{query:t}=e,s=this.checkQueryMatch(t);s!==this.state.queryMatches&&this.setState({queryMatches:s},(()=>{this.props.onQueryMatchChange(s)}))}checkQueryMatch(e){var t;const s=(null!==(t=null==e?void 0:e.text)&&void 0!==t?t:"").toLowerCase();return this.props.telemetryService.getCanChangeOptInStatus()&&g.some((e=>e.indexOf(s)>=0))}render(){const{telemetryService:e}=this.props,{showExample:t,queryMatches:s,enabled:a,processing:n}=this.state;return e.getCanChangeOptInStatus()&&(null===s||s)?Object(p.jsx)(i.Fragment,null,t&&Object(p.jsx)(u.TrackApplicationView,{viewId:"optInExampleFlyout"},Object(p.jsx)(d.a,{fetchExample:e.fetchExample,onClose:this.toggleExample})),Object(p.jsx)(r.EuiSplitPanel.Outer,{hasBorder:!0},Object(p.jsx)(r.EuiForm,null,Object(p.jsx)(r.EuiSplitPanel.Inner,{color:"subdued"},Object(p.jsx)(r.EuiTitle,null,Object(p.jsx)("h2",null,Object(p.jsx)(l.FormattedMessage,{id:"telemetry.usageDataTitle",defaultMessage:"Usage Data"})))),Object(p.jsx)(r.EuiSplitPanel.Inner,null,this.maybeGetAppliesSettingMessage(),Object(p.jsx)(r.EuiSpacer,{size:"s"}),Object(p.jsx)(c.LazyField,{setting:{type:"boolean",name:"telemetry:enabled",displayName:o.i18n.translate("telemetry.provideUsageDataTitle",{defaultMessage:"Provide usage data"}),value:a,description:this.renderDescription(),defVal:!0,ariaName:o.i18n.translate("telemetry.provideUsageDataAriaName",{defaultMessage:"Provide usage data"}),requiresPageReload:!1,category:[],isOverridden:!1,isCustom:!0},loading:n,docLinks:this.props.docLinks,toasts:this.props.toasts,handleChange:this.toggleOptIn,enableSaving:this.props.enableSaving}))))):null}}t.default=TelemetryManagementSection},function(e,t,s){e.exports=s(7)(3)},function(e,t,s){s.r(t);var a=__kbnBundles__.get("plugin/advancedSettings/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,s){s.r(t);var a=__kbnBundles__.get("plugin/usageCollection/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(a))},function(e,t,s){s(13),__kbnBundles__.define("plugin/telemetryManagementSection/public",s,14)},function(e,t,s){s.p=window.__kbnPublicPath__.telemetryManagementSection},function(e,t,s){"use strict";s.r(t),s.d(t,"OptInExampleFlyout",(function(){return u.a})),s.d(t,"plugin",(function(){return d}));var a=s(3),n=s.n(a),i=s(9),r=s.n(i),l=s(1),o=s(0);const c=Object(a.lazy)((()=>Promise.resolve().then(s.bind(null,8))));class plugin_TelemetryManagementSectionPlugin{setup(e,{advancedSettings:t,telemetry:{telemetryService:s},usageCollection:i}){var u;let d;e.getStartServices().then((([{docLinks:e}])=>{d=null==e?void 0:e.links}));const p=null!==(u=null==i?void 0:i.components.ApplicationUsageTrackingProvider)&&void 0!==u?u:n.a.Fragment;return t.component.register(t.component.componentType.PAGE_FOOTER_COMPONENT,(e=>Object(o.jsx)(p,null,function(e,t){return s=>Object(o.jsx)(a.Suspense,{fallback:Object(o.jsx)(l.EuiLoadingSpinner,null)},Object(o.jsx)(c,r()({showAppliesSettingMessage:!0,telemetryService:e,docLinks:t},s)))}(s,d)(e))),!0),{}}start(e){}}var u=s(6);function d(){return new plugin_TelemetryManagementSectionPlugin}s(8)}]);