<template>
	<view class="container">
		<view class="container-item" v-for="(item, index) in friendItem" :key="index" :id="index">
			<text class="item.name">{{item.name}}</text>
			<text class="item.nums">{{item.nums}}</text>
			<image @click="openPopup" src="../../static/my/jb-btn@2x.png"></image>
		</view>
		<view @click="onConnect" class="container-button">
			<image src="../../static/my/add-qy@2x.png" />
			<text>绑定亲友</text>
		</view>
		<uni-popup custom ref="popup" type="center">
			<view class="popup-container">
				<image @click="closePopup()" src="../../static/faults/close@2x.png"></image>
				<text class="popup-title">解绑亲友</text>
				<text class="popup-name">赛琳娜 187****4782</text>
				<view class="popup-button">
					<view @click="closePopup()" class="popup-button-left">取消</view>
					<view @click="onConfirm" class="popup-button-right">确认解绑</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				friendItem:[
					{
						name:'赛琳娜',
						nums:'17852410471'
					},
					{
						name:'赛琳娜',
						nums:'17852410471'
					}
				]
			}
		},
		methods:{
			onConnect(){
				uni.navigateTo({
					url:'connect-friends'
				})
			},
			onConfirm(){
				uni.showToast({
					title: '解绑成功',
					icon:'success',
					duration:1500
				})
				setTimeout(()=>{
					this.closePopup()
				},0)
			},
			openPopup(){
				this.$refs.popup.open()
			},
			closePopup(){
				this.$refs.popup.close()
			}
		},
		components:{
			uniPopup
		}
	}
</script>

<style>
	
	.popup-button-right,
	.popup-button-left{
		width: 240upx;
		height: 80upx;
		font-size: 30upx;
		border-radius: 12upx;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	
	.popup-button-right{
		color: #FFFFFF;
		background-color: #09BA51;
		margin-left: 30upx;
	}
	
	.popup-button-left{

		color: #888F97;
		border: 2upx solid #EEEEEE;

	}
	
	.popup-button{
		display: flex;
		flex-direction: row;
	}
	
	.popup-name{
		font-size: 40upx;
		margin-bottom: 68upx;
	}
	
	.popup-title{
		font-size: 30upx;
		margin-top: 70upx;
		margin-bottom: 38upx;
	}
	
	.popup-container image{
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 30upx;
		top: 30upx;
	}
	
	.popup-container{
		width: 600upx;
		height: 400upx;
		background: #FFFFFF;
		border-radius: 20upx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.container-button{
		display: flex;
		align-items: center;
		margin-top: 42upx;
	}
	
	.container-button image{
		width: 32upx;
		height: 32upx;
		margin-left: 28upx;
		margin-right: 8upx;
	}
	
	.container-button text{
		font-size: 30upx;
		color: #51D587;
	}
	
	.item.name{
		margin-right: 40upx;
	}
	
	.container-item image{
		width: 124upx;
		height: 60upx;
		position: absolute;
		right: 40upx;
	}
	
	.container-item text{
		font-size: 30upx;
	}
	
	.container-item{
		display: flex;
		align-items: center;
		height: 120upx;
		margin-left: 26upx;
		margin-right: 26upx;
		border-bottom: 1px solid #F3F3F3;
	}
	
	.container{
		display: flex;
		flex-direction: column;
	}
	
	
</style>
