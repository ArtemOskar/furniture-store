import { createStore } from 'vuex'
import doorsModule from './doors'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    doors: doorsModule,
  },
})
