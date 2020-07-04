<template>
  <div class="m-geo clearfix">
    <div class="position">
      <i class="el-icon-location" />
      <span>北京</span>
      <router-link :class="'changeCity'" :to="{name:'changeCity'}">切换城市</router-link>
      <span>[</span>
      <a href="#">门头沟区</a>
      <a href="#">大厂回族自治县</a>
      <a href="#">廊坊</a>
      <span>]</span>
    </div>
    <div class="user-entry">
      <router-link :class="'login'" :to="{name:'login'}">立即登陆</router-link>
      <router-link :class="'registered'" :to="{name:'registered'}">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/css/header/geo.scss';
</style>
