<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h3>{{item.title}}</h3>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.add_time|dateFormat}}</span>
              <span>点击{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return { newslist: [] };
  },
  created() {
    this.getNewList();
  },
  methods: {
    getNewList() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(res => {
          if (res) {
            this.newslist = res.data.message;
          } else {
            Toast("获取新闻列表失败！");
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.mui-table-view {
  li {
    h3 {
      font-size: 0.14rem;
    }
    .mui-ellipsis {
      font-size: 0.12rem;
      color: blue;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>