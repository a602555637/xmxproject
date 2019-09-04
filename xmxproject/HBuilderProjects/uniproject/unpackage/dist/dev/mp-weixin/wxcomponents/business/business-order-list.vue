<template>
	<view>
		<view class="container" v-for="(item, index) in orderList" :key="index">
			<view class="container-left">
				<text class="phone-info">{{item.brand + item.model + item.color}}</text>
				<text class="repair-type">{{item.repairType}}</text>
			</view>
			<view v-if="isButton == 'submit'" class="container-button">{{buttonSubmit}}</view>
			<view v-else-if="isButton == 'cancel'" class="container-button button-background">{{buttonCancel}}</view>
			<view v-else class="container-right">
				<text class="price">{{item.price}}元</text>
				<text :class="{finished : item.status == '已完成',
					cancel:item.status == '已取消',
					repairing:item.status == '维修中',
					todo:item.status == '待处理'}"
				 class="status">{{item.status}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		created() {
			let orderList = this.orderList
			for (var i = 0; i < orderList.length; i++) {
				let status = this.orderList[i].status
			}
		},
		name: 'business-order-list',
		props: {
			orderList: Array,
			isButton:''
		},
		data() {
			return {
				status: '',
				orderItem: false,
				buttonSubmit:'一键接单',
				buttonCancel:'确认取消'
			}
		},
		methods: {

		}
	}
</script>

<style>
	.finished {
		color: #51D587;
	}

	.cancel {
		color: #FF5A5A;
	}

	.repairing {
		color: #FF984A;
	}

	.todo {
		color: #64A7FF;
	}

	.status {
		font-size: 26upx;
	}

	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 160upx;
		width: 689upx;
		margin-left: 26upx;
	}

	.phone-info {
		font-size: 30upx;
		margin-bottom: 10upx;
	}

	.repair-type {
		font-size: 26upx;
		color: #888F97;
	}

	.price {
		font-size: 30upx;
		margin-bottom: 10upx;
	}
	
	
	.container-button{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
		color: #FFFFFF;
		background: #09BA51;
		width: 180upx;
		height: 60upx;
		border-radius: 30upx;
	}
	
	.button-background{
		background: #FF5A5A !important;
	}
</style>
