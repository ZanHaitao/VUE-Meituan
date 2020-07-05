<template>
  <div class="top-bar">
    <el-row class="utils-wrap">
      <el-col :span="10">
        <m-geo />
      </el-col>
      <el-col :span="14">
        <m-nav />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MGeo from './geo.vue';
import MNav from './nav.vue';

export default {
  components: {
    MGeo,
    MNav,
  },
};
</script>

<style lang="scss" scoped>
</style>
