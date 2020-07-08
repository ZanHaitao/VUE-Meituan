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
      provinceListData: [
        '山东',
        '甘肃',
        '江苏',
        '北京',
        '云南',
        '海南',
        '浙江',
        '上海',
        '天津',
        '陕西',
        '新疆',
        '贵州',
        '安徽',
        '澳门',
        '湖南',
        '河北',
        '香港',
        '辽宁',
        '四川',
        '宁夏',
        '吉林',
        '福建',
        '湖北',
        '广东',
        '重庆',
        '山西',
        '江西',
        '黑龙江',
        '青海',
        '河南',
        '台湾',
        '内蒙古',
        '西藏',
        '广西',
      ],
      cityListData: [
        '太原',
        '大同',
        '阳泉',
        '长治',
        '晋城',
        '朔州',
        '晋中',
        '运城',
        '忻州',
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
        '阳城',
        '襄垣',
        '灵石',
        '太谷区',
        '怀仁市',
        '洪洞',
        '临猗',
        '陵川',
        '平遥',
        '万荣',
        '灵丘县',
        '繁峙县',
        '应县',
        '平陆县',
        '祁县',
        '盂县',
        '清徐',
      ],
      listData: [],
    };
  },
  methods: {
    remoteMethod(val) {
      this.listData = this.cityListData.filter((item) => item.includes(val));
    },
    changeProvince(val) {
      this.currProvince = val;
    },
    changeCity(val) {
      this.currCity = val;
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
