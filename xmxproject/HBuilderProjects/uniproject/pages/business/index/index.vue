<template>
	<view class="container">
		<view class="container-header">
			<image src="../../../static/banner/banner7@2x.png"></image>
		</view>
		<!-- 搜索组件引用 -->
		<search class="search" title="搜索订单" />
		<!-- button -->
		<view class="container-button">
			<view @click="onOrder" :id=index class="container-item" v-for="(item, index) in container" :key="index">
				<image :src="item.imgSrc"></image>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 底部导航 -->
		<view class="container-bottom">
			<view @click="onMyInfo" class="bottom-left">
				<image src="../../../static/business/sy-h@2x.png"></image>
				<text>首页</text>
			</view>
			<view @click="onMy" class="bottom-left">
				<image src="../../../static/business/wd@2x.png"></image>
				<text>我的</text>
			</view>
		</view>
		
		<!-- 弹窗 -->
		<view v-if="isShowPopup" class="popup">
			<view class="popup-content">
				<image @click="onShowPopup" src="../../../static/faults/close@2x.png"></image>
				<text class="order-num">您有{{orderNum}}个新的维修订单</text>
				<text class="order-type">{{orderType}}</text>
				<view class="popup-content-button">
					<view @click="bindLeft" class="button-left">休息一下</view>
					<view @click="bindRight" class="button-right">去抢单</view>
				</view>
			</view>
			<view class="mask"></view>
		</view>
	</view>
</template>

<script>
	import search from '../../../wxcomponents/common/search.vue'
	
	export default {
		onLoad() {
			if(this.orderNum >= 1){
				this.bindShowPopup()
			}
			return
			
		},
		data() {
			return {
				orderNum:0,
				isShowPopup:false,
				orderType:'上门维修',
				navId:'',
				container:[{
					imgSrc:'../../../static/business/qbdd@2x.png',
					title:'全部订单'
				},{
					imgSrc:'../../../static/business/dcl@2x.png',
					title:'待处理'
				},{
					imgSrc:'../../../static/business/wxz@2x.png',
					title:'维修中'
				},{
					imgSrc:'../../../static/business/ywc@2x.png',
					title:'已完成'
				},{
					imgSrc:'../../../static/business/yqx@2x.png',
					title:'已取消'
				},{
					imgSrc:'../../../static/business/zsy@2x.png',
					title:'总收益'
				}]
			}
		},
		methods: {
			onMy(){
				uni.navigateTo({
					url: '../business-my/business-my'
				})
			},
			onOrder(e){
				console.log(e.currentTarget.id)
				this.navId = e.currentTarget.id
				if(this.navId == 5){
					uni.navigateTo({
						url:'../business-income/business-income'
					})
				} else if (this.navId == 0){
					uni.navigateTo({
						url: '../business-order/business-order'
					})
				} else{
					uni.navigateTo({
						url: '../business-todo/business-todo?id=' + this.navId
					})
				}
			},
			onMyInfo(){
				uni.navigateTo({
					url:'../business-my/business-my'
				})
			},
			onRequest(){
				// uni.request
				
			},
			bindLeft(){
				//订单数量 - 1 if = 0  关闭弹窗
				console.log('left')
			},
			bindRight(){
				uni.navigateTo({
					url: '../business-orderstatus/business-orderstatus'
				})
			},
			bindShowPopup(){
				this.isShowPopup = true
			},
			onShowPopup(){
				this.isShowPopup = false
			}
		},
		components:{
			search
		}
	}
</script>

<style>
	.popup-content-button{
		display: flex;
		flex-direction: row;
	}
	
	.mask{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 998;
		background: rgba(0, 0, 0, 0.4);
	}
	
	.button-left,
	.button-right{
		width: 240upx;
		height: 80upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		border-radius: 12upx;
	}
	
	.button-right{
		background: #09BA51;
		color: #FFFFFF;
	}
	
	.button-left{
		border: 1px solid #09BA51;
		color: #09BA51;
		margin-right: 30upx;
	}
	
	.order-num{
		font-size: 32upx;
		margin-top: 60upx;
		margin-bottom: 40upx;
	}
	
	.order-type{
		font-size: 40upx;
		font-weight: bold;
		margin-bottom: 64upx;
	}
	
	.popup-content image{
		width: 42upx;
		height: 42upx;
		right: 28upx;
		top: 30upx;
		position: absolute;
	}
	
	.popup-content{
		background: #FFFFFF;
		width: 600upx;
		height: 400upx;
		border-radius: 20upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 999;
		position: fixed;
		bottom: 346upx;
		left: 76upx;
	}
	
	
	
	.container-button{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
		/* width: 580upx; */
		margin-left: 100upx;
	}
	
	.container-item{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 86upx;
		margin-top: 96upx;
		width: 104upx;
		height: 104upx;
	}
	
	.container-item image{
		width: 56upx;
		height: 56upx;
		margin-bottom: 12upx;
	}
	
	.container-item text{
		font-size: 26upx;
	}
	
	
	.fixed{
		margin-left: 26upx !important;
	}
	.button-bottom{
		margin-left: 12upx !important;
	}
	
	.bottom-left{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.container-bottom{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		border-top: 1px solid #EEEEEE;
		padding-top: 10upx;
		position: absolute;
		bottom: 0upx;
		width: 750upx;
	}
	
	.bottom-left text{
		font-size: 24upx;
		margin-bottom: 4upx;
	}
	
	.bottom-left image{
		width: 50upx;
		height: 50upx;
		margin-bottom: 4upx;
	}
	
	.search{
		margin-left: 26upx;
		margin-top: 30upx;
	}
	
	.container-header image{
		width: 750upx;
		height: 340upx;
	}
	
</style>
