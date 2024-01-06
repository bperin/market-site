<template>
  <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" :class="this.$store.state.isRTL ? 'top-0 position-sticky z-index-sticky' : ''" v-bind="$attrs" id="navbarBlur" data-scroll="true">
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" textWhite="text-white" />

      <div class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4" :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'" id="navbar">
        <div class="pe-md-3 d-flex align-items-center" :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'">
          <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input type="text" class="form-control" :placeholder="this.$store.state.isRTL ? 'أكتب هنا...' : 'Type here...'" />
          </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <router-link :to="{ name: 'Signin' }" class="px-0 nav-link font-weight-bold text-white" target="_blank">
              
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from '../Breadcrumbs.vue'

export default {
  name: 'navbar',
  data() {
    return {
      showMenu: false
    }
  },
  props: ['minNav', 'textWhite'],
  created() {
    this.minNav
  },
  methods: {
    toggleSidebar() {}
  },
  components: {
    Breadcrumbs
  },
  computed: {
    currentRouteName() {
      return this.$route.name
    }
  }
}
</script>
