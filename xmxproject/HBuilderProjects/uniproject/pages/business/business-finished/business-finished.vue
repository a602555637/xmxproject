<template>
	<view>
		<view class="container">
			<camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>
			<view class="btn-area">
				<view class="start-record" @click="startRecord">开始录像</view>
				<view class="stop-record" @click="stopRecord">结束录像</view>
			</view>
			<view class="line-thick"></view>
			<text class="preview">预览</text>
			<!-- <image v-if="src" mode="widthFix" :src="src"></image> -->
			<video v-if="videoSrc" class="video" :src="videoSrc"></video>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.ctx = uni.createCameraContext()
		},
		data() {
			return {
				videoSrc: '',
				src: ''
			}
		},
		methods: {
			startRecord() {
				this.ctx.startRecord({
					success: (res) => {
						console.log(res)
					}
				})
			},
			stopRecord() {
				this.ctx.stopRecord({
					success: (res) => {
						console.log(res)
						this.src = res.tempThumbPath
						this.videoSrc = res.tempVideoPath
						uni.request({
							url: 'https://www.finetwm.com/xmRepair/order/uploadVideo',
							method: 'POST',
							data: {
								videoUrl: this.videoSrc,
								orderId: 1000000000001
							},
							success: res => {
								console.log(res)
							}
						})
					}
				})
			},
		}
	}
</script>

<style>
	.preview{
		color: #888F97;
		font-size: 26upx;
		margin-top: 60upx;
		margin-left: 60upx;
	}
	
	.btn-area {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}

	.start-record,
	.stop-record {
		width: 230upx;
		height: 80upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 12upx;
		font-size: 26upx;
	}

	.start-record {
		background: #09BA51;
		color: #FFFFFF;
	}

	.stop-record {
		border: 1px solid #EEEEEE;
	}

	.video {
		margin: 50px auto;
		width: 100%;
		height: 300px;
	}
</style>
