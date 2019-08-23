<template>
	<view>
		<view class="search">
			<image src="../../static/wxcomponentimg/search@2x.png"></image>
			<text>搜索机型</text>
		</view>
		<view class="select-class">
			<view class="tap-area">
				<view class="select-phone selected-line-class">{{phone}}</view>
			</view>
			<view class="tap-area">
				<view class="select-pad">{{pad}}</view>
			</view>
		</view>
		<view class="line-thin"></view>
		<view class="container">
			<view>
				<view class="left-slide" v-for="(item, index) in sildeList">
					<view class="left-slide-item">{{item.title}}</view>
				</view>
			</view>
			<view>
				<view class="right-slide" v-for="(item, index) in phoneType">
					<view @click="openPopup" class="right-slide-item">{{item.type}}</view>
				</view>
			</view>
		</view>
		<view>
			<uniPopup custom="true" ref="popup" type="bottom">
				<view class="popup-content">
					<view class="content-top">
						<text>颜色选择</text>
						<image @click="closePopup" src="../../wxcomponents/popupcon/close@2x.png"></image>
					</view>
					<view class="middle-con">
						<view class="content-middle" v-for="item in popupContent">
							<view class="content-middle-item">
								<image :src="item.imgSrc"></image>
								<text>{{item.text}}</text>
							</view>
						</view>
					</view>
					<view @click="onNext" class="content-button">
						<image src="../../wxcomponents/popupcon/next@2x.png"></image>
					</view>
				</view>
			</uniPopup>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				popupContent: [{
					imgSrc: '../../wxcomponents/popupcon/gold@2x.png',
					text: '金色'
				}, {
					imgSrc: '../../wxcomponents/popupcon/rose@2x.png',
					text: '玫瑰金'
				}, {
					imgSrc: '../../wxcomponents/popupcon/silver@2x.png',
					text: '银色'
				}, {
					imgSrc: '../../wxcomponents/popupcon/black@2x.png',
					text: '黑色'
				}],
				isSelected: false,
				phone: '手机',
				pad: '平板',
				sildeList: [{
					title: '苹果'
				}, {
					title: '华为'
				}, {
					title: '小米'
				}, {
					title: '苹果'
				}, {
					title: '华为'
				}, {
					title: '小米'
				}],
				phoneType: [{
					type: 'iPhone XS Max'
				}, {
					type: 'iPhone XS'
				}, {
					type: 'iPhone XR'
				}, {
					type: 'iPhone X'
				}]
			}
		},
		methods: {
			onNext() {
				uni.navigateTo({
					url: '../faults/faults'
				});
			},
			openPopup() {
				this.$refs.popup.open()
			},
			closePopup(){
				this.$refs.popup.close()
			}

		},
		components: {
			uniPopup
		}
	}
</script>

<style>
	.content-top {
		display: flex;
		justify-content: space-between;
		margin: 30upx 26upx 60upx 26upx;
	}

	.content-button {
		position: absolute;
		bottom: 30upx;
		left: 26upx;
	}

	.popup-content {
		display: flex;
		flex-direction: column;
		background: #fff;
		height: 560upx;
	}

	.content-button image {
		width: 698upx;
		height: 80upx;
	}

	.content-top image {
		width: 42upx;
		height: 42upx;
	}

	.content-top text {
		font-size: 32upx;
		font-weight: bold;

	}
	
	.middle-con{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-left: 64upx;
		/* margin-right: 64upx; */
	}
	
	.content-middle-item{
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-wrap: wrap;
		margin-right: 64upx;
		margin-bottom: 40upx;
	}

	.content-middle-item image {
		width: 140upx;
		height: 70upx;
		margin-bottom: 10upx;
	}

	.content-middle-item text {
		font-size: 26upx;
	}

	.right-slide-item {
		padding-top: 30upx;
		padding-bottom: 30upx;
		font-size: 32upx;
	}

	.right-slide {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin-left: 194upx;
	}

	.left-slide {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 206upx;
		background: #F3F3F3;
	}

	.left-slide-item {
		font-size: 32upx;
		margin-top: 30upx;
		margin-bottom: 30upx;
	}

	.container {
		display: flex;
		flex-direction: row;
	}

	.line-thin {
		border-bottom: 1px solid #eee;
		position: relative;
		top: -16upx;
	}

	.search image {
		width: 30upx;
		height: 30upx;
	}

	.search text {
		font-size: 26upx;
		color: #888F97;
	}

	.search {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 698upx;
		height: 70upx;
		background: #F3F3F3;
		border-radius: 12upx;
		margin-left: 26upx;
		margin-top: 30upx;
	}

	.select-class {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 102upx;
	}

	.tap-area {
		display: flex;
		justify-content: center;
	}

	.select-phone,
	.select-pad {
		font-size: 32upx;
		font-weight: bold;
		color: #888F97;
		padding-bottom: 20upx;
	}

	.selected-line-class {
		border-bottom: 10upx solid #09BA51;
		color: #333;
	}

	.selected-background-class {
		background: #fff;
	}
</style>
