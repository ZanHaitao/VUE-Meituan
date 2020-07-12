<template>
  <div class="selector-wrap clearfix">
    <dl>
      <dt>{{ title }}</dt>
      <dt>
        <a href="javascript:void(0)">
          <span @click="handleClick('全部')" :class="{'active':active === '全部'}">全部</span>
        </a>
      </dt>
      <dd>
        <ul>
          <li v-for="(item,index) in dataList" :key="index">
            <a href="javascript:void(0)" :class="{'active':active === item.title}">
              <span>{{ item.title }}</span>
              <i class="el-icon-caret-bottom"></i>
            </a>

            <div class="list-down">
              <h4>{{ item.title }}</h4>
              <div
                :style="{
                  width:item.subList.length > 4? '480px':item.subList.length*120 + 'px'
                }"
              >
                <span
                  v-for="v in item.subList"
                  :key="v.id"
                  @click="handleClick(item.title)"
                >{{ v.name }}</span>
              </div>
            </div>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: '全部',
    };
  },
  methods: {
    handleClick(val) {
      this.active = val;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/goodsList/selector.scss';
</style>
