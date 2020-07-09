<template>
  <div class="products-list">
    <el-row>
      <ul class="sort-option">
        <li
          :class="{'active':active === item}"
          v-for="(item,index) in navList"
          :key="index"
          @click="handleClick(item)"
        >
          <span>{{ item }}</span>
          <i class="el-icon-d-caret" v-if="item === '价格最高'"></i>
        </li>
      </ul>
    </el-row>
    <el-row v-for="(item,index) in productList" :key="index">
      <product-item :num="index + 1" :productData="item" />
    </el-row>
  </div>
</template>

<script>
import ProductItem from './productItem.vue';

export default {
  data() {
    return {
      navList: ['智能排序', '价格最高', '人气最高', '评价最高'],
      active: '智能排序',
      productList: [
        {
          image:
            'http://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@275w_156h_1e_1c',
          title: '火鸡老店',
          type: 'food',
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: 'xxxx',
              evalaute: '好吃',
            },
          ],
          tab: ['火锅', '沙河'],
          address: '昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里',
          avgPrice: 64,
          dealItems: [
            {
              title: '火鸡宴，建议10-14人使用',
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: '元',
            },
          ],
        },
        {
          image:
            'http://p0.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@275w_156h_1e_1c',
          title: '井格重庆火锅（哈西万达店）',
          type: 'food',
          score: 5,
          commentNum: 2555,
          comment: [
            {
              username: 'xxxx',
              evalaute: '好吃',
            },
          ],
          tab: ['重庆火锅', '哈西万达'],
          address: '南岗区中兴大街168号万达广场3层3055',
          avgPrice: 95,
          dealItems: [
            {
              title: '100元代金券1张',
              price: 28.9,
              counterPrice: 100,
              saleNum: 3409,
              priceType: '元',
            },
            {
              title: '四人套餐，提供免费WiFi',
              price: 280,
              counterPrice: 458,
              saleNum: 152,
              priceType: '元',
            },
          ],
        },
      ],
    };
  },
  components: {
    ProductItem,
  },
  methods: {
    handleClick(val) {
      this.active = val;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/goodsList/productsList.scss';
</style>
