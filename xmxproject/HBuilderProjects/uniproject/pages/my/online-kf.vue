<template>
	<!-- <zhuanpan id='zhuanpan' @myData='getData' @myAwards="getAwards" 
	@startZhuan="startZhuan" :size='size'
	:musicflg='musicflg' :fastJuedin='fastJuedin' :repeat='repeat' 
	:zhuanpanArr='xiaojuedingArr' :awardsConfig='awardsConfig'>
	</zhuanpan> -->
	<GetOpenId></GetOpenId>
	<!-- <view>123</view> -->
</template>
<script>
	// import zhuanpan from '/components/prize/zhuanpan.vue'
	import GetOpenId from '../../components/ccg-getOpenID/ccg-wxAppOpenid.vue';
	
	export default {
		onLoad() {
			// console.log(this.requestmodel)
		},
		data() {
			return {
				size: { //转盘大小可配置
					w: 599,
					h: 600
				},
				musicflg: true,
				fastJuedin: false,
				repeat: false,
				xiaojuedingArr: [{
					id: 0,
					option: "十一国庆去哪玩",
					awards: [{
						id: 0,
						name: "name1",
						color: "#EE534F",
						// probability: 0 // 概率
					}, {
						id: 1,
						name: "name2",
						color: "#FF7F50",
					}]
				}]
			}
		},
		methods: {
			getData(e) {
				this.awardsConfig = e.detail
			},
			getAwards(e) {
				this.s_awards = e.detail.end ? "？" : e.detail.s_awards
				this.share = e.detail.end ? true : false
			},
			//开始转
			startZhuan(e) {
				this.zhuanflg = e.detail ? true : false
			},
			
		},
		components:{
			GetOpenId
		}
	}
</script>

<style>

</style>
