<template>
	<view class="container">
		<text>输入密码</text>
		<input @input="bindKey" type="text" placeholder="请输入6位密码" placeholder-class="placeholder-class" />
		<text>确认密码</text>
		<input @input="bindSkey" type="text" placeholder="请再次输入6位密码" placeholder-class="placeholder-class" />
		<view @click="bindSubmit" class="container-button">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fkey: '',
				skey:''
			}
		},
		methods:{
			bindKey(e){
				this.fkey = e.detail.value
			},
			bindSkey(e){
				this.skey = e.detail.value
			},
			bindSubmit(){
				if(this.fkey == '' || this.skey == ''){
					uni.showToast({
						title: '请正确输入密码',
						icon:'none'
					})
				} else if(this.fkey < 6 || this.fkey > 7 || this.skey < 6 || this.skey > 7){
					uni.showToast({
						title: '密码长度不对，请重新输入',
						icon:'none'
					})
				} else if(this.fkey !== this.skey){
					uni.showToast({
						title:'两次密码输入不一致',
						icon:'none'
					})
				} else{
					uni.showToast({
						title:'设置成功'
					})
					setTimeout(()=>{
						uni.reLaunch({
							url:'../index/index'
						})
					},1000)
				}
			}
		}
	}
	
</script>

<style>
	.container-button{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		font-size: 30upx;
		background: #09BA51;
		border-radius: 12upx;
		width: 698upx;
		height: 80upx;
		margin-top: 234upx;
	}
	
	.container{
		display: flex;
		flex-direction: column;
		margin-left: 26upx;
		margin-top: 20upx;
	}
	
	.placeholder-class{
		font-size: 26upx;
		color: #888F97;
		margin-left: 20upx;
	}
	
	.container text{
		display: block;
		font-size: 30upx;
		margin-top: 40upx;
		margin-bottom: 20upx;
	}
	
	.container input{
		width: 698upx;
		height: 100upx;
		border: 1px solid #EEEEEE;
	}
</style>
