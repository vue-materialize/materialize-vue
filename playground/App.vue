<template>
  <div style="margin: 20px;">
    <breadcrumb-play></breadcrumb-play>
  </div>
</template>
<script>
  import Button from './components/button.vue'
  import Icon from './components/icon.vue'
  import Row from './components/row.vue'
  import Col from './components/col.vue'
  import Breadcrumb from './components/breadcrumb.vue'
  export default {
    components: {
      ButtonPlay: Button,
      IconPlay: Icon,
      RowPlay: Row,
      ColPlay: Col,
      BreadcrumbPlay: Breadcrumb
    }
  }
</script>
