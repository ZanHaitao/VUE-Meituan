<template>
  <div class="recommend">
    <el-row class="recommend-nav">
      <dl :class="nav.class">
        <dt>{{ nav.title }}</dt>
        <dd
          @mouseenter="changeActive"
          v-for="(item,index) in nav.list"
          :class="{'active':kind === item.tab}"
          :key="index"
          :data-type="item.tab"
        >{{ item.text }}</dd>
      </dl>

      <span>
        全部
        <i class="el-icon-arrow-right"></i>
      </span>
    </el-row>
    <el-row class="recommend-container">
      <ul>
        <li v-for="item in listData" :key="item.id">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.src" class="image" />
            <div>
              <div class="bottom clearfix">
                <p class="title">{{ item.title }}</p>
                <p class="info">
                  <span>整套{{ item.info.roomNum }}居室·</span>
                  <span>可住{{ item.info.person }}人&nbsp;|&nbsp;</span>
                  <span>{{ item.info.address }}</span>
                </p>
                <p class="price">
                  <span class="price-icon">￥</span>
                  <span>{{ item.price }}</span>
                </p>
                <div class="portrait">
                  <a href="#">
                    <img src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png" />
                  </a>
                </div>
              </div>
            </div>
          </el-card>
        </li>
      </ul>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      kind: this.nav.list[0].tab,
      listData: [
        {
          id: '001',
          src:
            'https://img.meituan.net/iphoenix/272b8d9be07f7724bf12d254f018905c88722.jpg@740w_416h_1e_1c',
          title:
            '睦家公寓-华强店【简约系-时尚大床】新百商圈，双地铁口，出行方便，欢迎入住',
          info: {
            roomNum: 1,
            person: 2,
            address: '新百广场',
          },
          price: '188',
        },
        {
          id: '002',
          src:
            'https://img.meituan.net/phoenix/ab290917a215fc3460e0c59ad5605d192393024.jpg@740w_416h_1e_1c',
          title:
            '【沐馨民宿】海亮广场/振华广场/维多利商场/巨幕投影～现代北欧轻奢风格～简约独特让你的心得到归属感',
          info: {
            roomNum: 1,
            person: 2,
            address: '新华广场/呼和浩特站',
          },
          price: '168',
        },
        {
          id: '003',
          src:
            'http://p1.meituan.net/iphoenix/ffe63925a57bc51352670005bb94211e2514591.jpg@740w_416h_1e_1c',
          title:
            '『 周年庆 』【B香奈儿】博尔顿广场/投影美宿/万达广场/维多利摩尔城/迈阿密/呼和浩特体育活动中心/春度廉政文化公园',
          info: {
            roomNum: 1,
            person: 2,
            address: '长乐宫万达',
          },
          price: '208',
        },
        {
          id: '004',
          src:
            'https://img.meituan.net/phoenix/7f4a77407962233e1c71143dcbb04dab1791125.jpg@740w_416h_1e_1c',
          title: '怡居客民宿',
          info: {
            roomNum: 1,
            person: 2,
            address: '南区',
          },
          price: '148',
        },
        {
          id: '005',
          src:
            'https://img.meituan.net/phoenix/554bafc76f237a1617202bb572115a99188016.jpg@740w_416h_1e_1c',
          title: '【Home·简】呼和浩特东站旁民宿',
          info: {
            roomNum: 1,
            person: 6,
            address: '白塔机场/火车东站',
          },
          price: '169',
        },
        {
          id: '006',
          src:
            'http://p0.meituan.net/iphoenix/2fd6a0bc32b2e08af044f24bd4a39573259326.jpg@740w_416h_1e_1c',
          title:
            '『 周年庆 』【B日式】博尔顿广场/投影美宿/万达广场/维多利摩尔城/迈阿密/呼和浩特体育活动中心/春度廉政文化公园',
          info: {
            roomNum: 1,
            person: 2,
            address: '长乐宫万达',
          },
          price: '268',
        },
      ],
    };
  },
  methods: {
    changeActive(e) {
      const { type } = e.target.dataset;
      this.kind = type;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/index/recommend.scss';
</style>
