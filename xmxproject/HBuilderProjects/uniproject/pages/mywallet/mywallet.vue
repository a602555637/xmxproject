<template>
	<view class="container">
		<view class="container-top">
			<text class="container-top-text">余额</text>
			<text class="signal-number"><text class="bold-number">{{price}}</text>元</text></text>
			<view class="button">
				<image class="button-tx" src="../../static/my/tx-btn@2x.png"></image>
				<image @click="bindCode" src="../../static/my/ewm-btn@2x.png"></image>
			</view>
			<image src="../../static/my/qb-bg@2x.png"></image>
		</view>
		<view class="note">
			*分享我的二维码，用户注册会员可获得现金红包奖励
		</view>
		<!-- <view class="info">
			<text class="info-text">分享给好友</text>
			<text class="info-number">+￥1.5</text>
		</view>
		<view class="line"></view> -->
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.requestUrl()
		},
		data() {
			return {
				price: ''
			}
		},
		methods:{
			bindCode(){
				uni.navigateTo({
					url: '../business/business-code/business-code?id=' + '1'
				})
			},
			requestUrl(){
				uni.getStorage({
					key: 'openId',
					success:res=>{
						let openId = res.data
						uni.request({
							url: 'https://www.finetwm.com/xmRepair/userInfo/findMoney',
							method: 'GET',
							header:{
								'content-Type': "application/x-www-form-urlencoded"
							},
							data: {
								openId:openId
							},
							success: res => {
								this.price = res.data.data.money
								if(this.price == null){
									this.price = '0'
								}
							},
							fail: err => {
								console.log(err)
							}
						})
					}
				})
				
			}
		}
	}
</script>

<style>
	.line{
		border-bottom: 1px solid #eee;
	}
	
	.info {
		display: flex;
		justify-content: space-between;
		margin: 40upx 46upx 40upx 26upx;
	}
	
	.info-text{
		font-size: 30upx;
	}
	
	.info-number{
		font-size: 26upx;
		color: #888F97;
	}
	
	.note {
		font-size: 24upx;
		color: #888F97;
		background: #F3F3F3;
		height: 72upx;
		width: 750upx;
		margin-top: 92upx;
		padding-top: 10upx;
		padding-left: 24upx;
	}

	.signal-number {
		font-size: 30upx;
	}

	.bold-number {
		font-size: 80upx;
		/* font-weight: bold; */
		font-family: impact;
	}

	.container-top-text {
		padding-top: 40upx;
		font-size: 32upx;
		margin-bottom: 18upx;
	}

	.container {
		display: flex;
		flex-direction: column;
	}

	.container-top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.container-top>image {
		width: 750upx;
		height: 386upx;
		position: absolute;
		top: 0upx;
		z-index: -99;
	}

	.button {
		display: flex;
		flex-direction: row;
		margin-top: 38upx;
		/* justify-content: space-around; */
	}

	.button image {
		width: 220upx;
		height: 60upx;
	}

	.button-tx {
		margin-right: 30upx;
	}
</style>
