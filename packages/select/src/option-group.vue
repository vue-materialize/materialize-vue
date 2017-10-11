<template>
  <div class="optgroup-wrap">
    <li class="optgroup">
      <span>{{label}}</span>
    </li>
    <slot></slot>
  </div>
</template>

<script>
  import Emitter from 'mvui/src/mixins/emitter'
  export default {
    mixins: [Emitter],
    name: 'MvOptionGroup',
    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }

</script>

