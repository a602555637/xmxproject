<template>
	<view class="container">
		<image src="../../static/my/verify@2x.png"></image>
		<text class="container-title">审核中，请耐心等待</text>
		<view @click="onBack" class="submit-button">我知道了</view>
	</view>
</template>

<script>
	export default {
		methods:{
			onBack(){
				uni.redirectTo({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style>
	.submit-button{
		font-size: 30upx;
		color: #FFFFFF;
		background: #09BA51;
		width: 460upx;
		height: 80upx;
		border-radius: 12upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 228upx;
	}
	
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 246upx;
	}
	
	.container image{
		width: 114upx;
		height: 125upx;
		margin-bottom: 42upx;
	}
	
	.container text{
		font-size: 40upx;
	}
</style>
