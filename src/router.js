import VueRouter from 'vue-router'

import message from './components/labber/message.vue'
import home from './components/labber/home.vue'
import shopcar from './components/labber/shopcar.vue'
import search from './components/labber/search.vue'



//3.创建路由对象
const router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/message',component:message},
        {path:'/home',component:home},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},
    ],
    linkActiveClass:'mui-active'
})

export default router