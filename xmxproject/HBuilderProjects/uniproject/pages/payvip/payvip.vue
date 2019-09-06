<template>
	<view>
		<view class="container">
			<text class="title">绑定IMEI串码</text>
			<input class="input" type="text" value="test" />
			<text class="info">手机拨号输入*#06#</text>
		</view>
		
		<!-- chooseimage -->		
		<image v-if="isSecond" @click="bindChangeImage" class="upload-image" :src="imgUrl[0]" />
		<image v-else @click="bindImage" class="upload-image" src="../../static/vip/scjt@2x.png" />
		<view class="line-thick"></view>
		<view class="content">
			<view class="content-item" v-for="(item, index) in contentItem" :key="index" >
				<text class="item-title">{{item.title}}</text>
				<input type="text" :placeholder="item.placeholderText" placeholder-class="placeholder-class" />
			</view>
		</view>
		<view class="container-info">
			<text>说明</text>
			<text>* IMEI串码将作为本机所享特权的唯一识别码，该识别码仅用于识别会员身份，平台将为用户识别码保密，确认即授权获取您的识别码。</text>
			<text>* 亲友号非共享特权，仅可用于关联登录，如绑定手机无法开机、触屏失灵等，可使用亲友号进行登录下单，每个会员可添加两个亲友号。</text>
		</view>

		<view @click="onVipAlready" class="button">确认支付</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSecond:false,
				imgUrl:[],
				test: '',
				isPaySuccess:true,
				contentItem:[{
					title:'绑定亲友号（选填）',
					placeholderText:'请输入亲友手机号'
				},{
					title:'验证码',
					placeholderText:'请输入收到的验证码'
				}]
			}
		},
		methods:{
			onVipAlready(){
				console.log(this.isPaySuccess)
				let isPaySuccess = this.isPaySuccess
				uni.redirectTo({
					url: '../bevip/bevip?={{isPaySuccess}}'
				})
			},
			bindImage(){
				uni.chooseImage({
				    count: 1,
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: res=> {
				        console.log(res)
						this.imgUrl[0] = res.tempFilePaths[0]
						this.isSecond = true
				    }
				})
			},
			bindChangeImage(){
				uni.showActionSheet({
				    itemList: ['重新上传', '预览图片'],
				    success: res=> {
				        // console.log(res.tapIndex)
						if(res.tapIndex == 0){
							console.log(this.imgUrl[0])
							this.imgUrl[0] = ''
							console.log(this.imgUrl[0])
							this.bindImage()
						}else{
							uni.previewImage({
								urls:this.imgUrl
							})
						}
				    }
				})
			}
		},
	}
</script>

<style>
	.upload-image{
		width: 698upx;
		height: 98upx;
		margin-left: 26upx;
		margin-bottom: 40upx;
	}
	
	.container-info{
		display: flex;
		flex-direction: column;
		margin-left: 26upx;
		margin-right: 26upx;
		margin-top: 60upx;
	}
	
	.container-info text{
		font-size: 26upx;
		color: #888F97;
		margin-bottom: 10upx;
	}
	
	.content-item input{
		width: 698upx;
		height: 80upx;
		display: flex;
		align-items: center;
		border: 1px solid #EEEEEE;
	}
	
	.content-item{
		margin-bottom: 22upx;
	}
	
	.content{
		margin-left: 26upx;
		margin-top: 40upx;
	}
	
	.item-title{
		display: block;
		font-size: 30upx;
		margin-bottom: 20upx;
	}
	
	.placeholder-class{
		color: #888F97;
		font-size: 24upx;
		margin-left: 20upx;
	}
	
	.line-thick{
		background: #F3F3F3;
		width: 750upx;
		height: 20upx;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-top: 80upx;
		margin-left: 26upx;
		margin-bottom: 60upx;
	}

	.title {
		font-size: 30upx;
		margin-bottom: 20upx;
	}

	.input {
		width: 698upx;
		height: 80upx;
		border: 1px solid #EEEEEE;
		margin-bottom: 20upx;
	}

	.info {
		font-size: 26upx;
		color: #888F97;
	}

	.button {
		width: 750upx;
		height: 100upx;
		background: #09BA51;
		font-size: 40upx;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0upx;
	}
</style>
