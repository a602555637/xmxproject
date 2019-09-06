<template>
	<view class="container">
		<view class="container-top">
			<!-- <text>取消订单</text> -->
			
			<text v-if="isAleadyTaken">已接单</text>
			<text v-else-if="isRepairing">维修中</text>
			<text v-else-if="isCustom">维修中</text>
			<text v-else-if="!isFinished">已完成</text>
			<text v-else>待接单</text>
			
		</view>
		<view class="container-middle" >
			<text>{{phoneType}}</text>
			<view class="repair-content" v-for="(item, index) in repairContent" :key="index">
				<text class="item-title">{{item.title}}</text>
				<text class="item-price">{{item.price}}</text>
			</view>
			<view class="total-content">
				<text class="total-title">合计：</text>
				<text class="total-price">{{totalPrice}}</text>
			</view>
			<view v-if="isFinished">
				<view v-if="isOnsite" class="container-button">
					<view v-if="isAleadyTaken" class="button-left">开始维修</view>
					<view v-else-if="isRepairing" class="button-left">完成确认</view>
					<view v-else class="button-left">去抢单</view>
					<view class="button-right">休息一下</view>
				</view>
				<view v-else class="container-button">
					<view v-if="isAleadyTaken" class="button-left" @click="bindRepairing">开始维修</view>
					<view v-else-if="isRepairing" class="button-left" @click="bindOncustom">完成确认</view>
					<view v-else-if="isCustom" class="button-left fixed" >等待顾客确认</view>
					<view v-else class="button-left" @click="bindAleadyTaken">马上接单</view>
					<view class="button-right">联系顾客</view>
				</view>
			</view>
			<view class="line-thin"></view>
		</view>
		<view class="container-bottom">
			<text>订单编号：1545545489646</text>
			<text>下单时间：2019.08.12 12:34:32</text>
			<text>顾客信息：王先生 1457852144</text>
			<text>服务类型：上门维修</text>
			<text>上门时间：8月12日 15：30</text>
			<text>上门地址：郫都区望 丛中路13号7栋203号</text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(e) {
			console.log(e.id)
			if(e.id == 1){
				this.bindRepairing()
			} else if(e.id == 2){
				this.isFinished = false
			} 
			
			// this.bindRequest(e.id - 1)
			
		},
		data() {
			return {
				isFinished:true,
				isCustom:false,
				isRepairing:false,
				isAleadyTaken: false,
				isOnsite:false,
				phoneType:'苹果 iPhone7 玫瑰金',
				totalPrice:'￥'+ 990,
				repairContent: [{
					title:'屏幕损坏',
					price:'￥499'
				},{
					title:'电池不续航',
					price:'￥499'
				}],
				content:{}
			}
		},
		methods:{
			bindAleadyTaken(){
				this.isAleadyTaken = true
			},
			bindRepairing(){
				this.isAleadyTaken = false
				this.isRepairing = true
			},
			bindOncustom(){
				this.isCustom = true
				this.isRepairing = false
			},
			bindRequest(sid){
				uni.request({
					url:'https://120.24.180.246/xmRepair/order/findShopOrderByStatus',
					method:'POST',
					header:{
						'content-type': 'application/x-www-form-urlencoded'
					},
					data:{
						shopId:1,
						orderStatus1:sid
					},
					success:res=>{
						// this.content = res.data.data
						console.log(res.data.data)
					}
				})
			}
		}
	}
</script>

<style>
	.fixed{
		background: #888F97 !important;
	}
	
	.container-bottom{
		display: flex;
		flex-direction: column;
	}
	
	.container-bottom>text{
		font-size: 26upx;
		margin-left: 26upx;
		margin-bottom: 42upx;
	}
	
	.line-thin{
		border-bottom: 1px solid #F3F3F3;
		width: 698upx;
		margin-top: 40upx;
		margin-bottom: 40upx;
	}
	
	.container-button{
		display: flex;
		margin-top: 90upx;
	}
	
	.button-left{
		background: #09BA51;
		color: #FFFFFF;
		/* margin-left: 36upx; */
		margin-right: 40upx;
	}
	
	.button-right{
		color: #333333;
		border: 1px solid #f3f3f3;
	}
	
	.button-left,
	.button-right{
		width: 320upx;
		height: 64upx;
		font-size: 26upx;
		border-radius: 12upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.total-price{
		font-size: 30upx;
		font-weight: bold;
		color: #09BA51;
	}
	
	.total-title{
		font-size: 26upx;
		color: #09BA51;
	}
	
	.container-middle{
		margin-left: 26upx;
		margin-top: 30upx;
		display: flex;
		flex-direction: column;
	}
	
	.container-middle>text{
		font-size: 32upx;
		font-weight: bold;
		margin-bottom: 20upx;
	}
	
	.repair-content{
		display: flex;
		justify-content: space-between;
		margin-right: 26upx;
		margin-bottom: 20upx;
	}
	.item-title{
		font-size: 26upx;
	}
	
	.item-price{
		font-size: 26upx;
	}
	
	.container-top{
		margin-top: 44upx;
		padding-bottom: 42upx;
		border-bottom: 1px solid #f3f3f3;
	}
	
	.container-top text{
		font-size: 40upx;
		font-weight: bold;
		margin-left: 26upx;
	}
</style>
