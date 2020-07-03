import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    comment: () => import()
  }
]

export default new VueRouter({
  mode: history,
  routes,
})