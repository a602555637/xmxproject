<template>
	<view>
		<headads></headads>
		<view class="xswiper">
			<xswiper></xswiper>
		</view>
		<image @click="onBusiness" class="fixed2" src="../../static/index/store@2x.png"></image>
		<testype></testype>
		<bbutton></bbutton>
		<quick-select></quick-select>
		<servebutton></servebutton>
		<vipserve></vipserve>
		<nearby></nearby>
		<comment></comment>
		<view class="bottom">
			<view class="left">
				<view class="left-text">
					<text>服务用户</text>
					<image src="../../static/wxcomponentimg/up@2x.png"></image>
				</view>
				<text>暂未公布</text>
			</view>
			<view class="left">
				<view class="left-text">
					<text>维修设备</text>
					<image src="../../static/wxcomponentimg/up@2x.png"></image>
				</view>
				<text>暂未公布</text>
			</view>
			<view class="left">
				<view class="left-text">
					<text>好评度</text>
					<image src="../../static/wxcomponentimg/up@2x.png"></image>
				</view>
				<text>暂未公布</text>
			</view>
		</view>
		<view class="kf-phone">
			<text>客服热线</text>
			<text>关于我们</text>
			<text>联系我们</text>
			<text>服务流程</text>
		</view>
		<view class="vacol"></view>
		<tabbar></tabbar>
	</view>
</template>

<script>
	import headads from '../../wxcomponents/index/headads.vue'
	import xswiper from '../../wxcomponents/index/xswiper.vue'
	import testype from '../../wxcomponents/index/testype.vue'
	import bbutton from '../../wxcomponents/index/bbutton.vue'
	import servebutton from '../../wxcomponents/index/servebutton.vue'
	import vipserve from '../../wxcomponents/index/vipserve.vue'
	import comment from '../../wxcomponents/index/comment.vue'
	import tabbar from '../../wxcomponents/index/tabbar.vue'
	import quickSelect from '../../wxcomponents/index/quick-select.vue'
	import nearby from '../../wxcomponents/index/nearby.vue'
	
	export default {
		onload(options) {
			this.getOpenId()
			if(options){
				console.log(options.scene)
				uni.setStorage({
					key: 'superiorId',
					data: options.scene
				})
			}
			uni.removeStorage({
				key: 'sid',
				success: res => {
					// console.log('clear success')
				}
			})
		},
		data() {
			return {
				opinion:'',
				onIsvip: 2,
				openId:''
			}
		},
		components: {
			headads,
			testype,
			bbutton,
			servebutton,
			vipserve,
			comment,
			tabbar,
			xswiper,
			quickSelect,
			nearby
		},
		methods: {
			requestVerify(){
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/shopInfo/selectPass',
					method: 'GET',
					data: {
						openid: this.openId
					},
					success: res => {
						let stat = res.data.data.stat
						if(stat == 1 || stat == 5){
							if(this.opinion){
								this.opinion = res.data.data.opinion
							}
							this.openPopup()
						} 
						return
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			
			bindAboutUs(){
				uni.navigateTo({
					url: 'about-us'
				})
			},
			
			onBusiness() {
				uni.navigateTo({
					url: '../../pages/business/business-login/business-login'
				})
			},
			getOpenId() {
				uni.login({
					success: res => {
						if (res.code) {
							uni.getUserInfo({
								success: res => {
									// console.log('存在code')
								}
							})
							let code = res.code
							uni.request({
								url: 'https://www.finetwm.com/xmRepair/userInfo/login',
								data: {
									code: code
								},
								method: 'GET',
								success: res => {
									// this.openId = res.data.openid
									console.log(res.data.data.openid)
									this.openId = res.data.data.openid
									uni.setStorage({
										key: 'openId',
										data: this.openId,
										success:res=>{
											// console.log('success storage')
											this.isVip()
										}
									})
									// obj.expires_in = Date.now() + res.data.expires_in
								}
							});
						} else {
							console.log('获取用户登录态失败！' + res.errMsg);
						}
					}
				})
			}
		}
	}
</script>

<style>
	
	.login-button{
		width: 698upx;
		height: 80upx;
		font-size: 26upx;
		color: #FFFFFF;
		background: #09BA51;
		margin-top: 144upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.container-login image{
		width: 270upx;
		height: 266upx;
		margin-left: 240upx;
		margin-top: 70upx;
	}
	
	.fixed2 {
		width: 76upx;
		height: 76upx;
		position: absolute;
		top: 20upx;
		right: 44upx;
	}

	.vacol {
		height: 98upx;
		background: #FFFFFF;
	}

	.kf-phone text {
		font-size: 22upx;
		color: #888F97;
	}

	.kf-phone {
		display: flex;
		justify-content: space-around;
		margin-top: 30upx;
		margin-bottom: 50upx;
	}

	.xswiper {
		margin-top: -20upx;
	}

	.bottom {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #F3F3F3;
		height: 134upx;
	}

	.left-text>text {
		color: #888F97;
		font-size: 26upx;
		margin-bottom: 6upx;
	}

	.left>text {
		font-size: 26upx;
		color: #1BBF61;
	}

	.left-text image {
		width: 18upx;
		height: 24upx;
		margin-left: 10upx;
	}

	.left {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.left-text {
		display: flex;
		flex-direction: row;
	}
</style>
