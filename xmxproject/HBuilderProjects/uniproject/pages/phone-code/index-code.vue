<template>
	<view class="">
		<getcode title="验证码：" timer="timer"></getcode>
	</view>
</template>

<script>
	import getcode from '../../wxcomponents/getcode/getcode.vue'
	export default {
		data() {
			var dateObj = new Date()
			var currentTime = dateObj.getTime()
			var timer = this.formatDateTime((currentTime + 1000 * 2000))
			return {
				timer:timer
			}
		},
		components:{
			getcode
		},
		methods:{
			formatDateTime(inputTime) { //时间戳 转 YY-mm-dd HH:ii:ss 
							var date = new Date(inputTime);
							var y = date.getFullYear();
							var m = date.getMonth() + 1;
							m = m < 10 ? ('0' + m) : m;
							var d = date.getDate();
							d = d < 10 ? ('0' + d) : d;
							var h = date.getHours();
							h = h < 10 ? ('0' + h) : h;
							var minute = date.getMinutes();
							var second = date.getSeconds();
							minute = minute < 10 ? ('0' + minute) : minute;
							second = second < 10 ? ('0' + second) : second;
							return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
						}
		}
	}
</script>

<style>
	
	
</style>