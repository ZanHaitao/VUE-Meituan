import Vue from 'vue';
import App from './App.vue';
import store from './store/state'
import router from './router/router'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
