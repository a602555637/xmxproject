(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/common/xinput"],{"0324":function(t,n,e){"use strict";e.r(n);var u=e("4747"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a},1648:function(t,n,e){"use strict";e.r(n);var u=e("38c2"),a=e("0324");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("a72d");var r=e("2877"),c=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=c.exports},"38c2":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},4747:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"xinput",data:function(){return{inputValue:""}},props:{title:String,placeHolderText:String,xtype:{type:String,default:"text"},xpassword:{type:Boolean,default:!1}},methods:{bindInput:function(t){this.inputValue=t.detail.value,this.$emit("inputValue",{inputValue:this.inputValue})}}};n.default=u},a72d:function(t,n,e){"use strict";var u=e("c15c"),a=e.n(u);a.a},c15c:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/common/xinput-create-component',
    {
        'wxcomponents/common/xinput-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1648"))
        })
    },
    [['wxcomponents/common/xinput-create-component']]
]);                
