<template>
	<view class="">
		<text class="container-title">选择故障</text>
		<view class="container">
			<view @click="onRepair(index)" class="container-item" v-for="(item, index) in repairList" 
			:key="index" :id="index">
				<image :src="item.imgUrl"></image>
			</view>
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
					title: '信号问题',
					imgUrl:'../../static/index/xhwt@2x.png'
				},{
					title: '拍摄问题',
					imgUrl:'../../static/index/pswt@2x.png'
				},{
					title: '声音问题',
					imgUrl:'../../static/index/sywt@2x.png'
				}]
			}
		},
		methods:{
			onRepair(sid){
				console.log(sid)
				uni.navigateTo({
					url: '../../pages/faults/faults?id=' + sid,
					success:res=>{
						uni.setStorage({
							key:'sid',
							data:sid
						})
					}
				})
			}
		}
	}
</script>

<style>
	.container-title{
		font-size: 30upx;
		font-weight: bold;
		color: #888F97;
		margin-left: 26upx;
	}
	
	.container{
		display: flex;
		justify-content: space-between;
		margin: 0upx 0upx 60upx 32upx;
		width: 698upx;
	}
	
	.container-item {
		display: flex;
		flex-direction: row;
		align-items: space-between;
		margin-left: -26upx;
	}
	
	.container-item image{
		width: 168upx;
		height: 168upx;
	}
	
	.container-item text{
		font-size: 22upx;
		margin-top: 20upx;
	}
</style>
