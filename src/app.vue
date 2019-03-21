<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="黑马前端29期"></mt-header>
    <!-- 中间路由router-view区域 -->

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <!-- <span class="mui-badge">9</span>显示右上角个数的样式 -->
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
  </div>
</template>


<script>
</script>


<style lang="less" scoped>
.app-container {
  padding-top: 40px;
}
</style>
