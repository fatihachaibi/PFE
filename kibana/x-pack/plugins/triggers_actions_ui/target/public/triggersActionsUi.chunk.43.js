/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[43,50],{125:function(e,t,s){"use strict";s.d(t,"a",(function(){return u})),s.d(t,"b",(function(){return l}));var n=s(78),o=s.n(n),i=s(0);const a=new RegExp(`^([\\d\\.]+)\\s*(${o.a.units.join("|")})$`),l=e=>{if(e){const t=e.match(a);if(t)return{value:Number(t[1]),unit:t[2]}}throw new Error(i.i18n.translate("xpack.triggersActionsUI.parseInterval.errorMessage",{defaultMessage:"{value} is not an interval string",values:{value:e}}))};s(44);const u="/api/triggers_actions_ui"},149:function(e,t,s){"use strict";s.d(t,"a",(function(){return g}));var n=s(1),o=s(40),i=s.n(o),a=s(0),l=s(43),u=s(77),r=s(3);const c=a.i18n.translate("xpack.triggersActionsUI.sections.rulesList.rulesListSnoozePanel.snoozeSuccess",{defaultMessage:"Rule successfully snoozed"}),d=a.i18n.translate("xpack.triggersActionsUI.sections.rulesList.rulesListSnoozePanel.unsnoozeSuccess",{defaultMessage:"Rule successfully unsnoozed"}),b=a.i18n.translate("xpack.triggersActionsUI.sections.rulesList.rulesListSnoozePanel.snoozeFailed",{defaultMessage:"Unabled to change rule snooze settings"}),j=()=>{},g=e=>{const{rule:t,previousSnoozeInterval:s,onRuleChanged:o,onClose:a,snoozeRule:g,unsnoozeRule:x,onLoading:O=j}=e,{notifications:{toasts:z}}=Object(l.b)().services,{isSnoozedUntil:p}=t,[m,f]=Object(u.usePreviousSnoozeInterval)(s),S=Object(n.useMemo)((()=>Object(u.isRuleSnoozed)(t)),[t]),I=Object(n.useCallback)(((e,t)=>(t&&f(t),g(e,t))),[f,g]),v=Object(n.useCallback)((async(e,t)=>{O(!0),a();try{if(-1===e)await I(-1,null),z.addSuccess(c);else if(0!==e){const s=i()().add(e,t).toISOString();await I(s,`${e}${t}`),z.addSuccess(c)}else await x(),z.addSuccess(d)}catch(e){z.addDanger(b)}finally{await o(),O(!1)}}),[z,o,I,x,O,a]);return Object(r.jsx)(u.SnoozePanel,{applySnooze:v,interval:Object(u.futureTimeToInterval)(p),showCancel:S,previousSnoozeInterval:m})}},77:function(e,t,s){"use strict";s.r(t),s.d(t,"usePreviousSnoozeInterval",(function(){return g})),s.d(t,"isRuleSnoozed",(function(){return x})),s.d(t,"RuleStatusDropdown",(function(){return O})),s.d(t,"SnoozePanel",(function(){return p})),s.d(t,"futureTimeToInterval",(function(){return m})),s.d(t,"default",(function(){return O}));var n=s(1),o=s.n(n),i=s(40),a=s.n(i),l=s(0),u=s(15),r=s(125),c=s(3);const d="LL @ LT",b=[[1,"h"],[3,"h"],[8,"h"],[1,"d"]],j="triggersActionsUi_previousSnoozeInterval",g=e=>{let t=localStorage.getItem(j);if(t)try{Object(r.b)(t)}catch(e){t=null,localStorage.removeItem(j)}const s=void 0!==e,o=s?e:t,[i,a]=Object(n.useState)(o);return[i,e=>{if(e.startsWith("-"))throw new Error("Cannot store a negative interval");s||localStorage.setItem(j,e),a(e)}]},x=e=>Boolean(e.isSnoozedUntil&&new Date(e.isSnoozedUntil).getTime()>Date.now()||e.muteAll),O=({rule:e,onRuleChanged:t,disableRule:s,enableRule:o,snoozeRule:i,unsnoozeRule:l,isEditable:r,previousSnoozeInterval:b,hideSnoozeOption:j=!1,direction:O="column"})=>{const[p,m]=Object(n.useState)(e.enabled),[f,k]=Object(n.useState)(x(e)),[L,y]=g(b);Object(n.useEffect)((()=>{m(e.enabled)}),[e.enabled]),Object(n.useEffect)((()=>{k(x(e))}),[e]);const[h,C]=Object(n.useState)(!1),[w,U]=Object(n.useState)(!1),A=Object(n.useCallback)((()=>U((e=>!e))),[U]),T=Object(n.useCallback)((()=>U(!1)),[U]),R=Object(n.useCallback)(((e,t)=>(t&&y(t),i(e,t))),[y,i]),F=Object(n.useCallback)((async n=>{if(e.enabled!==n){C(!0);try{n?await o():await s(),m(!p),t()}finally{C(!1)}}}),[e.enabled,p,t,o,s]),P=Object(n.useCallback)((async(e,s)=>{C(!0);try{if(-1===e)await R(-1,null);else if(0!==e){const t=a()().add(e,s).toISOString();await R(t,`${e}${s}`)}else await l();k(0!==e),t()}finally{C(!1)}}),[C,k,t,R,l]),B=p?f?"warning":"primary":"default",D=p?f?v:S:I,N=p&&f?Object(c.jsx)(u.EuiToolTip,{content:e.muteAll?M:a()(new Date(e.isSnoozedUntil)).format(d)},Object(c.jsx)(u.EuiText,{color:"subdued",size:"xs"},e.muteAll?M:a()(new Date(e.isSnoozedUntil)).fromNow(!0))):null,$=Object(c.jsx)(u.EuiBadge,{color:B,"data-test-subj":"statusDropdownReadonly"},D),_=Object(c.jsx)(u.EuiBadge,{color:B,iconSide:"right",iconType:!h&&r?"arrowDown":void 0,onClick:A,iconOnClick:A,onClickAriaLabel:E,iconOnClickAriaLabel:E,isDisabled:h},D,h&&Object(c.jsx)(u.EuiLoadingSpinner,{style:{marginLeft:"4px",marginRight:"4px"},size:"s"}));return Object(c.jsx)(u.EuiFlexGroup,{direction:O,alignItems:"row"===O?"center":"flexStart",justifyContent:"flexStart",gutterSize:"row"===O?"s":"xs",responsive:!1},Object(c.jsx)(u.EuiFlexItem,{grow:!1},r?Object(c.jsx)(u.EuiPopover,{button:_,isOpen:w&&r,closePopover:T,panelPaddingSize:"s","data-test-subj":"statusDropdown",title:D},Object(c.jsx)(z,{onClosePopover:T,onChangeEnabledStatus:F,onChangeSnooze:P,isEnabled:p,isSnoozed:f,snoozeEndTime:e.isSnoozedUntil,previousSnoozeInterval:L,hideSnoozeOption:j})):$),Object(c.jsx)(u.EuiFlexItem,{"data-test-subj":"remainingSnoozeTime",grow:!1},N))},z=({onChangeEnabledStatus:e,onChangeSnooze:t,onClosePopover:s,isEnabled:i,isSnoozed:l,snoozeEndTime:r,previousSnoozeInterval:b,hideSnoozeOption:j=!1})=>{const g=Object(n.useCallback)((()=>{l?t(0,"m"):e(!0),s()}),[e,s,t,l]),x=Object(n.useCallback)((()=>{e(!1),s()}),[e,s]),O=Object(n.useCallback)(((e,n)=>{t(e,n),s()}),[s,t]);let z=Object(c.jsx)(u.EuiText,{size:"s"},k);l&&r&&(z=Object(c.jsx)(o.a.Fragment,null,Object(c.jsx)(u.EuiText,{size:"s"},k)," ",Object(c.jsx)(u.EuiText,{size:"xs",color:"subdued"},a()(r).format(d))));const f=[{id:0,width:360,items:[{name:S,icon:i&&!l?"check":"empty",onClick:g,"data-test-subj":"statusDropdownEnabledItem"},{name:I,icon:i?"empty":"check",onClick:x,"data-test-subj":"statusDropdownDisabledItem"},...j?[]:[{name:z,icon:i&&l?"check":"empty",panel:1,disabled:!i,"data-test-subj":"statusDropdownSnoozeItem"}]]},...j?[]:[{id:1,width:360,title:k,content:Object(c.jsx)(u.EuiPanel,{paddingSize:"none"},Object(c.jsx)(p,{applySnooze:O,interval:m(r),showCancel:l,previousSnoozeInterval:b}))}]];return Object(c.jsx)(u.EuiContextMenu,{"data-test-subj":"ruleStatusMenu",initialPanelId:0,panels:f})},p=({interval:e="3d",isLoading:t=!1,applySnooze:s,showCancel:i,previousSnoozeInterval:a})=>{const[d,j]=Object(n.useState)(Object(r.b)(e).value),[g,x]=Object(n.useState)(Object(r.b)(e).unit),O=Object(n.useCallback)((({target:e})=>j(e.value)),[j]),z=Object(n.useCallback)((({target:e})=>x(e.value)),[x]),p=Object(n.useCallback)((()=>s(-1)),[s]),m=Object(n.useCallback)((()=>s(d,g)),[s,d,g]),S=Object(n.useCallback)((()=>s(0,"m")),[s]),I=a?Object(r.b)(a):null,v=(null==I?void 0:I.value)===d&&(null==I?void 0:I.unit)===g,k=I&&!v&&Object(c.jsx)(o.a.Fragment,null,Object(c.jsx)(u.EuiFlexGroup,{alignItems:"center",justifyContent:"flexStart",gutterSize:"s"},Object(c.jsx)(u.EuiFlexItem,{grow:!1},Object(c.jsx)(u.EuiButtonEmpty,{style:{height:"1em"},iconType:"refresh","data-test-subj":"ruleSnoozePreviousButton",onClick:()=>s(I.value,I.unit)},l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.previousSnooze",{defaultMessage:"Previous"}))),Object(c.jsx)(u.EuiFlexItem,{grow:!1},Object(c.jsx)(u.EuiText,{color:"subdued",size:"s","data-test-subj":"ruleSnoozePreviousText"},f(I.value,I.unit)))),Object(c.jsx)(u.EuiHorizontalRule,{margin:"s"}));return Object(c.jsx)(o.a.Fragment,null,Object(c.jsx)(u.EuiSpacer,{size:"s"}),Object(c.jsx)(u.EuiFlexGroup,{"data-test-subj":"snoozePanel",gutterSize:"xs"},Object(c.jsx)(u.EuiFlexItem,null,Object(c.jsx)(u.EuiFieldNumber,{min:1,value:d,onChange:O,"aria-label":l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozePanelIntervalValueLabel",{defaultMessage:"Snooze interval value"}),"data-test-subj":"ruleSnoozeIntervalValue"})),Object(c.jsx)(u.EuiFlexItem,{grow:2},Object(c.jsx)(u.EuiSelect,{id:Object(u.useGeneratedHtmlId)({prefix:"snoozeUnit"}),value:g,onChange:z,"aria-label":l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozePanelIntervalUnitLabel",{defaultMessage:"Snooze interval unit"}),options:[{value:"m",text:L},{value:"h",text:y},{value:"d",text:h},{value:"w",text:C},{value:"M",text:w}],"data-test-subj":"ruleSnoozeIntervalUnit"})),Object(c.jsx)(u.EuiFlexItem,{grow:!1},Object(c.jsx)(u.EuiButton,{disabled:!d||d<1,isLoading:t,onClick:m,"data-test-subj":"ruleSnoozeApply"},l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.applySnooze",{defaultMessage:"Apply"})))),Object(c.jsx)(u.EuiHorizontalRule,{margin:"s"}),k,Object(c.jsx)(u.EuiFlexGrid,{columns:2,gutterSize:"s"},Object(c.jsx)(u.EuiFlexItem,null,Object(c.jsx)(u.EuiTitle,{size:"xxs"},Object(c.jsx)("h5",null,l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozeCommonlyUsed",{defaultMessage:"Commonly used"})))),Object(c.jsx)(u.EuiFlexItem,null),b.map((([e,t])=>Object(c.jsx)(u.EuiFlexItem,{key:`snooze-${e}${t}`},Object(c.jsx)(u.EuiLink,{onClick:()=>s(e,t)},f(e,t)))))),Object(c.jsx)(u.EuiHorizontalRule,{margin:"s"}),Object(c.jsx)(u.EuiFlexGroup,null,Object(c.jsx)(u.EuiFlexItem,null,Object(c.jsx)(u.EuiLink,{onClick:p,"data-test-subj":"ruleSnoozeIndefiniteApply"},l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozeIndefinitely",{defaultMessage:"Snooze indefinitely"})))),i&&Object(c.jsx)(o.a.Fragment,null,Object(c.jsx)(u.EuiHorizontalRule,{margin:"s"}),Object(c.jsx)(u.EuiFlexGroup,null,Object(c.jsx)(u.EuiFlexItem,{grow:!0},Object(c.jsx)(u.EuiButton,{isLoading:t,color:"danger",onClick:S,"data-test-subj":"ruleSnoozeCancel"},"Cancel snooze")))),Object(c.jsx)(u.EuiSpacer,{size:"s"}))},m=e=>{if(!e)return;const t=a()(e).locale("en").fromNow(!0),[s,n]=t.split(" ");let o,i="a"===s||"an"===s?1:parseInt(s,10);switch(n){case"year":case"years":o="M",i*=12;break;case"month":case"months":o="M";break;case"day":case"days":o="d";break;case"hour":case"hours":o="h";break;case"minute":case"minutes":o="m"}return o?`${i}${o}`:void 0},f=(e,t)=>1===e?U[t]:a.a.duration(e,t).humanize(),S=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.enabledRuleStatus",{defaultMessage:"Enabled"}),I=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.disabledRuleStatus",{defaultMessage:"Disabled"}),v=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozedRuleStatus",{defaultMessage:"Snoozed"}),k=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozeMenuTitle",{defaultMessage:"Snooze"}),E=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.ruleStatusDropdownMenuLabel",{defaultMessage:"Change rule status or snooze"}),L=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.minutesLabel",{defaultMessage:"minutes"}),y=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.hoursLabel",{defaultMessage:"hours"}),h=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.daysLabel",{defaultMessage:"days"}),C=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.weeksLabel",{defaultMessage:"weeks"}),w=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.monthsLabel",{defaultMessage:"months"}),M=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.remainingSnoozeIndefinite",{defaultMessage:"Indefinitely"}),U={m:l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozeOneMinute",{defaultMessage:"1 minute"}),h:l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozeOneHour",{defaultMessage:"1 hour"}),d:l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozeOneDay",{defaultMessage:"1 day"}),w:l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozeOneWeek",{defaultMessage:"1 week"}),M:l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.snoozeOneMonth",{defaultMessage:"1 month"})}},85:function(e,t,s){"use strict";s.r(t),s.d(t,"RulesListNotifyBadge",(function(){return b})),s.d(t,"default",(function(){return b}));var n=s(1),o=s(40),i=s.n(o),a=s(15),l=s(0),u=s(77),r=s(149),c=s(3);const d=l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.rulesListNotifyBadge.openSnoozePanel",{defaultMessage:"Open snooze panel"}),b=e=>{const{isLoading:t=!1,rule:s,isOpen:o,previousSnoozeInterval:b,onClick:j,onClose:g,onLoading:x,onRuleChanged:O,snoozeRule:z,unsnoozeRule:p}=e,{isSnoozedUntil:m,muteAll:f,isEditable:S}=s,I=f,v=Object(n.useMemo)((()=>Object(u.isRuleSnoozed)(s)),[s]),k=Object(n.useMemo)((()=>!1),[]),E=Object(n.useMemo)((()=>m?i()(m).format("MMM D"):""),[m]),L=Object(n.useMemo)((()=>I?l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.rulesListNotifyBadge.snoozedIndefinitelyTooltip",{defaultMessage:"Notifications snoozed indefinitely"}):k?"":v?l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.rulesListNotifyBadge.snoozedTooltip",{defaultMessage:"Notifications snoozed for {snoozeTime}",values:{snoozeTime:i()(m).fromNow(!0)}}):""),[I,k,v,m]),y=Object(n.useMemo)((()=>Object(c.jsx)(a.EuiButton,{size:"s",isLoading:t,disabled:t||!S,"data-test-subj":"rulesListNotifyBadge-snoozed","aria-label":d,minWidth:85,iconType:"bellSlash",color:"accent",onClick:j},Object(c.jsx)(a.EuiText,{size:"xs"},E))),[E,t,S,j]),h=Object(n.useMemo)((()=>Object(c.jsx)(a.EuiButton,{size:"s",isLoading:t,disabled:t||!S,"data-test-subj":"rulesListNotifyBadge-scheduled",minWidth:85,iconType:"calendar",color:"text","aria-label":d,onClick:j},Object(c.jsx)(a.EuiText,{size:"xs"},E))),[E,t,S,j]),C=Object(n.useMemo)((()=>Object(c.jsx)(a.EuiButtonIcon,{size:"s",isLoading:t,disabled:t||!S,display:t?"base":"empty","data-test-subj":"rulesListNotifyBadge-unsnoozed","aria-label":d,className:o||t?"":"ruleSidebarItem__action",iconType:"bell",onClick:j})),[o,t,S,j]),w=Object(n.useMemo)((()=>Object(c.jsx)(a.EuiButtonIcon,{size:"s",isLoading:t,disabled:t||!S,display:"base","data-test-subj":"rulesListNotifyBadge-snoozedIndefinitely","aria-label":d,iconType:"bellSlash",color:"accent",onClick:j})),[t,S,j]),M=Object(n.useMemo)((()=>k?h:I?w:v?y:C),[v,k,I,h,y,w,C]),U=Object(n.useMemo)((()=>o?M:Object(c.jsx)(a.EuiToolTip,{content:L},M)),[o,M,L]);return Object(c.jsx)(a.EuiPopover,{"data-test-subj":"rulesListNotifyBadge",isOpen:o,closePopover:g,button:U},Object(c.jsx)(a.EuiPopoverTitle,null,Object(c.jsx)(a.EuiFlexGroup,{alignItems:"center",gutterSize:"s"},Object(c.jsx)(a.EuiFlexItem,{grow:!1},Object(c.jsx)(a.EuiIcon,{type:"bellSlash"})),Object(c.jsx)(a.EuiFlexItem,{grow:!1},l.i18n.translate("xpack.triggersActionsUI.sections.rulesList.rulesListNotifyBadge.snoozeActions",{defaultMessage:"Snooze actions"})))),Object(c.jsx)(r.a,{rule:s,onClose:g,onLoading:x,previousSnoozeInterval:b,onRuleChanged:O,snoozeRule:z,unsnoozeRule:p}))}}}]);