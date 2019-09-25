<template>
	<view class="container">
		<image v-if="isPass" src="../../static/my/pass@2x.png" mode=""></image>
		<image class="verify" v-else src="../../static/my/verify@2x.png"></image>
		<text v-if="isPass">恭喜您，审核通过</text>
		<text v-else>审核中，请耐心等待</text>
		<view @click="onNext" class="container-button">我知道了</view>
		<!-- <image src="../../static/my/szmm@2x.png"></image> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isPass: false
			}
		},
		methods:{
			onNext(){
				uni.reLaunch({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style>
	.verify{
		width: 114upx !important;
		height: 126upx !important;
	}
	
	.container-button{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 30upx;
		background: #09BA51;
		border-radius: 12upx;
		width: 460upx;
		height: 80upx;
		margin-top: 168upx;
	}
	
	.container text{
		font-size: 40upx;
	}
	
	.container image{
		width: 136upx;
		height: 136upx;
		margin-bottom: 40upx;
	}
	
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 238upx;
	}
</style>
