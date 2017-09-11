// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './route.config'
import Mvui from 'main/index.js'
import 'packages/theme-default/src/index.scss'
import SideNav from './components/side-nav.vue'
import FooterNav from './components/footer-nav.vue'
import DemoBlock from './components/demo-block.vue'

Vue.use(Mvui)
Vue.use(VueRouter)
Vue.component('side-nav', SideNav)
Vue.component('footer-nav', FooterNav)
Vue.component('demo-block', DemoBlock)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
