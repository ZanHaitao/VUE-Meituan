import axios from '../http/http';

export default {
  // 获取热门搜索
  searchHotWords() {
    return axios.get('/api/meituan/header/searchHotWords.json');
  },
  // 获取搜索列表
  getSearchList() {
    return axios.get('/api/meituan/header/search.json');
  },
  // 获取导航栏
  getNavList() {
    return axios.get('/api/meituan/index/nav.json');
  },
  // 获取推荐信息
  resultsByKeywords() {
    return axios.get('/api/meituan/index/resultsByKeywords.json');
  },
  // 获取省份信息
  getProvinceList() {
    return axios.get('/api/meituan/city/province.json');
  },
  // 获取城市信息
  getCityList() {
    return axios.get('/api/meituan/city/hot.json');
  },
  // 获取热门城市
  getHotCityList() {
    return axios.get('/api/meituan/city/hot.json');
  },
  // 获取历史城市
  getHistoryCityList() {
    return axios.get('/api/meituan/city/recents.json');
  },
  // 获取商品列表
  getGoodsList() {
    return axios.get('/api/meituan/list/goodsList.json');
  },
  // 获取分类列表
  getClassify() {
    return axios.get('/api/meituan/list/classify.json');
  },
  // 获取区域列表
  getAreaList() {
    return axios.get('/api/meituan/list/areaList.json');
  },
  // 获取当前位置信息
  getPosition() {
    return axios.get('/api/meituan/city/getPosition.json');
  },
};
