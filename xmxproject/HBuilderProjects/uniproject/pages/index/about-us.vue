<template>
	<view class="container">
		<canvas canvas-id="canvas" class="canvas">
			<!-- title -->
			<text class="container-title">小美修服务商入驻合作协议</text>
			<!-- 甲方 -->
			<view class="container-header" v-for="(item, index) in titleContent" :key="index">
				<text>{{item.title}}</text>
				<view class="container-header-content fixed">{{item.content}}</view>
			</view>
			<!-- 乙方 -->
			<view class="container-desc">
				<view class="container-desc-item">
					<text class="container-desc-title">乙方：</text>
					<text class="container-desc-content fixed">{{partyTitle}}</text>
				</view>
				<view class="container-desc-item">
					<text class="container-desc-title">代表：</text>
					<text class="container-desc-content fixed">{{manager}}</text>
				</view>
				<view class="container-desc-item">
					<text class="container-desc-title">电话：</text>
					<text class="container-desc-content fixed">{{managerPhone}}</text>
				</view>
				<view class="container-desc-item">
					<text class="container-desc-title">地址：</text>
					<text class="container-desc-content fixed">{{partyAddress}}</text>
				</view>
			</view>
			<!-- content -->
			
		</canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: ''
			}
		},
		onLoad() {
			this.createCanvas()
		},
		methods:{
			createCanvas(){
				const ctx = wx.createCanvasContext('canvas')
				ctx.save()
				ctx.setFontSize(20)
				ctx.fillText('小美修服务商入驻合作协议', 20, 20)
				ctx.fillText('小美修服务商入驻合作协议', 100, 100)
				
				ctx.drawImage('../../static/business/contract@2x.png', 0, 0, 348, 1776)
				ctx.draw(false, (()=>{
					this.requestUrl()
				}))
			},
			requestUrl(){
				uni.canvasToTempFilePath({
				  // x: 100,
				  // y: 200,
				  width: 348,
				  height: 1776,
				  destWidth: 348,
				  destHeight: 1776,
				  canvasId: 'canvas',
				  success: res => {
				    this.imgUrl = res.tempFilePath
					console.log(res.tempFilePath)
				  }
				})
			}
		}
	}
</script>

<style>
	.canvas{
		width: 750upx;
		height: 3650upx;
	}
	
	.contract{
		width: 698upx;
	}
	
	.img-content {
		width: 698upx;
	}
	
	.rule {
		color: #09BA51;
		margin-top: 60upx;
		margin-bottom: 60upx;
	}
	
	.container-submit {
		width: 698upx;
		height: 80upx;
		border-radius: 12upx;
		color: #FFFFFF;
		background: #09BA51;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin-bottom: 56upx;
	}
	
	.sign {
		color: #09BA51;
		margin-left: 30upx;
	}
	
	.party-b-title {
		margin-bottom: 30upx;
	}
	
	.party-b {
		display: flex;
		flex-direction: row;
		margin-top: 80upx;
	
	}
	
	.party-a {
		margin-top: 76upx;
		margin-bottom: 30upx;
	}
	
	page {
		font-size: 26upx;
	}
	
	.fixed {
		font-weight: bold;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		margin-top: 30upx;
		margin-left: 26upx;
		margin-right: 26upx;
	}
	
	.container-title {
		font-size: 32upx;
		font-weight: bold;
		text-align: center;
		margin-bottom: 10upx;
	}
	
	.container-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20upx;
	}
	
	.container-header-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 10upx;
	}
	
	.container-desc {
		margin-top: 46upx;
	}
	
	.container-desc-item {
		margin-bottom: 20upx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.container-desc-content {
		width: 610upx;
		height: 90upx;
		border: 1px solid #F3F3F3;
		display: flex;
		align-items: center;
		padding-left: 30upx;
	}
	
	.container-desc-title {
		width: 90upx;
	}
</style>