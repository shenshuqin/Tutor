import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建vuex实例
const store = new Vuex.Store({
  state: {
    userData: {
      'job': {}
    }
  },
  getters: {

  },
  mutations: {
    setValue (state, job) {
      state.userData.job = job
    }
  },
  actions: {

  }
})
export default store // 导出store
