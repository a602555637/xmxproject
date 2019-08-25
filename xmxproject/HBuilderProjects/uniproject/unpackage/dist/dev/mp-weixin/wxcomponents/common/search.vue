<template>
	<view class="search">
		<image src="../../static/business/search@2x.png"></image>
		<text>{{title}}</text>
	</view>
</template>

<script>
	export default {
		name:'search',
		props:{
			title:String
		}
	}
</script>

<style>
	.search image{
		width: 31upx;
		height: 31upx;
		margin-right: 18upx;
	}
	
	.search text{
		font-size: 26upx;
		color: #888F97;
	}
	
	.search{
		width: 698upx;
		height: 70upx;
		border-radius: 12upx;
		background: #F3F3F3;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	
</style>
