(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/bw-swiper/bw-swiper"],{"0776":function(t,e,i){"use strict";var n=i("12a0"),a=i.n(n);a.a},"12a0":function(t,e,i){},"16d3":function(t,e,i){"use strict";i.r(e);var n=i("3597"),a=i.n(n);for(var u in n)"default"!==u&&function(t){i.d(e,t,function(){return n[t]})}(u);e["default"]=a.a},3597:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"bw-swiper",created:function(){var e=this;this.fullScreen&&t.getSystemInfo({success:function(t){e.swiperHeight=t.screenHeight-44}})},mounted:function(){var e=this;if(!this.fullScreen){var i=t.createSelectorQuery().in(this);i.select(".swiper-item").boundingClientRect(function(t){e.swiperHeight=t.width/e.w_h}).exec()}},props:{fullScreen:{type:Boolean,default:!1},swiperList:{type:Array,default:function(){return[]}},swiperType:{type:Boolean,default:!1},videoAutoplay:{type:Boolean,default:!1},videoKey:{type:String,default:"src"},imageKey:{type:String,default:"img"},textKey:{type:String,default:"text"},textTip:{type:Boolean,default:!1},textStyleSize:{type:Number,default:24},textStyleBottom:{type:Number,default:5},textStyleRight:{type:Number,default:5},textStyleColor:{type:String,default:"#ffffff"},textStyleBgcolor:{type:String,default:"transparent"},w_h:{type:Number,default:2},skipHiddenItemLayout:{type:Boolean,default:!1},displayMultipleItems:{type:Number,default:1},nextMargin:{type:String,default:"0px"},previousMargin:{type:String,default:"0px"},vertical:{type:Boolean,default:!1},circular:{type:Boolean,default:!0},duration:{type:Number,default:400},interval:{type:Number,default:2500},current:{type:Number,default:0},autoplay:{type:Boolean,default:!0},indicatorColor:{type:String,default:"#CCCCCC"},indicatorActiveColor:{type:String,default:"#ffffff"},indicatorDots:{type:Boolean,default:!0}},data:function(){return{flag:!0,cardCur:0,swiperHeight:300}},computed:{},methods:{play:function(){this.flag=!1},pause:function(){this.flag=!0},clickItem:function(t){this.swiperList.length>0&&this.$emit("clickItem",this.swiperList[t])},change:function(t){this.$emit("change",t)},animationfinish:function(t){this.cardCur=t.detail.current,this.$emit("animationfinish",t)}}};e.default=i}).call(this,i("543d")["default"])},"94f9":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},aa56:function(t,e,i){"use strict";i.r(e);var n=i("94f9"),a=i("16d3");for(var u in a)"default"!==u&&function(t){i.d(e,t,function(){return a[t]})}(u);i("0776");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/bw-swiper/bw-swiper-create-component',
    {
        'wxcomponents/bw-swiper/bw-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("aa56"))
        })
    },
    [['wxcomponents/bw-swiper/bw-swiper-create-component']]
]);                
