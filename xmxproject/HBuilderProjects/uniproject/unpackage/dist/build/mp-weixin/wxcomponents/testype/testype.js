(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/testype/testype"],{"434b":function(e,t,a){"use strict";a.r(t);var s=a("ebb5"),n=a("5497");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("472a");var r=a("2877"),c=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,null,null);t["default"]=c.exports},"472a":function(e,t,a){"use strict";var s=a("f6f3"),n=a.n(s);n.a},5497:function(e,t,a){"use strict";a.r(t);var s=a("56b6"),n=a.n(s);for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);t["default"]=n.a},"56b6":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"testype",data:function(){return{phoneType:"正在检测...",smodel:""}},created:function(){var t=this;e.getSystemInfo({success:function(e){var a=e.model,s=a.indexOf("<");if(s>0&&s<15)a=a.substring(0,s),console.log("1"+a+"*"),t.phoneType=a,t.smodel=a,t.setStorage();else{var n=a.indexOf("(");n>0?(a=a.substring(0,n),console.log(a),t.phoneType=a,t.smodel=a,t.setStorage()):(console.log("3"+a),t.phoneType=a,t.smodel=a,t.setStorage())}}})},methods:{onNext:function(){e.navigateTo({url:"../../pages/selectmodel/selectmodel"})},bindRepair:function(){e.navigateTo({url:"../../pages/selectmodel/selectmodel?model="+this.smodel})},setStorage:function(){e.setStorage({key:"model",data:this.smodel}),e.setStorage({key:"phonetype",data:this.smodel})},hwTypeTest:function(e){var t=e.slice(0,3);switch(t){case"SCL":t="荣耀4A";break;case"KIW":t="荣耀5X";break;case"TAG":t="畅玩5S";break;case"TIT":t="畅玩5";break;case"H60":t="荣耀6";break;case"PE ":t="荣耀6 Plus";break;case"PLK":t="荣耀7";break;case"ATH":t="荣耀7i";break;case"KIW":t="荣耀5X";break;case"MT7":t="Mate 7";break;case"P7-":t="畅玩5";break;case"KNT":t="荣耀V8";break;case"FRD":t="荣耀8";break;case"NXT":t="Mate 8";break;case"EDI":t="Note 8";break;case"MHA":t="Mate 9";break;case"ALE":t="P8 青春版";break;case"GRA":t="P8";break;case"NEM":t="荣耀5c";break}}}};t.default=a}).call(this,a("543d")["default"])},ebb5:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return n})},f6f3:function(e,t,a){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/testype/testype-create-component',
    {
        'wxcomponents/testype/testype-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("434b"))
        })
    },
    [['wxcomponents/testype/testype-create-component']]
]);                
