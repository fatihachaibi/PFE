(window.presentationUtil_bundle_jsonpfunction=window.presentationUtil_bundle_jsonpfunction||[]).push([[5,7],{134:function(e,t,s){"use strict";s.r(t),s.d(t,"LabsBeakerButton",(function(){return b}));var i=s(6),n=s.n(i),o=s(1),a=s.n(o),l=s(3),r=s(11),c=s(83),u=s(0);const b=({solutions:e,...t})=>{const{labs:s}=r.b.getHooks(),{getProjects:i}=s.useService(),[b,j]=Object(o.useState)(!1),p=i(),[d,g]=Object(o.useState)(Object.values(p).filter((e=>e.status.isOverride)).length);return Object(u.jsx)(a.a.Fragment,null,Object(u.jsx)(l.EuiButton,n()({},t,{onClick:()=>j((e=>!e)),minWidth:0}),Object(u.jsx)(l.EuiIcon,{type:"beaker"}),d>0?Object(u.jsx)(l.EuiNotificationBadge,{color:"subdued",style:{marginLeft:2}},d):null),b?Object(u.jsx)(c.LabsFlyout,{onClose:()=>j(!1),solutions:e,onEnabledCountChange:g}):null)};t.default=b},60:function(e,t,s){switch(window.__kbnThemeTag__){case"v8dark":return s(61);case"v8light":return s(63)}},61:function(e,t,s){var i=s(9),n=s(62);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);i(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},62:function(e,t,s){(t=s(10)(!1)).push([e.i,".projectListItem{position:relative;background:#1D1E24;padding:24px;min-width:500px}.projectListItem--isOverridden:before{position:absolute;top:24px;left:4px;bottom:24px;width:4px;background:#7DDED8;content:''}.projectListItem .euiSwitch__label{width:100%}.projectListItem+.projectListItem:after{position:absolute;top:0;right:0;left:0;height:1px;background:#343741;content:''}.euiFlyout .projectListItem{padding:24px 4px}.euiFlyout .projectListItem:first-child{padding-top:0}.euiFlyout .projectListItem--isOverridden:before{left:-8px}.euiFlyout .projectListItem--isOverridden:first-child:before{top:0}.projectListItem__titlePendingChangesIndicator{margin-left:8px;position:relative;top:-1px}.projectListItem__solutions{text-transform:capitalize}\n",""]),e.exports=t},63:function(e,t,s){var i=s(9),n=s(64);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);i(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},64:function(e,t,s){(t=s(10)(!1)).push([e.i,".projectListItem{position:relative;background:#fff;padding:24px;min-width:500px}.projectListItem--isOverridden:before{position:absolute;top:24px;left:4px;bottom:24px;width:4px;background:#00BFB3;content:''}.projectListItem .euiSwitch__label{width:100%}.projectListItem+.projectListItem:after{position:absolute;top:0;right:0;left:0;height:1px;background:#D3DAE6;content:''}.euiFlyout .projectListItem{padding:24px 4px}.euiFlyout .projectListItem:first-child{padding-top:0}.euiFlyout .projectListItem--isOverridden:before{left:-8px}.euiFlyout .projectListItem--isOverridden:first-child:before{top:0}.projectListItem__titlePendingChangesIndicator{margin-left:8px;position:relative;top:-1px}.projectListItem__solutions{text-transform:capitalize}\n",""]),e.exports=t},83:function(e,t,s){"use strict";s.r(t),s.d(t,"getOverridenCount",(function(){return L})),s.d(t,"LabsFlyout",(function(){return v}));var i=s(1),n=s.n(i),o=s(3),a=s(11),l=s(7),r=s(45),c=s(0);const u={Components:{Switch:{getKibanaSwitchText:()=>({name:l.i18n.translate("presentationUtil.labs.components.kibanaSwitchName",{defaultMessage:"Kibana"}),help:l.i18n.translate("presentationUtil.labs.components.kibanaSwitchHelp",{defaultMessage:"Enables this lab for all Kibana users."})}),getBrowserSwitchText:()=>({name:l.i18n.translate("presentationUtil.labs.components.browserSwitchName",{defaultMessage:"Browser"}),help:l.i18n.translate("presentationUtil.labs.components.browserSwitchHelp",{defaultMessage:"Enables the lab for this browser and persists after it closes."})}),getSessionSwitchText:()=>({name:l.i18n.translate("presentationUtil.labs.components.sessionSwitchName",{defaultMessage:"Session"}),help:l.i18n.translate("presentationUtil.labs.components.sessionSwitchHelp",{defaultMessage:"Enables the lab for this browser session, so it resets when it closes."})})},List:{getNoProjectsMessage:()=>l.i18n.translate("presentationUtil.labs.components.noProjectsMessage",{defaultMessage:"No labs currently available."}),getNoProjectsInSolutionMessage:e=>l.i18n.translate("presentationUtil.labs.components.noProjectsinSolutionMessage",{defaultMessage:"No labs currently in {solutionName}.",values:{solutionName:e}})},ListItem:{getOverrideLegend:()=>l.i18n.translate("presentationUtil.labs.components.overrideFlagsLabel",{defaultMessage:"Overrides"}),getOverriddenIconTipLabel:()=>l.i18n.translate("presentationUtil.labs.components.overridenIconTipLabel",{defaultMessage:"Default overridden"}),getEnabledStatusMessage:()=>Object(c.jsx)(r.FormattedMessage,{id:"presentationUtil.labs.components.enabledStatusMessage",defaultMessage:"Default: {status}",values:{status:Object(c.jsx)(o.EuiCode,null,"Enabled")},description:"Displays the enabled status of a lab project"}),getDisabledStatusMessage:()=>Object(c.jsx)(r.FormattedMessage,{id:"presentationUtil.labs.components.disabledStatusMessage",defaultMessage:"Default: {status}",values:{status:Object(c.jsx)(o.EuiCode,null,"Disabled")},description:"Displays the disabled status of a lab project"})},Flyout:{getTitleLabel:()=>l.i18n.translate("presentationUtil.labs.components.titleLabel",{defaultMessage:"Labs"}),getDescriptionMessage:()=>l.i18n.translate("presentationUtil.labs.components.descriptionMessage",{defaultMessage:"Try out features that are in progress or in technical preview."}),getResetToDefaultLabel:()=>l.i18n.translate("presentationUtil.labs.components.resetToDefaultLabel",{defaultMessage:"Reset to defaults"}),getLabFlagsLabel:()=>l.i18n.translate("presentationUtil.labs.components.labFlagsLabel",{defaultMessage:"Lab flags"}),getRefreshLabel:()=>l.i18n.translate("presentationUtil.labs.components.calloutHelp",{defaultMessage:"Refresh to apply changes"}),getCloseButtonLabel:()=>l.i18n.translate("presentationUtil.labs.components.closeButtonLabel",{defaultMessage:"Close"})}}};var b=s(46),j=s.n(b),p=s(13);const{Switch:d}=u.Components,g={kibana:d.getKibanaSwitchText(),browser:d.getBrowserSwitchText(),session:d.getSessionSwitchText()},x=({env:e,isChecked:t,onChange:s,name:i})=>{const{capabilities:n}=a.b.getHooks(),l="kibana"!==e||n.useService().canSetAdvancedSettings();return Object(c.jsx)(o.EuiFlexItem,{grow:!1,style:{marginBottom:".25rem"}},Object(c.jsx)(o.EuiFlexGroup,{gutterSize:"xs",alignItems:"flexEnd",responsive:!1},Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiSwitch,{disabled:!l,checked:t,style:{marginTop:1},label:Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiScreenReaderOnly,null,Object(c.jsx)("span",null,i," - ")),g[e].name),onChange:e=>s(e.target.checked),compressed:!0})),Object(c.jsx)(o.EuiFlexItem,{style:{textAlign:"right"}},Object(c.jsx)(o.EuiIconTip,{content:g[e].help,position:"left"}))),Object(c.jsx)(o.EuiSpacer,{size:"xs"}))};s(60);const{ListItem:m}=u.Components,f=({project:e,onStatusChange:t})=>{const{id:s,status:i,isActive:a,name:l,description:r,solutions:u}=e,{isEnabled:b,isOverride:d}=i;return Object(c.jsx)(o.EuiFlexItem,{className:j()({projectListItem:!0,"projectListItem--isOverridden":d,"projectListItem--isOverriddenEnabled":d&&b})},Object(c.jsx)(o.EuiFlexGroup,{gutterSize:"m",responsive:!1},Object(c.jsx)(o.EuiFlexItem,null,Object(c.jsx)(o.EuiFlexGroup,{direction:"column",gutterSize:"xs",responsive:!1},Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiTitle,{className:"projectListItem__title",size:"xs"},Object(c.jsx)("h2",null,l,d?Object(c.jsx)("span",{className:"projectListItem__titlePendingChangesIndicator"},Object(c.jsx)(o.EuiIconTip,{content:m.getOverriddenIconTipLabel(),position:"top",type:"dot",color:"success"})):null))),Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)("div",{className:"projectListItem__solutions"},u.map((e=>Object(c.jsx)(o.EuiBadge,{key:e},e))))),Object(c.jsx)(o.EuiFlexItem,null,Object(c.jsx)(o.EuiSpacer,{size:"s"}),Object(c.jsx)(o.EuiText,{size:"s",color:"subdued"},r)),Object(c.jsx)(o.EuiFlexItem,null,Object(c.jsx)(o.EuiSpacer,{size:"xs"}),Object(c.jsx)(o.EuiText,{size:"xs",color:"subdued"},a?m.getEnabledStatusMessage():m.getDisabledStatusMessage())))),Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiFormFieldset,{legend:{children:Object(c.jsx)(n.a.Fragment,null,Object(c.jsx)(o.EuiScreenReaderOnly,null,Object(c.jsx)("span",null,l)),m.getOverrideLegend())}},p.b.map((e=>{const n=i[e];if(void 0!==n)return Object(c.jsx)(x,{key:e,isChecked:n,onChange:i=>t(s,e,i),env:e,name:l})}))))))},{List:O}=u.Components,h=({solutions:e})=>{let t=O.getNoProjectsMessage();if(1===(null==e?void 0:e.length))switch(e[0]){case"dashboard":t=O.getNoProjectsInSolutionMessage("Dashboard");case"canvas":t=O.getNoProjectsInSolutionMessage("Canvas")}return Object(c.jsx)(o.EuiCallOut,{title:t})},E=e=>{const{solutions:t,projects:s,onStatusChange:i}=e,n=Object.values(s).map((e=>e.isDisplayed?t&&!t.some((t=>e.solutions.includes(t)))?null:Object(c.jsx)("li",{key:e.id},Object(c.jsx)(f,{project:e,onStatusChange:i})):null)).filter((e=>null!==e));return Object(c.jsx)(o.EuiFlexGroup,{direction:"column",gutterSize:"none",responsive:!1},n.length>0?Object(c.jsx)("ul",null,n):Object(c.jsx)(h,{solutions:t}))},{Flyout:I}=u.Components,L=e=>Object.values(e).filter((e=>e.status.isOverride)).length,v=e=>{const{solutions:t,onEnabledCountChange:s=(()=>{}),onClose:n}=e,{labs:l}=a.b.getHooks(),{getProjects:r,setProjectStatus:u,reset:b}=l.useService(),[j,p]=Object(i.useState)(r()),[d,g]=Object(i.useState)(L(j)),x=((e,t)=>{for(const s of Object.keys(e))for(const i of Object.keys(e[s].status))if(e[s].status[i]!==t[s].status[i])return!0;return!1})(Object(i.useRef)(r()).current,j);Object(i.useEffect)((()=>{g(L(j))}),[j]),Object(i.useEffect)((()=>{s(d)}),[s,d]);let m=null;const f=Object(c.jsx)(o.EuiButtonEmpty,{onClick:()=>{b(),p(r())},isDisabled:!d},I.getResetToDefaultLabel()),O=Object(c.jsx)(o.EuiButton,{color:"primary",fill:!0,onClick:()=>{window.location.reload()},isDisabled:!x},I.getRefreshLabel());return m=Object(c.jsx)(o.EuiFlyoutFooter,null,Object(c.jsx)(o.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiButtonEmpty,{iconType:"cross",onClick:()=>n(),flush:"left"},I.getCloseButtonLabel())),Object(c.jsx)(o.EuiFlexItem,null,Object(c.jsx)(o.EuiFlexGroup,{justifyContent:"flexEnd",gutterSize:"s",responsive:!1},Object(c.jsx)(o.EuiFlexItem,{grow:!1},f),Object(c.jsx)(o.EuiFlexItem,{grow:!1},O))))),Object(c.jsx)(o.EuiFlyout,{onClose:n,hideCloseButton:!0,maskProps:{headerZindexLocation:"below"}},Object(c.jsx)(o.EuiFlyoutHeader,{hasBorder:!0},Object(c.jsx)(o.EuiTitle,{size:"m"},Object(c.jsx)("h2",null,Object(c.jsx)(o.EuiFlexGroup,{gutterSize:"s",alignItems:"center",responsive:!1},Object(c.jsx)(o.EuiFlexItem,{grow:!1},Object(c.jsx)(o.EuiIcon,{type:"beaker",size:"l"})),Object(c.jsx)(o.EuiFlexItem,null,I.getTitleLabel())))),Object(c.jsx)(o.EuiSpacer,{size:"s"}),Object(c.jsx)(o.EuiText,{size:"s",color:"subdued"},Object(c.jsx)("p",null,I.getDescriptionMessage()))),Object(c.jsx)(o.EuiFlyoutBody,null,Object(c.jsx)(E,{projects:j,solutions:t,onStatusChange:(e,t,s)=>{u(e,t,s),p(r())}})),m)};t.default=v}}]);