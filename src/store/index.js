import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 数据存放
  state: {
    user: {
      username: "",
      password: ""
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
