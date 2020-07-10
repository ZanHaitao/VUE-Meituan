<template>
  <div class="selector" v-show-selector-list="documentClick">
    <div :class="['selector-container',disabled ? 'disabled' : '']" @click="handleClick">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div
      class="show-list"
      :style="{
      width:widthStyle + 'px'
    }"
      v-if="showList"
      @click.stop
    >
      <p class="title">{{ title }}</p>
      <ul class="list-content">
        <li v-for="(item,index) in listData" :key="index">
          <span @click="changeCity(item)" :class="{'active':value === item}">{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    listData: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    showList: {
      type: Boolean,
      required: true,
    },
    disabled: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    widthStyle() {
      return Math.ceil(this.listData.length / 11) * 78;
    },
  },
  methods: {
    handleClick(e) {
      e.stopPropagation();
      if (!this.disabled) {
        this.$emit('showListContent', true);
      }
    },
    documentClick() {
      this.$emit('showListContent', false);
    },
    changeCity(val) {
      this.$emit('change', val);
      this.$emit('showListContent', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/changeCity/selector.scss';
</style>
