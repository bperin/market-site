import { defineStore } from 'pinia'
import { watch } from 'vue'

// Define the store
export const useWalletStore = defineStore('walletStore', {
  state: () => ({
    connected: false,
    address: "0x00"
  })
 
})
function logStateChanges(store) {
  watch(
    () => store.$state, 
    (newState, oldState) => {
      console.log('State changed:', oldState, '->', newState)
    },
    { deep: true }
  )
}
