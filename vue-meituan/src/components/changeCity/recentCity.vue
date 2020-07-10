<template>
  <div class="recent-city">
    <div class="alphabet">
      <dl>
        <dt>按拼音首字母选择:</dt>
        <dd v-for="(item,index) in alphabet" :key="index">
          <a :href="'#City-'+item">{{ item }}</a>
        </dd>
      </dl>
    </div>
    <div class="alphabet-city-area">
      <div class="item" v-for="(value,key) in dataObj" :key="key">
        <div class="title">
          <span :id="'City-'+key">{{ key }}</span>
        </div>
        <div class="content">
          <span @click="handleClick(item.name)" v-for="item in value" :key="item.id">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alphabet: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
      dataList: [],
    };
  },
  created() {
    this.$api.getCityList().then((res) => {
      this.dataList = res;
    });
  },
  computed: {
    dataObj() {
      const obj = {};
      this.dataList.forEach((item) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      return obj;
    },
  },
  methods: {
    handleClick(val) {
      this.$store.dispatch('setChangePostiton', val);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/changeCity/recentCity.scss';
</style>
