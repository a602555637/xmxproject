<template>
    <view class="container">
        <view @click="openPopup(index)" class="container-item" v-for="(item,index) in faulesList" :key="index">
            <image :src="item.imgSrc"></image>
            <text>{{item.text}}</text>
        </view>
		<!-- <view class="disable"></view> -->
        <uniPopup custom="true" ref="popup" type="bottom" @change="onChangeValue" >
            <view class="container-popup">
                <view class="popup-title">
                    <view class="title-quick">
                    	<text>故障选择</text>
                    	<view class="title-quick-top">
                    		当前机型：{{model}}
                    		<text @click="changeType" class="title-quick-button">更换机型</text>
                    	</view>
                    </view>
                    <image @click="closePopup" src="../../static/faults/close@2x.png"></image>
                </view>             
                <scroll-view scroll-y class="scroll-view">
                    <checkbox-group @change="onEventChange">
                        <view v-for="(item, index) in faulesItem" :id="index" :key="index">
                            <label class="checkbox">
                                <checkbox :value="index" :checked="item.checked" >
                                    <view class="popup-content">
                                        <view class="popup-content-left">
                                            <view class="item-title">{{item.title}}</view>
                                            <view class="item-desc">{{item.desc}}</view>
                                        </view>
                                        <view class="item-price">{{item.price}}元</view>
                                    </view>
                                </checkbox>
                            </label>
                        </view>
                    </checkbox-group>
                </scroll-view>
                <view class="popup-bottom">
                    <view class="popup-bottom-left">
                        <text class="total-price-text">合计：</text>
                        <text class="total-price">{{totalPrice}}</text>
                    </view>
                    <image class="popup-bottom-right" src="../../static/faults/hymfx@2x.png"></image>
                </view>
                <view class="popup-button">
                    <view @click="onsiteRepair" class="popup-button-left">
                        <image src="../../static/faults/door@2x.png"></image>
                        <text class="popup-button-text">上门维修</text>
                    </view>
                    <view @click="onsiteArrival" class="popup-button-right">
                        <image src="../../static/faults/tostore@2x.png"></image>
                        <text class="popup-button-text">到店维修</text>
                    </view>
                    <view class="line-thin"></view>
                </view>
            </view>
        </uniPopup>
    </view>
</template>

