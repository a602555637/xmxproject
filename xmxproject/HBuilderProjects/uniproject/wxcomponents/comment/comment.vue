<template name="comment">
	<view>
		<text class="container-title">评论区</text>
		<view class="swiper">
			<swiper vertical indicator-color="#D1D1D1" indicator-active-color="#09BA51"
			circular :indicator-dots="false" :autoplay="true" :interval="5000" :duration="2000">
				<swiper-item>
					<view class="container">
						<view class="container-info">
							<image src="../../static/wxcomponentimg/avatar1@2x.png"></image>
							<view class="name-date">
								<text class="name">微风吹过脸颊</text>
								<text class="date">8月12日</text>
							</view>
							<uniRate class="rate" disabled="true" value="5" size="18"></uniRate>
						</view>
						<text class="content">服务态度很好，处理得很迅速，一天不到就通知我修好了，很满意。</text>
						<image class="container-bg" src="../../static/index/pl-bg@2x.png"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="container">
						<view class="container-info">
							<image src="../../static/wxcomponentimg/avatar2@2x.jpg"></image>
							<view class="name-date">
								<text class="name">小冰</text>
								<text class="date">8月22日</text>
							</view>
							<uniRate class="rate" disabled="true" value="5" size="18"></uniRate>
						</view>
						<text class="content">技术非常精湛，服务也很周到，已经介绍了很多客户来小美修，真的值这个价钱。</text>
						<image class="container-bg" src="../../static/index/pl-bg@2x.png"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="container">
						<view class="container-info">
							<image src="../../static/wxcomponentimg/avatar3@2x.jpg"></image>
							<view class="name-date">
								<text class="name">大先生</text>
								<text class="date">9月2日</text>
							</view>
							<uniRate disabled="true" class="rate" value="5" size="18"></uniRate>
						</view>
						<text class="content">电池更换速度还是不错的，原本说一个半小时，结果只用了不到一个小时，第一次来更换硬件，服务也很不错，值得再来</text>
						<image class="container-bg" src="../../static/index/pl-bg@2x.png"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		name: 'comment',
		components: {
			uniRate
		},
		props: {
			name: String,
			date: String
		}
	}
</script>

<style>
	.swiper{
		height: 300upx;
		margin-bottom: 30upx;
	}
	
	.container-bg{
		width: 698upx;
		height: 260upx;
		position: absolute;
		z-index: -99;
	}
	
	.content {
		font-size: 26upx;
		margin-left: 160upx;
		margin-right: 62upx;
		margin-bottom: 40upx;
	}

	.rate {
		position: absolute;
		right: 56upx;
	}

	.name {
		font-size: 32upx;
		margin-bottom: 10upx;
	}

	.date {
		font-size: 24upx;
		color: #888F97;
	}

	.name-date {
		display: flex;
		flex-direction: column;
		margin-left: 30upx;
	}

	.container-title {
		font-size: 32upx;
		font-weight: bold;
		color: #888F97;
		display: block;
		margin-bottom: 22upx;
		margin-left: 26upx;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		margin-left: 26upx;
/* 		margin-bottom: 20upx;
		margin-top: 20upx; */
	}

	.container-info image {
		width: 100upx;
		height: 100upx;
		margin-left: 30upx;
		border-radius: 50upx;
	}

	.container-info {
		display: flex;
		flex-direction: row;
		margin-top: 30upx;
	}
</style>
