(window.visTypeTimeseries_bundle_jsonpfunction=window.visTypeTimeseries_bundle_jsonpfunction||[]).push([[11],{208:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return v})),t(5);var n=t(32),s=t.n(n),a=t(9),o=t.n(a),i=t(1),c=t(10),l=t(15),d=t(16);const u=/\[[[a-f\d-\\]{36}\]/g;function b(e){const{error:r}=e;let t;const n=o.a.get(r,"error.caused_by.type")||o.a.get(r,"error.type");let s=o.a.get(r,"error.caused_by.reason");const a=o.a.get(r,"error.caused_by.title");if(s||(s=o.a.get(r,"message")),["runtime_exception","illegal_argument_exception"].includes(n)&&(s=o.a.get(r,"error.reason").replace(u,"")),"script_exception"===n){const e=o.a.get(r,"error.caused_by.script_stack");s=o.a.get(r,"error.caused_by.caused_by.reason"),t=Object(i.jsx)("div",{className:"tvbError__additional"},Object(i.jsx)("div",null,s),Object(i.jsx)("div",{className:"tvbError__stack"},e.join("\n")))}else s&&(t=Object(i.jsx)("div",{className:"tvbError__additional"},s));return Object(i.jsx)("div",{className:"visError"},Object(i.jsx)(l.EuiText,{size:"xs",color:"subdued"},Object(i.jsx)(l.EuiIcon,{type:"alert",size:"m",color:"danger","aria-hidden":"true"}),Object(i.jsx)(l.EuiSpacer,{size:"s"}),a||Object(i.jsx)(d.FormattedMessage,{id:"visTypeTimeseries.error.requestForPanelFailedErrorMessage",defaultMessage:"The request for this panel failed"}),t))}var j=t(60),m=t(76),f=t(67);function v(e){const{backgroundColor:r,model:t,visData:n,getConfig:o,fieldFormatMap:l}=e,d=Object(a.get)(n,`${t.id}.series`,[]),u=Object(m.a)(d,t,o,l),v=t.background_color||r,p={backgroundColor:v};let g;if(t.markdown){const e=Object(j.a)(t.markdown,{},{_all:u,...u}),r=s()("kbnMarkdown__body",{"kbnMarkdown__body--reversed":Object(f.b)(v)}),n=s()("tvbMarkdown__content",`tvbMarkdown__content--${t.markdown_vertical_align}`,{"tvbMarkdown__content-isScrolling":t.markdown_scrollbars},r),a=e instanceof Error?e:null;g=Object(i.jsx)("div",{className:"tvbMarkdown","data-test-subj":"tsvbMarkdown"},a&&Object(i.jsx)(b,{error:a}),Object(i.jsx)(i.ClassNames,null,(({css:r,cx:s})=>Object(i.jsx)("div",{className:s(n,r(t.markdown_css))},Object(i.jsx)("div",null,!a&&Object(i.jsx)(c.Markdown,{markdown:e,openLinksInNewTab:t.markdown_openLinksInNewTab}))))))}return Object(i.jsx)("div",{className:"tvbVis",style:p},g)}},60:function(e,r,t){"use strict";t.d(r,"a",(function(){return l}));var n=t(33),s=t(65),a=t(2),o=t(45);const i=s.b.create();var c;function l(e,r={},t={},n={}){try{return i[s.a](e.split(o.a).join(`[${o.a}]`),{strict:!0,knownHelpersOnly:!0,knownHelpers:{rison:!0,encodeURIComponent:!0},...n})({...t,args:r})}catch(r){if(-1!==r.toString().indexOf("Parse error"))return e;if(-1!==r.message.indexOf("not defined in")){const e=r.message.split(/"/)[1];r.error={caused_by:{reason:a.i18n.translate("visTypeTimeseries.replaceVars.errors.unknownVarDescription",{defaultMessage:"{badVar} is an unknown variable",values:{badVar:"{{"+e+"}}"}}),title:a.i18n.translate("visTypeTimeseries.replaceVars.errors.unknownVarTitle",{defaultMessage:"Error processing your markdown"})}}}else r.error={caused_by:{reason:a.i18n.translate("visTypeTimeseries.replaceVars.errors.markdownErrorDescription",{defaultMessage:"Please verify you are only using markdown, known variables, and built-in Handlebars expressions"}),title:a.i18n.translate("visTypeTimeseries.replaceVars.errors.markdownErrorTitle",{defaultMessage:"Error processing your markdown"})}};return r}}i.registerHelper("rison",("rison",c=e=>Object(n.encode)(e),(...e)=>{const{hash:r}=e.slice(-1)[0],t=Object.keys(r).length>0,n=e.length>1;if(t&&n)throw new Error("[rison]: both value list and hash are not supported");if(t){if(Object.values(r).some((e=>void 0===e)))throw new Error("[rison]: unknown variable");return c(r)}{const r=e.slice(0,-1);if(r.some((e=>void 0===e)))throw new Error("[rison]: unknown variable");if(0===r.length)throw new Error("[rison]: unknown variable");return 1===r.length?c(r[0]):c(r)}})),i.registerHelper("encodeURIComponent",(e=>{const r=String(e);return encodeURIComponent(r)}))},67:function(e,r,t){"use strict";t.d(r,"a",(function(){return c})),t.d(r,"b",(function(){return l}));var n=t(56),s=t.n(n),a=t(0);const o=e=>s()(e).luminosity()<.45,i=e=>{let r=e||Object(a.g)().get("theme:darkMode");return"string"==typeof e&&(r=o(e)),r},c=(e,r)=>{const t=i(r);return e&&"inherit"!==e?o(e):t},l=(e,r)=>c(e,r)!==i(r)},76:function(e,r,t){"use strict";t.d(r,"a",(function(){return m}));var n=t(37),s=t(9),a=t(4),o=t(49),i=t(45),c=t(53),l=t(58),d=t(59),u=t(31),b=t.n(u),j=t(50);const m=(e,r,t=null,u)=>{var m;const f={},v=null!==(m=null==t?void 0:t("dateFormat"))&&void 0!==m?m:"lll";return r.series.forEach((r=>{e.filter((e=>Object(s.startsWith)(e.id,r.id))).forEach((e=>{let m=Object(i.b)(e.label);m!==i.a&&(m=Object(s.snakeCase)(m));const p=[`[${m}]`,Object(s.snakeCase)(r.var_name)].filter((e=>e)).join("."),g=r.formatter===a.b.DEFAULT?Object(d.a)(Object(l.a)(r.metrics),u):Object(c.a)(r.formatter,r.value_template,t),w=Object(o.b)(e.data),_={last:{raw:w,formatted:g(w)},data:{raw:e.data,formatted:e.data.map((e=>[b()(e[0]).format(v),g(e[1])]))}};let k=e.label;if(r.split_mode===a.a.TERMS){const t=Object(j.d)(r.terms_field);1===t.length&&(k=Object(d.a)(t[0],u)(e.label))}Object(n.set)(f,p,_),Object(n.set)(f,`[${m}].label`,k)}))})),f}}}]);