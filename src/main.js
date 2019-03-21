//入口文件
import Vue from 'vue'

//导入mui的css样式
import './lib/mui/css/mui.min.css'

//按需导入mint-ui组件
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//导入app跟组件
import app from './app.vue'



let vm = new Vue({
    el:'#app',
    data:{},
    methods: {
        
    },
    render:c=>c(app)
})
