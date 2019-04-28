<template>
  <div>
    <!-- 子导航栏 -->
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a class="mui-control-item my-fm" v-for="i in 11" :key="i">
          <img src="../assets/shortcut_fm.png" alt>
          <span>私人FM</span>
        </a>
      </div>
    </div>

    <!-- 本地音乐组 -->
    <ul class="mui-table-view my-mui-table-view local">
      <li
        class="mui-table-view-cell mui-media"
        v-for="item in localeList"
        :key="item.id"
        :data-id="item.id"
      >
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left my-list-icon" src="@/assets/zz.png">
          <div class="mui-media-body my-list-content">
            <span>{{item.title}}</span>
            <span>({{item.count}})</span>
          </div>
        </a>
      </li>
    </ul>

    <!-- 创建的歌单 -->
    <div class="mui-table-view my-cell-view">
      <!-- <div class="mui-table-view-cell mui-collapse">
        <a class="mui-navigate-right" href="#">
          <span>创建的歌单</span>
          <p></p>
          <span class="mui-icon mui-icon-plusempty"></span>
          <span class="mui-icon mui-icon-forward"></span>
        </a>
        <div class="mui-collapse-content">
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right" href="#">PC方案</a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right" href="#">手机方案</a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right" href="#">TV方案</a>
            </li>
          </ul>
        </div>
      </div>-->
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell mui-collapse">
          <a class="mui-navigate-right" href="#">创建的歌单</a>
          <ul class="mui-table-view mui-table-view-chevron item">
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right" href="#">我喜欢的音乐</a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right" href="#">我收藏的音乐</a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right" href="#">喜欢我的音乐</a>
            </li>
          </ul>
        </li>
      </ul>

      <!-- 截图导入歌单 -->
      <button type="button" class="mui-btn mui-btn-outlined">截图导入歌单</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      localeList: [
        { id: 1, title: "本地音乐", count: 20 },
        { id: 2, title: "最近播放", count: 100 },
        { id: 3, title: "下载管理", count: 0 },
        { id: 4, title: "我的电台", count: 0 },
        { id: 5, title: "我的收藏", count: "专题/歌手/视频/专栏" }
      ]
    };
  },
  methods: {
    local() {
      mui("#my .local").on("tap", "li", function() {
        // console.dir(this.dataset.id);
        switch (this.dataset.id) {
          case "1":
            console.log("本地音乐");
            break;
          case "2":
            console.log("最近播放");
            break;
          case "3":
            console.log("下载管理");
            break;
          case "4":
            console.log("我的电台");
            break;
          case "5":
            console.log("我的收藏");
            break;
        }
      });
    }
  },
  mounted() {
    this.local();
  }
};
</script>
<style lang="scss" scoped>
$font-size: 12px;
$font-14: 14px;

#my {
  // 子导航栏
  .mui-scroll-wrapper {
    height: 80px;
    // border-bottom: 1px solid #ccc5;

    .mui-scroll {
      height: auto;
      background-color: #fff;
      .my-fm {
        padding-top: 10px;
        display: inline-flex;
        flex-direction: column;
        font-size: $font-size;

        img {
          width: 40px;
        }
      }
    }
  }

  // 本地音乐组
  .mui-table-view {
    &:after {
      height: 0px;
    }

    &::before {
      top: 0;
      margin-top: 3px;
    }

    .mui-table-view-cell {
      &:after {
        left: 50px;
      }

      .my-list-icon {
        height: 30px;
      }

      .my-list-content {
        text-align: left;
        line-height: 30px;
        font-size: 15px;
        font-weight: bold;
      }
    }
  }

  // 创建的歌单
  .my-cell-view {
    padding-bottom: 17px;
    margin-top: 8px;
    font-size: $font-14;

    &:before {
      height: 0px;
    }

    .mui-table-view-cell {
      &:after {
        height: 0;
      }
    }

    a.mui-navigate-right {
      display: flex;
      padding-left: 15px;
      p {
        flex: 1;
      }
    }

    .item li {
      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
    }

    .mui-collapse-content {
      text-align: left;
    }
    .mui-btn {
      width: 95%;
      padding: 10px 0;
    }
  }
}
</style>
