<template>
	<view class="container">
		<view @click="onOrder" class="container-left">
			<image src="../../static/wxcomponentimg/kjxd@2x.png"></image>
			<text>一键下单</text>
		</view>
		<button @click="onGetUserInfo" type="primary" open-type="getUserInfo">huoquxinxi</button>
		<wx-app-openid>openid</wx-app-openid>
		<view @click="onNext" class="container-left container-right">
			<image src="../../static/wxcomponentimg/my@2x.png"></image>
			<text class="container-left-text">个人中心</text>
		</view>
	</view>
</template>

<script>
	import wxAppOpenid from '../../components/ccg-getOpenID/ccg-wxAppOpenid.vue'
export default {
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
					console.log(res)
					console.log(res.userInfo)
				}
			})
		}
	},
	created() {
		uni.login({
		  provider: 'weixin',
		  success: res=> {
		    console.log(res)
		    // 获取用户信息
		    uni.getUserInfo({
		      provider: 'weixin',
		      success: res=> {
		        console.log(res)
		      }
		    })
		  }
		})
	}
};
</script>

<style>
.container-left {
	font-size: 24upx;
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
	justify-content: center;
	align-items: center;
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
