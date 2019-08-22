<template>
	<view>
		<image class="banner-img" src="../../static/my/vip-banner@2x.png"></image>
		<view>
			<WucTab tab-style="tab-style" tab-class="tab-class" select-class="select-class" :textFlex="true" :tab-list="tabList"
			 :tabCur.sync="TabCur" @change="tabChange"></WucTab>
			<view class="content">
				<text>{{tabList[TabCur].content}}</text>
				<text>{{tabList[TabCur].content1}}</text>
			</view>
		</view>
		<view @click="onPay" v-if="isVip" class="isbutton">
			<image class="vip-background" src="../../static/my/vip-bg2@2x.png"></image>
			<view>您已是会员</view>
			<view class="time-number">享免费修特权等待期倒计时<text class="aldate">{{aldate}}</text>天</view>
		</view>
		<view v-else @click="onPay" class="button">成为会员</view>
	</view>
</template>

<script>
	import WucTab from '../../components/wuc-tab/wuc-tab.vue'
	export default {
		data() {
			return {
				aldate: 32,
				isVip: false,
				TabCur: 0,
				tabList: [{
					name: '手机会员',
					content: '会员特权（渐变）',
					content1: '会员等级详情普通会员1)通过有效的邮箱注册,即可成为名皮网普通会员,第一次购物即可享受积分回馈。 高级会员1) 普通会员累计购物超过1000元,即可获...'
				}, {
					name: '平板会员',
					content: '456'
				}],
			}
		},
		components: {
			WucTab
		},
		onLoad(options) {
			console.log(options)
		},
		methods: {
			tabChange(index) {
				this.TabCur = index;
			},
			onPay() {
				uni.navigateTo({
					url: '../payvip/payvip',
					success: res => {
						console.log('success')
					}
				});
			}
		}
	}
</script>

<style>
	.aldate{
		color:red;
	}
	
	.banner-img {
		width: 750upx;
		height: 340upx;
	}

	.select-class {
		color: #09BA51;
	}

	.button {
		width: 750upx;
		height: 100upx;
		background: #09BA51;
		font-size: 30upx;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0upx;
	}
	
	.isbutton{
		width: 750upx;
		height: 100upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0upx;
	}
	
	.time-number{
		font-size: 24upx;

	}
	.isbutton view{
		color: #fff;
		font-size: 30upx;
	}
	
	
	.isbutton image{
		position: absolute;
		z-index: -99;
	}

	.content text {
		font-size: 30upx;
		display: inline-block;
	}
	
	.vip-background{
		width: 750upx;
		height: 100upx;
	}
</style>
