<template>
  <div>
    <!-- 轮播图 -->
    <div id="dis-slider" class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <!--支持循环，需要重复图片节点-->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../assets/ait.jpg">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="../assets/aim.jpg">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="../assets/ain.jpg">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="../assets/ais.jpg">
          </a>
        </div>
        <div class="mui-slider-item">
          <a href="#">
            <img src="../assets/ait.jpg">
          </a>
        </div>

        <!--支持循环，需要重复图片节点-->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../assets/aim.jpg">
          </a>
        </div>
      </div>

      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>

    <!-- subnav -->
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a class="mui-control-item my-fm" v-for="i in 11" :key="i">
          <img src="../assets/shortcut_fm.png" alt>
          <span>每日推荐</span>
        </a>
      </div>
    </div>

    <!-- 推荐歌单 -->
    <div id="recommand">
      <h5 class="title">
        慢生活
        <span>歌单广场</span>
      </h5>
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="i in 6" :key="i">
          <a href="#">
            <img class="mui-media-object" src="../assets/recommand.jpg">
            <div class="mui-media-body">幸福就是可以一起睡觉</div>
          </a>
        </li>
      </ul>
    </div>

    <!-- 新碟 -->
    <div id="NewDish">
      <div class="title">
        <h3>新碟</h3>
        <h6>| 新歌</h6>
        <a>更多新碟</a>
      </div>
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="i in 3" :key="i">
          <a href="#">
            <img class="mui-media-object" src="../assets/recommand.jpg">
            <div class="mui-media-body">幸福就是可以一起睡觉</div>
          </a>
        </li>
      </ul>
    </div>

    <!-- 云村精选 -->
    <div id="more">
      <div class="title">
        <p>云村精选</p>
        <p>
          <i class="mui-icon mui-icon-refreshempty"></i>获取新内容
        </p>
      </div>
      <h5>听钱正昊重新演绎曾经的话语金典</h5>
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-12" v-for="i in 10" :key="i">
          <a href="#">
            <img class="mui-media-object" src="../assets/ait.jpg">
            <div class="mui-media-body">
              <p>幸福就是可以一起睡觉</p>
              <img src="../assets/shortcut_fm.png" alt>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { clearTimeout } from "timers";
export default {
  mounted() {
    this.initSlider();
  },
  methods: {
    // 初始化轮播图
    initSlider() {
      mui("#dis-slider").slider({ interval: 3000 });
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 12px;
#discovery {
  // 轮播图
  #dis-slider {
    .mui-slider-item {
      padding: 12px;

      img {
        border-radius: 12px;
      }
    }

    .mui-slider-indicator {
      bottom: 14px;
    }
  }

  // subnav
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

  // 推荐歌单
  #recommand {
    .title {
      text-align: left;
      padding-left: 18px;
      background-color: white;
      margin: 0;
      padding-top: 10px;
      height: 30px;
      box-sizing: border-box;
      position: relative;
      font-size: 18px;
      span {
        border: 2px #eee solid;
        font-size: 12px;
        padding: 3px;
        border-radius: 3px;
        display: inline-block;
        position: absolute;
        right: 18px;
      }
    }

    ul {
      margin-top: 3px;
      &::before {
        height: 0;
      }

      li {
        margin-bottom: 12px;
        img {
          border-radius: 6px;
        }
      }
    }
  }

  // 新碟
  #NewDish {
    .title {
      display: flex;
      align-items: baseline;
      color: #333;
      padding: 10px 18px 0;
      text-align: left;

      h3 {
        font-size: 14px;
        padding-right: 6px;
      }

      h6 {
        font-size: 10px;
        flex: 1;
      }

      a {
        color: #333;
        font-size: 10px;
        border: 1px #ccc solid;
        border-radius: 10px;
        padding: 1px 10px;
      }
    }

    ul {
      padding-bottom: 50px;
      &::before {
        height: 0;
      }
      &::after {
        bottom: -10px;
        height: 15px;
        background-color: #c8c7cc33;
      }

      img {
        border-radius: 8px;
      }
    }
  }

  //云村精选
  #more {
    .title {
      display: flex;
      align-items: flex-end;
      text-align: left;
      padding: 0 18px;
      font-size: 14px;
      margin-top: 10px;
      position: relative;

      &:after {
        position: absolute;
        right: 0;
        left: 0;
        height: 1px;
        content: "";
        // transform: scaleY(0.5);
        background-color: #c8c7cc;
        margin: 6px auto;
        bottom: -12px;
      }

      p {
        margin: 0;
        padding: 0;

        &:first-child {
          flex: 1;
        }

        i {
          vertical-align: middle;
        }
      }
    }

    h5 {
      text-align: left;
      padding-left: 18px;
      font-size: 8px;
      margin-top: 16px;
    }

    ul {
      background-color: #eee;
      padding-right: 0;
      padding-bottom: 0;

      &::before {
        height: 0;
      }

      li {
        padding: 6px 0;
        margin: 0 0 6px;
        background-color: #fff;

        &:last-child {
          margin: 0;
        }

        a {
          padding: 0 10px;
          margin: 0;

          img {
            border-radius: 6px;
          }

          .mui-media-body {
            display: flex;
            justify-content: space-between;
            align-items: center;

            img {
              width: 15px;
              height: 15px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
}
</style>
