(global.webpackJsonp=global.webpackJsonp||[]).push([["wxcomponents/bw-swiper/bw-swiper"],{349:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/wxcomponents/bw-swiper/bw-swiper.vue ***!
  \**************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! ./bw-swiper.vue?vue&type=template&id=0fdb7354& */350),r=n(/*! ./bw-swiper.vue?vue&type=script&lang=js& */352);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n(/*! ./bw-swiper.vue?vue&type=style&index=0&lang=css& */354);var a=n(/*! ../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),o=Object(a.default)(r.default,i.render,i.staticRenderFns,!1,null,null,null);o.options.__file="Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/wxcomponents/bw-swiper/bw-swiper.vue",e.default=o.exports},350:
/*!*********************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/wxcomponents/bw-swiper/bw-swiper.vue?vue&type=template&id=0fdb7354& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bw-swiper.vue?vue&type=template&id=0fdb7354& */351);n.d(e,"render",function(){return i.render}),n.d(e,"staticRenderFns",function(){return i.staticRenderFns})},351:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/wxcomponents/bw-swiper/bw-swiper.vue?vue&type=template&id=0fdb7354& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return i}),n.d(e,"staticRenderFns",function(){return r});var i=function(){var t=this.$createElement;this._self._c},r=[];i._withStripped=!0},352:
/*!***************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/wxcomponents/bw-swiper/bw-swiper.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bw-swiper.vue?vue&type=script&lang=js& */353),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e.default=r.a},353:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/wxcomponents/bw-swiper/bw-swiper.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"bw-swiper",created:function(){var e=this;this.fullScreen&&t.getSystemInfo({success:function(t){e.swiperHeight=t.screenHeight-44}})},mounted:function(){var e=this;this.fullScreen||t.createSelectorQuery().in(this).select(".swiper-item").boundingClientRect(function(t){e.swiperHeight=t.width/e.w_h}).exec()},props:{fullScreen:{type:Boolean,default:!1},swiperList:{type:Array,default:function(){return[]}},swiperType:{type:Boolean,default:!1},videoAutoplay:{type:Boolean,default:!1},videoKey:{type:String,default:"src"},imageKey:{type:String,default:"img"},textKey:{type:String,default:"text"},textTip:{type:Boolean,default:!1},textStyleSize:{type:Number,default:24},textStyleBottom:{type:Number,default:5},textStyleRight:{type:Number,default:5},textStyleColor:{type:String,default:"#ffffff"},textStyleBgcolor:{type:String,default:"transparent"},w_h:{type:Number,default:2},skipHiddenItemLayout:{type:Boolean,default:!1},displayMultipleItems:{type:Number,default:1},nextMargin:{type:String,default:"0px"},previousMargin:{type:String,default:"0px"},vertical:{type:Boolean,default:!1},circular:{type:Boolean,default:!0},duration:{type:Number,default:400},interval:{type:Number,default:3500},current:{type:Number,default:0},autoplay:{type:Boolean,default:!0},indicatorColor:{type:String,default:"#CCCCCC"},indicatorActiveColor:{type:String,default:"#ffffff"},indicatorDots:{type:Boolean,default:!0}},data:function(){return{flag:!0,cardCur:0,swiperHeight:300}},computed:{},methods:{play:function(){this.flag=!1},pause:function(){this.flag=!0},clickItem:function(t){this.swiperList.length>0&&this.$emit("clickItem",this.swiperList[t])},change:function(t){this.$emit("change",t)},animationfinish:function(t){this.cardCur=t.detail.current,this.$emit("animationfinish",t)}}};e.default=n}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},354:
/*!***********************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/wxcomponents/bw-swiper/bw-swiper.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../Downloads/HBuilderX.2.2.2.20190816/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bw-swiper.vue?vue&type=style&index=0&lang=css& */355),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e.default=r.a},355:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/GitHub/xmxproject/xmxproject/HBuilderProjects/uniproject/wxcomponents/bw-swiper/bw-swiper.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/wxcomponents/bw-swiper/bw-swiper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/bw-swiper/bw-swiper-create-component',
    {
        'wxcomponents/bw-swiper/bw-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(349))
        })
    },
    [['wxcomponents/bw-swiper/bw-swiper-create-component']]
]);                
