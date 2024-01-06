import { defineStore } from 'pinia'

export const useAuthStore = defineStore('keyStore', {
  state: () => ({
    publicKey: null,
    privateKey: null,
  })
})
