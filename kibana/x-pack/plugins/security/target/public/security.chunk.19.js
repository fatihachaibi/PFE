/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.security_bundle_jsonpfunction=window.security_bundle_jsonpfunction||[]).push([[19],{236:function(t,e,n){"use strict";n.r(e),n.d(e,"IndicesAPIClient",(function(){return IndicesAPIClient}));var i=n(1),s=n.n(i);class IndicesAPIClient{constructor(t){s()(this,"fieldCache",new Map),this.http=t}async getFields(t){var e;if(t&&!this.fieldCache.has(t)){const e=await this.http.get(`/internal/security/fields/${encodeURIComponent(t)}`);Array.isArray(e)&&e.length>0&&this.fieldCache.set(t,e)}return null!==(e=this.fieldCache.get(t))&&void 0!==e?e:[]}}}}]);