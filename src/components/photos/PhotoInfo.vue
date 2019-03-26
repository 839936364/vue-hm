<template>
  <div class="newsinfo-container">
    <!-- 头部 -->
    <h3 class="title">{{photoList.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{photoList.add_time|dateFormat}}</span>
      <span>点击{{photoList.click}}次</span>
    </p>
    <hr>

    <!-- 缩略图 -->
    <!-- <div class="thumbs"> -->
      <vue-preview :slides="list" @close="handleClose"></vue-preview>
      <!-- <vue-preview :slides="list" @close="handleClose"><img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="index"></vue-preview>  -->
    <!-- </div> -->

    <!-- 评论 -->
    <div class="content" v-html="photoList.content"></div>
    <comment-box :id="id"></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoList: {},
      list: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getImageInfo();
  },
  methods: {
    getPhotoInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimageInfo/" + this.id)
        .then(res => {
          if (res) {
            this.photoList = res.data.message[0];
          }
        });
    },
    getImageInfo() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getthumimages/" + this.id)
        .then(res => {
          if (res) {
            console.log(res);

            res.data.message.forEach(item => {
              var imgObj = {
                src: item.src,
                msrc: item.src,
                alt: "picture1",
                title: "Image Caption 1",
                w: 300,
                h: 200
              };
              this.list.push(imgObj);
            });
            // res.data.message.forEach(item => {
            //   item.w = 600;
            //   item.h = 400;
            // });
            // this.list = res.data.message;
          }
        });
    },
    handleClose() {
      console.log("close event");
    }
  },
  components: {
    "comment-box": comment
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