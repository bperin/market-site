<template>
  <div class="landing-bg h-100 bg-gradient-primary position-fixed w-100"></div>
  <sidenav class="fixed-start" />
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <!-- nav -->
    <navbar :class="[navClasses]" :textWhite="true ? 'text-white opacity-8' : 'text-white'" :minNav="navbarMinimize" v-if="true" />
    <router-view />
    <app-footer v-show="true" />
  </main>
</template>
<script>
import Sidenav from '@/examples/Sidenav/index.vue'
import Navbar from '@/examples/Navbars/Navbar.vue'
import AppFooter from '@/examples/Footer.vue'
import { activateDarkMode, deactivateDarkMode } from '@/assets/js/dark-mode'

export default {
  name: 'App',
  components: {
    Sidenav,
    Navbar,
    AppFooter
  },
  methods: {},
  computed: {
    navClasses() {
      return { 
        'position-sticky bg-default left-auto top-2 z-index-sticky':true
      }
    }
  },
  beforeMount() {
    activateDarkMode()
  }
}
</script>
