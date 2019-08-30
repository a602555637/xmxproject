<template>
	<view>
		<headads title="今日换屏5折起"></headads>
		<view class="xswiper">
		<xswiper></xswiper>
		</view>
		<testype></testype>
		<bbutton></bbutton>
		<quick-select></quick-select>
		<servebutton></servebutton>
		<vipserve></vipserve>
		<comment></comment>
		<view class="bottom">
			<view class="left">
				<view class="left-text">
					<text>服务用户</text>
					<image src="../../static/wxcomponentimg/up@2x.png"></image>
				</view>
				<text>2465</text>
			</view>
			<view class="left">
				<view class="left-text">
					<text>维修设备</text>
					<image src="../../static/wxcomponentimg/up@2x.png"></image>
				</view>
				<text>2575</text>
			</view>
			<view class="left">
				<view class="left-text">
					<text>好评度</text>
					<image src="../../static/wxcomponentimg/up@2x.png"></image>
				</view>
				<text>98%</text>
			</view>
		</view>
		<view @click="onCode" class="kf-phone">
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
	
	export default {
		data() {
			return {
				swiperList: [{
					id: 4,
					type: 'image',
					img: '../../static/banner/banner1@2x.png',
				},{
					id: 4,
					type: 'image',
					img: '../../static/banner/banner2@2x.png',
				},{
					id: 4,
					type: 'image',
					img: '../../static/banner/banner3@2x.png',
				},{
					id: 4,
					type: 'image',
					img: '../../static/banner/banner4@2x.png',
				}],
				serviceItem1: [{
					img: '../../static/service-icon/kjwx@2x.png',
					text: '快捷维修'
				}, {
					img: '../../static/service-icon/ncsj@2x.png',
					text: '内存升级'
				}, {
					img: '../../static/service-icon/ghpj@2x.png',
					text: '更换配件'
				}, {
					img: '../../static/service-icon/sjdc@2x.png',
					text: '数据导出'
				}],
				serviceItem2: [{
					img: '../../static/service-icon/qjby@2x.png',
					text: '清洁保养'
				}, {
					img: '../../static/service-icon/xtsj@2x.png',
					text: '系统刷机'
				}, {
					img: '../../static/service-icon/sjtm@2x.png',
					text: '手机贴膜'
				}, {
					img: '../../static/service-icon/yjhs@2x.png',
					text: '一键回收'
				}],

				title: 'Hello',
				ads: '今日换屏5折起',
			}

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
			quickSelect
		},
		methods:{
			onCode(){
				uni.navigateTo({
					url: '../phone-code/index-code',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.vacol{
		height: 98upx;
		background: #FFFFFF;
	}
	
	.kf-phone text{
		font-size: 22upx;
		color: #888F97;
	}
	
	.kf-phone{
		display: flex;
		justify-content: space-around;
		margin-top: 30upx;
		margin-bottom: 50upx;
	}
	
	.xswiper{
		margin-top: -20upx;
	}
		
	.bottom{
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #F3F3F3;
		height: 134upx;
	}
	
	.left-text>text{
		color: #888F97;
		font-size: 26upx;
		margin-bottom: 6upx;
	}
	
	.left>text{
		font-size: 26upx;
		color:#1BBF61;
	}
	
	.left-text image{
		width: 18upx;
		height: 24upx;
		margin-left: 10upx;
	}
	
	.left{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.left-text{
		display: flex;
		flex-direction: row;
	}
</style>
