<template>
<!--components/zhuanpan/zhuanpan.wxml-->
<view class="canvas-container">
   <!-- 外围边框 -->
   <!-- <view class='gb-wheel-run' style=''></view> -->

   <view :animation="animationData" class="gb-wheel-content" :style="'width:' + size.w + 'rpx;height:' + size.h + 'rpx;'">
      <!-- 扇形颜色背景 当选项长度等于2或者3时做了特殊处理 -->
      <view class="canvas-list">
         <view class="canvas-item2" v-for="(item, key) in awardsConfig.awards" :key="key" :style="'transform: rotate(' + item.item2Deg + ');background-color:' + (awardsConfig.awards.length==2?item.color:'') + ';opacity:' + (awardsConfig.awards.length==2?item.opacity:awardsConfig.awards.length==3?item.opacity:'') + ';width:' + size.h + 'rpx;height:' + size.h/2-2 + 'rpx;transform-origin:' + size.h/2 + 'rpx ' + size.h/2 + 'rpx'">
            <view class="canvas-item2-after" :style="'transform: rotate(' + item.afterDeg + ');background-color:' + item.color + ';opacity:' + (awardsConfig.awards.length==3?'':item.opacity) + ';width:' + size.h/2 + 'rpx;height:' + size.h/2 + 'rpx;transform-origin: ' + size.h/2 + 'rpx ' + size.h/2 + 'rpx'"></view>
            <view v-if="awardsConfig.awards.length==3" class="canvas-item2-after" :style="'background-color:' + item.color + ';width:' + size.h/2 + 'rpx;height:' + size.h/2 + 'rpx;transform-origin: ' + size.h/2 + 'rpx ' + size.h/2 + 'rpx'"></view>
         </view>
      </view>

      <!-- 分割线 -->
      <!-- <view class="gb-wheel-line">
               <view class="gb-wheel-litem" wx:for="{{awardsConfig.awards}}" wx:key='key' data-index="{{index}}" style="transform: rotate({{index*turnNum+turnNum/2}}turn);"></view>
      </view> -->

      <!-- 选项内容 -->
      <view class="gb-wheel-list">
         <view class="gb-wheel-item" :data-index="index" v-for="(item, key) in awardsConfig.awards" :key="key">
            <view class="gb-wheel-icontent" :style="'height:262rpx;overflow:hidden;font-size:' + (item.name.length>9?'20':'26') + 'rpx;line-height:' + (item.name.length>9?'20':'26') + 'rpx;width:26rpx;padding-top:5rpx;transform: rotate(' + index*turnNum + 'turn);transform-origin: 50% ' + size.h/2-2 + 'rpx'">
               <text style="word-break:break-all;">{{item.name}}</text>
            </view>
         </view>
      </view>
   </view>

   <!-- 转盘中间的按钮 -->
     <!-- <image @tap="_zhuan" src="https://gamesdata.oss-cn-hangzhou.aliyuncs.com/xiaojueding/canvas_button_go_unclick.png" :style="'width:' + size.h/4.4 + 'rpx;position:absolute;left:41%;top:38%;margin-top:-11rpx;z-index:9999;display:' + block1" mode="widthFix"></image>
   <image src="https://gamesdata.oss-cn-hangzhou.aliyuncs.com/xiaojueding/canvas_button_go_click.png" :style="'width:' + size.h/4.4 + 'rpx;position:absolute;left:41%;top:38%;margin-top:-11rpx;z-index:9999;display:' + block2" mode="widthFix"></image>
   <image @tap="reset" src="https://gamesdata.oss-cn-hangzhou.aliyuncs.com/xiaojueding/canvas_button_reset_unclick.png" :style="'width:' + size.h/4.4 + 'rpx;left:41%;top:38%;position: absolute;margin-top:-11rpx;z-index:9999;display:' + block3" mode="widthFix"></image>
   <image src="https://gamesdata.oss-cn-hangzhou.aliyuncs.com/xiaojueding/canvas_button_reset_click.png" :style="'width:' + size.h/4.4 + 'rpx;position:absolute;left:41%;top:38%;margin-top:-11rpx;z-index:9999;display:' + block4" mode="widthFix"></image> -->


