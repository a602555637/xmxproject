(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/index/quick-select"],{"09ed":function(t,n,e){"use strict";e.r(n);var i=e("7e50"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=a.a},"1c53":function(t,n,e){},5587:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"7e50":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"quickSelect",data:function(){return{repairList:[{title:"屏幕问题",imgUrl:"../../static/index/pmwt@2x.png"},{title:"电池问题",imgUrl:"../../static/index/dcwt@2x.png"},{title:"信号问题",imgUrl:"../../static/index/xhwt@2x.png"},{title:"拍摄问题",imgUrl:"../../static/index/pswt@2x.png"},{title:"声音问题",imgUrl:"../../static/index/sywt@2x.png"}]}},methods:{onRepair:function(n){console.log(n),t.navigateTo({url:"../../pages/faults/faults?id="+n,success:function(e){t.setStorage({key:"sid",data:n})}})}}};n.default=e}).call(this,e("543d")["default"])},9365:function(t,n,e){"use strict";var i=e("1c53"),a=e.n(i);a.a},a2a9:function(t,n,e){"use strict";e.r(n);var i=e("5587"),a=e("09ed");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("9365");var c=e("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/index/quick-select-create-component',
    {
        'wxcomponents/index/quick-select-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a2a9"))
        })
    },
    [['wxcomponents/index/quick-select-create-component']]
]);                
