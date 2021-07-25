import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 状態 Auth と状態 BoardをVuexのstateで一元管理できるよう定義する
const state = {
  auth: { // 状態 Auth
    token: null, // tokenはnullで初期化
    userId: null // userIdもnullで初期化
  },
  board: { // 状態 Board
    lists: [] // 状態 TaskList は空で初期化
  }
}

export default new Vuex.Store({
  state, // 定義したstateを stateオプションに指定
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
