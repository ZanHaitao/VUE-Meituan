<template>
  <div class="product-item">
    <div class="left-content">
      <div class="image-wrap">
        <a href="#">
          <img :src="productData.image" alt />
        </a>
        <span>{{ num }}</span>
      </div>
    </div>
    <div class="right-content">
      <div class="info">
        <h4>{{ productData.title }}</h4>
        <p class="comment-content">
          <el-rate v-model="productData.score" disabled></el-rate>
          <span v-if="productData.score > 4.5">很好</span>
          <span v-else-if="productData.score > 4">好</span>
          <span v-else-if="productData.score > 3.5">不错</span>
          <span v-else>一般</span>
          <span>{{ productData.score }}分</span>
          <span class="comment">{{ productData.commentNum }}人评论</span>
        </p>
        <p class="address">
          <span>
            <span
              v-for="(item,index) in productData.tab"
              :key="index"
            >{{ item }}{{ index === productData.tab.length - 1 ? '' : ' | '}}</span>
          </span>

          <span>{{ productData.address }}</span>
          <span class="address-btn">
            <i class="el-icon-location"></i>
            查看地图
          </span>
        </p>
        <p>
          <span>人均￥{{ productData.avgPrice }}</span>
        </p>
      </div>

      <div class="deal-wrapper">
        <div
          class="deal-item"
          v-for="(item,index) in productData.dealItems.slice(0,2)"
          :key="index"
        >
          <p class="title">{{ item.title }}</p>
          <p>
            <span class="money">￥</span>
            <span class="price">{{ item.price }}</span>
            <span>门市价￥{{ item.counterPrice }}</span>
            <span>已售{{ item.saleNum }}</span>
          </p>
        </div>
        <p v-if="productData.dealItems.length > 2">
          <span class="more">
            更多{{productData.dealItems.length-2}}个优惠
            <i class="el-icon-arrow-down"></i>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: [Number, String],
      required: true,
    },
    productData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/goodsList/productItem.scss';
</style>
