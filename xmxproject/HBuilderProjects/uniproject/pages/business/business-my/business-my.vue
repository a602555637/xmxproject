<template>
	<view class="container">
		<view class="">
			<image @click="bindChooseImage" v-show="isDefaultAvatar" class="camera" src="../../../static/wxcomponentimg/htx@2x.png"></image>
			<image @click="bindChooseImage" class="avatar" :src="avatarUrl"></image>
			<text class="avatar-text">小美郫都区总店</text>
			<view class="avatar-background">
				<image class="fixed" src="../../../static/wxcomponentimg/dp-bsbg@2x.png" mode=""></image>
				<image class="avatar-bg" mode="aspectFill" :src="avatarUrl"></image>
			</view>
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
		onLoad() {
			uni.request({
				url: 'https://www.finetwm.com/xmRepair/shopInfo/getHeadPortrait',
				method: 'GET',
				data: {
					id: 1
				},
				success: res => {
					console.log(res.data)
				}
			})
		},
		data() {
			return {
				isDefaultAvatar:true,
				avatarUrl:'../../../static/wxcomponentimg/avatar@2x.png',
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
			},
			bindChooseImage(){
				uni.chooseImage({
					count:1,
					success:res=>{
						console.log(res.tempFilePaths[0])
						let tempFilePaths = res.tempFilePaths[0]
						this.avatarUrl = tempFilePaths
						this.isDefaultAvatar = false
						uni.request({
							url: 'https://www.finetwm.com/xmRepair/shopInfo/saveHeadPortrait',
							method: 'POST',
							data: {
								imgUrl:this.avatarUrl,
								id: 1
							},
							success: res => {
								console.log(res)
							},
							fail:err=>{
								console.log(err)
							}
						})
					}
				})
			}
		}
	}
	
</script>

<style>
	.camera{
		width: 130upx;
		height: 46upx;
		position: absolute;
		top: 154upx;
		left: 302upx;
		z-index: 999;
	}
	
	.fixed{
		width: 750upx;
		height: 58upx;
		position: absolute;
		top: 326upx;
		left: 0;
		z-index: 99;
	}
	
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
		width: 140upx;
		height: 140upx;
		position: absolute;
		top: 60upx;
		left: 296upx;
		z-index: 99;
		border-radius: 100upx;
	}
	
	.avatar-bg{
		width: 840upx;
		height: 390upx;
		filter: blur(2upx);
		margin-bottom: 60upx;
		position: absolute;
		left: -44upx;
		top: -10upx;

	}
	
	.avatar-background{
		width: 750upx;
		height: 390upx;
	}
</style>
