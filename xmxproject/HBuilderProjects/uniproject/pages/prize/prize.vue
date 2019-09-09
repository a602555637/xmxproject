<template>
	<view>
		
		
		
		<image v-if="isvip == false" class="container-button" src="../../static/vip/price-bevip@2x.png"></image>
		<image v-else-if="isOne == 1" class="container-button" src="../../static/vip/price-one@2x.png" mode="widthFix"></image>
		<image v-else class="container-button" src="../../static/vip/price-zero@2x.png" mode="widthFix"></image>
		<view @click="onMyPrize" class="container-info">我的奖品>></view>
		
		
		<image class="container-bg" src="../../static/vip/price-bg@2x.png" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isvip: true,
				isOne:1
			}
		},
		methods:{
			onMyPrize(){
				uni.navigateTo({
					url: 'my-prize'
				})
			}
		}
	}
</script>

<style>
	.container-bg{
		width: 750upx;
	}
	
	.container-button{
		width: 490upx;
		height: 178upx;
		position: absolute;
		bottom: 34upx;
		left: 133upx;
	}
	
	.container-info{
		font-size: 28upx;
		color: #FFB600;
		position: absolute;
		bottom: -10upx;
		left: 303upx;
	}
</style>
