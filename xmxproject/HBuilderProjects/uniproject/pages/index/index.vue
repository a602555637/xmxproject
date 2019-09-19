<template>
	<view>
		<headads></headads>
		<view class="xswiper">
			<xswiper></xswiper>
		</view>
		<image @click="onBusiness" class="fixed2" src="../../static/index/store@2x.png"></image>
		<testype></testype>
		<bbutton></bbutton>
		<quick-select></quick-select>
		<servebutton></servebutton>
		<vipserve></vipserve>

		<nearby></nearby>

		<comment></comment>
		<view class="bottom">
			<view class="left">
				<view class="left-text">
					<text>服务用户</text>
					<image src="../../static/wxcomponentimg/up@2x.png"></image>
				</view>
				<text>暂未公布</text>
			</view>
			<view class="left">
				<view class="left-text">
					<text>维修设备</text>
					<image src="../../static/wxcomponentimg/up@2x.png"></image>
				</view>
				<text>暂未公布</text>
			</view>
			<view class="left">
				<view class="left-text">
					<text>好评度</text>
					<image src="../../static/wxcomponentimg/up@2x.png"></image>
				</view>
				<text>暂未公布</text>
			</view>
		</view>
		<view class="kf-phone">
			<text>客服热线</text>
			<text>关于我们</text>
			<text>联系我们</text>
			<text>服务流程</text>
		</view>
		<view class="vacol"></view>
		<tabbar></tabbar>
	</view>
</template>

<script>
	import headads from '../../wxcomponents/headads/headads.vue'
	import bwSwiper from '../../wxcomponents/bw-swiper/bw-swiper.vue'
	import testype from '../../wxcomponents/testype/testype.vue'
	import bbutton from '../../wxcomponents/bbutton/bbutton.vue'
	import servebutton from '../../wxcomponents/servebutton/servebutton.vue'
	import vipserve from '../../wxcomponents/vipserve/vipserve.vue'
	import comment from '../../wxcomponents/comment/comment.vue'
	import tabbar from '../../wxcomponents/tabbar/tabbar.vue'
	import xswiper from '../../wxcomponents/xswiper/xswiper.vue'
	import quickSelect from '../../wxcomponents/index/quick-select.vue'
	import nearby from '../../wxcomponents/index/nearby.vue'

	export default {
		onLoad() {
			uni.removeStorage({
				key: 'sid',
				success: res => {
					console.log('clear success')
				}
			})
		},
		components: {
			headads,
			bwSwiper,
			testype,
			bbutton,
			servebutton,
			vipserve,
			comment,
			tabbar,
			xswiper,
			quickSelect,
			nearby
		},
		methods: {
			onCode() {
				uni.navigateTo({
					url: '../phone-code/index-code'
				})
			},
			onBusiness() {
				uni.navigateTo({
					url: '../../pages/business/business-login/business-login'
				})
			}
		}
	}
</script>

<style>
	.fixed2 {
		width: 76upx;
		height: 76upx;
		position: absolute;
		top: 20upx;
		right: 44upx;
	}

	.vacol {
		height: 98upx;
		background: #FFFFFF;
	}

	.kf-phone text {
		font-size: 22upx;
		color: #888F97;
	}

	.kf-phone {
		display: flex;
		justify-content: space-around;
		margin-top: 30upx;
		margin-bottom: 50upx;
	}

	.xswiper {
		margin-top: -20upx;
	}

	.bottom {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #F3F3F3;
		height: 134upx;
	}

	.left-text>text {
		color: #888F97;
		font-size: 26upx;
		margin-bottom: 6upx;
	}

	.left>text {
		font-size: 26upx;
		color: #1BBF61;
	}

	.left-text image {
		width: 18upx;
		height: 24upx;
		margin-left: 10upx;
	}

	.left {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.left-text {
		display: flex;
		flex-direction: row;
	}
</style>
