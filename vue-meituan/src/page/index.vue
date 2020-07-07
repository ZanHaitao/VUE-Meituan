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

    <el-row>
      <my-recommend :nav="hotelNav" />
    </el-row>

    <el-row>
      <my-recommend :nav="movieNav" />
    </el-row>
  </div>
</template>

<script>
import MyCategory from '@/components/index/category.vue';
import MyBanner from '@/components/index/banner.vue';
import MyRecommend from '@/components/index/recommend.vue';

export default {
  components: {
    MyCategory,
    MyBanner,
    MyRecommend,
  },
  data() {
    return {
      hotelNav: {
        class: 'hotel',
        title: '推荐民宿',
        list: [
          {
            text: '天津',
            tab: 'tianjin',
          },
          {
            text: '济南',
            tab: 'jinan',
          },
          {
            text: '大连',
            tab: 'dalian',
          },
          {
            text: '太原',
            tab: 'taiyuan',
          },
          {
            text: '石家庄',
            tab: 'shijiazhuang',
          },
          {
            text: '秦皇岛',
            tab: 'qinhuangdao',
          },
          {
            text: '呼和浩特',
            tab: 'huhehaote',
          },
          {
            text: '潍坊',
            tab: 'weifang',
          },
          {
            text: '唐山',
            tab: 'tangshan',
          },
          {
            text: '泰安',
            tab: 'taian',
          },
        ],
      },
      movieNav: {
        class: 'movie',
        title: '猫眼电影',
        list: [
          {
            text: '即将上映',
            tab: 'movie',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/css/index/index.scss';
</style>
