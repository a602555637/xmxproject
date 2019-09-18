<template>
	<view class="container">
		<text class="container-title">{{brand + ' ' + model + ' ' + colorName}}</text>
		<xlist :title="repairList[0]" :price="sprice[0]"></xlist>
		<xlist v-if="repairList[1]" :title="repairList[1]" :price="sprice[1]"></xlist>
		<xlist v-if="repairList[2]" :title="repairList[2]" :price="sprice[2]"></xlist>
		<xlist v-if="repairList[3]" :title="repairList[3]" :price="sprice[3]"></xlist>
		<xlist v-if="repairList[4]" :title="repairList[4]" :price="sprice[4]"></xlist>
		<xlist-price title="合计：" :price="totalPrice"></xlist-price>
		<view class="line-thick"></view>
		
		<xlocation @district="bindDistrict" :isAddress="isAddress"></xlocation>
		
		<picker mode="selector" :value="index" :range="range" @change="bindPickerChange">
			<view class="picker-class">
				<text>维修中心</text>
				<view class="picker-right">
					<text>{{rangeText}}</text>
					<image src="../../static/wxcomponentimg/arrow@2x.png"></image>
				</view>
			</view>
		</picker>
		
		<!-- 到店时间 -->
		<view class="onsittime">
			<text class="onsittime-text">到店时间</text>
			<picker class="onsittime-time" mode="multiSelector" @cancel="onCancel" @change="bindPickerC" :range="dateItem">
				<view v-if="isChange">{{currentDate}} 日 {{currentHour}} : {{currentMinutes}}</view>
			</picker>
			<image src="../../static/wxcomponentimg/arrow@2x.png" mode=""></image>
		</view>
		
		<view class="line-thick"></view>
		
		<xlist-input @inputValue="bindInputName"></xlist-input>
		<xlist-input @inputValue="bindInputNumber" title="手机号：" placeholder="请输入您的手机号" typeStyle="number"></xlist-input>
		
		<getcode @phoneCode="bindPhoneCode" @scode="bindScode" :orderNum="orderNum"></getcode>
		
		<view class="line-thick"></view>
		<view class="text-area">
			<text>故障详情（选填）：</text>
			<textarea @input="bindText"  />
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
	import xlist from '../../wxcomponents/xlist/xlist.vue'
	import xlistPrice from '../../wxcomponents/xlist/xlistPrice.vue'
	import uniList from '../../components/uni-list-c/uni-list.vue'
	import uniListItem from '../../components/uni-list-item-c/uni-list-item.vue'
	import xlistInput from '../../wxcomponents/xlist/xlist-input.vue'
	import xlocation from '../../wxcomponents/xlocation/xlocation.vue'
	import getcode from '../../wxcomponents/getcode/getcode.vue'
	
	export default {
		data() {
			return {
				scode:'',
				phoneCode:'',
				isChange:true,
				dateItem:[['日期','01','02','03','04','05','06','07','09',10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
							['小时','08','09',10,11,12,13,14,15,16,17,18,19,20],
							['分钟',10,20,30,40,50]],
				currentDate:'',
				currentHour:'',
				currentMinutes:'',
				date:'',
				details:'',
				district:'',
				repairList:[],
				totalPrice:'',
				openId:'',
				orderNum:'',
				orderName:'',
				sprice:'',
				faulesTitle:'',
				colorName:'',
				model:'',
				brand:'',
				rangeText:'郫都区总店',
				range:['郫都区总店','郫都区一分店','郫都区二分店'],
				isAddress:false,
				isConfirm:false
			}
		},
		methods: {
			bindScode(e){
				this.scode = e.scode
			},
			bindPhoneCode(e){
				this.phoneCode = e.phoneCode
			},
			bindInputName(e){
				this.orderName = e
			},
			bindInputNumber(e){
				this.orderNum = e
			},
			getDate(){
				const date = new Date()
				let day = date.getDate()
				let hour = date.getHours()
				let minutes = date.getMinutes()
				this.currentDate = day
				this.currentHour = hour
				this.currentMinutes = minutes
				let newdate = date.toLocaleString('chinese', { hour12: false })
				this.dateFmt(newdate)
			},
			bindPickerC(e){
				// console.log(e.detail.value)
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
				this.dateFmt(this.date)
			},
			bindText(e){
				this.details = e.detail.value
			},
			bindDistrict(e){
				this.district = e.district + e.township + e.detailAddress
			},
			bindPickerChange(e){
				this.rangeText = this.range[e.detail.value]
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
				if(!this.orderName){
					uni.showToast({
						title: '请输入姓名',
						icon: 'none'
					})
				} else if(!this.orderNum){
					uni.showToast({
						title: '请输入手机号码',
						icon: 'none'
					})
				} else if(!this.isConfirm){
					uni.showToast({
						title: '请同意协议',
						icon: 'none'
					})
				} else if(this.phoneCode !== this.scode){
					uni.showToast({
						title: '验证码不正确',
						icon:'none'
					})
				} else {
					uni.request({
						url: 'https://www.finetwm.com/xmRepair/order/saveUserOrder',
						method: 'POST',
						data:{
							details: this.details,
							price: this.totalPrice,
							userId: this.openId,
							userName: this.orderName,
							userPhone: this.orderNum,
							userAddress: this.district,
							serviceMode: 1,
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
						success: res => {
							uni.reLaunch({
								url: '../orderdetail/orderdetail',
								success:res =>{
									console.log('success')
								}
							})
						},
						fail: err => {
							console.log(err)
						}
					})
				}
			},
			dateFmt(value){
				if(null !== value && '' != value){
					let date = new Date(value)
					let y = date.getFullYear()
					let m = date.getMonth() + 1
					let hour = date.getHours()
					let minutes = date.getMinutes()
					if(m < 10){
						m = '0' + m
					}
					let d = date.getDate()
					if(d < 10){
						d = '0' + d
					}
					let abs =  y + '.' + m + '.' + this.currentDate + ' ' + this.currentHour + ':' + this.currentMinutes
					this.date = abs
				} else {
					console.log('fail')
				}
			}
		},
		onLoad() {
			this.getDate()
			const date = new Date()
			let newdate = date.toLocaleString('chinese', { hour12: false })
			this.date = newdate
			
			
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
				key:'openId',
				success:res=>{
					this.openId = res.data
				}
			})
			uni.getStorage({
				key:'totalPrice',
				success:res=>{
					this.totalPrice = res.data 
				}
			})
		},
		components: {
			xlist,
			xlistPrice,
			uniList,
			uniListItem,
			xlistInput,
			xlocation,
			getcode
		}
	}
</script>

<style>
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
	
	.picker-class{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 698upx;
		height: 120upx;
		border-bottom: 1px solid #EEEEEE;
		margin-left: 26upx;
		font-size: 30upx;
	}
	
	.picker-right{
		display: flex;
		position: absolute;
		align-items: center;
		right: 26upx;
	}
	
	.picker-right image{
		width: 18upx;
		height: 30upx;
		margin-left: 40upx;
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
