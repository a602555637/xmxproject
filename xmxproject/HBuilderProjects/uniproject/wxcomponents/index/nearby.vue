<template>
	<view class="container">
		<text>您的附近</text>
		<map :latitude="latitude" :longitude="longitude"></map>
		<view @tap="bindMap" class="disable" :markers="markers" show-location></view>
	</view>
</template>

<script>
	
	export default {
		created() {
			this.getLocation()
		},
		data() {
			return {
				latitude: '',
				longitude:'',
				markers:[{
					latitude: this.latitude,
					longitude: this.latitude,
					iconPath:'../../static/wxcomponentimg/dw@2x.png',
					width: 40,
					height: 40
				}]
			}
		},
		methods: {
			bindMap() {
				uni.navigateTo({
					url: '../../pages/index/map'
				})
			},
			getLocation(){
				uni.getLocation({
				    type: 'wgs84',
				    success: res=> {
						// console.log(res)
						this.latitude = res.latitude
						this.longitude = res.longitude
					}
				})
			}
		},
	}
</script>

<style>
	.disable{
		background: #0081FF;
		opacity: 0;
		width: 698upx;
		height: 160upx;
		position: absolute;
		top: 80rpx;
		left: 0;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-left: 26upx;
		position: relative;
	}

	.container map {
		width: 698upx;
		height: 160upx;
		margin-bottom: 56upx;
	}

	.container text {
		font-size: 32upx;
		color: #888F97;
		font-weight: bold;
		margin-bottom: 40upx;
	}
</style>
