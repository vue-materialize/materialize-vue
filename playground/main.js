import Vue from 'vue'
import Mvui from 'main/index.js'
import App from './App.vue'
import 'packages/theme-default/src/index.scss'

Vue.use(Mvui)

new Vue({
  template: '<App/>',
  components: {
    App
  }
}).$mount('#app')
