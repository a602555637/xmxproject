<template>
	<view class="container">
		<view @click="onRepair" class="container-item" v-for="(item, index) in repairList" 
		:key="index" :id="index">
			<image :src="item.imgUrl"></image>
			<text>{{item.title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'quickSelect',
		data() {
			return {
				repairList: [{
					title: '屏幕问题',
					imgUrl:'../../static/index/pmwt@2x.png'
				},{
					title: '电池问题',
					imgUrl:'../../static/index/dcwt@2x.png'
				},{
					title: '声音问题',
					imgUrl:'../../static/index/sywt@2x.png'
				},{
					title: '拍摄问题',
					imgUrl:'../../static/index/pswt@2x.png'
				},{
					title: '信号问题',
					imgUrl:'../../static/index/xhwt@2x.png'
				}]
			}
		},
		methods:{
			onRepair(e){
				console.log(e)
			}
		}
	}
</script>

<style>
	.container{
		display: flex;
		justify-content: space-around;
		margin-top: 30upx;
		margin-bottom: 60upx;
	}
	
	.container-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.container-item image{
		width: 60upx;
		height: 60upx;
	}
	
	.container-item text{
		font-size: 22upx;
		margin-top: 20upx;
	}
</style>
