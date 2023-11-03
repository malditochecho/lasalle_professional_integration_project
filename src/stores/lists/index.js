import { defineStore } from 'pinia'

import actions from './actions'

export const useListsStore = defineStore('ListsStore', {
  state: () => {
    return {
      items: []
    }
  },
  getters: {},
  actions
})
