<template>
  <div class="shop-list">
    <router-link :to="'/home/shopInfo/'+item.id" class="shop-item" v-for="(item, index) in shopsList" :key="index" tag="div">
      <img :src="item.img_url" alt>
      <h3 class="title">{{item.title}}</h3>
      <div class="info">
        <p class="price">
          <span class="now">¥&nbsp;{{item.market_price}}</span>
          <span class="old">{{'¥'+item.sell_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>
    <mt-button type="danger" size="large" @click="gerMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yeMa: 1,
      shopsList: []
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    // /api/getgoods?pageindex=number
    getShopList() {
      this.$http
        .get(
          "http://www.liulongbin.top:3005/api/getgoods?pageindex=" + this.yeMa
        )
        .then(res => {
          if (res) {
            this.shopsList = this.shopsList.concat(res.data.message);
          }
        });
    },
    gerMore(){
        this.yeMa++;
        this.getShopList();
    }
  }
};
</script>

<style lang="less" scoped>
.shop-list {
  display: flex;
  flex-wrap: wrap;
//   justify-content: space-around;
  .shop-item {
    width: 48%;
    border: 0.01rem solid #ccc;
    box-shadow: 0 0 0.1rem #ccc;
    margin: 1%;
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
    .title {
      font-size: 0.16rem;
      font-weight: 500;
      padding-left: 0.1rem;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .info {
      background-color: #efefef;
      .price {
        padding-top: 0.1rem;
        .now {
          font-size: 0.2rem;
          color: red;
          padding-left: 0.2rem;
          padding-right: 0.2rem;
        }
        .old {
          text-decoration: line-through;
        }
      }
      .sell {
        display: flex;
        padding-left: 0.05rem;
        padding-right: 0.05rem;
        justify-content: space-between;
      }
    }
  }
}
</style>