import OptionGroup from '../select/src/option-group'

OptionGroup.install = function (Vue) {
  Vue.component(OptionGroup.name, OptionGroup)
}

export default OptionGroup
