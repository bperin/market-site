import { defineStore } from 'pinia'
import forge from 'node-forge'

export const useKeyStore = defineStore('keyStore', {
  state: () => ({
    rsaPublicKey: null,
    rsaPrivateKey: null
  }),
  actions: {
    async generateNewPrivateKey() {
      return new Promise((resolve, reject) => {
        forge.pki.rsa.generateKeyPair({ bits: 4096 }, (err, keypair) => {
          if (err) {
            reject(err)
            console.error(err)
          } else {
            this.rsaPrivateKey = forge.pki.privateKeyToPem(keypair.privateKey)
            this.rsaPublicKey = forge.pki.publicKeyToPem(keypair.publicKey)
            resolve()
          }
        })
      })
    },

    setPrivateKey(privateKey) {
      try {
        this.rsaPrivateKey = forge.pki.privateKeyFromPem(privateKey)
        // Assuming publicKey can be derived/set here correctly or obtained through another method
        console.log('Public key operation needs proper implementation based on context')
      } catch (error) {
        console.error('Error setting private key:', error)
      }
    },

    updatePublicKey() {
      // Placeholder for logic to update the public key on the server side
    }
  }
})
