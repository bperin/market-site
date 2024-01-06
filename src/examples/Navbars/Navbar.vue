<template>
  <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl top-0 position-sticky z-index-sticky card" id="navbarBlur" data-scroll="true">
    <div class="px-3 py-1 container-fluid">
      <div class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4 me-sm-4" id="navbar">
        <breadcrumbs :currentPage="currentRouteName" textWhite="text-white" />
        <div class="pe-md-3 d-flex align-items-center ms-md-auto"></div>
        <ul class="navbar-nav justify-content-end">
          <ConnectWalletButton :address="address" id="connectButton" :txnCount="0" :dark="false" @click="connect" class="" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue'
import Breadcrumbs from '../Breadcrumbs.vue'
import { ConnectWalletButton, useMetaMaskWallet } from 'vue-connect-wallet'
import { useWalletStore } from '../../store/WalletStore.js'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  name: 'navbar',
  components: {
    Breadcrumbs,
    ConnectWalletButton
  },
  setup() {
    const walletStore = useWalletStore()
    const wallet = useMetaMaskWallet()
    const address = ref('0x00')

    wallet.onAccountsChanged((accounts) => {
      const a = accounts[0]
      console.log('on account changed to: ', a)
      walletStore.address = a
      address.value = a
    })

    wallet.onChainChanged((chainId) => {
      console.log('chain changed to:', chainId)
    })

    const connect = async () => {
      const accounts = await wallet.connect()
      if (typeof accounts === 'string') {
        console.log('An error occurred' + accounts)
      } else {
        const a = accounts[0]
        console.log('connect to: ', a)
        walletStore.address = a
        address.value = a
        toast.dark('Wallet Connected: ' + a, {
          autoClose: 3000
        })
      }
    }

    const switchAccount = async () => {
      await wallet.switchAccounts()
      connect()
    }

    const isConnected = async () => {
      const accounts = await wallet.getAccounts()
      walletStore.connected = typeof accounts !== 'string' && accounts.length > 0
    }

    onMounted(() => {})

    return { address, connect, switchAccount, isConnected }
  },
  data() {
    return {
     
    }
  },
  methods: {

  },
  computed: {
    currentRouteName() {
      console.log('current route:  +', this.$route.name);
      return this.$route.name
    }
  }
}
</script>
