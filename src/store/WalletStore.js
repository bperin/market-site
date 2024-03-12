import { defineStore } from 'pinia'
import { useMetaMaskWallet } from 'vue-connect-wallet'

export const useWalletStore = defineStore('walletStore', {
  state: () => ({
    walletAddress: null,
    walletConnected: false
  }),
  actions: {
    async connectWallet() {
      const wallet = useMetaMaskWallet()
      try {
        await wallet.connect()
        if (wallet.isConnected.value) {
          this.walletAddress = wallet.account.value
          this.walletConnected = true
          console.log('Wallet is connected: ' + this.walletAddress)
        }
      } catch (error) {
        console.error('Error connecting to MetaMask:', error)
      }
    }
  }
})
