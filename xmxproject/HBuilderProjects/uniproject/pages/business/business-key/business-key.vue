<template>
	<view class="xinput">
		<xlist-input @inputValue="bindDefault" title="手机号码：" placeholder="请输入手机号码"></xlist-input>
		<getcodec :orderNum="phone" @scode="bindScode" @phoneCode="bindPhoneCode"></getcodec>
		<view class="line"></view>
		<text class="desc">* 必须数字和英文字母组合</text>
		<xlist-input @inputValue="bindInput" title="新密码：" placeholder="请输入新密码"></xlist-input>
		<xlist-input @inputValue="bindSecond" title="确认密码：" placeholder="请再次输入新密码" ></xlist-input>
		<view @click="onNext" class="button">{{buttonTitle}}</view>
	</view>
</template>

<script>
	import xlistInput from '../../../wxcomponents/xlist/xlist-input.vue'
	import getcodec from '../../../wxcomponents/getcode/getcodec.vue'
	
	export default {
		data() {
			return {
				isDefault: false,
				phoneCode:'',
				scode:'',
				orderNum:'',
				buttonTitle: '保存',
				fkey:'',
				skey:'',
				phone: ''
			}
		},
		methods: {
			bindScode(e){
				this.scode = e.scode
			},
			bindPhoneCode(e){
				this.phoneCode = e.phoneCode
			},
			bindDefault(e){
				this.phone = e
			},
			bindInput(e){
				this.fkey = e
			},
			bindSecond(e){
				this.skey = e
			},
			onNext() {
				let skey = this.skey
				let fkey = this.fkey
				if( skey !== fkey){
					uni.showToast({
						title: '两次密码输入不一致',
						icon:'none'
					})
				}else if(this.phoneCode !== this.scode){
					uni.showToast({
						title: '验证码不正确',
						icon: 'none'
					})
				} else {
					this.onReg(skey)
				}
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
					this.bindSubmit()
				}
			},
			bindSubmit(){
				let phoneCode = this.phoneCode.toString()
				let fkey = this.fkey.toString()
				if(fkey == this.skey){
					let phone = this.phone.toString()
					uni.request({
						url: 'https://www.finetwm.com/xmRepair/shopInfo/resetPassword',
						method: 'POST',
						header:{
							"content-Type": "application/x-www-form-urlencoded"
						},
						data: {
							phone: phone,
							password: fkey
						},
						success: res => {
							console.log(res)
							uni.showToast({
								title: '保存成功'
							})
							setTimeout(() => {
								uni.hideToast()
								uni.navigateBack({
									delta: 1
								})
							}, 1000)
							
						},
						fail: err => {
							console.log(err)
						}
					})
				} else {
					uni.showToast({
						title: '验证码输入不正确',
						icon: 'none'
					})
				}
			}
		},
		components:{
			xlistInput,
			getcodec
		}
	}
</script>

<style>
	.line{
		display: flex;
		flex-direction: row;
		width: 698upx;
		height: 1upx;
		background: #eee;
		margin-left: 26upx;
	}
	.desc{
		font-size: 22upx;
		position: absolute;
		left: 26upx;
		top: 590upx;
		color: #888F97;
	}
	
	.xinput{
		margin-top: 20upx;
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
