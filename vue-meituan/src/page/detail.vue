<template>
  <div class="page-detail utils-wrap">
    <!-- 面包屑导航区域 -->
    <el-row>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>
          <router-link to="/">{{ $store.state.position }}美团</router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <router-link
            :to="{
            name:'goodslist',
            params:{name:'美食'}
            }"
          >{{ $store.state.position }}美食</router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ $store.state.position }}{{ $route.params.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>

    <!-- 商品展示区域 -->
    <el-row>
      <goods-detail :detailData="detailData" />
    </el-row>

    <el-row class="detail-content">
      <el-col class="detail-content-left" :span="19">
        <h3>商家团购及优惠</h3>
        <discounts-detail :detailData="detailData" />

        <h3>推荐菜</h3>
        <recommend-menu :menuList="detailData.recommend" />

        <detail-comment :commentData="detailData.comment" />
      </el-col>
      <el-col class="detail-content-right" :span="5">
        <div class="isLike">
          <is-like />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GoodsDetail from '@/components/detail/goodsDetail.vue';
import DiscountsDetail from '@/components/detail/discounts.vue';
import RecommendMenu from '@/components/detail/recommendMenu.vue';
import DetailComment from '@/components/detail/comment.vue';
import IsLike from '@/components/goodsList/isLike.vue';

export default {
  components: {
    GoodsDetail,
    IsLike,
    DiscountsDetail,
    RecommendMenu,
    DetailComment,
  },
  data() {
    return {
      detailData: {
        itemId: '2571323',
        title: '井格重庆火锅（哈西万达店）',
        imgUrl:
          'https://img.meituan.net/msmerchant/b34690f52ebdda221e4153c35878de8c2243192.jpg@380w_214h_1e_1c',
        type: 'food',
        score: 5,
        commentNum: 2555,
        comment: [
          {
            username: '匿名用户',
            image: 'https://www.dpfile.com/ugc/user/anonymous.png',
            rate: 5,
            pics: [
              'http://p0.meituan.net/shaitu/f6badcb973a93f821071f5abfe9fb96f1859101.jpg',
              'http://p0.meituan.net/shaitu/13ac474005a420562c3c46e1e381b9172789414.jpg',
            ],
            evalaute:
              '井格对我来说很熟悉，在北京的火锅我也只吃井格，没想到在哈尔滨也能遇见井格，古典而又复古的装修风格，菜品的摆盘非常的精致，和北京的没有区别，菜品的分量还是不错的，尤其是新西兰羔羊肉分量十足，第一份竟然有8两的分量，这是其他火锅店所没有的！然后就是服务，虽然人均不算太高，但是享受的服务确是贴切的，细微，细致，贴心这三个词语最适合不过了，还有最后要对他们家的经理郑金玉进行表扬，在她身上完全看不到一个经理的架子，和顾客还是很细心的在沟通，在服务过程中给我们安排了一个据说是他们家服务最好的110工号的来服务的我们，很满意，总体而言，对于这次用餐给予98分的评价，留2分让你们不要太骄傲，你们会越来越优秀，越来越好的！',
          },
        ],
        tab: ['重庆火锅', '哈西万达'],
        address: '南岗区中兴大街168号万达广场3层3055',
        phone: '0451-85717159',
        businessTime: '周一至周日 09:30-21:00',
        service: ['提供wifi'],
        recommend: [
          '现炸酥肉',
          '井格毛肚',
          '鲜牛黄喉',
          '鱼豆腐',
          '肥羊粉',
          '精选肥牛',
          '红糖糍粑',
          '新西兰羔羊',
          '酸梅汤',
          '干冰鸭肠',
          '小郡肝',
          '巴蜀牛肉',
          '重庆苕粉',
          '龙利鱼',
          '井格双脆',
          '井格虾滑',
          '平菇',
          '番茄鸳鸯锅',
          '豆皮',
          '竹笋',
          '井格老灶火锅',
          '井格三宝牛骨髓',
          '金针菇',
          '油碟',
          '手切羊肉',
          '鸭血',
          '大虾',
          '茼蒿',
          '菌汤',
          '鸳鸯锅',
          '麻团',
          '无骨凤爪',
          '蘸料',
          '蔬菜拼盘',
          '九宫格',
          '千层肚',
          '虾滑鱼滑组合',
          '牛上脑',
          '杏鲍菇',
          '大头菜',
          '香油',
          '藕片',
          '牛肚',
          '带籽籽乌',
        ],
        avgPrice: 95,
        dealItems: [
          {
            title: '100元代金券1张',
            price: 28.9,
            counterPrice: 100,
            saleNum: 3409,
            priceType: '元',
          },
          {
            title: '四人套餐，提供免费WiFi',
            price: 280,
            counterPrice: 458,
            saleNum: 152,
            priceType: '元',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/css/detail/index.scss';
</style>
