(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/sign"],{"1b3e":function(n,t,e){"use strict";e.r(t);var o=e("b1cd"),c=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=c.a},"20b2":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return c})},"3b64":function(n,t,e){"use strict";e.r(t);var o=e("20b2"),c=e("1b3e");for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);e("99c9");var u=e("2877"),s=Object(u["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},5601:function(n,t,e){"use strict";(function(n){e("cc51"),e("921b");o(e("66fd"));var t=o(e("3b64"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"99c9":function(n,t,e){"use strict";var o=e("bc32"),c=e.n(o);c.a},b1cd:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=null,o=[],c=0,a=0;n.getSystemInfo({success:function(n){c=n.windowWidth,a=9*c/16}});var u={data:function(){return{signImage:""}},methods:{start:function(n){console.log(n);var t={x:n.touches[0].x,y:n.touches[0].y};o.push(t)},move:function(n){var t={x:n.touches[0].x,y:n.touches[0].y};o.push(t),o.length>=2&&this.draw(o)},end:function(n){console.log("触摸结束"+n);for(var t=0;t<o.length;t++)o.pop()},cancel:function(n){console.log("触摸取消"+n)},tap:function(n){console.log("长按手势"+n)},error:function(n){console.log("画布触摸错误"+n)},draw:function(n){var t=n[0],o=n[1];n.shift(),e.moveTo(t.x,t.y),e.lineTo(o.x,o.y),e.stroke(),e.draw(!0)},clearClick:function(){e.clearRect(0,0,c,a),e.draw(!0)},saveClick:function(){var t=this;n.canvasToTempFilePath({canvasId:"firstCanvas",success:function(e){console.log(e.tempFilePath),t.signImage=e.tempFilePath,n.setStorage({key:"signUrl",data:t.signImage,success:function(t){n.showToast({title:"保存成功",success:function(t){setTimeout(function(){n.navigateTo({url:"contract"})},1e3)}})}})}})}},onLoad:function(t){e=n.createCanvasContext("firstCanvas"),e.setStrokeStyle("#000"),e.setLineWidth(5),e.setLineCap("round"),e.setLineJoin("round")}};t.default=u}).call(this,e("543d")["default"])},bc32:function(n,t,e){}},[["5601","common/runtime","common/vendor"]]]);