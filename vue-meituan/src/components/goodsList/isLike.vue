<template>
  <div class="is-like">
    <h4>猜你喜欢</h4>
    <ul class="like-list">
      <li v-for="item in listData" :key="item.itemId">
        <p class="img">
          <img :src="item.imgUrl" alt />
        </p>
        <p class="title">{{ item.title }}</p>
        <p class="address">{{item.areaName}}</p>
        <p class="price">
          <span>￥</span>
          <span>{{ item.avgPrice }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [],
      imgList: [
        'https://p0.meituan.net/msmerchant/9c8b87f3dd653e39a7a2f919c79eb9c1358540.jpg@220w_125h_1e_1c',
        'https://p1.meituan.net/msmerchant/516e1d17a9e8e1e6d78c7d229d14d15c122355.jpg@220w_125h_1e_1c',
        'https://p0.meituan.net/poi/820730512728118e3ea4d5111554ab8d79872.jpg@220w_125h_1e_1c',
        'https://p0.meituan.net/deal/6ed5e7f289e19da2a0537ce900060bb0296282.jpg@220w_125h_1e_1c',
        'https://p1.meituan.net/msmerchant/d025a69c711cd6501213b952cd080e4198992.jpg@220w_125h_1e_1c',
        'https://p0.meituan.net/msmerchant/ffdb144e5b94fdeea50785cf8f01d11c111207.jpg@220w_125h_1e_1c',
        'https://p0.meituan.net/msmerchant/1b88038d925671212fae2f1a49dd920d1347528.png',
        'https://p0.meituan.net/bbia/576e502a597e1297d5fa0e030cfb509a1784812.png@220w_125h_1e_1c',
        'https://p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@220w_125h_1e_1c',
        'https://p0.meituan.net/deal/082b87055acc89468243b1bc11bdbc24852834.jpg@220w_125h_1e_1c',
      ],
    };
  },
  created() {
    this.$api.getRecommend().then((res) => {
      this.listData = res.map((item, index) => {
        const obj = item;
        obj.imgUrl = this.imgList[index];
        return obj;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/goodsList/isLike.scss';
</style>
