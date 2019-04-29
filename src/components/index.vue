<template>
  <div id="index" class="container">
    <!-- 侧滑导航根容器 -->
    <div class="mui-off-canvas-wrap mui-draggable">
      <!-- 主页面容器 -->
      <div class="mui-inner-wrap">
        <!-- 菜单容器 -->
        <aside class="mui-off-canvas-left">
          <!-- <div class="mui-scroll-wrapper">
          <div class="mui-scroll">-->
          <!-- 菜单具体展示内容 -->
          <!-- </div>
          </div>-->
          <asidec></asidec>
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

        <div class="mui-off-canvas-backdrop"></div>

        <div class="footer">
          <div class="left">
            <img src="../assets/shortcut_fm.png" alt>
            <div class="info">
              <h4>{{title}}</h4>
              <p>描述</p>
            </div>
          </div>
          <div class="right">
            <img src="../assets/pause.png" alt>
            <img class="menu" src="../assets/menu.png" alt>
            <div class="menulist">
              <div class="menulist-item" v-for="item in list" :key="item.id" :data-id="item.id">
                <p v-text="item.title"></p>
              </div>
            </div>
            <div class="mask"></div>
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
import asidec from "../views/asidec.vue";

export default {
  data() {
    return {
      list: [
        { id: 1, title: "HITA - 白头吟.mp3" },
        { id: 2, title: "HITA,小曲儿 - 丹青客.mp3" },
        { id: 3, title: "KBShinya,哦漏,萧忆情Alex - 青衫薄.mp3" },
        { id: 4, title: "不才 - 涉川.mp3" },
        { id: 5, title: "不才,情桑 - 捕梦.mp3" },
        { id: 6, title: "黄诗扶 - 九万字.mp3" }
      ],
      audio: null,
      title: ""
    };
  },
  mounted() {
    this.title = this.list[0].title;
    mui.init();
    this.offsetToRight();
    this.initScroll();
    this.initPagePosition();
    this.scrollToTop();
    this.menu();
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
        // console.log("object");
      });
    },

    // 播放列表
    menu() {
      var $ = this;
      var mask = mui(".footer .mask")[0];
      var menulist = document.querySelector(".footer .menulist");
      var menulist_item = document.querySelector(
        ".footer .menulist .menulist-item"
      );
      // console.log(mask);
      mui(".footer").on("tap", ".menu", () => {
        menulist.style.top = -250 + "px";
        mask.style.display = "block";
      });

      mask.addEventListener("tap", () => {
        mask.style.display = "none";
        menulist.style.top = 50 + "px";
      });

      mui(".footer .menulist").on("tap", ".menulist-item", function() {
        var id = this.dataset.id;
        var title = $.list[id - 1].title;
        $.title = title;
        mui.trigger(mask, "tap");
        $.playMusic(title);
      });
    },

    playMusic(title) {
      if (!this.audio) {
        this.audio = document.createElement("audio");
      }
      document.body.appendChild(this.audio);
      this.audio.src = "http://127.0.0.1:3002/music/" + title;
      this.audio.play();
    }
  },
  components: {
    my,
    discovery,
    friends,
    videos,
    asidec
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$a-default-color: #5a5757;
$a-font-size: 14px;
$bg-color: #ebebeb;

#index {
  .mui-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.3);
  }

  a {
    color: $a-default-color;
  }

  aside.mui-off-canvas-left {
    background: $bg-color;
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
      // border-bottom: 1px solid #333;
      border-bottom: 1px solid #007aff;
      color: #007aff;
    }
  }

  .mui-bar-nav ~ .mui-content {
    padding-bottom: 50px;
  }

  .footer {
    position: fixed;
    height: 50px;
    width: 100%;
    background-color: white;
    bottom: 0;
    z-index: 10;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 -2px 6px #eee;

    .left {
      display: flex;
      align-items: center;
      width: 70%;
      img {
        width: 40px;
        height: 40px;
        margin-left: 3px;
        vertical-align: middle;
      }

      .info {
        box-sizing: border-box;
        margin-left: 6px;
        h4 {
          font-size: 15px;
          margin-bottom: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 185px;
        }

        p {
          margin: 0;
          font-size: 13px;
        }
      }
    }

    .right {
      padding-right: 10px;
      img {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        cursor: pointer;
      }

      img:nth-child(2) {
        transform: scale(0.8);
      }

      .menulist {
        position: absolute;
        width: 100%;
        height: 300px;
        // height: 0;
        background-color: white;
        // top: -250px;
        top: 50px;
        left: 0;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        // border: 1px solid #ccc;
        z-index: 10;
        // display: none;
        transition: all 0.3s;

        .menulist-item {
          overflow: hidden;

          // &:not(:last-child) {
          //   // border-bottom: #eee solid 1px;
          // }

          &:hover {
            background-color: #ccc;
          }

          p {
            padding-left: 10px;
            padding-right: 10px;
            margin: 10px 0;
          }
        }
      }

      .mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        display: none;
      }
    }
  }
}
</style>
