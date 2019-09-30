<template>
	<view class="container">
		<view @click="bindTap(index)" class="container-item" v-for="(item, index) in titleList" :key="index">
			<text>{{item.title}}</text>
			<image src="../../static/wxcomponentimg/arrow@2x.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleList: [
					{title: '快捷维修'},
					{title: '内存升级'},
					{title: '更换配件'},
					{title: '数据导出'},
					{title: '清洁保养'},
					{title: '系统刷机'},
					{title: '手机贴膜'},
					{title: '一键回收'}
				]
			}
		},
		methods:{
			bindTap(e){
				console.log(e)
			}
		}
	}
</script>

<style>
	page{
		font-size: 30upx;
	}
	
	.container{
		display: flex;
		flex-direction: column;
		margin-left: 46upx;
		margin-top: 30upx;
	}
	
	.container-item{
		width: 662upx;
		height: 100upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
	}
	
	.container-item image{
		width: 18upx;
		height: 30upx;
		position: absolute;
		right: 42upx;
	}
</style>
