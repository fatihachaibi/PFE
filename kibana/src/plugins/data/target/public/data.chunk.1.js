(window.data_bundle_jsonpfunction=window.data_bundle_jsonpfunction||[]).push([[1],{107:function(e,t,s){"use strict";s.r(t),s.d(t,"SearchSessionsMgmtApp",(function(){return application_SearchSessionsMgmtApp})),s.d(t,"renderApp",(function(){return G}));var a=s(75),n=s(0),o=s(5),i=s.n(o),r=s(7),c=s(6),l=s(16),u=s(12),d=s.n(u),m=s(48),h=s(32),g=s(8);const j=e=>{const{searchSession:t,api:s,onActionDismiss:a}=e,{name:o,id:i}=t,[r,c]=Object(u.useState)(!1),d=n.i18n.translate("data.mgmt.searchSessions.cancelModal.title",{defaultMessage:"Delete search session"}),m=n.i18n.translate("data.mgmt.searchSessions.cancelModal.deleteButton",{defaultMessage:"Delete"}),h=n.i18n.translate("data.mgmt.searchSessions.cancelModal.cancelButton",{defaultMessage:"Cancel"}),j=n.i18n.translate("data.mgmt.searchSessions.cancelModal.message",{defaultMessage:"Deleting the search session '{name}' deletes all cached results.",values:{name:o}});return Object(g.jsx)(l.EuiConfirmModal,{title:d,onCancel:a,onConfirm:async()=>{c(!0),await s.sendCancel(i),a()},confirmButtonText:m,confirmButtonDisabled:r,cancelButtonText:h,defaultFocusedButton:"confirm",buttonColor:"danger"},j)};var p=s(113),S=s.n(p);const b=({...e})=>{const{searchSession:t,api:s,onActionDismiss:a}=e,{id:o,name:r,expires:c}=t,[d,m]=Object(u.useState)(!1),h=i.a.duration(s.getExtendByDuration()),j=i()(c).add(h),p=n.i18n.translate("data.mgmt.searchSessions.extendModal.title",{defaultMessage:"Extend search session expiration"}),S=n.i18n.translate("data.mgmt.searchSessions.extendModal.extendButton",{defaultMessage:"Extend expiration"}),b=n.i18n.translate("data.mgmt.searchSessions.extendModal.dontExtendButton",{defaultMessage:"Cancel"}),f=n.i18n.translate("data.mgmt.searchSessions.extendModal.extendMessage",{defaultMessage:"The search session '{name}' expiration would be extended until {newExpires}.",values:{name:r,newExpires:j.toLocaleString()}});return Object(g.jsx)(l.EuiConfirmModal,{title:p,onCancel:a,onConfirm:async()=>{m(!0),await s.sendExtend(o,`${j.toISOString()}`),m(!1),a()},confirmButtonText:S,confirmButtonDisabled:d,cancelButtonText:b,defaultFocusedButton:"confirm",buttonColor:"primary"},f)};s(114);const f=({uiSettings:e,searchSession:t})=>{const{Provider:s}=Object(h.createKibanaReactContext)({uiSettings:e});return Object(g.jsx)(s,null,Object(g.jsx)(l.EuiFlyoutHeader,{hasBorder:!0},Object(g.jsx)(l.EuiTitle,{size:"m"},Object(g.jsx)("h2",{id:"flyoutTitle"},Object(g.jsx)(m.FormattedMessage,{id:"data.sessions.management.flyoutTitle",defaultMessage:"Inspect search session"})))),Object(g.jsx)(l.EuiFlyoutBody,{className:"searchSessionsFlyout","data-test-subj":"searchSessionsFlyout"},Object(g.jsx)(l.EuiText,null,Object(g.jsx)(l.EuiText,{size:"xs"},Object(g.jsx)("p",null,Object(g.jsx)(m.FormattedMessage,{id:"data.sessions.management.flyoutText",defaultMessage:"Configuration for this search session"}))),Object(g.jsx)(l.EuiSpacer,null),Object(g.jsx)(u.Fragment,null,Object(g.jsx)(h.CodeEditor,{languageId:"json",value:JSON.stringify(t.initialState,null,2),options:{readOnly:!0,lineNumbers:"off",fontSize:12,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",automaticLayout:!0}})))))};let x;!function(e){e.INSPECT="inspect",e.EXTEND="extend",e.DELETE="delete",e.RENAME="rename"}(x||(x={}));const M=({onActionDismiss:e,...t})=>{const{api:s,searchSession:a}=t,{id:o,name:i}=a,[r,c]=Object(u.useState)(!1),[d,m]=Object(u.useState)(i),h=n.i18n.translate("data.mgmt.searchSessions.renameModal.title",{defaultMessage:"Edit search session name"}),j=n.i18n.translate("data.mgmt.searchSessions.renameModal.renameButton",{defaultMessage:"Save"}),p=n.i18n.translate("data.mgmt.searchSessions.renameModal.cancelButton",{defaultMessage:"Cancel"}),S=n.i18n.translate("data.mgmt.searchSessions.renameModal.searchSessionNameInputLabel",{defaultMessage:"Search session name"}),b=d&&i!==d;return Object(g.jsx)(l.EuiModal,{onClose:e,initialFocus:"[name=newName]"},Object(g.jsx)(l.EuiModalHeader,null,Object(g.jsx)(l.EuiModalHeaderTitle,null,h)),Object(g.jsx)(l.EuiModalBody,null,Object(g.jsx)(l.EuiForm,null,Object(g.jsx)(l.EuiFormRow,{label:S},Object(g.jsx)(l.EuiFieldText,{name:"newName",placeholder:i,value:d,onChange:e=>m(e.target.value)})))),Object(g.jsx)(l.EuiModalFooter,null,Object(g.jsx)(l.EuiButtonEmpty,{onClick:e,"data-test-subj":"cancelEditName"},p),Object(g.jsx)(l.EuiButton,{disabled:!b,onClick:async()=>{b&&(c(!0),await s.sendRename(o,d),c(!1),e())},fill:!0,isLoading:r},j)))},E=({api:e,onActionComplete:t,session:s,core:a})=>{const[o,i]=Object(u.useState)(!1),r=()=>{i(!1)},c=s.actions||[],d=[{id:0,items:c.reduce(((n,o)=>{const i=((e,t,s,a)=>{switch(t){case x.INSPECT:return((e,t,s)=>({iconType:"document",label:Object(g.jsx)(m.FormattedMessage,{id:"data.mgmt.searchSessions.flyoutTitle","aria-label":"Inspect",defaultMessage:"Inspect"}),onClick:async()=>{const e=Object(g.jsx)(f,{uiSettings:s.uiSettings,searchSession:t}),a=s.overlays.openFlyout(Object(h.toMountPoint)(e,{theme$:s.theme.theme$}));await a.onClose}}))(0,s,a);case x.DELETE:return((e,t,s)=>({iconType:"crossInACircleFilled",label:Object(g.jsx)(m.FormattedMessage,{id:"data.mgmt.searchSessions.actionDelete",defaultMessage:"Delete"}),onClick:async()=>{const a=s.overlays.openModal(Object(h.toMountPoint)(Object(g.jsx)(j,{onActionDismiss:()=>null==a?void 0:a.close(),searchSession:t,api:e}),{theme$:s.theme.theme$}));await a.onClose}}))(e,s,a);case x.EXTEND:return((e,t,s)=>({iconType:S.a,label:Object(g.jsx)(m.FormattedMessage,{id:"data.mgmt.searchSessions.actionExtend",defaultMessage:"Extend"}),onClick:async()=>{const a=s.overlays.openModal(Object(h.toMountPoint)(Object(g.jsx)(b,{onActionDismiss:()=>null==a?void 0:a.close(),searchSession:t,api:e}),{theme$:s.theme.theme$}));await a.onClose}}))(e,s,a);case x.RENAME:return((e,t,s)=>({iconType:"pencil",label:Object(g.jsx)(m.FormattedMessage,{id:"data.mgmt.searchSessions.actionRename",defaultMessage:"Edit name"}),onClick:async()=>{const a=s.overlays.openModal(Object(h.toMountPoint)(Object(g.jsx)(M,{onActionDismiss:()=>null==a?void 0:a.close(),api:e,searchSession:t}),{theme$:s.theme.theme$}));await a.onClose}}))(e,s,a);default:console.error(`Unknown action: ${t}`)}return null})(e,o,s,a);if(i){const{label:e,iconType:s,onClick:a}=i;return c.length>1&&o===x.DELETE&&n.push({isSeparator:!0,key:"separadorable"}),[...n,{key:`action-${o}`,name:e,icon:s,"data-test-subj":`sessionManagementPopoverAction-${o}`,onClick:async()=>{r(),await a(),t()}}]}return n}),[])}];return c.length?Object(g.jsx)(l.EuiPopover,{id:`popover-${s.id}`,button:Object(g.jsx)(l.EuiToolTip,{content:n.i18n.translate("data.mgmt.searchSessions.actions.tooltip.moreActions",{defaultMessage:"More actions"})},Object(g.jsx)(l.EuiButtonIcon,{"aria-label":n.i18n.translate("data.mgmt.searchSessions.ariaLabel.moreActions",{defaultMessage:"More actions"}),color:"text",iconType:"boxesHorizontal",onClick:()=>{i(!o)}})),isOpen:o,closePopover:r,anchorPosition:"downLeft",panelPaddingSize:"s"},Object(g.jsx)(l.EuiContextMenu,{initialPanelId:0,panels:d})):null};var O=s(3);function y(e,t,s){try{const a=e.get(t);return null==a?void 0:a.getRedirectUrl(s)}catch(e){console.error("Could not create URL from restoreState"),console.error(e)}}const C=(e,t)=>async t=>{const{name:s,appId:a,created:n,expires:o,locatorId:r,initialState:c,restoreState:l,idMapping:u,version:d}=t.attributes,m=function(e){switch(e.status){case O.SearchSessionStatus.COMPLETE:case O.SearchSessionStatus.IN_PROGRESS:return i()().diff(i()(e.expires),"ms")>0?O.SearchSessionStatus.EXPIRED:e.status}return e.status}(t.attributes),h=function(e){const t=[];return t.push(x.INSPECT),t.push(x.RENAME),e!==O.SearchSessionStatus.IN_PROGRESS&&e!==O.SearchSessionStatus.COMPLETE||(t.push(x.EXTEND),t.push(x.DELETE)),e===O.SearchSessionStatus.EXPIRED&&t.push(x.DELETE),t}(m);c&&delete c.searchSessionId;const g=await y(e,r,c),j=await y(e,r,l);return{id:t.id,name:s,appId:a,created:n,expires:o,status:m,actions:h,restoreUrl:j,reloadUrl:g,initialState:c,restoreState:l,numSearches:Object.keys(u).length,version:d}};class api_SearchSessionsMgmtAPI{constructor(e,t,s){this.sessionsClient=e,this.config=t,this.deps=s}async fetchTableData(){const e=this.config.management,t=i.a.duration(e.refreshTimeout),s=Object(r.from)(this.sessionsClient.find({page:1,perPage:e.maxSessions,sortField:"created",sortOrder:"asc",searchFields:["persisted"],search:"true"})),a=Object(r.timer)(t.asMilliseconds()).pipe(Object(c.tap)((()=>{this.deps.notifications.toasts.addDanger(n.i18n.translate("data.mgmt.searchSessions.api.fetchTimeout",{defaultMessage:"Fetching the Search Session info timed out after {timeout} seconds",values:{timeout:t.asSeconds()}}))})),Object(c.mapTo)(null));try{const e=await Object(r.race)(s,a).toPromise();if(e&&e.saved_objects){const t=e.saved_objects;return await Promise.all(t.map(C(this.deps.locators,this.config)))}}catch(e){console.error(e),this.deps.notifications.toasts.addError(e,{title:n.i18n.translate("data.mgmt.searchSessions.api.fetchError",{defaultMessage:"Failed to refresh the page!"})})}return[]}reloadSearchSession(e){var t;null===(t=this.deps.usageCollector)||void 0===t||t.trackSessionReloaded(),this.deps.application.navigateToUrl(e)}getExtendByDuration(){return this.config.defaultExpiration}async sendCancel(e){var t;null===(t=this.deps.usageCollector)||void 0===t||t.trackSessionDeleted();try{await this.sessionsClient.delete(e),this.deps.notifications.toasts.addSuccess({title:n.i18n.translate("data.mgmt.searchSessions.api.deleted",{defaultMessage:"The search session was deleted."})})}catch(e){this.deps.notifications.toasts.addError(e,{title:n.i18n.translate("data.mgmt.searchSessions.api.deletedError",{defaultMessage:"Failed to delete the search session!"})})}}async sendExtend(e,t){var s;null===(s=this.deps.usageCollector)||void 0===s||s.trackSessionExtended();try{await this.sessionsClient.extend(e,t),this.deps.notifications.toasts.addSuccess({title:n.i18n.translate("data.mgmt.searchSessions.api.extended",{defaultMessage:"The search session was extended."})})}catch(e){this.deps.notifications.toasts.addError(e,{title:n.i18n.translate("data.mgmt.searchSessions.api.extendError",{defaultMessage:"Failed to extend the search session!"})})}}async sendRename(e,t){try{await this.sessionsClient.rename(e,t),this.deps.notifications.toasts.addSuccess({title:n.i18n.translate("data.mgmt.searchSessions.api.rename",{defaultMessage:"The search session was renamed"})})}catch(e){this.deps.notifications.toasts.addError(e,{title:n.i18n.translate("data.mgmt.searchSessions.api.renameError",{defaultMessage:"Failed to rename the search session"})})}}}var T=s(2),v=s.n(T);class documentation_AsyncSearchIntroDocumentation{constructor(e){v()(this,"docUrl","");const{links:t}=e;this.docUrl=t.search.sessions}getElasticsearchDocLink(){return`${this.docUrl}`}}var I=s(68),w=s.n(I),D=s(105),A=s(119),L=s.n(A),R=s(121),F=s.n(R);const k=({children:e,...t})=>Object(g.jsx)(l.EuiText,w()({size:"s"},t),e);var _=s(1);const N="D MMM, YYYY, HH:mm:ss",P=(e,t)=>{if(null==e)throw new Error("Invalid date string!");let s;return s="Browser"===t?i.a.utc(e).tz(i.a.tz.guess()).format(N):i()(e).tz(t).format(N),s},B=e=>{switch(e){case O.SearchSessionStatus.IN_PROGRESS:return n.i18n.translate("data.mgmt.searchSessions.status.label.inProgress",{defaultMessage:"In progress"});case O.SearchSessionStatus.EXPIRED:return n.i18n.translate("data.mgmt.searchSessions.status.label.expired",{defaultMessage:"Expired"});case O.SearchSessionStatus.CANCELLED:return n.i18n.translate("data.mgmt.searchSessions.status.label.cancelled",{defaultMessage:"Cancelled"});case O.SearchSessionStatus.COMPLETE:return n.i18n.translate("data.mgmt.searchSessions.status.label.complete",{defaultMessage:"Complete"});case O.SearchSessionStatus.ERROR:return n.i18n.translate("data.mgmt.searchSessions.status.label.error",{defaultMessage:"Error"});default:return console.error(`Unknown status ${e}`),e}},z=e=>{try{const t=(({now:e,session:t,timezone:s})=>{let a;switch(a=t.expires?P(t.expires,s):n.i18n.translate("data.mgmt.searchSessions.status.expireDateUnknown",{defaultMessage:"unknown"}),t.status){case O.SearchSessionStatus.IN_PROGRESS:try{return{textColor:"default",icon:Object(g.jsx)(l.EuiLoadingSpinner,null),label:Object(g.jsx)(k,null,B(t.status)),toolTipContent:n.i18n.translate("data.mgmt.searchSessions.status.message.createdOn",{defaultMessage:"Expires on {expireDate}",values:{expireDate:a}})}}catch(e){throw console.error(e),new Error(`Could not instantiate a createdDate object from: ${t.created}`)}case O.SearchSessionStatus.EXPIRED:try{const e=n.i18n.translate("data.mgmt.searchSessions.status.message.expiredOn",{defaultMessage:"Expired on {expireDate}",values:{expireDate:a}});return{icon:Object(g.jsx)(l.EuiIcon,{color:"#9AA",type:"clock"}),label:Object(g.jsx)(k,null,B(t.status)),toolTipContent:e}}catch(e){throw console.error(e),new Error(`Could not instantiate an expiration Date object from: ${t.expires}`)}case O.SearchSessionStatus.CANCELLED:return{icon:Object(g.jsx)(l.EuiIcon,{color:"#9AA",type:"crossInACircleFilled"}),label:Object(g.jsx)(k,null,B(t.status)),toolTipContent:n.i18n.translate("data.mgmt.searchSessions.status.message.cancelled",{defaultMessage:"Cancelled by user"})};case O.SearchSessionStatus.ERROR:return{textColor:"danger",icon:Object(g.jsx)(l.EuiIcon,{color:"danger",type:"crossInACircleFilled"}),label:Object(g.jsx)(k,null,B(t.status)),toolTipContent:n.i18n.translate("data.mgmt.searchSessions.status.message.error",{defaultMessage:"Error: {error}",values:{error:t.error||"unknown"}})};case O.SearchSessionStatus.COMPLETE:try{const e=n.i18n.translate("data.mgmt.searchSessions.status.expiresOn",{defaultMessage:"Expires on {expireDate}",values:{expireDate:a}});return{textColor:"success",icon:Object(g.jsx)(l.EuiIcon,{color:"success",type:"checkInCircleFilled"}),label:Object(g.jsx)(k,null,B(t.status)),toolTipContent:e}}catch(e){throw console.error(e),new Error(`Could not instantiate an expiration Date object for completed session from: ${t.expires}`)}return null;default:throw new Error(`Unknown status: ${t.status}`)}})(e),{session:s}=e;if(t){const{toolTipContent:e}=t;let a=t.icon,n=t.label;return a&&e&&(a=Object(g.jsx)(l.EuiToolTip,{content:e},a)),e&&(n=Object(g.jsx)(l.EuiToolTip,{content:e},Object(g.jsx)(k,{"data-test-subj":"sessionManagementStatusTooltip"},t.label))),Object(g.jsx)(l.EuiFlexGroup,{gutterSize:"s",alignItems:"center"},Object(g.jsx)(l.EuiFlexItem,{grow:!1},a),Object(g.jsx)(l.EuiFlexItem,{grow:!1},Object(g.jsx)(k,{color:t.textColor,"data-test-subj":"sessionManagementStatusLabel","data-test-status":s.status},n)))}}catch(e){console.error(e)}return Object(g.jsx)(k,null,e.session.status)},U=e=>{if("ml"===e)return n.i18n.translate("data.mgmt.searchSessions.table.mlAppName",{defaultMessage:"Machine Learning"})},$=(e,t,s,a,o,r,c)=>[{field:"appId",name:n.i18n.translate("data.mgmt.searchSessions.table.headerType",{defaultMessage:"App"}),sortable:!0,render:(e,{id:t})=>{var s;const a=`${(e=>"dashboards"===e?"dashboard":"ml"===e?"machineLearning":e)(e)}`;return Object(g.jsx)(l.EuiToolTip,{content:null!==(s=U(e))&&void 0!==s?s:Object(_.capitalize)(a)},Object(g.jsx)(l.EuiIcon,{"data-test-subj":"sessionManagementAppIcon","data-test-app-id":a,type:`${a}App`}))}},{field:"name",name:n.i18n.translate("data.mgmt.searchSessions.table.headerName",{defaultMessage:"Name"}),sortable:!0,width:"20%",render:(t,{restoreUrl:s,reloadUrl:a,status:n,version:o})=>{const i=function(e){return e===O.SearchSessionStatus.IN_PROGRESS||e===O.SearchSessionStatus.COMPLETE}(n),u=i?s:a,j=i?c.trackSessionViewRestored:c.trackSessionReloaded,p=i?null:Object(g.jsx)(d.a.Fragment,null," ",Object(g.jsx)(l.EuiIconTip,{type:"alert",content:Object(g.jsx)(m.FormattedMessage,{id:"data.mgmt.searchSessions.table.notRestorableWarning",defaultMessage:"The search session will be executed again. You can then save it for future use."})})),S=i&&o!==r?Object(g.jsx)(d.a.Fragment,null," ",Object(g.jsx)(l.EuiIconTip,{type:"alert",iconProps:{"data-test-subj":"versionIncompatibleWarningTestSubj"},content:Object(g.jsx)(m.FormattedMessage,{id:"data.mgmt.searchSessions.table.versionIncompatibleWarning",defaultMessage:"This search session was created in a Kibana instance running a different version. It may not restore correctly."})})):null;return Object(g.jsx)(h.RedirectAppLinks,{application:e.application},Object(g.jsx)(l.EuiLink,{href:u,onClick:()=>null==j?void 0:j(),"data-test-subj":"sessionManagementNameCol"},Object(g.jsx)(k,null,t,p,S)))}},{field:"numSearches",name:n.i18n.translate("data.mgmt.searchSessions.table.numSearches",{defaultMessage:"# Searches"}),sortable:!0,render:(e,t)=>Object(g.jsx)(k,{color:"subdued","data-test-subj":"sessionManagementNumSearchesCol"},e)},{field:"status",name:n.i18n.translate("data.mgmt.searchSessions.table.headerStatus",{defaultMessage:"Status"}),sortable:!0,render:(e,t)=>Object(g.jsx)(z,{session:t,timezone:a})},{field:"created",name:n.i18n.translate("data.mgmt.searchSessions.table.headerStarted",{defaultMessage:"Created"}),sortable:!0,render:(e,{id:t})=>{try{const t=P(e,a);return Object(g.jsx)(k,{color:"subdued","data-test-subj":"sessionManagementCreatedCol"},t)}catch(t){return console.error(t),Object(g.jsx)(k,null,e)}}},{field:"expires",name:n.i18n.translate("data.mgmt.searchSessions.table.headerExpiration",{defaultMessage:"Expiration"}),sortable:!0,render:(e,{id:t,status:s})=>{if(e&&s!==O.SearchSessionStatus.EXPIRED&&s!==O.SearchSessionStatus.CANCELLED&&s!==O.SearchSessionStatus.ERROR)try{const t=P(e,a);return Object(g.jsx)(k,{color:"subdued","data-test-subj":"sessionManagementExpiresCol"},t)}catch(t){return console.error(t),Object(g.jsx)(k,null,e)}return Object(g.jsx)(k,{color:"subdued","data-test-subj":"sessionManagementExpiresCol"},"--")}},{field:"status",name:"",sortable:!1,render:(e,{expires:t})=>{const a=((e,t)=>{const s=i.a.utc().valueOf(),a=i.a.utc(t).valueOf(),o=i.a.duration(a-s),r=Math.floor(o.asDays()),c=Math.ceil(i.a.duration(e.management.expiresSoonWarning).asDays());let l=n.i18n.translate("data.mgmt.searchSessions.status.expiresSoonInDays",{defaultMessage:"Expires in {numDays} days",values:{numDays:r}}),u=n.i18n.translate("data.mgmt.searchSessions.status.expiresSoonInDaysTooltip",{defaultMessage:"{numDays} days",values:{numDays:r}});if(0===r){const e=Math.floor(o.asHours());l=n.i18n.translate("data.mgmt.searchSessions.status.expiresSoonInHours",{defaultMessage:"This session expires in {numHours} hours",values:{numHours:e}}),u=n.i18n.translate("data.mgmt.searchSessions.status.expiresSoonInHoursTooltip",{defaultMessage:"{numHours} hours",values:{numHours:e}})}if(o.valueOf()>0&&r<=c)return{toolTipContent:l,statusContent:u}})(s,t);if(a){const{toolTipContent:e,statusContent:t}=a;return Object(g.jsx)(l.EuiToolTip,{content:e},Object(g.jsx)(l.EuiBadge,{color:"warning","data-test-subj":"sessionManagementStatusCol"},t))}return Object(g.jsx)(k,null)}},{field:"actions",name:"",sortable:!1,render:(s,a)=>{if(s&&s.length)return Object(g.jsx)(l.EuiFlexGroup,{gutterSize:"l",justifyContent:"flexEnd",alignItems:"flexEnd"},Object(g.jsx)(l.EuiFlexItem,{grow:!1,"data-test-subj":"sessionManagementActionsCol"},Object(g.jsx)(E,{api:t,key:`popkey-${a.id}`,session:a,core:e,onActionComplete:o})))}}],H=e=>({type:"field_value_selection",name:n.i18n.translate("data.mgmt.searchSessions.search.filterApp",{defaultMessage:"App"}),field:"appId",multiSelect:"or",options:e.reduce(((e,{appId:t})=>e.find((e=>e.value===t))?e:[...e,{value:t,view:Object(_.capitalize)(t)}]),[])}),Y=e=>({type:"field_value_selection",name:n.i18n.translate("data.mgmt.searchSessions.search.filterStatus",{defaultMessage:"Status"}),field:"status",multiSelect:"or",options:e.reduce(((e,t)=>{const{status:s}=t;if(!e.find((e=>e.value===s))){const a=Object(g.jsx)(k,null,B(t.status));return[...e,{value:s,view:a}]}return e}),[])});function W({core:e,api:t,timezone:s,config:a,kibanaVersion:n,searchUsageCollector:o,...r}){const[c,d]=Object(u.useState)([]),[h,j]=Object(u.useState)(!1),[p,S]=Object(u.useState)(!1),[b,f]=Object(u.useState)({pageIndex:0}),x=Object(u.useRef)(),M=Object(u.useMemo)((()=>i.a.duration(a.management.refreshInterval).asMilliseconds()),[a.management.refreshInterval]);L()((()=>{S(h)}),250,[h]);const E=Object(u.useCallback)((async()=>{j(!0);const e=e=>{d(e)};x.current=e;let s=[];try{s=await t.fetchTableData()}catch(e){}x.current===e&&(e(s),j(!1))}),[t]);Object(u.useEffect)((()=>{E(),o.trackSessionsListLoaded()}),[E,o]),F()(E,M);const y={box:{incremental:!0},filters:[Y(c),H(c)],toolsRight:Object(g.jsx)(k,null,Object(g.jsx)(l.EuiButton,{fill:!0,iconType:"refresh",onClick:E,disabled:p,isLoading:p,"data-test-subj":"sessionManagementRefreshBtn"},Object(g.jsx)(m.FormattedMessage,{id:"data.mgmt.searchSessions.search.tools.refresh",defaultMessage:"Refresh"})))};return Object(g.jsx)(l.EuiInMemoryTable,w()({},r,{id:O.SEARCH_SESSIONS_TABLE_ID,"data-test-subj":O.SEARCH_SESSIONS_TABLE_ID,rowProps:e=>({"data-test-subj":"searchSessionsRow","data-test-search-session-id":`id-${e.id}`}),columns:$(e,t,a,s,(()=>{E()}),n,o),items:c,pagination:b,search:y,sorting:{sort:{field:"created",direction:"desc"}},onTableChange:({page:{index:e}})=>{f({pageIndex:e})},tableLayout:"auto"}))}function X({documentation:e,...t}){return Object(g.jsx)(d.a.Fragment,null,Object(g.jsx)(l.EuiPageHeader,{pageTitle:Object(g.jsx)(m.FormattedMessage,{id:"data.mgmt.searchSessions.main.sectionTitle",defaultMessage:"Search Sessions"}),description:Object(g.jsx)(m.FormattedMessage,{id:"data.mgmt.searchSessions.main.sectionDescription",defaultMessage:"Manage your saved search sessions."}),bottomBorder:!0,rightSideItems:[Object(g.jsx)(l.EuiButtonEmpty,{href:e.getElasticsearchDocLink(),target:"_blank",iconType:"help"},Object(g.jsx)(m.FormattedMessage,{id:"data.mgmt.searchSessions.main.backgroundSessionsDocsLinkText",defaultMessage:"Documentation"}))]}),Object(g.jsx)(l.EuiSpacer,{size:"l"}),Object(g.jsx)(W,w()({"data-test-subj":"search-sessions-mgmt-table"},t)))}const G=(e,{i18n:t,uiSettings:s,...a})=>{if(!e)return()=>{};const{Context:n}=t,{Provider:o}=Object(h.createKibanaReactContext)({uiSettings:s});return Object(D.render)(Object(g.jsx)(n,null,Object(g.jsx)(o,null,Object(g.jsx)(X,w()({},a,{timezone:s.get("dateFormat:tz")})))),e),()=>{Object(D.unmountComponentAtNode)(e)}};class application_SearchSessionsMgmtApp{constructor(e,t,s,a,n){this.coreSetup=e,this.setupDeps=t,this.config=s,this.kibanaVersion=a,this.params=n}async mountManagementSection(){const{coreSetup:e,params:t,setupDeps:s}=this,[n,o]=await e.getStartServices(),{chrome:{docTitle:i},http:r,docLinks:c,i18n:l,notifications:u,uiSettings:d,application:m}=n,h=a.a.getI18nName();i.change(h),this.params.setBreadcrumbs([{text:h}]);const g=new api_SearchSessionsMgmtAPI(s.sessionsClient,this.config,{notifications:u,locators:o.share.url.locators,application:m,usageCollector:s.searchUsageCollector}),j=new documentation_AsyncSearchIntroDocumentation(c),p={config:this.config,documentation:j,core:n,api:g,http:r,i18n:l,uiSettings:d,share:o.share,kibanaVersion:this.kibanaVersion,searchUsageCollector:s.searchUsageCollector},{element:S}=t,b=G(S,p);return()=>{i.reset(),b()}}}},113:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZmlsbD0iIzM0Mzc0MSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgNWwtMy0ydjEuMzMzMzNINHYxLjMzMzM0aDdWN2wzLTJ6TTAgMTEuNWMwLS44Mjg0LjY3MTU3My0xLjUgMS41LTEuNWgxMy4wMDAyYy44Mjg1IDAgMS41LjY3MTYgMS41IDEuNXMtLjY3MTUgMS41LTEuNSAxLjVIMS41Qy42NzE1NzMgMTMgMCAxMi4zMjg0IDAgMTEuNXptMTQuNTAwMi0uNUgxMXYxaDMuNTAwMmMuMjc2MiAwIC41LS4yMjM5LjUtLjVzLS4yMjM4LS41LS41LS41eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="},114:function(e,t,s){switch(window.__kbnThemeTag__){case"v8dark":return s(115);case"v8light":return s(117)}},115:function(e,t,s){var a=s(69),n=s(116);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);a(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},116:function(e,t,s){(t=s(70)(!1)).push([e.i,".searchSessionsFlyout .euiFlyoutBody__overflowContent{height:100%}.searchSessionsFlyout .euiFlyoutBody__overflowContent>div{height:100%}\n",""]),e.exports=t},117:function(e,t,s){var a=s(69),n=s(118);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);a(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},118:function(e,t,s){(t=s(70)(!1)).push([e.i,".searchSessionsFlyout .euiFlyoutBody__overflowContent{height:100%}.searchSessionsFlyout .euiFlyoutBody__overflowContent>div{height:100%}\n",""]),e.exports=t},119:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(85),n=s(12),o=a.__importDefault(s(120));t.default=function(e,t,s){void 0===t&&(t=0),void 0===s&&(s=[]);var a=o.default(e,t),i=a[0],r=a[1],c=a[2];return n.useEffect(c,s),[i,r]}},120:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(12);t.default=function(e,t){void 0===t&&(t=0);var s=a.useRef(!1),n=a.useRef(),o=a.useRef(e),i=a.useCallback((function(){return s.current}),[]),r=a.useCallback((function(){s.current=!1,n.current&&clearTimeout(n.current),n.current=setTimeout((function(){s.current=!0,o.current()}),t)}),[t]),c=a.useCallback((function(){s.current=null,n.current&&clearTimeout(n.current)}),[]);return a.useEffect((function(){o.current=e}),[e]),a.useEffect((function(){return r(),c}),[t]),[i,c,r]}},121:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(12);t.default=function(e,t){var s=a.useRef((function(){}));a.useEffect((function(){s.current=e})),a.useEffect((function(){if(null!==t){var e=setInterval((function(){return s.current()}),t||0);return function(){return clearInterval(e)}}}),[t])}}}]);