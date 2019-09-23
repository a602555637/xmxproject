<template>
	<view>
		<view v-if="isLogin">
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
		<view v-else class="container-login">
			<image src="../../static/index/logo@2x.png"></image>
			<button class="login-button" open-type="getUserInfo" @getuserinfo="getUserInfo">微信授权登录</button>
		</view>
	</view>
</template>

<script>
	import headads from '../../wxcomponents/headads/headads.vue'
	import testype from '../../wxcomponents/testype/testype.vue'
	import bbutton from '../../wxcomponents/bbutton/bbutton.vue'
	import servebutton from '../../wxcomponents/servebutton/servebutton.vue'
	import vipserve from '../../wxcomponents/vipserve/vipserve.vue'
	import comment from '../../wxcomponents/comment/comment.vue'
	import tabbar from '../../wxcomponents/tabbar/tabbar.vue'
	import xswiper from '../../wxcomponents/xswiper/xswiper.vue'
	import quickSelect from '../../wxcomponents/index/quick-select.vue'
	import nearby from '../../wxcomponents/index/nearby.vue'

	export default {
		onShow() {
			uni.getSetting({
				success:res=>{
					if (res.authSetting['scope.userInfo']){
						this.isLogin = true
						this.getOpenId()
					} else {
						this.isLogin = false
					}
				}
			})
		},
		onLoad(options) {
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
					console.log('clear success')
				}
			})
		},
		data() {
			return {
				isLogin: true,
				appid: 'wx5a7e48b2d2c7cc4b',
				secret: '9fdc700fef21bb7d3141a50f3fc82591'
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
			getUserInfo(){
				uni.getUserInfo({
					success:res=>{
						console.log(res)
						this.isLogin = true
					}
				})
			},
			bindAboutUs(){
				uni.navigateTo({
					url: 'about-us'
				})
			},
			onCode() {
				uni.navigateTo({
					url: '../phone-code/index-code'
				})
			},
			onBusiness() {
				uni.navigateTo({
					url: '../../pages/business/business-login/business-login'
				})
			},
			getOpenId() {
				const self = this;
				uni.login({
					success: function(res) {
						if (res.code) {
							uni.getUserInfo({
								success: function(res) {
									console.log('存在code');
								}
							});
							var appid = self.appid; //这里是我的appid，需要改成你自己的
							var secret = self.secret; //密钥也要改成你自己的
							var openid = '';
							var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' +
								res.code + '&grant_type=authorization_code';
							uni.request({
								url: url,
								data: {},
								method: 'GET',
								success: function(res) {
									console.log(res)
									var obj = {};
									obj.openid = res.data.openid;
									console.log('openid: ' + res.data.openid);
									uni.setStorage({
										key: 'openId',
										data: obj.openid,
										success:res=>{
											// uni.getSetting({
											// 	success:res=>{
											// 		if (res.authSetting['scope.userInfo']){
											// 			self.isLogin = true
											// 		}
											// 	}
											// })
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
