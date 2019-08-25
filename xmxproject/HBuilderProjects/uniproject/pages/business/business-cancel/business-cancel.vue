<template>
	<view>
		<view class="container" v-for="(item, index) in content" :key="index">
			<view class="container-left">
				<text class="item-title">{{item.title}}</text>
				<text class="item-desc">{{item.desc}}</text>
			</view>
			<view class="container-right">
				<text class="item-price">{{item.price}}</text>
				<text class="item-status">{{item.status}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:[{
					title:'苹果 iPhone7 玫瑰金',
					desc:'到店维修',
					price:'￥400',
					status:'已取消'
				},{
					title:'vivo X27',
					desc:'上门维修',
					price:'￥512',
					status:'已取消'
				}]
			}
		},
	}
</script>

<style>
	.container{
		display: flex;
		height: 160upx;
		width: 750upx;
		align-items: center;
		margin-left: 26upx;
		border-bottom: 1px solid #F3F3F3;
	}
	
	.container-left{
		display: flex;
		flex-direction: column;
	}
	
	.container-right{
		display: flex;
		flex-direction: column;
		position: absolute;
		right: 36upx;
	}
	
	.item-status{
		font-size: 26upx;
		color: #FF5A5A;
		margin-top: 12upx;
	}
	
	.item-price{
		font-size: 30upx;
	}
	
	.item-title{
		font-size: 30upx;
		margin-bottom: 10upx;
	}
	
	.item-desc{
		font-size: 26upx;
	}
	
</style>
