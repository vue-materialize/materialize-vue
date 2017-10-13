<template>
  <div class="optgroup-wrap">
    <li class="optgroup">
      <span>{{label}}</span>
    </li>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MvOptionGroup',

    componentName: 'MvOptionGroup',

    props: {
      label: String,
      disabled: Boolean
    }
  }
</script>

