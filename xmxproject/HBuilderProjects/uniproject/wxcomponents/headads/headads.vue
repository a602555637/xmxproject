<template name="headads">
	<view class="">
		<view class="container-head">
			<image class="hot" src="../../static/hot@2x.png"></image>
			<text class="hot-text">今日换屏5折起</text>
			<image class="icon" src="../../static/store@2x.png"></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:"headads",
		props:{
			title:String
		}
	}
</script>

<style>
	
	.container-head {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 36rpx;
		margin-left: 26rpx;
		margin-bottom: 20rpx;
	}
	
	.hot {
		width: 72rpx;
		height: 36rpx;
		margin-right: 20rpx;
	}
	
	.icon {
		width: 44rpx;
		height: 44rpx;
		position: absolute;
		right: 26rpx;
	}
	
	.hot-text {
		font-size: 24rpx;
	}
</style>
