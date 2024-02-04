<template>
  <aside class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl fixed-start ms-3 bg-gradient-primary" id="sidenav-main">
    <div class="sidenav-header">
      <router-link class="m-0 navbar-brand" to="/">
        <h4>TradeCraft.eth</h4>
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
  props: ['custom_class']
}
</script>
