/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.triggersActionsUi_bundle_jsonpfunction=window.triggersActionsUi_bundle_jsonpfunction||[]).push([[14],{68:function(e,r,t){"use strict";t.r(r),t.d(r,"SENDER_REQUIRED",(function(){return i})),t.d(r,"SENDER_NOT_VALID",(function(){return s})),t.d(r,"CLIENT_ID_REQUIRED",(function(){return o})),t.d(r,"TENANT_ID_REQUIRED",(function(){return a})),t.d(r,"CLIENT_SECRET_REQUIRED",(function(){return u})),t.d(r,"PORT_REQUIRED",(function(){return c})),t.d(r,"SERVICE_REQUIRED",(function(){return d})),t.d(r,"HOST_REQUIRED",(function(){return l})),t.d(r,"USERNAME_REQUIRED",(function(){return g})),t.d(r,"PASSWORD_REQUIRED",(function(){return p})),t.d(r,"PASSWORD_REQUIRED_FOR_USER_USED",(function(){return E})),t.d(r,"TO_CC_REQUIRED",(function(){return A})),t.d(r,"MESSAGE_REQUIRED",(function(){return T})),t.d(r,"SUBJECT_REQUIRED",(function(){return I})),t.d(r,"getInvalidEmailAddress",(function(){return f})),t.d(r,"getNotAllowedEmailAddress",(function(){return U}));var n=t(0);const i=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredFromText",{defaultMessage:"Sender is required."}),s=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.formatFromText",{defaultMessage:"Sender is not a valid email address."}),o=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredClientIdText",{defaultMessage:"Client ID is required."}),a=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredTenantIdText",{defaultMessage:"Tenant ID is required."}),u=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredClientSecretText",{defaultMessage:"Client Secret is required."}),c=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredPortText",{defaultMessage:"Port is required."}),d=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredServiceText",{defaultMessage:"Service is required."}),l=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredHostText",{defaultMessage:"Host is required."}),g=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredAuthUserNameText",{defaultMessage:"Username is required."}),p=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredAuthPasswordText",{defaultMessage:"Password is required."}),E=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredPasswordText",{defaultMessage:"Password is required when username is used."}),A=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredEntryText",{defaultMessage:"No To, Cc, or Bcc entry.  At least one entry is required."}),T=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredMessageText",{defaultMessage:"Message is required."}),I=n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.requiredSubjectText",{defaultMessage:"Subject is required."});function f(e){return n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.invalidEmail",{defaultMessage:"Email address {email} is not valid.",values:{email:e}})}function U(e){return n.i18n.translate("xpack.triggersActionsUI.components.builtinActionTypes.error.notAllowed",{defaultMessage:"Email address {email} is not allowed.",values:{email:e}})}}}]);