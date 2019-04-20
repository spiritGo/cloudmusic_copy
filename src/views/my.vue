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
    <ul class="mui-table-view my-mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="i in 5" :key="i">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left my-list-icon" src="@/assets/zz.png">
          <div class="mui-media-body my-list-content">
            <span>下载管理</span>
            <span>(0)</span>
          </div>
        </a>
      </li>
    </ul>

    <!-- 创建的歌单 -->
    <div class="mui-table-view my-cell-view">
      <div class="mui-table-view-cell mui-collapse">
        <a class="mui-navigate-right" href="#">
          <span>创建的歌单</span>
          <p></p>
          <span class="mui-icon mui-icon-plusempty"></span>
          <span class="mui-icon mui-icon-forward"></span>
        </a>
        <div class="mui-collapse-content">
          <p>我喜欢的音乐</p>
        </div>
      </div>
      <!-- 截图导入歌单 -->
      <button type="button" class="mui-btn mui-btn-outlined">截图导入歌单</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {};
</script>
<style lang="scss" scoped>
$font-size: 12px;

#my {
  // 子导航栏
  .mui-scroll-wrapper {
    height: 80px;
    border-bottom: 1px solid #ccc5;

    .mui-scroll {
      height: auto;
      background-color: #fff;
      .my-fm {
        padding-top: 5px;
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
