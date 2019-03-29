<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="(item, index) in shopList" :key="index">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path" alt>
            <div class="info">
              <h1>{{item.title}}</h1>
              <p class="infocontent">
                <span class="price">¥{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="del(item.id,index)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <!-- 结算区域 -->
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>
              已勾选商品
              <span class="red">{{$store.getters.getPrice.count}}</span>件,总价
              <span class="red">{{$store.getters.getPrice.amount}}</span>
            </p>
          </div>
          <mt-button type="danger" size="small">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponents/shopcar_numbox";
export default {
  data() {
    return {
      shopList: []
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    getShopList() {
      let idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      if (idArr.length <= 0) {
        return;
      }
      this.$http
        .get(
          "http://www.liulongbin.top:3005/api/goods/getshopcarlist/" +
            idArr.join(",")
        )
        .then(res => {
          this.shopList = res.data.message;
        });
    },
    del(id, index) {
      this.shopList.splice(index, 1);
      this.$store.commit("delCar", id);
    },
    selectedChanged(id, val) {
      this.$store.commit("updateGoodsSelected", { id, selected: val });
    }
  },
  components: {
    numbox
  }
};
</script>

<style lang="less" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 0.6rem;
      height: 0.6rem;
    }
    h1 {
      font-size: 0.14rem;
    }
    .info {
      display: flex;
      flex-direction: column;
      .price {
        color: red;
      }
      .infocontent {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
    }
  }
}
</style>