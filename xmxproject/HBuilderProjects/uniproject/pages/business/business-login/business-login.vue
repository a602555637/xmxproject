<template>
	<view class="content">
		<xinput @inputValue="onNumber" :xtype="xtype" title="手机号" placeHolderText="请输入手机号" />
		<xinput @inputValue="onCode" :xtype="xtype" :xpassword="xpassword" title="密码" placeHolderText="请输入密码" />
		<view @click="onNext" class="button">{{buttonTitle}}</view>
	</view>

</template>

<script>
	import xinput from '../../../wxcomponents/common/xinput.vue'
	import xlistInput from '../../../wxcomponents/xlist/xlist-input.vue'
	export default {
		onLoad() {
			uni.getStorage({
				key: 'openId',
				success: res => {
					this.openId = res.data
				}
			})
		},
		data() {
			return {
				buttonTitle: '登录',
				phonenum: '',
				scode: '',
				xpassword: true,
				xtype: 'number',
				openId:''
			}
		},
		methods: {
			onNumber(e) {
				this.phonenum = e.inputValue
			},
			onCode(e) {
				this.scode = e.inputValue
			},
			onNext() {
				this.bindValidate()
			},
			bindValidate(){
				let phonenum = this.phonenum.toString()
				let scode = this.scode.toString()
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/shopInfo/login ',
					method: 'POST',
					header:{
						"content-Type": "application/x-www-form-urlencoded"
					},
					data: {
						phone: phonenum,
						password: scode,
						openid: this.openId
					},
					success: res => {
						let stat = res.data.data.status
						if(res.data.data.success === 0){
							uni.showToast({
								title: '登录成功'
							})
							setTimeout(()=>{
								uni.navigateTo({
									url: '../index/index'
								})
							},1000)
						} else{
							uni.showToast({
								title: '手机号码或密码错误',
								icon:'none'
							})
						}
					},
					fail: err => {
						console.log(err)
					}
				})
			}
		},
		components: {
			xinput,
			xlistInput
		}
	};
</script>

<style>
	.button {
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

	.content {
		margin-top: 80upx;
	}
</style>
