<template>
	<view class="xinput">
			<xinput title="原密码" placeHolderText="请输入原密码"/>
			<xinput title="新密码" placeHolderText="请输入新密码"/>
			<xinput title="确认密码" placeHolderText="请再次输入密码"/>
			<view @click="onNext" class="button">{{buttonTitle}}</view>
	</view>
</template>

<script>
	import xinput from '../../../wxcomponents/common/xinput.vue'
	export default {
		data() {
			return {
				buttonTitle: '保存'
			}
		},
		methods: {
			onNext() {
				uni.showToast({
					title: '修改成功'
				})
				uni.navigateTo({
					url: '../business-my/business-my'
				})
			}
		},
		components:{
			xinput
		}
	}
</script>

<style>
	.xinput{
		margin-top: 80upx;
	}
	.button{
		width: 698upx;
		height: 80upx;
		background: #09BA51;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 12upx;
		margin-left: 26upx;
		color: #FFFFFF;
		font-size: 30upx;
		margin-top: 172upx;
	}
</style>
