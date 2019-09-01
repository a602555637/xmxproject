<template>
	<view class="container">
		<view @click="onOrder" class="container-left">
			<image src="../../static/wxcomponentimg/kjxd@2x.png"></image>
			<text>一键下单</text>
		</view>
		<view>
			<button class="button-class" style="background-color: #FFFFFF;border-radius: 0;"
			@click="onGetUserInfo" type="primary" open-type="getUserInfo">
				<image src="../../static/wxcomponentimg/my@2x.png"></image>
				<text>个人中心</text>
			</button>
		</view>
<!-- 		<wx-app-openid>openid</wx-app-openid> -->

<!-- 		<view @click="onNext" class="container-left container-right">
			<image src="../../static/wxcomponentimg/my@2x.png"></image>
			<text class="container-left-text">个人中心</text>
		</view> -->
	</view>
</template>

<script>
	import wxAppOpenid from '../../components/ccg-getOpenID/ccg-wxAppOpenid.vue'
export default {
	data(){
		return{
			userInfo:{}
		}
	},
	components:{
		wxAppOpenid
	},
	methods: {
		onOrder() {
			uni.navigateTo({
				url: '../../pages/selectmodel/selectmodel'
			});
		},
		onNext() {
			uni.navigateTo({
				url: '../../pages/my/my'
			});
		},

		onGetUserInfo(){
			uni.getUserInfo({
				success: res =>{
					this.userInfo = res.userInfo
					if(this.userInfo){
						this.onNext()
					}
					return
					// console.log(this.userInfo.avatarUrl)
				}
			})
			
		}
	},
	created() {
		// uni.login({
		//   provider: 'weixin',
		//   success: res=> {
		//     console.log(res)
		//     // 获取用户信息
		//     uni.getUserInfo({
		//       provider: 'weixin',
		//       success: res=> {
		//         console.log(res)
		//       }
		//     })
		//   }
		// })
	}
}
</script>

<style>
	.button-class::after{
		border: none;
	}
	
	.button-class text{
		font-size: 24upx;
		color: #000;
		position: relative;
		bottom: 14upx;
	}
	
	.button-class image{
		width: 50upx;
		height: 50upx;
	}
	
	.button-class{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
.container-left {
	font-size: 24upx;
}

.container-left image {
	width: 50upx;
	height: 50upx;
}

.container {
	position: fixed;
	bottom: 0upx;
	display: flex;
	width: 750upx;
	height: 98upx;
	display: flex;
	justify-content: space-around;
	/* align-items: space-around; */
	/* 		padding-left: 136upx;
		padding-right: 134upx; */
	background: #fff;
}

.container-left {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.container-right {
	margin-left: 288upx;
}
</style>
