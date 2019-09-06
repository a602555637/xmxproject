<template>
	<view>
		<business-order-list :isButton="isButton" :orderList="content"></business-order-list>
	</view>
</template>

<script>
	import businessOrderList from '../../../wxcomponents/business/business-order-list.vue'
	
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
			content: {}
		}
	},
	methods:{
		onNext(){
			uni.navigateTo({
				url: '../business-orderstatus/business-orderstatus'
			})
		},
		// onStatus(){
		// 	console.log(this.content)
		// 	for (var i = 0; i < this.content.length; i++) {
		// 		console.log(this.content[i].orderStatus)
		// 		
		// 	}
		// },
		urlRequest(){
			uni.request({
				url:'https://120.24.180.246/xmRepair/order/findShopOrderByStatuss',
				method:'POST',
				header:{
					'content-type': 'application/x-www-form-urlencoded'
				},
				data:{
					shopId:1,
					orderStatus1:0,
					orderStatus2:4
				},
				success:res=>{
					this.content = res.data.data
				}
			})
		},
		
		orderRequest(sid){
			console.log(sid)
			uni.request({
				url:'https://120.24.180.246/xmRepair/order/findShopOrderByStatus',
				method:'POST',
				header:{
					'content-type': 'application/x-www-form-urlencoded'
				},
				data:{
					shopId:1,
					orderStatus:sid
				},
				success:res=>{
					this.content = res.data.data
					console.log(this.content)
				}
			})
		}
	},
	components:{
		businessOrderList
	}
}
</script>

<style>

</style>
