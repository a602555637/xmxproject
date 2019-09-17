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
		data() {
			return {
				buttonTitle: '登录',
				phonenum: '',
				scode: '',
				xpassword: true,
				xtype: 'number'
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
				if (!this.phonenum || this.phonenum.length < 11 || this.phonenum.length > 12) {
					uni.showToast({
						title: '请输入正确的手机号码',
						icon: 'none'
					})
				} else if (!this.scode || this.scode < 6 || this.scode > 7) {
					uni.showToast({
						title: '请输入正确的密码',
						icon: 'none'
					})
				} else {
					uni.showToast({
						title: '登陆成功'
					})
					setTimeout(() => {
						uni.navigateTo({
							url: '../index/index'
						})
					}, 1000)
				}
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
