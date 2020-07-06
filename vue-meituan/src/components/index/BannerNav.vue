<template>
  <div class="banner-nav">
    <ul>
      <li v-for="(item,index) in navList" :key="index">
        <router-link tag="span" to="/">{{ item }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        '美团外卖',
        '猫眼电影',
        '美团酒店',
        '名宿/公寓',
        '商家入驻',
        '美团公益',
      ],
    };
  },
};
</script>
