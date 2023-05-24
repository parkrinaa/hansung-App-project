import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import 'vue-search-select/dist/VueSearchSelect.css'

createApp(App).mount('#app')

const app = createApp(App)
app.use(router)
app.mount('#app')
