<template>
  <div>
    <!-- 顶部切换 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            v-for="item in categoryList"
            :key="item.id"
            :class="item.id === 0 ? 'mui-active' : ''"
            @click="getPhoto(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表 -->
    <ul class="postlist">
      <router-link v-for="item in photoList" :key="item.id" :to="'/home/PhotoInfo/'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// 导入mui的js
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      categoryList: [],
      photoList: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhoto(0);
  },
  mounted() {
    //当组件中Dom结构被渲染好并放到页面中,会执行这个钩子函数
    // 初始化控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    getAllCategory() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimgcategory")
        .then(res => {
          if (res) {
            res.data.message.unshift({ title: "全部", id: 0 });
            this.categoryList = res.data.message;
          }
        });
    },
    getPhoto(cateid) {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getimages/" + cateid)
        .then(res => {
          if (res) {
            this.photoList = res.data.message;
          }
        });
    }
  }
};
</script>


<style lang="less" scoped>
* {
  touch-action: pan-y;
}
img[lazy="loading"] {
  width: 0.4rem;
  height: 3rem;
  margin: auto;
}
.postlist {
  margin: 0;
  padding: 0.1rem;
  li {
    list-style: none;
    position: relative;
    margin-bottom: 0.1rem;
    img {
      width: 100%;
      height: 100%;
    }
    .info {
      width: 100%;
      max-height: 1rem;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      overflow: hidden;
      .info-title {
        font-size: 0.16rem;
        padding: .03rem;
      }
      .info-body {
        font-size: 0.14rem;
        padding: .03rem;
        text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
