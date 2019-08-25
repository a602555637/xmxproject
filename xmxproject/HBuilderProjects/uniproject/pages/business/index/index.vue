<template>
	<view class="container">
		<view class="container-header">
			<image src="../../../static/baner1@2x.png"></image>
		</view>
		<!-- 搜索组件引用 -->
		<search class="search" title="搜索订单" />

		<view class="container-button">
			<view class="button-top">
				<view @click="onOrder" class="container-button-top">
					<image src="../../../static/business/qbdd@2x.png"></image>
					<text>全部订单</text>
				</view>
				<view @click="onTodo" class="container-button-top">
					<image src="../../../static/business/dcl@2x.png"></image>
					<text>待处理</text>
				</view>
				<view @click="onRepairing" class="container-button-top">
					<image src="../../../static/business/wxz@2x.png"></image>
					<text>维修中</text>
				</view>
			</view>
			<view class="button-top button-bottom">
				<view @click="onFinished" class="container-button-top">
					<image src="../../../static/business/ywc@2x.png"></image>
					<text>已完成</text>
				</view>
				<view @click="onCancel" class="container-button-top fixed">
					<image src="../../../static/business/yqx@2x.png"></image>
					<text>已取消</text>
				</view>
				<view @click="onIncome" class="container-button-top button-bottom">
					<image src="../../../static/business/wxz@2x.png"></image>
					<text>总收益</text>
				</view>
			</view>
		</view>
		<view class="container-bottom">
			<view class="bottom-left">
				<image src="../../../static/business/sy-h@2x.png"></image>
				<text>首页</text>
			</view>
			<view @click="onMy" class="bottom-left">
				<image src="../../../static/business/wd@2x.png"></image>
				<text>我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	import search from '../../../wxcomponents/common/search.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onMy(){
				uni.navigateTo({
					url: '../business-my/business-my'
				})
			},
			onOrder(){
				uni.navigateTo({
					url: '../business-order/business-order'
				})
			},
			onTodo(){
				uni.navigateTo({
					url: '../business-todo/business-todo'
				})
			},
			onRepairing(){
				uni.navigateTo({
					url: '../business-repairing/business-repairing'
				})
			},
			onFinished(){
				uni.navigateTo({
					url: '../business-finished/business-finished'
				})
			},
			onCancel(){
				uni.navigateTo({
					url: '../business-cancel/business-cancel'
				})
			},
			onIncome(){
				uni.navigateTo({
					url: '../business-income/business-income'
				})
			}
		},
		components:{
			search
		}
	}
</script>

<style>
	
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
	}
	
	.bottom-left image{
		width: 50upx;
		height: 50upx;
	}
	
	.button-top{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	
	.container-button-top{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 66upx;
		margin-top: 30upx;
	}
	
	.container-button-top image{
		width: 56upx;
		height: 56upx;
		margin-bottom: 12upx;
	}
	
	.container-button-top text {
		font-size: 26upx;
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
