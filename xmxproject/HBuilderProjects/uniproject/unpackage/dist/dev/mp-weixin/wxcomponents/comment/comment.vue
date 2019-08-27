<template name="comment">
	<view>
		<text class="container-title">评论区</text>
		<view class="swiper">
			<swiper indicator-color="#D1D1D1" indicator-active-color="#09BA51"
			circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="container">

						<view class="container-info">
							<image src="../../static/wxcomponentimg/avatar@2x.png"></image>
							<view class="name-date">
								<text class="name">泰勒丝</text>
								<text class="date">7月12日</text>
							</view>
							<uniRate class="rate" value="2" size="18"></uniRate>
						</view>
						<text class="content">服务态度很好，处理得很迅速，一天不到就通知我修好了，很满意。</text>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="container">

						<view class="container-info">
							<image src="../../static/wxcomponentimg/avatar@2x.png"></image>
							<view class="name-date">
								<text class="name">泰勒丝</text>
								<text class="date">7月12日</text>
							</view>
							<uniRate class="rate" value="2" size="18"></uniRate>
						</view>
						<text class="content">服务态度很好，处理得很迅速，一天不到就通知我修好了，很满意。</text>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="container">

						<view class="container-info">
							<image src="../../static/wxcomponentimg/avatar@2x.png"></image>
							<view class="name-date">
								<text class="name">泰勒丝</text>
								<text class="date">7月12日</text>
							</view>
							<uniRate class="rate" value="2" size="18"></uniRate>
						</view>
						<text class="content">服务态度很好，处理得很迅速，一天不到就通知我修好了，很满意。</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>



	<!-- 		<view class="container">
			<text class="container-title">评论区</text>
			<view class="container-info">
				<image src="../../static/wxcomponentimg/avatar@2x.png"></image>
				<view class="name-date">
					<text class="name">泰勒丝</text>
					<text class="date">7月12日</text>
				</view>
				<uniRate class="rate" value="2" size="18"></uniRate>
			</view>
			<text class="content">服务态度很好，处理得很迅速，一天不到就通知我修好了，很满意。</text>
		</view> -->

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
	.content {
		font-size: 26upx;
		margin-left: 134upx;
		margin-right: 26upx;
		margin-bottom: 40upx;
	}

	.rate {
		position: absolute;
		right: 26upx;
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
		margin-left: 20upx;
	}

	.container-title {
		font-size: 40upx;
		font-weight: bold;
		display: block;
		margin-bottom: 40upx;
		margin-left: 26upx;
	}

	.container {
		display: flex;
		flex-direction: column;
		margin-left: 26upx;
	}

	.container-info image {
		width: 110upx;
		height: 110upx;
	}

	.container-info {
		display: flex;
		flex-direction: row;
	}
</style>
