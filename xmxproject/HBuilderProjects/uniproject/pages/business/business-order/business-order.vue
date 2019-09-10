<template>
	<view>
		<view v-if="errMsg == 0 " class="default-content">
			<image src="../../../static/business/order-404@2x.png"></image>
			<text>还没有订单哦</text>
		</view>
		<view v-else>
			<business-order-list :orderList="content"></business-order-list>
		</view>
	</view>
</template>

<script>
	import businessOrderList from '../../../wxcomponents/business/business-order-list.vue'
	import request from '../../../components/pocky-request/index.js'

	export default {
		onLoad() {
			this.requestUrl()
		},
		data() {
			return {
				content: {},
				errMsg: 1
			}
		},
		methods: {
			requestUrl() {
				const instance = new request()
				const requestModel = instance.post({
					url: 'order/findAllShopOrder',
					contentType: 'form',
					data: {
						shopId: 1
					},
				}).then(res => {
					console.log(res)
					this.content = res.data.data
				}).catch(err => {
					console.log(err)
				})
			}
		},
		components: {
			businessOrderList
		}
	}
</script>

<style>
	.default-content image {
		width: 124upx;
		height: 122upx;
		margin-bottom: 40upx;
	}

	.default-content text {
		font-size: 40upx;
	}

	.default-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-top: 250upx;
	}
</style>
