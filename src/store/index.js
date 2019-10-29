import Vue from 'vue'
import Vuex from 'vuex'
import $axios from '../axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trades: [],
    error: undefined,
    loading: false
  },
  mutations: {
    SET_TRADES(state, trades) {
      state.trades = trades
    },
    ERROR(state, error) {
      state.error = error
    },
    LOADING(state, status) {
      state.loading = status
    }
  },
  actions: {
    getTrades({ commit, state }, route) {
      state.loading = true
      $axios.get(route).then(result => {
        state.loading = false
        commit('SET_TRADES', result.data.trades)
      }).catch(error => {
        state.loading = false
        commit('ERROR', error)
      })
    }
  },

  getters: {
    trades: state => state.trades,
    loading: state => state.loading,
    error: state => state.error,
  }
})
