<template>
  <div class="login">
    <header class="utils-wrap">
      <div class="logo">
        <a href="/"></a>
      </div>
    </header>
    <main class="utils-wrap clearfix">
      <div class="login-banner">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
      </div>
      <div class="form">
        <div class="prompt" v-if="promptWord">
          <i class="el-icon-remove"></i>
          <span>{{promptWord}}</span>
        </div>
        <p class="form-title">
          <span>账号登陆</span>
          <span>
            手机动态码登陆
            <i class="el-icon-mobile-phone"></i>
          </span>
        </p>
        <el-input placeholder="请输入内容" type="text" prefix-icon="el-icon-user" v-model="userName" />
        <el-input
          placeholder="请输入密码"
          type="password"
          prefix-icon="el-icon-view"
          v-model="password"
        />
        <p class="back-pwd clearfix">
          <span>忘记密码?</span>
        </p>
        <el-button @click="handleClick">登陆</el-button>
        <p class="login-registered">
          <span>还没有账号?</span>
          <a href="/blank/registered">免费注册</a>
        </p>
        <p class="firend">
          <span class="qq"></span>
          <span class="xl"></span>
        </p>
      </div>
    </main>
    <footer class="utils-wrap">
      <ul class="clearfix">
        <li v-for="(item,index) in footerList" :key="index">{{ item }}</li>
      </ul>
      <p>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
      promptWord: '',
      footerList: ['关于美团', '加入我们', '商家入驻', '帮助中心', '美团手机版'],
    };
  },
  methods: {
    handleClick() {
      if (this.userName === '') {
        this.promptWord = '输入用户名为空';
        return false;
      }
      if (this.password === '') {
        this.promptWord = '输入密码为空';
        return false;
      }
      this.$api
        .setLogin({
          userName: this.userName,
          password: this.password,
        })
        .then((res) => {
          if (res.status === 'success') {
            alert(res.msg);
            setTimeout(() => {
              this.$router.push('/');
              this.$store.dispatch('setMutationUserName', this.userName);
            }, 200);
          } else {
            alert(res.msg);
          }
        });
      return true;
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/login/login.scss';
</style>
