<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{newsinfo.add_time|dateFormat}}</span>
      <span>点击{{newsinfo.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>

    <!-- comment子组件 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from '../subcomponents/comment';
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getnew/" + this.id)
        .then(res => {
          if (res) {
            this.newsinfo = res.data.message[0];
          } else {
            Toast("获取新闻列表失败！");
          }
        });
    }
  },
  components:{
      'comment-box':comment
  }
};
</script>

<style lang="less" scoped>
.newsinfo-container {
  padding: 0 0.04rem;
  .title {
    font-size: 0.16rem;
    text-align: center;
    margin: 0.15rem 0;
    color: red;
  }
  .subtitle {
    font-size: 0.14rem;
    color: blue;
    display: flex;
    justify-content: space-between;
  }
}
</style>