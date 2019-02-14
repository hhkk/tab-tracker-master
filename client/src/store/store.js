import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// Do not mutate vuex store state outside mutation handlers
// https://github.com/nuxt/nuxt.js/issues/1917
// export const strict = false

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    hbkstate: false,
    counterhbkState: 100,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    setcounterhbkState3 (state, incrx) {
      state.counterhbkState = state.counterhbkState + incrx
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setcounterhbkState ({commit}, incrx) {
      commit('setcounterhbkState3', incrx)
    }
  }
})
