<template>
	<view class="container">
		<view class="container-top">
			<text>已取消</text>
		</view>
		<view class="container-middle">
			<text>{{phoneType}}</text>
			<view class="repair-content" v-for="(item, index) in repairContent" :key="index">
				<text class="item-title">{{item.title}}</text>
				<text class="item-price">{{item.price}}</text>
			</view>
			<view class="total-content">
				<text class="total-title">合计：</text>
				<text class="total-price">{{totalPrice}}</text>
			</view>
			<view class="container-button">
				<view class="button-left">再去维修</view>
				<view class="button-right">联系商家</view>
				<view class="button-right">在线客服</view>
			</view>
			<view class="line-thin"></view>
		</view>
		<view class="container-bottom">
			<text>订单编号：1545545489646</text>
			<text>下单时间：2019.08.12 12:34:32</text>
			<text>服务类型：上门维修</text>
			<text>上门时间：8月12日 15：30</text>
			<text>上门地址：郫都区望 丛中路13号7栋203号</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneType:'苹果 iPhone7 玫瑰金',
				totalPrice:'￥'+ 990,
				repairContent: [{
					title:'屏幕损坏',
					price:'￥499'
				},{
					title:'电池不续航',
					price:'￥499'
				}]
			}
		},
	}
</script>

<style>
	.container-bottom{
		display: flex;
		flex-direction: column;
	}
	
	.container-bottom>text{
		font-size: 26upx;
		margin-left: 26upx;
		margin-bottom: 42upx;
	}
	
	.line-thin{
		border-bottom: 1px solid #F3F3F3;
		width: 698upx;
		margin-top: 40upx;
		margin-bottom: 40upx;
	}
	
	.container-button{
		display: flex;
		margin-top: 90upx;
	}
	
	.button-left{
		background: #09BA51;
		color: #FFFFFF;
		/* margin-left: 36upx; */
		margin-right: 34upx;
	}
	
	.button-right{
		color: #333333;
		border: 1px solid #f3f3f3;
		margin-right: 34upx;
	}
	
	.button-left,
	.button-right{
		width: 320upx;
		height: 64upx;
		font-size: 26upx;
		border-radius: 12upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.total-price{
		font-size: 30upx;
		font-weight: bold;
		color: #09BA51;
	}
	
	.total-title{
		font-size: 26upx;
		color: #09BA51;
	}
	
	.container-middle{
		margin-left: 26upx;
		margin-top: 30upx;
		display: flex;
		flex-direction: column;
	}
	
	.container-middle>text{
		font-size: 32upx;
		font-weight: bold;
		margin-bottom: 20upx;
	}
	
	.repair-content{
		display: flex;
		justify-content: space-between;
		margin-right: 26upx;
		margin-bottom: 20upx;
	}
	.item-title{
		font-size: 26upx;
	}
	
	.item-price{
		font-size: 26upx;
	}
	
	.container-top{
		margin-top: 44upx;
		padding-bottom: 42upx;
		border-bottom: 1px solid #f3f3f3;
	}
	
	.container-top text{
		font-size: 40upx;
		font-weight: bold;
		margin-left: 26upx;
	}
</style>
