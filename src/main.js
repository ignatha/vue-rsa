import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import router from './routers'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.use(VueClipboard)

app.mount('#app')
