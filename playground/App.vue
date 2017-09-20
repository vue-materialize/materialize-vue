<template>
  <div style="margin: 20px;">
    <radio-play></radio-play>
  </div>
</template>
<script>
  import Button from './components/button.vue'
  import Icon from './components/icon.vue'
  import Row from './components/row.vue'
  import Col from './components/col.vue'
  import Switch from './components/switch.vue'
  import Breadcrumb from './components/breadcrumb.vue'
  import BreadcrumbItem from './components/breadcrumb-item.vue'
  import Input from './components/input.vue'
  import Chip from './components/chip.vue'
  import Radio from './components/radio.vue'
  export default {
    components: {
      ButtonPlay: Button,
      IconPlay: Icon,
      RowPlay: Row,
      ColPlay: Col,
      SwitchPlay: Switch,
      BreadcrumbPlay: Breadcrumb,
      BreadcrumbItemPlay: BreadcrumbItem,
      InputPlay: Input,
      ChipPlay: Chip,
      RadioPlay: Radio
    }
  }
</script>
