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
      productList: [],
    };
  },
  created() {
    this.$api.getGoodsList().then((res) => {
      this.productList = res;
    });
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
