<template>
	<view class="xinput">
			<xinput @inputValue="bindDefault" title="手机号码" placeHolderText="请输入手机号码"/>
			<getcode :isDefault="isDefault" @scode="bindScode" @phoneCode="bindPhoneCode" :orderNum="orderNum"></getcode>
			<text class="desc">必须数字和英文字母组合</text>
			<xinput @inputValue="bindInput" title="新密码" placeHolderText="请输入新密码"/>
			<xinput @inputValue="bindSecond" title="确认密码" placeHolderText="请再次输入密码"/>
			<view @click="onNext" class="button">{{buttonTitle}}</view>
	</view>
</template>

<script>
	import xinput from '../../../wxcomponents/common/xinput.vue'
	import getcode from '../../../wxcomponents/getcode/getcode.vue'
	
	export default {
		data() {
			return {
				isDefault:false,
				phoneCode:'',
				scode:'',
				orderNum:'',
				buttonTitle: '保存',
				fkey:'',
				skey:''
			}
		},
		methods: {
			bindPhoneCode(e){
				console.log(e)
				this.phoneCode = e.phoneCode
			},
			bindScode(e){
				this.scode = e.scode
			},
			bindDefault(e){
				this.orderNum = e.inputValue
			},
			bindInput(e){
				this.fkey = e.inputValue
			},
			bindSecond(e){
				this.skey = e.inputValue
			},
			onNext() {
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
				let scode = this.scode.toString()
				if(phoneCode == scode){
					let orderNum = this.orderNum.toString()
					uni.request({
						url: 'https://www.finetwm.com/xmRepair/shopInfo/resetPassword',
						method: 'POST',
						data: {
							phone: orderNum,
							password: scode
						},
						success: res => {
							console.log(res)
							uni.navigateBack({
								delta: 1
							})
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
			xinput,
			getcode
		}
	}
</script>

<style>
	.desc{
		font-size: 22upx;
		position: absolute;
		left: 184upx;
		top: 452upx;
		color: #888F97;
	}
	
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
