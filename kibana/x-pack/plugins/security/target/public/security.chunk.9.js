/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.security_bundle_jsonpfunction=window.security_bundle_jsonpfunction||[]).push([[9],{241:function(e,s,t){"use strict";t.r(s),t.d(s,"EditUserPage",(function(){return S})),t.d(s,"CreateUserPage",(function(){return _}));var a=t(4),r=t(3),n=t.n(r),u=t(5),i=t(18),o=t.n(i),l=t(9),c=t(7),d=t(25),m=t(16),g=t(82),j=t(24),b=t.n(j),p=t(2),x=t(79),f=t(17),O=t(70),w=t(80),v=t(0);const h=({username:e,defaultValues:s={current_password:"",password:"",confirm_password:""},onSuccess:t,onCancel:r})=>{const{services:u}=Object(c.useKibana)(),{value:i,loading:o}=Object(f.b)(),d=(null==i?void 0:i.username)===e,g="kibana"===e||"kibana_system"===e,[j,h]=Object(O.a)({onSubmit:async s=>{try{await new m.UserAPIClient(u.http).changePassword(e,s.password,s.current_password),u.notifications.toasts.addSuccess(p.i18n.translate("xpack.security.management.users.changePasswordFlyout.successMessage",{defaultMessage:"Password changed for '{username}'.",values:{username:e}})),null==t||t()}catch(e){var a,r;if("security_exception"!==(null===(a=e.body)||void 0===a?void 0:a.message))throw u.notifications.toasts.addDanger({title:p.i18n.translate("xpack.security.management.users.changePasswordFlyout.errorMessage",{defaultMessage:"Could not change password"}),text:(null===(r=e.body)||void 0===r?void 0:r.message)||e.message}),e;j.setError("current_password",p.i18n.translate("xpack.security.management.users.changePasswordFlyout.currentPasswordInvalidError",{defaultMessage:"Invalid password."}))}},validate:async e=>((e,s)=>{const t={};return s&&(e.current_password||(t.current_password=p.i18n.translate("xpack.security.management.users.changePasswordFlyout.currentPasswordRequiredError",{defaultMessage:"Enter your current password."}))),e.password?e.password.length<6?t.password=p.i18n.translate("xpack.security.management.users.changePasswordFlyout.passwordInvalidError",{defaultMessage:"Password must be at least 6 characters."}):e.password!==e.confirm_password&&(t.confirm_password=p.i18n.translate("xpack.security.management.users.changePasswordFlyout.confirmPasswordInvalidError",{defaultMessage:"Passwords do not match."})):t.password=p.i18n.translate("xpack.security.management.users.changePasswordFlyout.passwordRequiredError",{defaultMessage:"Enter a new password."}),t})(e,d),defaultValues:s}),y=Object(w.a)([o]);return Object(v.jsx)(x.a,{title:p.i18n.translate("xpack.security.management.users.changePasswordFlyout.title",{defaultMessage:"Change password"}),onCancel:r,onSubmit:j.submit,submitButtonText:g?p.i18n.translate("xpack.security.management.users.changePasswordFlyout.confirmSystemPasswordButton",{defaultMessage:"{isSubmitting, select, true{Changing password…} other{Change password}}",values:{isSubmitting:j.isSubmitting}}):p.i18n.translate("xpack.security.management.users.changePasswordFlyout.confirmButton",{defaultMessage:"{isSubmitting, select, true{Changing password…} other{Change password}}",values:{isSubmitting:j.isSubmitting}}),submitButtonColor:g?"danger":void 0,isLoading:j.isSubmitting,isDisabled:o||j.isSubmitted&&j.isInvalid,size:"s",ownFocus:!0},o?Object(v.jsx)(a.EuiLoadingContent,null):Object(v.jsx)(a.EuiForm,b()({component:"form",noValidate:!0},h),g?Object(v.jsx)(n.a.Fragment,null,Object(v.jsx)(a.EuiCallOut,{title:p.i18n.translate("xpack.security.management.users.changePasswordFlyout.systemUserTitle",{defaultMessage:"This is extremely important!"}),color:"danger",iconType:"alert"},Object(v.jsx)("p",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.changePasswordFlyout.systemUserWarning",defaultMessage:"Changing this password will prevent Kibana from communicating with Elasticsearch."})),Object(v.jsx)("p",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.changePasswordFlyout.systemUserDescription",defaultMessage:"Once changed, you must manually update your config file with the new password and restart Kibana."}))),Object(v.jsx)(a.EuiSpacer,null)):void 0,Object(v.jsx)(a.EuiFormRow,{label:p.i18n.translate("xpack.security.management.users.changePasswordFlyout.userLabel",{defaultMessage:"User"})},Object(v.jsx)(a.EuiFlexGroup,{alignItems:"center",gutterSize:"s",responsive:!1},Object(v.jsx)(a.EuiFlexItem,{grow:!1},Object(v.jsx)(a.EuiIcon,{type:"user"})),Object(v.jsx)(a.EuiFlexItem,null,Object(v.jsx)(a.EuiSpacer,{size:"xs"}),Object(v.jsx)(a.EuiText,null,e),Object(v.jsx)(a.EuiSpacer,{size:"xs"})))),d?Object(v.jsx)(a.EuiFormRow,{label:p.i18n.translate("xpack.security.management.users.changePasswordFlyout.currentPasswordLabel",{defaultMessage:"Current password"}),error:j.errors.current_password,isInvalid:j.touched.current_password&&!!j.errors.current_password},Object(v.jsx)(a.EuiFieldPassword,{name:"current_password",type:"dual",defaultValue:j.values.current_password,isInvalid:j.touched.current_password&&!!j.errors.current_password,autoComplete:"current-password",inputRef:y,"data-test-subj":"editUserChangePasswordCurrentPasswordInput"})):null,Object(v.jsx)(a.EuiFormRow,{label:p.i18n.translate("xpack.security.management.users.changePasswordFlyout.passwordLabel",{defaultMessage:"New password"}),helpText:"Password must be at least 6 characters.",error:j.errors.password,isInvalid:j.touched.password&&!!j.errors.password},Object(v.jsx)(a.EuiFieldPassword,{name:"password",type:"dual",defaultValue:j.values.password,isInvalid:j.touched.password&&!!j.errors.password,autoComplete:"new-password",inputRef:d?void 0:y,"data-test-subj":"editUserChangePasswordNewPasswordInput"})),Object(v.jsx)(a.EuiFormRow,{label:p.i18n.translate("xpack.security.management.users.changePasswordFlyout.confirmPasswordLabel",{defaultMessage:"Confirm password"}),error:j.errors.confirm_password,isInvalid:j.touched.confirm_password&&!!j.errors.confirm_password},Object(v.jsx)(a.EuiFieldPassword,{name:"confirm_password",type:"dual",defaultValue:j.values.confirm_password,isInvalid:j.touched.confirm_password&&!!j.errors.confirm_password,autoComplete:"new-password","data-test-subj":"editUserChangePasswordConfirmPasswordInput"})),Object(v.jsx)("input",{type:"submit",hidden:!0})))};var y=t(14);const E=({usernames:e,onCancel:s,onSuccess:t})=>{const{services:r}=Object(c.useKibana)(),[n,u]=o()((async()=>{for(const a of e)try{await new y.UserAPIClient(r.http).deleteUser(a),r.notifications.toasts.addSuccess(p.i18n.translate("xpack.security.management.users.confirmDeleteUsers.successMessage",{defaultMessage:"Deleted user '{username}'",values:{username:a}})),null==t||t()}catch(e){var s;r.notifications.toasts.addDanger({title:p.i18n.translate("xpack.security.management.users.confirmDeleteUsers.errorMessage",{defaultMessage:"Could not delete user '{username}'",values:{username:a}}),text:(null===(s=e.body)||void 0===s?void 0:s.message)||e.message})}}),[r.http]);return Object(v.jsx)(a.EuiConfirmModal,{role:"dialog",title:p.i18n.translate("xpack.security.management.users.confirmDeleteUsers.title",{defaultMessage:"Delete {count, plural, one{user '{username}'} other{{count} users}}?",values:{count:e.length,username:e[0]}}),onCancel:s,onConfirm:u,cancelButtonText:p.i18n.translate("xpack.security.management.users.confirmDeleteUsers.cancelButton",{defaultMessage:"Cancel"}),confirmButtonText:p.i18n.translate("xpack.security.management.users.confirmDeleteUsers.confirmButton",{defaultMessage:"{isLoading, select, true{Deleting {count, plural, one{user} other{users}}…} other{Delete {count, plural, one{user} other{users}}}}",values:{count:e.length,isLoading:n.loading}}),buttonColor:"danger",isLoading:n.loading},Object(v.jsx)(a.EuiText,null,Object(v.jsx)("p",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.confirmDeleteUsers.description",defaultMessage:"{count, plural, one{This user} other{These users}} will be permanently deleted and access to Elastic removed{count, plural, one{.} other{:}}",values:{count:e.length}})),e.length>1&&Object(v.jsx)("ul",null,e.map((e=>Object(v.jsx)("li",{key:e},e)))),Object(v.jsx)("p",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.confirmDelete.cannotUndoWarning",defaultMessage:"You can't recover deleted users."}))))},F=({usernames:e,onCancel:s,onSuccess:t})=>{const{services:r}=Object(c.useKibana)(),n="kibana"===e[0]||"kibana_system"===e[0],[u,i]=o()((async()=>{for(const a of e)try{await new y.UserAPIClient(r.http).disableUser(a),r.notifications.toasts.addSuccess(p.i18n.translate("xpack.security.management.users.confirmDisableUsers.successMessage",{defaultMessage:"Deactivated user '{username}'",values:{username:a}})),null==t||t()}catch(e){var s;r.notifications.toasts.addDanger({title:p.i18n.translate("xpack.security.management.users.confirmDisableUsers.errorMessage",{defaultMessage:"Could not deactivate user '{username}'",values:{username:a}}),text:(null===(s=e.body)||void 0===s?void 0:s.message)||e.message})}}),[r.http]);return Object(v.jsx)(a.EuiConfirmModal,{role:"dialog",title:p.i18n.translate("xpack.security.management.users.confirmDisableUsers.title",{defaultMessage:"Deactivate {count, plural, one{user '{username}'} other{{count} users}}?",values:{count:e.length,username:e[0]}}),onCancel:s,onConfirm:i,cancelButtonText:p.i18n.translate("xpack.security.management.users.confirmDisableUsers.cancelButton",{defaultMessage:"Cancel"}),confirmButtonText:n?p.i18n.translate("xpack.security.management.users.confirmDisableUsers.confirmSystemPasswordButton",{defaultMessage:"{isLoading, select, true{Deactivating user…} other{I understand, deactivate this user}}",values:{isLoading:u.loading}}):p.i18n.translate("xpack.security.management.users.confirmDisableUsers.confirmButton",{defaultMessage:"{isLoading, select, true{Deactivating {count, plural, one{user} other{users}}…} other{Deactivate {count, plural, one{user} other{users}}}}",values:{count:e.length,isLoading:u.loading}}),buttonColor:n?"danger":void 0,isLoading:u.loading},n?Object(v.jsx)(a.EuiText,null,Object(v.jsx)("p",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.confirmDisableUsers.systemUserWarning",defaultMessage:"Deactivating this user will prevent Kibana from communicating with Elasticsearch."})),Object(v.jsx)("p",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.confirmDisableUsers.systemUserDescription",defaultMessage:"Once deactivated, you must manually update your config file with different user details and restart Kibana."}))):Object(v.jsx)(a.EuiText,null,Object(v.jsx)("p",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.confirmDisableUsers.description",defaultMessage:"{count, plural, one{This user} other{These users}} will no longer be able to access Elastic{count, plural, one{.} other{:}}",values:{count:e.length}})),e.length>1&&Object(v.jsx)("ul",null,e.map((e=>Object(v.jsx)("li",{key:e},e))))))},M=({usernames:e,onCancel:s,onSuccess:t})=>{const{services:r}=Object(c.useKibana)(),[n,u]=o()((async()=>{for(const a of e)try{await new y.UserAPIClient(r.http).enableUser(a),r.notifications.toasts.addSuccess(p.i18n.translate("xpack.security.management.users.confirmEnableUsers.successMessage",{defaultMessage:"Activated user '{username}'",values:{username:a}})),null==t||t()}catch(e){var s;r.notifications.toasts.addDanger({title:p.i18n.translate("xpack.security.management.users.confirmEnableUsers.errorMessage",{defaultMessage:"Could not activate user '{username}'",values:{username:a}}),text:(null===(s=e.body)||void 0===s?void 0:s.message)||e.message})}}),[r.http]);return Object(v.jsx)(a.EuiConfirmModal,{role:"dialog",title:p.i18n.translate("xpack.security.management.users.confirmEnableUsers.title",{defaultMessage:"Activate {count, plural, one{user '{username}'} other{{count} users}}?",values:{count:e.length,username:e[0]}}),onCancel:s,onConfirm:u,cancelButtonText:p.i18n.translate("xpack.security.management.users.confirmEnableUsers.cancelButton",{defaultMessage:"Cancel"}),confirmButtonText:p.i18n.translate("xpack.security.management.users.confirmEnableUsers.confirmButton",{defaultMessage:"{isLoading, select, true{Activating {count, plural, one{user} other{users}}…} other{Activate {count, plural, one{user} other{users}}}}",values:{count:e.length,isLoading:n.loading}}),isLoading:n.loading},Object(v.jsx)(a.EuiText,null,Object(v.jsx)("p",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.confirmEnableUsers.description",defaultMessage:"{count, plural, one{This user} other{These users}} will be able to access Elastic{count, plural, one{.} other{:}}",values:{count:e.length}})),e.length>1&&Object(v.jsx)("ul",null,e.map((e=>Object(v.jsx)("li",{key:e},e))))))};var k=t(15),C=t(10),U=t(68),P=t(86),D=t(20);const B={username:"",password:"",confirm_password:"",full_name:"",email:"",roles:[]},I=({isNewUser:e=!1,isReservedUser:s=!1,defaultValues:t=B,onSuccess:u,onCancel:i})=>{var g,j;const{services:b}=Object(c.useKibana)(),[x,f]=o()((()=>new D.RolesAPIClient(b.http).getRoles()),[b.http]),w=Object(r.useCallback)(Object(k.throttle)((()=>new m.UserAPIClient(b.http).getUsers()),1e4),[b.http]),[h,y]=Object(O.a)({onSubmit:async s=>{const{password:t,confirm_password:a,...r}=s,n=e?{password:t,...r}:r;try{await new m.UserAPIClient(b.http).saveUser(n),b.notifications.toasts.addSuccess(e?p.i18n.translate("xpack.security.management.users.userForm.createSuccessMessage",{defaultMessage:"Created user '{username}'",values:{username:n.username}}):p.i18n.translate("xpack.security.management.users.userForm.updateSuccessMessage",{defaultMessage:"Updated user '{username}'",values:{username:n.username}})),null==u||u()}catch(s){var i;throw b.notifications.toasts.addDanger({title:e?p.i18n.translate("xpack.security.management.users.userForm.createErrorMessage",{defaultMessage:"Could not create user '{username}'",values:{username:n.username}}):p.i18n.translate("xpack.security.management.users.userForm.updateErrorMessage",{defaultMessage:"Could not update user '{username}'",values:{username:n.username}}),text:(null===(i=s.body)||void 0===i?void 0:i.message)||s.message}),s}},validate:async s=>{const t={};if(e){if(s.username)if(s.username.length>C.f)t.username=p.i18n.translate("xpack.security.management.users.userForm.usernameMaxLengthError",{defaultMessage:"Username must not exceed {maxLength} characters.",values:{maxLength:C.f}});else if(s.username.trim()!==s.username)t.username=p.i18n.translate("xpack.security.management.users.userForm.usernameWhitespaceError",{defaultMessage:"Username must not contain leading or trailing spaces."});else if(s.username.match(C.g))try{const e=await w();null!=e&&e.some((e=>e.username===s.username))&&(t.username=p.i18n.translate("xpack.security.management.users.userForm.usernameTakenError",{defaultMessage:"User '{username}' already exists.",values:{username:s.username}}))}catch(e){}else t.username=p.i18n.translate("xpack.security.management.users.userForm.usernameInvalidError",{defaultMessage:"Username must contain only letters, numbers, spaces, punctuation, and symbols."});else t.username=p.i18n.translate("xpack.security.management.users.userForm.usernameRequiredError",{defaultMessage:"Enter a username."});s.password?s.password.length<6?t.password=p.i18n.translate("xpack.security.management.users.userForm.passwordInvalidError",{defaultMessage:"Password must be at least 6 characters."}):s.confirm_password?s.password!==s.confirm_password&&(t.confirm_password=p.i18n.translate("xpack.security.management.users.userForm.confirmPasswordInvalidError",{defaultMessage:"Passwords do not match."})):t.confirm_password=p.i18n.translate("xpack.security.management.users.userForm.confirmPasswordRequiredError",{defaultMessage:"Passwords do not match."}):t.password=p.i18n.translate("xpack.security.management.users.userForm.passwordRequiredError",{defaultMessage:"Enter a password."})}return t},defaultValues:t});Object(r.useEffect)((()=>{h.reset(t)}),[t]),Object(r.useEffect)((()=>{f()}),[]);const E=null!==(g=x.value)&&void 0!==g?g:[],F=null!==(j=h.values.roles)&&void 0!==j?j:[],M=F.reduce(((e,s)=>{const t=E.find((e=>e.name===s));return t&&Object(d.f)(t)&&e.push(t),e}),[]);return Object(v.jsx)(a.EuiForm,{component:"form",error:Object.values(h.errors),isInvalid:h.isInvalid,invalidCallout:h.isSubmitted?"above":"none",onSubmit:y.onSubmit,noValidate:!0},Object(v.jsx)(a.EuiDescribedFormGroup,{title:Object(v.jsx)("h2",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.userForm.profileTitle",defaultMessage:"Profile"})),description:p.i18n.translate("xpack.security.management.users.userForm.profileDescription",{defaultMessage:"Provide personal details."})},Object(v.jsx)(a.EuiFormRow,{label:p.i18n.translate("xpack.security.management.users.userForm.usernameLabel",{defaultMessage:"Username"}),helpText:e||s?void 0:p.i18n.translate("xpack.security.management.users.userForm.changingUserNameAfterCreationDescription",{defaultMessage:"Username can't be changed once created."}),error:h.errors.username,isInvalid:h.touched.username&&!!h.errors.username},Object(v.jsx)(a.EuiFieldText,{name:"username","data-test-subj":"userFormUserNameInput",icon:"user",value:h.values.username,isLoading:h.isValidating,isInvalid:h.touched.username&&!!h.errors.username,disabled:!e,onChange:y.onChange,onBlur:y.onBlur})),s?void 0:Object(v.jsx)(n.a.Fragment,null,Object(v.jsx)(a.EuiFormRow,{label:p.i18n.translate("xpack.security.management.users.userForm.fullNameLabel",{defaultMessage:"Full name"}),error:h.errors.full_name,isInvalid:h.touched.full_name&&!!h.errors.full_name},Object(v.jsx)(a.EuiFieldText,{name:"full_name","data-test-subj":"userFormFullNameInput",value:h.values.full_name,isInvalid:h.touched.full_name&&!!h.errors.full_name,onChange:y.onChange,onBlur:y.onBlur})),Object(v.jsx)(a.EuiFormRow,{label:p.i18n.translate("xpack.security.management.users.userForm.emailLabel",{defaultMessage:"Email address"}),error:h.errors.email,isInvalid:h.touched.email&&!!h.errors.email},Object(v.jsx)(a.EuiFieldText,{name:"email","data-test-subj":"userFormEmailInput",value:h.values.email,isInvalid:h.touched.email&&!!h.errors.email,onChange:y.onChange,onBlur:y.onBlur})))),e?Object(v.jsx)(a.EuiDescribedFormGroup,{title:Object(v.jsx)("h2",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.userForm.passwordTitle",defaultMessage:"Password"})),description:p.i18n.translate("xpack.security.management.users.userForm.passwordDescription",{defaultMessage:"Protect your data with a strong password."})},Object(v.jsx)(a.EuiFormRow,{label:p.i18n.translate("xpack.security.management.users.userForm.passwordLabel",{defaultMessage:"Password"}),helpText:p.i18n.translate("xpack.security.management.users.userForm.passwordHelpText",{defaultMessage:"Password must be at least 6 characters."}),error:h.errors.password,isInvalid:h.touched.password&&!!h.errors.password},Object(v.jsx)(a.EuiFieldPassword,{name:"password","data-test-subj":"passwordInput",type:"dual",value:h.values.password,isInvalid:h.touched.password&&!!h.errors.password,autoComplete:"new-password",onChange:y.onChange,onBlur:y.onBlur})),Object(v.jsx)(a.EuiFormRow,{label:p.i18n.translate("xpack.security.management.users.userForm.confirmPasswordLabel",{defaultMessage:"Confirm password"}),error:h.errors.confirm_password,isInvalid:h.touched.confirm_password&&!!h.errors.confirm_password},Object(v.jsx)(a.EuiFieldPassword,{name:"confirm_password","data-test-subj":"passwordConfirmationInput",type:"dual",value:h.values.confirm_password,isInvalid:h.touched.confirm_password&&!!h.errors.confirm_password,autoComplete:"new-password",onChange:y.onChange,onBlur:y.onBlur}))):null,Object(v.jsx)(a.EuiDescribedFormGroup,{title:Object(v.jsx)("h2",null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.userForm.privilegesTitle",defaultMessage:"Privileges"})),description:p.i18n.translate("xpack.security.management.users.userForm.privilegesDescription",{defaultMessage:"Assign roles to manage access and permissions."})},Object(v.jsx)(a.EuiFormRow,{label:p.i18n.translate("xpack.security.management.users.userForm.rolesLabel",{defaultMessage:"Roles"}),helpText:!s&&M.length>0?Object(v.jsx)(a.EuiTextColor,{color:"warning"},M.map((e=>{var s,t;return Object(v.jsx)("p",{key:e.name},Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.userForm.deprecatedRolesAssignedWarning",defaultMessage:"Role '{name}' is deprecated. {reason}.",values:{name:e.name,reason:null===(s=e.metadata)||void 0===s||null===(t=s._deprecated_reason)||void 0===t?void 0:t.replace(/\[(.+)\]/,"'$1'")}}))}))):Object(v.jsx)(U.a,{app:"elasticsearch",doc:"built-in-roles.html"},Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.userForm.rolesHelpText",defaultMessage:"Learn what privileges individual roles grant."}))},Object(v.jsx)(P.a,{availableRoles:E,selectedRoleNames:F,onChange:e=>h.setValue("roles",e),isLoading:x.loading,isDisabled:s})),Object(v.jsx)(a.EuiSpacer,{size:"xxl"}),s?Object(v.jsx)(a.EuiFlexGroup,{responsive:!1},Object(v.jsx)(a.EuiFlexItem,{grow:!1},Object(v.jsx)(a.EuiButton,{iconType:"arrowLeft",onClick:i},Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.userForm.backToUsersButton",defaultMessage:"Back to users"})))):Object(v.jsx)(a.EuiFlexGroup,{responsive:!1},Object(v.jsx)(a.EuiFlexItem,{grow:!1},Object(v.jsx)(a.EuiButton,{type:"submit",isLoading:h.isSubmitting,isDisabled:h.isSubmitted&&h.isInvalid,fill:!0},e?Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.userForm.createUserButton",defaultMessage:"{isSubmitting, select, true{Creating user…} other{Create user}}",values:{isSubmitting:h.isSubmitting}}):Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.userForm.updateUserButton",defaultMessage:"{isSubmitting, select, true{Updating user…} other{Update user}}",values:{isSubmitting:h.isSubmitting}}))),Object(v.jsx)(a.EuiFlexItem,{grow:!1},Object(v.jsx)(a.EuiButtonEmpty,{flush:"left",isDisabled:h.isSubmitting,onClick:i},Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.userForm.cancelButton",defaultMessage:"Cancel"}))))))},S=({username:e})=>{var s,t;const{services:i}=Object(c.useKibana)(),j=Object(u.useHistory)(),[{value:b,error:p},x]=o()((()=>new m.UserAPIClient(i.http).getUser(e)),[i.http]),[f,O]=Object(r.useState)("none"),w=()=>j.push("/");if(Object(r.useEffect)((()=>{x()}),[]),Object(r.useEffect)((()=>{p&&w()}),[p]),!b)return null;const y=Object(g.c)(b),k=Object(g.b)(b),C=Object(d.d)(b);return Object(v.jsx)(n.a.Fragment,null,Object(v.jsx)(a.EuiPageHeader,{bottomBorder:!0,pageTitle:Object(v.jsx)(a.EuiFlexGroup,{alignItems:"center",responsive:!1},Object(v.jsx)(a.EuiFlexItem,{grow:!1},Object(v.jsx)(a.EuiAvatar,{name:C,size:"xl"})),Object(v.jsx)(a.EuiFlexItem,null,Object(v.jsx)(a.EuiTitle,null,Object(v.jsx)("h1",null,C)),Object(v.jsx)(a.EuiText,null,b.email)))}),Object(v.jsx)(a.EuiSpacer,{size:"l"}),k?Object(v.jsx)(n.a.Fragment,null,Object(v.jsx)(a.EuiCallOut,{title:Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.deprecatedUserWarning",defaultMessage:"This user is deprecated."}),iconType:"alert",color:"warning"},null===(s=b.metadata)||void 0===s||null===(t=s._deprecated_reason)||void 0===t?void 0:t.replace(/\[(.+)\]/,"'$1'")),Object(v.jsx)(a.EuiSpacer,null)):y?Object(v.jsx)(n.a.Fragment,null,Object(v.jsx)(a.EuiCallOut,{title:Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.reservedUserWarning",defaultMessage:"This user is built in and can't be updated or deleted."}),iconType:"lock"}),Object(v.jsx)(a.EuiSpacer,null)):!1===b.enabled?Object(v.jsx)(n.a.Fragment,null,Object(v.jsx)(a.EuiCallOut,{title:Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.disabledUserWarning",defaultMessage:"This user has been deactivated and can't access Elastic."})},Object(v.jsx)(a.EuiButton,{onClick:()=>O("enableUser"),size:"s"},Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.enableUserButton",defaultMessage:"Activate user"}))),Object(v.jsx)(a.EuiSpacer,null)):void 0,Object(v.jsx)(I,{isReservedUser:y,defaultValues:b,onCancel:w,onSuccess:w}),"changePassword"===f?Object(v.jsx)(h,{username:e,onCancel:()=>O("none"),onSuccess:()=>O("none")}):"disableUser"===f?Object(v.jsx)(F,{usernames:[e],onCancel:()=>O("none"),onSuccess:()=>{O("none"),x()}}):"enableUser"===f?Object(v.jsx)(M,{usernames:[e],onCancel:()=>O("none"),onSuccess:()=>{O("none"),x()}}):"deleteUser"===f?Object(v.jsx)(E,{usernames:[e],onCancel:()=>O("none"),onSuccess:w}):void 0,Object(v.jsx)(a.EuiSpacer,null),Object(v.jsx)(a.EuiHorizontalRule,null),Object(v.jsx)(a.EuiPanel,{color:"subdued",hasShadow:!1,grow:!1},Object(v.jsx)(a.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"center"},Object(v.jsx)(a.EuiFlexItem,null,Object(v.jsx)(a.EuiDescriptionList,null,Object(v.jsx)(a.EuiDescriptionListTitle,null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.changePasswordTitle",defaultMessage:"Change password"})),Object(v.jsx)(a.EuiDescriptionListDescription,null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.changePasswordDescription",defaultMessage:"The user will not be able to log in using their previous password."})))),Object(v.jsx)(a.EuiFlexItem,{grow:!1},Object(v.jsx)(a.EuiButton,{onClick:()=>O("changePassword"),size:"s","data-test-subj":"editUserChangePasswordButton"},Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.changePasswordButton",defaultMessage:"Change password"}))))),Object(v.jsx)(a.EuiSpacer,null),!1===b.enabled?Object(v.jsx)(a.EuiPanel,{color:"subdued",hasShadow:!1,grow:!1},Object(v.jsx)(a.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"center"},Object(v.jsx)(a.EuiFlexItem,null,Object(v.jsx)(a.EuiDescriptionList,null,Object(v.jsx)(a.EuiDescriptionListTitle,null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.enableUserTitle",defaultMessage:"Activate user"})),Object(v.jsx)(a.EuiDescriptionListDescription,null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.enableUserDescription",defaultMessage:"Allow the user to access Elastic."})))),Object(v.jsx)(a.EuiFlexItem,{grow:!1},Object(v.jsx)(a.EuiButton,{onClick:()=>O("enableUser"),size:"s","data-test-subj":"editUserEnableUserButton"},Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.enableUserButton",defaultMessage:"Activate user"}))))):Object(v.jsx)(a.EuiPanel,{color:"subdued",hasShadow:!1,grow:!1},Object(v.jsx)(a.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"center"},Object(v.jsx)(a.EuiFlexItem,null,Object(v.jsx)(a.EuiDescriptionList,null,Object(v.jsx)(a.EuiDescriptionListTitle,null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.disableUserTitle",defaultMessage:"Deactivate user"})),Object(v.jsx)(a.EuiDescriptionListDescription,null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.disableUserDescription",defaultMessage:"Prevent the user from accessing Elastic."})))),Object(v.jsx)(a.EuiFlexItem,{grow:!1},Object(v.jsx)(a.EuiButton,{onClick:()=>O("disableUser"),size:"s","data-test-subj":"editUserDisableUserButton"},Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.disableUserButton",defaultMessage:"Deactivate user"}))))),!y&&Object(v.jsx)(n.a.Fragment,null,Object(v.jsx)(a.EuiSpacer,null),Object(v.jsx)(a.EuiPanel,{color:"subdued",hasShadow:!1,grow:!1},Object(v.jsx)(a.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"center"},Object(v.jsx)(a.EuiFlexItem,null,Object(v.jsx)(a.EuiDescriptionList,null,Object(v.jsx)(a.EuiDescriptionListTitle,null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.deleteUserTitle",defaultMessage:"Delete user"})),Object(v.jsx)(a.EuiDescriptionListDescription,null,Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.deleteUserDescription",defaultMessage:"Permanently delete the user and remove access to Elastic."})))),Object(v.jsx)(a.EuiFlexItem,{grow:!1},Object(v.jsx)(a.EuiButton,{onClick:()=>O("deleteUser"),size:"s",color:"danger","data-test-subj":"editUserDeleteUserButton"},Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.editUserPage.deleteUserButton",defaultMessage:"Delete user"})))))))},_=()=>{const e=Object(u.useHistory)(),s=()=>e.push("/");return Object(v.jsx)(n.a.Fragment,null,Object(v.jsx)(a.EuiPageHeader,{bottomBorder:!0,pageTitle:Object(v.jsx)(l.FormattedMessage,{id:"xpack.security.management.users.createUserPage.title",defaultMessage:"Create user"})}),Object(v.jsx)(a.EuiSpacer,{size:"l"}),Object(v.jsx)(I,{isNewUser:!0,onCancel:s,onSuccess:s}))}},68:function(e,s,t){"use strict";t.d(s,"a",(function(){return i}));var a=t(4),r=t(3),n=t(7),u=t(0);const i=({app:e,doc:s,children:t})=>{const[,i]=function(){const{services:e}=Object(n.useKibana)(),{links:s,ELASTIC_WEBSITE_URL:t,DOC_LINK_VERSION:a}=e.docLinks;return[s,Object(r.useCallback)(((e,s)=>`${t}guide/en/${e}/reference/${a}/${s}`),[t,a])]}();return Object(u.jsx)(a.EuiLink,{href:i(e,s),target:"_blank",external:!0},t)}},69:function(e,s,t){"use strict";t.d(s,"a",(function(){return n}));var a=t(4),r=t(3);function n(e,s){return Object(r.useMemo)((()=>Object(a.htmlIdGenerator)(e)(s)),[e,s])}},70:function(e,s,t){"use strict";t.d(s,"a",(function(){return i}));var a=t(15),r=t(3),n=t(18),u=t.n(n);function i(e){const s=function({onSubmit:e,validate:s,defaultValues:t}){const[n,i]=Object(r.useState)(t),[l,c]=Object(r.useState)({}),[d,m]=Object(r.useState)({}),[g,j]=Object(r.useState)(0),[b,p]=u()((async e=>{const t=await s(e);return c(t),0===Object.keys(t).length&&j(0),t}),[s]),[x,f]=u()((async s=>{const t=await p(s);if(m(function(e,s){return Object(a.cloneDeepWith)(e,(e=>{if("object"!=typeof e&&null!==e)return true}))}(s)),j(g+1),0===Object.keys(t).length)return e(s)}),[p,e]);return{setValue:async(e,s)=>{const t=o(n,e,s);i(t),await p(t)},setTouched:async(e,s=!0)=>{m(o(d,e,s)),await p(n)},setError:(e,s)=>{c(o(l,e,s)),m(o(d,e,!0))},reset:e=>{i(e),c({}),m({}),j(0)},submit:()=>f(n),values:n,errors:l,touched:d,isValidating:b.loading,isSubmitting:x.loading,submitError:x.error,isInvalid:Object.keys(l).length>0,isSubmitted:g>0}}(e),t={onSubmit:e=>{e.preventDefault(),s.submit()},onChange:e=>{const{name:t,type:a,checked:r,value:n}=e.target;t&&s.setValue(t,"checkbox"===a?r:n)},onBlur:e=>{const{name:t}=e.target;t&&s.setTouched(e.target.name)}};return[s,t]}function o(e,s,t){return Object(a.get)(e,s)!==t?Object(a.set)(Object(a.cloneDeep)(e),s,t):e}},79:function(e,s,t){"use strict";t.d(s,"a",(function(){return c}));var a=t(24),r=t.n(a),n=t(4),u=t(3),i=t(9),o=t(69),l=t(0);const c=({title:e,submitButtonText:s,submitButtonColor:t,onCancel:a,onSubmit:c,isLoading:d,isDisabled:m,children:g,initialFocus:j,...b})=>{Object(u.useEffect)((()=>{j&&j.current&&j.current.focus()}),[j]);const p=Object(o.a)("formFlyout","title");return Object(l.jsx)(n.EuiPortal,null,Object(l.jsx)(n.EuiFlyout,r()({onClose:a,"aria-labelledby":p},b),Object(l.jsx)(n.EuiFlyoutHeader,{hasBorder:!0},Object(l.jsx)(n.EuiTitle,{size:"m"},Object(l.jsx)("h2",{id:p},e))),Object(l.jsx)(n.EuiFlyoutBody,null,g),Object(l.jsx)(n.EuiFlyoutFooter,null,Object(l.jsx)(n.EuiFlexGroup,{justifyContent:"spaceBetween"},Object(l.jsx)(n.EuiFlexItem,{grow:!1},Object(l.jsx)(n.EuiButtonEmpty,{"data-test-subj":"formFlyoutCancelButton",flush:"right",isDisabled:d,onClick:a},Object(l.jsx)(i.FormattedMessage,{id:"xpack.security.formFlyout.cancelButton",defaultMessage:"Cancel"}))),Object(l.jsx)(n.EuiFlexItem,{grow:!1},Object(l.jsx)(n.EuiButton,{"data-test-subj":"formFlyoutSubmitButton",isLoading:d,isDisabled:m,color:t,fill:!0,onClick:c},s))))))}},80:function(e,s,t){"use strict";t.d(s,"a",(function(){return r}));var a=t(3);function r(e=[]){const s=Object(a.useRef)(null);return Object(a.useEffect)((()=>{s.current&&s.current.focus()}),e),s}},82:function(e,s,t){"use strict";t.d(s,"c",(function(){return r})),t.d(s,"b",(function(){return n})),t.d(s,"a",(function(){return u}));var a=t(2);const r=e=>{var s,t;return null!==(s=null===(t=e.metadata)||void 0===t?void 0:t._reserved)&&void 0!==s&&s},n=e=>{var s,t;return null!==(s=null===(t=e.metadata)||void 0===t?void 0:t._deprecated)&&void 0!==s&&s},u=e=>{var s,t;const r=null!==(s=null===(t=e.metadata)||void 0===t?void 0:t._deprecated_reason)&&void 0!==s?s:"";return a.i18n.translate("xpack.security.management.users.extendedUserDeprecationNotice",{defaultMessage:"The {username} user is deprecated. {reason}",values:{username:e.username,reason:r}})}},86:function(e,s,t){"use strict";t.d(s,"a",(function(){return o}));var a=t(4),r=(t(3),t(2)),n=t(9),u=t(25),i=t(0);const o=e=>{var s,t,n,o,c;const d=s=>{var t,a,r,n,i;const o=e.availableRoles.find((e=>e.name===s)),l=null!==(t=o&&Object(u.i)(o))&&void 0!==t&&t,c=null!==(a=o&&Object(u.f)(o))&&void 0!==a&&a,d=null!==(r=o&&Object(u.j)(o))&&void 0!==r&&r,m=null!==(n=o&&Object(u.e)(o))&&void 0!==n&&n;return{color:c?"warning":l?"primary":void 0,"data-test-subj":`roleOption-${s}`,label:s,value:{isReserved:l,isDeprecated:c,isSystem:d,isAdmin:m,deprecatedReason:null==o||null===(i=o.metadata)||void 0===i?void 0:i._deprecated_reason}}},m=e.availableRoles.map((e=>d(e.name))),g=e.selectedRoleNames.map(d),j=m.reduce(((e,s)=>{var t,a,r,n;const u=null!==(t=s.value)&&void 0!==t&&t.isDeprecated?"deprecated":null!==(a=s.value)&&void 0!==a&&a.isSystem?"system":null!==(r=s.value)&&void 0!==r&&r.isAdmin?"admin":null!==(n=s.value)&&void 0!==n&&n.isReserved?"user":"custom";return e[u]||(e[u]=[]),e[u].push(s),e}),{});return Object(i.jsx)(a.EuiComboBox,{"data-test-subj":"rolesDropdown",id:e.id,placeholder:e.placeholder||r.i18n.translate("xpack.security.management.users.roleComboBox.placeholder",{defaultMessage:"Select roles"}),onChange:s=>{e.onChange(s.map((e=>e.label)))},isLoading:e.isLoading,isDisabled:e.isDisabled,options:[{label:r.i18n.translate("xpack.security.management.users.roleComboBox.customRoles",{defaultMessage:"Custom roles"}),options:null!==(s=j.custom)&&void 0!==s?s:[]},{label:r.i18n.translate("xpack.security.management.users.roleComboBox.userRoles",{defaultMessage:"User roles"}),options:null!==(t=j.user)&&void 0!==t?t:[]},{label:r.i18n.translate("xpack.security.management.users.roleComboBox.AdminRoles",{defaultMessage:"Admin roles"}),options:null!==(n=j.admin)&&void 0!==n?n:[]},{label:r.i18n.translate("xpack.security.management.users.roleComboBox.systemRoles",{defaultMessage:"System roles"}),options:null!==(o=j.system)&&void 0!==o?o:[]},{label:r.i18n.translate("xpack.security.management.users.roleComboBox.deprecatedRoles",{defaultMessage:"Deprecated roles"}),options:null!==(c=j.deprecated)&&void 0!==c?c:[]}],selectedOptions:g,renderOption:l})};function l(e){var s,t;return Object(i.jsx)(a.EuiFlexGroup,{justifyContent:"spaceBetween",alignItems:"center",responsive:!1},Object(i.jsx)(a.EuiFlexItem,null,e.label),null!==(s=e.value)&&void 0!==s&&s.isDeprecated?Object(i.jsx)(a.EuiFlexItem,{grow:!1},Object(i.jsx)(a.EuiBadge,{color:e.color},Object(i.jsx)(n.FormattedMessage,{id:"xpack.security.management.users.roleComboBox.deprecatedBadge",defaultMessage:"deprecated"}))):null!==(t=e.value)&&void 0!==t&&t.isReserved?Object(i.jsx)(a.EuiFlexItem,{grow:!1},Object(i.jsx)(a.EuiBadge,{color:e.color},Object(i.jsx)(n.FormattedMessage,{id:"xpack.security.management.users.roleComboBox.reservedBadge",defaultMessage:"built in"}))):void 0)}}}]);