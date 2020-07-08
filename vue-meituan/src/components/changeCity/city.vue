<template>
  <div class="city-list">
    <dl>
      <dt>{{ title }}:</dt>
      <dd v-for="(item,index) in cityList" :key="index">{{ item }}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    cityList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/changeCity/city.scss';
</style>
