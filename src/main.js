//入口文件
import Vue from "vue/dist/vue.js";

import router from "./router.js";

import Vuex from "vuex";
Vue.use(Vuex);
let car;
if (localStorage.getItem('car')) {
  car = JSON.parse((localStorage.getItem('car')))
} else {
  car = []
}

const store = new Vuex.Store({
  state: {
    //this.$store.state.***
    car: car //商品购物车中的商品的数据,用数组存起来
    // 商品的id.商品的价格,商品的数量,商品是否是选中状态
  },
  mutations: {
    addToCar(state, goodsinfo) {
      //this.$store.commit("方法的名称",'按需传递的唯一参数')
      // state.value = goodsinfo;
      let flag = false;
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      });
      // 循环得到的flag还是false.就把商品数据直接push到购物车
      if (!flag) {
        this.state.car.push(goodsinfo);
      }

      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    delCar(state, id) {
      state.car.some((item, index) => {
        if (item.id == id) {
          state.car.splice(index, 1);
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      // 所有购物车的状态保存进去
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state) {
      let c = 0;
      state.car.forEach(item => {
        c += item.count;
      });
      return c;
    },
    getGoodsCount(state) {
      let o = {};
      state.car.forEach(item => {
        o[item.id] = item.count;
      });
      return o;
    },
    getGoodsSelected(state) {
      let o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected;
      });
      return o;
    },
    getPrice(state) {
      let o = {
        count: 0, //选中的数量
        amount: 0 //选中的总价
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      });
      return o
    }
  }
});

//导入格式化时间的插件
import moment from "moment";
//定义全局过滤器
Vue.filter("dateFormat", function (dataStr, pattern = "YYYY-MM-DD HH:MM:SS") {
  return moment(dataStr).format(pattern);
});

//导入mui的css样式
import "./lib/mui/css/mui.min.css";

//按需导入mint-ui组件
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(Mint);

//安装图片预览插件
import VuePreview from "vue-preview";
// defalut install
Vue.use(VuePreview);

import axios from "axios";
Vue.prototype.$http = axios;

//导入app跟组件
import app from "./App.vue";

let vm = new Vue({
  el: "#app",
  data: {},
  methods: {},
  render: c => c(app),
  router,
  store //挂载store状态管理对象
});