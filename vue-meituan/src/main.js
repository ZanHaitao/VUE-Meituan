import Vue from 'vue';
import Element from 'element-ui';
import App from './App.vue';
import store from './store/state';
import router from './router/router';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css';
import '@/assets/css/utils.css';
import '@/assets/css/font.css';

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
