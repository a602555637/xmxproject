<template name="xswiper">
	<view class="container">
		<view class="swiper">
			<view class="swiper-title"></view>
			<swiper class="swiper-tall" :indicator-dots="indicatorDots" :indicator-color="indicatorColor"
			 :indicator-active-color="indicatorActiveColor" :autoplay="autoplay" 
			 :previous-margin="previousMargin" :next-margin="nextMargin"
			 :interval="interval" :circular="circular" @change="change" :current="swiperCurrentIndex">
				<swiper-item class="swiper-container" v-for="(img,index) in imgs" :key="index" 
				:item-id="index" :data-year="index" @click="bindSwiperTap(index)">
<!-- 					<view class="swiper-item" :style="{background:img?('url('+ img +') center no-repeat'):'',backgroundSize:'cover'}"
					 :animation="animationData[index]">
					</view> -->
					<image class="swiper-item" :src="img" :animation="animationData[index]"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name:'xswiper',
		data() {
			return {
				interval: 3000,
				screenHeight: 0,
				animationData: {
					0: {},
					1: {},
					2: {},
					3: {}
				},
				title: '0',
				indicatorColor: '#D1D1D1',
				indicatorActiveColor: '#09BA51',
				indicatorDots: true,
				autoplay: true,
				previousMargin: uni.upx2px(50) + 'px',
				nextMargin: uni.upx2px(50) + 'px',
				// previousMargin:'30upx',
				// nextMargin:'30upx',
				circular: true,
				zoomParam: 1.10,
				swiperCurrentIndex: 0,
				data: [],
				max: 0,
				imgs: [
					'../../static/banner/banner1@2x.png',
					'../../static/banner/banner2@2x.png',
					'../../static/banner/banner3@2x.png',
					'../../static/banner/banner4@2x.png'
				]
			}
		},
		// computed:{
		// 	fullHeight() {
		// 		const res = uni.getSystemInfoSync();
		// 		return res.windowHeight - uni.upx2px(60) - (res.statusBarHeight+44)+'px';
		// 	}
		// },
		created() {
			this.animation = uni.createAnimation();
			this.animation.scale(this.zoomParam).step();
			this.animationData[0] = this.animation.export();
		},
		methods: {
			bindSwiperTap(id){
				// console.log(typeof(id))
				// if(id === 1){
				// 	uni.navigateTo({
				// 		url: '../../pages/bevip/bevip'
				// 	})
				// } return
				// else if( id === 3){
				// 	uni.navigateTo({
				// 		url:'../../pages/prize/prize'
				// 	})
				// }
			},
			change(e) {
				if (e.target.source == 'autoplay' || e.target.source == 'touch'){
					this.swiperCurrentIndex = e.detail.current
					this.title = e.detail.currentItemId
					for (let key in this.animationData) {
						if (e.detail.currentItemId == key) {
							this.animation.scale(this.zoomParam).step()
							this.animationData[key] = this.animation.export()
						} else {
							this.animation.scale(1.0).step()
							this.animationData[key] = this.animation.export()
						}
					}
				}
				return
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
	}

	.swiper-container {
		display: flex;
		align-items: center;
	}

	.swiper-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-left: 30upx;
		margin-right: 30upx;
		height: 330upx;
		width: 628upx;
		/* line-height: 300upx; */
		/* text-align: center; */
		broder-radius: 20upx;
		/* margin-bottom: 50upx; */
	}



	.swiper-tall {
		display: flex;
		align-items: center;
		height: 480upx;
	}



	.swiper-title {
		width: 750upx;
		text-align: center;
	}
</style>
