(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["wxcomponents/xlocation/xlocation"],{"20ba":function(t,e,i){"use strict";var n=i("d77b"),s=i.n(n);s.a},"62e7":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},6995:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("3e23"));function s(t){return t&&t.__esModule?t:{default:t}}var a={name:"xlocation",props:{isAddress:{type:Boolean,default:!0}},data:function(){return{detailAddress:"",province:"",city:"",district:"",township:"",amapPlugin:null,key:"f97ec3f47e09d39567de678870baa690",address:"",currentProvience:"",currentCity:"",currentDistrict:""}},created:function(){this.amapPlugin=new n.default.AMapWX({key:this.key}),this.getRegeo()},methods:{getRegeo:function(){var e=this;t.showLoading({title:"获取信息中"}),this.amapPlugin.getRegeo({success:function(i){e.province=i[0].regeocodeData.addressComponent.province,e.city=i[0].regeocodeData.addressComponent.city,e.district=i[0].regeocodeData.addressComponent.district,e.township=i[0].regeocodeData.addressComponent.township,t.hideLoading(),e.address=e.province+e.city+e.district}})},onChange:function(t){this.province=t.detail.value[0],this.city=t.detail.value[1],this.district=t.detail.value[2],this.address=this.province+this.city+this.district},onCancel:function(t){this.getRegeo()},onProvince:function(){this.$emit("district",{district:this.district,township:this.township})},onAddress:function(t){this.detailAddress=t.detail.value,this.$emit("detailAddress",{detailAddress:this.detailAddress})}}};e.default=a}).call(this,i("543d")["default"])},"7d47":function(t,e,i){"use strict";i.r(e);var n=i("62e7"),s=i("8af1");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("20ba");var o=i("2877"),d=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=d.exports},"8af1":function(t,e,i){"use strict";i.r(e);var n=i("6995"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},d77b:function(t,e,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'wxcomponents/xlocation/xlocation-create-component',
    {
        'wxcomponents/xlocation/xlocation-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7d47"))
        })
    },
    [['wxcomponents/xlocation/xlocation-create-component']]
]);                
