<template>
  <div class="registered">
    <header class="clearfix">
      <div class="utils-wrap">
        <div class="logo">
          <a href="/"></a>
        </div>
        <div class="login">
          <span>已有美团账号？</span>
          <el-button @click="handleClick">登陆</el-button>
        </div>
      </div>
    </header>
    <main>
      <div class="utils-wrap">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" class="password">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              @input="changeInput"
            ></el-input>
            <div class="checkBox">
              <div :class="['bg',level]"></div>
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm('ruleForm')">同意以下协议并注册</el-button>
          </el-form-item>
        </el-form>
        <p>
          <span>《美团点评用户服务协议》</span>
          <span>《美团点评隐私政策》</span>
        </p>
      </div>
    </main>
    <footer>
      <p class="utils-wrap">©meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    const validateUser = (rule, value, callback) => {
      const uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else if (!uPattern.test(value)) {
        callback(new Error('请输入用户名格式为4到16位（字母，数字，下划线）'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      const pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (!pPattern.test(value)) {
        callback(new Error('密码必须为6-16位的字母数字或下划线组成'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      level: '',
      ruleForm: {
        userName: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        userName: [{ validator: validateUser, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api
            .setRegister({
              userName: this.ruleForm.userName,
              password: this.ruleForm.pass,
              rePassword: this.ruleForm.checkPass,
            })
            .then((res) => {
              console.log(res);
              if (res.status === 'success') {
                alert(res.msg);
                setTimeout(() => {
                  this.$router.push({ name: 'login' });
                }, 200);
              } else {
                alert(res.msg);
              }
            });
          return true;
        }
        alert('信息填写不完整！');
        return false;
      });
    },
    changeInput() {
      const pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[_]).*$/;
      const pPattern2 = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z]).*$/;
      if (pPattern.test(this.ruleForm.pass)) {
        this.level = 'strong';
      } else if (pPattern2.test(this.ruleForm.pass)) {
        this.level = 'normal';
      } else if (this.ruleForm.pass === '') {
        this.level = '';
      } else {
        this.level = 'week';
      }
    },
    handleClick() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/css/registered/registered.scss';
</style>
