<template>
	<view class="container">
		<view @click="openPopup" class="container-item" v-for="(item,index) in faulesList" :key="index">
			<image :src="item.imgSrc"></image>
			<text>{{item.text}}</text>
		</view>
		<uniPopup custom="true" ref="popup" type="bottom">
			<view class="container-popup">
				<view class="popup-title">
					<text>故障选择</text>
					<image @click="closePopup" src="../../static/faults/close@2x.png"></image>
				</view>
				<view @click="onSelected" :id="index" :key="index" class="popup-content" v-for="(item, index) in faulesItem">
					<image v-if="index == isSelectedId " src="../../static/faults/xz@2x.png" class="popup-content-icon"></image>
					<image v-else src="../../static/faults/wxz@2x.png" class="popup-content-icon"></image>
					<view class="popup-content-middle">
						<text class="item-title">{{item.title}}</text>
						<text class="item-subtitle">{{item.subtitle}}</text>
					</view>
					<text class="item-price">{{item.price}}</text>
				</view>
				<view class="popup-bottom">
					<view class="popup-bottom-left">
						<text class="total-price-text">合计：</text>
						<text class="total-price">{{totalPrice}}</text>
					</view>
					<image class="popup-bottom-right" src="../../static/faults/hymfx@2x.png"></image>
				</view>
				<view class="popup-button">
					<view @click="onsiteRepair" class="popup-button-left">
						<image src="../../static/faults/door@2x.png"></image>
						<text class="popup-button-text">上门维修</text>
					</view>
					<view class="popup-button-right">
						<image src="../../static/faults/tostore@2x.png"></image>
						<text class="popup-button-text">到店维修</text>
					</view>
					<view class="line-thin"></view>
				</view>
			</view>
		</uniPopup>
	</view>
</template>

<script>
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				totalPrice:652,
				isSelectedId:'',
				isSelected:false,
				unSelectedImg:'../../static/faults/wxz@2x.png',
				selectedImg:'../../static/faults/wxz@2x.png',
				faulesItem:[{
					price:'￥1599',
					title:'内屏碎（图像不正常）',
					subtitle:'换屏幕'
				},{
					price:'￥1599',
					title:'外屏碎（无3D，集中爆点）',
					subtitle:'换屏幕'
				},{
					price:'￥1599',
					title:'外屏碎（无3D，集中爆点）',
					subtitle:'换屏幕'
				}],
				faulesList: [{
					imgSrc: '../../static/faults/screen@2x.png',
					text: '屏幕问题'
				}, {
					imgSrc: '../../static/faults/battery@2x.png',
					text: '电池电源问题'
				}, {
					imgSrc: '../../static/faults/signal@2x.png',
					text: '连接/信号问题'
				}, {
					imgSrc: '../../static/faults/camare@2x.png',
					text: '摄像头问题'
				}, {
					imgSrc: '../../static/faults/voice@2x.png',
					text: '声音问题'
				}, {
					imgSrc: '../../static/faults/botton@2x.png',
					text: '按键问题'
				}, {
					imgSrc: '../../static/faults/shield@2x.png',
					text: '外壳边框问题'
				}, {
					imgSrc: '../../static/faults/board@2x.png',
					text: '主板维修'
				}, {
					imgSrc: '../../static/faults/switchoff@2x.png',
					text: '开关机问题'
				}, {
					imgSrc: '../../static/faults/unkeep@2x.png',
					text: '保养服务'
				}, {
					imgSrc: '../../static/faults/install@2x.png',
					text: '安装服务'
				}, {
					imgSrc: '../../static/faults/other@2x.png',
					text: '其他故障'
				}]
			}
		},
		methods: {
			onSelected(e){
				this.isSelectedId = e.currentTarget.id
				// uni.setStorageSync({
				// 	
				// })
				// console.log(e.currentTarget.id)
			},
			openPopup() {
				this.$refs.popup.open()
			},
			closePopup() {
				this.$refs.popup.close()
			},
			onsiteRepair(e){
				console.log(e)
				uni.navigateTo({
					url: '../onsiterepair/onsiterepair'
				});
			}
		},
		components: {
			uniPopup
		}
	}
</script>

<style>
	.line-thin{
		display: flex;
		position: absolute;
		left: 0upx;
		width: 750upx;
		border-bottom: 1px solid #eee;
	}
	
	.popup-button{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 97upx;
		margin-top: 42upx;
	}
	
	.popup-button-left{
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #eee;
		border-left: 1px solid #fff !important;
		width: 375upx;
	}
	
	.popup-button-right{
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #eee;
		border-right: 1px solid #fff !important;
		width: 375upx;
	}
	
	.popup-button-text{
		font-size: 24upx;
	}
	
	.popup-button-left image{
		width: 44upx;
		height: 40upx;
		margin-right: 14upx;
	}
	
	.popup-button-right image{
		width: 42upx;
		height: 42upx;
		margin-right: 14upx;
	}
	
	.popup-bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30upx;
	}
	
	.popup-bottom image{
		width: 130upx;
		height: 24upx;
	}
	
	.total-price-text{
		font-size: 26upx;
		color: #09BA51;
	}
	
	.total-price{
		font-size: 32upx;
		font-weight: bold;
		font-family: Segoe UI;
		color: #09BA51;
	}
	
	.item-price{
		font-size: 32upx;
		display: flex;
		position: absolute;
		right: 56upx;
	}
	
	.item-title{
		font-size: 32upx;
		margin-bottom: 6upx;
	}
	
	.item-subtitle{
		font-size: 24upx;
		color: #888F97;
	}
	
	.popup-content-middle{
		display: flex;
		flex-direction: column;
	}
	
	.popup-content{
		display: flex;
		align-items: center;
		height: 120upx;
		background: #F3F3F3;
		padding-left: 30upx;
		margin-top: 36upx;
	}
	
	.popup-content>image{
		width: 32upx;
		height: 32upx;
		margin-right: 24upx;
	}
	
	.popup-title text{
		font-size: 32upx;
		font-weight: bold;
	}
	
	.popup-title image {
		width: 42upx;
		height: 42upx;
	}
	
	.popup-title{
		display: flex;
		justify-content: space-between;
	}
	
	.container-popup{
		display: flex;
		flex-direction: column;
		background: #fff;
		padding: 30upx 26upx 0upx 26upx;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		margin-left: 40upx;
		justify-content: center;
		align-items: flex-start;

	}

	.container-item {
		display: flex;
		align-items: center;
		width: 660upx;
		height: 120upx;
		border-bottom: 1px solid #eee;
	}

	.container-item image {
		width: 40upx;
		height: 40upx;
		margin-right: 26upx;
	}

	.container-item text {
		font-size: 30upx;
	}
</style>
