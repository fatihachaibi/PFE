(window.presentationUtil_bundle_jsonpfunction=window.presentationUtil_bundle_jsonpfunction||[]).push([[10],{68:function(e,t,a){"use strict";a.r(t),a.d(t,"DashboardPicker",(function(){return d}));var s=a(1),i=a(7),n=a(3),l=a(11),o=a(0);function d(e){const[t,a]=Object(s.useState)([]),[d,r]=Object(s.useState)(!0),[u,c]=Object(s.useState)(null),[b,h]=Object(s.useState)(""),{isDisabled:p,onChange:f}=e,{dashboards:j}=l.b.getHooks(),{findDashboardsByTitle:O}=j.useService();return Object(s.useEffect)((()=>{let t=!1;return(async()=>{r(!0),a([]);const s=await O(b?`${b}*`:"");t||(s&&a(s.filter((t=>!e.idsToOmit||!e.idsToOmit.includes(t.id))).map((e=>({value:e.id,label:e.attributes.title,"data-test-subj":`dashboard-picker-option-${e.attributes.title.replaceAll(" ","-")}`})))),r(!1))})(),()=>{t=!0}}),[O,b,e.idsToOmit]),Object(o.jsx)(n.EuiComboBox,{"data-test-subj":"dashboardPickerInput",placeholder:i.i18n.translate("presentationUtil.dashboardPicker.searchDashboardPlaceholder",{defaultMessage:"Search dashboards..."}),singleSelection:{asPlainText:!0},options:t||[],selectedOptions:u?[u]:void 0,onChange:e=>{e.length?(c({value:e[0].value||"",label:e[0].label}),f({name:e[0].label,id:e[0].value||""})):(c(null),f(null))},onSearchChange:h,isDisabled:p,isLoading:d,compressed:!0})}t.default=d}}]);