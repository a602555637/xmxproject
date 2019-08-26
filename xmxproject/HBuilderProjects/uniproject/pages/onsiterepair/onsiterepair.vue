<template>
	<view class="container">
		<view class="repair">
			<view class="repair-title">苹果 iPhone7 玫瑰金</view>
			<view class="repair-item" v-for="(item, index) in repairList">
				<text class="item-title">{{item.title}}</text>
				<text class="item-price">{{item.price}}</text>
			</view>
			<view class="onsite-service">
				
			</view>
			<text class="kiloprice">{{kiloPrice}}</text>
			<view class="repair-total">
				<text class="total-price-text">
					合计：
					<text class="total-price">{{totalPrice}}</text>
				</text>
				<image src="../../static/faults/hymfx@2x.png"></image>
			</view>
		</view>
		<!-- <view class="line"></view> -->
		<view class="container-timeselect">
			<text class="timeselect-title">上门时间</text>
			<text class="timeselect">13:30-14:00</text>
			<image class="right-arrow" src="../../static/wxcomponentimg/arrow@2x.png"></image>
			<view class="">
				<rattenking-dtpicker fields="minute" />
			</view>
		</view>
		<view class="repair-list">
			<uni-list>
			    <uni-list-item title="地区" ></uni-list-item>
			    <uni-list-item title="维修中心"></uni-list-item>
			    <uni-list-item title="到店时间"></uni-list-item>
			</uni-list>
		</view>
		<view class="line"></view>
		<view class="repair-input">
			<view class="repair-input-item">
				<text>姓名：</text>
				<input placeholder-class="placeholder-class" type="text" value="" placeholder="请输入您的姓名" />
			</view>
			<view class="repair-input-item">
				<text>手机号：</text>
				<input placeholder-class="placeholder-class" type="text" value="" placeholder="请输入您的手机号" />
			</view>
			<view class="repair-input-item">
				<text>验证码：</text>
				<input placeholder-class="placeholder-class" type="text" value="" placeholder="请输入验证码" />
			</view>
		</view>
		<textarea class="textarea" value="" placeholder-class="textarea-placeholder" placeholder="故障详情（选填）：" />
		<view class="line"></view>
		<view class="aggrement">
			<image v-if="isAgreement" src="../../static/repair/xy@2x.png"></image>
			<image v-else src="../../static/repair/xy@2x.png"></image>
			<text>我已同意<text class="deal">《XXXX协议》</text></text>
		</view>
		<view class="bottom-button">
			<view class="button-left">会员免费修</view>
			<view @click="onOrderDetail" class="button-right">
				<text class="button-right-text">用户特惠修</text>
				<text class="button-right-price">￥400</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniList from '../../components/uni-list/uni-list.vue';
	import uniListItem from '../../components/uni-list-item/uni-list-item.vue';
	import rattenkingDtpicker from '../../components/rattenking-dtpicker/rattenking-dtpicker.vue'
	export default{
		data(){
			return{
				kiloPrice:'￥28',
				isAgreement:true,
				totalPrice:9827,
				repairList:[{
					title:'屏幕损坏',
					price:'￥499'
				},{
					title:'电池不续航',
					price:'￥499'
				}
				]
			}
		},
		components:{
			uniList,
			uniListItem,
			rattenkingDtpicker
		},
		methods:{
			onOrderDetail(){
				if(this.isAgreement){
					uni.navigateTo({
						url: '../orderdetail/orderdetail'
					})
				}
				return
			}
		},
		onLoad() {
			// console.log(ListItem)
		}
	}
</script>

<style>
	.kiloprice{
		font-size: 26upx;
		position: absolute;
		top: 0upx;
		left: 0upx;
	}
	
	.right-arrow{
		width: 12upx;
		height: 24upx;
	}
	
	.container-timeselect{
		
	}
	
	.button-right-text{
		font-size: 32upx;
		font-weight: bold;
	}
	
	.button-right-price{
		font-size: 24upx;
		color: #09BA51;
	}
	
	.button-right{
		width: 374upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	.button-left{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 376upx;
		font-size: 32upx;
		font-weight: bold;
		color:#FFFFFF;
		background: #F2C900;
	}
	
	.bottom-button{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 100upx;
	}
	
	.deal{
		color: #09BA51;
		font-size: 26upx;
	}
	
	.aggrement>text{
		font-size: 26upx;
		color: #888F97;
	}
	
	.aggrement image{
		width: 24upx;
		height: 24upx;
		margin-right: 10upx;
	}
	
	.aggrement{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 92upx;
	}
	
	.textarea{
		margin: 30upx 26upx 0upx 26upx;
		height: 270upx;
	}
	
	.textarea-placeholder{
		font-size: 30upx;
		color: #333;
	}
	
	.line{
		width: 750upx;
		height: 20upx;
		background: #f3f3f3;
	}
	.placeholder-class{
		letter-spacing: 2upx;
		font-size: 24upx;
		color: #888F97;
	}
	
	.repair-input-item{
		display: flex;
		align-items: center;
		height: 120upx;
		border-bottom: 1px solid #eee;
		margin-left: 26upx;
		margin-right: 26upx;
	}
	
	.repair-input-item text{
		font-size: 30upx;
	}
	
	.repair-total{
		height: 120upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 26upx;
		padding-right: 40upx;
		border-bottom: 20upx solid #F1F1F1;
	}
	
	
	.repair-item{
		height: 120upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #eee;
		margin-left: 26upx;
		margin-right: 46upx;
	}
	
	.repair-total image{
		width: 130upx;
		height: 24upx;
	}
	
	.repair-title{
		font-size: 32upx;
		font-weight: bold;
		margin-top: 38upx;
		padding-left: 26upx;
		padding-bottom: 40upx;
		border-bottom: 1px solid #eee;
	}
	
	.item-title{
		font-size: 30upx;
	}
	
	.item-price{
		font-size: 26upx;
	}
	
	.total-price-text{
		font-size: 26upx;
		color: #09BA51;
	}
	
	.total-price{
		font-size: 30upx;
		font-weight: bold;
		color: #09BA51;
	}
</style>
