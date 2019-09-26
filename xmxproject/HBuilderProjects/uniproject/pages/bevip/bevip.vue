<template>
	<view>
		<!-- banner -->
		<swiper class="swiper" circular :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<image class="banner-img" src="../../static/banner/banner5@2x.png"></image>
			</swiper-item>
			<swiper-item>
				<image class="banner-img" src="../../static/banner/banner6@2x.png"></image>
			</swiper-item>
		</swiper>
		<!-- 顶部选项卡 -->
		<view class="top-select">
			<view :class="[selectedId == index ? 'active-class':'']" v-for="(item, index) in topTitle" 
			@click="onSelected" :id='index'
			 :key='index'>
				{{item.title}}
				<image class="vip-signal" :src="item.imgUrl"></image>
			</view>
		</view>
	
		<!-- content -->
	
		<swiper @change="bindChange" class="swiper-selected" :current="selectedId" >
			<swiper-item>
				<image class="content" src="../../static/vip/bxtq@2x.png"></image>
			</swiper-item>
			<swiper-item>
				<image class="content-copy" src="../../static/vip/sxtq@2x.png"></image>
			</swiper-item>
		</swiper>
	
		<text class="container-deal">小美修《会员说明书》&《用户协议》</text>

		<view v-if="isVip === '1'" class="isbutton">
			<view>您已是会员</view>
			<view v-if="waitTime" class="time-number">享免费修特权等待期倒计时<text class="aldate">{{waitTime}}</text>天</view>
		
		</view>
		<view v-else @click="onPay" class="button">立即成为会员</view>
		<view class="margin-fixed"></view>
	</view>
</template>

<script>
	export default {
		onShow() {
			console.log('onshow')
			// 调取判断会员接口
			uni.getStorage({
				key:'openId',
				success:res=>{
					this.openId = res.data
					this.requestUrl()
				}
			})
		},
		data() {
			return {
				isNext:false,
				openId:'',
				superiorId:'',
				selectedId: 0,
				topTitle: [{
					title: '终身会员',
					imgUrl: '../../static/vip/99@2x.png'
				}, {
					title: '普通会员',
					imgUrl: '../../static/vip/9.9@2x.png'
				}],
				isVip: '0',
				waitTime:'',
				TabCur: 0,
				tabList: [{
					title: '享免费更换外屏',
					yearTimes: '6次'
				}, {
					title: '享免费更换内屏',
					yearTimes: '1次'
				}, {
					title: '享免费更换主板、维修主板',
					yearTimes: '各1次'
				}, {
					title: '享免费更换电源、维修充电IC',
					yearTimes: '各1次'
				}, {
					title: '享免费更换前、后置摄像头、更换摄像头玻璃',
					yearTimes: '各1次'
				}, {
					title: '享免费更换WIFI模块、维修WIFI线路、更换数据线尾插',
					yearTimes: '各1次'
				}, {
					title: '享免费更换扬声器、麦克风、听筒、震动马达',
					yearTimes: '各2次'
				}, {
					title: '享免费更换开关排线、所有按键',
					yearTimes: '各1次'
				}, {
					title: '享免费更换手机后壳',
					yearTimes: '各1次'
				}, {
					title: '享免费更换、维修重力感应、指南针',
					yearTimes: '各1次'
				}],
			}
		},
		methods: {
			onPay() {
				uni.navigateTo({
					url: 'vip-type?id=' + this.selectedId,
					success: res => {
						console.log('success')
					}
				});
			},
			onSelected(e) {
				this.selectedId = e.currentTarget.id
			},
			bindChange(e){
				this.selectedId = e.detail.current
			},
			requestUrl(){
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/userInfo/isvip',
					method: 'GET',
					data: {
						openId: this.openId,
						superiorId: this.superiorId
					},
					success: res => {
						this.isVip = res.data.data
						this.waitTime = res.data.wait
						this.superiorId = res.data.superior_id
						uni.setStorage({
							key: 'superiorId',
							data: this.superiorId
						})
					},
					fail: err => {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style>
	.swiper-selected{
		height: 556upx;
		margin-top: 40upx;
		margin-left: 26upx;
		margin-bottom: 68upx;
	}
	
	.content-copy{
		width: 692upx;
		height: 288upx;
	}
	
	.content{
		width: 698upx;
		height: 556upx;
	}
	
	.margin-fixed{
		height: 56upx;
	}
		
	.button {
			width: 698upx;
			height: 100upx;
			background: #09BA51;
			font-size: 40upx;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 12upx;
			margin-left: 26upx;
		}
	
	
	.vip-signal {
		width: 92upx;
		height: 38upx;
		margin-left: 34upx;
		margin-top: 12upx;
	}

	.active-class {
		color: #09BA51 !important;
		background: #FFFFFF !important;
	}

	.top-select view {
		font-size: 32upx;
		font-weight: bold;
		color: #51D587;
		background: url(../../static/vip/hy-bg@2x.png) no-repeat;
		background-size: cover;
		height: 100upx;
		width: 375upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.top-select {
		width: 750upx;
		height: 100upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}

	.container-deal {
		display: block;
		color: #09BA51;
		font-size: 24upx;
		margin-top: 20upx;
		margin-left: 198upx;
		margin-bottom: 20upx;
	}

	.item-title {
		width: 390upx;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.item-yeartimes {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 180upx;
	}

	.aldate {
		font-size: 36upx;
	}

	.banner-img {
		width: 750upx;
		height: 340upx;
	}

	.select-class {
		color: #09BA51;
	}

	.isbutton {
		width: 750upx;
		height: 100upx;
		display: flex;
		background: #09BA51;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 0upx;
	}

	.time-number {
		font-size: 24upx;
		word-spacing: 2upx;
	}

	.isbutton view {
		color: #fff;
		font-size: 30upx;
	}


	.isbutton image {
		position: absolute;
		z-index: -99;
	}
</style>
