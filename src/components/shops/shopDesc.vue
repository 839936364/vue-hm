<template>
  <div class="shopD">
    <div class="title">
      <h3>{{shopDescList.title}}</h3>
    </div>
    <hr>
    <div class="content" v-html="shopDescList.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopDescList: [],
      id: this.$route.params.id
    };
  },
  created() {
    this.getShopDesc();
  },
  methods: {
    getShopDesc() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/goods/getdesc/" + this.id)
        .then(res => {
          this.shopDescList = res.data.message[0];
        });
    }
  }
};
</script>

<style lang="less">
.shopD {
    padding:.04rem;
  .title {
    h3 {
      font-size: 0.16rem;
      line-height: 0.4rem;
      font-weight: 500;
      text-align: center;
    }
  }
  .content{
      img{
          width: 100%;
      }
  }
}
</style>

