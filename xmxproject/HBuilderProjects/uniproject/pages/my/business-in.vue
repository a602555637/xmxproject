<template>
	<view>
		<view>
			<xlist-input @inputValue="bindInputName" title="店铺名称：" placeholder="请输入店铺名称"></xlist-input>
			<xlist-input @inputValue="bindInputManager" title="负责人：" placeholder="请输入负责人姓名"></xlist-input>
			<xlist-input @inputValue="bindInputPhone" title="手机号：" placeholder="请输入负责人手机号" typeStyle="number"></xlist-input>
			
			<!-- getcode -->
			<!-- <getcode @codeText="bindCode" timer="timer" :title="title"></getcode> -->
		</view>
		<view class="line-thick"></view>
		<!-- 地区  街道  detail_address-->
		<xlocation @district="onArea"></xlocation>
		
		<view class="line-thick"></view>
		
		<xlist-picker @selectedIndex="selectedIndex" :selectedItem="selectedItem" :range="businessType"></xlist-picker>
		<xlist-picker @selectedIndex="selectedIndexType" title="服务类型" :selectedItem="selectedItemType" :range="repairType"></xlist-picker>

		<view>
			<view @click="onSave" class="container-button">保存</view>
		</view>

	</view>
</template>

<script>
	import xlistInput from '../../wxcomponents/xlist/xlist-input.vue'
	import xlistPicker from '../../wxcomponents/xlist/xlist-picker.vue'
	
	import amap from '../../common/amap-wx.js'
	import getcode from '../../wxcomponents/getcode/getcode.vue'
	import xlocation from '../../wxcomponents/xlocation/xlocation.vue'
	const formatDate = require('../../util/util.js')
	export default {
		onLoad() {
			this.selectedIndex()
			this.selectedIndexType()
		},
		data() {
			var dateObj = new Date()
			var currentTime = dateObj.getTime()
			var timer = formatDate.formatDateTime((currentTime + 1000 * 2000))
			return {
				selectedItemTypeIndex:'',
				selectedItemType:'',
				selectedItem:'',
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
			bindInputName(e){
				this.name = e
				uni.setStorage({
					key:'partyName',
					data: e
				})
			},
			bindInputManager(e){
				this.manager = e
				uni.setStorage({
					key:'partyManager',
					data: e
				})
			},
			bindInputPhone(e){
				this.phone = e
				uni.setStorage({
					key:'partyPhone',
					data: e
				})
			},
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
			selectedIndex(e) {
				this.selectedItem = e ? this.businessType[e] :this.businessType[0]
			},
			selectedIndexType(e){
				this.selectedItemTypeIndex = e
				this.selectedItemType = e ? this.repairType[e] :this.repairType[0]
			},
			onArea(e) {
				this.area = e.district
				this.street = e.township,
				this.detail_address = e.detailAddress
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
						type:this.selectedItem,
						service_mode:this.selectedItemTypeIndex,
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
			xlocation,
			xlistInput,
			xlistPicker
		}
	}
</script>

<style>
	.container-input{
		
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
	
	.placeholder-class {
		font-size: 24upx;
		color: #888F97;
	}
</style>
