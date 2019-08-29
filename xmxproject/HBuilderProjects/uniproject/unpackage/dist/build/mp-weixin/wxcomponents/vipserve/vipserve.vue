<template>
	<view class="container">
		<view class="container-title">
			<text class="container-title-head">会员特权</text>
			<view @click="onPrize" class="container-subtitle">
				<image src="../../static/cj@2x.png"></image>
				<text class="container-title-more">每日一抽</text>
			</view>

		</view>
		<scroll-view scroll-x class="content">
			<image src="../../static/vipserve/mfwx@2x.png"></image>
			<image src="../../static/vipserve/jjhs@2x.png"></image>
			<image src="../../static/vipserve/mfby@2x.png"></image>
			<image src="../../static/vipserve/mfsj@2x.png"></image>
			<image src="../../static/vipserve/sjbz@2x.png"></image>
			<image src="../../static/vipserve/mfhp@2x.png"></image>
			<image src="../../static/vipserve/fgjq@2x.png"></image>
			<image src="../../static/vipserve/mryc@2x.png"></image>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'vipserve',
		methods:{
			onPrize(){
				uni.navigateTo({
					url: '../../pages/prize/prize'
				});
			}
		}
	}
</script>

<style>
	.container-subtitle{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.container-subtitle image{
		width: 24upx;
		height: 24upx;
		margin-right: 10upx;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		margin-top: 34upx;
	}

	.container-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 26upx;
	}

	.container-title-head {
		font-size: 32upx;
		font-weight: bold;
		margin-left: 26upx;
	}

	.container-title-more {
		font-size: 22upx;
		color: #888F97;
		margin-right: 26upx;
	}

	.content image {
		width: 282upx;
		height: 204upx;
	}

	.content {
		display: block;
		white-space: nowrap;
	}
</style>
