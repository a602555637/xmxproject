(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"912e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var e=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&e.push("uni-badge-inverted"),e.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};t.default=u},"9e20":function(e,t,n){"use strict";n.r(t);var u=n("912e"),i=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=i.a},"9fe0":function(e,t,n){},ae26:function(e,t,n){"use strict";n.r(t);var u=n("b708"),i=n("9e20");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("fff8");var r=n("2877"),f=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},b708:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i})},fff8:function(e,t,n){"use strict";var u=n("9fe0"),i=n.n(u);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ae26"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);                
