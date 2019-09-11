<template>
	<view class="container">
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
		<!-- <getcode @codeText="bindCode" timer="timer" :title="title"></getcode> -->
		<view class="line-thick"></view>
		<!-- 地区  街道  detail_address-->
		<xlocation @district="onArea"></xlocation>
		
		<view class="line-thick"></view>
		
		<!-- 企业类型 -->
		<view class="container-input">
			<picker class="business-picker" mode="selector" value="index" :range="businessType" @change="onType">
				<view class="business-title">企业类型</view>
				<view class="business-item">
					<text class="list-item-desc">{{businessTypeItem}}</text>
					<image class="right-arrow" src="../../static/wxcomponentimg/arrow@2x.png"></image>
				</view>
			</picker>
		</view>
		<!-- 服务类型 -->
		<view class="container-input">
			<picker class="business-picker" mode="selector" value="index" :range="repairType" @change="onRepairType">
				<view class="business-title">服务类型</view>
				<view class="business-item">
					<text class="list-item-desc">{{repairTypeItem}}</text>
					<image class="right-arrow" src="../../static/wxcomponentimg/arrow@2x.png"></image>
				</view>
			</picker>

		</view>

		<view class="fixed">
			<view @click="onSave" class="container-button">保存</view>
		</view>

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
		data() {
			var dateObj = new Date()
			var currentTime = dateObj.getTime()
			var timer = formatDate.formatDateTime((currentTime + 1000 * 2000))
			return {
				province:'',
				city:'',
				district:'',
				township:'',
				timer: timer,
				title: '验证码：',
				name: '',
				manager: '',
				phone: '',
				getCode:'',
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
			onSave() {
				if(this.name == ''){
					uni.showToast({
						title: '请填写商家名称',
						icon:'none'
					})
				}else if (this.manager == '') {
					uni.showToast({
						title:'请填写负责人',
						icon:'none'
					})
				}else if (this.phone == ''){
					uni.showToast({
						title: '请填写手机号码',
						icon:'none'
					})
				}else if(this.detail_address == ''){
					uni.showToast({
						title: '请填写详细地址',
						icon:'none'
					})
				}else{
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
				}
			},
			onType(e) {
				let num = e.detail.value
				this.businessTypeItem = this.businessType[num]
			},
			onRepairType(e) {
				let num = e.detail.value
				this.repairTypeItem = this.repairType[num]
			},
			onName(e) {
				this.name = e.detail.value
				uni.setStorage({
					key:'partyTitle',
					data:this.name
				})
			},
			onManager(e) {
				this.manager = e.detail.value
				uni.setStorage({
					key:'manager',
					data:this.manager
				})
			},
			onPhone(e) {
				this.phone = e.detail.value
				uni.setStorage({
					key:'managerPhone',
					data:this.phone
				})
			},
			onArea(e) {
				this.area = e.district
				this.street = e.township,
				this.detail_address = e.detailAddress
				console.log(e)
				uni.setStorage({
					key:'partyAddress',
					data:this.area + this.street + this.detail_address
				})
			},
			bindCode(e){
				console.log(e.codeText)
				this.getCode = e.codeText
			},
			onPost() {
				uni.request({
					url:'https://120.24.180.246/xmRepair/shopInfo/add',
					method:'POST',
					data:{
						name: this.name,
						manager:this.manager,
						phone:this.phone,
						area:this.area,
						street:this.street,
						detail_address:this.detail_address,
						type:this.businessTypeItem,
						service_mode:this.repairTypeItem,
						stat:0
					},
					success: res=>{
						console.log('success')
					}
				})
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
	.fixed{
		height: 160upx;
	}

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
