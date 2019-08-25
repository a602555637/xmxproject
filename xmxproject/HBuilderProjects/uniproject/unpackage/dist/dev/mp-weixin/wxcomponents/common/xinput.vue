<template>
	<view class="container">
		<text class="container-text">{{ title }}</text>
		<input class="container-item" type="text" :placeholder="placeHolderText" placeholder-class="placeholder-class" />
	</view>
</template>

<script>
	export default {
		name:'xinput',
		props:{
			title:String,
			placeHolderText:String
		}
	}
	
</script>

<style>
	
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.container-text{
		font-size: 30upx;
		margin-left: 46upx;
		margin-bottom: 20upx;
	}
	
	.placeholder-class{
		font-size: 26upx;
		color: #888F97;
		padding-left: 20upx;
	}
	
	.container-item{
		height: 100upx;
		width: 698upx;
		border: 1px solid #EEEEEE;
		margin-left: 26upx;
		margin-bottom: 60upx;
	}
	
</style>
