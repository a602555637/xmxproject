(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/onsiterepair/onsiterepair"],{"0c7b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("5090"));function r(t){return t&&t.__esModule?t:{default:t}}var o=function(){return n.e("components/uni-list-c/uni-list").then(n.bind(null,"4dc8"))},u=function(){return n.e("components/uni-list-item-c/uni-list-item").then(n.bind(null,"685e"))},a=function(){return Promise.all([n.e("common/vendor"),n.e("components/rattenking-dtpicker/rattenking-dtpicker")]).then(n.bind(null,"e08c"))},c=function(){return n.e("wxcomponents/xlist/xlist").then(n.bind(null,"b799"))},s=function(){return n.e("wxcomponents/xlist/xlist-input").then(n.bind(null,"f199"))},l=function(){return n.e("components/uni-number-box/uni-number-box").then(n.bind(null,"d5c3"))},d={data:function(){return{province:"",city:"",district:"",township:"",amapPlugin:null,key:"f97ec3f47e09d39567de678870baa690",isChange:!0,currentMinutes:10,currentHour:10,currentDate:12,dateItem:[["日期","01","02","03","04","05","06","07","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],["小时","08","09",10,11,12,13,14,15,16,17,18,19,20],["分钟",10,20,30,40,50]],kiloValue:"1",isConfirm:!1,kiloPrice:"5",isAgreement:!0,totalPrice:9827,repairList:[{title:"屏幕损坏",price:"￥499"},{title:"电池不续航",price:"￥499"}]}},components:{uniList:o,uniListItem:u,rattenkingDtpicker:a,xlist:c,xlistInput:s,uniNumberBox:l},methods:{onOrderDetail:function(){this.isAgreement&&t.navigateTo({url:"../orderdetail/orderdetail"})},onConfirm:function(){this.isConfirm=!this.isConfirm},onNext:function(){this.isConfirm&&t.navigateTo({url:"../bevip/bevip"})},onOrder:function(){this.isConfirm&&t.navigateTo({url:"../orderdetail/orderdetail"})},onNumber:function(t){this.kiloValue=t,this.onPrice(t)},onPrice:function(t){this.kiloPrice=5*t},bindPickerChange:function(t){console.log(t.detail.value);var e=t.detail.value;if(0==e[0])return this.currentDate;var n=this.dateItem[0];if(this.currentDate=n[e[0]],0==e[1])return this.currentHour;var i=this.dateItem[1];if(this.currentHour=i[e[1]],0==e[2])return this.currentMinutes;var r=this.dateItem[2];this.currentMinutes=r[e[2]]},getDate:function(){var t=new Date,e=t.getDate(),n=t.getHours(),i=t.getMinutes();this.currentDate=e,this.currentHour=n,this.currentMinutes=i},onDateItem:function(){var t=this.dateItem[0].splice(0,1)+","+this.dateItem[0].splice(this.currentDate-2,29);this.dateItem[0]=t.split(",")},onCancel:function(){this.getDate()},getRegeo:function(){var e=this;t.showLoading({title:"获取信息中"}),this.amapPlugin.getRegeo({success:function(n){console.log(n[0].regeocodeData.addressComponent),e.province=n[0].regeocodeData.addressComponent.province,e.city=n[0].regeocodeData.addressComponent.city,e.district=n[0].regeocodeData.addressComponent.district,e.township=n[0].regeocodeData.addressComponent.township,t.hideLoading()}})},onGetLocation:function(){}},onLoad:function(){this.onNumber(),this.getDate(),this.onDateItem(),this.amapPlugin=new i.default.AMapWX({key:this.key}),this.getRegeo()}};e.default=d}).call(this,n("543d")["default"])},1987:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"5cd7":function(t,e,n){"use strict";var i=n("919e"),r=n.n(i);r.a},"5e03":function(t,e,n){"use strict";n.r(e);var i=n("1987"),r=n("6cd5");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("5cd7");var u=n("2877"),a=Object(u["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},"6cd5":function(t,e,n){"use strict";n.r(e);var i=n("0c7b"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},"919e":function(t,e,n){}},[["2e59","common/runtime","common/vendor"]]]);