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
      typeList: [
        {
          title: '美食',
          type: 'food',
          subList: [
            {
              name: '日本菜',
              id: 'Japan',
            },
          ],
        },
        {
          title: '酒店住宿',
          type: 'hotal',
          subList: [
            {
              name: '温泉酒店',
              id: 'hot_spring',
            },
          ],
        },
      ],
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
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../../assets/css/goodsList/filter.scss';
</style>
