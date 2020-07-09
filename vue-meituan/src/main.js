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

Vue.directive('show-selector-list', {
  bind(el, binding) {
    const { value } = binding;

    document.addEventListener('click', () => {
      value();
    });
  },
});

Vue.directive('fixed', {
  bind(el, bindin, vnode) {
    const { elm } = vnode;
    window.onscroll = () => {
      const { scrollTop } = document.documentElement;
      if (scrollTop > 215) {
        elm.style.position = 'fixed';
        elm.style.top = '0';
      } else {
        elm.style.position = 'relative';
      }
    };
  },
});

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
