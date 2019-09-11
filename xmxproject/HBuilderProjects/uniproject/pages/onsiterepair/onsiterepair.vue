<template>
	<view class="container">
		<text class="container-title">苹果 iPhone7 玫瑰金</text>
		<xlist :title="repairList[0]" :price="sprice[0]"></xlist>
		<xlist v-if="repairList[1]" :title="repairList[1]" :price="sprice[1]"></xlist>
		<xlist v-if="repairList[2]" :title="repairList[2]" :price="sprice[2]"></xlist>
		<xlist v-if="repairList[3]" :title="repairList[3]" :price="sprice[3]"></xlist>
		<!-- 服务费用计算 -->
		<view class="service">
			<text class="service-title">上门服务费：</text>
			<text v-if="kiloPrice == null" class="service-price">5元</text>
			<text v-else class="service-price">{{kiloPrice}}元</text>
			<text class="service-kilo">{{kiloValue}} km</text>
		</view>
		
		
		<xlist-price title="合计：" :price="totalPrice"></xlist-price>
		<view class="line-thick"></view>
		
		
		<view class="onsittime">
			<text class="onsittime-text">上门时间</text>
			<picker class="onsittime-time" mode="multiSelector" @cancel="onCancel" @change="bindPickerChange" :range="dateItem">
				<view v-if="isChange">{{currentDate}} 日 {{currentHour}} : {{currentMinutes}}</view>
			</picker>
			<image src="../../static/wxcomponentimg/arrow@2x.png" mode=""></image>
		</view>
		<view class="info">上门范围：线下门店5km范围内，收费标准为5元/km</view>
		<!-- code input -->
		<xlist-input></xlist-input>
		<getcode timer="timer" :title="title"></getcode>
		<!-- 地区 -->
		<xlocation @district="bindDistrict"></xlocation>
		<view class="order-setting">
			<text>设置抢单范围</text>
			<view class="order-setting-right">
				<uni-number-box @change="onNumber" value="1" class="uni-number-box" :min="1" :max="5"></uni-number-box>
				<text>km</text>
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
				<text class="xbutton-right-price">￥400</text>
			</view>
		</view>
	</view>
</template>

<script>
	import amap from '../../common/amap-wx.js'
	import xlocation from '../../wxcomponents/xlocation/xlocation.vue'
	import uniList from '../../components/uni-list-c/uni-list.vue';
	import uniListItem from '../../components/uni-list-item-c/uni-list-item.vue';
	import rattenkingDtpicker from '../../components/rattenking-dtpicker/rattenking-dtpicker.vue';
	import xlist from '../../wxcomponents/xlist/xlist.vue';
	import xlistInput from '../../wxcomponents/xlist/xlist-input.vue';
	import xlistPrice from '../../wxcomponents/xlist/xlistPrice.vue'
	import uniNumberBox from '../../components/uni-number-box/uni-number-box.vue'
	import getcode from '../../wxcomponents/getcode/getcode.vue'
	import request from '../../components/pocky-request/index.js'
	
	const formatDate = require('../../util/util.js')
	export default {
		data() {
			var dateObj = new Date()
			var currentTime = dateObj.getTime()
			var timer = formatDate.formatDateTime((currentTime + 1000 * 2000))
			return {
				date:'',
				orderNum:'',
				orderName:'',
				sprice:[],
				brand:'',
				model:'',
				colorName:'',
				repairList: [],
				orderInfo:'orderInfo',
				timer:timer,
				title:'验证码：',
				province:'',
				city:'',
				district:'',
				township:'',
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
				totalPrice: 0
			}
		},
		components: {
			uniList,
			uniListItem,
			rattenkingDtpicker,
			xlist,
			xlistInput,
			uniNumberBox,
			getcode,
			xlocation,
			xlistPrice,
			request
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
					const instance = new request()
					const r = instance.post({
						url:'order/saveUserOrder',
						data:{
							distance : this.kiloValue,
							price: this.totalPrice,
							userId: openid,
							userName: this.orderName,
							userPhone: this.orderNum,
							userAddress: this.district,
							serviceMode: 0,
							serviceTime: this.date,
							phone:{     
					            brand: this.brand,
					            model: this.model,
					            colour: this.colorName
					        },
							faults: [
					            {
					                faults: this.repairList[0],
					                price: this.sprice[0]
					            },
					            {
					                faults: this.repairList[1],
					                price: this.sprice[1]
					            }
					        ]
						},
						success:res=>{
							console.log(res)
							// uni.reLaunch({
							// 	url: '../orderdetail/orderdetail',
							// 	success:res =>{
							// 		console.log('success')
							// 	}
							// })
						}
					})
			},
			onNumber(kiloValue){
				this.kiloValue = kiloValue
				this.onPrice(kiloValue)
			},
			onPrice(kiloValue){
				this.kiloPrice = kiloValue * 5
				uni.getStorage({
					key:'totalPrice',
					success:res=>{
						this.totalPrice = res.data 
						this.totalPrice = this.totalPrice + this.kiloPrice
					}
				})
				
				
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
			},
			getDate(){
				const date = new Date()
				let day = date.getDate()
				let hour = date.getHours()
				let minutes = date.getMinutes()
				this.currentDate = day
				this.currentHour = hour
				this.currentMinutes = minutes
				
				let  newdate = date.toLocaleString('chinese', { hour12: false })
				this.date = newdate
			},
			onDateItem(){
				let abRtc = this.dateItem[0].splice(0,1) + ',' + this.dateItem[0].splice(this.currentDate - 2,29)
				this.dateItem[0] = abRtc.split(',')
			},
			onCancel(){
				this.getDate()
			},
			getStorage(){
				uni.getStorage({
					key: 'totalPrice',
					success: res=>{
						console.log(res.data)
						this.totalPrice = res.data + 5
					}
				})
			},
			bindDistrict(e){
				this.district = e.district + e.township + e.detailAddress
			}
		},
		onLoad() {
			uni.getStorage({
				key:'brand',
				success:res=>{
					this.brand = res.data
				}
			})
			uni.getStorage({
				key:'model',
				success:res=>{
					this.model = res.data
				}
			})
			uni.getStorage({
				key:'colorName',
				success:res=>{
					this.colorName = res.data
				}
			})
			uni.getStorage({
				key:'faulesTitle',
				success:res=>{
					this.repairList = res.data
				}
			})
			uni.getStorage({
				key:'sprice',
				success:res=>{
					this.sprice = res.data
				}
			})
			uni.getStorage({
				key:'orderName',
				success:res=>{
					this.orderName = res.data
				}
			})
			uni.getStorage({
				key:'orderNum',
				success:res=>{
					this.orderNum = res.data
				}
			})
			this.onNumber()
			this.getDate()
			this.onDateItem()
			this.getStorage()
		}
	}
</script>

<style>
	.uni-number-box{
		width: 180upx;
		height: 44upx;
		margin-top: -6upx;
	}
	
	
	.xbutton-right-price{
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
		/* width: 750upx; */
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
		border-bottom: 1px solid #EEEEEE;
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
