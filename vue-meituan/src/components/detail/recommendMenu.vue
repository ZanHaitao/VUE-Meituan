<template>
  <div class="recommend-menu">
    <ul class="menu-image">
      <li v-for="(item,index) in imgMenuList" :key="index">
        <img :src="item.imgUrl" alt />
        <div class="title">{{item.title}}</div>
      </li>
    </ul>
    <ul class="menu-list">
      <li v-for="(item,index) in menuList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      imgMenuList: [
        {
          imgUrl:
            'https://p0.meituan.net/bbia/e5a2bda2c4bd13e3fae23e16a8a468d4447156.jpg@130w_130h_1e_1c',
          title: '极品羊肉 ￥32',
        },
        {
          imgUrl:
            'https://qcloud.dpfile.com/pc/en3u7B4yLwPgM8zHWpHXrXa04lTlbaycSTVhy9_bd55SVYM2_sJPKT7vzoJzDGX75g_3Oo7Z9EXqcoVvW9arsw.jpg',
          title: '秘制酸梅汤 ￥28',
        },
        {
          imgUrl:
            'https://p1.meituan.net/shaitu/c5847c96ea273b1ab70cd5d35216881f347521.jpg@130w_130h_1e_1c',
          title: '精品肥牛 ￥32',
        },
        {
          imgUrl:
            'https://qcloud.dpfile.com/pc/gGOjoqB6m8QQdmaWHkY8e-mgaQ-bwrw4xl4NK_ceVR4SFo7S13MulT5pfz0yKr5s5g_3Oo7Z9EXqcoVvW9arsw.jpg',
          title: '麻酱小料 ￥6',
        },
        {
          imgUrl:
            'https://qcloud.dpfile.com/pc/gRho1udZUFbScSOFAKitCJ8bTzUDYW_NFJQjv17eCN5VsMg_v10-y8J1hCeT6DeG5g_3Oo7Z9EXqcoVvW9arsw.jpg',
          title: '鲜虾滑 ￥46',
        },
        {
          imgUrl:
            'https://p0.meituan.net/bbia/19afcec42d7136aeb96ba4aef81699d5177386.jpg@130w_130h_1e_1c',
          title: '芝麻烧饼 ￥2',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/css/detail/recommendMenu.scss';
</style>
