<template>
	<view class="container">
		<image class="avatar" :src="avatarUrl"></image>
		<text class="name">{{ name }}</text>
		<image v-if="imgUrl" class="code" :src="imgUrl"></image>
		<view class="refresh" v-else @click="onRefresh">重新加载</view>
		<text class="content">成为小美修代言人</text>
		<text class="content1">分享二维码 领取奖励金</text>
		<text class="desc">保存后分享至朋友圈</text>
		<view @click="photoSave" class="save">保存图片</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			openId: '',
			imgUrl: '',
			avatarUrl: '',
			name: ''
		};
	},
	onReady() {
		uni.getUserInfo({
			success: res => {
				this.name = res.userInfo.nickName;
				this.avatarUrl = res.userInfo.avatarUrl;
				uni.getStorage({
					key: 'openId',
					success: res => {
						this.openId = res.data;
						uni.showLoading({
							title: '读取数据中...',
							mask: false
						});
						this.requestUrl();
					}
				});
			}
		});
	},
	onLoad() {
		uni.getUserInfo({
			success: res => {
				this.name = res.userInfo.nickName;
				this.avatarUrl = res.userInfo.avatarUrl;
				uni.getStorage({
					key: 'openId',
					success: res => {
						this.openId = res.data;
						uni.showLoading({
							title: '读取数据中...',
							mask: false
						});
						this.requestUrl();
					}
				});
			}
		});
	},
	methods: {
		onRefresh() {
			this.requestUrl();
		},
		requestUrl() {
			uni.request({
				url: 'https://www.finetwm.com/xmRepair/common/getQRcode',
				method: 'POST',
				header: {
					'content-Type': 'application/json'
				},
				data: {
					openid: this.openId
				},
				success: res => {
					uni.hideLoading();
					this.imgUrl = res.data.data.success
					console.log(res.data);
				},
				fail: err => {
					console.log(err);
				}
			});
		},
		onName() {
			uni.request({
				url: 'https://www.finetwm.com/xmRepair/shopInfo/getHeadPortraitAndName',
				method: 'POST',
				header: {
					'content-Type': 'application/x-www-form-urlencoded'
				},
				data: {
					openid: this.openId
				},
				success: res => {
					console.log(res.data.data);
					this.name = res.data.data.name;
					this.avatarUrl = res.data.data.head_portrait;
				}
			});
		},
		photoSave() {
			uni.saveImageToPhotosAlbum({
				filePath: this.imgUrl,
				success: res => {
					console.log('save success');
				}
			});
		}
	}
}
</script>

<style>
	.refresh{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
		margin-top: 80upx;
		margin-bottom: 80upx;
	}
.save {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 500upx;
	height: 80upx;
	background: #09ba51;
	color: #ffffff;
	font-size: 30upx;
	margin-top: 30upx;
	border-radius: 12upx;
}

.desc {
	color: #888f97;
	font-size: 26upx;
	margin-top: 84upx;
}

.content1 {
	font-size: 26upx;
	margin-top: 6upx;
}

.content {
	font-size: 26upx;
	margin-top: 50upx;
}

.code {
	width: 312upx;
	height: 312upx;
	margin-top: 50upx;
}

.name {
	font-size: 26upx;
	margin-top: 20upx;
}

.avatar {
	width: 84upx;
	height: 84upx;
	margin-top: 40upx;
	border-radius: 50upx;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #ffffff;
	margin-left: 54upx;
	margin-top: 60upx;
	width: 640upx;
	height: 972upx;
}

page {
	background: #eeeeee;
}
</style>
