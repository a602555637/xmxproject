<template>
	<view class="container">
		<text>输入密码</text>
		<input type="text" placeholder="请输入6位密码" placeholder-class="placeholder-class" />
		<text>确认密码</text>
		<input type="text" placeholder="请再次输入6位密码" placeholder-class="placeholder-class" />
		<view class="container-button">保存</view>
	</view>
</template>

<script>
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
		margin-top: 234upx;
	}
	
	.container{
		display: flex;
		flex-direction: column;
		margin-left: 26upx;
		margin-top: 20upx;
	}
	
	.placeholder-class{
		font-size: 26upx;
		color: #888F97;
		margin-left: 20upx;
	}
	
	.container text{
		display: block;
		font-size: 30upx;
		margin-top: 40upx;
		margin-bottom: 20upx;
	}
	
	.container input{
		width: 698upx;
		height: 100upx;
		border: 1px solid #EEEEEE;
	}
</style>
