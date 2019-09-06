(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wuc-tab-c/wuc-tabc"],{1753:function(t,n,e){"use strict";var u=e("7cfb"),r=e.n(u);r.a},"6a69":function(t,n,e){"use strict";e.r(n);var u=e("80d4"),r=e("909b");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("1753");var c=e("2877"),f=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports},"7cfb":function(t,n,e){},"80d4":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},8119:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"wuc-tab",data:function(){return{}},props:{tabList:{type:Array,default:function(){return[]}},tabCur:{type:Number,default:function(){return 0}},tabClass:{type:String,default:function(){return""}},tabStyle:{type:String,default:function(){return""}},textFlex:{type:Boolean,default:function(){return!1}},selectClass:{type:String,default:function(){return"text-blue"}}},methods:{tabSelect:function(t,n){if(this.currentTab===t)return!1;this.$emit("update:tabCur",t),this.$emit("change",t)}},computed:{scrollLeft:function(){return 60*(this.tabCur-1)}}};n.default=u},"909b":function(t,n,e){"use strict";e.r(n);var u=e("8119"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wuc-tab-c/wuc-tabc-create-component',
    {
        'components/wuc-tab-c/wuc-tabc-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6a69"))
        })
    },
    [['components/wuc-tab-c/wuc-tabc-create-component']]
]);                
