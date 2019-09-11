<template>
	<view>
		<view class="container">
			<text class="item-title">姓名：</text>
			<input @input="bindName" class="item-input" type="text" placeholder="请输入您的姓名" placeholder-class="placeholder-class" />
		</view>
		<view class="container">
			<text class="item-title">手机号：</text>
			<input @input="bindNum" class="item-input" type="number" placeholder="请输入您的手机号" placeholder-class="placeholder-class" />
		</view>
	</view>
</template>

<script>
	export default {
		name:'xlist-input',
		methods:{
			bindName(e){
				let name = e.detail.value
				uni.setStorage({
					key:'orderName',
					data: name
				})
			},
			bindNum(e){
				let num = e.detail.value
				uni.setStorage({
					key:'orderNum',
					data: num
				})
			}
		}
	}
</script>

<style>
	.placeholder-class{
		font-size: 24upx;
		color: #888F97;
	}
	
	.container{
		display: flex;
		align-items: center;
		height: 120upx;
		margin-left: 26upx;
		margin-right: 26upx;
		border-bottom: 1px solid #F3F3F3;
	}
	
	.item-title{
		font-size: 30upx;
		
	}
	
	.item-input{
		margin-left: 20upx;
	}
	
	.identify-code{
		font-size: 30upx;
		color: #09BA51;
		display: flex;
		position: absolute;
		right: 26upx;
	}
</style>
