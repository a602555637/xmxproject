<template>
	<view class="container">
		<text>身份证照</text>
		<view class="container-id">
			<view class="container-id-left">
				<image src="../../static/my/sfz@2x.png"></image>
				<text>正面</text>
			</view>
			<view class="container-id-right">
				<image src="../../static/my/sfz@2x.png"></image>
				<text>正面</text>
			</view>
		</view>
		<text>营业执照</text>
		<image src="../../static/my/yyzz@2x.png"></image>
		<view @click="onSubmit" class="container-button">提交</view>
	</view>
</template>

<script>
	export default {
		methods:{
			onSubmit(){
				uni.showToast({
					title: '提交成功'
				})
				uni.navigateTo({
					url:'business-verify'
				})
			}
		}
	}
</script>

<style>
	.container-button{
		width: 698upx;
		height: 80upx;
		border-radius: 12upx;
		margin-top: 326upx;
		margin-left: 26upx;
		font-size: 30upx;
		color: #FFFFFF;
		background: #09BA51;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.container-id{
		display: flex;
		margin-top: 46upx;
	}
	
	.container-id-left{
		margin-left: 26upx;
		margin-right: 26upx;
	}
	
	.container-id-left,
	.container-id-right{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.container-id-left image,
	.container-id-right image{
		width: 336upx;
		height: 168upx;
		margin-bottom: 20upx;
	}
	
	.container>image{
		width: 698upx;
		height: 260upx;
		margin-top: 46upx;
		margin-left: 26upx;
	}
	
	.container-id text{
		font-size: 26upx;
		color: #888F97;
	}
	
	.container>text{
		display: block;
		font-size: 30upx;
		margin-top: 40upx;
		margin-left: 46upx;
	}
	
</style>
