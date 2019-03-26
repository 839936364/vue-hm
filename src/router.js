import VueRouter from "vue-router";

import message from "./components/labber/message.vue";
import home from "./components/labber/home.vue";
import shopcar from "./components/labber/shopcar.vue";
import search from "./components/labber/search.vue";
import NewsList from "./components/news/NewsList.vue";
import NewsInfo from "./components/news/NewsInfo.vue";
import PhotoList from "./components/photos/PhotoList.vue";
import PhotoInfo from "./components/photos/PhotoInfo.vue";
import shopList from "./components/shops/shopList.vue";
import shopInfo from "./components/shops/shopInfo.vue";
import shopDesc from "./components/shops/shopDesc.vue";
import shopComment from "./components/shops/shopComment.vue";

//3.创建路由对象
const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/message", component: message },
    { path: "/home", component: home },
    { path: "/shopcar", component: shopcar },
    { path: "/search", component: search },
    { path: "/home/newslist", component: NewsList },
    { path: "/home/newsinfo/:id", component: NewsInfo },
    { path: "/home/photolist", component: PhotoList },
    { path: "/home/photoinfo/:id", component: PhotoInfo },
    { path: "/home/shoplist", component: shopList },
    { path: "/home/shopInfo/:id", component: shopInfo },
    { path: "/home/shopDesc/:id", component: shopDesc },
    { path: "/home/shopComment/:id", component: shopComment ,name:"/home/shopComment"}
  ],
  linkActiveClass: "mui-active"
});

export default router;
