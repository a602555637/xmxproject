<template>
	<view class="container">
		<text class="container-title">苹果 iPhone7 玫瑰金</text>
		<xlist title="屏幕损坏" price="499"></xlist>
		<xlist title="电池不续航" price="499"></xlist>
		<!-- 服务费用计算 -->
		<view class="service">
			<text class="service-title">上门服务费：</text>
			<text v-if="kiloPrice == null" class="service-price">5元</text>
			<text v-else class="service-price">{{kiloPrice}}元</text>
			<text class="service-kilo">{{kiloValue}} km</text>
		</view>
		<view class="line-thick"></view>
		<view class="onsittime">
			<text class="onsittime-text">上门时间</text>
			<!-- <text class="onsittime-time">13:30-14:00</text> -->
			<picker class="onsittime-time" mode="multiSelector" @cancel="onCancel" @change="bindPickerChange" :range="dateItem">
				<view v-if="isChange">{{currentDate}} 日 {{currentHour}} : {{currentMinutes}}</view>
				<!-- <view v-else>{{currentDate}} 日 {{currentHour}} : {{currentMinutes}}</view> -->
			</picker>
			<image src="../../static/wxcomponentimg/arrow@2x.png" mode=""></image>
			<!-- <rattenking-dtpicker /> -->
		</view>
		<view class="info">上门范围：线下门店5km范围内，收费标准为5元/km</view>
		<xlist-input title="姓名：" placeholder="请输入您的姓名"></xlist-input>
		<xlist-input title="手机号：" placeholder="请输入您的手机号"></xlist-input>
		<xlist-input title="验证码：" placeholder="请输入验证码" isShowCode></xlist-input>
		<uni-list>
			<uni-list-item @click="onGetLocation" title="地区" :subtitle="province + city + district"></uni-list-item>
			<uni-list-item title="街道" :subtitle="township"></uni-list-item>
			<uni-list-item title="详细地址："></uni-list-item>
		</uni-list>
		<view class="order-setting">
			<text>设置抢单范围</text>
			<view class="order-setting-right">
				<!-- 				<text>1</text>
				<text>-</text> -->
				<uni-number-box @change="onNumber" value="1" class="uni-number-box" :min="1" :max="5"></uni-number-box>

				<!-- <text class="setting-select">1</text> -->
				<text>km</text>
				<!-- <image src="../../static/wxcomponentimg/arrow@2x.png" mode=""></image> -->
			</view>
		</view>
		<text class="setting-info">系统将自动将您的订单推送给设置范围内的服务人员，以保证您的订单第一时间被接收，同时确保您得到高质量的服务。</text>
		<view class="line-thick"></view>
		<view class="text-area">
			<text>故障详情（选填）：</text>
			<textarea value="" />
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
			<view class="xbutton-left">
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
	import amap from '../../common/amap-wx.js'
	
	import uniList from '../../components/uni-list-c/uni-list.vue';
	import uniListItem from '../../components/uni-list-item-c/uni-list-item.vue';
	import rattenkingDtpicker from '../../components/rattenking-dtpicker/rattenking-dtpicker.vue';
	import xlist from '../../wxcomponents/xlist/xlist.vue';
	import xlistInput from '../../wxcomponents/xlist/xlist-input.vue';
	import uniNumberBox from '../../components/uni-number-box/uni-number-box.vue'
	
	export default {
		data() {
			return {
				province:'',
				city:'',
				district:'',
				township:'',
				amapPlugin: null,  
				key: 'f97ec3f47e09d39567de678870baa690' ,
				isChange:true,
				currentMinutes:10,
				currentHour:10,
				currentDate:12,
				dateItem:[['日期','01','02','03','04','05','06','07','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
							['小时','08','09',10,11,12,13,14,15,16,17,18,19,20],
							['分钟',10,20,30,40,50]],
				kiloValue:'1',
				isConfirm:false,
				kiloPrice: '5',
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
			xlistInput,
			uniNumberBox
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
			},
			onNumber(kiloValue){
				this.kiloValue = kiloValue
				this.onPrice(kiloValue)
			},
			onPrice(kiloValue){
				this.kiloPrice = kiloValue * 5
			},
			bindPickerChange(e){
				console.log(e.detail.value)
				let nums = e.detail.value
				if ( nums[0] == 0 ){
					return this.currentDate
				}else{
					let dayItem = this.dateItem[0]
					this.currentDate = dayItem[nums[0]]
				}
				
				if( nums[1] == 0){
					return this.currentHour
				}else{
					let hourItem = this.dateItem[1]
					this.currentHour = hourItem[nums[1]]
				}
				
				if( nums[2] == 0 ){
					return this.currentMinutes
				}else{
					let minutesItem = this.dateItem[2]
					this.currentMinutes = minutesItem[nums[2]]
				}
				
				
				// this.currentDate = e.detail.value[0]
				// this.currentHour = e.detail.value[1]
				// this.currentMinutes = e.detail.value[2]
			},
			getDate(){
				const date = new Date()
				let day = date.getDate()
				let hour = date.getHours()
				let minutes = date.getMinutes()
				this.currentDate = day
				this.currentHour = hour
				this.currentMinutes = minutes
			},
			onDateItem(){
				// console.log(this.currentDate)
				let abRtc = this.dateItem[0].splice(0,1) + ',' + this.dateItem[0].splice(this.currentDate - 2,29)
				// console.log(abRtc.split(','))
				this.dateItem[0] = abRtc.split(',')
			},
			onCancel(){
				this.getDate()
			},
			getRegeo(){
				uni.showLoading({  
					title: '获取信息中'  
				})
				this.amapPlugin.getRegeo({  
				    success: res => {  
				        console.log(res[0].regeocodeData.addressComponent)
				        this.province = res[0].regeocodeData.addressComponent.province
						this.city = res[0].regeocodeData.addressComponent.city
						this.district = res[0].regeocodeData.addressComponent.district
						this.township = res[0].regeocodeData.addressComponent.township
				        uni.hideLoading()
				    }  
				})
			},
			onGetLocation(){
				
			}
		},
		onLoad() {
			this.onNumber()
			this.getDate()
			this.onDateItem()
			this.amapPlugin = new amap.AMapWX({  
			            key: this.key
			})
			this.getRegeo()
		}
	}
</script>

<style>
	.uni-number-box{
		width: 180upx;
		height: 44upx;
		margin-top: -6upx;
	}
	
	
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
		font-size: 30upx;
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
