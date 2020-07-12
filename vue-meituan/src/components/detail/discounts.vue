<template>
  <div class="discounts-container">
    <div class="food-vouchers">
      <h4>{{ foodList.length }}款堂食套餐</h4>
      <ul>
        <li v-for="(item,index) in foodList" :key="index">
          <div class="banner-content">
            <img :src="detailData.imgUrl" alt />
          </div>
          <div class="info">
            <p class="title">
              <span>{{ item.title }}</span>
              <img
                src="https://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png"
                class="icon"
              />
            </p>
            <p class="sale">已售{{ item.saleNum }}</p>
            <p class="price">
              <span>￥</span>
              <span>{{ item.price }}</span>
              <span>门店价￥{{ item.counterPrice }}</span>
            </p>
          </div>
          <div class="'btn">
            <el-button round>立即抢购</el-button>
          </div>
        </li>
      </ul>
    </div>
    <div class="vouchers">
      <h4>{{ vouchersList.length }}张代金券</h4>
      <ul>
        <li v-for="(item,index) in vouchersList" :key="index">
          <div class="banner-content">
            <div class="price">
              <span>￥</span>
              <span>{{ item.price }}</span>
            </div>
            <div class="desc">{{ item.title }}</div>
          </div>
          <div class="info">
            <p class="title">{{ item.title }}</p>
            <p class="sale">已售{{ item.saleNum }}</p>
          </div>
          <div class="btn">
            <el-button round>立即抢购</el-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    foodList() {
      return this.detailData.dealItems.filter(
        (item) => !item.title.includes('代金券'),
      );
    },
    vouchersList() {
      return this.detailData.dealItems.filter((item) => item.title.includes('代金券'));
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/detail/discounts.scss';
</style>
