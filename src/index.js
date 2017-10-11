/* Automatic generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js'
import Icon from '../packages/icon/index.js'
import Row from '../packages/row/index.js'
import Col from '../packages/col/index.js'
import Switch from '../packages/switch/index.js'
import Breadcrumb from '../packages/breadcrumb/index.js'
import BreadcrumbItem from '../packages/breadcrumb-item/index.js'
import Input from '../packages/input/index.js'
import Chip from '../packages/chip/index.js'
import Radio from '../packages/radio/index.js'
import RadioGroup from '../packages/radio-group/index.js'
import Checkbox from '../packages/checkbox/index.js'
import CheckboxGroup from '../packages/checkbox-group/index.js'
import Badge from '../packages/badge/index.js'
import Select from '../packages/select/index.js'
import Option from '../packages/option/index.js'
import OptionGroup from '../packages/option-group/index.js'
import Card from '../packages/card/index.js'
import Pagination from '../packages/pagination/index.js'

const components = [
  Button,
  Icon,
  Row,
  Col,
  Switch,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Chip,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Badge,
  Select,
  Option,
  OptionGroup,
  Card,
  Pagination
]

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.0',
  install,
  Button,
  Icon,
  Row,
  Col,
  Switch,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Chip,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Badge,
  Select,
  Option,
  OptionGroup,
  Card,
  Pagination
}
