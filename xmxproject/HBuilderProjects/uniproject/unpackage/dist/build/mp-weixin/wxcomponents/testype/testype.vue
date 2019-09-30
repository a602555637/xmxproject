<template name="testype">
	<view class="container-repair">
		<image class="repair-phone" src="../../static/iPhone@2x.png" mode=""></image>
		<view class="repair-info">
			<text class="repair-info-phone">{{phoneType}}</text>
			<text class="repair-info-test">检测到您的设备</text>
		</view>
		<view class="repair-right">
			<image @click="onNext" class="repair-right-change" src="../../static/ghjx-btn@2x.png" mode=""></image>
			<image @click="bindRepair" src="../../static/repair-btn@2x.png"></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:'testype',
		data() {
			return {
				phoneType: '正在检测...',
				smodel:''
			}
		},
		created() {
			uni.getSystemInfo({
				success: res =>{
					let s = res.model
					let t = s.indexOf('<')
					if(t > 0 && t < 15){
						s = s.substring(0, t)
						console.log('1' + s + '*')
						this.phoneType = s
						this.smodel = s
						this.setStorage()
					} else {
						let r = s.indexOf('(')
						if( r > 0 ){
							s = s.substring(0, r)
							console.log(s)
							this.phoneType = s
							this.smodel = s
							this.setStorage()
						} else {
							console.log('3' + s)
							this.phoneType = s
							this.smodel = s
							this.setStorage()
						}
					}
				}
			})
		},
		methods:{
			onNext() {
				uni.navigateTo({
					url: '../../pages/selectmodel/selectmodel'
				})
			},
			bindRepair(){
				uni.navigateTo({
					url:'../../pages/selectmodel/selectmodel?model=' + this.smodel
				})
			},
			setStorage(){
				uni.setStorage({
					key:'model',
					data: this.smodel
				})
				uni.setStorage({
					key:'phonetype',
					data: this.smodel
				})
			},
			hwTypeTest(e){
				let s = e.slice(0,3)
				switch (s){
					case 'SCL' : s = '荣耀4A'
						break;
					case 'KIW' : s = '荣耀5X'
						break;
					case 'TAG' : s = '畅玩5S'
						break;
					case 'TIT' : s = '畅玩5'
						break;
					case 'H60' : s = '荣耀6'
						break;
					case 'PE ' : s = '荣耀6 Plus'
						break;
					case 'PLK' : s = '荣耀7'
						break;
					case 'ATH' : s = '荣耀7i'
						break;
					case 'KIW' : s = '荣耀5X'
						break;
					case 'MT7' : s = 'Mate 7'
						break;
					case 'P7-' : s = '畅玩5'
						break;
					case 'KNT' : s = '荣耀V8'
						break;
					case 'FRD' : s = '荣耀8'
						break;
					case 'NXT' : s = 'Mate 8'
						break;
					case 'EDI' : s = 'Note 8'
						break;
					case 'MHA' : s = 'Mate 9'
						break;
					case 'ALE' : s = 'P8 青春版'
						break;
					case 'GRA' : s = 'P8'
						break;
					case 'NEM' : s = '荣耀5c'
						break;
				}
			}
		}
	}
</script>

<style>
	
	.repair-info-test {
		font-size: 26upx;
		color: #888F97;
	}
	
	.repair-info-phone {
		font-size: 32upx;
		margin-bottom: 16upx;
	}
	
	.repair-info {
		display: flex;
		flex-direction: column;
		margin-left: 40upx;
	}
	
	.repair-right-change {
		margin-right: 20upx;
	}
	
	.repair-right image {
		width: 160upx;
		height: 60upx;
	}
	
	.repair-right {
		display: flex;
		flex-direction: row;
		position: absolute;
		right: 40upx;
	}
	
	.repair-phone {
		width: 64upx;
		height: 128upx;
	}
	
	.container-repair {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 40upx;
		margin-bottom: 26upx;
		margin-top: 50upx;
	}
</style>
