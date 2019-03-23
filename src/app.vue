<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="不知道是什么写就对了"></mt-header>

    <!-- 中间路由router-view区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <!-- <span class="mui-badge">9</span>显示右上角个数的样式 -->
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/message">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-chat"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>


<script>
</script>


<style lang="less" scoped>
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
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
</style>
