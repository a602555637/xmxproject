<template>
	<view class="container">
		<image src="../../static/my/cupone@2x.png"></image>
		<view class="container-title">
			<text>了解详情</text>
			<image v-if="isShow" src="../../static/my/up@2x.png"></image>
			<image v-else src="../../static/my/down@2x.png"></image>
		</view>
		<view class="content">
			<text>1）通用购机抵用券-可用于在小美商城购买手机进行现金抵扣，一次限使用一张；</text>
			<text>2）通用维修折扣券、优惠券-可用于手机维修时进行现金抵扣，一次限使用一张；</text>
			<text>3）指定某种项目的折扣权、优惠券，仅对指定项目有效，一次限使用一张。</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true
			}
		},
	}
</script>

<style>
	.content text{
		font-size: 26upx;
		margin-top: 4upx;
		margin-left: 62upx;
		margin-right: 54upx;
		display: block;
	}
	
	.container{
		display: flex;
		flex-direction: column;
	}
	
	.container-title{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 22upx;
	}
	
	.container>image{
		width: 640upx;
		height: 156upx;
		margin-top: 40upx;
		margin-left: 56upx;
		margin-bottom: 40upx;
	}
	
	.container-title text{
		font-size: 26upx;
		margin-left: 62upx;
	}
	
	.container-title image{
		width: 28upx;
		height: 28upx;
		margin-left: 12upx;
	}
</style>
