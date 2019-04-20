<template>
  <div id="index" class="container">
    <!-- 侧滑导航根容器 -->
    <div class="mui-off-canvas-wrap mui-draggable">
      <!-- 主页面容器 -->
      <div class="mui-inner-wrap">
        <!-- 菜单容器 -->
        <aside class="mui-off-canvas-left">
          <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <!-- 菜单具体展示内容 -->
              ...
            </div>
          </div>
        </aside>

        <!-- 主页面标题 -->
        <header class="mui-bar mui-bar-nav">
          <a class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
          <div class="nav">
            <a href="#my" class="mui-active mui-control-item">我的</a>
            <a href="#discovery" class="mui-control-item">发现</a>
            <a href="#friends" class="mui-control-item">朋友</a>
            <a href="#videos" class="mui-control-item">视频</a>
          </div>
          <a class="mui-icon mui-icon-search mui-pull-right mui-action-search"></a>
        </header>

        <!-- 主页面内容容器 -->
        <div class="mui-content mui-scroll-wrapper">
          <div class="mui-scroll">
            <!-- 主界面具体展示内容 -->
            <div class="mui-content">
              <!-- 我的 -->
              <div id="my" class="mui-control-content mui-active">
                <my></my>
              </div>

              <!-- 发现 -->
              <div id="discovery" class="mui-control-content">
                <discovery></discovery>
              </div>

              <!-- 朋友 -->
              <div id="friends" class="mui-control-content">
                <friends></friends>
              </div>

              <!-- 视频 -->
              <div id="videos" class="mui-control-content">
                <videos></videos>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入组件
import my from "../views/my.vue";
import discovery from "../views/discovery.vue";
import friends from "../views/friends.vue";
import videos from "../views/videos.vue";

export default {
  mounted() {
    mui.init();
    this.offsetToRight();
    this.initScroll();
    this.initPagePosition();
    this.scrollToTop();
    // console.dir(mui(".mui-scroll-wrapper").scroll());
  },
  methods: {
    //100毫秒滚动到顶
    scrollToTop() {
      mui(".mui-content.mui-scroll-wrapper")
        .scroll()
        .scrollTo(0, 0, 100);
    },

    // 侧边栏切换
    offsetToRight() {
      mui(".mui-inner-wrap").on("tap", ".mui-action-menu", function() {
        mui(".mui-off-canvas-wrap")
          .offCanvas()
          .toggle();
      });
    },

    // 允许页面滚动
    initScroll() {
      mui(".mui-scroll-wrapper").scroll({ indicators: false });
    },

    // 切换内容页时初始化页面滚动位置
    initPagePosition() {
      let $ = this;
      var items = mui(".nav .mui-control-item");
      mui(".nav").on("tap", ".mui-control-item", function() {
        for (var item of items) item.className = "mui-control-item";

        $.scrollToTop();
        console.log("object");
      });
    }
  },
  components: {
    my,
    discovery,
    friends,
    videos
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$a-default-color: #5a5757;
$a-font-size: 14px;

#index {
  a {
    color: $a-default-color;
  }
  .nav {
    display: inline-flex;
    height: inherit;
    line-height: 44px;
    // vertical-align: text-top;
    a {
      padding: 0 10px;
      font-size: $a-font-size;
    }

    // .mui-control-item {
    //   color:#5a5757;
    // }

    .mui-active {
      border-bottom: 1px solid #333;
    }
  }
}
</style>
