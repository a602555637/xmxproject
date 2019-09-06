<template name="headads">
	<view class="">
		<view class="container-head">
			<image class="hot" src="../../static/hot@2x.png"></image>
			<swiper class="swiper" vertical="true" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item >
					<view class="hot-text">今日换屏5折起</view>
				</swiper-item>
				<swiper-item>
					<view class="hot-text">普通会员八折优惠</view>
				</swiper-item>
				<swiper-item>
					<view class="hot-text">终身会员免费修</view>
				</swiper-item>
			</swiper>
			<image @click="onBusiness" class="icon" src="../../static/index/store@2x.png"></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:"headads",
		methods:{
			onBusiness(){
				uni.navigateTo({
					url: '../../pages/business/business-login/business-login'
				})
			}
		}
	}
</script>

<style>
	.swiper{
		height:40upx;
		width:500upx;
	}
	
	.container-head {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 36rpx;
		margin-left: 26rpx;
	}
	
	.hot {
		width: 72rpx;
		height: 36rpx;
		margin-right: 20rpx;
	}
	
	.icon {
		width: 44rpx;
		height: 44rpx;
		position: absolute;
		right: 26rpx;
	}
	
	.hot-text {
		font-size: 24rpx;
	}
</style>
