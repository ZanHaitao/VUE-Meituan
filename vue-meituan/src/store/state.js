import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    position: '北京',
  },
  getters: {

  },
  mutations: {
    changePosition(state, val) {
      state.position = val;
    },
  },
  actions: {
    setChangePostiton(context, val) {
      context.commit('changePosition', val);
    },
  },
});
