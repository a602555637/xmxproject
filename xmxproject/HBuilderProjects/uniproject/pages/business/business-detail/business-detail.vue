<template>
	<view class="container">
		<text>店铺名称：{{content.name}}</text>
		<text>负责人：{{content.manager}}</text>
		<text>手机号：{{content.phone}}</text>
		<view class="line-thick"></view>
		<text>地区：{{content.area}}</text>
		<text>街道：{{content.street}}</text>
		<text>{{content.detail_address}}</text>		
		<view class="line-thick"></view>
		<text v-if="shopTypeId == 1">企业类型：个人</text>
		<text v-else>企业类型：组织</text>
		<text v-if="shopServicemodeId == 1">服务类型：上门维修</text>
		<text v-else>服务类型：到店维修</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: {},
				shopTypeId: 0,
				shopServicemodeId: 0,
				openId:''
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'openId',
				success:res=>{
					this.openId = res.data
					this.onShopid()
				}
			})
		},
		methods:{
			onShopid(){
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/shopInfo/findIdByOpenid',
					method: 'GET',
					data: {
						openid: this.openId
					},
					success:res=>{
						let id = res.data.data.shopid
						this.requestUrl(id)
					}
				})
			},
			requestUrl(e){
				console.log(e)
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/shopInfo/get',
					method: 'GET',
					header:{
						"content-Type": "application/x-www-form-urlencoded"
					},
					data: {
						id: 1
					},
					success: res => {
						console.log(res.data.data)
						// console.log(res.data.data[0])
						this.content = res.data.data
						this.shopTypeId = res.data.data.shopType
						this.shopServicemodeId = res.data.data.shopServicemode
					}
				})
			}
		}
	}
</script>

<style>
	.container{
		display: flex;
		flex-direction: column;
	}
	
	.container text{
		font-size: 30upx;
		margin-top: 40upx;
		padding-bottom: 40upx;
		margin-left: 26upx;
		border-bottom: 1px solid #f3f3f3;
	}
	
	.line-thick{
		background: #F3F3F3;
		width: 750rpx;
		height: 20upx;
	}
</style>
