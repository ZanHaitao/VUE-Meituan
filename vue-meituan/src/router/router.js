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
    ],
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
