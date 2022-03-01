import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueClipboard from 'vue-clipboard2'
import VueRouter from 'vue-router'
import router from './routers'
import store from './store';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.use(Vuex);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueClipboard)
Vue.use(VueRouter)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')