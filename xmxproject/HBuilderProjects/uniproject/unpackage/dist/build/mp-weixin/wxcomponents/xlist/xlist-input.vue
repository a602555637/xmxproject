<template>
	<view>
		<view class="container">
			<text class="item-title">姓名：</text>
			<input class="item-input" type="text" value="" placeholder="请输入您的姓名" />
		</view>
		<view class="container">
			<text class="item-title">手机号：</text>
			<input class="item-input" type="number" value="" placeholder="请输入您的手机号" />
		</view>
	</view>
</template>

<script>
	export default {
		name:'xlist-input'
	}
</script>

<style>
	.container{
		display: flex;
		align-items: center;
		height: 120upx;
		margin-left: 26upx;
		margin-right: 26upx;
		border-bottom: 1px solid #F3F3F3;
	}
	
	.item-title{
		font-size: 30upx;
		
	}
	
	.item-input{
		font-size: 24upx;
		color: #888F97;
		margin-left: 20upx;
	}
	
	.identify-code{
		font-size: 30upx;
		color: #09BA51;
		display: flex;
		position: absolute;
		right: 26upx;
	}
</style>
