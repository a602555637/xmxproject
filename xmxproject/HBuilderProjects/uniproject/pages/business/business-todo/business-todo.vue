<template>
	<view>
		<view v-if="errMsg == 0 " class="default-content">
			<image src="../../../static/business/order-404@2x.png"></image>
			<text>还没有订单哦</text>
		</view>
		<view v-else>
			<business-order-list :isButton="isButton" :orderList="content"></business-order-list>
		</view>
	</view>
</template>

<script>
	import businessOrderList from '../../../wxcomponents/business/business-order-list.vue'
	import request from '../../../components/pocky-request/index.js'
export default {
	onLoad(e) {
		// 动态显示导航栏
		let sid = e.id
		if(sid == 1){
			uni.setNavigationBarTitle({
				title:'待处理'
			})
			// 待处理状态request地址
			this.urlRequest()
		} else if(sid == 2){
			uni.setNavigationBarTitle({
				title:'维修中'
			})
			this.orderRequest(sid - 1)
		} else if(sid == 3){
			uni.setNavigationBarTitle({
				title:'已完成'
			})
			this.orderRequest(sid - 1)
		} else if(sid == 4){
			uni.setNavigationBarTitle({
				title:'已取消'
			})
			this.orderRequest(sid - 1)
		} else{
			uni.setNavigationBarTitle({
				title:'总收益'
			})
		}
	},
	data() {
		return {
			orderStatusId:'',
			isButton:'',
			content: {},
			errMsg:1
		}
	},
	methods:{
		onNext(){
			uni.navigateTo({
				url: '../business-orderstatus/business-orderstatus'
			})
		},
		urlRequest(){
			const instance = new request()
			const requestModel = instance.post({
				url:'order/findShopOrderByStatuss',
				contentType: 'form',
				data:{
					shopId:1,
					orderStatus1:0,
					orderStatus2:4
				},
			}).then(res=>{
				this.content = res.data.data
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
		},
		orderRequest(sid){
			const instance = new request()
			const requestModel = instance.post({
				url:'order/findShopOrderByStatus',
				contentType: 'form',
				data:{
					shopId:1,
					orderStatus:sid
				},
			}).then(res=>{
				this.content = res.data.data
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
		}
	},
	components:{
		businessOrderList
	}
}
</script>

<style>
	.default-content image{
		width: 124upx;
		height: 122upx;
		margin-bottom: 40upx;
	}
	
	.default-content text{
		font-size: 40upx;
	}
	
	.default-content{
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-top: 250upx;
	}
</style>