</view>
</template>

<script>
// components/zhuanpan/zhuanpan.js
//创建并返回内部 audio 上下文 innerAudioContext 对象
// const start = wx.createInnerAudioContext();
// const mid = wx.createInnerAudioContext();
// const stop = wx.createInnerAudioContext();
var app = getApp(),
    timer = null;

export default {
  data() {
    return {
      animationData: {},
      // 转盘动画
      zhuanflg: false,
      // 转盘是否可以点击切换的标志位
      fastTime: 7600,
      // 转盘快速转动的时间
      slowTime: 3900,
      // 转盘慢速转动的时间
      block1: 'block',
      // 转盘中心的图片标志位，用来显示隐藏
      block2: 'none',
      block3: 'none',
      block4: 'none'
    };
  },

  // 组件生命周期函数，在组件实例进入页面节点树时执行
  beforeMount: function () {
    console.log('==========attached==========');
//     start.src = 'https://gamesdata.oss-cn-hangzhou.aliyuncs.com/xiaojueding/start.mp3'; // 转盘开始转动的音乐
// 
//     mid.src = 'https://gamesdata.oss-cn-hangzhou.aliyuncs.com/xiaojueding/mid.mp3'; // 快速决定时，转盘开始转动的音乐
// 
//     stop.src = 'https://gamesdata.oss-cn-hangzhou.aliyuncs.com/xiaojueding/stop.mp3'; // 转盘停止转动的音乐

    this.awardsConfig = this.zhuanpanArr[0]
    this.initAdards();
  },
  props: {
    myProperty: {
      // 属性名        myProperty2: String, 简化的定义方式
      type: String,
      // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '',
      // 属性默认 初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {// 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    probability: {
      type: Boolean,
      // 概率开关，默认随机 false
      value: false
    },
    musicflg: {
      type: Boolean,
      // 转盘声音开关，默认true
      value: true
    },
    fastJuedin: {
      type: Boolean,
      // 快速转动转盘的开关，默认false
      value: false
    },
    repeat: {
      type: Boolean,
      // 重复抽取开关，默认false
      value: false
    },
    size: {
      type: Object,
      // 转盘大小，宽高单位rpx
      value: {
        w: 659,
        // 注意宽要比高小1rpx
        h: 660
      }
    },
    zhuanpanArr: {
      // 可以切换的转盘选项, 支持多个
      type: Array,
      value: [{
        id: 0,
        option: '转盘的标题名称',
        awards: [{
          id: 0,
          name: "最多17个选项",
          // 选项名
          color: 'red',
          // 选项的背景颜色
          probability: 0 // 概率

        }, {
          id: 1,
          name: "选项最多填13字",
          // 超过9个字时字体会变小点
          color: 'green',
          probability: 0
        }]
      }]
    },
    // 限制：最多17个选项， 单个选项最多填10-13个字, 选项名称最多21个字
    awardsConfig: {
      // 默认的当前转盘选项 
      type: Object,
      value: {
        option: '我的小决定？',
        awards: [{
          id: 0,
          name: "最多17个选项",
          color: 'red',
          probability: 0
        }, {
          id: 1,
          name: "选项最多填13字",
          color: 'green',
          probability: 0
        }]
      }
    }
  },
  methods: {
    options: {
      multipleSlots: true // 在组件定义时的选项中启用多slot支持

    },
    //组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
    created: function () {
      console.log('==========created==========');
    },

    /*
     * 公有方法
     */
    //判断值是否为空
    isNull(str) {
      if (str == null || str == undefined || str == '') {
        return true;
      } else {
        return false;
      }
    },

    //初始化数据
    initAdards() {
      var that = this
          awardsConfig = that.awardsConfig;
      var t = awardsConfig.awards.length; // 选项长度

      var e = 1 / t,
          i = 360 / t,
          r = i - 90;

      for (var g = 0; g < t; g++) {
        awardsConfig.awards[g].item2Deg = g * i + 90 - i / 2 + "deg"; //当前下标 * 360/长度 + 90 - 360/长度/2

        awardsConfig.awards[g].afterDeg = r + "deg";
      }

	  that.turnNum = e
	  that.awardsConfig = awardsConfig

      that._change(); //向父组件传出当前转盘的初始数据

    },

    //重置转盘
    reset() {
      var that = this,
          awardsConfig = that.awardsConfig;
      console.log(awardsConfig);
      var animation = wx.createAnimation({
        duration: 1,
        timingFunction: "linear"
      });
      that.animation = animation;
      animation.rotate(0).step(), app.runDegs = 0;

      that.animationData = animation.export()
      that.block4 = 'block'


      for (let x in awardsConfig.awards) {
        awardsConfig.awards[x].opacity = '1';
      }

      setTimeout(function () {
		that.block1 = 'block'
        that.block2 = 'none'
        that.block3 = 'none'
        that.block4 = 'none'
        that.awardsConfig = awardsConfig

        that._myAwards(true);
      }, 300);
    },

    //父组件需要切换当前转盘的选项
    //如果有需要切换不同转盘的选项时，可以调用这方法
    //obj: 转盘的数据
    //flag: 当转盘在转动过程中的标志位，默认可不传
    switchZhuanpan(data, flag) {
		this.awardsConfig = data,
        this.block1 = 'block',
        this.block3 = 'none',
        this.zhuanflg = false

      this.initAdards();

      if (flag) {
        this.reset();
        clearTimeout(timer);
        start.stop();
        mid.stop();
        stop.stop();
        wx.removeStorageSync('repeatArr');
      }
    },

    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件,过triggerEvent来给父组件传递信息的
    * 写法： this.triggerEvent('cancelEvent', { num: 1 })  // 可以将num通过参数的形式传递给父组件
    */
    // GO转盘开始转动
    _zhuan() {
      var that = this;
      var awardsConfig = that.awardsConfig; //>>> 是无符号移位运算符

      var r = Math.random() * awardsConfig.awards.length >>> 0,
          runNum = 8;
      /*=============不重复抽取=============*/

      if (that.repeat) {
        r = that._queryRepeat(r);
      } else {
        wx.removeStorageSync('repeatArr');
        console.log('是否开启了概率？？？', that.probability); //开启概率 probability这属性必须要传个ture

        if (that.probability) {
          r = that._openProbability();
        }
      }
      /*=============不重复抽取=============*/


      console.log('当前答案选项的下标==', r);
      setTimeout(function () {
        //转盘开始转动音乐
        that.musicflg ? that.fastJuedin ? mid.play() : start.play() : ''; //要转多少度deg

        app.runDegs = app.runDegs || 0, app.runDegs = app.runDegs + (360 - app.runDegs % 360) + (2160 - r * (360 / awardsConfig.awards.length));
        var animation = wx.createAnimation({
          duration: that.fastJuedin ? that.slowTime : that.fastTime,
          timingFunction: "ease"
        });
        that.animation = animation; //这动画执行的是差值 
        //如果第一次写rotate（360） 那么第二次再写rotate（360）将不起效果

        animation.rotate(app.runDegs).step(), 0 == r && (app.runDegs = 0);
         
		  that.animationData = animation.export()
          that.block1 = 'none'
          that.block2 = 'block'
          that.block3 = 'none'
          that.zhuanflg = true

        that._setatZhuan(true);
      }, 100);
      timer = setTimeout(function () {
        for (let x in awardsConfig.awards) {
          if (x != r) {
            awardsConfig.awards[x].opacity = '0.3';
          } else {
            awardsConfig.awards[x].opacity = '1';
          }
        } //转盘停止后的音乐


        !that.musicflg ? '' : stop.play();
		
          that.animationData = {}
          that.s_awards = awardsConfig.awards[r].name
          //最终选中的结果
          that.awardsConfig: awardsConfig
          that.block1 = 'none'
          that.block2 = 'none'
          that.block3 = 'block'
          that.zhuanflg = false

        that._myAwards(false);

        that._setatZhuan(false);
      }, that.fastJuedin ? that.slowTime : that.fastTime);
    },

    // 开启概率 
    // 传 1-100 的数 来设置选项的权重  
    // 传入0的话就永远摇不到这个选项
    _openProbability() {
      var that = this,
          awards = that.awardsConfig.awards,
          arr = []; //5, 5, 20, 10 ,30 ,30, 0

      for (let i in awards) {
        if (awards[i].probability != 0) {
          for (var x = 0; x < awards[i].probability; x++) {
            //把当前的概率数字 以当前选项下标的形式 都添加都空数组中，然后随机这个数组
            arr.push(i);
          }
        }
      }

      var s = Math.floor(Math.random() * arr.length);
      return arr[s];
    },

    //不重复抽取
    //r:随机数 当前选项进行随机
    _queryRepeat(r) {
      var that = this,
          flag = true,
          repeatArr = wx.getStorageSync('repeatArr'),
          repeatArr2 = [],
          awardsConfig = that.awardsConfig;

      if (that.isNull(repeatArr)) {
        repeatArr2.push(r), wx.setStorageSync('repeatArr', repeatArr2);
        return r;
      } else {
        var len = awardsConfig.awards.length,
            r = Math.random() * len >>> 0;

        for (let i in repeatArr) {
          if (r == repeatArr[i]) {
            flag = false;

            if (repeatArr.length == len) {
              wx.removeStorageSync('repeatArr');
              repeatArr2.push(r), wx.setStorageSync('repeatArr', repeatArr2);
              return r;
            } else {
              return that._queryRepeat(); //递归调用
            }
          }
        }

        if (flag) {
          repeatArr.push(r), wx.setStorageSync('repeatArr', repeatArr);
          return r;
        }
      }
    },

    //初始化数据时向外传的参
    _change() {
      this.$emit('myData', this.awardsConfig); // 向父组件传出当前决定的数组数据
    },

    //当前转盘的结果   e:转盘什么时候能点击的标志位
    _myAwards(e) {
      this.$emit('myAwards', {
        s_awards: this.s_awards,
        end: e
      });
    },

    //转盘开始转动或者结速转动后的要传的值
    _setatZhuan(e) {
      this.$emit('startZhuan', e); // 向父组件传出当前决定的数组数据
    },

    setData: function (obj) {
      let that = this;
      let keys = [];
      let val, data;
      Object.keys(obj).forEach(function (key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        keys.forEach(function (key2, index) {
          if (index + 1 == keys.length) {
            that.$set(data, key2, val);
          } else {
            if (!data[key2]) {
              that.$set(data, key2, {});
            }
          }

          data = data[key2];
        });
      });
    }
  }
};
</script>
<style>
/* components/zhuanpan/zhuanpan.wxss */

