(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/arrival-repair/arrival-repair"],{4302:function(t,e,n){"use strict";var i=n("ce2b"),r=n.n(i);r.a},"4cae":function(t,e,n){"use strict";n.r(e);var i=n("7a43"),r=n("b411");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);n("4302");var o=n("2877"),a=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},"68b9":function(t,e,n){"use strict";(function(t){n("cc51"),n("921b");i(n("66fd"));var e=i(n("4cae"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"7a43":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},a26c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("wxcomponents/xlist/xlist").then(n.bind(null,"1135"))},r=function(){return n.e("wxcomponents/xlist/xlistPrice").then(n.bind(null,"262e"))},s=function(){return n.e("components/uni-list-c/uni-list").then(n.bind(null,"43f3"))},o=function(){return n.e("components/uni-list-item-c/uni-list-item").then(n.bind(null,"02d3"))},a=function(){return n.e("wxcomponents/xlist/xlist-input").then(n.bind(null,"a083"))},c=function(){return Promise.all([n.e("common/vendor"),n.e("wxcomponents/xlocation/xlocation")]).then(n.bind(null,"7d47"))},u=function(){return n.e("wxcomponents/getcode/getcode").then(n.bind(null,"933b"))},d={onShow:function(){t.getStorage({key:"openId",success:function(t){t.data}})},data:function(){return{presentPrice:"",isVip:"2",superiorId:"",scode:"",phoneCode:"",isChange:!0,dateItem:[["日期","01","02","03","04","05","06","07","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],["小时","08","09",10,11,12,13,14,15,16,17,18,19,20],["分钟",10,20,30,40,50]],currentDate:"",currentHour:"",currentMinutes:"",date:"",details:"",district:"",repairList:[],totalPrice:"",openId:"",orderNum:"",orderName:"",sprice:"",faulesTitle:"",colorName:"",model:"",brand:"",rangeText:"郫都区总店",range:["郫都区总店","郫都区一分店","郫都区二分店"],isAddress:!1,isConfirm:!1}},methods:{bindScode:function(t){this.scode=t.scode},bindPhoneCode:function(t){this.phoneCode=t.phoneCode},bindInputName:function(t){this.orderName=t},bindInputNumber:function(t){this.orderNum=t},getDate:function(){var t=new Date,e=t.getDate(),n=t.getHours(),i=t.getMinutes();this.currentDate=e,this.currentHour=n,this.currentMinutes=i;var r=t.toLocaleString("chinese",{hour12:!1});this.dateFmt(r)},bindPickerC:function(t){var e=t.detail.value;if(0==e[0])return this.currentDate;var n=this.dateItem[0];if(this.currentDate=n[e[0]],0==e[1])return this.currentHour;var i=this.dateItem[1];if(this.currentHour=i[e[1]],0==e[2])return this.currentMinutes;var r=this.dateItem[2];this.currentMinutes=r[e[2]],this.dateFmt(this.date)},bindText:function(t){this.details=t.detail.value},bindDistrict:function(t){this.district=t.district+t.township+t.detailAddress},bindPickerChange:function(t){this.rangeText=this.range[t.detail.value]},onConfirm:function(){this.isConfirm=!this.isConfirm},onNext:function(){this.isConfirm&&t.navigateTo({url:"../bevip/bevip"})},onOrder:function(){this.orderName?this.orderNum?this.isConfirm?this.phoneCode!==this.scode?t.showToast({title:"验证码不正确",icon:"none"}):t.request({url:"https://www.finetwm.com/xmRepair/order/saveUserOrder",method:"POST",data:{details:this.details,price:this.totalPrice,userId:this.openId,userName:this.orderName,userPhone:this.orderNum,userAddress:this.district,serviceMode:1,serviceTime:this.date,phone:{brand:this.brand,model:this.model,colour:this.colorName},faults:[{faults:this.repairList[0],price:this.sprice[0]},{faults:this.repairList[1],price:this.sprice[1]}]},success:function(e){t.reLaunch({url:"../orderdetail/orderdetail",success:function(t){console.log("success")}})},fail:function(t){console.log(t)}}):t.showToast({title:"请同意协议",icon:"none"}):t.showToast({title:"请输入手机号码",icon:"none"}):t.showToast({title:"请输入姓名",icon:"none"})},dateFmt:function(t){if(null!==t&&""!=t){var e=new Date(t),n=e.getFullYear(),i=e.getMonth()+1;e.getHours(),e.getMinutes();i<10&&(i="0"+i);var r=e.getDate();r<10&&(r="0"+r);var s=n+"."+i+"."+this.currentDate+" "+this.currentHour+":"+this.currentMinutes;this.date=s}else console.log("fail")}},onLoad:function(){var e=this;this.getDate();var n=new Date,i=n.toLocaleString("chinese",{hour12:!1});this.date=i,t.getStorage({key:"brand",success:function(t){e.brand=t.data}}),t.getStorage({key:"model",success:function(t){e.model=t.data}}),t.getStorage({key:"colorName",success:function(t){e.colorName=t.data}}),t.getStorage({key:"faulesTitle",success:function(t){e.repairList=t.data}}),t.getStorage({key:"sprice",success:function(t){e.sprice=t.data}}),t.getStorage({key:"totalPrice",success:function(t){e.totalPrice=t.data;var n=t.data;if("1"===e.isVip)e.presentPrice=.8*n;else{if("2"!==e.isVip)return;e.presentPrice=.5*n}}})},components:{xlist:i,xlistPrice:r,uniList:s,uniListItem:o,xlistInput:a,xlocation:c,getcode:u}};e.default=d}).call(this,n("543d")["default"])},b411:function(t,e,n){"use strict";n.r(e);var i=n("a26c"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},ce2b:function(t,e,n){}},[["68b9","common/runtime","common/vendor"]]]);