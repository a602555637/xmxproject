<template name="servebutton">
	<view @click="onNext" class="container">
		<view class="container-title">
			<text class="container-title-head">服务区</text>
			<text class="container-title-more">更多服务</text>
		</view>
		<view class="container-top">
			<view class="container-top-item">
				<image src="../../static/service-icon/kjwx@2x.png"></image>
				<text>快捷维修</text>
			</view>
			<view class="container-top-item">
				<image src="../../static/service-icon/ncsj@2x.png"></image>
				<text>内存升级</text>
			</view>
			<view class="container-top-item">
				<image src="../../static/service-icon/ghpj@2x.png"></image>
				<text>更换配件</text>
			</view>
			<view class="container-top-item">
				<image src="../../static/service-icon/sjdc@2x.png"></image>
				<text>数据导出</text>
			</view>
		</view>
		<view class="container-top">
			<view class="container-top-item">
				<image src="../../static/service-icon/qjby@2x.png"></image>
				<text>清洁保养</text>
			</view>
			<view class="container-top-item">
				<image src="../../static/service-icon/xtsj@2x.png"></image>
				<text>系统刷机</text>
			</view>
			<view class="container-top-item">
				<image src="../../static/service-icon/sjtm@2x.png"></image>
				<text>手机贴膜</text>
			</view>
			<view class="container-top-item">
				<image src="../../static/service-icon/yjhs@2x.png"></image>
				<text>一键回收</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'servebutton',
		methods:{
			onNext(){
				uni.navigateTo({
					url:'../../pages/selectmodel/selectmodel'
				})
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}

	.container-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.container-title-head {
		font-size: 32upx;
		font-weight: bold;
		color: #888F97;
		margin-left: 26upx;
	}

	.container-title-more {
		font-size: 22upx;
		color: #888F97;
		margin-right: 26upx;
	}
	
	.container-top-item image{
		width: 68upx;
		height: 68upx;
	}
	
	.container-top-item text{
		font-size: 26upx;
		margin-top: 20upx;
	}
	
	.container-top{
		display: flex;
		justify-content: space-around;
		margin-top: 26upx;
		margin-left: 26rpx;
	}
	
	.container-top-item{
		display: flex;
		flex-direction: column;
		align-items: center;
/* 		margin-right: 94rpx; */
	}
</style>
