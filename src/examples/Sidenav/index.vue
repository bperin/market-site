<template>
  
  <aside class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl fixed-start ms-3 bg-gradient-primary" id="sidenav-main">
    <div class="sidenav-header">
      <i class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <router-link class="m-0 navbar-brand" to="/">
        <img src="@/assets/img/logo.png" class="navbar-brand-img h-100" alt="main_logo" />
       
      </router-link>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :cardBg="custom_class" />
  </aside>
</template>
<script>
import SidenavList from './SidenavList.vue'

export default {
  name: 'index',
  components: {
    SidenavList
  },
  data() {
    return {}
  },
  props: ['custom_class', 'layout']
}
</script>
