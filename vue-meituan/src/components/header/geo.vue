<template>
  <div class="m-geo clearfix">
    <div class="position">
      <i class="el-icon-location" />
      <span>{{ $store.state.position }}</span>
      <router-link :class="'changeCity'" :to="{name:'changeCity'}">切换城市</router-link>
      <span>[</span>
      <a href="#" v-for="item in nearCityList" :key="item.id">{{ item.name }}</a>
      <span>]</span>
    </div>
    <div class="user-entry" v-if="!$store.state.userName">
      <router-link :class="'login'" :to="{name:'login'}">立即登陆</router-link>
      <router-link :class="'registered'" :to="{name:'registered'}">注册</router-link>
    </div>
    <div class="user-login" v-else>
      <span>{{ $store.state.userName }}</span>
      <span @click="handleClick">退出</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nearCityList: [],
    };
  },
  created() {
    this.$api.getPosition().then((res) => {
      this.$store.dispatch('setChangePostiton', res.name);
      this.nearCityList = res.nearCity;
    });
  },
  methods: {
    handleClick() {
      alert('退出成功');
      setTimeout(() => {
        this.$store.dispatch('setMutationUserName', '');
        this.$router.push({ name: 'login' });
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/header/geo.scss';
</style>
