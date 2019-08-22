<template name="bbutton">
	<view class="container-middle">
		<image src="../../static/wxcomponentimg/phone-re@2x.png"></image>
		<image class="container-middle-ipad" src="../../static/wxcomponentimg/pad-re@2x.png"></image>
	</view>
</template>

<script>
	export default{
		name:'bbutton'
	}
</script>

<style>
	.container-middle-ipad {
		position: absolute;
		right: 0upx;
	}
	
	.container-middle image {
		width: 394upx;
		height: 200upx;
	}
	
	.container-middle {
		display: flex;
	}
	
</style>
