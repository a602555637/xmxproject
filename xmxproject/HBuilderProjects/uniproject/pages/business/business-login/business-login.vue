<template>
	<view class="content">
		<xinput title="手机号" placeHolderText="请输入手机号" />
		<xinput title="密码" placeHolderText="请输入密码" />
		<view @click="onIndex" class="button">{{buttonTitle}}</view>
	</view>

</template>

<script>
	import xinput from '../../../wxcomponents/common/xinput.vue'
export default {
	data() {
		return {
			buttonTitle: '登录',
			phonenum:''
		}
	},
	methods:{
		// onIndex(){
		// 	if(!phonenum){
		// 		
		// 	}
		// 	
		// 	
		// 	uni.navigateTo({
		// 		url: '../index/index'
		// 	})
		// }
	},
	components:{
		xinput
	}
};
</script>

<style>
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
	
	.content{
		margin-top: 80upx;
	}


</style>
