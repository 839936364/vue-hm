<template>
  <div class="numBox-content">
    <div class="mui-numbox" data-numbox-min="1" style="height:25px">
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input class="mui-numbox-input" type="number" :value="initcount" @change="countChanged" ref="numbox" readonly>
      <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(function() {
      mui(".mui-numbox").numbox();
    });
  },
  methods: {
    countChanged(){
       this.$store.commit("updateGoodsInfo",{id:this.goodsid,count:this.$refs.numbox.value})
      
    }
  },
  props: ["initcount","goodsid"]
};
</script>

<style lang="less" scoped>
</style>

