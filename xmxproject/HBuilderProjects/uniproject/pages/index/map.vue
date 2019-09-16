<template>
	<view class="container">
		<map @click="changeIsShow" @callouttap="bindOpenPopup" id="myMap" :latitude="latitude" :longitude="longitude" :markers="markers"
		 show-location></map>
		<!-- <uni-popup msg="123" ref="popup" :show="true" type="bottom"></uni-popup> -->
		<view v-if="isShow" class="popup-class">
			<view class="popup-top">
				<image class="avatar" src="../../static/wxcomponentimg/avatar@2x.png"></image>
				<view class="popup-title">
					<text class="title">小马维修中心</text>
					<text class="desc">距您约40米&nbsp&nbsp&nbsp郫筒镇文新路78号1层</text>
				</view>
			</view>
			<view class="rate">
				<uni-rate value="5"></uni-rate>
			</view>
			<view class="button">
				<view class="button-left">联系商家</view>
				<view class="button-right">去维修</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	import uniRate from '../../components/uni-rate/uni-rate.vue'

	export default {
		created() {
			uni.getLocation({
				type: 'wgs84',
				success: res => {
					console.log(res)
					this.latitude = res.latitude
					this.longitude = res.longitude
				}
			})
		},
		data() {
			return {
				isShow:false,
				latitude: 30.795890000000025,
				longitude: 103.90256,
				markers: [{
					id: 1,
					latitude: 30.795890000000030,
					longitude: 103.90260,
					name: 'ate',
					iconPath: '../../static/wxcomponentimg/dw@2x.png',
					width: 60,
					height: 60,
					label: {
						// content: '小label手机维修',
						fontSize: 16,
						color: '#000000',
						bgColor: '#ffffff',

					},
					callout: {
						padding: 12,
						borderRadius: 12,
						content: '小callout手机维修',
						fontSize: 16,
						color: '#ffffff',
						bgColor: '#51D587'
					}
				}, {
					id: 2,
					latitude: 30.795890001000020,
					longitude: 103.90150,
					name: 'atc',
					iconPath: '../../static/wxcomponentimg/dw@2x.png',
					width: 60,
					height: 60,
					label: {
						content: '小label手机维修',
						fontSize: 20,
						color: '#333333',
						// bgColor: '#ffffff',

					},
					callout: {
						padding: 12,
						borderRadius: 12,
						content: '小callout手机维修',
						fontSize: 16,
						color: '#ffffff',
						bgColor: '#51D587'
					}
				}],
			}
		},
		methods: {
			bindOpenPopup() {
				// this.$refs.popup.open()
				this.isShow = true
			},
			changeIsShow(){
				this.isShow = false
			}
		},
		components: {
			uniPopup,
			uniRate
		},
	}
</script>

<style>
	.button-left{
		border: 1px solid #EEEEEE;
	}
	
	.button-right{
		background: #09BA51;
		color: #FFFFFF;
	}
	
	.button-left,
	.button-right{
		width: 320upx;
		height: 80upx;
		font-size: 26upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 12upx;
	}
	
	.button{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 60upx;
		margin-bottom: 60upx;
	}
	
	.rate{
		margin-left: 126upx;
	}
	
	.popup-top{
		display: flex;
		flex-direction: row;
		margin-left: 26upx;
		margin-top: 34upx;
	}
	
	.popup-title{
		display: flex;
		flex-direction: column;
	}
	
	.title{
		font-size: 32upx;
		font-weight: bold;
		margin-bottom: 6upx;
	}
	
	.desc{
		font-size: 26upx;
	}
	
	.avatar {
		width: 80upx;
		height: 80upx;
		margin-right: 20upx;
	}
	
	.popup-class {
		width: 100%;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
	}

	map {
		width: 100%;
		height: 1206upx;
	}
</style>
