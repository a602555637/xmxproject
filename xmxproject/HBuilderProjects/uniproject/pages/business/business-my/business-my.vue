<template>
	<view class="container">
		<view class="">
			<image class="avatar" src="../../../static/business/avatar@2x.png"></image>
			<text class="avatar-text">小美郫都区总店</text>
			<image class="avatar-bg" src="../../../static/business/avatar@2x.png"></image>
		</view>
					<!-- list -->
		<view class="container-list">
			<view @click="onDetail(index)" class="list-item" v-for="(item, index) in listTitle" :key="index">
					<text>{{item.title}}</text>
					<!-- <image src="" mode=""></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listTitle: [{
						title:'店铺详情'
				},{
						title:'修改密码'
				},{
						title:'我的收益'
				},{
						title:'在线客服'
				}]
			}
		},
		methods:{
			onDetail(index){
				console.log(index)
				if(index == 0){
					uni.navigateTo({
						url: '../business-detail/business-detail'
					})
				} else if(index == 1) {
					uni.navigateTo({
						url: '../business-key/business-key'
					})
				} else if(index == 2){
					uni.navigateTo({
						url: '../business-income/business-income'
					})
				}
			}
		}
	}
	
</script>

<style>
	.list-item{
		width: 750upx;
		height: 120upx;
		border-bottom: 1px solid #EEEEEE;
		display: flex;
		align-items: center;
	}
	
	.container-list{
		display: flex;
		flex-direction: column;
		margin-left: 44upx;
		margin-right: 28rpx;
	}
	
	.container-list text{
		font-size: 30upx;
	}
	
	.avatar-text{
		font-size: 32upx;
		font-weight: bold;
		color: #FFFFFF;
		text-shadow: 0upx 1upx 2upx #000000;
		position: absolute;
		top: 220upx;
		left: 264upx;
		z-index: 99;
	}
	
	.avatar{
		width: 160upx;
		height: 140upx;
		position: absolute;
		top: 60upx;
		left: 296upx;
		z-index: 99;
	}
	
	.avatar-bg{
		width: 750upx;
		height: 390upx;
		filter: blur(2upx);
		margin-bottom: 60upx;
	}
	
	
</style>
