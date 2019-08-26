<template>
	<view class="">
		<view class="container-input">
			<text>店铺名称：</text>
			<input type="text" placeholder="请输入店铺名称" placeholder-class="placeholder-class" />
		</view>
		<view class="container-input">
			<text>负责人：</text>
			<input type="text" placeholder="请输入负责人姓名" placeholder-class="placeholder-class" />
		</view>
		<view class="container-input">
			<text>手机号：</text>
			<input type="text" placeholder="请输入负责人手机号" placeholder-class="placeholder-class" />
		</view>
		<view class="container-input">
			<text>验证码：</text>
			<input type="text" placeholder="请输入验证码" placeholder-class="placeholder-class" />
			<view class="input-ecode">
				获取验证码
			</view>
		</view>
		<view class="line-thick"></view>
		<view class="container-input">
			<text>地区</text>
			<view class="container-list-item">
				<text class="list-item-desc">郫都区</text>
				<image class="right-arrow" src="../../static/wxcomponentimg/arrow@2x.png"></image>
			</view>
		</view>
		<view class="container-input">
			<text>街道</text>
			<view class="container-list-item">
				<text class="list-item-desc">望丛中路</text>
				<image class="right-arrow" src="../../static/wxcomponentimg/arrow@2x.png"></image>
			</view>
		</view>
		<view class="container-input-address">
			<text>详细地址：</text>
			<input type="text" class="input-address" />
		</view>
		<view class="line-thick"></view>
		<view class="container-input">
			<text>企业类型</text>
			<view class="container-list-item">
				<text class="list-item-desc">个人</text>
				<image class="right-arrow" src="../../static/wxcomponentimg/arrow@2x.png"></image>
			</view>
		</view>
		<view class="container-input">
			<text>服务类型</text>
			<view class="container-list-item">
				<text class="list-item-desc">上门维修</text>
				<image class="right-arrow" src="../../static/wxcomponentimg/arrow@2x.png"></image>
			</view>
		</view>
		<view @click="onSave" class="container-button">保存</view>
	</view>
</template>

<script>
	
	export default {
		methods:{
			onSave(){
				uni.showToast({
					title: '保存成功'
				})
				uni.navigateTo({
					url:'upload-photo'
				})
			}
		}
	}
</script>

<style>
	.container-button{
		margin-top: 80upx;
		margin-left: 26upx;
		margin-bottom: 56upx;
		width: 698upx;
		height: 80upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		background: #09BA51;
		border-radius: 12upx;
	}
	
	.container-input-address text{
		font-size: 30upx;
	}
	
	.container-input-address{
		display: flex;
		margin-left: 26upx;
		margin-top: 40upx;
		margin-bottom: 120upx;
	}
	
	.container-list-item image{
		position: relative;
		top: 5upx;
	}
	
	.list-item-desc{
		color: #333333;
		font-size: 30upx;
		margin-right: 18upx;
	}
	
	.container-list-item{
		position: absolute;
		right: 0upx;
	}
	
	.right-arrow{
			width: 18upx;
			height: 30upx;
	}
	
	.line-thick{
		width: 750upx;
		height: 20upx;
		background: #F3F3F3;
	}
	
	.container-input>view{
		font-size: 30upx;
		color: #09BA51;
		position: absolute;
		right: 26upx;
	}
	
	.placeholder-class{
		font-size: 24upx;
		color: #888F97;
	}
	
	.container-input>text{
		font-size: 30upx;
	}
	
	.container-input{
		display: flex;
		height: 120upx;
		align-items: center;
		margin-left: 26upx;
		margin-right: 26upx;
		border-bottom: 1px solid #F3F3F3;
	}
	
</style>
