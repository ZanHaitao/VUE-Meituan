<template>
  <div class="banner">
    <el-row>
      <el-col :span="24">
        <banner-nav />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14">
        <banner-slider />
      </el-col>
      <el-col :span="4">
        <div class="pic-1"></div>
      </el-col>
      <el-col :span="6">
        <div class="login-container">
          <div class="portrait">
            <img
              v-if="!$store.state.userName"
              src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
              alt
            />
            <img v-else src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png" alt />
          </div>
          <p>{{$store.state.userName === '' ? 'Hi！你好' : $store.state.userName}}</p>
          <p v-if="!$store.state.userName">
            <router-link :to="{name:'registered'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p v-if="!$store.state.userName">
            <router-link :to="{name:'login'}">
              <el-button round>立即登录</el-button>
            </router-link>
          </p>
          <p class="list" v-if="$store.state.userName">
            <img src="https://s1.ax1x.com/2020/07/11/UQXwhF.png" />
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="pic-2"></div>
      </el-col>
      <el-col :span="7">
        <div class="pic-3"></div>
      </el-col>
      <el-col :span="4">
        <div class="pic-4"></div>
      </el-col>
      <el-col :span="6">
        <div class="app-download">
          <p>
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt />
          </p>
          <p>美团APP手机版</p>
          <p class="sl">
            <span>1元起</span>
            吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BannerNav from './BannerNav.vue';
import BannerSlider from './BannerSlider.vue';

export default {
  components: {
    BannerNav,
    BannerSlider,
  },
};
</script>
