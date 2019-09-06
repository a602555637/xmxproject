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
					<text>{{item.title}}</text>
					<text class="item-desc">{{item.desc}}</text>
				</view>
				<text class="item-price">+￥{{item.price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalIncome:900,
				content: [{
					title:'华为 P30 Pro',
					desc:'到店维修',
					price:'400'
				},{
					title:'三星 Galaxy S10 5G版',
					desc:'上门维修',
					price:'500'
				}]
			}
		},
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
