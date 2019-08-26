<template>
	<view class="">
		<text class="title" >苹果 iPhone7 玫瑰金</text>
		<xlist title="屏幕损坏" ></xlist>
	</view>
</template>

<script>
	import xlist from '../../wxcomponents/xlist/xlist.vue'
	
	export default {
		data() {
			return {

			}
		},
		components: {
			xlist
		}
	}
</script>

<style>
	.title{
		font-size: 32rpx;
		font-weight: bold;
	}
</style>
