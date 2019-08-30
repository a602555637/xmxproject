<template>
	<view class="">
		<!-- name -->
		<view class="container-input">
			<text>店铺名称：</text>
			<input @input="onName" type="text" placeholder="请输入店铺名称" placeholder-class="placeholder-class" />
		</view>
		<!-- manager -->
		<view class="container-input">
			<text>负责人：</text>
			<input @input="onManager" type="text" placeholder="请输入负责人姓名" placeholder-class="placeholder-class" />
		</view>
		<!-- phone -->
		<view class="container-input">
			<text>手机号：</text>
			<input @input="onPhone" type="text" placeholder="请输入负责人手机号" placeholder-class="placeholder-class" />
		</view>
		<!-- getcode -->
		<getcode timer="timer" :title="title"></getcode>

		<view class="line-thick"></view>
		<!-- 地区 -->
		<uni-list>
			<uni-list-item @click="onGetLocation" title="地区" :subtitle="province + city + district"></uni-list-item>
			<uni-list-item title="街道" :subtitle="township"></uni-list-item>
		</uni-list>
		
		<!-- detail_address -->
		<view class="container-input-address">
			<text>详细地址：</text>
			<input @input="onAddress" type="text" class="input-address" />
		</view>

		<xlocation></xlocation>
		<view class="line-thick"></view>
		<!-- type -->
		<view class="container-input">
			<picker class="business-picker" mode="selector" value="index" :range="businessType" @change="onType">
				<view class="business-title">企业类型</view>
				<view class="business-item">
					<text class="list-item-desc">{{businessTypeItem}}</text>
					<image class="right-arrow" src="../../static/wxcomponentimg/arrow@2x.png"></image>
				</view>
			</picker>
		</view>
		<!-- repair_type -->
		<view class="container-input">
			<picker class="business-picker" mode="selector" value="index" :range="repairType" @change="onRepairType">
				<view class="business-title">服务类型</view>
				<view class="business-item">
					<text class="list-item-desc">{{repairTypeItem}}</text>
					<image class="right-arrow" src="../../static/wxcomponentimg/arrow@2x.png"></image>
				</view>
			</picker>

		</view>

		<view @click="onSave" class="container-button">保存</view>

	</view>
</template>

<script>
	import uniList from '../../components/uni-list-c/uni-list.vue'
	import uniListItem from '../../components/uni-list-item-c/uni-list-item.vue'
	import amap from '../../common/amap-wx.js'
	import getcode from '../../wxcomponents/getcode/getcode.vue'
	import xlocation from '../../wxcomponents/xlocation/xlocation.vue'
	
	
	const formatDate = require('../../util/util.js')
	export default {
		onLoad() {
			this.amapPlugin = new amap.AMapWX({
			            key: this.key
			})
			this.getRegeo()
		},
		data() {
			var dateObj = new Date()
			var currentTime = dateObj.getTime()
			var timer = formatDate.formatDateTime((currentTime + 1000 * 2000))
			return {
				province:'',
				city:'',
				district:'',
				township:'',
				amapPlugin: null,  
				key: 'f97ec3f47e09d39567de678870baa690',
				timer: timer,
				title: '验证码：',
				name: '',
				manager: '',
				phone: '',
				area: '',
				street: '',
				detail_address: '',
				businessTypeItem: '个人',
				repairTypeItem: '上门维修',
				businessType: [
					'个人', '公司'
				],
				repairType: [
					'上门维修', '到店维修'
				],
				index: 0
			}
		},
		methods: {
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
			onSave() {
				this.onPost()
				uni.showToast({
					title: '保存成功'
				})
				setTimeout(() => {
					uni.hideToast()
					uni.navigateTo({
						url: 'upload-photo'
					})
				}, 2000)

			},
			onType(e) {
				// console.log(e.detail.value)
				let num = e.detail.value
				this.businessTypeItem = this.businessType[num]
			},
			onRepairType(e) {
				let num = e.detail.value
				this.repairTypeItem = this.repairType[num]
			},
			onName(e) {
				this.name = e.detail.value
			},
			onManager(e) {
				this.manager = e.detail.value
			},
			onPhone(e) {
				this.phone = e.detail.value
			},
			onArea(e) {
				this.area = e.detail.value
			},
			onStreet(e) {
				this.street = e.detail.value
			},
			onAddress(e) {
				this.detail_address = e.detail.value
			},
			onPost() {
				// uni.request({
				// 	url:'https://120.24.180.246:8080/xmRepair/shopInfo/add',
				// 	data:{
				// 		name: this.name,
				// 		manager:this.manager,
				// 		phone:this.phone,
				// 		area:this.area,
				// 		street:this.street,
				// 		detail_address:this.detail_address,
				// 		type:this.businessTypeItem,
				// 		service_mode:this.repairTypeItem
				// 	}
				// })
			}
		},
		components: {
			getcode,
			uniList,
			uniListItem,
			xlocation
		}
	}
</script>

<style>
	.business-item {
		display: flex;
		position: absolute;
		right: 0upx;
		top: 0upx;
	}

	.business-picker {
		display: flex;
		position: relative;
		width: 750upx;
	}

	.business-title {
		font-size: 30upx;
	}

	.container-button {
		margin-top: 80upx;
		margin-left: 26upx;
		margin-bottom: 56upx;
		width: 698upx;
		height: 80upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		background: #09BA51;
		border-radius: 12upx;
	}

	.container-input-address text {
		font-size: 30upx;
	}

	.container-input-address {
		display: flex;
		margin-left: 26upx;
		margin-top: 40upx;
		margin-bottom: 120upx;
	}

	.container-list-item image {
		position: relative;
		top: 5upx;
	}

	.list-item-desc {
		color: #333333;
		font-size: 30upx;
		margin-right: 18upx;
		position: relative;
		bottom: 6upx;
	}

	.right-arrow {
		width: 18upx;
		height: 30upx;
	}

	.line-thick {
		width: 750upx;
		height: 20upx;
		background: #F3F3F3;
	}

	.container-input>view {
		font-size: 30upx;
		color: #09BA51;
		position: absolute;
		right: 26upx;
	}

	.placeholder-class {
		font-size: 24upx;
		color: #888F97;
	}

	.container-input>text {
		font-size: 30upx;
	}

	.container-input {
		display: flex;
		height: 120upx;
		align-items: center;
		margin-left: 26upx;
		margin-right: 26upx;
		border-bottom: 1px solid #F3F3F3;
	}
</style>
