(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/orderdetail/orderdetail"],{"134d":function(n,e,t){"use strict";t.r(e);var o=t("a1aa"),i=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e["default"]=i.a},"1d40":function(n,e,t){"use strict";t.r(e);var o=t("6572"),i=t("134d");for(var u in i)"default"!==u&&function(n){t.d(e,n,function(){return i[n]})}(u);t("907f");var r=t("2877"),a=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},6572:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},i=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return i})},"6d1c":function(n,e,t){},"907f":function(n,e,t){"use strict";var o=t("6d1c"),i=t.n(o);i.a},a1aa:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"86a2"))},i={data:function(){return{title:"map",latitude:39.909,longitude:116.39742,isSelectedId:0,canelInfo:[{info:"信息填写错误"},{info:"重复下单"},{info:"时间来不及"},{info:"不想修了"},{info:"其他原因"}],orderContent:{num:"1545545489646",orderTime:"2019.08.12 12:34:32",type:"上门维修",onTime:"8月12日 15：30",address:"郫都区望丛中路13号7栋203号"},totalPrice:"￥245",repaireList:[{title:"屏幕损坏",price:"￥499"},{title:"电池不续航",price:"￥599"}],phoneType:"苹果 iPhone7 玫瑰金"}},methods:{openPopup:function(){this.$refs.popup.open()},closePopup:function(){this.$refs.popup.close()},onCancel:function(){n.showToast({title:"取消成功"}),n.navigateTo({url:"order-cancel"})},onSelectedId:function(n){this.isSelectedId=n.currentTarget.id}},components:{uniPopup:o}};e.default=i}).call(this,t("543d")["default"])}},[["0ef9","common/runtime","common/vendor"]]]);