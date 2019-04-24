<template>
  <div>
    <!-- <div class="mui-content"> -->
    <div
      id="sliderSegmentedControl"
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a class="mui-control-item mui-active" href="#sub_recommend">推荐</a>
        <a class="mui-control-item" href="#look">LOOK直播</a>
        <a class="mui-control-item" href="#sqaure">广场</a>
        <a class="mui-control-item" href="#music_port">音乐画像</a>
        <a class="mui-control-item" href="#Papillon">Papillon(Live)</a>
        <a class="mui-control-item" href="#path">听歌轨迹</a>
        <a class="mui-control-item" href="#scene">现场</a>
        <a class="mui-control-item" href="#cover">翻唱</a>
        <a class="mui-control-item" href="#bgm">听BGM</a>
        <a class="mui-control-item" href="#dance">舞蹈</a>
        <a class="mui-control-item" href="#acg">ACG音乐</a>
        <a class="mui-control-item" href="#show">演奏</a>
      </div>
    </div>
    <div class="mui-content">
      <div id="sub_recommend" class="mui-control-content mui-active">
        <s-recommend></s-recommend>
      </div>
      <div id="look" class="mui-control-content">LOOK直播</div>
      <div id="sqaure" class="mui-control-content">广场</div>
      <div id="music_port" class="mui-control-content">音乐画像</div>
      <div id="Papillon" class="mui-control-content">Papillon(Live)</div>
      <div id="path" class="mui-control-content">听歌轨迹</div>
      <div id="scene" class="mui-control-content">现场</div>
      <div id="cover" class="mui-control-content">翻唱</div>
      <div id="bgm" class="mui-control-content">听BGM</div>
      <div id="dance" class="mui-control-content">舞蹈</div>
      <div id="acg" class="mui-control-content">ACG音乐</div>
      <div id="show" class="mui-control-content">演奏</div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import SRecommend from "./SRecommend.vue";
export default {
  mounted() {
    mui.init({
      swipeBack: false
    });
    mui(".mui-scroll-wrapper").scroll({
      indicators: false
    });
  },
  components: {
    "s-recommend": SRecommend
  }
};
</script>
<style lang="scss" scoped></style>
