(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/selectmodel/selectmodel"],{76:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/selectmodel/selectmodel.vue ***!
  \***********************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! ./selectmodel.vue?vue&type=template&id=1d51f716& */77),r=n(/*! ./selectmodel.vue?vue&type=script&lang=js& */79);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);n(/*! ./selectmodel.vue?vue&type=style&index=0&lang=css& */81);var c=n(/*! ../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),i=Object(c.default)(r.default,o.render,o.staticRenderFns,!1,null,null,null);i.options.__file="Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/selectmodel/selectmodel.vue",t.default=i.exports},77:
/*!******************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/selectmodel/selectmodel.vue?vue&type=template&id=1d51f716& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./selectmodel.vue?vue&type=template&id=1d51f716& */78);n.d(t,"render",function(){return o.render}),n.d(t,"staticRenderFns",function(){return o.staticRenderFns})},78:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/selectmodel/selectmodel.vue?vue&type=template&id=1d51f716& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,n){"use strict";n.r(t),n.d(t,"render",function(){return o}),n.d(t,"staticRenderFns",function(){return r});var o=function(){var e=this.$createElement;this._self._c},r=[];o._withStripped=!0},79:
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/selectmodel/selectmodel.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./selectmodel.vue?vue&type=script&lang=js& */80),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t.default=r.a},80:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/selectmodel/selectmodel.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLoad:function(){var t=this;e.request({url:"https://120.24.180.246:8080/xmRepair/phoneBrand/getBrand",method:"GET",data:{},success:function(e){t.slideList=e.data.data}})},data:function(){return{colorId:null,selectedId:0,popupContent:[{imgSrc:"../../wxcomponents/popupcon/gold@2x.png",text:"金色"},{imgSrc:"../../wxcomponents/popupcon/rose@2x.png",text:"玫瑰金"},{imgSrc:"../../wxcomponents/popupcon/silver@2x.png",text:"银色"},{imgSrc:"../../wxcomponents/popupcon/black@2x.png",text:"黑色"}],isSelected:!1,phone:"手机",pad:"平板",slideList:[],phoneType:[{type:"iPhone XS Max"},{type:"iPhone XS"},{type:"iPhone XR"},{type:"iPhone X"}]}},methods:{onNext:function(){e.navigateTo({url:"../faults/faults"})},openPopup:function(){this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()},onSelectedId:function(t){this.selectedId=t.currentTarget.id;var n=t.currentTarget.id,o=this.slideList[n].brand;e.setStorage({key:"model",data:o})},onSelectedColor:function(e){this.colorId=e.currentTarget.id}},components:{uniPopup:function(){return n.e(/*! import() | components/uni-popup/uni-popup */"components/uni-popup/uni-popup").then(n.bind(null,/*! @/components/uni-popup/uni-popup.vue */388))},xselect:function(){return n.e(/*! import() | wxcomponents/xselect/xselect */"wxcomponents/xselect/xselect").then(n.bind(null,/*! ../../wxcomponents/xselect/xselect.vue */395))}}};t.default=o}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},81:
/*!********************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/selectmodel/selectmodel.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./selectmodel.vue?vue&type=style&index=0&lang=css& */82),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t.default=r.a},82:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/pages/selectmodel/selectmodel.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){}},[[75,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/selectmodel/selectmodel.js.map