<template>
	<view>
		<view class="search">
			<image src="../../static/wxcomponentimg/search@2x.png"></image>
			<text>搜索机型</text>
		</view>
		<!-- 选项卡 -->
		<xselect></xselect>
		<view class="container">
			<!-- 左侧本地数据 -->
			<view class="slide-left">
				<view @click="onSelectedId" :class="index == selectedId ? 'active' :''" class="left-item" v-for="(item,index) in slideList"
				 :key="index" :id="index">
					<text>{{item.brand}}</text>
				</view>
			</view>
			<!-- 右侧获取数据 -->
			<view class="slide-right">
				<view @click="openPopup" class="right-item" v-for="(item, index) in phoneType" :key="index">
					<text>{{item.type}}</text>
				</view>
			</view>
		</view>
		<!-- 底部弹框 -->
		<uniPopup custom="true" ref="popup" type="bottom">
			<view class="popup-content">
				<view class="content-top">
					<text>颜色选择</text>
					<image @click="closePopup" src="../../wxcomponents/popupcon/close@2x.png"></image>
				</view>
				<view class="middle-con">
					<view class="content-middle" >
						<view :class="index == colorId ? 'active-text' :''" @click="onSelectedColor" class="content-middle-item" 
						v-for="(item, index) in popupContent" :key="index" :id="index">
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
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import xselect from '../../wxcomponents/xselect/xselect.vue'
	export default {
		onLoad() {
			uni.request({
				url: 'https://120.24.180.246:8080/xmRepair/phoneBrand/getBrand',
				method: 'GET',
				data: {},
				success: res => {
					this.slideList = res.data.data
					// console.log(res.data.data)
				}
			})
			// uni.request({
			// 	url: 'https://120.24.180.246:8080/xmRepair/phoneBrand/getPhoneType',
			// 	method: 'GET',
			// 	data: {
			// 		id:2
			// 	},
			// 	success: res => {
			// 		console.log(res.data.data)
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// })
		},
		data() {
			return {
				colorId:null,
				selectedId: 0,
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
				slideList: [],
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
			closePopup() {
				this.$refs.popup.close()
			},
			onSelectedId(e) {
				this.selectedId = e.currentTarget.id
				// console.log(e.currentTarget.id)
				let svalueId = e.currentTarget.id
				let svalue = this.slideList[svalueId].brand
				uni.setStorage({
					key:'model',
					data:svalue
				})
			},
			onSelectedColor(e){
				this.colorId = e.currentTarget.id
				// console.log(e.currentTarget)
			}

		},
		components: {
			uniPopup,
			xselect
		}
	}
</script>

<style>
	.active-text{
		color: #09BA51;
	}
	
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
		
		.content-middle{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 630upx;
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
	
	
	.slide-right {
		margin-left: 194upx;
		margin-top: 30upx;
	}

	.right-item {
		font-size: 32upx;
		margin-bottom: 60upx;
	}

	.active {
		background: #FFFFFF;
	}

	.left-item {
		width: 206upx;
		height: 102upx;
		font-size: 32upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.slide-left {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F3F3F3;
		width: 206upx;
		height: 896upx;
	}

	.container {
		display: flex;
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
</style>
