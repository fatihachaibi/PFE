/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.uiActionsEnhanced_bundle_jsonpfunction=window.uiActionsEnhanced_bundle_jsonpfunction||[]).push([[3],{32:function(e,t,n){"use strict";var i,s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function r(e,t){for(var n={},i=[],s=0;s<e.length;s++){var r=e[s],l=t.base?r[0]+t.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=a(d),g={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(o[u].references++,o[u].updater(g)):o.push({identifier:d,updater:m(g,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=s(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,s);else{var o=document.createTextNode(s),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function g(e,t,n){var i=n.css,s=n.media,o=n.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var p=null,h=0;function m(e,t){var n,i,s;if(t.singleton){var o=h++;n=p||(p=l(t)),i=u.bind(null,n,o,!1),s=u.bind(null,n,o,!0)}else n=l(t),i=g.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=r(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var s=a(n[i]);o[s].references--}for(var l=r(e,t),c=0;c<n.length;c++){var d=a(n[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=l}}}},33:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,i,s,o=e[1]||"",a=e[3];if(!a)return o;if(t&&"function"==typeof btoa){var r=(n=a,i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(s," */")),l=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([r]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(s[a]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);i&&s[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),s="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;t.default=s},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(25),s=n(2),o=i.__importDefault(n(38));t.default=function(e,t){var n=s.useState(t),i=n[0],a=n[1];return o.default((function(){var t=e.subscribe(a);return function(){return t.unsubscribe()}}),[e]),i}},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);t.default=function(){var e=i.useRef(!1),t=i.useCallback((function(){return e.current}),[]);return i.useEffect((function(){return e.current=!0,function(){e.current=!1}})),t}},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),s=function(e){return(e+1)%1e6};t.default=function(){return i.useReducer(s,0)[1]}},47:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(48);case"v8light":return n(50)}},48:function(e,t,n){var i=n(32),s=n(49);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);i(s,{insert:"head",singleton:!1}),e.exports=s.locals||{}},49:function(e,t,n){(t=n(33)(!1)).push([e.i,".auaPresentablePicker__item .euiKeyPadMenuItem__label{height:32px}\n",""]),e.exports=t},50:function(e,t,n){var i=n(32),s=n(51);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);i(s,{insert:"head",singleton:!1}),e.exports=s.locals||{}},51:function(e,t,n){(t=n(33)(!1)).push([e.i,".auaPresentablePicker__item .euiKeyPadMenuItem__label{height:32px}\n",""]),e.exports=t},92:function(e,t,n){"use strict";n.r(t),n.d(t,"DrilldownManagerWithProvider",(function(){return et}));var i=n(2),s=n.n(i),o=n(0),a=n.n(o),r=n(39),l=n.n(r),c=n(5),d=n(24),u=n(38),g=n.n(u),p=n(46),h=n.n(p);class drilldown_state_DrilldownState{constructor({factory:e,placeTriggers:t,placeContext:n,name:s="",triggers:o=[],config:r={}}){a()(this,"factory",void 0),a()(this,"placeContext",void 0),a()(this,"name$",void 0),a()(this,"nameError$",void 0),a()(this,"placeTriggers",void 0),a()(this,"uiTriggers",void 0),a()(this,"triggers$",void 0),a()(this,"triggersError$",void 0),a()(this,"config$",void 0),a()(this,"configError$",void 0),a()(this,"error$",void 0),a()(this,"setName",(e=>{this.name$.next(e)})),a()(this,"setTriggers",(e=>{this.triggers$.next(e)})),a()(this,"setConfig",(e=>{this.config$.next(e)})),a()(this,"useName",(()=>l()(this.name$,this.name$.getValue()))),a()(this,"useTriggers",(()=>l()(this.triggers$,this.triggers$.getValue()))),a()(this,"useConfig",(()=>l()(this.config$,this.config$.getValue()))),a()(this,"useError",(()=>(e=>{const t=Object(i.useRef)(!0),n=Object(i.useRef)(),s=h()(),o=Object(i.useRef)(void 0);return o.current=Object(i.useMemo)((()=>(o.current&&(o.current.unsubscribe(),o.current=void 0,t.current=!0),e.subscribe((e=>{n.current=e,t.current&&(t.current=!1),s()})))),[e,s]),g()((()=>()=>{o.current&&o.current.unsubscribe()}),[]),n.current})(this.error$))),this.factory=e,this.placeTriggers=t,this.placeContext=n,this.name$=new c.BehaviorSubject(s),this.triggers$=new c.BehaviorSubject(o),this.config$=new c.BehaviorSubject(r);const u=this.factory.supportedTriggers();this.uiTriggers=u.filter((e=>this.placeTriggers.includes(e))),1===this.uiTriggers.length&&this.triggers$.next([this.uiTriggers[0]]),this.nameError$=this.name$.pipe(Object(d.map)((e=>{if(!e)return"NAME_EMPTY"}))),this.triggersError$=this.triggers$.pipe(Object(d.map)((e=>{if(!e.length)return"NO_TRIGGERS_SELECTED"}))),this.configError$=this.config$.pipe(Object(d.map)((e=>{if(!this.factory.isConfigValid(e,this.getFactoryContext()))return"INVALID_CONFIG"}))),this.error$=Object(c.combineLatest)([this.nameError$,this.triggersError$,this.configError$]).pipe(Object(d.map)((([e,t,n])=>e||n||t||void 0)))}getFactoryContext(){return{...this.placeContext,triggers:this.triggers$.getValue()}}serialize(){return{factoryId:this.factory.id,name:this.name$.getValue(),config:this.config$.getValue()}}getAllDrilldownTriggers(){return this.factory.supportedTriggers().filter((e=>this.placeTriggers.includes(e)))}isValid(){if(!this.name$.getValue())return!1;const e=this.config$.getValue();return!!e&&!(this.triggers$.getValue().length<1||!this.factory.isConfigValid(e,this.getFactoryContext()))}}var m=n(3);const b={title:e=>m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.toast.drilldownCreatedTitle",{defaultMessage:'Drilldown "{drilldownName}" created',values:{drilldownName:e}}),text:m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.toast.drilldownCreatedText",{defaultMessage:"Save your dashboard before testing."})},f={title:e=>m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.toast.drilldownEditedTitle",{defaultMessage:'Drilldown "{drilldownName}" updated',values:{drilldownName:e}}),text:m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.toast.drilldownEditedText",{defaultMessage:"Save your dashboard before testing."})},j={title:m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.toast.drilldownDeletedTitle",{defaultMessage:"Drilldown deleted"}),text:m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.toast.drilldownDeletedText",{defaultMessage:"Save your dashboard before testing."})},x={title:e=>m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.toast.drilldownsDeletedTitle",{defaultMessage:"{n} drilldowns deleted",values:{n:e}}),text:m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.toast.drilldownsDeletedText",{defaultMessage:"Save your dashboard before testing."})},w=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.toast.drilldownsCRUDErrorTitle",{defaultMessage:"Error saving drilldown",description:"Title for generic error toast when persisting drilldown updates failed"}),y=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.insufficientLicenseLevelError",{defaultMessage:"Insufficient license level",description:"User created drilldown with higher license type, but then downgraded the license. This error is shown in the list near created drilldown"}),E=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.drilldownManager.state.defaultTitle",{defaultMessage:"Drilldowns",description:"Drilldowns flyout title."}),v="drilldowns:hidWelcomeMessage";class drilldown_manager_state_DrilldownManagerState{constructor(e){a()(this,"title$",new c.BehaviorSubject(E)),a()(this,"footer$",new c.BehaviorSubject(null)),a()(this,"route$",void 0),a()(this,"hideWelcomeMessage$",void 0),a()(this,"actionFactory$",void 0),a()(this,"mapEventToDrilldownItem",(e=>{var t;const n=this.deps.actionFactories.find((t=>t.id===e.action.factoryId)),i={...this.deps.placeContext,triggers:e.triggers},s=e.triggers[0];return{id:e.eventId,drilldownName:e.action.name,actionName:null!==(t=null==n?void 0:n.getDisplayName(i))&&void 0!==t?t:e.action.factoryId,icon:null==n?void 0:n.getIconType(i),error:n?n.isCompatibleLicense()?void 0:y:(o=e.action.factoryId,m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.flyoutDrilldownWizard.invalidDrilldownType",{defaultMessage:"Drilldown type {type} doesn't exist",values:{type:o}})),triggers:e.triggers.map((e=>this.deps.getTrigger(e))),triggerIncompatible:!this.deps.triggers.find((e=>e===s))};var o})),a()(this,"events$",void 0),a()(this,"drilldownStateByFactoryId",new Map),a()(this,"canUnlockMoreDrilldowns",void 0),a()(this,"lastCloneRecord",null),a()(this,"hideWelcomeMessage",(()=>{this.hideWelcomeMessage$.next(!0),this.deps.storage.set(v,!0)})),a()(this,"close",(()=>{this.deps.onClose()})),a()(this,"onDelete",(e=>{(async()=>{const{dynamicActionManager:t,toastService:n}=this.deps;try{await t.deleteEvents(e),this.deps.toastService.addSuccess(1===e.length?{title:j.title,text:j.text}:{title:x.title(e.length),text:x.text})}catch(e){n.addError(e,{title:w})}})().catch(console.error)})),a()(this,"onClone",(async e=>{const{templates:t}=this.deps;if(!t)return;const n=e.map((e=>t.find((({id:t})=>t===e)))).filter(Boolean);for(const e of n)await this.cloneTemplate(e);this.lastCloneRecord={time:Date.now(),templateIds:e},this.setRoute(["manage"])})),a()(this,"onCreateFromTemplate",(async e=>{const{templates:t}=this.deps;if(!t)return;const n=t.find((({id:t})=>t===e));if(!n)return;const i=this.deps.actionFactories.find((({id:e})=>e===n.factoryId));if(!i)return;this.setActionFactory(i);const s=this.getDrilldownState();s&&(s.setName(this.pickName(n.name)),s.setTriggers(n.triggers),s.setConfig(n.config))})),a()(this,"onCreateFromDrilldown",(async e=>{const{dynamicActionManager:t}=this.deps,{events:n}=t.state.get(),i=n.find((t=>t.eventId===e));if(!i)return;const s=this.deps.actionFactories.find((({id:e})=>e===i.action.factoryId));if(!s)return;this.setActionFactory(s);const o=this.getDrilldownState();o&&(o.setName(this.pickName(i.action.name)),o.setTriggers(i.triggers),o.setConfig(i.action.config))})),a()(this,"useTitle",(()=>l()(this.title$,this.title$.getValue()))),a()(this,"useFooter",(()=>l()(this.footer$,this.footer$.getValue()))),a()(this,"useRoute",(()=>l()(this.route$,this.route$.getValue()))),a()(this,"useWelcomeMessage",(()=>l()(this.hideWelcomeMessage$,this.hideWelcomeMessage$.getValue()))),a()(this,"useActionFactory",(()=>l()(this.actionFactory$,this.actionFactory$.getValue()))),a()(this,"useEvents",(()=>l()(this.events$,this.events$.getValue()))),a()(this,"useCompatibleActionFactories",(e=>l()(Object(i.useMemo)((()=>this.getCompatibleActionFactories(e)),[e]),void 0))),this.deps=e;const t=e.storage.get(v);this.hideWelcomeMessage$=new c.BehaviorSubject(null!=t&&t),this.canUnlockMoreDrilldowns=e.actionFactories.some((e=>!e.isCompatibleLicense)),this.events$=new c.BehaviorSubject(this.deps.dynamicActionManager.state.get().events.map(this.mapEventToDrilldownItem)),e.dynamicActionManager.state.state$.pipe(Object(d.map)((e=>e.events.map(this.mapEventToDrilldownItem)))).subscribe(this.events$);let{initialRoute:n=""}=e;n?"/"===n[0]&&(n=n.substr(1)):n="manage",this.route$=new c.BehaviorSubject(n.split("/")),this.actionFactory$=new c.BehaviorSubject(this.getActiveActionFactory()),this.route$.pipe(Object(d.map)((()=>this.getActiveActionFactory()))).subscribe(this.actionFactory$)}setTitle(e){this.title$.next(e)}setFooter(e){this.footer$.next(e)}resetTitle(){this.setTitle(E)}setRoute(e){"manage"===e[0]&&(this.deps.closeAfterCreate=!1),this.route$.next(e)}setActionFactory(e){if(e){if(!this.drilldownStateByFactoryId.has(e.id)){const t=this.getActiveActionFactory(),n=t?this.drilldownStateByFactoryId.get(t.id):void 0,i=this.getActionFactoryContext(),s=new drilldown_state_DrilldownState({factory:e,placeTriggers:this.deps.triggers,placeContext:this.deps.placeContext||{},name:this.pickName(n?n.name$.getValue():e.getDisplayName(this.getActionFactoryContext())),triggers:[],config:e.createConfig(i)});this.drilldownStateByFactoryId.set(e.id,s)}this.route$.next(["new",e.id])}else{const e=this.route$.getValue();"new"===e[0]&&e.length>1&&this.setRoute(["new"])}}getActiveActionFactory(){const[e,t]=this.route$.getValue();if("new"===e&&t)return this.deps.actionFactories.find((e=>e.id===t))}getActionFactoryContext(){var e;return{...null!==(e=this.deps.placeContext)&&void 0!==e?e:[],triggers:[]}}getCompatibleActionFactories(e){const t=new c.BehaviorSubject(void 0);return Promise.allSettled(this.deps.actionFactories.map((t=>t.isCompatible(e)))).then((e=>{t.next(this.deps.actionFactories.filter(((t,n)=>{const i=e[n];return"fulfilled"===i.status&&i.value})))})),t.asObservable()}getDrilldownState(){const e=this.getActiveActionFactory();if(e)return this.drilldownStateByFactoryId.get(e.id)}async createDrilldown(){const{dynamicActionManager:e,toastService:t}=this.deps,n=this.getDrilldownState();if(n)try{const i=n.serialize(),s=n.triggers$.getValue();await e.createEvent(i,s),t.addSuccess({title:b.title(n.name$.getValue()),text:b.text}),this.drilldownStateByFactoryId.delete(n.factory.id),this.deps.closeAfterCreate?this.deps.onClose():this.setRoute(["manage"])}catch(e){throw t.addError(e,{title:w}),e}}async cloneTemplate(e){const{dynamicActionManager:t}=this.deps,n=this.pickName(e.name),i={factoryId:e.factoryId,name:n,config:e.config||{}};await t.createEvent(i,e.triggers)}hasDrilldownWithName(e){const{events:t}=this.deps.dynamicActionManager.state.get();for(const n of t)if(n.action.name===e)return!0;return!1}pickName(e){if(this.hasDrilldownWithName(e)){const t=e.match(/(.*) (\(copy[^\)]*\))/);t&&(e=t[1]);for(let t=0;t<100;t++){const n=t?`${e} (copy ${t})`:`${e} (copy)`;if(!this.hasDrilldownWithName(n))return n}}return e}createEventDrilldownState(e){const{dynamicActionManager:t,actionFactories:n,triggers:i}=this.deps,{events:s}=t.state.get(),o=s.find((t=>t.eventId===e));if(!o)return null;const a=n.find((({id:e})=>e===o.action.factoryId));if(!a)return null;const{action:r,triggers:l}=o,{name:c,config:d}=r;return new drilldown_state_DrilldownState({factory:a,placeContext:this.getActionFactoryContext(),placeTriggers:i,name:c,config:d,triggers:l})}async updateEvent(e,t){const{dynamicActionManager:n,toastService:i}=this.deps,s=t.serialize();try{await n.updateEvent(e,s,t.triggers$.getValue()),i.addSuccess({title:f.title(s.name),text:f.text}),this.setRoute(["manage"])}catch(e){throw i.addError(e,{title:w}),e}}}var O=n(1);const C=i.createContext(null),T=()=>i.useContext(C),k=({children:e,...t})=>{const n=i.useMemo((()=>new drilldown_manager_state_DrilldownManagerState(t)),[]);return Object(O.jsx)(C.Provider,{value:n},e)};var M=n(9);const F=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.FlyoutFrame.CloseButtonLabel",{defaultMessage:"Close"}),A=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.FlyoutFrame.BackButtonLabel",{defaultMessage:"Back"}),D=({title:e="",footer:t,onClose:n,children:i,onBack:o,banner:a})=>{const r=(e||o)&&Object(O.jsx)(M.EuiFlyoutHeader,{hasBorder:!0},Object(O.jsx)(M.EuiTitle,{size:"s"},Object(O.jsx)(M.EuiFlexGroup,{alignItems:"center",gutterSize:"s",responsive:!1},o&&Object(O.jsx)(M.EuiFlexItem,{grow:!1},Object(O.jsx)("div",{style:{marginLeft:"-8px",marginTop:"-4px"}},Object(O.jsx)(M.EuiButtonIcon,{color:"text",onClick:o,iconType:"arrowLeft","aria-label":A}))),e&&Object(O.jsx)(M.EuiFlexItem,{grow:!0},Object(O.jsx)("h1",null,e))))),l=(n||t)&&Object(O.jsx)(M.EuiFlyoutFooter,null,Object(O.jsx)(M.EuiFlexGroup,{responsive:!1,justifyContent:"spaceBetween"},Object(O.jsx)(M.EuiFlexItem,{grow:!1},n&&Object(O.jsx)(M.EuiButtonEmpty,{iconType:"cross",onClick:n,flush:"left","data-test-subj":"flyoutCloseButton"},F)),Object(O.jsx)(M.EuiFlexItem,{grow:!1,"data-test-subj":"flyoutFooter"},t)));return Object(O.jsx)(s.a.Fragment,null,r,Object(O.jsx)(M.EuiFlyoutBody,{banner:a},i),l)};var S=n(40),I=n.n(S);const $=({children:e})=>{const t=T();return i.useEffect((()=>(t.setTitle(e),()=>{t.resetTitle()}))),null},B=()=>{const e=T().useTitle();return Object(O.jsx)(i.Fragment,null,e)},N=m.i18n.translate("xpack.uiActionsEnhanced.components.actionWizard.betaActionLabel",{defaultMessage:"Beta"}),L=m.i18n.translate("xpack.uiActionsEnhanced.components.actionWizard.betaActionTooltip",{defaultMessage:"This action is in beta and is subject to change. The design and code is less mature than official GA features and is being provided as-is with no warranties. Beta features are not subject to the support SLA of official GA features. Please help us by reporting bugs or providing other feedback."}),_=m.i18n.translate("xpack.uiActionsEnhanced.components.actionWizard.insufficientLicenseLevelTooltip",{defaultMessage:"Insufficient license level"});n(47);const z=({item:e,context:t,onSelect:n})=>{var i;const s=null===(i=e.isLicenseCompatible)||void 0===i||i,o=!s;let a=Object(O.jsx)(M.EuiKeyPadMenuItem,{className:"auaPresentablePicker__item",label:e.getDisplayName(t),"data-test-subj":`actionFactoryItem-${e.id}`,onClick:()=>n(e.id),disabled:!s,betaBadgeLabel:e.isBeta?N:void 0,betaBadgeTooltipContent:e.isBeta?L:void 0},e.getIconType(t)&&Object(O.jsx)(M.EuiIcon,{type:e.getIconType(t),size:"m"}));return o&&(a=Object(O.jsx)(M.EuiToolTip,{content:_},a)),Object(O.jsx)(M.EuiFlexItem,{grow:!1,key:e.id},a)},R={willChange:"opacity"},W=(e,t)=>t.order-e.order,P=({items:e,context:t,onSelect:n})=>{const i=s.a.useMemo((()=>{const t=e.filter((e=>{var t;return null===(t=e.isLicenseCompatible)||void 0===t||t})),n=e.filter((e=>{var t;return!(null===(t=e.isLicenseCompatible)||void 0===t||t)}));return[...t.sort(W),...n.sort(W)]}),[e]);return 0===e.length?Object(O.jsx)("div",null,"No action factories to pick from."):Object(O.jsx)(M.EuiFlexGroup,{gutterSize:"m",responsive:!1,wrap:!0,style:R},i.map((e=>Object(O.jsx)(z,{key:e.id,item:e,context:t,onSelect:n}))))},V=({actionFactories:e,context:t,onSelect:n})=>{const i=s.a.useMemo((()=>e.map((e=>({id:e.id,order:e.order,getDisplayName:t=>e.getDisplayName(t),getIconType:t=>e.getIconType(t),getDisplayNameTooltip:()=>"",isCompatible:t=>e.isCompatible(t),MenuItem:e.MenuItem,isBeta:e.isBeta,isLicenseCompatible:e.isCompatibleLicense()})))),[e]),o=s.a.useCallback((t=>{if(!n)return;const i=e.find((e=>e.id===t));i&&n(i)}),[n,e]);return Object(O.jsx)(P,{items:i,context:t,onSelect:o})},G=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownForm.drilldownAction",{defaultMessage:"Action"}),H=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownForm.getMoreActionsLinkLabel",{defaultMessage:"Get more actions"}),U=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownForm.betaActionLabel",{defaultMessage:"Beta"}),K=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownForm.betaActionTooltip",{defaultMessage:"This action is in beta and is subject to change. The design and code is less mature than official GA features and is being provided as-is with no warranties. Beta features are not subject to the support SLA of official GA features. Please help us by reporting bugs or providing other feedback."}),J=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownForm.changeButton",{defaultMessage:"Change"}),Y=Object(O.jsx)(M.EuiText,{size:"s"},Object(O.jsx)(M.EuiLink,{href:"https://www.elastic.co/subscriptions",target:"_blank",external:!0,"data-test-subj":"getMoreActionsLink"},H)),q=({name:e,icon:t,beta:n,showMoreLink:i,onChange:s})=>Object(O.jsx)(M.EuiFormRow,{label:G,fullWidth:!0,labelAppend:i&&Y},Object(O.jsx)("header",null,Object(O.jsx)(M.EuiFlexGroup,{alignItems:"center",responsive:!1,gutterSize:"s"},!!t&&Object(O.jsx)(M.EuiFlexItem,{grow:!1},Object(O.jsx)(M.EuiIcon,{type:t,size:"m"})),Object(O.jsx)(M.EuiFlexItem,{grow:!0},Object(O.jsx)(M.EuiText,null,Object(O.jsx)("h4",null,e," ",n&&Object(O.jsx)(M.EuiBetaBadge,{label:U,tooltipContent:K})))),!!s&&Object(O.jsx)(M.EuiFlexItem,{grow:!1},Object(O.jsx)(M.EuiButtonEmpty,{size:"xs",onClick:s},J))))),Q=({factory:e,context:t,constant:n})=>{const i=T(),o=s.a.useMemo((()=>e.getDisplayName(t)),[e,t]),a=s.a.useMemo((()=>e.getIconType(t)),[e,t]),r=s.a.useMemo((()=>{if(!n)return()=>i.setActionFactory(void 0)}),[i,n]);return Object(O.jsx)(q,{name:o,icon:a,beta:e.isBeta,onChange:r})},X=({})=>{const e=T(),t=e.useActionFactory(),n=s.a.useMemo((()=>e.getActionFactoryContext()),[e]),i=e.useCompatibleActionFactories(n);return t?Object(O.jsx)(Q,{factory:t,context:n}):i?Object(O.jsx)(V,{actionFactories:i,context:n,onSelect:t=>{e.setActionFactory(t)}}):Object(O.jsx)(M.EuiLoadingSpinner,{size:"m"})},Z=({children:e})=>{const t=T();return i.useEffect((()=>(t.setFooter(e),()=>{t.setFooter(null)}))),null},ee=()=>{const e=T().useFooter();return Object(O.jsx)(i.Fragment,null,e)};var te=n(14),ne=n.n(te);const ie=m.i18n.translate("xpack.uiActionsEnhanced.components.TriggerPickerItem.unknown",{defaultMessage:"Unknown"}),se=({id:e,title:t=ie,description:n,checked:i,disabled:o,onSelect:a})=>{const r=!!n&&Object(O.jsx)("div",null,Object(O.jsx)(M.EuiText,{size:"s"},Object(O.jsx)(M.EuiTextColor,{color:"subdued"},n))),l=Object(O.jsx)(s.a.Fragment,null,Object(O.jsx)(M.EuiTitle,{size:"xxs"},Object(O.jsx)("span",null,t)),r);return Object(O.jsx)(s.a.Fragment,null,Object(O.jsx)(M.EuiCheckableCard,{id:e,label:l,name:e,value:e,checked:i,disabled:o,onChange:()=>a(e),"data-test-subj":`triggerPicker-${e}`}),Object(O.jsx)(M.EuiSpacer,{size:"s"}))},oe=m.i18n.translate("xpack.uiActionsEnhanced.components.actionWizard.triggerPickerLabel",{defaultMessage:"Show option on:"}),ae=m.i18n.translate("xpack.uiActionsEnhanced.components.actionWizard.triggerPickerHelpText",{defaultMessage:"What's this?"}),re=m.i18n.translate("xpack.uiActionsEnhanced.components.actionWizard.triggerPickerHelpTooltip",{defaultMessage:"Determines when the drilldown appears in context menu"}),le=({items:e,selected:t=[],docs:n,disabled:i,onChange:s})=>Object(O.jsx)(M.EuiFormFieldset,{"data-test-subj":"triggerPicker",legend:{children:!!n&&Object(O.jsx)(M.EuiText,{size:"s"},Object(O.jsx)("h5",null,Object(O.jsx)("span",null,oe)," ",Object(O.jsx)(M.EuiToolTip,{content:re},Object(O.jsx)(M.EuiLink,{href:n,target:"blank",external:!0},ae))))},style:{maxWidth:"80%"}},e.map((e=>Object(O.jsx)(se,{key:e.id,id:e.id,title:e.title,description:e.description,checked:e.id===t[0],disabled:i,onSelect:e=>s([e])})))),ce=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownForm.nameOfDrilldown",{defaultMessage:"Name"}),de=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownForm.untitledDrilldown",{defaultMessage:"Untitled drilldown"}),ue=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownForm.trigger",{defaultMessage:"Trigger"}),ge=({name:e="",onNameChange:t,triggers:n,disabled:i,children:s})=>{if(n&&!n.items.length)return Object(O.jsx)(M.EuiCallOut,{title:"Sorry, there was an error",color:"danger",iconType:"alert"},Object(O.jsx)("p",null,"No triggers provided in ",Object(O.jsx)(M.EuiCode,null,"triggers")," prop."));const o=Object(O.jsx)(M.EuiFormRow,{label:ce},Object(O.jsx)(M.EuiFieldText,{name:"drilldown_name",placeholder:de,value:e,disabled:!t||i,onChange:t?e=>t(e.target.value):void 0,"data-test-subj":"drilldownNameInput"})),a=!!n&&n.items.length>0&&Object(O.jsx)(M.EuiFormRow,{label:ue,fullWidth:!0},Object(O.jsx)(le,ne()({},n,{disabled:i})));return Object(O.jsx)(M.EuiForm,{"data-test-subj":"DrilldownForm"},Object(O.jsx)(M.EuiSpacer,{size:"m"}),o,Object(O.jsx)(M.EuiSpacer,{size:"m"}),a,Object(O.jsx)(M.EuiSpacer,{size:"m"}),Object(O.jsx)("div",null,s))},pe=({state:e,disabled:t})=>{const n=T(),i=e.useName(),o=e.useTriggers(),a=e.useConfig(),r=s.a.useMemo((()=>({items:e.uiTriggers.map((e=>n.deps.getTrigger(e))),selected:o,onChange:e.setTriggers})),[n,o,e]),l=e.getFactoryContext();return Object(O.jsx)(ge,{name:i,onNameChange:e.setName,triggers:r,disabled:t},Object(O.jsx)(e.factory.ReactCollectConfig,{config:a,onConfig:t?()=>{}:e.setConfig,context:l}))},he=({disabled:e,onClick:t,children:n})=>Object(O.jsx)(M.EuiButton,{fill:!0,isDisabled:e,"data-test-subj":"drilldownWizardSubmit",onClick:t},n),me=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.containers.createDrilldownForm.title",{defaultMessage:"Create Drilldown",description:"Drilldowns flyout title for new drilldown form."}),be=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.containers.createDrilldownForm.primaryButton",{defaultMessage:"Create drilldown",description:"Primary button on new drilldown creation form."}),fe=()=>{const e=I()(),t=T(),n=t.getDrilldownState(),s=n.useError(),[o,a]=i.useState(!1);return Object(O.jsx)(i.Fragment,null,Object(O.jsx)($,null,me),Object(O.jsx)(X,null),!!n&&Object(O.jsx)(pe,{state:n,disabled:o}),!!n&&Object(O.jsx)(Z,null,Object(O.jsx)(he,{disabled:o||!!s,onClick:()=>{a(!0),t.createDrilldown().finally((()=>{e()&&a(!1)}))}},be)))},je=({state:e})=>{const t=T(),n=e.useName(),i=e.useTriggers(),o=e.useConfig(),a=s.a.useMemo((()=>({items:e.uiTriggers.map((e=>t.deps.getTrigger(e))),selected:i,onChange:e.setTriggers})),[t,i,e]),r=e.getFactoryContext();return Object(O.jsx)(ge,{name:n,onNameChange:e.setName,triggers:a},Object(O.jsx)(e.factory.ReactCollectConfig,{config:o,onConfig:e.setConfig,context:r}))},xe=({color:e,tooltip:t,icon:n,iconColor:i,iconTooltip:s,children:o})=>Object(O.jsx)(M.EuiFlexGroup,{responsive:!1,alignItems:"center",gutterSize:"s"},!!n&&Object(O.jsx)(M.EuiFlexItem,{grow:!1},s?Object(O.jsx)(M.EuiToolTip,{content:s},Object(O.jsx)(M.EuiIcon,{color:i,type:n})):Object(O.jsx)(M.EuiIcon,{color:i,type:n})),!!o&&Object(O.jsx)(M.EuiFlexItem,{grow:!1,style:{flexWrap:"wrap"}},t?Object(O.jsx)(M.EuiToolTip,{content:t},Object(O.jsx)(M.EuiTextColor,{color:e},o)):Object(O.jsx)(M.EuiTextColor,{color:e},o))),we=m.i18n.translate("xpack.uiActionsEnhanced.components.TriggerLineItem.incompatibleTooltip",{defaultMessage:"This trigger type not supported by this panel"}),ye=({tooltip:e,incompatible:t,children:n})=>Object(O.jsx)(xe,{color:"subdued",tooltip:e,icon:t?"alert":void 0,iconColor:t?"danger":void 0,iconTooltip:t?we:void 0},n),Ee=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTable.createDrilldownButtonLabel",{defaultMessage:"Create new"}),ve=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTable.editDrilldownButtonLabel",{defaultMessage:"Edit"}),Oe=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTable.copyDrilldownButtonLabel",{defaultMessage:"Copy"}),Ce=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTable.selectThisDrilldownCheckboxLabel",{defaultMessage:"Select this drilldown"}),Te=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTable.nameColumnTitle",{defaultMessage:"Name"}),ke=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTable.actionColumnTitle",{defaultMessage:"Action"}),Me=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTable.triggerColumnTitle",{defaultMessage:"Trigger"}),Fe=({items:e,onCreate:t,onDelete:n,onEdit:o,onCopy:a})=>{const[r,l]=Object(i.useState)([]),c=[{field:"drilldownName",name:Te,sortable:!0,"data-test-subj":"drilldownListItemName",render:(e,t)=>Object(O.jsx)("div",null,e," ",t.error&&Object(O.jsx)(M.EuiToolTip,{id:`drilldownError-${t.id}`,content:t.error},Object(O.jsx)(M.EuiIcon,{type:"alert",color:"danger",title:t.error,"aria-label":t.error,"data-test-subj":`drilldownError-${t.id}`,style:{marginLeft:"4px"}})))},{name:ke,render:e=>Object(O.jsx)(xe,{icon:e.icon,color:"subdued"},e.actionName)},{field:"triggers",name:Me,textOnly:!0,sortable:e=>e.triggers?e.triggers[0].title:"",render:(e,t)=>{var n;if(!t.triggers)return null;const i=t.triggers[0];return Object(O.jsx)(ye,{incompatible:t.triggerIncompatible,tooltip:i.description},null!==(n=i.title)&&void 0!==n?n:"unknown")}},{align:"right",render:e=>Object(O.jsx)(s.a.Fragment,null,!!o&&Object(O.jsx)(M.EuiButtonEmpty,{size:"xs",disabled:!!r.length,onClick:()=>o(e.id)},ve),!!a&&Object(O.jsx)(M.EuiButtonEmpty,{size:"xs",disabled:!!r.length,onClick:()=>a(e.id)},Oe))}].filter(Boolean);return Object(O.jsx)(s.a.Fragment,null,Object(O.jsx)(M.EuiInMemoryTable,{items:e,itemId:"id",columns:c,isSelectable:!0,responsive:!1,selection:{onSelectionChange:e=>{l(e.map((e=>e.id)))},selectableMessage:()=>Ce},rowProps:{"data-test-subj":"listManageDrilldownsItem"},hasActions:!0,sorting:{sort:{field:"drilldownName",direction:"asc"}}}),Object(O.jsx)(M.EuiSpacer,null),!!t&&!r.length&&Object(O.jsx)(M.EuiButton,{fill:!0,onClick:()=>t()},Ee),!!n&&r.length>0&&Object(O.jsx)(M.EuiButton,{color:"danger",fill:!0,onClick:()=>n(r),"data-test-subj":"listManageDeleteDrilldowns"},(d=r.length,m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTable.deleteDrilldownsButtonLabel",{defaultMessage:"Delete ({count})",values:{count:d}}))));var d},Ae=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.containers.drilldownList.copyingNotification.dismiss",{defaultMessage:"Dismiss",description:"Dismiss button in cloning notification callout."}),De=({count:e=1})=>{const[t,n]=i.useState(!1);if(t)return null;const s=Object(O.jsx)(i.Fragment,null,(e=>m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.containers.drilldownList.copyingNotification.body",{defaultMessage:"{count, number} {count, plural, one {drilldown} other {drilldowns}} copied.",description:"Title of notification show when one or more drilldowns were copied.",values:{count:e}}))(e)," ",Object(O.jsx)(M.EuiLink,{onClick:()=>n(!0)},Ae));return Object(O.jsx)(i.Fragment,null,Object(O.jsx)(M.EuiCallOut,{title:s,color:"success",size:"s",iconType:"check"}),Object(O.jsx)(M.EuiSpacer,null))},Se=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTemplateTable.selectableMessage",{defaultMessage:"Select this template"}),Ie=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTemplateTable.nameColumnTitle",{defaultMessage:"Name",description:"Title of the first column in drilldown template cloning table."}),$e=(m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTemplateTable.sourceColumnTitle",{defaultMessage:"Panel",description:"Column title which describes from where the drilldown is cloned."}),m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTemplateTable.actionColumnTitle",{defaultMessage:"Action"})),Be=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTemplateTable.triggerColumnTitle",{defaultMessage:"Trigger"}),Ne=m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTemplateTable.singleItemCopyAction",{defaultMessage:"Copy",description:'"Copy" action button label in drilldown template cloning table last column.'}),Le=({items:e,onCreate:t,onClone:n})=>{const[o,a]=Object(i.useState)([]),r=[{field:"name",name:Ie,sortable:!0,render:(e,t)=>Object(O.jsx)("div",{style:{display:"block"}},Object(O.jsx)("div",{style:{display:"block"}},t.name),Object(O.jsx)(M.EuiText,{size:"xs",color:"subdued"},t.description))},{name:$e,render:e=>Object(O.jsx)(xe,{icon:e.actionIcon||"empty",color:"subdued"},e.actionName)},{field:"trigger",name:Be,sortable:!0,render:(e,t)=>Object(O.jsx)(ye,{incompatible:t.triggerIncompatible},t.trigger)},{align:"right",render:e=>!!t&&Object(O.jsx)(M.EuiButtonEmpty,{size:"xs",disabled:!!o.length,onClick:()=>t(e.id)},Ne)}];return Object(O.jsx)(s.a.Fragment,null,Object(O.jsx)(M.EuiInMemoryTable,{itemId:"id",tableLayout:"auto",items:e,columns:r,isSelectable:!!n,responsive:!1,search:{box:{incremental:!0},defaultQuery:""},sorting:{sort:{field:"nameCol",direction:"asc"}},selection:{onSelectionChange:e=>{a(e.map((e=>e.id)))},selectableMessage:()=>Se},hasActions:!0}),Object(O.jsx)(M.EuiSpacer,null),!!n&&!!o.length&&Object(O.jsx)(M.EuiButton,{fill:!0,onClick:()=>n(o)},(l=o.length,m.i18n.translate("xpack.uiActionsEnhanced.components.DrilldownTemplateTable.copyButtonLabel",{defaultMessage:"Copy ({count})",description:"Label of drilldown template table bottom copy button.",values:{count:l}}))));var l},_e=m.i18n.translate("xpack.uiActionsEnhanced.drilldownManager.containers.TemplatePicker.label",{defaultMessage:"Copy existing drilldown",description:"Label above template picker table."}),ze=({items:e})=>{const t=T(),n=i.useMemo((()=>e.map((e=>{const n=t.deps.actionFactories.find((({id:t})=>t===e.factoryId)),i=t.deps.getTrigger(e.triggers[0]),s={id:e.id,name:e.name,icon:e.icon,description:e.description,triggerIncompatible:!t.deps.triggers.find((e=>e===i.id))};if(n){const e=t.getActionFactoryContext();s.actionName=n.getDisplayName(e),s.actionIcon=n.getIconType(e)}return i&&(s.trigger=i.title),s}))),[t,e]);return Object(O.jsx)(i.Fragment,null,Object(O.jsx)(M.EuiTitle,{size:"xs"},Object(O.jsx)("h4",null,_e)),Object(O.jsx)(M.EuiSpacer,{size:"s"}),Object(O.jsx)(Le,{items:n,onCreate:t.onCreateFromTemplate,onClone:t.onClone}))},Re=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.containers.DrilldownManager.createNew",{defaultMessage:"Create new"}),We=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.containers.DrilldownManager.manage",{defaultMessage:"Manage"}),Pe=[{id:"create",name:Re,content:Object(O.jsx)(i.Fragment,null,Object(O.jsx)(M.EuiSpacer,null),Object(O.jsx)((({})=>{const e=T(),t=e.useActionFactory(),n=e.getDrilldownState();let i=null;return t||(i=null),n&&(i=Object(O.jsx)(je,{state:n})),Object(O.jsx)(s.a.Fragment,null,Object(O.jsx)(X,null),i)}),null),Object(O.jsx)(M.EuiSpacer,{size:"l"}),Object(O.jsx)((()=>{const e=T(),{templates:t}=e.deps;return t&&t.length?Object(O.jsx)(ze,{items:t}):null}),null))},{id:"manage",name:We,content:Object(O.jsx)(i.Fragment,null,Object(O.jsx)(M.EuiSpacer,null),Object(O.jsx)((({})=>{const e=T(),t=e.useEvents(),n=i.useMemo((()=>e.lastCloneRecord&&e.lastCloneRecord.time>Date.now()-5e3?e.lastCloneRecord.templateIds.length:0),[]);i.useEffect((()=>{e.lastCloneRecord=null}));const s=!!n&&Object(O.jsx)(De,{count:n});return Object(O.jsx)(i.Fragment,null,s,Object(O.jsx)(Fe,{items:t,onDelete:e.onDelete,onEdit:t=>{e.setRoute(["manage",t])},onCopy:e.onCreateFromDrilldown}))}),null))}],Ve=({})=>{const e=T(),t=e.useRoute();return Object(O.jsx)(M.EuiTabbedContent,{tabs:Pe,selectedTab:Pe.find((({id:e})=>e===t[0])),onTabClick:({id:t})=>e.setRoute([t])})},Ge=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.containers.editDrilldownForm.title",{defaultMessage:"Edit Drilldown",description:"Drilldowns flyout title for edit drilldown form."}),He=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.containers.editDrilldownForm.primaryButton",{defaultMessage:"Save",description:"Primary button on new drilldown edit form."}),Ue=({eventId:e})=>{const t=I()(),n=T(),s=i.useMemo((()=>n.createEventDrilldownState(e)),[n,e]),[o,a]=i.useState(!1);return s?Object(O.jsx)(i.Fragment,null,Object(O.jsx)($,null,Ge),Object(O.jsx)(Q,{constant:!0,factory:s.factory,context:s.getFactoryContext()}),!!s&&Object(O.jsx)(pe,{state:s,disabled:o}),!!s&&Object(O.jsx)(Z,null,Object(O.jsx)(he,{disabled:o,onClick:()=>{a(!0),n.updateEvent(e,s).finally((()=>{t()&&a(!1)}))}},He))):null},Ke=({})=>{const e=T().useRoute();return"new"===e[0]&&e[1]?Object(O.jsx)(fe,null):"manage"===e[0]&&e[1]?Object(O.jsx)(Ue,{eventId:e[1]}):Object(O.jsx)(Ve,null)},Je=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.DrilldownHelloBar.helpText",{defaultMessage:"Drilldowns enable you to define new behaviors for interacting with panels. You can add multiple actions and override the default filter."}),Ye=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.DrilldownHelloBar.viewDocsLinkLabel",{defaultMessage:"View docs"}),qe=m.i18n.translate("xpack.uiActionsEnhanced.drilldowns.components.DrilldownHelloBar.hideHelpButtonLabel",{defaultMessage:"Hide"}),Qe=({docsLink:e,onHideClick:t})=>Object(O.jsx)(M.EuiCallOut,{"data-test-subj":"drilldownsWelcomeMessage"},Object(O.jsx)(M.EuiFlexGroup,{responsive:!1},Object(O.jsx)(M.EuiFlexItem,{grow:!1},Object(O.jsx)(M.EuiIcon,{type:"help"})),Object(O.jsx)(M.EuiFlexItem,{grow:1},Object(O.jsx)(M.EuiText,{size:"s"},Object(O.jsx)(M.EuiTextColor,{color:"subdued"},Je)),e&&Object(O.jsx)(s.a.Fragment,null,Object(O.jsx)(M.EuiSpacer,{size:"xs"}),Object(O.jsx)(M.EuiLink,{href:e,target:"_blank",external:!0},Ye))),!!t&&Object(O.jsx)(M.EuiFlexItem,{grow:!1},Object(O.jsx)(M.EuiButtonEmpty,{size:"xs",onClick:t},qe)))),Xe=({})=>{const e=T();return e.useWelcomeMessage()?null:Object(O.jsx)(Qe,{docsLink:e.deps.docsLink,onHideClick:e.hideWelcomeMessage})},Ze=({})=>{const e=T(),t=e.useRoute(),n=t.length<2?void 0:()=>e.setRoute(t.slice(0,t.length-1));return Object(O.jsx)(D,{title:Object(O.jsx)(B,null),banner:Object(O.jsx)(Xe,null),footer:Object(O.jsx)(ee,null),onClose:e.close,onBack:n},Object(O.jsx)(Ke,null))},et=e=>Object(O.jsx)(k,e,Object(O.jsx)(Ze,null))}}]);