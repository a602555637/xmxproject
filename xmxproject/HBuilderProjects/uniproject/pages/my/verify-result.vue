<template>
	<view class="container">
		<image v-if="isPass" src="../../static/my/pass@2x.png" mode=""></image>
		<image v-else src="../../static/my/nopass@2x.png" mode=""></image>
		<text>恭喜您，审核通过</text>
		<view @click="onNext" class="container-button">设置密码</view>
		<!-- <image src="../../static/my/szmm@2x.png"></image> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isPass: true
			}
		},
		methods:{
			onNext(){
				uni.navigateTo({
					url:'setting-key'
				})
			}
		}
	}
</script>

<style>
	.container-button{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 30upx;
		background: #09BA51;
		border-radius: 12upx;
		width: 698upx;
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
