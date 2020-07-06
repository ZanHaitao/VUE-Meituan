<template>
  <div class="search">
    <el-row class="utils-wrap" type="flex">
      <el-col :span="7" class="search-logo">
        <a href="//bj.meituan.com">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
        </a>
      </el-col>
      <el-col :span="17" class="search-content">
        <el-row class="search-input" type="flex">
          <el-input
            v-model="searchInput"
            placeholder="搜索商家或地点"
            @focus="handleFocus"
            @blur="handleBlur"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>

          <div class="search-list" v-if="showSearchList">
            <div class="hot-word" v-if="showHotList">
              <dl>
                <dd>热门搜索</dd>
                <dt>
                  <span v-for="(item, index) in hotSearchList" :key="index">
                    <router-link :to="{ name:'/s',params:{ name:item } }">{{ item }}</router-link>
                  </span>
                </dt>
              </dl>
            </div>
            <div class="search-keyword" v-if="showKeyWord">
              <ul>
                <li v-for="(item, index) in searchListData" :key="index">
                  <router-link :to="{ name:'/s',params:{ name:item } }">{{ item }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </el-row>
        <el-row class="search-hot-list">
          <span v-for="(item, index) in hotSearchList" :key="index">
            <router-link :to="{ name:'/s',params:{ name:item } }">{{ item }}</router-link>
          </span>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
      hotSearchList: [
        '三亚旅游',
        '五星级酒单',
        '驴肉火烧',
        '京城第一火锅',
        '一起去旅行',
      ],
      searchListData: ['火锅', '麻辣火锅', '海底捞', '小龙坎', '牛奶火锅'],
      showSearchList: false,
    };
  },
  computed: {
    showHotList() {
      return this.showSearchList && !this.searchInput;
    },
    showKeyWord() {
      return this.showSearchList && this.searchInput;
    },
  },
  methods: {
    handleFocus() {
      this.showSearchList = true;
    },
    handleBlur() {
      setTimeout(() => {
        this.showSearchList = false;
      }, 200);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/header/search.scss';
</style>
