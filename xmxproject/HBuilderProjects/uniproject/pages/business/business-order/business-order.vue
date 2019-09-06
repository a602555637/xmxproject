<template>
	<view>
		<business-order-list :orderList="content"></business-order-list>
	</view>
</template>

<script>
	import businessOrderList from '../../../wxcomponents/business/business-order-list.vue'
	export default {
		onLoad() {
			uni.request({
				url:'https://120.24.180.246/xmRepair/order/findAllShopOrder',
				method:'POST',
				header:{
					'content-type': 'application/x-www-form-urlencoded'
				},
				data:{
					shopId:1
				},
				success:res=>{
					this.content = res.data.data
					console.log(this.content)
				}
			})
		},
		data() {
			return {
				content: {}
			}
		},
		components: {
			businessOrderList
		}
	}
</script>

<style>
	.container {
		display: flex;
		height: 160upx;
		width: 750upx;
		align-items: center;
		margin-left: 26upx;
		border-bottom: 1px solid #F3F3F3;
	}

	.container-left {
		display: flex;
		flex-direction: column;
	}

	.container-right {
		display: flex;
		flex-direction: column;
		position: absolute;
		right: 36upx;
	}

	.item-status {
		font-size: 26upx;
		color: #51D587;
		margin-top: 12upx;
	}

	.item-price {
		font-size: 30upx;
	}

	.item-title {
		font-size: 30upx;
		margin-bottom: 10upx;
	}

	.item-desc {
		font-size: 26upx;
	}
</style>
