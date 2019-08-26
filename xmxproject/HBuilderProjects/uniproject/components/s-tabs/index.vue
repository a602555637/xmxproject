<template>
  <div class="s-tabs">
    <scroll-view scroll-with-animation scroll-x :scroll-left="scrollLeft">
      <slot></slot>
    </scroll-view>
    <template v-if="showBar">
      <div class="line-bar" :style="'left:'+barLeft+'px;width:'+barWidth+'px'"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "s-tabs",
  props: {
    current: {
      type: Number,
      default: 0
    },
    showBar: {
      type: Boolean,
      default: true
    },
    itemPerView: {
      type: [Number, String],
      default: "auto"
    },
    scaleBar: {
      type: Number,
      default: 0.6
    }
  },
  data() {
    return {
      scrollLeft: 0,
      barWidth: 0,
      barLeft: 0
    }
  },
  provide() {
    this.tabItemList = [];
    return {
      $rootTabs: this
    }
  },
  watch: {
    current(current) {
      this.refreshBar();
    }
  },
  methods: {
    handleClick(current) {
      if (current !== this.current) {
        this.$emit("change", current);
      }
    },
    refreshBar() {
      let current = this.current;
      uni.createSelectorQuery().in(this).select(".s-tabs").boundingClientRect().exec(([viewElem]) => {
        let viewWidth = viewElem.width;
        let activeItemOffsetLeft = 0;
        let scrollLeft = 0;
        let itemList = [];
        this.tabItemList.forEach((child, childIndex) => {
          uni.createSelectorQuery().in(child).select(".s-tab-item").boundingClientRect().exec(([itemElem]) => {
            itemList.push(itemElem);
            if (childIndex === this.tabItemList.length - 1) {
              let contentWdith = 0;
              let activeItemWidth = 0;
              itemList.forEach((item, index) => {
                if (index <= current) {
                  activeItemWidth = item.width;
                  activeItemOffsetLeft += item.width;
                }
                contentWdith += item.width;
              })
              activeItemOffsetLeft -= activeItemWidth;
              scrollLeft = Math.min(Math.max(contentWdith - viewWidth, 0), Math.max(0, activeItemOffsetLeft - (viewWidth - activeItemWidth) / 2));
              this.scrollLeft = scrollLeft;
              this.barWidth = activeItemWidth * this.scaleBar;
              this.barLeft = activeItemOffsetLeft - scrollLeft + (activeItemWidth - this.barWidth) / 2;
            }
          })
        })
      })
    }
  },
  mounted() {
    this.refreshBar();
  }
}
</script>

<style lang="scss">
.s-tabs {
  height: 100upx;
  width: 100%;
  position: relative;
  &,
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .uni-scroll-view {
    & > div {
      height: 100%;
    }
  }
  scroll-view {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    white-space: nowrap;
  }
  .line-bar {
    position: absolute;
    bottom: 0;
    height: 5upx;
    background-color: black;
    border-radius: 4px;
    transition: all 0.3s;
  }
}
</style>

