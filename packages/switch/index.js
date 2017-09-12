import Switch from './src/main'

Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch)
}

export default Switch
