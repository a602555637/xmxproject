(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/business-in"],{"142b":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"3ff1":function(e,t,n){"use strict";n.r(t);var i=n("bf9f"),o=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);t["default"]=o.a},"605e":function(e,t,n){},bf9f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(n("5090"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return n.e("components/uni-list-c/uni-list").then(n.bind(null,"4dc8"))},s=function(){return n.e("components/uni-list-item-c/uni-list-item").then(n.bind(null,"685e"))},a=function(){return n.e("wxcomponents/getcode/getcode").then(n.bind(null,"6a40"))},r=function(){return Promise.all([n.e("common/vendor"),n.e("wxcomponents/xlocation/xlocation")]).then(n.bind(null,"4ed7"))},u=n("1ea1"),c={data:function(){var e=new Date,t=e.getTime(),n=u.formatDateTime(t+2e6);return{province:"",city:"",district:"",township:"",timer:n,title:"验证码：",name:"",manager:"",phone:"",getCode:"",area:"",street:"",detail_address:"",businessTypeItem:"个人",repairTypeItem:"上门维修",businessType:["个人","公司"],repairType:["上门维修","到店维修"],index:0}},methods:{onSave:function(){""==this.name?e.showToast({title:"请填写商家名称",icon:"none"}):""==this.manager?e.showToast({title:"请填写负责人",icon:"none"}):""==this.phone?e.showToast({title:"请填写手机号码",icon:"none"}):""==this.getCode?e.showToast({title:"请获取验证码",icon:"none"}):""==this.detail_address?e.showToast({title:"请填写详细地址",icon:"none"}):(this.onPost(),e.showToast({title:"保存成功"}),setTimeout(function(){e.hideToast(),e.navigateTo({url:"upload-photo"})},2e3))},onType:function(e){var t=e.detail.value;this.businessTypeItem=this.businessType[t]},onRepairType:function(e){var t=e.detail.value;this.repairTypeItem=this.repairType[t]},onName:function(e){this.name=e.detail.value},onManager:function(e){this.manager=e.detail.value},onPhone:function(e){this.phone=e.detail.value},onArea:function(e){this.area=e.district,this.street=e.street,this.detail_address=e.detailAddress},bindCode:function(e){console.log(e.codeText),this.getCode=e.codeText},onPost:function(){e.request({url:"https://120.24.180.246/xmRepair/shopInfo/add",method:"POST",data:{name:this.name,manager:this.manager,phone:this.phone,area:this.area,street:this.street,detail_address:this.detail_address,type:this.businessTypeItem,service_mode:this.repairTypeItem,stat:0},success:function(e){console.log("success")}})}},components:{getcode:a,uniList:o,uniListItem:s,xlocation:r}};t.default=c}).call(this,n("543d")["default"])},f16d:function(e,t,n){"use strict";n.r(t);var i=n("142b"),o=n("3ff1");for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);n("f519");var a=n("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},f519:function(e,t,n){"use strict";var i=n("605e"),o=n.n(i);o.a}},[["f033","common/runtime","common/vendor"]]]);