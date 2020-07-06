<template>
  <div class="page-index utils-wrap">
    <el-row>
      <el-col :span="5" class="left-banner">
        <my-category />
      </el-col>
      <el-col :span="19" class="right-banner">
        <my-banner />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyCategory from '@/components/index/category.vue';
import MyBanner from '@/components/index/banner.vue';

export default {
  components: {
    MyCategory,
    MyBanner,
  },
};
</script>

<style lang="scss">
@import '@/assets/css/index/index.scss';
</style>
