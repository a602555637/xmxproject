<template name="testype">
	<view class="container-repair">
		<image class="repair-phone" src="../../static/iPhone@2x.png" mode=""></image>
		<view class="repair-info">
			<text class="repair-info-phone">iphone X</text>
			<text class="repair-info-test">检测到您的设备</text>
		</view>
		<view class="repair-right">
			<image class="repair-right-change" src="../../static/ghjx-btn@2x.png" mode=""></image>
			<image src="../../static/repair-btn@2x.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:'testype'
	}
</script>

<style>
	
	.repair-info-test {
		font-size: 26upx;
		color: #888F97;
	}
	
	.repair-info-phone {
		font-size: 36upx;
		margin-bottom: 16upx;
	}
	
	.repair-info {
		display: flex;
		flex-direction: column;
		margin-left: 40upx;
	}
	
	.repair-right-change {
		margin-right: 20upx;
	}
	
	.repair-right image {
		width: 160upx;
		height: 60upx;
	}
	
	.repair-right {
		display: flex;
		flex-direction: row;
		position: absolute;
		right: 40upx;
	}
	
	.repair-phone {
		width: 64upx;
		height: 128upx;
	}
	
	.container-repair {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 40upx;
		margin-bottom: 26upx;
		margin-top: 50upx;
	}
</style>
