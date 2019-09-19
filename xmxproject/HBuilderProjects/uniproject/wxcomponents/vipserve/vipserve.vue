<template>
	<view class="container">
		<view class="container-title">
			<text class="container-title-head">会员特权</text>
			
				<GetOpenId :isNext="isNext"></GetOpenId>
				
			<!-- <view @click="onVip" class="vip-class">成为会员</view> -->
			<view @click="onPrize" class="container-subtitle">
				<image src="../../static/cj@2x.png"></image>
				<text class="container-title-more">每日一抽</text>
			</view>
		</view>
		<swiper class="swiper" :indicator-dots="false" :previous-margin="previous" :next-margin="next" :circular="circular">
			<swiper-item class="swiper-item">
				<image src="../../static/vipserve/mfwx@2x.png"></image>
				<image src="../../static/vipserve/jjhs@2x.png"></image>
			</swiper-item>
			<swiper-item class="swiper-item">
				<image src="../../static/vipserve/mfby@2x.png"></image>
				<image src="../../static/vipserve/mfsj@2x.png"></image>
			</swiper-item>
			<swiper-item class="swiper-item">
				<image src="../../static/vipserve/sjbz@2x.png"></image>
				<image src="../../static/vipserve/mfhp@2x.png"></image>
			</swiper-item>
			<swiper-item class="swiper-item">
				<image src="../../static/vipserve/fgjq@2x.png"></image>
				<image src="../../static/vipserve/mryc@2x.png"></image>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	import GetOpenId from '../../components/ccg-getOpenID/ccg-wxAppOpenid.vue'
	
	export default {
		data() {
			return {
				isNext:1,
				circular: true,
				previous: 54,
				next: 54
			}
		},
		name: 'vipserve',
		methods: {
			onPrize() {
				uni.navigateTo({
					url: '../../pages/prize/prize'
				})
			},
			onVip(){
				uni.navigateTo({
					url: '../../pages/bevip/bevip'
				})
			}
		},
		components: {
			GetOpenId
		}
	}
</script>

<style>


	.container-subtitle {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.container-subtitle image {
		width: 24upx;
		height: 24upx;
		margin-right: 10upx;
	}

	.container {
		display: flex;
		flex-direction: column;
		margin-top: 34upx;
	}

	.container-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 26upx;
	}

	.container-title-head {
		font-size: 32upx;
		font-weight: bold;
		color: #888F97;
		margin-left: 26upx;
	}

	.container-title-more {
		font-size: 22upx;
		color: #888F97;
		margin-right: 26upx;
	}

	.swiper-item {
		display: flex;
		flex-direction: row;
	}

	.swiper-item image {
		width: 282upx;
		height: 216upx;
	}

	.swiper {
		height: 244upx;
	}

	.content {
		display: block;
		white-space: nowrap;
	}
</style>
