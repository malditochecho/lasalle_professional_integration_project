import { defineStore } from 'pinia'

import actions from './actions'
import getters from './getters'

export const useAuthStore = defineStore('AuthStore', {
  state: () => {
    return {
      user: null
    }
  },
  getters,
  actions
})
