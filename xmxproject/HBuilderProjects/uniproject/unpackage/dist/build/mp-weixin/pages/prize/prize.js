(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/prize/prize"],{"0c34":function(n,t,e){"use strict";e.r(t);var a=e("3f28"),i=e("a40a");for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);e("ee83");var s=e("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"738baa76",null);t["default"]=u.exports},3610:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{awardIndex:"",awardsConfig:{chance:!0,lists:[{id:0,type:0,name:"抵用券20元",amount:"1.00",scale:"0.60"},{id:1,type:1,name:"有线耳机",amount:"1.00",scale:"0.60"},{id:2,type:2,name:"3折优惠券",amount:"1.00",scale:"0.60"},{id:3,mold:1,type:3,name:"免费贴膜一次",amount:2,scale:"0.50"},{id:4,mold:1,type:4,name:"抵用券10元",amount:2,scale:"0.50"},{id:5,mold:1,type:5,name:"平板电脑",amount:2,scale:"0.50"},{id:6,type:6,name:"智能手机",amount:"1.00",scale:"0.60"},{id:7,type:7,name:"蓝牙耳机",amount:"1.00",scale:"0.60"},{id:8,type:8,name:"购机券100元",amount:"1.00",scale:"0.60"},{id:9,mold:1,type:9,name:"充电宝",amount:2,scale:"0.50"},{id:10,mold:1,type:10,name:"5折优惠券",amount:2,scale:"0.50"},{id:11,mold:1,type:11,name:"无线充电器",amount:2,scale:"0.50"},{id:12,mold:1,type:12,name:"1折优惠券",amount:2,scale:"0.50"},{id:13,mold:1,type:13,name:"车载支架",amount:2,scale:"0.50"},{id:14,mold:1,type:14,name:"购机券200元",amount:2,scale:"0.50"},{id:15,mold:1,type:15,name:"迷你自拍杆",amount:2,scale:"0.50"}]},awardsList:[],animationData:{},btnDisabled:"",thanksarr:[],chishu:1,mold:1,myPrizelist:[]}},onLoad:function(){this.initdata(this)},methods:{requestFun:function(t,e){var a=new Promise(function(a,i){n.request({url:"https://www.finetwm.com/xmRepair/"+t,method:"POST",data:e,success:function(n){return a(n)},fail:function(n){return i(n)}})});a.then(function(n){return console.log(n)},function(n){return console.log(n)})},getmyPrize:function(){var t=this.awardIndex,e=this.awardsList[t];console.log(e);var a=e.award;n.navigateTo({url:"my-prize?id="+t+"&award="+a})},initdata:function(n){n.awardsConfig.lists.length;n.awardsConfig.lists.forEach(function(n,t){n.index=t}),n.drawAwardRoundel()},drawAwardRoundel:function(){for(var n=this.awardsConfig.lists,t=[],e=1/n.length*360,a=0;a<n.length;a++)t.push({turn:a*e+"deg",lineTurn:a*e+e/2+"deg",award:n[a].name,type:n[a].type,id:n[a].type});this.btnDisabled=this.chishu?"":"disabled",this.awardsList=t},playReward:function(){var t=this;if(0!=this.chishu){var e=11;this.awardIndex=e;var a=t.awardsConfig.lists,i=4,o=4e3;t.runDeg=t.runDeg||0;t.runDeg;t.runDeg=t.runDeg+(360-t.runDeg%360)+(360*i-e*(360/a.length))+1;var s=n.createAnimation({duration:o,timingFunction:"ease"});s.rotate(t.runDeg).step(),t.animationData=s.export(),t.btnDisabled="disabled";var u=t.awardsConfig,r=u.lists[e].type;t.chishu=t.chishu-1,0!=r?setTimeout(function(){n.showModal({title:"恭喜",content:"获得"+u.lists[e].name,showCancel:!1,success:function(){}}),t.btnDisabled=""}.bind(t),o):setTimeout(function(){n.showModal({title:"很遗憾",content:"没中奖 "+u.lists[e].name,showCancel:!1,success:function(){}}),t.btnDisabled=""}.bind(t),o)}else n.showToast({title:"抽奖次数已经用完",icon:"none"})}}};t.default=e}).call(this,e("543d")["default"])},"3f28":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return i})},a40a:function(n,t,e){"use strict";e.r(t);var a=e("3610"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=i.a},b953:function(n,t,e){"use strict";(function(n){e("cc51"),e("921b");a(e("66fd"));var t=a(e("0c34"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},d280:function(n,t,e){},ee83:function(n,t,e){"use strict";var a=e("d280"),i=e.n(a);i.a}},[["b953","common/runtime","common/vendor"]]]);