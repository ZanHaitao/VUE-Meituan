<template>
  <div class="choose">
    <span>按省份选择:</span>
    <my-selector
      :value="currProvince"
      title="省份"
      @change="changeProvince"
      :listData="provinceListData"
      :showList="showProvinceList"
      @showListContent="changeProvinceShowList"
    />
    <my-selector
      :value="currCity"
      title="城市"
      @change="changeCity"
      :showList="showCityList"
      :listData="cityListData"
      @showListContent="changeCityShowList"
      :disabled="isDisabled"
    />
    <span class="title-search">直接搜索:</span>
    <el-select
      v-model="city"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in listData" :key="item" :label="item" :value="item"></el-option>
    </el-select>
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
      currProvince: '省份',
      currCity: '城市',
      showProvinceList: false,
      showCityList: false,
      city: '',
      loading: false,
      listData: [],
      provinceList: [],
      cityInfoList: [],
      isDisabled: true,
    };
  },
  created() {
    this.$api.getProvinceList().then((res) => {
      this.provinceList = res;
    });
  },
  computed: {
    provinceListData() {
      return this.provinceList.map((item) => item.provinceName);
    },
    cityListData() {
      return this.cityInfoList.map((item) => item.name);
    },
  },
  methods: {
    remoteMethod(val) {
      this.listData = this.cityListData.filter((item) => item.includes(val));
    },
    changeProvince(val) {
      this.isDisabled = false;
      this.currCity = '城市';
      this.provinceList.forEach((item) => {
        if (item.provinceName === val) {
          this.cityInfoList = item.cityInfoList;
        }
      });
      this.currProvince = val;
    },
    changeCity(val) {
      this.currCity = val;
      this.$store.dispatch('setChangePostiton', val);
      this.$router.push('/');
    },
    changeProvinceShowList(flag) {
      if (flag) {
        this.showCityList = !flag;
      }
      this.showProvinceList = flag;
    },
    changeCityShowList(flag) {
      if (flag) {
        this.showProvinceList = !flag;
      }
      this.showCityList = flag;
    },
  },
};
</script>
