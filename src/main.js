import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ArgonDashboard from './argon-dashboard'

import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import 'vue-connect-wallet/dist/style.css'

const appInstance = createApp(App)
appInstance.use(createPinia())
appInstance.use(router)
appInstance.use(ArgonDashboard)
appInstance.mount('#app')
