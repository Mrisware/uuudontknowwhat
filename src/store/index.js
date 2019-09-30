import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let isLogin = false
try {
  if (localStorage && localStorage.isLogin) {
    isLogin = localStorage.isLogin
  }
} catch (e) {}

const store = new Vuex.Store({
  state: {
    isLogin: isLogin
  },
  mutations: {
    login: function (state, peyload) {
      state.isLogin = peyload.isLogin
      localStorage.isLogin = peyload.isLogin
    },
    logout: function (state) {
      state.isLogin = false
      localStorage.isLogin = false
    }
  }
})

export default store
