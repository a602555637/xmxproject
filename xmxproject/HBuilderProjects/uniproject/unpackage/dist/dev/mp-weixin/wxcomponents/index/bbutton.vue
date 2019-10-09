<template name="bbutton">
	<view class="container-middle">
		<image @click="onPhoneRepair" class="container-middle-iphone" src="../../static/index/phone-re@2x.png"></image>
		<image class="container-middle-ipad" src="../../static/index/pad-re@2x.png"></image>
	</view>
</template>

<script>
	export default{
		name:'bbutton',
		methods:{
			onPhoneRepair(){
				uni.navigateTo({
					url: '../../pages/selectmodel/selectmodel'
				})
			}
		}
	}
</script>

<style>
	.container-middle-iphone{
		box-shadow:0upx 0upx 40upx rgba(0,0,0,0.16);
		border-radius:12upx;
		margin-left: 62upx;
		margin-right: 28upx;
	}
	
	.container-middle-ipad {
		box-shadow:0upx 0upx 40upx rgba(0,0,0,0.16);
		border-radius:12upx;
	}
	
	.container-middle image {
		width: 298upx;
		height: 124upx;
	}
	
	.container-middle {
		display: flex;
		margin-bottom: 42upx;
	}
	
</style>
