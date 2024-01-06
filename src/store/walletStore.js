import { defineStore } from 'pinia'

export const useAuthStore = defineStore('walletStore', {
  state: () => ({
    walltedConneted: false,
    publicAddress: null
  })
})
