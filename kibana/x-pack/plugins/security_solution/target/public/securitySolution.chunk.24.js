/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.securitySolution_bundle_jsonpfunction=window.securitySolution_bundle_jsonpfunction||[]).push([[24],{1376:function(e,t,i){"use strict";i.r(t),i.d(t,"EqlTabContentComponent",(function(){return oe})),i.d(t,"default",(function(){return se}));var n=i(16),a=i(3),l=i(5),r=i.n(l),o=i(23),s=i.n(o),c=i(42),u=i(85),d=i.n(u),m=i(296),p=i(84),g=i(626),b=i(75),E=i(605),y=i(628),f=i(207),v=i(599),h=i(14),O=i(300),k=i(474),x=i(364),j=i(422),q=i(73),F=i(13),S=i(87),C=i(194),w=i(473),I=i(629),T=i(89),P=i(78),D=i(355),L=i(6),V=i(71),B=i(609),Q=i(427),N=i(217);const z=i(4).i18n.translate("xpack.securitySolution.timeline.EqlQueryBarLabel",{defaultMessage:"EQL query"});var M=i(12),_=i(99);const R={index:[],eqlQueryBar:{query:{query:"",language:"eql"},filters:[],saved_id:null}},A={index:{fieldsToValidateOnChange:["index","eqlQueryBar"],validations:[]},eqlQueryBar:{validations:[{validator:Object(Q.a)(Q.b,300)}]}},$=s()(N.e).withConfig({displayName:"HiddenUseField",componentId:"sc-fj97qw-0"})(["display:none;"]),G=Object(l.memo)((({timelineId:e})=>{var t;const i=Object(c.useDispatch)(),n=Object(l.useRef)(!0),[a,o]=Object(l.useState)(!1),[s,u]=Object(l.useState)(!1),d=Object(l.useMemo)((()=>Object(M.createSelector)(_.selectTimeline,(e=>{var t;return null!==(t=null==e?void 0:e.eqlOptions)&&void 0!==t?t:{eventCategoryField:[{label:"event.category"}],tiebreakerField:[{label:""}],timestampField:[{label:"@timestamp"}],size:100,query:""}}))),[]),m=Object(V.a)((t=>d(t,e))),{loading:g,indexPattern:b,selectedPatterns:E}=Object(C.d)(F.SourcererScopeName.timeline),y={...R,index:E.sort(),eqlQueryBar:{...R.eqlQueryBar,query:{query:null!==(t=m.query)&&void 0!==t?t:"",language:"eql"}}},{form:f}=Object(N.k)({defaultValue:y,options:{stripEmptyFields:!1},schema:A}),{getFields:v}=f,h=Object(l.useCallback)(((t,n)=>i(p.a.updateEqlOptions({id:e,field:t,value:n}))),[i,e]),[{eqlQueryBar:O}]=Object(N.m)({form:f,watch:["eqlQueryBar"]}),k=Object(l.useMemo)((()=>Object(L.isEmpty)(b.fields)?{keywordFields:[],dateFields:[],nonDateFields:[]}:{keywordFields:b.fields.filter((e=>{var t;return null===(t=e.esTypes)||void 0===t?void 0:t.includes("keyword")})).map((e=>({label:e.name}))),dateFields:b.fields.filter((e=>"date"===e.type)).map((e=>({label:e.name}))),nonDateFields:b.fields.filter((e=>"date"!==e.type)).map((e=>({label:e.name})))}),[b]);return Object(l.useEffect)((()=>{const{index:e}=v(),t=E.sort(),i=e.value.sort();Object(L.isEqual)(i,t)||e.setValue(t)}),[v,E]),Object(l.useEffect)((()=>{const{eqlQueryBar:e}=v();var t;return n.current&&(n.current=!1,u(!0),e.setValue({...R.eqlQueryBar,query:{query:null!==(t=m.query)&&void 0!==t?t:"",language:"eql"}})),()=>{n.current=!0}}),[v,m.query]),Object(l.useEffect)((()=>{null==O||Object(L.isEmpty)(O.query.query)||!a||s||(i(p.a.updateEqlOptions({id:e,field:"query",value:`${O.query.query}`})),o(!1),u(!1))}),[i,O,a,s,e]),r.a.createElement(N.c,{form:f,"data-test-subj":"EqlQueryBarTimeline"},r.a.createElement($,{key:"Index",path:"index"}),r.a.createElement(N.e,{key:"EqlQueryBar",path:"eqlQueryBar",component:B.a,componentProps:{optionsData:k,optionsSelected:m,onOptionsChange:h,onValidityChange:o,onValiditingChange:u,idAria:"timelineEqlQueryBar",isDisabled:g,isLoading:g,dataTestSubj:"timelineEqlQueryBar"},config:{...A.eqlQueryBar,label:z}}))}));var H=i(602),K=i(356),U=i(604);const W=s.a.div.withConfig({displayName:"TimelineHeaderContainer",componentId:"sc-1f3fsnr-0"})(["margin-top:6px;width:100%;"]);W.displayName="TimelineHeaderContainer";const X=s()(n.EuiFlyoutHeader).withConfig({displayName:"StyledEuiFlyoutHeader",componentId:"sc-1f3fsnr-1"})(["align-items:stretch;box-shadow:none;display:flex;flex-direction:column;padding:0;&.euiFlyoutHeader{","}"],(({theme:e})=>`padding: 0 ${e.eui.euiSizeS} ${e.eui.euiSizeS} ${e.eui.euiSizeS};`)),J=s()(n.EuiFlyoutBody).withConfig({displayName:"StyledEuiFlyoutBody",componentId:"sc-1f3fsnr-2"})(["overflow-y:hidden;flex:1;.euiFlyoutBody__overflow{overflow:hidden;mask-image:none;}.euiFlyoutBody__overflowContent{padding:0;height:100%;display:flex;}"]),Y=s()(n.EuiFlyoutFooter).withConfig({displayName:"StyledEuiFlyoutFooter",componentId:"sc-1f3fsnr-3"})(["background:none;padding:0;&.euiFlyoutFooter{","}"],(({theme:e})=>`padding: ${e.eui.euiSizeS} 0 0 0;`)),Z=s()(n.EuiFlexGroup).withConfig({displayName:"FullWidthFlexGroup",componentId:"sc-1f3fsnr-4"})(["margin:0;width:100%;overflow:hidden;"]),ee=s()(n.EuiFlexItem).withConfig({displayName:"ScrollableFlexItem",componentId:"sc-1f3fsnr-5"})(["overflow:hidden;"]),te=s()(n.EuiFlexItem).withConfig({displayName:"DatePicker",componentId:"sc-1f3fsnr-6"})([".euiSuperDatePicker__flexWrapper{max-width:none;width:auto;}"]);te.displayName="DatePicker";const ie=s.a.div.withConfig({displayName:"VerticalRule",componentId:"sc-1f3fsnr-7"})(["width:2px;height:100%;background:",";"],(({theme:e})=>e.eui.euiColorLightShade));ie.displayName="VerticalRule";const ne=s()(n.EuiBadge).withConfig({displayName:"EventsCountBadge",componentId:"sc-1f3fsnr-8"})(["margin-left:",";"],(({theme:e})=>e.eui.paddingSizes.s)),ae=[],le=[],re=[],oe=({activeTab:e,columns:t,end:i,eqlOptions:o,expandedDetail:s,timelineId:u,isLive:d,itemsPerPage:q,itemsPerPageOptions:S,onEventClosed:L,renderCellValue:V,rowRenderers:B,showExpandedDetails:Q,start:N,timerangeKind:z})=>{var M;const _=Object(c.useDispatch)(),{query:R="",...A}=o,{portalNode:$}=Object(w.c)(),{setTimelineFullScreen:oe,timelineFullScreen:se}=Object(T.b)(),{browserFields:ce,dataViewId:ue,docValueFields:de,loading:me,runtimeMappings:pe,selectedPatterns:ge}=Object(C.d)(F.SourcererScopeName.timeline),be=Object(a.isEmpty)(R);Object(l.useEffect)((()=>{_(p.a.initializeTGridSettings({id:u}))}),[_,u]);const[Ee,{events:ye,inspect:fe,totalCount:ve,pageInfo:he,loadPage:Oe,updatedAt:ke,refetch:xe}]=Object(g.a)({dataViewId:ue,docValueFields:de,endDate:i,eqlOptions:A,fields:[...(Object(a.isEmpty)(t)?b.b:t).map((e=>e.id)),...O.h],filterQuery:null!=R?R:"",id:u,indexNames:ge,language:"eql",limit:q,runtimeMappings:pe,skip:!!(null==me||me||Object(a.isEmpty)(N)||Object(a.isEmpty)(i)||be),startDate:N,timerangeKind:z}),je=Object(l.useCallback)((()=>{var e;L({tabType:h.l.eql,timelineId:u}),null!==(e=s[h.l.eql])&&void 0!==e&&e.panelView&&u===h.i.active&&Q&&P.a.toggleExpandedDetail({})}),[L,u,s,Q]);Object(l.useEffect)((()=>{_(p.a.updateIsLoading({id:u,isLoading:Ee||me}))}),[me,u,Ee,_]);const qe=Object(l.useMemo)((()=>Object(K.a)(6).map((e=>({...e,headerCellRender:H.a})))),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{node:$},ve>=0?r.a.createElement(ne,null,ve):null),r.a.createElement(v.a,{id:`${u}-${h.l.eql}`,inputId:"timeline",inspect:fe,loading:Ee,refetch:xe}),r.a.createElement(Z,null,r.a.createElement(ee,{grow:2},r.a.createElement(X,{"data-test-subj":`${e}-tab-flyout-header`,hasBorder:!1},r.a.createElement(n.EuiFlexGroup,{alignItems:"center",gutterSize:"s","data-test-subj":"timeline-date-picker-container"},se&&null!=oe&&r.a.createElement(k.b,{fullScreen:se,setFullScreen:oe}),r.a.createElement(te,{grow:10},r.a.createElement(x.a,{id:"timeline",timelineId:u})),r.a.createElement(n.EuiFlexItem,{grow:!1},r.a.createElement(I.a,null)),r.a.createElement(n.EuiFlexItem,{grow:1},e===h.l.eql&&r.a.createElement(U.a,{scope:F.SourcererScopeName.timeline}))),r.a.createElement(W,{"data-test-subj":"timelineHeader"},r.a.createElement(G,{timelineId:u}))),r.a.createElement(j.a,null,r.a.createElement(J,{"data-test-subj":`${h.l.eql}-tab-flyout-body`,className:"timeline-flyout-body"},r.a.createElement(E.a,{activePage:he.activePage,browserFields:ce,data:be?ae:ye,id:u,refetch:xe,renderCellValue:V,rowRenderers:B,sort:le,tabType:h.l.eql,totalPages:Object(f.h)({itemsCount:ve,itemsPerPage:q}),leadingControlColumns:qe,trailingControlColumns:re})),r.a.createElement(Y,{"data-test-subj":`${h.l.eql}-tab-flyout-footer`,className:"timeline-flyout-footer"},!be&&r.a.createElement(y.a,{activePage:null!==(M=null==he?void 0:he.activePage)&&void 0!==M?M:0,"data-test-subj":"timeline-footer",updatedAt:ke,height:y.b,id:u,isLive:d,isLoading:Ee||me,itemsCount:be?0:ye.length,itemsPerPage:q,itemsPerPageOptions:S,onChangePage:Oe,totalCount:be?0:ve})))),Q&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null),r.a.createElement(ee,{grow:1},r.a.createElement(D.a,{browserFields:ce,docValueFields:de,runtimeMappings:pe,tabType:h.l.eql,timelineId:u,handleOnPanelClosed:je})))))},se=Object(c.connect)((()=>{const e=p.b.getTimelineByIdSelector(),t=q.e.getTimelineSelector();return(i,{timelineId:n})=>{var a,l;const r=null!==(a=e(i,n))&&void 0!==a?a:S.a,o=t(i),{activeTab:s,columns:c,eqlOptions:u,expandedDetail:d,itemsPerPage:m,itemsPerPageOptions:p}=r;return{activeTab:s,columns:c,eqlOptions:u,end:o.timerange.to,expandedDetail:d,timelineId:n,isLive:"interval"===o.policy.kind,itemsPerPage:m,itemsPerPageOptions:p,showExpandedDetails:!!d[h.l.eql]&&!(null===(l=d[h.l.eql])||void 0===l||!l.panelView),start:o.timerange.from,timerangeKind:o.timerange.kind}}}),(e=>({onEventClosed:t=>{e(p.a.toggleDetailPanel(t))}})))(r.a.memo(oe,((e,t)=>e.activeTab===t.activeTab&&((e,t)=>e.end===t.end&&e.start===t.start&&e.timerangeKind===t.timerangeKind)(e,t)&&d()(e.eqlOptions,t.eqlOptions)&&e.isLive===t.isLive&&e.itemsPerPage===t.itemsPerPage&&e.onEventClosed===t.onEventClosed&&e.showExpandedDetails===t.showExpandedDetails&&e.timelineId===t.timelineId&&d()(e.columns,t.columns)&&d()(e.itemsPerPageOptions,t.itemsPerPageOptions))))},280:function(e,t,i){"use strict";i.d(t,"m",(function(){return a})),i.d(t,"k",(function(){return l})),i.d(t,"l",(function(){return r})),i.d(t,"i",(function(){return o})),i.d(t,"j",(function(){return s})),i.d(t,"h",(function(){return c})),i.d(t,"g",(function(){return u})),i.d(t,"b",(function(){return d})),i.d(t,"a",(function(){return m})),i.d(t,"d",(function(){return p})),i.d(t,"c",(function(){return g})),i.d(t,"f",(function(){return b})),i.d(t,"e",(function(){return E}));var n=i(4);const a=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlValidation.requestError",{defaultMessage:"An error occurred while validating your EQL query"}),l=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlValidation.title",{defaultMessage:"EQL Validation Errors"}),r=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlValidation.showErrorsLabel",{defaultMessage:"Show EQL Validation Errors"}),o=(n.i18n.translate("xpack.securitySolution.detectionEngine.eqlQueryBar.label",{defaultMessage:"Enter an EQL Query"}),n.i18n.translate("xpack.securitySolution.detectionEngine.eqlOverViewLink.text",{defaultMessage:"Event Query Language (EQL) Overview"})),s=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlSettings.title",{defaultMessage:"EQL settings"}),c=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlOptionsSize.label",{defaultMessage:"Size"}),u=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlOptionsSize.text",{defaultMessage:"For basic queries, the maximum number of matching events to return. For sequence queries, the maximum number of matching sequences to return."}),d=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlOptionsEventCategoryField.label",{defaultMessage:"Event category field"}),m=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlOptionsEventCategoryField.text",{defaultMessage:"Field containing the event classification, such as process, file, or network. This field is typically mapped as a field type in the keyword family"}),p=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlOptionsEventTiebreakerField.label",{defaultMessage:"Tiebreaker field"}),g=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlOptionsEventTiebreakerField.text",{defaultMessage:"Field used to sort hits with the same timestamp in ascending, lexicographic order"}),b=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlOptionsEventTimestampField.label",{defaultMessage:"Timestamp field"}),E=n.i18n.translate("xpack.securitySolution.detectionEngine.eqlOptionsEventTimestampField.text",{defaultMessage:"Field containing event timestamp"})},427:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return g})),i.d(t,"c",(function(){return b}));var n=i(6),a=i(293),l=i(18),r=i(19),o=i(166);const s=e=>"parsing_exception"===e||"verification_exception"===e||"mapping_exception"===e,c=e=>Object(n.has)(e,"error.type"),u=e=>e.error.root_cause.filter((e=>s(e.type))).map((e=>e.reason));var d=i(280);let m;!function(e){e.FAILED_REQUEST="ERR_FAILED_REQUEST",e.INVALID_EQL="ERR_INVALID_EQL"}(m||(m={}));const p=(e,t)=>{let i,n=[];return(...a)=>(i&&clearTimeout(i),i=setTimeout((()=>{const t=e(...a);n.forEach((e=>e(t))),n=[]}),t),new Promise((e=>n.push(e))))},g=async(...e)=>{const[{value:t,formData:i}]=e,{query:p}=t,g=p.query,{index:b,ruleType:E}=i;if(void 0===E&&!Object(n.isEmpty)(g)||Object(a.b)(E)&&!Object(n.isEmpty)(g))try{const{data:e}=l.b.get(),t=(new AbortController).signal,i=await(async({data:e,index:t,query:i,signal:a})=>{const{rawResponse:l}=await Object(r.firstValueFrom)(e.search.search({params:{index:t.join(),body:{query:i,size:0}},options:{ignore:[400]}},{strategy:o.EQL_SEARCH_STRATEGY,abortSignal:a}));if((e=>c(e)&&s(Object(n.get)(e,"error.type")))(l.body))return{valid:!1,errors:u(l.body)};if(c(l.body))throw new Error(JSON.stringify(l.body));return{valid:!0,errors:[]}})({data:e,query:g,signal:t,index:b});if(!1===(null==i?void 0:i.valid))return{code:m.INVALID_EQL,message:"",messages:i.errors}}catch(e){return{code:m.FAILED_REQUEST,message:d.m,error:e}}},b=e=>{const t=e.errors.length>0,i=!e.isChangingValue&&!t;if(t){const[t]=e.errors,n=t.message;return t.code===m.INVALID_EQL?{isValid:i,message:n,messages:t.messages}:{isValid:i,message:n,error:t.error}}return{isValid:i,message:""}}},599:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i(5),a=i.n(n),l=i(42),r=i(77);const o=({id:e,inputId:t,inspect:i,loading:a,refetch:o,skip:s})=>{const c=Object(l.useDispatch)();return Object(n.useEffect)((()=>{s||c(r.b.setQuery({id:e,inputId:t,inspect:i,loading:a,refetch:o}))}),[c,e,t,a,o,i,s]),null},s=a.a.memo(o)},609:function(e,t,i){"use strict";i.d(t,"a",(function(){return j}));var n=i(5),a=i.n(n),l=i(23),r=i.n(l),o=i(16),s=i(192),c=i(280),u=i(6);const d=({ariaLabel:e,errors:t})=>{const[i,l]=Object(n.useState)(!1),r=Object(n.useCallback)((()=>{l(!i)}),[i]),s=Object(n.useCallback)((()=>{l(!1)}),[]);return a.a.createElement(o.EuiPopover,{"data-test-subj":"eql-validation-errors-popover",button:a.a.createElement(o.EuiButtonEmpty,{"data-test-subj":"eql-validation-errors-popover-button",iconType:"crossInACircleFilled",size:"s",color:"danger","aria-label":e,onClick:r},t.length),isOpen:i,closePopover:s,anchorPosition:"downCenter"},a.a.createElement("div",{"data-test-subj":"eql-validation-errors-popover-content"},a.a.createElement(o.EuiPopoverTitle,null,c.k),t.map(((e,t)=>a.a.createElement(o.EuiText,{key:t},e)))))};var m=i(18);const p=r()(o.EuiText).withConfig({displayName:"InlineText",componentId:"sc-i91hzt-0"})(["display:inline-block;"]),g=()=>{const e=Object(m.j)().services.docLinks.links.query.eql;return a.a.createElement(o.EuiLink,{external:!0,href:e,target:"_blank"},a.a.createElement(p,{size:"xs"},c.i))},b=r()(o.EuiPanel).withConfig({displayName:"Container",componentId:"sc-10yczbx-0"})(["border-radius:0;background:",";padding:"," ",";"],(({theme:e})=>e.eui.euiPageBackgroundColor),(({theme:e})=>e.eui.euiSizeXS),(({theme:e})=>e.eui.euiSizeS)),E=r()(o.EuiFlexGroup).withConfig({displayName:"FlexGroup",componentId:"sc-10yczbx-1"})(["min-height:",";"],(({theme:e})=>e.eui.euiSizeXL)),y=r()(o.EuiFlexItem).withConfig({displayName:"FlexItemLeftBorder",componentId:"sc-10yczbx-2"})(["border-left:1px solid ",";"],(({theme:e})=>e.eui.euiColorLightShade)),f=r()(o.EuiFlexItem).withConfig({displayName:"FlexItemWithMarginRight",componentId:"sc-10yczbx-3"})(["margin-right:",";"],(({theme:e})=>e.eui.euiSizeS)),v=r()(o.EuiLoadingSpinner).withConfig({displayName:"Spinner",componentId:"sc-10yczbx-4"})(["margin:0 ",";"],(({theme:e})=>e.eui.euiSizeS)),h={asPlainText:!0},O=({errors:e,isLoading:t,isSizeOptionDisabled:i,optionsData:l,optionsSelected:r,onOptionsChange:s})=>{var m;const[p,O]=Object(n.useState)(!1),[k,x]=Object(n.useState)(null!==(m=null==r?void 0:r.size)&&void 0!==m?m:100),j=Object(n.useRef)(),q=Object(n.useCallback)((()=>{O(!0)}),[]),F=Object(n.useCallback)((()=>{O(!1)}),[]),S=Object(n.useCallback)((e=>{s&&(e.length>0?s("eventCategoryField",e[0].label):s("eventCategoryField",void 0))}),[s]),C=Object(n.useCallback)((e=>{s&&(e.length>0?s("tiebreakerField",e[0].label):s("tiebreakerField",void 0))}),[s]),w=Object(n.useCallback)((e=>{s&&(e.length>0?s("timestampField",e[0].label):s("timestampField",void 0))}),[s]),I=Object(n.useCallback)((e=>{var t,i,n,a;s&&(x(null==e||null===(t=e.target)||void 0===t?void 0:t.value),null!==(i=j.current)&&void 0!==i&&i.cancel&&(null===(a=j.current)||void 0===a||a.cancel()),j.current=Object(u.debounce)((e=>s("size",e)),800),j.current(null==e||null===(n=e.target)||void 0===n?void 0:n.value))}),[s]),T=Object(n.useMemo)((()=>null!=(null==r?void 0:r.eventCategoryField)?[{label:null==r?void 0:r.eventCategoryField}]:void 0),[null==r?void 0:r.eventCategoryField]),P=Object(n.useMemo)((()=>null!=(null==r?void 0:r.tiebreakerField)?[{label:null==r?void 0:r.tiebreakerField}]:void 0),[null==r?void 0:r.tiebreakerField]),D=Object(n.useMemo)((()=>null!=(null==r?void 0:r.timestampField)?[{label:null==r?void 0:r.timestampField}]:void 0),[null==r?void 0:r.timestampField]);return a.a.createElement(b,null,a.a.createElement(E,{alignItems:"center",justifyContent:"spaceBetween",gutterSize:"none"},a.a.createElement(o.EuiFlexItem,null,e.length>0&&a.a.createElement(d,{ariaLabel:c.l,errors:e}),t&&a.a.createElement(v,{"data-test-subj":"eql-validation-loading",size:"m"})),!s&&a.a.createElement(o.EuiFlexItem,{grow:!1},a.a.createElement(g,null)),s&&a.a.createElement(a.a.Fragment,null,a.a.createElement(f,{grow:!1},a.a.createElement(g,null)),a.a.createElement(y,{grow:!1},a.a.createElement(o.EuiPopover,{button:a.a.createElement(o.EuiButtonIcon,{onClick:q,iconType:"controlsVertical",isDisabled:p,"aria-label":"eql settings","data-test-subj":"eql-settings-trigger"}),isOpen:p,closePopover:F,anchorPosition:"downCenter",ownFocus:!1},a.a.createElement(o.EuiPopoverTitle,null,c.j),a.a.createElement("div",{style:{width:"300px"}},!i&&a.a.createElement(o.EuiFormRow,{label:c.h,helpText:c.g},a.a.createElement(o.EuiFieldNumber,{value:k,onChange:I,min:1,max:1e4})),a.a.createElement(o.EuiFormRow,{label:c.b,helpText:c.a},a.a.createElement(o.EuiComboBox,{options:null==l?void 0:l.keywordFields,selectedOptions:T,singleSelection:h,onChange:S})),a.a.createElement(o.EuiFormRow,{label:c.d,helpText:c.c},a.a.createElement(o.EuiComboBox,{options:null==l?void 0:l.nonDateFields,selectedOptions:P,singleSelection:h,onChange:C})),a.a.createElement(o.EuiFormRow,{label:c.f,helpText:c.e},a.a.createElement(o.EuiComboBox,{options:null==l?void 0:l.dateFields,selectedOptions:D,singleSelection:h,onChange:w}))))))))};var k=i(427);const x=r()(o.EuiTextArea).withConfig({displayName:"TextArea",componentId:"sc-4u43ce-0"})(["display:block;border:",";border-bottom:0;box-shadow:none;min-height:",";"],(({theme:e})=>e.eui.euiBorderThin),(({theme:e})=>e.eui.euiFormControlHeight)),j=({dataTestSubj:e,field:t,idAria:i,optionsData:l,optionsSelected:r,isSizeOptionDisabled:u,onOptionsChange:d,onValidityChange:m,onValiditingChange:p})=>{const{addError:g}=Object(s.a)(),[b,E]=Object(n.useState)([]),{isValidating:y,setValue:f}=t,{isValid:v,message:h,messages:j,error:q}=Object(k.c)(t),F=t.value.query.query;Object(n.useEffect)((()=>{null!=m&&m(v)}),[v,m]),Object(n.useEffect)((()=>{E(null!=j?j:[])}),[j]),Object(n.useEffect)((()=>{q&&g(q,{title:c.m})}),[q,g]),Object(n.useEffect)((()=>{p&&p(y)}),[y,p]);const S=Object(n.useCallback)((e=>{const t=e.target.value;p&&p(!0),E([]),f({filters:[],query:{query:t,language:"eql"},saved_id:null})}),[f,p]);return a.a.createElement(o.EuiFormRow,{label:t.label,labelAppend:t.labelAppend,helpText:t.helpText,error:h,isInvalid:!v&&!y,fullWidth:!0,"data-test-subj":e,describedByIds:i?[i]:void 0},a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{"data-test-subj":"eqlQueryBarTextInput",fullWidth:!0,isInvalid:!v&&!y,value:F,onChange:S}),a.a.createElement(O,{errors:b,isLoading:y,isSizeOptionDisabled:u,optionsData:l,optionsSelected:r,onOptionsChange:d})))}},629:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var n=i(16),a=i(5),l=i.n(a),r=i(42),o=i(28),s=i(71),c=i(4);const u=c.i18n.translate("xpack.securitySolution.timeline.properties.lockDatePickerTooltip",{defaultMessage:"Disable syncing of date/time range bteween the currently viewed page and your timeline"}),d=c.i18n.translate("xpack.securitySolution.timeline.properties.unlockDatePickerTooltip",{defaultMessage:"Enable syncing of date/time range between the currently viewed page and your timeline"}),m=(c.i18n.translate("xpack.securitySolution.timeline.properties.lockedDatePickerLabel",{defaultMessage:"Global date picker is locked to timeline date picker"}),c.i18n.translate("xpack.securitySolution.timeline.properties.unlockedDatePickerLabel",{defaultMessage:"Global date picker NOT locked to timeline date picker"}),c.i18n.translate("xpack.securitySolution.timeline.properties.lockDatePickerDescription",{defaultMessage:"Lock global date picker to timeline date picker"})),p=c.i18n.translate("xpack.securitySolution.timeline.properties.unlockDatePickerDescription",{defaultMessage:"Unlock global date picker from timeline date picker"}),g=()=>{const e=Object(r.useDispatch)(),t=Object(a.useMemo)((()=>o.d.globalSelector()),[]),i=Object(s.b)((e=>t(e).linkTo.includes("timeline"))),c=Object(a.useCallback)((()=>e(o.b.toggleTimelineLinkTo({linkToId:"timeline"}))),[e]);return l.a.createElement(n.EuiToolTip,{"data-test-subj":"timeline-date-picker-lock-tooltip",position:"top",content:i?u:d},l.a.createElement(n.EuiButtonIcon,{"data-test-subj":`timeline-date-picker-${i?"lock":"unlock"}-button`,color:"primary",onClick:c,iconType:i?"lock":"lockOpen","aria-label":i?p:m}))};g.displayName="TimelineDatePickerLockComponent";const b=l.a.memo(g)}}]);