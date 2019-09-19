<template>
	<view>
		<view v-if="name" class="container">
			<image class="avatar" :src="avatarUrl"></image>
			<text class="name">{{name}}</text>
			<view class="waittime" v-if="waitTime">等待期还剩45天</view>
			<view class="content">
				<image class="phone-vip" v-if="!isVip" src="../../static/my/un-phoneVIP@2x.png"></image>
				<image class="phone-vip" v-else src="../../static/my/phoneVIP@2x.png"></image>
				<image v-if="!isVip" src="../../static/my/un-padVIP@2x.png"></image>
				<image v-else src="../../static/my/padvip@2x.png"></image>
			</view>
		</view>
		<view v-else class="unlogin">
			<button open-type="getUserInfo" @click="getUserInfo" class="button-class">
				<image src="../../static/my/dl@2x.png"></image>
			</button>
		</view>
		<view class="line"></view>
		<uniList>
			<uniItem @click="onBeVip" title="我的会员" thumb='../../static/my/icon/vip@2x.png'></uniItem>
			<text class="info-text">了解详情</text>
			<uniItem @click="onOrderList" title="我的订单" thumb='../../static/my/icon/orders@2x.png'></uniItem>
			<uniItem @click="onMyWallet" title="我的钱包" thumb='../../static/my/icon/wallet@2x.png'></uniItem>
			<uniItem @click="onCards" title="我的卡包" thumb='../../static/my/icon/cards@2x.png'></uniItem>
			<uniItem @click="onFriends" title="我的亲友" thumb='../../static/my/icon/wdqy@2x.png'></uniItem>
			<uniItem @click="onAddressList" title="地址管理" thumb='../../static/my/icon/ad@2x.png'></uniItem>
			<uniItem @click="onBusinessIn" title="商家入驻" thumb='../../static/my/icon/join@2x.png'></uniItem>
			<uniItem @click="onlineKf" title="在线客服" thumb='../../static/my/icon/ser@2x.png'></uniItem>
			<uniItem title="意见反馈" thumb='../../static/my/icon/yjfk@2x.png'></uniItem>
		</uniList>
	</view>

</template>

<script>
	import uniList from '../../components/uni-list/uni-list.vue'
	import uniItem from '../../components/uni-list-item/uni-list-item.vue'
	export default {
		data() {
			return {
				waitTime:'',
				avatarUrl: '',
				name: '',
				isVip: 0,
				superiorId: '',
				openId: ''
			}
		},
		onShow() {
			uni.getStorage({
				key: 'openId',
				success: res => {
					this.openId = res.data
					uni.request({
						url: 'https://www.finetwm.com/xmRepair/userInfo/isvip',
						data: {
							openid: this.openId,
							superiorId: this.superiorId
						},
						success: res => {
							console.log(res)
						}
					})
				}
			})
		},
		onLoad() {
			uni.getSetting({
				success:res=>{
					if (res.authSetting['scope.userInfo']){
						this.getUserInfo()
					}
				}
			})
		},
		methods: {
			getUserInfo(){
				uni.getUserInfo({
					success:res=>{
						console.log(res)
						this.avatarUrl = res.userInfo.avatarUrl
						this.name = res.userInfo.nickName
					}
				})
			},
			
			onBeVip() {
				uni.navigateTo({
					url: '../bevip/bevip',
					success: res => {
						console.log('success')
					}
				});
			},
			onOrderList() {
				uni.navigateTo({
					url: '../orderlist/orderlist'
				});
			},
			onMyWallet() {
				uni.navigateTo({
					url: '../mywallet/mywallet'
				});
			},
			onAddressList() {
				uni.navigateTo({
					url: '../addresslist/addresslist'
				});
			},
			onBusinessIn() {
				uni.navigateTo({
					url: 'business-in'
				})
			},
			onFriends() {
				uni.navigateTo({
					url: 'my-friends'
				})
			},
			onCards() {
				uni.navigateTo({
					url: 'cards'
				})
			},
			onlineKf() {
				uni.navigateTo({
					url: 'online-kf'
				})
			}
		},
		components: {
			uniList,
			uniItem
		},
	}
</script>

<style>
	.button-class{
		background: #FFFFFF;
	}
	
	.button-class::after {
		border: none;
	}
	
	.unlogin {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 26upx;
		margin-bottom: 76upx;
	}
	
	
	.unlogin image {
		width: 140upx;
		height: 140upx;
	}
	
	.line {
		width: 750upx;
		height: 20upx;
		background: #F3F3F3;
	}

	.avatar {
		width: 140upx;
		height: 140upx;
		margin-top: 26upx;
		border-radius: 100upx;
	}

	.name {
		font-size: 32upx;
		font-weight: bold;
		margin-top: 14upx;
	}

	.waittime {
		font-size: 24upx;
		color: #EB5555;
		margin-top: 20upx;
	}

	.content image {
		width: 128upx;
		height: 36upx;
		margin-bottom: 50upx;
		margin-top: 20upx;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.phone-vip {
		margin-right: 16upx;
	}

	.info-text {
		font-size: 26upx;
		position: absolute;
		right: 74upx;
		top: 48upx;
	}
</style>
