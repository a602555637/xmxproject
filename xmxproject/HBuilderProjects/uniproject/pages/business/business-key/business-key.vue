<template>
	<view class="xinput">
			<xinput @inputValue="bindDefault" title="原密码" placeHolderText="请输入原密码"/>
			<xinput @inputValue="bindInput" title="新密码" placeHolderText="请输入新密码"/>
			<xinput @inputValue="bindSecond" title="确认密码" placeHolderText="请再次输入密码"/>
			<view @click="onNext" class="button">{{buttonTitle}}</view>
	</view>
</template>

<script>
	import xinput from '../../../wxcomponents/common/xinput.vue'
	export default {
		data() {
			return {
				buttonTitle: '保存',
				input1:'',
				input2:'',
				input3:''
			}
		},
		methods: {
			bindDefault(e){
				this.input1 = e.inputValue
			},
			bindInput(e){
				this.input2 = e.inputValue
			},
			bindSecond(e){
				this.input3 = e.inputValue
			},
			
			onNext() {
				if(this.inpu1 == ''){
					uni.showToast({
						title: '请输入原密码',
						icon:'none'
					})
				} else if(this.input2 == ''){
					uni.showToast({
						title: '请输入新密码',
						icon:'none'
					})
				} else if(this.input3 == ''){
						uni.showToast({
							title: '请确认新密码',
							icon:'none'
						})
				} else{
					uni.showToast({
						title: '修改成功'
					})
					setTimeout(()=>{
						uni.reLaunch({
							url:'../../index/index'
						})
					},1000)
				}
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
