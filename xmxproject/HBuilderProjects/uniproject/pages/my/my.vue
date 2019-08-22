<template>
	<view class="">
		<view class="container">
			<image class="avatar" src="../../static/wxcomponentimg/avatar@2x.png"></image>
			<text class="name">{{name}}</text>
			<view class="waittime" v-if="isVip">等待期还剩45天</view>
			<view class="content">
				<image class="phone-vip" v-if="!isVip" src="../../static/my/un-phoneVIP@2x.png"></image>
				<image class="phone-vip" v-else src="../../static/my/phoneVIP@2x.png"></image>
				<image v-if="!isVip" src="../../static/my/un-padVIP@2x.png"></image>
				<image v-else src="../../static/my/padvip@2x.png"></image>
			</view>
			<view class="line"></view>
		</view>
		<uniList>
			<uniItem @click="onBeVip" title="会员"  thumb='../../static/my/icon/vip@2x.png'></uniItem>
			<text class="info-text">会员详情</text>
			<uniItem @click="onOrderList" title="订单" thumb='../../static/my/icon/orders@2x.png'></uniItem>
			<uniItem @click="onMyWallet" title="钱包" thumb='../../static/my/icon/wallet@2x.png'></uniItem>
			<uniItem title="卡包" thumb='../../static/my/icon/cards@2x.png'></uniItem>
			<uniItem @click="onAddressList" title="地址管理" thumb='../../static/my/icon/ad@2x.png'></uniItem>
			<uniItem title="商家入驻" thumb='../../static/my/icon/join@2x.png'></uniItem>
			<uniItem title="在线客服" thumb='../../static/my/icon/ser@2x.png'></uniItem>
		</uniList>
	</view>

</template>

<script>
	import uniList from '../../components/uni-list/uni-list.vue'
	import uniItem from '../../components/uni-list-item/uni-list-item.vue'
	export default {
		data(){
			return{
				name: 'silence',
				isVip: true
			}
		},
		methods:{
			onBeVip(){
				uni.navigateTo({
					url: '../bevip/bevip',
					success: res => {
						console.log('success')
					}
				});
			},
			onOrderList(){
				uni.navigateTo({
					url: '../orderlist/orderlist'
				});
			},
			onMyWallet(){
				uni.navigateTo({
					url: '../mywallet/mywallet'
				});
			},
			onAddressList(){
				uni.navigateTo({
					url: '../addresslist/addresslist'
				});
			}
		},
		components: {
			uniList,
			uniItem
		}
	}
</script>

<style>
	.line {
		width: 750upx;
		height: 20upx;
		background: #F3F3F3;
	}

	.avatar {
		width: 160upx;
		height: 140upx;
		margin-top: 26upx;
	}

	.name {
		font-size: 32upx;
		font-weight: bold;
		margin-top: 14upx;
	}

	.waittime {
		font-size: 24upx;
		color: #EB5555;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}

	.content image {
		width: 128upx;
		height: 36upx;
		margin-bottom: 50upx;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.phone-vip {
		margin-right: 16upx;
	}
	
	.info-text{
		font-size: 26upx;
		color: #EB5555;
		position: absolute;
		right: 74upx;
		top: 48upx;
	}
</style>
