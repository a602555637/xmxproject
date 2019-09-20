<template>
	<view class="container">
		<view @click="onOrder" class="container-left">
			<image src="../../static/wxcomponentimg/kjxd@2x.png"></image>
			<text>一键下单</text>
		</view>
		<view @click="onNext" class="container-right">
			<image src="../../static/wxcomponentimg/my@2x.png"></image>
			<text>个人中心</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				isNext: '2'
			}
		},
		methods: {
			onOrder() {
				uni.navigateTo({
					url: '../../pages/selectmodel/selectmodel'
				});
			},
			onNext() {
				uni.navigateTo({
					url: '../../pages/my/my'
				});
			},
			onGetUserInfo() {
				uni.showLoading({
					title: '正在加载',
					mask: false
				})
				uni.getSetting({
					success: res => {
						if (res.authSetting['scope.userInfo']) {
							console.log('已授权')
							uni.navigateTo({
								url: '../../pages/my/my',
								success:res=>{
									uni.hideLoading()
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	.button-class::after {
		border: none;
	}

	.button-class text {
		font-size: 24upx;
		color: #000;
		position: relative;
		bottom: 14upx;
	}

	.button-class image {
		width: 50upx;
		height: 50upx;
	}

	.button-class {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container-left {
		font-size: 24upx;
		margin-left: 24upx;
	}

	.container-left image {
		width: 50upx;
		height: 50upx;
		/* margin-top: 16upx; */
	}

	.container {
		position: fixed;
		bottom: 0upx;
		display: flex;
		width: 750upx;
		height: 98upx;
		display: flex;
		background: #fff;
		padding-top: 10upx;
		padding-bottom: 10upx;
		border-top: 1px solid #F3F3F3;
	}

	.container-left,
	.container-right{
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.container-right,
	.container-left {
		width: 350upx;
	}
	
	.container-right text{
		font-size: 24upx;
		color: #000;
	}
	
	.container-right image{
		width: 50upx;
		height: 50upx;
	}
</style>
