<template>
	<view class="container">
		<map @click="bindClose" @callouttap="bindOpenPopup" id="myMap" :latitude="latitude" 
		:longitude="longitude" :markers="content" @markertap="bindMarker"
		 show-location></map>
		<!-- <uni-popup msg="123" ref="popup" :show="true" type="bottom"></uni-popup> -->
		<view v-if="isShow" class="popup-class">
			<view class="popup-top">
				<image class="avatar" src="../../static/wxcomponentimg/avatar@2x.png"></image>
				<view class="popup-title">
					<text class="title">{{storeName}}</text>
					<text class="desc">距您约{{distance}}米&nbsp&nbsp&nbsp{{area + street + detail_address}}</text>
				</view>
			</view>
			<view class="rate">
				<uni-rate disabled :value="star"></uni-rate>
			</view>
			<view class="button">
				<view class="button-left">联系商家</view>
				<view @click="bindRepair" class="button-right">去维修</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	import uniRate from '../../components/uni-rate/uni-rate.vue'

	export default {
		onReady() {
			uni.getLocation({
				type: 'wgs84',
				success: res => {
					console.log(res)
					this.latitude = res.latitude
					this.longitude = res.longitude
				}
			})
		},
		onLoad() {
			uni.request({
				url: 'https://www.finetwm.com/xmRepair/shopInfo/nearbyShops',
				method: 'GET',
				data: {
					latitude: 30.79278,
					longitude: 103.899402
				},
				success: res => {
					console.log(res.data.data)
					this.content = res.data.data
					for (let i = 0; i < this.content.length; i++) {
						this.$set(this.content[i], 'id', i)
						this.$set(this.content[i], 'iconPath', '../../static/wxcomponentimg/dw@2x.png')
						this.$set(this.content[i], 'width', 60)
						this.$set(this.content[i], 'height', 60)
						this.$set(this.content[i], 'label',{
							content: this.content[i].name,
							fontSize: 16
						})
						this.$set(this.content[i], 'callout', {
							padding: 12,
							borderRadius: 12,
							content: this.content[i].name,
							fontSize: 16,
							color: '#ffffff',
							bgColor: '#51D587'
						})
					}
				},
				fail: err => {
					console.log(err)
				}
			})
		},
		data() {
			return {
				star:'',
				area:'',
				street:'',
				detail_address:'',
				distance:'',
				storeName:'',
				content:[],
				isShow:false,
				latitude: 30.79278,
				longitude: 103.90256,
			}
		},
		methods: {
			bindRepair(){
				uni.navigateTo({
					url: '../selectmodel/selectmodel'
				})
			},
			bindClose(){
				this.isShow = false
			},
			bindOpenPopup() {
				// this.$refs.popup.open()
				this.isShow = true
			},
			bindMarker(e){
				this.isShow = true
				let s = e.markerId
				this.star = this.content[s].star
				this.area = this.content[s].area
				this.street = this.content[s].street
				this.detail_address = this.content[s].detail_address
				this.distance = this.content[s].distance
				this.storeName = this.content[s].name
			}
		},
		components: {
			uniPopup,
			uniRate
		},
	}
</script>

<style>
	.button-left{
		border: 1px solid #EEEEEE;
	}
	
	.button-right{
		background: #09BA51;
		color: #FFFFFF;
	}
	
	.button-left,
	.button-right{
		width: 320upx;
		height: 80upx;
		font-size: 26upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 12upx;
	}
	
	.button{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 60upx;
		margin-bottom: 60upx;
	}
	
	.rate{
		margin-left: 126upx;
	}
	
	.popup-top{
		display: flex;
		flex-direction: row;
		margin-left: 26upx;
		margin-top: 34upx;
	}
	
	.popup-title{
		display: flex;
		flex-direction: column;
	}
	
	.title{
		font-size: 32upx;
		font-weight: bold;
		margin-bottom: 6upx;
	}
	
	.desc{
		font-size: 26upx;
	}
	
	.avatar {
		width: 80upx;
		height: 80upx;
		margin-right: 20upx;
	}
	
	.popup-class {
		width: 100%;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
	}

	map {
		width: 100%;
		height: 1206upx;
	}
</style>
