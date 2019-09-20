(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/common/xinput"],{"06c2":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"0751":function(t,n,e){},"0ffe":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"xinput",data:function(){return{inputValue:""}},props:{title:String,placeHolderText:String,xtype:{type:String,default:"text"},xpassword:{type:Boolean,default:!1}},methods:{bindInput:function(t){this.inputValue=t.detail.value,this.$emit("inputValue",{inputValue:this.inputValue})}}};n.default=u},3932:function(t,n,e){"use strict";e.r(n);var u=e("06c2"),a=e("8dbd");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("92f6");var r=e("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"8dbd":function(t,n,e){"use strict";e.r(n);var u=e("0ffe"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a},"92f6":function(t,n,e){"use strict";var u=e("0751"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/common/xinput-create-component',
    {
        'wxcomponents/common/xinput-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3932"))
        })
    },
    [['wxcomponents/common/xinput-create-component']]
]);                
