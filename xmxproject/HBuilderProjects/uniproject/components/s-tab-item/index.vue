<template>
  <div :class="['s-tab-item',{'is-active':isActive}]" @click="handleClick" :style="styleWidth">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "s-tab-item",
  computed: {
    styleWidth() {
      let perView = parseInt(this.$rootTabs.itemPerView);
      return isNaN(perView) ? "" : `width:${100 / perView}%;`;
    },
    isActive() {
      return this.$rootTabs.tabItemList.indexOf(this) === this.$rootTabs.current;
    }
  },
  inject: ["$rootTabs"],
  methods: {
    handleClick() {
      this.$rootTabs.handleClick(this.$rootTabs.tabItemList.indexOf(this));
    }
  },
  created() {
    this.$rootTabs.tabItemList.push(this);
  },
  destroyed() {
    this.$rootTabs.tabItemList.splice(this.$rootTabs.tabItemList.indexOf(this), 1);
  }
}
</script>

<style lang="scss">
.s-tab-item {
  display: inline-flex;
  height: 100%;
  padding: 0 30upx;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

