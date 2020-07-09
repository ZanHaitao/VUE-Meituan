<template>
  <div class="goods utils-wrap">
    <el-row>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>
          <a href="/">{{ $store.state.position }}美团</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ $store.state.position }}{{ $route.params.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <my-filter />
        </el-row>
        <el-row>
          <products-list />
        </el-row>
      </el-col>
      <el-col :span="5">
        <div class="map" v-fixed></div>
        <div class="isLike">
          <h4>猜你喜欢</h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyFilter from '../components/goodsList/filter.vue';
import ProductsList from '../components/goodsList/productsList.vue';

export default {
  components: {
    MyFilter,
    ProductsList,
  },
};
</script>

<style lang="scss">
@import '@/assets/css/goodsList/goods.scss';
</style>
