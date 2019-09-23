<template>
	<view class="conbox">
		<view class="container">
			<!-- 背景 -->
			<!-- <image src="../../static/banner/banner1@2x.png" class="cont" mode=""></image> -->
			<image src="../../static/vip/price-bg@2x.png" class="caidai" mode=""></image>
			<!-- <view class="header">
				<view class="header-title">
					<view class="left">
						次数： <text style="color: #E4431A;">{{chishu}}</text>
					</view>
					
				</view>
			</view> -->
			<view class="main">
				<view class="canvas-container">
					<view :animation="animationData" class="canvas-content" id="zhuanpano" style="">
						<view class="canvas-list">
							<view class="canvas-item" :style="[{zIndex:index2}]" v-for="(iteml,index2) in awardsList" :key="index2">
								<view class="canvas-item-text" :style="[{transform:'rotate('+iteml.turn+')'}]">
									<image class="canvas-item-text-img" src="../../static/vip/zpg@2x.png" v-if="iteml.type == 15"></image>
									<image class="canvas-item-text-img" src="../../static/vip/200quan@2x.png" v-if="iteml.type == 14"></image>
									<image class="canvas-item-text-img" src="../../static/vip/czzj@2x.png" v-if="iteml.type == 13"></image>
									<image class="canvas-item-text-img" src="../../static/vip/1zhe@2x.png" v-if="iteml.type == 12"></image>
									<image class="canvas-item-text-img" src="../../static/vip/wxcd@2x.png" v-if="iteml.type == 11"></image>
									<image class="canvas-item-text-img" src="../../static/vip/5zhe@2x.png" v-if="iteml.type == 10"></image>
									<image class="canvas-item-text-img" src="../../static/vip/cdb@2x.png" v-if="iteml.type == 9"></image>
									<image class="canvas-item-text-img" src="../../static/vip/100quan@2x.png" v-if="iteml.type == 8"></image>
									<image class="canvas-item-text-img" src="../../static/vip/lyej@2x.png" v-if="iteml.type == 7"></image>
									<image class="canvas-item-text-img" src="../../static/vip/hwP@2x.png" v-if="iteml.type == 6"></image>
									<image class="canvas-item-text-img" src="../../static/vip/iPad@2x.png" v-if="iteml.type == 5"></image>
									<image class="canvas-item-text-img" src="../../static/vip/10quan@2x.png" v-if="iteml.type == 4"></image>
									<image class="canvas-item-text-img" src="../../static/vip/tiemo@2x.png" v-if="iteml.type == 3"></image>
									<image class="canvas-item-text-img" src="../../static/vip/3zhe@2x.png" v-if="iteml.type == 2"></image>
									<image class="canvas-item-text-img" src="../../static/vip/erji@2x.png" v-if="iteml.type == 1"></image>
									<image class="canvas-item-text-img" src="../../static/vip/20quan@2x.png" v-if="iteml.type == 0"></image>
									<text>{{iteml.award}}</text>
								</view>
							</view>
						</view>
					</view>
					
					<view @tap="playReward" class="canvas-btn" v-bind:class="btnDisabled">
						<image src="../../static/vip/cj-an@2x.png" mode=""></image>
					</view>
				</view>
			</view>
			<image class="right" src="../../static/vip/price-bevip@2x.png" mode=""></image>
			<view class="my-prize" @click="getmyPrize">我的奖品</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				awardsConfig: {
					chance: true, //是否有抽奖机会
					lists: [
						{
							id: 0,
							type: 0,        //1积分  2经验   3现金
							name: "抵用券20元",        //名称
							amount: "1.00",        //数额
							scale: "0.60",        //中奖比例
							createtime: 1553651469
						},
						{
							id: 1,
							type: 1,        //1积分  2经验   3现金
							name: "有线耳机",        //名称
							amount: "1.00",        //数额
							scale: "0.60",        //中奖比例
							createtime: 1553651469
						},
						{
							id: 2,
							type: 2,        //1积分  2经验   3现金
							name: "3折优惠券",        //名称
							amount: "1.00",        //数额
							scale: "0.60",        //中奖比例
							createtime: 1553651469
						},
						{
							id: 3,
							mold: 1,
							type: 3,
							name: "免费贴膜一次",
							amount: 2,
							scale: "0.50",
							createtime: 1553651481
						},
						{
							id: 4,
							mold: 1,
							type: 4,
							name: "抵用券10元",
							amount: 2,
							scale: "0.50",
							createtime: 1553651481
						},
						{
							id: 5,
							mold: 1,
							type: 5,
							name: "平板电脑",
							amount: 2,
							scale: "0.50",
							createtime: 1553651481
						},
						{
							id: 6,
							type: 6,        //1积分  2经验   3现金
							name: "智能手机",        //名称
							amount: "1.00",        //数额
							scale: "0.60",        //中奖比例
							createtime: 1553651469
						},
						{
							id: 7,
							type: 7,        //1积分  2经验   3现金
							name: "蓝牙耳机",        //名称
							amount: "1.00",        //数额
							scale: "0.60",        //中奖比例
							createtime: 1553651469
						},
						{
							id: 8,
							type: 8,        //1积分  2经验   3现金
							name: "购机券100元",        //名称
							amount: "1.00",        //数额
							scale: "0.60",        //中奖比例
							createtime: 1553651469
						},
						{
							id: 9,
							mold: 1,
							type: 9,
							name: "充电宝",
							amount: 2,
							scale: "0.50",
							createtime: 1553651481
						},
						{
							id: 10,
							mold: 1,
							type: 10,
							name: "5折优惠券",
							amount: 2,
							scale: "0.50",
							createtime: 1553651481
						},
						{
							id: 11,
							mold: 1,
							type: 11,
							name: "无线充电器",
							amount: 2,
							scale: "0.50",
							createtime: 1553651481
						},
						{
							id: 12,
							mold: 1,
							type: 12,
							name: "1折优惠券",
							amount: 2,
							scale: "0.50",
							createtime: 1553651481
						},
						{
							id: 13,
							mold: 1,
							type: 13,
							name: "车载支架",
							amount: 2,
							scale: "0.50",
							createtime: 1553651481
						},
						{
							id: 14,
							mold: 1,
							type: 14,
							name: "购机券200元",
							amount: 2,
							scale: "0.50",
							createtime: 1553651481
						},
						{
							id: 15,
							mold: 1,
							type: 15,
							name: "迷你自拍杆",
							amount: 2,
							scale: "0.50",
							createtime: 1553651481
						}
						
					], //奖品列表 
				},
				awardsList: [],
				animationData: {},
				btnDisabled: '',
				thanksarr: [], //存储谢谢参与的索引
				chishu: 1,
				mold: 1,
				myPrizelist:[]
			}
		},
		onLoad: function() {
			// this.requestFun('order/findAllShopOrder',{
			// 	shopId: 1
			// })
			// test  promise
			// 获取奖品列表
			this.initdata(this)
		},
		onReady: function(e) {

		},
		methods: {
			requestFun(url,data){
				let promise = new Promise((resolve,reject)=>{
					uni.request({
							url: 'https://www.finetwm.com/xmRepair/' + url,
							method: 'POST',
							data: data,
							success: res => resolve(res),
							fail: err => reject(err)
						})
				})
				promise.then(
					res => console.log(res),
					err => console.log(err)
				)
				
			},
			
			// 查看奖品
			getmyPrize(){
				console.log('my prize')
			},
			// 初始化抽奖数据
			initdata: function(that){
					// that.awardsConfig = data
					// that.chishu = data.luckdraw;
					// 获取奖品的个数
					let awarrlength = that.awardsConfig.lists.length
					// push 谢谢参与奖项
					// for (var i = 0; i <= 3 * 2; i++) {
					// 	if (i % 3 == 0) {
					// 		that.thanksarr.push(i)
					// 		that.awardsConfig.lists.splice(i, 0, {
					// 			name: '谢谢参与',
					// 			type: 0
					// 		})
					// 	}
					// }
					// 为每一项追加index属性
					that.awardsConfig.lists.forEach(function(element, index) {
						element.index = index
					})
				
					// 画转盘
					that.drawAwardRoundel()
			},
			//画抽奖圆盘  
			drawAwardRoundel: function() {
				// 拿到奖品列表
				var awards = this.awardsConfig.lists;
				var awardsList = [];
				// 每份奖品所占角度
				var turnNum = 1 / awards.length * 360; // 文字旋转 turn 值  
				// 奖项列表  
				for (var i = 0; i < awards.length; i++) {
					awardsList.push({
						turn: i * turnNum + 'deg', //每个奖品块旋转的角度
						lineTurn: i * turnNum + turnNum / 2 + 'deg', //奖品分割线的旋转角度
						award: awards[i].name, //奖品的名字,
						type: awards[i].type,
						id:awards[i].type,
					})
				}
				this.btnDisabled = this.chishu ? '' : 'disabled';
				this.awardsList = awardsList;
			},
			//发起抽奖  
			playReward: function() {
				var that = this
				
				// that.runDeg = 60*Math.random()
				if (this.chishu == 0) {
					uni.showToast({
						title: '抽奖次数已经用完',
						icon: 'none'
					})
					return
				}




				// 获取奖品
				
					var awardIndex = 3
					// that.awardsList.forEach(function(element, index) {
					// 	if (element.award == data.name) {
					// 		awardIndex = index
					// 	}
					// })
					//中奖index  
					var awardsNum = that.awardsConfig.lists;
					// var awardIndex = 1 || Math.round(Math.random() * (awardsNum.length - 1)); //随机数  
					var runNum = 4; //旋转8周  
					var duration = 4000; //时长  
				
					// 旋转角度  
					that.runDeg = that.runDeg || 0;
					let preDeg = that.runDeg
					that.runDeg = that.runDeg + (360 - that.runDeg % 360) + (360 * runNum - awardIndex * (360 / awardsNum.length)) +1
					//创建动画  
					if(process.env.VUE_APP_PLATFORM == 'h5'){
						// document.styleSheets[0]
						document.getElementById('zhuanpano').style='animation:rotate_before 4s 0ms ease forwards;'
						if(document.styleSheets[0].cssRules.length>0){
							Array.from(document.styleSheets[0].cssRules).forEach(function(element,index){
								if(element.name == 'rotate_before'){
									// 删除上次插入的动画
									document.styleSheets[0].deleteRule(index)
								}
							})
						}
						
						// console.log(document.styleSheets[0].cssRules)
						// console.log("@keyframes rotate_before{from{ transform: rotate("+preDeg+"deg); }to{ transform: rotate("+that.runDeg+"deg);}}")
						// 插入定义的动画
						document.styleSheets[0].insertRule("@keyframes rotate_before{from{ transform: rotate("+preDeg+"deg); }to{ transform: rotate("+that.runDeg+"deg);}}",8);
						
					}else{
						var animationRun = uni.createAnimation({
							duration: duration,
							timingFunction: 'ease'
						})
						animationRun.rotate(that.runDeg).step();
						that.animationData = animationRun.export();
					}
// 					// #ifndef H5
// 					console.log(document.styleSheets)
// 					document.getElementById('zhuanpano')
// 					// #endif
					that.btnDisabled = 'disabled';

					// 中奖提示  
					var awardsConfig = that.awardsConfig;
					var awardType = awardsConfig.lists[awardIndex].type;
					that.chishu = that.chishu - 1;
					if (awardType != 0) {
						setTimeout(function() {
							uni.showModal({
								title: '恭喜',
								content: '获得' + (awardsConfig.lists[awardIndex].name),
								showCancel: false,
								success:function(){
									// 置空style  否则动画不生效
									setTimeout(function(){
										document.getElementById('zhuanpano').style=''
									},1000)
								}
							});
							that.btnDisabled = '';
						}.bind(that), duration);
					} else {
						setTimeout(function() {
							uni.showModal({
								title: '很遗憾',
								content: '没中奖 ' + (awardsConfig.lists[awardIndex].name),
								showCancel: false,
								success:function(){
									// 置空style  否则动画不生效
									setTimeout(function(){
										document.getElementById('zhuanpano').style=''
									},1000)
								}
							})
							that.btnDisabled = ''
						}.bind(that), duration)
					}


			},

		}

	}
