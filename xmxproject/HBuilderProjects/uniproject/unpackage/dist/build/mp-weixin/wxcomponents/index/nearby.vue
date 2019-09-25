<template>
	<view class="container">
		<text>您的附近</text>
		<map @tap="bindMap" :latitude="latitude" :longitude="longitude"></map>
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
				longitude:''
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
						console.log(res)
						this.latitude = res.latitude
						this.longitude = res.longitude
					}
				})
			}
		},
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-left: 26upx;
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
