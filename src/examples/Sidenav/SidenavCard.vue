<template>
  <div v-show="'landing'" class="card card-plain shadow-none" id="sidenavCard">
    <div class="p-3 card-body text-center w-100 pt-0">
      <img class="w-50 mx-auto" src="@/assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration" />
    
    </div>
  </div>
</template>
<script>


export default {
  name: 'sidenav-card',
  props: ['textPrimary', 'textSecondary', 'iconClass'],
  data() {
    return {
  
    }
  }
}
</script>
