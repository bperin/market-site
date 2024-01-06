import { defineStore } from 'pinia'

export const useKeyStore = defineStore('keyStore', {
  state: () => ({
    publicKey: null,
    privateKey: null,
  })
})
