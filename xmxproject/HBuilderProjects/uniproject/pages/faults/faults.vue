<template>
    <view class="container">
        <view @click="openPopup(index)" class="container-item" v-for="(item,index) in faulesList" :key="index">
            <image :src="item.imgSrc"></image>
            <text>{{item.text}}</text>
        </view>
        
        <uniPopup custom="true" ref="popup" type="bottom">
            <view class="container-popup">
                <view class="popup-title">
                    <text>故障选择</text>
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
        onLoad(e) {
            //判断是否快捷维修入口
            let sid = e.id
            console.log(e)
            console.log(e.id)
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
                        console.log(res.data.data)
                        this.faulesItem = res.data.data
                    }
                })
            }
        },
        data() {
            return {
				faulesId:[],
                ftype:'',
                faulesItemPrice:[],
                currentPrice:0,
                totalPrice: 0,
                isSelectedId: '',
                isSelected: false,
                unSelectedImg: '../../static/faults/wxz@2x.png',
                selectedImg: '../../static/faults/wxz@2x.png',
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
                }]
            }
        },
        methods: {
            onSelected(e) {
                this.isSelectedId = e.currentTarget.id
            },
            openPopup(sid) {
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
            },
            closePopup() {
                this.$refs.popup.close()
            },
            onsiteRepair(e) {
                console.log(e)
                uni.navigateTo({
                    url: '../onsiterepair/onsiterepair'
                })
            },
            onsiteArrival(){
                uni.navigateTo({
                    url:'../arrival-repair/arrival-repair'
                })
            },
            onEventChange(e){
				console.log(e.detail.value)
				this.faulesId = e.detail.value
				let s = 0
				let t = []
				let u = []
				for (let i = 0; i < this.faulesId.length; i++) {
					let price = this.faulesItem[this.faulesId[i]].price
					let title = this.faulesItem[this.faulesId[i]].title
					s = s + price
					t.push(title)
					u.push(price)
					uni.setStorage({
						key: 'totalPrice',
						data: s,
						success:res=>{
							this.totalPrice = s
						}
					})
					uni.setStorage({
						key:'faulesTitle',
						data:t
					})
					uni.setStorage({
						key:'sprice',
						data:u
					})
				}
			}
        },
        components: {
            uniPopup
        }
    }
</script>

<style>
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
