<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="不知道是什么写就对了">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!-- <header class="header">
      
      
    </header>-->

    <!-- 中间路由router-view区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <!-- <span class="mui-badge">9</span>显示右上角个数的样式 -->
      <router-link class="mui-tab-item-xc" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-xc" to="/message">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-xc" to="/shopcar">
        <span class="mui-icon mui-icon-chat">
          <span class="mui-badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-xc" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>


<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    if (this.$route.path === "/home") {
      this.flag = false;
    }else{
      this.flag = true;
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>


<style lang="less" scoped>
.app-container {
  padding-top: 0.4rem;
  padding-bottom: 0.5rem;
  overflow-x: hidden;
}
.mint-header {
  height: 0.4rem;
  font-size: 0.16rem;
  .mint-button-icon {
    font-size: 0.16rem;
  }
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
  // position: absolute;
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.mui-bar-tab .mui-tab-item-xc.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-xc {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-xc .mui-icon {
  top: 0.03rem;
  width: 0.24rem;
  height: 0.24rem;
  padding-top: 0;
}
.mui-bar-tab .mui-tab-item-xc .mui-icon ~ .mui-tab-label {
  font-size: 0.12rem;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
