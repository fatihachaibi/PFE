/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.maps_bundle_jsonpfunction=window.maps_bundle_jsonpfunction||[]).push([[5],{209:function(e,t,n){switch(window.__kbnThemeTag__){case"v8dark":return n(210);case"v8light":return n(212)}},210:function(e,t,n){var o=n(92),i=n(211);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);o(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},211:function(e,t,n){(t=n(93)(!1)).push([e.i,'.exitFullScreenButton{display:inline-block;-webkit-appearance:none;appearance:none;cursor:pointer;height:40px;line-height:40px;text-align:center;white-space:nowrap;max-width:100%;vertical-align:middle;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-weight:400;letter-spacing:normal;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-kerning:normal;font-size:14px;font-size:1rem;line-height:1.71429rem;font-weight:500;text-decoration:none;transition:background-color 250ms ease-in-out,border-color 250ms ease-in-out;outline-offset:-1px;box-shadow:0 1px 5px rgba(0,0,0,0.25),0 3.6px 13px rgba(0,0,0,0.175),0 8.4px 23px rgba(0,0,0,0.15),0 23px 35px rgba(0,0,0,0.125)}@media screen and (prefers-reduced-motion: no-preference){.exitFullScreenButton{transition:transform 250ms ease-in-out,background 250ms ease-in-out}.exitFullScreenButton:hover:not([class*=\'isDisabled\']){transform:translateY(-1px)}.exitFullScreenButton:focus{animation:euiButtonActive 250ms cubic-bezier(0.34, 1.61, 0.7, 1)}.exitFullScreenButton:active:not([class*=\'isDisabled\']){transform:translateY(1px)}}.exitFullScreenButton:hover:not([class*=\'isDisabled\']),.exitFullScreenButton:focus{text-decoration:underline}\n',""]),e.exports=t},212:function(e,t,n){var o=n(92),i=n(213);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);o(i,{insert:"head",singleton:!1}),e.exports=i.locals||{}},213:function(e,t,n){(t=n(93)(!1)).push([e.i,'.exitFullScreenButton{display:inline-block;-webkit-appearance:none;appearance:none;cursor:pointer;height:40px;line-height:40px;text-align:center;white-space:nowrap;max-width:100%;vertical-align:middle;font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-weight:400;letter-spacing:normal;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-kerning:normal;font-size:14px;font-size:1rem;line-height:1.71429rem;font-weight:500;text-decoration:none;transition:background-color 250ms ease-in-out,border-color 250ms ease-in-out;outline-offset:-1px;box-shadow:0 1px 5px rgba(0,0,0,0.1),0 3.6px 13px rgba(0,0,0,0.07),0 8.4px 23px rgba(0,0,0,0.06),0 23px 35px rgba(0,0,0,0.05)}@media screen and (prefers-reduced-motion: no-preference){.exitFullScreenButton{transition:transform 250ms ease-in-out,background 250ms ease-in-out}.exitFullScreenButton:hover:not([class*=\'isDisabled\']){transform:translateY(-1px)}.exitFullScreenButton:focus{animation:euiButtonActive 250ms cubic-bezier(0.34, 1.61, 0.7, 1)}.exitFullScreenButton:active:not([class*=\'isDisabled\']){transform:translateY(1px)}}.exitFullScreenButton:hover:not([class*=\'isDisabled\']),.exitFullScreenButton:focus{text-decoration:underline}\n',""]),e.exports=t},284:function(e,t,n){"use strict";n.r(t),n.d(t,"ExitFullScreenButton",(function(){return u})),n(7);var o=n(21),i=n(2),s=n(6),r=n(58),a=n.n(r),l=(n(209),i.i18n.translate("sharedUXPackages.exitFullScreenButton.exitFullScreenModeButtonText",{defaultMessage:"Exit full screen"})),c=i.i18n.translate("sharedUXPackages.exitFullScreenButton.fullScreenModeDescription",{defaultMessage:"In full screen mode, press ESC to exit."}),u=function(e){var t=e.onClick,n=e.className,i=Object(o.useEuiTheme)().euiTheme,r=i.colors,u=i.size,p=i.border,x=Object(s.css)("padding:",u.xs," ",u.s,";background:",r.fullShade,";border-radius:",p.radius.small,";height:",u.xl,";color:",Object(o.makeHighContrastColor)(r.emptyShade)(r.fullShade),";outline-color:",r.emptyShade,";","");return Object(s.jsx)("div",null,Object(s.jsx)(o.EuiScreenReaderOnly,null,Object(s.jsx)("p",{"aria-live":"polite"},c)),Object(s.jsx)("button",{css:x,className:a()("exitFullScreenButton",n),onClick:t,"data-test-subj":"exitFullScreenModeButton"},Object(s.jsx)(o.EuiFlexGroup,{component:"span",responsive:!1,alignItems:"center",gutterSize:"s"},Object(s.jsx)(o.EuiFlexItem,{component:"span",grow:!1},Object(s.jsx)(o.EuiIcon,{type:"logoElastic",size:"m"})),Object(s.jsx)(o.EuiFlexItem,{component:"span",grow:!1,"data-test-subj":"exitFullScreenModeText"},l),Object(s.jsx)(o.EuiFlexItem,{component:"span",grow:!1},Object(s.jsx)(o.EuiIcon,{type:"fullScreenExit",size:"s"})))))}}}]);