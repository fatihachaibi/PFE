(window.dashboard_bundle_jsonpfunction=window.dashboard_bundle_jsonpfunction||[]).push([[1,6],{123:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(58),o=a(8),i=n.__importDefault(a(206));t.default=function(e,t){var a=o.useState(t),n=a[0],l=a[1];return i.default((function(){var t=e.subscribe(l);return function(){return t.unsubscribe()}}),[e]),n}},130:function(e,t,a){"use strict";a.r(t),a.d(t,"KibanaPageTemplateSolutionNav",(function(){return N})),a.d(t,"KibanaPageTemplateSolutionNavCollapseButton",(function(){return j}));var n=a(28),o=a.n(n),i=a(69),l=a.n(i),r=a(64),s=a.n(r),d=(a(86),a(8)),u=a.n(d),c=a(29),p=a.n(c),b=a(5),g=a(55),m=a(0),f=a(80),v=(a(91),a(2)),x=["className","isCollapsed"],h=m.i18n.translate("sharedUXComponents.solutionNav.collapsibleLabel",{defaultMessage:"Collapse side navigation"}),k=m.i18n.translate("sharedUXComponents.solutionNav.openLabel",{defaultMessage:"Open side navigation"}),j=function(e){var t=e.className,a=e.isCollapsed,n=s()(e,x),i=p()("kbnPageTemplateSolutionNavCollapseButton",{"kbnPageTemplateSolutionNavCollapseButton-isCollapsed":a},t);return Object(v.jsx)(b.EuiButtonIcon,o()({className:i,size:"s",color:"text",iconType:a?"menuRight":"menuLeft","aria-label":a?k:h,title:a?k:h},n))},T=["children","headingProps","icon","isOpenOnDesktop","items","mobileBreakpoints","closeFlyoutButtonPosition","name","onCollapse"],P=function e(t,a){return t.map((function(t){return t.tabIndex=a?-1:void 0,t.items=t.items&&e(t.items,a),t}))},S=Object(b.htmlIdGenerator)("KibanaPageTemplateSolutionNav"),N=function(e){var t=e.children,a=e.headingProps,n=e.icon,i=e.isOpenOnDesktop,r=void 0!==i&&i,c=e.items,x=e.mobileBreakpoints,h=void 0===x?["xs","s"]:x,k=e.closeFlyoutButtonPosition,N=void 0===k?"outside":k,O=e.name,y=e.onCollapse,C=s()(e,T),_=Object(b.useIsWithinBreakpoints)(h),w=Object(b.useIsWithinBreakpoints)(["m"]),B=Object(b.useIsWithinBreakpoints)(["l","xl"]),E=Object(d.useState)(!1),D=l()(E,2),A=D[0],M=D[1],I=B&&!r,U=!!t,z=p()("kbnPageTemplateSolutionNav",{"kbnPageTemplateSolutionNav--hidden":I}),F=(null==a?void 0:a.id)||S("heading"),X=(null==a?void 0:a.element)||"h2",W=Object(v.jsx)(b.EuiTitle,{size:"xs",id:F},Object(v.jsx)(X,null,n&&Object(v.jsx)(f.a,{className:"kbnPageTemplateSolutionNav__avatar",iconType:n,name:O}),Object(v.jsx)("strong",null,Object(v.jsx)(g.FormattedMessage,{id:"sharedUXComponents.solutionNav.mobileTitleText",defaultMessage:"{solutionName} {menuText}",values:{solutionName:O||"Navigation",menuText:_?m.i18n.translate("sharedUXComponents.solutionNav.menuText",{defaultMessage:"menu"}):""}})))),L=Object(d.useMemo)((function(){return U?t:c?Object(v.jsx)(b.EuiSideNav,o()({"aria-labelledby":F,"aria-hidden":I,items:P(c,I),mobileBreakpoints:[]},C)):null}),[t,F,U,I,c,C]);return Object(v.jsx)(u.a.Fragment,null,_&&Object(v.jsx)(b.EuiCollapsibleNavGroup,{className:z,paddingSize:"m",background:"none",title:W,titleElement:"span",isCollapsible:!0,initialIsOpen:!1},L),w&&Object(v.jsx)(u.a.Fragment,null,A&&Object(v.jsx)(b.EuiFlyout,{ownFocus:!1,outsideClickCloses:!0,onClose:function(){return M(!1)},side:"left",size:248,closeButtonPosition:N,className:"kbnPageTemplateSolutionNav__flyout"},Object(v.jsx)("div",{className:z},W,Object(v.jsx)(b.EuiSpacer,{size:"l"}),L)),Object(v.jsx)(j,{isCollapsed:!0,onClick:function(){M(!A)}})),B&&Object(v.jsx)(u.a.Fragment,null,Object(v.jsx)("div",{className:z},W,Object(v.jsx)(b.EuiSpacer,{size:"l"}),L),Object(v.jsx)(j,{isCollapsed:!r,onClick:y})))}},206:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(8),o="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;t.default=o},207:function(e,t,a){e.exports=a.p+"baad30acfe492601d08a0e839c9bb3f5.svg"},208:function(e,t,a){switch(window.__kbnThemeTag__){case"v8dark":return a(209);case"v8light":return a(211)}},209:function(e,t,a){var n=a(66),o=a(210);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},210:function(e,t,a){(t=a(67)(!1)).push([e.i,".kbnPageTemplate__pageSideBar{overflow:hidden;min-width:248px}@media screen and (prefers-reduced-motion: no-preference){.kbnPageTemplate__pageSideBar{transition:min-width 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}}.kbnPageTemplate__pageSideBar.kbnPageTemplate__pageSideBar--shrink{min-width:40px}@media only screen and (min-width: 768px) and (max-width: 991px){.kbnPageTemplate--centeredBody .kbnPageTemplate__pageSideBar{border-right:1px solid #343741}}@media only screen and (min-width: 992px) and (max-width: 1199px){.kbnPageTemplate--centeredBody .kbnPageTemplate__pageSideBar{border-right:1px solid #343741}}@media only screen and (min-width: 1200px){.kbnPageTemplate--centeredBody .kbnPageTemplate__pageSideBar{border-right:1px solid #343741}}\n",""]),e.exports=t},211:function(e,t,a){var n=a(66),o=a(212);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},212:function(e,t,a){(t=a(67)(!1)).push([e.i,".kbnPageTemplate__pageSideBar{overflow:hidden;min-width:248px}@media screen and (prefers-reduced-motion: no-preference){.kbnPageTemplate__pageSideBar{transition:min-width 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}}.kbnPageTemplate__pageSideBar.kbnPageTemplate__pageSideBar--shrink{min-width:40px}@media only screen and (min-width: 768px) and (max-width: 991px){.kbnPageTemplate--centeredBody .kbnPageTemplate__pageSideBar{border-right:1px solid #D3DAE6}}@media only screen and (min-width: 992px) and (max-width: 1199px){.kbnPageTemplate--centeredBody .kbnPageTemplate__pageSideBar{border-right:1px solid #D3DAE6}}@media only screen and (min-width: 1200px){.kbnPageTemplate--centeredBody .kbnPageTemplate__pageSideBar{border-right:1px solid #D3DAE6}}\n",""]),e.exports=t},228:function(e,t,a){"use strict";a.r(t),a.d(t,"NoDataCard",(function(){return g})),a.d(t,"ElasticAgentCard",(function(){return z})),a.d(t,"NoDataPage",(function(){return R})),a.d(t,"NoDataConfigPage",(function(){return ae})),a.d(t,"KibanaPageTemplate",(function(){return se}));var n=a(28),o=a.n(n),i=a(64),l=a.n(i),r=a(0),s=a(8),d=a.n(s),u=a(5),c=a(2),p=["title","button","description","isDisabled"],b=r.i18n.translate("sharedUXComponents.pageTemplate.noDataCard.description",{defaultMessage:"Proceed without collecting data"}),g=function(e){var t=e.title,a=e.button,n=e.description,i=e.isDisabled,r=l()(e,p),s=n||b;return Object(c.jsx)(u.EuiCard,o()({css:{maxWidth:400,marginInline:"auto"},paddingSize:"l",title:t,description:s,footer:function(){if(!i)return a&&"string"!=typeof a?a:Object(c.jsx)(u.EuiButton,{fill:!0},a||t)}(),isDisabled:i},r))},m=a(65),f=a.n(m),v=a(81),x=a(123),h=a.n(x),k=["children"],j=d.a.createContext(null),T=function(e){var t=e.children,a=l()(e,k);return Object(c.jsx)(j.Provider,{value:f()({},a)},t)},P=function(e){var t=e.children,a=e.coreStart.application,n=a.navigateToUrl,o=a.currentAppId$,i=h()(o,void 0);return Object(c.jsx)(j.Provider,{value:{navigateToUrl:n,currentAppId:i}},t)},S=a(72),N=["children","navigateToUrl","currentAppId"],O=function(e){var t=e.children,a=e.navigateToUrl,n=e.currentAppId,i=l()(e,N),r=Object(s.useRef)(null),d=Object(s.useCallback)((function(e){return function(e){var t=e.event,a=e.container,n=e.navigateToUrl;if(a&&e.currentAppId){var o=t.target,i=Object(S.a)(o,a);if(i){var l=i.href,r=""===i.target||"_self"===i.target,s=0===t.button;l&&r&&s&&!t.defaultPrevented&&!Object(S.b)(t)&&(t.preventDefault(),n(i.href))}}}({event:e,currentAppId:n,navigateToUrl:a,container:r.current})}),[n,a]);return Object(c.jsx)("div",o()({},i,{ref:r,onClick:d}),t)},y=function(e){return Object(c.jsx)(O,o()({},function(){var e=Object(s.useContext)(j);if(!e)throw new Error("RedirectAppLinksContext is missing.  Ensure your component or React root is wrapped with RedirectAppLinksProvider.");return e}(),e))},C=["children"],_=function(e){var t=e.children,a=l()(e,C),n=Object(c.jsx)(y,null,t);return function(e){return void 0!==e.coreStart}(a)?Object(c.jsx)(P,a,n):Object(c.jsx)(T,a,n)},w=a(207),B=a.n(w),E=["canAccessFleet","title"],D=r.i18n.translate("sharedUXComponents.noDataPage.elasticAgentCard.noPermission.title",{defaultMessage:"Contact your administrator"}),A=r.i18n.translate("sharedUXComponents.noDataPage.elasticAgentCard.noPermission.description",{defaultMessage:"This integration is not yet enabled. Your administrator has the required permissions to turn it on."}),M=r.i18n.translate("sharedUXComponents.noDataPage.elasticAgentCard.title",{defaultMessage:"Add Elastic Agent"}),I=r.i18n.translate("sharedUXComponents.noDataPage.elasticAgentCard.description",{defaultMessage:"Use Elastic Agent for a simple, unified way to collect data from your machines."}),U=function(e){var t=e.canAccessFleet,a=e.title,n=void 0===a?M:a,i=l()(e,E),r=t?{title:n,description:I}:{title:Object(c.jsx)(u.EuiTextColor,{color:"default"},D),description:Object(c.jsx)(u.EuiTextColor,{color:"default"},A),isDisabled:!0},s=Object(c.jsx)(u.EuiImage,{size:"fullWidth",style:{width:"max(100%, 360px)",height:240,objectFit:"cover",background:"aliceblue"},url:B.a,alt:""});return Object(c.jsx)(g,o()({image:s},r,i))},z=function(e){var t=Object(v.g)().canAccessFleet,a=Object(v.f)().addBasePath,n=Object(v.b)(),o=n.navigateToUrl,i=n.currentAppId$,l=h()(i),r=e.href,d=e.category,u=Object(s.useMemo)((function(){if(r)return r;var e="/app/integrations/browse";return a(d?"".concat(e,"/").concat(d):e)}),[a,r,d]);return Object(c.jsx)(_,{currentAppId:l,navigateToUrl:o},Object(c.jsx)(U,f()(f()({},e),{},{href:u,canAccessFleet:t})))},F=a(29),X=a.n(F),W=a(55),L=a(80),K=["solution","logo","action","docsLink","pageTitle"],R=function(e){var t=e.solution,a=e.logo,n=e.action,i=e.docsLink,d=e.pageTitle,p=l()(e,K),b=Object.keys(n),g=Object(s.useMemo)((function(){if(1!==b.length)return null;var e=b[0],t="elasticAgent"===e?"empty-page-agent-action":"empty-page-".concat(e,"-action");return Object(c.jsx)(z,o()({key:t},n[e]))}),[n,b]),m=d||r.i18n.translate("sharedUXComponents.noDataPage.welcomeTitle",{defaultMessage:"Welcome to Elastic {solution}!",values:{solution:t}});return Object(c.jsx)("div",{className:X()("kbnNoDataPageContents",p.className)},Object(c.jsx)(u.EuiText,{textAlign:"center"},Object(c.jsx)(L.a,{name:t,iconType:a||"logo".concat(t),size:"xxl"}),Object(c.jsx)(u.EuiSpacer,{size:"l"}),Object(c.jsx)("h1",null,m),Object(c.jsx)(u.EuiTextColor,{color:"subdued"},Object(c.jsx)("p",null,Object(c.jsx)(W.FormattedMessage,{id:"sharedUXComponents.noDataPage.intro",defaultMessage:"Add your data to get started, or {link} about {solution}.",values:{solution:t,link:Object(c.jsx)(u.EuiLink,{href:i,target:"_blank"},Object(c.jsx)(W.FormattedMessage,{id:"sharedUXComponents.noDataPage.intro.link",defaultMessage:"learn more"}))}})))),Object(c.jsx)(u.EuiSpacer,{size:"xxl"}),g)},H=a(69),G=a.n(H),J=a(130),$=["solutionNav"],q="solutionNavIsCollapsed",Y=function(e){var t,a=function(t){var a,n=Object(u.useIsWithinBreakpoints)(["m"]),i=Object(u.useIsWithinBreakpoints)(["l","xl"]),r=Object(s.useState)(!JSON.parse(String(localStorage.getItem(q)))),d=G()(r,2),p=d[0],b=d[1],g=t.solutionNav,m=l()(t,$),v=m.children,x=m.isEmptyState,h=m.template,k=X()("kbnPageTemplate__pageSideBar",{"kbnPageTemplate__pageSideBar--shrink":n||i&&!p},null===(a=t.pageSideBarProps)||void 0===a?void 0:a.className),j=x&&!h?"centeredContent":h,T=Object(c.jsx)(J.KibanaPageTemplateSolutionNav,o()({isOpenOnDesktop:p,onCollapse:function(){b(!p),localStorage.setItem(q,JSON.stringify(p))}},g)),P=f()(f()({paddingSize:"none"},t.pageSideBarProps),{},{className:k});return Object(c.jsx)(e,f()(f()({},m),{},{pageSideBar:T,pageSideBarProps:P,template:j}),v)};return a.displayName="WithSolutionNavBar(".concat((t=e).displayName||t.name||"UnnamedComponent",")"),a},Q=a(1),V=a.n(Q),Z=function(e,t){return X()("kbnPageTemplate",V()({},"kbnPageTemplate--".concat(e),e),t)},ee={restrictWidth:950,template:"centeredBody",pageContentProps:{hasShadow:!1,color:"transparent",paddingSize:"none"}},te=["className","noDataConfig"],ae=function(e){var t=e.className,a=e.noDataConfig,n=l()(e,te);if(!a)return null;var i=ee.template,r=Z(i,t);return Object(c.jsx)(u.EuiPageTemplate,o()({"data-test-subj":e["data-test-subj"],template:i,className:r},n,ee),Object(c.jsx)(R,a))},ne=Y(ae),oe=(a(208),["template","className","pageHeader","children","isEmptyState"]),ie=function(e){var t=e.template,a=e.className,n=e.pageHeader,i=e.children,r=e.isEmptyState,s=l()(e,oe),d="centeredBody",p=n;if(r)if(n&&!i){var b;t=null!==(b=t)&&void 0!==b?b:d;var g=n.iconType,m=n.pageTitle,f=n.description,v=n.rightSideItems,x=m?Object(c.jsx)("h1",null,m):void 0,h=f?Object(c.jsx)("p",null,f):void 0;p=void 0,i=Object(c.jsx)(u.EuiEmptyPrompt,{iconType:g,iconColor:"",title:x,body:h,actions:v})}else if(n&&i){var k;t=null!==(k=t)&&void 0!==k?k:"centeredContent"}else if(!n){var j;t=null!==(j=t)&&void 0!==j?j:d}var T=Z(t,a);return Object(c.jsx)(u.EuiPageTemplate,o()({template:t,className:T,pageHeader:p},s),i)},le=Y(ie),re=["template","className","children","solutionNav","noDataConfig"],se=function(e){var t=e.template,a=e.className,n=e.children,i=e.solutionNav,r=e.noDataConfig,s=l()(e,re);return r&&i?Object(c.jsx)(ne,{"data-test-subj":s["data-test-subj"],className:a,noDataConfig:r,solutionNav:i}):r?Object(c.jsx)(ae,{"data-test-subj":s["data-test-subj"],className:a,noDataConfig:r}):i?Object(c.jsx)(le,o()({template:t,className:a,solutionNav:i,children:n},s)):Object(c.jsx)(ie,o()({template:t,className:a,children:n},s))}},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(8),o=a.n(n),i=a(72),l=o.a.lazy((function(){return a.e(7).then(a.bind(null,127)).then((function(e){return{default:e.KibanaSolutionAvatar}}))})),r=Object(i.c)(l)},86:function(e,t,a){switch(window.__kbnThemeTag__){case"v8dark":return a(87);case"v8light":return a(89)}},87:function(e,t,a){var n=a(66),o=a(88);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},88:function(e,t,a){(t=a(67)(!1)).push([e.i,".kbnPageTemplateSolutionNav__flyout{background-color:#141519}.kbnPageTemplateSolutionNav{background:linear-gradient(160deg, rgba(52,55,65,0.3) 0, rgba(52,55,65,0.3) 32px, rgba(255,0,0,0) 0),linear-gradient(175deg, rgba(52,55,65,0.3) 0, rgba(52,55,65,0.3) 16px, rgba(255,0,0,0) 0);scrollbar-color:rgba(152,162,179,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;display:flex;flex-direction:column}.kbnPageTemplateSolutionNav::-webkit-scrollbar{width:16px;height:16px}.kbnPageTemplateSolutionNav::-webkit-scrollbar-thumb{background-color:rgba(152,162,179,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.kbnPageTemplateSolutionNav::-webkit-scrollbar-corner,.kbnPageTemplateSolutionNav::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.kbnPageTemplateSolutionNav:focus{outline:none}.kbnPageTemplateSolutionNav[tabindex='0']:focus:focus-visible{outline-style:auto}@media only screen and (min-width: 768px) and (max-width: 991px){.kbnPageTemplateSolutionNav{width:248px;padding:24px}}@media only screen and (min-width: 992px) and (max-width: 1199px){.kbnPageTemplateSolutionNav{width:248px;padding:24px}}@media only screen and (min-width: 1200px){.kbnPageTemplateSolutionNav{width:248px;padding:24px}}.kbnPageTemplateSolutionNav .kbnPageTemplateSolutionNav__avatar{margin-right:16px}.kbnPageTemplateSolutionNav--hidden{pointer-events:none;opacity:0}@media screen and (prefers-reduced-motion: no-preference){.kbnPageTemplateSolutionNav--hidden{transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}}\n",""]),e.exports=t},89:function(e,t,a){var n=a(66),o=a(90);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},90:function(e,t,a){(t=a(67)(!1)).push([e.i,".kbnPageTemplateSolutionNav__flyout{background-color:#fafbfd}.kbnPageTemplateSolutionNav{background:linear-gradient(160deg, rgba(211,218,230,0.3) 0, rgba(211,218,230,0.3) 32px, rgba(255,0,0,0) 0),linear-gradient(175deg, rgba(211,218,230,0.3) 0, rgba(211,218,230,0.3) 16px, rgba(255,0,0,0) 0);scrollbar-color:rgba(105,112,125,0.5) rgba(0,0,0,0);scrollbar-width:thin;height:100%;overflow-y:auto;overflow-x:hidden;display:flex;flex-direction:column}.kbnPageTemplateSolutionNav::-webkit-scrollbar{width:16px;height:16px}.kbnPageTemplateSolutionNav::-webkit-scrollbar-thumb{background-color:rgba(105,112,125,0.5);background-clip:content-box;border-radius:16px;border:6px solid rgba(0,0,0,0)}.kbnPageTemplateSolutionNav::-webkit-scrollbar-corner,.kbnPageTemplateSolutionNav::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}.kbnPageTemplateSolutionNav:focus{outline:none}.kbnPageTemplateSolutionNav[tabindex='0']:focus:focus-visible{outline-style:auto}@media only screen and (min-width: 768px) and (max-width: 991px){.kbnPageTemplateSolutionNav{width:248px;padding:24px}}@media only screen and (min-width: 992px) and (max-width: 1199px){.kbnPageTemplateSolutionNav{width:248px;padding:24px}}@media only screen and (min-width: 1200px){.kbnPageTemplateSolutionNav{width:248px;padding:24px}}.kbnPageTemplateSolutionNav .kbnPageTemplateSolutionNav__avatar{margin-right:16px}.kbnPageTemplateSolutionNav--hidden{pointer-events:none;opacity:0}@media screen and (prefers-reduced-motion: no-preference){.kbnPageTemplateSolutionNav--hidden{transition:opacity 150ms cubic-bezier(0.694, 0.0482, 0.335, 1)}}\n",""]),e.exports=t},91:function(e,t,a){switch(window.__kbnThemeTag__){case"v8dark":return a(92);case"v8light":return a(94)}},92:function(e,t,a){var n=a(66),o=a(93);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},93:function(e,t,a){(t=a(67)(!1)).push([e.i,".kbnPageTemplateSolutionNavCollapseButton{position:absolute;opacity:0;left:232px;top:24px;z-index:2}@media screen and (prefers-reduced-motion: no-preference){.kbnPageTemplateSolutionNavCollapseButton{transition:opacity 150ms,left 150ms,background 150ms}}.kbnPageTemplateSolutionNavCollapseButton:hover,.kbnPageTemplateSolutionNavCollapseButton:focus{transition-delay:0s !important}.kbnPageTemplate__pageSideBar:hover .kbnPageTemplateSolutionNavCollapseButton,.kbnPageTemplateSolutionNavCollapseButton:hover,.kbnPageTemplateSolutionNavCollapseButton:focus{opacity:1;left:224px}.kbnPageTemplate__pageSideBar:hover .kbnPageTemplateSolutionNavCollapseButton{transition-delay:700ms}.kbnPageTemplateSolutionNavCollapseButton:not(.kbnPageTemplateSolutionNavCollapseButton-isCollapsed){background-color:#1D1E24 !important}.kbnPageTemplateSolutionNavCollapseButton-isCollapsed{opacity:1 !important;transition-delay:0s !important;left:0 !important;right:0;top:0;bottom:0;height:100%;width:100%;border-radius:0;padding-top:32px;align-items:flex-start}\n",""]),e.exports=t},94:function(e,t,a){var n=a(66),o=a(95);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},95:function(e,t,a){(t=a(67)(!1)).push([e.i,".kbnPageTemplateSolutionNavCollapseButton{position:absolute;opacity:0;left:232px;top:24px;z-index:2}@media screen and (prefers-reduced-motion: no-preference){.kbnPageTemplateSolutionNavCollapseButton{transition:opacity 150ms,left 150ms,background 150ms}}.kbnPageTemplateSolutionNavCollapseButton:hover,.kbnPageTemplateSolutionNavCollapseButton:focus{transition-delay:0s !important}.kbnPageTemplate__pageSideBar:hover .kbnPageTemplateSolutionNavCollapseButton,.kbnPageTemplateSolutionNavCollapseButton:hover,.kbnPageTemplateSolutionNavCollapseButton:focus{opacity:1;left:224px}.kbnPageTemplate__pageSideBar:hover .kbnPageTemplateSolutionNavCollapseButton{transition-delay:700ms}.kbnPageTemplateSolutionNavCollapseButton:not(.kbnPageTemplateSolutionNavCollapseButton-isCollapsed){background-color:#fff !important}.kbnPageTemplateSolutionNavCollapseButton-isCollapsed{opacity:1 !important;transition-delay:0s !important;left:0 !important;right:0;top:0;bottom:0;height:100%;width:100%;border-radius:0;padding-top:32px;align-items:flex-start}\n",""]),e.exports=t}}]);