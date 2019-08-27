<template>
	<view class="container">
		<text>绑定亲友号</text>
		<input type="text" placeholder="请输入亲友手机号" placeholder-class="placeholder-class" />
		<text>验证码</text>
		<input type="text" placeholder="请输入收到的验证码" placeholder-class="placeholder-class" />
		<view @click="onSuccess" class="button">确认绑定</view>
	</view>
</template>

<script>
	export default {
		methods:{
			onSuccess(){
				uni.showToast({
					title: '绑定成功'
				})
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style>
	.button{
		width: 750upx;
		height: 100upx;
		background: #09BA51;
		color: #FFFFFF;
		font-size: 40upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0upx;
		left: 0upx;
	}
	
	.placeholder-class{
		font-size: 24upx;
		color: #888F97;
		margin-left: 20upx;
	}
	
	.container{
		display: flex;
		flex-direction: column;
		margin-left: 26upx;
		margin-top: 40upx;
	}
	
	.container input{
		width: 698upx;
		height: 80upx;
		border: 1px solid #EEEEEE;
	}
	
	.container text{
		font-size: 30upx;
		margin-top: 22upx;
		margin-bottom: 20upx;
	}
</style>
