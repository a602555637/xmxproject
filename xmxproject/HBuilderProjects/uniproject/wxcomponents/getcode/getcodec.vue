<template>
	<view>
		<view v-if="isDefault" class="container">
			<text>{{title}}</text>
			<input class="input-class" type="number" @input="onCode" placeholder-class="placeholder-class" :placeholder="placeholder" />
			<view v-if="isShowTime" class="container-code1" :id="id">{{text}} {{s}}</view>
			<view v-else class="container-code" @click="click" :id="id">{{text}}</view>
		</view>
		<view v-else class="scontainer">
			<text class="title-sin">{{titleSin}}</text>
			<view class="scontainer-item">
				<input class="input-class fixed" type="number" @input="onCode" placeholder-class="placeholder-class" :placeholder="placeholder" />
				<view v-if="orderNum" @click="bindToast" class="container-code1 fixed2" :id="id">{{text}} {{s}}</view>
				<view v-else-if="isShowTime" class="container-code1 fixed1" :id="id">{{text}} {{s}}</view>
				<view v-else class="container-code fixed1" @click="click" :id="id">{{text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'getcode',
		props:{
			orderNum: Number,
			isDefault:{
				type: Boolean,
				default:true
			}
		},
		data() {
			return {
				isShowTime: false,
				disable: false,
				title: '验证码：',
				titleSin: '验证码',
				timer: '60',
				codeText: '',
				placeholder: '请输入验证码',
				text: '获取验证码',
				s: '',
				id: 1,
				setTime: null
			}
		},
		created(e) {
			this.countDown(this)
			this.setInterValFunc(this)
		},
		beforeDestroy() {
			clearInterval(this.setTime)
		},
		methods: {
			// bindToast(){
				
			// },
			setInterValFunc(obj) {
				this.setTime = setInterval(() => {
					obj.countDown(obj)
				}, 1000)
			},
			click() {
				this.requsetUrl()
				this.isShowTime = true
				this.text = '重新获取'
				this.s = 60
			},
			countDown(self) {
				if (self.text == '重新获取') {
					if (self.s > 0) {
						self.s -= 1
					} else if (self.s == 0) {
						this.isShowTime = false
						self.s = 0
						self.text = '获取验证码'
					}
				}
			},
			onCode(e){
				let scode = e.detail.value
				this.$emit('scode', {scode})
			},
			requsetUrl(){
				let orderNum = this.orderNum
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/shopInfo/getRestNumber',
					method: 'POST',
					header:{
						"content-Type": "application/x-www-form-urlencoded"
					},
					data: {
						phone: orderNum
					},
					success: res => {
						console.log(res)
						let phoneCode = res.data.data
						this.$emit('phoneCode', {phoneCode})
					},
					fail:err=>{
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style>
	.fixed2{
		margin-right: 34upx;
		color: #666666;
	}
	
	.fixed1{
		margin-right: 34upx;
	}
	
	.fixed{
		padding-left: 20upx;
	}
	
	.title-sin{
		font-size: 30upx;
		margin-left: 46upx;
		margin-bottom: 20upx;
	}
	
	.scontainer-item{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 698upx;
		height: 100upx;
		border: 1px solid #EEEEEE;
		margin-left: 26upx;
	}
	
	.scontainer{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 20upx;
	}
	
	.container-code1{
		display: flex;
		position: absolute;
		right: 26upx;
		font-size: 30upx;
		color: #BCBCBC;
	}
	
	.container-code {
		display: flex;
		position: absolute;
		right: 26upx;
		font-size: 30upx;
		color: #09BA51;
	}

	.placeholder-class {
		font-size: 26upx;
		color: #888F97;
	}

	.container {
		display: flex;
		align-items: center;
		height: 120upx;
	}

	.container>text {
		font-size: 30upx;
		margin-left: 26upx;
	}

	.container input {
		width: 200upx;
	}
</style>
