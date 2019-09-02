<template>
		<view class="container">
			<text>{{title}}</text>
			<input class="input-class" type="number" value="" 
			placeholder-class="placeholder-class" :placeholder="placeholder" />
			<view class="container-code" @click="click" :id="id" >{{text}} {{s}}</view>
		</view>
</template>

<script>
	export default {
		name:'getcode',
		props:{
			timer:String,
			title:String
		},
		data() {
			return {
				placeholder:'请输入验证码',
				text: '获取验证码',
				s:'',
				id:1,
				lifeTime:0,
				setTime:null
			}
		},
		created(e) {
			var reg = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/
			var res = this.timer
			if(res == null){
				console.log('时间格式错误1')
				return false
			} else{
				var s = parseInt(res)
				if(s < 0 || s > 60){
					console.log('时间格式错误2')
					return false
				}
				this.lifeTime = 60
				this.countDown(this)
				this.setInterValFunc(this)
			}
		},
		beforeDestroy() {
			clearInterval(this.setTime)
		},
		methods:{
			setInterValFunc(obj){
				this.setTime = setInterval(()=>{
					obj.countDown(obj)
				},1000)
			},
			click(){
				this.text = '重新获取'
				this.s = 60
			},
			countDown(self){
				if(self.text ==  '重新获取'){
					if(self.s > 0){
						self.s -=1
					} else if(self.s == 0){
						self.s = 60
						self.text = '获取验证码'
					}
				}
			}
		}
	}
</script>

<style>
	.container-code{
		display: flex;
		position: relative;
		font-size: 30upx;
		color: #09BA51;
	}
	
	.placeholder-class{
		font-size: 26upx;
		color: #888F97;
	}
	
	.container{
		display: flex;
		align-items: center;
		height: 120upx;
	}
	
	.container text{
		font-size: 30upx;
		margin-left: 26upx;
	}
	
</style>