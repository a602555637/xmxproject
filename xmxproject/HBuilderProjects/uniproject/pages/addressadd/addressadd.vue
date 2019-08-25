<template>
	<view>
		<view>
			<input placeholder="请输入您的姓名" class="container-input" placeholder-class="placeholder-class" type="text" 
			value="姓名："  />
			<input placeholder="请输入您的姓名" class="container-input" placeholder-class="placeholder-class" type="text"
			value="手机号："  />
			<input placeholder="请输入您的姓名" class="container-input" placeholder-class="placeholder-class" type="text"
			value="验证码："  />
		</view>
		<view class="line"></view>
		<view>
			<input class="container-input" placeholder-class="placeholder-class" type="text" 
			value="地区"  />
			<input class="container-input" placeholder-class="placeholder-class" type="text"
			value="街道"  />
		</view>
		<textarea class="container-input container-textarea" value="详细地址：" />
		<view @click="onNext" class="bottom-button">
			保存
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			onNext(){
				uni.showToast({
					title: '保存成功'
				})
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	.bottom-button{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: #09BA51;
		color: #FFFFFF;
		width: 698upx;
		height: 80upx;
		margin-left: 26upx;
		margin-top: 80upx;
		font-size: 30upx;
	}
	
	.container-textarea{
		margin-top: 40upx;
	}
	
	.container-input {
		height: 120upx;
		border-bottom: 1px solid #EEEEEE;
		font-size: 30upx;
		margin-left: 26upx;
		margin-right: 26upx;
		
	}

	.placeholder-class {
		color: #888F97;
		font-size: 24upx;
	}
	
	.line{
		width: 750upx;
		height: 20upx;
		background: #F3F3F3;
	}
</style>
