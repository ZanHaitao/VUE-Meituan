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
          <span v-for="item in value" :key="item.id">{{ item.name }}</span>
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
      dataList: [
        {
          id: 1,
          name: '北京',
          pinyin: 'beijing',
          acronym: 'bj',
          rank: 'S',
          firstChar: 'b',
        },
        {
          id: 10,
          name: '上海',
          pinyin: 'shanghai',
          acronym: 'sh',
          rank: 'S',
          firstChar: 's',
        },
        {
          id: 20,
          name: '广州',
          pinyin: 'guangzhou',
          acronym: 'gz',
          rank: 'S',
          firstChar: 'g',
        },
        {
          id: 30,
          name: '深圳',
          pinyin: 'shenzheng',
          acronym: 'sz',
          rank: 'S',
          firstChar: 's',
        },
        {
          id: 40,
          name: '天津',
          pinyin: 'tianjin',
          acronym: 'tj',
          rank: 'A',
          firstChar: 't',
        },
        {
          id: 42,
          name: '西安',
          pinyin: 'xian',
          acronym: 'xa',
          rank: 'A',
          firstChar: 'x',
        },
        {
          id: 45,
          name: '重庆',
          pinyin: 'chongqing',
          acronym: 'cq',
          rank: 'A',
          firstChar: 'c',
        },
        {
          id: 50,
          name: '杭州',
          pinyin: 'hangzhou',
          acronym: 'hz',
          rank: 'A',
          firstChar: 'h',
        },
        {
          id: 55,
          name: '南京',
          pinyin: 'nanjing',
          acronym: 'nj',
          rank: 'A',
          firstChar: 'n',
        },
        {
          id: 57,
          name: '武汉',
          pinyin: 'wuhan',
          acronym: 'wh',
          rank: 'A',
          firstChar: 'w',
        },
        {
          id: 59,
          name: '成都',
          pinyin: 'chengdu',
          acronym: 'cd',
          rank: 'A',
          firstChar: 'c',
        },
      ],
      dataObj: {},
    };
  },
  created() {
    const obj = {};
    this.dataList.forEach((item) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
    });
    this.dataObj = obj;
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/changeCity/recentCity.scss';
</style>
