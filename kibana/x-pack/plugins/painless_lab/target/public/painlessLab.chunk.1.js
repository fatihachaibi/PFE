/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.painlessLab_bundle_jsonpfunction=window.painlessLab_bundle_jsonpfunction||[]).push([[1],{21:function(e,t,n){"use strict";n.r(t),n.d(t,"renderApp",(function(){return B}));var s=n(13),a=n.n(s),i=n(18),o=n(16),l=n(15),r=n(0),c=n(14);const u=r.i18n.translate("xpack.painlessLab.contextDefaultLabel",{defaultMessage:"Basic"}),d=r.i18n.translate("xpack.painlessLab.contextFilterLabel",{defaultMessage:"Filter"}),p=r.i18n.translate("xpack.painlessLab.contextScoreLabel",{defaultMessage:"Score"}),b=[{value:"painless_test",inputDisplay:u,"data-test-subj":"basicButtonDropdown",dropdownDisplay:Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)("strong",null,u),Object(c.jsx)(l.EuiText,{size:"s",color:"subdued"},Object(c.jsx)("p",{className:"euiTextColor--subdued"},r.i18n.translate("xpack.painlessLab.context.defaultLabel",{defaultMessage:"The script result will be converted to a string"}))))},{value:"filter",inputDisplay:d,"data-test-subj":"filterButtonDropdown",dropdownDisplay:Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)("strong",null,d),Object(c.jsx)(l.EuiText,{size:"s",color:"subdued"},Object(c.jsx)("p",{className:"euiTextColor--subdued"},r.i18n.translate("xpack.painlessLab.context.filterLabel",{defaultMessage:"Use the context of a filter's script query"}))))},{value:"score",inputDisplay:p,"data-test-subj":"scoreButtonDropdown",dropdownDisplay:Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)("strong",null,p),Object(c.jsx)(l.EuiText,{size:"s",color:"subdued"},Object(c.jsx)("p",{className:"euiTextColor--subdued"},r.i18n.translate("xpack.painlessLab.context.scoreLabel",{defaultMessage:"Use the context of a script_score function in function_score query"}))))}],x='boolean isInCircle(def posX, def posY, def circleX, def circleY, def radius) {\n  double distanceFromCircleCenter = Math.sqrt(Math.pow(circleX - posX, 2) + Math.pow(circleY - posY, 2));\n  return distanceFromCircleCenter <= radius;\n}\n\nboolean isOnCircle(def posX, def posY, def circleX, def circleY, def radius, def thickness, def squashY) {\n  double distanceFromCircleCenter = Math.sqrt(Math.pow(circleX - posX, 2) + Math.pow((circleY - posY) / squashY, 2));\n  return (\n    distanceFromCircleCenter >= radius - thickness\n    && distanceFromCircleCenter <= radius + thickness\n  );\n}\n\ndef result = \'\';\nint charCount = 0;\n\n// Canvas dimensions\nint width = 31;\nint height = 31;\ndouble halfWidth = Math.floor(width * 0.5);\ndouble halfHeight = Math.floor(height * 0.5);\n\n// Style constants\ndouble strokeWidth = 0.6;\n\n// Smiley face configuration\nint headSize = 13;\ndouble headSquashY = 0.78;\nint eyePositionX = 10;\nint eyePositionY = 12;\nint eyeSize = 1;\nint mouthSize = 15;\nint mouthPositionX = width / 2;\nint mouthPositionY = 5;\nint mouthOffsetY = 11;\n\nfor (int y = 0; y < height; y++) {\n  for (int x = 0; x < width; x++) {\n    boolean isHead = isOnCircle(x, y, halfWidth, halfHeight, headSize, strokeWidth, headSquashY);\n    boolean isLeftEye = isInCircle(x, y, eyePositionX, eyePositionY, eyeSize);\n    boolean isRightEye = isInCircle(x, y, width - eyePositionX - 1, eyePositionY, eyeSize);\n    boolean isMouth = isOnCircle(x, y, mouthPositionX, mouthPositionY, mouthSize, strokeWidth, 1) && y > mouthPositionY + mouthOffsetY;\n\n    if (isLeftEye || isRightEye || isMouth || isHead) {\n      result += "*";\n    } else {\n      result += ".";\n    }\n\n    result += " ";\n\n    // Make sure the smiley face doesn\'t deform as the container changes width.\n    charCount++;\n    if (charCount % width === 0) {\n      result += "\\\\n";\n    }\n  }\n}\n\nreturn result;',j={context:b[0].value,code:x,parameters:'{\n  "string_parameter": "string value",\n  "number_parameter": 1.5,\n  "boolean_parameter": true\n}',index:"my-index",document:'{\n  "my_field": "field_value"\n}',query:""},g=Object(s.createContext)(void 0),f=e=>{const{index:t}=e,n=Boolean(t||t.trim());return{isValid:n,fields:{index:n}}},h=({children:e,value:{http:t,links:n,chrome:a}})=>{const i="painlessLabState",[o,l]=Object(s.useState)((()=>{const e={...j,...JSON.parse(localStorage.getItem(i)||"{}")};return{payload:e,validation:f(e)}}));return Object(c.jsx)(g.Provider,{value:{updatePayload:e=>{const t={...o.payload,...e};localStorage.setItem(i,JSON.stringify(t)),l({payload:t,validation:f(t)})},store:o,services:{http:t,chrome:a},links:n}},e)},O=()=>{const e=Object(s.useContext)(g);if(!e)throw new Error("AppContext can only be used inside of AppContextProvider!");return e};let m;function y(e="",t=0){const n=new Array(t+1).join(" ");return e.replace(/\n/g,`\n${n}`)}function L({code:e,context:t,parameters:n,index:s,document:a,query:i},o=m.UGLY){const l="filter"===t||"score"===t;let r,c,u,d,p,b;return o===m.UGLY?(r=JSON.stringify(e),c=n,u=t,d=s,p=a,b=i):(r=`"""${y(e,4)}"""`,c=y(n,4),u=y(t,6),d=y(s),p=y(a,4),b=y(i,4)),`{\n  "script": {\n    "source": ${r}${n?`,\n    "params": ${c}`:""}\n  }${l?`,\n  "context": "${u}",\n  "context_setup": {\n    "index": "${d}",\n    "document": ${p}${i&&"score"===t?`,\n    "query": ${b}`:""}\n  }`:""}\n}`}function E(e){try{return JSON.stringify(e,null,2)}catch(t){return`Invalid JSON ${String(e)}`}}!function(e){e.UGLY="ugly",e.PRETTY="pretty"}(m||(m={}));var k=n(19),C=n(1);function S({response:e}){return Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)(l.EuiSpacer,{size:"m"}),Object(c.jsx)(l.EuiCodeBlock,{language:"json",paddingSize:"s",isCopyable:!0},function(e){return e?"string"==typeof e.result?e.result.replace(/\\n/g,"\n"):e.error?(t=e.error)instanceof Error?t.message:t.script_stack&&t.caused_by&&t.position?`Unhandled Exception ${t.caused_by.type}\n\n${t.caused_by.reason}\n\nStack:\n${E(t.script_stack)}\n`:E(t):E(e):"";var t}(e)))}var M=n(17);const F=()=>{const{store:{payload:e},updatePayload:t,links:n}=O();return Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)(l.EuiSpacer,{size:"m"}),Object(c.jsx)(l.EuiFormRow,{label:Object(c.jsx)(l.EuiToolTip,{content:r.i18n.translate("xpack.painlessLab.parametersFieldTooltipText",{defaultMessage:'These variables are assigned to the "params" object in your script'})},Object(c.jsx)("span",null,Object(c.jsx)(M.FormattedMessage,{id:"xpack.painlessLab.parametersFieldLabel",defaultMessage:"Parameters (JSON)"})," ",Object(c.jsx)(l.EuiIcon,{type:"questionInCircle",color:"subdued"}))),fullWidth:!0,labelAppend:Object(c.jsx)(l.EuiText,{size:"xs"},Object(c.jsx)(l.EuiLink,{href:n.modulesScriptingPreferParams,target:"_blank"},r.i18n.translate("xpack.painlessLab.parametersFieldDocLinkText",{defaultMessage:"Parameters docs"})))},Object(c.jsx)(o.CodeEditor,{languageId:"json",height:600,value:e.parameters,onChange:e=>t({parameters:e}),options:{fontSize:12,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",automaticLayout:!0},editorDidMount:e=>{const t=e.getModel();t&&t.updateOptions({tabSize:2})}})))},w=()=>{const{store:{payload:e,validation:t},updatePayload:n,links:s}=O(),{context:i,document:u,index:d,query:p}=e;return Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)(l.EuiSpacer,{size:"m"}),Object(c.jsx)(l.EuiFormRow,{label:Object(c.jsx)(l.EuiToolTip,{content:r.i18n.translate("xpack.painlessLab.contextFieldTooltipText",{defaultMessage:"Different contexts provide different functions on the ctx object"})},Object(c.jsx)("span",null,Object(c.jsx)(M.FormattedMessage,{id:"xpack.painlessLab.contextFieldLabel",defaultMessage:"Execution context"})," ",Object(c.jsx)(l.EuiIcon,{type:"questionInCircle",color:"subdued"}))),labelAppend:Object(c.jsx)(l.EuiText,{size:"xs"},Object(c.jsx)(l.EuiLink,{href:s.painlessExecuteAPIContexts,target:"_blank"},r.i18n.translate("xpack.painlessLab.contextFieldDocLinkText",{defaultMessage:"Context docs"}))),fullWidth:!0},Object(c.jsx)(l.EuiSuperSelect,{options:b,valueOfSelected:i,onChange:e=>n({context:e}),itemLayoutAlign:"top",hasDividers:!0,fullWidth:!0,"data-test-subj":"painlessContextDropDown"})),-1!==["filter","score"].indexOf(i)&&Object(c.jsx)(l.EuiFormRow,{label:Object(c.jsx)(l.EuiToolTip,{content:r.i18n.translate("xpack.painlessLab.indexFieldTooltipText",{defaultMessage:"Index mappings must be compatible with the sample document's fields"})},Object(c.jsx)("span",null,Object(c.jsx)(M.FormattedMessage,{id:"xpack.painlessLab.indexFieldLabel",defaultMessage:"Index name"})," ",Object(c.jsx)(l.EuiIcon,{type:"questionInCircle",color:"subdued"}))),fullWidth:!0,isInvalid:!t.fields.index,error:t.fields.index?[]:[r.i18n.translate("xpack.painlessLab.indexFieldMissingErrorMessage",{defaultMessage:"Enter an index name"})]},Object(c.jsx)(l.EuiFieldText,{fullWidth:!0,value:d||"",onChange:e=>{const t=e.target.value;n({index:t})},isInvalid:!t.fields.index})),-1!=="score".indexOf(i)&&Object(c.jsx)(l.EuiFormRow,{label:Object(c.jsx)(l.EuiToolTip,{content:r.i18n.translate("xpack.painlessLab.queryFieldTooltipText",{defaultMessage:"Use query to specify that that _score will be used to calculate score."})},Object(c.jsx)("span",null,Object(c.jsx)(M.FormattedMessage,{id:"xpack.painlessLab.queryFieldLabel",defaultMessage:"Query"})," ",Object(c.jsx)(l.EuiIcon,{type:"questionInCircle",color:"subdued"}))),labelAppend:Object(c.jsx)(l.EuiText,{size:"xs"},Object(c.jsx)(l.EuiLink,{href:s.esQueryDSL,target:"_blank"},r.i18n.translate("xpack.painlessLab.queryFieldDocLinkText",{defaultMessage:"Query DSL docs"}))),fullWidth:!0},Object(c.jsx)(o.CodeEditor,{languageId:"json",height:150,value:p,onChange:e=>n({query:e}),options:{fontSize:12,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",automaticLayout:!0}})),-1!==["filter","score"].indexOf(i)&&Object(c.jsx)(l.EuiFormRow,{label:Object(c.jsx)(l.EuiToolTip,{content:r.i18n.translate("xpack.painlessLab.documentFieldTooltipText",{defaultMessage:"Your script can access this document's fields"})},Object(c.jsx)("span",null,Object(c.jsx)(M.FormattedMessage,{id:"xpack.painlessLab.documentFieldLabel",defaultMessage:"Sample document (JSON)"})," ",Object(c.jsx)(l.EuiIcon,{type:"questionInCircle",color:"subdued"}))),fullWidth:!0},Object(c.jsx)(o.CodeEditor,{languageId:"json",height:400,value:u,onChange:e=>n({document:e}),options:{fontSize:12,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",automaticLayout:!0}})))},I=({isLoading:e,response:t})=>{const n=Object(c.jsx)(l.EuiFlexGroup,{gutterSize:"s",alignItems:"center",responsive:!1},Object(c.jsx)(l.EuiFlexItem,{grow:!1},e?Object(c.jsx)(l.EuiLoadingSpinner,{size:"m"}):t&&t.error?Object(c.jsx)(l.EuiIcon,{type:"alert",color:"danger"}):Object(c.jsx)(l.EuiIcon,{type:"check",color:"success"})),Object(c.jsx)(l.EuiFlexItem,{grow:!1},r.i18n.translate("xpack.painlessLab.outputTabLabel",{defaultMessage:"Output"})));return Object(c.jsx)("div",{className:"painlessLabRightPane"},Object(c.jsx)(l.EuiTabbedContent,{className:"painlessLabRightPane__tabs","data-test-subj":"painlessTabs",size:"s",tabs:[{id:"output",name:n,content:Object(c.jsx)(S,{response:t})},{id:"parameters",name:r.i18n.translate("xpack.painlessLab.parametersTabLabel",{defaultMessage:"Parameters"}),content:Object(c.jsx)(F,null)},{id:"context",name:r.i18n.translate("xpack.painlessLab.contextTabLabel",{defaultMessage:"Context"}),content:Object(c.jsx)(w,null)}]}))};function P({toggleRequestFlyout:e,isRequestFlyoutOpen:t,reset:n,links:a}){const[i,o]=Object(s.useState)(!1),u=[Object(c.jsx)(l.EuiContextMenuItem,{key:"walkthrough",icon:"popout",href:a.painlessWalkthrough,target:"_blank",onClick:()=>o(!1)},r.i18n.translate("xpack.painlessLab.walkthroughButtonLabel",{defaultMessage:"Walkthrough"})),Object(c.jsx)(l.EuiContextMenuItem,{key:"api",icon:"popout",href:a.painlessAPIReference,target:"_blank",onClick:()=>o(!1)},r.i18n.translate("xpack.painlessLab.apiReferenceButtonLabel",{defaultMessage:"API reference"})),Object(c.jsx)(l.EuiContextMenuItem,{key:"languageSpec",icon:"popout",href:a.painlessLangSpec,target:"_blank",onClick:()=>o(!1)},r.i18n.translate("xpack.painlessLab.languageSpecButtonLabel",{defaultMessage:"Language spec"})),Object(c.jsx)(l.EuiContextMenuItem,{key:"reset",icon:"bolt",onClick:()=>{n(),o(!1)}},r.i18n.translate("xpack.painlessLab.resetButtonLabel",{defaultMessage:"Reset script"}))];return Object(c.jsx)(l.EuiBottomBar,{paddingSize:"s"},Object(c.jsx)(l.EuiFlexGroup,{gutterSize:"s",justifyContent:"spaceBetween"},Object(c.jsx)(l.EuiFlexItem,{grow:!1},Object(c.jsx)(l.EuiFlexGroup,{gutterSize:"s",justifyContent:"flexStart"},Object(c.jsx)(l.EuiFlexItem,{grow:!1},Object(c.jsx)(l.EuiPopover,{id:"painlessLabHelpContextMenu",button:Object(c.jsx)(l.EuiButtonEmpty,{size:"s",iconType:"help",iconSide:"left",color:"ghost",onClick:()=>o(!i)},r.i18n.translate("xpack.painlessLab.helpButtonLabel",{defaultMessage:"Help"})),isOpen:i,closePopover:()=>o(!1),panelPaddingSize:"none",anchorPosition:"upLeft"},Object(c.jsx)(l.EuiContextMenuPanel,{items:u}))))),Object(c.jsx)(l.EuiFlexItem,{grow:!1},Object(c.jsx)(l.EuiButtonEmpty,{size:"s",color:"ghost",onClick:e,"data-test-subj":"btnViewRequest"},t?r.i18n.translate("xpack.painlessLab.hideRequestButtonLabel",{defaultMessage:"Hide API request"}):r.i18n.translate("xpack.painlessLab.showRequestButtonLabel",{defaultMessage:"Show API request"})))))}var v=n(20);function T({code:e,onChange:t,context:n}){const s=v.PainlessLang.getSuggestionProvider(n);return Object(c.jsx)(o.CodeEditor,{languageId:v.PainlessLang.ID,width:"99%",height:"100%",value:e,onChange:t,suggestionProvider:s,options:{fontSize:12,minimap:{enabled:!1},scrollBeyondLastLine:!1,wordWrap:"on",wrappingIndent:"indent",automaticLayout:!0,suggest:{snippetsPreventQuickSuggestions:!1}}})}const z=({onClose:e,requestBody:t,response:n,links:s})=>Object(c.jsx)(l.EuiFlyout,{onClose:e,maxWidth:640},Object(c.jsx)(l.EuiFlyoutHeader,null,Object(c.jsx)(l.EuiFlexGroup,{gutterSize:"xs",alignItems:"flexEnd"},Object(c.jsx)(l.EuiFlexItem,null,Object(c.jsx)("div",null,Object(c.jsx)(l.EuiTitle,{size:"m"},Object(c.jsx)("h2",null,r.i18n.translate("xpack.painlessLab.flyoutTitle",{defaultMessage:"API request"}))))),Object(c.jsx)(l.EuiFlexItem,{grow:!1},Object(c.jsx)(l.EuiButtonEmpty,{size:"s",flush:"right",href:s.painlessExecuteAPI,target:"_blank",iconType:"help"},r.i18n.translate("xpack.painlessLab.flyoutDocLink",{defaultMessage:"API documentation"}))))),Object(c.jsx)(l.EuiFlyoutBody,null,Object(c.jsx)(l.EuiTabbedContent,{size:"s",tabs:[{id:"request",name:"Request",content:Object(c.jsx)(l.EuiCodeBlock,{language:"json",paddingSize:"s",isCopyable:!0},"POST _scripts/painless/_execute\n",t)},{id:"response",name:"Response",content:Object(c.jsx)(l.EuiCodeBlock,{language:"json",paddingSize:"s",isCopyable:!0},n)}]}),Object(c.jsx)("div",{className:"painlessLabBottomBarPlaceholder"}))),q=()=>{const{store:{payload:e,validation:t},updatePayload:n,services:{http:a},links:i}=O(),[o,u]=Object(s.useState)(!1),{inProgress:d,response:p,submit:b}=(e=>{const t=Object(s.useRef)(0),[n,a]=Object(s.useState)(void 0),[i,o]=Object(s.useState)(!1);return{response:n,inProgress:i,submit:Object(s.useCallback)(Object(k.debounce)((async n=>{o(!0);const s=++t.current;try{const i=await e.post(`${C.a}/execute`,{body:JSON.stringify(L(n,m.UGLY))});t.current===s&&(a(i),o(!1))}catch(e){t.current===s&&(a({error:e}),o(!1))}}),800,{trailing:!0}),[e])}})(a);return Object(s.useEffect)((()=>{t.isValid&&b(e)}),[e,b,t.isValid]),Object(c.jsx)("div",{className:"painlessLabMainContainer"},Object(c.jsx)(l.EuiFlexGroup,{className:"painlessLabPanelsContainer",responsive:!1,gutterSize:"none"},Object(c.jsx)(l.EuiFlexItem,{className:"painlessLabLeftPane"},Object(c.jsx)(l.EuiTitle,{className:"euiScreenReaderOnly"},Object(c.jsx)("h1",null,r.i18n.translate("xpack.painlessLab.title",{defaultMessage:"Painless Lab"}))),Object(c.jsx)(T,{context:e.context,code:e.code,onChange:e=>n({code:e})})),Object(c.jsx)(l.EuiFlexItem,null,Object(c.jsx)(I,{isLoading:d,response:p}))),Object(c.jsx)(P,{links:i,isLoading:d,toggleRequestFlyout:()=>{u(!o)},isRequestFlyoutOpen:o,reset:()=>n({code:x})}),o&&Object(c.jsx)(z,{links:i,onClose:()=>u(!1),requestBody:L(e,m.PRETTY),response:p?E(p.result||p.error):""}))};function B(e,{http:t,I18nContext:n,uiSettings:s,links:a,chrome:l,theme$:r}){if(!e)return()=>{};const{Provider:u}=Object(o.createKibanaReactContext)({uiSettings:s});return Object(i.render)(Object(c.jsx)(n,null,Object(c.jsx)(o.KibanaThemeProvider,{theme$:r},Object(c.jsx)(u,null,Object(c.jsx)(h,{value:{http:t,links:a,chrome:l}},Object(c.jsx)(q,null))))),e),()=>Object(i.unmountComponentAtNode)(e)}}}]);