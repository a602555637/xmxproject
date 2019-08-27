<template>
	<view>
		<view class="container">
			<view @click="onActiveLeft" class="container-left">
				<text :class="{active:isActive}">手机</text>
			</view>
			<view @click="onActive" class="container-right">
				<text :class="{active:!isActive}">平板</text>
			</view>
		</view>
		<!-- <view class="active-line"></view> -->
	</view>

</template>

<script>
	export default {
		name: 'xselect',
		data() {
			return {
				isActive: true
			}
		},
		methods:{
			onActiveLeft(){
				if(this.isActive == false){
					this.isActive = !this.isActive
				}
				return
			},
			onActive(){
					this.isActive = !this.isActive
			}
		}
	}
</script>

<style>
/* 	.active-line {
		width: 120upx;
		height: 10upx;
		background: #09BA51;
	}
 */
	.container view {
		font-size: 32upx;
		color: #888F97;
		font-weight: bold;
	}

	.container {
		height: 102upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #F3F3F3;
	}
	
	.active{
		padding-bottom: 20upx;
		border-bottom: 10upx solid #09BA51;
		color: #333333;
	}
</style>
