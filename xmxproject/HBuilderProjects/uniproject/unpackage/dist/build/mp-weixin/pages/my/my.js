(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"0f6f":function(n,t,e){"use strict";var i=e("77fe"),o=e.n(i);o.a},"5efb":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},"77fe":function(n,t,e){},"821e":function(n,t,e){"use strict";e.r(t);var i=e("5efb"),o=e("e306");for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e("0f6f");var a=e("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},e306:function(n,t,e){"use strict";e.r(t);var i=e("fb02"),o=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t["default"]=o.a},e463:function(n,t,e){"use strict";(function(n){e("cc51"),e("921b");i(e("66fd"));var t=i(e("821e"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},fb02:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"c04a"))},o=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"cb48"))},u={data:function(){return{waitTime:"",avatarUrl:"",name:"",isVip:"2",superiorId:"",openId:""}},onShow:function(){var t=this;n.getSetting({success:function(n){n.authSetting["scope.userInfo"]&&t.getUserInfo()}}),n.getStorage({key:"openId",success:function(n){t.openId=n.data}})},onLoad:function(){},methods:{getUserInfo:function(){var t=this;n.getUserInfo({success:function(n){t.avatarUrl=n.userInfo.avatarUrl,t.name=n.userInfo.nickName}})},onBeVip:function(){n.navigateTo({url:"../bevip/bevip",success:function(n){console.log("success")}})},onOrderList:function(){n.navigateTo({url:"../orderlist/orderlist"})},onMyWallet:function(){n.navigateTo({url:"../mywallet/mywallet"})},onAddressList:function(){n.navigateTo({url:"../addresslist/addresslist"})},onBusinessIn:function(){n.navigateTo({url:"business-in"})},onFriends:function(){n.navigateTo({url:"my-friends"})},onCards:function(){n.navigateTo({url:"cards"})},onlineKf:function(){n.navigateTo({url:"online-kf"})}},components:{uniList:i,uniItem:o}};t.default=u}).call(this,e("543d")["default"])}},[["e463","common/runtime","common/vendor"]]]);