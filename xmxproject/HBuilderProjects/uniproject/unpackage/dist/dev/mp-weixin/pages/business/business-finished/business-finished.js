(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/business/business-finished/business-finished"],{193:
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/business/business-finished/business-finished.vue ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! ./business-finished.vue?vue&type=template&id=61a635a6& */194),s=n(/*! ./business-finished.vue?vue&type=script&lang=js& */196);for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n(/*! ./business-finished.vue?vue&type=style&index=0&lang=css& */198);var i=n(/*! ../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),u=Object(i.default)(s.default,r.render,r.staticRenderFns,!1,null,null,null);u.options.__file="Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/business/business-finished/business-finished.vue",e.default=u.exports},194:
/*!***************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/business/business-finished/business-finished.vue?vue&type=template&id=61a635a6& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./business-finished.vue?vue&type=template&id=61a635a6& */195);n.d(e,"render",function(){return r.render}),n.d(e,"staticRenderFns",function(){return r.staticRenderFns})},195:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/business/business-finished/business-finished.vue?vue&type=template&id=61a635a6& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return r}),n.d(e,"staticRenderFns",function(){return s});var r=function(){var t=this.$createElement;this._self._c},s=[];r._withStripped=!0},196:
/*!*********************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/business/business-finished/business-finished.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./business-finished.vue?vue&type=script&lang=js& */197),s=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=s.a},197:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/business/business-finished/business-finished.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLoad:function(){this.ctx=t.createCameraContext()},data:function(){return{videoSrc:"",src:""}},methods:{startRecord:function(){this.ctx.startRecord({success:function(t){console.log(t)}})},stopRecord:function(){var e=this;this.ctx.stopRecord({success:function(n){console.log(n),e.src=n.tempThumbPath,e.videoSrc=n.tempVideoPath,t.request({url:"https://www.finetwm.com/xmRepair/order/uploadVideo",method:"POST",data:{videoUrl:e.videoSrc,orderId:0xe8d4a51001},success:function(t){console.log(t)}})}})}}};e.default=n}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},198:
/*!*****************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/business/business-finished/business-finished.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./business-finished.vue?vue&type=style&index=0&lang=css& */199),s=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=s.a},199:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/business/business-finished/business-finished.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}},[[192,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/business/business-finished/business-finished.js.map