<template>
	<view class="container">
		<text class="item-title">{{title}}</text>
		<text class="item-price">{{price + '元'}}</text>
		<image src="../../static/faults/hymfx@2x.png"></image>
	</view>
</template>

<script>
	export default {
		name: 'xlist-price',
		props: {
			title: String,
			price: String
		}
	}
</script>

<style>
	.item-title{
		font-size: 26upx;
		color: #09BA51;
		margin-left: 26upx;
	}
	
	.item-price{
		font-size: 30upx;
		font-weight: bold;
		color: #09BA51;
	}
	
	.container{
		display: flex;
		align-items: center;
		width: 750upx;
		height: 120upx;
	}
	
	.container image{
		width: 130upx;
		height: 26upx;
		position: absolute;
		right: 26upx;
	}
</style>
