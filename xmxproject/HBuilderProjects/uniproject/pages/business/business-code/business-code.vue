<template>
	<view class="container">
		<image class="avatar" :src="avatarUrl"></image>
		<text class="name">{{name}}</text>
		<image class="code" :src="imgUrl"></image>
		<text class="content">成为小美修代言人</text>
		<text class="content1">分享二维码 领取奖励金</text>
		<text class="desc">保存后分享至朋友圈</text>
		<view @click="photoSave" class="save">保存图片</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				openId: '',
				imgUrl:'',
				avatarUrl:'',
				name:'',
			}
		},
		onLoad(e) {
			console.log(e)
			let id = e.id
			if(id == '1'){
				uni.getUserInfo({
					success:res=>{
						console.log(res)
						this.name = res.userInfo.nickName
						this.avatarUrl = res.userInfo.avatarUrl
						uni.getStorage({
							key:'openId',
							success:res=>{
								this.openId = res.data
								this.requestUrl()
							}
						})
					}
				})
			} else {
				uni.getStorage({
					key:'openId',
					success:res=>{
						this.openId = res.data
						this.onName()
						this.requestUrl()
					}
				})
			}
			
		},
		methods:{
			requestUrl(){
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/common/getQRcode',
					method: 'POST',
					header:{
						"content-Type": "application/x-www-form-urlencoded"
					},
					data: {
						openid: this.openId
					},
					success: res => {
						this.imgUrl = res.data.data.success
					},
					fail: err=>{
						console.log(err)
					}
				})
			},
			onName(){
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/shopInfo/getHeadPortraitAndName',
					method: 'POST',
					header:{
						"content-Type": "application/x-www-form-urlencoded"
					},
					data: {
						openid: this.openId
					},
					success: res=>{
						console.log(res.data.data)
						this.name = res.data.data.name
						this.avatarUrl = res.data.data.head_portrait
					}
				})
			},
			photoSave(){
				uni.saveImageToPhotosAlbum({
					filePath:this.imgUrl,
					success: res=>{
						console.log('save success')
					}
				})
			}
		}
	}
</script>

<style>
	.save{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 500upx;
		height: 80upx;
		background: #09BA51;
		color: #FFFFFF;
		font-size: 30upx;
		margin-top: 30upx;
		border-radius: 12upx;
	}
	
	.desc{
		color: #888F97;
		font-size: 26upx;
		margin-top: 84upx;
	}
	
	.content1{
		font-size: 26upx;
		margin-top: 6upx;
	}
	
	.content{
		font-size: 26upx;
		margin-top: 50upx;
	}
	
	.code{
		width: 312upx;
		height: 312upx;
		margin-top: 50upx;
	}
	
	.name{
		font-size: 26upx;
		margin-top: 20upx;
	}
	
	.avatar{
		width: 84upx;
		height: 84upx;
		margin-top: 40upx;
		border-radius: 50upx;
	}
	
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #FFFFFF;
		margin-left: 54upx;
		margin-top: 60upx;
		width: 640upx;
		height: 972upx;
	}
	
	page{
		background: #EEEEEE;
	}
</style>
