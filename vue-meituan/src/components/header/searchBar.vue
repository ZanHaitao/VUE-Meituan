<template>
  <div class="search">
    <el-row class="utils-wrap" type="flex">
      <el-col :span="7" class="search-logo">
        <a href="/">
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
            @input="changeInput"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <div class="search-list" v-if="showSearchList">
            <div class="hot-word" v-if="showHotList">
              <dl>
                <dt>热门搜索</dt>
                <dd>
                  <span
                    v-for="(item, index) in hotSearchList"
                    :key="index"
                    @click="handleClick(item)"
                  >
                    <router-link
                      :to="{
                      name:'goodslist',
                      params:{ name:item } }"
                    >{{ item }}</router-link>
                  </span>
                </dd>
              </dl>
            </div>
            <div class="search-keyword" v-if="showKeyWord">
              <div v-if="searchListData.length === 0">暂无数据</div>
              <ul>
                <li v-for="(item, index) in searchListData" @click="handleClick(item)" :key="index">
                  <router-link
                    :to="{
                    name:'goodslist',
                    params:{ name:item }
                  }"
                  >{{ item }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </el-row>
        <el-row class="search-hot-list">
          <span v-for="(item, index) in hotSearchList" @click="handleClick(item)" :key="index">
            <router-link
              :to="{
              name:'goodslist',
              params:{ name:item }
              }"
            >{{ item }}</router-link>
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
      hotSearchList: [],
      searchListData: [],
      showSearchList: false,
    };
  },
  created() {
    this.$api.searchHotWords().then((res) => {
      this.hotSearchList = res;
    });
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
    handleClick(val) {
      console.log('aa');
      this.searchInput = val;
    },
    changeInput() {
      this.$api.getSearchList().then((res) => {
        this.searchListData = res.list.filter((item) => item.includes(this.searchInput));
      });
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/header/search.scss';
</style>