.canvas-container {
   margin: 0 auto;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
}

.gb-wheel-run {
   box-shadow: 0 0 5rpx 0rpx rgba(0, 0, 0, 0.98);
   width: 700rpx;
   height: 700rpx;
   border-radius: 50%;
   border: 30rpx solid #f1ecec;
   box-sizing: border-box;
   position: absolute;
   left: 27rpx;
   top: -19rpx;
   opacity: 0.7;
}

.gb-wheel-content {
   position: relative;
   margin: 0 auto;
   z-index: 2;
   width: 659rpx;
   height: 660rpx;
   border-radius: 50%;
   border: 20rpx solid #f1ecec;
   box-shadow: 0 0 5rpx 0rpx rgba(0, 0, 0, 0.98);
   opacity: 0.7;
   overflow: hidden;
}

.canvas-list {
   position: absolute;
   left: 0;
   top: 0;
   width: inherit;
   height: inherit;
   z-index: 8;
}

.canvas-item2 {
   position: absolute;
   left: 0px;
   top: 0;
   width: 660rpx;
   height: 328rpx;
   color: #e4370e;
   font-weight: bold;
   transform-origin: 330rpx 330rpx;
   overflow: hidden;
}

.canvas-item2-after {
   position: absolute;
   top: 0;
   left: 0;
   width: 330rpx;
   height: 330rpx;
   transform-origin: 330rpx 330rpx;
   opacity: 1;
}

.gb-wheel-list {
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   z-index: 9;
}

.gb-wheel-item {
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   color: #fff;
   text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);
}

.gb-wheel-icontent {
   position: relative;
   display: block;
   padding-top: 50rpx;
   margin: 0 auto;
   text-align: center;
   transform-origin: 50% 328rpx;
}

</style>