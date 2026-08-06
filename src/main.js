import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import global CSS
import '../assets/css/main.css'
import '../assets/css/responsive.css'
import '../assets/lib/crumbs.css'
import '../assets/icon/crumbsicon.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
