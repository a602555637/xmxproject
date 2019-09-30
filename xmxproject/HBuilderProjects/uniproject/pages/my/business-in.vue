<template>
	<view>
		<view>
			<xlist-input @inputValue="bindInputName" title="店铺名称：" placeholder="请输入店铺名称"></xlist-input>
			<xlist-input @inputValue="bindInputManager" title="负责人：" placeholder="请输入负责人姓名"></xlist-input>
			<xlist-input @inputValue="bindInputPhone" title="手机号：" placeholder="请输入负责人手机号" typeStyle="number"></xlist-input>
			
			<!-- getcode -->
			<getcode :orderNum="phone" @scode="bindScode" @phoneCode="bindPhoneCode"></getcode>
		</view>
		<view class="line-thick"></view>
		<!-- 地区  街道  detail_address-->
		<xlocation @detailAddress="onDetail" @district="onArea" @township="onTownship"></xlocation>
		
		<view class="line-thick"></view>
		
		<xlist-picker @selectedIndex="selectedIndex" :selectedItem="selectedItem" :range="businessType"></xlist-picker>
		<xlist-picker @selectedIndex="selectedIndexType" title="服务类型" :selectedItem="selectedItemType" :range="repairType"></xlist-picker>

		<view>
			<view @click="onSave" class="container-button">保存</view>
			<view class="margin-fixed"></view>
		</view>

	</view>
</template>

<script>
	import xlistInput from '../../wxcomponents/xlist/xlist-input.vue'
	import xlistPicker from '../../wxcomponents/xlist/xlist-picker.vue'
	
	import amap from '../../common/amap-wx.js'
	import getcode from '../../wxcomponents/getcode/getcode.vue'
	import xlocation from '../../wxcomponents/xlocation/xlocation.vue'
	var amapFile = require('../../common/amap-wx.js')
	
	const formatDate = require('../../util/util.js')
	export default {
		onLoad() {
			// var myAmapFun = new amapFile.AMapWX({
			// 	key:'f97ec3f47e09d39567de678870baa690',
			// })
			// myAmapFun.getRegeo({
			//       success: res =>{
			//         console.log(res)
			//       },
			//       fail: err =>{
			//         console.log(err)
			//       }
			// })
			uni.getStorage({
				key: 'openId',
				success: res=>{
					this.openId = res.data
				}
			})
			this.selectedIndex()
			this.selectedIndexType()
		},
		data() {
			return {
				latitude:null,
				longitude:null,
				openId:'',
				scode:'',
				phoneCode:'',
				selectedItemTypeIndex: 0,
				selectedItemType:'',
				selectedItem:'',
				selectedItemIndex: 0,
				province:'',
				city:'',
				district:'',
				township:'',
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
					'上门维修', '驻店维修','上门维修、驻店维修'
				],
				index: 0
			}
		},
		methods: {
			onLocation(){
				uni.request({
					url: 'https://restapi.amap.com/v3/geocode/geo',
					method: 'GET',
					data: {
						key:'e89c18d61751e3611db784ccf3e975fa',
						address: this.city + this.street + this.detail_address
					},
					success: res => {
						let loca = res.data.geocodes[0].location
						let locaIndex = loca.indexOf(',')
						this.longitude = loca.slice(0,locaIndex)
						this.latitude = loca.slice(locaIndex + 1, loca.length)
						this.longitude *= 1
						this.latitude *= 1
						this.onPost()
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			bindScode(e){
				this.scode = e.scode
			},
			bindPhoneCode(e){
				this.phoneCode = e.phoneCode
			},
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
				let scode = this.scode.toString()
				let phoneCode = this.phoneCode.toString()
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
				}else if(this.scode == ''){
					uni.showToast({
						title: '请填写验证码',
						icon:'none'
					});
				}else if(!scode){
					uni.showToast({
						title: '请输入正确的验证码',
						icon:'none'
					})
				}else {
					this.onLocation()
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
				this.selectedItemIndex = e
			},
			selectedIndexType(e){
				this.selectedItemTypeIndex = e
				this.selectedItemType = e ? this.repairType[e] :this.repairType[0]
			},
			onArea(e) {
				this.city = e.city
				this.area = e.district
				this.street = e.township
			},
			onTownship(e){
				console.log(e)
				this.street = e.township
			},
			onDetail(e){
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
				let phone = this.phone.toString()
				uni.request({
					url:'https://www.finetwm.com/xmRepair/shopInfo/add',
					method:'POST',
					header:{
						"content-Type": "application/json"
					},
					data:{
						openid: this.openId,
						name: this.name,
						manager: this.manager,
						phone: this.phone,
						area: this.area,
						street: this.street,
						detail_address: this.detail_address,
						type: this.selectedItemIndex,
						service_mode: this.selectedItemTypeIndex,
						longitude: this.longitude,
						latitude: this.latitude
					},
					success: res=>{
						console.log(res)
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
	.margin-fixed{
		height: 58upx;
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
		/* margin-bottom: 56upx; */
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
