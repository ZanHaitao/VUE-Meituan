import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultPage from '@/layout/default.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/page/index.vue'),
      },
      {
        path: '/changecity',
        name: 'changeCity',
        component: () => import('@/page/changeCity.vue'),
      },
      {
        path: '/goodslist/:name',
        name: 'goodslist',
        component: () => import('@/page/goodsList.vue'),
      },
    ],
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: () => import('@/layout/blank.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/layout/login.vue'),
      },
      {
        path: 'registered',
        name: 'registered',
        component: () => import('@/layout/registered.vue'),
      },
    ],
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
