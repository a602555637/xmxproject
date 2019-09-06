<template>
	<view class="">
		<!--地图容器-->
		<!--longitude及latitude为设置为调转到指定坐标位置，默认不显示-->
		<map id="myMap"
		    :markers="markers"
		    style="width:100%;height:300px;"
		    :longitude="poi.longitude"
		    :latitude="poi.latitude" scale='16' show-location>
		</map>
		<!--form表单-->
		<form bindsubmit="formSubmit">
		    <!--地址输入框,例：39.984060,116.307520-->
		    <input style="border:1px solid #000;" name="reverseGeo"></input>
		    <!--提交表单按钮-->
		    <button form-type="submit">逆地址解析</button>
		</form>
		<view>当前位置为：{{markers[0].title}}</view>
	</view>
</template>

<script>
	var QQMapWX = require('../../../util/qqmap-wx-jssdk.js')
	var qqmapsdk
	export default {
		onLoad() {
			qqmapsdk = new QQMapWX({
				key: 'ONWBZ-DTSWI-VYOGC-5QIV5-KJPU7-IKBVB'
			})
		},
		onShow() {
			qqmapsdk.search({
				keyword: '手机维修',
				success: res => {
					console.log(res)
				}
			})
		}
	}
</script>

<style>

</style>
