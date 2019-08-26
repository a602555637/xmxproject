<template>
	<view class="container">
		<view @click="onOrder" class="container-left">
			<image src="../../static/wxcomponentimg/kjxd@2x.png"></image>
			<text>快捷下单</text>
		</view>
		<view @click="onNext" class="container-left container-right">
			<image src="../../static/wxcomponentimg/my@2x.png"></image>
			<text class="container-left-text">个人中心</text>
		</view>
	</view>
</template>

<script>
	export default {
	methods:{
		onOrder(){
			uni.navigateTo({
				url: '../../pages/selectmodel/selectmodel'
			});
		},
		onNext(){
			uni.navigateTo({
				url:'../../pages/my/my'
			})
		}
	}
	}
</script>

<style>
	.container-left {
		font-size: 24upx;
	}

	.container-left {
		font-size: 24upx;
	}

	.container-left image {
		width: 50upx;
		height: 50upx;
	}


	.container {
		position: fixed;
		bottom: 0upx;
		display: flex;
		width: 750upx;
		height: 98upx;
		display: flex;
		justify-content: center;
		align-items: center;
/* 		padding-left: 136upx;
		padding-right: 134upx; */
		background: #fff;
	}

	.container-left {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.container-right{
		margin-left: 288upx;
	}
</style>
