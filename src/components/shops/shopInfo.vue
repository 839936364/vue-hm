<template>
  <div class="shopsinfo">
    <!-- 球 -->
    <!-- <transition 
    @befotr-enter="beforeEnter" 
    @enter="enter" 
    @after-enter="afterEnter">
      <div class="ball" v-show="flag"></div>
    </transition>-->
    <!-- 商品轮播区 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">
        <h3 class="title">{{getinfoList.title}}</h3>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>¥{{getinfoList.market_price}}</del>&nbsp;&nbsp;&nbsp;&nbsp;销售价：
            <span class="newprice">¥{{getinfoList.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <numBox 
            @getcount="getSelectedCount"
            :max="getinfoList.stock_quantity"></numBox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品详情页 -->
    <div class="mui-card">
      <div class="mui-card-header">
        <h3>商品参数</h3>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{getinfoList.goods_no}}</p>
          <p>库存情况：{{getinfoList.stock_quantity}}</p>
          <p>上架时间：{{getinfoList.add_time|dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goShopDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goShopComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import numBox from "../subcomponents/numBox";
import swiper from "../subcomponents/swiper";
export default {
  data() {
    return {
      lunbotuList: [],
      id: this.$route.params.id,
      getinfoList: {},
      flag: false,
      selectedCount: 1//保存用户选中的数量,默认买一个
    };
  },
  created() {
    this.getLunbotu();
    this.getinfo();
  },
  methods: {
    // 轮播图数据
    getLunbotu() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(res => {
          res.data.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotuList = res.data.message;
        });
    },
    // 商品参数那一块的数据
    getinfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/goods/getinfo/" + this.id)
        .then(res => {
          this.getinfoList = res.data.message[0];
        });
    },
    goShopDesc(id) {
      this.$router.push("/home/shopDesc/" + id);
    },
    goShopComment(id) {
      this.$router.push({ name: "/home/shopComment", params: { id } });
    },
    // addShopCar() {
    //   this.flag = !this.flag;
    // },
    // beforeEnter(el) {
    //   el.style.transform = "translate(0,0)";
    // },
    // enter(el, done) {
    //   el.offsetWidth;
    //   el.style.transform = "translate(2.37rem,5.81rem)";
    //   el.style.transition = "all 1s cubic-bezier(.17,.67,.83,.67)";
    //   done();
    // },
    // afterEnter(el) {
    //   this.flag = !this.flag;
    // }
    getSelectedCount(count) {
      this.selectedCount = count;
      console.log(this.selectedCount);
      
    }
  },
  components: {
    swiper,
    numBox
  }
};

// 1.用this.$router.push("/home/shopDesc/"+id)   这样也可以进行跳转
// 传递对象
// 2.用this.$router.push({path:"地址"+id})
// 传递命名的路由
// 3.用this.$router.push({name:"/home/shopComment",params:{id:id}})
</script>

<style lang="less" scoped>
.shopsinfo {
  background-color: #eee;
  overflow: hidden;
  .title {
    font-weight: 500;
  }
  .newprice {
    color: red;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin-top: 0.1rem;
    }
  }
  // .ball {
  //   width: 0.15rem;
  //   height: 0.15rem;
  //   background-color: red;
  //   border-radius: 50%;
  //   position: absolute;
  //   top: 390px;
  //   left: 146px;
  //   z-index: 99;
  //   // transform: translate(2.38rem, 5.8rem);
  // }
}
</style>

