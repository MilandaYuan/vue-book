import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'

Vue.use(Vuex)
const state = {cartList:[]}
import getters from './getter'
import mutations from './mutations'


export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [logger],
  strict: true
})
