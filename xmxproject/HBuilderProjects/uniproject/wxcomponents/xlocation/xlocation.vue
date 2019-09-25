<template>
	<view class="container" @click="onProvince">
		<picker mode="region" @change="onChange" @cancel="onCancel">
			<view class="picker">
				<view>地区</view>
				<view class="picker-right">
					<view>{{address}}</view>
					<image src="../../static/wxcomponentimg/arrow@2x.png"></image>
				</view>
			</view>
		</picker>
		<view v-if="isAddress" class="content-street">
			<view class="content-street-left">街道</view>
			<view class="content-street-right">
				<input type="text" :value="township" @input="bindTownShip" />
				<image src="../../static/wxcomponentimg/arrow@2x.png"></image>
			</view>
		</view>
		<view v-if="isAddress" class="container-input-address">
			<text>详细地址：</text>
			<input @input="onAddress" type="text" class="input-address" />
		</view>
		<view v-if="isAddress" class="line-thick"></view>
	</view>
</template>

<script>
	import amap from '../../common/amap-wx.js'
	export default {
		name:'xlocation',
		props:{
			isAddress:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				detailAddress:'',
				province:'',
				city:'',
				district:'',
				township:'',
				amapPlugin: null,  
				key: 'f97ec3f47e09d39567de678870baa690',
				address: '',
				currentProvience:'',
				currentCity:'',
				currentDistrict:''
			}
		},
		created() {
			this.amapPlugin = new amap.AMapWX({
			            key: this.key
			})
			this.getRegeo()
		},
		methods:{
			getRegeo(){
				uni.showLoading({  
					title: '获取信息中'  
				})
				this.amapPlugin.getRegeo({  
				    success: res => {  
				        // console.log(res[0].regeocodeData.addressComponent)
				        this.province = res[0].regeocodeData.addressComponent.province
						this.city = res[0].regeocodeData.addressComponent.city
						this.district = res[0].regeocodeData.addressComponent.district
						this.township = res[0].regeocodeData.addressComponent.township
				        uni.hideLoading()
						this.address = this.province + this.city + this.district
				    }  
				})
			},
			onChange(e){
				this.province = e.detail.value[0]
				// console.log(e.detail.value[0])
				this.city = e.detail.value[1]
				this.district = e.detail.value[2]
				this.address = this.province + this.city + this.district
			},
			onCancel(e){
				this.getRegeo()
			},
			onProvince(){
				this.$emit('district',{
					city: this.city,
					district:this.district,
					township:this.township
				})
			},
			onAddress(e){
				this.detailAddress = e.detail.value
				this.$emit('detailAddress',{
					detailAddress:this.detailAddress
				})
			},
			bindTownShip(e){
				this.township = e.detail.value
				this.$emit('township',{
					township: this.township
				})
			}
		}
	}
</script>
		
<style>
	.container-input-address text {
		font-size: 30upx;
	}
	
	.container-input-address {
		display: flex;
		margin-left: 26upx;
		margin-top: 40upx;
		margin-bottom: 120upx;
	}
	
	.container{
		display: flex;
		flex-direction: column;
	}
	
	.picker{
		display: flex;
		flex-direction: row;
		height: 120upx;
		align-items: center;
		margin-left: 26upx;
		margin-right: 26upx;
		border-bottom: 2px solid #EEEEEE;
	}
	
	.picker view{
		font-size: 30upx;
	}
	
	.picker image{
		width:18upx;
		height: 30upx;
		margin-left: 26upx;
	}
	
	.picker-right view{
		font-size: 30upx;
	}
	
	.picker-right{
		display: flex;
		align-items: center;
		position: absolute;
		right: 26upx;
	}
	
	.content-street{
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 120upx;
		width: 698upx;
		margin-left: 26upx;
		border-bottom: 2px solid #EEEEEE;
	}
	
	.content-street-right{
		display: flex;
		flex-direction: row;
		align-items: center;
		position: absolute;
		right: 26upx;
	}
	
	.content-street-left,
	.content-street-right input{
		font-size: 30upx;
		width: 360upx;
		position: relative;
		right: 0upx;
	}

	.content-street-right input{
		direction: rtl;
		margin-right: 26upx;
	}

	.content-street-right image{
		width: 18upx;
		height: 30upx;
	}
	
</style>
