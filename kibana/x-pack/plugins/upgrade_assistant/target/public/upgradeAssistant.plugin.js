/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */!function(e){function t(t){for(var r,n,i=t[0],a=t[1],o=0,u=[];o<i.length;o++)n=i[o],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(c&&c(t);u.length;)u.shift()()}var r={},s={0:0};function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.e=function(e){var t=[],r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=i);var a,o=document.createElement("script");o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=function(e){return n.p+"upgradeAssistant.chunk."+e+".js"}(e);var c=new Error;a=function(t){o.onerror=o.onload=null,clearTimeout(u);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,r[1](c)}s[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:o})}),12e4);o.onerror=o.onload=a,document.head.appendChild(o)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e};var i=window.upgradeAssistant_bundle_jsonpfunction=window.upgradeAssistant_bundle_jsonpfunction||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var c=a;n(n.s=15)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return n})),r.d(t,"k",(function(){return i})),r.d(t,"j",(function(){return a})),r.d(t,"g",(function(){return o})),r.d(t,"h",(function(){return c})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return d})),r.d(t,"f",(function(){return p})),r.d(t,"l",(function(){return l})),r.d(t,"b",(function(){return h})),r.d(t,"i",(function(){return E}));const s="/api/upgrade_assistant",n="found-snapshots",i=999999,a="deprecation_logs",o=".logs-deprecation.elasticsearch-default",c=".logs-deprecation.elasticsearch-default",u=45e3,d=6e4,p=15e3,l=15e3,h=["kibana","cloud","logstash","beats","fleet","ml","security","observability","enterprise-search"],E="elasticsearch.elastic_product_origin"},function(e,t,r){r.r(t);var s=__kbnBundles__.get("plugin/esUiShared/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t,r){e.exports=r(7)(2)},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,r){r.r(t);var s=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t,r){"use strict";var s=r(1);r.d(t,"k",(function(){return s.sendRequest})),r.d(t,"l",(function(){return s.useRequest})),r.d(t,"g",(function(){return s.SectionLoading})),r.d(t,"c",(function(){return s.GlobalFlyout})),r.d(t,"i",(function(){return s.WithPrivileges})),r.d(t,"b",(function(){return s.AuthorizationProvider})),r.d(t,"e",(function(){return s.NotAuthorizedSection}));var n=r(11);r.d(t,"h",(function(){return n.Storage}));var i=r(4);r.d(t,"j",(function(){return i.reactRouterNavigate})),r.d(t,"f",(function(){return i.RedirectAppLinks})),r.d(t,"d",(function(){return i.KibanaThemeProvider}));var a=r(12);r.d(t,"a",(function(){return a.APP_WRAPPER_CLASS}))},function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"h",(function(){return a})),r.d(t,"m",(function(){return o})),r.d(t,"f",(function(){return c})),r.d(t,"o",(function(){return u})),r.d(t,"n",(function(){return d})),r.d(t,"p",(function(){return p})),r.d(t,"q",(function(){return l})),r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return E})),r.d(t,"r",(function(){return f})),r.d(t,"l",(function(){return I})),r.d(t,"d",(function(){return _})),r.d(t,"k",(function(){return g})),r.d(t,"j",(function(){return R})),r.d(t,"g",(function(){return m})),r.d(t,"i",(function(){return b})),r.d(t,"c",(function(){return L})),r.d(t,"s",(function(){return N}));var s=r(2),n=r.n(s);const i="es_deprecations_page_load",a="kibana_deprecations_page_load",o="overview_page_load",c="es_deprecation_logs_page_load",u="reindex_open_flyout_click",d="reindex_close_flyout_click",p="reindex_start_click",l="reindex_stop_click",h="backup_data_cloud_click",E="backup_data_on_prem_click",f="reset_logs_counter_click",I="observability_click",_="discover_click",g="ml_snapshot_upgrade_click",R="ml_snapshot_delete_click",m="index_settings_delete_click",b="kibana_quick_resolve_click",L="cluster_settings_delete_click",N=new class UiMetricService{constructor(){n()(this,"usageCollection",void 0)}setup(e){this.usageCollection=e}track(e,t){if(this.usageCollection)return this.usageCollection.reportUiCounter("upgrade_assistant",e,t)}trackUiMetric(e,t){return this.track(e,t)}}},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,r){(function(t){const r="object"==typeof t&&Object({IS_KIBANA_DISTRIBUTABLE:"true"})&&Object({IS_KIBANA_DISTRIBUTABLE:"true"}).NODE_DEBUG&&/\bsemver\b/i.test(Object({IS_KIBANA_DISTRIBUTABLE:"true"}).NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=r}).call(this,r(17))},function(e,t){const r=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:r,MAX_SAFE_COMPONENT_LENGTH:16}},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var s=r(2),n=r.n(s),i=r(0),a=r(5);const o=new class ApiService{constructor(){n()(this,"client",void 0),n()(this,"clusterUpgradeStateListeners",[])}handleClusterUpgradeError(e){if(Boolean(e&&426===e.statusCode)){const t=e.attributes.allNodesUpgraded?"isUpgradeComplete":"isUpgrading";this.clusterUpgradeStateListeners.forEach((e=>e(t)))}}useRequest(e){if(!this.client)throw new Error("API service has not been initialized.");const t=Object(a.l)(this.client,e);return this.handleClusterUpgradeError(t.error),t}async sendRequest(e){if(!this.client)throw new Error("API service has not been initialized.");const t=await Object(a.k)(this.client,e);return this.handleClusterUpgradeError(t.error),t}setup(e){this.client=e}onClusterUpgradeStateChange(e){this.clusterUpgradeStateListeners.push(e)}useLoadClusterUpgradeStatus(){return this.useRequest({path:`${i.a}/cluster_upgrade_status`,method:"get",pollIntervalMs:i.e})}useLoadCloudBackupStatus(){return this.useRequest({path:`${i.a}/cloud_backup_status`,method:"get",pollIntervalMs:i.c})}useLoadSystemIndicesMigrationStatus(){return this.useRequest({path:`${i.a}/system_indices_migration`,method:"get"})}async migrateSystemIndices(){return await this.sendRequest({path:`${i.a}/system_indices_migration`,method:"post"})}useLoadEsDeprecations(){return this.useRequest({path:`${i.a}/es_deprecations`,method:"get"})}useLoadDeprecationLogging(){return this.useRequest({path:`${i.a}/deprecation_logging`,method:"get"})}async updateDeprecationLogging(e){return await this.sendRequest({path:`${i.a}/deprecation_logging`,method:"put",body:JSON.stringify(e)})}getDeprecationLogsCount(e){return this.useRequest({path:`${i.a}/deprecation_logging/count`,method:"get",query:{from:e},pollIntervalMs:i.f})}deleteDeprecationLogsCache(){return this.sendRequest({path:`${i.a}/deprecation_logging/cache`,method:"delete"})}async updateIndexSettings(e,t){return await this.sendRequest({path:`${i.a}/${e}/index_settings`,method:"post",body:{settings:JSON.stringify(t)}})}async upgradeMlSnapshot(e){return await this.sendRequest({path:`${i.a}/ml_snapshots`,method:"post",body:e})}async deleteMlSnapshot({jobId:e,snapshotId:t}){return await this.sendRequest({path:`${i.a}/ml_snapshots/${e}/${t}`,method:"delete"})}async getMlSnapshotUpgradeStatus({jobId:e,snapshotId:t}){return await this.sendRequest({path:`${i.a}/ml_snapshots/${e}/${t}`,method:"get"})}useLoadMlUpgradeMode(){return this.useRequest({path:`${i.a}/ml_upgrade_mode`,method:"get"})}async getReindexStatus(e){return await this.sendRequest({path:`${i.a}/reindex/${e}`,method:"get"})}async startReindexTask(e){return await this.sendRequest({path:`${i.a}/reindex/${e}`,method:"post"})}async cancelReindexTask(e){return await this.sendRequest({path:`${i.a}/reindex/${e}/cancel`,method:"post"})}useLoadUpgradeStatus(){return this.useRequest({path:`${i.a}/status`,method:"get"})}async updateClusterSettings(e){return await this.sendRequest({path:`${i.a}/cluster_settings`,method:"post",body:{settings:JSON.stringify(e)}})}useLoadRemoteClusters(){return this.useRequest({path:`${i.a}/remote_clusters`,method:"get"})}useLoadNodeDiskSpace(){return this.useRequest({path:`${i.a}/node_disk_space`,method:"get"})}}},function(e,t,r){r.r(t);var s=__kbnBundles__.get("plugin/kibanaUtils/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t,r){r.r(t);var s=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(s))},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var s=r(2),n=r.n(s),i=r(3);const a={breadcrumbs:{overview:i.i18n.translate("xpack.upgradeAssistant.breadcrumb.overviewLabel",{defaultMessage:"Upgrade Assistant"}),esDeprecations:i.i18n.translate("xpack.upgradeAssistant.breadcrumb.esDeprecationsLabel",{defaultMessage:"Elasticsearch deprecation issues"}),esDeprecationLogs:i.i18n.translate("xpack.upgradeAssistant.breadcrumb.esDeprecationLogsLabel",{defaultMessage:"Elasticsearch deprecation logs"}),kibanaDeprecations:i.i18n.translate("xpack.upgradeAssistant.breadcrumb.kibanaDeprecationsLabel",{defaultMessage:"Kibana deprecation issues"})}},o=new class BreadcrumbService{constructor(){n()(this,"breadcrumbs",{overview:[{text:a.breadcrumbs.overview}],esDeprecations:[{text:a.breadcrumbs.overview,href:"/"},{text:a.breadcrumbs.esDeprecations}],esDeprecationLogs:[{text:a.breadcrumbs.overview,href:"/"},{text:a.breadcrumbs.esDeprecationLogs}],kibanaDeprecations:[{text:a.breadcrumbs.overview,href:"/"},{text:a.breadcrumbs.kibanaDeprecations}]}),n()(this,"setBreadcrumbsHandler",void 0)}setup(e){this.setBreadcrumbsHandler=e}setBreadcrumbs(e){if(!this.setBreadcrumbsHandler)throw new Error("Breadcrumb service has not been initialized");const t=this.breadcrumbs[e]?[...this.breadcrumbs[e]]:[...this.breadcrumbs.home];this.setBreadcrumbsHandler(t)}}},function(e,t,r){const s=r(8),{MAX_LENGTH:n,MAX_SAFE_INTEGER:i}=r(9),{re:a,t:o}=r(18),c=r(19),{compareIdentifiers:u}=r(20);class SemVer{constructor(e,t){if(t=c(t),e instanceof SemVer){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError(`Invalid Version: ${e}`);if(e.length>n)throw new TypeError(`version is longer than ${n} characters`);s("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?a[o.LOOSE]:a[o.FULL]);if(!r)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map((e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<i)return t}return e})):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(s("SemVer.compare",this.version,this.options,e),!(e instanceof SemVer)){if("string"==typeof e&&e===this.version)return 0;e=new SemVer(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof SemVer||(e=new SemVer(e,this.options)),u(this.major,e.major)||u(this.minor,e.minor)||u(this.patch,e.patch)}comparePre(e){if(e instanceof SemVer||(e=new SemVer(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],n=e.prerelease[t];if(s("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n)return u(r,n)}while(++t)}compareBuild(e){e instanceof SemVer||(e=new SemVer(e,this.options));let t=0;do{const r=this.build[t],n=e.build[t];if(s("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n)return u(r,n)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error(`invalid increment argument: ${e}`)}return this.format(),this.raw=this.version,this}}e.exports=SemVer},function(e,t,r){r(16),__kbnBundles__.define("plugin/upgradeAssistant/public",r,21)},function(e,t,r){r.p=window.__kbnPublicPath__.upgradeAssistant},function(e,t,r){e.exports=r(7)(656)},function(e,t,r){const{MAX_SAFE_COMPONENT_LENGTH:s}=r(9),n=r(8),i=(t=e.exports={}).re=[],a=t.src=[],o=t.t={};let c=0;const u=(e,t,r)=>{const s=c++;n(s,t),o[e]=s,a[s]=t,i[s]=new RegExp(t,r?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","[0-9]+"),u("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),u("MAINVERSION",`(${a[o.NUMERICIDENTIFIER]})\\.(${a[o.NUMERICIDENTIFIER]})\\.(${a[o.NUMERICIDENTIFIER]})`),u("MAINVERSIONLOOSE",`(${a[o.NUMERICIDENTIFIERLOOSE]})\\.(${a[o.NUMERICIDENTIFIERLOOSE]})\\.(${a[o.NUMERICIDENTIFIERLOOSE]})`),u("PRERELEASEIDENTIFIER",`(?:${a[o.NUMERICIDENTIFIER]}|${a[o.NONNUMERICIDENTIFIER]})`),u("PRERELEASEIDENTIFIERLOOSE",`(?:${a[o.NUMERICIDENTIFIERLOOSE]}|${a[o.NONNUMERICIDENTIFIER]})`),u("PRERELEASE",`(?:-(${a[o.PRERELEASEIDENTIFIER]}(?:\\.${a[o.PRERELEASEIDENTIFIER]})*))`),u("PRERELEASELOOSE",`(?:-?(${a[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[o.PRERELEASEIDENTIFIERLOOSE]})*))`),u("BUILDIDENTIFIER","[0-9A-Za-z-]+"),u("BUILD",`(?:\\+(${a[o.BUILDIDENTIFIER]}(?:\\.${a[o.BUILDIDENTIFIER]})*))`),u("FULLPLAIN",`v?${a[o.MAINVERSION]}${a[o.PRERELEASE]}?${a[o.BUILD]}?`),u("FULL",`^${a[o.FULLPLAIN]}$`),u("LOOSEPLAIN",`[v=\\s]*${a[o.MAINVERSIONLOOSE]}${a[o.PRERELEASELOOSE]}?${a[o.BUILD]}?`),u("LOOSE",`^${a[o.LOOSEPLAIN]}$`),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE",`${a[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),u("XRANGEIDENTIFIER",`${a[o.NUMERICIDENTIFIER]}|x|X|\\*`),u("XRANGEPLAIN",`[v=\\s]*(${a[o.XRANGEIDENTIFIER]})(?:\\.(${a[o.XRANGEIDENTIFIER]})(?:\\.(${a[o.XRANGEIDENTIFIER]})(?:${a[o.PRERELEASE]})?${a[o.BUILD]}?)?)?`),u("XRANGEPLAINLOOSE",`[v=\\s]*(${a[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[o.XRANGEIDENTIFIERLOOSE]})(?:${a[o.PRERELEASELOOSE]})?${a[o.BUILD]}?)?)?`),u("XRANGE",`^${a[o.GTLT]}\\s*${a[o.XRANGEPLAIN]}$`),u("XRANGELOOSE",`^${a[o.GTLT]}\\s*${a[o.XRANGEPLAINLOOSE]}$`),u("COERCE",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?(?:$|[^\\d])`),u("COERCERTL",a[o.COERCE],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM",`(\\s*)${a[o.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",u("TILDE",`^${a[o.LONETILDE]}${a[o.XRANGEPLAIN]}$`),u("TILDELOOSE",`^${a[o.LONETILDE]}${a[o.XRANGEPLAINLOOSE]}$`),u("LONECARET","(?:\\^)"),u("CARETTRIM",`(\\s*)${a[o.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",u("CARET",`^${a[o.LONECARET]}${a[o.XRANGEPLAIN]}$`),u("CARETLOOSE",`^${a[o.LONECARET]}${a[o.XRANGEPLAINLOOSE]}$`),u("COMPARATORLOOSE",`^${a[o.GTLT]}\\s*(${a[o.LOOSEPLAIN]})$|^$`),u("COMPARATOR",`^${a[o.GTLT]}\\s*(${a[o.FULLPLAIN]})$|^$`),u("COMPARATORTRIM",`(\\s*)${a[o.GTLT]}\\s*(${a[o.LOOSEPLAIN]}|${a[o.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE",`^\\s*(${a[o.XRANGEPLAIN]})\\s+-\\s+(${a[o.XRANGEPLAIN]})\\s*$`),u("HYPHENRANGELOOSE",`^\\s*(${a[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[o.XRANGEPLAINLOOSE]})\\s*$`),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0.0.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},function(e,t){const r=["includePrerelease","loose","rtl"];e.exports=e=>e?"object"!=typeof e?{loose:!0}:r.filter((t=>e[t])).reduce(((e,t)=>(e[t]=!0,e)),{}):{}},function(e,t){const r=/^[0-9]+$/,s=(e,t)=>{const s=r.test(e),n=r.test(t);return s&&n&&(e=+e,t=+t),e===t?0:s&&!n?-1:n&&!s?1:e<t?-1:1};e.exports={compareIdentifiers:s,rcompareIdentifiers:(e,t)=>s(t,e)}},function(e,t,r){"use strict";r.r(t),r.d(t,"plugin",(function(){return u}));var s=r(14),n=r.n(s),i=r(3),a=r(10),o=r(13),c=r(6);class plugin_UpgradeAssistantUIPlugin{constructor(e){this.ctx=e}setup(e,{management:t,cloud:s,share:u,usageCollection:d}){const{readonly:p,ui:{enabled:l}}=this.ctx.config.get();if(l){const l=t.sections.section.stack,h=new n.a(this.ctx.env.packageInfo.version),E={currentMajor:h.major,prevMajor:h.major-1,nextMajor:h.major+1},f=i.i18n.translate("xpack.upgradeAssistant.appTitle",{defaultMessage:"Upgrade Assistant"});d&&c.s.setup(d),l.registerApp({id:"upgrade_assistant",title:f,order:1,async mount(t){const[n,{data:i,...c}]=await e.getStartServices(),{chrome:{docTitle:d}}=n;d.change(f);const l={kibanaVersionInfo:E,isReadOnlyMode:p,plugins:{cloud:s,share:u,infra:c.hasOwnProperty("infra")?{}:void 0},services:{core:n,data:i,history:t.history,api:a.a,breadcrumbs:o.a},theme$:t.theme$},{mountManagementSection:h}=await r.e(1).then(r.bind(null,77)),I=h(t,l);return()=>{d.reset(),I()}}})}}start(){}stop(){}}const u=e=>new plugin_UpgradeAssistantUIPlugin(e)},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t){e.exports=__kbnSharedDeps__.KbnAnalytics},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom},function(e,t){e.exports=__kbnSharedDeps__.MomentTimezone},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.Classnames},function(e,t){e.exports=__kbnSharedDeps__.RisonNode}]);