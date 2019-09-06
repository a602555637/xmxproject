(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/testype/testype"],{"0ee8":function(e,t,n){"use strict";var o=n("2005"),u=n.n(o);u.a},2005:function(e,t,n){},"25a2":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u})},"76f2":function(e,t,n){"use strict";n.r(t);var o=n("25a2"),u=n("aebe");for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);n("0ee8");var l=n("2877"),s=Object(l["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},"8b45":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"testype",data:function(){return{phoneType:"正在检测...",smodel:""}},created:function(){var t=this;e.getSystemInfo({success:function(e){var n=e.model,o=n.indexOf("(");o<0?(o=n.indexOf("<"),console.log(o),n=n.substring(0,o),t.phoneType=n):(console.log(o),n=n.substring(0,o),t.phoneType=n),console.log(e),t.smodel=e.model}})},methods:{onNext:function(){e.navigateTo({url:"../../pages/selectmodel/selectmodel"})},bindRepair:function(){e.navigateTo({url:"../../pages/selectmodel/selectmodel?model="+this.smodel})}}};t.default=n}).call(this,n("543d")["default"])},aebe:function(e,t,n){"use strict";n.r(t);var o=n("8b45"),u=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/testype/testype-create-component',
    {
        'wxcomponents/testype/testype-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("76f2"))
        })
    },
    [['wxcomponents/testype/testype-create-component']]
]);                
