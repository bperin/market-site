import { defineStore } from 'pinia'
import { useMetaMaskWallet } from 'vue-connect-wallet'
import forge from 'node-forge'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    rsaPublicKey: null,
    rsaPrivateKey: null,
    walletAddress: null,
    walletConnected: false,
    userLoggedIn: false,
    user: {}
  }),
  actions: {
    async generateNewPrivateKey() {
      return new Promise((resolve, reject) => {
        forge.pki.rsa.generateKeyPair({ bits: 4096 }, (err, keypair) => {
          if (err) {
            reject(err)
            console.log(error)
          } else {
            this.rsaPrivateKey = forge.pki.privateKeyToPem(keypair.privateKey)
            this.rsaPublicKey = forge.pki.publicKeyToPem(keypair.publicKey)
            resolve()
          }
        })
      })
    },

    async connectWallet() {
      const wallet = useMetaMaskWallet()
      try {
        await wallet.connect()
        if (wallet.isConnected.value) {
          this.walletAddress = wallet.account.value
          this.walletConnected = true
          console.log('wallet is connected: ' + this.walletAddress)
        }
      } catch (error) {
        console.error('Error connecting to MetaMask:', error)
      }
    },

    async login() {},

    setPrivateKey(privateKey) {
      try {
        this.rsaPrivateKey = forge.pki.privateKeyFromPem(privateKey)
        this.rsaPublicKey = forge.pki.publicKeyToPem(this.rsaPrivateKey)
        console.log('Derived public key restored: ' + this.rsaPublicKey)
      } catch (error) {
        console.error('Error setting private key:', error)
      }
    },

    updatePublicKey() {
      // Logic to update the public key on the server side
    }
  }
})
