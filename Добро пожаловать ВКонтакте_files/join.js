﻿!function(e){function t(t){for(var o,c,a=t[0],s=t[1],l=t[2],d=0,_=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&_.push(i[c][0]),i[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(u&&u(t);_.length;)_.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={"web/join":0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(){return Promise.resolve()},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dist/";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;r.push([255,"common"]),n()}({255:function(e,t,n){e.exports=n("xJdy")},xJdy:function(e,t,n){"use strict";n.r(t);n("rGqo"),n("rE2o"),n("ioFf"),n("HEwt"),n("91GP"),n("a1Th"),n("Btvt"),n("Oyvg"),n("SRfc"),n("pIFo");var o=n("gdug"),i=n("7jxN"),r=n("lXE5"),c=n("zxIV"),a=n("v+DW"),s=n("t7n3"),l=n("Egk5"),u=n("EasH"),d=n("kcIO"),_=n("4+be"),j=n("FWc3"),b=n("9r2g"),p=n("JlTo"),h=n("LlZA"),m="contacts",g="finish",O="done",I="education",v="email",S="error",y="success",E="skip",f="password error",R="empty contacts",C="empty school",T="empty university",w="empty email",P="incorrect email",N="phone already used",F=n("DM2o");function D(e,t,n){Object(F.a)("join_progress",e,t,n)}function x(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,r=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return r=e.done,e},e:function(e){c=!0,i=e},f:function(){try{r||null==o.return||o.return()}finally{if(c)throw i}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function J(e,t){cur[e+"IsDirty"]||(cur[e+"IsDirty"]=!0,t())}var L={show(e){Object(c.fb)(e)||Object(i.l)(e,150)},hide(e){Object(c.fb)(e)&&Object(i.n)(e,150)},scrollnode:()=>o.a.msie6?pageNode:window,scrollResize(e,t){if(!o.a.mobile||o.a.safari_mobile){var n=Object(r.e)();!0===t&&(cur.nextButtonTop=Object(c.V)(cur.nextButtonWrap)[1],o.a.msie6&&(cur.nextButtonTop+=n));var i=cur.resultShown&&n+lastWindowHeight<cur.nextButtonTop+cur.nextButtonHeight+Object(s.r)(Object(c.T)("content","marginTop"))+Object(c.J)("page_header_cont").offsetHeight-8;i&&!cur.docked?(Object(c.c)(cur.nextButton,"fixed"),o.a.msie6&&(bodyNode.appendChild(cur.nextButton),e={type:"resize"}),cur.docked=!0):!i&&cur.docked&&(Object(c.mb)(cur.nextButton,"fixed"),o.a.msie6&&cur.nextButtonWrap.appendChild(cur.nextButton),cur.docked=!1),cur.docked&&e&&"resize"===e.type&&(o.a.msie6?cur.nextButton.style.left=Object(c.V)(Object(c.J)("content"))[0]+"px":(cur.nextButton.style.left=Object(c.J)("page_layout").offsetLeft+Object(c.J)("content").offsetLeft+"px",setTimeout(L.nextResetStyle,0)))}},nextResetStyle(){cur.nextButton.style.left=""},initScroll(){Object(s.i)(cur,{nextButton:Object(c.J)("join_"+cur.section+"_next"),nextButtonWrap:Object(c.J)("join_"+cur.section+"_next_wrap"),resultEl:Object(c.J)("join_"+cur.section+"_result")}),cur.nextButtonHeight=Object(c.S)(cur.nextButton)[1],cur.nextButtonWrap.style.height=cur.nextButtonHeight+"px",cur.resultShown=Object(c.fb)(cur.resultEl),L.scrollResize(!1,!0),Object(l.b)(L.scrollnode(),"scroll",L.scrollResize),Object(l.b)(window,"resize",L.scrollResize),cur.destroy.push(e=>{Object(l.i)(L.scrollnode(),"scroll",L.scrollResize),Object(l.i)(window,"resize",L.scrollResize),o.a.msie6&&e.nextButtonWrap.appendChild(e.nextButton)})},initStatsPhoneVerify(){var e=Object(c.J)("join_called_phone"),t=Object(c.J)("join_called_code"),n=Object(c.J)("join_code");b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.SMS_CODE,n.value,!0),cur.statsPhoneVerifyInited||(e.addEventListener("keyup",()=>{b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.SMS_CODE,e.value)}),t.addEventListener("keyup",()=>{b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.SMS_CODE,t.value)}),n.addEventListener("keyup",()=>{b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.SMS_CODE,n.value)}),cur.statsPhoneVerifyInited=!0)},initStatsPhone(){var e=Object(c.J)("join_phone");b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.PHONE_NUMBER,e.value,!0),cur.statsPhoneInited||(e.addEventListener("keyup",()=>{cur.isPhoneElDirty||(b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.INPUT_NUMBER_INTERACTION,cur.eventScreen),cur.isPhoneElDirty=!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.PHONE_NUMBER,e.value)}),cur.statsPhoneInited=!0)},initStatsPassword(){var e=Object(c.J)("join_pass");b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.PASSWORD,e.value,!0),cur.statsPasswordInited||(e.addEventListener("keyup",()=>{b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.PASSWORD,e.value)}),cur.statsPasswordInited=!0)},initStatsRules(){var e=Object(c.J)("join_accept_terms_checkbox");b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.RULES_ACCEPT,L.policyChecked()+"",!0),cur.statsRulesInited||(e.addEventListener("click",()=>{b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.RULES_ACCEPT,L.policyChecked()+"")}),cur.statsRulesInited=!0)},initStats(){cur.eventScreen=b.EventScreens.REGISTRATION_PHONE,(Object(c.fb)("join_code_row")||Object(c.fb)("join_called_phone_row")||Object(c.fb)("join_called_code_row"))&&(cur.eventScreen=b.EventScreens.REGISTRATION_PHONE_VERIFY),Object(c.fb)("join_pass_row")&&(cur.eventScreen=b.EventScreens.REGISTRATION_PASSWORD),"done"===nav.objLoc.act&&(cur.eventScreen=b.EventScreens.REGISTRATION_COMPLETE),"contacts"===nav.objLoc.act&&(cur.eventScreen=b.EventScreens.REGISTRATION_COUNTRY),"education"===nav.objLoc.act&&(cur.eventScreen=b.EventScreens.REGISTRATION_EDUCATION),"email"===nav.objLoc.act&&(cur.eventScreen=b.EventScreens.REGISTRATION_EMAIL),cur.eventScreen===b.EventScreens.REGISTRATION_PHONE&&(L.initStatsPhone(),L.initStatsRules()),cur.eventScreen===b.EventScreens.REGISTRATION_PHONE_VERIFY&&(L.initStatsPhoneVerify(),L.initStatsRules()),cur.eventScreen===b.EventScreens.REGISTRATION_PASSWORD&&(L.initStatsPassword(),L.initStatsRules()),cur.eventScreen===b.EventScreens.REGISTRATION_COUNTRY&&(b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.COUNTRY,""+cur.uiCountry.val(),!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.CITY,""+cur.uiCity.val(),!0)),cur.eventScreen===b.EventScreens.REGISTRATION_EDUCATION&&(b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.COUNTRY,""+cur.selData.country_val[0],!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.CITY,""+cur.selData.city_val[0],!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.GRADUATION,"",!0),cur.isSchool?(b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.SCHOOL,"",!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.YEAR_FROM,"",!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.YEAR_TO,"",!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.CLASS,"",!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.SPECIALIZATION,"",!0)):(b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.UNIVERSITY,"",!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.FACULTY,"",!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.CHAIR,"",!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.EDU_FORM,"",!0),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.EDU_STATUS,"",!0))),cur.eventScreen===b.EventScreens.REGISTRATION_EMAIL&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.EMAIL,"",!0)},showProgress(){if(Object(c.fb)(cur.resultEl)){var e=Object(c.J)("join_"+cur.section+"_summary");e.lastChild&&Object(c.ab)(e.lastChild,"progress_inline")||e.appendChild(Object(c.g)("span",{className:"progress_inline join_summary_prg"}))}else Object(c.xb)("join_"+cur.section+"_none_prg"),cur.noneEl.style.visibility="hidden"},hideProgress(){if(Object(c.fb)(cur.resultEl)){var e=Object(c.J)("join_"+cur.section+"_summary");e.lastChild&&Object(c.ab)(e.lastChild,"progress_inline")&&Object(c.kb)(e.lastChild)}else cur.noneEl.style.visibility="",Object(c.bb)("join_"+cur.section+"_none_prg")},addFriendLogged:function(e,t,n){J(b.RegistrationFieldItemNames.FRIEND_ASK,(function(){b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.FRIEND_ASK,"1"),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.FIRST_FRIEND_ASK,b.EventScreens.REGISTRATION_LIST_FRIENDS_FACEBOOK,void 0,{force:!0})})),ajax.post("al_friends.php",{act:"add",mid:t,hash:n,from:"fb_sign"},{onDone:()=>{Object(c.bb)("join_add"+t),Object(c.xb)("join_request"+t)},showProgress:a.o.pbind(e),hideProgress:a.w.pbind(e)})},removeFriendLogged:function(e,t,n){ajax.post("al_friends.php",{act:"remove",mid:t,hash:n,from:"fb_sign"},{onDone:()=>{Object(c.xb)("join_add"+t),Object(c.bb)("join_request"+t)},showProgress:a.o.pbind(e),hideProgress:a.w.pbind(e)})},isPhoneCall(){var e=parseInt(cur.validationType,10);return 3===e||4===e},isPhoneCallStrict:()=>3===parseInt(cur.validationType,10),phoneDone:function(e,t){if(e){var n=Object(c.J)("join_phone");cur.uiPhoneCountry&&cur.uiPhoneCountry.val(t,!0),Object(c.Cb)(n,e),n.readOnly=!0,cur.uiPhoneCountry&&(cur.uiPhoneCountry.disable(!0),Object(c.c)("join_phone_prefixed","join_readonly_wrap")),Object(c.c)(n,"join_readonly")}cur.resendInt&&clearInterval(cur.resendInt),cur.resendInt=setInterval(L.resendUpdate,1e3),Object(c.xb)("join_code_submit","join_other_phone","join_resend"),Object(c.bb)("join_phone_submit"),L.isPhoneCall()?(Object(c.Cb)(Object(c.J)("join_called_phone_prefix").firstChild,""),Object(c.Cb)("join_called_phone",""),Object(c.bb)("join_code_row"),Object(c.bb)("join_called_code_row"),Object(i.l)("join_called_phone_row",150,c.H.pbind("join_called_phone"))):Object(c.fb)("join_called_phone_row")||Object(c.fb)("join_called_code_row")?(Object(c.bb)("join_called_phone_row"),Object(c.xb)("join_code_row"),setTimeout(c.H.pbind("join_code"),100)):Object(i.l)("join_code_row",150,c.H.pbind("join_code")),Object(c.Cb)("join_submit_result",""),Object(c.Cb)("join_code",""),L.initPhoneCode()},checkStatus:function(e,t){var n=Object(d.b)(),o=n?n.showProgress:a.o.pbind("join_send_phone"),i=n?n.hideProgress:a.w.pbind("join_send_phone");if(cur.checkingStatus){if(cur.checkingStatus<0)o(),cur.checkingStatus=1;else if(++cur.checkingStatus,cur.checkingStatus>4)return cur.checkingStatus=-1,i(),L.phoneDone(e,t)}else o(),cur.checkingStatus=1,cur.destroy.push((function(){clearTimeout(cur.checkingTimer),i()}));cur.checkingTimer=setTimeout(ajax.post("join.php",{act:"phone_check"},{onDone:n=>{if(n||cur.checkingStatus>3)return cur.checkingStatus=-1,i(),L.phoneDone(e,t);cur.checkingTimer=setTimeout(L.checkStatus.pbind(e,t),2e3)},onFail:n=>(cur.checkingStatus=-1,i(),n?(L.showMsg("join_submit_result",n,c.H.pbind("join_phone")),!0):L.phoneDone(e,t))}),1e3)},submitPhone:e=>{if(e||!Object(a.k)("join_send_phone"))if(L.policyChecked()){var t=Object(c.J)("join_phone"),n=L.getPhone(),o=Object(c.Cb)("join_phone"),i=!!cur.uiPhoneCountry&&cur.uiPhoneCountry.val_full();if(t.disabled)return Object(c.H)("join_code");ajax.post("join.php",{act:"phone",phone:n,hash:cur.hash},{showProgress:a.o.pbind("join_send_phone"),hideProgress:a.w.pbind("join_send_phone"),onDone:(e,t,n,r,s)=>{if(e)return Object(a.o)("join_send_phone"),void setTimeout(L.submitPhone.pbind(!0),1e3);if(cur.strongCode!==n){var l=Object(c.J)("join_code").tt;l&&l.destroy(),cur.strongCode=n}cur.validationType=s,cur.resendDelay=r,L.phoneDone(o,i),L.resendUpdate(),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_PROCEED,cur.eventScreen,b.EventScreens.REGISTRATION_PHONE_VERIFY),L.initStats()},onFail:e=>{if(e){var t=Object(c.J)("join_phone");return t&&t.tt&&t.tt.hide&&t.tt.hide({fasthide:!0}),L.showMsg("join_submit_result",e,c.H.pbind("join_phone")),!0}}})}else Object(a.q)("join_accept_terms_checkbox")},getStrength(e){var t=-1,n=["qwerty","йцукен","gfhjkm","пароль","password","abc123","fuckyou","123abc","baseball","football","soccer","monkey","liverpool","princess","jordan","slipknot","superman","iloveyou"];if(e!==e.replace(/\s/g,"")&&(Object(c.Cb)("join_pass",e=e.replace(/\s/g,"")),Object(c.H)("join_pass")),e.length<6)t=0;else if(e.match(/^\d+$/)||indexOf(n,e)>=0||e.substr(-1).match(/\d/)&&n.indexOf(e.substr(0,e.length-1))>=0)t=1;else{for(var o=[/[^a-z]/g,/[^A-Z]/g,/[^а-яё]/g,new RegExp("[^А-ЯЁ]","g"),/[^0-9]/g,new RegExp("[a-zA-Zа-яА-ЯёЁ0-9]","g")],i=[],r=0,a=0,l=o.length;a<l;++a){var u=e.replace(o[a],"").length;u&&(u>1&&++r,i.push({group:a,cnt:u}))}if(i.length<3&&parseInt(i[i.length-1].group,10)!==o.length-1&&r<2&&(t=2),(r>2||i.length>2&&parseInt(i[i.length-1].group,10)===o.length-1)&&(t=4),t<0&&r>1){var d=e.replace(o[o.length-1],"");d.length>1&&d.replace(new RegExp(Object(s.h)(d.charAt(0)),"g"),"").length&&(t=4)}t<0&&(t=3),t&&t<3&&e.length>13&&++t}return t},updateStrength(){var e=Object(c.Cb)("join_pass"),t=L.getStrength(e);Object(c.J)("join_about_pass").className="join_pwd_level"+t,Object(c.J)("join_pass_strength").innerHTML=e?Object(_.d)("join_pwd_level"+t):Object(_.d)("join_pwd_min_length"),setQuickLoginData(cur.fbSign&&cur.fbValid?cur.fbEmail:L.getPhone(),e,{params:cur.joinParams})},initPhoneCode(){cur.codeForm||(setQuickLoginData(L.getPhone(),"",{params:cur.joinParams}),utilsNode.appendChild(Object(c.g)("div",{innerHTML:`\n<form method="POST" action="${vk.loginscheme}://${cur.loginHost}/?act=check_code&_origin=${locProtocol}//${locHost}" id="join_code_form" name="join_code_form" target="join_code_frame">\n  <input type="hidden" name="email" id="join_code_phone" />\n  <input type="hidden" name="code" id="join_code_code" />\n  <input type="hidden" name="call" id="join_code_call" />\n  <input type="hidden" name="recaptcha" id="join_code_recaptcha" />\n  <input type="hidden" name="captcha_sid" id="join_code_sid" />\n  <input type="hidden" name="captcha_key" id="join_code_key" />\n</form>\n<iframe id="join_code_frame" name="join_code_frame"></iframe>\n`})),cur.codeForm=Object(c.J)("join_code_form"),cur.codeFrame=Object(c.J)("join_code_frame"))},validatePaste:e=>{var t=(e||window).clipboardData.getData("Text").replace(/[^0-9]/g,""),n=Object(c.J)("join_phone"),o=Object(c.J)("join_phone_prefix").firstChild;if(!(t.length<11)){var i=t.slice(0,2);89!=i&&87!=i||(t="7"+t.slice(1));var r,a=x(cur.countries);try{for(a.s();!(r=a.n()).done;){var s=r.value,l=s[3].slice(1),u=l.length;if(t.slice(0,u)===l)return cur.uiPhoneCountry.val(s[0]),Object(c.Cb)(o,s[3].toString()),Object(c.Cb)(n,t.slice(u)),cancelEvent(e)}}catch(e){a.e(e)}finally{a.f()}}},initPhoneCountry:function(e,t){cur.countries=e,cur.defCountry=t;var n=Object(c.J)("join_phone_country"),o=!!+n.dataset.vkConnectIntegration;cur.uiPhoneCountry=new Dropdown(n,cur.countries,{selectedItems:t,big_text:!0,disablePlaceholder:!0,liteEventsBind:!0,autocomplete:!0,multiselect:!1,onShow:function(){b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SELECT_COUNTRY,cur.eventScreen)},onChange:function(e){var t=Object(c.J)("join_phone"),n=Object(c.J)("join_phone_prefix").firstChild,i=cur.uiPhoneCountry.val_full()[3];if(t.readOnly||0===e||"0"===e||""===e||!1===e||void 0===e){var r=Object(c.Cb)(n);if(i==r)return;for(var a=0,s=cur.countries.length;a<s;++a)if(cur.countries[a][3]==r)return cur.uiPhoneCountry.val(cur.countries[a]);return cur.uiPhoneCountry.val(cur.defCountry,!0)}Object(c.Cb)(n,i),o||L.updatePolicyLink(cur.uiPhoneCountry.val()),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.SELECT_COUNTRY_NAME,cur.uiPhoneCountry.val()),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SELECT_COUNTRY_DONE,cur.eventScreen),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.PHONE_COUNTRY,cur.uiPhoneCountry.val())}}),Object(c.J)("join_phone").readOnly?cur.uiPhoneCountry.disable(!0):b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.PHONE_COUNTRY,cur.uiPhoneCountry.val(),!0),cur.destroy.push(cur.uiPhoneCountry.destroy.bind(cur.uiPhoneCountry))},getPhone(){var e=Object(s.I)(Object(c.Cb)("join_phone"));return Object(s.I)(Object(c.Cb)((Object(c.J)("join_phone_prefix")||{}).firstChild)||"")+e},submitPhoneCode(){if(cur.codeForm&&!Object(a.k)("join_send_code"))if(L.policyChecked()){var e,t,n;L.isPhoneCall()?(e="join_called_phone",t="join_called_phone_prefixed",n=cur.calledPhoneLen):(t=e="join_code",n=5);var o=Object(s.I)(Object(c.Cb)(e)).replace(/[^a-z0-9]/g,"");if(o.length<n)return Object(a.q)(t);if("05937"===o)return L.showMsg("join_submit_result",Object(_.d)("join_sorry_code"),c.H.pbind("join_code",!1,!1));Object(c.Cb)("join_code_phone",L.getPhone()),Object(c.Cb)("join_code_code",o),L.isPhoneCall()&&Object(c.Cb)("join_code_call",vk.id?-vk.id:getCookie("remixnreg_sid")),Object(a.o)("join_send_code"),cur.codeForm.submit()}else Object(a.q)("join_accept_terms_checkbox")},policyChecked(){var e=Object(c.L)("checkbox","join_accept_terms_checkbox");return Object(a.l)(e)},togglePhoneSubmit(){var e=L.policyChecked();Object(a.f)(Object(c.J)("join_send_phone"),!e),Object(a.f)(Object(c.J)("join_send_code"),!e),Object(a.f)(Object(c.J)("join_send_pass"),!e)},askPassword(e,t){Object(d.b)()&&Object(d.b)().hide(),cur.sureBoxText=t,Object(a.w)("join_send_code"),Object(c.Cb)("join_code",Object(c.Cb)("join_code_code"));var n=cur.joinParams&&cur.joinParams.facebook;cur.joinParams={join_code:Object(c.Cb)("join_code"),join_hash:e},n&&(cur.joinParams.facebook=1),L.isPhoneCall()?(Object(c.J)("join_called_phone").readOnly=!0,Object(c.c)(Object(c.J)("join_called_phone"),"join_readonly"),Object(c.c)(Object(c.J)("join_called_phone_prefixed"),"join_readonly_wrap")):(Object(c.J)("join_code").readOnly=!0,Object(c.c)(Object(c.J)("join_code"),"join_readonly")),Object(c.xb)("join_pass_submit"),Object(c.bb)("join_other_phone","join_code_submit","join_resend","join_country_row"),Object(i.l)("join_pass_row",150,c.H.pbind("join_pass")),Object(c.Cb)("join_submit_result",""),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_PROCEED,cur.eventScreen,b.EventScreens.REGISTRATION_PASSWORD),L.initStats()},askCaptcha(e,t,n){cur.codeForm&&(Object(a.w)("join_send_code"),2===parseInt(t,10)?window.badCodeBox=Object(u.e)(e,n,window.badCodeBox,{onSubmit:(e,t)=>{Object(c.Cb)("join_code_recaptcha",e),cur.codeForm.submit()},onHide:()=>{window.badCodeBox=!1}}):window.badCodeBox=Object(u.c)(e,n,window.badCodeBox,{onSubmit:(e,t)=>{Object(c.Cb)("join_code_sid",e),Object(c.Cb)("join_code_key",t),cur.codeForm.submit()},onHide:()=>{window.badCodeBox=!1}}))},submitPasswordSure(){Object(u.d)(Object(_.d)("join_new_page_sure_title"),Object(_.d)("join_new_page_sure"),Object(_.d)("join_new_page_sure_submit"),L.submitPassword.pbind(-1),Object(_.d)("global_cancel"))},submitPassword(e,t){if(!Object(a.k)("join_send_pass")||cur.submitOnSign)if(L.policyChecked()){var n;if(!0===t)n="000000";else if((n=Object(c.Cb)("join_pass")).length<6||L.getStrength(n)<3)return Object(a.q)("join_pass");if(cur.sureBoxText&&1!==e&&-1!==e)Object(u.d)({title:Object(_.d)("join_sure_detach"),hideButtons:!0,width:560,noCloseButton:!0},cur.sureBoxText).changed=!0;else{if(cur.joinParams.join_to_already=Object(s.r)(e),cur.fbSign&&!cur.fbSigned)return cur.submitOnSign=1,Object(a.o)("join_send_pass");var o;window._oldOnLoginFailed||(window._oldOnLoginFailed=window.onLoginFailed,window._oldOnLoginDone=window.onLoginDone,cur.destroy.push(()=>{window.onLoginFailed=window._oldOnLoginFailed,window.onLoginDone=window._oldOnLoginDone,window._oldOnLoginFailed=!1,window._oldOnLoginDone=!1})),window.onLoginFailed=(e,t)=>{D(g,S,f),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.INCORRECT_PASSWORD,cur.eventScreen),-1===e?location.href=location.href.replace(/^http:/,"https:"):4===e?location.href="/login?m=1&email="+t.email:7===e?location.href="/join?act=finish&m=1":10===e?(Object(a.o)("join_send_pass"),setTimeout(submitQuickLoginForm.pbind(o,n,{prg:"join_send_pass",params:cur.joinParams}),1e3)):nav.reload()},window.onLoginDone=nav.go.pbind("join?act=done"),cur.fbSign&&(cur.fbValid||!0===t)?(o=cur.fbEmail,cur.joinParams.fb_id=cur.fbId):(o=L.getPhone(),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_PROCEED,cur.eventScreen,b.EventScreens.REGISTRATION_COMPLETE)),submitQuickLoginForm(o,n,{prg:"join_send_pass",params:cur.joinParams})}}else Object(a.q)("join_accept_terms_checkbox")},showMsg(e,t,n,o){var i=Object(c.J)(e);showMsg(i,t,o||"error",!0),Object(s.v)(n)&&n()},codeFailed(e,t){Object(d.b)()&&Object(d.b)().hide(),Object(a.w)("join_send_code");var n,o=Object(_.d)("join_wrong_code");(e=Object(s.r)(e))<0?(o=Object(_.d)("join_code_failed"),L.changePhone()):e&&e<6&&(o+="<br>"+Object(_.d)("join_tries_left").replace("{count}","<b>"+e+"</b>")),L.isPhoneCall()&&Object(c.fb)("join_called_phone_prefix")?(n="join_called_phone",Object(c.Cb)(Object(c.J)("join_called_phone_prefix").firstChild,t)):n="join_code",L.showMsg("join_submit_result",o,c.H.pbind(n)),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.INCORRECT_SMS_CODE,cur.eventScreen),window._oldOnLoginFailed&&(window.onLoginFailed=window._oldOnLoginFailed)},resendUpdate(){var e,t;L.isPhoneCallStrict()?(e="join_send_code_sms_time",t="join_send_code_sms"):(e="join_resend_sms_time",t="join_no_sms"),cur.resendDelay>0?(Object(c.Cb)("join_resend",Object(_.d)(e).replace("%s",Math.floor(cur.resendDelay/60)+":"+(cur.resendDelay%60<10?"0":"")+cur.resendDelay%60)),cur.resendDelay--):-1===parseInt(cur.resendDelay,10)?(Object(c.Cb)("join_resend",""),clearInterval(cur.resendInt)):(Object(c.Cb)("join_resend",'<a id="join_resend_lnk" onclick="return Join.noCode()">'+Object(_.d)(t)+"</a>"),clearInterval(cur.resendInt))},noCode(){var e=Object(c.g)("span",{className:"progress_inline"}),t=Object(c.J)("join_resend_lnk"),n=t.parentNode;return ajax.post("join.php",{act:"resend",hash:cur.hash},{showProgress:()=>{t.parentNode===n&&n.replaceChild(e,t)},hideProgress:()=>{e.parentNode===n&&n.replaceChild(t,e)},onDone:function(e,t,n,o){1===parseInt(e,10)?(cur.validationType=e,cur.resendDelay=t,L.phoneDone(),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.RESEND_SMS_CODE,cur.eventScreen)):t&&n?(Object(c.Cb)("join_submit_result",""),Object(u.d)({title:e,width:450,noCloseButton:!0},t,n,L.call,o).changed=!0,b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.RESEND_SMS_CODE,cur.eventScreen)):t?(Object(c.Cb)("join_submit_result",""),Object(u.d)({title:e,width:450},t),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.RESEND_SMS_CODE,cur.eventScreen)):(L.showMsg("join_submit_result",e),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.RESEND_SMS_CODE_FAILED,cur.eventScreen))}}),!1},changePhone(){var e=Object(c.J)("join_phone");e.readOnly=!1,Object(c.mb)(e,"join_readonly"),cur.uiPhoneCountry&&(cur.uiPhoneCountry.disable(!1),cur.uiPhoneCountry.val(cur.uiPhoneCountry.val(),!0),Object(c.mb)("join_phone_prefixed","join_readonly_wrap")),Object(c.xb)("join_phone_submit","join_country_row"),Object(c.bb)("join_code_submit","join_other_phone","join_resend"),Object(i.n)(L.isPhoneCall()?"join_called_phone_row":"join_code_row",150),Object(c.Cb)("join_phone",""),Object(c.H)("join_phone"),b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_RETURN,cur.eventScreen,b.EventScreens.REGISTRATION_PHONE),L.initStats()},call(){ajax.post("join.php",{act:"call",hash:cur.hash},{progress:Object(d.b)().progress,onDone:(e,t)=>{Object(d.b)().hide(),cur.validationType=t,b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.RESEND_SMS_CODE,cur.eventScreen),L.isPhoneCall()?L.phoneDone():Object(c.H)("join_code"),L.showMsg("join_submit_result",e)}})},tipShow(e,t,n,o){var i=Object(c.J)(e),r=()=>{Object(j.c)(i,{text:t,dir:"left",slideX:15,className:"join_finish_tt"+(o?" "+o:""),shift:n,onCreate:l.i.pbind(e,"mouseout")})};vk.loaded?setTimeout(r,0):Object(l.b)(window,"load",r)},tipHide(){var e=["join_phone","join_code","join_pass","join_called_phone"];e.map(t=>{var n=Object(c.J)(e[t]);n&&n.tt&&n.tt.hide&&n.tt.hide()})},phoneTip(e){var t=Object(c.J)("join_phone"),n=Object(c.S)(t);t.readOnly||L.tipShow(t,e,[-(n[0]+10),-Math.floor(n[1]/2)],"join_phone_tt")},passTip(){var e=Object(c.J)("join_pass"),t=Object(c.S)(e);return L.tipShow(e,Object(_.d)("join_pass_tip"),[-(t[0]+10),-Math.floor(t[1]/2)])},switchToDefSign(e,t){ajax.post("join.php",{act:"logout",hash:e,noredir:1},{onDone:()=>{Object(u.b)("join.php",{act:"box",from:nav.strLoc,nofb:1})},showProgress:a.o.pbind(t),hideProgress:a.w.pbind(t)})},initContacts(){selectsData.setCountries(cur.selData.countries),selectsData.setCities(cur.selData.country,cur.selData.cities),cur.selData.city_val=cur.selData.city_val||["",""],cur.selData.country_val=cur.selData.country_val||["",""],cur.uiCity=new CitySelect(Object(c.J)("pedit_city"),Object(c.J)("pedit_city_row"),{progressBar:Object(c.J)("pedit_progress"),city:cur.selData.city_val,country:cur.selData.country,maxItemsShown:e=>e>6?500:350,onChange:t=>{t!==e&&(e=t,b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.CITY,""+t))},dark:1,width:280});var e=Object(s.r)(cur.uiCity.val());cur.uiCountry=new CountrySelect(Object(c.J)("pedit_country"),Object(c.J)("pedit_country_row"),{progressBar:Object(c.J)("pedit_progress"),country:cur.selData.country_val,citySelect:cur.uiCity,onChange:e=>{b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.COUNTRY,""+e),J(b.RegistrationFieldItemNames.PHONE_COUNTRY,(function(){b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.FIRST_COUNTRY,cur.eventScreen)})),L.checkSave(e)},dark:1,width:280}),L.checkSave(Object(c.J)("pedit_country").value),L.initStats()},submitContacts(){var e={act:"check_contacts",hash:cur.saveHash,country:Object(c.J)("pedit_country").value,city:Object(c.J)("pedit_city").value};if(!e.country)return D(m,S,R),L.showMsg("join_submit_result",Object(_.d)("join_need_contacts")),!0;var t=Object(c.J)("join_save");ajax.post("join.php",e,{onDone:()=>{b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_PROCEED,cur.eventScreen,b.EventScreens.REGISTRATION_EDUCATION),nav.go("/join?act=education")},onFail:e=>(L.showMsg("join_submit_result",e),!0),showProgress:a.o.pbind(t),hideProgress:a.w.pbind(t)})},initEducation(){selectsData.setCountries(cur.selData.countries),selectsData.setCities(cur.selData.country,cur.selData.cities),cur.selData.city_val=cur.selData.city_val||["",""],cur.selData.country_val=cur.selData.country_val||["",""];var e=Object(c.J)("edu"),t={id:0,width:280,city:cur.selData.city,city_val:cur.selData.city_val,country:cur.selData.country,country_val:cur.selData.country_val};if(cur.isSchool){var n={school0country:cur.selData.country_val[0],school0city:cur.selData.city_val[0]};e.appendChild(ProfileEditorEdu.genSchoolRow(0)),ProfileEditorEdu.initSchoolRow(t,null,e=>{J(b.RegistrationFieldItemNames.CLASS,(function(){b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.FIRST_EDUCATION,cur.eventScreen)})),L.checkSave(e)},()=>{var e=ProfileEditorEdu.addSchoolParams({},{id:0},"school0");n.school0country!=e.school0country&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.COUNTRY,e.school0country||""),n.school0city!=e.school0city&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.CITY,e.school0city||""),n.school0graduation!=e.school0graduation&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.GRADUATION,e.school0graduation||""),n.school0school!=e.school0school&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.SCHOOL,e.school0school||""),n.school0start!=e.school0start&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.YEAR_FROM,e.school0start||""),n.school0finish!=e.school0finish&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.YEAR_TO,e.school0finish||""),n.school0class!=e.school0class&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.CLASS,e.school0class||""),n.school0custom_spec!=e.school0custom_spec&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.SPECIALIZATION,e.school0custom_spec||""),n=e}),L.checkSave(Object(c.J)("s_school0").value),Object(l.b)(Object(c.J)("s_spec0_custom"),"keydown",(function(e){10!=e.keyCode&&13!=e.keyCode||L.submitEducation()}))}else{var o={primary_unicountry:cur.selData.country_val[0],primary_unicity:cur.selData.city_val[0]};e.appendChild(ProfileEditorEdu.genUniRow(0)),ProfileEditorEdu.initUniRow(t,null,e=>{J(b.RegistrationFieldItemNames.EDU_FORM,(function(){b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.FIRST_EDUCATION,cur.eventScreen)})),L.checkSave(e)},()=>{var e=ProfileEditorEdu.addUniParams({},{id:0},"primary_uni");o.primary_unicountry!=e.primary_unicountry&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.COUNTRY,e.primary_unicountry||""),o.primary_unicity!=e.primary_unicity&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.CITY,e.primary_unicity||""),o.primary_unigraduation!=e.primary_unigraduation&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.GRADUATION,e.primary_unigraduation||""),o.primary_uniuniversity!=e.primary_uniuniversity&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.UNIVERSITY,e.primary_uniuniversity||""),o.primary_unifaculty!=e.primary_unifaculty&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.FACULTY,e.primary_unifaculty||""),o.primary_unichair!=e.primary_unichair&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.CHAIR,e.primary_unichair||""),o.primary_uniedu_form!=e.primary_uniedu_form&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.EDU_FORM,e.primary_uniedu_form||""),o.primary_uniedu_status!=e.primary_uniedu_status&&b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.EDU_STATUS,e.primary_uniedu_status||""),o=e}),L.checkSave(Object(c.J)("u_university0").value)}L.initStats()},submitEducation(){var e,t;if(cur.isSchool?(t={act:"a_save_education_school"},(t=ProfileEditorEdu.addSchoolParams(t,{id:0},"school0")).school0school||(e=Object(_.d)("join_need_school")),t.school0id=-1):(t={act:"a_save_education_uni"},(t=ProfileEditorEdu.addUniParams(t,{id:0},"primary_uni")).primary_uniuniversity||(e=Object(_.d)("join_need_uni")),t.primary_uniid=cur.uniId||-1),e)return b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.INCORRECT_EDUCATION,cur.eventScreen),D(I,S,cur.isSchool?C:T),L.showMsg("join_submit_result",e),!0;var n=Object(c.J)("join_save");t.hash=cur.saveHash,ajax.post("al_profileEdit.php",t,{onDone:()=>{b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_PROCEED,cur.eventScreen,b.EventScreens.REGISTRATION_EMAIL),D(I,y),nav.go("/join?act=email")},showProgress:a.o.pbind(n),hideProgress:a.w.pbind(n)})},initEmail(){var e=Object(c.J)("pedit_email");Object(l.b)(e,"keydown change",(function(t){J(b.RegistrationFieldItemNames.EMAIL,(function(){b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.FIRST_EMAIL,cur.eventScreen)})),10===t.keyCode||13===t.keyCode?L.submitEmail():L.checkSave(e.value),b.registrationItemStat.logFieldInteraction(b.RegistrationFieldItemNames.EMAIL,e.value)})),L.checkSave(),L.initStats()},submitEmail(){var e={email:document.querySelector("#pedit_email").value.trim(),is_new:1,hash:cur.saveHash};if(!e.email)return b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.ERROR_EMPTY_EMAIL,cur.eventScreen),D(v,S,w),L.showMsg("join_submit_result",Object(_.d)("join_need_email")),!0;var t=Object(c.J)("join_save");e.hash=cur.saveHash,ajax.post("al_settings.php?act=a_bind_mail",e,{onDone:()=>{b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_PROCEED,cur.eventScreen),D(v,y),location.href="/feed"},onFail:e=>{if(void 0!==e){var t=void 0!==e.message?e.message:e;L.showMsg("join_submit_result",t),"ALREADY_USED"===e.code?D(v,S,N):D(v,S,P)}return!0},showProgress:()=>Object(a.o)(t),hideProgress:()=>Object(a.w)(t)})},checkSave(e){Object(a.f)(Object(c.J)("join_save"),!e)},showPolicy(e){Object(u.b)("al_help.php",{act:e,cc_id:cur.uiPhoneCountry.val()||0,box:1})},updatePolicyLink(e){var t=Object(c.L)("checkbox","join_accept_terms_checkbox");Object(a.c)(t,0);ajax.post("join.php",{act:"update_policy",cc_id:e||0},{onDone:e=>{if(e){var t=Object(c.J)("join_accept_terms_checkbox");if(t){var n=Object(c.L)("join_accept_terms_text",t);n&&(n.innerHTML=e)}}}})},phoneOnKeyUp(){clearTimeout(L.checkPhoneTimeout);var e=L.getPhone();e&&e!==L.prevPhone&&(e.length>4?L.checkPhoneTimeout=setTimeout((function(){ajax.post("activation.php",{act:"mrg_check_phone",phone:e,rnd:L.phoneMrgInstanceId},{onDone:t=>{L.prevPhone=e,!t&&L.defaultPhoneTip||(L.destroyPhoneTip(),t&&(Object(c.J)("join_phone_prefixed")?Object(a.q)("join_phone_prefixed"):Object(a.q)("join_phone"),L.defaultPhoneTip=!1))}})}),500):(L.prevPhone=e,L.defaultPhoneTip||L.destroyPhoneTip()))},destroyPhoneTip(){var e=Object(c.J)("join_phone");e&&e.tt&&e.tt.destroy()},silentAuth(){},completeProceed(){b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_PROCEED,cur.eventScreen,b.EventScreens.REGISTRATION_COUNTRY)},completeSkip(){b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_SKIP,cur.eventScreen),D(O,E)},educationSkip(){b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_SKIP,cur.eventScreen,b.EventScreens.REGISTRATION_EMAIL),D(I,E)},contactsSkip(){b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_SKIP,cur.eventScreen,b.EventScreens.REGISTRATION_EDUCATION),D(m,E)},emailSkip(){b.registrationItemStat.logEvent(b.RegistrationItemEventTypes.SCREEN_SKIP,cur.eventScreen),D(v,E)},initDone(){L.initStats(),Object(p.h)()},initFbDone(){Object(p.h)()},initIndexJoinForm:function(e){var t=document.querySelector(".JoinForm");Object(h.a)(t,A({},e,{ref:"index"}))},initInviteJoinForm:function(e){var t=document.querySelector(".JoinForm");Object(h.a)(t,A({},e,{ref:"invite"}))},initJoinBox:function(e){var t=Object(d.b)();t.changed=!0,t.setOptions({width:560,hideButtons:!0,bodyStyle:"padding: 0"});var n=t.bodyNode.querySelector(".JoinForm");Object(h.a)(n,A({},e,{ref:"box"}))},initCommon:function(e){var t=e.logoutLabel,n=e.logoutHash,o=document.querySelector("#top_reg_link");o&&(clearTimeout(window.__joinTopTO),setTimeout(()=>{o.old=o.innerHTML,o.was=Object(c.fb)(o),o.innerHTML=t,o.onclick=e=>{if(cur.checkInterval&&clearInterval(cur.checkInterval),!1===checkEvent(e))return window.ajax.post("join.php",{act:"logout",hash:n}),cancelEvent(e)},Object(c.xb)(o),cur.destroy.push(()=>{window.__joinTopTO=setTimeout(()=>{Object(c.Cb)(o,o.old),o.onclick=()=>{},o.was||Object(c.bb)(o)},500)})},0)),Object(c.bb)("top_switch_lang","ts_wrap")}};window.Join=L;try{stManager.done(jsc("web/join.js"))}catch(e){}}});