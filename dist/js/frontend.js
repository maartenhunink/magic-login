!function(){var t={681:function(){var t;(t=jQuery)(document).on("submit","#magicloginform",(function(n){n.preventDefault();const e=t(this);t.post(e.data("ajax-url"),{beforeSend(){e.find(".magic-login-submit ").attr("disabled","disabled")},action:"magic_login_ajax_request",data:t("#magicloginform").serialize()},(function(n){t(".magic-login-form-header").html(n.data.message),n.data.show_form||e.hide()})).done((function(){e.find(".magic-login-submit ").attr("disabled",!1)}))}))}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";e(681)}()}();