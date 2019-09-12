(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/testype/testype"],{"318b":function(e,t,n){},"396e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"testype",data:function(){return{phoneType:"正在检测...",smodel:""}},created:function(){var t=this;e.getSystemInfo({success:function(e){var n=e.model,o=n.indexOf("(");o<0?(o=n.indexOf("<"),console.log(o),n=n.substring(0,o),t.phoneType=n):(console.log(o),n=n.substring(0,o),t.phoneType=n),console.log(e),t.smodel=e.model}})},methods:{onNext:function(){e.navigateTo({url:"../../pages/selectmodel/selectmodel"})},bindRepair:function(){e.navigateTo({url:"../../pages/selectmodel/selectmodel?model="+this.smodel})}}};t.default=n}).call(this,n("543d")["default"])},"434b":function(e,t,n){"use strict";n.r(t);var o=n("8d11"),u=n("5497");for(var l in u)"default"!==l&&function(e){n.d(t,e,function(){return u[e]})}(l);n("472a");var s=n("2877"),a=Object(s["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},"472a":function(e,t,n){"use strict";var o=n("318b"),u=n.n(o);u.a},5497:function(e,t,n){"use strict";n.r(t);var o=n("396e"),u=n.n(o);for(var l in o)"default"!==l&&function(e){n.d(t,e,function(){return o[e]})}(l);t["default"]=u.a},"8d11":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/testype/testype-create-component',
    {
        'wxcomponents/testype/testype-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("434b"))
        })
    },
    [['wxcomponents/testype/testype-create-component']]
]);                
