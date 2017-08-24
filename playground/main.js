import Vue from 'vue'
import Mvui from 'main/index.js'
import App from './App.vue'
// import ''

Vue.use(Mvui)

new Vue({
  template: '<App/>',
  components: {
    App
  }
}).$mount('#app')
