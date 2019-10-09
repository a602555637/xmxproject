<template>
	<view>
		<view class="container">
			<image class="avatar" :src="avatarUrl"></image>
			<text class="name">{{name}}</text>
			<view class="waittime" v-if="waitTime">等待期还剩45天</view>
			<view class="content">
				<image v-if="isVip==='2'" class="phone-vip" src="../../static/my/phoneVIP@2x.png"></image>
				<image v-else-if="isVip==='1'" class="phone-vip"src="../../static/my/pthy-sj@2x.png"></image>
				<image v-else class="phone-vip" src="../../static/my/un-phoneVIP@2x.png"></image>
				<image v-if="isVip==='2'" src="../../static/my/padVIP@2x.png"></image>
				<image v-else-if="isVip==='1'" src="../../static/my/pthy-pb@2x.png"></image>
				<image v-else src="../../static/my/un-padVIP@2x.png"></image>
			</view>
		</view>
		<view class="line"></view>
		<uniList>
			<uniItem title="我的会员" thumb='../../static/my/icon/vip@2x.png'></uniItem>
			<text class="info-text">了解详情</text>
			<uniItem @click="onOrderList" title="我的订单" thumb='../../static/my/icon/orders@2x.png'></uniItem>
			<uniItem @click="onMyWallet" title="我的钱包" thumb='../../static/my/icon/wallet@2x.png'></uniItem>
			<uniItem @click="onCards" title="我的卡包" thumb='../../static/my/icon/cards@2x.png'></uniItem>
			<uniItem @click="onFriends" title="我的亲友" thumb='../../static/my/icon/wdqy@2x.png'></uniItem>
			<uniItem @click="onAddressList" title="地址管理" thumb='../../static/my/icon/ad@2x.png'></uniItem>
			<uniItem @click="onBusinessIn" title="服务商入驻" thumb='../../static/my/icon/join@2x.png'></uniItem>
			<uniItem @click="onlineKf" title="在线客服" thumb='../../static/my/icon/ser@2x.png'></uniItem>
			<uniItem title="意见反馈" thumb='../../static/my/icon/yjfk@2x.png'></uniItem>
		</uniList>
			<!-- <image class="swiper-img" src="../../static/my/cwhhr@2x.png"></image> -->
			<!-- <image class="swiper-img" src="../../static/my/fxyl@2x.png"></image> -->
		<uni-popup custom ref="popup" type="center">
			<view v-if="shopStat == 8" class="popup">
				<image @click="closePopup" class="popup-close" src="../../static/faults/close@2x.png"></image>
				<image class="popup-icon" src="../../static/my/pass@2x.png"></image>
				<text class="popup-title">恭喜您，合同审核已通过！</text>
				<view @click="onNext(8)" class="popup-button">我知道了</view>
			</view>
			<view v-else-if="shopStat == 2" class="popup">
				<image @click="closePopup" class="popup-close" src="../../static/faults/close@2x.png"></image>
				<image class="popup-icon" src="../../static/my/nopass@2x.png"></image>
				<text style="margin-bottom: 10upx;" class="popup-title">很抱歉，审核被拒绝</text>
				<text class="popup-desc">拒绝理由： 被拒绝。</text>
				<view @click="onNext(2)" class="popup-button">我知道了</view>
			</view>
			<view v-else-if="shopStat == 3" class="popup">
				<image @click="closePopup" class="popup-close" src="../../static/faults/close@2x.png"></image>
				<image class="popup-icon" src="../../static/my/pass@2x.png"></image>
				<text class="popup-title">恭喜您，审核已通过！</text>
				<view @click="onNext(3)" class="popup-button">签订入驻协议</view>
			</view>
			<view v-else-if="shopStat == 5" class="popup">
				<image @click="closePopup" class="popup-close" src="../../static/faults/close@2x.png"></image>
				<image class="popup-icon" src="../../static/my/nopass@2x.png"></image>
				<text style="margin-bottom: 10upx;" class="popup-title">很抱歉，合同审核被拒绝</text>
				<text class="popup-desc">拒绝理由： 被拒绝。</text>
				<view @click="onNext(5)" class="popup-button">我知道了</view>
			</view>
			<view v-else-if="shopStat == 6" class="popup">
				<image @click="closePopup" class="popup-close" src="../../static/faults/close@2x.png"></image>
				<image class="popup-icon" src="../../static/my/tishi@2x.png"></image>
				<text class="popup-title">入驻成功！还没有上传图片</text>
				<view @click="onNext(6)" class="popup-button">上传图片</view>
			</view>
			
		</uni-popup>
	</view>

