(global.webpackJsonp=global.webpackJsonp||[]).push([["components/ccg-getOpenID/ccg-wxAppOpenid"],{473:
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/components/ccg-getOpenID/ccg-wxAppOpenid.vue ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var c=t(/*! ./ccg-wxAppOpenid.vue?vue&type=template&id=bc8760b2& */474),r=t(/*! ./ccg-wxAppOpenid.vue?vue&type=script&lang=js& */476);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);var i=t(/*! ../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),s=Object(i.default)(r.default,c.render,c.staticRenderFns,!1,null,null,null);s.options.__file="Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/components/ccg-getOpenID/ccg-wxAppOpenid.vue",n.default=s.exports},474:
/*!*****************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/components/ccg-getOpenID/ccg-wxAppOpenid.vue?vue&type=template&id=bc8760b2& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,n,t){"use strict";t.r(n);var c=t(/*! -!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ccg-wxAppOpenid.vue?vue&type=template&id=bc8760b2& */475);t.d(n,"render",function(){return c.render}),t.d(n,"staticRenderFns",function(){return c.staticRenderFns})},475:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/components/ccg-getOpenID/ccg-wxAppOpenid.vue?vue&type=template&id=bc8760b2& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,n,t){"use strict";t.r(n),t.d(n,"render",function(){return c}),t.d(n,"staticRenderFns",function(){return r});var c=function(){var e=this.$createElement;this._self._c},r=[];c._withStripped=!0},476:
/*!***********************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/components/ccg-getOpenID/ccg-wxAppOpenid.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var c=t(/*! -!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ccg-wxAppOpenid.vue?vue&type=script&lang=js& */477),r=t.n(c);for(var o in c)"default"!==o&&function(e){t.d(n,e,function(){return c[e]})}(o);n.default=r.a},477:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/components/ccg-getOpenID/ccg-wxAppOpenid.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"GetOpenId",data:function(){return{appid:"wx5a7e48b2d2c7cc4b",secret:"72c2a67d30da73dafff574f324c351e4"}},methods:{getOpenId:function(){var n=this;e.login({success:function(t){if(t.code){e.getUserInfo({success:function(e){console.log("存在code")}});var c="https://api.weixin.qq.com/sns/jscode2session?appid="+n.appid+"&secret="+n.secret+"&js_code="+t.code+"&grant_type=authorization_code";e.request({url:c,data:{},method:"GET",success:function(e){var n={};n.openid=e.data.openid,console.log("openid: "+e.data.openid),n.expires_in=Date.now()+e.data.expires_in}})}else console.log("获取用户登录态失败！"+t.errMsg)}})}}};n.default=t}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/ccg-getOpenID/ccg-wxAppOpenid.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ccg-getOpenID/ccg-wxAppOpenid-create-component',
    {
        'components/ccg-getOpenID/ccg-wxAppOpenid-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(473))
        })
    },
    [['components/ccg-getOpenID/ccg-wxAppOpenid-create-component']]
]);                
