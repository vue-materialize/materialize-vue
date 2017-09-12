<template>
  <div class="mv-breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'MvBreadcrumb',

    componentName: 'MvBreadcrumb',

    props: {
      separator: String
    }
  }
</script>
