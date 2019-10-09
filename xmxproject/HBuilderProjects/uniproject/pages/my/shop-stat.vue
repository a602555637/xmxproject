<template>
	<view class="container">
		<view v-if="shopStat == 0" class="container-zero">
			<image src="../../static/my/verify@2x.png"></image>
			<text class="container-title">审核中，请耐心等待</text>
			<view @click="onNext(0)" class="button">我知道了</view>
		</view>
		<view v-if="shopStat == 1" class="container-zero">
			<image style="width: 136upx; height: 136upx;" src="../../static/my/pass@2x.png"></image>
			<text class="container-title">您已经入驻成功</text>
			<view @click="onNext(1)" class="button">去登陆</view>
		</view>
		<view v-if="shopStat == 2" class="container-zero">
			<image style="width: 136upx; height: 136upx;" src="../../static/my/nopass@2x.png"></image>
			<text class="container-title">抱歉，审核未通过</text>
			<text class="container-desc">拒绝原因：未通过</text>
			<view @click="onNext(2)" class="button">重新申请</view>
		</view>
		<view v-if="shopStat == 3" class="container-zero">
			<image style="width: 136upx; height: 136upx;" src="../../static/my/pass@2x.png"></image>
			<text class="container-title">恭喜您，审核通过</text>
			<view @click="onNext(3)" class="button">签订入驻协议</view>
		</view>
		<view v-if="shopStat == 4" class="container-zero">
			<image style="width: 136upx; height: 136upx;" src="../../static/my/tishi@2x.png"></image>
			<text class="container-title">合同审核中，请耐心等待</text>
			<view @click="onNext(4)" class="button">我知道了</view>
		</view>
		<view v-if="shopStat == 5" class="container-zero">
			<image style="width: 136upx; height: 136upx;" src="../../static/my/nopass@2x.png"></image>
			<text class="container-title">抱歉，合同审核未通过</text>
			<view @click="onNext(5)" class="button">重新提交</view>
		</view>
		<view v-if="shopStat == 6" class="container-zero">
			<image style="width: 136upx; height: 136upx;" src="../../static/my/tishi@2x.png"></image>
			<text class="container-title">入驻成功，图片还未上传</text>
			<view @click="onNext(6)" class="button">上传图片</view>
		</view>
		<view v-if="shopStat == 8" class="container-zero">
			<image style="width: 136upx; height: 136upx;" src="../../static/my/pass@2x.png"></image>
			<text class="container-title">合同审核已通过</text>
			<view @click="onNext(8)" class="button">去登陆</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopStat: 0
			}
		},
		onLoad(option){
			this.shopStat = option.id
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
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			shopStatRequest(){
				this.shopStat = 5
			},
			onNext(e){
				if(e == 0 || e == 1 ){
					uni.reLaunch({
						url: '../index/index'
					})
				} else if(e == 2){
					uni.navigateTo({
						url: 'business-in'
					})
				} else if( e == 4 ){
					uni.navigateBack()
				} else if( e == 5){
					uni.navigateTo({
						url: 'contract'
					})
				} else if(e == 3){
					uni.navigateTo({
						url: 'contract'
					})
				} else if(e == 6){
					uni.navigateTo({
						url: 'upload-photo'
					})
				} else if( e == 8) { 
					this.statRequest()
				} else {
					return
				}
			}
		}
	}
</script>

<style>
	.container-zero{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 246upx;
	}
	
	.container-zero image{
		width: 114upx;
		height: 124upx;
	}
	
	.container-title{
		font-size: 40upx;
		margin-top: 42upx;
	}
	
	.container-desc{
		font-size: 26upx;
		margin-top: 50upx;
		margin-left: 26upx;
		margin-right: 26upx;
	}
	
	.button{
		width: 698upx;
		height: 80upx;
		color: #fff;
		background: #09BA51;
		border-radius: 6upx;
		font-size: 26upx;
		margin-top: 168upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
</style>
