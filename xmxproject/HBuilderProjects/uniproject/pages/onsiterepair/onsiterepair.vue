<template>
	<view class="container">
		<text class="container-title"  >苹果 iPhone7 玫瑰金</text>
		<xlist title="屏幕损坏" price= "499" ></xlist>
		<xlist title="电池不续航" price= "499" ></xlist>
		<!-- 服务费用计算 -->
		<view class="service">
			<text class="service-title">上门服务费：</text>
			<text class="service-price">90元</text>
			<text class="service-kilo">约2km</text>
		</view>
		<view class="line-thick"></view>
		<view class="onsittime">
			<text class="onsittime-text">上门时间</text>
			<text class="onsittime-time">13:30-14:00</text>
			<image src="../../static/wxcomponentimg/arrow@2x.png" mode=""></image>
			<!-- <rattenking-dtpicker /> -->
		</view>
		<view class="info">上门范围：线下门店5km范围内，收费标准为5元/km</view>
		<xlist-input title="姓名：" placeholder="请输入您的姓名"></xlist-input>
		<xlist-input title="手机号：" placeholder="请输入您的手机号"></xlist-input>
		<xlist-input title="验证码：" placeholder="请输入验证码" isShowCode></xlist-input>
		<uni-list>
			<uni-list-item title="地区" subtitle="郫都区" ></uni-list-item>
			<uni-list-item title="街道" subtitle="望丛中路"></uni-list-item>
			<uni-list-item title="详细地址：" ></uni-list-item>
		</uni-list>
		<view class="order-setting">
			<text>设置抢单范围</text>
			<view class="order-setting-right">
				<text>1</text>
				<text>-</text>
				<text class="setting-select">1</text>				
				<text>km</text>
				<image src="../../static/wxcomponentimg/arrow@2x.png" mode=""></image>
			</view>
		</view>
		<text class="setting-info">系统将自动将您的订单推送给设置范围内的服务人员，以保证您的订单第一时间被接收，同时确保您得到高质量的服务。</text>
		<view class="line-thick"></view>
		<view class="text-area">
			<text>故障详情（选填）：</text>
			<textarea value=""  />
		</view>
		<view class="line-thick"></view>
		<view @click="onConfirm" class="container-deal">
			<image v-if="isConfirm" src="../../static/repair/xy-h@2x.png" ></image>
			<image v-else src="../../static/repair/xy@2x.png" ></image>
			<text>
				我已同意
				<text class="deal">《XXXX协议》</text>
			</text>
		</view>
		<view class="xbutton">
			<view @click="onNext" class="xbutton-left">
				会员免费修
			</view>
			<view @click="onOrder" class="xbutton-right">
				<text class="xbutton-right-text">用户特惠修</text>
				<text class="xbutton-rightprice">￥400</text>
			</view>
		</view>
	</view>

</template>

<script>
	import uniList from '../../components/uni-list-c/uni-list.vue';
	import uniListItem from '../../components/uni-list-item-c/uni-list-item.vue';
	import rattenkingDtpicker from '../../components/rattenking-dtpicker/rattenking-dtpicker.vue';
	import xlist from '../../wxcomponents/xlist/xlist.vue';
	import xlistInput from '../../wxcomponents/xlist/xlist-input.vue'
	
	export default {
		data() {
			return {
				isConfirm:false,
				kiloPrice: '￥28',
				isAgreement: true,
				totalPrice: 9827,
				repairList: [{
					title: '屏幕损坏',
					price: '￥499'
				}, {
					title: '电池不续航',
					price: '￥499'
				}]
			}
		},
		components: {
			uniList,
			uniListItem,
			rattenkingDtpicker,
			xlist,
			xlistInput
		},
		methods: {
			onOrderDetail() {
				if (this.isAgreement) {
					uni.navigateTo({
						url: '../orderdetail/orderdetail'
					})
				}
				return
			},
			onConfirm() {
				this.isConfirm = !this.isConfirm
			},
			onNext(){
				if ( this.isConfirm){
					uni.navigateTo({
						url: '../bevip/bevip'
					})
				}
				return
			},
			onOrder(){
				if (this.isConfirm){
					uni.navigateTo({
						url: '../orderdetail/orderdetail'
					})
				}
			}
		}
	}
</script>

<style>
	
		.xbutton-rightprice{
			font-size: 24upx;
			color: #09BA51;
		}
		
		.xbutton-left,
		.xbutton-right{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
		}
		
		.xbutton-right{
			width: 374upx;
			border-top: 1px solid #F3F3F3;
		}
		
		.xbutton-left{
			background: #F2C900;
			color: #FFFFFF;
			width: 376upx;
		}
		
		.xbutton{
			display: flex;
			height: 100upx;
		}
		
		.container-deal{
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 34upx;
			margin-bottom: 24upx;
		}
		
		.deal{
			font-size: 26upx;
			color: #09BA51;
		}
		
		.container-deal image{
			width: 24upx;
			height: 24upx;
			margin-right: 6upx;
		}
		
		.container-deal>text{
			font-size: 26upx;
			color: #888F97;
		}
		
	
	textarea{
		width: 700upx;
		height: 200upx;
	}
	
	.text-area{
		display: flex;
		flex-direction: column;
		margin-top: 30upx;
		margin-left: 26upx;
		margin-right: 26upx;
	}
	
	.text-area text{
		font-size: 30upx;
	}
	
	.setting-info{
		display: block;
		font-size: 24upx;
		color: #888F97;
		margin-left: 26upx;
		margin-right: 26upx;
		margin-bottom: 38upx;
	}
	
	.setting-select{
		width: 60upx;
		height: 44upx;
		border: 1px solid #BCBCBC;
		border-radius: 12upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10upx;
		margin-right: 10upx;
	}
	
	.order-setting-right{
		position: absolute;
		right: 60upx;
	}
	
	.order-setting{
		height: 100upx;
		margin-left: 26upx;
	}
	
	.order-setting,
	.order-setting-right{
		display: flex;
		align-items: center;
	}
	
	.order-setting>text{
		font-size: 30upx
	}
	.order-setting-right image{
		width: 18upx;
		height: 24upx;
		position: absolute;
		right: -26upx;
	}
	.order-setting-right text{
		font-size: 26upx;
	}
	
	.info{
		font-size: 24upx;
		color: #888F97;
		background: #F3F3F3;
		width: 750upx;
		height: 52upx;
		display: flex;
		align-items: center;
		padding-left: 46upx;
	}
	
	.onsittime{
		display: flex;
		align-items: center;
		height: 120upx;
		/* border-bottom: 1px solid #F3F3F3; */
	}
	
	.onsittime image{
		width: 12upx;
		height: 24upx;
		position: absolute;
		right: 28upx;
	}
	.onsittime-time{
		position: absolute;
		right: 80upx;
	}
	
	.onsittime text{
		font-size: 30upx;
		margin-left: 26upx;
	}
	
	.service{
		display: flex;
		align-items: center;
		height: 120upx;
	}
	
	.service-price{
		font-size: 26upx;
	}
	
	.service-title{
		font-size: 30upx;
		margin-left: 26upx;
		margin-right: 10upx;
	}
	.service-kilo{
		font-size: 26upx;
		color: #888F97;
		position: absolute;
		right: 26upx;
	}
	
	.container-title{
		font-size: 32rpx;
		font-weight: bold;
		margin-top: 38upx;
		padding-left: 26upx;
		padding-bottom: 42upx;
		display: flex;
		border-bottom: 1px solid #F3F3F3;
	}
</style>
