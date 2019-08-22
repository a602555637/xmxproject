<template name="comment">
	<view class="container">
		<view class="container-title">
			<text class="container-title-head">评论区</text>
		</view>
		<view class="content">
			<view class="content-bottom">
				<image class="avatar" src="../../static/wxcomponentimg/avatar@2x.png"></image>
				<text>泰勒丝</text>
				<uniRate class="rate" value="2" size="18"></uniRate>
			</view>
			<view class="comment">
				<text class="content-date">7月12日</text>
				<text class="content-note">服务态度很好，处理得很迅速，一天不到就通知我修好了，很满意。</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		name: 'comment',
		components: {
			uniRate
		}
	}
</script>

<style>
	.content-bottom>text{
		margin-left: 20upx;
	}
	
	.rate {
		position: absolute;
		right: 26upx;
		bottom: -100upx;
	}

	.comment {
		display: flex;
		flex-direction: column;
		margin-left: 160upx;
		position: relative;
		bottom: 54upx;
	}

	.content-date {
		font-size: 24upx;
		color: #888F97;
	}

	.content-note {
		font-size: 26upx;
		margin-top: 20upx;
	}

	.container {
		display: flex;
		flex-direction: column;
		margin-top: 34upx;
	}

	.container-title {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 26upx;
	}

	.container-title-head {
		font-size: 40upx;
		font-weight: bold;
		margin-left: 26upx;
	}

	.avatar {
		width: 110upx;
		height: 110upx;
		margin-left: 26upx;
		position: relative;
		bottom: 10upx;
	}

	.content-bottom {
		display: flex;
		align-items: flex-start;
	}
</style>
