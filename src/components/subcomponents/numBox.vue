<template>
  <div class="numBox-content">
    <div class="mui-numbox" data-numbox-min="1">
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input class="mui-numbox-input" type="number" value="1" @change="countChanged" ref="numbox">
      <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      //当数据被修改的时候,立即把最新的数据通过事件调动传递给父组件
      this.$emit("getcount", parseInt(this.$refs.numbox.value));
    }
  },
  props: ["max"],
  watch: {
    max: function(newVal, oldVal) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>

<style lang="less" scoped>
</style>

