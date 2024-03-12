<template>
  <div class="container mt-5">
    <div class="card p-3">
      <div class="row">
        <div class="col-4">
          <argon-input icon="ni ni-check-bold" placeholder="-----BEGIN PRIVATE KEY-----" size="lg" :value="authStore.rsaPrivateKey" />
        </div>
        <div class="col-4">
          <argon-input icon="ni ni-check-bold" placeholder="-----BEGIN PUBLIC KEY-----" size="lg" :value="authStore.rsaPublicKey" />
        </div>
      </div>
      <div class="row">
        <div class="col-8 mt-2 mb-2">
          <argon-button fullWidth="true" @click="setPrivateKey" color="secondary" size="md" variant="fill">Set</argon-button>
        </div>
      </div>
      <div class="row">
        <div class="col-3 mt-4">
          <argon-button fullWidth="true" @click="generateRSAKeys" color="warning" size="md" variant="fill">Generate New RSA Keys</argon-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import ArgonButton from '@/components/ArgonButton.vue'
import ArgonInput from '@/components/ArgonInput.vue'
import setNavPills from '@/assets/js/nav-pills.js'
import NavPill from './components/NavPill.vue'
import { useAuthStore } from '../store/AuthStore.js'
import { encryptString, decryptString } from '../utils/encrypt.js'

export default {
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
  components: {
    ArgonButton,
    NavPill,
    ArgonInput
  },
  name: 'Keygenerator',
  data() {
    return {
      activeTab: 'privateKey'
    }
  },
  mounted() {
    setNavPills()
  },
  methods: {
    setPrivateKey()  {
      this.authStore.setPrivateKey()
    },
    async generateRSAKeys() {
      await this.authStore.generateNewPrivateKey()
      toast.dark('Keys generated', {
        autoClose: 3000
      })
    }
  }
}
</script>
../store/KeyStore.js