</template>

<script>
	import uniList from '../../components/uni-list/uni-list.vue'
	import uniItem from '../../components/uni-list-item/uni-list-item.vue'
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	
	export default {
		data() {
			return {
				waitTime:'',
				avatarUrl: '',
				name: '',
				isVip: '2',
				superiorId: '',
				openId: '',
				shopStat: 2
			}
		},
		onShow() {
			uni.getSetting({
				success:res=>{
					if (res.authSetting['scope.userInfo']){
						this.getUserInfo()
					} else {
						uni.navigateTo({
							url: '../index/index-login'
						})
					}
				}
			})
			uni.getStorage({
				key: 'openId',
				success: res => {
					this.openId = res.data
					this.shopStatRequest()
				}
			})
		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			statRequest(){
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/shopM/updateStat',
					method: 'POST',
					header:{
						"content-Type": "application/x-www-form-urlencoded"
					},
					data: {
						stat: 1,
						openid: this.openId,
						opinion: ''
					},
					success: res => {
						console.log(res)
						this.closePopup()
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			onNext(e){
				if(e == 8){
					this.statRequest()
				} else if( e == 2 || e == 5){
					this.closePopup()
				} else if( e == 3){
					uni.navigateTo({
						url: 'contract'
					})
				} else if( e == 6){
					uni.navigateTo({
						url: 'upload-photo'
					})
				}
			},
			openPopup(){
				this.$refs.popup.open()
			},
			closePopup(){
				this.$refs.popup.close()
			},
			shopStatRequest(){
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/shopInfo/selectPass',
					method: 'GET',
					data: {
						openid: this.openId
					},
					success: res => {
						console.log(res.data.data)
						this.shopStat = res.data.data.stat
						if(this.shopStat == 2 || this.shopStat == 3 || this.shopStat == 5 || this.shopStat == 6 || this.shopStat == 8){
							this.openPopup()
						} return
					},
					fail: err => {
						console.log(err)
					}
				});
			},
			getUserInfo(){
				uni.getUserInfo({
					success:res=>{
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
				if(this.shopStat == 7){
					uni.navigateTo({
						url: 'business-in'
					})
				} else {
					uni.navigateTo({
						url: 'shop-stat?id=' + this.shopStat
					})
				}
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
			uniItem,
			uniPopup
		},
	}
</script>

<style>
	.popup-desc{
		font-size: 26upx;
		margin-bottom: 20upx;
	}
	
	.popup-close{
		width: 40upx;
		height: 40upx;
		position: absolute;
		top: 30upx;
		right: 28upx;
	}
	
	.popup-button{
		width: 400upx;
		height: 80upx;
		font-size: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		background: #09BA51;
		border-radius: 12upx;
	}
	
	.popup-title{
		font-size: 40upx;
		margin-bottom: 68upx;
	}
	
	.popup-icon{
		width: 84upx;
		height: 84upx;
		margin-top: 68upx;
		margin-bottom: 48upx;
	}
	
	.popup{
		width: 560upx;
		height: 440upx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 20upx;
	}
	
	.swiper-container{
		width: 750upx;
		height: 140upx;
		position: fixed;
		bottom: 0;
	}
	
	.swiper-img{
		width: 750upx;
		height: 140upx;
	}
	
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
