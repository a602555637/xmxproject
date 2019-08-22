<template>
	<view class="container">
		<view>
			<view class="content">
				<text class="name">{{name}}</text>
				<text>{{number}}</text>
			</view>
			<text class="address">{{address}}</text>
		</view>
		<image class="button" src="../../static/my/bj-btn@2x.png"></image>
		<view @click="changeSelected" class="radio">
			<image v-if="isSelected" src="../../static/my/swmr-h@2x.png"></image>
			<image v-else src="../../static/my/swmr@2x.png"></image>
			<text>设为默认</text>
		</view>
		<view class="line"></view>
		<view @click="addressAdd" class="bottom">添加地址</view>
	</view>
</template>

<script>
	var _self = this
	export default {
		data() {
			return {
				isSelected: true,
				name: '泰勒丝',
				number: '154785248954',
				address: '郫都区望丛东路南北大道50号'
			}
		},
		methods: {
			changeSelected() {
				console.log(_self + 'data?')
				let isSelected = _self.isSelected
				console.log(isSelected)
				this.setData({
					isSelected: !isSelected
				})
			},
			addressAdd(){
				uni.navigateTo({
					url: '../addressadd/addressadd'
				});
			}
		}
	}
</script>

<style>
	.line {
		border-bottom: 1px solid #eee;
		margin-top: 40upx;
	}

	.container {
		display: flex;
		flex-direction: column;
		width: 750upx;
		height: 240upx;
		padding-left: 26upx;
		padding-top: 46upx;
	}

	.content {
		display: flex;
		margin-bottom: 10upx;
	}

	.content text {
		font-size: 30upx;
		font-weight: bold;
	}

	.address {
		font-size: 30upx;
	}

	.button {
		position: absolute;
		width: 124upx;
		height: 60upx;
		top: 40upx;
		right: 46upx;
	}

	.radio image {
		width: 24upx;
		height: 24upx;
	}

	.radio text {
		font-size: 26upx;
		color: #888F97;
		margin-left: 10upx;
	}

	.bottom {
		width: 750upx;
		height: 120upx;
		background: #09BA51;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 0upx;
		bottom: 0upx;
		font-size: 30upx;
		color: #fff;
	}
</style>
