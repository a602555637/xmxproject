<template>
	<view>
		<headads title="今日换屏5折起"></headads>
<!-- 		<bwSwiper class="swiper" :swiperList="swiperList" indicatorActiveColor="#ff0000" 
		@clickItem="clickItem" style="width:100%" :textTip="true"
		:swiperType="true"> </bwSwiper> -->
		<!-- <scareX></scareX> -->
		<testype></testype>
		<bbutton></bbutton>
		<servebutton></servebutton>
		<vipserve></vipserve>
		<comment></comment>
	</view>
</template>

<script>
	import headads from '../../wxcomponents/headads/headads.vue'
	import bwSwiper from '../../wxcomponents/bw-swiper/bw-swiper.vue'
	import testype from '../../wxcomponents/testype/testype.vue'
	import bbutton from '../../wxcomponents/bbutton/bbutton.vue'
	import servebutton from '../../wxcomponents/servebutton/servebutton.vue'
	import vipserve from '../../wxcomponents/vipserve/vipserve.vue'
	import comment from '../../wxcomponents/comment/comment.vue'
	
	export default {
		data() {
			return {
				swiperList: [{
					id: 4,
					type: 'image',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
				},{
					id: 4,
					type: 'image',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
				},{
					id: 4,
					type: 'image',
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
				}],
				serviceItem1: [{
					img: '../../static/service-icon/kjwx@2x.png',
					text: '快捷维修'
				}, {
					img: '../../static/service-icon/ncsj@2x.png',
					text: '内存升级'
				}, {
					img: '../../static/service-icon/ghpj@2x.png',
					text: '更换配件'
				}, {
					img: '../../static/service-icon/sjdc@2x.png',
					text: '数据导出'
				}],
				serviceItem2: [{
					img: '../../static/service-icon/qjby@2x.png',
					text: '清洁保养'
				}, {
					img: '../../static/service-icon/xtsj@2x.png',
					text: '系统刷机'
				}, {
					img: '../../static/service-icon/sjtm@2x.png',
					text: '手机贴膜'
				}, {
					img: '../../static/service-icon/yjhs@2x.png',
					text: '一键回收'
				}],

				title: 'Hello',
				ads: '今日换屏5折起',
			}

		},
		onLoad() {

		},
		methods: {

		},
		components: {
			headads,
			bwSwiper,
			testype,
			bbutton,
			servebutton,
			vipserve,
			comment
		}
	}
</script>

<style>


</style>
