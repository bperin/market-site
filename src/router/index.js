import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/routes/Dashboard.vue')
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
