<template>
	<view class="container">
		<text>店铺名称：小美郫都区总店</text>
		<text>负责人：王五</text>
		<text>手机号：148578588</text>
		<view class="line-thick"></view>
		<text>地区：郫都区</text>
		<text>街道：望丛中路</text>
		<text>南北大道123号</text>		
		<view class="line-thick"></view>
		<text>企业类型：个人</text>
		<text>服务类型：上门维修，到店维修</text>
	</view>
</template>

<script>
</script>

<style>
	.container{
		display: flex;
		flex-direction: column;
	}
	
	.container text{
		font-size: 30upx;
		margin-top: 40upx;
		padding-bottom: 40upx;
		margin-left: 26upx;
		border-bottom: 1px solid #f3f3f3;
	}
	
	.line-thick{
		background: #F3F3F3;
		width: 750rpx;
		height: 20upx;
	}
</style>
