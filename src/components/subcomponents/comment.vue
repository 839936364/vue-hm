<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要jjww的内容(不超过120个字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list" v-for="(item,i) in commentsList" :key="item.add_time">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormat}}</div>
        <div class="cmt-body">{{item.content==="undefined"?"此用户懒的一比":item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">查看更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      commentsList: [],
      pageIndex: 1,
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get(
          "http://www.liulongbin.top:3005/api/getcomments/" +
            this.id +
            "?pageindex=" +
            this.pageIndex
        )
        .then(res => {
          if (res) {
            // artid
            // 每当获取新的评论数据的时候做一个拼接,不要把老数据清空
            this.commentsList = this.commentsList.concat(res.data.message);
          } else {
            Toast("获取评论失败！");
          }
        });
    },
    getMore() {
      //加载更多
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      if (this.msg === "") return Toast("评论不能为空！");
      this.$http
        .post(
          "http://www.liulongbin.top:3005/api/postcomment/" +
            this.$route.params.id,
          {
            content: this.msg
          }
        )
        .then(res => {
          if (res) {
            var cmt = {
              add_time: Date.now(),
              content: this.msg.trim(),
              user_name: "匿名用户"
            };
            this.commentsList.unshift(cmt);
            this.msg = "";
          }
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="less" scoped>
h3 {
  font-size: 0.18rem;
}
textarea {
  font-size: 0.14rem;
  height: 1rem;
  margin: 0;
}
.cmt-list {
  margin: 0.05rem 0;
  .cmt-item {
    .cmt-title {
      background-color: #ccc;
      font-size: 0.14rem;
    }
    .cmt-body {
      line-height: 0.35rem;
      text-indent: 2em;
    }
  }
}
</style>
