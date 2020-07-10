<template>
  <div class="filter-box">
    <my-selector title="分类" :dataList="typeList" />
    <my-selector title="区域" :dataList="positionList" />
  </div>
</template>

<script>
import MySelector from './selector.vue';

export default {
  components: {
    MySelector,
  },
  data() {
    return {
      typeList: [],
      positionList: [
        {
          title: '推荐商圈',
          subList: [
            {
              name: '望京',
              id: 120000,
            },
            {
              name: '昌平',
              id: 12222,
            },
          ],
        },
        {
          title: '南岗区',
          subList: [
            {
              name: '中央大街',
              id: 123,
            },
            {
              name: '西客站',
              id: 11,
            },
            {
              name: '花园街',
              id: 222,
            },
            {
              name: '通乡街/果园街',
              id: 21,
            },
            {
              name: '爱建社区',
              id: 1,
            },
            {
              name: '学府路',
              id: 34,
            },
          ],
        },
      ],
    };
  },
  created() {
    this.$api.getClassify().then((res) => {
      this.typeList = res;
    });
  },
};
</script>

<style lang="scss">
@import '../../assets/css/goodsList/filter.scss';
</style>
