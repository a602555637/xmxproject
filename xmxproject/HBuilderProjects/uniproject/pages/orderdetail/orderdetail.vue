<template>
	<view class="container">
		<view class="container-title">工作人员30分钟内与您联系</view>
		<view>
			<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" />
		</view>
		<view class="order-background">
			<view class="order-detail">
				<text>{{phoneType}}</text>
				<view class="order-repair" v-for="(item, index) in repaireList" :key="index">
					<view class="order-repair-item">
						<text class="item-title">{{item.title}}</text>
						<text class="item-price">{{item.price}}</text>
					</view>
				</view>
				<view class="total">
					<text class="total-price-text">合计：</text>
					<text class="total-price">{{totalPrice}}</text>
				</view>
				<view class="order-button">
					<view @click="openPopup" class="order-button-left">取消订单</view>
					<view class="order-button-right">在线客服</view>
				</view>
				<view class="line"></view>
				<view class="order-content">
					<text>订单编号：{{orderContent.num}}</text>
					<text>下单时间：{{orderContent.orderTime}}</text>
					<text>服务类型：{{orderContent.type}}</text>
					<text>上门时间：{{orderContent.onTime}}</text>
					<text>上门地址：{{orderContent.address}}</text>
				</view>
			</view>
		</view>
		<uniPopup custom="true" ref="popup" type="center">
			<view class="popup-container">
				<text>取消订单原因</text>
				<view class="popup-info" v-for="(item, index) in canelInfo" :key="index">
					<view class="popup-info-item">
						<image v-if="isSelected" src="../../static/qx@2x.png"></image>
						<image v-else src="../../static/qx-h@2x.png"></image>
						<text>{{item.info}}</text>
					</view>
				</view>
				<view @click="onCancel" class="popup-button">确定</view>
			</view>
		</uniPopup>
	</view>
</template>

<script>
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				isSelected:true,
				canelInfo:[{
					info:'信息填写错误'
				},{
					info:'重复下单'
				},{
					info:'时间来不及'
				},{
					info:'不想修了'
				},{
					info:'其他原因'
				}],
				orderContent:{
					num:'1545545489646',
					orderTime:'2019.08.12 12:34:32',
					type:'上门维修',
					onTime:'8月12日 15：30',
					address:'郫都区望丛中路13号7栋203号'
				},
				totalPrice:'￥245',
				repaireList:[{
					title:'屏幕损坏',
					price:'￥499'
				},{
					title:'电池不续航',
					price:'￥599'
				}],
				phoneType:'苹果 iPhone7 玫瑰金'
			}
		},
		methods: {
			openPopup(){
            this.$refs.popup.open()
			},
        closePopup(){
            this.$refs.popup.close()
			},
			onCancel(){
				uni.showToast({
					title: '取消成功'
				})
				uni.navigateTo({
					url: 'order-cancel',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		components:{
			uniPopup
		}

	}
</script>

<style>
	.popup-button{
		background: #09BA51;
		width: 400upx;
		height: 70upx;
		border-radius: 12upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 30upx;
		margin-left: 60upx;
		margin-top: 16upx;
	}
	
	.popup-info-item{
		margin-left: 60upx;
		margin-bottom: 20upx;
	}
	
	.popup-info-item text{
		font-size: 26upx;
		margin-left: 20upx;
	}
	
	.popup-container>text{
		font-size: 30upx;
		font-weight: bold;
		margin-top: 40upx;
		margin-left: 170upx;
		margin-bottom: 40upx;
	}
	
	.popup-container{
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
		width: 520upx;
		height: 600upx;
		border-radius: 20upx;
	}
	
	.popup-info-item image{
		width: 26upx;
		height: 26upx;
	}
	
	.order-content text{
		font-size: 26upx;
		margin-bottom: 10upx;
		margin-top: 30upx;
		margin-left: 40upx;
	}
	
	.order-content{
		display: flex;
		flex-direction: column;
		margin-bottom: 40upx;
	}
	
	.line{
		border-bottom: 1px solid #EEEEEE;
	}
	
	.order-button-left,
	.order-button-right{
		font-size: 26upx;
		border-radius: 12upx;
		width: 300upx;
		height: 64upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.order-button-left{
		border: 1px solid #EEEEEE;
	}
	.order-button-right{
		background: #09BA51;
		color: #FFFFFF;
	}
	
	.order-button{
		display: flex;
		justify-content: space-between;
		margin-left: 40upx;
		margin-right: 40upx;
		margin-bottom: 40upx;
	}
	
	.total{
		margin-left: 40upx;
		margin-bottom: 36upx;
	}
	
	.total-price{
		font-size: 30upx;
		font-weight: bold;
		color: #09BA51;
	}
	
	.total-price-text{
		font-size: 26upx;
		color: #09BA51;
	}
	
	.order-repair-item{
		display: flex;
		justify-content: space-between;
		padding-left: 40upx;
		padding-right: 40upx;
		margin-bottom: 20upx;
	},
	.item-title,
	.item-price{
		font-size: 26upx;
	}
	
	.order-detail>text{
		font-size: 32upx;
		font-weight: bold;
		margin-top: 30upx;
		margin-left: 40upx;
		margin-bottom: 20upx;
	}
	
	.order-detail{
		background: #fff;
		width: 698upx;
		display: flex;
		flex-direction: column;
		position: relative;
		top:-20upx;
		margin-left: 26upx;
		border-radius: 20upx 20upx  0 0;
	}
	
	.order-background{
		background: #F3F3F3;
	}
	
	.map{
		height: 516upx;
		width: 750upx;
	}
	
	.container-title{
		font-size: 40upx;
		font-weight: bold;
		height: 140upx;
		display: flex;
		align-items: center;
		padding-left: 26upx;
	}
</style>
