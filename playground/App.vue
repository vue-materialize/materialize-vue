<template>
  <div style="margin: 20px;">
    <switch-play></switch-play>
  </div>
</template>
<script>
  import Button from './components/button.vue'
  import Icon from './components/icon.vue'
  import Row from './components/row.vue'
  import Col from './components/col.vue'
  import Switch from './components/switch.vue'
  export default {
    components: {
      ButtonPlay: Button,
      IconPlay: Icon,
      RowPlay: Row,
      ColPlay: Col,
      SwitchPlay: Switch
    }
  }
</script>
