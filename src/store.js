import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  data: null,
};

const mutations = {
  CHANGE_DATA(state, payload) {
    console.log(payload);
    state.data = null;
  },
};

const actions = {
  changeData({ commit }, args) {
    commit('CHANGE_DATA', args);
  },
};

const getters = {
  data: state => state.data,
};

const store = {
  state,
  mutations,
  actions,
  getters,
};

export default store;
