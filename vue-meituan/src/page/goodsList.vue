<template>
  <div class="goods utils-wrap">
    <el-row>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>
          <router-link to="/">{{ $store.state.position }}美团</router-link>
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
        <div class="map">
          <div class="map-wrap" v-fixed></div>
        </div>
        <div class="isLike">
          <is-like />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyFilter from '../components/goodsList/filter.vue';
import ProductsList from '../components/goodsList/productsList.vue';
import IsLike from '../components/goodsList/isLike.vue';

export default {
  components: {
    MyFilter,
    ProductsList,
    IsLike,
  },
};
</script>

<style lang="scss">
@import '@/assets/css/goodsList/goods.scss';
</style>
