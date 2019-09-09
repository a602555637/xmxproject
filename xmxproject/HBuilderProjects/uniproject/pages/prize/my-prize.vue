<template>
	<view>
		<modal 
		 title="恭喜您"
		  :hidden="hiddenModal"
		  confirm-text="确定"
		  no-cancel="true"
		  bindconfirm="listenerConfirm" > {{detail}} </modal>
		<view style="width:100%;height：100%;display:flex;flex-direction:column;align-items: center;justify-content: center;">
			
		<!-- <image :animation="animationData" style="width:600rpx;height:600rpx;margin-top:20rpx" src="../../static/banner/banner3@2x.png"></image> -->
		<view :animation="animationData" class="content1"></view>
		
		
		<image v-if="isclick == 'start'" style="width:130rpx;height:160rpx;position:absolute;" :src="image" @tap="start" :disabled="disabled"></image>
		<image v-else style="width:130rpx;height:160rpx;position:absolute;" :src="image" @tap="stop" :disabled="disabled"></image>
		</view>
	</view>
</template>
<script>
	export default {
		onLoad: function () {
		    console.log('onLoad')
		    var that = this
		  },
		data() {
			var cxt_arc
			var timer
			var n=1
			var which = 1 //中奖项
			var luck = ["5积分", "5金币", "10积分", "10金币", "谢谢参与", "20金币"] //定义奖项
			return {
				animationData:{},//动画
				isclick: "start",//按钮事件
				image:"../../static/banner/banner3@2x.png",//转盘图片
				hiddenModal:true,//弹框是否隐藏
				detail: "恭喜您获得"+luck[this.which-1]//弹框内容
			}
		},
		methods:{
			start(e) {
			    var _this = this;
			    let n=1;
			    
			    this.isclick = "stop"
			  
			    reset.call(_this);
			    var timer = setInterval(function () {
			      //开始旋转
			      star.call(_this);
			      //
			      n++;
			    }
			      , 300);
			     //启动动画
			    function star() {
			      console.log("开始动画.....")
			      var animation = wx.createAnimation({
			        transformOrigin: "50% 50%",
			        duration: 300,
			        timingFunction: "linear"
			      });
			      animation.rotate(360*n).step();
			      this.animationData = animation.export()
			    }
			    //重置动画
			    function reset() {
			      console.log("重置动画.....")
			      var animation = wx.createAnimation({
			        transformOrigin: "50% 50%",
			        duration: 0,
			        timingFunction: "linear"
			      });
			      animation.rotate(0).step();
			      this.animationData = animation.export()
			    }
			},
			stop: function (e) {
			    var _this = this;
			    this.isclick = ""
			    clearInterval(timer);
			    timer = null;
			    console.log("结束动画.....");
			    sto.call(_this);
			    function sto() {
			      console.log("重置动画.....")
			      var animation = wx.createAnimation({
			        transformOrigin: "50% 50%",
			        duration: 1.4 * (2160 - (this.which - 1) * 60),
			        timingFunction: "ease-out"
			      });
			      console.log(Math.random()*60); 
			      animation.rotate(360 * n + (2160 - ((this.which-2) * 60) - 35 - (Math.random() * 50))).step();
			      this.animationData = animation.export(),
			      this.image = "/images/dianji_choujiang.png"
			    }
			 
			    let timer = setTimeout(function () {
			      _this.hiddenModal = false
			    }, 1.4 * (2160 - (this.which - 1) * 60+300))
			},
			listenerConfirm: function (e) {
			      var _this = this;
			      this.hiddenModal = true,
			      this.isclick = "start"

			      reset.call(_this);
			      function reset() {
			        console.log("重置动画.....")
			        var animation = wx.createAnimation({
			          transformOrigin: "50% 50%",
			          duration: 0,
			          timingFunction: "linear"
			        });
			        animation.rotate(0).step();
			        this.animationData = animation.export()
			      }
			}
		}
	}
</script>
<style>
	.content1{
		width:600rpx;
		height:600rpx;
		margin-top:20rpx;
		border-radius: 300upx;
		background: linear-gradient(green,lightblue);
	}
	
	page {  
	  height: 100%;
	  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494584697981&di=c7ad570951648abb02276d3e09ec5894&imgtype=0&src=http%3A%2F%2Fwww.appjzy.com%2FUploadFiles%2FImages%2FWallpaper%2F2016%2F01%2F1380bz201601221008076134.jpg");
	  display: flex;
	  background-repeat:no-repeat;
	  background-size: 100% 100%;
	}  
	 
	.userinfo {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
	 
	.userinfo-avatar {
	  width: 128rpx;
	  height: 128rpx;
	  margin: 20rpx;
	  border-radius: 50%;
	}
	 
	.userinfo-nickname {
	  color: #aaa;
	}
	 
	.usermotto {
	  margin-top: 200px;
	}
</style>
