(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bevip/bevip"],{"435c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"50ff":function(t,e,i){"use strict";i.r(e);var n=i("b8e2"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"59fe":function(t,e,i){"use strict";var n=i("f6c6"),a=i.n(n);a.a},"89a1":function(t,e,i){"use strict";i.r(e);var n=i("435c"),a=i("50ff");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("59fe");var u=i("2877"),s=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},b8e2:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{selectedId:0,topTitle:[{title:"终身会员",imgUrl:"../../static/vip/99@2x.png"},{title:"普通会员",imgUrl:"../../static/vip/9.9@2x.png"}],isShow:!1,aldate:32,isVip:!1,TabCur:0,tabList:[{title:"享免费更换外屏",yearTimes:"6次"},{title:"享免费更换内屏",yearTimes:"1次"},{title:"享免费更换主板、维修主板",yearTimes:"各1次"},{title:"享免费更换电源、维修充电IC",yearTimes:"各1次"},{title:"享免费更换前、后置摄像头、更换摄像头玻璃",yearTimes:"各1次"},{title:"享免费更换WIFI模块、维修WIFI线路、更换数据线尾插",yearTimes:"各1次"},{title:"享免费更换扬声器、麦克风、听筒、震动马达",yearTimes:"各2次"},{title:"享免费更换开关排线、所有按键",yearTimes:"各1次"},{title:"享免费更换手机后壳",yearTimes:"各1次"},{title:"享免费更换、维修重力感应、指南针",yearTimes:"各1次"}]}},methods:{tabChange:function(t){this.TabCur=t},onPay:function(){t.navigateTo({url:"vip-type",success:function(t){console.log("success")}})},onChangeStatus:function(){this.isShow=!this.isShow},onSelected:function(t){this.selectedId=t.currentTarget.id},bindChange:function(t){this.selectedId=t.detail.current}}};e.default=i}).call(this,i("543d")["default"])},f6c6:function(t,e,i){}},[["9f84","common/runtime","common/vendor"]]]);