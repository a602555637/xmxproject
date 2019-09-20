<template>
	<view>
		<view class="container" v-for="(item, index) in orderList" :key="index">
			<view @click="bindDetail(item.orderStatus)" class="container-left">
				<text class="phone-info">{{item.phone.brand + item.phone.model + item.phone.colour}}</text>
				<text v-if="item.serviceMode == 0" class="repair-type">上门维修</text>
				<text v-else class="repair-type">到店维修</text>
			</view>
			<view v-if="item.orderStatus == 0" class="container-button" @click="bindDetail(item.orderStatus)">{{buttonSubmit}}</view>
			<view @click="onCancel" v-else-if="item.orderStatus == 4" class="container-button button-background">{{buttonCancel}}</view>
			<view v-else class="container-right">
				<text class="price">{{item.price}}元</text>
				<text v-if="item.orderStatus == 2" class="status finished">已完成</text>
				<text v-else-if="item.orderStatus == 3" class="status cancel">已取消</text>
				<text v-else-if="item.orderStatus == 1" class="status repairing">维修中</text>
				<text v-else class="status todo">待处理</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
			bindDetail(id){
				console.log(id)
				if(id == 3){
					uni.reLaunch({
						url:'../business-cancel/business-cancel?id' + id
					})
				} else{
					uni.navigateTo({
						url: '../../business/business-orderstatus/business-orderstatus?id=' + id
					})
				}
			},
			onCancel(){
				uni.reLaunch({
					url:'../../business/business-cancel/business-cancel'
				})
			}
		}
	}
</script>

<style>
	.container-left,
	.container-right{
		display: flex;
		flex-direction: column;
		
	}
	
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
		border-bottom: 1px solid #EEEEEE;
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
