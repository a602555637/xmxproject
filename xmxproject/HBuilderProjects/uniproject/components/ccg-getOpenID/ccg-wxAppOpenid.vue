<template>
	<view>
		<button v-if="isNext" class="button-class" @click="getOpenId()">下一步</button>
		<view v-else class="vip-container">
			<button class="vip-class" @click="getOpenId()">成为会员</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GetOpenId',
		props:{
			isNext:{
				type:Boolean,
				default: true
			}
		},
		data() {
			return {
				appid: 'wx5a7e48b2d2c7cc4b', //这里是我的appid，需要改成你自己的
				secret: '9fdc700fef21bb7d3141a50f3fc82591' //密钥也要改成你自己的
			};
		},
		methods: {
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
									var obj = {};
									obj.openid = res.data.openid;
									console.log('openid: ' + res.data.openid);
									uni.setStorage({
										key: 'openId',
										data: obj.openid
									})
									obj.expires_in = Date.now() + res.data.expires_in;
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
	.vip-container{
		position: relative;
	}
	
	.vip-class{
		padding-right: 0;
		padding-left: 14upx;
		line-height: 26upx;
		display: flex;
		width: 116upx;
		height: 32upx;
		font-size: 22upx;
		background: #09BA51;
		border-radius: 18rpx 18rpx 18rpx 0rpx;
		color: #FFFFFF;
		left: -140upx;
	}
	
	.button-class {
		width: 698upx;
		height: 80upx;
		background: #FFFFFF;
		font-size: 30upx;
		border: 1px solid #333;
	}
</style>
