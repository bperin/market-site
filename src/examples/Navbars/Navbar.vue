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
import { useEthereumStore, useEthereumStore } from '@/store/EthereumStore'
import { toast } from 'vue3-toastify'

export default {
  name: 'navbar',
  components: {
    Breadcrumbs,
    ConnectWalletButton
  },
  setup() {
    const useEthereumStore = useEthereumStore()
    const wallet = useMetaMaskWallet()
    const address = ref('0x00')

    return {useEthereumStore, wallet, address}

    
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    currentRouteName() {
      console.log('current route:  +', this.$route.name)
      return this.$route.name
    }
  }
}
</script>