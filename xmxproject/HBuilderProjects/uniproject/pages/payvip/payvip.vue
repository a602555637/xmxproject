<template>
	<view>
		<view class="container">
			<text class="title">绑定IMEI串码</text>
			<input class="input" type="text" value="test" />
			<text class="info">手机拨号输入*#06#</text>
		</view>
		<view @click="onVipAlready" class="button">成为会员</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				test: '1m23t',
				isPaySuccess:true
			}
		},
		methods:{
			onVipAlready(){
				console.log(this.isPaySuccess)
				let isPaySuccess = this.isPaySuccess
				uni.redirectTo({
					url: '../bevip/bevip?={{isPaySuccess}}'
				});
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-top: 80upx;
		margin-left: 26upx;
	}

	.title {
		font-size: 30upx;
		margin-bottom: 20upx;
	}

	.input {
		width: 698upx;
		height: 80upx;
		border: 1px solid #EEEEEE;
		margin-bottom: 20upx;
	}

	.info {
		font-size: 26upx;
		color: #888F97;
	}

	.button {
		width: 750upx;
		height: 100upx;
		background: #09BA51;
		font-size: 30upx;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0upx;
	}
</style>
