<template>
	<view>
		<business-order-list :isButton="isButton" :orderList="content"></business-order-list>
	</view>
</template>

<script>
	import businessOrderList from '../../../wxcomponents/business/business-order-list.vue'
	
export default {
	onLoad(e) {
		let sid = e.id
		if(sid == 1){
			this.onStatus()
			uni.setNavigationBarTitle({
				title:'待处理'
			})
		} else if(sid == 2){
			uni.setNavigationBarTitle({
				title:'维修中'
			})
		} else if(sid == 3){
			uni.setNavigationBarTitle({
				title:'已完成'
			})
		} else if(sid == 4){
			uni.setNavigationBarTitle({
				title:'已取消'
			})
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
			content: [
				{
					brand: '苹果',
					model: 'iPhone 7',
					color: '玫瑰金',
					repairType: '到店维修',
					price: '400',
					status: '待处理'
				},
				{
					brand: 'VIVO',
					model: 'm30',
					color: '银金',
					repairType: '到店维修',
					price: '700',
					status: '待处理'
				}
			]
		}
	},
	methods:{
		onNext(){
			uni.navigateTo({
				url: '../business-orderstatus/business-orderstatus'
			})
		},
		onStatus(){
			console.log(this.content)
			for (var i = 0; i < this.content.length; i++) {
				let status = this.content[i].status
				console.log(status)
				if(status == '待处理'){
					this.isButton = 'submit'
				}
			}
		}
	},
	components:{
		businessOrderList
	}
}
</script>

<style>

</style>
