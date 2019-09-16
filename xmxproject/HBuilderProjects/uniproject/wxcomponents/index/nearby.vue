<template>
	<view class="container">
		<text>您的附近</text>
		<image @click="bindMap" src="../../static/vipserve/mfwx@2x.png"></image>
	</view>
</template>

<script>
	export default {
		methods: {
			bindMap() {
				uni.navigateTo({
					url: '../../pages/index/map'
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

	.container image {
		width: 698upx;
		height: 160upx;
	}

	.container text {
		font-size: 32upx;
		color: #888F97;
		font-weight: bold;
		margin-bottom: 40upx;
	}
</style>
