(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wuc-tab-c/wuc-tabc"],{"4c1b":function(t,n,e){"use strict";e.r(n);var u=e("ffca"),r=e("dcf0");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("5d04");var c=e("2877"),f=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports},"5d04":function(t,n,e){"use strict";var u=e("b1ea"),r=e.n(u);r.a},b1ea:function(t,n,e){},dcf0:function(t,n,e){"use strict";e.r(n);var u=e("fc21"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},fc21:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"wuc-tab",data:function(){return{}},props:{tabList:{type:Array,default:function(){return[]}},tabCur:{type:Number,default:function(){return 0}},tabClass:{type:String,default:function(){return""}},tabStyle:{type:String,default:function(){return""}},textFlex:{type:Boolean,default:function(){return!1}},selectClass:{type:String,default:function(){return"text-blue"}}},methods:{tabSelect:function(t,n){if(this.currentTab===t)return!1;this.$emit("update:tabCur",t),this.$emit("change",t)}},computed:{scrollLeft:function(){return 60*(this.tabCur-1)}}};n.default=u},ffca:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wuc-tab-c/wuc-tabc-create-component',
    {
        'components/wuc-tab-c/wuc-tabc-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4c1b"))
        })
    },
    [['components/wuc-tab-c/wuc-tabc-create-component']]
]);                
