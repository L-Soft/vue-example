import { createStore } from 'vuex';

const store = new createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    getCount: (state) => state.count,
  },
  mutations: {
    increment: state => state.count += 1,
  },
  actions: {
    increment: ({commit}) => commit('increment'),
  }
});

export default store;