</script>
<style scoped>
	.my-prize{
		position: relative;
		font-family: AlibabaPuHuiTi-Regular;
		font-size: 28upx;
		color: #FFB600;
		margin-top: 160upx;
		margin-left: 302upx;
	}
	
	.main{
		margin-top: 300rpx;
		margin-left: -16rpx;
	}
	
	.right{
		width: 490upx;
		height: 178upx;
		top: 160upx;
		left: 130upx;
		position: relative;
	}
	
	.conbox {
		width: 750upx;
		height: 100vh;
/* 		overflow-x: hidden;
		overflow-y: scroll; */
	}

	.container,
	image.cont {
		width: 750upx;
		min-height: 100vh;
		height: auto;
		top: 160upx;
	}

	image.cont {
		height: 100%;
		position: absolute;
		z-index: 0;
	}

	image.caidai {
		position: absolute;
		top: 0;
		left: 0;
		width: 750upx;
		height: 1694upx;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* height: 246upx; */
		padding-top: 48upx;
		padding-bottom: 40upx;
		box-sizing: border-box;
		position: relative;
		z-index: 3;
	}

	.header-title {
		width: 100%;
		height: 60upx;
		display: flex;
		align-items: center;
		padding: 0 48upx;
		box-sizing: border-box;
		justify-content: space-between;
	}

	.header-title>view {
		padding: 8upx 16upx;
		border: 1px solid #d89720;
		color: #d89720;
		font-size: 28upx;
		border-radius: 26upx;
	}

	/* 转盘 */
	.canvas-container {
		/* margin: 0 auto; */
		margin-left: 100upx;
		position: relative;
		width: 570upx;
		height: 570upx;
		/* background: url(../../static/vip/zp-bj@2x.png) no-repeat; */
		/* background-size: cover; */
		border-radius: 50%;
	}

	.canvas {
		width: 100%;
		height: 100%;
		display: block !important;
		border-radius: 50%;
	}

	.canvas-content {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
		display: block;
		width: 600upx;
		height: 600upx;
		/* border-radius: inherit; */
		/* background-clip: padding-box; */
		/* background-color: #ffcb3f; */
	}

	.canvas-element {
		position: relative;
		z-index: 1;
		width: inherit;
		height: inherit;
		border-radius: 50%;
	}

	.canvas-list {
		width: 560upx;
		height: 560upx;
		background: url(../../static/vip/zp-bj@2x.png) no-repeat;
		background-size: cover;
		position: absolute;
		left: 8upx;
		/* top: -10upx; */
		z-index: 9999;
	}

	.canvas-item {
		position: absolute;
		/* left: 0; */
		top: -16upx;
		width: 100%;
		height: 100%;
		color: #e4370e;
		/* text-shadow: 0 1upx 1upx rgba(255, 255, 255, 0.6); */
	}

	.canvas-item-text {
		position: relative;
		display: block;
		padding-top: -10upx;
		margin: 0 auto;
		text-align: center;
		-webkit-transform-origin: 50% 300upx;
		transform-origin: 50% 300upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #FF8229;
	}

	.canvas-item-text text {
		font-size: 15upx;
	}

	.canvas-item-text-img {
		width: 50upx;
		height: 50upx;
		padding-top: 24upx;
	}

	/* 分隔线 */
	.canvas-line {
		position: absolute;
		left: 0;
		top: 0;
		width: inherit;
		height: inherit;
		z-index: 99;
	}

	.canvas-litem {
		position: absolute;
		left: 300upx;
		top: 0;
		width: 3upx;
		height: 300upx;
		background-color: rgba(228, 55, 14, 0.4);
		overflow: hidden;
		-webkit-transform-origin: 50% 300upx;
		transform-origin: 50% 300upx;
	}

	/**  
* 抽奖按钮  
*/	
	.canvas-btn image{
		width: 172upx;
		height: 186upx;
	}
	
	.canvas-btn {
		position: absolute;
		left: 200upx;
		top: 200upx;
		z-index: 400;
/* 		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		color: #f4e9cc;
		background-color: #e44025;
		line-height: 80upx;
		text-align: center;
		font-size: 26upx;
		text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.6);
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
		text-decoration: none; */
	}

	.canvas-btn::after {
		position: absolute;
		display: block;
		content: ' ';
		left: 12upx;
		top: -44upx;
		width: 0;
		height: 0;
		overflow: hidden;
		border-width: 30upx;
		border-style: solid;
		border-color: transparent;
		border-bottom-color: #e44025;
	}

	.canvas-btn.disabled {
		pointer-events: none;
		background: #b07a7b;
		color: #ccc;
	}

	.canvas-btn.disabled::after {
		border-bottom-color: #b07a7b;
	}

	.canvas-btn-table {
		color: #A83FDB;
		width: 120upx;
		text-align: center;
		position: absolute;
		left: 240upx;
		top: 360upx;
		font-size: 26upx;
		background-color: #FFFFFF;
		opacity: 0.9;
	}

	.typecheckbox {
		width: 100%;
		position: relative;
		z-index: 3;
		display: flex;
		justify-content: space-between;
		padding: 20upx;
		box-sizing: border-box;
		color: #fff;
		font-size: 28upx;
		top: -120upx;
		flex-direction: column;
		height: 180upx;
		align-items: flex-end;
		/* padding-top: 46upx; */
	}

	.typecheckbox view {
		border: 1px solid #FF3637;
		background: transparent;
		color: #FF3637;
		display: flex;
		height: 60upx;
		width: 140upx;
		border-radius: 50upx;
		align-items: center;
		justify-content: center;
		display: flex;
		margin-left: 20upx;
	}

	.typecheckbox view.active {
		background: #FF3637;
		color: #fff;
	}

	.shadowbox {
		width: 750upx;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		background: rgba(0, 0, 0, .6);
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.myrewards {
		width: 600upx;
		min-height: 80upx;
		background: #FFEEDF;
		border: 10upx solid #F2692F;
		color: #333;
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		border-radius: 40upx;
		padding-bottom: 20upx;
	}

	.myrewards .title {
		font-family: PingFang-SC-Bold;
		font-size: 16px;
		color: #E4431A;
		letter-spacing: 0.57px;
		display: flex;
		padding-top: 36upx;
		justify-content: center;
	}

	.myrewards .itembox {

		max-height: 320upx;
		overflow-y: auto;
	}

	.myrewards .item {
		width: 100%;
		height: 66upx;
		padding: 0 32upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
