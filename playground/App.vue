<template>
  <div style="margin: 20px;">
    <select-play></select-play>
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
  import RadioGroup from './components/radio-group.vue'
  import Checkbox from './components/checkbox.vue'
  import CheckboxGroup from './components/checkbox-group.vue'
  import Badge from './components/badge.vue'
  import Select from './components/select.vue'
  import Card from './components/card.vue'
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
      RadioPlay: Radio,
      RadioGroupPlay: RadioGroup,
      CheckboxPlay: Checkbox,
      CheckboxGroupPlay: CheckboxGroup,
      BadgePlay: Badge,
      SelectPlay: Select,
      CardPlay: Card
    }
  }
</script>
