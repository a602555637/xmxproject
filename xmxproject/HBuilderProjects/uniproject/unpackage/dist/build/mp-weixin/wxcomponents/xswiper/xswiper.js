(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/xswiper/xswiper"],{"4ba5":function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},e=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return e})},7044:function(t,n,a){"use strict";a.r(n);var i=a("b1d8"),e=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(n,t,function(){return i[t]})}(r);n["default"]=e.a},"796a":function(t,n,a){},"8b61":function(t,n,a){"use strict";a.r(n);var i=a("4ba5"),e=a("7044");for(var r in e)"default"!==r&&function(t){a.d(n,t,function(){return e[t]})}(r);a("b9b6");var o=a("2877"),s=Object(o["a"])(e["default"],i["a"],i["b"],!1,null,null,null);n["default"]=s.exports},b1d8:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"xswiper",data:function(){return{interval:2e3,screenHeight:0,animationData:{0:{},1:{},2:{},3:{}},title:"0",indicatorColor:"#D1D1D1",indicatorActiveColor:"#09BA51",indicatorDots:!0,autoplay:!0,previousMargin:t.upx2px(50)+"px",nextMargin:t.upx2px(50)+"px",circular:!0,zoomParam:1.1,swiperCurrentIndex:0,data:[],max:0,imgs:["../../static/banner/banner1@2x.png","../../static/banner/banner2@2x.png","../../static/banner/banner3@2x.png","../../static/banner/banner4@2x.png"]}},created:function(){this.animation=t.createAnimation(),this.animation.scale(this.zoomParam).step(),this.animationData[0]=this.animation.export()},methods:{change:function(t){for(var n in this.swiperCurrentIndex=t.detail.current,this.title=t.detail.currentItemId,this.animationData)t.detail.currentItemId==n?(this.animation.scale(this.zoomParam).step(),this.animationData[n]=this.animation.export()):(this.animation.scale(1).step(),this.animationData[n]=this.animation.export())}}};n.default=a}).call(this,a("543d")["default"])},b9b6:function(t,n,a){"use strict";var i=a("796a"),e=a.n(i);e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/xswiper/xswiper-create-component',
    {
        'wxcomponents/xswiper/xswiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8b61"))
        })
    },
    [['wxcomponents/xswiper/xswiper-create-component']]
]);                
