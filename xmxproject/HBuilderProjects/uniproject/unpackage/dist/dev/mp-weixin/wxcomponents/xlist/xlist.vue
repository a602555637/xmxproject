<template>
	<view class="container" >
		<text class="title">{{title}}</text>
		<view class="container-right">
			<text class="desc">{{'￥' + price}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:'xlist',
		props:{
			title:String,
			price:String
		}
	}
</script>

<style>
	.container{
		width: 698upx;
		height: 120upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
		margin-left: 26upx;
	}
	
	.title{
		font-size: 30upx;
	}
	
	.desc{
		font-size: 26upx;
	}
	
	.arrow{
		width: 18upx;
		height: 30upx;
	}
	
	.container-right{
		display: flex;
		align-items: center;
	}
</style>
