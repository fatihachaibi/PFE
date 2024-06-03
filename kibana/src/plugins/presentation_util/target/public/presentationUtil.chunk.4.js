(window.presentationUtil_bundle_jsonpfunction=window.presentationUtil_bundle_jsonpfunction||[]).push([[4,10],{138:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),o=t(7),i=t(49),d=t(11),l=t(45),r=t(3),b=t(68),c=(t(69),t(0));function u(e){const{documentId:a,onSelectDashboard:t,canSaveByReference:s,setAddToLibrary:i,isAddToLibrarySelected:d,dashboardOption:u,onChange:h,copyOnSave:p}=e,j=!p&&!!a;return Object(c.jsx)(n.a.Fragment,null,Object(c.jsx)(r.EuiFormRow,{label:Object(c.jsx)(l.FormattedMessage,{id:"presentationUtil.saveModalDashboard.addToDashboardLabel",defaultMessage:"Add to dashboard"}),hasChildLabel:!1},Object(c.jsx)(n.a.Fragment,null,Object(c.jsx)(r.EuiPanel,{color:"subdued",hasShadow:!1,"data-test-subj":"add-to-dashboard-options"},Object(c.jsx)("div",null,Object(c.jsx)(n.a.Fragment,null,Object(c.jsx)(r.EuiRadio,{checked:"existing"===u,id:"existing-dashboard-option",name:"dashboard-option",label:o.i18n.translate("presentationUtil.saveModalDashboard.existingDashboardOptionLabel",{defaultMessage:"Existing"}),onChange:()=>h("existing"),disabled:j}),Object(c.jsx)("div",{className:"savAddDashboard__searchDashboards"},Object(c.jsx)(b.default,{isDisabled:"existing"!==u,onChange:t})),Object(c.jsx)(r.EuiSpacer,{size:"s"})),Object(c.jsx)(n.a.Fragment,null,Object(c.jsx)(r.EuiRadio,{checked:"new"===u,id:"new-dashboard-option",name:"dashboard-option",label:o.i18n.translate("presentationUtil.saveModalDashboard.newDashboardOptionLabel",{defaultMessage:"New"}),onChange:()=>h("new"),disabled:j}),Object(c.jsx)(r.EuiSpacer,{size:"s"})),Object(c.jsx)(r.EuiRadio,{checked:null===u,id:"add-to-library-option",name:"dashboard-option",label:o.i18n.translate("presentationUtil.saveModalDashboard.noDashboardOptionLabel",{defaultMessage:"None"}),onChange:()=>{i(!0),h(null)},disabled:j||!s}))),Object(c.jsx)(r.EuiSpacer,{size:"s"}),Object(c.jsx)(r.EuiFlexGroup,{alignItems:"center",gutterSize:"s",responsive:!1},Object(c.jsx)(r.EuiFlexItem,{grow:!1,"data-test-subj":"add-to-library-checkbox"},Object(c.jsx)(r.EuiCheckbox,{id:"add-to-library-checkbox",label:o.i18n.translate("presentationUtil.saveModalDashboard.libraryOptionLabel",{defaultMessage:"Add to library"}),checked:d,disabled:null===u||j||!s,onChange:e=>i(e.target.checked)})),Object(c.jsx)(r.EuiFlexItem,{grow:!1},Object(c.jsx)(r.EuiIconTip,{type:"iInCircle",content:Object(c.jsx)(l.FormattedMessage,{id:"presentationUtil.saveModalDashboard.dashboardInfoTooltip",defaultMessage:"items added to the Visualize Library are available to all dashboards. Edits to a library item appear everywhere it is used."})}))))))}a.default=function(e){const{documentInfo:a,tagOptions:t,objectType:n,onClose:l,canSaveByReference:r}=e,{id:b}=a,h=!Boolean(b),{capabilities:p}=d.b.getHooks(),{canAccessDashboards:j,canCreateNewDashboards:g}=p.useService(),O=!j()||!g(),[x,v]=Object(s.useState)(b||O?null:"existing"),[f,S]=Object(s.useState)(r&&(!h||O)),[m,D]=Object(s.useState)(null),[y,w]=Object(s.useState)(h),M=O?null:()=>Object(c.jsx)(u,{onSelectDashboard:e=>{D(e)},onChange:e=>{v(e)},canSaveByReference:r,copyOnSave:y,documentId:b,dashboardOption:x,setAddToLibrary:S,isAddToLibrarySelected:f}),C=!y&&b?o.i18n.translate("presentationUtil.saveModalDashboard.saveLabel",{defaultMessage:"Save"}):o.i18n.translate("presentationUtil.saveModalDashboard.saveToLibraryLabel",{defaultMessage:"Save and add to library"}),T=o.i18n.translate("presentationUtil.saveModalDashboard.saveAndGoToDashboardLabel",{defaultMessage:"Save and go to Dashboard"}),L=null===x?C:T,_=!("existing"===x&&null===m);return Object(c.jsx)(i.SavedObjectSaveModal,{onSave:a=>{let t=null;!a.newCopyOnSave&&b||(t="existing"===x?(null==m?void 0:m.id)||null:x),e.onSave({...a,dashboardId:t,addToLibrary:f})},title:a.title,showCopyOnSave:!!b,options:f?t:void 0,description:a.description,showDescription:!0,confirmButtonLabel:L,initialCopyOnSave:h,isValid:_,objectType:n,onClose:l,onCopyOnSaveChange:e=>{r&&S(!0),v(null),w(e)},rightOptions:M})}},68:function(e,a,t){"use strict";t.r(a),t.d(a,"DashboardPicker",(function(){return l}));var s=t(1),n=t(7),o=t(3),i=t(11),d=t(0);function l(e){const[a,t]=Object(s.useState)([]),[l,r]=Object(s.useState)(!0),[b,c]=Object(s.useState)(null),[u,h]=Object(s.useState)(""),{isDisabled:p,onChange:j}=e,{dashboards:g}=i.b.getHooks(),{findDashboardsByTitle:O}=g.useService();return Object(s.useEffect)((()=>{let a=!1;return(async()=>{r(!0),t([]);const s=await O(u?`${u}*`:"");a||(s&&t(s.filter((a=>!e.idsToOmit||!e.idsToOmit.includes(a.id))).map((e=>({value:e.id,label:e.attributes.title,"data-test-subj":`dashboard-picker-option-${e.attributes.title.replaceAll(" ","-")}`})))),r(!1))})(),()=>{a=!0}}),[O,u,e.idsToOmit]),Object(d.jsx)(o.EuiComboBox,{"data-test-subj":"dashboardPickerInput",placeholder:n.i18n.translate("presentationUtil.dashboardPicker.searchDashboardPlaceholder",{defaultMessage:"Search dashboards..."}),singleSelection:{asPlainText:!0},options:a||[],selectedOptions:b?[b]:void 0,onChange:e=>{e.length?(c({value:e[0].value||"",label:e[0].label}),j({name:e[0].label,id:e[0].value||""})):(c(null),j(null))},onSearchChange:h,isDisabled:p,isLoading:l,compressed:!0})}a.default=l},69:function(e,a,t){switch(window.__kbnThemeTag__){case"v8dark":return t(84);case"v8light":return t(86)}},84:function(e,a,t){var s=t(9),n=t(85);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);s(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},85:function(e,a,t){(a=t(10)(!1)).push([e.i,".savAddDashboard__searchDashboards{margin-left:24px;margin-top:4px;width:300px}\n",""]),e.exports=a},86:function(e,a,t){var s=t(9),n=t(87);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);s(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},87:function(e,a,t){(a=t(10)(!1)).push([e.i,".savAddDashboard__searchDashboards{margin-left:24px;margin-top:4px;width:300px}\n",""]),e.exports=a}}]);