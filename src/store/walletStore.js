import { defineStore } from 'pinia'

export const useWalletStore = defineStore('walletStore', {
  state: () => ({
    connected: false,
    address: null
  })
})
