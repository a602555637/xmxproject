<template>
	<view>
		<business-order-list :orderList="content"></business-order-list>
	</view>
</template>

<script>
	import businessOrderList from '../../../wxcomponents/business/business-order-list.vue'
	export default {
		data() {
			return {
				content: [{
					brand: '苹果',
					model: 'iPhone 7',
					color: '玫瑰金',
					repairType: '到店维修',
					price: '￥400',
					status: '待处理'
				},{
					brand: '1苹果',
					model: 'iPhone 7',
					color: '玫瑰金',
					repairType: '到店维修',
					price: '￥400',
					status: '已完成'
				},{
					brand: '苹果',
					model: 'iPhone 7',
					color: '玫瑰金',
					repairType: '到店维修',
					price: '￥400',
					status: '维修中'
				}]
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
