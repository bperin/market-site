<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
       <li class="nav-item">
         
        <sidenav-item url="/keygenerator" :class="getRoute() === '' ? 'keygen' : ''" :navText="'Keygen'">
         <i class="icon loader-2"></i>
        </sidenav-item>
      </li>
      <li class="nav-item">
          <i class="icon icon-triangle-warning-2 text-white text-sm opacity-10"></i>
        <sidenav-item url="/" :class="getRoute() === '' ? 'active' : ''" :navText="'Dashboard'">
          <template v-slot:icon>
             <i class="icon loader-2"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/tables" :class="getRoute() === 'tables' ? 'active' : ''" :navText="'Tables'">
          <template v-slot:icon>
            <i class="ni ni-calendar-grid-58 text-white text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/billing" :class="getRoute() === 'billing' ? 'active' : ''" :navText="'Billing'">
          <template v-slot:icon>
            <i class="ni ni-credit-card text-white text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="nav-item">
        <sidenav-item url="/profile" :class="getRoute() === 'profile' ? 'active' : ''" :navText="'Profile'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-white text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/signin" :class="getRoute() === 'signin' ? 'active' : ''" :navText="'Sign In'">
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-white text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/signup" :class="getRoute() === 'signup' ? 'active' : ''" :navText="'Sign Up'">
          <template v-slot:icon>
            <i class="ni ni-collection text-white text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>
  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card :class="cardBg" textPrimary="Need Help?" textSecondary="Please check our docs" />
  </div>
</template>
<script>
import SidenavItem from './SidenavItem.vue'
import SidenavCard from './SidenavCard.vue'

export default {
  name: 'SidenavList',
  props: {
    cardBg: String
  },
  data() {
    return {
      title: 'TradeCraft.eth',
      controls: 'dashboardsExamples',
      isActive: 'active'
    }
  },
  components: {
    SidenavItem,
    SidenavCard
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split('/')
      return routeArr[1]
    }
  }
}
</script>
