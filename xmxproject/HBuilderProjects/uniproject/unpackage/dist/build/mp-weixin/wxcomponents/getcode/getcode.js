(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/getcode/getcode"],{"0b6e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"getcode",props:{timer:String,title:String},data:function(){return{placeholder:"请输入验证码",text:"获取验证码",s:"",id:1,lifeTime:0,setTime:null}},created:function(t){var e=this.timer;if(null==e)return console.log("时间格式错误1"),!1;var n=parseInt(e);if(n<0||n>60)return console.log("时间格式错误2"),!1;this.lifeTime=60,this.countDown(this),this.setInterValFunc(this)},beforeDestroy:function(){clearInterval(this.setTime)},methods:{setInterValFunc:function(t){this.setTime=setInterval(function(){t.countDown(t)},1e3)},click:function(){this.text="重新获取",this.s=60},countDown:function(t){"重新获取"==t.text&&(t.s>0?t.s-=1:0==t.s&&(t.s=60,t.text="获取验证码"))}}};e.default=i},"14ab":function(t,e,n){"use strict";var i=n("feb5"),r=n.n(i);r.a},1841:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"6a40":function(t,e,n){"use strict";n.r(e);var i=n("1841"),r=n("c613");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("14ab");var u=n("2877"),c=Object(u["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},c613:function(t,e,n){"use strict";n.r(e);var i=n("0b6e"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},feb5:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/getcode/getcode-create-component',
    {
        'wxcomponents/getcode/getcode-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6a40"))
        })
    },
    [['wxcomponents/getcode/getcode-create-component']]
]);                
