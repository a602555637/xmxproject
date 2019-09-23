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
				<scroll-view class="scroll-class" scroll-y>
					<view class="content">
						<text class="content-desc">会员特权</text>
						<text @click="onChangeStatus" class="content-title">
							<text class="text-signal">*</text>
							专享终生免费维修服务
						</text>
						<view v-show="isShow">
							<view class="content-subtitle">
								<text class="content-subtitle-left">免费维修详情</text>
								<text class="content-subtitle-right">每年</text>
							</view>
							<view class="content-item" v-for="(item, index) in tabList" :key="index">
								<view class="item-title">{{item.title}}</view>
								<view class="item-yeartimes">{{item.yearTimes}}</view>
							</view>
							<view class="line-vertical"></view>
						</view>
					</view>
					<view class="container-info">
						<text><text class="text-signal">*</text> 注册会员马上领小美商城通用购机券100元</text>
						<text><text class="text-signal">*</text> 专享配件升级6折、免费特权外维修6折/更换6折</text>
						<text><text class="text-signal">*</text>旧手机回收价同比提升20%</text>
						<text><text class="text-signal">*</text>专享免费检测、数据迁移、刷机、安装配件（用户自带配件）四项升级服务</text>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<text class="content-desc fixed1">会员特权</text>
				<view class="container-info">
					<text><text class="text-signal">*</text>所有维修项目享受8折</text>
					<text><text class="text-signal">*</text>专享配件升级8折、免费特权外维修8折/更换8折</text>
				</view>
			</swiper-item>
		</swiper>
		
		<text class="container-deal">小美修《用户协议》</text>

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
				isShow: false,
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
			tabChange(index) {
				this.TabCur = index;
			},
			onPay() {
				uni.navigateTo({
					url: 'vip-type?id=' + this.selectedId,
					success: res => {
						console.log('success')
					}
				});
			},
			onChangeStatus() {
				this.isShow = !this.isShow
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
	.margin-fixed{
		height: 56upx;
	}
	
	.swiper{
		height: 340upx;
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
	
	.swiper-selected{
		width: 100%;
		height: 600upx;
	}
	
	.scroll-class{
		height:580upx;
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
		background: #F3F3F3;
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

	.line-vertical {
		width: 1upx;
		height: 894upx;
		position: absolute;
		background: #EEEEEE;
		right: 222upx;
		top: 270upx;
	}

	.container-deal {
		display: block;
		color: #09BA51;
		font-size: 24upx;
		margin-top: 20upx;
		margin-left: 280upx;
		margin-bottom: 20upx;
	}

	.container-info {
		display: flex;
		flex-direction: column;
		margin-left: 26upx;
		margin-top: 42upx;
	}

	.container-info text {
		font-size: 30upx;
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

	.content-item>view {
		font-size: 24upx;
	}

	.content-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-top: 24upx;
		padding-bottom: 22upx;
		padding-left: 40upx;
		border-top: 1px solid #EEEEEE;
		border-right: 1px solid #EEEEEE;
		border-left: 1px solid #EEEEEE;
	}

	.content-subtitle-left {
		padding: 20upx 164upx 16upx 154upx;
		border-left: 1px solid #EEEEEE;
	}

	.content-subtitle-right {
		border-left: 1px solid #EEEEEE;
		border-right: 1px solid #EEEEEE;
		padding: 20upx 64upx 16upx 70upx;
	}

	.content-subtitle {
		display: flex;
	}

	.content {
		margin-left: 26upx;
		width: 698upx;
		display: flex;
		flex-direction: column;
	}

	.content-title {
		border: 1px solid #EEEEEE;
		/* padding: 24upx 214upx 20upx 160upx; */
		padding-top: 24upx;
		padding-bottom: 20upx;

	}
	
	.fixed1{
		margin-left: 26upx;
	}
	
	.content-desc {
		display: block;
		font-size: 30upx;
		margin-top: 40upx;
		margin-bottom: 22upx;
	}

	.text-signal {
		font-size: 30upx;
		color: #09BA51;
		margin-right: 6upx;
	}

	.content-subtitle text {
		font-size: 26upx;
		color: #888F97;
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

	.content text {
		font-size: 30upx;
		display: inline-block;
	}
</style>
