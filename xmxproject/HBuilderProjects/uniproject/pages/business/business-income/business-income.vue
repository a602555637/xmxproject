<template>
	<view class="container">
		<view class="container-top">
			<text class="container-top-title">共赚了</text>
			<view class="container-total">
				<text class="container-signal">￥</text>
				<text class="container-price">{{totalIncome}}</text>
			</view>
			<image class="container-button" src="../../../static/business/tx-btn@2x.png"></image>
			<image class="container-bg" src="../../../static/business/qb-bg@2x.png"></image>
		</view>
		<view class="container-bottom">
			<view class="content" v-for="(item, index) in content" :key="index" >
				<view class="container-item">
					<text>{{item.phone.brand + ' ' + item.phone.model}}</text>
					<text v-if="item.serviceModel == '1'" class="item-desc">到店维修</text>
					<text v-else class="item-desc">上门维修</text>
				</view>
				<text class="item-price">+￥{{item.price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.requestUrl()
		},
		data() {
			return {
				totalIncome:998,
				content: []
			}
		},
		methods: {
			requestUrl() {
				uni.request({
					url:'https://www.finetwm.com/xmRepair/order/findShopOrderByStatus',
					method:"POST",
					header:{
						"content-Type": "application/x-www-form-urlencoded"
					},
					data:{
						shopId: 1,
						orderStatus:4
					},
					success:res=>{
						this.content = res.data.data
					}
				})
			}
		}
	}
</script>

<style>
	.item-price{
		position: absolute;
		right: 36rpx;
		font-size: 30upx;
	}
	
	.item-desc{
		color: #888F97;
		font-size: 26upx;
		margin-top: 6upx;
	}
	
	.container-item{
		display: flex;
		flex-direction: column;
		margin-left: 26upx;
	}
	
	.container-bottom{
		margin-top: 108upx;
	}
	
	.content{
		width: 750upx;
		height: 160upx;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #f3f3f3;
		
	}
	
	.container-total{
		display: flex;
		/* margin-left: 228upx; */
		margin-bottom: 40upx;
	}
	
	.container-price{
		font-size: 80upx;
		font-family: Impact;
	}
	
	.container-signal{
		font-size: 40upx;
	}
	
	.container-button{
		width: 220upx;
		height: 60upx;
	}
	
	.container-top-title{
		font-size: 32upx;
		margin-top: 40upx;
		margin-bottom: 20upx;
	}
	
	.container-top{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.container-bg {
		position: absolute;
		top: 0upx;
		width: 750upx;
		height: 386upx;
	}
</style>
