<template>
	<view>
		<WucTabc :tab-list="tabList" textFlex :tabCur.sync="TabCur" 
		tab-class="text-center text-black bg-white"
		select-class="text-orange"></WucTabc>
	</view>
</template>

<script>
	import WucTabc from '../../components/wuc-tab-c/wuc-tabc.vue'
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
			WucTabc
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			}
		}
	}
</script>

<style>
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
