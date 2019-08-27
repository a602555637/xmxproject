<template>
	<view class="container">
		<text class="item-title">{{title}}</text>
		<input class="item-input" type="text" value="" :placeholder="placeholder" />
		<text v-if="isShowCode" class="identify-code">获取验证码</text>
	</view>
</template>

<script>
	export default {
		name:'xlist-input',
		props:{
			title:String,
			placeholder:String,
			isShowCode:Boolean
		}
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
