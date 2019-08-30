<template>
	<view class="container">
		<picker mode="region" @change="onChange" @cancel="onCancel">
			<view class="picker">
				<view>地区</view>
				<view class="picker-right">
					<view>{{address}}</view>
					<image src="../../static/wxcomponentimg/arrow@2x.png"></image>
				</view>
			</view>
		</picker>
	</view>
</template>

<script>
	import amap from '../../common/amap-wx.js'
	export default {
		name:'xlocation',
		data() {
			return {
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
				        console.log(res[0].regeocodeData.addressComponent)
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
				console.log(e.detail.value[0])
				this.city = e.detail.value[1]
				this.district = e.detail.value[2]
				this.address = this.province + this.city + this.district
			},
			onCancel(e){
				this.getRegeo()
			}
		}
	}
</script>
		
<style>
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
	}
	
	.picker-right view{
		font-size: 30upx;
		margin-right: 18upx;
	}
	
	.picker-right{
		display: flex;
		align-items: center;
		position: absolute;
		right: 26upx;
	}
</style>
