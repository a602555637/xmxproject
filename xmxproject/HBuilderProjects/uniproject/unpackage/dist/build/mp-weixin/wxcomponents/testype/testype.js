(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/testype/testype"],{"0ee8":function(e,t,n){"use strict";var u=n("2005"),a=n.n(u);a.a},2005:function(e,t,n){},5043:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},"76f2":function(e,t,n){"use strict";n.r(t);var u=n("5043"),a=n("aebe");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("0ee8");var c=n("2877"),r=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},"8b45":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"testype",data:function(){return{phoneType:"正在检测..."}},created:function(){var t=this;e.getSystemInfo({success:function(e){t.phoneType=e.model}})},onNext:function(){e.navigateTo({url:"../../pages/selectmodel/selectmodel"})}};t.default=n}).call(this,n("543d")["default"])},aebe:function(e,t,n){"use strict";n.r(t);var u=n("8b45"),a=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/testype/testype-create-component',
    {
        'wxcomponents/testype/testype-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("76f2"))
        })
    },
    [['wxcomponents/testype/testype-create-component']]
]);                
