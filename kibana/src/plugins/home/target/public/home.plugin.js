!function(e){function t(t){for(var r,n,a=t[0],o=t[1],s=0,c=[];s<a.length;s++)n=a[s],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&c.push(i[n][0]),i[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(u&&u(t);c.length;)c.shift()()}var r={},i={0:0};function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.src=function(e){return n.p+"home.chunk."+e+".js"}(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(c);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}i[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e};var a=window.home_bundle_jsonpfunction=window.home_bundle_jsonpfunction||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=o;n(n.s=6)}([function(e,t,r){e.exports=r(8)(2)},function(e,t){e.exports=__kbnSharedDeps__.KbnI18n},function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var i=r(1);const n={ESC:"esc",OSX:"osx",DEB:"deb",RPM:"rpm",DOCKER:"docker",WINDOWS:"windows",NODE:"node",DJANGO:"django",FLASK:"flask",RAILS:"rails",RACK:"rack",JS:"js",GO:"go",JAVA:"java",DOTNET:"dotnet",LINUX:"linux",PHP:"php",FLEET:"fleet"},a={[n.ESC]:"Elastic Cloud",[n.OSX]:"macOS",[n.DEB]:"Linux DEB",[n.RPM]:"Linux RPM",[n.DOCKER]:"Docker",[n.WINDOWS]:"Windows",[n.NODE]:"Node.js",[n.DJANGO]:"Django",[n.FLASK]:"Flask",[n.RAILS]:"Ruby on Rails",[n.RACK]:"Rack",[n.JS]:"RUM (JS)",[n.GO]:"Go",[n.JAVA]:"Java",[n.DOTNET]:".NET",[n.LINUX]:"Linux",[n.PHP]:"PHP",[n.FLEET]:i.i18n.translate("home.tutorial.instruction_variant.fleet",{defaultMessage:"Elastic APM in Fleet"})};function o(e){return e in a?a[e]:e}},function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return a}));const i="home",n=`/app/${i}`;let a;!function(e){e.LOGGING="logging",e.SECURITY_SOLUTION="security",e.METRICS="metrics",e.OTHER="other"}(a||(a={}))},function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));let i=null;function n(e){i=e}function a(){if(!i)throw new Error("Kibana services not set - are you trying to import this module from outside of the home app?");return i}},function(e,t,r){r.r(t);var i=__kbnBundles__.get("entry/core/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t,r){r(7),__kbnBundles__.define("plugin/home/public",r,9)},function(e,t,r){r.p=window.__kbnPublicPath__.home},function(e,t){e.exports=__kbnSharedDeps_npm__},function(e,t,r){"use strict";r.r(t),r.d(t,"INSTRUCTION_VARIANT",(function(){return i.a})),r.d(t,"getDisplayText",(function(){return i.b})),r.d(t,"plugin",(function(){return d}));var i=r(2),n=r(0),a=r.n(n),o=r(1),s=r(5),u=r(3),c=r(4);class feature_catalogue_registry_FeatureCatalogueRegistry{constructor(){a()(this,"capabilities",null),a()(this,"features",new Map),a()(this,"solutions",new Map)}setup(){return{register:e=>{if(this.features.has(e.id))throw new Error(`Feature with id [${e.id}] has already been registered. Use a unique id.`);this.features.set(e.id,e)},registerSolution:e=>{if(this.solutions.has(e.id))throw new Error(`Solution with id [${e.id}] has already been registered. Use a unique id.`);this.solutions.set(e.id,e)}}}start({capabilities:e}){this.capabilities=e}get(){if(null===this.capabilities)throw new Error("Catalogue entries are only available after start phase");const e=this.capabilities;return[...this.features.values()].filter((t=>!1!==e.catalogue[t.id]&&(!t.visible||t.visible()))).sort(l("title"))}getSolutions(){if(null===this.capabilities)throw new Error("Catalogue entries are only available after start phase");const e=this.capabilities;return[...this.solutions.values()].filter((t=>!1!==e.catalogue[t.id])).sort(l("title"))}removeFeature(e){this.features.delete(e)}}const l=e=>(t,r)=>t[e]<r[e]?-1:t[e]>r[e]?1:0;class environment_EnvironmentService{constructor(){a()(this,"environment",{cloud:!1,apmUi:!1,ml:!1})}setup(){return{update:e=>{this.environment=Object.assign({},this.environment,e)}}}getEnvironment(){return this.environment}}class tutorial_service_TutorialService{constructor(){a()(this,"tutorialVariables",{}),a()(this,"tutorialDirectoryHeaderLinks",{}),a()(this,"tutorialModuleNotices",{}),a()(this,"customStatusCheck",{}),a()(this,"customComponent",{})}setup(){return{setVariable:(e,t)=>{if(this.tutorialVariables[e])throw new Error("variable already set");this.tutorialVariables[e]=t},registerDirectoryHeaderLink:(e,t)=>{if(this.tutorialDirectoryHeaderLinks[e])throw new Error(`directory header link ${e} already set`);this.tutorialDirectoryHeaderLinks[e]=t},registerModuleNotice:(e,t)=>{if(this.tutorialModuleNotices[e])throw new Error(`module notice ${e} already set`);this.tutorialModuleNotices[e]=t},registerCustomStatusCheck:(e,t)=>{this.customStatusCheck[e]=t},registerCustomComponent:(e,t)=>{this.customComponent[e]=t}}}getVariables(){return this.tutorialVariables}getDirectoryHeaderLinks(){return Object.values(this.tutorialDirectoryHeaderLinks)}getModuleNotices(){return Object.values(this.tutorialModuleNotices)}getCustomStatusCheck(e){return this.customStatusCheck[e]}getCustomComponent(e){return this.customComponent[e]}}class add_data_service_AddDataService{constructor(){a()(this,"addDataTabs",{})}setup(){return{registerAddDataTab:e=>{if(this.addDataTabs[e.id])throw new Error(`Tab ${e.id} already exists`);this.addDataTabs[e.id]=e}}}getAddDataTabs(){return Object.values(this.addDataTabs)}}class welcome_service_WelcomeService{constructor(){a()(this,"onRenderedHandlers",[]),a()(this,"renderTelemetryNoticeHandler",void 0),a()(this,"setup",(()=>({registerOnRendered:e=>{this.onRenderedHandlers.push(e)},registerTelemetryNoticeRenderer:e=>{if(this.renderTelemetryNoticeHandler)throw new Error("Only one renderTelemetryNotice handler can be registered");this.renderTelemetryNoticeHandler=e}}))),a()(this,"onRendered",(()=>{this.onRenderedHandlers.forEach((e=>{try{e()}catch(e){console.error(e)}}))})),a()(this,"renderTelemetryNotice",(()=>{if(this.renderTelemetryNoticeHandler)try{return this.renderTelemetryNoticeHandler()}catch(e){console.error(e)}return null}))}}class plugin_HomePublicPlugin{constructor(e){a()(this,"featuresCatalogueRegistry",new feature_catalogue_registry_FeatureCatalogueRegistry),a()(this,"environmentService",new environment_EnvironmentService),a()(this,"tutorialService",new tutorial_service_TutorialService),a()(this,"addDataService",new add_data_service_AddDataService),a()(this,"welcomeService",new welcome_service_WelcomeService),this.initializerContext=e}setup(e,{share:t,urlForwarding:i,usageCollection:n}){e.application.register({id:u.b,title:"Home",navLinkStatus:s.AppNavLinkStatus.hidden,mount:async i=>{const a=n?n.reportUiCounter.bind(n,"Kibana_home"):()=>{},[s,{dataViews:u,urlForwarding:l}]=await e.getStartServices();Object(c.b)({share:t,trackUiMetric:a,kibanaVersion:this.initializerContext.env.packageInfo.version,http:s.http,toastNotifications:e.notifications.toasts,banners:s.overlays.banners,docLinks:s.docLinks,savedObjectsClient:s.savedObjects.client,chrome:s.chrome,application:s.application,uiSettings:e.uiSettings,addBasePath:e.http.basePath.prepend,getBasePath:e.http.basePath.get,dataViewsService:u,environmentService:this.environmentService,urlForwarding:l,homeConfig:this.initializerContext.config.get(),tutorialService:this.tutorialService,addDataService:this.addDataService,featureCatalogue:this.featuresCatalogueRegistry,welcomeService:this.welcomeService}),s.chrome.docTitle.change(o.i18n.translate("home.pageTitle",{defaultMessage:"Home"}));const{renderApp:d}=await r.e(1).then(r.bind(null,33));return await d(i.element,i.theme$,s,i.history)}}),i.forwardApp("home","home");const a={...this.featuresCatalogueRegistry.setup()};return a.register({id:"home_tutorial_directory",title:o.i18n.translate("home.tutorialDirectory.featureCatalogueTitle",{defaultMessage:"Add data"}),description:o.i18n.translate("home.tutorialDirectory.featureCatalogueDescription",{defaultMessage:"Ingest data from popular apps and services."}),icon:"indexOpen",showOnHomePage:!0,path:`${u.a}#/tutorial_directory`,category:"data",order:500}),{featureCatalogue:a,environment:{...this.environmentService.setup()},tutorials:{...this.tutorialService.setup()},addData:{...this.addDataService.setup()},welcomeScreen:{...this.welcomeService.setup()}}}start({application:{capabilities:e}}){return this.featuresCatalogueRegistry.start({capabilities:e}),{featureCatalogue:this.featuresCatalogueRegistry}}}const d=e=>new plugin_HomePublicPlugin(e)},function(e,t){e.exports=__kbnSharedDeps__.React},function(e,t){e.exports=__kbnSharedDeps__.EmotionReact},function(e,t){e.exports=__kbnSharedDeps__.ElasticEui},function(e,t){e.exports=__kbnSharedDeps__.KbnI18nReact},function(e,t,r){r.r(t);var i=__kbnBundles__.get("plugin/kibanaReact/public");Object.defineProperties(t,Object.getOwnPropertyDescriptors(i))},function(e,t){e.exports=__kbnSharedDeps__.Lodash},function(e,t){e.exports=__kbnSharedDeps__.KbnAnalytics},function(e,t){e.exports=__kbnSharedDeps__.ReactDom},function(e,t){e.exports=__kbnSharedDeps__.KbnUiTheme},function(e,t){e.exports=__kbnSharedDeps__.ReactRouterDom}]);