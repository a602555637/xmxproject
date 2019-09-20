(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/index/quick-select"],{"09ed":function(t,e,n){"use strict";n.r(e);var i=n("7e50"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=a.a},"1c53":function(t,e,n){},"7e50":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"quickSelect",data:function(){return{repairList:[{title:"屏幕问题",imgUrl:"../../static/index/pmwt@2x.png"},{title:"电池问题",imgUrl:"../../static/index/dcwt@2x.png"},{title:"信号问题",imgUrl:"../../static/index/xhwt@2x.png"},{title:"拍摄问题",imgUrl:"../../static/index/pswt@2x.png"},{title:"声音问题",imgUrl:"../../static/index/sywt@2x.png"}]}},methods:{onRepair:function(e){console.log(e),t.navigateTo({url:"../../pages/faults/faults?id="+e,success:function(n){t.setStorage({key:"sid",data:e})}})}}};e.default=n}).call(this,n("543d")["default"])},9365:function(t,e,n){"use strict";var i=n("1c53"),a=n.n(i);a.a},a2a9:function(t,e,n){"use strict";n.r(e);var i=n("f7e6"),a=n("09ed");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("9365");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},f7e6:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/index/quick-select-create-component',
    {
        'wxcomponents/index/quick-select-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a2a9"))
        })
    },
    [['wxcomponents/index/quick-select-create-component']]
]);                
