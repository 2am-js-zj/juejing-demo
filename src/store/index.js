import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
export default createStore({
  state: {
    profile: {
      token: '',
      username: 'zs',
      photo: '',
    }
  },
  getters: {
  },
  mutations: {
    setUser(state, payload) {
      state.profile = payload
    }
  },
  actions: {

  },
  modules: {
  },
  plugins: [
    // 默认存储在localstorage
    createPersistedstate({
      // 本地存储 key 名字
      key: 'juejin-demo',
      // 指定需要本地存储的模块
      paths: ['user']
    })
  ]
})
