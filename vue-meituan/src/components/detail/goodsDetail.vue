<template>
  <div class="goods-detail">
    <div class="detail-left">
      <div class="detail-header">
        <span class="security">
          <i class="el-icon-success"></i>
          食品安全档案
        </span>
        <p class="title">{{ detailData.title }}</p>
        <p class="rate">
          <el-rate v-model="detailData.score" disabled></el-rate>
          <span>{{ detailData.score }}分</span>
          <span>人均￥{{ detailData.avgPrice }}</span>
        </p>
      </div>
      <div class="detail-main">
        <p class="address">
          <span>地址：{{ detailData.address }}</span>
          <i class="el-icon-location"></i>
        </p>
        <p class="phone">电话：{{ detailData.phone }}</p>
        <p class="business">营业时间：{{ detailData.businessTime }}</p>
      </div>
      <div class="detail-footer">
        <p>
          <span class="service" v-for="(item,index) in detailData.service" :key="index">
            <i :class="{'el-icon-paperclip':item === '提供wifi'}"></i>
            <span>{{ item }}</span>
          </span>
        </p>
      </div>
    </div>
    <div class="detail-right">
      <p class="big-image">
        <img :src="detailData.imgUrl" alt />
      </p>
      <p class="small-image">
        <img :src="detailData.imgUrl" alt />
        <img :src="detailData.imgUrl" alt />
        <img :src="detailData.imgUrl" alt />
        <img :src="detailData.imgUrl" alt />
      </p>
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
};
</script>

<style lang="scss">
@import '@/assets/css/detail/goodsDetail.scss';
</style>
