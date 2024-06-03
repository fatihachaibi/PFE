/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.spaces_bundle_jsonpfunction=window.spaces_bundle_jsonpfunction||[]).push([[7],{128:function(e,a,t){"use strict";t.r(a),t.d(a,"SpacesGridPage",(function(){return spaces_grid_page_SpacesGridPage}));var s=t(8),n=t.n(s),i=t(4),c=t.n(i),r=t(2),o=t(1),l=t(3),d=t(11),p=t(9),u=t(15),g=t(6),m=t(12),j=t(5),b=t(39),f=t(38),h=t(0);const x=Object(o.lazy)((()=>Object(j.a)().then((e=>({default:e})))));class spaces_grid_page_SpacesGridPage extends o.Component{constructor(e){super(e),c()(this,"getConfirmDeleteModal",(()=>{if(!this.state.showConfirmDeleteModal||!this.state.selectedSpace)return null;const{spacesManager:e}=this.props;return Object(h.jsx)(b.a,{space:this.state.selectedSpace,spacesManager:e,onCancel:()=>{this.setState({showConfirmDeleteModal:!1})},onSuccess:()=>{this.setState({showConfirmDeleteModal:!1}),this.loadGrid()}})})),c()(this,"loadGrid",(async()=>{const{spacesManager:e,getFeatures:a,notifications:t}=this.props;this.setState({loading:!0,spaces:[],features:[]});const s=e.getSpaces();try{const[e,t]=await Promise.all([s,a()]);this.setState({loading:!1,spaces:e,features:t})}catch(e){this.setState({loading:!1}),t.toasts.addError(e,{title:l.i18n.translate("xpack.spaces.management.spacesGridPage.errorTitle",{defaultMessage:"Error loading spaces"})})}})),c()(this,"getEditSpacePath",(e=>`edit/${encodeURIComponent(e.id)}`)),c()(this,"onDeleteSpaceClick",(e=>{this.setState({selectedSpace:e,showConfirmDeleteModal:!0})})),this.state={spaces:[],features:[],loading:!0,showConfirmDeleteModal:!1,selectedSpace:null}}componentDidMount(){this.props.capabilities.spaces.manage&&this.loadGrid()}render(){return Object(h.jsx)("div",{className:"spcGridPage","data-test-subj":"spaces-grid-page"},Object(h.jsx)(r.EuiPageHeader,{bottomBorder:!0,pageTitle:Object(h.jsx)(d.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.spacesTitle",defaultMessage:"Spaces"}),description:Object(m.b)(),rightSideItems:[this.getPrimaryActionButton()]}),Object(h.jsx)(r.EuiSpacer,{size:"l"}),this.getPageContent(),this.getConfirmDeleteModal())}getPageContent(){return this.props.capabilities.spaces.manage?Object(h.jsx)(r.EuiInMemoryTable,{itemId:"id",items:this.state.spaces,tableCaption:l.i18n.translate("xpack.spaces.management.spacesGridPage.tableCaption",{defaultMessage:"Kibana spaces"}),rowHeader:"name",columns:this.getColumnConfig(),hasActions:!0,pagination:!0,sorting:!0,search:{box:{placeholder:l.i18n.translate("xpack.spaces.management.spacesGridPage.searchPlaceholder",{defaultMessage:"Search"})}},loading:this.state.loading,message:this.state.loading?Object(h.jsx)(d.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.loadingTitle",defaultMessage:"loading…"}):void 0}):Object(h.jsx)(r.EuiPageContent,{verticalPosition:"center",horizontalPosition:"center",color:"danger"},Object(h.jsx)(b.b,null))}getPrimaryActionButton(){return Object(h.jsx)(r.EuiButton,n()({fill:!0,iconType:"plusInCircleFilled"},Object(p.reactRouterNavigate)(this.props.history,"/create"),{"data-test-subj":"createSpace"}),Object(h.jsx)(d.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.createSpaceButtonLabel",defaultMessage:"Create space"}))}getColumnConfig(){return[{field:"initials",name:"",width:"50px",render:(e,a)=>Object(h.jsx)(o.Suspense,{fallback:Object(h.jsx)(r.EuiLoadingSpinner,null)},Object(h.jsx)(r.EuiLink,Object(p.reactRouterNavigate)(this.props.history,this.getEditSpacePath(a)),Object(h.jsx)(x,{space:a,size:"s"})))},{field:"name",name:l.i18n.translate("xpack.spaces.management.spacesGridPage.spaceColumnName",{defaultMessage:"Space"}),sortable:!0,render:(e,a)=>Object(h.jsx)(r.EuiLink,Object(p.reactRouterNavigate)(this.props.history,this.getEditSpacePath(a)),e)},{field:"description",name:l.i18n.translate("xpack.spaces.management.spacesGridPage.descriptionColumnName",{defaultMessage:"Description"}),sortable:!0},{field:"disabledFeatures",name:l.i18n.translate("xpack.spaces.management.spacesGridPage.featuresColumnName",{defaultMessage:"Features"}),sortable:e=>Object(f.a)(this.state.features,e).length,render:(e,a)=>{const t=Object(f.a)(this.state.features,a).length;return t===this.state.features.length?Object(h.jsx)(d.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.allFeaturesEnabled",defaultMessage:"All features visible"}):0===t?Object(h.jsx)(r.EuiText,{color:"danger"},Object(h.jsx)(d.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.noFeaturesEnabled",defaultMessage:"No features visible"})):Object(h.jsx)(d.FormattedMessage,{id:"xpack.spaces.management.spacesGridPage.someFeaturesEnabled",defaultMessage:"{enabledFeatureCount} / {totalFeatureCount} features visible",values:{enabledFeatureCount:t,totalFeatureCount:this.state.features.length}})}},{field:"id",name:l.i18n.translate("xpack.spaces.management.spacesGridPage.identifierColumnName",{defaultMessage:"Identifier"}),sortable:!0,render:e=>e===g.b?"":e},{name:l.i18n.translate("xpack.spaces.management.spacesGridPage.actionsColumnName",{defaultMessage:"Actions"}),actions:[{render:e=>Object(h.jsx)(r.EuiButtonIcon,n()({"data-test-subj":`${e.name}-editSpace`,"aria-label":l.i18n.translate("xpack.spaces.management.spacesGridPage.editSpaceActionName",{defaultMessage:"Edit {spaceName}.",values:{spaceName:e.name}}),color:"primary",iconType:"pencil"},Object(p.reactRouterNavigate)(this.props.history,this.getEditSpacePath(e))))},{available:e=>!Object(u.isReservedSpace)(e),render:e=>Object(h.jsx)(r.EuiButtonIcon,{"data-test-subj":`${e.name}-deleteSpace`,"aria-label":l.i18n.translate("xpack.spaces.management.spacesGridPage.deleteActionName",{defaultMessage:"Delete {spaceName}.",values:{spaceName:e.name}}),color:"danger",iconType:"trash",onClick:()=>this.onDeleteSpaceClick(e)})}]}]}}},36:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var s=t(2),n=t(1),i=t.n(n),c=t(16),r=t.n(c),o=t(26),l=t.n(o),d=t(3),p=t(11),u=t(9),g=t(0);const m=({space:e,onSuccess:a,onCancel:t,spacesManager:n})=>{const{services:c}=Object(u.useKibana)(),{value:o}=r()((async()=>e.id===(await n.getActiveSpace()).id),[e.id]),[m,j]=l()((async()=>{try{await n.deleteSpace(e),c.notifications.toasts.addSuccess(d.i18n.translate("xpack.spaces.management.confirmDeleteModal.successMessage",{defaultMessage:"Deleted space '{name}'",values:{name:e.name}})),o?n.redirectToSpaceSelector():null==a||a()}catch(a){var t;c.notifications.toasts.addDanger({title:d.i18n.translate("xpack.spaces.management.confirmDeleteModal.errorMessage",{defaultMessage:"Could not delete space '{name}'",values:{name:e.name}}),text:(null===(t=a.body)||void 0===t?void 0:t.message)||a.message})}}),[o]);return Object(g.jsx)(s.EuiConfirmModal,{title:d.i18n.translate("xpack.spaces.management.confirmDeleteModal.title",{defaultMessage:"Delete space '{name}'?",values:{name:e.name}}),onCancel:t,onConfirm:j,cancelButtonText:d.i18n.translate("xpack.spaces.management.confirmDeleteModal.cancelButton",{defaultMessage:"Cancel"}),confirmButtonText:d.i18n.translate("xpack.spaces.management.confirmDeleteModal.confirmButton",{defaultMessage:"{isLoading, select, true{Deleting space and all contents…} other{Delete space and all contents}}",values:{isLoading:m.loading}}),buttonColor:"danger",isLoading:m.loading},o&&Object(g.jsx)(i.a.Fragment,null,Object(g.jsx)(s.EuiCallOut,{color:"warning",iconType:"alert",title:d.i18n.translate("xpack.spaces.management.confirmDeleteModal.currentSpaceTitle",{defaultMessage:"You are currently in this space."})},Object(g.jsx)(p.FormattedMessage,{id:"xpack.spaces.management.confirmDeleteModal.currentSpaceDescription",defaultMessage:"Once deleted, you must choose a different space."})),Object(g.jsx)(s.EuiSpacer,null)),Object(g.jsx)(s.EuiText,null,Object(g.jsx)("p",null,Object(g.jsx)(p.FormattedMessage,{id:"xpack.spaces.management.confirmDeleteModal.description",defaultMessage:"This space and {allContents} will be permanently deleted.",values:{allContents:Object(g.jsx)("strong",null,Object(g.jsx)(p.FormattedMessage,{id:"xpack.spaces.management.confirmDeleteModal.allContents",defaultMessage:"all contents"}))}})),Object(g.jsx)("p",null,Object(g.jsx)(p.FormattedMessage,{id:"xpack.spaces.management.confirmDeleteModal.cannotUndoWarning",defaultMessage:"You can't recover deleted spaces."}))))}},38:function(e,a,t){"use strict";function s(e,a){return e.filter((e=>!(a.disabledFeatures||[]).includes(e.id)))}t.d(a,"a",(function(){return s}))},39:function(e,a,t){"use strict";t.d(a,"a",(function(){return s.a})),t.d(a,"b",(function(){return r}));var s=t(36),n=t(2),i=(t(1),t(11)),c=t(0);const r=()=>Object(c.jsx)(n.EuiEmptyPrompt,{iconType:"spacesApp",iconColor:"danger",title:Object(c.jsx)("h2",null,Object(c.jsx)(i.FormattedMessage,{id:"xpack.spaces.management.unauthorizedPrompt.permissionDeniedTitle",defaultMessage:"Permission denied"})),body:Object(c.jsx)("p",{"data-test-subj":"permissionDeniedMessage"},Object(c.jsx)(i.FormattedMessage,{id:"xpack.spaces.management.unauthorizedPrompt.permissionDeniedDescription",defaultMessage:"You don't have permission to manage spaces."}))})}}]);