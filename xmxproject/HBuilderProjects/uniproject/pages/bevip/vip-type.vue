<template>
	<view class="page-body">
		<view @click="bindSelected" class="container" v-for="(item,index) in content" :key="index" :id="index">
			<image :src="selectedId == index ? selectedImg : defaultImg" />
			<text class="item-title">{{item.title}}</text>
			<text class="item-price">{{item.price}}</text>
		</view>
		<view @click="bindSubmit" class="button">确认</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedId: 0,
				selectedImg: '../../static/faults/xz@2x.png',
				defaultImg: '../../static/faults/wxz@2x.png',
				content: [{
					title: '手机会员',
					price: '9.9元'
				}, {
					title: '平板会员',
					price: '9.9元'
				}]
			}
		},
		methods:{
			bindSelected(e){
				// console.log(e)
				this.selectedId = e.currentTarget.id
			},
			bindSubmit(){
				uni.navigateTo({
					url:'../payvip/payvip'
				})
			}
		}
	}
</script>

<style>
	.button{
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		background: #09BA51;
		font-size: 40upx;
		position: absolute;
		bottom: 80upx;
		left: 26upx;
		width: 698upx;
		height: 100upx;
	}
	
	.page-body{
		margin-top: 60upx;
	}
	
	.container{
		display: flex;
		align-items: center;
		width: 698upx;
		height: 120upx;
		background: #F3F3F3;
		margin-bottom: 20upx;
		margin-left: 26upx;
	}
	
	.container image{
		width: 32upx;
		height: 32upx;
		margin-left: 30upx;
		margin-right: 30upx;
	}
	
	.container text{
		font-size: 32upx;
	}
	
	.item-price{
		position: absolute;
		right: 60upx;
	}
</style>
