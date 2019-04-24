<template>
  <div>
    <div class="mui-card" v-for="i in 10" :key="i">
      <!--页眉，放置标题-->
      <div class="mui-card-header mui-card-media">
        <img src="../assets/logo.png">
        <div class="mui-media-body">
          <div class="title">
            <strong class="author">音乐奇葩君</strong>
            <span class="type">发布视频</span>
          </div>
          <p class="count">发表于 2016-06-30 15:30</p>
          <p class="desc">华晨宇演唱会(追光者)饭制版,看了也是要泪目的</p>
        </div>
      </div>
      <!--内容区-->
      <div class="mui-card-content">
        <img src="../assets/ais.jpg">
      </div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">
        <div class="foot">
          <div class="view">
            <i class="mui-icon mui-icon-loop"></i>
            <span class="count">7</span>
          </div>
          <div class="comment">
            <i class="mui-icon mui-icon-chat"></i>
            <span class="count">29</span>
          </div>
          <div class="like">
            <i class="mui-icon mui-icon-star"></i>
            <span class="count">132</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$font-12: 12px;
$author-color: #157480;
$color-333: #333;
$color-c8c7cc: #c8c7cc;

#friends {
  .mui-card {
    box-shadow: none;

    &:not(:last-child) {
      border-bottom: 1px solid $color-c8c7cc;
    }

    .mui-card-header {
      &::after {
        height: 0;
      }

      .mui-media-body {
        text-align: left;

        .title {
          position: relative;
          &::after {
            position: absolute;
            content: "+ \5173\6CE8";
            color: white;
            display: inline-block;
            background-color: red;
            padding: 1px 6px;
            border-radius: 12px;
            font-size: 12px;
            right: 0px;
            top: 50%;
          }
          .author {
            color: $author-color;
            font-size: $font-12;
          }

          .type {
            font-size: $font-12;
            margin-left: 6px;
          }
        }

        .count {
          font-size: $font-12;
        }

        .desc {
          font-size: $font-12;
          color: $color-333;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-top: 3px;
        }
      }
    }

    .mui-card-content {
      padding-left: 50px;
      padding-right: 10px;
      img {
        width: 100%;
      }
    }

    .mui-card-footer {
      padding-left: 50px;
      padding-right: 10px;
      &::before {
        height: 0;
      }

      .foot {
        display: flex;
        align-items: center;

        div {
          width: 6rem;
          text-align: left;
          vertical-align: middle;

          .count {
            margin-left: 3px;
          }
        }
      }
    }
  }
}
</style>
