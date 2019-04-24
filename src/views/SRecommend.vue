<template>
  <div>
    <div class="mui-card" v-for="i in 10" :key="i">
      <div class="mui-card-body">
        <img src="../assets/ais.jpg" alt>
        <div class="info">
          <p>[复联群像] 这一切仍然值得为之战斗,不计代价逆转无限</p>
          <span class="icon"></span>
        </div>
      </div>
      <div class="mui-card-footer">
        <div class="des">
          <span class="icon"></span>
          <span class="info">stan银古</span>
        </div>
        <div class="action">
          <i>点赞</i>
          <i>评论</i>
          <i>更多</i>
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

#sub_recommend {
  .mui-card {
    box-shadow: none;
    // border-bottom: 1px solid rgba(0, 0, 0, .1);
    overflow: visible;
    margin-bottom: 10px;

    &::after {
      content: "";
      display: block;
      position: absolute;
      left: -100px;
      right: -100px;
      bottom: 0;
      height: 1px;
      background-color: #eee;
    }

    .mui-card-body {
      padding-bottom: 3px;
      img {
        width: 100%;
        border-radius: 6px;
      }

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: $font-12;
          margin: 0;
        }

        .icon {
          width: 30px;
          height: 30px;
          background: url("../assets/logo.png") no-repeat;
          background-position: center;
          background-size: cover;
        }
      }
    }

    .mui-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0;
      padding-right: 0;

      .des {
        .icon {
          display: inline-block;
          vertical-align: middle;
          margin-right: 3px;
          width: 30px;
          height: 30px;
          background: url("../assets/logo.png") no-repeat center;
          background-size: cover;
        }
      }

      .action {
        i {
          margin-left: 6px;
        }
      }
    }
  }
}
</style>
