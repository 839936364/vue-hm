//入口文件
import Vue from "vue/dist/vue.js";

//1.导入vue-router包
import VueRouter from "vue-router";
//2.手动安装VueRouter
Vue.use(VueRouter);

//导入格式化时间的插件
import moment from "moment";
//定义全局过滤器
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY-MM-DD HH:MM:SS") {
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

import router from "./router.js";

//导入app跟组件
import app from "./App.vue";

let vm = new Vue({
  el: "#app",
  data: {},
  methods: {},
  render: c => c(app),
  router
});
