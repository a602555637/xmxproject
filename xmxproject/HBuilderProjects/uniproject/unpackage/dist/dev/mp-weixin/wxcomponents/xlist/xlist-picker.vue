<template>
	<view class="container">
		<picker :mode="mode" value="index" :range="range" @change="bindChange">
			<view class="picker-class">
				<view class="title">{{title}}</view>
				<view class="item">
					<text class="item-default">{{selectedItem}}</text>
					<image class="arrow" src="../../static/wxcomponentimg/arrow@2x.png"></image>
				</view>
			</view>
		</picker>
	</view>
</template>

<script>
	export default {
		name:'xlist-picker',
		props:{
			selectedItem:String,
			title:{
				type:String,
				default:'企业类型'
			},
			mode:{
				type:String,
				default:'selector'
			},
			range:{
				type:Array
			}
			
		},
		methods: {
			bindChange(e){
				let s = e.detail.value
				this.$emit('selectedIndex', s)
			}
		}
	}
</script>

<style scoped>
	.item-default{
		margin-right: 20upx;
	}
	
	.item{
		position: absolute;
		right: 0;
	}
	
	.title,
	.item-default{
		font-size: 30upx;
	}
	
	.picker-class{
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 120upx;
		width: 698upx;
		margin-left: 26upx;
		margin-right: 26upx;
		border-bottom: 1px solid #EEEEEE;
	}
	
	
	.arrow{
		width: 18upx;
		height: 30upx;
		position: relative;
		top: 4upx;
	}
</style>
