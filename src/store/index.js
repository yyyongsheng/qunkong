import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  mutations: {
    ["SET_USER_INFO"](state, userInfo) {
      state.userInfo = userInfo
    },
  },
  actions: {

  },
  getters:{
    userInfo: state => state.userInfo,
  },
  modules: {

  }
})
