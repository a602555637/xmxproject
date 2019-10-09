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
		created() {
			uni.getStorage({
				key: 'openId',
				success:res=>{
					this.openId = res.data
				}
			})
		},
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
				} else {
					this.requestUrl()
				}
			},
			bindSubmit(){
				let skey = this.skey
				let fkey = this.fkey
				console.log(skey)
				console.log(fkey)
				if( skey === fkey){
					this.onReg(skey)
				} else{
					uni.showToast({
						title: '两次密码输入不一致',
						icon:'none'
					})
				}
			},
			statRequest(){
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/shopM/updateStat',
					method: 'POST',
					header:{
						"content-Type": "application/x-www-form-urlencoded"
					},
					data: {
						stat: 4,
						openid: this.openId,
						opinion: ''
					},
					success: res => {
						console.log(res)
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			requestUrl(){
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/shopInfo/setPassword',
					method: 'POST',
					header:{
						"content-Type": "application/x-www-form-urlencoded"
					},
					data: {
						openid: this.openId,
						password: this.skey
					},
					success: res => {
						this.statRequest()
						uni.showToast({
							title: '设置成功'
						})
						setTimeout(()=>{
							uni.reLaunch({
								url: '../index/index'
							})
						},1000)
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
