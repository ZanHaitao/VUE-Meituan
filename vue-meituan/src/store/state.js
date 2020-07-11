import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    position: '北京',
    userName: '',
  },
  mutations: {
    changePosition(state, val) {
      state.position = val;
    },
    setUserName(state, val) {
      state.userName = val;
    },
  },
  actions: {
    setChangePostiton(context, val) {
      context.commit('changePosition', val);
    },
    setMutationUserName(context, val) {
      context.commit('setUserName', val);
    },
  },
});
