(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ccg-getOpenID/ccg-wxAppOpenid"],{"2f1f":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"GetOpenId",data:function(){return{appid:"wx5a7e48b2d2c7cc4b",secret:"72c2a67d30da73dafff574f324c351e4"}},methods:{getOpenId:function(){var n=this;e.login({success:function(t){if(t.code){e.getUserInfo({success:function(e){console.log("存在code")}});var a=n.appid,c=n.secret,o="https://api.weixin.qq.com/sns/jscode2session?appid="+a+"&secret="+c+"&js_code="+t.code+"&grant_type=authorization_code";e.request({url:o,data:{},method:"GET",success:function(e){var n={};n.openid=e.data.openid,console.log("openid: "+e.data.openid),n.expires_in=Date.now()+e.data.expires_in}})}else console.log("获取用户登录态失败！"+t.errMsg)}})}}};n.default=t}).call(this,t("543d")["default"])},"495d":function(e,n,t){"use strict";t.r(n);var a=t("6a48"),c=t("a26f");for(var o in c)"default"!==o&&function(e){t.d(n,e,function(){return c[e]})}(o);var i=t("2877"),s=Object(i["a"])(c["default"],a["a"],a["b"],!1,null,null,null);n["default"]=s.exports},"6a48":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return c})},a26f:function(e,n,t){"use strict";t.r(n);var a=t("2f1f"),c=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ccg-getOpenID/ccg-wxAppOpenid-create-component',
    {
        'components/ccg-getOpenID/ccg-wxAppOpenid-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("495d"))
        })
    },
    [['components/ccg-getOpenID/ccg-wxAppOpenid-create-component']]
]);                
