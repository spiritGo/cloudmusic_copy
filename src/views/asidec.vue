<template>
  <div id="asidec">
    <div class="header">
      <p>登录网易云音乐</p>
      <p>手机电脑多端同步,尽享海量高品质音乐</p>
      <a class="login">立即登录</a>
      <div class="vip">
        <div class="title">
          <p>开通黑胶VIP</p>
          <div>
            <span>尊享豪华特权</span>
            <a>立即开通＞</a>
          </div>
        </div>
        <div class="desc">
          <p>开通黑胶VIP尊享超12项豪华特权</p>
        </div>
      </div>
    </div>
    <div class="mui-content">
      <div class="nav">
        <a>我的消息</a>
        <a>我的好友</a>
        <a>个性皮肤</a>
        <a>听歌识曲</a>
      </div>

      <!-- 扩展 -->
      <div class="extends">
        <div class="ext-item">
          <div class="left">演出</div>
          <p>麦田音乐节</p>
        </div>
        <div class="ext-item">
          <div class="left">演出</div>
          <p>麦田音乐节</p>
        </div>
        <div class="ext-item">
          <div class="left">演出</div>
          <p>麦田音乐节</p>
        </div>
      </div>

      <!-- 功能 -->
      <div class="fun">
        <div class="ext-item">
          <div class="left">定时播放</div>
          <p></p>
        </div>
        <div class="ext-item">
          <div class="left">扫一扫</div>
          <p></p>
        </div>
        <div class="ext-item">
          <div class="left">音乐闹钟</div>
          <p></p>
        </div>
        <div class="ext-item">
          <div class="left">在线听歌免流量</div>
          <p></p>
        </div>
        <div class="ext-item">
          <div class="left">游戏推荐</div>
          <p>登录领70元</p>
        </div>
        <div class="ext-item">
          <div class="left">优惠券</div>
          <p></p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="night">夜间模式</div>
      <div class="setting">设置</div>
      <div class="exit">退出</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$color-fff: #fff; // 白色
$color-2f2e2e: #2f2e2e; // 黑色
$color-ff3a3a: #ff3a3a; // 红色
$color-ffe3df: #ffe3df; // 粉红
$bottom-h: 50px;
$color-grey: #878787;
$font-15: 15px;
$font-12: 12px;
$color-c5b0ad: #c5b0ad;
$padding-10: 10px;
#asidec {
  position: relative;
  .header {
    padding-top: 50px;
    p {
      margin: 0;
    }
    .login {
      color: $color-grey;
      font-size: $font-15;
      border: 1px solid $color-grey;
      margin-top: 10px;
      display: inline-block;
      padding: 3px 16px;
      border-radius: 50px;
    }

    .vip {
      margin-top: 10px;
      font-size: $font-12;
      background-color: #2f2e2e;
      margin-left: 10px;
      margin-right: 10px;
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
      color: $color-ffe3df;
      padding: 6px;

      .title {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid $color-grey;
        padding-bottom: 6px;
        p {
          color: inherit;
          font-size: $font-12;
        }

        a {
          color: $color-2f2e2e;
          font-size: $font-12;
          background-color: $color-ffe3df;
          padding: 3px 6px;
          border-radius: 10px;
          margin-left: 6px;
        }
      }

      .desc {
        margin-top: 10px;
        margin-bottom: 20px;
        text-align: left;

        p {
          color: $color-c5b0ad;
          font-size: $font-12;
        }
      }
    }
  }
  .mui-content {
    background-color: #fff;
    margin-top: -58px;
    position: inherit;

    .nav {
      padding: 16px 10px 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;

      a {
        font-size: $font-12;
      }
    }

    .extends {
      padding-top: $padding-10;
      border-bottom: 1px solid #eee;
      .ext-item {
        display: flex;
        justify-content: space-between;
        padding-left: $padding-10;
        padding-right: $padding-10;
        font-size: $font-15;
        padding-bottom: 8px;

        p {
          margin: 0;
        }
      }
    }

    .fun {
      @extend .extends;
    }
  }
  .footer {
    width: 100%;
    height: $bottom-h;
    background-color: $color-fff;
    position: fixed;
    bottom: 0px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    font-size: $font-15;
  }
}
</style>
