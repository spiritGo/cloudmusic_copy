<template>
  <div class="cover">
    <h3>音乐的力量</h3>
    <div class="footer">
      <img src="../assets/t_actionbar_discover_selected.png">
      <span>网易云音乐</span>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      location.assign("#/index");
    }, 3000);
  }
};
</script>
<style scoped>
.cover,
.mui-table-view {
  background: #db2c1f;
  color: #fff;
  padding-top: 160px;
  position: fixed;
  width: 100%;
  height: 100%;
}

.cover h3 {
  letter-spacing: 3px;
  font-size: 2em;
}

.footer {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  justify-content: center;
  transform: scale(0.8) translateX(-30px);
}

.footer img {
  width: 50px;
  height: 50px;
}
</style>
