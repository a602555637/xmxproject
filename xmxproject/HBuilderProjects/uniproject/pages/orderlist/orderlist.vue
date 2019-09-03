<template>
	<view>
		<WucTabc :tab-list="tabList" textFlex :tabCur.sync="TabCur" 
		tab-class="text-center text-black bg-white"
		select-class="text-orange"></WucTabc>
		<!-- <s-tabs itemPerView='tabList'></s-tabs> -->
		<view @click="onOrderDetail" class="example">
			<text class="example-title">苹果 iPhone7 玫瑰金</text>
			<text class="example-price">￥400</text>
		</view>
	</view>
</template>

<script>
	import WucTabc from '../../components/wuc-tab-c/wuc-tabc.vue'
	import sTabs from '../../components/s-tabs/index.vue'
	const urlRequest = require('../../common/http.js')
	export default {
		data() {
			return {
				TabCur: 0,
				tabList: [{
					name: '全部'
				}, {
					name: '未完成'
				}, {
					name: '已完成'
				}, {
					name: '已取消'
				}, {
					name: '待评价'
				}],
			}
		},
		components: {
			WucTabc,
			sTabs
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			},
			onOrderDetail(){
				uni.navigateTo({
					url:'../orderdetail/orderdetail'
				})
			}
		}
	}
</script>

<style>
	.example{
		/* width: 750upx; */
		height: 120upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #F3F3F3;
		margin-left: 26upx;
		margin-right: 46upx;
	}
	
	.example-price{
		font-size: 26upx;
		color: #888F97;
	}
	
	.example-title{
		font-size: 30upx;
	}
	
	.text-black{
	  color:#333333;
	  font-size: 32upx;
	}
	
	.bg-white{
	    background-color: #ffffff !important;
	}
	
	.text-orange{
	  color:#09BA51 !important;
	}
	
	.text-center {
	    text-align: center;
	}
</style>
