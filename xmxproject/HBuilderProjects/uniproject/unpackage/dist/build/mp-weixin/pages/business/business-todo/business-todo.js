(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/business/business-todo/business-todo"],{ae40:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("wxcomponents/business/business-order-list").then(n.bind(null,"a1d6"))},i={onLoad:function(e){var n=e.id;1==n?(this.onStatus(),t.setNavigationBarTitle({title:"待处理"})):2==n?t.setNavigationBarTitle({title:"维修中"}):3==n?t.setNavigationBarTitle({title:"已完成"}):4==n?t.setNavigationBarTitle({title:"已取消"}):t.setNavigationBarTitle({title:"总收益"})},data:function(){return{orderStatusId:"",isButton:"",content:[{brand:"苹果",model:"iPhone 7",color:"玫瑰金",repairType:"到店维修",price:"400",status:"待处理"},{brand:"VIVO",model:"m30",color:"银金",repairType:"到店维修",price:"700",status:"待处理"}]}},methods:{onNext:function(){t.navigateTo({url:"../business-orderstatus/business-orderstatus"})},onStatus:function(){console.log(this.content);for(var t=0;t<this.content.length;t++){var e=this.content[t].status;console.log(e),"待处理"==e&&(this.isButton="submit")}}},components:{businessOrderList:o}};e.default=i}).call(this,n("543d")["default"])},c81e:function(t,e,n){"use strict";n.r(e);var o=n("ec3c"),i=n("caae");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);var a=n("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},caae:function(t,e,n){"use strict";n.r(e);var o=n("ae40"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},ec3c:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}},[["13ab","common/runtime","common/vendor"]]]);