<template>
	<view class="container">
		<text class="container-title"  >苹果 iPhone7 玫瑰金</text>
		<xlist title="屏幕损坏" price= "499" ></xlist>
		<xlist title="电池不续航" price= "499" ></xlist>
		<xlist-price title="合计：" price="1024"></xlist-price>
		<view class="line-thick"></view>
		
		<xlocation :isAddress="isAddress"></xlocation>
		
		<picker mode="selector" :value="index" :range="range" @change="bindPickerChange">
			<view class="picker-class">
				<text>维修中心</text>
				<view class="picker-right">
					<text>{{rangeText}}</text>
					<image src="../../static/wxcomponentimg/arrow@2x.png"></image>
				</view>
			</view>
		</picker>
		
		<!-- 到店时间 -->
		
		<xlist-input></xlist-input>

		<view class="line-thick"></view>
		<view class="text-area">
			<text>故障详情（选填）：</text>
			<textarea value=""  />
		</view>
		<view class="line-thick"></view>
		<view @click="onConfirm" class="container-deal">
			<image v-if="isConfirm" src="../../static/repair/xy-h@2x.png" ></image>
			<image v-else src="../../static/repair/xy@2x.png" ></image>
			<text>
				我已同意
				<text class="deal">《XXXX协议》</text>
			</text>
		</view>
		<view class="xbutton">
			<view @click="onNext" class="xbutton-left">
				会员免费修
			</view>
			<view @click="onOrder" class="xbutton-right">
				<text class="xbutton-right-text">用户特惠修</text>
				<text class="xbutton-rightprice">￥400</text>
			</view>
		</view>
	</view>
</template>
	
<script>
	import xlist from '../../wxcomponents/xlist/xlist.vue'
	import xlistPrice from '../../wxcomponents/xlist/xlistPrice.vue'
	import uniList from '../../components/uni-list-c/uni-list.vue'
	import uniListItem from '../../components/uni-list-item-c/uni-list-item.vue'
	import xlistInput from '../../wxcomponents/xlist/xlist-input.vue'
	import xlocation from '../../wxcomponents/xlocation/xlocation.vue'
	export default {
		data() {
			return {
				rangeText:'郫都区总店',
				range:['郫都区总店','郫都区一分店','郫都区二分店'],
				isAddress:false,
				isConfirm:false
			}
		},
		methods: {
			bindPickerChange(e){
				// console.log(e.detail.value)
				this.rangeText = this.range[e.detail.value]
			},
			onConfirm() {
				this.isConfirm = !this.isConfirm
			},
			onNext(){
				if ( this.isConfirm){
					uni.navigateTo({
						url: '../bevip/bevip'
					})
				}
				return
			},
			onOrder(){
				if (this.isConfirm){
					uni.navigateTo({
						url: '../orderdetail/orderdetail'
					})
				}
			}
		},
		components: {
			xlist,
			xlistPrice,
			uniList,
			uniListItem,
			xlistInput,
			xlocation
		}
	}
</script>

<style>
	.picker-class{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 698upx;
		height: 120upx;
		border-bottom: 1px solid #EEEEEE;
		margin-left: 26upx;
		font-size: 30upx;
	}
	
	.picker-right{
		display: flex;
		position: absolute;
		align-items: center;
		right: 26upx;
	}
	
	.picker-right image{
		width: 18upx;
		height: 30upx;
		margin-left: 40upx;
	}
	
	.xbutton-rightprice{
		font-size: 24upx;
		color: #09BA51;
	}
	
	.xbutton-left,
	.xbutton-right{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
	}
	
	.xbutton-right{
		width: 374upx;
		border-top: 1px solid #F3F3F3;
	}
	
	.xbutton-left{
		background: #F2C900;
		color: #FFFFFF;
		width: 376upx;
	}
	
	.xbutton{
		display: flex;
		height: 100upx;
	}
	
	.container-deal{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 34upx;
		margin-bottom: 24upx;
	}
	
	.deal{
		font-size: 26upx;
		color: #09BA51;
	}
	
	.container-deal image{
		width: 24upx;
		height: 24upx;
		margin-right: 6upx;
	}
	
	.container-deal>text{
		font-size: 26upx;
		color: #888F97;
	}
	
	textarea{
		width: 700upx;
		height: 200upx;
	}
	
	.text-area{
		display: flex;
		flex-direction: column;
		margin-top: 30upx;
		margin-left: 26upx;
		margin-right: 26upx;
	}
	
	.text-area text{
		font-size: 30upx;
	}
	
	.container-title{
		font-size: 32rpx;
		font-weight: bold;
		margin-top: 38upx;
		padding-left: 26upx;
		padding-bottom: 42upx;
		display: flex;
		border-bottom: 1px solid #F3F3F3;
	}
</style>
