<template>
	<view class="container">
		<!-- title -->
		<text class="container-title">小美修服务商入驻合作协议</text>
		<!-- 甲方 -->
		<view class="container-header" v-for="(item, index) in titleContent" :key="index">
			<text>{{item.title}}</text>
			<view class="container-header-content fixed">{{item.content}}</view>
		</view>
		<!-- 乙方 -->
		<view class="container-desc">
			<view class="container-desc-item">
				<text class="container-desc-title">乙方：</text>
				<text class="container-desc-content fixed">{{partyTitle}}</text>
			</view>
			<view class="container-desc-item">
				<text class="container-desc-title">代表：</text>
				<text class="container-desc-content fixed">{{manager}}</text>
			</view>
			<view class="container-desc-item">
				<text class="container-desc-title">电话：</text>
				<text class="container-desc-content fixed">{{managerPhone}}</text>
			</view>
			<view class="container-desc-item">
				<text class="container-desc-title">地址：</text>
				<text class="container-desc-content fixed">{{partyAddress}}</text>
			</view>
		</view>
		<!-- content -->
		<image class="img-content" src="../../static/business/contract@2x.png" mode="widthFix"></image>
		<text class="party-a">甲方签字（盖章）：</text>
		<text>日期：{{date}}</text>
		<view class="party-b">
			<text class="party-b-title">乙方签字（盖章）：</text>
			<image v-if="signUrl" :src="signUrl"></image>
			<text @click="onSign" v-else class="sign">点击签字</text>
		</view>
		<text>日期：&nbsp{{date}}</text>
		<text @click="onRule" class="rule">服务商运营规范>></text>
		<view @click="onSubmit" class="container-submit">确认提交</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				partyAddress: '',
				managerPhone: '',
				manager: '',
				partyTitle: '',
				signUrl: '',
				date: '',
				titleContent: [{
					title: '甲方：',
					content: '成都凡果科技有限公司'
				}, {
					title: '法人：',
					content: '龚果'
				}, {
					title: '地址：',
					content: '成都市郫都区金融中心B栋11楼10号'
				}]
			}
		},
		onLoad() {
			this.shopRequest()
			this.getStorage()
			this.getDate()
		},
		methods: {
			shopRequest(){
				uni.getStorage({
					key: 'openId',
					success:res => {
						this.openId = res.data
						uni.request({
							url: 'https://www.finetwm.com/xmRepair/shopInfo/findIdByOpenid',
							method: 'GET',
							data: {
								openid: this.openId
							},
							success: res => {
								console.log(res.data.data.shopid)
								let id = res.data.data.shopid
								uni.request({
									url: 'https://www.finetwm.com/xmRepair/shopInfo/get',
									method: 'GET',
									data: {
										id: id
									},
									success: res => {
										console.log(res.data.data)
										this.partyTitle = res.data.data.name
										this.manager = res.data.data.manager
										this.managerPhone = res.data.data.phone
										let area = res.data.data.area
										let street = res.data.data.street
										let address = res.data.data.detail_address
										this.partyAddress = area + street + address
									},
									fail: err => {
										console.log(err)
									}
								})
							},
							fail: err => {
								console.log(err)
							}
						})
					}
				})
			},
			getDate(){
				let date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth() + 1
				let day = date.getDate()
				this.date = year + '年' + month + '月' + day + '日'
			},
			onRule() {
				uni.navigateTo({
					url: 'rule'
				})
			},
			onSign() {
				uni.navigateTo({
					url: 'sign'
				})
			},
			requestUrl() {
				uni.uploadFile({
					url: 'https://www.finetwm.com/xmRepair/shopInfo/upload', //仅为示例，非真实的接口地址
					filePath: this.signUrl,
					header: {
						'content-Type': 'multipart/form-data'
					},
					name: 'file',
					formData: {
						type: 4,
						stat: 4,
						openid: this.openId
					},
					success:res => {
						console.log(res)
						uni.showToast({
							title: '提交成功',
						})
						setTimeout(() => {
							uni.navigateTo({
								url: 'setting-key'
							})
						}, 1000)
					}
				})
			},
			onSubmit() {
				if (this.signUrl == '') {
					uni.showToast({
						title: '请签名',
						icon: 'none'
					})
				} else {
					this.requestUrl()
				}
			},
			getStorage() {
				uni.getStorage({
					key: 'signUrl',
					success: res => {
						this.signUrl = res.data
					}
				})
				uni.getStorage({
					key: 'partyName',
					success: res => {
						this.partyTitle = res.data
					}
				})
				uni.getStorage({
					key: 'partyManager',
					success: res => {
						this.manager = res.data
					}
				})
				uni.getStorage({
					key: 'partyPhone',
					success: res => {
						this.managerPhone = res.data
					}
				})
				uni.getStorage({
					key: 'partyAddress',
					success: res => {
						this.partyAddress = res.data
					}
				})
			}
		}
	}
</script>

<style>
	.img-content {
		width: 698upx;
	}

	.rule {
		color: #09BA51;
		margin-top: 60upx;
		margin-bottom: 60upx;
	}

	.container-submit {
		width: 698upx;
		height: 80upx;
		border-radius: 12upx;
		color: #FFFFFF;
		background: #09BA51;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-bottom: 56upx;
	}

	.sign {
		color: #09BA51;
		margin-left: 30upx;
	}

	.party-b-title {
		margin-bottom: 30upx;
	}

	.party-b {
		display: flex;
		flex-direction: row;
		margin-top: 80upx;

	}

	.party-a {
		margin-top: 76upx;
		margin-bottom: 30upx;
	}

	page {
		font-size: 26upx;
	}

	.fixed {
		font-weight: bold;
	}

	.container {
		display: flex;
		flex-direction: column;
		margin-top: 30upx;
		margin-left: 26upx;
		margin-right: 26upx;
	}

	.container-title {
		font-size: 32upx;
		font-weight: bold;
		text-align: center;
		margin-bottom: 10upx;
	}

	.container-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20upx;
	}

	.container-header-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 10upx;
	}

	.container-desc {
		margin-top: 46upx;
	}

	.container-desc-item {
		margin-bottom: 20upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.container-desc-content {
		width: 610upx;
		height: 90upx;
		display: flex;
		align-items: center;
		padding-left: 30upx;
	}

	.container-desc-title {
		width: 90upx;
	}
</style>
