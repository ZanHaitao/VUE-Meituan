<template>
  <div class="page-city utils-wrap">
    <el-row>
      <choose-province />
    </el-row>
    <el-row>
      <hot-city title="热门城市" :cityList="hotCityList" />
    </el-row>
    <el-row>
      <hot-city title="最近访问" :cityList="historyCityList" />
    </el-row>
    <el-row>
      <recent-city />
    </el-row>
  </div>
</template>

<script>
import ChooseProvince from '@/components/changeCity/chooseProvince.vue';
import HotCity from '@/components/changeCity/city.vue';
import RecentCity from '@/components/changeCity/recentCity.vue';

export default {
  components: {
    ChooseProvince,
    HotCity,
    RecentCity,
  },
  data() {
    return {
      hotCityList: [
        '临汾',
        '吕梁',
        '侯马',
        '永济',
        '河津',
        '高平',
        '孝义',
        '介休',
        '原平',
        '霍州',
        '汾阳',
        '古交',
      ],
      historyCityList: ['太原', '大同', '阳泉', '长治', '晋城', '朔州'],
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/css/changeCity/changeCity.scss';
</style>