<script>
    import uniPopup from '../../components/uni-popup/uni-popup.vue'

    export default {
		//获取当前手机型号
		onReady() {
			uni.getStorage({
				key:'model',
				success:res=>{
					this.model = res.data
				}
			})
		},
		//判断是否快捷维修入口
        onLoad(e) {
			uni.getStorage({
				key:'openId',
				success:res=>{
					this.openId = res.data
					console.log(res)
				},
				fail: err=>{
					uni.navigateTo({
						url: '../index/index-login'
					})
				}
			})
			this.getFaultsItem()
			let sid = e.id
			if(sid == ''){
				return
			}else{
				this.$refs.popup.open()
                let xtypeId = this.faulesList[sid].type
                uni.request({
                    url:'https://www.finetwm.com/xmRepair/faults/getDetail',
                    method:'POST',
                    data:{
                        type:xtypeId
                    },
                    success: res=>{
                        this.faulesItem = res.data.data
                    }
                })
            }
        },
        data() {
            return {
				faulesItemCopy:[],
				model:'',
				faulesTitle:[],
                totalPrice: 0,
                faulesItem: [],
                faulesList: [{
                    imgSrc: '../../static/faults/screen@2x.png',
                    text: '屏幕问题',
                    type: "screen"
                }, {
                    imgSrc: '../../static/faults/battery@2x.png',
                    text: '电池电源问题',
                    type: "battery"
                }, {
                    imgSrc: '../../static/faults/signal@2x.png',
                    text: '连接/信号问题',
                    type: "signal"
                }, {
                    imgSrc: '../../static/faults/camare@2x.png',
                    text: '摄像头问题',
                    type: "camera"
                }, {
                    imgSrc: '../../static/faults/voice@2x.png',
                    text: '声音问题',
                    type: "voice"
                }, {
                    imgSrc: '../../static/faults/botton@2x.png',
                    text: '按键问题',
                    type: "keyboard"
                }, {
                    imgSrc: '../../static/faults/shield@2x.png',
                    text: '外壳边框问题',
                    type: "edging"
                }, {
                    imgSrc: '../../static/faults/board@2x.png',
                    text: '主板维修',
                    type: "mainboard"
                }, {
                    imgSrc: '../../static/faults/switchoff@2x.png',
                    text: '开关机问题',
                    type: "switch"
                }, {
                    imgSrc: '../../static/faults/unkeep@2x.png',
                    text: '保养服务',
                    type: "maintain"
                }, {
                    imgSrc: '../../static/faults/install@2x.png',
                    text: '安装服务',
                    type: "install"
                }, {
                    imgSrc: '../../static/faults/other@2x.png',
                    text: '其他故障',
                    type: "others"
                }],
				// selectedTitle:[],
				// selectedTitle1:[],
				// selectedTitle2:[],
				// selectedPrice:[],
				// selectedPrice1:[],
				// selectedPrice2:[],
				selectedId:[],
				selectedId1:[],
				selectedId2:[]
            }
        },
        methods: {
			// 变更当前机型
			changeType(){
				uni.navigateTo({
					url: '../selectmodel/selectmodel'
				})
			},
			// 上门维修跳转
            onsiteRepair(e) {
                uni.navigateTo({
                    url: '../onsiterepair/onsiterepair',
					success:res=>{
						uni.removeStorage({
						    key: 'sid',
						    success:res => {
						        console.log('clear success')
						    }
						})
					}
                })
            },
			// 到店维修跳转
            onsiteArrival(){
                uni.navigateTo({
                    url:'../arrival-repair/arrival-repair',
					success:res=>{
						uni.removeStorage({
						    key: 'sid',
						    success:res => {
						        console.log('clear success')
						    }
						})
					}
                })
            },
            onEventChange(e){
				let ind = e.detail.value  //当前已选项id
				// this.selectedTitle = []			//当前已选	数组
				// this.selectedPrice = []
				this.selectedId = []
				let priceArray = []
				for (let i = 0; i < ind.length; i++) {
					// let itemTitle = this.faulesItem[ind[i]].title
					let itemId = this.faulesItem[ind[i]].id
					
					let itemPrice = this.faulesItem[ind[i]].price
					priceArray.push(itemPrice)
					let sum = 0
					// console.log(priceArray.join("+"))
					// this.selectedTitle.push(itemTitle)
					// this.selectedPrice.push(itemPrice)
					this.selectedId.push(itemId)
				}
				
			},
			//所有子故障列表
			getFaultsItem(){
				uni.request({
				    url:'https://www.finetwm.com/xmRepair/faults/getDetailList',
				    success: res=>{
						this.faulesItem = res.data.data
						this.faulesItemCopy = res.data.data
				    }
				})
			},
			// open uni-popup
			openPopup(sid) {
				console.log(sid)
                this.$refs.popup.open()
				let faulesItem = this.faulesItem
				if(sid === 0){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(0, 5)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if(sid === 1){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(5, 11)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if(sid === 2){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(11, 16)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if(sid === 3){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(16, 20)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if(sid === 4){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(20, 25)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if(sid === 5){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(25, 28)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if(sid === 6){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(28, 29)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if(sid === 7){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(29, 38)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if(sid === 8){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(38, 39)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if(sid === 9){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(39, 46)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if(sid === 10){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(46,55)
					this.faulesItem = faulesItemCurrent
					this.change1()
				} else if( sid === 11){
					faulesItem = this.faulesItemCopy
					let faulesItemCurrent = faulesItem.slice(55)
					this.faulesItem = faulesItemCurrent
					this.change1()
				}
				// this.change1()
            },
            // close uni-pop
			closePopup() {
				this.$refs.popup.close()
				// title存储为新数组
				// this.selectedTitle1.push(this.selectedTitle)
				// this.selectedTitle2 = this.selectedTitle1.flat()
				// let s = [...new Set(this.selectedTitle2)]
				// this.selectedTitle2 = s
				
				// price存储为新数组
				// this.selectedPrice1.push(this.selectedPrice)
				// this.selectedPrice2 = this.selectedPrice1.flat()
				// let t = [...new Set(this.selectedPrice2)]
				// this.selectedPrice2 = t
				
			},
			onChangeValue(){
				// id存储为新数组
				this.selectedId1.push(this.selectedId)
				this.selectedId2 = this.selectedId1.flat()
				let u = [...new Set(this.selectedId2)]
				this.selectedId2 = u
			},
			change1(){
				for (let i = 0; i < this.faulesItem.length; i++) {
					let id = this.faulesItem[i].id
					let u = this.selectedId2.includes(id)
					// console.log(u)
					if (u){
						this.$set(this.faulesItem[i], 'checked', true)
					} else{
						this.$set(this.faulesItem[i], 'checked', false)
					}
				}
			},
			priceChange(){
				let selectedId = this.selectedId2
				for (var i = 0; i < selectedId.length; i++) {
					console.log(selectedId[i])
				}
			}


        },
        components: {
            uniPopup
        }
    }
</script>

<style>
	.disable{
		width: 750upx;
		height: 400upx;
		position: fixed;
		top: 0;
		left: 0;
		background: #09BB07;
	}
	
	.title-quick-button{
		margin-left: 10upx;
		color: #09BA51;
		font-size: 26upx !important;
	}
	
	.title-quick-top {
		font-size: 30upx;
		margin-top: 30upx;
	}
	
	.title-quick{
		display: flex;
		flex-direction: column;
	}
	
    .scroll-view{
        margin-top: 36upx;
        max-height: 540upx;
    }
    
    .popup-content-left{
        margin-left: 92upx;
    }
    
    .popup-content{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 698upx;
        height: 120upx;
        background-color: #F3F3F3;
        margin-bottom: 20upx;
    }
    
    .item-price{
        font-size: 30upx;
        position: absolute;
        right: 20upx;
    }
    
    .item-desc{
        font-size: 22upx;
        color: #888F97;
    }
    
    .item-title{
        font-size: 30upx;
        margin-bottom: 6upx;
    }
    
    /* 默认样式 */
    .checkbox .wx-checkbox-input {
            border-radius: 30upx;
            width: 32upx;
            height: 32upx;
            border: 1px solid #888F97;
            background: #FFFFFF;
            position: absolute !important;
            left: 30upx;
    }
    
        /* 选中图标样式 */
        
    .checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
            width: 38upx;
            height: 38upx;
            border: 2px solid #09BA51;
            color: #09BA51;
            background: #09BA51;
            border-radius: 30upx;
    }
        /* 选中后样式 */
        
    .checkbox .wx-checkbox-input.wx-checkbox-input-checked {
        background: #09BA51;
    }
    .line-thin {
        display: flex;
        position: absolute;
        left: 0upx;
        width: 750upx;
        border-bottom: 1px solid #eee;
    }

    .popup-button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 97upx;
        margin-top: 42upx;
    }

    .popup-button-left {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #eee;
        border-left: 1px solid #fff !important;
        width: 375upx;
    }

    .popup-button-right {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #eee;
        border-right: 1px solid #fff !important;
        width: 375upx;
    }

    .popup-button-text {
        font-size: 24upx;
    }

    .popup-button-left image {
        width: 44upx;
        height: 40upx;
        margin-right: 14upx;
    }

    .popup-button-right image {
        width: 42upx;
        height: 42upx;
        margin-right: 14upx;
    }

    .popup-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30upx;
    }

    .popup-bottom image {
        width: 130upx;
        height: 24upx;
    }

    .total-price-text {
        font-size: 26upx;
        color: #09BA51;
    }

    .total-price {
        font-size: 32upx;
        font-weight: bold;
        font-family: Segoe UI;
        color: #09BA51;
    }

    .popup-title text {
        font-size: 32upx;
        font-weight: bold;
    }

    .popup-title image {
        width: 42upx;
        height: 42upx;
    }

    .popup-title {
        display: flex;
        justify-content: space-between;
    }

    .container-popup {
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 30upx 26upx 0upx 26upx;
    }

    .container {
        display: flex;
        flex-direction: column;
        margin-left: 40upx;
        justify-content: center;
        align-items: flex-start;

    }

    .container-item {
        display: flex;
        align-items: center;
        width: 660upx;
        height: 120upx;
        border-bottom: 1px solid #eee;
    }

    .container-item image {
        width: 40upx;
        height: 40upx;
        margin-right: 26upx;
    }

    .container-item text {
        font-size: 30upx;
    }
</style>
