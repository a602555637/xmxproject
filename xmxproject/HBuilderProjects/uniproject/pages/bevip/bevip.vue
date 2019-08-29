<template>
	<view>
		<image class="banner-img" src="../../static/my/vip-banner@2x.png"></image>
		<view>
			<!-- 顶部选项卡 -->
			<view class="top-select">
				<view class="isSelected ?'active-class':''">手机会员</view>
				<view @click="onSelected" >平板会员</view>
			</view>
			<view class="content">
				<text class="content-desc">会员特权</text>
				<text @click="onChangeStatus" class="content-title">
					<text class="text-signal">*</text>
					专享终生免费维修服务
				</text>
				<view v-show="isShow" >
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
		</view>
		<view class="container-info">
			<text><text class="text-signal">*</text> 注册会员马上领小美商城通用购机券100元</text>
			<text><text class="text-signal">*</text> 专享配件升级6折、免费特权外维修6折/更换6折</text>
			<text><text class="text-signal">*</text>旧手机回收价同比提升20%</text>
			<text><text class="text-signal">*</text>专享免费检测、数据迁移、刷机、安装配件（用户自带配件）四项升级服务</text>
		</view>
		
		<text class="container-deal">小美修《用户协议》</text>
		
		<view @click="onPay" v-if="isVip" class="isbutton">
			<view>您已是会员</view>
			<view class="time-number">享免费修特权等待期倒计时<text class="aldate">{{aldate}}</text>天</view>
		</view>
		<view v-else @click="onPay" class="button">成为会员</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				isSelected:true,
				isShow:false,
				aldate: 32,
				isVip: true,
				TabCur: 0,
				tabList: [{
					title:'享免费更换外屏',
					yearTimes:'6次'
				},{
					title:'享免费更换内屏',
					yearTimes:'1次'
				},{
					title:'享免费更换主板、维修主板',
					yearTimes:'各1次'
				},{
					title:'享免费更换电源、维修充电IC',
					yearTimes:'各1次'
				},{
					title:'享免费更换前、后置摄像头、更换摄像头玻璃',
					yearTimes:'各1次'
				},{
					title:'享免费更换WIFI模块、维修WIFI线路、更换数据线尾插',
					yearTimes:'各1次'
				},{
					title:'享免费更换扬声器、麦克风、听筒、震动马达',
					yearTimes:'各2次'
				},{
					title:'享免费更换开关排线、所有按键',
					yearTimes:'各1次'
				},{
					title:'享免费更换手机后壳',
					yearTimes:'各1次'
				},{
					title:'享免费更换、维修重力感应、指南针',
					yearTimes:'各1次'
				}],
			}
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
			},
			onChangeStatus(){
				this.isShow = ! this.isShow
			},
			onSelected(){
				this.isSelected = !this.isSelected
			}
		}
	}
</script>

<style>
	.active-class{
		color: #09BA51 !important;
		background: #FFFFFF !important;
	}
	
	.top-select view{
		font-size: 32upx;
		background: #F3F3F3;
		height: 100upx;
		width: 375upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.top-select{
		width: 750upx;
		height: 100upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	
	.line-vertical{
		width: 1upx;
		height: 908upx;
		position: absolute;
		background: #EEEEEE;
		right: 224upx;
		top:696upx;
	}
	
	.container-deal{
		display: block;
		color: #09BA51;
		font-size: 24upx;
		margin-top: 96upx;
		margin-left: 280upx;
		margin-bottom: 40upx;
	}
	
	.container-info{
		display: flex;
		flex-direction: column;
		margin-left: 26upx;
		margin-top: 42upx;
	}
	
	.container-info text{
		font-size: 30upx;
		margin-bottom: 20upx;
	}
	
	.item-title{
		width: 390upx;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.item-yeartimes{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 180upx;
	}
	
	.content-item>view{
		font-size: 24upx;
	}
	
	.content-item{
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
	
	.content-subtitle-left{
		padding:20upx 164upx 16upx 154upx;
		border-left: 1px solid #EEEEEE;
	}
	
	.content-subtitle-right{
		border-left: 1px solid #EEEEEE;
		border-right: 1px solid #EEEEEE;
		padding: 20upx 64upx 16upx 70upx;
	}
	
	.content-subtitle{
		display: flex;
	}
	
	.content{
		margin-left: 26upx;
		width: 698upx;
	}
	
	.content-title{
		border: 1px solid #EEEEEE;
		padding: 24upx 214upx 20upx 160upx;
	}
	
	.content-desc{
		display: block;
		font-size: 30upx;
		margin-top: 40upx;
		margin-bottom: 22upx;
	}
	
	.text-signal{
		font-size: 30upx;
		color: #09BA51;
		margin-right: 6upx;
	}
	
	.content-subtitle text{
		font-size: 26upx;
		color: #888F97;
	}
	
	.aldate{
		font-size: 36upx;
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
	}
	
	.isbutton{
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
	
	.time-number{
		font-size: 24upx;
		word-spacing: 2upx;
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
	
</style>
