// src/stores/ethereumStore.js
import { defineStore } from 'pinia'
import { ethers } from 'ethers'

export const useEthereumStore = defineStore('ethereumStore', {
  state: () => ({
    provider: null,
    currentAccount: null,
    balance: '0'
  }),
  actions: {
    async connectToMetaMask() {
      if (window.ethereum) {
        try {
          this.provider = new ethers.providers.Web3Provider(window.ethereum)
          await this.provider.send('eth_requestAccounts', [])
          const signer = this.provider.getSigner()
          this.currentAccount = await signer.getAddress()
          this.fetchBalance()
        } catch (error) {
          console.error('Error connecting to MetaMask:', error)
        }
      } else {
        console.log('MetaMask is not installed!')
      }
    },
    async fetchBalance() {
      if (!this.currentAccount) return
      const balanceBigInt = await this.provider.getBalance(this.currentAccount)
      this.balance = ethers.utils.formatEther(balanceBigInt)
    }
  }
})
