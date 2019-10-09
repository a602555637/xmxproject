<template>
	<view class="container-login">
		<image src="../../static/index/logo@2x.png"></image>
		<button class="login-button" open-type="getUserInfo" @getuserinfo="getOpenId">微信授权登录</button>
	</view>
</template>

<script>
	export default {
		methods:{
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
											console.log(res)
											uni.navigateBack()
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
</style>
