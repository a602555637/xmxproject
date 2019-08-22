<template name="comment">
	<view class="container">
		<view class="container-title">
			<text class="container-title-head">评论区</text>
		</view>
		<view class="content">
			<view class="">
				<image class="avatar" src="../../static/wxcomponentimg/avatar@2x.png"></image>
				<text>泰勒丝</text>
				<uniRate value="2" size="18"></uniRate>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate  from '@/components/uni-rate/uni-rate.vue'
	export default{
		name:'comment',
		components:{
			uniRate 
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		margin-top: 34upx;
	}
	
	.container-title {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 26upx;
	}
	
	.container-title-head {
		font-size: 40upx;
		font-weight: bold;
		margin-left: 26upx;
	}
	
	.avatar{
		width: 110upx;
		height: 110upx;
	}
</style>
