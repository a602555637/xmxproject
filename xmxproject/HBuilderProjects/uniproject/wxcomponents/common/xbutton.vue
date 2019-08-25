<template>
	<view @click="onNext" class="button">{{title}}</view>
</template>

<script>
	export default {
		name:'xbutton',
		props:{
			title:String,
			onNext:{
				type:Function
			}
		}
	}
</script>

<style>
	.button{
		width: 698upx;
		height: 80upx;
		background: #09BA51;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 12upx;
		margin-left: 26upx;
		color: #FFFFFF;
		font-size: 30upx;
		margin-top: 172upx;
	}
	
</style>
