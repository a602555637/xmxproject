<template>
	<view>
		<view class="container" v-for="(item, index) in content" :key="index">
			<view class="container-left">
				<text class="item-title">{{ item.title }}</text>
				<text class="item-desc">{{item.desc}}</text>
			</view>
			<view @click="onNext" class="container-right">
				<image src="../../../static/business/yjqx-btn@2x.png"></image></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			content: [
				{
					title: '苹果 iPhone7 玫瑰金',
					desc: '到店维修',
					price: '￥400',
					status: '已完成'
				},
				{
					title: 'vivo X27',
					desc: '上门维修',
					price: '￥400',
					status: '已完成'
				}
			]
		};
	},
	methods:{
		onNext(){
			uni.navigateTo({
				url: '../business-orderstatus/business-orderstatus'
			})
		}
	}
};
</script>

<style>
.container image {
	width: 180upx;
	height: 60upx;
}
.container {
	display: flex;
	height: 160upx;
	width: 750upx;
	align-items: center;
	margin-left: 26upx;
	border-bottom: 1px solid #f3f3f3;
}

.container-left {
	display: flex;
	flex-direction: column;
}

.container-right {
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 36upx;
}

.item-status {
	font-size: 26upx;
	color: #51d587;
	margin-top: 12upx;
}

.item-price {
	font-size: 30upx;
}

.item-title {
	font-size: 30upx;
	margin-bottom: 10upx;
}

.item-desc {
	font-size: 26upx;
}
</style>
