(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/prize/prize"],{"0c34":function(e,t,n){"use strict";n.r(t);var a=n("5165"),i=n("a40a");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("9e13");var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"c9d595b6",null);t["default"]=u.exports},3610:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{openId:"",awardIndex:0,awardsConfig:{chance:!0,lists:[{id:0,type:0,name:"抵用券20元",amount:"1.00",scale:"0.60"},{id:1,type:1,name:"有线耳机",amount:"1.00",scale:"0.60"},{id:2,type:2,name:"3折优惠券",amount:"1.00",scale:"0.60"},{id:3,mold:1,type:3,name:"免费贴膜一次",amount:2,scale:"0.50"},{id:4,mold:1,type:4,name:"抵用券10元",amount:2,scale:"0.50"},{id:5,mold:1,type:5,name:"平板电脑",amount:2,scale:"0.50"},{id:6,type:6,name:"智能手机",amount:"1.00",scale:"0.60"},{id:7,type:7,name:"蓝牙耳机",amount:"1.00",scale:"0.60"},{id:8,type:8,name:"购机券100元",amount:"1.00",scale:"0.60"},{id:9,mold:1,type:9,name:"充电宝",amount:2,scale:"0.50"},{id:10,mold:1,type:10,name:"5折优惠券",amount:2,scale:"0.50"},{id:11,mold:1,type:11,name:"无线充电器",amount:2,scale:"0.50"},{id:12,mold:1,type:12,name:"1折优惠券",amount:2,scale:"0.50"},{id:13,mold:1,type:13,name:"车载支架",amount:2,scale:"0.50"},{id:14,mold:1,type:14,name:"购机券200元",amount:2,scale:"0.50"},{id:15,mold:1,type:15,name:"迷你自拍杆",amount:2,scale:"0.50"}]},awardsList:[],animationData:{},btnDisabled:"",thanksarr:[],chishu:100,mold:1,myPrizelist:[]}},onLoad:function(){var t=this;this.requestFun(),e.getStorage({key:"openId",success:function(e){t.openId=e.data,t.isVip()}}),this.initdata(this)},methods:{requestFun:function(){var t=this;e.request({url:"https://www.finetwm.com/xmRepair/common/luckyWheel",method:"GET",success:function(e){var n=e.data.data.id;t.awardIndex=2==n?2:3==n?4:4==n?8:5==n?10:6==n?12:7==n?14:0},fail:function(e){console.log(e)}})},getmyPrize:function(){var e=this.awardIndex,t=this.awardsList[e];console.log(t);t.award},initdata:function(e){e.awardsConfig.lists.length;e.awardsConfig.lists.forEach(function(e,t){e.index=t}),e.drawAwardRoundel()},drawAwardRoundel:function(){for(var e=this.awardsConfig.lists,t=[],n=1/e.length*360,a=0;a<e.length;a++)t.push({turn:a*n+"deg",lineTurn:a*n+n/2+"deg",award:e[a].name,type:e[a].type,id:e[a].type});this.btnDisabled=this.chishu?"":"disabled",this.awardsList=t},playReward:function(){var t=this;if(0!=this.chishu){var n=this.awardIndex,a=t.awardsConfig.lists,i=4,o=4e3;t.runDeg=t.runDeg||0;t.runDeg;t.runDeg=t.runDeg+(360-t.runDeg%360)+(360*i-n*(360/a.length))+1;var s=e.createAnimation({duration:o,timingFunction:"ease"});s.rotate(t.runDeg).step(),t.animationData=s.export(),t.btnDisabled="disabled";var u=t.awardsConfig;u.lists[n].type;t.chishu=t.chishu-1,setTimeout(function(){e.showModal({title:"恭喜",content:"获得"+u.lists[n].name,showCancel:!1,success:function(){}}),t.btnDisabled=""}.bind(t),o)}else e.showToast({title:"抽奖次数已经用完",icon:"none"})},isVip:function(){e.request({url:"https://www.finetwm.com/xmRepair/userInfo/isvip",method:"GET",header:{"content-Type":"application/x-www-form-urlencoded"},data:{openid:this.openId,superiorId:""},success:function(e){console.log(e)},fail:function(e){console.log(e)}})}}};t.default=n}).call(this,n("543d")["default"])},5165:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},8939:function(e,t,n){},"9e13":function(e,t,n){"use strict";var a=n("8939"),i=n.n(a);i.a},a40a:function(e,t,n){"use strict";n.r(t);var a=n("3610"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},b953:function(e,t,n){"use strict";(function(e){n("cc51"),n("921b");a(n("66fd"));var t=a(n("0c34"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["b953","common/runtime","common/vendor"]]]);