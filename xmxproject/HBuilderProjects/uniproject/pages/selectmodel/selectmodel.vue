<template>
	<view>
		<view class="search">
			<image src="../../static/wxcomponentimg/search@2x.png"></image>
			<text>搜索机型</text>
		</view>
		<!-- 选项卡 -->
		<xselect></xselect>
		<view class="container">
			<!-- 左侧本地数据 -->
			<view class="slide-left">
				<view @click="onSelectedId" :class="index == selectedId ? 'active' :''" class="left-item" v-for="(item,index) in slideList"
				 :key="index" :id="index">
					<text>{{item.brand}}</text>
				</view>
			</view>
			<!-- 右侧获取数据 -->
			<scroll-view scroll-y style="height: 990upx;">
				<view class="slide-right">
					<view @click="openPopup(index)" class="right-item" v-for="(item, index) in phoneType" :key="index">
						<text>{{item.model}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 底部弹框 -->
		<uniPopup custom="true" ref="popup" type="bottom">
			<view class="popup-content">
				<view class="content-top">
					<text>颜色选择</text>
					<image @click="closePopup" src="../../wxcomponents/popupcon/close@2x.png"></image>
				</view>
				<scroll-view scroll-y class="middle-con">
					<view class="content-middle" >
						<view :class="index == colorId ? 'active-text' :''" @click="onSelectedColor" class="content-middle-item" 
						v-for="(item, index) in popupContent" :key="index" :id="index">
							<view class="colorImg" :style="{background:item.value}"></view>
							<text>{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
				<view @click="onNext" class="content-button">
					<getOpenId></getOpenId>
				</view>
			</view>
		</uniPopup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import xselect from '../../wxcomponents/xselect/xselect.vue'
	import request from '../../components/pocky-request/index.js'
	import getOpenId from '../../components/ccg-getOpenID/ccg-wxAppOpenid.vue'
	
	export default {
		onLoad(sid) {
			uni.setStorage({
				key:'brand',
				data:'苹果'
			})
			
			this.requestUrl()
			uni.request({
				url: 'https://www.finetwm.com/xmRepair/phoneBrand/getBrandDetail',
				method: 'POST',
				data: {
					id:1
				},
				success: res => {
					this.phoneType = res.data.data
				}
			})

			// console.log(sid)
			
			if(sid.id){
				this.quickId = sid.id
			}else if(sid.model){
				let smodel = sid.model
				uni.setStorage({
					key:'model',
					data:smodel,
					success:res=>{
						uni.request({
							url:'https://www.finetwm.com/xmRepair/phoneBrand/getBrandColour',
							data:{
								name:smodel
							},
							method:'POST',
							success:res=>{
								this.popupContent = res.data.data
								this.$refs.popup.open()
							}
						})
					}
				})
				console.log('本机维修')
			}else{
				return
			}
			
		},
		data() {
			return {
				quickId:'',
				valueId:1,
				colorId:null,
				selectedId: 0,
				popupContent: [{
						name: "银色",
						value: "#E7E3E2"
					},{
						name: "金色",
						value: "#DAC8B4"
					},{
						name: "深空灰",
						value: "#2A2526"
					}],
				isSelected: false,
				phone: '手机',
				pad: '平板',
				slideList: [],
				phoneType: []
			}
		},
		methods: {
			onNext() {
				if(this.colorId !== null){
					uni.navigateTo({
						url: '../faults/faults?id=' + this.quickId
					})
				}
			},
			openPopup(e) {
				let modelSelected = this.phoneType[e].model
				uni.setStorage({
					key:'model',
					data:modelSelected
				})
				this.$refs.popup.open()
				
				//获取颜色色值
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/phoneBrand/getBrandColour',
					method: 'POST',
					data: {
						name: modelSelected
					},
					success: res => {
						this.popupContent = res.data.data
						// uni.setStorage({
						// 	key:'color',
						// 	data:svalue
						// })
					}
				})
			},
			closePopup() {
				this.$refs.popup.close()
				this.colorId = null
			},
			onSelectedId(e) {
				this.selectedId = e.currentTarget.id
				this.valueId = parseInt(e.currentTarget.id) + 1
				let svalueId = e.currentTarget.id
				let svalue = this.slideList[svalueId].brand
				uni.setStorage({
					key:'brand',
					data:svalue
				})
				uni.request({
					url: 'https://www.finetwm.com/xmRepair/phoneBrand/getBrandDetail',
					method: 'POST',
					data: {
						id:this.valueId
					},
					success: res => {
						this.phoneType = res.data.data
					}
				})
			},
			onSelectedColor(e){
				this.colorId = e.currentTarget.id
				// console.log(this.colorId)
				let selectedColorName = this.popupContent[this.colorId].name
				let selectedColorValue = this.popupContent[this.colorId].value
				uni.setStorage({
					key:'colorName',
					data:selectedColorName
				})
				uni.setStorage({
					key:'colorValue',
					data:selectedColorValue
				})
			},
			
			requestUrl(){
				const instance = new request()
				const requestModel = instance.get({
					url:'/phoneBrand/getBrand',
					contentType: 'json',
				}).then(res=>{
					this.slideList = res.data.data
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			}

		},
		components: {
			uniPopup,
			xselect,
			getOpenId
		}
	}
</script>

<style>
	.active-text{
		color: #09BA51;
	}
	
	.content-top {
			display: flex;
			justify-content: space-between;
			margin: 30upx 26upx 60upx 26upx;
		}
	.content-button {
			position: absolute;
			bottom: 30upx;
			left: 26upx;
	}
	.popup-content {
			display: flex;
			flex-direction: column;
			background: #fff;
			height: 560upx;
	}
	.content-button image {
			width: 698upx;
			height: 80upx;
	}
	.content-top image {
			width: 42upx;
			height: 42upx;
	}
	.content-top text {
			font-size: 32upx;
			font-weight: bold;
	}
		
	.middle-con{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-left: 64upx;
			height: 300upx;
			/* margin-right: 64upx; */
		}
		
		.content-middle{
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			width: 630upx;
		}
		
		.content-middle-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-wrap: wrap;
			margin-right: 64upx;
			margin-bottom: 40upx;
		}
		.content-middle-item view {
			width: 140upx;
			height: 70upx;
			margin-bottom: 10upx;
			border-radius: 12upx;
			border: 1px solid #EEEEEE;
		}
		.content-middle-item text {
			font-size: 26upx;
		}
	
	
	.slide-right {
		margin-left: 114upx;
		margin-top: 30upx;
	}

	.right-item {
		font-size: 32upx;
		margin-bottom: 60upx;
	}

	.active {
		background: #FFFFFF;
	}

	.left-item {
		width: 206upx;
		height: 102upx;
		font-size: 32upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.slide-left {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #F3F3F3;
		width: 206upx;
		height: 896upx;
	}

	.container {
		display: flex;
	}

	.search image {
		width: 30upx;
		height: 30upx;
	}

	.search text {
		font-size: 26upx;
		color: #888F97;
	}

	.search {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 698upx;
		height: 70upx;
		background: #F3F3F3;
		border-radius: 12upx;
		margin-left: 26upx;
		margin-top: 30upx;
	}
</style>
