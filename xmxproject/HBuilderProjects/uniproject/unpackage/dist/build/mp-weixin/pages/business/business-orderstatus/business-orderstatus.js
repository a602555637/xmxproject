(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/business/business-orderstatus/business-orderstatus"],{"04c2":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},s=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return s})},"2cb1":function(n,t,e){"use strict";(function(n){e("cc51"),e("921b");i(e("66fd"));var t=i(e("76d4"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"60b7":function(n,t,e){"use strict";e.r(t);var i=e("75c8"),s=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t["default"]=s.a},"75c8":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={onLoad:function(n){console.log(n.id),1==n.id?this.bindRepairing():2==n.id&&(this.isFinished=!1)},data:function(){return{isFinished:!0,isCustom:!1,isRepairing:!1,isAleadyTaken:!1,isOnsite:!1,phoneType:"苹果 iPhone7 玫瑰金",totalPrice:"￥990",repairContent:[{title:"屏幕损坏",price:"￥499"},{title:"电池不续航",price:"￥499"}],content:{}}},methods:{bindVideo:function(){n.navigateTo({url:"../business-finished/business-finished"})},bindAleadyTaken:function(){this.isAleadyTaken=!0},bindRepairing:function(){this.isAleadyTaken=!1,this.isRepairing=!0},bindOncustom:function(){this.isCustom=!0,this.isRepairing=!1},bindRequest:function(t){n.request({url:"https://120.24.180.246/xmRepair/order/findShopOrderByStatus",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{shopId:1,orderStatus1:t},success:function(n){console.log(n.data.data)}})}}};t.default=e}).call(this,e("543d")["default"])},"76d4":function(n,t,e){"use strict";e.r(t);var i=e("04c2"),s=e("60b7");for(var u in s)"default"!==u&&function(n){e.d(t,n,function(){return s[n]})}(u);e("e840");var o=e("2877"),a=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},"7bf0":function(n,t,e){},e840:function(n,t,e){"use strict";var i=e("7bf0"),s=e.n(i);s.a}},[["2cb1","common/runtime","common/vendor"]]]);