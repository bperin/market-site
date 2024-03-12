import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Signin from '../views/Signin.vue'
import Keygenerator from '../views/Keygenerator.vue'
import Users from '../views/Users.vue'
import Vendors from '../views/Vendors.vue'
import Affiliates from '../views/Affiliates.vue'
import UserAbout from '../views/UserAbout.vue'
import VendorAbout from '../views/VendorAbout.vue'
import AffiliateAbout from '../views/AffiliateAbout.vue'
import UserProfile from '../views/UserProfile.vue' // Assuming you have a UserProfile component

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/keygenerator',
    name: 'Keygenerator',
    component: Keygenerator
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/users/:id/about',
    name: 'UserAbout',
    component: UserAbout
  },
  {
    path: '/vendors',
    name: 'Vendors',
    component: Vendors
  },
  {
    path: '/vendors/:id/about',
    name: 'VendorAbout',
    component: VendorAbout
  },
  {
    path: '/affiliates',
    name: 'Affiliates',
    component: Affiliates
  },
  {
    path: '/affiliates/:id/about',
    name: 'AffiliateAbout',
    component: AffiliateAbout
  },
  {
    path: '/profile/:id', // Dynamic route for user profiles
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
