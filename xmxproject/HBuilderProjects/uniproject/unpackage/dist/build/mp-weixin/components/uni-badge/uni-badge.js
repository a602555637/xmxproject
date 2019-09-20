(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"2cf0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var t=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&t.push("uni-badge-inverted"),t.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};e.default=u},"4c22":function(t,e,n){"use strict";var u=n("939d"),i=n.n(u);i.a},"57c6":function(t,e,n){"use strict";n.r(e);var u=n("cb8b"),i=n("791a");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("4c22");var r=n("2877"),c=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},"791a":function(t,e,n){"use strict";n.r(e);var u=n("2cf0"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=i.a},"939d":function(t,e,n){},cb8b:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("57c6"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);                
