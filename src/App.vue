<template>
  <div class="landing-bg h-100 bg-gradient-primary position-fixed w-100"></div>
  <sidenav class="fixed-start" />
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <!-- nav -->
    <navbar class="text-white opacity-8 position-sticky bg-default left-auto top-2 z-index-sticky" :minNav="navbarMinimize" />
    <router-view />
    <app-footer />
  </main>
</template>

<script>
import Sidenav from '@/examples/Sidenav/index.vue'
import Navbar from '@/examples/Navbars/Navbar.vue'
import AppFooter from '@/examples/Footer.vue'
import { activateDarkMode } from '@/assets/js/dark-mode'

export default {
  name: 'App',
  components: {
    Sidenav,
    Navbar,
    AppFooter
  },
  beforeMount() {
    activateDarkMode()
  }
}
</script>

<!-- Add "scoped" if these styles are specific to App.vue -->
<style>
/* Your CSS here */
</style>
