<template>
	<view class="container">
		<text>身份证照</text>
		<view class="container-id">
			<view @click="onChooseImg1" class="container-id-left">
				<image v-if="imgUrl1 == ''" src="../../static/my/sfz@2x.png"></image>
				<image v-else :src="imgUrl1"></image>
				<text>正面</text>
			</view>
			<view @click="onChooseImg2" class="container-id-right">
				<image v-if="imgUrl2 == ''" src="../../static/my/sfz@2x.png"></image>
				<image v-else :src="imgUrl2"></image>
				<text>反面</text>
			</view>
		</view>
		<text>营业执照</text>
		<image v-if="imgUrl3 == ''" @click="onChooseImg3" src="../../static/my/yyzz@2x.png"></image>
		<image v-else @click="onChooseImg3" :src="imgUrl3"></image>

		<text>工作台照</text>
		<image v-if="imgUrl4 == ''" @click="onChooseImg4" src="../../static/my/yyzz@2x.png"></image>
		<image v-else @click="onChooseImg4" :src="imgUrl4"></image>

		<text>店外景照</text>
		<image v-if="imgUrl5 == ''" @click="onChooseImg5" src="../../static/my/yyzz@2x.png"></image>
		<image v-else @click="onChooseImg5" :src="imgUrl5"></image>

		<text>店内景照</text>
		<image v-if="imgUrl6 == ''" @click="onChooseImg6" src="../../static/my/yyzz@2x.png"></image>
		<image v-else @click="onChooseImg6" :src="imgUrl6"></image>

		<view @click="onSubmit" class="container-button">提交</view>
		<view class="margin-fixed"></view>
	</view>
</template>

<script>
export default {
	onLoad() {
		uni.getStorage({
			key: 'openId',
			success: res => {
				this.openId = res.data;
			}
		});
	},
	data() {
		return {
			imgUrl1: '',
			imgUrl2: '',
			imgUrl3: '',
			imgUrl4: '',
			imgUrl5: '',
			imgUrl6: '',
			openId: ''
		};
	},
	methods: {
		onSubmit() {
			if (this.imgUrl1 == '' || this.imgUrl2 == '') {
				uni.showToast({
					title: '请上传身份证照片',
					icon: 'none'
				});
			} else if (this.imgUrl3 == '') {
				uni.showToast({
					title: '请上传营业执照',
					icon: 'none'
				});
			} else {
				uni.showToast({
					title: '提交成功'
				});
				setTimeout(() => {
					uni.navigateTo({
						url: 'verify-result'
					});
				}, 1000);
			}
		},
		onChooseImg1() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				success: res => {
					this.imgUrl1 = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://www.finetwm.com/xmRepair/shopInfo/upload',
						filePath: this.imgUrl1,
						header: {
							'content-Type': 'multipart/form-data'
						},
						name: 'file',
						formData: {
							type: 1,
							openid: this.openId
						}
					});
				}
			});
		},
		onChooseImg2() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				success: res => {
					this.imgUrl2 = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://www.finetwm.com/xmRepair/shopInfo/upload', //仅为示例，非真实的接口地址
						filePath: this.imgUrl2,
						header: {
							'content-Type': 'multipart/form-data'
						},
						name: 'file',
						formData: {
							type: 2,
							openid: this.openId
						}
					})
				}
			})
		},
		onChooseImg3() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				success: res => {
					this.imgUrl3 = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://www.finetwm.com/xmRepair/shopInfo/upload', //仅为示例，非真实的接口地址
						filePath: this.imgUrl3,
						header: {
							'content-Type': 'multipart/form-data'
						},
						name: 'file',
						formData: {
							type: 3,
							openid: this.openId
						}
					});
				}
			});
		},
		onChooseImg4() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				success: res => {
					this.imgUrl4 = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://www.finetwm.com/xmRepair/shopInfo/upload', //仅为示例，非真实的接口地址
						filePath: this.imgUrl4,
						header: {
							'content-Type': 'multipart/form-data'
						},
						name: 'file',
						formData: {
							type: 7,
							openid: this.openId
						}
					});
				}
			});
		},
		onChooseImg5() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				success: res => {
					this.imgUrl5 = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://www.finetwm.com/xmRepair/shopInfo/upload', //仅为示例，非真实的接口地址
						filePath: this.imgUrl5,
						header: {
							'content-Type': 'multipart/form-data'
						},
						name: 'file',
						formData: {
							type: 5,
							openid: this.openId
						}
					});
				}
			});
		},
		onChooseImg6() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				success: res => {
					this.imgUrl6 = res.tempFilePaths[0];
					uni.uploadFile({
						url: 'https://www.finetwm.com/xmRepair/shopInfo/upload', //仅为示例，非真实的接口地址
						filePath: this.imgUrl6,
						header: {
							'content-Type': 'multipart/form-data'
						},
						name: 'file',
						formData: {
							type: 6,
							openid: this.openId
						}
					});
				}
			});
		}
	}
};
</script>

<style>
.margin-fixed {
	height: 56upx;
}

.container-button {
	width: 698upx;
	height: 80upx;
	border-radius: 12upx;
	margin-top: 117upx;
	margin-left: 26upx;
	font-size: 30upx;
	color: #ffffff;
	background: #09ba51;
	display: flex;
	justify-content: center;
	align-items: center;
}

.container-id {
	display: flex;
	margin-top: 46upx;
}

.container-id-left {
	margin-left: 26upx;
	margin-right: 26upx;
}

.container-id-left,
.container-id-right {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.container-id-left image,
.container-id-right image {
	width: 336upx;
	height: 168upx;
	margin-bottom: 20upx;
}

.container > image {
	width: 698upx;
	height: 260upx;
	margin-top: 46upx;
	margin-left: 26upx;
}

.container-id text {
	font-size: 26upx;
	color: #888f97;
}

.container > text {
	display: block;
	font-size: 30upx;
	margin-top: 40upx;
	margin-left: 46upx;
}
</style>
