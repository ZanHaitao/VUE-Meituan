import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultPage from '@/layout/default.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: () => import('@/layout/blank.vue'),
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
