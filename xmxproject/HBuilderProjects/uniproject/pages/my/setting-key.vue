<template>
	<view class="container">
		<text class="fixed">必须数字和英文字母组合</text>
		<xinput @inputValue="bindKey" title="输入密码" :xtype="xtype" placeHolderText="请输入6位密码" />
		<xinput @inputValue="bindSkey" :xtype="xtype" title="确认密码" placeHolderText="请再次输入6位密码" />
		<view @click="bindSubmit" class="container-button">保存</view>
	</view>
</template>

<script>
	import xinput from '../../wxcomponents/common/xinput.vue'
	
	export default {
		data() {
			return {
				openId:'',
				accessToken:'',
				fkey:'',
				skey:'',
				xtype: 'text'
			}
		},
		methods:{
			bindKey(e){
				this.fkey = e.inputValue
			},
			bindSkey(e){
				this.skey = e.inputValue
			},
			onReg(e){
				let reg =/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6}$/
				let str = e
				if(str.match(reg) == null){
					uni.showToast({
						title: '密码格式不正确',
						icon:'none'
					})
				} else{
					uni.getStorage({
						key: 'openId',
						success:res=>{
							this.openId = res.data
							this.requestUrl()
						}
					})
				}
			},
			bindSubmit(){
				let skey = this.skey
				let fkey = this.fkey
				if( skey == fkey){
					this.onReg(fkey)
					this.onReg(skey)
				} else{
					uni.showToast({
						title: '两次密码输入不一致',
						icon:'none'
					})
				}
			},
			requestUrl(){
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/userInfo/setPassword',
					method: 'POST',
					data: {
						openid: this.openId,
						password: this.skey
					},
					success: res => {
						console.log(res)
						uni.reLaunch({
							url: 'verify-result'
						})
					},
					fail: err => {
						console.log(err)
					}
				})
			}
		},
		components: {
			xinput
		},
	}
	
</script>

<style>
	.fixed{
		font-size: 22upx;
		position: absolute;
		left: 184upx;
		top: 64upx;
		color: #888F97;
	}
	
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
		margin-left: 26upx;
	}
	
	.container{
		margin-top: 60upx;
	}

</style>
